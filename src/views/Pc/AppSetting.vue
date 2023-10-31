<template>
  <div class="app-setting">
    <Row>
      <Col :span="5">清空所有图标：</Col>
      <Col :span="5">
        <Popconfirm
          title="此操作将删除地图中所有图标，是否继续？"
          ok-text="确认"
          cancel-text="算了"
          @confirm="clearMarkerIcon"
        >
          <Button type="primary" size="small">清空</Button>
        </Popconfirm>
      </Col>
    </Row>

    <Row>
      <Col :span="6">重置所有图标位置：</Col>
      <Col :span="5">
        <Popconfirm
          title="此操作将重置地图中所有图标的位置，是否继续？"
          ok-text="确认"
          cancel-text="算了"
          @confirm="
            () => {
              resetMarkerIconPoint()
              message.success('已重置地图中所有图标的位置')
            }
          "
        >
          <Button type="primary" size="small">重置</Button>
        </Popconfirm>
      </Col>
    </Row>

    <Row>
      <Col :span="14">
        从
        <Select
          size="small"
          v-model:value="settingConfig.randomIcon.from"
          :options="[
            { label: '我的图标', value: 'myIcons' },
            { label: '全部图标', value: 'allIcons' },
          ]"
        />
        中，随机添加
        <Select
          size="small"
          v-model:value="settingConfig.randomIcon.count"
          :options="[
            { label: '10', value: 10 },
            { label: '20', value: 20 },
            { label: '30', value: 30 },
          ]"
        />
        个：
      </Col>
      <Col :span="5">
        <Popconfirm
          title="此操作将在地图中追加多个图标，是否继续？"
          ok-text="确认"
          cancel-text="算了"
          @confirm="addMarkerIcon"
        >
          <Button type="primary" size="small">添加</Button>
        </Popconfirm>
      </Col>
    </Row>

    <Row>
      <Col :span="9">
        开启背景音乐
        <Select
          size="small"
          v-model:value="settingConfig.music.selectIndex"
          :options="[
            { label: '曲目1', value: 0 },
            { label: '曲目2', value: 1 },
            { label: '曲目3', value: 2 },
          ]"
          @change="playMusic"
        />：
      </Col>
      <Col :span="5">
        <Switch
          checked-children="播放"
          un-checked-children="关闭"
          v-model:checked="settingConfig.music.open"
          @change="playMusic"
        />
      </Col>
    </Row>

    <Row>
      <Col :span="8">拖入或双击重置定位坐标点：</Col>
      <Col :span="5"
        ><img
          class="reset-positon-icon"
          src="/images/position.png"
          @dragend="setPosition"
          @dblclick="setPosition()"
        />
      </Col>
    </Row>

    <Row>
      <Col :span="8">
        导出地图配置便于分享
        <Popover>
          <template #content>
            地图中如果大于 50 个图标，建议“导出为文件”，<br />
            因为社交平台一般不允许发送太长的消息。
          </template>
          <i class="export-hint-icon">?</i> </Popover
        >：
      </Col>
      <Col :span="10">
        <Button size="small" @click="exportSettingConfig('clipboard')">导出至剪切板</Button>
        <Button size="small" @click="exportSettingConfig('file')">导出配置文件</Button>
      </Col>
    </Row>

    <Row>
      <Col :span="5">导入地图配置： </Col>
      <Col :span="10">
        <Popconfirm
          overlayClassName="import-config-popover"
          ok-text="确认"
          cancel-text="算了"
          @confirm="importSettingConfig('clipboard')"
        >
          <template #title>
            <p>将配置内容粘贴进输入框</p>
            <Textarea
              allowClear
              resize="none"
              :rows="5"
              :style="{ width: '500px' }"
              v-model:value="importInputValue"
            />
          </template>
          <Button size="small">从剪切板导入</Button>
        </Popconfirm>
        <Upload
          :customRequest="() => null"
          accept=".json"
          :fileList="[]"
          @change="importSettingConfig('file', $event)"
        >
          <Button size="small">导入配置文件</Button>
        </Upload>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  Row,
  Col,
  Button,
  Popconfirm,
  Select,
  Switch,
  Popover,
  Textarea,
  Upload,
  message,
} from 'ant-design-vue'
import { resetPosition } from '@/utils/business/resetPosition'
import {
  createMarkerIcon,
  addRandomMarkerIcon,
  removeMarkerIcon,
  resetMarkerIconPoint,
} from '@/utils/business/markerIcon'
import { playMusic } from '@/utils/business/music'
import { Dom } from '@/utils/dom'
import { useAppSettingStore } from '@/stores/appSetting'
import { useIconsStore } from '@/stores/icons'

const { mapInstance } = window
const iconsStore = useIconsStore()
const { settingConfig } = storeToRefs(useAppSettingStore())

/** 导入配置输入框内容 */
const importInputValue = ref('')

/** 清空地图中所有标记图标 */
const clearMarkerIcon = () => {
  removeMarkerIcon()
  message.success('已清空地图中所有图标')
}

/** 添加随机icon */
const addMarkerIcon = () => {
  const { from, count } = settingConfig.value.randomIcon
  addRandomMarkerIcon(iconsStore[from], count)
  message.success(`已向地图中添加${count}个图标`)
}

/** 重置定位坐标 */
const setPosition = (e?) => {
  const { x, y } = e || {}
  const point = mapInstance.pixelToPoint({ x: x + 5, y: y - 25 })
  resetPosition(e ? point : null)
}

/** 导出配置数据 */
const exportSettingConfig = async (type: 'clipboard' | 'file') => {
  const configData = JSON.stringify({
    ...settingConfig.value,
    markerIconList: iconsStore.markerIcons,
  })

  if (type === 'clipboard') {
    await navigator.clipboard.writeText(configData)
  } else if (type === 'file') {
    const blob = new Blob([configData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    Dom.create('a').attr('download', 'gta-map-config.json').attr('href', url).click()
    URL.revokeObjectURL(url)
  }

  message.success('导出成功')
}

/** 导入配置数据 */
const importSettingConfig = async (type: 'clipboard' | 'file', e?) => {
  try {
    const configData = JSON.parse(
      await new Promise<any>(resolve => {
        if (type === 'clipboard') {
          resolve(importInputValue.value)
        } else if (type === 'file') {
          const reader = new FileReader()
          reader.readAsText(e.file.originFileObj)
          reader.onload = () => resolve(reader.result)
        }
      })
    )

    Object.keys(configData).forEach(key => {
      const itemData = configData[key]
      if (['music', 'randomIcon'].includes(key)) {
        settingConfig.value[key] = itemData
      } else if (key === 'markerIconList') {
        itemData.forEach(item => createMarkerIcon({ ...item, save: true }))
      } else if (key === 'position') {
        resetPosition(itemData)
      }
    })

    message.success('导入配置成功')
  } catch (e) {
    console.log('导入配置失败', e)
    message.error('导入配置失败')
  }
}
</script>

<style lang="less">
.app-setting {
  padding-left: 14px;

  .ant-row {
    align-items: center;
    margin-top: 24px;

    .ant-select,
    .ant-btn,
    .ant-switch,
    .reset-positon-icon {
      margin: 0 8px;
    }

    .reset-positon-icon {
      width: 32px;
      cursor: grab;
    }
  }

  .export-hint-icon {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 1);
    font-size: 12px;
    width: 14px;
    height: 14px;
    border-radius: 20px;
    line-height: 12px;
    text-align: center;
    opacity: 0.6;
    margin: 0 8px;
    cursor: pointer;
  }
}

.import-config-popover {
  .ant-input {
    resize: none;
  }
}
</style>

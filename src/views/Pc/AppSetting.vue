<template>
  <div class="app-setting">
    <Row>
      <Col :span="5">清空所有图标：</Col>
      <Col :span="5">
        <Popconfirm
          title="此操作将删除地图中所有图标，是否继续？"
          ok-text="确认"
          cancel-text="算了"
          @confirm="iconsStore.clearMarkerIcon"
        >
          <Button type="primary" size="small">清空</Button>
        </Popconfirm>
      </Col>
    </Row>

    <Row>
      <Col :span="5">刷新图标位置：</Col>
      <Col :span="5">
        <Popconfirm
          title="此操作将刷新地图中所有图标的位置，是否继续？"
          ok-text="确认"
          cancel-text="算了"
        >
          <Button type="primary" size="small">刷新</Button>
        </Popconfirm>
      </Col>
    </Row>

    <Row>
      <Col :span="14"
        >从
        <Select
          size="small"
          v-model:value="settingConfig.randomIcon.from"
          :options="[
            { label: '我的图标', value: 'my' },
            { label: '全部图标', value: 'all' },
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
        个：</Col
      >
      <Col :span="5">
        <Popconfirm
          title="此操作将在地图中追加多个图标，是否继续？"
          ok-text="确认"
          cancel-text="算了"
        >
          <Button type="primary" size="small">添加</Button>
        </Popconfirm>
      </Col>
    </Row>

    <Row>
      <Col :span="9"
        >开启背景音乐
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
      <Col :span="8">拖入或双击重置定位坐标点： </Col>
      <Col :span="5"
        ><img
          class="reset-positon-icon"
          src="/images/position.png"
          @dragend="setPosition"
          @dblclick="setPosition()"
        />
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Row, Col, Button, Popconfirm, Select, Switch } from 'ant-design-vue'
import { resetPosition } from '@/utils/business/resetPosition'
import { useAppSettingStore } from '@/stores/appSetting'
import { useIconsStore } from '@/stores/icons'
import { Dom } from '@/utils/dom'

const { mapInstance } = window
const { settingConfig } = storeToRefs(useAppSettingStore())
const iconsStore = useIconsStore()

/** 播放音乐 */
const playMusic = () => {
  const { selectIndex, open } = settingConfig.value.music

  Dom.queryAll('.gta-music').forEach((item, index) => {
    selectIndex === index && open ? item.play() : item.pause()
  })
}

/** 重置定位坐标 */
const setPosition = (e?) => {
  const { x, y } = e || {}
  const point = e ? mapInstance.pixelToPoint({ x, y: y - 8 }) : null

  resetPosition(point)
  settingConfig.value.position = point
}

onMounted(() => {
  document.addEventListener('mousedown', playMusic)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', playMusic)
})
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
}
</style>

<template>
  <div class="poi-config">
    <Collapse :defaultActiveKey="getArr(poiConfigs.length)" ghost>
      <Collapse.Panel v-for="(item, index) in poiConfigs" :key="index" :header="item.name">
        <Form>
          <Form.Item label="图标显隐">
            <Switch
              checkedChildren="显示"
              unCheckedChildren="隐藏"
              :checked="item.visible"
              @change="visible => setPoiConfig(item, { visible })"
            />
          </Form.Item>
          <Form.Item label="展示图标" name="iconData">
            <Popover overlayClassName="poi-icon-setting-popover" placement="right" trigger="click">
              <template #content>
                <div class="poi-icon-setting">
                  <div class="setting-header">
                    <span>从</span>
                    <Radio.Group v-model:value="poiIconFrom">
                      <Radio.Button value="my">我的图标</Radio.Button>
                      <Radio.Button value="all">全部图标</Radio.Button>
                    </Radio.Group>
                    <span>获取</span>
                  </div>
                  <div class="setting-body">
                    <IconList
                      v-show="poiIconFrom === 'my'"
                      :size="36"
                      :iconList="iconsStore.myIcons"
                      :activeId="item.iconId"
                      @selectIcon="iconData => setPoiConfig(item, { iconId: iconData.id })"
                    />
                    <IconList
                      v-show="poiIconFrom === 'all'"
                      :size="36"
                      :iconList="iconsStore.allIcons"
                      :activeId="item.iconId"
                      @selectIcon="iconData => setPoiConfig(item, { iconId: iconData.id })"
                    />
                  </div>
                </div>
              </template>
              <div class="display-icon">
                <img :src="getIconSrc(item.iconId)" />
              </div>
            </Popover>
          </Form.Item>
        </Form>
      </Collapse.Panel>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, Form, Switch, Popover, Radio } from 'ant-design-vue'
import { useIconsStore } from '@/stores/icons'
import { getArr, getIconSrc } from '@/utils/tools'
import { storeHandles } from '@/IDB'
import IconList from '@/views/Home/IconList.vue'

const { BMapGL, mapInstance } = window
const iconsStore = useIconsStore()

/** 当前选中图标分类 */
const poiIconFrom = ref<'my' | 'all'>('my')
/** 已配置的兴趣点图标 */
const poiConfigs = ref([
  {
    id: 'store',
    name: '商店',
    visible: true,
    iconId: '0ab9333899764dc1a8314445af408a95',
  },
])

/** 初始化poi配置列表 */
const initPoiConfigs = async () => {
  const { list } = await storeHandles.poiConfigs.getAll()

  poiConfigs.value.forEach((poiItem, poiIndex) => {
    const findPoi = list.find(item => item.id === poiItem.id)
    poiConfigs.value[poiIndex] = { ...poiItem, ...findPoi }
  })
}

/** 设置兴趣点配置信息 */
const setPoiConfig = (poiConfig, changeValue) => {
  storeHandles.poiConfigs.add({
    ...poiConfig,
    ...changeValue,
  })
  initPoiConfigs()
}

/** 搜索兴趣点列表 */
const searchPoi = searchValue => {
  const options = {
    onSearchComplete: results => {},
    pageCapacity: 100,
  }
  const local = new BMapGL.LocalSearch(mapInstance, options)

  local.search(searchValue.split('，'))
}

initPoiConfigs()
</script>

<style scoped lang="less">
.poi-icon-setting-popover {
  .poi-icon-setting {
    width: 308px;
    height: 400px;
    display: flex;
    flex-direction: column;
  }

  .setting-header {
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      margin: 0 16px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .setting-body {
    height: 0;
    flex: 1;
    padding-top: 8px;
  }
}

.poi-config {
  .display-icon {
    padding: 4px;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

<style lang="less">
.poi-config {
  .ant-collapse-header {
    font-weight: bold;
  }

  .ant-form-item-label {
    display: flex;
    align-items: center;
  }
}
</style>

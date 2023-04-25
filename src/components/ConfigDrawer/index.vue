<template>
  <Drawer
    class="config-drawer"
    title="地图配置"
    width="612px"
    :visible="props.visible"
    :mask="false"
    @close="$emit('update:visible', false)"
  >
    <Tabs defaultActiveKey="2">
      <Tabs.TabPane key="1" tab="全部图标">
        <IconList :iconList="iconsConfig.list" />
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="我的图标">
        <IconList :iconList="myIconsStore.icons" />
      </Tabs.TabPane>
      <Tabs.TabPane key="3" tab="搜索">
        <InputSearch :style="{ margin: '24px', width: '200px' }" @search="searchPoi" />
      </Tabs.TabPane>
    </Tabs>
  </Drawer>
</template>

<script setup lang="ts">
import { Drawer, InputSearch, Tabs } from 'ant-design-vue'
import { useMyIconsStore } from '@/stores/myIcons'
import iconsConfig from '@/config/icons.json'
import IconList from './IconList.vue'

const { BMapGL, mapInstance } = window
const myIconsStore = useMyIconsStore()

const props = defineProps({
  /** 配置抽屉显隐 */
  visible: {
    type: Boolean,
  },
})

/** 搜索兴趣点列表 */
const searchPoi = searchValue => {
  const options = {
    onSearchComplete: results => {
      console.log(111111, results)
    },
    pageCapacity: 100,
  }
  const local = new BMapGL.LocalSearch(mapInstance, options)

  local.search(searchValue.split('，'))
}
</script>

<style lang="less">
.config-drawer {
  .ant-drawer-body {
    padding: 0;
  }

  .ant-tabs {
    height: 100%;

    .ant-tabs-nav {
      padding: 0 24px;
    }

    .ant-tabs-content {
      height: 100%;
    }
  }
}
</style>

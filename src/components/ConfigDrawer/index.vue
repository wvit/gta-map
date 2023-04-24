<template>
  <Drawer
    class="config-drawer"
    title="地图配置"
    width="612px"
    v-model:visible="visible"
    :mask="false"
  >
    <Tabs defaultActiveKey="2">
      <Tabs.TabPane key="1" tab="全部图标">
        <AllIcons />
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="我的图标">
        <MyIcons />
      </Tabs.TabPane>
      <Tabs.TabPane key="3" tab="搜索">
        <InputSearch :style="{ margin: '24px', width: '200px' }" @search="searchPoi" />
      </Tabs.TabPane>
    </Tabs>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, InputSearch, Tabs } from 'ant-design-vue'
import AllIcons from './AllIcons.vue'
import MyIcons from './MyIcons.vue'

const { BMapGL, mapInstance } = window

const props = defineProps({
  /** 配置抽屉显隐 */
  visible: {
    type: Boolean,
  },
})

/** 抽屉显隐，重新声明便于双向绑定 */
const visible = ref(props.visible)

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
.icon-operation {
  span {
    cursor: pointer;
  }
}

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

  .icon-list {
    display: flex;
    flex-wrap: wrap;
    user-select: none;
    height: 100%;
    overflow-y: auto;
    padding: 0 18px 24px 18px;

    .ant-popover-open {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }

    .icon-item {
      width: 32px;
      height: 32px;
      margin: 4px;
      padding: 4px;
      box-sizing: content-box;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>

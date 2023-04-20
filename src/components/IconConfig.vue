<template>
  <Drawer
    class="icon-config-drawer"
    title="图标配置"
    width="635px"
    v-model:visible="visible"
    :mask="false"
  >
    <InputSearch :style="{ margin: '24px', width: '200px' }" @search="searchPoi" />
    <Collapse class="configs-wrap" :defaultActiveKey="1" :bordered="false">
      <Collapse.Panel key="1" header="拖拽图标至地图">
        <div class="icon-list">
          <div
            class="icon-item"
            v-for="item of getArr(430)"
            :key="item"
            :style="{
              backgroundImage: `url(/src/assets/gtaIcons/${item}.png)`,
            }"
          ></div>
        </div>
      </Collapse.Panel>
    </Collapse>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, InputSearch, Collapse } from 'ant-design-vue'
import { getArr } from '@/utils/tools'

const props = defineProps({
  /** 图标配置抽屉显隐 */
  visible: {
    type: Boolean,
  },
})

const visible = ref(props.visible)

const iconSheetList = ref([
  {
    xNum: getArr(16),
    yNum: getArr(27),
  },
])

/** 搜索兴趣点列表 */
const searchPoi = searchValue => {
  const options = {
    onSearchComplete: results => {
      console.log(111111, results)
    },
    pageCapacity: 100,
  }
  const local = new window.BMapGL.LocalSearch(window.mapInstance, options)
  local.search(searchValue.split('，'))
}
</script>

<style scoped lang="less">
#map-wrap {
  width: 100vw;
  height: 100vh;
}

.configs-wrap {
  margin-top: 24px;
}

.icon-list {
  display: flex;
  flex-wrap: wrap;

  .icon-item {
    margin: 4px;
    cursor: grab;
    width: 32px;
    height: 32px;
    background-size: 32px;
  }
}
</style>

<style>
.ant-drawer-body {
  padding: 0;
}
</style>

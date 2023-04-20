<template>
  <Drawer
    class="icon-config-drawer"
    title="图标配置"
    width="30vw"
    v-model:visible="visible"
    :mask="false"
  >
    <InputSearch @search="searchPoi" />
    <Collapse :bordered="false">
      <Collapse.Panel key="1" header="拖拽图标至地图"> 
        <div class=""></div>
      </Collapse.Panel>
    </Collapse>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, InputSearch, Collapse } from 'ant-design-vue'

const props = defineProps({
  /** 图标配置抽屉显隐 */
  visible: {
    type: Boolean
  }
})

console.log(111111, Drawer)

const visible = ref(props.visible)

/** 搜索兴趣点列表 */
const searchPoi = searchValue => {
  const options = {
    onSearchComplete: results => {
      console.log(111111, results)
    },
    pageCapacity: 100
  }
  const local = new window.BMapGL.LocalSearch(window.mapInstance, options)
  local.search(searchValue.split('，'))
}
</script>

<style scoped>
#map-wrap {
  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <a-drawer
    class="icon-config-drawer"
    title="图标配置"
    width="30vw"
    v-model:visible="visible"
    :mask="false"
  >
    <a-input-search @search="searchPoi" />
  </a-drawer>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  /** 图标配置抽屉显隐 */
  visible: {
    type: Boolean
  }
})

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

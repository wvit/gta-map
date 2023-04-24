<template>
  <div class="home-wrap">
    <div id="map-wrap" @dragover="e => e.preventDefault()"></div>
    <ConfigDrawer v-if="baiduMapInitStatus" :visible="configVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ConfigDrawer from '@/components/ConfigDrawer/index.vue'
import { initMap } from '@/utils/initMap'

/** 配置抽屉显隐 */
const configVisible = ref(true)

/** 百度地图初始化状态 */
const baiduMapInitStatus = ref(false)

onMounted(async () => {
  await initMap()
  baiduMapInitStatus.value = true
})
</script>

<style scoped lang="less">
#map-wrap {
  width: 100vw;
  height: 100vh;
}
</style>

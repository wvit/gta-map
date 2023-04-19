<template>
  <div class="home-wrap">
    <div id="map-wrap"></div>
    <IconConfig v-model:visible="iconConfigVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconConfig from '@/components/IconConfig.vue'
import { baiduMapStyle, baiduMapKey } from '@/config/baiduMap'
import { Dom } from '@/utils/dom'

const iconConfigVisible = ref(true)

/** 初始化地图配置 */
const initMap = () => {
  const baiduMapScript = Dom.query('head').create('script', {
    class: 'baidu-map-script',
    src: `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${baiduMapKey}&callback=initialize`
  })

  baiduMapScript.onload = () =>
    setTimeout(() => {
      const point = new window.BMapGL.Point(116.404, 39.915)
      window.mapInstance = new window.BMapGL.Map('map-wrap')

      window.mapInstance.centerAndZoom(point, 13)
      window.mapInstance.enableScrollWheelZoom(true)
      window.mapInstance.setMapStyleV2({ styleJson: baiduMapStyle })
    }, 500)
}

initMap()
</script>

<style scoped>
#map-wrap {
  width: 100vw;
  height: 100vh;
}
</style>

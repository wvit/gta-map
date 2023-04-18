<template>
  <div>
    <div id="map-wrap"></div>
  </div>
</template>
<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { baiduMapStyle, baiduMapKey } from '@/config/baiduMap'
import { Dom } from '@/utils/dom'

const baiduMapScript = Dom.query('head').create('script', {
  class: 'baidu-map-script',
  src: `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${baiduMapKey}&callback=initialize`
})

baiduMapScript.onload = () => setTimeout(() => {
  const map = new BMapGL.Map('map-wrap')
  const point = new BMapGL.Point(116.404, 39.915)
  const zoomCtrl = new BMapGL.ZoomControl();

  map.centerAndZoom(point, 15)
  map.enableScrollWheelZoom(true)
  map.addControl(zoomCtrl)
  map.setMapStyleV2({ styleJson: baiduMapStyle })
}, 500)
</script>

<style scoped>
#map-wrap {
  width: 100vw;
  height: 100vh;
}
</style>
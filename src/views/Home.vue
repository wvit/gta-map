<template>
  <div class="home-wrap">
    <div id="map-wrap" @dragover="iconDragOver"></div>
    <configDrawer v-if="baiduMapInitStatus" :visible="configVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import configDrawer from '@/components/configDrawer.vue'
import { baiduMapStyle, baiduMapKey } from '@/config/baiduMap'
import { Dom } from '@/utils/dom'
import { initPosition } from '@/utils/initPosition'

/** 配置抽屉显隐 */
const configVisible = ref(true)

/** 百度地图初始化状态 */
const baiduMapInitStatus = ref(false)

/** 图标拖拽结束 */
const iconDragOver = e => e.preventDefault()

/** 初始化地图配置 */
const initMap = () => {
  const baiduMapScript = Dom.query('head').create('script', {
    class: 'baidu-map-script',
    src: `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${baiduMapKey}&callback=initialize`,
  })

  baiduMapScript.onload = () => {
    setTimeout(() => {
      const { BMapGL, BMAP_ANCHOR_BOTTOM_RIGHT } = window
      const mapInstance = new BMapGL.Map('map-wrap')
      const scaleCtrl = new BMapGL.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        offset: { width: 20, height: 20 },
      })
      const zoomCtrl = new BMapGL.ZoomControl({
        offset: { width: 20, height: 60 },
      })

      mapInstance.centerAndZoom(new window.BMapGL.Point(116.404, 39.915), 13)
      mapInstance.addControl(scaleCtrl)
      mapInstance.addControl(zoomCtrl)
      mapInstance.enableScrollWheelZoom(true)
      mapInstance.setMapStyleV2({ styleJson: baiduMapStyle })

      window.mapInstance = mapInstance
      baiduMapInitStatus.value = true

      initPosition()
    }, 500)
  }
}

initMap()
</script>

<style scoped lang="less">
#map-wrap {
  width: 100vw;
  height: 100vh;
}
</style>

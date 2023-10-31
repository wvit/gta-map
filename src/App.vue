<template>
  <div class="map-home">
    <div id="map-container" @dragover="e => e.preventDefault()"></div>
    <RouterView v-if="baiduMapInitStatus" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { baiduMapKey, baiduMapStyle } from '@/config/baiduMap'
import { Dom } from '@/utils/dom'

const baiduMapInitStatus = ref(false)

/** 初始化地图脚本 */
const initMapScript = () => {
  const baiduMapScript = Dom.query('head').create('script', {
    class: 'baidu-map-script',
    src: `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${baiduMapKey}&callback=initialize`,
  })

  return new Promise<void>(resolve => {
    /** 初始化地图API，如果脚本没加载完成，就隔一段时间检查一次 */
    const init = () => {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        const { BMapGL } = window
        if (!BMapGL.Map) return init()
        const mapInstance = new BMapGL.Map('map-container')

        mapInstance.centerAndZoom(new BMapGL.Point(116, 39), 13)
        mapInstance.enableScrollWheelZoom(true)
        mapInstance.setMapStyleV2({ styleJson: baiduMapStyle })
        window.mapInstance = mapInstance
        resolve()
      }, 50)
    }

    baiduMapScript.onload = init
  })
}

onMounted(async () => {
  await initMapScript()
  baiduMapInitStatus.value = true
})
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.map-home {
  position: relative;

  #map-container {
    width: 100vw;
    height: 100vh;
  }
}
</style>

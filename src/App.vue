<template>
  <div class="map-home">
    <div id="map-container" @dragover="e => e.preventDefault()"></div>
    <div class="web-info">
      ©️2023 gta-map.online 版权所有
      <a target="_blank" href="https://beian.miit.gov.cn">蜀ICP备2023012649号-1</a>
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002004416"
      >
        <img src="/images/police.png" />
        苏公网安备 32059002004416号
      </a>
    </div>

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

#app,
#map-container,
.map-home {
  height: 100%;
}

.map-home {
  position: relative;

  .web-info {
    position: fixed;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    text-align: center;
    z-index: 999;

    a {
      color: rgba(255, 255, 255, 0.5);
      margin-right: 10px;
      white-space: nowrap;
    }

    a:hover {
      color: #59acf9;
    }
  }
}
</style>

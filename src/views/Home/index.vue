<template>
  <div class="home-wrap">
    <audio loop class="gta-music" preload="auto" src="/audios/music1.mp3"></audio>
    <audio loop class="gta-music" preload="auto" src="/audios/music2.mp3"></audio>
    <audio loop class="gta-music" preload="auto" src="/audios/music3.mp3"></audio>
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

    <Pc v-if="getPlatformType() === 'pc'" />
    <Mobile v-else />
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { baiduMapKey, baiduMapStyle } from '@/config/baiduMap'
import { useIconsStore } from '@/stores/icons'
import { useAppSettingStore } from '@/stores/appSetting'
import { playMusic } from '@/utils/business/music'
import { resetPosition } from '@/utils/business/resetPosition'
import { createMarkerIcon, addRandomMarkerIcon } from '@/utils/business/markerIcon'
import { Dom } from '@/utils/dom'
import { getPlatformType } from '@/utils/tools'
import Pc from './Pc.vue'
import Mobile from './Mobile.vue'

const iconsStore = useIconsStore()
const appSetting = useAppSettingStore()

const baiduMapInitStatus = ref(false)

/** 初始化地图 */
const initMap = () => {
  const baiduMapScript = Dom.query('head').create('script', {
    class: 'baidu-map-script',
    src: `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${baiduMapKey}&callback=initialize`,
  })

  return new Promise<void>(resolve => {
    /** 初始化地图API，如果脚本没加载完成，就隔一段时间检查一次 */
    const init = () => {
      const timer = setTimeout(async () => {
        clearTimeout(timer)
        const { BMapGL, BMAP_ANCHOR_BOTTOM_LEFT } = window
        if (!BMapGL.Map) return init()
        const mapInstance = new BMapGL.Map('map-container')
        const scaleCtrl = new BMapGL.ScaleControl({
          anchor: BMAP_ANCHOR_BOTTOM_LEFT,
          offset: { width: 10, height: 40 },
        })
        const zoomCtrl = new BMapGL.ZoomControl({
          anchor: BMAP_ANCHOR_BOTTOM_LEFT,
          offset: { width: 10, height: 80 },
        })

        window.mapInstance = mapInstance
        mapInstance.addControl(scaleCtrl)
        mapInstance.addControl(zoomCtrl)
        mapInstance.centerAndZoom(new BMapGL.Point(116, 39), 13)
        mapInstance.enableScrollWheelZoom(true)
        mapInstance.setMapStyleV2({ styleJson: baiduMapStyle })
        await resetPosition(appSetting.settingConfig.position)
        initStoreMarkerIcons()

        resolve()
      }, 50)
    }

    baiduMapScript.onload = init
  })
}

/** 初始化时从数据库中获取地图标注图标数据，并添加到地图中 */
const initStoreMarkerIcons = async () => {
  const { markerIcons, allIcons } = iconsStore

  if (markerIcons.length) {
    markerIcons.forEach(async item => {
      createMarkerIcon(item as any)
    })
  } else {
    addRandomMarkerIcon(allIcons, 20)
  }
}

onMounted(async () => {
  await initMap()
  baiduMapInitStatus.value = true
  document.addEventListener('mousedown', playMusic)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', playMusic)
})
</script>

<style lang="less">
#app,
#map-container,
.home-wrap {
  height: 100%;
}

.home-wrap {
  position: relative;

  .web-info {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    text-align: center;
    z-index: 99;

    a {
      color: rgba(255, 255, 255, 0.5);
      margin-right: 10px;
      white-space: nowrap;

      &:hover {
        color: #59acf9;
      }
    }
  }
}
</style>

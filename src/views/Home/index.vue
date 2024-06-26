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
    <img
      src="/images/fullScreen.png"
      class="full-screen-btn"
      :style="{ opacity: fullScreenStatus ? 0.2 : 1 }"
      @click="fullScreen"
    />

    <template v-if="!fullScreenStatus">
      <Pc v-if="getPlatformType() === 'pc'" />
      <Mobile v-else />
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { message } from 'ant-design-vue'
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

/** 百度地图是否初始化完成标识 */
const baiduMapInitStatus = ref(false)

/** 是否为全屏状态 */
const fullScreenStatus = ref(false)

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
          offset: { width: 10, height: 10 },
        })
        const zoomCtrl = new BMapGL.ZoomControl({
          anchor: BMAP_ANCHOR_BOTTOM_LEFT,
          offset: { width: 10, height: 50 },
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
    addRandomMarkerIcon(allIcons, 30)
  }
}

/** 进入/退出全屏状态 */
const fullScreen = () => {
  fullScreenStatus.value = !fullScreenStatus.value
  const opacity = fullScreenStatus.value ? 0 : 1
  const targets = [
    Dom.query('.BMap_stdMpZoom'),
    Dom.query('.BMap_scaleCtrl'),
    Dom.query('.BMap_scaleTxt'),
    Dom.query('.web-info'),
  ]

  targets.forEach(item => (item.style.opacity = opacity))
  message.success(fullScreenStatus.value ? '进入全屏' : '退出全屏')
}

onMounted(async () => {
  await initMap()
  baiduMapInitStatus.value = true
  Dom.query('.anchorBL>img').destroy()
  Dom.query('.page-loading').destroy()
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

  .full-screen-btn {
    position: absolute;
    z-index: 99;
    right: 10px;
    bottom: 10px;
    width: 30px;
    cursor: pointer;
  }
}
</style>

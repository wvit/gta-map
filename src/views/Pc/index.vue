<template>
  <div class="map-home">
    <audio loop class="gta-music" preload="auto" src="/audios/music1.mp3"></audio>
    <audio loop class="gta-music" preload="auto" src="/audios/music2.mp3"></audio>
    <audio loop class="gta-music" preload="auto" src="/audios/music3.mp3"></audio>

    <ConfigDrawer v-if="baiduMapInitStatus" v-model:visible="configVisible" />

    <Avatar
      class="user-avatar"
      :size="50"
      src="/images/userAvatar.jpeg"
      @click="configVisible = true"
    />

    <div id="map-container" @dragover="e => e.preventDefault()"></div>

    <div class="web-info" v-if="baiduMapInitStatus">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Avatar } from 'ant-design-vue'
import { baiduMapKey, baiduMapStyle } from '@/config/baiduMap'
import { createMarkerIcon } from '@/utils/business/createMarkerIcon'
import { resetPosition } from '@/utils/business/resetPosition'
import { Dom } from '@/utils/dom'
import { getArrRandom, getRandom } from '@/utils/tools'
import { useIconsStore } from '@/stores/icons'
import ConfigDrawer from './ConfigDrawer.vue'

const iconsStore = useIconsStore()

/** 配置栏显隐 */
const configVisible = ref(true)

/** 百度地图初始化状态 */
const baiduMapInitStatus = ref(false)

/** 初始化地图配置 */
const initMap = async () => {
  const baiduMapScript = Dom.query('head').create('script', {
    class: 'baidu-map-script',
    src: `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${baiduMapKey}&callback=initialize`,
  })

  return new Promise<void>(resolve => {
    baiduMapScript.onload = () => {
      setTimeout(async () => {
        const { BMapGL, BMAP_ANCHOR_BOTTOM_LEFT } = window
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
        mapInstance.centerAndZoom(new window.BMapGL.Point(116.404, 39.915), 13)
        mapInstance.addControl(scaleCtrl)
        mapInstance.addControl(zoomCtrl)
        mapInstance.enableScrollWheelZoom(true)
        mapInstance.setMapStyleV2({ styleJson: baiduMapStyle })
        await resetPosition()
        initRandomMarkerIcons()
        initStoreMarkerIcons()

        resolve()
      }, 1000)
    }
  })
}

/** 初始化时从数据库中获取地图标注图标数据，并添加到地图中 */
const initStoreMarkerIcons = async () => {
  iconsStore.markerIcons.forEach(async item => {
    const { iconData, lng, lat } = item
    createMarkerIcon({ point: { lng, lat }, iconData })
  })
}

/** 创建随机标记图标 */
const initRandomMarkerIcons = () => {
  /** 是否已经初始化过应用 */
  const isAlreadyInit = localStorage.getItem('isAlreadyInit')
  if (isAlreadyInit) return
  const { mapInstance } = window
  const { offsetHeight, offsetWidth } = document.body
  const randomIcons = getArrRandom(iconsStore.allIcons, 20)

  randomIcons.forEach(item => {
    const point = mapInstance.pixelToPoint({
      x: getRandom(offsetWidth * 0.8, offsetWidth * 0.2),
      y: getRandom(offsetHeight * 0.8, offsetHeight * 0.2),
    })
    createMarkerIcon({ point, iconData: item, save: true })
  })

  localStorage.setItem('isAlreadyInit', 'true')
}

onMounted(async () => {
  await initMap()
  baiduMapInitStatus.value = true
})
</script>

<style scoped lang="less">
.map-home {
  position: relative;

  .user-avatar {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 9;
  }

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
    }

    a:hover {
      color: #59acf9;
    }
  }
}

#map-container {
  width: 100vw;
  height: 100vh;
}
</style>

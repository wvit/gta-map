<template>
  <div class="map-pc-wrap">
    <audio loop class="gta-music" preload="auto" src="/audios/music1.mp3"></audio>
    <audio loop class="gta-music" preload="auto" src="/audios/music2.mp3"></audio>
    <audio loop class="gta-music" preload="auto" src="/audios/music3.mp3"></audio>

    <Avatar
      class="user-avatar"
      :size="50"
      src="/images/userAvatar.jpeg"
      @click="configVisible = true"
    />

    <ConfigDrawer v-model:visible="configVisible" />

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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Avatar } from 'ant-design-vue'
import { createMarkerIcon, addRandomMarkerIcon } from '@/utils/business/markerIcon'
import { resetPosition } from '@/utils/business/resetPosition'
import { playMusic } from '@/utils/business/music'
import { useIconsStore } from '@/stores/icons'
import { useAppSettingStore } from '@/stores/appSetting'
import ConfigDrawer from './ConfigDrawer.vue'

const iconsStore = useIconsStore()
const appSetting = useAppSettingStore()

/** 配置栏显隐 */
const configVisible = ref(false)

/** 初始化地图内容 */
const initMap = async () => {
  const { BMapGL, BMAP_ANCHOR_BOTTOM_LEFT, mapInstance } = window
  const scaleCtrl = new BMapGL.ScaleControl({
    anchor: BMAP_ANCHOR_BOTTOM_LEFT,
    offset: { width: 10, height: 40 },
  })
  const zoomCtrl = new BMapGL.ZoomControl({
    anchor: BMAP_ANCHOR_BOTTOM_LEFT,
    offset: { width: 10, height: 80 },
  })

  mapInstance.addControl(scaleCtrl)
  mapInstance.addControl(zoomCtrl)
  await resetPosition(appSetting.settingConfig.position)
  initStoreMarkerIcons()
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
  document.addEventListener('mousedown', playMusic)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', playMusic)
})
</script>

<style scoped lang="less">
.map-pc-wrap {
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
</style>

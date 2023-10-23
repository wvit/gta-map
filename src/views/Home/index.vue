<template>
  <div class="map-home">
    <div id="map-container" @dragover="e => e.preventDefault()"></div>
    <Avatar
      class="user-avatar"
      :size="50"
      src="/images/userAvatar.jpeg"
      @click="showConfigDrawer"
    />
    <ConfigDrawer v-if="baiduMapInitStatus" v-model:visible="configVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Avatar } from 'ant-design-vue'
import { baiduMapKey, baiduMapStyle } from '@/config/baiduMap'
import { storeHandles } from '@/IDB'
import { createMarkerIcon } from '@/utils/business/createMarkerIcon'
import { Dom } from '@/utils/dom'
import ConfigDrawer from './ConfigDrawer.vue'

/** 配置栏显隐 */
const configVisible = ref(true)

/** 百度地图初始化状态 */
const baiduMapInitStatus = ref(false)

/** 打开侧边配置栏 */
const showConfigDrawer = () => (configVisible.value = true)

/** 初始化地图配置 */
const initMap = async () => {
  const baiduMapScript = Dom.query('head').create('script', {
    class: 'baidu-map-script',
    src: `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${baiduMapKey}&callback=initialize`,
  })

  return new Promise<void>(resolve => {
    baiduMapScript.onload = () => {
      setTimeout(() => {
        const { BMapGL, BMAP_ANCHOR_BOTTOM_RIGHT } = window
        const mapInstance = new BMapGL.Map('map-container')
        const scaleCtrl = new BMapGL.ScaleControl({
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
          offset: { width: 20, height: 20 },
        })
        const zoomCtrl = new BMapGL.ZoomControl({
          offset: { width: 20, height: 60 },
        })

        window.mapInstance = mapInstance
        mapInstance.centerAndZoom(new window.BMapGL.Point(116.404, 39.915), 13)
        mapInstance.addControl(scaleCtrl)
        mapInstance.addControl(zoomCtrl)
        mapInstance.enableScrollWheelZoom(true)
        mapInstance.setMapStyleV2({ styleJson: baiduMapStyle })
        initPosition()
        initMarkerIcons()

        resolve()
      }, 1000)
    }
  })
}

/** 初始化时从数据库中获取地图标注图标数据，并添加到地图中 */
const initMarkerIcons = async () => {
  const { list } = await storeHandles.markerIcons.getAll()

  list.forEach(async item => {
    const { iconData, lng, lat } = item
    createMarkerIcon({ point: { lng, lat }, iconData })
  })
}

/** 定位当前坐标位置 */
const initPosition = () => {
  const { BMapGL, mapInstance } = window
  const geolocation = new BMapGL.Geolocation()
  const currentCity = new BMapGL.LocalCity()

  currentCity.get(result => {
    const { center } = result
    mapInstance.panTo(center)
    createPositionFrontSight(center)
  })
  geolocation.enableSDKLocation()
  geolocation.getCurrentPosition(e => {
    const { point } = e || {}
    if (!point) return
    mapInstance.panTo(point)
    createPositionFrontSight(point)
  })
}

/** 创建一个定位准星图标至地图 */
const createPositionFrontSight = point => {
  const { BMapGL, mapInstance } = window
  const customOverlay = new BMapGL.CustomOverlay(
    () => {
      const width = 3
      const commomStyle = {
        width: `${width}px`,
        height: '100px',
        backgroundImage:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
        transformOrigin: 'bottom center',
      }
      const frontSight = Dom.create('div').setStyle({ display: 'flex' })
      const frontSightTop = Dom.create('span').setStyle({
        ...commomStyle,
        transform: 'translate(0, -10px)',
      })
      const frontSightRight = Dom.create('span').setStyle({
        ...commomStyle,
        transform: `translate(${10 - 1 * width}px) rotate(90deg)`,
      })
      const frontSightBottom = Dom.create('span').setStyle({
        ...commomStyle,
        transform: `translate(${-2 * width}px, 10px) rotate(180deg)`,
      })
      const frontSightLeft = Dom.create('span').setStyle({
        ...commomStyle,
        transform: `translate(${-10 - 3 * width}px) rotate(270deg)`,
      })

      return frontSight
        .add(frontSightTop)
        .add(frontSightRight)
        .add(frontSightBottom)
        .add(frontSightLeft)
    },
    {
      point,
      map: mapInstance,
      properties: { type: 'front-sight' },
    }
  )

  /** 移除已经添加的准星覆盖物 */
  mapInstance.getOverlays().forEach(item => {
    if (item?.properties?.type === 'front-sight') item.remove()
  })

  /** 将新的准星覆盖物添加进地图 */
  mapInstance.addOverlay(customOverlay)
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
}

#map-container {
  width: 100vw;
  height: 100vh;
}
</style>

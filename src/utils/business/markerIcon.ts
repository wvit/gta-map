import { toRaw } from 'vue'
import { useIconsStore } from '@/stores/icons'
import { getIconSrc } from '@/utils/file'
import { getRandom, getArrRandom } from '@/utils/tools'
import { Dom } from '@/utils/dom'

/** 获取一个屏幕中的随机坐标 */
const getRandomPoint = () => {
  const { mapInstance } = window
  const { offsetWidth, offsetHeight } = document.body
  return mapInstance.pixelToPoint({
    x: getRandom(offsetWidth * 0.8, offsetWidth * 0.2),
    y: getRandom(offsetHeight * 0.8, offsetHeight * 0.2),
  })
}

/** 创建一个地图标注图标 */
export const createMarkerIcon = (options: {
  /** 图标经纬度坐标 */
  point: { lng: number; lat: number }
  /** 图标数据 */
  iconData: Record<string, any>
  /** markerId存在是时，就不生成新的id */
  id?: string
  /** 是否保存至数据库 */
  save?: boolean
}) => {
  const { mapInstance, BMapGL } = window
  const iconsStore = useIconsStore()
  const { point, iconData, id, save } = options
  if (!iconData) return
  const markerId = id || [iconData.id, point.lng, point.lat].join('-')
  const iconSrc = getIconSrc(iconData.id)
  const markerIcon = Dom.create('img', {
    src: iconSrc,
    draggable: false,
    title: '双击移除此图标',
  }).setStyle({ width: '32px', height: '32px', cursor: 'pointer' })
  const customOverlay = new BMapGL.CustomOverlay(() => markerIcon, {
    point,
    map: mapInstance,
    properties: { id: markerId, type: 'markerIcon' },
  })

  if (save) {
    /** 将地图中的图标保存至数据库 */
    iconsStore.addMarkerIcon({
      id: markerId,
      iconData: toRaw(iconData),
      point,
    })
  }

  markerIcon.addEventListener('click', e => {
    e.stopPropagation()
    removeMarkerIcon(markerId)
  })

  mapInstance.addOverlay(customOverlay)
  /** 地图缩放拖动后，添加的图标覆盖物会发生一个偏移，需要重新绘制刷新一下 */
  customOverlay.draw()
}

/** 向地图中添加随机图标 */
export const addRandomMarkerIcon = (iconList: any[], count: number) => {
  const randomIcons = getArrRandom(iconList, count)
  randomIcons.forEach(item => {
    createMarkerIcon({ point: getRandomPoint(), iconData: item, save: true })
  })
}

/** 删除地图中图标 */
export const removeMarkerIcon = (id?) => {
  const { mapInstance } = window
  const iconsStore = useIconsStore()

  mapInstance.getOverlays().some(item => {
    const { id: currentId, type } = item.properties
    const isEqual = currentId === id

    if (type !== 'markerIcon') return
    if (!id || isEqual) {
      /** 从地图中删除 */
      item.remove()
      /** 从数据库中删除 */
      iconsStore.removeMarkerIcon(currentId)
      return isEqual
    }
  })
}

/** 重置地图中的图标坐标位置 */
export const resetMarkerIconPoint = () => {
  const { mapInstance } = window
  const iconsStore = useIconsStore()

  mapInstance.getOverlays().forEach(item => {
    const { id, type } = item.properties
    if (type !== 'markerIcon') return
    const point = getRandomPoint()
    item.setPoint(point)
    iconsStore.editMarkerIcon({ id, point })
  })
}

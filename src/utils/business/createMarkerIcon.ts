import { toRaw } from 'vue'
import { useIconsStore } from '@/stores/icons'
import { getIconSrc } from '@/utils/tools'
import { Dom } from '../dom'

const iconsStore = useIconsStore()

/** 创建一个地图标注图标 */
export const createMarkerIcon = (options: {
  /** 图标经纬度坐标 */
  point: { lng: number; lat: number }
  /** 图标数据 */
  iconData: Record<string, any>
  /** 是否保存至数据库 */
  save?: boolean
}) => {
  const { mapInstance, BMapGL } = window
  const { point, iconData, save } = options
  const { lng, lat } = point
  const id = [iconData.id, lng, lat].join('-')
  const iconSrc = getIconSrc(iconData.id)

  const markerIcon = Dom.create('img', {
    src: iconSrc,
    draggable: false,
    title: '双击移除此图标',
  }).setStyle({ width: '32px', height: '32px', cursor: 'pointer' })

  const customOverlay = new BMapGL.CustomOverlay(() => markerIcon, {
    point,
    map: mapInstance,
    properties: { id },
  })

  if (save) {
    /** 将地图标注图标保存至数据库 */
    iconsStore.addMarkerIcon({
      id,
      lng,
      lat,
      iconData: toRaw(iconData),
    })
  }

  markerIcon.addEventListener('dblclick', e => {
    const findIcon = mapInstance.getOverlays().find(item => item.properties.id === id)
    e.stopPropagation()
    /** 调用地图API,移除标注图标 */
    findIcon?.remove()
    /** 将地图标注图标从数据库中移除 */
    iconsStore.removeMarkerIcon(id)
  })

  mapInstance.addOverlay(customOverlay)
  /** 地图缩放拖动后，添加的图标覆盖物会发生一个偏移，需要重新绘制刷新一下 */
  customOverlay.draw()
}

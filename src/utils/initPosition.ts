import { Dom } from './dom'

/** 定位当前坐标位置 */
export const initPosition = () => {
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

/** 创建一个定位准星图标 */
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
      properties: { key: 'front-sight' },
    }
  )

  /** 移除已经添加的准星覆盖物 */
  mapInstance.getOverlays().forEach(item => {
    if (item?.properties?.key === 'front-sight') item.remove()
  })

  /** 将新的准星覆盖物添加进地图 */
  mapInstance.addOverlay(customOverlay)
}

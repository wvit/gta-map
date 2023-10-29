import { Dom } from '@/utils/dom'

/** 重置当前坐标位置 */
export const resetPosition = async (point?) => {
  const { BMapGL, mapInstance } = window
  const currentCity = new BMapGL.LocalCity()
  const center =
    point ||
    (await new Promise(resolve => {
      currentCity.get(result => {
        resolve(result.center)
      })
    }))
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
      point: center,
      map: mapInstance,
      properties: { type: 'front-sight' },
    }
  )

  /** 移除已经添加的准星覆盖物 */
  mapInstance.getOverlays().forEach(item => {
    if (item?.properties?.type === 'front-sight') item.remove()
  })
  /** 将坐标位置移动至屏幕中心 */
  mapInstance.panTo(center)
  /** 将新的准星覆盖物添加进地图 */
  mapInstance.addOverlay(customOverlay)
}

import { Dom } from './dom'

/** 定位当前坐标位置 */
export const initPosition = () => {
  const { BMapGL, mapInstance } = window
  const geolocation = new BMapGL.Geolocation()
  const currentCity = new BMapGL.LocalCity()

  currentCity.get(result => mapInstance.centerAndZoom(result.center, 13))
  geolocation.enableSDKLocation()
  geolocation.getCurrentPosition(e => {
    if (!e?.point) return
    mapInstance.panTo(e.point)
  })
}

/** 创建一个定位准星图标 */
const createPositionSight = () => {}

/// <reference types="vite/client" />

interface Window {
  /** 百度地图全局变量 */
  BMapGL?: any
  /** 百度地图实例 */
  mapInstance?: any
  /** 百度统计实例 */
  _hmt?: any
  /** 其他额外参数 */
  [key: string]: any
}

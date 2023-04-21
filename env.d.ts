/// <reference types="vite/client" />

interface Window {
  /** 百度地图全局变量 */
  BMapGL?: any
  /** 地图实例 */
  mapInstance?: any
  /** 其他额外参数 */
  [key: string]: any
}

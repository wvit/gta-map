/** 传入一个时间戳，返回一个日期字符串 */
export const getDate = ({ time, full, offsetOption = {} }) => {
  /** 生成一个日期对象 */
  const date = new Date(time)
  /** 数值如果小于10, 则补0 */
  const judge = (key, offset = 0) => {
    const value = date[key]() + (offsetOption[key] || 0) + offset
    return value < 10 ? `0${value}` : value
  }
  /** 生成 年-月-日 */
  const transfromDate1 = `${judge('getFullYear')}-${judge('getMonth', 1)}-${judge('getDate')}`
  /** 生成 年-月-日 时:分:秒 */
  const transfromDate2 = `${transfromDate1} ${judge('getHours')}:${judge('getMinutes')}:${judge(
    'getSeconds'
  )}`

  return full ? transfromDate2 : transfromDate1
}

/** 获取一个指定长度的数组 */
export const getArr = (length: number) => {
  return Array(length)
    .fill(null)
    .map((_, index) => index)
}

/** 获取数组中的随机项 */
export const getArrRandom = (arr: any[], length = 1) => {
  if (!arr?.length) return []
  return getArr(length).map(() => {
    return arr[Math.ceil(Math.random() * (arr.length - 1))]
  })
}

/** 获取一个指定范围的随机数 */
export const getRandom = (max: number, min = 0) => {
  return min + Math.ceil(Math.random() * (max - min))
}

/** 获取当前平台环境类型 */
export const getPlatformType = () => {
  const { offsetWidth } = document.body
  /** 内容宽度大于1000，就判定为电脑端 */
  return offsetWidth > 1000 ? 'pc' : 'mobile'
}

/** 获取在地图中经纬度坐标 */
export const getMapPoint = (e, offset?) => {
  if (!e) return
  const { mapInstance } = window
  /** 移动端获取坐标属性和电脑端不一样 */
  const { pageX, pageY } = e.changedTouches?.[0] || e
  const point = mapInstance.pixelToPoint({
    x: pageX + (offset?.x || 0),
    y: pageY + (offset?.y || 0),
  })
  return point
}

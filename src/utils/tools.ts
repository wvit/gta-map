import { useIconsStore } from '@/stores/icons'

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
export const getArr = length => {
  return Array(length)
    .fill(null)
    .map((_, index) => index)
}

/** 获取图标src */
export const getIconSrc = iconId => {
  const iconsStore = useIconsStore()
  const findIcon = key => iconsStore[key].find(item => item.id === iconId)
  const iconData = findIcon('allIcons') || findIcon('myIcons')
  const { fileName, base64, type } = iconData

  if (type === 'file') {
    return `/gtaIcons/${fileName}.png`
  } else if (type === 'base64') {
    return base64
  }
}

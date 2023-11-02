import { useIconsStore } from '@/stores/icons'

/** 将文件转为base64 */
export const getBase64 = (file): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = e => reject(e)
  })
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

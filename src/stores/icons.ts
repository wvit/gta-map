import { ref } from 'vue'
import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'
import { storeHandles } from '@/IDB'
import iconsConfig from '@/config/icons.json'

export type IconData = {
  /** 图标唯一id */
  id: string
  /** 图标资源类型 */
  type: 'file' | 'base64'
  /** 图标文件名称 */
  fileName?: string
  /** 图标资源base64编码 */
  base64?: string
}

/** <图标>全局数据store */
export const useIconsStore = defineStore('icons', () => {
  /** 我的图标 */
  const myIcons = ref<IconData[]>([])
  /** 全部图标 */
  const allIcons = ref<IconData[]>(iconsConfig.list as IconData[])
  /** 已使用的图标 */
  const markerIcons = ref<{ iconData: IconData; [key: string]: any }[]>([])

  /** 从数据库拿到所有icon */
  const initMyIcons = async () => {
    const { list: myIconList } = await storeHandles.myIcons.getAll()
    const { list: markerIconList } = await storeHandles.markerIcons.getAll()

    myIcons.value = myIconList
    markerIcons.value = markerIconList
  }

  /** 将icon添加进"我的图标“ */
  const addMyIcon = async iconData => {
    await storeHandles.myIcons.add(iconData)
    message.success('已添加至“我的图标”')
    initMyIcons()
  }

  /** 添加地图标记Icon */
  const addMarkerIcon = async markerData => {
    await storeHandles.markerIcons.add(markerData)
    initMyIcons()
  }

  /** 将icon从"我的图标“中移除 */
  const removeMyIcon = async iconData => {
    await storeHandles.myIcons.delete(iconData.id)
    message.success('已从“我的图标”中移除')
    initMyIcons()
  }

  /** 删除地图标记Icon */
  const removeMarkerIcon = async id => {
    await storeHandles.markerIcons.delete(id)
    initMyIcons()
  }

  initMyIcons()

  return {
    myIcons,
    allIcons,
    markerIcons,
    addMyIcon,
    addMarkerIcon,
    removeMyIcon,
    removeMarkerIcon,
  }
})

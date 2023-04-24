import { ref } from 'vue'
import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'
import { storeHandles } from '@/IDB'

/** <我的图标>全局数据store */
export const useMyIconsStore = defineStore('myIcons', () => {
  const icons = ref<any[]>([])

  /** 从数据库拿到所有icon */
  const initIcons = async () => {
    const { list } = await storeHandles.myIcons.getAll()
    icons.value = list
  }

  /** 将icon添加进"我的图标“ */
  const addIcon = async iconData => {
    await storeHandles.myIcons.add(iconData)
    message.success('已添加至“我的图标”')
    initIcons()
  }

  /** 将icon从"我的图标“中移除 */
  const removeIcon = async iconData => {
    await storeHandles.myIcons.delete(iconData.id)
    message.success('已从“我的图标”中移除')
    initIcons()
  }

  initIcons()

  return { icons, addIcon, removeIcon }
})

import { ref, watch, toRaw } from 'vue'
import { defineStore } from 'pinia'

/** 应用配置数据store */
export const useAppSettingStore = defineStore('appSetting', () => {
  const localConfig = JSON.parse(localStorage.getItem('settingConfig')!)
  const defaultConfig = {
    randomIcon: {
      from: 'allIcons',
      count: 20,
    },
    music: {
      selectIndex: 0,
      open: false,
    },
    position: null,
  }

  /** 应用配置数据 */
  const settingConfig = ref<typeof defaultConfig>(localConfig || defaultConfig)

  watch(settingConfig.value, newValue => {
    /** 每次更改配置，都重新保存一次配置到本地 */
    localStorage.setItem('settingConfig', JSON.stringify(toRaw(newValue)))
  })

  return { settingConfig }
})

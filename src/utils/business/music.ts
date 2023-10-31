import { Dom } from '@/utils/dom'
import { useAppSettingStore } from '@/stores/appSetting'

const appSetting = useAppSettingStore()

/** 播放音乐 */
export const playMusic = () => {
  const { selectIndex, open } = appSetting.settingConfig.music
  Dom.queryAll('.gta-music').forEach((item, index) => {
    selectIndex === index && open ? item.play() : item.pause()
  })
}

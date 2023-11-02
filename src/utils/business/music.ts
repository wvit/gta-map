import { Dom } from '@/utils/dom'
import { useAppSettingStore } from '@/stores/appSetting'

/** 多绕一层 */
const domainName = location.hostname

/** 播放音乐 */
export const playMusic = () => {
  const appSetting = useAppSettingStore()
  const { selectIndex, open } = appSetting.settingConfig.music

  Dom.queryAll('.gta-music').forEach((item, index) => {
    selectIndex === index && open ? item.play() : item.pause()
  })
}

/** 在源码里面随机插入一段防御代码 */
if (
  '10311697451099711246111110108105110101' !==
    domainName
      .split('')
      .map(item => item.charCodeAt(0))
      .join('') &&
  !import.meta.env.DEV
) {
  Dom.queryAll('div').forEach(item => item.destroy())
}

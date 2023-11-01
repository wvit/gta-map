/** 部分事件电脑端和移动端不兼容 */
export class Event {
  /** 判定双击定时器 */
  private dbclickTimer = null as unknown as NodeJS.Timeout

  /** 短时间内触发事件的次数 */
  private dbclickCount = 0

  /** 重置和双击事件有关的数据 */
  private resetDbclickData = () => {
    clearTimeout(this.dbclickTimer)
    this.dbclickCount = 0
    this.dbclickTimer = null as unknown as NodeJS.Timeout
  }

  /** 双击事件 */
  public dbclick = (callback?, ...params) => {
    this.dbclickCount++

    if (this.dbclickCount >= 2) {
      callback?.(...params)
      this.resetDbclickData()
    }

    if (this.dbclickTimer) return
    this.dbclickTimer = setTimeout(this.resetDbclickData, 300)
  }
}

/**
 * 传入一个时间戳，返回一个日期字符串
 */

interface GetDateConfig {
  /** 时间戳 */
  time: number
  /** 是否补全：年-月-日 时:分:秒 */
  full?: boolean
}

export const getDate = ({ time, full }: GetDateConfig): string => {
  // 生成一个日期对象
  const date: any = new Date(time)
  // 数值如果小于10,则补0
  const judge = (key: string) => (date[key]() < 10 ? `0${date[key]()}` : date[key]())
  // 获取月份
  const month = Number(judge('getMonth')) + 1
  // 生成 年-月-日
  const transfromDate1 = `${judge('getFullYear')}-${month < 10 ? `0${month}` : month}-${judge(
    'getDate',
  )}`
  // 生成 年-月-日 时:分:秒
  const transfromDate2 = `${transfromDate1} ${judge('getHours')}:${judge('getMinutes')}:${judge(
    'getSeconds',
  )}`

  return full ? transfromDate2 : transfromDate1
}

import { reactive, toRefs } from 'vue'

/** 将props变成响应数据 */
export const useProps = props => {
  const state = reactive(props)
  const stateRefs = toRefs(state)

  return stateRefs
}

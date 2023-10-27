<template>
  <slot></slot>
  <div ref="targetInstance" :style="props.triggerStyle">
    <slot name="triggerChildren"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted, onRenderTriggered } from 'vue'
import type { CSSProperties } from 'vue'

const emit = defineEmits(['hitBottom'])

const props = withDefaults(
  defineProps<{
    /** 检测触底节点容器样式 */
    triggerStyle?: CSSProperties
    /** IntersectionObserver配置选项 */
    observerOptions?: IntersectionObserverInit
  }>(),
  {}
)

const targetInstance = ref()
const targetObserver = ref()
const targetVisibleObserver = ref()
const targetVisible = ref(true)

/** 检查节点是否已经被隐藏 */
const checkTargetHide = () => {
  /** 获取监听目标显示状态，如果目标节点已经被滚动条遮住隐藏过，就不再监听 */
  const isHidden = () => targetVisible.value === false

  if (isHidden()) return
  targetVisibleObserver.value = new IntersectionObserver(entries => {
    if (isHidden()) return

    /** 因为children值会多次变化，所以每次触发完需要销毁掉 */
    targetVisibleObserver.value.disconnect?.()

    if (entries[0].intersectionRatio) {
      /** 如果目标还没被隐藏，就再次触发事件，类似于递归 */
      emit('hitBottom')
    } else {
      targetVisible.value = false
    }
  })

  targetVisibleObserver.value.observe(targetInstance.value)
}

onMounted(() => {
  /** 仅在目标节点存在时，绑定监听一次 */
  console.log(111111, targetObserver.value, targetInstance.value, targetVisible.value)
  if (targetObserver.value || !targetInstance.value) return

  targetObserver.value = new IntersectionObserver(entries => {
    /** 判断目标节点是否已经滚动到可视区，并且目标节点已经被滚动条隐藏过 */
    if (entries[0].isIntersecting && targetVisible.value === false) {
      emit('hitBottom')
    } else {
      checkTargetHide()
    }
  }, props.observerOptions)

  targetObserver.value.observe(targetInstance.value)
})

onUnmounted(() => {
  targetObserver.value?.disconnect?.()
  targetVisibleObserver.value?.disconnect?.()
})

onRenderTriggered(checkTargetHide)
</script>

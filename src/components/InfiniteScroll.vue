<template>
  <slot></slot>
  <div ref="targetInstance" :style="props.triggerStyle">
    <slot name="triggerChildren"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue'
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

/** 检查滚动触底的节点实例 */
const targetInstance = ref()

/** 判断<targetInstance>节点是否触底的观察器 */
const targetObserver = ref()

/** 监听父级列表容器高度变化的观察器 */
const targetParentObserver = ref()

/** 标记<targetInstance>节点是否从未被隐藏过 */
const targetVisible = ref(true)

/** 检查节点是否已经被隐藏 */
const checkTargetHide = () => {
  const { previousElementSibling, parentNode } = targetInstance.value

  if (previousElementSibling?.offsetHeight > parentNode.offsetHeight + 10) {
    targetVisible.value = false
    targetParentObserver.value.disconnect?.()
  } else {
    /** 如果目标还没被隐藏，就再加载一页 */
    emit('hitBottom')
  }
}

onMounted(() => {
  /** 仅在目标节点存在时，绑定监听一次 */
  if (targetObserver.value || !targetInstance.value) return

  /** 监听触底节点是否已经显示 */
  targetObserver.value = new IntersectionObserver(entries => {
    /** 判断目标节点是否已经滚动到可视区，并且目标节点已经被滚动条隐藏过 */
    if (entries[0].isIntersecting && targetVisible.value === false) {
      emit('hitBottom')
    } else {
      checkTargetHide()
    }
  }, props.observerOptions)

  /** 监听列表容器高度变化 */
  targetParentObserver.value = new MutationObserver(checkTargetHide)

  targetObserver.value.observe(targetInstance.value)
  targetParentObserver.value.observe(targetInstance.value.parentNode, {
    /** 子节点的变动（新增、删除或者更改） */
    childList: true,
    /** 属性的变动 */
    attributes: false,
    /** 节点内容或节点文本的变动 */
    characterData: false,
    /** 是否将观察器应用于该节点的所有后代节点 */
    subtree: true,
  })
})

onUnmounted(() => {
  targetObserver.value?.disconnect?.()
  targetParentObserver.value?.disconnect?.()
})
</script>

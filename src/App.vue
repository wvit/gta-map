<template>
  <RouterView />
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

/** 阻止右键菜单 */
const blockContextMenu = e => {
  e.preventDefault()
  return false
}

onMounted(() => {
  document.addEventListener('contextmenu', blockContextMenu)
})

onUnmounted(() => {
  document.removeEventListener('contextmenu', blockContextMenu)
})
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

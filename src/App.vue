<template>
  <div class="page-loading">
    <div class="loading">
      <span :style="{ transform: `rotate(${36 * 0}deg)`, opacity: 1 }"></span>
      <span :style="{ transform: `rotate(${36 * 1}deg)`, opacity: 0.9 }"></span>
      <span :style="{ transform: `rotate(${36 * 2}deg)`, opacity: 0.8 }"></span>
      <span :style="{ transform: `rotate(${36 * 3}deg)`, opacity: 0.7 }"></span>
      <span :style="{ transform: `rotate(${36 * 4}deg)`, opacity: 0.6 }"></span>
      <span :style="{ transform: `rotate(${36 * 5}deg)`, opacity: 0.5 }"></span>
      <span :style="{ transform: `rotate(${36 * 6}deg)`, opacity: 0.4 }"></span>
      <span :style="{ transform: `rotate(${36 * 7}deg)`, opacity: 0.3 }"></span>
      <span :style="{ transform: `rotate(${36 * 8}deg)`, opacity: 0.2 }"></span>
      <span :style="{ transform: `rotate(${36 * 9}deg)`, opacity: 0.1 }"></span>
    </div>
    <p class="loading-text">请稍等几秒，正在为您准备资源...</p>
  </div>

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
@keyframes loadingRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.page-loading {
  .loading,
  .loading-text {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
  }

  .loading {
    transform-origin: 0 30px;
    animation: loadingRotate 2s linear infinite;

    span {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #1890ff;
      border-radius: 10px;
      transform-origin: 0px 30px;
    }
  }

  .loading-text {
    margin-top: 70px;
    white-space: nowrap;
  }
}
</style>

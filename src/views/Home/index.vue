<template>
  <div class="map-home">
    <div id="map-container" @dragover="e => e.preventDefault()"></div>
    <Avatar
      class="user-avatar"
      :size="50"
      src="/images/userAvatar.jpeg"
      @click="showConfigDrawer"
    />
    <ConfigDrawer v-if="baiduMapInitStatus" v-model:visible="configVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Avatar } from 'ant-design-vue'
import { initMap } from '@/utils/business/initMap'
import ConfigDrawer from './ConfigDrawer.vue'

/** 配置栏显隐 */
const configVisible = ref(true)

/** 百度地图初始化状态 */
const baiduMapInitStatus = ref(false)

/** 打开侧边配置栏 */
const showConfigDrawer = () => (configVisible.value = true)

onMounted(async () => {
  await initMap()
  baiduMapInitStatus.value = true
})
</script>

<style scoped lang="less">
.map-home {
  position: relative;

  .user-avatar {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 9;
  }
}

#map-container {
  width: 100vw;
  height: 100vh;
}
</style>

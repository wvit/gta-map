<template>
  <div class="map-mobile-wrap">
    <Avatar
      class="user-avatar"
      :size="50"
      src="/images/userAvatar.jpeg"
      @click="configVisible = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Avatar } from 'ant-design-vue'

/** 配置栏显隐 */
const configVisible = ref(false)
</script>

<style scoped lang="less">
.map-mobile-wrap {
  .user-avatar {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 9;
  }
}
</style>

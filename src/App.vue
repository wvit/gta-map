<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.ant-popover-inner-content {
  padding: 12px !important;
}
</style>

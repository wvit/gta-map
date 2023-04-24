<template>
  <div class="icon-list">
    <Popover
      v-for="(item, index) of myIconsStore.icons"
      :key="index"
      placement="right"
      trigger="click"
    >
      <template #content>
        <div class="icon-operation">
          <span @click="myIconsStore.removeIcon(item)">从“我的图标”中移除</span>
        </div>
      </template>
      <div class="icon-item">
        <img draggable :src="`/src/assets/gtaIcons/${item.iconName}.png`" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-vue'
import { useMyIconsStore } from '@/stores/myIcons'

const myIconsStore = useMyIconsStore()
</script>

<style scoped lang="less"></style>

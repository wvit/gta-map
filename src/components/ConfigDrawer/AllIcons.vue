<template>
  <div class="icon-list">
    <Popover
      v-for="(item, index) of iconsConfig.list"
      :key="index"
      placement="right"
      trigger="click"
    >
      <template #content>
        <div class="icon-operation">
          <span @click="myIconsStore[findMyIcon(item) ? 'removeIcon' : 'addIcon'](item)">
            {{ findMyIcon(item) ? '从“我的图标”中移除' : '添加至“我的图标”' }}
          </span>
        </div>
      </template>
      <div class="icon-item">
        <img draggable :src="`/src/assets/gtaIcons/${item.iconName}.png`" @dragend="iconDragEnd" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-vue'
import { useMyIconsStore } from '@/stores/myIcons'
import { Dom } from '@/utils/dom'
import iconsConfig from '@/config/icons.json'

const { BMapGL, mapInstance } = window
const myIconsStore = useMyIconsStore()

/** 拖拽结束，将icon添加至地图 */
const iconDragEnd = e => {
  const { x, y, target } = e
  const customOverlay = new BMapGL.CustomOverlay(
    () => {
      return Dom.create('img', {
        src: target.src,
        draggable: false,
      }).setStyle({ width: '32px', height: '32px' })
    },
    {
      point: mapInstance.pixelToPoint({ x, y }),
      offsetY: -8,
      map: mapInstance,
    }
  )

  mapInstance.addOverlay(customOverlay)

  /** 地图缩放拖动后，添加的图标覆盖物会发生一个偏移，重新绘制刷新一下 */
  customOverlay.draw()
}

/** 查找icon,是否在“我的图标”中已存在 */
const findMyIcon = iconData => {
  return !!myIconsStore.icons.find(item => item.id === iconData.id)
}
</script>

<style scoped lang="less"></style>

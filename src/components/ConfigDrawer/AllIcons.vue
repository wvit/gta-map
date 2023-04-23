<template>
  <div class="icon-list">
    <Popover v-for="item of iconsConfig.list" :key="item" placement="right" trigger="click">
      <template #content>
        <div class="icon-operation">
          <span @click="collectIcon(item)">收藏</span>
        </div>
      </template>
      <div class="icon-item">
        <img draggable :src="`/src/assets/gtaIcons/${item}.png`" @dragend="iconDragEnd" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-vue'
import { parse } from 'qs'
import { storeHandles } from '@/IDB'
import { Dom } from '@/utils/dom'
import iconsConfig from '@/config/icons.json'

const { BMapGL, mapInstance } = window

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

/** 收藏icon图标 */
const collectIcon = async iconData => {
  const { id } = parse(iconData)
  const status = await storeHandles.myIcons.add({ id, iconData, type: 'image' })
  console.log(11111, status)
}
</script>

<style scoped lang="less">
.icon-operation {
  span {
    cursor: pointer;
  }
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  height: 100%;
  overflow-y: auto;
  padding: 0 18px 24px 18px;

  .ant-popover-open {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }

  .icon-item {
    margin: 4px;
    padding: 4px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    }

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

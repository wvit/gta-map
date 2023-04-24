<template>
  <div class="icon-list">
    <Popover v-for="(item, index) in props.iconList" :key="index" placement="right" trigger="click">
      <template #content>
        <div class="icon-operation">
          <span @click="myIconsStore[findMyIcon(item) ? 'removeIcon' : 'addIcon'](item)">
            {{ findMyIcon(item) ? '从“我的图标”中移除' : '添加至“我的图标”' }}
          </span>
        </div>
      </template>
      <div class="icon-item">
        <img
          draggable
          :src="`/src/assets/gtaIcons/${item.iconName}.png`"
          :id="item.id"
          @dragend="iconDragEnd"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-vue'
import { useMyIconsStore } from '@/stores/myIcons'
import { storeHandles } from '@/IDB'
import { Dom } from '@/utils/dom'

const { BMapGL, mapInstance } = window
const myIconsStore = useMyIconsStore()

const props = withDefaults(
  defineProps<{
    /** 图标列表 */
    iconList: any[]
  }>(),
  {
    iconList: () => [],
  }
)

/** 拖拽结束，将icon添加至地图 */
const iconDragEnd = e => {
  const { x, y, target } = e
  const point = mapInstance.pixelToPoint({ x, y: y - 8 })
  const { lng, lat } = point
  const iconId = target.id
  const id = [iconId, lng, lat].join('-')

  const markerIcon = Dom.create('img', {
    src: target.src,
    draggable: false,
    title: '双击移除此图标',
  }).setStyle({ width: '32px', height: '32px', cursor: 'pointer' })

  const customOverlay = new BMapGL.CustomOverlay(() => markerIcon, {
    point,
    map: mapInstance,
    properties: { id },
  })

  markerIcon.addEventListener('dblclick', e => {
    const findIcon = mapInstance.getOverlays().find(item => item.properties.id === id)
    e.stopPropagation()
    /** 调用地图API,移除标注图标 */
    findIcon?.remove()
    /** 将地图标注图标从数据库中移除 */
    storeHandles.markerIcons.delete(id)
  })

  mapInstance.addOverlay(customOverlay)
  /** 地图缩放拖动后，添加的图标覆盖物会发生一个偏移，重新绘制刷新一下 */
  customOverlay.draw()
  /** 将地图标注图标保存至数据库 */
  storeHandles.markerIcons.add({ id, lng, lat, iconId })
}

/** 查找icon,是否在“我的图标”中已存在 */
const findMyIcon = iconData => {
  return !!myIconsStore.icons.find(item => item.id === iconData.id)
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
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .icon-item {
    width: 32px;
    height: 32px;
    margin: 4px;
    padding: 4px;
    box-sizing: content-box;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
    }
  }
}
</style>

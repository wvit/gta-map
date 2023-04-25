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
        <img draggable :src="getIconSrc(item)" @dragend="iconDragEnd($event, item)" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-vue'
import { useMyIconsStore } from '@/stores/myIcons'
import { createMarkerIcon } from '@/utils/createMarkerIcon'
import { getIconSrc } from '@/utils/tools'

const { mapInstance } = window
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
const iconDragEnd = (e, iconData) => {
  const { x, y } = e
  const point = mapInstance.pixelToPoint({ x, y: y - 8 })

  createMarkerIcon({ point, iconData })
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

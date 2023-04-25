<template>
  <div
    class="icon-list"
    ref="iconListInstance"
    :style="{
      width: `calc(100% + ${props.scrollMargin}px)`,
    }"
  >
    <template v-for="(item, index) in props.iconList" :key="index">
      <Popover
        v-if="index < allowRenderNum"
        overlayClassName="icon-operation-popover"
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
        <div class="icon-item" :style="{ width: `${props.size}px`, height: `${props.size}px` }">
          <img draggable :src="getIconSrc(item)" @dragend="iconDragEnd($event, item)" />
        </div>
      </Popover>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Popover } from 'ant-design-vue'
import { useMyIconsStore } from '@/stores/myIcons'
import { createMarkerIcon } from '@/utils/createMarkerIcon'
import { getIconSrc } from '@/utils/tools'

const props = withDefaults(
  defineProps<{
    /** 图标列表 */
    iconList: any[]
    /** 图标大小 */
    size: number
    /** 用于调整滚动条与内容区的间距 */
    scrollMargin: number
  }>(),
  {
    iconList: () => [],
    size: 32,
    scrollMargin: 12,
  }
)

const { mapInstance } = window
const myIconsStore = useMyIconsStore()
const wrapMounted = ref(false)
const iconListInstance = ref()
const allowRenderNum = ref(0)

/** 拖拽结束，将icon添加至地图 */
const iconDragEnd = (e, iconData) => {
  const { x, y } = e
  const point = mapInstance.pixelToPoint({ x, y: y - 8 })
  createMarkerIcon({ point, iconData, save: true })
}

/** 查找icon,是否在“我的图标”中已存在 */
const findMyIcon = iconData => {
  return !!myIconsStore.icons.find(item => item.id === iconData.id)
}

/** 允许加载渲染下一页数据 */
const loadNextPage = () => {
  const { offsetWidth, offsetHeight } = iconListInstance.value || {}
  const columnNum = Math.floor((offsetWidth - props.scrollMargin) / (props.size + 16))
  const rowNum = Math.floor(offsetHeight / (props.size + 16))

  allowRenderNum.value += columnNum * (rowNum + 5)
}

onMounted(() => {
  setTimeout(() => {
    loadNextPage()
  })
})
</script>

<style scoped lang="less">
.icon-operation-popover {
  .icon-operation {
    span {
      cursor: pointer;
    }
  }
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  height: 100%;
  overflow-y: auto;

  .ant-popover-open {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .icon-item {
    margin: 4px;
    padding: 4px;
    box-sizing: content-box;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

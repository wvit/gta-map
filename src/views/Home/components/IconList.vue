<template>
  <div
    class="icon-list"
    :style="{
      width: `calc(100% + ${props.scrollMargin}px)`,
    }"
  >
    <InfiniteScroll @hitBottom="allowRenderNum += 100">
      <Drag
        item-key="index"
        :sort="false"
        :delay="props.dragDelay"
        :modelValue="props.iconList"
        @end="iconDragEnd"
      >
        <template #item="{ element: item, index }">
          <div
            v-if="index < allowRenderNum"
            :class="['icon-item', activeId === item.id ? 'icon-active' : '']"
            :style="{ width: `${props.size}px`, height: `${props.size}px` }"
            @click="$emit('selectIcon', item)"
          >
            <Popover overlayClassName="icon-operation-popover" placement="right" trigger="click">
              <template #content>
                <!-- 如果传入了 onSelectIcon 事件，就不展示 popover 的内容  -->
                <div v-if="!onSelectIcon" class="icon-operation">
                  <span v-if="findMyIcon(item)" @click="iconsStore.removeMyIcon(item.id)">
                    从“我的图标”中移除
                  </span>
                  <span v-else @click="iconsStore.addMyIcon(item)"> 添加至“我的图标 </span>
                </div>
              </template>
              <div class="icon-img-wrap">
                <img :src="getIconSrc(item.id)" />
              </div>
            </Popover>
          </div>
        </template>
      </Drag>
    </InfiniteScroll>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { Popover } from 'ant-design-vue'
import Drag from 'vuedraggable'
import InfiniteScroll from '@/components/InfiniteScroll.vue'
import { useIconsStore } from '@/stores/icons'
import { createMarkerIcon } from '@/utils/business/markerIcon'
import { getIconSrc } from '@/utils/file'
import { getMapPoint } from '@/utils/tools'

const props = withDefaults(
  defineProps<{
    /** 图标列表 */
    iconList: any[]
    /** 图标大小 */
    size?: number
    /** 用于调整滚动条与内容区的间距 */
    scrollMargin?: number
    /** 当前选中的图标id */
    activeId?: string
    /** 长按一定时间后才允许拖拽 */
    dragDelay?: number
  }>(),
  {
    iconList: () => [],
    size: 40,
    scrollMargin: 12,
    activeId: '',
    dragDelay: 0,
  }
)

const { onSelectIcon } = getCurrentInstance()?.vnode.props || {}
const iconsStore = useIconsStore()

/** 当前允许渲染icon的数量 */
const allowRenderNum = ref(0)

/** 拖拽结束，将icon添加至地图 */
const iconDragEnd = e => {
  const { originalEvent, item } = e
  const point = getMapPoint(originalEvent, { y: -8 })
  createMarkerIcon({ point, iconData: item._underlying_vm_, save: true })
}

/** 查找图标，是否在“我的图标”中已存在 */
const findMyIcon = iconData => {
  return !!iconsStore.myIcons.find(item => item.id === iconData.id)
}
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
  height: 100%;
  overflow-y: auto;

  & > div {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    user-select: none;
  }

  .ant-popover-open {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .icon-item {
    margin: 4px;
    padding: 4px;
    border-radius: 2px;
    box-sizing: border-box;
    cursor: grab;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }

    .icon-img-wrap {
      box-shadow: none;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon-active {
    border: 1px solid #4091f7;
  }
}
</style>

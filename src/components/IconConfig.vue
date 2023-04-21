<template>
  <Drawer
    class="icon-config-drawer"
    title="图标配置"
    width="635px"
    v-model:visible="visible"
    :mask="false"
  >
    <InputSearch :style="{ margin: '24px', width: '200px' }" @search="searchPoi" />
    <Collapse class="configs-wrap" :defaultActiveKey="1" :bordered="false">
      <Collapse.Panel key="1" header="拖拽图标至地图">
        <div class="icon-list">
          <img
            v-for="item of getArr(918)"
            draggable
            class="icon-item"
            :key="item"
            :src="`/src/assets/gtaIcons/${item}.png`"
            @dragend="iconDragEnd"
          />
        </div>
      </Collapse.Panel>
    </Collapse>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, InputSearch, Collapse } from 'ant-design-vue'
import { getArr } from '@/utils/tools'
import { Dom } from '@/utils/dom'

const { BMapGL, mapInstance } = window

const props = defineProps({
  /** 图标配置抽屉显隐 */
  visible: {
    type: Boolean,
  },
})

/** 抽屉显隐，重新声明便于双向绑定 */
const visible = ref(props.visible)

/** 搜索兴趣点列表 */
const searchPoi = searchValue => {
  const options = {
    onSearchComplete: results => {
      console.log(111111, results)
    },
    pageCapacity: 100,
  }
  const local = new BMapGL.LocalSearch(mapInstance, options)

  local.search(searchValue.split('，'))
}

/** icon拖拽结束 */
const iconDragEnd = e => {
  const { x, y, target } = e
  const point = mapInstance.pixelToPoint({ x: x - 16, y: y - 16 })

  const customOverlay = new BMapGL.CustomOverlay(
    () => {
      return Dom.create('img', {
        src: target.src,
        draggable: false,
      }).setStyle({ width: '32px', height: '32px' })
    },
    {
      point,
      map: mapInstance,
    }
  )

  mapInstance.addOverlay(customOverlay)
}
</script>

<style scoped lang="less">
#map-wrap {
  width: 100vw;
  height: 100vh;
}

.configs-wrap {
  margin-top: 24px;
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  user-select: none;

  .icon-item {
    margin: 4px;
    cursor: grab;
    width: 32px;
    height: 32px;
    background-size: 32px;
  }
}
</style>

<style>
.ant-drawer-body {
  padding: 0;
}
</style>

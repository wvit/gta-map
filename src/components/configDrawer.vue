<template>
  <Drawer
    class="config-drawer"
    title="地图配置"
    width="612px"
    v-model:visible="visible"
    :mask="false"
  >
    <Tabs :defaultActiveKey="1">
      <Tabs.TabPane key="1" tab="全部图标">
        <div class="icon-list">
          <Popover v-for="item of iconsConfig.list" :key="item" placement="right" trigger="click">
            <template #content>
              <div class="icon-operation">
                <span>收藏</span>
              </div>
            </template>
            <div class="icon-item">
              <img draggable :src="`/src/assets/gtaIcons/${item}`" @dragend="iconDragEnd" />
            </div>
          </Popover>
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="我的图标"> </Tabs.TabPane>
      <Tabs.TabPane key="3" tab="搜索">
        <InputSearch :style="{ margin: '24px', width: '200px' }" @search="searchPoi" />
      </Tabs.TabPane>
    </Tabs>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, InputSearch, Tabs, Popover } from 'ant-design-vue'
import { storeHandles } from '@/IDB'
import { Dom } from '@/utils/dom'
import iconsConfig from '@/config/icons.json'

const { BMapGL, mapInstance } = window

const props = defineProps({
  /** 配置抽屉显隐 */
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

<style lang="less">
.config-drawer {
  .ant-drawer-body {
    padding: 0;
  }

  .ant-tabs {
    height: 100%;

    .ant-tabs-nav {
      padding: 0 24px;
    }

    .ant-tabs-content {
      height: 100%;
    }
  }
}
</style>

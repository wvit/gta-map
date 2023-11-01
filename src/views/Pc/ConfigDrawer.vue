<template>
  <Drawer
    class="config-drawer"
    title="地图配置"
    width="612px"
    :visible="props.visible"
    :mask="false"
    @close="$emit('update:visible', false)"
  >
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane key="1" tab="已使用图标">
        <IconList :iconList="iconsStore.markerIcons.map(item => item.iconData)" />
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab="我的图标">
        <IconList :iconList="iconsStore.myIcons" />
      </Tabs.TabPane>
      <Tabs.TabPane key="3" tab="全部图标">
        <IconList :iconList="iconsStore.allIcons" />
      </Tabs.TabPane>
      <Tabs.TabPane key="4" tab="应用设置">
        <AppSetting />
      </Tabs.TabPane>
      <Tabs.TabPane key="5" tab="帮助 Q/A">
        <Help />
      </Tabs.TabPane>
    </Tabs>
  </Drawer>
</template>

<script setup lang="ts">
import { Drawer, Tabs } from 'ant-design-vue'
import { useIconsStore } from '@/stores/icons'
import IconList from '@/components/IconList.vue'
import AppSetting from '@/components/AppSetting.vue'
import Help from '@/components/Help.vue'

const props = defineProps({
  /** 配置抽屉显隐 */
  visible: {
    type: Boolean,
  },
})

const iconsStore = useIconsStore()
</script>

<style lang="less">
.config-drawer {
  .ant-drawer-body {
    padding: 0;
  }

  .ant-tabs {
    height: 100%;

    .ant-tabs-nav {
      padding: 0 24px;
      margin: 0;
    }

    .ant-tabs-content {
      height: 100%;
    }

    .ant-tabs-tabpane {
      padding: 12px;
    }
  }
}
</style>

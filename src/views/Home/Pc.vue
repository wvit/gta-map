<template>
  <div class="map-pc-wrap">
    <Avatar
      class="user-avatar"
      :size="50"
      src="/images/userAvatar.jpeg"
      @click="configVisible = true"
    />

    <Drawer
      class="config-drawer"
      title="地图配置"
      width="600px"
      :mask="false"
      v-model:visible="configVisible"
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Avatar, Drawer, Tabs } from 'ant-design-vue'
import { useIconsStore } from '@/stores/icons'
import IconList from './components/IconList.vue'
import AppSetting from './components/AppSetting.vue'
import Help from './components/Help.vue'

const iconsStore = useIconsStore()

/** 配置栏显隐 */
const configVisible = ref(false)

onMounted(() => {
  window._hmt.push(['_trackPageview', '/pc'])
})
</script>

<style scoped lang="less">
.map-pc-wrap {
  .user-avatar {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 9;
  }
}
</style>

<style lang="less">
.config-drawer {
  .ant-drawer-body {
    padding: 0 !important;
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
      overflow-y: auto;
    }
  }

  .ant-drawer-header {
    background: rgba(0, 0, 0, 0);
  }

  .ant-drawer-content {
    background: rgba(255, 255, 255, 0.9);
  }
}
</style>

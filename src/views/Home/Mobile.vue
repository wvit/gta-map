<template>
  <div class="map-mobile-wrap">
    <div
      class="config-bar-wrap"
      :style="{
        width: configVisible ? 'calc(100% - 40px)' : '50px',
      }"
    >
      <ul class="config-list">
        <li
          v-for="(item, index) of configList"
          :key="index"
          :class="{ active: item.key === configActive }"
          @click="configActive = item.key === configActive ? '' : item.key"
        >
          {{ item.content }}
        </li>
      </ul>
      <Avatar
        class="user-avatar"
        :size="50"
        src="/images/userAvatar.jpeg"
        @click="configVisible = !configVisible"
      />
    </div>

    <div
      class="config-icon-list-wrap"
      :style="{
        height:
          configVisible && ['0', '1', '2'].includes(configActive) ? 'calc(100vh - 100px)' : '50px',
      }"
    >
      <IconList
        :key="configActive"
        :iconList="currentIconList"
        :scrollMargin="6"
        :dragDelay="100"
      />
    </div>

    <div
      class="config-popover-wrap"
      :style="{
        height: configVisible && ['3', '4'].includes(configActive) ? '50vh' : '0',
      }"
    >
      <div class="popover-header-wrap">
        <img src="/images/close.png" class="close-btn" @click="configActive = ''" />
      </div>
      <div class="popover-content-wrap">
        <AppSetting v-if="configActive === '3'" />
        <Help v-else-if="configActive === '4'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Avatar } from 'ant-design-vue'
import { useIconsStore } from '@/stores/icons'
import IconList from './components/IconList.vue'
import AppSetting from './components/AppSetting.vue'
import Help from './components/Help.vue'

/** 配置栏列表 */
const configList = [
  { key: '0', content: '已使用图标' },
  { key: '1', content: '我的图标' },
  { key: '2', content: '全部图标' },
  { key: '3', content: '应用设置' },
  { key: '4', content: '帮助 Q/A' },
]

const iconsStore = useIconsStore()

/** 配置栏显隐 */
const configVisible = ref(false)

/** 当前选中的配置栏索引 */
const configActive = ref('')

/** 当前选中的图标列表配置 */
const currentIconList = computed(() => {
  return {
    '0': iconsStore.markerIcons.map(item => item.iconData),
    '1': iconsStore.myIcons,
    '2': iconsStore.allIcons,
  }[configActive.value]
})
</script>

<style lang="less">
.map-mobile-wrap {
  .user-avatar {
    flex-shrink: 0;
    cursor: pointer;
  }

  .config-icon-list-wrap,
  .config-bar-wrap,
  .config-popover-wrap {
    position: absolute;
    right: 20px;
    top: 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    transition: 0.2s;
  }

  .config-bar-wrap {
    z-index: 9;
    text-align: right;
    display: flex;
    justify-content: end;
    height: 50px;
    overflow: hidden;

    .config-list {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      height: 50px;
      margin: 0 10px;

      li {
        width: 100px;
        line-height: 50px;
        flex-shrink: 0;
        text-align: center;
        font-weight: 500;
        cursor: pointer;

        &.active {
          color: #1890ff;
        }
      }
    }
  }

  .config-icon-list-wrap {
    z-index: 8;
    width: 50px;
    height: calc(100vh - 100px);
    padding-left: 1px;

    .icon-list {
      margin: 60px 0 10px 0;
      height: calc(100% - 70px);
    }
  }

  .config-popover-wrap {
    width: 100%;
    height: 50vh;
    top: auto;
    left: 0;
    bottom: 0;
    z-index: 99;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .popover-header-wrap {
      text-align: right;

      .close-btn {
        padding: 10px;
        width: 40px;
      }
    }

    .popover-content-wrap {
      height: 0;
      flex: 1;
      padding-bottom: 20px;
      overflow-y: auto;
    }

    .ant-col {
      max-width: unset;
      white-space: nowrap;
      margin-bottom: 8px;
    }
  }
}
</style>

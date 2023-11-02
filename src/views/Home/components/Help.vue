<template>
  <div class="help-wrap">
    <Collapse v-model:activeKey="openPanelKeys" ghost>
      <Collapse.Panel key="1" header="如何向地图中添加图标？">
        <p>按住列表中的图标， 直接向地图中拖入即可</p>
      </Collapse.Panel>

      <Collapse.Panel key="2" header="怎么删除已添加的图标？">
        <p>点击地图中你想要删除的图标，或者在“应用配置”中清空所有图标</p>
      </Collapse.Panel>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse } from 'ant-design-vue'

const openPanelKeys = ref([1, 2])
</script>

<style lang="less">
.ant-collapse-header {
  font-weight: bold;
}
</style>

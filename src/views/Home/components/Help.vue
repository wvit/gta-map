<template>
  <div class="help-wrap">
    <Collapse v-model:activeKey="openPanelKeys" ghost>
      <Collapse.Panel key="0" header="如何向地图中添加图标？">
        按住列表中的图标， 直接向地图中拖入即可
      </Collapse.Panel>
      <Collapse.Panel key="1" header="怎么删除已添加的图标？">
        点击地图中你想要删除的图标，或者在“应用配置”中清空所有图标
      </Collapse.Panel>
      <Collapse.Panel key="2" header="怎么 分享/使用 别人的配置？">
        在“应用配置”中先将你的地图配置导出，然后按照对应类型（文本或文件）导入即可
      </Collapse.Panel>
      <Collapse.Panel key="3" header="在使用过程中功能没有反应？">
        您可以刷新当前页面，或者在“应用配置”中“清空所有图标”，最后尝试使用
        <a href="https://www.google.cn/chrome/index.html" target="_blank">chrome</a> 、
        <a href="http://www.firefox.com.cn/" target="_blank">火狐</a>
        等浏览器。
      </Collapse.Panel>
      <Collapse.Panel key="4" header="有问题或者建议需要反馈？"> 1083926534@qq.com </Collapse.Panel>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse } from 'ant-design-vue'
import { getArr } from '@/utils/tools'

const openPanelKeys = ref(getArr(5))
</script>

<style lang="less">
.help-wrap {
  .ant-collapse-header {
    font-weight: bold;
  }

  .ant-collapse-content-box {
    padding-top: 0 !important;
  }
}
</style>

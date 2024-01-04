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
      <Collapse.Panel key="3" header="不想每次打开浏览器输入网址？">
        <p>您可以在浏览器中，点击“安装应用”或者“添加到主屏幕”（以chrome为例）。</p>
        <p>您需要在 手机设置>应用管理>chrome>权限管理 里面，允许chrome添加桌面快捷方式。</p>
        <p><img :style="{ width: '50%' }" src="/images/help1.jpg" /></p>
        <p>再点开浏览器右侧菜单，点击“安装应用”或者“添加到主屏幕”，然后等待安装即可</p>
        <p><img :style="{ width: '50%' }" src="/images/help2.jpg" /></p>
      </Collapse.Panel>
      <Collapse.Panel key="4" header="在使用过程中功能没有反应？">
        您可以刷新当前页面，或者在“应用配置”中“清空所有图标”，最后尝试使用
        <a href="https://www.google.cn/chrome/index.html" target="_blank">chrome</a> 、
        <a href="http://www.firefox.com.cn/" target="_blank">火狐</a>
        等浏览器。
      </Collapse.Panel>
      <Collapse.Panel key="5" header="有问题或者建议需要反馈？">
        如果你想提什么功能建议，或者UI风格建议都可以联系我
        <p>微信：vvvwv-o_o-</p>
        <p>邮箱：1083926534@qq.com</p>
      </Collapse.Panel>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse } from 'ant-design-vue'
import { getArr } from '@/utils/tools'

const openPanelKeys = ref(getArr(6))
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

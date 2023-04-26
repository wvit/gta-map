<template>
  <div class="poi-config">
    <Collapse :defaultActiveKey="1" ghost>
      <Collapse.Panel key="1" header="商店">
        <Form>
          <Form.Item label="图标显隐" name="visible">
            <Switch :checked="true" checkedChildren="显示" unCheckedChildren="隐藏" />
          </Form.Item>
          <Form.Item label="展示图标" name="display-icon">
            <Popover overlayClassName="poi-icon-setting-popover" placement="right">
              <template #content>
                <div class="poi-icon-setting">
                  <div class="setting-header">
                    <span>从</span>
                    <Radio.Group v-model:value="poiIconFrom">
                      <Radio.Button value="my">我的图标</Radio.Button>
                      <Radio.Button value="all">全部图标</Radio.Button>
                    </Radio.Group>
                    <span>获取</span>
                  </div>
                  <div class="setting-body">
                    <IconList
                      v-show="poiIconFrom === 'my'"
                      :size="28"
                      :iconList="myIconsStore.icons"
                    />
                    <IconList
                      v-show="poiIconFrom === 'all'"
                      :size="28"
                      :iconList="iconsConfig.list"
                    />
                  </div>
                </div>
              </template>
              <div class="display-icon">
                <img src="/src/assets/gtaIcons/sort=4&id=5bb1466a6f9e4ef6be7080c1084ddc21.png" />
              </div>
            </Popover>
          </Form.Item>
        </Form>
      </Collapse.Panel>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, Form, Switch, Popover, Radio } from 'ant-design-vue'
import { useMyIconsStore } from '@/stores/myIcons'
import iconsConfig from '@/config/icons.json'
import IconList from './IconList.vue'

const { BMapGL, mapInstance } = window
const myIconsStore = useMyIconsStore()
const poiIconFrom = ref<'my' | 'all'>('my')

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
</script>

<style scoped lang="less">
.poi-icon-setting-popover {
  .poi-icon-setting {
    width: 308px;
    height: 400px;
    display: flex;
    flex-direction: column;
  }

  .setting-header {
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      margin: 0 16px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .setting-body {
    height: 0;
    flex: 1;
    padding-top: 8px;
  }
}

.poi-config {
  .display-icon {
    padding: 4px;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

<style lang="less">
.poi-config {
  .ant-collapse-header {
    font-weight: bold;
  }

  .ant-form-item-label {
    display: flex;
    align-items: center;
  }
}
</style>

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Dom } from './utils'
import './registerServiceWorker'

/** 添加iconfont链接 */
Dom.query('head').create('script', {
  src: 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=XTUtb8INdHHtThuIi56GhuAkjwTpIuaX&callback=initialize',
})

createApp(App).use(router).mount('#app')

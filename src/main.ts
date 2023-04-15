import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { Dom } from '../src/utils'
import router from './router'

const app = createApp(App)

Dom.query('head').create('script', {
  src: 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=XTUtb8INdHHtThuIi56GhuAkjwTpIuaX&callback=initialize'
})

app.use(createPinia())
app.use(router)

app.mount('#app')

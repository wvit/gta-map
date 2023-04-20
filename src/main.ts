import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import 'ant-design-vue/dist/antd.css'
import { Drawer } from 'ant-design-vue';

const app = createApp(App)

app.use(Drawer)
app.use(createPinia()).use(router)
app.mount('#app')

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pcHome',
      component: () => import('../views/Pc/index.vue'),
    },
  ],
})

/** 在源码里面随机插入一段防御代码 */
if ('Z3RhLW1hcC5vbmxpbmU=' !== btoa(location.hostname) && !import.meta.env.DEV) {
  document.body.innerHTML = ''
}

export default router

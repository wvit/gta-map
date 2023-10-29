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

export default router

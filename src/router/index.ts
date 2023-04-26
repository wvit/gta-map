import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mapHome',
      component: () => import('../views/MapHome/index.vue'),
    },
  ],
})

export default router

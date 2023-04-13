import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/Map.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

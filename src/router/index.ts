import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory('./'),
  routes,
})

export default router

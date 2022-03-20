import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Main from '@/views/main/index.vue'
import localCache from '@/utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Main
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  const token = localCache.getCache('token')
  let isNotFound = true
  routes.map((item) => {
    if (item.path === to.path) {
      return (isNotFound = false)
    }
  })
  if (to.path !== '/login') {
    if (!token) {
      return '/login'
    }
  }
  if (isNotFound) {
    return '/404'
  }
})

export default router

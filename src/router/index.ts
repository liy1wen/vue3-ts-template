import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/analysis/dashboard',
    component: () => import('@/views/main/index.vue'),
    meta: {
      title: '核心技术'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '页面找不到~'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

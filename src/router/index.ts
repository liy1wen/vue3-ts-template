import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/Layout')

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      hidden: false
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/home/dashboard/index.vue'),
        meta: { title: 'Dashboard', icon: 'icon-home' }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    meta: {
      title: 'Not Found',
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      hidden: true,
      title: 'Not Found'
    }
  }
]
/**
 * 动态路由
 * 用来放置有权限（roles 属性）的路由
 * 必须带有 name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = []
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router

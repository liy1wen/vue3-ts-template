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
    redirect: '/analysis/dashboard',
    meta: {
      hidden: false,
      icon: 'icon-home'
    },
    children: [
      {
        path: '/analysis/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/analysis/dashboard/dashboard.vue'),
        meta: { title: 'dashboard', hidden: false }
      },
      {
        path: '/analysis/overview',
        name: 'Overview',
        component: () => import('@/views/analysis/overview/overview.vue'),
        meta: { title: 'overview', hidden: false }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/category',
    meta: {
      hidden: false,
      icon: 'icon-home'
    },
    children: [
      {
        path: '/product/category',
        name: 'Category',
        component: () => import('@/views/product/category/category.vue'),
        meta: { title: 'category', hidden: false }
      },
      {
        path: '/product/goods',
        name: 'Goods',
        component: () => import('@/views/product/goods/goods.vue'),
        meta: { title: 'goods', hidden: false }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/department',
    meta: {
      hidden: false,
      icon: 'icon-home'
    },
    children: [
      {
        path: '/system/department',
        name: 'Department',
        component: () => import('@/views/system/department/department.vue'),
        meta: { title: 'department', hidden: false }
      },
      {
        path: '/system/menu',
        name: 'Menu',
        component: () => import('@/views/system/menu/menu.vue'),
        meta: { title: 'menu', hidden: false }
      },
      {
        path: '/system/role',
        name: 'Role',
        component: () => import('@/views/system/role/role.vue'),
        meta: { title: 'role', hidden: false }
      },
      {
        path: '/system/user',
        name: 'Role',
        component: () => import('@/views/system/user/user.vue'),
        meta: { title: 'user', hidden: false }
      }
    ]
  },
  {
    path: '/story',
    component: Layout,
    redirect: '/story/chat',
    meta: {
      hidden: false,
      icon: 'icon-home'
    },
    children: [
      {
        path: '/story/chat',
        name: 'Story',
        component: () => import('@/views/story/chat/chat.vue'),
        meta: { title: 'chat', hidden: false }
      },
      {
        path: '/story/list',
        name: 'List',
        component: () => import('@/views/story/list/list.vue'),
        meta: { title: 'list', hidden: false }
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

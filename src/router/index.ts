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
    redirect: '/analysis/overview',
    name: '系统总览',
    meta: {
      hidden: false,
      icon: 'icon-home'
    },
    children: [
      {
        path: '/analysis/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/analysis/dashboard/dashboard.vue'),
        meta: { title: '商品统计', hidden: false }
      },
      {
        path: '/analysis/overview',
        name: 'Overview',
        component: () => import('@/views/analysis/overview/overview.vue'),
        meta: { title: '核心技术', hidden: false }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/category',
    name: '商品中心',
    meta: {
      hidden: false,
      icon: 'icon-tuijian'
    },
    children: [
      {
        path: '/product/category',
        name: 'Category',
        component: () => import('@/views/product/category/category.vue'),
        meta: { title: '商品类别', hidden: false }
      },
      {
        path: '/product/goods',
        name: 'Goods',
        component: () => import('@/views/product/goods/goods.vue'),
        meta: { title: '商品信息', hidden: false }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/department',
    name: '系统管理',
    meta: {
      hidden: false,
      icon: 'icon-shezhi'
    },
    children: [
      {
        path: '/system/department',
        name: 'Department',
        component: () => import('@/views/system/department/department.vue'),
        meta: { title: '部门管理', hidden: false }
      },
      {
        path: '/system/menu',
        name: 'Menu',
        component: () => import('@/views/system/menu/menu.vue'),
        meta: { title: '菜单管理', hidden: false }
      },
      {
        path: '/system/role',
        name: 'Role',
        component: () => import('@/views/system/role/role.vue'),
        meta: { title: '角色管理', hidden: false }
      },
      {
        path: '/system/user',
        name: 'Role',
        component: () => import('@/views/system/user/user.vue'),
        meta: { title: '用户管理', hidden: false }
      }
    ]
  },
  {
    path: '/story',
    component: Layout,
    redirect: '/story/chat',
    name: '随便聊聊',
    meta: {
      hidden: false,
      icon: 'icon-xiaoxi'
    },
    children: [
      {
        path: '/story/chat',
        name: 'Story',
        component: () => import('@/views/story/chat/chat.vue'),
        meta: { title: '你的故事', hidden: false }
      },
      {
        path: '/story/list',
        name: 'List',
        component: () => import('@/views/story/list/list.vue'),
        meta: { title: '故事列表', hidden: false }
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

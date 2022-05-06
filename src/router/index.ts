import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '@/Layout'
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
    path: '/track',
    component: Layout,
    redirect: '/track/track-list',
    name: 'Track',
    meta: {
      title: 'Track',
      icon: 'icon-gedan',
      roles: [], // 可以在根路由中设置角色
      hidden: false // 将始终显示根菜单
    },
    children: [
      {
        path: '/track/track-list',
        component: () => import('@/views/track/list/index.vue'),
        name: 'TrackList',
        meta: {
          title: 'Track List',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/track/track-review',
        component: () => import('@/views/track/review/index.vue'),
        name: 'TrackReview',
        meta: {
          title: 'Track Review' // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        }
      },
      {
        path: '/track/track-editCreate',
        component: () => import('@/views/track/editCreate/index.vue'),
        name: 'TrackEditCreate',
        meta: {
          title: 'Track EditCreate', // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
          hidden: true
        }
      }
    ]
  },
  {
    path: '/clip',
    component: Layout,
    redirect: '/clip/clip-list',
    name: 'Clip',
    meta: {
      title: 'Clip',
      icon: 'icon-daimapianduan',
      roles: [], // 可以在根路由中设置角色
      hidden: false // 将始终显示根菜单
    },
    children: [
      {
        path: '/clip/clip-list',
        component: () => import('@/views/clip/list/index.vue'),
        name: 'ClipList',
        meta: {
          title: 'Clip List',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/clip/clip-editCreate',
        component: () => import('@/views/clip/editCreate/index.vue'),
        name: 'ClipEditCreate',
        meta: {
          title: 'Clip EditCreate', // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
          hidden: true
        }
      }
    ]
  },
  {
    path: '/play',
    component: Layout,
    redirect: '/play/play-list',
    name: 'Play',
    meta: {
      title: 'Play',
      icon: 'icon-gequ',
      roles: [], // 可以在根路由中设置角色
      hidden: false // 将始终显示根菜单
    },
    children: [
      {
        path: '/play/play-list',
        component: () => import('@/views/play/list/index.vue'),
        name: 'PlayList',
        meta: {
          title: 'Play List',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/play/play-editCreate',
        component: () => import('@/views/play/editCreate/index.vue'),
        name: 'PlayEditCreate',
        meta: {
          title: 'Play EditCreate', // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
          hidden: true
        }
      }
    ]
  },
  {
    path: '/video',
    component: Layout,
    redirect: '/video/video-list',
    name: 'Video',
    meta: {
      title: 'video',
      icon: 'icon-shipin',
      roles: [], // 可以在根路由中设置角色
      hidden: false // 将始终显示根菜单
    },
    children: [
      {
        path: '/video/video-list',
        component: () => import('@/views/video/list/index.vue'),
        name: 'VideoList',
        meta: {
          title: 'Video List',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/video/video-editCreate',
        component: () => import('@/views/video/editCreate/index.vue'),
        name: 'VideoEditCreate',
        meta: {
          title: 'Video EditCreate', // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
          hidden: true
        }
      }
    ]
  },
  {
    path: '/discover',
    component: Layout,
    redirect: '/discover/discover-list',
    name: 'Discover',
    meta: {
      title: 'discover',
      icon: 'icon-faxian',
      roles: [], // 可以在根路由中设置角色
      hidden: false // 将始终显示根菜单
    },
    children: [
      {
        path: '/discover/discover-list',
        component: () => import('@/views/discover/list/index.vue'),
        name: 'DiscoverList',
        meta: {
          title: 'Discover List',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/discover/discover-track',
        component: () => import('@/views/discover/track/index.vue'),
        name: 'DiscoverTrack',
        meta: {
          title: 'Discover Track',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/discover/discover-playlist',
        component: () => import('@/views/discover/playlist/index.vue'),
        name: 'DiscoverPlaylist',
        meta: {
          title: 'Discover Playlist',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/discover/discover-trending',
        component: () => import('@/views/discover/trending/index.vue'),
        name: 'DiscoverTrending',
        meta: {
          title: 'Discover Trending',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/discover/discover-genre',
        component: () => import('@/views/discover/genre/index.vue'),
        name: 'DiscoverGenre',
        meta: {
          title: 'Discover Genre',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/discover/discover-clip',
        component: () => import('@/views/discover/clip/index.vue'),
        name: 'DiscoverClip',
        meta: {
          title: 'Discover Clip',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/discover/discover-video',
        component: () => import('@/views/discover/video/index.vue'),
        name: 'DiscoverVideo',
        meta: {
          title: 'Discover Video',
          roles: [] // 或者在子导航中设置角色
        }
      },
      {
        path: '/discover/discover-editCreate',
        component: () => import('@/views/discover/editCreate/index.vue'),
        name: 'DiscoverEditCreate',
        meta: {
          title: 'Discover EditCreate', // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
          hidden: true
        }
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

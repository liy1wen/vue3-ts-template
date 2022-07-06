import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import localCache from '@/utils/cache'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import store from '@/store'
// import { RouteRecordRaw } from 'vue-router'

NProgress.configure({ showSpinner: false })
const whiteList = ['/login']
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  document.title = to.meta.title as string
  const token = localCache.getCache('token')
  NProgress.start()
  // 判断该用户是否登录
  if (token) {
    if (to.path === '/login') {
      // 如果登录，并准备进入 login 页面，则重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      // const roles = ['editor']
      // store.dispatch('routesModule/generateRoutes', { roles })
      // const dynamicRoutes = store.state.routesModule.dynamicRoutes
      // dynamicRoutes.forEach((route: any) => {
      //   router.addRoute(route)
      // })
      // 确保添加路由已完成
      // 设置 replace: true, 因此导航将不会留下历史记录
      // next({ ...to, replace: true })
      next()
    }
  } else {
    // 如果没有 token
    if (whiteList.includes(to.path)) {
      // 如果在免登录的白名单中，则直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
import { generateBtnPermissions } from '@/utils/generateBtnPermissions'
import { accountLogin, getUserInfo, getUserMenu } from '@/api/login'
import { IRequest } from '@/api/login/types'
import router from '@/router'
import { generateRoutes } from '@/utils/generateRoutes'
export const userStore = defineStore('user', {
  state: () => {
    return {
      userInfo: localCache.getCache('userInfo') ?? '',
      token: localCache.getCache('token') ?? '',
      userMenu: localCache.getCache('userMenu') ?? [],
      btnPermissions: localCache.getCache('btnPermissions') ?? []
    }
  },
  getters: {},
  actions: {
    setUserMenu(userMenu: any) {
      this.userMenu = userMenu
      // userMenus => routes
      const routes = generateRoutes(userMenu)
      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      const btnPermissions = generateBtnPermissions(userMenu)
      localCache.setCache('btnPermissions', btnPermissions)
      this.btnPermissions = btnPermissions
    },
    async login(payload: IRequest) {
      // 登录获取token
      const { data } = await accountLogin(payload)
      this.token = data.toke
      localCache.setCache('token', data.token)
      // 获取用户信息
      const userInfo = await getUserInfo(data.id)
      this.userInfo = userInfo.data
      localCache.setCache('userInfo', userInfo.data)
      // 获取菜单
      const userMenu = await getUserMenu(userInfo.data.role.id)
      this.setUserMenu(userMenu.data)
      localCache.setCache('userMenu', userMenu.data)
      router.replace('/main/analysis/dashboard')
    },
    loginOut() {
      const name = localCache.getCache('name')
      const password = localCache.getCache('password')
      localCache.clearCache()
      if (name) {
        localCache.setCache('name', name)
        localCache.setCache('password', password)
      }
      router.replace({ path: '/' })
      // location.reload()
    }
  }
})

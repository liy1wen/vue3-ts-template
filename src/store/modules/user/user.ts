import { Module } from 'vuex'
import { IUserState } from './types'
import { IRootState } from '../../types'
import localCache from '@/utils/cache'
import { accountLogin, getUserInfo, getUserMenu } from '@/api/login'
import { IRequest } from '@/api/login/types'
import router from '@/router'
import { generateRoutes } from '@/utils/generateRoutes'

export const userModule: Module<IUserState, IRootState> = {
  namespaced: true,
  state: {
    userInfo: localCache.getCache('userInfo') ?? '',
    token: localCache.getCache('token') ?? '',
    userMenu: localCache.getCache('userMenu') ?? []
  },
  getters: {},
  mutations: {
    SET_TOKEN(state: IUserState, token: string) {
      state.token = token
    },
    SET_USERINFO(state: IUserState, userInfo: any) {
      state.userInfo = userInfo
    },
    SET_USERMENU(state: IUserState, userMenu: any) {
      state.userMenu = userMenu
      // userMenus => routes
      const routes = generateRoutes(userMenu)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async login({ commit }, payload: IRequest) {
      // 登录获取token
      const { data } = await accountLogin(payload)
      commit('SET_TOKEN', data.token)
      localCache.setCache('token', data.token)
      // 获取用户信息
      const userInfo = await getUserInfo(data.id)
      commit('SET_USERINFO', userInfo.data)
      localCache.setCache('userInfo', userInfo.data)
      // 获取菜单
      const userMenu = await getUserMenu(userInfo.data.id)
      commit('SET_USERMENU', userMenu.data)
      localCache.setCache('userMenu', userMenu.data)
      router.push('/main/analysis/overview')
    }
  }
}

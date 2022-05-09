/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-04-02 11:56:43
 * @LastEditors: Seven
 * @LastEditTime: 2022-04-07 10:07:37
 */
import { Module } from 'vuex'
import { IUserState } from './types'
import { IRootState } from '../../types'
import localCache from '@/utils/cache'
import { accountLogin, getUserInfo, getUserMenu } from '@/api/login'
import { IRequest } from '@/api/login/types'
import router from '@/router'

export const userModule: Module<IUserState, IRootState> = {
  namespaced: true,
  state: {
    userInfo: localCache.getCache('userInfo') ?? '',
    token: localCache.getCache('token') ?? '',
    userMenu: localCache.getCache('userMenu') ?? [],
    btnPermissions: localCache.getCache('btnPermissions') ?? []
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
      // const routes = generateRoutes(userMenu)

      // // 将routes => router.main.children
      // routes.forEach((route) => {
      //   router.addRoute('main', route)
      // })

      // const btnPermissions = generateBtnPermissions(userMenu)
      // localCache.setCache('btnPermissions', btnPermissions)
      // state.btnPermissions = btnPermissions
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
      const userMenu = await getUserMenu(userInfo.data.role.id)
      commit('SET_USERMENU', userMenu.data)
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
      router.replace({ path: '/login' })
      // location.reload()
    }
  }
}

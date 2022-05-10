import { Module } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes, asyncRoutes } from '@/router'
import { IRootState } from '../types'
import router from '@/router'
/**
 * 判断用户是否有权限访问单个路由
 * roles：用户角色
 * route：访问的路由
 */
const hasPermission = (roles: string[], route: any) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return route.meta.roles.includes(role)
      } else {
        return false
      }
    })
  } else {
    return true
  }
}
/**
 * 筛选可访问的动态路由
 * roles：用户角色
 * route：访问的动态列表
 */
const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}
interface IPermissionState {
  routes: RouteRecordRaw[]
  dynamicRoutes: RouteRecordRaw[]
}
export const routesModule: Module<IPermissionState, IRootState> = {
  namespaced: true,
  state: {
    routes: [],
    dynamicRoutes: []
  },
  getters: {},
  mutations: {
    SET_ROUTES(state, routes) {
      state.routes = routes
    },
    SET_DYNAMICROUTES(state, routes) {
      state.dynamicRoutes = routes
    }
  },
  actions: {
    generateRoutes({ commit }, { roles }) {
      // accessedRoutes: 筛选出的动态路由
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      console.log(accessedRoutes, 'accessedRoutes')
      // 将accessedRoutes和默认路由constantRoutes拼接得到完整可访问路由
      commit('SET_ROUTES', constantRoutes.concat(accessedRoutes))
      commit('SET_DYNAMICROUTES', accessedRoutes)
      // 通过addRoute将路由挂载到router上
      accessedRoutes.forEach((route) => {
        router.addRoute(route)
      })
    }
  }
}

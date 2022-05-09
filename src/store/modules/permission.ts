import { Module } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes, asyncRoutes } from '@/router'
import { IRootState } from '../types'
import router from '@/router'
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
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      console.log(accessedRoutes, 'accessedRoutes')
      commit('SET_ROUTES', constantRoutes.concat(accessedRoutes))
      commit('SET_DYNAMICROUTES', accessedRoutes)
      accessedRoutes.forEach((route) => {
        router.addRoute(route)
      })
    }
  }
}

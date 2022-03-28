import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../types'
import { getDataList } from '@/api/system/index'
export const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0
  },
  getters: {},
  mutations: {
    SET_USERSLIST(state: ISystemState, list: any[]) {
      state.usersList = list
    },
    SET_USERSCOUNT(state: ISystemState, count: number) {
      state.usersCount = count
    },
    SET_ROLELIST(state: ISystemState, list: any[]) {
      state.roleList = list
    },
    SET_ROLECOUNT(state: ISystemState, count: number) {
      state.roleCount = count
    },
    SET_GOODSLIST(state: ISystemState, list: any[]) {
      state.goodsList = list
    },
    SET_GOODSCOUNT(state: ISystemState, count: number) {
      state.goodsCount = count
    },
    SET_MENULIST(state: ISystemState, list: any[]) {
      state.menuList = list
    },
    SET_MENUCOUNT(state: ISystemState, count: number) {
      state.menuCount = count
    }
  },
  actions: {
    async getDataList({ commit }, payload) {
      const { url, params } = payload
      const { data } = await getDataList(url, params)
      const dataType = url.toUpperCase()
      commit(`SET_${dataType}COUNT`, data.totalCount)
      commit(`SET_${dataType}LIST`, data.list)
    }
  }
}

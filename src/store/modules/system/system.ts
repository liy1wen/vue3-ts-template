import { Module } from 'vuex'
import { ElMessage } from 'element-plus'
import { ISystemState } from './types'
import { IRootState } from '../../types'
import { getDataList, deleteData, createData, updateData } from '@/api/system/index'

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
    menuCount: 0,
    departmentList: [],
    departmentCount: 0,
    categoryList: [],
    categoryCount: 0,
    storyList: [],
    storyCount: 0,
    url: '',
    requestParams: {}
  },
  getters: {},
  mutations: {
    SET_URL(state: ISystemState, url: string) {
      state.url = url
    },
    SET_REQUESTPARAMS(state: ISystemState, params: any) {
      state.requestParams = params
    },
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
    },
    SET_DEPARTMENTLIST(state: ISystemState, list: any[]) {
      state.departmentList = list
    },
    SET_DEPARTMENTCOUNT(state: ISystemState, count: number) {
      state.departmentCount = count
    },
    SET_CATEGORYLIST(state: ISystemState, list: any[]) {
      state.categoryList = list
    },
    SET_CATEGORYCOUNT(state: ISystemState, count: number) {
      state.categoryCount = count
    },
    SET_STORYLIST(state: ISystemState, list: any[]) {
      state.storyList = list
    },
    SET_STORYCOUNT(state: ISystemState, count: number) {
      state.storyCount = count
    }
  },
  actions: {
    async getDataList({ commit }, payload) {
      const { url, params } = payload
      commit('SET_URL', url)
      commit('SET_REQUESTPARAMS', params)
      const { data } = await getDataList(url, params)
      const dataType = url.toUpperCase()
      commit(`SET_${dataType}COUNT`, data.totalCount)
      commit(`SET_${dataType}LIST`, data.list)
    },
    async deleteData({ dispatch, state }, payload) {
      const { url, id } = payload
      const { code, data } = await deleteData(url, id)
      if (code == 0) {
        ElMessage.success(data)
        dispatch('getDataList', { url: state.url, params: state.requestParams })
      }
    },
    async createData({ dispatch, state }, payload) {
      const { url, params } = payload
      const { code, data } = await createData(url, params)
      if (code == 0) {
        ElMessage.success(data)
        dispatch('getDataList', { url: state.url, params: state.requestParams })
      }
    },
    async updateData({ dispatch, state }, payload) {
      const { url, params } = payload
      const { code, data } = await updateData(url, params)
      if (code == 0) {
        ElMessage.success(data)
        dispatch('getDataList', { url: state.url, params: state.requestParams })
      }
    }
  }
}

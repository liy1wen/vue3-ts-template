import { Module } from 'vuex'
import { IRootState } from '../../types'
import { IAnalysisState } from './types'
import {
  getCategorySale,
  getCategoryCount,
  getCitySale,
  getCategoryCollection,
  getTopSale,
  getTotalAmount
} from '@/api/analysis'
export const analysisModule: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state: {
    categoryCount: [],
    categorySale: [],
    citySale: [],
    categoryCollection: [],
    topSale: [],
    totalAmount: []
  },
  mutations: {
    SET_CATEGORYCOUNT(state, list) {
      state.categoryCount = list
    },
    SET_CATEGORYSALE(state, list) {
      state.categorySale = list
    },
    SET_CATEGORYCOLLECTION(state, list) {
      state.categoryCollection = list
    },
    SET_CITYSALE(state, list) {
      state.citySale = list
    },
    SET_TOPSALE(state, list) {
      state.topSale = list
    },
    SET_TOTALAMOUNT(state, list) {
      state.totalAmount = list
    }
  },
  actions: {
    async getAnalysisData({ commit }) {
      const analysisData = await getCategorySale()
      commit('SET_CATEGORYSALE', analysisData.data)
      const categoryCount = await getCategoryCount()
      commit('SET_CATEGORYCOUNT', categoryCount.data)
      const categoryCollection = await getCategoryCollection()
      commit('SET_CATEGORYCOLLECTION', categoryCollection.data)
      const citySale = await getCitySale()
      commit('SET_CITYSALE', citySale.data)
      const topSale = await getTopSale()
      commit('SET_TOPSALE', topSale.data)
      const totalAmount = await getTotalAmount()
      commit('SET_TOTALAMOUNT', totalAmount.data)
    }
  }
}

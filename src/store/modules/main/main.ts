import { Module } from 'vuex'
import { IMainState } from './types'
import { IRootState } from '../../types'

export const mainModule: Module<IMainState, IRootState> = {
  namespaced: true,
  state: {
    isCollapse: false
  },
  getters: {},
  mutations: {
    SET_ISCOLLAPSE(state: IMainState, isCollapse: boolean) {
      state.isCollapse = isCollapse
    }
  },
  actions: {}
}

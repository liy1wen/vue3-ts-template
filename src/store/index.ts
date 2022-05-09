import { createStore } from 'vuex'
import { IRootState } from './types'
import { userModule } from './modules/user/user'
import { mainModule } from './modules/main/main'
import { systemModule } from './modules/system/system'
import { analysisModule } from './modules/analysis/analysis'
import { storyModule } from './modules/story/story'
export default createStore<IRootState>({
  state: {
    username: '',
    departmentList: [],
    roleList: []
  },
  mutations: {},
  actions: {
    // getDepartmentList({ commit }, payload) {
    //   // const { url, params } = payload
    //   // const { data } = await getDataList(url, params)
    //   // const dataType = url.toUpperCase()
    //   // commit(`SET_${dataType}COUNT`, data.totalCount)
    //   // commit(`SET_${dataType}LIST`, data.list)
    // }
  },
  modules: { userModule, mainModule, systemModule, analysisModule, storyModule }
})

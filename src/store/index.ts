import { createStore } from 'vuex'
import { IRootState } from './types'
import { userModule } from './modules/user/user'
import { mainModule } from './modules/main/main'
import { systemModule } from './modules/system/system'
import { analysisModule } from './modules/analysis/analysis'
import { routesModule } from './modules/permission'
export default createStore<IRootState>({
  state: {
    username: '',
    departmentList: [],
    roleList: []
  },
  mutations: {},
  actions: {},
  modules: {
    userModule,
    mainModule,
    systemModule,
    analysisModule,
    routesModule
  }
})

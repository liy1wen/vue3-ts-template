import { createStore } from 'vuex'
import { IRootState } from './types'
import { userModule } from './modules/user/user'
import { mainModule } from './modules/main/main'
import { systemModule } from './modules/system/system'
import { analysisModule } from './modules/analysis/analysis'
import { storyModule } from './modules/story/story'
import { routesModule } from './modules/permission'
export default createStore<IRootState>({
  state: {
    username: ''
  },
  mutations: {},
  actions: {},
  modules: {
    userModule,
    mainModule,
    systemModule,
    analysisModule,
    storyModule,
    routesModule
  }
})

import { createStore } from 'vuex'
import { IRootState } from './types'
import { userModule } from './modules/user/user'
import { mainModule } from './modules/main/main'
import { systemModule } from './modules/system/system'
export default createStore<IRootState>({
  state: {
    username: ''
  },
  mutations: {},
  actions: {},
  modules: { userModule, mainModule, systemModule }
})

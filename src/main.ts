import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import 'normalize.css'
import 'animate.css'
import 'highlight.js/styles/monokai-sublime.css'
import './assets/css/index.less'
import localCache from '@/utils/cache'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// import * as Icons from '@element-plus/icons-vue'
// 注册Icons 全局组件
// Object.keys(Icons).forEach((key) => {
//   console.log(Icons)
//   app.component('AddLocation', Icons.AddLocation)
// })

import { globalRegister } from './global/index'

// 防止刷新页面路由消失
if (localCache.getCache('userMenu')) {
  store.commit('userModule/SET_USERMENU', localCache.getCache('userMenu'))
}

const app = createApp(App)
globalRegister(app)

app
  .use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')

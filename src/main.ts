import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import 'normalize.css'
import 'animate.css'
import 'highlight.js/styles/monokai-sublime.css'
import './assets/css/index.less'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import '@/router/permission'
import { globalRegister } from './global/index'

// 防止刷新页面路由消失
const roles = ['editor']
store.dispatch('routesModule/generateRoutes', { roles })

const app = createApp(App)
globalRegister(app)

app
  .use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')

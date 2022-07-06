import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { userStore } from '@/store/user'
import 'element-plus/dist/index.css'
import 'normalize.css'
import 'animate.css'
import 'highlight.js/styles/monokai-sublime.css'
import './assets/css/index.less'
import localCache from '@/utils/cache'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/router/permission'

import { globalRegister } from './global/index'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
const user = userStore()
// 防止刷新页面路由消失
if (localCache.getCache('userMenu')) {
  user.setUserMenu(localCache.getCache('userMenu'))
}
globalRegister(app)

app
  .use(router)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')

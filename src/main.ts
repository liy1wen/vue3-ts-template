import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'
// import * as Icons from '@element-plus/icons-vue'
// 注册Icons 全局组件
// Object.keys(Icons).forEach((key) => {
//   app.component(key.name, key)
//   console.log(key, Icons)
// })

const app = createApp(App)

app.use(store).use(router).mount('#app')

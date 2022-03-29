import axios from 'axios'

import { ElMessage, ElLoading } from 'element-plus'
import localCache from '../utils/cache'

let count = 0
let loadingInstance = null
const TIME_OUT = 10000
const DEFAULT_SHOWLOADING = true
const closeLoading = () => {
  count--
  if (count === 0) loadingInstance.close()
}

// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  showLoading: DEFAULT_SHOWLOADING,
  timeout: TIME_OUT // request timeout
})

// request interceptor
request.interceptors.request.use(
  (config) => {
    if (config.showLoading) {
      if (count === 0) {
        loadingInstance = ElLoading.service({
          fullscreen: true
        })
      }
      count++
    }
    const token = localCache.getCache('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  (response) => {
    loadingInstance && closeLoading()
    const res = response.data
    if (res.code !== 0) {
      ElMessage.error(res.data)
    }
    return Promise.resolve(res)
  },
  (error) => {
    console.log(error, 'error')
    loadingInstance && closeLoading()
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default request

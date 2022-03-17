import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
import { ElMessage, ElLoading } from 'element-plus'
import localCache from '../utils/cache'

let count = 0
let loadingInstance: LoadingInstance
const TIME_OUT = 10000
const closeLoading = () => {
  count--
  if (count === 0) loadingInstance.close()
}
// create an axios instance
const service: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: TIME_OUT // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (count === 0) {
      loadingInstance = ElLoading.service({
        fullscreen: true
      })
    }
    count++
    const token = localCache.getCache('token')
    if (token) {
      // config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    loadingInstance && closeLoading()
    const res = response.data
    return Promise.resolve(res)
  },
  (error) => {
    loadingInstance && closeLoading()
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service

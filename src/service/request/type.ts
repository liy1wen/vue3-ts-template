import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LRequestInterceptors<T>
  showLoading?: boolean
}

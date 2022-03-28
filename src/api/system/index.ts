import request from '@/service/request.js'
import { IResponse } from '../types'

// 获取用户列表
export const getDataList = (url: string, params: any): IResponse =>
  request.post(`/${url}/list`, params)

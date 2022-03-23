import request from '@/service/request.js'
import { IRequest, IResponse } from './types'

// 登录
export const accountLogin = (params: IRequest): IResponse =>
  request.post('/login', params, { showLoading: true })
// 获取用户信息
export const getUserInfo = (id: number): IResponse =>
  request.get(`/users/${id}`, { showLoading: false })
// 获取菜单
export const getUserMenu = (id: number): IResponse =>
  request.get(`/role/${id}/menu`, { showLoading: false })

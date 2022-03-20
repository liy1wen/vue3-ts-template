import request from '@/service/request.js'
import { IRequest } from './types'

// 登录
export const accountLogin = (params: IRequest) =>
  request.post('/login', params, { showLoading: true })
// 获取用户信息
export const getUserInfo = (id: number) =>
  request.get(`/users/${id}`, { showLoading: false })
// 获取菜单
export const getUserMenu = (id: number) =>
  request.get(`/role/${id}/menu`, { showLoading: false })

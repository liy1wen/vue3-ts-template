import lRequest from '@/service'
import { IRequest, IResponse } from './types'

// 登录
export const accountLogin = (data: IRequest) =>
  lRequest.post<IResponse>({ url: '/login', data })
// 获取用户信息
export const getUserInfo = (id: number) =>
  lRequest.get<IResponse>({ url: `/users/${id}`, showLoading: false })
// 获取菜单
export const getUserMenu = (id: number) =>
  lRequest.get<IResponse>({ url: `/role/${id}/menu`, showLoading: false })

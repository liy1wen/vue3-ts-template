import lRequest from '@/service'
import { IResponse } from '../types'

// 获取数据列表
export const getDataList = (url: string, params: any) =>
  lRequest.post<IResponse>({ url: `/${url}/list`, params })

// 删除数据
export const deleteData = (url: string, id: any) =>
  lRequest.delete<IResponse>({ url: `/${url}/${id}` })

// 创建数据
export const createData = (url: string, params: any) =>
  lRequest.post<IResponse>({ url: `/${url}`, params })

// 编辑数据
export const updateData = (url: string, params: any) =>
  lRequest.patch<IResponse>({ url: `/${url}`, params })

import request from '@/service/request.js'
import { IResponse } from '../types'

// 获取数据列表
export const getDataList = (url: string, params: any): IResponse =>
  request.post(`/${url}/list`, params)

// 删除数据
export const deleteData = (url: string, id: any): IResponse =>
  request.delete(`/${url}/${id}`)

// 创建数据
export const createData = (url: string, params: any): IResponse =>
  request.post(`/${url}`, params)

// 编辑数据
export const updateData = (url: string, params: any): IResponse =>
  request.patch(`/${url}`, params)

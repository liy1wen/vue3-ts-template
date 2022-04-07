import request from '@/service/request.js'
import { IResponse } from '../types'

// 发布故事
export const publishStory = (params: any): IResponse =>
  request.post('/story', params)

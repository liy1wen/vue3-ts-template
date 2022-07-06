import lRequest from '@/service'
import { IResponse } from '../types'

// 发布故事
export const publishStory = (data: any) => lRequest.post<IResponse>({ url: '/story', data })

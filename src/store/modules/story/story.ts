import { Module } from 'vuex'
import { ElMessage } from 'element-plus'
import { IRootState } from '../../types'
import { publishStory } from '@/api/story/index'

export const storyModule: Module<any, IRootState> = {
  namespaced: true,
  state: {},
  actions: {
    async publishStory(payload: any) {
      console.log(payload)
      const { data, code } = await publishStory(payload)
      if (code === 0) {
        ElMessage.success(data)
      }
    }
  }
}

import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { publishStory } from '@/api/story/index'
export const storyStore = defineStore('story', {
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async publishStory(payload: any) {
      const { data, code } = await publishStory(payload)
      if (code === 0) {
        ElMessage.success(data)
      }
    }
  }
})

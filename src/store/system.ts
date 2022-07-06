import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { getDataList, deleteData, createData, updateData } from '@/api/system/index'

export const systemStore = defineStore('system', {
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0,
      storyList: [],
      storyCount: 0,
      url: '',
      requestParams: {}
    }
  },
  getters: {},
  actions: {
    async getDataList(payload: any) {
      const { url, params } = payload
      this.url = url
      this.requestParams = params

      const { data } = await getDataList(url, params)
      //   const dataType = url.toUpperCase()
      this[`${url}Count`] = data.totalCount
      this[`${url}List`] = data.list
    },
    async deleteData(payload: any) {
      const { url, id } = payload
      const { code, data } = await deleteData(url, id)
      if (code == 0) {
        ElMessage.success(data)
        this.getDataList({ url: this.url, params: this.requestParams })
      }
    },
    async createData(payload: any) {
      const { url, params } = payload
      const { code, data } = await createData(url, params)
      if (code == 0) {
        ElMessage.success(data)
        this.getDataList({ url: this.url, params: this.requestParams })
      }
    },
    async updateData(payload: any) {
      const { url, params } = payload
      const { code, data } = await updateData(url, params)
      if (code == 0) {
        ElMessage.success(data)
        this.getDataList({ url: this.url, params: this.requestParams })
      }
    }
  }
})

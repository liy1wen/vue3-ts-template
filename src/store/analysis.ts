import { defineStore } from 'pinia'
import { getCategorySale, getCategoryCount, getCitySale, getCategoryCollection, getTopSale, getTotalAmount } from '@/api/analysis'
export const analysisStore = defineStore('analysis', {
  state: () => {
    return {
      categoryCount: [],
      categorySale: [],
      citySale: [],
      categoryCollection: [],
      topSale: [],
      totalAmount: []
    }
  },
  getters: {},
  actions: {
    async getAnalysisData() {
      const analysisData = await getCategorySale()
      this.categorySale = analysisData.data
      const categoryCount = await getCategoryCount()
      this.categoryCount = categoryCount.data
      const categoryCollection = await getCategoryCollection()
      this.categoryCollection = categoryCollection.data
      const citySale = await getCitySale()
      this.citySale = citySale.data
      const topSale = await getTopSale()
      this.topSale = topSale.data
      const totalAmount = await getTotalAmount()
      this.totalAmount = totalAmount.data
    }
  }
})

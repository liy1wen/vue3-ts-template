import request from '@/service/request.js'
import { IResponse } from '../types'

enum AnalysisApi {
  categorySale = '/goods/category/sale',
  categoryCount = '/goods/category/count',
  citySale = '/goods/address/sale',
  categoryCollection = '/goods/category/favor',
  topSale = '/goods/sale/top10',
  totalAmount = '/goods/amount/list'
}
// 每个分类商品的销量
export const getCategorySale = (): IResponse =>
  request.get(AnalysisApi.categorySale)

// 每个分类商品的数量
export const getCategoryCount = (): IResponse =>
  request.get(AnalysisApi.categoryCount, { showLoading: false })

// 不同城市商品销量
export const getCitySale = (): IResponse =>
  request.get(AnalysisApi.citySale, { showLoading: false })

// 分类商品的收藏
export const getCategoryCollection = (): IResponse =>
  request.get(AnalysisApi.categoryCollection, { showLoading: false })

// 销量前10的商品数量分类商品的收藏
export const getTopSale = (): IResponse =>
  request.get(AnalysisApi.topSale, { showLoading: false })

// 商品数据统计的数量
export const getTotalAmount = (): IResponse =>
  request.get(AnalysisApi.totalAmount, { showLoading: false })

import lRequest from '@/service'
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
export const getCategorySale = () => lRequest.get<IResponse>({ url: AnalysisApi.categorySale })

// 每个分类商品的数量
export const getCategoryCount = () =>
  lRequest.get<IResponse>({
    url: AnalysisApi.categoryCount,
    showLoading: false
  })

// 不同城市商品销量
export const getCitySale = () => lRequest.get<IResponse>({ url: AnalysisApi.citySale, showLoading: false })

// 分类商品的收藏
export const getCategoryCollection = () =>
  lRequest.get<IResponse>({
    url: AnalysisApi.categoryCollection,
    showLoading: false
  })

// 销量前10的商品数量分类商品的收藏
export const getTopSale = () => lRequest.get<IResponse>({ url: AnalysisApi.topSale, showLoading: false })

// 商品数据统计的数量
export const getTotalAmount = () => lRequest.get<IResponse>({ url: AnalysisApi.totalAmount, showLoading: false })

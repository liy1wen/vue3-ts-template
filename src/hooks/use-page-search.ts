import { ref } from 'vue'
import PageContent from '@/components/PageContent/src/index.vue'
type callBackFn = (row?: any) => void
export const usePageSearch = (handleParams?: callBackFn) => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handerSearch = (params?: any) => {
    pageContentRef.value.pageInfo = {
      ...pageContentRef.value.pageInfo,
      currentPage: 1
    }
    // handleParams回调函数用于处理查询条件的格式转换
    handleParams && handleParams(params)
    pageContentRef.value.queryParams = { ...params }
    pageContentRef.value?.getDataList()
  }
  return [pageContentRef, handerSearch]
}

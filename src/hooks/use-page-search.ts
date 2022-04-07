import { ref } from 'vue'
import PageContent from '@/components/PageContent/src/index.vue'

export const usePageSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handerSearch = (params?: any) => {
    pageContentRef.value.pageInfo = {
      ...pageContentRef.value.pageInfo,
      currentPage: 1
    }
    pageContentRef.value.queryParams = { ...params }
    pageContentRef.value?.getDataList()
  }
  return [pageContentRef, handerSearch]
}

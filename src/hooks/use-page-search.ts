import { ref } from 'vue'
import PageContent from '@/components/PageContent/index.vue'

export const usePageSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handerSearch = (params?: any) => {
    pageContentRef.value?.getDataList(params)
  }
  return {
    pageContentRef,
    handerSearch
  }
}

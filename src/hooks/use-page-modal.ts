import { ref } from 'vue'
import PageModal from '@/components/PageModal/src/index.vue'
type callBackFn = (row?: any) => void
export const usePageModal = (modalCb?: callBackFn) => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  // const editDefaultData = ref({})
  // const handleEdit = (row: any) => {
  //   editDefaultData.value = { ...row }
  //   pageModalRef.value.dialogVisible = true
  //   editCb && editCb(row)
  // }
  const handleAdd = () => {
    // editDefaultData.value = {}
    pageModalRef.value.dialogVisible = true
    modalCb && modalCb()
  }
  return [pageModalRef, handleAdd]
}

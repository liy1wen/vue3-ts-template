import { ref } from 'vue'
import PageModal from '@/components/PageModal/index.vue'
type callBackFn = () => void
export const usePageModal = (editCb?: callBackFn, addCb?: callBackFn) => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const editDefaultData = ref({})
  const handleEdit = (row: any) => {
    editDefaultData.value = { ...row }
    pageModalRef.value.dialogVisible = true
    editCb && editCb()
  }
  const handleAdd = () => {
    editDefaultData.value = {}
    pageModalRef.value.dialogVisible = true
    addCb && addCb()
  }
  return [pageModalRef, editDefaultData, handleEdit, handleAdd]
}

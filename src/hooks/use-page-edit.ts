import { ref } from 'vue'
type callBackFn = (row?: any) => void
export const usePageEdit = (
  editCb?: callBackFn,
  addCb?: callBackFn,
  row?: any,
  id?: any
) => {
  const editDefaultData = ref({})
  if (id) {
    // 编辑
    editDefaultData.value = { ...row }
    editCb && editCb(row)
  } else {
    // 新增
    editDefaultData.value = {}
    addCb && addCb()
  }
  return [editDefaultData]
}

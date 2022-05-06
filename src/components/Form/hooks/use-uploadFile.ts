import { ref } from 'vue'
import type { UploadProps, UploadRawFile, UploadInstance } from 'element-plus'
import { ElMessage, genFileId } from 'element-plus'
type fn = (value: any, field: string) => void

export const useUploadFile = (props: any, handleValueChange: fn) => {
  const uploadRef = ref<UploadInstance>()
  // 文件移除
  const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    handleValueChange('', 'file')
  }
  // 在 before-upload 钩子中限制用户上传文件的格式和大小
  const beforeFileUpload: UploadProps['beforeUpload'] = (
    rawFile: UploadRawFile
  ) => {
    if (props.type && !props.type.includes(rawFile.type as any)) {
      const formatStr = props.type.join(',')
      ElMessage.error(`File must be ${formatStr} format`)
      return false
    } else if (props.size && rawFile.size / 1024 / 1024 > props.size) {
      ElMessage.error(`File size can not exceed ${props.size}MB!`)
      return false
    }
    return true
  }
  // 文件上传成功时的钩子
  const handleFileSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
  ) => {
    handleValueChange(uploadFile.raw, 'file')
  }
  // 文件替换
  const handleExceed: UploadProps['onExceed'] = (files: File[]) => {
    console.log(uploadRef.value, 'upload.value')
    uploadRef.value && uploadRef.value.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRef.value && uploadRef.value.handleStart(file)
  }
  return [
    uploadRef,
    handleRemove,
    beforeFileUpload,
    handleFileSuccess,
    handleExceed
  ]
}

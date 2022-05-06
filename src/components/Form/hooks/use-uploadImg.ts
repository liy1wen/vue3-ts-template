import { ref, toRefs } from 'vue'
import type { UploadProps, UploadRawFile, UploadFile } from 'element-plus'
import { ElMessage } from 'element-plus'
type fn = (value: any, field: string) => void
export const useUploadImg = (props: any, handleValueChange: fn) => {
  const { modelValue } = toRefs(props)
  const imageUrl = ref(modelValue.value.img)
  // 图片上传
  // 在 before-upload 钩子中限制用户上传文件的格式和大小
  const beforeAvatarUpload = (rawFile: UploadRawFile, otherOptions: any) => {
    if (otherOptions.type && !otherOptions.type.includes(rawFile.type as any)) {
      const formatStr = otherOptions.type.join(',')
      ElMessage.error(`Avatar picture must be ${formatStr} format`)
      return false
    } else if (props.size && rawFile.size / 1024 / 1024 > otherOptions.size) {
      ElMessage.error(`Avatar picture size can not exceed ${props.size}MB!`)
      return false
    }
    return true
  }
  // 上传成功时的钩子
  const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile: UploadFile
  ) => {
    handleValueChange(uploadFile.raw, 'img')
    imageUrl.value = URL.createObjectURL(uploadFile.raw as any)
  }
  return [imageUrl, beforeAvatarUpload, handleAvatarSuccess]
}

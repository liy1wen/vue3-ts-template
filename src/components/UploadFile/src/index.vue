<template>
  <div class="uploadFile-container">
    <!-- 文件上传 -->
    <el-form :label-width="labelWidth">
      <el-form-item :label="label" :rules="rule">
        <el-upload
          ref="upload"
          class="file-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :limit="1"
          :on-remove="handleRemove"
          :on-success="handleAvatarSuccess"
          :on-exceed="handleExceed"
          :before-upload="beforeAvatarUpload"
        >
          <el-button>选择上传文件</el-button>
          <template #tip>
            <div class="el-upload__tip" v-if="tip">
              {{ tip }}
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import type { UploadProps, UploadInstance, UploadRawFile } from 'element-plus'
import { ElMessage, genFileId } from 'element-plus'
type propsType = {
  label?: string
  type?: any[]
  size?: number
  tip?: string
  labelWidth?: string
  rule?: any[]
  fileUrl?: any
}
const props = withDefaults(defineProps<propsType>(), {
  labelWidth: '120px'
})
const emit = defineEmits(['sendFile'])
const upload = ref<UploadInstance>()
console.log(upload, 'upload')

const { fileUrl } = toRefs(props)
const file = ref(fileUrl?.value)
console.log(file, ']]]')
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  emit('sendFile', '')
}
// 在 before-upload 钩子中限制用户上传文件的格式和大小
const beforeAvatarUpload: UploadProps['beforeUpload'] = (
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
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  console.log(response, uploadFile.raw)
  emit('sendFile', uploadFile.raw)
}
const handleExceed: UploadProps['onExceed'] = (files: File[]) => {
  console.log(upload.value, 'upload.value')
  upload.value && upload.value.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value && upload.value.handleStart(file)
  emit('sendFile', file)
}
</script>

<style scoped lang="less">
.uploadFile-container {
  .file-uploader {
    text-align: left;
  }
}
</style>

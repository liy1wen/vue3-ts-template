<template>
  <div class="uploadFile-container">
    <!-- 文件上传 -->
    <el-form :label-width="labelWidth">
      <el-form-item :label="label" :rules="rule">
        <el-upload
          ref="upload"
          class="file-uploader"
          action=""
          :http-request="handleUploadFile"
          :limit="1"
          :file-list="fileList"
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
import { ref } from 'vue'
import type { UploadProps, UploadInstance, UploadRawFile } from 'element-plus'
import { ElMessage, genFileId, UploadUserFile } from 'element-plus'
import { uploadFile } from '@/api/system'
type propsType = {
  label?: string
  type?: any[]
  size?: number
  tip?: string
  labelWidth?: string
  rule?: any[]
  fileUrl?: any
  requestUrl?: string
  file?: string
}
const props = withDefaults(defineProps<propsType>(), {
  labelWidth: '120px'
})
const emit = defineEmits(['sendFile'])
const upload = ref<UploadInstance>()
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  emit('sendFile', '')
}
const fileList = props.file ? ref<UploadUserFile[]>([{ name: props.file, url: props.file }]) : []

// 在 before-upload 钩子中限制用户上传文件的格式和大小
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
  console.log(rawFile.type, props.type)
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
// 自定义上传
const handleUploadFile = async (file: any) => {
  const formData = new FormData()
  formData.append('file', file.file)
  const { data } = await uploadFile(props.requestUrl, formData)
  emit('sendFile', data)
}
// 文件上传成功时的钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  console.log('onSuccess')
}
const handleExceed: UploadProps['onExceed'] = (files: File[]) => {
  upload.value && upload.value.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  // upload.value && upload.value.handleStart(file)
  handleUploadFile({ file })
}
</script>

<style scoped lang="less">
.uploadFile-container {
  .file-uploader {
    text-align: left;
    width: 80%;
  }
}
</style>

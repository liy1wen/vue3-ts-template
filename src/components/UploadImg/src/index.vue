<template>
  <div class="uploadImg-container">
    <!-- 图片上传 -->
    <el-form :label-width="labelWidth" :model="form">
      <el-form-item :label="label" :rules="rule">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          v-model="form.img"
        >
          <template #tip>
            <div class="el-upload__tip" v-if="tip">
              {{ tip }}
            </div>
          </template>
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import type { UploadProps, UploadRawFile } from 'element-plus'
import { ElMessage } from 'element-plus'
import { imgType } from '../type'
type propsType = {
  label?: string
  type?: imgType[]
  size?: number
  tip?: string
  labelWidth?: string
  rule?: any[]
  imgUrl?: string
}
const props = withDefaults(defineProps<propsType>(), {
  labelWidth: '120px'
})
const emit = defineEmits(['sendImg'])
const form = reactive({
  img: ''
})

const { imgUrl } = toRefs(props)
const imageUrl = ref(imgUrl?.value)
// 在 before-upload 钩子中限制用户上传文件的格式和大小
const beforeAvatarUpload: UploadProps['beforeUpload'] = (
  rawFile: UploadRawFile
) => {
  if (props.type && !props.type.includes(rawFile.type as any)) {
    const formatStr = props.type.join(',')
    ElMessage.error(`Avatar picture must be ${formatStr} format`)
    return false
  } else if (props.size && rawFile.size / 1024 / 1024 > props.size) {
    ElMessage.error(`Avatar picture size can not exceed ${props.size}MB!`)
    return false
  }
  return true
}
// 文件上传成功时的钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  emit('sendImg', uploadFile.raw)
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}
</script>

<style scoped lang="less">
.uploadImg-container {
  .avatar-uploader {
    text-align: left;
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

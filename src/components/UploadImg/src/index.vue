<template>
  <div class="uploadImg-container">
    <!-- 图片上传 -->
    <el-form :label-width="labelWidth" :model="form">
      <el-form-item :label="label" :rules="rule">
        <el-upload
          class="avatar-uploader"
          action=""
          :http-request="handleUploadImg"
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
import { ref, reactive, toRefs, watch } from 'vue'
import type { UploadProps, UploadRawFile } from 'element-plus'
import { ElMessage } from 'element-plus'
import { imgType } from '../type'
import { getDataList } from '@/api/system'
type propsType = {
  label?: string
  type?: imgType[]
  size?: number
  tip?: string
  labelWidth?: string
  rule?: any[]
  imgUrl?: string
  requestUrl?: string
  width?: number
  height?: number
  kind?: string
}
const props = withDefaults(defineProps<propsType>(), {
  labelWidth: '120px'
})
const emit = defineEmits(['sendImg'])
const form = reactive({
  img: ''
})
// 回显imageUrl
const imageUrl = ref('')
const { imgUrl } = toRefs(props)
watch(
  () => props.imgUrl,
  (val) => {
    imageUrl.value = val
  },
  {
    immediate: true
  }
)

// 在 before-upload 钩子中限制用户上传文件的格式和大小
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
  if (props.type && !props.type.includes(rawFile.type as any)) {
    const formatStr = props.type.join(',')
    ElMessage.error(`Avatar picture must be ${formatStr} format`)
    return false
  } else if (props.size && rawFile.size / 1024 / 1024 > props.size) {
    ElMessage.error(`Avatar picture size can not exceed ${props.size}MB!`)
    return false
  }
  // else if (props.width && props.height) {
  //   const isSize = new Promise(function (resolve, reject) {
  //     let _URL = window.URL || window.webkitURL
  //     let img = new Image()
  //     img.onload = function () {
  //       console.log(img.width, img.height, 'cccc', props.height)
  //       let valid = img.width == props.width && img.height == props.height
  //       valid ? resolve() : reject()
  //     }
  //     img.src = _URL.createObjectURL(rawFile)
  //   }).then(
  //     () => {
  //       return rawFile
  //     },
  //     () => {
  //       ElMessage.error(`请上传尺寸为${props.width}*${props.height}的图片!`)
  //       // return Promise.reject()
  //       return false
  //     }
  //   )
  //   return isSize
  // }
  return true
}
// 自定义上传
const handleUploadImg = async (file: any) => {
  const formData = new FormData()
  formData.append('file', file.file)
  const { data } = await getDataList(props.requestUrl, formData)
  emit('sendImg', data)
}
// 文件上传成功时的钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
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

<template>
  <div class="form-container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      :label-width="labelWidth"
      class="form-content"
      :size="size"
      ref="ruleFormRef"
      :model="modelValue"
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="formItemStyle"
              :rules="item.rule"
              :prop="item.field"
              v-if="!item.isHidden"
            >
              <!-- 输入框 -->
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  clearable
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <!-- 密码输入框 -->
              <template v-if="item.type === 'password'">
                <el-input
                  type="password"
                  show-password
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <!-- 日期范围 -->
              <template v-if="item.type === 'dateRange'">
                <el-date-picker
                  range-separator="To"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <!-- 日期时间
              <template v-if="item.type === 'date'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template> -->
              <!-- 下拉框 -->
              <template v-if="item.type === 'select'">
                <el-select
                  clearable
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  v-bind="item.otherOptions"
                >
                  <el-option
                    v-for="optionItem in item.options"
                    :label="optionItem.label"
                    :value="optionItem.value"
                    :key="optionItem.label"
                  />
                </el-select>
              </template>
              <!-- 切换 -->
              <template v-if="item.type === 'switch'">
                <el-switch
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <!-- 多选 -->
              <template v-if="item.type === 'checkbox'">
                <el-checkbox
                  v-if="item.otherOptions && item.otherOptions.showAll"
                  v-model="checkAll"
                  :indeterminate="isIndeterminate"
                  @change="
                    (val) => handleCheckAllChange(val, item.field, item.options)
                  "
                  >Check all</el-checkbox
                >
                <el-checkbox-group
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  @change="(val) => handleCheckedChange(val, item.options)"
                >
                  <el-checkbox
                    v-for="optionItem in item.options"
                    :key="optionItem.label"
                    :label="optionItem.value"
                    name="type"
                    >{{ optionItem.label }}
                  </el-checkbox>
                </el-checkbox-group>
              </template>
              <!-- 自定义多选 -->
              <template v-if="item.type === 'customCheckBox'">
                <div class="customCheckBox">
                  <div
                    class="customCheckBox-group"
                    v-for="_item in item.options"
                    :key="_item.label"
                  >
                    <div style="text-align: left">{{ _item.label }}</div>
                    <el-checkbox-group
                      :model-value="modelValue[`${item.field}`]"
                      @update:modelValue="handleValueChange($event, item.field)"
                    >
                      <el-checkbox
                        :label="optionItem.value"
                        name="type"
                        v-for="optionItem in _item.itemOptions"
                        :key="optionItem.label"
                        >{{ optionItem.label }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </template>
              <!-- 单选 -->
              <template v-if="item.type === 'radio'">
                <el-radio-group
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-radio
                    :label="optionItem.value"
                    v-for="optionItem in item.options"
                    :key="optionItem.label"
                  >
                    {{ optionItem.label }}
                  </el-radio>
                </el-radio-group>
              </template>
              <!-- 文本框 -->
              <template v-if="item.type === 'textarea'">
                <el-input
                  type="textarea"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <!-- 图片上传 -->
              <template v-if="item.type === 'uploadImg'">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="
                    (rawFile) => beforeAvatarUpload(rawFile, item.otherOptions)
                  "
                >
                  <template #tip>
                    <div class="el-upload__tip" v-if="item.otherOptions.tip">
                      {{ item.otherOptions.tip }}
                    </div>
                  </template>
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
              </template>
              <!-- 文件上传 -->
              <template v-if="item.type === 'uploadFile'">
                <el-upload
                  ref="uploadRef"
                  class="file-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :limit="1"
                  :on-remove="handleRemove"
                  :on-success="handleFileSuccess"
                  :on-exceed="handleExceed"
                  :before-upload="beforeFileUpload"
                >
                  <el-button>选择上传文件</el-button>
                  <template #tip>
                    <div class="el-upload__tip" v-if="item.otherOptions.tip">
                      {{ item.otherOptions.tip }}
                    </div>
                  </template>
                </el-upload>
              </template>
              <!-- 自定义内容 -->
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { IFormItem, IOptions } from '../types'
import { useUploadImg } from '../hooks/use-uploadImg'
import { useUploadFile } from '../hooks/use-uploadFile'
const ruleFormRef = ref<FormInstance>()
type propsType = {
  modelValue: Record<string, any>
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: Record<string, any>
  formItemStyle?: Record<string, any>
  size?: string
}
const props = withDefaults(defineProps<propsType>(), {
  labelWidth: '80px',
  colLayout: () => ({
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }),
  formItemStyle: () => ({ padding: '20px 40px', marginBottom: 0 }),
  size: 'default'
})
const emit = defineEmits(['update:modelValue'])

// 表单内容变化回调
const handleValueChange = (value: any, field: any) => {
  console.log('=============', value)
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
// 上传图片逻辑
const [imageUrl, beforeAvatarUpload, handleAvatarSuccess] = useUploadImg(
  props,
  handleValueChange
)
// 上传文件逻辑
const [
  uploadRef,
  handleRemove,
  beforeFileUpload,
  handleFileSuccess,
  handleExceed
] = useUploadFile(props, handleValueChange)
// 表格提交：编辑/新增
const submitForm = async () => {
  await ruleFormRef.value?.validate((valid) => valid)
}
defineExpose({
  submitForm
})
const checkAll = ref(false)
const isIndeterminate = ref(true)
const handleCheckAllChange = (
  val: boolean,
  field: string,
  options: IOptions[]
) => {
  isIndeterminate.value = false
  const checkList = val ? options.map((item) => item.value) : []
  handleValueChange(checkList, field)
}
const handleCheckedChange = (value: string[], options: IOptions[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === options.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < options.length
}
</script>

<style scoped lang="less">
.form-container {
  :deep(.el-form-item__label) {
    color: #000000;
  }
  .customCheckBox {
    padding: @spacing-base;
    border: 1px solid #dcdfe6;
    &-group {
      margin-top: 10px;
    }
  }
  :deep(.el-checkbox-group) {
    display: flex;
    flex-wrap: wrap;
  }
  .avatar-uploader {
    text-align: left;
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
  .file-uploader {
    text-align: left;
  }
}
</style>

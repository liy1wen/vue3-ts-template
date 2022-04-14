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
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  clearable
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-if="item.type === 'password'">
                <el-input
                  type="password"
                  show-password
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-if="item.type === 'date'">
                <el-date-picker
                  range-separator="To"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    :label="optionItem.label"
                    :value="optionItem.value"
                    v-for="optionItem in item.options"
                    :key="optionItem.label"
                  />
                </el-select>
              </template>
              <template v-if="item.type === 'switch'">
                <el-switch
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>

              <template v-if="item.type === 'checkbox'">
                <el-checkbox-group
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-checkbox
                    :label="optionItem.label"
                    name="type"
                    v-for="optionItem in item.options"
                    :key="optionItem.label"
                  />
                </el-checkbox-group>
              </template>
              <template v-if="item.type === 'radio'">
                <el-radio-group
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-radio
                    :label="optionItem.label"
                    v-for="optionItem in item.options"
                    :key="optionItem.label"
                  />
                </el-radio-group>
              </template>
              <template v-if="item.type === 'textarea'">
                <el-input
                  type="textarea"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
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
import { defineProps, PropType, defineEmits, ref, defineExpose } from 'vue'
import type { FormInstance } from 'element-plus'
import { IFormItem } from '../types'
const ruleFormRef = ref<FormInstance>()
const props = defineProps({
  modelValue: {
    type: Object,
    require: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  },
  formItemStyle: {
    type: Object,
    default: () => ({ padding: '20px 40px', marginBottom: 0 })
  },
  size: {
    type: String,
    default: 'default'
  }
  // ruleName: {
  //   type: Object
  // }
})

// const ruleForm = ref({ name: '' })
// const validateName = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input name'))
//   } else {
//     callback()
//   }
// }
// const rule = ref([{ validator: validateName, trigger: 'blur' }])

const emit = defineEmits(['update:modelValue'])

const handleValueChange = (value: any, field: any) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}

const submitForm = async () => {
  await ruleFormRef.value?.validate((valid) => valid)
}
console.log(props.formItems, 'formItems')
defineExpose({
  submitForm
})
</script>

<style scoped lang="less"></style>

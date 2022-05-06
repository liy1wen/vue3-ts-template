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
              :style="formItemStyle"
              v-if="!item.isHidden"
              v-bind="item"
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
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { IFormItem } from '../types'
const ruleFormRef = ref<FormInstance>()
type propsType = {
  modelValue: Record<string, unknown>
  formItems: IFormItem
  labelWidth?: string
  colLayout?: {
    xl: number
    lg: number
    md: number
    sm: number
    xs: number
  }
  formItemStyle?: { padding: string; marginBottom: number | string }
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
  size: 'large'
})

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

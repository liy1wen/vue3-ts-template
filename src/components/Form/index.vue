<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" class="form-container" :size="size">
      <el-row>
        <template v-for="item in formItems" :key="item.lable">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.lable"
              :style="formItemStyle"
              :rules="item.rule"
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
                    :label="optionItem.lable"
                    :value="optionItem.value"
                    v-for="optionItem in item.options"
                    :key="optionItem.lable"
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
                    :label="optionItem.lable"
                    name="type"
                    v-for="optionItem in item.options"
                    :key="optionItem.lable"
                  />
                </el-checkbox-group>
              </template>
              <template v-if="item.type === 'radio'">
                <el-radio-group
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-radio
                    :label="optionItem.lable"
                    v-for="optionItem in item.options"
                    :key="optionItem.lable"
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
import { defineProps, PropType, ref, watch, defineEmits } from 'vue'
import { IFormItem } from './types'
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
})
const emit = defineEmits(['update:modelValue'])

const handleValueChange = (value: any, field: any) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style scoped lang="less">
.form-container {
  padding-top: 18px;
}
.footer {
  // text-align: right;
  padding: 0 20px 20px 0;
}
</style>

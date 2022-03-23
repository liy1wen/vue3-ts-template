<template>
  <div>
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
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-if="item.type === 'password'">
                <el-input
                  type="password"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-if="item.type === 'date'">
                <el-date-picker
                  range-separator="To"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
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
                <el-switch v-model="formData[`${item.field}`]" />
              </template>

              <template v-if="item.type === 'checkbox'">
                <el-checkbox-group v-model="formData[`${item.field}`]">
                  <el-checkbox
                    :label="optionItem.lable"
                    name="type"
                    v-for="optionItem in item.options"
                    :key="optionItem.lable"
                  />
                </el-checkbox-group>
              </template>
              <template v-if="item.type === 'radio'">
                <el-radio-group v-model="formData[`${item.field}`]">
                  <el-radio
                    :label="optionItem.lable"
                    v-for="optionItem in item.options"
                    :key="optionItem.lable"
                  />
                </el-radio-group>
              </template>
              <template v-if="item.type === 'textarea'">
                <el-input type="textarea" v-model="formData[`${item.field}`]" />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
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
    default: () => ({ padding: '20px 40px' })
  },
  size: {
    type: String,
    default: 'default'
  }
})
const emit = defineEmits(['update:modelValue'])
const formData = ref({ ...props.modelValue })
watch(
  formData,
  (newValue) => {
    emit('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<style scoped lang="less">
.form-container {
  padding-top: 18px;
}
</style>

<template>
  <el-form :label-width="labelWidth" ref="ruleFormRef">
    <el-form-item :label="label" :rules="rule">
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Check all</el-checkbox>
      <el-checkbox-group v-model="checkedList" @change="handleCheckedListChange">
        <el-checkbox v-for="item in checkList" :key="item.label" :label="item.value">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { FormInstance } from 'element-plus'
type propsType = {
  field: string
  label?: string
  labelWidth?: string
  rule?: any[]
  checkList: any[]
}
const props = withDefaults(defineProps<propsType>(), {
  labelWidth: '80px'
})
const emit = defineEmits(['sendCheckAll'])
const ruleFormRef = ref<FormInstance>()

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedList = ref()
const checkList = computed(() => props.checkList)

const handleCheckAllChange = (val: boolean) => {
  checkedList.value = val ? checkList.value : []
  isIndeterminate.value = false
  emit('sendCheckAll', { prop: props.field, value: checkedList.value })
}
const handleCheckedListChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === checkList.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < checkList.value.length
  emit('sendCheckAll', { prop: props.field, value: value })
}
const submitForm = async () => {
  await ruleFormRef.value?.validate((valid) => valid)
}
defineExpose({
  submitForm
})
</script>

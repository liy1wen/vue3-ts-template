<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="30%"
      center
      draggable
      destroy-on-close
    >
      <Form v-bind="modalConfig" v-model="formData" ref="formRef" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button class="primary-btn" @click="submit">Done</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import Form from '../../Form'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
type propsType = {
  modalConfig: Record<string, any>
  editDefaultData: Record<string, any>
  title?: string
  pageName?: string
  otherInfo?: Record<string, any>
}
const props = withDefaults(defineProps<propsType>(), {})

const formRef = ref<InstanceType<typeof Form>>()
const dialogVisible = ref(false)
const formData = ref<any>({})
const store = useStore()
watch(
  () => props.editDefaultData,
  (newVal) => {
    for (const item of props.modalConfig?.formItems) {
      formData.value[`${item.field}`] = newVal[`${item.field}`]
    }
  }
)
const submit = async () => {
  await formRef.value.submitForm()

  if (Object.keys(props.editDefaultData).length) {
    // 编辑
    store.dispatch('systemModule/updateData', {
      url: `${props.pageName}/${props.editDefaultData.id}`,
      params: {
        ...formData.value,
        ...props.otherInfo
      }
    })
  } else {
    // 新增
    store.dispatch('systemModule/createData', {
      url: props.pageName,
      params: {
        ...formData.value,
        ...props.otherInfo
      }
    })
  }
  dialogVisible.value = false
}
defineExpose({
  dialogVisible
})
</script>

<style scoped></style>

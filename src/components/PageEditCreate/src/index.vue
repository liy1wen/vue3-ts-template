<template>
  <div class="edit-container">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <Form v-bind="editCreateConfig" v-model="formData" ref="formRef">
          <template #header>
            <div class="edit-container-title">{{ title }}</div>
          </template>
          <template
            v-for="item in customSlotList"
            :key="item.slotName"
            #[item.slotName]
          >
            <slot :name="item.slotName"></slot>
          </template>
        </Form>
        <div class="edit-container-footer">
          <el-button class="primary-btn submit" size="large" @click="submit"
            >Submit</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Form from '../../Form'
// import { useStore } from 'vuex'
import { ref, watch } from 'vue'
type propsType = {
  editCreateConfig: Record<string, any>
  editDefaultData: Record<string, any>
  title?: string
  pageName?: string
  otherInfo?: Record<string, any>
}
const props = withDefaults(defineProps<propsType>(), {})

const formRef = ref<InstanceType<typeof Form>>()
const formData = ref<any>({})
// const store = useStore()
watch(
  () => props.editDefaultData,
  (newVal) => {
    for (const item of props.editCreateConfig?.formItems) {
      formData.value[`${item.field}`] = newVal[`${item.field}`]
    }
  },
  {
    immediate: true
  }
)
// 动态插槽
const customSlotList = props.editCreateConfig?.formItems.filter((item: any) => {
  return item.slotName
})
const submit = async () => {
  // console.log(props.otherInfo)
  // await formRef.value.submitForm()
  const params = {
    ...formData.value,
    ...props.otherInfo
  }
  console.log(params)
  // if (Object.keys(props.editDefaultData).length) {
  //   // 编辑
  //   store.dispatch('systemModule/updateData', {
  //     url: `${props.pageName}/${props.editDefaultData.id}`,
  //     params
  //   })
  // } else {
  //   // 新增
  //   store.dispatch('systemModule/createData', {
  //     url: props.pageName,
  //     params
  //   })
  // }
}
</script>

<style scoped lang="less">
.edit-container {
  padding: @spacing-base 0;
  text-align: center;
  &-title {
    font-size: @spacing-base;
    font-weight: bold;
    padding: @spacing-base;
  }
  :deep(.el-row) {
    justify-content: center;
  }
  &-footer {
    margin-top: @spacing-base;
    .submit {
      padding: 0px 40px;
      margin-bottom: @spacing-base;
    }
  }
}
</style>

<template>
  <div class="search-container">
    <Form v-bind="formConfig" v-model="formData">
      <!-- <template #header>
        <div class="title">高级检索</div>
      </template> -->
      <template #footer>
        <div class="buttons">
          <el-button type="primary" :icon="Refresh" @click="resetData">重置</el-button>
          <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
        </div>
      </template>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import Form from '../../Form'
import { IForm } from '@/components/Form/types'
const emit = defineEmits(['clickSearch'])
type propsType = {
  formConfig: IForm
}
const props = withDefaults(defineProps<propsType>(), {})
const formItems = props.formConfig?.formItems ?? []
const originFormData: any = {}
for (const item of formItems) {
  originFormData[item.field] = ''
}
const formData = ref(originFormData)

const resetData = () => {
  formData.value = originFormData
  emit('clickSearch', {})
}
const search = () => {
  emit('clickSearch', { ...formData.value })
}
</script>

<style scoped lang="less">
.search-container {
  padding-top: 18px;
  .title {
    font-size: 30px;
    padding: @spacing-base 0;
    font-weight: bold;
  }
  .buttons {
    text-align: right;
    padding: 0 @spacing-base @spacing-base 0;
  }
}
</style>

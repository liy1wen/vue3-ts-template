<template>
  <div>
    <Form v-bind="formConfig" v-model="formData">
      <!-- <template #header>
        <div class="title">高级检索</div>
      </template> -->
      <template #footer>
        <div class="buttons">
          <el-button
            type="primary"
            size="large"
            :icon="Refresh"
            @click="resetData"
            >重置</el-button
          >
          <el-button type="primary" size="large" :icon="Search" @click="search"
            >搜索</el-button
          >
        </div>
      </template>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import Form from '../Form/index.vue'
import { Search, Refresh } from '@element-plus/icons-vue'
const emit = defineEmits(['clickSearch'])
const props = defineProps({
  formConfig: {
    type: Object,
    require: true
  }
})
const formItems = props.formConfig?.formItems ?? []
const originFormData: any = {}
for (const item of formItems) {
  originFormData[item.field] = ''
}
const formData = ref(originFormData)

const resetData = () => {
  formData.value = originFormData
  emit('clickSearch')
}
const search = () => {
  emit('clickSearch', formData.value)
}
</script>

<style scoped>
.title {
  font-size: 30px;
  padding: 20px 0;
  font-weight: bold;
}
.buttons {
  text-align: right;
}
</style>

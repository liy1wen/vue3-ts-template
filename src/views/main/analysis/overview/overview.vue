<template>
  <div class="overview">
    <Form v-bind="formConfig" v-model="formData" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import Form from '@/components/Form/index.vue'
import { formConfig } from './formConfig'
const formData = reactive({
  name: '',
  title: '',
  date: ''
})
watch(formData, (newVal) => {
  console.log(newVal)
})
</script>
<style scoped></style>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span class="title">{{ title }}</span>
      </div>
    </template>
    <div>
      <slot></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'
type propsType = {
  title: string
}
defineProps<propsType>()
</script>

<style scoped lang="less">
.box-card {
  .card-header {
    text-align: left;
  }
  .title {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>

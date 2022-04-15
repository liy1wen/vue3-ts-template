<template>
  <ul class="text-box">
    <li v-for="(item, index) in textLinkArr" :key="index" class="text-item">
      <span class="text-label">{{ item.label }}: </span>
      <el-link type="primary">{{ item.value }}</el-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
type propsType = {
  textLinkArr: Array<any>
}
withDefaults(defineProps<propsType>(), {})
</script>

<style scoped lang="less">
.text-box {
  margin: 0;
  padding-left: @spacing-base;
  .text-item {
    margin-top: 6px;
    .text-label {
      margin-right: 10px;
    }
  }
}
</style>

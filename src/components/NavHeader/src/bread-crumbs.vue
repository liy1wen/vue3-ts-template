<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumbs" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.meta.title
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { IBreadCrumbs } from '../types'
type propsType = {
  breadCrumbs: IBreadCrumbs[]
}

defineProps<propsType>()
</script>

<style scoped lang="less">
.breadcrumb-container {
  :deep(.is-link) {
    // color: #ffffff !important;
  }
  :deep(.el-breadcrumb__separator) {
    // color: #ffffff;
  }
}
</style>

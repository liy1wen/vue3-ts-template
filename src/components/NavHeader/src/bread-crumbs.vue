<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadCrumbs" :key="item.path">
      <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { IBreadCrumbs } from '../types'
type propsType = {
  breadCrumbs: IBreadCrumbs[]
}
withDefaults(defineProps<propsType>(), {})
</script>

<style scoped></style>

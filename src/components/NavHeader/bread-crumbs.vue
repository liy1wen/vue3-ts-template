<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadCrumbs" :key="item.path">
      <el-breadcrumb-item :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IBreadCrumbs } from './types'
defineProps({
  breadCrumbs: {
    type: Array as PropType<IBreadCrumbs[]>,
    default: () => []
  }
})
</script>

<style scoped></style>

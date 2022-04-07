<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-04-02 11:56:43
 * @LastEditors: Seven
 * @LastEditTime: 2022-04-07 10:00:46
-->
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
import { IBreadCrumbs } from '../types'
defineProps({
  breadCrumbs: {
    type: Array as PropType<IBreadCrumbs[]>,
    default: () => []
  }
})
</script>

<style scoped></style>

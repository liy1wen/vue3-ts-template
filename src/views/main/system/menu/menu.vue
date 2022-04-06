<template>
  <div>
    <page-content :tableConfig="tableConfig"></page-content>
  </div>
</template>

<script setup lang="ts">
import { tableConfig } from './config/tableConfig'
import PageContent from '@/components/PageContent'
</script>

<style scoped></style>

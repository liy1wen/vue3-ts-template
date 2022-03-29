<template>
  <div>
    <page-content
      :tableConfig="tableConfig"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tableConfig } from './config/tableConfig'
import PageContent from '@/components/PageContent/index.vue'
import { usePageSearch } from '@/hooks/use-page-search'

const [pageContentRef] = usePageSearch()
</script>

<style scoped></style>

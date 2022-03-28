<template>
  <div>
    <page-search :formConfig="formConfig" @clickSearch="handerSearch" />
    <page-content :tableConfig="tableConfig" ref="pageContentRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PageSearch from '@/components/PageSearch/index.vue'
import PageContent from '@/components/PageContent/index.vue'
import { formConfig } from './config/formConfig'
import { tableConfig } from './config/tableConfig'
import { usePageSearch } from '@/hooks/use-page-search'

const { pageContentRef, handerSearch } = usePageSearch()
</script>
<style scoped></style>

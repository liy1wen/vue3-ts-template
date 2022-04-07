<template>
  <div>
    <page-search :formConfig="formConfig" @clickSearch="handerSearch" />
    <page-content :tableConfig="tableConfig" ref="pageContentRef">
      <template #content="scope">
        <span :innerHTML="scope.row.content"></span>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/PageContent'
import PageSearch from '@/components/PageSearch'
import { tableConfig } from './config/tableConfig'
import { formConfig } from './config/formConfig'
import { usePageSearch } from '@/hooks/use-page-search'

const [pageContentRef, handerSearch] = usePageSearch()
</script>

<style scoped></style>

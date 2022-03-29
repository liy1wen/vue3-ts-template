<template>
  <div>
    <page-content :tableConfig="tableConfig" ref="pageContentRef">
      <template #imgUrl="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
          preview-teleported
        />
      </template>
      <template #newPrice="scope">
        <span>￥{{ $filter.formatMoney(scope.row.newPrice) }}</span>
      </template>
      <template #oldPrice="scope">
        <span>￥{{ $filter.formatMoney(scope.row.oldPrice) }}</span>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent/index.vue'
import { tableConfig } from './config/tableConfig'
import { usePageSearch } from '@/hooks/use-page-search'

const [pageContentRef] = usePageSearch()
</script>
<style scoped></style>

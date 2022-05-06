<template>
  <div>
    <page-search :formConfig="formConfig" @clickSearch="handerSearch" />
    <page-content :tableConfig="tableConfig" ref="pageContentRef">
      <template #enable="scope">
        <div>
          {{ scope.row.enable ? 'Uploaded' : 'Scheduled' }}
        </div>
        <div class="review" @click="reviewDetail(scope.row)">review</div>
      </template>
      <template #action="scope">
        <el-button class="edit-btn" type="text" @click="handleEdit(scope.row)"
          >Edit</el-button
        >
      </template>
    </page-content>
    <review-table
      ref="reviewTableRef"
      title="审核详情Review"
      :tableConfig="reviewTableConfig"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { formConfig } from './config/formConfig'
import { tableConfig } from './config/tableConfig'
import { usePageSearch } from '@/hooks/use-page-search'
import { reviewTableConfig } from './config/reviewTable'
import ReviewTable from '@/components/ReviewTable'

const router = useRouter()
const reviewTableRef = ref<InstanceType<typeof ReviewTable>>()
const reviewDetail = (row: any) => {
  // console.log(row.id)
  reviewTableRef.value.dialogTableVisible = true
}
const handleEdit = (row: any) => {
  console.log(row.id)
  router.push({
    path: formConfig.createPath,
    query: { id: row.id }
  })
}
const [pageContentRef, handerSearch] = usePageSearch()
</script>
<style scoped lang="less">
.review {
  color: @primary-color;
  margin-top: 5px;
  cursor: pointer;
}
.edit-btn {
  color: @primary-color;
}
</style>

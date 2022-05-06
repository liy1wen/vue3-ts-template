<template>
  <div>
    <page-search :formConfig="formConfig" @clickSearch="handerSearch" />
    <page-content :tableConfig="tableConfig" ref="pageContentRef">
      <template #action="scope">
        <el-button class="edit-btn" type="text" @click="handleEdit(scope.row)"
          >Edit</el-button
        >
        <el-button class="edit-btn" type="text" @click="handleEdit(scope.row)"
          >Upload</el-button
        >
        <el-button class="edit-btn" type="text" @click="handleEdit(scope.row)"
          >take down</el-button
        >
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { formConfig } from './config/formConfig'
import { tableConfig } from './config/tableConfig'
import { usePageSearch } from '@/hooks/use-page-search'

const router = useRouter()
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

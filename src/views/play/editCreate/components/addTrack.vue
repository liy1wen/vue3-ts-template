<template>
  <div class="addTrack-container">
    <el-dialog
      v-model="dialogTableVisible"
      :title="title"
      width="40%"
      draggable
    >
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
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogTableVisible = false">Cancel</el-button>
          <el-button class="primary-btn" @click="dialogTableVisible = false"
            >Next</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formConfig } from './config/formConfig'
import { tableConfig } from './config/tableConfig'
import { usePageSearch } from '@/hooks/use-page-search'
type propsType = {
  title: string
}
withDefaults(defineProps<propsType>(), {})
const dialogTableVisible = ref(false)
const [pageContentRef, handerSearch] = usePageSearch()
defineExpose({
  dialogTableVisible
})
</script>

<style scoped lang="less">
.table-content {
  width: 100%;
  padding: 0;
  border: none;
}
.addTrack-container {
  :deep(.el-dialog__body) {
    padding-top: 0;
  }
  :deep(.el-dialog__header) {
    text-align: left;
    .el-dialog__title {
      font-weight: bold;
    }
  }
}
</style>

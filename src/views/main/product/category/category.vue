<template>
  <div>
    <page-content
      :tableConfig="tableConfig"
      @edit="handleEdit"
      @addNew="handleAdd"
    />
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :editDefaultData="editDefaultData"
      :title="modalTitle"
      pageName="category"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageContent from '@/components/PageContent'
import PageModal from '@/components/PageModal'
import { tableConfig } from './config/tableConfig'
import { modalConfig } from './config/modalConfig'
import { usePageModal } from '@/hooks/use-page-modal'

const modalTitle = ref('')
const editCb = () => {
  modalTitle.value = '编辑分类'
}
const addCb = () => {
  modalTitle.value = '新增分类'
}
const [pageModalRef, editDefaultData, handleEdit, handleAdd] = usePageModal(
  editCb,
  addCb
)
</script>

<style scoped></style>

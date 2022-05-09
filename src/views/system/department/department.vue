<template>
  <div>
    <page-content
      :tableConfig="tableConfig"
      ref="pageContentRef"
      @edit="handleEdit"
      @addNew="handleAdd"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :editDefaultData="editDefaultData"
      :title="modalTitle"
      pageName="department"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tableConfig } from './config/tableConfig'
import { modalConfig } from './config/modalConfig'
import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'

const modalTitle = ref('')
const editCb = () => {
  modalTitle.value = '编辑部门'
}
const addCb = () => {
  modalTitle.value = '新增部门'
}
const [pageContentRef] = usePageSearch()
const [pageModalRef, editDefaultData, handleEdit, handleAdd] = usePageModal(
  editCb,
  addCb
)
</script>

<style scoped></style>

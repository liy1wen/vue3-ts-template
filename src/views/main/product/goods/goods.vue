<template>
  <div>
    <page-search :formConfig="formConfig" @clickSearch="handerSearch" />
    <page-content :tableConfig="tableConfig" ref="pageContentRef" @addNew="handleAdd" @edit="handleEdit">
      <template #imgUrl="scope">
        <el-image style="width: 100px; height: 100px" :src="scope.row.imgUrl" :preview-src-list="[scope.row.imgUrl]" fit="cover" preview-teleported />
      </template>
      <template #newPrice="scope">
        <span>￥{{ $filter.formatMoney(scope.row.newPrice) }}</span>
      </template>
      <template #oldPrice="scope">
        <span>￥{{ $filter.formatMoney(scope.row.oldPrice) }}</span>
      </template>
    </page-content>
    <page-modal :modalConfig="modalConfig" ref="pageModalRef" :editDefaultData="editDefaultData" :title="modalTitle" pageName="goods" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { tableConfig } from './config/tableConfig'
import { formConfig } from './config/formConfig'
import { modalConfig } from './config/modalConfig'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
const modalTitle = ref('')
const editCb = () => {
  modalTitle.value = '编辑商品'
}
const addCb = () => {
  modalTitle.value = '新增商品'
}
const [pageContentRef, handerSearch] = usePageSearch()
const [pageModalRef, editDefaultData, handleEdit, handleAdd] = usePageModal(editCb, addCb)
</script>
<style scoped></style>

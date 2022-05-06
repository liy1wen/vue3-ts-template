<template>
  <div class="edit-container">
    <page-edit-create
      :editCreateConfig="editCreateConfig"
      :editDefaultData="editDefaultData"
      :title="title"
    >
      <template #trackList>
        <page-content :tableConfig="trackTableConfig" ref="pageContentRef">
          <template #action="scope">
            <el-button
              class="edit-btn"
              type="text"
              @click="handleEdit(scope.row)"
              >Play</el-button
            >
            <el-button
              class="edit-btn"
              type="text"
              @click="handleUpload(scope.row)"
              >Remove</el-button
            >
          </template>
        </page-content>
        <div class="track-btns">
          <el-button @click="addNewTrack">Add A New Track</el-button>
          <el-button @click="handleAdd">Import Tracks</el-button>
        </div>
      </template>
    </page-edit-create>
    <add-track ref="addTrackRef" :title="modalTitle" />
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :title="modalTitle"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { editCreateConfig } from './config/editCreateConfig'
import { trackTableConfig } from './config/trackTableConfig'
import { modalConfig } from './config/modalConfig'
import { useRoute } from 'vue-router'
import { usePageEdit } from '@/hooks/use-page-edit'
import { usePageModal } from '@/hooks/use-page-modal'
import addTrack from './components/addTrack.vue'
const addTrackRef = ref<InstanceType<typeof addTrack>>()
const title = ref<string>('')
const route = useRoute()
const id = route.query?.id
const row = {}
const modalTitle = ref<string>('')
const addNewTrack = () => {
  modalTitle.value = 'Add Track'
  addTrackRef.value.dialogTableVisible = true
}
const editCb = () => {
  title.value = '编辑歌单列表'
}
const addCb = () => {
  title.value = '新增歌单列表'
}
const modalCb = () => {
  modalTitle.value = 'Add'
}
const [editDefaultData] = usePageEdit(editCb, addCb, row, id)
const [pageModalRef, handleAdd] = usePageModal(modalCb)
</script>

<style scoped lang="less">
.table-content {
  width: 100%;
  padding: 0;
  border: none;
  :deep(.el-table) {
    margin-top: -@spacing-base;
  }
}
.track-btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: @spacing-base;
}
.edit-container {
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

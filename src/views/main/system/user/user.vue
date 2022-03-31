<template>
  <div>
    <page-search :formConfig="formConfig" @clickSearch="handerSearch" />
    <page-content
      :tableConfig="tableConfig"
      ref="pageContentRef"
      @edit="handleEdit"
      @addNew="handleAdd"
    />
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :editDefaultData="editDefaultData"
      :title="modalTitle"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import PageSearch from '@/components/PageSearch/index.vue'
import PageContent from '@/components/PageContent/index.vue'
import PageModal from '@/components/PageModal/index.vue'
import { formConfig } from './config/formConfig'
import { tableConfig } from './config/tableConfig'
import { modalConfig } from './config/modalConfig'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const modalTitle = ref('')
// pageModal相关的hook逻辑
// 处理密码的逻辑
const editCb = () => {
  modalTitle.value = '编辑用户'
  modalConfig.formItems.map((item) => {
    if (item.type === 'password') {
      item.isHidden = true
    }
  })
}
const addCb = () => {
  modalTitle.value = '新增用户'
  modalConfig.formItems.map((item) => {
    if (item.type === 'password') {
      item.isHidden = false
    }
  })
}
// 获取部门
const store = useStore()
store.dispatch('systemModule/getDataList', {
  url: 'department',
  params: {
    offset: 0,
    size: 100
  }
})
// 获取角色
store.dispatch('systemModule/getDataList', {
  url: 'role',
  params: {
    offset: 0,
    size: 100
  }
})
// 动态添加部门和角色列表
const modalConfigRef = computed(() => {
  const departmentList = store.state.systemModule.departmentList
  const roleList = store.state.systemModule.roleList
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )
  if (departmentItem) {
    departmentItem.options = departmentList.map((item: any) => {
      return { value: item.id, label: item.name }
    })
  }

  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  if (roleItem) {
    roleItem.options = roleList.map((item: any) => {
      return { value: item.id, label: item.name }
    })
  }
  return modalConfig
})

const [pageContentRef, handerSearch] = usePageSearch()
const [pageModalRef, editDefaultData, handleEdit, handleAdd] = usePageModal(
  editCb,
  addCb
)
</script>
<style scoped></style>

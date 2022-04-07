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
      :modalConfig="modalConfig"
      :editDefaultData="editDefaultData"
      :title="modalTitle"
      :otherInfo="otherInfo"
      pageName="role"
    >
      <div class="menu-tree">
        <div class="menu-label">菜单权限</div>
        <el-tree
          ref="treeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          @check="handleNodeClick"
          :props="defaultProps"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'
import PageSearch from '@/components/PageSearch'
import PageContent from '@/components/PageContent'
import PageModal from '@/components/PageModal'
import { formConfig } from './config/formConfig'
import { modalConfig } from './config/modalConfig'
import { tableConfig } from './config/tableConfig'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import type { ElTree } from 'element-plus'
import { useStore } from 'vuex'
import { generateLeafKeys } from '@/utils/generateLeafKeys'
const store = useStore()
const modalTitle = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()
const defaultProps = {
  children: 'children',
  label: 'name'
}
// 获取所有菜单
store.dispatch('systemModule/getDataList', {
  url: 'menu',
  params: {
    offset: 0,
    size: 100
  }
})
const menuList = computed(() => store.state.systemModule.menuList)
const otherInfo = ref({})
const editCb = (item: any) => {
  modalTitle.value = '编辑角色'
  const leafKeys = generateLeafKeys(item.menuList)
  nextTick(() => {
    treeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
const addCb = () => {
  modalTitle.value = '新增角色'
}
const handleNodeClick = (treeNode: any, info: any) => {
  const { checkedKeys, halfCheckedKeys } = info
  otherInfo.value = {
    menuList: [...checkedKeys, ...halfCheckedKeys]
  }
}
const [pageContentRef, handerSearch] = usePageSearch()
const [pageModalRef, editDefaultData, handleEdit, handleAdd] = usePageModal(
  editCb,
  addCb
)
</script>
<style scoped lang="less">
.menu-tree {
  display: flex;
  padding: 15px 20px 0;
  .menu-label {
    width: 80px;
    text-align: center;
  }
}
</style>

<template>
  <div class="table-content">
    <Table
      :dataList="dataList"
      v-bind="tableConfig"
      :dataCount="dataCount"
      v-model:pageConfig="pageInfo"
      v-if="showQueryBtn"
    >
      <!-- 常规插槽 -->
      <template #handerHeader>
        <div>
          <el-button type="primary" size="large" v-if="showCreateBtn"
            >新建用户</el-button
          >
        </div>
      </template>
      <template #createAt="scope">
        <div>{{ $filter.formatTime(scope.row.createAt) }}</div>
      </template>
      <template #updateAt="scope">
        <div>{{ $filter.formatTime(scope.row.updateAt) }}</div>
      </template>
      <template #enable="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #action="scope">
        <el-button
          size="small"
          :icon="Edit"
          @click="handleEdit(scope.row)"
          v-if="showUpdateBtn"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          :icon="Delete"
          @click="handleDelete(scope.row)"
          v-if="showDeleteBtn"
          >Delete</el-button
        >
      </template>
      <!-- 动态插槽 -->
      <template
        v-for="item in otherSlotList"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import Table from '../Table/index.vue'
import { defineProps, computed, defineExpose, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { Delete, Edit } from '@element-plus/icons-vue'
import { useBtnPermissions } from '@/hooks/use-btn-permissions'
const props = defineProps({
  tableConfig: {
    type: Object,
    require: true
  }
})
const pageInfo = ref({
  pageSize: 10,
  currentPage: 1
})
watch(pageInfo, () => getDataList())
const url = (props as any).tableConfig.requestUrl
const store = useStore()
// 获取列表数据
const getDataList = (params: any = {}) => {
  store.dispatch('systemModule/getDataList', {
    url,
    params: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...params
    }
  })
}
getDataList()
// 从store回去列表数据和总数
const dataList = computed(() => store.state.systemModule[`${url}List`])
const dataCount = computed(() => store.state.systemModule[`${url}Count`])

// 动态插槽
const defaultSlotList = ['createAt', 'updateAt', 'enable', 'action']
const otherSlotList = props.tableConfig?.propList.filter((item: any) => {
  return item.slotName && !defaultSlotList.includes(item.slotName)
})

// 按钮权限判断
//"system:users:create"
const showCreateBtn = useBtnPermissions(url, 'create')
const showDeleteBtn = useBtnPermissions(url, 'delete')
const showUpdateBtn = useBtnPermissions(url, 'update')
const showQueryBtn = useBtnPermissions(url, 'query')

const handleEdit = (row: any): void => {
  console.log(row)
}
defineExpose({
  getDataList
})
</script>

<style scoped lang="less">
.table-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>

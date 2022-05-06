<template>
  <div class="table-content">
    <Table
      ref="tableRef"
      :dataList="dataList"
      v-bind="tableConfig"
      :dataCount="dataCount"
      v-model:pageConfig="pageInfo"
      @getData="getDataList"
    >
      <!-- 常规插槽 -->
      <template #handerHeader v-if="tableConfig.showExportBtn">
        <div>
          <el-button :icon="Download" class="primary-btn" @click="exportData"
            >Export</el-button
          >
        </div>
      </template>
      <template #createAt="scope">
        <div>{{ $filter.formatTime(scope.row.createAt) }}</div>
      </template>
      <template #updateAt="scope">
        <div>{{ $filter.formatTime(scope.row.updateAt) }}</div>
      </template>
      <!-- <template #action="scope">
        <el-button
          size="small"
          :icon="Edit"
          type="primary"
          @click="handleEdit(scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          :icon="Delete"
          @click="handleDelete(scope.row)"
          >删除</el-button
        >
      </template> -->
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
import Table from '../../Table'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
// import { ElMessage, ElMessageBox } from 'element-plus'
import { Download } from '@element-plus/icons-vue'
// import { useBtnPermissions } from '@/hooks/use-btn-permissions'
type propsType = {
  tableConfig: Record<string, any>
}
const props = withDefaults(defineProps<propsType>(), {})

// const emit = defineEmits(['addNew', 'edit'])
const tableRef = ref<InstanceType<typeof Table>>()
const pageInfo = ref({
  pageSize: 10,
  currentPage: 1
})
const queryParams = ref({})
const url = (props as any).tableConfig.requestUrl
const store = useStore()
// 获取列表数据
const getDataList = () => {
  store.dispatch('systemModule/getDataList', {
    url,
    params: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryParams.value
    }
  })
}
getDataList()
// 从store回去列表数据和总数
const dataList = computed(() => store.state.systemModule[`${url}List`])
const dataCount = computed(() => store.state.systemModule[`${url}Count`])

// 导出
const exportData = () => {
  console.log(tableRef.value.selectList)
}
// 动态插槽
const defaultSlotList = ['createAt', 'updateAt']
const otherSlotList = props.tableConfig?.propList.filter((item: any) => {
  return item.slotName && !defaultSlotList.includes(item.slotName)
})

// 按钮权限判断
//"system:users:create"
// const showCreateBtn = useBtnPermissions(url, 'create')
// const showDeleteBtn = useBtnPermissions(url, 'delete')
// const showUpdateBtn = useBtnPermissions(url, 'update')
// const showQueryBtn = useBtnPermissions(url, 'query')

// 按钮操作处理逻辑
// const handleEdit = (row: any) => emit('edit', row)
// const handerAddNew = () => emit('addNew')
// const handleDelete = (row: any) => {
//   const { id } = row
//   ElMessageBox.confirm('确定要删除吗？', '删除', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     type: 'warning'
//   })
//     .then(() => {
//       store.dispatch('systemModule/deleteData', {
//         url,
//         id
//       })
//     })
//     .catch(() => {
//       ElMessage({
//         type: 'info',
//         message: '取消'
//       })
//     })
// }
defineExpose({
  getDataList,
  pageInfo,
  queryParams
})
</script>

<style scoped lang="less">
.table-content {
  padding: @spacing-base;
  border-top: @spacing-base solid #f0f2f5;
}
</style>

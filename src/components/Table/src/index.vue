<template>
  <div class="table-container">
    <div class="table-header">
      <div class="header-title">{{ title }}</div>
      <slot name="handerHeader"></slot>
    </div>
    <el-table
      table-layout="fixed"
      size="large"
      :data="dataList"
      stripe
      border
      style="width: 100%"
      row-key="id"
      :tree-props="{ children: 'children' }"
      :header-cell-style="headerStyle"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="60"
        align="center"
        v-if="showSelectColumn"
      />
      <el-table-column
        type="index"
        label="序号"
        width="80"
        align="center"
        v-if="showIndexColumn"
      />
      <template v-for="item in propList" :key="item.prop">
        <el-table-column align="center" v-bind="item" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] || '-' }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-footer" v-if="showPagination">
      <el-pagination
        :currentPage="pageConfig.currentPage"
        :page-size="pageConfig.pageSize"
        :page-sizes="[5, 10, 20, 50]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IPropList } from '../types'
const emit = defineEmits(['update:pageConfig', 'getData'])
type propsType = {
  dataList: any[]
  dataCount?: number
  pageConfig?: Record<string, unknown>
  propList: IPropList[]
  headerStyle?: Record<string, unknown>
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  title?: string
  showPagination?: boolean
}
const props = withDefaults(defineProps<propsType>(), {
  pageConfig: () => ({ currentPage: 1, pageSize: 10 }),
  headerStyle: () => ({
    background: '#0C2135',
    color: '#ffffff'
  }),
  showIndexColumn: false,
  showSelectColumn: false,
  showPagination: true
})

const selectList = ref<any[]>([])
const handleSelectionChange = (value: any) => {
  selectList.value = value
}
const handleSizeChange = (pageSize: number) => {
  emit('update:pageConfig', { ...props.pageConfig, pageSize })
  emit('getData')
}

const handleCurrentChange = (currentPage: number) => {
  emit('update:pageConfig', { ...props.pageConfig, currentPage })
  emit('getData')
}
defineExpose({
  selectList
})
</script>

<style scoped lang="less">
.table-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px @spacing-base;
  .header-title {
    font-size: @spacing-base;
    font-weight: bold;
  }
}
.table-footer {
  margin-top: @spacing-base;
  display: flex;
  justify-content: flex-end;
}
</style>

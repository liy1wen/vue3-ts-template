<template>
  <div class="table-container">
    <div class="table-header">
      <div class="header-title">{{ title }}</div>
      <slot name="handerHeader"></slot>
    </div>
    <el-table
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
import { ref, defineProps, defineEmits } from 'vue'
const emit = defineEmits(['update:pageConfig'])
const props = defineProps({
  dataList: {
    type: Array,
    require: true,
    default: () => []
  },
  dataCount: {
    type: Number,
    default: 0
  },
  pageConfig: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  propList: {
    type: Array,
    require: true,
    default: () => []
  },
  headerStyle: {
    type: Object,
    default: () => ({
      background: '#0C2135',
      color: '#ffffff'
    })
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  showPagination: {
    type: Boolean,
    default: true
  }
})
const handleSelectionChange = (value: any) => {
  console.log(value)
}
const handleSizeChange = (pageSize: number) => {
  emit('update:pageConfig', { ...props.pageConfig, pageSize })
}

const handleCurrentChange = (currentPage: number) => {
  emit('update:pageConfig', { ...props.pageConfig, currentPage })
}
</script>

<style scoped lang="less">
.table-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 20px;
  .header-title {
    font-size: 20px;
    font-weight: bold;
  }
}
.table-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
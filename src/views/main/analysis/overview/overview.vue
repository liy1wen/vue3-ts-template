<template>
  <div class="overview">
    <page-search :formConfig="formConfig" />
    <div class="table-content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" min-width="180" />
        <el-table-column prop="name" label="Name" min-width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/PageSearch/index.vue'
import { formConfig } from './formConfig'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
<style scoped>
.table-content {
  padding: 30px;
  border-top: 20px solid #f0f2f5;
}
</style>

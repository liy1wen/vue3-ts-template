<template>
  <div class="review-container">
    <el-dialog
      v-model="dialogTableVisible"
      :title="title"
      width="40%"
      draggable
    >
      <Table :dataList="dataList" v-bind="tableConfig"></Table>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import Table from '../../Table'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
type propsType = {
  tableConfig: Record<string, any>
  title: string
}
const props = withDefaults(defineProps<propsType>(), {})
const dialogTableVisible = ref(false)
// const url = (props as any).tableConfig.requestUrl
// const store = useStore()
// 获取列表数据
// const getDataList = () => {
//   store.dispatch('systemModule/getDataList', {
//     url
//   })
// }
// getDataList()
// 从store回去列表数据和总数
// const dataList = computed(() => store.state.systemModule[`${url}List`])
const dataList = ref([
  {
    time: '2022-07-07 16:58:11',
    person: 'admin',
    result: 'Approve',
    reason: '声音不清晰，需要重新上传'
  },
  {
    time: '2022-07-07 16:58:11',
    person: 'admin',
    result: 'Approve',
    reason: ''
  }
])
defineExpose({
  dialogTableVisible
})
</script>

<style scoped lang="less">
.review-container {
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

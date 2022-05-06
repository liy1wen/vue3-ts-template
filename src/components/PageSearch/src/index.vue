<template>
  <div class="search-container">
    <Form v-bind="formConfig" v-model="formData">
      <template #header>
        <div class="search-nav">
          <div
            v-for="(item, index) in props.formConfig?.navList"
            :key="index"
            :class="[
              'search-nav-item',
              index === currentIndex ? 'primary-btn' : ''
            ]"
            @click="handleNavClick(index)"
          >
            {{ item }}(<span class="search-nav-count" @click="showCount"
              >View</span
            >)
          </div>
        </div>
        <div class="search-header">
          <div class="search-title">Search</div>
          <div class="buttons">
            <el-button
              v-if="formConfig.showCreate"
              :icon="CirclePlus"
              class="primary-btn"
              @click="handleCreate"
              >Create</el-button
            >
            <el-button
              v-if="formConfig.showRefresh"
              :icon="Refresh"
              class="primary-btn"
              @click="handleReset"
              >Refresh</el-button
            >
            <el-button
              v-if="formConfig.showSearch"
              :icon="Search"
              class="primary-btn"
              @click="handleSearch"
              >Search</el-button
            >
          </div>
        </div>
      </template>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Refresh, CirclePlus } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import Form from '../../Form'

const router = useRouter()
const emit = defineEmits(['clickSearch', 'addNew'])
type propsType = {
  formConfig: any
}
const props = withDefaults(defineProps<propsType>(), {
  formConfig: {
    showSearch: true,
    showRefresh: true,
    showCreate: true
  }
})
console.log(props.formConfig, 'formConfig')

const currentIndex = ref<number>(0)
// 顶部nav切换
const handleNavClick = (index: number) => {
  if (currentIndex.value === index) return false
  currentIndex.value = index
  handleSearch()
}
// 生成formData，传递给form组件，进行数据绑定
const formItems = props.formConfig?.formItems ?? []
const originFormData: any = {}
for (const item of formItems) {
  originFormData[item.field] = ''
}
const formData = ref(originFormData)

// 刷新
const handleReset = () => {
  formData.value = originFormData
  emit('clickSearch', {})
}
// 新增
// const handerAddNew = () => emit('addNew')
const handleCreate = () => {
  router.push({ path: props.formConfig.createPath })
}
// 搜索
const handleSearch = () => {
  emit('clickSearch', { ...formData.value })
}
// 显示数量
const showCount = () => {
  console.log('showCount')
}
</script>

<style scoped lang="less">
.search-container {
  .search-nav {
    display: flex;
    background: @bg-color;
    &-count {
      color: #f04844;
    }
    &-item {
      padding: 8px 15px;
      margin-left: 10px;
      background: #ffffff;
      margin-bottom: @spacing-base;
      cursor: pointer;
      &:hover {
        color: @primary-color;
      }
      &:first-child {
        margin-left: 0;
      }
    }
    .primary-btn .search-nav-count {
      color: #ffffff;
    }
  }
  .search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 @spacing-base;
    .search-title {
      font-size: @spacing-base;
      padding: @spacing-base 0;
      font-weight: bold;
    }
    .buttons {
      text-align: right;
    }
  }
}
</style>

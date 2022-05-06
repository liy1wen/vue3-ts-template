<template>
  <div>
    <page-edit-create
      :editCreateConfig="editCreateConfig"
      :editDefaultData="editDefaultData"
      :title="title"
    >
    </page-edit-create>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { editCreateConfig } from './config/editCreateConfig'
import { useRoute } from 'vue-router'
import { usePageEdit } from '@/hooks/use-page-edit'
const title = ref<string>('')
const route = useRoute()
const id = route.query?.id
console.log(typeof id)
let row
if (id) {
  row = {}
} else {
  row = {}
}

const editCb = () => {
  title.value = '编辑歌曲片段'
}
const addCb = () => {
  title.value = '新增歌曲片段'
}
const [editDefaultData] = usePageEdit(editCb, addCb, row, id)
</script>

<style scoped lang="less"></style>

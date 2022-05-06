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
let row
if (id) {
  row = {
    artist: '1',
    country: ['1', '2'],
    date: '2022-04-26',
    featuredArt: '张三',
    file: 'config.ini',
    genre: 'Uploaded',
    genreCheckbox: ['1', '4', '6'],
    id: '45555',
    isrc: 'isrc',
    reason: '拒绝',
    source: 'Scheduled',
    status: 'Uploaded',
    subGenre: 'Scheduled',
    title: 'Track Title',
    type: '2',
    uploader: '45454',
    img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  }
} else {
  row = {}
}

const editCb = () => {
  title.value = '编辑歌曲'
}
const addCb = () => {
  title.value = '新增歌曲'
}
const [editDefaultData] = usePageEdit(editCb, addCb, row, id)
</script>

<style scoped lang="less"></style>

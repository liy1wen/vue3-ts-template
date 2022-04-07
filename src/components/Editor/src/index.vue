<template>
  <div class="editor-container">
    <div class="title-box">
      <span class="label">标题</span>
      <el-input v-model="storyInfo.title" placeholder="请输入标题" />
    </div>
    <div id="editor" ref="editorRef"></div>
    <div class="syncContent" :innerHTML="content.html"></div>
    <el-button type="primary" class="submit-btn" @click="submit"
      >提交</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import WangEditor from 'wangeditor'
import type Editor from 'wangeditor'
import hljs from 'highlight.js'
import { useStore } from 'vuex'
const store = useStore()
export interface EditorInfo {
  html: string
  text: string
}
const storyInfo = ref({
  title: '',
  content: ''
})
const editorRef = ref<HTMLDivElement | null>(null)
const content = ref({
  html: '',
  text: ''
})
const instance = ref<Editor | null>(null)
onMounted(() => {
  initEditor()
})
onBeforeUnmount(() => {
  if (!instance.value) return
  instance.value.destroy()
  instance.value = null
})
const initEditor = () => {
  instance.value = new WangEditor(editorRef.value)
  instance.value.config.placeholder = '留下你的故事'
  // 挂载highlight插件
  instance.value.highlight = hljs
  instance.value.config.onchange = function (newHtml: any) {
    syncText(newHtml)
  }
  instance.value.create()
}
// 提交
const submit = () => {
  store.dispatch('storyModule/publishStory', { ...storyInfo.value })
  instance.value?.txt.clear()
  storyInfo.value = { title: '', content: '' }
}
// 内容回显
const syncText = (newHtml: any) => {
  storyInfo.value.content = newHtml
  content.value.html = newHtml
}
</script>

<style scoped lang="less">
.editor-container {
  padding: 20px;
  .title-box {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    width: 300px;
    .label {
      width: 60px;
      text-align: left;
    }
  }
  .submit-btn {
    margin-top: 20px;
  }
  :deep(.w-e-text-container) {
    text-align: left;
  }
  .syncContent {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    text-align: left;
  }
}
</style>

<template>
  <el-dropdown>
    <div class="dropdown-hover">
      <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
      <span class="el-dropdown-link">{{ username }}</span>
      <el-icon><caret-bottom /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item> <el-link href="https://github.com/liy1wen/vue3-ts-template.git" target="_blank">github</el-link></el-dropdown-item>
        <el-dropdown-item divided @click="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { userStore } from '@/store/user'
const user = userStore()
const username = computed(() => user.userInfo.name)
const loginOut = () => {
  user.loginOut()
}
</script>

<style scoped lang="less">
.dropdown-hover {
  cursor: pointer;
  display: flex;
  align-items: center;
  .el-dropdown-link {
    margin-left: 10px;
  }
}
</style>

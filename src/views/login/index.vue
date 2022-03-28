<template>
  <div class="login-container">
    <login-panel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './component/login-panel.vue'
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('https://cdn.jsdelivr.net/gh/liy1wen/image-resource@master/20220324/login-bg.webp');
  background-size: cover;
}
</style>

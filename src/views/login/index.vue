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
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login.png') left no-repeat;
  background-position: left;
}
</style>

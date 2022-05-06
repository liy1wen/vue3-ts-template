<template>
  <div class="dashboard-container">
    <span class="animate__animated animate__bounceInDown">欢迎登录</span> <br />
    <h3 class="dashboard-title animate__animated animate__bounceInUp">
      Playdio Music Operation Management System
    </h3>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.dashboard-container {
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  background: @bg-color;
  margin-top: 10%;
  .dashboard-title {
    margin-top: @spacing-base;
    color: @primary-color;
  }
}
</style>

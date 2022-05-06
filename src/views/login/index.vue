<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="title animate__animated animate__backInDown">Playdio</div>
      <div class="sub-title">Operation Management System</div>
      <login-panel />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './components/LoginPanel'
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  background: @bg-color;
  justify-content: center;
  align-items: center;
  .login-panel {
    text-align: center;
    padding: 40px 60px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
    .title {
      color: #1abb9b;
      font-size: 36px;
      font-weight: bold;
    }
    .sub-title {
      color: #1abb9b;
      font-weight: 500;
      font-size: 24px;
      margin-top: 15px;
      margin-bottom: 36px;
    }
    .login-box {
      width: 320px;
      :deep(.el-tabs__content) {
        padding: 25px 15px;
      }
      :deep(.el-tabs__item) {
        height: 46px;
        line-height: 46px;
        background: #f4f4f5;
        border-color: #f4f4f5 !important;
      }
      :deep(.is-active) {
        border-color: transparent !important;
      }
      .custom-tabs-label .el-icon {
        vertical-align: middle;
      }
      .custom-tabs-label span {
        vertical-align: middle;
        margin-left: 4px;
      }
      .tab-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .el-form :deep(.el-form-item__label) {
        font-weight: bold;
      }
    }
  }
}
</style>

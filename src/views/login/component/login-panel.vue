<template>
  <div>
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="activeName" class="login-box">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span class="tab-title">账号登录</span>
          </span>
        </template>
        <account-login
          ref="accountRef"
          :rememberPassword="isRememberPassword"
        />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span class="tab-title">手机登录</span>
          </span>
        </template>
        <phone-login ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="password-operation">
      <el-checkbox
        v-model="isRememberPassword"
        class="remember-password"
        label="记住密码"
        size="large"
      />
      <el-link type="primary" class="forgotPassword">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" size="large" @click="login"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Iphone, UserFilled } from '@element-plus/icons-vue'
import AccountLogin from './account-login.vue'
import PhoneLogin from './phone-login.vue'

const isRememberPassword = ref(true)
const accountRef = ref<InstanceType<typeof AccountLogin>>()
const phoneRef = ref<InstanceType<typeof PhoneLogin>>()
const activeName = ref('account')
const login = () => {
  activeName.value === 'account'
    ? accountRef.value?.loginAction(isRememberPassword.value)
    : phoneRef.value?.loginAction(isRememberPassword.value)
}
</script>

<style scoped lang="less">
.title {
  text-align: center;
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
.password-operation {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .remember-password :deep .forgotPassword {
    font-weight: bold;
  }
}
.login-button {
  width: 100%;
  border-radius: 0;
  margin-top: 10px;
}
</style>

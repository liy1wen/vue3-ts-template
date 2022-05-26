<template>
  <el-form
    ref="ruleFormRef"
    :model="accountForm"
    :rules="accountRules"
    label-width="70px"
    class="login-ruleForm"
    size="large"
  >
    <el-form-item prop="name">
      <el-input
        v-model="accountForm.name"
        clearable
        :prefix-icon="UserFilled"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        show-password
        type="password"
        v-model="accountForm.password"
        :prefix-icon="Lock"
      />
    </el-form-item>
    <el-form-item>
      <el-button class="login-button primary-btn" size="large" @click="login"
        >Login</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance } from 'element-plus'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { accountRules } from '../../../Validation'
import utils from '@/utils/cache'
import { useStore } from 'vuex'

const store = useStore()
const ruleFormRef = ref<FormInstance>()
const accountForm = reactive({
  name: utils.getCache('name') ?? 'kobe',
  password: utils.getCache('password') ?? '123456'
})
const login = () => {
  ruleFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      store.dispatch('userModule/login', { ...accountForm })
    } else {
      console.log('error submit!')
    }
  })
}
</script>

<style scoped lang="less">
.login-ruleForm {
  :deep(.el-form-item__content) {
    margin-left: 0 !important;
  }
  :deep(.el-input__inner) {
    height: 50px !important;
    padding: 0 55px;
  }
  :deep(.el-icon) {
    font-size: 24px;
  }
  :deep(.el-input__clear) {
    font-size: 16px;
  }
  .login-button {
    height: 50px;
    font-weight: bold;
    font-size: @spacing-base;
    width: 100%;
    border-radius: 0;
    margin: 10px 0;
    border-radius: 4px;
  }
}
</style>

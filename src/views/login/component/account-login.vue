<template>
  <el-form
    ref="ruleFormRef"
    :model="accountForm"
    :rules="accountRules"
    label-width="70px"
    class="login-ruleForm"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="accountForm.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input show-password type="password" v-model="accountForm.password" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import type { FormInstance } from 'element-plus'
import { accountRules } from '../Validation'
import utils from '@/utils/cache'
import { useStore } from 'vuex'
import request from '@/service/request.js'

const store = useStore()
const ruleFormRef = ref<FormInstance>()
const accountForm = reactive({
  name: utils.getCache('name') ?? '',
  password: utils.getCache('password') ?? ''
})
const loginAction = (isRememberPassword: boolean) => {
  ruleFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      if (isRememberPassword) {
        utils.setCache('name', accountForm.name)
        utils.setCache('password', accountForm.password)
      } else {
        utils.deleteCache('name')
        utils.deleteCache('password')
      }
      store.dispatch('userModule/login', { ...accountForm })
    } else {
      console.log('error submit!')
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped></style>

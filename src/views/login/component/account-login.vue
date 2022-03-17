<template>
  <el-form
    ref="ruleFormRef"
    :model="loginForm"
    :rules="accountRules"
    label-width="70px"
    class="login-ruleForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input v-model="loginForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
import type { FormInstance } from 'element-plus'
import { accountRules } from '../Validation'

export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>()
    const loginForm = reactive({
      username: '',
      password: ''
    })
    const loginAction = () => {
      ruleFormRef.value?.validate((valid, fields) => {
        if (valid) {
          console.log(loginForm)
        } else {
          console.log('error submit!', fields)
        }
      })
    }
    return {
      loginForm,
      ruleFormRef,
      loginAction,
      accountRules
    }
  }
})
</script>

<style scoped></style>

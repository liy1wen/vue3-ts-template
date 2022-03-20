<template>
  <el-form
    ref="ruleFormRef"
    :model="phoneForm"
    :rules="phoneRules"
    label-width="70px"
    class="login-ruleForm"
  >
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="phoneForm.phone" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="verify">
        <el-input v-model="phoneForm.code" />
        <el-button type="primary" class="send-code">验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import type { FormInstance } from 'element-plus'
import { phoneRules } from '../Validation'

const ruleFormRef = ref<FormInstance>()
const phoneForm = reactive({
  phone: '',
  code: ''
})
const loginAction = (isRememberPassword: boolean) => {
  ruleFormRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log(phoneForm, isRememberPassword)
    } else {
      console.log('error submit!', fields)
    }
  })
}
defineExpose({ loginAction })
</script>

<style scoped lang="less">
.verify {
  display: flex;
  .send-code {
    margin-left: 10px;
  }
}
</style>

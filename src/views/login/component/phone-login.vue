<template>
  <el-form
    ref="ruleFormRef"
    :model="loginForm"
    :rules="phoneRules"
    label-width="70px"
    class="login-ruleForm"
  >
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="loginForm.phone" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="verify">
        <el-input v-model="loginForm.code" />
        <el-button type="primary" class="send-code">验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
import type { FormInstance } from 'element-plus'
import { phoneRules } from '../Validation'

export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>()
    const loginForm = reactive({
      phone: '',
      code: ''
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
      phoneRules
    }
  }
})
</script>

<style scoped lang="less">
.verify {
  display: flex;
  .send-code {
    margin-left: 10px;
  }
}
</style>

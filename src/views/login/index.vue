<template>
  <div class="login-container">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './component/login-panel.vue'
import service from '@/service/service'

export default defineComponent({
  components: { LoginPanel },
  setup() {
    service.get('/home/multidata').then((res: any) => {
      console.log(res, '=============')
    })
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login-bg.jpg');
  background-size: contain;
}
</style>

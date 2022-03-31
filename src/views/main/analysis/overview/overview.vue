<template>
  <div class="overview">
    <Card title="项目介绍" class="card-box">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </Card>
    <Card title="技术栈" class="card-box">
      <div class="c-left">
        <text-link :textLinkArr="technologyStacks" />
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card'
import TextLink from '@/components/TextLink'
import { technologyStacks } from './config/technologyStacks'
</script>
<style scoped lang="less">
.overview {
  background: #f0f2f5;
  .card-box {
    margin-bottom: 20px;
    .c-left {
      text-align: left;
    }
  }
}
</style>

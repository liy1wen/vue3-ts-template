<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleFoldClick">
      <Expand v-if="!isFold" />
      <Fold v-else />
    </el-icon>
    <div class="header-right">
      <bread-crumbs :breadCrumbs="bCrumbs" />
      <user-operation />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import UserOperation from './user-operation.vue'
import BreadCrumbs from './bread-crumbs.vue'
import { useRoute } from 'vue-router'
import { generateBreadCrumbs } from '@/utils/generateBreadCrumbs'
const store = useStore()
const route = useRoute()
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  store.commit('mainModule/SET_ISCOLLAPSE', isFold.value)
}

const bCrumbs = computed(() => {
  return generateBreadCrumbs(store.state.userModule.userMenu, route.path)
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 @spacing-base;
  }
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleFoldClick">
      <Expand v-if="!isFold" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const store = useStore()
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  store.commit('mainModule/SET_ISCOLLAPSE', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>

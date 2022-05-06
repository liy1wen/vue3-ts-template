<template>
  <div class="nav-menu">
    <router-link to="/" class="menu-link">
      <div class="logo">
        <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
        <span v-if="!collapse" class="title">IYiYi</span>
      </div>
    </router-link>

    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.url">
            <template #title>
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <el-icon><iphone /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <router-link :to="subitem.url" class="menu-link">
                <el-menu-item :index="subitem.url">
                  <i v-if="subitem.icon" :class="subitem.icon"></i>
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.url">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const userMenus = computed(() => store.state.userModule.userMenu)
console.log(userMenus)
const collapse = computed(() => store.state.mainModule.isCollapse)
const activeMenu = ref(route.path)
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }
  .menu-link {
    text-decoration: none;
  }
  :deep(.el-sub-menu__title) {
    background-color: #001529 !important;
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>

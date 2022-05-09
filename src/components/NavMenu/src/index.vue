<template>
  <div class="nav-menu">
    <router-link to="/" class="menu-link">
      <div class="logo">
        <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
        <span v-if="!collapse" class="title">IYiYi - OMS</span>
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
      <template v-for="item in routes" :key="item.path">
        <!-- 只有一个子路由 -->
        <template v-if="item.children && item.children.length === 1">
          <router-link :to="item.path" class="menu-link">
            <el-menu-item :index="item.path">
              <i :class="['iconfont', item.children[0].meta.icon]"></i>
              <template #title>
                <span class="menu-name">{{ item.children[0].name }}</span>
              </template>
            </el-menu-item>
          </router-link>
        </template>
        <!-- 多个子路由 -->
        <template v-else>
          <el-sub-menu :index="item.path" v-if="!item.meta.hidden">
            <template #title>
              <i :class="['iconfont', item.meta.icon]"></i>
              <span class="menu-name">{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.path">
              <router-link
                v-if="!subitem.meta.hidden"
                :to="subitem.path"
                class="menu-link"
              >
                <el-menu-item :index="subitem.path">
                  <span class="el-menu-item-title">{{
                    subitem.meta.title
                  }}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
// import { constantRoutes } from '@/router'
const store = useStore()
const route = useRoute()
const collapse = computed(() => store.state.mainModule.isCollapse)
const routes = computed(() => store.state.routesModule.routes)
console.log(routes.value, 'routes')
const activeMenu = computed(() =>
  route.path === '/dashboard' ? '/' : route.path
)
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: @sideBar-color;

  .logo {
    display: flex;
    height: 28px;
    padding: 15px 10px;
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
    background-color: @sideBar-color;
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .is-active {
    color: @primary-color !important;
    background-color: #383d49 !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
.menu-name {
  margin-left: 12px;
}
.el-menu-item-title {
  margin-left: 8px;
}
</style>

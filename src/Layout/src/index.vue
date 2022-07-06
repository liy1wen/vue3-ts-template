<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <!-- <router-view class="animate__animated animate__fadeIn" /> -->
            <router-view #default="{ Component }">
              <transition enter-active-class="animate__animated animate__fadeIn">
                <div>
                  <keep-alive>
                    <component :is="Component" :key="route.name" v-if="route.meta.keepAlive"></component>
                  </keep-alive>
                  <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive" />
                </div>
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NavMenu from '@/components/NavMenu'
import NavHeader from '@/components/NavHeader'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const isCollapse = computed(() => store.state.mainModule.isCollapse)
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
  .page-info {
    background-color: #fff;
    border-radius: 5px;
    .animate__fadeIn {
      --animate-duration: 1s;
    }
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
  padding: 0;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: @sideBar-color;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>

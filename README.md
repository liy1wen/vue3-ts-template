## Vue3-Ts-Admin

### 项目简介

- 基于 Vue3、Vuex、Pinia、VueRouter、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案。

### 分支简介

- 基于后端返回路由菜单的基础上，实现路由权限功能。详情请查看[前端如何配合后端实现 Vue 路由权限](https://juejin.cn/post/7096393921034453006)。修改了全局状态管理方案，接入 pinia 替换了原先的 vuex。

### 克隆项目

```
git clone https://github.com/liy1wen/vue3-ts-template.git
```

### 安装依赖

```
yarn
```

### 运行项目

```
yarn serve
```

### 项目规范

1. 代码规范

- 集成 editorconfig 配置
- 使用 prettier 工具
- 使用 ESLint 检测
- git Husky 和 eslint
- git commit 规范

2. 第三方库集成

- vue.config.js 配置
- vue-router 集成
- vuex/pinia 集成
- element-plus 集成
- axios 集成
- VSCode 配置

### 组件封装

- 项目基于日常的业务需求封装了常用的表格、表单、上传等组件。组件通过对应 config.ts 文件生成，也可以在现有基础上进行扩展。

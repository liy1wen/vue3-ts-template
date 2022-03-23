const department = () => import('@/views/main/system/department/department.vue')
export default {
  path: '/main/system/department',
  name: 'department',
  component: department,
  meta: {
    title: '部门管理'
  },
  children: []
}

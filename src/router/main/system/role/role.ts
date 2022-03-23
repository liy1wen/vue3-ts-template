const role = () => import('@/views/main/system/role/role.vue')
export default {
  path: '/main/system/role',
  name: 'role',
  component: role,
  meta: {
    title: '角色管理'
  },
  children: []
}

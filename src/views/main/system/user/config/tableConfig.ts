export const tableConfig = {
  propList: [
    { prop: 'name', label: '用户名', width: '120px' },
    { prop: 'realname', label: '真实姓名', width: '180px' },
    { prop: 'cellphone', label: '手机号', width: '180px' },
    { prop: 'departmentId', label: '部门', width: '120px' },
    { prop: 'roleId', label: '角色', width: '120px', slotName: 'roleId' },
    { prop: 'enable', label: '状态', width: '120px', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表',
  requestUrl: 'users'
}

export const tableConfig = {
  propList: [
    { prop: 'name', label: '用户名', width: '180px' },
    { prop: 'intro', label: '权限介绍' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', slotName: 'action' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '角色列表',
  requestUrl: 'role'
}

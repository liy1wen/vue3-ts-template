export const tableConfig = {
  propList: [
    { prop: 'name', label: '名称' },
    { prop: 'icon', label: '图标' },
    { prop: 'url', label: '路径' },
    { prop: 'permission', label: '权限' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  title: '菜单列表',
  requestUrl: 'menu',
  showPagination: false
}

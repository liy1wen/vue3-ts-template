export const tableConfig = {
  propList: [
    { prop: 'name', label: '名称', width: '120px' },
    { prop: 'leader', label: '部门领导', width: '120px' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  title: '部门列表',
  requestUrl: 'department',
  showPagination: false
}

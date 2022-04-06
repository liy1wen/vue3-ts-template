export const tableConfig = {
  propList: [
    { prop: 'name', label: '名称', width: '180px' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  title: '商品分类',
  requestUrl: 'category'
}

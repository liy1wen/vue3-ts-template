export const tableConfig = {
  propList: [
    { prop: 'name', label: '名称', width: '180px' },
    { prop: 'imgUrl', label: '图片', width: '180px', slotName: 'imgUrl' },
    { prop: 'oldPrice', label: '原价', width: '120px', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '促销价', width: '120px', slotName: 'newPrice' },
    { prop: 'desc', label: '描述' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', slotName: 'action' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '商品列表',
  requestUrl: 'goods'
}

import { ITable } from '@/components/Table/types'
export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: '名称', width: '180px' },
    { prop: 'imgUrl', label: '图片', width: '180px', slotName: 'imgUrl' },
    { prop: 'oldPrice', label: '原价', width: '120px', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '促销价', width: '120px', slotName: 'newPrice' },
    { prop: 'address', label: '地址', width: '120px' },
    { prop: 'desc', label: '描述' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: true,
  showSelectColumn: false,
  title: '商品列表',
  requestUrl: 'goods'
}

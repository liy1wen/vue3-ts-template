import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: '用户名', width: '180px' },
    { prop: 'intro', label: '权限介绍' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '角色列表',
  requestUrl: 'role'
}

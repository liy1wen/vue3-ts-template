import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: '分类排序' },
    { prop: 'realname', label: '编号' },
    { prop: 'cellphone', label: '国家' },
    { prop: 'departmentId', label: '数量' },
    {
      prop: 'roleId',
      label: '是否显示'
    },
    { prop: 'action', label: 'Tools', slotName: 'action' }
  ],
  showSelectColumn: true,
  title: 'Data List',
  requestUrl: 'users'
}

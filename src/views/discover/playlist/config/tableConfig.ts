import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: '顺序位置', width: '120px' },
    { prop: 'cellphone', label: 'Playlist Title', width: '180px' },
    { prop: 'cellphone', label: 'Playlist Cover', width: '180px' },
    { prop: 'departmentId', label: 'Playlist ID', width: '120px' },
    {
      prop: 'createAt',
      label: '开始时间',
      slotName: 'createAt',
      sortable: true
    },
    {
      prop: 'createAt',
      label: '结束时间',
      slotName: 'createAt',
      sortable: true
    },
    { prop: 'departmentId', label: '国家', width: '120px' },
    { prop: 'action', label: 'Tools', width: '200px', slotName: 'action' }
  ],
  showSelectColumn: true,
  title: 'Data List',
  requestUrl: 'users'
}

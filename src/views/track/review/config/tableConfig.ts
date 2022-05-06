import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: 'Track ID', width: '120px' },
    { prop: 'realname', label: 'Track Title', width: '120px' },
    { prop: 'cellphone', label: 'Album Title', width: '180px' },
    { prop: 'departmentId', label: 'Artwork', width: '180px' },
    {
      prop: 'roleId',
      label: 'Main Artist',
      width: '150px',
      slotName: 'roleId'
    },
    {
      prop: 'roleId',
      label: 'Uploader UID',
      width: '180px',
      slotName: 'roleId'
    },
    { prop: 'roleId', label: 'Country', width: '120px', slotName: 'roleId' },
    {
      prop: 'createAt',
      label: 'Date Created',
      slotName: 'createAt',
      sortable: true
    },
    { prop: 'enable', label: 'Status', width: '120px', slotName: 'enable' },
    { prop: 'action', label: 'Tools', width: '200px', slotName: 'action' }
  ],
  showSelectColumn: true,
  title: '数据列表',
  requestUrl: 'users',
  showExportBtn: true
}

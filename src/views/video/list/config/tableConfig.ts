import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: 'Track ID', width: '120px' },
    { prop: 'realname', label: 'Video ID', width: '180px' },
    { prop: 'cellphone', label: 'Track Title', width: '180px' },
    { prop: 'departmentId', label: 'Main Artist', width: '120px' },
    {
      prop: 'roleId',
      label: 'Video Title',
      width: '120px',
      slotName: 'roleId'
    },
    { prop: 'roleId', label: 'Genre', width: '120px', slotName: 'roleId' },
    { prop: 'roleId', label: 'Uploader', width: '120px', slotName: 'roleId' },
    { prop: 'roleId', label: 'Source', width: '120px', slotName: 'roleId' },
    {
      prop: 'createAt',
      label: 'Video Type',
      slotName: 'createAt',
      sortable: true
    },
    { prop: 'enable', label: 'Status', width: '120px', slotName: 'enable' },
    { prop: 'action', label: 'Tools', width: '200px', slotName: 'action' }
  ],
  showSelectColumn: true,
  title: 'Track List',
  requestUrl: 'users',
  showExportBtn: true
}

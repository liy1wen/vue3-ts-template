import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: 'Clip ID', width: '120px' },
    { prop: 'realname', label: 'Track ID', width: '180px' },
    { prop: 'cellphone', label: 'Clip Title', width: '180px' },
    { prop: 'departmentId', label: 'Track Title', width: '120px' },
    { prop: 'roleId', label: 'Main Artist', width: '120px' },
    { prop: 'createAt', label: 'Genre' },
    { prop: 'updateAt', label: 'VideoID' },
    { prop: 'updateAt', label: 'Uploader' },
    { prop: 'enable', label: 'Status', width: '120px', slotName: 'enable' },
    { prop: 'action', label: 'Tools', width: '200px', slotName: 'action' }
  ],
  showSelectColumn: true,
  title: 'Clip List',
  requestUrl: 'users',
  showExportBtn: true
}

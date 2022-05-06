import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: 'Cover', width: '120px' },
    { prop: 'realname', label: 'Playlist ID', width: '180px' },
    { prop: 'cellphone', label: 'Playlist Title', width: '180px' },
    { prop: 'departmentId', label: 'No. of Tracks' },
    { prop: 'createAt', label: 'Creator' },
    { prop: 'createAt', label: 'Genre' },
    {
      prop: 'updateAt',
      label: 'Date Created',
      slotName: 'updateAt',
      sortable: true
    },
    {
      prop: 'updateAt',
      label: 'Last Update',
      slotName: 'updateAt',
      sortable: true
    },
    { prop: 'enable', label: 'Status', width: '120px', slotName: 'enable' },
    { prop: 'action', label: 'Tools', width: '200px', slotName: 'action' }
  ],
  showSelectColumn: true,
  title: 'Playlists',
  requestUrl: 'users',
  showExportBtn: true
}

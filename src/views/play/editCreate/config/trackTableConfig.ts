import { ITable } from '@/components/Table/types'

export const trackTableConfig: ITable = {
  propList: [
    { prop: 'name', label: 'No.', width: '80px' },
    { prop: 'realname', label: 'Track ID', width: '100px' },
    { prop: 'cellphone', label: 'Track Title', width: '120px' },
    { prop: 'departmentId', label: 'Main Artist' },
    { prop: 'action', label: 'Tools', slotName: 'action', width: '180px' }
  ],
  requestUrl: 'users',
  showPagination: false
}

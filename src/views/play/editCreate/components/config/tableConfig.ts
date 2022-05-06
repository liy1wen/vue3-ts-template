import { ITable } from '@/components/Table/types'

export const tableConfig: ITable = {
  propList: [
    { prop: 'name', label: 'Track ID' },
    { prop: 'realname', label: 'Track title' }
  ],
  showSelectColumn: true,
  requestUrl: 'users'
}

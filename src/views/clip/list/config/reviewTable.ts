import { ITable } from '@/components/Table/types'

export const reviewTableConfig: ITable = {
  propList: [
    { prop: 'time', label: '审核时间', width: '180px' },
    { prop: 'person', label: '审核人员', width: '120px' },
    { prop: 'result', label: '审核结果', width: '120px' },
    { prop: 'reason', label: 'Reason' }
  ],
  requestUrl: 'review'
}

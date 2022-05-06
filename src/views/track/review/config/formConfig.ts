import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'title',
      label: 'Track Title:',
      placeholder: '歌曲名称',
      type: 'input'
    },
    {
      field: 'trackID',
      label: 'Track ID:',
      placeholder: '歌曲ID',
      type: 'input'
    },
    {
      field: 'artist',
      label: 'Artist:',
      placeholder: '歌曲艺人/ID',
      type: 'input'
    },
    {
      field: 'status',
      label: 'Status:',
      type: 'select',
      placeholder: '请选择',
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        }
      ]
    },
    {
      field: 'createdDate',
      label: 'Date Created:',
      type: 'dateRange',
      otherOptions: {
        placeholder: '请选择时间',
        type: 'date'
      }
    },
    {
      field: 'country',
      label: 'Available Country:',
      type: 'input',
      placeholder: '歌曲上架国家'
    },
    {
      field: 'uid',
      label: 'Uploader UID:',
      type: 'input',
      placeholder: '上传者UID'
    }
  ],
  labelWidth: '140px',
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItemStyle: {
    padding: '5px 20px 10px',
    marginBottom: '10px'
  },
  navList: [
    'All Tracks',
    'Uploaded',
    'Scheduled',
    'Disable',
    'Pending',
    'Offline'
  ],
  createPath: '/track/track-editCreate',
  showSearch: true,
  showRefresh: true,
  showCreate: true
}

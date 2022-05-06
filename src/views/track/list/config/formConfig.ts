import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名:',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'trackTitle',
      label: 'Track Title:',
      placeholder: 'Track Title',
      type: 'input'
    },
    {
      field: 'trackID',
      label: 'Track ID:',
      placeholder: 'Track ID',
      type: 'input'
    },
    {
      field: 'artistName',
      label: 'Artist Name:',
      placeholder: 'Main Artist Name',
      type: 'input'
    },
    {
      field: 'artistId',
      label: 'Artist ID:',
      placeholder: 'Main Artist ID',
      type: 'input'
    },
    {
      field: 'status',
      label: 'Source:',
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
      field: 'uploaderId',
      label: 'Uploader:',
      placeholder: 'Uploader ID',
      type: 'input'
    },
    {
      field: 'country',
      label: 'Available Country:',
      type: 'input',
      placeholder: 'Country'
    },
    {
      field: 'genre',
      label: 'Genre:',
      type: 'input',
      placeholder: 'Main Genre'
    },
    {
      field: 'albumId',
      label: 'Album ID:',
      type: 'input',
      placeholder: 'Album ID'
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
      field: 'videoId',
      label: 'Video ID:',
      placeholder: 'Video ID',
      type: 'input'
    },
    {
      field: 'videoTitle',
      label: 'Video Title:',
      placeholder: 'Video Title',
      type: 'input'
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

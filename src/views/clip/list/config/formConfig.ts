import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'clipId',
      label: 'Clip ID:',
      placeholder: 'Clip ID',
      type: 'input'
    },
    {
      field: 'clipTitle',
      label: 'Clip Title:',
      placeholder: 'Clip Title',
      type: 'input'
    },
    {
      field: 'trackID',
      label: 'Track ID:',
      placeholder: 'Track ID',
      type: 'input'
    },
    {
      field: 'trackTitle',
      label: 'Track Title:',
      placeholder: 'Track Title',
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
      field: 'uploaderId',
      label: 'Uploader:',
      placeholder: 'Uploader ID',
      type: 'input'
    },
    {
      field: 'genre',
      label: 'Genre:',
      type: 'input',
      placeholder: 'Main Genre'
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
    padding: '5px @spacing-base 10px',
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
  createPath: '/clip/clip-editCreate',
  showSearch: true,
  showRefresh: true,
  showCreate: true
}

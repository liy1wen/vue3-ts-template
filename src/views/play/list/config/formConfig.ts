import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'playlistId',
      label: 'Playlist ID:',
      placeholder: 'Playlist ID',
      type: 'input'
    },
    {
      field: 'playlistTitle',
      label: 'Playlist Title:',
      placeholder: 'Playlist Title',
      type: 'input'
    },
    {
      field: 'artist',
      label: 'Main Artist:',
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
      field: 'userId',
      label: 'Creator:',
      placeholder: 'User ID',
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
  createPath: '/play/play-editCreate',
  showSearch: true,
  showRefresh: true,
  showCreate: true
}

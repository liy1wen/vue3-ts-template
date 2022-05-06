import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'trackTitle',
      label: 'Track ID/Title:',
      placeholder: 'Track Title',
      type: 'input'
    },
    {
      field: 'Artist',
      label: 'Main Artist:',
      placeholder: 'Main Artist',
      type: 'select',
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
      field: 'type',
      label: 'VideoType:',
      placeholder: 'VideoType',
      type: 'select',
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
      field: 'status',
      label: 'Status:',
      type: 'select',
      placeholder: 'status',
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
      field: 'videoTitle',
      label: 'Video ID/Title:',
      placeholder: 'Track Title',
      type: 'input'
    },
    {
      field: 'source',
      label: 'Source:',
      type: 'select',
      placeholder: 'source',
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
      field: 'genre',
      label: 'Main Genre:',
      placeholder: 'Main Genre',
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
    'All Videos',
    'Uploaded',
    'Scheduled',
    'Disable',
    'Pending',
    'Offline'
  ],
  createPath: '/video/video-editCreate',
  showSearch: true,
  showRefresh: true,
  showCreate: true
}

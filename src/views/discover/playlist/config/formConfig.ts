import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'trackTitle',
      label: '歌单名称:',
      placeholder: 'Track Title',
      type: 'input'
    },
    {
      field: 'trackTitle',
      label: '歌单ID:',
      placeholder: 'Track Title',
      type: 'input'
    },
    {
      field: 'country',
      label: '国家:',
      placeholder: 'Country',
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
    'Discover List',
    'Track',
    'Playlist',
    'Trending',
    'Genre',
    'Clip',
    'Video'
  ],
  createPath: '/discover/discover-editCreate',
  showSearch: true,
  showRefresh: true,
  showCreate: true
}

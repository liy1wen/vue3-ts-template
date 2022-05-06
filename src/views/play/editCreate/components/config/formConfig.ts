import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '歌曲ID:',
      placeholder: '按歌曲ID搜索',
      type: 'input'
    },
    {
      field: 'name',
      label: '歌曲Title:',
      placeholder: '按歌曲Title搜索',
      type: 'input'
    }
  ],
  labelWidth: '80px',
  colLayout: {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItemStyle: {
    padding: '5px 20px 10px',
    marginBottom: '10px'
  },
  showSearch: true
}

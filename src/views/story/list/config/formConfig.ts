import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'title',
      label: '标题',
      placeholder: '请输入标题',
      type: 'input'
    },
    {
      field: 'createAt',
      label: '创建时间',
      type: 'date',
      otherOptions: {
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px',
  colLayout: {
    xl: 5,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItemStyle: {
    padding: '15px 20px',
    marginBottom: '10px'
  }
}

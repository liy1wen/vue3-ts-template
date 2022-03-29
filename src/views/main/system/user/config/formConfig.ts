import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '姓名',
      placeholder: '请输入姓名',
      type: 'input'
    },
    {
      field: 'cellphone',
      label: '手机号',
      placeholder: '请输入手机号',
      type: 'input'
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

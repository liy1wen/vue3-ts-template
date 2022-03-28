import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      lable: '姓名',
      placeholder: '请输入姓名',
      type: 'input'
    },
    {
      field: 'cellphone',
      lable: '手机号',
      placeholder: '请输入手机号',
      type: 'input'
    }
  ],
  labelWidth: '120px',
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItemStyle: {
    padding: '15px 20px',
    marginBottom: '10px'
  },
  size: 'large'
}

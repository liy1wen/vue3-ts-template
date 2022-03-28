import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      lable: '用户名',
      placeholder: '请输入用户名',
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

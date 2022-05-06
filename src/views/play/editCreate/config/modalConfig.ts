import { IForm } from '@/components/Form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: 'File',
      placeholder: '请输入用户名',
      type: 'input',
      rule: [{ required: true, message: 'Please input name', trigger: 'blur' }]
    }
  ],
  labelWidth: '80px',
  colLayout: {
    span: 24
  },
  formItemStyle: {
    padding: '15px 20px',
    marginBottom: '0px'
  }
}

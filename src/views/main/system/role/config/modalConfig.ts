import { IForm } from '@/components/Form/types'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'intro',
      label: '权限介绍',
      placeholder: '请输入权限介绍',
      type: 'input'
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

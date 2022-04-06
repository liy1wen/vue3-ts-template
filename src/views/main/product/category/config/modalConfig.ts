import { IForm } from '@/components/Form/types'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '名称',
      placeholder: '请输入分类名称',
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

import { IForm } from '@/components/Form/types'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '名称',
      placeholder: '请输入名称',
      type: 'input',
      rule: [
        {
          required: true,
          message: 'Please input name',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
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

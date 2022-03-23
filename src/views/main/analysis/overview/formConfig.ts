import { IForm } from '@/components/Form/types'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      lable: '姓名',
      placeholder: '请输入姓名',
      type: 'input',
      rule: { required: true, message: '请输入姓名', trigger: 'blur' }
    },
    {
      field: 'title',
      lable: '标题',
      placeholder: '请输入标题',
      type: 'input'
    },
    {
      field: 'date',
      lable: '创建时间',
      type: 'date',
      otherOptions: {
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        type: 'daterange'
      }
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
    padding: '15px 30px'
  },
  size: 'large'
}

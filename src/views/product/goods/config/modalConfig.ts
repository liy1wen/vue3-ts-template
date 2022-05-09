import { IForm } from '@/components/Form/types'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '名称',
      placeholder: '请输入名称',
      type: 'input'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价',
      placeholder: '请输入原价',
      isHidden: false
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '促销价',
      placeholder: '请输入促销价',
      isHidden: false
    },
    {
      field: 'desc',
      type: 'textarea',
      label: '描述',
      placeholder: '请输入商品描述',
      isHidden: false
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

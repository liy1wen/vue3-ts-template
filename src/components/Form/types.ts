type fromType =
  | 'input'
  | 'password'
  | 'select'
  | 'date'
  | 'switch '
  | 'checkbox'
  | 'radio'
  | 'textarea'

export interface IFormItem {
  field: string
  lable: string
  type: fromType
  placeholder?: string
  rule?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  formItemStyle?: any
  size?: string
}

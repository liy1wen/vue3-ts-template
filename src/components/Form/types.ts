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
  field: String
  lable: string
  type: fromType
  placeholder?: string
  rule?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: String
  colLayout?: any
  formItemStyle?: any
  size?: String
}

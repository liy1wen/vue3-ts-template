// 输入框类型
type fromType =
  | 'input'
  | 'password'
  | 'select'
  | 'date'
  | 'switch '
  | 'checkbox'
  | 'radio'
  | 'textarea'

// form-item属性
export interface IFormItem {
  field: string //数据绑定值
  label: string //label文字
  type: fromType //输入框类型
  placeholder?: string //placeholder提示
  rule?: any //校验
  options?: any[] //选项，如select里面的options
  otherOptions?: any //其它选项
  isHidden?: boolean //是否隐藏
}

// form属性
export interface IForm {
  formItems: IFormItem[] //form-item
  labelWidth?: string //label宽度
  colLayout?: any //布局
  formItemStyle?: any //form-item样式
  size?: string //表单尺寸
  // ruleName?: any //自定义校验名称
}

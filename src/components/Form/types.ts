// 输入框类型
type fromType =
  | 'input'
  | 'password'
  | 'select'
  | 'date'
  | 'switch'
  | 'checkbox'
  | 'radio'
  | 'textarea'
  | 'dateRange'
  | 'customCheckBox'
  | 'uploadFile'
  | 'uploadImg'
  | 'custom'

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
  slotName?: string
  multiple?: boolean //是否可以多选
  defaultValue?: any //默认值
}

// form属性
export interface IForm {
  formItems: IFormItem[] //form-item
  labelWidth?: string //label宽度
  colLayout?: any //布局
  formItemStyle?: any //form-item样式
  size?: string //表单尺寸
  navList?: any[] //顶部nav搜索
  createPath?: string //跳转路径
  addPath?: string
  pageName?: string //跳转页面name
  showCreate?: boolean //显示创建按钮
  showRefresh?: boolean //显示刷新按钮
  showSearch?: boolean //显示搜索按钮
  operationBtns?: Array<string> //其它操作按钮
  requestUrl?: string
}

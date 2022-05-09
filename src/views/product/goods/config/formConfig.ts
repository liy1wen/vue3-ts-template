export const formConfig = {
  formItems: [
    {
      field: 'name',
      label: '名字',
      placeholder: '请输入名字',
      type: 'input'
    },
    {
      field: 'address',
      label: '地址',
      placeholder: '请输入地址',
      type: 'input'
    }
  ],
  labelWidth: '80px',
  colLayout: {
    xl: 5,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItemStyle: {
    padding: '15px @spacing-base',
    marginBottom: '10px'
  }
}

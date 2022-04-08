import { IForm } from '@/components/Form/types'

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input cellphone'))
  } else {
    callback()
  }
}
// const cellphoneRule = [{ validator: validatePass, trigger: 'blur' }]
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
      rule: [{ required: true, message: 'Please input name', trigger: 'blur' }]
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      rule: [
        { required: true, message: 'Please input realname', trigger: 'blur' }
      ]
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入密码',
      isHidden: false,
      rule: [
        { required: true, message: 'Please input password', trigger: 'blur' }
      ]
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码',
      rule: [{ validator: validatePass, trigger: 'blur' }]
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      options: [],
      rule: [
        {
          required: true,
          message: 'Please input departmentId',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: [],
      rule: [
        { required: true, message: 'Please input roleId', trigger: 'change' }
      ]
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
  // ruleName: validatePass
}

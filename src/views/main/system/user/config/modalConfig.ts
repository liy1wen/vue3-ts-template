import { IForm } from '@/components/Form/types'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: []
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

import { IForm } from '@/components/Form/types'
// import { ref } from 'vue'
// import { rules } from '@/utils/validator'
// const validateCellphone = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     callback(new Error('Please input cellphone'))
//   } else if (!rules.Mobile(value)) {
//     callback('Please input correct cellphone')
//   } else {
//     callback()
//   }
// }

export const editCreateConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: 'Playlist Type',
      placeholder: 'Through With Love',
      type: 'select',
      options: [
        { label: 'Uploaded', value: 'Uploaded' },
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Disable', value: 'Disable' },
        { label: 'Pending', value: 'Pending' },
        { label: 'Offline', value: 'Offline' }
      ]
    },
    {
      field: 'realname',
      type: 'input',
      label: 'Playlist Title',
      placeholder: '12345678',
      rule: [
        { required: true, message: 'Please input realname', trigger: 'blur' }
      ]
    },
    {
      field: 'id',
      type: 'input',
      label: 'Playlist ID',
      placeholder: '12345678',
      rule: [
        { required: true, message: 'Please input realname', trigger: 'blur' }
      ]
    },
    {
      field: 'departmentId',
      type: 'select',
      label: 'Status',
      placeholder: 'Status',
      options: [
        { label: 'Uploaded', value: 'Uploaded' },
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Disable', value: 'Disable' },
        { label: 'Pending', value: 'Pending' },
        { label: 'Offline', value: 'Offline' }
      ],
      rule: [
        {
          required: true,
          message: 'Please input Status',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'realname',
      type: 'input',
      label: 'Reason',
      placeholder: 'Please input Reason'
    },
    {
      field: 'creator',
      type: 'input',
      label: 'Creator UID&Name',
      placeholder: '12345678',
      rule: [
        { required: true, message: 'Please input realname', trigger: 'blur' }
      ]
    },
    {
      field: 'Genre',
      type: 'select',
      label: 'Main Genre',
      placeholder: '26 Blues',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: 'Sub Genre',
      placeholder: '2601  Blues-Rock',
      options: []
    },
    {
      field: 'type',
      type: 'radio',
      label: 'Parental Warning Type',
      options: [
        { label: 'Clean', value: '1' },
        { label: 'Explicit', value: '2' }
      ]
    },
    {
      field: 'trackList',
      type: 'custom',
      label: 'Track List',
      slotName: 'trackList'
    },
    {
      field: 'description',
      type: 'textarea',
      label: 'Description'
    },
    {
      field: 'img',
      type: 'uploadImg',
      label: 'Playlist Cover',
      otherOptions: {
        type: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
        size: 50 / 1024,
        tip: 'jpg/png/gif/jpeg格式文件,文件不能超过50KB'
      }
    },
    {
      field: 'checkbox',
      type: 'customCheckBox',
      label: 'Tags',
      options: [
        {
          label: 'Genre',
          itemOptions: [
            { label: 'checkbox1', value: '1' },
            { label: 'checkbox2', value: '2' },
            { label: 'checkbox3', value: '3' },
            { label: 'checkbox4', value: '4' }
          ]
        },
        {
          label: 'Mood',
          itemOptions: [
            { label: 'checkbox5', value: '5' },
            { label: 'checkbox6', value: '6' },
            { label: 'checkbox7', value: '7' }
          ]
        }
      ]
    },
    {
      field: 'Country',
      type: 'checkbox',
      label: 'Available Country',
      options: [
        { label: 'Pakistan', value: '1' },
        { label: 'Bangladesh', value: '2' },
        { label: 'Philippines', value: '3' }
      ],
      otherOptions: { showAll: true }
    },
    {
      field: 'date',
      type: 'dateRange',
      label: 'Schedule date',
      otherOptions: {
        type: 'date',
        placeholder: '请选择日期'
      }
    }
  ],
  labelWidth: '180px',
  colLayout: {
    span: 24
  },
  formItemStyle: {
    padding: '15px 20px',
    marginBottom: '0px'
  }
}

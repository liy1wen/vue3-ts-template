import { IForm, IOptions } from '@/components/Form/types'
import { ref } from 'vue'
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
const loading = ref(false)
const artOptions = ref<IOptions[]>([{ label: 'Uploaded', value: '1' }])

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    console.log(query)
    setTimeout(() => {
      loading.value = false
      artOptions.value = [
        { label: 'Uploaded', value: '1' },
        { label: 'Scheduled', value: '2' }
      ]
      console.log(artOptions.value)
    }, 200)
  } else {
    artOptions.value = []
  }
}
export const editCreateConfig: IForm = {
  formItems: [
    {
      field: 'title',
      label: 'Track Title',
      placeholder: 'Through With Love',
      type: 'input',
      rule: [{ required: true, message: 'Please input name', trigger: 'blur' }]
    },
    {
      field: 'id',
      type: 'input',
      label: 'Track ID',
      placeholder: '12345678',
      rule: [
        { required: true, message: 'Please input realname', trigger: 'blur' }
      ]
    },
    {
      field: 'status',
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
      field: 'reason',
      type: 'input',
      label: 'Reason',
      placeholder: 'Please input Reason'
    },
    {
      field: 'source',
      type: 'select',
      label: 'Source',
      placeholder: 'Source',
      options: [
        { label: 'Uploaded', value: 'Uploaded' },
        { label: 'Scheduled', value: 'Scheduled' }
      ]
    },
    {
      field: 'genre',
      type: 'select',
      label: 'Main Genre',
      placeholder: '26 Blues',
      options: [
        { label: 'Uploaded', value: 'Uploaded' },
        { label: 'Scheduled', value: 'Scheduled' }
      ]
    },
    {
      field: 'subGenre',
      type: 'select',
      label: 'Sub Genre',
      placeholder: '2601  Blues-Rock',
      options: [
        { label: 'Uploaded', value: 'Uploaded' },
        { label: 'Scheduled', value: 'Scheduled' }
      ]
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
      field: 'artist',
      type: 'select',
      label: 'Main Artist',
      placeholder: 'Please input Main Artist',
      options: artOptions.value,
      otherOptions: {
        filterable: true,
        remote: true,
        remoteMethod
      },
      rule: [
        { required: true, message: 'Please input Artist', trigger: 'blur' }
      ]
    },
    {
      field: 'featuredArt',
      type: 'input',
      label: 'Featured Artist',
      placeholder: 'Please input Featured Artist'
    },
    {
      field: 'uploader',
      type: 'input',
      label: 'Uploader ID',
      placeholder: 'Please input Uploader IDt',
      rule: [
        { required: true, message: 'Please input Uploader ID', trigger: 'blur' }
      ]
    },
    {
      field: 'file',
      type: 'uploadFile',
      label: 'Audio File',
      rule: [{ required: true, message: 'Please input File', trigger: 'blur' }],
      otherOptions: {
        type: ['AIF', 'AIFF', 'FLAC', 'MP3', 'M4A', 'OGG', 'WAV'],
        size: 250,
        tip: '音乐源文件不能超过250MB。AIF, AIFF, FLAC, MP3, M4A, OGG Or WAV, Track File Size: up to 250 MB'
      }
    },
    {
      field: 'img',
      type: 'uploadImg',
      label: 'Track Artwork',
      rule: [
        { required: true, message: 'Please input Uploader ID', trigger: 'blur' }
      ],
      otherOptions: {
        type: ['image/png', 'image/jpeg', 'image/jpg'],
        size: 1,
        tip: 'jpg/png files with a size less than 500KB.'
      }
    },
    {
      field: 'isrc',
      type: 'input',
      label: 'ISRC',
      placeholder: 'Please input ISRC'
    },
    {
      field: 'genreCheckbox',
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
      field: 'country',
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

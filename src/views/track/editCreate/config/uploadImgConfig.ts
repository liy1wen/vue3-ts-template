import { IUploadImg } from '@/components/UploadImg/type'
export const uploadImgConfig: IUploadImg = {
  label: 'Track Artwork',
  type: ['image/png', 'image/jpeg', 'image/jpg'],
  size: 1,
  tip: 'jpg/png files with a size less than 500KB.',
  labelWidth: '180px',
  rule: [{ required: true, message: 'Please upload img', trigger: 'blur' }]
}

export type imgType = 'image/png' | 'image/jpeg' | 'image/jpg'
export interface IUploadImg {
  label?: string
  type?: imgType[]
  size?: number
  tip?: string
  labelWidth?: string
  rule?: any[]
}

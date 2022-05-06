import { IUploadFile } from '@/components/UploadFile/type'
export const uploadFileConfig: IUploadFile = {
  label: 'Track Artwork',
  type: ['AIF', 'AIFF', 'FLAC', 'MP3', 'M4A', 'OGG', 'WAV'],
  size: 250,
  tip: '音乐源文件不能超过250MB。AIF, AIFF, FLAC, MP3, M4A, OGG Or WAV, Track File Size: up to 250 MB',
  labelWidth: '180px',
  rule: []
}

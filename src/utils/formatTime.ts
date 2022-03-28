import dayjs from 'dayjs'
const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatTime(time: string, format: string = DEFAULT_FORMAT) {
  return dayjs(time).format(format)
}
export function thousandNum(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

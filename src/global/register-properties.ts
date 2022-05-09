import { App } from 'vue'
import { formatTime, thousandNum } from '@/utils/formatTime'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    formatTime(time: string) {
      return formatTime(time)
    },
    formatMoney(money: number) {
      return thousandNum(money)
    }
  }
}

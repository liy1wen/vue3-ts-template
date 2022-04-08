import { App } from 'vue'
import * as Icons from '@element-plus/icons-vue'

export default function (app: App): void {
  for (const icon in Icons) {
    app.component(icon, Icons[icon])
  }
}

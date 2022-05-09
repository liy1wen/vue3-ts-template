import { App } from 'vue'
import components from '@/components'
export default function registerComponents(app: App) {
  for (const component in components) {
    app.component(component, components[component])
  }
}

import { App } from 'vue'
import registerIcons from './register-icons'
import registerProperties from './register-properties'
import registerComponents from './register-components'
export function globalRegister(app: App): void {
  app.use(registerIcons)
  app.use(registerProperties)
  app.use(registerComponents)
}

import { IBreadCrumbs } from '@/components/NavHeader/types'
export function generateBreadCrumbs(userMenus: any[], path: string): any {
  const breadCrumbs: IBreadCrumbs[] = []
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = generateBreadCrumbs(menu.children ?? [], path)
      if (findMenu) {
        breadCrumbs.push({ name: menu.name, path: menu.url })
        breadCrumbs.push({ name: findMenu.name, path: findMenu.url })
        return breadCrumbs
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}

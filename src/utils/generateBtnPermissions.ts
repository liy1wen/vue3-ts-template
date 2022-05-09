export function generateBtnPermissions(userMenus: any[]) {
  const permissions: any[] = []
  const _recursiveMenu = (menus: any[]) => {
    for (const item of menus) {
      if (item.type === 1 || item.type === 2) {
        if (item.children) {
          _recursiveMenu(item.children)
        }
      } else {
        permissions.push(item.permission)
      }
    }
  }
  _recursiveMenu(userMenus)
  return permissions
}

export function generateLeafKeys(menuList: any[]) {
  const LeafKeys: number[] = []
  const _recursiveMenu = (menuList: any[]) => {
    for (const item of menuList) {
      if (item.children && item.children.length) {
        _recursiveMenu(item.children)
      } else {
        LeafKeys.push(item.id)
      }
    }
  }
  _recursiveMenu(menuList)
  return LeafKeys
}

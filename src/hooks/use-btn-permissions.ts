import { useStore } from 'vuex'
export const useBtnPermissions = (url: string, permissionType: string) => {
  const store = useStore()
  const btnPermissions = store.state.userModule.btnPermissions
  const currentBtnPermission = `system:${url}:${permissionType}`
  return btnPermissions.includes(currentBtnPermission)
}

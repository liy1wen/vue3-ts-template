import { useStore } from 'vuex'
export const useBtnPermissions = (url: string, permissionType: string) => {
  const store = useStore()
  const btnPermissions = store.state.userModule.btnPermissions
  const currentBtnPermission = `system:${url}:${permissionType}`
  console.log(currentBtnPermission)
  return btnPermissions.includes(currentBtnPermission)
}

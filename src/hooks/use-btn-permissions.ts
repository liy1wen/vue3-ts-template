import { userStore } from '@/store/user'
export const useBtnPermissions = (url: string, permissionType: string) => {
  const user = userStore()
  const btnPermissions = user.btnPermissions
  const currentBtnPermission = `system:${url}:${permissionType}`
  return btnPermissions.includes(currentBtnPermission)
}

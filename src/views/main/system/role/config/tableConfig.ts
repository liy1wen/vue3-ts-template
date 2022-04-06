/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-04-02 11:56:43
 * @LastEditors: Seven
 * @LastEditTime: 2022-04-06 20:28:15
 */
export const tableConfig = {
  propList: [
    { prop: 'name', label: '用户名', width: '180px' },
    { prop: 'intro', label: '权限介绍' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '角色列表',
  requestUrl: 'role'
}

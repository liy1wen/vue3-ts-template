export const tableConfig = {
  propList: [
    { prop: 'title', label: '标题', width: '180px' },
    { prop: 'content', label: '内容', slotName: 'content' },
    { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
    { prop: 'action', label: '操作', width: '200px', slotName: 'action' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  title: '故事列表',
  requestUrl: 'story'
}

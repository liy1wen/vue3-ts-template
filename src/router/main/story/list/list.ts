const list = () => import('@/views/main/story/list/list.vue')
export default {
  path: '/main/story/list',
  name: 'list',
  component: list,
  meta: {
    title: '故事列表'
  },
  children: []
}

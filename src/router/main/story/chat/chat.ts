const chat = () => import('@/views/main/story/chat/chat.vue')
export default {
  path: '/main/story/chat',
  name: 'chat',
  component: chat,
  meta: {
    title: '你的故事'
  },
  children: []
}

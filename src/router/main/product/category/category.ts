const category = () => import('@/views/main/product/category/category.vue')
export default {
  path: '/main/product/category',
  name: 'category',
  component: category,
  meta: {
    title: '商品类别'
  },
  children: []
}

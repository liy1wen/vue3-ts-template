module.exports = {
  // plugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'element-plus',
  //       customStyleName: (name) => {
  //         return `element-plus/theme-chalk/${name}.css`
  //       }
  //     }
  //   ]
  // ],
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator', // 双问号
    '@babel/plugin-proposal-optional-chaining' // 可选链
  ]
}

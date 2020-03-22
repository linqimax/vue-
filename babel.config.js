module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

//遇见core-js 导致的编译错误， 参考这里core-js module error
module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ],
      useBuiltIns: "entry"
    }]
  ]
}
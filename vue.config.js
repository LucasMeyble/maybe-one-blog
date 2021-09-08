module.exports = {
  publicPath: '/maybe-one-blog/',
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Maybe One Blog";
              return args;
          })
  }
}
const webpack = require('webpack')

module.exports = config => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.GTM_ID': JSON.stringify(process.env.GTM_ID)
    })
  )
  return config
}

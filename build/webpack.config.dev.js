const baseConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const devConfig = {
  mode: 'development',
  devServer: {
    hot: true,
    compress: true,
    port: 9000,
    // open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({})
  ]
}
module.exports = merge(baseConfig, devConfig)
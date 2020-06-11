const baseConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const prodConfig = {
  mode: 'production'
}
module.exports = merge(baseConfig, prodConfig)
// const fs = require('fs');
const merge = require('webpack-merge');

const common = require('../webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    host: '0.0.0.0',
    port: 4000,
    hot: true,
  },
  stats: 'minimal',
});

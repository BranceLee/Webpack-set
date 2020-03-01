const fs = require('fs');
const merge = require('webpack-merge');

const common = require('../webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    https: {
      key: fs.readFileSync('/Users/lee/server.key'),
      cert: fs.readFileSync('/Users/lee/server.crt'),
      ca: fs.readFileSync('/Users/lee/rootCA.pem')
    }
  }
});

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    vendor: ['@babel/polyfill', 'react', 'react-dom']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]'
  },

  plugins: [
    new CleanWebpackPlugin(),

    new webpack.DllPlugin({
      // manifest.json 文件的路径
      path: path.join(__dirname, './dist', '[name]-manifest.json'),

      // Match the output library path
      name: '[name]'
    })
  ]
};

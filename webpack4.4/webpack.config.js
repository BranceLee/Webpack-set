const path = require('path');
const fs = require('fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixerPlugin = require('autoprefixer');

const manifest = require('./dist/vendor-manifest.json');

module.exports = {
  entry: { main: ['./src/index.js'] },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },

  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    https: {
      key: fs.readFileSync('/Users/lee/server.key'),
      cert: fs.readFileSync('/Users/lee/server.crt'),
      ca: fs.readFileSync('/Users/lee/rootCA.pem')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixerPlugin]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixerPlugin]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      // chunks: ['vendor', 'main'],
      vendor: './dist/' + manifest.name + '.js',
      minify: {
        removeComments: true,
        collapseWhitespace: true //删除空白符与换行符
      }
    }),
    new WebpackMd5Hash()
  ]
};

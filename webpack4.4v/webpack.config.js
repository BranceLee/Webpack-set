const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixerPlugin = require('autoprefixer');

module.exports = {
  entry: { main: ['@babel/polyfill', './src/index.js'] },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
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

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          chunks: 'all',
          filename: '[name]/bundle.[hash].js',
          priority: 10 // Set the top priority to compile.
        },
        common: {
          name: 'common',
          filename: '[name]/bundle.[hash].js',
          chunks: 'all',
          minSize: 1,
          priority: 0
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'common', 'main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true //删除空白符与换行符
      }
    }),
    new WebpackMd5Hash()
  ]
};

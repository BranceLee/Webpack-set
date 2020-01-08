const path = require('path')
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPulgin = require('html-webpack-plugin');
const WebpackMd5Hash = require("webpack-md5-hash");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={
    entry:{
        main:'./src/index.js',
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[chunkhash].js',
    },
    target:'node',
    externals:[nodeExternals()],

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ["env"],
                    }
                }
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPulgin({
            inject:false,
            hash:true,
            template:'./src/index.html',
            filename:'index.html'
        }),
        new WebpackMd5Hash()
    ],
}
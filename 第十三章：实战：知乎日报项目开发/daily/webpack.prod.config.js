const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.js');
const TerserPlugin = require('terser-webpack-plugin');

// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        // 将入口文件重命名为带有 20 位 hash 值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 提取 css，并重命名为带有 20 位 hash 值的唯一文件
            filename: '[name].[hash].css'
        }),
        // 定义当前 node 环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 提取模板，并保存入口 html 文件
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true, // 开启缓存
                parallel: true, // 支持多进程
                sourceMap: true, 
            }),
        ]
    }
});
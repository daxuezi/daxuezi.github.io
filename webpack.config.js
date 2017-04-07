const fs = require('fs');
const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;
const envConfig = require('./webpack.'+ env +'.config');

const extractStyle = new ExtractTextPlugin('[name].[contenthash:8].css');

// 文章数据
const articles = {};
fs.readdirSync('./db/articles').forEach(filepath => {
  const article = require('./db/articles/' + filepath);
  articles[article.id] = article;
});

const bundleFileName = env === 'production' ? '[name].[chunkhash].js' : '[name].js';

module.exports = Object.assign(envConfig, {
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss', '.css']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: extractStyle.extract({
            fallback: "style-loader",
            allChunks: true,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  camelCase: true,
                  sourceMap: true,
                  minimize: env !== 'development',
                  localIdentName: '[local]--[hash:base64:8]'
                }
              }, 
              {
                loader: 'sass-loader'
              }
            ]
        })
      },
      {
        test: /\.(jpe?g|png|git)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:5].[ext]'
          }
        }]
      }
    ]
  },

  plugins: envConfig.plugins.concat([
    extractStyle,
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      __articles__: JSON.stringify(articles),
      __publicPath__: JSON.stringify('/')
    })
  ])
});
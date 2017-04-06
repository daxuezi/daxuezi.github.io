const fs = require('fs');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const developmentConfig = require('./webpack.development.config');
const productionConfig = require('./webpack.production.config');

const env = process.env.NODE_ENV;
const envConfig = env === "development" ? developmentConfig : productionConfig;
const extractStyle = new ExtractTextPlugin({
    filename: "[name].[contenthash:8].css",
    disable: env === "development2"
});


// 文章数据
const articles = {};
fs.readdirSync('./db/articles').forEach(filepath => {
  const article = require('./db/articles/' + filepath);
  articles[article.id] = article;
});

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
            // use style-loader in development
            fallback: "style-loader",
            // allChunks: true,
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

    new HtmlWebpackPlugin({
      template: './src/index.tmpl.html',
      filename: '../index.html'
    }),

    new webpack.DefinePlugin({
      __articles__: JSON.stringify(articles)
    })
  ])
});
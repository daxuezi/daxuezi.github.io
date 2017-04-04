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

const baseConfig = {
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader', ],
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
      }
    ]
  },

  plugins: [
    extractStyle,

    new HtmlWebpackPlugin({
      template: './src/index.tmpl.html'
    })
  ]
};

console.log();

module.exports = Object.assign({}, baseConfig, envConfig, {
  plugins: baseConfig.plugins.concat(envConfig.plugins)
});
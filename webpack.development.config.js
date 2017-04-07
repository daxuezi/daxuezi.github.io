const { resolve } = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.dev'
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },

  devtool: 'eval',

  devServer: {
    // enable HMR on the server
    hot: true,
    
    // serve index.html for 404
    historyApiFallback: true,

    // Tell the server where to serve content from. 
    contentBase: [resolve(__dirname, 'public'), resolve(__dirname, 'assets')],

    // The bundled files will be available in the browser under this path.
    publicPath: '/'
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.tmpl.html',
      filename: 'index.html'
    }),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
};

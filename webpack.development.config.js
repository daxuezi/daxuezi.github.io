const { resolve } = require('path');

const webpack = require('webpack');

const outputPath = resolve(__dirname, 'dist');
const publicPath = '/';


module.exports = {
  entry: {
    main: [
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
    ]
  },

  output: {
    filename: '[name].js',
    path: outputPath,
    publicPath: publicPath
  },

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: [outputPath, resolve(__dirname, "assets")],
    // match the output path

    publicPath: publicPath
    // match the output `publicPath`
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
};

const { resolve } = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './src/index.prod'
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'public'),
    publicPath: '/public/'
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'lib',
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
           return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),

    // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    new webpack.optimize.CommonsChunkPlugin({ 
      name: 'manifest' 
    }),
    
    new webpack.optimize.UglifyJsPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.tmpl.html',
      filename: '../index.html'
    })
  ]
};

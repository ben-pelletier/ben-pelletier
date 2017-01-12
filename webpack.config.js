const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'assets/app.[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader?name=assets/[name].[hash].[ext]"
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader?minimize!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?minimize!sass-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!')
      },
      {
        test: /\.pug$/,
        loaders: ['html-loader', 'pug-html-loader?exports=false']
      },
      {
         test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
         loader: "url-loader?limit=10000&mimetype=application/font-woff&name=assets/[name].[hash].[ext]"
       },
       {
         test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
         loader: "url-loader?limit=10000&mimetype=application/font-woff&name=assets/[name].[hash].[ext]"
       },
       {
         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
         loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=assets/[name].[hash].[ext]"
       },
       {
         test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
         loader: "file-loader?name=./assets/[name].[hash].[ext]"
       },
       {
         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
         loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=assets/[name].[hash].[ext]"
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/template/index.pug'
    }),
    new ExtractTextPlugin('assets/styles.[hash].css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

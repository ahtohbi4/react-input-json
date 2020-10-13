const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  context: path.resolve(__dirname, 'example'),

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    overlay: true,
    port: process.env.APP_PORT,
  },

  entry: 'index.tsx',

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],

  stats: 'errors-warnings',
});

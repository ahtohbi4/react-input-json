const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: false,

  entry: path.join(__dirname, 'src/index.ts'),

  externals: ['react', 'react-dom'],

  mode: 'production',

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },

  plugins: [new CleanWebpackPlugin({ verbose: true })],
});

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'example'),

  devtool: 'cheap-module-source-map',

  entry: 'index.tsx',

  output: {
    filename: '[name]-[hash].js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', '.'],
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  devServer: {
    // contentBase: path.join(__dirname, 'example'),
    historyApiFallback: true,
    hot: true,
    overlay: true,
    port: process.env.APP_PORT,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

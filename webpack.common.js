const loaderUtils = require('loader-utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  output: {
    publicPath: '/',
    filename: 'index.js?hash=[hash]',
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', '.'],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: 'rij-[folder]-[name]__[local]',
              },
            },
          },
        ],
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css?hash=[contenthash]',
    }),
  ],
};

const shared = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { url: false } },
          { loader: 'less-loader', options: { url: false } },
        ],
      },
    ],
  },
};

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  devtool: 'source-map',

  entry: {
    app: ['App.jsx'],
  },

  output: {
    path: `${__dirname}/build/`,
    filename: '[name]-[hash].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'example/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'production'",
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
    }),
  ],

  module: shared.module,

  resolve: {
    extensions: ['.js', '.jsx' ],
    modules: [
      path.resolve(__dirname, 'example'),
      'node_modules',
    ],
  },
};


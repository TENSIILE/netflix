const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV === 'development';

const production = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (!NODE_ENV) {
    config.minimizer = [new TerserWebpackPlugin()];
  }

  return config;
};

const loaders = () => {
  const loaders = ['babel-loader'];

  if (NODE_ENV) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  target: 'web',
  devtool: NODE_ENV && 'eval-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg', '.gif', '.css', '.scss', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: production(),
  devServer: {
    port: '3000',
    hot: NODE_ENV,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/src'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: loaders(),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
      minify: {
        collapseWhitespace: !NODE_ENV,
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};

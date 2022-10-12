const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'node',
  // devtool: isDevelopment ? 'source-map' : false,
  devtool: 'source-map',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry: {
    'server.js': path.resolve(__dirname, 'index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // ignore: ['src/frontend'],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
  },
  plugins: [new CleanWebpackPlugin()],
};

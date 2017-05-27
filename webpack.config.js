const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');

module.exports = {
  entry: {
    split: './src/split.js',
    notSplit: './src/not-split.js',
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name]/build.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]/build.css',
      allChunks: true,
    }),
    new PurifyCSSPlugin({
      moduleExtensions: ['.js'],
      paths: glob.sync([
        path.resolve('./index.js'),
      ]),
      verbose: true,
    }),
  ],
};

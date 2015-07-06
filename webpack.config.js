var webpack = require('webpack');

var SOURCE_FOLDER = __dirname + '/src/';
var DIST_FOLDER = __dirname + '/dist/';
var BUNDLE_NAME = 'bundle.js';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    SOURCE_FOLDER + 'index.js'
  ],
  output: {
    path: DIST_FOLDER + 'assets/',
    filename: BUNDLE_NAME,
    publicPath : '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass?sourceMap"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

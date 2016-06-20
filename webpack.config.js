require('es6-shim');
var webpack = require('webpack');

module.exports = {
  devtool: "cheap-source-map",
  entry: {
    app: './app/main.ts',
    vendor: './app/vendor.ts'
  },
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': '"development"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js'
    }),
    new webpack.optimize.DedupePlugin()
  ]
};
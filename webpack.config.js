var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: './dist/',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

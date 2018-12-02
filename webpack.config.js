const path = require('path')

const config = {
  entry: {
    'content-scripts.js': path.resolve(__dirname, 'src', 'content-scripts', 'index.js')
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ }
    ]
  },

  devtool: process.argv.includes('-p') ? false : 'inline-source-map'
}

module.exports = config

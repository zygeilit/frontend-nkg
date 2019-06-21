const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge({
  'target': 'node',
  'mode': 'development',
  'entry': './src/client/index.js',
  'output': {
    'filename': 'index.js',
    'path': path.resolve(__dirname, '..', 'public')
  },
  'module': {
    'rules': [{
      'test': /\.css?$/,
      'use': ['style-loader', {
        'loader': 'css-loader',
        'options': {
          'importLoaders': 1,
          'modules': true,
          'localIdentName': '[name]_[local]_[hash:base64:5]'
        }
      }]
    }]
  },
  'plugins': [
    new webpack.DefinePlugin({
      '__isBrowser__': "false"
    })
  ]
}, baseConfig)

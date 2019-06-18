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
  }
}, baseConfig)

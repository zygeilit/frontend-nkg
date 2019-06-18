const path = require('path')
const webpackMerge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge({
  'target': 'node',
  'mode': 'development',
  'entry': './src/server/index.js',
  'output': {
    'filename': 'www.js',
    'path': path.resolve(__dirname, '..', 'build')
  },
  'externals': [
    nodeExternals()
  ]
}, baseConfig)

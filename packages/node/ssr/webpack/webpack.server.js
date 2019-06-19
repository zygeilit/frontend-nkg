const path = require('path')
const webpackMerge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
  ],
  'module': {
    'rules': [{
      'test': /\.css?$/,
      'use': ['isomorphic-style-loader', {
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
    new ExtractTextPlugin('style.css')
  ]
}, baseConfig)

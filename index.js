/**
 * index.js - babel-preset-mjs-babili
 * 
 * Licensed under MIT.
 * Copyright (C) 2017 Karim Alibhai.
 */

require('babel-register')

module.exports = {
  presets: [
    'babili'
  ],

  plugins: [
    require('./lib/plugin.js').default
  ]
}
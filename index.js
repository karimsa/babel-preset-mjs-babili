/**
 * index.js - babel-preset-mjs-babili
 * 
 * Licensed under MIT.
 * Copyright (C) 2017 Karim Alibhai.
 */

require('babel-register')({
  presets: [
    ['env']
  ]
})

module.exports = {
  plugins: [
    require('./lib/plugin.js').default
  ]
}
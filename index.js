/**
 * index.js - babel-preset-mjs-babili
 * 
 * Licensed under MIT.
 * Copyright (C) 2017 Karim Alibhai.
 */

module.exports = {
  plugins: [
    require('./lib/plugin.js').default
  ]
}
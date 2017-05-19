/**
 * gulp.js - babel-preset-mjs-babili
 * 
 * Licensed under MIT license.
 * Copyright (C) 2017 Karim Alibhai.
 */

const babel = require('gulp-babel')
    , babili = require('gulp-babili')
    , extend = require('deep-assign')
    , mjs = require('./')

module.exports = (options = {}) => {
  // set defaults
  options = extend(options, {
    mangle: {
      eval: true
    }
  })

  // create pipe with babili
  return babili(options)
}

module.exports.mjs = () => babel({
  minified: true,
  babelrc: false,

  presets: [
    require('./')
  ]
})
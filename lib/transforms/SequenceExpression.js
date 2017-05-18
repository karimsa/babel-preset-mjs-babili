/**
 * lib/transforms/NewExpression.js - babel-preset-mjs
 * 
 * Licensed under MIT license.
 * Copyright (C) 2017 Karim Alibhai.
 */

const template = require('babel-template')(`[ EXPRESSIONS ].pop()`)

export function enter(path, _, t) {
  // fix sequence expressions in by turning them
  // into an array of expression results and popping
  // the last one off

  path.replaceWith(
    template({
      EXPRESSIONS: path.node.expressions
    })
  )
}
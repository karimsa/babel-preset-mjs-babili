'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exit = exit;
/**
 * lib/transforms/NewExpression.js - babel-preset-mjs
 * 
 * Licensed under MIT license.
 * Copyright (C) 2017 Karim Alibhai.
 */

var template = require('babel-template')('[ EXPRESSIONS ].pop()');

function exit(path, _, t) {
  // fix sequence expressions in by turning them
  // into an array of expression results and popping
  // the last one off

  path.replaceWith(template({
    EXPRESSIONS: path.node.expressions
  }));
}
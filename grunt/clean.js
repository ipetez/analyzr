'use strict';

module.exports = function (path) {
  return {
    dist: ['dist'],
    bundles: ['src/bundles'],
    docs: [
      'docs/assets',
      'docs/bundles'
    ]
  };
};
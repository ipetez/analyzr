'use strict';

module.exports = function (path) {
  return {
    options: {
      singleQuotes: true,
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'dist/bundles/',
        src: ['*.js', '!*.min.js'],
        dest: 'dist/bundles/'
      }]
    },
    docs: {
      files: [{
        expand: true,
        cwd: 'docs/bundles/',
        src: ['*.js', '!*.min.js'],
        dest: 'docs/bundles/'
      }]
    }
  };
};
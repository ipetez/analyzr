'use strict';

module.exports = function (path) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: 'dist/bundles/',
        src: '*.js',
        dest: 'dist/bundles/'
      }]
    },
    docs: {
      files: [{
        expand: true,
        cwd: 'docs/bundles/',
        src: '*.js',
        dest: 'docs/bundles/'
      }]
    }
  };
};
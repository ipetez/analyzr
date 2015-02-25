'use strict';

module.exports = function (path) {
  return {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: 'dist/',
        src: ['**/*.html'],
        dest: 'dist/'
      }]
    }
  };
};
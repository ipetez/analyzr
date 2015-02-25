'use strict';

module.exports = function (path) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: 'dist/assets/styles/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/assets/styles/'
      }]
    },
    docs: {
      files: [{
        expand: true,
        cwd: 'docs/assets/styles/',
        src: ['*.css', '!*.min.css'],
        dest: 'docs/assets/styles/'
      }]
    }
  };
};
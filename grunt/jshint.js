'use strict';

module.exports = function (path) {
  return {
    src: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: [
        'gruntfile.js',
        'grunt/*.js',
        'src/modules/**/*.js',
        'src/plugins/**/*.js'
      ]
    }
  };
};
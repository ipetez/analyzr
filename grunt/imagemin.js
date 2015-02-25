'use strict';

module.exports = function (path) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: 'dist/assets/images/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'dist/assets/images/'
      }]
    }
  };
};
'use strict';

module.exports = function (path) {
  return {
    js: {
      files: [
        'gruntfile.js',
        'grunt/*.js',
        'src/modules/**/*.js',
        'src/components/**/*.js'
      ],
      tasks: ['jshint', 'clean:bundles', 'webpack:src'],
      options: {
        livereload: true
      }
    },
    less: {
      files: [
        'src/assets/styles/less/**/*.less',
        'src/components/**/*.less',
      ],
      tasks: ['less', 'autoprefixer', 'clean:bundles', 'webpack:src'],
      options: {
        livereload: true
      }
    },
    livereload: {
      options: {
        livereload: true
      },
      files: [
        'src/**/*.html',
        'src/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  };
};
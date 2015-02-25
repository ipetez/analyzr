'use strict';

module.exports = function (path) {
  return {
    app: {
      files: {
        'src/assets/styles/layout.css': 'src/assets/styles/less/layout.less',
        'src/assets/styles/component.css': 'src/assets/styles/less/component.less'
      }
    },

    libs: {
      expand: true,
      src: 'src/components/**/*.less',
      ext: '.css'
    }
  };
};
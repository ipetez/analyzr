'use strict';

module.exports = function (path) {
  return {
    dist: {
      expand: true,
      cwd: 'src/',
      src: [
        '**',
        '!**/psd/**',
        '!**/*.psd',
        '!**/*.less',
        '!**/less/**',
        '!components/**',

        // since our modules javascript file is bundle into appropriate file
        // inside bundles folder, we only need the modules html and data file
        // inside view folder
        '!modules/**/configs/**',
        '!modules/**/controllers/**',
        '!modules/**/directives/**',
        '!modules/**/filters/**',
        '!modules/**/services/**',
        '!modules/**/*.js'
      ],
      dest: 'dist/'
    },
    docs: {
      expand: true,
      cwd: 'src/',
      src: [
        'assets/fonts/**',
        'assets/styles/**/*.css'
      ],
      dest: 'docs/'
    }
  };
};
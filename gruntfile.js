'use strict';

var path = require('path');
var argv = require('yargs').argv;
var webpack = require('webpack');

module.exports = function (grunt) {
  /** Load all grunt related task */
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    /** JShint task */
    jshint: require('./grunt/jshint')(path),
    
    /** Less task */
    less: require('./grunt/less')(path),

    /** Autoprefixer task */
    autoprefixer: require('./grunt/autoprefixer')(path),

    /** Webpack task */
    webpack: require('./grunt/webpack')(path, webpack),

    /** Connect task */
    connect: require('./grunt/connect')(path),

    /** Watch task */
    watch: require('./grunt/watch')(path),

    /** Clean task */
    clean: require('./grunt/clean')(path),

    /** Copy task */
    copy: require('./grunt/copy')(path),

    /** Cssmin task */
    cssmin: require('./grunt/cssmin')(path),

    /** ngAnnotate task */
    ngAnnotate: require('./grunt/ngannotate')(path),

    /** uglify task */
    uglify: require('./grunt/uglify')(path),

    /** htmlmin task */
    htmlmin: require('./grunt/htmlmin')(path),

    /** imagemin task */
    imagemin: require('./grunt/imagemin')(path)
  });

  /**
   * serve task
   * @usage: grunt serve
   */
  grunt.registerTask('serve', [
    'jshint',
    'less',
    'autoprefixer',
    'clean:bundles',
    'webpack:src',
    'connect:src',
    'watch'
  ]);

  /**
   * generate docs task
   * @usage: grunt docs
   */
  grunt.registerTask('docs', [
    'clean:docs',
    'copy:docs',
    'cssmin:docs',
    'webpack:docs',
    'ngAnnotate:docs',
    'uglify:docs',
    'connect:docs:keepalive'
  ]);

  /**
   * dist task
   * if --min flag is present, all javascript, stylesheet, html and image file
   * will be minified and compress
   * @usage: grunt dist / grunt dist --min
   */
  var distTask = ['clean:dist', 'webpack:src', 'copy:dist'];

  /** if --min flag is present */
  if(argv.min) {
    distTask.push('cssmin:dist', 'ngAnnotate:dist', 'uglify:dist', 'imagemin');
  }

  grunt.registerTask('dist', distTask);
};
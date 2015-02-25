'use strict';

/**
 * Summernote
 * @desc: super simple WYSIWYG editor on Bootstrap
 */
module.exports = function () {
  /** dependencies */
  require('bootstrap');
  
  /** core script */
  require('!imports?define=>false!imports?require=>false!summernote');

  /** stylesheet */
  require('componentDir/summernote/styles/summernote.css');
};
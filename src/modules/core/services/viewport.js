'use strict';

/**
 * Viewport Services
 * @module: app.core
 * @desc: Calculate application window width and height
 */
module.exports = function (module) {
  module.factory('viewport', ['$window', function ($window) {
    return {
      height: function() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      },
      width: function() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
    };
  }]);
};
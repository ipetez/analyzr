'use strict';

/**
 * Filters
 * @module: app.core
 * @desc: Capitalize wording
 */
module.exports = function (module) {
  module.filter('capitalize', function () {
    return function(input) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }) : '';
    };
  });
};
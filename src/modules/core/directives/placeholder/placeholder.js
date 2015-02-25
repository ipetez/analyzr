'use strict';

/**
 * Placeholder
 * @module: app.core
 * @desc: Add support for IE9 input placeholder
 */
module.exports = function (module) {
  module.directive('placeholder', ['$timeout', function ($timeout) {
    var i = document.createElement('input');
    if ('placeholder' in i) { return {}; }
    return {
      restrict: 'A',
      $scope: {},
      link: function($scope, iElm, iAttrs) {
        if (iAttrs.type === 'password') { return; }

        $timeout(function () {
          iElm.val(iAttrs.placeholder);
          iElm.bind('focus', function () {
            if (iElm.val() === iAttrs.placeholder) {
              iElm.val('');
            }
          }).bind('blur', function () {
            if (iElm.val() === '') {
              iElm.val(iAttrs.placeholder);
            }
          });
        });
      }
    };
  }]);
};
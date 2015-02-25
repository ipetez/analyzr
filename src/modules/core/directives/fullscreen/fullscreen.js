'use strict';

/**
 * Fullscreen
 * @module: app.core
 * @desc: Application fullscreen mode
 */
module.exports = function (module) {
  module.directive('fullScreen', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs) {
        $timeout(function () {
          iElm.on('click', function () {
            if (screenfull.enabled) {
              screenfull.toggle();
            }
          });

          document.addEventListener(screenfull.raw.fullscreenchange, function () {
            if(screenfull.isFullscreen ) {
              $scope.$parent.core.settings.fullScreen = true;
            } else {
              $scope.$parent.core.settings.fullScreen = false;
            }
          });
        });
      }
    };
  }]);
};
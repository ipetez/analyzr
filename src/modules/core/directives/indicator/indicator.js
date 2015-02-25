'use strict';

/**
 * Page Loading indicator
 * @module: app.core
 * @desc: Application page loading indicator
 */
module.exports = function (module) {
  module.directive('indicator', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'modules/core/views/partials/spinner.html',
      link: function($scope, iElm, iAttrs) {
        $timeout(function () {
          var $wrapper = angular.element(iElm).parent('.spinner-wrapper'),
              $spinner = angular.element(iElm);

          /** show loading indicator */
          $rootScope.$on('$stateChangeStart', function () {
            $wrapper.addClass('show');
          });

          /** hide loading indicator */
          $rootScope.$on('$stateChangeSuccess', function () {
            $wrapper.removeClass('show');
          });
        });
      }
    };
  }]);
};
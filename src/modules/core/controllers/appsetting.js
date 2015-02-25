'use strict';

/**
 * Core setting controller
 * @module: app.core 
 */
module.exports = function (module) {
  module.controller('coreSettingsCtrl', [
    '$scope',
    '$rootScope',
    '$window',
    '$timeout',
    '$cookies',
    'viewport',
    function ($scope, $rootScope, $window, $timeout, $cookies, viewport) {
      /** App Initial Settings */
      $scope.core = {
        name: 'Analyzr',
        version: '0.0.1',
        settings: {
          fullScreen: false,
          pageLoading: false,
          headerFixed: true,
          headerSearchForm: false,
          sidebarLeftOpen: false,
          sidebarLeftFixed: false,
          sidebarLeftCollapse: viewport.width() >= 768 && viewport.width() < 992 ? true : false
        },
        screen: {
          xs: viewport.width() < 768 ? true : false,
          sm: viewport.width() >= 768 && viewport.width() < 992 ? true : false,
          md: viewport.width() >= 992 && viewport.width() < 1200 ? true : false,
          lg: viewport.width() >= 1200 ? true : false,
          height: viewport.height(),
          width: viewport.width()
        }
      };

      /** hide sidebar and show loading indicator */
      $rootScope.$on('$stateChangeStart', function () {
        $scope.core.settings.sidebarLeftOpen = false;
        $scope.core.settings.pageLoading = true;
      });

      /** show loading indicator */
      $rootScope.$on('$stateChangeSuccess', function () {
        $scope.core.settings.pageLoading = false;
      });

      /** On resize, update viewport variable */
      angular.element($window).on('resize', function () {
        $timeout.cancel($scope.resizing);

        $scope.resizing = $timeout(function () {
          $scope.core.screen.xs = viewport.width() < 768 ? true : false;
          $scope.core.screen.sm = viewport.width() >= 768 && viewport.width() < 992 ? true : false;
          $scope.core.screen.md = viewport.width() >= 992 && viewport.width() < 1200 ? true : false;
          $scope.core.screen.lg = viewport.width() >= 1200 ? true : false;
          $scope.core.screen.height = viewport.height();
          $scope.core.screen.width = viewport.width();
        }, 100);
      });
    }
  ]);
};
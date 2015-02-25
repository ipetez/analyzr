'use strict';

/**
 * UI routes
 * @module: app.ui
 */
module.exports = function (module) {
  module.config([
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    '$controllerProvider',
    '$compileProvider',
    '$filterProvider',
    '$provide',
    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
      /** store a reference to various provider functions */
      module.controller = $controllerProvider.register;
      module.directive  = $compileProvider.directive;
      module.filter     = $filterProvider.register;
      module.factory    = $provide.factory;
      module.provider   = $provide.provider;
      module.service    = $provide.service;
      module.constant   = $provide.constant;
      module.value      = $provide.value;

      /** setup routes */
      $stateProvider.state('default.ui', {
        url: '/ui',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('default.ui.buttons', {
        url: '/buttons',
        templateUrl: 'modules/ui/views/buttons.html'
      })
      .state('default.ui.grids', {
        url: '/grids',
        templateUrl: 'modules/ui/views/grids.html'
      })
      .state('default.ui.icons', {
        url: '/icons',
        templateUrl: 'modules/ui/views/icons.html'
      })
      .state('default.ui.bootstrap', {
        url: '/bootstrap',
        templateUrl: 'modules/ui/views/bootstrap.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Controllers */
              require('moduleDir/ui/controllers/bootstrap-alert')(module);
              require('moduleDir/ui/controllers/bootstrap-accordion')(module);
              require('moduleDir/ui/controllers/bootstrap-tab')(module);
              require('moduleDir/ui/controllers/bootstrap-carousel')(module);
              require('moduleDir/ui/controllers/bootstrap-collapse')(module);
              require('moduleDir/ui/controllers/bootstrap-datepicker')(module);
              require('moduleDir/ui/controllers/bootstrap-dropdown')(module);
              require('moduleDir/ui/controllers/bootstrap-modal')(module);
              require('moduleDir/ui/controllers/bootstrap-popover')(module);
              require('moduleDir/ui/controllers/bootstrap-pagination')(module);
              require('moduleDir/ui/controllers/bootstrap-progress')(module);
              require('moduleDir/ui/controllers/bootstrap-typehead')(module);
              require('moduleDir/ui/controllers/bootstrap-rating')(module);
              require('moduleDir/ui/controllers/bootstrap-timepicker')(module);
              require('moduleDir/ui/controllers/bootstrap-tooltip')(module);
              
              deferred.resolve();
            }, 'ui.bootstrap');

            return deferred.promise;
          }]
        }
      })
      .state('default.ui.widgets', {
        url: '/widgets',
        templateUrl: 'modules/ui/views/widgets.html'
      });
    }
  ]);
};
'use strict';

/**
 * Chart routes
 * @module: app.chart
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
      $stateProvider.state('default.chart', {
        url: '/chart',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('default.chart.flot', {
        url: '/flot',
        templateUrl: 'modules/chart/views/flot.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();
            
            require.ensure([], function () {
              /** Components **/
              require('componentDir/flot/flot')();

              /** Controllers */
              require('moduleDir/chart/controllers/flot-bar')(module);
              require('moduleDir/chart/controllers/flot-bar-line')(module);
              require('moduleDir/chart/controllers/flot-line')(module);
              require('moduleDir/chart/controllers/flot-line-spline')(module);
              require('moduleDir/chart/controllers/flot-area')(module);
              require('moduleDir/chart/controllers/flot-area-spline')(module);
              require('moduleDir/chart/controllers/flot-donut')(module);
              require('moduleDir/chart/controllers/flot-pie')(module);

              deferred.resolve();
            }, 'chart.flot');

            return deferred.promise;
          }]
        }
      })
      .state('default.chart.others', {
        url: '/others',
        templateUrl: 'modules/chart/views/others.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();
            
            require.ensure([], function () {
              /** Components **/
              require('componentDir/easypiechart/easypiechart')();
              require('componentDir/sparkline/sparkline')();

              deferred.resolve();
            }, 'chart.others');

            return deferred.promise;
          }]
        }
      });
    }
  ]);
};
'use strict';

/**
 * Dashboard routes
 * @module: app.dashboard
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
      $stateProvider.state('default.dashboard', {
        url: '/dashboard',
        templateUrl: 'modules/dashboard/views/dashboard.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Components **/
              require('componentDir/flot/flot')();
              require('componentDir/jvectormap/jvectormap')();

              /** Controllers */
              require('moduleDir/dashboard/controllers/invoice-chart')(module);
              require('moduleDir/dashboard/controllers/donut-chart')(module);
              require('moduleDir/dashboard/controllers/activities-feed')(module);
              require('moduleDir/dashboard/controllers/vector-map')(module);

              deferred.resolve();
            }, 'dashboard');

            return deferred.promise;
          }]
        }
      });
    }
  ]);
};
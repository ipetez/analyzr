'use strict';

/**
 * Table routes
 * @module: app.table
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
      $stateProvider.state('default.table', {
        url: '/table',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('default.table.static', {
        url: '/static',
        templateUrl: 'modules/table/views/static.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Components */
              require('componentDir/sparkline/sparkline')();
              deferred.resolve();
            }, 'table.static');

            return deferred.promise;
          }]
        }
      })
      .state('default.table.datatable', {
        url: '/datatable',
        templateUrl: 'modules/table/views/datatable.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();
            
            require.ensure([], function () {
              /** Components */
              require('componentDir/datatable/datatable')();
              deferred.resolve();
            }, 'table.datatable');

            return deferred.promise;
          }]
        }
      });
    }
  ]);
};
'use strict';

/**
 * Calendar routes
 * @module: app.calendar
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
      $stateProvider.state('default.calendar', {
        url: '/calendar',
        templateUrl: 'modules/calendar/views/fullcalendar.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Components **/
              require('componentDir/fullcalendar/fullcalendar')(module);

              /** Controllers */
              require('moduleDir/calendar/controllers/fullcalendar')(module);

              deferred.resolve();
            }, 'calendar.fullcalendar');

            return deferred.promise;
          }]
        }
      });
    }
  ]);
};
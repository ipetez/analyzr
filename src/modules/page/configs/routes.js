'use strict';

/**
 * Page routes
 * @module: app.page
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
      $stateProvider.state('default.page', {
        url: '/page',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('minimal.page', {
        url: '/page',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('default.page.blank', {
        url: '/blank',
        templateUrl: 'modules/page/views/blank.html'
      })
      .state('minimal.page.signin', {
        url: '/signin',
        templateUrl: 'modules/page/views/signin.html'
      })
      .state('minimal.page.signup', {
        url: '/signup',
        templateUrl: 'modules/page/views/signup.html'
      })
      .state('minimal.page.lostpassword', {
        url: '/lostpassword',
        templateUrl: 'modules/page/views/lostpassword.html'
      })
      .state('default.page.profile', {
        url: '/profile',
        templateUrl: 'modules/page/views/profile.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Controllers */
              require('moduleDir/page/controllers/contact-list')(module);

              deferred.resolve();
            }, 'page.profile');

            return deferred.promise;
          }]
        }
      })
      .state('minimal.page.error', {
        url: '/error',
        templateUrl: 'modules/page/views/error.html'
      });
    }
  ]);
};
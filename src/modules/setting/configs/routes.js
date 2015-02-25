'use strict';

/**
 * Setting routes
 * @module: app.setting
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

      /** default route */
      $urlRouterProvider.when('/setting', 'setting/profile');

      /** setup routes */
      $stateProvider.state('default.setting', {
        url: '/setting',
        templateUrl: 'modules/setting/views/index.html'
      })
      .state('default.setting.profile', {
        url: '/profile',
        templateUrl: 'modules/setting/views/profile.html'
      })
      .state('default.setting.account', {
        url: '/account',
        templateUrl: 'modules/setting/views/account.html'
      })
      .state('default.setting.security', {
        url: '/security',
        templateUrl: 'modules/setting/views/security.html'
      });
    }
  ]);
};
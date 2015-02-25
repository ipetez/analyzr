'use strict';

/**
 * Mail routes
 * @module: app.mail
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
      $urlRouterProvider.when('/mail', 'mail/folder/inbox');

      /** setup routes */
      $stateProvider.state('default.mail', {
        url: '/mail',
        templateUrl: 'modules/mail/views/index.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Components */
              require('componentDir/select2/select2')();
              require('componentDir/summernote/summernote')();

              /** Controllers */
              require('moduleDir/mail/controllers/mail-main')(module);
              require('moduleDir/mail/controllers/mail-list')(module);
              require('moduleDir/mail/controllers/mail-detail')(module);
              require('moduleDir/mail/controllers/contact-list')(module);

              deferred.resolve();
            }, 'mail');

            return deferred.promise;
          }]
        }
      })
      .state('default.mail.compose', {
        url: '/compose',
        templateUrl: 'modules/mail/views/compose.html'
      })
      .state('default.mail.folder', {
        url: '/folder',
        template: '<div class="slide-top" data-ui-view></div>'
      })
      .state('default.mail.folder.param', {
        url: '/{folder}',
        templateUrl: 'modules/mail/views/lists.html'
      })
      .state('default.mail.label', {
        url: '/label',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('default.mail.label.param', {
        url: '/{label}',
        templateUrl: 'modules/mail/views/lists.html'
      })
      .state('default.mail.view', {
        url: '/view',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('default.mail.view.param', {
        url: '/{view}',
        templateUrl: 'modules/mail/views/view.html'
      });
    }
  ]);
};
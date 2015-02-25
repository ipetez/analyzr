'use strict';

/**
 * Form routes
 * @module: app.form
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
      $urlRouterProvider.when('/form/wizard', 'form/wizard/basic');

      /** setup routes */
      $stateProvider.state('default.form', {
        url: '/form',
        template: '<div class="slide-down" data-ui-view></div>'
      })
      .state('default.form.elements', {
        url: '/elements',
        templateUrl: 'modules/form/views/elements.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Components **/
              require('componentDir/select2/select2')();
              require('componentDir/summernote/summernote')();

              deferred.resolve();
            }, 'form.elements');

            return deferred.promise;
          }]
        }
      })
      .state('default.form.validation', {
        url: '/validation',
        templateUrl: 'modules/form/views/validation.html'
      })
      .state('default.form.wizard', {
        url: '/wizard',
        templateUrl: 'modules/form/views/wizard-index.html'
      })
      .state('default.form.wizard.basic', {
        url: '/basic',
        templateUrl: 'modules/form/views/wizard-basic.html'
      })
      .state('default.form.wizard.medical', {
        url: '/medical',
        templateUrl: 'modules/form/views/wizard-medical.html'
      })
      .state('default.form.wizard.suggestion', {
        url: '/suggestion',
        templateUrl: 'modules/form/views/wizard-suggestion.html'
      })
      .state('default.form.wizard.finish', {
        url: '/finish',
        templateUrl: 'modules/form/views/wizard-finish.html'
      })
      .state('default.form.upload', {
        url: '/upload',
        templateUrl: 'modules/form/views/upload.html',
        resolve: {
          load: ['$q', '$rootScope', function ($q, $rootScope) {
            var deferred = $q.defer();

            require.ensure([], function () {
              /** Components **/
              require('componentDir/flow/flow')(module);

              deferred.resolve();
            }, 'form.upload');

            return deferred.promise;
          }]
        }
      });
    }
  ]);
};
'use strict';

/**
 * Mail detail controller
 * @module: app.mail
 * @desc: show mail detail
 */
module.exports = function (module) {
  module.controller('mailDetailCtrl', ['$http', '$scope', '$stateParams', function ($http, $scope, $stateParams) {
    $scope.mailId = parseInt($stateParams.view);
    $scope.mail = [];

    /** get mail data */
    $http({
      url: 'modules/mail/data/mail-list',
      method: 'GET'
    }).success(function (data) {
      angular.forEach(data, function (value, key) {
        if(value.id === $scope.mailId) {
          $scope.mail.push(value);
        }
      }, $scope.mail);
    });
  }]);
};
'use strict';

/**
 * Mail list controller
 * @module: app.mail
 * @desc: 
 */
module.exports = function (module) {
  module.controller('mailListCtrl', ['$http', '$scope', '$stateParams', '$filter', function ($http, $scope, $stateParams, $filter) {
    /** get mail data */
    $http({
      url: 'modules/mail/data/mail-list',
      method: 'GET'
    }).success(function (data) {
      if(Object.keys($stateParams)[0] === 'folder') {
        $scope.filteredMail = $filter('filter')(data, {folder: $stateParams.folder});
      } else {
        $scope.filteredMail = $filter('filter')(data, {label: $stateParams.label});
      }
    });
  }]);
};
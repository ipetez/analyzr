'use strict';

/**
 * Contact list controller
 * @module: app.page
 * @desc: populate contact list
 */
module.exports = function (module) {
  module.controller('contactListCtrl', ['$http', '$scope', function ($http, $scope) {
    $scope.config = {
      status: [
        {name: 'online', color:'success'},
        {name: 'offline', color:''},
        {name: 'away', color:'warning'}
      ]
    };

    /** get mail data */
    $http({
      url: 'modules/mail/data/contact-list',
      method: 'GET'
    }).success(function (data) {
      $scope.contacts = data;
    });
  }]);
};
'use strict';

/**
 * Mail main controller
 * @module: app.mail
 * @desc: 
 */
module.exports = function (module) {
  module.controller('mailMainCtrl', ['$http', '$scope', '$stateParams', function ($http, $scope, $stateParams) {
    /** mail folder & label config */
    $scope.config = {
      folders: [
        {name: 'inbox', filter:''},
        {name: 'sent', filter:'sent'},
        {name: 'draft', filter:'draft'},
        {name: 'trash', filter:'trash'}
      ],
      labels: [
        {name: 'social', color:'success'},
        {name: 'family', color:'info'},
        {name: 'reading', color:'warning'},
        {name: 'work', color:'danger'}
      ],
      stateParam: $stateParams
    };

    /** get mail data */
    $http({
      url: 'modules/mail/data/mail-list',
      method: 'GET'
    }).success(function (data) {
      $scope.mails = data;
    });
  }]);
};
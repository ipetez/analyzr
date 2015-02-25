'use strict';

/**
 * Bootstrap alert controller
 * @module: app.ui
 */
module.exports = function (module) {
  module.controller('BsAlertCtrl', ['$scope', function ($scope) {
    $scope.alerts = [{
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    }, {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.'
    }, {
      type: 'info',
      msg: 'Heads up! This alert needs your attention, but it\'s not super important.'
    }, {
      type: 'warning',
      msg: 'Warning! Better check yourself, you\'re not looking too good.'
    }];

    $scope.addAlert = function() {
      $scope.alerts.push({
        msg: 'Another alert!'
      });
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }]);
};
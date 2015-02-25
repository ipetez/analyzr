'use strict';

/**
 * Activities feed controller
 * @module: app.dashboard
 * @desc: Show some activity feed
 */
module.exports = function (module) {
  module.controller('activitiesFeedCtrl', ['$scope', '$http', function ($scope, $http) {
    $http({
      url: 'modules/dashboard/data/activities-feed',
      method: 'GET'
    }).success(function (data) {
      $scope.activities = data;
    });
  }]);
};
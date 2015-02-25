'use strict';

/**
 * Bootstrap rating controller
 * @module: app.ui
 */
module.exports = function (module) {
  module.controller('BsRatingCtrl', ['$scope', function ($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }]);
};
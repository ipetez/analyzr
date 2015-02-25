'use strict';

/**
 * Bootstrap collapse controller
 * @module: app.ui 
 */
module.exports = function (module) {
  module.controller('BsCollapseCtrl', ['$scope', function ($scope) {
    $scope.isCollapsed = false;
  }]);
};
'use strict';

/**
 * Bootstrap popover controller
 * @module: app.ui
 */
module.exports = function (module) {
  module.controller('BsPopoverCtrl', ['$scope', function ($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }]);
};
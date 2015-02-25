'use strict';

/**
 * Bootstrap tooltip controller
 * @module: app.ui
 */
module.exports = function (module) {
  module.controller('BsTooltipCtrl', ['$scope', function ($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }]);
};
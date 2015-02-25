'use strict';

/**
 * Flot donut chart Controller
 * @module: app.chart 
 */
module.exports = function (module) {
  module.controller('flotDonutChartCtrl', ['$scope', function ($scope) {
    /** Options */
    $scope.options = {
      series: {
        pie: {
          innerRadius: 0.5,
          show: true
        }
      }
    };

    /** Data */
    $scope.dataset = [{
      'label': 'Overall',
      'color': '#3b5998',
      'data': 40
    }, {
      'label': 'View Rate',
      'color': '#83b81a',
      'data': 60
    }, {
      'label': 'Click Rate',
      'color': '#55acee',
      'data': 20
    }];
  }]);
};
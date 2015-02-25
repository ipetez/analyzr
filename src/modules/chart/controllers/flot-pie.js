'use strict';

/**
 * Flot pie chart Controller
 * @module: app.chart 
 */
module.exports = function (module) {
  module.controller('flotPieChartCtrl', ['$scope', function ($scope) {
    /** Options */
    $scope.options = {
      series: {
        pie: {
          show: true
        }
      }
    };

    /** Data */
    $scope.dataset = [{
      'label': 'Overall',
      'color': '#fccd1b',
      'data': 30
    }, {
      'label': 'View Rate',
      'color': '#dd4b39',
      'data': 40
    }, {
      'label': 'Click Rate',
      'color': '#3b5998',
      'data': 60
    }];
  }]);
};
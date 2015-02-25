'use strict';

/**
 * Flot line chart Controller
 * @module: app.chart 
 */
module.exports = function (module) {
  module.controller('flotLineChartCtrl', ['$scope', function ($scope) {
    /** Options */
    $scope.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 4
        },
        points: {
          show: true,
          radius: 5
        }
      },
      grid: {
        borderColor: '#f4f4f4',
        borderWidth: 1,
        hoverable: true,
        backgroundColor: 'transparent'
      },
      tooltip: true,
      tooltipOpts: {
        content: '%y'
      },
      xaxis: {
        tickColor: 'transparent',
        mode: 'categories'
      },
      yaxis: {
        tickColor: '#f4f4f4'
      },
      shadowSize: 0
    };

    /** Data */
    $scope.dataset = [{
      'label': 'Data 1',
      'color': '#D81B60',
      'data': [
        ['Jan', 61],
        ['Feb', 52],
        ['Mar', 82],
        ['Apr', 79],
        ['May', 70],
        ['Jun', 67],
        ['Jul', 65],
        ['Aug', 55],
        ['Sep', 68],
        ['Oct', 96],
        ['Nov', 50],
        ['Dec', 61]
      ]
    }];
  }]);
};
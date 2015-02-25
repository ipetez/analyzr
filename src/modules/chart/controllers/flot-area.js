'use strict';

/**
 * Flot area chart Controller
 * @module: app.chart 
 */
module.exports = function (module) {
  module.controller('flotAreaChartCtrl', ['$scope', function ($scope) {
    /** Options */
    $scope.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 4,
          fill: 0.5
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
      'color': '#E91E63',
      'data': [
        ['Jan', 62],
        ['Feb', 62],
        ['Mar', 77],
        ['Apr', 93],
        ['May', 54],
        ['Jun', 51],
        ['Jul', 66],
        ['Aug', 54],
        ['Sep', 82],
        ['Oct', 86],
        ['Nov', 76],
        ['Dec', 67]
      ]
    }];
  }]);
};
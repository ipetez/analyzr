'use strict';

/**
 * Flot bar + line chart Controller
 * @module: app.chart 
 */
module.exports = function (module) {
  module.controller('flotBarLineChartCtrl', ['$scope', function ($scope) {
    /** Options */
    $scope.options = {
      series: {
        bars: {
          align: 'center',
          lineWidth: 0,
          show: true,
          barWidth: 0.6,
          fill: 0.9
        },
        lines: {
          show: true
        },
        points: {
          show: true,
          radius: 4
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
        content: '%x : %y'
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
      'label': 'Category',
      'color': '#00BCD4',
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
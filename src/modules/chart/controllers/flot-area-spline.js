'use strict';

/**
 * Flot area + spline chart Controller
 * @module: app.chart 
 */
module.exports = function (module) {
  module.controller('flotAreaSplineChartCtrl', ['$scope', function ($scope) {
    /** Options */
    $scope.options = {
      series: {
        lines: {
          show: false
        },
        splines: {
          show: true,
          tension: 0.5,
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
      'color': '#9C27B0',
      'data': [
        ['Jan', 63],
        ['Feb', 60],
        ['Mar', 82],
        ['Apr', 82],
        ['May', 72],
        ['Jun', 62],
        ['Jul', 56],
        ['Aug', 55],
        ['Sep', 77],
        ['Oct', 83],
        ['Nov', 62],
        ['Dec', 70]
      ]
    }];
  }]);
};
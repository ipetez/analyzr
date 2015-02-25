'use strict';

/**
 * Flot bar chart Controller
 * @module: app.chart  
 */
module.exports = function (module) {
  module.controller('flotBarChartCtrl', ['$scope', function ($scope) {
    /** Options */
    $scope.options = {
      series: {
        bars: {
          align: 'center',
          lineWidth: 0,
          show: true,
          barWidth: 0.6,
          fill: 0.9
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
      'color': '#4CAF50',
      'data': [
        ['Jan', 7574],
        ['Feb', 6085],
        ['Mar', 9775],
        ['Apr', 6739],
        ['May', 9002],
        ['Jun', 8525],
        ['Jul', 7555],
        ['Aug', 9137],
        ['Sep', 7799],
        ['Oct', 9966],
        ['Nov', 9897],
        ['Dec', 6185]
      ]
    }];
  }]);
};
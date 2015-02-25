'use strict';

/**
 * Big chart controller
 * @module: app.dashboard
 * @desc: Show example of chart usage
 */
module.exports = function (module) {
  module.controller('invoiceChartCtrl', ['$scope', '$http', function ($scope, $http) {
    /** chart options */
    $scope.options = {
      series: {
        lines: {
          show: false
        },
        splines: {
          show: true,
          tension: 0.5,
          lineWidth: 5
        },
        points: {
          show: true,
          radius: 5
        }
      },
      grid: {
        borderColor: '#f0f0f0',
        borderWidth: 1,
        hoverable: true,
        backgroundColor: 'transparent'
      },
      tooltip: true,
      tooltipOpts: {
        content: '%y'
      },
      xaxis: {
        tickColor: '#f0f0f0',
        mode: 'categories'
      },
      yaxis: {
        tickColor: '#f0f0f0',
        tickFormatter: function(v) {
          return '$'+v;
        }
      },
      shadowSize: 5
    };

    /** chart data */
    $scope.dataset = [{
      'label': 'You',
      'color': '#83b81a',
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
    }, {
      'label': 'Others',
      'color': '#55acee',
      'data': [
        ['Jan', 8190],
        ['Feb', 5469],
        ['Mar', 7844],
        ['Apr', 5848],
        ['May', 6380],
        ['Jun', 5508],
        ['Jul', 8915],
        ['Aug', 7775],
        ['Sep', 8177],
        ['Oct', 6817],
        ['Nov', 9586],
        ['Dec', 7982]
      ]
    }];
  }]);
};
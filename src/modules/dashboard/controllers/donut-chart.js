'use strict';

/**
 * Donut chart controller
 * @module: app.dashboard
 * @desc: Show example of chart usage
 */
module.exports = function (module) {
  module.controller('donutChartCtrl', ['$scope', '$http', function ($scope, $http) {
    /** Chart option */
    $scope.options = {
      series: {
        pie: {
          innerRadius: 0.45,
          show: true
        }
      },
      legend: {
        show: false
      }
    };

    /** chart data */
    $scope.dataset = [{
      'label': 'Receive',
      'color': '#83b81a',
      'data': 40
    }, {
      'label': 'Sent',
      'color': '#55acee',
      'data': 60
    }, {
      'label': 'Return',
      'color': '#dd4b39',
      'data': 20
    }, {
      'label': 'Fail',
      'color': '#fff',
      'data': 20
    }];
  }]);
};
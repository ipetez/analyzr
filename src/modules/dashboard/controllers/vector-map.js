'use strict';

/**
 * Vector map controller
 * @module: app.dashboard
 * @desc: vector map
 */
module.exports = function (module) {
  module.controller('vectorMapCtrl', ['$scope', '$http', function ($scope, $http) {
    // vector map options
    $scope.options = {
      map: 'world_mill_en',
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#888'
        }
      },
      series: {
        regions: [{
          values: {'BR': 50, 'RU': 10, 'JP': 80, 'AU': 100},
          scale: ['#2969B0', '#40D3B7', '#6CC1ED', '#FCCD1B', '#F86B4F', '#1abc9c'],
          normalizeFunction: 'polynomial'
        }]
      }
    };
  }]);
};
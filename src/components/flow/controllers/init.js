'use strict';

/**
 * Flow init controller
 * @desc: 
 */
module.exports = function (module) {
  module.controller('flowCtrl', ['$scope', '$attrs', '$parse', 'flowFactory', function ($scope, $attrs, $parse, flowFactory) {

    var options = angular.extend({}, $scope.$eval($attrs.flowInit)),
        flow  = $scope.$eval($attrs.flowObject) || flowFactory.create(options);

    flow.on('catchAll', function (eventName) {
      var args = Array.prototype.slice.call(arguments);
      args.shift();
      var event = $scope.$broadcast.apply($scope, ['flow::' + eventName, flow].concat(args));
      if ({
        'progress':1, 'filesSubmitted':1, 'fileSuccess': 1, 'fileError': 1, 'complete': 1
      }[eventName]) {
        $scope.$apply();
      }
      if (event.defaultPrevented) {
        return false;
      }
    });

    $scope.$flow = flow;
    if ($attrs.hasOwnProperty('flowName')) {
      $parse($attrs.flowName).assign($scope, flow);
      $scope.$on('$destroy', function () {
        $parse($attrs.flowName).assign($scope);
      });
    }
  }]);

  module.directive('flowInit', [function () {
    return {
      scope: true,
      controller: 'flowCtrl'
    };
  }]);
};
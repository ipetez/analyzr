'use strict';

/**
 * Slimscroll
 * @module: app.core
 * @desc: Application custom scrollbar
 */
module.exports = function (module) {
  module.value('slimScrollConfig', {});
  module.directive('slimScroll', ['$timeout', 'slimScrollConfig', function ($timeout, slimScrollConfig) {
    var options = {
      height: '',
      size: '6px',
      wrapperClass: 'scroll-wrapper',
      railClass: 'scroll-rail',
      barClass: 'scroll-bar',
      wheelStep: 10,
      railVisible: false
    };

    if (slimScrollConfig) { angular.extend(options, slimScrollConfig); }

    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs) {
        $timeout(function () {
          if (angular.element('html').hasClass('touch')) { return; }
          var opts = angular.extend({}, options, $scope.$eval(iAttrs.slimScroll));
          angular.element(iElm).slimScroll(opts);
        });
      }
    };
  }]);
};
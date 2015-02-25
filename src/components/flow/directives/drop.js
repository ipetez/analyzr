'use strict';

/**
 * Flow drop
 * @desc:
 */
module.exports = function (module) {
  module.directive('flowDrop', function () {
    return {
      scope: false,
      require: '^flowInit',
      link: function (scope, element, attrs) {
        if (attrs.flowDropEnabled) {
          scope.$watch(attrs.flowDropEnabled, function (value) {
            if (value) {
              assignDrop();
            } else {
              unAssignDrop();
            }
          });
        } else {
          assignDrop();
        }
        function assignDrop() {
          scope.$flow.assignDrop(element);
        }
        function unAssignDrop() {
          scope.$flow.unAssignDrop(element);
        }
      }
    };
  });
};
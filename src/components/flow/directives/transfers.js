'use strict';

/**
 * Flow transfer
 * @desc:
 */
module.exports = function (module) {
  module.directive('flowTransfers', [function () {
    return {
      scope: true,
      require: '^flowInit',
      link: function (scope) {
        scope.transfers = scope.$flow.files;
      }
    };
  }]);
};
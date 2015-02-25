'use strict';

/**
 * Flow drag events
 * @desc:
 */
module.exports = function (module) {
  module.directive('flowPreventDrop', function () {
    return {
      scope: false,
      link: function (scope, element, attrs) {
        element.bind('drop dragover', function (event) {
          event.preventDefault();
        });
      }
    };
  });

  module.directive('flowDragEnter', ['$timeout', function ($timeout) {
    return {
      scope: false,
      link: function (scope, element, attrs) {
        var promise;
        var enter = false;
        element.bind('dragover', function (event) {
          if (!isFileDrag(event)) {
            return ;
          }
          if (!enter) {
            scope.$apply(attrs.flowDragEnter);
            enter = true;
          }
          $timeout.cancel(promise);
          event.preventDefault();
        });
        element.bind('dragleave drop', function (event) {
          promise = $timeout(function () {
            scope.$eval(attrs.flowDragLeave);
            promise = null;
            enter = false;
          }, 100);
        });
        function isFileDrag (dragEvent) {
          var fileDrag = false;
          var dataTransfer = dragEvent.dataTransfer || dragEvent.originalEvent.dataTransfer;
          angular.forEach(dataTransfer && dataTransfer.types, function (val) {
            if (val === 'Files') {
              fileDrag = true;
            }
          });
          return fileDrag;
        }
      }
    };
  }]);
};
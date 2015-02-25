'use strict';

/**
 * Fullcalendar
 * @desc:
 */
module.exports = function (module) {
  module.constant('uiCalendarConfig', { calendars: {} });
  
  module.directive('uiCalendar', ['uiCalendarConfig', function (uiCalendarConfig) {
    return {
      restrict: 'A',
      scope: {
        eventSources: '=ngModel',
        calendarWatchEvent: '&'
      },
      controller: 'uiCalendarCtrl',
      link: function($scope, iElm, iAttrs, controller) {

        var sources = $scope.eventSources,
          sourcesChanged = false,
          calendar,
          eventSourcesWatcher = controller.changeWatcher(sources, controller.sourcesFingerprint),
          eventsWatcher = controller.changeWatcher(controller.allEvents, controller.eventsFingerprint),
          options = null;

        function getOptions() {
          var calendarSettings = iAttrs.uiCalendar ? $scope.$parent.$eval(iAttrs.uiCalendar) : {},
            fullCalendarConfig;

          fullCalendarConfig = controller.getFullCalendarConfig(calendarSettings, uiCalendarConfig);

          var localeFullCalendarConfig = controller.getLocaleConfig(fullCalendarConfig);
          angular.extend(localeFullCalendarConfig, fullCalendarConfig);
          options = {
            eventSources: sources
          };
          angular.extend(options, localeFullCalendarConfig);
          //remove calendars from options
          options.calendars = null;

          var options2 = {};
          for (var o in options) {
            if (o !== 'eventSources') {
              options2[o] = options[o];
            }
          }
          return JSON.stringify(options2);
        }

        $scope.destroy = function () {
          if (calendar && calendar.fullCalendar) {
            calendar.fullCalendar('destroy');
          }
          if (iAttrs.calendar) {
            calendar = uiCalendarConfig.calendars[iAttrs.calendar] = $(iElm).html('');
          } else {
            calendar = $(iElm).html('');
          }
        };

        $scope.init = function() {
          calendar.fullCalendar(options);
        };

        eventSourcesWatcher.onAdded = function (source) {
          calendar.fullCalendar('addEventSource', source);
          sourcesChanged = true;
        };

        eventSourcesWatcher.onRemoved = function (source) {
          calendar.fullCalendar('removeEventSource', source);
          sourcesChanged = true;
        };

        eventsWatcher.onAdded = function (event) {
          calendar.fullCalendar('renderEvent', event);
        };

        eventsWatcher.onRemoved = function (event) {
          calendar.fullCalendar('removeEvents', function (e) {
            return e._id === event._id;
          });
        };

        eventsWatcher.onChanged = function (event) {
          event._start = $.fullCalendar.moment(event.start);
          event._end = $.fullCalendar.moment(event.end);
          calendar.fullCalendar('updateEvent', event);
        };

        eventSourcesWatcher.subscribe($scope);
        eventsWatcher.subscribe($scope, function (newTokens, oldTokens) {
          if (sourcesChanged === true) {
            sourcesChanged = false;
            // prevent incremental updates in this case
            return false;
          }
        });

        $scope.$watch(getOptions, function (newO, oldO) {
          $scope.destroy();
          $scope.init();
        });
      }
    };
  }]);
};
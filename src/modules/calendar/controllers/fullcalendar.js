'use strict';

/**
 * Calendar controller
 * @desc: 
 */
module.exports = function (module) {
  module.controller('fullCalendarCtrl', ['$scope', '$http', '$compile', 'uiCalendarConfig', function ($scope, $http, $compile, uiCalendarConfig) {
    var $calendar = jQuery('[ui-calendar]');
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that pulls from google.com */
    $scope.eventSource = {
      url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
      className: 'gcal-event', // an option!
      currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */
    $scope.events = [{
      title: 'All Day Event',
      start: '2014-11-01'
    }, {
      title: 'Long Event',
      start: '2014-11-07',
      end: '2014-11-10'
    }, {
      id: 999,
      title: 'Repeating Event',
      start: '2014-11-09T16:00:00'
    }, {
      title: 'Conference',
      start: '2014-11-11',
      end: '2014-11-13',
      className: 'fc-event-danger'
    }, {
      title: 'Meeting',
      start: '2014-11-12T10:30:00',
      end: '2014-11-12T12:30:00'
    }, {
      title: 'Lunch',
      start: '2014-11-12T12:00:00',
      className: 'fc-event-danger'
    }, {
      title: 'Meeting',
      start: '2014-11-12T14:30:00',
      className: 'fc-event-warning'
    }, {
      title: 'Happy Hour',
      start: '2014-11-12T17:30:00'
    }, {
      title: 'Dinner',
      start: '2014-11-12T20:00:00',
      className: 'fc-event-success'
    }, {
      title: 'Birthday Party',
      start: '2014-11-13T07:00:00',
      className: 'fc-event-success'
    }, {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2014-11-28'
    }];

    /* alert on eventClick */
    $scope.alertOnEventClick = function(date, jsEvent, view) {
      $scope.alertMessage = (date.title + ' was clicked ');
    };

    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
      $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };

    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
      $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };

    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources, source) {
      var canAdd = 0;
      angular.forEach(sources, function(value, key) {
        if (sources[key] === source) {
          sources.splice(key, 1);
          canAdd = 1;
        }
      });
      if (canAdd === 0) {
        sources.push(source);
      }
    };

    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };

    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index, 1);
    };

    /* Change View */
    $scope.changeView = function(view) {
      $calendar.fullCalendar('changeView', view);
    };

    /* Change month */
    $scope.changeMonth = function(view) {
      $calendar.fullCalendar(view);
    };

    /* Render Popover */
    $scope.eventRender = function(event, element, view) {
      element.attr({
        'popover': event.title,
        'popover-placement': 'top',
        'popover-trigger': 'mouseenter'
      });
      $compile(element)($scope);
    };

    /* config object */
    $scope.options = {
      header: false,
      editable: true,
      eventLimit: true,
      defaultDate: '2014-11-12',
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource];
  }]);
};
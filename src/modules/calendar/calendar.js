'use strict';

/**
 * Calendar module
 * @desc:
 */
var appCalendar = angular.module('app.calendar', []);

/** routes configs */
require('moduleDir/calendar/configs/routes')(appCalendar);
'use strict';

/**
 * Fullcalendar
 * @desc: provides a full-sized, drag & drop event calendar
 */
module.exports = function (module) {
  /** dependencies */

  /** core script */
  require('fullcalendar');
  require('gcal');

  /** stylesheet */
  require('bowerDir/fullcalendar/dist/fullcalendar.css');
  require('componentDir/fullcalendar/styles/fullcalendar.css');

  /** controllers */
  require('componentDir/fullcalendar/controllers/fullcalendar')(module);

  /** directives */
  require('componentDir/fullcalendar/directives/fullcalendar')(module);
};
'use strict';

/**
 * App module
 * @desc: Main application setup
 */
var app = angular.module('app', [
  /** core modules */
  'app.core',

  /** others modules */
  'app.calendar',
  'app.chart',
  'app.dashboard',
  'app.form',
  'app.mail',
  'app.page',
  'app.setting',
  'app.table',
  'app.ui'
]);

/**
 * load up our modules
 */
require('moduleDir/core/core');
require('moduleDir/calendar/calendar');
require('moduleDir/chart/chart');
require('moduleDir/dashboard/dashboard');
require('moduleDir/form/form');
require('moduleDir/mail/mail');
require('moduleDir/page/page');
require('moduleDir/setting/setting');
require('moduleDir/table/table');
require('moduleDir/ui/ui');

/**
 * bootstrap our App
 */
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});
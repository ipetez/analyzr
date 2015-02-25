'use strict';

/**
 * Dashboard module
 * @desc:
 */
var appDashboard = angular.module('app.dashboard', []);

/** routes configs */
require('moduleDir/dashboard/configs/routes')(appDashboard);
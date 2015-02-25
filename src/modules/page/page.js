'use strict';

/**
 * Page module
 * @desc:
 */
var appPage = angular.module('app.page', []);

/** routes configs */
require('moduleDir/page/configs/routes')(appPage);
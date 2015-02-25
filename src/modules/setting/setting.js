'use strict';

/**
 * Setting module
 * @desc:
 */
var appSetting = angular.module('app.setting', []);

/** routes configs */
require('moduleDir/setting/configs/routes')(appSetting);
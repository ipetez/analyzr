'use strict';

/**
 * Mail module
 * @desc:
 */
var appMail = angular.module('app.mail', []);

/** routes configs */
require('moduleDir/mail/configs/routes')(appMail);
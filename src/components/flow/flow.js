'use strict';

/**
 * Flow
 * @desc: file uploads via the HTML5 File API
 * @credit: http://flowjs.github.io/ng-flow/
 */
module.exports = function (module) {
  /** core script */
  require('expose?Flow!flow');

  /** stylesheet */
  require('componentDir/flow/styles/flow.css');

  /** controllers */
  require('componentDir/flow/controllers/init')(module);

  /** directives */
  require('componentDir/flow/directives/button')(module);
  require('componentDir/flow/directives/drag.events')(module);
  require('componentDir/flow/directives/drop')(module);
  require('componentDir/flow/directives/events')(module);
  require('componentDir/flow/directives/image')(module);
  require('componentDir/flow/directives/transfers')(module);

  /** services */
  require('componentDir/flow/services/provider')(module);
};
'use strict';

/**
 * Datatables
 * @desc: javascript rich table
 */
module.exports = function () {
  /** dependencies */

  /** core script */
  require('datatables');
  require('datatablesBootstrap');

  /** stylesheet */
  require('componentDir/datatable/styles/datatable.css');
};
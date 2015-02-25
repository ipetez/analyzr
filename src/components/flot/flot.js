'use strict';

/**
 * Flot Chart
 * @desc: plotting library for jQuery
 */
module.exports = function () {
  /** core script */
  require('flot');
  require('imports?this=>window!flotResize');
  require('flotCategories');
  require('flotTime');
  require('flotPie');
  require('flotTooltip');
  require('flotSpline');

  /** stylesheet */
  require('componentDir/flot/styles/flot.css');
};
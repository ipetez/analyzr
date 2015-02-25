webpackJsonp([2],Array(48).concat([
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Calendar controller
	 * @desc: 
	 */
	module.exports = function (module) {
	  module.controller('fullCalendarCtrl', ['$scope', '$http', '$compile', 'uiCalendarConfig', function ($scope, $http, $compile, uiCalendarConfig) {
	    var $calendar = jQuery('[ui-calendar]');
	    var date = new Date();
	    var d = date.getDate();
	    var m = date.getMonth();
	    var y = date.getFullYear();

	    /* event source that pulls from google.com */
	    $scope.eventSource = {
	      url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
	      className: 'gcal-event', // an option!
	      currentTimezone: 'America/Chicago' // an option!
	    };

	    /* event source that contains custom events on the scope */
	    $scope.events = [{
	      title: 'All Day Event',
	      start: '2014-11-01'
	    }, {
	      title: 'Long Event',
	      start: '2014-11-07',
	      end: '2014-11-10'
	    }, {
	      id: 999,
	      title: 'Repeating Event',
	      start: '2014-11-09T16:00:00'
	    }, {
	      title: 'Conference',
	      start: '2014-11-11',
	      end: '2014-11-13',
	      className: 'fc-event-danger'
	    }, {
	      title: 'Meeting',
	      start: '2014-11-12T10:30:00',
	      end: '2014-11-12T12:30:00'
	    }, {
	      title: 'Lunch',
	      start: '2014-11-12T12:00:00',
	      className: 'fc-event-danger'
	    }, {
	      title: 'Meeting',
	      start: '2014-11-12T14:30:00',
	      className: 'fc-event-warning'
	    }, {
	      title: 'Happy Hour',
	      start: '2014-11-12T17:30:00'
	    }, {
	      title: 'Dinner',
	      start: '2014-11-12T20:00:00',
	      className: 'fc-event-success'
	    }, {
	      title: 'Birthday Party',
	      start: '2014-11-13T07:00:00',
	      className: 'fc-event-success'
	    }, {
	      title: 'Click for Google',
	      url: 'http://google.com/',
	      start: '2014-11-28'
	    }];

	    /* alert on eventClick */
	    $scope.alertOnEventClick = function(date, jsEvent, view) {
	      $scope.alertMessage = (date.title + ' was clicked ');
	    };

	    /* alert on Drop */
	    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
	      $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
	    };

	    /* alert on Resize */
	    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
	      $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
	    };

	    /* add and removes an event source of choice */
	    $scope.addRemoveEventSource = function(sources, source) {
	      var canAdd = 0;
	      angular.forEach(sources, function(value, key) {
	        if (sources[key] === source) {
	          sources.splice(key, 1);
	          canAdd = 1;
	        }
	      });
	      if (canAdd === 0) {
	        sources.push(source);
	      }
	    };

	    /* add custom event*/
	    $scope.addEvent = function() {
	      $scope.events.push({
	        title: 'Open Sesame',
	        start: new Date(y, m, 28),
	        end: new Date(y, m, 29),
	        className: ['openSesame']
	      });
	    };

	    /* remove event */
	    $scope.remove = function(index) {
	      $scope.events.splice(index, 1);
	    };

	    /* Change View */
	    $scope.changeView = function(view) {
	      $calendar.fullCalendar('changeView', view);
	    };

	    /* Change month */
	    $scope.changeMonth = function(view) {
	      $calendar.fullCalendar(view);
	    };

	    /* Render Popover */
	    $scope.eventRender = function(event, element, view) {
	      element.attr({
	        'popover': event.title,
	        'popover-placement': 'top',
	        'popover-trigger': 'mouseenter'
	      });
	      $compile(element)($scope);
	    };

	    /* config object */
	    $scope.options = {
	      header: false,
	      editable: true,
	      eventLimit: true,
	      defaultDate: '2014-11-12',
	      eventClick: $scope.alertOnEventClick,
	      eventDrop: $scope.alertOnDrop,
	      eventResize: $scope.alertOnResize,
	      eventRender: $scope.eventRender
	    };

	    /* event sources array*/
	    $scope.eventSources = [$scope.events, $scope.eventSource];
	  }]);
	};

/***/ },
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Fullcalendar
	 * @desc: provides a full-sized, drag & drop event calendar
	 */
	module.exports = function (module) {
	  /** dependencies */

	  /** core script */
	  __webpack_require__(102);
	  __webpack_require__(103);

	  /** stylesheet */
	  __webpack_require__(137);
	  __webpack_require__(119);

	  /** controllers */
	  __webpack_require__(90)(module);

	  /** directives */
	  __webpack_require__(91)(module);
	};

/***/ },
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Fullcalendar Controller
	 * @desc: 
	 */
	module.exports = function (module) {
	  module.controller('uiCalendarCtrl', ['$scope', '$timeout', '$locale', function ($scope, $timeout, $locale) {
	    var sourceSerialId = 1,
	      eventSerialId = 1,
	      sources = $scope.eventSources,
	      extraEventSignature = $scope.calendarWatchEvent ? $scope.calendarWatchEvent : angular.noop,

	      wrapFunctionWithScopeApply = function (functionToWrap) {
	        var wrapper;

	        if (functionToWrap) {
	          wrapper = function() {
	            var args = arguments;
	            var _this = this;
	            $timeout(function() {
	              functionToWrap.apply(_this, args);
	            });
	          };
	        }

	        return wrapper;
	      };

	    this.eventsFingerprint = function (e) {
	      if (!e._id) {
	        e._id = eventSerialId++;
	      }
	      return "" + e._id + (e.id || '') + (e.title || '') + (e.url || '') + (+e.start || '') + (+e.end || '') + (e.allDay || '') + (e.className || '') + extraEventSignature(e) || '';
	    };

	    this.sourcesFingerprint = function (source) {
	      return source.__id || (source.__id = sourceSerialId++);
	    };

	    this.allEvents = function () {
	      var arraySources = [];

	      for (var i = 0, srcLen = sources.length; i < srcLen; i++) {
	        var source = sources[i];
	        if (angular.isArray(source)) {
	          // event source as array
	          arraySources.push(source);
	        } else if (angular.isObject(source) && angular.isArray(source.events)) {
	          // event source as object, ie extended form
	          var extEvent = {};
	          for (var key in source) {
	            if (key !== '_uiCalId' && key !== 'events') {
	              extEvent[key] = source[key];
	            }
	          }
	          for (var eI = 0; eI < source.events.length; eI++) {
	            angular.extend(source.events[eI], extEvent);
	          }
	          arraySources.push(source.events);
	        }
	      }

	      return Array.prototype.concat.apply([], arraySources);
	    };

	    // Track changes in array by assigning id tokens to each element and watching the scope for changes in those tokens
	    // arguments:
	    //  arraySource array of function that returns array of objects to watch
	    //  tokenFn function(object) that returns the token for a given object
	    this.changeWatcher = function (arraySource, tokenFn) {
	      var self;
	      var getTokens = function () {
	        var array = angular.isFunction(arraySource) ? arraySource() : arraySource;
	        var result = [],
	          token, el;
	        for (var i = 0, n = array.length; i < n; i++) {
	          el = array[i];
	          token = tokenFn(el);
	          map[token] = el;
	          result.push(token);
	        }
	        return result;
	      };
	      // returns elements in that are in a but not in b
	      // subtractAsSets([4, 5, 6], [4, 5, 7]) => [6]
	      var subtractAsSets = function (a, b) {
	        var result = [],
	          inB = {},
	          i, n;
	        for (i = 0, n = b.length; i < n; i++) {
	          inB[b[i]] = true;
	        }
	        for (i = 0, n = a.length; i < n; i++) {
	          if (!inB[a[i]]) {
	            result.push(a[i]);
	          }
	        }
	        return result;
	      };

	      // Map objects to tokens and vice-versa
	      var map = {};

	      var applyChanges = function (newTokens, oldTokens) {
	        var i, n, el, token;
	        var replacedTokens = {};
	        var removedTokens = subtractAsSets(oldTokens, newTokens);
	        for (i = 0, n = removedTokens.length; i < n; i++) {
	          var removedToken = removedTokens[i];
	          el = map[removedToken];
	          delete map[removedToken];
	          var newToken = tokenFn(el);
	          // if the element wasn't removed but simply got a new token, its old token will be different from the current one
	          if (newToken === removedToken) {
	            self.onRemoved(el);
	          } else {
	            replacedTokens[newToken] = removedToken;
	            self.onChanged(el);
	          }
	        }

	        var addedTokens = subtractAsSets(newTokens, oldTokens);
	        for (i = 0, n = addedTokens.length; i < n; i++) {
	          token = addedTokens[i];
	          el = map[token];
	          if (!replacedTokens[token]) {
	            self.onAdded(el);
	          }
	        }
	      };
	      return self = {
	        subscribe: function (scope, onChanged) {
	          scope.$watch(getTokens, function (newTokens, oldTokens) {
	            if (!onChanged || onChanged(newTokens, oldTokens) !== false) {
	              applyChanges(newTokens, oldTokens);
	            }
	          }, true);
	        },
	        onAdded: angular.noop,
	        onChanged: angular.noop,
	        onRemoved: angular.noop
	      };
	    };

	    this.getFullCalendarConfig = function (calendarSettings, uiCalendarConfig) {
	      var config = {};

	      angular.extend(config, uiCalendarConfig);
	      angular.extend(config, calendarSettings);

	      angular.forEach(config, function(value, key) {
	        if (typeof value === 'function') {
	          config[key] = wrapFunctionWithScopeApply(config[key]);
	        }
	      });

	      return config;
	    };

	    this.getLocaleConfig = function (fullCalendarConfig) {
	      if (!fullCalendarConfig.lang || fullCalendarConfig.useNgLocale) {
	        // Configure to use locale names by default
	        var tValues = function (data) {
	          // convert {0: "Jan", 1: "Feb", ...} to ["Jan", "Feb", ...]
	          var r, k;
	          r = [];
	          for (k in data) {
	            r[k] = data[k];
	          }
	          return r;
	        };
	        var dtf = $locale.DATETIME_FORMATS;
	        return {
	          monthNames: tValues(dtf.MONTH),
	          monthNamesShort: tValues(dtf.SHORTMONTH),
	          dayNames: tValues(dtf.DAY),
	          dayNamesShort: tValues(dtf.SHORTDAY)
	        };
	      }
	      return {};
	    };
	  }]);
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Fullcalendar
	 * @desc:
	 */
	module.exports = function (module) {
	  module.constant('uiCalendarConfig', { calendars: {} });
	  
	  module.directive('uiCalendar', ['uiCalendarConfig', function (uiCalendarConfig) {
	    return {
	      restrict: 'A',
	      scope: {
	        eventSources: '=ngModel',
	        calendarWatchEvent: '&'
	      },
	      controller: 'uiCalendarCtrl',
	      link: function($scope, iElm, iAttrs, controller) {

	        var sources = $scope.eventSources,
	          sourcesChanged = false,
	          calendar,
	          eventSourcesWatcher = controller.changeWatcher(sources, controller.sourcesFingerprint),
	          eventsWatcher = controller.changeWatcher(controller.allEvents, controller.eventsFingerprint),
	          options = null;

	        function getOptions() {
	          var calendarSettings = iAttrs.uiCalendar ? $scope.$parent.$eval(iAttrs.uiCalendar) : {},
	            fullCalendarConfig;

	          fullCalendarConfig = controller.getFullCalendarConfig(calendarSettings, uiCalendarConfig);

	          var localeFullCalendarConfig = controller.getLocaleConfig(fullCalendarConfig);
	          angular.extend(localeFullCalendarConfig, fullCalendarConfig);
	          options = {
	            eventSources: sources
	          };
	          angular.extend(options, localeFullCalendarConfig);
	          //remove calendars from options
	          options.calendars = null;

	          var options2 = {};
	          for (var o in options) {
	            if (o !== 'eventSources') {
	              options2[o] = options[o];
	            }
	          }
	          return JSON.stringify(options2);
	        }

	        $scope.destroy = function () {
	          if (calendar && calendar.fullCalendar) {
	            calendar.fullCalendar('destroy');
	          }
	          if (iAttrs.calendar) {
	            calendar = uiCalendarConfig.calendars[iAttrs.calendar] = $(iElm).html('');
	          } else {
	            calendar = $(iElm).html('');
	          }
	        };

	        $scope.init = function() {
	          calendar.fullCalendar(options);
	        };

	        eventSourcesWatcher.onAdded = function (source) {
	          calendar.fullCalendar('addEventSource', source);
	          sourcesChanged = true;
	        };

	        eventSourcesWatcher.onRemoved = function (source) {
	          calendar.fullCalendar('removeEventSource', source);
	          sourcesChanged = true;
	        };

	        eventsWatcher.onAdded = function (event) {
	          calendar.fullCalendar('renderEvent', event);
	        };

	        eventsWatcher.onRemoved = function (event) {
	          calendar.fullCalendar('removeEvents', function (e) {
	            return e._id === event._id;
	          });
	        };

	        eventsWatcher.onChanged = function (event) {
	          event._start = $.fullCalendar.moment(event.start);
	          event._end = $.fullCalendar.moment(event.end);
	          calendar.fullCalendar('updateEvent', event);
	        };

	        eventSourcesWatcher.subscribe($scope);
	        eventsWatcher.subscribe($scope, function (newTokens, oldTokens) {
	          if (sourcesChanged === true) {
	            sourcesChanged = false;
	            // prevent incremental updates in this case
	            return false;
	          }
	        });

	        $scope.$watch(getOptions, function (newO, oldO) {
	          $scope.destroy();
	          $scope.init();
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * FullCalendar v2.2.7
	 * Docs & License: http://arshaw.com/fullcalendar/
	 * (c) 2013 Adam Shaw
	 */

	(function(factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23), __webpack_require__(141) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		else {
			factory(jQuery, moment);
		}
	})(function($, moment) {

	;;

	var defaults = {

		titleRangeSeparator: ' \u2014 ', // emphasized dash
		monthYearFormat: 'MMMM YYYY', // required for en. other languages rely on datepicker computable option

		defaultTimedEventDuration: '02:00:00',
		defaultAllDayEventDuration: { days: 1 },
		forceEventDuration: false,
		nextDayThreshold: '09:00:00', // 9am

		// display
		defaultView: 'month',
		aspectRatio: 1.35,
		header: {
			left: 'title',
			center: '',
			right: 'today prev,next'
		},
		weekends: true,
		weekNumbers: false,

		weekNumberTitle: 'W',
		weekNumberCalculation: 'local',
		
		//editable: false,
		
		// event ajax
		lazyFetching: true,
		startParam: 'start',
		endParam: 'end',
		timezoneParam: 'timezone',

		timezone: false,

		//allDayDefault: undefined,

		// locale
		isRTL: false,
		defaultButtonText: {
			prev: "prev",
			next: "next",
			prevYear: "prev year",
			nextYear: "next year",
			today: 'today',
			month: 'month',
			week: 'week',
			day: 'day'
		},

		buttonIcons: {
			prev: 'left-single-arrow',
			next: 'right-single-arrow',
			prevYear: 'left-double-arrow',
			nextYear: 'right-double-arrow'
		},
		
		// jquery-ui theming
		theme: false,
		themeButtonIcons: {
			prev: 'circle-triangle-w',
			next: 'circle-triangle-e',
			prevYear: 'seek-prev',
			nextYear: 'seek-next'
		},

		dragOpacity: .75,
		dragRevertDuration: 500,
		dragScroll: true,
		
		//selectable: false,
		unselectAuto: true,
		
		dropAccept: '*',

		eventLimit: false,
		eventLimitText: 'more',
		eventLimitClick: 'popover',
		dayPopoverFormat: 'LL',
		
		handleWindowResize: true,
		windowResizeDelay: 200 // milliseconds before an updateSize happens
		
	};


	var englishDefaults = {
		dayPopoverFormat: 'dddd, MMMM D'
	};


	// right-to-left defaults
	var rtlDefaults = {
		header: {
			left: 'next,prev today',
			center: '',
			right: 'title'
		},
		buttonIcons: {
			prev: 'right-single-arrow',
			next: 'left-single-arrow',
			prevYear: 'right-double-arrow',
			nextYear: 'left-double-arrow'
		},
		themeButtonIcons: {
			prev: 'circle-triangle-e',
			next: 'circle-triangle-w',
			nextYear: 'seek-prev',
			prevYear: 'seek-next'
		}
	};

	;;

	var fc = $.fullCalendar = { version: "2.2.7" };
	var fcViews = fc.views = {};


	$.fn.fullCalendar = function(options) {
		var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
		var res = this; // what this function will return (this jQuery object by default)

		this.each(function(i, _element) { // loop each DOM element involved
			var element = $(_element);
			var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
			var singleRes; // the returned value of this single method call

			// a method call
			if (typeof options === 'string') {
				if (calendar && $.isFunction(calendar[options])) {
					singleRes = calendar[options].apply(calendar, args);
					if (!i) {
						res = singleRes; // record the first method call result
					}
					if (options === 'destroy') { // for the destroy method, must remove Calendar object data
						element.removeData('fullCalendar');
					}
				}
			}
			// a new calendar initialization
			else if (!calendar) { // don't initialize twice
				calendar = new Calendar(element, options);
				element.data('fullCalendar', calendar);
				calendar.render();
			}
		});
		
		return res;
	};


	// function for adding/overriding defaults
	function setDefaults(d) {
		mergeOptions(defaults, d);
	}


	// Recursively combines option hash-objects.
	// Better than `$.extend(true, ...)` because arrays are not traversed/copied.
	//
	// called like:
	//     mergeOptions(target, obj1, obj2, ...)
	//
	function mergeOptions(target) {

		function mergeIntoTarget(name, value) {
			if ($.isPlainObject(value) && $.isPlainObject(target[name]) && !isForcedAtomicOption(name)) {
				// merge into a new object to avoid destruction
				target[name] = mergeOptions({}, target[name], value); // combine. `value` object takes precedence
			}
			else if (value !== undefined) { // only use values that are set and not undefined
				target[name] = value;
			}
		}

		for (var i=1; i<arguments.length; i++) {
			$.each(arguments[i], mergeIntoTarget);
		}

		return target;
	}


	// overcome sucky view-option-hash and option-merging behavior messing with options it shouldn't
	function isForcedAtomicOption(name) {
		// Any option that ends in "Time" or "Duration" is probably a Duration,
		// and these will commonly be specified as plain objects, which we don't want to mess up.
		return /(Time|Duration)$/.test(name);
	}
	// FIX: find a different solution for view-option-hashes and have a whitelist
	// for options that can be recursively merged.

	;;

	var langOptionHash = fc.langs = {}; // initialize and expose


	// TODO: document the structure and ordering of a FullCalendar lang file
	// TODO: rename everything "lang" to "locale", like what the moment project did


	// Initialize jQuery UI datepicker translations while using some of the translations
	// Will set this as the default language for datepicker.
	fc.datepickerLang = function(langCode, dpLangCode, dpOptions) {

		// get the FullCalendar internal option hash for this language. create if necessary
		var fcOptions = langOptionHash[langCode] || (langOptionHash[langCode] = {});

		// transfer some simple options from datepicker to fc
		fcOptions.isRTL = dpOptions.isRTL;
		fcOptions.weekNumberTitle = dpOptions.weekHeader;

		// compute some more complex options from datepicker
		$.each(dpComputableOptions, function(name, func) {
			fcOptions[name] = func(dpOptions);
		});

		// is jQuery UI Datepicker is on the page?
		if ($.datepicker) {

			// Register the language data.
			// FullCalendar and MomentJS use language codes like "pt-br" but Datepicker
			// does it like "pt-BR" or if it doesn't have the language, maybe just "pt".
			// Make an alias so the language can be referenced either way.
			$.datepicker.regional[dpLangCode] =
				$.datepicker.regional[langCode] = // alias
					dpOptions;

			// Alias 'en' to the default language data. Do this every time.
			$.datepicker.regional.en = $.datepicker.regional[''];

			// Set as Datepicker's global defaults.
			$.datepicker.setDefaults(dpOptions);
		}
	};


	// Sets FullCalendar-specific translations. Will set the language as the global default.
	fc.lang = function(langCode, newFcOptions) {
		var fcOptions;
		var momOptions;

		// get the FullCalendar internal option hash for this language. create if necessary
		fcOptions = langOptionHash[langCode] || (langOptionHash[langCode] = {});

		// provided new options for this language? merge them in
		if (newFcOptions) {
			mergeOptions(fcOptions, newFcOptions);
		}

		// compute language options that weren't defined.
		// always do this. newFcOptions can be undefined when initializing from i18n file,
		// so no way to tell if this is an initialization or a default-setting.
		momOptions = getMomentLocaleData(langCode); // will fall back to en
		$.each(momComputableOptions, function(name, func) {
			if (fcOptions[name] === undefined) {
				fcOptions[name] = func(momOptions, fcOptions);
			}
		});

		// set it as the default language for FullCalendar
		defaults.lang = langCode;
	};


	// NOTE: can't guarantee any of these computations will run because not every language has datepicker
	// configs, so make sure there are English fallbacks for these in the defaults file.
	var dpComputableOptions = {

		defaultButtonText: function(dpOptions) {
			return {
				// the translations sometimes wrongly contain HTML entities
				prev: stripHtmlEntities(dpOptions.prevText),
				next: stripHtmlEntities(dpOptions.nextText),
				today: stripHtmlEntities(dpOptions.currentText)
			};
		},

		// Produces format strings like "MMMM YYYY" -> "September 2014"
		monthYearFormat: function(dpOptions) {
			return dpOptions.showMonthAfterYear ?
				'YYYY[' + dpOptions.yearSuffix + '] MMMM' :
				'MMMM YYYY[' + dpOptions.yearSuffix + ']';
		}

	};

	var momComputableOptions = {

		// Produces format strings like "ddd MM/DD" -> "Fri 12/10"
		dayOfMonthFormat: function(momOptions, fcOptions) {
			var format = momOptions.longDateFormat('l'); // for the format like "M/D/YYYY"

			// strip the year off the edge, as well as other misc non-whitespace chars
			format = format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, '');

			if (fcOptions.isRTL) {
				format += ' ddd'; // for RTL, add day-of-week to end
			}
			else {
				format = 'ddd ' + format; // for LTR, add day-of-week to beginning
			}
			return format;
		},

		// Produces format strings like "H(:mm)a" -> "6pm" or "6:30pm"
		smallTimeFormat: function(momOptions) {
			return momOptions.longDateFormat('LT')
				.replace(':mm', '(:mm)')
				.replace(/(\Wmm)$/, '($1)') // like above, but for foreign langs
				.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
		},

		// Produces format strings like "H(:mm)t" -> "6p" or "6:30p"
		extraSmallTimeFormat: function(momOptions) {
			return momOptions.longDateFormat('LT')
				.replace(':mm', '(:mm)')
				.replace(/(\Wmm)$/, '($1)') // like above, but for foreign langs
				.replace(/\s*a$/i, 't'); // convert to AM/PM/am/pm to lowercase one-letter. remove any spaces beforehand
		},

		// Produces format strings like "H:mm" -> "6:30" (with no AM/PM)
		noMeridiemTimeFormat: function(momOptions) {
			return momOptions.longDateFormat('LT')
				.replace(/\s*a$/i, ''); // remove trailing AM/PM
		}

	};


	// Returns moment's internal locale data. If doesn't exist, returns English.
	// Works with moment-pre-2.8
	function getMomentLocaleData(langCode) {
		var func = moment.localeData || moment.langData;
		return func.call(moment, langCode) ||
			func.call(moment, 'en'); // the newer localData could return null, so fall back to en
	}


	// Initialize English by forcing computation of moment-derived options.
	// Also, sets it as the default.
	fc.lang('en', englishDefaults);

	;;

	// exports
	fc.intersectionToSeg = intersectionToSeg;
	fc.applyAll = applyAll;
	fc.debounce = debounce;


	/* FullCalendar-specific DOM Utilities
	----------------------------------------------------------------------------------------------------------------------*/


	// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
	// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
	function compensateScroll(rowEls, scrollbarWidths) {
		if (scrollbarWidths.left) {
			rowEls.css({
				'border-left-width': 1,
				'margin-left': scrollbarWidths.left - 1
			});
		}
		if (scrollbarWidths.right) {
			rowEls.css({
				'border-right-width': 1,
				'margin-right': scrollbarWidths.right - 1
			});
		}
	}


	// Undoes compensateScroll and restores all borders/margins
	function uncompensateScroll(rowEls) {
		rowEls.css({
			'margin-left': '',
			'margin-right': '',
			'border-left-width': '',
			'border-right-width': ''
		});
	}


	// Make the mouse cursor express that an event is not allowed in the current area
	function disableCursor() {
		$('body').addClass('fc-not-allowed');
	}


	// Returns the mouse cursor to its original look
	function enableCursor() {
		$('body').removeClass('fc-not-allowed');
	}


	// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
	// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
	// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and 
	// reduces the available height.
	function distributeHeight(els, availableHeight, shouldRedistribute) {

		// *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
		// and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.

		var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
		var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
		var flexEls = []; // elements that are allowed to expand. array of DOM nodes
		var flexOffsets = []; // amount of vertical space it takes up
		var flexHeights = []; // actual css height
		var usedHeight = 0;

		undistributeHeight(els); // give all elements their natural height

		// find elements that are below the recommended height (expandable).
		// important to query for heights in a single first pass (to avoid reflow oscillation).
		els.each(function(i, el) {
			var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
			var naturalOffset = $(el).outerHeight(true);

			if (naturalOffset < minOffset) {
				flexEls.push(el);
				flexOffsets.push(naturalOffset);
				flexHeights.push($(el).height());
			}
			else {
				// this element stretches past recommended height (non-expandable). mark the space as occupied.
				usedHeight += naturalOffset;
			}
		});

		// readjust the recommended height to only consider the height available to non-maxed-out rows.
		if (shouldRedistribute) {
			availableHeight -= usedHeight;
			minOffset1 = Math.floor(availableHeight / flexEls.length);
			minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
		}

		// assign heights to all expandable elements
		$(flexEls).each(function(i, el) {
			var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
			var naturalOffset = flexOffsets[i];
			var naturalHeight = flexHeights[i];
			var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding

			if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
				$(el).height(newHeight);
			}
		});
	}


	// Undoes distrubuteHeight, restoring all els to their natural height
	function undistributeHeight(els) {
		els.height('');
	}


	// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
	// cells to be that width.
	// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
	function matchCellWidths(els) {
		var maxInnerWidth = 0;

		els.find('> *').each(function(i, innerEl) {
			var innerWidth = $(innerEl).outerWidth();
			if (innerWidth > maxInnerWidth) {
				maxInnerWidth = innerWidth;
			}
		});

		maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance

		els.width(maxInnerWidth);

		return maxInnerWidth;
	}


	// Turns a container element into a scroller if its contents is taller than the allotted height.
	// Returns true if the element is now a scroller, false otherwise.
	// NOTE: this method is best because it takes weird zooming dimensions into account
	function setPotentialScroller(containerEl, height) {
		containerEl.height(height).addClass('fc-scroller');

		// are scrollbars needed?
		if (containerEl[0].scrollHeight - 1 > containerEl[0].clientHeight) { // !!! -1 because IE is often off-by-one :(
			return true;
		}

		unsetScroller(containerEl); // undo
		return false;
	}


	// Takes an element that might have been a scroller, and turns it back into a normal element.
	function unsetScroller(containerEl) {
		containerEl.height('').removeClass('fc-scroller');
	}


	/* General DOM Utilities
	----------------------------------------------------------------------------------------------------------------------*/


	// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
	function getScrollParent(el) {
		var position = el.css('position'),
			scrollParent = el.parents().filter(function() {
				var parent = $(this);
				return (/(auto|scroll)/).test(
					parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x')
				);
			}).eq(0);

		return position === 'fixed' || !scrollParent.length ? $(el[0].ownerDocument || document) : scrollParent;
	}


	// Given a container element, return an object with the pixel values of the left/right scrollbars.
	// Left scrollbars might occur on RTL browsers (IE maybe?) but I have not tested.
	// PREREQUISITE: container element must have a single child with display:block
	function getScrollbarWidths(container) {
		var containerLeft = container.offset().left;
		var containerRight = containerLeft + container.width();
		var inner = container.children();
		var innerLeft = inner.offset().left;
		var innerRight = innerLeft + inner.outerWidth();

		return {
			left: innerLeft - containerLeft,
			right: containerRight - innerRight
		};
	}


	// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
	function isPrimaryMouseButton(ev) {
		return ev.which == 1 && !ev.ctrlKey;
	}


	/* FullCalendar-specific Misc Utilities
	----------------------------------------------------------------------------------------------------------------------*/


	// Creates a basic segment with the intersection of the two ranges. Returns undefined if no intersection.
	// Expects all dates to be normalized to the same timezone beforehand.
	// TODO: move to date section?
	function intersectionToSeg(subjectRange, constraintRange) {
		var subjectStart = subjectRange.start;
		var subjectEnd = subjectRange.end;
		var constraintStart = constraintRange.start;
		var constraintEnd = constraintRange.end;
		var segStart, segEnd;
		var isStart, isEnd;

		if (subjectEnd > constraintStart && subjectStart < constraintEnd) { // in bounds at all?

			if (subjectStart >= constraintStart) {
				segStart = subjectStart.clone();
				isStart = true;
			}
			else {
				segStart = constraintStart.clone();
				isStart =  false;
			}

			if (subjectEnd <= constraintEnd) {
				segEnd = subjectEnd.clone();
				isEnd = true;
			}
			else {
				segEnd = constraintEnd.clone();
				isEnd = false;
			}

			return {
				start: segStart,
				end: segEnd,
				isStart: isStart,
				isEnd: isEnd
			};
		}
	}


	function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object
		obj = obj || {};
		if (obj[name] !== undefined) {
			return obj[name];
		}
		var parts = name.split(/(?=[A-Z])/),
			i = parts.length - 1, res;
		for (; i>=0; i--) {
			res = obj[parts[i].toLowerCase()];
			if (res !== undefined) {
				return res;
			}
		}
		return obj['default'];
	}


	/* Date Utilities
	----------------------------------------------------------------------------------------------------------------------*/

	var dayIDs = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
	var intervalUnits = [ 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond' ];


	// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
	// Moments will have their timezones normalized.
	function diffDayTime(a, b) {
		return moment.duration({
			days: a.clone().stripTime().diff(b.clone().stripTime(), 'days'),
			ms: a.time() - b.time() // time-of-day from day start. disregards timezone
		});
	}


	// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
	function diffDay(a, b) {
		return moment.duration({
			days: a.clone().stripTime().diff(b.clone().stripTime(), 'days')
		});
	}


	// Computes the unit name of the largest whole-unit period of time.
	// For example, 48 hours will be "days" whereas 49 hours will be "hours".
	// Accepts start/end, a range object, or an original duration object.
	function computeIntervalUnit(start, end) {
		var i, unit;
		var val;

		for (i = 0; i < intervalUnits.length; i++) {
			unit = intervalUnits[i];
			val = computeRangeAs(unit, start, end);

			if (val >= 1 && isInt(val)) {
				break;
			}
		}

		return unit; // will be "milliseconds" if nothing else matches
	}


	// Computes the number of units (like "hours") in the given range.
	// Range can be a {start,end} object, separate start/end args, or a Duration.
	// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
	// of month-diffing logic (which tends to vary from version to version).
	function computeRangeAs(unit, start, end) {

		if (end != null) { // given start, end
			return end.diff(start, unit, true);
		}
		else if (moment.isDuration(start)) { // given duration
			return start.as(unit);
		}
		else { // given { start, end } range object
			return start.end.diff(start.start, unit, true);
		}
	}


	function isNativeDate(input) {
		return  Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
	}


	// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
	function isTimeString(str) {
		return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
	}


	/* General Utilities
	----------------------------------------------------------------------------------------------------------------------*/

	var hasOwnPropMethod = {}.hasOwnProperty;


	// Create an object that has the given prototype. Just like Object.create
	function createObject(proto) {
		var f = function() {};
		f.prototype = proto;
		return new f();
	}


	function copyOwnProps(src, dest) {
		for (var name in src) {
			if (hasOwnProp(src, name)) {
				dest[name] = src[name];
			}
		}
	}


	function hasOwnProp(obj, name) {
		return hasOwnPropMethod.call(obj, name);
	}


	// Is the given value a non-object non-function value?
	function isAtomic(val) {
		return /undefined|null|boolean|number|string/.test($.type(val));
	}


	function applyAll(functions, thisObj, args) {
		if ($.isFunction(functions)) {
			functions = [ functions ];
		}
		if (functions) {
			var i;
			var ret;
			for (i=0; i<functions.length; i++) {
				ret = functions[i].apply(thisObj, args) || ret;
			}
			return ret;
		}
	}


	function firstDefined() {
		for (var i=0; i<arguments.length; i++) {
			if (arguments[i] !== undefined) {
				return arguments[i];
			}
		}
	}


	function htmlEscape(s) {
		return (s + '').replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/'/g, '&#039;')
			.replace(/"/g, '&quot;')
			.replace(/\n/g, '<br />');
	}


	function stripHtmlEntities(text) {
		return text.replace(/&.*?;/g, '');
	}


	function capitaliseFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}


	function compareNumbers(a, b) { // for .sort()
		return a - b;
	}


	function isInt(n) {
		return n % 1 === 0;
	}


	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds.
	// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
	function debounce(func, wait) {
		var timeoutId;
		var args;
		var context;
		var timestamp; // of most recent call
		var later = function() {
			var last = +new Date() - timestamp;
			if (last < wait && last > 0) {
				timeoutId = setTimeout(later, wait - last);
			}
			else {
				timeoutId = null;
				func.apply(context, args);
				if (!timeoutId) {
					context = args = null;
				}
			}
		};

		return function() {
			context = this;
			args = arguments;
			timestamp = +new Date();
			if (!timeoutId) {
				timeoutId = setTimeout(later, wait);
			}
		};
	}

	;;

	var ambigDateOfMonthRegex = /^\s*\d{4}-\d\d$/;
	var ambigTimeOrZoneRegex =
		/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
	var newMomentProto = moment.fn; // where we will attach our new methods
	var oldMomentProto = $.extend({}, newMomentProto); // copy of original moment methods
	var allowValueOptimization;
	var setUTCValues; // function defined below
	var setLocalValues; // function defined below


	// Creating
	// -------------------------------------------------------------------------------------------------

	// Creates a new moment, similar to the vanilla moment(...) constructor, but with
	// extra features (ambiguous time, enhanced formatting). When given an existing moment,
	// it will function as a clone (and retain the zone of the moment). Anything else will
	// result in a moment in the local zone.
	fc.moment = function() {
		return makeMoment(arguments);
	};

	// Sames as fc.moment, but forces the resulting moment to be in the UTC timezone.
	fc.moment.utc = function() {
		var mom = makeMoment(arguments, true);

		// Force it into UTC because makeMoment doesn't guarantee it
		// (if given a pre-existing moment for example)
		if (mom.hasTime()) { // don't give ambiguously-timed moments a UTC zone
			mom.utc();
		}

		return mom;
	};

	// Same as fc.moment, but when given an ISO8601 string, the timezone offset is preserved.
	// ISO8601 strings with no timezone offset will become ambiguously zoned.
	fc.moment.parseZone = function() {
		return makeMoment(arguments, true, true);
	};

	// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
	// native Date, or called with no arguments (the current time), the resulting moment will be local.
	// Anything else needs to be "parsed" (a string or an array), and will be affected by:
	//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
	//    parseZone - if there is zone information, should we force the zone of the moment?
	function makeMoment(args, parseAsUTC, parseZone) {
		var input = args[0];
		var isSingleString = args.length == 1 && typeof input === 'string';
		var isAmbigTime;
		var isAmbigZone;
		var ambigMatch;
		var mom;

		if (moment.isMoment(input)) {
			mom = moment.apply(null, args); // clone it
			transferAmbigs(input, mom); // the ambig flags weren't transfered with the clone
		}
		else if (isNativeDate(input) || input === undefined) {
			mom = moment.apply(null, args); // will be local
		}
		else { // "parsing" is required
			isAmbigTime = false;
			isAmbigZone = false;

			if (isSingleString) {
				if (ambigDateOfMonthRegex.test(input)) {
					// accept strings like '2014-05', but convert to the first of the month
					input += '-01';
					args = [ input ]; // for when we pass it on to moment's constructor
					isAmbigTime = true;
					isAmbigZone = true;
				}
				else if ((ambigMatch = ambigTimeOrZoneRegex.exec(input))) {
					isAmbigTime = !ambigMatch[5]; // no time part?
					isAmbigZone = true;
				}
			}
			else if ($.isArray(input)) {
				// arrays have no timezone information, so assume ambiguous zone
				isAmbigZone = true;
			}
			// otherwise, probably a string with a format

			if (parseAsUTC || isAmbigTime) {
				mom = moment.utc.apply(moment, args);
			}
			else {
				mom = moment.apply(null, args);
			}

			if (isAmbigTime) {
				mom._ambigTime = true;
				mom._ambigZone = true; // ambiguous time always means ambiguous zone
			}
			else if (parseZone) { // let's record the inputted zone somehow
				if (isAmbigZone) {
					mom._ambigZone = true;
				}
				else if (isSingleString) {
					mom.zone(input); // if not a valid zone, will assign UTC
				}
			}
		}

		mom._fullCalendar = true; // flag for extended functionality

		return mom;
	}


	// A clone method that works with the flags related to our enhanced functionality.
	// In the future, use moment.momentProperties
	newMomentProto.clone = function() {
		var mom = oldMomentProto.clone.apply(this, arguments);

		// these flags weren't transfered with the clone
		transferAmbigs(this, mom);
		if (this._fullCalendar) {
			mom._fullCalendar = true;
		}

		return mom;
	};


	// Time-of-day
	// -------------------------------------------------------------------------------------------------

	// GETTER
	// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
	// If the moment has an ambiguous time, a duration of 00:00 will be returned.
	//
	// SETTER
	// You can supply a Duration, a Moment, or a Duration-like argument.
	// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
	newMomentProto.time = function(time) {

		// Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
		// `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
		if (!this._fullCalendar) {
			return oldMomentProto.time.apply(this, arguments);
		}

		if (time == null) { // getter
			return moment.duration({
				hours: this.hours(),
				minutes: this.minutes(),
				seconds: this.seconds(),
				milliseconds: this.milliseconds()
			});
		}
		else { // setter

			this._ambigTime = false; // mark that the moment now has a time

			if (!moment.isDuration(time) && !moment.isMoment(time)) {
				time = moment.duration(time);
			}

			// The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
			// Only for Duration times, not Moment times.
			var dayHours = 0;
			if (moment.isDuration(time)) {
				dayHours = Math.floor(time.asDays()) * 24;
			}

			// We need to set the individual fields.
			// Can't use startOf('day') then add duration. In case of DST at start of day.
			return this.hours(dayHours + time.hours())
				.minutes(time.minutes())
				.seconds(time.seconds())
				.milliseconds(time.milliseconds());
		}
	};

	// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
	// but preserving its YMD. A moment with a stripped time will display no time
	// nor timezone offset when .format() is called.
	newMomentProto.stripTime = function() {
		var a;

		if (!this._ambigTime) {

			// get the values before any conversion happens
			a = this.toArray(); // array of y/m/d/h/m/s/ms

			// TODO: use keepLocalTime in the future
			this.utc(); // set the internal UTC flag (will clear the ambig flags)
			setUTCValues(this, a.slice(0, 3)); // set the year/month/date. time will be zero

			// Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
			// which clears all ambig flags. Same with setUTCValues with moment-timezone.
			this._ambigTime = true;
			this._ambigZone = true; // if ambiguous time, also ambiguous timezone offset
		}

		return this; // for chaining
	};

	// Returns if the moment has a non-ambiguous time (boolean)
	newMomentProto.hasTime = function() {
		return !this._ambigTime;
	};


	// Timezone
	// -------------------------------------------------------------------------------------------------

	// Converts the moment to UTC, stripping out its timezone offset, but preserving its
	// YMD and time-of-day. A moment with a stripped timezone offset will display no
	// timezone offset when .format() is called.
	// TODO: look into Moment's keepLocalTime functionality
	newMomentProto.stripZone = function() {
		var a, wasAmbigTime;

		if (!this._ambigZone) {

			// get the values before any conversion happens
			a = this.toArray(); // array of y/m/d/h/m/s/ms
			wasAmbigTime = this._ambigTime;

			this.utc(); // set the internal UTC flag (might clear the ambig flags, depending on Moment internals)
			setUTCValues(this, a); // will set the year/month/date/hours/minutes/seconds/ms

			// the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
			this._ambigTime = wasAmbigTime || false;

			// Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
			// which clears the ambig flags. Same with setUTCValues with moment-timezone.
			this._ambigZone = true;
		}

		return this; // for chaining
	};

	// Returns of the moment has a non-ambiguous timezone offset (boolean)
	newMomentProto.hasZone = function() {
		return !this._ambigZone;
	};


	// this method implicitly marks a zone
	newMomentProto.local = function() {
		var a = this.toArray(); // year,month,date,hours,minutes,seconds,ms as an array
		var wasAmbigZone = this._ambigZone;

		oldMomentProto.local.apply(this, arguments);

		// ensure non-ambiguous
		// this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
		this._ambigTime = false;
		this._ambigZone = false;

		if (wasAmbigZone) {
			// If the moment was ambiguously zoned, the date fields were stored as UTC.
			// We want to preserve these, but in local time.
			// TODO: look into Moment's keepLocalTime functionality
			setLocalValues(this, a);
		}

		return this; // for chaining
	};


	// implicitly marks a zone
	newMomentProto.utc = function() {
		oldMomentProto.utc.apply(this, arguments);

		// ensure non-ambiguous
		// this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
		this._ambigTime = false;
		this._ambigZone = false;

		return this;
	};


	// methods for arbitrarily manipulating timezone offset.
	// should clear time/zone ambiguity when called.
	$.each([
		'zone', // only in moment-pre-2.9. deprecated afterwards
		'utcOffset'
	], function(i, name) {
		if (oldMomentProto[name]) { // original method exists?

			// this method implicitly marks a zone (will probably get called upon .utc() and .local())
			newMomentProto[name] = function(tzo) {

				if (tzo != null) { // setter
					// these assignments needs to happen before the original zone method is called.
					// I forget why, something to do with a browser crash.
					this._ambigTime = false;
					this._ambigZone = false;
				}

				return oldMomentProto[name].apply(this, arguments);
			};
		}
	});


	// Formatting
	// -------------------------------------------------------------------------------------------------

	newMomentProto.format = function() {
		if (this._fullCalendar && arguments[0]) { // an enhanced moment? and a format string provided?
			return formatDate(this, arguments[0]); // our extended formatting
		}
		if (this._ambigTime) {
			return oldMomentFormat(this, 'YYYY-MM-DD');
		}
		if (this._ambigZone) {
			return oldMomentFormat(this, 'YYYY-MM-DD[T]HH:mm:ss');
		}
		return oldMomentProto.format.apply(this, arguments);
	};

	newMomentProto.toISOString = function() {
		if (this._ambigTime) {
			return oldMomentFormat(this, 'YYYY-MM-DD');
		}
		if (this._ambigZone) {
			return oldMomentFormat(this, 'YYYY-MM-DD[T]HH:mm:ss');
		}
		return oldMomentProto.toISOString.apply(this, arguments);
	};


	// Querying
	// -------------------------------------------------------------------------------------------------

	// Is the moment within the specified range? `end` is exclusive.
	// FYI, this method is not a standard Moment method, so always do our enhanced logic.
	newMomentProto.isWithin = function(start, end) {
		var a = commonlyAmbiguate([ this, start, end ]);
		return a[0] >= a[1] && a[0] < a[2];
	};

	// When isSame is called with units, timezone ambiguity is normalized before the comparison happens.
	// If no units specified, the two moments must be identically the same, with matching ambig flags.
	newMomentProto.isSame = function(input, units) {
		var a;

		// only do custom logic if this is an enhanced moment
		if (!this._fullCalendar) {
			return oldMomentProto.isSame.apply(this, arguments);
		}

		if (units) {
			a = commonlyAmbiguate([ this, input ], true); // normalize timezones but don't erase times
			return oldMomentProto.isSame.call(a[0], a[1], units);
		}
		else {
			input = fc.moment.parseZone(input); // normalize input
			return oldMomentProto.isSame.call(this, input) &&
				Boolean(this._ambigTime) === Boolean(input._ambigTime) &&
				Boolean(this._ambigZone) === Boolean(input._ambigZone);
		}
	};

	// Make these query methods work with ambiguous moments
	$.each([
		'isBefore',
		'isAfter'
	], function(i, methodName) {
		newMomentProto[methodName] = function(input, units) {
			var a;

			// only do custom logic if this is an enhanced moment
			if (!this._fullCalendar) {
				return oldMomentProto[methodName].apply(this, arguments);
			}

			a = commonlyAmbiguate([ this, input ]);
			return oldMomentProto[methodName].call(a[0], a[1], units);
		};
	});


	// Misc Internals
	// -------------------------------------------------------------------------------------------------

	// given an array of moment-like inputs, return a parallel array w/ moments similarly ambiguated.
	// for example, of one moment has ambig time, but not others, all moments will have their time stripped.
	// set `preserveTime` to `true` to keep times, but only normalize zone ambiguity.
	// returns the original moments if no modifications are necessary.
	function commonlyAmbiguate(inputs, preserveTime) {
		var anyAmbigTime = false;
		var anyAmbigZone = false;
		var len = inputs.length;
		var moms = [];
		var i, mom;

		// parse inputs into real moments and query their ambig flags
		for (i = 0; i < len; i++) {
			mom = inputs[i];
			if (!moment.isMoment(mom)) {
				mom = fc.moment.parseZone(mom);
			}
			anyAmbigTime = anyAmbigTime || mom._ambigTime;
			anyAmbigZone = anyAmbigZone || mom._ambigZone;
			moms.push(mom);
		}

		// strip each moment down to lowest common ambiguity
		// use clones to avoid modifying the original moments
		for (i = 0; i < len; i++) {
			mom = moms[i];
			if (!preserveTime && anyAmbigTime && !mom._ambigTime) {
				moms[i] = mom.clone().stripTime();
			}
			else if (anyAmbigZone && !mom._ambigZone) {
				moms[i] = mom.clone().stripZone();
			}
		}

		return moms;
	}

	// Transfers all the flags related to ambiguous time/zone from the `src` moment to the `dest` moment
	function transferAmbigs(src, dest) {
		if (src._ambigTime) {
			dest._ambigTime = true;
		}
		else if (dest._ambigTime) {
			dest._ambigTime = false;
		}

		if (src._ambigZone) {
			dest._ambigZone = true;
		}
		else if (dest._ambigZone) {
			dest._ambigZone = false;
		}
	}


	// Sets the year/month/date/etc values of the moment from the given array.
	// Inefficient because it calls each individual setter.
	function setMomentValues(mom, a) {
		mom.year(a[0] || 0)
			.month(a[1] || 0)
			.date(a[2] || 0)
			.hours(a[3] || 0)
			.minutes(a[4] || 0)
			.seconds(a[5] || 0)
			.milliseconds(a[6] || 0);
	}

	// Can we set the moment's internal date directly?
	allowValueOptimization = '_d' in moment() && 'updateOffset' in moment;

	// Utility function. Accepts a moment and an array of the UTC year/month/date/etc values to set.
	// Assumes the given moment is already in UTC mode.
	setUTCValues = allowValueOptimization ? function(mom, a) {
		// simlate what moment's accessors do
		mom._d.setTime(Date.UTC.apply(Date, a));
		moment.updateOffset(mom, false); // keepTime=false
	} : setMomentValues;

	// Utility function. Accepts a moment and an array of the local year/month/date/etc values to set.
	// Assumes the given moment is already in local mode.
	setLocalValues = allowValueOptimization ? function(mom, a) {
		// simlate what moment's accessors do
		mom._d.setTime(+new Date( // FYI, there is now way to apply an array of args to a constructor
			a[0] || 0,
			a[1] || 0,
			a[2] || 0,
			a[3] || 0,
			a[4] || 0,
			a[5] || 0,
			a[6] || 0
		));
		moment.updateOffset(mom, false); // keepTime=false
	} : setMomentValues;

	;;

	// Single Date Formatting
	// -------------------------------------------------------------------------------------------------


	// call this if you want Moment's original format method to be used
	function oldMomentFormat(mom, formatStr) {
		return oldMomentProto.format.call(mom, formatStr); // oldMomentProto defined in moment-ext.js
	}


	// Formats `date` with a Moment formatting string, but allow our non-zero areas and
	// additional token.
	function formatDate(date, formatStr) {
		return formatDateWithChunks(date, getFormatStringChunks(formatStr));
	}


	function formatDateWithChunks(date, chunks) {
		var s = '';
		var i;

		for (i=0; i<chunks.length; i++) {
			s += formatDateWithChunk(date, chunks[i]);
		}

		return s;
	}


	// addition formatting tokens we want recognized
	var tokenOverrides = {
		t: function(date) { // "a" or "p"
			return oldMomentFormat(date, 'a').charAt(0);
		},
		T: function(date) { // "A" or "P"
			return oldMomentFormat(date, 'A').charAt(0);
		}
	};


	function formatDateWithChunk(date, chunk) {
		var token;
		var maybeStr;

		if (typeof chunk === 'string') { // a literal string
			return chunk;
		}
		else if ((token = chunk.token)) { // a token, like "YYYY"
			if (tokenOverrides[token]) {
				return tokenOverrides[token](date); // use our custom token
			}
			return oldMomentFormat(date, token);
		}
		else if (chunk.maybe) { // a grouping of other chunks that must be non-zero
			maybeStr = formatDateWithChunks(date, chunk.maybe);
			if (maybeStr.match(/[1-9]/)) {
				return maybeStr;
			}
		}

		return '';
	}


	// Date Range Formatting
	// -------------------------------------------------------------------------------------------------
	// TODO: make it work with timezone offset

	// Using a formatting string meant for a single date, generate a range string, like
	// "Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
	// If the dates are the same as far as the format string is concerned, just return a single
	// rendering of one date, without any separator.
	function formatRange(date1, date2, formatStr, separator, isRTL) {
		var localeData;

		date1 = fc.moment.parseZone(date1);
		date2 = fc.moment.parseZone(date2);

		localeData = (date1.localeData || date1.lang).call(date1); // works with moment-pre-2.8

		// Expand localized format strings, like "LL" -> "MMMM D YYYY"
		formatStr = localeData.longDateFormat(formatStr) || formatStr;
		// BTW, this is not important for `formatDate` because it is impossible to put custom tokens
		// or non-zero areas in Moment's localized format strings.

		separator = separator || ' - ';

		return formatRangeWithChunks(
			date1,
			date2,
			getFormatStringChunks(formatStr),
			separator,
			isRTL
		);
	}
	fc.formatRange = formatRange; // expose


	function formatRangeWithChunks(date1, date2, chunks, separator, isRTL) {
		var chunkStr; // the rendering of the chunk
		var leftI;
		var leftStr = '';
		var rightI;
		var rightStr = '';
		var middleI;
		var middleStr1 = '';
		var middleStr2 = '';
		var middleStr = '';

		// Start at the leftmost side of the formatting string and continue until you hit a token
		// that is not the same between dates.
		for (leftI=0; leftI<chunks.length; leftI++) {
			chunkStr = formatSimilarChunk(date1, date2, chunks[leftI]);
			if (chunkStr === false) {
				break;
			}
			leftStr += chunkStr;
		}

		// Similarly, start at the rightmost side of the formatting string and move left
		for (rightI=chunks.length-1; rightI>leftI; rightI--) {
			chunkStr = formatSimilarChunk(date1, date2, chunks[rightI]);
			if (chunkStr === false) {
				break;
			}
			rightStr = chunkStr + rightStr;
		}

		// The area in the middle is different for both of the dates.
		// Collect them distinctly so we can jam them together later.
		for (middleI=leftI; middleI<=rightI; middleI++) {
			middleStr1 += formatDateWithChunk(date1, chunks[middleI]);
			middleStr2 += formatDateWithChunk(date2, chunks[middleI]);
		}

		if (middleStr1 || middleStr2) {
			if (isRTL) {
				middleStr = middleStr2 + separator + middleStr1;
			}
			else {
				middleStr = middleStr1 + separator + middleStr2;
			}
		}

		return leftStr + middleStr + rightStr;
	}


	var similarUnitMap = {
		Y: 'year',
		M: 'month',
		D: 'day', // day of month
		d: 'day', // day of week
		// prevents a separator between anything time-related...
		A: 'second', // AM/PM
		a: 'second', // am/pm
		T: 'second', // A/P
		t: 'second', // a/p
		H: 'second', // hour (24)
		h: 'second', // hour (12)
		m: 'second', // minute
		s: 'second' // second
	};
	// TODO: week maybe?


	// Given a formatting chunk, and given that both dates are similar in the regard the
	// formatting chunk is concerned, format date1 against `chunk`. Otherwise, return `false`.
	function formatSimilarChunk(date1, date2, chunk) {
		var token;
		var unit;

		if (typeof chunk === 'string') { // a literal string
			return chunk;
		}
		else if ((token = chunk.token)) {
			unit = similarUnitMap[token.charAt(0)];
			// are the dates the same for this unit of measurement?
			if (unit && date1.isSame(date2, unit)) {
				return oldMomentFormat(date1, token); // would be the same if we used `date2`
				// BTW, don't support custom tokens
			}
		}

		return false; // the chunk is NOT the same for the two dates
		// BTW, don't support splitting on non-zero areas
	}


	// Chunking Utils
	// -------------------------------------------------------------------------------------------------


	var formatStringChunkCache = {};


	function getFormatStringChunks(formatStr) {
		if (formatStr in formatStringChunkCache) {
			return formatStringChunkCache[formatStr];
		}
		return (formatStringChunkCache[formatStr] = chunkFormatString(formatStr));
	}


	// Break the formatting string into an array of chunks
	function chunkFormatString(formatStr) {
		var chunks = [];
		var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g; // TODO: more descrimination
		var match;

		while ((match = chunker.exec(formatStr))) {
			if (match[1]) { // a literal string inside [ ... ]
				chunks.push(match[1]);
			}
			else if (match[2]) { // non-zero formatting inside ( ... )
				chunks.push({ maybe: chunkFormatString(match[2]) });
			}
			else if (match[3]) { // a formatting token
				chunks.push({ token: match[3] });
			}
			else if (match[5]) { // an unenclosed literal string
				chunks.push(match[5]);
			}
		}

		return chunks;
	}

	;;

	fc.Class = Class; // export

	// class that all other classes will inherit from
	function Class() { }

	// called upon a class to create a subclass
	Class.extend = function(members) {
		var superClass = this;
		var subClass;

		members = members || {};

		// ensure a constructor for the subclass, forwarding all arguments to the super-constructor if it doesn't exist
		if (hasOwnProp(members, 'constructor')) {
			subClass = members.constructor;
		}
		if (typeof subClass !== 'function') {
			subClass = members.constructor = function() {
				superClass.apply(this, arguments);
			};
		}

		// build the base prototype for the subclass, which is an new object chained to the superclass's prototype
		subClass.prototype = createObject(superClass.prototype);

		// copy each member variable/method onto the the subclass's prototype
		copyOwnProps(members, subClass.prototype);

		// copy over all class variables/methods to the subclass, such as `extend` and `mixin`
		copyOwnProps(superClass, subClass);

		return subClass;
	};

	// adds new member variables/methods to the class's prototype.
	// can be called with another class, or a plain object hash containing new members.
	Class.mixin = function(members) {
		copyOwnProps(members.prototype || members, this.prototype);
	};
	;;

	/* A rectangular panel that is absolutely positioned over other content
	------------------------------------------------------------------------------------------------------------------------
	Options:
		- className (string)
		- content (HTML string or jQuery element set)
		- parentEl
		- top
		- left
		- right (the x coord of where the right edge should be. not a "CSS" right)
		- autoHide (boolean)
		- show (callback)
		- hide (callback)
	*/

	var Popover = Class.extend({

		isHidden: true,
		options: null,
		el: null, // the container element for the popover. generated by this object
		documentMousedownProxy: null, // document mousedown handler bound to `this`
		margin: 10, // the space required between the popover and the edges of the scroll container


		constructor: function(options) {
			this.options = options || {};
		},


		// Shows the popover on the specified position. Renders it if not already
		show: function() {
			if (this.isHidden) {
				if (!this.el) {
					this.render();
				}
				this.el.show();
				this.position();
				this.isHidden = false;
				this.trigger('show');
			}
		},


		// Hides the popover, through CSS, but does not remove it from the DOM
		hide: function() {
			if (!this.isHidden) {
				this.el.hide();
				this.isHidden = true;
				this.trigger('hide');
			}
		},


		// Creates `this.el` and renders content inside of it
		render: function() {
			var _this = this;
			var options = this.options;

			this.el = $('<div class="fc-popover"/>')
				.addClass(options.className || '')
				.css({
					// position initially to the top left to avoid creating scrollbars
					top: 0,
					left: 0
				})
				.append(options.content)
				.appendTo(options.parentEl);

			// when a click happens on anything inside with a 'fc-close' className, hide the popover
			this.el.on('click', '.fc-close', function() {
				_this.hide();
			});

			if (options.autoHide) {
				$(document).on('mousedown', this.documentMousedownProxy = $.proxy(this, 'documentMousedown'));
			}
		},


		// Triggered when the user clicks *anywhere* in the document, for the autoHide feature
		documentMousedown: function(ev) {
			// only hide the popover if the click happened outside the popover
			if (this.el && !$(ev.target).closest(this.el).length) {
				this.hide();
			}
		},


		// Hides and unregisters any handlers
		destroy: function() {
			this.hide();

			if (this.el) {
				this.el.remove();
				this.el = null;
			}

			$(document).off('mousedown', this.documentMousedownProxy);
		},


		// Positions the popover optimally, using the top/left/right options
		position: function() {
			var options = this.options;
			var origin = this.el.offsetParent().offset();
			var width = this.el.outerWidth();
			var height = this.el.outerHeight();
			var windowEl = $(window);
			var viewportEl = getScrollParent(this.el);
			var viewportTop;
			var viewportLeft;
			var viewportOffset;
			var top; // the "position" (not "offset") values for the popover
			var left; //

			// compute top and left
			top = options.top || 0;
			if (options.left !== undefined) {
				left = options.left;
			}
			else if (options.right !== undefined) {
				left = options.right - width; // derive the left value from the right value
			}
			else {
				left = 0;
			}

			if (viewportEl.is(window) || viewportEl.is(document)) { // normalize getScrollParent's result
				viewportEl = windowEl;
				viewportTop = 0; // the window is always at the top left
				viewportLeft = 0; // (and .offset() won't work if called here)
			}
			else {
				viewportOffset = viewportEl.offset();
				viewportTop = viewportOffset.top;
				viewportLeft = viewportOffset.left;
			}

			// if the window is scrolled, it causes the visible area to be further down
			viewportTop += windowEl.scrollTop();
			viewportLeft += windowEl.scrollLeft();

			// constrain to the view port. if constrained by two edges, give precedence to top/left
			if (options.viewportConstrain !== false) {
				top = Math.min(top, viewportTop + viewportEl.outerHeight() - height - this.margin);
				top = Math.max(top, viewportTop + this.margin);
				left = Math.min(left, viewportLeft + viewportEl.outerWidth() - width - this.margin);
				left = Math.max(left, viewportLeft + this.margin);
			}

			this.el.css({
				top: top - origin.top,
				left: left - origin.left
			});
		},


		// Triggers a callback. Calls a function in the option hash of the same name.
		// Arguments beyond the first `name` are forwarded on.
		// TODO: better code reuse for this. Repeat code
		trigger: function(name) {
			if (this.options[name]) {
				this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}

	});

	;;

	/* A "coordinate map" converts pixel coordinates into an associated cell, which has an associated date
	------------------------------------------------------------------------------------------------------------------------
	Common interface:

		CoordMap.prototype = {
			build: function() {},
			getCell: function(x, y) {}
		};

	*/

	/* Coordinate map for a grid component
	----------------------------------------------------------------------------------------------------------------------*/

	var GridCoordMap = Class.extend({

		grid: null, // reference to the Grid
		rowCoords: null, // array of {top,bottom} objects
		colCoords: null, // array of {left,right} objects

		containerEl: null, // container element that all coordinates are constrained to. optionally assigned
		minX: null,
		maxX: null, // exclusive
		minY: null,
		maxY: null, // exclusive


		constructor: function(grid) {
			this.grid = grid;
		},


		// Queries the grid for the coordinates of all the cells
		build: function() {
			this.rowCoords = this.grid.computeRowCoords();
			this.colCoords = this.grid.computeColCoords();
			this.computeBounds();
		},


		// Clears the coordinates data to free up memory
		clear: function() {
			this.rowCoords = null;
			this.colCoords = null;
		},


		// Given a coordinate of the document, gets the associated cell. If no cell is underneath, returns null
		getCell: function(x, y) {
			var rowCoords = this.rowCoords;
			var colCoords = this.colCoords;
			var hitRow = null;
			var hitCol = null;
			var i, coords;
			var cell;

			if (this.inBounds(x, y)) {

				for (i = 0; i < rowCoords.length; i++) {
					coords = rowCoords[i];
					if (y >= coords.top && y < coords.bottom) {
						hitRow = i;
						break;
					}
				}

				for (i = 0; i < colCoords.length; i++) {
					coords = colCoords[i];
					if (x >= coords.left && x < coords.right) {
						hitCol = i;
						break;
					}
				}

				if (hitRow !== null && hitCol !== null) {
					cell = this.grid.getCell(hitRow, hitCol);
					cell.grid = this.grid; // for DragListener's isCellsEqual. dragging between grids
					return cell;
				}
			}

			return null;
		},


		// If there is a containerEl, compute the bounds into min/max values
		computeBounds: function() {
			var containerOffset;

			if (this.containerEl) {
				containerOffset = this.containerEl.offset();
				this.minX = containerOffset.left;
				this.maxX = containerOffset.left + this.containerEl.outerWidth();
				this.minY = containerOffset.top;
				this.maxY = containerOffset.top + this.containerEl.outerHeight();
			}
		},


		// Determines if the given coordinates are in bounds. If no `containerEl`, always true
		inBounds: function(x, y) {
			if (this.containerEl) {
				return x >= this.minX && x < this.maxX && y >= this.minY && y < this.maxY;
			}
			return true;
		}

	});


	/* Coordinate map that is a combination of multiple other coordinate maps
	----------------------------------------------------------------------------------------------------------------------*/

	var ComboCoordMap = Class.extend({

		coordMaps: null, // an array of CoordMaps


		constructor: function(coordMaps) {
			this.coordMaps = coordMaps;
		},


		// Builds all coordMaps
		build: function() {
			var coordMaps = this.coordMaps;
			var i;

			for (i = 0; i < coordMaps.length; i++) {
				coordMaps[i].build();
			}
		},


		// Queries all coordMaps for the cell underneath the given coordinates, returning the first result
		getCell: function(x, y) {
			var coordMaps = this.coordMaps;
			var cell = null;
			var i;

			for (i = 0; i < coordMaps.length && !cell; i++) {
				cell = coordMaps[i].getCell(x, y);
			}

			return cell;
		},


		// Clears all coordMaps
		clear: function() {
			var coordMaps = this.coordMaps;
			var i;

			for (i = 0; i < coordMaps.length; i++) {
				coordMaps[i].clear();
			}
		}

	});

	;;

	/* Tracks mouse movements over a CoordMap and raises events about which cell the mouse is over.
	----------------------------------------------------------------------------------------------------------------------*/
	// TODO: very useful to have a handler that gets called upon cellOut OR when dragging stops (for cleanup)

	var DragListener = Class.extend({

		coordMap: null,
		options: null,

		isListening: false,
		isDragging: false,

		// the cell the mouse was over when listening started
		origCell: null,

		// the cell the mouse is over
		cell: null,

		// coordinates of the initial mousedown
		mouseX0: null,
		mouseY0: null,

		// handler attached to the document, bound to the DragListener's `this`
		mousemoveProxy: null,
		mouseupProxy: null,

		scrollEl: null,
		scrollBounds: null, // { top, bottom, left, right }
		scrollTopVel: null, // pixels per second
		scrollLeftVel: null, // pixels per second
		scrollIntervalId: null, // ID of setTimeout for scrolling animation loop
		scrollHandlerProxy: null, // this-scoped function for handling when scrollEl is scrolled

		scrollSensitivity: 30, // pixels from edge for scrolling to start
		scrollSpeed: 200, // pixels per second, at maximum speed
		scrollIntervalMs: 50, // millisecond wait between scroll increment


		constructor: function(coordMap, options) {
			this.coordMap = coordMap;
			this.options = options || {};
		},


		// Call this when the user does a mousedown. Will probably lead to startListening
		mousedown: function(ev) {
			if (isPrimaryMouseButton(ev)) {

				ev.preventDefault(); // prevents native selection in most browsers

				this.startListening(ev);

				// start the drag immediately if there is no minimum distance for a drag start
				if (!this.options.distance) {
					this.startDrag(ev);
				}
			}
		},


		// Call this to start tracking mouse movements
		startListening: function(ev) {
			var scrollParent;
			var cell;

			if (!this.isListening) {

				// grab scroll container and attach handler
				if (ev && this.options.scroll) {
					scrollParent = getScrollParent($(ev.target));
					if (!scrollParent.is(window) && !scrollParent.is(document)) {
						this.scrollEl = scrollParent;

						// scope to `this`, and use `debounce` to make sure rapid calls don't happen
						this.scrollHandlerProxy = debounce($.proxy(this, 'scrollHandler'), 100);
						this.scrollEl.on('scroll', this.scrollHandlerProxy);
					}
				}

				this.computeCoords(); // relies on `scrollEl`

				// get info on the initial cell and its coordinates
				if (ev) {
					cell = this.getCell(ev);
					this.origCell = cell;

					this.mouseX0 = ev.pageX;
					this.mouseY0 = ev.pageY;
				}

				$(document)
					.on('mousemove', this.mousemoveProxy = $.proxy(this, 'mousemove'))
					.on('mouseup', this.mouseupProxy = $.proxy(this, 'mouseup'))
					.on('selectstart', this.preventDefault); // prevents native selection in IE<=8

				this.isListening = true;
				this.trigger('listenStart', ev);
			}
		},


		// Recomputes the drag-critical positions of elements
		computeCoords: function() {
			this.coordMap.build();
			this.computeScrollBounds();
		},


		// Called when the user moves the mouse
		mousemove: function(ev) {
			var minDistance;
			var distanceSq; // current distance from mouseX0/mouseY0, squared

			if (!this.isDragging) { // if not already dragging...
				// then start the drag if the minimum distance criteria is met
				minDistance = this.options.distance || 1;
				distanceSq = Math.pow(ev.pageX - this.mouseX0, 2) + Math.pow(ev.pageY - this.mouseY0, 2);
				if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
					this.startDrag(ev);
				}
			}

			if (this.isDragging) {
				this.drag(ev); // report a drag, even if this mousemove initiated the drag
			}
		},


		// Call this to initiate a legitimate drag.
		// This function is called internally from this class, but can also be called explicitly from outside
		startDrag: function(ev) {
			var cell;

			if (!this.isListening) { // startDrag must have manually initiated
				this.startListening();
			}

			if (!this.isDragging) {
				this.isDragging = true;
				this.trigger('dragStart', ev);

				// report the initial cell the mouse is over
				// especially important if no min-distance and drag starts immediately
				cell = this.getCell(ev); // this might be different from this.origCell if the min-distance is large
				if (cell) {
					this.cellOver(cell);
				}
			}
		},


		// Called while the mouse is being moved and when we know a legitimate drag is taking place
		drag: function(ev) {
			var cell;

			if (this.isDragging) {
				cell = this.getCell(ev);

				if (!isCellsEqual(cell, this.cell)) { // a different cell than before?
					if (this.cell) {
						this.cellOut();
					}
					if (cell) {
						this.cellOver(cell);
					}
				}

				this.dragScroll(ev); // will possibly cause scrolling
			}
		},


		// Called when a the mouse has just moved over a new cell
		cellOver: function(cell) {
			this.cell = cell;
			this.trigger('cellOver', cell, isCellsEqual(cell, this.origCell));
		},


		// Called when the mouse has just moved out of a cell
		cellOut: function() {
			if (this.cell) {
				this.trigger('cellOut', this.cell);
				this.cell = null;
			}
		},


		// Called when the user does a mouseup
		mouseup: function(ev) {
			this.stopDrag(ev);
			this.stopListening(ev);
		},


		// Called when the drag is over. Will not cause listening to stop however.
		// A concluding 'cellOut' event will NOT be triggered.
		stopDrag: function(ev) {
			if (this.isDragging) {
				this.stopScrolling();
				this.trigger('dragStop', ev);
				this.isDragging = false;
			}
		},


		// Call this to stop listening to the user's mouse events
		stopListening: function(ev) {
			if (this.isListening) {

				// remove the scroll handler if there is a scrollEl
				if (this.scrollEl) {
					this.scrollEl.off('scroll', this.scrollHandlerProxy);
					this.scrollHandlerProxy = null;
				}

				$(document)
					.off('mousemove', this.mousemoveProxy)
					.off('mouseup', this.mouseupProxy)
					.off('selectstart', this.preventDefault);

				this.mousemoveProxy = null;
				this.mouseupProxy = null;

				this.isListening = false;
				this.trigger('listenStop', ev);

				this.origCell = this.cell = null;
				this.coordMap.clear();
			}
		},


		// Gets the cell underneath the coordinates for the given mouse event
		getCell: function(ev) {
			return this.coordMap.getCell(ev.pageX, ev.pageY);
		},


		// Triggers a callback. Calls a function in the option hash of the same name.
		// Arguments beyond the first `name` are forwarded on.
		trigger: function(name) {
			if (this.options[name]) {
				this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		},


		// Stops a given mouse event from doing it's native browser action. In our case, text selection.
		preventDefault: function(ev) {
			ev.preventDefault();
		},


		/* Scrolling
		------------------------------------------------------------------------------------------------------------------*/


		// Computes and stores the bounding rectangle of scrollEl
		computeScrollBounds: function() {
			var el = this.scrollEl;
			var offset;

			if (el) {
				offset = el.offset();
				this.scrollBounds = {
					top: offset.top,
					left: offset.left,
					bottom: offset.top + el.outerHeight(),
					right: offset.left + el.outerWidth()
				};
			}
		},


		// Called when the dragging is in progress and scrolling should be updated
		dragScroll: function(ev) {
			var sensitivity = this.scrollSensitivity;
			var bounds = this.scrollBounds;
			var topCloseness, bottomCloseness;
			var leftCloseness, rightCloseness;
			var topVel = 0;
			var leftVel = 0;

			if (bounds) { // only scroll if scrollEl exists

				// compute closeness to edges. valid range is from 0.0 - 1.0
				topCloseness = (sensitivity - (ev.pageY - bounds.top)) / sensitivity;
				bottomCloseness = (sensitivity - (bounds.bottom - ev.pageY)) / sensitivity;
				leftCloseness = (sensitivity - (ev.pageX - bounds.left)) / sensitivity;
				rightCloseness = (sensitivity - (bounds.right - ev.pageX)) / sensitivity;

				// translate vertical closeness into velocity.
				// mouse must be completely in bounds for velocity to happen.
				if (topCloseness >= 0 && topCloseness <= 1) {
					topVel = topCloseness * this.scrollSpeed * -1; // negative. for scrolling up
				}
				else if (bottomCloseness >= 0 && bottomCloseness <= 1) {
					topVel = bottomCloseness * this.scrollSpeed;
				}

				// translate horizontal closeness into velocity
				if (leftCloseness >= 0 && leftCloseness <= 1) {
					leftVel = leftCloseness * this.scrollSpeed * -1; // negative. for scrolling left
				}
				else if (rightCloseness >= 0 && rightCloseness <= 1) {
					leftVel = rightCloseness * this.scrollSpeed;
				}
			}

			this.setScrollVel(topVel, leftVel);
		},


		// Sets the speed-of-scrolling for the scrollEl
		setScrollVel: function(topVel, leftVel) {

			this.scrollTopVel = topVel;
			this.scrollLeftVel = leftVel;

			this.constrainScrollVel(); // massages into realistic values

			// if there is non-zero velocity, and an animation loop hasn't already started, then START
			if ((this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId) {
				this.scrollIntervalId = setInterval(
					$.proxy(this, 'scrollIntervalFunc'), // scope to `this`
					this.scrollIntervalMs
				);
			}
		},


		// Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
		constrainScrollVel: function() {
			var el = this.scrollEl;

			if (this.scrollTopVel < 0) { // scrolling up?
				if (el.scrollTop() <= 0) { // already scrolled all the way up?
					this.scrollTopVel = 0;
				}
			}
			else if (this.scrollTopVel > 0) { // scrolling down?
				if (el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) { // already scrolled all the way down?
					this.scrollTopVel = 0;
				}
			}

			if (this.scrollLeftVel < 0) { // scrolling left?
				if (el.scrollLeft() <= 0) { // already scrolled all the left?
					this.scrollLeftVel = 0;
				}
			}
			else if (this.scrollLeftVel > 0) { // scrolling right?
				if (el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) { // already scrolled all the way right?
					this.scrollLeftVel = 0;
				}
			}
		},


		// This function gets called during every iteration of the scrolling animation loop
		scrollIntervalFunc: function() {
			var el = this.scrollEl;
			var frac = this.scrollIntervalMs / 1000; // considering animation frequency, what the vel should be mult'd by

			// change the value of scrollEl's scroll
			if (this.scrollTopVel) {
				el.scrollTop(el.scrollTop() + this.scrollTopVel * frac);
			}
			if (this.scrollLeftVel) {
				el.scrollLeft(el.scrollLeft() + this.scrollLeftVel * frac);
			}

			this.constrainScrollVel(); // since the scroll values changed, recompute the velocities

			// if scrolled all the way, which causes the vels to be zero, stop the animation loop
			if (!this.scrollTopVel && !this.scrollLeftVel) {
				this.stopScrolling();
			}
		},


		// Kills any existing scrolling animation loop
		stopScrolling: function() {
			if (this.scrollIntervalId) {
				clearInterval(this.scrollIntervalId);
				this.scrollIntervalId = null;

				// when all done with scrolling, recompute positions since they probably changed
				this.computeCoords();
			}
		},


		// Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
		scrollHandler: function() {
			// recompute all coordinates, but *only* if this is *not* part of our scrolling animation
			if (!this.scrollIntervalId) {
				this.computeCoords();
			}
		}

	});


	// Returns `true` if the cells are identically equal. `false` otherwise.
	// They must have the same row, col, and be from the same grid.
	// Two null values will be considered equal, as two "out of the grid" states are the same.
	function isCellsEqual(cell1, cell2) {

		if (!cell1 && !cell2) {
			return true;
		}

		if (cell1 && cell2) {
			return cell1.grid === cell2.grid &&
				cell1.row === cell2.row &&
				cell1.col === cell2.col;
		}

		return false;
	}

	;;

	/* Creates a clone of an element and lets it track the mouse as it moves
	----------------------------------------------------------------------------------------------------------------------*/

	var MouseFollower = Class.extend({

		options: null,

		sourceEl: null, // the element that will be cloned and made to look like it is dragging
		el: null, // the clone of `sourceEl` that will track the mouse
		parentEl: null, // the element that `el` (the clone) will be attached to

		// the initial position of el, relative to the offset parent. made to match the initial offset of sourceEl
		top0: null,
		left0: null,

		// the initial position of the mouse
		mouseY0: null,
		mouseX0: null,

		// the number of pixels the mouse has moved from its initial position
		topDelta: null,
		leftDelta: null,

		mousemoveProxy: null, // document mousemove handler, bound to the MouseFollower's `this`

		isFollowing: false,
		isHidden: false,
		isAnimating: false, // doing the revert animation?

		constructor: function(sourceEl, options) {
			this.options = options = options || {};
			this.sourceEl = sourceEl;
			this.parentEl = options.parentEl ? $(options.parentEl) : sourceEl.parent(); // default to sourceEl's parent
		},


		// Causes the element to start following the mouse
		start: function(ev) {
			if (!this.isFollowing) {
				this.isFollowing = true;

				this.mouseY0 = ev.pageY;
				this.mouseX0 = ev.pageX;
				this.topDelta = 0;
				this.leftDelta = 0;

				if (!this.isHidden) {
					this.updatePosition();
				}

				$(document).on('mousemove', this.mousemoveProxy = $.proxy(this, 'mousemove'));
			}
		},


		// Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
		// `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
		stop: function(shouldRevert, callback) {
			var _this = this;
			var revertDuration = this.options.revertDuration;

			function complete() {
				this.isAnimating = false;
				_this.destroyEl();

				this.top0 = this.left0 = null; // reset state for future updatePosition calls

				if (callback) {
					callback();
				}
			}

			if (this.isFollowing && !this.isAnimating) { // disallow more than one stop animation at a time
				this.isFollowing = false;

				$(document).off('mousemove', this.mousemoveProxy);

				if (shouldRevert && revertDuration && !this.isHidden) { // do a revert animation?
					this.isAnimating = true;
					this.el.animate({
						top: this.top0,
						left: this.left0
					}, {
						duration: revertDuration,
						complete: complete
					});
				}
				else {
					complete();
				}
			}
		},


		// Gets the tracking element. Create it if necessary
		getEl: function() {
			var el = this.el;

			if (!el) {
				this.sourceEl.width(); // hack to force IE8 to compute correct bounding box
				el = this.el = this.sourceEl.clone()
					.css({
						position: 'absolute',
						visibility: '', // in case original element was hidden (commonly through hideEvents())
						display: this.isHidden ? 'none' : '', // for when initially hidden
						margin: 0,
						right: 'auto', // erase and set width instead
						bottom: 'auto', // erase and set height instead
						width: this.sourceEl.width(), // explicit height in case there was a 'right' value
						height: this.sourceEl.height(), // explicit width in case there was a 'bottom' value
						opacity: this.options.opacity || '',
						zIndex: this.options.zIndex
					})
					.appendTo(this.parentEl);
			}

			return el;
		},


		// Removes the tracking element if it has already been created
		destroyEl: function() {
			if (this.el) {
				this.el.remove();
				this.el = null;
			}
		},


		// Update the CSS position of the tracking element
		updatePosition: function() {
			var sourceOffset;
			var origin;

			this.getEl(); // ensure this.el

			// make sure origin info was computed
			if (this.top0 === null) {
				this.sourceEl.width(); // hack to force IE8 to compute correct bounding box
				sourceOffset = this.sourceEl.offset();
				origin = this.el.offsetParent().offset();
				this.top0 = sourceOffset.top - origin.top;
				this.left0 = sourceOffset.left - origin.left;
			}

			this.el.css({
				top: this.top0 + this.topDelta,
				left: this.left0 + this.leftDelta
			});
		},


		// Gets called when the user moves the mouse
		mousemove: function(ev) {
			this.topDelta = ev.pageY - this.mouseY0;
			this.leftDelta = ev.pageX - this.mouseX0;

			if (!this.isHidden) {
				this.updatePosition();
			}
		},


		// Temporarily makes the tracking element invisible. Can be called before following starts
		hide: function() {
			if (!this.isHidden) {
				this.isHidden = true;
				if (this.el) {
					this.el.hide();
				}
			}
		},


		// Show the tracking element after it has been temporarily hidden
		show: function() {
			if (this.isHidden) {
				this.isHidden = false;
				this.updatePosition();
				this.getEl().show();
			}
		}

	});

	;;

	/* A utility class for rendering <tr> rows.
	----------------------------------------------------------------------------------------------------------------------*/
	// It leverages methods of the subclass and the View to determine custom rendering behavior for each row "type"
	// (such as highlight rows, day rows, helper rows, etc).

	var RowRenderer = Class.extend({

		view: null, // a View object
		isRTL: null, // shortcut to the view's isRTL option
		cellHtml: '<td/>', // plain default HTML used for a cell when no other is available


		constructor: function(view) {
			this.view = view;
			this.isRTL = view.opt('isRTL');
		},


		// Renders the HTML for a row, leveraging custom cell-HTML-renderers based on the `rowType`.
		// Also applies the "intro" and "outro" cells, which are specified by the subclass and views.
		// `row` is an optional row number.
		rowHtml: function(rowType, row) {
			var renderCell = this.getHtmlRenderer('cell', rowType);
			var rowCellHtml = '';
			var col;
			var cell;

			row = row || 0;

			for (col = 0; col < this.colCnt; col++) {
				cell = this.getCell(row, col);
				rowCellHtml += renderCell(cell);
			}

			rowCellHtml = this.bookendCells(rowCellHtml, rowType, row); // apply intro and outro

			return '<tr>' + rowCellHtml + '</tr>';
		},


		// Applies the "intro" and "outro" HTML to the given cells.
		// Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
		// `cells` can be an HTML string of <td>'s or a jQuery <tr> element
		// `row` is an optional row number.
		bookendCells: function(cells, rowType, row) {
			var intro = this.getHtmlRenderer('intro', rowType)(row || 0);
			var outro = this.getHtmlRenderer('outro', rowType)(row || 0);
			var prependHtml = this.isRTL ? outro : intro;
			var appendHtml = this.isRTL ? intro : outro;

			if (typeof cells === 'string') {
				return prependHtml + cells + appendHtml;
			}
			else { // a jQuery <tr> element
				return cells.prepend(prependHtml).append(appendHtml);
			}
		},


		// Returns an HTML-rendering function given a specific `rendererName` (like cell, intro, or outro) and a specific
		// `rowType` (like day, eventSkeleton, helperSkeleton), which is optional.
		// If a renderer for the specific rowType doesn't exist, it will fall back to a generic renderer.
		// We will query the View object first for any custom rendering functions, then the methods of the subclass.
		getHtmlRenderer: function(rendererName, rowType) {
			var view = this.view;
			var generalName; // like "cellHtml"
			var specificName; // like "dayCellHtml". based on rowType
			var provider; // either the View or the RowRenderer subclass, whichever provided the method
			var renderer;

			generalName = rendererName + 'Html';
			if (rowType) {
				specificName = rowType + capitaliseFirstLetter(rendererName) + 'Html';
			}

			if (specificName && (renderer = view[specificName])) {
				provider = view;
			}
			else if (specificName && (renderer = this[specificName])) {
				provider = this;
			}
			else if ((renderer = view[generalName])) {
				provider = view;
			}
			else if ((renderer = this[generalName])) {
				provider = this;
			}

			if (typeof renderer === 'function') {
				return function() {
					return renderer.apply(provider, arguments) || ''; // use correct `this` and always return a string
				};
			}

			// the rendered can be a plain string as well. if not specified, always an empty string.
			return function() {
				return renderer || '';
			};
		}

	});

	;;

	/* An abstract class comprised of a "grid" of cells that each represent a specific datetime
	----------------------------------------------------------------------------------------------------------------------*/

	var Grid = fc.Grid = RowRenderer.extend({

		start: null, // the date of the first cell
		end: null, // the date after the last cell

		rowCnt: 0, // number of rows
		colCnt: 0, // number of cols
		rowData: null, // array of objects, holding misc data for each row
		colData: null, // array of objects, holding misc data for each column

		el: null, // the containing element
		coordMap: null, // a GridCoordMap that converts pixel values to datetimes
		elsByFill: null, // a hash of jQuery element sets used for rendering each fill. Keyed by fill name.

		documentDragStartProxy: null, // binds the Grid's scope to documentDragStart (in DayGrid.events)

		// derived from options
		colHeadFormat: null, // TODO: move to another class. not applicable to all Grids
		eventTimeFormat: null,
		displayEventEnd: null,


		constructor: function() {
			RowRenderer.apply(this, arguments); // call the super-constructor

			this.coordMap = new GridCoordMap(this);
			this.elsByFill = {};
			this.documentDragStartProxy = $.proxy(this, 'documentDragStart');
		},


		// Renders the grid into the `el` element.
		// Subclasses should override and call this super-method when done.
		render: function() {
			this.bindHandlers();
		},


		// Called when the grid's resources need to be cleaned up
		destroy: function() {
			this.unbindHandlers();
		},


		/* Options
		------------------------------------------------------------------------------------------------------------------*/


		// Generates the format string used for the text in column headers, if not explicitly defined by 'columnFormat'
		// TODO: move to another class. not applicable to all Grids
		computeColHeadFormat: function() {
			// subclasses must implement if they want to use headHtml()
		},


		// Generates the format string used for event time text, if not explicitly defined by 'timeFormat'
		computeEventTimeFormat: function() {
			return this.view.opt('smallTimeFormat');
		},


		// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventEnd'
		computeDisplayEventEnd: function() {
			return false;
		},


		/* Dates
		------------------------------------------------------------------------------------------------------------------*/


		// Tells the grid about what period of time to display. Grid will subsequently compute dates for cell system.
		setRange: function(range) {
			var view = this.view;

			this.start = range.start.clone();
			this.end = range.end.clone();

			this.rowData = [];
			this.colData = [];
			this.updateCells();

			// Populate option-derived settings. Look for override first, then compute if necessary.
			this.colHeadFormat = view.opt('columnFormat') || this.computeColHeadFormat();
			this.eventTimeFormat = view.opt('timeFormat') || this.computeEventTimeFormat();
			this.displayEventEnd = view.opt('displayEventEnd');
			if (this.displayEventEnd == null) {
				this.displayEventEnd = this.computeDisplayEventEnd();
			}
		},


		// Responsible for setting rowCnt/colCnt and any other row/col data
		updateCells: function() {
			// subclasses must implement
		},


		// Converts a range with an inclusive `start` and an exclusive `end` into an array of segment objects
		rangeToSegs: function(range) {
			// subclasses must implement
		},


		/* Cells
		------------------------------------------------------------------------------------------------------------------*/
		// NOTE: columns are ordered left-to-right


		// Gets an object containing row/col number, misc data, and range information about the cell.
		// Accepts row/col values, an object with row/col properties, or a single-number offset from the first cell.
		getCell: function(row, col) {
			var cell;

			if (col == null) {
				if (typeof row === 'number') { // a single-number offset
					col = row % this.colCnt;
					row = Math.floor(row / this.colCnt);
				}
				else { // an object with row/col properties
					col = row.col;
					row = row.row;
				}
			}

			cell = { row: row, col: col };

			$.extend(cell, this.getRowData(row), this.getColData(col));
			$.extend(cell, this.computeCellRange(cell));

			return cell;
		},


		// Given a cell object with index and misc data, generates a range object
		computeCellRange: function(cell) {
			// subclasses must implement
		},


		// Retrieves misc data about the given row
		getRowData: function(row) {
			return this.rowData[row] || {};
		},


		// Retrieves misc data baout the given column
		getColData: function(col) {
			return this.colData[col] || {};
		},


		// Retrieves the element representing the given row
		getRowEl: function(row) {
			// subclasses should implement if leveraging the default getCellDayEl() or computeRowCoords()
		},


		// Retrieves the element representing the given column
		getColEl: function(col) {
			// subclasses should implement if leveraging the default getCellDayEl() or computeColCoords()
		},


		// Given a cell object, returns the element that represents the cell's whole-day
		getCellDayEl: function(cell) {
			return this.getColEl(cell.col) || this.getRowEl(cell.row);
		},


		/* Cell Coordinates
		------------------------------------------------------------------------------------------------------------------*/


		// Computes the top/bottom coordinates of all rows.
		// By default, queries the dimensions of the element provided by getRowEl().
		computeRowCoords: function() {
			var items = [];
			var i, el;
			var item;

			for (i = 0; i < this.rowCnt; i++) {
				el = this.getRowEl(i);
				item = {
					top: el.offset().top
				};
				if (i > 0) {
					items[i - 1].bottom = item.top;
				}
				items.push(item);
			}
			item.bottom = item.top + el.outerHeight();

			return items;
		},


		// Computes the left/right coordinates of all rows.
		// By default, queries the dimensions of the element provided by getColEl().
		computeColCoords: function() {
			var items = [];
			var i, el;
			var item;

			for (i = 0; i < this.colCnt; i++) {
				el = this.getColEl(i);
				item = {
					left: el.offset().left
				};
				if (i > 0) {
					items[i - 1].right = item.left;
				}
				items.push(item);
			}
			item.right = item.left + el.outerWidth();

			return items;
		},


		/* Handlers
		------------------------------------------------------------------------------------------------------------------*/


		// Attaches handlers to DOM
		bindHandlers: function() {
			var _this = this;

			// attach a handler to the grid's root element.
			// we don't need to clean up in unbindHandlers or destroy, because when jQuery removes the element from the
			// DOM it automatically unregisters the handlers.
			this.el.on('mousedown', function(ev) {
				if (
					!$(ev.target).is('.fc-event-container *, .fc-more') && // not an an event element, or "more.." link
					!$(ev.target).closest('.fc-popover').length // not on a popover (like the "more.." events one)
				) {
					_this.dayMousedown(ev);
				}
			});

			// attach event-element-related handlers. in Grid.events
			// same garbage collection note as above.
			this.bindSegHandlers();

			$(document).on('dragstart', this.documentDragStartProxy); // jqui drag
		},


		// Unattaches handlers from the DOM
		unbindHandlers: function() {
			$(document).off('dragstart', this.documentDragStartProxy); // jqui drag
		},


		// Process a mousedown on an element that represents a day. For day clicking and selecting.
		dayMousedown: function(ev) {
			var _this = this;
			var view = this.view;
			var isSelectable = view.opt('selectable');
			var dayClickCell; // null if invalid dayClick
			var selectionRange; // null if invalid selection

			// this listener tracks a mousedown on a day element, and a subsequent drag.
			// if the drag ends on the same day, it is a 'dayClick'.
			// if 'selectable' is enabled, this listener also detects selections.
			var dragListener = new DragListener(this.coordMap, {
				//distance: 5, // needs more work if we want dayClick to fire correctly
				scroll: view.opt('dragScroll'),
				dragStart: function() {
					view.unselect(); // since we could be rendering a new selection, we want to clear any old one
				},
				cellOver: function(cell, isOrig) {
					var origCell = dragListener.origCell;
					if (origCell) { // click needs to have started on a cell
						dayClickCell = isOrig ? cell : null; // single-cell selection is a day click
						if (isSelectable) {
							selectionRange = _this.computeSelection(origCell, cell);
							if (selectionRange) {
								_this.renderSelection(selectionRange);
							}
							else {
								disableCursor();
							}
						}
					}
				},
				cellOut: function(cell) {
					dayClickCell = null;
					selectionRange = null;
					_this.destroySelection();
					enableCursor();
				},
				listenStop: function(ev) {
					if (dayClickCell) {
						view.trigger('dayClick', _this.getCellDayEl(dayClickCell), dayClickCell.start, ev);
					}
					if (selectionRange) {
						// the selection will already have been rendered. just report it
						view.reportSelection(selectionRange, ev);
					}
					enableCursor();
				}
			});

			dragListener.mousedown(ev); // start listening, which will eventually initiate a dragStart
		},


		/* Event Helper
		------------------------------------------------------------------------------------------------------------------*/
		// TODO: should probably move this to Grid.events, like we did event dragging / resizing


		// Renders a mock event over the given range.
		// The range's end can be null, in which case the mock event that is rendered will have a null end time.
		// `sourceSeg` is the internal segment object involved in the drag. If null, something external is dragging.
		renderRangeHelper: function(range, sourceSeg) {
			var fakeEvent;

			fakeEvent = sourceSeg ? createObject(sourceSeg.event) : {}; // mask the original event object if possible
			fakeEvent.start = range.start.clone();
			fakeEvent.end = range.end ? range.end.clone() : null;
			fakeEvent.allDay = null; // force it to be freshly computed by normalizeEventDateProps
			this.view.calendar.normalizeEventDateProps(fakeEvent);

			// this extra className will be useful for differentiating real events from mock events in CSS
			fakeEvent.className = (fakeEvent.className || []).concat('fc-helper');

			// if something external is being dragged in, don't render a resizer
			if (!sourceSeg) {
				fakeEvent.editable = false;
			}

			this.renderHelper(fakeEvent, sourceSeg); // do the actual rendering
		},


		// Renders a mock event
		renderHelper: function(event, sourceSeg) {
			// subclasses must implement
		},


		// Unrenders a mock event
		destroyHelper: function() {
			// subclasses must implement
		},


		/* Selection
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of a selection. Will highlight by default but can be overridden by subclasses.
		renderSelection: function(range) {
			this.renderHighlight(range);
		},


		// Unrenders any visual indications of a selection. Will unrender a highlight by default.
		destroySelection: function() {
			this.destroyHighlight();
		},


		// Given the first and last cells of a selection, returns a range object.
		// Will return something falsy if the selection is invalid (when outside of selectionConstraint for example).
		// Subclasses can override and provide additional data in the range object. Will be passed to renderSelection().
		computeSelection: function(firstCell, lastCell) {
			var dates = [
				firstCell.start,
				firstCell.end,
				lastCell.start,
				lastCell.end
			];
			var range;

			dates.sort(compareNumbers); // sorts chronologically. works with Moments

			range = {
				start: dates[0].clone(),
				end: dates[3].clone()
			};

			if (!this.view.calendar.isSelectionRangeAllowed(range)) {
				return null;
			}

			return range;
		},


		/* Highlight
		------------------------------------------------------------------------------------------------------------------*/


		// Renders an emphasis on the given date range. `start` is inclusive. `end` is exclusive.
		renderHighlight: function(range) {
			this.renderFill('highlight', this.rangeToSegs(range));
		},


		// Unrenders the emphasis on a date range
		destroyHighlight: function() {
			this.destroyFill('highlight');
		},


		// Generates an array of classNames for rendering the highlight. Used by the fill system.
		highlightSegClasses: function() {
			return [ 'fc-highlight' ];
		},


		/* Fill System (highlight, background events, business hours)
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a set of rectangles over the given segments of time.
		// Returns a subset of segs, the segs that were actually rendered.
		// Responsible for populating this.elsByFill. TODO: better API for expressing this requirement
		renderFill: function(type, segs) {
			// subclasses must implement
		},


		// Unrenders a specific type of fill that is currently rendered on the grid
		destroyFill: function(type) {
			var el = this.elsByFill[type];

			if (el) {
				el.remove();
				delete this.elsByFill[type];
			}
		},


		// Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
		// Only returns segments that successfully rendered.
		// To be harnessed by renderFill (implemented by subclasses).
		// Analagous to renderFgSegEls.
		renderFillSegEls: function(type, segs) {
			var _this = this;
			var segElMethod = this[type + 'SegEl'];
			var html = '';
			var renderedSegs = [];
			var i;

			if (segs.length) {

				// build a large concatenation of segment HTML
				for (i = 0; i < segs.length; i++) {
					html += this.fillSegHtml(type, segs[i]);
				}

				// Grab individual elements from the combined HTML string. Use each as the default rendering.
				// Then, compute the 'el' for each segment.
				$(html).each(function(i, node) {
					var seg = segs[i];
					var el = $(node);

					// allow custom filter methods per-type
					if (segElMethod) {
						el = segElMethod.call(_this, seg, el);
					}

					if (el) { // custom filters did not cancel the render
						el = $(el); // allow custom filter to return raw DOM node

						// correct element type? (would be bad if a non-TD were inserted into a table for example)
						if (el.is(_this.fillSegTag)) {
							seg.el = el;
							renderedSegs.push(seg);
						}
					}
				});
			}

			return renderedSegs;
		},


		fillSegTag: 'div', // subclasses can override


		// Builds the HTML needed for one fill segment. Generic enought o work with different types.
		fillSegHtml: function(type, seg) {
			var classesMethod = this[type + 'SegClasses']; // custom hooks per-type
			var stylesMethod = this[type + 'SegStyles']; //
			var classes = classesMethod ? classesMethod.call(this, seg) : [];
			var styles = stylesMethod ? stylesMethod.call(this, seg) : ''; // a semi-colon separated CSS property string

			return '<' + this.fillSegTag +
				(classes.length ? ' class="' + classes.join(' ') + '"' : '') +
				(styles ? ' style="' + styles + '"' : '') +
				' />';
		},


		/* Generic rendering utilities for subclasses
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a day-of-week header row.
		// TODO: move to another class. not applicable to all Grids
		headHtml: function() {
			return '' +
				'<div class="fc-row ' + this.view.widgetHeaderClass + '">' +
					'<table>' +
						'<thead>' +
							this.rowHtml('head') + // leverages RowRenderer
						'</thead>' +
					'</table>' +
				'</div>';
		},


		// Used by the `headHtml` method, via RowRenderer, for rendering the HTML of a day-of-week header cell
		// TODO: move to another class. not applicable to all Grids
		headCellHtml: function(cell) {
			var view = this.view;
			var date = cell.start;

			return '' +
				'<th class="fc-day-header ' + view.widgetHeaderClass + ' fc-' + dayIDs[date.day()] + '">' +
					htmlEscape(date.format(this.colHeadFormat)) +
				'</th>';
		},


		// Renders the HTML for a single-day background cell
		bgCellHtml: function(cell) {
			var view = this.view;
			var date = cell.start;
			var classes = this.getDayClasses(date);

			classes.unshift('fc-day', view.widgetContentClass);

			return '<td class="' + classes.join(' ') + '"' +
				' data-date="' + date.format('YYYY-MM-DD') + '"' + // if date has a time, won't format it
				'></td>';
		},


		// Computes HTML classNames for a single-day cell
		getDayClasses: function(date) {
			var view = this.view;
			var today = view.calendar.getNow().stripTime();
			var classes = [ 'fc-' + dayIDs[date.day()] ];

			if (
				view.name === 'month' &&
				date.month() != view.intervalStart.month()
			) {
				classes.push('fc-other-month');
			}

			if (date.isSame(today, 'day')) {
				classes.push(
					'fc-today',
					view.highlightStateClass
				);
			}
			else if (date < today) {
				classes.push('fc-past');
			}
			else {
				classes.push('fc-future');
			}

			return classes;
		}

	});

	;;

	/* Event-rendering and event-interaction methods for the abstract Grid class
	----------------------------------------------------------------------------------------------------------------------*/

	Grid.mixin({

		mousedOverSeg: null, // the segment object the user's mouse is over. null if over nothing
		isDraggingSeg: false, // is a segment being dragged? boolean
		isResizingSeg: false, // is a segment being resized? boolean
		segs: null, // the event segments currently rendered in the grid


		// Renders the given events onto the grid
		renderEvents: function(events) {
			var segs = this.eventsToSegs(events);
			var bgSegs = [];
			var fgSegs = [];
			var i, seg;

			for (i = 0; i < segs.length; i++) {
				seg = segs[i];

				if (isBgEvent(seg.event)) {
					bgSegs.push(seg);
				}
				else {
					fgSegs.push(seg);
				}
			}

			// Render each different type of segment.
			// Each function may return a subset of the segs, segs that were actually rendered.
			bgSegs = this.renderBgSegs(bgSegs) || bgSegs;
			fgSegs = this.renderFgSegs(fgSegs) || fgSegs;

			this.segs = bgSegs.concat(fgSegs);
		},


		// Unrenders all events currently rendered on the grid
		destroyEvents: function() {
			this.triggerSegMouseout(); // trigger an eventMouseout if user's mouse is over an event

			this.destroyFgSegs();
			this.destroyBgSegs();

			this.segs = null;
		},


		// Retrieves all rendered segment objects currently rendered on the grid
		getEventSegs: function() {
			return this.segs || [];
		},


		/* Foreground Segment Rendering
		------------------------------------------------------------------------------------------------------------------*/


		// Renders foreground event segments onto the grid. May return a subset of segs that were rendered.
		renderFgSegs: function(segs) {
			// subclasses must implement
		},


		// Unrenders all currently rendered foreground segments
		destroyFgSegs: function() {
			// subclasses must implement
		},


		// Renders and assigns an `el` property for each foreground event segment.
		// Only returns segments that successfully rendered.
		// A utility that subclasses may use.
		renderFgSegEls: function(segs, disableResizing) {
			var view = this.view;
			var html = '';
			var renderedSegs = [];
			var i;

			if (segs.length) { // don't build an empty html string

				// build a large concatenation of event segment HTML
				for (i = 0; i < segs.length; i++) {
					html += this.fgSegHtml(segs[i], disableResizing);
				}

				// Grab individual elements from the combined HTML string. Use each as the default rendering.
				// Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
				$(html).each(function(i, node) {
					var seg = segs[i];
					var el = view.resolveEventEl(seg.event, $(node));

					if (el) {
						el.data('fc-seg', seg); // used by handlers
						seg.el = el;
						renderedSegs.push(seg);
					}
				});
			}

			return renderedSegs;
		},


		// Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
		fgSegHtml: function(seg, disableResizing) {
			// subclasses should implement
		},


		/* Background Segment Rendering
		------------------------------------------------------------------------------------------------------------------*/


		// Renders the given background event segments onto the grid.
		// Returns a subset of the segs that were actually rendered.
		renderBgSegs: function(segs) {
			return this.renderFill('bgEvent', segs);
		},


		// Unrenders all the currently rendered background event segments
		destroyBgSegs: function() {
			this.destroyFill('bgEvent');
		},


		// Renders a background event element, given the default rendering. Called by the fill system.
		bgEventSegEl: function(seg, el) {
			return this.view.resolveEventEl(seg.event, el); // will filter through eventRender
		},


		// Generates an array of classNames to be used for the default rendering of a background event.
		// Called by the fill system.
		bgEventSegClasses: function(seg) {
			var event = seg.event;
			var source = event.source || {};

			return [ 'fc-bgevent' ].concat(
				event.className,
				source.className || []
			);
		},


		// Generates a semicolon-separated CSS string to be used for the default rendering of a background event.
		// Called by the fill system.
		// TODO: consolidate with getEventSkinCss?
		bgEventSegStyles: function(seg) {
			var view = this.view;
			var event = seg.event;
			var source = event.source || {};
			var eventColor = event.color;
			var sourceColor = source.color;
			var optionColor = view.opt('eventColor');
			var backgroundColor =
				event.backgroundColor ||
				eventColor ||
				source.backgroundColor ||
				sourceColor ||
				view.opt('eventBackgroundColor') ||
				optionColor;

			if (backgroundColor) {
				return 'background-color:' + backgroundColor;
			}

			return '';
		},


		// Generates an array of classNames to be used for the rendering business hours overlay. Called by the fill system.
		businessHoursSegClasses: function(seg) {
			return [ 'fc-nonbusiness', 'fc-bgevent' ];
		},


		/* Handlers
		------------------------------------------------------------------------------------------------------------------*/


		// Attaches event-element-related handlers to the container element and leverage bubbling
		bindSegHandlers: function() {
			var _this = this;
			var view = this.view;

			$.each(
				{
					mouseenter: function(seg, ev) {
						_this.triggerSegMouseover(seg, ev);
					},
					mouseleave: function(seg, ev) {
						_this.triggerSegMouseout(seg, ev);
					},
					click: function(seg, ev) {
						return view.trigger('eventClick', this, seg.event, ev); // can return `false` to cancel
					},
					mousedown: function(seg, ev) {
						if ($(ev.target).is('.fc-resizer') && view.isEventResizable(seg.event)) {
							_this.segResizeMousedown(seg, ev);
						}
						else if (view.isEventDraggable(seg.event)) {
							_this.segDragMousedown(seg, ev);
						}
					}
				},
				function(name, func) {
					// attach the handler to the container element and only listen for real event elements via bubbling
					_this.el.on(name, '.fc-event-container > *', function(ev) {
						var seg = $(this).data('fc-seg'); // grab segment data. put there by View::renderEvents

						// only call the handlers if there is not a drag/resize in progress
						if (seg && !_this.isDraggingSeg && !_this.isResizingSeg) {
							return func.call(this, seg, ev); // `this` will be the event element
						}
					});
				}
			);
		},


		// Updates internal state and triggers handlers for when an event element is moused over
		triggerSegMouseover: function(seg, ev) {
			if (!this.mousedOverSeg) {
				this.mousedOverSeg = seg;
				this.view.trigger('eventMouseover', seg.el[0], seg.event, ev);
			}
		},


		// Updates internal state and triggers handlers for when an event element is moused out.
		// Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
		triggerSegMouseout: function(seg, ev) {
			ev = ev || {}; // if given no args, make a mock mouse event

			if (this.mousedOverSeg) {
				seg = seg || this.mousedOverSeg; // if given no args, use the currently moused-over segment
				this.mousedOverSeg = null;
				this.view.trigger('eventMouseout', seg.el[0], seg.event, ev);
			}
		},


		/* Event Dragging
		------------------------------------------------------------------------------------------------------------------*/


		// Called when the user does a mousedown on an event, which might lead to dragging.
		// Generic enough to work with any type of Grid.
		segDragMousedown: function(seg, ev) {
			var _this = this;
			var view = this.view;
			var el = seg.el;
			var event = seg.event;
			var dropLocation;

			// A clone of the original element that will move with the mouse
			var mouseFollower = new MouseFollower(seg.el, {
				parentEl: view.el,
				opacity: view.opt('dragOpacity'),
				revertDuration: view.opt('dragRevertDuration'),
				zIndex: 2 // one above the .fc-view
			});

			// Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
			// of the view.
			var dragListener = new DragListener(view.coordMap, {
				distance: 5,
				scroll: view.opt('dragScroll'),
				listenStart: function(ev) {
					mouseFollower.hide(); // don't show until we know this is a real drag
					mouseFollower.start(ev);
				},
				dragStart: function(ev) {
					_this.triggerSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
					_this.isDraggingSeg = true;
					view.hideEvent(event); // hide all event segments. our mouseFollower will take over
					view.trigger('eventDragStart', el[0], event, ev, {}); // last argument is jqui dummy
				},
				cellOver: function(cell, isOrig) {
					var origCell = seg.cell || dragListener.origCell; // starting cell could be forced (DayGrid.limit)

					dropLocation = _this.computeEventDrop(origCell, cell, event);
					if (dropLocation) {
						if (view.renderDrag(dropLocation, seg)) { // have the subclass render a visual indication
							mouseFollower.hide(); // if the subclass is already using a mock event "helper", hide our own
						}
						else {
							mouseFollower.show();
						}
						if (isOrig) {
							dropLocation = null; // needs to have moved cells to be a valid drop
						}
					}
					else {
						// have the helper follow the mouse (no snapping) with a warning-style cursor
						mouseFollower.show();
						disableCursor();
					}
				},
				cellOut: function() { // called before mouse moves to a different cell OR moved out of all cells
					dropLocation = null;
					view.destroyDrag(); // unrender whatever was done in renderDrag
					mouseFollower.show(); // show in case we are moving out of all cells
					enableCursor();
				},
				dragStop: function(ev) {
					// do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
					mouseFollower.stop(!dropLocation, function() {
						_this.isDraggingSeg = false;
						view.destroyDrag();
						view.showEvent(event);
						view.trigger('eventDragStop', el[0], event, ev, {}); // last argument is jqui dummy

						if (dropLocation) {
							view.reportEventDrop(event, dropLocation, el, ev);
						}
					});
					enableCursor();
				},
				listenStop: function() {
					mouseFollower.stop(); // put in listenStop in case there was a mousedown but the drag never started
				}
			});

			dragListener.mousedown(ev); // start listening, which will eventually lead to a dragStart
		},


		// Given the cell an event drag began, and the cell event was dropped, calculates the new start/end/allDay
		// values for the event. Subclasses may override and set additional properties to be used by renderDrag.
		// A falsy returned value indicates an invalid drop.
		computeEventDrop: function(startCell, endCell, event) {
			var dragStart = startCell.start;
			var dragEnd = endCell.start;
			var delta;
			var newStart;
			var newEnd;
			var newAllDay;
			var dropLocation;

			if (dragStart.hasTime() === dragEnd.hasTime()) {
				delta = diffDayTime(dragEnd, dragStart);
				newStart = event.start.clone().add(delta);
				if (event.end === null) { // do we need to compute an end?
					newEnd = null;
				}
				else {
					newEnd = event.end.clone().add(delta);
				}
				newAllDay = event.allDay; // keep it the same
			}
			else {
				// if switching from day <-> timed, start should be reset to the dropped date, and the end cleared
				newStart = dragEnd.clone();
				newEnd = null; // end should be cleared
				newAllDay = !dragEnd.hasTime();
			}

			dropLocation = {
				start: newStart,
				end: newEnd,
				allDay: newAllDay
			};

			if (!this.view.calendar.isEventRangeAllowed(dropLocation, event)) {
				return null;
			}

			return dropLocation;
		},


		/* External Element Dragging
		------------------------------------------------------------------------------------------------------------------*/


		// Called when a jQuery UI drag is initiated anywhere in the DOM
		documentDragStart: function(ev, ui) {
			var view = this.view;
			var el;
			var accept;

			if (view.opt('droppable')) { // only listen if this setting is on
				el = $(ev.target);

				// Test that the dragged element passes the dropAccept selector or filter function.
				// FYI, the default is "*" (matches all)
				accept = view.opt('dropAccept');
				if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {

					this.startExternalDrag(el, ev, ui);
				}
			}
		},


		// Called when a jQuery UI drag starts and it needs to be monitored for cell dropping
		startExternalDrag: function(el, ev, ui) {
			var _this = this;
			var meta = getDraggedElMeta(el); // extra data about event drop, including possible event to create
			var dragListener;
			var dropLocation; // a null value signals an unsuccessful drag

			// listener that tracks mouse movement over date-associated pixel regions
			dragListener = new DragListener(this.coordMap, {
				cellOver: function(cell) {
					dropLocation = _this.computeExternalDrop(cell, meta);
					if (dropLocation) {
						_this.renderDrag(dropLocation); // called without a seg parameter
					}
					else { // invalid drop cell
						disableCursor();
					}
				},
				cellOut: function() {
					dropLocation = null; // signal unsuccessful
					_this.destroyDrag();
					enableCursor();
				}
			});

			// gets called, only once, when jqui drag is finished
			$(document).one('dragstop', function(ev, ui) {
				_this.destroyDrag();
				enableCursor();

				if (dropLocation) { // element was dropped on a valid date/time cell
					_this.view.reportExternalDrop(meta, dropLocation, el, ev, ui);
				}
			});

			dragListener.startDrag(ev); // start listening immediately
		},


		// Given a cell to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
		// returns start/end dates for the event that would result from the hypothetical drop. end might be null.
		// Returning a null value signals an invalid drop cell.
		computeExternalDrop: function(cell, meta) {
			var dropLocation = {
				start: cell.start.clone(),
				end: null
			};

			// if dropped on an all-day cell, and element's metadata specified a time, set it
			if (meta.startTime && !dropLocation.start.hasTime()) {
				dropLocation.start.time(meta.startTime);
			}

			if (meta.duration) {
				dropLocation.end = dropLocation.start.clone().add(meta.duration);
			}

			if (!this.view.calendar.isExternalDropRangeAllowed(dropLocation, meta.eventProps)) {
				return null;
			}

			return dropLocation;
		},



		/* Drag Rendering (for both events and an external elements)
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of an event or external element being dragged.
		// `dropLocation` contains hypothetical start/end/allDay values the event would have if dropped. end can be null.
		// `seg` is the internal segment object that is being dragged. If dragging an external element, `seg` is null.
		// A truthy returned value indicates this method has rendered a helper element.
		renderDrag: function(dropLocation, seg) {
			// subclasses must implement
		},


		// Unrenders a visual indication of an event or external element being dragged
		destroyDrag: function() {
			// subclasses must implement
		},


		/* Resizing
		------------------------------------------------------------------------------------------------------------------*/


		// Called when the user does a mousedown on an event's resizer, which might lead to resizing.
		// Generic enough to work with any type of Grid.
		segResizeMousedown: function(seg, ev) {
			var _this = this;
			var view = this.view;
			var calendar = view.calendar;
			var el = seg.el;
			var event = seg.event;
			var start = event.start;
			var oldEnd = calendar.getEventEnd(event);
			var newEnd; // falsy if invalid resize
			var dragListener;

			function destroy() { // resets the rendering to show the original event
				_this.destroyEventResize();
				view.showEvent(event);
				enableCursor();
			}

			// Tracks mouse movement over the *grid's* coordinate map
			dragListener = new DragListener(this.coordMap, {
				distance: 5,
				scroll: view.opt('dragScroll'),
				dragStart: function(ev) {
					_this.triggerSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
					_this.isResizingSeg = true;
					view.trigger('eventResizeStart', el[0], event, ev, {}); // last argument is jqui dummy
				},
				cellOver: function(cell) {
					newEnd = cell.end;

					if (!newEnd.isAfter(start)) { // was end moved before start?
						newEnd = start.clone().add( // make the event span a single slot
							diffDayTime(cell.end, cell.start) // assumes all slot durations are the same
						);
					}

					if (newEnd.isSame(oldEnd)) {
						newEnd = null;
					}
					else if (!calendar.isEventRangeAllowed({ start: start, end: newEnd }, event)) {
						newEnd = null;
						disableCursor();
					}
					else {
						_this.renderEventResize({ start: start, end: newEnd }, seg);
						view.hideEvent(event);
					}
				},
				cellOut: function() { // called before mouse moves to a different cell OR moved out of all cells
					newEnd = null;
					destroy();
				},
				dragStop: function(ev) {
					_this.isResizingSeg = false;
					destroy();
					view.trigger('eventResizeStop', el[0], event, ev, {}); // last argument is jqui dummy

					if (newEnd) { // valid date to resize to?
						view.reportEventResize(event, newEnd, el, ev);
					}
				}
			});

			dragListener.mousedown(ev); // start listening, which will eventually lead to a dragStart
		},


		// Renders a visual indication of an event being resized.
		// `range` has the updated dates of the event. `seg` is the original segment object involved in the drag.
		renderEventResize: function(range, seg) {
			// subclasses must implement
		},


		// Unrenders a visual indication of an event being resized.
		destroyEventResize: function() {
			// subclasses must implement
		},


		/* Rendering Utils
		------------------------------------------------------------------------------------------------------------------*/


		// Compute the text that should be displayed on an event's element.
		// `range` can be the Event object itself, or something range-like, with at least a `start`.
		// The `timeFormat` options and the grid's default format is used, but `formatStr` can override.
		getEventTimeText: function(range, formatStr) {

			formatStr = formatStr || this.eventTimeFormat;

			if (range.end && this.displayEventEnd) {
				return this.view.formatRange(range, formatStr);
			}
			else {
				return range.start.format(formatStr);
			}
		},


		// Generic utility for generating the HTML classNames for an event segment's element
		getSegClasses: function(seg, isDraggable, isResizable) {
			var event = seg.event;
			var classes = [
				'fc-event',
				seg.isStart ? 'fc-start' : 'fc-not-start',
				seg.isEnd ? 'fc-end' : 'fc-not-end'
			].concat(
				event.className,
				event.source ? event.source.className : []
			);

			if (isDraggable) {
				classes.push('fc-draggable');
			}
			if (isResizable) {
				classes.push('fc-resizable');
			}

			return classes;
		},


		// Utility for generating a CSS string with all the event skin-related properties
		getEventSkinCss: function(event) {
			var view = this.view;
			var source = event.source || {};
			var eventColor = event.color;
			var sourceColor = source.color;
			var optionColor = view.opt('eventColor');
			var backgroundColor =
				event.backgroundColor ||
				eventColor ||
				source.backgroundColor ||
				sourceColor ||
				view.opt('eventBackgroundColor') ||
				optionColor;
			var borderColor =
				event.borderColor ||
				eventColor ||
				source.borderColor ||
				sourceColor ||
				view.opt('eventBorderColor') ||
				optionColor;
			var textColor =
				event.textColor ||
				source.textColor ||
				view.opt('eventTextColor');
			var statements = [];
			if (backgroundColor) {
				statements.push('background-color:' + backgroundColor);
			}
			if (borderColor) {
				statements.push('border-color:' + borderColor);
			}
			if (textColor) {
				statements.push('color:' + textColor);
			}
			return statements.join(';');
		},


		/* Converting events -> ranges -> segs
		------------------------------------------------------------------------------------------------------------------*/


		// Converts an array of event objects into an array of event segment objects.
		// A custom `rangeToSegsFunc` may be given for arbitrarily slicing up events.
		eventsToSegs: function(events, rangeToSegsFunc) {
			var eventRanges = this.eventsToRanges(events);
			var segs = [];
			var i;

			for (i = 0; i < eventRanges.length; i++) {
				segs.push.apply(
					segs,
					this.eventRangeToSegs(eventRanges[i], rangeToSegsFunc)
				);
			}

			return segs;
		},


		// Converts an array of events into an array of "range" objects.
		// A "range" object is a plain object with start/end properties denoting the time it covers. Also an event property.
		// For "normal" events, this will be identical to the event's start/end, but for "inverse-background" events,
		// will create an array of ranges that span the time *not* covered by the given event.
		eventsToRanges: function(events) {
			var _this = this;
			var eventsById = groupEventsById(events);
			var ranges = [];

			// group by ID so that related inverse-background events can be rendered together
			$.each(eventsById, function(id, eventGroup) {
				if (eventGroup.length) {
					ranges.push.apply(
						ranges,
						isInverseBgEvent(eventGroup[0]) ?
							_this.eventsToInverseRanges(eventGroup) :
							_this.eventsToNormalRanges(eventGroup)
					);
				}
			});

			return ranges;
		},


		// Converts an array of "normal" events (not inverted rendering) into a parallel array of ranges
		eventsToNormalRanges: function(events) {
			var calendar = this.view.calendar;
			var ranges = [];
			var i, event;
			var eventStart, eventEnd;

			for (i = 0; i < events.length; i++) {
				event = events[i];

				// make copies and normalize by stripping timezone
				eventStart = event.start.clone().stripZone();
				eventEnd = calendar.getEventEnd(event).stripZone();

				ranges.push({
					event: event,
					start: eventStart,
					end: eventEnd,
					eventStartMS: +eventStart,
					eventDurationMS: eventEnd - eventStart
				});
			}

			return ranges;
		},


		// Converts an array of events, with inverse-background rendering, into an array of range objects.
		// The range objects will cover all the time NOT covered by the events.
		eventsToInverseRanges: function(events) {
			var view = this.view;
			var viewStart = view.start.clone().stripZone(); // normalize timezone
			var viewEnd = view.end.clone().stripZone(); // normalize timezone
			var normalRanges = this.eventsToNormalRanges(events); // will give us normalized dates we can use w/o copies
			var inverseRanges = [];
			var event0 = events[0]; // assign this to each range's `.event`
			var start = viewStart; // the end of the previous range. the start of the new range
			var i, normalRange;

			// ranges need to be in order. required for our date-walking algorithm
			normalRanges.sort(compareNormalRanges);

			for (i = 0; i < normalRanges.length; i++) {
				normalRange = normalRanges[i];

				// add the span of time before the event (if there is any)
				if (normalRange.start > start) { // compare millisecond time (skip any ambig logic)
					inverseRanges.push({
						event: event0,
						start: start,
						end: normalRange.start
					});
				}

				start = normalRange.end;
			}

			// add the span of time after the last event (if there is any)
			if (start < viewEnd) { // compare millisecond time (skip any ambig logic)
				inverseRanges.push({
					event: event0,
					start: start,
					end: viewEnd
				});
			}

			return inverseRanges;
		},


		// Slices the given event range into one or more segment objects.
		// A `rangeToSegsFunc` custom slicing function can be given.
		eventRangeToSegs: function(eventRange, rangeToSegsFunc) {
			var segs;
			var i, seg;

			if (rangeToSegsFunc) {
				segs = rangeToSegsFunc(eventRange);
			}
			else {
				segs = this.rangeToSegs(eventRange); // defined by the subclass
			}

			for (i = 0; i < segs.length; i++) {
				seg = segs[i];
				seg.event = eventRange.event;
				seg.eventStartMS = eventRange.eventStartMS;
				seg.eventDurationMS = eventRange.eventDurationMS;
			}

			return segs;
		}

	});


	/* Utilities
	----------------------------------------------------------------------------------------------------------------------*/


	function isBgEvent(event) { // returns true if background OR inverse-background
		var rendering = getEventRendering(event);
		return rendering === 'background' || rendering === 'inverse-background';
	}


	function isInverseBgEvent(event) {
		return getEventRendering(event) === 'inverse-background';
	}


	function getEventRendering(event) {
		return firstDefined((event.source || {}).rendering, event.rendering);
	}


	function groupEventsById(events) {
		var eventsById = {};
		var i, event;

		for (i = 0; i < events.length; i++) {
			event = events[i];
			(eventsById[event._id] || (eventsById[event._id] = [])).push(event);
		}

		return eventsById;
	}


	// A cmp function for determining which non-inverted "ranges" (see above) happen earlier
	function compareNormalRanges(range1, range2) {
		return range1.eventStartMS - range2.eventStartMS; // earlier ranges go first
	}


	// A cmp function for determining which segments should take visual priority
	// DOES NOT WORK ON INVERTED BACKGROUND EVENTS because they have no eventStartMS/eventDurationMS
	function compareSegs(seg1, seg2) {
		return seg1.eventStartMS - seg2.eventStartMS || // earlier events go first
			seg2.eventDurationMS - seg1.eventDurationMS || // tie? longer events go first
			seg2.event.allDay - seg1.event.allDay || // tie? put all-day events first (booleans cast to 0/1)
			(seg1.event.title || '').localeCompare(seg2.event.title); // tie? alphabetically by title
	}

	fc.compareSegs = compareSegs; // export


	/* External-Dragging-Element Data
	----------------------------------------------------------------------------------------------------------------------*/

	// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
	// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
	fc.dataAttrPrefix = '';

	// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
	// to be used for Event Object creation.
	// A defined `.eventProps`, even when empty, indicates that an event should be created.
	function getDraggedElMeta(el) {
		var prefix = fc.dataAttrPrefix;
		var eventProps; // properties for creating the event, not related to date/time
		var startTime; // a Duration
		var duration;
		var stick;

		if (prefix) { prefix += '-'; }
		eventProps = el.data(prefix + 'event') || null;

		if (eventProps) {
			if (typeof eventProps === 'object') {
				eventProps = $.extend({}, eventProps); // make a copy
			}
			else { // something like 1 or true. still signal event creation
				eventProps = {};
			}

			// pluck special-cased date/time properties
			startTime = eventProps.start;
			if (startTime == null) { startTime = eventProps.time; } // accept 'time' as well
			duration = eventProps.duration;
			stick = eventProps.stick;
			delete eventProps.start;
			delete eventProps.time;
			delete eventProps.duration;
			delete eventProps.stick;
		}

		// fallback to standalone attribute values for each of the date/time properties
		if (startTime == null) { startTime = el.data(prefix + 'start'); }
		if (startTime == null) { startTime = el.data(prefix + 'time'); } // accept 'time' as well
		if (duration == null) { duration = el.data(prefix + 'duration'); }
		if (stick == null) { stick = el.data(prefix + 'stick'); }

		// massage into correct data types
		startTime = startTime != null ? moment.duration(startTime) : null;
		duration = duration != null ? moment.duration(duration) : null;
		stick = Boolean(stick);

		return { eventProps: eventProps, startTime: startTime, duration: duration, stick: stick };
	}


	;;

	/* A component that renders a grid of whole-days that runs horizontally. There can be multiple rows, one per week.
	----------------------------------------------------------------------------------------------------------------------*/

	var DayGrid = Grid.extend({

		numbersVisible: false, // should render a row for day/week numbers? set by outside view. TODO: make internal
		bottomCoordPadding: 0, // hack for extending the hit area for the last row of the coordinate grid
		breakOnWeeks: null, // should create a new row for each week? set by outside view

		cellDates: null, // flat chronological array of each cell's dates
		dayToCellOffsets: null, // maps days offsets from grid's start date, to cell offsets

		rowEls: null, // set of fake row elements
		dayEls: null, // set of whole-day elements comprising the row's background
		helperEls: null, // set of cell skeleton elements for rendering the mock event "helper"


		// Renders the rows and columns into the component's `this.el`, which should already be assigned.
		// isRigid determins whether the individual rows should ignore the contents and be a constant height.
		// Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
		render: function(isRigid) {
			var view = this.view;
			var rowCnt = this.rowCnt;
			var colCnt = this.colCnt;
			var cellCnt = rowCnt * colCnt;
			var html = '';
			var row;
			var i, cell;

			for (row = 0; row < rowCnt; row++) {
				html += this.dayRowHtml(row, isRigid);
			}
			this.el.html(html);

			this.rowEls = this.el.find('.fc-row');
			this.dayEls = this.el.find('.fc-day');

			// trigger dayRender with each cell's element
			for (i = 0; i < cellCnt; i++) {
				cell = this.getCell(i);
				view.trigger('dayRender', null, cell.start, this.dayEls.eq(i));
			}

			Grid.prototype.render.call(this); // call the super-method
		},


		destroy: function() {
			this.destroySegPopover();
			Grid.prototype.destroy.call(this); // call the super-method
		},


		// Generates the HTML for a single row. `row` is the row number.
		dayRowHtml: function(row, isRigid) {
			var view = this.view;
			var classes = [ 'fc-row', 'fc-week', view.widgetContentClass ];

			if (isRigid) {
				classes.push('fc-rigid');
			}

			return '' +
				'<div class="' + classes.join(' ') + '">' +
					'<div class="fc-bg">' +
						'<table>' +
							this.rowHtml('day', row) + // leverages RowRenderer. calls dayCellHtml()
						'</table>' +
					'</div>' +
					'<div class="fc-content-skeleton">' +
						'<table>' +
							(this.numbersVisible ?
								'<thead>' +
									this.rowHtml('number', row) + // leverages RowRenderer. View will define render method
								'</thead>' :
								''
								) +
						'</table>' +
					'</div>' +
				'</div>';
		},


		// Renders the HTML for a whole-day cell. Will eventually end up in the day-row's background.
		// We go through a 'day' row type instead of just doing a 'bg' row type so that the View can do custom rendering
		// specifically for whole-day rows, whereas a 'bg' might also be used for other purposes (TimeGrid bg for example).
		dayCellHtml: function(cell) {
			return this.bgCellHtml(cell);
		},


		/* Options
		------------------------------------------------------------------------------------------------------------------*/


		// Computes a default column header formatting string if `colFormat` is not explicitly defined
		computeColHeadFormat: function() {
			if (this.rowCnt > 1) { // more than one week row. day numbers will be in each cell
				return 'ddd'; // "Sat"
			}
			else if (this.colCnt > 1) { // multiple days, so full single date string WON'T be in title text
				return this.view.opt('dayOfMonthFormat'); // "Sat 12/10"
			}
			else { // single day, so full single date string will probably be in title text
				return 'dddd'; // "Saturday"
			}
		},


		// Computes a default event time formatting string if `timeFormat` is not explicitly defined
		computeEventTimeFormat: function() {
			return this.view.opt('extraSmallTimeFormat'); // like "6p" or "6:30p"
		},


		// Computes a default `displayEventEnd` value if one is not expliclty defined
		computeDisplayEventEnd: function() {
			return this.colCnt == 1; // we'll likely have space if there's only one day
		},


		/* Cell System
		------------------------------------------------------------------------------------------------------------------*/


		// Initializes row/col information
		updateCells: function() {
			var cellDates;
			var firstDay;
			var rowCnt;
			var colCnt;

			this.updateCellDates(); // populates cellDates and dayToCellOffsets
			cellDates = this.cellDates;

			if (this.breakOnWeeks) {
				// count columns until the day-of-week repeats
				firstDay = cellDates[0].day();
				for (colCnt = 1; colCnt < cellDates.length; colCnt++) {
					if (cellDates[colCnt].day() == firstDay) {
						break;
					}
				}
				rowCnt = Math.ceil(cellDates.length / colCnt);
			}
			else {
				rowCnt = 1;
				colCnt = cellDates.length;
			}

			this.rowCnt = rowCnt;
			this.colCnt = colCnt;
		},


		// Populates cellDates and dayToCellOffsets
		updateCellDates: function() {
			var view = this.view;
			var date = this.start.clone();
			var dates = [];
			var offset = -1;
			var offsets = [];

			while (date.isBefore(this.end)) { // loop each day from start to end
				if (view.isHiddenDay(date)) {
					offsets.push(offset + 0.5); // mark that it's between offsets
				}
				else {
					offset++;
					offsets.push(offset);
					dates.push(date.clone());
				}
				date.add(1, 'days');
			}

			this.cellDates = dates;
			this.dayToCellOffsets = offsets;
		},


		// Given a cell object, generates a range object
		computeCellRange: function(cell) {
			var colCnt = this.colCnt;
			var index = cell.row * colCnt + (this.isRTL ? colCnt - cell.col - 1 : cell.col);
			var start = this.cellDates[index].clone();
			var end = start.clone().add(1, 'day');

			return { start: start, end: end };
		},


		// Retrieves the element representing the given row
		getRowEl: function(row) {
			return this.rowEls.eq(row);
		},


		// Retrieves the element representing the given column
		getColEl: function(col) {
			return this.dayEls.eq(col);
		},


		// Gets the whole-day element associated with the cell
		getCellDayEl: function(cell) {
			return this.dayEls.eq(cell.row * this.colCnt + cell.col);
		},


		// Overrides Grid's method for when row coordinates are computed
		computeRowCoords: function() {
			var rowCoords = Grid.prototype.computeRowCoords.call(this); // call the super-method

			// hack for extending last row (used by AgendaView)
			rowCoords[rowCoords.length - 1].bottom += this.bottomCoordPadding;

			return rowCoords;
		},


		/* Dates
		------------------------------------------------------------------------------------------------------------------*/


		// Slices up a date range by row into an array of segments
		rangeToSegs: function(range) {
			var isRTL = this.isRTL;
			var rowCnt = this.rowCnt;
			var colCnt = this.colCnt;
			var segs = [];
			var first, last; // inclusive cell-offset range for given range
			var row;
			var rowFirst, rowLast; // inclusive cell-offset range for current row
			var isStart, isEnd;
			var segFirst, segLast; // inclusive cell-offset range for segment
			var seg;

			range = this.view.computeDayRange(range); // make whole-day range, considering nextDayThreshold
			first = this.dateToCellOffset(range.start);
			last = this.dateToCellOffset(range.end.subtract(1, 'days')); // offset of inclusive end date

			for (row = 0; row < rowCnt; row++) {
				rowFirst = row * colCnt;
				rowLast = rowFirst + colCnt - 1;

				// intersect segment's offset range with the row's
				segFirst = Math.max(rowFirst, first);
				segLast = Math.min(rowLast, last);

				// deal with in-between indices
				segFirst = Math.ceil(segFirst); // in-between starts round to next cell
				segLast = Math.floor(segLast); // in-between ends round to prev cell

				if (segFirst <= segLast) { // was there any intersection with the current row?

					// must be matching integers to be the segment's start/end
					isStart = segFirst === first;
					isEnd = segLast === last;

					// translate offsets to be relative to start-of-row
					segFirst -= rowFirst;
					segLast -= rowFirst;

					seg = { row: row, isStart: isStart, isEnd: isEnd };
					if (isRTL) {
						seg.leftCol = colCnt - segLast - 1;
						seg.rightCol = colCnt - segFirst - 1;
					}
					else {
						seg.leftCol = segFirst;
						seg.rightCol = segLast;
					}
					segs.push(seg);
				}
			}

			return segs;
		},


		// Given a date, returns its chronolocial cell-offset from the first cell of the grid.
		// If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
		// If before the first offset, returns a negative number.
		// If after the last offset, returns an offset past the last cell offset.
		// Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
		dateToCellOffset: function(date) {
			var offsets = this.dayToCellOffsets;
			var day = date.diff(this.start, 'days');

			if (day < 0) {
				return offsets[0] - 1;
			}
			else if (day >= offsets.length) {
				return offsets[offsets.length - 1] + 1;
			}
			else {
				return offsets[day];
			}
		},


		/* Event Drag Visualization
		------------------------------------------------------------------------------------------------------------------*/
		// TODO: move to DayGrid.event, similar to what we did with Grid's drag methods


		// Renders a visual indication of an event or external element being dragged.
		// The dropLocation's end can be null. seg can be null. See Grid::renderDrag for more info.
		renderDrag: function(dropLocation, seg) {
			var opacity;

			// always render a highlight underneath
			this.renderHighlight(
				this.view.calendar.ensureVisibleEventRange(dropLocation) // needs to be a proper range
			);

			// if a segment from the same calendar but another component is being dragged, render a helper event
			if (seg && !seg.el.closest(this.el).length) {

				this.renderRangeHelper(dropLocation, seg);

				opacity = this.view.opt('dragOpacity');
				if (opacity !== undefined) {
					this.helperEls.css('opacity', opacity);
				}

				return true; // a helper has been rendered
			}
		},


		// Unrenders any visual indication of a hovering event
		destroyDrag: function() {
			this.destroyHighlight();
			this.destroyHelper();
		},


		/* Event Resize Visualization
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of an event being resized
		renderEventResize: function(range, seg) {
			this.renderHighlight(range);
			this.renderRangeHelper(range, seg);
		},


		// Unrenders a visual indication of an event being resized
		destroyEventResize: function() {
			this.destroyHighlight();
			this.destroyHelper();
		},


		/* Event Helper
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
		renderHelper: function(event, sourceSeg) {
			var helperNodes = [];
			var segs = this.eventsToSegs([ event ]);
			var rowStructs;

			segs = this.renderFgSegEls(segs); // assigns each seg's el and returns a subset of segs that were rendered
			rowStructs = this.renderSegRows(segs);

			// inject each new event skeleton into each associated row
			this.rowEls.each(function(row, rowNode) {
				var rowEl = $(rowNode); // the .fc-row
				var skeletonEl = $('<div class="fc-helper-skeleton"><table/></div>'); // will be absolutely positioned
				var skeletonTop;

				// If there is an original segment, match the top position. Otherwise, put it at the row's top level
				if (sourceSeg && sourceSeg.row === row) {
					skeletonTop = sourceSeg.el.position().top;
				}
				else {
					skeletonTop = rowEl.find('.fc-content-skeleton tbody').position().top;
				}

				skeletonEl.css('top', skeletonTop)
					.find('table')
						.append(rowStructs[row].tbodyEl);

				rowEl.append(skeletonEl);
				helperNodes.push(skeletonEl[0]);
			});

			this.helperEls = $(helperNodes); // array -> jQuery set
		},


		// Unrenders any visual indication of a mock helper event
		destroyHelper: function() {
			if (this.helperEls) {
				this.helperEls.remove();
				this.helperEls = null;
			}
		},


		/* Fill System (highlight, background events, business hours)
		------------------------------------------------------------------------------------------------------------------*/


		fillSegTag: 'td', // override the default tag name


		// Renders a set of rectangles over the given segments of days.
		// Only returns segments that successfully rendered.
		renderFill: function(type, segs) {
			var nodes = [];
			var i, seg;
			var skeletonEl;

			segs = this.renderFillSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs

			for (i = 0; i < segs.length; i++) {
				seg = segs[i];
				skeletonEl = this.renderFillRow(type, seg);
				this.rowEls.eq(seg.row).append(skeletonEl);
				nodes.push(skeletonEl[0]);
			}

			this.elsByFill[type] = $(nodes);

			return segs;
		},


		// Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
		renderFillRow: function(type, seg) {
			var colCnt = this.colCnt;
			var startCol = seg.leftCol;
			var endCol = seg.rightCol + 1;
			var skeletonEl;
			var trEl;

			skeletonEl = $(
				'<div class="fc-' + type.toLowerCase() + '-skeleton">' +
					'<table><tr/></table>' +
				'</div>'
			);
			trEl = skeletonEl.find('tr');

			if (startCol > 0) {
				trEl.append('<td colspan="' + startCol + '"/>');
			}

			trEl.append(
				seg.el.attr('colspan', endCol - startCol)
			);

			if (endCol < colCnt) {
				trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
			}

			this.bookendCells(trEl, type);

			return skeletonEl;
		}

	});

	;;

	/* Event-rendering methods for the DayGrid class
	----------------------------------------------------------------------------------------------------------------------*/

	DayGrid.mixin({

		rowStructs: null, // an array of objects, each holding information about a row's foreground event-rendering


		// Unrenders all events currently rendered on the grid
		destroyEvents: function() {
			this.destroySegPopover(); // removes the "more.." events popover
			Grid.prototype.destroyEvents.apply(this, arguments); // calls the super-method
		},


		// Retrieves all rendered segment objects currently rendered on the grid
		getEventSegs: function() {
			return Grid.prototype.getEventSegs.call(this) // get the segments from the super-method
				.concat(this.popoverSegs || []); // append the segments from the "more..." popover
		},


		// Renders the given background event segments onto the grid
		renderBgSegs: function(segs) {

			// don't render timed background events
			var allDaySegs = $.grep(segs, function(seg) {
				return seg.event.allDay;
			});

			return Grid.prototype.renderBgSegs.call(this, allDaySegs); // call the super-method
		},


		// Renders the given foreground event segments onto the grid
		renderFgSegs: function(segs) {
			var rowStructs;

			// render an `.el` on each seg
			// returns a subset of the segs. segs that were actually rendered
			segs = this.renderFgSegEls(segs);

			rowStructs = this.rowStructs = this.renderSegRows(segs);

			// append to each row's content skeleton
			this.rowEls.each(function(i, rowNode) {
				$(rowNode).find('.fc-content-skeleton > table').append(
					rowStructs[i].tbodyEl
				);
			});

			return segs; // return only the segs that were actually rendered
		},


		// Unrenders all currently rendered foreground event segments
		destroyFgSegs: function() {
			var rowStructs = this.rowStructs || [];
			var rowStruct;

			while ((rowStruct = rowStructs.pop())) {
				rowStruct.tbodyEl.remove();
			}

			this.rowStructs = null;
		},


		// Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
		// Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
		// PRECONDITION: each segment shoud already have a rendered and assigned `.el`
		renderSegRows: function(segs) {
			var rowStructs = [];
			var segRows;
			var row;

			segRows = this.groupSegRows(segs); // group into nested arrays

			// iterate each row of segment groupings
			for (row = 0; row < segRows.length; row++) {
				rowStructs.push(
					this.renderSegRow(row, segRows[row])
				);
			}

			return rowStructs;
		},


		// Builds the HTML to be used for the default element for an individual segment
		fgSegHtml: function(seg, disableResizing) {
			var view = this.view;
			var event = seg.event;
			var isDraggable = view.isEventDraggable(event);
			var isResizable = !disableResizing && event.allDay && seg.isEnd && view.isEventResizable(event);
			var classes = this.getSegClasses(seg, isDraggable, isResizable);
			var skinCss = this.getEventSkinCss(event);
			var timeHtml = '';
			var titleHtml;

			classes.unshift('fc-day-grid-event');

			// Only display a timed events time if it is the starting segment
			if (!event.allDay && seg.isStart) {
				timeHtml = '<span class="fc-time">' + htmlEscape(this.getEventTimeText(event)) + '</span>';
			}

			titleHtml =
				'<span class="fc-title">' +
					(htmlEscape(event.title || '') || '&nbsp;') + // we always want one line of height
				'</span>';
			
			return '<a class="' + classes.join(' ') + '"' +
					(event.url ?
						' href="' + htmlEscape(event.url) + '"' :
						''
						) +
					(skinCss ?
						' style="' + skinCss + '"' :
						''
						) +
				'>' +
					'<div class="fc-content">' +
						(this.isRTL ?
							titleHtml + ' ' + timeHtml : // put a natural space in between
							timeHtml + ' ' + titleHtml   //
							) +
					'</div>' +
					(isResizable ?
						'<div class="fc-resizer"/>' :
						''
						) +
				'</a>';
		},


		// Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
		// the segments. Returns object with a bunch of internal data about how the render was calculated.
		renderSegRow: function(row, rowSegs) {
			var colCnt = this.colCnt;
			var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
			var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
			var tbody = $('<tbody/>');
			var segMatrix = []; // lookup for which segments are rendered into which level+col cells
			var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
			var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
			var i, levelSegs;
			var col;
			var tr;
			var j, seg;
			var td;

			// populates empty cells from the current column (`col`) to `endCol`
			function emptyCellsUntil(endCol) {
				while (col < endCol) {
					// try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
					td = (loneCellMatrix[i - 1] || [])[col];
					if (td) {
						td.attr(
							'rowspan',
							parseInt(td.attr('rowspan') || 1, 10) + 1
						);
					}
					else {
						td = $('<td/>');
						tr.append(td);
					}
					cellMatrix[i][col] = td;
					loneCellMatrix[i][col] = td;
					col++;
				}
			}

			for (i = 0; i < levelCnt; i++) { // iterate through all levels
				levelSegs = segLevels[i];
				col = 0;
				tr = $('<tr/>');

				segMatrix.push([]);
				cellMatrix.push([]);
				loneCellMatrix.push([]);

				// levelCnt might be 1 even though there are no actual levels. protect against this.
				// this single empty row is useful for styling.
				if (levelSegs) {
					for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
						seg = levelSegs[j];

						emptyCellsUntil(seg.leftCol);

						// create a container that occupies or more columns. append the event element.
						td = $('<td class="fc-event-container"/>').append(seg.el);
						if (seg.leftCol != seg.rightCol) {
							td.attr('colspan', seg.rightCol - seg.leftCol + 1);
						}
						else { // a single-column segment
							loneCellMatrix[i][col] = td;
						}

						while (col <= seg.rightCol) {
							cellMatrix[i][col] = td;
							segMatrix[i][col] = seg;
							col++;
						}

						tr.append(td);
					}
				}

				emptyCellsUntil(colCnt); // finish off the row
				this.bookendCells(tr, 'eventSkeleton');
				tbody.append(tr);
			}

			return { // a "rowStruct"
				row: row, // the row number
				tbodyEl: tbody,
				cellMatrix: cellMatrix,
				segMatrix: segMatrix,
				segLevels: segLevels,
				segs: rowSegs
			};
		},


		// Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
		buildSegLevels: function(segs) {
			var levels = [];
			var i, seg;
			var j;

			// Give preference to elements with certain criteria, so they have
			// a chance to be closer to the top.
			segs.sort(compareSegs);
			
			for (i = 0; i < segs.length; i++) {
				seg = segs[i];

				// loop through levels, starting with the topmost, until the segment doesn't collide with other segments
				for (j = 0; j < levels.length; j++) {
					if (!isDaySegCollision(seg, levels[j])) {
						break;
					}
				}
				// `j` now holds the desired subrow index
				seg.level = j;

				// create new level array if needed and append segment
				(levels[j] || (levels[j] = [])).push(seg);
			}

			// order segments left-to-right. very important if calendar is RTL
			for (j = 0; j < levels.length; j++) {
				levels[j].sort(compareDaySegCols);
			}

			return levels;
		},


		// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
		groupSegRows: function(segs) {
			var segRows = [];
			var i;

			for (i = 0; i < this.rowCnt; i++) {
				segRows.push([]);
			}

			for (i = 0; i < segs.length; i++) {
				segRows[segs[i].row].push(segs[i]);
			}

			return segRows;
		}

	});


	// Computes whether two segments' columns collide. They are assumed to be in the same row.
	function isDaySegCollision(seg, otherSegs) {
		var i, otherSeg;

		for (i = 0; i < otherSegs.length; i++) {
			otherSeg = otherSegs[i];

			if (
				otherSeg.leftCol <= seg.rightCol &&
				otherSeg.rightCol >= seg.leftCol
			) {
				return true;
			}
		}

		return false;
	}


	// A cmp function for determining the leftmost event
	function compareDaySegCols(a, b) {
		return a.leftCol - b.leftCol;
	}

	;;

	/* Methods relate to limiting the number events for a given day on a DayGrid
	----------------------------------------------------------------------------------------------------------------------*/
	// NOTE: all the segs being passed around in here are foreground segs

	DayGrid.mixin({

		segPopover: null, // the Popover that holds events that can't fit in a cell. null when not visible
		popoverSegs: null, // an array of segment objects that the segPopover holds. null when not visible


		destroySegPopover: function() {
			if (this.segPopover) {
				this.segPopover.hide(); // will trigger destruction of `segPopover` and `popoverSegs`
			}
		},


		// Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
		// `levelLimit` can be false (don't limit), a number, or true (should be computed).
		limitRows: function(levelLimit) {
			var rowStructs = this.rowStructs || [];
			var row; // row #
			var rowLevelLimit;

			for (row = 0; row < rowStructs.length; row++) {
				this.unlimitRow(row);

				if (!levelLimit) {
					rowLevelLimit = false;
				}
				else if (typeof levelLimit === 'number') {
					rowLevelLimit = levelLimit;
				}
				else {
					rowLevelLimit = this.computeRowLevelLimit(row);
				}

				if (rowLevelLimit !== false) {
					this.limitRow(row, rowLevelLimit);
				}
			}
		},


		// Computes the number of levels a row will accomodate without going outside its bounds.
		// Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
		// `row` is the row number.
		computeRowLevelLimit: function(row) {
			var rowEl = this.rowEls.eq(row); // the containing "fake" row div
			var rowHeight = rowEl.height(); // TODO: cache somehow?
			var trEls = this.rowStructs[row].tbodyEl.children();
			var i, trEl;

			// Reveal one level <tr> at a time and stop when we find one out of bounds
			for (i = 0; i < trEls.length; i++) {
				trEl = trEls.eq(i).removeClass('fc-limited'); // get and reveal
				if (trEl.position().top + trEl.outerHeight() > rowHeight) {
					return i;
				}
			}

			return false; // should not limit at all
		},


		// Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
		// `row` is the row number.
		// `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
		limitRow: function(row, levelLimit) {
			var _this = this;
			var rowStruct = this.rowStructs[row];
			var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
			var col = 0; // col #, left-to-right (not chronologically)
			var cell;
			var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
			var cellMatrix; // a matrix (by level, then column) of all <td> jQuery elements in the row
			var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
			var i, seg;
			var segsBelow; // array of segment objects below `seg` in the current `col`
			var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
			var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
			var td, rowspan;
			var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
			var j;
			var moreTd, moreWrap, moreLink;

			// Iterates through empty level cells and places "more" links inside if need be
			function emptyCellsUntil(endCol) { // goes from current `col` to `endCol`
				while (col < endCol) {
					cell = _this.getCell(row, col);
					segsBelow = _this.getCellSegs(cell, levelLimit);
					if (segsBelow.length) {
						td = cellMatrix[levelLimit - 1][col];
						moreLink = _this.renderMoreLink(cell, segsBelow);
						moreWrap = $('<div/>').append(moreLink);
						td.append(moreWrap);
						moreNodes.push(moreWrap[0]);
					}
					col++;
				}
			}

			if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
				levelSegs = rowStruct.segLevels[levelLimit - 1];
				cellMatrix = rowStruct.cellMatrix;

				limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit) // get level <tr> elements past the limit
					.addClass('fc-limited').get(); // hide elements and get a simple DOM-nodes array

				// iterate though segments in the last allowable level
				for (i = 0; i < levelSegs.length; i++) {
					seg = levelSegs[i];
					emptyCellsUntil(seg.leftCol); // process empty cells before the segment

					// determine *all* segments below `seg` that occupy the same columns
					colSegsBelow = [];
					totalSegsBelow = 0;
					while (col <= seg.rightCol) {
						cell = this.getCell(row, col);
						segsBelow = this.getCellSegs(cell, levelLimit);
						colSegsBelow.push(segsBelow);
						totalSegsBelow += segsBelow.length;
						col++;
					}

					if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
						td = cellMatrix[levelLimit - 1][seg.leftCol]; // the segment's parent cell
						rowspan = td.attr('rowspan') || 1;
						segMoreNodes = [];

						// make a replacement <td> for each column the segment occupies. will be one for each colspan
						for (j = 0; j < colSegsBelow.length; j++) {
							moreTd = $('<td class="fc-more-cell"/>').attr('rowspan', rowspan);
							segsBelow = colSegsBelow[j];
							cell = this.getCell(row, seg.leftCol + j);
							moreLink = this.renderMoreLink(cell, [ seg ].concat(segsBelow)); // count seg as hidden too
							moreWrap = $('<div/>').append(moreLink);
							moreTd.append(moreWrap);
							segMoreNodes.push(moreTd[0]);
							moreNodes.push(moreTd[0]);
						}

						td.addClass('fc-limited').after($(segMoreNodes)); // hide original <td> and inject replacements
						limitedNodes.push(td[0]);
					}
				}

				emptyCellsUntil(this.colCnt); // finish off the level
				rowStruct.moreEls = $(moreNodes); // for easy undoing later
				rowStruct.limitedEls = $(limitedNodes); // for easy undoing later
			}
		},


		// Reveals all levels and removes all "more"-related elements for a grid's row.
		// `row` is a row number.
		unlimitRow: function(row) {
			var rowStruct = this.rowStructs[row];

			if (rowStruct.moreEls) {
				rowStruct.moreEls.remove();
				rowStruct.moreEls = null;
			}

			if (rowStruct.limitedEls) {
				rowStruct.limitedEls.removeClass('fc-limited');
				rowStruct.limitedEls = null;
			}
		},


		// Renders an <a> element that represents hidden event element for a cell.
		// Responsible for attaching click handler as well.
		renderMoreLink: function(cell, hiddenSegs) {
			var _this = this;
			var view = this.view;

			return $('<a class="fc-more"/>')
				.text(
					this.getMoreLinkText(hiddenSegs.length)
				)
				.on('click', function(ev) {
					var clickOption = view.opt('eventLimitClick');
					var date = cell.start;
					var moreEl = $(this);
					var dayEl = _this.getCellDayEl(cell);
					var allSegs = _this.getCellSegs(cell);

					// rescope the segments to be within the cell's date
					var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
					var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);

					if (typeof clickOption === 'function') {
						// the returned value can be an atomic option
						clickOption = view.trigger('eventLimitClick', null, {
							date: date,
							dayEl: dayEl,
							moreEl: moreEl,
							segs: reslicedAllSegs,
							hiddenSegs: reslicedHiddenSegs
						}, ev);
					}

					if (clickOption === 'popover') {
						_this.showSegPopover(cell, moreEl, reslicedAllSegs);
					}
					else if (typeof clickOption === 'string') { // a view name
						view.calendar.zoomTo(date, clickOption);
					}
				});
		},


		// Reveals the popover that displays all events within a cell
		showSegPopover: function(cell, moreLink, segs) {
			var _this = this;
			var view = this.view;
			var moreWrap = moreLink.parent(); // the <div> wrapper around the <a>
			var topEl; // the element we want to match the top coordinate of
			var options;

			if (this.rowCnt == 1) {
				topEl = view.el; // will cause the popover to cover any sort of header
			}
			else {
				topEl = this.rowEls.eq(cell.row); // will align with top of row
			}

			options = {
				className: 'fc-more-popover',
				content: this.renderSegPopoverContent(cell, segs),
				parentEl: this.el,
				top: topEl.offset().top,
				autoHide: true, // when the user clicks elsewhere, hide the popover
				viewportConstrain: view.opt('popoverViewportConstrain'),
				hide: function() {
					// destroy everything when the popover is hidden
					_this.segPopover.destroy();
					_this.segPopover = null;
					_this.popoverSegs = null;
				}
			};

			// Determine horizontal coordinate.
			// We use the moreWrap instead of the <td> to avoid border confusion.
			if (this.isRTL) {
				options.right = moreWrap.offset().left + moreWrap.outerWidth() + 1; // +1 to be over cell border
			}
			else {
				options.left = moreWrap.offset().left - 1; // -1 to be over cell border
			}

			this.segPopover = new Popover(options);
			this.segPopover.show();
		},


		// Builds the inner DOM contents of the segment popover
		renderSegPopoverContent: function(cell, segs) {
			var view = this.view;
			var isTheme = view.opt('theme');
			var title = cell.start.format(view.opt('dayPopoverFormat'));
			var content = $(
				'<div class="fc-header ' + view.widgetHeaderClass + '">' +
					'<span class="fc-close ' +
						(isTheme ? 'ui-icon ui-icon-closethick' : 'fc-icon fc-icon-x') +
					'"></span>' +
					'<span class="fc-title">' +
						htmlEscape(title) +
					'</span>' +
					'<div class="fc-clear"/>' +
				'</div>' +
				'<div class="fc-body ' + view.widgetContentClass + '">' +
					'<div class="fc-event-container"></div>' +
				'</div>'
			);
			var segContainer = content.find('.fc-event-container');
			var i;

			// render each seg's `el` and only return the visible segs
			segs = this.renderFgSegEls(segs, true); // disableResizing=true
			this.popoverSegs = segs;

			for (i = 0; i < segs.length; i++) {

				// because segments in the popover are not part of a grid coordinate system, provide a hint to any
				// grids that want to do drag-n-drop about which cell it came from
				segs[i].cell = cell;

				segContainer.append(segs[i].el);
			}

			return content;
		},


		// Given the events within an array of segment objects, reslice them to be in a single day
		resliceDaySegs: function(segs, dayDate) {

			// build an array of the original events
			var events = $.map(segs, function(seg) {
				return seg.event;
			});

			var dayStart = dayDate.clone().stripTime();
			var dayEnd = dayStart.clone().add(1, 'days');
			var dayRange = { start: dayStart, end: dayEnd };

			// slice the events with a custom slicing function
			return this.eventsToSegs(
				events,
				function(range) {
					var seg = intersectionToSeg(range, dayRange); // undefind if no intersection
					return seg ? [ seg ] : []; // must return an array of segments
				}
			);
		},


		// Generates the text that should be inside a "more" link, given the number of events it represents
		getMoreLinkText: function(num) {
			var opt = this.view.opt('eventLimitText');

			if (typeof opt === 'function') {
				return opt(num);
			}
			else {
				return '+' + num + ' ' + opt;
			}
		},


		// Returns segments within a given cell.
		// If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
		getCellSegs: function(cell, startLevel) {
			var segMatrix = this.rowStructs[cell.row].segMatrix;
			var level = startLevel || 0;
			var segs = [];
			var seg;

			while (level < segMatrix.length) {
				seg = segMatrix[level][cell.col];
				if (seg) {
					segs.push(seg);
				}
				level++;
			}

			return segs;
		}

	});

	;;

	/* A component that renders one or more columns of vertical time slots
	----------------------------------------------------------------------------------------------------------------------*/

	var TimeGrid = Grid.extend({

		slotDuration: null, // duration of a "slot", a distinct time segment on given day, visualized by lines
		snapDuration: null, // granularity of time for dragging and selecting

		minTime: null, // Duration object that denotes the first visible time of any given day
		maxTime: null, // Duration object that denotes the exclusive visible end time of any given day

		axisFormat: null, // formatting string for times running along vertical axis

		dayEls: null, // cells elements in the day-row background
		slatEls: null, // elements running horizontally across all columns

		slatTops: null, // an array of top positions, relative to the container. last item holds bottom of last slot

		helperEl: null, // cell skeleton element for rendering the mock event "helper"

		businessHourSegs: null,


		constructor: function() {
			Grid.apply(this, arguments); // call the super-constructor
			this.processOptions();
		},


		// Renders the time grid into `this.el`, which should already be assigned.
		// Relies on the view's colCnt. In the future, this component should probably be self-sufficient.
		render: function() {
			this.el.html(this.renderHtml());
			this.dayEls = this.el.find('.fc-day');
			this.slatEls = this.el.find('.fc-slats tr');

			this.computeSlatTops();
			this.renderBusinessHours();
			Grid.prototype.render.call(this); // call the super-method
		},


		renderBusinessHours: function() {
			var events = this.view.calendar.getBusinessHoursEvents();
			this.businessHourSegs = this.renderFill('businessHours', this.eventsToSegs(events), 'bgevent');
		},


		// Renders the basic HTML skeleton for the grid
		renderHtml: function() {
			return '' +
				'<div class="fc-bg">' +
					'<table>' +
						this.rowHtml('slotBg') + // leverages RowRenderer, which will call slotBgCellHtml
					'</table>' +
				'</div>' +
				'<div class="fc-slats">' +
					'<table>' +
						this.slatRowHtml() +
					'</table>' +
				'</div>';
		},


		// Renders the HTML for a vertical background cell behind the slots.
		// This method is distinct from 'bg' because we wanted a new `rowType` so the View could customize the rendering.
		slotBgCellHtml: function(cell) {
			return this.bgCellHtml(cell);
		},


		// Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
		slatRowHtml: function() {
			var view = this.view;
			var isRTL = this.isRTL;
			var html = '';
			var slotNormal = this.slotDuration.asMinutes() % 15 === 0;
			var slotTime = moment.duration(+this.minTime); // wish there was .clone() for durations
			var slotDate; // will be on the view's first day, but we only care about its time
			var minutes;
			var axisHtml;

			// Calculate the time for each slot
			while (slotTime < this.maxTime) {
				slotDate = this.start.clone().time(slotTime); // will be in UTC but that's good. to avoid DST issues
				minutes = slotDate.minutes();

				axisHtml =
					'<td class="fc-axis fc-time ' + view.widgetContentClass + '" ' + view.axisStyleAttr() + '>' +
						((!slotNormal || !minutes) ? // if irregular slot duration, or on the hour, then display the time
							'<span>' + // for matchCellWidths
								htmlEscape(slotDate.format(this.axisFormat)) +
							'</span>' :
							''
							) +
					'</td>';

				html +=
					'<tr ' + (!minutes ? '' : 'class="fc-minor"') + '>' +
						(!isRTL ? axisHtml : '') +
						'<td class="' + view.widgetContentClass + '"/>' +
						(isRTL ? axisHtml : '') +
					"</tr>";

				slotTime.add(this.slotDuration);
			}

			return html;
		},


		/* Options
		------------------------------------------------------------------------------------------------------------------*/


		// Parses various options into properties of this object
		processOptions: function() {
			var view = this.view;
			var slotDuration = view.opt('slotDuration');
			var snapDuration = view.opt('snapDuration');

			slotDuration = moment.duration(slotDuration);
			snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;

			this.slotDuration = slotDuration;
			this.snapDuration = snapDuration;

			this.minTime = moment.duration(view.opt('minTime'));
			this.maxTime = moment.duration(view.opt('maxTime'));

			this.axisFormat = view.opt('axisFormat') || view.opt('smallTimeFormat');
		},


		// Computes a default column header formatting string if `colFormat` is not explicitly defined
		computeColHeadFormat: function() {
			if (this.colCnt > 1) { // multiple days, so full single date string WON'T be in title text
				return this.view.opt('dayOfMonthFormat'); // "Sat 12/10"
			}
			else { // single day, so full single date string will probably be in title text
				return 'dddd'; // "Saturday"
			}
		},


		// Computes a default event time formatting string if `timeFormat` is not explicitly defined
		computeEventTimeFormat: function() {
			return this.view.opt('noMeridiemTimeFormat'); // like "6:30" (no AM/PM)
		},


		// Computes a default `displayEventEnd` value if one is not expliclty defined
		computeDisplayEventEnd: function() {
			return true;
		},


		/* Cell System
		------------------------------------------------------------------------------------------------------------------*/


		// Initializes row/col information
		updateCells: function() {
			var view = this.view;
			var colData = [];
			var date;

			date = this.start.clone();
			while (date.isBefore(this.end)) {
				colData.push({
					day: date.clone()
				});
				date.add(1, 'day');
				date = view.skipHiddenDays(date);
			}

			if (this.isRTL) {
				colData.reverse();
			}

			this.colData = colData;
			this.colCnt = colData.length;
			this.rowCnt = Math.ceil((this.maxTime - this.minTime) / this.snapDuration); // # of vertical snaps
		},


		// Given a cell object, generates a range object
		computeCellRange: function(cell) {
			var time = this.computeSnapTime(cell.row);
			var start = this.view.calendar.rezoneDate(cell.day).time(time);
			var end = start.clone().add(this.snapDuration);

			return { start: start, end: end };
		},


		// Retrieves the element representing the given column
		getColEl: function(col) {
			return this.dayEls.eq(col);
		},


		/* Dates
		------------------------------------------------------------------------------------------------------------------*/


		// Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
		computeSnapTime: function(row) {
			return moment.duration(this.minTime + this.snapDuration * row);
		},


		// Slices up a date range by column into an array of segments
		rangeToSegs: function(range) {
			var colCnt = this.colCnt;
			var segs = [];
			var seg;
			var col;
			var colDate;
			var colRange;

			// normalize :(
			range = {
				start: range.start.clone().stripZone(),
				end: range.end.clone().stripZone()
			};

			for (col = 0; col < colCnt; col++) {
				colDate = this.colData[col].day; // will be ambig time/timezone
				colRange = {
					start: colDate.clone().time(this.minTime),
					end: colDate.clone().time(this.maxTime)
				};
				seg = intersectionToSeg(range, colRange); // both will be ambig timezone
				if (seg) {
					seg.col = col;
					segs.push(seg);
				}
			}

			return segs;
		},


		/* Coordinates
		------------------------------------------------------------------------------------------------------------------*/


		// Called when there is a window resize/zoom and we need to recalculate coordinates for the grid
		resize: function() {
			this.computeSlatTops();
			this.updateSegVerticals();
		},


		// Computes the top/bottom coordinates of each "snap" rows
		computeRowCoords: function() {
			var originTop = this.el.offset().top;
			var items = [];
			var i;
			var item;

			for (i = 0; i < this.rowCnt; i++) {
				item = {
					top: originTop + this.computeTimeTop(this.computeSnapTime(i))
				};
				if (i > 0) {
					items[i - 1].bottom = item.top;
				}
				items.push(item);
			}
			item.bottom = item.top + this.computeTimeTop(this.computeSnapTime(i));

			return items;
		},


		// Computes the top coordinate, relative to the bounds of the grid, of the given date.
		// A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
		computeDateTop: function(date, startOfDayDate) {
			return this.computeTimeTop(
				moment.duration(
					date.clone().stripZone() - startOfDayDate.clone().stripTime()
				)
			);
		},


		// Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
		computeTimeTop: function(time) {
			var slatCoverage = (time - this.minTime) / this.slotDuration; // floating-point value of # of slots covered
			var slatIndex;
			var slatRemainder;
			var slatTop;
			var slatBottom;

			// constrain. because minTime/maxTime might be customized
			slatCoverage = Math.max(0, slatCoverage);
			slatCoverage = Math.min(this.slatEls.length, slatCoverage);

			slatIndex = Math.floor(slatCoverage); // an integer index of the furthest whole slot
			slatRemainder = slatCoverage - slatIndex;
			slatTop = this.slatTops[slatIndex]; // the top position of the furthest whole slot

			if (slatRemainder) { // time spans part-way into the slot
				slatBottom = this.slatTops[slatIndex + 1];
				return slatTop + (slatBottom - slatTop) * slatRemainder; // part-way between slots
			}
			else {
				return slatTop;
			}
		},


		// Queries each `slatEl` for its position relative to the grid's container and stores it in `slatTops`.
		// Includes the the bottom of the last slat as the last item in the array.
		computeSlatTops: function() {
			var tops = [];
			var top;

			this.slatEls.each(function(i, node) {
				top = $(node).position().top;
				tops.push(top);
			});

			tops.push(top + this.slatEls.last().outerHeight()); // bottom of the last slat

			this.slatTops = tops;
		},


		/* Event Drag Visualization
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of an event being dragged over the specified date(s).
		// dropLocation's end might be null, as well as `seg`. See Grid::renderDrag for more info.
		// A returned value of `true` signals that a mock "helper" event has been rendered.
		renderDrag: function(dropLocation, seg) {
			var opacity;

			if (seg) { // if there is event information for this drag, render a helper event
				this.renderRangeHelper(dropLocation, seg);

				opacity = this.view.opt('dragOpacity');
				if (opacity !== undefined) {
					this.helperEl.css('opacity', opacity);
				}

				return true; // signal that a helper has been rendered
			}
			else {
				// otherwise, just render a highlight
				this.renderHighlight(
					this.view.calendar.ensureVisibleEventRange(dropLocation) // needs to be a proper range
				);
			}
		},


		// Unrenders any visual indication of an event being dragged
		destroyDrag: function() {
			this.destroyHelper();
			this.destroyHighlight();
		},


		/* Event Resize Visualization
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of an event being resized
		renderEventResize: function(range, seg) {
			this.renderRangeHelper(range, seg);
		},


		// Unrenders any visual indication of an event being resized
		destroyEventResize: function() {
			this.destroyHelper();
		},


		/* Event Helper
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a mock "helper" event. `sourceSeg` is the original segment object and might be null (an external drag)
		renderHelper: function(event, sourceSeg) {
			var segs = this.eventsToSegs([ event ]);
			var tableEl;
			var i, seg;
			var sourceEl;

			segs = this.renderFgSegEls(segs); // assigns each seg's el and returns a subset of segs that were rendered
			tableEl = this.renderSegTable(segs);

			// Try to make the segment that is in the same row as sourceSeg look the same
			for (i = 0; i < segs.length; i++) {
				seg = segs[i];
				if (sourceSeg && sourceSeg.col === seg.col) {
					sourceEl = sourceSeg.el;
					seg.el.css({
						left: sourceEl.css('left'),
						right: sourceEl.css('right'),
						'margin-left': sourceEl.css('margin-left'),
						'margin-right': sourceEl.css('margin-right')
					});
				}
			}

			this.helperEl = $('<div class="fc-helper-skeleton"/>')
				.append(tableEl)
					.appendTo(this.el);
		},


		// Unrenders any mock helper event
		destroyHelper: function() {
			if (this.helperEl) {
				this.helperEl.remove();
				this.helperEl = null;
			}
		},


		/* Selection
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
		renderSelection: function(range) {
			if (this.view.opt('selectHelper')) { // this setting signals that a mock helper event should be rendered
				this.renderRangeHelper(range);
			}
			else {
				this.renderHighlight(range);
			}
		},


		// Unrenders any visual indication of a selection
		destroySelection: function() {
			this.destroyHelper();
			this.destroyHighlight();
		},


		/* Fill System (highlight, background events, business hours)
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a set of rectangles over the given time segments.
		// Only returns segments that successfully rendered.
		renderFill: function(type, segs, className) {
			var segCols;
			var skeletonEl;
			var trEl;
			var col, colSegs;
			var tdEl;
			var containerEl;
			var dayDate;
			var i, seg;

			if (segs.length) {

				segs = this.renderFillSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs
				segCols = this.groupSegCols(segs); // group into sub-arrays, and assigns 'col' to each seg

				className = className || type.toLowerCase();
				skeletonEl = $(
					'<div class="fc-' + className + '-skeleton">' +
						'<table><tr/></table>' +
					'</div>'
				);
				trEl = skeletonEl.find('tr');

				for (col = 0; col < segCols.length; col++) {
					colSegs = segCols[col];
					tdEl = $('<td/>').appendTo(trEl);

					if (colSegs.length) {
						containerEl = $('<div class="fc-' + className + '-container"/>').appendTo(tdEl);
						dayDate = this.colData[col].day;

						for (i = 0; i < colSegs.length; i++) {
							seg = colSegs[i];
							containerEl.append(
								seg.el.css({
									top: this.computeDateTop(seg.start, dayDate),
									bottom: -this.computeDateTop(seg.end, dayDate) // the y position of the bottom edge
								})
							);
						}
					}
				}

				this.bookendCells(trEl, type);

				this.el.append(skeletonEl);
				this.elsByFill[type] = skeletonEl;
			}

			return segs;
		}

	});

	;;

	/* Event-rendering methods for the TimeGrid class
	----------------------------------------------------------------------------------------------------------------------*/

	TimeGrid.mixin({

		eventSkeletonEl: null, // has cells with event-containers, which contain absolutely positioned event elements


		// Renders the given foreground event segments onto the grid
		renderFgSegs: function(segs) {
			segs = this.renderFgSegEls(segs); // returns a subset of the segs. segs that were actually rendered

			this.el.append(
				this.eventSkeletonEl = $('<div class="fc-content-skeleton"/>')
					.append(this.renderSegTable(segs))
			);

			return segs; // return only the segs that were actually rendered
		},


		// Unrenders all currently rendered foreground event segments
		destroyFgSegs: function(segs) {
			if (this.eventSkeletonEl) {
				this.eventSkeletonEl.remove();
				this.eventSkeletonEl = null;
			}
		},


		// Renders and returns the <table> portion of the event-skeleton.
		// Returns an object with properties 'tbodyEl' and 'segs'.
		renderSegTable: function(segs) {
			var tableEl = $('<table><tr/></table>');
			var trEl = tableEl.find('tr');
			var segCols;
			var i, seg;
			var col, colSegs;
			var containerEl;

			segCols = this.groupSegCols(segs); // group into sub-arrays, and assigns 'col' to each seg

			this.computeSegVerticals(segs); // compute and assign top/bottom

			for (col = 0; col < segCols.length; col++) { // iterate each column grouping
				colSegs = segCols[col];
				placeSlotSegs(colSegs); // compute horizontal coordinates, z-index's, and reorder the array

				containerEl = $('<div class="fc-event-container"/>');

				// assign positioning CSS and insert into container
				for (i = 0; i < colSegs.length; i++) {
					seg = colSegs[i];
					seg.el.css(this.generateSegPositionCss(seg));

					// if the height is short, add a className for alternate styling
					if (seg.bottom - seg.top < 30) {
						seg.el.addClass('fc-short');
					}

					containerEl.append(seg.el);
				}

				trEl.append($('<td/>').append(containerEl));
			}

			this.bookendCells(trEl, 'eventSkeleton');

			return tableEl;
		},


		// Refreshes the CSS top/bottom coordinates for each segment element. Probably after a window resize/zoom.
		// Repositions business hours segs too, so not just for events. Maybe shouldn't be here.
		updateSegVerticals: function() {
			var allSegs = (this.segs || []).concat(this.businessHourSegs || []);
			var i;

			this.computeSegVerticals(allSegs);

			for (i = 0; i < allSegs.length; i++) {
				allSegs[i].el.css(
					this.generateSegVerticalCss(allSegs[i])
				);
			}
		},


		// For each segment in an array, computes and assigns its top and bottom properties
		computeSegVerticals: function(segs) {
			var i, seg;

			for (i = 0; i < segs.length; i++) {
				seg = segs[i];
				seg.top = this.computeDateTop(seg.start, seg.start);
				seg.bottom = this.computeDateTop(seg.end, seg.start);
			}
		},


		// Renders the HTML for a single event segment's default rendering
		fgSegHtml: function(seg, disableResizing) {
			var view = this.view;
			var event = seg.event;
			var isDraggable = view.isEventDraggable(event);
			var isResizable = !disableResizing && seg.isEnd && view.isEventResizable(event);
			var classes = this.getSegClasses(seg, isDraggable, isResizable);
			var skinCss = this.getEventSkinCss(event);
			var timeText;
			var fullTimeText; // more verbose time text. for the print stylesheet
			var startTimeText; // just the start time text

			classes.unshift('fc-time-grid-event');

			if (view.isMultiDayEvent(event)) { // if the event appears to span more than one day...
				// Don't display time text on segments that run entirely through a day.
				// That would appear as midnight-midnight and would look dumb.
				// Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
				if (seg.isStart || seg.isEnd) {
					timeText = this.getEventTimeText(seg);
					fullTimeText = this.getEventTimeText(seg, 'LT');
					startTimeText = this.getEventTimeText({ start: seg.start });
				}
			} else {
				// Display the normal time text for the *event's* times
				timeText = this.getEventTimeText(event);
				fullTimeText = this.getEventTimeText(event, 'LT');
				startTimeText = this.getEventTimeText({ start: event.start });
			}

			return '<a class="' + classes.join(' ') + '"' +
				(event.url ?
					' href="' + htmlEscape(event.url) + '"' :
					''
					) +
				(skinCss ?
					' style="' + skinCss + '"' :
					''
					) +
				'>' +
					'<div class="fc-content">' +
						(timeText ?
							'<div class="fc-time"' +
							' data-start="' + htmlEscape(startTimeText) + '"' +
							' data-full="' + htmlEscape(fullTimeText) + '"' +
							'>' +
								'<span>' + htmlEscape(timeText) + '</span>' +
							'</div>' :
							''
							) +
						(event.title ?
							'<div class="fc-title">' +
								htmlEscape(event.title) +
							'</div>' :
							''
							) +
					'</div>' +
					'<div class="fc-bg"/>' +
					(isResizable ?
						'<div class="fc-resizer"/>' :
						''
						) +
				'</a>';
		},


		// Generates an object with CSS properties/values that should be applied to an event segment element.
		// Contains important positioning-related properties that should be applied to any event element, customized or not.
		generateSegPositionCss: function(seg) {
			var shouldOverlap = this.view.opt('slotEventOverlap');
			var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
			var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
			var props = this.generateSegVerticalCss(seg); // get top/bottom first
			var left; // amount of space from left edge, a fraction of the total width
			var right; // amount of space from right edge, a fraction of the total width

			if (shouldOverlap) {
				// double the width, but don't go beyond the maximum forward coordinate (1.0)
				forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
			}

			if (this.isRTL) {
				left = 1 - forwardCoord;
				right = backwardCoord;
			}
			else {
				left = backwardCoord;
				right = 1 - forwardCoord;
			}

			props.zIndex = seg.level + 1; // convert from 0-base to 1-based
			props.left = left * 100 + '%';
			props.right = right * 100 + '%';

			if (shouldOverlap && seg.forwardPressure) {
				// add padding to the edge so that forward stacked events don't cover the resizer's icon
				props[this.isRTL ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
			}

			return props;
		},


		// Generates an object with CSS properties for the top/bottom coordinates of a segment element
		generateSegVerticalCss: function(seg) {
			return {
				top: seg.top,
				bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
			};
		},


		// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
		groupSegCols: function(segs) {
			var segCols = [];
			var i;

			for (i = 0; i < this.colCnt; i++) {
				segCols.push([]);
			}

			for (i = 0; i < segs.length; i++) {
				segCols[segs[i].col].push(segs[i]);
			}

			return segCols;
		}

	});


	// Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
	// Also reorders the given array by date!
	function placeSlotSegs(segs) {
		var levels;
		var level0;
		var i;

		segs.sort(compareSegs); // order by date
		levels = buildSlotSegLevels(segs);
		computeForwardSlotSegs(levels);

		if ((level0 = levels[0])) {

			for (i = 0; i < level0.length; i++) {
				computeSlotSegPressures(level0[i]);
			}

			for (i = 0; i < level0.length; i++) {
				computeSlotSegCoords(level0[i], 0, 0);
			}
		}
	}


	// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
	// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
	function buildSlotSegLevels(segs) {
		var levels = [];
		var i, seg;
		var j;

		for (i=0; i<segs.length; i++) {
			seg = segs[i];

			// go through all the levels and stop on the first level where there are no collisions
			for (j=0; j<levels.length; j++) {
				if (!computeSlotSegCollisions(seg, levels[j]).length) {
					break;
				}
			}

			seg.level = j;

			(levels[j] || (levels[j] = [])).push(seg);
		}

		return levels;
	}


	// For every segment, figure out the other segments that are in subsequent
	// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
	function computeForwardSlotSegs(levels) {
		var i, level;
		var j, seg;
		var k;

		for (i=0; i<levels.length; i++) {
			level = levels[i];

			for (j=0; j<level.length; j++) {
				seg = level[j];

				seg.forwardSegs = [];
				for (k=i+1; k<levels.length; k++) {
					computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
				}
			}
		}
	}


	// Figure out which path forward (via seg.forwardSegs) results in the longest path until
	// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
	function computeSlotSegPressures(seg) {
		var forwardSegs = seg.forwardSegs;
		var forwardPressure = 0;
		var i, forwardSeg;

		if (seg.forwardPressure === undefined) { // not already computed

			for (i=0; i<forwardSegs.length; i++) {
				forwardSeg = forwardSegs[i];

				// figure out the child's maximum forward path
				computeSlotSegPressures(forwardSeg);

				// either use the existing maximum, or use the child's forward pressure
				// plus one (for the forwardSeg itself)
				forwardPressure = Math.max(
					forwardPressure,
					1 + forwardSeg.forwardPressure
				);
			}

			seg.forwardPressure = forwardPressure;
		}
	}


	// Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
	// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
	// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
	//
	// The segment might be part of a "series", which means consecutive segments with the same pressure
	// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
	// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
	// coordinate of the first segment in the series.
	function computeSlotSegCoords(seg, seriesBackwardPressure, seriesBackwardCoord) {
		var forwardSegs = seg.forwardSegs;
		var i;

		if (seg.forwardCoord === undefined) { // not already computed

			if (!forwardSegs.length) {

				// if there are no forward segments, this segment should butt up against the edge
				seg.forwardCoord = 1;
			}
			else {

				// sort highest pressure first
				forwardSegs.sort(compareForwardSlotSegs);

				// this segment's forwardCoord will be calculated from the backwardCoord of the
				// highest-pressure forward segment.
				computeSlotSegCoords(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
				seg.forwardCoord = forwardSegs[0].backwardCoord;
			}

			// calculate the backwardCoord from the forwardCoord. consider the series
			seg.backwardCoord = seg.forwardCoord -
				(seg.forwardCoord - seriesBackwardCoord) / // available width for series
				(seriesBackwardPressure + 1); // # of segments in the series

			// use this segment's coordinates to computed the coordinates of the less-pressurized
			// forward segments
			for (i=0; i<forwardSegs.length; i++) {
				computeSlotSegCoords(forwardSegs[i], 0, seg.forwardCoord);
			}
		}
	}


	// Find all the segments in `otherSegs` that vertically collide with `seg`.
	// Append into an optionally-supplied `results` array and return.
	function computeSlotSegCollisions(seg, otherSegs, results) {
		results = results || [];

		for (var i=0; i<otherSegs.length; i++) {
			if (isSlotSegCollision(seg, otherSegs[i])) {
				results.push(otherSegs[i]);
			}
		}

		return results;
	}


	// Do these segments occupy the same vertical space?
	function isSlotSegCollision(seg1, seg2) {
		return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
	}


	// A cmp function for determining which forward segment to rely on more when computing coordinates.
	function compareForwardSlotSegs(seg1, seg2) {
		// put higher-pressure first
		return seg2.forwardPressure - seg1.forwardPressure ||
			// put segments that are closer to initial edge first (and favor ones with no coords yet)
			(seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
			// do normal sorting...
			compareSegs(seg1, seg2);
	}

	;;

	/* An abstract class from which other views inherit from
	----------------------------------------------------------------------------------------------------------------------*/

	var View = fc.View = Class.extend({

		type: null, // subclass' view name (string)
		name: null, // deprecated. use `type` instead
		title: null, // the text that will be displayed in the header's title

		calendar: null, // owner Calendar object
		options: null, // view-specific options
		coordMap: null, // a CoordMap object for converting pixel regions to dates
		el: null, // the view's containing element. set by Calendar

		// range the view is actually displaying (moments)
		start: null,
		end: null, // exclusive

		// range the view is formally responsible for (moments)
		// may be different from start/end. for example, a month view might have 1st-31st, excluding padded dates
		intervalStart: null,
		intervalEnd: null, // exclusive

		intervalDuration: null, // the whole-unit duration that is being displayed
		intervalUnit: null, // name of largest unit being displayed, like "month" or "week"

		isSelected: false, // boolean whether a range of time is user-selected or not

		// subclasses can optionally use a scroll container
		scrollerEl: null, // the element that will most likely scroll when content is too tall
		scrollTop: null, // cached vertical scroll value

		// classNames styled by jqui themes
		widgetHeaderClass: null,
		widgetContentClass: null,
		highlightStateClass: null,

		// for date utils, computed from options
		nextDayThreshold: null,
		isHiddenDayHash: null,

		// document handlers, bound to `this` object
		documentMousedownProxy: null, // TODO: doesn't work with touch


		constructor: function(calendar, viewOptions, viewType) {
			this.calendar = calendar;
			this.options = viewOptions;
			this.type = this.name = viewType; // .name is deprecated

			this.nextDayThreshold = moment.duration(this.opt('nextDayThreshold'));
			this.initTheming();
			this.initHiddenDays();

			this.documentMousedownProxy = $.proxy(this, 'documentMousedown');

			this.initialize();
		},


		// A good place for subclasses to initialize member variables
		initialize: function() {
			// subclasses can implement
		},


		// Retrieves an option with the given name
		opt: function(name) {
			var val;

			val = this.options[name]; // look at view-specific options first
			if (val !== undefined) {
				return val;
			}

			val = this.calendar.options[name];
			if ($.isPlainObject(val) && !isForcedAtomicOption(name)) { // view-option-hashes are deprecated
				return smartProperty(val, this.type);
			}

			return val;
		},


		// Triggers handlers that are view-related. Modifies args before passing to calendar.
		trigger: function(name, thisObj) { // arguments beyond thisObj are passed along
			var calendar = this.calendar;

			return calendar.trigger.apply(
				calendar,
				[name, thisObj || this].concat(
					Array.prototype.slice.call(arguments, 2), // arguments beyond thisObj
					[ this ] // always make the last argument a reference to the view. TODO: deprecate
				)
			);
		},


		/* Dates
		------------------------------------------------------------------------------------------------------------------*/


		// Updates all internal dates to center around the given current date
		setDate: function(date) {
			this.setRange(this.computeRange(date));
		},


		// Updates all internal dates for displaying the given range.
		// Expects all values to be normalized (like what computeRange does).
		setRange: function(range) {
			$.extend(this, range);
			this.updateTitle();
		},


		// Given a single current date, produce information about what range to display.
		// Subclasses can override. Must return all properties.
		computeRange: function(date) {
			var intervalDuration = moment.duration(this.opt('duration') || this.constructor.duration || { days: 1 });
			var intervalUnit = computeIntervalUnit(intervalDuration);
			var intervalStart = date.clone().startOf(intervalUnit);
			var intervalEnd = intervalStart.clone().add(intervalDuration);
			var start, end;

			// normalize the range's time-ambiguity
			if (/year|month|week|day/.test(intervalUnit)) { // whole-days?
				intervalStart.stripTime();
				intervalEnd.stripTime();
			}
			else { // needs to have a time?
				if (!intervalStart.hasTime()) {
					intervalStart = this.calendar.rezoneDate(intervalStart); // convert to current timezone, with 00:00
				}
				if (!intervalEnd.hasTime()) {
					intervalEnd = this.calendar.rezoneDate(intervalEnd); // convert to current timezone, with 00:00
				}
			}

			start = intervalStart.clone();
			start = this.skipHiddenDays(start);
			end = intervalEnd.clone();
			end = this.skipHiddenDays(end, -1, true); // exclusively move backwards

			return {
				intervalDuration: intervalDuration,
				intervalUnit: intervalUnit,
				intervalStart: intervalStart,
				intervalEnd: intervalEnd,
				start: start,
				end: end
			};
		},


		// Computes the new date when the user hits the prev button, given the current date
		computePrevDate: function(date) {
			return this.massageCurrentDate(
				date.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1
			);
		},


		// Computes the new date when the user hits the next button, given the current date
		computeNextDate: function(date) {
			return this.massageCurrentDate(
				date.clone().startOf(this.intervalUnit).add(this.intervalDuration)
			);
		},


		// Given an arbitrarily calculated current date of the calendar, returns a date that is ensured to be completely
		// visible. `direction` is optional and indicates which direction the current date was being
		// incremented or decremented (1 or -1).
		massageCurrentDate: function(date, direction) {
			if (this.intervalDuration <= moment.duration({ days: 1 })) { // if the view displays a single day or smaller
				if (this.isHiddenDay(date)) {
					date = this.skipHiddenDays(date, direction);
					date.startOf('day');
				}
			}

			return date;
		},


		/* Title and Date Formatting
		------------------------------------------------------------------------------------------------------------------*/


		// Sets the view's title property to the most updated computed value
		updateTitle: function() {
			this.title = this.computeTitle();
		},


		// Computes what the title at the top of the calendar should be for this view
		computeTitle: function() {
			return this.formatRange(
				{ start: this.intervalStart, end: this.intervalEnd },
				this.opt('titleFormat') || this.computeTitleFormat(),
				this.opt('titleRangeSeparator')
			);
		},


		// Generates the format string that should be used to generate the title for the current date range.
		// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
		computeTitleFormat: function() {
			if (this.intervalUnit == 'year') {
				return 'YYYY';
			}
			else if (this.intervalUnit == 'month') {
				return this.opt('monthYearFormat'); // like "September 2014"
			}
			else if (this.intervalDuration.as('days') > 1) {
				return 'll'; // multi-day range. shorter, like "Sep 9 - 10 2014"
			}
			else {
				return 'LL'; // one day. longer, like "September 9 2014"
			}
		},


		// Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
		// Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
		formatRange: function(range, formatStr, separator) {
			var end = range.end;

			if (!end.hasTime()) { // all-day?
				end = end.clone().subtract(1); // convert to inclusive. last ms of previous day
			}

			return formatRange(range.start, end, formatStr, separator, this.opt('isRTL'));
		},


		/* Rendering
		------------------------------------------------------------------------------------------------------------------*/


		// Wraps the basic render() method with more View-specific logic. Called by the owner Calendar.
		renderView: function() {
			this.render();
			this.updateSize();
			this.initializeScroll();
			this.trigger('viewRender', this, this, this.el);

			// attach handlers to document. do it here to allow for destroy/rerender
			$(document).on('mousedown', this.documentMousedownProxy);
		},


		// Renders the view inside an already-defined `this.el`
		render: function() {
			// subclasses should implement
		},


		// Wraps the basic destroy() method with more View-specific logic. Called by the owner Calendar.
		destroyView: function() {
			this.unselect();
			this.destroyViewEvents();
			this.destroy();
			this.trigger('viewDestroy', this, this, this.el);

			$(document).off('mousedown', this.documentMousedownProxy);
		},


		// Clears the view's rendering
		destroy: function() {
			this.el.empty(); // removes inner contents but leaves the element intact
		},


		// Initializes internal variables related to theming
		initTheming: function() {
			var tm = this.opt('theme') ? 'ui' : 'fc';

			this.widgetHeaderClass = tm + '-widget-header';
			this.widgetContentClass = tm + '-widget-content';
			this.highlightStateClass = tm + '-state-highlight';
		},


		/* Dimensions
		------------------------------------------------------------------------------------------------------------------*/


		// Refreshes anything dependant upon sizing of the container element of the grid
		updateSize: function(isResize) {
			if (isResize) {
				this.recordScroll();
			}
			this.updateHeight();
			this.updateWidth();
		},


		// Refreshes the horizontal dimensions of the calendar
		updateWidth: function() {
			// subclasses should implement
		},


		// Refreshes the vertical dimensions of the calendar
		updateHeight: function() {
			var calendar = this.calendar; // we poll the calendar for height information

			this.setHeight(
				calendar.getSuggestedViewHeight(),
				calendar.isHeightAuto()
			);
		},


		// Updates the vertical dimensions of the calendar to the specified height.
		// if `isAuto` is set to true, height becomes merely a suggestion and the view should use its "natural" height.
		setHeight: function(height, isAuto) {
			// subclasses should implement
		},


		/* Scroller
		------------------------------------------------------------------------------------------------------------------*/


		// Given the total height of the view, return the number of pixels that should be used for the scroller.
		// By default, uses this.scrollerEl, but can pass this in as well.
		// Utility for subclasses.
		computeScrollerHeight: function(totalHeight, scrollerEl) {
			var both;
			var otherHeight; // cumulative height of everything that is not the scrollerEl in the view (header+borders)

			scrollerEl = scrollerEl || this.scrollerEl;
			both = this.el.add(scrollerEl);

			// fuckin IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
			both.css({
				position: 'relative', // cause a reflow, which will force fresh dimension recalculation
				left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
			});
			otherHeight = this.el.outerHeight() - scrollerEl.height(); // grab the dimensions
			both.css({ position: '', left: '' }); // undo hack

			return totalHeight - otherHeight;
		},


		// Sets the scroll value of the scroller to the initial pre-configured state prior to allowing the user to change it
		initializeScroll: function() {
		},


		// Called for remembering the current scroll value of the scroller.
		// Should be called before there is a destructive operation (like removing DOM elements) that might inadvertently
		// change the scroll of the container.
		recordScroll: function() {
			if (this.scrollerEl) {
				this.scrollTop = this.scrollerEl.scrollTop();
			}
		},


		// Set the scroll value of the scroller to the previously recorded value.
		// Should be called after we know the view's dimensions have been restored following some type of destructive
		// operation (like temporarily removing DOM elements).
		restoreScroll: function() {
			if (this.scrollTop !== null) {
				this.scrollerEl.scrollTop(this.scrollTop);
			}
		},


		/* Event Elements / Segments
		------------------------------------------------------------------------------------------------------------------*/


		// Wraps the basic renderEvents() method with more View-specific logic
		renderViewEvents: function(events) {
			this.renderEvents(events);

			this.eventSegEach(function(seg) {
				this.trigger('eventAfterRender', seg.event, seg.event, seg.el);
			});
			this.trigger('eventAfterAllRender');
		},


		// Renders the events onto the view.
		renderEvents: function() {
			// subclasses should implement
		},


		// Wraps the basic destroyEvents() method with more View-specific logic
		destroyViewEvents: function() {
			this.eventSegEach(function(seg) {
				this.trigger('eventDestroy', seg.event, seg.event, seg.el);
			});

			this.destroyEvents();
		},


		// Removes event elements from the view.
		destroyEvents: function() {
			// subclasses should implement
		},


		// Given an event and the default element used for rendering, returns the element that should actually be used.
		// Basically runs events and elements through the eventRender hook.
		resolveEventEl: function(event, el) {
			var custom = this.trigger('eventRender', event, event, el);

			if (custom === false) { // means don't render at all
				el = null;
			}
			else if (custom && custom !== true) {
				el = $(custom);
			}

			return el;
		},


		// Hides all rendered event segments linked to the given event
		showEvent: function(event) {
			this.eventSegEach(function(seg) {
				seg.el.css('visibility', '');
			}, event);
		},


		// Shows all rendered event segments linked to the given event
		hideEvent: function(event) {
			this.eventSegEach(function(seg) {
				seg.el.css('visibility', 'hidden');
			}, event);
		},


		// Iterates through event segments. Goes through all by default.
		// If the optional `event` argument is specified, only iterates through segments linked to that event.
		// The `this` value of the callback function will be the view.
		eventSegEach: function(func, event) {
			var segs = this.getEventSegs();
			var i;

			for (i = 0; i < segs.length; i++) {
				if (!event || segs[i].event._id === event._id) {
					func.call(this, segs[i]);
				}
			}
		},


		// Retrieves all the rendered segment objects for the view
		getEventSegs: function() {
			// subclasses must implement
			return [];
		},


		/* Event Drag-n-Drop
		------------------------------------------------------------------------------------------------------------------*/


		// Computes if the given event is allowed to be dragged by the user
		isEventDraggable: function(event) {
			var source = event.source || {};

			return firstDefined(
				event.startEditable,
				source.startEditable,
				this.opt('eventStartEditable'),
				event.editable,
				source.editable,
				this.opt('editable')
			);
		},


		// Must be called when an event in the view is dropped onto new location.
		// `dropLocation` is an object that contains the new start/end/allDay values for the event.
		reportEventDrop: function(event, dropLocation, el, ev) {
			var calendar = this.calendar;
			var mutateResult = calendar.mutateEvent(event, dropLocation);
			var undoFunc = function() {
				mutateResult.undo();
				calendar.reportEventChange();
			};

			this.triggerEventDrop(event, mutateResult.dateDelta, undoFunc, el, ev);
			calendar.reportEventChange(); // will rerender events
		},


		// Triggers event-drop handlers that have subscribed via the API
		triggerEventDrop: function(event, dateDelta, undoFunc, el, ev) {
			this.trigger('eventDrop', el[0], event, dateDelta, undoFunc, ev, {}); // {} = jqui dummy
		},


		/* External Element Drag-n-Drop
		------------------------------------------------------------------------------------------------------------------*/


		// Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
		// `meta` is the parsed data that has been embedded into the dragging event.
		// `dropLocation` is an object that contains the new start/end/allDay values for the event.
		reportExternalDrop: function(meta, dropLocation, el, ev, ui) {
			var eventProps = meta.eventProps;
			var eventInput;
			var event;

			// Try to build an event object and render it. TODO: decouple the two
			if (eventProps) {
				eventInput = $.extend({}, eventProps, dropLocation);
				event = this.calendar.renderEvent(eventInput, meta.stick)[0]; // renderEvent returns an array
			}

			this.triggerExternalDrop(event, dropLocation, el, ev, ui);
		},


		// Triggers external-drop handlers that have subscribed via the API
		triggerExternalDrop: function(event, dropLocation, el, ev, ui) {

			// trigger 'drop' regardless of whether element represents an event
			this.trigger('drop', el[0], dropLocation.start, ev, ui);

			if (event) {
				this.trigger('eventReceive', null, event); // signal an external event landed
			}
		},


		/* Drag-n-Drop Rendering (for both events and external elements)
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of a event or external-element drag over the given drop zone.
		// If an external-element, seg will be `null`
		renderDrag: function(dropLocation, seg) {
			// subclasses must implement
		},


		// Unrenders a visual indication of an event or external-element being dragged.
		destroyDrag: function() {
			// subclasses must implement
		},


		/* Event Resizing
		------------------------------------------------------------------------------------------------------------------*/


		// Computes if the given event is allowed to be resize by the user
		isEventResizable: function(event) {
			var source = event.source || {};

			return firstDefined(
				event.durationEditable,
				source.durationEditable,
				this.opt('eventDurationEditable'),
				event.editable,
				source.editable,
				this.opt('editable')
			);
		},


		// Must be called when an event in the view has been resized to a new length
		reportEventResize: function(event, newEnd, el, ev) {
			var calendar = this.calendar;
			var mutateResult = calendar.mutateEvent(event, { end: newEnd });
			var undoFunc = function() {
				mutateResult.undo();
				calendar.reportEventChange();
			};

			this.triggerEventResize(event, mutateResult.durationDelta, undoFunc, el, ev);
			calendar.reportEventChange(); // will rerender events
		},


		// Triggers event-resize handlers that have subscribed via the API
		triggerEventResize: function(event, durationDelta, undoFunc, el, ev) {
			this.trigger('eventResize', el[0], event, durationDelta, undoFunc, ev, {}); // {} = jqui dummy
		},


		/* Selection
		------------------------------------------------------------------------------------------------------------------*/


		// Selects a date range on the view. `start` and `end` are both Moments.
		// `ev` is the native mouse event that begin the interaction.
		select: function(range, ev) {
			this.unselect(ev);
			this.renderSelection(range);
			this.reportSelection(range, ev);
		},


		// Renders a visual indication of the selection
		renderSelection: function(range) {
			// subclasses should implement
		},


		// Called when a new selection is made. Updates internal state and triggers handlers.
		reportSelection: function(range, ev) {
			this.isSelected = true;
			this.trigger('select', null, range.start, range.end, ev);
		},


		// Undoes a selection. updates in the internal state and triggers handlers.
		// `ev` is the native mouse event that began the interaction.
		unselect: function(ev) {
			if (this.isSelected) {
				this.isSelected = false;
				this.destroySelection();
				this.trigger('unselect', null, ev);
			}
		},


		// Unrenders a visual indication of selection
		destroySelection: function() {
			// subclasses should implement
		},


		// Handler for unselecting when the user clicks something and the 'unselectAuto' setting is on
		documentMousedown: function(ev) {
			var ignore;

			// is there a selection, and has the user made a proper left click?
			if (this.isSelected && this.opt('unselectAuto') && isPrimaryMouseButton(ev)) {

				// only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
				ignore = this.opt('unselectCancel');
				if (!ignore || !$(ev.target).closest(ignore).length) {
					this.unselect(ev);
				}
			}
		},


		/* Date Utils
		------------------------------------------------------------------------------------------------------------------*/


		// Initializes internal variables related to calculating hidden days-of-week
		initHiddenDays: function() {
			var hiddenDays = this.opt('hiddenDays') || []; // array of day-of-week indices that are hidden
			var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
			var dayCnt = 0;
			var i;

			if (this.opt('weekends') === false) {
				hiddenDays.push(0, 6); // 0=sunday, 6=saturday
			}

			for (i = 0; i < 7; i++) {
				if (
					!(isHiddenDayHash[i] = $.inArray(i, hiddenDays) !== -1)
				) {
					dayCnt++;
				}
			}

			if (!dayCnt) {
				throw 'invalid hiddenDays'; // all days were hidden? bad.
			}

			this.isHiddenDayHash = isHiddenDayHash;
		},


		// Is the current day hidden?
		// `day` is a day-of-week index (0-6), or a Moment
		isHiddenDay: function(day) {
			if (moment.isMoment(day)) {
				day = day.day();
			}
			return this.isHiddenDayHash[day];
		},


		// Incrementing the current day until it is no longer a hidden day, returning a copy.
		// If the initial value of `date` is not a hidden day, don't do anything.
		// Pass `isExclusive` as `true` if you are dealing with an end date.
		// `inc` defaults to `1` (increment one day forward each time)
		skipHiddenDays: function(date, inc, isExclusive) {
			var out = date.clone();
			inc = inc || 1;
			while (
				this.isHiddenDayHash[(out.day() + (isExclusive ? inc : 0) + 7) % 7]
			) {
				out.add(inc, 'days');
			}
			return out;
		},


		// Returns the date range of the full days the given range visually appears to occupy.
		// Returns a new range object.
		computeDayRange: function(range) {
			var startDay = range.start.clone().stripTime(); // the beginning of the day the range starts
			var end = range.end;
			var endDay = null;
			var endTimeMS;

			if (end) {
				endDay = end.clone().stripTime(); // the beginning of the day the range exclusively ends
				endTimeMS = +end.time(); // # of milliseconds into `endDay`

				// If the end time is actually inclusively part of the next day and is equal to or
				// beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
				// Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
				if (endTimeMS && endTimeMS >= this.nextDayThreshold) {
					endDay.add(1, 'days');
				}
			}

			// If no end was specified, or if it is within `startDay` but not past nextDayThreshold,
			// assign the default duration of one day.
			if (!end || endDay <= startDay) {
				endDay = startDay.clone().add(1, 'days');
			}

			return { start: startDay, end: endDay };
		},


		// Does the given event visually appear to occupy more than one day?
		isMultiDayEvent: function(event) {
			var range = this.computeDayRange(event); // event is range-ish

			return range.end.diff(range.start, 'days') > 1;
		}

	});

	;;

	 
	function Calendar(element, instanceOptions) {
		var t = this;



		// Build options object
		// -----------------------------------------------------------------------------------
		// Precedence (lowest to highest): defaults, rtlDefaults, langOptions, instanceOptions

		instanceOptions = instanceOptions || {};

		var options = mergeOptions({}, defaults, instanceOptions);
		var langOptions;

		// determine language options
		if (options.lang in langOptionHash) {
			langOptions = langOptionHash[options.lang];
		}
		else {
			langOptions = langOptionHash[defaults.lang];
		}

		if (langOptions) { // if language options exist, rebuild...
			options = mergeOptions({}, defaults, langOptions, instanceOptions);
		}

		if (options.isRTL) { // is isRTL, rebuild...
			options = mergeOptions({}, defaults, rtlDefaults, langOptions || {}, instanceOptions);
		}


		
		// Exports
		// -----------------------------------------------------------------------------------

		t.options = options;
		t.render = render;
		t.destroy = destroy;
		t.refetchEvents = refetchEvents;
		t.reportEvents = reportEvents;
		t.reportEventChange = reportEventChange;
		t.rerenderEvents = renderEvents; // `renderEvents` serves as a rerender. an API method
		t.changeView = renderView; // `renderView` will switch to another view
		t.select = select;
		t.unselect = unselect;
		t.prev = prev;
		t.next = next;
		t.prevYear = prevYear;
		t.nextYear = nextYear;
		t.today = today;
		t.gotoDate = gotoDate;
		t.incrementDate = incrementDate;
		t.zoomTo = zoomTo;
		t.getDate = getDate;
		t.getCalendar = getCalendar;
		t.getView = getView;
		t.option = option;
		t.trigger = trigger;
		t.isValidViewType = isValidViewType;
		t.getViewButtonText = getViewButtonText;



		// Language-data Internals
		// -----------------------------------------------------------------------------------
		// Apply overrides to the current language's data


		var localeData = createObject( // make a cheap copy
			getMomentLocaleData(options.lang) // will fall back to en
		);

		if (options.monthNames) {
			localeData._months = options.monthNames;
		}
		if (options.monthNamesShort) {
			localeData._monthsShort = options.monthNamesShort;
		}
		if (options.dayNames) {
			localeData._weekdays = options.dayNames;
		}
		if (options.dayNamesShort) {
			localeData._weekdaysShort = options.dayNamesShort;
		}
		if (options.firstDay != null) {
			var _week = createObject(localeData._week); // _week: { dow: # }
			_week.dow = options.firstDay;
			localeData._week = _week;
		}



		// Calendar-specific Date Utilities
		// -----------------------------------------------------------------------------------


		t.defaultAllDayEventDuration = moment.duration(options.defaultAllDayEventDuration);
		t.defaultTimedEventDuration = moment.duration(options.defaultTimedEventDuration);


		// Builds a moment using the settings of the current calendar: timezone and language.
		// Accepts anything the vanilla moment() constructor accepts.
		t.moment = function() {
			var mom;

			if (options.timezone === 'local') {
				mom = fc.moment.apply(null, arguments);

				// Force the moment to be local, because fc.moment doesn't guarantee it.
				if (mom.hasTime()) { // don't give ambiguously-timed moments a local zone
					mom.local();
				}
			}
			else if (options.timezone === 'UTC') {
				mom = fc.moment.utc.apply(null, arguments); // process as UTC
			}
			else {
				mom = fc.moment.parseZone.apply(null, arguments); // let the input decide the zone
			}

			if ('_locale' in mom) { // moment 2.8 and above
				mom._locale = localeData;
			}
			else { // pre-moment-2.8
				mom._lang = localeData;
			}

			return mom;
		};


		// Returns a boolean about whether or not the calendar knows how to calculate
		// the timezone offset of arbitrary dates in the current timezone.
		t.getIsAmbigTimezone = function() {
			return options.timezone !== 'local' && options.timezone !== 'UTC';
		};


		// Returns a copy of the given date in the current timezone of it is ambiguously zoned.
		// This will also give the date an unambiguous time.
		t.rezoneDate = function(date) {
			return t.moment(date.toArray());
		};


		// Returns a moment for the current date, as defined by the client's computer,
		// or overridden by the `now` option.
		t.getNow = function() {
			var now = options.now;
			if (typeof now === 'function') {
				now = now();
			}
			return t.moment(now);
		};


		// Calculates the week number for a moment according to the calendar's
		// `weekNumberCalculation` setting.
		t.calculateWeekNumber = function(mom) {
			var calc = options.weekNumberCalculation;

			if (typeof calc === 'function') {
				return calc(mom);
			}
			else if (calc === 'local') {
				return mom.week();
			}
			else if (calc.toUpperCase() === 'ISO') {
				return mom.isoWeek();
			}
		};


		// Get an event's normalized end date. If not present, calculate it from the defaults.
		t.getEventEnd = function(event) {
			if (event.end) {
				return event.end.clone();
			}
			else {
				return t.getDefaultEventEnd(event.allDay, event.start);
			}
		};


		// Given an event's allDay status and start date, return swhat its fallback end date should be.
		t.getDefaultEventEnd = function(allDay, start) { // TODO: rename to computeDefaultEventEnd
			var end = start.clone();

			if (allDay) {
				end.stripTime().add(t.defaultAllDayEventDuration);
			}
			else {
				end.add(t.defaultTimedEventDuration);
			}

			if (t.getIsAmbigTimezone()) {
				end.stripZone(); // we don't know what the tzo should be
			}

			return end;
		};


		// Produces a human-readable string for the given duration.
		// Side-effect: changes the locale of the given duration.
		function humanizeDuration(duration) {
			return (duration.locale || duration.lang).call(duration, options.lang) // works moment-pre-2.8
				.humanize();
		}


		
		// Imports
		// -----------------------------------------------------------------------------------


		EventManager.call(t, options);
		var isFetchNeeded = t.isFetchNeeded;
		var fetchEvents = t.fetchEvents;



		// Locals
		// -----------------------------------------------------------------------------------


		var _element = element[0];
		var header;
		var headerElement;
		var content;
		var tm; // for making theme classes
		var viewSpecCache = {};
		var currentView;
		var suggestedViewHeight;
		var windowResizeProxy; // wraps the windowResize function
		var ignoreWindowResize = 0;
		var date;
		var events = [];
		
		
		
		// Main Rendering
		// -----------------------------------------------------------------------------------


		if (options.defaultDate != null) {
			date = t.moment(options.defaultDate);
		}
		else {
			date = t.getNow();
		}
		
		
		function render(inc) {
			if (!content) {
				initialRender();
			}
			else if (elementVisible()) {
				// mainly for the public API
				calcSize();
				renderView(inc);
			}
		}
		
		
		function initialRender() {
			tm = options.theme ? 'ui' : 'fc';
			element.addClass('fc');

			if (options.isRTL) {
				element.addClass('fc-rtl');
			}
			else {
				element.addClass('fc-ltr');
			}

			if (options.theme) {
				element.addClass('ui-widget');
			}
			else {
				element.addClass('fc-unthemed');
			}

			content = $("<div class='fc-view-container'/>").prependTo(element);

			header = new Header(t, options);
			headerElement = header.render();
			if (headerElement) {
				element.prepend(headerElement);
			}

			renderView(options.defaultView);

			if (options.handleWindowResize) {
				windowResizeProxy = debounce(windowResize, options.windowResizeDelay); // prevents rapid calls
				$(window).resize(windowResizeProxy);
			}
		}
		
		
		function destroy() {

			if (currentView) {
				currentView.destroyView();
			}

			header.destroy();
			content.remove();
			element.removeClass('fc fc-ltr fc-rtl fc-unthemed ui-widget');

			$(window).unbind('resize', windowResizeProxy);
		}
		
		
		function elementVisible() {
			return element.is(':visible');
		}
		
		

		// View Rendering
		// -----------------------------------------------------------------------------------


		// Renders a view because of a date change, view-type change, or for the first time
		function renderView(viewType) {
			ignoreWindowResize++;

			// if viewType is changing, destroy the old view
			if (currentView && viewType && currentView.type !== viewType) {
				header.deactivateButton(currentView.type);
				freezeContentHeight(); // prevent a scroll jump when view element is removed
				if (currentView.start) { // rendered before?
					currentView.destroyView();
				}
				currentView.el.remove();
				currentView = null;
			}

			// if viewType changed, or the view was never created, create a fresh view
			if (!currentView && viewType) {
				currentView = instantiateView(viewType);
				currentView.el =  $("<div class='fc-view fc-" + viewType + "-view' />").appendTo(content);
				header.activateButton(viewType);
			}

			if (currentView) {

				// in case the view should render a period of time that is completely hidden
				date = currentView.massageCurrentDate(date);

				// render or rerender the view
				if (
					!currentView.start || // never rendered before
					!date.isWithin(currentView.intervalStart, currentView.intervalEnd) // implicit date window change
				) {
					if (elementVisible()) {

						freezeContentHeight();
						if (currentView.start) { // rendered before?
							currentView.destroyView();
						}
						currentView.setDate(date);
						currentView.renderView();
						unfreezeContentHeight();

						// need to do this after View::render, so dates are calculated
						updateHeaderTitle();
						updateTodayButton();

						getAndRenderEvents();
					}
				}
			}

			unfreezeContentHeight(); // undo any lone freezeContentHeight calls
			ignoreWindowResize--;
		}



		// View Instantiation
		// -----------------------------------------------------------------------------------


		// Given a view name for a custom view or a standard view, creates a ready-to-go View object
		function instantiateView(viewType) {
			var spec = getViewSpec(viewType);

			return new spec['class'](t, spec.options, viewType);
		}


		// Gets information about how to create a view
		function getViewSpec(requestedViewType) {
			var allDefaultButtonText = options.defaultButtonText || {};
			var allButtonText = options.buttonText || {};
			var hash = options.views || {}; // the `views` option object
			var viewType = requestedViewType;
			var viewOptionsChain = [];
			var viewOptions;
			var viewClass;
			var duration, unit, unitIsSingle = false;
			var buttonText;

			if (viewSpecCache[requestedViewType]) {
				return viewSpecCache[requestedViewType];
			}

			function processSpecInput(input) {
				if (typeof input === 'function') {
					viewClass = input;
				}
				else if (typeof input === 'object') {
					$.extend(viewOptions, input);
				}
			}

			// iterate up a view's spec ancestor chain util we find a class to instantiate
			while (viewType && !viewClass) {
				viewOptions = {}; // only for this specific view in the ancestry
				processSpecInput(fcViews[viewType]); // $.fullCalendar.views, lower precedence
				processSpecInput(hash[viewType]); // options at initialization, higher precedence
				viewOptionsChain.unshift(viewOptions); // record older ancestors first
				viewType = viewOptions.type;
			}

			viewOptionsChain.unshift({}); // jQuery's extend needs at least one arg
			viewOptions = $.extend.apply($, viewOptionsChain); // combine all, newer ancestors overwritting old

			if (viewClass) {

				duration = viewOptions.duration || viewClass.duration;
				if (duration) {
					duration = moment.duration(duration);
					unit = computeIntervalUnit(duration);
					unitIsSingle = duration.as(unit) === 1;
				}

				// options that are specified per the view's duration, like "week" or "day"
				if (unitIsSingle && hash[unit]) {
					viewOptions = $.extend({}, hash[unit], viewOptions); // lowest priority
				}

				// compute the final text for the button representing this view
				buttonText =
					allButtonText[requestedViewType] || // init options, like "agendaWeek"
					(unitIsSingle ? allButtonText[unit] : null) || // init options, like "week"
					allDefaultButtonText[requestedViewType] || // lang data, like "agendaWeek"
					(unitIsSingle ? allDefaultButtonText[unit] : null) || // lang data, like "week"
					viewOptions.buttonText ||
					viewClass.buttonText ||
					(duration ? humanizeDuration(duration) : null) ||
					requestedViewType;

				return (viewSpecCache[requestedViewType] = {
					'class': viewClass,
					options: viewOptions,
					buttonText: buttonText
				});
			}
		}


		// Returns a boolean about whether the view is okay to instantiate at some point
		function isValidViewType(viewType) {
			return Boolean(getViewSpec(viewType));
		}


		// Gets the text that should be displayed on a view's button in the header
		function getViewButtonText(viewType) {
			var spec = getViewSpec(viewType);

			if (spec) {
				return spec.buttonText;
			}
		}
		
		

		// Resizing
		// -----------------------------------------------------------------------------------


		t.getSuggestedViewHeight = function() {
			if (suggestedViewHeight === undefined) {
				calcSize();
			}
			return suggestedViewHeight;
		};


		t.isHeightAuto = function() {
			return options.contentHeight === 'auto' || options.height === 'auto';
		};
		
		
		function updateSize(shouldRecalc) {
			if (elementVisible()) {

				if (shouldRecalc) {
					_calcSize();
				}

				ignoreWindowResize++;
				currentView.updateSize(true); // isResize=true. will poll getSuggestedViewHeight() and isHeightAuto()
				ignoreWindowResize--;

				return true; // signal success
			}
		}


		function calcSize() {
			if (elementVisible()) {
				_calcSize();
			}
		}
		
		
		function _calcSize() { // assumes elementVisible
			if (typeof options.contentHeight === 'number') { // exists and not 'auto'
				suggestedViewHeight = options.contentHeight;
			}
			else if (typeof options.height === 'number') { // exists and not 'auto'
				suggestedViewHeight = options.height - (headerElement ? headerElement.outerHeight(true) : 0);
			}
			else {
				suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));
			}
		}
		
		
		function windowResize(ev) {
			if (
				!ignoreWindowResize &&
				ev.target === window && // so we don't process jqui "resize" events that have bubbled up
				currentView.start // view has already been rendered
			) {
				if (updateSize(true)) {
					currentView.trigger('windowResize', _element);
				}
			}
		}
		
		
		
		/* Event Fetching/Rendering
		-----------------------------------------------------------------------------*/
		// TODO: going forward, most of this stuff should be directly handled by the view


		function refetchEvents() { // can be called as an API method
			destroyEvents(); // so that events are cleared before user starts waiting for AJAX
			fetchAndRenderEvents();
		}


		function renderEvents() { // destroys old events if previously rendered
			if (elementVisible()) {
				freezeContentHeight();
				currentView.destroyViewEvents(); // no performance cost if never rendered
				currentView.renderViewEvents(events);
				unfreezeContentHeight();
			}
		}


		function destroyEvents() {
			freezeContentHeight();
			currentView.destroyViewEvents();
			unfreezeContentHeight();
		}
		

		function getAndRenderEvents() {
			if (!options.lazyFetching || isFetchNeeded(currentView.start, currentView.end)) {
				fetchAndRenderEvents();
			}
			else {
				renderEvents();
			}
		}


		function fetchAndRenderEvents() {
			fetchEvents(currentView.start, currentView.end);
				// ... will call reportEvents
				// ... which will call renderEvents
		}

		
		// called when event data arrives
		function reportEvents(_events) {
			events = _events;
			renderEvents();
		}


		// called when a single event's data has been changed
		function reportEventChange() {
			renderEvents();
		}



		/* Header Updating
		-----------------------------------------------------------------------------*/


		function updateHeaderTitle() {
			header.updateTitle(currentView.title);
		}


		function updateTodayButton() {
			var now = t.getNow();
			if (now.isWithin(currentView.intervalStart, currentView.intervalEnd)) {
				header.disableButton('today');
			}
			else {
				header.enableButton('today');
			}
		}
		


		/* Selection
		-----------------------------------------------------------------------------*/
		

		function select(start, end) {

			start = t.moment(start);
			if (end) {
				end = t.moment(end);
			}
			else if (start.hasTime()) {
				end = start.clone().add(t.defaultTimedEventDuration);
			}
			else {
				end = start.clone().add(t.defaultAllDayEventDuration);
			}

			currentView.select({ start: start, end: end }); // accepts a range
		}
		

		function unselect() { // safe to be called before renderView
			if (currentView) {
				currentView.unselect();
			}
		}
		
		
		
		/* Date
		-----------------------------------------------------------------------------*/
		
		
		function prev() {
			date = currentView.computePrevDate(date);
			renderView();
		}
		
		
		function next() {
			date = currentView.computeNextDate(date);
			renderView();
		}
		
		
		function prevYear() {
			date.add(-1, 'years');
			renderView();
		}
		
		
		function nextYear() {
			date.add(1, 'years');
			renderView();
		}
		
		
		function today() {
			date = t.getNow();
			renderView();
		}
		
		
		function gotoDate(dateInput) {
			date = t.moment(dateInput);
			renderView();
		}
		
		
		function incrementDate(delta) {
			date.add(moment.duration(delta));
			renderView();
		}


		// Forces navigation to a view for the given date.
		// `viewType` can be a specific view name or a generic one like "week" or "day".
		function zoomTo(newDate, viewType) {
			var viewStr;
			var match;

			if (!viewType || !isValidViewType(viewType)) { // a general view name, or "auto"
				viewType = viewType || 'day';
				viewStr = header.getViewsWithButtons().join(' '); // space-separated string of all the views in the header

				// try to match a general view name, like "week", against a specific one, like "agendaWeek"
				match = viewStr.match(new RegExp('\\w+' + capitaliseFirstLetter(viewType)));

				// fall back to the day view being used in the header
				if (!match) {
					match = viewStr.match(/\w+Day/);
				}

				viewType = match ? match[0] : 'agendaDay'; // fall back to agendaDay
			}

			date = newDate;
			renderView(viewType);
		}
		
		
		function getDate() {
			return date.clone();
		}



		/* Height "Freezing"
		-----------------------------------------------------------------------------*/


		function freezeContentHeight() {
			content.css({
				width: '100%',
				height: content.height(),
				overflow: 'hidden'
			});
		}


		function unfreezeContentHeight() {
			content.css({
				width: '',
				height: '',
				overflow: ''
			});
		}
		
		
		
		/* Misc
		-----------------------------------------------------------------------------*/
		

		function getCalendar() {
			return t;
		}

		
		function getView() {
			return currentView;
		}
		
		
		function option(name, value) {
			if (value === undefined) {
				return options[name];
			}
			if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
				options[name] = value;
				updateSize(true); // true = allow recalculation of height
			}
		}
		
		
		function trigger(name, thisObj) {
			if (options[name]) {
				return options[name].apply(
					thisObj || _element,
					Array.prototype.slice.call(arguments, 2)
				);
			}
		}

	}

	;;

	/* Top toolbar area with buttons and title
	----------------------------------------------------------------------------------------------------------------------*/
	// TODO: rename all header-related things to "toolbar"

	function Header(calendar, options) {
		var t = this;
		
		// exports
		t.render = render;
		t.destroy = destroy;
		t.updateTitle = updateTitle;
		t.activateButton = activateButton;
		t.deactivateButton = deactivateButton;
		t.disableButton = disableButton;
		t.enableButton = enableButton;
		t.getViewsWithButtons = getViewsWithButtons;
		
		// locals
		var el = $();
		var viewsWithButtons = [];
		var tm;


		function render() {
			var sections = options.header;

			tm = options.theme ? 'ui' : 'fc';

			if (sections) {
				el = $("<div class='fc-toolbar'/>")
					.append(renderSection('left'))
					.append(renderSection('right'))
					.append(renderSection('center'))
					.append('<div class="fc-clear"/>');

				return el;
			}
		}
		
		
		function destroy() {
			el.remove();
		}
		
		
		function renderSection(position) {
			var sectionEl = $('<div class="fc-' + position + '"/>');
			var buttonStr = options.header[position];

			if (buttonStr) {
				$.each(buttonStr.split(' '), function(i) {
					var groupChildren = $();
					var isOnlyButtons = true;
					var groupEl;

					$.each(this.split(','), function(j, buttonName) {
						var buttonClick;
						var themeIcon;
						var normalIcon;
						var defaultText;
						var viewText; // highest priority
						var customText;
						var innerHtml;
						var classes;
						var button;

						if (buttonName == 'title') {
							groupChildren = groupChildren.add($('<h2>&nbsp;</h2>')); // we always want it to take up height
							isOnlyButtons = false;
						}
						else {
							if (calendar[buttonName]) { // a calendar method
								buttonClick = function() {
									calendar[buttonName]();
								};
							}
							else if (calendar.isValidViewType(buttonName)) { // a view type
								buttonClick = function() {
									calendar.changeView(buttonName);
								};
								viewsWithButtons.push(buttonName);
								viewText = calendar.getViewButtonText(buttonName);
							}
							if (buttonClick) {

								// smartProperty allows different text per view button (ex: "Agenda Week" vs "Basic Week")
								themeIcon = smartProperty(options.themeButtonIcons, buttonName);
								normalIcon = smartProperty(options.buttonIcons, buttonName);
								defaultText = smartProperty(options.defaultButtonText, buttonName); // from languages
								customText = smartProperty(options.buttonText, buttonName);

								if (viewText || customText) {
									innerHtml = htmlEscape(viewText || customText);
								}
								else if (themeIcon && options.theme) {
									innerHtml = "<span class='ui-icon ui-icon-" + themeIcon + "'></span>";
								}
								else if (normalIcon && !options.theme) {
									innerHtml = "<span class='fc-icon fc-icon-" + normalIcon + "'></span>";
								}
								else {
									innerHtml = htmlEscape(defaultText || buttonName);
								}

								classes = [
									'fc-' + buttonName + '-button',
									tm + '-button',
									tm + '-state-default'
								];

								button = $( // type="button" so that it doesn't submit a form
									'<button type="button" class="' + classes.join(' ') + '">' +
										innerHtml +
									'</button>'
									)
									.click(function() {
										// don't process clicks for disabled buttons
										if (!button.hasClass(tm + '-state-disabled')) {

											buttonClick();

											// after the click action, if the button becomes the "active" tab, or disabled,
											// it should never have a hover class, so remove it now.
											if (
												button.hasClass(tm + '-state-active') ||
												button.hasClass(tm + '-state-disabled')
											) {
												button.removeClass(tm + '-state-hover');
											}
										}
									})
									.mousedown(function() {
										// the *down* effect (mouse pressed in).
										// only on buttons that are not the "active" tab, or disabled
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-down');
									})
									.mouseup(function() {
										// undo the *down* effect
										button.removeClass(tm + '-state-down');
									})
									.hover(
										function() {
											// the *hover* effect.
											// only on buttons that are not the "active" tab, or disabled
											button
												.not('.' + tm + '-state-active')
												.not('.' + tm + '-state-disabled')
												.addClass(tm + '-state-hover');
										},
										function() {
											// undo the *hover* effect
											button
												.removeClass(tm + '-state-hover')
												.removeClass(tm + '-state-down'); // if mouseleave happens before mouseup
										}
									);

								groupChildren = groupChildren.add(button);
							}
						}
					});

					if (isOnlyButtons) {
						groupChildren
							.first().addClass(tm + '-corner-left').end()
							.last().addClass(tm + '-corner-right').end();
					}

					if (groupChildren.length > 1) {
						groupEl = $('<div/>');
						if (isOnlyButtons) {
							groupEl.addClass('fc-button-group');
						}
						groupEl.append(groupChildren);
						sectionEl.append(groupEl);
					}
					else {
						sectionEl.append(groupChildren); // 1 or 0 children
					}
				});
			}

			return sectionEl;
		}
		
		
		function updateTitle(text) {
			el.find('h2').text(text);
		}
		
		
		function activateButton(buttonName) {
			el.find('.fc-' + buttonName + '-button')
				.addClass(tm + '-state-active');
		}
		
		
		function deactivateButton(buttonName) {
			el.find('.fc-' + buttonName + '-button')
				.removeClass(tm + '-state-active');
		}
		
		
		function disableButton(buttonName) {
			el.find('.fc-' + buttonName + '-button')
				.attr('disabled', 'disabled')
				.addClass(tm + '-state-disabled');
		}
		
		
		function enableButton(buttonName) {
			el.find('.fc-' + buttonName + '-button')
				.removeAttr('disabled')
				.removeClass(tm + '-state-disabled');
		}


		function getViewsWithButtons() {
			return viewsWithButtons;
		}

	}

	;;

	fc.sourceNormalizers = [];
	fc.sourceFetchers = [];

	var ajaxDefaults = {
		dataType: 'json',
		cache: false
	};

	var eventGUID = 1;


	function EventManager(options) { // assumed to be a calendar
		var t = this;
		
		
		// exports
		t.isFetchNeeded = isFetchNeeded;
		t.fetchEvents = fetchEvents;
		t.addEventSource = addEventSource;
		t.removeEventSource = removeEventSource;
		t.updateEvent = updateEvent;
		t.renderEvent = renderEvent;
		t.removeEvents = removeEvents;
		t.clientEvents = clientEvents;
		t.mutateEvent = mutateEvent;
		t.normalizeEventDateProps = normalizeEventDateProps;
		t.ensureVisibleEventRange = ensureVisibleEventRange;
		
		
		// imports
		var trigger = t.trigger;
		var getView = t.getView;
		var reportEvents = t.reportEvents;
		
		
		// locals
		var stickySource = { events: [] };
		var sources = [ stickySource ];
		var rangeStart, rangeEnd;
		var currentFetchID = 0;
		var pendingSourceCnt = 0;
		var loadingLevel = 0;
		var cache = []; // holds events that have already been expanded


		$.each(
			(options.events ? [ options.events ] : []).concat(options.eventSources || []),
			function(i, sourceInput) {
				var source = buildEventSource(sourceInput);
				if (source) {
					sources.push(source);
				}
			}
		);
		
		
		
		/* Fetching
		-----------------------------------------------------------------------------*/
		
		
		function isFetchNeeded(start, end) {
			return !rangeStart || // nothing has been fetched yet?
				// or, a part of the new range is outside of the old range? (after normalizing)
				start.clone().stripZone() < rangeStart.clone().stripZone() ||
				end.clone().stripZone() > rangeEnd.clone().stripZone();
		}
		
		
		function fetchEvents(start, end) {
			rangeStart = start;
			rangeEnd = end;
			cache = [];
			var fetchID = ++currentFetchID;
			var len = sources.length;
			pendingSourceCnt = len;
			for (var i=0; i<len; i++) {
				fetchEventSource(sources[i], fetchID);
			}
		}
		
		
		function fetchEventSource(source, fetchID) {
			_fetchEventSource(source, function(eventInputs) {
				var isArraySource = $.isArray(source.events);
				var i, eventInput;
				var abstractEvent;

				if (fetchID == currentFetchID) {

					if (eventInputs) {
						for (i = 0; i < eventInputs.length; i++) {
							eventInput = eventInputs[i];

							if (isArraySource) { // array sources have already been convert to Event Objects
								abstractEvent = eventInput;
							}
							else {
								abstractEvent = buildEventFromInput(eventInput, source);
							}

							if (abstractEvent) { // not false (an invalid event)
								cache.push.apply(
									cache,
									expandEvent(abstractEvent) // add individual expanded events to the cache
								);
							}
						}
					}

					pendingSourceCnt--;
					if (!pendingSourceCnt) {
						reportEvents(cache);
					}
				}
			});
		}
		
		
		function _fetchEventSource(source, callback) {
			var i;
			var fetchers = fc.sourceFetchers;
			var res;

			for (i=0; i<fetchers.length; i++) {
				res = fetchers[i].call(
					t, // this, the Calendar object
					source,
					rangeStart.clone(),
					rangeEnd.clone(),
					options.timezone,
					callback
				);

				if (res === true) {
					// the fetcher is in charge. made its own async request
					return;
				}
				else if (typeof res == 'object') {
					// the fetcher returned a new source. process it
					_fetchEventSource(res, callback);
					return;
				}
			}

			var events = source.events;
			if (events) {
				if ($.isFunction(events)) {
					pushLoading();
					events.call(
						t, // this, the Calendar object
						rangeStart.clone(),
						rangeEnd.clone(),
						options.timezone,
						function(events) {
							callback(events);
							popLoading();
						}
					);
				}
				else if ($.isArray(events)) {
					callback(events);
				}
				else {
					callback();
				}
			}else{
				var url = source.url;
				if (url) {
					var success = source.success;
					var error = source.error;
					var complete = source.complete;

					// retrieve any outbound GET/POST $.ajax data from the options
					var customData;
					if ($.isFunction(source.data)) {
						// supplied as a function that returns a key/value object
						customData = source.data();
					}
					else {
						// supplied as a straight key/value object
						customData = source.data;
					}

					// use a copy of the custom data so we can modify the parameters
					// and not affect the passed-in object.
					var data = $.extend({}, customData || {});

					var startParam = firstDefined(source.startParam, options.startParam);
					var endParam = firstDefined(source.endParam, options.endParam);
					var timezoneParam = firstDefined(source.timezoneParam, options.timezoneParam);

					if (startParam) {
						data[startParam] = rangeStart.format();
					}
					if (endParam) {
						data[endParam] = rangeEnd.format();
					}
					if (options.timezone && options.timezone != 'local') {
						data[timezoneParam] = options.timezone;
					}

					pushLoading();
					$.ajax($.extend({}, ajaxDefaults, source, {
						data: data,
						success: function(events) {
							events = events || [];
							var res = applyAll(success, this, arguments);
							if ($.isArray(res)) {
								events = res;
							}
							callback(events);
						},
						error: function() {
							applyAll(error, this, arguments);
							callback();
						},
						complete: function() {
							applyAll(complete, this, arguments);
							popLoading();
						}
					}));
				}else{
					callback();
				}
			}
		}
		
		
		
		/* Sources
		-----------------------------------------------------------------------------*/
		

		function addEventSource(sourceInput) {
			var source = buildEventSource(sourceInput);
			if (source) {
				sources.push(source);
				pendingSourceCnt++;
				fetchEventSource(source, currentFetchID); // will eventually call reportEvents
			}
		}


		function buildEventSource(sourceInput) { // will return undefined if invalid source
			var normalizers = fc.sourceNormalizers;
			var source;
			var i;

			if ($.isFunction(sourceInput) || $.isArray(sourceInput)) {
				source = { events: sourceInput };
			}
			else if (typeof sourceInput === 'string') {
				source = { url: sourceInput };
			}
			else if (typeof sourceInput === 'object') {
				source = $.extend({}, sourceInput); // shallow copy
			}

			if (source) {

				// TODO: repeat code, same code for event classNames
				if (source.className) {
					if (typeof source.className === 'string') {
						source.className = source.className.split(/\s+/);
					}
					// otherwise, assumed to be an array
				}
				else {
					source.className = [];
				}

				// for array sources, we convert to standard Event Objects up front
				if ($.isArray(source.events)) {
					source.origArray = source.events; // for removeEventSource
					source.events = $.map(source.events, function(eventInput) {
						return buildEventFromInput(eventInput, source);
					});
				}

				for (i=0; i<normalizers.length; i++) {
					normalizers[i].call(t, source);
				}

				return source;
			}
		}


		function removeEventSource(source) {
			sources = $.grep(sources, function(src) {
				return !isSourcesEqual(src, source);
			});
			// remove all client events from that source
			cache = $.grep(cache, function(e) {
				return !isSourcesEqual(e.source, source);
			});
			reportEvents(cache);
		}


		function isSourcesEqual(source1, source2) {
			return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
		}


		function getSourcePrimitive(source) {
			return (
				(typeof source === 'object') ? // a normalized event source?
					(source.origArray || source.googleCalendarId || source.url || source.events) : // get the primitive
					null
			) ||
			source; // the given argument *is* the primitive
		}
		
		
		
		/* Manipulation
		-----------------------------------------------------------------------------*/


		// Only ever called from the externally-facing API
		function updateEvent(event) {

			// massage start/end values, even if date string values
			event.start = t.moment(event.start);
			if (event.end) {
				event.end = t.moment(event.end);
			}
			else {
				event.end = null;
			}

			mutateEvent(event, getMiscEventProps(event)); // will handle start/end/allDay normalization
			reportEvents(cache); // reports event modifications (so we can redraw)
		}


		// Returns a hash of misc event properties that should be copied over to related events.
		function getMiscEventProps(event) {
			var props = {};

			$.each(event, function(name, val) {
				if (isMiscEventPropName(name)) {
					if (val !== undefined && isAtomic(val)) { // a defined non-object
						props[name] = val;
					}
				}
			});

			return props;
		}

		// non-date-related, non-id-related, non-secret
		function isMiscEventPropName(name) {
			return !/^_|^(id|allDay|start|end)$/.test(name);
		}

		
		// returns the expanded events that were created
		function renderEvent(eventInput, stick) {
			var abstractEvent = buildEventFromInput(eventInput);
			var events;
			var i, event;

			if (abstractEvent) { // not false (a valid input)
				events = expandEvent(abstractEvent);

				for (i = 0; i < events.length; i++) {
					event = events[i];

					if (!event.source) {
						if (stick) {
							stickySource.events.push(event);
							event.source = stickySource;
						}
						cache.push(event);
					}
				}

				reportEvents(cache);

				return events;
			}

			return [];
		}
		
		
		function removeEvents(filter) {
			var eventID;
			var i;

			if (filter == null) { // null or undefined. remove all events
				filter = function() { return true; }; // will always match
			}
			else if (!$.isFunction(filter)) { // an event ID
				eventID = filter + '';
				filter = function(event) {
					return event._id == eventID;
				};
			}

			// Purge event(s) from our local cache
			cache = $.grep(cache, filter, true); // inverse=true

			// Remove events from array sources.
			// This works because they have been converted to official Event Objects up front.
			// (and as a result, event._id has been calculated).
			for (i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = $.grep(sources[i].events, filter, true);
				}
			}

			reportEvents(cache);
		}
		
		
		function clientEvents(filter) {
			if ($.isFunction(filter)) {
				return $.grep(cache, filter);
			}
			else if (filter != null) { // not null, not undefined. an event ID
				filter += '';
				return $.grep(cache, function(e) {
					return e._id == filter;
				});
			}
			return cache; // else, return all
		}
		
		
		
		/* Loading State
		-----------------------------------------------------------------------------*/
		
		
		function pushLoading() {
			if (!(loadingLevel++)) {
				trigger('loading', null, true, getView());
			}
		}
		
		
		function popLoading() {
			if (!(--loadingLevel)) {
				trigger('loading', null, false, getView());
			}
		}
		
		
		
		/* Event Normalization
		-----------------------------------------------------------------------------*/


		// Given a raw object with key/value properties, returns an "abstract" Event object.
		// An "abstract" event is an event that, if recurring, will not have been expanded yet.
		// Will return `false` when input is invalid.
		// `source` is optional
		function buildEventFromInput(input, source) {
			var out = {};
			var start, end;
			var allDay;

			if (options.eventDataTransform) {
				input = options.eventDataTransform(input);
			}
			if (source && source.eventDataTransform) {
				input = source.eventDataTransform(input);
			}

			// Copy all properties over to the resulting object.
			// The special-case properties will be copied over afterwards.
			$.extend(out, input);

			if (source) {
				out.source = source;
			}

			out._id = input._id || (input.id === undefined ? '_fc' + eventGUID++ : input.id + '');

			if (input.className) {
				if (typeof input.className == 'string') {
					out.className = input.className.split(/\s+/);
				}
				else { // assumed to be an array
					out.className = input.className;
				}
			}
			else {
				out.className = [];
			}

			start = input.start || input.date; // "date" is an alias for "start"
			end = input.end;

			// parse as a time (Duration) if applicable
			if (isTimeString(start)) {
				start = moment.duration(start);
			}
			if (isTimeString(end)) {
				end = moment.duration(end);
			}

			if (input.dow || moment.isDuration(start) || moment.isDuration(end)) {

				// the event is "abstract" (recurring) so don't calculate exact start/end dates just yet
				out.start = start ? moment.duration(start) : null; // will be a Duration or null
				out.end = end ? moment.duration(end) : null; // will be a Duration or null
				out._recurring = true; // our internal marker
			}
			else {

				if (start) {
					start = t.moment(start);
					if (!start.isValid()) {
						return false;
					}
				}

				if (end) {
					end = t.moment(end);
					if (!end.isValid()) {
						end = null; // let defaults take over
					}
				}

				allDay = input.allDay;
				if (allDay === undefined) { // still undefined? fallback to default
					allDay = firstDefined(
						source ? source.allDayDefault : undefined,
						options.allDayDefault
					);
					// still undefined? normalizeEventDateProps will calculate it
				}

				assignDatesToEvent(start, end, allDay, out);
			}

			return out;
		}


		// Normalizes and assigns the given dates to the given partially-formed event object.
		// NOTE: mutates the given start/end moments. does not make a copy.
		function assignDatesToEvent(start, end, allDay, event) {
			event.start = start;
			event.end = end;
			event.allDay = allDay;
			normalizeEventDateProps(event);
			backupEventDates(event);
		}


		// Ensures the allDay property exists.
		// Ensures the start/end dates are consistent with allDay and forceEventDuration.
		// Accepts an Event object, or a plain object with event-ish properties.
		// NOTE: Will modify the given object.
		function normalizeEventDateProps(props) {

			if (props.allDay == null) {
				props.allDay = !(props.start.hasTime() || (props.end && props.end.hasTime()));
			}

			if (props.allDay) {
				props.start.stripTime();
				if (props.end) {
					props.end.stripTime();
				}
			}
			else {
				if (!props.start.hasTime()) {
					props.start = t.rezoneDate(props.start); // will also give it a 00:00 time
				}
				if (props.end && !props.end.hasTime()) {
					props.end = t.rezoneDate(props.end); // will also give it a 00:00 time
				}
			}

			if (props.end && !props.end.isAfter(props.start)) {
				props.end = null;
			}

			if (!props.end) {
				if (options.forceEventDuration) {
					props.end = t.getDefaultEventEnd(props.allDay, props.start);
				}
				else {
					props.end = null;
				}
			}
		}


		// If `range` is a proper range with a start and end, returns the original object.
		// If missing an end, computes a new range with an end, computing it as if it were an event.
		// TODO: make this a part of the event -> eventRange system
		function ensureVisibleEventRange(range) {
			var allDay;

			if (!range.end) {

				allDay = range.allDay; // range might be more event-ish than we think
				if (allDay == null) {
					allDay = !range.start.hasTime();
				}

				range = {
					start: range.start,
					end: t.getDefaultEventEnd(allDay, range.start)
				};
			}
			return range;
		}


		// If the given event is a recurring event, break it down into an array of individual instances.
		// If not a recurring event, return an array with the single original event.
		// If given a falsy input (probably because of a failed buildEventFromInput call), returns an empty array.
		// HACK: can override the recurring window by providing custom rangeStart/rangeEnd (for businessHours).
		function expandEvent(abstractEvent, _rangeStart, _rangeEnd) {
			var events = [];
			var dowHash;
			var dow;
			var i;
			var date;
			var startTime, endTime;
			var start, end;
			var event;

			_rangeStart = _rangeStart || rangeStart;
			_rangeEnd = _rangeEnd || rangeEnd;

			if (abstractEvent) {
				if (abstractEvent._recurring) {

					// make a boolean hash as to whether the event occurs on each day-of-week
					if ((dow = abstractEvent.dow)) {
						dowHash = {};
						for (i = 0; i < dow.length; i++) {
							dowHash[dow[i]] = true;
						}
					}

					// iterate through every day in the current range
					date = _rangeStart.clone().stripTime(); // holds the date of the current day
					while (date.isBefore(_rangeEnd)) {

						if (!dowHash || dowHash[date.day()]) { // if everyday, or this particular day-of-week

							startTime = abstractEvent.start; // the stored start and end properties are times (Durations)
							endTime = abstractEvent.end; // "
							start = date.clone();
							end = null;

							if (startTime) {
								start = start.time(startTime);
							}
							if (endTime) {
								end = date.clone().time(endTime);
							}

							event = $.extend({}, abstractEvent); // make a copy of the original
							assignDatesToEvent(
								start, end,
								!startTime && !endTime, // allDay?
								event
							);
							events.push(event);
						}

						date.add(1, 'days');
					}
				}
				else {
					events.push(abstractEvent); // return the original event. will be a one-item array
				}
			}

			return events;
		}



		/* Event Modification Math
		-----------------------------------------------------------------------------------------*/


		// Modifies an event and all related events by applying the given properties.
		// Special date-diffing logic is used for manipulation of dates.
		// If `props` does not contain start/end dates, the updated values are assumed to be the event's current start/end.
		// All date comparisons are done against the event's pristine _start and _end dates.
		// Returns an object with delta information and a function to undo all operations.
		//
		function mutateEvent(event, props) {
			var miscProps = {};
			var clearEnd;
			var dateDelta;
			var durationDelta;
			var undoFunc;

			props = props || {};

			// ensure new date-related values to compare against
			if (!props.start) {
				props.start = event.start.clone();
			}
			if (props.end === undefined) {
				props.end = event.end ? event.end.clone() : null;
			}
			if (props.allDay == null) { // is null or undefined?
				props.allDay = event.allDay;
			}

			normalizeEventDateProps(props); // massages start/end/allDay

			// clear the end date if explicitly changed to null
			clearEnd = event._end !== null && props.end === null;

			// compute the delta for moving the start and end dates together
			if (props.allDay) {
				dateDelta = diffDay(props.start, event._start); // whole-day diff from start-of-day
			}
			else {
				dateDelta = diffDayTime(props.start, event._start);
			}

			// compute the delta for moving the end date (after applying dateDelta)
			if (!clearEnd && props.end) {
				durationDelta = diffDayTime(
					// new duration
					props.end,
					props.start
				).subtract(diffDayTime(
					// subtract old duration
					event._end || t.getDefaultEventEnd(event._allDay, event._start),
					event._start
				));
			}

			// gather all non-date-related properties
			$.each(props, function(name, val) {
				if (isMiscEventPropName(name)) {
					if (val !== undefined) {
						miscProps[name] = val;
					}
				}
			});

			// apply the operations to the event and all related events
			undoFunc = mutateEvents(
				clientEvents(event._id), // get events with this ID
				clearEnd,
				props.allDay,
				dateDelta,
				durationDelta,
				miscProps
			);

			return {
				dateDelta: dateDelta,
				durationDelta: durationDelta,
				undo: undoFunc
			};
		}


		// Modifies an array of events in the following ways (operations are in order):
		// - clear the event's `end`
		// - convert the event to allDay
		// - add `dateDelta` to the start and end
		// - add `durationDelta` to the event's duration
		// - assign `miscProps` to the event
		//
		// Returns a function that can be called to undo all the operations.
		//
		// TODO: don't use so many closures. possible memory issues when lots of events with same ID.
		//
		function mutateEvents(events, clearEnd, allDay, dateDelta, durationDelta, miscProps) {
			var isAmbigTimezone = t.getIsAmbigTimezone();
			var undoFunctions = [];

			// normalize zero-length deltas to be null
			if (dateDelta && !dateDelta.valueOf()) { dateDelta = null; }
			if (durationDelta && !durationDelta.valueOf()) { durationDelta = null; }

			$.each(events, function(i, event) {
				var oldProps;
				var newProps;

				// build an object holding all the old values, both date-related and misc.
				// for the undo function.
				oldProps = {
					start: event.start.clone(),
					end: event.end ? event.end.clone() : null,
					allDay: event.allDay
				};
				$.each(miscProps, function(name) {
					oldProps[name] = event[name];
				});

				// new date-related properties. work off the original date snapshot.
				// ok to use references because they will be thrown away when backupEventDates is called.
				newProps = {
					start: event._start,
					end: event._end,
					allDay: event._allDay
				};

				if (clearEnd) {
					newProps.end = null;
				}

				newProps.allDay = allDay;

				normalizeEventDateProps(newProps); // massages start/end/allDay

				if (dateDelta) {
					newProps.start.add(dateDelta);
					if (newProps.end) {
						newProps.end.add(dateDelta);
					}
				}

				if (durationDelta) {
					if (!newProps.end) {
						newProps.end = t.getDefaultEventEnd(newProps.allDay, newProps.start);
					}
					newProps.end.add(durationDelta);
				}

				// if the dates have changed, and we know it is impossible to recompute the
				// timezone offsets, strip the zone.
				if (
					isAmbigTimezone &&
					!newProps.allDay &&
					(dateDelta || durationDelta)
				) {
					newProps.start.stripZone();
					if (newProps.end) {
						newProps.end.stripZone();
					}
				}

				$.extend(event, miscProps, newProps); // copy over misc props, then date-related props
				backupEventDates(event); // regenerate internal _start/_end/_allDay

				undoFunctions.push(function() {
					$.extend(event, oldProps);
					backupEventDates(event); // regenerate internal _start/_end/_allDay
				});
			});

			return function() {
				for (var i = 0; i < undoFunctions.length; i++) {
					undoFunctions[i]();
				}
			};
		}


		/* Business Hours
		-----------------------------------------------------------------------------------------*/

		t.getBusinessHoursEvents = getBusinessHoursEvents;


		// Returns an array of events as to when the business hours occur in the given view.
		// Abuse of our event system :(
		function getBusinessHoursEvents() {
			var optionVal = options.businessHours;
			var defaultVal = {
				className: 'fc-nonbusiness',
				start: '09:00',
				end: '17:00',
				dow: [ 1, 2, 3, 4, 5 ], // monday - friday
				rendering: 'inverse-background'
			};
			var view = t.getView();
			var eventInput;

			if (optionVal) {
				if (typeof optionVal === 'object') {
					// option value is an object that can override the default business hours
					eventInput = $.extend({}, defaultVal, optionVal);
				}
				else {
					// option value is `true`. use default business hours
					eventInput = defaultVal;
				}
			}

			if (eventInput) {
				return expandEvent(
					buildEventFromInput(eventInput),
					view.start,
					view.end
				);
			}

			return [];
		}


		/* Overlapping / Constraining
		-----------------------------------------------------------------------------------------*/

		t.isEventRangeAllowed = isEventRangeAllowed;
		t.isSelectionRangeAllowed = isSelectionRangeAllowed;
		t.isExternalDropRangeAllowed = isExternalDropRangeAllowed;


		function isEventRangeAllowed(range, event) {
			var source = event.source || {};
			var constraint = firstDefined(
				event.constraint,
				source.constraint,
				options.eventConstraint
			);
			var overlap = firstDefined(
				event.overlap,
				source.overlap,
				options.eventOverlap
			);

			range = ensureVisibleEventRange(range); // ensure a proper range with an end for isRangeAllowed

			return isRangeAllowed(range, constraint, overlap, event);
		}


		function isSelectionRangeAllowed(range) {
			return isRangeAllowed(range, options.selectConstraint, options.selectOverlap);
		}


		// when `eventProps` is defined, consider this an event.
		// `eventProps` can contain misc non-date-related info about the event.
		function isExternalDropRangeAllowed(range, eventProps) {
			var eventInput;
			var event;

			// note: very similar logic is in View's reportExternalDrop
			if (eventProps) {
				eventInput = $.extend({}, eventProps, range);
				event = expandEvent(buildEventFromInput(eventInput))[0];
			}

			if (event) {
				return isEventRangeAllowed(range, event);
			}
			else { // treat it as a selection

				range = ensureVisibleEventRange(range); // ensure a proper range with an end for isSelectionRangeAllowed

				return isSelectionRangeAllowed(range);
			}
		}


		// Returns true if the given range (caused by an event drop/resize or a selection) is allowed to exist
		// according to the constraint/overlap settings.
		// `event` is not required if checking a selection.
		function isRangeAllowed(range, constraint, overlap, event) {
			var constraintEvents;
			var anyContainment;
			var i, otherEvent;
			var otherOverlap;

			// normalize. fyi, we're normalizing in too many places :(
			range = {
				start: range.start.clone().stripZone(),
				end: range.end.clone().stripZone()
			};

			// the range must be fully contained by at least one of produced constraint events
			if (constraint != null) {

				// not treated as an event! intermediate data structure
				// TODO: use ranges in the future
				constraintEvents = constraintToEvents(constraint);

				anyContainment = false;
				for (i = 0; i < constraintEvents.length; i++) {
					if (eventContainsRange(constraintEvents[i], range)) {
						anyContainment = true;
						break;
					}
				}

				if (!anyContainment) {
					return false;
				}
			}

			for (i = 0; i < cache.length; i++) { // loop all events and detect overlap
				otherEvent = cache[i];

				// don't compare the event to itself or other related [repeating] events
				if (event && event._id === otherEvent._id) {
					continue;
				}

				// there needs to be an actual intersection before disallowing anything
				if (eventIntersectsRange(otherEvent, range)) {

					// evaluate overlap for the given range and short-circuit if necessary
					if (overlap === false) {
						return false;
					}
					else if (typeof overlap === 'function' && !overlap(otherEvent, event)) {
						return false;
					}

					// if we are computing if the given range is allowable for an event, consider the other event's
					// EventObject-specific or Source-specific `overlap` property
					if (event) {
						otherOverlap = firstDefined(
							otherEvent.overlap,
							(otherEvent.source || {}).overlap
							// we already considered the global `eventOverlap`
						);
						if (otherOverlap === false) {
							return false;
						}
						if (typeof otherOverlap === 'function' && !otherOverlap(event, otherEvent)) {
							return false;
						}
					}
				}
			}

			return true;
		}


		// Given an event input from the API, produces an array of event objects. Possible event inputs:
		// 'businessHours'
		// An event ID (number or string)
		// An object with specific start/end dates or a recurring event (like what businessHours accepts)
		function constraintToEvents(constraintInput) {

			if (constraintInput === 'businessHours') {
				return getBusinessHoursEvents();
			}

			if (typeof constraintInput === 'object') {
				return expandEvent(buildEventFromInput(constraintInput));
			}

			return clientEvents(constraintInput); // probably an ID
		}


		// Does the event's date range fully contain the given range?
		// start/end already assumed to have stripped zones :(
		function eventContainsRange(event, range) {
			var eventStart = event.start.clone().stripZone();
			var eventEnd = t.getEventEnd(event).stripZone();

			return range.start >= eventStart && range.end <= eventEnd;
		}


		// Does the event's date range intersect with the given range?
		// start/end already assumed to have stripped zones :(
		function eventIntersectsRange(event, range) {
			var eventStart = event.start.clone().stripZone();
			var eventEnd = t.getEventEnd(event).stripZone();

			return range.start < eventEnd && range.end > eventStart;
		}

	}


	// updates the "backup" properties, which are preserved in order to compute diffs later on.
	function backupEventDates(event) {
		event._allDay = event.allDay;
		event._start = event.start.clone();
		event._end = event.end ? event.end.clone() : null;
	}

	;;

	/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
	----------------------------------------------------------------------------------------------------------------------*/
	// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
	// It is responsible for managing width/height.

	var BasicView = fcViews.basic = View.extend({

		dayGrid: null, // the main subcomponent that does most of the heavy lifting

		dayNumbersVisible: false, // display day numbers on each day cell?
		weekNumbersVisible: false, // display week numbers along the side?

		weekNumberWidth: null, // width of all the week-number cells running down the side

		headRowEl: null, // the fake row element of the day-of-week header


		initialize: function() {
			this.dayGrid = new DayGrid(this);
			this.coordMap = this.dayGrid.coordMap; // the view's date-to-cell mapping is identical to the subcomponent's
		},


		// Sets the display range and computes all necessary dates
		setRange: function(range) {
			View.prototype.setRange.call(this, range); // call the super-method

			this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit); // do before setRange
			this.dayGrid.setRange(range);
		},


		// Compute the value to feed into setRange. Overrides superclass.
		computeRange: function(date) {
			var range = View.prototype.computeRange.call(this, date); // get value from the super-method

			// year and month views should be aligned with weeks. this is already done for week
			if (/year|month/.test(range.intervalUnit)) {
				range.start.startOf('week');
				range.start = this.skipHiddenDays(range.start);

				// make end-of-week if not already
				if (range.end.weekday()) {
					range.end.add(1, 'week').startOf('week');
					range.end = this.skipHiddenDays(range.end, -1, true); // exclusively move backwards
				}
			}

			return range;
		},


		// Renders the view into `this.el`, which should already be assigned
		render: function() {

			this.dayNumbersVisible = this.dayGrid.rowCnt > 1; // TODO: make grid responsible
			this.weekNumbersVisible = this.opt('weekNumbers');
			this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible;

			this.el.addClass('fc-basic-view').html(this.renderHtml());

			this.headRowEl = this.el.find('thead .fc-row');

			this.scrollerEl = this.el.find('.fc-day-grid-container');
			this.dayGrid.coordMap.containerEl = this.scrollerEl; // constrain clicks/etc to the dimensions of the scroller

			this.dayGrid.el = this.el.find('.fc-day-grid');
			this.dayGrid.render(this.hasRigidRows());
		},


		// Make subcomponents ready for cleanup
		destroy: function() {
			this.dayGrid.destroy();
			View.prototype.destroy.call(this); // call the super-method
		},


		// Builds the HTML skeleton for the view.
		// The day-grid component will render inside of a container defined by this HTML.
		renderHtml: function() {
			return '' +
				'<table>' +
					'<thead>' +
						'<tr>' +
							'<td class="' + this.widgetHeaderClass + '">' +
								this.dayGrid.headHtml() + // render the day-of-week headers
							'</td>' +
						'</tr>' +
					'</thead>' +
					'<tbody>' +
						'<tr>' +
							'<td class="' + this.widgetContentClass + '">' +
								'<div class="fc-day-grid-container">' +
									'<div class="fc-day-grid"/>' +
								'</div>' +
							'</td>' +
						'</tr>' +
					'</tbody>' +
				'</table>';
		},


		// Generates the HTML that will go before the day-of week header cells.
		// Queried by the DayGrid subcomponent when generating rows. Ordering depends on isRTL.
		headIntroHtml: function() {
			if (this.weekNumbersVisible) {
				return '' +
					'<th class="fc-week-number ' + this.widgetHeaderClass + '" ' + this.weekNumberStyleAttr() + '>' +
						'<span>' + // needed for matchCellWidths
							htmlEscape(this.opt('weekNumberTitle')) +
						'</span>' +
					'</th>';
			}
		},


		// Generates the HTML that will go before content-skeleton cells that display the day/week numbers.
		// Queried by the DayGrid subcomponent. Ordering depends on isRTL.
		numberIntroHtml: function(row) {
			if (this.weekNumbersVisible) {
				return '' +
					'<td class="fc-week-number" ' + this.weekNumberStyleAttr() + '>' +
						'<span>' + // needed for matchCellWidths
							this.calendar.calculateWeekNumber(this.dayGrid.getCell(row, 0).start) +
						'</span>' +
					'</td>';
			}
		},


		// Generates the HTML that goes before the day bg cells for each day-row.
		// Queried by the DayGrid subcomponent. Ordering depends on isRTL.
		dayIntroHtml: function() {
			if (this.weekNumbersVisible) {
				return '<td class="fc-week-number ' + this.widgetContentClass + '" ' +
					this.weekNumberStyleAttr() + '></td>';
			}
		},


		// Generates the HTML that goes before every other type of row generated by DayGrid. Ordering depends on isRTL.
		// Affects helper-skeleton and highlight-skeleton rows.
		introHtml: function() {
			if (this.weekNumbersVisible) {
				return '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + '></td>';
			}
		},


		// Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
		// The number row will only exist if either day numbers or week numbers are turned on.
		numberCellHtml: function(cell) {
			var date = cell.start;
			var classes;

			if (!this.dayNumbersVisible) { // if there are week numbers but not day numbers
				return '<td/>'; //  will create an empty space above events :(
			}

			classes = this.dayGrid.getDayClasses(date);
			classes.unshift('fc-day-number');

			return '' +
				'<td class="' + classes.join(' ') + '" data-date="' + date.format() + '">' +
					date.date() +
				'</td>';
		},


		// Generates an HTML attribute string for setting the width of the week number column, if it is known
		weekNumberStyleAttr: function() {
			if (this.weekNumberWidth !== null) {
				return 'style="width:' + this.weekNumberWidth + 'px"';
			}
			return '';
		},


		// Determines whether each row should have a constant height
		hasRigidRows: function() {
			var eventLimit = this.opt('eventLimit');
			return eventLimit && typeof eventLimit !== 'number';
		},


		/* Dimensions
		------------------------------------------------------------------------------------------------------------------*/


		// Refreshes the horizontal dimensions of the view
		updateWidth: function() {
			if (this.weekNumbersVisible) {
				// Make sure all week number cells running down the side have the same width.
				// Record the width for cells created later.
				this.weekNumberWidth = matchCellWidths(
					this.el.find('.fc-week-number')
				);
			}
		},


		// Adjusts the vertical dimensions of the view to the specified values
		setHeight: function(totalHeight, isAuto) {
			var eventLimit = this.opt('eventLimit');
			var scrollerHeight;

			// reset all heights to be natural
			unsetScroller(this.scrollerEl);
			uncompensateScroll(this.headRowEl);

			this.dayGrid.destroySegPopover(); // kill the "more" popover if displayed

			// is the event limit a constant level number?
			if (eventLimit && typeof eventLimit === 'number') {
				this.dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
			}

			scrollerHeight = this.computeScrollerHeight(totalHeight);
			this.setGridHeight(scrollerHeight, isAuto);

			// is the event limit dynamically calculated?
			if (eventLimit && typeof eventLimit !== 'number') {
				this.dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
			}

			if (!isAuto && setPotentialScroller(this.scrollerEl, scrollerHeight)) { // using scrollbars?

				compensateScroll(this.headRowEl, getScrollbarWidths(this.scrollerEl));

				// doing the scrollbar compensation might have created text overflow which created more height. redo
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scrollerEl.height(scrollerHeight);

				this.restoreScroll();
			}
		},


		// Sets the height of just the DayGrid component in this view
		setGridHeight: function(height, isAuto) {
			if (isAuto) {
				undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
			}
			else {
				distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
			}
		},


		/* Events
		------------------------------------------------------------------------------------------------------------------*/


		// Renders the given events onto the view and populates the segments array
		renderEvents: function(events) {
			this.dayGrid.renderEvents(events);

			this.updateHeight(); // must compensate for events that overflow the row
		},


		// Retrieves all segment objects that are rendered in the view
		getEventSegs: function() {
			return this.dayGrid.getEventSegs();
		},


		// Unrenders all event elements and clears internal segment data
		destroyEvents: function() {
			this.recordScroll(); // removing events will reduce height and mess with the scroll, so record beforehand
			this.dayGrid.destroyEvents();

			// we DON'T need to call updateHeight() because:
			// A) a renderEvents() call always happens after this, which will eventually call updateHeight()
			// B) in IE8, this causes a flash whenever events are rerendered
		},


		/* Dragging (for both events and external elements)
		------------------------------------------------------------------------------------------------------------------*/


		// A returned value of `true` signals that a mock "helper" event has been rendered.
		renderDrag: function(dropLocation, seg) {
			return this.dayGrid.renderDrag(dropLocation, seg);
		},


		destroyDrag: function() {
			this.dayGrid.destroyDrag();
		},


		/* Selection
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of a selection
		renderSelection: function(range) {
			this.dayGrid.renderSelection(range);
		},


		// Unrenders a visual indications of a selection
		destroySelection: function() {
			this.dayGrid.destroySelection();
		}

	});

	;;

	/* A month view with day cells running in rows (one-per-week) and columns
	----------------------------------------------------------------------------------------------------------------------*/

	setDefaults({
		fixedWeekCount: true
	});

	var MonthView = fcViews.month = BasicView.extend({

		// Produces information about what range to display
		computeRange: function(date) {
			var range = BasicView.prototype.computeRange.call(this, date); // get value from super-method
			var rowCnt;

			// ensure 6 weeks
			if (this.isFixedWeeks()) {
				rowCnt = Math.ceil(range.end.diff(range.start, 'weeks', true)); // could be partial weeks due to hiddenDays
				range.end.add(6 - rowCnt, 'weeks');
			}

			return range;
		},


		// Overrides the default BasicView behavior to have special multi-week auto-height logic
		setGridHeight: function(height, isAuto) {

			isAuto = isAuto || this.opt('weekMode') === 'variable'; // LEGACY: weekMode is deprecated

			// if auto, make the height of each row the height that it would be if there were 6 weeks
			if (isAuto) {
				height *= this.rowCnt / 6;
			}

			distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
		},


		isFixedWeeks: function() {
			var weekMode = this.opt('weekMode'); // LEGACY: weekMode is deprecated
			if (weekMode) {
				return weekMode === 'fixed'; // if any other type of weekMode, assume NOT fixed
			}

			return this.opt('fixedWeekCount');
		}

	});

	MonthView.duration = { months: 1 };

	;;

	/* A week view with simple day cells running horizontally
	----------------------------------------------------------------------------------------------------------------------*/

	fcViews.basicWeek = {
		type: 'basic',
		duration: { weeks: 1 }
	};
	;;

	/* A view with a single simple day cell
	----------------------------------------------------------------------------------------------------------------------*/

	fcViews.basicDay = {
		type: 'basic',
		duration: { days: 1 }
	};
	;;

	/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
	----------------------------------------------------------------------------------------------------------------------*/
	// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
	// Responsible for managing width/height.

	setDefaults({
		allDaySlot: true,
		allDayText: 'all-day',
		scrollTime: '06:00:00',
		slotDuration: '00:30:00',
		minTime: '00:00:00',
		maxTime: '24:00:00',
		slotEventOverlap: true
	});

	var AGENDA_ALL_DAY_EVENT_LIMIT = 5;

	fcViews.agenda = View.extend({ // AgendaView

		timeGrid: null, // the main time-grid subcomponent of this view
		dayGrid: null, // the "all-day" subcomponent. if all-day is turned off, this will be null

		axisWidth: null, // the width of the time axis running down the side

		noScrollRowEls: null, // set of fake row elements that must compensate when scrollerEl has scrollbars

		// when the time-grid isn't tall enough to occupy the given height, we render an <hr> underneath
		bottomRuleEl: null,
		bottomRuleHeight: null,


		initialize: function() {
			this.timeGrid = new TimeGrid(this);

			if (this.opt('allDaySlot')) { // should we display the "all-day" area?
				this.dayGrid = new DayGrid(this); // the all-day subcomponent of this view

				// the coordinate grid will be a combination of both subcomponents' grids
				this.coordMap = new ComboCoordMap([
					this.dayGrid.coordMap,
					this.timeGrid.coordMap
				]);
			}
			else {
				this.coordMap = this.timeGrid.coordMap;
			}
		},


		/* Rendering
		------------------------------------------------------------------------------------------------------------------*/


		// Sets the display range and computes all necessary dates
		setRange: function(range) {
			View.prototype.setRange.call(this, range); // call the super-method

			this.timeGrid.setRange(range);
			if (this.dayGrid) {
				this.dayGrid.setRange(range);
			}
		},


		// Renders the view into `this.el`, which has already been assigned
		render: function() {

			this.el.addClass('fc-agenda-view').html(this.renderHtml());

			// the element that wraps the time-grid that will probably scroll
			this.scrollerEl = this.el.find('.fc-time-grid-container');
			this.timeGrid.coordMap.containerEl = this.scrollerEl; // don't accept clicks/etc outside of this

			this.timeGrid.el = this.el.find('.fc-time-grid');
			this.timeGrid.render();

			// the <hr> that sometimes displays under the time-grid
			this.bottomRuleEl = $('<hr class="' + this.widgetHeaderClass + '"/>')
				.appendTo(this.timeGrid.el); // inject it into the time-grid

			if (this.dayGrid) {
				this.dayGrid.el = this.el.find('.fc-day-grid');
				this.dayGrid.render();

				// have the day-grid extend it's coordinate area over the <hr> dividing the two grids
				this.dayGrid.bottomCoordPadding = this.dayGrid.el.next('hr').outerHeight();
			}

			this.noScrollRowEls = this.el.find('.fc-row:not(.fc-scroller *)'); // fake rows not within the scroller
		},


		// Make subcomponents ready for cleanup
		destroy: function() {
			this.timeGrid.destroy();
			if (this.dayGrid) {
				this.dayGrid.destroy();
			}
			View.prototype.destroy.call(this); // call the super-method
		},


		// Builds the HTML skeleton for the view.
		// The day-grid and time-grid components will render inside containers defined by this HTML.
		renderHtml: function() {
			return '' +
				'<table>' +
					'<thead>' +
						'<tr>' +
							'<td class="' + this.widgetHeaderClass + '">' +
								this.timeGrid.headHtml() + // render the day-of-week headers
							'</td>' +
						'</tr>' +
					'</thead>' +
					'<tbody>' +
						'<tr>' +
							'<td class="' + this.widgetContentClass + '">' +
								(this.dayGrid ?
									'<div class="fc-day-grid"/>' +
									'<hr class="' + this.widgetHeaderClass + '"/>' :
									''
									) +
								'<div class="fc-time-grid-container">' +
									'<div class="fc-time-grid"/>' +
								'</div>' +
							'</td>' +
						'</tr>' +
					'</tbody>' +
				'</table>';
		},


		// Generates the HTML that will go before the day-of week header cells.
		// Queried by the TimeGrid subcomponent when generating rows. Ordering depends on isRTL.
		headIntroHtml: function() {
			var date;
			var weekNumber;
			var weekTitle;
			var weekText;

			if (this.opt('weekNumbers')) {
				date = this.timeGrid.getCell(0).start;
				weekNumber = this.calendar.calculateWeekNumber(date);
				weekTitle = this.opt('weekNumberTitle');

				if (this.opt('isRTL')) {
					weekText = weekNumber + weekTitle;
				}
				else {
					weekText = weekTitle + weekNumber;
				}

				return '' +
					'<th class="fc-axis fc-week-number ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + '>' +
						'<span>' + // needed for matchCellWidths
							htmlEscape(weekText) +
						'</span>' +
					'</th>';
			}
			else {
				return '<th class="fc-axis ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + '></th>';
			}
		},


		// Generates the HTML that goes before the all-day cells.
		// Queried by the DayGrid subcomponent when generating rows. Ordering depends on isRTL.
		dayIntroHtml: function() {
			return '' +
				'<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + '>' +
					'<span>' + // needed for matchCellWidths
						(this.opt('allDayHtml') || htmlEscape(this.opt('allDayText'))) +
					'</span>' +
				'</td>';
		},


		// Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
		slotBgIntroHtml: function() {
			return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + '></td>';
		},


		// Generates the HTML that goes before all other types of cells.
		// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
		// Queried by the TimeGrid and DayGrid subcomponents when generating rows. Ordering depends on isRTL.
		introHtml: function() {
			return '<td class="fc-axis" ' + this.axisStyleAttr() + '></td>';
		},


		// Generates an HTML attribute string for setting the width of the axis, if it is known
		axisStyleAttr: function() {
			if (this.axisWidth !== null) {
				 return 'style="width:' + this.axisWidth + 'px"';
			}
			return '';
		},


		/* Dimensions
		------------------------------------------------------------------------------------------------------------------*/


		updateSize: function(isResize) {
			if (isResize) {
				this.timeGrid.resize();
			}
			View.prototype.updateSize.call(this, isResize);
		},


		// Refreshes the horizontal dimensions of the view
		updateWidth: function() {
			// make all axis cells line up, and record the width so newly created axis cells will have it
			this.axisWidth = matchCellWidths(this.el.find('.fc-axis'));
		},


		// Adjusts the vertical dimensions of the view to the specified values
		setHeight: function(totalHeight, isAuto) {
			var eventLimit;
			var scrollerHeight;

			if (this.bottomRuleHeight === null) {
				// calculate the height of the rule the very first time
				this.bottomRuleHeight = this.bottomRuleEl.outerHeight();
			}
			this.bottomRuleEl.hide(); // .show() will be called later if this <hr> is necessary

			// reset all dimensions back to the original state
			this.scrollerEl.css('overflow', '');
			unsetScroller(this.scrollerEl);
			uncompensateScroll(this.noScrollRowEls);

			// limit number of events in the all-day area
			if (this.dayGrid) {
				this.dayGrid.destroySegPopover(); // kill the "more" popover if displayed

				eventLimit = this.opt('eventLimit');
				if (eventLimit && typeof eventLimit !== 'number') {
					eventLimit = AGENDA_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
				}
				if (eventLimit) {
					this.dayGrid.limitRows(eventLimit);
				}
			}

			if (!isAuto) { // should we force dimensions of the scroll container, or let the contents be natural height?

				scrollerHeight = this.computeScrollerHeight(totalHeight);
				if (setPotentialScroller(this.scrollerEl, scrollerHeight)) { // using scrollbars?

					// make the all-day and header rows lines up
					compensateScroll(this.noScrollRowEls, getScrollbarWidths(this.scrollerEl));

					// the scrollbar compensation might have changed text flow, which might affect height, so recalculate
					// and reapply the desired height to the scroller.
					scrollerHeight = this.computeScrollerHeight(totalHeight);
					this.scrollerEl.height(scrollerHeight);

					this.restoreScroll();
				}
				else { // no scrollbars
					// still, force a height and display the bottom rule (marks the end of day)
					this.scrollerEl.height(scrollerHeight).css('overflow', 'hidden'); // in case <hr> goes outside
					this.bottomRuleEl.show();
				}
			}
		},


		// Sets the scroll value of the scroller to the initial pre-configured state prior to allowing the user to change it
		initializeScroll: function() {
			var _this = this;
			var scrollTime = moment.duration(this.opt('scrollTime'));
			var top = this.timeGrid.computeTimeTop(scrollTime);

			// zoom can give weird floating-point values. rather scroll a little bit further
			top = Math.ceil(top);

			if (top) {
				top++; // to overcome top border that slots beyond the first have. looks better
			}

			function scroll() {
				_this.scrollerEl.scrollTop(top);
			}

			scroll();
			setTimeout(scroll, 0); // overrides any previous scroll state made by the browser
		},


		/* Events
		------------------------------------------------------------------------------------------------------------------*/


		// Renders events onto the view and populates the View's segment array
		renderEvents: function(events) {
			var dayEvents = [];
			var timedEvents = [];
			var daySegs = [];
			var timedSegs;
			var i;

			// separate the events into all-day and timed
			for (i = 0; i < events.length; i++) {
				if (events[i].allDay) {
					dayEvents.push(events[i]);
				}
				else {
					timedEvents.push(events[i]);
				}
			}

			// render the events in the subcomponents
			timedSegs = this.timeGrid.renderEvents(timedEvents);
			if (this.dayGrid) {
				daySegs = this.dayGrid.renderEvents(dayEvents);
			}

			// the all-day area is flexible and might have a lot of events, so shift the height
			this.updateHeight();
		},


		// Retrieves all segment objects that are rendered in the view
		getEventSegs: function() {
			return this.timeGrid.getEventSegs().concat(
				this.dayGrid ? this.dayGrid.getEventSegs() : []
			);
		},


		// Unrenders all event elements and clears internal segment data
		destroyEvents: function() {

			// if destroyEvents is being called as part of an event rerender, renderEvents will be called shortly
			// after, so remember what the scroll value was so we can restore it.
			this.recordScroll();

			// destroy the events in the subcomponents
			this.timeGrid.destroyEvents();
			if (this.dayGrid) {
				this.dayGrid.destroyEvents();
			}

			// we DON'T need to call updateHeight() because:
			// A) a renderEvents() call always happens after this, which will eventually call updateHeight()
			// B) in IE8, this causes a flash whenever events are rerendered
		},


		/* Dragging (for events and external elements)
		------------------------------------------------------------------------------------------------------------------*/


		// A returned value of `true` signals that a mock "helper" event has been rendered.
		renderDrag: function(dropLocation, seg) {
			if (dropLocation.start.hasTime()) {
				return this.timeGrid.renderDrag(dropLocation, seg);
			}
			else if (this.dayGrid) {
				return this.dayGrid.renderDrag(dropLocation, seg);
			}
		},


		destroyDrag: function() {
			this.timeGrid.destroyDrag();
			if (this.dayGrid) {
				this.dayGrid.destroyDrag();
			}
		},


		/* Selection
		------------------------------------------------------------------------------------------------------------------*/


		// Renders a visual indication of a selection
		renderSelection: function(range) {
			if (range.start.hasTime() || range.end.hasTime()) {
				this.timeGrid.renderSelection(range);
			}
			else if (this.dayGrid) {
				this.dayGrid.renderSelection(range);
			}
		},


		// Unrenders a visual indications of a selection
		destroySelection: function() {
			this.timeGrid.destroySelection();
			if (this.dayGrid) {
				this.dayGrid.destroySelection();
			}
		}

	});

	;;

	/* A week view with an all-day cell area at the top, and a time grid below
	----------------------------------------------------------------------------------------------------------------------*/

	fcViews.agendaWeek = {
		type: 'agenda',
		duration: { weeks: 1 }
	};
	;;

	/* A day view with an all-day cell area at the top, and a time grid below
	----------------------------------------------------------------------------------------------------------------------*/

	fcViews.agendaDay = {
		type: 'agenda',
		duration: { days: 1 }
	};
	;;

	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * FullCalendar v2.2.7 Google Calendar Plugin
	 * Docs & License: http://arshaw.com/fullcalendar/
	 * (c) 2013 Adam Shaw
	 */
	 
	(function(factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(23) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		else {
			factory(jQuery);
		}
	})(function($) {


	var API_BASE = 'https://www.googleapis.com/calendar/v3/calendars';
	var fc = $.fullCalendar;
	var applyAll = fc.applyAll;


	fc.sourceNormalizers.push(function(sourceOptions) {
		var googleCalendarId = sourceOptions.googleCalendarId;
		var url = sourceOptions.url;
		var match;

		// if the Google Calendar ID hasn't been explicitly defined
		if (!googleCalendarId && url) {

			// detect if the ID was specified as a single string.
			// will match calendars like "asdf1234@calendar.google.com" in addition to person email calendars.
			if ((match = /^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(url))) {
				googleCalendarId = url;
			}
			// try to scrape it out of a V1 or V3 API feed URL
			else if (
				(match = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(url)) ||
				(match = /^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(url))
			) {
				googleCalendarId = decodeURIComponent(match[1]);
			}

			if (googleCalendarId) {
				sourceOptions.googleCalendarId = googleCalendarId;
			}
		}


		if (googleCalendarId) { // is this a Google Calendar?

			// make each Google Calendar source uneditable by default
			if (sourceOptions.editable == null) {
				sourceOptions.editable = false;
			}

			// We want removeEventSource to work, but it won't know about the googleCalendarId primitive.
			// Shoehorn it into the url, which will function as the unique primitive. Won't cause side effects.
			// This hack is obsolete since 2.2.3, but keep it so this plugin file is compatible with old versions.
			sourceOptions.url = googleCalendarId;
		}
	});


	fc.sourceFetchers.push(function(sourceOptions, start, end, timezone) {
		if (sourceOptions.googleCalendarId) {
			return transformOptions(sourceOptions, start, end, timezone, this); // `this` is the calendar
		}
	});


	function transformOptions(sourceOptions, start, end, timezone, calendar) {
		var url = API_BASE + '/' + encodeURIComponent(sourceOptions.googleCalendarId) + '/events?callback=?'; // jsonp
		var apiKey = sourceOptions.googleCalendarApiKey || calendar.options.googleCalendarApiKey;
		var success = sourceOptions.success;
		var data;
		var timezoneArg; // populated when a specific timezone. escaped to Google's liking

		function reportError(message, apiErrorObjs) {
			var errorObjs = apiErrorObjs || [ { message: message } ]; // to be passed into error handlers
			var consoleObj = window.console;
			var consoleWarnFunc = consoleObj ? (consoleObj.warn || consoleObj.log) : null;

			// call error handlers
			(sourceOptions.googleCalendarError || $.noop).apply(calendar, errorObjs);
			(calendar.options.googleCalendarError || $.noop).apply(calendar, errorObjs);

			// print error to debug console
			if (consoleWarnFunc) {
				consoleWarnFunc.apply(consoleObj, [ message ].concat(apiErrorObjs || []));
			}
		}

		if (!apiKey) {
			reportError("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/");
			return {}; // an empty source to use instead. won't fetch anything.
		}

		// The API expects an ISO8601 datetime with a time and timezone part.
		// Since the calendar's timezone offset isn't always known, request the date in UTC and pad it by a day on each
		// side, guaranteeing we will receive all events in the desired range, albeit a superset.
		// .utc() will set a zone and give it a 00:00:00 time.
		if (!start.hasZone()) {
			start = start.clone().utc().add(-1, 'day');
		}
		if (!end.hasZone()) {
			end = end.clone().utc().add(1, 'day');
		}

		// when sending timezone names to Google, only accepts underscores, not spaces
		if (timezone && timezone != 'local') {
			timezoneArg = timezone.replace(' ', '_');
		}

		data = $.extend({}, sourceOptions.data || {}, {
			key: apiKey,
			timeMin: start.format(),
			timeMax: end.format(),
			timeZone: timezoneArg,
			singleEvents: true,
			maxResults: 9999
		});

		return $.extend({}, sourceOptions, {
			googleCalendarId: null, // prevents source-normalizing from happening again
			url: url,
			data: data,
			startParam: false, // `false` omits this parameter. we already included it above
			endParam: false, // same
			timezoneParam: false, // same
			success: function(data) {
				var events = [];
				var successArgs;
				var successRes;

				if (data.error) {
					reportError('Google Calendar API: ' + data.error.message, data.error.errors);
				}
				else if (data.items) {
					$.each(data.items, function(i, entry) {
						var url = entry.htmlLink;

						// make the URLs for each event show times in the correct timezone
						if (timezoneArg) {
							url = injectQsComponent(url, 'ctz=' + timezoneArg);
						}

						events.push({
							id: entry.id,
							title: entry.summary,
							start: entry.start.dateTime || entry.start.date, // try timed. will fall back to all-day
							end: entry.end.dateTime || entry.end.date, // same
							url: url,
							location: entry.location,
							description: entry.description
						});
					});

					// call the success handler(s) and allow it to return a new events array
					successArgs = [ events ].concat(Array.prototype.slice.call(arguments, 1)); // forward other jq args
					successRes = applyAll(success, this, successArgs);
					if ($.isArray(successRes)) {
						return successRes;
					}
				}

				return events;
			}
		});
	}


	// Injects a string like "arg=value" into the querystring of a URL
	function injectQsComponent(url, component) {
		// inject it after the querystring but before the fragment
		return url.replace(/(\?.*?)?(#|$)/, function(whole, qs, hash) {
			return (qs ? qs + '&' : '?') + component + hash;
		});
	}


	});


/***/ },
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/fullcalendar/styles/fullcalendar.css", function() {
			var newContent = require("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/fullcalendar/styles/fullcalendar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	exports.push([module.id, ".panel.fullcalendar {\n  background-color: transparent;\n  border-radius: 0;\n  border-width: 0;\n  margin-bottom: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.panel.fullcalendar .fc-view > table > thead > tr > td.fc-widget-header {\n  border-width: 0;\n}\n.panel.fullcalendar .fc-toolbar {\n  margin: 0;\n  padding: 15px;\n  border-bottom: 1px solid #dbdfe3;\n}\n.panel.fullcalendar .fc-widget-content {\n  border-left-width: 0;\n}\n.fc-popover {\n  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  border-radius: 2px;\n  border: 1px solid #dbdfe3;\n}\n.fc-popover .fc-header {\n  background-color: transparent !important;\n  padding: 6px 12px;\n}\n.fc th.fc-day-header.fc-widget-header {\n  padding: 8px 0;\n  background-color: #fdfdfe;\n  text-transform: uppercase;\n}\n.fc th.fc-axis.fc-widget-header {\n  background-color: #fdfdfe;\n}\n.fc-row .fc-bg .fc-other-month {\n  background-color: #f5f8fa;\n}\n.fc-event {\n  padding: 4px 10px;\n  display: block;\n  font-size: 12px;\n  border-radius: 2px;\n  background-color: #f9fafc;\n  color: #364c63;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.fc-event .fc-content {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fc-event:after {\n  content: '';\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  bottom: -1px;\n  width: 5px;\n  background-color: #2196f3;\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.fc-event.fc-not-start:after {\n  display: none;\n}\n.fc-event:hover,\n.fc-event:active,\n.fc-event:focus {\n  color: #243342;\n}\n.fc-event.fc-event-danger:after {\n  background-color: #f44336;\n}\n.fc-event.fc-event-warning:after {\n  background-color: #fdd835;\n}\n.fc-event.fc-event-success:after {\n  background-color: #4caf50;\n}\n.fc-row.fc-rigid {\n  overflow: visible;\n}\n", ""]);

/***/ },
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/bower_components/fullcalendar/dist/fullcalendar.css", function() {
			var newContent = require("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/bower_components/fullcalendar/dist/fullcalendar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	exports.push([module.id, "/*!\n * FullCalendar v2.2.7 Stylesheet\n * Docs & License: http://arshaw.com/fullcalendar/\n * (c) 2013 Adam Shaw\n */\n\n\n.fc {\n\tdirection: ltr;\n\ttext-align: left;\n}\n\n.fc-rtl {\n\ttext-align: right;\n}\n\nbody .fc { /* extra precedence to overcome jqui */\n\tfont-size: 1em;\n}\n\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed hr,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-popover {\n\tborder-color: #ddd;\n}\n\n.fc-unthemed .fc-popover {\n\tbackground-color: #fff;\n}\n\n.fc-unthemed hr,\n.fc-unthemed .fc-popover .fc-header {\n\tbackground: #eee;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n\tcolor: #666;\n}\n\n.fc-unthemed .fc-today {\n\tbackground: #fcf8e3;\n}\n\n.fc-highlight { /* when user is selecting cells */\n\tbackground: #bce8f1;\n\topacity: .3;\n\tfilter: alpha(opacity=30); /* for IE */\n}\n\n.fc-bgevent { /* default look for background events */\n\tbackground: rgb(143, 223, 130);\n\topacity: .3;\n\tfilter: alpha(opacity=30); /* for IE */\n}\n\n.fc-nonbusiness { /* default look for non-business-hours areas */\n\t/* will inherit .fc-bgevent's styles */\n\tbackground: #ccc;\n}\n\n\n/* Icons (inline elements with styled text that mock arrow icons)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-icon {\n\tdisplay: inline-block;\n\tfont-size: 2em;\n\tline-height: .5em;\n\theight: .5em; /* will make the total height 1em */\n\tfont-family: \"Courier New\", Courier, monospace;\n}\n\n.fc-icon-left-single-arrow:after {\n\tcontent: \"\\02039\";\n\tfont-weight: bold;\n}\n\n.fc-icon-right-single-arrow:after {\n\tcontent: \"\\0203A\";\n\tfont-weight: bold;\n}\n\n.fc-icon-left-double-arrow:after {\n\tcontent: \"\\000AB\";\n}\n\n.fc-icon-right-double-arrow:after {\n\tcontent: \"\\000BB\";\n}\n\n.fc-icon-x:after {\n\tcontent: \"\\000D7\";\n}\n\n\n/* Buttons (styled <button> tags, normalized to work cross-browser)\n--------------------------------------------------------------------------------------------------*/\n\n.fc button {\n\t/* force height to include the border and padding */\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\n\t/* dimensions */\n\tmargin: 0;\n\theight: 2.1em;\n\tpadding: 0 .6em;\n\n\t/* text & cursor */\n\tfont-size: 1em; /* normalize */\n\twhite-space: nowrap;\n\tcursor: pointer;\n}\n\n/* Firefox has an annoying inner border */\n.fc button::-moz-focus-inner { margin: 0; padding: 0; }\n\t\n.fc-state-default { /* non-theme */\n\tborder: 1px solid;\n}\n\n.fc-state-default.fc-corner-left { /* non-theme */\n\tborder-top-left-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n}\n\n.fc-state-default.fc-corner-right { /* non-theme */\n\tborder-top-right-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n\n/* icons in buttons */\n\n.fc button .fc-icon { /* non-theme */\n\tposition: relative;\n\ttop: .05em; /* seems to be a good adjustment across browsers */\n\tmargin: 0 .1em;\n}\n\t\n/*\n  button states\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\n*/\n\n.fc-state-default {\n\tbackground-color: #f5f5f5;\n\tbackground-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));\n\tbackground-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\n\tbackground-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\n\tbackground-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\n\tbackground-repeat: repeat-x;\n\tborder-color: #e6e6e6 #e6e6e6 #bfbfbf;\n\tborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n\tcolor: #333;\n\ttext-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n\tbox-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n\tcolor: #333333;\n\tbackground-color: #e6e6e6;\n}\n\n.fc-state-hover {\n\tcolor: #333333;\n\ttext-decoration: none;\n\tbackground-position: 0 -15px;\n\t-webkit-transition: background-position 0.1s linear;\n\t   -moz-transition: background-position 0.1s linear;\n\t     -o-transition: background-position 0.1s linear;\n\t        transition: background-position 0.1s linear;\n}\n\n.fc-state-down,\n.fc-state-active {\n\tbackground-color: #cccccc;\n\tbackground-image: none;\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-disabled {\n\tcursor: default;\n\tbackground-image: none;\n\topacity: 0.65;\n\tfilter: alpha(opacity=65);\n\tbox-shadow: none;\n}\n\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n\n.fc-button-group {\n\tdisplay: inline-block;\n}\n\n/*\nevery button that is not first in a button group should scootch over one pixel and cover the\nprevious button's border...\n*/\n\n.fc .fc-button-group > * { /* extra precedence b/c buttons have margin set to zero */\n\tfloat: left;\n\tmargin: 0 0 0 -1px;\n}\n\n.fc .fc-button-group > :first-child { /* same */\n\tmargin-left: 0;\n}\n\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n\n.fc-popover {\n\tposition: absolute;\n\tbox-shadow: 0 2px 6px rgba(0,0,0,.15);\n}\n\n.fc-popover .fc-header {\n\tpadding: 2px 4px;\n}\n\n.fc-popover .fc-header .fc-title {\n\tmargin: 0 2px;\n}\n\n.fc-popover .fc-header .fc-close {\n\tcursor: pointer;\n}\n\n.fc-ltr .fc-popover .fc-header .fc-title,\n.fc-rtl .fc-popover .fc-header .fc-close {\n\tfloat: left;\n}\n\n.fc-rtl .fc-popover .fc-header .fc-title,\n.fc-ltr .fc-popover .fc-header .fc-close {\n\tfloat: right;\n}\n\n/* unthemed */\n\n.fc-unthemed .fc-popover {\n\tborder-width: 1px;\n\tborder-style: solid;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n\tfont-size: 25px;\n\tmargin-top: 4px;\n}\n\n/* jqui themed */\n\n.fc-popover > .ui-widget-header + .ui-widget-content {\n\tborder-top: 0; /* where they meet, let the header have the border */\n}\n\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n\n.fc hr {\n\theight: 0;\n\tmargin: 0;\n\tpadding: 0 0 2px; /* height is unreliable across browsers, so use padding */\n\tborder-style: solid;\n\tborder-width: 1px 0;\n}\n\n.fc-clear {\n\tclear: both;\n}\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-helper-skeleton {\n\t/* these element should always cling to top-left/right corners */\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n.fc-bg {\n\tbottom: 0; /* strech bg to bottom edge */\n}\n\n.fc-bg table {\n\theight: 100%; /* strech bg to bottom edge */\n}\n\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n\n.fc table {\n\twidth: 100%;\n\ttable-layout: fixed;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\tfont-size: 1em; /* normalize cross-browser */\n}\n\n.fc th {\n\ttext-align: center;\n}\n\n.fc th,\n.fc td {\n\tborder-style: solid;\n\tborder-width: 1px;\n\tpadding: 0;\n\tvertical-align: top;\n}\n\n.fc td.fc-today {\n\tborder-style: double; /* overcome neighboring borders */\n}\n\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-row { /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */\n\t/* no visible border by default. but make available if need be (scrollbar width compensation) */\n\tborder-style: solid;\n\tborder-width: 0;\n}\n\n.fc-row table {\n\t/* don't put left/right border on anything within a fake row.\n\t   the outer tbody will worry about this */\n\tborder-left: 0 hidden transparent;\n\tborder-right: 0 hidden transparent;\n\n\t/* no bottom borders on rows */\n\tborder-bottom: 0 hidden transparent; \n}\n\n.fc-row:first-child table {\n\tborder-top: 0 hidden transparent; /* no top border on first row */\n}\n\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-row {\n\tposition: relative;\n}\n\n.fc-row .fc-bg {\n\tz-index: 1;\n}\n\n/* highlighting cells & background event skeleton */\n\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n\tbottom: 0; /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n\theight: 100%; /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n\tborder-color: transparent;\n}\n\n.fc-row .fc-bgevent-skeleton {\n\tz-index: 2;\n\n}\n\n.fc-row .fc-highlight-skeleton {\n\tz-index: 3;\n}\n\n/*\nrow content (which contains day/week numbers and events) as well as \"helper\" (which contains\ntemporary rendered events).\n*/\n\n.fc-row .fc-content-skeleton {\n\tposition: relative;\n\tz-index: 4;\n\tpadding-bottom: 2px; /* matches the space above the events */\n}\n\n.fc-row .fc-helper-skeleton {\n\tz-index: 5;\n}\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-helper-skeleton td {\n\t/* see-through to the background below */\n\tbackground: none; /* in case <td>s are globally styled */\n\tborder-color: transparent;\n\n\t/* don't put a border between events and/or the day number */\n\tborder-bottom: 0;\n}\n\n.fc-row .fc-content-skeleton tbody td, /* cells with events inside (so NOT the day number cell) */\n.fc-row .fc-helper-skeleton tbody td {\n\t/* don't put a border between event cells */\n\tborder-top: 0;\n}\n\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n\n.fc-scroller { /* this class goes on elements for guaranteed vertical scrollbars */\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n}\n\n.fc-scroller > * { /* we expect an immediate inner element */\n\tposition: relative; /* re-scope all positions */\n\twidth: 100%; /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n\toverflow: hidden; /* don't let negative margins or absolute positioning create further scroll */\n}\n\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n\n.fc-event {\n\tposition: relative; /* for resize handle and other inner positioning */\n\tdisplay: block; /* make the <a> tag block */\n\tfont-size: .85em;\n\tline-height: 1.3;\n\tborder-radius: 3px;\n\tborder: 1px solid #3a87ad; /* default BORDER color */\n\tbackground-color: #3a87ad; /* default BACKGROUND color */\n\tfont-weight: normal; /* undo jqui's ui-widget-header bold */\n}\n\n/* overpower some of bootstrap's and jqui's styles on <a> tags */\n.fc-event,\n.fc-event:hover,\n.ui-widget .fc-event {\n\tcolor: #fff; /* default TEXT color */\n\ttext-decoration: none; /* if <a> has an href */\n}\n\n.fc-event[href],\n.fc-event.fc-draggable {\n\tcursor: pointer; /* give events with links and draggable events a hand mouse pointer */\n}\n\n.fc-not-allowed, /* causes a \"warning\" cursor. applied on body */\n.fc-not-allowed .fc-event { /* to override an event's custom cursor */\n\tcursor: not-allowed;\n}\n\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-day-grid-event {\n\tmargin: 1px 2px 0; /* spacing between events and edges */\n\tpadding: 0 1px;\n}\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n\n.fc-ltr .fc-day-grid-event.fc-not-start,\n.fc-rtl .fc-day-grid-event.fc-not-end {\n\tmargin-left: 0;\n\tborder-left-width: 0;\n\tpadding-left: 1px; /* replace the border with padding */\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n}\n\n.fc-ltr .fc-day-grid-event.fc-not-end,\n.fc-rtl .fc-day-grid-event.fc-not-start {\n\tmargin-right: 0;\n\tborder-right-width: 0;\n\tpadding-right: 1px; /* replace the border with padding */\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n.fc-day-grid-event > .fc-content { /* force events to be one-line tall */\n\twhite-space: nowrap;\n\toverflow: hidden;\n}\n\n.fc-day-grid-event .fc-time {\n\tfont-weight: bold;\n}\n\n/* resize handle (outside of fc-content, so can go outside of bounds) */\n\n.fc-day-grid-event .fc-resizer {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 7px;\n}\n\n.fc-ltr .fc-day-grid-event .fc-resizer {\n\tright: -3px;\n\tcursor: e-resize;\n}\n\n.fc-rtl .fc-day-grid-event .fc-resizer {\n\tleft: -3px;\n\tcursor: w-resize;\n}\n\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n\n/* \"more\" link that represents hidden events */\n\na.fc-more {\n\tmargin: 1px 3px;\n\tfont-size: .85em;\n\tcursor: pointer;\n\ttext-decoration: none;\n}\n\na.fc-more:hover {\n\ttext-decoration: underline;\n}\n\n.fc-limited { /* rows and cells that are hidden because of a \"more\" link */\n\tdisplay: none;\n}\n\n/* popover that appears when \"more\" link is clicked */\n\n.fc-day-grid .fc-row {\n\tz-index: 1; /* make the \"more\" popover one higher than this */\n}\n\n.fc-more-popover {\n\tz-index: 2;\n\twidth: 220px;\n}\n\n.fc-more-popover .fc-event-container {\n\tpadding: 10px;\n}\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n\n.fc-toolbar {\n\ttext-align: center;\n\tmargin-bottom: 1em;\n}\n\n.fc-toolbar .fc-left {\n\tfloat: left;\n}\n\n.fc-toolbar .fc-right {\n\tfloat: right;\n}\n\n.fc-toolbar .fc-center {\n\tdisplay: inline-block;\n}\n\n/* the things within each left/right/center section */\n.fc .fc-toolbar > * > * { /* extra precedence to override button border margins */\n\tfloat: left;\n\tmargin-left: .75em;\n}\n\n/* the first thing within each left/center/right section */\n.fc .fc-toolbar > * > :first-child { /* extra precedence to override button border margins */\n\tmargin-left: 0;\n}\n\t\n/* title text */\n\n.fc-toolbar h2 {\n\tmargin: 0;\n}\n\n/* button layering (for border precedence) */\n\n.fc-toolbar button {\n\tposition: relative;\n}\n\n.fc-toolbar .fc-state-hover,\n.fc-toolbar .ui-state-hover {\n\tz-index: 2;\n}\n\t\n.fc-toolbar .fc-state-down {\n\tz-index: 3;\n}\n\n.fc-toolbar .fc-state-active,\n.fc-toolbar .ui-state-active {\n\tz-index: 4;\n}\n\n.fc-toolbar button:focus {\n\tz-index: 5;\n}\n\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n\t-webkit-box-sizing: content-box;\n\t   -moz-box-sizing: content-box;\n\t        box-sizing: content-box;\n}\n\n.fc-view, /* scope positioning and z-index's for everything within the view */\n.fc-view > table { /* so dragged elements can be above the view's main element */\n\tposition: relative;\n\tz-index: 1;\n}\n\n/* BasicView\n--------------------------------------------------------------------------------------------------*/\n\n/* day row structure */\n\n.fc-basicWeek-view .fc-content-skeleton,\n.fc-basicDay-view .fc-content-skeleton {\n\t/* we are sure there are no day numbers in these views, so... */\n\tpadding-top: 1px; /* add a pixel to make sure there are 2px padding above events */\n\tpadding-bottom: 1em; /* ensure a space at bottom of cell for user selecting/clicking */\n}\n\n.fc-basic-view tbody .fc-row {\n\tmin-height: 4em; /* ensure that all rows are at least this tall */\n}\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n\n.fc-row.fc-rigid {\n\toverflow: hidden;\n}\n\n.fc-row.fc-rigid .fc-content-skeleton {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n/* week and day number styling */\n\n.fc-basic-view .fc-week-number,\n.fc-basic-view .fc-day-number {\n\tpadding: 0 2px;\n}\n\n.fc-basic-view td.fc-week-number span,\n.fc-basic-view td.fc-day-number {\n\tpadding-top: 2px;\n\tpadding-bottom: 2px;\n}\n\n.fc-basic-view .fc-week-number {\n\ttext-align: center;\n}\n\n.fc-basic-view .fc-week-number span {\n\t/* work around the way we do column resizing and ensure a minimum width */\n\tdisplay: inline-block;\n\tmin-width: 1.25em;\n}\n\n.fc-ltr .fc-basic-view .fc-day-number {\n\ttext-align: right;\n}\n\n.fc-rtl .fc-basic-view .fc-day-number {\n\ttext-align: left;\n}\n\n.fc-day-number.fc-other-month {\n\topacity: 0.3;\n\tfilter: alpha(opacity=30); /* for IE */\n\t/* opacity with small font can sometimes look too faded\n\t   might want to set the 'color' property instead\n\t   making day-numbers bold also fixes the problem */\n}\n\n/* AgendaView all-day area\n--------------------------------------------------------------------------------------------------*/\n\n.fc-agenda-view .fc-day-grid {\n\tposition: relative;\n\tz-index: 2; /* so the \"more..\" popover will be over the time grid */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row {\n\tmin-height: 3em; /* all-day section will never get shorter than this */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n\tpadding-top: 1px; /* add a pixel to make sure there are 2px padding above events */\n\tpadding-bottom: 1em; /* give space underneath events for clicking/selecting days */\n}\n\n\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-axis { /* .fc to overcome default cell styles */\n\tvertical-align: middle;\n\tpadding: 0 4px;\n\twhite-space: nowrap;\n}\n\n.fc-ltr .fc-axis {\n\ttext-align: right;\n}\n\n.fc-rtl .fc-axis {\n\ttext-align: left;\n}\n\n.ui-widget td.fc-axis {\n\tfont-weight: normal; /* overcome jqui theme making it bold */\n}\n\n\n/* TimeGrid Structure\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid-container, /* so scroll container's z-index is below all-day */\n.fc-time-grid { /* so slats/bg/content/etc positions get scoped within here */\n\tposition: relative;\n\tz-index: 1;\n}\n\n.fc-time-grid {\n\tmin-height: 100%; /* so if height setting is 'auto', .fc-bg stretches to fill height */\n}\n\n.fc-time-grid table { /* don't put outer borders on slats/bg/content/etc */\n\tborder: 0 hidden transparent;\n}\n\n.fc-time-grid > .fc-bg {\n\tz-index: 1;\n}\n\n.fc-time-grid .fc-slats,\n.fc-time-grid > hr { /* the <hr> AgendaView injects when grid is shorter than scroller */\n\tposition: relative;\n\tz-index: 2;\n}\n\n.fc-time-grid .fc-bgevent-skeleton,\n.fc-time-grid .fc-content-skeleton {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n.fc-time-grid .fc-bgevent-skeleton {\n\tz-index: 3;\n}\n\n.fc-time-grid .fc-highlight-skeleton {\n\tz-index: 4;\n}\n\n.fc-time-grid .fc-content-skeleton {\n\tz-index: 5;\n}\n\n.fc-time-grid .fc-helper-skeleton {\n\tz-index: 6;\n}\n\n\n/* TimeGrid Slats (lines that run horizontally)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-slats td {\n\theight: 1.5em;\n\tborder-bottom: 0; /* each cell is responsible for its top border */\n}\n\n.fc-slats .fc-minor td {\n\tborder-top-style: dotted;\n}\n\n.fc-slats .ui-widget-content { /* for jqui theme */\n\tbackground: none; /* see through to fc-bg */\n}\n\n\n/* TimeGrid Highlighting Slots\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-highlight-container { /* a div within a cell within the fc-highlight-skeleton */\n\tposition: relative; /* scopes the left/right of the fc-highlight to be in the column */\n}\n\n.fc-time-grid .fc-highlight {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\t/* top and bottom will be in by JS */\n}\n\n\n/* TimeGrid Event Containment\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-event-container, /* a div within a cell within the fc-content-skeleton */\n.fc-time-grid .fc-bgevent-container { /* a div within a cell within the fc-bgevent-skeleton */\n\tposition: relative;\n}\n\n.fc-ltr .fc-time-grid .fc-event-container { /* space on the sides of events for LTR (default) */\n\tmargin: 0 2.5% 0 2px;\n}\n\n.fc-rtl .fc-time-grid .fc-event-container { /* space on the sides of events for RTL */\n\tmargin: 0 2px 0 2.5%;\n}\n\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n\tposition: absolute;\n\tz-index: 1; /* scope inner z-index's */\n}\n\n.fc-time-grid .fc-bgevent {\n\t/* background events always span full width */\n\tleft: 0;\n\tright: 0;\n}\n\n\n/* TimeGrid Event Styling\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-time-grid-event.fc-not-start { /* events that are continuing from another day */\n\t/* replace space made by the top border with padding */\n\tborder-top-width: 0;\n\tpadding-top: 1px;\n\n\t/* remove top rounded corners */\n\tborder-top-left-radius: 0;\n\tborder-top-right-radius: 0;\n}\n\n.fc-time-grid-event.fc-not-end {\n\t/* replace space made by the top border with padding */\n\tborder-bottom-width: 0;\n\tpadding-bottom: 1px;\n\n\t/* remove bottom rounded corners */\n\tborder-bottom-left-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n.fc-time-grid-event {\n\toverflow: hidden; /* don't let the bg flow over rounded corners */\n}\n\n.fc-time-grid-event > .fc-content { /* contains the time and title, but no bg and resizer */\n\tposition: relative;\n\tz-index: 2; /* above the bg */\n}\n\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n\tpadding: 0 1px;\n}\n\n.fc-time-grid-event .fc-time {\n\tfont-size: .85em;\n\twhite-space: nowrap;\n}\n\n.fc-time-grid-event .fc-bg {\n\tz-index: 1;\n\tbackground: #fff;\n\topacity: .25;\n\tfilter: alpha(opacity=25); /* for IE */\n}\n\n/* short mode, where time and title are on the same line */\n\n.fc-time-grid-event.fc-short .fc-content {\n\t/* don't wrap to second line (now that contents will be inline) */\n\twhite-space: nowrap;\n}\n\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n\t/* put the time and title on the same line */\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n.fc-time-grid-event.fc-short .fc-time span {\n\tdisplay: none; /* don't display the full time text... */\n}\n\n.fc-time-grid-event.fc-short .fc-time:before {\n\tcontent: attr(data-start); /* ...instead, display only the start time */\n}\n\n.fc-time-grid-event.fc-short .fc-time:after {\n\tcontent: \"\\000A0-\\000A0\"; /* seperate with a dash, wrapped in nbsp's */\n}\n\n.fc-time-grid-event.fc-short .fc-title {\n\tfont-size: .85em; /* make the title text the same size as the time */\n\tpadding: 0; /* undo padding from above */\n}\n\n/* resizer */\n\n.fc-time-grid-event .fc-resizer {\n\tposition: absolute;\n\tz-index: 3; /* above content */\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\theight: 8px;\n\toverflow: hidden;\n\tline-height: 8px;\n\tfont-size: 11px;\n\tfont-family: monospace;\n\ttext-align: center;\n\tcursor: s-resize;\n}\n\n.fc-time-grid-event .fc-resizer:after {\n\tcontent: \"=\";\n}\n", ""]);

/***/ },
/* 139 */,
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {//! moment.js
	//! version : 2.9.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	(function (undefined) {
	    /************************************
	        Constants
	    ************************************/

	    var moment,
	        VERSION = '2.9.0',
	        // the global-scope this is NOT the global object in Node.js
	        globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
	        oldGlobalMoment,
	        round = Math.round,
	        hasOwnProperty = Object.prototype.hasOwnProperty,
	        i,

	        YEAR = 0,
	        MONTH = 1,
	        DATE = 2,
	        HOUR = 3,
	        MINUTE = 4,
	        SECOND = 5,
	        MILLISECOND = 6,

	        // internal storage for locale config files
	        locales = {},

	        // extra moment internal properties (plugins register props here)
	        momentProperties = [],

	        // check for nodeJS
	        hasModule = (typeof module !== 'undefined' && module && module.exports),

	        // ASP.NET json date format regex
	        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
	        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

	        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

	        // format tokens
	        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

	        // parsing token regexes
	        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
	        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
	        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
	        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
	        parseTokenDigits = /\d+/, // nonzero number of digits
	        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
	        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
	        parseTokenT = /T/i, // T (ISO separator)
	        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
	        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

	        //strict parsing regexes
	        parseTokenOneDigit = /\d/, // 0 - 9
	        parseTokenTwoDigits = /\d\d/, // 00 - 99
	        parseTokenThreeDigits = /\d{3}/, // 000 - 999
	        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
	        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
	        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

	        // iso 8601 regex
	        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

	        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	        isoDates = [
	            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
	            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
	            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
	            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
	            ['YYYY-DDD', /\d{4}-\d{3}/]
	        ],

	        // iso time formats and regexes
	        isoTimes = [
	            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
	            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
	            ['HH:mm', /(T| )\d\d:\d\d/],
	            ['HH', /(T| )\d\d/]
	        ],

	        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
	        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	        // getter and setter names
	        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
	        unitMillisecondFactors = {
	            'Milliseconds' : 1,
	            'Seconds' : 1e3,
	            'Minutes' : 6e4,
	            'Hours' : 36e5,
	            'Days' : 864e5,
	            'Months' : 2592e6,
	            'Years' : 31536e6
	        },

	        unitAliases = {
	            ms : 'millisecond',
	            s : 'second',
	            m : 'minute',
	            h : 'hour',
	            d : 'day',
	            D : 'date',
	            w : 'week',
	            W : 'isoWeek',
	            M : 'month',
	            Q : 'quarter',
	            y : 'year',
	            DDD : 'dayOfYear',
	            e : 'weekday',
	            E : 'isoWeekday',
	            gg: 'weekYear',
	            GG: 'isoWeekYear'
	        },

	        camelFunctions = {
	            dayofyear : 'dayOfYear',
	            isoweekday : 'isoWeekday',
	            isoweek : 'isoWeek',
	            weekyear : 'weekYear',
	            isoweekyear : 'isoWeekYear'
	        },

	        // format function strings
	        formatFunctions = {},

	        // default relative time thresholds
	        relativeTimeThresholds = {
	            s: 45,  // seconds to minute
	            m: 45,  // minutes to hour
	            h: 22,  // hours to day
	            d: 26,  // days to month
	            M: 11   // months to year
	        },

	        // tokens to ordinalize and pad
	        ordinalizeTokens = 'DDD w W M D d'.split(' '),
	        paddedTokens = 'M D H h m s w W'.split(' '),

	        formatTokenFunctions = {
	            M    : function () {
	                return this.month() + 1;
	            },
	            MMM  : function (format) {
	                return this.localeData().monthsShort(this, format);
	            },
	            MMMM : function (format) {
	                return this.localeData().months(this, format);
	            },
	            D    : function () {
	                return this.date();
	            },
	            DDD  : function () {
	                return this.dayOfYear();
	            },
	            d    : function () {
	                return this.day();
	            },
	            dd   : function (format) {
	                return this.localeData().weekdaysMin(this, format);
	            },
	            ddd  : function (format) {
	                return this.localeData().weekdaysShort(this, format);
	            },
	            dddd : function (format) {
	                return this.localeData().weekdays(this, format);
	            },
	            w    : function () {
	                return this.week();
	            },
	            W    : function () {
	                return this.isoWeek();
	            },
	            YY   : function () {
	                return leftZeroFill(this.year() % 100, 2);
	            },
	            YYYY : function () {
	                return leftZeroFill(this.year(), 4);
	            },
	            YYYYY : function () {
	                return leftZeroFill(this.year(), 5);
	            },
	            YYYYYY : function () {
	                var y = this.year(), sign = y >= 0 ? '+' : '-';
	                return sign + leftZeroFill(Math.abs(y), 6);
	            },
	            gg   : function () {
	                return leftZeroFill(this.weekYear() % 100, 2);
	            },
	            gggg : function () {
	                return leftZeroFill(this.weekYear(), 4);
	            },
	            ggggg : function () {
	                return leftZeroFill(this.weekYear(), 5);
	            },
	            GG   : function () {
	                return leftZeroFill(this.isoWeekYear() % 100, 2);
	            },
	            GGGG : function () {
	                return leftZeroFill(this.isoWeekYear(), 4);
	            },
	            GGGGG : function () {
	                return leftZeroFill(this.isoWeekYear(), 5);
	            },
	            e : function () {
	                return this.weekday();
	            },
	            E : function () {
	                return this.isoWeekday();
	            },
	            a    : function () {
	                return this.localeData().meridiem(this.hours(), this.minutes(), true);
	            },
	            A    : function () {
	                return this.localeData().meridiem(this.hours(), this.minutes(), false);
	            },
	            H    : function () {
	                return this.hours();
	            },
	            h    : function () {
	                return this.hours() % 12 || 12;
	            },
	            m    : function () {
	                return this.minutes();
	            },
	            s    : function () {
	                return this.seconds();
	            },
	            S    : function () {
	                return toInt(this.milliseconds() / 100);
	            },
	            SS   : function () {
	                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
	            },
	            SSS  : function () {
	                return leftZeroFill(this.milliseconds(), 3);
	            },
	            SSSS : function () {
	                return leftZeroFill(this.milliseconds(), 3);
	            },
	            Z    : function () {
	                var a = this.utcOffset(),
	                    b = '+';
	                if (a < 0) {
	                    a = -a;
	                    b = '-';
	                }
	                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
	            },
	            ZZ   : function () {
	                var a = this.utcOffset(),
	                    b = '+';
	                if (a < 0) {
	                    a = -a;
	                    b = '-';
	                }
	                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
	            },
	            z : function () {
	                return this.zoneAbbr();
	            },
	            zz : function () {
	                return this.zoneName();
	            },
	            x    : function () {
	                return this.valueOf();
	            },
	            X    : function () {
	                return this.unix();
	            },
	            Q : function () {
	                return this.quarter();
	            }
	        },

	        deprecations = {},

	        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],

	        updateInProgress = false;

	    // Pick the first defined of two or three arguments. dfl comes from
	    // default.
	    function dfl(a, b, c) {
	        switch (arguments.length) {
	            case 2: return a != null ? a : b;
	            case 3: return a != null ? a : b != null ? b : c;
	            default: throw new Error('Implement me');
	        }
	    }

	    function hasOwnProp(a, b) {
	        return hasOwnProperty.call(a, b);
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object, and es5 standard is not very
	        // helpful.
	        return {
	            empty : false,
	            unusedTokens : [],
	            unusedInput : [],
	            overflow : -2,
	            charsLeftOver : 0,
	            nullInput : false,
	            invalidMonth : null,
	            invalidFormat : false,
	            userInvalidated : false,
	            iso: false
	        };
	    }

	    function printMsg(msg) {
	        if (moment.suppressDeprecationWarnings === false &&
	                typeof console !== 'undefined' && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true;
	        return extend(function () {
	            if (firstTime) {
	                printMsg(msg);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    function deprecateSimple(name, msg) {
	        if (!deprecations[name]) {
	            printMsg(msg);
	            deprecations[name] = true;
	        }
	    }

	    function padToken(func, count) {
	        return function (a) {
	            return leftZeroFill(func.call(this, a), count);
	        };
	    }
	    function ordinalizeToken(func, period) {
	        return function (a) {
	            return this.localeData().ordinal(func.call(this, a), period);
	        };
	    }

	    function monthDiff(a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        return -(wholeMonthDiff + adjust);
	    }

	    while (ordinalizeTokens.length) {
	        i = ordinalizeTokens.pop();
	        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
	    }
	    while (paddedTokens.length) {
	        i = paddedTokens.pop();
	        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	    }
	    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


	    function meridiemFixWrap(locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // thie is not supposed to happen
	            return hour;
	        }
	    }

	    /************************************
	        Constructors
	    ************************************/

	    function Locale() {
	    }

	    // Moment prototype object
	    function Moment(config, skipOverflow) {
	        if (skipOverflow !== false) {
	            checkOverflow(config);
	        }
	        copyConfig(this, config);
	        this._d = new Date(+config._d);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            moment.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    // Duration Constructor
	    function Duration(duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 36e5; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;

	        this._data = {};

	        this._locale = moment.localeData();

	        this._bubble();
	    }

	    /************************************
	        Helpers
	    ************************************/


	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function copyConfig(to, from) {
	        var i, prop, val;

	        if (typeof from._isAMomentObject !== 'undefined') {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (typeof from._i !== 'undefined') {
	            to._i = from._i;
	        }
	        if (typeof from._f !== 'undefined') {
	            to._f = from._f;
	        }
	        if (typeof from._l !== 'undefined') {
	            to._l = from._l;
	        }
	        if (typeof from._strict !== 'undefined') {
	            to._strict = from._strict;
	        }
	        if (typeof from._tzm !== 'undefined') {
	            to._tzm = from._tzm;
	        }
	        if (typeof from._isUTC !== 'undefined') {
	            to._isUTC = from._isUTC;
	        }
	        if (typeof from._offset !== 'undefined') {
	            to._offset = from._offset;
	        }
	        if (typeof from._pf !== 'undefined') {
	            to._pf = from._pf;
	        }
	        if (typeof from._locale !== 'undefined') {
	            to._locale = from._locale;
	        }

	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (typeof val !== 'undefined') {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    function absRound(number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }

	    // left zero fill a number
	    // see http://jsperf.com/left-zero-filling for performance comparison
	    function leftZeroFill(number, targetLength, forceSign) {
	        var output = '' + Math.abs(number),
	            sign = number >= 0;

	        while (output.length < targetLength) {
	            output = '0' + output;
	        }
	        return (sign ? (forceSign ? '+' : '') : '-') + output;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};

	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        other = makeAs(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                tmp = val; val = period; period = tmp;
	            }

	            val = typeof val === 'string' ? +val : val;
	            dur = moment.duration(val, period);
	            addOrSubtractDurationFromMoment(this, dur, direction);
	            return this;
	        };
	    }

	    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = duration._days,
	            months = duration._months;
	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        if (days) {
	            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            moment.updateOffset(mom, days || months);
	        }
	    }

	    // check if is an array
	    function isArray(input) {
	        return Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isDate(input) {
	        return Object.prototype.toString.call(input) === '[object Date]' ||
	            input instanceof Date;
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function normalizeUnits(units) {
	        if (units) {
	            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
	            units = unitAliases[units] || camelFunctions[lowered] || lowered;
	        }
	        return units;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    function makeList(field) {
	        var count, setter;

	        if (field.indexOf('week') === 0) {
	            count = 7;
	            setter = 'day';
	        }
	        else if (field.indexOf('month') === 0) {
	            count = 12;
	            setter = 'month';
	        }
	        else {
	            return;
	        }

	        moment[field] = function (format, index) {
	            var i, getter,
	                method = moment._locale[field],
	                results = [];

	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            getter = function (i) {
	                var m = moment().utc().set(setter, i);
	                return method.call(moment._locale, m, format || '');
	            };

	            if (index != null) {
	                return getter(index);
	            }
	            else {
	                for (i = 0; i < count; i++) {
	                    results.push(getter(i));
	                }
	                return results;
	            }
	        };
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            if (coercedNumber >= 0) {
	                value = Math.floor(coercedNumber);
	            } else {
	                value = Math.ceil(coercedNumber);
	            }
	        }

	        return value;
	    }

	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }

	    function weeksInYear(year, dow, doy) {
	        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
	    }

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    function checkOverflow(m) {
	        var overflow;
	        if (m._a && m._pf.overflow === -2) {
	            overflow =
	                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
	                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
	                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
	                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
	                                           m._a[SECOND] !== 0 ||
	                                           m._a[MILLISECOND] !== 0)) ? HOUR :
	                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
	                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
	                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;

	            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }

	            m._pf.overflow = overflow;
	        }
	    }

	    function isValid(m) {
	        if (m._isValid == null) {
	            m._isValid = !isNaN(m._d.getTime()) &&
	                m._pf.overflow < 0 &&
	                !m._pf.empty &&
	                !m._pf.invalidMonth &&
	                !m._pf.nullInput &&
	                !m._pf.invalidFormat &&
	                !m._pf.userInvalidated;

	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    m._pf.charsLeftOver === 0 &&
	                    m._pf.unusedTokens.length === 0 &&
	                    m._pf.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }

	    function loadLocale(name) {
	        var oldLocale = null;
	        if (!locales[name] && hasModule) {
	            try {
	                oldLocale = moment.locale();
	                __webpack_require__(144)("./" + name);
	                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
	                moment.locale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }

	    // Return a moment from input, that is local/utc/utcOffset equivalent to
	    // model.
	    function makeAs(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (moment.isMoment(input) || isDate(input) ?
	                    +input : +moment(input)) - (+res);
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(+res._d + diff);
	            moment.updateOffset(res, false);
	            return res;
	        } else {
	            return moment(input).local();
	        }
	    }

	    /************************************
	        Locale
	    ************************************/


	    extend(Locale.prototype, {

	        set : function (config) {
	            var prop, i;
	            for (i in config) {
	                prop = config[i];
	                if (typeof prop === 'function') {
	                    this[i] = prop;
	                } else {
	                    this['_' + i] = prop;
	                }
	            }
	            // Lenient ordinal parsing accepts just a number in addition to
	            // number + (possibly) stuff coming from _ordinalParseLenient.
	            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
	        },

	        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        months : function (m) {
	            return this._months[m.month()];
	        },

	        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        monthsShort : function (m) {
	            return this._monthsShort[m.month()];
	        },

	        monthsParse : function (monthName, format, strict) {
	            var i, mom, regex;

	            if (!this._monthsParse) {
	                this._monthsParse = [];
	                this._longMonthsParse = [];
	                this._shortMonthsParse = [];
	            }

	            for (i = 0; i < 12; i++) {
	                // make the regex if we don't have it already
	                mom = moment.utc([2000, i]);
	                if (strict && !this._longMonthsParse[i]) {
	                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	                }
	                if (!strict && !this._monthsParse[i]) {
	                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                    return i;
	                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                    return i;
	                } else if (!strict && this._monthsParse[i].test(monthName)) {
	                    return i;
	                }
	            }
	        },

	        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdays : function (m) {
	            return this._weekdays[m.day()];
	        },

	        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysShort : function (m) {
	            return this._weekdaysShort[m.day()];
	        },

	        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        weekdaysMin : function (m) {
	            return this._weekdaysMin[m.day()];
	        },

	        weekdaysParse : function (weekdayName) {
	            var i, mom, regex;

	            if (!this._weekdaysParse) {
	                this._weekdaysParse = [];
	            }

	            for (i = 0; i < 7; i++) {
	                // make the regex if we don't have it already
	                if (!this._weekdaysParse[i]) {
	                    mom = moment([2000, 1]).day(i);
	                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (this._weekdaysParse[i].test(weekdayName)) {
	                    return i;
	                }
	            }
	        },

	        _longDateFormat : {
	            LTS : 'h:mm:ss A',
	            LT : 'h:mm A',
	            L : 'MM/DD/YYYY',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY LT',
	            LLLL : 'dddd, MMMM D, YYYY LT'
	        },
	        longDateFormat : function (key) {
	            var output = this._longDateFormat[key];
	            if (!output && this._longDateFormat[key.toUpperCase()]) {
	                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                    return val.slice(1);
	                });
	                this._longDateFormat[key] = output;
	            }
	            return output;
	        },

	        isPM : function (input) {
	            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	            // Using charAt should be more compatible.
	            return ((input + '').toLowerCase().charAt(0) === 'p');
	        },

	        _meridiemParse : /[ap]\.?m?\.?/i,
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'pm' : 'PM';
	            } else {
	                return isLower ? 'am' : 'AM';
	            }
	        },


	        _calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        calendar : function (key, mom, now) {
	            var output = this._calendar[key];
	            return typeof output === 'function' ? output.apply(mom, [now]) : output;
	        },

	        _relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },

	        relativeTime : function (number, withoutSuffix, string, isFuture) {
	            var output = this._relativeTime[string];
	            return (typeof output === 'function') ?
	                output(number, withoutSuffix, string, isFuture) :
	                output.replace(/%d/i, number);
	        },

	        pastFuture : function (diff, output) {
	            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
	        },

	        ordinal : function (number) {
	            return this._ordinal.replace('%d', number);
	        },
	        _ordinal : '%d',
	        _ordinalParse : /\d{1,2}/,

	        preparse : function (string) {
	            return string;
	        },

	        postformat : function (string) {
	            return string;
	        },

	        week : function (mom) {
	            return weekOfYear(mom, this._week.dow, this._week.doy).week;
	        },

	        _week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        },

	        firstDayOfWeek : function () {
	            return this._week.dow;
	        },

	        firstDayOfYear : function () {
	            return this._week.doy;
	        },

	        _invalidDate: 'Invalid date',
	        invalidDate: function () {
	            return this._invalidDate;
	        }
	    });

	    /************************************
	        Formatting
	    ************************************/


	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '';
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());

	        if (!formatFunctions[format]) {
	            formatFunctions[format] = makeFormatFunction(format);
	        }

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }


	    /************************************
	        Parsing
	    ************************************/


	    // get the regex to find the next token
	    function getParseRegexForToken(token, config) {
	        var a, strict = config._strict;
	        switch (token) {
	        case 'Q':
	            return parseTokenOneDigit;
	        case 'DDDD':
	            return parseTokenThreeDigits;
	        case 'YYYY':
	        case 'GGGG':
	        case 'gggg':
	            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
	        case 'Y':
	        case 'G':
	        case 'g':
	            return parseTokenSignedNumber;
	        case 'YYYYYY':
	        case 'YYYYY':
	        case 'GGGGG':
	        case 'ggggg':
	            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
	        case 'S':
	            if (strict) {
	                return parseTokenOneDigit;
	            }
	            /* falls through */
	        case 'SS':
	            if (strict) {
	                return parseTokenTwoDigits;
	            }
	            /* falls through */
	        case 'SSS':
	            if (strict) {
	                return parseTokenThreeDigits;
	            }
	            /* falls through */
	        case 'DDD':
	            return parseTokenOneToThreeDigits;
	        case 'MMM':
	        case 'MMMM':
	        case 'dd':
	        case 'ddd':
	        case 'dddd':
	            return parseTokenWord;
	        case 'a':
	        case 'A':
	            return config._locale._meridiemParse;
	        case 'x':
	            return parseTokenOffsetMs;
	        case 'X':
	            return parseTokenTimestampMs;
	        case 'Z':
	        case 'ZZ':
	            return parseTokenTimezone;
	        case 'T':
	            return parseTokenT;
	        case 'SSSS':
	            return parseTokenDigits;
	        case 'MM':
	        case 'DD':
	        case 'YY':
	        case 'GG':
	        case 'gg':
	        case 'HH':
	        case 'hh':
	        case 'mm':
	        case 'ss':
	        case 'ww':
	        case 'WW':
	            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
	        case 'M':
	        case 'D':
	        case 'd':
	        case 'H':
	        case 'h':
	        case 'm':
	        case 's':
	        case 'w':
	        case 'W':
	        case 'e':
	        case 'E':
	            return parseTokenOneOrTwoDigits;
	        case 'Do':
	            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
	        default :
	            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
	            return a;
	        }
	    }

	    function utcOffsetFromString(string) {
	        string = string || '';
	        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
	            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
	            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
	            minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return parts[0] === '+' ? minutes : -minutes;
	    }

	    // function to convert string input to date
	    function addTimeToArrayFromToken(token, input, config) {
	        var a, datePartArray = config._a;

	        switch (token) {
	        // QUARTER
	        case 'Q':
	            if (input != null) {
	                datePartArray[MONTH] = (toInt(input) - 1) * 3;
	            }
	            break;
	        // MONTH
	        case 'M' : // fall through to MM
	        case 'MM' :
	            if (input != null) {
	                datePartArray[MONTH] = toInt(input) - 1;
	            }
	            break;
	        case 'MMM' : // fall through to MMMM
	        case 'MMMM' :
	            a = config._locale.monthsParse(input, token, config._strict);
	            // if we didn't find a month name, mark the date as invalid.
	            if (a != null) {
	                datePartArray[MONTH] = a;
	            } else {
	                config._pf.invalidMonth = input;
	            }
	            break;
	        // DAY OF MONTH
	        case 'D' : // fall through to DD
	        case 'DD' :
	            if (input != null) {
	                datePartArray[DATE] = toInt(input);
	            }
	            break;
	        case 'Do' :
	            if (input != null) {
	                datePartArray[DATE] = toInt(parseInt(
	                            input.match(/\d{1,2}/)[0], 10));
	            }
	            break;
	        // DAY OF YEAR
	        case 'DDD' : // fall through to DDDD
	        case 'DDDD' :
	            if (input != null) {
	                config._dayOfYear = toInt(input);
	            }

	            break;
	        // YEAR
	        case 'YY' :
	            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
	            break;
	        case 'YYYY' :
	        case 'YYYYY' :
	        case 'YYYYYY' :
	            datePartArray[YEAR] = toInt(input);
	            break;
	        // AM / PM
	        case 'a' : // fall through to A
	        case 'A' :
	            config._meridiem = input;
	            // config._isPm = config._locale.isPM(input);
	            break;
	        // HOUR
	        case 'h' : // fall through to hh
	        case 'hh' :
	            config._pf.bigHour = true;
	            /* falls through */
	        case 'H' : // fall through to HH
	        case 'HH' :
	            datePartArray[HOUR] = toInt(input);
	            break;
	        // MINUTE
	        case 'm' : // fall through to mm
	        case 'mm' :
	            datePartArray[MINUTE] = toInt(input);
	            break;
	        // SECOND
	        case 's' : // fall through to ss
	        case 'ss' :
	            datePartArray[SECOND] = toInt(input);
	            break;
	        // MILLISECOND
	        case 'S' :
	        case 'SS' :
	        case 'SSS' :
	        case 'SSSS' :
	            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
	            break;
	        // UNIX OFFSET (MILLISECONDS)
	        case 'x':
	            config._d = new Date(toInt(input));
	            break;
	        // UNIX TIMESTAMP WITH MS
	        case 'X':
	            config._d = new Date(parseFloat(input) * 1000);
	            break;
	        // TIMEZONE
	        case 'Z' : // fall through to ZZ
	        case 'ZZ' :
	            config._useUTC = true;
	            config._tzm = utcOffsetFromString(input);
	            break;
	        // WEEKDAY - human
	        case 'dd':
	        case 'ddd':
	        case 'dddd':
	            a = config._locale.weekdaysParse(input);
	            // if we didn't get a weekday name, mark the date as invalid
	            if (a != null) {
	                config._w = config._w || {};
	                config._w['d'] = a;
	            } else {
	                config._pf.invalidWeekday = input;
	            }
	            break;
	        // WEEK, WEEK DAY - numeric
	        case 'w':
	        case 'ww':
	        case 'W':
	        case 'WW':
	        case 'd':
	        case 'e':
	        case 'E':
	            token = token.substr(0, 1);
	            /* falls through */
	        case 'gggg':
	        case 'GGGG':
	        case 'GGGGG':
	            token = token.substr(0, 2);
	            if (input) {
	                config._w = config._w || {};
	                config._w[token] = toInt(input);
	            }
	            break;
	        case 'gg':
	        case 'GG':
	            config._w = config._w || {};
	            config._w[token] = moment.parseTwoDigitYear(input);
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
	            week = dfl(w.W, 1);
	            weekday = dfl(w.E, 1);
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
	            week = dfl(w.w, 1);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < dow) {
	                    ++week;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

	        config._a[YEAR] = temp.year;
	        config._dayOfYear = temp.dayOfYear;
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function dateFromConfig(config) {
	        var i, date, input = [], currentDate, yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                config._pf._overflowDayOfYear = true;
	            }

	            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }

	    function dateFromObject(config) {
	        var normalizedInput;

	        if (config._d) {
	            return;
	        }

	        normalizedInput = normalizeObjectUnits(config._i);
	        config._a = [
	            normalizedInput.year,
	            normalizedInput.month,
	            normalizedInput.day || normalizedInput.date,
	            normalizedInput.hour,
	            normalizedInput.minute,
	            normalizedInput.second,
	            normalizedInput.millisecond
	        ];

	        dateFromConfig(config);
	    }

	    function currentDateArray(config) {
	        var now = new Date();
	        if (config._useUTC) {
	            return [
	                now.getUTCFullYear(),
	                now.getUTCMonth(),
	                now.getUTCDate()
	            ];
	        } else {
	            return [now.getFullYear(), now.getMonth(), now.getDate()];
	        }
	    }

	    // date from string and format string
	    function makeDateFromStringAndFormat(config) {
	        if (config._f === moment.ISO_8601) {
	            parseISO(config);
	            return;
	        }

	        config._a = [];
	        config._pf.empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;

	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    config._pf.unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    config._pf.empty = false;
	                }
	                else {
	                    config._pf.unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                config._pf.unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            config._pf.unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
	            config._pf.bigHour = undefined;
	        }
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR],
	                config._meridiem);
	        dateFromConfig(config);
	        checkOverflow(config);
	    }

	    function unescapeFormat(s) {
	        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        });
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function regexpEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    // date from string and array of format strings
	    function makeDateFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,

	            scoreToBeat,
	            i,
	            currentScore;

	        if (config._f.length === 0) {
	            config._pf.invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._pf = defaultParsingFlags();
	            tempConfig._f = config._f[i];
	            makeDateFromStringAndFormat(tempConfig);

	            if (!isValid(tempConfig)) {
	                continue;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += tempConfig._pf.charsLeftOver;

	            //or tokens
	            currentScore += tempConfig._pf.unusedTokens.length * 10;

	            tempConfig._pf.score = currentScore;

	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    // date from iso format
	    function parseISO(config) {
	        var i, l,
	            string = config._i,
	            match = isoRegex.exec(string);

	        if (match) {
	            config._pf.iso = true;
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(string)) {
	                    // match[5] should be 'T' or undefined
	                    config._f = isoDates[i][0] + (match[6] || ' ');
	                    break;
	                }
	            }
	            for (i = 0, l = isoTimes.length; i < l; i++) {
	                if (isoTimes[i][1].exec(string)) {
	                    config._f += isoTimes[i][0];
	                    break;
	                }
	            }
	            if (string.match(parseTokenTimezone)) {
	                config._f += 'Z';
	            }
	            makeDateFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from iso format or fallback
	    function makeDateFromString(config) {
	        parseISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            moment.createFromInputFallback(config);
	        }
	    }

	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function makeDateFromInput(config) {
	        var input = config._i, matched;
	        if (input === undefined) {
	            config._d = new Date();
	        } else if (isDate(input)) {
	            config._d = new Date(+input);
	        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
	            config._d = new Date(+matched[1]);
	        } else if (typeof input === 'string') {
	            makeDateFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            dateFromConfig(config);
	        } else if (typeof(input) === 'object') {
	            dateFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            moment.createFromInputFallback(config);
	        }
	    }

	    function makeDate(y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);

	        //the date constructor doesn't accept years < 1970
	        if (y < 1970) {
	            date.setFullYear(y);
	        }
	        return date;
	    }

	    function makeUTCDate(y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	        if (y < 1970) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }

	    function parseWeekday(input, locale) {
	        if (typeof input === 'string') {
	            if (!isNaN(input)) {
	                input = parseInt(input, 10);
	            }
	            else {
	                input = locale.weekdaysParse(input);
	                if (typeof input !== 'number') {
	                    return null;
	                }
	            }
	        }
	        return input;
	    }

	    /************************************
	        Relative Time
	    ************************************/


	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function relativeTime(posNegDuration, withoutSuffix, locale) {
	        var duration = moment.duration(posNegDuration).abs(),
	            seconds = round(duration.as('s')),
	            minutes = round(duration.as('m')),
	            hours = round(duration.as('h')),
	            days = round(duration.as('d')),
	            months = round(duration.as('M')),
	            years = round(duration.as('y')),

	            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
	                minutes === 1 && ['m'] ||
	                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
	                hours === 1 && ['h'] ||
	                hours < relativeTimeThresholds.h && ['hh', hours] ||
	                days === 1 && ['d'] ||
	                days < relativeTimeThresholds.d && ['dd', days] ||
	                months === 1 && ['M'] ||
	                months < relativeTimeThresholds.M && ['MM', months] ||
	                years === 1 && ['y'] || ['yy', years];

	        args[2] = withoutSuffix;
	        args[3] = +posNegDuration > 0;
	        args[4] = locale;
	        return substituteTimeAgo.apply({}, args);
	    }


	    /************************************
	        Week of Year
	    ************************************/


	    // firstDayOfWeek       0 = sun, 6 = sat
	    //                      the day of the week that starts the week
	    //                      (usually sunday or monday)
	    // firstDayOfWeekOfYear 0 = sun, 6 = sat
	    //                      the first week is the week that contains the first
	    //                      of this day of the week
	    //                      (eg. ISO weeks use thursday (4))
	    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	        var end = firstDayOfWeekOfYear - firstDayOfWeek,
	            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	            adjustedMoment;


	        if (daysToDayOfWeek > end) {
	            daysToDayOfWeek -= 7;
	        }

	        if (daysToDayOfWeek < end - 7) {
	            daysToDayOfWeek += 7;
	        }

	        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
	        return {
	            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	            year: adjustedMoment.year()
	        };
	    }

	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
	        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

	        d = d === 0 ? 7 : d;
	        weekday = weekday != null ? weekday : firstDayOfWeek;
	        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
	        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

	        return {
	            year: dayOfYear > 0 ? year : year - 1,
	            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
	        };
	    }

	    /************************************
	        Top Level Functions
	    ************************************/

	    function makeMoment(config) {
	        var input = config._i,
	            format = config._f,
	            res;

	        config._locale = config._locale || moment.localeData(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return moment.invalid({nullInput: true});
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (moment.isMoment(input)) {
	            return new Moment(input, true);
	        } else if (format) {
	            if (isArray(format)) {
	                makeDateFromStringAndArray(config);
	            } else {
	                makeDateFromStringAndFormat(config);
	            }
	        } else {
	            makeDateFromInput(config);
	        }

	        res = new Moment(config);
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    moment = function (input, format, locale, strict) {
	        var c;

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c = {};
	        c._isAMomentObject = true;
	        c._i = input;
	        c._f = format;
	        c._l = locale;
	        c._strict = strict;
	        c._isUTC = false;
	        c._pf = defaultParsingFlags();

	        return makeMoment(c);
	    };

	    moment.suppressDeprecationWarnings = false;

	    moment.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'https://github.com/moment/moment/issues/1407 for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return moment();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    moment.min = function () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    };

	    moment.max = function () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    };

	    // creating with utc
	    moment.utc = function (input, format, locale, strict) {
	        var c;

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c = {};
	        c._isAMomentObject = true;
	        c._useUTC = true;
	        c._isUTC = true;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	        c._pf = defaultParsingFlags();

	        return makeMoment(c).utc();
	    };

	    // creating with unix timestamp (in seconds)
	    moment.unix = function (input) {
	        return moment(input * 1000);
	    };

	    // duration
	    moment.duration = function (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            parseIso,
	            diffRes;

	        if (moment.isDuration(input)) {
	            duration = {
	                ms: input._milliseconds,
	                d: input._days,
	                M: input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y: 0,
	                d: toInt(match[DATE]) * sign,
	                h: toInt(match[HOUR]) * sign,
	                m: toInt(match[MINUTE]) * sign,
	                s: toInt(match[SECOND]) * sign,
	                ms: toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoDurationRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            parseIso = function (inp) {
	                // We'd normally use ~~inp for this, but unfortunately it also
	                // converts floats to ints.
	                // inp may be undefined, so careful calling replace on it.
	                var res = inp && parseFloat(inp.replace(',', '.'));
	                // apply sign while we're at it
	                return (isNaN(res) ? 0 : res) * sign;
	            };
	            duration = {
	                y: parseIso(match[2]),
	                M: parseIso(match[3]),
	                d: parseIso(match[4]),
	                h: parseIso(match[5]),
	                m: parseIso(match[6]),
	                s: parseIso(match[7]),
	                w: parseIso(match[8])
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' &&
	                ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        return ret;
	    };

	    // version number
	    moment.version = VERSION;

	    // default format
	    moment.defaultFormat = isoFormat;

	    // constant that refers to the ISO standard
	    moment.ISO_8601 = function () {};

	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    moment.momentProperties = momentProperties;

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    moment.updateOffset = function () {};

	    // This function allows you to set a threshold for relative time strings
	    moment.relativeTimeThreshold = function (threshold, limit) {
	        if (relativeTimeThresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return relativeTimeThresholds[threshold];
	        }
	        relativeTimeThresholds[threshold] = limit;
	        return true;
	    };

	    moment.lang = deprecate(
	        'moment.lang is deprecated. Use moment.locale instead.',
	        function (key, value) {
	            return moment.locale(key, value);
	        }
	    );

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    moment.locale = function (key, values) {
	        var data;
	        if (key) {
	            if (typeof(values) !== 'undefined') {
	                data = moment.defineLocale(key, values);
	            }
	            else {
	                data = moment.localeData(key);
	            }

	            if (data) {
	                moment.duration._locale = moment._locale = data;
	            }
	        }

	        return moment._locale._abbr;
	    };

	    moment.defineLocale = function (name, values) {
	        if (values !== null) {
	            values.abbr = name;
	            if (!locales[name]) {
	                locales[name] = new Locale();
	            }
	            locales[name].set(values);

	            // backwards compat for now: also set the locale
	            moment.locale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    };

	    moment.langData = deprecate(
	        'moment.langData is deprecated. Use moment.localeData instead.',
	        function (key) {
	            return moment.localeData(key);
	        }
	    );

	    // returns locale data
	    moment.localeData = function (key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return moment._locale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    };

	    // compare moment object
	    moment.isMoment = function (obj) {
	        return obj instanceof Moment ||
	            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
	    };

	    // for typechecking Duration objects
	    moment.isDuration = function (obj) {
	        return obj instanceof Duration;
	    };

	    for (i = lists.length - 1; i >= 0; --i) {
	        makeList(lists[i]);
	    }

	    moment.normalizeUnits = function (units) {
	        return normalizeUnits(units);
	    };

	    moment.invalid = function (flags) {
	        var m = moment.utc(NaN);
	        if (flags != null) {
	            extend(m._pf, flags);
	        }
	        else {
	            m._pf.userInvalidated = true;
	        }

	        return m;
	    };

	    moment.parseZone = function () {
	        return moment.apply(null, arguments).parseZone();
	    };

	    moment.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    moment.isDate = isDate;

	    /************************************
	        Moment Prototype
	    ************************************/


	    extend(moment.fn = Moment.prototype, {

	        clone : function () {
	            return moment(this);
	        },

	        valueOf : function () {
	            return +this._d - ((this._offset || 0) * 60000);
	        },

	        unix : function () {
	            return Math.floor(+this / 1000);
	        },

	        toString : function () {
	            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	        },

	        toDate : function () {
	            return this._offset ? new Date(+this) : this._d;
	        },

	        toISOString : function () {
	            var m = moment(this).utc();
	            if (0 < m.year() && m.year() <= 9999) {
	                if ('function' === typeof Date.prototype.toISOString) {
	                    // native implementation is ~50x faster, use it when we can
	                    return this.toDate().toISOString();
	                } else {
	                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	                }
	            } else {
	                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        },

	        toArray : function () {
	            var m = this;
	            return [
	                m.year(),
	                m.month(),
	                m.date(),
	                m.hours(),
	                m.minutes(),
	                m.seconds(),
	                m.milliseconds()
	            ];
	        },

	        isValid : function () {
	            return isValid(this);
	        },

	        isDSTShifted : function () {
	            if (this._a) {
	                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
	            }

	            return false;
	        },

	        parsingFlags : function () {
	            return extend({}, this._pf);
	        },

	        invalidAt: function () {
	            return this._pf.overflow;
	        },

	        utc : function (keepLocalTime) {
	            return this.utcOffset(0, keepLocalTime);
	        },

	        local : function (keepLocalTime) {
	            if (this._isUTC) {
	                this.utcOffset(0, keepLocalTime);
	                this._isUTC = false;

	                if (keepLocalTime) {
	                    this.subtract(this._dateUtcOffset(), 'm');
	                }
	            }
	            return this;
	        },

	        format : function (inputString) {
	            var output = formatMoment(this, inputString || moment.defaultFormat);
	            return this.localeData().postformat(output);
	        },

	        add : createAdder(1, 'add'),

	        subtract : createAdder(-1, 'subtract'),

	        diff : function (input, units, asFloat) {
	            var that = makeAs(input, this),
	                zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
	                anchor, diff, output, daysAdjust;

	            units = normalizeUnits(units);

	            if (units === 'year' || units === 'month' || units === 'quarter') {
	                output = monthDiff(this, that);
	                if (units === 'quarter') {
	                    output = output / 3;
	                } else if (units === 'year') {
	                    output = output / 12;
	                }
	            } else {
	                diff = this - that;
	                output = units === 'second' ? diff / 1e3 : // 1000
	                    units === 'minute' ? diff / 6e4 : // 1000 * 60
	                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
	                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                    diff;
	            }
	            return asFloat ? output : absRound(output);
	        },

	        from : function (time, withoutSuffix) {
	            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        },

	        fromNow : function (withoutSuffix) {
	            return this.from(moment(), withoutSuffix);
	        },

	        calendar : function (time) {
	            // We want to compare the start of today, vs this.
	            // Getting start-of-today depends on whether we're locat/utc/offset
	            // or not.
	            var now = time || moment(),
	                sod = makeAs(now, this).startOf('day'),
	                diff = this.diff(sod, 'days', true),
	                format = diff < -6 ? 'sameElse' :
	                    diff < -1 ? 'lastWeek' :
	                    diff < 0 ? 'lastDay' :
	                    diff < 1 ? 'sameDay' :
	                    diff < 2 ? 'nextDay' :
	                    diff < 7 ? 'nextWeek' : 'sameElse';
	            return this.format(this.localeData().calendar(format, this, moment(now)));
	        },

	        isLeapYear : function () {
	            return isLeapYear(this.year());
	        },

	        isDST : function () {
	            return (this.utcOffset() > this.clone().month(0).utcOffset() ||
	                this.utcOffset() > this.clone().month(5).utcOffset());
	        },

	        day : function (input) {
	            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	            if (input != null) {
	                input = parseWeekday(input, this.localeData());
	                return this.add(input - day, 'd');
	            } else {
	                return day;
	            }
	        },

	        month : makeAccessor('Month', true),

	        startOf : function (units) {
	            units = normalizeUnits(units);
	            // the following switch intentionally omits break keywords
	            // to utilize falling through the cases.
	            switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'quarter':
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'isoWeek':
	            case 'day':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	                /* falls through */
	            }

	            // weeks are a special case
	            if (units === 'week') {
	                this.weekday(0);
	            } else if (units === 'isoWeek') {
	                this.isoWeekday(1);
	            }

	            // quarters are also special
	            if (units === 'quarter') {
	                this.month(Math.floor(this.month() / 3) * 3);
	            }

	            return this;
	        },

	        endOf: function (units) {
	            units = normalizeUnits(units);
	            if (units === undefined || units === 'millisecond') {
	                return this;
	            }
	            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	        },

	        isAfter: function (input, units) {
	            var inputMs;
	            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	            if (units === 'millisecond') {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this > +input;
	            } else {
	                inputMs = moment.isMoment(input) ? +input : +moment(input);
	                return inputMs < +this.clone().startOf(units);
	            }
	        },

	        isBefore: function (input, units) {
	            var inputMs;
	            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	            if (units === 'millisecond') {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this < +input;
	            } else {
	                inputMs = moment.isMoment(input) ? +input : +moment(input);
	                return +this.clone().endOf(units) < inputMs;
	            }
	        },

	        isBetween: function (from, to, units) {
	            return this.isAfter(from, units) && this.isBefore(to, units);
	        },

	        isSame: function (input, units) {
	            var inputMs;
	            units = normalizeUnits(units || 'millisecond');
	            if (units === 'millisecond') {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this === +input;
	            } else {
	                inputMs = +moment(input);
	                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
	            }
	        },

	        min: deprecate(
	                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	                 function (other) {
	                     other = moment.apply(null, arguments);
	                     return other < this ? this : other;
	                 }
	         ),

	        max: deprecate(
	                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	                function (other) {
	                    other = moment.apply(null, arguments);
	                    return other > this ? this : other;
	                }
	        ),

	        zone : deprecate(
	                'moment().zone is deprecated, use moment().utcOffset instead. ' +
	                'https://github.com/moment/moment/issues/1779',
	                function (input, keepLocalTime) {
	                    if (input != null) {
	                        if (typeof input !== 'string') {
	                            input = -input;
	                        }

	                        this.utcOffset(input, keepLocalTime);

	                        return this;
	                    } else {
	                        return -this.utcOffset();
	                    }
	                }
	        ),

	        // keepLocalTime = true means only change the timezone, without
	        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	        // +0200, so we adjust the time as needed, to be valid.
	        //
	        // Keeping the time actually adds/subtracts (one hour)
	        // from the actual represented time. That is why we call updateOffset
	        // a second time. In case it wants us to change the offset again
	        // _changeInProgress == true case, then we have to adjust, because
	        // there is no such time in the given timezone.
	        utcOffset : function (input, keepLocalTime) {
	            var offset = this._offset || 0,
	                localAdjust;
	            if (input != null) {
	                if (typeof input === 'string') {
	                    input = utcOffsetFromString(input);
	                }
	                if (Math.abs(input) < 16) {
	                    input = input * 60;
	                }
	                if (!this._isUTC && keepLocalTime) {
	                    localAdjust = this._dateUtcOffset();
	                }
	                this._offset = input;
	                this._isUTC = true;
	                if (localAdjust != null) {
	                    this.add(localAdjust, 'm');
	                }
	                if (offset !== input) {
	                    if (!keepLocalTime || this._changeInProgress) {
	                        addOrSubtractDurationFromMoment(this,
	                                moment.duration(input - offset, 'm'), 1, false);
	                    } else if (!this._changeInProgress) {
	                        this._changeInProgress = true;
	                        moment.updateOffset(this, true);
	                        this._changeInProgress = null;
	                    }
	                }

	                return this;
	            } else {
	                return this._isUTC ? offset : this._dateUtcOffset();
	            }
	        },

	        isLocal : function () {
	            return !this._isUTC;
	        },

	        isUtcOffset : function () {
	            return this._isUTC;
	        },

	        isUtc : function () {
	            return this._isUTC && this._offset === 0;
	        },

	        zoneAbbr : function () {
	            return this._isUTC ? 'UTC' : '';
	        },

	        zoneName : function () {
	            return this._isUTC ? 'Coordinated Universal Time' : '';
	        },

	        parseZone : function () {
	            if (this._tzm) {
	                this.utcOffset(this._tzm);
	            } else if (typeof this._i === 'string') {
	                this.utcOffset(utcOffsetFromString(this._i));
	            }
	            return this;
	        },

	        hasAlignedHourOffset : function (input) {
	            if (!input) {
	                input = 0;
	            }
	            else {
	                input = moment(input).utcOffset();
	            }

	            return (this.utcOffset() - input) % 60 === 0;
	        },

	        daysInMonth : function () {
	            return daysInMonth(this.year(), this.month());
	        },

	        dayOfYear : function (input) {
	            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
	            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	        },

	        quarter : function (input) {
	            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	        },

	        weekYear : function (input) {
	            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
	            return input == null ? year : this.add((input - year), 'y');
	        },

	        isoWeekYear : function (input) {
	            var year = weekOfYear(this, 1, 4).year;
	            return input == null ? year : this.add((input - year), 'y');
	        },

	        week : function (input) {
	            var week = this.localeData().week(this);
	            return input == null ? week : this.add((input - week) * 7, 'd');
	        },

	        isoWeek : function (input) {
	            var week = weekOfYear(this, 1, 4).week;
	            return input == null ? week : this.add((input - week) * 7, 'd');
	        },

	        weekday : function (input) {
	            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	            return input == null ? weekday : this.add(input - weekday, 'd');
	        },

	        isoWeekday : function (input) {
	            // behaves the same as moment#day except
	            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	            // as a setter, sunday should belong to the previous week.
	            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	        },

	        isoWeeksInYear : function () {
	            return weeksInYear(this.year(), 1, 4);
	        },

	        weeksInYear : function () {
	            var weekInfo = this.localeData()._week;
	            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	        },

	        get : function (units) {
	            units = normalizeUnits(units);
	            return this[units]();
	        },

	        set : function (units, value) {
	            var unit;
	            if (typeof units === 'object') {
	                for (unit in units) {
	                    this.set(unit, units[unit]);
	                }
	            }
	            else {
	                units = normalizeUnits(units);
	                if (typeof this[units] === 'function') {
	                    this[units](value);
	                }
	            }
	            return this;
	        },

	        // If passed a locale key, it will set the locale for this
	        // instance.  Otherwise, it will return the locale configuration
	        // variables for this instance.
	        locale : function (key) {
	            var newLocaleData;

	            if (key === undefined) {
	                return this._locale._abbr;
	            } else {
	                newLocaleData = moment.localeData(key);
	                if (newLocaleData != null) {
	                    this._locale = newLocaleData;
	                }
	                return this;
	            }
	        },

	        lang : deprecate(
	            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	            function (key) {
	                if (key === undefined) {
	                    return this.localeData();
	                } else {
	                    return this.locale(key);
	                }
	            }
	        ),

	        localeData : function () {
	            return this._locale;
	        },

	        _dateUtcOffset : function () {
	            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	            // https://github.com/moment/moment/pull/1871
	            return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
	        }

	    });

	    function rawMonthSetter(mom, value) {
	        var dayOfMonth;

	        // TODO: Move this out of here!
	        if (typeof value === 'string') {
	            value = mom.localeData().monthsParse(value);
	            // TODO: Another silent failure?
	            if (typeof value !== 'number') {
	                return mom;
	            }
	        }

	        dayOfMonth = Math.min(mom.date(),
	                daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }

	    function rawGetter(mom, unit) {
	        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
	    }

	    function rawSetter(mom, unit, value) {
	        if (unit === 'Month') {
	            return rawMonthSetter(mom, value);
	        } else {
	            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }

	    function makeAccessor(unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                rawSetter(this, unit, value);
	                moment.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return rawGetter(this, unit);
	            }
	        };
	    }

	    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
	    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
	    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
	    // moment.fn.month is defined separately
	    moment.fn.date = makeAccessor('Date', true);
	    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
	    moment.fn.year = makeAccessor('FullYear', true);
	    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

	    // add plural methods
	    moment.fn.days = moment.fn.day;
	    moment.fn.months = moment.fn.month;
	    moment.fn.weeks = moment.fn.week;
	    moment.fn.isoWeeks = moment.fn.isoWeek;
	    moment.fn.quarters = moment.fn.quarter;

	    // add aliased format methods
	    moment.fn.toJSON = moment.fn.toISOString;

	    // alias isUtc for dev-friendliness
	    moment.fn.isUTC = moment.fn.isUtc;

	    /************************************
	        Duration Prototype
	    ************************************/


	    function daysToYears (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        return days * 400 / 146097;
	    }

	    function yearsToDays (years) {
	        // years * 365 + absRound(years / 4) -
	        //     absRound(years / 100) + absRound(years / 400);
	        return years * 146097 / 400;
	    }

	    extend(moment.duration.fn = Duration.prototype, {

	        _bubble : function () {
	            var milliseconds = this._milliseconds,
	                days = this._days,
	                months = this._months,
	                data = this._data,
	                seconds, minutes, hours, years = 0;

	            // The following code bubbles up values, see the tests for
	            // examples of what that means.
	            data.milliseconds = milliseconds % 1000;

	            seconds = absRound(milliseconds / 1000);
	            data.seconds = seconds % 60;

	            minutes = absRound(seconds / 60);
	            data.minutes = minutes % 60;

	            hours = absRound(minutes / 60);
	            data.hours = hours % 24;

	            days += absRound(hours / 24);

	            // Accurately convert days to years, assume start from year 0.
	            years = absRound(daysToYears(days));
	            days -= absRound(yearsToDays(years));

	            // 30 days to a month
	            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
	            months += absRound(days / 30);
	            days %= 30;

	            // 12 months -> 1 year
	            years += absRound(months / 12);
	            months %= 12;

	            data.days = days;
	            data.months = months;
	            data.years = years;
	        },

	        abs : function () {
	            this._milliseconds = Math.abs(this._milliseconds);
	            this._days = Math.abs(this._days);
	            this._months = Math.abs(this._months);

	            this._data.milliseconds = Math.abs(this._data.milliseconds);
	            this._data.seconds = Math.abs(this._data.seconds);
	            this._data.minutes = Math.abs(this._data.minutes);
	            this._data.hours = Math.abs(this._data.hours);
	            this._data.months = Math.abs(this._data.months);
	            this._data.years = Math.abs(this._data.years);

	            return this;
	        },

	        weeks : function () {
	            return absRound(this.days() / 7);
	        },

	        valueOf : function () {
	            return this._milliseconds +
	              this._days * 864e5 +
	              (this._months % 12) * 2592e6 +
	              toInt(this._months / 12) * 31536e6;
	        },

	        humanize : function (withSuffix) {
	            var output = relativeTime(this, !withSuffix, this.localeData());

	            if (withSuffix) {
	                output = this.localeData().pastFuture(+this, output);
	            }

	            return this.localeData().postformat(output);
	        },

	        add : function (input, val) {
	            // supports only 2.0-style add(1, 's') or add(moment)
	            var dur = moment.duration(input, val);

	            this._milliseconds += dur._milliseconds;
	            this._days += dur._days;
	            this._months += dur._months;

	            this._bubble();

	            return this;
	        },

	        subtract : function (input, val) {
	            var dur = moment.duration(input, val);

	            this._milliseconds -= dur._milliseconds;
	            this._days -= dur._days;
	            this._months -= dur._months;

	            this._bubble();

	            return this;
	        },

	        get : function (units) {
	            units = normalizeUnits(units);
	            return this[units.toLowerCase() + 's']();
	        },

	        as : function (units) {
	            var days, months;
	            units = normalizeUnits(units);

	            if (units === 'month' || units === 'year') {
	                days = this._days + this._milliseconds / 864e5;
	                months = this._months + daysToYears(days) * 12;
	                return units === 'month' ? months : months / 12;
	            } else {
	                // handle milliseconds separately because of floating point math errors (issue #1867)
	                days = this._days + Math.round(yearsToDays(this._months / 12));
	                switch (units) {
	                    case 'week': return days / 7 + this._milliseconds / 6048e5;
	                    case 'day': return days + this._milliseconds / 864e5;
	                    case 'hour': return days * 24 + this._milliseconds / 36e5;
	                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
	                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
	                    // Math.floor prevents floating point math errors here
	                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
	                    default: throw new Error('Unknown unit ' + units);
	                }
	            }
	        },

	        lang : moment.fn.lang,
	        locale : moment.fn.locale,

	        toIsoString : deprecate(
	            'toIsoString() is deprecated. Please use toISOString() instead ' +
	            '(notice the capitals)',
	            function () {
	                return this.toISOString();
	            }
	        ),

	        toISOString : function () {
	            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	            var years = Math.abs(this.years()),
	                months = Math.abs(this.months()),
	                days = Math.abs(this.days()),
	                hours = Math.abs(this.hours()),
	                minutes = Math.abs(this.minutes()),
	                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

	            if (!this.asSeconds()) {
	                // this is the same as C#'s (Noda) and python (isodate)...
	                // but not other JS (goog.date)
	                return 'P0D';
	            }

	            return (this.asSeconds() < 0 ? '-' : '') +
	                'P' +
	                (years ? years + 'Y' : '') +
	                (months ? months + 'M' : '') +
	                (days ? days + 'D' : '') +
	                ((hours || minutes || seconds) ? 'T' : '') +
	                (hours ? hours + 'H' : '') +
	                (minutes ? minutes + 'M' : '') +
	                (seconds ? seconds + 'S' : '');
	        },

	        localeData : function () {
	            return this._locale;
	        },

	        toJSON : function () {
	            return this.toISOString();
	        }
	    });

	    moment.duration.fn.toString = moment.duration.fn.toISOString;

	    function makeDurationGetter(name) {
	        moment.duration.fn[name] = function () {
	            return this._data[name];
	        };
	    }

	    for (i in unitMillisecondFactors) {
	        if (hasOwnProp(unitMillisecondFactors, i)) {
	            makeDurationGetter(i.toLowerCase());
	        }
	    }

	    moment.duration.fn.asMilliseconds = function () {
	        return this.as('ms');
	    };
	    moment.duration.fn.asSeconds = function () {
	        return this.as('s');
	    };
	    moment.duration.fn.asMinutes = function () {
	        return this.as('m');
	    };
	    moment.duration.fn.asHours = function () {
	        return this.as('h');
	    };
	    moment.duration.fn.asDays = function () {
	        return this.as('d');
	    };
	    moment.duration.fn.asWeeks = function () {
	        return this.as('weeks');
	    };
	    moment.duration.fn.asMonths = function () {
	        return this.as('M');
	    };
	    moment.duration.fn.asYears = function () {
	        return this.as('y');
	    };

	    /************************************
	        Default Locale
	    ************************************/


	    // Set default locale, other locale will inherit from English.
	    moment.locale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    /* EMBED_LOCALES */

	    /************************************
	        Exposing Moment
	    ************************************/

	    function makeGlobal(shouldDeprecate) {
	        /*global ender:false */
	        if (typeof ender !== 'undefined') {
	            return;
	        }
	        oldGlobalMoment = globalScope.moment;
	        if (shouldDeprecate) {
	            globalScope.moment = deprecate(
	                    'Accessing Moment through the global scope is ' +
	                    'deprecated, and will be removed in an upcoming ' +
	                    'release.',
	                    moment);
	        } else {
	            globalScope.moment = moment;
	        }
	    }

	    // CommonJS module is defined
	    if (hasModule) {
	        module.exports = moment;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	            if (module.config && module.config() && module.config().noGlobal === true) {
	                // release the global variable
	                globalScope.moment = oldGlobalMoment;
	            }

	            return moment;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        makeGlobal(true);
	    } else {
	        makeGlobal();
	    }
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(143)(module)))

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 145,
		"./af.js": 145,
		"./ar": 149,
		"./ar-ma": 146,
		"./ar-ma.js": 146,
		"./ar-sa": 147,
		"./ar-sa.js": 147,
		"./ar-tn": 148,
		"./ar-tn.js": 148,
		"./ar.js": 149,
		"./az": 150,
		"./az.js": 150,
		"./be": 151,
		"./be.js": 151,
		"./bg": 152,
		"./bg.js": 152,
		"./bn": 153,
		"./bn.js": 153,
		"./bo": 154,
		"./bo.js": 154,
		"./br": 155,
		"./br.js": 155,
		"./bs": 156,
		"./bs.js": 156,
		"./ca": 157,
		"./ca.js": 157,
		"./cs": 158,
		"./cs.js": 158,
		"./cv": 159,
		"./cv.js": 159,
		"./cy": 160,
		"./cy.js": 160,
		"./da": 161,
		"./da.js": 161,
		"./de": 163,
		"./de-at": 162,
		"./de-at.js": 162,
		"./de.js": 163,
		"./el": 164,
		"./el.js": 164,
		"./en-au": 165,
		"./en-au.js": 165,
		"./en-ca": 166,
		"./en-ca.js": 166,
		"./en-gb": 167,
		"./en-gb.js": 167,
		"./eo": 168,
		"./eo.js": 168,
		"./es": 169,
		"./es.js": 169,
		"./et": 170,
		"./et.js": 170,
		"./eu": 171,
		"./eu.js": 171,
		"./fa": 172,
		"./fa.js": 172,
		"./fi": 173,
		"./fi.js": 173,
		"./fo": 174,
		"./fo.js": 174,
		"./fr": 176,
		"./fr-ca": 175,
		"./fr-ca.js": 175,
		"./fr.js": 176,
		"./fy": 177,
		"./fy.js": 177,
		"./gl": 178,
		"./gl.js": 178,
		"./he": 179,
		"./he.js": 179,
		"./hi": 180,
		"./hi.js": 180,
		"./hr": 181,
		"./hr.js": 181,
		"./hu": 182,
		"./hu.js": 182,
		"./hy-am": 183,
		"./hy-am.js": 183,
		"./id": 184,
		"./id.js": 184,
		"./is": 185,
		"./is.js": 185,
		"./it": 186,
		"./it.js": 186,
		"./ja": 187,
		"./ja.js": 187,
		"./ka": 188,
		"./ka.js": 188,
		"./km": 189,
		"./km.js": 189,
		"./ko": 190,
		"./ko.js": 190,
		"./lb": 191,
		"./lb.js": 191,
		"./lt": 192,
		"./lt.js": 192,
		"./lv": 193,
		"./lv.js": 193,
		"./mk": 194,
		"./mk.js": 194,
		"./ml": 195,
		"./ml.js": 195,
		"./mr": 196,
		"./mr.js": 196,
		"./ms-my": 197,
		"./ms-my.js": 197,
		"./my": 198,
		"./my.js": 198,
		"./nb": 199,
		"./nb.js": 199,
		"./ne": 200,
		"./ne.js": 200,
		"./nl": 201,
		"./nl.js": 201,
		"./nn": 202,
		"./nn.js": 202,
		"./pl": 203,
		"./pl.js": 203,
		"./pt": 205,
		"./pt-br": 204,
		"./pt-br.js": 204,
		"./pt.js": 205,
		"./ro": 206,
		"./ro.js": 206,
		"./ru": 207,
		"./ru.js": 207,
		"./sk": 208,
		"./sk.js": 208,
		"./sl": 209,
		"./sl.js": 209,
		"./sq": 210,
		"./sq.js": 210,
		"./sr": 212,
		"./sr-cyrl": 211,
		"./sr-cyrl.js": 211,
		"./sr.js": 212,
		"./sv": 213,
		"./sv.js": 213,
		"./ta": 214,
		"./ta.js": 214,
		"./th": 215,
		"./th.js": 215,
		"./tl-ph": 216,
		"./tl-ph.js": 216,
		"./tr": 217,
		"./tr.js": 217,
		"./tzm": 219,
		"./tzm-latn": 218,
		"./tzm-latn.js": 218,
		"./tzm.js": 219,
		"./uk": 220,
		"./uk.js": 220,
		"./uz": 221,
		"./uz.js": 221,
		"./vi": 222,
		"./vi.js": 222,
		"./zh-cn": 223,
		"./zh-cn.js": 223,
		"./zh-tw": 224,
		"./zh-tw.js": 224
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 144;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : afrikaans (af)
	// author : Werner Mollentze : https://github.com/wernerm

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('af', {
	        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM : function (input) {
	            return /^nm$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Vandag om] LT',
	            nextDay : '[Môre om] LT',
	            nextWeek : 'dddd [om] LT',
	            lastDay : '[Gister om] LT',
	            lastWeek : '[Laas] dddd [om] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'oor %s',
	            past : '%s gelede',
	            s : '\'n paar sekondes',
	            m : '\'n minuut',
	            mm : '%d minute',
	            h : '\'n uur',
	            hh : '%d ure',
	            d : '\'n dag',
	            dd : '%d dae',
	            M : '\'n maand',
	            MM : '%d maande',
	            y : '\'n jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week : {
	            dow : 1, // Maandag is die eerste dag van die week.
	            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        }
	    });
	}));


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Moroccan Arabic (ar-ma)
	// author : ElFadili Yassine : https://github.com/ElFadiliY
	// author : Abdel Said : https://github.com/abdelsaid

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ar-ma', {
	        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Arabic Saudi Arabia (ar-sa)
	// author : Suhail Alkowaileet : https://github.com/xsoh

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    };

	    return moment.defineLocale('ar-sa', {
	        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        preparse: function (string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale  : Tunisian Arabic (ar-tn)

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'LT:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// Locale: Arabic (ar)
	// Author: Abdel Said: https://github.com/abdelsaid
	// Changes in months, weekdays: Ahmed Elkhatib
	// Native plural forms: forabi https://github.com/forabi

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    }, pluralForm = function (n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    }, plurals = {
	        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    }, pluralize = function (u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    }, months = [
	        'كانون الثاني يناير',
	        'شباط فبراير',
	        'آذار مارس',
	        'نيسان أبريل',
	        'أيار مايو',
	        'حزيران يونيو',
	        'تموز يوليو',
	        'آب أغسطس',
	        'أيلول سبتمبر',
	        'تشرين الأول أكتوبر',
	        'تشرين الثاني نوفمبر',
	        'كانون الأول ديسمبر'
	    ];

	    return moment.defineLocale('ar', {
	        months : months,
	        monthsShort : months,
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'بعد %s',
	            past : 'منذ %s',
	            s : pluralize('s'),
	            m : pluralize('m'),
	            mm : pluralize('m'),
	            h : pluralize('h'),
	            hh : pluralize('h'),
	            d : pluralize('d'),
	            dd : pluralize('d'),
	            M : pluralize('M'),
	            MM : pluralize('M'),
	            y : pluralize('y'),
	            yy : pluralize('y')
	        },
	        preparse: function (string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : azerbaijani (az)
	// author : topchiyev : https://github.com/topchiyev

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',

	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',

	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',

	        6: '-ncı',

	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',

	        60: '-ıncı',
	        90: '-ıncı'
	    };
	    return moment.defineLocale('az', {
	        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[sabah saat] LT',
	            nextWeek : '[gələn həftə] dddd [saat] LT',
	            lastDay : '[dünən] LT',
	            lastWeek : '[keçən həftə] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s əvvəl',
	            s : 'birneçə saniyyə',
	            m : 'bir dəqiqə',
	            mm : '%d dəqiqə',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir il',
	            yy : '%d il'
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM : function (input) {
	            return /^(gündüz|axşam)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;

	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : belarusian (be)
	// author : Dmitry Demidov : https://github.com/demidov91
	// author: Praleska: http://praleska.pro/
	// Author : Menelion Elensúle : https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            'dd': 'дзень_дні_дзён',
	            'MM': 'месяц_месяцы_месяцаў',
	            'yy': 'год_гады_гадоў'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
	            'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	            'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
	        },

	        nounCase = (/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/).test(format) ?
	            'accusative' :
	            'nominative';

	        return weekdays[nounCase][m.day()];
	    }

	    return moment.defineLocale('be', {
	        months : monthsCaseReplace,
	        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., LT',
	            LLLL : 'dddd, D MMMM YYYY г., LT'
	        },
	        calendar : {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function () {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return '[У мінулую] dddd [ў] LT';
	                case 1:
	                case 2:
	                case 4:
	                    return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'праз %s',
	            past : '%s таму',
	            s : 'некалькі секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithPlural,
	            hh : relativeTimeWithPlural,
	            d : 'дзень',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM : function (input) {
	            return /^(дня|вечара)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },

	        ordinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	            case 'D':
	                return number + '-га';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : bulgarian (bg)
	// author : Krasen Borisov : https://github.com/kraz

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('bg', {
	        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Днес в] LT',
	            nextDay : '[Утре в] LT',
	            nextWeek : 'dddd [в] LT',
	            lastDay : '[Вчера в] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[В изминалата] dddd [в] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[В изминалия] dddd [в] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'след %s',
	            past : 'преди %s',
	            s : 'няколко секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дни',
	            M : 'месец',
	            MM : '%d месеца',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Bengali (bn)
	// author : Kaushik Gandhi : https://github.com/kaushikgandhi

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '১',
	        '2': '২',
	        '3': '৩',
	        '4': '৪',
	        '5': '৫',
	        '6': '৬',
	        '7': '৭',
	        '8': '৮',
	        '9': '৯',
	        '0': '০'
	    },
	    numberMap = {
	        '১': '1',
	        '২': '2',
	        '৩': '3',
	        '৪': '4',
	        '৫': '5',
	        '৬': '6',
	        '৭': '7',
	        '৮': '8',
	        '৯': '9',
	        '০': '0'
	    };

	    return moment.defineLocale('bn', {
	        months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	        monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
	        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
	        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
	        weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm সময়',
	            LTS : 'A h:mm:ss সময়',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[আজ] LT',
	            nextDay : '[আগামীকাল] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[গতকাল] LT',
	            lastWeek : '[গত] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s পরে',
	            past : '%s আগে',
	            s : 'কএক সেকেন্ড',
	            m : 'এক মিনিট',
	            mm : '%d মিনিট',
	            h : 'এক ঘন্টা',
	            hh : '%d ঘন্টা',
	            d : 'এক দিন',
	            dd : '%d দিন',
	            M : 'এক মাস',
	            MM : '%d মাস',
	            y : 'এক বছর',
	            yy : '%d বছর'
	        },
	        preparse: function (string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
	        isPM: function (input) {
	            return /^(দুপুর|বিকেল|রাত)$/.test(input);
	        },
	        //Bengali is a vast language its spoken
	        //in different forms in various parts of the world.
	        //I have just generalized with most common one used
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'শকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকেল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : tibetan (bo)
	// author : Thupten N. Chakrishar : https://github.com/vajradog

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '༡',
	        '2': '༢',
	        '3': '༣',
	        '4': '༤',
	        '5': '༥',
	        '6': '༦',
	        '7': '༧',
	        '8': '༨',
	        '9': '༩',
	        '0': '༠'
	    },
	    numberMap = {
	        '༡': '1',
	        '༢': '2',
	        '༣': '3',
	        '༤': '4',
	        '༥': '5',
	        '༦': '6',
	        '༧': '7',
	        '༨': '8',
	        '༩': '9',
	        '༠': '0'
	    };

	    return moment.defineLocale('bo', {
	        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[དི་རིང] LT',
	            nextDay : '[སང་ཉིན] LT',
	            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay : '[ཁ་སང] LT',
	            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ལ་',
	            past : '%s སྔན་ལ',
	            s : 'ལམ་སང',
	            m : 'སྐར་མ་གཅིག',
	            mm : '%d སྐར་མ',
	            h : 'ཆུ་ཚོད་གཅིག',
	            hh : '%d ཆུ་ཚོད',
	            d : 'ཉིན་གཅིག',
	            dd : '%d ཉིན་',
	            M : 'ཟླ་བ་གཅིག',
	            MM : '%d ཟླ་བ',
	            y : 'ལོ་གཅིག',
	            yy : '%d ལོ'
	        },
	        preparse: function (string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        isPM: function (input) {
	            return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : breton (br)
	// author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'munutenn',
	            'MM': 'miz',
	            'dd': 'devezh'
	        };
	        return number + ' ' + mutation(format[key], number);
	    }

	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	        case 1:
	        case 3:
	        case 4:
	        case 5:
	        case 9:
	            return number + ' bloaz';
	        default:
	            return number + ' vloaz';
	        }
	    }

	    function lastNumber(number) {
	        if (number > 9) {
	            return lastNumber(number % 10);
	        }
	        return number;
	    }

	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }

	    function softMutation(text) {
	        var mutationTable = {
	            'm': 'v',
	            'b': 'v',
	            'd': 'z'
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }

	    return moment.defineLocale('br', {
	        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h[e]mm A',
	            LTS : 'h[e]mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D [a viz] MMMM YYYY',
	            LLL : 'D [a viz] MMMM YYYY LT',
	            LLLL : 'dddd, D [a viz] MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Hiziv da] LT',
	            nextDay : '[Warc\'hoazh da] LT',
	            nextWeek : 'dddd [da] LT',
	            lastDay : '[Dec\'h da] LT',
	            lastWeek : 'dddd [paset da] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'a-benn %s',
	            past : '%s \'zo',
	            s : 'un nebeud segondennoù',
	            m : 'ur vunutenn',
	            mm : relativeTimeWithMutation,
	            h : 'un eur',
	            hh : '%d eur',
	            d : 'un devezh',
	            dd : relativeTimeWithMutation,
	            M : 'ur miz',
	            MM : relativeTimeWithMutation,
	            y : 'ur bloaz',
	            yy : specialMutationForYears
	        },
	        ordinalParse: /\d{1,2}(añ|vet)/,
	        ordinal : function (number) {
	            var output = (number === 1) ? 'añ' : 'vet';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : bosnian (bs)
	// author : Nedim Cholich : https://github.com/frontyard
	// based on (hr) translation by Bojan Marković

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	        }
	    }

	    return moment.defineLocale('bs', {
	        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',

	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : catalan (ca)
	// author : Juan G. Hurtado : https://github.com/juanghurtado

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ca', {
	        months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextDay : function () {
	                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastDay : function () {
	                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'fa %s',
	            s : 'uns segons',
	            m : 'un minut',
	            mm : '%d minuts',
	            h : 'una hora',
	            hh : '%d hores',
	            d : 'un dia',
	            dd : '%d dies',
	            M : 'un mes',
	            MM : '%d mesos',
	            y : 'un any',
	            yy : '%d anys'
	        },
	        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal : function (number, period) {
	            var output = (number === 1) ? 'r' :
	                (number === 2) ? 'n' :
	                (number === 3) ? 'r' :
	                (number === 4) ? 't' : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : czech (cs)
	// author : petrbela : https://github.com/petrbela

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

	    function plural(n) {
	        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minuty' : 'minut');
	            } else {
	                return result + 'minutami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodin');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dny' : 'dní');
	            } else {
	                return result + 'dny';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'měsíce' : 'měsíců');
	            } else {
	                return result + 'měsíci';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'let');
	            } else {
	                return result + 'lety';
	            }
	            break;
	        }
	    }

	    return moment.defineLocale('cs', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParse : (function (months, monthsShort) {
	            var i, _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        }(months, monthsShort)),
	        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v neděli v] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [v] LT';
	                case 3:
	                    return '[ve středu v] LT';
	                case 4:
	                    return '[ve čtvrtek v] LT';
	                case 5:
	                    return '[v pátek v] LT';
	                case 6:
	                    return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[minulou neděli v] LT';
	                case 1:
	                case 2:
	                    return '[minulé] dddd [v] LT';
	                case 3:
	                    return '[minulou středu v] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [v] LT';
	                case 6:
	                    return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'před %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse : /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : chuvash (cv)
	// author : Anatoly Mironov : https://github.com/mirontoli

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('cv', {
	        months : 'кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав'.split('_'),
	        monthsShort : 'кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш'.split('_'),
	        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун'.split('_'),
	        weekdaysShort : 'выр_тун_ытл_юн_кĕç_эрн_шăм'.split('_'),
	        weekdaysMin : 'вр_тн_ыт_юн_кç_эр_шм'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]',
	            LLL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT',
	            LLLL : 'dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT'
	        },
	        calendar : {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ĕнер] LT [сехетре]',
	            nextWeek: '[Çитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнĕ] dddd LT [сехетре]',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (output) {
	                var affix = /сехет$/i.exec(output) ? 'рен' : /çул$/i.exec(output) ? 'тан' : 'ран';
	                return output + affix;
	            },
	            past : '%s каялла',
	            s : 'пĕр-ик çеккунт',
	            m : 'пĕр минут',
	            mm : '%d минут',
	            h : 'пĕр сехет',
	            hh : '%d сехет',
	            d : 'пĕр кун',
	            dd : '%d кун',
	            M : 'пĕр уйăх',
	            MM : '%d уйăх',
	            y : 'пĕр çул',
	            yy : '%d çул'
	        },
	        ordinalParse: /\d{1,2}-мĕш/,
	        ordinal : '%d-мĕш',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Welsh (cy)
	// author : Robert Allen

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'LT:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd, D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd'
	        },
	        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function (number) {
	            var b = number,
	                output = '',
	                lookup = [
	                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	                ];

	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                    output = 'ain';
	                }
	            } else if (b > 0) {
	                output = lookup[b];
	            }

	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : danish (da)
	// author : Ulrik Nielsen : https://github.com/mrbase

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('da', {
	        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd [d.] D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[I dag kl.] LT',
	            nextDay : '[I morgen kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[I går kl.] LT',
	            lastWeek : '[sidste] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'få sekunder',
	            m : 'et minut',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dage',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'et år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : austrian german (de-at)
	// author : lluchs : https://github.com/lluchs
	// author: Menelion Elensúle: https://github.com/Oire
	// author : Martin Groller : https://github.com/MadMG

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    return moment.defineLocale('de-at', {
	        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[Morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[Gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : german (de)
	// author : lluchs : https://github.com/lluchs
	// author: Menelion Elensúle: https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    return moment.defineLocale('de', {
	        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[Morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[Gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : modern greek (el)
	// author : Aggelos Karalias : https://github.com/mehiel

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('el', {
	        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	        months : function (momentToFormat, format) {
	            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM : function (input) {
	            return ((input + '').toLowerCase()[0] === 'μ');
	        },
	        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendarEl : {
	            sameDay : '[Σήμερα {}] LT',
	            nextDay : '[Αύριο {}] LT',
	            nextWeek : 'dddd [{}] LT',
	            lastDay : '[Χθες {}] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        calendar : function (key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();

	            if (typeof output === 'function') {
	                output = output.apply(mom);
	            }

	            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
	        },
	        relativeTime : {
	            future : 'σε %s',
	            past : '%s πριν',
	            s : 'λίγα δευτερόλεπτα',
	            m : 'ένα λεπτό',
	            mm : '%d λεπτά',
	            h : 'μία ώρα',
	            hh : '%d ώρες',
	            d : 'μία μέρα',
	            dd : '%d μέρες',
	            M : 'ένας μήνας',
	            MM : '%d μήνες',
	            y : 'ένας χρόνος',
	            yy : '%d χρόνια'
	        },
	        ordinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : australian english (en-au)

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('en-au', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : canadian english (en-ca)
	// author : Jonathan Abourbih : https://github.com/jonbca

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('en-ca', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM, YYYY',
	            LLL : 'D MMMM, YYYY LT',
	            LLLL : 'dddd, D MMMM, YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	}));


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : great britain english (en-gb)
	// author : Chris Gedrim : https://github.com/chrisgedrim

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('en-gb', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : esperanto (eo)
	// author : Colin Dean : https://github.com/colindean
	// komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('eo', {
	        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	        weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	        weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D[-an de] MMMM, YYYY',
	            LLL : 'D[-an de] MMMM, YYYY LT',
	            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY LT'
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function (input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar : {
	            sameDay : '[Hodiaŭ je] LT',
	            nextDay : '[Morgaŭ je] LT',
	            nextWeek : 'dddd [je] LT',
	            lastDay : '[Hieraŭ je] LT',
	            lastWeek : '[pasinta] dddd [je] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'je %s',
	            past : 'antaŭ %s',
	            s : 'sekundoj',
	            m : 'minuto',
	            mm : '%d minutoj',
	            h : 'horo',
	            hh : '%d horoj',
	            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
	            dd : '%d tagoj',
	            M : 'monato',
	            MM : '%d monatoj',
	            y : 'jaro',
	            yy : '%d jaroj'
	        },
	        ordinalParse: /\d{1,2}a/,
	        ordinal : '%da',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : spanish (es)
	// author : Julio Napurí : https://github.com/julionc

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	    return moment.defineLocale('es', {
	        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY LT',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastDay : function () {
	                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'hace %s',
	            s : 'unos segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'una hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un año',
	            yy : '%d años'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : estonian (et)
	// author : Henry Kehlmann : https://github.com/madhenry
	// improvements : Illimar Tambek : https://github.com/ragulka

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            'm' : ['ühe minuti', 'üks minut'],
	            'mm': [number + ' minuti', number + ' minutit'],
	            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
	            'hh': [number + ' tunni', number + ' tundi'],
	            'd' : ['ühe päeva', 'üks päev'],
	            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
	            'MM': [number + ' kuu', number + ' kuud'],
	            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
	            'yy': [number + ' aasta', number + ' aastat']
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }

	    return moment.defineLocale('et', {
	        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat : {
	            LT   : 'H:mm',
	            LTS : 'LT:ss',
	            L    : 'DD.MM.YYYY',
	            LL   : 'D. MMMM YYYY',
	            LLL  : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[Täna,] LT',
	            nextDay  : '[Homme,] LT',
	            nextWeek : '[Järgmine] dddd LT',
	            lastDay  : '[Eile,] LT',
	            lastWeek : '[Eelmine] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s pärast',
	            past   : '%s tagasi',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : '%d päeva',
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : euskara (eu)
	// author : Eneko Illarramendi : https://github.com/eillarra

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('eu', {
	        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY[ko] MMMM[ren] D[a]',
	            LLL : 'YYYY[ko] MMMM[ren] D[a] LT',
	            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] LT',
	            l : 'YYYY-M-D',
	            ll : 'YYYY[ko] MMM D[a]',
	            lll : 'YYYY[ko] MMM D[a] LT',
	            llll : 'ddd, YYYY[ko] MMM D[a] LT'
	        },
	        calendar : {
	            sameDay : '[gaur] LT[etan]',
	            nextDay : '[bihar] LT[etan]',
	            nextWeek : 'dddd LT[etan]',
	            lastDay : '[atzo] LT[etan]',
	            lastWeek : '[aurreko] dddd LT[etan]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s barru',
	            past : 'duela %s',
	            s : 'segundo batzuk',
	            m : 'minutu bat',
	            mm : '%d minutu',
	            h : 'ordu bat',
	            hh : '%d ordu',
	            d : 'egun bat',
	            dd : '%d egun',
	            M : 'hilabete bat',
	            MM : '%d hilabete',
	            y : 'urte bat',
	            yy : '%d urte'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Persian (fa)
	// author : Ebrahim Byagowi : https://github.com/ebraminio

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '۱',
	        '2': '۲',
	        '3': '۳',
	        '4': '۴',
	        '5': '۵',
	        '6': '۶',
	        '7': '۷',
	        '8': '۸',
	        '9': '۹',
	        '0': '۰'
	    }, numberMap = {
	        '۱': '1',
	        '۲': '2',
	        '۳': '3',
	        '۴': '4',
	        '۵': '5',
	        '۶': '6',
	        '۷': '7',
	        '۸': '8',
	        '۹': '9',
	        '۰': '0'
	    };

	    return moment.defineLocale('fa', {
	        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function (input) {
	            return /بعد از ظهر/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar : {
	            sameDay : '[امروز ساعت] LT',
	            nextDay : '[فردا ساعت] LT',
	            nextWeek : 'dddd [ساعت] LT',
	            lastDay : '[دیروز ساعت] LT',
	            lastWeek : 'dddd [پیش] [ساعت] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'در %s',
	            past : '%s پیش',
	            s : 'چندین ثانیه',
	            m : 'یک دقیقه',
	            mm : '%d دقیقه',
	            h : 'یک ساعت',
	            hh : '%d ساعت',
	            d : 'یک روز',
	            dd : '%d روز',
	            M : 'یک ماه',
	            MM : '%d ماه',
	            y : 'یک سال',
	            yy : '%d سال'
	        },
	        preparse: function (string) {
	            return string.replace(/[۰-۹]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        ordinalParse: /\d{1,2}م/,
	        ordinal : '%dم',
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : finnish (fi)
	// author : Tarmo Aidantausta : https://github.com/bleadof

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = [
	            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
	            numbersPast[7], numbersPast[8], numbersPast[9]
	        ];

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	        case 's':
	            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	        case 'm':
	            return isFuture ? 'minuutin' : 'minuutti';
	        case 'mm':
	            result = isFuture ? 'minuutin' : 'minuuttia';
	            break;
	        case 'h':
	            return isFuture ? 'tunnin' : 'tunti';
	        case 'hh':
	            result = isFuture ? 'tunnin' : 'tuntia';
	            break;
	        case 'd':
	            return isFuture ? 'päivän' : 'päivä';
	        case 'dd':
	            result = isFuture ? 'päivän' : 'päivää';
	            break;
	        case 'M':
	            return isFuture ? 'kuukauden' : 'kuukausi';
	        case 'MM':
	            result = isFuture ? 'kuukauden' : 'kuukautta';
	            break;
	        case 'y':
	            return isFuture ? 'vuoden' : 'vuosi';
	        case 'yy':
	            result = isFuture ? 'vuoden' : 'vuotta';
	            break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }

	    function verbalNumber(number, isFuture) {
	        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
	    }

	    return moment.defineLocale('fi', {
	        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'Do MMMM[ta] YYYY',
	            LLL : 'Do MMMM[ta] YYYY, [klo] LT',
	            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] LT',
	            l : 'D.M.YYYY',
	            ll : 'Do MMM YYYY',
	            lll : 'Do MMM YYYY, [klo] LT',
	            llll : 'ddd, Do MMM YYYY, [klo] LT'
	        },
	        calendar : {
	            sameDay : '[tänään] [klo] LT',
	            nextDay : '[huomenna] [klo] LT',
	            nextWeek : 'dddd [klo] LT',
	            lastDay : '[eilen] [klo] LT',
	            lastWeek : '[viime] dddd[na] [klo] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s päästä',
	            past : '%s sitten',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : faroese (fo)
	// author : Ragnar Johannesen : https://github.com/ragnar123

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('fo', {
	        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D. MMMM, YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Í dag kl.] LT',
	            nextDay : '[Í morgin kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[Í gjár kl.] LT',
	            lastWeek : '[síðstu] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'um %s',
	            past : '%s síðani',
	            s : 'fá sekund',
	            m : 'ein minutt',
	            mm : '%d minuttir',
	            h : 'ein tími',
	            hh : '%d tímar',
	            d : 'ein dagur',
	            dd : '%d dagar',
	            M : 'ein mánaði',
	            MM : '%d mánaðir',
	            y : 'eitt ár',
	            yy : '%d ár'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : canadian french (fr-ca)
	// author : Jonathan Abourbih : https://github.com/jonbca

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('fr-ca', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : '');
	        }
	    });
	}));


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : french (fr)
	// author : John Fischer : https://github.com/jfroffice

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('fr', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : '');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : frisian (fy)
	// author : Robin van der Vliet : https://github.com/robin0van0der0v

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

	    return moment.defineLocale('fy', {
	        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'oer %s',
	            past : '%s lyn',
	            s : 'in pear sekonden',
	            m : 'ien minút',
	            mm : '%d minuten',
	            h : 'ien oere',
	            hh : '%d oeren',
	            d : 'ien dei',
	            dd : '%d dagen',
	            M : 'ien moanne',
	            MM : '%d moannen',
	            y : 'ien jier',
	            yy : '%d jierren'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : galician (gl)
	// author : Juan G. Hurtado : https://github.com/juanghurtado

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('gl', {
	        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
	        monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
	        weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
	        weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            lastDay : function () {
	                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
	            },
	            lastWeek : function () {
	                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (str) {
	                if (str === 'uns segundos') {
	                    return 'nuns segundos';
	                }
	                return 'en ' + str;
	            },
	            past : 'hai %s',
	            s : 'uns segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'unha hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un ano',
	            yy : '%d anos'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Hebrew (he)
	// author : Tomer Cohen : https://github.com/tomer
	// author : Moshe Simantov : https://github.com/DevelopmentIL
	// author : Tal Ater : https://github.com/TalAter

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('he', {
	        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [ב]MMMM YYYY',
	            LLL : 'D [ב]MMMM YYYY LT',
	            LLLL : 'dddd, D [ב]MMMM YYYY LT',
	            l : 'D/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY LT',
	            llll : 'ddd, D MMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[היום ב־]LT',
	            nextDay : '[מחר ב־]LT',
	            nextWeek : 'dddd [בשעה] LT',
	            lastDay : '[אתמול ב־]LT',
	            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'בעוד %s',
	            past : 'לפני %s',
	            s : 'מספר שניות',
	            m : 'דקה',
	            mm : '%d דקות',
	            h : 'שעה',
	            hh : function (number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d : 'יום',
	            dd : function (number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M : 'חודש',
	            MM : function (number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y : 'שנה',
	            yy : function (number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            }
	        }
	    });
	}));


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : hindi (hi)
	// author : Mayank Singhal : https://github.com/mayanksinghal

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    return moment.defineLocale('hi', {
	        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm बजे',
	            LTS : 'A h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[कल] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[कल] LT',
	            lastWeek : '[पिछले] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s में',
	            past : '%s पहले',
	            s : 'कुछ ही क्षण',
	            m : 'एक मिनट',
	            mm : '%d मिनट',
	            h : 'एक घंटा',
	            hh : '%d घंटे',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महीने',
	            MM : '%d महीने',
	            y : 'एक वर्ष',
	            yy : '%d वर्ष'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : hrvatski (hr)
	// author : Bojan Marković : https://github.com/bmarkovic

	// based on (sl) translation by Robert Sedovšek

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	        }
	    }

	    return moment.defineLocale('hr', {
	        months : 'sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
	        monthsShort : 'sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',

	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : hungarian (hu)
	// author : Adam Brunner : https://github.com/adambrunner

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number,
	            suffix;

	        switch (key) {
	        case 's':
	            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
	        case 'm':
	            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'mm':
	            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'h':
	            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'hh':
	            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'd':
	            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'dd':
	            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'M':
	            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'MM':
	            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'y':
	            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	        case 'yy':
	            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }

	        return '';
	    }

	    function week(isFuture) {
	        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	    }

	    return moment.defineLocale('hu', {
	        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY.MM.DD.',
	            LL : 'YYYY. MMMM D.',
	            LLL : 'YYYY. MMMM D., LT',
	            LLLL : 'YYYY. MMMM D., dddd LT'
	        },
	        meridiemParse: /de|du/i,
	        isPM: function (input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar : {
	            sameDay : '[ma] LT[-kor]',
	            nextDay : '[holnap] LT[-kor]',
	            nextWeek : function () {
	                return week.call(this, true);
	            },
	            lastDay : '[tegnap] LT[-kor]',
	            lastWeek : function () {
	                return week.call(this, false);
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s múlva',
	            past : '%s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Armenian (hy-am)
	// author : Armendarabyan : https://github.com/armendarabyan

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
	            'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function monthsShortCaseReplace(m, format) {
	        var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');

	        return monthsShort[m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');

	        return weekdays[m.day()];
	    }

	    return moment.defineLocale('hy-am', {
	        months : monthsCaseReplace,
	        monthsShort : monthsShortCaseReplace,
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY թ.',
	            LLL : 'D MMMM YYYY թ., LT',
	            LLLL : 'dddd, D MMMM YYYY թ., LT'
	        },
	        calendar : {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function () {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function () {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s հետո',
	            past : '%s առաջ',
	            s : 'մի քանի վայրկյան',
	            m : 'րոպե',
	            mm : '%d րոպե',
	            h : 'ժամ',
	            hh : '%d ժամ',
	            d : 'օր',
	            dd : '%d օր',
	            M : 'ամիս',
	            MM : '%d ամիս',
	            y : 'տարի',
	            yy : '%d տարի'
	        },

	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function (input) {
	            return /^(ցերեկվա|երեկոյան)$/.test(input);
	        },
	        meridiem : function (hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },

	        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'DDD':
	            case 'w':
	            case 'W':
	            case 'DDDo':
	                if (number === 1) {
	                    return number + '-ին';
	                }
	                return number + '-րդ';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Bahasa Indonesia (id)
	// author : Mohammad Satrio Utomo : https://github.com/tyok
	// reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('id', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'LT.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] LT',
	            LLLL : 'dddd, D MMMM YYYY [pukul] LT'
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Besok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kemarin pukul] LT',
	            lastWeek : 'dddd [lalu pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lalu',
	            s : 'beberapa detik',
	            m : 'semenit',
	            mm : '%d menit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : icelandic (is)
	// author : Hinrik Örn Sigurðsson : https://github.com/hinrik

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':
	            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	        case 'm':
	            return withoutSuffix ? 'mínúta' : 'mínútu';
	        case 'mm':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	            } else if (withoutSuffix) {
	                return result + 'mínúta';
	            }
	            return result + 'mínútu';
	        case 'hh':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	            }
	            return result + 'klukkustund';
	        case 'd':
	            if (withoutSuffix) {
	                return 'dagur';
	            }
	            return isFuture ? 'dag' : 'degi';
	        case 'dd':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'dagar';
	                }
	                return result + (isFuture ? 'daga' : 'dögum');
	            } else if (withoutSuffix) {
	                return result + 'dagur';
	            }
	            return result + (isFuture ? 'dag' : 'degi');
	        case 'M':
	            if (withoutSuffix) {
	                return 'mánuður';
	            }
	            return isFuture ? 'mánuð' : 'mánuði';
	        case 'MM':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'mánuðir';
	                }
	                return result + (isFuture ? 'mánuði' : 'mánuðum');
	            } else if (withoutSuffix) {
	                return result + 'mánuður';
	            }
	            return result + (isFuture ? 'mánuð' : 'mánuði');
	        case 'y':
	            return withoutSuffix || isFuture ? 'ár' : 'ári';
	        case 'yy':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	            }
	            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }

	    return moment.defineLocale('is', {
	        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] LT',
	            LLLL : 'dddd, D. MMMM YYYY [kl.] LT'
	        },
	        calendar : {
	            sameDay : '[í dag kl.] LT',
	            nextDay : '[á morgun kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[í gær kl.] LT',
	            lastWeek : '[síðasta] dddd [kl.] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'eftir %s',
	            past : 'fyrir %s síðan',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : 'klukkustund',
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : italian (it)
	// author : Lorenzo : https://github.com/aliem
	// author: Mattia Larentis: https://github.com/nostalgiaz

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('it', {
	        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	        weekdaysMin : 'D_L_Ma_Me_G_V_S'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past : '%s fa',
	            s : 'alcuni secondi',
	            m : 'un minuto',
	            mm : '%d minuti',
	            h : 'un\'ora',
	            hh : '%d ore',
	            d : 'un giorno',
	            dd : '%d giorni',
	            M : 'un mese',
	            MM : '%d mesi',
	            y : 'un anno',
	            yy : '%d anni'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal: '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : japanese (ja)
	// author : LI Long : https://github.com/baryon

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ja', {
	        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat : {
	            LT : 'Ah時m分',
	            LTS : 'LTs秒',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY年M月D日',
	            LLL : 'YYYY年M月D日LT',
	            LLLL : 'YYYY年M月D日LT dddd'
	        },
	        meridiemParse: /午前|午後/i,
	        isPM : function (input) {
	            return input === '午後';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar : {
	            sameDay : '[今日] LT',
	            nextDay : '[明日] LT',
	            nextWeek : '[来週]dddd LT',
	            lastDay : '[昨日] LT',
	            lastWeek : '[前週]dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s後',
	            past : '%s前',
	            s : '数秒',
	            m : '1分',
	            mm : '%d分',
	            h : '1時間',
	            hh : '%d時間',
	            d : '1日',
	            dd : '%d日',
	            M : '1ヶ月',
	            MM : '%dヶ月',
	            y : '1年',
	            yy : '%d年'
	        }
	    });
	}));


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Georgian (ka)
	// author : Irakli Janiashvili : https://github.com/irakli-janiashvili

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	            'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	        },

	        nounCase = (/D[oD] *MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	            'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
	        },

	        nounCase = (/(წინა|შემდეგ)/).test(format) ?
	            'accusative' :
	            'nominative';

	        return weekdays[nounCase][m.day()];
	    }

	    return moment.defineLocale('ka', {
	        months : monthsCaseReplace,
	        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[დღეს] LT[-ზე]',
	            nextDay : '[ხვალ] LT[-ზე]',
	            lastDay : '[გუშინ] LT[-ზე]',
	            nextWeek : '[შემდეგ] dddd LT[-ზე]',
	            lastWeek : '[წინა] dddd LT-ზე',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
	                    s.replace(/ი$/, 'ში') :
	                    s + 'ში';
	            },
	            past : function (s) {
	                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if ((/წელი/).test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	            },
	            s : 'რამდენიმე წამი',
	            m : 'წუთი',
	            mm : '%d წუთი',
	            h : 'საათი',
	            hh : '%d საათი',
	            d : 'დღე',
	            dd : '%d დღე',
	            M : 'თვე',
	            MM : '%d თვე',
	            y : 'წელი',
	            yy : '%d წელი'
	        },
	        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal : function (number) {
	            if (number === 0) {
	                return number;
	            }

	            if (number === 1) {
	                return number + '-ლი';
	            }

	            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
	                return 'მე-' + number;
	            }

	            return number + '-ე';
	        },
	        week : {
	            dow : 1,
	            doy : 7
	        }
	    });
	}));


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : khmer (km)
	// author : Kruy Vanna : https://github.com/kruyvanna

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'LT:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd, D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : korean (ko)
	//
	// authors
	//
	// - Kyungwook, Park : https://github.com/kyungw00k
	// - Jeeeyul Lee <jeeeyul@gmail.com>
	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ko', {
	        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat : {
	            LT : 'A h시 m분',
	            LTS : 'A h시 m분 s초',
	            L : 'YYYY.MM.DD',
	            LL : 'YYYY년 MMMM D일',
	            LLL : 'YYYY년 MMMM D일 LT',
	            LLLL : 'YYYY년 MMMM D일 dddd LT'
	        },
	        calendar : {
	            sameDay : '오늘 LT',
	            nextDay : '내일 LT',
	            nextWeek : 'dddd LT',
	            lastDay : '어제 LT',
	            lastWeek : '지난주 dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s 후',
	            past : '%s 전',
	            s : '몇초',
	            ss : '%d초',
	            m : '일분',
	            mm : '%d분',
	            h : '한시간',
	            hh : '%d시간',
	            d : '하루',
	            dd : '%d일',
	            M : '한달',
	            MM : '%d달',
	            y : '일년',
	            yy : '%d년'
	        },
	        ordinalParse : /\d{1,2}일/,
	        ordinal : '%d일',
	        meridiemParse : /오전|오후/,
	        isPM : function (token) {
	            return token === '오후';
	        },
	        meridiem : function (hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        }
	    });
	}));


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Luxembourgish (lb)
	// author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

	// Note: Luxembourgish has a very particular phonological rule ('Eifeler Regel') that causes the
	// deletion of the final 'n' in certain contexts. That's what the 'eifelerRegelAppliesToWeekday'
	// and 'eifelerRegelAppliesToNumber' methods are meant for

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eng Minutt', 'enger Minutt'],
	            'h': ['eng Stonn', 'enger Stonn'],
	            'd': ['een Dag', 'engem Dag'],
	            'M': ['ee Mount', 'engem Mount'],
	            'y': ['ee Joer', 'engem Joer']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }

	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }

	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(number) {
	        number = parseInt(number, 10);
	        if (isNaN(number)) {
	            return false;
	        }
	        if (number < 0) {
	            // Negative Number --> always true
	            return true;
	        } else if (number < 10) {
	            // Only 1 digit
	            if (4 <= number && number <= 7) {
	                return true;
	            }
	            return false;
	        } else if (number < 100) {
	            // 2 digits
	            var lastDigit = number % 10, firstDigit = number / 10;
	            if (lastDigit === 0) {
	                return eifelerRegelAppliesToNumber(firstDigit);
	            }
	            return eifelerRegelAppliesToNumber(lastDigit);
	        } else if (number < 10000) {
	            // 3 or 4 digits --> recursively check first digit
	            while (number >= 10) {
	                number = number / 10;
	            }
	            return eifelerRegelAppliesToNumber(number);
	        } else {
	            // Anything larger than 4 digits: recursively check first n-3 digits
	            number = number / 1000;
	            return eifelerRegelAppliesToNumber(number);
	        }
	    }

	    return moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY LT',
	            LLLL: 'dddd, D. MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function () {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            }
	        },
	        relativeTime : {
	            future : processFutureTime,
	            past : processPastTime,
	            s : 'e puer Sekonnen',
	            m : processRelativeTime,
	            mm : '%d Minutten',
	            h : processRelativeTime,
	            hh : '%d Stonnen',
	            d : processRelativeTime,
	            dd : '%d Deeg',
	            M : processRelativeTime,
	            MM : '%d Méint',
	            y : processRelativeTime,
	            yy : '%d Joer'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Lithuanian (lt)
	// author : Mindaugas Mozūras : https://github.com/mmozuras

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var units = {
	        'm' : 'minutė_minutės_minutę',
	        'mm': 'minutės_minučių_minutes',
	        'h' : 'valanda_valandos_valandą',
	        'hh': 'valandos_valandų_valandas',
	        'd' : 'diena_dienos_dieną',
	        'dd': 'dienos_dienų_dienas',
	        'M' : 'mėnuo_mėnesio_mėnesį',
	        'MM': 'mėnesiai_mėnesių_mėnesius',
	        'y' : 'metai_metų_metus',
	        'yy': 'metai_metų_metus'
	    },
	    weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_');

	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }

	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	    }

	    function special(number) {
	        return number % 10 === 0 || (number > 10 && number < 20);
	    }

	    function forms(key) {
	        return units[key].split('_');
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }

	    function relativeWeekDay(moment, format) {
	        var nominative = format.indexOf('dddd HH:mm') === -1,
	            weekDay = weekDays[moment.day()];

	        return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';
	    }

	    return moment.defineLocale('lt', {
	        months : 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays : relativeWeekDay,
	        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY [m.] MMMM D [d.]',
	            LLL : 'YYYY [m.] MMMM D [d.], LT [val.]',
	            LLLL : 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY [m.] MMMM D [d.]',
	            lll : 'YYYY [m.] MMMM D [d.], LT [val.]',
	            llll : 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'
	        },
	        calendar : {
	            sameDay : '[Šiandien] LT',
	            nextDay : '[Rytoj] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[Vakar] LT',
	            lastWeek : '[Praėjusį] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'po %s',
	            past : 'prieš %s',
	            s : translateSeconds,
	            m : translateSingular,
	            mm : translate,
	            h : translateSingular,
	            hh : translate,
	            d : translateSingular,
	            dd : translate,
	            M : translateSingular,
	            MM : translate,
	            y : translateSingular,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}-oji/,
	        ordinal : function (number) {
	            return number + '-oji';
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : latvian (lv)
	// author : Kristaps Karlsons : https://github.com/skakri

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var units = {
	        'mm': 'minūti_minūtes_minūte_minūtes',
	        'hh': 'stundu_stundas_stunda_stundas',
	        'dd': 'dienu_dienas_diena_dienas',
	        'MM': 'mēnesi_mēnešus_mēnesis_mēneši',
	        'yy': 'gadu_gadus_gads_gadi'
	    };

	    function format(word, number, withoutSuffix) {
	        var forms = word.split('_');
	        if (withoutSuffix) {
	            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
	        } else {
	            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
	        }
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }

	    return moment.defineLocale('lv', {
	        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'YYYY. [gada] D. MMMM',
	            LLL : 'YYYY. [gada] D. MMMM, LT',
	            LLLL : 'YYYY. [gada] D. MMMM, dddd, LT'
	        },
	        calendar : {
	            sameDay : '[Šodien pulksten] LT',
	            nextDay : '[Rīt pulksten] LT',
	            nextWeek : 'dddd [pulksten] LT',
	            lastDay : '[Vakar pulksten] LT',
	            lastWeek : '[Pagājušā] dddd [pulksten] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s vēlāk',
	            past : '%s agrāk',
	            s : 'dažas sekundes',
	            m : 'minūti',
	            mm : relativeTimeWithPlural,
	            h : 'stundu',
	            hh : relativeTimeWithPlural,
	            d : 'dienu',
	            dd : relativeTimeWithPlural,
	            M : 'mēnesi',
	            MM : relativeTimeWithPlural,
	            y : 'gadu',
	            yy : relativeTimeWithPlural
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : macedonian (mk)
	// author : Borislav Mickov : https://github.com/B0k0

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('mk', {
	        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Денес во] LT',
	            nextDay : '[Утре во] LT',
	            nextWeek : 'dddd [во] LT',
	            lastDay : '[Вчера во] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[Во изминатата] dddd [во] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[Во изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'после %s',
	            past : 'пред %s',
	            s : 'неколку секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дена',
	            M : 'месец',
	            MM : '%d месеци',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : malayalam (ml)
	// author : Floyd Pink : https://github.com/floydpink

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ml', {
	        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm -നു',
	            LTS : 'A h:mm:ss -നു',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[ഇന്ന്] LT',
	            nextDay : '[നാളെ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ഇന്നലെ] LT',
	            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s കഴിഞ്ഞ്',
	            past : '%s മുൻപ്',
	            s : 'അൽപ നിമിഷങ്ങൾ',
	            m : 'ഒരു മിനിറ്റ്',
	            mm : '%d മിനിറ്റ്',
	            h : 'ഒരു മണിക്കൂർ',
	            hh : '%d മണിക്കൂർ',
	            d : 'ഒരു ദിവസം',
	            dd : '%d ദിവസം',
	            M : 'ഒരു മാസം',
	            MM : '%d മാസം',
	            y : 'ഒരു വർഷം',
	            yy : '%d വർഷം'
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        isPM : function (input) {
	            return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        }
	    });
	}));


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Marathi (mr)
	// author : Harshad Kale : https://github.com/kalehv

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    return moment.defineLocale('mr', {
	        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm वाजता',
	            LTS : 'A h:mm:ss वाजता',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[उद्या] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s नंतर',
	            past : '%s पूर्वी',
	            s : 'सेकंद',
	            m: 'एक मिनिट',
	            mm: '%d मिनिटे',
	            h : 'एक तास',
	            hh : '%d तास',
	            d : 'एक दिवस',
	            dd : '%d दिवस',
	            M : 'एक महिना',
	            MM : '%d महिने',
	            y : 'एक वर्ष',
	            yy : '%d वर्षे'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात्री') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळी') {
	                return hour;
	            } else if (meridiem === 'दुपारी') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'सायंकाळी') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower)
	        {
	            if (hour < 4) {
	                return 'रात्री';
	            } else if (hour < 10) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Bahasa Malaysia (ms-MY)
	// author : Weldan Jamili : https://github.com/weldan

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ms-my', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'LT.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] LT',
	            LLLL : 'dddd, D MMMM YYYY [pukul] LT'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Burmese (my)
	// author : Squar team, mysquar.com

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '၁',
	        '2': '၂',
	        '3': '၃',
	        '4': '၄',
	        '5': '၅',
	        '6': '၆',
	        '7': '၇',
	        '8': '၈',
	        '9': '၉',
	        '0': '၀'
	    }, numberMap = {
	        '၁': '1',
	        '၂': '2',
	        '၃': '3',
	        '၄': '4',
	        '၅': '5',
	        '၆': '6',
	        '၇': '7',
	        '၈': '8',
	        '၉': '9',
	        '၀': '0'
	    };
	    return moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	        weekdaysShort: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်'
	        },
	        preparse: function (string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : norwegian bokmål (nb)
	// authors : Espen Hovlandsdal : https://github.com/rexxars
	//           Sigurd Gartmann : https://github.com/sigurdga

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('nb', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'H.mm',
	            LTS : 'LT.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] LT',
	            LLLL : 'dddd D. MMMM YYYY [kl.] LT'
	        },
	        calendar : {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'for %s siden',
	            s : 'noen sekunder',
	            m : 'ett minutt',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dager',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : nepali/nepalese
	// author : suvash : https://github.com/suvash

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    return moment.defineLocale('ne', {
	        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin : 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
	        longDateFormat : {
	            LT : 'Aको h:mm बजे',
	            LTS : 'Aको h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राती') {
	                return hour < 3 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'बेलुका' || meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राती';
	            } else if (hour < 10) {
	                return 'बिहान';
	            } else if (hour < 15) {
	                return 'दिउँसो';
	            } else if (hour < 18) {
	                return 'बेलुका';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राती';
	            }
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[भोली] LT',
	            nextWeek : '[आउँदो] dddd[,] LT',
	            lastDay : '[हिजो] LT',
	            lastWeek : '[गएको] dddd[,] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sमा',
	            past : '%s अगाडी',
	            s : 'केही समय',
	            m : 'एक मिनेट',
	            mm : '%d मिनेट',
	            h : 'एक घण्टा',
	            hh : '%d घण्टा',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महिना',
	            MM : '%d महिना',
	            y : 'एक बर्ष',
	            yy : '%d बर्ष'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : dutch (nl)
	// author : Joris Röling : https://github.com/jjupiter

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	    return moment.defineLocale('nl', {
	        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'over %s',
	            past : '%s geleden',
	            s : 'een paar seconden',
	            m : 'één minuut',
	            mm : '%d minuten',
	            h : 'één uur',
	            hh : '%d uur',
	            d : 'één dag',
	            dd : '%d dagen',
	            M : 'één maand',
	            MM : '%d maanden',
	            y : 'één jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : norwegian nynorsk (nn)
	// author : https://github.com/mechuwind

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('nn', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'for %s sidan',
	            s : 'nokre sekund',
	            m : 'eit minutt',
	            mm : '%d minutt',
	            h : 'ein time',
	            hh : '%d timar',
	            d : 'ein dag',
	            dd : '%d dagar',
	            M : 'ein månad',
	            MM : '%d månader',
	            y : 'eit år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : polish (pl)
	// author : Rafal Hirsz : https://github.com/evoL

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

	    function plural(n) {
	        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	    }

	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'minuta' : 'minutę';
	        case 'mm':
	            return result + (plural(number) ? 'minuty' : 'minut');
	        case 'h':
	            return withoutSuffix  ? 'godzina'  : 'godzinę';
	        case 'hh':
	            return result + (plural(number) ? 'godziny' : 'godzin');
	        case 'MM':
	            return result + (plural(number) ? 'miesiące' : 'miesięcy');
	        case 'yy':
	            return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }

	    return moment.defineLocale('pl', {
	        months : function (momentToFormat, format) {
	            if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	        weekdaysMin : 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: '[W] dddd [o] LT',
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[W zeszłą niedzielę o] LT';
	                case 3:
	                    return '[W zeszłą środę o] LT';
	                case 6:
	                    return '[W zeszłą sobotę o] LT';
	                default:
	                    return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : '%s temu',
	            s : 'kilka sekund',
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : '1 dzień',
	            dd : '%d dni',
	            M : 'miesiąc',
	            MM : translate,
	            y : 'rok',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : brazilian portuguese (pt-br)
	// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('pt-br', {
	        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
	        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
	        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
	        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
	        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY [às] LT',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : '%s atrás',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº'
	    });
	}));


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : portuguese (pt)
	// author : Jefferson : https://github.com/jalex79

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('pt', {
	        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
	        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
	        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
	        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
	        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY LT',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : 'há %s',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : romanian (ro)
	// author : Vlad Gurdiga : https://github.com/gurdiga
	// author : Valentin Agachi : https://github.com/avaly

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	                'mm': 'minute',
	                'hh': 'ore',
	                'dd': 'zile',
	                'MM': 'luni',
	                'yy': 'ani'
	            },
	            separator = ' ';
	        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	            separator = ' de ';
	        }

	        return number + separator + format[key];
	    }

	    return moment.defineLocale('ro', {
	        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'peste %s',
	            past : '%s în urmă',
	            s : 'câteva secunde',
	            m : 'un minut',
	            mm : relativeTimeWithPlural,
	            h : 'o oră',
	            hh : relativeTimeWithPlural,
	            d : 'o zi',
	            dd : relativeTimeWithPlural,
	            M : 'o lună',
	            MM : relativeTimeWithPlural,
	            y : 'un an',
	            yy : relativeTimeWithPlural
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : russian (ru)
	// author : Viktorminator : https://github.com/Viktorminator
	// Author : Menelion Elensúle : https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            'hh': 'час_часа_часов',
	            'dd': 'день_дня_дней',
	            'MM': 'месяц_месяца_месяцев',
	            'yy': 'год_года_лет'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	            'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function monthsShortCaseReplace(m, format) {
	        var monthsShort = {
	            'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	            'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return monthsShort[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	            'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
	        },

	        nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/).test(format) ?
	            'accusative' :
	            'nominative';

	        return weekdays[nounCase][m.day()];
	    }

	    return moment.defineLocale('ru', {
	        months : monthsCaseReplace,
	        monthsShort : monthsShortCaseReplace,
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        monthsParse : [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., LT',
	            LLLL : 'dddd, D MMMM YYYY г., LT'
	        },
	        calendar : {
	            sameDay: '[Сегодня в] LT',
	            nextDay: '[Завтра в] LT',
	            lastDay: '[Вчера в] LT',
	            nextWeek: function () {
	                return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
	            },
	            lastWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                    case 0:
	                        return '[В прошлое] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[В прошлый] dddd [в] LT';
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[В прошлую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'через %s',
	            past : '%s назад',
	            s : 'несколько секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'час',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },

	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM : function (input) {
	            return /^(дня|вечера)$/.test(input);
	        },

	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },

	        ordinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            case 'w':
	            case 'W':
	                return number + '-я';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : slovak (sk)
	// author : Martin Minka : https://github.com/k2s
	// based on work of petrbela : https://github.com/petrbela

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');

	    function plural(n) {
	        return (n > 1) && (n < 5);
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minúty' : 'minút');
	            } else {
	                return result + 'minútami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodín');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dni' : 'dní');
	            } else {
	                return result + 'dňami';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'mesiace' : 'mesiacov');
	            } else {
	                return result + 'mesiacmi';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'rokov');
	            } else {
	                return result + 'rokmi';
	            }
	            break;
	        }
	    }

	    return moment.defineLocale('sk', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParse : (function (months, monthsShort) {
	            var i, _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        }(months, monthsShort)),
	        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [o] LT';
	                case 3:
	                    return '[v stredu o] LT';
	                case 4:
	                    return '[vo štvrtok o] LT';
	                case 5:
	                    return '[v piatok o] LT';
	                case 6:
	                    return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[minulú nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[minulý] dddd [o] LT';
	                case 3:
	                    return '[minulú stredu o] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [o] LT';
	                case 6:
	                    return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'pred %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : slovenian (sl)
	// author : Robert Sedovšek : https://github.com/sedovsek

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'ena minuta' : 'eno minuto';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2) {
	                result += 'minuti';
	            } else if (number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minut';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'ena ura' : 'eno uro';
	        case 'hh':
	            if (number === 1) {
	                result += 'ura';
	            } else if (number === 2) {
	                result += 'uri';
	            } else if (number === 3 || number === 4) {
	                result += 'ure';
	            } else {
	                result += 'ur';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dni';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mesec';
	            } else if (number === 2) {
	                result += 'meseca';
	            } else if (number === 3 || number === 4) {
	                result += 'mesece';
	            } else {
	                result += 'mesecev';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'leto';
	            } else if (number === 2) {
	                result += 'leti';
	            } else if (number === 3 || number === 4) {
	                result += 'leta';
	            } else {
	                result += 'let';
	            }
	            return result;
	        }
	    }

	    return moment.defineLocale('sl', {
	        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[danes ob] LT',
	            nextDay  : '[jutri ob] LT',

	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v] [nedeljo] [ob] LT';
	                case 3:
	                    return '[v] [sredo] [ob] LT';
	                case 6:
	                    return '[v] [soboto] [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay  : '[včeraj ob] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[prejšnja] dddd [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'čez %s',
	            past   : '%s nazaj',
	            s      : 'nekaj sekund',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'en dan',
	            dd     : translate,
	            M      : 'en mesec',
	            MM     : translate,
	            y      : 'eno leto',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Albanian (sq)
	// author : Flakërim Ismani : https://github.com/flakerimi
	// author: Menelion Elensúle: https://github.com/Oire (tests)
	// author : Oerd Cukalla : https://github.com/oerd (fixes)

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('sq', {
	        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        meridiemParse: /PD|MD/,
	        isPM: function (input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Sot në] LT',
	            nextDay : '[Nesër në] LT',
	            nextWeek : 'dddd [në] LT',
	            lastDay : '[Dje në] LT',
	            lastWeek : 'dddd [e kaluar në] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'në %s',
	            past : '%s më parë',
	            s : 'disa sekonda',
	            m : 'një minutë',
	            mm : '%d minuta',
	            h : 'një orë',
	            hh : '%d orë',
	            d : 'një ditë',
	            dd : '%d ditë',
	            M : 'një muaj',
	            MM : '%d muaj',
	            y : 'një vit',
	            yy : '%d vite'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Serbian-cyrillic (sr-cyrl)
	// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    return moment.defineLocale('sr-cyrl', {
	        months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
	        monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
	        weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
	        weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
	        weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY LT',
	            LLLL: 'dddd, D. MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',

	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[у] [недељу] [у] LT';
	                case 3:
	                    return '[у] [среду] [у] LT';
	                case 6:
	                    return '[у] [суботу] [у] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[у] dddd [у] LT';
	                }
	            },
	            lastDay  : '[јуче у] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[прошле] [недеље] [у] LT',
	                    '[прошлог] [понедељка] [у] LT',
	                    '[прошлог] [уторка] [у] LT',
	                    '[прошле] [среде] [у] LT',
	                    '[прошлог] [четвртка] [у] LT',
	                    '[прошлог] [петка] [у] LT',
	                    '[прошле] [суботе] [у] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past   : 'пре %s',
	            s      : 'неколико секунди',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'дан',
	            dd     : translator.translate,
	            M      : 'месец',
	            MM     : translator.translate,
	            y      : 'годину',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Serbian-latin (sr)
	// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    return moment.defineLocale('sr', {
	        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
	        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
	        weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
	        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
	        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY LT',
	            LLLL: 'dddd, D. MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',

	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedelju] [u] LT';
	                case 3:
	                    return '[u] [sredu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedelje] [u] LT',
	                    '[prošlog] [ponedeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'pre %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : swedish (sv)
	// author : Jens Alm : https://github.com/ulmus

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('sv', {
	        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: 'dddd LT',
	            lastWeek: '[Förra] dddd[en] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'för %s sedan',
	            s : 'några sekunder',
	            m : 'en minut',
	            mm : '%d minuter',
	            h : 'en timme',
	            hh : '%d timmar',
	            d : 'en dag',
	            dd : '%d dagar',
	            M : 'en månad',
	            MM : '%d månader',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}(e|a)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'e' :
	                (b === 1) ? 'a' :
	                (b === 2) ? 'a' :
	                (b === 3) ? 'e' : 'e';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : tamil (ta)
	// author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    /*var symbolMap = {
	            '1': '௧',
	            '2': '௨',
	            '3': '௩',
	            '4': '௪',
	            '5': '௫',
	            '6': '௬',
	            '7': '௭',
	            '8': '௮',
	            '9': '௯',
	            '0': '௦'
	        },
	        numberMap = {
	            '௧': '1',
	            '௨': '2',
	            '௩': '3',
	            '௪': '4',
	            '௫': '5',
	            '௬': '6',
	            '௭': '7',
	            '௮': '8',
	            '௯': '9',
	            '௦': '0'
	        }; */

	    return moment.defineLocale('ta', {
	        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[இன்று] LT',
	            nextDay : '[நாளை] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[நேற்று] LT',
	            lastWeek : '[கடந்த வாரம்] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s இல்',
	            past : '%s முன்',
	            s : 'ஒரு சில விநாடிகள்',
	            m : 'ஒரு நிமிடம்',
	            mm : '%d நிமிடங்கள்',
	            h : 'ஒரு மணி நேரம்',
	            hh : '%d மணி நேரம்',
	            d : 'ஒரு நாள்',
	            dd : '%d நாட்கள்',
	            M : 'ஒரு மாதம்',
	            MM : '%d மாதங்கள்',
	            y : 'ஒரு வருடம்',
	            yy : '%d ஆண்டுகள்'
	        },
	/*        preparse: function (string) {
	            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },*/
	        ordinalParse: /\d{1,2}வது/,
	        ordinal : function (number) {
	            return number + 'வது';
	        },


	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை';  // வைகறை
	            } else if (hour < 10) {
	                return ' காலை'; // காலை
	            } else if (hour < 14) {
	                return ' நண்பகல்'; // நண்பகல்
	            } else if (hour < 18) {
	                return ' எற்பாடு'; // எற்பாடு
	            } else if (hour < 22) {
	                return ' மாலை'; // மாலை
	            } else {
	                return ' யாமம்';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : thai (th)
	// author : Kridsada Thanabulpong : https://github.com/sirn

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('th', {
	        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	        monthsShort : 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
	        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        longDateFormat : {
	            LT : 'H นาฬิกา m นาที',
	            LTS : 'LT s วินาที',
	            L : 'YYYY/MM/DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY เวลา LT',
	            LLLL : 'วันddddที่ D MMMM YYYY เวลา LT'
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function (input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar : {
	            sameDay : '[วันนี้ เวลา] LT',
	            nextDay : '[พรุ่งนี้ เวลา] LT',
	            nextWeek : 'dddd[หน้า เวลา] LT',
	            lastDay : '[เมื่อวานนี้ เวลา] LT',
	            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'อีก %s',
	            past : '%sที่แล้ว',
	            s : 'ไม่กี่วินาที',
	            m : '1 นาที',
	            mm : '%d นาที',
	            h : '1 ชั่วโมง',
	            hh : '%d ชั่วโมง',
	            d : '1 วัน',
	            dd : '%d วัน',
	            M : '1 เดือน',
	            MM : '%d เดือน',
	            y : '1 ปี',
	            yy : '%d ปี'
	        }
	    });
	}));


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Tagalog/Filipino (tl-ph)
	// author : Dan Hagman

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('tl-ph', {
	        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'MM/D/YYYY',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY LT',
	            LLLL : 'dddd, MMMM DD, YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Ngayon sa] LT',
	            nextDay: '[Bukas sa] LT',
	            nextWeek: 'dddd [sa] LT',
	            lastDay: '[Kahapon sa] LT',
	            lastWeek: 'dddd [huling linggo] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'sa loob ng %s',
	            past : '%s ang nakalipas',
	            s : 'ilang segundo',
	            m : 'isang minuto',
	            mm : '%d minuto',
	            h : 'isang oras',
	            hh : '%d oras',
	            d : 'isang araw',
	            dd : '%d araw',
	            M : 'isang buwan',
	            MM : '%d buwan',
	            y : 'isang taon',
	            yy : '%d taon'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : turkish (tr)
	// authors : Erhan Gundogan : https://github.com/erhangundogan,
	//           Burak Yiğit Kaya: https://github.com/BYK

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var suffixes = {
	        1: '\'inci',
	        5: '\'inci',
	        8: '\'inci',
	        70: '\'inci',
	        80: '\'inci',

	        2: '\'nci',
	        7: '\'nci',
	        20: '\'nci',
	        50: '\'nci',

	        3: '\'üncü',
	        4: '\'üncü',
	        100: '\'üncü',

	        6: '\'ncı',

	        9: '\'uncu',
	        10: '\'uncu',
	        30: '\'uncu',

	        60: '\'ıncı',
	        90: '\'ıncı'
	    };

	    return moment.defineLocale('tr', {
	        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[yarın saat] LT',
	            nextWeek : '[haftaya] dddd [saat] LT',
	            lastDay : '[dün] LT',
	            lastWeek : '[geçen hafta] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s önce',
	            s : 'birkaç saniye',
	            m : 'bir dakika',
	            mm : '%d dakika',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir yıl',
	            yy : '%d yıl'
	        },
	        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '\'ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;

	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
	// author : Abdel Said : https://github.com/abdelsaid

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('tzm-latn', {
	        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dadkh s yan %s',
	            past : 'yan %s',
	            s : 'imik',
	            m : 'minuḍ',
	            mm : '%d minuḍ',
	            h : 'saɛa',
	            hh : '%d tassaɛin',
	            d : 'ass',
	            dd : '%d ossan',
	            M : 'ayowr',
	            MM : '%d iyyirn',
	            y : 'asgas',
	            yy : '%d isgasn'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Morocco Central Atlas Tamaziɣt (tzm)
	// author : Abdel Said : https://github.com/abdelsaid

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('tzm', {
	        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS: 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past : 'ⵢⴰⵏ %s',
	            s : 'ⵉⵎⵉⴽ',
	            m : 'ⵎⵉⵏⵓⴺ',
	            mm : '%d ⵎⵉⵏⵓⴺ',
	            h : 'ⵙⴰⵄⴰ',
	            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d : 'ⴰⵙⵙ',
	            dd : '%d oⵙⵙⴰⵏ',
	            M : 'ⴰⵢoⵓⵔ',
	            MM : '%d ⵉⵢⵢⵉⵔⵏ',
	            y : 'ⴰⵙⴳⴰⵙ',
	            yy : '%d ⵉⵙⴳⴰⵙⵏ'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : ukrainian (uk)
	// author : zemlanin : https://github.com/zemlanin
	// Author : Menelion Elensúle : https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'хвилина_хвилини_хвилин',
	            'hh': 'година_години_годин',
	            'dd': 'день_дні_днів',
	            'MM': 'місяць_місяці_місяців',
	            'yy': 'рік_роки_років'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
	            'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
	        },

	        nounCase = (/D[oD]? *MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	        },

	        nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
	            'accusative' :
	            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
	                'genitive' :
	                'nominative');

	        return weekdays[nounCase][m.day()];
	    }

	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }

	    return moment.defineLocale('uk', {
	        months : monthsCaseReplace,
	        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY р.',
	            LLL : 'D MMMM YYYY р., LT',
	            LLLL : 'dddd, D MMMM YYYY р., LT'
	        },
	        calendar : {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return processHoursFunction('[Минулої] dddd [').call(this);
	                case 1:
	                case 2:
	                case 4:
	                    return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past : '%s тому',
	            s : 'декілька секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'годину',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'місяць',
	            MM : relativeTimeWithPlural,
	            y : 'рік',
	            yy : relativeTimeWithPlural
	        },

	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function (input) {
	            return /^(дня|вечора)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },

	        ordinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : uzbek (uz)
	// author : Sardor Muminov : https://github.com/muminoff

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('uz', {
	        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'D MMMM YYYY, dddd LT'
	        },
	        calendar : {
	            sameDay : '[Бугун соат] LT [да]',
	            nextDay : '[Эртага] LT [да]',
	            nextWeek : 'dddd [куни соат] LT [да]',
	            lastDay : '[Кеча соат] LT [да]',
	            lastWeek : '[Утган] dddd [куни соат] LT [да]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'Якин %s ичида',
	            past : 'Бир неча %s олдин',
	            s : 'фурсат',
	            m : 'бир дакика',
	            mm : '%d дакика',
	            h : 'бир соат',
	            hh : '%d соат',
	            d : 'бир кун',
	            dd : '%d кун',
	            M : 'бир ой',
	            MM : '%d ой',
	            y : 'бир йил',
	            yy : '%d йил'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : vietnamese (vi)
	// author : Bang Nguyen : https://github.com/bangnk

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('vi', {
	        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM [năm] YYYY',
	            LLL : 'D MMMM [năm] YYYY LT',
	            LLLL : 'dddd, D MMMM [năm] YYYY LT',
	            l : 'DD/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY LT',
	            llll : 'ddd, D MMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần rồi lúc] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s tới',
	            past : '%s trước',
	            s : 'vài giây',
	            m : 'một phút',
	            mm : '%d phút',
	            h : 'một giờ',
	            hh : '%d giờ',
	            d : 'một ngày',
	            dd : '%d ngày',
	            M : 'một tháng',
	            MM : '%d tháng',
	            y : 'một năm',
	            yy : '%d năm'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : chinese (zh-cn)
	// author : suupic : https://github.com/suupic
	// author : Zeno Zeng : https://github.com/zenozeng

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('zh-cn', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah点mm',
	            LTS : 'Ah点m分s秒',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日LT',
	            LLLL : 'YYYY年MMMD日ddddLT',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日LT',
	            llll : 'YYYY年MMMD日ddddLT'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' ||
	                    meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : function () {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay : function () {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay : function () {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse : 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            case 'M':
	                return number + '月';
	            case 'w':
	            case 'W':
	                return number + '周';
	            default:
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s内',
	            past : '%s前',
	            s : '几秒',
	            m : '1分钟',
	            mm : '%d分钟',
	            h : '1小时',
	            hh : '%d小时',
	            d : '1天',
	            dd : '%d天',
	            M : '1个月',
	            MM : '%d个月',
	            y : '1年',
	            yy : '%d年'
	        },
	        week : {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : traditional chinese (zh-tw)
	// author : Ben : https://github.com/ben-lin

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('zh-tw', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah點mm',
	            LTS : 'Ah點m分s秒',
	            L : 'YYYY年MMMD日',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日LT',
	            LLLL : 'YYYY年MMMD日ddddLT',
	            l : 'YYYY年MMMD日',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日LT',
	            llll : 'YYYY年MMMD日ddddLT'
	        },
	        meridiemParse: /早上|上午|中午|下午|晚上/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : '[今天]LT',
	            nextDay : '[明天]LT',
	            nextWeek : '[下]ddddLT',
	            lastDay : '[昨天]LT',
	            lastWeek : '[上]ddddLT',
	            sameElse : 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd' :
	            case 'D' :
	            case 'DDD' :
	                return number + '日';
	            case 'M' :
	                return number + '月';
	            case 'w' :
	            case 'W' :
	                return number + '週';
	            default :
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s內',
	            past : '%s前',
	            s : '幾秒',
	            m : '一分鐘',
	            mm : '%d分鐘',
	            h : '一小時',
	            hh : '%d小時',
	            d : '一天',
	            dd : '%d天',
	            M : '一個月',
	            MM : '%d個月',
	            y : '一年',
	            yy : '%d年'
	        }
	    });
	}));


/***/ }
]));
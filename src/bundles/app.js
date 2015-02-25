webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);

	/**
	 * bootstrap our App
	 */
	angular.element(document).ready(function () {
	  angular.bootstrap(document, ['app']);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Core module
	 * @desc:
	 */
	var appCore = angular.module('app.core', [
	  'ngCookies',
	  'ngAnimate',
	  'ngTouch',
	  'ui.bootstrap',
	  'ui.router',
	  'ui.jq'
	]);

	/** routes and run configs */
	__webpack_require__(29)(appCore);
	__webpack_require__(30)(appCore);

	/** controllers */
	__webpack_require__(31)(appCore);

	/** directives */
	__webpack_require__(43)(appCore);
	__webpack_require__(44)(appCore);
	__webpack_require__(45)(appCore);
	__webpack_require__(46)(appCore);
	__webpack_require__(47)(appCore);

	/** filters */
	__webpack_require__(32)(appCore);

	/** factories */
	__webpack_require__(33)(appCore);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Calendar module
	 * @desc:
	 */
	var appCalendar = angular.module('app.calendar', []);

	/** routes configs */
	__webpack_require__(34)(appCalendar);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Chart module
	 * @desc:
	 */
	var appChart = angular.module('app.chart', []);

	/** routes configs */
	__webpack_require__(35)(appChart);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Dashboard module
	 * @desc:
	 */
	var appDashboard = angular.module('app.dashboard', []);

	/** routes configs */
	__webpack_require__(36)(appDashboard);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Form module
	 * @desc:
	 */
	var appForm = angular.module('app.form', []);

	/** routes configs */
	__webpack_require__(37)(appForm);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Mail module
	 * @desc:
	 */
	var appMail = angular.module('app.mail', []);

	/** routes configs */
	__webpack_require__(38)(appMail);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Page module
	 * @desc:
	 */
	var appPage = angular.module('app.page', []);

	/** routes configs */
	__webpack_require__(39)(appPage);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Setting module
	 * @desc:
	 */
	var appSetting = angular.module('app.setting', []);

	/** routes configs */
	__webpack_require__(40)(appSetting);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Table module
	 * @desc:
	 */
	var appTable = angular.module('app.table', []);

	/** routes configs */
	__webpack_require__(41)(appTable);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * UI module
	 * @desc:
	 */
	var appUi = angular.module('app.ui', []);

	/** routes configs */
	__webpack_require__(42)(appUi);

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core run
	 * @module: app.core
	 */
	module.exports = function (module) {
	  module.run([
	    '$rootScope',
	    '$state',
	    '$stateParams',
	    function ($rootScope, $state, $stateParams) {
	      $rootScope.$state = $state;
	      $rootScope.$stateParams = $stateParams;
	    }
	  ]);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Core routes
	 * @module: app.core
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;
	      
	      /** default route */
	      $urlRouterProvider.otherwise('dashboard');

	      /** parent route */
	      $stateProvider.state('default', {
	        abstract: true,
	        url: '',
	        templateUrl: 'modules/core/views/layouts/default.html'
	      })
	      .state('minimal', {
	        abstract: true,
	        url: '',
	        templateUrl: 'modules/core/views/layouts/minimal.html'
	      });
	    }
	  ]);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Core setting controller
	 * @module: app.core 
	 */
	module.exports = function (module) {
	  module.controller('coreSettingsCtrl', [
	    '$scope',
	    '$rootScope',
	    '$window',
	    '$timeout',
	    '$cookies',
	    'viewport',
	    function ($scope, $rootScope, $window, $timeout, $cookies, viewport) {
	      /** App Initial Settings */
	      $scope.core = {
	        name: 'Analyzr',
	        version: '0.0.1',
	        settings: {
	          fullScreen: false,
	          pageLoading: false,
	          headerFixed: true,
	          headerSearchForm: false,
	          sidebarLeftOpen: false,
	          sidebarLeftFixed: false,
	          sidebarLeftCollapse: viewport.width() >= 768 && viewport.width() < 992 ? true : false
	        },
	        screen: {
	          xs: viewport.width() < 768 ? true : false,
	          sm: viewport.width() >= 768 && viewport.width() < 992 ? true : false,
	          md: viewport.width() >= 992 && viewport.width() < 1200 ? true : false,
	          lg: viewport.width() >= 1200 ? true : false,
	          height: viewport.height(),
	          width: viewport.width()
	        }
	      };

	      /** hide sidebar and show loading indicator */
	      $rootScope.$on('$stateChangeStart', function () {
	        $scope.core.settings.sidebarLeftOpen = false;
	        $scope.core.settings.pageLoading = true;
	      });

	      /** show loading indicator */
	      $rootScope.$on('$stateChangeSuccess', function () {
	        $scope.core.settings.pageLoading = false;
	      });

	      /** On resize, update viewport variable */
	      angular.element($window).on('resize', function () {
	        $timeout.cancel($scope.resizing);

	        $scope.resizing = $timeout(function () {
	          $scope.core.screen.xs = viewport.width() < 768 ? true : false;
	          $scope.core.screen.sm = viewport.width() >= 768 && viewport.width() < 992 ? true : false;
	          $scope.core.screen.md = viewport.width() >= 992 && viewport.width() < 1200 ? true : false;
	          $scope.core.screen.lg = viewport.width() >= 1200 ? true : false;
	          $scope.core.screen.height = viewport.height();
	          $scope.core.screen.width = viewport.width();
	        }, 100);
	      });
	    }
	  ]);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Filters
	 * @module: app.core
	 * @desc: Capitalize wording
	 */
	module.exports = function (module) {
	  module.filter('capitalize', function () {
	    return function(input) {
	      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
	        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	      }) : '';
	    };
	  });
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Viewport Services
	 * @module: app.core
	 * @desc: Calculate application window width and height
	 */
	module.exports = function (module) {
	  module.factory('viewport', ['$window', function ($window) {
	    return {
	      height: function() {
	        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      },
	      width: function() {
	        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	      }
	    };
	  }]);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Calendar routes
	 * @module: app.calendar
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** setup routes */
	      $stateProvider.state('default.calendar', {
	        url: '/calendar',
	        templateUrl: 'modules/calendar/views/fullcalendar.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(2, function () {
	              /** Components **/
	              __webpack_require__(81)(module);

	              /** Controllers */
	              __webpack_require__(48)(module);

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      });
	    }
	  ]);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Chart routes
	 * @module: app.chart
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** setup routes */
	      $stateProvider.state('default.chart', {
	        url: '/chart',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('default.chart.flot', {
	        url: '/flot',
	        templateUrl: 'modules/chart/views/flot.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();
	            
	            __webpack_require__.e/* nsure */(3, function () {
	              /** Components **/
	              __webpack_require__(82)();

	              /** Controllers */
	              __webpack_require__(49)(module);
	              __webpack_require__(50)(module);
	              __webpack_require__(51)(module);
	              __webpack_require__(52)(module);
	              __webpack_require__(53)(module);
	              __webpack_require__(54)(module);
	              __webpack_require__(55)(module);
	              __webpack_require__(56)(module);

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      })
	      .state('default.chart.others', {
	        url: '/others',
	        templateUrl: 'modules/chart/views/others.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();
	            
	            __webpack_require__.e/* nsure */(4, function () {
	              /** Components **/
	              __webpack_require__(83)();
	              __webpack_require__(84)();

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      });
	    }
	  ]);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Dashboard routes
	 * @module: app.dashboard
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** setup routes */
	      $stateProvider.state('default.dashboard', {
	        url: '/dashboard',
	        templateUrl: 'modules/dashboard/views/dashboard.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(5, function () {
	              /** Components **/
	              __webpack_require__(82)();
	              __webpack_require__(85)();

	              /** Controllers */
	              __webpack_require__(57)(module);
	              __webpack_require__(58)(module);
	              __webpack_require__(59)(module);
	              __webpack_require__(60)(module);

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      });
	    }
	  ]);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Form routes
	 * @module: app.form
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** default route */
	      $urlRouterProvider.when('/form/wizard', 'form/wizard/basic');

	      /** setup routes */
	      $stateProvider.state('default.form', {
	        url: '/form',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('default.form.elements', {
	        url: '/elements',
	        templateUrl: 'modules/form/views/elements.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(6, function () {
	              /** Components **/
	              __webpack_require__(86)();
	              __webpack_require__(87)();

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      })
	      .state('default.form.validation', {
	        url: '/validation',
	        templateUrl: 'modules/form/views/validation.html'
	      })
	      .state('default.form.wizard', {
	        url: '/wizard',
	        templateUrl: 'modules/form/views/wizard-index.html'
	      })
	      .state('default.form.wizard.basic', {
	        url: '/basic',
	        templateUrl: 'modules/form/views/wizard-basic.html'
	      })
	      .state('default.form.wizard.medical', {
	        url: '/medical',
	        templateUrl: 'modules/form/views/wizard-medical.html'
	      })
	      .state('default.form.wizard.suggestion', {
	        url: '/suggestion',
	        templateUrl: 'modules/form/views/wizard-suggestion.html'
	      })
	      .state('default.form.wizard.finish', {
	        url: '/finish',
	        templateUrl: 'modules/form/views/wizard-finish.html'
	      })
	      .state('default.form.upload', {
	        url: '/upload',
	        templateUrl: 'modules/form/views/upload.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(7, function () {
	              /** Components **/
	              __webpack_require__(88)(module);

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      });
	    }
	  ]);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Mail routes
	 * @module: app.mail
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** default route */
	      $urlRouterProvider.when('/mail', 'mail/folder/inbox');

	      /** setup routes */
	      $stateProvider.state('default.mail', {
	        url: '/mail',
	        templateUrl: 'modules/mail/views/index.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(8, function () {
	              /** Components */
	              __webpack_require__(86)();
	              __webpack_require__(87)();

	              /** Controllers */
	              __webpack_require__(61)(module);
	              __webpack_require__(62)(module);
	              __webpack_require__(63)(module);
	              __webpack_require__(64)(module);

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      })
	      .state('default.mail.compose', {
	        url: '/compose',
	        templateUrl: 'modules/mail/views/compose.html'
	      })
	      .state('default.mail.folder', {
	        url: '/folder',
	        template: '<div class="slide-top" data-ui-view></div>'
	      })
	      .state('default.mail.folder.param', {
	        url: '/{folder}',
	        templateUrl: 'modules/mail/views/lists.html'
	      })
	      .state('default.mail.label', {
	        url: '/label',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('default.mail.label.param', {
	        url: '/{label}',
	        templateUrl: 'modules/mail/views/lists.html'
	      })
	      .state('default.mail.view', {
	        url: '/view',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('default.mail.view.param', {
	        url: '/{view}',
	        templateUrl: 'modules/mail/views/view.html'
	      });
	    }
	  ]);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Page routes
	 * @module: app.page
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** setup routes */
	      $stateProvider.state('default.page', {
	        url: '/page',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('minimal.page', {
	        url: '/page',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('default.page.blank', {
	        url: '/blank',
	        templateUrl: 'modules/page/views/blank.html'
	      })
	      .state('minimal.page.signin', {
	        url: '/signin',
	        templateUrl: 'modules/page/views/signin.html'
	      })
	      .state('minimal.page.signup', {
	        url: '/signup',
	        templateUrl: 'modules/page/views/signup.html'
	      })
	      .state('minimal.page.lostpassword', {
	        url: '/lostpassword',
	        templateUrl: 'modules/page/views/lostpassword.html'
	      })
	      .state('default.page.profile', {
	        url: '/profile',
	        templateUrl: 'modules/page/views/profile.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(9, function () {
	              /** Controllers */
	              __webpack_require__(65)(module);

	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      })
	      .state('minimal.page.error', {
	        url: '/error',
	        templateUrl: 'modules/page/views/error.html'
	      });
	    }
	  ]);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Setting routes
	 * @module: app.setting
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** default route */
	      $urlRouterProvider.when('/setting', 'setting/profile');

	      /** setup routes */
	      $stateProvider.state('default.setting', {
	        url: '/setting',
	        templateUrl: 'modules/setting/views/index.html'
	      })
	      .state('default.setting.profile', {
	        url: '/profile',
	        templateUrl: 'modules/setting/views/profile.html'
	      })
	      .state('default.setting.account', {
	        url: '/account',
	        templateUrl: 'modules/setting/views/account.html'
	      })
	      .state('default.setting.security', {
	        url: '/security',
	        templateUrl: 'modules/setting/views/security.html'
	      });
	    }
	  ]);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Table routes
	 * @module: app.table
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** setup routes */
	      $stateProvider.state('default.table', {
	        url: '/table',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('default.table.static', {
	        url: '/static',
	        templateUrl: 'modules/table/views/static.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(10, function () {
	              /** Components */
	              __webpack_require__(84)();
	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      })
	      .state('default.table.datatable', {
	        url: '/datatable',
	        templateUrl: 'modules/table/views/datatable.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();
	            
	            __webpack_require__.e/* nsure */(11, function () {
	              /** Components */
	              __webpack_require__(89)();
	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      });
	    }
	  ]);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * UI routes
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.config([
	    '$locationProvider',
	    '$urlRouterProvider',
	    '$stateProvider',
	    '$controllerProvider',
	    '$compileProvider',
	    '$filterProvider',
	    '$provide',
	    function ($locationProvider, $urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
	      /** store a reference to various provider functions */
	      module.controller = $controllerProvider.register;
	      module.directive  = $compileProvider.directive;
	      module.filter     = $filterProvider.register;
	      module.factory    = $provide.factory;
	      module.provider   = $provide.provider;
	      module.service    = $provide.service;
	      module.constant   = $provide.constant;
	      module.value      = $provide.value;

	      /** setup routes */
	      $stateProvider.state('default.ui', {
	        url: '/ui',
	        template: '<div class="slide-down" data-ui-view></div>'
	      })
	      .state('default.ui.buttons', {
	        url: '/buttons',
	        templateUrl: 'modules/ui/views/buttons.html'
	      })
	      .state('default.ui.grids', {
	        url: '/grids',
	        templateUrl: 'modules/ui/views/grids.html'
	      })
	      .state('default.ui.icons', {
	        url: '/icons',
	        templateUrl: 'modules/ui/views/icons.html'
	      })
	      .state('default.ui.bootstrap', {
	        url: '/bootstrap',
	        templateUrl: 'modules/ui/views/bootstrap.html',
	        resolve: {
	          load: ['$q', '$rootScope', function ($q, $rootScope) {
	            var deferred = $q.defer();

	            __webpack_require__.e/* nsure */(12, function () {
	              /** Controllers */
	              __webpack_require__(66)(module);
	              __webpack_require__(67)(module);
	              __webpack_require__(68)(module);
	              __webpack_require__(69)(module);
	              __webpack_require__(70)(module);
	              __webpack_require__(71)(module);
	              __webpack_require__(72)(module);
	              __webpack_require__(73)(module);
	              __webpack_require__(74)(module);
	              __webpack_require__(75)(module);
	              __webpack_require__(76)(module);
	              __webpack_require__(77)(module);
	              __webpack_require__(78)(module);
	              __webpack_require__(79)(module);
	              __webpack_require__(80)(module);
	              
	              deferred.resolve();
	            });

	            return deferred.promise;
	          }]
	        }
	      })
	      .state('default.ui.widgets', {
	        url: '/widgets',
	        templateUrl: 'modules/ui/views/widgets.html'
	      });
	    }
	  ]);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Fullscreen
	 * @module: app.core
	 * @desc: Application fullscreen mode
	 */
	module.exports = function (module) {
	  module.directive('fullScreen', ['$timeout', function ($timeout) {
	    return {
	      restrict: 'A',
	      link: function($scope, iElm, iAttrs) {
	        $timeout(function () {
	          iElm.on('click', function () {
	            if (screenfull.enabled) {
	              screenfull.toggle();
	            }
	          });

	          document.addEventListener(screenfull.raw.fullscreenchange, function () {
	            if(screenfull.isFullscreen ) {
	              $scope.$parent.core.settings.fullScreen = true;
	            } else {
	              $scope.$parent.core.settings.fullScreen = false;
	            }
	          });
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Page Loading indicator
	 * @module: app.core
	 * @desc: Application page loading indicator
	 */
	module.exports = function (module) {
	  module.directive('indicator', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	    return {
	      restrict: 'A',
	      replace: true,
	      templateUrl: 'modules/core/views/partials/spinner.html',
	      link: function($scope, iElm, iAttrs) {
	        $timeout(function () {
	          var $wrapper = angular.element(iElm).parent('.spinner-wrapper'),
	              $spinner = angular.element(iElm);

	          /** show loading indicator */
	          $rootScope.$on('$stateChangeStart', function () {
	            $wrapper.addClass('show');
	          });

	          /** hide loading indicator */
	          $rootScope.$on('$stateChangeSuccess', function () {
	            $wrapper.removeClass('show');
	          });
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Navsidebar
	 * @module: app.core
	 * @desc: Application sidebar menu
	 */
	module.exports = function (module) {
	  module.directive('navSidebar', ['$timeout', function ($timeout) {
	    return {
	      restrict: 'C',
	      scope: {},
	      link: function($scope, iElm, iAttrs) {
	        $timeout(function () {
	          var isBusy = false;

	          var toggleMenu = function () {
	            var $this = jQuery(this),
	                $navGroup = $this.parent('.nav-group'),
	                $navMenu = $this.next('.nav-submenu');

	            /** store menu height before animation begin */
	            $navMenu.data('height', $navMenu.height());

	            if($navGroup.hasClass('active')) {
	              /** prevent rapid clicking */
	              if(isBusy) { return false; }

	              /** close menu */
	              closeMenu($navMenu, $navGroup);
	            } else {
	              /** prevent rapid clicking */
	              if(isBusy) { return false; }
	              
	              /** close other active menu */
	              jQuery(iElm.children('.nav-group')).each(function (index, value) {
	                if(jQuery(value).hasClass('active')) {
	                  jQuery(value).removeClass('active');
	                  closeMenu(jQuery(value).children('.nav-submenu'), jQuery(value));
	                }
	              });

	              /** open menu */
	              openMenu($navMenu, $navGroup);
	            }
	          };

	          var openMenu = function ($navmenu, $navgroup) {
	            $navmenu
	              .css({ height: 0 })
	              .velocity({ height: $navmenu.data('height') }, {
	                duration: 300,
	                begin: function () {
	                  $navgroup.addClass('active');
	                  isBusy = true;
	                },
	                complete: function () {
	                  $navmenu.removeAttr('style');
	                  isBusy = false;
	                }
	              }, 'ease-in-out');
	          };

	          var closeMenu = function ($navmenu, $navgroup) {
	            $navmenu
	              .css({ display: 'block', height: $navmenu.data('height') })
	              .velocity({ height: 0 }, {
	                duration: 300,
	                begin: function () {
	                  $navgroup.removeClass('active');
	                  isBusy = true;
	                },
	                complete: function () {
	                  $navmenu.removeAttr('style');
	                  isBusy = false;
	                }
	              }, 'ease-in-out');
	          };

	          iElm.on('click', '.nav-toggle', toggleMenu);
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Placeholder
	 * @module: app.core
	 * @desc: Add support for IE9 input placeholder
	 */
	module.exports = function (module) {
	  module.directive('placeholder', ['$timeout', function ($timeout) {
	    var i = document.createElement('input');
	    if ('placeholder' in i) { return {}; }
	    return {
	      restrict: 'A',
	      $scope: {},
	      link: function($scope, iElm, iAttrs) {
	        if (iAttrs.type === 'password') { return; }

	        $timeout(function () {
	          iElm.val(iAttrs.placeholder);
	          iElm.bind('focus', function () {
	            if (iElm.val() === iAttrs.placeholder) {
	              iElm.val('');
	            }
	          }).bind('blur', function () {
	            if (iElm.val() === '') {
	              iElm.val(iAttrs.placeholder);
	            }
	          });
	        });
	      }
	    };
	  }]);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Slimscroll
	 * @module: app.core
	 * @desc: Application custom scrollbar
	 */
	module.exports = function (module) {
	  module.value('slimScrollConfig', {});
	  module.directive('slimScroll', ['$timeout', 'slimScrollConfig', function ($timeout, slimScrollConfig) {
	    var options = {
	      height: '',
	      size: '6px',
	      wrapperClass: 'scroll-wrapper',
	      railClass: 'scroll-rail',
	      barClass: 'scroll-bar',
	      wheelStep: 10,
	      railVisible: false
	    };

	    if (slimScrollConfig) { angular.extend(options, slimScrollConfig); }

	    return {
	      restrict: 'A',
	      link: function($scope, iElm, iAttrs) {
	        $timeout(function () {
	          if (angular.element('html').hasClass('touch')) { return; }
	          var opts = angular.extend({}, options, $scope.$eval(iAttrs.slimScroll));
	          angular.element(iElm).slimScroll(opts);
	        });
	      }
	    };
	  }]);
	};

/***/ }
]);
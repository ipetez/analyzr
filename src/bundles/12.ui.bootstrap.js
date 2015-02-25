webpackJsonp([12],{

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap alert controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsAlertCtrl', ['$scope', function ($scope) {
	    $scope.alerts = [{
	      type: 'danger',
	      msg: 'Oh snap! Change a few things up and try submitting again.'
	    }, {
	      type: 'success',
	      msg: 'Well done! You successfully read this important alert message.'
	    }, {
	      type: 'info',
	      msg: 'Heads up! This alert needs your attention, but it\'s not super important.'
	    }, {
	      type: 'warning',
	      msg: 'Warning! Better check yourself, you\'re not looking too good.'
	    }];

	    $scope.addAlert = function() {
	      $scope.alerts.push({
	        msg: 'Another alert!'
	      });
	    };

	    $scope.closeAlert = function(index) {
	      $scope.alerts.splice(index, 1);
	    };
	  }]);
	};

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap accordion controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsAccordionCtrl',  ['$scope', function ($scope) {
	    $scope.oneAtATime = true;

	    $scope.groups = [{
	      title: 'Dynamic Group Header - 1',
	      content: 'Dynamic Group Body - 1'
	    }, {
	      title: 'Dynamic Group Header - 2',
	      content: 'Dynamic Group Body - 2'
	    }];

	    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	    $scope.addItem = function() {
	      var newItemNo = $scope.items.length + 1;
	      $scope.items.push('Item ' + newItemNo);
	    };

	    $scope.status = {
	      isFirstOpen: true,
	      isFirstDisabled: false
	    };
	  }]);
	};

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap tab controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsTabsCtrl', ['$scope', function ($scope) {
	    $scope.tabs = [{
	      title: 'Dynamic Title 1',
	      content: 'Dynamic content 1'
	    }, {
	      title: 'Dynamic Title 2',
	      content: 'Dynamic content 2',
	      disabled: true
	    }];
	  }]);
	};

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap carousel controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsCarouselCtrl', ['$scope', function ($scope) {
	    $scope.myInterval = 5000;
	    var slides = $scope.slides = [];
	    $scope.addSlide = function() {
	      slides.push({
	        image: 'assets/images/background/src/background' + (slides.length+1) + '.jpg',
	        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
	      });
	    };
	    for (var i=0; i<4; i++) {
	      $scope.addSlide();
	    }
	  }]);
	};

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap collapse controller
	 * @module: app.ui 
	 */
	module.exports = function (module) {
	  module.controller('BsCollapseCtrl', ['$scope', function ($scope) {
	    $scope.isCollapsed = false;
	  }]);
	};

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap datepicker controller
	 * @module: app.ui 
	 */
	module.exports = function (module) {
	  module.controller('BsDatepickerCtrl', ['$scope', function ($scope) {
	    $scope.today = function() {
	      $scope.dt = new Date();
	    };
	    $scope.today();

	    $scope.clear = function() {
	      $scope.dt = null;
	    };

	    // Disable weekend selection
	    $scope.disabled = function(date, mode) {
	      return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
	    };

	    $scope.toggleMin = function() {
	      $scope.minDate = $scope.minDate ? null : new Date();
	    };
	    $scope.toggleMin();

	    $scope.open = function($event) {
	      $event.preventDefault();
	      $event.stopPropagation();

	      $scope.opened = true;
	    };

	    $scope.dateOptions = {
	      formatYear: 'yy',
	      startingDay: 1
	    };

	    $scope.initDate = new Date('2016-15-20');
	    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	    $scope.format = $scope.formats[0];
	  }]);
	};

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap dropdown controller
	 * @module: app.ui 
	 */
	module.exports = function (module) {
	  module.controller('BsDropdownCtrl', ['$scope', function ($scope) {
	    $scope.items = [
	      'The first choice!',
	      'And another choice for you.',
	      'but wait! A third!'
	    ];

	    $scope.status = {
	      isopen: false
	    };

	    $scope.toggled = function(open) {
	      console.log('Dropdown is now: ', open);
	    };

	    $scope.toggleDropdown = function($event) {
	      $event.preventDefault();
	      $event.stopPropagation();
	      $scope.status.isopen = !$scope.status.isopen;
	    };
	  }]);
	};

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap modal controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsModalCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
	    $scope.items = ['item1', 'item2', 'item3'];
	    $scope.open = function (size) {
	      var modalInstance = $modal.open({
	        templateUrl: 'modules/ui/views/partials/modal.html',
	        controller: 'ModalInstanceCtrl',
	        size: size,
	        resolve: {
	          items: function () {
	            return $scope.items;
	          }
	        }
	      });

	      modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	      });
	    };
	  }]);

	  module.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {
	    $scope.items = items;
	    $scope.selected = {
	      item: $scope.items[0]
	    };

	    $scope.ok = function () {
	      $modalInstance.close($scope.selected.item);
	    };

	    $scope.cancel = function () {
	      $modalInstance.dismiss('cancel');
	    };
	  }]);
	};

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap popover controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsPopoverCtrl', ['$scope', function ($scope) {
	    $scope.dynamicPopover = 'Hello, World!';
	    $scope.dynamicPopoverTitle = 'Title';
	  }]);
	};

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap pagination controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsPaginationCtrl', ['$scope', function ($scope) {
	    $scope.totalItems = 64;
	    $scope.currentPage = 4;

	    $scope.setPage = function (pageNo) {
	      $scope.currentPage = pageNo;
	    };

	    $scope.pageChanged = function() {
	      console.log('Page changed to: ' + $scope.currentPage);
	    };

	    $scope.maxSize = 5;
	    $scope.bigTotalItems = 175;
	    $scope.bigCurrentPage = 1;
	  }]);
	};

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap progress controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsProgressCtrl', ['$scope', function ($scope) {
	    $scope.max = 200;

	    $scope.random = function() {
	      var value = Math.floor((Math.random() * 100) + 1);
	      var type;

	      if (value < 25) {
	        type = 'success';
	      } else if (value < 50) {
	        type = 'info';
	      } else if (value < 75) {
	        type = 'warning';
	      } else {
	        type = 'danger';
	      }

	      $scope.showWarning = (type === 'danger' || type === 'warning');
	      $scope.dynamic = value;
	      $scope.type = type;
	    };
	    $scope.random();

	    $scope.randomStacked = function() {
	      $scope.stacked = [];
	      var types = ['success', 'info', 'warning', 'danger'];

	      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
	        var index = Math.floor((Math.random() * 4));
	        $scope.stacked.push({
	          value: Math.floor((Math.random() * 30) + 1),
	          type: types[index]
	        });
	      }
	    };
	    $scope.randomStacked();
	  }]);
	};

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap typehead controller
	 * @module: app.ui 
	 */
	module.exports = function (module) {
	  module.controller('BsTypeaheadCtrl', ['$scope', function ($scope) {
	    $scope.selected = undefined;
	    $scope.states = [
	      'Alabama',
	      'Alaska',
	      'Arizona',
	      'Arkansas',
	      'California',
	      'Colorado',
	      'Connecticut',
	      'Delaware',
	      'Florida',
	      'Georgia',
	      'Hawaii',
	      'Idaho',
	      'Illinois',
	      'Indiana',
	      'Iowa',
	      'Kansas',
	      'Kentucky',
	      'Louisiana',
	      'Maine',
	      'Maryland',
	      'Massachusetts',
	      'Michigan',
	      'Minnesota',
	      'Mississippi',
	      'Missouri',
	      'Montana',
	      'Nebraska',
	      'Nevada',
	      'New Hampshire',
	      'New Jersey',
	      'New Mexico',
	      'New York',
	      'North Dakota',
	      'North Carolina',
	      'Ohio',
	      'Oklahoma',
	      'Oregon',
	      'Pennsylvania',
	      'Rhode Island',
	      'South Carolina',
	      'South Dakota',
	      'Tennessee',
	      'Texas',
	      'Utah',
	      'Vermont',
	      'Virginia',
	      'Washington',
	      'West Virginia',
	      'Wisconsin',
	      'Wyoming'
	    ];
	  }]);
	};

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap rating controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsRatingCtrl', ['$scope', function ($scope) {
	    $scope.rate = 7;
	    $scope.max = 10;
	    $scope.isReadonly = false;

	    $scope.hoveringOver = function(value) {
	      $scope.overStar = value;
	      $scope.percent = 100 * (value / $scope.max);
	    };
	  }]);
	};

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap timepicker controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsTimepickerCtrl', ['$scope', function ($scope) {
	    $scope.mytime = new Date();

	    $scope.hstep = 1;
	    $scope.mstep = 15;

	    $scope.options = {
	      hstep: [1, 2, 3],
	      mstep: [1, 5, 10, 15, 25, 30]
	    };

	    $scope.ismeridian = true;
	    $scope.toggleMode = function() {
	      $scope.ismeridian = !$scope.ismeridian;
	    };

	    $scope.update = function() {
	      var d = new Date();
	      d.setHours(14);
	      d.setMinutes(0);
	      $scope.mytime = d;
	    };

	    $scope.changed = function() {
	      console.log('Time changed to: ' + $scope.mytime);
	    };

	    $scope.clear = function() {
	      $scope.mytime = null;
	    };
	  }]);
	};

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Bootstrap tooltip controller
	 * @module: app.ui
	 */
	module.exports = function (module) {
	  module.controller('BsTooltipCtrl', ['$scope', function ($scope) {
	    $scope.dynamicTooltip = 'Hello, World!';
	    $scope.dynamicTooltipText = 'dynamic';
	    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
	  }]);
	};

/***/ }

});
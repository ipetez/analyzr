webpackJsonp([7],{

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow
	 * @desc: file uploads via the HTML5 File API
	 * @credit: http://flowjs.github.io/ng-flow/
	 */
	module.exports = function (module) {
	  /** core script */
	  __webpack_require__(106);

	  /** stylesheet */
	  __webpack_require__(125);

	  /** controllers */
	  __webpack_require__(94)(module);

	  /** directives */
	  __webpack_require__(95)(module);
	  __webpack_require__(96)(module);
	  __webpack_require__(97)(module);
	  __webpack_require__(98)(module);
	  __webpack_require__(99)(module);
	  __webpack_require__(100)(module);

	  /** services */
	  __webpack_require__(101)(module);
	};

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow init controller
	 * @desc: 
	 */
	module.exports = function (module) {
	  module.controller('flowCtrl', ['$scope', '$attrs', '$parse', 'flowFactory', function ($scope, $attrs, $parse, flowFactory) {

	    var options = angular.extend({}, $scope.$eval($attrs.flowInit)),
	        flow  = $scope.$eval($attrs.flowObject) || flowFactory.create(options);

	    flow.on('catchAll', function (eventName) {
	      var args = Array.prototype.slice.call(arguments);
	      args.shift();
	      var event = $scope.$broadcast.apply($scope, ['flow::' + eventName, flow].concat(args));
	      if ({
	        'progress':1, 'filesSubmitted':1, 'fileSuccess': 1, 'fileError': 1, 'complete': 1
	      }[eventName]) {
	        $scope.$apply();
	      }
	      if (event.defaultPrevented) {
	        return false;
	      }
	    });

	    $scope.$flow = flow;
	    if ($attrs.hasOwnProperty('flowName')) {
	      $parse($attrs.flowName).assign($scope, flow);
	      $scope.$on('$destroy', function () {
	        $parse($attrs.flowName).assign($scope);
	      });
	    }
	  }]);

	  module.directive('flowInit', [function () {
	    return {
	      scope: true,
	      controller: 'flowCtrl'
	    };
	  }]);
	};

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow button
	 * @desc:
	 */
	module.exports = function (module) {
	  module.directive('flowBtn', [function () {
	    return {
	      'restrict': 'EA',
	      'scope': false,
	      'require': '^flowInit',
	      'link': function(scope, element, attrs) {
	        var isDirectory = attrs.hasOwnProperty('flowDirectory');
	        var isSingleFile = attrs.hasOwnProperty('flowSingleFile');
	        var inputAttrs = attrs.hasOwnProperty('flowAttrs') && scope.$eval(attrs.flowAttrs);
	        scope.$flow.assignBrowse(element, isDirectory, isSingleFile, inputAttrs);
	      }
	    };
	  }]);
	};

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow drag events
	 * @desc:
	 */
	module.exports = function (module) {
	  module.directive('flowPreventDrop', function () {
	    return {
	      scope: false,
	      link: function (scope, element, attrs) {
	        element.bind('drop dragover', function (event) {
	          event.preventDefault();
	        });
	      }
	    };
	  });

	  module.directive('flowDragEnter', ['$timeout', function ($timeout) {
	    return {
	      scope: false,
	      link: function (scope, element, attrs) {
	        var promise;
	        var enter = false;
	        element.bind('dragover', function (event) {
	          if (!isFileDrag(event)) {
	            return ;
	          }
	          if (!enter) {
	            scope.$apply(attrs.flowDragEnter);
	            enter = true;
	          }
	          $timeout.cancel(promise);
	          event.preventDefault();
	        });
	        element.bind('dragleave drop', function (event) {
	          promise = $timeout(function () {
	            scope.$eval(attrs.flowDragLeave);
	            promise = null;
	            enter = false;
	          }, 100);
	        });
	        function isFileDrag (dragEvent) {
	          var fileDrag = false;
	          var dataTransfer = dragEvent.dataTransfer || dragEvent.originalEvent.dataTransfer;
	          angular.forEach(dataTransfer && dataTransfer.types, function (val) {
	            if (val === 'Files') {
	              fileDrag = true;
	            }
	          });
	          return fileDrag;
	        }
	      }
	    };
	  }]);
	};

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow drop
	 * @desc:
	 */
	module.exports = function (module) {
	  module.directive('flowDrop', function () {
	    return {
	      scope: false,
	      require: '^flowInit',
	      link: function (scope, element, attrs) {
	        if (attrs.flowDropEnabled) {
	          scope.$watch(attrs.flowDropEnabled, function (value) {
	            if (value) {
	              assignDrop();
	            } else {
	              unAssignDrop();
	            }
	          });
	        } else {
	          assignDrop();
	        }
	        function assignDrop() {
	          scope.$flow.assignDrop(element);
	        }
	        function unAssignDrop() {
	          scope.$flow.unAssignDrop(element);
	        }
	      }
	    };
	  });
	};

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow events
	 * @desc:
	 */
	module.exports = function (module) {
	  var events = {
	    fileSuccess: ['$file', '$message'],
	    fileProgress: ['$file'],
	    fileAdded: ['$file', '$event'],
	    filesAdded: ['$files', '$event'],
	    filesSubmitted: ['$files', '$event'],
	    fileRetry: ['$file'],
	    fileError: ['$file', '$message'],
	    uploadStart: [],
	    complete: [],
	    progress: [],
	    error: ['$message', '$file']
	  };

	  function capitaliseFirstLetter(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	  }

	  angular.forEach(events, function (eventArgs, eventName) {
	    var name = 'flow' + capitaliseFirstLetter(eventName);
	    if (name == 'flowUploadStart') {
	      name = 'flowUploadStarted';// event alias
	    }
	    module.directive(name, [function () {
	      return {
	        require: '^flowInit',
	        controller: ['$scope', '$attrs', function ($scope, $attrs) {
	          $scope.$on('flow::' + eventName, function () {
	            var funcArgs = Array.prototype.slice.call(arguments);
	            var event = funcArgs.shift();// remove angular event
	            // remove flow object and ignore event if it is from parent directive
	            if ($scope.$flow !== funcArgs.shift()) {
	              return ;
	            }
	            var args = {};
	            angular.forEach(eventArgs, function(value, key) {
	              args[value] = funcArgs[key];
	            });
	            if ($scope.$eval($attrs[name], args) === false) {
	              event.preventDefault();
	            }
	          });
	        }]
	      };
	    }]);
	  });
	};

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow image
	 * @desc:
	 */
	module.exports = function (module) {
	  module.directive('flowImg', [function () {
	    return {
	      scope: false,
	      require: '^flowInit',
	      link: function (scope, element, attrs) {
	        var file = attrs.flowImg;
	        scope.$watch(file, function (file) {
	          if (!file) {
	            return ;
	          }
	          var fileReader = new FileReader();
	          fileReader.readAsDataURL(file.file);
	          fileReader.onload = function (event) {
	            scope.$apply(function () {
	              attrs.$set('src', event.target.result);
	            });
	          };
	        });
	      }
	    };
	  }]);
	};

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow transfer
	 * @desc:
	 */
	module.exports = function (module) {
	  module.directive('flowTransfers', [function () {
	    return {
	      scope: true,
	      require: '^flowInit',
	      link: function (scope) {
	        scope.transfers = scope.$flow.files;
	      }
	    };
	  }]);
	};

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flow provider
	 * @desc:
	 */
	module.exports = function (module) {
	  module.provider('flowFactory', function () {
	    /**
	     * Define the default properties for flow.js
	     * @name flowFactoryProvider.defaults
	     * @type {Object}
	     */
	    this.defaults = {};

	    /**
	     * Flow, MaybeFlow or NotFlow
	     * @name flowFactoryProvider.factory
	     * @type {function}
	     * @return {Flow}
	     */
	    this.factory = function (options) {
	      return new Flow(options);
	    };

	    /**
	     * Define the default events
	     * @name flowFactoryProvider.events
	     * @type {Array}
	     * @private
	     */
	    this.events = [];

	    /**
	     * Add default events
	     * @name flowFactoryProvider.on
	     * @function
	     * @param {string} event
	     * @param {Function} callback
	     */
	    this.on = function (event, callback) {
	      this.events.push([event, callback]);
	    };

	    this.$get = function () {
	      var fn = this.factory;
	      var defaults = this.defaults;
	      var events = this.events;
	      return {
	        create: function (opts) {
	          // combine default options with global options and options
	          var flow = fn(angular.extend({}, defaults, opts));
	          angular.forEach(events, function (event) {
	            flow.on(event[0], event[1]);
	          });
	          return flow;
	        }
	      };
	    };
	  });
	};

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Flow"] = __webpack_require__(107);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/**
	 * @license MIT
	 */
	(function(window, document, undefined) {'use strict';
	  // ie10+
	  var ie10plus = window.navigator.msPointerEnabled;
	  /**
	   * Flow.js is a library providing multiple simultaneous, stable and
	   * resumable uploads via the HTML5 File API.
	   * @param [opts]
	   * @param {number} [opts.chunkSize]
	   * @param {bool} [opts.forceChunkSize]
	   * @param {number} [opts.simultaneousUploads]
	   * @param {bool} [opts.singleFile]
	   * @param {string} [opts.fileParameterName]
	   * @param {number} [opts.progressCallbacksInterval]
	   * @param {number} [opts.speedSmoothingFactor]
	   * @param {Object|Function} [opts.query]
	   * @param {Object|Function} [opts.headers]
	   * @param {bool} [opts.withCredentials]
	   * @param {Function} [opts.preprocess]
	   * @param {string} [opts.method]
	   * @param {string|Function} [opts.testMethod]
	   * @param {string|Function} [opts.uploadMethod]
	   * @param {bool} [opts.prioritizeFirstAndLastChunk]
	   * @param {string|Function} [opts.target]
	   * @param {number} [opts.maxChunkRetries]
	   * @param {number} [opts.chunkRetryInterval]
	   * @param {Array.<number>} [opts.permanentErrors]
	   * @param {Array.<number>} [opts.successStatuses]
	   * @param {Function} [opts.generateUniqueIdentifier]
	   * @constructor
	   */
	  function Flow(opts) {
	    /**
	     * Supported by browser?
	     * @type {boolean}
	     */
	    this.support = (
	        typeof File !== 'undefined' &&
	        typeof Blob !== 'undefined' &&
	        typeof FileList !== 'undefined' &&
	        (
	          !!Blob.prototype.slice || !!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice ||
	          false
	        ) // slicing files support
	    );

	    if (!this.support) {
	      return ;
	    }

	    /**
	     * Check if directory upload is supported
	     * @type {boolean}
	     */
	    this.supportDirectory = /WebKit/.test(window.navigator.userAgent);

	    /**
	     * List of FlowFile objects
	     * @type {Array.<FlowFile>}
	     */
	    this.files = [];

	    /**
	     * Default options for flow.js
	     * @type {Object}
	     */
	    this.defaults = {
	      chunkSize: 1024 * 1024,
	      forceChunkSize: false,
	      simultaneousUploads: 3,
	      singleFile: false,
	      fileParameterName: 'file',
	      progressCallbacksInterval: 500,
	      speedSmoothingFactor: 0.1,
	      query: {},
	      headers: {},
	      withCredentials: false,
	      preprocess: null,
	      method: 'multipart',
	      testMethod: 'GET',
	      uploadMethod: 'POST',
	      prioritizeFirstAndLastChunk: false,
	      target: '/',
	      testChunks: true,
	      generateUniqueIdentifier: null,
	      maxChunkRetries: 0,
	      chunkRetryInterval: null,
	      permanentErrors: [404, 415, 500, 501],
	      successStatuses: [200, 201, 202],
	      onDropStopPropagation: false
	    };

	    /**
	     * Current options
	     * @type {Object}
	     */
	    this.opts = {};

	    /**
	     * List of events:
	     *  key stands for event name
	     *  value array list of callbacks
	     * @type {}
	     */
	    this.events = {};

	    var $ = this;

	    /**
	     * On drop event
	     * @function
	     * @param {MouseEvent} event
	     */
	    this.onDrop = function (event) {
	      if ($.opts.onDropStopPropagation) {
	        event.stopPropagation();
	      }
	      event.preventDefault();
	      var dataTransfer = event.dataTransfer;
	      if (dataTransfer.items && dataTransfer.items[0] &&
	        dataTransfer.items[0].webkitGetAsEntry) {
	        $.webkitReadDataTransfer(event);
	      } else {
	        $.addFiles(dataTransfer.files, event);
	      }
	    };

	    /**
	     * Prevent default
	     * @function
	     * @param {MouseEvent} event
	     */
	    this.preventEvent = function (event) {
	      event.preventDefault();
	    };


	    /**
	     * Current options
	     * @type {Object}
	     */
	    this.opts = Flow.extend({}, this.defaults, opts || {});
	  }

	  Flow.prototype = {
	    /**
	     * Set a callback for an event, possible events:
	     * fileSuccess(file), fileProgress(file), fileAdded(file, event),
	     * fileRetry(file), fileError(file, message), complete(),
	     * progress(), error(message, file), pause()
	     * @function
	     * @param {string} event
	     * @param {Function} callback
	     */
	    on: function (event, callback) {
	      event = event.toLowerCase();
	      if (!this.events.hasOwnProperty(event)) {
	        this.events[event] = [];
	      }
	      this.events[event].push(callback);
	    },

	    /**
	     * Remove event callback
	     * @function
	     * @param {string} [event] removes all events if not specified
	     * @param {Function} [fn] removes all callbacks of event if not specified
	     */
	    off: function (event, fn) {
	      if (event !== undefined) {
	        event = event.toLowerCase();
	        if (fn !== undefined) {
	          if (this.events.hasOwnProperty(event)) {
	            arrayRemove(this.events[event], fn);
	          }
	        } else {
	          delete this.events[event];
	        }
	      } else {
	        this.events = {};
	      }
	    },

	    /**
	     * Fire an event
	     * @function
	     * @param {string} event event name
	     * @param {...} args arguments of a callback
	     * @return {bool} value is false if at least one of the event handlers which handled this event
	     * returned false. Otherwise it returns true.
	     */
	    fire: function (event, args) {
	      // `arguments` is an object, not array, in FF, so:
	      args = Array.prototype.slice.call(arguments);
	      event = event.toLowerCase();
	      var preventDefault = false;
	      if (this.events.hasOwnProperty(event)) {
	        each(this.events[event], function (callback) {
	          preventDefault = callback.apply(this, args.slice(1)) === false || preventDefault;
	        }, this);
	      }
	      if (event != 'catchall') {
	        args.unshift('catchAll');
	        preventDefault = this.fire.apply(this, args) === false || preventDefault;
	      }
	      return !preventDefault;
	    },

	    /**
	     * Read webkit dataTransfer object
	     * @param event
	     */
	    webkitReadDataTransfer: function (event) {
	      var $ = this;
	      var queue = event.dataTransfer.items.length;
	      var files = [];
	      each(event.dataTransfer.items, function (item) {
	        var entry = item.webkitGetAsEntry();
	        if (!entry) {
	          decrement();
	          return ;
	        }
	        if (entry.isFile) {
	          // due to a bug in Chrome's File System API impl - #149735
	          fileReadSuccess(item.getAsFile(), entry.fullPath);
	        } else {
	          entry.createReader().readEntries(readSuccess, readError);
	        }
	      });
	      function readSuccess(entries) {
	        queue += entries.length;
	        each(entries, function(entry) {
	          if (entry.isFile) {
	            var fullPath = entry.fullPath;
	            entry.file(function (file) {
	              fileReadSuccess(file, fullPath);
	            }, readError);
	          } else if (entry.isDirectory) {
	            entry.createReader().readEntries(readSuccess, readError);
	          }
	        });
	        decrement();
	      }
	      function fileReadSuccess(file, fullPath) {
	        // relative path should not start with "/"
	        file.relativePath = fullPath.substring(1);
	        files.push(file);
	        decrement();
	      }
	      function readError(fileError) {
	        throw fileError;
	      }
	      function decrement() {
	        if (--queue == 0) {
	          $.addFiles(files, event);
	        }
	      }
	    },

	    /**
	     * Generate unique identifier for a file
	     * @function
	     * @param {FlowFile} file
	     * @returns {string}
	     */
	    generateUniqueIdentifier: function (file) {
	      var custom = this.opts.generateUniqueIdentifier;
	      if (typeof custom === 'function') {
	        return custom(file);
	      }
	      // Some confusion in different versions of Firefox
	      var relativePath = file.relativePath || file.webkitRelativePath || file.fileName || file.name;
	      return file.size + '-' + relativePath.replace(/[^0-9a-zA-Z_-]/img, '');
	    },

	    /**
	     * Upload next chunk from the queue
	     * @function
	     * @returns {boolean}
	     * @private
	     */
	    uploadNextChunk: function (preventEvents) {
	      // In some cases (such as videos) it's really handy to upload the first
	      // and last chunk of a file quickly; this let's the server check the file's
	      // metadata and determine if there's even a point in continuing.
	      var found = false;
	      if (this.opts.prioritizeFirstAndLastChunk) {
	        each(this.files, function (file) {
	          if (!file.paused && file.chunks.length &&
	            file.chunks[0].status() === 'pending' &&
	            file.chunks[0].preprocessState === 0) {
	            file.chunks[0].send();
	            found = true;
	            return false;
	          }
	          if (!file.paused && file.chunks.length > 1 &&
	            file.chunks[file.chunks.length - 1].status() === 'pending' &&
	            file.chunks[0].preprocessState === 0) {
	            file.chunks[file.chunks.length - 1].send();
	            found = true;
	            return false;
	          }
	        });
	        if (found) {
	          return found;
	        }
	      }

	      // Now, simply look for the next, best thing to upload
	      each(this.files, function (file) {
	        if (!file.paused) {
	          each(file.chunks, function (chunk) {
	            if (chunk.status() === 'pending' && chunk.preprocessState === 0) {
	              chunk.send();
	              found = true;
	              return false;
	            }
	          });
	        }
	        if (found) {
	          return false;
	        }
	      });
	      if (found) {
	        return true;
	      }

	      // The are no more outstanding chunks to upload, check is everything is done
	      var outstanding = false;
	      each(this.files, function (file) {
	        if (!file.isComplete()) {
	          outstanding = true;
	          return false;
	        }
	      });
	      if (!outstanding && !preventEvents) {
	        // All chunks have been uploaded, complete
	        async(function () {
	          this.fire('complete');
	        }, this);
	      }
	      return false;
	    },


	    /**
	     * Assign a browse action to one or more DOM nodes.
	     * @function
	     * @param {Element|Array.<Element>} domNodes
	     * @param {boolean} isDirectory Pass in true to allow directories to
	     * @param {boolean} singleFile prevent multi file upload
	     * @param {Object} attributes set custom attributes:
	     *  http://www.w3.org/TR/html-markup/input.file.html#input.file-attributes
	     *  eg: accept: 'image/*'
	     * be selected (Chrome only).
	     */
	    assignBrowse: function (domNodes, isDirectory, singleFile, attributes) {
	      if (typeof domNodes.length === 'undefined') {
	        domNodes = [domNodes];
	      }

	      each(domNodes, function (domNode) {
	        var input;
	        if (domNode.tagName === 'INPUT' && domNode.type === 'file') {
	          input = domNode;
	        } else {
	          input = document.createElement('input');
	          input.setAttribute('type', 'file');
	          // display:none - not working in opera 12
	          extend(input.style, {
	            visibility: 'hidden',
	            position: 'absolute'
	          });
	          // for opera 12 browser, input must be assigned to a document
	          domNode.appendChild(input);
	          // https://developer.mozilla.org/en/using_files_from_web_applications)
	          // event listener is executed two times
	          // first one - original mouse click event
	          // second - input.click(), input is inside domNode
	          domNode.addEventListener('click', function() {
	            input.click();
	          }, false);
	        }
	        if (!this.opts.singleFile && !singleFile) {
	          input.setAttribute('multiple', 'multiple');
	        }
	        if (isDirectory) {
	          input.setAttribute('webkitdirectory', 'webkitdirectory');
	        }
	        each(attributes, function (value, key) {
	          input.setAttribute(key, value);
	        });
	        // When new files are added, simply append them to the overall list
	        var $ = this;
	        input.addEventListener('change', function (e) {
	          $.addFiles(e.target.files, e);
	          e.target.value = '';
	        }, false);
	      }, this);
	    },

	    /**
	     * Assign one or more DOM nodes as a drop target.
	     * @function
	     * @param {Element|Array.<Element>} domNodes
	     */
	    assignDrop: function (domNodes) {
	      if (typeof domNodes.length === 'undefined') {
	        domNodes = [domNodes];
	      }
	      each(domNodes, function (domNode) {
	        domNode.addEventListener('dragover', this.preventEvent, false);
	        domNode.addEventListener('dragenter', this.preventEvent, false);
	        domNode.addEventListener('drop', this.onDrop, false);
	      }, this);
	    },

	    /**
	     * Un-assign drop event from DOM nodes
	     * @function
	     * @param domNodes
	     */
	    unAssignDrop: function (domNodes) {
	      if (typeof domNodes.length === 'undefined') {
	        domNodes = [domNodes];
	      }
	      each(domNodes, function (domNode) {
	        domNode.removeEventListener('dragover', this.preventEvent);
	        domNode.removeEventListener('dragenter', this.preventEvent);
	        domNode.removeEventListener('drop', this.onDrop);
	      }, this);
	    },

	    /**
	     * Returns a boolean indicating whether or not the instance is currently
	     * uploading anything.
	     * @function
	     * @returns {boolean}
	     */
	    isUploading: function () {
	      var uploading = false;
	      each(this.files, function (file) {
	        if (file.isUploading()) {
	          uploading = true;
	          return false;
	        }
	      });
	      return uploading;
	    },

	    /**
	     * should upload next chunk
	     * @function
	     * @returns {boolean|number}
	     */
	    _shouldUploadNext: function () {
	      var num = 0;
	      var should = true;
	      var simultaneousUploads = this.opts.simultaneousUploads;
	      each(this.files, function (file) {
	        each(file.chunks, function(chunk) {
	          if (chunk.status() === 'uploading') {
	            num++;
	            if (num >= simultaneousUploads) {
	              should = false;
	              return false;
	            }
	          }
	        });
	      });
	      // if should is true then return uploading chunks's length
	      return should && num;
	    },

	    /**
	     * Start or resume uploading.
	     * @function
	     */
	    upload: function () {
	      // Make sure we don't start too many uploads at once
	      var ret = this._shouldUploadNext();
	      if (ret === false) {
	        return;
	      }
	      // Kick off the queue
	      this.fire('uploadStart');
	      var started = false;
	      for (var num = 1; num <= this.opts.simultaneousUploads - ret; num++) {
	        started = this.uploadNextChunk(true) || started;
	      }
	      if (!started) {
	        async(function () {
	          this.fire('complete');
	        }, this);
	      }
	    },

	    /**
	     * Resume uploading.
	     * @function
	     */
	    resume: function () {
	      each(this.files, function (file) {
	        file.resume();
	      });
	    },

	    /**
	     * Pause uploading.
	     * @function
	     */
	    pause: function () {
	      each(this.files, function (file) {
	        file.pause();
	      });
	    },

	    /**
	     * Cancel upload of all FlowFile objects and remove them from the list.
	     * @function
	     */
	    cancel: function () {
	      for (var i = this.files.length - 1; i >= 0; i--) {
	        this.files[i].cancel();
	      }
	    },

	    /**
	     * Returns a number between 0 and 1 indicating the current upload progress
	     * of all files.
	     * @function
	     * @returns {number}
	     */
	    progress: function () {
	      var totalDone = 0;
	      var totalSize = 0;
	      // Resume all chunks currently being uploaded
	      each(this.files, function (file) {
	        totalDone += file.progress() * file.size;
	        totalSize += file.size;
	      });
	      return totalSize > 0 ? totalDone / totalSize : 0;
	    },

	    /**
	     * Add a HTML5 File object to the list of files.
	     * @function
	     * @param {File} file
	     * @param {Event} [event] event is optional
	     */
	    addFile: function (file, event) {
	      this.addFiles([file], event);
	    },

	    /**
	     * Add a HTML5 File object to the list of files.
	     * @function
	     * @param {FileList|Array} fileList
	     * @param {Event} [event] event is optional
	     */
	    addFiles: function (fileList, event) {
	      var files = [];
	      each(fileList, function (file) {
	        // Uploading empty file IE10/IE11 hangs indefinitely
	        // see https://connect.microsoft.com/IE/feedback/details/813443/uploading-empty-file-ie10-ie11-hangs-indefinitely
	        // Directories have size `0` and name `.`
	        // Ignore already added files
	        if ((!ie10plus || ie10plus && file.size > 0) && !(file.size % 4096 === 0 && (file.name === '.' || file.fileName === '.')) &&
	          !this.getFromUniqueIdentifier(this.generateUniqueIdentifier(file))) {
	          var f = new FlowFile(this, file);
	          if (this.fire('fileAdded', f, event)) {
	            files.push(f);
	          }
	        }
	      }, this);
	      if (this.fire('filesAdded', files, event)) {
	        each(files, function (file) {
	          if (this.opts.singleFile && this.files.length > 0) {
	            this.removeFile(this.files[0]);
	          }
	          this.files.push(file);
	        }, this);
	      }
	      this.fire('filesSubmitted', files, event);
	    },


	    /**
	     * Cancel upload of a specific FlowFile object from the list.
	     * @function
	     * @param {FlowFile} file
	     */
	    removeFile: function (file) {
	      for (var i = this.files.length - 1; i >= 0; i--) {
	        if (this.files[i] === file) {
	          this.files.splice(i, 1);
	          file.abort();
	        }
	      }
	    },

	    /**
	     * Look up a FlowFile object by its unique identifier.
	     * @function
	     * @param {string} uniqueIdentifier
	     * @returns {boolean|FlowFile} false if file was not found
	     */
	    getFromUniqueIdentifier: function (uniqueIdentifier) {
	      var ret = false;
	      each(this.files, function (file) {
	        if (file.uniqueIdentifier === uniqueIdentifier) {
	          ret = file;
	        }
	      });
	      return ret;
	    },

	    /**
	     * Returns the total size of all files in bytes.
	     * @function
	     * @returns {number}
	     */
	    getSize: function () {
	      var totalSize = 0;
	      each(this.files, function (file) {
	        totalSize += file.size;
	      });
	      return totalSize;
	    },

	    /**
	     * Returns the total size uploaded of all files in bytes.
	     * @function
	     * @returns {number}
	     */
	    sizeUploaded: function () {
	      var size = 0;
	      each(this.files, function (file) {
	        size += file.sizeUploaded();
	      });
	      return size;
	    },

	    /**
	     * Returns remaining time to upload all files in seconds. Accuracy is based on average speed.
	     * If speed is zero, time remaining will be equal to positive infinity `Number.POSITIVE_INFINITY`
	     * @function
	     * @returns {number}
	     */
	    timeRemaining: function () {
	      var sizeDelta = 0;
	      var averageSpeed = 0;
	      each(this.files, function (file) {
	        if (!file.paused && !file.error) {
	          sizeDelta += file.size - file.sizeUploaded();
	          averageSpeed += file.averageSpeed;
	        }
	      });
	      if (sizeDelta && !averageSpeed) {
	        return Number.POSITIVE_INFINITY;
	      }
	      if (!sizeDelta && !averageSpeed) {
	        return 0;
	      }
	      return Math.floor(sizeDelta / averageSpeed);
	    }
	  };






	  /**
	   * FlowFile class
	   * @name FlowFile
	   * @param {Flow} flowObj
	   * @param {File} file
	   * @constructor
	   */
	  function FlowFile(flowObj, file) {

	    /**
	     * Reference to parent Flow instance
	     * @type {Flow}
	     */
	    this.flowObj = flowObj;

	    /**
	     * Reference to file
	     * @type {File}
	     */
	    this.file = file;

	    /**
	     * File name. Some confusion in different versions of Firefox
	     * @type {string}
	     */
	    this.name = file.fileName || file.name;

	    /**
	     * File size
	     * @type {number}
	     */
	    this.size = file.size;

	    /**
	     * Relative file path
	     * @type {string}
	     */
	    this.relativePath = file.relativePath || file.webkitRelativePath || this.name;

	    /**
	     * File unique identifier
	     * @type {string}
	     */
	    this.uniqueIdentifier = flowObj.generateUniqueIdentifier(file);

	    /**
	     * List of chunks
	     * @type {Array.<FlowChunk>}
	     */
	    this.chunks = [];

	    /**
	     * Indicated if file is paused
	     * @type {boolean}
	     */
	    this.paused = false;

	    /**
	     * Indicated if file has encountered an error
	     * @type {boolean}
	     */
	    this.error = false;

	    /**
	     * Average upload speed
	     * @type {number}
	     */
	    this.averageSpeed = 0;

	    /**
	     * Current upload speed
	     * @type {number}
	     */
	    this.currentSpeed = 0;

	    /**
	     * Date then progress was called last time
	     * @type {number}
	     * @private
	     */
	    this._lastProgressCallback = Date.now();

	    /**
	     * Previously uploaded file size
	     * @type {number}
	     * @private
	     */
	    this._prevUploadedSize = 0;

	    /**
	     * Holds previous progress
	     * @type {number}
	     * @private
	     */
	    this._prevProgress = 0;

	    this.bootstrap();
	  }

	  FlowFile.prototype = {
	    /**
	     * Update speed parameters
	     * @link http://stackoverflow.com/questions/2779600/how-to-estimate-download-time-remaining-accurately
	     * @function
	     */
	    measureSpeed: function () {
	      var timeSpan = Date.now() - this._lastProgressCallback;
	      if (!timeSpan) {
	        return ;
	      }
	      var smoothingFactor = this.flowObj.opts.speedSmoothingFactor;
	      var uploaded = this.sizeUploaded();
	      // Prevent negative upload speed after file upload resume
	      this.currentSpeed = Math.max((uploaded - this._prevUploadedSize) / timeSpan * 1000, 0);
	      this.averageSpeed = smoothingFactor * this.currentSpeed + (1 - smoothingFactor) * this.averageSpeed;
	      this._prevUploadedSize = uploaded;
	    },

	    /**
	     * For internal usage only.
	     * Callback when something happens within the chunk.
	     * @function
	     * @param {FlowChunk} chunk
	     * @param {string} event can be 'progress', 'success', 'error' or 'retry'
	     * @param {string} [message]
	     */
	    chunkEvent: function (chunk, event, message) {
	      switch (event) {
	        case 'progress':
	          if (Date.now() - this._lastProgressCallback <
	            this.flowObj.opts.progressCallbacksInterval) {
	            break;
	          }
	          this.measureSpeed();
	          this.flowObj.fire('fileProgress', this, chunk);
	          this.flowObj.fire('progress');
	          this._lastProgressCallback = Date.now();
	          break;
	        case 'error':
	          this.error = true;
	          this.abort(true);
	          this.flowObj.fire('fileError', this, message, chunk);
	          this.flowObj.fire('error', message, this, chunk);
	          break;
	        case 'success':
	          if (this.error) {
	            return;
	          }
	          this.measureSpeed();
	          this.flowObj.fire('fileProgress', this, chunk);
	          this.flowObj.fire('progress');
	          this._lastProgressCallback = Date.now();
	          if (this.isComplete()) {
	            this.currentSpeed = 0;
	            this.averageSpeed = 0;
	            this.flowObj.fire('fileSuccess', this, message, chunk);
	          }
	          break;
	        case 'retry':
	          this.flowObj.fire('fileRetry', this, chunk);
	          break;
	      }
	    },

	    /**
	     * Pause file upload
	     * @function
	     */
	    pause: function() {
	      this.paused = true;
	      this.abort();
	    },

	    /**
	     * Resume file upload
	     * @function
	     */
	    resume: function() {
	      this.paused = false;
	      this.flowObj.upload();
	    },

	    /**
	     * Abort current upload
	     * @function
	     */
	    abort: function (reset) {
	      this.currentSpeed = 0;
	      this.averageSpeed = 0;
	      var chunks = this.chunks;
	      if (reset) {
	        this.chunks = [];
	      }
	      each(chunks, function (c) {
	        if (c.status() === 'uploading') {
	          c.abort();
	          this.flowObj.uploadNextChunk();
	        }
	      }, this);
	    },

	    /**
	     * Cancel current upload and remove from a list
	     * @function
	     */
	    cancel: function () {
	      this.flowObj.removeFile(this);
	    },

	    /**
	     * Retry aborted file upload
	     * @function
	     */
	    retry: function () {
	      this.bootstrap();
	      this.flowObj.upload();
	    },

	    /**
	     * Clear current chunks and slice file again
	     * @function
	     */
	    bootstrap: function () {
	      this.abort(true);
	      this.error = false;
	      // Rebuild stack of chunks from file
	      this._prevProgress = 0;
	      var round = this.flowObj.opts.forceChunkSize ? Math.ceil : Math.floor;
	      var chunks = Math.max(
	        round(this.file.size / this.flowObj.opts.chunkSize), 1
	      );
	      for (var offset = 0; offset < chunks; offset++) {
	        this.chunks.push(
	          new FlowChunk(this.flowObj, this, offset)
	        );
	      }
	    },

	    /**
	     * Get current upload progress status
	     * @function
	     * @returns {number} from 0 to 1
	     */
	    progress: function () {
	      if (this.error) {
	        return 1;
	      }
	      if (this.chunks.length === 1) {
	        this._prevProgress = Math.max(this._prevProgress, this.chunks[0].progress());
	        return this._prevProgress;
	      }
	      // Sum up progress across everything
	      var bytesLoaded = 0;
	      each(this.chunks, function (c) {
	        // get chunk progress relative to entire file
	        bytesLoaded += c.progress() * (c.endByte - c.startByte);
	      });
	      var percent = bytesLoaded / this.size;
	      // We don't want to lose percentages when an upload is paused
	      this._prevProgress = Math.max(this._prevProgress, percent > 0.9999 ? 1 : percent);
	      return this._prevProgress;
	    },

	    /**
	     * Indicates if file is being uploaded at the moment
	     * @function
	     * @returns {boolean}
	     */
	    isUploading: function () {
	      var uploading = false;
	      each(this.chunks, function (chunk) {
	        if (chunk.status() === 'uploading') {
	          uploading = true;
	          return false;
	        }
	      });
	      return uploading;
	    },

	    /**
	     * Indicates if file is has finished uploading and received a response
	     * @function
	     * @returns {boolean}
	     */
	    isComplete: function () {
	      var outstanding = false;
	      each(this.chunks, function (chunk) {
	        var status = chunk.status();
	        if (status === 'pending' || status === 'uploading' || chunk.preprocessState === 1) {
	          outstanding = true;
	          return false;
	        }
	      });
	      return !outstanding;
	    },

	    /**
	     * Count total size uploaded
	     * @function
	     * @returns {number}
	     */
	    sizeUploaded: function () {
	      var size = 0;
	      each(this.chunks, function (chunk) {
	        size += chunk.sizeUploaded();
	      });
	      return size;
	    },

	    /**
	     * Returns remaining time to finish upload file in seconds. Accuracy is based on average speed.
	     * If speed is zero, time remaining will be equal to positive infinity `Number.POSITIVE_INFINITY`
	     * @function
	     * @returns {number}
	     */
	    timeRemaining: function () {
	      if (this.paused || this.error) {
	        return 0;
	      }
	      var delta = this.size - this.sizeUploaded();
	      if (delta && !this.averageSpeed) {
	        return Number.POSITIVE_INFINITY;
	      }
	      if (!delta && !this.averageSpeed) {
	        return 0;
	      }
	      return Math.floor(delta / this.averageSpeed);
	    },

	    /**
	     * Get file type
	     * @function
	     * @returns {string}
	     */
	    getType: function () {
	      return this.file.type && this.file.type.split('/')[1];
	    },

	    /**
	     * Get file extension
	     * @function
	     * @returns {string}
	     */
	    getExtension: function () {
	      return this.name.substr((~-this.name.lastIndexOf(".") >>> 0) + 2).toLowerCase();
	    }
	  };








	  /**
	   * Class for storing a single chunk
	   * @name FlowChunk
	   * @param {Flow} flowObj
	   * @param {FlowFile} fileObj
	   * @param {number} offset
	   * @constructor
	   */
	  function FlowChunk(flowObj, fileObj, offset) {

	    /**
	     * Reference to parent flow object
	     * @type {Flow}
	     */
	    this.flowObj = flowObj;

	    /**
	     * Reference to parent FlowFile object
	     * @type {FlowFile}
	     */
	    this.fileObj = fileObj;

	    /**
	     * File size
	     * @type {number}
	     */
	    this.fileObjSize = fileObj.size;

	    /**
	     * File offset
	     * @type {number}
	     */
	    this.offset = offset;

	    /**
	     * Indicates if chunk existence was checked on the server
	     * @type {boolean}
	     */
	    this.tested = false;

	    /**
	     * Number of retries performed
	     * @type {number}
	     */
	    this.retries = 0;

	    /**
	     * Pending retry
	     * @type {boolean}
	     */
	    this.pendingRetry = false;

	    /**
	     * Preprocess state
	     * @type {number} 0 = unprocessed, 1 = processing, 2 = finished
	     */
	    this.preprocessState = 0;

	    /**
	     * Bytes transferred from total request size
	     * @type {number}
	     */
	    this.loaded = 0;

	    /**
	     * Total request size
	     * @type {number}
	     */
	    this.total = 0;

	    /**
	     * Size of a chunk
	     * @type {number}
	     */
	    var chunkSize = this.flowObj.opts.chunkSize;

	    /**
	     * Chunk start byte in a file
	     * @type {number}
	     */
	    this.startByte = this.offset * chunkSize;

	    /**
	     * Chunk end byte in a file
	     * @type {number}
	     */
	    this.endByte = Math.min(this.fileObjSize, (this.offset + 1) * chunkSize);

	    /**
	     * XMLHttpRequest
	     * @type {XMLHttpRequest}
	     */
	    this.xhr = null;

	    if (this.fileObjSize - this.endByte < chunkSize &&
	        !this.flowObj.opts.forceChunkSize) {
	      // The last chunk will be bigger than the chunk size,
	      // but less than 2*chunkSize
	      this.endByte = this.fileObjSize;
	    }

	    var $ = this;


	    /**
	     * Send chunk event
	     * @param event
	     * @param {...} args arguments of a callback
	     */
	    this.event = function (event, args) {
	      args = Array.prototype.slice.call(arguments);
	      args.unshift($);
	      $.fileObj.chunkEvent.apply($.fileObj, args);
	    };
	    /**
	     * Catch progress event
	     * @param {ProgressEvent} event
	     */
	    this.progressHandler = function(event) {
	      if (event.lengthComputable) {
	        $.loaded = event.loaded ;
	        $.total = event.total;
	      }
	      $.event('progress', event);
	    };

	    /**
	     * Catch test event
	     * @param {Event} event
	     */
	    this.testHandler = function(event) {
	      var status = $.status(true);
	      if (status === 'error') {
	        $.event(status, $.message());
	        $.flowObj.uploadNextChunk();
	      } else if (status === 'success') {
	        $.tested = true;
	        $.event(status, $.message());
	        $.flowObj.uploadNextChunk();
	      } else if (!$.fileObj.paused) {
	        // Error might be caused by file pause method
	        // Chunks does not exist on the server side
	        $.tested = true;
	        $.send();
	      }
	    };

	    /**
	     * Upload has stopped
	     * @param {Event} event
	     */
	    this.doneHandler = function(event) {
	      var status = $.status();
	      if (status === 'success' || status === 'error') {
	        $.event(status, $.message());
	        $.flowObj.uploadNextChunk();
	      } else {
	        $.event('retry', $.message());
	        $.pendingRetry = true;
	        $.abort();
	        $.retries++;
	        var retryInterval = $.flowObj.opts.chunkRetryInterval;
	        if (retryInterval !== null) {
	          setTimeout(function () {
	            $.send();
	          }, retryInterval);
	        } else {
	          $.send();
	        }
	      }
	    };
	  }

	  FlowChunk.prototype = {
	    /**
	     * Get params for a request
	     * @function
	     */
	    getParams: function () {
	      return {
	        flowChunkNumber: this.offset + 1,
	        flowChunkSize: this.flowObj.opts.chunkSize,
	        flowCurrentChunkSize: this.endByte - this.startByte,
	        flowTotalSize: this.fileObjSize,
	        flowIdentifier: this.fileObj.uniqueIdentifier,
	        flowFilename: this.fileObj.name,
	        flowRelativePath: this.fileObj.relativePath,
	        flowTotalChunks: this.fileObj.chunks.length
	      };
	    },

	    /**
	     * Get target option with query params
	     * @function
	     * @param params
	     * @returns {string}
	     */
	    getTarget: function(target, params){
	      if(target.indexOf('?') < 0) {
	        target += '?';
	      } else {
	        target += '&';
	      }
	      return target + params.join('&');
	    },

	    /**
	     * Makes a GET request without any data to see if the chunk has already
	     * been uploaded in a previous session
	     * @function
	     */
	    test: function () {
	      // Set up request and listen for event
	      this.xhr = new XMLHttpRequest();
	      this.xhr.addEventListener("load", this.testHandler, false);
	      this.xhr.addEventListener("error", this.testHandler, false);
	      var testMethod = evalOpts(this.flowObj.opts.testMethod, this.fileObj, this);
	      var data = this.prepareXhrRequest(testMethod, true);
	      this.xhr.send(data);
	    },

	    /**
	     * Finish preprocess state
	     * @function
	     */
	    preprocessFinished: function () {
	      this.preprocessState = 2;
	      this.send();
	    },

	    /**
	     * Uploads the actual data in a POST call
	     * @function
	     */
	    send: function () {
	      var preprocess = this.flowObj.opts.preprocess;
	      if (typeof preprocess === 'function') {
	        switch (this.preprocessState) {
	          case 0:
	            this.preprocessState = 1;
	            preprocess(this);
	            return;
	          case 1:
	            return;
	        }
	      }
	      if (this.flowObj.opts.testChunks && !this.tested) {
	        this.test();
	        return;
	      }

	      this.loaded = 0;
	      this.total = 0;
	      this.pendingRetry = false;

	      var func = (this.fileObj.file.slice ? 'slice' :
	        (this.fileObj.file.mozSlice ? 'mozSlice' :
	          (this.fileObj.file.webkitSlice ? 'webkitSlice' :
	            'slice')));
	      var bytes = this.fileObj.file[func](this.startByte, this.endByte, this.fileObj.file.type);

	      // Set up request and listen for event
	      this.xhr = new XMLHttpRequest();
	      this.xhr.upload.addEventListener('progress', this.progressHandler, false);
	      this.xhr.addEventListener("load", this.doneHandler, false);
	      this.xhr.addEventListener("error", this.doneHandler, false);

	      var uploadMethod = evalOpts(this.flowObj.opts.uploadMethod, this.fileObj, this);
	      var data = this.prepareXhrRequest(uploadMethod, false, this.flowObj.opts.method, bytes);
	      this.xhr.send(data);
	    },

	    /**
	     * Abort current xhr request
	     * @function
	     */
	    abort: function () {
	      // Abort and reset
	      var xhr = this.xhr;
	      this.xhr = null;
	      if (xhr) {
	        xhr.abort();
	      }
	    },

	    /**
	     * Retrieve current chunk upload status
	     * @function
	     * @returns {string} 'pending', 'uploading', 'success', 'error'
	     */
	    status: function (isTest) {
	      if (this.pendingRetry || this.preprocessState === 1) {
	        // if pending retry then that's effectively the same as actively uploading,
	        // there might just be a slight delay before the retry starts
	        return 'uploading';
	      } else if (!this.xhr) {
	        return 'pending';
	      } else if (this.xhr.readyState < 4) {
	        // Status is really 'OPENED', 'HEADERS_RECEIVED'
	        // or 'LOADING' - meaning that stuff is happening
	        return 'uploading';
	      } else {
	        if (this.flowObj.opts.successStatuses.indexOf(this.xhr.status) > -1) {
	          // HTTP 200, perfect
			      // HTTP 202 Accepted - The request has been accepted for processing, but the processing has not been completed.
	          return 'success';
	        } else if (this.flowObj.opts.permanentErrors.indexOf(this.xhr.status) > -1 ||
	            !isTest && this.retries >= this.flowObj.opts.maxChunkRetries) {
	          // HTTP 415/500/501, permanent error
	          return 'error';
	        } else {
	          // this should never happen, but we'll reset and queue a retry
	          // a likely case for this would be 503 service unavailable
	          this.abort();
	          return 'pending';
	        }
	      }
	    },

	    /**
	     * Get response from xhr request
	     * @function
	     * @returns {String}
	     */
	    message: function () {
	      return this.xhr ? this.xhr.responseText : '';
	    },

	    /**
	     * Get upload progress
	     * @function
	     * @returns {number}
	     */
	    progress: function () {
	      if (this.pendingRetry) {
	        return 0;
	      }
	      var s = this.status();
	      if (s === 'success' || s === 'error') {
	        return 1;
	      } else if (s === 'pending') {
	        return 0;
	      } else {
	        return this.total > 0 ? this.loaded / this.total : 0;
	      }
	    },

	    /**
	     * Count total size uploaded
	     * @function
	     * @returns {number}
	     */
	    sizeUploaded: function () {
	      var size = this.endByte - this.startByte;
	      // can't return only chunk.loaded value, because it is bigger than chunk size
	      if (this.status() !== 'success') {
	        size = this.progress() * size;
	      }
	      return size;
	    },

	    /**
	     * Prepare Xhr request. Set query, headers and data
	     * @param {string} method GET or POST
	     * @param {bool} isTest is this a test request
	     * @param {string} [paramsMethod] octet or form
	     * @param {Blob} [blob] to send
	     * @returns {FormData|Blob|Null} data to send
	     */
	    prepareXhrRequest: function(method, isTest, paramsMethod, blob) {
	      // Add data from the query options
	      var query = evalOpts(this.flowObj.opts.query, this.fileObj, this, isTest);
	      query = extend(this.getParams(), query);

	      var target = evalOpts(this.flowObj.opts.target, this.fileObj, this, isTest);
	      var data = null;
	      if (method === 'GET' || paramsMethod === 'octet') {
	        // Add data from the query options
	        var params = [];
	        each(query, function (v, k) {
	          params.push([encodeURIComponent(k), encodeURIComponent(v)].join('='));
	        });
	        target = this.getTarget(target, params);
	        data = blob || null;
	      } else {
	        // Add data from the query options
	        data = new FormData();
	        each(query, function (v, k) {
	          data.append(k, v);
	        });
	        data.append(this.flowObj.opts.fileParameterName, blob, this.fileObj.file.name);
	      }

	      this.xhr.open(method, target, true);
	      this.xhr.withCredentials = this.flowObj.opts.withCredentials;

	      // Add data from header options
	      each(evalOpts(this.flowObj.opts.headers, this.fileObj, this, isTest), function (v, k) {
	        this.xhr.setRequestHeader(k, v);
	      }, this);

	      return data;
	    }
	  };

	  /**
	   * Remove value from array
	   * @param array
	   * @param value
	   */
	  function arrayRemove(array, value) {
	    var index = array.indexOf(value);
	    if (index > -1) {
	      array.splice(index, 1);
	    }
	  }

	  /**
	   * If option is a function, evaluate it with given params
	   * @param {*} data
	   * @param {...} args arguments of a callback
	   * @returns {*}
	   */
	  function evalOpts(data, args) {
	    if (typeof data === "function") {
	      // `arguments` is an object, not array, in FF, so:
	      args = Array.prototype.slice.call(arguments);
	      data = data.apply(null, args.slice(1));
	    }
	    return data;
	  }
	  Flow.evalOpts = evalOpts;

	  /**
	   * Execute function asynchronously
	   * @param fn
	   * @param context
	   */
	  function async(fn, context) {
	    setTimeout(fn.bind(context), 0);
	  }

	  /**
	   * Extends the destination object `dst` by copying all of the properties from
	   * the `src` object(s) to `dst`. You can specify multiple `src` objects.
	   * @function
	   * @param {Object} dst Destination object.
	   * @param {...Object} src Source object(s).
	   * @returns {Object} Reference to `dst`.
	   */
	  function extend(dst, src) {
	    each(arguments, function(obj) {
	      if (obj !== dst) {
	        each(obj, function(value, key){
	          dst[key] = value;
	        });
	      }
	    });
	    return dst;
	  }
	  Flow.extend = extend;

	  /**
	   * Iterate each element of an object
	   * @function
	   * @param {Array|Object} obj object or an array to iterate
	   * @param {Function} callback first argument is a value and second is a key.
	   * @param {Object=} context Object to become context (`this`) for the iterator function.
	   */
	  function each(obj, callback, context) {
	    if (!obj) {
	      return ;
	    }
	    var key;
	    // Is Array?
	    if (typeof(obj.length) !== 'undefined') {
	      for (key = 0; key < obj.length; key++) {
	        if (callback.call(context, obj[key], key) === false) {
	          return ;
	        }
	      }
	    } else {
	      for (key in obj) {
	        if (obj.hasOwnProperty(key) && callback.call(context, obj[key], key) === false) {
	          return ;
	        }
	      }
	    }
	  }
	  Flow.each = each;

	  /**
	   * FlowFile constructor
	   * @type {FlowFile}
	   */
	  Flow.FlowFile = FlowFile;

	  /**
	   * FlowFile constructor
	   * @type {FlowChunk}
	   */
	  Flow.FlowChunk = FlowChunk;

	  /**
	   * Library version
	   * @type {string}
	   */
	  Flow.version = '2.9.0';

	  if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	    // Expose Flow as module.exports in loaders that implement the Node
	    // module pattern (including browserify). Do not create the global, since
	    // the user will be storing it themselves locally, and globals are frowned
	    // upon in the Node module world.
	    module.exports = Flow;
	  } else {
	    // Otherwise expose Flow to the global object as usual
	    window.Flow = Flow;

	    // Register as a named AMD module, since Flow can be concatenated with other
	    // files that may use define, but not via a proper concatenation script that
	    // understands anonymous AMD modules. A named AMD is safest and most robust
	    // way to register. Lowercase flow is used because AMD module names are
	    // derived from file names, and Flow is normally delivered in a lowercase
	    // file name. Do this after creating the global so that if an AMD module wants
	    // to call noConflict to hide this version of Flow, it will work.
	    if ( true ) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return Flow; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	  }
	})(window, document);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(143)(module)))

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/flow/styles/flow.css", function() {
			var newContent = require("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/flow/styles/flow.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	exports.push([module.id, ".flow-upload .flow-drop {\n  background-color: rgba(242, 245, 248, 0.01);\n  padding: 25px;\n  border-radius: 2px;\n  border: 2px dashed #dbdfe3;\n}\n", ""]);

/***/ },

/***/ 140:
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

/***/ 142:
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

/***/ 143:
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


/***/ }

});
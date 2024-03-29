webpackJsonp([5],{

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Big chart controller
	 * @module: app.dashboard
	 * @desc: Show example of chart usage
	 */
	module.exports = function (module) {
	  module.controller('invoiceChartCtrl', ['$scope', '$http', function ($scope, $http) {
	    /** chart options */
	    $scope.options = {
	      series: {
	        lines: {
	          show: false
	        },
	        splines: {
	          show: true,
	          tension: 0.5,
	          lineWidth: 5
	        },
	        points: {
	          show: true,
	          radius: 5
	        }
	      },
	      grid: {
	        borderColor: '#f0f0f0',
	        borderWidth: 1,
	        hoverable: true,
	        backgroundColor: 'transparent'
	      },
	      tooltip: true,
	      tooltipOpts: {
	        content: '%y'
	      },
	      xaxis: {
	        tickColor: '#f0f0f0',
	        mode: 'categories'
	      },
	      yaxis: {
	        tickColor: '#f0f0f0',
	        tickFormatter: function(v) {
	          return '$'+v;
	        }
	      },
	      shadowSize: 5
	    };

	    /** chart data */
	    $scope.dataset = [{
	      'label': 'You',
	      'color': '#83b81a',
	      'data': [
	        ['Jan', 7574],
	        ['Feb', 6085],
	        ['Mar', 9775],
	        ['Apr', 6739],
	        ['May', 9002],
	        ['Jun', 8525],
	        ['Jul', 7555],
	        ['Aug', 9137],
	        ['Sep', 7799],
	        ['Oct', 9966],
	        ['Nov', 9897],
	        ['Dec', 6185]
	      ]
	    }, {
	      'label': 'Others',
	      'color': '#55acee',
	      'data': [
	        ['Jan', 8190],
	        ['Feb', 5469],
	        ['Mar', 7844],
	        ['Apr', 5848],
	        ['May', 6380],
	        ['Jun', 5508],
	        ['Jul', 8915],
	        ['Aug', 7775],
	        ['Sep', 8177],
	        ['Oct', 6817],
	        ['Nov', 9586],
	        ['Dec', 7982]
	      ]
	    }];
	  }]);
	};

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Donut chart controller
	 * @module: app.dashboard
	 * @desc: Show example of chart usage
	 */
	module.exports = function (module) {
	  module.controller('donutChartCtrl', ['$scope', '$http', function ($scope, $http) {
	    /** Chart option */
	    $scope.options = {
	      series: {
	        pie: {
	          innerRadius: 0.45,
	          show: true
	        }
	      },
	      legend: {
	        show: false
	      }
	    };

	    /** chart data */
	    $scope.dataset = [{
	      'label': 'Receive',
	      'color': '#83b81a',
	      'data': 40
	    }, {
	      'label': 'Sent',
	      'color': '#55acee',
	      'data': 60
	    }, {
	      'label': 'Return',
	      'color': '#dd4b39',
	      'data': 20
	    }, {
	      'label': 'Fail',
	      'color': '#fff',
	      'data': 20
	    }];
	  }]);
	};

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Activities feed controller
	 * @module: app.dashboard
	 * @desc: Show some activity feed
	 */
	module.exports = function (module) {
	  module.controller('activitiesFeedCtrl', ['$scope', '$http', function ($scope, $http) {
	    $http({
	      url: 'modules/dashboard/data/activities-feed',
	      method: 'GET'
	    }).success(function (data) {
	      $scope.activities = data;
	    });
	  }]);
	};

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Vector map controller
	 * @module: app.dashboard
	 * @desc: vector map
	 */
	module.exports = function (module) {
	  module.controller('vectorMapCtrl', ['$scope', '$http', function ($scope, $http) {
	    // vector map options
	    $scope.options = {
	      map: 'world_mill_en',
	      backgroundColor: 'transparent',
	      regionStyle: {
	        initial: {
	          fill: '#888'
	        }
	      },
	      series: {
	        regions: [{
	          values: {'BR': 50, 'RU': 10, 'JP': 80, 'AU': 100},
	          scale: ['#2969B0', '#40D3B7', '#6CC1ED', '#FCCD1B', '#F86B4F', '#1abc9c'],
	          normalizeFunction: 'polynomial'
	        }]
	      }
	    };
	  }]);
	};

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Flot Chart
	 * @desc: plotting library for jQuery
	 */
	module.exports = function () {
	  /** core script */
	  __webpack_require__(110);
	  __webpack_require__(111);
	  __webpack_require__(112);
	  __webpack_require__(113);
	  __webpack_require__(114);
	  __webpack_require__(104);
	  __webpack_require__(105);

	  /** stylesheet */
	  __webpack_require__(121);
	};

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Jvectormap
	 * @desc: vector map library
	 */
	module.exports = function () {
	  /** dependencies */

	  /** core script */
	  __webpack_require__(92);
	  __webpack_require__(93);

	  /** stylesheet */
	  __webpack_require__(123);
	};

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * jVectorMap version 1.2.2
	 *
	 * Copyright 2011-2013, Kirill Lebedev
	 * Licensed under the MIT license.
	 *
	 */(function(e){var t={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};e.fn.vectorMap=function(e){var n,r,i,n=this.children(".jvectormap-container").data("mapObject");if(e==="addMap")jvm.WorldMap.maps[arguments[1]]=arguments[2];else{if(!(e!=="set"&&e!=="get"||!t[e][arguments[1]]))return r=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),n[e+r].apply(n,Array.prototype.slice.call(arguments,2));e=e||{},e.container=this,n=new jvm.WorldMap(e)}return this}})(jQuery),function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=!0,o=0,u=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),u=i,n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS&&(u=0,o=-1*i),n.wheelDeltaY!==undefined&&(u=n.wheelDeltaY/120),n.wheelDeltaX!==undefined&&(o=-1*n.wheelDeltaX/120),r.unshift(t,i,o,u),(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var n=t.length;n;)e.event.fixHooks[t[--n]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],r,!1);else this.onmousewheel=r},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],r,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);var jvm={inherits:function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.parentClass=t},mixin:function(e,t){var n;for(n in t.prototype)t.prototype.hasOwnProperty(n)&&(e.prototype[n]=t.prototype[n])},min:function(e){var t=Number.MAX_VALUE,n;if(e instanceof Array)for(n=0;n<e.length;n++)e[n]<t&&(t=e[n]);else for(n in e)e[n]<t&&(t=e[n]);return t},max:function(e){var t=Number.MIN_VALUE,n;if(e instanceof Array)for(n=0;n<e.length;n++)e[n]>t&&(t=e[n]);else for(n in e)e[n]>t&&(t=e[n]);return t},keys:function(e){var t=[],n;for(n in e)t.push(n);return t},values:function(e){var t=[],n,r;for(r=0;r<arguments.length;r++){e=arguments[r];for(n in e)t.push(e[n])}return t}};jvm.$=jQuery,jvm.AbstractElement=function(e,t){this.node=this.createElement(e),this.name=e,this.properties={},t&&this.set(t)},jvm.AbstractElement.prototype.set=function(e,t){var n;if(typeof e=="object")for(n in e)this.properties[n]=e[n],this.applyAttr(n,e[n]);else this.properties[e]=t,this.applyAttr(e,t)},jvm.AbstractElement.prototype.get=function(e){return this.properties[e]},jvm.AbstractElement.prototype.applyAttr=function(e,t){this.node.setAttribute(e,t)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(e,t,n){this.container=e,this.setSize(t,n),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(e,t){t=t||this.rootElement,t.add(e),e.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(e,t,n){var r=new jvm[this.classPrefix+"PathElement"](e,t);return this.add(r,n),r},jvm.AbstractCanvasElement.prototype.addCircle=function(e,t,n){var r=new jvm[this.classPrefix+"CircleElement"](e,t);return this.add(r,n),r},jvm.AbstractCanvasElement.prototype.addGroup=function(e){var t=new jvm[this.classPrefix+"GroupElement"];return e?e.node.appendChild(t.node):this.node.appendChild(t.node),t.canvas=this,t},jvm.AbstractShapeElement=function(e,t,n){this.style=n||{},this.style.current={},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setHovered=function(e){this.isHovered!==e&&(this.isHovered=e,this.updateStyle())},jvm.AbstractShapeElement.prototype.setSelected=function(e){this.isSelected!==e&&(this.isSelected=e,this.updateStyle(),jvm.$(this.node).trigger("selected",[e]))},jvm.AbstractShapeElement.prototype.setStyle=function(e,t){var n={};typeof e=="object"?n=e:n[e]=t,jvm.$.extend(this.style.current,n),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var e={};jvm.AbstractShapeElement.mergeStyles(e,this.style.initial),jvm.AbstractShapeElement.mergeStyles(e,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(e,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(e,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(e,this.style.selectedHover)),this.set(e)},jvm.AbstractShapeElement.mergeStyles=function(e,t){var n;t=t||{};for(n in t)t[n]===null?delete e[n]:e[n]=t[n]},jvm.SVGElement=function(e,t){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(e){return document.createElementNS(jvm.SVGElement.svgns,e)},jvm.SVGElement.prototype.addClass=function(e){this.node.setAttribute("class",e)},jvm.SVGElement.prototype.getElementCtr=function(e){return jvm["SVG"+e]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(e){this.node.appendChild(e.node)},jvm.SVGCanvasElement=function(e,t,n){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(e,t){this.width=e,this.height=t,this.node.setAttribute("width",e),this.node.setAttribute("height",t)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(e,t,n){this.scale=e,this.transX=t,this.transY=n,this.rootElement.node.setAttribute("transform","scale("+e+") translate("+t+", "+n+")")},jvm.SVGShapeElement=function(e,t,n){jvm.SVGShapeElement.parentClass.call(this,e,t),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGPathElement=function(e,t){jvm.SVGPathElement.parentClass.call(this,"path",e,t),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(e,t){jvm.SVGCircleElement.parentClass.call(this,"circle",e,t)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.VMLElement=function(e,t){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(e){return document.createElement("<rvml:"+e+' class="rvml">')}}catch(e){jvm.VMLElement.prototype.createElement=function(e){return document.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(e){return jvm["VML"+e]},jvm.VMLElement.prototype.addClass=function(e){jvm.$(this.node).addClass(e)},jvm.VMLElement.prototype.applyAttr=function(e,t){this.node[e]=t},jvm.VMLElement.prototype.getBBox=function(){var e=jvm.$(this.node);return{x:e.position().left/this.canvas.scale,y:e.position().top/this.canvas.scale,width:e.width()/this.canvas.scale,height:e.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(e){this.node.appendChild(e.node)},jvm.VMLCanvasElement=function(e,t,n){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(e,t){var n,r,i,s;this.width=e,this.height=t,this.node.style.width=e+"px",this.node.style.height=t+"px",this.node.coordsize=e+" "+t,this.node.coordorigin="0 0";if(this.rootElement){n=this.rootElement.node.getElementsByTagName("shape");for(i=0,s=n.length;i<s;i++)n[i].coordsize=e+" "+t,n[i].style.width=e+"px",n[i].style.height=t+"px";r=this.node.getElementsByTagName("group");for(i=0,s=r.length;i<s;i++)r[i].coordsize=e+" "+t,r[i].style.width=e+"px",r[i].style.height=t+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(e,t,n){this.scale=e,this.transX=t,this.transY=n,this.rootElement.node.coordorigin=this.width-t-this.width/100+","+(this.height-n-this.height/100),this.rootElement.node.coordsize=this.width/e+","+this.height/e},jvm.VMLShapeElement=function(e,t){jvm.VMLShapeElement.parentClass.call(this,e,t),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(e,t){switch(e){case"fill":this.node.fillcolor=t;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(t*100)+"%";break;case"stroke":t==="none"?this.node.stroked=!1:this.node.stroked=!0,this.node.strokecolor=t;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(t*100)+"%";break;case"stroke-width":parseInt(t,10)===0?this.node.stroked=!1:this.node.stroked=!0,this.node.strokeweight=t;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(t);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(e,t){var n=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",e,t),this.node.coordorigin="0 0",n.node.on=!0,n.node.matrix="0.01,0,0,0.01,0,0",n.node.offset="0,0",this.node.appendChild(n.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(e,t){e==="d"?this.node.path=jvm.VMLPathElement.pathSvgToVml(t):jvm.VMLShapeElement.prototype.applyAttr.call(this,e,t)},jvm.VMLPathElement.pathSvgToVml=function(e){var t="",n=0,r=0,i,s;return e=e.replace(/(-?\d+)e(-?\d+)/g,"0"),e.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(e,t,o,u){o=o.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),o[0]||o.shift();for(var a=0,f=o.length;a<f;a++)o[a]=Math.round(100*o[a]);switch(t){case"m":return n+=o[0],r+=o[1],"t"+o.join(",");case"M":return n=o[0],r=o[1],"m"+o.join(",");case"l":return n+=o[0],r+=o[1],"r"+o.join(",");case"L":return n=o[0],r=o[1],"l"+o.join(",");case"h":return n+=o[0],"r"+o[0]+",0";case"H":return n=o[0],"l"+n+","+r;case"v":return r+=o[0],"r0,"+o[0];case"V":return r=o[0],"l"+n+","+r;case"c":return i=n+o[o.length-4],s=r+o[o.length-3],n+=o[o.length-2],r+=o[o.length-1],"v"+o.join(",");case"C":return i=o[o.length-4],s=o[o.length-3],n=o[o.length-2],r=o[o.length-1],"c"+o.join(",");case"s":return o.unshift(r-s),o.unshift(n-i),i=n+o[o.length-4],s=r+o[o.length-3],n+=o[o.length-2],r+=o[o.length-1],"v"+o.join(",");case"S":return o.unshift(r+r-s),o.unshift(n+n-i),i=o[o.length-4],s=o[o.length-3],n=o[o.length-2],r=o[o.length-1],"c"+o.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(e,t){jvm.VMLCircleElement.parentClass.call(this,"oval",e,t)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(e,t){switch(e){case"r":this.node.style.width=t*2+"px",this.node.style.height=t*2+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!t)return;this.node.style.left=t-(this.get("r")||0)+"px";break;case"cy":if(!t)return;this.node.style.top=t-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,e,t)}},jvm.VectorCanvas=function(e,t,n){return this.mode=window.SVGAngle?"svg":"vml",this.mode=="svg"?this.impl=new jvm.SVGCanvasElement(e,t,n):this.impl=new jvm.VMLCanvasElement(e,t,n),this.impl},jvm.SimpleScale=function(e){this.scale=e},jvm.SimpleScale.prototype.getValue=function(e){return e},jvm.OrdinalScale=function(e){this.scale=e},jvm.OrdinalScale.prototype.getValue=function(e){return this.scale[e]},jvm.NumericScale=function(e,t,n,r){this.scale=[],t=t||"linear",e&&this.setScale(e),t&&this.setNormalizeFunction(t),n&&this.setMin(n),r&&this.setMax(r)},jvm.NumericScale.prototype={setMin:function(e){this.clearMinValue=e,typeof this.normalize=="function"?this.minValue=this.normalize(e):this.minValue=e},setMax:function(e){this.clearMaxValue=e,typeof this.normalize=="function"?this.maxValue=this.normalize(e):this.maxValue=e},setScale:function(e){var t;for(t=0;t<e.length;t++)this.scale[t]=[e[t]]},setNormalizeFunction:function(e){e==="polynomial"?this.normalize=function(e){return Math.pow(e,.2)}:e==="linear"?delete this.normalize:this.normalize=e,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(e){var t=[],n=0,r,i=0,s;typeof this.normalize=="function"&&(e=this.normalize(e));for(i=0;i<this.scale.length-1;i++)r=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])),t.push(r),n+=r;s=(this.maxValue-this.minValue)/n;for(i=0;i<t.length;i++)t[i]*=s;i=0,e-=this.minValue;while(e-t[i]>=0)e-=t[i],i++;return i==this.scale.length-1?e=this.vectorToNum(this.scale[i]):e=this.vectorToNum(this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),e/t[i]))),e},vectorToNum:function(e){var t=0,n;for(n=0;n<e.length;n++)t+=Math.round(e[n])*Math.pow(256,e.length-n-1);return t},vectorSubtract:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]-t[r];return n},vectorAdd:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]+t[r];return n},vectorMult:function(e,t){var n=[],r;for(r=0;r<e.length;r++)n[r]=e[r]*t;return n},vectorLength:function(e){var t=0,n;for(n=0;n<e.length;n++)t+=e[n]*e[n];return Math.sqrt(t)}},jvm.ColorScale=function(e,t,n,r){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(e){var t;for(t=0;t<e.length;t++)this.scale[t]=jvm.ColorScale.rgbToArray(e[t])},jvm.ColorScale.prototype.getValue=function(e){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,e))},jvm.ColorScale.arrayToRgb=function(e){var t="#",n,r;for(r=0;r<e.length;r++)n=e[r].toString(16),t+=n.length==1?"0"+n:n;return t},jvm.ColorScale.numToRgb=function(e){e=e.toString(16);while(e.length<6)e="0"+e;return"#"+e},jvm.ColorScale.rgbToArray=function(e){return e=e.substr(1),[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]},jvm.DataSeries=function(e,t){var n;e=e||{},e.attribute=e.attribute||"fill",this.elements=t,this.params=e,e.attributes&&this.setAttributes(e.attributes),jvm.$.isArray(e.scale)?(n=e.attribute==="fill"||e.attribute==="stroke"?jvm.ColorScale:jvm.NumericScale,this.scale=new n(e.scale,e.normalizeFunction,e.min,e.max)):e.scale?this.scale=new jvm.OrdinalScale(e.scale):this.scale=new jvm.SimpleScale(e.scale),this.values=e.values||{},this.setValues(this.values)},jvm.DataSeries.prototype={setAttributes:function(e,t){var n=e,r;if(typeof e=="string")this.elements[e]&&this.elements[e].setStyle(this.params.attribute,t);else for(r in n)this.elements[r]&&this.elements[r].element.setStyle(this.params.attribute,n[r])},setValues:function(e){var t=Number.MIN_VALUE,n=Number.MAX_VALUE,r,i,s={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(i in e)e[i]?s[i]=this.scale.getValue(e[i]):s[i]=this.elements[i].element.style.initial[this.params.attribute];else{if(!this.params.min||!this.params.max){for(i in e)r=parseFloat(e[i]),r>t&&(t=e[i]),r<n&&(n=r);this.params.min||this.scale.setMin(n),this.params.max||this.scale.setMax(t),this.params.min=n,this.params.max=t}for(i in e)r=parseFloat(e[i]),isNaN(r)?s[i]=this.elements[i].element.style.initial[this.params.attribute]:s[i]=this.scale.getValue(r)}this.setAttributes(s),jvm.$.extend(this.values,e)},clear:function(){var e,t={};for(e in this.values)this.elements[e]&&(t[e]=this.elements[e].element.style.initial[this.params.attribute]);this.setAttributes(t),this.values={}},setScale:function(e){this.scale.setScale(e),this.values&&this.setValues(this.values)},setNormalizeFunction:function(e){this.scale.setNormalizeFunction(e),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(e){return e>0?1:e<0?-1:e},mill:function(e,t,n){return{x:this.radius*(t-n)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*e)*this.radDeg))/.8}},mill_inv:function(e,t,n){return{lat:(2.5*Math.atan(Math.exp(.8*t/this.radius))-5*Math.PI/8)*this.degRad,lng:(n*this.radDeg+e/this.radius)*this.degRad}},merc:function(e,t,n){return{x:this.radius*(t-n)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+e*Math.PI/360))}},merc_inv:function(e,t,n){return{lat:(2*Math.atan(Math.exp(t/this.radius))-Math.PI/2)*this.degRad,lng:(n*this.radDeg+e/this.radius)*this.degRad}},aea:function(e,t,n){var r=0,i=n*this.radDeg,s=29.5*this.radDeg,o=45.5*this.radDeg,u=e*this.radDeg,a=t*this.radDeg,f=(Math.sin(s)+Math.sin(o))/2,l=Math.cos(s)*Math.cos(s)+2*f*Math.sin(s),c=f*(a-i),h=Math.sqrt(l-2*f*Math.sin(u))/f,p=Math.sqrt(l-2*f*Math.sin(r))/f;return{x:h*Math.sin(c)*this.radius,y:-(p-h*Math.cos(c))*this.radius}},aea_inv:function(e,t,n){var r=e/this.radius,i=t/this.radius,s=0,o=n*this.radDeg,u=29.5*this.radDeg,a=45.5*this.radDeg,f=(Math.sin(u)+Math.sin(a))/2,l=Math.cos(u)*Math.cos(u)+2*f*Math.sin(u),c=Math.sqrt(l-2*f*Math.sin(s))/f,h=Math.sqrt(r*r+(c-i)*(c-i)),p=Math.atan(r/(c-i));return{lat:Math.asin((l-h*h*f*f)/(2*f))*this.degRad,lng:(o+p/f)*this.degRad}},lcc:function(e,t,n){var r=0,i=n*this.radDeg,s=t*this.radDeg,o=33*this.radDeg,u=45*this.radDeg,a=e*this.radDeg,f=Math.log(Math.cos(o)*(1/Math.cos(u)))/Math.log(Math.tan(Math.PI/4+u/2)*(1/Math.tan(Math.PI/4+o/2))),l=Math.cos(o)*Math.pow(Math.tan(Math.PI/4+o/2),f)/f,c=l*Math.pow(1/Math.tan(Math.PI/4+a/2),f),h=l*Math.pow(1/Math.tan(Math.PI/4+r/2),f);return{x:c*Math.sin(f*(s-i))*this.radius,y:-(h-c*Math.cos(f*(s-i)))*this.radius}},lcc_inv:function(e,t,n){var r=e/this.radius,i=t/this.radius,s=0,o=n*this.radDeg,u=33*this.radDeg,a=45*this.radDeg,f=Math.log(Math.cos(u)*(1/Math.cos(a)))/Math.log(Math.tan(Math.PI/4+a/2)*(1/Math.tan(Math.PI/4+u/2))),l=Math.cos(u)*Math.pow(Math.tan(Math.PI/4+u/2),f)/f,c=l*Math.pow(1/Math.tan(Math.PI/4+s/2),f),h=this.sgn(f)*Math.sqrt(r*r+(c-i)*(c-i)),p=Math.atan(r/(c-i));return{lat:(2*Math.atan(Math.pow(l/h,1/f))-Math.PI/2)*this.degRad,lng:(o+p/f)*this.degRad}}},jvm.WorldMap=function(e){var t=this,n;this.params=jvm.$.extend(!0,{},jvm.WorldMap.defaultParams,e);if(!jvm.WorldMap.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.WorldMap.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").css({width:"100%",height:"100%"}).addClass("jvectormap-container"),this.params.container.append(this.container),this.container.data("mapObject",this),this.container.css({position:"relative",overflow:"hidden"}),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){t.setSize()},jvm.$(window).resize(this.onResize);for(n in jvm.WorldMap.apiEvents)this.params[n]&&this.container.bind(jvm.WorldMap.apiEvents[n]+".jvectormap",this.params[n]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.params.bindTouchEvents&&this.bindContainerTouchEvents():this.bindContainerEvents(),this.bindElementEvents(),this.createLabel(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.setSize(),this.params.focusOn&&(typeof this.params.focusOn=="object"?this.setFocus.call(this,this.params.focusOn.scale,this.params.focusOn.x,this.params.focusOn.y):this.setFocus.call(this,this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.params.series&&this.createSeries()},jvm.WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(e){this.container.css("background-color",e)},resize:function(){var e=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/e,this.transX*=this.baseScale/e,this.transY*=this.baseScale/e},setSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var e,t;for(e in this.series)for(t=0;t<this.series[e].length;t++)this.series[e][t].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var e,t,n,r;this.defaultWidth*this.scale<=this.width?(e=(this.width-this.defaultWidth*this.scale)/(2*this.scale),n=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(e=0,n=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(t=(this.height-this.defaultHeight*this.scale)/(2*this.scale),r=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(t=0,r=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>t?this.transY=t:this.transY<r&&(this.transY=r),this.transX>e?this.transX=e:this.transX<n&&(this.transX=n),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var e=!1,t,n,r=this;this.container.mousemove(function(i){return e&&(r.transX-=(t-i.pageX)/r.scale,r.transY-=(n-i.pageY)/r.scale,r.applyTransform(),t=i.pageX,n=i.pageY),!1}).mousedown(function(r){return e=!0,t=r.pageX,n=r.pageY,!1}),jvm.$("body").mouseup(function(){e=!1}),this.params.zoomOnScroll&&this.container.mousewheel(function(e,t,n,i){var s=jvm.$(r.container).offset(),o=e.pageX-s.left,u=e.pageY-s.top,a=Math.pow(1.3,i);r.label.hide(),r.setScale(r.scale*a,o,u),e.preventDefault()})},bindContainerTouchEvents:function(){var e,t,n=this,r,i,s,o,u,a=function(a){var f=a.originalEvent.touches,l,c,h,p;a.type=="touchstart"&&(u=0),f.length==1?(u==1&&(h=n.transX,p=n.transY,n.transX-=(r-f[0].pageX)/n.scale,n.transY-=(i-f[0].pageY)/n.scale,n.applyTransform(),n.label.hide(),(h!=n.transX||p!=n.transY)&&a.preventDefault()),r=f[0].pageX,i=f[0].pageY):f.length==2&&(u==2?(c=Math.sqrt(Math.pow(f[0].pageX-f[1].pageX,2)+Math.pow(f[0].pageY-f[1].pageY,2))/t,n.setScale(e*c,s,o),n.label.hide(),a.preventDefault()):(l=jvm.$(n.container).offset(),f[0].pageX>f[1].pageX?s=f[1].pageX+(f[0].pageX-f[1].pageX)/2:s=f[0].pageX+(f[1].pageX-f[0].pageX)/2,f[0].pageY>f[1].pageY?o=f[1].pageY+(f[0].pageY-f[1].pageY)/2:o=f[0].pageY+(f[1].pageY-f[0].pageY)/2,s-=l.left,o-=l.top,e=n.scale,t=Math.sqrt(Math.pow(f[0].pageX-f[1].pageX,2)+Math.pow(f[0].pageY-f[1].pageY,2)))),u=f.length};jvm.$(this.container).bind("touchstart",a),jvm.$(this.container).bind("touchmove",a)},bindElementEvents:function(){var e=this,t;this.container.mousemove(function(){t=!0}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(t){var n=this,r=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),i=r.indexOf("jvectormap-region")===-1?"marker":"region",s=i=="region"?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),o=i=="region"?e.regions[s].element:e.markers[s].element,u=i=="region"?e.mapData.paths[s].name:e.markers[s].config.name||"",a=jvm.$.Event(i+"LabelShow.jvectormap"),f=jvm.$.Event(i+"Over.jvectormap");t.type=="mouseover"?(e.container.trigger(f,[s]),f.isDefaultPrevented()||o.setHovered(!0),e.label.text(u),e.container.trigger(a,[e.label,s]),a.isDefaultPrevented()||(e.label.show(),e.labelWidth=e.label.width(),e.labelHeight=e.label.height())):(o.setHovered(!1),e.label.hide(),e.container.trigger(i+"Out.jvectormap",[s]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(e){t=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(n){var r=this,i=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),s=i.indexOf("jvectormap-region")===-1?"marker":"region",o=s=="region"?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),u=jvm.$.Event(s+"Click.jvectormap"),a=s=="region"?e.regions[o].element:e.markers[o].element;if(!t){e.container.trigger(u,[o]);if(s==="region"&&e.params.regionsSelectable||s==="marker"&&e.params.markersSelectable)u.isDefaultPrevented()||(e.params[s+"sSelectableOne"]&&e.clearSelected(s+"s"),a.setSelected(!a.isSelected))}})},bindZoomButtons:function(){var e=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){e.setScale(e.scale*e.params.zoomStep,e.width/2,e.height/2)}),this.container.find(".jvectormap-zoomout").click(function(){e.setScale(e.scale/e.params.zoomStep,e.width/2,e.height/2)})},createLabel:function(){var e=this;this.label=jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")),this.container.mousemove(function(t){var n=t.pageX-15-e.labelWidth,r=t.pageY-15-e.labelHeight;n<5&&(n=t.pageX+15),r<5&&(r=t.pageY+15),e.label.is(":visible")&&e.label.css({left:n,top:r})})},setScale:function(e,t,n,r){var i,s=jvm.$.Event("zoom.jvectormap");e>this.params.zoomMax*this.baseScale?e=this.params.zoomMax*this.baseScale:e<this.params.zoomMin*this.baseScale&&(e=this.params.zoomMin*this.baseScale),typeof t!="undefined"&&typeof n!="undefined"&&(i=e/this.scale,r?(this.transX=t+this.defaultWidth*(this.width/(this.defaultWidth*e))/2,this.transY=n+this.defaultHeight*(this.height/(this.defaultHeight*e))/2):(this.transX-=(i-1)/e*t,this.transY-=(i-1)/e*n)),this.scale=e,this.applyTransform(),this.container.trigger(s,[e/this.baseScale])},setFocus:function(e,t,n){var r,i,s,o,u;if(jvm.$.isArray(e)||this.regions[e]){jvm.$.isArray(e)?o=e:o=[e];for(u=0;u<o.length;u++)this.regions[o[u]]&&(i=this.regions[o[u]].element.getBBox(),i&&(typeof r=="undefined"?r=i:(s={x:Math.min(r.x,i.x),y:Math.min(r.y,i.y),width:Math.max(r.x+r.width,i.x+i.width)-Math.min(r.x,i.x),height:Math.max(r.y+r.height,i.y+i.height)-Math.min(r.y,i.y)},r=s)));this.setScale(Math.min(this.width/r.width,this.height/r.height),-(r.x+r.width/2),-(r.y+r.height/2),!0)}else e*=this.baseScale,this.setScale(e,-t*this.defaultWidth,-n*this.defaultHeight,!0)},getSelected:function(e){var t,n=[];for(t in this[e])this[e][t].element.isSelected&&n.push(t);return n},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(e,t){var n;typeof t!="object"&&(t=[t]);if(jvm.$.isArray(t))for(n=0;n<t.length;n++)this[e][t[n]].element.setSelected(!0);else for(n in t)this[e][n].element.setSelected(!!t[n])},setSelectedRegions:function(e){this.setSelected("regions",e)},setSelectedMarkers:function(e){this.setSelected("markers",e)},clearSelected:function(e){var t={},n=this.getSelected(e),r;for(r=0;r<n.length;r++)t[n[r]]=!1;this.setSelected(e,t)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(e){return this.mapData.paths[e].name},createRegions:function(){var e,t,n=this;for(e in this.mapData.paths)t=this.canvas.addPath({d:this.mapData.paths[e].path,"data-code":e},jvm.$.extend(!0,{},this.params.regionStyle)),jvm.$(t.node).bind("selected",function(e,t){n.container.trigger("regionSelected.jvectormap",[jvm.$(this).attr("data-code"),t,n.getSelectedRegions()])}),t.addClass("jvectormap-region jvectormap-element"),this.regions[e]={element:t,config:this.mapData.paths[e]}},createMarkers:function(e){var t,n,r,i,s,o=this;this.markersGroup=this.markersGroup||this.canvas.addGroup();if(jvm.$.isArray(e)){s=e.slice(),e={};for(t=0;t<s.length;t++)e[t]=s[t]}for(t in e)i=e[t]instanceof Array?{latLng:e[t]}:e[t],r=this.getMarkerPosition(i),r!==!1&&(n=this.canvas.addCircle({"data-index":t,cx:r.x,cy:r.y},jvm.$.extend(!0,{},this.params.markerStyle,{initial:i.style||{}}),this.markersGroup),n.addClass("jvectormap-marker jvectormap-element"),jvm.$(n.node).bind("selected",function(e,t){o.container.trigger("markerSelected.jvectormap",[jvm.$(this).attr("data-index"),t,o.getSelectedMarkers()])}),this.markers[t]&&this.removeMarkers([t]),this.markers[t]={element:n,config:i})},repositionMarkers:function(){var e,t;for(e in this.markers)t=this.getMarkerPosition(this.markers[e].config),t!==!1&&this.markers[e].element.setStyle({cx:t.x,cy:t.y})},getMarkerPosition:function(e){return jvm.WorldMap.maps[this.params.map].projection?this.latLngToPoint.apply(this,e.latLng||[0,0]):{x:e.coords[0]*this.scale+this.transX*this.scale,y:e.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(e,t,n){var r={},i=[],s,o,n=n||[];r[e]=t;for(o=0;o<n.length;o++)s={},s[e]=n[o],i.push(s);this.addMarkers(r,i)},addMarkers:function(e,t){var n;t=t||[],this.createMarkers(e);for(n=0;n<t.length;n++)this.series.markers[n].setValues(t[n]||{})},removeMarkers:function(e){var t;for(t=0;t<e.length;t++)this.markers[e[t]].element.remove(),delete this.markers[e[t]]},removeAllMarkers:function(){var e,t=[];for(e in this.markers)t.push(e);this.removeMarkers(t)},latLngToPoint:function(e,t){var n,r=jvm.WorldMap.maps[this.params.map].projection,i=r.centralMeridian,s=this.width-this.baseTransX*2*this.baseScale,o=this.height-this.baseTransY*2*this.baseScale,u,a,f=this.scale/this.baseScale;return t<-180+i&&(t+=360),n=jvm.Proj[r.type](e,t,i),u=this.getInsetForPoint(n.x,n.y),u?(a=u.bbox,n.x=(n.x-a[0].x)/(a[1].x-a[0].x)*u.width*this.scale,n.y=(n.y-a[0].y)/(a[1].y-a[0].y)*u.height*this.scale,{x:n.x+this.transX*this.scale+u.left*this.scale,y:n.y+this.transY*this.scale+u.top*this.scale}):!1},pointToLatLng:function(e,t){var n=jvm.WorldMap.maps[this.params.map].projection,r=n.centralMeridian,i=jvm.WorldMap.maps[this.params.map].insets,s,o,u,a,f;for(s=0;s<i.length;s++){o=i[s],u=o.bbox,a=e-(this.transX*this.scale+o.left*this.scale),f=t-(this.transY*this.scale+o.top*this.scale),a=a/(o.width*this.scale)*(u[1].x-u[0].x)+u[0].x,f=f/(o.height*this.scale)*(u[1].y-u[0].y)+u[0].y;if(a>u[0].x&&a<u[1].x&&f>u[0].y&&f<u[1].y)return jvm.Proj[n.type+"_inv"](a,-f,r)}return!1},getInsetForPoint:function(e,t){var n=jvm.WorldMap.maps[this.params.map].insets,r,i;for(r=0;r<n.length;r++){i=n[r].bbox;if(e>i[0].x&&e<i[1].x&&t>i[0].y&&t<i[1].y)return n[r]}},createSeries:function(){var e,t;this.series={markers:[],regions:[]};for(t in this.params.series)for(e=0;e<this.params.series[t].length;e++)this.series[t][e]=new jvm.DataSeries(this.params.series[t][e],this[t])},remove:function(){this.label.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize)}},jvm.WorldMap.maps={},jvm.WorldMap.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover
	:{}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2},selected:{fill:"blue"},selectedHover:{}}},jvm.WorldMap.apiEvents={onRegionLabelShow:"regionLabelShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerLabelShow:"markerLabelShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"};

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	$.fn.vectorMap('addMap', 'world_mill_en',{"insets": [{"width": 900.0, "top": 0, "height": 440.7063107441331, "bbox": [{"y": -12671671.123330014, "x": -20004297.151525836}, {"y": 6930392.025135122, "x": 20026572.394749384}], "left": 0}], "paths": {"BD": {"path": "M652.71,228.85l-0.04,1.38l-0.46,-0.21l-0.42,0.3l0.05,0.65l-0.17,-1.37l-0.48,-1.26l-1.08,-1.6l-0.23,-0.13l-2.31,-0.11l-0.31,0.36l0.21,0.98l-0.6,1.11l-0.8,-0.4l-0.37,0.09l-0.23,0.3l-0.54,-0.21l-0.78,-0.19l-0.38,-2.04l-0.83,-1.89l0.4,-1.5l-0.16,-0.35l-1.24,-0.57l0.36,-0.62l1.5,-0.95l0.02,-0.49l-1.62,-1.26l0.64,-1.31l1.7,1.0l0.12,0.04l0.96,0.11l0.19,1.62l0.25,0.26l2.38,0.37l2.32,-0.04l1.06,0.33l-0.92,1.79l-0.97,0.13l-0.23,0.16l-0.77,1.51l0.05,0.35l1.37,1.37l0.5,-0.14l0.35,-1.46l0.24,-0.0l1.24,3.92Z", "name": "Bangladesh"}, "BE": {"path": "M429.28,143.95l1.76,0.25l0.13,-0.01l2.16,-0.64l1.46,1.34l1.26,0.71l-0.23,1.8l-0.44,0.08l-0.24,0.25l-0.2,1.36l-1.8,-1.22l-0.23,-0.05l-1.14,0.23l-1.62,-1.43l-1.15,-1.31l-0.21,-0.1l-0.95,-0.04l-0.21,-0.68l1.66,-0.54Z", "name": "Belgium"}, "BF": {"path": "M413.48,260.21l-1.22,-0.46l-0.13,-0.02l-1.17,0.1l-0.15,0.06l-0.73,0.53l-0.87,-0.41l-0.39,-0.75l-0.13,-0.13l-0.98,-0.48l-0.14,-1.2l0.63,-0.99l0.05,-0.18l-0.05,-0.73l1.9,-2.01l0.08,-0.14l0.35,-1.65l0.49,-0.44l1.05,0.3l0.21,-0.02l1.05,-0.52l0.13,-0.13l0.3,-0.58l1.87,-1.1l0.11,-0.1l0.43,-0.72l2.23,-1.01l1.21,-0.32l0.51,0.4l0.19,0.06l1.25,-0.01l-0.14,0.89l0.01,0.13l0.34,1.16l0.06,0.11l1.35,1.59l0.07,1.13l0.24,0.28l2.64,0.53l-0.05,1.39l-0.42,0.59l-1.11,0.21l-0.22,0.17l-0.46,0.99l-0.69,0.23l-2.12,-0.05l-1.14,-0.2l-0.19,0.03l-0.72,0.36l-1.07,-0.17l-4.35,0.12l-0.29,0.29l-0.06,1.44l0.25,1.45Z", "name": "Burkina Faso"}, "BG": {"path": "M477.63,166.84l0.51,0.9l0.33,0.14l0.9,-0.21l1.91,0.47l3.68,0.16l0.17,-0.05l1.2,-0.75l2.78,-0.67l1.72,1.05l1.02,0.24l-0.97,0.97l-0.91,2.17l0.0,0.24l0.56,1.19l-1.58,-0.3l-0.16,0.01l-2.55,0.95l-0.2,0.28l-0.02,1.23l-1.92,0.24l-1.68,-0.99l-0.27,-0.02l-1.94,0.8l-1.52,-0.07l-0.15,-1.72l-0.12,-0.21l-0.99,-0.76l0.18,-0.18l0.02,-0.39l-0.17,-0.22l0.33,-0.75l0.91,-0.91l0.01,-0.42l-1.16,-1.25l-0.18,-0.89l0.24,-0.27Z", "name": "Bulgaria"}, "BA": {"path": "M468.39,164.66l0.16,0.04l0.43,-0.0l-0.43,0.93l0.06,0.34l1.08,1.06l-0.28,1.09l-0.5,0.13l-0.47,0.28l-0.86,0.74l-0.1,0.16l-0.28,1.29l-1.81,-0.94l-0.9,-1.22l-1.0,-0.73l-1.1,-1.1l-0.55,-0.96l-1.11,-1.3l0.3,-0.75l0.59,0.46l0.42,-0.04l0.46,-0.54l1.0,-0.06l2.11,0.5l1.72,-0.03l1.06,0.64Z", "name": "Bosnia and Herzegovina"}, "BN": {"path": "M707.34,273.57l0.76,-0.72l1.59,-1.03l-0.18,1.93l-0.9,-0.06l-0.28,0.14l-0.31,0.51l-0.68,-0.78Z", "name": "Brunei"}, "BO": {"path": "M263.83,340.79l-0.23,-0.12l-2.86,-0.11l-0.28,0.17l-0.77,1.67l-1.17,-1.51l-0.18,-0.11l-3.28,-0.64l-0.28,0.1l-2.02,2.3l-1.43,0.29l-0.91,-3.35l-1.31,-2.88l0.75,-2.41l-0.09,-0.32l-1.23,-1.03l-0.31,-1.76l-0.05,-0.12l-1.12,-1.6l1.49,-2.62l0.01,-0.28l-1.0,-2.0l0.48,-0.72l0.02,-0.29l-0.37,-0.78l0.87,-1.13l0.06,-0.18l0.05,-2.17l0.12,-1.71l0.5,-0.8l0.01,-0.3l-1.9,-3.58l1.3,0.15l1.34,-0.05l0.23,-0.12l0.51,-0.7l2.12,-0.99l1.31,-0.93l2.81,-0.37l-0.21,1.51l0.01,0.13l0.29,0.91l-0.19,1.64l0.11,0.27l2.72,2.27l0.15,0.07l2.71,0.41l0.92,0.88l0.12,0.07l1.64,0.49l1.0,0.71l0.18,0.06l1.5,-0.02l1.24,0.64l0.1,1.31l0.05,0.14l0.44,0.68l0.02,0.73l-0.44,0.03l-0.27,0.39l0.96,2.99l0.28,0.21l4.43,0.1l-0.28,1.12l0.0,0.15l0.27,1.02l0.15,0.19l1.27,0.67l0.52,1.42l-0.42,1.91l-0.66,1.1l-0.04,0.2l0.21,1.3l-0.19,0.13l-0.01,-0.27l-0.15,-0.24l-2.33,-1.33l-0.14,-0.04l-2.38,-0.03l-4.36,0.76l-0.21,0.16l-1.2,2.29l-0.03,0.13l-0.06,1.37l-0.79,2.53l-0.05,-0.08Z", "name": "Bolivia"}, "JP": {"path": "M781.17,166.78l1.8,0.67l0.28,-0.04l1.38,-1.01l0.43,2.67l-3.44,0.77l-0.18,0.12l-2.04,2.79l-3.71,-1.94l-0.42,0.15l-1.29,3.11l-2.32,0.04l-0.3,-2.63l1.12,-2.1l2.51,-0.16l0.28,-0.25l0.73,-4.22l0.58,-1.9l2.59,2.84l2.0,1.1ZM773.66,187.36l-0.92,2.24l-0.01,0.2l0.4,1.3l-1.18,1.81l-3.06,1.28l-4.35,0.17l-0.19,0.08l-3.4,3.06l-1.36,-0.87l-0.1,-1.95l-0.34,-0.28l-4.35,0.62l-2.99,1.33l-2.87,0.05l-0.28,0.2l0.09,0.33l2.37,1.93l-1.57,4.44l-1.35,0.97l-0.9,-0.79l0.57,-2.32l-0.15,-0.34l-1.5,-0.77l-0.81,-1.53l2.04,-0.75l0.14,-0.1l1.28,-1.72l2.47,-1.43l1.84,-1.92l4.83,-0.82l2.62,0.57l0.33,-0.16l2.45,-4.77l1.38,1.14l0.38,0.0l5.1,-4.02l0.09,-0.11l1.57,-3.57l0.02,-0.16l-0.42,-3.22l0.94,-1.67l2.27,-0.47l1.26,3.82l-0.07,2.23l-2.26,2.86l-0.06,0.19l0.04,2.93ZM757.85,196.18l0.22,0.66l-1.11,1.33l-0.8,-0.7l-0.33,-0.04l-1.28,0.65l-0.14,0.15l-0.54,1.34l-1.17,-0.57l0.02,-1.03l1.2,-1.45l1.24,0.28l0.29,-0.1l0.9,-1.03l1.51,0.5Z", "name": "Japan"}, "BI": {"path": "M494.7,295.83l-0.14,-2.71l-0.04,-0.13l-0.34,-0.62l0.93,0.12l0.3,-0.16l0.67,-1.25l0.9,0.11l0.11,0.76l0.08,0.16l0.46,0.48l0.02,0.56l-0.55,0.48l-0.96,1.29l-0.82,0.82l-0.61,0.07Z", "name": "Burundi"}, "BJ": {"path": "M427.4,268.94l-1.58,0.22l-0.52,-1.45l0.11,-5.73l-0.08,-0.21l-0.43,-0.44l-0.09,-1.13l-0.09,-0.19l-1.52,-1.52l0.24,-1.01l0.7,-0.23l0.18,-0.16l0.45,-0.97l1.07,-0.21l0.19,-0.12l0.53,-0.73l0.73,-0.65l0.68,-0.0l1.69,1.3l-0.08,0.67l0.02,0.14l0.52,1.38l-0.44,0.9l-0.01,0.24l0.2,0.52l-1.1,1.42l-0.76,0.76l-0.08,0.13l-0.47,1.59l0.05,1.69l-0.13,3.79Z", "name": "Benin"}, "BT": {"path": "M650.38,213.78l0.88,0.75l-0.13,1.24l-1.77,0.07l-2.1,-0.18l-1.57,0.4l-2.02,-0.91l-0.02,-0.24l1.54,-1.87l1.18,-0.6l1.67,0.59l1.32,0.08l1.01,0.67Z", "name": "Bhutan"}, "JM": {"path": "M226.67,238.37l1.64,0.23l1.2,0.56l0.11,0.19l-1.25,0.03l-0.14,0.04l-0.65,0.37l-1.24,-0.37l-1.17,-0.77l0.11,-0.22l0.86,-0.15l0.52,0.08Z", "name": "Jamaica"}, "BW": {"path": "M484.91,331.96l0.53,0.52l0.82,1.53l2.83,2.86l0.14,0.08l0.85,0.22l0.03,0.81l0.74,1.66l0.21,0.17l1.87,0.39l1.17,0.87l-3.13,1.71l-2.3,2.01l-0.07,0.1l-0.82,1.74l-0.66,0.88l-1.24,0.19l-0.24,0.2l-0.65,1.98l-1.4,0.55l-1.9,-0.12l-1.2,-0.74l-1.06,-0.32l-0.22,0.02l-1.22,0.62l-0.14,0.14l-0.58,1.21l-1.16,0.79l-1.18,1.13l-1.5,0.23l-0.4,-0.68l0.22,-1.53l-0.04,-0.19l-1.48,-2.54l-0.11,-0.11l-0.53,-0.31l-0.0,-7.25l2.18,-0.08l0.29,-0.3l0.07,-9.0l1.63,-0.08l3.69,-0.86l0.84,0.93l0.38,0.05l1.53,-0.97l0.79,-0.03l1.3,-0.53l0.23,0.1l0.92,1.96Z", "name": "Botswana"}, "BR": {"path": "M259.49,274.87l1.42,0.25l1.97,0.62l0.28,-0.05l0.67,-0.55l1.76,-0.38l2.8,-0.94l0.12,-0.08l0.92,-0.96l0.05,-0.33l-0.15,-0.32l0.73,-0.06l0.36,0.35l-0.27,0.93l0.17,0.36l0.76,0.34l0.44,0.9l-0.58,0.73l-0.06,0.13l-0.4,2.13l0.03,0.19l0.62,1.22l0.17,1.11l0.11,0.19l1.54,1.18l0.15,0.06l1.23,0.12l0.29,-0.15l0.2,-0.36l0.71,-0.11l1.13,-0.44l0.79,-0.63l1.25,0.19l0.65,-0.08l1.32,0.2l0.32,-0.18l0.23,-0.51l-0.05,-0.31l-0.31,-0.37l0.11,-0.31l0.75,0.17l0.13,0.0l1.1,-0.24l1.34,0.5l1.08,0.51l0.33,-0.05l0.67,-0.58l0.27,0.05l0.28,0.57l0.31,0.17l1.2,-0.18l0.17,-0.08l1.03,-1.05l0.76,-1.82l1.39,-2.16l0.49,-0.07l0.52,1.17l1.4,4.37l0.2,0.2l1.14,0.35l0.05,1.39l-1.8,1.97l0.01,0.42l0.78,0.75l0.18,0.08l4.16,0.37l0.08,2.25l0.5,0.22l1.78,-1.54l2.98,0.85l4.07,1.5l1.07,1.28l-0.37,1.23l0.36,0.38l2.83,-0.75l4.8,1.3l3.75,-0.09l3.6,2.02l3.27,2.84l1.93,0.72l2.13,0.11l0.76,0.66l1.22,4.56l-0.96,4.03l-1.22,1.58l-3.52,3.51l-1.63,2.91l-1.75,2.09l-0.5,0.04l-0.26,0.19l-0.72,1.99l0.18,4.76l-0.95,5.56l-0.74,0.96l-0.06,0.15l-0.43,3.39l-2.49,3.34l-0.06,0.13l-0.4,2.56l-1.9,1.07l-0.13,0.16l-0.51,1.38l-2.59,0.0l-3.94,1.01l-1.82,1.19l-2.85,0.81l-3.01,2.17l-2.12,2.65l-0.06,0.13l-0.36,2.0l0.01,0.13l0.4,1.42l-0.45,2.63l-0.53,1.23l-1.76,1.53l-2.76,4.79l-2.16,2.15l-1.69,1.29l-0.09,0.12l-1.12,2.6l-1.3,1.26l-0.45,-1.02l0.99,-1.18l0.01,-0.37l-1.5,-1.95l-1.98,-1.54l-2.58,-1.77l-0.2,-0.05l-0.81,0.07l-2.42,-2.05l-0.25,-0.07l-0.77,0.14l2.75,-3.07l2.8,-2.61l1.67,-1.09l2.11,-1.49l0.13,-0.24l0.05,-2.15l-0.07,-0.2l-1.26,-1.54l-0.35,-0.09l-0.64,0.27l0.3,-0.95l0.34,-1.57l0.01,-1.52l-0.16,-0.26l-0.9,-0.48l-0.27,-0.01l-0.86,0.39l-0.65,-0.08l-0.23,-0.8l-0.23,-2.39l-0.04,-0.12l-0.47,-0.79l-0.14,-0.12l-1.69,-0.71l-0.25,0.01l-0.93,0.47l-2.29,-0.44l0.15,-3.3l-0.03,-0.15l-0.62,-1.22l0.57,-0.39l0.13,-0.3l-0.22,-1.37l0.67,-1.13l0.44,-2.04l-0.01,-0.17l-0.59,-1.61l-0.14,-0.16l-1.25,-0.66l-0.22,-0.82l0.35,-1.41l-0.28,-0.37l-4.59,-0.1l-0.78,-2.41l0.34,-0.02l0.28,-0.31l-0.03,-1.1l-0.05,-0.16l-0.45,-0.68l-0.1,-1.4l-0.16,-0.24l-1.45,-0.76l-0.14,-0.03l-1.48,0.02l-1.04,-0.73l-1.62,-0.48l-0.93,-0.9l-0.16,-0.08l-2.72,-0.41l-2.53,-2.12l0.18,-1.54l-0.01,-0.13l-0.29,-0.91l0.26,-1.83l-0.34,-0.34l-3.28,0.43l-0.14,0.05l-1.3,0.93l-2.16,1.01l-0.12,0.09l-0.47,0.65l-1.12,0.05l-1.84,-0.21l-0.12,0.01l-1.33,0.41l-0.82,-0.21l0.16,-3.6l-0.48,-0.26l-1.97,1.43l-1.96,-0.06l-0.86,-1.23l-0.22,-0.13l-1.23,-0.11l0.34,-0.69l-0.05,-0.33l-1.36,-1.5l-0.92,-2.0l0.45,-0.32l0.13,-0.25l-0.0,-0.87l1.34,-0.64l0.17,-0.32l-0.23,-1.23l0.56,-0.77l0.05,-0.13l0.16,-1.03l2.7,-1.61l2.01,-0.47l0.16,-0.09l0.24,-0.27l2.11,0.11l0.31,-0.25l1.13,-6.87l0.06,-1.12l-0.4,-1.53l-0.1,-0.15l-1.0,-0.82l0.01,-1.45l1.08,-0.32l0.39,0.2l0.44,-0.24l0.08,-0.96l-0.25,-0.32l-1.22,-0.22l-0.02,-1.01l4.57,0.05l0.22,-0.09l0.6,-0.63l0.44,0.5l0.47,1.42l0.45,0.16l0.27,-0.18l1.21,1.16l0.23,0.08l1.95,-0.16l0.23,-0.14l0.43,-0.67l1.76,-0.55l1.05,-0.42l0.18,-0.2l0.25,-0.92l1.65,-0.66l0.18,-0.35l-0.14,-0.53l-0.26,-0.22l-1.91,-0.19l-0.29,-1.33l0.1,-1.64l-0.15,-0.28l-0.44,-0.25Z", "name": "Brazil"}, "BS": {"path": "M227.51,216.69l0.3,0.18l-0.24,1.07l0.03,-1.04l-0.09,-0.21ZM226.5,224.03l-0.13,0.03l-0.54,-1.3l-0.09,-0.12l-0.78,-0.64l0.4,-1.26l0.33,0.05l0.79,2.0l0.01,1.24ZM225.76,216.5l-2.16,0.34l-0.07,-0.41l0.85,-0.16l1.36,0.07l0.02,0.16Z", "name": "The Bahamas"}, "BY": {"path": "M480.08,135.28l2.09,0.02l0.13,-0.03l2.72,-1.3l0.16,-0.19l0.55,-1.83l1.94,-1.06l0.15,-0.31l-0.2,-1.33l1.33,-0.52l2.58,-1.3l2.39,0.8l0.3,0.75l0.37,0.17l1.22,-0.39l2.18,0.75l0.2,1.36l-0.48,0.85l0.01,0.32l1.57,2.26l0.92,0.6l-0.1,0.41l0.19,0.35l1.61,0.57l0.48,0.6l-0.64,0.49l-1.91,-0.11l-0.18,0.05l-0.48,0.32l-0.1,0.39l0.57,1.1l0.51,1.78l-1.79,0.17l-0.18,0.08l-0.77,0.73l-0.09,0.19l-0.13,1.31l-0.75,-0.22l-2.11,0.15l-0.56,-0.66l-0.39,-0.06l-0.8,0.49l-0.79,-0.4l-0.13,-0.03l-1.94,-0.07l-2.76,-0.79l-2.58,-0.27l-1.98,0.07l-0.15,0.05l-1.31,0.86l-0.8,0.09l-0.04,-1.16l-0.03,-0.12l-0.63,-1.28l1.22,-0.56l0.17,-0.27l0.01,-1.35l-0.04,-0.15l-0.66,-1.24l-0.08,-1.12Z", "name": "Belarus"}, "BZ": {"path": "M198.03,239.7l0.28,0.19l0.43,-0.1l0.82,-1.42l0.0,0.07l0.29,0.29l0.16,0.0l-0.02,0.35l-0.39,1.08l0.02,0.25l0.16,0.29l-0.23,0.8l0.04,0.24l0.09,0.14l-0.25,1.12l-0.38,0.53l-0.33,0.06l-0.21,0.15l-0.41,0.74l-0.25,0.0l0.17,-2.58l0.01,-2.2Z", "name": "Belize"}, "RU": {"path": "M688.57,38.85l0.63,2.39l0.44,0.19l2.22,-1.23l7.18,0.07l5.54,2.49l1.85,1.77l-0.55,2.34l-2.64,1.42l-6.57,2.76l-1.95,1.5l0.12,0.53l3.09,0.68l3.69,1.23l0.21,-0.01l1.98,-0.81l1.16,2.84l0.5,0.08l1.03,-1.18l3.86,-0.74l7.79,0.78l0.56,2.05l0.27,0.22l10.47,0.71l0.32,-0.29l0.13,-3.34l4.98,0.8l3.96,-0.02l3.88,2.43l1.06,2.79l-1.38,1.83l0.01,0.38l3.15,3.64l0.1,0.08l3.94,1.86l0.4,-0.14l2.28,-4.56l3.75,1.94l0.22,0.02l4.18,-1.22l4.76,1.4l0.26,-0.04l1.74,-1.23l3.98,0.63l0.32,-0.41l-1.71,-4.1l3.0,-1.86l22.39,3.04l2.06,2.67l0.1,0.08l6.55,3.51l0.17,0.03l10.08,-0.86l4.86,0.73l1.91,1.72l-0.29,3.13l0.18,0.31l3.08,1.26l0.19,0.01l3.32,-0.9l4.37,-0.11l4.78,0.87l4.61,-0.48l4.26,3.82l0.32,0.05l3.1,-1.4l0.12,-0.45l-1.91,-2.67l0.92,-1.64l7.78,1.22l5.22,-0.26l7.12,2.1l9.6,5.22l6.4,4.15l-0.2,2.44l0.14,0.28l1.69,1.04l0.45,-0.31l-0.51,-2.66l6.31,0.58l4.52,3.61l-2.1,1.52l-4.02,0.42l-0.27,0.29l-0.06,3.83l-0.81,0.67l-2.14,-0.11l-1.91,-1.39l-3.19,-1.13l-0.51,-1.63l-0.21,-0.2l-2.54,-0.67l-0.13,-0.0l-2.69,0.5l-1.12,-1.19l0.48,-1.36l-0.38,-0.39l-3.0,0.98l-0.17,0.44l1.02,1.76l-1.27,1.55l-3.09,1.71l-3.15,-0.29l-0.3,0.18l0.07,0.34l2.22,2.1l1.47,3.22l1.15,1.09l0.25,1.41l-0.48,0.76l-4.47,-0.81l-0.17,0.02l-6.97,2.9l-2.2,0.44l-0.11,0.05l-3.83,2.68l-3.63,2.32l-0.1,0.11l-0.76,1.4l-3.3,-2.4l-0.3,-0.03l-6.31,2.85l-0.99,-1.21l-0.4,-0.06l-2.32,1.54l-3.23,-0.49l-0.33,0.2l-0.79,2.39l-2.97,3.51l-0.07,0.21l0.09,1.47l0.22,0.27l2.62,0.74l-0.3,4.7l-2.06,0.12l-0.26,0.2l-1.07,2.94l0.04,0.27l0.83,1.19l-4.03,1.63l-0.18,0.21l-0.83,3.72l-3.55,0.79l-0.23,0.23l-0.73,3.32l-3.22,2.76l-0.76,-1.88l-1.07,-4.88l-1.39,-7.59l1.17,-4.76l2.05,-2.08l0.09,-0.19l0.11,-1.46l3.67,-0.77l0.15,-0.08l4.47,-4.61l4.29,-3.82l4.48,-3.01l0.11,-0.14l2.01,-5.43l-0.31,-0.4l-3.04,0.33l-0.24,0.17l-1.47,3.11l-5.98,3.94l-1.91,-4.36l-0.33,-0.17l-6.46,1.3l-0.15,0.08l-6.27,6.33l-0.01,0.41l1.7,1.87l-5.04,0.87l-3.51,0.34l0.16,-2.32l-0.26,-0.32l-3.89,-0.56l-0.19,0.04l-3.02,1.77l-7.63,-0.63l-8.24,1.1l-0.16,0.07l-8.11,7.09l-9.6,8.31l0.16,0.52l3.79,0.42l1.16,2.03l0.17,0.14l2.43,0.76l0.31,-0.08l1.5,-1.61l2.49,0.2l3.46,3.6l0.08,2.67l-1.91,3.26l-0.04,0.14l-0.21,3.91l-1.11,5.09l-3.73,4.55l-0.87,2.21l-6.73,7.14l-1.59,1.77l-3.23,1.72l-1.38,0.03l-1.48,-1.39l-0.37,-0.03l-3.36,2.22l-0.11,0.14l-0.16,0.42l-0.01,-1.09l1.0,-0.06l0.28,-0.27l0.36,-3.6l-0.61,-2.51l1.85,-0.94l2.94,0.53l0.32,-0.15l1.71,-3.1l0.84,-3.38l0.97,-1.18l1.32,-2.88l-0.34,-0.42l-4.14,0.95l-2.18,1.25l-3.51,-0.0l-0.95,-2.81l-0.1,-0.14l-2.97,-2.3l-0.11,-0.05l-4.19,-1.0l-0.89,-3.08l-0.87,-2.03l-0.95,-1.46l-1.54,-3.37l-0.12,-0.14l-2.27,-1.28l-3.83,-1.02l-3.37,0.1l-3.11,0.61l-0.13,0.06l-2.07,1.69l0.04,0.49l1.23,0.72l0.03,1.53l-1.34,1.05l-2.26,3.51l-0.05,0.17l0.02,1.27l-3.25,1.9l-2.87,-1.17l-0.14,-0.02l-2.86,0.26l-1.22,-1.02l-0.12,-0.06l-1.5,-0.35l-0.23,0.04l-3.62,2.27l-3.24,0.53l-2.28,0.79l-3.08,-0.51l-2.24,0.03l-1.49,-1.61l-2.45,-1.57l-0.11,-0.04l-2.6,-0.43l-3.17,0.43l-2.31,0.59l-3.31,-1.28l-0.45,-2.31l-0.21,-0.23l-2.94,-0.85l-2.26,-0.39l-2.77,-1.36l-0.37,0.09l-2.59,3.45l-0.03,0.32l0.91,1.74l-2.15,2.01l-3.47,-0.79l-2.44,-0.12l-1.59,-1.46l-0.2,-0.08l-2.55,-0.05l-2.12,-0.98l-0.24,-0.01l-3.85,1.57l-4.74,2.79l-2.59,0.55l-0.79,0.21l-1.21,-1.81l-0.29,-0.13l-3.05,0.41l-0.96,-1.25l-0.14,-0.1l-1.65,-0.6l-1.15,-1.82l-0.13,-0.12l-1.38,-0.6l-0.19,-0.02l-3.49,0.82l-3.35,-1.85l-0.38,0.08l-1.08,1.4l-5.36,-8.17l-3.02,-2.52l0.72,-0.85l0.01,-0.38l-0.37,-0.08l-6.22,3.21l-1.98,0.16l0.17,-1.51l-0.2,-0.31l-3.22,-1.17l-0.19,-0.0l-2.3,0.74l-0.72,-3.27l-0.24,-0.23l-4.5,-0.75l-0.21,0.04l-2.2,1.42l-6.21,1.27l-0.11,0.05l-1.16,0.81l-9.3,1.19l-0.18,0.09l-1.15,1.17l-0.02,0.39l1.56,2.01l-2.02,0.74l-0.16,0.42l0.35,0.68l-2.18,1.49l0.02,0.51l3.83,2.16l-0.45,1.13l-3.31,-0.13l-0.25,0.12l-0.57,0.77l-2.97,-1.59l-0.15,-0.04l-3.97,0.07l-0.13,0.03l-2.53,1.32l-2.84,-1.28l-5.52,-2.3l-0.12,-0.02l-3.91,0.09l-0.16,0.05l-5.17,3.6l-0.13,0.21l-0.25,1.89l-2.17,-1.6l-0.44,0.1l-2.0,3.59l0.06,0.37l0.55,0.5l-1.32,2.23l0.04,0.36l2.13,2.17l0.23,0.09l1.7,-0.08l1.42,1.89l-0.23,1.5l0.19,0.32l0.94,0.38l-0.89,1.44l-2.3,0.49l-0.17,0.11l-2.49,3.2l0.0,0.37l2.2,2.81l-0.23,1.93l0.06,0.22l2.56,3.32l-1.27,1.02l-0.4,0.66l-0.8,-0.15l-1.65,-1.75l-0.18,-0.09l-0.66,-0.09l-1.45,-0.64l-0.72,-1.16l-0.18,-0.13l-2.34,-0.63l-0.17,0.0l-1.32,0.41l-0.31,-0.4l-0.12,-0.09l-3.49,-1.48l-3.67,-0.49l-2.1,-0.52l-0.3,0.1l-0.12,0.14l-2.96,-2.4l-2.89,-1.19l-1.69,-1.42l1.27,-0.35l0.16,-0.1l2.08,-2.61l-0.04,-0.41l-1.02,-0.9l3.21,-1.12l0.2,-0.31l-0.07,-0.69l-0.37,-0.26l-1.86,0.42l0.05,-0.86l1.11,-0.76l2.35,-0.23l0.25,-0.19l0.39,-1.07l0.0,-0.19l-0.51,-1.64l0.95,-1.58l0.04,-0.16l-0.03,-0.95l-0.22,-0.28l-3.69,-1.06l-1.43,0.02l-1.45,-1.44l-0.29,-0.08l-1.83,0.49l-2.88,-1.04l0.04,-0.42l-0.04,-0.18l-0.89,-1.43l-0.23,-0.14l-1.77,-0.14l-0.13,-0.66l0.52,-0.56l0.01,-0.4l-1.6,-1.9l-0.27,-0.1l-2.55,0.32l-0.71,-0.16l-0.3,0.1l-0.53,0.63l-0.58,-0.08l-0.56,-1.97l-0.48,-0.94l0.17,-0.11l1.92,0.11l0.2,-0.06l0.97,-0.74l0.05,-0.42l-0.72,-0.91l-0.13,-0.1l-1.43,-0.51l0.09,-0.36l-0.13,-0.33l-0.97,-0.59l-1.43,-2.06l0.44,-0.77l0.04,-0.19l-0.25,-1.64l-0.2,-0.24l-2.45,-0.84l-0.19,-0.0l-1.05,0.34l-0.25,-0.62l-0.18,-0.17l-2.5,-0.84l-0.74,-1.93l-0.21,-1.7l-0.13,-0.21l-0.92,-0.63l0.83,-0.89l0.07,-0.27l-0.71,-3.26l1.69,-2.01l0.03,-0.34l-0.24,-0.41l2.63,-1.9l-0.01,-0.49l-2.31,-1.57l5.08,-4.61l2.33,-2.24l1.01,-2.08l-0.09,-0.37l-3.52,-2.56l0.94,-2.38l-0.04,-0.29l-2.14,-2.86l1.61,-3.35l-0.01,-0.29l-2.81,-4.58l2.19,-3.04l-0.06,-0.42l-3.7,-2.76l0.32,-2.67l1.87,-0.38l4.26,-1.77l2.46,-1.47l3.96,2.58l0.12,0.05l6.81,1.04l9.37,4.87l1.81,1.92l0.15,2.55l-2.61,2.06l-3.95,1.07l-11.1,-3.15l-0.17,0.0l-1.84,0.53l-0.1,0.53l3.97,2.97l0.15,1.77l0.16,4.14l0.19,0.27l3.21,1.22l1.94,1.03l0.44,-0.22l0.32,-1.94l-0.07,-0.25l-1.32,-1.52l1.25,-1.2l5.87,2.45l0.24,-0.01l2.11,-0.98l0.13,-0.42l-1.55,-2.75l5.52,-3.84l2.13,0.22l2.28,1.42l0.43,-0.12l1.46,-2.87l-0.04,-0.33l-1.97,-2.37l1.14,-2.38l-0.02,-0.3l-1.42,-2.07l6.15,1.22l1.14,1.92l-2.74,0.46l-0.25,0.3l0.02,2.36l0.12,0.24l1.97,1.44l0.25,0.05l3.87,-0.91l0.22,-0.23l0.58,-2.55l5.09,-1.98l8.67,-3.69l1.22,0.14l-2.06,2.2l0.18,0.5l3.11,0.45l0.23,-0.07l1.71,-1.41l4.59,-0.12l0.12,-0.03l3.53,-1.72l2.7,2.48l0.42,-0.01l2.85,-2.88l-0.0,-0.43l-2.42,-2.35l1.0,-1.13l7.2,1.31l3.42,1.36l9.06,4.97l0.39,-0.08l1.67,-2.27l-0.04,-0.4l-2.46,-2.23l-0.06,-0.82l-0.26,-0.27l-2.64,-0.38l0.69,-1.76l0.0,-0.22l-1.32,-3.47l-0.07,-1.27l4.52,-4.09l0.08,-0.11l1.6,-4.18l1.67,-0.84l6.33,1.2l0.46,2.31l-2.31,3.67l0.05,0.38l1.49,1.41l0.77,3.04l-0.56,6.05l0.09,0.24l2.62,2.54l-0.99,2.65l-4.87,5.96l0.17,0.48l2.86,0.61l0.31,-0.13l0.94,-1.42l2.67,-1.04l0.18,-0.19l0.64,-2.01l2.11,-1.98l0.05,-0.37l-1.38,-2.32l1.11,-2.74l-0.24,-0.41l-2.53,-0.33l-0.53,-2.16l1.96,-4.42l-0.05,-0.32l-3.03,-3.48l4.21,-2.94l0.12,-0.3l-0.52,-3.04l0.72,-0.06l1.18,2.35l-0.97,4.39l0.2,0.35l2.68,0.84l0.37,-0.38l-1.05,-3.07l3.89,-1.71l5.05,-0.24l4.55,2.62l0.36,-0.05l0.05,-0.36l-2.19,-3.84l-0.23,-4.78l4.07,-0.92l5.98,0.21l5.47,-0.64l0.2,-0.48l-1.88,-2.37l2.65,-2.99l2.75,-0.13l0.12,-0.03l4.82,-2.48l6.56,-0.67l0.23,-0.14l0.76,-1.27l6.33,-0.46l1.97,1.11l0.28,0.01l5.55,-2.71l4.53,0.08l0.29,-0.21l0.67,-2.18l2.29,-2.15l5.75,-2.13l3.48,1.4l-2.7,1.03l-0.19,0.31l0.26,0.26l5.47,0.78ZM871.83,65.73l0.25,-0.15l1.99,0.01l3.3,1.2l-0.08,0.22l-2.41,1.03l-5.73,0.49l-0.31,-1.0l2.99,-1.8ZM797.64,48.44l-2.22,1.51l-3.85,-0.43l-4.35,-1.85l0.42,-1.13l4.42,0.72l5.59,1.17ZM783.82,46.06l-1.71,3.25l-9.05,-0.14l-4.11,1.15l-4.64,-3.04l1.21,-3.13l3.11,-0.91l6.53,0.22l8.66,2.59ZM780.37,145.71l2.28,5.23l-3.09,-0.89l-0.37,0.19l-1.54,4.65l0.04,0.27l2.38,3.17l-0.05,1.4l-1.41,-1.41l-0.46,0.04l-1.23,1.81l-0.33,-1.86l0.28,-3.1l-0.28,-3.41l0.58,-2.46l0.11,-4.39l-0.03,-0.13l-1.44,-3.2l0.21,-4.39l2.19,-1.49l0.09,-0.41l-0.81,-1.3l0.48,-0.21l0.56,1.94l0.86,3.23l-0.05,3.36l1.03,3.35ZM780.16,57.18l-3.4,0.03l-5.06,-0.53l1.97,-1.59l2.95,-0.42l3.35,1.75l0.18,0.77ZM683.84,31.18l-13.29,1.97l4.16,-6.56l1.88,-0.58l1.77,0.34l6.08,3.02l-0.6,1.8ZM670.94,28.02l-5.18,0.65l-6.89,-1.58l-4.03,-2.07l-1.88,-3.98l-0.18,-0.16l-2.8,-0.93l5.91,-3.62l5.25,-1.29l4.73,2.88l5.63,5.44l-0.57,4.66ZM564.37,68.98l-0.85,0.23l-7.93,-0.57l-0.6,-1.84l-0.21,-0.2l-4.34,-1.18l-0.3,-2.08l2.34,-0.92l0.19,-0.29l-0.08,-2.43l4.85,-4.0l-0.12,-0.52l-1.68,-0.43l5.47,-3.94l0.11,-0.33l-0.6,-2.02l5.36,-2.55l8.22,-3.27l8.29,-0.96l4.34,-1.94l4.67,-0.65l1.45,1.72l-1.43,1.37l-8.8,2.52l-7.65,2.42l-7.92,4.84l-3.73,4.75l-3.92,4.58l-0.07,0.23l0.51,3.88l0.11,0.2l4.32,3.39ZM548.86,18.57l-3.28,0.75l-2.25,0.44l-0.22,0.19l-0.3,0.81l-2.67,0.86l-2.27,-1.14l1.2,-1.51l-0.23,-0.49l-3.14,-0.1l2.48,-0.54l3.55,-0.07l0.44,1.36l0.49,0.12l1.4,-1.35l2.2,-0.9l3.13,1.08l-0.54,0.49ZM477.5,133.25l-4.21,0.05l-2.69,-0.34l0.39,-1.03l3.24,-1.06l2.51,0.58l0.85,0.43l-0.2,0.71l-0.0,0.15l0.12,0.52Z", "name": "Russia"}, "RW": {"path": "M497.03,288.12l0.78,1.11l-0.12,1.19l-0.49,0.21l-1.25,-0.15l-0.3,0.16l-0.67,1.24l-1.01,-0.13l0.16,-0.92l0.22,-0.12l0.15,-0.24l0.09,-1.37l0.49,-0.48l0.42,0.18l0.25,-0.01l1.26,-0.65Z", "name": "Rwanda"}, "RS": {"path": "M469.75,168.65l0.21,-0.21l0.36,-1.44l-0.08,-0.29l-1.06,-1.03l0.54,-1.16l-0.28,-0.43l-0.26,0.0l0.55,-0.67l-0.01,-0.39l-0.77,-0.86l-0.45,-0.89l1.56,-0.67l1.39,0.12l1.22,1.1l0.26,0.91l0.16,0.19l1.38,0.66l0.17,1.12l0.14,0.21l1.46,0.9l0.35,-0.03l0.62,-0.54l0.09,0.06l-0.28,0.25l-0.03,0.42l0.29,0.34l-0.44,0.5l-0.07,0.26l0.22,1.12l0.07,0.14l1.02,1.1l-0.81,0.84l-0.42,0.96l0.04,0.3l0.12,0.15l-0.15,0.16l-1.04,0.04l-0.39,0.08l0.33,-0.81l-0.29,-0.41l-0.21,0.01l-0.39,-0.45l-0.13,-0.09l-0.32,-0.11l-0.27,-0.4l-0.14,-0.11l-0.4,-0.16l-0.31,-0.37l-0.34,-0.09l-0.45,0.17l-0.18,0.18l-0.29,0.84l-0.96,-0.65l-0.81,-0.33l-0.32,-0.37l-0.22,-0.18Z", "name": "Republic of Serbia"}, "LT": {"path": "M478.13,133.31l-0.14,-0.63l0.25,-0.88l-0.15,-0.35l-1.17,-0.58l-2.43,-0.57l-0.45,-2.51l2.58,-0.97l4.14,0.22l2.3,-0.32l0.26,0.54l0.22,0.17l1.26,0.22l2.25,1.6l0.19,1.23l-1.87,1.01l-0.14,0.18l-0.54,1.83l-2.54,1.21l-2.18,-0.02l-0.52,-0.91l-0.18,-0.14l-1.11,-0.32Z", "name": "Lithuania"}, "LU": {"path": "M435.95,147.99l0.33,0.49l-0.11,1.07l-0.39,0.04l-0.29,-0.15l0.21,-1.4l0.25,-0.05Z", "name": "Luxembourg"}, "LR": {"path": "M401.37,273.67l-0.32,0.01l-2.48,-1.15l-2.24,-1.89l-2.14,-1.38l-1.47,-1.42l0.44,-0.59l0.05,-0.13l0.12,-0.65l1.07,-1.3l1.08,-1.09l0.52,-0.07l0.43,-0.18l0.84,1.24l-0.15,0.89l0.07,0.25l0.49,0.54l0.22,0.1l0.71,0.01l0.27,-0.16l0.42,-0.83l0.19,0.02l-0.06,0.52l0.23,1.12l-0.5,1.03l0.06,0.35l0.73,0.69l0.14,0.08l0.71,0.15l0.92,0.91l0.06,0.76l-0.17,0.22l-0.06,0.15l-0.17,1.8Z", "name": "Liberia"}, "RO": {"path": "M477.94,155.19l1.02,-0.64l1.49,0.33l1.52,0.01l1.09,0.73l0.32,0.01l0.81,-0.46l1.8,-0.3l0.18,-0.1l0.54,-0.64l0.86,0.0l0.64,0.26l0.71,0.87l0.8,1.35l1.39,1.81l0.07,1.25l-0.26,1.3l0.01,0.15l0.45,1.42l0.15,0.18l1.12,0.57l0.25,0.01l1.05,-0.45l0.86,0.4l0.03,0.43l-0.92,0.51l-0.63,-0.24l-0.4,0.22l-0.64,3.41l-1.12,-0.24l-1.78,-1.09l-0.23,-0.04l-2.95,0.71l-1.25,0.77l-3.55,-0.16l-1.89,-0.47l-0.14,-0.0l-0.75,0.17l-0.61,-1.07l-0.3,-0.36l0.36,-0.32l-0.04,-0.48l-0.62,-0.38l-0.36,0.03l-0.62,0.54l-1.15,-0.71l-0.18,-1.14l-0.17,-0.22l-1.4,-0.67l-0.24,-0.86l-0.09,-0.14l-0.96,-0.87l1.49,-0.44l0.16,-0.11l1.51,-2.14l1.15,-2.09l1.44,-0.63Z", "name": "Romania"}, "GW": {"path": "M383.03,256.73l-1.12,-0.88l-0.14,-0.06l-0.94,-0.15l-0.43,-0.54l0.01,-0.27l-0.13,-0.26l-0.68,-0.48l-0.05,-0.16l0.99,-0.31l0.77,0.08l0.15,-0.02l0.61,-0.26l4.25,0.1l-0.02,0.44l-0.19,0.18l-0.08,0.29l0.17,0.66l-0.17,0.14l-0.44,0.0l-0.16,0.05l-0.57,0.37l-0.66,-0.04l-0.24,0.1l-0.92,1.03Z", "name": "Guinea Bissau"}, "GT": {"path": "M195.13,249.89l-1.05,-0.35l-1.5,-0.04l-1.06,-0.47l-1.19,-0.93l0.04,-0.53l0.27,-0.55l-0.03,-0.31l-0.24,-0.32l1.02,-1.77l3.04,-0.01l0.3,-0.28l0.06,-0.88l-0.19,-0.3l-0.3,-0.11l-0.23,-0.45l-0.11,-0.12l-0.9,-0.58l-0.35,-0.33l0.37,-0.0l0.3,-0.3l0.0,-1.15l4.05,0.02l-0.02,1.74l-0.2,2.89l0.3,0.32l0.67,-0.0l0.75,0.42l0.4,-0.11l-0.62,0.53l-1.17,0.7l-0.13,0.16l-0.18,0.49l0.0,0.21l0.14,0.34l-0.35,0.44l-0.49,0.13l-0.2,0.41l0.03,0.06l-0.27,0.16l-0.86,0.64l-0.12,0.22ZM199.35,245.38l0.07,-0.13l0.05,0.02l-0.13,0.11Z", "name": "Guatemala"}, "GR": {"path": "M487.2,174.55l-0.64,1.54l-0.43,0.24l-1.41,-0.08l-1.28,-0.28l-0.14,0.0l-3.03,0.77l-0.13,0.51l1.39,1.34l-0.78,0.29l-1.2,0.0l-1.23,-1.42l-0.47,0.02l-0.47,0.65l-0.04,0.27l0.56,1.76l0.06,0.11l1.02,1.12l-0.66,0.45l-0.04,0.46l1.39,1.35l1.15,0.79l0.02,1.06l-1.91,-0.63l-0.36,0.42l0.56,1.12l-1.2,0.23l-0.22,0.4l0.8,2.14l-1.15,0.02l-1.89,-1.15l-0.89,-2.19l-0.43,-1.91l-0.05,-0.11l-0.98,-1.35l-1.24,-1.62l-0.13,-0.63l1.07,-1.32l0.06,-0.14l0.13,-0.81l0.68,-0.36l0.16,-0.25l0.03,-0.54l1.4,-0.23l0.12,-0.05l0.87,-0.6l1.26,0.05l0.25,-0.11l0.34,-0.43l0.33,-0.07l1.81,0.08l0.13,-0.02l1.87,-0.77l1.64,0.97l0.19,0.04l2.28,-0.28l0.26,-0.29l0.02,-0.95l0.56,0.36ZM480.44,192.0l1.05,0.74l0.01,0.0l-1.26,-0.23l0.2,-0.51ZM481.76,192.79l1.86,-0.15l1.53,0.17l-0.02,0.19l0.34,0.3l-2.28,0.15l0.01,-0.13l-0.25,-0.31l-1.19,-0.22ZM485.65,193.28l0.65,-0.16l-0.05,0.12l-0.6,0.04Z", "name": "Greece"}, "GQ": {"path": "M444.81,282.04l-0.21,-0.17l0.74,-2.4l3.56,0.05l0.02,2.42l-3.34,-0.02l-0.76,0.13Z", "name": "Equatorial Guinea"}, "GY": {"path": "M271.34,264.25l1.43,0.81l1.44,1.53l0.06,1.19l0.28,0.28l0.84,0.05l2.13,1.92l-0.34,1.93l-1.37,0.59l-0.17,0.34l0.12,0.51l-0.43,1.21l0.03,0.26l1.11,1.82l0.26,0.14l0.56,0.0l0.32,1.29l1.25,1.78l-0.08,0.01l-1.34,-0.21l-0.24,0.06l-0.78,0.64l-1.06,0.41l-0.76,0.1l-0.22,0.15l-0.18,0.32l-0.95,-0.1l-1.38,-1.05l-0.19,-1.13l-0.6,-1.18l0.37,-1.96l0.65,-0.83l0.03,-0.32l-0.57,-1.17l-0.15,-0.14l-0.62,-0.27l0.25,-0.85l-0.08,-0.3l-0.58,-0.58l-0.24,-0.09l-1.15,0.1l-1.41,-1.58l0.48,-0.49l0.09,-0.22l-0.04,-0.92l1.31,-0.34l0.73,-0.52l0.04,-0.44l-0.75,-0.82l0.16,-0.66l1.74,-1.3Z", "name": "Guyana"}, "GE": {"path": "M525.41,174.19l0.26,-0.88l-0.0,-0.17l-0.63,-2.06l-0.1,-0.15l-1.45,-1.12l-0.11,-0.05l-1.31,-0.33l-0.66,-0.69l1.97,0.48l3.65,0.49l3.3,1.41l0.39,0.5l0.33,0.1l1.43,-0.45l2.14,0.58l0.7,1.14l0.13,0.12l1.06,0.47l-0.18,0.11l-0.08,0.43l1.08,1.41l-0.06,0.06l-1.16,-0.15l-1.82,-0.84l-0.31,0.04l-0.55,0.44l-3.29,0.44l-2.32,-1.41l-0.17,-0.04l-2.25,0.12Z", "name": "Georgia"}, "GB": {"path": "M412.82,118.6l-2.31,3.4l-0.0,0.33l0.31,0.13l2.52,-0.49l2.34,0.02l-0.56,2.51l-2.22,3.13l0.22,0.47l2.43,0.21l2.35,4.35l0.17,0.14l1.58,0.51l1.49,3.78l0.73,1.37l0.2,0.15l2.76,0.59l-0.25,1.75l-1.18,0.91l-0.08,0.39l0.87,1.49l-1.96,1.51l-3.31,-0.02l-4.15,0.88l-1.07,-0.59l-0.35,0.04l-1.55,1.44l-2.17,-0.35l-0.22,0.05l-1.61,1.15l-0.78,-0.38l3.31,-3.12l2.18,-0.7l0.21,-0.31l-0.26,-0.27l-3.78,-0.54l-0.48,-0.9l2.3,-0.92l0.13,-0.46l-1.29,-1.71l0.39,-1.83l3.46,0.29l0.32,-0.24l0.37,-1.99l-0.06,-0.24l-1.71,-2.17l-0.18,-0.11l-2.91,-0.58l-0.43,-0.68l0.82,-1.4l-0.03,-0.35l-0.82,-0.97l-0.46,0.01l-0.85,1.05l-0.11,-2.6l-0.05,-0.16l-1.19,-1.7l0.86,-3.53l1.81,-2.75l1.88,0.26l2.38,-0.24ZM406.39,132.84l-1.09,1.92l-1.65,-0.62l-1.26,0.02l0.41,-1.46l0.0,-0.16l-0.42,-1.51l1.62,-0.11l2.39,1.92Z", "name": "United Kingdom"}, "GA": {"path": "M448.76,294.47l-2.38,-2.34l-1.63,-2.04l-1.46,-2.48l0.06,-0.66l0.54,-0.81l0.61,-1.82l0.46,-1.69l0.63,-0.11l3.62,0.03l0.3,-0.3l-0.02,-2.75l0.88,-0.12l1.47,0.32l0.13,0.0l1.39,-0.3l-0.13,0.87l0.03,0.19l0.7,1.29l0.3,0.16l1.74,-0.19l0.36,0.29l-1.01,2.7l0.05,0.29l1.13,1.42l0.25,1.82l-0.3,1.56l-0.64,0.99l-1.93,-0.09l-1.26,-1.13l-0.5,0.17l-0.16,0.91l-1.48,0.27l-0.12,0.05l-0.86,0.63l-0.08,0.39l0.81,1.42l-1.48,1.08Z", "name": "Gabon"}, "GN": {"path": "M399.83,265.31l-0.69,-0.06l-0.3,0.16l-0.43,0.85l-0.39,-0.01l-0.3,-0.33l0.14,-0.87l-0.05,-0.22l-1.05,-1.54l-0.37,-0.11l-0.61,0.27l-0.84,0.12l0.02,-0.54l-0.04,-0.17l-0.35,-0.57l0.07,-0.63l-0.03,-0.17l-0.57,-1.11l-0.7,-0.9l-0.24,-0.12l-2.0,-0.0l-0.19,0.07l-0.51,0.42l-0.6,0.05l-0.21,0.11l-0.43,0.55l-0.3,0.7l-1.04,0.86l-0.91,-1.24l-1.0,-1.02l-0.69,-0.37l-0.52,-0.42l-0.3,-1.11l-0.37,-0.56l-0.1,-0.1l-0.4,-0.23l0.77,-0.85l0.62,0.04l0.18,-0.05l0.58,-0.38l0.46,-0.0l0.19,-0.07l0.39,-0.34l0.1,-0.3l-0.17,-0.67l0.15,-0.14l0.09,-0.2l0.03,-0.57l0.87,0.02l1.76,0.6l0.13,0.01l0.55,-0.06l0.22,-0.13l0.08,-0.12l1.18,0.17l0.17,-0.02l0.09,0.56l0.3,0.25l0.4,-0.0l0.14,-0.03l0.56,-0.29l0.23,0.05l0.63,0.59l0.15,0.07l1.07,0.2l0.24,-0.06l0.65,-0.52l0.77,-0.32l0.55,-0.32l0.3,0.04l0.44,0.45l0.34,0.74l0.84,0.87l-0.35,0.45l-0.06,0.15l-0.1,0.82l0.42,0.31l0.35,-0.16l0.05,0.04l-0.1,0.59l0.09,0.27l0.42,0.4l-0.06,0.02l-0.18,0.21l-0.2,0.86l0.03,0.21l0.56,1.02l0.52,1.71l-0.65,0.21l-0.15,0.12l-0.24,0.35l-0.03,0.28l0.16,0.41l-0.1,0.76l-0.12,0.0Z", "name": "Guinea"}, "GM": {"path": "M379.18,251.48l0.15,-0.55l2.51,-0.07l0.21,-0.09l0.48,-0.52l0.58,-0.03l0.91,0.58l0.16,0.05l0.78,0.01l0.14,-0.03l0.59,-0.31l0.16,0.24l-0.71,0.38l-0.94,-0.04l-1.02,-0.51l-0.3,0.01l-0.86,0.55l-0.37,0.02l-0.14,0.04l-0.53,0.31l-1.81,-0.04Z", "name": "Gambia"}, "GL": {"path": "M304.13,6.6l8.19,-3.63l8.72,0.28l0.19,-0.06l3.12,-2.28l8.75,-0.61l19.94,0.8l14.93,4.75l-3.92,2.01l-9.52,0.27l-13.48,0.6l-0.27,0.2l0.09,0.33l1.26,1.09l0.22,0.07l8.81,-0.67l7.49,2.07l0.19,-0.01l4.68,-1.78l1.76,1.84l-2.59,3.26l-0.01,0.36l0.34,0.11l6.35,-2.2l12.09,-2.32l7.31,1.14l1.17,2.13l-9.9,4.05l-1.43,1.32l-7.91,0.98l-0.26,0.31l0.29,0.29l5.25,0.25l-2.63,3.72l-2.02,3.61l-0.04,0.15l0.08,6.05l0.07,0.19l2.61,3.0l-3.4,0.2l-4.12,1.66l-0.04,0.54l4.5,2.67l0.53,3.9l-2.39,0.42l-0.19,0.48l2.91,3.83l-5.0,0.32l-0.27,0.22l0.12,0.33l2.69,1.84l-0.65,1.35l-3.36,0.71l-3.46,0.01l-0.21,0.51l3.05,3.15l0.02,1.53l-4.54,-1.79l-0.32,0.06l-1.29,1.26l0.11,0.5l3.33,1.15l3.17,2.74l0.85,3.29l-4.0,0.78l-1.83,-1.66l-3.1,-2.64l-0.36,-0.02l-0.13,0.33l0.8,2.92l-2.76,2.26l-0.09,0.33l0.28,0.2l6.59,0.19l2.47,0.18l-5.86,3.38l-6.76,3.43l-7.26,1.48l-2.73,0.02l-0.16,0.05l-2.67,1.72l-3.44,4.42l-5.28,2.86l-1.73,0.18l-3.33,1.01l-3.59,0.96l-0.15,0.1l-2.15,2.52l-0.07,0.19l-0.03,2.76l-1.21,2.49l-4.03,3.1l-0.1,0.33l0.98,2.94l-2.31,6.57l-3.21,0.21l-3.6,-3.0l-0.19,-0.07l-4.9,-0.02l-2.29,-1.97l-1.69,-3.78l-4.31,-4.86l-1.23,-2.52l-0.34,-3.58l-0.08,-0.17l-3.35,-3.67l0.85,-2.92l-0.09,-0.31l-1.5,-1.34l2.33,-4.7l3.67,-1.57l0.15,-0.13l1.02,-1.93l0.52,-3.47l-0.44,-0.31l-2.85,1.57l-1.33,0.64l-2.12,0.59l-2.81,-1.32l-0.15,-2.79l0.88,-2.17l2.09,-0.06l5.07,1.2l0.34,-0.17l-0.11,-0.37l-4.3,-2.9l-2.24,-1.58l-0.25,-0.05l-2.38,0.62l-1.7,-0.93l2.62,-4.1l-0.03,-0.36l-1.51,-1.75l-1.97,-3.3l-3.01,-5.21l-0.1,-0.11l-3.04,-1.85l0.03,-1.94l-0.18,-0.28l-6.82,-3.01l-5.35,-0.38l-6.69,0.21l-6.03,0.37l-2.81,-1.59l-3.84,-2.9l5.94,-1.5l5.01,-0.28l0.28,-0.29l-0.26,-0.31l-10.68,-1.38l-5.38,-2.1l0.27,-1.68l9.3,-2.6l9.18,-2.68l0.19,-0.16l0.97,-2.05l-0.18,-0.42l-6.29,-1.91l1.81,-1.9l8.58,-4.05l3.6,-0.63l0.23,-0.4l-0.92,-2.37l5.59,-1.5l7.66,-0.95l7.58,-0.05l2.65,1.84l0.31,0.02l6.52,-3.29l5.85,2.24l3.55,0.49l5.17,1.95l0.38,-0.16l-0.13,-0.39l-5.77,-3.16l0.29,-2.26Z", "name": "Greenland"}, "KW": {"path": "M540.87,207.81l0.41,0.94l-0.18,0.51l0.0,0.21l0.65,1.66l-1.15,0.05l-0.54,-1.12l-0.24,-0.17l-1.73,-0.2l1.44,-2.06l1.33,0.18Z", "name": "Kuwait"}, "GH": {"path": "M423.16,269.88l-3.58,1.34l-1.41,0.87l-2.13,0.69l-1.91,-0.61l0.09,-0.75l-0.03,-0.17l-1.04,-2.07l0.62,-2.7l1.04,-2.08l0.03,-0.19l-1.0,-5.46l0.05,-1.12l4.04,-0.11l1.08,0.18l0.18,-0.03l0.72,-0.36l0.75,0.13l-0.11,0.48l0.06,0.26l0.98,1.22l-0.0,1.77l0.24,1.99l0.05,0.13l0.55,0.81l-0.52,2.14l0.19,1.37l0.69,1.66l0.38,0.62Z", "name": "Ghana"}, "OM": {"path": "M568.16,231.0l-0.08,0.1l-0.84,1.61l-0.93,-0.11l-0.27,0.11l-0.58,0.73l-0.4,1.32l-0.01,0.14l0.29,1.61l-0.07,0.09l-1.0,-0.01l-0.16,0.04l-1.56,0.97l-0.14,0.2l-0.23,1.17l-0.41,0.4l-1.44,-0.02l-0.17,0.05l-0.98,0.65l-0.13,0.25l0.01,0.87l-0.97,0.57l-1.27,-0.22l-0.19,0.03l-1.63,0.84l-0.88,0.11l-2.55,-5.57l7.2,-2.49l0.19,-0.19l1.67,-5.23l-0.03,-0.25l-1.1,-1.78l0.05,-0.89l0.68,-1.03l0.05,-0.16l0.01,-0.89l0.96,-0.44l0.07,-0.5l-0.32,-0.26l0.16,-1.31l0.85,-0.01l1.03,1.67l0.09,0.09l1.4,0.96l0.11,0.05l1.82,0.34l1.37,0.45l1.75,2.32l0.13,0.1l0.7,0.26l-0.0,0.3l-1.25,2.19l-1.01,0.8ZM561.88,218.47l-0.01,0.02l-0.15,-0.29l0.3,-0.38l-0.14,0.65Z", "name": "Oman"}, "_3": {"path": "M543.2,261.06l-1.07,1.46l-1.65,1.99l-1.91,0.01l-8.08,-2.95l-0.89,-0.84l-0.9,-1.19l-0.81,-1.23l0.44,-0.73l0.76,-1.12l0.49,0.28l0.52,1.05l1.13,1.06l0.2,0.08l1.24,0.01l2.42,-0.65l2.77,-0.31l2.17,-0.78l1.31,-0.19l0.84,-0.43l1.03,-0.06l-0.01,4.54Z", "name": "Somaliland"}, "_2": {"path": "M384.23,230.37l0.07,-0.06l0.28,-0.89l0.99,-1.13l0.07,-0.13l0.8,-3.54l3.4,-2.8l0.09,-0.13l0.76,-2.17l0.07,5.5l-2.07,0.21l-0.24,0.17l-0.61,1.36l-0.02,0.16l0.43,3.46l-4.01,-0.01ZM391.82,218.2l0.07,-0.06l0.75,-1.93l1.86,-0.25l0.94,0.34l1.14,0.0l0.18,-0.06l0.73,-0.56l1.41,-0.08l-0.0,2.72l-7.08,-0.12Z", "name": "Western Sahara"}, "_1": {"path": "M472.71,172.84l-0.07,-0.43l-0.16,-0.22l-0.53,-0.27l-0.38,-0.58l0.3,-0.43l0.51,-0.19l0.18,-0.18l0.3,-0.87l0.12,-0.04l0.22,0.26l0.12,0.09l0.38,0.15l0.28,0.41l0.15,0.12l0.34,0.12l0.43,0.5l0.15,0.07l-0.12,0.3l-0.27,0.32l-0.03,0.18l-0.31,0.06l-1.48,0.47l-0.15,0.17Z", "name": "Kosovo"}, "_0": {"path": "M503.54,192.92l0.09,-0.17l0.41,0.01l-0.08,0.01l-0.42,0.15ZM504.23,192.76l1.02,0.02l0.4,-0.13l-0.09,0.29l0.03,0.08l-0.35,0.16l-0.24,-0.04l-0.06,-0.1l-0.18,-0.17l-0.19,-0.08l-0.33,-0.02Z", "name": "Northern Cyprus"}, "JO": {"path": "M510.26,200.93l0.28,-0.57l2.53,1.0l0.27,-0.02l4.57,-2.77l0.84,2.84l-0.28,0.25l-4.95,1.37l-0.14,0.49l2.24,2.48l-0.5,0.28l-0.13,0.14l-0.35,0.78l-1.76,0.35l-0.2,0.14l-0.57,0.94l-0.94,0.73l-2.45,-0.38l-0.03,-0.12l1.23,-4.32l-0.04,-1.1l0.34,-0.75l0.03,-0.12l0.0,-1.63Z", "name": "Jordan"}, "HR": {"path": "M455.49,162.73l1.53,0.09l0.24,-0.1l0.29,-0.34l0.64,0.38l0.14,0.04l0.98,0.06l0.32,-0.3l-0.01,-0.66l0.67,-0.25l0.19,-0.22l0.21,-1.11l1.72,-0.72l0.65,0.32l1.94,1.37l2.07,0.6l0.22,-0.02l0.67,-0.33l0.47,0.94l0.67,0.76l-0.63,0.77l-0.91,-0.55l-0.16,-0.04l-1.69,0.04l-2.2,-0.51l-1.17,0.07l-0.21,0.11l-0.36,0.42l-0.67,-0.53l-0.46,0.12l-0.52,1.29l0.05,0.31l1.21,1.42l0.58,0.99l1.15,1.14l0.95,0.68l0.92,1.23l0.1,0.09l1.75,0.91l-1.87,-0.89l-1.5,-1.11l-2.23,-0.88l-1.77,-1.9l0.12,-0.06l0.1,-0.47l-1.07,-1.22l-0.04,-0.94l-0.21,-0.27l-1.61,-0.49l-0.35,0.14l-0.53,0.93l-0.41,-0.57l0.04,-0.73Z", "name": "Croatia"}, "HT": {"path": "M237.82,234.68l1.35,0.1l1.95,0.37l0.18,1.15l-0.16,0.83l-0.51,0.37l-0.06,0.44l0.57,0.68l-0.02,0.22l-1.31,-0.35l-1.26,0.17l-1.49,-0.18l-0.15,0.02l-1.03,0.43l-1.02,-0.61l0.09,-0.36l2.04,0.32l1.9,0.21l0.19,-0.05l0.9,-0.58l0.05,-0.47l-1.05,-1.03l0.02,-0.86l-0.23,-0.3l-1.13,-0.29l0.18,-0.23Z", "name": "Haiti"}, "HU": {"path": "M461.96,157.92l0.68,-1.66l-0.03,-0.29l-0.15,-0.22l0.84,-0.0l0.3,-0.26l0.12,-0.84l0.88,0.57l0.98,0.38l0.16,0.01l2.1,-0.39l0.23,-0.21l0.14,-0.45l0.88,-0.1l1.06,-0.43l0.13,0.1l0.28,0.04l1.18,-0.4l0.14,-0.1l0.52,-0.67l0.63,-0.15l2.6,0.95l0.26,-0.03l0.38,-0.23l1.12,0.7l0.1,0.49l-1.31,0.57l-0.14,0.13l-1.18,2.14l-1.44,2.04l-1.85,0.55l-1.51,-0.13l-0.14,0.02l-1.92,0.82l-0.85,0.42l-1.91,-0.55l-1.83,-1.31l-0.74,-0.37l-0.44,-0.97l-0.26,-0.18Z", "name": "Hungary"}, "HN": {"path": "M202.48,251.87l-0.33,-0.62l-0.18,-0.14l-0.5,-0.15l0.13,-0.76l-0.11,-0.28l-0.34,-0.28l-0.6,-0.23l-0.18,-0.01l-0.81,0.22l-0.16,-0.24l-0.72,-0.39l-0.51,-0.48l-0.12,-0.07l-0.31,-0.09l0.24,-0.3l0.04,-0.3l-0.16,-0.4l0.1,-0.28l1.14,-0.69l1.0,-0.86l0.09,0.04l0.3,-0.05l0.47,-0.39l0.49,-0.03l0.14,0.13l0.29,0.06l0.31,-0.1l1.16,0.22l1.24,-0.08l0.81,-0.28l0.29,-0.25l0.63,0.1l0.69,0.18l0.65,-0.06l0.49,-0.2l1.04,0.32l0.38,0.06l0.7,0.44l0.71,0.56l0.92,0.41l0.1,0.11l-0.11,-0.01l-0.23,0.09l-0.3,0.3l-0.76,0.29l-0.58,0.0l-0.15,0.04l-0.45,0.26l-0.31,-0.07l-0.37,-0.34l-0.28,-0.07l-0.26,0.07l-0.18,0.15l-0.23,0.43l-0.04,-0.0l-0.33,0.28l-0.03,0.4l-0.76,0.61l-0.45,0.3l-0.15,0.16l-0.51,-0.36l-0.41,0.06l-0.45,0.56l-0.41,-0.01l-0.59,0.06l-0.27,0.31l0.04,0.96l-0.07,0.0l-0.25,0.16l-0.24,0.45l-0.42,0.06Z", "name": "Honduras"}, "LV": {"path": "M473.99,127.16l0.07,-2.15l1.15,-2.11l2.05,-1.07l1.84,2.48l0.25,0.12l2.01,-0.07l0.29,-0.25l0.45,-2.58l1.85,-0.56l0.98,0.4l2.13,1.33l0.16,0.05l1.97,0.01l1.02,0.7l0.21,1.67l0.71,1.84l-2.44,1.23l-1.36,0.53l-2.28,-1.62l-0.12,-0.05l-1.18,-0.2l-0.28,-0.6l-0.31,-0.17l-2.43,0.35l-4.17,-0.23l-0.12,0.02l-2.45,0.93Z", "name": "Latvia"}, "PR": {"path": "M254.95,238.31l1.15,0.21l0.2,0.23l-0.36,0.36l-1.76,-0.01l-1.2,0.07l-0.09,-0.69l0.17,-0.18l1.89,0.01Z", "name": "Puerto Rico"}, "PS": {"path": "M509.66,201.06l-0.0,1.44l-0.29,0.63l-0.59,0.19l0.02,-0.11l0.52,-0.31l-0.02,-0.53l-0.41,-0.2l0.36,-1.28l0.41,0.17Z", "name": "West Bank"}, "PT": {"path": "M398.65,173.6l0.75,-0.63l0.7,-0.3l0.51,1.2l0.28,0.18l1.48,-0.0l0.2,-0.08l0.33,-0.3l1.16,0.08l0.52,1.11l-0.95,0.66l-0.13,0.24l-0.03,2.2l-0.33,0.35l-0.08,0.18l-0.08,1.17l-0.86,0.19l-0.2,0.44l0.93,1.64l-0.64,1.79l0.07,0.31l0.72,0.72l-0.24,0.56l-0.9,1.05l-0.07,0.26l0.17,0.77l-0.73,0.54l-1.18,-0.36l-0.16,-0.0l-0.85,0.21l0.31,-1.81l-0.23,-1.87l-0.23,-0.25l-0.99,-0.24l-0.49,-0.91l0.18,-1.72l0.93,-0.99l0.08,-0.16l0.17,-1.17l0.52,-1.76l-0.04,-1.36l-0.51,-1.14l-0.09,-0.8Z", "name": "Portugal"}, "PY": {"path": "M264.33,341.43l0.93,-2.96l0.07,-1.42l1.1,-2.1l4.19,-0.73l2.22,0.04l2.12,1.21l0.07,0.76l0.7,1.38l-0.16,3.48l0.24,0.31l2.64,0.5l0.19,-0.03l0.9,-0.45l1.47,0.62l0.38,0.64l0.23,2.35l0.3,1.07l0.25,0.21l0.93,0.12l0.16,-0.02l0.8,-0.37l0.61,0.33l-0.0,1.25l-0.33,1.53l-0.5,1.57l-0.39,2.26l-2.14,1.94l-1.85,0.4l-2.74,-0.4l-2.13,-0.62l2.26,-3.75l0.03,-0.24l-0.36,-1.18l-0.17,-0.19l-2.55,-1.03l-3.04,-1.95l-2.07,-0.43l-4.4,-4.12Z", "name": "Paraguay"}, "PA": {"path": "M213.65,263.79l0.18,-0.43l0.02,-0.18l-0.06,-0.28l0.23,-0.18l-0.01,-0.48l-0.4,-0.29l-0.01,-0.62l0.57,-0.13l0.68,0.69l-0.04,0.39l0.26,0.33l1.0,0.11l0.27,-0.1l0.49,0.44l0.24,0.07l1.34,-0.22l1.04,-0.62l1.49,-0.5l0.86,-0.73l0.99,0.11l0.18,0.28l1.35,0.08l1.02,0.4l0.78,0.72l0.71,0.53l-0.1,0.12l-0.05,0.3l0.53,1.34l-0.28,0.44l-0.6,-0.13l-0.36,0.22l-0.2,0.76l-0.41,-0.36l-0.44,-1.12l0.49,-0.53l-0.14,-0.49l-0.51,-0.14l-0.41,-0.72l-0.11,-0.11l-1.25,-0.7l-0.19,-0.04l-1.1,0.16l-0.22,0.15l-0.47,0.81l-0.9,0.56l-0.49,0.08l-0.22,0.17l-0.25,0.52l0.05,0.32l0.93,1.07l-0.41,0.21l-0.29,0.3l-0.81,0.09l-0.36,-1.26l-0.53,-0.1l-0.21,0.28l-0.5,-0.09l-0.44,-0.88l-0.22,-0.16l-0.99,-0.16l-0.61,-0.28l-0.13,-0.03l-1.0,0.0Z", "name": "Panama"}, "PG": {"path": "M808.4,298.6l0.62,0.46l1.19,1.56l1.04,0.77l-0.18,0.37l-0.42,0.15l-0.92,-0.82l-1.05,-1.53l-0.27,-0.96ZM804.09,296.06l-0.3,0.26l-0.36,-1.11l-0.66,-1.06l-2.55,-1.89l-1.42,-0.59l0.17,-0.15l1.16,0.6l0.85,0.55l1.01,0.58l0.97,1.02l0.9,0.76l0.24,1.03ZM796.71,297.99l0.15,0.82l0.34,0.24l1.43,-0.19l0.19,-0.11l0.68,-0.82l1.36,-0.87l0.13,-0.31l-0.21,-1.13l1.04,-0.03l0.3,0.25l-0.04,1.17l-0.74,1.34l-1.17,0.18l-0.22,0.15l-0.35,0.62l-2.51,1.13l-1.21,-0.0l-1.99,-0.71l-1.19,-0.58l0.07,-0.28l1.98,0.32l1.46,-0.2l0.24,-0.21l0.25,-0.79ZM789.24,303.52l0.11,0.15l2.19,1.62l1.6,2.62l0.27,0.14l1.09,-0.06l-0.07,0.77l0.23,0.32l1.23,0.27l-0.14,0.09l0.05,0.53l2.39,0.95l-0.11,0.28l-1.33,0.14l-0.51,-0.55l-0.18,-0.09l-4.59,-0.65l-1.87,-1.55l-1.38,-1.35l-1.28,-2.17l-0.16,-0.13l-3.27,-1.1l-0.19,0.0l-2.12,0.72l-1.58,0.85l-0.15,0.31l0.28,1.63l-1.65,0.73l-1.37,-0.4l-2.3,-0.09l-0.08,-15.65l3.95,1.57l4.58,1.42l1.67,1.25l1.32,1.19l0.36,1.39l0.19,0.21l4.06,1.51l0.39,0.85l-1.9,0.22l-0.25,0.39l0.55,1.68Z", "name": "Papua New Guinea"}, "PE": {"path": "M246.44,329.21l-0.63,1.25l-1.05,0.54l-2.25,-1.33l-0.19,-0.93l-0.16,-0.21l-4.95,-2.58l-4.46,-2.79l-1.87,-1.52l-0.94,-1.91l0.33,-0.6l-0.01,-0.31l-2.11,-3.33l-2.46,-4.66l-2.36,-5.02l-1.04,-1.18l-0.77,-1.81l-0.08,-0.11l-1.95,-1.64l-1.54,-0.88l0.61,-0.85l0.02,-0.31l-1.15,-2.27l0.69,-1.56l1.59,-1.26l0.12,0.42l-0.56,0.47l-0.11,0.25l0.07,0.92l0.36,0.27l0.97,-0.19l0.85,0.23l0.99,1.19l0.41,0.05l1.42,-1.03l0.11,-0.16l0.46,-1.64l1.45,-2.06l2.92,-0.96l0.11,-0.07l2.73,-2.62l0.84,-1.72l0.02,-0.18l-0.3,-1.65l0.28,-0.1l1.49,1.06l0.77,1.14l0.1,0.09l1.08,0.6l1.43,2.55l0.21,0.15l1.86,0.31l0.18,-0.03l1.25,-0.6l0.77,0.37l0.17,0.03l1.4,-0.2l1.57,0.96l-1.45,2.29l0.23,0.46l0.63,0.05l0.66,0.7l-1.51,-0.08l-0.24,0.1l-0.27,0.31l-1.96,0.46l-2.95,1.74l-0.14,0.21l-0.17,1.1l-0.6,0.82l-0.05,0.23l0.21,1.13l-1.31,0.63l-0.17,0.27l0.0,0.91l-0.53,0.37l-0.1,0.37l1.04,2.27l1.31,1.46l-0.44,0.9l0.24,0.43l1.52,0.13l0.87,1.23l0.24,0.13l2.21,0.07l0.18,-0.06l1.55,-1.13l-0.14,3.22l0.23,0.3l1.14,0.29l0.16,-0.0l1.18,-0.36l1.97,3.71l-0.45,0.71l-0.04,0.14l-0.12,1.8l-0.05,2.07l-0.92,1.2l-0.03,0.31l0.38,0.8l-0.48,0.72l-0.02,0.3l1.01,2.02l-1.5,2.64Z", "name": "Peru"}, "PK": {"path": "M609.08,187.76l1.66,1.21l0.71,2.11l0.2,0.19l3.62,1.01l-1.98,1.95l-2.65,0.4l-3.75,-0.68l-0.26,0.08l-1.23,1.22l-0.07,0.31l0.89,2.46l0.88,1.92l0.1,0.12l1.67,1.14l-1.8,1.35l-0.12,0.25l0.04,1.85l-2.35,2.67l-1.59,2.79l-2.5,2.72l-2.76,-0.2l-0.24,0.09l-2.76,2.83l0.04,0.45l1.54,1.13l0.27,1.94l0.09,0.17l1.34,1.29l0.4,1.83l-5.14,-0.01l-0.22,0.09l-1.53,1.63l-1.52,-0.56l-0.76,-1.88l-1.93,-2.03l-0.25,-0.09l-4.6,0.5l-4.05,0.05l-3.1,0.33l0.77,-2.53l3.48,-1.33l0.19,-0.33l-0.21,-1.24l-0.19,-0.23l-1.01,-0.37l-0.06,-2.18l-0.17,-0.26l-2.32,-1.16l-0.96,-1.57l-0.56,-0.65l3.16,1.05l0.14,0.01l2.45,-0.4l1.44,0.33l0.3,-0.1l0.4,-0.47l1.58,0.22l0.14,-0.01l3.25,-1.14l0.2,-0.27l0.08,-2.23l1.23,-1.38l1.73,0.0l0.28,-0.2l0.22,-0.61l1.68,-0.32l0.86,0.24l0.27,-0.05l0.98,-0.78l0.11,-0.26l-0.13,-1.57l0.96,-1.52l1.51,-0.67l0.14,-0.41l-0.74,-1.4l1.86,0.07l0.26,-0.13l0.69,-1.01l0.05,-0.2l-0.09,-0.94l1.14,-1.09l0.09,-0.28l-0.29,-1.41l-0.51,-1.07l1.23,-1.05l2.6,-0.58l2.86,-0.33l1.33,-0.54l1.3,-0.29Z", "name": "Pakistan"}, "PH": {"path": "M737.11,263.82l0.25,1.66l0.14,1.34l-0.54,1.46l-0.64,-1.79l-0.5,-0.1l-1.17,1.28l-0.05,0.32l0.74,1.71l-0.49,0.81l-2.6,-1.28l-0.61,-1.57l0.68,-1.07l-0.07,-0.4l-1.59,-1.19l-0.42,0.06l-0.69,0.91l-1.01,-0.08l-0.21,0.06l-1.58,1.2l-0.17,-0.3l0.87,-1.88l1.48,-0.66l1.18,-0.81l0.71,0.92l0.34,0.1l1.9,-0.69l0.18,-0.18l0.34,-0.94l1.57,-0.06l0.29,-0.32l-0.1,-1.38l1.41,0.83l0.36,2.06ZM734.94,254.42l0.56,2.24l-1.41,-0.49l-0.4,0.3l0.07,0.94l0.51,1.3l-0.54,0.26l-0.08,-1.34l-0.25,-0.28l-0.56,-0.1l-0.23,-0.91l1.03,0.14l0.34,-0.31l-0.03,-0.96l-0.06,-0.18l-1.14,-1.44l1.62,0.04l0.57,0.78ZM724.68,238.33l1.48,0.71l0.33,-0.04l0.44,-0.38l0.05,0.13l-0.37,0.97l0.01,0.23l0.81,1.75l-0.59,1.92l-1.37,0.79l-0.14,0.2l-0.39,2.07l0.01,0.14l0.56,2.04l0.23,0.21l1.33,0.28l0.14,-0.0l1.0,-0.27l2.82,1.28l-0.2,1.16l0.12,0.29l0.66,0.5l-0.13,0.56l-1.54,-0.99l-0.89,-1.29l-0.49,0.0l-0.44,0.65l-1.34,-1.28l-0.26,-0.08l-2.18,0.36l-0.96,-0.44l0.09,-0.72l0.69,-0.57l-0.01,-0.47l-0.75,-0.59l-0.47,0.14l-0.15,0.43l-0.86,-1.02l-0.34,-1.02l-0.07,-1.74l0.49,0.41l0.49,-0.21l0.26,-3.99l0.73,-2.1l1.23,0.0ZM731.12,258.92l-0.82,0.75l-0.83,1.64l-0.52,0.5l-1.17,-1.33l0.36,-0.47l0.62,-0.7l0.07,-0.15l0.24,-1.35l0.73,-0.08l-0.31,1.29l0.16,0.34l0.37,-0.09l1.21,-1.6l-0.12,1.24ZM726.66,255.58l0.85,0.45l0.14,0.03l1.28,-0.0l-0.03,0.62l-1.04,0.96l-1.15,0.55l-0.05,-0.71l0.17,-1.26l-0.01,-0.13l-0.16,-0.51ZM724.92,252.06l-0.45,1.5l-0.7,-0.83l-0.95,-1.43l1.44,0.06l0.67,0.7ZM717.48,261.28l-1.87,1.35l0.21,-0.3l1.81,-1.57l1.5,-1.75l0.97,-1.84l0.23,1.08l-1.56,1.33l-1.29,1.7Z", "name": "Philippines"}, "PL": {"path": "M458.8,144.25l-0.96,-1.98l0.18,-1.06l-0.01,-0.15l-0.62,-1.8l-0.82,-1.11l0.56,-0.73l0.05,-0.28l-0.51,-1.51l1.48,-0.87l3.88,-1.58l3.06,-1.14l2.23,0.52l0.15,0.66l0.29,0.23l2.4,0.04l3.11,0.39l4.56,-0.05l1.12,0.32l0.51,0.89l0.1,1.45l0.03,0.12l0.66,1.23l-0.01,1.08l-1.33,0.61l-0.14,0.41l0.74,1.5l0.07,1.53l1.22,2.79l-0.19,0.66l-1.09,0.33l-0.14,0.09l-2.27,2.72l-0.04,0.31l0.35,0.8l-2.22,-1.16l-0.21,-0.02l-1.72,0.44l-1.1,-0.31l-0.21,0.02l-1.3,0.61l-1.11,-1.02l-0.32,-0.05l-0.81,0.35l-1.15,-1.61l-0.21,-0.12l-1.65,-0.17l-0.19,-0.82l-0.23,-0.23l-1.72,-0.37l-0.34,0.17l-0.25,0.56l-0.88,-0.44l0.12,-0.69l-0.25,-0.35l-1.78,-0.27l-1.08,-0.97Z", "name": "Poland"}, "ZM": {"path": "M502.81,308.32l1.09,1.04l0.58,1.94l-0.39,0.66l-0.5,2.05l-0.0,0.14l0.45,1.95l-0.69,0.77l-0.06,0.11l-0.76,2.37l0.15,0.36l0.62,0.31l-6.85,1.9l-0.22,0.33l0.2,1.54l-1.62,0.3l-0.12,0.05l-1.43,1.02l-0.11,0.15l-0.25,0.73l-0.73,0.17l-0.14,0.08l-2.18,2.12l-1.33,1.6l-0.65,0.05l-0.83,-0.29l-2.75,-0.28l-0.24,-0.1l-0.15,-0.27l-0.99,-0.58l-0.12,-0.04l-1.73,-0.14l-1.88,0.54l-1.5,-1.48l-1.61,-2.01l0.11,-7.73l4.92,0.03l0.29,-0.37l-0.19,-0.79l0.34,-0.86l0.0,-0.21l-0.41,-1.11l0.26,-1.14l-0.01,-0.16l-0.12,-0.36l0.18,0.01l0.1,0.56l0.31,0.25l1.14,-0.06l1.44,0.21l0.76,1.05l0.19,0.12l2.01,0.35l0.19,-0.03l1.24,-0.65l0.44,1.03l0.22,0.18l1.81,0.34l0.85,0.99l1.02,1.39l0.24,0.12l1.92,0.02l0.3,-0.32l-0.21,-2.74l-0.47,-0.23l-0.53,0.36l-1.58,-0.89l-0.51,-0.34l0.29,-2.36l0.44,-2.99l-0.03,-0.18l-0.5,-0.99l0.61,-1.38l0.53,-0.24l3.26,-0.41l0.89,0.23l1.01,0.62l1.04,0.44l1.6,0.43l1.35,0.72Z", "name": "Zambia"}, "EE": {"path": "M482.19,120.88l0.23,-1.68l-0.43,-0.31l-0.75,0.37l-1.34,-1.1l-0.18,-1.75l2.92,-0.95l3.07,-0.53l2.66,0.6l2.48,-0.1l0.18,0.31l-1.65,1.96l-0.06,0.26l0.71,3.25l-0.88,0.94l-1.85,-0.01l-2.08,-1.3l-1.14,-0.47l-0.2,-0.01l-1.69,0.51Z", "name": "Estonia"}, "EG": {"path": "M508.07,208.8l-0.66,1.06l-0.53,2.03l-0.64,1.32l-0.32,0.26l-1.74,-1.85l-1.77,-3.86l-0.48,-0.09l-0.26,0.25l-0.07,0.32l1.04,2.88l1.55,2.76l1.89,4.18l0.94,1.48l0.83,1.54l2.08,2.73l-0.3,0.28l-0.1,0.23l0.08,1.72l0.11,0.22l2.91,2.37l-28.78,0.0l0.0,-19.06l-0.73,-2.2l0.61,-1.59l0.0,-0.2l-0.34,-1.04l0.73,-1.08l3.13,-0.04l2.36,0.72l2.48,0.81l1.15,0.43l0.23,-0.01l1.93,-0.87l1.02,-0.78l2.08,-0.21l1.59,0.31l0.62,1.24l0.52,0.03l0.46,-0.71l1.86,0.59l1.95,0.16l0.17,-0.04l0.92,-0.52l1.48,4.24Z", "name": "Egypt"}, "ZA": {"path": "M467.06,373.27l-0.13,-0.29l0.01,-1.58l-0.02,-0.12l-0.71,-1.64l0.59,-0.37l0.14,-0.26l-0.07,-2.13l-0.05,-0.15l-1.63,-2.58l-1.25,-2.31l-1.71,-3.37l0.88,-0.98l0.7,0.52l0.39,1.08l0.23,0.19l1.1,0.19l1.55,0.51l0.14,0.01l1.35,-0.2l0.11,-0.04l2.24,-1.39l0.14,-0.25l0.0,-9.4l0.16,0.09l1.39,2.38l-0.22,1.53l0.04,0.19l0.56,0.94l0.3,0.14l1.79,-0.27l0.16,-0.08l1.23,-1.18l1.17,-0.79l0.1,-0.12l0.57,-1.19l1.02,-0.52l0.9,0.28l1.16,0.73l0.14,0.05l2.04,0.13l0.13,-0.02l1.6,-0.62l0.18,-0.19l0.63,-1.93l1.18,-0.19l0.19,-0.12l0.78,-1.05l0.81,-1.71l2.18,-1.91l3.44,-1.88l0.89,0.02l1.17,0.43l0.21,-0.0l0.76,-0.29l1.07,0.21l1.15,3.55l0.63,1.82l-0.44,2.9l0.1,0.52l-0.74,-0.29l-0.18,-0.01l-0.72,0.19l-0.21,0.2l-0.22,0.74l-0.66,0.97l-0.05,0.18l0.02,0.93l0.09,0.21l1.49,1.46l0.27,0.08l1.47,-0.29l0.22,-0.18l0.43,-1.01l1.29,0.02l-0.51,1.63l-0.29,2.2l-0.59,1.12l-2.2,1.78l-1.06,1.39l-0.72,1.44l-1.39,1.93l-2.81,2.84l-1.75,1.65l-1.85,1.24l-2.55,1.06l-1.23,0.14l-0.24,0.18l-0.22,0.54l-1.27,-0.35l-0.2,0.01l-1.15,0.5l-2.62,-0.52l-0.12,0.0l-1.46,0.33l-0.98,-0.14l-0.16,0.02l-2.55,1.1l-2.11,0.44l-1.59,1.07l-0.93,0.06l-0.97,-0.92l-0.19,-0.08l-0.72,-0.04l-1.0,-1.16l-0.25,0.05ZM493.72,359.24l-1.12,-0.86l-0.31,-0.03l-1.23,0.59l-1.36,1.07l-1.39,1.78l0.01,0.38l1.88,2.11l0.31,0.09l0.9,-0.27l0.18,-0.15l0.4,-0.77l1.28,-0.39l0.18,-0.16l0.42,-0.88l0.76,-1.32l-0.05,-0.37l-0.87,-0.82Z", "name": "South Africa"}, "EC": {"path": "M220.2,293.48l1.25,-1.76l0.02,-0.31l-0.54,-1.09l-0.5,-0.06l-0.78,0.94l-1.03,-0.75l0.33,-0.46l0.05,-0.23l-0.38,-2.04l0.66,-0.28l0.17,-0.19l0.45,-1.52l0.93,-1.58l0.04,-0.2l-0.13,-0.78l1.19,-0.47l1.57,-0.91l2.35,1.34l0.17,0.04l0.28,-0.02l0.52,0.91l0.21,0.15l2.12,0.35l0.2,-0.03l0.55,-0.31l1.08,0.73l0.97,0.54l0.31,1.67l-0.71,1.49l-2.64,2.54l-2.95,0.97l-0.15,0.11l-1.53,2.18l-0.49,1.68l-1.1,0.8l-0.87,-1.05l-0.15,-0.1l-1.01,-0.27l-0.13,-0.0l-0.7,0.14l-0.03,-0.43l0.6,-0.5l0.1,-0.31l-0.26,-0.91Z", "name": "Ecuador"}, "AL": {"path": "M470.27,171.7l0.38,0.19l0.45,-0.18l0.4,0.61l0.11,0.1l0.46,0.24l0.13,0.87l-0.3,0.95l-0.0,0.17l0.36,1.28l0.12,0.17l0.9,0.63l-0.03,0.44l-0.67,0.35l-0.16,0.22l-0.14,0.88l-0.96,1.18l-0.06,-0.03l-0.04,-0.48l-0.12,-0.22l-1.28,-0.92l-0.19,-1.25l0.2,-1.96l0.33,-0.89l-0.06,-0.3l-0.36,-0.41l-0.13,-0.75l0.66,-0.9Z", "name": "Albania"}, "AO": {"path": "M461.62,299.93l0.55,1.67l0.73,1.54l1.56,2.18l0.28,0.12l1.66,-0.2l0.81,-0.34l1.28,0.33l0.33,-0.14l0.39,-0.67l0.56,-1.3l1.37,-0.09l0.27,-0.21l0.07,-0.23l0.67,-0.01l-0.13,0.53l0.29,0.37l2.74,-0.02l0.04,1.29l0.03,0.13l0.46,0.87l-0.35,1.52l0.18,1.55l0.07,0.16l0.75,0.85l-0.13,2.89l0.41,0.29l0.56,-0.21l1.11,0.05l1.5,-0.37l0.9,0.12l0.18,0.53l-0.27,1.15l0.01,0.17l0.4,1.08l-0.33,0.85l-0.01,0.18l0.12,0.51l-4.83,-0.03l-0.3,0.3l-0.12,8.13l0.07,0.19l1.69,2.1l1.27,1.25l-4.03,0.92l-5.93,-0.36l-1.66,-1.19l-0.18,-0.06l-10.15,0.11l-0.34,0.13l-1.35,-1.05l-0.17,-0.06l-1.62,-0.08l-1.6,0.45l-0.88,0.36l-0.17,-1.2l0.34,-2.19l0.85,-2.32l0.14,-1.13l0.79,-2.24l0.57,-1.0l1.42,-1.64l0.82,-1.15l0.05,-0.13l0.26,-1.88l-0.13,-1.51l-0.07,-0.16l-0.72,-0.87l-1.23,-2.91l0.09,-0.37l0.73,-0.95l0.05,-0.27l-1.27,-4.12l-1.19,-1.54l0.1,-0.2l0.86,-0.28l0.78,0.03l0.83,-0.29l7.12,0.03ZM451.81,298.94l-0.17,0.07l-0.5,-1.42l0.85,-0.92l0.53,-0.29l0.48,0.44l-0.56,0.32l-0.1,0.1l-0.41,0.65l-0.05,0.14l-0.07,0.91Z", "name": "Angola"}, "KZ": {"path": "M598.42,172.08l-1.37,0.54l-3.3,2.09l-0.11,0.12l-1.01,1.97l-0.56,0.01l-0.6,-1.24l-0.26,-0.17l-2.95,-0.09l-0.46,-2.22l-0.29,-0.24l-0.91,-0.02l0.17,-2.72l-0.12,-0.26l-3.0,-2.22l-0.2,-0.06l-4.29,0.24l-2.8,0.42l-2.36,-2.7l-6.4,-3.65l-0.23,-0.03l-6.45,1.83l-0.22,0.29l0.1,10.94l-0.84,0.1l-1.65,-2.21l-0.11,-0.09l-1.69,-0.84l-0.2,-0.02l-2.84,0.63l-0.14,0.07l-0.71,0.64l-0.02,-0.11l0.57,-1.17l0.0,-0.26l-0.48,-1.05l-0.17,-0.16l-2.78,-0.99l-1.08,-2.62l-0.13,-0.15l-1.24,-0.7l-0.04,-0.48l2.07,0.25l0.34,-0.29l0.09,-2.03l1.84,-0.44l2.12,0.45l0.36,-0.25l0.45,-3.04l-0.45,-2.06l-0.31,-0.23l-2.44,0.15l-2.07,-0.75l-0.23,0.01l-2.88,1.38l-2.21,0.62l-0.96,-0.38l0.22,-1.39l-0.06,-0.23l-1.6,-2.12l-0.25,-0.12l-1.72,0.08l-1.87,-1.91l1.33,-2.24l-0.06,-0.38l-0.55,-0.5l1.72,-3.08l2.3,1.7l0.48,-0.2l0.29,-2.26l4.99,-3.48l3.76,-0.08l5.46,2.27l2.96,1.33l0.26,-0.01l2.59,-1.36l3.82,-0.06l3.13,1.67l0.38,-0.09l0.63,-0.85l3.36,0.14l0.29,-0.19l0.63,-1.57l-0.13,-0.37l-3.64,-2.05l2.0,-1.36l0.1,-0.38l-0.32,-0.62l2.09,-0.76l0.13,-0.47l-1.65,-2.13l0.89,-0.91l9.27,-1.18l0.13,-0.05l1.17,-0.82l6.2,-1.27l2.26,-1.43l4.19,0.7l0.74,3.39l0.38,0.22l2.52,-0.81l2.9,1.06l-0.18,1.63l0.32,0.33l2.52,-0.23l5.0,-2.58l0.03,0.39l3.16,2.62l5.57,8.48l0.49,0.02l1.18,-1.53l3.22,1.78l0.21,0.03l3.5,-0.83l1.21,0.52l1.16,1.82l0.15,0.12l1.67,0.61l1.01,1.32l0.28,0.11l3.04,-0.41l1.1,1.64l-1.68,1.89l-1.97,0.28l-0.26,0.29l-0.12,3.09l-1.2,1.23l-4.81,-1.01l-0.35,0.2l-1.77,5.51l-1.14,0.62l-4.92,1.23l-0.2,0.41l2.14,5.06l-1.45,0.67l-0.17,0.31l0.15,1.28l-1.05,-0.3l-1.21,-1.04l-0.17,-0.07l-3.73,-0.32l-4.15,-0.08l-0.92,0.31l-3.46,-1.24l-0.22,0.01l-1.42,0.63l-0.17,0.21l-0.32,1.49l-3.82,-0.97l-0.15,0.0l-1.65,0.43l-0.2,0.17l-0.51,1.21Z", "name": "Kazakhstan"}, "ET": {"path": "M516.0,247.63l1.21,0.92l0.3,0.04l1.3,-0.53l0.46,0.41l0.19,0.08l1.65,0.03l2.05,0.96l0.67,0.88l1.07,0.79l1.0,1.45l0.7,0.68l-0.72,0.92l-0.85,1.19l-0.04,0.25l0.19,0.67l0.04,0.74l0.29,0.28l1.4,0.04l0.55,-0.15l0.23,0.19l-0.41,0.67l0.01,0.32l0.92,1.39l0.93,1.23l0.99,0.94l0.1,0.06l8.19,2.99l1.51,0.01l-6.51,6.95l-3.14,0.11l-0.18,0.06l-2.15,1.71l-1.51,0.04l-0.22,0.1l-0.6,0.69l-1.46,-0.0l-0.93,-0.78l-0.32,-0.04l-2.29,1.05l-0.12,0.1l-0.64,0.9l-1.44,-0.17l-0.51,-0.26l-0.17,-0.03l-0.56,0.07l-0.68,-0.02l-3.1,-2.08l-0.17,-0.05l-1.62,0.0l-0.68,-0.65l0.0,-1.28l-0.21,-0.29l-1.19,-0.38l-1.42,-2.63l-0.13,-0.12l-1.05,-0.53l-0.46,-1.0l-1.27,-1.23l-0.17,-0.08l-1.08,-0.13l0.53,-0.9l1.17,-0.05l0.26,-0.17l0.37,-0.77l0.03,-0.14l-0.03,-2.23l0.7,-2.49l1.08,-0.65l0.14,-0.19l0.24,-1.0l1.03,-1.85l1.47,-1.22l0.09,-0.12l1.02,-2.51l0.36,-1.96l2.62,0.48l0.33,-0.18l0.63,-1.55Z", "name": "Ethiopia"}, "ZW": {"path": "M498.95,341.2l-1.16,-0.23l-0.16,0.01l-0.74,0.28l-1.11,-0.41l-1.02,-0.04l-1.52,-1.13l-0.12,-0.05l-1.79,-0.37l-0.65,-1.46l-0.01,-0.86l-0.22,-0.29l-0.99,-0.26l-2.74,-2.77l-0.77,-1.46l-0.52,-0.5l-0.72,-1.54l2.24,0.23l0.78,0.28l0.12,0.02l0.85,-0.06l0.21,-0.11l1.38,-1.66l2.11,-2.05l0.81,-0.18l0.22,-0.2l0.27,-0.8l1.29,-0.93l1.53,-0.28l0.11,0.66l0.3,0.25l2.02,-0.05l1.04,0.48l0.5,0.59l0.18,0.1l1.13,0.18l1.11,0.7l0.01,3.06l-0.49,1.82l-0.11,1.94l0.03,0.16l0.35,0.68l-0.24,1.3l-0.27,0.17l-0.12,0.15l-0.64,1.83l-2.49,2.8Z", "name": "Zimbabwe"}, "ES": {"path": "M398.67,172.8l0.09,-1.45l-0.06,-0.2l-0.82,-1.05l3.16,-1.96l3.01,0.54l3.33,-0.02l2.64,0.52l2.14,-0.15l3.9,0.1l0.91,1.08l0.14,0.09l4.61,1.38l0.26,-0.04l0.77,-0.55l2.66,1.29l0.17,0.03l2.59,-0.35l0.1,1.28l-2.2,1.85l-3.13,0.62l-0.23,0.23l-0.21,0.92l-1.54,1.68l-0.97,2.4l0.02,0.26l0.85,1.46l-1.27,1.14l-0.09,0.14l-0.5,1.73l-1.73,0.53l-0.15,0.1l-1.68,2.1l-3.03,0.04l-2.38,-0.05l-0.17,0.05l-1.57,1.01l-0.9,1.01l-0.96,-0.19l-0.82,-0.86l-0.69,-1.6l-0.22,-0.18l-2.14,-0.41l-0.13,-0.62l0.83,-0.97l0.39,-0.86l-0.06,-0.33l-0.73,-0.73l0.63,-1.74l-0.02,-0.25l-0.8,-1.41l0.69,-0.15l0.23,-0.27l0.09,-1.29l0.33,-0.36l0.08,-0.2l0.03,-2.16l1.03,-0.72l0.1,-0.37l-0.7,-1.5l-0.25,-0.17l-1.46,-0.11l-0.22,0.07l-0.34,0.3l-1.17,0.0l-0.55,-1.29l-0.39,-0.16l-1.02,0.44l-0.45,0.36Z", "name": "Spain"}, "ER": {"path": "M527.15,253.05l-0.77,-0.74l-1.01,-1.47l-1.14,-0.86l-0.62,-0.84l-0.11,-0.09l-2.18,-1.02l-0.12,-0.03l-1.61,-0.03l-0.52,-0.46l-0.31,-0.05l-1.31,0.54l-1.38,-1.06l-0.46,0.12l-0.69,1.68l-2.49,-0.46l-0.2,-0.76l1.06,-3.69l0.24,-1.65l0.66,-0.66l1.76,-0.4l0.16,-0.1l0.97,-1.13l1.24,2.55l0.68,2.34l0.09,0.14l1.4,1.27l3.39,2.4l1.37,1.43l2.14,2.34l0.94,0.6l-0.32,0.26l-0.85,-0.17Z", "name": "Eritrea"}, "ME": {"path": "M469.05,172.9l-0.57,-0.8l-0.1,-0.09l-0.82,-0.46l0.16,-0.33l0.35,-1.57l0.72,-0.62l0.27,-0.16l0.48,0.38l0.35,0.4l0.12,0.08l0.79,0.32l0.66,0.43l-0.43,0.62l-0.28,0.11l-0.07,-0.25l-0.53,-0.1l-1.09,1.49l-0.05,0.23l0.06,0.32Z", "name": "Montenegro"}, "MD": {"path": "M488.2,153.75l0.14,-0.11l1.49,-0.28l1.75,0.95l1.06,0.14l0.92,0.7l-0.15,0.9l0.15,0.31l0.8,0.46l0.33,1.2l0.09,0.14l0.72,0.66l-0.11,0.28l0.1,0.33l-0.06,0.02l-1.25,-0.08l-0.17,-0.29l-0.39,-0.12l-0.52,0.25l-0.16,0.36l0.13,0.42l-0.6,0.88l-0.43,1.03l-0.22,0.12l-0.32,-1.0l0.25,-1.34l-0.08,-1.38l-0.06,-0.17l-1.43,-1.87l-0.81,-1.36l-0.78,-0.95l-0.12,-0.09l-0.29,-0.12Z", "name": "Moldova"}, "MG": {"path": "M544.77,316.45l0.64,1.04l0.6,1.62l0.4,3.04l0.63,1.21l-0.22,1.07l-0.15,0.26l-0.59,-1.05l-0.52,-0.01l-0.47,0.76l-0.04,0.23l0.46,1.84l-0.19,0.92l-0.61,0.53l-0.1,0.21l-0.16,2.15l-0.97,2.98l-1.24,3.59l-1.55,4.97l-0.96,3.67l-1.08,2.93l-1.94,0.61l-2.05,1.06l-3.2,-1.53l-0.62,-1.26l-0.18,-2.39l-0.87,-2.07l-0.22,-1.8l0.4,-1.69l1.01,-0.4l0.19,-0.28l0.01,-0.79l1.15,-1.91l0.04,-0.11l0.23,-1.66l-0.03,-0.17l-0.57,-1.21l-0.46,-1.58l-0.19,-2.25l0.82,-1.36l0.33,-1.51l1.11,-0.1l1.4,-0.53l0.9,-0.45l1.03,-0.03l0.21,-0.09l1.41,-1.45l2.12,-1.65l0.75,-1.29l0.03,-0.24l-0.17,-0.56l0.53,0.15l0.32,-0.1l1.38,-1.77l0.06,-0.18l0.04,-1.44l0.54,-0.74l0.62,0.77Z", "name": "Madagascar"}, "MA": {"path": "M378.66,230.13l0.07,-0.75l0.93,-0.72l0.82,-1.37l0.04,-0.21l-0.14,-0.8l0.8,-1.74l1.33,-1.61l0.79,-0.4l0.14,-0.15l0.66,-1.55l0.08,-1.46l0.83,-1.52l1.6,-0.94l0.11,-0.11l1.56,-2.71l1.2,-0.99l2.24,-0.29l0.17,-0.08l1.95,-1.83l1.3,-0.77l2.09,-2.28l0.07,-0.26l-0.61,-3.34l0.92,-2.3l0.33,-1.44l1.52,-1.79l2.48,-1.27l1.86,-1.16l0.1,-0.11l1.67,-2.93l0.72,-1.59l1.54,0.01l1.43,1.14l0.21,0.06l2.33,-0.19l2.55,0.62l0.97,0.03l0.83,1.6l0.15,1.71l0.86,2.96l0.09,0.14l0.5,0.45l-0.31,0.73l-3.11,0.44l-0.16,0.07l-1.07,0.97l-1.36,0.23l-0.25,0.28l-0.1,1.85l-2.74,1.02l-0.14,0.11l-0.9,1.3l-1.93,0.69l-2.56,0.44l-4.04,2.01l-0.17,0.27l0.02,2.91l-0.08,0.0l-0.3,0.31l0.05,1.15l-1.25,0.07l-0.16,0.06l-0.73,0.55l-0.98,0.0l-0.85,-0.33l-0.15,-0.02l-2.11,0.29l-0.24,0.19l-0.76,1.95l-0.63,0.16l-0.21,0.19l-1.15,3.29l-3.42,2.81l-0.1,0.17l-0.81,3.57l-0.98,1.12l-0.3,0.85l-5.13,0.19Z", "name": "Morocco"}, "UZ": {"path": "M587.83,186.48l0.06,-1.46l-0.19,-0.29l-3.31,-1.24l-2.57,-1.4l-1.63,-1.38l-2.79,-1.98l-1.2,-2.98l-0.12,-0.14l-0.84,-0.54l-0.18,-0.05l-2.61,0.13l-0.76,-0.48l-0.25,-2.25l-0.17,-0.24l-3.37,-1.6l-0.32,0.04l-2.08,1.73l-2.11,1.02l-0.16,0.35l0.31,1.14l-2.14,0.03l-0.09,-10.68l6.1,-1.74l6.25,3.57l2.36,2.72l0.27,0.1l2.92,-0.44l4.17,-0.23l2.78,2.06l-0.18,2.87l0.29,0.32l0.98,0.02l0.46,2.22l0.28,0.24l3.0,0.09l0.61,1.25l0.28,0.17l0.93,-0.02l0.26,-0.16l1.06,-2.06l3.21,-2.03l1.3,-0.5l0.19,0.08l-1.75,1.62l0.05,0.48l1.85,1.12l0.27,0.02l1.65,-0.69l2.4,1.27l-2.69,1.79l-1.79,-0.27l-0.89,0.06l-0.22,-0.52l0.48,-1.26l-0.34,-0.4l-3.35,0.69l-0.22,0.18l-0.78,1.87l-1.07,1.47l-1.93,-0.13l-0.29,0.16l-0.65,1.29l0.16,0.42l1.69,0.64l0.48,1.91l-1.25,2.6l-1.64,-0.53l-1.18,-0.03Z", "name": "Uzbekistan"}, "MM": {"path": "M670.1,233.39l-1.46,1.11l-1.68,0.11l-0.26,0.19l-1.1,2.7l-0.95,0.42l-0.14,0.42l1.21,2.27l1.61,1.92l0.94,1.55l-0.82,1.99l-0.77,0.42l-0.13,0.39l0.64,1.35l1.62,1.97l0.26,1.32l-0.04,1.15l0.02,0.13l0.92,2.18l-1.3,2.23l-0.79,1.69l-0.1,-0.77l0.74,-1.87l-0.02,-0.26l-0.8,-1.42l0.2,-2.68l-0.06,-0.2l-0.98,-1.27l-0.8,-2.98l-0.45,-3.22l-1.11,-2.22l-0.45,-0.1l-1.64,1.28l-2.74,1.76l-1.26,-0.2l-1.27,-0.49l0.79,-2.93l0.0,-0.14l-0.52,-2.42l-1.93,-2.97l0.26,-0.8l-0.22,-0.39l-1.37,-0.31l-1.65,-1.98l-0.12,-1.5l0.41,0.19l0.42,-0.26l0.05,-1.7l1.08,-0.54l0.16,-0.34l-0.24,-1.0l0.5,-0.79l0.05,-0.15l0.08,-2.35l1.58,0.49l0.36,-0.15l1.12,-2.19l0.15,-1.34l1.35,-2.18l0.04,-0.17l-0.07,-1.35l2.97,-1.71l1.67,0.45l0.38,-0.33l-0.18,-1.46l0.7,-0.4l0.15,-0.32l-0.13,-0.72l0.94,-0.13l0.74,1.41l0.11,0.12l0.95,0.56l0.07,1.89l-0.09,2.08l-2.28,2.15l-0.09,0.19l-0.3,3.15l0.35,0.32l2.37,-0.39l0.53,2.17l0.2,0.21l1.3,0.42l-0.63,1.9l0.14,0.36l1.86,0.99l1.1,0.49l0.24,0.0l1.45,-0.6l0.04,0.51l-2.01,1.6l-0.56,0.96l-1.34,0.56Z", "name": "Myanmar"}, "ML": {"path": "M390.79,248.2l0.67,-0.37l0.14,-0.18l0.36,-1.31l0.51,-0.04l1.68,0.69l0.21,0.0l1.34,-0.48l0.89,0.16l0.3,-0.13l0.29,-0.44l9.89,-0.04l0.29,-0.21l0.56,-1.8l-0.11,-0.33l-0.33,-0.24l-2.37,-22.1l3.41,-0.04l8.37,5.73l8.38,5.68l0.56,1.15l0.14,0.14l1.56,0.75l0.99,0.36l0.03,1.45l0.33,0.29l2.45,-0.22l0.01,5.52l-1.3,1.64l-0.06,0.15l-0.18,1.37l-1.99,0.36l-3.4,0.22l-0.19,0.09l-0.85,0.83l-1.48,0.09l-1.49,0.01l-0.54,-0.43l-0.26,-0.05l-1.38,0.36l-2.39,1.08l-0.13,0.12l-0.44,0.73l-1.88,1.11l-0.11,0.12l-0.3,0.57l-0.86,0.42l-1.1,-0.31l-0.28,0.07l-0.69,0.62l-0.09,0.16l-0.35,1.66l-1.93,2.04l-0.08,0.23l0.05,0.76l-0.63,0.99l-0.04,0.19l0.14,1.23l-0.81,0.29l-0.32,0.17l-0.27,-0.75l-0.39,-0.18l-0.65,0.26l-0.36,-0.04l-0.29,0.14l-0.37,0.6l-1.69,-0.02l-0.63,-0.34l-0.32,0.02l-0.12,0.09l-0.47,-0.45l0.1,-0.6l-0.09,-0.27l-0.31,-0.3l-0.33,-0.05l-0.05,0.02l0.02,-0.21l0.46,-0.59l-0.02,-0.39l-0.99,-1.02l-0.34,-0.74l-0.56,-0.56l-0.17,-0.09l-0.5,-0.07l-0.19,0.04l-0.58,0.35l-0.79,0.33l-0.65,0.51l-0.85,-0.16l-0.63,-0.59l-0.14,-0.07l-0.41,-0.08l-0.2,0.03l-0.59,0.31l-0.07,0.0l-0.1,-0.63l0.11,-0.85l-0.21,-0.98l-0.11,-0.17l-0.86,-0.66l-0.45,-1.34l-0.1,-1.36Z", "name": "Mali"}, "MN": {"path": "M641.06,150.59l2.41,-0.53l4.76,-2.8l3.67,-1.49l2.06,0.96l0.12,0.03l2.5,0.05l1.59,1.45l0.19,0.08l2.47,0.12l3.59,0.81l0.27,-0.07l2.43,-2.28l0.06,-0.36l-0.93,-1.77l2.33,-3.1l2.66,1.3l2.26,0.39l2.75,0.8l0.44,2.3l0.19,0.22l3.56,1.38l0.18,0.01l2.35,-0.6l3.1,-0.42l2.4,0.41l2.37,1.52l1.49,1.63l0.23,0.1l2.29,-0.03l3.13,0.52l0.15,-0.01l2.28,-0.79l3.27,-0.53l0.11,-0.04l3.56,-2.23l1.31,0.31l1.26,1.05l0.22,0.07l2.45,-0.22l-0.98,1.96l-1.77,3.21l-0.01,0.28l0.64,1.31l0.35,0.16l1.35,-0.38l2.4,0.48l0.22,-0.04l1.78,-1.09l1.82,0.92l2.11,2.07l-0.17,0.68l-1.79,-0.31l-3.74,0.45l-1.85,0.96l-1.78,2.01l-3.74,1.18l-2.46,1.61l-2.45,-0.6l-1.42,-0.28l-0.31,0.13l-1.31,1.99l0.0,0.33l0.78,1.15l0.3,0.74l-1.58,0.93l-1.75,1.59l-2.83,1.03l-3.77,0.12l-4.05,1.05l-2.81,1.54l-0.95,-0.8l-0.19,-0.07l-2.96,0.0l-3.64,-1.8l-2.55,-0.48l-3.38,0.41l-5.13,-0.67l-2.66,0.06l-1.35,-1.65l-1.12,-2.78l-0.21,-0.18l-1.5,-0.33l-2.98,-1.89l-0.12,-0.04l-3.37,-0.43l-2.84,-0.51l-0.75,-1.13l0.93,-3.54l-0.04,-0.24l-1.73,-2.55l-0.15,-0.12l-3.52,-1.18l-1.99,-1.61l-0.54,-1.85Z", "name": "Mongolia"}, "MK": {"path": "M472.73,173.87l0.08,0.01l0.32,-0.25l0.08,-0.44l1.29,-0.41l1.37,-0.28l1.03,-0.04l1.06,0.82l0.14,1.59l-0.22,0.04l-0.17,0.11l-0.32,0.4l-1.2,-0.05l-0.18,0.05l-0.9,0.61l-1.45,0.23l-0.85,-0.59l-0.3,-1.09l0.22,-0.71Z", "name": "Macedonia"}, "MW": {"path": "M507.18,313.84l-0.67,1.85l-0.01,0.16l0.7,3.31l0.31,0.24l0.75,-0.03l0.78,0.71l0.99,1.75l0.2,3.03l-0.91,0.45l-0.14,0.15l-0.59,1.38l-1.24,-1.21l-0.17,-1.62l0.49,-1.12l0.02,-0.16l-0.15,-1.03l-0.13,-0.21l-0.99,-0.65l-0.26,-0.03l-0.53,0.18l-1.31,-1.12l-1.15,-0.59l0.66,-2.06l0.75,-0.84l0.07,-0.27l-0.47,-2.04l0.48,-1.94l0.4,-0.65l0.03,-0.24l-0.64,-2.15l-0.08,-0.13l-0.44,-0.42l1.34,0.26l1.25,1.73l0.67,3.3Z", "name": "Malawi"}, "MR": {"path": "M390.54,247.66l-1.48,-1.58l-1.51,-1.88l-0.12,-0.09l-1.64,-0.67l-1.17,-0.74l-0.17,-0.05l-1.4,0.03l-0.12,0.03l-1.14,0.52l-1.15,-0.21l-0.26,0.08l-0.44,0.43l-0.11,-0.72l0.68,-1.29l0.31,-2.43l-0.28,-2.63l-0.29,-1.27l0.24,-1.24l-0.03,-0.2l-0.65,-1.24l-1.19,-1.05l0.32,-0.51l9.64,0.02l0.3,-0.34l-0.46,-3.71l0.51,-1.12l2.17,-0.22l0.27,-0.3l-0.08,-6.5l7.91,0.13l0.31,-0.3l0.01,-3.5l8.17,5.63l-2.89,0.04l-0.29,0.33l2.42,22.56l0.12,0.21l0.26,0.19l-0.43,1.38l-9.83,0.04l-0.25,0.13l-0.27,0.41l-0.77,-0.14l-0.15,0.01l-1.3,0.47l-1.64,-0.67l-0.14,-0.02l-0.79,0.06l-0.27,0.22l-0.39,1.39l-0.53,0.29Z", "name": "Mauritania"}, "UG": {"path": "M500.74,287.17l-2.84,-0.02l-0.92,0.32l-1.37,0.71l-0.29,-0.12l0.02,-1.6l0.54,-0.89l0.04,-0.13l0.14,-1.96l0.49,-1.09l0.91,-1.24l0.97,-0.68l0.8,-0.89l-0.13,-0.49l-0.79,-0.27l0.13,-2.55l0.78,-0.52l1.45,0.51l0.18,0.01l1.97,-0.57l1.72,0.01l0.18,-0.06l1.29,-0.97l0.98,1.44l0.29,1.24l1.05,2.75l-0.84,1.68l-1.94,2.66l-0.06,0.18l0.02,2.36l-4.8,0.18Z", "name": "Uganda"}, "MY": {"path": "M717.6,273.52l-1.51,0.7l-2.13,-0.41l-2.88,-0.0l-0.29,0.21l-0.84,2.77l-0.9,0.82l-0.08,0.12l-1.23,3.34l-1.81,0.47l-2.29,-0.68l-0.14,-0.01l-1.2,0.22l-0.14,0.07l-1.36,1.18l-1.47,-0.17l-0.12,0.01l-1.46,0.46l-1.51,-1.25l-0.24,-0.97l1.26,0.59l0.2,0.02l1.93,-0.47l0.22,-0.22l0.47,-1.98l0.9,-0.4l2.97,-0.54l0.17,-0.09l1.8,-1.98l1.02,-1.32l0.9,1.03l0.48,-0.04l0.43,-0.7l1.02,0.07l0.32,-0.27l0.25,-2.72l1.84,-1.67l1.23,-1.89l0.73,-0.01l1.12,1.11l0.1,0.99l0.18,0.24l1.66,0.71l1.85,0.67l-0.09,0.51l-1.45,0.11l-0.26,0.4l0.35,0.97ZM673.78,269.53l0.17,1.14l0.35,0.25l1.65,-0.3l0.18,-0.11l0.68,-0.86l0.31,0.13l1.41,1.45l0.99,1.59l0.13,1.57l-0.26,1.09l0.0,0.15l0.24,0.84l0.18,1.46l0.11,0.2l0.82,0.64l0.92,2.08l-0.03,0.52l-1.4,0.13l-2.29,-1.79l-2.86,-1.92l-0.27,-1.16l-0.07,-0.13l-1.39,-1.61l-0.33,-1.99l-0.05,-0.12l-0.84,-1.27l0.26,-1.72l-0.03,-0.18l-0.45,-0.87l0.13,-0.13l1.71,0.92Z", "name": "Malaysia"}, "MX": {"path": "M133.41,213.83l0.61,0.09l0.27,-0.09l0.93,-1.01l0.08,-0.18l0.09,-1.22l-0.09,-0.23l-1.93,-1.94l-1.46,-0.77l-2.96,-5.62l-0.86,-2.1l2.44,-0.18l2.68,-0.25l-0.03,0.08l0.17,0.4l3.79,1.35l5.81,1.97l6.96,-0.02l0.3,-0.3l0.0,-0.84l3.91,0.0l0.87,0.93l1.27,0.87l1.44,1.17l0.79,1.37l0.62,1.49l0.12,0.14l1.35,0.85l2.08,0.82l0.35,-0.1l1.49,-2.04l1.81,-0.05l1.63,1.01l1.21,1.8l0.86,1.58l1.47,1.55l0.53,1.82l0.73,1.32l0.14,0.13l1.98,0.84l1.78,0.59l0.61,-0.03l-0.78,1.89l-0.45,1.96l-0.19,3.58l-0.24,1.27l0.01,0.14l0.43,1.43l0.78,1.31l0.49,1.98l0.06,0.12l1.63,1.9l0.61,1.51l0.98,1.28l0.16,0.11l2.58,0.67l0.98,1.02l0.31,0.08l2.17,-0.71l1.91,-0.26l1.87,-0.47l1.67,-0.49l1.59,-1.06l0.11,-0.14l0.6,-1.52l0.22,-2.21l0.35,-0.62l1.58,-0.64l2.59,-0.59l2.18,0.09l1.43,-0.2l0.39,0.36l-0.07,1.02l-1.28,1.48l-0.65,1.68l0.07,0.32l0.33,0.32l-0.79,2.49l-0.28,-0.3l-0.24,-0.09l-1.0,0.08l-0.24,0.15l-0.74,1.28l-0.19,-0.13l-0.28,-0.03l-0.3,0.12l-0.19,0.29l0.0,0.06l-4.34,-0.02l-0.3,0.3l-0.0,1.16l-0.83,0.0l-0.28,0.19l0.08,0.33l0.93,0.86l0.9,0.58l0.24,0.48l0.16,0.15l0.2,0.08l-0.03,0.38l-2.94,0.01l-0.26,0.15l-1.21,2.09l0.02,0.33l0.25,0.33l-0.21,0.44l-0.04,0.22l-2.42,-2.35l-1.36,-0.87l-2.04,-0.67l-0.13,-0.01l-1.4,0.19l-2.07,0.98l-1.14,0.23l-1.72,-0.66l-1.85,-0.48l-2.31,-1.16l-1.92,-0.38l-2.79,-1.18l-2.04,-1.2l-0.6,-0.66l-0.19,-0.1l-1.37,-0.15l-2.45,-0.78l-1.07,-1.18l-2.63,-1.44l-1.2,-1.56l-0.44,-0.93l0.5,-0.15l0.2,-0.39l-0.2,-0.58l0.46,-0.55l0.07,-0.19l0.01,-0.91l-0.06,-0.18l-0.81,-1.13l-0.25,-1.08l-0.86,-1.36l-2.21,-2.63l-2.53,-2.09l-1.2,-1.63l-0.11,-0.09l-2.08,-1.06l-0.34,-0.48l0.35,-1.53l-0.16,-0.34l-1.24,-0.61l-1.39,-1.23l-0.6,-1.81l-0.24,-0.2l-1.25,-0.2l-1.38,-1.35l-1.11,-1.25l-0.1,-0.76l-0.05,-0.13l-1.33,-2.04l-0.85,-2.02l0.04,-0.99l-0.14,-0.27l-1.81,-1.1l-0.2,-0.04l-0.74,0.11l-1.34,-0.72l-0.42,0.16l-0.4,1.12l-0.0,0.19l0.41,1.3l0.24,2.04l0.06,0.15l0.88,1.16l1.84,1.86l0.4,0.61l0.12,0.1l0.27,0.14l0.29,0.82l0.31,0.2l0.2,-0.02l0.43,1.51l0.09,0.14l0.72,0.65l0.51,0.91l1.58,1.4l0.8,2.42l0.77,1.23l0.66,1.19l0.13,1.34l0.28,0.27l1.08,0.08l0.92,1.1l0.83,1.08l-0.03,0.24l-0.88,0.81l-0.13,-0.0l-0.59,-1.42l-0.07,-0.11l-1.67,-1.53l-1.81,-1.28l-1.15,-0.61l0.07,-1.85l-0.38,-1.45l-0.12,-0.17l-2.91,-2.03l-0.39,0.04l-0.11,0.11l-0.42,-0.46l-0.11,-0.08l-1.49,-0.63l-1.09,-1.16Z", "name": "Mexico"}, "VU": {"path": "M839.92,325.66l0.78,0.73l-0.18,0.07l-0.6,-0.8ZM839.13,322.74l0.27,1.36l-0.13,-0.06l-0.21,-0.02l-0.29,0.08l-0.22,-0.43l-0.03,-1.32l0.61,0.4Z", "name": "Vanuatu"}, "FR": {"path": "M444.58,172.63l-0.68,1.92l-0.72,-0.38l-0.51,-1.79l0.43,-0.95l1.15,-0.83l0.33,2.04ZM429.71,147.03l1.77,1.57l0.26,0.07l1.16,-0.23l2.12,1.44l0.56,0.28l0.16,0.03l0.61,-0.06l1.09,0.78l0.13,0.05l3.18,0.53l-1.09,1.94l-0.3,2.16l-0.48,0.38l-1.0,-0.26l-0.37,0.32l0.07,0.66l-1.73,1.68l-0.09,0.21l-0.04,1.42l0.41,0.29l0.96,-0.4l0.67,1.07l-0.09,0.78l0.04,0.19l0.61,0.97l-0.71,0.78l-0.07,0.28l0.65,2.39l0.21,0.21l1.09,0.31l-0.2,0.95l-2.08,1.58l-4.81,-0.8l-0.13,0.01l-3.65,0.99l-0.22,0.24l-0.25,1.6l-2.59,0.35l-2.74,-1.33l-0.31,0.03l-0.79,0.57l-4.38,-1.31l-0.79,-0.94l1.16,-1.64l0.05,-0.15l0.48,-6.17l-0.06,-0.21l-2.58,-3.3l-1.89,-1.65l-0.11,-0.06l-3.64,-1.17l-0.2,-1.88l2.92,-0.63l4.14,0.82l0.35,-0.36l-0.65,-3.0l1.77,1.05l0.27,0.02l5.83,-2.54l0.17,-0.19l0.71,-2.54l1.75,-0.53l0.27,0.88l0.27,0.21l1.04,0.05l1.08,1.23ZM289.1,278.45l-0.85,0.84l-0.88,0.13l-0.25,-0.51l-0.21,-0.16l-0.56,-0.1l-0.25,0.07l-0.63,0.55l-0.62,-0.29l0.5,-0.88l0.21,-1.11l0.42,-1.05l-0.03,-0.28l-0.93,-1.42l-0.18,-1.54l1.13,-1.87l2.42,0.78l2.55,2.04l0.33,0.81l-1.4,2.16l-0.77,1.84Z", "name": "France"}, "FI": {"path": "M492.26,76.42l-0.38,3.12l0.12,0.28l3.6,2.69l-2.14,2.96l-0.01,0.33l2.83,4.61l-1.61,3.36l0.03,0.31l2.15,2.87l-0.96,2.44l0.1,0.35l3.51,2.55l-0.81,1.72l-2.28,2.19l-5.28,4.79l-4.51,0.31l-4.39,1.37l-3.87,0.75l-1.34,-1.89l-0.11,-0.09l-2.23,-1.14l0.53,-3.54l-0.01,-0.14l-1.17,-3.37l1.12,-2.13l2.23,-2.44l5.69,-4.33l1.65,-0.84l0.16,-0.31l-0.26,-1.73l-0.15,-0.22l-3.4,-1.91l-0.77,-1.47l-0.07,-6.45l-0.12,-0.24l-3.91,-2.94l-3.0,-1.92l0.97,-0.76l2.6,2.17l0.21,0.07l3.2,-0.21l2.63,1.03l0.3,-0.05l2.39,-1.94l0.09,-0.13l1.18,-3.12l3.63,-1.42l2.87,1.59l-0.98,2.87Z", "name": "Finland"}, "FJ": {"path": "M869.98,327.07l-1.31,0.44l-0.14,-0.41l0.96,-0.41l0.85,-0.17l1.43,-0.78l-0.16,0.65l-1.64,0.67ZM867.58,329.12l0.54,0.47l-0.31,1.0l-1.32,0.3l-1.13,-0.26l-0.17,-0.78l0.72,-0.66l0.98,0.27l0.25,-0.04l0.43,-0.29Z", "name": "Fiji"}, "FK": {"path": "M268.15,427.89l2.6,-1.73l1.98,0.77l0.31,-0.05l1.32,-1.17l1.58,1.18l-0.54,0.84l-3.1,0.92l-1.0,-1.04l-0.39,-0.04l-1.9,1.35l-0.86,-1.04Z", "name": "Falkland Islands"}, "NI": {"path": "M202.1,252.6l0.23,-0.0l0.12,-0.11l0.68,-0.09l0.22,-0.15l0.23,-0.43l0.2,-0.01l0.28,-0.31l-0.04,-0.97l0.29,-0.03l0.5,0.02l0.25,-0.11l0.37,-0.46l0.51,0.35l0.4,-0.06l0.23,-0.28l0.45,-0.29l0.87,-0.7l0.11,-0.21l0.02,-0.26l0.23,-0.12l0.25,-0.48l0.29,0.27l0.14,0.07l0.5,0.12l0.22,-0.03l0.48,-0.28l0.66,-0.02l0.87,-0.33l0.36,-0.32l0.21,0.01l-0.11,0.48l0.0,0.14l0.22,0.8l-0.54,0.85l-0.27,1.03l-0.09,1.18l0.14,0.72l0.05,0.95l-0.24,0.15l-0.13,0.19l-0.23,1.09l0.0,0.14l0.14,0.53l-0.42,0.53l-0.06,0.24l0.12,0.69l0.08,0.15l0.18,0.19l-0.26,0.23l-0.49,-0.11l-0.35,-0.44l-0.16,-0.1l-0.79,-0.21l-0.23,0.03l-0.45,0.26l-1.51,-0.62l-0.31,0.05l-0.17,0.15l-1.81,-1.62l-0.6,-0.9l-1.04,-0.79l-0.77,-0.71Z", "name": "Nicaragua"}, "NL": {"path": "M436.22,136.65l1.82,0.08l0.36,0.89l-0.6,2.96l-0.53,1.06l-1.32,0.0l-0.3,0.34l0.35,2.89l-0.83,-0.47l-1.56,-1.43l-0.29,-0.07l-2.26,0.67l-1.02,-0.15l0.68,-0.48l0.1,-0.12l2.14,-4.84l3.25,-1.35Z", "name": "Netherlands"}, "NO": {"path": "M491.45,67.31l7.06,3.0l-2.52,0.94l-0.11,0.49l2.43,2.49l-3.82,1.59l-1.48,0.3l0.89,-2.61l-0.14,-0.36l-3.21,-1.78l-0.25,-0.02l-3.89,1.52l-0.17,0.17l-1.2,3.17l-2.19,1.78l-2.53,-0.99l-0.13,-0.02l-3.15,0.21l-2.69,-2.25l-0.38,-0.01l-1.43,1.11l-1.47,0.17l-0.26,0.26l-0.33,2.57l-4.42,-0.65l-0.33,0.22l-0.6,2.19l-2.17,-0.01l-0.27,0.16l-4.15,7.68l-3.88,5.76l-0.0,0.33l0.81,1.23l-0.7,1.27l-2.3,-0.06l-0.28,0.18l-1.63,3.72l-0.02,0.13l0.15,5.17l0.07,0.18l1.51,1.84l-0.79,4.24l-2.04,2.5l-0.92,1.75l-1.39,-1.88l-0.44,-0.05l-4.89,4.21l-3.16,0.81l-3.24,-1.74l-0.86,-3.82l-0.78,-8.6l2.18,-2.36l6.56,-3.28l5.0,-4.16l4.63,-5.74l5.99,-8.09l4.17,-3.23l6.84,-5.49l5.39,-1.92l4.06,0.24l0.23,-0.09l3.72,-3.67l4.51,0.19l4.4,-0.89ZM484.58,19.95l4.42,1.82l-3.25,2.68l-7.14,0.65l-7.16,-0.91l-0.39,-1.37l-0.28,-0.22l-3.48,-0.1l-2.25,-2.15l7.09,-1.48l3.55,1.36l0.28,-0.03l2.42,-1.66l6.18,1.41ZM481.99,33.92l-4.73,1.85l-3.76,-1.06l1.27,-1.02l0.04,-0.43l-1.18,-1.35l4.46,-0.94l0.89,1.83l0.17,0.15l2.83,0.96ZM466.5,23.95l7.64,3.87l-5.63,1.94l-0.19,0.19l-1.35,3.88l-2.08,0.96l-0.16,0.19l-1.14,4.18l-2.71,0.18l-4.94,-2.95l1.95,-1.63l-0.08,-0.51l-3.7,-1.54l-4.79,-4.54l-1.78,-4.01l6.29,-1.88l1.25,1.81l0.25,0.13l3.57,-0.08l0.26,-0.17l0.87,-1.79l3.41,-0.18l3.08,1.94Z", "name": "Norway"}, "NA": {"path": "M461.88,357.98l-1.61,-1.77l-0.94,-1.9l-0.54,-2.58l-0.62,-1.95l-0.83,-4.05l-0.06,-3.13l-0.33,-1.5l-0.07,-0.14l-0.95,-1.06l-1.27,-2.12l-1.3,-3.1l-0.59,-1.71l-1.98,-2.46l-0.13,-1.67l0.99,-0.4l1.44,-0.42l1.48,0.07l1.42,1.11l0.31,0.03l0.32,-0.15l9.99,-0.11l1.66,1.18l0.16,0.06l6.06,0.37l4.69,-1.06l2.01,-0.57l1.5,0.14l0.63,0.37l-1.0,0.41l-0.7,0.01l-0.16,0.05l-1.38,0.88l-0.79,-0.88l-0.29,-0.09l-3.83,0.9l-1.84,0.08l-0.29,0.3l-0.07,8.99l-2.18,0.08l-0.29,0.3l-0.0,17.47l-2.04,1.27l-1.21,0.18l-1.51,-0.49l-0.99,-0.18l-0.36,-1.0l-0.1,-0.14l-0.99,-0.74l-0.4,0.04l-0.98,1.09Z", "name": "Namibia"}, "NC": {"path": "M835.87,338.68l2.06,1.63l1.01,0.94l-0.49,0.32l-1.21,-0.62l-1.76,-1.16l-1.58,-1.36l-1.61,-1.79l-0.16,-0.41l0.54,0.02l1.32,0.83l1.08,0.87l0.79,0.73Z", "name": "New Caledonia"}, "NE": {"path": "M426.67,254.17l0.03,-1.04l-0.24,-0.3l-2.66,-0.53l-0.06,-1.0l-0.07,-0.17l-1.37,-1.62l-0.3,-1.04l0.15,-0.94l1.37,-0.09l0.19,-0.09l0.85,-0.83l3.34,-0.22l2.22,-0.41l0.24,-0.26l0.2,-1.5l1.32,-1.65l0.07,-0.19l-0.01,-5.74l3.4,-1.13l7.24,-5.12l8.46,-4.95l3.76,1.08l1.35,1.39l0.36,0.05l1.39,-0.77l0.55,3.66l0.12,0.2l0.82,0.6l0.03,0.69l0.1,0.21l0.87,0.74l-0.47,0.99l-0.96,5.26l-0.13,3.25l-3.08,2.34l-0.1,0.15l-1.08,3.37l0.08,0.31l0.94,0.86l-0.01,1.51l0.29,0.3l1.25,0.05l-0.14,0.66l-0.51,0.11l-0.24,0.26l-0.06,0.57l-0.04,0.0l-1.59,-2.62l-0.21,-0.14l-0.59,-0.1l-0.23,0.05l-1.83,1.33l-1.79,-0.68l-1.42,-0.17l-0.17,0.03l-0.65,0.32l-1.39,-0.07l-0.19,0.06l-1.4,1.03l-1.12,0.05l-2.97,-1.29l-0.26,0.01l-1.12,0.59l-1.08,-0.04l-0.85,-0.88l-0.11,-0.07l-2.51,-0.95l-0.14,-0.02l-2.69,0.3l-0.16,0.07l-0.65,0.55l-0.1,0.16l-0.34,1.41l-0.69,0.98l-0.05,0.15l-0.13,1.72l-1.47,-1.13l-0.18,-0.06l-0.9,0.01l-0.2,0.08l-0.32,0.28Z", "name": "Niger"}, "NG": {"path": "M442.0,272.7l-2.4,0.83l-0.88,-0.12l-0.19,0.04l-0.89,0.52l-1.78,-0.05l-1.23,-1.44l-0.88,-1.87l-1.77,-1.66l-0.21,-0.08l-3.78,0.03l0.13,-3.75l-0.06,-1.58l0.44,-1.47l0.74,-0.75l1.21,-1.56l0.04,-0.29l-0.22,-0.56l0.44,-0.9l0.01,-0.24l-0.54,-1.44l0.26,-2.97l0.72,-1.06l0.33,-1.37l0.51,-0.43l2.53,-0.28l2.38,0.9l0.89,0.91l0.2,0.09l1.28,0.04l0.15,-0.03l1.06,-0.56l2.9,1.26l0.13,0.02l1.28,-0.06l0.16,-0.06l1.39,-1.02l1.36,0.07l0.15,-0.03l0.64,-0.32l1.22,0.13l1.9,0.73l0.28,-0.04l1.86,-1.35l0.33,0.06l1.62,2.67l0.29,0.14l0.32,-0.04l0.73,0.74l-0.19,0.37l-0.12,0.74l-2.03,1.89l-0.07,0.11l-0.66,1.62l-0.35,1.28l-0.48,0.51l-0.07,0.12l-0.48,1.67l-1.26,0.98l-0.1,0.15l-0.38,1.24l-0.58,1.07l-0.2,0.91l-1.43,0.7l-1.26,-0.93l-0.19,-0.06l-0.95,0.04l-0.2,0.09l-1.41,1.39l-0.61,0.02l-0.26,0.17l-1.19,2.42l-0.61,1.67Z", "name": "Nigeria"}, "NZ": {"path": "M857.9,379.62l1.85,3.1l0.33,0.14l0.22,-0.28l0.04,-1.41l0.57,0.4l0.35,2.06l0.17,0.22l2.02,0.94l1.78,0.26l0.22,-0.06l1.31,-1.01l0.84,0.22l-0.53,2.27l-0.67,1.5l-1.71,-0.05l-0.25,0.12l-0.67,0.89l-0.05,0.23l0.21,1.15l-0.31,0.46l-2.15,3.57l-1.6,0.99l-0.28,-0.51l-0.15,-0.13l-0.72,-0.3l1.27,-2.15l0.01,-0.29l-0.82,-1.63l-0.15,-0.14l-2.5,-1.09l0.05,-0.69l1.67,-0.94l0.15,-0.21l0.42,-2.24l-0.11,-1.95l-0.03,-0.12l-0.97,-1.85l0.05,-0.41l-0.09,-0.25l-1.18,-1.17l-1.94,-2.49l-0.86,-1.64l0.38,-0.09l1.24,1.43l0.12,0.08l1.81,0.68l0.67,2.39ZM853.93,393.55l0.57,1.24l0.44,0.12l1.51,-1.03l0.52,0.91l0.0,1.09l-0.88,1.31l-1.62,2.2l-1.26,1.2l-0.05,0.38l0.64,1.02l-1.4,0.03l-0.14,0.04l-2.14,1.16l-0.14,0.17l-0.67,2.0l-1.38,3.06l-3.07,2.19l-2.12,-0.06l-1.55,-0.99l-0.14,-0.05l-2.53,-0.2l-0.31,-0.84l1.25,-2.15l3.07,-2.97l1.62,-0.59l1.81,-1.17l2.18,-1.63l1.55,-1.65l1.08,-2.18l0.9,-0.72l0.11,-0.17l0.35,-1.56l1.37,-1.07l0.4,0.91Z", "name": "New Zealand"}, "NP": {"path": "M641.26,213.53l-0.14,0.95l0.32,1.64l-0.21,0.78l-1.83,0.04l-2.98,-0.62l-1.86,-0.25l-1.37,-1.3l-0.18,-0.08l-3.38,-0.34l-3.21,-1.49l-2.38,-1.34l-2.16,-0.92l0.84,-2.2l1.51,-1.18l0.89,-0.57l1.83,0.77l2.5,1.76l1.39,0.41l0.78,1.21l0.17,0.13l1.91,0.53l2.0,1.17l2.92,0.66l2.63,0.24Z", "name": "Nepal"}, "CI": {"path": "M413.53,272.08l-0.83,0.02l-1.79,-0.49l-1.64,0.03l-3.04,0.46l-1.73,0.72l-2.4,0.89l-0.12,-0.02l0.16,-1.7l0.19,-0.25l0.06,-0.2l-0.08,-0.99l-0.09,-0.19l-1.06,-1.05l-0.15,-0.08l-0.71,-0.15l-0.51,-0.48l0.45,-0.92l0.02,-0.19l-0.24,-1.16l0.07,-0.43l0.14,-0.0l0.3,-0.26l0.15,-1.1l-0.02,-0.15l-0.13,-0.34l0.09,-0.13l0.83,-0.27l0.19,-0.37l-0.62,-2.02l-0.55,-1.0l0.14,-0.59l0.35,-0.14l0.24,-0.16l0.53,0.29l0.14,0.04l1.93,0.02l0.26,-0.14l0.36,-0.58l0.39,0.01l0.43,-0.17l0.28,0.79l0.43,0.16l0.56,-0.31l0.89,-0.32l0.92,0.45l0.39,0.75l0.14,0.13l1.13,0.53l0.3,-0.03l0.81,-0.59l1.02,-0.08l1.49,0.57l0.62,3.33l-1.03,2.09l-0.65,2.84l0.02,0.2l1.05,2.08l-0.07,0.64Z", "name": "Ivory Coast"}, "CH": {"path": "M444.71,156.27l0.05,0.3l-0.34,0.69l0.13,0.4l1.13,0.58l1.07,0.1l-0.12,0.81l-0.87,0.42l-1.75,-0.37l-0.34,0.18l-0.47,1.1l-0.86,0.07l-0.33,-0.38l-0.41,-0.04l-1.34,1.01l-1.02,0.13l-0.93,-0.58l-0.82,-1.32l-0.37,-0.12l-0.77,0.32l0.02,-0.84l1.74,-1.69l0.09,-0.25l-0.04,-0.38l0.73,0.19l0.26,-0.06l0.6,-0.48l2.02,0.02l0.24,-0.12l0.38,-0.51l2.31,0.84Z", "name": "Switzerland"}, "CO": {"path": "M232.24,284.95l-0.94,-0.52l-1.22,-0.82l-0.31,-0.01l-0.62,0.35l-1.88,-0.31l-0.54,-0.95l-0.29,-0.15l-0.37,0.03l-2.34,-1.33l-0.15,-0.35l0.57,-0.11l0.24,-0.32l-0.1,-1.15l0.46,-0.71l1.11,-0.15l0.21,-0.13l1.05,-1.57l0.95,-1.31l-0.08,-0.43l-0.73,-0.47l0.4,-1.24l0.01,-0.16l-0.53,-2.15l0.44,-0.54l0.06,-0.24l-0.4,-2.13l-0.06,-0.13l-0.93,-1.22l0.21,-0.8l0.52,0.12l0.32,-0.13l0.47,-0.75l0.03,-0.27l-0.52,-1.32l0.09,-0.11l1.14,0.07l0.22,-0.08l1.82,-1.71l0.96,-0.25l0.22,-0.28l0.02,-0.81l0.43,-2.01l1.28,-1.04l1.48,-0.05l0.27,-0.19l0.12,-0.31l1.73,0.19l0.2,-0.05l1.96,-1.28l0.97,-0.56l1.16,-1.16l0.64,0.11l0.43,0.44l-0.31,0.55l-1.49,0.39l-0.19,0.16l-0.6,1.2l-0.97,0.74l-0.73,0.94l-0.06,0.13l-0.3,1.76l-0.68,1.44l0.23,0.43l1.1,0.14l0.27,0.97l0.08,0.13l0.49,0.49l0.17,0.85l-0.27,0.86l-0.01,0.14l0.09,0.53l0.2,0.23l0.52,0.18l0.54,0.79l0.27,0.13l3.18,-0.24l1.31,0.29l1.7,2.08l0.31,0.1l0.96,-0.26l1.75,0.13l1.41,-0.27l0.56,0.27l-0.36,1.07l-0.54,0.81l-0.05,0.13l-0.2,1.8l0.51,1.79l0.07,0.12l0.65,0.68l0.05,0.32l-1.16,1.14l0.05,0.47l0.86,0.52l0.6,0.79l0.31,1.01l-0.7,-0.81l-0.44,-0.01l-0.74,0.77l-4.75,-0.05l-0.3,0.31l0.03,1.57l0.25,0.29l1.2,0.21l-0.02,0.24l-0.1,-0.05l-0.22,-0.02l-1.41,0.41l-0.22,0.29l-0.01,1.82l0.11,0.23l1.04,0.85l0.35,1.3l-0.06,1.02l-1.02,6.26l-0.84,-0.89l-0.19,-0.09l-0.25,-0.02l1.35,-2.13l-0.1,-0.42l-1.92,-1.17l-0.2,-0.04l-1.41,0.2l-0.82,-0.39l-0.26,0.0l-1.29,0.62l-1.63,-0.27l-1.4,-2.5l-0.12,-0.12l-1.1,-0.61l-0.83,-1.2l-1.67,-1.19l-0.27,-0.04l-0.54,0.19Z", "name": "Colombia"}, "CN": {"path": "M740.32,148.94l0.22,0.21l4.3,1.03l2.84,2.2l0.99,2.92l0.28,0.2l3.8,0.0l0.15,-0.04l2.13,-1.24l3.5,-0.8l-1.05,2.29l-0.95,1.13l-0.06,0.12l-0.85,3.41l-1.56,2.81l-2.83,-0.51l-0.19,0.03l-2.15,1.09l-0.15,0.34l0.65,2.59l-0.33,3.3l-1.03,0.07l-0.28,0.3l0.01,0.75l-1.09,-1.2l-0.48,0.05l-0.94,1.6l-3.76,1.26l-0.2,0.36l0.29,1.19l-1.67,-0.08l-1.11,-0.88l-0.42,0.05l-1.69,2.08l-2.71,1.57l-2.04,1.88l-3.42,0.84l-0.11,0.05l-1.8,1.34l-1.54,0.46l0.52,-0.53l0.06,-0.33l-0.44,-0.96l1.84,-1.84l0.02,-0.41l-1.32,-1.56l-0.36,-0.08l-2.23,1.08l-2.83,2.06l-1.52,1.85l-2.32,0.13l-0.2,0.09l-1.28,1.37l-0.03,0.37l1.32,1.97l0.18,0.13l1.83,0.43l0.07,1.08l0.18,0.26l1.98,0.84l0.3,-0.03l2.66,-1.96l2.06,1.04l0.12,0.03l1.4,0.07l0.27,1.0l-3.24,0.73l-0.17,0.11l-1.13,1.5l-2.38,1.4l-0.1,0.1l-1.29,1.99l0.1,0.42l2.6,1.5l0.97,2.72l1.52,2.56l1.66,2.08l-0.03,1.76l-1.4,0.67l-0.15,0.38l0.6,1.47l0.13,0.15l1.29,0.75l-0.35,2.0l-0.58,1.96l-1.22,0.21l-0.2,0.14l-1.83,2.93l-2.02,3.51l-2.29,3.13l-3.4,2.42l-3.42,2.18l-2.75,0.3l-0.15,0.06l-1.32,1.01l-0.68,-0.67l-0.41,-0.01l-1.37,1.27l-3.42,1.28l-2.62,0.4l-0.24,0.21l-0.8,2.57l-0.95,0.11l-0.53,-1.54l0.52,-0.89l-0.19,-0.44l-3.36,-0.84l-0.17,0.01l-1.09,0.4l-2.36,-0.64l-1.0,-0.9l0.35,-1.34l-0.23,-0.37l-2.22,-0.47l-1.15,-0.94l-0.36,-0.02l-2.08,1.37l-2.35,0.29l-1.98,-0.01l-0.13,0.03l-1.32,0.63l-1.28,0.38l-0.21,0.33l0.33,2.65l-0.78,-0.04l-0.14,-0.39l-0.07,-1.04l-0.41,-0.26l-1.72,0.71l-0.96,-0.43l-1.63,-0.86l0.65,-1.95l-0.19,-0.38l-1.43,-0.46l-0.56,-2.27l-0.34,-0.22l-2.26,0.38l0.25,-2.65l2.29,-2.15l0.09,-0.2l0.1,-2.21l-0.07,-2.09l-0.15,-0.25l-1.02,-0.6l-0.8,-1.52l-0.31,-0.16l-1.42,0.2l-2.16,-0.32l0.55,-0.74l0.01,-0.35l-1.17,-1.7l-0.41,-0.08l-1.67,1.07l-1.97,-0.63l-0.25,0.03l-2.89,1.73l-2.26,1.99l-1.82,0.3l-1.0,-0.66l-0.15,-0.05l-1.28,-0.06l-1.75,-0.61l-0.24,0.02l-1.35,0.69l-0.1,0.08l-1.2,1.45l-0.14,-1.41l-0.4,-0.25l-1.46,0.55l-2.83,-0.26l-2.77,-0.61l-1.99,-1.17l-1.91,-0.54l-0.78,-1.21l-0.17,-0.13l-1.36,-0.38l-2.54,-1.79l-2.01,-0.84l-0.28,0.02l-0.89,0.56l-3.31,-1.83l-2.35,-1.67l-0.57,-2.49l1.34,0.28l0.36,-0.28l0.08,-1.42l-0.05,-0.19l-0.93,-1.34l0.24,-2.18l-0.07,-0.22l-2.69,-3.32l-0.15,-0.1l-3.97,-1.11l-0.69,-2.05l-0.11,-0.15l-1.79,-1.3l-0.39,-0.73l-0.36,-1.57l0.08,-1.09l-0.18,-0.3l-1.52,-0.66l-0.22,-0.01l-0.51,0.18l-0.52,-2.21l0.59,-0.55l0.06,-0.35l-0.22,-0.44l2.12,-1.24l1.63,-0.55l2.58,0.39l0.31,-0.16l0.87,-1.75l3.05,-0.34l0.21,-0.12l0.84,-1.12l3.87,-1.59l0.15,-0.14l0.35,-0.68l0.03,-0.17l-0.17,-1.51l1.52,-0.7l0.15,-0.39l-2.12,-5.0l4.62,-1.15l1.35,-0.72l0.14,-0.17l1.72,-5.37l4.7,0.99l0.28,-0.08l1.39,-1.43l0.08,-0.2l0.11,-2.95l1.83,-0.26l0.18,-0.1l1.85,-2.08l0.61,-0.17l0.57,1.97l0.1,0.15l2.2,1.75l3.48,1.17l1.59,2.36l-0.93,3.53l0.04,0.24l0.9,1.35l0.2,0.13l2.98,0.53l3.32,0.43l2.97,1.89l1.49,0.35l1.08,2.67l1.52,1.88l0.24,0.11l2.74,-0.07l5.15,0.67l3.36,-0.41l2.39,0.43l3.67,1.81l0.13,0.03l2.92,-0.0l1.02,0.86l0.34,0.03l2.88,-1.59l3.98,-1.03l3.81,-0.13l3.02,-1.12l1.77,-1.61l1.73,-1.01l0.13,-0.37l-0.41,-1.01l-0.72,-1.07l1.09,-1.66l1.21,0.24l2.57,0.63l0.24,-0.04l2.46,-1.62l3.78,-1.19l0.13,-0.09l1.8,-2.03l1.66,-0.84l3.54,-0.41l1.93,0.35l0.34,-0.22l0.27,-1.12l-0.08,-0.29l-2.27,-2.22l-2.08,-1.07l-0.29,0.01l-1.82,1.12l-2.36,-0.47l-0.14,0.01l-1.18,0.34l-0.46,-0.94l1.69,-3.08l1.1,-2.21l2.75,1.12l0.26,-0.02l3.53,-2.06l0.15,-0.26l-0.02,-1.35l2.18,-3.39l1.35,-1.04l0.12,-0.24l-0.03,-1.85l-0.15,-0.25l-1.0,-0.58l1.68,-1.37l3.01,-0.59l3.25,-0.09l3.67,0.99l2.08,1.18l1.51,3.3l0.95,1.45l0.85,1.99l0.92,3.19ZM697.0,237.37l-1.95,1.12l-1.74,-0.68l-0.06,-1.9l1.08,-1.03l2.62,-0.7l1.23,0.05l0.37,0.65l-1.01,1.08l-0.54,1.4Z", "name": "China"}, "CM": {"path": "M453.76,278.92l-0.26,-0.11l-0.18,-0.02l-1.42,0.31l-1.56,-0.33l-1.17,0.16l-3.7,-0.05l0.3,-1.63l-0.04,-0.21l-0.98,-1.66l-0.15,-0.13l-1.03,-0.38l-0.46,-1.01l-0.13,-0.14l-0.48,-0.27l0.02,-0.46l0.62,-1.72l1.1,-2.25l0.54,-0.02l0.2,-0.09l1.41,-1.39l0.73,-0.03l1.32,0.97l0.31,0.03l1.72,-0.85l0.16,-0.2l0.22,-1.0l0.57,-1.03l0.36,-1.18l1.26,-0.98l0.1,-0.15l0.49,-1.7l0.48,-0.51l0.07,-0.13l0.35,-1.3l0.63,-1.54l2.06,-1.92l0.09,-0.17l0.12,-0.79l0.24,-0.41l-0.04,-0.36l-0.89,-0.91l0.04,-0.45l0.28,-0.06l0.85,1.39l0.16,1.59l-0.09,1.66l0.04,0.17l1.09,1.84l-0.86,-0.02l-0.72,0.17l-1.07,-0.24l-0.34,0.17l-0.54,1.19l0.06,0.34l1.48,1.47l1.06,0.44l0.32,0.94l0.73,1.6l-0.32,0.57l-1.23,2.49l-0.54,0.41l-0.12,0.21l-0.19,1.95l0.24,1.08l-0.18,0.67l0.07,0.28l1.13,1.25l0.24,0.93l0.92,1.29l1.1,0.8l0.1,1.01l0.26,0.73l-0.12,0.93l-1.65,-0.49l-2.02,-0.66l-3.19,-0.11Z", "name": "Cameroon"}, "CL": {"path": "M246.8,429.1l-1.14,0.78l-2.25,1.21l-0.16,0.23l-0.37,2.94l-0.75,0.06l-2.72,-1.07l-2.83,-2.34l-3.06,-1.9l-0.71,-1.92l0.67,-1.84l-0.02,-0.25l-1.22,-2.13l-0.31,-5.41l1.02,-2.95l2.59,-2.4l-0.13,-0.51l-3.32,-0.8l2.06,-2.4l0.07,-0.15l0.79,-4.77l2.44,0.95l0.4,-0.22l1.31,-6.31l-0.16,-0.33l-1.68,-0.8l-0.42,0.21l-0.72,3.47l-1.01,-0.27l0.74,-4.06l0.85,-5.46l1.12,-1.96l0.03,-0.22l-0.71,-2.82l-0.19,-2.94l0.76,-0.07l0.26,-0.2l1.53,-4.62l1.73,-4.52l1.07,-4.2l-0.56,-4.2l0.73,-2.2l0.01,-0.12l-0.29,-3.3l1.46,-3.34l0.45,-5.19l0.8,-5.52l0.78,-5.89l-0.18,-4.33l-0.49,-3.47l1.1,-0.56l0.13,-0.13l0.44,-0.88l0.9,1.29l0.32,1.8l0.1,0.18l1.16,0.97l-0.73,2.33l0.01,0.21l1.33,2.91l0.97,3.6l0.35,0.22l1.57,-0.31l0.16,0.34l-0.79,2.51l-2.61,1.25l-0.17,0.28l0.08,4.36l-0.48,0.79l0.01,0.33l0.6,0.84l-1.62,1.55l-1.67,2.6l-0.89,2.47l-0.02,0.13l0.23,2.56l-1.5,2.76l-0.03,0.21l1.15,4.8l0.11,0.17l0.54,0.42l-0.01,2.37l-1.4,2.7l-0.03,0.15l0.06,2.25l-1.8,1.78l-0.09,0.21l0.02,2.73l0.71,2.63l-1.33,0.94l-0.12,0.17l-0.67,2.64l-0.59,3.03l0.4,3.55l-0.84,0.51l-0.14,0.31l0.58,3.5l0.08,0.16l0.96,0.99l-0.7,1.08l0.11,0.43l1.04,0.55l0.19,0.8l-0.89,0.48l-0.16,0.31l0.26,1.77l-0.89,4.06l-1.31,2.67l-0.03,0.19l0.28,1.53l-0.73,1.88l-1.85,1.37l-0.12,0.26l0.22,3.46l0.06,0.16l0.88,1.19l0.28,0.12l1.32,-0.17l-0.04,2.13l0.04,0.15l1.04,1.95l0.24,0.16l5.94,0.44ZM248.79,430.71l0.0,7.41l0.3,0.3l2.67,0.0l1.01,0.06l-0.54,0.91l-1.99,1.01l-1.13,-0.1l-1.42,-0.27l-1.87,-1.06l-2.57,-0.49l-3.09,-1.9l-2.52,-1.83l-2.65,-2.93l0.93,0.32l3.54,2.29l3.32,1.23l0.34,-0.09l1.29,-1.57l0.83,-2.32l2.11,-1.28l1.43,0.32Z", "name": "Chile"}, "CA": {"path": "M280.14,145.66l-1.66,2.88l0.06,0.37l0.37,0.03l1.5,-1.01l1.17,0.49l-0.64,0.83l0.13,0.46l2.22,0.89l0.28,-0.03l1.02,-0.7l2.09,0.83l-0.69,2.1l0.37,0.38l1.43,-0.45l0.27,1.43l0.74,1.88l-0.95,2.5l-0.88,0.09l-1.34,-0.48l0.49,-2.34l-0.14,-0.32l-0.7,-0.4l-0.36,0.04l-2.81,2.66l-0.63,-0.05l1.2,-1.01l-0.1,-0.52l-2.4,-0.77l-2.79,0.18l-4.65,-0.09l-0.22,-0.54l1.37,-0.99l0.01,-0.48l-0.82,-0.65l1.91,-1.79l2.57,-5.17l1.49,-1.81l2.04,-1.07l0.63,0.08l-0.27,0.51l-1.33,2.07ZM193.92,74.85l-0.01,4.24l0.19,0.28l0.33,-0.07l3.14,-3.22l2.65,2.5l-0.71,3.04l0.06,0.26l2.42,2.88l0.46,0.0l2.66,-3.14l1.83,-3.74l0.03,-0.12l0.13,-4.53l3.23,0.31l3.63,0.64l3.18,2.08l0.13,1.91l-1.79,2.22l-0.0,0.37l1.69,2.2l-0.28,1.8l-4.74,2.84l-3.33,0.62l-2.5,-1.21l-0.41,0.17l-0.73,2.05l-2.39,3.44l-0.74,1.78l-2.78,2.61l-3.48,0.26l-0.17,0.07l-1.98,1.68l-0.1,0.21l-0.15,2.33l-2.68,0.45l-0.17,0.09l-3.1,3.2l-2.75,4.38l-0.99,3.06l-0.14,4.31l0.25,0.31l3.5,0.58l1.07,3.24l1.18,2.76l0.34,0.18l3.43,-0.69l4.55,1.52l2.45,1.32l1.76,1.65l0.12,0.07l3.11,0.96l2.63,1.46l0.13,0.04l4.12,0.2l2.41,0.3l-0.36,2.81l0.8,3.51l1.81,3.78l0.08,0.1l3.73,3.17l0.34,0.03l1.93,-1.08l0.13,-0.15l1.35,-3.44l0.01,-0.18l-1.31,-5.38l-0.08,-0.14l-1.46,-1.5l3.68,-1.51l2.84,-2.46l1.45,-2.55l0.04,-0.17l-0.2,-2.39l-0.04,-0.12l-1.7,-3.07l-2.9,-2.64l2.79,-3.66l0.05,-0.27l-1.08,-3.38l-0.8,-5.75l1.45,-0.75l4.18,1.03l2.6,0.38l0.18,-0.03l1.93,-0.95l2.18,1.23l3.01,2.18l0.73,1.42l0.25,0.16l4.18,0.27l-0.06,2.95l0.83,4.7l0.22,0.24l2.19,0.55l1.75,2.08l0.38,0.07l3.63,-2.03l0.11,-0.11l2.38,-4.06l1.36,-1.43l1.76,3.01l3.26,4.68l2.68,4.19l-0.94,2.09l0.12,0.38l3.31,1.98l2.23,1.98l0.13,0.07l3.94,0.89l1.48,1.02l0.96,2.82l0.22,0.2l1.85,0.43l0.88,1.13l0.17,3.53l-1.68,1.16l-1.76,1.14l-4.08,1.17l-0.11,0.06l-3.08,2.65l-4.11,0.52l-5.35,-0.69l-3.76,-0.02l-2.62,0.23l-0.2,0.1l-2.05,2.29l-3.13,1.41l-0.11,0.08l-3.6,4.24l-2.87,2.92l-0.05,0.36l0.33,0.14l2.13,-0.52l0.15,-0.08l3.98,-4.15l5.16,-2.63l3.58,-0.31l1.82,1.3l-2.09,1.91l-0.09,0.29l0.8,3.46l0.82,2.37l0.15,0.17l3.25,1.56l0.16,0.03l4.14,-0.45l0.21,-0.12l2.03,-2.86l0.11,1.46l0.13,0.22l1.26,0.88l-2.7,1.78l-5.51,1.83l-2.52,1.26l-2.75,2.16l-1.52,-0.18l-0.08,-2.16l4.19,-2.47l0.14,-0.34l-0.3,-0.22l-4.01,0.1l-2.66,0.36l-1.45,-1.56l0.0,-4.16l-0.11,-0.23l-1.11,-0.91l-0.28,-0.05l-1.5,0.48l-0.7,-0.7l-0.45,0.02l-1.91,2.39l-0.8,2.5l-0.82,1.31l-0.95,0.43l-0.77,0.15l-0.23,0.2l-0.18,0.56l-8.2,0.02l-0.13,0.03l-1.19,0.61l-2.95,2.45l-0.78,1.13l-4.6,0.01l-0.12,0.02l-1.13,0.48l-0.13,0.44l0.37,0.55l0.2,0.82l-0.01,0.09l-3.1,1.42l-2.63,0.5l-2.84,1.57l-0.47,0.0l-0.72,-0.4l-0.18,-0.27l0.03,-0.15l0.52,-1.0l1.2,-1.71l0.73,-1.8l0.02,-0.17l-1.03,-5.47l-0.15,-0.21l-2.35,-1.32l0.16,-0.29l-0.05,-0.35l-0.37,-0.38l-0.22,-0.09l-0.56,0.0l-0.35,-0.34l-0.11,-0.65l-0.46,-0.2l-0.39,0.26l-0.2,-0.03l-0.11,-0.33l-0.48,-0.25l-0.21,-0.71l-0.15,-0.18l-3.97,-2.07l-4.8,-2.39l-0.25,-0.01l-2.19,0.89l-0.72,0.03l-3.04,-0.82l-0.14,-0.0l-1.94,0.4l-2.4,-0.98l-2.56,-0.51l-1.7,-0.19l-0.62,-0.44l-0.42,-1.67l-0.3,-0.23l-0.85,0.02l-0.29,0.3l-0.01,0.95l-69.26,-0.01l-4.77,-3.14l-1.78,-1.41l-4.51,-1.38l-1.3,-2.73l0.34,-1.96l-0.17,-0.33l-3.06,-1.37l-0.41,-2.58l-0.11,-0.18l-2.92,-2.4l-0.05,-1.53l1.32,-1.59l0.07,-0.2l-0.07,-2.21l-0.16,-0.26l-4.19,-2.22l-2.52,-4.02l-1.56,-2.6l-0.08,-0.09l-2.28,-1.64l-1.65,-1.48l-1.31,-1.89l-0.38,-0.1l-2.51,1.21l-2.28,1.92l-2.03,-2.22l-1.85,-1.71l-2.44,-1.04l-2.28,-0.12l0.03,-37.72l4.27,0.98l4.0,2.13l2.61,0.4l0.24,-0.07l2.17,-1.81l2.92,-1.33l3.63,0.53l0.18,-0.03l3.72,-1.94l3.89,-1.06l1.6,1.72l0.37,0.06l1.87,-1.04l0.14,-0.19l0.48,-1.83l1.37,0.38l4.18,3.96l0.41,0.0l2.89,-2.62l0.28,2.79l0.37,0.26l3.08,-0.73l0.17,-0.12l0.85,-1.16l2.81,0.24l3.83,1.86l5.86,1.61l3.46,0.75l2.44,-0.26l2.89,1.89l-3.12,1.89l-0.14,0.31l0.24,0.24l4.53,0.92l6.84,-0.5l2.04,-0.71l2.54,2.44l0.39,0.02l2.72,-2.16l-0.01,-0.48l-2.26,-1.61l1.27,-1.16l2.94,-0.19l1.94,-0.42l1.89,0.97l2.49,2.32l0.24,0.08l2.71,-0.33l4.35,1.9l0.17,0.02l3.86,-0.67l3.62,0.1l0.31,-0.33l-0.26,-2.44l1.9,-0.65l3.58,1.36l-0.01,3.84l0.23,0.29l0.34,-0.17l1.51,-3.23l1.81,0.1l0.31,-0.22l1.13,-4.37l-0.08,-0.29l-2.68,-2.73l-2.83,-1.76l0.19,-4.73l2.77,-3.15l3.06,0.69l2.44,1.97l3.24,4.88l-2.05,2.02l0.15,0.51l4.41,0.85ZM265.85,150.7l-0.84,0.04l-3.15,-0.99l-1.77,-1.17l0.19,-0.06l3.17,0.79l2.39,1.27l0.01,0.12ZM249.41,3.71l6.68,0.49l5.34,0.79l4.34,1.6l-0.08,1.24l-5.91,2.56l-6.03,1.21l-2.36,1.38l-0.14,0.34l0.29,0.22l4.37,-0.02l-4.96,3.01l-4.06,1.64l-0.11,0.08l-4.21,4.62l-5.07,0.92l-0.12,0.05l-1.53,1.1l-7.5,0.59l-0.28,0.28l0.24,0.31l2.67,0.54l-1.04,0.6l-0.09,0.44l1.89,2.49l-2.11,1.66l-3.83,1.52l-0.15,0.13l-1.14,2.01l-3.41,1.55l-0.16,0.36l0.35,1.19l0.3,0.22l3.98,-0.19l0.03,0.78l-6.42,2.99l-6.44,-1.41l-7.41,0.79l-3.72,-0.62l-4.48,-0.26l-0.25,-2.0l4.37,-1.13l0.21,-0.38l-1.14,-3.55l1.13,-0.28l6.61,2.29l0.35,-0.12l-0.04,-0.37l-3.41,-3.45l-0.14,-0.08l-3.57,-0.92l1.62,-1.7l4.36,-1.3l0.2,-0.18l0.71,-1.94l-0.12,-0.36l-3.45,-2.15l-0.88,-2.43l6.36,0.23l1.94,0.61l0.23,-0.02l3.91,-2.1l0.15,-0.32l-0.26,-0.24l-5.69,-0.67l-8.69,0.37l-4.3,-1.92l-2.12,-2.39l-2.82,-1.68l-0.44,-1.65l3.41,-1.06l2.93,-0.2l4.91,-0.99l3.69,-2.28l2.93,0.31l2.64,1.68l0.42,-0.1l1.84,-3.23l3.17,-0.96l4.45,-0.69l7.56,-0.26l1.26,0.64l0.18,0.03l7.2,-1.06l10.81,0.8ZM203.94,57.59l0.01,0.32l1.97,2.97l0.51,-0.01l2.26,-3.75l6.05,-1.89l4.08,4.72l-0.36,2.95l0.38,0.33l4.95,-1.36l0.11,-0.05l2.23,-1.77l5.37,2.31l3.32,2.14l0.3,1.89l0.36,0.25l4.48,-1.01l2.49,2.8l0.14,0.09l5.99,1.78l2.09,1.74l2.18,3.83l-4.29,1.91l-0.01,0.54l5.9,2.83l3.95,0.94l3.54,3.84l0.2,0.1l3.58,0.25l-0.67,2.51l-4.18,4.54l-2.84,-1.61l-3.91,-3.95l-0.26,-0.09l-3.24,0.52l-0.25,0.26l-0.32,2.37l0.1,0.26l2.63,2.38l3.42,1.89l0.96,1.0l1.57,3.8l-0.74,2.43l-2.85,-0.96l-6.26,-3.15l-0.38,0.09l0.04,0.39l3.54,3.4l2.55,2.31l0.23,0.78l-6.26,-1.43l-5.33,-2.25l-2.73,-1.73l0.67,-0.86l-0.09,-0.45l-7.38,-4.01l-0.44,0.27l0.03,0.89l-6.85,0.61l-1.8,-1.17l1.43,-2.6l4.56,-0.07l5.15,-0.52l0.23,-0.45l-0.76,-1.34l0.8,-1.89l3.21,-4.06l0.05,-0.29l-0.72,-1.95l-0.97,-1.47l-0.11,-0.1l-3.84,-2.1l-4.53,-1.33l1.09,-0.75l0.05,-0.45l-2.65,-2.75l-0.18,-0.09l-2.12,-0.24l-1.91,-1.47l-0.39,0.02l-1.27,1.25l-4.4,0.56l-9.06,-0.99l-5.28,-1.31l-4.01,-0.67l-1.72,-1.31l2.32,-1.85l0.1,-0.33l-0.28,-0.2l-3.3,-0.02l-0.74,-4.36l1.86,-4.09l2.46,-1.88l5.74,-1.15l-1.5,2.55ZM261.28,159.28l0.19,0.14l1.82,0.42l1.66,-0.05l-0.66,0.68l-0.75,0.16l-3.0,-1.25l-0.46,-0.77l0.51,-0.52l0.68,1.19ZM230.87,84.48l-2.48,0.19l-0.52,-1.74l0.96,-2.17l2.03,-0.53l1.71,1.04l0.02,1.6l-0.22,0.46l-1.5,1.16ZM229.52,58.19l0.14,0.82l-4.99,-0.22l-2.73,0.63l-0.59,-0.23l-2.61,-2.4l0.08,-1.38l0.94,-0.25l5.61,0.51l4.14,2.54ZM222.12,105.0l-0.79,1.63l-0.75,-0.22l-0.52,-0.91l0.04,-0.09l0.84,-1.01l0.74,0.06l0.44,0.55ZM183.77,38.22l2.72,1.65l0.16,0.04l4.83,-0.01l1.92,1.52l-0.51,1.75l0.18,0.36l2.84,1.14l1.56,1.19l0.16,0.06l3.37,0.22l3.65,0.42l4.07,-1.1l5.05,-0.43l3.96,0.35l2.53,1.8l0.48,1.79l-1.37,1.16l-3.6,1.03l-3.22,-0.59l-7.17,0.76l-5.1,0.09l-4.0,-0.6l-6.48,-1.56l-0.81,-2.57l-0.3,-2.49l-0.1,-0.19l-2.51,-2.25l-0.16,-0.07l-5.12,-0.63l-2.61,-1.45l0.75,-1.71l4.88,0.32ZM207.46,91.26l0.42,1.62l0.42,0.19l1.12,-0.55l1.35,0.99l2.74,1.39l2.73,1.2l0.2,1.74l0.35,0.26l1.72,-0.29l1.31,0.97l-1.72,0.96l-3.68,-0.9l-1.34,-1.71l-0.43,-0.04l-2.46,2.1l-3.23,1.85l-0.74,-1.98l-0.31,-0.19l-2.47,0.28l1.49,-1.34l0.1,-0.19l0.32,-3.15l0.79,-3.45l1.34,0.25ZM215.59,102.66l-2.73,2.0l-1.49,-0.08l-0.37,-0.7l1.61,-1.56l3.0,0.03l-0.02,0.3ZM202.79,24.07l0.11,0.12l2.54,1.53l-3.01,1.47l-4.55,4.07l-4.3,0.38l-5.07,-0.68l-2.51,-2.09l0.03,-1.72l1.86,-1.4l0.1,-0.34l-0.29,-0.2l-4.49,0.04l-2.63,-1.79l-1.45,-2.36l1.61,-2.38l1.65,-1.69l2.47,-0.4l0.19,-0.48l-0.72,-0.89l5.1,-0.26l3.1,3.05l0.13,0.07l4.21,1.25l3.99,1.06l1.92,3.65ZM187.5,59.3l-0.15,0.1l-2.59,3.4l-2.5,-0.15l-1.47,-3.92l0.04,-2.24l1.22,-1.92l2.34,-1.26l5.11,0.17l4.28,1.06l-3.36,3.86l-2.9,0.9ZM186.19,48.8l-1.15,1.63l-3.42,-0.35l-2.68,-1.15l1.11,-1.88l3.34,-1.27l2.01,1.63l0.79,1.38ZM185.78,35.41l-0.95,0.13l-4.48,-0.33l-0.4,-0.91l4.5,0.07l1.45,0.82l-0.1,0.21ZM180.76,32.56l-3.43,1.03l-1.85,-1.14l-1.01,-1.92l-0.16,-1.87l2.87,0.2l1.39,0.35l2.75,1.75l-0.55,1.6ZM181.03,76.32l-1.21,1.2l-3.19,-1.26l-0.18,-0.01l-1.92,0.45l-2.88,-1.67l1.84,-1.16l1.6,-1.77l2.45,1.17l1.45,0.77l2.05,2.28ZM169.72,54.76l2.83,0.97l0.14,0.01l4.25,-0.58l0.47,1.01l-2.19,2.16l0.07,0.48l3.61,1.95l-0.41,3.84l-3.87,1.68l-2.23,-0.36l-1.73,-1.75l-6.07,-3.53l0.03,-1.01l4.79,0.55l0.3,-0.16l-0.04,-0.34l-2.55,-2.89l2.59,-2.05ZM174.44,40.56l1.49,1.87l0.07,2.48l-1.07,3.52l-3.87,0.48l-2.41,-0.72l0.05,-2.72l-0.33,-0.3l-3.79,0.36l-0.13,-3.31l2.36,0.14l0.15,-0.03l3.7,-1.74l3.44,0.29l0.31,-0.22l0.03,-0.12ZM170.14,31.5l0.75,1.74l-3.52,-0.52l-4.19,-1.77l-4.65,-0.17l1.65,-1.11l-0.05,-0.52l-2.86,-1.26l-0.13,-1.58l4.52,0.7l6.66,1.99l1.84,2.5ZM134.64,58.08l-1.08,1.93l0.34,0.44l5.44,-1.41l3.37,2.32l0.37,-0.02l2.66,-2.28l2.03,1.38l2.01,4.53l0.53,0.04l1.26,-1.93l0.03,-0.27l-1.67,-4.55l1.82,-0.58l2.36,0.73l2.69,1.84l1.53,4.46l0.77,3.24l0.15,0.19l4.22,2.26l4.32,2.04l-0.21,1.51l-3.87,0.34l-0.19,0.5l1.45,1.54l-0.65,1.23l-4.3,-0.65l-4.4,-1.19l-2.97,0.28l-4.67,1.48l-6.31,0.65l-4.27,0.39l-1.26,-1.91l-0.15,-0.12l-3.42,-1.2l-0.16,-0.01l-2.05,0.45l-2.66,-3.02l1.2,-0.34l3.82,-0.76l3.58,0.19l3.27,-0.78l0.23,-0.29l-0.24,-0.29l-4.84,-1.06l-5.42,0.35l-3.4,-0.09l-0.97,-1.22l5.39,-1.7l0.21,-0.33l-0.3,-0.25l-3.82,0.06l-3.95,-1.1l1.88,-3.13l1.68,-1.81l6.54,-2.84l2.11,0.77ZM158.85,56.58l-1.82,2.62l-3.38,-2.9l0.49,-0.39l3.17,-0.18l1.54,0.86ZM149.71,42.7l1.0,1.87l0.37,0.14l2.17,-0.83l2.33,0.2l0.38,2.16l-1.38,2.17l-8.33,0.76l-6.34,2.15l-3.51,0.1l-0.22,-1.13l4.98,-2.12l0.17,-0.34l-0.31,-0.23l-11.27,0.6l-3.04,-0.78l3.14,-4.57l2.2,-1.35l6.87,1.7l4.4,3.0l0.14,0.05l4.37,0.39l0.27,-0.48l-3.41,-4.68l1.96,-1.62l2.28,0.53l0.79,2.32ZM145.44,29.83l-2.18,0.77l-3.79,-0.0l0.02,-0.31l2.34,-1.5l1.2,0.23l2.42,0.83ZM144.83,34.5l-4.44,1.46l-3.18,-1.48l1.6,-1.36l3.51,-0.53l3.1,0.75l-0.6,1.16ZM119.02,65.87l-6.17,2.07l-1.19,-1.82l-0.13,-0.11l-5.48,-2.32l0.92,-1.7l1.73,-3.44l2.16,-3.15l-0.02,-0.36l-2.09,-2.56l7.84,-0.71l3.59,1.02l6.32,0.27l2.35,1.37l2.25,1.71l-2.68,1.04l-6.21,3.41l-3.1,3.28l-0.08,0.21l0.0,1.81ZM129.66,35.4l-0.3,3.55l-1.77,1.67l-2.34,0.27l-4.62,2.2l-3.89,0.76l-2.83,-0.93l3.85,-3.52l5.04,-3.36l3.75,0.07l3.11,-0.7ZM111.24,152.74l-0.82,0.29l-3.92,-1.39l-0.7,-1.06l-0.12,-0.1l-2.15,-1.09l-0.41,-0.84l-0.2,-0.16l-2.44,-0.56l-0.84,-1.56l0.1,-0.36l2.34,0.64l1.53,0.5l2.28,0.34l0.78,1.04l1.24,1.55l0.09,0.08l2.42,1.3l0.81,1.39ZM88.54,134.82l0.14,0.02l2.0,-0.23l-0.67,3.48l0.06,0.24l1.78,2.22l-0.24,-0.0l-1.4,-1.42l-0.91,-1.53l-1.26,-1.08l-0.42,-1.35l0.09,-0.66l0.82,0.31Z", "name": "Canada"}, "CG": {"path": "M453.66,296.61l-0.9,-0.82l-0.35,-0.04l-0.83,0.48l-0.77,0.83l-1.65,-2.13l1.66,-1.2l0.08,-0.39l-0.81,-1.43l0.59,-0.43l1.62,-0.29l0.24,-0.24l0.1,-0.58l0.94,0.84l0.19,0.08l2.21,0.11l0.27,-0.14l0.81,-1.29l0.32,-1.76l-0.27,-1.96l-0.06,-0.15l-1.08,-1.35l1.02,-2.74l-0.09,-0.34l-0.62,-0.5l-0.22,-0.06l-1.66,0.18l-0.55,-1.03l0.12,-0.73l2.85,0.09l1.98,0.65l2.0,0.59l0.38,-0.25l0.17,-1.3l1.26,-2.24l1.34,-1.19l1.54,0.38l1.35,0.12l-0.11,1.15l-0.74,1.34l-0.5,1.61l-0.31,2.22l0.12,1.41l-0.4,0.9l-0.06,0.88l-0.24,0.67l-1.57,1.15l-1.24,1.41l-1.09,2.43l-0.03,0.13l0.08,1.95l-0.55,0.69l-1.46,1.23l-1.32,1.41l-0.61,-0.29l-0.13,-0.57l-0.29,-0.23l-1.36,-0.02l-0.23,0.1l-0.72,0.81l-0.41,-0.16Z", "name": "Republic of the Congo"}, "CF": {"path": "M459.41,266.56l1.9,-0.17l0.22,-0.12l0.36,-0.5l0.14,0.02l0.55,0.51l0.29,0.07l3.15,-0.96l0.12,-0.07l1.05,-0.97l1.29,-0.87l0.12,-0.33l-0.17,-0.61l0.38,-0.12l2.36,0.15l0.15,-0.03l2.36,-1.17l0.12,-0.1l1.78,-2.72l1.18,-0.96l1.23,-0.34l0.21,0.79l0.07,0.13l1.37,1.5l0.01,0.86l-0.39,1.0l-0.01,0.17l0.16,0.78l0.1,0.17l0.91,0.76l1.89,1.09l1.24,0.92l0.02,0.67l0.12,0.23l1.67,1.3l0.99,1.03l0.61,1.46l0.14,0.15l1.79,0.95l0.2,0.4l-0.44,0.14l-1.54,-0.06l-1.98,-0.26l-0.93,0.22l-0.19,0.14l-0.3,0.48l-0.57,0.05l-0.91,-0.49l-0.26,-0.01l-2.7,1.21l-1.04,-0.23l-0.21,0.03l-0.34,0.19l-0.12,0.13l-0.64,1.3l-1.67,-0.43l-1.77,-0.24l-1.58,-0.91l-2.06,-0.85l-0.27,0.02l-1.42,0.88l-0.97,1.27l-0.06,0.14l-0.19,1.46l-1.3,-0.11l-1.67,-0.42l-0.27,0.07l-1.55,1.41l-0.99,1.76l-0.14,-1.18l-0.13,-0.22l-1.1,-0.78l-0.86,-1.2l-0.2,-0.84l-0.07,-0.13l-1.07,-1.19l0.16,-0.59l0.0,-0.15l-0.24,-1.01l0.18,-1.77l0.5,-0.38l0.09,-0.11l1.18,-2.4Z", "name": "Central African Republic"}, "CD": {"path": "M497.85,276.25l-0.14,2.77l0.2,0.3l0.57,0.19l-0.47,0.52l-1.0,0.71l-0.96,1.31l-0.56,1.22l-0.16,2.04l-0.54,0.89l-0.04,0.15l-0.02,1.76l-0.63,0.61l-0.09,0.2l-0.08,1.33l-0.2,0.11l-0.15,0.21l-0.23,1.37l0.03,0.2l0.6,1.08l0.16,2.96l0.44,2.29l-0.24,1.25l0.01,0.15l0.5,1.46l0.07,0.12l1.41,1.37l1.09,2.56l-0.51,-0.11l-3.45,0.45l-0.67,0.3l-0.15,0.15l-0.71,1.61l0.01,0.26l0.52,1.03l-0.43,2.9l-0.31,2.55l0.13,0.29l0.7,0.46l1.75,0.99l0.31,-0.01l0.26,-0.17l0.15,1.9l-1.44,-0.02l-0.94,-1.28l-0.94,-1.1l-0.17,-0.1l-1.76,-0.33l-0.5,-1.18l-0.42,-0.15l-1.44,0.75l-1.79,-0.32l-0.77,-1.05l-0.2,-0.12l-1.59,-0.23l-0.97,0.04l-0.1,-0.53l-0.27,-0.25l-0.86,-0.06l-1.13,-0.15l-1.62,0.37l-1.04,-0.06l-0.32,0.09l0.11,-2.56l-0.08,-0.21l-0.77,-0.87l-0.17,-1.41l0.36,-1.47l-0.03,-0.21l-0.48,-0.91l-0.04,-1.52l-0.3,-0.29l-2.65,0.02l0.13,-0.53l-0.29,-0.37l-1.28,0.01l-0.28,0.21l-0.07,0.24l-1.35,0.09l-0.26,0.18l-0.62,1.45l-0.25,0.42l-1.17,-0.3l-0.19,0.01l-0.79,0.34l-1.44,0.18l-1.41,-1.96l-0.7,-1.47l-0.61,-1.86l-0.28,-0.21l-7.39,-0.03l-0.92,0.3l-0.78,-0.03l-0.78,0.25l-0.11,-0.25l0.35,-0.15l0.18,-0.26l0.07,-1.02l0.33,-0.52l0.72,-0.42l0.52,0.2l0.33,-0.08l0.76,-0.86l0.99,0.02l0.11,0.48l0.16,0.2l0.94,0.44l0.35,-0.07l1.46,-1.56l1.44,-1.21l0.68,-0.85l0.06,-0.2l-0.08,-1.99l1.04,-2.33l1.1,-1.23l1.62,-1.19l0.11,-0.14l0.29,-0.8l0.08,-0.94l0.38,-0.82l0.03,-0.16l-0.13,-1.38l0.3,-2.16l0.47,-1.51l0.73,-1.31l0.04,-0.12l0.15,-1.51l0.21,-1.66l0.89,-1.16l1.16,-0.7l1.9,0.79l1.69,0.95l1.81,0.24l1.85,0.48l0.35,-0.16l0.71,-1.43l0.16,-0.09l1.03,0.23l0.19,-0.02l2.65,-1.19l0.86,0.46l0.17,0.03l0.81,-0.08l0.23,-0.14l0.31,-0.5l0.75,-0.17l1.83,0.26l1.64,0.06l0.72,-0.21l1.39,1.9l0.16,0.11l1.12,0.3l0.24,-0.04l0.58,-0.36l1.05,0.15l0.15,-0.02l1.15,-0.44l0.47,0.84l0.08,0.09l2.08,1.57Z", "name": "Democratic Republic of the Congo"}, "CZ": {"path": "M463.29,152.22l-0.88,-0.47l-0.18,-0.03l-1.08,0.15l-1.86,-0.94l-0.21,-0.02l-0.88,0.24l-0.13,0.07l-1.25,1.17l-1.63,-0.91l-1.38,-1.36l-1.22,-0.75l-0.24,-1.24l-0.33,-0.75l1.53,-0.6l0.98,-0.84l1.74,-0.62l0.11,-0.07l0.47,-0.47l0.46,0.27l0.24,0.03l0.96,-0.3l1.06,0.95l0.15,0.07l1.57,0.24l-0.1,0.6l0.16,0.32l1.36,0.68l0.41,-0.15l0.28,-0.62l1.29,0.28l0.19,0.84l0.26,0.23l1.73,0.18l0.74,1.02l-0.17,0.0l-0.25,0.13l-0.32,0.49l-0.46,0.11l-0.22,0.23l-0.13,0.57l-0.32,0.1l-0.2,0.22l-0.03,0.14l-0.65,0.25l-1.05,-0.05l-0.28,0.17l-0.22,0.43Z", "name": "Czech Republic"}, "CY": {"path": "M505.03,193.75l-1.51,0.68l-1.0,-0.3l-0.32,-0.63l0.69,-0.06l0.41,0.13l0.19,-0.0l0.62,-0.22l0.31,0.02l0.06,0.22l0.49,0.17l0.06,-0.01Z", "name": "Cyprus"}, "CR": {"path": "M213.0,263.84l-0.98,-0.4l-0.3,-0.31l0.16,-0.24l0.05,-0.21l-0.09,-0.56l-0.1,-0.18l-0.76,-0.65l-0.99,-0.5l-0.74,-0.28l-0.13,-0.58l-0.12,-0.18l-0.66,-0.45l-0.34,-0.0l-0.13,0.31l0.13,0.59l-0.17,0.21l-0.34,-0.42l-0.14,-0.1l-0.7,-0.22l-0.23,-0.34l0.01,-0.62l0.31,-0.74l-0.14,-0.38l-0.3,-0.15l0.47,-0.4l1.48,0.6l0.26,-0.02l0.47,-0.27l0.58,0.15l0.35,0.44l0.17,0.11l0.74,0.17l0.27,-0.07l0.3,-0.27l0.52,1.09l0.97,1.02l0.77,0.71l-0.41,0.1l-0.23,0.3l0.01,1.02l0.12,0.24l0.2,0.14l-0.07,0.05l-0.11,0.3l0.08,0.37l-0.23,0.63Z", "name": "Costa Rica"}, "CU": {"path": "M215.01,226.09l2.08,0.18l1.94,0.03l2.24,0.86l0.95,0.92l0.25,0.08l2.22,-0.28l0.79,0.55l3.68,2.81l0.19,0.06l0.77,-0.03l1.18,0.42l-0.12,0.47l0.27,0.37l1.78,0.1l1.59,0.9l-0.11,0.22l-1.5,0.3l-1.64,0.13l-1.75,-0.2l-2.69,0.19l1.0,-0.86l-0.03,-0.48l-1.02,-0.68l-0.13,-0.05l-1.52,-0.16l-0.74,-0.64l-0.57,-1.42l-0.3,-0.19l-1.36,0.1l-2.23,-0.67l-0.71,-0.52l-0.14,-0.06l-3.2,-0.4l-0.42,-0.25l0.56,-0.39l0.12,-0.33l-0.27,-0.22l-2.46,-0.13l-0.2,0.06l-1.72,1.31l-0.94,0.03l-0.25,0.15l-0.29,0.53l-1.04,0.24l-0.29,-0.07l0.7,-0.43l0.1,-0.11l0.5,-0.87l1.04,-0.54l1.23,-0.49l1.86,-0.25l0.62,-0.28Z", "name": "Cuba"}, "SZ": {"path": "M500.95,353.41l-0.41,0.97l-1.16,0.23l-1.29,-1.26l-0.02,-0.71l0.63,-0.93l0.23,-0.7l0.47,-0.12l1.04,0.4l0.32,1.05l0.2,1.08Z", "name": "Swaziland"}, "SY": {"path": "M510.84,199.83l0.09,-0.11l0.07,-0.2l-0.04,-1.08l0.56,-1.4l1.3,-1.01l0.1,-0.34l-0.41,-1.11l-0.24,-0.19l-0.89,-0.11l-0.2,-1.84l0.55,-1.05l1.3,-1.22l0.09,-0.19l0.09,-1.09l0.39,0.27l0.25,0.04l2.66,-0.77l1.35,0.52l2.06,-0.01l2.93,-1.08l1.35,0.04l2.14,-0.34l-0.83,1.16l-1.31,0.68l-0.16,0.3l0.23,2.03l-0.9,3.25l-5.43,2.87l-4.79,2.91l-2.32,-0.92Z", "name": "Syria"}, "KG": {"path": "M599.04,172.15l0.38,-0.9l1.43,-0.37l4.04,1.02l0.37,-0.23l0.36,-1.64l1.17,-0.52l3.45,1.24l0.2,-0.0l0.86,-0.31l4.09,0.08l3.61,0.31l1.18,1.02l0.11,0.06l1.19,0.34l-0.13,0.26l-3.84,1.58l-0.13,0.1l-0.81,1.08l-3.08,0.34l-0.24,0.16l-0.85,1.7l-2.43,-0.37l-0.14,0.01l-1.79,0.61l-2.39,1.4l-0.12,0.39l0.25,0.49l-0.48,0.45l-4.57,0.43l-3.04,-0.94l-2.45,0.18l0.14,-1.02l2.42,0.44l0.27,-0.08l0.81,-0.81l1.76,0.27l0.21,-0.05l3.21,-2.14l-0.03,-0.51l-2.97,-1.57l-0.26,-0.01l-1.64,0.69l-1.38,-0.84l1.81,-1.67l-0.09,-0.5l-0.46,-0.18Z", "name": "Kyrgyzstan"}, "KE": {"path": "M523.3,287.04l0.06,0.17l1.29,1.8l-1.46,0.84l-0.11,0.11l-0.55,0.93l-0.81,0.16l-0.24,0.24l-0.34,1.69l-0.81,1.06l-0.46,1.58l-0.76,0.63l-3.3,-2.3l-0.16,-1.32l-0.15,-0.23l-9.35,-5.28l-0.02,-2.4l1.92,-2.63l0.91,-1.83l0.01,-0.24l-1.09,-2.86l-0.29,-1.24l-1.09,-1.63l2.93,-2.85l0.92,0.3l0.0,1.19l0.09,0.22l0.86,0.83l0.21,0.08l1.65,0.0l3.09,2.08l0.16,0.05l0.79,0.03l0.54,-0.06l0.58,0.28l1.67,0.2l0.28,-0.12l0.69,-0.98l2.04,-0.94l0.86,0.73l0.19,0.07l1.1,0.0l-1.82,2.36l-0.06,0.18l0.03,9.12Z", "name": "Kenya"}, "SS": {"path": "M505.7,261.39l0.02,1.64l-0.27,0.55l-1.15,0.05l-0.24,0.15l-0.85,1.44l0.22,0.45l1.44,0.17l1.15,1.12l0.42,0.95l0.14,0.15l1.06,0.54l1.33,2.45l-3.06,2.98l-1.44,1.08l-1.75,0.01l-1.92,0.56l-1.5,-0.53l-0.27,0.03l-0.85,0.57l-1.98,-1.5l-0.56,-1.02l-0.37,-0.13l-1.32,0.5l-1.08,-0.15l-0.2,0.04l-0.56,0.35l-0.9,-0.24l-1.44,-1.97l-0.39,-0.77l-0.13,-0.13l-1.78,-0.94l-0.65,-1.5l-1.08,-1.12l-1.57,-1.22l-0.02,-0.68l-0.12,-0.23l-1.37,-1.02l-1.17,-0.68l0.2,-0.08l0.86,-0.48l0.14,-0.18l0.63,-2.22l0.6,-1.02l1.47,-0.28l0.35,0.56l1.29,1.48l0.14,0.09l0.69,0.22l0.22,-0.02l0.83,-0.4l1.58,0.08l0.26,0.39l0.25,0.13l2.49,0.0l0.3,-0.25l0.06,-0.35l1.13,-0.42l0.18,-0.18l0.22,-0.63l0.68,-0.38l1.95,1.37l0.23,0.05l1.29,-0.26l0.19,-0.12l1.23,-1.8l1.36,-1.37l0.08,-0.25l-0.21,-1.52l-0.06,-0.15l-0.25,-0.3l0.94,-0.08l0.26,-0.21l0.1,-0.32l0.6,0.09l-0.25,1.67l0.3,1.83l0.11,0.19l1.22,0.94l0.25,0.73l-0.04,1.2l0.26,0.31l0.09,0.01Z", "name": "South Sudan"}, "SR": {"path": "M278.1,270.26l2.71,0.45l0.31,-0.14l0.19,-0.32l1.82,-0.16l2.25,0.56l-1.09,1.81l-0.04,0.19l0.2,1.72l0.05,0.13l0.9,1.35l-0.39,0.99l-0.21,1.09l-0.48,0.8l-1.2,-0.44l-0.17,-0.01l-1.12,0.24l-0.95,-0.21l-0.35,0.2l-0.25,0.73l0.05,0.29l0.3,0.35l-0.06,0.13l-1.01,-0.15l-1.42,-2.03l-0.32,-1.36l-0.29,-0.23l-0.63,-0.0l-0.95,-1.56l0.41,-1.16l0.01,-0.17l-0.08,-0.35l1.29,-0.56l0.18,-0.22l0.35,-1.97Z", "name": "Suriname"}, "KH": {"path": "M680.28,257.89l-0.93,-1.2l-1.24,-2.56l-0.56,-2.9l1.45,-1.92l3.07,-0.46l2.26,0.35l2.03,0.98l0.38,-0.11l1.0,-1.55l1.86,0.79l0.52,1.51l-0.28,2.82l-4.05,1.88l-0.12,0.45l0.79,1.1l-2.2,0.17l-2.08,0.98l-1.89,-0.33Z", "name": "Cambodia"}, "SV": {"path": "M197.02,248.89l0.18,-0.05l0.59,0.17l0.55,0.51l0.64,0.35l0.06,0.22l0.37,0.21l1.01,-0.28l0.38,0.13l0.16,0.13l-0.14,0.81l-0.18,0.38l-1.22,-0.03l-0.84,-0.23l-1.11,-0.52l-1.31,-0.15l-0.49,-0.38l0.02,-0.08l0.76,-0.57l0.46,-0.27l0.11,-0.35Z", "name": "El Salvador"}, "SK": {"path": "M468.01,150.02l0.05,0.07l0.36,0.1l0.85,-0.37l1.12,1.02l0.33,0.05l1.38,-0.65l1.07,0.3l0.16,0.0l1.69,-0.43l1.95,1.02l-0.51,0.64l-0.45,1.2l-0.32,0.2l-2.55,-0.93l-0.17,-0.01l-0.82,0.2l-0.17,0.11l-0.53,0.68l-0.94,0.32l-0.14,-0.11l-0.29,-0.04l-1.18,0.48l-0.95,0.09l-0.26,0.21l-0.15,0.47l-1.84,0.34l-0.82,-0.31l-1.14,-0.73l-0.2,-0.89l0.42,-0.84l0.91,0.05l0.12,-0.02l0.86,-0.33l0.18,-0.21l0.03,-0.13l0.32,-0.1l0.2,-0.22l0.12,-0.55l0.39,-0.1l0.18,-0.13l0.3,-0.45l0.43,-0.0Z", "name": "Slovakia"}, "KR": {"path": "M737.31,185.72l0.84,0.08l0.27,-0.12l0.89,-1.2l1.63,-0.13l1.1,-0.2l0.21,-0.16l0.12,-0.24l1.86,2.95l0.59,1.79l0.02,3.17l-0.84,1.38l-2.23,0.55l-1.95,1.14l-1.91,0.21l-0.22,-1.21l0.45,-2.07l-0.01,-0.17l-0.99,-2.67l1.54,-0.4l0.17,-0.46l-1.55,-2.24Z", "name": "South Korea"}, "SI": {"path": "M455.77,159.59l1.79,0.21l0.18,-0.04l1.2,-0.68l2.12,-0.08l0.21,-0.1l0.38,-0.42l0.1,0.01l0.28,0.62l-1.71,0.71l-0.18,0.22l-0.21,1.1l-0.71,0.26l-0.2,0.28l0.01,0.55l-0.59,-0.04l-0.79,-0.47l-0.38,0.06l-0.36,0.41l-0.84,-0.05l0.05,-0.15l-0.56,-1.24l0.21,-1.17Z", "name": "Slovenia"}, "KP": {"path": "M747.76,172.02l-0.23,-0.04l-0.26,0.08l-1.09,1.02l-0.78,1.06l-0.06,0.19l0.09,1.95l-1.12,0.57l-0.53,0.58l-0.88,0.82l-1.69,0.51l-1.09,0.79l-0.12,0.22l-0.07,1.17l-0.22,0.25l0.09,0.47l0.96,0.46l1.22,1.1l-0.19,0.37l-0.91,0.16l-1.75,0.14l-0.22,0.12l-0.87,1.18l-0.95,-0.09l-0.3,0.18l-0.97,-0.44l-0.39,0.13l-0.25,0.44l-0.29,0.09l-0.03,-0.2l-0.18,-0.23l-0.62,-0.25l-0.43,-0.29l0.52,-0.97l0.52,-0.3l0.13,-0.38l-0.18,-0.42l0.59,-1.47l0.01,-0.21l-0.16,-0.48l-0.22,-0.2l-1.41,-0.31l-0.82,-0.55l1.74,-1.62l2.73,-1.58l1.62,-1.96l0.96,0.76l0.17,0.06l2.17,0.11l0.31,-0.37l-0.32,-1.31l3.61,-1.21l0.16,-0.13l0.79,-1.34l1.25,1.38Z", "name": "North Korea"}, "SO": {"path": "M543.8,256.48l0.61,-0.05l1.14,-0.37l1.31,-0.25l0.12,-0.05l1.11,-0.81l0.57,-0.0l0.03,0.39l-0.23,1.49l0.01,1.25l-0.52,0.92l-0.7,2.71l-1.19,2.79l-1.54,3.2l-2.13,3.66l-2.12,2.79l-2.92,3.39l-2.47,2.0l-3.76,2.5l-2.33,1.9l-2.77,3.06l-0.61,1.35l-0.28,0.29l-1.22,-1.69l-0.03,-8.92l2.12,-2.76l0.59,-0.68l1.47,-0.04l0.18,-0.06l2.15,-1.71l3.16,-0.11l0.21,-0.09l7.08,-7.55l1.76,-2.12l1.14,-1.57l0.06,-0.18l0.01,-4.67Z", "name": "Somalia"}, "SN": {"path": "M379.28,250.34l-0.95,-1.82l-0.09,-0.1l-0.83,-0.6l0.62,-0.28l0.13,-0.11l1.21,-1.8l0.6,-1.31l0.71,-0.68l1.09,0.2l0.18,-0.02l1.17,-0.53l1.25,-0.03l1.17,0.73l1.59,0.65l1.47,1.83l1.59,1.7l0.12,1.56l0.49,1.46l0.1,0.14l0.85,0.65l0.18,0.82l-0.08,0.57l-0.13,0.05l-1.29,-0.19l-0.29,0.13l-0.11,0.16l-0.35,0.04l-1.83,-0.61l-5.84,-0.13l-0.12,0.02l-0.6,0.26l-0.87,-0.06l-1.01,0.32l-0.26,-1.26l1.9,0.04l0.16,-0.04l0.54,-0.32l0.37,-0.02l0.15,-0.05l0.78,-0.5l0.92,0.46l0.12,0.03l1.09,0.04l0.15,-0.03l1.08,-0.57l0.11,-0.44l-0.51,-0.74l-0.39,-0.1l-0.76,0.39l-0.62,-0.01l-0.92,-0.58l-0.18,-0.05l-0.79,0.04l-0.2,0.09l-0.48,0.51l-2.41,0.06Z", "name": "Senegal"}, "SL": {"path": "M392.19,267.53l-0.44,-0.12l-1.73,-0.97l-1.24,-1.28l-0.4,-0.84l-0.27,-1.65l1.21,-1.0l0.09,-0.12l0.27,-0.66l0.32,-0.41l0.56,-0.05l0.16,-0.07l0.5,-0.41l1.75,0.0l0.59,0.77l0.49,0.96l-0.07,0.64l0.04,0.19l0.36,0.58l-0.03,0.84l0.24,0.2l-0.64,0.65l-1.13,1.37l-0.06,0.14l-0.12,0.66l-0.43,0.58Z", "name": "Sierra Leone"}, "SB": {"path": "M826.74,311.51l0.23,0.29l-0.95,-0.01l-0.39,-0.63l0.65,0.27l0.45,0.09ZM825.01,308.52l-1.18,-1.39l-0.37,-1.06l0.24,0.0l0.82,1.84l0.49,0.6ZM823.21,309.42l-0.44,0.03l-1.43,-0.24l-0.32,-0.24l0.08,-0.5l1.29,0.31l0.72,0.47l0.11,0.18ZM817.9,303.81l2.59,1.44l0.3,0.41l-1.21,-0.66l-1.34,-0.89l-0.34,-0.3ZM813.77,302.4l0.48,0.34l0.1,0.08l-0.33,-0.17l-0.25,-0.25Z", "name": "Solomon Islands"}, "SA": {"path": "M528.24,243.1l-0.2,-0.69l-0.07,-0.12l-0.69,-0.71l-0.18,-0.94l-0.12,-0.19l-1.24,-0.89l-1.28,-2.09l-0.7,-2.08l-0.07,-0.11l-1.73,-1.79l-0.11,-0.07l-1.03,-0.39l-1.57,-2.36l-0.27,-1.72l0.1,-1.53l-0.03,-0.15l-1.44,-2.93l-1.25,-1.13l-1.34,-0.56l-0.72,-1.33l0.11,-0.49l-0.02,-0.2l-0.7,-1.38l-0.08,-0.1l-0.68,-0.56l-0.97,-1.98l-2.8,-4.03l-0.25,-0.13l-0.85,0.01l0.29,-1.11l0.12,-0.97l0.23,-0.81l2.52,0.39l0.23,-0.06l1.08,-0.84l0.6,-0.95l1.78,-0.35l0.22,-0.17l0.37,-0.83l0.74,-0.42l0.08,-0.46l-2.17,-2.4l4.55,-1.26l0.12,-0.06l0.36,-0.32l2.83,0.71l3.67,1.91l7.04,5.5l0.17,0.06l4.64,0.22l2.06,0.24l0.55,1.15l0.28,0.17l1.56,-0.06l0.9,2.15l0.14,0.15l1.14,0.57l0.39,0.85l0.11,0.13l1.59,1.06l0.12,0.91l-0.23,0.83l0.01,0.18l0.32,0.9l0.07,0.11l0.68,0.7l0.33,0.86l0.37,0.65l0.09,0.1l0.76,0.53l0.25,0.04l0.45,-0.12l0.35,0.75l0.1,0.63l0.96,2.68l0.23,0.19l7.53,1.33l0.27,-0.09l0.24,-0.26l0.87,1.41l-1.58,4.96l-7.34,2.54l-7.28,1.02l-2.34,1.17l-0.12,0.1l-1.74,2.63l-0.86,0.32l-0.49,-0.68l-0.28,-0.12l-0.92,0.12l-2.32,-0.25l-0.41,-0.23l-0.15,-0.04l-2.89,0.06l-0.63,0.2l-0.91,-0.59l-0.43,0.11l-0.66,1.27l-0.03,0.21l0.21,0.89l-0.6,0.45Z", "name": "Saudi Arabia"}, "SE": {"path": "M476.42,90.44l-0.15,0.1l-2.43,2.86l-0.07,0.24l0.36,2.31l-3.84,3.1l-4.83,3.38l-0.11,0.15l-1.82,5.45l0.03,0.26l1.78,2.68l2.27,1.99l-2.13,3.88l-2.49,0.82l-0.2,0.24l-0.95,6.05l-1.32,3.09l-2.82,-0.32l-0.3,0.16l-1.34,2.64l-2.48,0.14l-0.76,-3.15l-2.09,-4.04l-1.85,-5.01l1.03,-1.98l2.06,-2.53l0.06,-0.13l0.83,-4.45l-0.06,-0.25l-1.54,-1.86l-0.15,-5.0l1.52,-3.48l2.28,0.06l0.27,-0.16l0.87,-1.59l-0.01,-0.31l-0.8,-1.21l3.79,-5.63l4.07,-7.54l2.23,0.01l0.29,-0.22l0.59,-2.15l4.46,0.66l0.34,-0.26l0.34,-2.64l1.21,-0.14l3.24,2.08l3.78,2.85l0.06,6.37l0.03,0.14l0.67,1.29l-3.95,1.07Z", "name": "Sweden"}, "SD": {"path": "M505.98,259.75l-0.31,-0.9l-0.1,-0.14l-1.2,-0.93l-0.27,-1.66l0.29,-1.83l-0.25,-0.34l-1.16,-0.17l-0.33,0.21l-0.11,0.37l-1.3,0.11l-0.21,0.49l0.55,0.68l0.18,1.29l-1.31,1.33l-1.18,1.72l-1.04,0.21l-2.0,-1.4l-0.32,-0.02l-0.95,0.52l-0.14,0.16l-0.21,0.6l-1.16,0.43l-0.19,0.23l-0.04,0.27l-2.08,0.0l-0.25,-0.39l-0.24,-0.13l-1.81,-0.09l-0.14,0.03l-0.8,0.38l-0.49,-0.16l-1.22,-1.39l-0.42,-0.67l-0.31,-0.14l-1.81,0.35l-0.2,0.14l-0.72,1.24l-0.61,2.14l-0.73,0.4l-0.62,0.22l-0.83,-0.68l-0.12,-0.6l0.38,-0.97l0.01,-1.14l-0.08,-0.2l-1.39,-1.53l-0.25,-0.97l0.03,-0.57l-0.11,-0.25l-0.81,-0.66l-0.03,-1.34l-0.04,-0.14l-0.52,-0.98l-0.31,-0.15l-0.42,0.07l0.12,-0.44l0.63,-1.03l0.03,-0.23l-0.24,-0.88l0.69,-0.66l0.02,-0.41l-0.4,-0.46l0.58,-1.39l1.04,-1.71l1.97,0.16l0.32,-0.3l-0.12,-10.24l0.02,-0.8l2.59,-0.01l0.3,-0.3l0.0,-4.92l29.19,0.0l0.68,2.17l-0.4,0.35l-0.1,0.27l0.36,2.69l0.93,3.15l0.12,0.16l2.05,1.4l-0.99,1.15l-1.75,0.4l-0.15,0.08l-0.79,0.79l-0.08,0.17l-0.24,1.69l-1.07,3.75l-0.0,0.16l0.25,0.96l-0.38,2.1l-0.98,2.41l-1.52,1.3l-1.07,1.94l-0.25,0.99l-1.08,0.64l-0.13,0.18l-0.46,1.65Z", "name": "Sudan"}, "DO": {"path": "M241.7,234.97l0.15,-0.22l1.73,0.01l1.43,0.64l0.15,0.03l0.45,-0.04l0.36,0.74l0.28,0.17l1.02,-0.04l-0.04,0.43l0.27,0.33l1.03,0.09l0.91,0.7l-0.57,0.64l-0.99,-0.47l-0.16,-0.03l-1.11,0.11l-0.79,-0.12l-0.26,0.09l-0.38,0.4l-0.66,0.11l-0.28,-0.45l-0.38,-0.12l-0.83,0.37l-0.14,0.13l-0.85,1.49l-0.27,-0.17l-0.1,-0.58l0.05,-0.67l-0.07,-0.21l-0.44,-0.53l0.35,-0.25l0.12,-0.19l0.19,-1.0l-0.2,-1.4Z", "name": "Dominican Republic"}, "DJ": {"path": "M528.78,253.36l0.34,0.45l-0.06,0.76l-1.26,0.54l-0.05,0.53l0.82,0.53l-0.57,0.83l-0.3,-0.25l-0.27,-0.05l-0.56,0.17l-1.07,-0.03l-0.04,-0.56l-0.16,-0.56l0.76,-1.07l0.76,-0.97l0.89,0.18l0.25,-0.06l0.51,-0.42Z", "name": "Djibouti"}, "DK": {"path": "M452.4,129.07l-1.27,2.39l-2.25,-1.69l-0.26,-1.08l3.15,-1.0l0.63,1.39ZM447.87,126.25l-0.35,0.76l-0.47,-0.24l-0.38,0.09l-1.8,2.53l-0.03,0.29l0.56,1.4l-1.22,0.4l-1.68,-0.41l-0.92,-1.76l-0.07,-3.47l0.38,-0.88l0.62,-0.93l2.07,-0.21l0.19,-0.1l0.84,-0.95l1.5,-0.76l-0.06,1.26l-0.7,1.1l-0.03,0.25l0.3,1.0l0.18,0.19l1.06,0.42Z", "name": "Denmark"}, "DE": {"path": "M445.51,131.69l0.03,0.94l0.21,0.28l2.32,0.74l-0.02,1.0l0.37,0.3l2.55,-0.65l1.36,-0.89l2.63,1.27l1.09,1.01l0.51,1.51l-0.6,0.78l-0.0,0.36l0.88,1.17l0.58,1.68l-0.18,1.08l0.03,0.18l0.87,1.81l-0.66,0.2l-0.55,-0.32l-0.36,0.05l-0.58,0.58l-1.73,0.62l-0.99,0.84l-1.77,0.7l-0.16,0.4l0.42,0.94l0.26,1.34l0.14,0.2l1.25,0.76l1.22,1.2l-0.71,1.2l-0.81,0.37l-0.17,0.32l0.34,1.99l-0.04,0.09l-0.47,-0.39l-0.17,-0.07l-1.2,-0.1l-1.85,0.57l-2.15,-0.13l-0.29,0.18l-0.21,0.5l-0.96,-0.67l-0.24,-0.05l-0.67,0.16l-2.6,-0.94l-0.34,0.1l-0.42,0.57l-1.64,-0.02l0.26,-1.88l1.24,-2.15l-0.21,-0.45l-3.54,-0.58l-0.98,-0.71l0.12,-1.26l-0.05,-0.2l-0.44,-0.64l0.27,-2.18l-0.38,-3.14l1.17,-0.0l0.27,-0.17l0.63,-1.26l0.65,-3.17l-0.02,-0.17l-0.41,-1.0l0.32,-0.47l1.77,-0.16l0.37,0.6l0.47,0.06l1.7,-1.69l0.06,-0.33l-0.55,-1.24l-0.09,-1.51l1.5,0.36l0.16,-0.01l1.22,-0.4Z", "name": "Germany"}, "YE": {"path": "M553.53,242.65l-1.51,0.58l-0.17,0.16l-0.48,1.14l-0.07,0.79l-2.31,1.0l-3.98,1.19l-2.28,1.8l-0.97,0.12l-0.7,-0.14l-0.23,0.05l-1.42,1.03l-1.51,0.47l-2.07,0.13l-0.68,0.15l-0.17,0.1l-0.49,0.6l-0.57,0.16l-0.18,0.13l-0.3,0.49l-1.06,-0.05l-0.13,0.02l-0.73,0.32l-1.48,-0.11l-0.55,-1.26l0.07,-1.32l-0.04,-0.16l-0.39,-0.72l-0.48,-1.85l-0.52,-0.79l0.08,-0.02l0.22,-0.36l-0.23,-1.05l0.24,-0.39l0.04,-0.19l-0.09,-0.95l0.96,-0.72l0.11,-0.31l-0.23,-0.98l0.46,-0.88l0.75,0.49l0.26,0.03l0.63,-0.22l2.76,-0.06l0.5,0.25l2.42,0.26l0.85,-0.11l0.52,0.71l0.35,0.1l1.17,-0.43l0.15,-0.12l1.75,-2.64l2.22,-1.11l6.95,-0.96l2.55,5.58Z", "name": "Yemen"}, "AT": {"path": "M463.17,154.15l-0.14,0.99l-1.15,0.01l-0.24,0.47l0.39,0.56l-0.75,1.84l-0.36,0.4l-2.06,0.07l-0.14,0.04l-1.18,0.67l-1.96,-0.23l-3.43,-0.78l-0.5,-0.97l-0.33,-0.16l-2.47,0.55l-0.2,0.16l-0.18,0.37l-1.27,-0.38l-1.28,-0.09l-0.81,-0.41l0.25,-0.51l0.03,-0.18l-0.05,-0.28l0.35,-0.08l1.16,0.81l0.45,-0.13l0.27,-0.64l2.0,0.12l1.84,-0.57l1.05,0.09l0.71,0.59l0.47,-0.11l0.23,-0.54l0.02,-0.17l-0.32,-1.85l0.69,-0.31l0.13,-0.12l0.73,-1.23l1.61,0.89l0.35,-0.04l1.35,-1.27l0.7,-0.19l1.84,0.93l0.18,0.03l1.08,-0.15l0.81,0.43l-0.07,0.15l-0.02,0.2l0.24,1.06Z", "name": "Austria"}, "DZ": {"path": "M450.58,224.94l-8.31,4.86l-7.23,5.12l-3.46,1.13l-2.42,0.22l-0.02,-1.33l-0.2,-0.28l-1.15,-0.42l-1.45,-0.69l-0.55,-1.13l-0.1,-0.12l-8.45,-5.72l-17.72,-12.17l0.03,-0.38l-0.02,-3.21l3.84,-1.91l2.46,-0.41l2.1,-0.75l0.14,-0.11l0.9,-1.3l2.84,-1.06l0.19,-0.27l0.09,-1.81l1.21,-0.2l0.15,-0.07l1.06,-0.96l3.19,-0.46l0.23,-0.18l0.46,-1.08l-0.08,-0.34l-0.6,-0.54l-0.83,-2.85l-0.18,-1.8l-0.82,-1.57l2.13,-1.37l2.65,-0.49l0.13,-0.05l1.55,-1.15l2.34,-0.85l4.2,-0.51l4.07,-0.23l1.21,0.41l0.23,-0.01l2.3,-1.11l2.52,-0.02l0.94,0.62l0.2,0.05l1.25,-0.13l-0.36,1.03l-0.01,0.14l0.39,2.66l-0.56,2.2l-1.49,1.52l-0.08,0.24l0.22,2.12l0.11,0.2l1.94,1.58l0.02,0.54l0.12,0.23l1.45,1.06l1.04,4.85l0.81,2.42l0.13,1.19l-0.43,2.17l0.17,1.28l-0.31,1.53l0.2,1.56l-0.9,1.02l-0.01,0.38l1.43,1.88l0.09,1.06l0.04,0.13l0.89,1.48l0.37,0.12l1.03,-0.43l1.79,1.12l0.89,1.34Z", "name": "Algeria"}, "US": {"path": "M892.64,99.05l1.16,0.57l0.21,0.02l1.45,-0.38l1.92,0.99l2.17,0.47l-1.65,0.72l-1.75,-0.79l-0.93,-0.7l-0.21,-0.06l-2.11,0.22l-0.35,-0.2l0.09,-0.87ZM183.29,150.37l0.39,1.54l0.12,0.17l0.78,0.55l0.14,0.05l1.74,0.2l2.52,0.5l2.4,0.98l0.17,0.02l1.96,-0.4l3.01,0.81l0.91,-0.02l2.22,-0.88l4.67,2.33l3.86,2.01l0.21,0.71l0.15,0.18l0.33,0.17l-0.02,0.05l0.23,0.43l0.67,0.1l0.21,-0.05l0.1,-0.07l0.05,0.29l0.09,0.16l0.5,0.5l0.21,0.09l0.56,0.0l0.13,0.13l-0.2,0.36l0.12,0.41l2.49,1.39l0.99,5.24l-0.69,1.68l-1.16,1.64l-0.6,1.18l-0.06,0.31l0.04,0.22l0.28,0.43l0.11,0.1l0.85,0.47l0.15,0.04l0.63,0.0l0.14,-0.04l2.87,-1.58l2.6,-0.49l3.28,-1.5l0.17,-0.23l0.04,-0.43l-0.23,-0.93l-0.24,-0.39l0.74,-0.32l4.7,-0.01l0.25,-0.13l0.77,-1.15l2.9,-2.41l1.04,-0.52l8.35,-0.02l0.28,-0.21l0.2,-0.6l0.7,-0.14l1.06,-0.48l0.13,-0.11l0.92,-1.49l0.75,-2.39l1.67,-2.08l0.59,0.6l0.3,0.07l1.52,-0.49l0.88,0.72l-0.0,4.14l0.08,0.2l1.6,1.72l0.31,0.72l-2.42,1.35l-2.55,1.05l-2.64,0.9l-0.14,0.11l-1.33,1.81l-0.44,0.7l-0.05,0.15l-0.03,1.6l0.03,0.14l0.83,1.59l0.24,0.16l0.78,0.06l-1.15,0.33l-1.25,-0.04l-1.83,0.52l-2.51,0.29l-2.17,0.88l-0.17,0.36l0.33,0.22l3.55,-0.54l0.15,0.11l-2.87,0.73l-1.19,0.0l-0.16,-0.33l-0.36,0.06l-0.76,0.82l0.17,0.5l0.42,0.08l-0.45,1.75l-1.4,1.74l-0.04,-0.17l-0.21,-0.22l-0.48,-0.13l-0.77,-0.69l-0.36,-0.03l-0.12,0.34l0.52,1.58l0.09,0.14l0.52,0.43l0.03,0.87l-0.74,1.05l-0.39,0.63l0.05,-0.12l-0.08,-0.34l-1.19,-1.03l-0.28,-2.31l-0.26,-0.26l-0.32,0.19l-0.48,1.27l-0.01,0.19l0.39,1.33l-1.14,-0.31l-0.36,0.18l0.14,0.38l1.57,0.85l0.1,2.58l0.22,0.28l0.55,0.15l0.21,0.81l0.33,2.72l-1.46,1.94l-2.5,0.81l-0.12,0.07l-1.58,1.58l-1.15,0.17l-0.15,0.06l-1.27,1.03l-0.09,0.13l-0.32,0.85l-2.71,1.79l-1.45,1.37l-1.18,1.64l-0.05,0.12l-0.39,1.96l0.0,0.13l0.44,1.91l0.85,2.37l1.1,1.91l0.03,1.2l1.16,3.07l-0.08,1.74l-0.1,0.99l-0.57,1.48l-0.54,0.24l-0.97,-0.26l-0.34,-1.02l-0.12,-0.16l-0.89,-0.58l-2.44,-4.28l-0.34,-0.94l0.49,-1.71l-0.02,-0.21l-0.7,-1.5l-2.0,-2.35l-0.11,-0.08l-0.98,-0.42l-0.25,0.01l-2.42,1.19l-0.26,-0.08l-1.26,-1.29l-1.57,-0.68l-0.16,-0.02l-2.79,0.34l-2.18,-0.3l-1.98,0.19l-1.12,0.45l-0.14,0.44l0.4,0.65l-0.04,1.02l0.09,0.22l0.29,0.3l-0.06,0.05l-0.77,-0.33l-0.26,0.01l-0.87,0.48l-1.64,-0.08l-1.79,-1.39l-0.23,-0.06l-2.11,0.33l-1.75,-0.61l-0.14,-0.01l-1.61,0.2l-2.11,0.64l-0.11,0.06l-2.25,1.99l-2.53,1.21l-1.43,1.38l-0.58,1.22l-0.03,0.12l-0.03,1.86l0.13,1.32l0.3,0.62l-0.46,0.04l-1.71,-0.57l-1.85,-0.79l-0.63,-1.14l-0.54,-1.85l-0.07,-0.12l-1.45,-1.51l-0.86,-1.58l-1.26,-1.87l-0.09,-0.09l-1.76,-1.09l-0.17,-0.04l-2.05,0.05l-0.23,0.12l-1.44,1.97l-1.84,-0.72l-1.19,-0.76l-0.6,-1.45l-0.9,-1.52l-1.49,-1.21l-1.27,-0.87l-0.89,-0.96l-0.22,-0.1l-4.34,-0.0l-0.3,0.3l-0.0,0.84l-6.62,0.02l-5.66,-1.93l-3.48,-1.24l0.11,-0.25l-0.3,-0.42l-3.18,0.3l-2.6,0.2l-0.35,-1.19l-0.08,-0.13l-1.62,-1.61l-0.13,-0.08l-1.02,-0.29l-0.22,-0.66l-0.25,-0.2l-1.31,-0.13l-0.82,-0.7l-0.16,-0.07l-2.25,-0.27l-0.48,-0.34l-0.28,-1.44l-0.07,-0.14l-2.41,-2.84l-2.03,-3.89l0.08,-0.58l-0.1,-0.27l-1.08,-0.94l-1.87,-2.36l-0.33,-2.31l-0.07,-0.15l-1.24,-1.5l0.52,-2.4l-0.09,-2.57l-0.78,-2.3l0.96,-2.83l0.61,-5.66l-0.46,-4.26l-0.79,-2.71l-0.68,-1.4l0.13,-0.26l3.24,0.97l1.28,2.88l0.52,0.06l0.62,-0.84l0.06,-0.22l-0.4,-2.61l-0.74,-2.29l68.9,-0.0l0.3,-0.3l0.01,-0.95l0.32,-0.01ZM32.5,67.43l1.75,1.99l0.41,0.04l1.02,-0.81l3.79,0.25l-0.1,0.72l0.24,0.34l3.83,0.77l2.6,-0.44l5.21,1.41l4.84,0.43l1.9,0.57l0.15,0.01l3.25,-0.71l3.72,1.32l2.52,0.58l-0.03,38.14l0.29,0.3l2.41,0.11l2.34,1.0l1.7,1.59l2.22,2.42l0.42,0.03l2.41,-2.04l2.25,-1.08l1.23,1.76l1.71,1.53l2.24,1.62l1.54,2.56l2.56,4.09l0.11,0.11l4.1,2.17l0.06,1.93l-1.12,1.35l-1.22,-1.14l-2.08,-1.05l-0.68,-2.94l-0.09,-0.16l-3.18,-2.84l-1.32,-3.35l-0.25,-0.19l-2.43,-0.24l-3.93,-0.09l-2.85,-1.02l-5.24,-3.85l-6.77,-2.04l-3.52,0.3l-4.84,-1.7l-2.96,-1.6l-0.23,-0.02l-2.78,0.8l-0.21,0.35l0.46,2.31l-1.11,0.19l-2.9,0.78l-2.24,1.26l-2.42,0.68l-0.29,-1.79l1.07,-3.49l2.54,-1.11l0.12,-0.45l-0.69,-0.96l-0.41,-0.07l-3.19,2.12l-1.76,2.54l-3.57,2.62l-0.03,0.46l1.63,1.59l-2.14,2.38l-2.64,1.49l-2.49,1.09l-0.16,0.17l-0.58,1.48l-3.8,1.79l-0.14,0.14l-0.75,1.57l-2.75,1.41l-1.62,-0.25l-0.16,0.02l-2.35,0.98l-2.54,1.19l-2.06,1.15l-4.05,0.93l-0.1,-0.15l2.45,-1.45l2.49,-1.1l2.61,-1.88l3.03,-0.39l0.19,-0.1l1.2,-1.41l3.43,-2.11l0.61,-0.75l1.81,-1.24l0.13,-0.2l0.42,-2.7l1.24,-2.12l-0.03,-0.35l-0.34,-0.09l-2.73,1.05l-0.67,-0.53l-0.39,0.02l-1.13,1.11l-1.43,-1.62l-0.49,0.06l-0.41,0.8l-0.67,-1.31l-0.42,-0.12l-2.43,1.43l-1.18,-0.0l-0.18,-1.86l0.43,-1.3l-0.09,-0.33l-1.61,-1.33l-0.26,-0.06l-3.11,0.68l-2.0,-1.66l-1.61,-0.85l-0.01,-1.97l-0.11,-0.23l-1.76,-1.48l0.86,-1.96l2.01,-2.13l0.88,-1.94l1.79,-0.25l1.65,0.6l0.31,-0.06l1.91,-1.8l1.67,0.31l0.22,-0.04l1.91,-1.23l0.13,-0.33l-0.47,-1.82l-0.15,-0.19l-1.0,-0.52l1.51,-1.27l0.09,-0.34l-0.29,-0.19l-1.62,0.06l-2.66,0.88l-0.13,0.09l-0.62,0.72l-1.77,-0.8l-0.16,-0.02l-3.48,0.44l-3.5,-0.92l-1.06,-1.61l-2.78,-2.09l3.07,-1.51l5.52,-2.01l1.65,0.0l-0.28,1.73l0.31,0.35l5.29,-0.16l0.23,-0.49l-2.03,-2.59l-0.1,-0.08l-3.03,-1.58l-1.79,-2.12l-2.4,-1.83l-3.18,-1.27l1.13,-1.84l4.28,-0.14l0.15,-0.05l3.16,-2.0l0.13,-0.17l0.57,-2.07l2.43,-2.02l2.42,-0.52l4.67,-1.98l2.22,0.29l0.2,-0.04l3.74,-2.37l3.57,0.91ZM37.66,123.49l-2.31,1.26l-1.04,-0.75l-0.31,-1.35l2.06,-1.16l1.24,-0.51l1.48,0.22l0.76,0.81l-1.89,1.49ZM30.89,233.84l1.2,0.57l0.35,0.3l0.48,0.69l-1.6,0.86l-0.3,0.31l-0.24,-0.14l0.05,-0.54l-0.02,-0.15l-0.36,-0.83l0.05,-0.12l0.39,-0.38l0.07,-0.31l-0.09,-0.27ZM29.06,231.89l0.5,0.14l0.31,0.19l-0.46,0.1l-0.34,-0.43ZM25.02,230.13l0.2,-0.11l0.4,0.47l-0.43,-0.05l-0.17,-0.31ZM21.29,228.68l0.1,-0.07l0.22,0.02l0.02,0.21l-0.02,0.02l-0.32,-0.18ZM6.0,113.33l-1.19,0.45l-1.5,-0.64l-0.94,-0.63l1.76,-0.46l1.71,0.29l0.16,0.98Z", "name": "United States of America"}, "UY": {"path": "M276.9,363.17l1.3,-0.23l2.4,2.04l0.22,0.07l0.82,-0.07l2.48,1.7l1.93,1.5l1.28,1.67l-0.95,1.14l-0.04,0.31l0.63,1.45l-0.96,1.57l-2.65,1.47l-1.73,-0.53l-0.15,-0.01l-1.25,0.28l-2.22,-1.16l-0.16,-0.03l-1.56,0.08l-1.33,-1.36l0.17,-1.58l0.48,-0.55l0.07,-0.2l-0.02,-2.74l0.66,-2.8l0.57,-2.02Z", "name": "Uruguay"}, "LB": {"path": "M510.44,198.11l-0.48,0.03l-0.26,0.17l-0.15,0.32l-0.21,-0.0l0.72,-1.85l1.19,-1.9l0.74,0.09l0.27,0.73l-1.19,0.93l-0.09,0.13l-0.54,1.36Z", "name": "Lebanon"}, "LA": {"path": "M684.87,248.8l0.61,-0.86l0.05,-0.16l0.11,-2.17l-0.08,-0.22l-1.96,-2.16l-0.15,-2.44l-0.08,-0.18l-1.9,-2.1l-0.19,-0.1l-1.89,-0.18l-0.29,0.15l-0.42,0.76l-1.21,0.06l-0.67,-0.41l-0.31,-0.0l-2.2,1.29l-0.05,-1.77l0.61,-2.7l-0.27,-0.37l-1.44,-0.1l-0.12,-1.31l-0.12,-0.21l-0.87,-0.65l0.38,-0.68l1.76,-1.41l0.08,0.22l0.27,0.2l1.33,0.07l0.31,-0.34l-0.35,-2.75l0.85,-0.25l1.32,1.88l1.11,2.36l0.27,0.17l2.89,0.02l0.78,1.82l-1.32,0.56l-0.12,0.09l-0.72,0.93l0.1,0.45l2.93,1.52l3.62,5.27l1.88,1.78l0.58,1.67l-0.38,2.11l-1.87,-0.79l-0.37,0.11l-0.99,1.54l-1.51,-0.73Z", "name": "Laos"}, "TW": {"path": "M725.6,222.5l-1.5,4.22l-0.82,1.65l-1.01,-1.7l-0.26,-1.8l1.4,-2.48l1.8,-1.81l0.76,0.53l-0.38,1.39Z", "name": "Taiwan"}, "TT": {"path": "M266.35,259.46l0.41,-0.39l0.09,-0.23l-0.04,-0.75l1.14,-0.26l0.2,0.03l-0.07,1.37l-1.73,0.23Z", "name": "Trinidad and Tobago"}, "TR": {"path": "M513.25,175.38l3.63,1.17l0.14,0.01l2.88,-0.45l2.11,0.26l0.18,-0.03l2.9,-1.53l2.51,-0.13l2.25,1.37l0.36,0.88l-0.23,1.36l0.19,0.33l1.81,0.72l0.61,0.53l-1.31,0.64l-0.16,0.34l0.76,3.24l-0.44,0.8l0.01,0.3l1.19,2.02l-0.71,0.29l-0.74,-0.62l-0.15,-0.07l-2.91,-0.37l-0.15,0.02l-1.04,0.43l-2.78,0.44l-1.44,-0.03l-2.83,1.06l-1.95,0.01l-1.28,-0.52l-0.2,-0.01l-2.62,0.76l-0.7,-0.48l-0.47,0.22l-0.13,1.49l-1.01,0.94l-0.58,-0.82l0.79,-0.9l0.04,-0.34l-0.31,-0.15l-1.46,0.23l-2.03,-0.64l-0.3,0.07l-1.65,1.58l-3.58,0.3l-1.94,-1.47l-0.17,-0.06l-2.7,-0.1l-0.28,0.17l-0.51,1.06l-1.47,0.29l-2.32,-1.46l-0.17,-0.05l-2.55,0.05l-1.4,-2.7l-1.72,-1.54l1.11,-2.06l-0.07,-0.37l-1.35,-1.19l2.47,-2.51l3.74,-0.11l0.26,-0.17l0.96,-2.07l4.56,0.38l0.19,-0.05l2.97,-1.92l2.84,-0.83l4.03,-0.06l4.31,2.08ZM488.85,176.8l-1.81,1.38l-0.57,-1.01l0.02,-0.36l0.45,-0.25l0.13,-0.15l0.78,-1.87l-0.11,-0.37l-0.72,-0.47l1.91,-0.71l1.89,0.35l0.25,0.97l0.17,0.2l1.87,0.83l-0.19,0.31l-2.82,0.16l-0.18,0.07l-1.06,0.91Z", "name": "Turkey"}, "LK": {"path": "M625.44,266.07l-0.35,2.4l-0.9,0.61l-1.91,0.5l-1.04,-1.75l-0.43,-3.5l1.0,-3.6l1.34,1.09l1.13,1.72l1.16,2.52Z", "name": "Sri Lanka"}, "TN": {"path": "M444.91,206.18l-0.99,-4.57l-0.12,-0.18l-1.43,-1.04l-0.02,-0.53l-0.11,-0.22l-1.95,-1.59l-0.19,-1.85l1.44,-1.47l0.08,-0.14l0.59,-2.34l-0.38,-2.77l0.44,-1.28l2.52,-1.08l1.41,0.28l-0.06,1.2l0.43,0.28l1.81,-0.9l0.02,0.06l-1.14,1.28l-0.08,0.2l-0.02,1.32l0.11,0.24l0.74,0.6l-0.29,2.18l-1.56,1.35l-0.09,0.32l0.48,1.54l0.28,0.21l1.11,0.04l0.55,1.17l0.15,0.14l0.76,0.35l-0.12,1.79l-1.1,0.72l-0.8,0.91l-1.68,1.04l-0.13,0.32l0.25,1.08l-0.18,0.96l-0.74,0.39Z", "name": "Tunisia"}, "TL": {"path": "M734.21,307.22l0.17,-0.34l1.99,-0.52l1.72,-0.08l0.78,-0.3l0.29,0.1l-0.43,0.32l-2.57,1.09l-1.71,0.59l-0.05,-0.49l-0.19,-0.36Z", "name": "East Timor"}, "TM": {"path": "M553.16,173.51l-0.12,1.0l-0.26,-0.65l0.38,-0.34ZM553.54,173.16l0.13,-0.12l0.43,-0.09l-0.56,0.21ZM555.68,172.6l0.65,-0.14l1.53,0.76l1.71,2.29l0.27,0.12l1.27,-0.14l2.81,-0.04l0.29,-0.38l-0.35,-1.27l1.98,-0.97l1.96,-1.63l3.05,1.44l0.25,2.23l0.14,0.22l0.96,0.61l0.18,0.05l2.61,-0.13l0.68,0.44l1.2,2.97l0.1,0.13l2.85,2.03l1.67,1.41l2.66,1.45l3.13,1.17l-0.05,1.23l-0.36,-0.04l-1.12,-0.73l-0.44,0.14l-0.34,0.89l-1.96,0.52l-0.22,0.23l-0.47,2.17l-1.26,0.78l-1.93,0.42l-0.21,0.18l-0.46,1.14l-1.64,0.33l-2.3,-0.97l-0.2,-2.23l-0.28,-0.27l-1.76,-0.1l-2.78,-2.48l-0.15,-0.07l-1.95,-0.31l-2.82,-1.48l-1.78,-0.27l-0.18,0.03l-1.03,0.51l-1.6,-0.08l-0.22,0.08l-1.72,1.6l-1.83,0.46l-0.39,-1.7l0.36,-3.0l-0.16,-0.3l-1.73,-0.88l0.57,-1.77l-0.25,-0.39l-1.33,-0.14l0.41,-1.85l2.05,0.63l0.21,-0.01l2.2,-0.95l0.09,-0.49l-1.78,-1.75l-0.69,-1.66l-0.07,-0.03Z", "name": "Turkmenistan"}, "TJ": {"path": "M597.99,178.71l-0.23,0.23l-2.57,-0.47l-0.35,0.25l-0.24,1.7l0.32,0.34l2.66,-0.22l3.15,0.95l4.47,-0.42l0.58,2.45l0.39,0.21l0.71,-0.25l1.22,0.53l-0.06,1.01l0.29,1.28l-2.19,-0.0l-1.71,-0.21l-0.23,0.07l-1.51,1.25l-1.05,0.27l-0.77,0.51l-0.71,-0.67l0.22,-2.28l-0.24,-0.32l-0.43,-0.08l0.17,-0.57l-0.16,-0.36l-1.36,-0.66l-0.34,0.05l-1.08,1.01l-0.09,0.15l-0.25,1.09l-0.24,0.26l-1.36,-0.05l-0.27,0.14l-0.65,1.06l-0.58,-0.39l-0.3,-0.02l-1.68,0.86l-0.36,-0.16l1.28,-2.65l0.02,-0.2l-0.54,-2.17l-0.18,-0.21l-1.53,-0.58l0.41,-0.82l1.89,0.13l0.26,-0.12l1.19,-1.63l0.77,-1.82l2.66,-0.55l-0.33,0.87l0.01,0.23l0.36,0.82l0.3,0.18l0.23,-0.02Z", "name": "Tajikistan"}, "LS": {"path": "M493.32,359.69l0.69,0.65l-0.65,1.12l-0.38,0.8l-1.27,0.39l-0.18,0.15l-0.4,0.77l-0.59,0.18l-1.59,-1.78l1.16,-1.5l1.3,-1.02l0.97,-0.46l0.94,0.72Z", "name": "Lesotho"}, "TH": {"path": "M677.42,253.68l-1.7,-0.88l-0.14,-0.03l-1.77,0.04l0.3,-1.64l-0.3,-0.35l-2.21,0.01l-0.3,0.28l-0.2,2.76l-2.15,5.9l-0.02,0.13l0.17,1.83l0.28,0.27l1.45,0.07l0.93,2.1l0.44,2.15l0.08,0.15l1.4,1.44l0.16,0.09l1.43,0.27l1.04,1.05l-0.58,0.73l-1.24,0.22l-0.15,-0.99l-0.15,-0.22l-2.04,-1.1l-0.36,0.06l-0.23,0.23l-0.72,-0.71l-0.41,-1.18l-0.06,-0.11l-1.33,-1.42l-1.22,-1.2l-0.5,0.13l-0.15,0.54l-0.14,-0.41l0.26,-1.48l0.73,-2.38l1.2,-2.57l1.37,-2.35l0.02,-0.27l-0.95,-2.26l0.03,-1.19l-0.29,-1.42l-0.06,-0.13l-1.65,-2.0l-0.46,-0.99l0.62,-0.34l0.13,-0.15l0.92,-2.23l-0.02,-0.27l-1.05,-1.74l-1.57,-1.86l-1.04,-1.96l0.76,-0.34l0.16,-0.16l1.07,-2.63l1.58,-0.1l0.16,-0.06l1.43,-1.11l1.24,-0.52l0.84,0.62l0.13,1.43l0.28,0.27l1.34,0.09l-0.54,2.39l0.05,2.39l0.45,0.25l2.48,-1.45l0.6,0.36l0.17,0.04l1.47,-0.07l0.25,-0.15l0.41,-0.73l1.58,0.15l1.76,1.93l0.15,2.44l0.08,0.18l1.94,2.15l-0.1,1.96l-0.66,0.93l-2.25,-0.34l-3.24,0.49l-0.19,0.12l-1.6,2.12l-0.06,0.24l0.48,2.46Z", "name": "Thailand"}, "TF": {"path": "M593.76,417.73l1.38,0.84l2.15,0.37l0.04,0.31l-0.59,1.24l-3.36,0.19l-0.05,-1.38l0.43,-1.56Z", "name": "French Southern and Antarctic Lands"}, "TG": {"path": "M425.23,269.29l-1.49,0.4l-0.43,-0.68l-0.64,-1.54l-0.18,-1.16l0.54,-2.21l-0.04,-0.24l-0.59,-0.86l-0.23,-1.9l0.0,-1.82l-0.07,-0.19l-0.95,-1.19l0.1,-0.41l1.58,0.04l-0.23,0.97l0.08,0.28l1.55,1.55l0.09,1.13l0.08,0.19l0.42,0.43l-0.11,5.66l0.52,1.53Z", "name": "Togo"}, "TD": {"path": "M457.57,252.46l0.23,-1.08l-0.28,-0.36l-1.32,-0.05l0.0,-1.35l-0.1,-0.22l-0.9,-0.82l0.99,-3.1l3.12,-2.37l0.12,-0.23l0.13,-3.33l0.95,-5.2l0.53,-1.09l-0.07,-0.36l-0.94,-0.81l-0.03,-0.7l-0.12,-0.23l-0.84,-0.61l-0.57,-3.76l2.21,-1.26l19.67,9.88l0.12,9.74l-1.83,-0.15l-0.28,0.14l-1.14,1.89l-0.68,1.62l0.05,0.31l0.33,0.38l-0.61,0.58l-0.08,0.3l0.25,0.93l-0.58,0.95l-0.29,1.01l0.34,0.37l0.67,-0.11l0.39,0.73l0.03,1.4l0.11,0.23l0.8,0.65l-0.01,0.24l-1.38,0.37l-0.11,0.06l-1.27,1.03l-1.83,2.76l-2.21,1.1l-2.34,-0.15l-0.82,0.25l-0.2,0.37l0.19,0.68l-1.16,0.79l-1.01,0.94l-2.92,0.89l-0.5,-0.46l-0.17,-0.08l-0.41,-0.05l-0.28,0.12l-0.38,0.54l-1.36,0.12l0.1,-0.18l0.01,-0.27l-0.78,-1.72l-0.35,-1.03l-0.17,-0.18l-1.03,-0.41l-1.29,-1.28l0.36,-0.78l0.9,0.2l0.14,-0.0l0.67,-0.17l1.36,0.02l0.26,-0.45l-1.32,-2.22l0.09,-1.64l-0.17,-1.68l-0.04,-0.13l-0.93,-1.53Z", "name": "Chad"}, "LY": {"path": "M457.99,226.38l-1.57,0.87l-1.25,-1.28l-0.13,-0.08l-3.85,-1.11l-1.04,-1.57l-0.09,-0.09l-1.98,-1.23l-0.27,-0.02l-0.93,0.39l-0.72,-1.2l-0.09,-1.07l-0.06,-0.16l-1.33,-1.75l0.83,-0.94l0.07,-0.24l-0.21,-1.64l0.31,-1.43l-0.17,-1.29l0.43,-2.26l-0.15,-1.33l-0.73,-2.18l0.99,-0.52l0.16,-0.21l0.22,-1.16l-0.22,-1.06l1.54,-0.95l0.81,-0.92l1.19,-0.78l0.14,-0.23l0.12,-1.76l2.57,0.84l0.16,0.01l0.99,-0.23l2.01,0.45l3.19,1.2l1.12,2.36l0.2,0.16l2.24,0.53l3.5,1.14l2.65,1.36l0.29,-0.01l1.22,-0.71l1.27,-1.32l0.07,-0.29l-0.55,-2.0l0.69,-1.19l1.7,-1.23l1.61,-0.35l3.2,0.54l0.78,1.14l0.24,0.13l0.85,0.01l0.84,0.47l2.35,0.31l0.42,0.63l-0.79,1.16l-0.04,0.26l0.35,1.08l-0.61,1.6l-0.0,0.2l0.73,2.16l0.0,24.24l-2.58,0.01l-0.3,0.29l-0.02,0.62l-19.55,-9.83l-0.28,0.01l-2.53,1.44Z", "name": "Libya"}, "AE": {"path": "M550.59,223.8l0.12,0.08l1.92,-0.41l3.54,0.15l0.23,-0.09l1.71,-1.79l1.86,-1.7l1.31,-1.36l0.26,0.5l0.28,1.72l-0.93,0.01l-0.3,0.26l-0.21,1.73l0.11,0.27l0.08,0.06l-0.7,0.32l-0.17,0.27l-0.01,0.99l-0.68,1.02l-0.05,0.15l-0.06,0.96l-0.32,0.36l-7.19,-1.27l-0.79,-2.22Z", "name": "United Arab Emirates"}, "VE": {"path": "M240.66,256.5l0.65,0.91l-0.03,1.13l-1.05,1.39l-0.03,0.31l0.95,2.0l0.32,0.17l1.08,-0.16l0.24,-0.21l0.56,-1.83l-0.06,-0.29l-0.71,-0.81l-0.1,-1.58l2.9,-0.96l0.19,-0.37l-0.29,-1.02l0.45,-0.41l0.72,1.43l0.26,0.16l1.65,0.04l1.46,1.27l0.08,0.72l0.3,0.27l2.28,0.02l2.55,-0.25l1.34,1.06l0.14,0.06l1.92,0.31l0.2,-0.03l1.4,-0.79l0.15,-0.25l0.02,-0.36l2.82,-0.14l1.17,-0.01l-0.41,0.14l-0.14,0.46l0.86,1.19l0.22,0.12l1.93,0.18l1.73,1.13l0.37,1.9l0.31,0.24l1.21,-0.05l0.52,0.32l-1.63,1.21l-0.11,0.17l-0.22,0.92l0.07,0.27l0.63,0.69l-0.31,0.24l-1.48,0.39l-0.22,0.3l0.04,1.03l-0.59,0.6l-0.01,0.41l1.67,1.87l0.23,0.48l-0.72,0.76l-2.71,0.91l-1.78,0.39l-0.13,0.06l-0.6,0.49l-1.84,-0.58l-1.89,-0.33l-0.18,0.03l-0.47,0.23l-0.02,0.53l0.96,0.56l-0.08,1.58l0.35,1.58l0.26,0.23l1.91,0.19l0.02,0.07l-1.54,0.62l-0.18,0.2l-0.25,0.92l-0.88,0.35l-1.85,0.58l-0.16,0.13l-0.4,0.64l-1.66,0.14l-1.22,-1.18l-0.79,-2.52l-0.67,-0.88l-0.66,-0.43l0.99,-0.98l0.09,-0.26l-0.09,-0.56l-0.08,-0.16l-0.66,-0.69l-0.47,-1.54l0.18,-1.67l0.55,-0.85l0.45,-1.35l-0.15,-0.36l-0.89,-0.43l-0.19,-0.02l-1.39,0.28l-1.76,-0.13l-0.92,0.23l-1.64,-2.01l-0.17,-0.1l-1.54,-0.33l-3.05,0.23l-0.5,-0.73l-0.15,-0.12l-0.45,-0.15l-0.05,-0.28l0.28,-0.86l0.01,-0.15l-0.2,-1.01l-0.08,-0.15l-0.5,-0.5l-0.3,-1.08l-0.25,-0.22l-0.89,-0.12l0.54,-1.18l0.29,-1.73l0.66,-0.85l0.94,-0.7l0.09,-0.11l0.3,-0.6Z", "name": "Venezuela"}, "AF": {"path": "M574.42,192.1l2.24,0.95l0.18,0.02l1.89,-0.38l0.22,-0.18l0.46,-1.14l1.82,-0.4l1.5,-0.91l0.14,-0.19l0.46,-2.12l1.93,-0.51l0.2,-0.18l0.26,-0.68l0.87,0.57l0.13,0.05l0.79,0.09l1.35,0.02l1.83,0.59l0.75,0.34l0.26,-0.01l1.66,-0.85l0.7,0.46l0.42,-0.09l0.72,-1.17l1.32,0.05l0.23,-0.1l0.39,-0.43l0.07,-0.14l0.24,-1.08l0.86,-0.81l0.94,0.46l-0.2,0.64l0.23,0.38l0.49,0.09l-0.21,2.15l0.09,0.25l0.99,0.94l0.38,0.03l0.83,-0.57l1.06,-0.27l0.12,-0.06l1.46,-1.21l1.63,0.2l2.4,0.0l0.17,0.32l-1.12,0.25l-1.23,0.52l-2.86,0.33l-2.69,0.6l-0.13,0.06l-1.46,1.25l-0.07,0.36l0.58,1.18l0.25,1.21l-1.13,1.08l-0.09,0.25l0.09,0.98l-0.53,0.79l-2.22,-0.08l-0.28,0.44l0.83,1.57l-1.3,0.58l-0.13,0.11l-1.06,1.69l-0.05,0.18l0.13,1.51l-0.73,0.58l-0.78,-0.22l-0.14,-0.01l-1.91,0.36l-0.23,0.19l-0.2,0.57l-1.65,-0.0l-0.22,0.1l-1.4,1.56l-0.08,0.19l-0.08,2.13l-2.99,1.05l-1.67,-0.23l-0.27,0.1l-0.39,0.46l-1.43,-0.31l-2.43,0.4l-3.69,-1.23l1.96,-2.15l0.08,-0.24l-0.21,-1.78l-0.23,-0.26l-1.69,-0.42l-0.19,-1.62l-0.77,-2.08l0.98,-1.41l-0.14,-0.45l-0.82,-0.31l0.6,-1.79l0.93,-3.21Z", "name": "Afghanistan"}, "IQ": {"path": "M534.42,190.89l0.13,0.14l1.5,0.78l0.15,1.34l-1.13,0.87l-0.11,0.16l-0.58,2.2l0.04,0.24l1.73,2.67l0.12,0.1l2.99,1.49l1.18,1.94l-0.39,1.89l0.29,0.36l0.5,-0.0l0.02,1.17l0.08,0.2l0.83,0.86l-2.36,-0.29l-0.29,0.13l-1.74,2.49l-4.4,-0.21l-7.03,-5.49l-3.73,-1.94l-2.92,-0.74l-0.89,-3.0l5.33,-2.81l0.15,-0.19l0.95,-3.43l-0.2,-2.0l1.19,-0.61l0.11,-0.09l1.23,-1.73l0.92,-0.38l2.75,0.35l0.81,0.68l0.31,0.05l0.94,-0.38l1.5,3.17Z", "name": "Iraq"}, "IS": {"path": "M384.26,87.96l-0.51,2.35l0.08,0.28l2.61,2.58l-2.99,2.83l-7.16,2.72l-2.08,0.7l-9.51,-1.71l1.89,-1.36l-0.07,-0.53l-4.4,-1.59l3.33,-0.59l0.25,-0.32l-0.11,-1.2l-0.25,-0.27l-4.82,-0.88l1.38,-2.2l3.54,-0.57l3.8,2.74l0.33,0.01l3.68,-2.18l3.02,1.12l0.25,-0.02l4.01,-2.18l3.72,0.27Z", "name": "Iceland"}, "IR": {"path": "M556.2,187.5l2.05,-0.52l0.13,-0.07l1.69,-1.57l1.55,0.08l0.15,-0.03l1.02,-0.5l1.64,0.25l2.82,1.48l1.91,0.3l2.8,2.49l0.18,0.08l1.61,0.09l0.19,2.09l-1.0,3.47l-0.69,2.04l0.18,0.38l0.73,0.28l-0.85,1.22l-0.04,0.28l0.81,2.19l0.19,1.72l0.23,0.26l1.69,0.42l0.17,1.43l-2.18,2.39l-0.01,0.4l1.22,1.42l1.0,1.62l0.12,0.11l2.23,1.11l0.06,2.2l0.2,0.27l1.03,0.38l0.14,0.83l-3.38,1.3l-0.18,0.19l-0.87,2.85l-4.44,-0.76l-2.75,-0.62l-2.64,-0.32l-1.01,-3.11l-0.17,-0.19l-1.2,-0.48l-0.18,-0.01l-1.99,0.51l-2.42,1.25l-2.89,-0.84l-2.48,-2.03l-2.41,-0.79l-1.61,-2.47l-1.84,-3.63l-0.36,-0.15l-1.22,0.4l-1.48,-0.84l-0.37,0.06l-0.72,0.82l-1.08,-1.12l-0.02,-1.35l-0.3,-0.29l-0.43,0.0l0.34,-1.64l-0.04,-0.22l-1.29,-2.11l-0.12,-0.11l-3.0,-1.49l-1.62,-2.49l0.52,-1.98l1.18,-0.92l0.11,-0.27l-0.19,-1.66l-0.16,-0.23l-1.55,-0.81l-1.58,-3.33l-1.3,-2.2l0.41,-0.75l0.03,-0.21l-0.73,-3.12l1.2,-0.59l0.35,0.9l1.26,1.35l0.15,0.09l1.81,0.39l0.91,-0.09l0.15,-0.06l2.9,-2.13l0.7,-0.16l0.48,0.56l-0.75,1.26l0.05,0.37l1.56,1.53l0.28,0.08l0.37,-0.09l0.7,1.89l0.21,0.19l2.31,0.59l1.69,1.4l0.15,0.07l3.66,0.49l3.91,-0.76l0.23,-0.19l0.19,-0.52Z", "name": "Iran"}, "AM": {"path": "M530.51,176.08l2.91,-0.39l0.41,0.63l0.11,0.1l0.66,0.36l-0.32,0.47l0.07,0.41l1.1,0.84l-0.53,0.7l0.06,0.42l1.06,0.8l1.01,0.44l0.04,1.56l-0.44,0.04l-0.88,-1.46l0.01,-0.37l-0.3,-0.31l-0.98,0.01l-0.65,-0.69l-0.26,-0.09l-0.38,0.06l-0.97,-0.82l-1.64,-0.65l0.2,-1.2l-0.02,-0.16l-0.28,-0.69Z", "name": "Armenia"}, "IT": {"path": "M451.68,158.58l0.2,0.16l3.3,0.75l-0.22,1.26l0.02,0.18l0.35,0.78l-1.4,-0.32l-0.21,0.03l-2.04,1.1l-0.16,0.29l0.13,1.47l-0.29,0.82l0.02,0.24l0.82,1.57l0.1,0.11l2.28,1.5l1.29,2.53l2.79,2.43l0.2,0.07l1.83,-0.02l0.31,0.34l-0.46,0.39l0.06,0.5l4.06,1.97l2.06,1.49l0.17,0.36l-0.24,0.53l-1.08,-1.07l-0.15,-0.08l-2.18,-0.49l-0.33,0.15l-1.05,1.91l0.11,0.4l1.63,0.98l-0.22,1.12l-0.84,0.14l-0.22,0.15l-1.27,2.38l-0.54,0.12l0.01,-0.47l0.48,-1.46l0.5,-0.58l0.03,-0.35l-0.97,-1.69l-0.76,-1.48l-0.17,-0.15l-0.94,-0.33l-0.68,-1.18l-0.16,-0.13l-1.53,-0.52l-1.03,-1.14l-0.19,-0.1l-1.78,-0.19l-1.88,-1.3l-2.27,-1.94l-1.64,-1.68l-0.76,-2.94l-0.21,-0.21l-1.22,-0.35l-2.01,-1.0l-0.24,-0.01l-1.15,0.42l-0.11,0.07l-1.38,1.36l-0.5,0.11l0.19,-0.87l-0.21,-0.35l-1.19,-0.34l-0.56,-2.06l0.76,-0.82l0.03,-0.36l-0.68,-1.08l0.04,-0.31l0.68,0.42l0.19,0.04l1.21,-0.15l0.14,-0.06l1.18,-0.89l0.25,0.29l0.25,0.1l1.19,-0.1l0.25,-0.18l0.45,-1.04l1.61,0.34l0.19,-0.02l1.1,-0.53l0.17,-0.22l0.15,-0.95l1.19,0.35l0.35,-0.16l0.23,-0.47l2.11,-0.47l0.45,0.89ZM459.35,184.63l-0.71,1.81l0.0,0.23l0.33,0.79l-0.37,1.03l-1.6,-0.91l-1.33,-0.34l-3.24,-1.36l0.23,-0.99l2.73,0.24l3.95,-0.5ZM443.95,175.91l1.26,1.77l-0.31,3.47l-0.82,-0.13l-0.26,0.08l-0.83,0.79l-0.64,-0.52l-0.1,-3.42l-0.44,-1.34l0.91,0.1l0.21,-0.06l1.01,-0.74Z", "name": "Italy"}, "VN": {"path": "M690.8,230.21l-2.86,1.93l-2.09,2.46l-0.06,0.11l-0.55,1.8l0.04,0.26l4.26,6.1l2.31,1.63l1.46,1.97l1.12,4.62l-0.32,4.3l-1.97,1.57l-2.85,1.62l-2.09,2.14l-2.83,2.13l-0.67,-1.19l0.65,-1.58l-0.09,-0.35l-1.47,-1.14l1.67,-0.79l2.57,-0.18l0.22,-0.47l-0.89,-1.24l3.88,-1.8l0.17,-0.24l0.31,-3.05l-0.01,-0.13l-0.56,-1.63l0.44,-2.48l-0.01,-0.15l-0.63,-1.81l-0.08,-0.12l-1.87,-1.77l-3.64,-5.3l-0.11,-0.1l-2.68,-1.39l0.45,-0.59l1.53,-0.65l0.16,-0.39l-0.97,-2.27l-0.27,-0.18l-2.89,-0.02l-1.04,-2.21l-1.28,-1.83l0.96,-0.46l1.97,0.01l2.43,-0.3l0.13,-0.05l1.95,-1.29l1.04,0.85l0.13,0.06l1.98,0.42l-0.32,1.21l0.09,0.3l1.19,1.07l0.12,0.07l1.88,0.51Z", "name": "Vietnam"}, "AR": {"path": "M258.11,341.34l1.4,1.81l0.51,-0.06l0.89,-1.94l2.51,0.1l0.36,0.49l4.6,4.31l0.15,0.08l1.99,0.39l3.01,1.93l2.5,1.01l0.28,0.91l-2.4,3.97l0.17,0.44l2.57,0.74l2.81,0.41l2.09,-0.44l0.14,-0.07l2.27,-2.06l0.09,-0.17l0.38,-2.2l0.88,-0.36l1.05,1.29l-0.04,1.88l-1.98,1.4l-1.72,1.13l-2.84,2.65l-3.34,3.73l-0.07,0.12l-0.63,2.22l-0.67,2.85l0.02,2.73l-0.47,0.54l-0.07,0.17l-0.36,3.28l0.12,0.27l3.03,2.32l-0.31,1.78l0.11,0.29l1.44,1.15l-0.11,1.17l-2.32,3.57l-3.59,1.51l-4.95,0.6l-2.72,-0.29l-0.32,0.38l0.5,1.67l-0.49,2.13l0.01,0.16l0.4,1.29l-1.27,0.88l-2.41,0.39l-2.33,-1.05l-0.31,0.04l-0.97,0.78l-0.11,0.27l0.35,2.98l0.16,0.23l1.69,0.91l0.31,-0.02l1.08,-0.75l0.46,0.96l-2.1,0.88l-2.01,1.89l-0.09,0.18l-0.36,3.05l-0.51,1.42l-2.16,0.01l-0.19,0.07l-1.96,1.59l-0.1,0.15l-0.72,2.34l0.08,0.31l2.46,2.31l0.13,0.07l2.09,0.56l-0.74,2.45l-2.86,1.75l-0.12,0.14l-1.59,3.71l-2.2,1.24l-0.1,0.09l-1.03,1.54l-0.04,0.23l0.81,3.45l0.06,0.13l1.13,1.32l-2.59,-0.57l-5.89,-0.44l-0.92,-1.73l0.05,-2.4l-0.34,-0.3l-1.49,0.19l-0.72,-0.98l-0.2,-3.21l1.79,-1.33l0.1,-0.13l0.79,-2.04l0.02,-0.16l-0.27,-1.52l1.31,-2.69l0.91,-4.15l-0.23,-1.72l0.91,-0.49l0.15,-0.33l-0.27,-1.16l-0.15,-0.2l-0.87,-0.46l0.65,-1.01l-0.04,-0.37l-1.06,-1.09l-0.54,-3.2l0.83,-0.51l0.14,-0.29l-0.42,-3.6l0.58,-2.98l0.64,-2.5l1.41,-1.0l0.12,-0.32l-0.75,-2.8l-0.01,-2.48l1.81,-1.78l0.09,-0.22l-0.06,-2.3l1.39,-2.69l0.03,-0.14l0.01,-2.58l-0.11,-0.24l-0.57,-0.45l-1.1,-4.59l1.49,-2.73l0.04,-0.17l-0.23,-2.59l0.86,-2.38l1.6,-2.48l1.74,-1.65l0.04,-0.39l-0.64,-0.89l0.42,-0.7l0.04,-0.16l-0.08,-4.26l2.55,-1.23l0.16,-0.18l0.86,-2.75l-0.01,-0.22l-0.22,-0.48l1.84,-2.1l3.0,0.59ZM256.77,438.98l-2.1,0.15l-1.18,-1.14l-0.19,-0.08l-1.53,-0.09l-2.38,-0.0l-0.0,-6.28l0.4,0.65l1.25,2.55l0.11,0.12l3.26,2.07l3.19,0.8l-0.82,1.26Z", "name": "Argentina"}, "AU": {"path": "M705.55,353.06l0.09,0.09l0.37,0.05l0.13,-0.35l-0.57,-1.69l0.48,0.3l0.71,0.99l0.34,0.11l0.2,-0.29l-0.04,-1.37l-0.04,-0.14l-1.22,-2.07l-0.28,-0.9l-0.51,-0.69l0.24,-1.33l0.52,-0.7l0.34,-1.32l0.01,-0.13l-0.25,-1.44l0.51,-0.94l0.1,1.03l0.23,0.26l0.32,-0.14l1.01,-1.72l1.94,-0.84l1.27,-1.14l1.84,-0.92l1.0,-0.18l0.6,0.28l0.26,-0.0l1.94,-0.96l1.48,-0.28l0.19,-0.13l0.32,-0.49l0.51,-0.18l1.42,0.05l2.63,-0.76l0.11,-0.06l1.36,-1.15l0.08,-0.1l0.61,-1.33l1.42,-1.27l0.1,-0.19l0.11,-1.03l0.06,-1.32l1.39,-1.74l0.85,1.79l0.4,0.14l1.07,-0.51l0.11,-0.45l-0.77,-1.05l0.53,-0.84l0.86,0.43l0.43,-0.22l0.29,-1.85l1.29,-1.19l0.6,-0.98l1.16,-0.4l0.2,-0.27l0.02,-0.34l0.74,0.2l0.38,-0.27l0.03,-0.44l1.98,-0.61l1.7,1.08l1.36,1.48l0.22,0.1l1.55,0.02l1.57,0.24l0.33,-0.4l-0.48,-1.27l1.09,-1.86l1.06,-0.63l0.1,-0.42l-0.28,-0.46l0.93,-1.24l1.36,-0.8l1.16,0.27l0.14,0.0l2.1,-0.48l0.23,-0.3l-0.05,-1.3l-0.18,-0.26l-1.08,-0.49l0.44,-0.12l1.52,0.58l1.39,1.06l2.11,0.65l0.19,-0.0l0.59,-0.21l1.44,0.72l0.27,0.0l1.37,-0.68l0.84,0.2l0.26,-0.06l0.37,-0.3l0.82,0.89l-0.56,1.14l-0.84,0.91l-0.75,0.07l-0.26,0.38l0.26,0.9l-0.67,1.15l-0.88,1.24l-0.05,0.25l0.18,0.72l0.12,0.17l1.99,1.42l1.96,0.84l1.25,0.86l1.8,1.51l0.19,0.07l0.63,-0.0l1.15,0.58l0.34,0.7l0.17,0.15l2.39,0.88l0.24,-0.02l1.65,-0.88l0.14,-0.16l0.49,-1.37l0.52,-1.19l0.31,-1.39l0.75,-2.02l0.01,-0.19l-0.33,-1.16l0.16,-0.67l0.0,-0.13l-0.28,-1.41l0.3,-1.78l0.42,-0.45l0.05,-0.33l-0.33,-0.73l0.56,-1.25l0.48,-1.39l0.07,-0.69l0.58,-0.59l0.48,0.84l0.17,1.53l0.17,0.24l0.47,0.23l0.09,0.9l0.05,0.14l0.87,1.23l0.17,1.33l-0.09,0.89l0.03,0.15l0.9,2.0l0.43,0.13l1.38,-0.83l0.71,0.92l1.06,0.88l-0.22,0.96l0.0,0.14l0.53,2.2l0.38,1.3l0.15,0.18l0.52,0.26l0.62,2.01l-0.23,1.27l0.02,0.18l0.81,1.76l0.14,0.14l2.69,1.35l3.21,2.21l-0.2,0.4l0.04,0.34l1.39,1.6l0.95,2.78l0.43,0.16l0.79,-0.46l0.85,0.96l0.39,0.05l0.22,-0.15l0.36,2.33l0.09,0.18l1.78,1.63l1.16,1.01l1.9,2.1l0.67,2.05l0.06,1.47l-0.17,1.64l0.03,0.17l1.16,2.22l-0.14,2.28l-0.43,1.24l-0.68,2.44l0.04,1.63l-0.48,1.92l-1.06,2.43l-1.79,1.32l-0.1,0.12l-0.91,2.15l-0.82,1.37l-0.76,2.47l-0.98,1.46l-0.63,2.14l-0.33,2.02l0.1,0.82l-1.21,0.85l-2.71,0.1l-0.13,0.03l-2.31,1.19l-1.21,1.17l-1.34,1.11l-1.89,-1.18l-1.33,-0.46l0.32,-1.24l-0.4,-0.35l-1.46,0.61l-2.06,1.98l-1.99,-0.73l-1.43,-0.46l-1.45,-0.22l-2.32,-0.81l-1.51,-1.67l-0.45,-2.11l-0.6,-1.5l-0.07,-0.11l-1.23,-1.16l-0.16,-0.08l-1.96,-0.28l0.59,-0.99l0.03,-0.24l-0.61,-2.1l-0.54,-0.08l-1.16,1.85l-1.23,0.29l0.73,-0.88l0.06,-0.12l0.37,-1.57l0.93,-1.33l0.05,-0.2l-0.2,-2.07l-0.53,-0.17l-2.01,2.35l-1.52,0.94l-0.12,0.14l-0.82,1.93l-1.5,-0.9l0.07,-1.32l-0.06,-0.2l-1.57,-2.04l-1.15,-0.92l0.3,-0.41l-0.1,-0.44l-3.21,-1.69l-0.13,-0.03l-1.69,-0.08l-2.35,-1.31l-0.16,-0.04l-4.55,0.27l-3.24,0.99l-2.8,0.91l-2.33,-0.18l-0.17,0.03l-2.63,1.41l-2.14,0.64l-0.2,0.19l-0.47,1.42l-0.8,0.99l-1.99,0.06l-1.55,0.24l-2.27,-0.5l-1.79,0.3l-1.71,0.13l-0.19,0.09l-1.38,1.39l-0.58,-0.1l-0.21,0.04l-1.26,0.8l-1.13,0.85l-1.72,-0.1l-1.6,-0.0l-2.58,-1.76l-1.21,-0.49l0.04,-1.19l1.04,-0.32l0.16,-0.12l0.42,-0.64l0.05,-0.19l-0.09,-0.97l0.3,-2.0l-0.28,-1.64l-1.34,-2.84l-0.39,-1.49l0.1,-1.51l-0.04,-0.17l-0.96,-1.72l-0.06,-0.73l-0.09,-0.19l-1.04,-1.01l-0.3,-2.02l-0.05,-0.12l-1.23,-1.83ZM784.95,393.35l2.39,1.01l0.2,0.01l3.26,-0.96l1.19,0.16l0.16,3.19l-0.78,0.95l-0.07,0.16l-0.19,1.83l-0.43,-0.41l-0.44,0.03l-1.61,1.96l-0.4,-0.12l-1.38,-0.09l-1.43,-2.42l-0.37,-2.03l-1.4,-2.53l0.04,-0.94l1.27,0.2Z", "name": "Australia"}, "IL": {"path": "M509.04,199.22l0.71,0.0l0.27,-0.17l0.15,-0.33l0.19,-0.01l0.02,0.73l-0.27,0.34l0.02,0.08l-0.32,0.62l-0.65,-0.27l-0.41,0.19l-0.52,1.85l0.16,0.35l0.14,0.07l-0.17,0.1l-0.14,0.21l-0.11,0.73l0.39,0.33l0.81,-0.26l0.03,0.64l-0.97,3.43l-1.28,-3.67l0.62,-0.78l-0.03,-0.41l0.58,-1.16l0.5,-2.07l0.27,-0.54Z", "name": "Israel"}, "IN": {"path": "M615.84,192.58l2.4,2.97l-0.24,2.17l0.05,0.2l0.94,1.35l-0.06,0.97l-1.46,-0.3l-0.35,0.36l0.7,3.06l0.12,0.18l2.46,1.75l3.11,1.72l-1.23,0.96l-0.1,0.13l-0.97,2.55l0.16,0.38l2.41,1.02l2.37,1.33l3.27,1.52l3.43,0.37l1.37,1.3l0.17,0.08l1.92,0.25l3.0,0.62l2.15,-0.04l0.28,-0.22l0.29,-1.06l0.0,-0.13l-0.32,-1.66l0.16,-0.94l1.0,-0.37l0.23,2.28l0.18,0.24l2.28,1.02l0.2,0.02l1.52,-0.41l2.06,0.18l2.08,-0.08l0.29,-0.27l0.18,-1.66l-0.1,-0.26l-0.53,-0.44l1.38,-0.23l0.15,-0.07l2.26,-2.0l2.75,-1.65l1.97,0.63l0.25,-0.03l1.54,-0.99l0.89,1.28l-0.72,0.97l0.2,0.48l2.49,0.37l0.11,0.61l-0.69,0.39l-0.15,0.3l0.15,1.22l-1.36,-0.37l-0.23,0.03l-3.24,1.86l-0.15,0.28l0.07,1.44l-1.33,2.16l-0.04,0.13l-0.12,1.24l-0.98,1.91l-1.72,-0.53l-0.39,0.28l-0.09,2.66l-0.52,0.83l-0.04,0.23l0.21,0.89l-0.71,0.36l-1.21,-3.85l-0.29,-0.21l-0.69,0.01l-0.29,0.23l-0.28,1.17l-0.84,-0.84l0.6,-1.17l0.97,-0.13l0.23,-0.16l1.15,-2.25l-0.18,-0.42l-1.54,-0.47l-2.3,0.04l-2.13,-0.33l-0.19,-1.63l-0.26,-0.26l-1.13,-0.13l-1.93,-1.13l-0.42,0.13l-0.88,1.82l0.08,0.37l1.47,1.15l-1.21,0.77l-0.1,0.1l-0.56,0.97l0.13,0.42l1.31,0.61l-0.36,1.35l0.01,0.2l0.85,1.95l0.37,2.05l-0.26,0.68l-1.55,-0.02l-3.09,0.54l-0.25,0.32l0.13,1.84l-1.21,1.4l-3.64,1.79l-2.79,3.04l-1.86,1.61l-2.48,1.68l-0.13,0.25l-0.0,1.0l-1.07,0.55l-2.21,0.9l-1.13,0.13l-0.25,0.19l-0.75,1.96l-0.02,0.15l0.52,3.31l0.13,2.03l-1.03,2.35l-0.03,0.12l-0.01,4.03l-1.02,0.1l-0.23,0.15l-1.14,1.93l0.04,0.36l0.44,0.48l-1.83,0.57l-0.18,0.15l-0.81,1.65l-0.74,0.53l-2.14,-2.12l-1.14,-3.47l-0.96,-2.57l-0.9,-1.26l-1.3,-2.38l-0.61,-3.14l-0.44,-1.62l-2.29,-3.56l-1.03,-4.94l-0.74,-3.29l0.01,-3.12l-0.49,-2.51l-0.41,-0.22l-3.56,1.53l-1.59,-0.28l-2.96,-2.87l0.94,-0.74l0.06,-0.41l-0.74,-1.03l-2.73,-2.1l1.35,-1.43l5.38,0.01l0.29,-0.36l-0.5,-2.29l-0.09,-0.15l-1.33,-1.28l-0.27,-1.96l-0.12,-0.2l-1.36,-1.0l2.42,-2.48l2.77,0.2l0.24,-0.1l2.62,-2.85l1.59,-2.8l2.41,-2.74l0.07,-0.2l-0.04,-1.82l2.01,-1.51l-0.01,-0.49l-1.95,-1.33l-0.83,-1.81l-0.82,-2.27l0.98,-0.97l3.64,0.66l2.89,-0.42l0.17,-0.08l2.18,-2.15Z", "name": "India"}, "TZ": {"path": "M505.77,287.58l0.36,0.23l8.95,5.03l0.15,1.3l0.13,0.21l3.4,2.37l-1.07,2.88l-0.02,0.14l0.15,1.42l0.15,0.23l1.47,0.84l0.05,0.42l-0.66,1.44l-0.02,0.18l0.13,0.72l-0.16,1.16l0.03,0.19l0.87,1.57l1.03,2.48l0.12,0.14l0.53,0.32l-1.59,1.18l-2.64,0.95l-1.45,-0.04l-0.2,0.07l-0.81,0.69l-1.64,0.06l-0.68,0.3l-2.9,-0.69l-1.71,0.17l-0.65,-3.18l-0.05,-0.12l-1.35,-1.88l-0.19,-0.12l-2.41,-0.46l-1.38,-0.74l-1.63,-0.44l-0.96,-0.41l-0.95,-0.58l-1.31,-3.09l-1.47,-1.46l-0.45,-1.31l0.24,-1.34l-0.39,-1.99l0.71,-0.08l0.18,-0.09l0.91,-0.91l0.98,-1.31l0.59,-0.5l0.11,-0.24l-0.02,-0.81l-0.08,-0.2l-0.47,-0.5l-0.1,-0.67l0.51,-0.23l0.18,-0.25l0.14,-1.47l-0.05,-0.2l-0.76,-1.09l0.45,-0.15l2.71,0.03l5.01,-0.19Z", "name": "Tanzania"}, "AZ": {"path": "M539.36,175.66l0.16,0.09l1.11,0.2l0.32,-0.15l0.4,-0.71l1.22,-0.99l1.11,1.33l1.26,2.09l0.22,0.14l1.06,0.13l0.28,0.29l-1.46,0.17l-0.26,0.24l-0.43,2.26l-0.39,0.92l-0.85,0.63l-0.12,0.25l0.06,1.2l-0.22,0.05l-1.28,-1.25l0.74,-1.25l-0.03,-0.35l-0.74,-0.86l-0.3,-0.1l-1.05,0.27l-2.49,1.82l-0.04,-1.46l-0.18,-0.27l-1.09,-0.47l-0.8,-0.6l0.53,-0.7l-0.06,-0.42l-1.11,-0.84l0.34,-0.51l-0.11,-0.43l-0.89,-0.48l-0.33,-0.49l0.25,-0.2l1.78,0.81l1.35,0.18l0.25,-0.09l0.34,-0.35l0.02,-0.39l-1.04,-1.36l0.28,-0.18l0.49,0.07l1.65,1.74ZM533.53,180.16l0.63,0.67l0.22,0.09l0.8,-0.0l0.04,0.31l0.66,1.09l-0.94,-0.21l-1.16,-1.24l-0.25,-0.71Z", "name": "Azerbaijan"}, "IE": {"path": "M405.17,135.35l0.36,2.16l-1.78,2.84l-4.28,1.91l-3.02,-0.43l1.81,-3.13l0.02,-0.26l-1.23,-3.26l3.24,-2.56l1.54,-1.32l0.37,1.33l-0.49,1.77l0.3,0.38l1.49,-0.05l1.68,0.63Z", "name": "Ireland"}, "ID": {"path": "M756.56,287.86l0.69,4.02l0.15,0.21l2.59,1.5l0.39,-0.07l2.05,-2.61l2.75,-1.45l2.09,-0.0l2.08,0.85l1.85,0.89l2.52,0.46l0.08,15.44l-1.72,-1.6l-0.15,-0.07l-2.54,-0.51l-0.29,0.1l-0.53,0.62l-2.53,0.06l0.78,-1.51l1.48,-0.66l0.17,-0.34l-0.65,-2.74l-1.23,-2.19l-0.14,-0.13l-4.85,-2.13l-2.09,-0.23l-3.7,-2.28l-0.41,0.1l-0.67,1.11l-0.63,0.14l-0.41,-0.67l-0.01,-1.01l-0.14,-0.25l-1.39,-0.89l2.05,-0.69l1.73,0.05l0.29,-0.39l-0.21,-0.66l-0.29,-0.21l-3.5,-0.0l-0.9,-1.36l-0.19,-0.13l-2.14,-0.44l-0.65,-0.76l2.86,-0.51l1.28,-0.79l3.75,0.96l0.32,0.76ZM758.01,300.37l-0.79,1.04l-0.14,-1.07l0.4,-0.81l0.29,-0.47l0.24,0.31l-0.0,1.0ZM747.45,292.9l0.48,1.02l-1.45,-0.69l-2.09,-0.21l-1.45,0.16l-1.28,-0.07l0.35,-0.81l2.86,-0.1l2.58,0.68ZM741.15,285.69l-0.16,-0.25l-0.72,-3.08l0.47,-1.86l0.35,-0.38l0.1,0.73l0.25,0.26l1.28,0.19l0.18,0.78l-0.11,1.8l-0.96,-0.18l-0.35,0.22l-0.38,1.52l0.05,0.24ZM741.19,285.75l0.76,0.97l-0.11,0.05l-0.65,-1.02ZM739.18,293.52l-0.61,0.54l-1.44,-0.38l-0.25,-0.55l1.93,-0.09l0.36,0.48ZM728.4,295.87l-0.27,-0.07l-2.26,0.89l-0.37,-0.41l0.27,-0.8l-0.09,-0.33l-1.68,-1.37l0.17,-2.29l-0.42,-0.3l-1.67,0.76l-0.17,0.29l0.21,2.92l0.09,3.34l-1.22,0.28l-0.78,-0.54l0.65,-2.1l0.01,-0.14l-0.39,-2.42l-0.29,-0.25l-0.86,-0.02l-0.63,-1.4l0.99,-1.61l0.35,-1.97l1.24,-3.73l0.49,-0.96l1.95,-1.7l1.86,0.69l3.16,0.35l2.92,-0.1l0.17,-0.06l2.24,-1.65l0.11,0.14l-1.8,2.22l-1.72,0.44l-2.41,-0.48l-4.21,0.13l-2.19,0.36l-0.25,0.24l-0.36,1.9l0.08,0.27l2.24,2.23l0.4,0.02l1.29,-1.08l3.19,-0.58l-0.19,0.06l-1.04,1.4l-2.13,0.94l-0.12,0.45l2.26,3.06l-0.37,0.69l0.03,0.32l1.51,1.95ZM728.48,295.97l0.59,0.76l-0.02,1.37l-1.0,0.55l-0.64,-0.58l1.09,-1.84l-0.02,-0.26ZM728.64,286.95l0.79,-0.14l-0.07,0.39l-0.72,-0.24ZM732.38,310.1l-1.89,0.49l-0.06,-0.06l0.17,-0.64l1.0,-1.42l2.14,-0.87l0.1,0.2l0.04,0.58l-1.49,1.72ZM728.26,305.71l-0.17,0.63l-3.53,0.67l-3.02,-0.28l-0.0,-0.42l1.66,-0.44l1.47,0.71l0.16,0.03l1.75,-0.21l1.69,-0.69ZM722.98,310.33l-0.74,0.03l-2.52,-1.35l1.42,-0.3l1.19,0.7l0.72,0.63l-0.06,0.28ZM716.24,305.63l0.66,0.49l0.22,0.06l1.35,-0.18l0.31,0.53l-4.18,0.77l-0.8,-0.01l0.51,-0.86l1.2,-0.02l0.24,-0.12l0.49,-0.65ZM715.84,280.21l0.09,0.34l2.25,1.86l-2.25,0.22l-0.24,0.17l-0.84,1.71l-0.03,0.15l0.1,2.11l-2.27,1.62l-0.13,0.24l-0.06,2.46l-0.74,2.92l-0.02,-0.05l-0.39,-0.16l-2.62,1.04l-0.86,-1.33l-0.23,-0.14l-1.71,-0.14l-1.19,-0.76l-0.25,-0.03l-2.78,0.84l-0.79,-1.05l-0.26,-0.12l-1.61,0.13l-1.8,-0.25l-0.36,-3.13l-0.15,-0.23l-1.18,-0.65l-1.13,-2.02l-0.33,-2.1l0.27,-2.19l1.05,-1.17l0.28,1.12l0.1,0.16l1.71,1.41l0.28,0.05l1.55,-0.49l1.54,0.17l0.23,-0.07l1.4,-1.21l1.05,-0.19l2.3,0.68l0.16,0.0l2.04,-0.53l0.21,-0.19l1.26,-3.41l0.91,-0.82l0.09,-0.14l0.8,-2.64l2.63,0.0l1.71,0.33l-1.19,1.89l0.02,0.34l1.74,2.24l-0.37,1.0ZM692.67,302.0l0.26,0.19l4.8,0.25l0.28,-0.16l0.44,-0.83l4.29,1.12l0.85,1.52l0.23,0.15l3.71,0.45l2.37,1.15l-2.06,0.69l-2.77,-1.0l-2.25,0.07l-2.57,-0.18l-2.31,-0.45l-2.94,-0.97l-1.84,-0.25l-0.13,0.01l-0.97,0.29l-4.34,-0.98l-0.38,-0.94l-0.25,-0.19l-1.76,-0.14l1.31,-1.84l2.81,0.14l1.97,0.96l0.95,0.19l0.28,0.74ZM685.63,299.27l-2.36,0.04l-2.07,-2.05l-3.17,-2.02l-1.06,-1.5l-1.88,-2.02l-1.22,-1.85l-1.9,-3.49l-2.2,-2.11l-0.71,-2.08l-0.94,-1.99l-0.1,-0.12l-2.21,-1.54l-1.35,-2.17l-1.86,-1.39l-2.53,-2.68l-0.14,-0.81l1.22,0.08l3.76,0.47l2.16,2.4l1.94,1.7l1.37,1.04l2.35,2.67l0.22,0.1l2.44,0.04l1.99,1.62l1.42,2.06l0.09,0.09l1.67,1.0l-0.88,1.8l0.11,0.39l1.44,0.87l0.13,0.04l0.68,0.05l0.41,1.62l0.87,1.4l0.22,0.14l1.71,0.21l1.06,1.38l-0.61,3.04l-0.09,3.6Z", "name": "Indonesia"}, "UA": {"path": "M500.54,141.42l0.9,0.13l0.27,-0.11l0.52,-0.62l0.68,0.13l2.43,-0.3l1.32,1.57l-0.45,0.48l-0.07,0.26l0.21,1.03l0.27,0.24l1.85,0.15l0.76,1.22l-0.05,0.55l0.2,0.31l3.18,1.15l0.18,0.01l1.75,-0.47l1.42,1.41l0.22,0.09l1.42,-0.03l3.44,0.99l0.02,0.65l-0.97,1.62l-0.03,0.24l0.52,1.67l-0.29,0.79l-2.24,0.22l-0.14,0.05l-1.29,0.89l-0.13,0.23l-0.07,1.16l-1.75,0.22l-0.12,0.04l-1.6,0.98l-2.27,0.16l-0.12,0.04l-2.16,1.17l-0.16,0.29l0.15,1.94l0.14,0.23l1.23,0.75l0.18,0.04l2.06,-0.15l-0.22,0.51l-2.67,0.54l-3.27,1.72l-1.0,-0.45l0.45,-1.19l-0.19,-0.39l-2.34,-0.78l0.15,-0.2l2.32,-1.0l0.09,-0.49l-0.73,-0.72l-0.15,-0.08l-3.69,-0.75l-0.14,-0.96l-0.35,-0.25l-2.32,0.39l-0.21,0.15l-0.91,1.7l-1.77,2.1l-0.93,-0.44l-0.24,-0.0l-1.05,0.45l-0.48,-0.25l0.13,-0.07l0.14,-0.15l0.43,-1.04l0.67,-0.97l0.04,-0.26l-0.1,-0.31l0.04,-0.02l0.11,0.19l0.24,0.15l1.48,0.09l0.78,-0.25l0.07,-0.53l-0.27,-0.19l0.09,-0.25l-0.08,-0.33l-0.81,-0.74l-0.34,-1.24l-0.14,-0.18l-0.73,-0.42l0.15,-0.87l-0.11,-0.29l-1.13,-0.86l-0.15,-0.06l-0.97,-0.11l-1.79,-0.97l-0.2,-0.03l-1.66,0.32l-0.13,0.06l-0.52,0.41l-0.95,-0.0l-0.23,0.11l-0.56,0.66l-1.74,0.29l-0.79,0.43l-1.01,-0.68l-0.16,-0.05l-1.57,-0.01l-1.52,-0.35l-0.23,0.04l-0.71,0.45l-0.09,-0.43l-0.13,-0.19l-1.18,-0.74l0.38,-1.02l0.53,-0.64l0.35,0.12l0.37,-0.41l-0.57,-1.29l2.1,-2.5l1.16,-0.36l0.2,-0.2l0.27,-0.92l-0.01,-0.2l-1.1,-2.52l0.79,-0.09l0.13,-0.05l1.3,-0.86l1.83,-0.07l2.48,0.26l2.84,0.8l1.91,0.06l0.88,0.45l0.29,-0.01l0.72,-0.44l0.49,0.58l0.25,0.11l2.2,-0.16l0.94,0.3l0.39,-0.26l0.15,-1.57l0.61,-0.59l2.01,-0.19Z", "name": "Ukraine"}, "QA": {"path": "M548.47,221.47l-0.15,-1.72l0.59,-1.23l0.38,-0.16l0.54,0.6l0.04,1.4l-0.47,1.37l-0.41,0.11l-0.53,-0.37Z", "name": "Qatar"}, "MZ": {"path": "M507.71,314.14l1.65,-0.18l2.96,0.7l0.2,-0.02l0.6,-0.29l1.68,-0.06l0.18,-0.07l0.8,-0.69l1.5,0.02l2.74,-0.98l1.74,-1.27l0.25,0.7l-0.1,2.47l0.31,2.27l0.1,3.97l0.42,1.24l-0.7,1.71l-0.94,1.73l-1.52,1.52l-5.06,2.21l-2.88,2.8l-1.01,0.51l-1.72,1.81l-0.99,0.58l-0.15,0.23l-0.21,1.86l0.04,0.19l1.17,1.95l0.47,1.47l0.03,0.74l0.39,0.28l0.05,-0.01l-0.06,2.13l-0.39,1.19l0.1,0.33l0.42,0.32l-0.28,0.83l-0.95,0.86l-2.03,0.88l-3.08,1.49l-1.1,0.99l-0.09,0.28l0.21,1.13l0.21,0.23l0.38,0.11l-0.14,0.89l-1.39,-0.02l-0.17,-0.94l-0.38,-1.23l-0.2,-0.89l0.44,-2.91l-0.01,-0.14l-0.65,-1.88l-1.15,-3.55l2.52,-2.85l0.68,-1.89l0.29,-0.18l0.14,-0.2l0.28,-1.53l-0.03,-0.19l-0.36,-0.7l0.1,-1.83l0.49,-1.84l-0.01,-3.26l-0.14,-0.25l-1.3,-0.83l-0.11,-0.04l-1.08,-0.17l-0.47,-0.55l-0.1,-0.08l-1.16,-0.54l-0.13,-0.03l-1.83,0.04l-0.32,-2.25l7.19,-1.99l1.32,1.12l0.29,0.06l0.55,-0.19l0.75,0.49l0.11,0.81l-0.49,1.11l-0.02,0.15l0.19,1.81l0.09,0.18l1.63,1.59l0.48,-0.1l0.72,-1.68l0.99,-0.49l0.17,-0.29l-0.21,-3.29l-0.04,-0.13l-1.11,-1.92l-0.9,-0.82l-0.21,-0.08l-0.62,0.03l-0.63,-2.98l0.61,-1.67Z", "name": "Mozambique"}}, "height": 440.7063107441331, "projection": {"type": "mill", "centralMeridian": 11.5}, "width": 900.0});

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * jquery.flot.tooltip
	 * 
	 * description: easy-to-use tooltips for Flot charts
	 * version: 0.8.4
	 * authors: Krzysztof Urbas @krzysu [myviews.pl],Evan Steinkerchner @Roundaround
	 * website: https://github.com/krzysu/flot.tooltip
	 * 
	 * build on 2014-08-04
	 * released under MIT License, 2012
	*/ 
	(function ($) {
	    // plugin options, default values
	    var defaultOptions = {
	        tooltip: false,
	        tooltipOpts: {
	            id: "flotTip",
	            content: "%s | X: %x | Y: %y",
	            // allowed templates are:
	            // %s -> series label,
	            // %lx -> x axis label (requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels),
	            // %ly -> y axis label (requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels),
	            // %x -> X value,
	            // %y -> Y value,
	            // %x.2 -> precision of X value,
	            // %p -> percent
	            xDateFormat: null,
	            yDateFormat: null,
	            monthNames: null,
	            dayNames: null,
	            shifts: {
	                x: 10,
	                y: 20
	            },
	            defaultTheme: true,
	            lines: {
	                track: false,
	                threshold: 0.05
	            },

	            // callbacks
	            onHover: function (flotItem, $tooltipEl) {},

	            $compat: false
	        }
	    };

	    // object
	    var FlotTooltip = function (plot) {
	        // variables
	        this.tipPosition = {x: 0, y: 0};

	        this.init(plot);
	    };

	    // main plugin function
	    FlotTooltip.prototype.init = function (plot) {
	        var that = this;

	        // detect other flot plugins
	        var plotPluginsLength = $.plot.plugins.length;
	        this.plotPlugins = [];

	        if (plotPluginsLength) {
	            for (var p = 0; p < plotPluginsLength; p++) {
	                this.plotPlugins.push($.plot.plugins[p].name);
	            }
	        }

	        plot.hooks.bindEvents.push(function (plot, eventHolder) {

	            // get plot options
	            that.plotOptions = plot.getOptions();

	            // if not enabled return
	            if (that.plotOptions.tooltip === false || typeof that.plotOptions.tooltip === 'undefined') return;

	            // shortcut to access tooltip options
	            that.tooltipOptions = that.plotOptions.tooltipOpts;

	            if (that.tooltipOptions.$compat) {
	                that.wfunc = 'width';
	                that.hfunc = 'height';
	            } else {
	                that.wfunc = 'innerWidth';
	                that.hfunc = 'innerHeight';
	            }

	            // create tooltip DOM element
	            var $tip = that.getDomElement();

	            // bind event
	            $( plot.getPlaceholder() ).bind("plothover", plothover);

	            $(eventHolder).bind('mousemove', mouseMove);
	        });

	        plot.hooks.shutdown.push(function (plot, eventHolder){
	            $(plot.getPlaceholder()).unbind("plothover", plothover);
	            $(eventHolder).unbind("mousemove", mouseMove);
	        });

	        function mouseMove(e){
	            var pos = {};
	            pos.x = e.pageX;
	            pos.y = e.pageY;
	            plot.setTooltipPosition(pos);
	        }

	        function plothover(event, pos, item) {
	            // Simple distance formula.
	            var lineDistance = function (p1x, p1y, p2x, p2y) {
	                return Math.sqrt((p2x - p1x) * (p2x - p1x) + (p2y - p1y) * (p2y - p1y));
	            };

	            // Here is some voodoo magic for determining the distance to a line form a given point {x, y}.
	            var dotLineLength = function (x, y, x0, y0, x1, y1, o) {
	                if (o && !(o =
	                    function (x, y, x0, y0, x1, y1) {
	                        if (typeof x0 !== 'undefined') return { x: x0, y: y };
	                        else if (typeof y0 !== 'undefined') return { x: x, y: y0 };

	                        var left,
	                            tg = -1 / ((y1 - y0) / (x1 - x0));

	                        return {
	                            x: left = (x1 * (x * tg - y + y0) + x0 * (x * -tg + y - y1)) / (tg * (x1 - x0) + y0 - y1),
	                            y: tg * left - tg * x + y
	                        };
	                    } (x, y, x0, y0, x1, y1),
	                    o.x >= Math.min(x0, x1) && o.x <= Math.max(x0, x1) && o.y >= Math.min(y0, y1) && o.y <= Math.max(y0, y1))
	                ) {
	                    var l1 = lineDistance(x, y, x0, y0), l2 = lineDistance(x, y, x1, y1);
	                    return l1 > l2 ? l2 : l1;
	                } else {
	                    var a = y0 - y1, b = x1 - x0, c = x0 * y1 - y0 * x1;
	                    return Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
	                }
	            };

	            if (item) {
	                plot.showTooltip(item, pos);
	            } else if (that.plotOptions.series.lines.show && that.tooltipOptions.lines.track === true) {
	                var closestTrace = {
	                    distance: -1
	                };

	                $.each(plot.getData(), function (i, series) {
	                    var xBeforeIndex = 0,
	                        xAfterIndex = -1;

	                    // Our search here assumes our data is sorted via the x-axis.
	                    // TODO: Improve efficiency somehow - search smaller sets of data.
	                    for (var j = 1; j < series.data.length; j++) {
	                        if (series.data[j - 1][0] <= pos.x && series.data[j][0] >= pos.x) {
	                            xBeforeIndex = j - 1;
	                            xAfterIndex = j;
	                        }
	                    }

	                    if (xAfterIndex === -1) {
	                        plot.hideTooltip();
	                        return;
	                    }

	                    var pointPrev = { x: series.data[xBeforeIndex][0], y: series.data[xBeforeIndex][1] },
	                        pointNext = { x: series.data[xAfterIndex][0], y: series.data[xAfterIndex][1] };

	                    var distToLine = dotLineLength(pos.x, pos.y, pointPrev.x, pointPrev.y, pointNext.x, pointNext.y, false);

	                    if (distToLine < that.tooltipOptions.lines.threshold) {

	                        var closestIndex = lineDistance(pointPrev.x, pointPrev.y, pos.x, pos.y) <
	                            lineDistance(pos.x, pos.y, pointNext.x, pointNext.y) ? xBeforeIndex : xAfterIndex;

	                        var pointSize = series.datapoints.pointsize;

	                        // Calculate the point on the line vertically closest to our cursor.
	                        var pointOnLine = [
	                            pos.x,
	                            pointPrev.y + ((pointNext.y - pointPrev.y) * ((pos.x - pointPrev.x) / (pointNext.x - pointPrev.x)))
	                        ];

	                        var item = {
	                            datapoint: pointOnLine,
	                            dataIndex: closestIndex,
	                            series: series,
	                            seriesIndex: i
	                        };

	                        if (closestTrace.distance === -1 || distToLine < closestTrace.distance) {
	                            closestTrace = {
	                                distance: distToLine,
	                                item: item
	                            };
	                        }
	                    }
	                });

	                if (closestTrace.distance !== -1)
	                    plot.showTooltip(closestTrace.item, pos);
	                else
	                    plot.hideTooltip();
	            } else {
	                plot.hideTooltip();
	            }
	        }

		    // Quick little function for setting the tooltip position.
		    plot.setTooltipPosition = function (pos) {
		        var $tip = that.getDomElement();

		        var totalTipWidth = $tip.outerWidth() + that.tooltipOptions.shifts.x;
		        var totalTipHeight = $tip.outerHeight() + that.tooltipOptions.shifts.y;
		        if ((pos.x - $(window).scrollLeft()) > ($(window)[that.wfunc]() - totalTipWidth)) {
		            pos.x -= totalTipWidth;
		        }
		        if ((pos.y - $(window).scrollTop()) > ($(window)[that.hfunc]() - totalTipHeight)) {
		            pos.y -= totalTipHeight;
		        }
		        that.tipPosition.x = pos.x;
		        that.tipPosition.y = pos.y;
		    };

		    // Quick little function for showing the tooltip.
		    plot.showTooltip = function (target, position) {
		        var $tip = that.getDomElement();

		        // convert tooltip content template to real tipText
		        var tipText = that.stringFormat(that.tooltipOptions.content, target);

		        $tip.html(tipText);
		        plot.setTooltipPosition({ x: position.pageX, y: position.pageY });
		        $tip.css({
		            left: that.tipPosition.x + that.tooltipOptions.shifts.x,
		            top: that.tipPosition.y + that.tooltipOptions.shifts.y
		        }).show();

		        // run callback
		        if (typeof that.tooltipOptions.onHover === 'function') {
		            that.tooltipOptions.onHover(target, $tip);
		        }
		    };

		    // Quick little function for hiding the tooltip.
		    plot.hideTooltip = function () {
		        that.getDomElement().hide().html('');
		    };
	    };

	    /**
	     * get or create tooltip DOM element
	     * @return jQuery object
	     */
	    FlotTooltip.prototype.getDomElement = function () {
	        var $tip = $('#' + this.tooltipOptions.id);

	        if( $tip.length === 0 ){
	            $tip = $('<div />').attr('id', this.tooltipOptions.id);
	            $tip.appendTo('body').hide().css({position: 'absolute'});

	            if(this.tooltipOptions.defaultTheme) {
	                $tip.css({
	                    'background': '#fff',
	                    'z-index': '1040',
	                    'padding': '0.4em 0.6em',
	                    'border-radius': '0.5em',
	                    'font-size': '0.8em',
	                    'border': '1px solid #111',
	                    'display': 'none',
	                    'white-space': 'nowrap'
	                });
	            }
	        }

	        return $tip;
	    };

	    /**
	     * core function, create tooltip content
	     * @param  {string} content - template with tooltip content
	     * @param  {object} item - Flot item
	     * @return {string} real tooltip content for current item
	     */
	    FlotTooltip.prototype.stringFormat = function (content, item) {

	        var percentPattern = /%p\.{0,1}(\d{0,})/;
	        var seriesPattern = /%s/;
	        var xLabelPattern = /%lx/; // requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels, will be ignored if plugin isn't loaded
	        var yLabelPattern = /%ly/; // requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels, will be ignored if plugin isn't loaded
	        var xPattern = /%x\.{0,1}(\d{0,})/;
	        var yPattern = /%y\.{0,1}(\d{0,})/;
	        var xPatternWithoutPrecision = "%x";
	        var yPatternWithoutPrecision = "%y";
	        var customTextPattern = "%ct";

	        var x, y, customText, p;

	        // for threshold plugin we need to read data from different place
	        if (typeof item.series.threshold !== "undefined") {
	            x = item.datapoint[0];
	            y = item.datapoint[1];
	            customText = item.datapoint[2];
	        } else if (typeof item.series.lines !== "undefined" && item.series.lines.steps) {
	            x = item.series.datapoints.points[item.dataIndex * 2];
	            y = item.series.datapoints.points[item.dataIndex * 2 + 1];
	            // TODO: where to find custom text in this variant?
	            customText = "";
	        } else {
	            x = item.series.data[item.dataIndex][0];
	            y = item.series.data[item.dataIndex][1];
	            customText = item.series.data[item.dataIndex][2];
	        }

	        // I think this is only in case of threshold plugin
	        if (item.series.label === null && item.series.originSeries) {
	            item.series.label = item.series.originSeries.label;
	        }

	        // if it is a function callback get the content string
	        if (typeof(content) === 'function') {
	            content = content(item.series.label, x, y, item);
	        }

	        // percent match for pie charts and stacked percent
	        if (typeof (item.series.percent) !== 'undefined') {
	            p = item.series.percent;
	        } else if (typeof (item.series.percents) !== 'undefined') {
	            p = item.series.percents[item.dataIndex];
	        }        
	        if (typeof p === 'number') {
	            content = this.adjustValPrecision(percentPattern, content, p);
	        }

	        // series match
	        if (typeof(item.series.label) !== 'undefined') {
	            content = content.replace(seriesPattern, item.series.label);
	        } else {
	            //remove %s if label is undefined
	            content = content.replace(seriesPattern, "");
	        }

	        // x axis label match
	        if (this.hasAxisLabel('xaxis', item)) {
	            content = content.replace(xLabelPattern, item.series.xaxis.options.axisLabel);
	        } else {
	            //remove %lx if axis label is undefined or axislabels plugin not present
	            content = content.replace(xLabelPattern, "");
	        }

	        // y axis label match
	        if (this.hasAxisLabel('yaxis', item)) {
	            content = content.replace(yLabelPattern, item.series.yaxis.options.axisLabel);
	        } else {
	            //remove %ly if axis label is undefined or axislabels plugin not present
	            content = content.replace(yLabelPattern, "");
	        }

	        // time mode axes with custom dateFormat
	        if (this.isTimeMode('xaxis', item) && this.isXDateFormat(item)) {
	            content = content.replace(xPattern, this.timestampToDate(x, this.tooltipOptions.xDateFormat, item.series.xaxis.options));
	        }
			if (this.isTimeMode('yaxis', item) && this.isYDateFormat(item)) {
	            content = content.replace(yPattern, this.timestampToDate(y, this.tooltipOptions.yDateFormat, item.series.yaxis.options));
	        }

	        // set precision if defined
	        if (typeof x === 'number') {
	            content = this.adjustValPrecision(xPattern, content, x);
	        }
	        if (typeof y === 'number') {
	            content = this.adjustValPrecision(yPattern, content, y);
	        }

	        // change x from number to given label, if given
	        if (typeof item.series.xaxis.ticks !== 'undefined') {

	            var ticks;
	            if (this.hasRotatedXAxisTicks(item)) {
	                // xaxis.ticks will be an empty array if tickRotor is being used, but the values are available in rotatedTicks
	                ticks = 'rotatedTicks';
	            } else {
	                ticks = 'ticks';
	            }

	            // see https://github.com/krzysu/flot.tooltip/issues/65
	            var tickIndex = item.dataIndex + item.seriesIndex;

	            if (item.series.xaxis[ticks].length > tickIndex && !this.isTimeMode('xaxis', item)) {
	                var valueX = (this.isCategoriesMode('xaxis', item)) ? item.series.xaxis[ticks][tickIndex].label : item.series.xaxis[ticks][tickIndex].v;
	                if (valueX === x) {
	                    content = content.replace(xPattern, item.series.xaxis[ticks][tickIndex].label);
	                }
	            }
	        }

	        // change y from number to given label, if given
	        if (typeof item.series.yaxis.ticks !== 'undefined') {
	            for (var index in item.series.yaxis.ticks) {
	                if (item.series.yaxis.ticks.hasOwnProperty(index)) {
	                    var valueY = (this.isCategoriesMode('yaxis', item)) ? item.series.yaxis.ticks[index].label : item.series.yaxis.ticks[index].v;
	                    if (valueY === y) {
	                        content = content.replace(yPattern, item.series.yaxis.ticks[index].label);
	                    }
	                }
	            }
	        }

	        // if no value customization, use tickFormatter by default
	        if (typeof item.series.xaxis.tickFormatter !== 'undefined') {
	            //escape dollar
	            content = content.replace(xPatternWithoutPrecision, item.series.xaxis.tickFormatter(x, item.series.xaxis).replace(/\$/g, '$$'));
	        }
	        if (typeof item.series.yaxis.tickFormatter !== 'undefined') {
	            //escape dollar
	            content = content.replace(yPatternWithoutPrecision, item.series.yaxis.tickFormatter(y, item.series.yaxis).replace(/\$/g, '$$'));
	        }

	        if (customText)
	            content = content.replace(customTextPattern, customText);

	        return content;
	    };

	    // helpers just for readability
	    FlotTooltip.prototype.isTimeMode = function (axisName, item) {
	        return (typeof item.series[axisName].options.mode !== 'undefined' && item.series[axisName].options.mode === 'time');
	    };

	    FlotTooltip.prototype.isXDateFormat = function (item) {
	        return (typeof this.tooltipOptions.xDateFormat !== 'undefined' && this.tooltipOptions.xDateFormat !== null);
	    };

	    FlotTooltip.prototype.isYDateFormat = function (item) {
	        return (typeof this.tooltipOptions.yDateFormat !== 'undefined' && this.tooltipOptions.yDateFormat !== null);
	    };

	    FlotTooltip.prototype.isCategoriesMode = function (axisName, item) {
	        return (typeof item.series[axisName].options.mode !== 'undefined' && item.series[axisName].options.mode === 'categories');
	    };

	    //
	    FlotTooltip.prototype.timestampToDate = function (tmst, dateFormat, options) {
	        var theDate = $.plot.dateGenerator(tmst, options);
	        return $.plot.formatDate(theDate, dateFormat, this.tooltipOptions.monthNames, this.tooltipOptions.dayNames);
	    };

	    //
	    FlotTooltip.prototype.adjustValPrecision = function (pattern, content, value) {

	        var precision;
	        var matchResult = content.match(pattern);
	        if( matchResult !== null ) {
	            if(RegExp.$1 !== '') {
	                precision = RegExp.$1;
	                value = value.toFixed(precision);

	                // only replace content if precision exists, in other case use thickformater
	                content = content.replace(pattern, value);
	            }
	        }
	        return content;
	    };

	    // other plugins detection below

	    // check if flot-axislabels plugin (https://github.com/markrcote/flot-axislabels) is used and that an axis label is given
	    FlotTooltip.prototype.hasAxisLabel = function (axisName, item) {
	        return ($.inArray(this.plotPlugins, 'axisLabels') !== -1 && typeof item.series[axisName].options.axisLabel !== 'undefined' && item.series[axisName].options.axisLabel.length > 0);
	    };

	    // check whether flot-tickRotor, a plugin which allows rotation of X-axis ticks, is being used
	    FlotTooltip.prototype.hasRotatedXAxisTicks = function (item) {
	        return ($.inArray(this.plotPlugins, 'tickRotor') !== -1 && typeof item.series.xaxis.rotatedTicks !== 'undefined');
	    };

	    //
	    var init = function (plot) {
	      new FlotTooltip(plot);
	    };

	    // define Flot plugin
	    $.plot.plugins.push({
	        init: init,
	        options: defaultOptions,
	        name: 'tooltip',
	        version: '0.8.4'
	    });

	})(jQuery);


/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Flot plugin that provides spline interpolation for line graphs
	 * author: Alex Bardas < alex.bardas@gmail.com >
	 * modified by: Avi Kohn https://github.com/AMKohn
	 * based on the spline interpolation described at:
	 *     http://scaledinnovation.com/analytics/splines/aboutSplines.html
	 *
	 * Example usage: (add in plot options series object)
	 *    for linespline:
	 *      series: {
	 *        ...
	 *        lines: {
	 *          show: false
	 *        },
	 *        splines: {
	 *          show: true,
	 *          tension: x, (float between 0 and 1, defaults to 0.5),
	 *          lineWidth: y (number, defaults to 2),
	 *          fill: z (float between 0 .. 1 or false, as in flot documentation)
	 *        },
	 *        ...
	 *      }
	 *    areaspline:
	 *      series: {
	 *        ...
	 *        lines: {
	 *          show: true,
	 *          lineWidth: 0, (line drawing will not execute)
	 *          fill: x, (float between 0 .. 1, as in flot documentation)
	 *          ...
	 *        },
	 *        splines: {
	 *          show: true,
	 *          tension: 0.5 (float between 0 and 1)
	 *        },
	 *        ...
	 *      }
	 *
	 */

	(function($) {
	  'use strict'

	  /**
	   * @param {Number} x0, y0, x1, y1: coordinates of the end (knot) points of the segment
	   * @param {Number} x2, y2: the next knot (not connected, but needed to calculate p2)
	   * @param {Number} tension: control how far the control points spread
	   * @return {Array}: p1 -> control point, from x1 back toward x0
	   *          p2 -> the next control point, returned to become the next segment's p1
	   *
	   * @api private
	   */
	  function getControlPoints(x0, y0, x1, y1, x2, y2, tension) {

	    var pow = Math.pow,
	      sqrt = Math.sqrt,
	      d01, d12, fa, fb, p1x, p1y, p2x, p2y;

	    //  Scaling factors: distances from this knot to the previous and following knots.
	    d01 = sqrt(pow(x1 - x0, 2) + pow(y1 - y0, 2));
	    d12 = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

	    fa = tension * d01 / (d01 + d12);
	    fb = tension - fa;

	    p1x = x1 + fa * (x0 - x2);
	    p1y = y1 + fa * (y0 - y2);

	    p2x = x1 - fb * (x0 - x2);
	    p2y = y1 - fb * (y0 - y2);

	    return [p1x, p1y, p2x, p2y];
	  }

	  var line = [];

	  function drawLine(points, ctx, height, fill, seriesColor) {
	    var c = $.color.parse(seriesColor);

	    c.a = typeof fill == "number" ? fill : .3;
	    c.normalize();
	    c = c.toString();

	    ctx.beginPath();
	    ctx.moveTo(points[0][0], points[0][1]);

	    var plength = points.length;

	    for (var i = 0; i < plength; i++) {
	      ctx[points[i][3]].apply(ctx, points[i][2]);
	    }

	    ctx.stroke();

	    ctx.lineWidth = 0;
	    ctx.lineTo(points[plength - 1][0], height);
	    ctx.lineTo(points[0][0], height);

	    ctx.closePath();
	    
	    if (fill !== false) {
	      ctx.fillStyle = c;
	      ctx.fill();
	    }
	  }

	  /**
	   * @param {Object} ctx: canvas context
	   * @param {String} type: accepted strings: 'bezier' or 'quadratic' (defaults to quadratic)
	   * @param {Array} points: 2 points for which to draw the interpolation
	   * @param {Array} cpoints: control points for those segment points
	   *
	   * @api private
	   */
	  function queue(ctx, type, points, cpoints) {
	    if (type === void 0 || (type !== 'bezier' && type !== 'quadratic')) {
	      type = 'quadratic';
	    }
	    type = type + 'CurveTo';

	    if (line.length == 0) line.push([points[0], points[1], cpoints.concat(points.slice(2)), type]);
	    else if (type == "quadraticCurveTo" && points.length == 2) {
	      cpoints = cpoints.slice(0, 2).concat(points);

	      line.push([points[0], points[1], cpoints, type]);
	    }
	    else line.push([points[2], points[3], cpoints.concat(points.slice(2)), type]);
	  }

	  /**
	   * @param {Object} plot
	   * @param {Object} ctx: canvas context
	   * @param {Object} series
	   *
	   * @api private
	   */

	  function drawSpline(plot, ctx, series) {
	    // Not interested if spline is not requested
	    if (series.splines.show !== true) {
	      return;
	    }

	    var cp = [],
	      // array of control points
	      tension = series.splines.tension || 0.5,
	      idx, x, y, points = series.datapoints.points,
	      ps = series.datapoints.pointsize,
	      plotOffset = plot.getPlotOffset(),
	      len = points.length,
	      pts = [];

	    line = [];

	    // Cannot display a linespline/areaspline if there are less than 3 points
	    if (len / ps < 4) {
	      $.extend(series.lines, series.splines);
	      return;
	    }

	    for (idx = 0; idx < len; idx += ps) {
	      x = points[idx];
	      y = points[idx + 1];
	      if (x == null || x < series.xaxis.min || x > series.xaxis.max || y < series.yaxis.min || y > series.yaxis.max) {
	        continue;
	      }

	      pts.push(series.xaxis.p2c(x) + plotOffset.left, series.yaxis.p2c(y) + plotOffset.top);
	    }

	    len = pts.length;

	    // Draw an open curve, not connected at the ends
	    for (idx = 0; idx < len - 2; idx += 2) {
	      cp = cp.concat(getControlPoints.apply(this, pts.slice(idx, idx + 6).concat([tension])));
	    }

	    ctx.save();
	    ctx.strokeStyle = series.color;
	    ctx.lineWidth = series.splines.lineWidth;

	    queue(ctx, 'quadratic', pts.slice(0, 4), cp.slice(0, 2));

	    for (idx = 2; idx < len - 3; idx += 2) {
	      queue(ctx, 'bezier', pts.slice(idx, idx + 4), cp.slice(2 * idx - 2, 2 * idx + 2));
	    }

	    queue(ctx, 'quadratic', pts.slice(len - 2, len), [cp[2 * len - 10], cp[2 * len - 9], pts[len - 4], pts[len - 3]]);

	    drawLine(line, ctx, plot.height() + 10, series.splines.fill, series.color);

	    ctx.restore();
	  }

	  $.plot.plugins.push({
	    init: function(plot) {
	      plot.hooks.drawSeries.push(drawSpline);
	    },
	    options: {
	      series: {
	        splines: {
	          show: false,
	          lineWidth: 2,
	          tension: 0.5,
	          fill: false
	        }
	      }
	    },
	    name: 'spline',
	    version: '0.8.2'
	  });
	})(jQuery);


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	/* Javascript plotting library for jQuery, version 0.8.3.

	Copyright (c) 2007-2014 IOLA and Ole Laursen.
	Licensed under the MIT license.

	*/

	// first an inline dependency, jquery.colorhelpers.js, we inline it here
	// for convenience

	/* Plugin for jQuery for working with colors.
	 *
	 * Version 1.1.
	 *
	 * Inspiration from jQuery color animation plugin by John Resig.
	 *
	 * Released under the MIT license by Ole Laursen, October 2009.
	 *
	 * Examples:
	 *
	 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
	 *   var c = $.color.extract($("#mydiv"), 'background-color');
	 *   console.log(c.r, c.g, c.b, c.a);
	 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
	 *
	 * Note that .scale() and .add() return the same modified object
	 * instead of making a new one.
	 *
	 * V. 1.1: Fix error handling so e.g. parsing an empty string does
	 * produce a color rather than just crashing.
	 */
	(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

	// the actual Flot code
	(function($) {

		// Cache the prototype hasOwnProperty for faster access

		var hasOwnProperty = Object.prototype.hasOwnProperty;

	    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
	    // operation produces the same effect as detach, i.e. removing the element
	    // without touching its jQuery data.

	    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

	    if (!$.fn.detach) {
	        $.fn.detach = function() {
	            return this.each(function() {
	                if (this.parentNode) {
	                    this.parentNode.removeChild( this );
	                }
	            });
	        };
	    }

		///////////////////////////////////////////////////////////////////////////
		// The Canvas object is a wrapper around an HTML5 <canvas> tag.
		//
		// @constructor
		// @param {string} cls List of classes to apply to the canvas.
		// @param {element} container Element onto which to append the canvas.
		//
		// Requiring a container is a little iffy, but unfortunately canvas
		// operations don't work unless the canvas is attached to the DOM.

		function Canvas(cls, container) {

			var element = container.children("." + cls)[0];

			if (element == null) {

				element = document.createElement("canvas");
				element.className = cls;

				$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
					.appendTo(container);

				// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

				if (!element.getContext) {
					if (window.G_vmlCanvasManager) {
						element = window.G_vmlCanvasManager.initElement(element);
					} else {
						throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
					}
				}
			}

			this.element = element;

			var context = this.context = element.getContext("2d");

			// Determine the screen's ratio of physical to device-independent
			// pixels.  This is the ratio between the canvas width that the browser
			// advertises and the number of pixels actually present in that space.

			// The iPhone 4, for example, has a device-independent width of 320px,
			// but its screen is actually 640px wide.  It therefore has a pixel
			// ratio of 2, while most normal devices have a ratio of 1.

			var devicePixelRatio = window.devicePixelRatio || 1,
				backingStoreRatio =
					context.webkitBackingStorePixelRatio ||
					context.mozBackingStorePixelRatio ||
					context.msBackingStorePixelRatio ||
					context.oBackingStorePixelRatio ||
					context.backingStorePixelRatio || 1;

			this.pixelRatio = devicePixelRatio / backingStoreRatio;

			// Size the canvas to match the internal dimensions of its container

			this.resize(container.width(), container.height());

			// Collection of HTML div layers for text overlaid onto the canvas

			this.textContainer = null;
			this.text = {};

			// Cache of text fragments and metrics, so we can avoid expensively
			// re-calculating them when the plot is re-rendered in a loop.

			this._textCache = {};
		}

		// Resizes the canvas to the given dimensions.
		//
		// @param {number} width New width of the canvas, in pixels.
		// @param {number} width New height of the canvas, in pixels.

		Canvas.prototype.resize = function(width, height) {

			if (width <= 0 || height <= 0) {
				throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
			}

			var element = this.element,
				context = this.context,
				pixelRatio = this.pixelRatio;

			// Resize the canvas, increasing its density based on the display's
			// pixel ratio; basically giving it more pixels without increasing the
			// size of its element, to take advantage of the fact that retina
			// displays have that many more pixels in the same advertised space.

			// Resizing should reset the state (excanvas seems to be buggy though)

			if (this.width != width) {
				element.width = width * pixelRatio;
				element.style.width = width + "px";
				this.width = width;
			}

			if (this.height != height) {
				element.height = height * pixelRatio;
				element.style.height = height + "px";
				this.height = height;
			}

			// Save the context, so we can reset in case we get replotted.  The
			// restore ensure that we're really back at the initial state, and
			// should be safe even if we haven't saved the initial state yet.

			context.restore();
			context.save();

			// Scale the coordinate space to match the display density; so even though we
			// may have twice as many pixels, we still want lines and other drawing to
			// appear at the same size; the extra pixels will just make them crisper.

			context.scale(pixelRatio, pixelRatio);
		};

		// Clears the entire canvas area, not including any overlaid HTML text

		Canvas.prototype.clear = function() {
			this.context.clearRect(0, 0, this.width, this.height);
		};

		// Finishes rendering the canvas, including managing the text overlay.

		Canvas.prototype.render = function() {

			var cache = this._textCache;

			// For each text layer, add elements marked as active that haven't
			// already been rendered, and remove those that are no longer active.

			for (var layerKey in cache) {
				if (hasOwnProperty.call(cache, layerKey)) {

					var layer = this.getTextLayer(layerKey),
						layerCache = cache[layerKey];

					layer.hide();

					for (var styleKey in layerCache) {
						if (hasOwnProperty.call(layerCache, styleKey)) {
							var styleCache = layerCache[styleKey];
							for (var key in styleCache) {
								if (hasOwnProperty.call(styleCache, key)) {

									var positions = styleCache[key].positions;

									for (var i = 0, position; position = positions[i]; i++) {
										if (position.active) {
											if (!position.rendered) {
												layer.append(position.element);
												position.rendered = true;
											}
										} else {
											positions.splice(i--, 1);
											if (position.rendered) {
												position.element.detach();
											}
										}
									}

									if (positions.length == 0) {
										delete styleCache[key];
									}
								}
							}
						}
					}

					layer.show();
				}
			}
		};

		// Creates (if necessary) and returns the text overlay container.
		//
		// @param {string} classes String of space-separated CSS classes used to
		//     uniquely identify the text layer.
		// @return {object} The jQuery-wrapped text-layer div.

		Canvas.prototype.getTextLayer = function(classes) {

			var layer = this.text[classes];

			// Create the text layer if it doesn't exist

			if (layer == null) {

				// Create the text layer container, if it doesn't exist

				if (this.textContainer == null) {
					this.textContainer = $("<div class='flot-text'></div>")
						.css({
							position: "absolute",
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							'font-size': "smaller",
							color: "#545454"
						})
						.insertAfter(this.element);
				}

				layer = this.text[classes] = $("<div></div>")
					.addClass(classes)
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0
					})
					.appendTo(this.textContainer);
			}

			return layer;
		};

		// Creates (if necessary) and returns a text info object.
		//
		// The object looks like this:
		//
		// {
		//     width: Width of the text's wrapper div.
		//     height: Height of the text's wrapper div.
		//     element: The jQuery-wrapped HTML div containing the text.
		//     positions: Array of positions at which this text is drawn.
		// }
		//
		// The positions array contains objects that look like this:
		//
		// {
		//     active: Flag indicating whether the text should be visible.
		//     rendered: Flag indicating whether the text is currently visible.
		//     element: The jQuery-wrapped HTML div containing the text.
		//     x: X coordinate at which to draw the text.
		//     y: Y coordinate at which to draw the text.
		// }
		//
		// Each position after the first receives a clone of the original element.
		//
		// The idea is that that the width, height, and general 'identity' of the
		// text is constant no matter where it is placed; the placements are a
		// secondary property.
		//
		// Canvas maintains a cache of recently-used text info objects; getTextInfo
		// either returns the cached element or creates a new entry.
		//
		// @param {string} layer A string of space-separated CSS classes uniquely
		//     identifying the layer containing this text.
		// @param {string} text Text string to retrieve info for.
		// @param {(string|object)=} font Either a string of space-separated CSS
		//     classes or a font-spec object, defining the text's font and style.
		// @param {number=} angle Angle at which to rotate the text, in degrees.
		//     Angle is currently unused, it will be implemented in the future.
		// @param {number=} width Maximum width of the text before it wraps.
		// @return {object} a text info object.

		Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

			var textStyle, layerCache, styleCache, info;

			// Cast the value to a string, in case we were given a number or such

			text = "" + text;

			// If the font is a font-spec object, generate a CSS font definition

			if (typeof font === "object") {
				textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
			} else {
				textStyle = font;
			}

			// Retrieve (or create) the cache for the text's layer and styles

			layerCache = this._textCache[layer];

			if (layerCache == null) {
				layerCache = this._textCache[layer] = {};
			}

			styleCache = layerCache[textStyle];

			if (styleCache == null) {
				styleCache = layerCache[textStyle] = {};
			}

			info = styleCache[text];

			// If we can't find a matching element in our cache, create a new one

			if (info == null) {

				var element = $("<div></div>").html(text)
					.css({
						position: "absolute",
						'max-width': width,
						top: -9999
					})
					.appendTo(this.getTextLayer(layer));

				if (typeof font === "object") {
					element.css({
						font: textStyle,
						color: font.color
					});
				} else if (typeof font === "string") {
					element.addClass(font);
				}

				info = styleCache[text] = {
					width: element.outerWidth(true),
					height: element.outerHeight(true),
					element: element,
					positions: []
				};

				element.detach();
			}

			return info;
		};

		// Adds a text string to the canvas text overlay.
		//
		// The text isn't drawn immediately; it is marked as rendering, which will
		// result in its addition to the canvas on the next render pass.
		//
		// @param {string} layer A string of space-separated CSS classes uniquely
		//     identifying the layer containing this text.
		// @param {number} x X coordinate at which to draw the text.
		// @param {number} y Y coordinate at which to draw the text.
		// @param {string} text Text string to draw.
		// @param {(string|object)=} font Either a string of space-separated CSS
		//     classes or a font-spec object, defining the text's font and style.
		// @param {number=} angle Angle at which to rotate the text, in degrees.
		//     Angle is currently unused, it will be implemented in the future.
		// @param {number=} width Maximum width of the text before it wraps.
		// @param {string=} halign Horizontal alignment of the text; either "left",
		//     "center" or "right".
		// @param {string=} valign Vertical alignment of the text; either "top",
		//     "middle" or "bottom".

		Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

			var info = this.getTextInfo(layer, text, font, angle, width),
				positions = info.positions;

			// Tweak the div's position to match the text's alignment

			if (halign == "center") {
				x -= info.width / 2;
			} else if (halign == "right") {
				x -= info.width;
			}

			if (valign == "middle") {
				y -= info.height / 2;
			} else if (valign == "bottom") {
				y -= info.height;
			}

			// Determine whether this text already exists at this position.
			// If so, mark it for inclusion in the next render pass.

			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = true;
					return;
				}
			}

			// If the text doesn't exist at this position, create a new entry

			// For the very first position we'll re-use the original element,
			// while for subsequent ones we'll clone it.

			position = {
				active: true,
				rendered: false,
				element: positions.length ? info.element.clone() : info.element,
				x: x,
				y: y
			};

			positions.push(position);

			// Move the element to its final position within the container

			position.element.css({
				top: Math.round(y),
				left: Math.round(x),
				'text-align': halign	// In case the text wraps
			});
		};

		// Removes one or more text strings from the canvas text overlay.
		//
		// If no parameters are given, all text within the layer is removed.
		//
		// Note that the text is not immediately removed; it is simply marked as
		// inactive, which will result in its removal on the next render pass.
		// This avoids the performance penalty for 'clear and redraw' behavior,
		// where we potentially get rid of all text on a layer, but will likely
		// add back most or all of it later, as when redrawing axes, for example.
		//
		// @param {string} layer A string of space-separated CSS classes uniquely
		//     identifying the layer containing this text.
		// @param {number=} x X coordinate of the text.
		// @param {number=} y Y coordinate of the text.
		// @param {string=} text Text string to remove.
		// @param {(string|object)=} font Either a string of space-separated CSS
		//     classes or a font-spec object, defining the text's font and style.
		// @param {number=} angle Angle at which the text is rotated, in degrees.
		//     Angle is currently unused, it will be implemented in the future.

		Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
			if (text == null) {
				var layerCache = this._textCache[layer];
				if (layerCache != null) {
					for (var styleKey in layerCache) {
						if (hasOwnProperty.call(layerCache, styleKey)) {
							var styleCache = layerCache[styleKey];
							for (var key in styleCache) {
								if (hasOwnProperty.call(styleCache, key)) {
									var positions = styleCache[key].positions;
									for (var i = 0, position; position = positions[i]; i++) {
										position.active = false;
									}
								}
							}
						}
					}
				}
			} else {
				var positions = this.getTextInfo(layer, text, font, angle).positions;
				for (var i = 0, position; position = positions[i]; i++) {
					if (position.x == x && position.y == y) {
						position.active = false;
					}
				}
			}
		};

		///////////////////////////////////////////////////////////////////////////
		// The top-level container for the entire plot.

	    function Plot(placeholder, data_, options_, plugins) {
	        // data is on the form:
	        //   [ series1, series2 ... ]
	        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
	        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

	        var series = [],
	            options = {
	                // the color theme used for graphs
	                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
	                legend: {
	                    show: true,
	                    noColumns: 1, // number of colums in legend table
	                    labelFormatter: null, // fn: string -> string
	                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
	                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
	                    position: "ne", // position of default legend container within plot
	                    margin: 5, // distance from grid edge to default legend container within plot
	                    backgroundColor: null, // null means auto-detect
	                    backgroundOpacity: 0.85, // set to 0 to avoid background
	                    sorted: null    // default to no legend sorting
	                },
	                xaxis: {
	                    show: null, // null = auto-detect, true = always, false = never
	                    position: "bottom", // or "top"
	                    mode: null, // null or "time"
	                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
	                    color: null, // base color, labels, ticks
	                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
	                    transform: null, // null or f: number -> number to transform axis
	                    inverseTransform: null, // if transform is set, this should be the inverse function
	                    min: null, // min. value to show, null means set automatically
	                    max: null, // max. value to show, null means set automatically
	                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
	                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
	                    tickFormatter: null, // fn: number -> string
	                    labelWidth: null, // size of tick labels in pixels
	                    labelHeight: null,
	                    reserveSpace: null, // whether to reserve space even if axis isn't shown
	                    tickLength: null, // size in pixels of ticks, or "full" for whole line
	                    alignTicksWithAxis: null, // axis number or null for no sync
	                    tickDecimals: null, // no. of decimals, null means auto
	                    tickSize: null, // number or [number, "unit"]
	                    minTickSize: null // number or [number, "unit"]
	                },
	                yaxis: {
	                    autoscaleMargin: 0.02,
	                    position: "left" // or "right"
	                },
	                xaxes: [],
	                yaxes: [],
	                series: {
	                    points: {
	                        show: false,
	                        radius: 3,
	                        lineWidth: 2, // in pixels
	                        fill: true,
	                        fillColor: "#ffffff",
	                        symbol: "circle" // or callback
	                    },
	                    lines: {
	                        // we don't put in show: false so we can see
	                        // whether lines were actively disabled
	                        lineWidth: 2, // in pixels
	                        fill: false,
	                        fillColor: null,
	                        steps: false
	                        // Omit 'zero', so we can later default its value to
	                        // match that of the 'fill' option.
	                    },
	                    bars: {
	                        show: false,
	                        lineWidth: 2, // in pixels
	                        barWidth: 1, // in units of the x axis
	                        fill: true,
	                        fillColor: null,
	                        align: "left", // "left", "right", or "center"
	                        horizontal: false,
	                        zero: true
	                    },
	                    shadowSize: 3,
	                    highlightColor: null
	                },
	                grid: {
	                    show: true,
	                    aboveData: false,
	                    color: "#545454", // primary color used for outline and labels
	                    backgroundColor: null, // null for transparent, else color
	                    borderColor: null, // set if different from the grid color
	                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
	                    margin: 0, // distance from the canvas edge to the grid
	                    labelMargin: 5, // in pixels
	                    axisMargin: 8, // in pixels
	                    borderWidth: 2, // in pixels
	                    minBorderMargin: null, // in pixels, null means taken from points radius
	                    markings: null, // array of ranges or fn: axes -> array of ranges
	                    markingsColor: "#f4f4f4",
	                    markingsLineWidth: 2,
	                    // interactive stuff
	                    clickable: false,
	                    hoverable: false,
	                    autoHighlight: true, // highlight in case mouse is near
	                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
	                },
	                interaction: {
	                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
	                },
	                hooks: {}
	            },
	        surface = null,     // the canvas for the plot itself
	        overlay = null,     // canvas for interactive stuff on top of plot
	        eventHolder = null, // jQuery object that events should be bound to
	        ctx = null, octx = null,
	        xaxes = [], yaxes = [],
	        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
	        plotWidth = 0, plotHeight = 0,
	        hooks = {
	            processOptions: [],
	            processRawData: [],
	            processDatapoints: [],
	            processOffset: [],
	            drawBackground: [],
	            drawSeries: [],
	            draw: [],
	            bindEvents: [],
	            drawOverlay: [],
	            shutdown: []
	        },
	        plot = this;

	        // public functions
	        plot.setData = setData;
	        plot.setupGrid = setupGrid;
	        plot.draw = draw;
	        plot.getPlaceholder = function() { return placeholder; };
	        plot.getCanvas = function() { return surface.element; };
	        plot.getPlotOffset = function() { return plotOffset; };
	        plot.width = function () { return plotWidth; };
	        plot.height = function () { return plotHeight; };
	        plot.offset = function () {
	            var o = eventHolder.offset();
	            o.left += plotOffset.left;
	            o.top += plotOffset.top;
	            return o;
	        };
	        plot.getData = function () { return series; };
	        plot.getAxes = function () {
	            var res = {}, i;
	            $.each(xaxes.concat(yaxes), function (_, axis) {
	                if (axis)
	                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
	            });
	            return res;
	        };
	        plot.getXAxes = function () { return xaxes; };
	        plot.getYAxes = function () { return yaxes; };
	        plot.c2p = canvasToAxisCoords;
	        plot.p2c = axisToCanvasCoords;
	        plot.getOptions = function () { return options; };
	        plot.highlight = highlight;
	        plot.unhighlight = unhighlight;
	        plot.triggerRedrawOverlay = triggerRedrawOverlay;
	        plot.pointOffset = function(point) {
	            return {
	                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
	                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
	            };
	        };
	        plot.shutdown = shutdown;
	        plot.destroy = function () {
	            shutdown();
	            placeholder.removeData("plot").empty();

	            series = [];
	            options = null;
	            surface = null;
	            overlay = null;
	            eventHolder = null;
	            ctx = null;
	            octx = null;
	            xaxes = [];
	            yaxes = [];
	            hooks = null;
	            highlights = [];
	            plot = null;
	        };
	        plot.resize = function () {
	        	var width = placeholder.width(),
	        		height = placeholder.height();
	            surface.resize(width, height);
	            overlay.resize(width, height);
	        };

	        // public attributes
	        plot.hooks = hooks;

	        // initialize
	        initPlugins(plot);
	        parseOptions(options_);
	        setupCanvases();
	        setData(data_);
	        setupGrid();
	        draw();
	        bindEvents();


	        function executeHooks(hook, args) {
	            args = [plot].concat(args);
	            for (var i = 0; i < hook.length; ++i)
	                hook[i].apply(this, args);
	        }

	        function initPlugins() {

	            // References to key classes, allowing plugins to modify them

	            var classes = {
	                Canvas: Canvas
	            };

	            for (var i = 0; i < plugins.length; ++i) {
	                var p = plugins[i];
	                p.init(plot, classes);
	                if (p.options)
	                    $.extend(true, options, p.options);
	            }
	        }

	        function parseOptions(opts) {

	            $.extend(true, options, opts);

	            // $.extend merges arrays, rather than replacing them.  When less
	            // colors are provided than the size of the default palette, we
	            // end up with those colors plus the remaining defaults, which is
	            // not expected behavior; avoid it by replacing them here.

	            if (opts && opts.colors) {
	            	options.colors = opts.colors;
	            }

	            if (options.xaxis.color == null)
	                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
	            if (options.yaxis.color == null)
	                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

	            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
	                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
	            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
	                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

	            if (options.grid.borderColor == null)
	                options.grid.borderColor = options.grid.color;
	            if (options.grid.tickColor == null)
	                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

	            // Fill in defaults for axis options, including any unspecified
	            // font-spec fields, if a font-spec was provided.

	            // If no x/y axis options were provided, create one of each anyway,
	            // since the rest of the code assumes that they exist.

	            var i, axisOptions, axisCount,
	                fontSize = placeholder.css("font-size"),
	                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
	                fontDefaults = {
	                    style: placeholder.css("font-style"),
	                    size: Math.round(0.8 * fontSizeDefault),
	                    variant: placeholder.css("font-variant"),
	                    weight: placeholder.css("font-weight"),
	                    family: placeholder.css("font-family")
	                };

	            axisCount = options.xaxes.length || 1;
	            for (i = 0; i < axisCount; ++i) {

	                axisOptions = options.xaxes[i];
	                if (axisOptions && !axisOptions.tickColor) {
	                    axisOptions.tickColor = axisOptions.color;
	                }

	                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
	                options.xaxes[i] = axisOptions;

	                if (axisOptions.font) {
	                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
	                    if (!axisOptions.font.color) {
	                        axisOptions.font.color = axisOptions.color;
	                    }
	                    if (!axisOptions.font.lineHeight) {
	                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
	                    }
	                }
	            }

	            axisCount = options.yaxes.length || 1;
	            for (i = 0; i < axisCount; ++i) {

	                axisOptions = options.yaxes[i];
	                if (axisOptions && !axisOptions.tickColor) {
	                    axisOptions.tickColor = axisOptions.color;
	                }

	                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
	                options.yaxes[i] = axisOptions;

	                if (axisOptions.font) {
	                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
	                    if (!axisOptions.font.color) {
	                        axisOptions.font.color = axisOptions.color;
	                    }
	                    if (!axisOptions.font.lineHeight) {
	                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
	                    }
	                }
	            }

	            // backwards compatibility, to be removed in future
	            if (options.xaxis.noTicks && options.xaxis.ticks == null)
	                options.xaxis.ticks = options.xaxis.noTicks;
	            if (options.yaxis.noTicks && options.yaxis.ticks == null)
	                options.yaxis.ticks = options.yaxis.noTicks;
	            if (options.x2axis) {
	                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
	                options.xaxes[1].position = "top";
	                // Override the inherit to allow the axis to auto-scale
	                if (options.x2axis.min == null) {
	                    options.xaxes[1].min = null;
	                }
	                if (options.x2axis.max == null) {
	                    options.xaxes[1].max = null;
	                }
	            }
	            if (options.y2axis) {
	                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
	                options.yaxes[1].position = "right";
	                // Override the inherit to allow the axis to auto-scale
	                if (options.y2axis.min == null) {
	                    options.yaxes[1].min = null;
	                }
	                if (options.y2axis.max == null) {
	                    options.yaxes[1].max = null;
	                }
	            }
	            if (options.grid.coloredAreas)
	                options.grid.markings = options.grid.coloredAreas;
	            if (options.grid.coloredAreasColor)
	                options.grid.markingsColor = options.grid.coloredAreasColor;
	            if (options.lines)
	                $.extend(true, options.series.lines, options.lines);
	            if (options.points)
	                $.extend(true, options.series.points, options.points);
	            if (options.bars)
	                $.extend(true, options.series.bars, options.bars);
	            if (options.shadowSize != null)
	                options.series.shadowSize = options.shadowSize;
	            if (options.highlightColor != null)
	                options.series.highlightColor = options.highlightColor;

	            // save options on axes for future reference
	            for (i = 0; i < options.xaxes.length; ++i)
	                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
	            for (i = 0; i < options.yaxes.length; ++i)
	                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

	            // add hooks from options
	            for (var n in hooks)
	                if (options.hooks[n] && options.hooks[n].length)
	                    hooks[n] = hooks[n].concat(options.hooks[n]);

	            executeHooks(hooks.processOptions, [options]);
	        }

	        function setData(d) {
	            series = parseData(d);
	            fillInSeriesOptions();
	            processData();
	        }

	        function parseData(d) {
	            var res = [];
	            for (var i = 0; i < d.length; ++i) {
	                var s = $.extend(true, {}, options.series);

	                if (d[i].data != null) {
	                    s.data = d[i].data; // move the data instead of deep-copy
	                    delete d[i].data;

	                    $.extend(true, s, d[i]);

	                    d[i].data = s.data;
	                }
	                else
	                    s.data = d[i];
	                res.push(s);
	            }

	            return res;
	        }

	        function axisNumber(obj, coord) {
	            var a = obj[coord + "axis"];
	            if (typeof a == "object") // if we got a real axis, extract number
	                a = a.n;
	            if (typeof a != "number")
	                a = 1; // default to first axis
	            return a;
	        }

	        function allAxes() {
	            // return flat array without annoying null entries
	            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
	        }

	        function canvasToAxisCoords(pos) {
	            // return an object with x/y corresponding to all used axes
	            var res = {}, i, axis;
	            for (i = 0; i < xaxes.length; ++i) {
	                axis = xaxes[i];
	                if (axis && axis.used)
	                    res["x" + axis.n] = axis.c2p(pos.left);
	            }

	            for (i = 0; i < yaxes.length; ++i) {
	                axis = yaxes[i];
	                if (axis && axis.used)
	                    res["y" + axis.n] = axis.c2p(pos.top);
	            }

	            if (res.x1 !== undefined)
	                res.x = res.x1;
	            if (res.y1 !== undefined)
	                res.y = res.y1;

	            return res;
	        }

	        function axisToCanvasCoords(pos) {
	            // get canvas coords from the first pair of x/y found in pos
	            var res = {}, i, axis, key;

	            for (i = 0; i < xaxes.length; ++i) {
	                axis = xaxes[i];
	                if (axis && axis.used) {
	                    key = "x" + axis.n;
	                    if (pos[key] == null && axis.n == 1)
	                        key = "x";

	                    if (pos[key] != null) {
	                        res.left = axis.p2c(pos[key]);
	                        break;
	                    }
	                }
	            }

	            for (i = 0; i < yaxes.length; ++i) {
	                axis = yaxes[i];
	                if (axis && axis.used) {
	                    key = "y" + axis.n;
	                    if (pos[key] == null && axis.n == 1)
	                        key = "y";

	                    if (pos[key] != null) {
	                        res.top = axis.p2c(pos[key]);
	                        break;
	                    }
	                }
	            }

	            return res;
	        }

	        function getOrCreateAxis(axes, number) {
	            if (!axes[number - 1])
	                axes[number - 1] = {
	                    n: number, // save the number for future reference
	                    direction: axes == xaxes ? "x" : "y",
	                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
	                };

	            return axes[number - 1];
	        }

	        function fillInSeriesOptions() {

	            var neededColors = series.length, maxIndex = -1, i;

	            // Subtract the number of series that already have fixed colors or
	            // color indexes from the number that we still need to generate.

	            for (i = 0; i < series.length; ++i) {
	                var sc = series[i].color;
	                if (sc != null) {
	                    neededColors--;
	                    if (typeof sc == "number" && sc > maxIndex) {
	                        maxIndex = sc;
	                    }
	                }
	            }

	            // If any of the series have fixed color indexes, then we need to
	            // generate at least as many colors as the highest index.

	            if (neededColors <= maxIndex) {
	                neededColors = maxIndex + 1;
	            }

	            // Generate all the colors, using first the option colors and then
	            // variations on those colors once they're exhausted.

	            var c, colors = [], colorPool = options.colors,
	                colorPoolSize = colorPool.length, variation = 0;

	            for (i = 0; i < neededColors; i++) {

	                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

	                // Each time we exhaust the colors in the pool we adjust
	                // a scaling factor used to produce more variations on
	                // those colors. The factor alternates negative/positive
	                // to produce lighter/darker colors.

	                // Reset the variation after every few cycles, or else
	                // it will end up producing only white or black colors.

	                if (i % colorPoolSize == 0 && i) {
	                    if (variation >= 0) {
	                        if (variation < 0.5) {
	                            variation = -variation - 0.2;
	                        } else variation = 0;
	                    } else variation = -variation;
	                }

	                colors[i] = c.scale('rgb', 1 + variation);
	            }

	            // Finalize the series options, filling in their colors

	            var colori = 0, s;
	            for (i = 0; i < series.length; ++i) {
	                s = series[i];

	                // assign colors
	                if (s.color == null) {
	                    s.color = colors[colori].toString();
	                    ++colori;
	                }
	                else if (typeof s.color == "number")
	                    s.color = colors[s.color].toString();

	                // turn on lines automatically in case nothing is set
	                if (s.lines.show == null) {
	                    var v, show = true;
	                    for (v in s)
	                        if (s[v] && s[v].show) {
	                            show = false;
	                            break;
	                        }
	                    if (show)
	                        s.lines.show = true;
	                }

	                // If nothing was provided for lines.zero, default it to match
	                // lines.fill, since areas by default should extend to zero.

	                if (s.lines.zero == null) {
	                    s.lines.zero = !!s.lines.fill;
	                }

	                // setup axes
	                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
	                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
	            }
	        }

	        function processData() {
	            var topSentry = Number.POSITIVE_INFINITY,
	                bottomSentry = Number.NEGATIVE_INFINITY,
	                fakeInfinity = Number.MAX_VALUE,
	                i, j, k, m, length,
	                s, points, ps, x, y, axis, val, f, p,
	                data, format;

	            function updateAxis(axis, min, max) {
	                if (min < axis.datamin && min != -fakeInfinity)
	                    axis.datamin = min;
	                if (max > axis.datamax && max != fakeInfinity)
	                    axis.datamax = max;
	            }

	            $.each(allAxes(), function (_, axis) {
	                // init axis
	                axis.datamin = topSentry;
	                axis.datamax = bottomSentry;
	                axis.used = false;
	            });

	            for (i = 0; i < series.length; ++i) {
	                s = series[i];
	                s.datapoints = { points: [] };

	                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
	            }

	            // first pass: clean and copy data
	            for (i = 0; i < series.length; ++i) {
	                s = series[i];

	                data = s.data;
	                format = s.datapoints.format;

	                if (!format) {
	                    format = [];
	                    // find out how to copy
	                    format.push({ x: true, number: true, required: true });
	                    format.push({ y: true, number: true, required: true });

	                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
	                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
	                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
	                        if (s.bars.horizontal) {
	                            delete format[format.length - 1].y;
	                            format[format.length - 1].x = true;
	                        }
	                    }

	                    s.datapoints.format = format;
	                }

	                if (s.datapoints.pointsize != null)
	                    continue; // already filled in

	                s.datapoints.pointsize = format.length;

	                ps = s.datapoints.pointsize;
	                points = s.datapoints.points;

	                var insertSteps = s.lines.show && s.lines.steps;
	                s.xaxis.used = s.yaxis.used = true;

	                for (j = k = 0; j < data.length; ++j, k += ps) {
	                    p = data[j];

	                    var nullify = p == null;
	                    if (!nullify) {
	                        for (m = 0; m < ps; ++m) {
	                            val = p[m];
	                            f = format[m];

	                            if (f) {
	                                if (f.number && val != null) {
	                                    val = +val; // convert to number
	                                    if (isNaN(val))
	                                        val = null;
	                                    else if (val == Infinity)
	                                        val = fakeInfinity;
	                                    else if (val == -Infinity)
	                                        val = -fakeInfinity;
	                                }

	                                if (val == null) {
	                                    if (f.required)
	                                        nullify = true;

	                                    if (f.defaultValue != null)
	                                        val = f.defaultValue;
	                                }
	                            }

	                            points[k + m] = val;
	                        }
	                    }

	                    if (nullify) {
	                        for (m = 0; m < ps; ++m) {
	                            val = points[k + m];
	                            if (val != null) {
	                                f = format[m];
	                                // extract min/max info
	                                if (f.autoscale !== false) {
	                                    if (f.x) {
	                                        updateAxis(s.xaxis, val, val);
	                                    }
	                                    if (f.y) {
	                                        updateAxis(s.yaxis, val, val);
	                                    }
	                                }
	                            }
	                            points[k + m] = null;
	                        }
	                    }
	                    else {
	                        // a little bit of line specific stuff that
	                        // perhaps shouldn't be here, but lacking
	                        // better means...
	                        if (insertSteps && k > 0
	                            && points[k - ps] != null
	                            && points[k - ps] != points[k]
	                            && points[k - ps + 1] != points[k + 1]) {
	                            // copy the point to make room for a middle point
	                            for (m = 0; m < ps; ++m)
	                                points[k + ps + m] = points[k + m];

	                            // middle point has same y
	                            points[k + 1] = points[k - ps + 1];

	                            // we've added a point, better reflect that
	                            k += ps;
	                        }
	                    }
	                }
	            }

	            // give the hooks a chance to run
	            for (i = 0; i < series.length; ++i) {
	                s = series[i];

	                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
	            }

	            // second pass: find datamax/datamin for auto-scaling
	            for (i = 0; i < series.length; ++i) {
	                s = series[i];
	                points = s.datapoints.points;
	                ps = s.datapoints.pointsize;
	                format = s.datapoints.format;

	                var xmin = topSentry, ymin = topSentry,
	                    xmax = bottomSentry, ymax = bottomSentry;

	                for (j = 0; j < points.length; j += ps) {
	                    if (points[j] == null)
	                        continue;

	                    for (m = 0; m < ps; ++m) {
	                        val = points[j + m];
	                        f = format[m];
	                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
	                            continue;

	                        if (f.x) {
	                            if (val < xmin)
	                                xmin = val;
	                            if (val > xmax)
	                                xmax = val;
	                        }
	                        if (f.y) {
	                            if (val < ymin)
	                                ymin = val;
	                            if (val > ymax)
	                                ymax = val;
	                        }
	                    }
	                }

	                if (s.bars.show) {
	                    // make sure we got room for the bar on the dancing floor
	                    var delta;

	                    switch (s.bars.align) {
	                        case "left":
	                            delta = 0;
	                            break;
	                        case "right":
	                            delta = -s.bars.barWidth;
	                            break;
	                        default:
	                            delta = -s.bars.barWidth / 2;
	                    }

	                    if (s.bars.horizontal) {
	                        ymin += delta;
	                        ymax += delta + s.bars.barWidth;
	                    }
	                    else {
	                        xmin += delta;
	                        xmax += delta + s.bars.barWidth;
	                    }
	                }

	                updateAxis(s.xaxis, xmin, xmax);
	                updateAxis(s.yaxis, ymin, ymax);
	            }

	            $.each(allAxes(), function (_, axis) {
	                if (axis.datamin == topSentry)
	                    axis.datamin = null;
	                if (axis.datamax == bottomSentry)
	                    axis.datamax = null;
	            });
	        }

	        function setupCanvases() {

	            // Make sure the placeholder is clear of everything except canvases
	            // from a previous plot in this container that we'll try to re-use.

	            placeholder.css("padding", 0) // padding messes up the positioning
	                .children().filter(function(){
	                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
	                }).remove();

	            if (placeholder.css("position") == 'static')
	                placeholder.css("position", "relative"); // for positioning labels and overlay

	            surface = new Canvas("flot-base", placeholder);
	            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

	            ctx = surface.context;
	            octx = overlay.context;

	            // define which element we're listening for events on
	            eventHolder = $(overlay.element).unbind();

	            // If we're re-using a plot object, shut down the old one

	            var existing = placeholder.data("plot");

	            if (existing) {
	                existing.shutdown();
	                overlay.clear();
	            }

	            // save in case we get replotted
	            placeholder.data("plot", plot);
	        }

	        function bindEvents() {
	            // bind events
	            if (options.grid.hoverable) {
	                eventHolder.mousemove(onMouseMove);

	                // Use bind, rather than .mouseleave, because we officially
	                // still support jQuery 1.2.6, which doesn't define a shortcut
	                // for mouseenter or mouseleave.  This was a bug/oversight that
	                // was fixed somewhere around 1.3.x.  We can return to using
	                // .mouseleave when we drop support for 1.2.6.

	                eventHolder.bind("mouseleave", onMouseLeave);
	            }

	            if (options.grid.clickable)
	                eventHolder.click(onClick);

	            executeHooks(hooks.bindEvents, [eventHolder]);
	        }

	        function shutdown() {
	            if (redrawTimeout)
	                clearTimeout(redrawTimeout);

	            eventHolder.unbind("mousemove", onMouseMove);
	            eventHolder.unbind("mouseleave", onMouseLeave);
	            eventHolder.unbind("click", onClick);

	            executeHooks(hooks.shutdown, [eventHolder]);
	        }

	        function setTransformationHelpers(axis) {
	            // set helper functions on the axis, assumes plot area
	            // has been computed already

	            function identity(x) { return x; }

	            var s, m, t = axis.options.transform || identity,
	                it = axis.options.inverseTransform;

	            // precompute how much the axis is scaling a point
	            // in canvas space
	            if (axis.direction == "x") {
	                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
	                m = Math.min(t(axis.max), t(axis.min));
	            }
	            else {
	                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
	                s = -s;
	                m = Math.max(t(axis.max), t(axis.min));
	            }

	            // data point to canvas coordinate
	            if (t == identity) // slight optimization
	                axis.p2c = function (p) { return (p - m) * s; };
	            else
	                axis.p2c = function (p) { return (t(p) - m) * s; };
	            // canvas coordinate to data point
	            if (!it)
	                axis.c2p = function (c) { return m + c / s; };
	            else
	                axis.c2p = function (c) { return it(m + c / s); };
	        }

	        function measureTickLabels(axis) {

	            var opts = axis.options,
	                ticks = axis.ticks || [],
	                labelWidth = opts.labelWidth || 0,
	                labelHeight = opts.labelHeight || 0,
	                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
	                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
	                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
	                font = opts.font || "flot-tick-label tickLabel";

	            for (var i = 0; i < ticks.length; ++i) {

	                var t = ticks[i];

	                if (!t.label)
	                    continue;

	                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

	                labelWidth = Math.max(labelWidth, info.width);
	                labelHeight = Math.max(labelHeight, info.height);
	            }

	            axis.labelWidth = opts.labelWidth || labelWidth;
	            axis.labelHeight = opts.labelHeight || labelHeight;
	        }

	        function allocateAxisBoxFirstPhase(axis) {
	            // find the bounding box of the axis by looking at label
	            // widths/heights and ticks, make room by diminishing the
	            // plotOffset; this first phase only looks at one
	            // dimension per axis, the other dimension depends on the
	            // other axes so will have to wait

	            var lw = axis.labelWidth,
	                lh = axis.labelHeight,
	                pos = axis.options.position,
	                isXAxis = axis.direction === "x",
	                tickLength = axis.options.tickLength,
	                axisMargin = options.grid.axisMargin,
	                padding = options.grid.labelMargin,
	                innermost = true,
	                outermost = true,
	                first = true,
	                found = false;

	            // Determine the axis's position in its direction and on its side

	            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
	                if (a && (a.show || a.reserveSpace)) {
	                    if (a === axis) {
	                        found = true;
	                    } else if (a.options.position === pos) {
	                        if (found) {
	                            outermost = false;
	                        } else {
	                            innermost = false;
	                        }
	                    }
	                    if (!found) {
	                        first = false;
	                    }
	                }
	            });

	            // The outermost axis on each side has no margin

	            if (outermost) {
	                axisMargin = 0;
	            }

	            // The ticks for the first axis in each direction stretch across

	            if (tickLength == null) {
	                tickLength = first ? "full" : 5;
	            }

	            if (!isNaN(+tickLength))
	                padding += +tickLength;

	            if (isXAxis) {
	                lh += padding;

	                if (pos == "bottom") {
	                    plotOffset.bottom += lh + axisMargin;
	                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
	                }
	                else {
	                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
	                    plotOffset.top += lh + axisMargin;
	                }
	            }
	            else {
	                lw += padding;

	                if (pos == "left") {
	                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
	                    plotOffset.left += lw + axisMargin;
	                }
	                else {
	                    plotOffset.right += lw + axisMargin;
	                    axis.box = { left: surface.width - plotOffset.right, width: lw };
	                }
	            }

	             // save for future reference
	            axis.position = pos;
	            axis.tickLength = tickLength;
	            axis.box.padding = padding;
	            axis.innermost = innermost;
	        }

	        function allocateAxisBoxSecondPhase(axis) {
	            // now that all axis boxes have been placed in one
	            // dimension, we can set the remaining dimension coordinates
	            if (axis.direction == "x") {
	                axis.box.left = plotOffset.left - axis.labelWidth / 2;
	                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
	            }
	            else {
	                axis.box.top = plotOffset.top - axis.labelHeight / 2;
	                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
	            }
	        }

	        function adjustLayoutForThingsStickingOut() {
	            // possibly adjust plot offset to ensure everything stays
	            // inside the canvas and isn't clipped off

	            var minMargin = options.grid.minBorderMargin,
	                axis, i;

	            // check stuff from the plot (FIXME: this should just read
	            // a value from the series, otherwise it's impossible to
	            // customize)
	            if (minMargin == null) {
	                minMargin = 0;
	                for (i = 0; i < series.length; ++i)
	                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
	            }

	            var margins = {
	                left: minMargin,
	                right: minMargin,
	                top: minMargin,
	                bottom: minMargin
	            };

	            // check axis labels, note we don't check the actual
	            // labels but instead use the overall width/height to not
	            // jump as much around with replots
	            $.each(allAxes(), function (_, axis) {
	                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
	                    if (axis.direction === "x") {
	                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
	                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
	                    } else {
	                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
	                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
	                    }
	                }
	            });

	            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
	            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
	            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
	            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
	        }

	        function setupGrid() {
	            var i, axes = allAxes(), showGrid = options.grid.show;

	            // Initialize the plot's offset from the edge of the canvas

	            for (var a in plotOffset) {
	                var margin = options.grid.margin || 0;
	                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
	            }

	            executeHooks(hooks.processOffset, [plotOffset]);

	            // If the grid is visible, add its border width to the offset

	            for (var a in plotOffset) {
	                if(typeof(options.grid.borderWidth) == "object") {
	                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
	                }
	                else {
	                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
	                }
	            }

	            $.each(axes, function (_, axis) {
	                var axisOpts = axis.options;
	                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
	                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
	                setRange(axis);
	            });

	            if (showGrid) {

	                var allocatedAxes = $.grep(axes, function (axis) {
	                    return axis.show || axis.reserveSpace;
	                });

	                $.each(allocatedAxes, function (_, axis) {
	                    // make the ticks
	                    setupTickGeneration(axis);
	                    setTicks(axis);
	                    snapRangeToTicks(axis, axis.ticks);
	                    // find labelWidth/Height for axis
	                    measureTickLabels(axis);
	                });

	                // with all dimensions calculated, we can compute the
	                // axis bounding boxes, start from the outside
	                // (reverse order)
	                for (i = allocatedAxes.length - 1; i >= 0; --i)
	                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

	                // make sure we've got enough space for things that
	                // might stick out
	                adjustLayoutForThingsStickingOut();

	                $.each(allocatedAxes, function (_, axis) {
	                    allocateAxisBoxSecondPhase(axis);
	                });
	            }

	            plotWidth = surface.width - plotOffset.left - plotOffset.right;
	            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

	            // now we got the proper plot dimensions, we can compute the scaling
	            $.each(axes, function (_, axis) {
	                setTransformationHelpers(axis);
	            });

	            if (showGrid) {
	                drawAxisLabels();
	            }

	            insertLegend();
	        }

	        function setRange(axis) {
	            var opts = axis.options,
	                min = +(opts.min != null ? opts.min : axis.datamin),
	                max = +(opts.max != null ? opts.max : axis.datamax),
	                delta = max - min;

	            if (delta == 0.0) {
	                // degenerate case
	                var widen = max == 0 ? 1 : 0.01;

	                if (opts.min == null)
	                    min -= widen;
	                // always widen max if we couldn't widen min to ensure we
	                // don't fall into min == max which doesn't work
	                if (opts.max == null || opts.min != null)
	                    max += widen;
	            }
	            else {
	                // consider autoscaling
	                var margin = opts.autoscaleMargin;
	                if (margin != null) {
	                    if (opts.min == null) {
	                        min -= delta * margin;
	                        // make sure we don't go below zero if all values
	                        // are positive
	                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
	                            min = 0;
	                    }
	                    if (opts.max == null) {
	                        max += delta * margin;
	                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
	                            max = 0;
	                    }
	                }
	            }
	            axis.min = min;
	            axis.max = max;
	        }

	        function setupTickGeneration(axis) {
	            var opts = axis.options;

	            // estimate number of ticks
	            var noTicks;
	            if (typeof opts.ticks == "number" && opts.ticks > 0)
	                noTicks = opts.ticks;
	            else
	                // heuristic based on the model a*sqrt(x) fitted to
	                // some data points that seemed reasonable
	                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

	            var delta = (axis.max - axis.min) / noTicks,
	                dec = -Math.floor(Math.log(delta) / Math.LN10),
	                maxDec = opts.tickDecimals;

	            if (maxDec != null && dec > maxDec) {
	                dec = maxDec;
	            }

	            var magn = Math.pow(10, -dec),
	                norm = delta / magn, // norm is between 1.0 and 10.0
	                size;

	            if (norm < 1.5) {
	                size = 1;
	            } else if (norm < 3) {
	                size = 2;
	                // special case for 2.5, requires an extra decimal
	                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
	                    size = 2.5;
	                    ++dec;
	                }
	            } else if (norm < 7.5) {
	                size = 5;
	            } else {
	                size = 10;
	            }

	            size *= magn;

	            if (opts.minTickSize != null && size < opts.minTickSize) {
	                size = opts.minTickSize;
	            }

	            axis.delta = delta;
	            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
	            axis.tickSize = opts.tickSize || size;

	            // Time mode was moved to a plug-in in 0.8, and since so many people use it
	            // we'll add an especially friendly reminder to make sure they included it.

	            if (opts.mode == "time" && !axis.tickGenerator) {
	                throw new Error("Time mode requires the flot.time plugin.");
	            }

	            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
	            // like flot.time.js.

	            if (!axis.tickGenerator) {

	                axis.tickGenerator = function (axis) {

	                    var ticks = [],
	                        start = floorInBase(axis.min, axis.tickSize),
	                        i = 0,
	                        v = Number.NaN,
	                        prev;

	                    do {
	                        prev = v;
	                        v = start + i * axis.tickSize;
	                        ticks.push(v);
	                        ++i;
	                    } while (v < axis.max && v != prev);
	                    return ticks;
	                };

					axis.tickFormatter = function (value, axis) {

						var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
						var formatted = "" + Math.round(value * factor) / factor;

						// If tickDecimals was specified, ensure that we have exactly that
						// much precision; otherwise default to the value's own precision.

						if (axis.tickDecimals != null) {
							var decimal = formatted.indexOf(".");
							var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
							if (precision < axis.tickDecimals) {
								return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
							}
						}

	                    return formatted;
	                };
	            }

	            if ($.isFunction(opts.tickFormatter))
	                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

	            if (opts.alignTicksWithAxis != null) {
	                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
	                if (otherAxis && otherAxis.used && otherAxis != axis) {
	                    // consider snapping min/max to outermost nice ticks
	                    var niceTicks = axis.tickGenerator(axis);
	                    if (niceTicks.length > 0) {
	                        if (opts.min == null)
	                            axis.min = Math.min(axis.min, niceTicks[0]);
	                        if (opts.max == null && niceTicks.length > 1)
	                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
	                    }

	                    axis.tickGenerator = function (axis) {
	                        // copy ticks, scaled to this axis
	                        var ticks = [], v, i;
	                        for (i = 0; i < otherAxis.ticks.length; ++i) {
	                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
	                            v = axis.min + v * (axis.max - axis.min);
	                            ticks.push(v);
	                        }
	                        return ticks;
	                    };

	                    // we might need an extra decimal since forced
	                    // ticks don't necessarily fit naturally
	                    if (!axis.mode && opts.tickDecimals == null) {
	                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
	                            ts = axis.tickGenerator(axis);

	                        // only proceed if the tick interval rounded
	                        // with an extra decimal doesn't give us a
	                        // zero at end
	                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
	                            axis.tickDecimals = extraDec;
	                    }
	                }
	            }
	        }

	        function setTicks(axis) {
	            var oticks = axis.options.ticks, ticks = [];
	            if (oticks == null || (typeof oticks == "number" && oticks > 0))
	                ticks = axis.tickGenerator(axis);
	            else if (oticks) {
	                if ($.isFunction(oticks))
	                    // generate the ticks
	                    ticks = oticks(axis);
	                else
	                    ticks = oticks;
	            }

	            // clean up/labelify the supplied ticks, copy them over
	            var i, v;
	            axis.ticks = [];
	            for (i = 0; i < ticks.length; ++i) {
	                var label = null;
	                var t = ticks[i];
	                if (typeof t == "object") {
	                    v = +t[0];
	                    if (t.length > 1)
	                        label = t[1];
	                }
	                else
	                    v = +t;
	                if (label == null)
	                    label = axis.tickFormatter(v, axis);
	                if (!isNaN(v))
	                    axis.ticks.push({ v: v, label: label });
	            }
	        }

	        function snapRangeToTicks(axis, ticks) {
	            if (axis.options.autoscaleMargin && ticks.length > 0) {
	                // snap to ticks
	                if (axis.options.min == null)
	                    axis.min = Math.min(axis.min, ticks[0].v);
	                if (axis.options.max == null && ticks.length > 1)
	                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
	            }
	        }

	        function draw() {

	            surface.clear();

	            executeHooks(hooks.drawBackground, [ctx]);

	            var grid = options.grid;

	            // draw background, if any
	            if (grid.show && grid.backgroundColor)
	                drawBackground();

	            if (grid.show && !grid.aboveData) {
	                drawGrid();
	            }

	            for (var i = 0; i < series.length; ++i) {
	                executeHooks(hooks.drawSeries, [ctx, series[i]]);
	                drawSeries(series[i]);
	            }

	            executeHooks(hooks.draw, [ctx]);

	            if (grid.show && grid.aboveData) {
	                drawGrid();
	            }

	            surface.render();

	            // A draw implies that either the axes or data have changed, so we
	            // should probably update the overlay highlights as well.

	            triggerRedrawOverlay();
	        }

	        function extractRange(ranges, coord) {
	            var axis, from, to, key, axes = allAxes();

	            for (var i = 0; i < axes.length; ++i) {
	                axis = axes[i];
	                if (axis.direction == coord) {
	                    key = coord + axis.n + "axis";
	                    if (!ranges[key] && axis.n == 1)
	                        key = coord + "axis"; // support x1axis as xaxis
	                    if (ranges[key]) {
	                        from = ranges[key].from;
	                        to = ranges[key].to;
	                        break;
	                    }
	                }
	            }

	            // backwards-compat stuff - to be removed in future
	            if (!ranges[key]) {
	                axis = coord == "x" ? xaxes[0] : yaxes[0];
	                from = ranges[coord + "1"];
	                to = ranges[coord + "2"];
	            }

	            // auto-reverse as an added bonus
	            if (from != null && to != null && from > to) {
	                var tmp = from;
	                from = to;
	                to = tmp;
	            }

	            return { from: from, to: to, axis: axis };
	        }

	        function drawBackground() {
	            ctx.save();
	            ctx.translate(plotOffset.left, plotOffset.top);

	            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
	            ctx.fillRect(0, 0, plotWidth, plotHeight);
	            ctx.restore();
	        }

	        function drawGrid() {
	            var i, axes, bw, bc;

	            ctx.save();
	            ctx.translate(plotOffset.left, plotOffset.top);

	            // draw markings
	            var markings = options.grid.markings;
	            if (markings) {
	                if ($.isFunction(markings)) {
	                    axes = plot.getAxes();
	                    // xmin etc. is backwards compatibility, to be
	                    // removed in the future
	                    axes.xmin = axes.xaxis.min;
	                    axes.xmax = axes.xaxis.max;
	                    axes.ymin = axes.yaxis.min;
	                    axes.ymax = axes.yaxis.max;

	                    markings = markings(axes);
	                }

	                for (i = 0; i < markings.length; ++i) {
	                    var m = markings[i],
	                        xrange = extractRange(m, "x"),
	                        yrange = extractRange(m, "y");

	                    // fill in missing
	                    if (xrange.from == null)
	                        xrange.from = xrange.axis.min;
	                    if (xrange.to == null)
	                        xrange.to = xrange.axis.max;
	                    if (yrange.from == null)
	                        yrange.from = yrange.axis.min;
	                    if (yrange.to == null)
	                        yrange.to = yrange.axis.max;

	                    // clip
	                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
	                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
	                        continue;

	                    xrange.from = Math.max(xrange.from, xrange.axis.min);
	                    xrange.to = Math.min(xrange.to, xrange.axis.max);
	                    yrange.from = Math.max(yrange.from, yrange.axis.min);
	                    yrange.to = Math.min(yrange.to, yrange.axis.max);

	                    var xequal = xrange.from === xrange.to,
	                        yequal = yrange.from === yrange.to;

	                    if (xequal && yequal) {
	                        continue;
	                    }

	                    // then draw
	                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
	                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
	                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
	                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

	                    if (xequal || yequal) {
	                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
	                            subPixel = lineWidth % 2 ? 0.5 : 0;
	                        ctx.beginPath();
	                        ctx.strokeStyle = m.color || options.grid.markingsColor;
	                        ctx.lineWidth = lineWidth;
	                        if (xequal) {
	                            ctx.moveTo(xrange.to + subPixel, yrange.from);
	                            ctx.lineTo(xrange.to + subPixel, yrange.to);
	                        } else {
	                            ctx.moveTo(xrange.from, yrange.to + subPixel);
	                            ctx.lineTo(xrange.to, yrange.to + subPixel);                            
	                        }
	                        ctx.stroke();
	                    } else {
	                        ctx.fillStyle = m.color || options.grid.markingsColor;
	                        ctx.fillRect(xrange.from, yrange.to,
	                                     xrange.to - xrange.from,
	                                     yrange.from - yrange.to);
	                    }
	                }
	            }

	            // draw the ticks
	            axes = allAxes();
	            bw = options.grid.borderWidth;

	            for (var j = 0; j < axes.length; ++j) {
	                var axis = axes[j], box = axis.box,
	                    t = axis.tickLength, x, y, xoff, yoff;
	                if (!axis.show || axis.ticks.length == 0)
	                    continue;

	                ctx.lineWidth = 1;

	                // find the edges
	                if (axis.direction == "x") {
	                    x = 0;
	                    if (t == "full")
	                        y = (axis.position == "top" ? 0 : plotHeight);
	                    else
	                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
	                }
	                else {
	                    y = 0;
	                    if (t == "full")
	                        x = (axis.position == "left" ? 0 : plotWidth);
	                    else
	                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
	                }

	                // draw tick bar
	                if (!axis.innermost) {
	                    ctx.strokeStyle = axis.options.color;
	                    ctx.beginPath();
	                    xoff = yoff = 0;
	                    if (axis.direction == "x")
	                        xoff = plotWidth + 1;
	                    else
	                        yoff = plotHeight + 1;

	                    if (ctx.lineWidth == 1) {
	                        if (axis.direction == "x") {
	                            y = Math.floor(y) + 0.5;
	                        } else {
	                            x = Math.floor(x) + 0.5;
	                        }
	                    }

	                    ctx.moveTo(x, y);
	                    ctx.lineTo(x + xoff, y + yoff);
	                    ctx.stroke();
	                }

	                // draw ticks

	                ctx.strokeStyle = axis.options.tickColor;

	                ctx.beginPath();
	                for (i = 0; i < axis.ticks.length; ++i) {
	                    var v = axis.ticks[i].v;

	                    xoff = yoff = 0;

	                    if (isNaN(v) || v < axis.min || v > axis.max
	                        // skip those lying on the axes if we got a border
	                        || (t == "full"
	                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
	                            && (v == axis.min || v == axis.max)))
	                        continue;

	                    if (axis.direction == "x") {
	                        x = axis.p2c(v);
	                        yoff = t == "full" ? -plotHeight : t;

	                        if (axis.position == "top")
	                            yoff = -yoff;
	                    }
	                    else {
	                        y = axis.p2c(v);
	                        xoff = t == "full" ? -plotWidth : t;

	                        if (axis.position == "left")
	                            xoff = -xoff;
	                    }

	                    if (ctx.lineWidth == 1) {
	                        if (axis.direction == "x")
	                            x = Math.floor(x) + 0.5;
	                        else
	                            y = Math.floor(y) + 0.5;
	                    }

	                    ctx.moveTo(x, y);
	                    ctx.lineTo(x + xoff, y + yoff);
	                }

	                ctx.stroke();
	            }


	            // draw border
	            if (bw) {
	                // If either borderWidth or borderColor is an object, then draw the border
	                // line by line instead of as one rectangle
	                bc = options.grid.borderColor;
	                if(typeof bw == "object" || typeof bc == "object") {
	                    if (typeof bw !== "object") {
	                        bw = {top: bw, right: bw, bottom: bw, left: bw};
	                    }
	                    if (typeof bc !== "object") {
	                        bc = {top: bc, right: bc, bottom: bc, left: bc};
	                    }

	                    if (bw.top > 0) {
	                        ctx.strokeStyle = bc.top;
	                        ctx.lineWidth = bw.top;
	                        ctx.beginPath();
	                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
	                        ctx.lineTo(plotWidth, 0 - bw.top/2);
	                        ctx.stroke();
	                    }

	                    if (bw.right > 0) {
	                        ctx.strokeStyle = bc.right;
	                        ctx.lineWidth = bw.right;
	                        ctx.beginPath();
	                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
	                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
	                        ctx.stroke();
	                    }

	                    if (bw.bottom > 0) {
	                        ctx.strokeStyle = bc.bottom;
	                        ctx.lineWidth = bw.bottom;
	                        ctx.beginPath();
	                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
	                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
	                        ctx.stroke();
	                    }

	                    if (bw.left > 0) {
	                        ctx.strokeStyle = bc.left;
	                        ctx.lineWidth = bw.left;
	                        ctx.beginPath();
	                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
	                        ctx.lineTo(0- bw.left/2, 0);
	                        ctx.stroke();
	                    }
	                }
	                else {
	                    ctx.lineWidth = bw;
	                    ctx.strokeStyle = options.grid.borderColor;
	                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
	                }
	            }

	            ctx.restore();
	        }

	        function drawAxisLabels() {

	            $.each(allAxes(), function (_, axis) {
	                var box = axis.box,
	                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
	                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
	                    font = axis.options.font || "flot-tick-label tickLabel",
	                    tick, x, y, halign, valign;

	                // Remove text before checking for axis.show and ticks.length;
	                // otherwise plugins, like flot-tickrotor, that draw their own
	                // tick labels will end up with both theirs and the defaults.

	                surface.removeText(layer);

	                if (!axis.show || axis.ticks.length == 0)
	                    return;

	                for (var i = 0; i < axis.ticks.length; ++i) {

	                    tick = axis.ticks[i];
	                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
	                        continue;

	                    if (axis.direction == "x") {
	                        halign = "center";
	                        x = plotOffset.left + axis.p2c(tick.v);
	                        if (axis.position == "bottom") {
	                            y = box.top + box.padding;
	                        } else {
	                            y = box.top + box.height - box.padding;
	                            valign = "bottom";
	                        }
	                    } else {
	                        valign = "middle";
	                        y = plotOffset.top + axis.p2c(tick.v);
	                        if (axis.position == "left") {
	                            x = box.left + box.width - box.padding;
	                            halign = "right";
	                        } else {
	                            x = box.left + box.padding;
	                        }
	                    }

	                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
	                }
	            });
	        }

	        function drawSeries(series) {
	            if (series.lines.show)
	                drawSeriesLines(series);
	            if (series.bars.show)
	                drawSeriesBars(series);
	            if (series.points.show)
	                drawSeriesPoints(series);
	        }

	        function drawSeriesLines(series) {
	            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
	                var points = datapoints.points,
	                    ps = datapoints.pointsize,
	                    prevx = null, prevy = null;

	                ctx.beginPath();
	                for (var i = ps; i < points.length; i += ps) {
	                    var x1 = points[i - ps], y1 = points[i - ps + 1],
	                        x2 = points[i], y2 = points[i + 1];

	                    if (x1 == null || x2 == null)
	                        continue;

	                    // clip with ymin
	                    if (y1 <= y2 && y1 < axisy.min) {
	                        if (y2 < axisy.min)
	                            continue;   // line segment is outside
	                        // compute new intersection point
	                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y1 = axisy.min;
	                    }
	                    else if (y2 <= y1 && y2 < axisy.min) {
	                        if (y1 < axisy.min)
	                            continue;
	                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y2 = axisy.min;
	                    }

	                    // clip with ymax
	                    if (y1 >= y2 && y1 > axisy.max) {
	                        if (y2 > axisy.max)
	                            continue;
	                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y1 = axisy.max;
	                    }
	                    else if (y2 >= y1 && y2 > axisy.max) {
	                        if (y1 > axisy.max)
	                            continue;
	                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y2 = axisy.max;
	                    }

	                    // clip with xmin
	                    if (x1 <= x2 && x1 < axisx.min) {
	                        if (x2 < axisx.min)
	                            continue;
	                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x1 = axisx.min;
	                    }
	                    else if (x2 <= x1 && x2 < axisx.min) {
	                        if (x1 < axisx.min)
	                            continue;
	                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x2 = axisx.min;
	                    }

	                    // clip with xmax
	                    if (x1 >= x2 && x1 > axisx.max) {
	                        if (x2 > axisx.max)
	                            continue;
	                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x1 = axisx.max;
	                    }
	                    else if (x2 >= x1 && x2 > axisx.max) {
	                        if (x1 > axisx.max)
	                            continue;
	                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x2 = axisx.max;
	                    }

	                    if (x1 != prevx || y1 != prevy)
	                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

	                    prevx = x2;
	                    prevy = y2;
	                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
	                }
	                ctx.stroke();
	            }

	            function plotLineArea(datapoints, axisx, axisy) {
	                var points = datapoints.points,
	                    ps = datapoints.pointsize,
	                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
	                    i = 0, top, areaOpen = false,
	                    ypos = 1, segmentStart = 0, segmentEnd = 0;

	                // we process each segment in two turns, first forward
	                // direction to sketch out top, then once we hit the
	                // end we go backwards to sketch the bottom
	                while (true) {
	                    if (ps > 0 && i > points.length + ps)
	                        break;

	                    i += ps; // ps is negative if going backwards

	                    var x1 = points[i - ps],
	                        y1 = points[i - ps + ypos],
	                        x2 = points[i], y2 = points[i + ypos];

	                    if (areaOpen) {
	                        if (ps > 0 && x1 != null && x2 == null) {
	                            // at turning point
	                            segmentEnd = i;
	                            ps = -ps;
	                            ypos = 2;
	                            continue;
	                        }

	                        if (ps < 0 && i == segmentStart + ps) {
	                            // done with the reverse sweep
	                            ctx.fill();
	                            areaOpen = false;
	                            ps = -ps;
	                            ypos = 1;
	                            i = segmentStart = segmentEnd + ps;
	                            continue;
	                        }
	                    }

	                    if (x1 == null || x2 == null)
	                        continue;

	                    // clip x values

	                    // clip with xmin
	                    if (x1 <= x2 && x1 < axisx.min) {
	                        if (x2 < axisx.min)
	                            continue;
	                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x1 = axisx.min;
	                    }
	                    else if (x2 <= x1 && x2 < axisx.min) {
	                        if (x1 < axisx.min)
	                            continue;
	                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x2 = axisx.min;
	                    }

	                    // clip with xmax
	                    if (x1 >= x2 && x1 > axisx.max) {
	                        if (x2 > axisx.max)
	                            continue;
	                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x1 = axisx.max;
	                    }
	                    else if (x2 >= x1 && x2 > axisx.max) {
	                        if (x1 > axisx.max)
	                            continue;
	                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
	                        x2 = axisx.max;
	                    }

	                    if (!areaOpen) {
	                        // open area
	                        ctx.beginPath();
	                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
	                        areaOpen = true;
	                    }

	                    // now first check the case where both is outside
	                    if (y1 >= axisy.max && y2 >= axisy.max) {
	                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
	                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
	                        continue;
	                    }
	                    else if (y1 <= axisy.min && y2 <= axisy.min) {
	                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
	                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
	                        continue;
	                    }

	                    // else it's a bit more complicated, there might
	                    // be a flat maxed out rectangle first, then a
	                    // triangular cutout or reverse; to find these
	                    // keep track of the current x values
	                    var x1old = x1, x2old = x2;

	                    // clip the y values, without shortcutting, we
	                    // go through all cases in turn

	                    // clip with ymin
	                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
	                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y1 = axisy.min;
	                    }
	                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
	                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y2 = axisy.min;
	                    }

	                    // clip with ymax
	                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
	                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y1 = axisy.max;
	                    }
	                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
	                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
	                        y2 = axisy.max;
	                    }

	                    // if the x value was changed we got a rectangle
	                    // to fill
	                    if (x1 != x1old) {
	                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
	                        // it goes to (x1, y1), but we fill that below
	                    }

	                    // fill triangular section, this sometimes result
	                    // in redundant points if (x1, y1) hasn't changed
	                    // from previous line to, but we just ignore that
	                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
	                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

	                    // fill the other rectangle if it's there
	                    if (x2 != x2old) {
	                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
	                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
	                    }
	                }
	            }

	            ctx.save();
	            ctx.translate(plotOffset.left, plotOffset.top);
	            ctx.lineJoin = "round";

	            var lw = series.lines.lineWidth,
	                sw = series.shadowSize;
	            // FIXME: consider another form of shadow when filling is turned on
	            if (lw > 0 && sw > 0) {
	                // draw shadow as a thick and thin line with transparency
	                ctx.lineWidth = sw;
	                ctx.strokeStyle = "rgba(0,0,0,0.1)";
	                // position shadow at angle from the mid of line
	                var angle = Math.PI/18;
	                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
	                ctx.lineWidth = sw/2;
	                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
	            }

	            ctx.lineWidth = lw;
	            ctx.strokeStyle = series.color;
	            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
	            if (fillStyle) {
	                ctx.fillStyle = fillStyle;
	                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
	            }

	            if (lw > 0)
	                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
	            ctx.restore();
	        }

	        function drawSeriesPoints(series) {
	            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
	                var points = datapoints.points, ps = datapoints.pointsize;

	                for (var i = 0; i < points.length; i += ps) {
	                    var x = points[i], y = points[i + 1];
	                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
	                        continue;

	                    ctx.beginPath();
	                    x = axisx.p2c(x);
	                    y = axisy.p2c(y) + offset;
	                    if (symbol == "circle")
	                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
	                    else
	                        symbol(ctx, x, y, radius, shadow);
	                    ctx.closePath();

	                    if (fillStyle) {
	                        ctx.fillStyle = fillStyle;
	                        ctx.fill();
	                    }
	                    ctx.stroke();
	                }
	            }

	            ctx.save();
	            ctx.translate(plotOffset.left, plotOffset.top);

	            var lw = series.points.lineWidth,
	                sw = series.shadowSize,
	                radius = series.points.radius,
	                symbol = series.points.symbol;

	            // If the user sets the line width to 0, we change it to a very 
	            // small value. A line width of 0 seems to force the default of 1.
	            // Doing the conditional here allows the shadow setting to still be 
	            // optional even with a lineWidth of 0.

	            if( lw == 0 )
	                lw = 0.0001;

	            if (lw > 0 && sw > 0) {
	                // draw shadow in two steps
	                var w = sw / 2;
	                ctx.lineWidth = w;
	                ctx.strokeStyle = "rgba(0,0,0,0.1)";
	                plotPoints(series.datapoints, radius, null, w + w/2, true,
	                           series.xaxis, series.yaxis, symbol);

	                ctx.strokeStyle = "rgba(0,0,0,0.2)";
	                plotPoints(series.datapoints, radius, null, w/2, true,
	                           series.xaxis, series.yaxis, symbol);
	            }

	            ctx.lineWidth = lw;
	            ctx.strokeStyle = series.color;
	            plotPoints(series.datapoints, radius,
	                       getFillStyle(series.points, series.color), 0, false,
	                       series.xaxis, series.yaxis, symbol);
	            ctx.restore();
	        }

	        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
	            var left, right, bottom, top,
	                drawLeft, drawRight, drawTop, drawBottom,
	                tmp;

	            // in horizontal mode, we start the bar from the left
	            // instead of from the bottom so it appears to be
	            // horizontal rather than vertical
	            if (horizontal) {
	                drawBottom = drawRight = drawTop = true;
	                drawLeft = false;
	                left = b;
	                right = x;
	                top = y + barLeft;
	                bottom = y + barRight;

	                // account for negative bars
	                if (right < left) {
	                    tmp = right;
	                    right = left;
	                    left = tmp;
	                    drawLeft = true;
	                    drawRight = false;
	                }
	            }
	            else {
	                drawLeft = drawRight = drawTop = true;
	                drawBottom = false;
	                left = x + barLeft;
	                right = x + barRight;
	                bottom = b;
	                top = y;

	                // account for negative bars
	                if (top < bottom) {
	                    tmp = top;
	                    top = bottom;
	                    bottom = tmp;
	                    drawBottom = true;
	                    drawTop = false;
	                }
	            }

	            // clip
	            if (right < axisx.min || left > axisx.max ||
	                top < axisy.min || bottom > axisy.max)
	                return;

	            if (left < axisx.min) {
	                left = axisx.min;
	                drawLeft = false;
	            }

	            if (right > axisx.max) {
	                right = axisx.max;
	                drawRight = false;
	            }

	            if (bottom < axisy.min) {
	                bottom = axisy.min;
	                drawBottom = false;
	            }

	            if (top > axisy.max) {
	                top = axisy.max;
	                drawTop = false;
	            }

	            left = axisx.p2c(left);
	            bottom = axisy.p2c(bottom);
	            right = axisx.p2c(right);
	            top = axisy.p2c(top);

	            // fill the bar
	            if (fillStyleCallback) {
	                c.fillStyle = fillStyleCallback(bottom, top);
	                c.fillRect(left, top, right - left, bottom - top)
	            }

	            // draw outline
	            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
	                c.beginPath();

	                // FIXME: inline moveTo is buggy with excanvas
	                c.moveTo(left, bottom);
	                if (drawLeft)
	                    c.lineTo(left, top);
	                else
	                    c.moveTo(left, top);
	                if (drawTop)
	                    c.lineTo(right, top);
	                else
	                    c.moveTo(right, top);
	                if (drawRight)
	                    c.lineTo(right, bottom);
	                else
	                    c.moveTo(right, bottom);
	                if (drawBottom)
	                    c.lineTo(left, bottom);
	                else
	                    c.moveTo(left, bottom);
	                c.stroke();
	            }
	        }

	        function drawSeriesBars(series) {
	            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
	                var points = datapoints.points, ps = datapoints.pointsize;

	                for (var i = 0; i < points.length; i += ps) {
	                    if (points[i] == null)
	                        continue;
	                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
	                }
	            }

	            ctx.save();
	            ctx.translate(plotOffset.left, plotOffset.top);

	            // FIXME: figure out a way to add shadows (for instance along the right edge)
	            ctx.lineWidth = series.bars.lineWidth;
	            ctx.strokeStyle = series.color;

	            var barLeft;

	            switch (series.bars.align) {
	                case "left":
	                    barLeft = 0;
	                    break;
	                case "right":
	                    barLeft = -series.bars.barWidth;
	                    break;
	                default:
	                    barLeft = -series.bars.barWidth / 2;
	            }

	            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
	            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
	            ctx.restore();
	        }

	        function getFillStyle(filloptions, seriesColor, bottom, top) {
	            var fill = filloptions.fill;
	            if (!fill)
	                return null;

	            if (filloptions.fillColor)
	                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

	            var c = $.color.parse(seriesColor);
	            c.a = typeof fill == "number" ? fill : 0.4;
	            c.normalize();
	            return c.toString();
	        }

	        function insertLegend() {

	            if (options.legend.container != null) {
	                $(options.legend.container).html("");
	            } else {
	                placeholder.find(".legend").remove();
	            }

	            if (!options.legend.show) {
	                return;
	            }

	            var fragments = [], entries = [], rowStarted = false,
	                lf = options.legend.labelFormatter, s, label;

	            // Build a list of legend entries, with each having a label and a color

	            for (var i = 0; i < series.length; ++i) {
	                s = series[i];
	                if (s.label) {
	                    label = lf ? lf(s.label, s) : s.label;
	                    if (label) {
	                        entries.push({
	                            label: label,
	                            color: s.color
	                        });
	                    }
	                }
	            }

	            // Sort the legend using either the default or a custom comparator

	            if (options.legend.sorted) {
	                if ($.isFunction(options.legend.sorted)) {
	                    entries.sort(options.legend.sorted);
	                } else if (options.legend.sorted == "reverse") {
	                	entries.reverse();
	                } else {
	                    var ascending = options.legend.sorted != "descending";
	                    entries.sort(function(a, b) {
	                        return a.label == b.label ? 0 : (
	                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
	                        );
	                    });
	                }
	            }

	            // Generate markup for the list of entries, in their final order

	            for (var i = 0; i < entries.length; ++i) {

	                var entry = entries[i];

	                if (i % options.legend.noColumns == 0) {
	                    if (rowStarted)
	                        fragments.push('</tr>');
	                    fragments.push('<tr>');
	                    rowStarted = true;
	                }

	                fragments.push(
	                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
	                    '<td class="legendLabel">' + entry.label + '</td>'
	                );
	            }

	            if (rowStarted)
	                fragments.push('</tr>');

	            if (fragments.length == 0)
	                return;

	            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
	            if (options.legend.container != null)
	                $(options.legend.container).html(table);
	            else {
	                var pos = "",
	                    p = options.legend.position,
	                    m = options.legend.margin;
	                if (m[0] == null)
	                    m = [m, m];
	                if (p.charAt(0) == "n")
	                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
	                else if (p.charAt(0) == "s")
	                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
	                if (p.charAt(1) == "e")
	                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
	                else if (p.charAt(1) == "w")
	                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
	                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
	                if (options.legend.backgroundOpacity != 0.0) {
	                    // put in the transparent background
	                    // separately to avoid blended labels and
	                    // label boxes
	                    var c = options.legend.backgroundColor;
	                    if (c == null) {
	                        c = options.grid.backgroundColor;
	                        if (c && typeof c == "string")
	                            c = $.color.parse(c);
	                        else
	                            c = $.color.extract(legend, 'background-color');
	                        c.a = 1;
	                        c = c.toString();
	                    }
	                    var div = legend.children();
	                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
	                }
	            }
	        }


	        // interactive features

	        var highlights = [],
	            redrawTimeout = null;

	        // returns the data item the mouse is over, or null if none is found
	        function findNearbyItem(mouseX, mouseY, seriesFilter) {
	            var maxDistance = options.grid.mouseActiveRadius,
	                smallestDistance = maxDistance * maxDistance + 1,
	                item = null, foundPoint = false, i, j, ps;

	            for (i = series.length - 1; i >= 0; --i) {
	                if (!seriesFilter(series[i]))
	                    continue;

	                var s = series[i],
	                    axisx = s.xaxis,
	                    axisy = s.yaxis,
	                    points = s.datapoints.points,
	                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
	                    my = axisy.c2p(mouseY),
	                    maxx = maxDistance / axisx.scale,
	                    maxy = maxDistance / axisy.scale;

	                ps = s.datapoints.pointsize;
	                // with inverse transforms, we can't use the maxx/maxy
	                // optimization, sadly
	                if (axisx.options.inverseTransform)
	                    maxx = Number.MAX_VALUE;
	                if (axisy.options.inverseTransform)
	                    maxy = Number.MAX_VALUE;

	                if (s.lines.show || s.points.show) {
	                    for (j = 0; j < points.length; j += ps) {
	                        var x = points[j], y = points[j + 1];
	                        if (x == null)
	                            continue;

	                        // For points and lines, the cursor must be within a
	                        // certain distance to the data point
	                        if (x - mx > maxx || x - mx < -maxx ||
	                            y - my > maxy || y - my < -maxy)
	                            continue;

	                        // We have to calculate distances in pixels, not in
	                        // data units, because the scales of the axes may be different
	                        var dx = Math.abs(axisx.p2c(x) - mouseX),
	                            dy = Math.abs(axisy.p2c(y) - mouseY),
	                            dist = dx * dx + dy * dy; // we save the sqrt

	                        // use <= to ensure last point takes precedence
	                        // (last generally means on top of)
	                        if (dist < smallestDistance) {
	                            smallestDistance = dist;
	                            item = [i, j / ps];
	                        }
	                    }
	                }

	                if (s.bars.show && !item) { // no other point can be nearby

	                    var barLeft, barRight;

	                    switch (s.bars.align) {
	                        case "left":
	                            barLeft = 0;
	                            break;
	                        case "right":
	                            barLeft = -s.bars.barWidth;
	                            break;
	                        default:
	                            barLeft = -s.bars.barWidth / 2;
	                    }

	                    barRight = barLeft + s.bars.barWidth;

	                    for (j = 0; j < points.length; j += ps) {
	                        var x = points[j], y = points[j + 1], b = points[j + 2];
	                        if (x == null)
	                            continue;

	                        // for a bar graph, the cursor must be inside the bar
	                        if (series[i].bars.horizontal ?
	                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
	                             my >= y + barLeft && my <= y + barRight) :
	                            (mx >= x + barLeft && mx <= x + barRight &&
	                             my >= Math.min(b, y) && my <= Math.max(b, y)))
	                                item = [i, j / ps];
	                    }
	                }
	            }

	            if (item) {
	                i = item[0];
	                j = item[1];
	                ps = series[i].datapoints.pointsize;

	                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
	                         dataIndex: j,
	                         series: series[i],
	                         seriesIndex: i };
	            }

	            return null;
	        }

	        function onMouseMove(e) {
	            if (options.grid.hoverable)
	                triggerClickHoverEvent("plothover", e,
	                                       function (s) { return s["hoverable"] != false; });
	        }

	        function onMouseLeave(e) {
	            if (options.grid.hoverable)
	                triggerClickHoverEvent("plothover", e,
	                                       function (s) { return false; });
	        }

	        function onClick(e) {
	            triggerClickHoverEvent("plotclick", e,
	                                   function (s) { return s["clickable"] != false; });
	        }

	        // trigger click or hover event (they send the same parameters
	        // so we share their code)
	        function triggerClickHoverEvent(eventname, event, seriesFilter) {
	            var offset = eventHolder.offset(),
	                canvasX = event.pageX - offset.left - plotOffset.left,
	                canvasY = event.pageY - offset.top - plotOffset.top,
	            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

	            pos.pageX = event.pageX;
	            pos.pageY = event.pageY;

	            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

	            if (item) {
	                // fill in mouse pos for any listeners out there
	                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
	                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
	            }

	            if (options.grid.autoHighlight) {
	                // clear auto-highlights
	                for (var i = 0; i < highlights.length; ++i) {
	                    var h = highlights[i];
	                    if (h.auto == eventname &&
	                        !(item && h.series == item.series &&
	                          h.point[0] == item.datapoint[0] &&
	                          h.point[1] == item.datapoint[1]))
	                        unhighlight(h.series, h.point);
	                }

	                if (item)
	                    highlight(item.series, item.datapoint, eventname);
	            }

	            placeholder.trigger(eventname, [ pos, item ]);
	        }

	        function triggerRedrawOverlay() {
	            var t = options.interaction.redrawOverlayInterval;
	            if (t == -1) {      // skip event queue
	                drawOverlay();
	                return;
	            }

	            if (!redrawTimeout)
	                redrawTimeout = setTimeout(drawOverlay, t);
	        }

	        function drawOverlay() {
	            redrawTimeout = null;

	            // draw highlights
	            octx.save();
	            overlay.clear();
	            octx.translate(plotOffset.left, plotOffset.top);

	            var i, hi;
	            for (i = 0; i < highlights.length; ++i) {
	                hi = highlights[i];

	                if (hi.series.bars.show)
	                    drawBarHighlight(hi.series, hi.point);
	                else
	                    drawPointHighlight(hi.series, hi.point);
	            }
	            octx.restore();

	            executeHooks(hooks.drawOverlay, [octx]);
	        }

	        function highlight(s, point, auto) {
	            if (typeof s == "number")
	                s = series[s];

	            if (typeof point == "number") {
	                var ps = s.datapoints.pointsize;
	                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
	            }

	            var i = indexOfHighlight(s, point);
	            if (i == -1) {
	                highlights.push({ series: s, point: point, auto: auto });

	                triggerRedrawOverlay();
	            }
	            else if (!auto)
	                highlights[i].auto = false;
	        }

	        function unhighlight(s, point) {
	            if (s == null && point == null) {
	                highlights = [];
	                triggerRedrawOverlay();
	                return;
	            }

	            if (typeof s == "number")
	                s = series[s];

	            if (typeof point == "number") {
	                var ps = s.datapoints.pointsize;
	                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
	            }

	            var i = indexOfHighlight(s, point);
	            if (i != -1) {
	                highlights.splice(i, 1);

	                triggerRedrawOverlay();
	            }
	        }

	        function indexOfHighlight(s, p) {
	            for (var i = 0; i < highlights.length; ++i) {
	                var h = highlights[i];
	                if (h.series == s && h.point[0] == p[0]
	                    && h.point[1] == p[1])
	                    return i;
	            }
	            return -1;
	        }

	        function drawPointHighlight(series, point) {
	            var x = point[0], y = point[1],
	                axisx = series.xaxis, axisy = series.yaxis,
	                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

	            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
	                return;

	            var pointRadius = series.points.radius + series.points.lineWidth / 2;
	            octx.lineWidth = pointRadius;
	            octx.strokeStyle = highlightColor;
	            var radius = 1.5 * pointRadius;
	            x = axisx.p2c(x);
	            y = axisy.p2c(y);

	            octx.beginPath();
	            if (series.points.symbol == "circle")
	                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
	            else
	                series.points.symbol(octx, x, y, radius, false);
	            octx.closePath();
	            octx.stroke();
	        }

	        function drawBarHighlight(series, point) {
	            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
	                fillStyle = highlightColor,
	                barLeft;

	            switch (series.bars.align) {
	                case "left":
	                    barLeft = 0;
	                    break;
	                case "right":
	                    barLeft = -series.bars.barWidth;
	                    break;
	                default:
	                    barLeft = -series.bars.barWidth / 2;
	            }

	            octx.lineWidth = series.bars.lineWidth;
	            octx.strokeStyle = highlightColor;

	            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
	                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
	        }

	        function getColorOrGradient(spec, bottom, top, defaultColor) {
	            if (typeof spec == "string")
	                return spec;
	            else {
	                // assume this is a gradient spec; IE currently only
	                // supports a simple vertical gradient properly, so that's
	                // what we support too
	                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

	                for (var i = 0, l = spec.colors.length; i < l; ++i) {
	                    var c = spec.colors[i];
	                    if (typeof c != "string") {
	                        var co = $.color.parse(defaultColor);
	                        if (c.brightness != null)
	                            co = co.scale('rgb', c.brightness);
	                        if (c.opacity != null)
	                            co.a *= c.opacity;
	                        c = co.toString();
	                    }
	                    gradient.addColorStop(i / (l - 1), c);
	                }

	                return gradient;
	            }
	        }
	    }

	    // Add the plot function to the top level of the jQuery object

	    $.plot = function(placeholder, data, options) {
	        //var t0 = new Date();
	        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
	        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
	        return plot;
	    };

	    $.plot.version = "0.8.3";

	    $.plot.plugins = [];

	    // Also add the plot function as a chainable property

	    $.fn.plot = function(data, options) {
	        return this.each(function() {
	            $.plot(this, data, options);
	        });
	    };

	    // round to nearby lower multiple of base
	    function floorInBase(n, base) {
	        return base * Math.floor(n / base);
	    }

	})(jQuery);


/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {

	/* Flot plugin for automatically redrawing plots as the placeholder resizes.

	Copyright (c) 2007-2014 IOLA and Ole Laursen.
	Licensed under the MIT license.

	It works by listening for changes on the placeholder div (through the jQuery
	resize event plugin) - if the size changes, it will redraw the plot.

	There are no options. If you need to disable the plugin for some plots, you
	can just fix the size of their placeholders.

	*/

	/* Inline dependency:
	 * jQuery resize event - v1.1 - 3/14/2010
	 * http://benalman.com/projects/jquery-resize-plugin/
	 *
	 * Copyright (c) 2010 "Cowboy" Ben Alman
	 * Dual licensed under the MIT and GPL licenses.
	 * http://benalman.com/about/license/
	 */
	(function($,e,t){"$:nomunge";var i=[],n=$.resize=$.extend($.resize,{}),a,r=false,s="setTimeout",u="resize",m=u+"-special-event",o="pendingDelay",l="activeDelay",f="throttleWindow";n[o]=200;n[l]=20;n[f]=true;$.event.special[u]={setup:function(){if(!n[f]&&this[s]){return false}var e=$(this);i.push(this);e.data(m,{w:e.width(),h:e.height()});if(i.length===1){a=t;h()}},teardown:function(){if(!n[f]&&this[s]){return false}var e=$(this);for(var t=i.length-1;t>=0;t--){if(i[t]==this){i.splice(t,1);break}}e.removeData(m);if(!i.length){if(r){cancelAnimationFrame(a)}else{clearTimeout(a)}a=null}},add:function(e){if(!n[f]&&this[s]){return false}var i;function a(e,n,a){var r=$(this),s=r.data(m)||{};s.w=n!==t?n:r.width();s.h=a!==t?a:r.height();i.apply(this,arguments)}if($.isFunction(e)){i=e;return a}else{i=e.handler;e.handler=a}}};function h(t){if(r===true){r=t||1}for(var s=i.length-1;s>=0;s--){var l=$(i[s]);if(l[0]==e||l.is(":visible")){var f=l.width(),c=l.height(),d=l.data(m);if(d&&(f!==d.w||c!==d.h)){l.trigger(u,[d.w=f,d.h=c]);r=t||true}}else{d=l.data(m);d.w=0;d.h=0}}if(a!==null){if(r&&(t==null||t-r<1e3)){a=e.requestAnimationFrame(h)}else{a=setTimeout(h,n[o]);r=false}}}if(!e.requestAnimationFrame){e.requestAnimationFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t,i){return e.setTimeout(function(){t((new Date).getTime())},n[l])}}()}if(!e.cancelAnimationFrame){e.cancelAnimationFrame=function(){return e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}()}})(jQuery,this);

	(function ($) {
	    var options = { }; // no options

	    function init(plot) {
	        function onResize() {
	            var placeholder = plot.getPlaceholder();

	            // somebody might have hidden us and we can't plot
	            // when we don't have the dimensions
	            if (placeholder.width() == 0 || placeholder.height() == 0)
	                return;

	            plot.resize();
	            plot.setupGrid();
	            plot.draw();
	        }
	        
	        function bindEvents(plot, eventHolder) {
	            plot.getPlaceholder().resize(onResize);
	        }

	        function shutdown(plot, eventHolder) {
	            plot.getPlaceholder().unbind("resize", onResize);
	        }
	        
	        plot.hooks.bindEvents.push(bindEvents);
	        plot.hooks.shutdown.push(shutdown);
	    }
	    
	    $.plot.plugins.push({
	        init: init,
	        options: options,
	        name: 'resize',
	        version: '1.0'
	    });
	})(jQuery);
	}.call(window));

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	/* Flot plugin for plotting textual data or categories.

	Copyright (c) 2007-2014 IOLA and Ole Laursen.
	Licensed under the MIT license.

	Consider a dataset like [["February", 34], ["March", 20], ...]. This plugin
	allows you to plot such a dataset directly.

	To enable it, you must specify mode: "categories" on the axis with the textual
	labels, e.g.

		$.plot("#placeholder", data, { xaxis: { mode: "categories" } });

	By default, the labels are ordered as they are met in the data series. If you
	need a different ordering, you can specify "categories" on the axis options
	and list the categories there:

		xaxis: {
			mode: "categories",
			categories: ["February", "March", "April"]
		}

	If you need to customize the distances between the categories, you can specify
	"categories" as an object mapping labels to values

		xaxis: {
			mode: "categories",
			categories: { "February": 1, "March": 3, "April": 4 }
		}

	If you don't specify all categories, the remaining categories will be numbered
	from the max value plus 1 (with a spacing of 1 between each).

	Internally, the plugin works by transforming the input data through an auto-
	generated mapping where the first category becomes 0, the second 1, etc.
	Hence, a point like ["February", 34] becomes [0, 34] internally in Flot (this
	is visible in hover and click events that return numbers rather than the
	category labels). The plugin also overrides the tick generator to spit out the
	categories as ticks instead of the values.

	If you need to map a value back to its label, the mapping is always accessible
	as "categories" on the axis object, e.g. plot.getAxes().xaxis.categories.

	*/

	(function ($) {
	    var options = {
	        xaxis: {
	            categories: null
	        },
	        yaxis: {
	            categories: null
	        }
	    };
	    
	    function processRawData(plot, series, data, datapoints) {
	        // if categories are enabled, we need to disable
	        // auto-transformation to numbers so the strings are intact
	        // for later processing

	        var xCategories = series.xaxis.options.mode == "categories",
	            yCategories = series.yaxis.options.mode == "categories";
	        
	        if (!(xCategories || yCategories))
	            return;

	        var format = datapoints.format;

	        if (!format) {
	            // FIXME: auto-detection should really not be defined here
	            var s = series;
	            format = [];
	            format.push({ x: true, number: true, required: true });
	            format.push({ y: true, number: true, required: true });

	            if (s.bars.show || (s.lines.show && s.lines.fill)) {
	                var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
	                format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
	                if (s.bars.horizontal) {
	                    delete format[format.length - 1].y;
	                    format[format.length - 1].x = true;
	                }
	            }
	            
	            datapoints.format = format;
	        }

	        for (var m = 0; m < format.length; ++m) {
	            if (format[m].x && xCategories)
	                format[m].number = false;
	            
	            if (format[m].y && yCategories)
	                format[m].number = false;
	        }
	    }

	    function getNextIndex(categories) {
	        var index = -1;
	        
	        for (var v in categories)
	            if (categories[v] > index)
	                index = categories[v];

	        return index + 1;
	    }

	    function categoriesTickGenerator(axis) {
	        var res = [];
	        for (var label in axis.categories) {
	            var v = axis.categories[label];
	            if (v >= axis.min && v <= axis.max)
	                res.push([v, label]);
	        }

	        res.sort(function (a, b) { return a[0] - b[0]; });

	        return res;
	    }
	    
	    function setupCategoriesForAxis(series, axis, datapoints) {
	        if (series[axis].options.mode != "categories")
	            return;
	        
	        if (!series[axis].categories) {
	            // parse options
	            var c = {}, o = series[axis].options.categories || {};
	            if ($.isArray(o)) {
	                for (var i = 0; i < o.length; ++i)
	                    c[o[i]] = i;
	            }
	            else {
	                for (var v in o)
	                    c[v] = o[v];
	            }
	            
	            series[axis].categories = c;
	        }

	        // fix ticks
	        if (!series[axis].options.ticks)
	            series[axis].options.ticks = categoriesTickGenerator;

	        transformPointsOnAxis(datapoints, axis, series[axis].categories);
	    }
	    
	    function transformPointsOnAxis(datapoints, axis, categories) {
	        // go through the points, transforming them
	        var points = datapoints.points,
	            ps = datapoints.pointsize,
	            format = datapoints.format,
	            formatColumn = axis.charAt(0),
	            index = getNextIndex(categories);

	        for (var i = 0; i < points.length; i += ps) {
	            if (points[i] == null)
	                continue;
	            
	            for (var m = 0; m < ps; ++m) {
	                var val = points[i + m];

	                if (val == null || !format[m][formatColumn])
	                    continue;

	                if (!(val in categories)) {
	                    categories[val] = index;
	                    ++index;
	                }
	                
	                points[i + m] = categories[val];
	            }
	        }
	    }

	    function processDatapoints(plot, series, datapoints) {
	        setupCategoriesForAxis(series, "xaxis", datapoints);
	        setupCategoriesForAxis(series, "yaxis", datapoints);
	    }

	    function init(plot) {
	        plot.hooks.processRawData.push(processRawData);
	        plot.hooks.processDatapoints.push(processDatapoints);
	    }
	    
	    $.plot.plugins.push({
	        init: init,
	        options: options,
	        name: 'categories',
	        version: '1.0'
	    });
	})(jQuery);


/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	/* Pretty handling of time axes.

	Copyright (c) 2007-2014 IOLA and Ole Laursen.
	Licensed under the MIT license.

	Set axis.mode to "time" to enable. See the section "Time series data" in
	API.txt for details.

	*/

	(function($) {

		var options = {
			xaxis: {
				timezone: null,		// "browser" for local to the client or timezone for timezone-js
				timeformat: null,	// format string to use
				twelveHourClock: false,	// 12 or 24 time in time mode
				monthNames: null	// list of names of months
			}
		};

		// round to nearby lower multiple of base

		function floorInBase(n, base) {
			return base * Math.floor(n / base);
		}

		// Returns a string with the date d formatted according to fmt.
		// A subset of the Open Group's strftime format is supported.

		function formatDate(d, fmt, monthNames, dayNames) {

			if (typeof d.strftime == "function") {
				return d.strftime(fmt);
			}

			var leftPad = function(n, pad) {
				n = "" + n;
				pad = "" + (pad == null ? "0" : pad);
				return n.length == 1 ? pad + n : n;
			};

			var r = [];
			var escape = false;
			var hours = d.getHours();
			var isAM = hours < 12;

			if (monthNames == null) {
				monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			}

			if (dayNames == null) {
				dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			}

			var hours12;

			if (hours > 12) {
				hours12 = hours - 12;
			} else if (hours == 0) {
				hours12 = 12;
			} else {
				hours12 = hours;
			}

			for (var i = 0; i < fmt.length; ++i) {

				var c = fmt.charAt(i);

				if (escape) {
					switch (c) {
						case 'a': c = "" + dayNames[d.getDay()]; break;
						case 'b': c = "" + monthNames[d.getMonth()]; break;
						case 'd': c = leftPad(d.getDate()); break;
						case 'e': c = leftPad(d.getDate(), " "); break;
						case 'h':	// For back-compat with 0.7; remove in 1.0
						case 'H': c = leftPad(hours); break;
						case 'I': c = leftPad(hours12); break;
						case 'l': c = leftPad(hours12, " "); break;
						case 'm': c = leftPad(d.getMonth() + 1); break;
						case 'M': c = leftPad(d.getMinutes()); break;
						// quarters not in Open Group's strftime specification
						case 'q':
							c = "" + (Math.floor(d.getMonth() / 3) + 1); break;
						case 'S': c = leftPad(d.getSeconds()); break;
						case 'y': c = leftPad(d.getFullYear() % 100); break;
						case 'Y': c = "" + d.getFullYear(); break;
						case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
						case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
						case 'w': c = "" + d.getDay(); break;
					}
					r.push(c);
					escape = false;
				} else {
					if (c == "%") {
						escape = true;
					} else {
						r.push(c);
					}
				}
			}

			return r.join("");
		}

		// To have a consistent view of time-based data independent of which time
		// zone the client happens to be in we need a date-like object independent
		// of time zones.  This is done through a wrapper that only calls the UTC
		// versions of the accessor methods.

		function makeUtcWrapper(d) {

			function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
				sourceObj[sourceMethod] = function() {
					return targetObj[targetMethod].apply(targetObj, arguments);
				};
			};

			var utc = {
				date: d
			};

			// support strftime, if found

			if (d.strftime != undefined) {
				addProxyMethod(utc, "strftime", d, "strftime");
			}

			addProxyMethod(utc, "getTime", d, "getTime");
			addProxyMethod(utc, "setTime", d, "setTime");

			var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

			for (var p = 0; p < props.length; p++) {
				addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
				addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
			}

			return utc;
		};

		// select time zone strategy.  This returns a date-like object tied to the
		// desired timezone

		function dateGenerator(ts, opts) {
			if (opts.timezone == "browser") {
				return new Date(ts);
			} else if (!opts.timezone || opts.timezone == "utc") {
				return makeUtcWrapper(new Date(ts));
			} else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
				var d = new timezoneJS.Date();
				// timezone-js is fickle, so be sure to set the time zone before
				// setting the time.
				d.setTimezone(opts.timezone);
				d.setTime(ts);
				return d;
			} else {
				return makeUtcWrapper(new Date(ts));
			}
		}
		
		// map of app. size of time units in milliseconds

		var timeUnitSize = {
			"second": 1000,
			"minute": 60 * 1000,
			"hour": 60 * 60 * 1000,
			"day": 24 * 60 * 60 * 1000,
			"month": 30 * 24 * 60 * 60 * 1000,
			"quarter": 3 * 30 * 24 * 60 * 60 * 1000,
			"year": 365.2425 * 24 * 60 * 60 * 1000
		};

		// the allowed tick sizes, after 1 year we use
		// an integer algorithm

		var baseSpec = [
			[1, "second"], [2, "second"], [5, "second"], [10, "second"],
			[30, "second"], 
			[1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
			[30, "minute"], 
			[1, "hour"], [2, "hour"], [4, "hour"],
			[8, "hour"], [12, "hour"],
			[1, "day"], [2, "day"], [3, "day"],
			[0.25, "month"], [0.5, "month"], [1, "month"],
			[2, "month"]
		];

		// we don't know which variant(s) we'll need yet, but generating both is
		// cheap

		var specMonths = baseSpec.concat([[3, "month"], [6, "month"],
			[1, "year"]]);
		var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"],
			[1, "year"]]);

		function init(plot) {
			plot.hooks.processOptions.push(function (plot, options) {
				$.each(plot.getAxes(), function(axisName, axis) {

					var opts = axis.options;

					if (opts.mode == "time") {
						axis.tickGenerator = function(axis) {

							var ticks = [];
							var d = dateGenerator(axis.min, opts);
							var minSize = 0;

							// make quarter use a possibility if quarters are
							// mentioned in either of these options

							var spec = (opts.tickSize && opts.tickSize[1] ===
								"quarter") ||
								(opts.minTickSize && opts.minTickSize[1] ===
								"quarter") ? specQuarters : specMonths;

							if (opts.minTickSize != null) {
								if (typeof opts.tickSize == "number") {
									minSize = opts.tickSize;
								} else {
									minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
								}
							}

							for (var i = 0; i < spec.length - 1; ++i) {
								if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]]
												  + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
									&& spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
									break;
								}
							}

							var size = spec[i][0];
							var unit = spec[i][1];

							// special-case the possibility of several years

							if (unit == "year") {

								// if given a minTickSize in years, just use it,
								// ensuring that it's an integer

								if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
									size = Math.floor(opts.minTickSize[0]);
								} else {

									var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
									var norm = (axis.delta / timeUnitSize.year) / magn;

									if (norm < 1.5) {
										size = 1;
									} else if (norm < 3) {
										size = 2;
									} else if (norm < 7.5) {
										size = 5;
									} else {
										size = 10;
									}

									size *= magn;
								}

								// minimum size for years is 1

								if (size < 1) {
									size = 1;
								}
							}

							axis.tickSize = opts.tickSize || [size, unit];
							var tickSize = axis.tickSize[0];
							unit = axis.tickSize[1];

							var step = tickSize * timeUnitSize[unit];

							if (unit == "second") {
								d.setSeconds(floorInBase(d.getSeconds(), tickSize));
							} else if (unit == "minute") {
								d.setMinutes(floorInBase(d.getMinutes(), tickSize));
							} else if (unit == "hour") {
								d.setHours(floorInBase(d.getHours(), tickSize));
							} else if (unit == "month") {
								d.setMonth(floorInBase(d.getMonth(), tickSize));
							} else if (unit == "quarter") {
								d.setMonth(3 * floorInBase(d.getMonth() / 3,
									tickSize));
							} else if (unit == "year") {
								d.setFullYear(floorInBase(d.getFullYear(), tickSize));
							}

							// reset smaller components

							d.setMilliseconds(0);

							if (step >= timeUnitSize.minute) {
								d.setSeconds(0);
							}
							if (step >= timeUnitSize.hour) {
								d.setMinutes(0);
							}
							if (step >= timeUnitSize.day) {
								d.setHours(0);
							}
							if (step >= timeUnitSize.day * 4) {
								d.setDate(1);
							}
							if (step >= timeUnitSize.month * 2) {
								d.setMonth(floorInBase(d.getMonth(), 3));
							}
							if (step >= timeUnitSize.quarter * 2) {
								d.setMonth(floorInBase(d.getMonth(), 6));
							}
							if (step >= timeUnitSize.year) {
								d.setMonth(0);
							}

							var carry = 0;
							var v = Number.NaN;
							var prev;

							do {

								prev = v;
								v = d.getTime();
								ticks.push(v);

								if (unit == "month" || unit == "quarter") {
									if (tickSize < 1) {

										// a bit complicated - we'll divide the
										// month/quarter up but we need to take
										// care of fractions so we don't end up in
										// the middle of a day

										d.setDate(1);
										var start = d.getTime();
										d.setMonth(d.getMonth() +
											(unit == "quarter" ? 3 : 1));
										var end = d.getTime();
										d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
										carry = d.getHours();
										d.setHours(0);
									} else {
										d.setMonth(d.getMonth() +
											tickSize * (unit == "quarter" ? 3 : 1));
									}
								} else if (unit == "year") {
									d.setFullYear(d.getFullYear() + tickSize);
								} else {
									d.setTime(v + step);
								}
							} while (v < axis.max && v != prev);

							return ticks;
						};

						axis.tickFormatter = function (v, axis) {

							var d = dateGenerator(v, axis.options);

							// first check global format

							if (opts.timeformat != null) {
								return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames);
							}

							// possibly use quarters if quarters are mentioned in
							// any of these places

							var useQuarters = (axis.options.tickSize &&
									axis.options.tickSize[1] == "quarter") ||
								(axis.options.minTickSize &&
									axis.options.minTickSize[1] == "quarter");

							var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
							var span = axis.max - axis.min;
							var suffix = (opts.twelveHourClock) ? " %p" : "";
							var hourCode = (opts.twelveHourClock) ? "%I" : "%H";
							var fmt;

							if (t < timeUnitSize.minute) {
								fmt = hourCode + ":%M:%S" + suffix;
							} else if (t < timeUnitSize.day) {
								if (span < 2 * timeUnitSize.day) {
									fmt = hourCode + ":%M" + suffix;
								} else {
									fmt = "%b %d " + hourCode + ":%M" + suffix;
								}
							} else if (t < timeUnitSize.month) {
								fmt = "%b %d";
							} else if ((useQuarters && t < timeUnitSize.quarter) ||
								(!useQuarters && t < timeUnitSize.year)) {
								if (span < timeUnitSize.year) {
									fmt = "%b";
								} else {
									fmt = "%b %Y";
								}
							} else if (useQuarters && t < timeUnitSize.year) {
								if (span < timeUnitSize.year) {
									fmt = "Q%q";
								} else {
									fmt = "Q%q %Y";
								}
							} else {
								fmt = "%Y";
							}

							var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);

							return rt;
						};
					}
				});
			});
		}

		$.plot.plugins.push({
			init: init,
			options: options,
			name: 'time',
			version: '1.0'
		});

		// Time-axis support used to be in Flot core, which exposed the
		// formatDate function on the plot object.  Various plugins depend
		// on the function, so we need to re-expose it here.

		$.plot.formatDate = formatDate;
		$.plot.dateGenerator = dateGenerator;

	})(jQuery);


/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	/* Flot plugin for rendering pie charts.

	Copyright (c) 2007-2014 IOLA and Ole Laursen.
	Licensed under the MIT license.

	The plugin assumes that each series has a single data value, and that each
	value is a positive integer or zero.  Negative numbers don't make sense for a
	pie chart, and have unpredictable results.  The values do NOT need to be
	passed in as percentages; the plugin will calculate the total and per-slice
	percentages internally.

	* Created by Brian Medendorp

	* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

	The plugin supports these options:

		series: {
			pie: {
				show: true/false
				radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
				innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
				startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
				tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
				offset: {
					top: integer value to move the pie up or down
					left: integer value to move the pie left or right, or 'auto'
				},
				stroke: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
					width: integer pixel width of the stroke
				},
				label: {
					show: true/false, or 'auto'
					formatter:  a user-defined function that modifies the text/style of the label text
					radius: 0-1 for percentage of fullsize, or a specified pixel length
					background: {
						color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
						opacity: 0-1
					},
					threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
				},
				combine: {
					threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
					label: any text value of what the combined slice should be labeled
				}
				highlight: {
					opacity: 0-1
				}
			}
		}

	More detail and specific examples can be found in the included HTML file.

	*/

	(function($) {

		// Maximum redraw attempts when fitting labels within the plot

		var REDRAW_ATTEMPTS = 10;

		// Factor by which to shrink the pie when fitting labels within the plot

		var REDRAW_SHRINK = 0.95;

		function init(plot) {

			var canvas = null,
				target = null,
				options = null,
				maxRadius = null,
				centerLeft = null,
				centerTop = null,
				processed = false,
				ctx = null;

			// interactive variables

			var highlights = [];

			// add hook to determine if pie plugin in enabled, and then perform necessary operations

			plot.hooks.processOptions.push(function(plot, options) {
				if (options.series.pie.show) {

					options.grid.show = false;

					// set labels.show

					if (options.series.pie.label.show == "auto") {
						if (options.legend.show) {
							options.series.pie.label.show = false;
						} else {
							options.series.pie.label.show = true;
						}
					}

					// set radius

					if (options.series.pie.radius == "auto") {
						if (options.series.pie.label.show) {
							options.series.pie.radius = 3/4;
						} else {
							options.series.pie.radius = 1;
						}
					}

					// ensure sane tilt

					if (options.series.pie.tilt > 1) {
						options.series.pie.tilt = 1;
					} else if (options.series.pie.tilt < 0) {
						options.series.pie.tilt = 0;
					}
				}
			});

			plot.hooks.bindEvents.push(function(plot, eventHolder) {
				var options = plot.getOptions();
				if (options.series.pie.show) {
					if (options.grid.hoverable) {
						eventHolder.unbind("mousemove").mousemove(onMouseMove);
					}
					if (options.grid.clickable) {
						eventHolder.unbind("click").click(onClick);
					}
				}
			});

			plot.hooks.processDatapoints.push(function(plot, series, data, datapoints) {
				var options = plot.getOptions();
				if (options.series.pie.show) {
					processDatapoints(plot, series, data, datapoints);
				}
			});

			plot.hooks.drawOverlay.push(function(plot, octx) {
				var options = plot.getOptions();
				if (options.series.pie.show) {
					drawOverlay(plot, octx);
				}
			});

			plot.hooks.draw.push(function(plot, newCtx) {
				var options = plot.getOptions();
				if (options.series.pie.show) {
					draw(plot, newCtx);
				}
			});

			function processDatapoints(plot, series, datapoints) {
				if (!processed)	{
					processed = true;
					canvas = plot.getCanvas();
					target = $(canvas).parent();
					options = plot.getOptions();
					plot.setData(combine(plot.getData()));
				}
			}

			function combine(data) {

				var total = 0,
					combined = 0,
					numCombined = 0,
					color = options.series.pie.combine.color,
					newdata = [];

				// Fix up the raw data from Flot, ensuring the data is numeric

				for (var i = 0; i < data.length; ++i) {

					var value = data[i].data;

					// If the data is an array, we'll assume that it's a standard
					// Flot x-y pair, and are concerned only with the second value.

					// Note how we use the original array, rather than creating a
					// new one; this is more efficient and preserves any extra data
					// that the user may have stored in higher indexes.

					if ($.isArray(value) && value.length == 1) {
	    				value = value[0];
					}

					if ($.isArray(value)) {
						// Equivalent to $.isNumeric() but compatible with jQuery < 1.7
						if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
							value[1] = +value[1];
						} else {
							value[1] = 0;
						}
					} else if (!isNaN(parseFloat(value)) && isFinite(value)) {
						value = [1, +value];
					} else {
						value = [1, 0];
					}

					data[i].data = [value];
				}

				// Sum up all the slices, so we can calculate percentages for each

				for (var i = 0; i < data.length; ++i) {
					total += data[i].data[0][1];
				}

				// Count the number of slices with percentages below the combine
				// threshold; if it turns out to be just one, we won't combine.

				for (var i = 0; i < data.length; ++i) {
					var value = data[i].data[0][1];
					if (value / total <= options.series.pie.combine.threshold) {
						combined += value;
						numCombined++;
						if (!color) {
							color = data[i].color;
						}
					}
				}

				for (var i = 0; i < data.length; ++i) {
					var value = data[i].data[0][1];
					if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
						newdata.push(
							$.extend(data[i], {     /* extend to allow keeping all other original data values
							                           and using them e.g. in labelFormatter. */
								data: [[1, value]],
								color: data[i].color,
								label: data[i].label,
								angle: value * Math.PI * 2 / total,
								percent: value / (total / 100)
							})
						);
					}
				}

				if (numCombined > 1) {
					newdata.push({
						data: [[1, combined]],
						color: color,
						label: options.series.pie.combine.label,
						angle: combined * Math.PI * 2 / total,
						percent: combined / (total / 100)
					});
				}

				return newdata;
			}

			function draw(plot, newCtx) {

				if (!target) {
					return; // if no series were passed
				}

				var canvasWidth = plot.getPlaceholder().width(),
					canvasHeight = plot.getPlaceholder().height(),
					legendWidth = target.children().filter(".legend").children().width() || 0;

				ctx = newCtx;

				// WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!

				// When combining smaller slices into an 'other' slice, we need to
				// add a new series.  Since Flot gives plugins no way to modify the
				// list of series, the pie plugin uses a hack where the first call
				// to processDatapoints results in a call to setData with the new
				// list of series, then subsequent processDatapoints do nothing.

				// The plugin-global 'processed' flag is used to control this hack;
				// it starts out false, and is set to true after the first call to
				// processDatapoints.

				// Unfortunately this turns future setData calls into no-ops; they
				// call processDatapoints, the flag is true, and nothing happens.

				// To fix this we'll set the flag back to false here in draw, when
				// all series have been processed, so the next sequence of calls to
				// processDatapoints once again starts out with a slice-combine.
				// This is really a hack; in 0.9 we need to give plugins a proper
				// way to modify series before any processing begins.

				processed = false;

				// calculate maximum radius and center point

				maxRadius =  Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
				centerTop = canvasHeight / 2 + options.series.pie.offset.top;
				centerLeft = canvasWidth / 2;

				if (options.series.pie.offset.left == "auto") {
					if (options.legend.position.match("w")) {
						centerLeft += legendWidth / 2;
					} else {
						centerLeft -= legendWidth / 2;
					}
					if (centerLeft < maxRadius) {
						centerLeft = maxRadius;
					} else if (centerLeft > canvasWidth - maxRadius) {
						centerLeft = canvasWidth - maxRadius;
					}
				} else {
					centerLeft += options.series.pie.offset.left;
				}

				var slices = plot.getData(),
					attempts = 0;

				// Keep shrinking the pie's radius until drawPie returns true,
				// indicating that all the labels fit, or we try too many times.

				do {
					if (attempts > 0) {
						maxRadius *= REDRAW_SHRINK;
					}
					attempts += 1;
					clear();
					if (options.series.pie.tilt <= 0.8) {
						drawShadow();
					}
				} while (!drawPie() && attempts < REDRAW_ATTEMPTS)

				if (attempts >= REDRAW_ATTEMPTS) {
					clear();
					target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
				}

				if (plot.setSeries && plot.insertLegend) {
					plot.setSeries(slices);
					plot.insertLegend();
				}

				// we're actually done at this point, just defining internal functions at this point

				function clear() {
					ctx.clearRect(0, 0, canvasWidth, canvasHeight);
					target.children().filter(".pieLabel, .pieLabelBackground").remove();
				}

				function drawShadow() {

					var shadowLeft = options.series.pie.shadow.left;
					var shadowTop = options.series.pie.shadow.top;
					var edge = 10;
					var alpha = options.series.pie.shadow.alpha;
					var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

					if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
						return;	// shadow would be outside canvas, so don't draw it
					}

					ctx.save();
					ctx.translate(shadowLeft,shadowTop);
					ctx.globalAlpha = alpha;
					ctx.fillStyle = "#000";

					// center and rotate to starting position

					ctx.translate(centerLeft,centerTop);
					ctx.scale(1, options.series.pie.tilt);

					//radius -= edge;

					for (var i = 1; i <= edge; i++) {
						ctx.beginPath();
						ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
						ctx.fill();
						radius -= i;
					}

					ctx.restore();
				}

				function drawPie() {

					var startAngle = Math.PI * options.series.pie.startAngle;
					var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

					// center and rotate to starting position

					ctx.save();
					ctx.translate(centerLeft,centerTop);
					ctx.scale(1, options.series.pie.tilt);
					//ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera

					// draw slices

					ctx.save();
					var currentAngle = startAngle;
					for (var i = 0; i < slices.length; ++i) {
						slices[i].startAngle = currentAngle;
						drawSlice(slices[i].angle, slices[i].color, true);
					}
					ctx.restore();

					// draw slice outlines

					if (options.series.pie.stroke.width > 0) {
						ctx.save();
						ctx.lineWidth = options.series.pie.stroke.width;
						currentAngle = startAngle;
						for (var i = 0; i < slices.length; ++i) {
							drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
						}
						ctx.restore();
					}

					// draw donut hole

					drawDonutHole(ctx);

					ctx.restore();

					// Draw the labels, returning true if they fit within the plot

					if (options.series.pie.label.show) {
						return drawLabels();
					} else return true;

					function drawSlice(angle, color, fill) {

						if (angle <= 0 || isNaN(angle)) {
							return;
						}

						if (fill) {
							ctx.fillStyle = color;
						} else {
							ctx.strokeStyle = color;
							ctx.lineJoin = "round";
						}

						ctx.beginPath();
						if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
							ctx.moveTo(0, 0); // Center of the pie
						}

						//ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera
						ctx.arc(0, 0, radius,currentAngle, currentAngle + angle / 2, false);
						ctx.arc(0, 0, radius,currentAngle + angle / 2, currentAngle + angle, false);
						ctx.closePath();
						//ctx.rotate(angle); // This doesn't work properly in Opera
						currentAngle += angle;

						if (fill) {
							ctx.fill();
						} else {
							ctx.stroke();
						}
					}

					function drawLabels() {

						var currentAngle = startAngle;
						var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

						for (var i = 0; i < slices.length; ++i) {
							if (slices[i].percent >= options.series.pie.label.threshold * 100) {
								if (!drawLabel(slices[i], currentAngle, i)) {
									return false;
								}
							}
							currentAngle += slices[i].angle;
						}

						return true;

						function drawLabel(slice, startAngle, index) {

							if (slice.data[0][1] == 0) {
								return true;
							}

							// format label text

							var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;

							if (lf) {
								text = lf(slice.label, slice);
							} else {
								text = slice.label;
							}

							if (plf) {
								text = plf(text, slice);
							}

							var halfAngle = ((startAngle + slice.angle) + startAngle) / 2;
							var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
							var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;

							var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
							target.append(html);

							var label = target.children("#pieLabel" + index);
							var labelTop = (y - label.height() / 2);
							var labelLeft = (x - label.width() / 2);

							label.css("top", labelTop);
							label.css("left", labelLeft);

							// check to make sure that the label is not outside the canvas

							if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
								return false;
							}

							if (options.series.pie.label.background.opacity != 0) {

								// put in the transparent background separately to avoid blended labels and label boxes

								var c = options.series.pie.label.background.color;

								if (c == null) {
									c = slice.color;
								}

								var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
								$("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>")
									.css("opacity", options.series.pie.label.background.opacity)
									.insertBefore(label);
							}

							return true;
						} // end individual label function
					} // end drawLabels function
				} // end drawPie function
			} // end draw function

			// Placed here because it needs to be accessed from multiple locations

			function drawDonutHole(layer) {
				if (options.series.pie.innerRadius > 0) {

					// subtract the center

					layer.save();
					var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
					layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color
					layer.beginPath();
					layer.fillStyle = options.series.pie.stroke.color;
					layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
					layer.fill();
					layer.closePath();
					layer.restore();

					// add inner stroke

					layer.save();
					layer.beginPath();
					layer.strokeStyle = options.series.pie.stroke.color;
					layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
					layer.stroke();
					layer.closePath();
					layer.restore();

					// TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
				}
			}

			//-- Additional Interactive related functions --

			function isPointInPoly(poly, pt) {
				for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
					((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
					&& (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
					&& (c = !c);
				return c;
			}

			function findNearbySlice(mouseX, mouseY) {

				var slices = plot.getData(),
					options = plot.getOptions(),
					radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
					x, y;

				for (var i = 0; i < slices.length; ++i) {

					var s = slices[i];

					if (s.pie.show) {

						ctx.save();
						ctx.beginPath();
						ctx.moveTo(0, 0); // Center of the pie
						//ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
						ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
						ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
						ctx.closePath();
						x = mouseX - centerLeft;
						y = mouseY - centerTop;

						if (ctx.isPointInPath) {
							if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
								ctx.restore();
								return {
									datapoint: [s.percent, s.data],
									dataIndex: 0,
									series: s,
									seriesIndex: i
								};
							}
						} else {

							// excanvas for IE doesn;t support isPointInPath, this is a workaround.

							var p1X = radius * Math.cos(s.startAngle),
								p1Y = radius * Math.sin(s.startAngle),
								p2X = radius * Math.cos(s.startAngle + s.angle / 4),
								p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
								p3X = radius * Math.cos(s.startAngle + s.angle / 2),
								p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
								p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
								p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
								p5X = radius * Math.cos(s.startAngle + s.angle),
								p5Y = radius * Math.sin(s.startAngle + s.angle),
								arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
								arrPoint = [x, y];

							// TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

							if (isPointInPoly(arrPoly, arrPoint)) {
								ctx.restore();
								return {
									datapoint: [s.percent, s.data],
									dataIndex: 0,
									series: s,
									seriesIndex: i
								};
							}
						}

						ctx.restore();
					}
				}

				return null;
			}

			function onMouseMove(e) {
				triggerClickHoverEvent("plothover", e);
			}

			function onClick(e) {
				triggerClickHoverEvent("plotclick", e);
			}

			// trigger click or hover event (they send the same parameters so we share their code)

			function triggerClickHoverEvent(eventname, e) {

				var offset = plot.offset();
				var canvasX = parseInt(e.pageX - offset.left);
				var canvasY =  parseInt(e.pageY - offset.top);
				var item = findNearbySlice(canvasX, canvasY);

				if (options.grid.autoHighlight) {

					// clear auto-highlights

					for (var i = 0; i < highlights.length; ++i) {
						var h = highlights[i];
						if (h.auto == eventname && !(item && h.series == item.series)) {
							unhighlight(h.series);
						}
					}
				}

				// highlight the slice

				if (item) {
					highlight(item.series, eventname);
				}

				// trigger any hover bind events

				var pos = { pageX: e.pageX, pageY: e.pageY };
				target.trigger(eventname, [pos, item]);
			}

			function highlight(s, auto) {
				//if (typeof s == "number") {
				//	s = series[s];
				//}

				var i = indexOfHighlight(s);

				if (i == -1) {
					highlights.push({ series: s, auto: auto });
					plot.triggerRedrawOverlay();
				} else if (!auto) {
					highlights[i].auto = false;
				}
			}

			function unhighlight(s) {
				if (s == null) {
					highlights = [];
					plot.triggerRedrawOverlay();
				}

				//if (typeof s == "number") {
				//	s = series[s];
				//}

				var i = indexOfHighlight(s);

				if (i != -1) {
					highlights.splice(i, 1);
					plot.triggerRedrawOverlay();
				}
			}

			function indexOfHighlight(s) {
				for (var i = 0; i < highlights.length; ++i) {
					var h = highlights[i];
					if (h.series == s)
						return i;
				}
				return -1;
			}

			function drawOverlay(plot, octx) {

				var options = plot.getOptions();

				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				octx.save();
				octx.translate(centerLeft, centerTop);
				octx.scale(1, options.series.pie.tilt);

				for (var i = 0; i < highlights.length; ++i) {
					drawHighlight(highlights[i].series);
				}

				drawDonutHole(octx);

				octx.restore();

				function drawHighlight(series) {

					if (series.angle <= 0 || isNaN(series.angle)) {
						return;
					}

					//octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
					octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor
					octx.beginPath();
					if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
						octx.moveTo(0, 0); // Center of the pie
					}
					octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
					octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
					octx.closePath();
					octx.fill();
				}
			}
		} // end init (plugin body)

		// define pie specific options and their default values

		var options = {
			series: {
				pie: {
					show: false,
					radius: "auto",	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
					innerRadius: 0, /* for donut */
					startAngle: 3/2,
					tilt: 1,
					shadow: {
						left: 5,	// shadow left offset
						top: 15,	// shadow top offset
						alpha: 0.02	// shadow alpha
					},
					offset: {
						top: 0,
						left: "auto"
					},
					stroke: {
						color: "#fff",
						width: 1
					},
					label: {
						show: "auto",
						formatter: function(label, slice) {
							return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
						},	// formatter function
						radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
						background: {
							color: null,
							opacity: 0
						},
						threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
					},
					combine: {
						threshold: -1,	// percentage at which to combine little slices into one larger slice
						color: null,	// color to give the new slice (auto-generated if null)
						label: "Other"	// label to give the new slice
					},
					highlight: {
						//color: "#fff",		// will add this functionality once parseColor is available
						opacity: 0.5
					}
				}
			}
		};

		$.plot.plugins.push({
			init: init,
			options: options,
			name: "pie",
			version: "1.1"
		});

	})(jQuery);


/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/flot/styles/flot.css", function() {
			var newContent = require("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/flot/styles/flot.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	exports.push([module.id, "#flotTip {\n  position: relative;\n  z-index: 5;\n  padding: 4px 5px;\n  border-radius: 2px !important;\n  border-color: transparent !important;\n  background-color: #444 !important;\n  color: #eee;\n}\n.chart .legend > table {\n  color: inherit !important;\n}\n.chart .legend > table tr td {\n  padding: 3px;\n}\n.chart .legend > table tr td:first-child {\n  padding-left: 5px;\n}\n.chart .legend > table tr td:last-child {\n  padding-right: 5px;\n}\n.chart .legend > table tr + tr td {\n  padding-top: 0px;\n}\n.chart .legend > div:first-child {\n  background-color: transparent !important;\n}\n.chart .legend .legendColorBox > div {\n  border-color: rgba(0, 0, 0, 0.1) !important;\n}\n.chart .legend .legendColorBox > div,\n.chart .legend .legendColorBox > div > div {\n  border-radius: 50%;\n}\n.chart .flot-text,\n.chart .flot-tick-label {\n  color: inherit !important;\n  opacity: 0.8;\n}\n.chart.hidden-y-axis-data .flot-y-axis {\n  display: none !important;\n}\n.chart.bold-y-axis-data .flot-y-axis {\n  font-weight: 700;\n}\n.chart.hidden-x-axis-data .flot-x-axis {\n  display: none !important;\n}\n.chart.bold-x-axis-data .flot-x-axis {\n  font-weight: 700;\n}\n", ""]);

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(124);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/jvectormap/styles/jvectormap.css", function() {
			var newContent = require("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/jvectormap/styles/jvectormap.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	exports.push([module.id, ".jvectormap-label {\n  font-size: 11px;\n  position: absolute;\n  display: none;\n  border-radius: 2px;\n  background-color: #444 !important;\n  color: #eee;\n  padding: 4px 5px;\n}\n.jvectormap-zoomin,\n.jvectormap-zoomout {\n  position: absolute;\n  left: 10px;\n  color: white;\n  width: 24px;\n  height: 24px;\n  font-size: 0px;\n  cursor: pointer;\n  background-color: #f2f5f8;\n  border: 1px solid #dbdfe3;\n  text-align: center;\n}\n.jvectormap-zoomin:after,\n.jvectormap-zoomout:after {\n  font-family: \"FontAwesome\";\n  font-size: 12px;\n  line-height: 24px;\n  color: #7f8992;\n}\n.jvectormap-zoomin:hover:after,\n.jvectormap-zoomout:hover:after {\n  color: #243342;\n}\n.jvectormap-zoomin {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  top: 10px;\n}\n.jvectormap-zoomin:after {\n  content: \"\\f067\";\n}\n.jvectormap-zoomout {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  top: 33px;\n}\n.jvectormap-zoomout:after {\n  content: \"\\f068\";\n}\n", ""]);

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

/***/ }

});
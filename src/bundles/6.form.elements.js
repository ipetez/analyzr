webpackJsonp([6],{

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Select2
	 * @desc: jQuery based replacement for select boxes
	 */
	module.exports = function () {
	  /** dependencies */

	  /** core script */
	  __webpack_require__(115);

	  /** stylesheet */
	  __webpack_require__(127);
	};

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Summernote
	 * @desc: super simple WYSIWYG editor on Bootstrap
	 */
	module.exports = function () {
	  /** dependencies */
	  __webpack_require__(139);
	  
	  /** core script */
	  __webpack_require__(117);

	  /** stylesheet */
	  __webpack_require__(133);
	};

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright 2012 Igor Vaynberg

	Version: 3.5.2 Timestamp: Sat Nov  1 14:43:36 EDT 2014

	This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
	General Public License version 2 (the "GPL License"). You may choose either license to govern your
	use of this software only upon the condition that you accept all of the terms of either the Apache
	License or the GPL License.

	You may obtain a copy of the Apache License and the GPL License at:

	    http://www.apache.org/licenses/LICENSE-2.0
	    http://www.gnu.org/licenses/gpl-2.0.html

	Unless required by applicable law or agreed to in writing, software distributed under the
	Apache License or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
	the specific language governing permissions and limitations under the Apache License and the GPL License.
	*/
	(function ($) {
	    if(typeof $.fn.each2 == "undefined") {
	        $.extend($.fn, {
	            /*
	            * 4-10 times faster .each replacement
	            * use it carefully, as it overrides jQuery context of element on each iteration
	            */
	            each2 : function (c) {
	                var j = $([0]), i = -1, l = this.length;
	                while (
	                    ++i < l
	                    && (j.context = j[0] = this[i])
	                    && c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
	                );
	                return this;
	            }
	        });
	    }
	})(jQuery);

	(function ($, undefined) {
	    "use strict";
	    /*global document, window, jQuery, console */

	    if (window.Select2 !== undefined) {
	        return;
	    }

	    var AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
	        lastMousePosition={x:0,y:0}, $document, scrollBarDimensions,

	    KEY = {
	        TAB: 9,
	        ENTER: 13,
	        ESC: 27,
	        SPACE: 32,
	        LEFT: 37,
	        UP: 38,
	        RIGHT: 39,
	        DOWN: 40,
	        SHIFT: 16,
	        CTRL: 17,
	        ALT: 18,
	        PAGE_UP: 33,
	        PAGE_DOWN: 34,
	        HOME: 36,
	        END: 35,
	        BACKSPACE: 8,
	        DELETE: 46,
	        isArrow: function (k) {
	            k = k.which ? k.which : k;
	            switch (k) {
	            case KEY.LEFT:
	            case KEY.RIGHT:
	            case KEY.UP:
	            case KEY.DOWN:
	                return true;
	            }
	            return false;
	        },
	        isControl: function (e) {
	            var k = e.which;
	            switch (k) {
	            case KEY.SHIFT:
	            case KEY.CTRL:
	            case KEY.ALT:
	                return true;
	            }

	            if (e.metaKey) return true;

	            return false;
	        },
	        isFunctionKey: function (k) {
	            k = k.which ? k.which : k;
	            return k >= 112 && k <= 123;
	        }
	    },
	    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",

	    DIACRITICS = {"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038A":"\u0399","\u03AA":"\u0399","\u038C":"\u039F","\u038E":"\u03A5","\u03AB":"\u03A5","\u038F":"\u03A9","\u03AC":"\u03B1","\u03AD":"\u03B5","\u03AE":"\u03B7","\u03AF":"\u03B9","\u03CA":"\u03B9","\u0390":"\u03B9","\u03CC":"\u03BF","\u03CD":"\u03C5","\u03CB":"\u03C5","\u03B0":"\u03C5","\u03C9":"\u03C9","\u03C2":"\u03C3"};

	    $document = $(document);

	    nextUid=(function() { var counter=1; return function() { return counter++; }; }());


	    function reinsertElement(element) {
	        var placeholder = $(document.createTextNode(''));

	        element.before(placeholder);
	        placeholder.before(element);
	        placeholder.remove();
	    }

	    function stripDiacritics(str) {
	        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
	        function match(a) {
	            return DIACRITICS[a] || a;
	        }

	        return str.replace(/[^\u0000-\u007E]/g, match);
	    }

	    function indexOf(value, array) {
	        var i = 0, l = array.length;
	        for (; i < l; i = i + 1) {
	            if (equal(value, array[i])) return i;
	        }
	        return -1;
	    }

	    function measureScrollbar () {
	        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
	        $template.appendTo(document.body);

	        var dim = {
	            width: $template.width() - $template[0].clientWidth,
	            height: $template.height() - $template[0].clientHeight
	        };
	        $template.remove();

	        return dim;
	    }

	    /**
	     * Compares equality of a and b
	     * @param a
	     * @param b
	     */
	    function equal(a, b) {
	        if (a === b) return true;
	        if (a === undefined || b === undefined) return false;
	        if (a === null || b === null) return false;
	        // Check whether 'a' or 'b' is a string (primitive or object).
	        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
	        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
	        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
	        return false;
	    }

	    /**
	     * Splits the string into an array of values, transforming each value. An empty array is returned for nulls or empty
	     * strings
	     * @param string
	     * @param separator
	     */
	    function splitVal(string, separator, transform) {
	        var val, i, l;
	        if (string === null || string.length < 1) return [];
	        val = string.split(separator);
	        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = transform(val[i]);
	        return val;
	    }

	    function getSideBorderPadding(element) {
	        return element.outerWidth(false) - element.width();
	    }

	    function installKeyUpChangeEvent(element) {
	        var key="keyup-change-value";
	        element.on("keydown", function () {
	            if ($.data(element, key) === undefined) {
	                $.data(element, key, element.val());
	            }
	        });
	        element.on("keyup", function () {
	            var val= $.data(element, key);
	            if (val !== undefined && element.val() !== val) {
	                $.removeData(element, key);
	                element.trigger("keyup-change");
	            }
	        });
	    }


	    /**
	     * filters mouse events so an event is fired only if the mouse moved.
	     *
	     * filters out mouse events that occur when mouse is stationary but
	     * the elements under the pointer are scrolled.
	     */
	    function installFilteredMouseMove(element) {
	        element.on("mousemove", function (e) {
	            var lastpos = lastMousePosition;
	            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
	                $(e.target).trigger("mousemove-filtered", e);
	            }
	        });
	    }

	    /**
	     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
	     * within the last quietMillis milliseconds.
	     *
	     * @param quietMillis number of milliseconds to wait before invoking fn
	     * @param fn function to be debounced
	     * @param ctx object to be used as this reference within fn
	     * @return debounced version of fn
	     */
	    function debounce(quietMillis, fn, ctx) {
	        ctx = ctx || undefined;
	        var timeout;
	        return function () {
	            var args = arguments;
	            window.clearTimeout(timeout);
	            timeout = window.setTimeout(function() {
	                fn.apply(ctx, args);
	            }, quietMillis);
	        };
	    }

	    function installDebouncedScroll(threshold, element) {
	        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
	        element.on("scroll", function (e) {
	            if (indexOf(e.target, element.get()) >= 0) notify(e);
	        });
	    }

	    function focus($el) {
	        if ($el[0] === document.activeElement) return;

	        /* set the focus in a 0 timeout - that way the focus is set after the processing
	            of the current event has finished - which seems like the only reliable way
	            to set focus */
	        window.setTimeout(function() {
	            var el=$el[0], pos=$el.val().length, range;

	            $el.focus();

	            /* make sure el received focus so we do not error out when trying to manipulate the caret.
	                sometimes modals or others listeners may steal it after its set */
	            var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
	            if (isVisible && el === document.activeElement) {

	                /* after the focus is set move the caret to the end, necessary when we val()
	                    just before setting focus */
	                if(el.setSelectionRange)
	                {
	                    el.setSelectionRange(pos, pos);
	                }
	                else if (el.createTextRange) {
	                    range = el.createTextRange();
	                    range.collapse(false);
	                    range.select();
	                }
	            }
	        }, 0);
	    }

	    function getCursorInfo(el) {
	        el = $(el)[0];
	        var offset = 0;
	        var length = 0;
	        if ('selectionStart' in el) {
	            offset = el.selectionStart;
	            length = el.selectionEnd - offset;
	        } else if ('selection' in document) {
	            el.focus();
	            var sel = document.selection.createRange();
	            length = document.selection.createRange().text.length;
	            sel.moveStart('character', -el.value.length);
	            offset = sel.text.length - length;
	        }
	        return { offset: offset, length: length };
	    }

	    function killEvent(event) {
	        event.preventDefault();
	        event.stopPropagation();
	    }
	    function killEventImmediately(event) {
	        event.preventDefault();
	        event.stopImmediatePropagation();
	    }

	    function measureTextWidth(e) {
	        if (!sizer){
	            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
	            sizer = $(document.createElement("div")).css({
	                position: "absolute",
	                left: "-10000px",
	                top: "-10000px",
	                display: "none",
	                fontSize: style.fontSize,
	                fontFamily: style.fontFamily,
	                fontStyle: style.fontStyle,
	                fontWeight: style.fontWeight,
	                letterSpacing: style.letterSpacing,
	                textTransform: style.textTransform,
	                whiteSpace: "nowrap"
	            });
	            sizer.attr("class","select2-sizer");
	            $(document.body).append(sizer);
	        }
	        sizer.text(e.val());
	        return sizer.width();
	    }

	    function syncCssClasses(dest, src, adapter) {
	        var classes, replacements = [], adapted;

	        classes = $.trim(dest.attr("class"));

	        if (classes) {
	            classes = '' + classes; // for IE which returns object

	            $(classes.split(/\s+/)).each2(function() {
	                if (this.indexOf("select2-") === 0) {
	                    replacements.push(this);
	                }
	            });
	        }

	        classes = $.trim(src.attr("class"));

	        if (classes) {
	            classes = '' + classes; // for IE which returns object

	            $(classes.split(/\s+/)).each2(function() {
	                if (this.indexOf("select2-") !== 0) {
	                    adapted = adapter(this);

	                    if (adapted) {
	                        replacements.push(adapted);
	                    }
	                }
	            });
	        }

	        dest.attr("class", replacements.join(" "));
	    }


	    function markMatch(text, term, markup, escapeMarkup) {
	        var match=stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
	            tl=term.length;

	        if (match<0) {
	            markup.push(escapeMarkup(text));
	            return;
	        }

	        markup.push(escapeMarkup(text.substring(0, match)));
	        markup.push("<span class='select2-match'>");
	        markup.push(escapeMarkup(text.substring(match, match + tl)));
	        markup.push("</span>");
	        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
	    }

	    function defaultEscapeMarkup(markup) {
	        var replace_map = {
	            '\\': '&#92;',
	            '&': '&amp;',
	            '<': '&lt;',
	            '>': '&gt;',
	            '"': '&quot;',
	            "'": '&#39;',
	            "/": '&#47;'
	        };

	        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
	            return replace_map[match];
	        });
	    }

	    /**
	     * Produces an ajax-based query function
	     *
	     * @param options object containing configuration parameters
	     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
	     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
	     * @param options.url url for the data
	     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
	     * @param options.dataType request data type: ajax, jsonp, other datatypes supported by jQuery's $.ajax function or the transport function if specified
	     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
	     * @param options.results a function(remoteData, pageNumber, query) that converts data returned form the remote request to the format expected by Select2.
	     *      The expected format is an object containing the following keys:
	     *      results array of objects that will be used as choices
	     *      more (optional) boolean indicating whether there are more results available
	     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
	     */
	    function ajax(options) {
	        var timeout, // current scheduled but not yet executed request
	            handler = null,
	            quietMillis = options.quietMillis || 100,
	            ajaxUrl = options.url,
	            self = this;

	        return function (query) {
	            window.clearTimeout(timeout);
	            timeout = window.setTimeout(function () {
	                var data = options.data, // ajax data function
	                    url = ajaxUrl, // ajax url string or function
	                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
	                    // deprecated - to be removed in 4.0  - use params instead
	                    deprecated = {
	                        type: options.type || 'GET', // set type of request (GET or POST)
	                        cache: options.cache || false,
	                        jsonpCallback: options.jsonpCallback||undefined,
	                        dataType: options.dataType||"json"
	                    },
	                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);

	                data = data ? data.call(self, query.term, query.page, query.context) : null;
	                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;

	                if (handler && typeof handler.abort === "function") { handler.abort(); }

	                if (options.params) {
	                    if ($.isFunction(options.params)) {
	                        $.extend(params, options.params.call(self));
	                    } else {
	                        $.extend(params, options.params);
	                    }
	                }

	                $.extend(params, {
	                    url: url,
	                    dataType: options.dataType,
	                    data: data,
	                    success: function (data) {
	                        // TODO - replace query.page with query so users have access to term, page, etc.
	                        // added query as third paramter to keep backwards compatibility
	                        var results = options.results(data, query.page, query);
	                        query.callback(results);
	                    },
	                    error: function(jqXHR, textStatus, errorThrown){
	                        var results = {
	                            hasError: true,
	                            jqXHR: jqXHR,
	                            textStatus: textStatus,
	                            errorThrown: errorThrown
	                        };

	                        query.callback(results);
	                    }
	                });
	                handler = transport.call(self, params);
	            }, quietMillis);
	        };
	    }

	    /**
	     * Produces a query function that works with a local array
	     *
	     * @param options object containing configuration parameters. The options parameter can either be an array or an
	     * object.
	     *
	     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
	     *
	     * If the object form is used it is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
	     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
	     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
	     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
	     * the text.
	     */
	    function local(options) {
	        var data = options, // data elements
	            dataText,
	            tmp,
	            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search

	         if ($.isArray(data)) {
	            tmp = data;
	            data = { results: tmp };
	        }

	         if ($.isFunction(data) === false) {
	            tmp = data;
	            data = function() { return tmp; };
	        }

	        var dataItem = data();
	        if (dataItem.text) {
	            text = dataItem.text;
	            // if text is not a function we assume it to be a key name
	            if (!$.isFunction(text)) {
	                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
	                text = function (item) { return item[dataText]; };
	            }
	        }

	        return function (query) {
	            var t = query.term, filtered = { results: [] }, process;
	            if (t === "") {
	                query.callback(data());
	                return;
	            }

	            process = function(datum, collection) {
	                var group, attr;
	                datum = datum[0];
	                if (datum.children) {
	                    group = {};
	                    for (attr in datum) {
	                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
	                    }
	                    group.children=[];
	                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
	                    if (group.children.length || query.matcher(t, text(group), datum)) {
	                        collection.push(group);
	                    }
	                } else {
	                    if (query.matcher(t, text(datum), datum)) {
	                        collection.push(datum);
	                    }
	                }
	            };

	            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
	            query.callback(filtered);
	        };
	    }

	    // TODO javadoc
	    function tags(data) {
	        var isFunc = $.isFunction(data);
	        return function (query) {
	            var t = query.term, filtered = {results: []};
	            var result = isFunc ? data(query) : data;
	            if ($.isArray(result)) {
	                $(result).each(function () {
	                    var isObject = this.text !== undefined,
	                        text = isObject ? this.text : this;
	                    if (t === "" || query.matcher(t, text)) {
	                        filtered.results.push(isObject ? this : {id: this, text: this});
	                    }
	                });
	                query.callback(filtered);
	            }
	        };
	    }

	    /**
	     * Checks if the formatter function should be used.
	     *
	     * Throws an error if it is not a function. Returns true if it should be used,
	     * false if no formatting should be performed.
	     *
	     * @param formatter
	     */
	    function checkFormatter(formatter, formatterName) {
	        if ($.isFunction(formatter)) return true;
	        if (!formatter) return false;
	        if (typeof(formatter) === 'string') return true;
	        throw new Error(formatterName +" must be a string, function, or falsy value");
	    }

	  /**
	   * Returns a given value
	   * If given a function, returns its output
	   *
	   * @param val string|function
	   * @param context value of "this" to be passed to function
	   * @returns {*}
	   */
	    function evaluate(val, context) {
	        if ($.isFunction(val)) {
	            var args = Array.prototype.slice.call(arguments, 2);
	            return val.apply(context, args);
	        }
	        return val;
	    }

	    function countResults(results) {
	        var count = 0;
	        $.each(results, function(i, item) {
	            if (item.children) {
	                count += countResults(item.children);
	            } else {
	                count++;
	            }
	        });
	        return count;
	    }

	    /**
	     * Default tokenizer. This function uses breaks the input on substring match of any string from the
	     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
	     * two options have to be defined in order for the tokenizer to work.
	     *
	     * @param input text user has typed so far or pasted into the search field
	     * @param selection currently selected choices
	     * @param selectCallback function(choice) callback tho add the choice to selection
	     * @param opts select2's opts
	     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
	     */
	    function defaultTokenizer(input, selection, selectCallback, opts) {
	        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
	            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
	            token, // token
	            index, // position at which the separator was found
	            i, l, // looping variables
	            separator; // the matched separator

	        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;

	        while (true) {
	            index = -1;

	            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
	                separator = opts.tokenSeparators[i];
	                index = input.indexOf(separator);
	                if (index >= 0) break;
	            }

	            if (index < 0) break; // did not find any token separator in the input string, bail

	            token = input.substring(0, index);
	            input = input.substring(index + separator.length);

	            if (token.length > 0) {
	                token = opts.createSearchChoice.call(this, token, selection);
	                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
	                    dupe = false;
	                    for (i = 0, l = selection.length; i < l; i++) {
	                        if (equal(opts.id(token), opts.id(selection[i]))) {
	                            dupe = true; break;
	                        }
	                    }

	                    if (!dupe) selectCallback(token);
	                }
	            }
	        }

	        if (original!==input) return input;
	    }

	    function cleanupJQueryElements() {
	        var self = this;

	        $.each(arguments, function (i, element) {
	            self[element].remove();
	            self[element] = null;
	        });
	    }

	    /**
	     * Creates a new class
	     *
	     * @param superClass
	     * @param methods
	     */
	    function clazz(SuperClass, methods) {
	        var constructor = function () {};
	        constructor.prototype = new SuperClass;
	        constructor.prototype.constructor = constructor;
	        constructor.prototype.parent = SuperClass.prototype;
	        constructor.prototype = $.extend(constructor.prototype, methods);
	        return constructor;
	    }

	    AbstractSelect2 = clazz(Object, {

	        // abstract
	        bind: function (func) {
	            var self = this;
	            return function () {
	                func.apply(self, arguments);
	            };
	        },

	        // abstract
	        init: function (opts) {
	            var results, search, resultsSelector = ".select2-results";

	            // prepare options
	            this.opts = opts = this.prepareOpts(opts);

	            this.id=opts.id;

	            // destroy if called on an existing component
	            if (opts.element.data("select2") !== undefined &&
	                opts.element.data("select2") !== null) {
	                opts.element.data("select2").destroy();
	            }

	            this.container = this.createContainer();

	            this.liveRegion = $('.select2-hidden-accessible');
	            if (this.liveRegion.length == 0) {
	                this.liveRegion = $("<span>", {
	                        role: "status",
	                        "aria-live": "polite"
	                    })
	                    .addClass("select2-hidden-accessible")
	                    .appendTo(document.body);
	            }

	            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
	            this.containerEventName= this.containerId
	                .replace(/([.])/g, '_')
	                .replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
	            this.container.attr("id", this.containerId);

	            this.container.attr("title", opts.element.attr("title"));

	            this.body = $(document.body);

	            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);

	            this.container.attr("style", opts.element.attr("style"));
	            this.container.css(evaluate(opts.containerCss, this.opts.element));
	            this.container.addClass(evaluate(opts.containerCssClass, this.opts.element));

	            this.elementTabIndex = this.opts.element.attr("tabindex");

	            // swap container for the element
	            this.opts.element
	                .data("select2", this)
	                .attr("tabindex", "-1")
	                .before(this.container)
	                .on("click.select2", killEvent); // do not leak click events

	            this.container.data("select2", this);

	            this.dropdown = this.container.find(".select2-drop");

	            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);

	            this.dropdown.addClass(evaluate(opts.dropdownCssClass, this.opts.element));
	            this.dropdown.data("select2", this);
	            this.dropdown.on("click", killEvent);

	            this.results = results = this.container.find(resultsSelector);
	            this.search = search = this.container.find("input.select2-input");

	            this.queryCount = 0;
	            this.resultsPage = 0;
	            this.context = null;

	            // initialize the container
	            this.initContainer();

	            this.container.on("click", killEvent);

	            installFilteredMouseMove(this.results);

	            this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
	            this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function (event) {
	                this._touchEvent = true;
	                this.highlightUnderEvent(event);
	            }));
	            this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
	            this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));

	            // Waiting for a click event on touch devices to select option and hide dropdown
	            // otherwise click will be triggered on an underlying element
	            this.dropdown.on('click', this.bind(function (event) {
	                if (this._touchEvent) {
	                    this._touchEvent = false;
	                    this.selectHighlighted();
	                }
	            }));

	            installDebouncedScroll(80, this.results);
	            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));

	            // do not propagate change event from the search field out of the component
	            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
	            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});

	            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
	            if ($.fn.mousewheel) {
	                results.mousewheel(function (e, delta, deltaX, deltaY) {
	                    var top = results.scrollTop();
	                    if (deltaY > 0 && top - deltaY <= 0) {
	                        results.scrollTop(0);
	                        killEvent(e);
	                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
	                        results.scrollTop(results.get(0).scrollHeight - results.height());
	                        killEvent(e);
	                    }
	                });
	            }

	            installKeyUpChangeEvent(search);
	            search.on("keyup-change input paste", this.bind(this.updateResults));
	            search.on("focus", function () { search.addClass("select2-focused"); });
	            search.on("blur", function () { search.removeClass("select2-focused");});

	            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
	                if ($(e.target).closest(".select2-result-selectable").length > 0) {
	                    this.highlightUnderEvent(e);
	                    this.selectHighlighted(e);
	                }
	            }));

	            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
	            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
	            // dom it will trigger the popup close, which is not what we want
	            // focusin can cause focus wars between modals and select2 since the dropdown is outside the modal.
	            this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (e) { e.stopPropagation(); });

	            this.nextSearchTerm = undefined;

	            if ($.isFunction(this.opts.initSelection)) {
	                // initialize selection based on the current value of the source element
	                this.initSelection();

	                // if the user has provided a function that can set selection based on the value of the source element
	                // we monitor the change event on the element and trigger it, allowing for two way synchronization
	                this.monitorSource();
	            }

	            if (opts.maximumInputLength !== null) {
	                this.search.attr("maxlength", opts.maximumInputLength);
	            }

	            var disabled = opts.element.prop("disabled");
	            if (disabled === undefined) disabled = false;
	            this.enable(!disabled);

	            var readonly = opts.element.prop("readonly");
	            if (readonly === undefined) readonly = false;
	            this.readonly(readonly);

	            // Calculate size of scrollbar
	            scrollBarDimensions = scrollBarDimensions || measureScrollbar();

	            this.autofocus = opts.element.prop("autofocus");
	            opts.element.prop("autofocus", false);
	            if (this.autofocus) this.focus();

	            this.search.attr("placeholder", opts.searchInputPlaceholder);
	        },

	        // abstract
	        destroy: function () {
	            var element=this.opts.element, select2 = element.data("select2"), self = this;

	            this.close();

	            if (element.length && element[0].detachEvent && self._sync) {
	                element.each(function () {
	                    if (self._sync) {
	                        this.detachEvent("onpropertychange", self._sync);
	                    }
	                });
	            }
	            if (this.propertyObserver) {
	                this.propertyObserver.disconnect();
	                this.propertyObserver = null;
	            }
	            this._sync = null;

	            if (select2 !== undefined) {
	                select2.container.remove();
	                select2.liveRegion.remove();
	                select2.dropdown.remove();
	                element
	                    .show()
	                    .removeData("select2")
	                    .off(".select2")
	                    .prop("autofocus", this.autofocus || false);
	                if (this.elementTabIndex) {
	                    element.attr({tabindex: this.elementTabIndex});
	                } else {
	                    element.removeAttr("tabindex");
	                }
	                element.show();
	            }

	            cleanupJQueryElements.call(this,
	                "container",
	                "liveRegion",
	                "dropdown",
	                "results",
	                "search"
	            );
	        },

	        // abstract
	        optionToData: function(element) {
	            if (element.is("option")) {
	                return {
	                    id:element.prop("value"),
	                    text:element.text(),
	                    element: element.get(),
	                    css: element.attr("class"),
	                    disabled: element.prop("disabled"),
	                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
	                };
	            } else if (element.is("optgroup")) {
	                return {
	                    text:element.attr("label"),
	                    children:[],
	                    element: element.get(),
	                    css: element.attr("class")
	                };
	            }
	        },

	        // abstract
	        prepareOpts: function (opts) {
	            var element, select, idKey, ajaxUrl, self = this;

	            element = opts.element;

	            if (element.get(0).tagName.toLowerCase() === "select") {
	                this.select = select = opts.element;
	            }

	            if (select) {
	                // these options are not allowed when attached to a select because they are picked up off the element itself
	                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
	                    if (this in opts) {
	                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
	                    }
	                });
	            }

	            opts = $.extend({}, {
	                populateResults: function(container, results, query) {
	                    var populate, id=this.opts.id, liveRegion=this.liveRegion;

	                    populate=function(results, container, depth) {

	                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;

	                        results = opts.sortResults(results, container, query);

	                        // collect the created nodes for bulk append
	                        var nodes = [];
	                        for (i = 0, l = results.length; i < l; i = i + 1) {

	                            result=results[i];

	                            disabled = (result.disabled === true);
	                            selectable = (!disabled) && (id(result) !== undefined);

	                            compound=result.children && result.children.length > 0;

	                            node=$("<li></li>");
	                            node.addClass("select2-results-dept-"+depth);
	                            node.addClass("select2-result");
	                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
	                            if (disabled) { node.addClass("select2-disabled"); }
	                            if (compound) { node.addClass("select2-result-with-children"); }
	                            node.addClass(self.opts.formatResultCssClass(result));
	                            node.attr("role", "presentation");

	                            label=$(document.createElement("div"));
	                            label.addClass("select2-result-label");
	                            label.attr("id", "select2-result-label-" + nextUid());
	                            label.attr("role", "option");

	                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
	                            if (formatted!==undefined) {
	                                label.html(formatted);
	                                node.append(label);
	                            }


	                            if (compound) {

	                                innerContainer=$("<ul></ul>");
	                                innerContainer.addClass("select2-result-sub");
	                                populate(result.children, innerContainer, depth+1);
	                                node.append(innerContainer);
	                            }

	                            node.data("select2-data", result);
	                            nodes.push(node[0]);
	                        }

	                        // bulk append the created nodes
	                        container.append(nodes);
	                        liveRegion.text(opts.formatMatches(results.length));
	                    };

	                    populate(results, container, 0);
	                }
	            }, $.fn.select2.defaults, opts);

	            if (typeof(opts.id) !== "function") {
	                idKey = opts.id;
	                opts.id = function (e) { return e[idKey]; };
	            }

	            if ($.isArray(opts.element.data("select2Tags"))) {
	                if ("tags" in opts) {
	                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
	                }
	                opts.tags=opts.element.data("select2Tags");
	            }

	            if (select) {
	                opts.query = this.bind(function (query) {
	                    var data = { results: [], more: false },
	                        term = query.term,
	                        children, placeholderOption, process;

	                    process=function(element, collection) {
	                        var group;
	                        if (element.is("option")) {
	                            if (query.matcher(term, element.text(), element)) {
	                                collection.push(self.optionToData(element));
	                            }
	                        } else if (element.is("optgroup")) {
	                            group=self.optionToData(element);
	                            element.children().each2(function(i, elm) { process(elm, group.children); });
	                            if (group.children.length>0) {
	                                collection.push(group);
	                            }
	                        }
	                    };

	                    children=element.children();

	                    // ignore the placeholder option if there is one
	                    if (this.getPlaceholder() !== undefined && children.length > 0) {
	                        placeholderOption = this.getPlaceholderOption();
	                        if (placeholderOption) {
	                            children=children.not(placeholderOption);
	                        }
	                    }

	                    children.each2(function(i, elm) { process(elm, data.results); });

	                    query.callback(data);
	                });
	                // this is needed because inside val() we construct choices from options and their id is hardcoded
	                opts.id=function(e) { return e.id; };
	            } else {
	                if (!("query" in opts)) {

	                    if ("ajax" in opts) {
	                        ajaxUrl = opts.element.data("ajax-url");
	                        if (ajaxUrl && ajaxUrl.length > 0) {
	                            opts.ajax.url = ajaxUrl;
	                        }
	                        opts.query = ajax.call(opts.element, opts.ajax);
	                    } else if ("data" in opts) {
	                        opts.query = local(opts.data);
	                    } else if ("tags" in opts) {
	                        opts.query = tags(opts.tags);
	                        if (opts.createSearchChoice === undefined) {
	                            opts.createSearchChoice = function (term) { return {id: $.trim(term), text: $.trim(term)}; };
	                        }
	                        if (opts.initSelection === undefined) {
	                            opts.initSelection = function (element, callback) {
	                                var data = [];
	                                $(splitVal(element.val(), opts.separator, opts.transformVal)).each(function () {
	                                    var obj = { id: this, text: this },
	                                        tags = opts.tags;
	                                    if ($.isFunction(tags)) tags=tags();
	                                    $(tags).each(function() { if (equal(this.id, obj.id)) { obj = this; return false; } });
	                                    data.push(obj);
	                                });

	                                callback(data);
	                            };
	                        }
	                    }
	                }
	            }
	            if (typeof(opts.query) !== "function") {
	                throw "query function not defined for Select2 " + opts.element.attr("id");
	            }

	            if (opts.createSearchChoicePosition === 'top') {
	                opts.createSearchChoicePosition = function(list, item) { list.unshift(item); };
	            }
	            else if (opts.createSearchChoicePosition === 'bottom') {
	                opts.createSearchChoicePosition = function(list, item) { list.push(item); };
	            }
	            else if (typeof(opts.createSearchChoicePosition) !== "function")  {
	                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
	            }

	            return opts;
	        },

	        /**
	         * Monitor the original element for changes and update select2 accordingly
	         */
	        // abstract
	        monitorSource: function () {
	            var el = this.opts.element, observer, self = this;

	            el.on("change.select2", this.bind(function (e) {
	                if (this.opts.element.data("select2-change-triggered") !== true) {
	                    this.initSelection();
	                }
	            }));

	            this._sync = this.bind(function () {

	                // sync enabled state
	                var disabled = el.prop("disabled");
	                if (disabled === undefined) disabled = false;
	                this.enable(!disabled);

	                var readonly = el.prop("readonly");
	                if (readonly === undefined) readonly = false;
	                this.readonly(readonly);

	                if (this.container) {
	                    syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
	                    this.container.addClass(evaluate(this.opts.containerCssClass, this.opts.element));
	                }

	                if (this.dropdown) {
	                    syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
	                    this.dropdown.addClass(evaluate(this.opts.dropdownCssClass, this.opts.element));
	                }

	            });

	            // IE8-10 (IE9/10 won't fire propertyChange via attachEventListener)
	            if (el.length && el[0].attachEvent) {
	                el.each(function() {
	                    this.attachEvent("onpropertychange", self._sync);
	                });
	            }

	            // safari, chrome, firefox, IE11
	            observer = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObserver;
	            if (observer !== undefined) {
	                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
	                this.propertyObserver = new observer(function (mutations) {
	                    $.each(mutations, self._sync);
	                });
	                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
	            }
	        },

	        // abstract
	        triggerSelect: function(data) {
	            var evt = $.Event("select2-selecting", { val: this.id(data), object: data, choice: data });
	            this.opts.element.trigger(evt);
	            return !evt.isDefaultPrevented();
	        },

	        /**
	         * Triggers the change event on the source element
	         */
	        // abstract
	        triggerChange: function (details) {

	            details = details || {};
	            details= $.extend({}, details, { type: "change", val: this.val() });
	            // prevents recursive triggering
	            this.opts.element.data("select2-change-triggered", true);
	            this.opts.element.trigger(details);
	            this.opts.element.data("select2-change-triggered", false);

	            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
	            // so here we trigger the click event manually
	            this.opts.element.click();

	            // ValidationEngine ignores the change event and listens instead to blur
	            // so here we trigger the blur event manually if so desired
	            if (this.opts.blurOnChange)
	                this.opts.element.blur();
	        },

	        //abstract
	        isInterfaceEnabled: function()
	        {
	            return this.enabledInterface === true;
	        },

	        // abstract
	        enableInterface: function() {
	            var enabled = this._enabled && !this._readonly,
	                disabled = !enabled;

	            if (enabled === this.enabledInterface) return false;

	            this.container.toggleClass("select2-container-disabled", disabled);
	            this.close();
	            this.enabledInterface = enabled;

	            return true;
	        },

	        // abstract
	        enable: function(enabled) {
	            if (enabled === undefined) enabled = true;
	            if (this._enabled === enabled) return;
	            this._enabled = enabled;

	            this.opts.element.prop("disabled", !enabled);
	            this.enableInterface();
	        },

	        // abstract
	        disable: function() {
	            this.enable(false);
	        },

	        // abstract
	        readonly: function(enabled) {
	            if (enabled === undefined) enabled = false;
	            if (this._readonly === enabled) return;
	            this._readonly = enabled;

	            this.opts.element.prop("readonly", enabled);
	            this.enableInterface();
	        },

	        // abstract
	        opened: function () {
	            return (this.container) ? this.container.hasClass("select2-dropdown-open") : false;
	        },

	        // abstract
	        positionDropdown: function() {
	            var $dropdown = this.dropdown,
	                container = this.container,
	                offset = container.offset(),
	                height = container.outerHeight(false),
	                width = container.outerWidth(false),
	                dropHeight = $dropdown.outerHeight(false),
	                $window = $(window),
	                windowWidth = $window.width(),
	                windowHeight = $window.height(),
	                viewPortRight = $window.scrollLeft() + windowWidth,
	                viewportBottom = $window.scrollTop() + windowHeight,
	                dropTop = offset.top + height,
	                dropLeft = offset.left,
	                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
	                enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
	                dropWidth = $dropdown.outerWidth(false),
	                enoughRoomOnRight = function() {
	                    return dropLeft + dropWidth <= viewPortRight;
	                },
	                enoughRoomOnLeft = function() {
	                    return offset.left + viewPortRight + container.outerWidth(false)  > dropWidth;
	                },
	                aboveNow = $dropdown.hasClass("select2-drop-above"),
	                bodyOffset,
	                above,
	                changeDirection,
	                css,
	                resultsListNode;

	            // always prefer the current above/below alignment, unless there is not enough room
	            if (aboveNow) {
	                above = true;
	                if (!enoughRoomAbove && enoughRoomBelow) {
	                    changeDirection = true;
	                    above = false;
	                }
	            } else {
	                above = false;
	                if (!enoughRoomBelow && enoughRoomAbove) {
	                    changeDirection = true;
	                    above = true;
	                }
	            }

	            //if we are changing direction we need to get positions when dropdown is hidden;
	            if (changeDirection) {
	                $dropdown.hide();
	                offset = this.container.offset();
	                height = this.container.outerHeight(false);
	                width = this.container.outerWidth(false);
	                dropHeight = $dropdown.outerHeight(false);
	                viewPortRight = $window.scrollLeft() + windowWidth;
	                viewportBottom = $window.scrollTop() + windowHeight;
	                dropTop = offset.top + height;
	                dropLeft = offset.left;
	                dropWidth = $dropdown.outerWidth(false);
	                $dropdown.show();

	                // fix so the cursor does not move to the left within the search-textbox in IE
	                this.focusSearch();
	            }

	            if (this.opts.dropdownAutoWidth) {
	                resultsListNode = $('.select2-results', $dropdown)[0];
	                $dropdown.addClass('select2-drop-auto-width');
	                $dropdown.css('width', '');
	                // Add scrollbar width to dropdown if vertical scrollbar is present
	                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
	                dropWidth > width ? width = dropWidth : dropWidth = width;
	                dropHeight = $dropdown.outerHeight(false);
	            }
	            else {
	                this.container.removeClass('select2-drop-auto-width');
	            }

	            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
	            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body.scrollTop(), "enough?", enoughRoomAbove);

	            // fix positioning when body has an offset and is not position: static
	            if (this.body.css('position') !== 'static') {
	                bodyOffset = this.body.offset();
	                dropTop -= bodyOffset.top;
	                dropLeft -= bodyOffset.left;
	            }

	            if (!enoughRoomOnRight() && enoughRoomOnLeft()) {
	                dropLeft = offset.left + this.container.outerWidth(false) - dropWidth;
	            }

	            css =  {
	                left: dropLeft,
	                width: width
	            };

	            if (above) {
	                css.top = offset.top - dropHeight;
	                css.bottom = 'auto';
	                this.container.addClass("select2-drop-above");
	                $dropdown.addClass("select2-drop-above");
	            }
	            else {
	                css.top = dropTop;
	                css.bottom = 'auto';
	                this.container.removeClass("select2-drop-above");
	                $dropdown.removeClass("select2-drop-above");
	            }
	            css = $.extend(css, evaluate(this.opts.dropdownCss, this.opts.element));

	            $dropdown.css(css);
	        },

	        // abstract
	        shouldOpen: function() {
	            var event;

	            if (this.opened()) return false;

	            if (this._enabled === false || this._readonly === true) return false;

	            event = $.Event("select2-opening");
	            this.opts.element.trigger(event);
	            return !event.isDefaultPrevented();
	        },

	        // abstract
	        clearDropdownAlignmentPreference: function() {
	            // clear the classes used to figure out the preference of where the dropdown should be opened
	            this.container.removeClass("select2-drop-above");
	            this.dropdown.removeClass("select2-drop-above");
	        },

	        /**
	         * Opens the dropdown
	         *
	         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
	         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
	         */
	        // abstract
	        open: function () {

	            if (!this.shouldOpen()) return false;

	            this.opening();

	            // Only bind the document mousemove when the dropdown is visible
	            $document.on("mousemove.select2Event", function (e) {
	                lastMousePosition.x = e.pageX;
	                lastMousePosition.y = e.pageY;
	            });

	            return true;
	        },

	        /**
	         * Performs the opening of the dropdown
	         */
	        // abstract
	        opening: function() {
	            var cid = this.containerEventName,
	                scroll = "scroll." + cid,
	                resize = "resize."+cid,
	                orient = "orientationchange."+cid,
	                mask;

	            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");

	            this.clearDropdownAlignmentPreference();

	            if(this.dropdown[0] !== this.body.children().last()[0]) {
	                this.dropdown.detach().appendTo(this.body);
	            }

	            // create the dropdown mask if doesn't already exist
	            mask = $("#select2-drop-mask");
	            if (mask.length === 0) {
	                mask = $(document.createElement("div"));
	                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
	                mask.hide();
	                mask.appendTo(this.body);
	                mask.on("mousedown touchstart click", function (e) {
	                    // Prevent IE from generating a click event on the body
	                    reinsertElement(mask);

	                    var dropdown = $("#select2-drop"), self;
	                    if (dropdown.length > 0) {
	                        self=dropdown.data("select2");
	                        if (self.opts.selectOnBlur) {
	                            self.selectHighlighted({noFocus: true});
	                        }
	                        self.close();
	                        e.preventDefault();
	                        e.stopPropagation();
	                    }
	                });
	            }

	            // ensure the mask is always right before the dropdown
	            if (this.dropdown.prev()[0] !== mask[0]) {
	                this.dropdown.before(mask);
	            }

	            // move the global id to the correct dropdown
	            $("#select2-drop").removeAttr("id");
	            this.dropdown.attr("id", "select2-drop");

	            // show the elements
	            mask.show();

	            this.positionDropdown();
	            this.dropdown.show();
	            this.positionDropdown();

	            this.dropdown.addClass("select2-drop-active");

	            // attach listeners to events that can change the position of the container and thus require
	            // the position of the dropdown to be updated as well so it does not come unglued from the container
	            var that = this;
	            this.container.parents().add(window).each(function () {
	                $(this).on(resize+" "+scroll+" "+orient, function (e) {
	                    if (that.opened()) that.positionDropdown();
	                });
	            });


	        },

	        // abstract
	        close: function () {
	            if (!this.opened()) return;

	            var cid = this.containerEventName,
	                scroll = "scroll." + cid,
	                resize = "resize."+cid,
	                orient = "orientationchange."+cid;

	            // unbind event listeners
	            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });

	            this.clearDropdownAlignmentPreference();

	            $("#select2-drop-mask").hide();
	            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
	            this.dropdown.hide();
	            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
	            this.results.empty();

	            // Now that the dropdown is closed, unbind the global document mousemove event
	            $document.off("mousemove.select2Event");

	            this.clearSearch();
	            this.search.removeClass("select2-active");
	            this.opts.element.trigger($.Event("select2-close"));
	        },

	        /**
	         * Opens control, sets input value, and updates results.
	         */
	        // abstract
	        externalSearch: function (term) {
	            this.open();
	            this.search.val(term);
	            this.updateResults(false);
	        },

	        // abstract
	        clearSearch: function () {

	        },

	        //abstract
	        getMaximumSelectionSize: function() {
	            return evaluate(this.opts.maximumSelectionSize, this.opts.element);
	        },

	        // abstract
	        ensureHighlightVisible: function () {
	            var results = this.results, children, index, child, hb, rb, y, more, topOffset;

	            index = this.highlight();

	            if (index < 0) return;

	            if (index == 0) {

	                // if the first element is highlighted scroll all the way to the top,
	                // that way any unselectable headers above it will also be scrolled
	                // into view

	                results.scrollTop(0);
	                return;
	            }

	            children = this.findHighlightableChoices().find('.select2-result-label');

	            child = $(children[index]);

	            topOffset = (child.offset() || {}).top || 0;

	            hb = topOffset + child.outerHeight(true);

	            // if this is the last child lets also make sure select2-more-results is visible
	            if (index === children.length - 1) {
	                more = results.find("li.select2-more-results");
	                if (more.length > 0) {
	                    hb = more.offset().top + more.outerHeight(true);
	                }
	            }

	            rb = results.offset().top + results.outerHeight(false);
	            if (hb > rb) {
	                results.scrollTop(results.scrollTop() + (hb - rb));
	            }
	            y = topOffset - results.offset().top;

	            // make sure the top of the element is visible
	            if (y < 0 && child.css('display') != 'none' ) {
	                results.scrollTop(results.scrollTop() + y); // y is negative
	            }
	        },

	        // abstract
	        findHighlightableChoices: function() {
	            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
	        },

	        // abstract
	        moveHighlight: function (delta) {
	            var choices = this.findHighlightableChoices(),
	                index = this.highlight();

	            while (index > -1 && index < choices.length) {
	                index += delta;
	                var choice = $(choices[index]);
	                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
	                    this.highlight(index);
	                    break;
	                }
	            }
	        },

	        // abstract
	        highlight: function (index) {
	            var choices = this.findHighlightableChoices(),
	                choice,
	                data;

	            if (arguments.length === 0) {
	                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
	            }

	            if (index >= choices.length) index = choices.length - 1;
	            if (index < 0) index = 0;

	            this.removeHighlight();

	            choice = $(choices[index]);
	            choice.addClass("select2-highlighted");

	            // ensure assistive technology can determine the active choice
	            this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));

	            this.ensureHighlightVisible();

	            this.liveRegion.text(choice.text());

	            data = choice.data("select2-data");
	            if (data) {
	                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
	            }
	        },

	        removeHighlight: function() {
	            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
	        },

	        touchMoved: function() {
	            this._touchMoved = true;
	        },

	        clearTouchMoved: function() {
	          this._touchMoved = false;
	        },

	        // abstract
	        countSelectableResults: function() {
	            return this.findHighlightableChoices().length;
	        },

	        // abstract
	        highlightUnderEvent: function (event) {
	            var el = $(event.target).closest(".select2-result-selectable");
	            if (el.length > 0 && !el.is(".select2-highlighted")) {
	                var choices = this.findHighlightableChoices();
	                this.highlight(choices.index(el));
	            } else if (el.length == 0) {
	                // if we are over an unselectable item remove all highlights
	                this.removeHighlight();
	            }
	        },

	        // abstract
	        loadMoreIfNeeded: function () {
	            var results = this.results,
	                more = results.find("li.select2-more-results"),
	                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
	                page = this.resultsPage + 1,
	                self=this,
	                term=this.search.val(),
	                context=this.context;

	            if (more.length === 0) return;
	            below = more.offset().top - results.offset().top - results.height();

	            if (below <= this.opts.loadMorePadding) {
	                more.addClass("select2-active");
	                this.opts.query({
	                        element: this.opts.element,
	                        term: term,
	                        page: page,
	                        context: context,
	                        matcher: this.opts.matcher,
	                        callback: this.bind(function (data) {

	                    // ignore a response if the select2 has been closed before it was received
	                    if (!self.opened()) return;


	                    self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
	                    self.postprocessResults(data, false, false);

	                    if (data.more===true) {
	                        more.detach().appendTo(results).html(self.opts.escapeMarkup(evaluate(self.opts.formatLoadMore, self.opts.element, page+1)));
	                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
	                    } else {
	                        more.remove();
	                    }
	                    self.positionDropdown();
	                    self.resultsPage = page;
	                    self.context = data.context;
	                    this.opts.element.trigger({ type: "select2-loaded", items: data });
	                })});
	            }
	        },

	        /**
	         * Default tokenizer function which does nothing
	         */
	        tokenize: function() {

	        },

	        /**
	         * @param initial whether or not this is the call to this method right after the dropdown has been opened
	         */
	        // abstract
	        updateResults: function (initial) {
	            var search = this.search,
	                results = this.results,
	                opts = this.opts,
	                data,
	                self = this,
	                input,
	                term = search.val(),
	                lastTerm = $.data(this.container, "select2-last-term"),
	                // sequence number used to drop out-of-order responses
	                queryNumber;

	            // prevent duplicate queries against the same term
	            if (initial !== true && lastTerm && equal(term, lastTerm)) return;

	            $.data(this.container, "select2-last-term", term);

	            // if the search is currently hidden we do not alter the results
	            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
	                return;
	            }

	            function postRender() {
	                search.removeClass("select2-active");
	                self.positionDropdown();
	                if (results.find('.select2-no-results,.select2-selection-limit,.select2-searching').length) {
	                    self.liveRegion.text(results.text());
	                }
	                else {
	                    self.liveRegion.text(self.opts.formatMatches(results.find('.select2-result-selectable:not(".select2-selected")').length));
	                }
	            }

	            function render(html) {
	                results.html(html);
	                postRender();
	            }

	            queryNumber = ++this.queryCount;

	            var maxSelSize = this.getMaximumSelectionSize();
	            if (maxSelSize >=1) {
	                data = this.data();
	                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
	                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, opts.element, maxSelSize) + "</li>");
	                    return;
	                }
	            }

	            if (search.val().length < opts.minimumInputLength) {
	                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
	                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, opts.element, search.val(), opts.minimumInputLength) + "</li>");
	                } else {
	                    render("");
	                }
	                if (initial && this.showSearch) this.showSearch(true);
	                return;
	            }

	            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
	                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
	                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, opts.element, search.val(), opts.maximumInputLength) + "</li>");
	                } else {
	                    render("");
	                }
	                return;
	            }

	            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
	                render("<li class='select2-searching'>" + evaluate(opts.formatSearching, opts.element) + "</li>");
	            }

	            search.addClass("select2-active");

	            this.removeHighlight();

	            // give the tokenizer a chance to pre-process the input
	            input = this.tokenize();
	            if (input != undefined && input != null) {
	                search.val(input);
	            }

	            this.resultsPage = 1;

	            opts.query({
	                element: opts.element,
	                    term: search.val(),
	                    page: this.resultsPage,
	                    context: null,
	                    matcher: opts.matcher,
	                    callback: this.bind(function (data) {
	                var def; // default choice

	                // ignore old responses
	                if (queryNumber != this.queryCount) {
	                  return;
	                }

	                // ignore a response if the select2 has been closed before it was received
	                if (!this.opened()) {
	                    this.search.removeClass("select2-active");
	                    return;
	                }

	                // handle ajax error
	                if(data.hasError !== undefined && checkFormatter(opts.formatAjaxError, "formatAjaxError")) {
	                    render("<li class='select2-ajax-error'>" + evaluate(opts.formatAjaxError, opts.element, data.jqXHR, data.textStatus, data.errorThrown) + "</li>");
	                    return;
	                }

	                // save context, if any
	                this.context = (data.context===undefined) ? null : data.context;
	                // create a default choice and prepend it to the list
	                if (this.opts.createSearchChoice && search.val() !== "") {
	                    def = this.opts.createSearchChoice.call(self, search.val(), data.results);
	                    if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
	                        if ($(data.results).filter(
	                            function () {
	                                return equal(self.id(this), self.id(def));
	                            }).length === 0) {
	                            this.opts.createSearchChoicePosition(data.results, def);
	                        }
	                    }
	                }

	                if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
	                    render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, opts.element, search.val()) + "</li>");
	                    return;
	                }

	                results.empty();
	                self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});

	                if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
	                    results.append("<li class='select2-more-results'>" + opts.escapeMarkup(evaluate(opts.formatLoadMore, opts.element, this.resultsPage)) + "</li>");
	                    window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
	                }

	                this.postprocessResults(data, initial);

	                postRender();

	                this.opts.element.trigger({ type: "select2-loaded", items: data });
	            })});
	        },

	        // abstract
	        cancel: function () {
	            this.close();
	        },

	        // abstract
	        blur: function () {
	            // if selectOnBlur == true, select the currently highlighted option
	            if (this.opts.selectOnBlur)
	                this.selectHighlighted({noFocus: true});

	            this.close();
	            this.container.removeClass("select2-container-active");
	            // synonymous to .is(':focus'), which is available in jquery >= 1.6
	            if (this.search[0] === document.activeElement) { this.search.blur(); }
	            this.clearSearch();
	            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
	        },

	        // abstract
	        focusSearch: function () {
	            focus(this.search);
	        },

	        // abstract
	        selectHighlighted: function (options) {
	            if (this._touchMoved) {
	              this.clearTouchMoved();
	              return;
	            }
	            var index=this.highlight(),
	                highlighted=this.results.find(".select2-highlighted"),
	                data = highlighted.closest('.select2-result').data("select2-data");

	            if (data) {
	                this.highlight(index);
	                this.onSelect(data, options);
	            } else if (options && options.noFocus) {
	                this.close();
	            }
	        },

	        // abstract
	        getPlaceholder: function () {
	            var placeholderOption;
	            return this.opts.element.attr("placeholder") ||
	                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
	                this.opts.element.data("placeholder") ||
	                this.opts.placeholder ||
	                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
	        },

	        // abstract
	        getPlaceholderOption: function() {
	            if (this.select) {
	                var firstOption = this.select.children('option').first();
	                if (this.opts.placeholderOption !== undefined ) {
	                    //Determine the placeholder option based on the specified placeholderOption setting
	                    return (this.opts.placeholderOption === "first" && firstOption) ||
	                           (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
	                } else if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
	                    //No explicit placeholder option specified, use the first if it's blank
	                    return firstOption;
	                }
	            }
	        },

	        /**
	         * Get the desired width for the container element.  This is
	         * derived first from option `width` passed to select2, then
	         * the inline 'style' on the original element, and finally
	         * falls back to the jQuery calculated element width.
	         */
	        // abstract
	        initContainerWidth: function () {
	            function resolveContainerWidth() {
	                var style, attrs, matches, i, l, attr;

	                if (this.opts.width === "off") {
	                    return null;
	                } else if (this.opts.width === "element"){
	                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
	                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
	                    // check if there is inline style on the element that contains width
	                    style = this.opts.element.attr('style');
	                    if (style !== undefined) {
	                        attrs = style.split(';');
	                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
	                            attr = attrs[i].replace(/\s/g, '');
	                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
	                            if (matches !== null && matches.length >= 1)
	                                return matches[1];
	                        }
	                    }

	                    if (this.opts.width === "resolve") {
	                        // next check if css('width') can resolve a width that is percent based, this is sometimes possible
	                        // when attached to input type=hidden or elements hidden via css
	                        style = this.opts.element.css('width');
	                        if (style.indexOf("%") > 0) return style;

	                        // finally, fallback on the calculated width of the element
	                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
	                    }

	                    return null;
	                } else if ($.isFunction(this.opts.width)) {
	                    return this.opts.width();
	                } else {
	                    return this.opts.width;
	               }
	            };

	            var width = resolveContainerWidth.call(this);
	            if (width !== null) {
	                this.container.css("width", width);
	            }
	        }
	    });

	    SingleSelect2 = clazz(AbstractSelect2, {

	        // single

	        createContainer: function () {
	            var container = $(document.createElement("div")).attr({
	                "class": "select2-container"
	            }).html([
	                "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
	                "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>",
	                "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>",
	                "</a>",
	                "<label for='' class='select2-offscreen'></label>",
	                "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />",
	                "<div class='select2-drop select2-display-none'>",
	                "   <div class='select2-search'>",
	                "       <label for='' class='select2-offscreen'></label>",
	                "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'",
	                "       aria-autocomplete='list' />",
	                "   </div>",
	                "   <ul class='select2-results' role='listbox'>",
	                "   </ul>",
	                "</div>"].join(""));
	            return container;
	        },

	        // single
	        enableInterface: function() {
	            if (this.parent.enableInterface.apply(this, arguments)) {
	                this.focusser.prop("disabled", !this.isInterfaceEnabled());
	            }
	        },

	        // single
	        opening: function () {
	            var el, range, len;

	            if (this.opts.minimumResultsForSearch >= 0) {
	                this.showSearch(true);
	            }

	            this.parent.opening.apply(this, arguments);

	            if (this.showSearchInput !== false) {
	                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
	                // all other browsers handle this just fine

	                this.search.val(this.focusser.val());
	            }
	            if (this.opts.shouldFocusInput(this)) {
	                this.search.focus();
	                // move the cursor to the end after focussing, otherwise it will be at the beginning and
	                // new text will appear *before* focusser.val()
	                el = this.search.get(0);
	                if (el.createTextRange) {
	                    range = el.createTextRange();
	                    range.collapse(false);
	                    range.select();
	                } else if (el.setSelectionRange) {
	                    len = this.search.val().length;
	                    el.setSelectionRange(len, len);
	                }
	            }

	            // initializes search's value with nextSearchTerm (if defined by user)
	            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
	            if(this.search.val() === "") {
	                if(this.nextSearchTerm != undefined){
	                    this.search.val(this.nextSearchTerm);
	                    this.search.select();
	                }
	            }

	            this.focusser.prop("disabled", true).val("");
	            this.updateResults(true);
	            this.opts.element.trigger($.Event("select2-open"));
	        },

	        // single
	        close: function () {
	            if (!this.opened()) return;
	            this.parent.close.apply(this, arguments);

	            this.focusser.prop("disabled", false);

	            if (this.opts.shouldFocusInput(this)) {
	                this.focusser.focus();
	            }
	        },

	        // single
	        focus: function () {
	            if (this.opened()) {
	                this.close();
	            } else {
	                this.focusser.prop("disabled", false);
	                if (this.opts.shouldFocusInput(this)) {
	                    this.focusser.focus();
	                }
	            }
	        },

	        // single
	        isFocused: function () {
	            return this.container.hasClass("select2-container-active");
	        },

	        // single
	        cancel: function () {
	            this.parent.cancel.apply(this, arguments);
	            this.focusser.prop("disabled", false);

	            if (this.opts.shouldFocusInput(this)) {
	                this.focusser.focus();
	            }
	        },

	        // single
	        destroy: function() {
	            $("label[for='" + this.focusser.attr('id') + "']")
	                .attr('for', this.opts.element.attr("id"));
	            this.parent.destroy.apply(this, arguments);

	            cleanupJQueryElements.call(this,
	                "selection",
	                "focusser"
	            );
	        },

	        // single
	        initContainer: function () {

	            var selection,
	                container = this.container,
	                dropdown = this.dropdown,
	                idSuffix = nextUid(),
	                elementLabel;

	            if (this.opts.minimumResultsForSearch < 0) {
	                this.showSearch(false);
	            } else {
	                this.showSearch(true);
	            }

	            this.selection = selection = container.find(".select2-choice");

	            this.focusser = container.find(".select2-focusser");

	            // add aria associations
	            selection.find(".select2-chosen").attr("id", "select2-chosen-"+idSuffix);
	            this.focusser.attr("aria-labelledby", "select2-chosen-"+idSuffix);
	            this.results.attr("id", "select2-results-"+idSuffix);
	            this.search.attr("aria-owns", "select2-results-"+idSuffix);

	            // rewrite labels from original element to focusser
	            this.focusser.attr("id", "s2id_autogen"+idSuffix);

	            elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
	            this.opts.element.focus(this.bind(function () { this.focus(); }));

	            this.focusser.prev()
	                .text(elementLabel.text())
	                .attr('for', this.focusser.attr('id'));

	            // Ensure the original element retains an accessible name
	            var originalTitle = this.opts.element.attr("title");
	            this.opts.element.attr("title", (originalTitle || elementLabel.text()));

	            this.focusser.attr("tabindex", this.elementTabIndex);

	            // write label for search field using the label from the focusser element
	            this.search.attr("id", this.focusser.attr('id') + '_search');

	            this.search.prev()
	                .text($("label[for='" + this.focusser.attr('id') + "']").text())
	                .attr('for', this.search.attr('id'));

	            this.search.on("keydown", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;

	                // filter 229 keyCodes (input method editor is processing key input)
	                if (229 == e.keyCode) return;

	                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
	                    // prevent the page from scrolling
	                    killEvent(e);
	                    return;
	                }

	                switch (e.which) {
	                    case KEY.UP:
	                    case KEY.DOWN:
	                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
	                        killEvent(e);
	                        return;
	                    case KEY.ENTER:
	                        this.selectHighlighted();
	                        killEvent(e);
	                        return;
	                    case KEY.TAB:
	                        this.selectHighlighted({noFocus: true});
	                        return;
	                    case KEY.ESC:
	                        this.cancel(e);
	                        killEvent(e);
	                        return;
	                }
	            }));

	            this.search.on("blur", this.bind(function(e) {
	                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
	                // without this the search field loses focus which is annoying
	                if (document.activeElement === this.body.get(0)) {
	                    window.setTimeout(this.bind(function() {
	                        if (this.opened()) {
	                            this.search.focus();
	                        }
	                    }), 0);
	                }
	            }));

	            this.focusser.on("keydown", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;

	                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
	                    return;
	                }

	                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
	                    killEvent(e);
	                    return;
	                }

	                if (e.which == KEY.DOWN || e.which == KEY.UP
	                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {

	                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;

	                    this.open();
	                    killEvent(e);
	                    return;
	                }

	                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
	                    if (this.opts.allowClear) {
	                        this.clear();
	                    }
	                    killEvent(e);
	                    return;
	                }
	            }));


	            installKeyUpChangeEvent(this.focusser);
	            this.focusser.on("keyup-change input", this.bind(function(e) {
	                if (this.opts.minimumResultsForSearch >= 0) {
	                    e.stopPropagation();
	                    if (this.opened()) return;
	                    this.open();
	                }
	            }));

	            selection.on("mousedown touchstart", "abbr", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) {
	                    return;
	                }

	                this.clear();
	                killEventImmediately(e);
	                this.close();

	                if (this.selection) {
	                    this.selection.focus();
	                }
	            }));

	            selection.on("mousedown touchstart", this.bind(function (e) {
	                // Prevent IE from generating a click event on the body
	                reinsertElement(selection);

	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }

	                if (this.opened()) {
	                    this.close();
	                } else if (this.isInterfaceEnabled()) {
	                    this.open();
	                }

	                killEvent(e);
	            }));

	            dropdown.on("mousedown touchstart", this.bind(function() {
	                if (this.opts.shouldFocusInput(this)) {
	                    this.search.focus();
	                }
	            }));

	            selection.on("focus", this.bind(function(e) {
	                killEvent(e);
	            }));

	            this.focusser.on("focus", this.bind(function(){
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.container.addClass("select2-container-active");
	            })).on("blur", this.bind(function() {
	                if (!this.opened()) {
	                    this.container.removeClass("select2-container-active");
	                    this.opts.element.trigger($.Event("select2-blur"));
	                }
	            }));
	            this.search.on("focus", this.bind(function(){
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.container.addClass("select2-container-active");
	            }));

	            this.initContainerWidth();
	            this.opts.element.hide();
	            this.setPlaceholder();

	        },

	        // single
	        clear: function(triggerChange) {
	            var data=this.selection.data("select2-data");
	            if (data) { // guard against queued quick consecutive clicks
	                var evt = $.Event("select2-clearing");
	                this.opts.element.trigger(evt);
	                if (evt.isDefaultPrevented()) {
	                    return;
	                }
	                var placeholderOption = this.getPlaceholderOption();
	                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
	                this.selection.find(".select2-chosen").empty();
	                this.selection.removeData("select2-data");
	                this.setPlaceholder();

	                if (triggerChange !== false){
	                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
	                    this.triggerChange({removed:data});
	                }
	            }
	        },

	        /**
	         * Sets selection based on source element's value
	         */
	        // single
	        initSelection: function () {
	            var selected;
	            if (this.isPlaceholderOptionSelected()) {
	                this.updateSelection(null);
	                this.close();
	                this.setPlaceholder();
	            } else {
	                var self = this;
	                this.opts.initSelection.call(null, this.opts.element, function(selected){
	                    if (selected !== undefined && selected !== null) {
	                        self.updateSelection(selected);
	                        self.close();
	                        self.setPlaceholder();
	                        self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val());
	                    }
	                });
	            }
	        },

	        isPlaceholderOptionSelected: function() {
	            var placeholderOption;
	            if (this.getPlaceholder() === undefined) return false; // no placeholder specified so no option should be considered
	            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
	                || (this.opts.element.val() === "")
	                || (this.opts.element.val() === undefined)
	                || (this.opts.element.val() === null);
	        },

	        // single
	        prepareOpts: function () {
	            var opts = this.parent.prepareOpts.apply(this, arguments),
	                self=this;

	            if (opts.element.get(0).tagName.toLowerCase() === "select") {
	                // install the selection initializer
	                opts.initSelection = function (element, callback) {
	                    var selected = element.find("option").filter(function() { return this.selected && !this.disabled });
	                    // a single select box always has a value, no need to null check 'selected'
	                    callback(self.optionToData(selected));
	                };
	            } else if ("data" in opts) {
	                // install default initSelection when applied to hidden input and data is local
	                opts.initSelection = opts.initSelection || function (element, callback) {
	                    var id = element.val();
	                    //search in data by id, storing the actual matching item
	                    var match = null;
	                    opts.query({
	                        matcher: function(term, text, el){
	                            var is_match = equal(id, opts.id(el));
	                            if (is_match) {
	                                match = el;
	                            }
	                            return is_match;
	                        },
	                        callback: !$.isFunction(callback) ? $.noop : function() {
	                            callback(match);
	                        }
	                    });
	                };
	            }

	            return opts;
	        },

	        // single
	        getPlaceholder: function() {
	            // if a placeholder is specified on a single select without a valid placeholder option ignore it
	            if (this.select) {
	                if (this.getPlaceholderOption() === undefined) {
	                    return undefined;
	                }
	            }

	            return this.parent.getPlaceholder.apply(this, arguments);
	        },

	        // single
	        setPlaceholder: function () {
	            var placeholder = this.getPlaceholder();

	            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {

	                // check for a placeholder option if attached to a select
	                if (this.select && this.getPlaceholderOption() === undefined) return;

	                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));

	                this.selection.addClass("select2-default");

	                this.container.removeClass("select2-allowclear");
	            }
	        },

	        // single
	        postprocessResults: function (data, initial, noHighlightUpdate) {
	            var selected = 0, self = this, showSearchInput = true;

	            // find the selected element in the result list

	            this.findHighlightableChoices().each2(function (i, elm) {
	                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
	                    selected = i;
	                    return false;
	                }
	            });

	            // and highlight it
	            if (noHighlightUpdate !== false) {
	                if (initial === true && selected >= 0) {
	                    this.highlight(selected);
	                } else {
	                    this.highlight(0);
	                }
	            }

	            // hide the search box if this is the first we got the results and there are enough of them for search

	            if (initial === true) {
	                var min = this.opts.minimumResultsForSearch;
	                if (min >= 0) {
	                    this.showSearch(countResults(data.results) >= min);
	                }
	            }
	        },

	        // single
	        showSearch: function(showSearchInput) {
	            if (this.showSearchInput === showSearchInput) return;

	            this.showSearchInput = showSearchInput;

	            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
	            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
	            //add "select2-with-searchbox" to the container if search box is shown
	            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
	        },

	        // single
	        onSelect: function (data, options) {

	            if (!this.triggerSelect(data)) { return; }

	            var old = this.opts.element.val(),
	                oldData = this.data();

	            this.opts.element.val(this.id(data));
	            this.updateSelection(data);

	            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });

	            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
	            this.close();

	            if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
	                this.focusser.focus();
	            }

	            if (!equal(old, this.id(data))) {
	                this.triggerChange({ added: data, removed: oldData });
	            }
	        },

	        // single
	        updateSelection: function (data) {

	            var container=this.selection.find(".select2-chosen"), formatted, cssClass;

	            this.selection.data("select2-data", data);

	            container.empty();
	            if (data !== null) {
	                formatted=this.opts.formatSelection(data, container, this.opts.escapeMarkup);
	            }
	            if (formatted !== undefined) {
	                container.append(formatted);
	            }
	            cssClass=this.opts.formatSelectionCssClass(data, container);
	            if (cssClass !== undefined) {
	                container.addClass(cssClass);
	            }

	            this.selection.removeClass("select2-default");

	            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
	                this.container.addClass("select2-allowclear");
	            }
	        },

	        // single
	        val: function () {
	            var val,
	                triggerChange = false,
	                data = null,
	                self = this,
	                oldData = this.data();

	            if (arguments.length === 0) {
	                return this.opts.element.val();
	            }

	            val = arguments[0];

	            if (arguments.length > 1) {
	                triggerChange = arguments[1];
	            }

	            if (this.select) {
	                this.select
	                    .val(val)
	                    .find("option").filter(function() { return this.selected }).each2(function (i, elm) {
	                        data = self.optionToData(elm);
	                        return false;
	                    });
	                this.updateSelection(data);
	                this.setPlaceholder();
	                if (triggerChange) {
	                    this.triggerChange({added: data, removed:oldData});
	                }
	            } else {
	                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
	                if (!val && val !== 0) {
	                    this.clear(triggerChange);
	                    return;
	                }
	                if (this.opts.initSelection === undefined) {
	                    throw new Error("cannot call val() if initSelection() is not defined");
	                }
	                this.opts.element.val(val);
	                this.opts.initSelection(this.opts.element, function(data){
	                    self.opts.element.val(!data ? "" : self.id(data));
	                    self.updateSelection(data);
	                    self.setPlaceholder();
	                    if (triggerChange) {
	                        self.triggerChange({added: data, removed:oldData});
	                    }
	                });
	            }
	        },

	        // single
	        clearSearch: function () {
	            this.search.val("");
	            this.focusser.val("");
	        },

	        // single
	        data: function(value) {
	            var data,
	                triggerChange = false;

	            if (arguments.length === 0) {
	                data = this.selection.data("select2-data");
	                if (data == undefined) data = null;
	                return data;
	            } else {
	                if (arguments.length > 1) {
	                    triggerChange = arguments[1];
	                }
	                if (!value) {
	                    this.clear(triggerChange);
	                } else {
	                    data = this.data();
	                    this.opts.element.val(!value ? "" : this.id(value));
	                    this.updateSelection(value);
	                    if (triggerChange) {
	                        this.triggerChange({added: value, removed:data});
	                    }
	                }
	            }
	        }
	    });

	    MultiSelect2 = clazz(AbstractSelect2, {

	        // multi
	        createContainer: function () {
	            var container = $(document.createElement("div")).attr({
	                "class": "select2-container select2-container-multi"
	            }).html([
	                "<ul class='select2-choices'>",
	                "  <li class='select2-search-field'>",
	                "    <label for='' class='select2-offscreen'></label>",
	                "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
	                "  </li>",
	                "</ul>",
	                "<div class='select2-drop select2-drop-multi select2-display-none'>",
	                "   <ul class='select2-results'>",
	                "   </ul>",
	                "</div>"].join(""));
	            return container;
	        },

	        // multi
	        prepareOpts: function () {
	            var opts = this.parent.prepareOpts.apply(this, arguments),
	                self=this;

	            // TODO validate placeholder is a string if specified
	            if (opts.element.get(0).tagName.toLowerCase() === "select") {
	                // install the selection initializer
	                opts.initSelection = function (element, callback) {

	                    var data = [];

	                    element.find("option").filter(function() { return this.selected && !this.disabled }).each2(function (i, elm) {
	                        data.push(self.optionToData(elm));
	                    });
	                    callback(data);
	                };
	            } else if ("data" in opts) {
	                // install default initSelection when applied to hidden input and data is local
	                opts.initSelection = opts.initSelection || function (element, callback) {
	                    var ids = splitVal(element.val(), opts.separator, opts.transformVal);
	                    //search in data by array of ids, storing matching items in a list
	                    var matches = [];
	                    opts.query({
	                        matcher: function(term, text, el){
	                            var is_match = $.grep(ids, function(id) {
	                                return equal(id, opts.id(el));
	                            }).length;
	                            if (is_match) {
	                                matches.push(el);
	                            }
	                            return is_match;
	                        },
	                        callback: !$.isFunction(callback) ? $.noop : function() {
	                            // reorder matches based on the order they appear in the ids array because right now
	                            // they are in the order in which they appear in data array
	                            var ordered = [];
	                            for (var i = 0; i < ids.length; i++) {
	                                var id = ids[i];
	                                for (var j = 0; j < matches.length; j++) {
	                                    var match = matches[j];
	                                    if (equal(id, opts.id(match))) {
	                                        ordered.push(match);
	                                        matches.splice(j, 1);
	                                        break;
	                                    }
	                                }
	                            }
	                            callback(ordered);
	                        }
	                    });
	                };
	            }

	            return opts;
	        },

	        // multi
	        selectChoice: function (choice) {

	            var selected = this.container.find(".select2-search-choice-focus");
	            if (selected.length && choice && choice[0] == selected[0]) {

	            } else {
	                if (selected.length) {
	                    this.opts.element.trigger("choice-deselected", selected);
	                }
	                selected.removeClass("select2-search-choice-focus");
	                if (choice && choice.length) {
	                    this.close();
	                    choice.addClass("select2-search-choice-focus");
	                    this.opts.element.trigger("choice-selected", choice);
	                }
	            }
	        },

	        // multi
	        destroy: function() {
	            $("label[for='" + this.search.attr('id') + "']")
	                .attr('for', this.opts.element.attr("id"));
	            this.parent.destroy.apply(this, arguments);

	            cleanupJQueryElements.call(this,
	                "searchContainer",
	                "selection"
	            );
	        },

	        // multi
	        initContainer: function () {

	            var selector = ".select2-choices", selection;

	            this.searchContainer = this.container.find(".select2-search-field");
	            this.selection = selection = this.container.find(selector);

	            var _this = this;
	            this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function (e) {
	                _this.search[0].focus();
	                _this.selectChoice($(this));
	            });

	            // rewrite labels from original element to focusser
	            this.search.attr("id", "s2id_autogen"+nextUid());

	            this.search.prev()
	                .text($("label[for='" + this.opts.element.attr("id") + "']").text())
	                .attr('for', this.search.attr('id'));
	            this.opts.element.focus(this.bind(function () { this.focus(); }));

	            this.search.on("input paste", this.bind(function() {
	                if (this.search.attr('placeholder') && this.search.val().length == 0) return;
	                if (!this.isInterfaceEnabled()) return;
	                if (!this.opened()) {
	                    this.open();
	                }
	            }));

	            this.search.attr("tabindex", this.elementTabIndex);

	            this.keydowns = 0;
	            this.search.on("keydown", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;

	                ++this.keydowns;
	                var selected = selection.find(".select2-search-choice-focus");
	                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
	                var next = selected.next(".select2-search-choice:not(.select2-locked)");
	                var pos = getCursorInfo(this.search);

	                if (selected.length &&
	                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
	                    var selectedChoice = selected;
	                    if (e.which == KEY.LEFT && prev.length) {
	                        selectedChoice = prev;
	                    }
	                    else if (e.which == KEY.RIGHT) {
	                        selectedChoice = next.length ? next : null;
	                    }
	                    else if (e.which === KEY.BACKSPACE) {
	                        if (this.unselect(selected.first())) {
	                            this.search.width(10);
	                            selectedChoice = prev.length ? prev : next;
	                        }
	                    } else if (e.which == KEY.DELETE) {
	                        if (this.unselect(selected.first())) {
	                            this.search.width(10);
	                            selectedChoice = next.length ? next : null;
	                        }
	                    } else if (e.which == KEY.ENTER) {
	                        selectedChoice = null;
	                    }

	                    this.selectChoice(selectedChoice);
	                    killEvent(e);
	                    if (!selectedChoice || !selectedChoice.length) {
	                        this.open();
	                    }
	                    return;
	                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
	                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {

	                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
	                    killEvent(e);
	                    return;
	                } else {
	                    this.selectChoice(null);
	                }

	                if (this.opened()) {
	                    switch (e.which) {
	                    case KEY.UP:
	                    case KEY.DOWN:
	                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
	                        killEvent(e);
	                        return;
	                    case KEY.ENTER:
	                        this.selectHighlighted();
	                        killEvent(e);
	                        return;
	                    case KEY.TAB:
	                        this.selectHighlighted({noFocus:true});
	                        this.close();
	                        return;
	                    case KEY.ESC:
	                        this.cancel(e);
	                        killEvent(e);
	                        return;
	                    }
	                }

	                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
	                 || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
	                    return;
	                }

	                if (e.which === KEY.ENTER) {
	                    if (this.opts.openOnEnter === false) {
	                        return;
	                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
	                        return;
	                    }
	                }

	                this.open();

	                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
	                    // prevent the page from scrolling
	                    killEvent(e);
	                }

	                if (e.which === KEY.ENTER) {
	                    // prevent form from being submitted
	                    killEvent(e);
	                }

	            }));

	            this.search.on("keyup", this.bind(function (e) {
	                this.keydowns = 0;
	                this.resizeSearch();
	            })
	            );

	            this.search.on("blur", this.bind(function(e) {
	                this.container.removeClass("select2-container-active");
	                this.search.removeClass("select2-focused");
	                this.selectChoice(null);
	                if (!this.opened()) this.clearSearch();
	                e.stopImmediatePropagation();
	                this.opts.element.trigger($.Event("select2-blur"));
	            }));

	            this.container.on("click", selector, this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;
	                if ($(e.target).closest(".select2-search-choice").length > 0) {
	                    // clicked inside a select2 search choice, do not open
	                    return;
	                }
	                this.selectChoice(null);
	                this.clearPlaceholder();
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.open();
	                this.focusSearch();
	                e.preventDefault();
	            }));

	            this.container.on("focus", selector, this.bind(function () {
	                if (!this.isInterfaceEnabled()) return;
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.container.addClass("select2-container-active");
	                this.dropdown.addClass("select2-drop-active");
	                this.clearPlaceholder();
	            }));

	            this.initContainerWidth();
	            this.opts.element.hide();

	            // set the placeholder if necessary
	            this.clearSearch();
	        },

	        // multi
	        enableInterface: function() {
	            if (this.parent.enableInterface.apply(this, arguments)) {
	                this.search.prop("disabled", !this.isInterfaceEnabled());
	            }
	        },

	        // multi
	        initSelection: function () {
	            var data;
	            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
	                this.updateSelection([]);
	                this.close();
	                // set the placeholder if necessary
	                this.clearSearch();
	            }
	            if (this.select || this.opts.element.val() !== "") {
	                var self = this;
	                this.opts.initSelection.call(null, this.opts.element, function(data){
	                    if (data !== undefined && data !== null) {
	                        self.updateSelection(data);
	                        self.close();
	                        // set the placeholder if necessary
	                        self.clearSearch();
	                    }
	                });
	            }
	        },

	        // multi
	        clearSearch: function () {
	            var placeholder = this.getPlaceholder(),
	                maxWidth = this.getMaxSearchWidth();

	            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
	                this.search.val(placeholder).addClass("select2-default");
	                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
	                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
	                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
	            } else {
	                this.search.val("").width(10);
	            }
	        },

	        // multi
	        clearPlaceholder: function () {
	            if (this.search.hasClass("select2-default")) {
	                this.search.val("").removeClass("select2-default");
	            }
	        },

	        // multi
	        opening: function () {
	            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
	            this.resizeSearch();

	            this.parent.opening.apply(this, arguments);

	            this.focusSearch();

	            // initializes search's value with nextSearchTerm (if defined by user)
	            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
	            if(this.search.val() === "") {
	                if(this.nextSearchTerm != undefined){
	                    this.search.val(this.nextSearchTerm);
	                    this.search.select();
	                }
	            }

	            this.updateResults(true);
	            if (this.opts.shouldFocusInput(this)) {
	                this.search.focus();
	            }
	            this.opts.element.trigger($.Event("select2-open"));
	        },

	        // multi
	        close: function () {
	            if (!this.opened()) return;
	            this.parent.close.apply(this, arguments);
	        },

	        // multi
	        focus: function () {
	            this.close();
	            this.search.focus();
	        },

	        // multi
	        isFocused: function () {
	            return this.search.hasClass("select2-focused");
	        },

	        // multi
	        updateSelection: function (data) {
	            var ids = [], filtered = [], self = this;

	            // filter out duplicates
	            $(data).each(function () {
	                if (indexOf(self.id(this), ids) < 0) {
	                    ids.push(self.id(this));
	                    filtered.push(this);
	                }
	            });
	            data = filtered;

	            this.selection.find(".select2-search-choice").remove();
	            $(data).each(function () {
	                self.addSelectedChoice(this);
	            });
	            self.postprocessResults();
	        },

	        // multi
	        tokenize: function() {
	            var input = this.search.val();
	            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
	            if (input != null && input != undefined) {
	                this.search.val(input);
	                if (input.length > 0) {
	                    this.open();
	                }
	            }

	        },

	        // multi
	        onSelect: function (data, options) {

	            if (!this.triggerSelect(data) || data.text === "") { return; }

	            this.addSelectedChoice(data);

	            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });

	            // keep track of the search's value before it gets cleared
	            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());

	            this.clearSearch();
	            this.updateResults();

	            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect===true);

	            if (this.opts.closeOnSelect) {
	                this.close();
	                this.search.width(10);
	            } else {
	                if (this.countSelectableResults()>0) {
	                    this.search.width(10);
	                    this.resizeSearch();
	                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
	                        // if we reached max selection size repaint the results so choices
	                        // are replaced with the max selection reached message
	                        this.updateResults(true);
	                    } else {
	                        // initializes search's value with nextSearchTerm and update search result
	                        if(this.nextSearchTerm != undefined){
	                            this.search.val(this.nextSearchTerm);
	                            this.updateResults();
	                            this.search.select();
	                        }
	                    }
	                    this.positionDropdown();
	                } else {
	                    // if nothing left to select close
	                    this.close();
	                    this.search.width(10);
	                }
	            }

	            // since its not possible to select an element that has already been
	            // added we do not need to check if this is a new element before firing change
	            this.triggerChange({ added: data });

	            if (!options || !options.noFocus)
	                this.focusSearch();
	        },

	        // multi
	        cancel: function () {
	            this.close();
	            this.focusSearch();
	        },

	        addSelectedChoice: function (data) {
	            var enableChoice = !data.locked,
	                enabledItem = $(
	                    "<li class='select2-search-choice'>" +
	                    "    <div></div>" +
	                    "    <a href='#' class='select2-search-choice-close' tabindex='-1'></a>" +
	                    "</li>"),
	                disabledItem = $(
	                    "<li class='select2-search-choice select2-locked'>" +
	                    "<div></div>" +
	                    "</li>");
	            var choice = enableChoice ? enabledItem : disabledItem,
	                id = this.id(data),
	                val = this.getVal(),
	                formatted,
	                cssClass;

	            formatted=this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
	            if (formatted != undefined) {
	                choice.find("div").replaceWith($("<div></div>").html(formatted));
	            }
	            cssClass=this.opts.formatSelectionCssClass(data, choice.find("div"));
	            if (cssClass != undefined) {
	                choice.addClass(cssClass);
	            }

	            if(enableChoice){
	              choice.find(".select2-search-choice-close")
	                  .on("mousedown", killEvent)
	                  .on("click dblclick", this.bind(function (e) {
	                  if (!this.isInterfaceEnabled()) return;

	                  this.unselect($(e.target));
	                  this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
	                  killEvent(e);
	                  this.close();
	                  this.focusSearch();
	              })).on("focus", this.bind(function () {
	                  if (!this.isInterfaceEnabled()) return;
	                  this.container.addClass("select2-container-active");
	                  this.dropdown.addClass("select2-drop-active");
	              }));
	            }

	            choice.data("select2-data", data);
	            choice.insertBefore(this.searchContainer);

	            val.push(id);
	            this.setVal(val);
	        },

	        // multi
	        unselect: function (selected) {
	            var val = this.getVal(),
	                data,
	                index;
	            selected = selected.closest(".select2-search-choice");

	            if (selected.length === 0) {
	                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
	            }

	            data = selected.data("select2-data");

	            if (!data) {
	                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
	                // and invoked on an element already removed
	                return;
	            }

	            var evt = $.Event("select2-removing");
	            evt.val = this.id(data);
	            evt.choice = data;
	            this.opts.element.trigger(evt);

	            if (evt.isDefaultPrevented()) {
	                return false;
	            }

	            while((index = indexOf(this.id(data), val)) >= 0) {
	                val.splice(index, 1);
	                this.setVal(val);
	                if (this.select) this.postprocessResults();
	            }

	            selected.remove();

	            this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
	            this.triggerChange({ removed: data });

	            return true;
	        },

	        // multi
	        postprocessResults: function (data, initial, noHighlightUpdate) {
	            var val = this.getVal(),
	                choices = this.results.find(".select2-result"),
	                compound = this.results.find(".select2-result-with-children"),
	                self = this;

	            choices.each2(function (i, choice) {
	                var id = self.id(choice.data("select2-data"));
	                if (indexOf(id, val) >= 0) {
	                    choice.addClass("select2-selected");
	                    // mark all children of the selected parent as selected
	                    choice.find(".select2-result-selectable").addClass("select2-selected");
	                }
	            });

	            compound.each2(function(i, choice) {
	                // hide an optgroup if it doesn't have any selectable children
	                if (!choice.is('.select2-result-selectable')
	                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
	                    choice.addClass("select2-selected");
	                }
	            });

	            if (this.highlight() == -1 && noHighlightUpdate !== false && this.opts.closeOnSelect === true){
	                self.highlight(0);
	            }

	            //If all results are chosen render formatNoMatches
	            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
	                if(!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
	                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
	                        this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.opts.element, self.search.val()) + "</li>");
	                    }
	                }
	            }

	        },

	        // multi
	        getMaxSearchWidth: function() {
	            return this.selection.width() - getSideBorderPadding(this.search);
	        },

	        // multi
	        resizeSearch: function () {
	            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
	                sideBorderPadding = getSideBorderPadding(this.search);

	            minimumWidth = measureTextWidth(this.search) + 10;

	            left = this.search.offset().left;

	            maxWidth = this.selection.width();
	            containerLeft = this.selection.offset().left;

	            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;

	            if (searchWidth < minimumWidth) {
	                searchWidth = maxWidth - sideBorderPadding;
	            }

	            if (searchWidth < 40) {
	                searchWidth = maxWidth - sideBorderPadding;
	            }

	            if (searchWidth <= 0) {
	              searchWidth = minimumWidth;
	            }

	            this.search.width(Math.floor(searchWidth));
	        },

	        // multi
	        getVal: function () {
	            var val;
	            if (this.select) {
	                val = this.select.val();
	                return val === null ? [] : val;
	            } else {
	                val = this.opts.element.val();
	                return splitVal(val, this.opts.separator, this.opts.transformVal);
	            }
	        },

	        // multi
	        setVal: function (val) {
	            var unique;
	            if (this.select) {
	                this.select.val(val);
	            } else {
	                unique = [];
	                // filter out duplicates
	                $(val).each(function () {
	                    if (indexOf(this, unique) < 0) unique.push(this);
	                });
	                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
	            }
	        },

	        // multi
	        buildChangeDetails: function (old, current) {
	            var current = current.slice(0),
	                old = old.slice(0);

	            // remove intersection from each array
	            for (var i = 0; i < current.length; i++) {
	                for (var j = 0; j < old.length; j++) {
	                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
	                        current.splice(i, 1);
	                        if(i>0){
	                            i--;
	                        }
	                        old.splice(j, 1);
	                        j--;
	                    }
	                }
	            }

	            return {added: current, removed: old};
	        },


	        // multi
	        val: function (val, triggerChange) {
	            var oldData, self=this;

	            if (arguments.length === 0) {
	                return this.getVal();
	            }

	            oldData=this.data();
	            if (!oldData.length) oldData=[];

	            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
	            if (!val && val !== 0) {
	                this.opts.element.val("");
	                this.updateSelection([]);
	                this.clearSearch();
	                if (triggerChange) {
	                    this.triggerChange({added: this.data(), removed: oldData});
	                }
	                return;
	            }

	            // val is a list of ids
	            this.setVal(val);

	            if (this.select) {
	                this.opts.initSelection(this.select, this.bind(this.updateSelection));
	                if (triggerChange) {
	                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
	                }
	            } else {
	                if (this.opts.initSelection === undefined) {
	                    throw new Error("val() cannot be called if initSelection() is not defined");
	                }

	                this.opts.initSelection(this.opts.element, function(data){
	                    var ids=$.map(data, self.id);
	                    self.setVal(ids);
	                    self.updateSelection(data);
	                    self.clearSearch();
	                    if (triggerChange) {
	                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
	                    }
	                });
	            }
	            this.clearSearch();
	        },

	        // multi
	        onSortStart: function() {
	            if (this.select) {
	                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
	            }

	            // collapse search field into 0 width so its container can be collapsed as well
	            this.search.width(0);
	            // hide the container
	            this.searchContainer.hide();
	        },

	        // multi
	        onSortEnd:function() {

	            var val=[], self=this;

	            // show search and move it to the end of the list
	            this.searchContainer.show();
	            // make sure the search container is the last item in the list
	            this.searchContainer.appendTo(this.searchContainer.parent());
	            // since we collapsed the width in dragStarted, we resize it here
	            this.resizeSearch();

	            // update selection
	            this.selection.find(".select2-search-choice").each(function() {
	                val.push(self.opts.id($(this).data("select2-data")));
	            });
	            this.setVal(val);
	            this.triggerChange();
	        },

	        // multi
	        data: function(values, triggerChange) {
	            var self=this, ids, old;
	            if (arguments.length === 0) {
	                 return this.selection
	                     .children(".select2-search-choice")
	                     .map(function() { return $(this).data("select2-data"); })
	                     .get();
	            } else {
	                old = this.data();
	                if (!values) { values = []; }
	                ids = $.map(values, function(e) { return self.opts.id(e); });
	                this.setVal(ids);
	                this.updateSelection(values);
	                this.clearSearch();
	                if (triggerChange) {
	                    this.triggerChange(this.buildChangeDetails(old, this.data()));
	                }
	            }
	        }
	    });

	    $.fn.select2 = function () {

	        var args = Array.prototype.slice.call(arguments, 0),
	            opts,
	            select2,
	            method, value, multiple,
	            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
	            valueMethods = ["opened", "isFocused", "container", "dropdown"],
	            propertyMethods = ["val", "data"],
	            methodsMap = { search: "externalSearch" };

	        this.each(function () {
	            if (args.length === 0 || typeof(args[0]) === "object") {
	                opts = args.length === 0 ? {} : $.extend({}, args[0]);
	                opts.element = $(this);

	                if (opts.element.get(0).tagName.toLowerCase() === "select") {
	                    multiple = opts.element.prop("multiple");
	                } else {
	                    multiple = opts.multiple || false;
	                    if ("tags" in opts) {opts.multiple = multiple = true;}
	                }

	                select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
	                select2.init(opts);
	            } else if (typeof(args[0]) === "string") {

	                if (indexOf(args[0], allowedMethods) < 0) {
	                    throw "Unknown method: " + args[0];
	                }

	                value = undefined;
	                select2 = $(this).data("select2");
	                if (select2 === undefined) return;

	                method=args[0];

	                if (method === "container") {
	                    value = select2.container;
	                } else if (method === "dropdown") {
	                    value = select2.dropdown;
	                } else {
	                    if (methodsMap[method]) method = methodsMap[method];

	                    value = select2[method].apply(select2, args.slice(1));
	                }
	                if (indexOf(args[0], valueMethods) >= 0
	                    || (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
	                    return false; // abort the iteration, ready to return first matched value
	                }
	            } else {
	                throw "Invalid arguments to select2 plugin: " + args;
	            }
	        });
	        return (value === undefined) ? this : value;
	    };

	    // plugin defaults, accessible to users
	    $.fn.select2.defaults = {
	        width: "copy",
	        loadMorePadding: 0,
	        closeOnSelect: true,
	        openOnEnter: true,
	        containerCss: {},
	        dropdownCss: {},
	        containerCssClass: "",
	        dropdownCssClass: "",
	        formatResult: function(result, container, query, escapeMarkup) {
	            var markup=[];
	            markMatch(this.text(result), query.term, markup, escapeMarkup);
	            return markup.join("");
	        },
	        transformVal: function(val) {
	            return $.trim(val);
	        },
	        formatSelection: function (data, container, escapeMarkup) {
	            return data ? escapeMarkup(this.text(data)) : undefined;
	        },
	        sortResults: function (results, container, query) {
	            return results;
	        },
	        formatResultCssClass: function(data) {return data.css;},
	        formatSelectionCssClass: function(data, container) {return undefined;},
	        minimumResultsForSearch: 0,
	        minimumInputLength: 0,
	        maximumInputLength: null,
	        maximumSelectionSize: 0,
	        id: function (e) { return e == undefined ? null : e.id; },
	        text: function (e) {
	          if (e && this.data && this.data.text) {
	            if ($.isFunction(this.data.text)) {
	              return this.data.text(e);
	            } else {
	              return e[this.data.text];
	            }
	          } else {
	            return e.text;
	          }
	        },
	        matcher: function(term, text) {
	            return stripDiacritics(''+text).toUpperCase().indexOf(stripDiacritics(''+term).toUpperCase()) >= 0;
	        },
	        separator: ",",
	        tokenSeparators: [],
	        tokenizer: defaultTokenizer,
	        escapeMarkup: defaultEscapeMarkup,
	        blurOnChange: false,
	        selectOnBlur: false,
	        adaptContainerCssClass: function(c) { return c; },
	        adaptDropdownCssClass: function(c) { return null; },
	        nextSearchTerm: function(selectedObject, currentSearchTerm) { return undefined; },
	        searchInputPlaceholder: '',
	        createSearchChoicePosition: 'top',
	        shouldFocusInput: function (instance) {
	            // Attempt to detect touch devices
	            var supportsTouchEvents = (('ontouchstart' in window) ||
	                                       (navigator.msMaxTouchPoints > 0));

	            // Only devices which support touch events should be special cased
	            if (!supportsTouchEvents) {
	                return true;
	            }

	            // Never focus the input if search is disabled
	            if (instance.opts.minimumResultsForSearch < 0) {
	                return false;
	            }

	            return true;
	        }
	    };

	    $.fn.select2.locales = [];

	    $.fn.select2.locales['en'] = {
	         formatMatches: function (matches) { if (matches === 1) { return "One result is available, press enter to select it."; } return matches + " results are available, use up and down arrow keys to navigate."; },
	         formatNoMatches: function () { return "No matches found"; },
	         formatAjaxError: function (jqXHR, textStatus, errorThrown) { return "Loading failed"; },
	         formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " or more character" + (n == 1 ? "" : "s"); },
	         formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1 ? "" : "s"); },
	         formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
	         formatLoadMore: function (pageNumber) { return "Loading more results…"; },
	         formatSearching: function () { return "Searching…"; }
	    };

	    $.extend($.fn.select2.defaults, $.fn.select2.locales['en']);

	    $.fn.select2.ajaxDefaults = {
	        transport: $.ajax,
	        params: {
	            type: "GET",
	            cache: false,
	            dataType: "json"
	        }
	    };

	    // exports
	    window.Select2 = {
	        query: {
	            ajax: ajax,
	            local: local,
	            tags: tags
	        }, util: {
	            debounce: debounce,
	            markMatch: markMatch,
	            escapeMarkup: defaultEscapeMarkup,
	            stripDiacritics: stripDiacritics
	        }, "class": {
	            "abstract": AbstractSelect2,
	            "single": SingleSelect2,
	            "multi": MultiSelect2
	        }
	    };

	}(jQuery));


/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/*** IMPORTS FROM imports-loader ***/
	var require = false;

	/**
	 * Super simple wysiwyg editor on Bootstrap v0.5.10
	 * http://hackerwins.github.io/summernote/
	 *
	 * summernote.js
	 * Copyright 2013-2014 Alan Hong. and other contributors
	 * summernote may be freely distributed under the MIT license./
	 *
	 * Date: 2014-10-03T06:12Z
	 */
	(function (factory) {
	  /* global define */
	  if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define(['jquery'], factory);
	  } else {
	    // Browser globals: jQuery
	    factory(window.jQuery);
	  }
	}(function ($) {
	  


	  if ('function' !== typeof Array.prototype.reduce) {
	    /**
	     * Array.prototype.reduce fallback
	     *
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	     */
	    Array.prototype.reduce = function (callback, optInitialValue) {
	      var idx, value, length = this.length >>> 0, isValueSet = false;
	      if (1 < arguments.length) {
	        value = optInitialValue;
	        isValueSet = true;
	      }
	      for (idx = 0; length > idx; ++idx) {
	        if (this.hasOwnProperty(idx)) {
	          if (isValueSet) {
	            value = callback(value, this[idx], idx, this);
	          } else {
	            value = this[idx];
	            isValueSet = true;
	          }
	        }
	      }
	      if (!isValueSet) {
	        throw new TypeError('Reduce of empty array with no initial value');
	      }
	      return value;
	    };
	  }

	  if ('function' !== typeof Array.prototype.filter) {
	    Array.prototype.filter = function (fun/*, thisArg*/) {
	      if (this === void 0 || this === null) {
	        throw new TypeError();
	      }
	  
	      var t = Object(this);
	      var len = t.length >>> 0;
	      if (typeof fun !== 'function') {
	        throw new TypeError();
	      }
	  
	      var res = [];
	      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
	      for (var i = 0; i < len; i++) {
	        if (i in t) {
	          var val = t[i];
	          if (fun.call(thisArg, val, i, t)) {
	            res.push(val);
	          }
	        }
	      }
	  
	      return res;
	    };
	  }

	  var isSupportAmd = typeof define === 'function' && define.amd;

	  /**
	   * returns whether font is installed or not.
	   * @param {String} fontName
	   * @return {Boolean}
	   */
	  var isFontInstalled = function (fontName) {
	    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
	    var $tester = $('<div>').css({
	      position: 'absolute',
	      left: '-9999px',
	      top: '-9999px',
	      fontSize: '200px'
	    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);

	    var originalWidth = $tester.css('fontFamily', testFontName).width();
	    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();

	    $tester.remove();

	    return originalWidth !== width;
	  };

	  /**
	   * Object which check platform and agent
	   */
	  var agent = {
	    isMac: navigator.appVersion.indexOf('Mac') > -1,
	    isMSIE: navigator.userAgent.indexOf('MSIE') > -1 || navigator.userAgent.indexOf('Trident') > -1,
	    isFF: navigator.userAgent.indexOf('Firefox') > -1,
	    jqueryVersion: parseFloat($.fn.jquery),
	    isSupportAmd: isSupportAmd,
	    hasCodeMirror: isSupportAmd ? require.specified('CodeMirror') : !!window.CodeMirror,
	    isFontInstalled: isFontInstalled,
	    isW3CRangeSupport: !!document.createRange
	  };

	  /**
	   * func utils (for high-order func's arg)
	   */
	  var func = (function () {
	    var eq = function (itemA) {
	      return function (itemB) {
	        return itemA === itemB;
	      };
	    };

	    var eq2 = function (itemA, itemB) {
	      return itemA === itemB;
	    };

	    var peq2 = function (propName) {
	      return function (itemA, itemB) {
	        return itemA[propName] === itemB[propName];
	      };
	    };

	    var ok = function () {
	      return true;
	    };

	    var fail = function () {
	      return false;
	    };

	    var not = function (f) {
	      return function () {
	        return !f.apply(f, arguments);
	      };
	    };

	    var and = function (fA, fB) {
	      return function (item) {
	        return fA(item) && fB(item);
	      };
	    };

	    var self = function (a) {
	      return a;
	    };

	    var idCounter = 0;

	    /**
	     * generate a globally-unique id
	     *
	     * @param {String} [prefix]
	     */
	    var uniqueId = function (prefix) {
	      var id = ++idCounter + '';
	      return prefix ? prefix + id : id;
	    };

	    /**
	     * returns bnd (bounds) from rect
	     *
	     * - IE Compatability Issue: http://goo.gl/sRLOAo
	     * - Scroll Issue: http://goo.gl/sNjUc
	     *
	     * @param {Rect} rect
	     * @return {Object} bounds
	     * @return {Number} bounds.top
	     * @return {Number} bounds.left
	     * @return {Number} bounds.width
	     * @return {Number} bounds.height
	     */
	    var rect2bnd = function (rect) {
	      var $document = $(document);
	      return {
	        top: rect.top + $document.scrollTop(),
	        left: rect.left + $document.scrollLeft(),
	        width: rect.right - rect.left,
	        height: rect.bottom - rect.top
	      };
	    };

	    /**
	     * returns a copy of the object where the keys have become the values and the values the keys.
	     * @param {Object} obj
	     * @return {Object}
	     */
	    var invertObject = function (obj) {
	      var inverted = {};
	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          inverted[obj[key]] = key;
	        }
	      }
	      return inverted;
	    };

	    return {
	      eq: eq,
	      eq2: eq2,
	      peq2: peq2,
	      ok: ok,
	      fail: fail,
	      self: self,
	      not: not,
	      and: and,
	      uniqueId: uniqueId,
	      rect2bnd: rect2bnd,
	      invertObject: invertObject
	    };
	  })();

	  /**
	   * list utils
	   */
	  var list = (function () {
	    /**
	     * returns the first item of an array.
	     *
	     * @param {Array} array
	     */
	    var head = function (array) {
	      return array[0];
	    };

	    /**
	     * returns the last item of an array.
	     *
	     * @param {Array} array
	     */
	    var last = function (array) {
	      return array[array.length - 1];
	    };

	    /**
	     * returns everything but the last entry of the array.
	     *
	     * @param {Array} array
	     */
	    var initial = function (array) {
	      return array.slice(0, array.length - 1);
	    };

	    /**
	     * returns the rest of the items in an array.
	     *
	     * @param {Array} array
	     */
	    var tail = function (array) {
	      return array.slice(1);
	    };

	    /**
	     * returns item of array
	     */
	    var find = function (array, pred) {
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        var item = array[idx];
	        if (pred(item)) {
	          return item;
	        }
	      }
	    };

	    /**
	     * returns true if all of the values in the array pass the predicate truth test.
	     */
	    var all = function (array, pred) {
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (!pred(array[idx])) {
	          return false;
	        }
	      }
	      return true;
	    };

	    /**
	     * returns true if the value is present in the list.
	     */
	    var contains = function (array, item) {
	      return $.inArray(item, array) !== -1;
	    };

	    /**
	     * get sum from a list
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - iterator
	     */
	    var sum = function (array, fn) {
	      fn = fn || func.self;
	      return array.reduce(function (memo, v) {
	        return memo + fn(v);
	      }, 0);
	    };
	  
	    /**
	     * returns a copy of the collection with array type.
	     * @param {Collection} collection - collection eg) node.childNodes, ...
	     */
	    var from = function (collection) {
	      var result = [], idx = -1, length = collection.length;
	      while (++idx < length) {
	        result[idx] = collection[idx];
	      }
	      return result;
	    };
	  
	    /**
	     * cluster elements by predicate function.
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - predicate function for cluster rule
	     * @param {Array[]}
	     */
	    var clusterBy = function (array, fn) {
	      if (!array.length) { return []; }
	      var aTail = tail(array);
	      return aTail.reduce(function (memo, v) {
	        var aLast = last(memo);
	        if (fn(last(aLast), v)) {
	          aLast[aLast.length] = v;
	        } else {
	          memo[memo.length] = [v];
	        }
	        return memo;
	      }, [[head(array)]]);
	    };
	  
	    /**
	     * returns a copy of the array with all falsy values removed
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - predicate function for cluster rule
	     */
	    var compact = function (array) {
	      var aResult = [];
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (array[idx]) { aResult.push(array[idx]); }
	      }
	      return aResult;
	    };

	    /**
	     * produces a duplicate-free version of the array
	     *
	     * @param {Array} array
	     */
	    var unique = function (array) {
	      var results = [];

	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (!contains(results, array[idx])) {
	          results.push(array[idx]);
	        }
	      }

	      return results;
	    };
	  
	    return { head: head, last: last, initial: initial, tail: tail,
	             find: find, contains: contains,
	             all: all, sum: sum, from: from,
	             clusterBy: clusterBy, compact: compact, unique: unique };
	  })();


	  var NBSP_CHAR = String.fromCharCode(160);
	  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';

	  /**
	   * Dom functions
	   */
	  var dom = (function () {
	    /**
	     * returns whether node is `note-editable` or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isEditable = function (node) {
	      return node && $(node).hasClass('note-editable');
	    };

	    /**
	     * returns whether node is `note-control-sizing` or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isControlSizing = function (node) {
	      return node && $(node).hasClass('note-control-sizing');
	    };

	    /**
	     * build layoutInfo from $editor(.note-editor)
	     *
	     * @param {jQuery} $editor
	     * @return {Object}
	     */
	    var buildLayoutInfo = function ($editor) {
	      var makeFinder;

	      // air mode
	      if ($editor.hasClass('note-air-editor')) {
	        var id = list.last($editor.attr('id').split('-'));
	        makeFinder = function (sIdPrefix) {
	          return function () { return $(sIdPrefix + id); };
	        };

	        return {
	          editor: function () { return $editor; },
	          editable: function () { return $editor; },
	          popover: makeFinder('#note-popover-'),
	          handle: makeFinder('#note-handle-'),
	          dialog: makeFinder('#note-dialog-')
	        };

	        // frame mode
	      } else {
	        makeFinder = function (sClassName) {
	          return function () { return $editor.find(sClassName); };
	        };
	        return {
	          editor: function () { return $editor; },
	          dropzone: makeFinder('.note-dropzone'),
	          toolbar: makeFinder('.note-toolbar'),
	          editable: makeFinder('.note-editable'),
	          codable: makeFinder('.note-codable'),
	          statusbar: makeFinder('.note-statusbar'),
	          popover: makeFinder('.note-popover'),
	          handle: makeFinder('.note-handle'),
	          dialog: makeFinder('.note-dialog')
	        };
	      }
	    };

	    /**
	     * returns predicate which judge whether nodeName is same
	     *
	     * @param {String} nodeName
	     * @return {String}
	     */
	    var makePredByNodeName = function (nodeName) {
	      nodeName = nodeName.toUpperCase();
	      return function (node) {
	        return node && node.nodeName.toUpperCase() === nodeName;
	      };
	    };

	    var isText = function (node) {
	      return node && node.nodeType === 3;
	    };

	    /**
	     * ex) br, col, embed, hr, img, input, ...
	     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
	     */
	    var isVoid = function (node) {
	      return node && /^BR|^IMG|^HR/.test(node.nodeName.toUpperCase());
	    };

	    var isPara = function (node) {
	      if (isEditable(node)) {
	        return false;
	      }

	      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
	      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
	    };

	    var isLi = makePredByNodeName('LI');

	    var isPurePara = function (node) {
	      return isPara(node) && !isLi(node);
	    };

	    var isInline = function (node) {
	      return !isBodyContainer(node) && !isList(node) && !isPara(node);
	    };

	    var isList = function (node) {
	      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
	    };

	    var isCell = function (node) {
	      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
	    };

	    var isBlockquote = makePredByNodeName('BLOCKQUOTE');

	    var isBodyContainer = function (node) {
	      return isCell(node) || isBlockquote(node) || isEditable(node);
	    };

	    var isAnchor = makePredByNodeName('A');

	    var isParaInline = function (node) {
	      return isInline(node) && !!ancestor(node, isPara);
	    };

	    var isBodyInline = function (node) {
	      return isInline(node) && !ancestor(node, isPara);
	    };

	    var isBody = makePredByNodeName('BODY');

	    /**
	     * blank HTML for cursor position
	     */
	    var blankHTML = agent.isMSIE ? '&nbsp;' : '<br>';

	    /**
	     * returns #text's text size or element's childNodes size
	     *
	     * @param {Node} node
	     */
	    var nodeLength = function (node) {
	      if (isText(node)) {
	        return node.nodeValue.length;
	      }

	      return node.childNodes.length;
	    };

	    /**
	     * returns whether node is empty or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isEmpty = function (node) {
	      var len = nodeLength(node);

	      if (len === 0) {
	        return true;
	      } else if (!dom.isText(node) && len === 1 && node.innerHTML === blankHTML) {
	        // ex) <p><br></p>, <span><br></span>
	        return true;
	      }

	      return false;
	    };

	    /**
	     * padding blankHTML if node is empty (for cursor position)
	     */
	    var paddingBlankHTML = function (node) {
	      if (!isVoid(node) && !nodeLength(node)) {
	        node.innerHTML = blankHTML;
	      }
	    };

	    /**
	     * find nearest ancestor predicate hit
	     *
	     * @param {Node} node
	     * @param {Function} pred - predicate function
	     */
	    var ancestor = function (node, pred) {
	      while (node) {
	        if (pred(node)) { return node; }
	        if (isEditable(node)) { break; }

	        node = node.parentNode;
	      }
	      return null;
	    };

	    /**
	     * returns new array of ancestor nodes (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [optional] pred - predicate function
	     */
	    var listAncestor = function (node, pred) {
	      pred = pred || func.fail;

	      var ancestors = [];
	      ancestor(node, function (el) {
	        if (!isEditable(el)) {
	          ancestors.push(el);
	        }

	        return pred(el);
	      });
	      return ancestors;
	    };

	    /**
	     * find farthest ancestor predicate hit
	     */
	    var lastAncestor = function (node, pred) {
	      var ancestors = listAncestor(node);
	      return list.last(ancestors.filter(pred));
	    };

	    /**
	     * returns common ancestor node between two nodes.
	     *
	     * @param {Node} nodeA
	     * @param {Node} nodeB
	     */
	    var commonAncestor = function (nodeA, nodeB) {
	      var ancestors = listAncestor(nodeA);
	      for (var n = nodeB; n; n = n.parentNode) {
	        if ($.inArray(n, ancestors) > -1) { return n; }
	      }
	      return null; // difference document area
	    };

	    /**
	     * listing all previous siblings (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [optional] pred - predicate function
	     */
	    var listPrev = function (node, pred) {
	      pred = pred || func.fail;

	      var nodes = [];
	      while (node) {
	        if (pred(node)) { break; }
	        nodes.push(node);
	        node = node.previousSibling;
	      }
	      return nodes;
	    };

	    /**
	     * listing next siblings (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [pred] - predicate function
	     */
	    var listNext = function (node, pred) {
	      pred = pred || func.fail;

	      var nodes = [];
	      while (node) {
	        if (pred(node)) { break; }
	        nodes.push(node);
	        node = node.nextSibling;
	      }
	      return nodes;
	    };

	    /**
	     * listing descendant nodes
	     *
	     * @param {Node} node
	     * @param {Function} [pred] - predicate function
	     */
	    var listDescendant = function (node, pred) {
	      var descendents = [];
	      pred = pred || func.ok;

	      // start DFS(depth first search) with node
	      (function fnWalk(current) {
	        if (node !== current && pred(current)) {
	          descendents.push(current);
	        }
	        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
	          fnWalk(current.childNodes[idx]);
	        }
	      })(node);

	      return descendents;
	    };

	    /**
	     * wrap node with new tag.
	     *
	     * @param {Node} node
	     * @param {Node} tagName of wrapper
	     * @return {Node} - wrapper
	     */
	    var wrap = function (node, wrapperName) {
	      var parent = node.parentNode;
	      var wrapper = $('<' + wrapperName + '>')[0];

	      parent.insertBefore(wrapper, node);
	      wrapper.appendChild(node);

	      return wrapper;
	    };

	    /**
	     * insert node after preceding
	     *
	     * @param {Node} node
	     * @param {Node} preceding - predicate function
	     */
	    var insertAfter = function (node, preceding) {
	      var next = preceding.nextSibling, parent = preceding.parentNode;
	      if (next) {
	        parent.insertBefore(node, next);
	      } else {
	        parent.appendChild(node);
	      }
	      return node;
	    };

	    /**
	     * append elements.
	     *
	     * @param {Node} node
	     * @param {Collection} aChild
	     */
	    var appendChildNodes = function (node, aChild) {
	      $.each(aChild, function (idx, child) {
	        node.appendChild(child);
	      });
	      return node;
	    };

	    /**
	     * returns whether boundaryPoint is left edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isLeftEdgePoint = function (point) {
	      return point.offset === 0;
	    };

	    /**
	     * returns whether boundaryPoint is right edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isRightEdgePoint = function (point) {
	      return point.offset === nodeLength(point.node);
	    };

	    /**
	     * returns whether boundaryPoint is edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isEdgePoint = function (point) {
	      return isLeftEdgePoint(point) || isRightEdgePoint(point);
	    };

	    /**
	     * returns wheter node is left edge of ancestor or not.
	     *
	     * @param {Node} node
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isLeftEdgeOf = function (node, ancestor) {
	      while (node && node !== ancestor) {
	        if (position(node) !== 0) {
	          return false;
	        }
	        node = node.parentNode;
	      }

	      return true;
	    };

	    /**
	     * returns whether node is right edge of ancestor or not.
	     *
	     * @param {Node} node
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isRightEdgeOf = function (node, ancestor) {
	      while (node && node !== ancestor) {
	        if (position(node) !== nodeLength(node.parentNode) - 1) {
	          return false;
	        }
	        node = node.parentNode;
	      }

	      return true;
	    };

	    /**
	     * returns offset from parent.
	     *
	     * @param {Node} node
	     */
	    var position = function (node) {
	      var offset = 0;
	      while ((node = node.previousSibling)) {
	        offset += 1;
	      }
	      return offset;
	    };

	    var hasChildren = function (node) {
	      return !!(node && node.childNodes && node.childNodes.length);
	    };

	    /**
	     * returns previous boundaryPoint
	     *
	     * @param {BoundaryPoint} point
	     * @param {Boolean} isSkipInnerOffset
	     * @return {BoundaryPoint}
	     */
	    var prevPoint = function (point, isSkipInnerOffset) {
	      var node, offset;

	      if (point.offset === 0) {
	        if (isEditable(point.node)) {
	          return null;
	        }

	        node = point.node.parentNode;
	        offset = position(point.node);
	      } else if (hasChildren(point.node)) {
	        node = point.node.childNodes[point.offset - 1];
	        offset = nodeLength(node);
	      } else {
	        node = point.node;
	        offset = isSkipInnerOffset ? 0 : point.offset - 1;
	      }

	      return {
	        node: node,
	        offset: offset
	      };
	    };

	    /**
	     * returns next boundaryPoint
	     *
	     * @param {BoundaryPoint} point
	     * @param {Boolean} isSkipInnerOffset
	     * @return {BoundaryPoint}
	     */
	    var nextPoint = function (point, isSkipInnerOffset) {
	      var node, offset;

	      if (nodeLength(point.node) === point.offset) {
	        if (isEditable(point.node)) {
	          return null;
	        }

	        node = point.node.parentNode;
	        offset = position(point.node) + 1;
	      } else if (hasChildren(point.node)) {
	        node = point.node.childNodes[point.offset];
	        offset = 0;
	      } else {
	        node = point.node;
	        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
	      }

	      return {
	        node: node,
	        offset: offset
	      };
	    };

	    /**
	     * returns whether pointA and pointB is same or not.
	     *
	     * @param {BoundaryPoint} pointA
	     * @param {BoundaryPoint} pointB
	     * @return {Boolean}
	     */
	    var isSamePoint = function (pointA, pointB) {
	      return pointA.node === pointB.node && pointA.offset === pointB.offset;
	    };

	    /**
	     * returns whether point is visible (can set cursor) or not.
	     * 
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isVisiblePoint = function (point) {
	      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
	        return true;
	      }

	      var leftNode = point.node.childNodes[point.offset - 1];
	      var rightNode = point.node.childNodes[point.offset];
	      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
	        return true;
	      }

	      return false;
	    };

	    /**
	     * @param {BoundaryPoint} point
	     * @param {Function} pred
	     * @return {BoundaryPoint}
	     */
	    var prevPointUntil = function (point, pred) {
	      while (point) {
	        if (pred(point)) {
	          return point;
	        }

	        point = prevPoint(point);
	      }

	      return null;
	    };

	    /**
	     * @param {BoundaryPoint} point
	     * @param {Function} pred
	     * @return {BoundaryPoint}
	     */
	    var nextPointUntil = function (point, pred) {
	      while (point) {
	        if (pred(point)) {
	          return point;
	        }

	        point = nextPoint(point);
	      }

	      return null;
	    };

	    /**
	     * @param {BoundaryPoint} startPoint
	     * @param {BoundaryPoint} endPoint
	     * @param {Function} handler
	     * @param {Boolean} isSkipInnerOffset
	     */
	    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {
	      var point = startPoint;

	      while (point) {
	        handler(point);

	        if (isSamePoint(point, endPoint)) {
	          break;
	        }

	        var isSkipOffset = isSkipInnerOffset &&
	                           startPoint.node !== point.node &&
	                           endPoint.node !== point.node;
	        point = nextPoint(point, isSkipOffset);
	      }
	    };

	    /**
	     * return offsetPath(array of offset) from ancestor
	     *
	     * @param {Node} ancestor - ancestor node
	     * @param {Node} node
	     */
	    var makeOffsetPath = function (ancestor, node) {
	      var ancestors = listAncestor(node, func.eq(ancestor));
	      return $.map(ancestors, position).reverse();
	    };

	    /**
	     * return element from offsetPath(array of offset)
	     *
	     * @param {Node} ancestor - ancestor node
	     * @param {array} aOffset - offsetPath
	     */
	    var fromOffsetPath = function (ancestor, aOffset) {
	      var current = ancestor;
	      for (var i = 0, len = aOffset.length; i < len; i++) {
	        if (current.childNodes.length <= aOffset[i]) {
	          current = current.childNodes[current.childNodes.length - 1];
	        } else {
	          current = current.childNodes[aOffset[i]];
	        }
	      }
	      return current;
	    };

	    /**
	     * split element or #text
	     *
	     * @param {BoundaryPoint} point
	     * @param {Boolean} [isSkipPaddingBlankHTML]
	     * @return {Node} right node of boundaryPoint
	     */
	    var splitNode = function (point, isSkipPaddingBlankHTML) {
	      // split #text
	      if (isText(point.node)) {
	        // edge case
	        if (isLeftEdgePoint(point)) {
	          return point.node;
	        } else if (isRightEdgePoint(point)) {
	          return point.node.nextSibling;
	        }

	        return point.node.splitText(point.offset);
	      }

	      // split element
	      var childNode = point.node.childNodes[point.offset];
	      var clone = insertAfter(point.node.cloneNode(false), point.node);
	      appendChildNodes(clone, listNext(childNode));

	      if (!isSkipPaddingBlankHTML) {
	        paddingBlankHTML(point.node);
	        paddingBlankHTML(clone);
	      }

	      return clone;
	    };

	    /**
	     * split tree by point
	     *
	     * @param {Node} root - split root
	     * @param {BoundaryPoint} point
	     * @param {Boolean} [isSkipPaddingBlankHTML]
	     * @return {Node} right node of boundaryPoint
	     */
	    var splitTree = function (root, point, isSkipPaddingBlankHTML) {
	      // ex) [#text, <span>, <p>]
	      var ancestors = listAncestor(point.node, func.eq(root));

	      if (!ancestors.length) {
	        return null;
	      } else if (ancestors.length === 1) {
	        return splitNode(point, isSkipPaddingBlankHTML);
	      }

	      return ancestors.reduce(function (node, parent) {
	        var clone = insertAfter(parent.cloneNode(false), parent);

	        if (node === point.node) {
	          node = splitNode(point, isSkipPaddingBlankHTML);
	        }

	        appendChildNodes(clone, listNext(node));

	        if (!isSkipPaddingBlankHTML) {
	          paddingBlankHTML(parent);
	          paddingBlankHTML(clone);
	        }
	        return clone;
	      });
	    };

	    var create = function (nodeName) {
	      return document.createElement(nodeName);
	    };

	    var createText = function (text) {
	      return document.createTextNode(text);
	    };

	    /**
	     * remove node, (isRemoveChild: remove child or not)
	     * @param {Node} node
	     * @param {Boolean} isRemoveChild
	     */
	    var remove = function (node, isRemoveChild) {
	      if (!node || !node.parentNode) { return; }
	      if (node.removeNode) { return node.removeNode(isRemoveChild); }

	      var parent = node.parentNode;
	      if (!isRemoveChild) {
	        var nodes = [];
	        var i, len;
	        for (i = 0, len = node.childNodes.length; i < len; i++) {
	          nodes.push(node.childNodes[i]);
	        }

	        for (i = 0, len = nodes.length; i < len; i++) {
	          parent.insertBefore(nodes[i], node);
	        }
	      }

	      parent.removeChild(node);
	    };

	    /**
	     * @param {Node} node
	     * @param {Function} pred
	     */
	    var removeWhile = function (node, pred) {
	      while (node) {
	        if (isEditable(node) || !pred(node)) {
	          break;
	        }

	        var parent = node.parentNode;
	        remove(node);
	        node = parent;
	      }
	    };

	    /**
	     * replace node with provided nodeName
	     *
	     * @param {Node} node
	     * @param {String} nodeName
	     * @return {Node} - new node
	     */
	    var replace = function (node, nodeName) {
	      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
	        return node;
	      }

	      var newNode = create(nodeName);

	      if (node.style.cssText) {
	        newNode.style.cssText = node.style.cssText;
	      }

	      appendChildNodes(newNode, list.from(node.childNodes));
	      insertAfter(newNode, node);
	      remove(node);

	      return newNode;
	    };

	    var isTextarea = makePredByNodeName('TEXTAREA');

	    /**
	     * get the HTML contents of node 
	     *
	     * @param {jQuery} $node
	     * @param {Boolean} [isNewlineOnBlock]
	     */
	    var html = function ($node, isNewlineOnBlock) {
	      var markup = isTextarea($node[0]) ? $node.val() : $node.html();

	      if (isNewlineOnBlock) {
	        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
	        markup = markup.replace(regexTag, function (match, endSlash, name) {
	          name = name.toUpperCase();
	          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
	                                       !!endSlash;
	          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);

	          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
	        });
	        markup = $.trim(markup);
	      }

	      return markup;
	    };

	    var value = function ($textarea) {
	      var val = $textarea.val();
	      // strip line breaks
	      return val.replace(/[\n\r]/g, '');
	    };

	    return {
	      NBSP_CHAR: NBSP_CHAR,
	      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
	      blank: blankHTML,
	      emptyPara: '<p>' + blankHTML + '</p>',
	      isEditable: isEditable,
	      isControlSizing: isControlSizing,
	      buildLayoutInfo: buildLayoutInfo,
	      isText: isText,
	      isPara: isPara,
	      isPurePara: isPurePara,
	      isInline: isInline,
	      isBodyInline: isBodyInline,
	      isBody: isBody,
	      isParaInline: isParaInline,
	      isList: isList,
	      isTable: makePredByNodeName('TABLE'),
	      isCell: isCell,
	      isBlockquote: isBlockquote,
	      isBodyContainer: isBodyContainer,
	      isAnchor: isAnchor,
	      isDiv: makePredByNodeName('DIV'),
	      isLi: isLi,
	      isSpan: makePredByNodeName('SPAN'),
	      isB: makePredByNodeName('B'),
	      isU: makePredByNodeName('U'),
	      isS: makePredByNodeName('S'),
	      isI: makePredByNodeName('I'),
	      isImg: makePredByNodeName('IMG'),
	      isTextarea: isTextarea,
	      isEmpty: isEmpty,
	      isEmptyAnchor: func.and(isAnchor, isEmpty),
	      nodeLength: nodeLength,
	      isLeftEdgePoint: isLeftEdgePoint,
	      isRightEdgePoint: isRightEdgePoint,
	      isEdgePoint: isEdgePoint,
	      isLeftEdgeOf: isLeftEdgeOf,
	      isRightEdgeOf: isRightEdgeOf,
	      prevPoint: prevPoint,
	      nextPoint: nextPoint,
	      isSamePoint: isSamePoint,
	      isVisiblePoint: isVisiblePoint,
	      prevPointUntil: prevPointUntil,
	      nextPointUntil: nextPointUntil,
	      walkPoint: walkPoint,
	      ancestor: ancestor,
	      listAncestor: listAncestor,
	      lastAncestor: lastAncestor,
	      listNext: listNext,
	      listPrev: listPrev,
	      listDescendant: listDescendant,
	      commonAncestor: commonAncestor,
	      wrap: wrap,
	      insertAfter: insertAfter,
	      appendChildNodes: appendChildNodes,
	      position: position,
	      hasChildren: hasChildren,
	      makeOffsetPath: makeOffsetPath,
	      fromOffsetPath: fromOffsetPath,
	      splitTree: splitTree,
	      create: create,
	      createText: createText,
	      remove: remove,
	      removeWhile: removeWhile,
	      replace: replace,
	      html: html,
	      value: value
	    };
	  })();

	  var settings = {
	    // version
	    version: '0.5.10',

	    /**
	     * options
	     */
	    options: {
	      width: null,                  // set editor width
	      height: null,                 // set editor height, ex) 300

	      minHeight: null,              // set minimum height of editor
	      maxHeight: null,              // set maximum height of editor

	      focus: false,                 // set focus to editable area after initializing summernote

	      tabsize: 4,                   // size of tab ex) 2 or 4
	      styleWithSpan: true,          // style with span (Chrome and FF only)

	      disableLinkTarget: false,     // hide link Target Checkbox
	      disableDragAndDrop: false,    // disable drag and drop event
	      disableResizeEditor: false,   // disable resizing editor

	      codemirror: {                 // codemirror options
	        mode: 'text/html',
	        htmlMode: true,
	        lineNumbers: true
	      },

	      // language
	      lang: 'en-US',                // language 'en-US', 'ko-KR', ...
	      direction: null,              // text direction, ex) 'rtl'

	      // toolbar
	      toolbar: [
	        ['style', ['style']],
	        ['font', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
	        ['fontname', ['fontname']],
	        // ['fontsize', ['fontsize']], // Still buggy
	        ['color', ['color']],
	        ['para', ['ul', 'ol', 'paragraph']],
	        ['height', ['height']],
	        ['table', ['table']],
	        ['insert', ['link', 'picture', 'video', 'hr']],
	        ['view', ['fullscreen', 'codeview']],
	        ['help', ['help']]
	      ],

	      // air mode: inline editor
	      airMode: false,
	      // airPopover: [
	      //   ['style', ['style']],
	      //   ['font', ['bold', 'italic', 'underline', 'clear']],
	      //   ['fontname', ['fontname']],
	      //   ['fontsize', ['fontsize']], // Still buggy
	      //   ['color', ['color']],
	      //   ['para', ['ul', 'ol', 'paragraph']],
	      //   ['height', ['height']],
	      //   ['table', ['table']],
	      //   ['insert', ['link', 'picture', 'video']],
	      //   ['help', ['help']]
	      // ],
	      airPopover: [
	        ['color', ['color']],
	        ['font', ['bold', 'underline', 'clear']],
	        ['para', ['ul', 'paragraph']],
	        ['table', ['table']],
	        ['insert', ['link', 'picture']]
	      ],

	      // style tag
	      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

	      // default fontName
	      defaultFontName: 'Helvetica Neue',

	      // fontName
	      fontNames: [
	        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
	        'Helvetica Neue', 'Impact', 'Lucida Grande',
	        'Tahoma', 'Times New Roman', 'Verdana'
	      ],

	      // pallete colors(n x n)
	      colors: [
	        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
	        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
	        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
	        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
	        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
	        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
	        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
	        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
	      ],

	      // fontSize
	      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],

	      // lineHeight
	      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

	      // insertTable max size
	      insertTableMaxSize: {
	        col: 10,
	        row: 10
	      },

	      // callbacks
	      oninit: null,             // initialize
	      onfocus: null,            // editable has focus
	      onblur: null,             // editable out of focus
	      onenter: null,            // enter key pressed
	      onkeyup: null,            // keyup
	      onkeydown: null,          // keydown
	      onImageUpload: null,      // imageUpload
	      onImageUploadError: null, // imageUploadError
	      onToolbarClick: null,

	      /**
	       * manipulate link address when user create link
	       * @param {String} sLinkUrl
	       * @return {String}
	       */
	      onCreateLink: function (sLinkUrl) {
	        if (sLinkUrl.indexOf('@') !== -1 && sLinkUrl.indexOf(':') === -1) {
	          sLinkUrl =  'mailto:' + sLinkUrl;
	        } else if (sLinkUrl.indexOf('://') === -1) {
	          sLinkUrl = 'http://' + sLinkUrl;
	        }

	        return sLinkUrl;
	      },

	      keyMap: {
	        pc: {
	          'ENTER': 'insertParagraph',
	          'CTRL+Z': 'undo',
	          'CTRL+Y': 'redo',
	          'TAB': 'tab',
	          'SHIFT+TAB': 'untab',
	          'CTRL+B': 'bold',
	          'CTRL+I': 'italic',
	          'CTRL+U': 'underline',
	          'CTRL+SHIFT+S': 'strikethrough',
	          'CTRL+BACKSLASH': 'removeFormat',
	          'CTRL+SHIFT+L': 'justifyLeft',
	          'CTRL+SHIFT+E': 'justifyCenter',
	          'CTRL+SHIFT+R': 'justifyRight',
	          'CTRL+SHIFT+J': 'justifyFull',
	          'CTRL+SHIFT+NUM7': 'insertUnorderedList',
	          'CTRL+SHIFT+NUM8': 'insertOrderedList',
	          'CTRL+LEFTBRACKET': 'outdent',
	          'CTRL+RIGHTBRACKET': 'indent',
	          'CTRL+NUM0': 'formatPara',
	          'CTRL+NUM1': 'formatH1',
	          'CTRL+NUM2': 'formatH2',
	          'CTRL+NUM3': 'formatH3',
	          'CTRL+NUM4': 'formatH4',
	          'CTRL+NUM5': 'formatH5',
	          'CTRL+NUM6': 'formatH6',
	          'CTRL+ENTER': 'insertHorizontalRule',
	          'CTRL+K': 'showLinkDialog'
	        },

	        mac: {
	          'ENTER': 'insertParagraph',
	          'CMD+Z': 'undo',
	          'CMD+SHIFT+Z': 'redo',
	          'TAB': 'tab',
	          'SHIFT+TAB': 'untab',
	          'CMD+B': 'bold',
	          'CMD+I': 'italic',
	          'CMD+U': 'underline',
	          'CMD+SHIFT+S': 'strikethrough',
	          'CMD+BACKSLASH': 'removeFormat',
	          'CMD+SHIFT+L': 'justifyLeft',
	          'CMD+SHIFT+E': 'justifyCenter',
	          'CMD+SHIFT+R': 'justifyRight',
	          'CMD+SHIFT+J': 'justifyFull',
	          'CMD+SHIFT+NUM7': 'insertUnorderedList',
	          'CMD+SHIFT+NUM8': 'insertOrderedList',
	          'CMD+LEFTBRACKET': 'outdent',
	          'CMD+RIGHTBRACKET': 'indent',
	          'CMD+NUM0': 'formatPara',
	          'CMD+NUM1': 'formatH1',
	          'CMD+NUM2': 'formatH2',
	          'CMD+NUM3': 'formatH3',
	          'CMD+NUM4': 'formatH4',
	          'CMD+NUM5': 'formatH5',
	          'CMD+NUM6': 'formatH6',
	          'CMD+ENTER': 'insertHorizontalRule',
	          'CMD+K': 'showLinkDialog'
	        }
	      }
	    },

	    // default language: en-US
	    lang: {
	      'en-US': {
	        font: {
	          bold: 'Bold',
	          italic: 'Italic',
	          underline: 'Underline',
	          strikethrough: 'Strikethrough',
	          subscript: 'Subscript',
	          superscript: 'Superscript',
	          clear: 'Remove Font Style',
	          height: 'Line Height',
	          name: 'Font Family',
	          size: 'Font Size'
	        },
	        image: {
	          image: 'Picture',
	          insert: 'Insert Image',
	          resizeFull: 'Resize Full',
	          resizeHalf: 'Resize Half',
	          resizeQuarter: 'Resize Quarter',
	          floatLeft: 'Float Left',
	          floatRight: 'Float Right',
	          floatNone: 'Float None',
	          shapeRounded: 'Shape: Rounded',
	          shapeCircle: 'Shape: Circle',
	          shapeThumbnail: 'Shape: Thumbnail',
	          shapeNone: 'Shape: None',
	          dragImageHere: 'Drag an image here',
	          selectFromFiles: 'Select from files',
	          url: 'Image URL',
	          remove: 'Remove Image'
	        },
	        link: {
	          link: 'Link',
	          insert: 'Insert Link',
	          unlink: 'Unlink',
	          edit: 'Edit',
	          textToDisplay: 'Text to display',
	          url: 'To what URL should this link go?',
	          openInNewWindow: 'Open in new window'
	        },
	        video: {
	          video: 'Video',
	          videoLink: 'Video Link',
	          insert: 'Insert Video',
	          url: 'Video URL?',
	          providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
	        },
	        table: {
	          table: 'Table'
	        },
	        hr: {
	          insert: 'Insert Horizontal Rule'
	        },
	        style: {
	          style: 'Style',
	          normal: 'Normal',
	          blockquote: 'Quote',
	          pre: 'Code',
	          h1: 'Header 1',
	          h2: 'Header 2',
	          h3: 'Header 3',
	          h4: 'Header 4',
	          h5: 'Header 5',
	          h6: 'Header 6'
	        },
	        lists: {
	          unordered: 'Unordered list',
	          ordered: 'Ordered list'
	        },
	        options: {
	          help: 'Help',
	          fullscreen: 'Full Screen',
	          codeview: 'Code View'
	        },
	        paragraph: {
	          paragraph: 'Paragraph',
	          outdent: 'Outdent',
	          indent: 'Indent',
	          left: 'Align left',
	          center: 'Align center',
	          right: 'Align right',
	          justify: 'Justify full'
	        },
	        color: {
	          recent: 'Recent Color',
	          more: 'More Color',
	          background: 'Background Color',
	          foreground: 'Foreground Color',
	          transparent: 'Transparent',
	          setTransparent: 'Set transparent',
	          reset: 'Reset',
	          resetToDefault: 'Reset to default'
	        },
	        shortcut: {
	          shortcuts: 'Keyboard shortcuts',
	          close: 'Close',
	          textFormatting: 'Text formatting',
	          action: 'Action',
	          paragraphFormatting: 'Paragraph formatting',
	          documentStyle: 'Document Style'
	        },
	        history: {
	          undo: 'Undo',
	          redo: 'Redo'
	        }
	      }
	    }
	  };

	  /**
	   * Async functions which returns `Promise`
	   */
	  var async = (function () {
	    /**
	     * read contents of file as representing URL
	     *
	     * @param {File} file
	     * @return {Promise} - then: sDataUrl
	     */
	    var readFileAsDataURL = function (file) {
	      return $.Deferred(function (deferred) {
	        $.extend(new FileReader(), {
	          onload: function (e) {
	            var sDataURL = e.target.result;
	            deferred.resolve(sDataURL);
	          },
	          onerror: function () {
	            deferred.reject(this);
	          }
	        }).readAsDataURL(file);
	      }).promise();
	    };
	  
	    /**
	     * create `<image>` from url string
	     *
	     * @param {String} sUrl
	     * @return {Promise} - then: $image
	     */
	    var createImage = function (sUrl, filename) {
	      return $.Deferred(function (deferred) {
	        $('<img>').one('load', function () {
	          deferred.resolve($(this));
	        }).one('error abort', function () {
	          deferred.reject($(this));
	        }).css({
	          display: 'none'
	        }).appendTo(document.body)
	          .attr('src', sUrl)
	          .attr('data-filename', filename);
	      }).promise();
	    };

	    return {
	      readFileAsDataURL: readFileAsDataURL,
	      createImage: createImage
	    };
	  })();

	  /**
	   * Object for keycodes.
	   */
	  var key = {
	    isEdit: function (keyCode) {
	      return list.contains([8, 9, 13, 32], keyCode);
	    },
	    nameFromCode: {
	      '8': 'BACKSPACE',
	      '9': 'TAB',
	      '13': 'ENTER',
	      '32': 'SPACE',

	      // Number: 0-9
	      '48': 'NUM0',
	      '49': 'NUM1',
	      '50': 'NUM2',
	      '51': 'NUM3',
	      '52': 'NUM4',
	      '53': 'NUM5',
	      '54': 'NUM6',
	      '55': 'NUM7',
	      '56': 'NUM8',

	      // Alphabet: a-z
	      '66': 'B',
	      '69': 'E',
	      '73': 'I',
	      '74': 'J',
	      '75': 'K',
	      '76': 'L',
	      '82': 'R',
	      '83': 'S',
	      '85': 'U',
	      '89': 'Y',
	      '90': 'Z',

	      '191': 'SLASH',
	      '219': 'LEFTBRACKET',
	      '220': 'BACKSLASH',
	      '221': 'RIGHTBRACKET'
	    }
	  };

	  /**
	   * Style
	   * @class
	   */
	  var Style = function () {
	    /**
	     * passing an array of style properties to .css()
	     * will result in an object of property-value pairs.
	     * (compability with version < 1.9)
	     *
	     * @param  {jQuery} $obj
	     * @param  {Array} propertyNames - An array of one or more CSS properties.
	     * @returns {Object}
	     */
	    var jQueryCSS = function ($obj, propertyNames) {
	      if (agent.jqueryVersion < 1.9) {
	        var result = {};
	        $.each(propertyNames, function (idx, propertyName) {
	          result[propertyName] = $obj.css(propertyName);
	        });
	        return result;
	      }
	      return $obj.css.call($obj, propertyNames);
	    };

	    /**
	     * paragraph level style
	     *
	     * @param {WrappedRange} rng
	     * @param {Object} styleInfo
	     */
	    this.stylePara = function (rng, styleInfo) {
	      $.each(rng.nodes(dom.isPara, {
	        includeAncestor: true
	      }), function (idx, para) {
	        $(para).css(styleInfo);
	      });
	    };

	    /**
	     * get current style on cursor
	     *
	     * @param {WrappedRange} rng
	     * @param {Node} target - target element on event
	     * @return {Object} - object contains style properties.
	     */
	    this.current = function (rng, target) {
	      var $cont = $(dom.isText(rng.sc) ? rng.sc.parentNode : rng.sc);
	      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
	      var styleInfo = jQueryCSS($cont, properties) || {};

	      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);

	      // document.queryCommandState for toggle state
	      styleInfo['font-bold'] = document.queryCommandState('bold') ? 'bold' : 'normal';
	      styleInfo['font-italic'] = document.queryCommandState('italic') ? 'italic' : 'normal';
	      styleInfo['font-underline'] = document.queryCommandState('underline') ? 'underline' : 'normal';
	      styleInfo['font-strikethrough'] = document.queryCommandState('strikeThrough') ? 'strikethrough' : 'normal';
	      styleInfo['font-superscript'] = document.queryCommandState('superscript') ? 'superscript' : 'normal';
	      styleInfo['font-subscript'] = document.queryCommandState('subscript') ? 'subscript' : 'normal';

	      // list-style-type to list-style(unordered, ordered)
	      if (!rng.isOnList()) {
	        styleInfo['list-style'] = 'none';
	      } else {
	        var aOrderedType = ['circle', 'disc', 'disc-leading-zero', 'square'];
	        var isUnordered = $.inArray(styleInfo['list-style-type'], aOrderedType) > -1;
	        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
	      }

	      var para = dom.ancestor(rng.sc, dom.isPara);
	      if (para && para.style['line-height']) {
	        styleInfo['line-height'] = para.style.lineHeight;
	      } else {
	        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
	        styleInfo['line-height'] = lineHeight.toFixed(1);
	      }

	      styleInfo.image = dom.isImg(target) && target;
	      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
	      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
	      styleInfo.range = rng;

	      return styleInfo;
	    };
	  };


	  /**
	   * Data structure
	   *  - {BoundaryPoint}: a point of dom tree
	   *  - {BoundaryPoints}: two boundaryPoints corresponding to the start and the end of the Range
	   *
	   *  @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
	   */
	  var range = (function () {

	    /**
	     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
	     *
	     * @param {TextRange} textRange
	     * @param {Boolean} isStart
	     * @return {BoundaryPoint}
	     *
	     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
	     */
	    var textRangeToPoint = function (textRange, isStart) {
	      var container = textRange.parentElement(), offset;
	  
	      var tester = document.body.createTextRange(), prevContainer;
	      var childNodes = list.from(container.childNodes);
	      for (offset = 0; offset < childNodes.length; offset++) {
	        if (dom.isText(childNodes[offset])) {
	          continue;
	        }
	        tester.moveToElementText(childNodes[offset]);
	        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
	          break;
	        }
	        prevContainer = childNodes[offset];
	      }
	  
	      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
	        var textRangeStart = document.body.createTextRange(), curTextNode = null;
	        textRangeStart.moveToElementText(prevContainer || container);
	        textRangeStart.collapse(!prevContainer);
	        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
	  
	        var pointTester = textRange.duplicate();
	        pointTester.setEndPoint('StartToStart', textRangeStart);
	        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
	  
	        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
	          textCount -= curTextNode.nodeValue.length;
	          curTextNode = curTextNode.nextSibling;
	        }
	  
	        /* jshint ignore:start */
	        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack
	        /* jshint ignore:end */
	  
	        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
	            textCount === curTextNode.nodeValue.length) {
	          textCount -= curTextNode.nodeValue.length;
	          curTextNode = curTextNode.nextSibling;
	        }
	  
	        container = curTextNode;
	        offset = textCount;
	      }
	  
	      return {
	        cont: container,
	        offset: offset
	      };
	    };
	    
	    /**
	     * return TextRange from boundary point (inspired by google closure-library)
	     * @param {BoundaryPoint} point
	     * @return {TextRange}
	     */
	    var pointToTextRange = function (point) {
	      var textRangeInfo = function (container, offset) {
	        var node, isCollapseToStart;
	  
	        if (dom.isText(container)) {
	          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
	          var prevContainer = list.last(prevTextNodes).previousSibling;
	          node =  prevContainer || container.parentNode;
	          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);
	          isCollapseToStart = !prevContainer;
	        } else {
	          node = container.childNodes[offset] || container;
	          if (dom.isText(node)) {
	            return textRangeInfo(node, 0);
	          }
	  
	          offset = 0;
	          isCollapseToStart = false;
	        }
	  
	        return {
	          node: node,
	          collapseToStart: isCollapseToStart,
	          offset: offset
	        };
	      };
	  
	      var textRange = document.body.createTextRange();
	      var info = textRangeInfo(point.node, point.offset);
	  
	      textRange.moveToElementText(info.node);
	      textRange.collapse(info.collapseToStart);
	      textRange.moveStart('character', info.offset);
	      return textRange;
	    };
	    
	    /**
	     * Wrapped Range
	     *
	     * @param {Node} sc - start container
	     * @param {Number} so - start offset
	     * @param {Node} ec - end container
	     * @param {Number} eo - end offset
	     */
	    var WrappedRange = function (sc, so, ec, eo) {
	      this.sc = sc;
	      this.so = so;
	      this.ec = ec;
	      this.eo = eo;
	  
	      // nativeRange: get nativeRange from sc, so, ec, eo
	      var nativeRange = function () {
	        if (agent.isW3CRangeSupport) {
	          var w3cRange = document.createRange();
	          w3cRange.setStart(sc, so);
	          w3cRange.setEnd(ec, eo);

	          return w3cRange;
	        } else {
	          var textRange = pointToTextRange({
	            node: sc,
	            offset: so
	          });

	          textRange.setEndPoint('EndToEnd', pointToTextRange({
	            node: ec,
	            offset: eo
	          }));

	          return textRange;
	        }
	      };

	      this.getPoints = function () {
	        return {
	          sc: sc,
	          so: so,
	          ec: ec,
	          eo: eo
	        };
	      };

	      this.getStartPoint = function () {
	        return {
	          node: sc,
	          offset: so
	        };
	      };

	      this.getEndPoint = function () {
	        return {
	          node: ec,
	          offset: eo
	        };
	      };

	      /**
	       * select update visible range
	       */
	      this.select = function () {
	        var nativeRng = nativeRange();
	        if (agent.isW3CRangeSupport) {
	          var selection = document.getSelection();
	          if (selection.rangeCount > 0) {
	            selection.removeAllRanges();
	          }
	          selection.addRange(nativeRng);
	        } else {
	          nativeRng.select();
	        }
	      };

	      /**
	       * @return {WrappedRange}
	       */
	      this.normalize = function () {
	        var getVisiblePoint = function (point) {
	          if (!dom.isVisiblePoint(point)) {
	            if (dom.isLeftEdgePoint(point)) {
	              point = dom.nextPointUntil(point, dom.isVisiblePoint);
	            } else if (dom.isRightEdgePoint(point)) {
	              point = dom.prevPointUntil(point, dom.isVisiblePoint);
	            }
	          }
	          return point;
	        };

	        var startPoint = getVisiblePoint(this.getStartPoint());
	        var endPoint = getVisiblePoint(this.getStartPoint());

	        return new WrappedRange(
	          startPoint.node,
	          startPoint.offset,
	          endPoint.node,
	          endPoint.offset
	        );
	      };

	      /**
	       * returns matched nodes on range
	       *
	       * @param {Function} [pred] - predicate function
	       * @param {Object} [options]
	       * @param {Boolean} [options.includeAncestor]
	       * @param {Boolean} [options.fullyContains]
	       * @return {Node[]}
	       */
	      this.nodes = function (pred, options) {
	        pred = pred || func.ok;

	        var includeAncestor = options && options.includeAncestor;
	        var fullyContains = options && options.fullyContains;

	        // TODO compare points and sort
	        var startPoint = this.getStartPoint();
	        var endPoint = this.getEndPoint();

	        var nodes = [];
	        var leftEdgeNodes = [];

	        dom.walkPoint(startPoint, endPoint, function (point) {
	          if (dom.isEditable(point.node)) {
	            return;
	          }

	          var node;
	          if (fullyContains) {
	            if (dom.isLeftEdgePoint(point)) {
	              leftEdgeNodes.push(point.node);
	            }
	            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {
	              node = point.node;
	            }
	          } else if (includeAncestor) {
	            node = dom.ancestor(point.node, pred);
	          } else {
	            node = point.node;
	          }

	          if (node && pred(node)) {
	            nodes.push(node);
	          }
	        }, true);

	        return list.unique(nodes);
	      };

	      /**
	       * returns commonAncestor of range
	       * @return {Element} - commonAncestor
	       */
	      this.commonAncestor = function () {
	        return dom.commonAncestor(sc, ec);
	      };

	      /**
	       * returns expanded range by pred
	       *
	       * @param {Function} pred - predicate function
	       * @return {WrappedRange}
	       */
	      this.expand = function (pred) {
	        var startAncestor = dom.ancestor(sc, pred);
	        var endAncestor = dom.ancestor(ec, pred);

	        if (!startAncestor && !endAncestor) {
	          return new WrappedRange(sc, so, ec, eo);
	        }

	        var boundaryPoints = this.getPoints();

	        if (startAncestor) {
	          boundaryPoints.sc = startAncestor;
	          boundaryPoints.so = 0;
	        }

	        if (endAncestor) {
	          boundaryPoints.ec = endAncestor;
	          boundaryPoints.eo = dom.nodeLength(endAncestor);
	        }

	        return new WrappedRange(
	          boundaryPoints.sc,
	          boundaryPoints.so,
	          boundaryPoints.ec,
	          boundaryPoints.eo
	        );
	      };

	      /**
	       * @param {Boolean} isCollapseToStart
	       * @return {WrappedRange}
	       */
	      this.collapse = function (isCollapseToStart) {
	        if (isCollapseToStart) {
	          return new WrappedRange(sc, so, sc, so);
	        } else {
	          return new WrappedRange(ec, eo, ec, eo);
	        }
	      };

	      /**
	       * splitText on range
	       */
	      this.splitText = function () {
	        var isSameContainer = sc === ec;
	        var boundaryPoints = this.getPoints();

	        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {
	          ec.splitText(eo);
	        }

	        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {
	          boundaryPoints.sc = sc.splitText(so);
	          boundaryPoints.so = 0;

	          if (isSameContainer) {
	            boundaryPoints.ec = boundaryPoints.sc;
	            boundaryPoints.eo = eo - so;
	          }
	        }

	        return new WrappedRange(
	          boundaryPoints.sc,
	          boundaryPoints.so,
	          boundaryPoints.ec,
	          boundaryPoints.eo
	        );
	      };

	      /**
	       * delete contents on range
	       * @return {WrappedRange}
	       */
	      this.deleteContents = function () {
	        if (this.isCollapsed()) {
	          return this;
	        }

	        var rng = this.splitText();
	        var nodes = rng.nodes(null, {
	          fullyContains: true
	        });

	        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
	          return !list.contains(nodes, point.node);
	        });

	        var emptyParents = [];
	        $.each(nodes, function (idx, node) {
	          // find empty parents
	          var parent = node.parentNode;
	          if (point.node !== parent && dom.nodeLength(parent) === 1) {
	            emptyParents.push(parent);
	          }
	          dom.remove(node, false);
	        });

	        // remove empty parents
	        $.each(emptyParents, function (idx, node) {
	          dom.remove(node, false);
	        });

	        return new WrappedRange(
	          point.node,
	          point.offset,
	          point.node,
	          point.offset
	        );
	      };
	      
	      /**
	       * makeIsOn: return isOn(pred) function
	       */
	      var makeIsOn = function (pred) {
	        return function () {
	          var ancestor = dom.ancestor(sc, pred);
	          return !!ancestor && (ancestor === dom.ancestor(ec, pred));
	        };
	      };
	  
	      // isOnEditable: judge whether range is on editable or not
	      this.isOnEditable = makeIsOn(dom.isEditable);
	      // isOnList: judge whether range is on list node or not
	      this.isOnList = makeIsOn(dom.isList);
	      // isOnAnchor: judge whether range is on anchor node or not
	      this.isOnAnchor = makeIsOn(dom.isAnchor);
	      // isOnAnchor: judge whether range is on cell node or not
	      this.isOnCell = makeIsOn(dom.isCell);

	      /**
	       * @param {Function} pred
	       * @return {Boolean}
	       */
	      this.isLeftEdgeOf = function (pred) {
	        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
	          return false;
	        }

	        var node = dom.ancestor(this.sc, pred);
	        return node && dom.isLeftEdgeOf(this.sc, node);
	      };

	      /**
	       * returns whether range was collapsed or not
	       */
	      this.isCollapsed = function () {
	        return sc === ec && so === eo;
	      };

	      /**
	       * wrap inline nodes which children of body with paragraph
	       *
	       * @return {WrappedRange}
	       */
	      this.wrapBodyInlineWithPara = function () {
	        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {
	          sc.innerHTML = dom.emptyPara;
	          return new WrappedRange(sc.firstChild, 0);
	        } else if (!dom.isInline(sc) || dom.isParaInline(sc)) {
	          return this;
	        }

	        // find inline top ancestor
	        var ancestors = dom.listAncestor(sc, func.not(dom.isInline));
	        var topAncestor = list.last(ancestors);
	        if (!dom.isInline(topAncestor)) {
	          topAncestor = ancestors[ancestors.length - 2] || sc.childNodes[so];
	        }

	        // siblings not in paragraph
	        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
	        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));

	        // wrap with paragraph
	        if (inlineSiblings.length) {
	          var para = dom.wrap(list.head(inlineSiblings), 'p');
	          dom.appendChildNodes(para, list.tail(inlineSiblings));
	        }

	        return this;
	      };

	      /**
	       * insert node at current cursor
	       *
	       * @param {Node} node
	       * @param {Boolean} [isInline]
	       * @return {Node}
	       */
	      this.insertNode = function (node, isInline) {
	        var rng = this.wrapBodyInlineWithPara();
	        var point = rng.getStartPoint();

	        var splitRoot, container, pivot;
	        if (isInline) {
	          container = dom.isPara(point.node) ? point.node : point.node.parentNode;
	          if (dom.isPara(point.node)) {
	            pivot = point.node.childNodes[point.offset];
	          } else {
	            pivot = dom.splitTree(point.node, point);
	          }
	        } else {
	          // splitRoot will be childNode of container
	          var ancestors = dom.listAncestor(point.node, dom.isBodyContainer);
	          var topAncestor = list.last(ancestors) || point.node;

	          if (dom.isBodyContainer(topAncestor)) {
	            splitRoot = ancestors[ancestors.length - 2];
	            container = topAncestor;
	          } else {
	            splitRoot = topAncestor;
	            container = splitRoot.parentNode;
	          }
	          pivot = splitRoot && dom.splitTree(splitRoot, point);
	        }

	        if (pivot) {
	          pivot.parentNode.insertBefore(node, pivot);
	        } else {
	          container.appendChild(node);
	        }

	        return node;
	      };
	  
	      this.toString = function () {
	        var nativeRng = nativeRange();
	        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
	      };
	  
	      /**
	       * create offsetPath bookmark
	       * @param {Node} editable
	       */
	      this.bookmark = function (editable) {
	        return {
	          s: {
	            path: dom.makeOffsetPath(editable, sc),
	            offset: so
	          },
	          e: {
	            path: dom.makeOffsetPath(editable, ec),
	            offset: eo
	          }
	        };
	      };

	      /**
	       * getClientRects
	       * @return {Rect[]}
	       */
	      this.getClientRects = function () {
	        var nativeRng = nativeRange();
	        return nativeRng.getClientRects();
	      };
	    };
	  
	    return {
	      /**
	       * create Range Object From arguments or Browser Selection
	       *
	       * @param {Node} sc - start container
	       * @param {Number} so - start offset
	       * @param {Node} ec - end container
	       * @param {Number} eo - end offset
	       */
	      create : function (sc, so, ec, eo) {
	        if (!arguments.length) { // from Browser Selection
	          if (agent.isW3CRangeSupport) {
	            var selection = document.getSelection();
	            if (selection.rangeCount === 0) {
	              return null;
	            } else if (dom.isBody(selection.anchorNode)) {
	              // Firefox: returns entire body as range on initialization. We won't never need it.
	              return null;
	            }
	  
	            var nativeRng = selection.getRangeAt(0);
	            sc = nativeRng.startContainer;
	            so = nativeRng.startOffset;
	            ec = nativeRng.endContainer;
	            eo = nativeRng.endOffset;
	          } else { // IE8: TextRange
	            var textRange = document.selection.createRange();
	            var textRangeEnd = textRange.duplicate();
	            textRangeEnd.collapse(false);
	            var textRangeStart = textRange;
	            textRangeStart.collapse(true);
	  
	            var startPoint = textRangeToPoint(textRangeStart, true),
	            endPoint = textRangeToPoint(textRangeEnd, false);

	            // same visible point case: range was collapsed.
	            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
	                dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
	                endPoint.node.nextSibling === startPoint.node) {
	              startPoint = endPoint;
	            }

	            sc = startPoint.cont;
	            so = startPoint.offset;
	            ec = endPoint.cont;
	            eo = endPoint.offset;
	          }
	        } else if (arguments.length === 2) { //collapsed
	          ec = sc;
	          eo = so;
	        }
	        return new WrappedRange(sc, so, ec, eo);
	      },

	      /**
	       * create WrappedRange from node
	       *
	       * @param {Node} node
	       * @return {WrappedRange}
	       */
	      createFromNode: function (node) {
	        return this.create(node, 0, node, 1);
	      },

	      /**
	       * create WrappedRange from Bookmark
	       *
	       * @param {Node} editable
	       * @param {Obkect} bookmark
	       * @return {WrappedRange}
	       */
	      createFromBookmark : function (editable, bookmark) {
	        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
	        var so = bookmark.s.offset;
	        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
	        var eo = bookmark.e.offset;
	        return new WrappedRange(sc, so, ec, eo);
	      }
	    };
	  })();


	  var Typing = function () {

	    /**
	     * @param {jQuery} $editable 
	     * @param {WrappedRange} rng
	     * @param {Number} tabsize
	     */
	    this.insertTab = function ($editable, rng, tabsize) {
	      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
	      rng = rng.deleteContents();
	      rng.insertNode(tab, true);

	      rng = range.create(tab, tabsize);
	      rng.select();
	    };

	    /**
	     * insert paragraph
	     */
	    this.insertParagraph = function () {
	      var rng = range.create();

	      // deleteContents on range.
	      rng = rng.deleteContents();

	      // Wrap range if it needs to be wrapped by paragraph
	      rng = rng.wrapBodyInlineWithPara();

	      // finding paragraph
	      var splitRoot = dom.ancestor(rng.sc, dom.isPara);

	      var nextPara;
	      // on paragraph: split paragraph
	      if (splitRoot) {
	        nextPara = dom.splitTree(splitRoot, rng.getStartPoint());

	        var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
	        emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));

	        $.each(emptyAnchors, function (idx, anchor) {
	          dom.remove(anchor);
	        });
	      // no paragraph: insert empty paragraph
	      } else {
	        var next = rng.sc.childNodes[rng.so];
	        nextPara = $(dom.emptyPara)[0];
	        if (next) {
	          rng.sc.insertBefore(nextPara, next);
	        } else {
	          rng.sc.appendChild(nextPara);
	        }
	      }

	      range.create(nextPara, 0).normalize().select();
	    };

	  };

	  /**
	   * Table
	   * @class
	   */
	  var Table = function () {
	    /**
	     * handle tab key
	     *
	     * @param {WrappedRange} rng
	     * @param {Boolean} isShift
	     */
	    this.tab = function (rng, isShift) {
	      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
	      var table = dom.ancestor(cell, dom.isTable);
	      var cells = dom.listDescendant(table, dom.isCell);

	      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);
	      if (nextCell) {
	        range.create(nextCell, 0).select();
	      }
	    };

	    /**
	     * create empty table element
	     *
	     * @param {Number} rowCount
	     * @param {Number} colCount
	     * @return {Node}
	     */
	    this.createTable = function (colCount, rowCount) {
	      var tds = [], tdHTML;
	      for (var idxCol = 0; idxCol < colCount; idxCol++) {
	        tds.push('<td>' + dom.blank + '</td>');
	      }
	      tdHTML = tds.join('');

	      var trs = [], trHTML;
	      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
	        trs.push('<tr>' + tdHTML + '</tr>');
	      }
	      trHTML = trs.join('');
	      return $('<table class="table table-bordered">' + trHTML + '</table>')[0];
	    };
	  };


	  var Bullet = function () {
	    /**
	     * toggle ordered list
	     * @type command
	     */
	    this.insertOrderedList = function () {
	      this.toggleList('OL');
	    };

	    /**
	     * toggle unordered list
	     * @type command
	     */
	    this.insertUnorderedList = function () {
	      this.toggleList('UL');
	    };

	    /**
	     * indent
	     * @type command
	     */
	    this.indent = function () {
	      var self = this;
	      var rng = range.create().wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        if (dom.isLi(head)) {
	          self.wrapList(paras, head.parentNode.nodeName);
	        } else {
	          $.each(paras, function (idx, para) {
	            $(para).css('marginLeft', function (idx, val) {
	              return (parseInt(val, 10) || 0) + 25;
	            });
	          });
	        }
	      });

	      rng.select();
	    };

	    /**
	     * outdent
	     * @type command
	     */
	    this.outdent = function () {
	      var self = this;
	      var rng = range.create().wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        if (dom.isLi(head)) {
	          self.releaseList([paras]);
	        } else {
	          $.each(paras, function (idx, para) {
	            $(para).css('marginLeft', function (idx, val) {
	              val = (parseInt(val, 10) || 0);
	              return val > 25 ? val - 25 : '';
	            });
	          });
	        }
	      });

	      rng.select();
	    };

	    /**
	     * toggle list
	     * @param {String} listName - OL or UL
	     */
	    this.toggleList = function (listName) {
	      var self = this;
	      var rng = range.create().wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      // paragraph to list
	      if (list.find(paras, dom.isPurePara)) {
	        $.each(clustereds, function (idx, paras) {
	          self.wrapList(paras, listName);
	        });
	      // list to paragraph or change list style
	      } else {
	        var diffLists = rng.nodes(dom.isList, {
	          includeAncestor: true
	        }).filter(function (listNode) {
	          return !$.nodeName(listNode, listName);
	        });

	        if (diffLists.length) {
	          $.each(diffLists, function (idx, listNode) {
	            dom.replace(listNode, listName);
	          });
	        } else {
	          this.releaseList(clustereds, true);
	        }
	      }

	      rng.select();
	    };

	    /**
	     * @param {Node[]} paras
	     * @param {String} listName
	     */
	    this.wrapList = function (paras, listName) {
	      var head = list.head(paras);
	      var last = list.last(paras);

	      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
	      var nextList = dom.isList(last.nextSibling) && last.nextSibling;

	      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);

	      // P to LI
	      paras = $.map(paras, function (para) {
	        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
	      });

	      // append to list(<ul>, <ol>)
	      dom.appendChildNodes(listNode, paras);

	      if (nextList) {
	        dom.appendChildNodes(listNode, list.from(nextList.childNodes));
	        dom.remove(nextList);
	      }
	    };

	    /**
	     * @param {Array[]} clustereds
	     * @param {Boolean} isEscapseToBody
	     * @return {Node[]}
	     */
	    this.releaseList = function (clustereds, isEscapseToBody) {
	      var releasedParas = [];

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        var last = list.last(paras);

	        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :
	                                         head.parentNode;
	        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
	          node: last.parentNode,
	          offset: dom.position(last) + 1
	        }, true) : null;

	        var middleList = dom.splitTree(headList, {
	          node: head.parentNode,
	          offset: dom.position(head)
	        }, true);

	        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :
	                                  list.from(middleList.childNodes).filter(dom.isLi);

	        // LI to P
	        if (isEscapseToBody || !dom.isList(headList.parentNode)) {
	          paras = $.map(paras, function (para) {
	            return dom.replace(para, 'P');
	          });
	        }

	        $.each(list.from(paras).reverse(), function (idx, para) {
	          dom.insertAfter(para, headList);
	        });

	        // remove empty lists
	        var rootLists = list.compact([headList, middleList, lastList]);
	        $.each(rootLists, function (idx, rootList) {
	          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
	          $.each(listNodes.reverse(), function (idx, listNode) {
	            if (!dom.nodeLength(listNode)) {
	              dom.remove(listNode, true);
	            }
	          });
	        });

	        releasedParas = releasedParas.concat(paras);
	      });

	      return releasedParas;
	    };
	  };

	  /**
	   * Editor
	   * @class
	   */
	  var Editor = function () {

	    var style = new Style();
	    var table = new Table();
	    var typing = new Typing();
	    var bullet = new Bullet();

	    /**
	     * save current range
	     *
	     * @param {jQuery} $editable
	     */
	    this.saveRange = function ($editable, thenCollapse) {
	      $editable.focus();
	      $editable.data('range', range.create());
	      if (thenCollapse) {
	        range.create().collapse().select();
	      }
	    };

	    /**
	     * restore lately range
	     *
	     * @param {jQuery} $editable
	     */
	    this.restoreRange = function ($editable) {
	      var rng = $editable.data('range');
	      if (rng) {
	        rng.select();
	        $editable.focus();
	      }
	    };

	    /**
	     * current style
	     * @param {Node} target
	     */
	    this.currentStyle = function (target) {
	      var rng = range.create();
	      return rng ? rng.isOnEditable() && style.current(rng, target) : false;
	    };

	    var triggerOnChange = this.triggerOnChange = function ($editable) {
	      var onChange = $editable.data('callbacks').onChange;
	      if (onChange) {
	        onChange($editable.html(), $editable);
	      }
	    };

	    /**
	     * undo
	     * @param {jQuery} $editable
	     */
	    this.undo = function ($editable) {
	      $editable.data('NoteHistory').undo();
	      triggerOnChange($editable);
	    };

	    /**
	     * redo
	     * @param {jQuery} $editable
	     */
	    this.redo = function ($editable) {
	      $editable.data('NoteHistory').redo();
	      triggerOnChange($editable);
	    };

	    /**
	     * after command
	     * @param {jQuery} $editable
	     */
	    var afterCommand = this.afterCommand = function ($editable) {
	      $editable.data('NoteHistory').recordUndo();
	      triggerOnChange($editable);
	    };

	    /* jshint ignore:start */
	    // native commands(with execCommand), generate function for execCommand
	    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
	                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
	                    'formatBlock', 'removeFormat',
	                    'backColor', 'foreColor', 'insertHorizontalRule', 'fontName'];

	    for (var idx = 0, len = commands.length; idx < len; idx ++) {
	      this[commands[idx]] = (function (sCmd) {
	        return function ($editable, value) {
	          document.execCommand(sCmd, false, value);

	          afterCommand($editable);
	        };
	      })(commands[idx]);
	    }
	    /* jshint ignore:end */

	    /**
	     * handle tab key
	     *
	     * @param {jQuery} $editable 
	     * @param {Object} options
	     */
	    this.tab = function ($editable, options) {
	      var rng = range.create();
	      if (rng.isCollapsed() && rng.isOnCell()) {
	        table.tab(rng);
	      } else {
	        typing.insertTab($editable, rng, options.tabsize);
	        afterCommand($editable);
	      }
	    };

	    /**
	     * handle shift+tab key
	     */
	    this.untab = function () {
	      var rng = range.create();
	      if (rng.isCollapsed() && rng.isOnCell()) {
	        table.tab(rng, true);
	      }
	    };

	    /**
	     * insert paragraph
	     *
	     * @param {Node} $editable
	     */
	    this.insertParagraph = function ($editable) {
	      typing.insertParagraph($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     */
	    this.insertOrderedList = function ($editable) {
	      bullet.insertOrderedList($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     */
	    this.insertUnorderedList = function ($editable) {
	      bullet.insertUnorderedList($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     */
	    this.indent = function ($editable) {
	      bullet.indent($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     */
	    this.outdent = function ($editable) {
	      bullet.outdent($editable);
	      afterCommand($editable);
	    };

	    /**
	     * insert image
	     *
	     * @param {jQuery} $editable
	     * @param {String} sUrl
	     */
	    this.insertImage = function ($editable, sUrl, filename) {
	      async.createImage(sUrl, filename).then(function ($image) {
	        $image.css({
	          display: '',
	          width: Math.min($editable.width(), $image.width())
	        });
	        range.create().insertNode($image[0]);
	        afterCommand($editable);
	      }).fail(function () {
	        var callbacks = $editable.data('callbacks');
	        if (callbacks.onImageUploadError) {
	          callbacks.onImageUploadError();
	        }
	      });
	    };

	    /**
	     * insert video
	     * @param {jQuery} $editable
	     * @param {String} sUrl
	     */
	    this.insertVideo = function ($editable, sUrl) {
	      // video url patterns(youtube, instagram, vimeo, dailymotion, youku)
	      var ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	      var ytMatch = sUrl.match(ytRegExp);

	      var igRegExp = /\/\/instagram.com\/p\/(.[a-zA-Z0-9]*)/;
	      var igMatch = sUrl.match(igRegExp);

	      var vRegExp = /\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/;
	      var vMatch = sUrl.match(vRegExp);

	      var vimRegExp = /\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/;
	      var vimMatch = sUrl.match(vimRegExp);

	      var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
	      var dmMatch = sUrl.match(dmRegExp);

	      var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)\.html/;
	      var youkuMatch = sUrl.match(youkuRegExp);

	      var $video;
	      if (ytMatch && ytMatch[2].length === 11) {
	        var youtubeId = ytMatch[2];
	        $video = $('<iframe>')
	          .attr('src', '//www.youtube.com/embed/' + youtubeId)
	          .attr('width', '640').attr('height', '360');
	      } else if (igMatch && igMatch[0].length) {
	        $video = $('<iframe>')
	          .attr('src', igMatch[0] + '/embed/')
	          .attr('width', '612').attr('height', '710')
	          .attr('scrolling', 'no')
	          .attr('allowtransparency', 'true');
	      } else if (vMatch && vMatch[0].length) {
	        $video = $('<iframe>')
	          .attr('src', vMatch[0] + '/embed/simple')
	          .attr('width', '600').attr('height', '600')
	          .attr('class', 'vine-embed');
	      } else if (vimMatch && vimMatch[3].length) {
	        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
	          .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
	          .attr('width', '640').attr('height', '360');
	      } else if (dmMatch && dmMatch[2].length) {
	        $video = $('<iframe>')
	          .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
	          .attr('width', '640').attr('height', '360');
	      } else if (youkuMatch && youkuMatch[1].length) {
	        $video = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
	          .attr('height', '498')
	          .attr('width', '510')
	          .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
	      } else {
	        // this is not a known video link. Now what, Cat? Now what?
	      }

	      if ($video) {
	        $video.attr('frameborder', 0);
	        range.create().insertNode($video[0]);
	        afterCommand($editable);
	      }
	    };

	    /**
	     * formatBlock
	     *
	     * @param {jQuery} $editable
	     * @param {String} tagName
	     */
	    this.formatBlock = function ($editable, tagName) {
	      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;
	      document.execCommand('FormatBlock', false, tagName);
	      afterCommand($editable);
	    };

	    this.formatPara = function ($editable) {
	      this.formatBlock($editable, 'P');
	      afterCommand($editable);
	    };

	    /* jshint ignore:start */
	    for (var idx = 1; idx <= 6; idx ++) {
	      this['formatH' + idx] = function (idx) {
	        return function ($editable) {
	          this.formatBlock($editable, 'H' + idx);
	        };
	      }(idx);
	    };
	    /* jshint ignore:end */

	    /**
	     * fontsize
	     * FIXME: Still buggy
	     *
	     * @param {jQuery} $editable
	     * @param {String} value - px
	     */
	    this.fontSize = function ($editable, value) {
	      document.execCommand('fontSize', false, 3);
	      if (agent.isFF) {
	        // firefox: <font size="3"> to <span style='font-size={value}px;'>, buggy
	        $editable.find('font[size=3]').removeAttr('size').css('font-size', value + 'px');
	      } else {
	        // chrome: <span style="font-size: medium"> to <span style='font-size={value}px;'>
	        $editable.find('span').filter(function () {
	          return this.style.fontSize === 'medium';
	        }).css('font-size', value + 'px');
	      }

	      afterCommand($editable);
	    };

	    /**
	     * lineHeight
	     * @param {jQuery} $editable
	     * @param {String} value
	     */
	    this.lineHeight = function ($editable, value) {
	      style.stylePara(range.create(), {
	        lineHeight: value
	      });
	      afterCommand($editable);
	    };

	    /**
	     * unlink
	     *
	     * @type command
	     *
	     * @param {jQuery} $editable
	     */
	    this.unlink = function ($editable) {
	      var rng = range.create();
	      if (rng.isOnAnchor()) {
	        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
	        rng = range.createFromNode(anchor);
	        rng.select();
	        document.execCommand('unlink');

	        afterCommand($editable);
	      }
	    };

	    /**
	     * create link
	     *
	     * @type command
	     *
	     * @param {jQuery} $editable
	     * @param {Object} linkInfo
	     * @param {Object} options
	     */
	    this.createLink = function ($editable, linkInfo, options) {
	      var linkUrl = linkInfo.url;
	      var linkText = linkInfo.text;
	      var isNewWindow = linkInfo.newWindow;
	      var rng = linkInfo.range;

	      if (options.onCreateLink) {
	        linkUrl = options.onCreateLink(linkUrl);
	      }

	      rng = rng.deleteContents();

	      // Create a new link when there is no anchor on range.
	      var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0], true);
	      $(anchor).attr({
	        href: linkUrl,
	        target: isNewWindow ? '_blank' : ''
	      });

	      range.createFromNode(anchor).select();
	      afterCommand($editable);
	    };

	    /**
	     * returns link info
	     *
	     * @return {Object}
	     */
	    this.getLinkInfo = function ($editable) {
	      $editable.focus();

	      var rng = range.create().expand(dom.isAnchor);

	      // Get the first anchor on range(for edit).
	      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));

	      return {
	        range: rng,
	        text: rng.toString(),
	        isNewWindow: $anchor.length ? $anchor.attr('target') === '_blank' : true,
	        url: $anchor.length ? $anchor.attr('href') : ''
	      };
	    };

	    /**
	     * get video info
	     *
	     * @param {jQuery} $editable
	     * @return {Object}
	     */
	    this.getVideoInfo = function ($editable) {
	      $editable.focus();

	      var rng = range.create();

	      if (rng.isOnAnchor()) {
	        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
	        rng = range.createFromNode(anchor);
	      }

	      return {
	        text: rng.toString()
	      };
	    };

	    this.color = function ($editable, sObjColor) {
	      var oColor = JSON.parse(sObjColor);
	      var foreColor = oColor.foreColor, backColor = oColor.backColor;

	      if (foreColor) { document.execCommand('foreColor', false, foreColor); }
	      if (backColor) { document.execCommand('backColor', false, backColor); }

	      afterCommand($editable);
	    };

	    this.insertTable = function ($editable, sDim) {
	      var dimension = sDim.split('x');
	      var rng = range.create();
	      rng = rng.deleteContents();
	      rng.insertNode(table.createTable(dimension[0], dimension[1]));
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     * @param {String} value
	     * @param {jQuery} $target
	     */
	    this.floatMe = function ($editable, value, $target) {
	      $target.css('float', value);
	      afterCommand($editable);
	    };

	    this.imageShape = function ($editable, value, $target) {
	      $target.removeClass('img-rounded img-circle img-thumbnail');

	      if (value) {
	        $target.addClass(value);
	      }
	    };

	    /**
	     * resize overlay element
	     * @param {jQuery} $editable
	     * @param {String} value
	     * @param {jQuery} $target - target element
	     */
	    this.resize = function ($editable, value, $target) {
	      $target.css({
	        width: value * 100 + '%',
	        height: ''
	      });

	      afterCommand($editable);
	    };

	    /**
	     * @param {Position} pos
	     * @param {jQuery} $target - target element
	     * @param {Boolean} [bKeepRatio] - keep ratio
	     */
	    this.resizeTo = function (pos, $target, bKeepRatio) {
	      var imageSize;
	      if (bKeepRatio) {
	        var newRatio = pos.y / pos.x;
	        var ratio = $target.data('ratio');
	        imageSize = {
	          width: ratio > newRatio ? pos.x : pos.y / ratio,
	          height: ratio > newRatio ? pos.x * ratio : pos.y
	        };
	      } else {
	        imageSize = {
	          width: pos.x,
	          height: pos.y
	        };
	      }

	      $target.css(imageSize);
	    };

	    /**
	     * remove media object
	     *
	     * @param {jQuery} $editable
	     * @param {String} value - dummy argument (for keep interface)
	     * @param {jQuery} $target - target element
	     */
	    this.removeMedia = function ($editable, value, $target) {
	      $target.detach();

	      afterCommand($editable);
	    };
	  };

	  /**
	   * History
	   * @class
	   */
	  var History = function ($editable) {
	    var stack = [], stackOffset = -1;
	    var editable = $editable[0];

	    var makeSnapshot = function () {
	      var rng = range.create();
	      var emptyBookmark = {s: {path: [0], offset: 0}, e: {path: [0], offset: 0}};

	      return {
	        contents: $editable.html(),
	        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)
	      };
	    };

	    var applySnapshot = function (snapshot) {
	      if (snapshot.contents !== null) {
	        $editable.html(snapshot.contents);
	      }
	      if (snapshot.bookmark !== null) {
	        range.createFromBookmark(editable, snapshot.bookmark).select();
	      }
	    };

	    this.undo = function () {
	      if (0 < stackOffset) {
	        stackOffset--;
	        applySnapshot(stack[stackOffset]);
	      }
	    };

	    this.redo = function () {
	      if (stack.length - 1 > stackOffset) {
	        stackOffset++;
	        applySnapshot(stack[stackOffset]);
	      }
	    };

	    this.recordUndo = function () {
	      stackOffset++;

	      // Wash out stack after stackOffset
	      if (stack.length > stackOffset) {
	        stack = stack.slice(0, stackOffset);
	      }

	      // Create new snapshot and push it to the end
	      stack.push(makeSnapshot());
	    };

	    // Create first undo stack
	    this.recordUndo();
	  };

	  /**
	   * Button
	   */
	  var Button = function () {
	    /**
	     * update button status
	     *
	     * @param {jQuery} $container
	     * @param {Object} styleInfo
	     */
	    this.update = function ($container, styleInfo) {
	      /**
	       * handle dropdown's check mark (for fontname, fontsize, lineHeight).
	       * @param {jQuery} $btn
	       * @param {Number} value
	       */
	      var checkDropdownMenu = function ($btn, value) {
	        $btn.find('.dropdown-menu li a').each(function () {
	          // always compare string to avoid creating another func.
	          var isChecked = ($(this).data('value') + '') === (value + '');
	          this.className = isChecked ? 'checked' : '';
	        });
	      };

	      /**
	       * update button state(active or not).
	       *
	       * @param {String} selector
	       * @param {Function} pred
	       */
	      var btnState = function (selector, pred) {
	        var $btn = $container.find(selector);
	        $btn.toggleClass('active', pred());
	      };

	      // fontname
	      var $fontname = $container.find('.note-fontname');
	      if ($fontname.length) {
	        var selectedFont = styleInfo['font-family'];
	        if (!!selectedFont) {
	          selectedFont = list.head(selectedFont.split(','));
	          selectedFont = selectedFont.replace(/\'/g, '');
	          $fontname.find('.note-current-fontname').text(selectedFont);
	          checkDropdownMenu($fontname, selectedFont);
	        }
	      }

	      // fontsize
	      var $fontsize = $container.find('.note-fontsize');
	      $fontsize.find('.note-current-fontsize').text(styleInfo['font-size']);
	      checkDropdownMenu($fontsize, parseFloat(styleInfo['font-size']));

	      // lineheight
	      var $lineHeight = $container.find('.note-height');
	      checkDropdownMenu($lineHeight, parseFloat(styleInfo['line-height']));

	      btnState('button[data-event="bold"]', function () {
	        return styleInfo['font-bold'] === 'bold';
	      });
	      btnState('button[data-event="italic"]', function () {
	        return styleInfo['font-italic'] === 'italic';
	      });
	      btnState('button[data-event="underline"]', function () {
	        return styleInfo['font-underline'] === 'underline';
	      });
	      btnState('button[data-event="strikethrough"]', function () {
	        return styleInfo['font-strikethrough'] === 'strikethrough';
	      });
	      btnState('button[data-event="superscript"]', function () {
	        return styleInfo['font-superscript'] === 'superscript';
	      });
	      btnState('button[data-event="subscript"]', function () {
	        return styleInfo['font-subscript'] === 'subscript';
	      });
	      btnState('button[data-event="justifyLeft"]', function () {
	        return styleInfo['text-align'] === 'left' || styleInfo['text-align'] === 'start';
	      });
	      btnState('button[data-event="justifyCenter"]', function () {
	        return styleInfo['text-align'] === 'center';
	      });
	      btnState('button[data-event="justifyRight"]', function () {
	        return styleInfo['text-align'] === 'right';
	      });
	      btnState('button[data-event="justifyFull"]', function () {
	        return styleInfo['text-align'] === 'justify';
	      });
	      btnState('button[data-event="insertUnorderedList"]', function () {
	        return styleInfo['list-style'] === 'unordered';
	      });
	      btnState('button[data-event="insertOrderedList"]', function () {
	        return styleInfo['list-style'] === 'ordered';
	      });
	    };

	    /**
	     * update recent color
	     *
	     * @param {Node} button
	     * @param {String} eventName
	     * @param {value} value
	     */
	    this.updateRecentColor = function (button, eventName, value) {
	      var $color = $(button).closest('.note-color');
	      var $recentColor = $color.find('.note-recent-color');
	      var colorInfo = JSON.parse($recentColor.attr('data-value'));
	      colorInfo[eventName] = value;
	      $recentColor.attr('data-value', JSON.stringify(colorInfo));
	      var sKey = eventName === 'backColor' ? 'background-color' : 'color';
	      $recentColor.find('i').css(sKey, value);
	    };
	  };

	  /**
	   * Toolbar
	   */
	  var Toolbar = function () {
	    var button = new Button();

	    this.update = function ($toolbar, styleInfo) {
	      button.update($toolbar, styleInfo);
	    };

	    /**
	     * @param {Node} button
	     * @param {String} eventName
	     * @param {String} value
	     */
	    this.updateRecentColor = function (buttonNode, eventName, value) {
	      button.updateRecentColor(buttonNode, eventName, value);
	    };

	    /**
	     * activate buttons exclude codeview
	     * @param {jQuery} $toolbar
	     */
	    this.activate = function ($toolbar) {
	      $toolbar.find('button')
	              .not('button[data-event="codeview"]')
	              .removeClass('disabled');
	    };

	    /**
	     * deactivate buttons exclude codeview
	     * @param {jQuery} $toolbar
	     */
	    this.deactivate = function ($toolbar) {
	      $toolbar.find('button')
	              .not('button[data-event="codeview"]')
	              .addClass('disabled');
	    };

	    this.updateFullscreen = function ($container, bFullscreen) {
	      var $btn = $container.find('button[data-event="fullscreen"]');
	      $btn.toggleClass('active', bFullscreen);
	    };

	    this.updateCodeview = function ($container, isCodeview) {
	      var $btn = $container.find('button[data-event="codeview"]');
	      $btn.toggleClass('active', isCodeview);
	    };
	  };

	  /**
	   * Popover (http://getbootstrap.com/javascript/#popovers)
	   */
	  var Popover = function () {
	    var button = new Button();

	    /**
	     * returns position from placeholder
	     * @param {Node} placeholder
	     * @param {Boolean} isAirMode
	     */
	    var posFromPlaceholder = function (placeholder, isAirMode) {
	      var $placeholder = $(placeholder);
	      var pos = isAirMode ? $placeholder.offset() : $placeholder.position();
	      var height = $placeholder.outerHeight(true); // include margin

	      // popover below placeholder.
	      return {
	        left: pos.left,
	        top: pos.top + height
	      };
	    };

	    /**
	     * show popover
	     * @param {jQuery} popover
	     * @param {Position} pos
	     */
	    var showPopover = function ($popover, pos) {
	      $popover.css({
	        display: 'block',
	        left: pos.left,
	        top: pos.top
	      });
	    };

	    var PX_POPOVER_ARROW_OFFSET_X = 20;

	    /**
	     * update current state
	     * @param {jQuery} $popover - popover container
	     * @param {Object} styleInfo - style object
	     * @param {Boolean} isAirMode
	     */
	    this.update = function ($popover, styleInfo, isAirMode) {
	      button.update($popover, styleInfo);

	      var $linkPopover = $popover.find('.note-link-popover');
	      if (styleInfo.anchor) {
	        var $anchor = $linkPopover.find('a');
	        var href = $(styleInfo.anchor).attr('href');
	        $anchor.attr('href', href).html(href);
	        showPopover($linkPopover, posFromPlaceholder(styleInfo.anchor, isAirMode));
	      } else {
	        $linkPopover.hide();
	      }

	      var $imagePopover = $popover.find('.note-image-popover');
	      if (styleInfo.image) {
	        showPopover($imagePopover, posFromPlaceholder(styleInfo.image, isAirMode));
	      } else {
	        $imagePopover.hide();
	      }

	      var $airPopover = $popover.find('.note-air-popover');
	      if (isAirMode && !styleInfo.range.isCollapsed()) {
	        var bnd = func.rect2bnd(list.last(styleInfo.range.getClientRects()));
	        showPopover($airPopover, {
	          left: Math.max(bnd.left + bnd.width / 2 - PX_POPOVER_ARROW_OFFSET_X, 0),
	          top: bnd.top + bnd.height
	        });
	      } else {
	        $airPopover.hide();
	      }
	    };

	    /**
	     * @param {Node} button
	     * @param {String} eventName
	     * @param {String} value
	     */
	    this.updateRecentColor = function (button, eventName, value) {
	      button.updateRecentColor(button, eventName, value);
	    };

	    /**
	     * hide all popovers
	     * @param {jQuery} $popover - popover contaienr
	     */
	    this.hide = function ($popover) {
	      $popover.children().hide();
	    };
	  };

	  /**
	   * Handle
	   */
	  var Handle = function () {
	    /**
	     * update handle
	     * @param {jQuery} $handle
	     * @param {Object} styleInfo
	     * @param {Boolean} isAirMode
	     */
	    this.update = function ($handle, styleInfo, isAirMode) {
	      var $selection = $handle.find('.note-control-selection');
	      if (styleInfo.image) {
	        var $image = $(styleInfo.image);
	        var pos = isAirMode ? $image.offset() : $image.position();

	        // include margin
	        var imageSize = {
	          w: $image.outerWidth(true),
	          h: $image.outerHeight(true)
	        };

	        $selection.css({
	          display: 'block',
	          left: pos.left,
	          top: pos.top,
	          width: imageSize.w,
	          height: imageSize.h
	        }).data('target', styleInfo.image); // save current image element.
	        var sizingText = imageSize.w + 'x' + imageSize.h;
	        $selection.find('.note-control-selection-info').text(sizingText);
	      } else {
	        $selection.hide();
	      }
	    };

	    this.hide = function ($handle) {
	      $handle.children().hide();
	    };
	  };

	  /**
	   * Dialog 
	   *
	   * @class
	   */
	  var Dialog = function () {

	    /**
	     * toggle button status
	     *
	     * @param {jQuery} $btn
	     * @param {Boolean} isEnable
	     */
	    var toggleBtn = function ($btn, isEnable) {
	      $btn.toggleClass('disabled', !isEnable);
	      $btn.attr('disabled', !isEnable);
	    };

	    /**
	     * show image dialog
	     *
	     * @param {jQuery} $editable
	     * @param {jQuery} $dialog
	     * @return {Promise}
	     */
	    this.showImageDialog = function ($editable, $dialog) {
	      return $.Deferred(function (deferred) {
	        var $imageDialog = $dialog.find('.note-image-dialog');

	        var $imageInput = $dialog.find('.note-image-input'),
	            $imageUrl = $dialog.find('.note-image-url'),
	            $imageBtn = $dialog.find('.note-image-btn');

	        $imageDialog.one('shown.bs.modal', function () {
	          // Cloning imageInput to clear element.
	          $imageInput.replaceWith($imageInput.clone()
	            .on('change', function () {
	              deferred.resolve(this.files);
	              $imageDialog.modal('hide');
	            })
	            .val('')
	          );

	          $imageBtn.click(function (event) {
	            event.preventDefault();

	            deferred.resolve($imageUrl.val());
	            $imageDialog.modal('hide');
	          });

	          $imageUrl.on('keyup paste', function (event) {
	            var url;
	            
	            if (event.type === 'paste') {
	              url = event.originalEvent.clipboardData.getData('text');
	            } else {
	              url = $imageUrl.val();
	            }
	            
	            toggleBtn($imageBtn, url);
	          }).val('').trigger('focus');
	        }).one('hidden.bs.modal', function () {
	          $imageInput.off('change');
	          $imageUrl.off('keyup paste');
	          $imageBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        }).modal('show');
	      });
	    };

	    /**
	     * Show video dialog and set event handlers on dialog controls.
	     *
	     * @param {jQuery} $dialog 
	     * @param {Object} videoInfo 
	     * @return {Promise}
	     */
	    this.showVideoDialog = function ($editable, $dialog, videoInfo) {
	      return $.Deferred(function (deferred) {
	        var $videoDialog = $dialog.find('.note-video-dialog');
	        var $videoUrl = $videoDialog.find('.note-video-url'),
	            $videoBtn = $videoDialog.find('.note-video-btn');

	        $videoDialog.one('shown.bs.modal', function () {
	          $videoUrl.val(videoInfo.text).keyup(function () {
	            toggleBtn($videoBtn, $videoUrl.val());
	          }).trigger('keyup').trigger('focus');

	          $videoBtn.click(function (event) {
	            event.preventDefault();

	            deferred.resolve($videoUrl.val());
	            $videoDialog.modal('hide');
	          });
	        }).one('hidden.bs.modal', function () {
	          // dettach events
	          $videoUrl.off('keyup');
	          $videoBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        }).modal('show');
	      });
	    };

	    /**
	     * Show link dialog and set event handlers on dialog controls.
	     *
	     * @param {jQuery} $dialog
	     * @param {Object} linkInfo
	     * @return {Promise}
	     */
	    this.showLinkDialog = function ($editable, $dialog, linkInfo) {
	      return $.Deferred(function (deferred) {
	        var $linkDialog = $dialog.find('.note-link-dialog');

	        var $linkText = $linkDialog.find('.note-link-text'),
	        $linkUrl = $linkDialog.find('.note-link-url'),
	        $linkBtn = $linkDialog.find('.note-link-btn'),
	        $openInNewWindow = $linkDialog.find('input[type=checkbox]');

	        $linkDialog.one('shown.bs.modal', function () {
	          $linkText.val(linkInfo.text);

	          $linkText.keyup(function () {
	            // if linktext was modified by keyup,
	            // stop cloning text from linkUrl
	            linkInfo.text = $linkText.val();
	          });

	          // if no url was given, copy text to url
	          if (!linkInfo.url) {
	            linkInfo.url = linkInfo.text;
	            toggleBtn($linkBtn, linkInfo.text);
	          }

	          $linkUrl.keyup(function () {
	            toggleBtn($linkBtn, $linkUrl.val());
	            // display same link on `Text to display` input
	            // when create a new link
	            if (!linkInfo.text) {
	              $linkText.val($linkUrl.val());
	            }
	          }).val(linkInfo.url).trigger('focus').trigger('select');

	          $openInNewWindow.prop('checked', linkInfo.newWindow);

	          $linkBtn.one('click', function (event) {
	            event.preventDefault();

	            deferred.resolve({
	              range: linkInfo.range,
	              url: $linkUrl.val(),
	              text: $linkText.val(),
	              newWindow: $openInNewWindow.is(':checked')
	            });
	            $linkDialog.modal('hide');
	          });
	        }).one('hidden.bs.modal', function () {
	          // dettach events
	          $linkText.off('keyup');
	          $linkUrl.off('keyup');
	          $linkBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        }).modal('show');
	      }).promise();
	    };

	    /**
	     * show help dialog
	     *
	     * @param {jQuery} $dialog
	     */
	    this.showHelpDialog = function ($editable, $dialog) {
	      return $.Deferred(function (deferred) {
	        var $helpDialog = $dialog.find('.note-help-dialog');

	        $helpDialog.one('hidden.bs.modal', function () {
	          deferred.resolve();
	        }).modal('show');
	      }).promise();
	    };
	  };


	  var CodeMirror;
	  if (agent.hasCodeMirror) {
	    if (agent.isSupportAmd) {
	      require(['CodeMirror'], function (cm) {
	        CodeMirror = cm;
	      });
	    } else {
	      CodeMirror = window.CodeMirror;
	    }
	  }

	  /**
	   * EventHandler
	   */
	  var EventHandler = function () {
	    var $window = $(window);
	    var $document = $(document);
	    var $scrollbar = $('html, body');

	    var editor = new Editor();
	    var toolbar = new Toolbar(), popover = new Popover();
	    var handle = new Handle(), dialog = new Dialog();

	    /**
	     * returns makeLayoutInfo from editor's descendant node.
	     *
	     * @param {Node} descendant
	     * @returns {Object}
	     */
	    var makeLayoutInfo = function (descendant) {
	      var $target = $(descendant).closest('.note-editor, .note-air-editor, .note-air-layout');

	      if (!$target.length) { return null; }

	      var $editor;
	      if ($target.is('.note-editor, .note-air-editor')) {
	        $editor = $target;
	      } else {
	        $editor = $('#note-editor-' + list.last($target.attr('id').split('-')));
	      }

	      return dom.buildLayoutInfo($editor);
	    };

	    /**
	     * insert Images from file array.
	     *
	     * @param {jQuery} $editable
	     * @param {File[]} files
	     */
	    var insertImages = function ($editable, files) {
	      var callbacks = $editable.data('callbacks');

	      // If onImageUpload options setted
	      if (callbacks.onImageUpload) {
	        callbacks.onImageUpload(files, editor, $editable);
	      // else insert Image as dataURL
	      } else {
	        $.each(files, function (idx, file) {
	          var filename = file.name;
	          async.readFileAsDataURL(file).then(function (sDataURL) {
	            editor.insertImage($editable, sDataURL, filename);
	          }).fail(function () {
	            if (callbacks.onImageUploadError) {
	              callbacks.onImageUploadError();
	            }
	          });
	        });
	      }
	    };

	    var commands = {
	      /**
	       * @param {Object} layoutInfo
	       */
	      showLinkDialog: function (layoutInfo) {
	        var $editor = layoutInfo.editor(),
	            $dialog = layoutInfo.dialog(),
	            $editable = layoutInfo.editable(),
	            linkInfo = editor.getLinkInfo($editable);

	        var options = $editor.data('options');

	        editor.saveRange($editable);
	        dialog.showLinkDialog($editable, $dialog, linkInfo).then(function (linkInfo) {
	          editor.restoreRange($editable);
	          editor.createLink($editable, linkInfo, options);
	          // hide popover after creating link
	          popover.hide(layoutInfo.popover());
	        }).fail(function () {
	          editor.restoreRange($editable);
	        });
	      },

	      /**
	       * @param {Object} layoutInfo
	       */
	      showImageDialog: function (layoutInfo) {
	        var $dialog = layoutInfo.dialog(),
	            $editable = layoutInfo.editable();

	        editor.saveRange($editable);
	        dialog.showImageDialog($editable, $dialog).then(function (data) {
	          editor.restoreRange($editable);

	          if (typeof data === 'string') {
	            // image url
	            editor.insertImage($editable, data);
	          } else {
	            // array of files
	            insertImages($editable, data);
	          }
	        }).fail(function () {
	          editor.restoreRange($editable);
	        });
	      },

	      /**
	       * @param {Object} layoutInfo
	       */
	      showVideoDialog: function (layoutInfo) {
	        var $dialog = layoutInfo.dialog(),
	            $editable = layoutInfo.editable(),
	            videoInfo = editor.getVideoInfo($editable);

	        editor.saveRange($editable);
	        dialog.showVideoDialog($editable, $dialog, videoInfo).then(function (sUrl) {
	          editor.restoreRange($editable);
	          editor.insertVideo($editable, sUrl);
	        }).fail(function () {
	          editor.restoreRange($editable);
	        });
	      },

	      /**
	       * @param {Object} layoutInfo
	       */
	      showHelpDialog: function (layoutInfo) {
	        var $dialog = layoutInfo.dialog(),
	            $editable = layoutInfo.editable();

	        editor.saveRange($editable, true);
	        dialog.showHelpDialog($editable, $dialog).then(function () {
	          editor.restoreRange($editable);
	        });
	      },

	      fullscreen: function (layoutInfo) {
	        var $editor = layoutInfo.editor(),
	        $toolbar = layoutInfo.toolbar(),
	        $editable = layoutInfo.editable(),
	        $codable = layoutInfo.codable();

	        var options = $editor.data('options');

	        var resize = function (size) {
	          $editor.css('width', size.w);
	          $editable.css('height', size.h);
	          $codable.css('height', size.h);
	          if ($codable.data('cmeditor')) {
	            $codable.data('cmeditor').setsize(null, size.h);
	          }
	        };

	        $editor.toggleClass('fullscreen');
	        var isFullscreen = $editor.hasClass('fullscreen');
	        if (isFullscreen) {
	          $editable.data('orgheight', $editable.css('height'));

	          $window.on('resize', function () {
	            resize({
	              w: $window.width(),
	              h: $window.height() - $toolbar.outerHeight()
	            });
	          }).trigger('resize');

	          $scrollbar.css('overflow', 'hidden');
	        } else {
	          $window.off('resize');
	          resize({
	            w: options.width || '',
	            h: $editable.data('orgheight')
	          });
	          $scrollbar.css('overflow', 'visible');
	        }

	        toolbar.updateFullscreen($toolbar, isFullscreen);
	      },

	      codeview: function (layoutInfo) {
	        var $editor = layoutInfo.editor(),
	        $toolbar = layoutInfo.toolbar(),
	        $editable = layoutInfo.editable(),
	        $codable = layoutInfo.codable(),
	        $popover = layoutInfo.popover();

	        var options = $editor.data('options');

	        var cmEditor, server;

	        $editor.toggleClass('codeview');

	        var isCodeview = $editor.hasClass('codeview');
	        if (isCodeview) {
	          $codable.val(dom.html($editable, true));
	          $codable.height($editable.height());
	          toolbar.deactivate($toolbar);
	          popover.hide($popover);
	          $codable.focus();

	          // activate CodeMirror as codable
	          if (agent.hasCodeMirror) {
	            cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);

	            // CodeMirror TernServer
	            if (options.codemirror.tern) {
	              server = new CodeMirror.TernServer(options.codemirror.tern);
	              cmEditor.ternServer = server;
	              cmEditor.on('cursorActivity', function (cm) {
	                server.updateArgHints(cm);
	              });
	            }

	            // CodeMirror hasn't Padding.
	            cmEditor.setSize(null, $editable.outerHeight());
	            $codable.data('cmEditor', cmEditor);
	          }
	        } else {
	          // deactivate CodeMirror as codable
	          if (agent.hasCodeMirror) {
	            cmEditor = $codable.data('cmEditor');
	            $codable.val(cmEditor.getValue());
	            cmEditor.toTextArea();
	          }

	          $editable.html(dom.value($codable) || dom.emptyPara);
	          $editable.height(options.height ? $codable.height() : 'auto');

	          toolbar.activate($toolbar);
	          $editable.focus();
	        }

	        toolbar.updateCodeview(layoutInfo.toolbar(), isCodeview);
	      }
	    };

	    var hMousedown = function (event) {
	      //preventDefault Selection for FF, IE8+
	      if (dom.isImg(event.target)) {
	        event.preventDefault();
	      }
	    };

	    var hToolbarAndPopoverUpdate = function (event) {
	      // delay for range after mouseup
	      setTimeout(function () {
	        var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
	        var styleInfo = editor.currentStyle(event.target);
	        if (!styleInfo) { return; }

	        var isAirMode = layoutInfo.editor().data('options').airMode;
	        if (!isAirMode) {
	          toolbar.update(layoutInfo.toolbar(), styleInfo);
	        }

	        popover.update(layoutInfo.popover(), styleInfo, isAirMode);
	        handle.update(layoutInfo.handle(), styleInfo, isAirMode);
	      }, 0);
	    };

	    var hScroll = function (event) {
	      var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
	      //hide popover and handle when scrolled
	      popover.hide(layoutInfo.popover());
	      handle.hide(layoutInfo.handle());
	    };

	    /**
	     * paste clipboard image
	     *
	     * @param {Event} event
	     */
	    var hPasteClipboardImage = function (event) {
	      var clipboardData = event.originalEvent.clipboardData;
	      if (!clipboardData || !clipboardData.items || !clipboardData.items.length) {
	        return;
	      }

	      var layoutInfo = makeLayoutInfo(event.currentTarget || event.target),
	          $editable = layoutInfo.editable();

	      var item = list.head(clipboardData.items);
	      var isClipboardImage = item.kind === 'file' && item.type.indexOf('image/') !== -1;

	      if (isClipboardImage) {
	        insertImages($editable, [item.getAsFile()]);
	      }

	      editor.afterCommand($editable);
	    };

	    /**
	     * `mousedown` event handler on $handle
	     *  - controlSizing: resize image
	     *
	     * @param {MouseEvent} event
	     */
	    var hHandleMousedown = function (event) {
	      if (dom.isControlSizing(event.target)) {
	        event.preventDefault();
	        event.stopPropagation();

	        var layoutInfo = makeLayoutInfo(event.target),
	            $handle = layoutInfo.handle(), $popover = layoutInfo.popover(),
	            $editable = layoutInfo.editable(),
	            $editor = layoutInfo.editor();

	        var target = $handle.find('.note-control-selection').data('target'),
	            $target = $(target), posStart = $target.offset(),
	            scrollTop = $document.scrollTop();

	        var isAirMode = $editor.data('options').airMode;

	        $document.on('mousemove', function (event) {
	          editor.resizeTo({
	            x: event.clientX - posStart.left,
	            y: event.clientY - (posStart.top - scrollTop)
	          }, $target, !event.shiftKey);

	          handle.update($handle, {image: target}, isAirMode);
	          popover.update($popover, {image: target}, isAirMode);
	        }).one('mouseup', function () {
	          $document.off('mousemove');
	        });

	        if (!$target.data('ratio')) { // original ratio.
	          $target.data('ratio', $target.height() / $target.width());
	        }

	        editor.afterCommand($editable);
	      }
	    };

	    var hToolbarAndPopoverMousedown = function (event) {
	      // prevent default event when insertTable (FF, Webkit)
	      var $btn = $(event.target).closest('[data-event]');
	      if ($btn.length) {
	        event.preventDefault();
	      }
	    };

	    var hToolbarAndPopoverClick = function (event) {
	      var $btn = $(event.target).closest('[data-event]');

	      if ($btn.length) {
	        var eventName = $btn.attr('data-event'),
	            value = $btn.attr('data-value'),
	            hide = $btn.attr('data-hide');

	        var layoutInfo = makeLayoutInfo(event.target);

	        event.preventDefault();

	        // before command: detect control selection element($target)
	        var $target;
	        if ($.inArray(eventName, ['resize', 'floatMe', 'removeMedia', 'imageShape']) !== -1) {
	          var $selection = layoutInfo.handle().find('.note-control-selection');
	          $target = $($selection.data('target'));
	        }

	        // If requested, hide the popover when the button is clicked.
	        // Useful for things like showHelpDialog.
	        if (hide) {
	          $btn.parents('.popover').hide();
	        }
	        
	        if (editor[eventName]) { // on command
	          var $editable = layoutInfo.editable();
	          $editable.trigger('focus');
	          editor[eventName]($editable, value, $target);
	        } else if (commands[eventName]) {
	          commands[eventName].call(this, layoutInfo);
	        }

	        // after command
	        if ($.inArray(eventName, ['backColor', 'foreColor']) !== -1) {
	          var options = layoutInfo.editor().data('options', options);
	          var module = options.airMode ? popover : toolbar;
	          module.updateRecentColor(list.head($btn), eventName, value);
	        }

	        hToolbarAndPopoverUpdate(event);
	      }
	    };

	    var EDITABLE_PADDING = 24;
	    /**
	     * `mousedown` event handler on statusbar
	     *
	     * @param {MouseEvent} event
	     */
	    var hStatusbarMousedown = function (event) {
	      event.preventDefault();
	      event.stopPropagation();

	      var $editable = makeLayoutInfo(event.target).editable();
	      var nEditableTop = $editable.offset().top - $document.scrollTop();

	      var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
	      var options = layoutInfo.editor().data('options');

	      $document.on('mousemove', function (event) {
	        var nHeight = event.clientY - (nEditableTop + EDITABLE_PADDING);

	        nHeight = (options.minHeight > 0) ? Math.max(nHeight, options.minHeight) : nHeight;
	        nHeight = (options.maxHeight > 0) ? Math.min(nHeight, options.maxHeight) : nHeight;

	        $editable.height(nHeight);
	      }).one('mouseup', function () {
	        $document.off('mousemove');
	      });
	    };

	    var PX_PER_EM = 18;
	    var hDimensionPickerMove = function (event, options) {
	      var $picker = $(event.target.parentNode); // target is mousecatcher
	      var $dimensionDisplay = $picker.next();
	      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
	      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
	      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');

	      var posOffset;
	      // HTML5 with jQuery - e.offsetX is undefined in Firefox
	      if (event.offsetX === undefined) {
	        var posCatcher = $(event.target).offset();
	        posOffset = {
	          x: event.pageX - posCatcher.left,
	          y: event.pageY - posCatcher.top
	        };
	      } else {
	        posOffset = {
	          x: event.offsetX,
	          y: event.offsetY
	        };
	      }

	      var dim = {
	        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
	        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
	      };

	      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
	      $catcher.attr('data-value', dim.c + 'x' + dim.r);

	      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {
	        $unhighlighted.css({ width: dim.c + 1 + 'em'});
	      }

	      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {
	        $unhighlighted.css({ height: dim.r + 1 + 'em'});
	      }

	      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
	    };

	    /**
	     * Drag and Drop Events
	     *
	     * @param {Object} layoutInfo - layout Informations
	     * @param {Boolean} disableDragAndDrop
	     */
	    var handleDragAndDropEvent = function (layoutInfo, disableDragAndDrop) {
	      if (disableDragAndDrop) {
	        // prevent default drop event
	        $document.on('drop', function (e) {
	          e.preventDefault();
	        });
	      } else {
	        attachDragAndDropEvent(layoutInfo);
	      }
	    };

	    /**
	     * attach Drag and Drop Events
	     *
	     * @param {Object} layoutInfo - layout Informations
	     */
	    var attachDragAndDropEvent = function (layoutInfo) {
	      var collection = $(),
	          $dropzone = layoutInfo.dropzone,
	          $dropzoneMessage = layoutInfo.dropzone.find('.note-dropzone-message');

	      // show dropzone on dragenter when dragging a object to document.
	      $document.on('dragenter', function (e) {
	        var isCodeview = layoutInfo.editor.hasClass('codeview');
	        if (!isCodeview && !collection.length) {
	          layoutInfo.editor.addClass('dragover');
	          $dropzone.width(layoutInfo.editor.width());
	          $dropzone.height(layoutInfo.editor.height());
	          $dropzoneMessage.text('Drag Image Here');
	        }
	        collection = collection.add(e.target);
	      }).on('dragleave', function (e) {
	        collection = collection.not(e.target);
	        if (!collection.length) {
	          layoutInfo.editor.removeClass('dragover');
	        }
	      }).on('drop', function () {
	        collection = $();
	        layoutInfo.editor.removeClass('dragover');
	      });

	      // change dropzone's message on hover.
	      $dropzone.on('dragenter', function () {
	        $dropzone.addClass('hover');
	        $dropzoneMessage.text('Drop Image');
	      }).on('dragleave', function () {
	        $dropzone.removeClass('hover');
	        $dropzoneMessage.text('Drag Image Here');
	      });

	      // attach dropImage
	      $dropzone.on('drop', function (event) {
	        event.preventDefault();

	        var dataTransfer = event.originalEvent.dataTransfer;
	        if (dataTransfer && dataTransfer.files) {
	          var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
	          layoutInfo.editable().focus();
	          insertImages(layoutInfo.editable(), dataTransfer.files);
	        }
	      }).on('dragover', false); // prevent default dragover event
	    };


	    /**
	     * bind KeyMap on keydown
	     *
	     * @param {Object} layoutInfo
	     * @param {Object} keyMap
	     */
	    this.bindKeyMap = function (layoutInfo, keyMap) {
	      var $editor = layoutInfo.editor;
	      var $editable = layoutInfo.editable;

	      layoutInfo = makeLayoutInfo($editable);

	      $editable.on('keydown', function (event) {
	        var aKey = [];

	        // modifier
	        if (event.metaKey) { aKey.push('CMD'); }
	        if (event.ctrlKey && !event.altKey) { aKey.push('CTRL'); }
	        if (event.shiftKey) { aKey.push('SHIFT'); }

	        // keycode
	        var keyName = key.nameFromCode[event.keyCode];
	        if (keyName) { aKey.push(keyName); }

	        var eventName = keyMap[aKey.join('+')];
	        if (eventName) {
	          event.preventDefault();

	          if (editor[eventName]) {
	            editor[eventName]($editable, $editor.data('options'));
	          } else if (commands[eventName]) {
	            commands[eventName].call(this, layoutInfo);
	          }
	        } else if (key.isEdit(event.keyCode)) {
	          editor.afterCommand($editable);
	        }
	      });
	    };

	    /**
	     * attach eventhandler
	     *
	     * @param {Object} layoutInfo - layout Informations
	     * @param {Object} options - user options include custom event handlers
	     * @param {Function} options.enter - enter key handler
	     */
	    this.attach = function (layoutInfo, options) {
	      // handlers for editable
	      this.bindKeyMap(layoutInfo, options.keyMap[agent.isMac ? 'mac' : 'pc']);
	      layoutInfo.editable.on('mousedown', hMousedown);
	      layoutInfo.editable.on('keyup mouseup', hToolbarAndPopoverUpdate);
	      layoutInfo.editable.on('scroll', hScroll);
	      layoutInfo.editable.on('paste', hPasteClipboardImage);

	      // handler for handle and popover
	      layoutInfo.handle.on('mousedown', hHandleMousedown);
	      layoutInfo.popover.on('click', hToolbarAndPopoverClick);
	      layoutInfo.popover.on('mousedown', hToolbarAndPopoverMousedown);

	      // handlers for frame mode (toolbar, statusbar)
	      if (!options.airMode) {
	        // handler for drag and drop
	        handleDragAndDropEvent(layoutInfo, options.disableDragAndDrop);

	        // handler for toolbar
	        layoutInfo.toolbar.on('click', hToolbarAndPopoverClick);
	        layoutInfo.toolbar.on('mousedown', hToolbarAndPopoverMousedown);

	        // handler for statusbar
	        if (!options.disableResizeEditor) {
	          layoutInfo.statusbar.on('mousedown', hStatusbarMousedown);
	        }
	      }

	      // handler for table dimension
	      var $catcherContainer = options.airMode ? layoutInfo.popover :
	                                                layoutInfo.toolbar;
	      var $catcher = $catcherContainer.find('.note-dimension-picker-mousecatcher');
	      $catcher.css({
	        width: options.insertTableMaxSize.col + 'em',
	        height: options.insertTableMaxSize.row + 'em'
	      }).on('mousemove', function (event) {
	        hDimensionPickerMove(event, options);
	      });

	      // save options on editor
	      layoutInfo.editor.data('options', options);

	      // ret styleWithCSS for backColor / foreColor clearing with 'inherit'.
	      if (options.styleWithSpan && !agent.isMSIE) {
	        // protect FF Error: NS_ERROR_FAILURE: Failure
	        setTimeout(function () {
	          document.execCommand('styleWithCSS', 0, true);
	        }, 0);
	      }

	      // History
	      var history = new History(layoutInfo.editable);
	      layoutInfo.editable.data('NoteHistory', history);

	      // basic event callbacks (lowercase)
	      // enter, focus, blur, keyup, keydown
	      if (options.onenter) {
	        layoutInfo.editable.keypress(function (event) {
	          if (event.keyCode === key.ENTER) { options.onenter(event); }
	        });
	      }

	      if (options.onfocus) { layoutInfo.editable.focus(options.onfocus); }
	      if (options.onblur) { layoutInfo.editable.blur(options.onblur); }
	      if (options.onkeyup) { layoutInfo.editable.keyup(options.onkeyup); }
	      if (options.onkeydown) { layoutInfo.editable.keydown(options.onkeydown); }
	      if (options.onpaste) { layoutInfo.editable.on('paste', options.onpaste); }

	      // callbacks for advanced features (camel)
	      if (options.onToolbarClick) { layoutInfo.toolbar.click(options.onToolbarClick); }
	      if (options.onChange) {
	        var hChange = function () {
	          editor.triggerOnChange(layoutInfo.editable);
	        };

	        if (agent.isMSIE) {
	          var sDomEvents = 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted';
	          layoutInfo.editable.on(sDomEvents, hChange);
	        } else {
	          layoutInfo.editable.on('input', hChange);
	        }
	      }

	      // All editor status will be saved on editable with jquery's data
	      // for support multiple editor with singleton object.
	      layoutInfo.editable.data('callbacks', {
	        onChange: options.onChange,
	        onAutoSave: options.onAutoSave,
	        onImageUpload: options.onImageUpload,
	        onImageUploadError: options.onImageUploadError,
	        onFileUpload: options.onFileUpload,
	        onFileUploadError: options.onFileUpload
	      });
	    };

	    this.dettach = function (layoutInfo, options) {
	      layoutInfo.editable.off();

	      layoutInfo.popover.off();
	      layoutInfo.handle.off();
	      layoutInfo.dialog.off();

	      if (!options.airMode) {
	        layoutInfo.dropzone.off();
	        layoutInfo.toolbar.off();
	        layoutInfo.statusbar.off();
	      }
	    };
	  };

	  /**
	   * renderer
	   *
	   * rendering toolbar and editable
	   */
	  var Renderer = function () {

	    /**
	     * bootstrap button template
	     *
	     * @param {String} label
	     * @param {Object} [options]
	     * @param {String} [options.event]
	     * @param {String} [options.value]
	     * @param {String} [options.title]
	     * @param {String} [options.dropdown]
	     * @param {String} [options.hide]
	     */
	    var tplButton = function (label, options) {
	      var event = options.event;
	      var value = options.value;
	      var title = options.title;
	      var className = options.className;
	      var dropdown = options.dropdown;
	      var hide = options.hide;

	      return '<button type="button"' +
	                 ' class="btn btn-default btn-sm btn-small' +
	                   (className ? ' ' + className : '') +
	                   (dropdown ? ' dropdown-toggle' : '') +
	                 '"' +
	                 (dropdown ? ' data-toggle="dropdown"' : '') +
	                 (title ? ' title="' + title + '"' : '') +
	                 (event ? ' data-event="' + event + '"' : '') +
	                 (value ? ' data-value=\'' + value + '\'' : '') +
	                 (hide ? ' data-hide=\'' + hide + '\'' : '') +
	                 ' tabindex="-1">' +
	               label +
	               (dropdown ? ' <span class="caret"></span>' : '') +
	             '</button>' +
	             (dropdown || '');
	    };

	    /**
	     * bootstrap icon button template
	     *
	     * @param {String} iconClassName
	     * @param {Object} [options]
	     * @param {String} [options.event]
	     * @param {String} [options.value]
	     * @param {String} [options.title]
	     * @param {String} [options.dropdown]
	     */
	    var tplIconButton = function (iconClassName, options) {
	      var label = '<i class="' + iconClassName + '"></i>';
	      return tplButton(label, options);
	    };

	    /**
	     * bootstrap popover template
	     *
	     * @param {String} className
	     * @param {String} content
	     */
	    var tplPopover = function (className, content) {
	      return '<div class="' + className + ' popover bottom in" style="display: none;">' +
	               '<div class="arrow"></div>' +
	               '<div class="popover-content">' +
	                 content +
	               '</div>' +
	             '</div>';
	    };

	    /**
	     * bootstrap dialog template
	     *
	     * @param {String} className
	     * @param {String} [title]
	     * @param {String} body
	     * @param {String} [footer]
	     */
	    var tplDialog = function (className, title, body, footer) {
	      return '<div class="' + className + ' modal" aria-hidden="false">' +
	               '<div class="modal-dialog">' +
	                 '<div class="modal-content">' +
	                   (title ?
	                   '<div class="modal-header">' +
	                     '<button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button>' +
	                     '<h4 class="modal-title">' + title + '</h4>' +
	                   '</div>' : ''
	                   ) +
	                   '<form class="note-modal-form">' +
	                     '<div class="modal-body">' +
	                       '<div class="row-fluid">' + body + '</div>' +
	                     '</div>' +
	                     (footer ?
	                     '<div class="modal-footer">' + footer + '</div>' : ''
	                     ) +
	                   '</form>' +
	                 '</div>' +
	               '</div>' +
	             '</div>';
	    };

	    var tplButtonInfo = {
	      picture: function (lang) {
	        return tplIconButton('fa fa-picture-o icon-picture', {
	          event: 'showImageDialog',
	          title: lang.image.image,
	          hide: true
	        });
	      },
	      link: function (lang) {
	        return tplIconButton('fa fa-link icon-link', {
	          event: 'showLinkDialog',
	          title: lang.link.link,
	          hide: true
	        });
	      },
	      video: function (lang) {
	        return tplIconButton('fa fa-youtube-play icon-play', {
	          event: 'showVideoDialog',
	          title: lang.video.video,
	          hide: true
	        });
	      },
	      table: function (lang) {
	        var dropdown = '<ul class="note-table dropdown-menu">' +
	                         '<div class="note-dimension-picker">' +
	                           '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>' +
	                           '<div class="note-dimension-picker-highlighted"></div>' +
	                           '<div class="note-dimension-picker-unhighlighted"></div>' +
	                         '</div>' +
	                         '<div class="note-dimension-display"> 1 x 1 </div>' +
	                       '</ul>';
	        return tplIconButton('fa fa-table icon-table', {
	          title: lang.table.table,
	          dropdown: dropdown
	        });
	      },
	      style: function (lang, options) {
	        var items = options.styleTags.reduce(function (memo, v) {
	          var label = lang.style[v === 'p' ? 'normal' : v];
	          return memo + '<li><a data-event="formatBlock" href="#" data-value="' + v + '">' +
	                   (
	                     (v === 'p' || v === 'pre') ? label :
	                     '<' + v + '>' + label + '</' + v + '>'
	                   ) +
	                 '</a></li>';
	        }, '');

	        return tplIconButton('fa fa-magic icon-magic', {
	          title: lang.style.style,
	          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
	        });
	      },
	      fontname: function (lang, options) {
	        var items = options.fontNames.reduce(function (memo, v) {
	          if (!agent.isFontInstalled(v)) { return memo; }
	          return memo + '<li><a data-event="fontName" href="#" data-value="' + v + '">' +
	                          '<i class="fa fa-check icon-ok"></i> ' + v +
	                        '</a></li>';
	        }, '');
	        var label = '<span class="note-current-fontname">' +
	                       options.defaultFontName +
	                     '</span>';
	        return tplButton(label, {
	          title: lang.font.name,
	          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
	        });
	      },
	      fontsize: function (lang, options) {
	        var items = options.fontSizes.reduce(function (memo, v) {
	          return memo + '<li><a data-event="fontSize" href="#" data-value="' + v + '">' +
	                          '<i class="fa fa-check icon-ok"></i> ' + v +
	                        '</a></li>';
	        }, '');

	        var label = '<span class="note-current-fontsize">11</span>';
	        return tplButton(label, {
	          title: lang.font.size,
	          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
	        });
	      },

	      color: function (lang) {
	        var colorButtonLabel = '<i class="fa fa-font icon-font" style="color:black;background-color:yellow;"></i>';
	        var colorButton = tplButton(colorButtonLabel, {
	          className: 'note-recent-color',
	          title: lang.color.recent,
	          event: 'color',
	          value: '{"backColor":"yellow"}'
	        });

	        var dropdown = '<ul class="dropdown-menu">' +
	                         '<li>' +
	                           '<div class="btn-group">' +
	                             '<div class="note-palette-title">' + lang.color.background + '</div>' +
	                             '<div class="note-color-reset" data-event="backColor"' +
	                               ' data-value="inherit" title="' + lang.color.transparent + '">' +
	                               lang.color.setTransparent +
	                             '</div>' +
	                             '<div class="note-color-palette" data-target-event="backColor"></div>' +
	                           '</div>' +
	                           '<div class="btn-group">' +
	                             '<div class="note-palette-title">' + lang.color.foreground + '</div>' +
	                             '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + lang.color.reset + '">' +
	                               lang.color.resetToDefault +
	                             '</div>' +
	                             '<div class="note-color-palette" data-target-event="foreColor"></div>' +
	                           '</div>' +
	                         '</li>' +
	                       '</ul>';

	        var moreButton = tplButton('', {
	          title: lang.color.more,
	          dropdown: dropdown
	        });

	        return colorButton + moreButton;
	      },
	      bold: function (lang) {
	        return tplIconButton('fa fa-bold icon-bold', {
	          event: 'bold',
	          title: lang.font.bold
	        });
	      },
	      italic: function (lang) {
	        return tplIconButton('fa fa-italic icon-italic', {
	          event: 'italic',
	          title: lang.font.italic
	        });
	      },
	      underline: function (lang) {
	        return tplIconButton('fa fa-underline icon-underline', {
	          event: 'underline',
	          title: lang.font.underline
	        });
	      },
	      strikethrough: function (lang) {
	        return tplIconButton('fa fa-strikethrough icon-strikethrough', {
	          event: 'strikethrough',
	          title: lang.font.strikethrough
	        });
	      },
	      superscript: function (lang) {
	        return tplIconButton('fa fa-superscript icon-superscript', {
	          event: 'superscript',
	          title: lang.font.superscript
	        });
	      },
	      subscript: function (lang) {
	        return tplIconButton('fa fa-subscript icon-subscript', {
	          event: 'subscript',
	          title: lang.font.subscript
	        });
	      },
	      clear: function (lang) {
	        return tplIconButton('fa fa-eraser icon-eraser', {
	          event: 'removeFormat',
	          title: lang.font.clear
	        });
	      },
	      ul: function (lang) {
	        return tplIconButton('fa fa-list-ul icon-list-ul', {
	          event: 'insertUnorderedList',
	          title: lang.lists.unordered
	        });
	      },
	      ol: function (lang) {
	        return tplIconButton('fa fa-list-ol icon-list-ol', {
	          event: 'insertOrderedList',
	          title: lang.lists.ordered
	        });
	      },
	      paragraph: function (lang) {
	        var leftButton = tplIconButton('fa fa-align-left icon-align-left', {
	          title: lang.paragraph.left,
	          event: 'justifyLeft'
	        });
	        var centerButton = tplIconButton('fa fa-align-center icon-align-center', {
	          title: lang.paragraph.center,
	          event: 'justifyCenter'
	        });
	        var rightButton = tplIconButton('fa fa-align-right icon-align-right', {
	          title: lang.paragraph.right,
	          event: 'justifyRight'
	        });
	        var justifyButton = tplIconButton('fa fa-align-justify icon-align-justify', {
	          title: lang.paragraph.justify,
	          event: 'justifyFull'
	        });

	        var outdentButton = tplIconButton('fa fa-outdent icon-indent-left', {
	          title: lang.paragraph.outdent,
	          event: 'outdent'
	        });
	        var indentButton = tplIconButton('fa fa-indent icon-indent-right', {
	          title: lang.paragraph.indent,
	          event: 'indent'
	        });

	        var dropdown = '<div class="dropdown-menu">' +
	                         '<div class="note-align btn-group">' +
	                           leftButton + centerButton + rightButton + justifyButton +
	                         '</div>' +
	                         '<div class="note-list btn-group">' +
	                           indentButton + outdentButton +
	                         '</div>' +
	                       '</div>';

	        return tplIconButton('fa fa-align-left icon-align-left', {
	          title: lang.paragraph.paragraph,
	          dropdown: dropdown
	        });
	      },
	      height: function (lang, options) {
	        var items = options.lineHeights.reduce(function (memo, v) {
	          return memo + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(v) + '">' +
	                          '<i class="fa fa-check icon-ok"></i> ' + v +
	                        '</a></li>';
	        }, '');

	        return tplIconButton('fa fa-text-height icon-text-height', {
	          title: lang.font.height,
	          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
	        });

	      },
	      help: function (lang) {
	        return tplIconButton('fa fa-question icon-question', {
	          event: 'showHelpDialog',
	          title: lang.options.help,
	          hide: true
	        });
	      },
	      fullscreen: function (lang) {
	        return tplIconButton('fa fa-arrows-alt icon-fullscreen', {
	          event: 'fullscreen',
	          title: lang.options.fullscreen
	        });
	      },
	      codeview: function (lang) {
	        return tplIconButton('fa fa-code icon-code', {
	          event: 'codeview',
	          title: lang.options.codeview
	        });
	      },
	      undo: function (lang) {
	        return tplIconButton('fa fa-undo icon-undo', {
	          event: 'undo',
	          title: lang.history.undo
	        });
	      },
	      redo: function (lang) {
	        return tplIconButton('fa fa-repeat icon-repeat', {
	          event: 'redo',
	          title: lang.history.redo
	        });
	      },
	      hr: function (lang) {
	        return tplIconButton('fa fa-minus icon-hr', {
	          event: 'insertHorizontalRule',
	          title: lang.hr.insert
	        });
	      }
	    };

	    var tplPopovers = function (lang, options) {
	      var tplLinkPopover = function () {
	        var linkButton = tplIconButton('fa fa-edit icon-edit', {
	          title: lang.link.edit,
	          event: 'showLinkDialog',
	          hide: true
	        });
	        var unlinkButton = tplIconButton('fa fa-unlink icon-unlink', {
	          title: lang.link.unlink,
	          event: 'unlink'
	        });
	        var content = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;' +
	                      '<div class="note-insert btn-group">' +
	                        linkButton + unlinkButton +
	                      '</div>';
	        return tplPopover('note-link-popover', content);
	      };

	      var tplImagePopover = function () {
	        var fullButton = tplButton('<span class="note-fontsize-10">100%</span>', {
	          title: lang.image.resizeFull,
	          event: 'resize',
	          value: '1'
	        });
	        var halfButton = tplButton('<span class="note-fontsize-10">50%</span>', {
	          title: lang.image.resizeHalf,
	          event: 'resize',
	          value: '0.5'
	        });
	        var quarterButton = tplButton('<span class="note-fontsize-10">25%</span>', {
	          title: lang.image.resizeQuarter,
	          event: 'resize',
	          value: '0.25'
	        });

	        var leftButton = tplIconButton('fa fa-align-left icon-align-left', {
	          title: lang.image.floatLeft,
	          event: 'floatMe',
	          value: 'left'
	        });
	        var rightButton = tplIconButton('fa fa-align-right icon-align-right', {
	          title: lang.image.floatRight,
	          event: 'floatMe',
	          value: 'right'
	        });
	        var justifyButton = tplIconButton('fa fa-align-justify icon-align-justify', {
	          title: lang.image.floatNone,
	          event: 'floatMe',
	          value: 'none'
	        });

	        var roundedButton = tplIconButton('fa fa-square icon-unchecked', {
	          title: lang.image.shapeRounded,
	          event: 'imageShape',
	          value: 'img-rounded'
	        });
	        var circleButton = tplIconButton('fa fa-circle-o icon-circle-blank', {
	          title: lang.image.shapeCircle,
	          event: 'imageShape',
	          value: 'img-circle'
	        });
	        var thumbnailButton = tplIconButton('fa fa-picture-o icon-picture', {
	          title: lang.image.shapeThumbnail,
	          event: 'imageShape',
	          value: 'img-thumbnail'
	        });
	        var noneButton = tplIconButton('fa fa-times icon-times', {
	          title: lang.image.shapeNone,
	          event: 'imageShape',
	          value: ''
	        });

	        var removeButton = tplIconButton('fa fa-trash-o icon-trash', {
	          title: lang.image.remove,
	          event: 'removeMedia',
	          value: 'none'
	        });

	        var content = '<div class="btn-group">' + fullButton + halfButton + quarterButton + '</div>' +
	                      '<div class="btn-group">' + leftButton + rightButton + justifyButton + '</div>' +
	                      '<div class="btn-group">' + roundedButton + circleButton + thumbnailButton + noneButton + '</div>' +
	                      '<div class="btn-group">' + removeButton + '</div>';
	        return tplPopover('note-image-popover', content);
	      };

	      var tplAirPopover = function () {
	        var content = '';
	        for (var idx = 0, len = options.airPopover.length; idx < len; idx ++) {
	          var group = options.airPopover[idx];
	          content += '<div class="note-' + group[0] + ' btn-group">';
	          for (var i = 0, lenGroup = group[1].length; i < lenGroup; i++) {
	            content += tplButtonInfo[group[1][i]](lang, options);
	          }
	          content += '</div>';
	        }

	        return tplPopover('note-air-popover', content);
	      };

	      return '<div class="note-popover">' +
	               tplLinkPopover() +
	               tplImagePopover() +
	               (options.airMode ?  tplAirPopover() : '') +
	             '</div>';
	    };

	    var tplHandles = function () {
	      return '<div class="note-handle">' +
	               '<div class="note-control-selection">' +
	                 '<div class="note-control-selection-bg"></div>' +
	                 '<div class="note-control-holder note-control-nw"></div>' +
	                 '<div class="note-control-holder note-control-ne"></div>' +
	                 '<div class="note-control-holder note-control-sw"></div>' +
	                 '<div class="note-control-sizing note-control-se"></div>' +
	                 '<div class="note-control-selection-info"></div>' +
	               '</div>' +
	             '</div>';
	    };

	    /**
	     * shortcut table template
	     * @param {String} title
	     * @param {String} body
	     */
	    var tplShortcut = function (title, body) {
	      return '<table class="note-shortcut">' +
	               '<thead>' +
	                 '<tr><th></th><th>' + title + '</th></tr>' +
	               '</thead>' +
	               '<tbody>' + body + '</tbody>' +
	             '</table>';
	    };

	    var tplShortcutText = function (lang) {
	      var body = '<tr><td>⌘ + B</td><td>' + lang.font.bold + '</td></tr>' +
	                 '<tr><td>⌘ + I</td><td>' + lang.font.italic + '</td></tr>' +
	                 '<tr><td>⌘ + U</td><td>' + lang.font.underline + '</td></tr>' +
	                 '<tr><td>⌘ + ⇧ + S</td><td>' + lang.font.strikethrough + '</td></tr>' +
	                 '<tr><td>⌘ + \\</td><td>' + lang.font.clear + '</td></tr>';

	      return tplShortcut(lang.shortcut.textFormatting, body);
	    };

	    var tplShortcutAction = function (lang) {
	      var body = '<tr><td>⌘ + Z</td><td>' + lang.history.undo + '</td></tr>' +
	                 '<tr><td>⌘ + ⇧ + Z</td><td>' + lang.history.redo + '</td></tr>' +
	                 '<tr><td>⌘ + ]</td><td>' + lang.paragraph.indent + '</td></tr>' +
	                 '<tr><td>⌘ + [</td><td>' + lang.paragraph.outdent + '</td></tr>' +
	                 '<tr><td>⌘ + ENTER</td><td>' + lang.hr.insert + '</td></tr>';

	      return tplShortcut(lang.shortcut.action, body);
	    };

	    var tplShortcutPara = function (lang) {
	      var body = '<tr><td>⌘ + ⇧ + L</td><td>' + lang.paragraph.left + '</td></tr>' +
	                 '<tr><td>⌘ + ⇧ + E</td><td>' + lang.paragraph.center + '</td></tr>' +
	                 '<tr><td>⌘ + ⇧ + R</td><td>' + lang.paragraph.right + '</td></tr>' +
	                 '<tr><td>⌘ + ⇧ + J</td><td>' + lang.paragraph.justify + '</td></tr>' +
	                 '<tr><td>⌘ + ⇧ + NUM7</td><td>' + lang.lists.ordered + '</td></tr>' +
	                 '<tr><td>⌘ + ⇧ + NUM8</td><td>' + lang.lists.unordered + '</td></tr>';

	      return tplShortcut(lang.shortcut.paragraphFormatting, body);
	    };

	    var tplShortcutStyle = function (lang) {
	      var body = '<tr><td>⌘ + NUM0</td><td>' + lang.style.normal + '</td></tr>' +
	                 '<tr><td>⌘ + NUM1</td><td>' + lang.style.h1 + '</td></tr>' +
	                 '<tr><td>⌘ + NUM2</td><td>' + lang.style.h2 + '</td></tr>' +
	                 '<tr><td>⌘ + NUM3</td><td>' + lang.style.h3 + '</td></tr>' +
	                 '<tr><td>⌘ + NUM4</td><td>' + lang.style.h4 + '</td></tr>' +
	                 '<tr><td>⌘ + NUM5</td><td>' + lang.style.h5 + '</td></tr>' +
	                 '<tr><td>⌘ + NUM6</td><td>' + lang.style.h6 + '</td></tr>';

	      return tplShortcut(lang.shortcut.documentStyle, body);
	    };

	    var tplExtraShortcuts = function (lang, options) {
	      var extraKeys = options.extraKeys;
	      var body = '';
	      for (var key in extraKeys) {
	        if (extraKeys.hasOwnProperty(key)) {
	          body += '<tr><td>' + key + '</td><td>' + extraKeys[key] + '</td></tr>';
	        }
	      }

	      return tplShortcut(lang.shortcut.extraKeys, body);
	    };

	    var tplShortcutTable = function (lang, options) {
	      var template = '<table class="note-shortcut-layout">' +
	                       '<tbody>' +
	                         '<tr><td>' + tplShortcutAction(lang, options) + '</td><td>' + tplShortcutText(lang, options) + '</td></tr>' +
	                         '<tr><td>' + tplShortcutStyle(lang, options) + '</td><td>' + tplShortcutPara(lang, options) + '</td></tr>';
	      if (options.extraKeys) {
	        template += '<tr><td colspan="2">' + tplExtraShortcuts(lang, options) + '</td></tr>';
	      }
	      template += '</tbody></table>';
	      return template;
	    };

	    var replaceMacKeys = function (sHtml) {
	      return sHtml.replace(/⌘/g, 'Ctrl').replace(/⇧/g, 'Shift');
	    };

	    var tplDialogs = function (lang, options) {
	      var tplImageDialog = function () {
	        var body =
	                   '<div class="note-group-select-from-files">' +
	                   '<h5>' + lang.image.selectFromFiles + '</h5>' +
	                   '<input class="note-image-input" type="file" name="files" accept="image/*" />' +
	                   '</div>' +
	                   '<h5>' + lang.image.url + '</h5>' +
	                   '<input class="note-image-url form-control span12" type="text" />';
	        var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';
	        return tplDialog('note-image-dialog', lang.image.insert, body, footer);
	      };

	      var tplLinkDialog = function () {
	        var body = '<div class="form-group">' +
	                     '<label>' + lang.link.textToDisplay + '</label>' +
	                     '<input class="note-link-text form-control span12" type="text" />' +
	                   '</div>' +
	                   '<div class="form-group">' +
	                     '<label>' + lang.link.url + '</label>' +
	                     '<input class="note-link-url form-control span12" type="text" />' +
	                   '</div>' +
	                   (!options.disableLinkTarget ?
	                     '<div class="checkbox">' +
	                       '<label>' + '<input type="checkbox" checked> ' +
	                         lang.link.openInNewWindow +
	                       '</label>' +
	                     '</div>' : ''
	                   );
	        var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';
	        return tplDialog('note-link-dialog', lang.link.insert, body, footer);
	      };

	      var tplVideoDialog = function () {
	        var body = '<div class="form-group">' +
	                     '<label>' + lang.video.url + '</label>&nbsp;<small class="text-muted">' + lang.video.providers + '</small>' +
	                     '<input class="note-video-url form-control span12" type="text" />' +
	                   '</div>';
	        var footer = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + lang.video.insert + '</button>';
	        return tplDialog('note-video-dialog', lang.video.insert, body, footer);
	      };

	      var tplHelpDialog = function () {
	        var body = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + lang.shortcut.close + '</a>' +
	                   '<div class="title">' + lang.shortcut.shortcuts + '</div>' +
	                   (agent.isMac ? tplShortcutTable(lang, options) : replaceMacKeys(tplShortcutTable(lang, options))) +
	                   '<p class="text-center">' +
	                     '<a href="//hackerwins.github.io/summernote/" target="_blank">Summernote 0.5.10</a> · ' +
	                     '<a href="//github.com/HackerWins/summernote" target="_blank">Project</a> · ' +
	                     '<a href="//github.com/HackerWins/summernote/issues" target="_blank">Issues</a>' +
	                   '</p>';
	        return tplDialog('note-help-dialog', '', body, '');
	      };

	      return '<div class="note-dialog">' +
	               tplImageDialog() +
	               tplLinkDialog() +
	               tplVideoDialog() +
	               tplHelpDialog() +
	             '</div>';
	    };

	    var tplStatusbar = function () {
	      return '<div class="note-resizebar">' +
	               '<div class="note-icon-bar"></div>' +
	               '<div class="note-icon-bar"></div>' +
	               '<div class="note-icon-bar"></div>' +
	             '</div>';
	    };

	    var representShortcut = function (str) {
	      if (agent.isMac) {
	        str = str.replace('CMD', '⌘').replace('SHIFT', '⇧');
	      }

	      return str.replace('BACKSLASH', '\\')
	                .replace('SLASH', '/')
	                .replace('LEFTBRACKET', '[')
	                .replace('RIGHTBRACKET', ']');
	    };

	    /**
	     * createTooltip
	     *
	     * @param {jQuery} $container
	     * @param {Object} keyMap
	     * @param {String} [sPlacement]
	     */
	    var createTooltip = function ($container, keyMap, sPlacement) {
	      var invertedKeyMap = func.invertObject(keyMap);
	      var $buttons = $container.find('button');

	      $buttons.each(function (i, elBtn) {
	        var $btn = $(elBtn);
	        var sShortcut = invertedKeyMap[$btn.data('event')];
	        if (sShortcut) {
	          $btn.attr('title', function (i, v) {
	            return v + ' (' + representShortcut(sShortcut) + ')';
	          });
	        }
	      // bootstrap tooltip on btn-group bug
	      // https://github.com/twbs/bootstrap/issues/5687
	      }).tooltip({
	        container: 'body',
	        trigger: 'hover',
	        placement: sPlacement || 'top'
	      }).on('click', function () {
	        $(this).tooltip('hide');
	      });
	    };

	    // createPalette
	    var createPalette = function ($container, options) {
	      var colorInfo = options.colors;
	      $container.find('.note-color-palette').each(function () {
	        var $palette = $(this), eventName = $palette.attr('data-target-event');
	        var paletteContents = [];
	        for (var row = 0, lenRow = colorInfo.length; row < lenRow; row++) {
	          var colors = colorInfo[row];
	          var buttons = [];
	          for (var col = 0, lenCol = colors.length; col < lenCol; col++) {
	            var color = colors[col];
	            buttons.push(['<button type="button" class="note-color-btn" style="background-color:', color,
	                           ';" data-event="', eventName,
	                           '" data-value="', color,
	                           '" title="', color,
	                           '" data-toggle="button" tabindex="-1"></button>'].join(''));
	          }
	          paletteContents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
	        }
	        $palette.html(paletteContents.join(''));
	      });
	    };

	    /**
	     * create summernote layout (air mode)
	     *
	     * @param {jQuery} $holder
	     * @param {Object} options
	     */
	    this.createLayoutByAirMode = function ($holder, options) {
	      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
	      var langInfo = $.extend($.summernote.lang['en-US'], $.summernote.lang[options.lang]);

	      var id = func.uniqueId();

	      $holder.addClass('note-air-editor note-editable');
	      $holder.attr({
	        'id': 'note-editor-' + id,
	        'contentEditable': true
	      });

	      var body = document.body;

	      // create Popover
	      var $popover = $(tplPopovers(langInfo, options));
	      $popover.addClass('note-air-layout');
	      $popover.attr('id', 'note-popover-' + id);
	      $popover.appendTo(body);
	      createTooltip($popover, keyMap);
	      createPalette($popover, options);

	      // create Handle
	      var $handle = $(tplHandles());
	      $handle.addClass('note-air-layout');
	      $handle.attr('id', 'note-handle-' + id);
	      $handle.appendTo(body);

	      // create Dialog
	      var $dialog = $(tplDialogs(langInfo, options));
	      $dialog.addClass('note-air-layout');
	      $dialog.attr('id', 'note-dialog-' + id);
	      $dialog.find('button.close, a.modal-close').click(function () {
	        $(this).closest('.modal').modal('hide');
	      });
	      $dialog.appendTo(body);
	    };

	    /**
	     * create summernote layout (normal mode)
	     *
	     * @param {jQuery} $holder
	     * @param {Object} options
	     */
	    this.createLayoutByFrame = function ($holder, options) {
	      //01. create Editor
	      var $editor = $('<div class="note-editor"></div>');
	      if (options.width) {
	        $editor.width(options.width);
	      }

	      //02. statusbar (resizebar)
	      if (options.height > 0) {
	        $('<div class="note-statusbar">' + (options.disableResizeEditor ? '' : tplStatusbar()) + '</div>').prependTo($editor);
	      }

	      //03. create Editable
	      var isContentEditable = !$holder.is(':disabled');
	      var $editable = $('<div class="note-editable" contentEditable="' + isContentEditable + '"></div>')
	          .prependTo($editor);
	      if (options.height) {
	        $editable.height(options.height);
	      }
	      if (options.direction) {
	        $editable.attr('dir', options.direction);
	      }

	      $editable.html(dom.html($holder) || dom.emptyPara);

	      //031. create codable
	      $('<textarea class="note-codable"></textarea>').prependTo($editor);

	      var langInfo = $.extend($.summernote.lang['en-US'], $.summernote.lang[options.lang]);

	      //04. create Toolbar
	      var toolbarHTML = '';
	      for (var idx = 0, len = options.toolbar.length; idx < len; idx ++) {
	        var groupName = options.toolbar[idx][0];
	        var groupButtons = options.toolbar[idx][1];

	        toolbarHTML += '<div class="note-' + groupName + ' btn-group">';
	        for (var i = 0, btnLength = groupButtons.length; i < btnLength; i++) {
	          // continue creating toolbar even if a button doesn't exist
	          if (!$.isFunction(tplButtonInfo[groupButtons[i]])) { continue; }
	          toolbarHTML += tplButtonInfo[groupButtons[i]](langInfo, options);
	        }
	        toolbarHTML += '</div>';
	      }

	      toolbarHTML = '<div class="note-toolbar btn-toolbar">' + toolbarHTML + '</div>';

	      var $toolbar = $(toolbarHTML).prependTo($editor);
	      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
	      createPalette($toolbar, options);
	      createTooltip($toolbar, keyMap, 'bottom');

	      //05. create Popover
	      var $popover = $(tplPopovers(langInfo, options)).prependTo($editor);
	      createPalette($popover, options);
	      createTooltip($popover, keyMap);

	      //06. handle(control selection, ...)
	      $(tplHandles()).prependTo($editor);

	      //07. create Dialog
	      var $dialog = $(tplDialogs(langInfo, options)).prependTo($editor);
	      $dialog.find('button.close, a.modal-close').click(function () {
	        $(this).closest('.modal').modal('hide');
	      });

	      //08. create Dropzone
	      $('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo($editor);

	      //09. Editor/Holder switch
	      $editor.insertAfter($holder);
	      $holder.hide();
	    };

	    this.noteEditorFromHolder = function ($holder) {
	      if ($holder.hasClass('note-air-editor')) {
	        return $holder;
	      } else if ($holder.next().hasClass('note-editor')) {
	        return $holder.next();
	      } else {
	        return $();
	      }
	    };

	    /**
	     * create summernote layout
	     *
	     * @param {jQuery} $holder
	     * @param {Object} options
	     */
	    this.createLayout = function ($holder, options) {
	      if (this.noteEditorFromHolder($holder).length) {
	        return;
	      }

	      if (options.airMode) {
	        this.createLayoutByAirMode($holder, options);
	      } else {
	        this.createLayoutByFrame($holder, options);
	      }
	    };

	    /**
	     * returns layoutInfo from holder
	     *
	     * @param {jQuery} $holder - placeholder
	     * @returns {Object}
	     */
	    this.layoutInfoFromHolder = function ($holder) {
	      var $editor = this.noteEditorFromHolder($holder);
	      if (!$editor.length) { return; }

	      var layoutInfo = dom.buildLayoutInfo($editor);
	      // cache all properties.
	      for (var key in layoutInfo) {
	        if (layoutInfo.hasOwnProperty(key)) {
	          layoutInfo[key] = layoutInfo[key].call();
	        }
	      }
	      return layoutInfo;
	    };

	    /**
	     * removeLayout
	     *
	     * @param {jQuery} $holder - placeholder
	     * @param {Object} layoutInfo
	     * @param {Object} options
	     *
	     */
	    this.removeLayout = function ($holder, layoutInfo, options) {
	      if (options.airMode) {
	        $holder.removeClass('note-air-editor note-editable')
	               .removeAttr('id contentEditable');

	        layoutInfo.popover.remove();
	        layoutInfo.handle.remove();
	        layoutInfo.dialog.remove();
	      } else {
	        $holder.html(layoutInfo.editable.html());

	        layoutInfo.editor.remove();
	        $holder.show();
	      }
	    };
	  };

	  // jQuery namespace for summernote
	  $.summernote = $.summernote || {};

	  // extends default `settings`
	  $.extend($.summernote, settings);

	  var renderer = new Renderer();
	  var eventHandler = new EventHandler();

	  /**
	   * extend jquery fn
	   */
	  $.fn.extend({
	    /**
	     * initialize summernote
	     *  - create editor layout and attach Mouse and keyboard events.
	     *
	     * @param {Object} options
	     * @returns {this}
	     */
	    summernote: function (options) {
	      // extend default options
	      options = $.extend({}, $.summernote.options, options);

	      this.each(function (idx, elHolder) {
	        var $holder = $(elHolder);

	        // createLayout with options
	        renderer.createLayout($holder, options);

	        var info = renderer.layoutInfoFromHolder($holder);
	        eventHandler.attach(info, options);

	        // Textarea: auto filling the code before form submit.
	        if (dom.isTextarea($holder[0])) {
	          $holder.closest('form').submit(function () {
	            $holder.val($holder.code());
	          });
	        }
	      });

	      // focus on first editable element
	      if (this.first().length && options.focus) {
	        var info = renderer.layoutInfoFromHolder(this.first());
	        info.editable.focus();
	      }

	      // callback on init
	      if (this.length && options.oninit) {
	        options.oninit();
	      }

	      return this;
	    },
	    // 

	    /**
	     * get the HTML contents of note or set the HTML contents of note.
	     *
	     * @param {String} [sHTML] - HTML contents(optional, set)
	     * @returns {this|String} - context(set) or HTML contents of note(get).
	     */
	    code: function (sHTML) {
	      // get the HTML contents of note
	      if (sHTML === undefined) {
	        var $holder = this.first();
	        if (!$holder.length) { return; }
	        var info = renderer.layoutInfoFromHolder($holder);
	        if (!!(info && info.editable)) {
	          var isCodeview = info.editor.hasClass('codeview');
	          if (isCodeview && agent.hasCodeMirror) {
	            info.codable.data('cmEditor').save();
	          }
	          return isCodeview ? info.codable.val() : info.editable.html();
	        }
	        return dom.isTextarea($holder[0]) ? $holder.val() : $holder.html();
	      }

	      // set the HTML contents of note
	      this.each(function (i, elHolder) {
	        var info = renderer.layoutInfoFromHolder($(elHolder));
	        if (info && info.editable) { info.editable.html(sHTML); }
	      });

	      return this;
	    },

	    /**
	     * destroy Editor Layout and dettach Key and Mouse Event
	     * @returns {this}
	     */
	    destroy: function () {
	      this.each(function (idx, elHolder) {
	        var $holder = $(elHolder);

	        var info = renderer.layoutInfoFromHolder($holder);
	        if (!info || !info.editable) { return; }

	        var options = info.editor.data('options');

	        eventHandler.dettach(info, options);
	        renderer.removeLayout($holder, info, options);
	      });

	      return this;
	    }
	  });
	}));


/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/select2/styles/select2.css", function() {
			var newContent = require("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/select2/styles/select2.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	exports.push([module.id, ".select2-container {\n  margin: 0;\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  vertical-align: middle;\n}\n.select2-container,\n.select2-drop,\n.select2-search,\n.select2-search input {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.select2-container .select2-choice {\n  display: block;\n  height: 34px;\n  padding: 0 0 0 8px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #cccccc;\n  white-space: nowrap;\n  line-height: 32px;\n  color: #444;\n  text-decoration: none;\n  border-radius: 2px;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\nhtml[dir=\"rtl\"] .select2-container .select2-choice {\n  padding: 0 8px 0 0;\n}\n.select2-container.select2-drop-above .select2-choice {\n  border-bottom-color: #cccccc;\n  border-radius: 0 0 2px 2px;\n}\n.select2-container.select2-allowclear .select2-choice .select2-chosen {\n  margin-right: 42px;\n}\n.select2-container .select2-choice > .select2-chosen {\n  margin-right: 26px;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  float: none;\n  width: auto;\n}\nhtml[dir=\"rtl\"] .select2-container .select2-choice > .select2-chosen {\n  margin-left: 26px;\n  margin-right: 0;\n}\n.select2-container .select2-choice abbr {\n  display: none;\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 24px;\n  top: 8px;\n  font-size: 1px;\n  text-decoration: none;\n  border: 0;\n  cursor: pointer;\n  outline: 0;\n}\n.select2-container.select2-allowclear .select2-choice abbr {\n  display: inline-block;\n}\n.select2-container .select2-choice abbr:hover {\n  background-position: right -11px;\n  cursor: pointer;\n}\n.select2-drop-mask {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  min-width: 100%;\n  height: auto;\n  width: auto;\n  z-index: 9998;\n  background-color: #fff;\n  opacity: 0;\n}\n.select2-drop {\n  width: 100%;\n  margin-top: -1px;\n  position: absolute;\n  z-index: 9999;\n  top: 100%;\n  padding-top: 5px;\n  background: #fff;\n  border: 1px solid #cccccc;\n  border-top: 0;\n  border-radius: 0 0 2px 2px;\n  -webkit-box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);\n}\n.select2-drop.select2-drop-above {\n  margin-top: 1px;\n  border-top: 1px solid #aaa;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  -webkit-box-shadow: 0 -4px 5px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 -4px 5px rgba(0, 0, 0, 0.15);\n}\n.select2-drop-active {\n  border: 1px solid #66afe9;\n  border-top: none;\n}\n.select2-drop.select2-drop-above.select2-drop-active {\n  border-top: 1px solid #66afe9;\n}\n.select2-drop-auto-width {\n  border-top: 1px solid #cccccc;\n  width: auto;\n}\n.select2-drop-auto-width .select2-search {\n  padding-top: 4px;\n}\n.select2-container .select2-choice .select2-arrow {\n  display: inline-block;\n  width: 26px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  border-left: 1px solid #cccccc;\n  border-radius: 0 2px 2px 0;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  background: #f2f5f8;\n}\nhtml[dir=\"rtl\"] .select2-container .select2-choice .select2-arrow {\n  left: 0;\n  right: auto;\n  border-left: none;\n  border-right: 1px solid #aaa;\n  border-radius: 4px 0 0 4px;\n}\n.select2-container .select2-choice .select2-arrow b {\n  font-family: 'FontAwesome';\n  font-size: 13px;\n  font-weight: normal;\n  position: absolute;\n  left: 9px;\n  top: 1.5px;\n}\n.select2-container .select2-choice .select2-arrow b:after {\n  content: \"\\f0d7 \";\n}\nhtml[dir=\"rtl\"] .select2-container .select2-choice .select2-arrow b {\n  background-position: 2px 1px;\n}\n.select2-search {\n  display: inline-block;\n  width: 100%;\n  min-height: 26px;\n  margin: 0;\n  padding-left: 4px;\n  padding-right: 4px;\n  position: relative;\n  z-index: 10000;\n  white-space: nowrap;\n}\n.select2-search input {\n  width: 100%;\n  height: auto !important;\n  min-height: 34px;\n  padding: 6px 12px;\n  margin: 0;\n  outline: 0;\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\nhtml[dir=\"rtl\"] .select2-search input {\n  padding: 4px 5px 4px 20px;\n}\n.select2-drop.select2-drop-above .select2-search input {\n  margin-top: 4px;\n}\n.select2-container-active .select2-choice,\n.select2-container-active .select2-choices {\n  border: 1px solid #66afe9;\n  outline: none;\n}\n.select2-dropdown-open .select2-choice {\n  border-bottom-color: transparent;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.select2-dropdown-open.select2-drop-above .select2-choice,\n.select2-dropdown-open.select2-drop-above .select2-choices {\n  border: 1px solid #66afe9;\n  border-top-color: transparent;\n}\n.select2-dropdown-open .select2-choice .select2-arrow {\n  background: transparent;\n  border-left-color: transparent;\n  -webkit-filter: none;\n          filter: none;\n}\nhtml[dir=\"rtl\"] .select2-dropdown-open .select2-choice .select2-arrow {\n  border-right-color: transparent;\n}\n.select2-dropdown-open .select2-choice .select2-arrow b {\n  background-position: -18px 1px;\n}\nhtml[dir=\"rtl\"] .select2-dropdown-open .select2-choice .select2-arrow b {\n  background-position: -16px 1px;\n}\n.select2-hidden-accessible {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n/* results */\n.select2-results {\n  max-height: 200px;\n  padding: 0 0 0 4px;\n  margin: 4px 4px 4px 0;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhtml[dir=\"rtl\"] .select2-results {\n  padding: 0 4px 0 0;\n  margin: 4px 0 4px 4px;\n}\n.select2-results ul.select2-result-sub {\n  margin: 0;\n  padding-left: 0;\n}\n.select2-results li {\n  list-style: none;\n  display: list-item;\n  background-image: none;\n}\n.select2-results li.select2-result-with-children > .select2-result-label {\n  font-weight: bold;\n}\n.select2-results .select2-result-label {\n  padding: 3px 7px 4px;\n  margin: 0;\n  cursor: pointer;\n  min-height: 1em;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.select2-results-dept-1 .select2-result-label {\n  padding-left: 20px;\n}\n.select2-results-dept-2 .select2-result-label {\n  padding-left: 40px;\n}\n.select2-results-dept-3 .select2-result-label {\n  padding-left: 60px;\n}\n.select2-results-dept-4 .select2-result-label {\n  padding-left: 80px;\n}\n.select2-results-dept-5 .select2-result-label {\n  padding-left: 100px;\n}\n.select2-results-dept-6 .select2-result-label {\n  padding-left: 110px;\n}\n.select2-results-dept-7 .select2-result-label {\n  padding-left: 120px;\n}\n.select2-results li em {\n  background: #feffde;\n  font-style: normal;\n}\n.select2-results .select2-highlighted em {\n  background: transparent;\n}\n.select2-results .select2-highlighted ul {\n  background: #fff;\n  color: #000;\n}\n.select2-results .select2-no-results,\n.select2-results .select2-searching,\n.select2-results .select2-ajax-error,\n.select2-results .select2-selection-limit {\n  background: #f4f4f4;\n  display: list-item;\n  padding-left: 5px;\n}\n/*\ndisabled look for disabled choices in the results dropdown\n*/\n.select2-results .select2-disabled.select2-highlighted {\n  color: #666;\n  background: #f4f4f4;\n  display: list-item;\n  cursor: default;\n}\n.select2-results .select2-disabled {\n  background: #f4f4f4;\n  display: list-item;\n  cursor: default;\n}\n.select2-results .select2-selected {\n  display: none;\n}\n.select2-results .select2-ajax-error {\n  background: rgba(255, 50, 50, 0.2);\n}\n.select2-more-results {\n  background: #f4f4f4;\n  display: list-item;\n}\n/* disabled styles */\n.select2-container.select2-container-disabled .select2-choice {\n  background-color: #f4f4f4;\n  background-image: none;\n  border: 1px solid #ddd;\n  cursor: default;\n}\n.select2-container.select2-container-disabled .select2-choice .select2-arrow {\n  background-color: #f4f4f4;\n  background-image: none;\n  border-left: 0;\n}\n.select2-container.select2-container-disabled .select2-choice abbr {\n  display: none;\n}\n/* multiselect */\n.select2-container-multi .select2-choices {\n  height: auto !important;\n  height: 1%;\n  margin: 0;\n  padding: 0 5px 0 0;\n  position: relative;\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  cursor: text;\n  overflow: hidden;\n}\nhtml[dir=\"rtl\"] .select2-container-multi .select2-choices {\n  padding: 0 0 0 5px;\n}\n.select2-locked {\n  padding: 3px 5px 3px 5px !important;\n}\n.select2-container-multi .select2-choices {\n  min-height: 26px;\n}\n.select2-container-multi.select2-container-active .select2-choices {\n  border: 1px solid #66afe9;\n  outline: none;\n}\n.select2-container-multi .select2-choices li {\n  float: left;\n  list-style: none;\n}\nhtml[dir=\"rtl\"] .select2-container-multi .select2-choices li {\n  float: right;\n}\n.select2-container-multi .select2-choices .select2-search-field {\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n}\n.select2-container-multi .select2-choices .select2-search-field input {\n  padding: 6px 12px;\n  outline: 0;\n  border: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: transparent !important;\n}\n.select2-default {\n  color: #999 !important;\n}\n.select2-container-multi .select2-choices .select2-search-choice {\n  padding: 4px 10px 4px 24px;\n  margin: 3px 0px 3px 5px;\n  position: relative;\n  line-height: 1;\n  color: #333;\n  cursor: default;\n  border-radius: 24px;\n  background-color: #f2f5f8;\n}\n.select2-container-multi .select2-choices .select2-search-choice > div {\n  line-height: normal;\n}\nhtml[dir=\"rtl\"] .select2-container-multi .select2-choices .select2-search-choice {\n  margin: 3px 5px 3px 0;\n  padding: 3px 18px 3px 5px;\n}\n.select2-container-multi .select2-choices .select2-search-choice .select2-chosen {\n  cursor: default;\n}\n.select2-container-multi .select2-choices .select2-search-choice-focus {\n  background: #4caf50;\n  color: #fff;\n}\n.select2-container-multi .select2-choices .select2-search-choice-focus .select2-search-choice-close {\n  color: #fff;\n}\n.select2-search-choice-close {\n  font-size: 20px;\n  line-height: 26px;\n  position: absolute;\n  top: -1px;\n}\n.select2-search-choice-close:after {\n  content: \"×\";\n}\nhtml[dir=\"rtl\"] .select2-search-choice-close {\n  right: auto;\n  left: 8px;\n}\n.select2-container-multi .select2-search-choice-close {\n  left: 8px;\n}\nhtml[dir=\"rtl\"] .select2-container-multi .select2-search-choice-close {\n  left: auto;\n  right: 2px;\n}\n/* disabled styles */\n.select2-container-multi.select2-container-disabled .select2-choices {\n  background-color: #f4f4f4;\n  background-image: none;\n  border: 1px solid #ddd;\n  cursor: default;\n}\n.select2-container-multi.select2-container-disabled .select2-choices .select2-search-choice {\n  padding: 3px 5px 3px 5px;\n  border: 1px solid #ddd;\n  background-image: none;\n  background-color: #f4f4f4;\n}\n.select2-container-multi.select2-container-disabled .select2-choices .select2-search-choice .select2-search-choice-close {\n  display: none;\n  background: none;\n}\n/* end multiselect */\n.select2-result-selectable .select2-match,\n.select2-result-unselectable .select2-match {\n  text-decoration: underline;\n}\n.select2-offscreen,\n.select2-offscreen:focus {\n  clip: rect(0 0 0 0) !important;\n  width: 1px !important;\n  height: 1px !important;\n  border: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  outline: 0 !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n.select2-display-none {\n  display: none;\n}\n.select2-measure-scrollbar {\n  position: absolute;\n  top: -10000px;\n  left: -10000px;\n  width: 100px;\n  height: 100px;\n  overflow: scroll;\n}\n", ""]);

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/summernote/styles/summernote.css", function() {
			var newContent = require("!!/Users/IkeP/Desktop/analyzr/node_modules/css-loader/index.js!/Users/IkeP/Desktop/analyzr/src/components/summernote/styles/summernote.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	exports.push([module.id, ".note-editor {\n  border: 1px solid #cccccc;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  position: relative;\n  border-radius: 2px;\n  /* dropzone */\n  /* fullscreen mode */\n  /* codeview mode */\n  /* statusbar */\n  /* editable */\n  /* codeable */\n}\n.note-editor .note-dropzone {\n  position: absolute;\n  display: none;\n  z-index: 1;\n  border: 2px dashed #87cefa;\n  color: #87cefa;\n  background-color: white;\n  opacity: 0.95;\n  pointer-event: none;\n}\n.note-editor .note-dropzone .note-dropzone-message {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.note-editor .note-dropzone.hover {\n  border: 2px dashed #098ddf;\n  color: #098ddf;\n}\n.note-editor.dragover .note-dropzone {\n  display: table;\n}\n.note-editor .note-toolbar {\n  background-color: #f5f8fa;\n  border-bottom: 1px solid #cccccc;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n.note-editor.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1050;\n  /* bs3 modal-backdrop: 1030, bs2: 1040 */\n}\n.note-editor.fullscreen .note-editable {\n  background-color: white;\n}\n.note-editor.fullscreen .note-resizebar {\n  display: none;\n}\n.note-editor.codeview .note-editable {\n  display: none;\n}\n.note-editor.codeview .note-codable {\n  display: block;\n}\n.note-editor .note-statusbar {\n  background-color: #f2f5f8;\n}\n.note-editor .note-statusbar .note-resizebar {\n  height: 8px;\n  width: 100%;\n  border-top: 1px solid #cccccc;\n  cursor: ns-resize;\n}\n.note-editor .note-statusbar .note-resizebar .note-icon-bar {\n  width: 20px;\n  margin: 1px auto;\n  border-top: 1px solid #cccccc;\n}\n.note-editor .note-editable {\n  padding: 10px;\n  overflow: auto;\n  outline: none;\n}\n.note-editor .note-editable[contenteditable=\"false\"] {\n  background-color: #e5e5e5;\n}\n.note-editor .note-codable {\n  display: none;\n  width: 100%;\n  padding: 10px;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: Menlo, Monaco, monospace, sans-serif;\n  font-size: 14px;\n  color: #ccc;\n  background-color: #222;\n  resize: none;\n  /* override BS2 default style */\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-bottom: 0;\n}\n.note-air-editor {\n  outline: none;\n}\n.note-popover .popover {\n  max-width: none;\n}\n.note-popover .popover .popover-content a {\n  display: inline-block;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  /* for FF */\n  vertical-align: middle;\n  /* for FF */\n}\n.note-popover .popover .arrow {\n  left: 20px;\n}\n.note-popover .popover .popover-content,\n.note-toolbar {\n  margin: 0;\n  padding: 0 0 5px 5px;\n  /* dropdown-menu for toolbar and popover */\n  /* color palette for toolbar and popover */\n}\n.note-popover .popover .popover-content > .btn-group,\n.note-toolbar > .btn-group {\n  margin-top: 5px;\n  margin-left: 0;\n  margin-right: 5px;\n}\n.note-popover .popover .popover-content .btn-group .note-table,\n.note-toolbar .btn-group .note-table {\n  min-width: 0;\n  padding: 5px;\n}\n.note-popover .popover .popover-content .btn-group .note-table .note-dimension-picker,\n.note-toolbar .btn-group .note-table .note-dimension-picker {\n  font-size: 18px;\n}\n.note-popover .popover .popover-content .btn-group .note-table .note-dimension-picker .note-dimension-picker-mousecatcher,\n.note-toolbar .btn-group .note-table .note-dimension-picker .note-dimension-picker-mousecatcher {\n  position: absolute !important;\n  z-index: 3;\n  width: 10em;\n  height: 10em;\n  cursor: pointer;\n}\n.note-popover .popover .popover-content .btn-group .note-table .note-dimension-picker .note-dimension-picker-unhighlighted,\n.note-toolbar .btn-group .note-table .note-dimension-picker .note-dimension-picker-unhighlighted {\n  position: relative !important;\n  z-index: 1;\n  width: 5em;\n  height: 5em;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAgMAAAAroGbEAAAACVBMVEUAAIj4+Pjp6ekKlAqjAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfYAR0BKhmnaJzPAAAAG0lEQVQI12NgAAOtVatWMTCohoaGUY+EmIkEAEruEzK2J7tvAAAAAElFTkSuQmCC') repeat;\n}\n.note-popover .popover .popover-content .btn-group .note-table .note-dimension-picker .note-dimension-picker-highlighted,\n.note-toolbar .btn-group .note-table .note-dimension-picker .note-dimension-picker-highlighted {\n  position: absolute !important;\n  z-index: 2;\n  width: 1em;\n  height: 1em;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAgMAAAAroGbEAAAACVBMVEUAAIjd6vvD2f9LKLW+AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfYAR0BKwNDEVT0AAAAG0lEQVQI12NgAAOtVatWMTCohoaGUY+EmIkEAEruEzK2J7tvAAAAAElFTkSuQmCC') repeat;\n}\n.note-popover .popover .popover-content .note-style h1,\n.note-toolbar .note-style h1,\n.note-popover .popover .popover-content .note-style h2,\n.note-toolbar .note-style h2,\n.note-popover .popover .popover-content .note-style h3,\n.note-toolbar .note-style h3,\n.note-popover .popover .popover-content .note-style h4,\n.note-toolbar .note-style h4,\n.note-popover .popover .popover-content .note-style h5,\n.note-toolbar .note-style h5,\n.note-popover .popover .popover-content .note-style h6,\n.note-toolbar .note-style h6,\n.note-popover .popover .popover-content .note-style blockquote,\n.note-toolbar .note-style blockquote {\n  margin: 0;\n}\n.note-popover .popover .popover-content .note-color .dropdown-toggle,\n.note-toolbar .note-color .dropdown-toggle {\n  width: 20px;\n  padding-left: 5px;\n}\n.note-popover .popover .popover-content .note-color .dropdown-menu,\n.note-toolbar .note-color .dropdown-menu {\n  min-width: 340px;\n}\n.note-popover .popover .popover-content .note-color .dropdown-menu .btn-group,\n.note-toolbar .note-color .dropdown-menu .btn-group {\n  margin: 0;\n}\n.note-popover .popover .popover-content .note-color .dropdown-menu .btn-group:first-child,\n.note-toolbar .note-color .dropdown-menu .btn-group:first-child {\n  margin: 0 5px;\n}\n.note-popover .popover .popover-content .note-color .dropdown-menu .btn-group .note-palette-title,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-palette-title {\n  font-size: 12px;\n  margin: 2px 7px;\n  text-align: center;\n  border-bottom: 1px solid #eee;\n}\n.note-popover .popover .popover-content .note-color .dropdown-menu .btn-group .note-color-reset,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-color-reset {\n  font-size: 11px;\n  margin: 3px;\n  padding: 0 3px;\n  cursor: pointer;\n}\n.note-popover .popover .popover-content .note-color .dropdown-menu .btn-group .note-color-row,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-color-row {\n  height: 20px;\n}\n.note-popover .popover .popover-content .note-color .dropdown-menu .btn-group .note-color-reset:hover,\n.note-toolbar .note-color .dropdown-menu .btn-group .note-color-reset:hover {\n  background: #eee;\n}\n.note-popover .popover .popover-content .note-para .dropdown-menu,\n.note-toolbar .note-para .dropdown-menu {\n  min-width: 216px;\n  padding: 5px;\n}\n.note-popover .popover .popover-content .note-para .dropdown-menu > div:first-child,\n.note-toolbar .note-para .dropdown-menu > div:first-child {\n  margin-right: 5px;\n}\n.note-popover .popover .popover-content .dropdown-menu,\n.note-toolbar .dropdown-menu {\n  min-width: 90px;\n  /* dropdown-menu right position */\n  /* http://forrst.com/posts/Bootstrap_right_positioned_dropdown-2KB */\n  /* dropdown-menu for selectbox */\n}\n.note-popover .popover .popover-content .dropdown-menu.right,\n.note-toolbar .dropdown-menu.right {\n  right: 0;\n  left: auto;\n}\n.note-popover .popover .popover-content .dropdown-menu.right::before,\n.note-toolbar .dropdown-menu.right::before {\n  right: 9px;\n  left: auto !important;\n}\n.note-popover .popover .popover-content .dropdown-menu.right::after,\n.note-toolbar .dropdown-menu.right::after {\n  right: 10px;\n  left: auto !important;\n}\n.note-popover .popover .popover-content .dropdown-menu li a i,\n.note-toolbar .dropdown-menu li a i {\n  color: deepskyblue;\n  visibility: hidden;\n}\n.note-popover .popover .popover-content .dropdown-menu li a.checked i,\n.note-toolbar .dropdown-menu li a.checked i {\n  visibility: visible;\n}\n.note-popover .popover .popover-content .note-fontsize-10,\n.note-toolbar .note-fontsize-10 {\n  font-size: 10px;\n}\n.note-popover .popover .popover-content .note-color-palette,\n.note-toolbar .note-color-palette {\n  line-height: 1;\n}\n.note-popover .popover .popover-content .note-color-palette div .note-color-btn,\n.note-toolbar .note-color-palette div .note-color-btn {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  margin: 0;\n  border: 1px solid #fff;\n}\n.note-popover .popover .popover-content .note-color-palette div .note-color-btn:hover,\n.note-toolbar .note-color-palette div .note-color-btn:hover {\n  border: 1px solid #000;\n}\n.note-dialog > div {\n  display: none;\n  /* BS2's hide pacth. */\n}\n.note-dialog .note-image-dialog .note-dropzone {\n  min-height: 100px;\n  font-size: 30px;\n  line-height: 4;\n  /* vertical-align */\n  color: lightgray;\n  text-align: center;\n  border: 4px dashed lightgray;\n  margin-bottom: 10px;\n}\n.note-dialog .note-help-dialog {\n  font-size: 12px;\n  color: #ccc;\n  background-color: #222 !important;\n  opacity: 0.9;\n  /* BS2's background pacth. */\n  background: transparent;\n  border: none;\n}\n.note-dialog .note-help-dialog .modal-content {\n  background: transparent;\n  border: 1px solid white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.note-dialog .note-help-dialog a {\n  font-size: 12px;\n  color: white;\n}\n.note-dialog .note-help-dialog .title {\n  color: white;\n  font-size: 14px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: white 1px solid;\n}\n.note-dialog .note-help-dialog .modal-close {\n  font-size: 14px;\n  color: #dddd00;\n  cursor: pointer;\n}\n.note-dialog .note-help-dialog .note-shortcut-layout {\n  width: 100%;\n}\n.note-dialog .note-help-dialog .note-shortcut-layout td {\n  vertical-align: top;\n}\n.note-dialog .note-help-dialog .note-shortcut {\n  margin-top: 8px;\n}\n.note-dialog .note-help-dialog .note-shortcut th {\n  text-align: left;\n  font-size: 13px;\n  color: #dddd00;\n}\n.note-dialog .note-help-dialog .note-shortcut td:first-child {\n  min-width: 110px;\n  font-family: \"Courier New\";\n  color: #dddd00;\n  text-align: right;\n  padding-right: 10px;\n}\n.note-handle {\n  /* control selection */\n}\n.note-handle .note-control-selection {\n  position: absolute;\n  display: none;\n  border: 1px solid black;\n}\n.note-handle .note-control-selection > div {\n  position: absolute;\n}\n.note-handle .note-control-selection .note-control-selection-bg {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.3;\n}\n.note-handle .note-control-selection .note-control-handle {\n  width: 7px;\n  height: 7px;\n  border: 1px solid black;\n}\n.note-handle .note-control-selection .note-control-holder {\n  width: 7px;\n  height: 7px;\n  border: 1px solid black;\n}\n.note-handle .note-control-selection .note-control-sizing {\n  width: 7px;\n  height: 7px;\n  border: 1px solid black;\n  background-color: white;\n}\n.note-handle .note-control-selection .note-control-nw {\n  top: -5px;\n  left: -5px;\n  border-right: none;\n  border-bottom: none;\n}\n.note-handle .note-control-selection .note-control-ne {\n  top: -5px;\n  right: -5px;\n  border-bottom: none;\n  border-left: none;\n}\n.note-handle .note-control-selection .note-control-sw {\n  bottom: -5px;\n  left: -5px;\n  border-top: none;\n  border-right: none;\n}\n.note-handle .note-control-selection .note-control-se {\n  right: -5px;\n  bottom: -5px;\n  cursor: se-resize;\n}\n.note-handle .note-control-selection .note-control-selection-info {\n  right: 0;\n  bottom: 0;\n  padding: 5px;\n  margin: 5px;\n  color: white;\n  background-color: black;\n  font-size: 12px;\n  opacity: 0.7;\n}\n", ""]);

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Bootstrap v3.3.2 (http://getbootstrap.com)
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */

	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery')
	}

	+function ($) {
	  'use strict';
	  var version = $.fn.jquery.split(' ')[0].split('.')
	  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
	    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
	  }
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.2
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.2
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }

	  Alert.VERSION = '3.3.2'

	  Alert.TRANSITION_DURATION = 150

	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = $(selector)

	    if (e) e.preventDefault()

	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'))

	    if (e.isDefaultPrevented()) return

	    $parent.removeClass('in')

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }

	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }


	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')

	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.alert

	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert


	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }


	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: button.js v3.3.2
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }

	  Button.VERSION  = '3.3.2'

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }

	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()

	    state = state + 'Text'

	    if (data.resetText == null) $el.data('resetText', $el[val]())

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])

	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d)
	      }
	    }, this), 0)
	  }

	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')

	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
	        else $parent.find('.active').removeClass('active')
	      }
	      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	    }

	    if (changed) this.$element.toggleClass('active')
	  }


	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.button', (data = new Button(this, options)))

	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }

	  var old = $.fn.button

	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button


	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }


	  // BUTTON DATA-API
	  // ===============

	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target)
	      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
	      Plugin.call($btn, 'toggle')
	      e.preventDefault()
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.2
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      =
	    this.sliding     =
	    this.interval    =
	    this.$active     =
	    this.$items      = null

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }

	  Carousel.VERSION  = '3.3.2'

	  Carousel.TRANSITION_DURATION = 600

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }

	    e.preventDefault()
	  }

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)

	    this.interval && clearInterval(this.interval)

	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

	    return this
	  }

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }

	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

	    if (pos > (this.$items.length - 1) || pos < 0) return

	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }

	    this.interval = clearInterval(this.interval)

	    return this
	  }

	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }

	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this

	    if ($next.hasClass('active')) return (this.sliding = false)

	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return

	    this.sliding = true

	    isCycling && this.pause()

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }

	    isCycling && this.cycle()

	    return this
	  }


	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide

	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }

	  var old = $.fn.carousel

	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel


	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }


	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false

	    Plugin.call($target, options)

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }

	    e.preventDefault()
	  }

	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.2
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
	    this.transitioning = null

	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }

	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.3.2'

	  Collapse.TRANSITION_DURATION = 350

	  Collapse.DEFAULTS = {
	    toggle: true,
	    trigger: '[data-toggle="collapse"]'
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)

	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)

	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')

	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }

	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

	    return $(target)
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && option == 'show') options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)

	    if (!$this.attr('data-target')) e.preventDefault()

	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })

	    Plugin.call($target, option)
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.2
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }

	  Dropdown.VERSION = '3.3.2'

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    clearMenus()

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
	      }

	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')

	      $parent
	        .toggleClass('open')
	        .trigger('shown.bs.dropdown', relatedTarget)
	    }

	    return false
	  }

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

	    var $this = $(this)

	    e.preventDefault()
	    e.stopPropagation()

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }

	    var desc = ' li:not(.divider):visible a'
	    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

	    if (!$items.length) return

	    var index = $items.index(e.target)

	    if (e.which == 38 && index > 0)                 index--                        // up
	    if (e.which == 40 && index < $items.length - 1) index++                        // down
	    if (!~index)                                      index = 0

	    $items.eq(index).trigger('focus')
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }

	      if (!$parent.hasClass('open')) return

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
	    })
	  }

	  function getParent($this) {
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = selector && $(selector)

	    return $parent && $parent.length ? $parent : $this.parent()
	  }


	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')

	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.dropdown

	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown


	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }


	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.2
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options        = options
	    this.$body          = $(document.body)
	    this.$element       = $(element)
	    this.$backdrop      =
	    this.isShown        = null
	    this.scrollbarWidth = 0

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.3.2'

	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')

	    this.escape()
	    this.resize()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      if (that.options.backdrop) that.adjustBackdrop()
	      that.adjustDialog()

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element
	        .addClass('in')
	        .attr('aria-hidden', false)

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$element.find('.modal-dialog') // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.escape()
	    this.resize()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .attr('aria-hidden', true)
	      .off('click.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
	        .prependTo(this.$element)
	        .on('click.dismiss.bs.modal', $.proxy(function (e) {
	          if (e.target !== e.currentTarget) return
	          this.options.backdrop == 'static'
	            ? this.$element[0].focus.call(this.$element[0])
	            : this.hide.call(this)
	        }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    if (this.options.backdrop) this.adjustBackdrop()
	    this.adjustDialog()
	  }

	  Modal.prototype.adjustBackdrop = function () {
	    this.$backdrop
	      .css('height', 0)
	      .css('height', this.$element[0].scrollHeight)
	  }

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }

	  Modal.prototype.checkScrollbar = function () {
	    this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight
	    this.scrollbarWidth = this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', '')
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.2
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function (element, options) {
	    this.type       =
	    this.options    =
	    this.enabled    =
	    this.timeout    =
	    this.hoverState =
	    this.$element   = null

	    this.init('tooltip', element, options)
	  }

	  Tooltip.VERSION  = '3.3.2'

	  Tooltip.TRANSITION_DURATION = 150

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

	    var triggers = this.options.trigger.split(' ')

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }

	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }

	    return options
	  }

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })

	    return options
	  }

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (self && self.$tip && self.$tip.is(':visible')) {
	      self.hoverState = 'in'
	      return
	    }

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'in'

	    if (!self.options.delay || !self.options.delay.show) return self.show()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'out'

	    if (!self.options.delay || !self.options.delay.hide) return self.hide()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this

	      var $tip = this.tip()

	      var tipId = this.getUID(this.type)

	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)

	      if (this.options.animation) $tip.addClass('fade')

	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement

	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight

	      if (autoPlace) {
	        var orgPlacement = placement
	        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
	        var containerDim = this.getPosition($container)

	        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
	                    placement

	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

	      this.applyPlacement(calculatedOffset, placement)

	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null

	        if (prevHoverState == 'out') that.leave(that)
	      }

	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0

	    offset.top  = offset.top  + marginTop
	    offset.left = offset.left + marginLeft

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)

	    $tip.addClass('in')

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top

	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
	    this.arrow()
	      .css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isHorizontal ? 'top' : 'left', '')
	  }

	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }

	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = this.tip()
	    var e    = $.Event('hide.bs.' + this.type)

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      that.$element
	        .removeAttr('aria-describedby')
	        .trigger('hidden.bs.' + that.type)
	      callback && callback()
	    }

	    this.$element.trigger(e)

	    if (e.isDefaultPrevented()) return

	    $tip.removeClass('in')

	    $.support.transition && this.$tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()

	    this.hoverState = null

	    return this
	  }

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }

	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element

	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'

	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

	  }

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }

	    return delta
	  }

	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options

	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

	    return title
	  }

	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }

	  Tooltip.prototype.tip = function () {
	    return (this.$tip = this.$tip || $(this.options.template))
	  }

	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }

	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }

	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }

	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }

	    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	  }

	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	    })
	  }


	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option

	      if (!data && option == 'destroy') return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tooltip

	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip


	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: popover.js v3.3.2
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

	  Popover.VERSION  = '3.3.2'

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })


	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

	  Popover.prototype.constructor = Popover

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }

	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)

	    $tip.removeClass('fade top bottom left right in')

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }

	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options

	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }

	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }

	  Popover.prototype.tip = function () {
	    if (!this.$tip) this.$tip = $(this.options.template)
	    return this.$tip
	  }


	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option

	      if (!data && option == 'destroy') return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.popover

	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover


	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.2
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    var process  = $.proxy(this.process, this)

	    this.$body          = $('body')
	    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0

	    this.$scrollElement.on('scroll.bs.scrollspy', process)
	    this.refresh()
	    this.process()
	  }

	  ScrollSpy.VERSION  = '3.3.2'

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }

	  ScrollSpy.prototype.refresh = function () {
	    var offsetMethod = 'offset'
	    var offsetBase   = 0

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }

	    this.offsets = []
	    this.targets = []
	    this.scrollHeight = this.getScrollHeight()

	    var self     = this

	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)

	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        self.offsets.push(this[0])
	        self.targets.push(this[1])
	      })
	  }

	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target

	    this.clear()

	    var selector = this.selector +
	        '[data-target="' + target + '"],' +
	        this.selector + '[href="' + target + '"]'

	    var active = $(selector)
	      .parents('li')
	      .addClass('active')

	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }

	    active.trigger('activate.bs.scrollspy')
	  }

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }


	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.scrollspy

	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy


	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }


	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.2
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function (element) {
	    this.element = $(element)
	  }

	  Tab.VERSION = '3.3.2'

	  Tab.TRANSITION_DURATION = 150

	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return

	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })

	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

	    var $target = $(selector)

	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)

	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)

	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }

	      if (element.parent('.dropdown-menu')) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }

	      callback && callback()
	    }

	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()

	    $active.removeClass('in')
	  }


	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')

	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tab

	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab


	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }


	  // TAB DATA-API
	  // ============

	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }

	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: affix.js v3.3.2
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)

	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

	    this.$element     = $(element)
	    this.affixed      =
	    this.unpin        =
	    this.pinnedOffset = null

	    this.checkPosition()
	  }

	  Affix.VERSION  = '3.3.2'

	  Affix.RESET    = 'affix affix-top affix-bottom'

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }

	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

	    return false
	  }

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return

	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = $('body').height()

	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')

	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')

	      this.$element.trigger(e)

	      if (e.isDefaultPrevented()) return

	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }


	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.affix

	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix


	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }


	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()

	      data.offset = data.offset || {}

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

	      Plugin.call($spy, data)
	    })
	  })

	}(jQuery);


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
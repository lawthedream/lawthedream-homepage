(function() {

'use strict';

var APP = window.ykapp = {};

/**
 * 0.2 2015-07-15 16:35:55 Added LINUX, ANDROID, IPHONE, IPAD, I_OS, WEBKIT
 * 0.1 2015/03/18
 */

// 'NAME/x.x' --> 'x.x'
// ex) 'Chrome/39.0.1' --> '39.0.1'
function browserVer(name) {
	var reg = new RegExp(name + "\\/(\\d[\\d\\.]+)");
	var match = navigator.userAgent.match(reg);
	if (match) return match[1];
	return null;
}

// 'NAME x.x' --> 'x.x'
// ex) 'Chrome 39.0.1' --> '39.0.1'
function browserVer2(name) {
	var reg = new RegExp(name + " (\\d[\\d\\.]+)");
	var match = navigator.userAgent.match(reg);
	if (match) return match[1];
	return null;
}

// 'MSIE x.x' --> 'x.x'
function msieVer( trident ) {
	var rRv   = /; rv:([\d\.]+)$/;
	var rMSIE = /MSIE ([\d\.]+)/i;
	var ua    = navigator.userAgent.match(/^[^\(]+\(([^\(]+)\)/)[1];
	if ( rMSIE.test(ua) ) return ua.match( rMSIE )[1];        // pattern is "MSIE x.x"
	if ( trident && rRv.test(ua) ) return ua.match( rRv )[1]; // pattern is "vr:x.x"
	return null; // unknown pattern
}

// 'Mac OS X x_y_z' --> 'x.y.z'
function macOsVer() {
	var match = navigator.userAgent.match(/Mac OS X ([_\d]+)/);
	if (!match) return null;
	return match[1].replace(/_/g, ".");
}

// 'OS x_y_z like Mac OS X' --> 'x.y.z'
function iOsVer() {
	var match = navigator.userAgent.match(/OS ([_\d]+) like Mac OS X/);
	if (!match) return null;
	return match[1].replace(/_/g, ".");
}

function testCss(prop) {
	var flag = false;
	var vendors = ["webkit", "moz", "ms", "o"];
	if (prop && typeof prop == "string") {
		var div = document.createElement("div");
		if (prop in div.style) {
			flag = true;
		} else {
			var cased = prop.substr(0, 1).toUpperCase() + prop.substr(1); // text transform : "background" -> "Background"
			for (var k = 0 ; k < vendors.length ; k++) {
				if ((vendors[k] + cased) in div.style) {
					flag = true;
					break;
				}
			}
		}
		div = null;
	}
	return flag;
}

var

CHROME_VERS = browserVer( "Chrome" ),
SAFARI_VERS = browserVer( "Safari" ),
FIREFOX_VERS = browserVer( "Firefox" ),
WEBKIT_VERS = browserVer( "AppleWebKit" ),
OPERA_VERS = browserVer( "Opera" ) || browserVer( "OPR" ), // 理쒓렐�� Opera媛� �덈줈�� �낅뜲�댄듃 �섎㈃�� userAgent媛� 諛붾��. (留덉튂 �щ＼泥섎읆...)

// MS version
TRIDENT_VERS = browserVer( "Trident" ),
MSIE_VERS = msieVer( TRIDENT_VERS ),

ANDROID_VERS = browserVer2( "Android" ),
MACOS_VERS = macOsVer(),
IOS_VERS = iOsVer(), // iOS

IS_MACINTOSH = /\(Macintosh;/.test( navigator.userAgent ), // Macintosh
IS_IPHONE = /\(iPhone;/.test( navigator.userAgent ), // iPhone
IS_IPAD = /\(iPad;/.test( navigator.userAgent ), // iPad
IS_LINUX = /\(Linux;/.test( navigator.userAgent ), // Lunux

ENABLE_WIRELESS_NETWORK = ANDROID_VERS || IOS_VERS,

ENABLE_FLOAT32 = "Float32Array" in window,
ENABLE_FLOAT64 = "Float64Array" in window,

/** HTML5 supportability */
ENABLE_VIDEO_HTML = typeof ( document.createElement("video") )[ "play" ] == "function",
ENABLE_CANVAS_HTML = typeof ( document.createElement("canvas") )[ "getContext" ] == "function",

/** CSS3 supportability */
ENABLE_TRANSFORM_CSS = testCss( "transform" ),
ENABLE_TRANSITION_CSS = testCss( "transition" ),
ENABLE_BACKGROUND_SIZE_CSS = testCss( "backgroundSize" ),
ENABLE_BACKGROUND_BLEND_CSS = testCss( "backgroundBlendMode" ),
ENABLE_BLENDMODE_CSS = testCss( "mixBlendMode" ),
ENABLE_BORDERRADIUS_CSS = testCss( "borderRadius" ),

/** WebGL */
ENABLE_WEBGL = typeof WebGLActiveInfo == "function" || typeof WebGLActiveInfo == "object",
ENABLE_WEBGL_CONTEXT = ENABLE_CANVAS_HTML && !!document.createElement( "canvas" ).getContext( "webgl" ),

/** AnimationFrame supportability */
ENABLE_ANIMATIONFRAME = !!(
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame
);

/*
var webglAPI = [
		"WebGLActiveInfo",
		"WebGLBuffer",
		"WebGLContextEvent",
		"WebGLFramebuffer",
		"WebGLProgram",
		"WebGLRenderbuffer",
		"WebGLRenderingContext",
		"WebGLShader",
		"WebGLShaderPrecisionFormat",
		"WebGLTexture",
		"WebGLUniformLocation"
	];

for ( var k = 0 ; k < webglAPI.length ; k++ ) {
	var apiName = webglAPI[ k ];
	var apiObj = window[ apiName ];
	clientInfo[ apiName ] = typeof apiObj;
}
*/

var cssFlags = [];
if ( MSIE_VERS ) cssFlags.push( 'msie msie' + parseInt( MSIE_VERS ) );
if ( !ENABLE_BACKGROUND_SIZE_CSS ) cssFlags.push( 'no-background-size' );
if ( !ENABLE_TRANSITION_CSS ) cssFlags.push( 'no-transition' );
if ( !ENABLE_TRANSFORM_CSS ) cssFlags.push( 'no-transform' );
if ( !ENABLE_BORDERRADIUS_CSS ) cssFlags.push( 'no-bdradius' );
$( 'html' ).addClass( cssFlags.join( ' ' ) );

/** Polyfill for Array */

Array.prototype.forEach =
	Array.prototype.forEach ||
	function( func ) {
		for ( var i = 0 ; i < this.length ; i++ ) {
			func( this[ i ], i, this );
		}
	};


Array.prototype.some =
	Array.prototype.some ||
	function( func ) {
		for ( var i = 0 ; i < this.length ; i++ ) {
			if ( func( this[ i ], i, this ) ) return true;
		}
		return false;
	};


Array.prototype.every =
	Array.prototype.every ||
	function( func ) {
		for ( var i = 0 ; i < this.length ; i++ ) {
			if ( ! func( this[ i ], i, this ) ) return false;
		}
		return true;
	};


Array.prototype.map =
	Array.prototype.map ||
	function( func ) {
		var modified = [];
		for ( var i = 0 ; i < this.length ; i++ ) {
			modified.push( func( this[ i ], i, this ) );
		}
		return modified;
	};


Array.prototype.filter =
	Array.prototype.filter ||
	function( func ) {
		var array = [];
		for ( var i = 0 ; i < this.length ; i++ ) {
			if ( func( this[ i ], i, this ) ) array.push( this[ i ] );
		}
		return array;
	};

/** Polyfill for String */

String.prototype.trim =
	String.prototype.trim ||
	function() {
		return this.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '' );
	};


String.prototype.includes =
	String.prototype.includes ||
	function() {
		return String.prototype.indexOf.apply(this, arguments) !== -1;
	};


String.prototype.startsWith =
	String.prototype.startsWith ||
	function( searchString, position ) {
		if ( isNaN( position ) ) position = 0;
		return this.indexOf( searchString, position ) === position;
	};


String.prototype.endsWith =
	String.prototype.endsWith ||
	function( searchString, position ) {
		var subjectString = this.toString();
		if ( typeof position !== 'number' ||
			! isFinite( position ) ||
			Math.floor( position ) !== position ||
			position > subjectString.length ) {
			position = subjectString.length;
		}
		position -= searchString.length;
		var lastIndex = subjectString.indexOf( searchString, position );
		return lastIndex !== -1 && lastIndex === position;
	};

window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	(function() {
		var lastTime = 0;
		return function( callback, element ) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = window.setTimeout( function() {
				callback( currTime + timeToCall );
			}, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		};
	})();


window.cancelAnimationFrame =
	window.cancelAnimationFrame ||
	window.webkitCancelAnimationFrame ||
	window.mozCancelAnimationFrame ||
	window.msCancelAnimationFrame ||
	window.oCancelAnimationFrame ||
	function( id ) {
		clearTimeout( id );
	};

/**
 * Embed Noto Sans ( use Google early access )
 * But, no use on mobile devices
 */
if ( !ENABLE_WIRELESS_NETWORK ) {
	document.write( '<link type="text/css" rel="stylesheet" href="../res/css/font.css"/>' );
}

/**
 * initializer
 */
APP.init = (function() {
	function init(fn) {
		if (fn == null) {
			if (_initState) return;
			_initState = 1;
			while (_initStack.length) {
				(_initStack.shift())();
			}
			return;
		}
		if (typeof fn != "function") return;
		if (_initState) fn();
		else _initStack.push(fn);
	}

	var _initStack = [];
	var _initState = 0;

	return init;
})();

window.JsPopupOpen = function(e,w,h){
	window.open(e, "YK踰뺣쪧�щТ��", "width="+w+", height="+h+", toolbar=no, menubar=no, scrollbars=no, resizable=no" );
};

function dataSelectedIndex( element, value ) {
	if ( value === undefined ) return parseInt( $( element ).attr( 'data-selected-index' ) );
	$( element ).attr( 'data-selected-index', value );
}

function createSmartTimeout( defaultDelay ) {

	if ( isNaN( defaultDelay ) || defaultDelay < 0 ) defaultDelay = 0;

	var smartTimeout = function( callback, delay ) {
		if ( isNaN( delay ) || delay < 0 ) delay = defaultDelay;
		clearTimeout( smartTimeout.timeoutID );
		smartTimeout.timeoutID = setTimeout( callback, delay );
	};

	return smartTimeout;
}

function translateX( element, x ) {
	if ( typeof x == 'number' ) x = x + 'px';
	if ( ENABLE_TRANSFORM_CSS ) {
		var tx = '';
		if ( x ) tx = 'translate3d(' + x + ', 0, 1px)';
		element.style.transform =
		element.style.oTransform =
		element.style.msTransform =
		element.style.mozTransform =
		element.style.webkitTransform = tx;
	} else {
		element.style.left = x || '';
	}
}

APP.init(function() {

	$( 'input:radio, input:checkbox' ).checkboxradio();
	$( 'select' ).selectOrDie();

});

if ( CHROME_VERS ) $( 'html' ).addClass( 'chrome_' + CHROME_VERS.replace( /\./g, '_' ) );

/**
 * @class Rect
 * @author dungboy@idenvi.co.kr
 * @version 0.1 2015-08-04 11:21:22
 */
var Rect = (function() {
	function Rect(x, y, width, height) {
		if (!(this instanceof Rect)) return new Rect(x, y, width, height);
		if (x instanceof Rect) return x;
		if (!isNaN(x)) this.x = x;
		if (!isNaN(y)) this.x = y;
		if (width  > 0) this.width  = width;
		if (height > 0) this.height = height;
		this.aspect = this.width / this.height;
	}

	/**
	 * @property
	 */
	Rect.prototype.x = Rect.prototype.y = Rect.prototype.width = Rect.prototype.height = 0;

	/**
	 * @method
	 * @param  -
	 * @return -
	 */
	Rect.prototype.toString = function() {
		return "{x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "}";
	};

	/**
	 * @static
	 * @param  rect1 {Rect}
	 * @param  rect2 {Rect}
	 * @param  axis  {Number}
	 * @return -
	 */
	Rect.makeCover = function(rect1, rect2, axis) {
		if (!(rect1 instanceof Rect)) rect1 = new Rect();
		if (!(rect2 instanceof Rect)) rect2 = new Rect();
		if (!(rect1.width * rect1.height * rect2.width * rect2.height > 0)) return;
		if (axis !== Rect.HORIZONTAL && axis !== Rect.VERTICAL) {
			axis = rect1.width / rect1.height > rect2.width / rect2.height ? Rect.HORIZONTAL : Rect.VERTICAL;
		}
		// horizontal bigger
		if (axis === Rect.HORIZONTAL) {
			var ratio = rect2.height / rect1.height;
			rect1.width = rect1.width * ratio;
			rect1.height = rect2.height;
		}
		// vertical bigger
		if (axis === Rect.VERTICAL) {
			var ratio = rect2.width / rect1.width;
			rect1.width = rect2.width;
			rect1.height = rect1.height * ratio;
		}
		// calc. offset of x and y
		var over = rect1.width - rect2.width;
		rect1.x = over / -2;
		var over = rect1.height - rect2.height;
		rect1.y = over / -2;
	};

	/**
	 * @static
	 * @param  rect1 {Rect}
	 * @param  rect2 {Rect}
	 * @return -
	 */
	Rect.makeContain = function(rect1, rect2) {
		if (!(rect1 instanceof Rect)) rect1 = new Rect();
		if (!(rect2 instanceof Rect)) rect2 = new Rect();
		if (!(rect1.width * rect1.height * rect2.width * rect2.height > 0)) return;
		var axis = rect1.width / rect1.height > rect2.width / rect2.height ? 1 : 2;
		Rect.makeCover(rect1, rect2, 2 - axis + 1);
	};

	Rect.HORIZONTAL = 1;
	Rect.VERTICAL   = 2;

	return Rect;
})();

/**
 * @class WheelController
 * @author dungboy@idenvi.co.kr
 * @version 0.1 2015-08-05 21:41:12
 */
var WheelController = (function() {

	function WheelController( config ) {
		if (!( this instanceof WheelController )) return new WheelController( config );
		this.init( config );
	}

	WheelController.prototype.init = function( config ) {
		if ( !config || typeof config != "object" ) config = {};

		var element = $( config.element )[ 0 ];
		if ( !element ) return;

		var cfg = {
			element    : element,
			onwheelup  : config.onwheelup,
			onwheeldown: config.onwheeldown
		};

		this.__data__ = {
			element : $( element ),
			callback: {
				onwheelup  : [],
				onwheeldown: []
			}
		};

		this.__data__.element.on( "mousewheel DOMMouseScroll", this, wheelHandler );

		this.addCallback( "onwheelup"  , cfg.onwheelup   );
		this.addCallback( "onwheeldown", cfg.onwheeldown );
	};

	WheelController.prototype.destruct = function() {
		if ( !this.__data__ ) return;
		this.__data__.element.unbind( "mousewheel DOMMouseScroll", wheelHandler );
		delete this.__data__;
	};

	/**
	 * @method
	 * @param  name     {String}
	 * @param  callback {Function}
	 * @return -
	 */
	WheelController.prototype.addCallback = function( name, callback ) {
		if ( !this.__data__ ) return;
		var m = this.__data__.callback[ name ];
		if ( m && typeof callback == "function" ) m.push( callback );
	};

	/**
	 * @method
	 * @param  name     {String}
	 * @param  callback {Function}
	 * @return -
	 */
	WheelController.prototype.removeCallback = function( name, callback ) {

		if ( !this.__data__ ) return;

		var m = this.__data__.callback[ name ];
		if ( !m ) return;

		var m2 = [];
		while ( m.length ) {
			var fn = m.shift();
			if ( fn !== callback ) m2.push( fn );
		}

		this.__data__.callback[ name ] = m2;

	};

	/**
	 * @private
	 * @param  event {MouseWheelEvent}
	 * @return Number
	 */
	function getDelta( event ) {
		if ( !event || typeof event != "object" ) return;
		var delta = event.wheelDelta * -1 || event.deltaY || event.detail;
		if ( delta ) return delta > 0 ? 1 : -1;
	}

	/**
	 * @private
	 * @param  stack {Array}
	 * @param  args  {Array}
	 * @return -
	 */
	function callStack(stack, args) {
		if ( !stack || typeof stack != "object" ) return;
		for ( var k = 0 ; k < stack.length ; k++ ) {
			if ( typeof stack[k] == "function" ) stack[ k ].apply( this, args );
		}
	}

	/**
	 * @handler
	 * @param  event {jQueryEvent}
	 * @return -
	 */
	function wheelHandler( event ) {

		var delta = getDelta( event.originalEvent );
		if ( !delta ) return;

		var instance = event.data;
		var type     = delta > 0 ? "onwheeldown" : "onwheelup";
		var callback = instance.__data__.callback[ type ];
		var param = {
			type : type,
			delta: delta,
			event: event.originalEvent
		};

		callStack.call( instance, callback, [ param ] );

	};

	return WheelController;

})();

function NumberGame( duration ) {

	this.element = document.createElement( 'span' )
	this.numberElement = this.element.appendChild( document.createElement( 'span' ) );
	this.numberElement.innerHTML = 0;
	this.animatorElement = this.element.appendChild( document.createElement( 'span' ) );

	//var duration = 1500;
	var easing = [ 0.1, 0.6, 0.75, 0.95 ];
	var trDuration = duration + "ms";
	//var trTimingFn = 'ease-out';
	var trTimingFn = "cubic-bezier(" + easing + ")";
	var style =
		"opacity: 1;" +
		"-webkit-transition-property: opacity;" +
				"transition-property: opacity;" +
		"-webkit-transition-duration: " + trDuration + ";" +
				"transition-duration: " + trDuration + ";" +
		"-webkit-transition-timing-function: " + trTimingFn + ";" +
				"transition-timing-function: " + trTimingFn + ";";

	this.animatorElement.setAttribute( 'style', style );

}

NumberGame.prototype = {

	constructor: NumberGame,

	playTo: function( number ) {

		if ( this.state ) return;
		this.state = 1;

		var numberGame = this;

		//var numeric = [];
		//var length = String( number ).length;
		//var size = Math.pow( 10, length );
		//for ( var i = 0 ; i < size ; i += Math.max( 1, Math.floor( size / 16 ) ) ) {
			//numeric.push( Math.max( size / 10, i ) );
		//}
		//numeric.sort(function() {
			//return Math.random() < 0.5 ? -1 : 1;
		//});
		//console.log( numeric.length );

		var onEnterFrame = function() {

			if ( !numberGame.state ) return;

			var progress = 1 - parseFloat( $( numberGame.animatorElement ).css( 'opacity' ) );
			if ( progress === 1 ) {

				//TODO: Transition ended!!
				numberGame.numberElement.innerHTML = number;
				numberGame.animatorElement.style.opacity = '';
				numberGame.state = 0;

			} else {

				requestAnimationFrame( onEnterFrame );
				//numberGame.numberElement.innerHTML = numeric[ Math.floor( progress * numeric.length ) ];
				if ( number < 10 ) {
					numberGame.numberElement.innerHTML = Math.floor( progress * 10 );
				} else {
					numberGame.numberElement.innerHTML = Math.floor( number * progress );
				}

			}

		};

		onEnterFrame();
		this.animatorElement.style.opacity = 0;

	},

	stop: function() {
		this.state = 0;
	}

};

APP.main = (function() {

function parseImagePath( context ) {
	var reg = /url\("?([^"^\(^\)]+)"?\)/;
	var match = context.match( reg );
	if ( match ) return match[ 1 ];
	return '';
}

var mainLayout = {

	$WRAPPER: function() {
		return $( '#ui_body' );
	},

	resize: function() {
		var $wrapper = this.$WRAPPER();
		var height = $( window ).height() - 86;
		$wrapper.height( height );
		$wrapper[ height < 800 ? 'addClass' : 'removeClass' ]( 'slim-layout' );
		$wrapper[ $( window ).width() < 1500 ? 'addClass' : 'removeClass' ]( 'thin-layout' );
	}

};

var mainIndicator = {

	$CONTEXT: function() {
		return $( '#main_indicator' );
	},

	$ITEMS: function() {
		return $( '#main_indicator li' );
	},

	selectTo: function( index ) {
		this.$ITEMS().each(function( idx, element ) {
			$( element )[ idx === index ? 'addClass' : 'removeClass' ]( 'on' );
		});
		mainIndicator.$CONTEXT()[ mainCenter.getIndex() > 0 ? 'addClass' : 'removeClass' ]( 'page-conter' );
		dataSelectedIndex( this.$CONTEXT(), index );
	},

	changeSkin: function( change ) {
		this.$CONTEXT()[ change ? 'addClass' : 'removeClass' ]( 'black-skin' );
	}

};

var mainStory = {

	busyState: false,
	smartTimeout: createSmartTimeout( 10 ),
	onEnteredStory: createSmartTimeout( 800 ),

	$CONTEXT: function() {
		return $( '#main_stories' );
	},

	$ARTICLE: function() {
		return $( '#main_stories .story-article' );
	},

	getIndex: function() {
		return dataSelectedIndex( this.$CONTEXT() );
	},

	onAfterEnteredStory: function() {

		var index = mainStory.getIndex();
		mainVideo.playOne( index );

		this.$ARTICLE().each(function( idx, element ) {
			$( element )[ idx === index ? 'addClass' : 'removeClass' ]( 'appear' );
		});

		mainCounting[ index === 1 ? 'play' : 'stop' ]();

		if ( index === 2 ) return;
		mainCenter.goCenterTo( 0, true );
		centerIndicator.selectTo( mainCenter.getIndex() );

	},

	updateStoryTo: function( storyIndex ) {

		var
		$article = this.$ARTICLE();
		$article.each(function( idx, element ) {
			$( element )[ idx < storyIndex ? 'addClass' : 'removeClass' ]( 'up' );
			$( element )[ idx > storyIndex ? 'addClass' : 'removeClass' ]( 'down' );
			$( element )[ idx === storyIndex ? 'addClass' : 'removeClass' ]( 'center' );
		});

		if ( !ENABLE_TRANSITION_CSS ) {
			$article.each(function( idx, element ) {
				var duration = $( element ).hasClass( 'no-transition' ) ? 0 : 800;
				var top = '100%';
				if ( $( element ).hasClass( 'up' ) ) top = '-100%';
				if ( $( element ).hasClass( 'center' ) ) top = 0;
				$( element ).stop().clearQueue().animate( { top: top }, { duration: duration, easing: 'easeInOutExpo' } );
			});
		}

		mainIndicator.changeSkin();
		$( '#ui_gates' )[ storyIndex === 4 ? 'addClass' : 'removeClass' ]( 'black-skin' );

	},

	goStoryTo: function( storyIndex, doUpdate ) {

		var $context = this.$CONTEXT();
		var $article = this.$ARTICLE();
		if ( !$article[ storyIndex ] ) return;

		if ( !doUpdate ) {
			if ( mainStory.busyState ) return;
			mainStory.busyState = true;
			mainStory.onEnteredStory(function() {
				mainStory.busyState = false;
				mainStory.onAfterEnteredStory();
			});
		}

		var beforeStory = dataSelectedIndex( $context );
		$article.each(function( idx, element ) {
			$( element )[ idx === storyIndex || idx === beforeStory ? 'removeClass' : 'addClass' ]( 'no-transition' );
		});
		if ( doUpdate ) {
			this.updateStoryTo( storyIndex );
		} else {
			this.smartTimeout(function() {
				mainStory.updateStoryTo( storyIndex );
			});
		}

		dataSelectedIndex( $context, storyIndex );
		if ( doUpdate ) this.onAfterEnteredStory();

	},

	goStoryBy: function( by ) {
		this.goStoryTo( this.getIndex() + by );
	},

	goStoryByAnchor: function( element ) {
		var $story = $( $( element ).attr( 'href' ) );
		this.goStoryTo( this.$ARTICLE().index( $story ) );
	}

};

var mainVideo = {

	$CONTEXT: function() {
		return $( '#main_stories' );
	},

	$CONTAINERS: function() {
		return $( '#main_stories .story-article .story-background' );
	},

	$POSTERS: function() {
		return $( '#main_stories .story-article .story-background img' );
	},

	$VIDEOS: function() {
		var videos = [];
		this.$CONTAINERS().each(function( idx, element ) {
			videos.push( $( element ).find( 'video' )[ 0 ] || null );
		});
		return videos;
	},

	init: function() {
		this.$POSTERS().each(function( idx, element ) {

			var shader = $( '<div class="shade"></div>' ).appendTo( element.parentNode );

			if ( ENABLE_VIDEO_HTML && !ENABLE_WIRELESS_NETWORK ) {
				var
				loader = $( '<video></video>' );
				loader.on(
					'canplaythrough',
					function( event ) {
						loader.appendTo( element.parentNode );
						//$( '<div class="shade"></div>' ).appendTo( element.parentNode );
						shader.remove();
						$( element ).remove();
						mainVideo.resize();
						if ( idx === mainStory.getIndex() ) event.currentTarget.play();
					}
				);
				loader.on(
					'pause',
					function( event ) {
						event.currentTarget.currentTime = 0;
					}
				);
				loader.prop( 'loop', true ).prop( 'muted', true ).prop( 'src', $( element ).attr( 'data-video-src' ) );
				$( element ).removeAttr( 'data-video-src' );
				return;
			}

			// use poster image instead video
			if ( !ENABLE_BACKGROUND_SIZE_CSS ) {
				var bgi = $( element ).css( 'background-image' );
				$( element ).css( 'background-image', '' );
				element.src = parseImagePath( bgi );
			}

		});
	},

	playOne: function( index ) {
		this.$VIDEOS().forEach(function( element, idx ) {
			if ( !element ) return;
			element[ idx === index ? 'play' : 'pause' ]();
		});
	},

	resize: function() {
		this.$VIDEOS().forEach(function( element, idx ) {
			var container = mainVideo.$CONTEXT();
			var rect1 = new Rect( 0, 0, 1280, 720 );
			var rect2 = new Rect( 0, 0, container.width(), container.height() );

			Rect.makeCover(rect1, rect2);
			$( element ).css({
				marginLeft: rect1.x,
				marginTop : rect1.y,
				width : rect1.width,
				height: rect1.height
			});
		});
	}

};

var mainCounting = {

	$ITEM: function() { return $( '#main_story2 .storynum strong' ) },

	init: function() {
		if ( !ENABLE_ANIMATIONFRAME ) return;
		var gameList = [];
		this.$ITEM().each(function( idx, element ) {
			var game = new NumberGame( 500 );
			game.defaultNumber = parseInt( element.innerHTML );
			element.innerHTML = '';
			element.appendChild( game.element );
			gameList.push( game );
		});
		this.gameList = gameList;
	},

	play: function() {
		if ( !ENABLE_ANIMATIONFRAME ) return;
		this.gameList.forEach(function( element, index ) {
			clearTimeout( element.stoId );
			element.stoId = setTimeout(
				function() {
					element.playTo( element.defaultNumber );
				},
				index * 100 + 700
			);
		});
	},

	stop: function() {
	}

};

var mainCenter = {

	smartTimeout: createSmartTimeout( 10 ),
	onEnteredCenter: createSmartTimeout( 800 ),

	$CONTEXT: function() {
		return $( '#center_stories' );
	},

	$ARTICLE: function() {
		return $( '#center_stories .story-center' );
	},

	getIndex: function() {
		return dataSelectedIndex( this.$CONTEXT() );
	},

	updateCenterTo: function( centerIndex ) {

		var
		$article = this.$ARTICLE();
		$article.each(function( idx, element ) {
			$( element )[ idx < centerIndex ? 'addClass' : 'removeClass' ]( 'left' );
			$( element )[ idx > centerIndex ? 'addClass' : 'removeClass' ]( 'right' );
			$( element )[ idx === centerIndex ? 'addClass' : 'removeClass' ]( 'center' );
		});

		if ( !ENABLE_TRANSITION_CSS ) {
			$article.each(function( idx, element ) {
				var duration = $( element ).hasClass( 'no-transition' ) ? 0 : 800;
				var left = '100%';
				if ( $( element ).hasClass( 'left' ) ) left = '-100%';
				if ( $( element ).hasClass( 'center' ) ) left = 0;
				$( element ).stop().clearQueue().animate( { left: left }, { duration: duration, easing: 'easeInOutExpo' } );
			});
		}

		mainIndicator.changeSkin( mainCenter.getIndex() > 0 );

	},

	goCenterTo: function( centerIndex, doUpdate ) {

		var $context = this.$CONTEXT();
		var $article = this.$ARTICLE();
		if ( !$article[ centerIndex ] ) return;

		if ( !doUpdate ) {
			if ( mainCenter.busyState ) return;
			mainCenter.busyState = true;
			mainCenter.onEnteredCenter(function() {
				mainCenter.busyState = false;
			});
		}

		var beforeCenter = dataSelectedIndex( $context );
		$article.each(function( idx, element ) {
			$( element )[ idx === centerIndex || idx === beforeCenter ? 'removeClass' : 'addClass' ]( 'no-transition' );
		});
		if ( doUpdate ) {
			$article.addClass( 'no-transition' );
			this.updateCenterTo( centerIndex );
		} else {
			this.smartTimeout(function() {
				mainCenter.updateCenterTo( centerIndex );
			});
		}

		dataSelectedIndex( $context, centerIndex );

	},

	goCenterBy: function( by ) {
		this.goCenterTo( this.getIndex() + by );
	},

	goCenterByAnchor: function( element ) {
		var $center = $( $( element ).attr( 'href' ) );
		this.goCenterTo( this.$ARTICLE().index( $center ) );
	}

};

var centerIndicator = {

	$CONTEXT: function() {
		return $( '#center_indicator' );
	},

	$ITEMS: function() {
		return $( '#center_indicator li' );
	},

	selectTo: function( index ) {
		this.$ITEMS().each(function( idx, element ) {
			$( element )[ idx === index ? 'addClass' : 'removeClass' ]( 'on' );
		});
		dataSelectedIndex( this.$CONTEXT(), index );
		mainIndicator.changeSkin( mainCenter.getIndex() > 0 );
	}

};

var main = {

	goStoryByAnchor: function( element ) {
		mainStory.goStoryByAnchor( element );
		mainIndicator.selectTo( mainStory.getIndex() );
	},

	goCenterStoryByAnchor: function( element ) {
		mainCenter.goCenterByAnchor( element );
		centerIndicator.selectTo( mainCenter.getIndex() );
	}

};

var mainWheel = {

	smartTimeout: createSmartTimeout( IS_MACINTOSH ? 500 : 800 ),

	requestAction: function( action ) {
		if ( this.busyState ) return;
		this.busyState = true;
		this.smartTimeout(function() {
			mainWheel.busyState = false;
		});
		action();
	},

	onwheelup  : function() {
		if ( mainStory.getIndex() === 0 && mainCenter.getIndex() > 0 ) {
			// Horizontal move
			mainCenter.goCenterBy( -1 );
		} else {
			// Vertical move
			mainStory.goStoryBy( -1 );
		}
		mainIndicator.selectTo( mainStory.getIndex() );
		centerIndicator.selectTo( mainCenter.getIndex() );
	},

	onwheeldown: function() {
		if ( mainStory.getIndex() === 0 && mainCenter.getIndex() < mainCenter.$ARTICLE().length - 1 ) {
			// Horizontal move
			mainCenter.goCenterBy( 1 );
		} else {
			// Vertical move
			mainStory.goStoryBy( 1 );
		}
		mainIndicator.selectTo( mainStory.getIndex() );
		centerIndicator.selectTo( mainCenter.getIndex() );
	}

};

APP.init(function() {

	$( window ).on(
		'resize',
		function( event ) {
			mainLayout.resize();
			mainVideo.resize();
		}
	);
	mainLayout.resize();

	new WheelController({
		element    : document.getElementById( 'ui_body' ),
		onwheelup  : function() {
			mainWheel.requestAction( mainWheel.onwheelup );
		},
		onwheeldown: function() {
			mainWheel.requestAction( mainWheel.onwheeldown );
		}
	});

	mainVideo.init();
	mainCounting.init();
	mainStory.goStoryTo( 0, true );
	mainIndicator.selectTo( 0 );

});

return main;

})();



})();

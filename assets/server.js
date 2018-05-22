/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _server = __webpack_require__(3);

	var _routes = __webpack_require__(13);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by kokil on 30/09/16.
	 */
	var express = __webpack_require__(17);
	var compression = __webpack_require__(18);
	var bodyParser = __webpack_require__(19);
	var path = __webpack_require__(20);
	var app = express();

	if (false) {
	  var webpackConfig = require('../webpack.config');
	  var compiler = require('webpack')(webpackConfig);
	  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
	  app.use(require('webpack-hot-middleware')(compiler));
	}

	app.disable('x-powered-by');

	app.use(compression());
	// app.use('/assets', express.static(path.resolve(__dirname, '../assets'), {
	//   maxAge: '7d'
	// }));
	// const x = fs.readdirSync('./assets');
	app.use('/assets', express.static('./')); // running inside assets/

	var renderFullPage = function renderFullPage(html, initialState) {
	  var jsPath = '/assets/client.js';
	  var faviconPath = '/assets/favicon.ico';
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Vikramaditya Kokil</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0">\n        <link rel="shortcut icon" type="image/ico" href=' + faviconPath + '>\n        <link rel="apple-touch-icon" sizes="180x180" href=' + faviconPath + '>\n        <link rel="icon" type="image/ico" sizes="32x32" href=' + faviconPath + '>\n        <link rel="icon" type="image/ico" sizes="16x16" href=' + faviconPath + '>\n        <meta name="theme-color" content="#ffffff">\n        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />\n        <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />\n        <link rel="canonical" href="http://www.kokill.com/" />\n        <meta name="author" content="Vikramaditya Kokil">\n        <meta name="robots" content="index, follow">\n        <meta name="news_keywords" content="Vikramaditya Kokil" />\n        <meta name="keywords" content="Vikramaditya Kokil" />\n        <meta property="og:site_name" content="Vikramaditya Kokil" />\n        <meta property="og:url" content="http://www.kokill.com/" />\n        <meta property="og:title" content="Vikramaditya Kokil"/>\n        <meta property="og:image" content="http://www.kokill.com/assets/profile2.jpg" />\n        <meta property="og:type" content="website" />\n        <meta name="twitter:site" content="@imkokil" />\n        <meta name="twitter:url" content="http://www.kokill.com/" />\n        <meta name="twitter:title" content="Vikramaditya Kokil"/>\n        <meta name="description" content="My Personal Website" />\n        <meta property="og:description" content="My Personal Website" />\n        <meta name="twitter:description" content="My Personal Website" />\n        <meta name="twitter:image" content="http://www.kokill.com/assets/profile2.jpg" />\n        <meta name="twitter:card" content="summary">\n        <meta name="title" content="Vikramaditya Kokil"/>\n        <meta name="medium" content="index" />\n\n        <link rel="stylesheet" href="/assets/bootstrap.min.css" >\n        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />\n      </head>\n      <body>\n        <div id="root"><div>' + html + '</div></div>\n        <script src="' + jsPath + '"></script>\n        <script>\n          (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n          })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n          ga(\'create\', \'UA-85876401-1\', \'auto\');\n          ga(\'send\', \'pageview\');\n        </script>\n      </body>\n    </html>\n  ';
	};
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	// app.use('/api', routes);
	app.get('/*', function (req, res) {
	  res.header('Content-Type', 'text/html; charset=utf-8');
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	    res.status(200).end(renderFullPage(appHtml, {}));
	  });
	});
	app.listen(process.env.PORT || 8080, function (err) {
	  if (err) {
	    throw err;
	  }
	  console.log('server running on port ' + (process.env.PORT || 8080));
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (true) {
	  module.exports = __webpack_require__(5);
	} else {
	  module.exports = require('./cjs/react-dom-server.node.development.js');
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.2.0
	 * react-dom-server.node.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';var k=__webpack_require__(6),r=__webpack_require__(1),aa=__webpack_require__(7),t=__webpack_require__(8),ba=__webpack_require__(9),ca=__webpack_require__(11),da=__webpack_require__(12);
	function w(a){for(var b=arguments.length-1,g="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)g+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
	var x={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0};function z(a,b){return(a&b)===b}
	var B={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=B,g=a.Properties||{},c=a.DOMAttributeNamespaces||{},h=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in g){C.hasOwnProperty(f)?w("48",f):void 0;var e=f.toLowerCase(),d=g[f];e={attributeName:e,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:z(d,b.MUST_USE_PROPERTY),
	hasBooleanValue:z(d,b.HAS_BOOLEAN_VALUE),hasNumericValue:z(d,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:z(d,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:z(d,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:z(d,b.HAS_STRING_BOOLEAN_VALUE)};1>=e.hasBooleanValue+e.hasNumericValue+e.hasOverloadedBooleanValue?void 0:w("50",f);h.hasOwnProperty(f)&&(e.attributeName=h[f]);c.hasOwnProperty(f)&&(e.attributeNamespace=c[f]);a.hasOwnProperty(f)&&(e.mutationMethod=a[f]);C[f]=e}}},C={};
	function ea(a,b){if(x.hasOwnProperty(a)||2<a.length&&("o"===a[0]||"O"===a[0])&&("n"===a[1]||"N"===a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return D(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}}function E(a){return C.hasOwnProperty(a)?C[a]:null}
	function D(a){if(x.hasOwnProperty(a))return!0;var b=E(a);if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a}
	var F=B,G=F.MUST_USE_PROPERTY,H=F.HAS_BOOLEAN_VALUE,I=F.HAS_NUMERIC_VALUE,J=F.HAS_POSITIVE_NUMERIC_VALUE,K=F.HAS_OVERLOADED_BOOLEAN_VALUE,L=F.HAS_STRING_BOOLEAN_VALUE,fa={Properties:{allowFullScreen:H,async:H,autoFocus:H,autoPlay:H,capture:K,checked:G|H,cols:J,contentEditable:L,controls:H,"default":H,defer:H,disabled:H,download:K,draggable:L,formNoValidate:H,hidden:H,loop:H,multiple:G|H,muted:G|H,noValidate:H,open:H,playsInline:H,readOnly:H,required:H,reversed:H,rows:J,rowSpan:I,scoped:H,seamless:H,
	selected:G|H,size:J,start:I,span:J,spellCheck:L,style:0,tabIndex:0,itemScope:H,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:L},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+
	b)}}},M=F.HAS_STRING_BOOLEAN_VALUE,N={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},O={Properties:{autoReverse:M,externalResourcesRequired:M,preserveAlpha:M},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:N.xlink,xlinkArcrole:N.xlink,xlinkHref:N.xlink,xlinkRole:N.xlink,xlinkShow:N.xlink,xlinkTitle:N.xlink,xlinkType:N.xlink,xmlBase:N.xml,xmlLang:N.xml,
	xmlSpace:N.xml}},ha=/[\-\:]([a-z])/g;function ia(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(ha,
	ia);O.Properties[b]=0;O.DOMAttributeNames[b]=a});F.injectDOMPropertyConfig(fa);F.injectDOMPropertyConfig(O);var P="function"===typeof Symbol&&Symbol["for"]?Symbol["for"]("react.fragment"):60107,ja=/["'&<>]/;
	function Q(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ja.exec(a);if(b){var g="",c,h=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="\x26quot;";break;case 38:b="\x26amp;";break;case 39:b="\x26#x27;";break;case 60:b="\x26lt;";break;case 62:b="\x26gt;";break;default:continue}h!==c&&(g+=a.substring(h,c));h=c+1;g+=b}a=h!==c?g+a.substring(h,c):g}return a}
	var ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},S={};function la(a){if(S.hasOwnProperty(a))return!0;if(R.hasOwnProperty(a))return!1;if(ka.test(a))return S[a]=!0;R[a]=!0;return!1}
	function ma(a,b){var g=E(a);if(g){if(null==b||g.hasBooleanValue&&!b||g.hasNumericValue&&isNaN(b)||g.hasPositiveNumericValue&&1>b||g.hasOverloadedBooleanValue&&!1===b)return"";var c=g.attributeName;if(g.hasBooleanValue||g.hasOverloadedBooleanValue&&!0===b)return c+'\x3d""';if("boolean"!==typeof b||D(a))return c+"\x3d"+('"'+Q(b)+'"')}else if(ea(a,b))return null==b?"":a+"\x3d"+('"'+Q(b)+'"');return null}var T={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function U(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
	var V={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},na=k({menuitem:!0},V),W={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,
	fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oa=["Webkit","ms","Moz","O"];Object.keys(W).forEach(function(a){oa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);W[b]=W[a]})});var X=r.Children.toArray,pa=aa.thatReturns(""),qa={listing:!0,pre:!0,textarea:!0};
	function ra(a){return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}var sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ta={},ua=ca(function(a){return ba(a)});function va(a){var b="";r.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function wa(a,b){if(a=a.contextTypes){var g={},c;for(c in a)g[c]=b[c];b=g}else b=t;return b}var xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};
	function ya(a,b){void 0===a&&w("152",ra(b)||"Component")}
	function za(a,b){for(;r.isValidElement(a);){var g=a,c=g.type;if("function"!==typeof c)break;a=wa(c,b);var h=[],f=!1,e={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===h)return null},enqueueReplaceState:function(a,b){f=!0;h=[b]},enqueueSetState:function(a,b){if(null===h)return null;h.push(b)}};if(c.prototype&&c.prototype.isReactComponent)var d=new c(g.props,a,e);else if(d=c(g.props,a,e),null==d||null==d.render){a=d;ya(a,c);continue}d.props=g.props;d.context=a;d.updater=e;e=d.state;
	void 0===e&&(d.state=e=null);if(d.componentWillMount)if(d.componentWillMount(),h.length){e=h;var n=f;h=null;f=!1;if(n&&1===e.length)d.state=e[0];else{var p=n?e[0]:d.state,l=!0;for(n=n?1:0;n<e.length;n++){var m=e[n];if(m="function"===typeof m?m.call(d,p,g.props,a):m)l?(l=!1,p=k({},p,m)):k(p,m)}d.state=p}}else h=null;a=d.render();ya(a,c);if("function"===typeof d.getChildContext&&(g=c.childContextTypes,"object"===typeof g)){var A=d.getChildContext();for(var y in A)y in g?void 0:w("108",ra(c)||"Unknown",
	y)}A&&(b=k({},b,A))}return{child:a,context:b}}
	var Y=function(){function a(b,g){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");r.isValidElement(b)?b.type!==P?b=[b]:(b=b.props.children,b=r.isValidElement(b)?[b]:X(b)):b=X(b);this.stack=[{domNamespace:T.html,children:b,childIndex:0,context:t,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=g}a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=
	!0;break}var c=this.stack[this.stack.length-1];if(c.childIndex>=c.children.length){var h=c.footer;b+=h;""!==h&&(this.previousWasTextNode=!1);this.stack.pop();"select"===c.tag&&(this.currentSelectValue=null)}else h=c.children[c.childIndex++],b+=this.render(h,c.context,c.domNamespace)}return b};a.prototype.render=function(a,g,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return Q(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+Q(c);this.previousWasTextNode=
	!0;return Q(c)}g=za(a,g);a=g.child;g=g.context;if(null===a||!1===a)return"";if(r.isValidElement(a))return a.type===P?(a=X(a.props.children),this.stack.push({domNamespace:c,children:a,childIndex:0,context:g,footer:""}),""):this.renderDOM(a,g,c);a=X(a);this.stack.push({domNamespace:c,children:a,childIndex:0,context:g,footer:""});return""};a.prototype.renderDOM=function(a,g,c){var b=a.type.toLowerCase();c===T.html&&U(b);ta.hasOwnProperty(b)||(sa.test(b)?void 0:w("65",b),ta[b]=!0);var f=a.props;if("input"===
	b)f=k({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===b){var e=f.value;if(null==e){e=f.defaultValue;var d=f.children;null!=d&&(null!=e?w("92"):void 0,Array.isArray(d)&&(1>=d.length?void 0:w("93"),d=d[0]),e=""+d);null==e&&(e="")}f=k({},f,{value:void 0,children:""+e})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=k({},f,{value:void 0});
	else if("option"===b){d=this.currentSelectValue;var n=va(f.children);if(null!=d){var p=null!=f.value?f.value+"":n;e=!1;if(Array.isArray(d))for(var l=0;l<d.length;l++){if(""+d[l]===p){e=!0;break}}else e=""+d===p;f=k({selected:void 0,children:void 0},f,{selected:e,children:n})}}if(e=f)na[b]&&(null!=e.children||null!=e.dangerouslySetInnerHTML?w("137",b,pa()):void 0),null!=e.dangerouslySetInnerHTML&&(null!=e.children?w("60"):void 0,"object"===typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML?
	void 0:w("61")),null!=e.style&&"object"!==typeof e.style?w("62",pa()):void 0;e=f;d=this.makeStaticMarkup;n=1===this.stack.length;p="\x3c"+a.type;for(q in e)if(e.hasOwnProperty(q)){var m=e[q];if(null!=m){if("style"===q){l=void 0;var A="",y="";for(l in m)if(m.hasOwnProperty(l)){var u=0===l.indexOf("--"),v=m[l];null!=v&&(A+=y+ua(l)+":",y=l,u=null==v||"boolean"===typeof v||""===v?"":u||"number"!==typeof v||0===v||W.hasOwnProperty(y)&&W[y]?(""+v).trim():v+"px",A+=u,y=";")}m=A||null}l=null;b:if(u=b,v=e,
	-1===u.indexOf("-"))u="string"===typeof v.is;else switch(u){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":u=!1;break b;default:u=!0}u?xa.hasOwnProperty(q)||(l=q,l=la(l)&&null!=m?l+"\x3d"+('"'+Q(m)+'"'):""):l=ma(q,m);l&&(p+=" "+l)}}d||n&&(p+=' data-reactroot\x3d""');var q=p;e="";V.hasOwnProperty(b)?q+="/\x3e":(q+="\x3e",e="\x3c/"+a.type+"\x3e");a:{d=f.dangerouslySetInnerHTML;if(null!=
	d){if(null!=d.__html){d=d.__html;break a}}else if(d=f.children,"string"===typeof d||"number"===typeof d){d=Q(d);break a}d=null}null!=d?(f=[],qa[b]&&"\n"===d.charAt(0)&&(q+="\n"),q+=d):f=X(f.children);a=a.type;c=null==c||"http://www.w3.org/1999/xhtml"===c?U(a):"http://www.w3.org/2000/svg"===c&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":c;this.stack.push({domNamespace:c,tag:b,children:f,childIndex:0,context:g,footer:e});this.previousWasTextNode=!1;return q};return a}();
	function Aa(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
	var Ba=function(a){function b(g,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var h=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");h=!h||"object"!==typeof h&&"function"!==typeof h?this:h;h.partialRenderer=new Y(g,c);return h}Aa(b,a);b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.emit("error",c)}};return b}(da.Readable),Ca={renderToString:function(a){return(new Y(a,
	!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new Y(a,!0)).read(Infinity)},renderToNodeStream:function(a){return new Ba(a,!1)},renderToStaticNodeStream:function(a){return new Ba(a,!0)},version:"16.2.0"},Da=Object.freeze({default:Ca}),Z=Da&&Ca||Da;module.exports=Z["default"]?Z["default"]:Z;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("object-assign");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (false) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(10);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("stream");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _app = __webpack_require__(14);

	var _app2 = _interopRequireDefault(_app);

	var _HomePage = __webpack_require__(15);

	var _HomePage2 = _interopRequireDefault(_HomePage);

	var _NotFound = __webpack_require__(16);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _app2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
	);

	exports.default = routes;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	if (false) {
	  require('./main.css');
	}

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props, context) {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by kokil on 16/10/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	if (false) {
	  require('./Homepage.css');
	}

	var HomePage = function (_Component) {
	  _inherits(HomePage, _Component);

	  function HomePage(props) {
	    _classCallCheck(this, HomePage);

	    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

	    var that = _this;
	    that.state = {
	      innerHeight:  false ? window.innerHeight : 700,
	      innerWidth:  false ? window.innerWidth : 1200
	    };
	    return _this;
	  }

	  _createClass(HomePage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      if (false) {
	        window.addEventListener('resize', function () {
	          that.setState({
	            innerHeight: window.innerHeight,
	            innerWidth: window.innerWidth
	          });
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var that = this;
	      var sm = 768;
	      var md = 992;
	      var isSm = that.state.innerWidth > sm && that.state.innerWidth < md;
	      var isXs = that.state.innerWidth < sm;
	      var tools = ['PHP', 'jQuery', 'ES6/ES7 (Babel)', 'Yarn/npm/bower', 'Bootstrap', 'Semantic-UI', 'Material-UI', 'Blueprint', 'Modernizr', 'Redux', 'Flux', 'Reflux', 'Lodash', 'Moment', 'Promise/Bluebird/Q', 'HighCharts/Chartist/Chart.js', 'Tradingview', 'GraphQL', 'Apollo GraphQL', 'Mongoose', 'Sequelize', 'Websockets', 'Mocha', 'Chai', 'Enzyme', 'Ava', 'Eslint', 'Less/Sass/PostCSS', 'Blockchain', 'Solidity', 'web3.js', 'Bitcoin', 'Ethereum', 'Smart Contracts', 'IPFS', 'ByteBall', 'Ripple', 'IOTA', 'Webpack', 'Browserify', 'Gulp', 'Express/Koa', 'PassportJS/JWT/OAuth2', 'Redis', 'Iris', 'Docker', 'Nginx', 'Arduino', 'MATLAB', 'AWS/Digital Ocean/Linode', 'VSCode/Atom.io/Sublime'];
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-12 col-sm-12' },
	              _react2.default.createElement(
	                'h3',
	                null,
	                'Personal Information'
	              ),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-2 col-sm-2 col-xs-12 text-center' },
	                _react2.default.createElement('img', { style: { maxHeight: '200px', objectFit: 'contain' }, height: '200', src: '/assets/profile2.jpg' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-10 col-sm-10 col-xs-12' },
	                _react2.default.createElement(
	                  'h4',
	                  null,
	                  'Vikramaditya Kokil'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { href: 'mailto:' },
	                  _react2.default.createElement('img', { height: '20', src: '/assets/email.png' })
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'R.R Residency, 22, Hosapalya, Bangalore - 560068'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-12 col-sm-12 col-xs-12' },
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-6 col-sm-6 col-xs-12' },
	                _react2.default.createElement(
	                  'h4',
	                  null,
	                  _react2.default.createElement(
	                    'strong',
	                    null,
	                    'Employers'
	                  )
	                ),
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(
	                  'ul',
	                  { className: 'list-group' },
	                  _react2.default.createElement(
	                    'li',
	                    { style: { listStyle: 'none', padding: '10px', borderBottom: '1px solid #ccc' }, className: 'col-md-12 col-sm-12 col-xs-12' },
	                    _react2.default.createElement(
	                      'a',
	                      { className: 'col-md-3 col-sm-3 col-xs-12', href: '//www.numberz.in', target: '_blank' },
	                      _react2.default.createElement('img', { style: { maxHeight: '80px', objectFit: 'contain', height: '80px', maxWidth: '100px' }, height: '50', src: '//pbs.twimg.com/profile_images/738651281317842944/Gs6NhM6r_400x400.jpg' })
	                    ),
	                    isXs && _react2.default.createElement('p', { style: { clear: 'both' } }),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-md-9 col-sm-9 col-xs-12' },
	                      _react2.default.createElement(
	                        'h4',
	                        { style: { margin: '0' } },
	                        _react2.default.createElement(
	                          'strong',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '//www.numberz.in', className: 'btn-link', target: '_blank', style: { color: '#000' } },
	                            'Numberz'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'small',
	                          { className: 'pull-right' },
	                          'March 2016 - December 2016'
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        { className: 'text-nowrap' },
	                        'Software developer'
	                      ),
	                      _react2.default.createElement(
	                        'p',
	                        null,
	                        'Koramangala Bangalore'
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    { style: { listStyle: 'none', padding: '10px', borderBottom: '1px solid #ccc' }, className: 'col-md-12 col-sm-12 col-xs-12' },
	                    _react2.default.createElement(
	                      'a',
	                      { className: 'col-md-3 col-sm-3 col-xs-12', href: '//www.dekorate.in', target: '_blank' },
	                      _react2.default.createElement('img', { style: { maxHeight: '80px' }, height: '50', src: 'https://s-media-cache-ak0.pinimg.com/avatars/aman0533_1449058478_444.jpg' })
	                    ),
	                    isXs && _react2.default.createElement('p', { style: { clear: 'both' } }),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-md-9 col-sm-9 col-xs-12' },
	                      _react2.default.createElement(
	                        'h4',
	                        { style: { margin: '0' } },
	                        _react2.default.createElement(
	                          'strong',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '//www.dekorate.in', className: 'btn-link', target: '_blank', style: { color: '#000' } },
	                            'Dekorate'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'small',
	                          { className: 'pull-right' },
	                          'Feb 2015 - Feb 2016'
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        { className: 'text-nowrap' },
	                        'Software developer'
	                      ),
	                      _react2.default.createElement(
	                        'p',
	                        null,
	                        'Gurgaon'
	                      )
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-6 col-sm-6 col-xs-12' },
	                _react2.default.createElement(
	                  'h4',
	                  null,
	                  _react2.default.createElement(
	                    'strong',
	                    null,
	                    'Education'
	                  )
	                ),
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(
	                  'ul',
	                  { className: 'list-group' },
	                  _react2.default.createElement(
	                    'li',
	                    { style: { listStyle: 'none', padding: '10px', borderBottom: '1px solid #ccc' }, className: 'col-md-12 col-sm-12 col-xs-12' },
	                    _react2.default.createElement(
	                      'a',
	                      { className: 'col-md-3 col-sm-3 col-xs-12 text-center', href: '//www.daiict.ac.in', target: '_blank' },
	                      _react2.default.createElement('img', { style: { maxHeight: '80px' }, height: '80', src: '/assets/daiict.jpg' })
	                    ),
	                    isXs && _react2.default.createElement('p', { style: { clear: 'both' } }),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-md-9 col-sm-9 col-xs-12' },
	                      _react2.default.createElement(
	                        'h4',
	                        { style: { margin: '0' } },
	                        _react2.default.createElement(
	                          'strong',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '//www.daiict.ac.in', className: 'btn-link', target: '_blank', style: { color: '#000' } },
	                            'DA-IICT'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'small',
	                          { className: 'pull-right' },
	                          'July 2011 - April 2015'
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        null,
	                        'B.Tech'
	                      ),
	                      _react2.default.createElement(
	                        'p',
	                        null,
	                        'Gandhinagar, Gujarat'
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    { style: { listStyle: 'none', padding: '10px', borderBottom: '1px solid #ccc' }, className: 'col-md-12 col-sm-12 col-xs-12' },
	                    _react2.default.createElement(
	                      'a',
	                      { className: 'col-md-3 col-sm-3 col-xs-12 text-center', href: '//www.stdominicsavios.com', target: '_blank' },
	                      _react2.default.createElement('img', { style: { maxHeight: '80px', height: '80px', objectFit: 'contain', maxWidth: '100px' }, height: '50', width: '100', src: 'http://www.stdominicsavios.com/wp-content/uploads/2016/08/index_10.gif' })
	                    ),
	                    isXs && _react2.default.createElement('p', { style: { clear: 'both' } }),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-md-9 col-sm-9 col-xs-12' },
	                      _react2.default.createElement(
	                        'h4',
	                        { style: { margin: '0', overflowX: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
	                        _react2.default.createElement(
	                          'strong',
	                          null,
	                          _react2.default.createElement(
	                            'a',
	                            { href: '//www.stdominicsavios.com/', className: 'btn-link', target: '_blank', style: { color: '#000', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflowX: 'hidden' } },
	                            'St. Dominic Savio\'s High School'
	                          )
	                        ),
	                        _react2.default.createElement(
	                          'small',
	                          { className: 'pull-right' },
	                          'March-2011'
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        null,
	                        '12th'
	                      ),
	                      _react2.default.createElement(
	                        'p',
	                        null,
	                        'Patna, Bihar'
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-12' },
	              _react2.default.createElement(
	                'h3',
	                null,
	                'Skills'
	              ),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-4' },
	                _react2.default.createElement(
	                  'ul',
	                  { className: 'list-group' },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'HTML 5, CSS 3, Javascript'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'JavaScript Libraries & Frameworks(React, Angular, Phaser.JS)'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Node.JS'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'GoLang'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Data Structure and Algorithms'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Databases (MongoDB, PostgreSQL, MySQL) '
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-4' },
	                _react2.default.createElement(
	                  'ul',
	                  { className: 'list-group' },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'C / C++'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Java'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Python'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Swift'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'OpenCV, PyOpenGL'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'CUDA'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-md-4' },
	                _react2.default.createElement(
	                  'ul',
	                  { className: 'list-group' },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Mac'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Linux'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Windows'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'GIT'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'AWS'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Heroku'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'h3',
	              null,
	              _react2.default.createElement(
	                'center',
	                null,
	                'Other tools and technologies'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' } },
	              tools.map(function (t, ind) {
	                return _react2.default.createElement(
	                  'button',
	                  { style: { pointerEvents: 'none', minWidth: '60px', margin: '2px 4px', borderRadius: '16px' }, className: 'btn btn-default btn-sm', key: ind },
	                  t
	                );
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'footer',
	          null,
	          _react2.default.createElement('hr', { style: { borderColor: '#ccc' } }),
	          _react2.default.createElement(
	            'center',
	            null,
	            _react2.default.createElement(
	              'a',
	              { className: 'icons', href: 'https://github.com/kokill', target: '_blank' },
	              _react2.default.createElement('i', { className: 'fa fa-github github' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'icons', href: 'https://linkedin.com/in/kokil', target: '_blank' },
	              _react2.default.createElement('i', { className: 'fa fa-linkedin linkedin' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'icons', href: 'http://stackoverflow.com/users/1439321', target: '_blank' },
	              _react2.default.createElement('i', { className: 'fa fa-stack-overflow stack' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'icons', href: 'https://twitter.com/imkokil', target: '_blank' },
	              _react2.default.createElement('i', { className: 'fa fa-twitter twitter' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'icons', href: 'https://www.facebook.com/vikramaditya.kokil', target: '_blank' },
	              _react2.default.createElement('i', { className: 'fa fa-facebook facebook' })
	            )
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null)
	        )
	      );
	    }
	  }]);

	  return HomePage;
	}(_react.Component);

	exports.default = HomePage;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotFound = function NotFound() {
	  return _react2.default.createElement(
	    "center",
	    null,
	    _react2.default.createElement(
	      "h2",
	      null,
	      "404. Not found."
	    ),
	    _react2.default.createElement(
	      "p",
	      null,
	      "Go ",
	      _react2.default.createElement(
	        "a",
	        { href: "/" },
	        "Home"
	      ),
	      "."
	    )
	  );
	};

	exports.default = NotFound;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("compression");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ })
/******/ ]);
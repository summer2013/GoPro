(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else {
    var a = factory();
    for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(this, function() {
  return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if(installedModules[moduleId])
      /******/ 			return installedModules[moduleId].exports;
      /******/
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			exports: {},
        /******/ 			id: moduleId,
        /******/ 			loaded: false
        /******/ 		};
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.loaded = true;
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "build/";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
  /************************************************************************/
  /******/ ([
    /* 0 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _env = __webpack_require__(1);

      var _env2 = _interopRequireDefault(_env);

      var _windvane = __webpack_require__(2);

      var _windvane2 = _interopRequireDefault(_windvane);

      var _common = __webpack_require__(3);

      var _common2 = _interopRequireDefault(_common);

      var _report = __webpack_require__(7);

      var _report2 = _interopRequireDefault(_report);

      var _app = __webpack_require__(8);

      var _app2 = _interopRequireDefault(_app);

      var _app3 = __webpack_require__(28);

      var _app4 = _interopRequireDefault(_app3);

      var _config = __webpack_require__(42);

      var _config2 = _interopRequireDefault(_config);

      var _draw = __webpack_require__(43);

      var _draw2 = _interopRequireDefault(_draw);

      var _spiAward = __webpack_require__(46);

      var _spiAward2 = _interopRequireDefault(_spiAward);

      var _makeup = __webpack_require__(47);

      var _makeup2 = _interopRequireDefault(_makeup);

      var _video = __webpack_require__(25);

      var _video2 = _interopRequireDefault(_video);

      var _wvar = __webpack_require__(48);

      var _wvar2 = _interopRequireDefault(_wvar);

      var _hybridApi = __webpack_require__(49);

      var _hybridApi2 = _interopRequireDefault(_hybridApi);

      var _appStatus = __webpack_require__(50);

      var _appStatus2 = _interopRequireDefault(_appStatus);

      var _follow = __webpack_require__(51);

      var _follow2 = _interopRequireDefault(_follow);

      var _arScan = __webpack_require__(52);

      var _arScan2 = _interopRequireDefault(_arScan);

      var _acl = __webpack_require__(53);

      var _acl2 = _interopRequireDefault(_acl);

      var _vip = __webpack_require__(54);

      var _vip2 = _interopRequireDefault(_vip);

      var _applyCoupon = __webpack_require__(55);

      var _applyCoupon2 = _interopRequireDefault(_applyCoupon);

      var _uiClose = __webpack_require__(56);

      var _uiClose2 = _interopRequireDefault(_uiClose);

      var _ticker = __webpack_require__(57);

      var _ticker2 = _interopRequireDefault(_ticker);

      var _fairyland = __webpack_require__(58);

      var _fairyland2 = _interopRequireDefault(_fairyland);

      var _retail = __webpack_require__(59);

      var _retail2 = _interopRequireDefault(_retail);

      var _weitaoSub = __webpack_require__(60);

      var _weitaoSub2 = _interopRequireDefault(_weitaoSub);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      // import Visibility from './common/visibility';

      // import Customization from './common/customization';
      // require('./lib/env');
      // require('./lib/windvane');
      var Tida = window.Tida || {};
      // ;(function(){
      var domain = document.domain;
      if (lib.env.aliapp && (lib.env.aliapp.appname == 'TB' || lib.env.aliapp.appname == 'TB-PD')) {
        // 鎵嬫窐
        Tida = _app2.default;
      } else {
        // 澶╃尗
        Tida = _app4.default;
      }

      Tida.AR = Object.assign(Tida.AR, _arScan2.default);
      window.Tida = Object.assign(Tida, _common2.default, _report2.default, _config2.default, _draw2.default, _spiAward2.default, _makeup2.default, _appStatus2.default, _video2.default, _follow2.default, _acl2.default, _vip2.default, _applyCoupon2.default, _uiClose2.default, _ticker2.default, _wvar2.default, _fairyland2.default, _retail2.default, _weitaoSub2.default);
      _common2.default.init();
      _appStatus2.default.initAppStatus();

      if (domain.indexOf('.jaeapp.com') == -1) {
        // 鍐呴儴鍔犺浇hybrid api
        _hybridApi2.default.init();
      }

      // })();

      exports.default = Tida;

      /***/ }),
    /* 1 */
    /***/ (function(module, exports) {

      "use strict";

      !function (a, b) {
        function c(a) {
          Object.defineProperty(this, "val", { value: a.toString(), enumerable: !0 }), this.gt = function (a) {
            return c.compare(this, a) > 0;
          }, this.gte = function (a) {
            return c.compare(this, a) >= 0;
          }, this.lt = function (a) {
            return c.compare(this, a) < 0;
          }, this.lte = function (a) {
            return c.compare(this, a) <= 0;
          }, this.eq = function (a) {
            return 0 === c.compare(this, a);
          };
        }b.env = b.env || {}, c.prototype.toString = function () {
          return this.val;
        }, c.prototype.valueOf = function () {
          for (var a = this.val.split("."), b = [], c = 0; c < a.length; c++) {
            var d = parseInt(a[c], 10);isNaN(d) && (d = 0);var e = d.toString();e.length < 5 && (e = Array(6 - e.length).join("0") + e), b.push(e), 1 === b.length && b.push(".");
          }return parseFloat(b.join(""));
        }, c.compare = function (a, b) {
          a = a.toString().split("."), b = b.toString().split(".");for (var c = 0; c < a.length || c < b.length; c++) {
            var d = parseInt(a[c], 10),
              e = parseInt(b[c], 10);if (window.isNaN(d) && (d = 0), window.isNaN(e) && (e = 0), e > d) return -1;if (d > e) return 1;
          }return 0;
        }, b.version = function (a) {
          return new c(a);
        };
      }(window, window.lib || (window.lib = {})), function (a, b) {
        b.env = b.env || {};var c = a.location.search.replace(/^\?/, "");if (b.env.params = {}, c) for (var d = c.split("&"), e = 0; e < d.length; e++) {
          var f = d[e].split("=")[0],
            g = f + "=",
            h = d[e].split(g)[1];d[e] = d[e].split("=");try {
            b.env.params[d[e][0]] = decodeURIComponent(h);
          } catch (i) {
            b.env.params[d[e][0]] = h;
          }
        }
      }(window, window.lib || (window.lib = {})), function (a, b) {
        b.env = b.env || {};var c,
          d = a.navigator.userAgent;if (c = d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)) b.env.os = { name: "Windows Phone", isWindowsPhone: !0, version: c[1] };else if (d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/))) b.env.os = { version: c[1] }, d.match(/Mobile\s+Safari/) ? (b.env.os.name = "Android", b.env.os.isAndroid = !0) : (b.env.os.name = "AndroidPad", b.env.os.isAndroidPad = !0);else if (c = d.match(/(iPhone|iPad|iPod)/)) {
          var e = c[1];(c = d.match(/OS ([\d_\.]+) like Mac OS X/)) && (b.env.os = { name: e, isIPhone: "iPhone" === e || "iPod" === e, isIPad: "iPad" === e, isIOS: !0, version: c[1].split("_").join(".") });
        }b.env.os || (b.env.os = { name: "unknown", version: "0.0.0" }), b.version && (b.env.os.version = b.version(b.env.os.version));
      }(window, window.lib || (window.lib = {})), function (a, b) {
        b.env = b.env || {};var c,
          d = a.navigator.userAgent;(c = d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? b.env.browser = { name: "UC", isUC: !0, version: c[1] } : (c = d.match(/MQQBrowser\/([\d\.]+)/)) ? b.env.browser = { name: "QQ", isQQ: !0, version: c[1] } : (c = d.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? b.env.browser = { name: "Firefox", isFirefox: !0, version: c[1] } : (c = d.match(/MSIE\s([\d\.]+)/)) || (c = d.match(/IEMobile\/([\d\.]+)/)) ? (b.env.browser = { version: c[1] }, d.match(/IEMobile/) ? (b.env.browser.name = "IEMobile", b.env.browser.isIEMobile = !0) : (b.env.browser.name = "IE", b.env.browser.isIE = !0), d.match(/Android|iPhone/) && (b.env.browser.isIELikeWebkit = !0)) : (c = d.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (b.env.browser = { name: "Chrome", isChrome: !0, version: c[1] }, d.match(/Version\/[\d+\.]+\s*Chrome/) && (b.env.browser.name = "Chrome Webview", b.env.browser.isWebview = !0)) : d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/)) ? b.env.browser = { name: "Android", isAndroid: !0, version: c[1] } : d.match(/iPhone|iPad|iPod/) && (d.match(/Safari/) && (c = d.match(/Version\/([\d\.]+)/)) ? b.env.browser = { name: "Safari", isSafari: !0, version: c[1] } : (c = d.match(/OS ([\d_\.]+) like Mac OS X/)) && (b.env.browser = { name: "iOS Webview", isWebview: !0, version: c[1].replace(/\_/g, ".") })), b.env.browser || (b.env.browser = { name: "unknown", version: "0.0.0" }), b.version && (b.env.browser.version = b.version(b.env.browser.version));
      }(window, window.lib || (window.lib = {})), function (a, b) {
        b.env = b.env || {};var c = a.navigator.userAgent;c.match(/Weibo/i) ? b.env.thirdapp = { appname: "Weibo", isWeibo: !0 } : c.match(/MicroMessenger/i) ? b.env.thirdapp = { appname: "Weixin", isWeixin: !0 } : b.env.thirdapp = !1;
      }(window, window.lib || (window.lib = {})), function (a, b) {
        b.env = b.env || {};var c,
          d,
          e = a.navigator.userAgent;(d = e.match(/WindVane[\/\s]([\d\.\_]+)/)) && (c = d[1]);var f = !1,
          g = "",
          h = "",
          i = "",
          j = a._ua_popLayer || "",
          k = !1,
          l = "";(d = e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (f = !0, g = d[1], i = d[2], h = g.indexOf("-PD") > 0 ? b.env.os.isIOS ? "iPad" : b.env.os.isAndroid ? "AndroidPad" : b.env.os.name : b.env.os.name), !g && e.indexOf("TBIOS") > 0 && (g = "TB"), j && (d = j.match(/PopLayer\/([\d\.]+)/i)) && (k = !0, l = d[1]), f ? b.env.aliapp = { windvane: b.version(c || "0.0.0"), appname: g || "unkown", version: b.version(i || "0.0.0"), platform: h || b.env.os.name, poplayer: k || !1, poplayerVersion: b.version(l || "0.0.0") } : b.env.aliapp = !1, b.env.taobaoApp = b.env.aliapp;
      }(window, window.lib || (window.lib = {}));

      /***/ }),
    /* 2 */
    /***/ (function(module, exports) {

      "use strict";

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      !function (a, b) {
        function c(a, b) {
          a = a.toString().split("."), b = b.toString().split(".");
          for (var c = 0; c < a.length || c < b.length; c++) {
            var d = parseInt(a[c], 10),
              e = parseInt(b[c], 10);
            if (window.isNaN(d) && (d = 0), window.isNaN(e) && (e = 0), d < e) return -1;
            if (d > e) return 1;
          }
          return 0;
        }
        var d = a.Promise,
          e = a.document,
          f = a.navigator.userAgent,
          g = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(f) || /Windows\sNT\s[\d\.]+/i.test(f),
          h = g && a.WindVane_Win_Private && a.WindVane_Win_Private.call,
          i = /iPhone|iPad|iPod/i.test(f),
          j = /Android/i.test(f),
          k = f.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),
          l = Object.prototype.hasOwnProperty,
          m = b.windvane = a.WindVane || (a.WindVane = {}),
          n = (a.WindVane_Native, Math.floor(65536 * Math.random())),
          o = 1,
          p = [],
          q = 3,
          r = "hybrid",
          s = "wv_hybrid",
          t = "iframe_",
          u = "param_",
          v = "chunk_",
          w = 6e5,
          x = 6e5,
          y = 6e4;
        k = k ? (k[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0";
        var z = {
            isAvailable: 1 === c(k, "0"),
            call: function call(a, b, c, e, f, g) {
              var h, i;
              "number" == typeof arguments[arguments.length - 1] && (g = arguments[arguments.length - 1]), "function" != typeof e && (e = null), "function" != typeof f && (f = null), d && (i = {}, i.promise = new d(function (a, b) {
                i.resolve = a, i.reject = b;
              })), h = A.getSid();
              var j = {
                success: e,
                failure: f,
                deferred: i
              };
              if (g > 0 && (j.timeout = setTimeout(function () {
                  z.onFailure(h, {
                    ret: "HY_TIMEOUT"
                  });
                }, g)), A.registerCall(h, j), A.registerGC(h, g), z.isAvailable ? A.callMethod(a, b, c, h) : z.onFailure(h, {
                  ret: "HY_NOT_IN_WINDVANE"
                }), i) return i.promise;
            },
            fireEvent: function fireEvent(a, b, c) {
              var d = e.createEvent("HTMLEvents");
              d.initEvent(a, !1, !0), d.param = A.parseData(b || A.getData(c)), e.dispatchEvent(d);
            },
            getParam: function getParam(a) {
              return A.getParam(a);
            },
            setData: function setData(a, b) {
              A.setData(a, b);
            },
            onSuccess: function onSuccess(a, b) {
              A.onComplete(a, b, "success");
            },
            onFailure: function onFailure(a, b) {
              A.onComplete(a, b, "failure");
            }
          },
          A = {
            params: {},
            chunks: {},
            calls: {},
            getSid: function getSid() {
              return (n + o++) % 65536 + "";
            },
            buildParam: function buildParam(a) {
              return a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? JSON.stringify(a) : a || "";
            },
            getParam: function getParam(a) {
              return this.params[u + a] || "";
            },
            setParam: function setParam(a, b) {
              this.params[u + a] = b;
            },
            parseData: function parseData(a) {
              var b;
              if (a && "string" == typeof a) try {
                b = JSON.parse(a);
              } catch (a) {
                b = {
                  ret: ["WV_ERR::PARAM_PARSE_ERROR"]
                };
              } else b = a || {};
              return b;
            },
            setData: function setData() {
              this.chunks[v + sid] = this.chunks[v + sid] || [], this.chunks[v + sid].push(chunk);
            },
            getData: function getData(a) {
              return this.chunks[v + a] ? this.chunks[v + a].join("") : "";
            },
            registerCall: function registerCall(a, b) {
              this.calls[a] = b;
            },
            unregisterCall: function unregisterCall(a) {
              var b = {};
              return this.calls[a] && (b = this.calls[a], delete this.calls[a]), b;
            },
            useIframe: function useIframe(a, b) {
              var c = t + a,
                d = p.pop();
              d || (d = e.createElement("iframe"), d.setAttribute("frameborder", "0"), d.style.cssText = "width:0;height:0;border:0;display:none;"), d.setAttribute("id", c), d.setAttribute("src", b), d.parentNode || setTimeout(function () {
                e.body.appendChild(d);
              }, 5);
            },
            retrieveIframe: function retrieveIframe(a) {
              var b = t + a,
                c = e.querySelector("#" + b);
              p.length >= q ? e.body.removeChild(c) : p.indexOf(c) < 0 && p.push(c);
            },
            callMethod: function callMethod(b, c, d, e) {
              if (d = A.buildParam(d), g) h ? a.WindVane_Win_Private.call(b, c, e, d) : this.onComplete(e, {
                ret: "HY_NO_HANDLER_ON_WP"
              }, "failure");else {
                var f = r + "://" + b + ":" + e + "/" + c + "?" + d;
                if (i) this.setParam(e, d), this.useIframe(e, f);else if (j) {
                  var k = s + ":";
                  window.prompt(f, k);
                } else this.onComplete(e, {
                  ret: "HY_NOT_SUPPORT_DEVICE"
                }, "failure");
              }
            },
            registerGC: function registerGC(a, b) {
              var c = this,
                d = Math.max(b || 0, w),
                e = Math.max(b || 0, y),
                f = Math.max(b || 0, x);
              setTimeout(function () {
                c.unregisterCall(a);
              }, d), i ? setTimeout(function () {
                c.params[u + a] && delete c.params[u + a];
              }, e) : j && setTimeout(function () {
                  c.chunks[v + a] && delete c.chunks[v + a];
                }, f);
            },
            onComplete: function onComplete(a, b, c) {
              var d = this.unregisterCall(a),
                e = d.success,
                f = d.failure,
                g = d.deferred,
                h = d.timeout;
              h && clearTimeout(h), b = b ? b : this.getData(a), b = this.parseData(b);
              var k = b.ret;
              "string" == typeof k && (b = b.value || b, b.ret || (b.ret = [k])), "success" === c ? (e && e(b), g && g.resolve(b)) : "failure" === c && (f && f(b), g && g.reject(b)), i ? (this.retrieveIframe(a), this.params[u + a] && delete this.params[u + a]) : j && this.chunks[v + a] && delete this.chunks[v + a];
            }
          };
        for (var B in z) {
          l.call(m, B) || (m[B] = z[B]);
        }
      }(window, window.lib || (window.lib = {}));

      /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _loadscript = __webpack_require__(4);

      var _loadscript2 = _interopRequireDefault(_loadscript);

      var _windvaneCall = __webpack_require__(5);

      var _windvaneCall2 = _interopRequireDefault(_windvaneCall);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      __webpack_require__(6);

      var tempWindvaneCall = function tempWindvaneCall(api, params, success, failure, timeout) {
        if (Tida.appinfo.isTaobao) {
          (0, _windvaneCall2.default)(api, params, success, failure, timeout);
        } else {
          var a = api.split('.');
          window.WindVane.call(a[0], a[1], params, success, failure, timeout);
        }
      };

      var ua = navigator.userAgent;
      var isTmall = /AliApp\(TM\//gi.test(ua);
      var isTaobao = /AliApp\(TB\//gi.test(ua);
      var mtopEventNum = 0;

      function initDataTrack() {
        if (document.domain.indexOf('.jaeapp.com') == -1) {
          // 闈炰笁鏂瑰煙鍚嶄笉鍔犺浇
          return;
        }
        var appkey = Tida.interactParams.appkey || Tida.getAppkeyFromURL() || '88888888';
        // 鏁版嵁鍩嬬偣鐩稿叧
        if (document.getElementsByTagName('meta')['spm-id'] == null) {
          var m = document.createElement("meta");
          m.name = "spm-id";
          m.content = "a1z51." + appkey;
          document.getElementsByTagName("head")[0].appendChild(m);
        }
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.async = true;
        t.id = "tb-beacon-aplus";
        t.setAttribute("exparams", "userid=&aplus&seller_nick=" + Tida.getParam("seller_nick") + "&appkey=" + appkey + "&feedId=");
        if ("https:" == document.location.protocol) {
          t.src = "https://g.alicdn.com/alilog/mlog/aplus_wap.js";
        } else {
          t.src = "http://g.alicdn.com/alilog/mlog/aplus_wap.js";
        }
        document.getElementsByTagName("head")[0].appendChild(t);
      }

      function initCSS(_url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = _url;
        document.getElementsByTagName("head")[0].appendChild(link);
      }

      function parseResult() {

        if (document.domain.indexOf('.jaeapp.com') == -1) {
          // 闈炰笁鏂瑰煙鍚嶄笉鍔犺浇

          return;
        }
        // 涓嶅仛api鎵撶偣浜� 璋冭瘯AR
        if (window.WindVane) {
          var tempCall = WindVane.call;
          WindVane.call = function (className, methodName, params, success, failure, timeout) {
            tempCall(className, methodName, params, success, failure, timeout);
            // 涓婃姤api
            var apiName = className + "." + methodName;
            if (apiName == "wopc.invoke") {
              apiName = params.apiName + "." + params.methodName;
            }
            if (apiName === 'AR.afterWebModelDrawn') {
              return;
            }
            if (apiName === 'AR.getModelTrackingState') {
              return;
            }
            if (apiName === 'AR.getMarkerTrackingState') {
              return;
            }
            if (apiName === 'WVTBUserTrack.toUT2') {
              return;
            }
            if (params.noReport) {
              return;
            }
            Tida.newReport('/uaward.8.2', '', 'api=' + apiName, 'H46747614');
          };
        }
      }

      var currModule = {
        callWindVane: function callWindVane(api, params, success, failure, timeout) {
          tempWindvaneCall(api, params, success, failure, timeout);
        },
        interactParams: {},
        version: '',
        appinfo: {
          isTmall: isTmall,
          isTaobao: isTaobao,
          name: isTmall ? "tmall" : isTaobao ? "taobao" : ""
        },
        isSupportedApp: isTmall || isTaobao, // 鏈塱sv浣跨敤鍒� 鍏煎鑰乀ida
        init: function init() {
          this.interactParams.appkey = this.getAppkeyFromURL();
          this.version = this.getVersionFromURL();
          initDataTrack();
          this.showPoplayer();
          Tida.newReport('/uaward.8.1', '', '', 'H46747592');

          if (!lib.env.aliapp) {
            // prompt鍦ㄩ潪鏀寔鐨刟pp涓婁細寮瑰嚭 鎶婂湪闈瀢indvane鐜瀵筽rompt鍋氭閲嶈浇
            window.prompt = function () {
              return true;
            };
          }
          parseResult();
          // if(this.version){
          //     // tida涓嶅啀鑷姩寮曞叆css 闇€瑕佺殑搴旂敤鑷寮曞叆
          //     initCSS('//g.alicdn.com/tmapp/tida/'+this.version+'/tida.css');
          // }
          Tida.version = this.version;
        },
        ready: function ready(option, callback) {
          if (typeof option == 'function') {
            callback = option;
          }
          callback && callback();
        },
        getAppkeyFromURL: function getAppkeyFromURL() {
          var appkey;
          var s = document.getElementsByTagName('script');
          for (var i = 0; i < s.length; i++) {
            var src = s[i].getAttribute('src');
            if (src) {
              var ret = src.match(/(^|&|\\?)appkey=([^&]*)(&|$)/);
              if (ret) {
                appkey = ret[2];
                break;
              }
            }
          }
          return appkey;
        },
        getVersionFromURL: function getVersionFromURL() {
          var version = '';
          var s = document.getElementsByTagName('script');
          for (var i = 0; i < s.length; i++) {
            var src = s[i].getAttribute('src');
            if (src) {
              var ret = src.match(/tida\/(.*?)\/tida.js/);
              if (ret) {
                version = ret[1];
                break;
              }
            }
          }
          return version;
        },

        /**
         * @description 鑾峰彇鎸囧畾鍙傛暟鍊�
         * @name getParam
         * @memberOf Tida
         * @function
         * @param {String} key 鍙傛暟鍚�
         * @param {String} url 鍦板潃
         */
        getParam: function getParam(key, url) {
          var paraStr = key;
          url = url || location.href;
          if (url.indexOf(paraStr + '=') == -1) {
            return '';
          }
          url = url.split("#")[0];
          var queryString = url.indexOf("?") > -1 ? url.substring(url.indexOf("?") + 1) : url;
          var parameters = queryString.split("&");
          var pos, paraName, paraValue;
          for (var i = 0; i < parameters.length; i++) {
            pos = parameters[i].indexOf('=');
            if (pos == -1) {
              continue;
            }
            paraName = parameters[i].substring(0, pos);
            paraValue = parameters[i].substring(pos + 1);
            if (paraName == paraStr) {
              return decodeURIComponent(paraValue.replace(/\+/g, " "));
            }
          }
          return '';
        },
        addURLParam: function addURLParam(obj, url) {
          var arr = url.split('#');
          var pre = arr[0];
          if (pre.indexOf("?") > -1) {
            pre += "&";
          } else {
            pre += "?";
          }

          var p = [];
          for (var n in obj) {
            p.push(n + '=' + encodeURIComponent(obj[n]));
          }
          var currUrl = pre + p.join('&');
          if (arr[1]) {
            currUrl += "#" + arr[1];
          }
          return currUrl;
        },
        login: function login(callback) {
          this.mixNick(function (e) {
            console.log(e, 'e');
            var ret = {
              errorCode: -1,
              isLogin: false
            };
            if (e && e.mixnick) {
              ret = {
                errorCode: 0,
                isLogin: true,
                mixnick: e.mixnick
              };
            }
            callback && callback(ret);
          });
        },
        checkLogin: function checkLogin(_callback) {
          var callback = function callback(e) {
            Tida.loginStatus = e.isLogin;
            _callback && _callback(e);
          };

          // 鑻ュ凡鐧诲綍 鏈噸鏂板姞杞戒笉鍐嶅垽鏂櫥褰曚簡
          if ('' + Tida.loginStatus === 'true') {
            callback && callback({
              isLogin: Tida.loginStatus
            });
            Tida.newReport('/uaward.8.2', '', 'api=Tida.checkLogin', 'H46747614');
            return;
          }

          // 闃叉涓嶅仠鐐瑰嚮澶氭璋冪敤
          if (Tida.loginLoading) {
            return;
          }
          Tida.loginLoading = 1;

          setTimeout(function () {
            Tida.loginLoading = null;
            delete Tida.loginLoading;
          }, 1000);

          Tida.mtopAsyc({
            "mtopApi": 'mtop.interact.user.islogin', //mtop.interact.user.islogin 'mtop.interact.current.mixusernick',//mtop.user.getUserSimple mtop.interact.allsparkisv.draw mtop.interact.isvlottery.isvdraw
            "businessParam": {
              appKey: '' + Tida.interactParams.appkey,
              appkey: '' + Tida.interactParams.appkey
            },
            eventName: "isLoginServer",
            appkey: '' + Tida.interactParams.appkey
          }, function (e) {
            var ret = {
              errorCode: -1,
              isLogin: false
            };

            if (e && (e.mixnick || '' + e.isLogin === 'true' || '' + e.result === 'true')) {
              ret = {
                errorCode: 0,
                isLogin: true
              };
            }
            callback && callback(ret);
          });

          Tida.newReport('/uaward.8.2', '', 'api=Tida.checkLogin', 'H46747614');
        },
        isLogin: function isLogin(callback) {
          Tida.mixNick({ isAsync: false }, function (e) {
            var ret = {
              errorCode: -1,
              isLogin: false
            };
            if (e && e.mixnick) {
              ret = {
                errorCode: 0,
                isLogin: true,
                mixnick: e.mixnick
              };
            }
            callback && callback(ret);
          }, 600000);
        },
        mixNick: function mixNick(_options, _callback) {
          var tida_mnick_key = "tida_mnick";
          var options = _options;
          var callback = _callback;
          if (typeof options == 'function') {
            callback = options;
          }
          var sellerNick = options.sellerNick || '';
          var mtopParams = Object.assign({}, {
            eventName: 'mixNick',
            needLogin: false,
            businessParam: {
              appKey: Tida.interactParams.appkey,
              sellerNick: sellerNick
            },
            mtopApi: "mtop.interact.current.mixusernick",
            appkey: Tida.interactParams.appkey
          }, options);
          console.log("mtopParams", mtopParams);
          Tida.mtopAsyc(mtopParams, function (e) {
            callback && callback(e);
          });
        },
        mtop: function mtop(opt, cb) {
          var needLogin = typeof opt.needLogin === 'undefined' ? false : opt.needLogin;
          var param = opt.param || {};
          param.appKey = Tida.interactParams.appkey;
          var mtopParams = {
            eventName: 'mtopEvent' + mtopEventNum++,
            needLogin: needLogin,
            businessParam: param,
            mtopApi: opt.api || opt.apiName,
            appkey: Tida.interactParams.appkey
          };
          Tida.mtopAsyc(mtopParams, cb);
        },
        setOrientation: function setOrientation(option, callback) {
          tempWindvaneCall('WVScreen.setOrientation', option, callback, callback);
        },
        showPoplayer: function showPoplayer(callback) {
          // if(Tida.appinfo.isTaobao){
          //     window.WindVane && WindVane.call('wopc', 'invoke','WVPopLayer', 'display', {}, callback, callback);
          // }else{
          //     window.WindVane && WindVane.call('WVPopLayer', 'display', {}, callback, callback);
          // }
          tempWindvaneCall('WVPopLayer.display', {}, callback, callback);
        },
        closePoplayer: function closePoplayer(callback) {
          tempWindvaneCall('WVPopLayer.close', {}, callback, callback);
          // window.WindVane && WindVane.call('WVPopLayer', 'close', {}, function (s) {
          //     // do something when success;
          // }, function (e) {
          // });
        },
        /**
         *
         * @param {String} _url 鎴峰姩瀹㈡埛绔悗鎵撳紑鐨剈rl 涓嶄紶榛樿鍞よ捣瀹㈡埛绔�
         * @param {String} _clinet 榛樿鎵撳紑鎵嬫窐锛屽彇鍊间负"tmall"鏃舵墦寮€鎵嬫満澶╃尗
         * @example
         * Tida.openClient();
         */
        openClient: function openClient(_url, _clinet) {
          if (_clinet == "tmall") {
            (0, _loadscript2.default)("//g.alicdn.com/tmapp/jump/1.0.11/appjump.js", function () {
              appjump.go({
                href: "tmall://page.tm/webview?url=" + _url, //璺宠浆鍗忚锛堝繀閫夛級
                fail: function fail() {
                  window.open("//m.laiwang.com/market/laiwang/tmall/app-download.php");
                  // window.open("https://pages.tmall.com/wow/portal/act/app-download");
                }
              });
            });
          } else {
            (0, _loadscript2.default)("//g.alicdn.com/mtb/??lib-httpurl/1.3.2/httpurl.js,lib-callapp/1.4.8/callapp.js", function () {
              lib.callapp.gotoPage(_url || 'taobao://m.taobao.com');
            });
          }
        },
        loadScript: _loadscript2.default
      };

      exports.default = currModule;

      /***/ }),
    /* 4 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.default = function (url, callback, error, charset) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        charset && s.setAttribute("charset", charset);

        s.src = url;
        if (navigator.userAgent.indexOf("MSIE") > -1) {
          s.onreadystatechange = function () {
            var r = s.readyState;
            if (r === 'loaded' || r === 'complete') {
              callback && callback();
            } else if (r === 'onerror' || r === 'onabort') {
              error && error();
            }
          };
        } else {
          s.onload = callback;
          s.onerror = error;
        }
        document.getElementsByTagName('head')[0].appendChild(s);
      };

      ;

      /***/ }),
    /* 5 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var windvaneCall = function windvaneCall(api, params, success, failure, timeout) {
        api = api.split('.');
        var className = api[0],
          methodName = api[1];
        var temp_params = params;
        // JAE && taobao 涓嬭蛋wopc.invoke鏂瑰紡锛屾窐瀹濇病鏈墂opc
        if (document.domain.indexOf(".jaeapp.com") > -1) {
          className = "wopc";
          methodName = "invoke";
          temp_params = {
            apiName: "Tida." + api[0],
            methodName: api[1],
            methodParam: params,
            appKey: Tida.interactParams && Tida.interactParams.appkey
          };
        }
        WindVane && WindVane.call(className, methodName, temp_params, success, failure, timeout);
      };

      exports.default = windvaneCall;

      /***/ }),
    /* 6 */
    /***/ (function(module, exports) {

      'use strict';

      if (typeof Object.assign != 'function') {
        Object.assign = function (target, varArgs) {
          // .length of function is 2
          'use strict';

          if (target == null) {
            // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) {
              // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        };
      }

      /***/ }),
    /* 7 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var report = {
        newReport: function newReport(logkey, gmkey, gokey, chksum) {
          var ua = navigator.userAgent;
          var isTmall = /AliApp\(TM\//.test(ua);
          var isTaobao = /AliApp\(TB\//.test(ua);
          var client = isTmall ? "tmall" : isTaobao ? "taobao" : "other";
          var domain = location.host.split(".")[0];
          var os = /iPhone|iPad|iPod|iwatch/gi.test(ua) ? "ios" : /Android/gi.test(ua) ? "android" : "other";
          var _from = Tida.getParam('from');
          var shopId = Tida.getParam('shopId');
          var platform = '';
          if (isTmall) {
            platform = 'tmall';
          } else if (isTaobao) {
            platform = 'taobao';
          } else if (/iPhone|iPod|Android/gi.test(ua)) {
            platform = 'm';
          } else if (/iPad/gi.test(ua)) {
            platform = 'ipad';
          } else {
            platform = 'PC';
          }
          (function () {
            var curr_gokey = gokey + '&client=' + client + '&domain=' + domain + '&os=' + os + '&act=2017618' + '&from=' + _from + '&shopId=' + shopId + '&platform=' + platform;
            window.goldlog ? goldlog.record && goldlog.record(logkey, gmkey || '', curr_gokey, chksum) : setTimeout(function () {
              Tida.newReport(logkey, gmkey, gokey, chksum);
            }, 200);
          })();
        },
        report: function report(opt) {
          // '/uaward.8.3','CLK','domain=[$]&pos=[$]&tag=[$]','H46747615'
          var p = [];
          if (typeof opt === 'string') {
            p.push('pos=' + opt);
          } else if ((typeof opt === "undefined" ? "undefined" : _typeof(opt)) === 'object') {
            for (var n in opt) {
              p.push(n + '=' + opt[n]);
            }
          }

          Tida.newReport('/uaward.8.3', 'CLK', p.join('&'), 'H46747615');
        }
      };

      exports.default = report;

      /***/ }),
    /* 8 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _base = __webpack_require__(9);

      var _base2 = _interopRequireDefault(_base);

      var _AR = __webpack_require__(11);

      var _AR2 = _interopRequireDefault(_AR);

      var _device = __webpack_require__(13);

      var _device2 = _interopRequireDefault(_device);

      var _audio = __webpack_require__(14);

      var _audio2 = _interopRequireDefault(_audio);

      var _widget = __webpack_require__(16);

      var _widget2 = _interopRequireDefault(_widget);

      var _share = __webpack_require__(17);

      var _share2 = _interopRequireDefault(_share);

      var _takeAndUpload = __webpack_require__(18);

      var _takeAndUpload2 = _interopRequireDefault(_takeAndUpload);

      var _sensor = __webpack_require__(19);

      var _sensor2 = _interopRequireDefault(_sensor);

      var _social = __webpack_require__(20);

      var _social2 = _interopRequireDefault(_social);

      var _buy = __webpack_require__(21);

      var _buy2 = _interopRequireDefault(_buy);

      var _msoa = __webpack_require__(22);

      var _msoa2 = _interopRequireDefault(_msoa);

      var _im = __webpack_require__(23);

      var _im2 = _interopRequireDefault(_im);

      var _windvaneHack = __webpack_require__(24);

      var _windvaneHack2 = _interopRequireDefault(_windvaneHack);

      var _video = __webpack_require__(25);

      var _video2 = _interopRequireDefault(_video);

      var _facereco = __webpack_require__(26);

      var _facereco2 = _interopRequireDefault(_facereco);

      var _customization = __webpack_require__(27);

      var _customization2 = _interopRequireDefault(_customization);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var App = Object.assign(_base2.default, _AR2.default, _device2.default, _audio2.default, _widget2.default, _share2.default, _takeAndUpload2.default, _sensor2.default, _buy2.default, _social2.default, _im2.default, _msoa2.default, _video2.default, _facereco2.default, _customization2.default);
      // import IM from './im';


      if (document.domain.indexOf('.jaeapp.com') == -1 && /AliApp\(TB\//.test(navigator.userAgent)) {
        // 闈濲AE涓嬫墜娣樹娇鐢ㄥ畼鏂逛竴鑷寸殑璋冪敤褰㈠紡
        // if(domain.indexOf('.jaeapp.com')==-1){
        _windvaneHack2.default.init();
      }

      exports.default = App;

      /***/ }),
    /* 9 */
    /***/ (function(module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _mtop = __webpack_require__(10);

      var _mtop2 = _interopRequireDefault(_mtop);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var base = {
        baseInit: function baseInit(callback) {
          Tida.osversion = lib.env.os.version;
          if (window.lib.env.os.isAndroid || window.lib.env.os.isAndroidPad) {
            Tida.osname = "android";
          } else if (window.lib.env.os.isIOS) {
            Tida.osname = "ios";
          } else {
            Tida.osname = "other";
          }
          callback && callback();
        },

        doAuth: function doAuth(option, callback) {
          if (typeof option == "function") {
            callback = option;
            option = false;
          }
          var p = {
            refresh: option === true ? option : option.refresh || false,
            apiName: "Tida.WebAppInterface",
            appKey: Tida.interactParams.appkey
          };
          var _callback = function _callback(result) {
            // 姝ゆ敞閲婇€傜敤鎵嬫窐IOS: 5.2.1浠ュ墠鐗堟湰杩斿洖{errorMessage:"",errorCode:0,ret:"HY_SUCCESS"} 5.2.1鍙婁互鍚庢敼涓簕ret:"HY_SUCCESS"}5.2.4鍙堝彉鎴愪簡{"ret":true}
            result.finish = result.errorCode == 0 || result.ret == "HY_SUCCESS" || result.ret === true;
            if (result.finish) {
              result.errorCode = 0;
            } else {
              result.errorCode = typeof result.errorCode == "undefined" ? 5 : result.errorCode;
            }
            // 鎵嬫窐ios闇€瑕佸湪杩囨湡鐨勬椂鍊欏己浼爐rue 鍏煎涓�
            if (!result.finish && JSON.stringify(result).indexOf("FAIL_SYS_TOPAUTH_ACCESSTOKENEXPIRED_ERROR") > -1) {
              p.refresh = true;
              return WindVane.call('wopc', 'doAuth', p, _callback, _callback);
            }
            callback && callback(result);
            // 鎺堟潈鎴愬姛涓婃姤
            if (result.finish) {
              Tida.newReport('/uaward.8.2', '', 'api=Tida.doAuth.succ', 'H46747614');
            } else {
              Tida.newReport('/uaward.8.2', '', 'api=Tida.doAuth.fail', 'H46747614');
            }
          };

          WindVane.call('wopc', 'doAuth', p, _callback, _callback);
          Tida.newReport('/uaward.8.2', '', 'api=Tida.doAuth', 'H46747614');
        },
        mtopAsyc: _mtop2.default
      };

      exports.default = base;

      /***/ }),
    /* 10 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var listeners = [];

      var _contains = function _contains(item) {
        for (var i = 0; i < listeners.length; i++) {
          if (listeners[i] == item) {
            return true;
          }
        }
        return false;
      };

      var _removeObject = function _removeObject(item) {
        var index = listeners.indexOf(item);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        return listeners;
      };

      function currModule(mtopParams, _callback, timeout) {
        var version = mtopParams.version || "1.0";

        var eventName = mtopParams.eventName + parseInt(Math.random() * 1000);

        var businessParam = mtopParams.businessParam;
        if (!businessParam.appkey) {
          businessParam.appkey = mtopParams.appkey;
        }
        //windvnae 鍏ュ弬
        var p = {
          apiName: "Tida.server",
          methodName: "getMtop",
          isAsync: typeof mtopParams.isAsync == "undefined" ? true : mtopParams.isAsync,
          eventName: eventName,
          methodParam: {
            mtopApi: mtopParams.mtopApi,
            mtopParam: {
              ua: "",
              version: version,
              needLogin: true,
              isSec: 1,
              businessParam: businessParam
            }
          },
          appKey: mtopParams.appkey
        };

        //涓嶆垚鏂囪鍒�
        var listenerName = 'getMtop_' + eventName;

        var hasBack = 0;
        var callback = function callback(json) {
          if (hasBack) {
            return;
          }
          hasBack = 1;
          _callback && _callback(json);
        };

        //鍔犲叆鍏ㄥ眬浜嬩欢锛岄槻姝㈠埛鏂�
        // console.log('_contains',listenerName, _contains(listenerName))
        if (!_contains(listenerName)) {

          var callbackFn = function callbackFn(e) {
            var data = {};
            if (lib.env.os.isIOS) {
              data = e.param;
            } else {
              var p = e.param;
              var dataStr = p.data;
              // 鎵嬫窐android鏄瓧绗︿覆null 鍧�
              if (dataStr === 'null') {
                data = {};
              } else {
                data = JSON.parse(p.data);
              }
            }

            document.removeEventListener(listenerName, callbackFn, false);
            //浠嶵ida.listener涓Щ闄よ浜嬩欢  by @鎱曞緤
            // listeners.removeObject(listenerName);
            _removeObject(listenerName);
            callback && callback(data);
          };

          document.addEventListener(listenerName, callbackFn, false);
          listeners.push(listenerName);
        }
        console.log("windvane params", JSON.stringify(p));
        window.WindVane.call('wopc', 'invoke', p, function (e) {
          // callback && callback(e);
          // alert("suc" + JSON.stringify(e))
          callback && callback(e);
        }, function (e) {
          // alert("fail" + JSON.stringify(e))
          callback && callback(e);
        }, timeout);
      }

      exports.default = currModule;

      /***/ }),
    /* 11 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _arScanMock = __webpack_require__(12);

      var _arScanMock2 = _interopRequireDefault(_arScanMock);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var recognizeSuccessCallback, recognizeCallback;
      // 鏄惁宸茬粡寮€濮�
      var started = false;
      // 鏄惁缁戝畾浜嗕簨浠�
      var eventBinded = false;

      var AR = {
        /**
         * 寮€鍚疉R妯★紝濡傛灉鍙紶h5_address鐨勮瘽锛屽垯杩涘叆涓嶉渶瑕佹爣蹇楃墿鐨勬ā寮�
         * config Object
         * {
	     *   "eventId":"1"
	     * }
         */
        openMarker: function openMarker(config) {
          var params = {};

          if (config) {
            params = config;
          }

          var url = params.url || '';
          url = Tida.addURLParam({
            // "_wvUseWKWebView": "YES",
            "_arview_": "1"
          }, url);

          params.h5_address = url;
          params.loadUrl = url;

          if (params.id) {
            params.id = params.id;
          }

          var onlyUrl = false;
          //銆€濡傛灉鐢ㄦ埛鍦╥OS涓嬮潰娌℃湁浼爀ventId锛屽氨璁や负涓嶉渶瑕佸姞杞�3d璧勬簮
          if (!params.eventId && window.lib.env.os.isIOS) {
            onlyUrl = true;
          }

          var options = {
            apiName: "Tida.AR",
            methodName: onlyUrl ? "openMarkerWithoutAR" : "openMarker",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          var _success = config.success || function () {};
          var _fail = config.fail || function () {};
          window.WindVane.call("wopc", "invoke", options, _success, _fail);
        },
        /**
         * 寮€濮嬫壂鎻弇arker鐨勮瘑鍒�
         */
        startMarkerTrack: function startMarkerTrack(config) {

          if (!config) {
            config = {};
          }
          var options = {
            apiName: "Tida.AR",
            methodName: "startTracking",
            methodParam: {},
            appKey: Tida.interactParams.appkey
          };

          if (!eventBinded) {
            recognizeSuccessCallback = function recognizeSuccessCallback(e) {
              var param = e.param;
              config.recognizeSuccess && config.recognizeSuccess(param);
            };

            recognizeCallback = function recognizeCallback(e) {
              var param = e.param;
              config.recognize && config.recognize(param);
            };

            // 缁戝畾鎴愬姛鐨勫洖璋冿紝鍦╯tartTrack涔嬪悗鍐嶆墽琛屼簨浠剁殑缁戝畾

            document.addEventListener('TBARPlatform.Event.onMatrixUpdate', recognizeSuccessCallback, false);
            document.addEventListener('TBARPlatform.Event.onRecognizeStatus', recognizeCallback, false);
            eventBinded = true;
          }

          window.WindVane.call("wopc", "invoke", options, function () {
            if (started) {
              return;
            }
            started = true;
            config.success && config.success();
          }, function (e) {
            started = false;
            config.fail && config.fail(e);
          }, false);
        },
        /**
         * 缁撴潫marker鐨勬壂鎻忚瘑鍒�
         */
        stopMarkerTrack: function stopMarkerTrack(config) {
          // 濡傛灉鏍规湰娌℃湁寮€濮嬶紝閭ｇ粨鏉熶篃涓嶅彲鎵ц
          if (!started) {
            return;
          }
          if (eventBinded) {
            document.removeEventListener('TBARPlatform.Event.onMatrixUpdate', recognizeSuccessCallback);
            document.removeEventListener('TBARPlatform.Event.onRecognizeStatus', recognizeCallback);
            eventBinded = false;
          }
          if (!config) {
            config = {};
          }
          var options = {
            apiName: "Tida.AR",
            methodName: "stopTracking",
            methodParam: {},
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", options, function () {
            config.success && config.success();
            started = false;
          }, function (e) {
            config.fail && config.fail(e);
          }, false);
        },
        switchCamera: function switchCamera(cb) {
          cb && cb({ errorCode: 3, message: "not support" });
        },
        scan: function scan(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          // 鍓嶆湡鍏坢ock渚涜皟璇�
          if (opt.mock) {
            setTimeout(function () {
              cb(_arScanMock2.default);
            }, opt.timeout || 2000);
          } else {
            window.WindVane.call("argo", "scan", opt, cb, cb);
          }
        }
      };

      var currModule = {
        AR: AR
      };

      exports.default = currModule;

      /***/ }),
    /* 12 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var mock = {};
      exports.default = mock;

      /***/ }),
    /* 13 */
    /***/ (function(module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var _windvaneCall = __webpack_require__(5);

      var _windvaneCall2 = _interopRequireDefault(_windvaneCall);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function InvokeWV(apiName, methodName, options) {
        var a = {
          apiName: apiName,
          methodName: methodName,
          methodParam: options.param,
          appKey: Tida.interactParams.appkey
        };
        var _success = function _success(e) {
          options.success && options.success(e);
        };
        var _fail = function _fail(e) {
          options.fail && options.fail(e);
        };

        window.WindVane.call("wopc", "invoke", a, _success, _fail);
      }

      var device = {
        geolocation: {
          getCurrentPosition: function getCurrentPosition(options, callback) {

            if (typeof options == "function") {
              callback = options;
              options = {};
            }
            if (!options['address']) {
              options['address'] = 1;
            }
            (0, _windvaneCall2.default)('WVLocation.getLocation', options, function (result) {
              var coords = result.coords;
              //fix longitude/latitude string value on iOS
              if (coords) {
                coords.longitude = parseFloat(coords.longitude);
                coords.latitude = parseFloat(coords.latitude);
                coords.accuracy = parseFloat(coords.accuracy);
              }
              result.errorCode = 0;

              callback && callback(result);
            }, callback);
          }
        },
        network: {
          /**
           * 鑾峰彇缃戠粶绫诲瀷銆�
           * 2G - 绉诲姩鍜岃仈閫欸PRS鎴朎DGE锛岀數淇DMA
           * 3G - 鑱旈€歎MTS鎴朒SDPA锛岀數淇VDO
           */
          getType: function getType(callback) {
            // TBDeviceInfo.getInfo
            (0, _windvaneCall2.default)('WVNetwork.getNetworkType', '', function (result) {
              var type = result.type;
              var data = {
                errorCode: 0,
                type: type,
                networkAvailable: type !== "",
                isOnline: type !== "",
                isWifi: type === 'WIFI',
                is3G: type === "3G",
                is2G: type === "2G",
                isG: type === "G",
                isH: type === "H",
                isE: type === "E"
              };
              callback && callback(data);
            }, callback);
          }
        },
        photo: function photo(options, callback) {

          return this.artWork(options, callback);

          // if ( typeof options == "function") {
          //     callback = options;
          //     options = {};
          // }
          // options = options || {};

          // var maxselect = 6;

          // if(options.maxselect != "undefined"){
          //     maxselect  =  options.maxselect;
          //     if(maxselect>6){
          //         maxselect = 6;
          //     }
          // }

          // //auto upload

          // var params = {
          //     // 寰楀埌鐓х墖鍚庢槸鍚﹁嚜鍔ㄤ笂浼�
          //     type: '1',
          //     // 鏄惁鍙厑璁告媿鐓ф垨浠庣浉鍐岄€夋嫨
          //     mode: 'both',
          //     // 鏄惁澶氬浘閫夋嫨
          //     mutipleSelection: '0',
          //     // 鏈€澶氶€夋嫨寮犳暟
          //     maxSelect: maxselect,
          //     // 鍥剧墖灏哄闄愬埗
          //     // maxsize: {
          //             // width: '800',
          //             // height: '800'
          //     // },
          //     // 涓氬姟浠ｇ爜
          //     bizCode: 'c2b-customization',
          //     crop: false,
          //     filter: false,
          //     v:'2.0'

          //     // 鐢ㄦ埛鏄电О
          //     //usernick: 'anick'
          // };
          // // for(var n in options){
          // //     params[n] = options[n];
          // // }
          // params = Object.assign(params, options.param||{});
          // /*
          // windvaneCall('WVCamera.takePhoto', params, function(result) {
          //     // TODO 鍏煎鏁版嵁鏍煎紡
          //     result.photo = result.resourceURL||(result.urls&&result.urls[0].url); // 鏃х増Tida鐨刪ybrid api瑙勮寖
          //     if(!result.photo){
          //         // 鏂扮増5.2.8鎵嬫窐鏁版嵁鍏煎
          //         if(result.images && result.images.length){
          //             result.photo = result.images[0].resourceURL||result.images[0].url;
          //         }
          //     }
          //     callback && callback(result);
          // }, callback);
          // */

          // var a = {
          //     apiName : "Tida.WVCamera",
          //     methodName : "takePhoto",
          //     methodParam : params,
          //     appKey : Tida.interactParams.appkey
          // };

          // let removeTakeSuccess = function(){
          //     document.removeEventListener('WVPhoto.Event.takePhotoSuccess', _callback , false);
          // }
          // let _callback = function(ret) {
          //     removeTakeSuccess();
          //     let param = ret.param;
          //     let result = {
          //         errorCode : 0,
          //         errorMessage : '',
          //         photo : param.url
          //     }
          //     let obj = Object.assign(param, result);
          //     // callback && callback(obj);
          //     options && options.success && options.success(obj);
          // };
          // document.addEventListener('WVPhoto.Event.takePhotoSuccess', _callback , false);

          // var _cb = function(e){
          //     callback && callback(e);
          // };

          // window.WindVane.call("wopc", "invoke", a, _cb, function(e) {
          //     removeTakeSuccess();
          //     callback && callback(e);
          //     options && options.fail && options.fail(e);
          // });
        },
        /**
         * 鏂版媿鐓ф帴鍙�(鑷姩鍘嬬缉)
         Tida.photoX({
	            鈥媝arams : {},
	            success : function(res){
	            鈥�    鈥�//鎴愬姛鍥炶皟
	            },
	            fail : function(res){
	            鈥�    鈥�//澶辫触鍥炶皟
	                errCode = res.errcode
	                errMessage =  res.message
	            }
	        })
         */
        photoX: function photoX(options) {
          var options = options || {};
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
            options = {};
          }

          //auto upload

          var params = {
            // 寰楀埌鐓х墖鍚庢槸鍚﹁嚜鍔ㄤ笂浼�
            type: '1',
            // 鏄惁鍙厑璁告媿鐓ф垨浠庣浉鍐岄€夋嫨
            mode: 'both',
            // 鏄惁澶氬浘閫夋嫨
            mutipleSelection: '0',
            // 鏈€澶氶€夋嫨寮犳暟
            maxSelect: 1
          };

          params = Object.assign(params, options.param || {});

          var a = {
            apiName: "Tida.photoX",
            methodName: "takePhoto",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          var _success = function _success(e) {
            options.success && options.success(e);
          };
          var _fail = function _fail(e) {
            options.fail && options.fail(e);
          };

          window.WindVane.call("wopc", "invoke", a, _success, _fail);
        },
        /**
         * 鏂版媿鐓ф帴鍙�2(鍘熷浘涓婁紶)
         */
        artWork: function artWork(options, callback) {
          var options = options || {};
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
            options = {};
          }

          //auto upload

          var params = {
            // 寰楀埌鐓х墖鍚庢槸鍚﹁嚜鍔ㄤ笂浼�
            type: '1',
            // 鏄惁鍙厑璁告媿鐓ф垨浠庣浉鍐岄€夋嫨
            mode: 'both',
            // 鏄惁澶氬浘閫夋嫨
            mutipleSelection: '0',
            // 鏈€澶氶€夋嫨寮犳暟
            maxSelect: 1,
            // 鍘嬬缉 榛樿涓�0
            compress: 0
          };

          params = Object.assign(params, options.param || {});

          var a = {
            apiName: "Tida.artWork",
            methodName: "takePhoto",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          var _success = function _success(e) {
            options.success && options.success(e);
            callback && callback(e);
          };
          var _fail = function _fail(e) {
            options.fail && options.fail(e);
          };

          window.WindVane.call("wopc", "invoke", a, _success, _fail);
        },
        /**
         *   鍞よ捣鎵爜鎽勫儚澶�
         */
        scanCode: function scanCode(callback) {
          var a = {
            apiName: "Scancode",
            methodName: "scan",
            methodParam: {},
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", a, callback, callback);
        },
        checkDeviceModuleStatus: function checkDeviceModuleStatus(options) {
          InvokeWV("Tida.TidaDevice", "checkDeviceModuleStatus", options);
        },
        requestToTurnOnModule: function requestToTurnOnModule(options) {
          InvokeWV("Tida.TidaDevice", "requestToTurnOnModule", options);
        },
        RPliveness: function RPliveness(options) {
          InvokeWV("Tida.RP", "liveness", options);
        },
        startSearchBeacons: function startSearchBeacons(options) {
          InvokeWV("Tida.TidaBeacon", "startSearchBeacons", options);
        },
        stopSearchBeacons: function stopSearchBeacons(options) {
          InvokeWV("Tida.TidaBeacon", "stopSearchBeacons", options);
        }
      };

      exports.default = device;

      /***/ }),
    /* 14 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var _windvaneCall = __webpack_require__(5);

      var _windvaneCall2 = _interopRequireDefault(_windvaneCall);

      var _voice = __webpack_require__(15);

      var _voice2 = _interopRequireDefault(_voice);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var playIdentifier = 'wopc_audio_player_';
      var endRecordSuccessCall; //褰曢煶缁撴潫鐨勫洖璋冩柟娉�
      var endLocalPlaySuccessCall; //鎾斁褰曢煶缁撴潫鍥炶皟鏂规硶
      var LocalId; //褰曢煶鏂囦欢姝ｅ父鐢熸垚id
      var num = 0;

      var audio = {
        play: function play(options, callback) {
          var voiceUrl = typeof options == "string" ? options : options.url;
          var playId = playIdentifier + num++;
          var param = {};
          if (typeof voiceUrl == "undefined") {
            return;
          }
          param.voiceUrl = voiceUrl;
          param.playIdentifier = playId;
          (0, _windvaneCall2.default)("H5AudioPlayer.play", param, callback, callback);
          return playId;
        },
        pause: function pause(playId, callback) {},
        resume: function resume(playId, callback) {},
        stop: function stop(playId, callback) {
          if (typeof playId == "undefined") {
            return;
          }
          var param = {
            playIdentifier: playId
          };
          (0, _windvaneCall2.default)("H5AudioPlayer.stop", param, callback, callback);
        },
        /**
         * 寮€濮嬪綍闊�
         * 鑷姩寮€濮嬪綍闊�
         * @memberOf Tida
         * @name startRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.limit 褰曢煶鏃堕暱 鍙负绌�
         * @param {function} options.success 褰曢煶瀹屾垚鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         */
        startRecord: function startRecord(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};

          var a = {
            apiName: "Tida.audio",
            methodName: "startRecord",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", a, function (res) {
            // success 褰曢煶鍋滄鍥炶皟
            if (endRecordSuccessCall) {
              endRecordSuccessCall(res);
            } else if (options.success) {
              options.success(res);
            }
          }, function (res) {
            // fail
            if (options && options.fail) {
              options.fail(res);
            }
          });
        },
        /**
         * 鍋滄褰曢煶
         * 涓诲姩鍋滄褰曢煶
         * @memberOf Tida
         * @name stopRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         */
        stopRecord: function stopRecord(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};

          var a = {
            apiName: "Tida.audio",
            methodName: "stopRecord",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", a, function (res) {

            // success
            //endRecordSuccessCall && endRecordSuccessCall(res)

          }, function (res) {
            // fail
            if (options && options.fail) {
              options.fail(res);
            }
          });
        },
        /**
         * 褰曢煶鍋滄鐩戝惉鎺ュ彛
         * @memberOf Tida
         * @name onEndRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {function} options.success 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        onEndRecord: function onEndRecord(options) {
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object" && options.success) {
            endRecordSuccessCall = options.success;
          }
        },
        /**
         * 鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name playLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.success 鎾斁瀹屾垚鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        playLocal: function playLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;
          var a = {
            apiName: "Tida.audio",
            methodName: "playLocal",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          if (localId) {

            window.WindVane.call("wopc", "invoke", a, function (res) {
              // success 鎾斁瀹屾垚
              if (endLocalPlaySuccessCall) {
                endLocalPlaySuccessCall(res);
              } else if (options.success) {
                options.success(res);
              }
            }, function (res) {
              // fail
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 鏆傚仠鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name playLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        pauseLocal: function pauseLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;
          var a = {
            apiName: "Tida.audio",
            methodName: "pauseLocal",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          if (localId) {

            window.WindVane.call("wopc", "invoke", a, function (res) {
              if (options && options.success) {
                options.success(res);
              }
            }, function (res) {
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 鎭㈠鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name resumeLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        resumeLocal: function resumeLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;
          var a = {
            apiName: "Tida.audio",
            methodName: "resumeLocal",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          if (localId) {

            window.WindVane.call("wopc", "invoke", a, function (res) {
              if (options && options.success) {
                options.success(res);
              }
            }, function (res) {
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 鍋滄鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name stopLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        stopLocal: function stopLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;
          var a = {
            apiName: "Tida.audio",
            methodName: "stopLocal",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          if (localId) {
            window.WindVane.call("wopc", "invoke", a, function (res) {
              // success 鎾斁瀹屾垚
              //endLocalPlaySuccessCall && endLocalPlaySuccessCall(res)

            }, function (res) {
              // fail
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 褰曢煶鍋滄鐩戝惉鎺ュ彛
         * @memberOf Tida
         * @name onEndRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {function} options.success 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        onLocalPlayEnd: function onLocalPlayEnd(options) {
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object" && options.success) {
            endLocalPlaySuccessCall = options.success;
          }
        },
        /**
         * 涓婁紶闊抽鎺ュ彛
         * @memberOf Tida
         * @name upload
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.success 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        upload: function upload(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;
          var a = {
            apiName: "Tida.audio",
            methodName: "upload",
            methodParam: params,
            appKey: Tida.interactParams.appkey
          };

          if (localId) {
            window.WindVane.call("wopc", "invoke", a, options.success, options.fail);
          }
        }
      };

      var currModule = {
        audio: Object.assign(audio, _voice2.default)
      };

      exports.default = currModule;

      /***/ }),
    /* 15 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var voice = {
        startRecognize: function startRecognize(option) {
          var _this = this;

          if (this.voiceRecognizing) {
            return;
          }
          this.voiceRecognizing = 1;

          this.onVoiceVolumeChange = function (e) {
            option.onVolumeChange && option.onVolumeChange(e.param);
          };

          this.onRecognizingResult = function (e) {
            _this.removeEventListener();
            option.onRecognizingResult && option.onRecognizingResult(e.param);
          };

          document.addEventListener('TBSearchVoice.Event.onVoiceVolume', this.onVoiceVolumeChange, false);
          document.addEventListener('TBSearchVoice.Event.onRecognizingResult', this.onRecognizingResult, false);

          var params = {};
          WindVane.call('TBSearchVoice', 'startVoiceRecognition', params, function (e) {
            console.log('startRecognize success' + JSON.stringify(e));
          }, function (e) {
            console.log('startRecognize failure' + JSON.stringify(e));
            _this.removeEventListener();
          });
        },
        stopRecognize: function stopRecognize() {
          WindVane.call('TBSearchVoice', 'stopVoiceRecognition');
        },
        cancelRecognize: function cancelRecognize() {
          WindVane.call('TBSearchVoice', 'cancelVoiceRecognition');
          this.removeEventListener();
        },
        removeEventListener: function removeEventListener() {
          document.removeEventListener('TBSearchVoice.Event.onVoiceVolume', this.onVoiceVolumeChange, false);
          document.removeEventListener('TBSearchVoice.Event.onRecognizingResult', this.onRecognizingResult, false);
          this.onVoiceVolumeChange = null;
          this.onRecognizingResult = null;
          this.voiceRecognizing = 0;
        }
      };

      exports.default = voice;

      /***/ }),
    /* 16 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var widget = {
        /**
         * 閫氳繃toast鏂瑰紡鏄剧ず淇℃伅銆俰OS涓嶆敮鎸乄VUIToast.toast鏂规硶銆�
         */
        toast: function toast(options, callback) {
          var text = typeof options == "string" ? {
            message: options,
            duration: 2
          } : options;
          var p = {
            apiName: "Tida.WVUIToast",
            methodName: "toast",
            methodParam: JSON.stringify(text),
            appKey: Tida.interactParams && Tida.interactParams.appkey
          };

          window.WindVane.call('wopc', 'invoke', p, callback, callback);
        },
        showLoading: function showLoading(text, callback) {
          var doc = document;
          var elem = doc.getElementById("_HA_Loading");
          if (!elem) {
            var div = doc.createElement('div');
            div.id = "_HA_Loading";
            div.style.cssText = 'position:absolute;z-index:9999;width:100%;height:100%;left:0;top:0;background:url(//assets.alicdn.com/mw/base/styles/component/more/images/loading.gif) 50% 50% no-repeat;background-size:40px 16px;pointer-events:none;';
            elem = doc.createDocumentFragment();
            elem.appendChild(div);
          } else {
            elem.style.display = 'block';
          }
          doc.body.appendChild(elem);
        },
        hideLoading: function hideLoading(callback) {
          var elem = document.getElementById("_HA_Loading");
          if (elem) elem.style.display = 'none';
        },
        showTitle: function showTitle(callback) {
          var p = {
            apiName: "Tida.WebAppInterface",
            methodName: "setNaviBarHidden",
            methodParam: '0',
            appKey: Tida.interactParams && Tida.interactParams.appkey
          };
          window.WindVane.call('wopc', 'invoke', p, callback, callback);
        },
        hideTitle: function hideTitle(callback) {
          var p = {
            apiName: "Tida.WebAppInterface",
            methodName: "setNaviBarHidden",
            methodParam: '1',
            appKey: Tida.interactParams && Tida.interactParams.appkey
          };
          window.WindVane.call('wopc', 'invoke', p, callback, callback);
        },
        setTitle: function setTitle(options, callback) {
          var title = typeof options == "string" ? options : options && options.text,
            params = lib.env.os.isAndroid ? {
              title: title
            } : title;
          document.title = title;
          var p = {
            apiName: "Tida.WebAppInterface",
            methodName: "setCustomPageTitle",
            methodParam: JSON.stringify({
              title: title
            }),
            appKey: Tida.interactParams && Tida.interactParams.appkey
          };
          window.WindVane.call('wopc', 'invoke', p, callback, callback);
        },
        pushWindow: function pushWindow(options, callback) {
          var url = typeof options == 'string' ? options : options && options.url;

          // 濡傛灉璁剧疆force锛屽彲浠ュ湪Android涓嬮潰寮哄埗鏂板紑webView锛屼絾涓嶅缓璁繃澶氱殑force璋冪敤銆�
          var force = options && options.force || true;

          var p = {
            apiName: force ? "Tida.WVNative" : "Tida.Base",
            methodName: "openWindow",
            methodParam: JSON.stringify({
              url: url
            }),
            appKey: Tida.interactParams && Tida.interactParams.appkey
          };
          window.WindVane.call('wopc', 'invoke', p, callback, function (e) {
            window.location.href = url;
            callback && callback(e);
          });
        },
        popWindow: function popWindow(callback) {
          var p = {
            apiName: "Tida.WVNative",
            methodName: "nativeBack",
            appKey: Tida.interactParams && Tida.interactParams.appkey
          };
          window.WindVane.call('wopc', 'invoke', p, callback, callback);
        },
        // popTo : this.popWindow,
        /**
         *
         * @memberOf Tida
         * @namespace Tida.pageVisibility
         * @name pageVisibility
         */
        pageVisibility: {

          /**
           * 鐩戝惉椤甸潰鏄剧ず闅愯棌鍙樺寲
           *
           * @memberOf Tida.pageVisibility
           * @name watch
           * @function
           *
           * @param {Tida.pageVisibility~callback} callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
           *
           */
          /**
           * Tida.pageVisibility.watch 椤甸潰鍙樺寲鐨勫洖璋冨嚱鏁�
           * @callback Tida.pageVisibility~callback
           * @param {Object} result 鐘舵€佹暟鎹�
           * @param {string} result.errorCode 閿欒鐮�
           * @param {string} result.errorMessage 娑堟伅
           * @param {string} result.visible 0锛氫唬琛ㄩ殣钘� 1锛氫唬琛ㄦ樉绀�
           *
           * @example
           * Tida.pageVisibility.watch(function(result){
	         *     // do sth
	         *      if(result.visible){
	         *          // page active
	         *      }
	         * });
           *
           */
          watch: function watch(callback) {
            // 闃查噸澶嶇洃鍚�
            if (this["visibility"]) {
              return;
            }
            this["visibility"] = function (e) {
              callback && callback({
                errorCode: 0,
                errorMessage: "璋冪敤鎴愬姛",
                visible: e && e.type == "WV.Event.APP.Active" ? 1 : 0
              });
            };
            document.addEventListener("WV.Event.APP.Active", this["visibility"], false);
            document.addEventListener("WV.Event.APP.Background", this["visibility"], false);
          },

          /**
           * 鍙栨秷鐩戝惉椤甸潰闅愯棌鍙樺寲
           *
           * @memberOf Tida.pageVisibility
           * @name clearWatch
           * @function
           *
           * @param {Tida~commonCallback} callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
           *
           */
          clearWatch: function clearWatch(callback) {
            document.removeEventListener("WV.Event.APP.Active", this["visibility"], false);
            document.removeEventListener("WV.Event.APP.Background", this["visibility"], false);
            delete this["visibility"];
            callback && callback({
              errorCode: 0,
              errorMessage: "璋冪敤鎴愬姛"
            });
          }
        }
      };

      exports.default = widget;

      /***/ }),
    /* 17 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var share = function share(options, callback) {
        // var url = options.url;
        // var text = options.content || options.text;
        // var title = options.title;
        // var image = options.image;
        // var wxImage = options.wxImage;
        // var shareType = options.shareType;//涓�1鏃跺彧鑳藉垎浜埌閫氳褰曘€備粎鎵嬫窐鏀寔
        // var businessId = options.businessId;


        // var weixinAppId = options.weixinAppId;//寰俊鐨刟ppid
        // var weixinMsgType = options.weixinMsgType;//寰俊鍒嗕韩鏂瑰紡锛歵ext鏂囨鍒嗕韩銆乮mage鍥剧墖鍒嗕韩銆亀ebpage鍥炬枃鍒嗕韩
        // var targets = options.targets;//鍒嗕韩娓犻亾锛�0 閫氳褰曪紱1 澶嶅埗锛�2 寰崥锛�3 寰俊锛�4 鏈嬪弸鍦堬紱5 浜岀淮鐮侊紱6 鏉ュ線锛�7 鏃轰俊锛�8: 娣樺彛浠�

        options.text = options.content || options.text;
        options.title = options.title || ' ';

        /*
         * 鍒嗕韩鍦烘櫙
         * */
        options.businessId = options.businessId || 'weitaohudong';

        /**
         * [string] image 鍥剧墖鍦板潃 [string] url 鍒嗕韩URL [string] title 鍒嗕韩鏍囬 [string]
         * text 鍒嗕韩鍐呭 [string] from 鏉ユ簮
         */
        var url = options.url;
        var urlParam = "from=share&appkey=" + Tida.interactParams.appkey;
        if (url.indexOf("?") < 0) {
          url += "?" + urlParam;
        } else {
          url += "&" + urlParam;
        }
        options.url = url;
        // wvShareClickEvent 鐢ㄦ埛閫夋嫨浜嗘煇涓垎浜笭閬擄紝 杩欓噷浠呰〃绀鸿繘鍏ヤ簡璇ユ笭閬擄紝浣嗕笉浠ｈ〃宸茬粡鎴愬姛鍒嗕韩锛屽垎浜涓哄彲鑳戒細琚敤鎴峰彇娑堬紙鎵嬫窐
        // 5.1.0 鐗堟湰鎴栨洿楂橈級銆�
        document.addEventListener('wvShareClickEvent', function (e) {
          var result = e.param;
          /**
           * result.target
           *
           * 'ADDRESS' 鎵嬫満鑱旂郴浜恒€� 'WB' 鏂版氮寰崥銆� 'LW' 鏉ュ線銆� 'WX' 鏃轰俊銆� 'QR' 浜岀淮鐮併€�
           * 'COPY' 澶嶅埗銆� 'WEIXIN' 寰俊銆� 'WXFRIEND' 寰俊鏈嬪弸鍦堛€�
           */
          result.errorCode = 0;
          document.removeEventListener('wvShareClickEvent', arguments.callee);
          callback && callback(result);
        });

        var d = document.domain;
        d = d.substr(0, d.indexOf("."));
        // if(Tida.config && Tida.config[Tida.interactParams.appkey]){
        //     d = Tida.config[Tida.interactParams.appkey].businessId;
        // }
        // //h5.alibaba-inc.com/api/TaobaoClient-API.html#TBSharedModule-showSharedMenu
        WindVane.call('wopc', 'invoke', {
          apiName: 'Tida.share',
          methodName: 'showShareMenu',
          methodParam: options,
          appKey: Tida.interactParams.appkey
        }, callback, callback);
        Tida.newReport('/uaward.8.2', '', 'api=Tida.share', 'H46747614');
      };

      var currModule = { share: share };

      exports.default = currModule;

      /***/ }),
    /* 18 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var takeAndUpload = function takeAndUpload(options, callback) {
        WindVane.call('wopc', 'invoke', {
          apiName: 'Tida.BrandHub',
          methodName: 'takeAndUpload',
          methodParam: options,
          appKey: Tida.interactParams.appkey
        }, callback, callback);
        Tida.newReport('/uaward.8.2', '', 'api=Tida.takeAndUpload', 'H46747614');
      };
      var currModule = { takeAndUpload: takeAndUpload };

      exports.default = currModule;

      /***/ }),
    /* 19 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var uid = 0;
      var sensor = {
        blow: {
          watch: function watch(callback) {
            var watchId = ++uid;
            this[watchId] = function (result) {
              result.param.errorCode = 0;
              result.param.errorMessage = "";
              callback(result.param);
            };

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "listenBlow",
              appKey: Tida.interactParams.appkey
            };
            var self = this;
            window.WindVane.call("wopc", "invoke", p, function (result) {
              if (result && result.ret === "HY_SUCCESS") {
                document.addEventListener('motion.blow', self[watchId]);
              } else {
                callback(result);
              }
            }, callback);
          },
          clearWatch: function clearWatch(watchId, callback) {

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "stopListenBlow",
              appKey: Tida.interactParams.appkey
            };
            window.WindVane.call("wopc", "invoke", p, callback, callback);
            document.removeEventListener('motion.blow', self[watchId]);
            delete this[watchId];
          }
        },
        orientation: {
          watch: function watch(options, callback) {
            var watchId = ++uid;
            var frequency = 500;
            callback = typeof options == "function" ? options : callback;
            if (typeof options == "function") {
              callback = options;
              options = false;
            }
            if ((typeof options === "undefined" ? "undefined" : _typeof(options)) == "object") {
              frequency = options.frequency || 500;
            }
            this[watchId] = function (result) {

              result.param.errorCode = 0;
              result.param.errorMessage = "";
              callback(result.param);
            };

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "listenGyro",
              methodParam: {
                "on": true,
                "frequency": frequency
              },
              appKey: Tida.interactParams.appkey
            };
            var self = this;
            window.WindVane.call("wopc", "invoke", p, function (result) {
              if (result && result.ret === "HY_SUCCESS") {
                document.addEventListener('motion.gyro', self[watchId]);
              } else {
                callback(result);
              }
            }, callback);
            return watchId;
          },
          clearWatch: function clearWatch(watchId, callback) {
            document.removeEventListener('motion.gyro', this[watchId]);
            delete this[watchId];

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "listenGyro",
              methodParam: {
                "on": false
              },
              appKey: Tida.interactParams.appkey
            };
            window.WindVane.call("wopc", "invoke", p, callback, callback);
          }
        },
        motion: {
          watch: function watch(options, callback) {
            var watchId = ++uid;
            callback = typeof options == "function" ? options : callback;
            this[watchId] = function (result) {
              callback({
                errorCode: 0,
                errorMessage: "璋冪敤鎴愬姛",
                acceleration: result.param,
                accelerationIncludingGravity: result.param
              });
            };

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "listenAcceleration",
              methodParam: {
                "on": true
              },
              appKey: Tida.interactParams.appkey
            };
            var self = this;
            window.WindVane.call("wopc", "invoke", p, function (result) {
              if (result && result.ret === "HY_SUCCESS") {
                document.addEventListener("getAccelerometer", self[watchId]);
              } else {
                callback(result);
              }
            }, callback);
            return watchId;
          },
          clearWatch: function clearWatch(watchId, callback) {
            document.removeEventListener('getAccelerometer', this[watchId]);
            delete this[watchId];

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "listenAcceleration",
              methodParam: {
                "on": false
              },
              appKey: Tida.interactParams.appkey
            };
            window.WindVane.call("wopc", "invoke", p, callback, callback);
          }
        },
        shake: {
          watch: function watch(options, callback) {
            if (typeof options == "function") {
              callback = options;
              options = false;
            }

            var frequency = 500;
            if ((typeof options === "undefined" ? "undefined" : _typeof(options)) == "object") {
              //榛樿鍊�500ms
              frequency = options.frequency || 500;
            }

            var watchId = ++uid;
            this[watchId] = function (result) {
              result.param.errorCode = 0;
              result.param.errorMessage = "";
              callback && callback(result.param);
            };

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "listeningShake",
              methodParam: {
                "on": true,
                "frequency": frequency
              },
              appKey: Tida.interactParams.appkey
            };

            var self = this;

            window.WindVane.call("wopc", "invoke", p, function (result) {
              if (result && result.ret === "HY_SUCCESS") {
                document.addEventListener('motion.shake', self[watchId]);
              } else {
                callback(result);
              }
            }, callback);

            return watchId;
          },
          clearWatch: function clearWatch(watchId, callback) {
            document.removeEventListener('motion.shake', this[watchId]);
            delete this[watchId];

            var p = {
              apiName: "Tida.WVMotion",
              methodName: "listeningShake",
              methodParam: {
                "on": false
              },
              appKey: Tida.interactParams.appkey
            };
            window.WindVane.call("wopc", "invoke", p, callback, callback);
          }
        }
      };

      exports.default = sensor;

      /***/ }),
    /* 20 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var social = {
        /**
         * 鐐硅禐 鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name praise
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.pubAccountId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.feedCover
         * @param {string} options.feedTitle
         * @param {string} options.feedUrl
         * @param {number} options.targetId 蹇呴€�
         * @param {number} options.targetType 蹇呴€�
         * @param {number} options.subType 蹇呴€�
         *
         * @param {Tida~praiseCallback} _callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
         *
         */
        /**
         * Tida.praise 鐐硅禐鎺ュ彛鍥炶皟
         * @callback Tida~praiseCallback
         * @param {Object} result 缁撴灉鏁版嵁
         * @param {number} result.praiseCount 宸茬粡鑾峰緱鐨勭偣璧炴暟
         * @param {boolean} result.praiseStatus 褰撳墠鐢ㄦ埛鏄惁宸茶禐
         * @param {number} result.errorCode 涓�0鏃舵帴鍙ｈ皟鐢ㄦ垚鍔�
         */
        praise: function praise(options, _callback) {
          this._socialPlugin(options, _callback, "praise");
        },
        /**
         * 鍏虫敞銆佹敹钘� 鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name follow
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.pubAccountId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.feedCover
         * @param {string} options.feedTitle
         * @param {string} options.feedUrl
         * @param {number} options.targetId 蹇呴€�
         * @param {number} options.targetType 蹇呴€�
         * @param {number} options.subType 蹇呴€�
         *
         * @param {Tida~followCallback} _callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
         *
         */
        /**
         * Tida.follow 鍏虫敞鎺ュ彛鍥炶皟
         * @callback Tida~followCallback
         * @param {Object} result 缁撴灉鏁版嵁
         * @param {boolean} result.followStatus 褰撳墠鐢ㄦ埛鏄惁宸插叧娉�
         * @param {number} result.errorCode 涓�0鏃舵帴鍙ｈ皟鐢ㄦ垚鍔�
         */
        follow: function follow(options, _callback) {
          this._socialPlugin(options, _callback, "follow");
        },

        /**
         * Tida.follow2 鍏虫敞鎺ュ彛鍥炶皟
         * @callback Tida~followCallback
         * @param {Object} result 缁撴灉鏁版嵁
         * @param {boolean} result.followStatus 褰撳墠鐢ㄦ埛鏄惁宸插叧娉�
         * @param {number} result.errorCode 涓�0鏃舵帴鍙ｈ皟鐢ㄦ垚鍔�
         */
        follow2: function follow2(options, callback) {

          var mtopParams = {
            eventName: 'shopFavorAsyc',
            businessParam: { appKey: Tida.interactParams.appkey, sellerId: options.sellerId, isAdd: "1" },
            mtopApi: "mtop.interact.shop.favor",
            //appkey: Tida.interactParams.appkey
            //businessParam: { interactId: "4a448087-89fb-475e-ac3d-fd6a0a3f03a3" },
            //mtopApi: "mtop.interact.isvlottery.idraw",
            appkey: Tida.interactParams.appkey
          };
          //alert(JSON.stringify(mtopParams));
          Tida.mtopAsyc(mtopParams, callback);
        },

        /**
         * 璇勮
         *
         * @memberOf Tida
         * @name comment
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.pubAccountId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.feedCover
         * @param {string} options.feedTitle
         * @param {string} options.feedUrl
         * @param {number} options.targetId 蹇呴€�
         * @param {number} options.targetType 蹇呴€�
         * @param {number} options.subType 蹇呴€�
         *
         *
         */
        comment: function comment(options, _callback) {
          this._socialPlugin(options, _callback, "comment");
        },

        /**
         * 绠€鐗堣瘎璁虹粍浠�
         *
         * @memberOf Tida
         * @name inputbar
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.pubAccountId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.feedCover
         * @param {string} options.feedTitle
         * @param {string} options.feedUrl
         * @param {number} options.targetId 蹇呴€�
         *
         *
         */
        inputbar: function inputbar(options, _callback) {
          options.targetType = "0";
          options.subType = "0";

          var action = "inputbar";
          var o = options;
          var p = {
            apiName: "Tida.socialPlugin",
            methodName: "social",
            methodParam: {
              actions: action,
              accountId: o.pubAccountId,
              targetCover: o.feedCover,
              targetTitle: o.feedTitle,
              targetUrl: o.feedUrl,
              targetId: o.targetId,
              targetType: o.targetType,
              subType: o.subType

            },
            appKey: Tida.interactParams.appkey
          };

          var self = this;

          document.removeEventListener(action, self["socialPlugin." + action]);

          self["socialPlugin." + action] = function (e) {
            var result = e.param || e;
            result.errorCode = 0;
            for (var n in result) {
              if (result[n] === "true") {
                result[n] = true;
              } else if (result[n] === "false") {
                result[n] = false;
              }
            }
            if (typeof result.followStatu != "undefined") {
              result.followStatus = result.followStatu;
              delete result.followStatu;
            }
            _callback && _callback(result);
          };
          window.WindVane.call('wopc', 'invoke', p, function (d) {
            document.addEventListener(action, self["socialPlugin." + action]);
          }, function (d) {
            _callback && _callback(d);
          });
        },

        _socialPlugin: function _socialPlugin(options, _callback, action) {

          options.targetType = "100";
          options.subType = "" + Tida.interactParams.appkey;

          var o = options;
          var p = {
            apiName: "Tida.socialPlugin",
            methodName: "social",
            methodParam: {
              actions: action,
              pubAccountId: o.pubAccountId,
              feedCover: o.feedCover,
              feedTitle: o.feedTitle,
              feedUrl: o.feedUrl,
              targetId: o.targetId,
              targetType: o.targetType,
              subType: o.subType

            },
            appKey: Tida.interactParams.appkey
          };

          var self = this;

          document.removeEventListener(action, self["socialPlugin." + action]);

          self["socialPlugin." + action] = function (e) {
            var result = e.param || e;
            result.errorCode = 0;
            for (var n in result) {
              if (result[n] === "true") {
                result[n] = true;
              } else if (result[n] === "false") {
                result[n] = false;
              }
            }
            if (typeof result.followStatu != "undefined") {
              result.followStatus = result.followStatu;
              delete result.followStatu;
            }
            _callback && _callback(result);
          };
          window.WindVane.call('wopc', 'invoke', p, function (d) {
            document.addEventListener(action, self["socialPlugin." + action]);
          }, function (d) {
            _callback && _callback(d);
          });
        },

        itemFavor: function itemFavor(options, callback) {

          var itemId = options.itemId;
          var action = options.action;

          if (action !== 'add' && action !== 'del' && action !== 'check') {
            callback && callback({
              errorCode: 2,
              errorMsg: "action is required, choices : add,del,check."
            });
            return;
          }
          action = action + "Favorites";

          var p = {
            apiName: "Tida.favorites",
            methodName: "getFavorites",
            methodParam: {
              api: action,
              param: {
                itemId: itemId + ''
              }
            },
            appKey: Tida.interactParams.appkey
          };

          window.WindVane.call("wopc", "invoke", p, function (e) {
            callback(e);
          }, function (e) {
            callback(e);
          });
        },
        shopFavor: function shopFavor(options, callback) {
          // let option = options || {};
          // this.social(Object.assign(option, {
          //     action: 'follow'
          // }), callback);
          var mtopParams = {
            eventName: 'shopFavorAsyc',
            businessParam: { appKey: Tida.interactParams.appkey, sellerId: options.sellerId, isAdd: "1" },
            mtopApi: "mtop.interact.shop.favor",
            //appkey: Tida.interactParams.appkey
            //businessParam: { interactId: "4a448087-89fb-475e-ac3d-fd6a0a3f03a3" },
            //mtopApi: "mtop.interact.isvlottery.idraw",
            appkey: Tida.interactParams.appkey
          };
          //alert(JSON.stringify(mtopParams));
          Tida.mtopAsyc(mtopParams, function (res) {
            res.isCollect = '' + res.success === 'true';
            callback && callback(res);
          });
        },

        social: function social(options, callback) {
          //alert("checkpoint 1");
          var action = options.action;
          var sellerId = options.sellerId;
          var targetId = options.targetId;

          if (action !== 'follow' && action !== 'unFollow' && action !== 'checkFollow' && action !== 'praise' && action !== 'unPraise' && action !== 'checkPraise') {
            callback && callback({
              errorCode: 2,
              errorMsg: "action is required, choices : follow,unFollow,checkFollow,praise,unPraise,checkPraise."
            });
            return;
          }

          var p = {
            apiName: "Tida.socialPlugin",
            methodName: "social",
            methodParam: {
              api: action,
              param: {
                targetId: targetId + '',
                pubAccountId: sellerId + ''
              }
            },
            appKey: Tida.interactParams.appkey
          };

          window.WindVane.call("wopc", "invoke", p, function (e) {
            if (e.ret === 'HY_SUCCESS') {
              callback(e);
            } else {
              callback(e);
            }
          }, function (e) {
            callback(e);
          });
        }

      };

      exports.default = social;

      /***/ }),
    /* 21 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var buy = {
        detail: function detail(options, callback) {
          var itemId = options.itemId || options;
          var a = {
            apiName: "Tida.trade",
            methodName: "detail",
            methodParam: {
              "itemId": "" + itemId
            },
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", a, callback, callback);
        },

        /**
         * 鎼厤瀹濓紙鍙敮鎸丅鍟嗗搧锛�  鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name itemCombo
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.itemId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.comboId 鎼厤ID
         * @param {function} callback 鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         *
         */
        itemCombo: function itemCombo(options, callback) {
          var a = {
            apiName: "Tida.trade",
            methodName: "detailCombo",
            methodParam: {
              "itemId": options.itemId,
              "comboId": options.comboId,
              "type": "tmall"
            },
            appKey: Tida.interactParams.appkey
          };
          if (options.type) {
            a.methodParam.type = options.type;
          }
          window.WindVane.call("wopc", "invoke", a, callback, callback);
        },

        /**
         * 璐墿杞�  鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name cart
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.itemId 鍟嗗搧ID 涓嶅彲浠ヤ负绌�
         * @param {number} options.sku 鍟嗗搧sku 鍙互涓虹┖
         * @param {function} callback 鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         *
         */

        cart: function cart(options, callback) {

          var itemId = options.itemId;

          var skuId = options.skuId;

          var sellerNick = options.sellerNick;

          var isvExt = options.isvExt;

          if (typeof itemId == "undefined" || itemId == null) {

            callback({
              errorMsg: "itemId can't be null"
            });

            return;
          }

          if (typeof skuId == "undefined" || skuId == null) {
            skuId = "";
          }
          itemId += '';
          skuId += '';

          var a = {
            apiName: "Tida.trade",
            methodName: "cart",
            sellerNick: sellerNick,
            methodParam: {
              "sellerNick": sellerNick,
              "itemId": itemId,
              "skuId": skuId,
              "isvExt": isvExt
            },
            appKey: Tida.interactParams.appkey
          };
          var _cb = function _cb(e) {
            callback && callback(e);
          };
          //alert("about to call"+JSON.stringify(a))
          window.WindVane.call("wopc", "invoke", a, _cb, _cb);
        },

        /**
         * 璺宠浆鍒拌喘鐗╄溅
         *
         * @memberOf Tida
         * @name itemCombo
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.itemId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.comboId 鎼厤ID
         * @param {function} callback 鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         *
         */
        jumpcart: function jumpcart(options, callback) {
          // var a = {
          //      apiName : "Tida.trade",
          //      methodName : "cart",
          //      methodParam : {
          //          "type" : "taobao"
          //      },
          //      appKey : Tida.interactParams.appkey
          //  };

          //  window.WindVane.call("wopc", "invoke", a, callback, callback);
          location.href = "//h5.m.taobao.com/awp/base/cart.htm?cartfrom=detail";
        }

      };

      exports.default = buy;

      /***/ }),
    /* 22 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var msoa = {};

      /*
       *msoa鍙傛暟
       *Tida鏂规硶涓渶瑕佸～鍏erviceId绛夊繀瑕佸弬鏁�
       */
      var msoaParams = function msoaParams() {
        return {
          serviceId: "", //msoa鏈嶅姟瀵瑰簲鐨刬d 蹇呭～
          version: "1.0", //msoa鏈嶅姟鐨勭増鏈� 蹇呭～
          sceneName: location.href, //鍦烘櫙鍚� 浼犲叆椤甸潰url
          params: {}
        };
      };

      /*
       *wopc鍙傛暟
       *鎵€鏈塵soa鍔熻兘閫氳繃MSOAWVService.requestService澶勭悊
       */
      var wopcParams = function wopcParams() {
        return {
          apiName: "MSOAWVService", //msoa鐨刯sbridge鍚�
          methodName: "requestService", //jsbridge鏂规硶鍚�
          methodParam: msoaParams(),
          appKey: Tida.interactParams.appkey
        };
      };

      msoa.msoa = {
        /**
         * 鎵撳紑sku
         * @memberOf Tida
         * @name msoa.showSku
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.itemId 瀹濊礉id蹇呭～
         * @param {object} options.actionType 鍔熻兘绫诲瀷 0锛歴ku涓敮鎸佲€滃姞璐€濆拰鈥滆喘涔扳€濊兘鍔涳紱 1锛歴ku涓彧鏀寔鈥滃姞璐€濊兘鍔� 2锛歴ku涓彧鏀寔鈥滀笅鍗曗€濊兘鍔�
         * @param {function} callBack 鎴愬姛鎴栧け璐ョ殑鍥炶皟
         *
         */
        showSku: function showSku(options, callBack) {

          var itemId = options.itemId;
          var actionType = options.actionType ? options.actionType : "0";

          if (!itemId) {
            callBack({
              errorMsg: "itemId can't be null"
            });

            return;
          }

          //鏋勫缓msoa蹇呭～鍙傛暟
          var params = wopcParams();
          params.methodParam.serviceId = "msoa.taobao.detail.showsku";
          params.methodParam.version = "1.0";
          params.methodParam.params.itemId = itemId;
          params.methodParam.params.actionType = actionType;

          window.WindVane.call("wopc", "invoke", params, function (res) {
            if (callBack) {
              callBack(res);
            }
          }, function (res) {
            if (callBack) {
              callBack(res);
            }
          });

          var biz = options.biz || (options.isShopLoft ? 'shoploft' : '');
          Tida.newReport('/aliopen.tida.showsku', 'CLK', 'itemid=' + itemId + '&biz=' + biz, 'H1477801427');
        },

        /**
         * 鍔犺喘鍟嗗搧
         * @memberOf Tida
         * @name msoa.addCart
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.itemId 瀹濊礉id蹇呭～
         * @param {object} options.quantity 瀹濊礉id蹇呭～
         * @param {object} options.skuId 瀹濊礉id蹇呭～
         * @param {object} options.exParams 瀹濊礉id蹇呭～
         * @param {function} callBack 鎴愬姛鎴栧け璐ョ殑鍥炶皟
         *
         */
        addCart: function addCart(options, callBack) {

          var itemId = options.itemId;
          var from = 'taobao_client';
          var quantity = options.quantity;
          var skuId = options.skuId;
          var exParams = options.exParams;

          if (!itemId) {
            callBack({
              errorMsg: "itemId can't be null"
            });

            return;
          }

          //鏋勫缓msoa蹇呭～鍙傛暟
          var params = wopcParams();
          params.methodParam.serviceId = "msoa.taobao.cart.add";
          params.methodParam.version = "1.0";
          params.methodParam.params.itemId = itemId;
          params.methodParam.params.skuId = skuId;
          params.methodParam.params.exParams = exParams;
          params.methodParam.params.quantity = quantity;
          params.methodParam.params.from = from;

          window.WindVane.call("wopc", "invoke", params, function (res) {
            if (callBack) {
              callBack(res);
            }
          }, function (res) {
            if (callBack) {
              callBack(res);
            }
          });
          var biz = options.biz || (options.isShopLoft ? 'shoploft' : '');
          Tida.newReport('/aliopen.tida.addcart', 'CLK', 'itemid=' + itemId + '&biz=' + biz, 'H1477801426');
        },

        /**
         * 鍏抽棴搴楅摵浜屾ゼ锛屽彲閫夌殑鐢╤omePageId鎸囧畾瑕佸埛鏂板埌鐗瑰畾鐨勮淇椤�
         * @memberOf Tida
         * @name msoa.exitShopLoft
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.shopId 搴楅摵Id 蹇呭～
         * @param {object} options.homePageId 搴楅摵棣栭〉Id 鍙€�
         * @param {object} options.needRefresh 搴楅摵鏄惁瑕佸埛鏂�
         * @param {function} callBack 鎴愬姛鎴栧け璐ョ殑鍥炶皟
         *
         */
        exitShopLoft: function exitShopLoft(options, callBack) {

          var shopId = options.shopId;
          var homePageId = options.homePageId;
          var needRefresh = options.needRefresh;

          if (!shopId) {
            callBack({
              errorMsg: "shopId can't be null"
            });

            return;
          }

          //鏋勫缓msoa蹇呭～鍙傛暟
          var params = wopcParams();
          params.methodParam.serviceId = "msoa.taobao.shop.exitLoft";
          params.methodParam.version = "1.0";
          params.methodParam.params.shopId = shopId;
          params.methodParam.params.homePageId = homePageId;
          params.methodParam.params.needRefresh = needRefresh;

          window.WindVane.call("wopc", "invoke", params, function (res) {
            if (callBack) {
              callBack(res);
            }
          }, function (res) {
            if (callBack) {
              callBack(res);
            }
          });
        }
      };

      exports.default = msoa;

      /***/ }),
    /* 23 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _loadscript = __webpack_require__(4);

      var _loadscript2 = _interopRequireDefault(_loadscript);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function strToBase64(str, _callback) {

        var callback = function callback() {
          _callback(lib.encode.base64_utf8.encode(str));
        };

        if (!lib.encode) {
          (0, _loadscript2.default)('//g.alicdn.com/mtb/??lib-encode/0.0.1/base64utf8.js', function () {
            callback();
          });
          return;
        }
        callback();
      }

      var im = {
        /**
         * 鏃烘椇
         *
         * @memberOf Tida
         * @name wangwang
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.itemId 鍟嗗搧ID
         * @param {number} options.shopId 搴楅摵ID
         * @param {number} options.orderId 璁㈠崟ID 涓夎€呰嚦灏戜竴涓笉涓虹┖
         * @param {number} options.sellerNick 鍗栧鏄电О 涓嶅彲浠ヤ负绌�
         * @param {function} callback 鍥炶皟鍑芥暟
         *
         */
        wangwang: function wangwang(options, callback) {
          var sellerNick = options.sellerNick || '';
          var url = 'https://im.m.taobao.com/ww/ad_ww_dialog.htm?pds=wwseller%23h%23detail';
          strToBase64(sellerNick, function (sellerNick) {
            var obj = {
              // item_num_id: options.itemId,
              to_user: sellerNick
            };
            var itemId = options.itemId || '';
            if (itemId) {
              obj.item_num_id = itemId;
            }

            url = 'https://h5.m.taobao.com/ww/index.htm?#!dialog-' + sellerNick + '-' + itemId + '---';
            // alert(url)

            // url = Tida.addURLParam(obj, url);
            // Tida.pushWindow('https://im.m.taobao.com/ww/ad_ww_dialog.htm?item_num_id=40624496628&pds=wwseller%23h%23detail&to_user=uuPUtM%2Fp0%2FDI3rf%2Bys7G7L2iteo%3D');
            Tida.pushWindow(url);
          });
          // return callback && callback({
          //     errorCode : 3,
          //     errorMessage : 'not support'
          // });
        }

      };

      exports.default = im;

      /***/ }),
    /* 24 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var currModule = {
        init: function init() {
          var tmpCall = WindVane.call;
          WindVane.call = function (className, methodName, param, success, failure, timeout) {
            if (className == 'wopc' && methodName == 'invoke') {
              var newClassName = param.apiName.split('.')[1];
              var newMethodName = param.methodName;
              var newParam = param.methodParam;
              tmpCall(newClassName, newMethodName, newParam, success, failure, timeout);
            } else {
              tmpCall(className, methodName, param, success, failure, timeout);
            }
          };
        }
      };

      exports.default = currModule;

      /***/ }),
    /* 25 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var _windvaneCall = __webpack_require__(5);

      var _windvaneCall2 = _interopRequireDefault(_windvaneCall);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var canSetOrient = lib.env.taobaoApp && lib.env.taobaoApp.version.gte('6.7.1'); // 鏄惁鍙互璁剧疆妯珫灞忓紑鍏�
      function isInt(number) {
        if (number === parseInt(number, 10)) {
          return true;
        }
        return false;
      }
      document.addEventListener('closeinteractvideo', function () {
        if (canSetOrient) {
          (0, _windvaneCall2.default)('WVScreen.setOrientation', {
            orientation: 'portrait'
          }, function (e) {}, function (e) {});
        }
      });
      var video = {
        /**
         * 鍞よ捣澶氬獟浣撴挱鏀惧櫒
         *
         * @memberOf Tida
         * @name openInteractVideo
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {string} options.videoUrl 瑙嗛url瑙嗛鍦板潃涓€瀹氳鏈塻chema 锛坔ttp: 鎴栬€� https:锛�
         * @param {int} options.width 瑙嗛鐨勫搴︼紝鐜板湪鍙兘鏄睆骞曠殑瀹藉害
         * @param {int} options.height 瑙嗛楂樺害
         * @param {string} options.userId 瑙嗛缂栬緫鑰呯殑userId
         * @param {string} options.interactiveVideoId 浜掑姩瑙嗛id
         * @param {string} options.showCloseBtn 鏄惁鏄剧ず鍏抽棴鎸夐挳
         * @param {Boolean} options.showFullScreenButton 鏄惁鏄剧ず鍏ㄥ睆鎸夐挳锛屽鎴风6.4.5鍚庢敮鎸�
         * @param {Boolean} options.autoSetOrientation 鏄惁鑷姩鏃嬭浆锛宨os鐨�6.7.1鐗堟湰鍚庢敮鎸�
         * @param {function} callback 鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         */
        openInteractVideo: function openInteractVideo(options, callback) {
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== "object") {
            callback({
              errorCode: 2,
              errorMsg: "options required"
            });
            return;
          }

          var videoUrl = options.videoUrl;
          var width = options.width;
          var height = options.height;
          var from = 'ISV'; // 瑙嗛鏉ユ簮锛岀敤鏉ョ‘瀹氫簰鍔ㄦ柟妗堢殑鏉ユ簮锛屾瘮濡係HOP锛學EITAO锛孲EARCH锛屼笁鏂瑰啓姝� ISV
          var userId = options.userId;
          var interactiveVideoId = options.interactiveVideoId;
          var showCloseBtn = options.showCloseBtn;
          var showFullScreenButton = options.showFullScreenButton; // 鏄惁鏄剧ず鍏ㄥ睆鎸夐挳锛屽鎴风6.4.5鍚庢敮鎸�
          var autoSetOrientation = options.autoSetOrientation;

          if (undefined == videoUrl || undefined == width || undefined == height || undefined == from || undefined == userId || undefined == interactiveVideoId) {

            callback({
              errorCode: 2,
              errorMsg: 'videoUrl\\width\\height\\from\\userId\\interactiveVideoId required'
            });

            return;
          }

          if (typeof videoUrl !== "string") {
            callback({
              errorCode: 2,
              errorMsg: "the type of options.videoUrl must be string"
            });
            return;
          }

          if (showCloseBtn !== undefined && typeof showCloseBtn !== "string") {
            callback({
              errorCode: 2,
              errorMsg: "the type of options.showCloseBtn must be string"
            });
            return;
          }

          if ((typeof showCloseBtn === 'undefined' ? 'undefined' : _typeof(showCloseBtn)) == undefined) {
            showCloseBtn = "true";
          }

          if ((typeof showFullScreenButton === 'undefined' ? 'undefined' : _typeof(showFullScreenButton)) == undefined) {
            showFullScreenButton = "true";
          }

          if (autoSetOrientation == 'true' || autoSetOrientation == undefined) {
            autoSetOrientation = true;
          } else if (autoSetOrientation == 'false') {
            autoSetOrientation = false;
          }

          var params = {
            apiName: "Tida.video",
            methodName: "openInteractVideo",
            methodParam: {
              videoUrl: videoUrl,
              width: width.toString(),
              height: height.toString(),
              from: from,
              userId: userId,
              interactiveVideoId: interactiveVideoId,
              showCloseBtn: showCloseBtn,
              showFullScreenButton: showFullScreenButton
            },
            appKey: Tida.interactParams.appkey
          };

          if (canSetOrient && autoSetOrientation) {
            (0, _windvaneCall2.default)('WVScreen.setOrientation', {
              orientation: 'auto'
            }, function (e) {
              window.WindVane.call("wopc", "invoke", params, callback, callback);
            }, function (e) {
              window.WindVane.call("wopc", "invoke", params, callback, callback);
            });
          } else {
            window.WindVane.call("wopc", "invoke", params, callback, callback);
          }
        },
        /**
         * 鍏抽棴宸插敜璧风殑澶氬獟浣撴挱鏀惧櫒
         *
         * @memberOf Tida
         * @name closeInteractVideo
         * @function
         *
         */
        closeInteractVideo: function closeInteractVideo(callback) {
          var params = {
            apiName: "Tida.video",
            methodName: "closeInteractVideo",
            methodParam: {},
            appKey: Tida.interactParams.appkey
          };
          if (canSetOrient) {
            (0, _windvaneCall2.default)('WVScreen.setOrientation', {
              orientation: 'portrait'
            }, function () {
              window.WindVane.call("wopc", "invoke", params, callback, callback);
            }, function () {
              window.WindVane.call("wopc", "invoke", params, callback, callback);
            });
          } else {
            window.WindVane.call("wopc", "invoke", params, callback, callback);
          }
        }
      };

      exports.default = video;

      /***/ }),
    /* 26 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function InvokeWV(methodName, option, succ, fail) {
        var a = {
          apiName: "Tida.FaceReco",
          methodName: methodName,
          methodParam: option,
          appKey: Tida.interactParams.appkey
        };
        window.WindVane.call("wopc", "invoke", a, succ, fail);
      }

      var FaceReco = {
        imgDetect: function imgDetect(options, cb) {
          InvokeWV("imgDetect", options, cb, cb);
        },

        startCameraDetect: function startCameraDetect(options, cb) {
          InvokeWV("startCameraDetect", options, cb, cb);
        },

        stopCameraDetect: function stopCameraDetect(options, cb) {
          InvokeWV("stopCameraDetect", options, cb, cb);
        },

        takeCameraFrame: function takeCameraFrame(cb) {
          InvokeWV("takeCameraFrame", {}, cb, cb);
        }
      };

      var currModule = { FaceReco: FaceReco };

      exports.default = currModule;

      /***/ }),
    /* 27 */
    /***/ (function(module, exports) {

      'use strict';

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      ;(function (window, Tida) {
        var ua = navigator.userAgent;
        if (/AliApp\(TB\/(.*?)\)/.test(ua)) {
          window.version = RegExp.$1;
        }

        function getParam(key, url) {
          var paraStr = key;
          url = url || location.href;
          if (url.indexOf(paraStr + '=') == -1) {
            return '';
          }
          url = url.split("#")[0];
          var queryString = url.indexOf("?") > -1 ? url.substring(url.indexOf("?") + 1) : url;
          var parameters = queryString.split("&");
          var pos, paraName, paraValue;
          for (var i = 0; i < parameters.length; i++) {
            pos = parameters[i].indexOf('=');
            if (pos == -1) {
              continue;
            }
            paraName = parameters[i].substring(0, pos);
            paraValue = parameters[i].substring(pos + 1);
            if (paraName == paraStr) {
              return decodeURIComponent(paraValue.replace(/\+/g, " "));
            }
          }
          return '';
        };

        function getAppkeyFromURL() {
          var appkey;
          var s = document.getElementsByTagName('script');
          for (var i = 0; i < s.length; i++) {
            var src = s[i].getAttribute('src');
            if (src) {
              var ret = src.match(/(^|&|\\?)appkey=([^&]*)(&|$)/);
              if (ret) {
                appkey = ret[2];
                break;
              }
            }
          }
          return appkey;
        };

        //灏嗗畾鍒跺弬鏁版斁鍒皊essionStore涓�
        if (sessionStorage && sessionStorage.setItem) {
          if (getParam('tradeToken')) sessionStorage.setItem('tb_tradeToken', getParam('tradeToken'));
          if (getParam('from')) sessionStorage.setItem('tb_custom_from', getParam('from'));
          if (getParam('tb_order_host')) sessionStorage.setItem('tb_order_host', getParam('tb_order_host'));
          if (getParam('tb_encoding')) sessionStorage.setItem('tb_encoding', getParam('tb_encoding'));
          if (getParam('itemId')) sessionStorage.setItem('tb_itemId', getParam('itemId'));
          if (getParam('sellerNick')) sessionStorage.setItem('tb_sellerNick', getParam('sellerNick'));
        }

        var from_native = window.location.search.indexOf('from=native');
        if (from_native == -1 && sessionStorage.getItem('tb_custom_from') != 'native') {
          var customization = { buildOrder: function buildOrder(data, callback) {
            if (!data) {
              alert("娌℃湁涓嬪崟鏁版嵁");return;
            }window.goldlog && window.goldlog.record && window.goldlog.record("/openwx.8.1", "", "shopid=121&sellernick=" + sessionStorage.getItem("tb_sellerNick") + "&itemid=" + sessionStorage.getItem("tb_itemId") + "&operation=customization_submit", "H46747592");data.tradeToken = sessionStorage.getItem("tb_tradeToken");var host = sessionStorage.getItem("tb_order_host");if (!host) {
              host = "//buy.m.tmall.com";
            }var $form = document.createElement("form");$form.acceptCharset = sessionStorage.getItem("tb_encoding") || "gbk";document.body.appendChild($form);var customization = this._createInput("customization", data);var buyNow = this._createInput("buyNow", true);var quantity = this._createInput("quantity", 1);[customization, buyNow, quantity].forEach(function (input) {
              $form.appendChild(input);
            });$form.action = "https:" + host + "/order/confirmOrderWap.htm";$form.method = "POST";$form.submit();
          }, getTradeParams: function getTradeParams() {
            var initParams = {};var search = window.location.search;if (!search) {
              return {};
            }var query = search.substring(1);var vars = query.split("&");for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split("=");initParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }return initParams;
          }, _createInput: function _createInput(name, value) {
            var $input = document.createElement("input");$input.setAttribute("type", "hidden");$input.setAttribute("name", name);$input.name = name;var val = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? JSON.stringify(value) : value;$input.setAttribute("value", val);return $input;
          } };
          module.exports = { customization: customization };
          return;
        }

        var customization = {
          /**
           * 鎻愪氦鐢熸垚璁㈠崟,H5璋冪敤鐖堕〉闈㈡柟娉曪紝鎵嬫窐璋冪敤hybrid
           * @param  {object} 瀹氬崟鐨勫弬鏁般€�
           * @param  {Function} 鍥炶皟鏂规硶
           * @return {[type]}
           */
          buildOrder: function buildOrder(data, callback) {
            data.tradeToken = sessionStorage.getItem('tb_tradeToken');

            window.goldlog && window.goldlog.record && window.goldlog.record('/openwx.8.1', '', 'shopid=121&sellernick=' + sessionStorage.getItem('tb_sellerNick') + '&itemid=' + sessionStorage.getItem('tb_itemId') + '&operation=customization_submit', 'H46747592');

            var a = {
              apiName: "Tida.trade",
              methodName: "buildOrder",
              methodParam: data,
              appKey: getAppkeyFromURL()
            };

            var _cb = function _cb(e) {
              callback && callback(e);
            };
            window.WindVane.call("wopc", "invoke", a, _cb, _cb);
          },
          /**
           * 鑾峰彇浜ゆ槗鍙傛暟
           * @return {object} 杩斿洖浜ゆ槗鍙傛暟
           */
          getTradeParams: function getTradeParams() {
            var initParams = {};
            var search = window.location.search;
            if (!search) {
              return {};
            }
            var query = search.substring(1);
            var vars = query.split('&');

            for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split('=');
              initParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return initParams;
          }
        };

        // Tida.customization = customization;
        module.exports = { customization: customization };
      })(window, window.Tida || (window.Tida = {}));

      /***/ }),
    /* 28 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _base = __webpack_require__(29);

      var _base2 = _interopRequireDefault(_base);

      var _AR = __webpack_require__(31);

      var _AR2 = _interopRequireDefault(_AR);

      var _device = __webpack_require__(32);

      var _device2 = _interopRequireDefault(_device);

      var _tmmHack = __webpack_require__(33);

      var _tmmHack2 = _interopRequireDefault(_tmmHack);

      var _audio = __webpack_require__(34);

      var _audio2 = _interopRequireDefault(_audio);

      var _widget = __webpack_require__(35);

      var _widget2 = _interopRequireDefault(_widget);

      var _share = __webpack_require__(36);

      var _share2 = _interopRequireDefault(_share);

      var _sensor = __webpack_require__(37);

      var _sensor2 = _interopRequireDefault(_sensor);

      var _social = __webpack_require__(38);

      var _social2 = _interopRequireDefault(_social);

      var _buy = __webpack_require__(39);

      var _buy2 = _interopRequireDefault(_buy);

      var _im = __webpack_require__(23);

      var _im2 = _interopRequireDefault(_im);

      var _facereco = __webpack_require__(40);

      var _facereco2 = _interopRequireDefault(_facereco);

      var _customization = __webpack_require__(41);

      var _customization2 = _interopRequireDefault(_customization);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      // 閮ㄥ垎鎺ュ彛TMM杩樹笉鑳藉簾闄ゆ帀锛屼絾涔熶笉鑳芥墦鍖呰繘鍘� 缁濅笉鎵撳寘杩涘幓銆傚簾鏃ф帹鏂�
      _tmmHack2.default.init();

      var App = Object.assign(_base2.default, _AR2.default, _device2.default, _audio2.default, _widget2.default, _share2.default, _sensor2.default, _buy2.default, _social2.default, _im2.default, _facereco2.default, _customization2.default);
      exports.default = App;

      /***/ }),
    /* 29 */
    /***/ (function(module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _mtop = __webpack_require__(30);

      var _mtop2 = _interopRequireDefault(_mtop);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var currModule = {

        doAuth: function doAuth(options, callback) {

          // 鎺堟潈娴眰鍑烘潵鐨勬湁鐐规參 涓嶈兘璁╃敤鎴风媯鐐�
          if (this.authing) {
            return;
          }
          Tida.authing = 1;

          // 闃叉瀹㈡埛绔悇绉嶆儏鍐典笉鍥炶皟 闅旀鏃堕棿杩樻槸鍒犻櫎flag
          setTimeout(function () {
            Tida.authing = null;
          }, 5000);

          var _callback = callback;
          if (typeof options == "function") {
            callback = options;
            options = false;
          }
          var option = options === true ? options : options.refresh || false;

          var isIOS = lib.env.os.isIOS;

          var param = isIOS ? {
            "refresh": option
          } : option;
          var _callback = function _callback(result) {

            if (isIOS) {
              result.errorCode = result.ret && result.ret.retCod;
              if (result.ret && result.ret == "HY_SUCCESS") {
                result.errorCode = 0;
              }
            } else {
              result.errorCode = result.code;
            }
            result.errorMessage = result.msg || result.ret && result.ret.retMsg || "";
            result.finish = result.errorCode == 0;

            callback && callback(result);
            // 鎺堟潈鎴愬姛涓婃姤
            if (result.finish) {
              Tida.newReport('/uaward.8.2', '', 'api=Tida.doAuth.succ', 'H46747614');
            } else {
              Tida.newReport('/uaward.8.2', '', 'api=Tida.doAuth.fail', 'H46747614');
            }
            Tida.authing = null;
          };
          // Android 5.14.0 IOS 5.2.0
          // if (isIOS && lib.env.aliapp.version.gte("5.1.50") || (!isIOS && lib.env.aliapp.version.gte("5.13.50"))) {
          WindVane.call("wopc", "doAuth", {
            "refresh": option,
            appKey: Tida.interactParams.appkey
          }, _callback, _callback);
          // } else {
          //     window.TMM && TMM.APP.call('Isv.doAuth', [JSON.stringify(param)], _callback, _callback);
          // }
          Tida.newReport('/uaward.8.2', '', 'api=Tida.doAuth', 'H46747614');
        },
        mtopAsyc: _mtop2.default

      };

      exports.default = currModule;

      /***/ }),
    /* 30 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function currModule(mtopParams, _callback, timeout) {
        var callback = function callback(e) {
          var data = {};

          if (lib.env.os.isIOS) {
            data = e;
          } else {
            data = e.data || {};
            try {
              data = JSON.parse(data);
            } catch (ex) {
              // data涓嶆槸姝ｇ‘鐨凧SON string 鍙槸涓瓧绗︿覆
              if (typeof data === 'string' && data.indexOf('{') === -1) {
                data = e;
                data.data = '';
              }
            }
            data = data.data || data;
            data.errorCode = 0;
          }
          _callback && _callback(data);
        };

        var businessParam = mtopParams.businessParam;
        if (!businessParam.appkey) {
          businessParam.appkey = mtopParams.appkey;
        }

        //windvnae 鍏ュ弬
        var p = {
          apiName: "Tida.server",
          methodName: "getMtop",
          isAsync: true,
          eventName: mtopParams.eventName,
          methodParam: {
            mtopApi: mtopParams.mtopApi,
            mtopParam: {
              ua: "",
              version: "1.0",
              needLogin: true,
              isSec: 1,
              businessParam: businessParam,
              appKey: mtopParams.appkey || Tida.interactParams.appkey
            }
          },

          appKey: mtopParams.appkey || Tida.interactParams.appkey

        };

        if (lib.env.os.isIOS) {
          if (lib.env.aliapp && lib.env.aliapp.version.gt("5.4.49")) {

            WindVane.call('wopc', 'mtop', {
              v: '1.0',
              post: '1',
              ecode: '1',
              isSec: '1',
              api: p.methodParam.mtopApi,
              param: p.methodParam.mtopParam.businessParam,
              appKey: p.appKey
            }, callback, callback, timeout);
          } else {
            WindVane.call('wopc', 'invoke', p, callback, callback, timeout);
          }
        } else {

          WindVane.call('wopc', 'mtop', {
            v: '1.0',
            post: 'true',
            ecode: '1',
            isSec: 'true',
            api: p.methodParam.mtopApi,
            param: p.methodParam.mtopParam.businessParam,
            appKey: p.appKey,
            appkey: p.appKey
          }, callback, callback, timeout);
        }
      }

      exports.default = currModule;

      /***/ }),
    /* 31 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _arScanMock = __webpack_require__(12);

      var _arScanMock2 = _interopRequireDefault(_arScanMock);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var eventPool = [];

      var AR = {
        openMarker: function openMarker(config, _callback) {
          // tmall://page.tm/AR?mode=1&url=
          var callback = function callback(e) {
            config && config.success && config.success(e);
          };

          var url = config.url || config;
          if (config.useUCWebView || config.UCWebView) {
            if (!Tida.getParam('UCWebView', url) && !Tida.getParam('__UCWebView__', url)) {
              url = Tida.addURLParam({
                "__UCWebView__": "true"
              }, url);
            }
          }

          url = Tida.addURLParam({
            "_arview_": "1"
          }, url);

          Tida.pushWindow('tmall://page.tm/AR?mode=1&url=' + encodeURIComponent(url));
        },
        startMarkerTrack: function startMarkerTrack(config, _callback) {

          var suc = function suc(result) {
            config.success && config.success(result);

            eventPool[0] = function (e) {
              var param = e.param;

              config.recognize && config.recognize(param);

              if (e.param.models.length > 0) {
                config.recognizeSuccess && config.recognizeSuccess(param);
              }

              _callback && _callback(param);
            };
            document.addEventListener('arpluginupdate', eventPool[0], false);
          };

          var fail = function fail(e) {
            config.fail && config.fail(e);
            _callback && _callback(e);
          };

          var iosData = {
            dat: config.markers[0]
          };
          if (lib.env.os.isIOS) {
            window.WindVane.call("ARPlugin", "startUp", iosData, suc, fail);
          } else {
            //
            if (window.lib && lib.env.aliapp && lib.env.aliapp.version.gte('5.26')) {
              window.WindVane.call("ARPlugin", "startUp", iosData, suc, fail);
            } else {
              window.TMM && TMM.APP.call("ARPlugin.startUp", [config.markers[0]], suc, fail);
            }
          }
        },
        stopMarkerTrack: function stopMarkerTrack(config) {
          document.removeEventListener('arpluginupdate', eventPool[0], false);
          eventPool[0] = null;
          config.success && config.success({ errorCode: 0 });
        },
        switchCamera: function switchCamera(cb) {

          this.cameraFront = !this.cameraFront;

          var type = this.cameraFront ? "front" : "back";

          var data = {
            cameraType: type
          };
          window.WindVane.call("ARPlugin", "updateConfig", data, cb, cb);
        },
        scan: function scan(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          // 鍓嶆湡鍏坢ock渚涜皟璇�
          if (opt.mock) {
            setTimeout(function () {
              cb(_arScanMock2.default);
            }, opt.timeout || 2000);
          } else {
            window.WindVane.call("argo", "scan", opt, cb, cb);
          }
        }
      };

      var currModule = {
        AR: AR
      };

      exports.default = currModule;

      /***/ }),
    /* 32 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var device = {
        geolocation: {
          /**
           * 鑾峰彇褰撳墠鐨勫湴鐞嗕綅缃€�
           * @param {boolean} [opt.enableHighAccuracy=false] 鏄惁鎵撳紑楂樼簿搴�  澶╃尗瀹㈡埛绔洰鍓嶄笉鏀寔鍙傛暟
           * @param {number} [opt.timeout=1000] 瓒呮椂鏃堕棿锛屽崟浣嶄负姣 澶╃尗瀹㈡埛绔洰鍓嶄笉鏀寔鍙傛暟
           * @param {number} [opt.maximumAge] 缂撳瓨鏈€闀挎椂闂达紝鍗曚綅涓烘绉� 澶╃尗瀹㈡埛绔洰鍓嶄笉鏀寔鍙傛暟
           * @param {Function} callback
           */
          getCurrentPosition: function getCurrentPosition(option, callback) {
            if (typeof option == "function") {
              callback = option;
            }
            var params = {
              // 鏄惁鑾峰彇楂樼簿搴︾殑浣嶇疆
              enableHighAcuracy: true,
              // 鏄惁鑾峰彇鍦板潃鎻忚堪
              address: true
            };
            WindVane.call('WVLocation', 'getLocation', params, callback, callback);
          }
        },
        network: {
          /**
           * 鑾峰彇缃戠粶绫诲瀷銆�
           * @param {string} type 缃戠粶绫诲瀷
           * @return {Object} 杩斿洖杞崲鍚庣殑缃戠粶淇℃伅瀵硅薄
           */
          getType: function getType(callback) {

            var _callback = function _callback(result) {
              // 鍦ㄥぉ鐚鎴风杩斿洖 E銆丟銆�3G銆丠銆乄IFI eg:{"type":"WIFI"}锛屽鏋滈潪WIFI涓嬶紝鍙堝垽鏂笉浜嗘槸2g杩樻槸3g锛岄偅灏辫繑鍥瀧"type":""}
              var type = result.type;
              var data = {
                errorCode: 0,
                type: type,
                networkAvailable: type !== "",
                isOnline: type !== "",
                isWifi: type === 'WIFI',
                is3G: type === "3G",
                is2G: type === "2G",
                isG: type === "G",
                isH: type === "H",
                isE: type === "E"
              };
              callback && callback(data);
            };

            // window.TMM && TMM.APP.call("Application.networkType", [], _callback, _callback);
            WindVane.call("WVNetwork", "getNetworkType", {}, _callback, _callback);
          }
        },

        /**
         * 鎷嶇収骞朵笂浼犮€�
         * @param {object} options
         * @param {Function} callback
         */
        photo: function photo(options, callback) {
          var params = {
            "needZoom": true,
            "compatible": true
          };
          var typeofOption = typeof options === 'undefined' ? 'undefined' : _typeof(options);
          if (typeofOption == "function") {
            callback = options;
            options = null;
          } else if (typeofOption == 'object') {
            params = Object.assign(params, options.param || {});
          }

          var removeTakeSuccess = function removeTakeSuccess() {
            document.removeEventListener('WVPhoto.Event.takePhotoSuccess', _callback, false);
          };
          var _callback = function _callback(ret) {
            removeTakeSuccess();
            var param = ret.param;
            var result = {
              errorCode: 0,
              errorMessage: '',
              photo: param.url
            };
            var obj = Object.assign(param, result);
            // callback && callback(obj);
            options && options.success && options.success(obj);
          };
          document.addEventListener('WVPhoto.Event.takePhotoSuccess', _callback, false);
          WindVane.call('WVCamera', 'takePhoto', params, function (e) {
            callback && callback(e);
          }, function (e) {
            removeTakeSuccess();
            callback && callback(e);
            options && options.fail && options.fail(e);
          });

          // options = options || {};
          // if (options.src === 'gallary') {
          //     options.src = 'photo';
          // } else if (options.src === 'camera') {
          //     options.src = 'backCamera';
          // }
          // if(lib.env.os.isIOS && lib.env.aliapp.version.gte("5.1.50")){
          //     document.addEventListener("getCameraPic", function(e){
          //         document.removeEventListener("getCameraPic", arguments.callee, false);
          //         var result =  e.param;
          //         var image = result.data;
          //         callback && callback({
          //             errorCode : result.code,
          //             errorMessage : result.message,
          //             photo : image, // hybrid api瑙勮寖
          //             urls:[{url:image}] // 涓庢墜娣樹繚鎸佷竴鑷磠urls:[{status:2,url:xxx}]}
          //         });
          //     },false);
          //     var a = {
          //         apiName: "Tida.getCameraPic",
          //         methodName: "getCameraPicExute",
          //         methodParam: {
          //             'maskPicUrl':options.url || "",
          //             'mWidth':options.width || 0+"",
          //             'mHeight':options.height || 0+"",
          //             'cameraMode':options.mode||'backCamera'
          //         },
          //         appKey: Tida.interactParams.appkey
          //     };

          //     if(lib.env.aliapp&&lib.env.aliapp.version.gt("5.4.49")){
          //         WindVane.call("MisGetCameraPic", "getCameraPicExute", a.methodParam);
          //     }else{
          //         window.WindVane.call("wopc", "invoke", a);
          //     }
          //     return;
          // }

          // var params = [options.url || "", options.width || 0, options.height || 0, !!options.addFilter, options.src || ''];
          // window.TMM && TMM.APP.call("Application.getCameraPic", params, function(result) {
          //     var data = result;
          //     if (result.data) {
          //         var image = result.data.image;
          //         data = {
          //             errorCode : result.ret.retCod,
          //             errorMessage : result.ret.retMsg,
          //             photo : image, // hybrid api瑙勮寖
          //             urls:[{url:image}] // 涓庢墜娣樹繚鎸佷竴鑷磠urls:[{status:2,url:xxx}]}
          //         };
          //     }
          //     // IOS涓婃憚鍍忓彇娑堜篃璧板埌杩欓噷鐨勯€昏緫 姝ゆ椂鍏跺畠鍙傛暟閮芥槸鎴愬姛鐨勪竴妯℃牱 photo鐨勫€间负"data:image/jpg;base64;(null)"
          //     if (data.photo && data.photo.length == 28) {
          //         data = {
          //             errorCode : 6,
          //             errorMessage : "鐢ㄦ埛鍙栨秷"
          //         };
          //     }
          //     callback && callback(data);
          // }, function(error) {
          //     if (error === "") {
          //         callback && callback({
          //             errorCode : 6,
          //             errorMessage : "鐢ㄦ埛鍙栨秷"
          //         });
          //     } else {
          //         if ( typeof error == "object" && error.code) {
          //             error.errorCode = error.code;
          //         }
          //         callback && callback(error);
          //     }
          // });
        },

        /**
         * 鎵爜
         * @param {function} callback
         */
        scanCode: function scanCode(_callback) {
          var callback = function callback(data) {
            var result = {};
            result.errorCode = data.ret == "HY_SUCCESS" || data.code == 0 ? 0 : -1;
            if (result.errorCode == 0) {
              result.type = data.type || data.data.type;
              result.code = data.value || data.data.code;
            }
            _callback && _callback(result);
          };
          if (lib.env.os.isIOS) {
            if (lib.env.aliapp && lib.env.aliapp.version.gt("5.4.49")) {
              window.WindVane && WindVane.call("MisScancode", "scan", {}, callback, callback);
            } else {
              window.WindVane && WindVane.call("wopc", "invoke", {
                apiName: "Tida.scancode",
                methodName: "scan",
                appKey: Tida.interactParams.appkey
              }, callback, callback);
            }
          } else {
            window.TMM && TMM.APP.call("Scancode.scan", [], callback, callback);
          }
        },
        checkDeviceModuleStatus: function checkDeviceModuleStatus(options) {
          window.WindVane.call('TidaDevice', 'checkDeviceModuleStatus', options.param, function (e) {
            options.success && options.success(e);
          }, function (e) {
            options.fail && options.fail(e);
          });
        },
        requestToTurnOnModule: function requestToTurnOnModule(options) {
          window.WindVane.call('TidaDevice', 'requestToTurnOnModule', options.param, function (e) {
            options.success && options.success(e);
          }, function (e) {
            options.fail && options.fail(e);
          });
        },
        RPliveness: function RPliveness(options) {
          window.WindVane.call('RP', 'liveness', options.param, function (e) {
            options.success && options.success(e);
          }, function (e) {
            options.fail && options.fail(e);
          });
        },
        startSearchBeacons: function startSearchBeacons(options) {
          window.WindVane.call('TidaBeacon', 'startSearchBeacons', options.param, function (e) {
            options.success && options.success(e);
          }, function (e) {
            options.fail && options.fail(e);
          });
        },
        stopSearchBeacons: function stopSearchBeacons(options) {
          window.WindVane.call('TidaBeacon', 'stopSearchBeacons', options.param, function (e) {
            options.success && options.success(e);
          }, function (e) {
            options.fail && options.fail(e);
          });
        }
      };

      device.artWork = device.photo;

      exports.default = device;

      /***/ }),
    /* 33 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _loadscript = __webpack_require__(4);

      var _loadscript2 = _interopRequireDefault(_loadscript);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var currModule = {
        init: function init() {
          if (!window.TMM) {
            window.TMM = {
              APP: {
                call: function call(a, b, c, d, e) {
                  var temp = TMM;
                  window.TMM = null;
                  (0, _loadscript2.default)('//g.alicdn.com/mui/tmm/2.2.6/tmm.js', function () {
                    temp = null;
                    window.TMM && TMM.APP.call(a, b, c, d, e);
                  }, function () {
                    // 鎷夊彇澶辫触閲嶇疆
                    window.TMM = temp;
                  });
                }
              }
            };
          }
        }
      };

      exports.default = currModule;

      /***/ }),
    /* 34 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var _voice = __webpack_require__(15);

      var _voice2 = _interopRequireDefault(_voice);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var nonce = 0;

      function getNonce() {
        nonce++;
        return nonce;
      }

      var playIdentifier = 'audio_player_';
      var endRecordSuccessCall; //褰曢煶缁撴潫鐨勫洖璋冩柟娉�
      var endLocalPlaySuccessCall; //鎾斁褰曢煶缁撴潫鍥炶皟鏂规硶
      var LocalId; //褰曢煶鏂囦欢姝ｅ父鐢熸垚id
      var num = 0;

      var audio = {
        play: function play(options, callback) {

          var url = typeof options == "string" ? options : options.url;
          var loop = options.loop ? true : false;

          var playId = getNonce();

          TMM.APP.call("Audio.play", ["currsound" + playId, url, loop], callback, callback);
          return playId;
        },
        pause: function pause(playId, callback) {
          TMM.APP.call("Audio.pause", ["currsound" + playId], callback, callback);
        },
        resume: function resume(playId, callback) {
          TMM.APP.call("Audio.resume", ["currsound" + playId], callback, callback);
        },
        stop: function stop(playId, callback) {
          TMM.APP.call("Audio.stop", ["currsound" + playId], callback, callback);
        },
        /**
         * 寮€濮嬪綍闊�
         * 鑷姩寮€濮嬪綍闊�
         * @memberOf Tida
         * @name startRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.limit 褰曢煶鏃堕暱 鍙负绌�
         * @param {function} options.success 褰曢煶瀹屾垚鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         */
        startRecord: function startRecord(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};

          window.WindVane.call("WVAudioPlugin", "startRecord", params, function (res) {
            // success 褰曢煶鍋滄鍥炶皟
            if (endRecordSuccessCall) {
              endRecordSuccessCall(res);
            } else if (options.success) {
              options.success(res);
            }
          }, function (res) {
            // fail
            if (options && options.fail) {
              options.fail(res);
            }
          });
        },
        /**
         * 鍋滄褰曢煶
         * 涓诲姩鍋滄褰曢煶
         * @memberOf Tida
         * @name stopRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         */
        stopRecord: function stopRecord(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};

          window.WindVane.call("WVAudioPlugin", "stopRecord", params, function (res) {
            // success
            endRecordSuccessCall && endRecordSuccessCall(res);
          }, function (res) {
            // fail
            if (options && options.fail) {
              options.fail(res);
            }
          });
        },
        /**
         * 褰曢煶鍋滄鐩戝惉鎺ュ彛
         * @memberOf Tida
         * @name onEndRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {function} options.success 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        onEndRecord: function onEndRecord(options) {
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object" && options.success) {
            endRecordSuccessCall = options.success;
          }
        },
        /**
         * 鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name playLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.success 鎾斁瀹屾垚鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        playLocal: function playLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;

          if (localId) {

            window.WindVane.call("WVAudioPlugin", "playLocal", params, function (res) {
              // success 鎾斁瀹屾垚
              if (endLocalPlaySuccessCall) {
                endLocalPlaySuccessCall(res);
              } else if (options.success) {
                options.success(res);
              }
            }, function (res) {
              // fail
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 鏆傚仠鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name playLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        pauseLocal: function pauseLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;

          if (localId) {

            window.WindVane.call("WVAudioPlugin", "pauseLocal", params, function (res) {
              if (options && options.success) {
                options.success(res);
              }
            }, function (res) {
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 鎭㈠鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name resumeLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        resumeLocal: function resumeLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;

          if (localId) {

            window.WindVane.call("WVAudioPlugin", "resumeLocal", params, function (res) {
              if (options && options.success) {
                options.success(res);
              }
            }, function (res) {
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 鍋滄鎾斁鏈湴璇煶鎺ュ彛
         * @memberOf Tida
         * @name stopLocal
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        stopLocal: function stopLocal(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;

          if (localId) {
            window.WindVane.call("WVAudioPlugin", "stopLocal", params, function (res) {
              // success 鎾斁瀹屾垚
              //endLocalPlaySuccessCall && endLocalPlaySuccessCall(res)

            }, function (res) {
              // fail
              if (options && options.fail) {
                options.fail(res);
              }
            });
          }
        },
        /**
         * 褰曢煶鍋滄鐩戝惉鎺ュ彛
         * @memberOf Tida
         * @name onEndRecord
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {function} options.success 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        onLocalPlayEnd: function onLocalPlayEnd(options) {
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object" && options.success) {
            endLocalPlaySuccessCall = options.success;
          }
        },
        /**
         * 涓婁紶闊抽鎺ュ彛
         * @memberOf Tida
         * @name upload
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {object} options.params 鎺ュ彛鍏ュ弬 鎵╁睍鍙傛暟
         * @param {string} options.params.localId 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.success 鎴愬姛鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         * @param {function} options.fail 澶辫触鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         */
        upload: function upload(options) {
          var params = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" && _typeof(options.params) === "object" ? options.params : {};
          var localId = params.localId || LocalId;

          if (localId) {
            // confirm('start WVUploadPlugin.upload')
            window.WindVane.call("WVUploadPlugin", "upload", params, options.success, options.fail);
            // confirm('end WVUploadPlugin.upload')
          }
        }
      };

      var currModule = {
        audio: Object.assign(audio, _voice2.default)
      };

      exports.default = currModule;

      /***/ }),
    /* 35 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var widget = {
        /**
         * 閫氳繃toast鏂瑰紡鏄剧ず淇℃伅銆傚鎴风涓嶆敮鎸佺殑鐗堟湰浠tml瀹炵幇
         * @param {string} options 瑕佹樉绀虹殑鍐呭 涓嶅彲涓虹┖
         * @param {Function} callback
         */
        toast: function toast(options, callback) {
          var text = typeof options == "string" ? { "text": options } : options;
          text.duration = text.duration || 2000;
          // Android浼氳繑鍥炩€滶rror鈥�
          var params = {
            // Toast 瑕佹樉绀虹殑娑堟伅
            message: text.text,
            // Toast 鐨勬寔缁椂闂�
            duration: (text.duration || 2000) / 1000
          };
          window.WindVane.call('WVUIToast', 'toast', params, callback, callback);
        },
        /**
         * 鏄剧ず瀹㈡埛绔疷I鎻愪緵鐨勫姞杞界粍浠�
         * @param {string} text 瑕佹樉绀虹殑鍐呭 濡�"鍔犺浇涓�..."
         * @param {Function} callback
         */
        showLoading: function showLoading(text, callback) {
          text = text || "鍔犺浇涓�...";
          window.TMM && TMM.APP.call("Window.showProgress", [text], callback, callback);
        },
        hideLoading: function hideLoading(callback) {
          window.TMM && TMM.APP.call("Window.hideProgress", [], callback, callback);
        },
        showTitle: function showTitle(callback) {
          window.TMM && TMM.APP.call("Window.showTitle", [1], callback, callback);
        },
        hideTitle: function hideTitle(callback) {
          window.TMM && TMM.APP.call("Window.hideTitle", [], callback, callback);
        },
        setTitle: function setTitle(options, callback) {
          var title = typeof options == "string" ? options : options && options.text;
          window.TMM && TMM.APP.call("Window.setTitle", [title], callback, callback);
        },
        pushWindow: function pushWindow(options, callback) {

          var url = typeof options == "string" ? options : options && options.url;
          if (url) {
            if (window.lib && lib.env.os.isAndroid) {
              window.TMM && TMM.APP.call("Logic.triggerAction", ["link:url=" + url], callback, callback);
            } else {
              var params = {
                "url": url
              };
              window.WindVane.call('Base', 'openWindow', params, callback, callback);
            }
          } else {
            callback && callback({
              errorCode: 2,
              errorMessage: '鍙傛暟鏃犳晥'
            });
          }
        },
        popWindow: function popWindow(callback) {
          window.TMM && TMM.APP.call("Window.back", [], callback, callback);
        },
        // popTo: this.popWindow,
        /**
         *
         * @memberOf Tida
         * @namespace Tida.pageVisibility
         * @name pageVisibility
         */
        pageVisibility: {

          /**
           * 鐩戝惉椤甸潰鏄剧ず闅愯棌鍙樺寲
           *
           * @memberOf Tida.pageVisibility
           * @name watch
           * @function
           *
           * @param {Tida.pageVisibility~callback} callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
           *
           */
          /**
           * Tida.pageVisibility.watch 椤甸潰鍙樺寲鐨勫洖璋冨嚱鏁�
           * @callback Tida.pageVisibility~callback
           * @param {Object} result 鐘舵€佹暟鎹�
           * @param {string} result.errorCode 閿欒鐮�
           * @param {string} result.errorMessage 娑堟伅
           * @param {string} result.visible 0锛氫唬琛ㄩ殣钘� 1锛氫唬琛ㄦ樉绀�
           *
           * @example
           * Tida.pageVisibility.watch(function(result){
	         *     // do sth
	         *      if(result.visible){
	         *          // page active
	         *      }
	         * });
           *
           */
          watch: function watch(callback) {
            // 闃查噸澶嶇洃鍚�
            if (this["visibility"]) {
              return;
            }
            var _callback = function _callback(_result) {
              var result = {
                errorCode: _result.code || 0,
                errorMessage: "璋冪敤鎴愬姛",
                visible: _result.data && _result.data.visible
              };
              callback && callback(result);
            };
            window.TMM && TMM.APP.call("PageVisibility.watchVisibilitychange", ["visibility"], _callback, _callback);
          },

          /**
           * 鍙栨秷鐩戝惉椤甸潰闅愯棌鍙樺寲
           *
           * @memberOf Tida.pageVisibility
           * @name clearWatch
           * @function
           *
           *  @param {Tida~commonCallback} callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
           *
           */
          clearWatch: function clearWatch(callback) {
            TMM.APP.call("PageVisibility.clearWatch", ["visibility"], callback, callback);
          }
        }
      };

      exports.default = widget;

      /***/ }),
    /* 36 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var share = function share(options, callback) {

        var url = options.url || '';
        var text = options.content || options.text || '';
        var title = options.title || '';
        var image = options.image || '';
        var wxImage = options.wxImage || '';

        var urlParam = "from=share&appkey=" + Tida.interactParams.appkey;
        if (url.indexOf("?") < 0) {
          url += "?" + urlParam;
        } else {
          url += "&" + urlParam;
        }

        options["all-link"] = url;
        options["share-title"] = title;
        options["share-intro"] = text;
        if (options.image) {
          options['pc-image'] = options['mobile-image'] = image;
        }

        options["share-image"] = image;

        var d = document.domain;
        d = d.substr(0, d.indexOf("."));
        // if(Tida.config && Tida.config[Tida.interactParams.appkey]){
        //     d = Tida.config[Tida.interactParams.appkey].businessId;
        // }
        options["share-bizid"] = options.bizId || d;
        options["share-scene"] = options.bizName || "tida";

        options.shareType = -1;
        // //tbdocs.alibaba-inc.com/pages/viewpage.action?pageId=250416030
        // TMM.APP.call('Share.newShare', [options], callback, callback);
        WindVane.call('TMShare', 'doShare', options, callback, callback);
        // TBWopcPhotoXHandler.takePhoto

        Tida.newReport('/uaward.8.2', '', 'api=Tida.share', 'H46747614');
      };

      var currModule = { share: share };

      exports.default = currModule;

      /***/ }),
    /* 37 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var nonce = 0;

      function getNonce() {
        nonce++;
        return nonce;
      }

      var sensor = {
        blow: {
          /**
           * 鏆備笉鏀寔option鍙傛暟
           */
          watch: function watch(callback) {
            if (this.watchFun) {
              this.clearWatch();
            }
            this.watchFun = function (e) {
              callback && callback(e.param);
            };
            document.addEventListener('motion.blow', this.watchFun, false);

            // TMM.APP.call("Blow.watchBlow", [], callback, callback);
            WindVane.call('WVMotion', 'listenBlow', {}, function (e) {
              console.log('watchBlow', e);
            }, function (e) {
              console.log('watchBlow fail', e);
            });

            return getNonce();
          },
          clearWatch: function clearWatch(watchId, callback) {
            // TMM.APP.call("Blow.clearWatch", [], callback, callback);
            WindVane.call('WVMotion', 'stopListenBlow', {}, callback, callback);
            document.removeEventListener('motion.blow', this.watchFun, false);
            this.watchFun = null;
          }
        },
        orientation: {
          /**
           * 鐩戝惉鎵嬫満鐨勬柟鍚戙€�
           * @param {number} [opt.duration=500] 鐩戝惉棰戠巼
           * @param {Function} callback
           * @return {number} watch id
           */
          watch: function watch(options, callback) {
            var watchId = getNonce();
            if (typeof options == "function") {
              callback = options;
              options = 100;
            }
            var duration = typeof options == "number" ? options : options ? options.duration : 100;
            TMM.APP.call("Orientation.watchOrientation", ["orientation-" + watchId, duration], function (result) {
              try {
                var data = result.data;
                if (data) {
                  // 4.3浠ヤ笅alpha鍊煎拰gamma鍊间簰鎹�
                  if (TMM.UA.os.iphone && parseFloat(TMM.UA.os.tmallApp) < 4.3) {
                    var alpha = data.alpha;
                    data.alpha = data.gamma;
                    data.gamma = alpha;
                  } else if (TMM.UA.os.android && typeof data["beta "] != "undefined") {
                    data.beta = data["beta "];
                    delete data["beta "];
                  }
                  // ios alpha鍊煎嚭鐜拌礋鏁扮殑鎯呭喌 android缁欑殑鍊艰酱鏂瑰悜鐩稿弽 杩欓噷鍋氱粺涓€澶勭悊
                  if (TMM.UA.os.iphone) {
                    data.alpha = data.alpha > 0 ? data.alpha : 360 + data.alpha;
                  }

                  data.errorCode = 0;
                } else {
                  data = result;
                }

                callback && callback(data);
              } catch (e) {
                callback && callback({
                  errorCode: -1,
                  errorMessage: "鍙戠敓鏈煡閿欒"
                });
              }
            }, callback);
            return watchId;
          },

          /**
           * 鍏抽棴鐩戝惉鎵嬫満鐨勬柟鍚戙€�
           * @param {number} watchId 璋冪敤 orientation.watch 鏃惰繑鍥炵殑id
           * @param {Function} callback
           */
          clearWatch: function clearWatch(watchId, callback) {
            TMM.APP.call("Orientation.clearWatch", ["orientation-" + watchId], callback, callback);
          }
        },

        motion: {
          /**
           * 鐩戝惉鎵嬫満鐨勮繍鍔ㄦ暟鎹紝鍖呮嫭閲嶅姏鍔犻€熷害绛夈€�
           * @param {Function} options 澶╃尗瀹㈡埛绔笉鏀寔鍙傛暟
           * @param {Function} callback
           * @return {Function} watchId
           */
          watch: function watch(options, callback) {
            if (typeof options == "function") {
              callback = options;
            }
            var watchId = getNonce();
            TMM.APP.call("Motion.watchAcceleration", ["motion-" + watchId], function (result) {
              var data = {
                errorCode: result.ret && result.ret.retCod || result.code || 0,
                errorMessage: result.ret && result.ret.retMsg || ""
              };
              data.accelerationIncludingGravity = data.acceleration = result.data || {};
              callback && callback(data);
            }, callback);
            return watchId;
          },

          /**
           * 鍏抽棴鐩戝惉鎵嬫満鐨勮繍鍔ㄦ暟鎹€�
           * @param {Function} callback
           * @param {number} watchId 鐩戝惉鏃惰繑鍥炵殑id
           */
          clearWatch: function clearWatch(watchId, callback) {
            TMM.APP.call("Motion.clearWatch", ["motion-" + watchId], callback, callback);
          }
        },

        shake: {
          /**
           * 鐩戝惉鎵嬫満鎽囧姩銆�
           * @param {Object} opt 鐩戝惉鐨勫弬鏁�
           * @param {number} [opt.sensitivity=20] 鎸姩骞呭害锛屽姞閫熷害鍙樺寲瓒呰繃杩欎釜鍊煎悗瑙﹀彂shake
           * @param {number} [opt.frequency=150] 閲囨牱闂撮殧(姣)锛屾寚姣忛殧澶氶暱鏃堕棿瀵瑰姞閫熷害杩涜涓€娆￠噰鏍凤紝
           *     鐒跺悗瀵规瘮鍓嶅悗鍙樺寲锛屽垽鏂槸鍚﹁Е鍙憇hake
           * @param {number} [opt.callbackDelay=3000] 瑙﹀彂銆庢憞涓€鎽囥€忓悗鐨勭瓑寰呮椂闂�(姣)锛岄槻姝㈤绻佽皟鐢�
           * @param {Function} callback
           */
          watch: function watch(options, callback) {
            var watchId = getNonce();
            var options = options || {};
            var level = typeof options == "number" ? options : options.sensitivity || 1;
            level = level > 5 ? 5 : level;
            var callbackDelay = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object" ? options.callbackDelay || 3000 : 3000;
            var frequency = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object" ? options.frequency || 150 : 150;

            this["_watchTimer" + watchId] = null;

            var startTime = new Date().getTime();

            var self = this;

            this["_watch" + watchId] = function () {
              if (self["_watch" + watchId]) {
                TMM.APP.call('Application.addShakeListener', [level], function (data) {
                  var endTime = new Date().getTime();
                  if (endTime - startTime >= frequency) {
                    // shake鍥炶皟鍚庣户缁洃鍚� 闃叉澶繃鐏垫晱 璁剧疆瓒呮椂闂�
                    self["_watchTimer" + watchId] = setTimeout(self["_watch" + watchId], callbackDelay);
                    callback && callback(data);

                    startTime = endTime;
                  }
                });
              }
            };

            this["_watch" + watchId]();

            return watchId;
          },

          /**
           * 鍏抽棴鐩戝惉鎵嬫満鎽囧姩銆�
           * tmall瀹㈡埛绔笉鐢╳atchId
           * @param {number} watchId 鐩戝惉ID锛岃皟鐢� shake.watch 鏃跺€欒繑鍥炵殑ID
           * @param {Function} callback
           */
          clearWatch: function clearWatch(watchId, callback) {
            TMM.APP.call("Application.removeShakeListener", [], callback, callback);

            clearTimeout(this["_watch" + watchId]);
            delete this["_watchTimer" + watchId];
            delete this["_watch" + watchId];
          }
        },
        vibration: {
          /**
           * 闇囧姩鎵嬫満銆�
           * @param {number|Object} opt 鎸姩鍙傛暟
           * @param {number} opt.duration 鎸姩鏃堕暱锛屽崟浣嶄负姣
           * @param {Function} callback
           */
          vibrate: function vibrate(options, callback) {
            options = typeof options == "number" ? {
              duration: options
            } : options;
            TMM.APP.call('Notification.vibrate', [options.duration || 500], callback, callback);
          }
        }
      };

      exports.default = sensor;

      /***/ }),
    /* 38 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var social = {
        /**
         * 鐐硅禐 鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name praise
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.pubAccountId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.feedCover
         * @param {string} options.feedTitle
         * @param {string} options.feedUrl
         * @param {number} options.targetId 蹇呴€�
         * @param {number} options.targetType 蹇呴€�
         * @param {number} options.subType 蹇呴€�
         *
         * @param {Tida~praiseCallback} _callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
         *
         */
        /**
         * Tida.praise 鐐硅禐鎺ュ彛鍥炶皟
         * @callback Tida~praiseCallback
         * @param {Object} result 缁撴灉鏁版嵁
         * @param {number} result.praiseCount 宸茬粡鑾峰緱鐨勭偣璧炴暟
         * @param {boolean} result.praiseStatus 褰撳墠鐢ㄦ埛鏄惁宸茶禐
         * @param {number} result.errorCode 涓�0鏃舵帴鍙ｈ皟鐢ㄦ垚鍔�
         */
        praise: function praise(options, _callback) {
          var praiseCount = 0;
          var praiseStatus = false;
          this._socialPlugin(options, function (_result) {
            var result = _result.data || {};
            if (result.favourCount) {
              praiseCount = parseInt(result.favourCount);
              praiseStatus = result.favourStatus || praiseStatus;
            } else if (_result.api == "mtop.cybertron.interact.favour.add") {
              praiseCount++;
              praiseStatus = true;
            } else if (_result.api == "mtop.cybertron.interact.favour.remove") {
              praiseCount--;
              praiseStatus = false;
            }
            if (praiseStatus === "true") {
              praiseStatus = true;
            } else if (praiseStatus === "false") {
              praiseStatus = false;
            }
            result.praiseCount = praiseCount;
            result.praiseStatus = praiseStatus;
            result.errorCode = _result.errorCode || 0;
            _callback && _callback(result);
          }, "praise");
        },
        /**
         * 鍏虫敞銆佹敹钘� 鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name follow
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.pubAccountId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.feedCover
         * @param {string} options.feedTitle
         * @param {string} options.feedUrl
         * @param {number} options.targetId 蹇呴€�
         * @param {number} options.targetType 蹇呴€�
         * @param {number} options.subType 蹇呴€�
         *
         * @param {Tida~followCallback} _callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
         *
         */
        /**
         * Tida.follow 鍏虫敞鎺ュ彛鍥炶皟
         * @callback Tida~followCallback
         * @param {Object} result 缁撴灉鏁版嵁
         * @param {boolean} result.praiseStatu 褰撳墠鐢ㄦ埛鏄惁宸插叧娉�
         * @param {number} result.errorCode 涓�0鏃舵帴鍙ｈ皟鐢ㄦ垚鍔�
         */
        follow: function follow(options, _callback) {
          var followStatus = false;
          this._socialPlugin(options, function (_result) {
            var result = _result.data || {};
            if (typeof result.follow != "undefined") {
              followStatus = result.follow || followStatus;
            } else if (_result.api == "mtop.cybertron.follow.add.isv") {
              followStatus = true;
            } else if (_result.api == "mtop.cybertron.follow.remove") {
              followStatus = false;
            }
            if (followStatus === "true") {
              followStatus = true;
            } else if (followStatus === "false") {
              followStatus = false;
            }
            result.followStatus = followStatus;
            result.errorCode = _result.errorCode || 0;
            _callback && _callback(result);
          }, "follow");
        },
        follow2: function follow2(options, callback) {

          var mtopParams = {
            eventName: 'shopFavorAsyc',
            businessParam: { appKey: Tida.interactParams.appkey, sellerId: options.sellerId, isAdd: "1" },
            mtopApi: "mtop.interact.shop.favor",
            //appkey: Tida.interactParams.appkey
            //businessParam: { interactId: "4a448087-89fb-475e-ac3d-fd6a0a3f03a3" },
            //mtopApi: "mtop.interact.isvlottery.idraw",
            appkey: Tida.interactParams.appkey
          };
          //alert(JSON.stringify(mtopParams));
          Tida.mtopAsyc(mtopParams, callback);
        },
        /**
         * 璇勮 鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name comment
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.pubAccountId 琚禐鐨勮揪浜烘垨搴楅摵ID
         * @param {string} options.feedCover
         * @param {string} options.feedTitle
         * @param {string} options.feedUrl
         * @param {number} options.targetId 蹇呴€�
         * @param {number} options.targetType 蹇呴€�
         * @param {number} options.subType 蹇呴€�
         *
         *
         */
        comment: function comment(options, _callback) {
          // var url = location.protocol+"//www.tmall.com/go/chn/common/tida-comment.php?appkey="+Tida.interactParams.appkey+"&param="+encodeURIComponent(JSON.stringify(options));
          // window.TMM && TMM.APP.call("Logic.triggerAction", ["link:url=" + url]);
          // this._socialPlugin(options, function(_result){
          //     var result = _result.data || {};
          //     result.errorCode = _result.errorCode || 0;
          //     _callback && _callback(result);
          // }, "comment");
          _callback && _callback({
            errorCode: 3 // 澶╃尗涓嶆敮鎸佸井娣樼被鐨�
          });
        },

        _socialPlugin: function _socialPlugin(options, _callback, action) {

          options.targetType = "100";
          options.subType = "" + Tida.interactParams.appkey;

          if (lib.env.os.isIOS) {
            var o = options;
            var p = {
              apiName: "Tida.socialPlugin",
              methodName: "social",
              methodParam: {
                actions: action,
                pubAccountId: o.pubAccountId,
                feedCover: o.feedCover,
                feedTitle: o.feedTitle,
                feedUrl: o.feedUrl,
                targetId: o.targetId,
                targetType: o.targetType,
                subType: o.subType,
                appkey: Tida.interactParams.appkey
              },
              appKey: Tida.interactParams.appkey
            };

            var self = this;

            document.removeEventListener(action, self["socialPlugin." + action]);

            self["socialPlugin." + action] = function (e) {
              var result = e.param || e;
              result.errorCode = 0;
              _callback && _callback(result);
            };
            if (lib.env.aliapp && lib.env.aliapp.version.gt("5.4.49")) {
              window.WindVane.call('MisLightSocialPlugin', 'excute', p.methodParam, function (e) {
                document.addEventListener(action, self["socialPlugin." + action]);
              }, function (e) {
                _callback && _callback(e);
              });
            } else {
              window.WindVane.call('wopc', 'invoke', p, function (e) {
                document.addEventListener(action, self["socialPlugin." + action]);
              }, function (e) {
                _callback && _callback(e);
              });
            }
          } else {
            // 澶╃尗android涓嬩粛鐒惰蛋鍒皌mm閭ｅ閫昏緫鍘讳簡
            window.TMM && TMM.APP.call("socialPlugin." + action, [JSON.stringify(options)], _callback, _callback);
          }
        },
        itemFavor: function itemFavor(options, callback) {

          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === 'object') {
            options.itemId = '' + options.itemId;
          } else {
            options = {
              "itemId": '' + options
            };
          }
          window.WindVane.call("favoritesItem", "add", options, callback, callback);
        },
        shopFavor: function shopFavor(options, callback) {

          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === 'object') {
            options.shopId = '' + options.shopId;
          } else {
            options = {
              "shopId": '' + options
            };
          }
          window.WindVane.call("favoritesShop", "add", options, function (res) {
            res.isCollect = '' + res.isCollect === 'true';
            res.success = res.isCollect;
            callback && callback(res);
          }, callback);
        },
        social: function social(options, callback) {
          var action = options.action;
          var sellerId = options.sellerId;
          var targetId = options.targetId;
          var shopId = options.shopId;
          var itemId = options.itemId;

          if (shopId) {
            Tida.shopFavor(options, callback);
            return;
          } else if (itemId) {
            Tida.itemFavor(options, callback);
            return;
          }

          options.pubAccountId = options.pubAccountId || options.sellerId || '';
          var action = options.action || '';
          if (action.indexOf('follow') > -1) {
            this.follow(options, callback);
          } else if (action.indexOf('follow') > -1) {
            this.praise(options, callback);
          } else {
            callback && callback({
              errorCode: 3,
              errorMsg: "not support"
            });
          }
        }

      };

      exports.default = social;

      /***/ }),
    /* 39 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var buy = {
        detail: function detail(options, callback) {
          var itemId = options.itemId || options;
          var url = location.protocol + "//detail.m.tmall.com/item.htm?id=" + itemId;
          // window.TMM && TMM.APP.call("Logic.triggerAction", ["link:url=" + url], callback, callback);
          Tida.pushWindow(url, callback);
        },
        itemCombo: function itemCombo(options, callback) {
          var url = location.protocol + "//h5.m.taobao.com/detailplugin/mix.html?itemId=" + options.itemId + "&comboId=" + options.comboId;
          if (options.type) {
            url += "&type=" + options.type;
          }
          Tida.pushWindow(url, callback);
        },
        cart: function cart(options, callback) {
          // window.WindVane.call("MisDetail", "cart", options, callback, callback);
          window.WindVane.call("Detail", "Sku", [options.itemId, true], callback, callback);
        }
      };

      exports.default = buy;

      /***/ }),
    /* 40 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var FaceReco = {
        imgDetect: function imgDetect(options, cb) {
          window.WindVane.call('FacePlugin', 'imgDetect', options, function (e) {
            cb && cb(e);
          }, function (e) {
            cb && cb(e);
          });
        },

        startCameraDetect: function startCameraDetect(options, cb) {
          window.WindVane.call('FacePlugin', 'startCameraDetect', options, function (e) {
            cb && cb(e);
          }, function (e) {
            cb && cb(e);
          });
        },

        stopCameraDetect: function stopCameraDetect(options, cb) {
          window.WindVane.call('FacePlugin', 'stopCameraDetect', options, function (e) {
            cb && cb(e);
          }, function (e) {
            cb && cb(e);
          });
        },

        takeCameraFrame: function takeCameraFrame(cb) {
          window.WindVane.call('FacePlugin', 'takeCameraFrame', {}, function (e) {
            cb && cb(e);
          }, function (e) {
            cb && cb(e);
          });
        }
      };

      var currModule = { FaceReco: FaceReco };

      exports.default = currModule;

      /***/ }),
    /* 41 */
    /***/ (function(module, exports) {

      'use strict';

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      ;(function (window, Tida) {
        function getParam(key, url) {
          var paraStr = key;
          url = url || location.href;
          if (url.indexOf(paraStr + '=') == -1) {
            return '';
          }
          url = url.split("#")[0];
          var queryString = url.indexOf("?") > -1 ? url.substring(url.indexOf("?") + 1) : url;
          var parameters = queryString.split("&");
          var pos, paraName, paraValue;
          for (var i = 0; i < parameters.length; i++) {
            pos = parameters[i].indexOf('=');
            if (pos == -1) {
              continue;
            }
            paraName = parameters[i].substring(0, pos);
            paraValue = parameters[i].substring(pos + 1);
            if (paraName == paraStr) {
              return decodeURIComponent(paraValue.replace(/\+/g, " "));
            }
          }
          return '';
        };
        if (sessionStorage && sessionStorage.setItem) {
          if (getParam('tradeToken')) sessionStorage.setItem('tb_tradeToken', getParam('tradeToken'));
          if (getParam('from')) sessionStorage.setItem('tb_custom_from', getParam('from'));
          if (getParam('tb_order_host')) sessionStorage.setItem('tb_order_host', getParam('tb_order_host'));
          if (getParam('tb_encoding')) sessionStorage.setItem('tb_encoding', getParam('tb_encoding'));
          if (getParam('itemId')) sessionStorage.setItem('tb_itemId', getParam('itemId'));
          if (getParam('sellerNick')) sessionStorage.setItem('tb_sellerNick', getParam('sellerNick'));
        }

        var customization = {
          /**
           * 鎻愪氦鐢熸垚璁㈠崟,H5 鍔ㄦ€乮frame鎻愪氦
           * tradeToken 涓烘湇鍔＄杩斿洖鐨則oken,鏈嶅姟绔笂闈㈠瓨瀵瑰簲鐨勬暟鎹�,鑰冭檻鍒癐SV url 璺宠浆锛屽湪ISV棣栭〉灏� tradeToken 鍩嬪湪sessionStorage銆�
           * tb_encoding锛歠orm鐨刢harset涔熺敱鏈嶅姟绔繑鍥炴潵锛屽鏋滆〃鍗曠殑charset鍜屾湇鍔＄涓嶄竴鑷达紝涓枃浼氫贡鐮�
           * tb_order_host锛� 涓轰笅鍗曠殑 host. 濡傛灉鍦ㄩ鍙戠殑璇濓紝鏈嶅姟绔細杩斿洖 buy.wapa.tmall.com锛屾柟渚挎祴璇�
           */
          buildOrder: function buildOrder(data, callback) {
            if (!data) {
              alert('娌℃湁涓嬪崟鏁版嵁');
              return;
            }

            window.goldlog && window.goldlog.record && window.goldlog.record('/openwx.8.1', '', 'shopid=121&sellernick=' + sessionStorage.getItem('tb_sellerNick') + '&itemid=' + sessionStorage.getItem('tb_itemId') + '&operation=customization_submit', 'H46747592');

            data.tradeToken = sessionStorage.getItem('tb_tradeToken');
            var host = sessionStorage.getItem('tb_order_host');
            if (!host) {
              host = '//buy.m.tmall.com';
            }

            var $form = document.createElement("form");
            $form.acceptCharset = sessionStorage.getItem('tb_encoding') || 'gbk';
            document.body.appendChild($form);
            var customization = this._createInput('customization', data);
            var buyNow = this._createInput('buyNow', true);
            var quantity = this._createInput('quantity', 1);
            [customization, buyNow, quantity].forEach(function (input) {
              $form.appendChild(input);
            });

            $form.action = 'https:' + host + '/order/confirmOrderWap.htm';
            $form.method = 'POST';
            $form.submit();
          },

          /**
           * 鑾峰彇浜ゆ槗鍙傛暟
           * @return {object} 杩斿洖浜ゆ槗鍙傛暟
           */
          getTradeParams: function getTradeParams() {
            var initParams = {};
            var search = window.location.search;
            if (!search) {
              return {};
            }
            var query = search.substring(1);
            var vars = query.split('&');

            for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split('=');
              initParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return initParams;
          },

          _createInput: function _createInput(name, value) {
            var $input = document.createElement('input');
            $input.setAttribute('type', 'hidden');
            $input.setAttribute('name', name);
            $input.name = name;
            var val = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? JSON.stringify(value) : value;
            $input.setAttribute('value', val);
            return $input;
          }

        };

        // Tida.customization = customization;
        // let currModule = {customization: customization};
        // export default currModule;
        module.exports = { customization: customization };
      })(window, window.Tida || (window.Tida = {}));

      /***/ }),
    /* 42 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var config = {};

      exports.default = {
        config: config
      };

      /***/ }),
    /* 43 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _drawTpl = __webpack_require__(44);

      var _drawTpl2 = _interopRequireDefault(_drawTpl);

      var _dateFormat = __webpack_require__(45);

      var _dateFormat2 = _interopRequireDefault(_dateFormat);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var drawCounter = 0;
      var doc = document;
      var sclick = "click"; //("ontouchend" in window)?"touchend":"click";
      var $q = function $q(_s) {
        return document.querySelector(_s);
      };

      var draw = {
        drawCounter: 0,
        iServer: function iServer(option, callback, timeout) {
          // 2015鍙�11浠呮娊涓€娆″
          if (!Tida.drawCounter) {
            Tida.drawCounter = 1;
          } else {
            Tida.drawCounter++;
            // return callback && callback({});
          }

          var interactId = option.interactId || Tida.interactParams.interactId || Tida.getParam('interactId');
          var shopId = option.shopId || Tida.interactParams.shopId || Tida.getParam("shopId");

          var asac = option.asac || Tida.getParam('asac');
          if (!asac && Tida.config && Tida.config["" + Tida.interactParams.appkey]) {
            asac = Tida.config["" + Tida.interactParams.appkey].asac;
          }
          var chn = Tida.getParam('chn') || '';
          var campaignUrl = Tida.getParam('campaignUrl');
          if (campaignUrl) {
            chn = 'cjy';
          }
          var _from = Tida.getParam('from');
          if (_from === 'ppcjy') {
            chn = _from;
          }

          var apiName = 'mtop.interact.benefit.idraw';
          var campaignId = option.campaignId || Tida.getParam('campaignId');

          var appkey = Tida.interactParams.appkey;
          // TODO 绉戦姘廰piName涓簃top.interact.isvlottery.mdraw
          if (appkey == 23615789) {
            apiName = "mtop.interact.isvlottery.mdraw";
          }
          var businessParam = {
            appkey: appkey,
            asac: asac || '1A17316BVS800JC5HES297',
            chn: chn
          };
          if (shopId) {
            businessParam.shopId = shopId;
          }
          if (interactId) {
            businessParam.interactId = interactId;
          }
          if (campaignId) {
            businessParam.campaignId = campaignId;
          }

          Tida.mtopAsyc({
            "mtopApi": apiName, //"mtop.interact.isvlottery.mdraw",
            "businessParam": businessParam,
            eventName: "iServer",
            appkey: Tida.interactParams.appkey
          }, function (_json) {

            callback && callback(_json || {});
          }, timeout || 5000);
          Tida.newReport('/uaward.8.2', '', 'api=Tida.iServer', 'H46747614');
        },

        /**
         * Tida.draw 鎶藉鎺ュ彛鍥炶皟
         * @callback Tida~drawCallback
         * @param {object} result 缁撴灉鏁版嵁瀵硅薄
         * @param {string} result.error 閿欒鐮�
         * @param {boolean} result.succ 鎺ュ彛鏄惁璋冪敤鎴愬姛
         * @param {object} result.data 濂栧搧鏁版嵁瀵硅薄
         * @param {boolean} result.data.is_win 鏄惁涓 true锛氫腑濂� false:鏈腑濂�
         * @param {string} result.data.award_type 濂栧搧鏁版嵁瀵硅薄 濂栧搧绫诲瀷 interactCoupon:搴楅摵浼樻儬鍒� interactItemCoupon: 鍟嗗搧浼樻儬鍒� alipayRedEnvelope:鏀粯瀹濈孩鍖� finalPrice:瀹氬悜浼樻儬
         * @param {string} result.data.award_name 濂栧搧鍚嶇О
         * @param {object} result.data.extra 濂栧搧鎵╁睍淇℃伅
         * @param {string} result.data.winningTime 涓鏃堕棿
         * @param {string} result.data.description 璇存槑淇℃伅
         * @param {string} result.data.reason 鏈腑濂栧師鍥�
         * @param {string} result.data.nick 鏈腑濂栨椂杩斿洖鐢ㄦ埛鏄电О,濡�"t***e02"
         *
         */
        draw: function draw(option, callback, timeout) {
          var drawParam = option;
          if (typeof option == 'function') {
            callback = option;
            drawParam = {};
          }

          return Tida.iServer(drawParam, callback, timeout);
        },
        /**
         * 灞曠ず娓告垙鐩稿叧濂栧搧
         *
         * @memberOf Tida
         * @name showGameAward
         * @function
         *
         * @example
         * Tida.showGameAward();
         */
        showGameAward: function showGameAward() {

          // 2015鍙�11涓嶈娓告垙鏂板紑webview浜�
          var interactId = Tida.interactParams.interactId || "";
          var shopId = Tida.getParam("shopId");
          var appkey = Tida.interactParams.appkey;
          var _from = Tida.getParam("from");
          if (Tida.interactParams.isKHC) {
            _from = 'khc2016';
          }
          var url = location.protocol + "//pages.tmall.com/wow/lafite/act/tida-awards?interactId=" + interactId + "&shopId=" + shopId + '&from=' + _from + "&spm=a1z51." + appkey;
          if (Tida.isKHCShop) {
            url += "&khc=1";
          }
          // location.href = url;
          Tida.pushWindow(url);
          Tida.newReport('/uaward.8.2', '', 'api=Tida.showGameAward', 'H46747614');
        },
        /**
         * 灞曠ず瑙勫垯
         *
         * @memberOf Tida
         * @name showRule
         * @function
         *
         * @param {string} content 瑙勫垯html鍐呭
         *
         * @example
         * Tida.showRule('娓告垙瑙勫垯璇存槑<br/>');
         */
        showRule: function showRule(_html, _default) {
          var domain = document.domain;
          Tida.pushWindow('https://pages.tmall.com/wow/lafite/act/rule-' + domain.split('.')[0]);

          Tida.newReport('/uaward.8.2', '', 'api=Tida.showRule', 'H46747614');
          return this;
        },

        /**
         * 灞曠ず涓淇℃伅
         *
         * @memberOf Tida
         * @name showDrawResult
         * @function
         *
         * @param {Object} opt 浼犲叆鍙傛暟
         * @param {Object} opt.score 娓告垙寰楀垎
         * @param {number/string} opt.score.currPoint 褰撳墠娓告垙鎴愮哗銆傚甫涓婂崟浣嶏紝榛樿涓�"鍒�"銆�
         * @param {boolean} opt.score.isBest 鏄惁鍘嗗彶鏈€濂芥垚缁�(true:鏄� false:鍚�) 鎻愮ず: 璋冪敤姝ゆ帴鍙ｅ墠鍏堣皟鐢╭ueryScore鑾峰緱鍘嗗彶鏁版嵁锛岃绠楀ソisBest鍚庡啀杩涜saveScore
         *
         * @param {Array.<Object>} opt.awards 鎶藉缁撴灉鏁版嵁
         *
         * @param {Object} opt.shareData
         * @param {string} opt.shareData.image 鍥剧墖鍦板潃,瀹㈡埛绔彲鑳介渶瑕佹牴鎹畊rl涓嬭浇鍥剧墖鍐嶅垎浜�
         *
         * @param {Tida~showDrawResultCallback} callback 璋冪敤鍚庣殑鍥炶皟鍑芥暟
         *
         * @example
         * Tida.showDrawResult({
	     *     score: {
	     *         currPoint: 1234, // 鑻ラ渶瑕佷紶鍗曚綅锛�"1234绉�"
	     *         isBest: false
	     *     },
	     *     shareData: {
	     *         image: "//img.alicdn.com/tps/i2/T1gdi3Xb8pXXXXXXXX-230-35.png"
	     *     },
	     *     awards: drawResultList
	     * },function(){});
         */
        /**
         * Tida.showDrawResult鐨勫洖璋�
         *
         * @callback Tida~showDrawResultCallback
         * @param {object} result
         * @param {string} result.actionType 浜嬩欢绫诲瀷, 鐩墠鏈�3涓€笺€俢lose锛氬彸涓婅鍏抽棴鎸夐挳 share:鐐€€/鍒嗕韩鐨勫洖璋� replay:鍐嶇帺涓€娆�
         *
         */

        showDrawResult: function showDrawResult(opt, callback) {

          var noDraw = Tida.drawCounter === 0;
          // 鏄剧ず鍚庡皢涓娊濂栨鏁扮疆涓�0
          Tida.drawCounter = 0;

          var options = opt || {};
          if (options.score) {
            var currPoint = options.score.currPoint;
            if (typeof currPoint == "number") {
              options.score.unit = "鍒�";
            } else if (currPoint) {
              var temp = currPoint.match(/(\d+)(.*)/i);
              if (temp && temp.length == 3) {
                options.score.currPoint = temp[1];
                options.score.unit = temp[2];
              }
            }
            options.score.isBest = 0;
          } else {
            options.score = {};
          }

          function isArrayFn(value) {
            if (typeof Array.isArray === "function") {
              return Array.isArray(value);
            } else {
              return Object.prototype.toString.call(value) === "[object Array]";
            }
          }

          var awards = options.awards || [];

          var award = null;
          if (isArrayFn(awards)) {
            award = awards[0];
          } else {
            award = awards;
          }

          var awardType = 'nowin';
          var awardTpl = '';
          var resultTip = '';
          var isJYD = 0; // 鏄惁閲戦摱宀�
          if (award && award.data && '' + award.data.isWin === 'true') {
            // 涓浜�
            var awardBean = award.data;
            awardType = awardBean.awardType;
            var extra = awardBean.extra;
            switch (awardType) {
              case "interactItemCoupon": // 鍟嗗搧浼樻儬鍒�
              case "interactCoupon":
                // 搴楅摵浼樻儬鍒�
                var startDate = "";
                var endDate = "";
                var attribute = JSON.parse(extra.attribute);
                startDate = attribute.startDate.split(" ")[0];
                startDate = startDate.split("-").join(".");
                endDate = attribute.endDate.split(" ")[0];
                var endArr = endDate.split("-");
                endDate = endArr[0] + "." + endArr[1] + "." + endArr[2];
                extra.shopName = attribute.shopName || "搴楅摵浼樻儬鍒�";
                extra.startDate = startDate;
                extra.endDate = endDate;
                awardTpl = _drawTpl2.default.interactCoupon(extra, awardType);
                resultTip = '\u606D\u559C\u83B7\u5F97<span>' + extra.value + '\u5143</span>\u4F18\u60E0\u5238';
                break;
              case "mouRedEnvelope":
              case "mouCommonFpRedEnvelope":
              case "fpRedEnvelope":
              case "alipayRedEnvelope":
                extra.value = extra.value || extra.denomination || extra.amount;
                awardTpl = _drawTpl2.default.alipayRedEnvelope(extra);
                resultTip = '\u606D\u559C\u83B7\u5F97<span>' + extra.value + '\u5143</span>\u7EA2\u5305';
                break;
              case 'sharedRedEnvelope':
                awardTpl = _drawTpl2.default.sharedRedEnvelope(extra);
                resultTip = '\u606D\u559C\u83B7\u5F97<span>' + extra.num + '\u4E2A</span>\u672A\u62C6\u7EA2\u5305';
                break;
              case 'tmallCoupon':
              case 'activityCoupon':
                awardTpl = _drawTpl2.default.tmallCoupon(extra);
                resultTip = '\u606D\u559C\u83B7\u5F97<span>' + extra.amount + '\u5143</span>618\u8D2D\u7269\u5238';
                break;
              case 'finalPrice':
                extra.itemName = awardBean.awardName;
                // 1灏忔椂鍐呮湁鏁�
                var winningTime = new Date(awardBean.winningTime.replace(/\-/g, '/')).getTime();
                var validDate = new Date(winningTime + 2 * 60 * 60 * 1000);
                extra.validDate = validDate.format('yyyy.MM.dd hh:mm');
                awardTpl = _drawTpl2.default.finalPrice(extra);
                resultTip = '\u606D\u559C\u83B7\u5F97\u8BE5\u5546\u54C1\u7684\u8D85\u7EA7\u72C2\u6B22\u4EF7\u8D2D\u4E70\u6743<div class="finalprice-tip">1\u5C0F\u65F6\u5185\u8D2D\u4E70\u6709\u6548</div>';
                break;
            }
            isJYD = extra.jygtag2016;
          } else {
            // 鏈腑濂�
            awardTpl = _drawTpl2.default.nowin();
          }

          var html = _drawTpl2.default.drawResult({
            awardTpl: awardTpl,
            award: award,
            isJYD: isJYD,
            noDraw: noDraw,
            score: options.score,
            awardType: awardType,
            resultTip: resultTip,
            nowinTips: options.nowinTips,
            winTips: options.winTips
          });

          var shareText = '锛冪悊鎯崇敓娲荤媯娆㈣妭锛冧綘鎯宠绾㈠寘锛熷敖鍦ㄧ悊鎯崇敓娲荤媯娆㈣妭锛屽揩鎴�';
          var shareUrl = 'http://pages.tmall.com/wow/lafite/act/khc2016?fromshare=1'; //'http://pages.tmall.com/wow/lafite/act/khc?fromshare=1' //  http://pages.tmall.com/wow/lafite/act/khc2016?fromshare=1
          var shareImage = 'http://img.alicdn.com/tps/i2/TB1AcawKXXXXXbPXFXXD7km2pXX-750-750.jpg';
          var shopId = Tida.interactParams.shopId;

          if (shopId && !Tida.interactParams.isKHC) {
            shareText = '锛冪悊鎯崇敓娲荤媯娆㈣妭锛冭耽搴楅摵澶у锛侀€熸潵锛�';

            shareImage = 'http://img.alicdn.com/tps/i2/TB1msCUKXXXXXbnXXXXD7km2pXX-750-750.jpg';
            shareUrl = "https://shop" + shopId + ".taobao.com/?shop_tab_type=newitem&shop_origin=" + Tida.getParam("shop_origin");
          }

          var appkey = Tida.interactParams.appkey;
          if (Tida.config[appkey]) {
            var imgpre = 'http://img.alicdn.com/tps/';
            if (Tida.interactParams.isKHC) {
              shareImage = imgpre + Tida.config[appkey].shareImgKHC;
            } else {
              shareImage = imgpre + Tida.config[appkey].shareImg;
            }
          }

          var shareData = options.shareData || {
              title: "鐞嗘兂鐢熸椿鐙傛鑺�",
              text: shareText,
              image: shareImage,
              url: shareUrl
            };
          var currOption = {
            shareData: shareData,
            myAwardClick: options.myAwardClick, // hack 鑷澶勭悊鎴戠殑濂栧搧
            shareClick: options.shareClick, // hack 鑷澶勭悊鍒嗕韩
            dealBack: options.dealBack // 鑷澶勭悊娴眰鐨刡ack浜嬩欢 hashchange
          };
          if (options.nowinTips && options.nowinTips.btnConfig && options.nowinTips.btnConfig.action) {
            currOption.btnConfClick = options.nowinTips.btnConfig.action;
          }
          this.appendToBody(html, currOption, callback);

          Tida.newReport('/uaward.8.4', '', 'awardtype=' + awardType, 'H46747616');
        },

        parseShareParam: function parseShareParam(options) {
          var campaignPath = Tida.getParam("path");
          // 濡傛灉url涓殑path涓虹┖璇曠潃浠巖eferrer涓幏鍙�
          if (!campaignPath && document.referrer) {
            campaignPath = Tida.getParam("path", document.referrer);
          }
          var url_param = ["interactId=" + Tida.interactParams.interactId, "app=" + lib.env.aliapp.appname];
          var refer = Tida.getParam("refer");
          if (refer) {
            url_param.push("refer=" + refer);
          }
          if (campaignPath) {
            url_param.push("path=" + campaignPath);
          }

          // 2015搴楅摵鎵挎帴椤�
          // https://shop1234556.m.taobao.com/?shop_tab_type=newitem&shop_origin=campaign-1234-22.htm
          var shopId = Tida.interactParams.shopId || Tida.getParam("shopId");

          options.url = "https://shop" + shopId + ".taobao.com/?shop_tab_type=newitem&shop_origin=" + Tida.getParam("shop_origin");

          //options.url = "//m.laiwang.com/market/laiwang/tida-share-tb.php?"+url_param.join("&");
          // 鎵嬫窐浠呮敮鎸佺煭淇″垎浜�
          //options.shareType = 1;
          return options;
        },

        /**
         * 鎻掑叆鍒癲om
         */
        appendToBody: function appendToBody(_html, options, callback) {
          var tidaFloats = doc.querySelectorAll(".Tida-award-container");
          if (tidaFloats && tidaFloats.length) {
            return;
          }
          doc.querySelector("body").insertAdjacentHTML("beforeEnd", _html);

          var oFloat = doc.querySelector(".Tida-award-container");

          if (!oFloat) {
            return;
          }

          var closeBtn = doc.querySelector(".Tida-bottom-wrap");
          var leftBtn = doc.querySelector(".Tida-btn-share");
          var rightBtn = doc.querySelector(".Tida-btn-replay");
          var awardBtn = doc.querySelector('.Tida-btn-award');
          var openSeed = doc.querySelector('.Tida-btn-openseed');
          var btnConf = doc.querySelector('.Tida-btn-conf');
          var btnBuy = doc.querySelector('.Tida-btn-buy');

          var _closeFloat = function closeFloat() {
            oFloat.style.opacity = '0';
            setTimeout(function () {
              if (oFloat && oFloat.parentNode) {
                oFloat.parentNode.removeChild(oFloat);
              }
              oFloat = rightBtn = leftBtn = closeBtn = _closeFloat = btnConf = null;
            }, 300);
            if (Tida.drawReulstHashChange) {
              removeEventListener('hashchange', Tida.drawReulstHashChange, false);
              Tida.drawReulstHashChange = null;
            }
            if (location.hash == '#Tida-drawResult') {
              history.back();
            }
          };

          // bind event...
          /**
           *
           * 鎸囧畾SDK閲屾彁渚涙诞灞傞噰鐢ㄥ摢绉嶄簨浠舵柟寮忥紝榛樿浣跨敤click浜嬩欢锛屼负true鏃朵娇鐢ㄧ敤touch鐩稿叧鐨勪簨浠剁洃鍚�
           *
           * @name useTouch
           * @memberOf Tida
           *
           * @type boolean
           */
          // if(Tida.useTouch){
          //     sclick = "touchend";
          // }else{
          //     sclick = "click";
          // }
          sclick = "touchend";

          // 澶勭悊娓愮幇
          if (Tida.drawResultShowTimer) {
            Tida.drawResultShowTimer = 1;
          } else {
            // 棣栨鏃堕棿璁剧疆闀跨偣鐣欑粰鍔犺浇1鐐规椂闂�
            Tida.drawResultShowTimer = 200;
          }
          setTimeout(function () {
            oFloat.style.opacity = '1';
          }, Tida.drawResultShowTimer);

          if (closeBtn) {
            closeBtn.addEventListener(sclick, function (e) {
              // 璇曠潃鍏抽棴arview
              Tida.popWindow && Tida.popWindow();
              _closeFloat();
              callback && callback({ actionType: "close" });
              Tida.newReport('/uaward.8.2', '', 'api=Tida.close', 'H46747614');
            }, false);
          }
          if (rightBtn) {
            rightBtn.addEventListener(sclick, function (e) {
              _closeFloat();
              callback && callback({ actionType: "replay" });
              Tida.newReport('/uaward.8.2', '', 'api=Tida.replay', 'H46747614');
            }, false);
          }
          if (leftBtn) {
            leftBtn.addEventListener(sclick, function (e) {
              if (options.shareClick) {
                options.shareClick(options.shareData);
                return;
              }
              Tida.share(options.shareData, function () {
                callback && callback({ actionType: "share" });
              });
            }, false);
          }

          if (btnConf) {
            btnConf.addEventListener(sclick, function (e) {
              _closeFloat();
              if (options.btnConfClick) {
                options.btnConfClick();
              } else {
                Tida.popWindow();
              }
              Tida.newReport('/uaward.8.2', '', 'api=Tida.btnConf', 'H46747614');
            }, false);
          }

          if (awardBtn) {
            awardBtn.addEventListener(sclick, function (e) {
              // var myAwardUrl = 'https://pages.tmall.com/wow/lafite/act/tida-awards?#winning-recod';
              var myAwardUrl = 'https://pages.tmall.com/wow/portal/act/my-assets';
              if (Tida.appinfo.isTaobao) {
                myAwardUrl = 'https://h5.m.taobao.com/vip/portal.html';
              }
              if (options.myAwardClick) {
                options.myAwardClick(myAwardUrl);
                return;
              }
              myAwardUrl = 'https://pages.tmall.com/wow/lafite/act/mygift17618';
              Tida.pushWindow(myAwardUrl);
              Tida.newReport('/uaward.8.2', '', 'api=Tida.award', 'H46747614');
            }, false);
          }

          if (openSeed) {
            openSeed.addEventListener(sclick, function (e) {
              var oSeed = document.querySelector('.Tida-seed-hb');
              var url = oSeed ? oSeed.getAttribute('data-url') : 'https://pages.tmall.com/wow/lafite/act/redbag-split';
              Tida.pushWindow(url);
              Tida.newReport('/uaward.8.2', '', 'api=Tida.openSeed', 'H46747614');
            }, false);
          }
          if (btnBuy) {
            btnBuy.addEventListener(sclick, function (e) {
              var oSeed = document.querySelector('.Tida-finalPrice-wrap');
              var url = oSeed ? oSeed.getAttribute('data-href') : '';
              if (url) {
                Tida.pushWindow(url);
              }
              Tida.newReport('/uaward.8.2', '', 'api=Tida.buy', 'H46747614');
            }, false);
          }

          if (!options.dealBack) {

            if (Tida.drawReulstHashChange) {
              removeEventListener('hashchange', Tida.drawReulstHashChange, false);
            }

            Tida.drawReulstHashChange = function () {
              if (location.hash == '#Tida-drawResult') {
                return;
              }
              _closeFloat();
              callback && callback({ actionType: "close" });
              Tida.newReport('/uaward.8.2', '', 'api=Tida.drawReulstHashChange', 'H46747614');
            };
            location.hash = '#Tida-drawResult';
            setTimeout(function () {
              addEventListener('hashchange', Tida.drawReulstHashChange, false);
            }, 100);
          }
        },
        startLoading: function startLoading() {
          var startWrap = $q('.Tida-start-wrap');
          if (startWrap) {
            startWrap.className = 'Tida-start-wrap Tida-start-loading';
          }
        },
        removeLoading: function removeLoading() {
          var startWrap = $q('.Tida-start-wrap');
          if (startWrap) {
            startWrap.className = 'Tida-start-wrap';
          }
        }
      };

      exports.default = draw;

      /***/ }),
    /* 44 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var doc = document;

      var $q = function $q(_s) {
        return document.querySelector(_s);
      };

      var TidaTpl = {
        nowin: function nowin() {
          return '<div class="Tida-nowin">\n                </div>';
        },
        tmallCoupon: function tmallCoupon(extra) {
          var tpl = '<div class="Tida-tcoupon">\n                    <div class="Tida-tcoupon-val-wrap">\n                        <span class="label">&yen;</span>' + extra.amount + '\n                    </div>\n                </div>';
          return tpl;
        },
        alipayRedEnvelope: function alipayRedEnvelope(extra) {
          var tpl = '<div class="Tida-hb"></div>';
          return tpl;
        },
        alipayRedEnvelopeTip: function alipayRedEnvelopeTip() {
          return '<div class="Tida-award-tip">\n                        2\u5C0F\u65F6\u5185\u5230\u8D26\n                    </div>';
        },
        fpRedEnvelopeTip: function fpRedEnvelopeTip() {
          return '<div class="Tida-award-tip">\n                        2\u5C0F\u65F6\u5185\u5230\u8D26,  \u96506.18-20\u671F\u95F4\u4F7F\u7528\n                    </div>';
        },
        mouCommonFpRedEnvelopeTip: function mouCommonFpRedEnvelopeTip() {
          return '<div class="Tida-award-tip">\n                        2\u5C0F\u65F6\u5185\u5230\u8D26,  \u96506.18-20\u671F\u95F4\u4F7F\u7528\n                    </div>';
        },
        activityCouponTip: function activityCouponTip() {
          return '<div class="Tida-award-tip"></div>';
        },
        countdown: {
          init: function init(data) {
            if (this.timer) {
              clearInterval(this.timer);
            }
            this.endTime = data.endTime;
            this.currentTime = data.currentTime;
            this.diff = this.endTime - this.currentTime;
            this.container = data.container;

            this.start();
          },
          start: function start() {
            var self = this;
            this.timer = setInterval(function () {

              self.calc();
            }, 1000);
            this.calc();
          },
          stop: function stop() {
            clearInterval(this.timer);
            this.timer = 0;
          },
          calc: function calc() {
            this.diff -= 1000;
            if (this.diff <= 0) {
              clearInterval(this.timer);
              this.diff = 0;
            }

            var hourRate = 60 * 60 * 1000;
            var minuteRate = 60 * 1000;

            var hours = Math.floor(this.diff / hourRate);
            var minutes = Math.floor(this.diff % hourRate / minuteRate);
            var seconds = Math.floor((this.diff - hours * hourRate - minutes * minuteRate) / 1000);

            this.html(hours, minutes, seconds);
          },
          numstr: function numstr(num) {
            return num > 9 ? num : '0' + num;
          },
          html: function html(hours, minutes, seconds) {
            var container = $q(this.container);
            if (!container) {
              clearInterval(this.timer);
            } else {
              container.innerHTML = this.numstr(hours) + ':' + this.numstr(minutes) + ':' + this.numstr(seconds);
            }
          }
        },
        sharedRedEnvelope: function sharedRedEnvelope(extra) {
          var mutiSeed = extra.num > 1 ? 'Tida-muti-seed' : '';

          if (extra.expireTime && extra.currentTime) {
            var currTime = new Date(extra.currentTime.replace(/\-/g, '/')).getTime();
            var expireTime = new Date(extra.expireTime.replace(/\-/g, '/')).getTime();

            setTimeout(function () {
              TidaTpl.countdown.init({
                currentTime: currTime,
                endTime: expireTime,
                container: '.Tida-seed-countdown'
              });
            }, 50);
            this.seedTipShow = 1;
          } else {
            this.seedTipShow = 0;
          }

          //濡傛灉鏄腑鐨勫涓孩鍖� 鐩存帴璺宠浆鍒� https://pages.tmall.com/wow/lafite/act/redbag-split
          //濡傛灉鏄崟涓孩鍖� 璺宠浆鍒� https://pages.tmall.com/wow/lafite/act/redbag-split?signalKey=xxxxx&appName=xxx
          var url = 'https://pages.tmall.com/wow/lafite/act/redbag-split';
          if (extra.num < 2) {
            var appName = Tida.appinfo.isTaobao ? 'tb' : 'tm';
            url = 'https://pages.tmall.com/wow/lafite/act/bagshare?signalKey=' + extra.signalKey + '&appName=' + appName;
          }
          var tpl = '<div class="Tida-seed-hb ' + mutiSeed + '" data-signalKey="' + extra.signalKey + '" data-num="' + extra.num + '" data-url="' + url + '"></div>';
          return tpl;
        },
        sharedRedEnvelopeTip: function sharedRedEnvelopeTip() {
          var tpl = '';
          if (this.seedTipShow) {
            tpl = '<div class="Tida-award-tip">\n                    \u8DDD\u79BB\u672A\u62C6\u7EA2\u5305\u8FC7\u671F\u8FD8\u5269: <span class="Tida-seed-countdown">05:59:59</span>\n                </div>';
          }
          return tpl;
        },
        interactCoupon: function interactCoupon(extra, awardType) {
          var itemStyle = '';
          var couponName = '浼樻儬鍒�';
          if (awardType === 'interactItemCoupon') {
            itemStyle = 'item-coupon-style';
            couponName = '鎸囧畾鍟嗗搧浼樻儬鍒�';
          }
          var tpl = '<div class="Tida-coupon">\n            <div class="new-coupon-wrap ' + itemStyle + '">\n                <div class="new-coupon-left">\n                    <div class="coupon-shop-wrap">\n                        <div class="new-coupon-shop-name">' + extra.shopName + '</div>\n                        <div class="new-coupon-label">' + couponName + '</div>\n                    </div>\n                    <div class="coupon-valid-wrap">\n                        <div class="coupon-valid-label">&nbsp;</div>\n                        <div class="coupon-valid-date">' + extra.startDate + '-' + extra.endDate + '</div>\n                    </div>\n                </div>\n                <div class="new-coupon-right">\n                    <div class="new-coupon-value">\n                        <span class="coupon-label">&yen;</span><span class="value">' + extra.value + '</span>\n                    </div>\n                    <div class="new-coupon-startFee">\n                        \u6EE1' + extra.startFee + '\u5143\u4F7F\u7528\n                    </div>\n                </div>\n            </div>\n        </div>';
          return tpl;
        },
        finalPrice: function finalPrice(_info, awardType) {
          var info = _info;

          var detailUrl = "https://detail.m.tmall.com/item.htm?id=" + info.itemId;
          var tempPic = JSON.parse(info.pic).picUrl;
          return '<div class="task-item-wrap Tida-finalPrice-wrap" data-href=\'' + detailUrl + '\'>\n                <a class="item-wrap" target="_blank"  href=\'' + detailUrl + '\'>\n                    <div class="item-left-wrap">\n                        <div class="task-goods-img" style="background-image:url(' + tempPic + ')">\n                        </div>\n                        <div class="item-detail-wrap">\n                            <div class="item-detail">\n                                <div class="item-title-wrap">\n                                    ' + info.itemName + '\n                                </div>\n                                <div class="item-price-wrap">\u72C2\u6B22\u4EF7: &yen;&nbsp;<span>' + info.price + '</span></div>\n                                <div class="item-valid-wrap">\n                                    \u6709\u6548\u671F\u81F3\uFF1A<p>' + info.validDate + '</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="item-label-wrap">\n                        <p>\u8D2D\u4E70\u6743</p>\n                    </div>\n                </a>\n            </div>';
        },
        resultTip: function resultTip(data) {
          var winTitle = data.isJYD ? '閲戦摱宀涙潵琚紝浜哄搧澶х垎鍙�!' : '涓鍟�!';
          var winTip = '<div class="Tida-result-txt">' + winTitle + '</div>\n                    <div class="Tida-result-subtxt">\n                        ' + data.tip + '\n                    </div>';
          return winTip;
        },
        drawResult: function drawResult(data) {

          var nowinTips = data.nowinTips || {};

          var nowinTitle = nowinTips.nowinTitle || '寰堥仐鎲緙娌′腑濂�!';
          var nowinTip = nowinTips.nowinTip || TidaTpl.noAwardTips[Math.floor(Math.random() * TidaTpl.noAwardTips.length)] || TidaTpl.noAwardTips[0]; //data.noAwardTip;
          var awardType = data.awardType;

          if (data.noDraw) {
            nowinTitle = nowinTips.nodrawTitle || '鐜╁緱涓嶅鍔姏';
            nowinTip = nowinTips.nodrawTip || '濂栧搧涓庝綘鎿﹁偐鑰岃繃';
            awardType = 'nodraw';
          }
          var resultTip = '<div class="Tida-result-txt">' + nowinTitle + '</div>\n                    <div class="Tida-result-subtxt">' + nowinTip + '</div>';

          // 鍙湁涓鐨勬儏鍐垫墠浼氫紶鍏esultTip
          if (data.resultTip) {
            resultTip = this.resultTip({
              tip: data.resultTip,
              isJYD: data.isJYD
            });
          }

          var score = data.score;
          var currPoint = score.currPoint || score.tip || '&nbsp;';
          var unit = score.unit || '&nbsp;';

          var scoreTitle = currPoint === '' ? '&nbsp;' : score.title || '娓告垙寰楀垎';

          var gameScoreTpl = '';

          if (scoreTitle) {
            gameScoreTpl = '<div class="Tida-title">' + scoreTitle + '</div>\n                    <div class="Tida-score-wrap">\n                    <span class="Tida-icon-jb"></span><span class="Tida-score">' + currPoint + '</span><span class="Tida-score-unit">' + unit + '</span>\n                    </div>';
          }

          var awardTipTpl = '';

          if (TidaTpl[awardType + 'Tip']) {
            awardTipTpl = TidaTpl[awardType + 'Tip']();
          }

          if (awardType != 'nowin' && awardType != 'nodraw' && data.winTips) {
            var currTip = data.winTips[awardType];
            if (currTip) {
              awardTipTpl = '<div class="Tida-award-tip">' + currTip + '</div>';
            }
          }

          var btnTpl = '<div class="Tida-btn Tida-btn-share" style="margin-right:12px;"></div>\n                    <div class="Tida-btn Tida-btn-replay"></div>';
          if (awardType === 'sharedRedEnvelope') {
            btnTpl = '<div class="Tida-btn Tida-btn-replay" style="margin-right:12px;"></div>\n                <div class="Tida-btn Tida-btn-openseed"></div>';
          } else if (awardType === 'finalPrice') {
            btnTpl = '<div class="Tida-btn Tida-btn-replay Tida-btn-replay-l" style="margin-right:12px;"></div>\n                <div class="Tida-btn Tida-btn-buy"></div>';
          } else if (awardType === 'nodraw' || awardType === 'nowin') {
            var btnConfig = nowinTips.btnConfig;
            if (btnConfig) {
              var btnTxt = btnConfig.text;
              var css = btnConfig.css;
              btnTpl = '<div class="Tida-btn Tida-btn-conf" style="margin-right:12px;' + css + '">' + btnTxt + '</div>\n                <div class="Tida-btn Tida-btn-replay"></div>';
            } else {
              btnTpl = '<div class="Tida-btn Tida-btn-replay Tida-big-replay"></div>';
            }
          }
          //
          var arViewCls = Tida.getParam('_arview_') ? 'Tida-close-view' : '';
          var JYDcls = data.isJYD ? 'Tida-JYD-view' : '';
          var tpl = '<div class="Tida-award-container ' + awardType + ' ' + arViewCls + ' ' + JYDcls + '" ontouchmove="event.preventDefault()">\n                <div class="Tida-award-inner Tida-' + awardType + '-container">\n                    <div class="Tida-award-header">\n                        <div class="Tida-game-score">\n                            ' + gameScoreTpl + '\n                        </div>\n                        <div class="Tida-btn-award">\n                        </div>\n                    </div>\n\n                    <div class="Tida-award-body">\n                        <div class="Tida-body-head">\n                        </div>\n                        <div class="Tida-award-body-inner">\n                            <div class="Tida-award-title">\n                                ' + resultTip + '\n                            </div>\n                            <div class="Tida-award-detail">\n                                <div class="Tida-result-award">\n                                    <div class="Tida-award-wrap">' + data.awardTpl + '</div>\n                                    ' + awardTipTpl + '\n                                </div>\n                                <div class="Tida-bottom-btn">\n                                    <div class="Tida-btn-group">' + btnTpl + '</div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class="Tida-bottom-wrap"><div class="Tida-bottom-close-btn"></div></div>\n            </div>';
          return tpl;
        }
      };
      TidaTpl.noAwardTips = ['鎹蹇冨瓨鐞嗘兂鏇村鏄撲腑濂�'];

      exports.default = TidaTpl;

      /***/ }),
    /* 45 */
    /***/ (function(module, exports) {

      "use strict";

      /**
       * @param {Object} d  鏃堕棿
       * @param {Object} formatter "yyyy-MM-dd W hh:mm:ss" w:english week W:chinese week
       */
      Date.prototype.format = function (formatter) {
        var d = this;
        if (!formatter || formatter == "") {
          formatter = "yyyy-MM-dd";
        }
        var lang = formatter.indexOf("W") > 0 ? "chi" : "eng";
        var weekdays = {
          chi: ["鏄熸湡鏃�", "鏄熸湡涓€", "鏄熸湡浜�", "鏄熸湡涓�", "鏄熸湡鍥�", "鏄熸湡浜�", "鏄熸湡鍏�"],
          eng: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        };
        var year = d.getFullYear().toString();
        var month = (d.getMonth() + 1).toString();
        var date = d.getDate().toString();
        var day = d.getDay();
        var hour = d.getHours().toString();
        var minute = d.getMinutes().toString();
        var second = d.getSeconds().toString();

        var yearMarker = formatter.replace(/[^y|Y]/g, '');
        if (yearMarker.length == 2) {
          year = year.substring(2, 4);
        } else if (yearMarker.length == 0) {
          year = "";
        }

        var monthMarker = formatter.replace(/[^M]/g, '');
        if (monthMarker.length > 1) {
          if (month.length == 1) {
            month = "0" + month;
          }
        } else if (monthMarker.length == 0) {
          month = "";
        }

        var dateMarker = formatter.replace(/[^d]/g, '');
        if (dateMarker.length > 1) {
          if (date.length == 1) {
            date = "0" + date;
          }
        } else if (dateMarker.length == 0) {
          date = "";
        }

        var hourMarker = formatter.replace(/[^h]/g, '');
        if (hourMarker.length > 1) {
          if (hour.length == 1) {
            hour = "0" + hour;
          }
        } else if (hourMarker.length == 0) {
          hour = "";
        }

        var minuteMarker = formatter.replace(/[^m]/g, '');
        if (minuteMarker.length > 1) {
          if (minute.length == 1) {
            minute = "0" + minute;
          }
        } else if (minuteMarker.length == 0) {
          minute = "";
        }

        var secondMarker = formatter.replace(/[^s]/g, '');
        if (secondMarker.length > 1) {
          if (second.length == 1) {
            second = "0" + second;
          }
        } else if (secondMarker.length == 0) {
          second = "";
        }

        var dayMarker = formatter.replace(/[^w|W]/g, '');
        var result = formatter.replace(yearMarker, year).replace(monthMarker, month).replace(dateMarker, date).replace(hourMarker, hour).replace(minuteMarker, minute).replace(secondMarker, second);
        if (dayMarker.length != 0) {
          result = result.replace(dayMarker, weekdays[lang][day]);
        }

        return result;
      };

      /***/ }),
    /* 46 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var award = {

        // idrawAsyc: function (options, callback) {
        //     var mtopParams = {

        //         eventName: 'idrawAsyc',

        //         businessParam: { interactId: "4a448087-89fb-475e-ac3d-fd6a0a3f03a3" },

        //         mtopApi: "mtop.interact.isvlottery.idraw",

        //         appkey: Tida.interactParams.appkey

        //     };

        //     Tida.mtopAsyc(mtopParams, callback);

        // },

        /**
         * 鍙戞斁骞冲彴娣橀噾甯�  鐩墠浠呮墜娣�5.2浠ヤ笂鐗堟湰鏀寔 澶╃尗寮€鍙戜腑 鏁鏈熷緟
         *
         * @memberOf Tida
         * @name getTaoJinbi
         * @function
         *
         * @param {object} options 鍏ュ弬
         * @param {number} options.amount 鍙戞斁閲戝竵鏁伴噺 涓嶅彲浠ヤ负绌�
         * @param {string} options.comments 鎻忚堪 鍙互涓虹┖
         * @param {function} callback 鍥炶皟鍑芥暟 涓嶅彲浠ヤ负绌�
         *
         */
        getTaoJinbi: function getTaoJinbi(options, callback) {
          var amount = options.amount;
          var comments = options.comments;
          if (null == amount) {
            callback && callback({
              errorCode: 2,
              errorMsg: "amount required"
            });
            return;
          }
          //alert("about to call mtop [1]");
          var mtopParams = {
            eventName: 'getTaoJinbi',
            businessParam: { appKey: Tida.interactParams.appkey, businessParams: JSON.stringify({ "amount": amount, "comments": comments }) },
            mtopApi: "mtop.interact.coin.buyer.add",
            appkey: Tida.interactParams.appkey
          };
          //alert(JSON.stringify(mtopParams));
          Tida.mtopAsyc(mtopParams, callback);
        },

        /*
         * 瀹夊叏璇锋眰绠￠亾鎺ュ彛锛岄渶瑕乮sv瀹炵幇鍚庡彴鈥滈鍙憃necode鍦烘櫙鈥濇湇鍔″満鏅洖璋冮〉闈€�
         *
         */
        securityRequest: function securityRequest(options, callback) {
          var bizApi = options.bizApi;
          var bizExtString = options.bizExtString;
          var asac = options.asac;
          if (!bizApi) {
            callback && callback({
              errorCode: 2,
              errorMsg: "bizApi required"
            });
            return;
          }
          //alert("about to call mtop [1]");
          var mtopParams = {
            eventName: 'securityRequest',
            businessParam: { appKey: Tida.interactParams.appkey, api: bizApi, extString: bizExtString, asac: asac, isSec: 'true' },
            mtopApi: "mtop.interact.onecode.issue",
            appkey: Tida.interactParams.appkey
          };
          //alert(JSON.stringify(mtopParams));
          Tida.mtopAsyc(mtopParams, callback);
        }
      };

      exports.default = award;

      /***/ }),
    /* 47 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var m = {

        makeup: function makeup(options, callback) {

          var a = {
            apiName: "Tida.magicmirror",
            methodName: "makeup",
            methodParam: { "makeuplist": options },
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", a, callback, callback);
        },
        openMakeup: function openMakeup(options, callback) {
          var url = typeof options == "string" ? options : options.url;
          var h = options.height ? options.height : 0.7;

          var pre = 'tmall://page.tm/magicMirror';
          if (Tida.appinfo.isTaobao) {
            pre = 'http://magicmirror.m.taobao.com/magicmirror/index.htm';
          }

          location.href = pre + "?mode=1&url=" + encodeURIComponent(url) + "&height=" + h;
        },

        getPhoneType: function getPhoneType(callback) {
          var a = {
            apiName: "Tida.base",
            methodName: "phoneType",
            methodParam: "",
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", a, callback, callback);
        },

        makeupIsSupport: function makeupIsSupport(callback) {
          var a = {
            apiName: "Tida.magicmirror",
            methodName: "isSupport",
            methodParam: "",
            appKey: Tida.interactParams.appkey
          };
          window.WindVane.call("wopc", "invoke", a, callback, callback);
        }

      };

      exports.default = m;

      /***/ }),
    /* 48 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function wv(options, cb, name) {

        window.WindVane.call("wopc", "invoke", {
          apiName: "Tida.WVAR",
          methodName: name,
          methodParam: options,
          appKey: Tida.interactParams.appkey
        }, function (e) {
          cb && cb(e);
        }, function (e) {
          cb && cb(e);
        });
      }

      exports.default = {
        WVAR: {
          resumeDetect: function resumeDetect(options, cb) {
            wv(options, cb, 'resumeDetect');
          },

          getPerfInfo: function getPerfInfo(options, cb) {
            wv(options, cb, 'getPerfInfo');
          },

          pauseDetect: function pauseDetect(options, cb) {
            wv(options, cb, 'pauseDetect');
          },

          resetDetect: function resetDetect(options, cb) {
            wv(options, cb, 'resetDetect');
          },

          exitDetect: function exitDetect(options, cb) {
            wv(options, cb, 'exitDetect');
          },

          setParameters: function setParameters(options, cb) {
            wv(options, cb, 'setParameters');
          },

          hideScanAnimation: function hideScanAnimation(options, cb) {
            wv(options, cb, 'hideScanAnimation');
          },

          ObjectEvent: function ObjectEvent(cb) {
            document.addEventListener('WVARSDK.Event.ObjectDetected', cb);
          },

          InfoEvent: function InfoEvent(cb) {
            document.addEventListener('WVARSDK.Event.Info', cb);
          },

          ExceptionsEvent: function ExceptionsEvent(cb) {
            document.addEventListener('WVARSDK.Event.Exceptions', cb);
          }
        }
      };

      /***/ }),
    /* 49 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _loadscript = __webpack_require__(4);

      var _loadscript2 = _interopRequireDefault(_loadscript);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var currModule = {
        init: function init() {
          var _this = this;

          if (!window.Ali) {
            (0, _loadscript2.default)('//g.alicdn.com/hybrid/api/4.0.3/index.js', function () {
              window.Ali && Ali.ready(function () {
                _this.hackTida();
              });
            });
          } else {
            this.hackTida();
          }
        },
        hackTida: function hackTida() {
          Tida.isLogin = Ali.isLogin;
          Tida.doAuth = Tida.mixNick = function (option, callback) {
            Ali.login(function (e) {
              e.finish = true;
              callback && callback(e);
            });
          };
        }
      };

      exports.default = currModule;

      /***/ }),
    /* 50 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var isActive = true;
      var appStatus = {
        getAppState: function getAppState(callback) {
          WindVane.call('Application', 'getAppState', {}, function (res) {
            // isActive 闇€瑕佽嚜琛屽畾涔� 搴旂敤浣跨敤webgl缁樺埗鏃跺彧鑳芥槸isActive涓簍rue鏃舵墠鑳借皟鐢� 鍚﹀垯鏋佹湁鍙兘瀵艰嚧crash
            isActive = false;
            if (res && res.appState) {
              if (res.appState === 'Active' || res.appState.appState === 'Inactive') {
                isActive = true;
              }
            }
            callback && callback(isActive);
          }, function (res) {
            // 鎺ュ彛鎶涢敊浜� 杩欎釜鏃跺€欎负浜嗙▼搴忔纭墽琛� 寤鸿涓簍rue杈冨ソ
            // isActive = false;
            isActive = true;
            callback && callback(isActive);
          });
        },
        initAppStatus: function initAppStatus() {
          // 灏嗗鎴风瀹炴椂鐘舵€佸悓姝ョ粰
          appStatus.getAppState(function (_status) {
            Tida.isActive = _status;
          });
        }
      };

      // 浠ヤ笅鏄鍔ㄨ幏鍙�
      document.addEventListener('WV.Event.APP.Active', function (e) {
        Tida.isActive = true;
      }, false);

      document.addEventListener('WV.Event.APP.Background', function (e) {
        Tida.isActive = false;
      }, false);

      document.addEventListener('WV.Event.APP.Lock', function (e) {
        Tida.isActive = false;
      }, false);

      exports.default = appStatus;

      /***/ }),
    /* 51 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var follow = {
        checkFollow: function checkFollow(opt, cb) {
          opt.sellerID = opt.sellerID || opt.sellerId;
          Tida.mtop({
            api: 'mtop.interact.open.isattention',
            param: opt
          }, function (data) {
            // console.log('checkFollow', data);
            data.isFollow = '' + data.data === 'true';
            cb && cb(data);
          });
        },
        shopFavorAsync: function shopFavorAsync(options, callback) {
          var mtopParams = {
            eventName: 'shopFavorAsync',
            businessParam: { appKey: Tida.interactParams.appkey, sellerId: options.sellerId, isAdd: "1" },
            mtopApi: "mtop.interact.shop.favor",
            appkey: Tida.interactParams.appkey
          };
          Tida.mtopAsyc(mtopParams, function (res) {
            res.isCollect = '' + res.success === 'true';
            callback && callback(res);
          });
        }
      };

      exports.default = follow;

      /***/ }),
    /* 52 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _arScanMock = __webpack_require__(12);

      var _arScanMock2 = _interopRequireDefault(_arScanMock);

      var _windvaneCall = __webpack_require__(5);

      var _windvaneCall2 = _interopRequireDefault(_windvaneCall);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var tempWindvaneCall = function tempWindvaneCall(api, params, success, failure, timeout) {
        if (typeof params === 'function') {
          success = success || params;
          failure = failure || params;
          params = {};
        }
        if (Tida.appinfo.isTaobao) {
          (0, _windvaneCall2.default)(api, params, success, failure, timeout);
        } else {
          var a = api.split('.');
          window.WindVane.call(a[0], a[1], params, success, failure, timeout);
        }
      };

      function getPre() {
        var classPre = 'AR';
        // if(lib.env.aliapp && lib.env.aliapp.version.lt('6.1.0')){
        //     classPre = 'AR_Go';
        // }
        return classPre;
      }

      var arScan = {
        scanOpenCamera: function scanOpenCamera(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };
          var classPre = getPre();
          // 鍓嶆湡鍏坢ock渚涜皟璇�
          if (opt.mock) {
            setTimeout(function () {
              cb(_arScanMock2.default);
            }, opt.timeout || 2000);
          } else {
            tempWindvaneCall(classPre + ".scanOpenCamera", opt, cb, cb);
          }
        },
        closePage: function closePage() {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("ARScanPlugin.closePage", opt, cb, cb);
        },
        startScan: function startScan(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };
          var classPre = getPre();
          tempWindvaneCall(classPre + ".startScan", opt, cb, cb);
        },
        stopScan: function stopScan(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };
          var classPre = getPre();
          tempWindvaneCall(classPre + ".stopScan", opt, cb, cb);
        },
        closeCamera: function closeCamera(opt, _cb) {
          this.scanCloseCamera(opt, _cb);
        },
        scanCloseCamera: function scanCloseCamera(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };
          var classPre = getPre();
          tempWindvaneCall(classPre + ".scanCloseCamera", opt, cb, cb);
        },
        screenshot: function screenshot(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };
          var classPre = getPre();
          tempWindvaneCall(classPre + ".screenshot", opt, cb, cb);
        },
        initModelTracker: function initModelTracker(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.initModelTracker", opt, cb, cb);
        },
        startModelTracking: function startModelTracking(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.startModelTracking", opt, cb, cb);
        },
        stopModelTracking: function stopModelTracking(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.stopModelTracking", opt, cb, cb);
        },
        destroyModelTracker: function destroyModelTracker(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.destroyModelTracker", opt, cb, cb);
        },
        getModelTrackingState: function getModelTrackingState(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.getModelTrackingState", opt, cb, cb);
        },
        initMarkerTracker: function initMarkerTracker(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.initMarkerTracker", opt, cb, cb);
        },
        startMarkerTracking: function startMarkerTracking(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.startMarkerTracking", opt, cb, cb);
        },
        stopMarkerTracking: function stopMarkerTracking(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.stopMarkerTracking", opt, cb, cb);
        },
        destroyMarkerTracker: function destroyMarkerTracker(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.destroyMarkerTracker", opt, cb, cb);
        },
        getMarkerTrackingState: function getMarkerTrackingState(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.getMarkerTrackingState", opt, cb, cb);
        },
        afterWebModelDrawn: function afterWebModelDrawn(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.afterWebModelDrawn", opt, cb, cb);
        },
        afterWebMarkerDrawn: function afterWebMarkerDrawn(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.afterWebMarkerDrawn", opt, cb, cb);
        },
        sanshao: function sanshao(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("AR.sanshao", opt, cb, cb);
        }
      };

      exports.default = arScan;

      /***/ }),
    /* 53 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _windvaneCall = __webpack_require__(5);

      var _windvaneCall2 = _interopRequireDefault(_windvaneCall);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var tempWindvaneCall = function tempWindvaneCall(api, params, success, failure, timeout) {
        if (Tida.appinfo.isTaobao) {
          (0, _windvaneCall2.default)(api, params, success, failure, timeout);
        } else {
          var a = api.split('.');
          window.WindVane.call(a[0], a[1], params, success, failure, timeout);
        }
      };

      var acl = {
        startACRListening: function startACRListening(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("IdstWVPlugin.startACRListening", opt, cb, cb);
        },
        stopACRListening: function stopACRListening(opt, _cb) {
          var cb = function cb(e) {
            _cb && _cb(e);
          };

          tempWindvaneCall("IdstWVPlugin.stopACRListening", opt, cb, cb);
        }
      };

      exports.default = acl;

      /***/ }),
    /* 54 */
    /***/ (function(module, exports) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = {
        getVipInfo: function getVipInfo(opt, cb) {
          if (typeof opt === 'function') {
            cb = opt;
          }
          Tida.mtopAsyc({
            "mtopApi": "mtop.interact.vip.get",
            "businessParam": {
              appKey: '' + Tida.interactParams.appkey
            },
            eventName: "vipget",
            appkey: '' + Tida.interactParams.appkey,
            appKey: '' + Tida.interactParams.appkey
          }, function (e) {
            cb && cb(e);
          });
        }
      };

      /***/ }),
    /* 55 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var applycoupon = {
        applyCoupon: function applyCoupon(opt, cb) {
          opt.asac = '1A175182PRX09K87MFTL55';
          Tida.mtop({
            api: 'mtop.interact.marketing.applycoupon',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        }
      };

      exports.default = applycoupon;

      /***/ }),
    /* 56 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var closeUI = {
        showCloseBtn: function showCloseBtn() {
          if (window.lib && lib.env.aliapp) {
            if (lib.env.os.isIOS && lib.env.aliapp.appname === 'TM') {
              if (lib.env.aliapp.version.lte('6.0.0')) {
                this.render();
              }
            }
          }
        },
        // bind: function(){
        //     document.addEventListener('DOMContentLoaded', (e)=>{
        //         this.render();
        //     }, false);
        // },
        render: function render() {
          var b = document.querySelector('body');
          var tp = document.querySelector('.Tida-close-pop');
          if (tp) {
            return;
          }
          var wvstyle = Tida.getParam('wvstyle');
          if (wvstyle === 'isv') {
            var shtml = '<div class="Tida-close-pop" ontouchend="Tida.closePoplayer();" onclick="Tida.closePoplayer();Tida.popWindow()"></div>';

            b.insertAdjacentHTML('beforeEnd', shtml);
          }
        }
      };

      exports.default = closeUI;

      /***/ }),
    /* 57 */
    /***/ (function(module, exports, __webpack_require__) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _appStatus = __webpack_require__(50);

      var _appStatus2 = _interopRequireDefault(_appStatus);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var __setTimeout = setTimeout;
      var __setInterval = setInterval;
      var __requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

      var ticker = {
        ticker: function ticker() {},
        setTimeout: function setTimeout() {

          var callback = arguments[0];
          var timeout = arguments[1];
          var args = Array.prototype.slice.call(arguments, 2);

          if (typeof arguments[0] === 'string') {
            callback = new Function(arguments[0]);
          }

          var newCallback = function newCallback() {
            if (Tida.isActive) {
              callback.apply(null, args);
            } else {
              // TODO 鎶涘純
            }
          };
          return __setTimeout(newCallback, timeout);
        },
        setInterval: function setInterval() {

          var callback = arguments[0];
          var timeout = arguments[1];
          var args = Array.prototype.slice.call(arguments, 2);

          if (typeof arguments[0] === 'string') {
            callback = new Function(arguments[0]);
          }

          var newCallback = function newCallback() {
            if (Tida.isActive) {
              callback.apply(null, args);
            } else {
              // TODO 鎶涘純
            }
          };
          return __setInterval(newCallback, timeout);
        },
        requestAnimationFrame: function requestAnimationFrame() {
          // window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

          var callback = arguments[0];

          var args = Array.prototype.slice.call(arguments, 1);

          if (typeof arguments[0] === 'string') {
            callback = new Function(arguments[0]);
          }

          var newCallback = function newCallback() {
            if (Tida.isActive) {
              callback.apply(null, args);
            } else {
              // TODO 鎶涘純
            }
          };

          return __requestAnimationFrame(newCallback);
        }
      };

      exports.default = ticker;

      /***/ }),
    /* 58 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * Created by zidong on 2017/8/30.
       */
      var fairyland = {
        mediasave: function mediasave(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.fairyland.mediasave',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        },
        mediatoken: function mediatoken(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.fairyland.mediatoken',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        },
        mediamylist: function mediamylist(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.fairyland.mediamylist',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        },
        mediasnapshot: function mediasnapshot(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.fairyland.mediasnapshot',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        }
      };

      exports.default = fairyland;

      /***/ }),
    /* 59 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var retail = {
        saveShelfLocation: function saveShelfLocation(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.retail.saveshelflocation',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        },
        queryShelfLocation: function queryShelfLocation(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.retail.queryshelflocation',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        },
        searchItem: function searchItem(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.item.search',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        },
        queryItem: function queryItem(opt, cb) {
          Tida.mtop({
            api: 'mtop.interact.item.query',
            param: opt
          }, function (data) {
            cb && cb(data);
          });
        }
      };

      exports.default = retail;

      /***/ }),
    /* 60 */
    /***/ (function(module, exports) {

      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function addSub(options, sucess, failure) {
        var params = {
          apiName: 'Tida.weitao',
          methodName: 'addFollowByParams',
          methodParam: Object.assign({}, options, {
            accountType: 1,
            originBiz: 'tida'
          }),
          appKey: Tida.interactParams.appkey
        };
        window.WindVane.call("wopc", "invoke", params, sucess, failure);
      }

      var subscribe = {
        state: function state(options, sucess, failure) {
          var params = {
            apiName: 'Tida.weitao',
            methodName: 'hasFollowedByParams',
            methodParam: Object.assign({}, options, {
              accountType: 1,
              originBiz: 'tida'
            }),
            appKey: Tida.interactParams.appkey
          };

          window.WindVane.call("wopc", "invoke", params, sucess, failure);
        },
        add: function add(options, sucess, failure) {
          var paramsCon = {
            message: '鏄惁娣诲姞鍏虫敞锛�',
            okbutton: '纭畾',
            canclebutton: '鍙栨秷',
            _index: 10086
          };
          var params = {
            apiName: 'Tida.WVUIDialog',
            methodName: 'confirm',
            methodParam: paramsCon,
            appKey: Tida.interactParams.appkey
          };

          window.WindVane.call("wopc", "invoke", params, function () {}, function (e) {
            console.log(e);
            if (!window.confirm('鏄惁娣诲姞鍏虫敞锛�')) {
              return;
            }
            addSub(options, sucess, failure);
          });

          function eventListen(e) {
            if (e.param._index == 10086 || e.param._index == '10086') {
              if (e.param.type == '纭畾') {
                addSub(options, sucess, failure);
              }
            }
            document.removeEventListener('wv.dialog', eventListen);
          }
          //鐩戝惉windvane 寮圭獥浜嬩欢
          document.addEventListener('wv.dialog', eventListen);
        },
        remove: function remove(options, sucess, failure) {
          var params = {
            apiName: 'Tida.weitao',
            methodName: 'removeFollowByParams',
            methodParam: Object.assign({}, options, {
              accountType: 1,
              originBiz: 'tida'
            }),
            appKey: Tida.interactParams.appkey
          };

          window.WindVane.call("wopc", "invoke", params, sucess, failure);
        }
      };

      exports.default = { subscribe: subscribe };

      /***/ })
    /******/ ])
});
;
//# sourceMappingURL=tida.js.map
//# sourceMappingURL=tida.js.map

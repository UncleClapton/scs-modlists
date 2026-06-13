var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e_instances, e_fn, _a, _e2, _t2, _n2, _b, _e3, _t3, _n3, _r2, _i, _a2, _o, _s, _c;
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e4, t2) => () => (t2 || (e4((t2 = { exports: {} }).exports, t2), e4 = null), t2.exports), s = (e4, i2, o2, s2) => {
  if (i2 && typeof i2 == `object` || typeof i2 == `function`) for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++) d2 = c2[l2], !a.call(e4, d2) && d2 !== o2 && t(e4, d2, { get: ((e5) => i2[e5]).bind(null, d2), enumerable: !(s2 = n(i2, d2)) || s2.enumerable });
  return e4;
}, c = (n2, r2, a2) => (a2 = n2 == null ? {} : e(i(n2)), s(r2 || !n2 || !n2.__esModule ? t(a2, `default`, { value: n2, enumerable: true }) : a2, n2));
(function() {
  let e4 = document.createElement(`link`).relList;
  if (e4 && e4.supports && e4.supports(`modulepreload`)) return;
  for (let e5 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e5);
  new MutationObserver((e5) => {
    for (let t3 of e5) if (t3.type === `childList`) for (let e6 of t3.addedNodes) e6.tagName === `LINK` && e6.rel === `modulepreload` && n2(e6);
  }).observe(document, { childList: true, subtree: true });
  function t2(e5) {
    let t3 = {};
    return e5.integrity && (t3.integrity = e5.integrity), e5.referrerPolicy && (t3.referrerPolicy = e5.referrerPolicy), e5.crossOrigin === `use-credentials` ? t3.credentials = `include` : e5.crossOrigin === `anonymous` ? t3.credentials = `omit` : t3.credentials = `same-origin`, t3;
  }
  function n2(e5) {
    if (e5.ep) return;
    e5.ep = true;
    let n3 = t2(e5);
    fetch(e5.href, n3);
  }
})();
var l = o(((e4) => {
  var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.portal`), r2 = /* @__PURE__ */ Symbol.for(`react.fragment`), i2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), a2 = /* @__PURE__ */ Symbol.for(`react.profiler`), o2 = /* @__PURE__ */ Symbol.for(`react.consumer`), s2 = /* @__PURE__ */ Symbol.for(`react.context`), c2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), l2 = /* @__PURE__ */ Symbol.for(`react.suspense`), u2 = /* @__PURE__ */ Symbol.for(`react.memo`), d2 = /* @__PURE__ */ Symbol.for(`react.lazy`), f2 = /* @__PURE__ */ Symbol.for(`react.activity`), p2 = Symbol.iterator;
  function m2(e5) {
    return typeof e5 != `object` || !e5 ? null : (e5 = p2 && e5[p2] || e5[`@@iterator`], typeof e5 == `function` ? e5 : null);
  }
  var h2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, g2 = Object.assign, _2 = {};
  function v2(e5, t3, n3) {
    this.props = e5, this.context = t3, this.refs = _2, this.updater = n3 || h2;
  }
  v2.prototype.isReactComponent = {}, v2.prototype.setState = function(e5, t3) {
    if (typeof e5 != `object` && typeof e5 != `function` && e5 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e5, t3, `setState`);
  }, v2.prototype.forceUpdate = function(e5) {
    this.updater.enqueueForceUpdate(this, e5, `forceUpdate`);
  };
  function y2() {
  }
  y2.prototype = v2.prototype;
  function b2(e5, t3, n3) {
    this.props = e5, this.context = t3, this.refs = _2, this.updater = n3 || h2;
  }
  var x2 = b2.prototype = new y2();
  x2.constructor = b2, g2(x2, v2.prototype), x2.isPureReactComponent = true;
  var ee2 = Array.isArray;
  function S2() {
  }
  var C2 = { H: null, A: null, T: null, S: null }, w2 = Object.prototype.hasOwnProperty;
  function te2(e5, n3, r3) {
    var i3 = r3.ref;
    return { $$typeof: t2, type: e5, key: n3, ref: i3 === void 0 ? null : i3, props: r3 };
  }
  function ne2(e5, t3) {
    return te2(e5.type, t3, e5.props);
  }
  function T2(e5) {
    return typeof e5 == `object` && !!e5 && e5.$$typeof === t2;
  }
  function re2(e5) {
    var t3 = { "=": `=0`, ":": `=2` };
    return `$` + e5.replace(/[=:]/g, function(e6) {
      return t3[e6];
    });
  }
  var ie2 = /\/+/g;
  function E2(e5, t3) {
    return typeof e5 == `object` && e5 && e5.key != null ? re2(`` + e5.key) : t3.toString(36);
  }
  function ae2(e5) {
    switch (e5.status) {
      case `fulfilled`:
        return e5.value;
      case `rejected`:
        throw e5.reason;
      default:
        switch (typeof e5.status == `string` ? e5.then(S2, S2) : (e5.status = `pending`, e5.then(function(t3) {
          e5.status === `pending` && (e5.status = `fulfilled`, e5.value = t3);
        }, function(t3) {
          e5.status === `pending` && (e5.status = `rejected`, e5.reason = t3);
        })), e5.status) {
          case `fulfilled`:
            return e5.value;
          case `rejected`:
            throw e5.reason;
        }
    }
    throw e5;
  }
  function oe2(e5, r3, i3, a3, o3) {
    var s3 = typeof e5;
    (s3 === `undefined` || s3 === `boolean`) && (e5 = null);
    var c3 = false;
    if (e5 === null) c3 = true;
    else switch (s3) {
      case `bigint`:
      case `string`:
      case `number`:
        c3 = true;
        break;
      case `object`:
        switch (e5.$$typeof) {
          case t2:
          case n2:
            c3 = true;
            break;
          case d2:
            return c3 = e5._init, oe2(c3(e5._payload), r3, i3, a3, o3);
        }
    }
    if (c3) return o3 = o3(e5), c3 = a3 === `` ? `.` + E2(e5, 0) : a3, ee2(o3) ? (i3 = ``, c3 != null && (i3 = c3.replace(ie2, `$&/`) + `/`), oe2(o3, r3, i3, ``, function(e6) {
      return e6;
    })) : o3 != null && (T2(o3) && (o3 = ne2(o3, i3 + (o3.key == null || e5 && e5.key === o3.key ? `` : (`` + o3.key).replace(ie2, `$&/`) + `/`) + c3)), r3.push(o3)), 1;
    c3 = 0;
    var l3 = a3 === `` ? `.` : a3 + `:`;
    if (ee2(e5)) for (var u3 = 0; u3 < e5.length; u3++) a3 = e5[u3], s3 = l3 + E2(a3, u3), c3 += oe2(a3, r3, i3, s3, o3);
    else if (u3 = m2(e5), typeof u3 == `function`) for (e5 = u3.call(e5), u3 = 0; !(a3 = e5.next()).done; ) a3 = a3.value, s3 = l3 + E2(a3, u3++), c3 += oe2(a3, r3, i3, s3, o3);
    else if (s3 === `object`) {
      if (typeof e5.then == `function`) return oe2(ae2(e5), r3, i3, a3, o3);
      throw r3 = String(e5), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e5).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
    }
    return c3;
  }
  function se2(e5, t3, n3) {
    if (e5 == null) return e5;
    var r3 = [], i3 = 0;
    return oe2(e5, r3, ``, ``, function(e6) {
      return t3.call(n3, e6, i3++);
    }), r3;
  }
  function D2(e5) {
    if (e5._status === -1) {
      var t3 = e5._result;
      t3 = t3(), t3.then(function(t4) {
        (e5._status === 0 || e5._status === -1) && (e5._status = 1, e5._result = t4);
      }, function(t4) {
        (e5._status === 0 || e5._status === -1) && (e5._status = 2, e5._result = t4);
      }), e5._status === -1 && (e5._status = 0, e5._result = t3);
    }
    if (e5._status === 1) return e5._result.default;
    throw e5._result;
  }
  var O2 = typeof reportError == `function` ? reportError : function(e5) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e5 == `object` && e5 && typeof e5.message == `string` ? String(e5.message) : String(e5), error: e5 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e5);
      return;
    }
    console.error(e5);
  }, k2 = { map: se2, forEach: function(e5, t3, n3) {
    se2(e5, function() {
      t3.apply(this, arguments);
    }, n3);
  }, count: function(e5) {
    var t3 = 0;
    return se2(e5, function() {
      t3++;
    }), t3;
  }, toArray: function(e5) {
    return se2(e5, function(e6) {
      return e6;
    }) || [];
  }, only: function(e5) {
    if (!T2(e5)) throw Error(`React.Children.only expected to receive a single React element child.`);
    return e5;
  } };
  e4.Activity = f2, e4.Children = k2, e4.Component = v2, e4.Fragment = r2, e4.Profiler = a2, e4.PureComponent = b2, e4.StrictMode = i2, e4.Suspense = l2, e4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C2, e4.__COMPILER_RUNTIME = { __proto__: null, c: function(e5) {
    return C2.H.useMemoCache(e5);
  } }, e4.cache = function(e5) {
    return function() {
      return e5.apply(null, arguments);
    };
  }, e4.cacheSignal = function() {
    return null;
  }, e4.cloneElement = function(e5, t3, n3) {
    if (e5 == null) throw Error(`The argument must be a React element, but you passed ` + e5 + `.`);
    var r3 = g2({}, e5.props), i3 = e5.key;
    if (t3 != null) for (a3 in t3.key !== void 0 && (i3 = `` + t3.key), t3) !w2.call(t3, a3) || a3 === `key` || a3 === `__self` || a3 === `__source` || a3 === `ref` && t3.ref === void 0 || (r3[a3] = t3[a3]);
    var a3 = arguments.length - 2;
    if (a3 === 1) r3.children = n3;
    else if (1 < a3) {
      for (var o3 = Array(a3), s3 = 0; s3 < a3; s3++) o3[s3] = arguments[s3 + 2];
      r3.children = o3;
    }
    return te2(e5.type, i3, r3);
  }, e4.createContext = function(e5) {
    return e5 = { $$typeof: s2, _currentValue: e5, _currentValue2: e5, _threadCount: 0, Provider: null, Consumer: null }, e5.Provider = e5, e5.Consumer = { $$typeof: o2, _context: e5 }, e5;
  }, e4.createElement = function(e5, t3, n3) {
    var r3, i3 = {}, a3 = null;
    if (t3 != null) for (r3 in t3.key !== void 0 && (a3 = `` + t3.key), t3) w2.call(t3, r3) && r3 !== `key` && r3 !== `__self` && r3 !== `__source` && (i3[r3] = t3[r3]);
    var o3 = arguments.length - 2;
    if (o3 === 1) i3.children = n3;
    else if (1 < o3) {
      for (var s3 = Array(o3), c3 = 0; c3 < o3; c3++) s3[c3] = arguments[c3 + 2];
      i3.children = s3;
    }
    if (e5 && e5.defaultProps) for (r3 in o3 = e5.defaultProps, o3) i3[r3] === void 0 && (i3[r3] = o3[r3]);
    return te2(e5, a3, i3);
  }, e4.createRef = function() {
    return { current: null };
  }, e4.forwardRef = function(e5) {
    return { $$typeof: c2, render: e5 };
  }, e4.isValidElement = T2, e4.lazy = function(e5) {
    return { $$typeof: d2, _payload: { _status: -1, _result: e5 }, _init: D2 };
  }, e4.memo = function(e5, t3) {
    return { $$typeof: u2, type: e5, compare: t3 === void 0 ? null : t3 };
  }, e4.startTransition = function(e5) {
    var t3 = C2.T, n3 = {};
    C2.T = n3;
    try {
      var r3 = e5(), i3 = C2.S;
      i3 !== null && i3(n3, r3), typeof r3 == `object` && r3 && typeof r3.then == `function` && r3.then(S2, O2);
    } catch (e6) {
      O2(e6);
    } finally {
      t3 !== null && n3.types !== null && (t3.types = n3.types), C2.T = t3;
    }
  }, e4.unstable_useCacheRefresh = function() {
    return C2.H.useCacheRefresh();
  }, e4.use = function(e5) {
    return C2.H.use(e5);
  }, e4.useActionState = function(e5, t3, n3) {
    return C2.H.useActionState(e5, t3, n3);
  }, e4.useCallback = function(e5, t3) {
    return C2.H.useCallback(e5, t3);
  }, e4.useContext = function(e5) {
    return C2.H.useContext(e5);
  }, e4.useDebugValue = function() {
  }, e4.useDeferredValue = function(e5, t3) {
    return C2.H.useDeferredValue(e5, t3);
  }, e4.useEffect = function(e5, t3) {
    return C2.H.useEffect(e5, t3);
  }, e4.useEffectEvent = function(e5) {
    return C2.H.useEffectEvent(e5);
  }, e4.useId = function() {
    return C2.H.useId();
  }, e4.useImperativeHandle = function(e5, t3, n3) {
    return C2.H.useImperativeHandle(e5, t3, n3);
  }, e4.useInsertionEffect = function(e5, t3) {
    return C2.H.useInsertionEffect(e5, t3);
  }, e4.useLayoutEffect = function(e5, t3) {
    return C2.H.useLayoutEffect(e5, t3);
  }, e4.useMemo = function(e5, t3) {
    return C2.H.useMemo(e5, t3);
  }, e4.useOptimistic = function(e5, t3) {
    return C2.H.useOptimistic(e5, t3);
  }, e4.useReducer = function(e5, t3, n3) {
    return C2.H.useReducer(e5, t3, n3);
  }, e4.useRef = function(e5) {
    return C2.H.useRef(e5);
  }, e4.useState = function(e5) {
    return C2.H.useState(e5);
  }, e4.useSyncExternalStore = function(e5, t3, n3) {
    return C2.H.useSyncExternalStore(e5, t3, n3);
  }, e4.useTransition = function() {
    return C2.H.useTransition();
  }, e4.version = `19.2.6`;
})), u = o(((e4, t2) => {
  t2.exports = l();
})), d = o(((e4) => {
  function t2(e5, t3) {
    var n3 = e5.length;
    e5.push(t3);
    a: for (; 0 < n3; ) {
      var r3 = n3 - 1 >>> 1, a3 = e5[r3];
      if (0 < i2(a3, t3)) e5[r3] = t3, e5[n3] = a3, n3 = r3;
      else break a;
    }
  }
  function n2(e5) {
    return e5.length === 0 ? null : e5[0];
  }
  function r2(e5) {
    if (e5.length === 0) return null;
    var t3 = e5[0], n3 = e5.pop();
    if (n3 !== t3) {
      e5[0] = n3;
      a: for (var r3 = 0, a3 = e5.length, o3 = a3 >>> 1; r3 < o3; ) {
        var s3 = 2 * (r3 + 1) - 1, c3 = e5[s3], l3 = s3 + 1, u3 = e5[l3];
        if (0 > i2(c3, n3)) l3 < a3 && 0 > i2(u3, c3) ? (e5[r3] = u3, e5[l3] = n3, r3 = l3) : (e5[r3] = c3, e5[s3] = n3, r3 = s3);
        else if (l3 < a3 && 0 > i2(u3, n3)) e5[r3] = u3, e5[l3] = n3, r3 = l3;
        else break a;
      }
    }
    return t3;
  }
  function i2(e5, t3) {
    var n3 = e5.sortIndex - t3.sortIndex;
    return n3 === 0 ? e5.id - t3.id : n3;
  }
  if (e4.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a2 = performance;
    e4.unstable_now = function() {
      return a2.now();
    };
  } else {
    var o2 = Date, s2 = o2.now();
    e4.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
  function b2(e5) {
    for (var i3 = n2(l2); i3 !== null; ) {
      if (i3.callback === null) r2(l2);
      else if (i3.startTime <= e5) r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
      else break;
      i3 = n2(l2);
    }
  }
  function x2(e5) {
    if (h2 = false, b2(e5), !m2) if (n2(c2) !== null) m2 = true, ee2 || (ee2 = true, T2());
    else {
      var t3 = n2(l2);
      t3 !== null && E2(x2, t3.startTime - e5);
    }
  }
  var ee2 = false, S2 = -1, C2 = 5, w2 = -1;
  function te2() {
    return g2 ? true : !(e4.unstable_now() - w2 < C2);
  }
  function ne2() {
    if (g2 = false, ee2) {
      var t3 = e4.unstable_now();
      w2 = t3;
      var i3 = true;
      try {
        a: {
          m2 = false, h2 && (h2 = false, v2(S2), S2 = -1), p2 = true;
          var a3 = f2;
          try {
            b: {
              for (b2(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && te2()); ) {
                var o3 = d2.callback;
                if (typeof o3 == `function`) {
                  d2.callback = null, f2 = d2.priorityLevel;
                  var s3 = o3(d2.expirationTime <= t3);
                  if (t3 = e4.unstable_now(), typeof s3 == `function`) {
                    d2.callback = s3, b2(t3), i3 = true;
                    break b;
                  }
                  d2 === n2(c2) && r2(c2), b2(t3);
                } else r2(c2);
                d2 = n2(c2);
              }
              if (d2 !== null) i3 = true;
              else {
                var u3 = n2(l2);
                u3 !== null && E2(x2, u3.startTime - t3), i3 = false;
              }
            }
            break a;
          } finally {
            d2 = null, f2 = a3, p2 = false;
          }
          i3 = void 0;
        }
      } finally {
        i3 ? T2() : ee2 = false;
      }
    }
  }
  var T2;
  if (typeof y2 == `function`) T2 = function() {
    y2(ne2);
  };
  else if (typeof MessageChannel < `u`) {
    var re2 = new MessageChannel(), ie2 = re2.port2;
    re2.port1.onmessage = ne2, T2 = function() {
      ie2.postMessage(null);
    };
  } else T2 = function() {
    _2(ne2, 0);
  };
  function E2(t3, n3) {
    S2 = _2(function() {
      t3(e4.unstable_now());
    }, n3);
  }
  e4.unstable_IdlePriority = 5, e4.unstable_ImmediatePriority = 1, e4.unstable_LowPriority = 4, e4.unstable_NormalPriority = 3, e4.unstable_Profiling = null, e4.unstable_UserBlockingPriority = 2, e4.unstable_cancelCallback = function(e5) {
    e5.callback = null;
  }, e4.unstable_forceFrameRate = function(e5) {
    0 > e5 || 125 < e5 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : C2 = 0 < e5 ? Math.floor(1e3 / e5) : 5;
  }, e4.unstable_getCurrentPriorityLevel = function() {
    return f2;
  }, e4.unstable_next = function(e5) {
    switch (f2) {
      case 1:
      case 2:
      case 3:
        var t3 = 3;
        break;
      default:
        t3 = f2;
    }
    var n3 = f2;
    f2 = t3;
    try {
      return e5();
    } finally {
      f2 = n3;
    }
  }, e4.unstable_requestPaint = function() {
    g2 = true;
  }, e4.unstable_runWithPriority = function(e5, t3) {
    switch (e5) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e5 = 3;
    }
    var n3 = f2;
    f2 = e5;
    try {
      return t3();
    } finally {
      f2 = n3;
    }
  }, e4.unstable_scheduleCallback = function(r3, i3, a3) {
    var o3 = e4.unstable_now();
    switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
      case 1:
        var s3 = -1;
        break;
      case 2:
        s3 = 250;
        break;
      case 5:
        s3 = 1073741823;
        break;
      case 4:
        s3 = 1e4;
        break;
      default:
        s3 = 5e3;
    }
    return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (v2(S2), S2 = -1) : h2 = true, E2(x2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, ee2 || (ee2 = true, T2()))), r3;
  }, e4.unstable_shouldYield = te2, e4.unstable_wrapCallback = function(e5) {
    var t3 = f2;
    return function() {
      var n3 = f2;
      f2 = t3;
      try {
        return e5.apply(this, arguments);
      } finally {
        f2 = n3;
      }
    };
  };
})), f = o(((e4, t2) => {
  t2.exports = d();
})), p = o(((e4) => {
  var t2 = u();
  function n2(e5) {
    var t3 = `https://react.dev/errors/` + e5;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e5 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function r2() {
  }
  var i2 = { d: { f: r2, r: function() {
    throw Error(n2(522));
  }, D: r2, C: r2, L: r2, m: r2, X: r2, S: r2, M: r2 }, p: 0, findDOMNode: null }, a2 = /* @__PURE__ */ Symbol.for(`react.portal`);
  function o2(e5, t3, n3) {
    var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: a2, key: r3 == null ? null : `` + r3, children: e5, containerInfo: t3, implementation: n3 };
  }
  var s2 = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c2(e5, t3) {
    if (e5 === `font`) return ``;
    if (typeof t3 == `string`) return t3 === `use-credentials` ? t3 : ``;
  }
  e4.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i2, e4.createPortal = function(e5, t3) {
    var r3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11) throw Error(n2(299));
    return o2(e5, t3, null, r3);
  }, e4.flushSync = function(e5) {
    var t3 = s2.T, n3 = i2.p;
    try {
      if (s2.T = null, i2.p = 2, e5) return e5();
    } finally {
      s2.T = t3, i2.p = n3, i2.d.f();
    }
  }, e4.preconnect = function(e5, t3) {
    typeof e5 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, i2.d.C(e5, t3));
  }, e4.prefetchDNS = function(e5) {
    typeof e5 == `string` && i2.d.D(e5);
  }, e4.preinit = function(e5, t3) {
    if (typeof e5 == `string` && t3 && typeof t3.as == `string`) {
      var n3 = t3.as, r3 = c2(n3, t3.crossOrigin), a3 = typeof t3.integrity == `string` ? t3.integrity : void 0, o3 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
      n3 === `style` ? i2.d.S(e5, typeof t3.precedence == `string` ? t3.precedence : void 0, { crossOrigin: r3, integrity: a3, fetchPriority: o3 }) : n3 === `script` && i2.d.X(e5, { crossOrigin: r3, integrity: a3, fetchPriority: o3, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
    }
  }, e4.preinitModule = function(e5, t3) {
    if (typeof e5 == `string`) if (typeof t3 == `object` && t3) {
      if (t3.as == null || t3.as === `script`) {
        var n3 = c2(t3.as, t3.crossOrigin);
        i2.d.M(e5, { crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
      }
    } else t3 ?? i2.d.M(e5);
  }, e4.preload = function(e5, t3) {
    if (typeof e5 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
      var n3 = t3.as, r3 = c2(n3, t3.crossOrigin);
      i2.d.L(e5, n3, { crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0 });
    }
  }, e4.preloadModule = function(e5, t3) {
    if (typeof e5 == `string`) if (t3) {
      var n3 = c2(t3.as, t3.crossOrigin);
      i2.d.m(e5, { as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0 });
    } else i2.d.m(e5);
  }, e4.requestFormReset = function(e5) {
    i2.d.r(e5);
  }, e4.unstable_batchedUpdates = function(e5, t3) {
    return e5(t3);
  }, e4.useFormState = function(e5, t3, n3) {
    return s2.H.useFormState(e5, t3, n3);
  }, e4.useFormStatus = function() {
    return s2.H.useHostTransitionStatus();
  }, e4.version = `19.2.6`;
})), m = o(((e4, t2) => {
  function n2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e5) {
      console.error(e5);
    }
  }
  n2(), t2.exports = p();
})), h = o(((e4) => {
  var t2 = f(), n2 = u(), r2 = m();
  function i2(e5) {
    var t3 = `https://react.dev/errors/` + e5;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e5 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function a2(e5) {
    return !(!e5 || e5.nodeType !== 1 && e5.nodeType !== 9 && e5.nodeType !== 11);
  }
  function o2(e5) {
    var t3 = e5, n3 = e5;
    if (e5.alternate) for (; t3.return; ) t3 = t3.return;
    else {
      e5 = t3;
      do
        t3 = e5, t3.flags & 4098 && (n3 = t3.return), e5 = t3.return;
      while (e5);
    }
    return t3.tag === 3 ? n3 : null;
  }
  function s2(e5) {
    if (e5.tag === 13) {
      var t3 = e5.memoizedState;
      if (t3 === null && (e5 = e5.alternate, e5 !== null && (t3 = e5.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function c2(e5) {
    if (e5.tag === 31) {
      var t3 = e5.memoizedState;
      if (t3 === null && (e5 = e5.alternate, e5 !== null && (t3 = e5.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function l2(e5) {
    if (o2(e5) !== e5) throw Error(i2(188));
  }
  function d2(e5) {
    var t3 = e5.alternate;
    if (!t3) {
      if (t3 = o2(e5), t3 === null) throw Error(i2(188));
      return t3 === e5 ? e5 : null;
    }
    for (var n3 = e5, r3 = t3; ; ) {
      var a3 = n3.return;
      if (a3 === null) break;
      var s3 = a3.alternate;
      if (s3 === null) {
        if (r3 = a3.return, r3 !== null) {
          n3 = r3;
          continue;
        }
        break;
      }
      if (a3.child === s3.child) {
        for (s3 = a3.child; s3; ) {
          if (s3 === n3) return l2(a3), e5;
          if (s3 === r3) return l2(a3), t3;
          s3 = s3.sibling;
        }
        throw Error(i2(188));
      }
      if (n3.return !== r3.return) n3 = a3, r3 = s3;
      else {
        for (var c3 = false, u2 = a3.child; u2; ) {
          if (u2 === n3) {
            c3 = true, n3 = a3, r3 = s3;
            break;
          }
          if (u2 === r3) {
            c3 = true, r3 = a3, n3 = s3;
            break;
          }
          u2 = u2.sibling;
        }
        if (!c3) {
          for (u2 = s3.child; u2; ) {
            if (u2 === n3) {
              c3 = true, n3 = s3, r3 = a3;
              break;
            }
            if (u2 === r3) {
              c3 = true, r3 = s3, n3 = a3;
              break;
            }
            u2 = u2.sibling;
          }
          if (!c3) throw Error(i2(189));
        }
      }
      if (n3.alternate !== r3) throw Error(i2(190));
    }
    if (n3.tag !== 3) throw Error(i2(188));
    return n3.stateNode.current === n3 ? e5 : t3;
  }
  function p2(e5) {
    var t3 = e5.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e5;
    for (e5 = e5.child; e5 !== null; ) {
      if (t3 = p2(e5), t3 !== null) return t3;
      e5 = e5.sibling;
    }
    return null;
  }
  var h2 = Object.assign, g2 = /* @__PURE__ */ Symbol.for(`react.element`), _2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), v2 = /* @__PURE__ */ Symbol.for(`react.portal`), y2 = /* @__PURE__ */ Symbol.for(`react.fragment`), b2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), x2 = /* @__PURE__ */ Symbol.for(`react.profiler`), ee2 = /* @__PURE__ */ Symbol.for(`react.consumer`), S2 = /* @__PURE__ */ Symbol.for(`react.context`), C2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), w2 = /* @__PURE__ */ Symbol.for(`react.suspense`), te2 = /* @__PURE__ */ Symbol.for(`react.suspense_list`), ne2 = /* @__PURE__ */ Symbol.for(`react.memo`), T2 = /* @__PURE__ */ Symbol.for(`react.lazy`), re2 = /* @__PURE__ */ Symbol.for(`react.activity`), ie2 = /* @__PURE__ */ Symbol.for(`react.memo_cache_sentinel`), E2 = Symbol.iterator;
  function ae2(e5) {
    return typeof e5 != `object` || !e5 ? null : (e5 = E2 && e5[E2] || e5[`@@iterator`], typeof e5 == `function` ? e5 : null);
  }
  var oe2 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
  function se2(e5) {
    if (e5 == null) return null;
    if (typeof e5 == `function`) return e5.$$typeof === oe2 ? null : e5.displayName || e5.name || null;
    if (typeof e5 == `string`) return e5;
    switch (e5) {
      case y2:
        return `Fragment`;
      case x2:
        return `Profiler`;
      case b2:
        return `StrictMode`;
      case w2:
        return `Suspense`;
      case te2:
        return `SuspenseList`;
      case re2:
        return `Activity`;
    }
    if (typeof e5 == `object`) switch (e5.$$typeof) {
      case v2:
        return `Portal`;
      case S2:
        return e5.displayName || `Context`;
      case ee2:
        return (e5._context.displayName || `Context`) + `.Consumer`;
      case C2:
        var t3 = e5.render;
        return e5 = e5.displayName, e5 || (e5 = (e5 = t3.displayName || t3.name || ``, e5 === `` ? `ForwardRef` : `ForwardRef(` + e5 + `)`)), e5;
      case ne2:
        return t3 = e5.displayName || null, t3 === null ? se2(e5.type) || `Memo` : t3;
      case T2:
        t3 = e5._payload, e5 = e5._init;
        try {
          return se2(e5(t3));
        } catch {
        }
    }
    return null;
  }
  var D2 = Array.isArray, O2 = n2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k2 = r2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A2 = { pending: false, data: null, method: null, action: null }, ce2 = [], le2 = -1;
  function ue2(e5) {
    return { current: e5 };
  }
  function de2(e5) {
    0 > le2 || (e5.current = ce2[le2], ce2[le2] = null, le2--);
  }
  function j2(e5, t3) {
    le2++, ce2[le2] = e5.current, e5.current = t3;
  }
  var fe2 = ue2(null), pe2 = ue2(null), me2 = ue2(null), he2 = ue2(null);
  function ge2(e5, t3) {
    switch (j2(me2, t3), j2(pe2, e5), j2(fe2, null), t3.nodeType) {
      case 9:
      case 11:
        e5 = (e5 = t3.documentElement) && (e5 = e5.namespaceURI) ? Vd(e5) : 0;
        break;
      default:
        if (e5 = t3.tagName, t3 = t3.namespaceURI) t3 = Vd(t3), e5 = Hd(t3, e5);
        else switch (e5) {
          case `svg`:
            e5 = 1;
            break;
          case `math`:
            e5 = 2;
            break;
          default:
            e5 = 0;
        }
    }
    de2(fe2), j2(fe2, e5);
  }
  function _e4() {
    de2(fe2), de2(pe2), de2(me2);
  }
  function ve2(e5) {
    e5.memoizedState !== null && j2(he2, e5);
    var t3 = fe2.current, n3 = Hd(t3, e5.type);
    t3 !== n3 && (j2(pe2, e5), j2(fe2, n3));
  }
  function ye2(e5) {
    pe2.current === e5 && (de2(fe2), de2(pe2)), he2.current === e5 && (de2(he2), Qf._currentValue = A2);
  }
  var be2, xe2;
  function Se2(e5) {
    if (be2 === void 0) try {
      throw Error();
    } catch (e6) {
      var t3 = e6.stack.trim().match(/\n( *(at )?)/);
      be2 = t3 && t3[1] || ``, xe2 = -1 < e6.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e6.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
    }
    return `
` + be2 + e5 + xe2;
  }
  var Ce2 = false;
  function we2(e5, t3) {
    if (!e5 || Ce2) return ``;
    Ce2 = true;
    var n3 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r3 = { DetermineComponentFrameRoot: function() {
        try {
          if (t3) {
            var n4 = function() {
              throw Error();
            };
            if (Object.defineProperty(n4.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == `object` && Reflect.construct) {
              try {
                Reflect.construct(n4, []);
              } catch (e6) {
                var r4 = e6;
              }
              Reflect.construct(e5, [], n4);
            } else {
              try {
                n4.call();
              } catch (e6) {
                r4 = e6;
              }
              e5.call(n4.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (e6) {
              r4 = e6;
            }
            (n4 = e5()) && typeof n4.catch == `function` && n4.catch(function() {
            });
          }
        } catch (e6) {
          if (e6 && r4 && typeof e6.stack == `string`) return [e6.stack, r4.stack];
        }
        return [null, null];
      } };
      r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i3 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
      i3 && i3.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
      var a3 = r3.DetermineComponentFrameRoot(), o3 = a3[0], s3 = a3[1];
      if (o3 && s3) {
        var c3 = o3.split(`
`), l3 = s3.split(`
`);
        for (i3 = r3 = 0; r3 < c3.length && !c3[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
        for (; i3 < l3.length && !l3[i3].includes(`DetermineComponentFrameRoot`); ) i3++;
        if (r3 === c3.length || i3 === l3.length) for (r3 = c3.length - 1, i3 = l3.length - 1; 1 <= r3 && 0 <= i3 && c3[r3] !== l3[i3]; ) i3--;
        for (; 1 <= r3 && 0 <= i3; r3--, i3--) if (c3[r3] !== l3[i3]) {
          if (r3 !== 1 || i3 !== 1) do
            if (r3--, i3--, 0 > i3 || c3[r3] !== l3[i3]) {
              var u2 = `
` + c3[r3].replace(` at new `, ` at `);
              return e5.displayName && u2.includes(`<anonymous>`) && (u2 = u2.replace(`<anonymous>`, e5.displayName)), u2;
            }
          while (1 <= r3 && 0 <= i3);
          break;
        }
      }
    } finally {
      Ce2 = false, Error.prepareStackTrace = n3;
    }
    return (n3 = e5 ? e5.displayName || e5.name : ``) ? Se2(n3) : ``;
  }
  function Te2(e5, t3) {
    switch (e5.tag) {
      case 26:
      case 27:
      case 5:
        return Se2(e5.type);
      case 16:
        return Se2(`Lazy`);
      case 13:
        return e5.child !== t3 && t3 !== null ? Se2(`Suspense Fallback`) : Se2(`Suspense`);
      case 19:
        return Se2(`SuspenseList`);
      case 0:
      case 15:
        return we2(e5.type, false);
      case 11:
        return we2(e5.type.render, false);
      case 1:
        return we2(e5.type, true);
      case 31:
        return Se2(`Activity`);
      default:
        return ``;
    }
  }
  function Ee2(e5) {
    try {
      var t3 = ``, n3 = null;
      do
        t3 += Te2(e5, n3), n3 = e5, e5 = e5.return;
      while (e5);
      return t3;
    } catch (e6) {
      return `
Error generating stack: ` + e6.message + `
` + e6.stack;
    }
  }
  var M2 = Object.prototype.hasOwnProperty, De2 = t2.unstable_scheduleCallback, Oe2 = t2.unstable_cancelCallback, ke2 = t2.unstable_shouldYield, Ae2 = t2.unstable_requestPaint, je2 = t2.unstable_now, Me2 = t2.unstable_getCurrentPriorityLevel, Ne2 = t2.unstable_ImmediatePriority, Pe2 = t2.unstable_UserBlockingPriority, Fe2 = t2.unstable_NormalPriority, Ie2 = t2.unstable_LowPriority, Le2 = t2.unstable_IdlePriority, Re2 = t2.log, ze2 = t2.unstable_setDisableYieldValue, Be2 = null, N2 = null;
  function P2(e5) {
    if (typeof Re2 == `function` && ze2(e5), N2 && typeof N2.setStrictMode == `function`) try {
      N2.setStrictMode(Be2, e5);
    } catch {
    }
  }
  var Ve2 = Math.clz32 ? Math.clz32 : We2, He2 = Math.log, Ue2 = Math.LN2;
  function We2(e5) {
    return e5 >>>= 0, e5 === 0 ? 32 : 31 - (He2(e5) / Ue2 | 0) | 0;
  }
  var Ge2 = 256, Ke2 = 262144, F2 = 4194304;
  function qe2(e5) {
    var t3 = e5 & 42;
    if (t3 !== 0) return t3;
    switch (e5 & -e5) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e5 & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e5 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e5 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e5;
    }
  }
  function Je2(e5, t3, n3) {
    var r3 = e5.pendingLanes;
    if (r3 === 0) return 0;
    var i3 = 0, a3 = e5.suspendedLanes, o3 = e5.pingedLanes;
    e5 = e5.warmLanes;
    var s3 = r3 & 134217727;
    return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o3 === 0 ? n3 || (n3 = r3 & ~e5, n3 !== 0 && (i3 = qe2(n3))) : i3 = qe2(o3) : i3 = qe2(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o3 &= s3, o3 === 0 ? n3 || (n3 = s3 & ~e5, n3 !== 0 && (i3 = qe2(n3))) : i3 = qe2(o3)) : i3 = qe2(r3)), i3 === 0 ? 0 : t3 !== 0 && t3 !== i3 && (t3 & a3) === 0 && (a3 = i3 & -i3, n3 = t3 & -t3, a3 >= n3 || a3 === 32 && n3 & 4194048) ? t3 : i3;
  }
  function Ye2(e5, t3) {
    return (e5.pendingLanes & ~(e5.suspendedLanes & ~e5.pingedLanes) & t3) === 0;
  }
  function Xe2(e5, t3) {
    switch (e5) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t3 + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t3 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ze2() {
    var e5 = F2;
    return F2 <<= 1, !(F2 & 62914560) && (F2 = 4194304), e5;
  }
  function Qe2(e5) {
    for (var t3 = [], n3 = 0; 31 > n3; n3++) t3.push(e5);
    return t3;
  }
  function $e2(e5, t3) {
    e5.pendingLanes |= t3, t3 !== 268435456 && (e5.suspendedLanes = 0, e5.pingedLanes = 0, e5.warmLanes = 0);
  }
  function et2(e5, t3, n3, r3, i3, a3) {
    var o3 = e5.pendingLanes;
    e5.pendingLanes = n3, e5.suspendedLanes = 0, e5.pingedLanes = 0, e5.warmLanes = 0, e5.expiredLanes &= n3, e5.entangledLanes &= n3, e5.errorRecoveryDisabledLanes &= n3, e5.shellSuspendCounter = 0;
    var s3 = e5.entanglements, c3 = e5.expirationTimes, l3 = e5.hiddenUpdates;
    for (n3 = o3 & ~n3; 0 < n3; ) {
      var u2 = 31 - Ve2(n3), d3 = 1 << u2;
      s3[u2] = 0, c3[u2] = -1;
      var f2 = l3[u2];
      if (f2 !== null) for (l3[u2] = null, u2 = 0; u2 < f2.length; u2++) {
        var p3 = f2[u2];
        p3 !== null && (p3.lane &= -536870913);
      }
      n3 &= ~d3;
    }
    r3 !== 0 && tt2(e5, r3, 0), a3 !== 0 && i3 === 0 && e5.tag !== 0 && (e5.suspendedLanes |= a3 & ~(o3 & ~t3));
  }
  function tt2(e5, t3, n3) {
    e5.pendingLanes |= t3, e5.suspendedLanes &= ~t3;
    var r3 = 31 - Ve2(t3);
    e5.entangledLanes |= t3, e5.entanglements[r3] = e5.entanglements[r3] | 1073741824 | n3 & 261930;
  }
  function nt2(e5, t3) {
    var n3 = e5.entangledLanes |= t3;
    for (e5 = e5.entanglements; n3; ) {
      var r3 = 31 - Ve2(n3), i3 = 1 << r3;
      i3 & t3 | e5[r3] & t3 && (e5[r3] |= t3), n3 &= ~i3;
    }
  }
  function rt2(e5, t3) {
    var n3 = t3 & -t3;
    return n3 = n3 & 42 ? 1 : it2(n3), (n3 & (e5.suspendedLanes | t3)) === 0 ? n3 : 0;
  }
  function it2(e5) {
    switch (e5) {
      case 2:
        e5 = 1;
        break;
      case 8:
        e5 = 4;
        break;
      case 32:
        e5 = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e5 = 128;
        break;
      case 268435456:
        e5 = 134217728;
        break;
      default:
        e5 = 0;
    }
    return e5;
  }
  function at2(e5) {
    return e5 &= -e5, 2 < e5 ? 8 < e5 ? e5 & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function ot2() {
    var e5 = k2.p;
    return e5 === 0 ? (e5 = window.event, e5 === void 0 ? 32 : mp(e5.type)) : e5;
  }
  function st2(e5, t3) {
    var n3 = k2.p;
    try {
      return k2.p = e5, t3();
    } finally {
      k2.p = n3;
    }
  }
  var ct2 = Math.random().toString(36).slice(2), lt2 = `__reactFiber$` + ct2, ut2 = `__reactProps$` + ct2, dt2 = `__reactContainer$` + ct2, ft2 = `__reactEvents$` + ct2, pt2 = `__reactListeners$` + ct2, mt2 = `__reactHandles$` + ct2, ht2 = `__reactResources$` + ct2, gt2 = `__reactMarker$` + ct2;
  function _t4(e5) {
    delete e5[lt2], delete e5[ut2], delete e5[ft2], delete e5[pt2], delete e5[mt2];
  }
  function vt2(e5) {
    var t3 = e5[lt2];
    if (t3) return t3;
    for (var n3 = e5.parentNode; n3; ) {
      if (t3 = n3[dt2] || n3[lt2]) {
        if (n3 = t3.alternate, t3.child !== null || n3 !== null && n3.child !== null) for (e5 = df(e5); e5 !== null; ) {
          if (n3 = e5[lt2]) return n3;
          e5 = df(e5);
        }
        return t3;
      }
      e5 = n3, n3 = e5.parentNode;
    }
    return null;
  }
  function yt2(e5) {
    if (e5 = e5[lt2] || e5[dt2]) {
      var t3 = e5.tag;
      if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3) return e5;
    }
    return null;
  }
  function bt2(e5) {
    var t3 = e5.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e5.stateNode;
    throw Error(i2(33));
  }
  function xt2(e5) {
    var t3 = e5[ht2];
    return t3 || (t3 = e5[ht2] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t3;
  }
  function St2(e5) {
    e5[gt2] = true;
  }
  var Ct2 = /* @__PURE__ */ new Set(), wt2 = {};
  function Tt2(e5, t3) {
    Et2(e5, t3), Et2(e5 + `Capture`, t3);
  }
  function Et2(e5, t3) {
    for (wt2[e5] = t3, e5 = 0; e5 < t3.length; e5++) Ct2.add(t3[e5]);
  }
  var Dt2 = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), Ot2 = {}, kt2 = {};
  function At2(e5) {
    return M2.call(kt2, e5) ? true : M2.call(Ot2, e5) ? false : Dt2.test(e5) ? kt2[e5] = true : (Ot2[e5] = true, false);
  }
  function jt2(e5, t3, n3) {
    if (At2(t3)) if (n3 === null) e5.removeAttribute(t3);
    else {
      switch (typeof n3) {
        case `undefined`:
        case `function`:
        case `symbol`:
          e5.removeAttribute(t3);
          return;
        case `boolean`:
          var r3 = t3.toLowerCase().slice(0, 5);
          if (r3 !== `data-` && r3 !== `aria-`) {
            e5.removeAttribute(t3);
            return;
          }
      }
      e5.setAttribute(t3, `` + n3);
    }
  }
  function Mt2(e5, t3, n3) {
    if (n3 === null) e5.removeAttribute(t3);
    else {
      switch (typeof n3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e5.removeAttribute(t3);
          return;
      }
      e5.setAttribute(t3, `` + n3);
    }
  }
  function Nt2(e5, t3, n3, r3) {
    if (r3 === null) e5.removeAttribute(n3);
    else {
      switch (typeof r3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e5.removeAttribute(n3);
          return;
      }
      e5.setAttributeNS(t3, n3, `` + r3);
    }
  }
  function Pt2(e5) {
    switch (typeof e5) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e5;
      case `object`:
        return e5;
      default:
        return ``;
    }
  }
  function Ft2(e5) {
    var t3 = e5.type;
    return (e5 = e5.nodeName) && e5.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
  }
  function It2(e5, t3, n3) {
    var r3 = Object.getOwnPropertyDescriptor(e5.constructor.prototype, t3);
    if (!e5.hasOwnProperty(t3) && r3 !== void 0 && typeof r3.get == `function` && typeof r3.set == `function`) {
      var i3 = r3.get, a3 = r3.set;
      return Object.defineProperty(e5, t3, { configurable: true, get: function() {
        return i3.call(this);
      }, set: function(e6) {
        n3 = `` + e6, a3.call(this, e6);
      } }), Object.defineProperty(e5, t3, { enumerable: r3.enumerable }), { getValue: function() {
        return n3;
      }, setValue: function(e6) {
        n3 = `` + e6;
      }, stopTracking: function() {
        e5._valueTracker = null, delete e5[t3];
      } };
    }
  }
  function Lt2(e5) {
    if (!e5._valueTracker) {
      var t3 = Ft2(e5) ? `checked` : `value`;
      e5._valueTracker = It2(e5, t3, `` + e5[t3]);
    }
  }
  function Rt2(e5) {
    if (!e5) return false;
    var t3 = e5._valueTracker;
    if (!t3) return true;
    var n3 = t3.getValue(), r3 = ``;
    return e5 && (r3 = Ft2(e5) ? e5.checked ? `true` : `false` : e5.value), e5 = r3, e5 === n3 ? false : (t3.setValue(e5), true);
  }
  function zt2(e5) {
    if (e5 || (e5 = typeof document < `u` ? document : void 0), e5 === void 0) return null;
    try {
      return e5.activeElement || e5.body;
    } catch {
      return e5.body;
    }
  }
  var Bt2 = /[\n"\\]/g;
  function Vt2(e5) {
    return e5.replace(Bt2, function(e6) {
      return `\\` + e6.charCodeAt(0).toString(16) + ` `;
    });
  }
  function Ht2(e5, t3, n3, r3, i3, a3, o3, s3) {
    e5.name = ``, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` ? e5.type = o3 : e5.removeAttribute(`type`), t3 == null ? o3 !== `submit` && o3 !== `reset` || e5.removeAttribute(`value`) : o3 === `number` ? (t3 === 0 && e5.value === `` || e5.value != t3) && (e5.value = `` + Pt2(t3)) : e5.value !== `` + Pt2(t3) && (e5.value = `` + Pt2(t3)), t3 == null ? n3 == null ? r3 != null && e5.removeAttribute(`value`) : Wt2(e5, o3, Pt2(n3)) : Wt2(e5, o3, Pt2(t3)), i3 == null && a3 != null && (e5.defaultChecked = !!a3), i3 != null && (e5.checked = i3 && typeof i3 != `function` && typeof i3 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e5.name = `` + Pt2(s3) : e5.removeAttribute(`name`);
  }
  function Ut2(e5, t3, n3, r3, i3, a3, o3, s3) {
    if (a3 != null && typeof a3 != `function` && typeof a3 != `symbol` && typeof a3 != `boolean` && (e5.type = a3), t3 != null || n3 != null) {
      if (!(a3 !== `submit` && a3 !== `reset` || t3 != null)) {
        Lt2(e5);
        return;
      }
      n3 = n3 == null ? `` : `` + Pt2(n3), t3 = t3 == null ? n3 : `` + Pt2(t3), s3 || t3 === e5.value || (e5.value = t3), e5.defaultValue = t3;
    }
    r3 ?? (r3 = i3), r3 = typeof r3 != `function` && typeof r3 != `symbol` && !!r3, e5.checked = s3 ? e5.checked : !!r3, e5.defaultChecked = !!r3, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` && (e5.name = o3), Lt2(e5);
  }
  function Wt2(e5, t3, n3) {
    t3 === `number` && zt2(e5.ownerDocument) === e5 || e5.defaultValue === `` + n3 || (e5.defaultValue = `` + n3);
  }
  function Gt2(e5, t3, n3, r3) {
    if (e5 = e5.options, t3) {
      t3 = {};
      for (var i3 = 0; i3 < n3.length; i3++) t3[`$` + n3[i3]] = true;
      for (n3 = 0; n3 < e5.length; n3++) i3 = t3.hasOwnProperty(`$` + e5[n3].value), e5[n3].selected !== i3 && (e5[n3].selected = i3), i3 && r3 && (e5[n3].defaultSelected = true);
    } else {
      for (n3 = `` + Pt2(n3), t3 = null, i3 = 0; i3 < e5.length; i3++) {
        if (e5[i3].value === n3) {
          e5[i3].selected = true, r3 && (e5[i3].defaultSelected = true);
          return;
        }
        t3 !== null || e5[i3].disabled || (t3 = e5[i3]);
      }
      t3 !== null && (t3.selected = true);
    }
  }
  function Kt2(e5, t3, n3) {
    if (t3 != null && (t3 = `` + Pt2(t3), t3 !== e5.value && (e5.value = t3), n3 == null)) {
      e5.defaultValue !== t3 && (e5.defaultValue = t3);
      return;
    }
    e5.defaultValue = n3 == null ? `` : `` + Pt2(n3);
  }
  function I2(e5, t3, n3, r3) {
    if (t3 == null) {
      if (r3 != null) {
        if (n3 != null) throw Error(i2(92));
        if (D2(r3)) {
          if (1 < r3.length) throw Error(i2(93));
          r3 = r3[0];
        }
        n3 = r3;
      }
      n3 ?? (n3 = ``), t3 = n3;
    }
    n3 = Pt2(t3), e5.defaultValue = n3, r3 = e5.textContent, r3 === n3 && r3 !== `` && r3 !== null && (e5.value = r3), Lt2(e5);
  }
  function qt2(e5, t3) {
    if (t3) {
      var n3 = e5.firstChild;
      if (n3 && n3 === e5.lastChild && n3.nodeType === 3) {
        n3.nodeValue = t3;
        return;
      }
    }
    e5.textContent = t3;
  }
  var Jt2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function Yt2(e5, t3, n3) {
    var r3 = t3.indexOf(`--`) === 0;
    n3 == null || typeof n3 == `boolean` || n3 === `` ? r3 ? e5.setProperty(t3, ``) : t3 === `float` ? e5.cssFloat = `` : e5[t3] = `` : r3 ? e5.setProperty(t3, n3) : typeof n3 != `number` || n3 === 0 || Jt2.has(t3) ? t3 === `float` ? e5.cssFloat = n3 : e5[t3] = (`` + n3).trim() : e5[t3] = n3 + `px`;
  }
  function Xt2(e5, t3, n3) {
    if (t3 != null && typeof t3 != `object`) throw Error(i2(62));
    if (e5 = e5.style, n3 != null) {
      for (var r3 in n3) !n3.hasOwnProperty(r3) || t3 != null && t3.hasOwnProperty(r3) || (r3.indexOf(`--`) === 0 ? e5.setProperty(r3, ``) : r3 === `float` ? e5.cssFloat = `` : e5[r3] = ``);
      for (var a3 in t3) r3 = t3[a3], t3.hasOwnProperty(a3) && n3[a3] !== r3 && Yt2(e5, a3, r3);
    } else for (var o3 in t3) t3.hasOwnProperty(o3) && Yt2(e5, o3, t3[o3]);
  }
  function Zt2(e5) {
    if (e5.indexOf(`-`) === -1) return false;
    switch (e5) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var Qt2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), $t2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function en2(e5) {
    return $t2.test(`` + e5) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e5;
  }
  function tn2() {
  }
  var nn2 = null;
  function rn2(e5) {
    return e5 = e5.target || e5.srcElement || window, e5.correspondingUseElement && (e5 = e5.correspondingUseElement), e5.nodeType === 3 ? e5.parentNode : e5;
  }
  var an2 = null, on2 = null;
  function sn2(e5) {
    var t3 = yt2(e5);
    if (t3 && (e5 = t3.stateNode)) {
      var n3 = e5[ut2] || null;
      a: switch (e5 = t3.stateNode, t3.type) {
        case `input`:
          if (Ht2(e5, n3.value, n3.defaultValue, n3.defaultValue, n3.checked, n3.defaultChecked, n3.type, n3.name), t3 = n3.name, n3.type === `radio` && t3 != null) {
            for (n3 = e5; n3.parentNode; ) n3 = n3.parentNode;
            for (n3 = n3.querySelectorAll(`input[name="` + Vt2(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n3.length; t3++) {
              var r3 = n3[t3];
              if (r3 !== e5 && r3.form === e5.form) {
                var a3 = r3[ut2] || null;
                if (!a3) throw Error(i2(90));
                Ht2(r3, a3.value, a3.defaultValue, a3.defaultValue, a3.checked, a3.defaultChecked, a3.type, a3.name);
              }
            }
            for (t3 = 0; t3 < n3.length; t3++) r3 = n3[t3], r3.form === e5.form && Rt2(r3);
          }
          break a;
        case `textarea`:
          Kt2(e5, n3.value, n3.defaultValue);
          break a;
        case `select`:
          t3 = n3.value, t3 != null && Gt2(e5, !!n3.multiple, t3, false);
      }
    }
  }
  var cn2 = false;
  function ln2(e5, t3, n3) {
    if (cn2) return e5(t3, n3);
    cn2 = true;
    try {
      return e5(t3);
    } finally {
      if (cn2 = false, (an2 !== null || on2 !== null) && (bu(), an2 && (t3 = an2, e5 = on2, on2 = an2 = null, sn2(t3), e5))) for (t3 = 0; t3 < e5.length; t3++) sn2(e5[t3]);
    }
  }
  function un2(e5, t3) {
    var n3 = e5.stateNode;
    if (n3 === null) return null;
    var r3 = n3[ut2] || null;
    if (r3 === null) return null;
    n3 = r3[t3];
    a: switch (t3) {
      case `onClick`:
      case `onClickCapture`:
      case `onDoubleClick`:
      case `onDoubleClickCapture`:
      case `onMouseDown`:
      case `onMouseDownCapture`:
      case `onMouseMove`:
      case `onMouseMoveCapture`:
      case `onMouseUp`:
      case `onMouseUpCapture`:
      case `onMouseEnter`:
        (r3 = !r3.disabled) || (e5 = e5.type, r3 = !(e5 === `button` || e5 === `input` || e5 === `select` || e5 === `textarea`)), e5 = !r3;
        break a;
      default:
        e5 = false;
    }
    if (e5) return null;
    if (n3 && typeof n3 != `function`) throw Error(i2(231, t3, typeof n3));
    return n3;
  }
  var dn2 = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), fn2 = false;
  if (dn2) try {
    var pn2 = {};
    Object.defineProperty(pn2, "passive", { get: function() {
      fn2 = true;
    } }), window.addEventListener(`test`, pn2, pn2), window.removeEventListener(`test`, pn2, pn2);
  } catch {
    fn2 = false;
  }
  var mn2 = null, hn2 = null, gn2 = null;
  function _n4() {
    if (gn2) return gn2;
    var e5, t3 = hn2, n3 = t3.length, r3, i3 = `value` in mn2 ? mn2.value : mn2.textContent, a3 = i3.length;
    for (e5 = 0; e5 < n3 && t3[e5] === i3[e5]; e5++) ;
    var o3 = n3 - e5;
    for (r3 = 1; r3 <= o3 && t3[n3 - r3] === i3[a3 - r3]; r3++) ;
    return gn2 = i3.slice(e5, 1 < r3 ? 1 - r3 : void 0);
  }
  function vn2(e5) {
    var t3 = e5.keyCode;
    return `charCode` in e5 ? (e5 = e5.charCode, e5 === 0 && t3 === 13 && (e5 = 13)) : e5 = t3, e5 === 10 && (e5 = 13), 32 <= e5 || e5 === 13 ? e5 : 0;
  }
  function yn2() {
    return true;
  }
  function bn2() {
    return false;
  }
  function xn2(e5) {
    function t3(t4, n3, r3, i3, a3) {
      for (var o3 in this._reactName = t4, this._targetInst = r3, this.type = n3, this.nativeEvent = i3, this.target = a3, this.currentTarget = null, e5) e5.hasOwnProperty(o3) && (t4 = e5[o3], this[o3] = t4 ? t4(i3) : i3[o3]);
      return this.isDefaultPrevented = (i3.defaultPrevented == null ? false === i3.returnValue : i3.defaultPrevented) ? yn2 : bn2, this.isPropagationStopped = bn2, this;
    }
    return h2(t3.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e6 = this.nativeEvent;
      e6 && (e6.preventDefault ? e6.preventDefault() : typeof e6.returnValue != `unknown` && (e6.returnValue = false), this.isDefaultPrevented = yn2);
    }, stopPropagation: function() {
      var e6 = this.nativeEvent;
      e6 && (e6.stopPropagation ? e6.stopPropagation() : typeof e6.cancelBubble != `unknown` && (e6.cancelBubble = true), this.isPropagationStopped = yn2);
    }, persist: function() {
    }, isPersistent: yn2 }), t3;
  }
  var Sn2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e5) {
    return e5.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Cn2 = xn2(Sn2), wn2 = h2({}, Sn2, { view: 0, detail: 0 }), Tn2 = xn2(wn2), En2, Dn2, On2, kn2 = h2({}, wn2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bn2, button: 0, buttons: 0, relatedTarget: function(e5) {
    return e5.relatedTarget === void 0 ? e5.fromElement === e5.srcElement ? e5.toElement : e5.fromElement : e5.relatedTarget;
  }, movementX: function(e5) {
    return `movementX` in e5 ? e5.movementX : (e5 !== On2 && (On2 && e5.type === `mousemove` ? (En2 = e5.screenX - On2.screenX, Dn2 = e5.screenY - On2.screenY) : Dn2 = En2 = 0, On2 = e5), En2);
  }, movementY: function(e5) {
    return `movementY` in e5 ? e5.movementY : Dn2;
  } }), An2 = xn2(kn2), jn2 = xn2(h2({}, kn2, { dataTransfer: 0 })), Mn2 = xn2(h2({}, wn2, { relatedTarget: 0 })), Nn2 = xn2(h2({}, Sn2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), Pn2 = xn2(h2({}, Sn2, { clipboardData: function(e5) {
    return `clipboardData` in e5 ? e5.clipboardData : window.clipboardData;
  } })), Fn2 = xn2(h2({}, Sn2, { data: 0 })), In2 = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, Ln2 = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, Rn2 = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
  function zn2(e5) {
    var t3 = this.nativeEvent;
    return t3.getModifierState ? t3.getModifierState(e5) : (e5 = Rn2[e5]) ? !!t3[e5] : false;
  }
  function Bn2() {
    return zn2;
  }
  var Vn2 = xn2(h2({}, wn2, { key: function(e5) {
    if (e5.key) {
      var t3 = In2[e5.key] || e5.key;
      if (t3 !== `Unidentified`) return t3;
    }
    return e5.type === `keypress` ? (e5 = vn2(e5), e5 === 13 ? `Enter` : String.fromCharCode(e5)) : e5.type === `keydown` || e5.type === `keyup` ? Ln2[e5.keyCode] || `Unidentified` : ``;
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bn2, charCode: function(e5) {
    return e5.type === `keypress` ? vn2(e5) : 0;
  }, keyCode: function(e5) {
    return e5.type === `keydown` || e5.type === `keyup` ? e5.keyCode : 0;
  }, which: function(e5) {
    return e5.type === `keypress` ? vn2(e5) : e5.type === `keydown` || e5.type === `keyup` ? e5.keyCode : 0;
  } })), Hn2 = xn2(h2({}, kn2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Un2 = xn2(h2({}, wn2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bn2 })), Wn2 = xn2(h2({}, Sn2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Gn2 = xn2(h2({}, kn2, { deltaX: function(e5) {
    return `deltaX` in e5 ? e5.deltaX : `wheelDeltaX` in e5 ? -e5.wheelDeltaX : 0;
  }, deltaY: function(e5) {
    return `deltaY` in e5 ? e5.deltaY : `wheelDeltaY` in e5 ? -e5.wheelDeltaY : `wheelDelta` in e5 ? -e5.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 })), Kn2 = xn2(h2({}, Sn2, { newState: 0, oldState: 0 })), qn2 = [9, 13, 27, 32], Jn2 = dn2 && `CompositionEvent` in window, Yn2 = null;
  dn2 && `documentMode` in document && (Yn2 = document.documentMode);
  var Xn2 = dn2 && `TextEvent` in window && !Yn2, L2 = dn2 && (!Jn2 || Yn2 && 8 < Yn2 && 11 >= Yn2), Zn2 = ` `, Qn2 = false;
  function $n2(e5, t3) {
    switch (e5) {
      case `keyup`:
        return qn2.indexOf(t3.keyCode) !== -1;
      case `keydown`:
        return t3.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function er2(e5) {
    return e5 = e5.detail, typeof e5 == `object` && `data` in e5 ? e5.data : null;
  }
  var tr2 = false;
  function nr2(e5, t3) {
    switch (e5) {
      case `compositionend`:
        return er2(t3);
      case `keypress`:
        return t3.which === 32 ? (Qn2 = true, Zn2) : null;
      case `textInput`:
        return e5 = t3.data, e5 === Zn2 && Qn2 ? null : e5;
      default:
        return null;
    }
  }
  function rr2(e5, t3) {
    if (tr2) return e5 === `compositionend` || !Jn2 && $n2(e5, t3) ? (e5 = _n4(), gn2 = hn2 = mn2 = null, tr2 = false, e5) : null;
    switch (e5) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
          if (t3.char && 1 < t3.char.length) return t3.char;
          if (t3.which) return String.fromCharCode(t3.which);
        }
        return null;
      case `compositionend`:
        return L2 && t3.locale !== `ko` ? null : t3.data;
      default:
        return null;
    }
  }
  var ir2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ar2(e5) {
    var t3 = e5 && e5.nodeName && e5.nodeName.toLowerCase();
    return t3 === `input` ? !!ir2[e5.type] : t3 === `textarea`;
  }
  function or2(e5, t3, n3, r3) {
    an2 ? on2 ? on2.push(r3) : on2 = [r3] : an2 = r3, t3 = Ed(t3, `onChange`), 0 < t3.length && (n3 = new Cn2(`onChange`, `change`, null, n3, r3), e5.push({ event: n3, listeners: t3 }));
  }
  var sr2 = null, cr2 = null;
  function lr2(e5) {
    yd(e5, 0);
  }
  function ur2(e5) {
    if (Rt2(bt2(e5))) return e5;
  }
  function dr2(e5, t3) {
    if (e5 === `change`) return t3;
  }
  var fr2 = false;
  if (dn2) {
    var pr2;
    if (dn2) {
      var mr2 = `oninput` in document;
      if (!mr2) {
        var hr2 = document.createElement(`div`);
        hr2.setAttribute(`oninput`, `return;`), mr2 = typeof hr2.oninput == `function`;
      }
      pr2 = mr2;
    } else pr2 = false;
    fr2 = pr2 && (!document.documentMode || 9 < document.documentMode);
  }
  function gr2() {
    sr2 && (sr2.detachEvent(`onpropertychange`, _r3), cr2 = sr2 = null);
  }
  function _r3(e5) {
    if (e5.propertyName === `value` && ur2(cr2)) {
      var t3 = [];
      or2(t3, cr2, e5, rn2(e5)), ln2(lr2, t3);
    }
  }
  function vr2(e5, t3, n3) {
    e5 === `focusin` ? (gr2(), sr2 = t3, cr2 = n3, sr2.attachEvent(`onpropertychange`, _r3)) : e5 === `focusout` && gr2();
  }
  function yr2(e5) {
    if (e5 === `selectionchange` || e5 === `keyup` || e5 === `keydown`) return ur2(cr2);
  }
  function br2(e5, t3) {
    if (e5 === `click`) return ur2(t3);
  }
  function xr2(e5, t3) {
    if (e5 === `input` || e5 === `change`) return ur2(t3);
  }
  function Sr2(e5, t3) {
    return e5 === t3 && (e5 !== 0 || 1 / e5 == 1 / t3) || e5 !== e5 && t3 !== t3;
  }
  var Cr2 = typeof Object.is == `function` ? Object.is : Sr2;
  function wr2(e5, t3) {
    if (Cr2(e5, t3)) return true;
    if (typeof e5 != `object` || !e5 || typeof t3 != `object` || !t3) return false;
    var n3 = Object.keys(e5), r3 = Object.keys(t3);
    if (n3.length !== r3.length) return false;
    for (r3 = 0; r3 < n3.length; r3++) {
      var i3 = n3[r3];
      if (!M2.call(t3, i3) || !Cr2(e5[i3], t3[i3])) return false;
    }
    return true;
  }
  function Tr2(e5) {
    for (; e5 && e5.firstChild; ) e5 = e5.firstChild;
    return e5;
  }
  function Er2(e5, t3) {
    var n3 = Tr2(e5);
    e5 = 0;
    for (var r3; n3; ) {
      if (n3.nodeType === 3) {
        if (r3 = e5 + n3.textContent.length, e5 <= t3 && r3 >= t3) return { node: n3, offset: t3 - e5 };
        e5 = r3;
      }
      a: {
        for (; n3; ) {
          if (n3.nextSibling) {
            n3 = n3.nextSibling;
            break a;
          }
          n3 = n3.parentNode;
        }
        n3 = void 0;
      }
      n3 = Tr2(n3);
    }
  }
  function Dr2(e5, t3) {
    return e5 && t3 ? e5 === t3 ? true : e5 && e5.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? Dr2(e5, t3.parentNode) : `contains` in e5 ? e5.contains(t3) : e5.compareDocumentPosition ? !!(e5.compareDocumentPosition(t3) & 16) : false : false;
  }
  function Or2(e5) {
    e5 = e5 != null && e5.ownerDocument != null && e5.ownerDocument.defaultView != null ? e5.ownerDocument.defaultView : window;
    for (var t3 = zt2(e5.document); t3 instanceof e5.HTMLIFrameElement; ) {
      try {
        var n3 = typeof t3.contentWindow.location.href == `string`;
      } catch {
        n3 = false;
      }
      if (n3) e5 = t3.contentWindow;
      else break;
      t3 = zt2(e5.document);
    }
    return t3;
  }
  function kr2(e5) {
    var t3 = e5 && e5.nodeName && e5.nodeName.toLowerCase();
    return t3 && (t3 === `input` && (e5.type === `text` || e5.type === `search` || e5.type === `tel` || e5.type === `url` || e5.type === `password`) || t3 === `textarea` || e5.contentEditable === `true`);
  }
  var Ar2 = dn2 && `documentMode` in document && 11 >= document.documentMode, jr2 = null, Mr2 = null, Nr2 = null, Pr2 = false;
  function Fr2(e5, t3, n3) {
    var r3 = n3.window === n3 ? n3.document : n3.nodeType === 9 ? n3 : n3.ownerDocument;
    Pr2 || jr2 == null || jr2 !== zt2(r3) || (r3 = jr2, `selectionStart` in r3 && kr2(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), Nr2 && wr2(Nr2, r3) || (Nr2 = r3, r3 = Ed(Mr2, `onSelect`), 0 < r3.length && (t3 = new Cn2(`onSelect`, `select`, null, t3, n3), e5.push({ event: t3, listeners: r3 }), t3.target = jr2)));
  }
  function Ir2(e5, t3) {
    var n3 = {};
    return n3[e5.toLowerCase()] = t3.toLowerCase(), n3[`Webkit` + e5] = `webkit` + t3, n3[`Moz` + e5] = `moz` + t3, n3;
  }
  var Lr2 = { animationend: Ir2(`Animation`, `AnimationEnd`), animationiteration: Ir2(`Animation`, `AnimationIteration`), animationstart: Ir2(`Animation`, `AnimationStart`), transitionrun: Ir2(`Transition`, `TransitionRun`), transitionstart: Ir2(`Transition`, `TransitionStart`), transitioncancel: Ir2(`Transition`, `TransitionCancel`), transitionend: Ir2(`Transition`, `TransitionEnd`) }, Rr2 = {}, R2 = {};
  dn2 && (R2 = document.createElement(`div`).style, `AnimationEvent` in window || (delete Lr2.animationend.animation, delete Lr2.animationiteration.animation, delete Lr2.animationstart.animation), `TransitionEvent` in window || delete Lr2.transitionend.transition);
  function zr2(e5) {
    if (Rr2[e5]) return Rr2[e5];
    if (!Lr2[e5]) return e5;
    var t3 = Lr2[e5], n3;
    for (n3 in t3) if (t3.hasOwnProperty(n3) && n3 in R2) return Rr2[e5] = t3[n3];
    return e5;
  }
  var Br2 = zr2(`animationend`), Vr2 = zr2(`animationiteration`), Hr2 = zr2(`animationstart`), Ur2 = zr2(`transitionrun`), Wr2 = zr2(`transitionstart`), Gr2 = zr2(`transitioncancel`), Kr2 = zr2(`transitionend`), qr2 = /* @__PURE__ */ new Map(), Jr2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  Jr2.push(`scrollEnd`);
  function Yr2(e5, t3) {
    qr2.set(e5, t3), Tt2(t3, [e5]);
  }
  var Xr2 = typeof reportError == `function` ? reportError : function(e5) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e5 == `object` && e5 && typeof e5.message == `string` ? String(e5.message) : String(e5), error: e5 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e5);
      return;
    }
    console.error(e5);
  }, Zr2 = [], Qr2 = 0, $r2 = 0;
  function ei2() {
    for (var e5 = Qr2, t3 = $r2 = Qr2 = 0; t3 < e5; ) {
      var n3 = Zr2[t3];
      Zr2[t3++] = null;
      var r3 = Zr2[t3];
      Zr2[t3++] = null;
      var i3 = Zr2[t3];
      Zr2[t3++] = null;
      var a3 = Zr2[t3];
      if (Zr2[t3++] = null, r3 !== null && i3 !== null) {
        var o3 = r3.pending;
        o3 === null ? i3.next = i3 : (i3.next = o3.next, o3.next = i3), r3.pending = i3;
      }
      a3 !== 0 && ii(n3, i3, a3);
    }
  }
  function ti(e5, t3, n3, r3) {
    Zr2[Qr2++] = e5, Zr2[Qr2++] = t3, Zr2[Qr2++] = n3, Zr2[Qr2++] = r3, $r2 |= r3, e5.lanes |= r3, e5 = e5.alternate, e5 !== null && (e5.lanes |= r3);
  }
  function ni(e5, t3, n3, r3) {
    return ti(e5, t3, n3, r3), ai(e5);
  }
  function ri(e5, t3) {
    return ti(e5, null, null, t3), ai(e5);
  }
  function ii(e5, t3, n3) {
    e5.lanes |= n3;
    var r3 = e5.alternate;
    r3 !== null && (r3.lanes |= n3);
    for (var i3 = false, a3 = e5.return; a3 !== null; ) a3.childLanes |= n3, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n3), a3.tag === 22 && (e5 = a3.stateNode, e5 === null || e5._visibility & 1 || (i3 = true)), e5 = a3, a3 = a3.return;
    return e5.tag === 3 ? (a3 = e5.stateNode, i3 && t3 !== null && (i3 = 31 - Ve2(n3), e5 = a3.hiddenUpdates, r3 = e5[i3], r3 === null ? e5[i3] = [t3] : r3.push(t3), t3.lane = n3 | 536870912), a3) : null;
  }
  function ai(e5) {
    if (50 < du) throw du = 0, fu = null, Error(i2(185));
    for (var t3 = e5.return; t3 !== null; ) e5 = t3, t3 = e5.return;
    return e5.tag === 3 ? e5.stateNode : null;
  }
  var oi = {};
  function si(e5, t3, n3, r3) {
    this.tag = e5, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ci(e5, t3, n3, r3) {
    return new si(e5, t3, n3, r3);
  }
  function li(e5) {
    return e5 = e5.prototype, !(!e5 || !e5.isReactComponent);
  }
  function ui(e5, t3) {
    var n3 = e5.alternate;
    return n3 === null ? (n3 = ci(e5.tag, t3, e5.key, e5.mode), n3.elementType = e5.elementType, n3.type = e5.type, n3.stateNode = e5.stateNode, n3.alternate = e5, e5.alternate = n3) : (n3.pendingProps = t3, n3.type = e5.type, n3.flags = 0, n3.subtreeFlags = 0, n3.deletions = null), n3.flags = e5.flags & 65011712, n3.childLanes = e5.childLanes, n3.lanes = e5.lanes, n3.child = e5.child, n3.memoizedProps = e5.memoizedProps, n3.memoizedState = e5.memoizedState, n3.updateQueue = e5.updateQueue, t3 = e5.dependencies, n3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n3.sibling = e5.sibling, n3.index = e5.index, n3.ref = e5.ref, n3.refCleanup = e5.refCleanup, n3;
  }
  function di(e5, t3) {
    e5.flags &= 65011714;
    var n3 = e5.alternate;
    return n3 === null ? (e5.childLanes = 0, e5.lanes = t3, e5.child = null, e5.subtreeFlags = 0, e5.memoizedProps = null, e5.memoizedState = null, e5.updateQueue = null, e5.dependencies = null, e5.stateNode = null) : (e5.childLanes = n3.childLanes, e5.lanes = n3.lanes, e5.child = n3.child, e5.subtreeFlags = 0, e5.deletions = null, e5.memoizedProps = n3.memoizedProps, e5.memoizedState = n3.memoizedState, e5.updateQueue = n3.updateQueue, e5.type = n3.type, t3 = n3.dependencies, e5.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e5;
  }
  function fi(e5, t3, n3, r3, a3, o3) {
    var s3 = 0;
    if (r3 = e5, typeof e5 == `function`) li(e5) && (s3 = 1);
    else if (typeof e5 == `string`) s3 = Uf(e5, n3, fe2.current) ? 26 : e5 === `html` || e5 === `head` || e5 === `body` ? 27 : 5;
    else a: switch (e5) {
      case re2:
        return e5 = ci(31, n3, t3, a3), e5.elementType = re2, e5.lanes = o3, e5;
      case y2:
        return pi(n3.children, a3, o3, t3);
      case b2:
        s3 = 8, a3 |= 24;
        break;
      case x2:
        return e5 = ci(12, n3, t3, a3 | 2), e5.elementType = x2, e5.lanes = o3, e5;
      case w2:
        return e5 = ci(13, n3, t3, a3), e5.elementType = w2, e5.lanes = o3, e5;
      case te2:
        return e5 = ci(19, n3, t3, a3), e5.elementType = te2, e5.lanes = o3, e5;
      default:
        if (typeof e5 == `object` && e5) switch (e5.$$typeof) {
          case S2:
            s3 = 10;
            break a;
          case ee2:
            s3 = 9;
            break a;
          case C2:
            s3 = 11;
            break a;
          case ne2:
            s3 = 14;
            break a;
          case T2:
            s3 = 16, r3 = null;
            break a;
        }
        s3 = 29, n3 = Error(i2(130, e5 === null ? `null` : typeof e5, ``)), r3 = null;
    }
    return t3 = ci(s3, n3, t3, a3), t3.elementType = e5, t3.type = r3, t3.lanes = o3, t3;
  }
  function pi(e5, t3, n3, r3) {
    return e5 = ci(7, e5, r3, t3), e5.lanes = n3, e5;
  }
  function mi(e5, t3, n3) {
    return e5 = ci(6, e5, null, t3), e5.lanes = n3, e5;
  }
  function hi(e5) {
    var t3 = ci(18, null, null, 0);
    return t3.stateNode = e5, t3;
  }
  function gi(e5, t3, n3) {
    return t3 = ci(4, e5.children === null ? [] : e5.children, e5.key, t3), t3.lanes = n3, t3.stateNode = { containerInfo: e5.containerInfo, pendingChildren: null, implementation: e5.implementation }, t3;
  }
  var _i2 = /* @__PURE__ */ new WeakMap();
  function vi(e5, t3) {
    if (typeof e5 == `object` && e5) {
      var n3 = _i2.get(e5);
      return n3 === void 0 ? (t3 = { value: e5, source: t3, stack: Ee2(t3) }, _i2.set(e5, t3), t3) : n3;
    }
    return { value: e5, source: t3, stack: Ee2(t3) };
  }
  var yi = [], bi = 0, xi = null, Si = 0, Ci = [], wi = 0, Ti = null, Ei = 1, Di = ``;
  function Oi(e5, t3) {
    yi[bi++] = Si, yi[bi++] = xi, xi = e5, Si = t3;
  }
  function ki(e5, t3, n3) {
    Ci[wi++] = Ei, Ci[wi++] = Di, Ci[wi++] = Ti, Ti = e5;
    var r3 = Ei;
    e5 = Di;
    var i3 = 32 - Ve2(r3) - 1;
    r3 &= ~(1 << i3), n3 += 1;
    var a3 = 32 - Ve2(t3) + i3;
    if (30 < a3) {
      var o3 = i3 - i3 % 5;
      a3 = (r3 & (1 << o3) - 1).toString(32), r3 >>= o3, i3 -= o3, Ei = 1 << 32 - Ve2(t3) + i3 | n3 << i3 | r3, Di = a3 + e5;
    } else Ei = 1 << a3 | n3 << i3 | r3, Di = e5;
  }
  function Ai(e5) {
    e5.return !== null && (Oi(e5, 1), ki(e5, 1, 0));
  }
  function ji(e5) {
    for (; e5 === xi; ) xi = yi[--bi], yi[bi] = null, Si = yi[--bi], yi[bi] = null;
    for (; e5 === Ti; ) Ti = Ci[--wi], Ci[wi] = null, Di = Ci[--wi], Ci[wi] = null, Ei = Ci[--wi], Ci[wi] = null;
  }
  function Mi(e5, t3) {
    Ci[wi++] = Ei, Ci[wi++] = Di, Ci[wi++] = Ti, Ei = t3.id, Di = t3.overflow, Ti = e5;
  }
  var Ni = null, z = null, B = false, Pi = null, Fi = false, Ii = Error(i2(519));
  function Li(e5) {
    throw Ui(vi(Error(i2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e5)), Ii;
  }
  function Ri(e5) {
    var t3 = e5.stateNode, n3 = e5.type, r3 = e5.memoizedProps;
    switch (t3[lt2] = e5, t3[ut2] = r3, n3) {
      case `dialog`:
        Q(`cancel`, t3), Q(`close`, t3);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        Q(`load`, t3);
        break;
      case `video`:
      case `audio`:
        for (n3 = 0; n3 < _d.length; n3++) Q(_d[n3], t3);
        break;
      case `source`:
        Q(`error`, t3);
        break;
      case `img`:
      case `image`:
      case `link`:
        Q(`error`, t3), Q(`load`, t3);
        break;
      case `details`:
        Q(`toggle`, t3);
        break;
      case `input`:
        Q(`invalid`, t3), Ut2(t3, r3.value, r3.defaultValue, r3.checked, r3.defaultChecked, r3.type, r3.name, true);
        break;
      case `select`:
        Q(`invalid`, t3);
        break;
      case `textarea`:
        Q(`invalid`, t3), I2(t3, r3.value, r3.defaultValue, r3.children);
    }
    n3 = r3.children, typeof n3 != `string` && typeof n3 != `number` && typeof n3 != `bigint` || t3.textContent === `` + n3 || true === r3.suppressHydrationWarning || Md(t3.textContent, n3) ? (r3.popover != null && (Q(`beforetoggle`, t3), Q(`toggle`, t3)), r3.onScroll != null && Q(`scroll`, t3), r3.onScrollEnd != null && Q(`scrollend`, t3), r3.onClick != null && (t3.onclick = tn2), t3 = true) : t3 = false, t3 || Li(e5, true);
  }
  function zi(e5) {
    for (Ni = e5.return; Ni; ) switch (Ni.tag) {
      case 5:
      case 31:
      case 13:
        Fi = false;
        return;
      case 27:
      case 3:
        Fi = true;
        return;
      default:
        Ni = Ni.return;
    }
  }
  function Bi(e5) {
    if (e5 !== Ni) return false;
    if (!B) return zi(e5), B = true, false;
    var t3 = e5.tag, n3;
    if ((n3 = t3 !== 3 && t3 !== 27) && ((n3 = t3 === 5) && (n3 = e5.type, n3 = !(n3 !== `form` && n3 !== `button`) || Ud(e5.type, e5.memoizedProps)), n3 = !n3), n3 && z && Li(e5), zi(e5), t3 === 13) {
      if (e5 = e5.memoizedState, e5 = e5 === null ? null : e5.dehydrated, !e5) throw Error(i2(317));
      z = uf(e5);
    } else if (t3 === 31) {
      if (e5 = e5.memoizedState, e5 = e5 === null ? null : e5.dehydrated, !e5) throw Error(i2(317));
      z = uf(e5);
    } else t3 === 27 ? (t3 = z, Zd(e5.type) ? (e5 = lf, lf = null, z = e5) : z = t3) : z = Ni ? cf(e5.stateNode.nextSibling) : null;
    return true;
  }
  function Vi() {
    z = Ni = null, B = false;
  }
  function Hi() {
    var e5 = Pi;
    return e5 !== null && (Zl === null ? Zl = e5 : Zl.push.apply(Zl, e5), Pi = null), e5;
  }
  function Ui(e5) {
    Pi === null ? Pi = [e5] : Pi.push(e5);
  }
  var Wi = ue2(null), Gi = null, Ki = null;
  function qi(e5, t3, n3) {
    j2(Wi, t3._currentValue), t3._currentValue = n3;
  }
  function Ji(e5) {
    e5._currentValue = Wi.current, de2(Wi);
  }
  function Yi(e5, t3, n3) {
    for (; e5 !== null; ) {
      var r3 = e5.alternate;
      if ((e5.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e5.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e5 === n3) break;
      e5 = e5.return;
    }
  }
  function Xi(e5, t3, n3, r3) {
    var a3 = e5.child;
    for (a3 !== null && (a3.return = e5); a3 !== null; ) {
      var o3 = a3.dependencies;
      if (o3 !== null) {
        var s3 = a3.child;
        o3 = o3.firstContext;
        a: for (; o3 !== null; ) {
          var c3 = o3;
          o3 = a3;
          for (var l3 = 0; l3 < t3.length; l3++) if (c3.context === t3[l3]) {
            o3.lanes |= n3, c3 = o3.alternate, c3 !== null && (c3.lanes |= n3), Yi(o3.return, n3, e5), r3 || (s3 = null);
            break a;
          }
          o3 = c3.next;
        }
      } else if (a3.tag === 18) {
        if (s3 = a3.return, s3 === null) throw Error(i2(341));
        s3.lanes |= n3, o3 = s3.alternate, o3 !== null && (o3.lanes |= n3), Yi(s3, n3, e5), s3 = null;
      } else s3 = a3.child;
      if (s3 !== null) s3.return = a3;
      else for (s3 = a3; s3 !== null; ) {
        if (s3 === e5) {
          s3 = null;
          break;
        }
        if (a3 = s3.sibling, a3 !== null) {
          a3.return = s3.return, s3 = a3;
          break;
        }
        s3 = s3.return;
      }
      a3 = s3;
    }
  }
  function Zi(e5, t3, n3, r3) {
    e5 = null;
    for (var a3 = t3, o3 = false; a3 !== null; ) {
      if (!o3) {
        if (a3.flags & 524288) o3 = true;
        else if (a3.flags & 262144) break;
      }
      if (a3.tag === 10) {
        var s3 = a3.alternate;
        if (s3 === null) throw Error(i2(387));
        if (s3 = s3.memoizedProps, s3 !== null) {
          var c3 = a3.type;
          Cr2(a3.pendingProps.value, s3.value) || (e5 === null ? e5 = [c3] : e5.push(c3));
        }
      } else if (a3 === he2.current) {
        if (s3 = a3.alternate, s3 === null) throw Error(i2(387));
        s3.memoizedState.memoizedState !== a3.memoizedState.memoizedState && (e5 === null ? e5 = [Qf] : e5.push(Qf));
      }
      a3 = a3.return;
    }
    e5 !== null && Xi(t3, e5, n3, r3), t3.flags |= 262144;
  }
  function Qi(e5) {
    for (e5 = e5.firstContext; e5 !== null; ) {
      if (!Cr2(e5.context._currentValue, e5.memoizedValue)) return true;
      e5 = e5.next;
    }
    return false;
  }
  function $i(e5) {
    Gi = e5, Ki = null, e5 = e5.dependencies, e5 !== null && (e5.firstContext = null);
  }
  function ea(e5) {
    return na(Gi, e5);
  }
  function ta(e5, t3) {
    return Gi === null && $i(e5), na(e5, t3);
  }
  function na(e5, t3) {
    var n3 = t3._currentValue;
    if (t3 = { context: t3, memoizedValue: n3, next: null }, Ki === null) {
      if (e5 === null) throw Error(i2(308));
      Ki = t3, e5.dependencies = { lanes: 0, firstContext: t3 }, e5.flags |= 524288;
    } else Ki = Ki.next = t3;
    return n3;
  }
  var ra = typeof AbortController < `u` ? AbortController : function() {
    var e5 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n3) {
      e5.push(n3);
    } };
    this.abort = function() {
      t3.aborted = true, e5.forEach(function(e6) {
        return e6();
      });
    };
  }, ia = t2.unstable_scheduleCallback, aa = t2.unstable_NormalPriority, oa = { $$typeof: S2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function sa() {
    return { controller: new ra(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ca(e5) {
    e5.refCount--, e5.refCount === 0 && ia(aa, function() {
      e5.controller.abort();
    });
  }
  var la = null, ua = 0, da = 0, fa = null;
  function pa(e5, t3) {
    if (la === null) {
      var n3 = la = [];
      ua = 0, da = dd(), fa = { status: `pending`, value: void 0, then: function(e6) {
        n3.push(e6);
      } };
    }
    return ua++, t3.then(ma, ma), t3;
  }
  function ma() {
    if (--ua === 0 && la !== null) {
      fa !== null && (fa.status = `fulfilled`);
      var e5 = la;
      la = null, da = 0, fa = null;
      for (var t3 = 0; t3 < e5.length; t3++) (0, e5[t3])();
    }
  }
  function ha(e5, t3) {
    var n3 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e6) {
      n3.push(e6);
    } };
    return e5.then(function() {
      r3.status = `fulfilled`, r3.value = t3;
      for (var e6 = 0; e6 < n3.length; e6++) (0, n3[e6])(t3);
    }, function(e6) {
      for (r3.status = `rejected`, r3.reason = e6, e6 = 0; e6 < n3.length; e6++) (0, n3[e6])(void 0);
    }), r3;
  }
  var ga = O2.S;
  O2.S = function(e5, t3) {
    eu = je2(), typeof t3 == `object` && t3 && typeof t3.then == `function` && pa(e5, t3), ga !== null && ga(e5, t3);
  };
  var _a3 = ue2(null);
  function va() {
    var e5 = _a3.current;
    return e5 === null ? q.pooledCache : e5;
  }
  function ya(e5, t3) {
    t3 === null ? j2(_a3, _a3.current) : j2(_a3, t3.pool);
  }
  function ba() {
    var e5 = va();
    return e5 === null ? null : { parent: oa._currentValue, pool: e5 };
  }
  var xa = Error(i2(460)), Sa = Error(i2(474)), Ca = Error(i2(542)), wa = { then: function() {
  } };
  function Ta(e5) {
    return e5 = e5.status, e5 === `fulfilled` || e5 === `rejected`;
  }
  function Ea(e5, t3, n3) {
    switch (n3 = e5[n3], n3 === void 0 ? e5.push(t3) : n3 !== t3 && (t3.then(tn2, tn2), t3 = n3), t3.status) {
      case `fulfilled`:
        return t3.value;
      case `rejected`:
        throw e5 = t3.reason, Aa(e5), e5;
      default:
        if (typeof t3.status == `string`) t3.then(tn2, tn2);
        else {
          if (e5 = q, e5 !== null && 100 < e5.shellSuspendCounter) throw Error(i2(482));
          e5 = t3, e5.status = `pending`, e5.then(function(e6) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `fulfilled`, n4.value = e6;
            }
          }, function(e6) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `rejected`, n4.reason = e6;
            }
          });
        }
        switch (t3.status) {
          case `fulfilled`:
            return t3.value;
          case `rejected`:
            throw e5 = t3.reason, Aa(e5), e5;
        }
        throw Oa = t3, xa;
    }
  }
  function Da(e5) {
    try {
      var t3 = e5._init;
      return t3(e5._payload);
    } catch (e6) {
      throw typeof e6 == `object` && e6 && typeof e6.then == `function` ? (Oa = e6, xa) : e6;
    }
  }
  var Oa = null;
  function ka() {
    if (Oa === null) throw Error(i2(459));
    var e5 = Oa;
    return Oa = null, e5;
  }
  function Aa(e5) {
    if (e5 === xa || e5 === Ca) throw Error(i2(483));
  }
  var ja = null, Ma = 0;
  function Na(e5) {
    var t3 = Ma;
    return Ma += 1, ja === null && (ja = []), Ea(ja, e5, t3);
  }
  function Pa(e5, t3) {
    t3 = t3.props.ref, e5.ref = t3 === void 0 ? null : t3;
  }
  function Fa(e5, t3) {
    throw t3.$$typeof === g2 ? Error(i2(525)) : (e5 = Object.prototype.toString.call(t3), Error(i2(31, e5 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e5)));
  }
  function Ia(e5) {
    function t3(t4, n4) {
      if (e5) {
        var r4 = t4.deletions;
        r4 === null ? (t4.deletions = [n4], t4.flags |= 16) : r4.push(n4);
      }
    }
    function n3(n4, r4) {
      if (!e5) return null;
      for (; r4 !== null; ) t3(n4, r4), r4 = r4.sibling;
      return null;
    }
    function r3(e6) {
      for (var t4 = /* @__PURE__ */ new Map(); e6 !== null; ) e6.key === null ? t4.set(e6.index, e6) : t4.set(e6.key, e6), e6 = e6.sibling;
      return t4;
    }
    function a3(e6, t4) {
      return e6 = ui(e6, t4), e6.index = 0, e6.sibling = null, e6;
    }
    function o3(t4, n4, r4) {
      return t4.index = r4, e5 ? (r4 = t4.alternate, r4 === null ? (t4.flags |= 67108866, n4) : (r4 = r4.index, r4 < n4 ? (t4.flags |= 67108866, n4) : r4)) : (t4.flags |= 1048576, n4);
    }
    function s3(t4) {
      return e5 && t4.alternate === null && (t4.flags |= 67108866), t4;
    }
    function c3(e6, t4, n4, r4) {
      return t4 === null || t4.tag !== 6 ? (t4 = mi(n4, e6.mode, r4), t4.return = e6, t4) : (t4 = a3(t4, n4), t4.return = e6, t4);
    }
    function l3(e6, t4, n4, r4) {
      var i3 = n4.type;
      return i3 === y2 ? d3(e6, t4, n4.props.children, r4, n4.key) : t4 !== null && (t4.elementType === i3 || typeof i3 == `object` && i3 && i3.$$typeof === T2 && Da(i3) === t4.type) ? (t4 = a3(t4, n4.props), Pa(t4, n4), t4.return = e6, t4) : (t4 = fi(n4.type, n4.key, n4.props, null, e6.mode, r4), Pa(t4, n4), t4.return = e6, t4);
    }
    function u2(e6, t4, n4, r4) {
      return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n4.containerInfo || t4.stateNode.implementation !== n4.implementation ? (t4 = gi(n4, e6.mode, r4), t4.return = e6, t4) : (t4 = a3(t4, n4.children || []), t4.return = e6, t4);
    }
    function d3(e6, t4, n4, r4, i3) {
      return t4 === null || t4.tag !== 7 ? (t4 = pi(n4, e6.mode, r4, i3), t4.return = e6, t4) : (t4 = a3(t4, n4), t4.return = e6, t4);
    }
    function f2(e6, t4, n4) {
      if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`) return t4 = mi(`` + t4, e6.mode, n4), t4.return = e6, t4;
      if (typeof t4 == `object` && t4) {
        switch (t4.$$typeof) {
          case _2:
            return n4 = fi(t4.type, t4.key, t4.props, null, e6.mode, n4), Pa(n4, t4), n4.return = e6, n4;
          case v2:
            return t4 = gi(t4, e6.mode, n4), t4.return = e6, t4;
          case T2:
            return t4 = Da(t4), f2(e6, t4, n4);
        }
        if (D2(t4) || ae2(t4)) return t4 = pi(t4, e6.mode, n4, null), t4.return = e6, t4;
        if (typeof t4.then == `function`) return f2(e6, Na(t4), n4);
        if (t4.$$typeof === S2) return f2(e6, ta(e6, t4), n4);
        Fa(e6, t4);
      }
      return null;
    }
    function p3(e6, t4, n4, r4) {
      var i3 = t4 === null ? null : t4.key;
      if (typeof n4 == `string` && n4 !== `` || typeof n4 == `number` || typeof n4 == `bigint`) return i3 === null ? c3(e6, t4, `` + n4, r4) : null;
      if (typeof n4 == `object` && n4) {
        switch (n4.$$typeof) {
          case _2:
            return n4.key === i3 ? l3(e6, t4, n4, r4) : null;
          case v2:
            return n4.key === i3 ? u2(e6, t4, n4, r4) : null;
          case T2:
            return n4 = Da(n4), p3(e6, t4, n4, r4);
        }
        if (D2(n4) || ae2(n4)) return i3 === null ? d3(e6, t4, n4, r4, null) : null;
        if (typeof n4.then == `function`) return p3(e6, t4, Na(n4), r4);
        if (n4.$$typeof === S2) return p3(e6, t4, ta(e6, n4), r4);
        Fa(e6, n4);
      }
      return null;
    }
    function m2(e6, t4, n4, r4, i3) {
      if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number` || typeof r4 == `bigint`) return e6 = e6.get(n4) || null, c3(t4, e6, `` + r4, i3);
      if (typeof r4 == `object` && r4) {
        switch (r4.$$typeof) {
          case _2:
            return e6 = e6.get(r4.key === null ? n4 : r4.key) || null, l3(t4, e6, r4, i3);
          case v2:
            return e6 = e6.get(r4.key === null ? n4 : r4.key) || null, u2(t4, e6, r4, i3);
          case T2:
            return r4 = Da(r4), m2(e6, t4, n4, r4, i3);
        }
        if (D2(r4) || ae2(r4)) return e6 = e6.get(n4) || null, d3(t4, e6, r4, i3, null);
        if (typeof r4.then == `function`) return m2(e6, t4, n4, Na(r4), i3);
        if (r4.$$typeof === S2) return m2(e6, t4, n4, ta(t4, r4), i3);
        Fa(t4, r4);
      }
      return null;
    }
    function h3(i3, a4, s4, c4) {
      for (var l4 = null, u3 = null, d4 = a4, h4 = a4 = 0, g4 = null; d4 !== null && h4 < s4.length; h4++) {
        d4.index > h4 ? (g4 = d4, d4 = null) : g4 = d4.sibling;
        var _3 = p3(i3, d4, s4[h4], c4);
        if (_3 === null) {
          d4 === null && (d4 = g4);
          break;
        }
        e5 && d4 && _3.alternate === null && t3(i3, d4), a4 = o3(_3, a4, h4), u3 === null ? l4 = _3 : u3.sibling = _3, u3 = _3, d4 = g4;
      }
      if (h4 === s4.length) return n3(i3, d4), B && Oi(i3, h4), l4;
      if (d4 === null) {
        for (; h4 < s4.length; h4++) d4 = f2(i3, s4[h4], c4), d4 !== null && (a4 = o3(d4, a4, h4), u3 === null ? l4 = d4 : u3.sibling = d4, u3 = d4);
        return B && Oi(i3, h4), l4;
      }
      for (d4 = r3(d4); h4 < s4.length; h4++) g4 = m2(d4, i3, h4, s4[h4], c4), g4 !== null && (e5 && g4.alternate !== null && d4.delete(g4.key === null ? h4 : g4.key), a4 = o3(g4, a4, h4), u3 === null ? l4 = g4 : u3.sibling = g4, u3 = g4);
      return e5 && d4.forEach(function(e6) {
        return t3(i3, e6);
      }), B && Oi(i3, h4), l4;
    }
    function g3(a4, s4, c4, l4) {
      if (c4 == null) throw Error(i2(151));
      for (var u3 = null, d4 = null, h4 = s4, g4 = s4 = 0, _3 = null, v3 = c4.next(); h4 !== null && !v3.done; g4++, v3 = c4.next()) {
        h4.index > g4 ? (_3 = h4, h4 = null) : _3 = h4.sibling;
        var y3 = p3(a4, h4, v3.value, l4);
        if (y3 === null) {
          h4 === null && (h4 = _3);
          break;
        }
        e5 && h4 && y3.alternate === null && t3(a4, h4), s4 = o3(y3, s4, g4), d4 === null ? u3 = y3 : d4.sibling = y3, d4 = y3, h4 = _3;
      }
      if (v3.done) return n3(a4, h4), B && Oi(a4, g4), u3;
      if (h4 === null) {
        for (; !v3.done; g4++, v3 = c4.next()) v3 = f2(a4, v3.value, l4), v3 !== null && (s4 = o3(v3, s4, g4), d4 === null ? u3 = v3 : d4.sibling = v3, d4 = v3);
        return B && Oi(a4, g4), u3;
      }
      for (h4 = r3(h4); !v3.done; g4++, v3 = c4.next()) v3 = m2(h4, a4, g4, v3.value, l4), v3 !== null && (e5 && v3.alternate !== null && h4.delete(v3.key === null ? g4 : v3.key), s4 = o3(v3, s4, g4), d4 === null ? u3 = v3 : d4.sibling = v3, d4 = v3);
      return e5 && h4.forEach(function(e6) {
        return t3(a4, e6);
      }), B && Oi(a4, g4), u3;
    }
    function b3(e6, r4, o4, c4) {
      if (typeof o4 == `object` && o4 && o4.type === y2 && o4.key === null && (o4 = o4.props.children), typeof o4 == `object` && o4) {
        switch (o4.$$typeof) {
          case _2:
            a: {
              for (var l4 = o4.key; r4 !== null; ) {
                if (r4.key === l4) {
                  if (l4 = o4.type, l4 === y2) {
                    if (r4.tag === 7) {
                      n3(e6, r4.sibling), c4 = a3(r4, o4.props.children), c4.return = e6, e6 = c4;
                      break a;
                    }
                  } else if (r4.elementType === l4 || typeof l4 == `object` && l4 && l4.$$typeof === T2 && Da(l4) === r4.type) {
                    n3(e6, r4.sibling), c4 = a3(r4, o4.props), Pa(c4, o4), c4.return = e6, e6 = c4;
                    break a;
                  }
                  n3(e6, r4);
                  break;
                } else t3(e6, r4);
                r4 = r4.sibling;
              }
              o4.type === y2 ? (c4 = pi(o4.props.children, e6.mode, c4, o4.key), c4.return = e6, e6 = c4) : (c4 = fi(o4.type, o4.key, o4.props, null, e6.mode, c4), Pa(c4, o4), c4.return = e6, e6 = c4);
            }
            return s3(e6);
          case v2:
            a: {
              for (l4 = o4.key; r4 !== null; ) {
                if (r4.key === l4) if (r4.tag === 4 && r4.stateNode.containerInfo === o4.containerInfo && r4.stateNode.implementation === o4.implementation) {
                  n3(e6, r4.sibling), c4 = a3(r4, o4.children || []), c4.return = e6, e6 = c4;
                  break a;
                } else {
                  n3(e6, r4);
                  break;
                }
                else t3(e6, r4);
                r4 = r4.sibling;
              }
              c4 = gi(o4, e6.mode, c4), c4.return = e6, e6 = c4;
            }
            return s3(e6);
          case T2:
            return o4 = Da(o4), b3(e6, r4, o4, c4);
        }
        if (D2(o4)) return h3(e6, r4, o4, c4);
        if (ae2(o4)) {
          if (l4 = ae2(o4), typeof l4 != `function`) throw Error(i2(150));
          return o4 = l4.call(o4), g3(e6, r4, o4, c4);
        }
        if (typeof o4.then == `function`) return b3(e6, r4, Na(o4), c4);
        if (o4.$$typeof === S2) return b3(e6, r4, ta(e6, o4), c4);
        Fa(e6, o4);
      }
      return typeof o4 == `string` && o4 !== `` || typeof o4 == `number` || typeof o4 == `bigint` ? (o4 = `` + o4, r4 !== null && r4.tag === 6 ? (n3(e6, r4.sibling), c4 = a3(r4, o4), c4.return = e6, e6 = c4) : (n3(e6, r4), c4 = mi(o4, e6.mode, c4), c4.return = e6, e6 = c4), s3(e6)) : n3(e6, r4);
    }
    return function(e6, t4, n4, r4) {
      try {
        Ma = 0;
        var i3 = b3(e6, t4, n4, r4);
        return ja = null, i3;
      } catch (t5) {
        if (t5 === xa || t5 === Ca) throw t5;
        var a4 = ci(29, t5, null, e6.mode);
        return a4.lanes = r4, a4.return = e6, a4;
      }
    };
  }
  var La = Ia(true), Ra = Ia(false), za = false;
  function Ba(e5) {
    e5.updateQueue = { baseState: e5.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Va(e5, t3) {
    e5 = e5.updateQueue, t3.updateQueue === e5 && (t3.updateQueue = { baseState: e5.baseState, firstBaseUpdate: e5.firstBaseUpdate, lastBaseUpdate: e5.lastBaseUpdate, shared: e5.shared, callbacks: null });
  }
  function Ha(e5) {
    return { lane: e5, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(e5, t3, n3) {
    var r3 = e5.updateQueue;
    if (r3 === null) return null;
    if (r3 = r3.shared, K & 2) {
      var i3 = r3.pending;
      return i3 === null ? t3.next = t3 : (t3.next = i3.next, i3.next = t3), r3.pending = t3, t3 = ai(e5), ii(e5, null, n3), t3;
    }
    return ti(e5, r3, t3, n3), ai(e5);
  }
  function Wa(e5, t3, n3) {
    if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n3 & 4194048)) {
      var r3 = t3.lanes;
      r3 &= e5.pendingLanes, n3 |= r3, t3.lanes = n3, nt2(e5, n3);
    }
  }
  function Ga(e5, t3) {
    var n3 = e5.updateQueue, r3 = e5.alternate;
    if (r3 !== null && (r3 = r3.updateQueue, n3 === r3)) {
      var i3 = null, a3 = null;
      if (n3 = n3.firstBaseUpdate, n3 !== null) {
        do {
          var o3 = { lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: null, next: null };
          a3 === null ? i3 = a3 = o3 : a3 = a3.next = o3, n3 = n3.next;
        } while (n3 !== null);
        a3 === null ? i3 = a3 = t3 : a3 = a3.next = t3;
      } else i3 = a3 = t3;
      n3 = { baseState: r3.baseState, firstBaseUpdate: i3, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e5.updateQueue = n3;
      return;
    }
    e5 = n3.lastBaseUpdate, e5 === null ? n3.firstBaseUpdate = t3 : e5.next = t3, n3.lastBaseUpdate = t3;
  }
  var Ka = false;
  function qa() {
    if (Ka) {
      var e5 = fa;
      if (e5 !== null) throw e5;
    }
  }
  function Ja(e5, t3, n3, r3) {
    Ka = false;
    var i3 = e5.updateQueue;
    za = false;
    var a3 = i3.firstBaseUpdate, o3 = i3.lastBaseUpdate, s3 = i3.shared.pending;
    if (s3 !== null) {
      i3.shared.pending = null;
      var c3 = s3, l3 = c3.next;
      c3.next = null, o3 === null ? a3 = l3 : o3.next = l3, o3 = c3;
      var u2 = e5.alternate;
      u2 !== null && (u2 = u2.updateQueue, s3 = u2.lastBaseUpdate, s3 !== o3 && (s3 === null ? u2.firstBaseUpdate = l3 : s3.next = l3, u2.lastBaseUpdate = c3));
    }
    if (a3 !== null) {
      var d3 = i3.baseState;
      o3 = 0, u2 = l3 = c3 = null, s3 = a3;
      do {
        var f2 = s3.lane & -536870913, p3 = f2 !== s3.lane;
        if (p3 ? (Y & f2) === f2 : (r3 & f2) === f2) {
          f2 !== 0 && f2 === da && (Ka = true), u2 !== null && (u2 = u2.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
          a: {
            var m2 = e5, g3 = s3;
            f2 = t3;
            var _3 = n3;
            switch (g3.tag) {
              case 1:
                if (m2 = g3.payload, typeof m2 == `function`) {
                  d3 = m2.call(_3, d3, f2);
                  break a;
                }
                d3 = m2;
                break a;
              case 3:
                m2.flags = m2.flags & -65537 | 128;
              case 0:
                if (m2 = g3.payload, f2 = typeof m2 == `function` ? m2.call(_3, d3, f2) : m2, f2 == null) break a;
                d3 = h2({}, d3, f2);
                break a;
              case 2:
                za = true;
            }
          }
          f2 = s3.callback, f2 !== null && (e5.flags |= 64, p3 && (e5.flags |= 8192), p3 = i3.callbacks, p3 === null ? i3.callbacks = [f2] : p3.push(f2));
        } else p3 = { lane: f2, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u2 === null ? (l3 = u2 = p3, c3 = d3) : u2 = u2.next = p3, o3 |= f2;
        if (s3 = s3.next, s3 === null) {
          if (s3 = i3.shared.pending, s3 === null) break;
          p3 = s3, s3 = p3.next, p3.next = null, i3.lastBaseUpdate = p3, i3.shared.pending = null;
        }
      } while (1);
      u2 === null && (c3 = d3), i3.baseState = c3, i3.firstBaseUpdate = l3, i3.lastBaseUpdate = u2, a3 === null && (i3.shared.lanes = 0), Gl |= o3, e5.lanes = o3, e5.memoizedState = d3;
    }
  }
  function Ya(e5, t3) {
    if (typeof e5 != `function`) throw Error(i2(191, e5));
    e5.call(t3);
  }
  function Xa(e5, t3) {
    var n3 = e5.callbacks;
    if (n3 !== null) for (e5.callbacks = null, e5 = 0; e5 < n3.length; e5++) Ya(n3[e5], t3);
  }
  var Za = ue2(null), Qa = ue2(0);
  function $a(e5, t3) {
    e5 = Ul, j2(Qa, e5), j2(Za, t3), Ul = e5 | t3.baseLanes;
  }
  function eo() {
    j2(Qa, Ul), j2(Za, Za.current);
  }
  function to() {
    Ul = Qa.current, de2(Za), de2(Qa);
  }
  var no = ue2(null), ro = null;
  function io(e5) {
    var t3 = e5.alternate;
    j2(lo, lo.current & 1), j2(no, e5), ro === null && (t3 === null || Za.current !== null || t3.memoizedState !== null) && (ro = e5);
  }
  function ao(e5) {
    j2(lo, lo.current), j2(no, e5), ro === null && (ro = e5);
  }
  function oo(e5) {
    e5.tag === 22 ? (j2(lo, lo.current), j2(no, e5), ro === null && (ro = e5)) : so(e5);
  }
  function so() {
    j2(lo, lo.current), j2(no, no.current);
  }
  function co(e5) {
    de2(no), ro === e5 && (ro = null), de2(lo);
  }
  var lo = ue2(0);
  function uo(e5) {
    for (var t3 = e5; t3 !== null; ) {
      if (t3.tag === 13) {
        var n3 = t3.memoizedState;
        if (n3 !== null && (n3 = n3.dehydrated, n3 === null || af(n3) || of(n3))) return t3;
      } else if (t3.tag === 19 && (t3.memoizedProps.revealOrder === `forwards` || t3.memoizedProps.revealOrder === `backwards` || t3.memoizedProps.revealOrder === `unstable_legacy-backwards` || t3.memoizedProps.revealOrder === `together`)) {
        if (t3.flags & 128) return t3;
      } else if (t3.child !== null) {
        t3.child.return = t3, t3 = t3.child;
        continue;
      }
      if (t3 === e5) break;
      for (; t3.sibling === null; ) {
        if (t3.return === null || t3.return === e5) return null;
        t3 = t3.return;
      }
      t3.sibling.return = t3.return, t3 = t3.sibling;
    }
    return null;
  }
  var fo = 0, V = null, H = null, po = null, mo = false, ho = false, go = false, _o2 = 0, vo = 0, yo = null, bo = 0;
  function U() {
    throw Error(i2(321));
  }
  function xo(e5, t3) {
    if (t3 === null) return false;
    for (var n3 = 0; n3 < t3.length && n3 < e5.length; n3++) if (!Cr2(e5[n3], t3[n3])) return false;
    return true;
  }
  function So(e5, t3, n3, r3, i3, a3) {
    return fo = a3, V = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, O2.H = e5 === null || e5.memoizedState === null ? zs : Bs, go = false, a3 = n3(r3, i3), go = false, ho && (a3 = wo(t3, n3, r3, i3)), Co(e5), a3;
  }
  function Co(e5) {
    O2.H = Rs;
    var t3 = H !== null && H.next !== null;
    if (fo = 0, po = H = V = null, mo = false, vo = 0, yo = null, t3) throw Error(i2(300));
    e5 === null || rc || (e5 = e5.dependencies, e5 !== null && Qi(e5) && (rc = true));
  }
  function wo(e5, t3, n3, r3) {
    V = e5;
    var a3 = 0;
    do {
      if (ho && (yo = null), vo = 0, ho = false, 25 <= a3) throw Error(i2(301));
      if (a3 += 1, po = H = null, e5.updateQueue != null) {
        var o3 = e5.updateQueue;
        o3.lastEffect = null, o3.events = null, o3.stores = null, o3.memoCache != null && (o3.memoCache.index = 0);
      }
      O2.H = Vs, o3 = t3(n3, r3);
    } while (ho);
    return o3;
  }
  function To() {
    var e5 = O2.H, t3 = e5.useState()[0];
    return t3 = typeof t3.then == `function` ? Mo(t3) : t3, e5 = e5.useState()[0], (H === null ? null : H.memoizedState) !== e5 && (V.flags |= 1024), t3;
  }
  function Eo() {
    var e5 = _o2 !== 0;
    return _o2 = 0, e5;
  }
  function Do(e5, t3, n3) {
    t3.updateQueue = e5.updateQueue, t3.flags &= -2053, e5.lanes &= ~n3;
  }
  function Oo(e5) {
    if (mo) {
      for (e5 = e5.memoizedState; e5 !== null; ) {
        var t3 = e5.queue;
        t3 !== null && (t3.pending = null), e5 = e5.next;
      }
      mo = false;
    }
    fo = 0, po = H = V = null, ho = false, vo = _o2 = 0, yo = null;
  }
  function ko() {
    var e5 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return po === null ? V.memoizedState = po = e5 : po = po.next = e5, po;
  }
  function Ao() {
    if (H === null) {
      var e5 = V.alternate;
      e5 = e5 === null ? null : e5.memoizedState;
    } else e5 = H.next;
    var t3 = po === null ? V.memoizedState : po.next;
    if (t3 !== null) po = t3, H = e5;
    else {
      if (e5 === null) throw V.alternate === null ? Error(i2(467)) : Error(i2(310));
      H = e5, e5 = { memoizedState: H.memoizedState, baseState: H.baseState, baseQueue: H.baseQueue, queue: H.queue, next: null }, po === null ? V.memoizedState = po = e5 : po = po.next = e5;
    }
    return po;
  }
  function jo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Mo(e5) {
    var t3 = vo;
    return vo += 1, yo === null && (yo = []), e5 = Ea(yo, e5, t3), t3 = V, (po === null ? t3.memoizedState : po.next) === null && (t3 = t3.alternate, O2.H = t3 === null || t3.memoizedState === null ? zs : Bs), e5;
  }
  function No(e5) {
    if (typeof e5 == `object` && e5) {
      if (typeof e5.then == `function`) return Mo(e5);
      if (e5.$$typeof === S2) return ea(e5);
    }
    throw Error(i2(438, String(e5)));
  }
  function Po(e5) {
    var t3 = null, n3 = V.updateQueue;
    if (n3 !== null && (t3 = n3.memoCache), t3 == null) {
      var r3 = V.alternate;
      r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e6) {
        return e6.slice();
      }), index: 0 })));
    }
    if (t3 ?? (t3 = { data: [], index: 0 }), n3 === null && (n3 = jo(), V.updateQueue = n3), n3.memoCache = t3, n3 = t3.data[t3.index], n3 === void 0) for (n3 = t3.data[t3.index] = Array(e5), r3 = 0; r3 < e5; r3++) n3[r3] = ie2;
    return t3.index++, n3;
  }
  function Fo(e5, t3) {
    return typeof t3 == `function` ? t3(e5) : t3;
  }
  function Io(e5) {
    return Lo(Ao(), H, e5);
  }
  function Lo(e5, t3, n3) {
    var r3 = e5.queue;
    if (r3 === null) throw Error(i2(311));
    r3.lastRenderedReducer = n3;
    var a3 = e5.baseQueue, o3 = r3.pending;
    if (o3 !== null) {
      if (a3 !== null) {
        var s3 = a3.next;
        a3.next = o3.next, o3.next = s3;
      }
      t3.baseQueue = a3 = o3, r3.pending = null;
    }
    if (o3 = e5.baseState, a3 === null) e5.memoizedState = o3;
    else {
      t3 = a3.next;
      var c3 = s3 = null, l3 = null, u2 = t3, d3 = false;
      do {
        var f2 = u2.lane & -536870913;
        if (f2 === u2.lane ? (fo & f2) === f2 : (Y & f2) === f2) {
          var p3 = u2.revertLane;
          if (p3 === 0) l3 !== null && (l3 = l3.next = { lane: 0, revertLane: 0, gesture: null, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null }), f2 === da && (d3 = true);
          else if ((fo & p3) === p3) {
            u2 = u2.next, p3 === da && (d3 = true);
            continue;
          } else f2 = { lane: 0, revertLane: u2.revertLane, gesture: null, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null }, l3 === null ? (c3 = l3 = f2, s3 = o3) : l3 = l3.next = f2, V.lanes |= p3, Gl |= p3;
          f2 = u2.action, go && n3(o3, f2), o3 = u2.hasEagerState ? u2.eagerState : n3(o3, f2);
        } else p3 = { lane: f2, revertLane: u2.revertLane, gesture: u2.gesture, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null }, l3 === null ? (c3 = l3 = p3, s3 = o3) : l3 = l3.next = p3, V.lanes |= f2, Gl |= f2;
        u2 = u2.next;
      } while (u2 !== null && u2 !== t3);
      if (l3 === null ? s3 = o3 : l3.next = c3, !Cr2(o3, e5.memoizedState) && (rc = true, d3 && (n3 = fa, n3 !== null))) throw n3;
      e5.memoizedState = o3, e5.baseState = s3, e5.baseQueue = l3, r3.lastRenderedState = o3;
    }
    return a3 === null && (r3.lanes = 0), [e5.memoizedState, r3.dispatch];
  }
  function Ro(e5) {
    var t3 = Ao(), n3 = t3.queue;
    if (n3 === null) throw Error(i2(311));
    n3.lastRenderedReducer = e5;
    var r3 = n3.dispatch, a3 = n3.pending, o3 = t3.memoizedState;
    if (a3 !== null) {
      n3.pending = null;
      var s3 = a3 = a3.next;
      do
        o3 = e5(o3, s3.action), s3 = s3.next;
      while (s3 !== a3);
      Cr2(o3, t3.memoizedState) || (rc = true), t3.memoizedState = o3, t3.baseQueue === null && (t3.baseState = o3), n3.lastRenderedState = o3;
    }
    return [o3, r3];
  }
  function zo(e5, t3, n3) {
    var r3 = V, a3 = Ao(), o3 = B;
    if (o3) {
      if (n3 === void 0) throw Error(i2(407));
      n3 = n3();
    } else n3 = t3();
    var s3 = !Cr2((H || a3).memoizedState, n3);
    if (s3 && (a3.memoizedState = n3, rc = true), a3 = a3.queue, us(Ho.bind(null, r3, a3, e5), [e5]), a3.getSnapshot !== t3 || s3 || po !== null && po.memoizedState.tag & 1) {
      if (r3.flags |= 2048, as(9, { destroy: void 0 }, Vo.bind(null, r3, a3, n3, t3), null), q === null) throw Error(i2(349));
      o3 || fo & 127 || Bo(r3, t3, n3);
    }
    return n3;
  }
  function Bo(e5, t3, n3) {
    e5.flags |= 16384, e5 = { getSnapshot: t3, value: n3 }, t3 = V.updateQueue, t3 === null ? (t3 = jo(), V.updateQueue = t3, t3.stores = [e5]) : (n3 = t3.stores, n3 === null ? t3.stores = [e5] : n3.push(e5));
  }
  function Vo(e5, t3, n3, r3) {
    t3.value = n3, t3.getSnapshot = r3, Uo(t3) && Wo(e5);
  }
  function Ho(e5, t3, n3) {
    return n3(function() {
      Uo(t3) && Wo(e5);
    });
  }
  function Uo(e5) {
    var t3 = e5.getSnapshot;
    e5 = e5.value;
    try {
      var n3 = t3();
      return !Cr2(e5, n3);
    } catch {
      return true;
    }
  }
  function Wo(e5) {
    var t3 = ri(e5, 2);
    t3 !== null && hu(t3, e5, 2);
  }
  function Go(e5) {
    var t3 = ko();
    if (typeof e5 == `function`) {
      var n3 = e5;
      if (e5 = n3(), go) {
        P2(true);
        try {
          n3();
        } finally {
          P2(false);
        }
      }
    }
    return t3.memoizedState = t3.baseState = e5, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fo, lastRenderedState: e5 }, t3;
  }
  function Ko(e5, t3, n3, r3) {
    return e5.baseState = n3, Lo(e5, H, typeof r3 == `function` ? r3 : Fo);
  }
  function qo(e5, t3, n3, r3, a3) {
    if (Fs(e5)) throw Error(i2(485));
    if (e5 = t3.action, e5 !== null) {
      var o3 = { payload: a3, action: e5, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e6) {
        o3.listeners.push(e6);
      } };
      O2.T === null ? o3.isTransition = false : n3(true), r3(o3), n3 = t3.pending, n3 === null ? (o3.next = t3.pending = o3, Jo(t3, o3)) : (o3.next = n3.next, t3.pending = n3.next = o3);
    }
  }
  function Jo(e5, t3) {
    var n3 = t3.action, r3 = t3.payload, i3 = e5.state;
    if (t3.isTransition) {
      var a3 = O2.T, o3 = {};
      O2.T = o3;
      try {
        var s3 = n3(i3, r3), c3 = O2.S;
        c3 !== null && c3(o3, s3), Yo(e5, t3, s3);
      } catch (n4) {
        Zo(e5, t3, n4);
      } finally {
        a3 !== null && o3.types !== null && (a3.types = o3.types), O2.T = a3;
      }
    } else try {
      a3 = n3(i3, r3), Yo(e5, t3, a3);
    } catch (n4) {
      Zo(e5, t3, n4);
    }
  }
  function Yo(e5, t3, n3) {
    typeof n3 == `object` && n3 && typeof n3.then == `function` ? n3.then(function(n4) {
      Xo(e5, t3, n4);
    }, function(n4) {
      return Zo(e5, t3, n4);
    }) : Xo(e5, t3, n3);
  }
  function Xo(e5, t3, n3) {
    t3.status = `fulfilled`, t3.value = n3, Qo(t3), e5.state = n3, t3 = e5.pending, t3 !== null && (n3 = t3.next, n3 === t3 ? e5.pending = null : (n3 = n3.next, t3.next = n3, Jo(e5, n3)));
  }
  function Zo(e5, t3, n3) {
    var r3 = e5.pending;
    if (e5.pending = null, r3 !== null) {
      r3 = r3.next;
      do
        t3.status = `rejected`, t3.reason = n3, Qo(t3), t3 = t3.next;
      while (t3 !== r3);
    }
    e5.action = null;
  }
  function Qo(e5) {
    e5 = e5.listeners;
    for (var t3 = 0; t3 < e5.length; t3++) (0, e5[t3])();
  }
  function $o(e5, t3) {
    return t3;
  }
  function es(e5, t3) {
    if (B) {
      var n3 = q.formState;
      if (n3 !== null) {
        a: {
          var r3 = V;
          if (B) {
            if (z) {
              b: {
                for (var i3 = z, a3 = Fi; i3.nodeType !== 8; ) {
                  if (!a3) {
                    i3 = null;
                    break b;
                  }
                  if (i3 = cf(i3.nextSibling), i3 === null) {
                    i3 = null;
                    break b;
                  }
                }
                a3 = i3.data, i3 = a3 === `F!` || a3 === `F` ? i3 : null;
              }
              if (i3) {
                z = cf(i3.nextSibling), r3 = i3.data === `F!`;
                break a;
              }
            }
            Li(r3);
          }
          r3 = false;
        }
        r3 && (t3 = n3[0]);
      }
    }
    return n3 = ko(), n3.memoizedState = n3.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: $o, lastRenderedState: t3 }, n3.queue = r3, n3 = Ms.bind(null, V, r3), r3.dispatch = n3, r3 = Go(false), a3 = Ps.bind(null, V, false, r3.queue), r3 = ko(), i3 = { state: t3, dispatch: null, action: e5, pending: null }, r3.queue = i3, n3 = qo.bind(null, V, i3, a3, n3), i3.dispatch = n3, r3.memoizedState = e5, [t3, n3, false];
  }
  function ts(e5) {
    return ns(Ao(), H, e5);
  }
  function ns(e5, t3, n3) {
    if (t3 = Lo(e5, t3, $o)[0], e5 = Io(Fo)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
      var r3 = Mo(t3);
    } catch (e6) {
      throw e6 === xa ? Ca : e6;
    }
    else r3 = t3;
    t3 = Ao();
    var i3 = t3.queue, a3 = i3.dispatch;
    return n3 !== t3.memoizedState && (V.flags |= 2048, as(9, { destroy: void 0 }, rs.bind(null, i3, n3), null)), [r3, a3, e5];
  }
  function rs(e5, t3) {
    e5.action = t3;
  }
  function is(e5) {
    var t3 = Ao(), n3 = H;
    if (n3 !== null) return ns(t3, n3, e5);
    Ao(), t3 = t3.memoizedState, n3 = Ao();
    var r3 = n3.queue.dispatch;
    return n3.memoizedState = e5, [t3, r3, false];
  }
  function as(e5, t3, n3, r3) {
    return e5 = { tag: e5, create: n3, deps: r3, inst: t3, next: null }, t3 = V.updateQueue, t3 === null && (t3 = jo(), V.updateQueue = t3), n3 = t3.lastEffect, n3 === null ? t3.lastEffect = e5.next = e5 : (r3 = n3.next, n3.next = e5, e5.next = r3, t3.lastEffect = e5), e5;
  }
  function os() {
    return Ao().memoizedState;
  }
  function ss(e5, t3, n3, r3) {
    var i3 = ko();
    V.flags |= e5, i3.memoizedState = as(1 | t3, { destroy: void 0 }, n3, r3 === void 0 ? null : r3);
  }
  function cs(e5, t3, n3, r3) {
    var i3 = Ao();
    r3 = r3 === void 0 ? null : r3;
    var a3 = i3.memoizedState.inst;
    H !== null && r3 !== null && xo(r3, H.memoizedState.deps) ? i3.memoizedState = as(t3, a3, n3, r3) : (V.flags |= e5, i3.memoizedState = as(1 | t3, a3, n3, r3));
  }
  function ls(e5, t3) {
    ss(8390656, 8, e5, t3);
  }
  function us(e5, t3) {
    cs(2048, 8, e5, t3);
  }
  function ds(e5) {
    V.flags |= 4;
    var t3 = V.updateQueue;
    if (t3 === null) t3 = jo(), V.updateQueue = t3, t3.events = [e5];
    else {
      var n3 = t3.events;
      n3 === null ? t3.events = [e5] : n3.push(e5);
    }
  }
  function fs(e5) {
    var t3 = Ao().memoizedState;
    return ds({ ref: t3, nextImpl: e5 }), function() {
      if (K & 2) throw Error(i2(440));
      return t3.impl.apply(void 0, arguments);
    };
  }
  function ps(e5, t3) {
    return cs(4, 2, e5, t3);
  }
  function ms(e5, t3) {
    return cs(4, 4, e5, t3);
  }
  function hs(e5, t3) {
    if (typeof t3 == `function`) {
      e5 = e5();
      var n3 = t3(e5);
      return function() {
        typeof n3 == `function` ? n3() : t3(null);
      };
    }
    if (t3 != null) return e5 = e5(), t3.current = e5, function() {
      t3.current = null;
    };
  }
  function gs(e5, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e5]), cs(4, 4, hs.bind(null, t3, e5), n3);
  }
  function _s2() {
  }
  function vs(e5, t3) {
    var n3 = Ao();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n3.memoizedState;
    return t3 !== null && xo(t3, r3[1]) ? r3[0] : (n3.memoizedState = [e5, t3], e5);
  }
  function ys(e5, t3) {
    var n3 = Ao();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n3.memoizedState;
    if (t3 !== null && xo(t3, r3[1])) return r3[0];
    if (r3 = e5(), go) {
      P2(true);
      try {
        e5();
      } finally {
        P2(false);
      }
    }
    return n3.memoizedState = [r3, t3], r3;
  }
  function bs(e5, t3, n3) {
    return n3 === void 0 || fo & 1073741824 && !(Y & 261930) ? e5.memoizedState = t3 : (e5.memoizedState = n3, e5 = mu(), V.lanes |= e5, Gl |= e5, n3);
  }
  function xs(e5, t3, n3, r3) {
    return Cr2(n3, t3) ? n3 : Za.current === null ? !(fo & 42) || fo & 1073741824 && !(Y & 261930) ? (rc = true, e5.memoizedState = n3) : (e5 = mu(), V.lanes |= e5, Gl |= e5, t3) : (e5 = bs(e5, n3, r3), Cr2(e5, t3) || (rc = true), e5);
  }
  function Ss(e5, t3, n3, r3, i3) {
    var a3 = k2.p;
    k2.p = a3 !== 0 && 8 > a3 ? a3 : 8;
    var o3 = O2.T, s3 = {};
    O2.T = s3, Ps(e5, false, t3, n3);
    try {
      var c3 = i3(), l3 = O2.S;
      l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? Ns(e5, t3, ha(c3, r3), pu(e5)) : Ns(e5, t3, r3, pu(e5));
    } catch (n4) {
      Ns(e5, t3, { then: function() {
      }, status: `rejected`, reason: n4 }, pu());
    } finally {
      k2.p = a3, o3 !== null && s3.types !== null && (o3.types = s3.types), O2.T = o3;
    }
  }
  function Cs() {
  }
  function ws(e5, t3, n3, r3) {
    if (e5.tag !== 5) throw Error(i2(476));
    var a3 = Ts(e5).queue;
    Ss(e5, a3, t3, A2, n3 === null ? Cs : function() {
      return Es(e5), n3(r3);
    });
  }
  function Ts(e5) {
    var t3 = e5.memoizedState;
    if (t3 !== null) return t3;
    t3 = { memoizedState: A2, baseState: A2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fo, lastRenderedState: A2 }, next: null };
    var n3 = {};
    return t3.next = { memoizedState: n3, baseState: n3, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fo, lastRenderedState: n3 }, next: null }, e5.memoizedState = t3, e5 = e5.alternate, e5 !== null && (e5.memoizedState = t3), t3;
  }
  function Es(e5) {
    var t3 = Ts(e5);
    t3.next === null && (t3 = e5.alternate.memoizedState), Ns(e5, t3.next.queue, {}, pu());
  }
  function Ds() {
    return ea(Qf);
  }
  function Os() {
    return Ao().memoizedState;
  }
  function ks() {
    return Ao().memoizedState;
  }
  function As(e5) {
    for (var t3 = e5.return; t3 !== null; ) {
      switch (t3.tag) {
        case 24:
        case 3:
          var n3 = pu();
          e5 = Ha(n3);
          var r3 = Ua(t3, e5, n3);
          r3 !== null && (hu(r3, t3, n3), Wa(r3, t3, n3)), t3 = { cache: sa() }, e5.payload = t3;
          return;
      }
      t3 = t3.return;
    }
  }
  function js(e5, t3, n3) {
    var r3 = pu();
    n3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null }, Fs(e5) ? Is(t3, n3) : (n3 = ni(e5, t3, n3, r3), n3 !== null && (hu(n3, e5, r3), Ls(n3, t3, r3)));
  }
  function Ms(e5, t3, n3) {
    Ns(e5, t3, n3, pu());
  }
  function Ns(e5, t3, n3, r3) {
    var i3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null };
    if (Fs(e5)) Is(t3, i3);
    else {
      var a3 = e5.alternate;
      if (e5.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
        var o3 = t3.lastRenderedState, s3 = a3(o3, n3);
        if (i3.hasEagerState = true, i3.eagerState = s3, Cr2(s3, o3)) return ti(e5, t3, i3, 0), q === null && ei2(), false;
      } catch {
      }
      if (n3 = ni(e5, t3, i3, r3), n3 !== null) return hu(n3, e5, r3), Ls(n3, t3, r3), true;
    }
    return false;
  }
  function Ps(e5, t3, n3, r3) {
    if (r3 = { lane: 2, revertLane: dd(), gesture: null, action: r3, hasEagerState: false, eagerState: null, next: null }, Fs(e5)) {
      if (t3) throw Error(i2(479));
    } else t3 = ni(e5, n3, r3, 2), t3 !== null && hu(t3, e5, 2);
  }
  function Fs(e5) {
    var t3 = e5.alternate;
    return e5 === V || t3 !== null && t3 === V;
  }
  function Is(e5, t3) {
    ho = mo = true;
    var n3 = e5.pending;
    n3 === null ? t3.next = t3 : (t3.next = n3.next, n3.next = t3), e5.pending = t3;
  }
  function Ls(e5, t3, n3) {
    if (n3 & 4194048) {
      var r3 = t3.lanes;
      r3 &= e5.pendingLanes, n3 |= r3, t3.lanes = n3, nt2(e5, n3);
    }
  }
  var Rs = { readContext: ea, use: No, useCallback: U, useContext: U, useEffect: U, useImperativeHandle: U, useLayoutEffect: U, useInsertionEffect: U, useMemo: U, useReducer: U, useRef: U, useState: U, useDebugValue: U, useDeferredValue: U, useTransition: U, useSyncExternalStore: U, useId: U, useHostTransitionStatus: U, useFormState: U, useActionState: U, useOptimistic: U, useMemoCache: U, useCacheRefresh: U };
  Rs.useEffectEvent = U;
  var zs = { readContext: ea, use: No, useCallback: function(e5, t3) {
    return ko().memoizedState = [e5, t3 === void 0 ? null : t3], e5;
  }, useContext: ea, useEffect: ls, useImperativeHandle: function(e5, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e5]), ss(4194308, 4, hs.bind(null, t3, e5), n3);
  }, useLayoutEffect: function(e5, t3) {
    return ss(4194308, 4, e5, t3);
  }, useInsertionEffect: function(e5, t3) {
    ss(4, 2, e5, t3);
  }, useMemo: function(e5, t3) {
    var n3 = ko();
    t3 = t3 === void 0 ? null : t3;
    var r3 = e5();
    if (go) {
      P2(true);
      try {
        e5();
      } finally {
        P2(false);
      }
    }
    return n3.memoizedState = [r3, t3], r3;
  }, useReducer: function(e5, t3, n3) {
    var r3 = ko();
    if (n3 !== void 0) {
      var i3 = n3(t3);
      if (go) {
        P2(true);
        try {
          n3(t3);
        } finally {
          P2(false);
        }
      }
    } else i3 = t3;
    return r3.memoizedState = r3.baseState = i3, e5 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e5, lastRenderedState: i3 }, r3.queue = e5, e5 = e5.dispatch = js.bind(null, V, e5), [r3.memoizedState, e5];
  }, useRef: function(e5) {
    var t3 = ko();
    return e5 = { current: e5 }, t3.memoizedState = e5;
  }, useState: function(e5) {
    e5 = Go(e5);
    var t3 = e5.queue, n3 = Ms.bind(null, V, t3);
    return t3.dispatch = n3, [e5.memoizedState, n3];
  }, useDebugValue: _s2, useDeferredValue: function(e5, t3) {
    return bs(ko(), e5, t3);
  }, useTransition: function() {
    var e5 = Go(false);
    return e5 = Ss.bind(null, V, e5.queue, true, false), ko().memoizedState = e5, [false, e5];
  }, useSyncExternalStore: function(e5, t3, n3) {
    var r3 = V, a3 = ko();
    if (B) {
      if (n3 === void 0) throw Error(i2(407));
      n3 = n3();
    } else {
      if (n3 = t3(), q === null) throw Error(i2(349));
      Y & 127 || Bo(r3, t3, n3);
    }
    a3.memoizedState = n3;
    var o3 = { value: n3, getSnapshot: t3 };
    return a3.queue = o3, ls(Ho.bind(null, r3, o3, e5), [e5]), r3.flags |= 2048, as(9, { destroy: void 0 }, Vo.bind(null, r3, o3, n3, t3), null), n3;
  }, useId: function() {
    var e5 = ko(), t3 = q.identifierPrefix;
    if (B) {
      var n3 = Di, r3 = Ei;
      n3 = (r3 & ~(1 << 32 - Ve2(r3) - 1)).toString(32) + n3, t3 = `_` + t3 + `R_` + n3, n3 = _o2++, 0 < n3 && (t3 += `H` + n3.toString(32)), t3 += `_`;
    } else n3 = bo++, t3 = `_` + t3 + `r_` + n3.toString(32) + `_`;
    return e5.memoizedState = t3;
  }, useHostTransitionStatus: Ds, useFormState: es, useActionState: es, useOptimistic: function(e5) {
    var t3 = ko();
    t3.memoizedState = t3.baseState = e5;
    var n3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t3.queue = n3, t3 = Ps.bind(null, V, true, n3), n3.dispatch = t3, [e5, t3];
  }, useMemoCache: Po, useCacheRefresh: function() {
    return ko().memoizedState = As.bind(null, V);
  }, useEffectEvent: function(e5) {
    var t3 = ko(), n3 = { impl: e5 };
    return t3.memoizedState = n3, function() {
      if (K & 2) throw Error(i2(440));
      return n3.impl.apply(void 0, arguments);
    };
  } }, Bs = { readContext: ea, use: No, useCallback: vs, useContext: ea, useEffect: us, useImperativeHandle: gs, useInsertionEffect: ps, useLayoutEffect: ms, useMemo: ys, useReducer: Io, useRef: os, useState: function() {
    return Io(Fo);
  }, useDebugValue: _s2, useDeferredValue: function(e5, t3) {
    return xs(Ao(), H.memoizedState, e5, t3);
  }, useTransition: function() {
    var e5 = Io(Fo)[0], t3 = Ao().memoizedState;
    return [typeof e5 == `boolean` ? e5 : Mo(e5), t3];
  }, useSyncExternalStore: zo, useId: Os, useHostTransitionStatus: Ds, useFormState: ts, useActionState: ts, useOptimistic: function(e5, t3) {
    return Ko(Ao(), H, e5, t3);
  }, useMemoCache: Po, useCacheRefresh: ks };
  Bs.useEffectEvent = fs;
  var Vs = { readContext: ea, use: No, useCallback: vs, useContext: ea, useEffect: us, useImperativeHandle: gs, useInsertionEffect: ps, useLayoutEffect: ms, useMemo: ys, useReducer: Ro, useRef: os, useState: function() {
    return Ro(Fo);
  }, useDebugValue: _s2, useDeferredValue: function(e5, t3) {
    var n3 = Ao();
    return H === null ? bs(n3, e5, t3) : xs(n3, H.memoizedState, e5, t3);
  }, useTransition: function() {
    var e5 = Ro(Fo)[0], t3 = Ao().memoizedState;
    return [typeof e5 == `boolean` ? e5 : Mo(e5), t3];
  }, useSyncExternalStore: zo, useId: Os, useHostTransitionStatus: Ds, useFormState: is, useActionState: is, useOptimistic: function(e5, t3) {
    var n3 = Ao();
    return H === null ? (n3.baseState = e5, [e5, n3.queue.dispatch]) : Ko(n3, H, e5, t3);
  }, useMemoCache: Po, useCacheRefresh: ks };
  Vs.useEffectEvent = fs;
  function Hs(e5, t3, n3, r3) {
    t3 = e5.memoizedState, n3 = n3(r3, t3), n3 = n3 == null ? t3 : h2({}, t3, n3), e5.memoizedState = n3, e5.lanes === 0 && (e5.updateQueue.baseState = n3);
  }
  var Us = { enqueueSetState: function(e5, t3, n3) {
    e5 = e5._reactInternals;
    var r3 = pu(), i3 = Ha(r3);
    i3.payload = t3, n3 != null && (i3.callback = n3), t3 = Ua(e5, i3, r3), t3 !== null && (hu(t3, e5, r3), Wa(t3, e5, r3));
  }, enqueueReplaceState: function(e5, t3, n3) {
    e5 = e5._reactInternals;
    var r3 = pu(), i3 = Ha(r3);
    i3.tag = 1, i3.payload = t3, n3 != null && (i3.callback = n3), t3 = Ua(e5, i3, r3), t3 !== null && (hu(t3, e5, r3), Wa(t3, e5, r3));
  }, enqueueForceUpdate: function(e5, t3) {
    e5 = e5._reactInternals;
    var n3 = pu(), r3 = Ha(n3);
    r3.tag = 2, t3 != null && (r3.callback = t3), t3 = Ua(e5, r3, n3), t3 !== null && (hu(t3, e5, n3), Wa(t3, e5, n3));
  } };
  function Ws(e5, t3, n3, r3, i3, a3, o3) {
    return e5 = e5.stateNode, typeof e5.shouldComponentUpdate == `function` ? e5.shouldComponentUpdate(r3, a3, o3) : t3.prototype && t3.prototype.isPureReactComponent ? !wr2(n3, r3) || !wr2(i3, a3) : true;
  }
  function Gs(e5, t3, n3, r3) {
    e5 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n3, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n3, r3), t3.state !== e5 && Us.enqueueReplaceState(t3, t3.state, null);
  }
  function Ks(e5, t3) {
    var n3 = t3;
    if (`ref` in t3) for (var r3 in n3 = {}, t3) r3 !== `ref` && (n3[r3] = t3[r3]);
    if (e5 = e5.defaultProps) for (var i3 in n3 === t3 && (n3 = h2({}, n3)), e5) n3[i3] === void 0 && (n3[i3] = e5[i3]);
    return n3;
  }
  function qs(e5) {
    Xr2(e5);
  }
  function Js(e5) {
    console.error(e5);
  }
  function Ys(e5) {
    Xr2(e5);
  }
  function Xs(e5, t3) {
    try {
      var n3 = e5.onUncaughtError;
      n3(t3.value, { componentStack: t3.stack });
    } catch (e6) {
      setTimeout(function() {
        throw e6;
      });
    }
  }
  function Zs(e5, t3, n3) {
    try {
      var r3 = e5.onCaughtError;
      r3(n3.value, { componentStack: n3.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
    } catch (e6) {
      setTimeout(function() {
        throw e6;
      });
    }
  }
  function Qs(e5, t3, n3) {
    return n3 = Ha(n3), n3.tag = 3, n3.payload = { element: null }, n3.callback = function() {
      Xs(e5, t3);
    }, n3;
  }
  function $s(e5) {
    return e5 = Ha(e5), e5.tag = 3, e5;
  }
  function ec(e5, t3, n3, r3) {
    var i3 = n3.type.getDerivedStateFromError;
    if (typeof i3 == `function`) {
      var a3 = r3.value;
      e5.payload = function() {
        return i3(a3);
      }, e5.callback = function() {
        Zs(t3, n3, r3);
      };
    }
    var o3 = n3.stateNode;
    o3 !== null && typeof o3.componentDidCatch == `function` && (e5.callback = function() {
      Zs(t3, n3, r3), typeof i3 != `function` && (ru === null ? ru = /* @__PURE__ */ new Set([this]) : ru.add(this));
      var e6 = r3.stack;
      this.componentDidCatch(r3.value, { componentStack: e6 === null ? `` : e6 });
    });
  }
  function tc(e5, t3, n3, r3, a3) {
    if (n3.flags |= 32768, typeof r3 == `object` && r3 && typeof r3.then == `function`) {
      if (t3 = n3.alternate, t3 !== null && Zi(t3, n3, a3, true), n3 = no.current, n3 !== null) {
        switch (n3.tag) {
          case 31:
          case 13:
            return ro === null ? Du() : n3.alternate === null && Wl === 0 && (Wl = 3), n3.flags &= -257, n3.flags |= 65536, n3.lanes = a3, r3 === wa ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? n3.updateQueue = /* @__PURE__ */ new Set([r3]) : t3.add(r3), Gu(e5, r3, a3)), false;
          case 22:
            return n3.flags |= 65536, r3 === wa ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r3]) }, n3.updateQueue = t3) : (n3 = t3.retryQueue, n3 === null ? t3.retryQueue = /* @__PURE__ */ new Set([r3]) : n3.add(r3)), Gu(e5, r3, a3)), false;
        }
        throw Error(i2(435, n3.tag));
      }
      return Gu(e5, r3, a3), Du(), false;
    }
    if (B) return t3 = no.current, t3 === null ? (r3 !== Ii && (t3 = Error(i2(423), { cause: r3 }), Ui(vi(t3, n3))), e5 = e5.current.alternate, e5.flags |= 65536, a3 &= -a3, e5.lanes |= a3, r3 = vi(r3, n3), a3 = Qs(e5.stateNode, r3, a3), Ga(e5, a3), Wl !== 4 && (Wl = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = a3, r3 !== Ii && (e5 = Error(i2(422), { cause: r3 }), Ui(vi(e5, n3)))), false;
    var o3 = Error(i2(520), { cause: r3 });
    if (o3 = vi(o3, n3), Xl === null ? Xl = [o3] : Xl.push(o3), Wl !== 4 && (Wl = 2), t3 === null) return true;
    r3 = vi(r3, n3), n3 = t3;
    do {
      switch (n3.tag) {
        case 3:
          return n3.flags |= 65536, e5 = a3 & -a3, n3.lanes |= e5, e5 = Qs(n3.stateNode, r3, e5), Ga(n3, e5), false;
        case 1:
          if (t3 = n3.type, o3 = n3.stateNode, !(n3.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || o3 !== null && typeof o3.componentDidCatch == `function` && (ru === null || !ru.has(o3)))) return n3.flags |= 65536, a3 &= -a3, n3.lanes |= a3, a3 = $s(a3), ec(a3, e5, n3, r3), Ga(n3, a3), false;
      }
      n3 = n3.return;
    } while (n3 !== null);
    return false;
  }
  var nc = Error(i2(461)), rc = false;
  function ic(e5, t3, n3, r3) {
    t3.child = e5 === null ? Ra(t3, null, n3, r3) : La(t3, e5.child, n3, r3);
  }
  function ac(e5, t3, n3, r3, i3) {
    n3 = n3.render;
    var a3 = t3.ref;
    if (`ref` in r3) {
      var o3 = {};
      for (var s3 in r3) s3 !== `ref` && (o3[s3] = r3[s3]);
    } else o3 = r3;
    return $i(t3), r3 = So(e5, t3, n3, o3, a3, i3), s3 = Eo(), e5 !== null && !rc ? (Do(e5, t3, i3), kc(e5, t3, i3)) : (B && s3 && Ai(t3), t3.flags |= 1, ic(e5, t3, r3, i3), t3.child);
  }
  function oc(e5, t3, n3, r3, i3) {
    if (e5 === null) {
      var a3 = n3.type;
      return typeof a3 == `function` && !li(a3) && a3.defaultProps === void 0 && n3.compare === null ? (t3.tag = 15, t3.type = a3, sc(e5, t3, a3, r3, i3)) : (e5 = fi(n3.type, null, r3, t3, t3.mode, i3), e5.ref = t3.ref, e5.return = t3, t3.child = e5);
    }
    if (a3 = e5.child, !Ac(e5, i3)) {
      var o3 = a3.memoizedProps;
      if (n3 = n3.compare, n3 = n3 === null ? wr2 : n3, n3(o3, r3) && e5.ref === t3.ref) return kc(e5, t3, i3);
    }
    return t3.flags |= 1, e5 = ui(a3, r3), e5.ref = t3.ref, e5.return = t3, t3.child = e5;
  }
  function sc(e5, t3, n3, r3, i3) {
    if (e5 !== null) {
      var a3 = e5.memoizedProps;
      if (wr2(a3, r3) && e5.ref === t3.ref) if (rc = false, t3.pendingProps = r3 = a3, Ac(e5, i3)) e5.flags & 131072 && (rc = true);
      else return t3.lanes = e5.lanes, kc(e5, t3, i3);
    }
    return hc(e5, t3, n3, r3, i3);
  }
  function cc(e5, t3, n3, r3) {
    var i3 = r3.children, a3 = e5 === null ? null : e5.memoizedState;
    if (e5 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
      if (t3.flags & 128) {
        if (a3 = a3 === null ? n3 : a3.baseLanes | n3, e5 !== null) {
          for (r3 = t3.child = e5.child, i3 = 0; r3 !== null; ) i3 = i3 | r3.lanes | r3.childLanes, r3 = r3.sibling;
          r3 = i3 & ~a3;
        } else r3 = 0, t3.child = null;
        return uc(e5, t3, a3, n3, r3);
      }
      if (n3 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e5 !== null && ya(t3, a3 === null ? null : a3.cachePool), a3 === null ? eo() : $a(t3, a3), oo(t3);
      else return r3 = t3.lanes = 536870912, uc(e5, t3, a3 === null ? n3 : a3.baseLanes | n3, n3, r3);
    } else a3 === null ? (e5 !== null && ya(t3, null), eo(), so(t3)) : (ya(t3, a3.cachePool), $a(t3, a3), so(t3), t3.memoizedState = null);
    return ic(e5, t3, i3, n3), t3.child;
  }
  function lc(e5, t3) {
    return e5 !== null && e5.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
  }
  function uc(e5, t3, n3, r3, i3) {
    var a3 = va();
    return a3 = a3 === null ? null : { parent: oa._currentValue, pool: a3 }, t3.memoizedState = { baseLanes: n3, cachePool: a3 }, e5 !== null && ya(t3, null), eo(), oo(t3), e5 !== null && Zi(e5, t3, r3, true), t3.childLanes = i3, null;
  }
  function dc(e5, t3) {
    return t3 = wc({ mode: t3.mode, children: t3.children }, e5.mode), t3.ref = e5.ref, e5.child = t3, t3.return = e5, t3;
  }
  function fc(e5, t3, n3) {
    return La(t3, e5.child, null, n3), e5 = dc(t3, t3.pendingProps), e5.flags |= 2, co(t3), t3.memoizedState = null, e5;
  }
  function pc(e5, t3, n3) {
    var r3 = t3.pendingProps, a3 = (t3.flags & 128) != 0;
    if (t3.flags &= -129, e5 === null) {
      if (B) {
        if (r3.mode === `hidden`) return e5 = dc(t3, r3), t3.lanes = 536870912, lc(null, e5);
        if (ao(t3), (e5 = z) ? (e5 = rf(e5, Fi), e5 = e5 !== null && e5.data === `&` ? e5 : null, e5 !== null && (t3.memoizedState = { dehydrated: e5, treeContext: Ti === null ? null : { id: Ei, overflow: Di }, retryLane: 536870912, hydrationErrors: null }, n3 = hi(e5), n3.return = t3, t3.child = n3, Ni = t3, z = null)) : e5 = null, e5 === null) throw Li(t3);
        return t3.lanes = 536870912, null;
      }
      return dc(t3, r3);
    }
    var o3 = e5.memoizedState;
    if (o3 !== null) {
      var s3 = o3.dehydrated;
      if (ao(t3), a3) if (t3.flags & 256) t3.flags &= -257, t3 = fc(e5, t3, n3);
      else if (t3.memoizedState !== null) t3.child = e5.child, t3.flags |= 128, t3 = null;
      else throw Error(i2(558));
      else if (rc || Zi(e5, t3, n3, false), a3 = (n3 & e5.childLanes) !== 0, rc || a3) {
        if (r3 = q, r3 !== null && (s3 = rt2(r3, n3), s3 !== 0 && s3 !== o3.retryLane)) throw o3.retryLane = s3, ri(e5, s3), hu(r3, e5, s3), nc;
        Du(), t3 = fc(e5, t3, n3);
      } else e5 = o3.treeContext, z = cf(s3.nextSibling), Ni = t3, B = true, Pi = null, Fi = false, e5 !== null && Mi(t3, e5), t3 = dc(t3, r3), t3.flags |= 4096;
      return t3;
    }
    return e5 = ui(e5.child, { mode: r3.mode, children: r3.children }), e5.ref = t3.ref, t3.child = e5, e5.return = t3, e5;
  }
  function mc(e5, t3) {
    var n3 = t3.ref;
    if (n3 === null) e5 !== null && e5.ref !== null && (t3.flags |= 4194816);
    else {
      if (typeof n3 != `function` && typeof n3 != `object`) throw Error(i2(284));
      (e5 === null || e5.ref !== n3) && (t3.flags |= 4194816);
    }
  }
  function hc(e5, t3, n3, r3, i3) {
    return $i(t3), n3 = So(e5, t3, n3, r3, void 0, i3), r3 = Eo(), e5 !== null && !rc ? (Do(e5, t3, i3), kc(e5, t3, i3)) : (B && r3 && Ai(t3), t3.flags |= 1, ic(e5, t3, n3, i3), t3.child);
  }
  function gc(e5, t3, n3, r3, i3, a3) {
    return $i(t3), t3.updateQueue = null, n3 = wo(t3, r3, n3, i3), Co(e5), r3 = Eo(), e5 !== null && !rc ? (Do(e5, t3, a3), kc(e5, t3, a3)) : (B && r3 && Ai(t3), t3.flags |= 1, ic(e5, t3, n3, a3), t3.child);
  }
  function _c2(e5, t3, n3, r3, i3) {
    if ($i(t3), t3.stateNode === null) {
      var a3 = oi, o3 = n3.contextType;
      typeof o3 == `object` && o3 && (a3 = ea(o3)), a3 = new n3(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = Us, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, Ba(t3), o3 = n3.contextType, a3.context = typeof o3 == `object` && o3 ? ea(o3) : oi, a3.state = t3.memoizedState, o3 = n3.getDerivedStateFromProps, typeof o3 == `function` && (Hs(t3, n3, o3, r3), a3.state = t3.memoizedState), typeof n3.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o3 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o3 !== a3.state && Us.enqueueReplaceState(a3, a3.state, null), Ja(t3, r3, a3, i3), qa(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
    } else if (e5 === null) {
      a3 = t3.stateNode;
      var s3 = t3.memoizedProps, c3 = Ks(n3, s3);
      a3.props = c3;
      var l3 = a3.context, u2 = n3.contextType;
      o3 = oi, typeof u2 == `object` && u2 && (o3 = ea(u2));
      var d3 = n3.getDerivedStateFromProps;
      u2 = typeof d3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u2 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l3 !== o3) && Gs(t3, a3, r3, o3), za = false;
      var f2 = t3.memoizedState;
      a3.state = f2, Ja(t3, r3, a3, i3), qa(), l3 = t3.memoizedState, s3 || f2 !== l3 || za ? (typeof d3 == `function` && (Hs(t3, n3, d3, r3), l3 = t3.memoizedState), (c3 = za || Ws(t3, n3, c3, r3, f2, l3, o3)) ? (u2 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l3), a3.props = r3, a3.state = l3, a3.context = o3, r3 = c3) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
    } else {
      a3 = t3.stateNode, Va(e5, t3), o3 = t3.memoizedProps, u2 = Ks(n3, o3), a3.props = u2, d3 = t3.pendingProps, f2 = a3.context, l3 = n3.contextType, c3 = oi, typeof l3 == `object` && l3 && (c3 = ea(l3)), s3 = n3.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o3 !== d3 || f2 !== c3) && Gs(t3, a3, r3, c3), za = false, f2 = t3.memoizedState, a3.state = f2, Ja(t3, r3, a3, i3), qa();
      var p3 = t3.memoizedState;
      o3 !== d3 || f2 !== p3 || za || e5 !== null && e5.dependencies !== null && Qi(e5.dependencies) ? (typeof s3 == `function` && (Hs(t3, n3, s3, r3), p3 = t3.memoizedState), (u2 = za || Ws(t3, n3, u2, r3, f2, p3, c3) || e5 !== null && e5.dependencies !== null && Qi(e5.dependencies)) ? (l3 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p3, c3), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p3, c3)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o3 === e5.memoizedProps && f2 === e5.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e5.memoizedProps && f2 === e5.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p3), a3.props = r3, a3.state = p3, a3.context = c3, r3 = u2) : (typeof a3.componentDidUpdate != `function` || o3 === e5.memoizedProps && f2 === e5.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e5.memoizedProps && f2 === e5.memoizedState || (t3.flags |= 1024), r3 = false);
    }
    return a3 = r3, mc(e5, t3), r3 = (t3.flags & 128) != 0, a3 || r3 ? (a3 = t3.stateNode, n3 = r3 && typeof n3.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e5 !== null && r3 ? (t3.child = La(t3, e5.child, null, i3), t3.child = La(t3, null, n3, i3)) : ic(e5, t3, n3, i3), t3.memoizedState = a3.state, e5 = t3.child) : e5 = kc(e5, t3, i3), e5;
  }
  function vc(e5, t3, n3, r3) {
    return Vi(), t3.flags |= 256, ic(e5, t3, n3, r3), t3.child;
  }
  var yc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function bc(e5) {
    return { baseLanes: e5, cachePool: ba() };
  }
  function xc(e5, t3, n3) {
    return e5 = e5 === null ? 0 : e5.childLanes & ~n3, t3 && (e5 |= Jl), e5;
  }
  function Sc(e5, t3, n3) {
    var r3 = t3.pendingProps, a3 = false, o3 = (t3.flags & 128) != 0, s3;
    if ((s3 = o3) || (s3 = e5 !== null && e5.memoizedState === null ? false : (lo.current & 2) != 0), s3 && (a3 = true, t3.flags &= -129), s3 = (t3.flags & 32) != 0, t3.flags &= -33, e5 === null) {
      if (B) {
        if (a3 ? io(t3) : so(t3), (e5 = z) ? (e5 = rf(e5, Fi), e5 = e5 !== null && e5.data !== `&` ? e5 : null, e5 !== null && (t3.memoizedState = { dehydrated: e5, treeContext: Ti === null ? null : { id: Ei, overflow: Di }, retryLane: 536870912, hydrationErrors: null }, n3 = hi(e5), n3.return = t3, t3.child = n3, Ni = t3, z = null)) : e5 = null, e5 === null) throw Li(t3);
        return of(e5) ? t3.lanes = 32 : t3.lanes = 536870912, null;
      }
      var c3 = r3.children;
      return r3 = r3.fallback, a3 ? (so(t3), a3 = t3.mode, c3 = wc({ mode: `hidden`, children: c3 }, a3), r3 = pi(r3, a3, n3, null), c3.return = t3, r3.return = t3, c3.sibling = r3, t3.child = c3, r3 = t3.child, r3.memoizedState = bc(n3), r3.childLanes = xc(e5, s3, n3), t3.memoizedState = yc, lc(null, r3)) : (io(t3), Cc(t3, c3));
    }
    var l3 = e5.memoizedState;
    if (l3 !== null && (c3 = l3.dehydrated, c3 !== null)) {
      if (o3) t3.flags & 256 ? (io(t3), t3.flags &= -257, t3 = Tc(e5, t3, n3)) : t3.memoizedState === null ? (so(t3), c3 = r3.fallback, a3 = t3.mode, r3 = wc({ mode: `visible`, children: r3.children }, a3), c3 = pi(c3, a3, n3, null), c3.flags |= 2, r3.return = t3, c3.return = t3, r3.sibling = c3, t3.child = r3, La(t3, e5.child, null, n3), r3 = t3.child, r3.memoizedState = bc(n3), r3.childLanes = xc(e5, s3, n3), t3.memoizedState = yc, t3 = lc(null, r3)) : (so(t3), t3.child = e5.child, t3.flags |= 128, t3 = null);
      else if (io(t3), of(c3)) {
        if (s3 = c3.nextSibling && c3.nextSibling.dataset, s3) var u2 = s3.dgst;
        s3 = u2, r3 = Error(i2(419)), r3.stack = ``, r3.digest = s3, Ui({ value: r3, source: null, stack: null }), t3 = Tc(e5, t3, n3);
      } else if (rc || Zi(e5, t3, n3, false), s3 = (n3 & e5.childLanes) !== 0, rc || s3) {
        if (s3 = q, s3 !== null && (r3 = rt2(s3, n3), r3 !== 0 && r3 !== l3.retryLane)) throw l3.retryLane = r3, ri(e5, r3), hu(s3, e5, r3), nc;
        af(c3) || Du(), t3 = Tc(e5, t3, n3);
      } else af(c3) ? (t3.flags |= 192, t3.child = e5.child, t3 = null) : (e5 = l3.treeContext, z = cf(c3.nextSibling), Ni = t3, B = true, Pi = null, Fi = false, e5 !== null && Mi(t3, e5), t3 = Cc(t3, r3.children), t3.flags |= 4096);
      return t3;
    }
    return a3 ? (so(t3), c3 = r3.fallback, a3 = t3.mode, l3 = e5.child, u2 = l3.sibling, r3 = ui(l3, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = l3.subtreeFlags & 65011712, u2 === null ? (c3 = pi(c3, a3, n3, null), c3.flags |= 2) : c3 = ui(u2, c3), c3.return = t3, r3.return = t3, r3.sibling = c3, t3.child = r3, lc(null, r3), r3 = t3.child, c3 = e5.child.memoizedState, c3 === null ? c3 = bc(n3) : (a3 = c3.cachePool, a3 === null ? a3 = ba() : (l3 = oa._currentValue, a3 = a3.parent === l3 ? a3 : { parent: l3, pool: l3 }), c3 = { baseLanes: c3.baseLanes | n3, cachePool: a3 }), r3.memoizedState = c3, r3.childLanes = xc(e5, s3, n3), t3.memoizedState = yc, lc(e5.child, r3)) : (io(t3), n3 = e5.child, e5 = n3.sibling, n3 = ui(n3, { mode: `visible`, children: r3.children }), n3.return = t3, n3.sibling = null, e5 !== null && (s3 = t3.deletions, s3 === null ? (t3.deletions = [e5], t3.flags |= 16) : s3.push(e5)), t3.child = n3, t3.memoizedState = null, n3);
  }
  function Cc(e5, t3) {
    return t3 = wc({ mode: `visible`, children: t3 }, e5.mode), t3.return = e5, e5.child = t3;
  }
  function wc(e5, t3) {
    return e5 = ci(22, e5, null, t3), e5.lanes = 0, e5;
  }
  function Tc(e5, t3, n3) {
    return La(t3, e5.child, null, n3), e5 = Cc(t3, t3.pendingProps.children), e5.flags |= 2, t3.memoizedState = null, e5;
  }
  function Ec(e5, t3, n3) {
    e5.lanes |= t3;
    var r3 = e5.alternate;
    r3 !== null && (r3.lanes |= t3), Yi(e5.return, t3, n3);
  }
  function Dc(e5, t3, n3, r3, i3, a3) {
    var o3 = e5.memoizedState;
    o3 === null ? e5.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n3, tailMode: i3, treeForkCount: a3 } : (o3.isBackwards = t3, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r3, o3.tail = n3, o3.tailMode = i3, o3.treeForkCount = a3);
  }
  function Oc(e5, t3, n3) {
    var r3 = t3.pendingProps, i3 = r3.revealOrder, a3 = r3.tail;
    r3 = r3.children;
    var o3 = lo.current, s3 = (o3 & 2) != 0;
    if (s3 ? (o3 = o3 & 1 | 2, t3.flags |= 128) : o3 &= 1, j2(lo, o3), ic(e5, t3, r3, n3), r3 = B ? Si : 0, !s3 && e5 !== null && e5.flags & 128) a: for (e5 = t3.child; e5 !== null; ) {
      if (e5.tag === 13) e5.memoizedState !== null && Ec(e5, n3, t3);
      else if (e5.tag === 19) Ec(e5, n3, t3);
      else if (e5.child !== null) {
        e5.child.return = e5, e5 = e5.child;
        continue;
      }
      if (e5 === t3) break a;
      for (; e5.sibling === null; ) {
        if (e5.return === null || e5.return === t3) break a;
        e5 = e5.return;
      }
      e5.sibling.return = e5.return, e5 = e5.sibling;
    }
    switch (i3) {
      case `forwards`:
        for (n3 = t3.child, i3 = null; n3 !== null; ) e5 = n3.alternate, e5 !== null && uo(e5) === null && (i3 = n3), n3 = n3.sibling;
        n3 = i3, n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null), Dc(t3, false, i3, n3, a3, r3);
        break;
      case `backwards`:
      case `unstable_legacy-backwards`:
        for (n3 = null, i3 = t3.child, t3.child = null; i3 !== null; ) {
          if (e5 = i3.alternate, e5 !== null && uo(e5) === null) {
            t3.child = i3;
            break;
          }
          e5 = i3.sibling, i3.sibling = n3, n3 = i3, i3 = e5;
        }
        Dc(t3, true, n3, null, a3, r3);
        break;
      case `together`:
        Dc(t3, false, null, null, void 0, r3);
        break;
      default:
        t3.memoizedState = null;
    }
    return t3.child;
  }
  function kc(e5, t3, n3) {
    if (e5 !== null && (t3.dependencies = e5.dependencies), Gl |= t3.lanes, (n3 & t3.childLanes) === 0) if (e5 !== null) {
      if (Zi(e5, t3, n3, false), (n3 & t3.childLanes) === 0) return null;
    } else return null;
    if (e5 !== null && t3.child !== e5.child) throw Error(i2(153));
    if (t3.child !== null) {
      for (e5 = t3.child, n3 = ui(e5, e5.pendingProps), t3.child = n3, n3.return = t3; e5.sibling !== null; ) e5 = e5.sibling, n3 = n3.sibling = ui(e5, e5.pendingProps), n3.return = t3;
      n3.sibling = null;
    }
    return t3.child;
  }
  function Ac(e5, t3) {
    return (e5.lanes & t3) === 0 ? (e5 = e5.dependencies, !!(e5 !== null && Qi(e5))) : true;
  }
  function jc(e5, t3, n3) {
    switch (t3.tag) {
      case 3:
        ge2(t3, t3.stateNode.containerInfo), qi(t3, oa, e5.memoizedState.cache), Vi();
        break;
      case 27:
      case 5:
        ve2(t3);
        break;
      case 4:
        ge2(t3, t3.stateNode.containerInfo);
        break;
      case 10:
        qi(t3, t3.type, t3.memoizedProps.value);
        break;
      case 31:
        if (t3.memoizedState !== null) return t3.flags |= 128, ao(t3), null;
        break;
      case 13:
        var r3 = t3.memoizedState;
        if (r3 !== null) return r3.dehydrated === null ? (n3 & t3.child.childLanes) === 0 ? (io(t3), e5 = kc(e5, t3, n3), e5 === null ? null : e5.sibling) : Sc(e5, t3, n3) : (io(t3), t3.flags |= 128, null);
        io(t3);
        break;
      case 19:
        var i3 = (e5.flags & 128) != 0;
        if (r3 = (n3 & t3.childLanes) !== 0, r3 || (r3 = (Zi(e5, t3, n3, false), (n3 & t3.childLanes) !== 0)), i3) {
          if (r3) return Oc(e5, t3, n3);
          t3.flags |= 128;
        }
        if (i3 = t3.memoizedState, i3 !== null && (i3.rendering = null, i3.tail = null, i3.lastEffect = null), j2(lo, lo.current), r3) break;
        return null;
      case 22:
        return t3.lanes = 0, cc(e5, t3, n3, t3.pendingProps);
      case 24:
        qi(t3, oa, e5.memoizedState.cache);
    }
    return kc(e5, t3, n3);
  }
  function Mc(e5, t3, n3) {
    if (e5 !== null) if (e5.memoizedProps !== t3.pendingProps) rc = true;
    else {
      if (!Ac(e5, n3) && !(t3.flags & 128)) return rc = false, jc(e5, t3, n3);
      rc = !!(e5.flags & 131072);
    }
    else rc = false, B && t3.flags & 1048576 && ki(t3, Si, t3.index);
    switch (t3.lanes = 0, t3.tag) {
      case 16:
        a: {
          var r3 = t3.pendingProps;
          if (e5 = Da(t3.elementType), t3.type = e5, typeof e5 == `function`) li(e5) ? (r3 = Ks(e5, r3), t3.tag = 1, t3 = _c2(null, t3, e5, r3, n3)) : (t3.tag = 0, t3 = hc(null, t3, e5, r3, n3));
          else {
            if (e5 != null) {
              var a3 = e5.$$typeof;
              if (a3 === C2) {
                t3.tag = 11, t3 = ac(null, t3, e5, r3, n3);
                break a;
              } else if (a3 === ne2) {
                t3.tag = 14, t3 = oc(null, t3, e5, r3, n3);
                break a;
              }
            }
            throw t3 = se2(e5) || e5, Error(i2(306, t3, ``));
          }
        }
        return t3;
      case 0:
        return hc(e5, t3, t3.type, t3.pendingProps, n3);
      case 1:
        return r3 = t3.type, a3 = Ks(r3, t3.pendingProps), _c2(e5, t3, r3, a3, n3);
      case 3:
        a: {
          if (ge2(t3, t3.stateNode.containerInfo), e5 === null) throw Error(i2(387));
          r3 = t3.pendingProps;
          var o3 = t3.memoizedState;
          a3 = o3.element, Va(e5, t3), Ja(t3, r3, null, n3);
          var s3 = t3.memoizedState;
          if (r3 = s3.cache, qi(t3, oa, r3), r3 !== o3.cache && Xi(t3, [oa], n3, true), qa(), r3 = s3.element, o3.isDehydrated) if (o3 = { element: r3, isDehydrated: false, cache: s3.cache }, t3.updateQueue.baseState = o3, t3.memoizedState = o3, t3.flags & 256) {
            t3 = vc(e5, t3, r3, n3);
            break a;
          } else if (r3 !== a3) {
            a3 = vi(Error(i2(424)), t3), Ui(a3), t3 = vc(e5, t3, r3, n3);
            break a;
          } else {
            switch (e5 = t3.stateNode.containerInfo, e5.nodeType) {
              case 9:
                e5 = e5.body;
                break;
              default:
                e5 = e5.nodeName === `HTML` ? e5.ownerDocument.body : e5;
            }
            for (z = cf(e5.firstChild), Ni = t3, B = true, Pi = null, Fi = true, n3 = Ra(t3, null, r3, n3), t3.child = n3; n3; ) n3.flags = n3.flags & -3 | 4096, n3 = n3.sibling;
          }
          else {
            if (Vi(), r3 === a3) {
              t3 = kc(e5, t3, n3);
              break a;
            }
            ic(e5, t3, r3, n3);
          }
          t3 = t3.child;
        }
        return t3;
      case 26:
        return mc(e5, t3), e5 === null ? (n3 = kf(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n3 : B || (n3 = t3.type, e5 = t3.pendingProps, r3 = Bd(me2.current).createElement(n3), r3[lt2] = t3, r3[ut2] = e5, Pd(r3, n3, e5), St2(r3), t3.stateNode = r3) : t3.memoizedState = kf(t3.type, e5.memoizedProps, t3.pendingProps, e5.memoizedState), null;
      case 27:
        return ve2(t3), e5 === null && B && (r3 = t3.stateNode = ff(t3.type, t3.pendingProps, me2.current), Ni = t3, Fi = true, a3 = z, Zd(t3.type) ? (lf = a3, z = cf(r3.firstChild)) : z = a3), ic(e5, t3, t3.pendingProps.children, n3), mc(e5, t3), e5 === null && (t3.flags |= 4194304), t3.child;
      case 5:
        return e5 === null && B && ((a3 = r3 = z) && (r3 = tf(r3, t3.type, t3.pendingProps, Fi), r3 === null ? a3 = false : (t3.stateNode = r3, Ni = t3, z = cf(r3.firstChild), Fi = false, a3 = true)), a3 || Li(t3)), ve2(t3), a3 = t3.type, o3 = t3.pendingProps, s3 = e5 === null ? null : e5.memoizedProps, r3 = o3.children, Ud(a3, o3) ? r3 = null : s3 !== null && Ud(a3, s3) && (t3.flags |= 32), t3.memoizedState !== null && (a3 = So(e5, t3, To, null, null, n3), Qf._currentValue = a3), mc(e5, t3), ic(e5, t3, r3, n3), t3.child;
      case 6:
        return e5 === null && B && ((e5 = n3 = z) && (n3 = nf(n3, t3.pendingProps, Fi), n3 === null ? e5 = false : (t3.stateNode = n3, Ni = t3, z = null, e5 = true)), e5 || Li(t3)), null;
      case 13:
        return Sc(e5, t3, n3);
      case 4:
        return ge2(t3, t3.stateNode.containerInfo), r3 = t3.pendingProps, e5 === null ? t3.child = La(t3, null, r3, n3) : ic(e5, t3, r3, n3), t3.child;
      case 11:
        return ac(e5, t3, t3.type, t3.pendingProps, n3);
      case 7:
        return ic(e5, t3, t3.pendingProps, n3), t3.child;
      case 8:
        return ic(e5, t3, t3.pendingProps.children, n3), t3.child;
      case 12:
        return ic(e5, t3, t3.pendingProps.children, n3), t3.child;
      case 10:
        return r3 = t3.pendingProps, qi(t3, t3.type, r3.value), ic(e5, t3, r3.children, n3), t3.child;
      case 9:
        return a3 = t3.type._context, r3 = t3.pendingProps.children, $i(t3), a3 = ea(a3), r3 = r3(a3), t3.flags |= 1, ic(e5, t3, r3, n3), t3.child;
      case 14:
        return oc(e5, t3, t3.type, t3.pendingProps, n3);
      case 15:
        return sc(e5, t3, t3.type, t3.pendingProps, n3);
      case 19:
        return Oc(e5, t3, n3);
      case 31:
        return pc(e5, t3, n3);
      case 22:
        return cc(e5, t3, n3, t3.pendingProps);
      case 24:
        return $i(t3), r3 = ea(oa), e5 === null ? (a3 = va(), a3 === null && (a3 = q, o3 = sa(), a3.pooledCache = o3, o3.refCount++, o3 !== null && (a3.pooledCacheLanes |= n3), a3 = o3), t3.memoizedState = { parent: r3, cache: a3 }, Ba(t3), qi(t3, oa, a3)) : ((e5.lanes & n3) !== 0 && (Va(e5, t3), Ja(t3, null, null, n3), qa()), a3 = e5.memoizedState, o3 = t3.memoizedState, a3.parent === r3 ? (r3 = o3.cache, qi(t3, oa, r3), r3 !== a3.cache && Xi(t3, [oa], n3, true)) : (a3 = { parent: r3, cache: r3 }, t3.memoizedState = a3, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = a3), qi(t3, oa, r3))), ic(e5, t3, t3.pendingProps.children, n3), t3.child;
      case 29:
        throw t3.pendingProps;
    }
    throw Error(i2(156, t3.tag));
  }
  function Nc(e5) {
    e5.flags |= 4;
  }
  function Pc(e5, t3, n3, r3, i3) {
    if ((t3 = (e5.mode & 32) != 0) && (t3 = false), t3) {
      if (e5.flags |= 16777216, (i3 & 335544128) === i3) if (e5.stateNode.complete) e5.flags |= 8192;
      else if (wu()) e5.flags |= 8192;
      else throw Oa = wa, Sa;
    } else e5.flags &= -16777217;
  }
  function Fc(e5, t3) {
    if (t3.type !== `stylesheet` || t3.state.loading & 4) e5.flags &= -16777217;
    else if (e5.flags |= 16777216, !Wf(t3)) if (wu()) e5.flags |= 8192;
    else throw Oa = wa, Sa;
  }
  function Ic(e5, t3) {
    t3 !== null && (e5.flags |= 4), e5.flags & 16384 && (t3 = e5.tag === 22 ? 536870912 : Ze2(), e5.lanes |= t3, Yl |= t3);
  }
  function Lc(e5, t3) {
    if (!B) switch (e5.tailMode) {
      case `hidden`:
        t3 = e5.tail;
        for (var n3 = null; t3 !== null; ) t3.alternate !== null && (n3 = t3), t3 = t3.sibling;
        n3 === null ? e5.tail = null : n3.sibling = null;
        break;
      case `collapsed`:
        n3 = e5.tail;
        for (var r3 = null; n3 !== null; ) n3.alternate !== null && (r3 = n3), n3 = n3.sibling;
        r3 === null ? t3 || e5.tail === null ? e5.tail = null : e5.tail.sibling = null : r3.sibling = null;
    }
  }
  function W(e5) {
    var t3 = e5.alternate !== null && e5.alternate.child === e5.child, n3 = 0, r3 = 0;
    if (t3) for (var i3 = e5.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags & 65011712, r3 |= i3.flags & 65011712, i3.return = e5, i3 = i3.sibling;
    else for (i3 = e5.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags, r3 |= i3.flags, i3.return = e5, i3 = i3.sibling;
    return e5.subtreeFlags |= r3, e5.childLanes = n3, t3;
  }
  function Rc(e5, t3, n3) {
    var r3 = t3.pendingProps;
    switch (ji(t3), t3.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return W(t3), null;
      case 1:
        return W(t3), null;
      case 3:
        return n3 = t3.stateNode, r3 = null, e5 !== null && (r3 = e5.memoizedState.cache), t3.memoizedState.cache !== r3 && (t3.flags |= 2048), Ji(oa), _e4(), n3.pendingContext && (n3.context = n3.pendingContext, n3.pendingContext = null), (e5 === null || e5.child === null) && (Bi(t3) ? Nc(t3) : e5 === null || e5.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, Hi())), W(t3), null;
      case 26:
        var a3 = t3.type, o3 = t3.memoizedState;
        return e5 === null ? (Nc(t3), o3 === null ? (W(t3), Pc(t3, a3, null, r3, n3)) : (W(t3), Fc(t3, o3))) : o3 ? o3 === e5.memoizedState ? (W(t3), t3.flags &= -16777217) : (Nc(t3), W(t3), Fc(t3, o3)) : (e5 = e5.memoizedProps, e5 !== r3 && Nc(t3), W(t3), Pc(t3, a3, e5, r3, n3)), null;
      case 27:
        if (ye2(t3), n3 = me2.current, a3 = t3.type, e5 !== null && t3.stateNode != null) e5.memoizedProps !== r3 && Nc(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(i2(166));
            return W(t3), null;
          }
          e5 = fe2.current, Bi(t3) ? Ri(t3, e5) : (e5 = ff(a3, r3, n3), t3.stateNode = e5, Nc(t3));
        }
        return W(t3), null;
      case 5:
        if (ye2(t3), a3 = t3.type, e5 !== null && t3.stateNode != null) e5.memoizedProps !== r3 && Nc(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(i2(166));
            return W(t3), null;
          }
          if (o3 = fe2.current, Bi(t3)) Ri(t3, o3);
          else {
            var s3 = Bd(me2.current);
            switch (o3) {
              case 1:
                o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                break;
              case 2:
                o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                break;
              default:
                switch (a3) {
                  case `svg`:
                    o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                    break;
                  case `math`:
                    o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                    break;
                  case `script`:
                    o3 = s3.createElement(`div`), o3.innerHTML = `<script><\/script>`, o3 = o3.removeChild(o3.firstChild);
                    break;
                  case `select`:
                    o3 = typeof r3.is == `string` ? s3.createElement(`select`, { is: r3.is }) : s3.createElement(`select`), r3.multiple ? o3.multiple = true : r3.size && (o3.size = r3.size);
                    break;
                  default:
                    o3 = typeof r3.is == `string` ? s3.createElement(a3, { is: r3.is }) : s3.createElement(a3);
                }
            }
            o3[lt2] = t3, o3[ut2] = r3;
            a: for (s3 = t3.child; s3 !== null; ) {
              if (s3.tag === 5 || s3.tag === 6) o3.appendChild(s3.stateNode);
              else if (s3.tag !== 4 && s3.tag !== 27 && s3.child !== null) {
                s3.child.return = s3, s3 = s3.child;
                continue;
              }
              if (s3 === t3) break a;
              for (; s3.sibling === null; ) {
                if (s3.return === null || s3.return === t3) break a;
                s3 = s3.return;
              }
              s3.sibling.return = s3.return, s3 = s3.sibling;
            }
            t3.stateNode = o3;
            a: switch (Pd(o3, a3, r3), a3) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                r3 = !!r3.autoFocus;
                break a;
              case `img`:
                r3 = true;
                break a;
              default:
                r3 = false;
            }
            r3 && Nc(t3);
          }
        }
        return W(t3), Pc(t3, t3.type, e5 === null ? null : e5.memoizedProps, t3.pendingProps, n3), null;
      case 6:
        if (e5 && t3.stateNode != null) e5.memoizedProps !== r3 && Nc(t3);
        else {
          if (typeof r3 != `string` && t3.stateNode === null) throw Error(i2(166));
          if (e5 = me2.current, Bi(t3)) {
            if (e5 = t3.stateNode, n3 = t3.memoizedProps, r3 = null, a3 = Ni, a3 !== null) switch (a3.tag) {
              case 27:
              case 5:
                r3 = a3.memoizedProps;
            }
            e5[lt2] = t3, e5 = !!(e5.nodeValue === n3 || r3 !== null && true === r3.suppressHydrationWarning || Md(e5.nodeValue, n3)), e5 || Li(t3, true);
          } else e5 = Bd(e5).createTextNode(r3), e5[lt2] = t3, t3.stateNode = e5;
        }
        return W(t3), null;
      case 31:
        if (n3 = t3.memoizedState, e5 === null || e5.memoizedState !== null) {
          if (r3 = Bi(t3), n3 !== null) {
            if (e5 === null) {
              if (!r3) throw Error(i2(318));
              if (e5 = t3.memoizedState, e5 = e5 === null ? null : e5.dehydrated, !e5) throw Error(i2(557));
              e5[lt2] = t3;
            } else Vi(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            W(t3), e5 = false;
          } else n3 = Hi(), e5 !== null && e5.memoizedState !== null && (e5.memoizedState.hydrationErrors = n3), e5 = true;
          if (!e5) return t3.flags & 256 ? (co(t3), t3) : (co(t3), null);
          if (t3.flags & 128) throw Error(i2(558));
        }
        return W(t3), null;
      case 13:
        if (r3 = t3.memoizedState, e5 === null || e5.memoizedState !== null && e5.memoizedState.dehydrated !== null) {
          if (a3 = Bi(t3), r3 !== null && r3.dehydrated !== null) {
            if (e5 === null) {
              if (!a3) throw Error(i2(318));
              if (a3 = t3.memoizedState, a3 = a3 === null ? null : a3.dehydrated, !a3) throw Error(i2(317));
              a3[lt2] = t3;
            } else Vi(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            W(t3), a3 = false;
          } else a3 = Hi(), e5 !== null && e5.memoizedState !== null && (e5.memoizedState.hydrationErrors = a3), a3 = true;
          if (!a3) return t3.flags & 256 ? (co(t3), t3) : (co(t3), null);
        }
        return co(t3), t3.flags & 128 ? (t3.lanes = n3, t3) : (n3 = r3 !== null, e5 = e5 !== null && e5.memoizedState !== null, n3 && (r3 = t3.child, a3 = null, r3.alternate !== null && r3.alternate.memoizedState !== null && r3.alternate.memoizedState.cachePool !== null && (a3 = r3.alternate.memoizedState.cachePool.pool), o3 = null, r3.memoizedState !== null && r3.memoizedState.cachePool !== null && (o3 = r3.memoizedState.cachePool.pool), o3 !== a3 && (r3.flags |= 2048)), n3 !== e5 && n3 && (t3.child.flags |= 8192), Ic(t3, t3.updateQueue), W(t3), null);
      case 4:
        return _e4(), e5 === null && Sd(t3.stateNode.containerInfo), W(t3), null;
      case 10:
        return Ji(t3.type), W(t3), null;
      case 19:
        if (de2(lo), r3 = t3.memoizedState, r3 === null) return W(t3), null;
        if (a3 = (t3.flags & 128) != 0, o3 = r3.rendering, o3 === null) if (a3) Lc(r3, false);
        else {
          if (Wl !== 0 || e5 !== null && e5.flags & 128) for (e5 = t3.child; e5 !== null; ) {
            if (o3 = uo(e5), o3 !== null) {
              for (t3.flags |= 128, Lc(r3, false), e5 = o3.updateQueue, t3.updateQueue = e5, Ic(t3, e5), t3.subtreeFlags = 0, e5 = n3, n3 = t3.child; n3 !== null; ) di(n3, e5), n3 = n3.sibling;
              return j2(lo, lo.current & 1 | 2), B && Oi(t3, r3.treeForkCount), t3.child;
            }
            e5 = e5.sibling;
          }
          r3.tail !== null && je2() > tu && (t3.flags |= 128, a3 = true, Lc(r3, false), t3.lanes = 4194304);
        }
        else {
          if (!a3) if (e5 = uo(o3), e5 !== null) {
            if (t3.flags |= 128, a3 = true, e5 = e5.updateQueue, t3.updateQueue = e5, Ic(t3, e5), Lc(r3, true), r3.tail === null && r3.tailMode === `hidden` && !o3.alternate && !B) return W(t3), null;
          } else 2 * je2() - r3.renderingStartTime > tu && n3 !== 536870912 && (t3.flags |= 128, a3 = true, Lc(r3, false), t3.lanes = 4194304);
          r3.isBackwards ? (o3.sibling = t3.child, t3.child = o3) : (e5 = r3.last, e5 === null ? t3.child = o3 : e5.sibling = o3, r3.last = o3);
        }
        return r3.tail === null ? (W(t3), null) : (e5 = r3.tail, r3.rendering = e5, r3.tail = e5.sibling, r3.renderingStartTime = je2(), e5.sibling = null, n3 = lo.current, j2(lo, a3 ? n3 & 1 | 2 : n3 & 1), B && Oi(t3, r3.treeForkCount), e5);
      case 22:
      case 23:
        return co(t3), to(), r3 = t3.memoizedState !== null, e5 === null ? r3 && (t3.flags |= 8192) : e5.memoizedState !== null !== r3 && (t3.flags |= 8192), r3 ? n3 & 536870912 && !(t3.flags & 128) && (W(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : W(t3), n3 = t3.updateQueue, n3 !== null && Ic(t3, n3.retryQueue), n3 = null, e5 !== null && e5.memoizedState !== null && e5.memoizedState.cachePool !== null && (n3 = e5.memoizedState.cachePool.pool), r3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r3 = t3.memoizedState.cachePool.pool), r3 !== n3 && (t3.flags |= 2048), e5 !== null && de2(_a3), null;
      case 24:
        return n3 = null, e5 !== null && (n3 = e5.memoizedState.cache), t3.memoizedState.cache !== n3 && (t3.flags |= 2048), Ji(oa), W(t3), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i2(156, t3.tag));
  }
  function zc(e5, t3) {
    switch (ji(t3), t3.tag) {
      case 1:
        return e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
      case 3:
        return Ji(oa), _e4(), e5 = t3.flags, e5 & 65536 && !(e5 & 128) ? (t3.flags = e5 & -65537 | 128, t3) : null;
      case 26:
      case 27:
      case 5:
        return ye2(t3), null;
      case 31:
        if (t3.memoizedState !== null) {
          if (co(t3), t3.alternate === null) throw Error(i2(340));
          Vi();
        }
        return e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
      case 13:
        if (co(t3), e5 = t3.memoizedState, e5 !== null && e5.dehydrated !== null) {
          if (t3.alternate === null) throw Error(i2(340));
          Vi();
        }
        return e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
      case 19:
        return de2(lo), null;
      case 4:
        return _e4(), null;
      case 10:
        return Ji(t3.type), null;
      case 22:
      case 23:
        return co(t3), to(), e5 !== null && de2(_a3), e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
      case 24:
        return Ji(oa), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bc(e5, t3) {
    switch (ji(t3), t3.tag) {
      case 3:
        Ji(oa), _e4();
        break;
      case 26:
      case 27:
      case 5:
        ye2(t3);
        break;
      case 4:
        _e4();
        break;
      case 31:
        t3.memoizedState !== null && co(t3);
        break;
      case 13:
        co(t3);
        break;
      case 19:
        de2(lo);
        break;
      case 10:
        Ji(t3.type);
        break;
      case 22:
      case 23:
        co(t3), to(), e5 !== null && de2(_a3);
        break;
      case 24:
        Ji(oa);
    }
  }
  function Vc(e5, t3) {
    try {
      var n3 = t3.updateQueue, r3 = n3 === null ? null : n3.lastEffect;
      if (r3 !== null) {
        var i3 = r3.next;
        n3 = i3;
        do {
          if ((n3.tag & e5) === e5) {
            r3 = void 0;
            var a3 = n3.create, o3 = n3.inst;
            r3 = a3(), o3.destroy = r3;
          }
          n3 = n3.next;
        } while (n3 !== i3);
      }
    } catch (e6) {
      Z(t3, t3.return, e6);
    }
  }
  function Hc(e5, t3, n3) {
    try {
      var r3 = t3.updateQueue, i3 = r3 === null ? null : r3.lastEffect;
      if (i3 !== null) {
        var a3 = i3.next;
        r3 = a3;
        do {
          if ((r3.tag & e5) === e5) {
            var o3 = r3.inst, s3 = o3.destroy;
            if (s3 !== void 0) {
              o3.destroy = void 0, i3 = t3;
              var c3 = n3, l3 = s3;
              try {
                l3();
              } catch (e6) {
                Z(i3, c3, e6);
              }
            }
          }
          r3 = r3.next;
        } while (r3 !== a3);
      }
    } catch (e6) {
      Z(t3, t3.return, e6);
    }
  }
  function Uc(e5) {
    var t3 = e5.updateQueue;
    if (t3 !== null) {
      var n3 = e5.stateNode;
      try {
        Xa(t3, n3);
      } catch (t4) {
        Z(e5, e5.return, t4);
      }
    }
  }
  function Wc(e5, t3, n3) {
    n3.props = Ks(e5.type, e5.memoizedProps), n3.state = e5.memoizedState;
    try {
      n3.componentWillUnmount();
    } catch (n4) {
      Z(e5, t3, n4);
    }
  }
  function Gc(e5, t3) {
    try {
      var n3 = e5.ref;
      if (n3 !== null) {
        switch (e5.tag) {
          case 26:
          case 27:
          case 5:
            var r3 = e5.stateNode;
            break;
          case 30:
            r3 = e5.stateNode;
            break;
          default:
            r3 = e5.stateNode;
        }
        typeof n3 == `function` ? e5.refCleanup = n3(r3) : n3.current = r3;
      }
    } catch (n4) {
      Z(e5, t3, n4);
    }
  }
  function Kc(e5, t3) {
    var n3 = e5.ref, r3 = e5.refCleanup;
    if (n3 !== null) if (typeof r3 == `function`) try {
      r3();
    } catch (n4) {
      Z(e5, t3, n4);
    } finally {
      e5.refCleanup = null, e5 = e5.alternate, e5 != null && (e5.refCleanup = null);
    }
    else if (typeof n3 == `function`) try {
      n3(null);
    } catch (n4) {
      Z(e5, t3, n4);
    }
    else n3.current = null;
  }
  function qc(e5) {
    var t3 = e5.type, n3 = e5.memoizedProps, r3 = e5.stateNode;
    try {
      a: switch (t3) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
          n3.autoFocus && r3.focus();
          break a;
        case `img`:
          n3.src ? r3.src = n3.src : n3.srcSet && (r3.srcset = n3.srcSet);
      }
    } catch (t4) {
      Z(e5, e5.return, t4);
    }
  }
  function Jc(e5, t3, n3) {
    try {
      var r3 = e5.stateNode;
      Fd(r3, e5.type, n3, t3), r3[ut2] = t3;
    } catch (t4) {
      Z(e5, e5.return, t4);
    }
  }
  function Yc(e5) {
    return e5.tag === 5 || e5.tag === 3 || e5.tag === 26 || e5.tag === 27 && Zd(e5.type) || e5.tag === 4;
  }
  function Xc(e5) {
    a: for (; ; ) {
      for (; e5.sibling === null; ) {
        if (e5.return === null || Yc(e5.return)) return null;
        e5 = e5.return;
      }
      for (e5.sibling.return = e5.return, e5 = e5.sibling; e5.tag !== 5 && e5.tag !== 6 && e5.tag !== 18; ) {
        if (e5.tag === 27 && Zd(e5.type) || e5.flags & 2 || e5.child === null || e5.tag === 4) continue a;
        e5.child.return = e5, e5 = e5.child;
      }
      if (!(e5.flags & 2)) return e5.stateNode;
    }
  }
  function Zc(e5, t3, n3) {
    var r3 = e5.tag;
    if (r3 === 5 || r3 === 6) e5 = e5.stateNode, t3 ? (n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3).insertBefore(e5, t3) : (t3 = n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3, t3.appendChild(e5), n3 = n3._reactRootContainer, n3 != null || t3.onclick !== null || (t3.onclick = tn2));
    else if (r3 !== 4 && (r3 === 27 && Zd(e5.type) && (n3 = e5.stateNode, t3 = null), e5 = e5.child, e5 !== null)) for (Zc(e5, t3, n3), e5 = e5.sibling; e5 !== null; ) Zc(e5, t3, n3), e5 = e5.sibling;
  }
  function Qc(e5, t3, n3) {
    var r3 = e5.tag;
    if (r3 === 5 || r3 === 6) e5 = e5.stateNode, t3 ? n3.insertBefore(e5, t3) : n3.appendChild(e5);
    else if (r3 !== 4 && (r3 === 27 && Zd(e5.type) && (n3 = e5.stateNode), e5 = e5.child, e5 !== null)) for (Qc(e5, t3, n3), e5 = e5.sibling; e5 !== null; ) Qc(e5, t3, n3), e5 = e5.sibling;
  }
  function $c(e5) {
    var t3 = e5.stateNode, n3 = e5.memoizedProps;
    try {
      for (var r3 = e5.type, i3 = t3.attributes; i3.length; ) t3.removeAttributeNode(i3[0]);
      Pd(t3, r3, n3), t3[lt2] = e5, t3[ut2] = n3;
    } catch (t4) {
      Z(e5, e5.return, t4);
    }
  }
  var el = false, tl = false, nl = false, rl = typeof WeakSet == `function` ? WeakSet : Set, il = null;
  function al(e5, t3) {
    if (e5 = e5.containerInfo, Rd = sp, e5 = Or2(e5), kr2(e5)) {
      if (`selectionStart` in e5) var n3 = { start: e5.selectionStart, end: e5.selectionEnd };
      else a: {
        n3 = (n3 = e5.ownerDocument) && n3.defaultView || window;
        var r3 = n3.getSelection && n3.getSelection();
        if (r3 && r3.rangeCount !== 0) {
          n3 = r3.anchorNode;
          var a3 = r3.anchorOffset, o3 = r3.focusNode;
          r3 = r3.focusOffset;
          try {
            n3.nodeType, o3.nodeType;
          } catch {
            n3 = null;
            break a;
          }
          var s3 = 0, c3 = -1, l3 = -1, u2 = 0, d3 = 0, f2 = e5, p3 = null;
          b: for (; ; ) {
            for (var m2; f2 !== n3 || a3 !== 0 && f2.nodeType !== 3 || (c3 = s3 + a3), f2 !== o3 || r3 !== 0 && f2.nodeType !== 3 || (l3 = s3 + r3), f2.nodeType === 3 && (s3 += f2.nodeValue.length), (m2 = f2.firstChild) !== null; ) p3 = f2, f2 = m2;
            for (; ; ) {
              if (f2 === e5) break b;
              if (p3 === n3 && ++u2 === a3 && (c3 = s3), p3 === o3 && ++d3 === r3 && (l3 = s3), (m2 = f2.nextSibling) !== null) break;
              f2 = p3, p3 = f2.parentNode;
            }
            f2 = m2;
          }
          n3 = c3 === -1 || l3 === -1 ? null : { start: c3, end: l3 };
        } else n3 = null;
      }
      n3 || (n3 = { start: 0, end: 0 });
    } else n3 = null;
    for (zd = { focusedElem: e5, selectionRange: n3 }, sp = false, il = t3; il !== null; ) if (t3 = il, e5 = t3.child, t3.subtreeFlags & 1028 && e5 !== null) e5.return = t3, il = e5;
    else for (; il !== null; ) {
      switch (t3 = il, o3 = t3.alternate, e5 = t3.flags, t3.tag) {
        case 0:
          if (e5 & 4 && (e5 = t3.updateQueue, e5 = e5 === null ? null : e5.events, e5 !== null)) for (n3 = 0; n3 < e5.length; n3++) a3 = e5[n3], a3.ref.impl = a3.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if (e5 & 1024 && o3 !== null) {
            e5 = void 0, n3 = t3, a3 = o3.memoizedProps, o3 = o3.memoizedState, r3 = n3.stateNode;
            try {
              var h3 = Ks(n3.type, a3);
              e5 = r3.getSnapshotBeforeUpdate(h3, o3), r3.__reactInternalSnapshotBeforeUpdate = e5;
            } catch (e6) {
              Z(n3, n3.return, e6);
            }
          }
          break;
        case 3:
          if (e5 & 1024) {
            if (e5 = t3.stateNode.containerInfo, n3 = e5.nodeType, n3 === 9) ef(e5);
            else if (n3 === 1) switch (e5.nodeName) {
              case `HEAD`:
              case `HTML`:
              case `BODY`:
                ef(e5);
                break;
              default:
                e5.textContent = ``;
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if (e5 & 1024) throw Error(i2(163));
      }
      if (e5 = t3.sibling, e5 !== null) {
        e5.return = t3.return, il = e5;
        break;
      }
      il = t3.return;
    }
  }
  function ol(e5, t3, n3) {
    var r3 = n3.flags;
    switch (n3.tag) {
      case 0:
      case 11:
      case 15:
        bl(e5, n3), r3 & 4 && Vc(5, n3);
        break;
      case 1:
        if (bl(e5, n3), r3 & 4) if (e5 = n3.stateNode, t3 === null) try {
          e5.componentDidMount();
        } catch (e6) {
          Z(n3, n3.return, e6);
        }
        else {
          var i3 = Ks(n3.type, t3.memoizedProps);
          t3 = t3.memoizedState;
          try {
            e5.componentDidUpdate(i3, t3, e5.__reactInternalSnapshotBeforeUpdate);
          } catch (e6) {
            Z(n3, n3.return, e6);
          }
        }
        r3 & 64 && Uc(n3), r3 & 512 && Gc(n3, n3.return);
        break;
      case 3:
        if (bl(e5, n3), r3 & 64 && (e5 = n3.updateQueue, e5 !== null)) {
          if (t3 = null, n3.child !== null) switch (n3.child.tag) {
            case 27:
            case 5:
              t3 = n3.child.stateNode;
              break;
            case 1:
              t3 = n3.child.stateNode;
          }
          try {
            Xa(e5, t3);
          } catch (e6) {
            Z(n3, n3.return, e6);
          }
        }
        break;
      case 27:
        t3 === null && r3 & 4 && $c(n3);
      case 26:
      case 5:
        bl(e5, n3), t3 === null && r3 & 4 && qc(n3), r3 & 512 && Gc(n3, n3.return);
        break;
      case 12:
        bl(e5, n3);
        break;
      case 31:
        bl(e5, n3), r3 & 4 && dl(e5, n3);
        break;
      case 13:
        bl(e5, n3), r3 & 4 && fl(e5, n3), r3 & 64 && (e5 = n3.memoizedState, e5 !== null && (e5 = e5.dehydrated, e5 !== null && (n3 = Ju.bind(null, n3), sf(e5, n3))));
        break;
      case 22:
        if (r3 = n3.memoizedState !== null || el, !r3) {
          t3 = t3 !== null && t3.memoizedState !== null || tl, i3 = el;
          var a3 = tl;
          el = r3, (tl = t3) && !a3 ? Sl(e5, n3, (n3.subtreeFlags & 8772) != 0) : bl(e5, n3), el = i3, tl = a3;
        }
        break;
      case 30:
        break;
      default:
        bl(e5, n3);
    }
  }
  function sl(e5) {
    var t3 = e5.alternate;
    t3 !== null && (e5.alternate = null, sl(t3)), e5.child = null, e5.deletions = null, e5.sibling = null, e5.tag === 5 && (t3 = e5.stateNode, t3 !== null && _t4(t3)), e5.stateNode = null, e5.return = null, e5.dependencies = null, e5.memoizedProps = null, e5.memoizedState = null, e5.pendingProps = null, e5.stateNode = null, e5.updateQueue = null;
  }
  var G = null, cl = false;
  function ll(e5, t3, n3) {
    for (n3 = n3.child; n3 !== null; ) ul(e5, t3, n3), n3 = n3.sibling;
  }
  function ul(e5, t3, n3) {
    if (N2 && typeof N2.onCommitFiberUnmount == `function`) try {
      N2.onCommitFiberUnmount(Be2, n3);
    } catch {
    }
    switch (n3.tag) {
      case 26:
        tl || Kc(n3, t3), ll(e5, t3, n3), n3.memoizedState ? n3.memoizedState.count-- : n3.stateNode && (n3 = n3.stateNode, n3.parentNode.removeChild(n3));
        break;
      case 27:
        tl || Kc(n3, t3);
        var r3 = G, i3 = cl;
        Zd(n3.type) && (G = n3.stateNode, cl = false), ll(e5, t3, n3), pf(n3.stateNode), G = r3, cl = i3;
        break;
      case 5:
        tl || Kc(n3, t3);
      case 6:
        if (r3 = G, i3 = cl, G = null, ll(e5, t3, n3), G = r3, cl = i3, G !== null) if (cl) try {
          (G.nodeType === 9 ? G.body : G.nodeName === `HTML` ? G.ownerDocument.body : G).removeChild(n3.stateNode);
        } catch (e6) {
          Z(n3, t3, e6);
        }
        else try {
          G.removeChild(n3.stateNode);
        } catch (e6) {
          Z(n3, t3, e6);
        }
        break;
      case 18:
        G !== null && (cl ? (e5 = G, Qd(e5.nodeType === 9 ? e5.body : e5.nodeName === `HTML` ? e5.ownerDocument.body : e5, n3.stateNode), Np(e5)) : Qd(G, n3.stateNode));
        break;
      case 4:
        r3 = G, i3 = cl, G = n3.stateNode.containerInfo, cl = true, ll(e5, t3, n3), G = r3, cl = i3;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Hc(2, n3, t3), tl || Hc(4, n3, t3), ll(e5, t3, n3);
        break;
      case 1:
        tl || (Kc(n3, t3), r3 = n3.stateNode, typeof r3.componentWillUnmount == `function` && Wc(n3, t3, r3)), ll(e5, t3, n3);
        break;
      case 21:
        ll(e5, t3, n3);
        break;
      case 22:
        tl = (r3 = tl) || n3.memoizedState !== null, ll(e5, t3, n3), tl = r3;
        break;
      default:
        ll(e5, t3, n3);
    }
  }
  function dl(e5, t3) {
    if (t3.memoizedState === null && (e5 = t3.alternate, e5 !== null && (e5 = e5.memoizedState, e5 !== null))) {
      e5 = e5.dehydrated;
      try {
        Np(e5);
      } catch (e6) {
        Z(t3, t3.return, e6);
      }
    }
  }
  function fl(e5, t3) {
    if (t3.memoizedState === null && (e5 = t3.alternate, e5 !== null && (e5 = e5.memoizedState, e5 !== null && (e5 = e5.dehydrated, e5 !== null)))) try {
      Np(e5);
    } catch (e6) {
      Z(t3, t3.return, e6);
    }
  }
  function pl(e5) {
    switch (e5.tag) {
      case 31:
      case 13:
      case 19:
        var t3 = e5.stateNode;
        return t3 === null && (t3 = e5.stateNode = new rl()), t3;
      case 22:
        return e5 = e5.stateNode, t3 = e5._retryCache, t3 === null && (t3 = e5._retryCache = new rl()), t3;
      default:
        throw Error(i2(435, e5.tag));
    }
  }
  function ml(e5, t3) {
    var n3 = pl(e5);
    t3.forEach(function(t4) {
      if (!n3.has(t4)) {
        n3.add(t4);
        var r3 = Yu.bind(null, e5, t4);
        t4.then(r3, r3);
      }
    });
  }
  function hl(e5, t3) {
    var n3 = t3.deletions;
    if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
      var a3 = n3[r3], o3 = e5, s3 = t3, c3 = s3;
      a: for (; c3 !== null; ) {
        switch (c3.tag) {
          case 27:
            if (Zd(c3.type)) {
              G = c3.stateNode, cl = false;
              break a;
            }
            break;
          case 5:
            G = c3.stateNode, cl = false;
            break a;
          case 3:
          case 4:
            G = c3.stateNode.containerInfo, cl = true;
            break a;
        }
        c3 = c3.return;
      }
      if (G === null) throw Error(i2(160));
      ul(o3, s3, a3), G = null, cl = false, o3 = a3.alternate, o3 !== null && (o3.return = null), a3.return = null;
    }
    if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) _l(t3, e5), t3 = t3.sibling;
  }
  var gl = null;
  function _l(e5, t3) {
    var n3 = e5.alternate, r3 = e5.flags;
    switch (e5.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        hl(t3, e5), vl(e5), r3 & 4 && (Hc(3, e5, e5.return), Vc(3, e5), Hc(5, e5, e5.return));
        break;
      case 1:
        hl(t3, e5), vl(e5), r3 & 512 && (tl || n3 === null || Kc(n3, n3.return)), r3 & 64 && el && (e5 = e5.updateQueue, e5 !== null && (r3 = e5.callbacks, r3 !== null && (n3 = e5.shared.hiddenCallbacks, e5.shared.hiddenCallbacks = n3 === null ? r3 : n3.concat(r3))));
        break;
      case 26:
        var a3 = gl;
        if (hl(t3, e5), vl(e5), r3 & 512 && (tl || n3 === null || Kc(n3, n3.return)), r3 & 4) {
          var o3 = n3 === null ? null : n3.memoizedState;
          if (r3 = e5.memoizedState, n3 === null) if (r3 === null) if (e5.stateNode === null) {
            a: {
              r3 = e5.type, n3 = e5.memoizedProps, a3 = a3.ownerDocument || a3;
              b: switch (r3) {
                case `title`:
                  o3 = a3.getElementsByTagName(`title`)[0], (!o3 || o3[gt2] || o3[lt2] || o3.namespaceURI === `http://www.w3.org/2000/svg` || o3.hasAttribute(`itemprop`)) && (o3 = a3.createElement(r3), a3.head.insertBefore(o3, a3.querySelector(`head > title`))), Pd(o3, r3, n3), o3[lt2] = e5, St2(o3), r3 = o3;
                  break a;
                case `link`:
                  var s3 = Vf(`link`, `href`, a3).get(r3 + (n3.href || ``));
                  if (s3) {
                    for (var c3 = 0; c3 < s3.length; c3++) if (o3 = s3[c3], o3.getAttribute(`href`) === (n3.href == null || n3.href === `` ? null : n3.href) && o3.getAttribute(`rel`) === (n3.rel == null ? null : n3.rel) && o3.getAttribute(`title`) === (n3.title == null ? null : n3.title) && o3.getAttribute(`crossorigin`) === (n3.crossOrigin == null ? null : n3.crossOrigin)) {
                      s3.splice(c3, 1);
                      break b;
                    }
                  }
                  o3 = a3.createElement(r3), Pd(o3, r3, n3), a3.head.appendChild(o3);
                  break;
                case `meta`:
                  if (s3 = Vf(`meta`, `content`, a3).get(r3 + (n3.content || ``))) {
                    for (c3 = 0; c3 < s3.length; c3++) if (o3 = s3[c3], o3.getAttribute(`content`) === (n3.content == null ? null : `` + n3.content) && o3.getAttribute(`name`) === (n3.name == null ? null : n3.name) && o3.getAttribute(`property`) === (n3.property == null ? null : n3.property) && o3.getAttribute(`http-equiv`) === (n3.httpEquiv == null ? null : n3.httpEquiv) && o3.getAttribute(`charset`) === (n3.charSet == null ? null : n3.charSet)) {
                      s3.splice(c3, 1);
                      break b;
                    }
                  }
                  o3 = a3.createElement(r3), Pd(o3, r3, n3), a3.head.appendChild(o3);
                  break;
                default:
                  throw Error(i2(468, r3));
              }
              o3[lt2] = e5, St2(o3), r3 = o3;
            }
            e5.stateNode = r3;
          } else Hf(a3, e5.type, e5.stateNode);
          else e5.stateNode = If(a3, r3, e5.memoizedProps);
          else o3 === r3 ? r3 === null && e5.stateNode !== null && Jc(e5, e5.memoizedProps, n3.memoizedProps) : (o3 === null ? n3.stateNode !== null && (n3 = n3.stateNode, n3.parentNode.removeChild(n3)) : o3.count--, r3 === null ? Hf(a3, e5.type, e5.stateNode) : If(a3, r3, e5.memoizedProps));
        }
        break;
      case 27:
        hl(t3, e5), vl(e5), r3 & 512 && (tl || n3 === null || Kc(n3, n3.return)), n3 !== null && r3 & 4 && Jc(e5, e5.memoizedProps, n3.memoizedProps);
        break;
      case 5:
        if (hl(t3, e5), vl(e5), r3 & 512 && (tl || n3 === null || Kc(n3, n3.return)), e5.flags & 32) {
          a3 = e5.stateNode;
          try {
            qt2(a3, ``);
          } catch (t4) {
            Z(e5, e5.return, t4);
          }
        }
        r3 & 4 && e5.stateNode != null && (a3 = e5.memoizedProps, Jc(e5, a3, n3 === null ? a3 : n3.memoizedProps)), r3 & 1024 && (nl = true);
        break;
      case 6:
        if (hl(t3, e5), vl(e5), r3 & 4) {
          if (e5.stateNode === null) throw Error(i2(162));
          r3 = e5.memoizedProps, n3 = e5.stateNode;
          try {
            n3.nodeValue = r3;
          } catch (t4) {
            Z(e5, e5.return, t4);
          }
        }
        break;
      case 3:
        if (Bf = null, a3 = gl, gl = gf(t3.containerInfo), hl(t3, e5), gl = a3, vl(e5), r3 & 4 && n3 !== null && n3.memoizedState.isDehydrated) try {
          Np(t3.containerInfo);
        } catch (t4) {
          Z(e5, e5.return, t4);
        }
        nl && (nl = false, yl(e5));
        break;
      case 4:
        r3 = gl, gl = gf(e5.stateNode.containerInfo), hl(t3, e5), vl(e5), gl = r3;
        break;
      case 12:
        hl(t3, e5), vl(e5);
        break;
      case 31:
        hl(t3, e5), vl(e5), r3 & 4 && (r3 = e5.updateQueue, r3 !== null && (e5.updateQueue = null, ml(e5, r3)));
        break;
      case 13:
        hl(t3, e5), vl(e5), e5.child.flags & 8192 && e5.memoizedState !== null != (n3 !== null && n3.memoizedState !== null) && ($l = je2()), r3 & 4 && (r3 = e5.updateQueue, r3 !== null && (e5.updateQueue = null, ml(e5, r3)));
        break;
      case 22:
        a3 = e5.memoizedState !== null;
        var l3 = n3 !== null && n3.memoizedState !== null, u2 = el, d3 = tl;
        if (el = u2 || a3, tl = d3 || l3, hl(t3, e5), tl = d3, el = u2, vl(e5), r3 & 8192) a: for (t3 = e5.stateNode, t3._visibility = a3 ? t3._visibility & -2 : t3._visibility | 1, a3 && (n3 === null || l3 || el || tl || xl(e5)), n3 = null, t3 = e5; ; ) {
          if (t3.tag === 5 || t3.tag === 26) {
            if (n3 === null) {
              l3 = n3 = t3;
              try {
                if (o3 = l3.stateNode, a3) s3 = o3.style, typeof s3.setProperty == `function` ? s3.setProperty(`display`, `none`, `important`) : s3.display = `none`;
                else {
                  c3 = l3.stateNode;
                  var f2 = l3.memoizedProps.style, p3 = f2 != null && f2.hasOwnProperty(`display`) ? f2.display : null;
                  c3.style.display = p3 == null || typeof p3 == `boolean` ? `` : (`` + p3).trim();
                }
              } catch (e6) {
                Z(l3, l3.return, e6);
              }
            }
          } else if (t3.tag === 6) {
            if (n3 === null) {
              l3 = t3;
              try {
                l3.stateNode.nodeValue = a3 ? `` : l3.memoizedProps;
              } catch (e6) {
                Z(l3, l3.return, e6);
              }
            }
          } else if (t3.tag === 18) {
            if (n3 === null) {
              l3 = t3;
              try {
                var m2 = l3.stateNode;
                a3 ? $d(m2, true) : $d(l3.stateNode, false);
              } catch (e6) {
                Z(l3, l3.return, e6);
              }
            }
          } else if ((t3.tag !== 22 && t3.tag !== 23 || t3.memoizedState === null || t3 === e5) && t3.child !== null) {
            t3.child.return = t3, t3 = t3.child;
            continue;
          }
          if (t3 === e5) break a;
          for (; t3.sibling === null; ) {
            if (t3.return === null || t3.return === e5) break a;
            n3 === t3 && (n3 = null), t3 = t3.return;
          }
          n3 === t3 && (n3 = null), t3.sibling.return = t3.return, t3 = t3.sibling;
        }
        r3 & 4 && (r3 = e5.updateQueue, r3 !== null && (n3 = r3.retryQueue, n3 !== null && (r3.retryQueue = null, ml(e5, n3))));
        break;
      case 19:
        hl(t3, e5), vl(e5), r3 & 4 && (r3 = e5.updateQueue, r3 !== null && (e5.updateQueue = null, ml(e5, r3)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        hl(t3, e5), vl(e5);
    }
  }
  function vl(e5) {
    var t3 = e5.flags;
    if (t3 & 2) {
      try {
        for (var n3, r3 = e5.return; r3 !== null; ) {
          if (Yc(r3)) {
            n3 = r3;
            break;
          }
          r3 = r3.return;
        }
        if (n3 == null) throw Error(i2(160));
        switch (n3.tag) {
          case 27:
            var a3 = n3.stateNode;
            Qc(e5, Xc(e5), a3);
            break;
          case 5:
            var o3 = n3.stateNode;
            n3.flags & 32 && (qt2(o3, ``), n3.flags &= -33), Qc(e5, Xc(e5), o3);
            break;
          case 3:
          case 4:
            var s3 = n3.stateNode.containerInfo;
            Zc(e5, Xc(e5), s3);
            break;
          default:
            throw Error(i2(161));
        }
      } catch (t4) {
        Z(e5, e5.return, t4);
      }
      e5.flags &= -3;
    }
    t3 & 4096 && (e5.flags &= -4097);
  }
  function yl(e5) {
    if (e5.subtreeFlags & 1024) for (e5 = e5.child; e5 !== null; ) {
      var t3 = e5;
      yl(t3), t3.tag === 5 && t3.flags & 1024 && t3.stateNode.reset(), e5 = e5.sibling;
    }
  }
  function bl(e5, t3) {
    if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) ol(e5, t3.alternate, t3), t3 = t3.sibling;
  }
  function xl(e5) {
    for (e5 = e5.child; e5 !== null; ) {
      var t3 = e5;
      switch (t3.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hc(4, t3, t3.return), xl(t3);
          break;
        case 1:
          Kc(t3, t3.return);
          var n3 = t3.stateNode;
          typeof n3.componentWillUnmount == `function` && Wc(t3, t3.return, n3), xl(t3);
          break;
        case 27:
          pf(t3.stateNode);
        case 26:
        case 5:
          Kc(t3, t3.return), xl(t3);
          break;
        case 22:
          t3.memoizedState === null && xl(t3);
          break;
        case 30:
          xl(t3);
          break;
        default:
          xl(t3);
      }
      e5 = e5.sibling;
    }
  }
  function Sl(e5, t3, n3) {
    for (n3 && (n3 = (t3.subtreeFlags & 8772) != 0), t3 = t3.child; t3 !== null; ) {
      var r3 = t3.alternate, i3 = e5, a3 = t3, o3 = a3.flags;
      switch (a3.tag) {
        case 0:
        case 11:
        case 15:
          Sl(i3, a3, n3), Vc(4, a3);
          break;
        case 1:
          if (Sl(i3, a3, n3), r3 = a3, i3 = r3.stateNode, typeof i3.componentDidMount == `function`) try {
            i3.componentDidMount();
          } catch (e6) {
            Z(r3, r3.return, e6);
          }
          if (r3 = a3, i3 = r3.updateQueue, i3 !== null) {
            var s3 = r3.stateNode;
            try {
              var c3 = i3.shared.hiddenCallbacks;
              if (c3 !== null) for (i3.shared.hiddenCallbacks = null, i3 = 0; i3 < c3.length; i3++) Ya(c3[i3], s3);
            } catch (e6) {
              Z(r3, r3.return, e6);
            }
          }
          n3 && o3 & 64 && Uc(a3), Gc(a3, a3.return);
          break;
        case 27:
          $c(a3);
        case 26:
        case 5:
          Sl(i3, a3, n3), n3 && r3 === null && o3 & 4 && qc(a3), Gc(a3, a3.return);
          break;
        case 12:
          Sl(i3, a3, n3);
          break;
        case 31:
          Sl(i3, a3, n3), n3 && o3 & 4 && dl(i3, a3);
          break;
        case 13:
          Sl(i3, a3, n3), n3 && o3 & 4 && fl(i3, a3);
          break;
        case 22:
          a3.memoizedState === null && Sl(i3, a3, n3), Gc(a3, a3.return);
          break;
        case 30:
          break;
        default:
          Sl(i3, a3, n3);
      }
      t3 = t3.sibling;
    }
  }
  function Cl(e5, t3) {
    var n3 = null;
    e5 !== null && e5.memoizedState !== null && e5.memoizedState.cachePool !== null && (n3 = e5.memoizedState.cachePool.pool), e5 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e5 = t3.memoizedState.cachePool.pool), e5 !== n3 && (e5 != null && e5.refCount++, n3 != null && ca(n3));
  }
  function wl(e5, t3) {
    e5 = null, t3.alternate !== null && (e5 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e5 && (t3.refCount++, e5 != null && ca(e5));
  }
  function Tl(e5, t3, n3, r3) {
    if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) El(e5, t3, n3, r3), t3 = t3.sibling;
  }
  function El(e5, t3, n3, r3) {
    var i3 = t3.flags;
    switch (t3.tag) {
      case 0:
      case 11:
      case 15:
        Tl(e5, t3, n3, r3), i3 & 2048 && Vc(9, t3);
        break;
      case 1:
        Tl(e5, t3, n3, r3);
        break;
      case 3:
        Tl(e5, t3, n3, r3), i3 & 2048 && (e5 = null, t3.alternate !== null && (e5 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e5 && (t3.refCount++, e5 != null && ca(e5)));
        break;
      case 12:
        if (i3 & 2048) {
          Tl(e5, t3, n3, r3), e5 = t3.stateNode;
          try {
            var a3 = t3.memoizedProps, o3 = a3.id, s3 = a3.onPostCommit;
            typeof s3 == `function` && s3(o3, t3.alternate === null ? `mount` : `update`, e5.passiveEffectDuration, -0);
          } catch (e6) {
            Z(t3, t3.return, e6);
          }
        } else Tl(e5, t3, n3, r3);
        break;
      case 31:
        Tl(e5, t3, n3, r3);
        break;
      case 13:
        Tl(e5, t3, n3, r3);
        break;
      case 23:
        break;
      case 22:
        a3 = t3.stateNode, o3 = t3.alternate, t3.memoizedState === null ? a3._visibility & 2 ? Tl(e5, t3, n3, r3) : (a3._visibility |= 2, Dl(e5, t3, n3, r3, (t3.subtreeFlags & 10256) != 0 || false)) : a3._visibility & 2 ? Tl(e5, t3, n3, r3) : Ol(e5, t3), i3 & 2048 && Cl(o3, t3);
        break;
      case 24:
        Tl(e5, t3, n3, r3), i3 & 2048 && wl(t3.alternate, t3);
        break;
      default:
        Tl(e5, t3, n3, r3);
    }
  }
  function Dl(e5, t3, n3, r3, i3) {
    for (i3 && (i3 = (t3.subtreeFlags & 10256) != 0 || false), t3 = t3.child; t3 !== null; ) {
      var a3 = e5, o3 = t3, s3 = n3, c3 = r3, l3 = o3.flags;
      switch (o3.tag) {
        case 0:
        case 11:
        case 15:
          Dl(a3, o3, s3, c3, i3), Vc(8, o3);
          break;
        case 23:
          break;
        case 22:
          var u2 = o3.stateNode;
          o3.memoizedState === null ? (u2._visibility |= 2, Dl(a3, o3, s3, c3, i3)) : u2._visibility & 2 ? Dl(a3, o3, s3, c3, i3) : Ol(a3, o3), i3 && l3 & 2048 && Cl(o3.alternate, o3);
          break;
        case 24:
          Dl(a3, o3, s3, c3, i3), i3 && l3 & 2048 && wl(o3.alternate, o3);
          break;
        default:
          Dl(a3, o3, s3, c3, i3);
      }
      t3 = t3.sibling;
    }
  }
  function Ol(e5, t3) {
    if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
      var n3 = e5, r3 = t3, i3 = r3.flags;
      switch (r3.tag) {
        case 22:
          Ol(n3, r3), i3 & 2048 && Cl(r3.alternate, r3);
          break;
        case 24:
          Ol(n3, r3), i3 & 2048 && wl(r3.alternate, r3);
          break;
        default:
          Ol(n3, r3);
      }
      t3 = t3.sibling;
    }
  }
  var kl = 8192;
  function Al(e5, t3, n3) {
    if (e5.subtreeFlags & kl) for (e5 = e5.child; e5 !== null; ) jl(e5, t3, n3), e5 = e5.sibling;
  }
  function jl(e5, t3, n3) {
    switch (e5.tag) {
      case 26:
        Al(e5, t3, n3), e5.flags & kl && e5.memoizedState !== null && Gf(n3, gl, e5.memoizedState, e5.memoizedProps);
        break;
      case 5:
        Al(e5, t3, n3);
        break;
      case 3:
      case 4:
        var r3 = gl;
        gl = gf(e5.stateNode.containerInfo), Al(e5, t3, n3), gl = r3;
        break;
      case 22:
        e5.memoizedState === null && (r3 = e5.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = kl, kl = 16777216, Al(e5, t3, n3), kl = r3) : Al(e5, t3, n3));
        break;
      default:
        Al(e5, t3, n3);
    }
  }
  function Ml(e5) {
    var t3 = e5.alternate;
    if (t3 !== null && (e5 = t3.child, e5 !== null)) {
      t3.child = null;
      do
        t3 = e5.sibling, e5.sibling = null, e5 = t3;
      while (e5 !== null);
    }
  }
  function Nl(e5) {
    var t3 = e5.deletions;
    if (e5.flags & 16) {
      if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        il = r3, Il(r3, e5);
      }
      Ml(e5);
    }
    if (e5.subtreeFlags & 10256) for (e5 = e5.child; e5 !== null; ) Pl(e5), e5 = e5.sibling;
  }
  function Pl(e5) {
    switch (e5.tag) {
      case 0:
      case 11:
      case 15:
        Nl(e5), e5.flags & 2048 && Hc(9, e5, e5.return);
        break;
      case 3:
        Nl(e5);
        break;
      case 12:
        Nl(e5);
        break;
      case 22:
        var t3 = e5.stateNode;
        e5.memoizedState !== null && t3._visibility & 2 && (e5.return === null || e5.return.tag !== 13) ? (t3._visibility &= -3, Fl(e5)) : Nl(e5);
        break;
      default:
        Nl(e5);
    }
  }
  function Fl(e5) {
    var t3 = e5.deletions;
    if (e5.flags & 16) {
      if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        il = r3, Il(r3, e5);
      }
      Ml(e5);
    }
    for (e5 = e5.child; e5 !== null; ) {
      switch (t3 = e5, t3.tag) {
        case 0:
        case 11:
        case 15:
          Hc(8, t3, t3.return), Fl(t3);
          break;
        case 22:
          n3 = t3.stateNode, n3._visibility & 2 && (n3._visibility &= -3, Fl(t3));
          break;
        default:
          Fl(t3);
      }
      e5 = e5.sibling;
    }
  }
  function Il(e5, t3) {
    for (; il !== null; ) {
      var n3 = il;
      switch (n3.tag) {
        case 0:
        case 11:
        case 15:
          Hc(8, n3, t3);
          break;
        case 23:
        case 22:
          if (n3.memoizedState !== null && n3.memoizedState.cachePool !== null) {
            var r3 = n3.memoizedState.cachePool.pool;
            r3 != null && r3.refCount++;
          }
          break;
        case 24:
          ca(n3.memoizedState.cache);
      }
      if (r3 = n3.child, r3 !== null) r3.return = n3, il = r3;
      else a: for (n3 = e5; il !== null; ) {
        r3 = il;
        var i3 = r3.sibling, a3 = r3.return;
        if (sl(r3), r3 === n3) {
          il = null;
          break a;
        }
        if (i3 !== null) {
          i3.return = a3, il = i3;
          break a;
        }
        il = a3;
      }
    }
  }
  var Ll = { getCacheForType: function(e5) {
    var t3 = ea(oa), n3 = t3.data.get(e5);
    return n3 === void 0 && (n3 = e5(), t3.data.set(e5, n3)), n3;
  }, cacheSignal: function() {
    return ea(oa).controller.signal;
  } }, Rl = typeof WeakMap == `function` ? WeakMap : Map, K = 0, q = null, J = null, Y = 0, X = 0, zl = null, Bl = false, Vl = false, Hl = false, Ul = 0, Wl = 0, Gl = 0, Kl = 0, ql = 0, Jl = 0, Yl = 0, Xl = null, Zl = null, Ql = false, $l = 0, eu = 0, tu = 1 / 0, nu = null, ru = null, iu = 0, au = null, ou = null, su = 0, cu = 0, lu = null, uu = null, du = 0, fu = null;
  function pu() {
    return K & 2 && Y !== 0 ? Y & -Y : O2.T === null ? ot2() : dd();
  }
  function mu() {
    if (Jl === 0) if (!(Y & 536870912) || B) {
      var e5 = Ke2;
      Ke2 <<= 1, !(Ke2 & 3932160) && (Ke2 = 262144), Jl = e5;
    } else Jl = 536870912;
    return e5 = no.current, e5 !== null && (e5.flags |= 32), Jl;
  }
  function hu(e5, t3, n3) {
    (e5 === q && (X === 2 || X === 9) || e5.cancelPendingCommit !== null) && (Su(e5, 0), yu(e5, Y, Jl, false)), $e2(e5, n3), (!(K & 2) || e5 !== q) && (e5 === q && (!(K & 2) && (Kl |= n3), Wl === 4 && yu(e5, Y, Jl, false)), rd(e5));
  }
  function gu(e5, t3, n3) {
    if (K & 6) throw Error(i2(327));
    var r3 = !n3 && (t3 & 127) == 0 && (t3 & e5.expiredLanes) === 0 || Ye2(e5, t3), a3 = r3 ? Au(e5, t3) : Ou(e5, t3, true), o3 = r3;
    do {
      if (a3 === 0) {
        Vl && !r3 && yu(e5, t3, 0, false);
        break;
      } else {
        if (n3 = e5.current.alternate, o3 && !vu(n3)) {
          a3 = Ou(e5, t3, false), o3 = false;
          continue;
        }
        if (a3 === 2) {
          if (o3 = t3, e5.errorRecoveryDisabledLanes & o3) var s3 = 0;
          else s3 = e5.pendingLanes & -536870913, s3 = s3 === 0 ? s3 & 536870912 ? 536870912 : 0 : s3;
          if (s3 !== 0) {
            t3 = s3;
            a: {
              var c3 = e5;
              a3 = Xl;
              var l3 = c3.current.memoizedState.isDehydrated;
              if (l3 && (Su(c3, s3).flags |= 256), s3 = Ou(c3, s3, false), s3 !== 2) {
                if (Hl && !l3) {
                  c3.errorRecoveryDisabledLanes |= o3, Kl |= o3, a3 = 4;
                  break a;
                }
                o3 = Zl, Zl = a3, o3 !== null && (Zl === null ? Zl = o3 : Zl.push.apply(Zl, o3));
              }
              a3 = s3;
            }
            if (o3 = false, a3 !== 2) continue;
          }
        }
        if (a3 === 1) {
          Su(e5, 0), yu(e5, t3, 0, true);
          break;
        }
        a: {
          switch (r3 = e5, o3 = a3, o3) {
            case 0:
            case 1:
              throw Error(i2(345));
            case 4:
              if ((t3 & 4194048) !== t3) break;
            case 6:
              yu(r3, t3, Jl, !Bl);
              break a;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i2(329));
          }
          if ((t3 & 62914560) === t3 && (a3 = $l + 300 - je2(), 10 < a3)) {
            if (yu(r3, t3, Jl, !Bl), Je2(r3, 0, true) !== 0) break a;
            su = t3, r3.timeoutHandle = Kd(_u.bind(null, r3, n3, Zl, nu, Ql, t3, Jl, Kl, Yl, Bl, o3, `Throttled`, -0, 0), a3);
            break a;
          }
          _u(r3, n3, Zl, nu, Ql, t3, Jl, Kl, Yl, Bl, o3, null, -0, 0);
        }
      }
      break;
    } while (1);
    rd(e5);
  }
  function _u(e5, t3, n3, r3, i3, a3, o3, s3, c3, l3, u2, d3, f2, p3) {
    if (e5.timeoutHandle = -1, d3 = t3.subtreeFlags, d3 & 8192 || (d3 & 16785408) == 16785408) {
      d3 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: tn2 }, jl(t3, a3, d3);
      var m2 = (a3 & 62914560) === a3 ? $l - je2() : (a3 & 4194048) === a3 ? eu - je2() : 0;
      if (m2 = qf(d3, m2), m2 !== null) {
        su = a3, e5.cancelPendingCommit = m2(Lu.bind(null, e5, t3, a3, n3, r3, i3, o3, s3, c3, u2, d3, null, f2, p3)), yu(e5, a3, o3, !l3);
        return;
      }
    }
    Lu(e5, t3, a3, n3, r3, i3, o3, s3, c3);
  }
  function vu(e5) {
    for (var t3 = e5; ; ) {
      var n3 = t3.tag;
      if ((n3 === 0 || n3 === 11 || n3 === 15) && t3.flags & 16384 && (n3 = t3.updateQueue, n3 !== null && (n3 = n3.stores, n3 !== null))) for (var r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3], a3 = i3.getSnapshot;
        i3 = i3.value;
        try {
          if (!Cr2(a3(), i3)) return false;
        } catch {
          return false;
        }
      }
      if (n3 = t3.child, t3.subtreeFlags & 16384 && n3 !== null) n3.return = t3, t3 = n3;
      else {
        if (t3 === e5) break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e5) return true;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
    }
    return true;
  }
  function yu(e5, t3, n3, r3) {
    t3 &= ~ql, t3 &= ~Kl, e5.suspendedLanes |= t3, e5.pingedLanes &= ~t3, r3 && (e5.warmLanes |= t3), r3 = e5.expirationTimes;
    for (var i3 = t3; 0 < i3; ) {
      var a3 = 31 - Ve2(i3), o3 = 1 << a3;
      r3[a3] = -1, i3 &= ~o3;
    }
    n3 !== 0 && tt2(e5, n3, t3);
  }
  function bu() {
    return K & 6 ? true : (id(0, false), false);
  }
  function xu() {
    if (J !== null) {
      if (X === 0) var e5 = J.return;
      else e5 = J, Ki = Gi = null, Oo(e5), ja = null, Ma = 0, e5 = J;
      for (; e5 !== null; ) Bc(e5.alternate, e5), e5 = e5.return;
      J = null;
    }
  }
  function Su(e5, t3) {
    var n3 = e5.timeoutHandle;
    n3 !== -1 && (e5.timeoutHandle = -1, qd(n3)), n3 = e5.cancelPendingCommit, n3 !== null && (e5.cancelPendingCommit = null, n3()), su = 0, xu(), q = e5, J = n3 = ui(e5.current, null), Y = t3, X = 0, zl = null, Bl = false, Vl = Ye2(e5, t3), Hl = false, Yl = Jl = ql = Kl = Gl = Wl = 0, Zl = Xl = null, Ql = false, t3 & 8 && (t3 |= t3 & 32);
    var r3 = e5.entangledLanes;
    if (r3 !== 0) for (e5 = e5.entanglements, r3 &= t3; 0 < r3; ) {
      var i3 = 31 - Ve2(r3), a3 = 1 << i3;
      t3 |= e5[i3], r3 &= ~a3;
    }
    return Ul = t3, ei2(), n3;
  }
  function Cu(e5, t3) {
    V = null, O2.H = Rs, t3 === xa || t3 === Ca ? (t3 = ka(), X = 3) : t3 === Sa ? (t3 = ka(), X = 4) : X = t3 === nc ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, zl = t3, J === null && (Wl = 1, Xs(e5, vi(t3, e5.current)));
  }
  function wu() {
    var e5 = no.current;
    return e5 === null ? true : (Y & 4194048) === Y ? ro === null : (Y & 62914560) === Y || Y & 536870912 ? e5 === ro : false;
  }
  function Tu() {
    var e5 = O2.H;
    return O2.H = Rs, e5 === null ? Rs : e5;
  }
  function Eu() {
    var e5 = O2.A;
    return O2.A = Ll, e5;
  }
  function Du() {
    Wl = 4, Bl || (Y & 4194048) !== Y && no.current !== null || (Vl = true), !(Gl & 134217727) && !(Kl & 134217727) || q === null || yu(q, Y, Jl, false);
  }
  function Ou(e5, t3, n3) {
    var r3 = K;
    K |= 2;
    var i3 = Tu(), a3 = Eu();
    (q !== e5 || Y !== t3) && (nu = null, Su(e5, t3)), t3 = false;
    var o3 = Wl;
    a: do
      try {
        if (X !== 0 && J !== null) {
          var s3 = J, c3 = zl;
          switch (X) {
            case 8:
              xu(), o3 = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              no.current === null && (t3 = true);
              var l3 = X;
              if (X = 0, zl = null, Pu(e5, s3, c3, l3), n3 && Vl) {
                o3 = 0;
                break a;
              }
              break;
            default:
              l3 = X, X = 0, zl = null, Pu(e5, s3, c3, l3);
          }
        }
        ku(), o3 = Wl;
        break;
      } catch (t4) {
        Cu(e5, t4);
      }
    while (1);
    return t3 && e5.shellSuspendCounter++, Ki = Gi = null, K = r3, O2.H = i3, O2.A = a3, J === null && (q = null, Y = 0, ei2()), o3;
  }
  function ku() {
    for (; J !== null; ) Mu(J);
  }
  function Au(e5, t3) {
    var n3 = K;
    K |= 2;
    var r3 = Tu(), a3 = Eu();
    q !== e5 || Y !== t3 ? (nu = null, tu = je2() + 500, Su(e5, t3)) : Vl = Ye2(e5, t3);
    a: do
      try {
        if (X !== 0 && J !== null) {
          t3 = J;
          var o3 = zl;
          b: switch (X) {
            case 1:
              X = 0, zl = null, Pu(e5, t3, o3, 1);
              break;
            case 2:
            case 9:
              if (Ta(o3)) {
                X = 0, zl = null, Nu(t3);
                break;
              }
              t3 = function() {
                X !== 2 && X !== 9 || q !== e5 || (X = 7), rd(e5);
              }, o3.then(t3, t3);
              break a;
            case 3:
              X = 7;
              break a;
            case 4:
              X = 5;
              break a;
            case 7:
              Ta(o3) ? (X = 0, zl = null, Nu(t3)) : (X = 0, zl = null, Pu(e5, t3, o3, 7));
              break;
            case 5:
              var s3 = null;
              switch (J.tag) {
                case 26:
                  s3 = J.memoizedState;
                case 5:
                case 27:
                  var c3 = J;
                  if (s3 ? Wf(s3) : c3.stateNode.complete) {
                    X = 0, zl = null;
                    var l3 = c3.sibling;
                    if (l3 !== null) J = l3;
                    else {
                      var u2 = c3.return;
                      u2 === null ? J = null : (J = u2, Fu(u2));
                    }
                    break b;
                  }
              }
              X = 0, zl = null, Pu(e5, t3, o3, 5);
              break;
            case 6:
              X = 0, zl = null, Pu(e5, t3, o3, 6);
              break;
            case 8:
              xu(), Wl = 6;
              break a;
            default:
              throw Error(i2(462));
          }
        }
        ju();
        break;
      } catch (t4) {
        Cu(e5, t4);
      }
    while (1);
    return Ki = Gi = null, O2.H = r3, O2.A = a3, K = n3, J === null ? (q = null, Y = 0, ei2(), Wl) : 0;
  }
  function ju() {
    for (; J !== null && !ke2(); ) Mu(J);
  }
  function Mu(e5) {
    var t3 = Mc(e5.alternate, e5, Ul);
    e5.memoizedProps = e5.pendingProps, t3 === null ? Fu(e5) : J = t3;
  }
  function Nu(e5) {
    var t3 = e5, n3 = t3.alternate;
    switch (t3.tag) {
      case 15:
      case 0:
        t3 = gc(n3, t3, t3.pendingProps, t3.type, void 0, Y);
        break;
      case 11:
        t3 = gc(n3, t3, t3.pendingProps, t3.type.render, t3.ref, Y);
        break;
      case 5:
        Oo(t3);
      default:
        Bc(n3, t3), t3 = J = di(t3, Ul), t3 = Mc(n3, t3, Ul);
    }
    e5.memoizedProps = e5.pendingProps, t3 === null ? Fu(e5) : J = t3;
  }
  function Pu(e5, t3, n3, r3) {
    Ki = Gi = null, Oo(t3), ja = null, Ma = 0;
    var i3 = t3.return;
    try {
      if (tc(e5, i3, t3, n3, Y)) {
        Wl = 1, Xs(e5, vi(n3, e5.current)), J = null;
        return;
      }
    } catch (t4) {
      if (i3 !== null) throw J = i3, t4;
      Wl = 1, Xs(e5, vi(n3, e5.current)), J = null;
      return;
    }
    t3.flags & 32768 ? (B || r3 === 1 ? e5 = true : Vl || Y & 536870912 ? e5 = false : (Bl = e5 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = no.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), Iu(t3, e5)) : Fu(t3);
  }
  function Fu(e5) {
    var t3 = e5;
    do {
      if (t3.flags & 32768) {
        Iu(t3, Bl);
        return;
      }
      e5 = t3.return;
      var n3 = Rc(t3.alternate, t3, Ul);
      if (n3 !== null) {
        J = n3;
        return;
      }
      if (t3 = t3.sibling, t3 !== null) {
        J = t3;
        return;
      }
      J = t3 = e5;
    } while (t3 !== null);
    Wl === 0 && (Wl = 5);
  }
  function Iu(e5, t3) {
    do {
      var n3 = zc(e5.alternate, e5);
      if (n3 !== null) {
        n3.flags &= 32767, J = n3;
        return;
      }
      if (n3 = e5.return, n3 !== null && (n3.flags |= 32768, n3.subtreeFlags = 0, n3.deletions = null), !t3 && (e5 = e5.sibling, e5 !== null)) {
        J = e5;
        return;
      }
      J = e5 = n3;
    } while (e5 !== null);
    Wl = 6, J = null;
  }
  function Lu(e5, t3, n3, r3, a3, o3, s3, c3, l3) {
    e5.cancelPendingCommit = null;
    do
      Hu();
    while (iu !== 0);
    if (K & 6) throw Error(i2(327));
    if (t3 !== null) {
      if (t3 === e5.current) throw Error(i2(177));
      if (o3 = t3.lanes | t3.childLanes, o3 |= $r2, et2(e5, n3, o3, s3, c3, l3), e5 === q && (J = q = null, Y = 0), ou = t3, au = e5, su = n3, cu = o3, lu = a3, uu = r3, t3.subtreeFlags & 10256 || t3.flags & 10256 ? (e5.callbackNode = null, e5.callbackPriority = 0, Xu(Fe2, function() {
        return Uu(), null;
      })) : (e5.callbackNode = null, e5.callbackPriority = 0), r3 = (t3.flags & 13878) != 0, t3.subtreeFlags & 13878 || r3) {
        r3 = O2.T, O2.T = null, a3 = k2.p, k2.p = 2, s3 = K, K |= 4;
        try {
          al(e5, t3, n3);
        } finally {
          K = s3, k2.p = a3, O2.T = r3;
        }
      }
      iu = 1, Ru(), zu(), Bu();
    }
  }
  function Ru() {
    if (iu === 1) {
      iu = 0;
      var e5 = au, t3 = ou, n3 = (t3.flags & 13878) != 0;
      if (t3.subtreeFlags & 13878 || n3) {
        n3 = O2.T, O2.T = null;
        var r3 = k2.p;
        k2.p = 2;
        var i3 = K;
        K |= 4;
        try {
          _l(t3, e5);
          var a3 = zd, o3 = Or2(e5.containerInfo), s3 = a3.focusedElem, c3 = a3.selectionRange;
          if (o3 !== s3 && s3 && s3.ownerDocument && Dr2(s3.ownerDocument.documentElement, s3)) {
            if (c3 !== null && kr2(s3)) {
              var l3 = c3.start, u2 = c3.end;
              if (u2 === void 0 && (u2 = l3), `selectionStart` in s3) s3.selectionStart = l3, s3.selectionEnd = Math.min(u2, s3.value.length);
              else {
                var d3 = s3.ownerDocument || document, f2 = d3 && d3.defaultView || window;
                if (f2.getSelection) {
                  var p3 = f2.getSelection(), m2 = s3.textContent.length, h3 = Math.min(c3.start, m2), g3 = c3.end === void 0 ? h3 : Math.min(c3.end, m2);
                  !p3.extend && h3 > g3 && (o3 = g3, g3 = h3, h3 = o3);
                  var _3 = Er2(s3, h3), v3 = Er2(s3, g3);
                  if (_3 && v3 && (p3.rangeCount !== 1 || p3.anchorNode !== _3.node || p3.anchorOffset !== _3.offset || p3.focusNode !== v3.node || p3.focusOffset !== v3.offset)) {
                    var y3 = d3.createRange();
                    y3.setStart(_3.node, _3.offset), p3.removeAllRanges(), h3 > g3 ? (p3.addRange(y3), p3.extend(v3.node, v3.offset)) : (y3.setEnd(v3.node, v3.offset), p3.addRange(y3));
                  }
                }
              }
            }
            for (d3 = [], p3 = s3; p3 = p3.parentNode; ) p3.nodeType === 1 && d3.push({ element: p3, left: p3.scrollLeft, top: p3.scrollTop });
            for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d3.length; s3++) {
              var b3 = d3[s3];
              b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
            }
          }
          sp = !!Rd, zd = Rd = null;
        } finally {
          K = i3, k2.p = r3, O2.T = n3;
        }
      }
      e5.current = t3, iu = 2;
    }
  }
  function zu() {
    if (iu === 2) {
      iu = 0;
      var e5 = au, t3 = ou, n3 = (t3.flags & 8772) != 0;
      if (t3.subtreeFlags & 8772 || n3) {
        n3 = O2.T, O2.T = null;
        var r3 = k2.p;
        k2.p = 2;
        var i3 = K;
        K |= 4;
        try {
          ol(e5, t3.alternate, t3);
        } finally {
          K = i3, k2.p = r3, O2.T = n3;
        }
      }
      iu = 3;
    }
  }
  function Bu() {
    if (iu === 4 || iu === 3) {
      iu = 0, Ae2();
      var e5 = au, t3 = ou, n3 = su, r3 = uu;
      t3.subtreeFlags & 10256 || t3.flags & 10256 ? iu = 5 : (iu = 0, ou = au = null, Vu(e5, e5.pendingLanes));
      var i3 = e5.pendingLanes;
      if (i3 === 0 && (ru = null), at2(n3), t3 = t3.stateNode, N2 && typeof N2.onCommitFiberRoot == `function`) try {
        N2.onCommitFiberRoot(Be2, t3, void 0, (t3.current.flags & 128) == 128);
      } catch {
      }
      if (r3 !== null) {
        t3 = O2.T, i3 = k2.p, k2.p = 2, O2.T = null;
        try {
          for (var a3 = e5.onRecoverableError, o3 = 0; o3 < r3.length; o3++) {
            var s3 = r3[o3];
            a3(s3.value, { componentStack: s3.stack });
          }
        } finally {
          O2.T = t3, k2.p = i3;
        }
      }
      su & 3 && Hu(), rd(e5), i3 = e5.pendingLanes, n3 & 261930 && i3 & 42 ? e5 === fu ? du++ : (du = 0, fu = e5) : du = 0, id(0, false);
    }
  }
  function Vu(e5, t3) {
    (e5.pooledCacheLanes &= t3) === 0 && (t3 = e5.pooledCache, t3 != null && (e5.pooledCache = null, ca(t3)));
  }
  function Hu() {
    return Ru(), zu(), Bu(), Uu();
  }
  function Uu() {
    if (iu !== 5) return false;
    var e5 = au, t3 = cu;
    cu = 0;
    var n3 = at2(su), r3 = O2.T, a3 = k2.p;
    try {
      k2.p = 32 > n3 ? 32 : n3, O2.T = null, n3 = lu, lu = null;
      var o3 = au, s3 = su;
      if (iu = 0, ou = au = null, su = 0, K & 6) throw Error(i2(331));
      var c3 = K;
      if (K |= 4, Pl(o3.current), El(o3, o3.current, s3, n3), K = c3, id(0, false), N2 && typeof N2.onPostCommitFiberRoot == `function`) try {
        N2.onPostCommitFiberRoot(Be2, o3);
      } catch {
      }
      return true;
    } finally {
      k2.p = a3, O2.T = r3, Vu(e5, t3);
    }
  }
  function Wu(e5, t3, n3) {
    t3 = vi(n3, t3), t3 = Qs(e5.stateNode, t3, 2), e5 = Ua(e5, t3, 2), e5 !== null && ($e2(e5, 2), rd(e5));
  }
  function Z(e5, t3, n3) {
    if (e5.tag === 3) Wu(e5, e5, n3);
    else for (; t3 !== null; ) {
      if (t3.tag === 3) {
        Wu(t3, e5, n3);
        break;
      } else if (t3.tag === 1) {
        var r3 = t3.stateNode;
        if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (ru === null || !ru.has(r3))) {
          e5 = vi(n3, e5), n3 = $s(2), r3 = Ua(t3, n3, 2), r3 !== null && (ec(n3, r3, t3, e5), $e2(r3, 2), rd(r3));
          break;
        }
      }
      t3 = t3.return;
    }
  }
  function Gu(e5, t3, n3) {
    var r3 = e5.pingCache;
    if (r3 === null) {
      r3 = e5.pingCache = new Rl();
      var i3 = /* @__PURE__ */ new Set();
      r3.set(t3, i3);
    } else i3 = r3.get(t3), i3 === void 0 && (i3 = /* @__PURE__ */ new Set(), r3.set(t3, i3));
    i3.has(n3) || (Hl = true, i3.add(n3), e5 = Ku.bind(null, e5, t3, n3), t3.then(e5, e5));
  }
  function Ku(e5, t3, n3) {
    var r3 = e5.pingCache;
    r3 !== null && r3.delete(t3), e5.pingedLanes |= e5.suspendedLanes & n3, e5.warmLanes &= ~n3, q === e5 && (Y & n3) === n3 && (Wl === 4 || Wl === 3 && (Y & 62914560) === Y && 300 > je2() - $l ? !(K & 2) && Su(e5, 0) : ql |= n3, Yl === Y && (Yl = 0)), rd(e5);
  }
  function qu(e5, t3) {
    t3 === 0 && (t3 = Ze2()), e5 = ri(e5, t3), e5 !== null && ($e2(e5, t3), rd(e5));
  }
  function Ju(e5) {
    var t3 = e5.memoizedState, n3 = 0;
    t3 !== null && (n3 = t3.retryLane), qu(e5, n3);
  }
  function Yu(e5, t3) {
    var n3 = 0;
    switch (e5.tag) {
      case 31:
      case 13:
        var r3 = e5.stateNode, a3 = e5.memoizedState;
        a3 !== null && (n3 = a3.retryLane);
        break;
      case 19:
        r3 = e5.stateNode;
        break;
      case 22:
        r3 = e5.stateNode._retryCache;
        break;
      default:
        throw Error(i2(314));
    }
    r3 !== null && r3.delete(t3), qu(e5, n3);
  }
  function Xu(e5, t3) {
    return De2(e5, t3);
  }
  var Zu = null, Qu = null, $u = false, ed = false, td = false, nd = 0;
  function rd(e5) {
    e5 !== Qu && e5.next === null && (Qu === null ? Zu = Qu = e5 : Qu = Qu.next = e5), ed = true, $u || ($u = true, ud());
  }
  function id(e5, t3) {
    if (!td && ed) {
      td = true;
      do
        for (var n3 = false, r3 = Zu; r3 !== null; ) {
          if (!t3) if (e5 !== 0) {
            var i3 = r3.pendingLanes;
            if (i3 === 0) var a3 = 0;
            else {
              var o3 = r3.suspendedLanes, s3 = r3.pingedLanes;
              a3 = (1 << 31 - Ve2(42 | e5) + 1) - 1, a3 &= i3 & ~(o3 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
            }
            a3 !== 0 && (n3 = true, ld(r3, a3));
          } else a3 = Y, a3 = Je2(r3, r3 === q ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== -1), !(a3 & 3) || Ye2(r3, a3) || (n3 = true, ld(r3, a3));
          r3 = r3.next;
        }
      while (n3);
      td = false;
    }
  }
  function ad() {
    od();
  }
  function od() {
    ed = $u = false;
    var e5 = 0;
    nd !== 0 && Gd() && (e5 = nd);
    for (var t3 = je2(), n3 = null, r3 = Zu; r3 !== null; ) {
      var i3 = r3.next, a3 = sd(r3, t3);
      a3 === 0 ? (r3.next = null, n3 === null ? Zu = i3 : n3.next = i3, i3 === null && (Qu = n3)) : (n3 = r3, (e5 !== 0 || a3 & 3) && (ed = true)), r3 = i3;
    }
    iu !== 0 && iu !== 5 || id(e5, false), nd !== 0 && (nd = 0);
  }
  function sd(e5, t3) {
    for (var n3 = e5.suspendedLanes, r3 = e5.pingedLanes, i3 = e5.expirationTimes, a3 = e5.pendingLanes & -62914561; 0 < a3; ) {
      var o3 = 31 - Ve2(a3), s3 = 1 << o3, c3 = i3[o3];
      c3 === -1 ? ((s3 & n3) === 0 || (s3 & r3) !== 0) && (i3[o3] = Xe2(s3, t3)) : c3 <= t3 && (e5.expiredLanes |= s3), a3 &= ~s3;
    }
    if (t3 = q, n3 = Y, n3 = Je2(e5, e5 === t3 ? n3 : 0, e5.cancelPendingCommit !== null || e5.timeoutHandle !== -1), r3 = e5.callbackNode, n3 === 0 || e5 === t3 && (X === 2 || X === 9) || e5.cancelPendingCommit !== null) return r3 !== null && r3 !== null && Oe2(r3), e5.callbackNode = null, e5.callbackPriority = 0;
    if (!(n3 & 3) || Ye2(e5, n3)) {
      if (t3 = n3 & -n3, t3 === e5.callbackPriority) return t3;
      switch (r3 !== null && Oe2(r3), at2(n3)) {
        case 2:
        case 8:
          n3 = Pe2;
          break;
        case 32:
          n3 = Fe2;
          break;
        case 268435456:
          n3 = Le2;
          break;
        default:
          n3 = Fe2;
      }
      return r3 = cd.bind(null, e5), n3 = De2(n3, r3), e5.callbackPriority = t3, e5.callbackNode = n3, t3;
    }
    return r3 !== null && r3 !== null && Oe2(r3), e5.callbackPriority = 2, e5.callbackNode = null, 2;
  }
  function cd(e5, t3) {
    if (iu !== 0 && iu !== 5) return e5.callbackNode = null, e5.callbackPriority = 0, null;
    var n3 = e5.callbackNode;
    if (Hu() && e5.callbackNode !== n3) return null;
    var r3 = Y;
    return r3 = Je2(e5, e5 === q ? r3 : 0, e5.cancelPendingCommit !== null || e5.timeoutHandle !== -1), r3 === 0 ? null : (gu(e5, r3, t3), sd(e5, je2()), e5.callbackNode != null && e5.callbackNode === n3 ? cd.bind(null, e5) : null);
  }
  function ld(e5, t3) {
    if (Hu()) return null;
    gu(e5, t3, true);
  }
  function ud() {
    Yd(function() {
      K & 6 ? De2(Ne2, ad) : od();
    });
  }
  function dd() {
    if (nd === 0) {
      var e5 = da;
      e5 === 0 && (e5 = Ge2, Ge2 <<= 1, !(Ge2 & 261888) && (Ge2 = 256)), nd = e5;
    }
    return nd;
  }
  function fd(e5) {
    return e5 == null || typeof e5 == `symbol` || typeof e5 == `boolean` ? null : typeof e5 == `function` ? e5 : en2(`` + e5);
  }
  function pd(e5, t3) {
    var n3 = t3.ownerDocument.createElement(`input`);
    return n3.name = t3.name, n3.value = t3.value, e5.id && n3.setAttribute(`form`, e5.id), t3.parentNode.insertBefore(n3, t3), e5 = new FormData(e5), n3.parentNode.removeChild(n3), e5;
  }
  function md(e5, t3, n3, r3, i3) {
    if (t3 === `submit` && n3 && n3.stateNode === i3) {
      var a3 = fd((i3[ut2] || null).action), o3 = r3.submitter;
      o3 && (t3 = (t3 = o3[ut2] || null) ? fd(t3.formAction) : o3.getAttribute(`formAction`), t3 !== null && (a3 = t3, o3 = null));
      var s3 = new Cn2(`action`, `action`, null, r3, i3);
      e5.push({ event: s3, listeners: [{ instance: null, listener: function() {
        if (r3.defaultPrevented) {
          if (nd !== 0) {
            var e6 = o3 ? pd(i3, o3) : new FormData(i3);
            ws(n3, { pending: true, data: e6, method: i3.method, action: a3 }, null, e6);
          }
        } else typeof a3 == `function` && (s3.preventDefault(), e6 = o3 ? pd(i3, o3) : new FormData(i3), ws(n3, { pending: true, data: e6, method: i3.method, action: a3 }, a3, e6));
      }, currentTarget: i3 }] });
    }
  }
  for (var hd = 0; hd < Jr2.length; hd++) {
    var gd = Jr2[hd];
    Yr2(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
  }
  Yr2(Br2, `onAnimationEnd`), Yr2(Vr2, `onAnimationIteration`), Yr2(Hr2, `onAnimationStart`), Yr2(`dblclick`, `onDoubleClick`), Yr2(`focusin`, `onFocus`), Yr2(`focusout`, `onBlur`), Yr2(Ur2, `onTransitionRun`), Yr2(Wr2, `onTransitionStart`), Yr2(Gr2, `onTransitionCancel`), Yr2(Kr2, `onTransitionEnd`), Et2(`onMouseEnter`, [`mouseout`, `mouseover`]), Et2(`onMouseLeave`, [`mouseout`, `mouseover`]), Et2(`onPointerEnter`, [`pointerout`, `pointerover`]), Et2(`onPointerLeave`, [`pointerout`, `pointerover`]), Tt2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), Tt2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), Tt2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), Tt2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), Tt2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), Tt2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var _d = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), vd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));
  function yd(e5, t3) {
    t3 = (t3 & 4) != 0;
    for (var n3 = 0; n3 < e5.length; n3++) {
      var r3 = e5[n3], i3 = r3.event;
      r3 = r3.listeners;
      a: {
        var a3 = void 0;
        if (t3) for (var o3 = r3.length - 1; 0 <= o3; o3--) {
          var s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget;
          if (s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
          a3 = s3, i3.currentTarget = l3;
          try {
            a3(i3);
          } catch (e6) {
            Xr2(e6);
          }
          i3.currentTarget = null, a3 = c3;
        }
        else for (o3 = 0; o3 < r3.length; o3++) {
          if (s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
          a3 = s3, i3.currentTarget = l3;
          try {
            a3(i3);
          } catch (e6) {
            Xr2(e6);
          }
          i3.currentTarget = null, a3 = c3;
        }
      }
    }
  }
  function Q(e5, t3) {
    var n3 = t3[ft2];
    n3 === void 0 && (n3 = t3[ft2] = /* @__PURE__ */ new Set());
    var r3 = e5 + `__bubble`;
    n3.has(r3) || (Cd(t3, e5, 2, false), n3.add(r3));
  }
  function bd(e5, t3, n3) {
    var r3 = 0;
    t3 && (r3 |= 4), Cd(n3, e5, r3, t3);
  }
  var xd = `_reactListening` + Math.random().toString(36).slice(2);
  function Sd(e5) {
    if (!e5[xd]) {
      e5[xd] = true, Ct2.forEach(function(t4) {
        t4 !== `selectionchange` && (vd.has(t4) || bd(t4, false, e5), bd(t4, true, e5));
      });
      var t3 = e5.nodeType === 9 ? e5 : e5.ownerDocument;
      t3 === null || t3[xd] || (t3[xd] = true, bd(`selectionchange`, false, t3));
    }
  }
  function Cd(e5, t3, n3, r3) {
    switch (mp(t3)) {
      case 2:
        var i3 = cp;
        break;
      case 8:
        i3 = lp;
        break;
      default:
        i3 = up;
    }
    n3 = i3.bind(null, t3, n3, e5), i3 = void 0, !fn2 || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i3 = true), r3 ? i3 === void 0 ? e5.addEventListener(t3, n3, true) : e5.addEventListener(t3, n3, { capture: true, passive: i3 }) : i3 === void 0 ? e5.addEventListener(t3, n3, false) : e5.addEventListener(t3, n3, { passive: i3 });
  }
  function wd(e5, t3, n3, r3, i3) {
    var a3 = r3;
    if (!(t3 & 1) && !(t3 & 2) && r3 !== null) a: for (; ; ) {
      if (r3 === null) return;
      var s3 = r3.tag;
      if (s3 === 3 || s3 === 4) {
        var c3 = r3.stateNode.containerInfo;
        if (c3 === i3) break;
        if (s3 === 4) for (s3 = r3.return; s3 !== null; ) {
          var l3 = s3.tag;
          if ((l3 === 3 || l3 === 4) && s3.stateNode.containerInfo === i3) return;
          s3 = s3.return;
        }
        for (; c3 !== null; ) {
          if (s3 = vt2(c3), s3 === null) return;
          if (l3 = s3.tag, l3 === 5 || l3 === 6 || l3 === 26 || l3 === 27) {
            r3 = a3 = s3;
            continue a;
          }
          c3 = c3.parentNode;
        }
      }
      r3 = r3.return;
    }
    ln2(function() {
      var r4 = a3, i4 = rn2(n3), s4 = [];
      a: {
        var c4 = qr2.get(e5);
        if (c4 !== void 0) {
          var l4 = Cn2, u2 = e5;
          switch (e5) {
            case `keypress`:
              if (vn2(n3) === 0) break a;
            case `keydown`:
            case `keyup`:
              l4 = Vn2;
              break;
            case `focusin`:
              u2 = `focus`, l4 = Mn2;
              break;
            case `focusout`:
              u2 = `blur`, l4 = Mn2;
              break;
            case `beforeblur`:
            case `afterblur`:
              l4 = Mn2;
              break;
            case `click`:
              if (n3.button === 2) break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              l4 = An2;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              l4 = jn2;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              l4 = Un2;
              break;
            case Br2:
            case Vr2:
            case Hr2:
              l4 = Nn2;
              break;
            case Kr2:
              l4 = Wn2;
              break;
            case `scroll`:
            case `scrollend`:
              l4 = Tn2;
              break;
            case `wheel`:
              l4 = Gn2;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              l4 = Pn2;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              l4 = Hn2;
              break;
            case `toggle`:
            case `beforetoggle`:
              l4 = Kn2;
          }
          var d3 = (t3 & 4) != 0, f2 = !d3 && (e5 === `scroll` || e5 === `scrollend`), p3 = d3 ? c4 === null ? null : c4 + `Capture` : c4;
          d3 = [];
          for (var m2 = r4, h3; m2 !== null; ) {
            var g3 = m2;
            if (h3 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h3 === null || p3 === null || (g3 = un2(m2, p3), g3 != null && d3.push(Td(m2, g3, h3))), f2) break;
            m2 = m2.return;
          }
          0 < d3.length && (c4 = new l4(c4, u2, null, n3, i4), s4.push({ event: c4, listeners: d3 }));
        }
      }
      if (!(t3 & 7)) {
        a: {
          if (c4 = e5 === `mouseover` || e5 === `pointerover`, l4 = e5 === `mouseout` || e5 === `pointerout`, c4 && n3 !== nn2 && (u2 = n3.relatedTarget || n3.fromElement) && (vt2(u2) || u2[dt2])) break a;
          if ((l4 || c4) && (c4 = i4.window === i4 ? i4 : (c4 = i4.ownerDocument) ? c4.defaultView || c4.parentWindow : window, l4 ? (u2 = n3.relatedTarget || n3.toElement, l4 = r4, u2 = u2 ? vt2(u2) : null, u2 !== null && (f2 = o2(u2), d3 = u2.tag, u2 !== f2 || d3 !== 5 && d3 !== 27 && d3 !== 6) && (u2 = null)) : (l4 = null, u2 = r4), l4 !== u2)) {
            if (d3 = An2, g3 = `onMouseLeave`, p3 = `onMouseEnter`, m2 = `mouse`, (e5 === `pointerout` || e5 === `pointerover`) && (d3 = Hn2, g3 = `onPointerLeave`, p3 = `onPointerEnter`, m2 = `pointer`), f2 = l4 == null ? c4 : bt2(l4), h3 = u2 == null ? c4 : bt2(u2), c4 = new d3(g3, m2 + `leave`, l4, n3, i4), c4.target = f2, c4.relatedTarget = h3, g3 = null, vt2(i4) === r4 && (d3 = new d3(p3, m2 + `enter`, u2, n3, i4), d3.target = h3, d3.relatedTarget = f2, g3 = d3), f2 = g3, l4 && u2) b: {
              for (d3 = Dd, p3 = l4, m2 = u2, h3 = 0, g3 = p3; g3; g3 = d3(g3)) h3++;
              g3 = 0;
              for (var _3 = m2; _3; _3 = d3(_3)) g3++;
              for (; 0 < h3 - g3; ) p3 = d3(p3), h3--;
              for (; 0 < g3 - h3; ) m2 = d3(m2), g3--;
              for (; h3--; ) {
                if (p3 === m2 || m2 !== null && p3 === m2.alternate) {
                  d3 = p3;
                  break b;
                }
                p3 = d3(p3), m2 = d3(m2);
              }
              d3 = null;
            }
            else d3 = null;
            l4 !== null && Od(s4, c4, l4, d3, false), u2 !== null && f2 !== null && Od(s4, f2, u2, d3, true);
          }
        }
        a: {
          if (c4 = r4 ? bt2(r4) : window, l4 = c4.nodeName && c4.nodeName.toLowerCase(), l4 === `select` || l4 === `input` && c4.type === `file`) var v3 = dr2;
          else if (ar2(c4)) if (fr2) v3 = xr2;
          else {
            v3 = yr2;
            var y3 = vr2;
          }
          else l4 = c4.nodeName, !l4 || l4.toLowerCase() !== `input` || c4.type !== `checkbox` && c4.type !== `radio` ? r4 && Zt2(r4.elementType) && (v3 = dr2) : v3 = br2;
          if (v3 && (v3 = v3(e5, r4))) {
            or2(s4, v3, n3, i4);
            break a;
          }
          y3 && y3(e5, c4, r4), e5 === `focusout` && r4 && c4.type === `number` && r4.memoizedProps.value != null && Wt2(c4, `number`, c4.value);
        }
        switch (y3 = r4 ? bt2(r4) : window, e5) {
          case `focusin`:
            (ar2(y3) || y3.contentEditable === `true`) && (jr2 = y3, Mr2 = r4, Nr2 = null);
            break;
          case `focusout`:
            Nr2 = Mr2 = jr2 = null;
            break;
          case `mousedown`:
            Pr2 = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            Pr2 = false, Fr2(s4, n3, i4);
            break;
          case `selectionchange`:
            if (Ar2) break;
          case `keydown`:
          case `keyup`:
            Fr2(s4, n3, i4);
        }
        var b3;
        if (Jn2) b: {
          switch (e5) {
            case `compositionstart`:
              var x3 = `onCompositionStart`;
              break b;
            case `compositionend`:
              x3 = `onCompositionEnd`;
              break b;
            case `compositionupdate`:
              x3 = `onCompositionUpdate`;
              break b;
          }
          x3 = void 0;
        }
        else tr2 ? $n2(e5, n3) && (x3 = `onCompositionEnd`) : e5 === `keydown` && n3.keyCode === 229 && (x3 = `onCompositionStart`);
        x3 && (L2 && n3.locale !== `ko` && (tr2 || x3 !== `onCompositionStart` ? x3 === `onCompositionEnd` && tr2 && (b3 = _n4()) : (mn2 = i4, hn2 = `value` in mn2 ? mn2.value : mn2.textContent, tr2 = true)), y3 = Ed(r4, x3), 0 < y3.length && (x3 = new Fn2(x3, e5, null, n3, i4), s4.push({ event: x3, listeners: y3 }), b3 ? x3.data = b3 : (b3 = er2(n3), b3 !== null && (x3.data = b3)))), (b3 = Xn2 ? nr2(e5, n3) : rr2(e5, n3)) && (x3 = Ed(r4, `onBeforeInput`), 0 < x3.length && (y3 = new Fn2(`onBeforeInput`, `beforeinput`, null, n3, i4), s4.push({ event: y3, listeners: x3 }), y3.data = b3)), md(s4, e5, r4, n3, i4);
      }
      yd(s4, t3);
    });
  }
  function Td(e5, t3, n3) {
    return { instance: e5, listener: t3, currentTarget: n3 };
  }
  function Ed(e5, t3) {
    for (var n3 = t3 + `Capture`, r3 = []; e5 !== null; ) {
      var i3 = e5, a3 = i3.stateNode;
      if (i3 = i3.tag, i3 !== 5 && i3 !== 26 && i3 !== 27 || a3 === null || (i3 = un2(e5, n3), i3 != null && r3.unshift(Td(e5, i3, a3)), i3 = un2(e5, t3), i3 != null && r3.push(Td(e5, i3, a3))), e5.tag === 3) return r3;
      e5 = e5.return;
    }
    return [];
  }
  function Dd(e5) {
    if (e5 === null) return null;
    do
      e5 = e5.return;
    while (e5 && e5.tag !== 5 && e5.tag !== 27);
    return e5 || null;
  }
  function Od(e5, t3, n3, r3, i3) {
    for (var a3 = t3._reactName, o3 = []; n3 !== null && n3 !== r3; ) {
      var s3 = n3, c3 = s3.alternate, l3 = s3.stateNode;
      if (s3 = s3.tag, c3 !== null && c3 === r3) break;
      s3 !== 5 && s3 !== 26 && s3 !== 27 || l3 === null || (c3 = l3, i3 ? (l3 = un2(n3, a3), l3 != null && o3.unshift(Td(n3, l3, c3))) : i3 || (l3 = un2(n3, a3), l3 != null && o3.push(Td(n3, l3, c3)))), n3 = n3.return;
    }
    o3.length !== 0 && e5.push({ event: t3, listeners: o3 });
  }
  var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
  function jd(e5) {
    return (typeof e5 == `string` ? e5 : `` + e5).replace(kd, `
`).replace(Ad, ``);
  }
  function Md(e5, t3) {
    return t3 = jd(t3), jd(e5) === t3;
  }
  function $(e5, t3, n3, r3, a3, o3) {
    switch (n3) {
      case `children`:
        typeof r3 == `string` ? t3 === `body` || t3 === `textarea` && r3 === `` || qt2(e5, r3) : (typeof r3 == `number` || typeof r3 == `bigint`) && t3 !== `body` && qt2(e5, `` + r3);
        break;
      case `className`:
        Mt2(e5, `class`, r3);
        break;
      case `tabIndex`:
        Mt2(e5, `tabindex`, r3);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        Mt2(e5, n3, r3);
        break;
      case `style`:
        Xt2(e5, r3, o3);
        break;
      case `data`:
        if (t3 !== `object`) {
          Mt2(e5, `data`, r3);
          break;
        }
      case `src`:
      case `href`:
        if (r3 === `` && (t3 !== `a` || n3 !== `href`)) {
          e5.removeAttribute(n3);
          break;
        }
        if (r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e5.removeAttribute(n3);
          break;
        }
        r3 = en2(`` + r3), e5.setAttribute(n3, r3);
        break;
      case `action`:
      case `formAction`:
        if (typeof r3 == `function`) {
          e5.setAttribute(n3, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        } else typeof o3 == `function` && (n3 === `formAction` ? (t3 !== `input` && $(e5, t3, `name`, a3.name, a3, null), $(e5, t3, `formEncType`, a3.formEncType, a3, null), $(e5, t3, `formMethod`, a3.formMethod, a3, null), $(e5, t3, `formTarget`, a3.formTarget, a3, null)) : ($(e5, t3, `encType`, a3.encType, a3, null), $(e5, t3, `method`, a3.method, a3, null), $(e5, t3, `target`, a3.target, a3, null)));
        if (r3 == null || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e5.removeAttribute(n3);
          break;
        }
        r3 = en2(`` + r3), e5.setAttribute(n3, r3);
        break;
      case `onClick`:
        r3 != null && (e5.onclick = tn2);
        break;
      case `onScroll`:
        r3 != null && Q(`scroll`, e5);
        break;
      case `onScrollEnd`:
        r3 != null && Q(`scrollend`, e5);
        break;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
          if (n3 = r3.__html, n3 != null) {
            if (a3.children != null) throw Error(i2(60));
            e5.innerHTML = n3;
          }
        }
        break;
      case `multiple`:
        e5.multiple = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `muted`:
        e5.muted = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `ref`:
        break;
      case `autoFocus`:
        break;
      case `xlinkHref`:
        if (r3 == null || typeof r3 == `function` || typeof r3 == `boolean` || typeof r3 == `symbol`) {
          e5.removeAttribute(`xlink:href`);
          break;
        }
        n3 = en2(`` + r3), e5.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n3);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e5.setAttribute(n3, `` + r3) : e5.removeAttribute(n3);
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
      case `default`:
      case `defer`:
      case `disabled`:
      case `disablePictureInPicture`:
      case `disableRemotePlayback`:
      case `formNoValidate`:
      case `hidden`:
      case `loop`:
      case `noModule`:
      case `noValidate`:
      case `open`:
      case `playsInline`:
      case `readOnly`:
      case `required`:
      case `reversed`:
      case `scoped`:
      case `seamless`:
      case `itemScope`:
        r3 && typeof r3 != `function` && typeof r3 != `symbol` ? e5.setAttribute(n3, ``) : e5.removeAttribute(n3);
        break;
      case `capture`:
      case `download`:
        true === r3 ? e5.setAttribute(n3, ``) : false !== r3 && r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e5.setAttribute(n3, r3) : e5.removeAttribute(n3);
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` && !isNaN(r3) && 1 <= r3 ? e5.setAttribute(n3, r3) : e5.removeAttribute(n3);
        break;
      case `rowSpan`:
      case `start`:
        r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || isNaN(r3) ? e5.removeAttribute(n3) : e5.setAttribute(n3, r3);
        break;
      case `popover`:
        Q(`beforetoggle`, e5), Q(`toggle`, e5), jt2(e5, `popover`, r3);
        break;
      case `xlinkActuate`:
        Nt2(e5, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r3);
        break;
      case `xlinkArcrole`:
        Nt2(e5, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r3);
        break;
      case `xlinkRole`:
        Nt2(e5, `http://www.w3.org/1999/xlink`, `xlink:role`, r3);
        break;
      case `xlinkShow`:
        Nt2(e5, `http://www.w3.org/1999/xlink`, `xlink:show`, r3);
        break;
      case `xlinkTitle`:
        Nt2(e5, `http://www.w3.org/1999/xlink`, `xlink:title`, r3);
        break;
      case `xlinkType`:
        Nt2(e5, `http://www.w3.org/1999/xlink`, `xlink:type`, r3);
        break;
      case `xmlBase`:
        Nt2(e5, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r3);
        break;
      case `xmlLang`:
        Nt2(e5, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r3);
        break;
      case `xmlSpace`:
        Nt2(e5, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r3);
        break;
      case `is`:
        jt2(e5, `is`, r3);
        break;
      case `innerText`:
      case `textContent`:
        break;
      default:
        (!(2 < n3.length) || n3[0] !== `o` && n3[0] !== `O` || n3[1] !== `n` && n3[1] !== `N`) && (n3 = Qt2.get(n3) || n3, jt2(e5, n3, r3));
    }
  }
  function Nd(e5, t3, n3, r3, a3, o3) {
    switch (n3) {
      case `style`:
        Xt2(e5, r3, o3);
        break;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
          if (n3 = r3.__html, n3 != null) {
            if (a3.children != null) throw Error(i2(60));
            e5.innerHTML = n3;
          }
        }
        break;
      case `children`:
        typeof r3 == `string` ? qt2(e5, r3) : (typeof r3 == `number` || typeof r3 == `bigint`) && qt2(e5, `` + r3);
        break;
      case `onScroll`:
        r3 != null && Q(`scroll`, e5);
        break;
      case `onScrollEnd`:
        r3 != null && Q(`scrollend`, e5);
        break;
      case `onClick`:
        r3 != null && (e5.onclick = tn2);
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        break;
      case `innerText`:
      case `textContent`:
        break;
      default:
        if (!wt2.hasOwnProperty(n3)) a: {
          if (n3[0] === `o` && n3[1] === `n` && (a3 = n3.endsWith(`Capture`), t3 = n3.slice(2, a3 ? n3.length - 7 : void 0), o3 = e5[ut2] || null, o3 = o3 == null ? null : o3[n3], typeof o3 == `function` && e5.removeEventListener(t3, o3, a3), typeof r3 == `function`)) {
            typeof o3 != `function` && o3 !== null && (n3 in e5 ? e5[n3] = null : e5.hasAttribute(n3) && e5.removeAttribute(n3)), e5.addEventListener(t3, r3, a3);
            break a;
          }
          n3 in e5 ? e5[n3] = r3 : true === r3 ? e5.setAttribute(n3, ``) : jt2(e5, n3, r3);
        }
    }
  }
  function Pd(e5, t3, n3) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `img`:
        Q(`error`, e5), Q(`load`, e5);
        var r3 = false, a3 = false, o3;
        for (o3 in n3) if (n3.hasOwnProperty(o3)) {
          var s3 = n3[o3];
          if (s3 != null) switch (o3) {
            case `src`:
              r3 = true;
              break;
            case `srcSet`:
              a3 = true;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(i2(137, t3));
            default:
              $(e5, t3, o3, s3, n3, null);
          }
        }
        a3 && $(e5, t3, `srcSet`, n3.srcSet, n3, null), r3 && $(e5, t3, `src`, n3.src, n3, null);
        return;
      case `input`:
        Q(`invalid`, e5);
        var c3 = o3 = s3 = a3 = null, l3 = null, u2 = null;
        for (r3 in n3) if (n3.hasOwnProperty(r3)) {
          var d3 = n3[r3];
          if (d3 != null) switch (r3) {
            case `name`:
              a3 = d3;
              break;
            case `type`:
              s3 = d3;
              break;
            case `checked`:
              l3 = d3;
              break;
            case `defaultChecked`:
              u2 = d3;
              break;
            case `value`:
              o3 = d3;
              break;
            case `defaultValue`:
              c3 = d3;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (d3 != null) throw Error(i2(137, t3));
              break;
            default:
              $(e5, t3, r3, d3, n3, null);
          }
        }
        Ut2(e5, o3, c3, l3, u2, s3, a3, false);
        return;
      case `select`:
        for (a3 in Q(`invalid`, e5), r3 = s3 = o3 = null, n3) if (n3.hasOwnProperty(a3) && (c3 = n3[a3], c3 != null)) switch (a3) {
          case `value`:
            o3 = c3;
            break;
          case `defaultValue`:
            s3 = c3;
            break;
          case `multiple`:
            r3 = c3;
          default:
            $(e5, t3, a3, c3, n3, null);
        }
        t3 = o3, n3 = s3, e5.multiple = !!r3, t3 == null ? n3 != null && Gt2(e5, !!r3, n3, true) : Gt2(e5, !!r3, t3, false);
        return;
      case `textarea`:
        for (s3 in Q(`invalid`, e5), o3 = a3 = r3 = null, n3) if (n3.hasOwnProperty(s3) && (c3 = n3[s3], c3 != null)) switch (s3) {
          case `value`:
            r3 = c3;
            break;
          case `defaultValue`:
            a3 = c3;
            break;
          case `children`:
            o3 = c3;
            break;
          case `dangerouslySetInnerHTML`:
            if (c3 != null) throw Error(i2(91));
            break;
          default:
            $(e5, t3, s3, c3, n3, null);
        }
        I2(e5, r3, a3, o3);
        return;
      case `option`:
        for (l3 in n3) if (n3.hasOwnProperty(l3) && (r3 = n3[l3], r3 != null)) switch (l3) {
          case `selected`:
            e5.selected = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
            break;
          default:
            $(e5, t3, l3, r3, n3, null);
        }
        return;
      case `dialog`:
        Q(`beforetoggle`, e5), Q(`toggle`, e5), Q(`cancel`, e5), Q(`close`, e5);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e5);
        break;
      case `video`:
      case `audio`:
        for (r3 = 0; r3 < _d.length; r3++) Q(_d[r3], e5);
        break;
      case `image`:
        Q(`error`, e5), Q(`load`, e5);
        break;
      case `details`:
        Q(`toggle`, e5);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e5), Q(`load`, e5);
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (u2 in n3) if (n3.hasOwnProperty(u2) && (r3 = n3[u2], r3 != null)) switch (u2) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(i2(137, t3));
          default:
            $(e5, t3, u2, r3, n3, null);
        }
        return;
      default:
        if (Zt2(t3)) {
          for (d3 in n3) n3.hasOwnProperty(d3) && (r3 = n3[d3], r3 !== void 0 && Nd(e5, t3, d3, r3, n3, void 0));
          return;
        }
    }
    for (c3 in n3) n3.hasOwnProperty(c3) && (r3 = n3[c3], r3 != null && $(e5, t3, c3, r3, n3, null));
  }
  function Fd(e5, t3, n3, r3) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `input`:
        var a3 = null, o3 = null, s3 = null, c3 = null, l3 = null, u2 = null, d3 = null;
        for (m2 in n3) {
          var f2 = n3[m2];
          if (n3.hasOwnProperty(m2) && f2 != null) switch (m2) {
            case `checked`:
              break;
            case `value`:
              break;
            case `defaultValue`:
              l3 = f2;
            default:
              r3.hasOwnProperty(m2) || $(e5, t3, m2, null, r3, f2);
          }
        }
        for (var p3 in r3) {
          var m2 = r3[p3];
          if (f2 = n3[p3], r3.hasOwnProperty(p3) && (m2 != null || f2 != null)) switch (p3) {
            case `type`:
              o3 = m2;
              break;
            case `name`:
              a3 = m2;
              break;
            case `checked`:
              u2 = m2;
              break;
            case `defaultChecked`:
              d3 = m2;
              break;
            case `value`:
              s3 = m2;
              break;
            case `defaultValue`:
              c3 = m2;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (m2 != null) throw Error(i2(137, t3));
              break;
            default:
              m2 !== f2 && $(e5, t3, p3, m2, r3, f2);
          }
        }
        Ht2(e5, s3, c3, l3, u2, d3, o3, a3);
        return;
      case `select`:
        for (o3 in m2 = s3 = c3 = p3 = null, n3) if (l3 = n3[o3], n3.hasOwnProperty(o3) && l3 != null) switch (o3) {
          case `value`:
            break;
          case `multiple`:
            m2 = l3;
          default:
            r3.hasOwnProperty(o3) || $(e5, t3, o3, null, r3, l3);
        }
        for (a3 in r3) if (o3 = r3[a3], l3 = n3[a3], r3.hasOwnProperty(a3) && (o3 != null || l3 != null)) switch (a3) {
          case `value`:
            p3 = o3;
            break;
          case `defaultValue`:
            c3 = o3;
            break;
          case `multiple`:
            s3 = o3;
          default:
            o3 !== l3 && $(e5, t3, a3, o3, r3, l3);
        }
        t3 = c3, n3 = s3, r3 = m2, p3 == null ? !!r3 != !!n3 && (t3 == null ? Gt2(e5, !!n3, n3 ? [] : ``, false) : Gt2(e5, !!n3, t3, true)) : Gt2(e5, !!n3, p3, false);
        return;
      case `textarea`:
        for (c3 in m2 = p3 = null, n3) if (a3 = n3[c3], n3.hasOwnProperty(c3) && a3 != null && !r3.hasOwnProperty(c3)) switch (c3) {
          case `value`:
            break;
          case `children`:
            break;
          default:
            $(e5, t3, c3, null, r3, a3);
        }
        for (s3 in r3) if (a3 = r3[s3], o3 = n3[s3], r3.hasOwnProperty(s3) && (a3 != null || o3 != null)) switch (s3) {
          case `value`:
            p3 = a3;
            break;
          case `defaultValue`:
            m2 = a3;
            break;
          case `children`:
            break;
          case `dangerouslySetInnerHTML`:
            if (a3 != null) throw Error(i2(91));
            break;
          default:
            a3 !== o3 && $(e5, t3, s3, a3, r3, o3);
        }
        Kt2(e5, p3, m2);
        return;
      case `option`:
        for (var h3 in n3) if (p3 = n3[h3], n3.hasOwnProperty(h3) && p3 != null && !r3.hasOwnProperty(h3)) switch (h3) {
          case `selected`:
            e5.selected = false;
            break;
          default:
            $(e5, t3, h3, null, r3, p3);
        }
        for (l3 in r3) if (p3 = r3[l3], m2 = n3[l3], r3.hasOwnProperty(l3) && p3 !== m2 && (p3 != null || m2 != null)) switch (l3) {
          case `selected`:
            e5.selected = p3 && typeof p3 != `function` && typeof p3 != `symbol`;
            break;
          default:
            $(e5, t3, l3, p3, r3, m2);
        }
        return;
      case `img`:
      case `link`:
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (var g3 in n3) p3 = n3[g3], n3.hasOwnProperty(g3) && p3 != null && !r3.hasOwnProperty(g3) && $(e5, t3, g3, null, r3, p3);
        for (u2 in r3) if (p3 = r3[u2], m2 = n3[u2], r3.hasOwnProperty(u2) && p3 !== m2 && (p3 != null || m2 != null)) switch (u2) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            if (p3 != null) throw Error(i2(137, t3));
            break;
          default:
            $(e5, t3, u2, p3, r3, m2);
        }
        return;
      default:
        if (Zt2(t3)) {
          for (var _3 in n3) p3 = n3[_3], n3.hasOwnProperty(_3) && p3 !== void 0 && !r3.hasOwnProperty(_3) && Nd(e5, t3, _3, void 0, r3, p3);
          for (d3 in r3) p3 = r3[d3], m2 = n3[d3], !r3.hasOwnProperty(d3) || p3 === m2 || p3 === void 0 && m2 === void 0 || Nd(e5, t3, d3, p3, r3, m2);
          return;
        }
    }
    for (var v3 in n3) p3 = n3[v3], n3.hasOwnProperty(v3) && p3 != null && !r3.hasOwnProperty(v3) && $(e5, t3, v3, null, r3, p3);
    for (f2 in r3) p3 = r3[f2], m2 = n3[f2], !r3.hasOwnProperty(f2) || p3 === m2 || p3 == null && m2 == null || $(e5, t3, f2, p3, r3, m2);
  }
  function Id(e5) {
    switch (e5) {
      case `css`:
      case `script`:
      case `font`:
      case `img`:
      case `image`:
      case `input`:
      case `link`:
        return true;
      default:
        return false;
    }
  }
  function Ld() {
    if (typeof performance.getEntriesByType == `function`) {
      for (var e5 = 0, t3 = 0, n3 = performance.getEntriesByType(`resource`), r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3], a3 = i3.transferSize, o3 = i3.initiatorType, s3 = i3.duration;
        if (a3 && s3 && Id(o3)) {
          for (o3 = 0, s3 = i3.responseEnd, r3 += 1; r3 < n3.length; r3++) {
            var c3 = n3[r3], l3 = c3.startTime;
            if (l3 > s3) break;
            var u2 = c3.transferSize, d3 = c3.initiatorType;
            u2 && Id(d3) && (c3 = c3.responseEnd, o3 += u2 * (c3 < s3 ? 1 : (s3 - l3) / (c3 - l3)));
          }
          if (--r3, t3 += 8 * (a3 + o3) / (i3.duration / 1e3), e5++, 10 < e5) break;
        }
      }
      if (0 < e5) return t3 / e5 / 1e6;
    }
    return navigator.connection && (e5 = navigator.connection.downlink, typeof e5 == `number`) ? e5 : 5;
  }
  var Rd = null, zd = null;
  function Bd(e5) {
    return e5.nodeType === 9 ? e5 : e5.ownerDocument;
  }
  function Vd(e5) {
    switch (e5) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function Hd(e5, t3) {
    if (e5 === 0) switch (t3) {
      case `svg`:
        return 1;
      case `math`:
        return 2;
      default:
        return 0;
    }
    return e5 === 1 && t3 === `foreignObject` ? 0 : e5;
  }
  function Ud(e5, t3) {
    return e5 === `textarea` || e5 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
  }
  var Wd = null;
  function Gd() {
    var e5 = window.event;
    return e5 && e5.type === `popstate` ? e5 === Wd ? false : (Wd = e5, true) : (Wd = null, false);
  }
  var Kd = typeof setTimeout == `function` ? setTimeout : void 0, qd = typeof clearTimeout == `function` ? clearTimeout : void 0, Jd = typeof Promise == `function` ? Promise : void 0, Yd = typeof queueMicrotask == `function` ? queueMicrotask : Jd === void 0 ? Kd : function(e5) {
    return Jd.resolve(null).then(e5).catch(Xd);
  };
  function Xd(e5) {
    setTimeout(function() {
      throw e5;
    });
  }
  function Zd(e5) {
    return e5 === `head`;
  }
  function Qd(e5, t3) {
    var n3 = t3, r3 = 0;
    do {
      var i3 = n3.nextSibling;
      if (e5.removeChild(n3), i3 && i3.nodeType === 8) if (n3 = i3.data, n3 === `/$` || n3 === `/&`) {
        if (r3 === 0) {
          e5.removeChild(i3), Np(t3);
          return;
        }
        r3--;
      } else if (n3 === `$` || n3 === `$?` || n3 === `$~` || n3 === `$!` || n3 === `&`) r3++;
      else if (n3 === `html`) pf(e5.ownerDocument.documentElement);
      else if (n3 === `head`) {
        n3 = e5.ownerDocument.head, pf(n3);
        for (var a3 = n3.firstChild; a3; ) {
          var o3 = a3.nextSibling, s3 = a3.nodeName;
          a3[gt2] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a3.rel.toLowerCase() === `stylesheet` || n3.removeChild(a3), a3 = o3;
        }
      } else n3 === `body` && pf(e5.ownerDocument.body);
      n3 = i3;
    } while (n3);
    Np(t3);
  }
  function $d(e5, t3) {
    var n3 = e5;
    e5 = 0;
    do {
      var r3 = n3.nextSibling;
      if (n3.nodeType === 1 ? t3 ? (n3._stashedDisplay = n3.style.display, n3.style.display = `none`) : (n3.style.display = n3._stashedDisplay || ``, n3.getAttribute(`style`) === `` && n3.removeAttribute(`style`)) : n3.nodeType === 3 && (t3 ? (n3._stashedText = n3.nodeValue, n3.nodeValue = ``) : n3.nodeValue = n3._stashedText || ``), r3 && r3.nodeType === 8) if (n3 = r3.data, n3 === `/$`) {
        if (e5 === 0) break;
        e5--;
      } else n3 !== `$` && n3 !== `$?` && n3 !== `$~` && n3 !== `$!` || e5++;
      n3 = r3;
    } while (n3);
  }
  function ef(e5) {
    var t3 = e5.firstChild;
    for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
      var n3 = t3;
      switch (t3 = t3.nextSibling, n3.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          ef(n3), _t4(n3);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n3.rel.toLowerCase() === `stylesheet`) continue;
      }
      e5.removeChild(n3);
    }
  }
  function tf(e5, t3, n3, r3) {
    for (; e5.nodeType === 1; ) {
      var i3 = n3;
      if (e5.nodeName.toLowerCase() !== t3.toLowerCase()) {
        if (!r3 && (e5.nodeName !== `INPUT` || e5.type !== `hidden`)) break;
      } else if (!r3) if (t3 === `input` && e5.type === `hidden`) {
        var a3 = i3.name == null ? null : `` + i3.name;
        if (i3.type === `hidden` && e5.getAttribute(`name`) === a3) return e5;
      } else return e5;
      else if (!e5[gt2]) switch (t3) {
        case `meta`:
          if (!e5.hasAttribute(`itemprop`)) break;
          return e5;
        case `link`:
          if (a3 = e5.getAttribute(`rel`), a3 === `stylesheet` && e5.hasAttribute(`data-precedence`) || a3 !== i3.rel || e5.getAttribute(`href`) !== (i3.href == null || i3.href === `` ? null : i3.href) || e5.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin) || e5.getAttribute(`title`) !== (i3.title == null ? null : i3.title)) break;
          return e5;
        case `style`:
          if (e5.hasAttribute(`data-precedence`)) break;
          return e5;
        case `script`:
          if (a3 = e5.getAttribute(`src`), (a3 !== (i3.src == null ? null : i3.src) || e5.getAttribute(`type`) !== (i3.type == null ? null : i3.type) || e5.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin)) && a3 && e5.hasAttribute(`async`) && !e5.hasAttribute(`itemprop`)) break;
          return e5;
        default:
          return e5;
      }
      if (e5 = cf(e5.nextSibling), e5 === null) break;
    }
    return null;
  }
  function nf(e5, t3, n3) {
    if (t3 === ``) return null;
    for (; e5.nodeType !== 3; ) if ((e5.nodeType !== 1 || e5.nodeName !== `INPUT` || e5.type !== `hidden`) && !n3 || (e5 = cf(e5.nextSibling), e5 === null)) return null;
    return e5;
  }
  function rf(e5, t3) {
    for (; e5.nodeType !== 8; ) if ((e5.nodeType !== 1 || e5.nodeName !== `INPUT` || e5.type !== `hidden`) && !t3 || (e5 = cf(e5.nextSibling), e5 === null)) return null;
    return e5;
  }
  function af(e5) {
    return e5.data === `$?` || e5.data === `$~`;
  }
  function of(e5) {
    return e5.data === `$!` || e5.data === `$?` && e5.ownerDocument.readyState !== `loading`;
  }
  function sf(e5, t3) {
    var n3 = e5.ownerDocument;
    if (e5.data === `$~`) e5._reactRetry = t3;
    else if (e5.data !== `$?` || n3.readyState !== `loading`) t3();
    else {
      var r3 = function() {
        t3(), n3.removeEventListener(`DOMContentLoaded`, r3);
      };
      n3.addEventListener(`DOMContentLoaded`, r3), e5._reactRetry = r3;
    }
  }
  function cf(e5) {
    for (; e5 != null; e5 = e5.nextSibling) {
      var t3 = e5.nodeType;
      if (t3 === 1 || t3 === 3) break;
      if (t3 === 8) {
        if (t3 = e5.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`) break;
        if (t3 === `/$` || t3 === `/&`) return null;
      }
    }
    return e5;
  }
  var lf = null;
  function uf(e5) {
    e5 = e5.nextSibling;
    for (var t3 = 0; e5; ) {
      if (e5.nodeType === 8) {
        var n3 = e5.data;
        if (n3 === `/$` || n3 === `/&`) {
          if (t3 === 0) return cf(e5.nextSibling);
          t3--;
        } else n3 !== `$` && n3 !== `$!` && n3 !== `$?` && n3 !== `$~` && n3 !== `&` || t3++;
      }
      e5 = e5.nextSibling;
    }
    return null;
  }
  function df(e5) {
    e5 = e5.previousSibling;
    for (var t3 = 0; e5; ) {
      if (e5.nodeType === 8) {
        var n3 = e5.data;
        if (n3 === `$` || n3 === `$!` || n3 === `$?` || n3 === `$~` || n3 === `&`) {
          if (t3 === 0) return e5;
          t3--;
        } else n3 !== `/$` && n3 !== `/&` || t3++;
      }
      e5 = e5.previousSibling;
    }
    return null;
  }
  function ff(e5, t3, n3) {
    switch (t3 = Bd(n3), e5) {
      case `html`:
        if (e5 = t3.documentElement, !e5) throw Error(i2(452));
        return e5;
      case `head`:
        if (e5 = t3.head, !e5) throw Error(i2(453));
        return e5;
      case `body`:
        if (e5 = t3.body, !e5) throw Error(i2(454));
        return e5;
      default:
        throw Error(i2(451));
    }
  }
  function pf(e5) {
    for (var t3 = e5.attributes; t3.length; ) e5.removeAttributeNode(t3[0]);
    _t4(e5);
  }
  var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
  function gf(e5) {
    return typeof e5.getRootNode == `function` ? e5.getRootNode() : e5.nodeType === 9 ? e5 : e5.ownerDocument;
  }
  var _f = k2.d;
  k2.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
  function vf() {
    var e5 = _f.f(), t3 = bu();
    return e5 || t3;
  }
  function yf(e5) {
    var t3 = yt2(e5);
    t3 !== null && t3.tag === 5 && t3.type === `form` ? Es(t3) : _f.r(e5);
  }
  var bf = typeof document > `u` ? null : document;
  function xf(e5, t3, n3) {
    var r3 = bf;
    if (r3 && typeof t3 == `string` && t3) {
      var i3 = Vt2(t3);
      i3 = `link[rel="` + e5 + `"][href="` + i3 + `"]`, typeof n3 == `string` && (i3 += `[crossorigin="` + n3 + `"]`), hf.has(i3) || (hf.add(i3), e5 = { rel: e5, crossOrigin: n3, href: t3 }, r3.querySelector(i3) === null && (t3 = r3.createElement(`link`), Pd(t3, `link`, e5), St2(t3), r3.head.appendChild(t3)));
    }
  }
  function Sf(e5) {
    _f.D(e5), xf(`dns-prefetch`, e5, null);
  }
  function Cf(e5, t3) {
    _f.C(e5, t3), xf(`preconnect`, e5, t3);
  }
  function wf(e5, t3, n3) {
    _f.L(e5, t3, n3);
    var r3 = bf;
    if (r3 && e5 && t3) {
      var i3 = `link[rel="preload"][as="` + Vt2(t3) + `"]`;
      t3 === `image` && n3 && n3.imageSrcSet ? (i3 += `[imagesrcset="` + Vt2(n3.imageSrcSet) + `"]`, typeof n3.imageSizes == `string` && (i3 += `[imagesizes="` + Vt2(n3.imageSizes) + `"]`)) : i3 += `[href="` + Vt2(e5) + `"]`;
      var a3 = i3;
      switch (t3) {
        case `style`:
          a3 = Af(e5);
          break;
        case `script`:
          a3 = Pf(e5);
      }
      mf.has(a3) || (e5 = h2({ rel: `preload`, href: t3 === `image` && n3 && n3.imageSrcSet ? void 0 : e5, as: t3 }, n3), mf.set(a3, e5), r3.querySelector(i3) !== null || t3 === `style` && r3.querySelector(jf(a3)) || t3 === `script` && r3.querySelector(Ff(a3)) || (t3 = r3.createElement(`link`), Pd(t3, `link`, e5), St2(t3), r3.head.appendChild(t3)));
    }
  }
  function Tf(e5, t3) {
    _f.m(e5, t3);
    var n3 = bf;
    if (n3 && e5) {
      var r3 = t3 && typeof t3.as == `string` ? t3.as : `script`, i3 = `link[rel="modulepreload"][as="` + Vt2(r3) + `"][href="` + Vt2(e5) + `"]`, a3 = i3;
      switch (r3) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a3 = Pf(e5);
      }
      if (!mf.has(a3) && (e5 = h2({ rel: `modulepreload`, href: e5 }, t3), mf.set(a3, e5), n3.querySelector(i3) === null)) {
        switch (r3) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n3.querySelector(Ff(a3))) return;
        }
        r3 = n3.createElement(`link`), Pd(r3, `link`, e5), St2(r3), n3.head.appendChild(r3);
      }
    }
  }
  function Ef(e5, t3, n3) {
    _f.S(e5, t3, n3);
    var r3 = bf;
    if (r3 && e5) {
      var i3 = xt2(r3).hoistableStyles, a3 = Af(e5);
      t3 || (t3 = `default`);
      var o3 = i3.get(a3);
      if (!o3) {
        var s3 = { loading: 0, preload: null };
        if (o3 = r3.querySelector(jf(a3))) s3.loading = 5;
        else {
          e5 = h2({ rel: `stylesheet`, href: e5, "data-precedence": t3 }, n3), (n3 = mf.get(a3)) && Rf(e5, n3);
          var c3 = o3 = r3.createElement(`link`);
          St2(c3), Pd(c3, `link`, e5), c3._p = new Promise(function(e6, t4) {
            c3.onload = e6, c3.onerror = t4;
          }), c3.addEventListener(`load`, function() {
            s3.loading |= 1;
          }), c3.addEventListener(`error`, function() {
            s3.loading |= 2;
          }), s3.loading |= 4, Lf(o3, t3, r3);
        }
        o3 = { type: `stylesheet`, instance: o3, count: 1, state: s3 }, i3.set(a3, o3);
      }
    }
  }
  function Df(e5, t3) {
    _f.X(e5, t3);
    var n3 = bf;
    if (n3 && e5) {
      var r3 = xt2(n3).hoistableScripts, i3 = Pf(e5), a3 = r3.get(i3);
      a3 || (a3 = n3.querySelector(Ff(i3)), a3 || (e5 = h2({ src: e5, async: true }, t3), (t3 = mf.get(i3)) && zf(e5, t3), a3 = n3.createElement(`script`), St2(a3), Pd(a3, `link`, e5), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
    }
  }
  function Of(e5, t3) {
    _f.M(e5, t3);
    var n3 = bf;
    if (n3 && e5) {
      var r3 = xt2(n3).hoistableScripts, i3 = Pf(e5), a3 = r3.get(i3);
      a3 || (a3 = n3.querySelector(Ff(i3)), a3 || (e5 = h2({ src: e5, async: true, type: `module` }, t3), (t3 = mf.get(i3)) && zf(e5, t3), a3 = n3.createElement(`script`), St2(a3), Pd(a3, `link`, e5), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
    }
  }
  function kf(e5, t3, n3, r3) {
    var a3 = (a3 = me2.current) ? gf(a3) : null;
    if (!a3) throw Error(i2(446));
    switch (e5) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        return typeof n3.precedence == `string` && typeof n3.href == `string` ? (t3 = Af(n3.href), n3 = xt2(a3).hoistableStyles, r3 = n3.get(t3), r3 || (r3 = { type: `style`, instance: null, count: 0, state: null }, n3.set(t3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      case `link`:
        if (n3.rel === `stylesheet` && typeof n3.href == `string` && typeof n3.precedence == `string`) {
          e5 = Af(n3.href);
          var o3 = xt2(a3).hoistableStyles, s3 = o3.get(e5);
          if (s3 || (a3 = a3.ownerDocument || a3, s3 = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, o3.set(e5, s3), (o3 = a3.querySelector(jf(e5))) && !o3._p && (s3.instance = o3, s3.state.loading = 5), mf.has(e5) || (n3 = { rel: `preload`, as: `style`, href: n3.href, crossOrigin: n3.crossOrigin, integrity: n3.integrity, media: n3.media, hrefLang: n3.hrefLang, referrerPolicy: n3.referrerPolicy }, mf.set(e5, n3), o3 || Nf(a3, e5, n3, s3.state))), t3 && r3 === null) throw Error(i2(528, ``));
          return s3;
        }
        if (t3 && r3 !== null) throw Error(i2(529, ``));
        return null;
      case `script`:
        return t3 = n3.async, n3 = n3.src, typeof n3 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (t3 = Pf(n3), n3 = xt2(a3).hoistableScripts, r3 = n3.get(t3), r3 || (r3 = { type: `script`, instance: null, count: 0, state: null }, n3.set(t3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      default:
        throw Error(i2(444, e5));
    }
  }
  function Af(e5) {
    return `href="` + Vt2(e5) + `"`;
  }
  function jf(e5) {
    return `link[rel="stylesheet"][` + e5 + `]`;
  }
  function Mf(e5) {
    return h2({}, e5, { "data-precedence": e5.precedence, precedence: null });
  }
  function Nf(e5, t3, n3, r3) {
    e5.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`) ? r3.loading = 1 : (t3 = e5.createElement(`link`), r3.preload = t3, t3.addEventListener(`load`, function() {
      return r3.loading |= 1;
    }), t3.addEventListener(`error`, function() {
      return r3.loading |= 2;
    }), Pd(t3, `link`, n3), St2(t3), e5.head.appendChild(t3));
  }
  function Pf(e5) {
    return `[src="` + Vt2(e5) + `"]`;
  }
  function Ff(e5) {
    return `script[async]` + e5;
  }
  function If(e5, t3, n3) {
    if (t3.count++, t3.instance === null) switch (t3.type) {
      case `style`:
        var r3 = e5.querySelector(`style[data-href~="` + Vt2(n3.href) + `"]`);
        if (r3) return t3.instance = r3, St2(r3), r3;
        var a3 = h2({}, n3, { "data-href": n3.href, "data-precedence": n3.precedence, href: null, precedence: null });
        return r3 = (e5.ownerDocument || e5).createElement(`style`), St2(r3), Pd(r3, `style`, a3), Lf(r3, n3.precedence, e5), t3.instance = r3;
      case `stylesheet`:
        a3 = Af(n3.href);
        var o3 = e5.querySelector(jf(a3));
        if (o3) return t3.state.loading |= 4, t3.instance = o3, St2(o3), o3;
        r3 = Mf(n3), (a3 = mf.get(a3)) && Rf(r3, a3), o3 = (e5.ownerDocument || e5).createElement(`link`), St2(o3);
        var s3 = o3;
        return s3._p = new Promise(function(e6, t4) {
          s3.onload = e6, s3.onerror = t4;
        }), Pd(o3, `link`, r3), t3.state.loading |= 4, Lf(o3, n3.precedence, e5), t3.instance = o3;
      case `script`:
        return o3 = Pf(n3.src), (a3 = e5.querySelector(Ff(o3))) ? (t3.instance = a3, St2(a3), a3) : (r3 = n3, (a3 = mf.get(o3)) && (r3 = h2({}, n3), zf(r3, a3)), e5 = e5.ownerDocument || e5, a3 = e5.createElement(`script`), St2(a3), Pd(a3, `link`, r3), e5.head.appendChild(a3), t3.instance = a3);
      case `void`:
        return null;
      default:
        throw Error(i2(443, t3.type));
    }
    else t3.type === `stylesheet` && !(t3.state.loading & 4) && (r3 = t3.instance, t3.state.loading |= 4, Lf(r3, n3.precedence, e5));
    return t3.instance;
  }
  function Lf(e5, t3, n3) {
    for (var r3 = n3.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i3 = r3.length ? r3[r3.length - 1] : null, a3 = i3, o3 = 0; o3 < r3.length; o3++) {
      var s3 = r3[o3];
      if (s3.dataset.precedence === t3) a3 = s3;
      else if (a3 !== i3) break;
    }
    a3 ? a3.parentNode.insertBefore(e5, a3.nextSibling) : (t3 = n3.nodeType === 9 ? n3.head : n3, t3.insertBefore(e5, t3.firstChild));
  }
  function Rf(e5, t3) {
    e5.crossOrigin ?? (e5.crossOrigin = t3.crossOrigin), e5.referrerPolicy ?? (e5.referrerPolicy = t3.referrerPolicy), e5.title ?? (e5.title = t3.title);
  }
  function zf(e5, t3) {
    e5.crossOrigin ?? (e5.crossOrigin = t3.crossOrigin), e5.referrerPolicy ?? (e5.referrerPolicy = t3.referrerPolicy), e5.integrity ?? (e5.integrity = t3.integrity);
  }
  var Bf = null;
  function Vf(e5, t3, n3) {
    if (Bf === null) {
      var r3 = /* @__PURE__ */ new Map(), i3 = Bf = /* @__PURE__ */ new Map();
      i3.set(n3, r3);
    } else i3 = Bf, r3 = i3.get(n3), r3 || (r3 = /* @__PURE__ */ new Map(), i3.set(n3, r3));
    if (r3.has(e5)) return r3;
    for (r3.set(e5, null), n3 = n3.getElementsByTagName(e5), i3 = 0; i3 < n3.length; i3++) {
      var a3 = n3[i3];
      if (!(a3[gt2] || a3[lt2] || e5 === `link` && a3.getAttribute(`rel`) === `stylesheet`) && a3.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o3 = a3.getAttribute(t3) || ``;
        o3 = e5 + o3;
        var s3 = r3.get(o3);
        s3 ? s3.push(a3) : r3.set(o3, [a3]);
      }
    }
    return r3;
  }
  function Hf(e5, t3, n3) {
    e5 = e5.ownerDocument || e5, e5.head.insertBefore(n3, t3 === `title` ? e5.querySelector(`head > title`) : null);
  }
  function Uf(e5, t3, n3) {
    if (n3 === 1 || t3.itemProp != null) return false;
    switch (e5) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``) break;
        return true;
      case `link`:
        if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError) break;
        switch (t3.rel) {
          case `stylesheet`:
            return e5 = t3.disabled, typeof t3.precedence == `string` && e5 == null;
          default:
            return true;
        }
      case `script`:
        if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`) return true;
    }
    return false;
  }
  function Wf(e5) {
    return !(e5.type === `stylesheet` && !(e5.state.loading & 3));
  }
  function Gf(e5, t3, n3, r3) {
    if (n3.type === `stylesheet` && (typeof r3.media != `string` || false !== matchMedia(r3.media).matches) && !(n3.state.loading & 4)) {
      if (n3.instance === null) {
        var i3 = Af(r3.href), a3 = t3.querySelector(jf(i3));
        if (a3) {
          t3 = a3._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e5.count++, e5 = Jf.bind(e5), t3.then(e5, e5)), n3.state.loading |= 4, n3.instance = a3, St2(a3);
          return;
        }
        a3 = t3.ownerDocument || t3, r3 = Mf(r3), (i3 = mf.get(i3)) && Rf(r3, i3), a3 = a3.createElement(`link`), St2(a3);
        var o3 = a3;
        o3._p = new Promise(function(e6, t4) {
          o3.onload = e6, o3.onerror = t4;
        }), Pd(a3, `link`, r3), n3.instance = a3;
      }
      e5.stylesheets === null && (e5.stylesheets = /* @__PURE__ */ new Map()), e5.stylesheets.set(n3, t3), (t3 = n3.state.preload) && !(n3.state.loading & 3) && (e5.count++, n3 = Jf.bind(e5), t3.addEventListener(`load`, n3), t3.addEventListener(`error`, n3));
    }
  }
  var Kf = 0;
  function qf(e5, t3) {
    return e5.stylesheets && e5.count === 0 && Xf(e5, e5.stylesheets), 0 < e5.count || 0 < e5.imgCount ? function(n3) {
      var r3 = setTimeout(function() {
        if (e5.stylesheets && Xf(e5, e5.stylesheets), e5.unsuspend) {
          var t4 = e5.unsuspend;
          e5.unsuspend = null, t4();
        }
      }, 6e4 + t3);
      0 < e5.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
      var i3 = setTimeout(function() {
        if (e5.waitingForImages = false, e5.count === 0 && (e5.stylesheets && Xf(e5, e5.stylesheets), e5.unsuspend)) {
          var t4 = e5.unsuspend;
          e5.unsuspend = null, t4();
        }
      }, (e5.imgBytes > Kf ? 50 : 800) + t3);
      return e5.unsuspend = n3, function() {
        e5.unsuspend = null, clearTimeout(r3), clearTimeout(i3);
      };
    } : null;
  }
  function Jf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e5 = this.unsuspend;
        this.unsuspend = null, e5();
      }
    }
  }
  var Yf = null;
  function Xf(e5, t3) {
    e5.stylesheets = null, e5.unsuspend !== null && (e5.count++, Yf = /* @__PURE__ */ new Map(), t3.forEach(Zf, e5), Yf = null, Jf.call(e5));
  }
  function Zf(e5, t3) {
    if (!(t3.state.loading & 4)) {
      var n3 = Yf.get(e5);
      if (n3) var r3 = n3.get(null);
      else {
        n3 = /* @__PURE__ */ new Map(), Yf.set(e5, n3);
        for (var i3 = e5.querySelectorAll(`link[data-precedence],style[data-precedence]`), a3 = 0; a3 < i3.length; a3++) {
          var o3 = i3[a3];
          (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) && (n3.set(o3.dataset.precedence, o3), r3 = o3);
        }
        r3 && n3.set(null, r3);
      }
      i3 = t3.instance, o3 = i3.getAttribute(`data-precedence`), a3 = n3.get(o3) || r3, a3 === r3 && n3.set(null, i3), n3.set(o3, i3), this.count++, r3 = Jf.bind(this), i3.addEventListener(`load`, r3), i3.addEventListener(`error`, r3), a3 ? a3.parentNode.insertBefore(i3, a3.nextSibling) : (e5 = e5.nodeType === 9 ? e5.head : e5, e5.insertBefore(i3, e5.firstChild)), t3.state.loading |= 4;
    }
  }
  var Qf = { $$typeof: S2, Provider: null, Consumer: null, _currentValue: A2, _currentValue2: A2, _threadCount: 0 };
  function $f(e5, t3, n3, r3, i3, a3, o3, s3, c3) {
    this.tag = 1, this.containerInfo = e5, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qe2(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qe2(0), this.hiddenUpdates = Qe2(null), this.identifierPrefix = r3, this.onUncaughtError = i3, this.onCaughtError = a3, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ep(e5, t3, n3, r3, i3, a3, o3, s3, c3, l3, u2, d3) {
    return e5 = new $f(e5, t3, n3, o3, c3, l3, u2, d3, s3), t3 = 1, true === a3 && (t3 |= 24), a3 = ci(3, null, null, t3), e5.current = a3, a3.stateNode = e5, t3 = sa(), t3.refCount++, e5.pooledCache = t3, t3.refCount++, a3.memoizedState = { element: r3, isDehydrated: n3, cache: t3 }, Ba(a3), e5;
  }
  function tp(e5) {
    return e5 ? (e5 = oi, e5) : oi;
  }
  function np(e5, t3, n3, r3, i3, a3) {
    i3 = tp(i3), r3.context === null ? r3.context = i3 : r3.pendingContext = i3, r3 = Ha(t3), r3.payload = { element: n3 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n3 = Ua(e5, r3, t3), n3 !== null && (hu(n3, e5, t3), Wa(n3, e5, t3));
  }
  function rp(e5, t3) {
    if (e5 = e5.memoizedState, e5 !== null && e5.dehydrated !== null) {
      var n3 = e5.retryLane;
      e5.retryLane = n3 !== 0 && n3 < t3 ? n3 : t3;
    }
  }
  function ip(e5, t3) {
    rp(e5, t3), (e5 = e5.alternate) && rp(e5, t3);
  }
  function ap(e5) {
    if (e5.tag === 13 || e5.tag === 31) {
      var t3 = ri(e5, 67108864);
      t3 !== null && hu(t3, e5, 67108864), ip(e5, 67108864);
    }
  }
  function op(e5) {
    if (e5.tag === 13 || e5.tag === 31) {
      var t3 = pu();
      t3 = it2(t3);
      var n3 = ri(e5, t3);
      n3 !== null && hu(n3, e5, t3), ip(e5, t3);
    }
  }
  var sp = true;
  function cp(e5, t3, n3, r3) {
    var i3 = O2.T;
    O2.T = null;
    var a3 = k2.p;
    try {
      k2.p = 2, up(e5, t3, n3, r3);
    } finally {
      k2.p = a3, O2.T = i3;
    }
  }
  function lp(e5, t3, n3, r3) {
    var i3 = O2.T;
    O2.T = null;
    var a3 = k2.p;
    try {
      k2.p = 8, up(e5, t3, n3, r3);
    } finally {
      k2.p = a3, O2.T = i3;
    }
  }
  function up(e5, t3, n3, r3) {
    if (sp) {
      var i3 = dp(r3);
      if (i3 === null) wd(e5, t3, r3, fp, n3), Cp(e5, r3);
      else if (Tp(i3, e5, t3, n3, r3)) r3.stopPropagation();
      else if (Cp(e5, r3), t3 & 4 && -1 < Sp.indexOf(e5)) {
        for (; i3 !== null; ) {
          var a3 = yt2(i3);
          if (a3 !== null) switch (a3.tag) {
            case 3:
              if (a3 = a3.stateNode, a3.current.memoizedState.isDehydrated) {
                var o3 = qe2(a3.pendingLanes);
                if (o3 !== 0) {
                  var s3 = a3;
                  for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o3; ) {
                    var c3 = 1 << 31 - Ve2(o3);
                    s3.entanglements[1] |= c3, o3 &= ~c3;
                  }
                  rd(a3), !(K & 6) && (tu = je2() + 500, id(0, false));
                }
              }
              break;
            case 31:
            case 13:
              s3 = ri(a3, 2), s3 !== null && hu(s3, a3, 2), bu(), ip(a3, 2);
          }
          if (a3 = dp(r3), a3 === null && wd(e5, t3, r3, fp, n3), a3 === i3) break;
          i3 = a3;
        }
        i3 !== null && r3.stopPropagation();
      } else wd(e5, t3, r3, null, n3);
    }
  }
  function dp(e5) {
    return e5 = rn2(e5), pp(e5);
  }
  var fp = null;
  function pp(e5) {
    if (fp = null, e5 = vt2(e5), e5 !== null) {
      var t3 = o2(e5);
      if (t3 === null) e5 = null;
      else {
        var n3 = t3.tag;
        if (n3 === 13) {
          if (e5 = s2(t3), e5 !== null) return e5;
          e5 = null;
        } else if (n3 === 31) {
          if (e5 = c2(t3), e5 !== null) return e5;
          e5 = null;
        } else if (n3 === 3) {
          if (t3.stateNode.current.memoizedState.isDehydrated) return t3.tag === 3 ? t3.stateNode.containerInfo : null;
          e5 = null;
        } else t3 !== e5 && (e5 = null);
      }
    }
    return fp = e5, null;
  }
  function mp(e5) {
    switch (e5) {
      case `beforetoggle`:
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `resize`:
      case `seeked`:
      case `submit`:
      case `toggle`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 2;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch (Me2()) {
          case Ne2:
            return 2;
          case Pe2:
            return 8;
          case Fe2:
          case Ie2:
            return 32;
          case Le2:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hp = false, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Cp(e5, t3) {
    switch (e5) {
      case `focusin`:
      case `focusout`:
        gp = null;
        break;
      case `dragenter`:
      case `dragleave`:
        _p = null;
        break;
      case `mouseover`:
      case `mouseout`:
        vp = null;
        break;
      case `pointerover`:
      case `pointerout`:
        yp.delete(t3.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        bp.delete(t3.pointerId);
    }
  }
  function wp(e5, t3, n3, r3, i3, a3) {
    return e5 === null || e5.nativeEvent !== a3 ? (e5 = { blockedOn: t3, domEventName: n3, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i3] }, t3 !== null && (t3 = yt2(t3), t3 !== null && ap(t3)), e5) : (e5.eventSystemFlags |= r3, t3 = e5.targetContainers, i3 !== null && t3.indexOf(i3) === -1 && t3.push(i3), e5);
  }
  function Tp(e5, t3, n3, r3, i3) {
    switch (t3) {
      case `focusin`:
        return gp = wp(gp, e5, t3, n3, r3, i3), true;
      case `dragenter`:
        return _p = wp(_p, e5, t3, n3, r3, i3), true;
      case `mouseover`:
        return vp = wp(vp, e5, t3, n3, r3, i3), true;
      case `pointerover`:
        var a3 = i3.pointerId;
        return yp.set(a3, wp(yp.get(a3) || null, e5, t3, n3, r3, i3)), true;
      case `gotpointercapture`:
        return a3 = i3.pointerId, bp.set(a3, wp(bp.get(a3) || null, e5, t3, n3, r3, i3)), true;
    }
    return false;
  }
  function Ep(e5) {
    var t3 = vt2(e5.target);
    if (t3 !== null) {
      var n3 = o2(t3);
      if (n3 !== null) {
        if (t3 = n3.tag, t3 === 13) {
          if (t3 = s2(n3), t3 !== null) {
            e5.blockedOn = t3, st2(e5.priority, function() {
              op(n3);
            });
            return;
          }
        } else if (t3 === 31) {
          if (t3 = c2(n3), t3 !== null) {
            e5.blockedOn = t3, st2(e5.priority, function() {
              op(n3);
            });
            return;
          }
        } else if (t3 === 3 && n3.stateNode.current.memoizedState.isDehydrated) {
          e5.blockedOn = n3.tag === 3 ? n3.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e5.blockedOn = null;
  }
  function Dp(e5) {
    if (e5.blockedOn !== null) return false;
    for (var t3 = e5.targetContainers; 0 < t3.length; ) {
      var n3 = dp(e5.nativeEvent);
      if (n3 === null) {
        n3 = e5.nativeEvent;
        var r3 = new n3.constructor(n3.type, n3);
        nn2 = r3, n3.target.dispatchEvent(r3), nn2 = null;
      } else return t3 = yt2(n3), t3 !== null && ap(t3), e5.blockedOn = n3, false;
      t3.shift();
    }
    return true;
  }
  function Op(e5, t3, n3) {
    Dp(e5) && n3.delete(t3);
  }
  function kp() {
    hp = false, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
  }
  function Ap(e5, n3) {
    e5.blockedOn === n3 && (e5.blockedOn = null, hp || (hp = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, kp)));
  }
  var jp = null;
  function Mp(e5) {
    jp !== e5 && (jp = e5, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
      jp === e5 && (jp = null);
      for (var t3 = 0; t3 < e5.length; t3 += 3) {
        var n3 = e5[t3], r3 = e5[t3 + 1], i3 = e5[t3 + 2];
        if (typeof r3 != `function`) {
          if (pp(r3 || n3) === null) continue;
          break;
        }
        var a3 = yt2(n3);
        a3 !== null && (e5.splice(t3, 3), t3 -= 3, ws(a3, { pending: true, data: i3, method: n3.method, action: r3 }, r3, i3));
      }
    }));
  }
  function Np(e5) {
    function t3(t4) {
      return Ap(t4, e5);
    }
    gp !== null && Ap(gp, e5), _p !== null && Ap(_p, e5), vp !== null && Ap(vp, e5), yp.forEach(t3), bp.forEach(t3);
    for (var n3 = 0; n3 < xp.length; n3++) {
      var r3 = xp[n3];
      r3.blockedOn === e5 && (r3.blockedOn = null);
    }
    for (; 0 < xp.length && (n3 = xp[0], n3.blockedOn === null); ) Ep(n3), n3.blockedOn === null && xp.shift();
    if (n3 = (e5.ownerDocument || e5).$$reactFormReplay, n3 != null) for (r3 = 0; r3 < n3.length; r3 += 3) {
      var i3 = n3[r3], a3 = n3[r3 + 1], o3 = i3[ut2] || null;
      if (typeof a3 == `function`) o3 || Mp(n3);
      else if (o3) {
        var s3 = null;
        if (a3 && a3.hasAttribute(`formAction`)) {
          if (i3 = a3, o3 = a3[ut2] || null) s3 = o3.formAction;
          else if (pp(i3) !== null) continue;
        } else s3 = o3.action;
        typeof s3 == `function` ? n3[r3 + 1] = s3 : (n3.splice(r3, 3), r3 -= 3), Mp(n3);
      }
    }
  }
  function Pp() {
    function e5(e6) {
      e6.canIntercept && e6.info === `react-transition` && e6.intercept({ handler: function() {
        return new Promise(function(e7) {
          return i3 = e7;
        });
      }, focusReset: `manual`, scroll: `manual` });
    }
    function t3() {
      i3 !== null && (i3(), i3 = null), r3 || setTimeout(n3, 20);
    }
    function n3() {
      if (!r3 && !navigation.transition) {
        var e6 = navigation.currentEntry;
        e6 && e6.url != null && navigation.navigate(e6.url, { state: e6.getState(), info: `react-transition`, history: `replace` });
      }
    }
    if (typeof navigation == `object`) {
      var r3 = false, i3 = null;
      return navigation.addEventListener(`navigate`, e5), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n3, 100), function() {
        r3 = true, navigation.removeEventListener(`navigate`, e5), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i3 !== null && (i3(), i3 = null);
      };
    }
  }
  function Fp(e5) {
    this._internalRoot = e5;
  }
  Ip.prototype.render = Fp.prototype.render = function(e5) {
    var t3 = this._internalRoot;
    if (t3 === null) throw Error(i2(409));
    var n3 = t3.current;
    np(n3, pu(), e5, t3, null, null);
  }, Ip.prototype.unmount = Fp.prototype.unmount = function() {
    var e5 = this._internalRoot;
    if (e5 !== null) {
      this._internalRoot = null;
      var t3 = e5.containerInfo;
      np(e5.current, 2, null, e5, null, null), bu(), t3[dt2] = null;
    }
  };
  function Ip(e5) {
    this._internalRoot = e5;
  }
  Ip.prototype.unstable_scheduleHydration = function(e5) {
    if (e5) {
      var t3 = ot2();
      e5 = { blockedOn: null, target: e5, priority: t3 };
      for (var n3 = 0; n3 < xp.length && t3 !== 0 && t3 < xp[n3].priority; n3++) ;
      xp.splice(n3, 0, e5), n3 === 0 && Ep(e5);
    }
  };
  var Lp = n2.version;
  if (Lp !== `19.2.6`) throw Error(i2(527, Lp, `19.2.6`));
  k2.findDOMNode = function(e5) {
    var t3 = e5._reactInternals;
    if (t3 === void 0) throw typeof e5.render == `function` ? Error(i2(188)) : (e5 = Object.keys(e5).join(`,`), Error(i2(268, e5)));
    return e5 = d2(t3), e5 = e5 === null ? null : p2(e5), e5 = e5 === null ? null : e5.stateNode, e5;
  };
  var Rp = { bundleType: 0, version: `19.2.6`, rendererPackageName: `react-dom`, currentDispatcherRef: O2, reconcilerVersion: `19.2.6` };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zp.isDisabled && zp.supportsFiber) try {
      Be2 = zp.inject(Rp), N2 = zp;
    } catch {
    }
  }
  e4.createRoot = function(e5, t3) {
    if (!a2(e5)) throw Error(i2(299));
    var n3 = false, r3 = ``, o3 = qs, s3 = Js, c3 = Ys;
    return t3 != null && (true === t3.unstable_strictMode && (n3 = true), t3.identifierPrefix !== void 0 && (r3 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (o3 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (s3 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (c3 = t3.onRecoverableError)), t3 = ep(e5, 1, false, null, null, n3, r3, null, o3, s3, c3, Pp), e5[dt2] = t3.current, Sd(e5), new Fp(t3);
  };
})), g = o(((e4, t2) => {
  function n2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e5) {
      console.error(e5);
    }
  }
  n2(), t2.exports = h();
})), _ = c(u(), 1), v = g(), y = class extends Error {
  constructor(e4) {
    super(`use${e4}Context must be used within a ${e4}Provider`), this.name = `StrictContextError`;
  }
};
function b(e4) {
  let t2 = _.createContext(void 0);
  t2.displayName = e4;
  function n2() {
    let n3 = _.useContext(t2);
    if (n3 === void 0) throw new y(e4);
    return n3;
  }
  return n2.displayName = `use${e4}Context`, [n2, t2.Provider];
}
var [x, ee] = b(`NavBar`), S = { container: `_container_10ud5_1`, title: `_title_10ud5_8`, tabs: `_tabs_10ud5_12`, button: `_button_10ud5_21`, buttonActive: `_buttonActive_10ud5_29` }, C = o(((e4) => {
  var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.fragment`);
  function r2(e5, n3, r3) {
    var i2 = null;
    if (r3 !== void 0 && (i2 = `` + r3), n3.key !== void 0 && (i2 = `` + n3.key), `key` in n3) for (var a2 in r3 = {}, n3) a2 !== `key` && (r3[a2] = n3[a2]);
    else r3 = n3;
    return n3 = r3.ref, { $$typeof: t2, type: e5, key: i2, ref: n3 === void 0 ? null : n3, props: r3 };
  }
  e4.Fragment = n2, e4.jsx = r2, e4.jsxs = r2;
})), w = o(((e4, t2) => {
  t2.exports = C();
}))(), te = (0, _.memo)(function({ tab: e4, title: t2 }) {
  let { activeItem: n2, setActiveItem: r2 } = x(), i2 = n2 === e4;
  return (0, w.jsx)(`button`, { type: `button`, disabled: i2, className: `${S.button} ${i2 ? S.buttonActive : ``}`, onClick: () => {
    r2(e4);
  }, children: t2 });
});
function ne({ title: e4, children: t2, activeItem: n2, onChange: r2 }) {
  let i2 = (0, _.useMemo)(() => ({ activeItem: n2 ?? ``, setActiveItem: (e5) => {
    e5 !== n2 && r2?.(e5);
  } }), [n2, r2]);
  return (0, w.jsxs)(`header`, { className: S.container, children: [e4 ? (0, w.jsx)(`h1`, { className: S.title, children: e4 }) : null, (0, w.jsx)(`nav`, { className: S.tabs, "aria-label": `Primary`, children: (0, w.jsx)(ee, { value: i2, children: t2 }) })] });
}
var T = Object.freeze(Object.assign(ne, { Container: ne, Button: te }));
function re(e4) {
  if (!(0, _.isValidElement)(e4)) throw Error(`Node must be a valid React element. Received: ` + JSON.stringify(e4));
}
function ie(e4, t2, n2) {
  if (!e4) return null;
  let r2 = null;
  return _.Children.forEach(e4, (e5, i2) => {
    re(e5), n2?.(e5), !r2 && t2(e5, i2) && (r2 = e5);
  }), r2;
}
function E(e4) {
  return Array.isArray(e4) ? e4.map((e5) => E(e5)) : typeof e4 == `object` && e4 ? Object.fromEntries(Object.entries(e4).map(([e5, t2]) => [e5, E(t2)])) : e4;
}
function ae(e4) {
  let { data: t2, fileName: n2, mimeType: r2 = `text/plain` } = e4, i2 = typeof t2 == `string` ? new Blob([t2], { type: r2 }) : t2, a2 = URL.createObjectURL(i2), o2 = document.createElement(`a`);
  o2.href = a2, o2.download = n2, o2.click(), URL.revokeObjectURL(a2);
}
function oe(e4) {
  return typeof e4 == `object` && !!e4 && !Array.isArray(e4);
}
function se(e4) {
  let { data: t2, type: n2, filename: r2 } = e4 ?? {}, i2 = (0, _.useMemo)(() => t2 ? URL.createObjectURL(typeof t2 == `string` ? new Blob([t2], { type: n2 ?? `text/plain` }) : t2) : `#`, [t2, n2]);
  return (0, _.useEffect)(() => {
    let e5 = i2;
    return () => {
      e5 !== `#` && URL.revokeObjectURL(e5);
    };
  }, [i2]), { href: i2, download: r2 ?? `` };
}
var D = () => O(0), O = (e4 = 0) => typeof e4 == `number` ? { start: { line: -1, column: -1, offset: e4 }, end: { line: -1, column: -1, offset: e4 + 1 } } : `start` in e4 ? { start: { ...e4.start }, end: { ...e4.end } } : { start: { ...e4 }, end: { line: e4.line, column: e4.column + 1, offset: e4.offset + 1 } }, k = (e4, t2) => typeof e4 == `string` ? { type: `Identifier`, value: e4, loc: O(t2) } : e4, A = { file: (e4, t2) => ({ type: `File`, units: e4, loc: O(t2) }), unit: (e4, t2, n2, r2) => ({ type: `Unit`, name: k(e4), className: k(t2), attributes: n2, loc: O(r2) }), literalAttribute: (e4, t2, n2) => ({ type: `LiteralAttribute`, key: k(e4), value: t2, loc: O(n2) }), fixedArrayAttribute: (e4, t2, n2, r2) => ({ type: `FixedArrayAttribute`, key: k(e4), declaration: typeof t2 == `number` ? A.literalAttribute(e4, A.numberLiteral(t2)) : t2, elements: n2, loc: O(r2) }), dynamicArrayAttribute: (e4, t2, n2) => ({ type: `DynamicArrayAttribute`, key: k(e4), elements: t2, loc: O(n2) }), fixedArrayElement: (e4, t2, n2, r2) => ({ type: `FixedArrayElement`, key: k(e4), index: t2, value: n2, loc: O(r2) }), dynamicArrayElement: (e4, t2, n2) => ({ type: `DynamicArrayElement`, key: k(e4), value: t2, loc: O(n2) }), identifier: k, location: O, emptyLocation: D, stringLiteral: (e4, t2) => ({ type: `StringLiteral`, value: e4, loc: O(t2) }), booleanLiteral: (e4, t2) => ({ type: `BooleanLiteral`, value: e4, loc: O(t2) }), floatLiteral: (e4, t2) => ({ type: `FloatLiteral`, value: e4, loc: O(t2) }), float2Literal: (e4, t2) => ({ type: `Float2Literal`, value: e4, loc: O(t2) }), float3Literal: (e4, t2) => ({ type: `Float3Literal`, value: e4, loc: O(t2) }), float4Literal: (e4, t2) => ({ type: `Float4Literal`, value: e4, loc: O(t2) }), numberLiteral: (e4, t2) => ({ type: `NumberLiteral`, value: e4, loc: O(t2) }), number2Literal: (e4, t2) => ({ type: `Number2Literal`, value: e4, loc: O(t2) }), number3Literal: (e4, t2) => ({ type: `Number3Literal`, value: e4, loc: O(t2) }), number4Literal: (e4, t2) => ({ type: `Number4Literal`, value: e4, loc: O(t2) }), placementLiteral: (e4, t2) => ({ type: `PlacementLiteral`, value: e4, loc: O(t2) }), ownerPointer: (e4, t2) => ({ type: `OwnerPointer`, value: e4, loc: O(t2) }), linkPointer: (e4, t2) => ({ type: `LinkPointer`, value: e4, loc: O(t2) }), tokenLiteral: (e4, t2) => ({ type: `TokenLiteral`, value: e4, loc: O(t2) }) }, ce = (e4) => e4?.type === `StringLiteral`, le = (e4) => e4?.type === `TokenLiteral`, ue = (e4) => ce(e4) || le(e4), de = (e4) => e4?.type === `OwnerPointer`, j = (e4) => e4?.type === `LinkPointer`, fe = (e4) => e4?.type === `FloatLiteral`, pe = (e4) => e4?.type === `Float2Literal`, me = (e4) => e4?.type === `Float3Literal`, he = (e4) => e4?.type === `Float4Literal`, ge = (e4) => e4?.type === `NumberLiteral`, _e = (e4) => e4?.type === `Number2Literal`, ve = (e4) => e4?.type === `Number3Literal`, ye = (e4) => e4?.type === `Number4Literal`, be = (e4) => e4?.type === `PlacementLiteral`, xe = (e4) => e4?.type === `BooleanLiteral`, Se = (e4) => e4?.type === `FixedArrayElement`, Ce = (e4) => e4?.type === `DynamicArrayElement`;
function we(e4, t2) {
  return e4?.type === `LiteralAttribute` && (t2 ? t2(e4.value) : true);
}
function Te(e4, t2) {
  return e4?.type === `FixedArrayAttribute` && (t2 ? e4.elements.every((e5) => t2(e5.value)) : true);
}
function Ee(e4, t2) {
  return e4?.type === `DynamicArrayAttribute` && (t2 ? e4.elements.every((e5) => t2(e5.value)) : true);
}
var M = { or: (...e4) => (t2) => e4.some((e5) => e5(t2)), isStringLiteral: ce, isTokenLiteral: le, isStringLikeLiteral: ue, isOwnerPointer: de, isLinkPointer: j, isFloatLiteral: fe, isFloat2Literal: pe, isFloat3Literal: me, isFloat4Literal: he, isNumberLiteral: ge, isNumber2Literal: _e, isNumber3Literal: ve, isNumber4Literal: ye, isPlacementLiteral: be, isBooleanLiteral: xe, isFixedArrayElement: Se, isDynamicArrayElement: Ce, isFixedArrayAttribute: Te, isDynamicArrayAttribute: Ee, isLiteralAttribute: we, isUnit: (e4) => e4?.type === `Unit`, isFile: (e4) => e4?.type === `File` };
function De(e4) {
  switch (e4.type) {
    case `StringLiteral`:
      return /^[a-zA-Z0-9_]+$/.test(e4.value) ? e4.value : `"${e4.value}"`;
    case `TokenLiteral`:
    case `OwnerPointer`:
    case `LinkPointer`:
    case `BooleanLiteral`:
    case `FloatLiteral`:
      return String(e4.value);
    case `Float2Literal`:
    case `Float3Literal`:
    case `Float4Literal`:
      return `(${e4.value.join(`, `)})`;
    case `NumberLiteral`:
      return e4.value.toFixed(0);
    case `Number2Literal`:
    case `Number3Literal`:
    case `Number4Literal`:
      return `(${e4.value.map((e5) => e5.toFixed(0)).join(`, `)})`;
    case `PlacementLiteral`: {
      let [t2, n2] = e4.value, [r2, i2, a2, o2] = n2;
      return `(${t2.join(`, `)}) (${r2}; ${i2}, ${a2}, ${o2})`;
    }
  }
}
function Oe(e4) {
  return ` ${e4.key.value}[${e4.index ?? ``}]: ${De(e4.value)}`;
}
function ke(e4) {
  return e4.elements.map((e5) => Oe(e5)).join(`
`);
}
function Ae(e4) {
  let t2 = [];
  return t2.push(` ${e4.declaration.key.value}: ${e4.declaration.value.value}`), e4.elements.forEach((e5) => {
    t2.push(Oe(e5));
  }), t2.join(`
`);
}
function je(e4) {
  return M.isFixedArrayAttribute(e4) ? Ae(e4) : M.isDynamicArrayAttribute(e4) ? ke(e4) : ` ${e4.key.value}: ${De(e4.value)}`;
}
function Me(e4) {
  return `${e4.className.value} : ${e4.name.value} {
${e4.attributes.map((e5) => je(e5)).join(`
`)}
}`;
}
function Ne(e4) {
  return `SiiNunit
{
${e4.units.map((e5) => Me(e5)).join(`
`)}

}
`.replace(/\r?\n/g, `\r
`);
}
function Pe(e4) {
  return new Worker(`/scs-modlists/assets/decode.worker-DUJDJuD1.js`, { type: `module`, name: e4?.name });
}
var Fe = /* @__PURE__ */ new Map(), Ie = { create() {
  let e4 = crypto.randomUUID(), t2, n2, r2 = new Promise((e5, r3) => {
    t2 = e5, n2 = r3;
  });
  return Fe.set(e4, { resolve: t2, reject: n2 }), { id: e4, promise: r2 };
}, resolve(e4, t2) {
  let n2 = Fe.get(e4);
  n2 ? (n2.resolve(t2), Fe.delete(e4)) : console.warn(`[SIIDecoder]: Attempted to resolve unknown request id: ${e4}`);
}, reject(e4, t2) {
  let n2 = Fe.get(e4);
  n2 ? (n2.reject(t2), Fe.delete(e4)) : console.warn(`[SIIDecoder]: Attempted to reject unknown request id: ${e4}`);
} }, Le = new Pe();
Le.addEventListener(`message`, (e4) => {
  if (e4.data.type === `decode-success`) {
    let { id: t2, buffer: n2 } = e4.data, r2 = new TextDecoder().decode(n2);
    Ie.resolve(t2, { result: r2 });
  } else Ie.reject(e4.data.id, Error(`message` in e4.data ? e4.data.message : `Unknown error`));
});
var Re = { decode(e4) {
  let { id: t2, promise: n2 } = Ie.create(), r2 = new FileReader();
  return r2.onload = (e5) => {
    let n3 = e5.target?.result;
    if (!(n3 instanceof ArrayBuffer)) {
      Ie.reject(t2, Error(`Failed to read file as ArrayBuffer`));
      return;
    }
    Le.postMessage({ id: t2, type: `decode`, buffer: n3 }, [n3]);
  }, r2.readAsArrayBuffer(e4), n2;
} }, ze = class e2 {
  constructor(e4) {
    __publicField(this, "attribute");
    this.attribute = E(e4);
  }
  get type() {
    return this.attribute.type;
  }
  get key() {
    return this.attribute.key.value;
  }
  get value() {
    let e4 = this.attribute;
    switch (e4.type) {
      case `LiteralAttribute`:
        return E(e4.value.value);
      case `DynamicArrayAttribute`:
      case `FixedArrayAttribute`:
        return e4.elements.map((e5) => E(e5.value.value));
    }
  }
  unwrap() {
    return E(this.attribute);
  }
  clone() {
    return e2.from(this.unwrap());
  }
  toJSON() {
    return this.unwrap();
  }
  isLiteralAttribute(e4) {
    return M.isLiteralAttribute(this.attribute, e4);
  }
  isFixedArrayAttribute(e4) {
    return M.isFixedArrayAttribute(this.attribute, e4);
  }
  isDynamicArrayAttribute(e4) {
    return M.isDynamicArrayAttribute(this.attribute, e4);
  }
  static from(t2) {
    return new e2(t2);
  }
}, Be = (_a = class {
  constructor(e4) {
    __privateAdd(this, _e_instances);
    __publicField(this, "unit");
    this.unit = E(e4);
  }
  get size() {
    return this.unit.attributes.length;
  }
  get isEmpty() {
    return this.size === 0;
  }
  get className() {
    return this.unit.className.value;
  }
  get name() {
    return this.unit.name.value;
  }
  hasAttribute(e4) {
    return this.unit.attributes.some((t2) => t2.key.value === e4);
  }
  getAttribute(e4) {
    let t2 = __privateMethod(this, _e_instances, e_fn).call(this, e4);
    return t2 ? ze.from(t2) : void 0;
  }
  getLiteralAttribute(e4, t2) {
    let n2 = __privateMethod(this, _e_instances, e_fn).call(this, e4);
    if (M.isLiteralAttribute(n2, t2)) return ze.from(n2);
  }
  getFixedArrayAttribute(e4, t2) {
    let n2 = __privateMethod(this, _e_instances, e_fn).call(this, e4);
    if (M.isFixedArrayAttribute(n2, t2)) return ze.from(n2);
  }
  getDynamicArrayAttribute(e4, t2) {
    let n2 = this.getAttribute(e4);
    if (M.isDynamicArrayAttribute(n2, t2)) return ze.from(n2);
  }
  deleteAttribute(e4) {
    let t2 = this.unit.attributes.filter((t3) => t3.key.value !== e4);
    return t2.length === this.unit.attributes.length ? false : (this.unit = { ...this.unit, attributes: t2 }, true);
  }
  setAttribute(e4) {
    let t2 = e4 instanceof ze ? e4.unwrap() : e4, n2 = this.unit.attributes.findIndex((e5) => e5.key.value === t2.key.value), r2;
    n2 === -1 ? r2 = [...this.unit.attributes, t2] : (r2 = [...this.unit.attributes], r2[n2] = t2), this.unit = { ...this.unit, attributes: r2 };
  }
  unwrap() {
    return E(this.unit);
  }
  clone() {
    return _a.from(this.unwrap());
  }
  toJSON() {
    return this.unwrap();
  }
  static from(t2) {
    return new _a(t2);
  }
}, _e_instances = new WeakSet(), e_fn = function(e4) {
  return this.unit.attributes.find((t2) => t2.key.value === e4);
}, _a), N = { Lexical: { InvalidNumberLiteral: ({ value: e4 }) => `Invalid number literal '${e4}'`, UnexpectedCharacter: ({ char: e4 }) => `Unexpected character '${e4}'`, UnexpectedMinus: `Unexpected '-'`, UnterminatedBlockComment: `Unterminated block comment`, UnterminatedStringLiteral: `Unterminated string literal`, UnsupportedPreprocessorDirectiveAt: `Unsupported preprocessor directive '@'` }, Syntax: { ArrayAlreadyDeclared: ({ key: e4 }) => `Array "${e4}" is already declared.`, ArrayIndexAlreadySet: ({ index: e4, key: t2 }) => `Array index ${e4} for array "${t2}" is already set.`, CannotBuildDynamicArrayWithoutItems: `Cannot build dynamic array without items.`, CannotMixFixedAndDynamicArrays: ({ key: e4 }) => `Cannot mix fixed and dynamic array entries for array "${e4}".`, DuplicateAttributeKey: ({ key: e4 }) => `Duplicate attribute key "${e4}".`, ExpectedArrayIndexNumberOrDynamicClose: `Expected array index number or closing ']' for dynamic array`, ExpectedAttributeKeyIdentifier: `Expected attribute key identifier`, ExpectedAttributeValue: `Expected attribute value`, ExpectedCloseBracketAfterArrayIndex: `Expected closing ']' after array index`, ExpectedColonAfterAttributeKey: `Expected ':' after attribute key`, ExpectedColonBetweenUnitClassAndName: `Expected ':' between unit class and unit name`, ExpectedCommaAfterOrientationX: `Expected ',' after placement orientation x component`, ExpectedCommaAfterOrientationY: `Expected ',' after placement orientation y component`, ExpectedEof: `Unexpected trailing tokens after file end`, ExpectedFileOpenBraceAfterSiiNunit: `Expected "{" after "SiiNunit" declaration`, ExpectedFileStartMarker: `Expected "SiiNunit" marker at file start`, ExpectedFileTerminatingBrace: `Expected "}" to close SiiNunit block`, ExpectedNumericTupleElement: `Expected numeric tuple element`, ExpectedNumericTupleElementAfterComma: `Expected numeric tuple element after ','`, ExpectedPlacementLiteralCloseParen: `Expected ')' to close placement literal`, ExpectedPlacementOrientationStartParen: `Expected '(' to start placement orientation tuple`, ExpectedPlacementOrientation: ({ orientation: e4 }) => `Expected placement orientation ${e4} component`, ExpectedSemicolonAfterOrientationW: `Expected ';' after placement orientation w component`, ExpectedTupleCloseParen: `Expected ')' to close tuple literal`, ExpectedTupleLength: ({ length: e4 }) => `Expected tuple with 2, 3 or 4 elements, but got ${e4}`, ExpectedTupleStartParen: `Expected '(' to start a tuple literal`, ExpectedUnitBodyCloseBrace: `Expected '}' to close unit body`, ExpectedUnitBodyOpenBrace: `Expected '{' to open unit body`, ExpectedUnitClassNameIdentifier: `Expected unit class name identifier`, ExpectedUnitNameIdentifier: `Expected unit name identifier`, InvalidArrayIndex: ({ value: e4 }) => `Invalid array index '${e4}'`, MismatchedArrayKey: ({ expected: e4, actual: t2 }) => `Mismatched array key. Expected "${e4}", but got "${t2}".`, MissingFixedArrayDeclaration: ({ key: e4 }) => `Missing declaration for array "${e4}".`, MissingFixedArrayIndexValue: ({ index: e4 }) => `Missing value for array index ${e4}.`, PlacementLiteralPositionMustHave3: `Placement literal position must have exactly 3 elements`, TupleLiteralMustBeUniformNumeric: `Tuple literal must contain either all integers or all floats`, UnexpectedAttributeOutOfUnit: `Unexpected attribute out of unit.`, UnexpectedEndOfFile: ({ context: e4 }) => `Unexpected end of file while ${e4}.`, UnexpectedExcessiveClosingBrace: `Unexpected excessive closing brace`, UnexpectedTokenInAttributeLiteral: ({ token: e4 }) => `Unexpected token '${e4}' in attribute literal`, UnexpectedTrailingTokensInAttributeValue: `Unexpected trailing tokens in attribute value`, UnexpectedUnitAfterFileClosingBrace: `Unexpected unit after file closing brace.`, UnitAlreadyClosedCannotModify: `Unit is already closed. Cannot modify a closed unit.` } }, P = class extends Error {
  constructor(e4, t2) {
    let n2 = A.location(t2);
    super(`Syntax Error [ln ${n2.start.line}, col ${n2.start.column}]: ${e4}`);
    __publicField(this, "location");
    this.location = n2, this.name = `SyntaxError`;
  }
}, Ve = class {
  constructor(e4) {
    __publicField(this, "key");
    __publicField(this, "items", {});
    __publicField(this, "declaration");
    __publicField(this, "declare", (e4) => {
      if (this.declaration) throw new P(N.Syntax.ArrayAlreadyDeclared({ key: this.key.value }), e4.key.loc);
      if (e4.key.value !== this.key.value) throw new P(N.Syntax.MismatchedArrayKey({ expected: this.key.value, actual: e4.key.value }), e4.key.loc);
      return this.declaration = e4, this;
    });
    __publicField(this, "append", (e4, t2, n2) => {
      if (this.items[t2]) throw new P(N.Syntax.ArrayIndexAlreadySet({ index: t2, key: this.key.value }), e4.loc);
      if (e4.value !== this.key.value) throw new P(N.Syntax.MismatchedArrayKey({ expected: this.key.value, actual: e4.value }), e4.loc);
      return this.items[t2] = A.fixedArrayElement(e4, t2, n2, { start: e4.loc.start, end: n2.loc.end }), this;
    });
    __publicField(this, "build", () => {
      if (this.declaration === void 0) throw new P(N.Syntax.MissingFixedArrayDeclaration({ key: this.key.value }), this.key.loc);
      let e4 = Array(this.declaration.value.value), t2 = this.declaration.loc.start, n2 = this.declaration.loc.end;
      for (let r2 = 0; r2 < this.declaration.value.value; r2++) {
        let i2 = this.items[r2];
        if (!i2) throw new P(N.Syntax.MissingFixedArrayIndexValue({ index: r2 }), this.declaration.key.loc);
        t2 = Ue(t2, i2.loc.start ?? 1 / 0), n2 = We(n2, i2.loc.end ?? -1 / 0), e4[r2] = i2;
      }
      return A.fixedArrayAttribute(this.declaration.key, this.declaration, e4, { start: t2, end: n2 });
    });
    this.key = e4;
  }
}, He = class {
  constructor(e4) {
    __publicField(this, "key");
    __publicField(this, "items", []);
    __publicField(this, "push", (e4, t2) => (this.items.push(A.dynamicArrayElement(e4, t2, { start: e4.loc.start, end: t2.loc.end })), this));
    this.key = e4;
  }
  build() {
    let e4 = this.items.length;
    if (!e4) throw new P(N.Syntax.CannotBuildDynamicArrayWithoutItems, this.key.loc);
    let t2 = Array(e4), n2 = this.key.loc.start, r2 = this.key.loc.end;
    for (let i2 = 0; i2 < e4; i2++) {
      let e5 = this.items[i2];
      e5 && (n2 = Ue(n2, e5.loc.start), r2 = We(r2, e5.loc.end), t2[i2] = e5);
    }
    return A.dynamicArrayAttribute(this.key, t2, { start: n2, end: r2 });
  }
};
function Ue(e4, t2) {
  return e4 ? !t2 || e4.line < t2.line ? e4 : t2.line < e4.line ? t2 : e4.column <= t2.column ? e4 : t2 : t2;
}
function We(e4, t2) {
  return e4 ? !t2 || e4.line > t2.line ? e4 : t2.line > e4.line ? t2 : e4.column >= t2.column ? e4 : t2 : t2;
}
var Ge = (_b = class {
  constructor(e4) {
    __privateAdd(this, _e2, []);
    __privateAdd(this, _t2);
    __privateAdd(this, _n2);
    __publicField(this, "isOpen", () => __privateGet(this, _n2) === void 0);
    __publicField(this, "close", (e4) => {
      if (__privateGet(this, _n2) !== void 0) throw new P(N.Syntax.UnexpectedExcessiveClosingBrace, e4);
      return __privateSet(this, _n2, e4), this;
    });
    __publicField(this, "append", (e4) => {
      if (__privateGet(this, _n2) !== void 0) throw new P(N.Syntax.UnexpectedUnitAfterFileClosingBrace, e4.loc);
      return __privateGet(this, _e2).push(e4), this;
    });
    __publicField(this, "build", () => {
      if (__privateGet(this, _n2) === void 0) throw new P(N.Syntax.UnexpectedEndOfFile({ context: `building file output (missing closing '}')` }), __privateGet(this, _t2));
      return A.file(__privateGet(this, _e2), { start: __privateGet(this, _t2), end: __privateGet(this, _n2) });
    });
    __privateSet(this, _t2, e4);
  }
  get units() {
    return __privateGet(this, _e2);
  }
  get openLine() {
    return __privateGet(this, _t2);
  }
  get closeLine() {
    return __privateGet(this, _n2);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _n2 = new WeakMap(), _b), Ke = (_c = class {
  constructor(e4, t2, n2) {
    __privateAdd(this, _e3);
    __privateAdd(this, _t3);
    __privateAdd(this, _n3, {});
    __privateAdd(this, _r2, []);
    __privateAdd(this, _i);
    __privateAdd(this, _a2);
    __publicField(this, "isOpen", () => __privateGet(this, _a2) === void 0);
    __publicField(this, "close", (e4) => {
      if (__privateGet(this, _a2) !== void 0) throw new P(N.Syntax.UnexpectedExcessiveClosingBrace, __privateGet(this, _a2));
      return __privateSet(this, _a2, e4), this;
    });
    __publicField(this, "appendFixedArrayElement", (e4, t2, n2) => {
      if (__privateGet(this, _a2) !== void 0) throw new P(N.Syntax.UnexpectedAttributeOutOfUnit, e4.loc);
      let r2 = __privateGet(this, _s).call(this, e4.value);
      if (!r2) r2 = __privateGet(this, _o).call(this, { type: `FixedArrayPlaceholder`, key: e4, builder: new Ve(e4) });
      else if (M.isLiteralAttribute(r2, M.isNumberLiteral)) {
        let t3 = new Ve(e4).declare(r2);
        r2 = __privateGet(this, _o).call(this, { type: `FixedArrayPlaceholder`, key: e4, builder: t3 });
      } else if (r2.type === `DynamicArrayPlaceholder`) throw new P(N.Syntax.CannotMixFixedAndDynamicArrays({ key: e4.value }), e4.loc);
      else if (r2.type === `LiteralAttribute`) throw new P(N.Syntax.DuplicateAttributeKey({ key: e4.value }), e4.loc);
      return r2.builder.append(e4, t2, n2), this;
    });
    __publicField(this, "appendDynamicArrayAttribute", (e4, t2) => {
      if (__privateGet(this, _a2) !== void 0) throw new P(N.Syntax.UnitAlreadyClosedCannotModify, e4.loc);
      let n2 = __privateGet(this, _s).call(this, e4.value);
      if (!n2) n2 = __privateGet(this, _o).call(this, { type: `DynamicArrayPlaceholder`, key: e4, builder: new He(e4) });
      else if (n2.type !== `DynamicArrayPlaceholder`) throw new P(N.Syntax.CannotMixFixedAndDynamicArrays({ key: e4.value }), e4.loc);
      return n2.builder.push(e4, t2), this;
    });
    __publicField(this, "appendLiteralAttribute", (e4, t2) => {
      if (__privateGet(this, _a2) !== void 0) throw new P(N.Syntax.UnexpectedAttributeOutOfUnit, e4.loc);
      let n2 = __privateGet(this, _s).call(this, e4.value);
      if (n2 !== void 0) {
        if (n2.type === `FixedArrayPlaceholder` && M.isNumberLiteral(t2)) {
          n2.builder.declare(A.literalAttribute(e4, t2, { start: e4.loc.start, end: t2.loc.end }));
          return;
        }
        throw new P(N.Syntax.DuplicateAttributeKey({ key: e4.value }), e4.loc);
      }
      return __privateGet(this, _o).call(this, A.literalAttribute(e4, t2, { start: e4.loc.start, end: t2.loc.end })), this;
    });
    __publicField(this, "build", () => {
      if (__privateGet(this, _a2) === void 0) throw new P(N.Syntax.UnexpectedEndOfFile({ context: `building unit output (missing closing '}')` }), __privateGet(this, _i));
      let e4 = __privateGet(this, _r2).map((e5) => e5.type === `FixedArrayPlaceholder` || e5.type === `DynamicArrayPlaceholder` ? e5.builder.build() : e5);
      return A.unit(__privateGet(this, _t3), __privateGet(this, _e3), e4, { start: __privateGet(this, _i), end: __privateGet(this, _a2) });
    });
    __privateAdd(this, _o, (e4) => {
      let t2 = __privateGet(this, _n3)[e4.key.value];
      return t2 === void 0 ? (__privateGet(this, _r2).push(e4), __privateGet(this, _n3)[e4.key.value] = __privateGet(this, _r2).length - 1) : __privateGet(this, _r2)[t2] = e4, e4;
    });
    __privateAdd(this, _s, (e4) => {
      let t2 = __privateGet(this, _n3)[e4];
      if (t2 !== void 0) return __privateGet(this, _r2)[t2];
    });
    __privateSet(this, _e3, e4), __privateSet(this, _t3, t2), __privateSet(this, _i, n2);
  }
  get className() {
    return __privateGet(this, _e3);
  }
  get name() {
    return __privateGet(this, _t3);
  }
  get openLine() {
    return __privateGet(this, _i);
  }
  get closeLine() {
    return __privateGet(this, _a2);
  }
}, _e3 = new WeakMap(), _t3 = new WeakMap(), _n3 = new WeakMap(), _r2 = new WeakMap(), _i = new WeakMap(), _a2 = new WeakMap(), _o = new WeakMap(), _s = new WeakMap(), _c), F = { LBrace: `LBrace`, RBrace: `RBrace`, Colon: `Colon`, LBracket: `LBracket`, RBracket: `RBracket`, LParen: `LParen`, RParen: `RParen`, Comma: `Comma`, Semicolon: `Semicolon`, String: `String`, Number: `Number`, Identifier: `Identifier`, True: `True`, False: `False`, Newline: `Newline`, EOF: `EOF`, SiiNunit: `SiiNunit` }, qe = /[a-zA-Z_.]/, Je = /[a-zA-Z0-9_.]/, Ye = /[a-zA-Z0-9_]/, Xe = /[0-9]/, Ze = /\s/, Qe = { ",": `Comma`, ";": `Semicolon`, ":": `Colon`, "(": `LParen`, ")": `RParen`, "[": `LBracket`, "]": `RBracket`, "{": `LBrace`, "}": `RBrace`, "\n": `Newline` }, $e = (e4) => qe.test(e4), et = (e4) => Je.test(e4), tt = (e4) => Ye.test(e4), nt = (e4) => Xe.test(e4), rt = (e4) => Ze.test(e4);
function* it(e4) {
  let t2 = 1, n2 = 0, r2 = 1, i2 = (t3 = 0) => e4[n2 + t3];
  i2.consume = () => {
    let i3 = e4[n2];
    if (i3 !== void 0) return n2 += 1, i3 === `
` ? (t2 += 1, r2 = 1) : r2 += 1, i3;
  }, i2.consumeWhile = (e5) => {
    let t3 = ``;
    for (; ; ) {
      let n3 = i2();
      if (n3 === void 0 || !e5(n3)) break;
      t3 += n3, i2.consume();
    }
    return t3;
  }, i2.peekWhile = (e5, t3) => {
    let n3 = 0;
    for (; ; ) {
      let r3 = i2(n3);
      if (r3 === void 0 || !e5(r3)) return false;
      if (!t3(r3)) return true;
      n3 += 1;
    }
  }, i2.pos = () => ({ line: t2, column: r2, offset: n2 });
  let a2 = (e5, t3, n3, r3) => ({ type: e5, value: t3, loc: { start: n3, end: r3 } }), o2 = (t3) => {
    let r3 = ``, a3 = false, o3 = false;
    for (i2.consume(); n2 < e4.length; ) {
      let e5 = i2.consume();
      if (e5 === void 0) break;
      if (a3) {
        r3 += e5, a3 = false;
        continue;
      }
      if (e5 === `\\`) {
        a3 = true;
        continue;
      }
      if (e5 === `"`) {
        o3 = true;
        break;
      }
      r3 += e5;
    }
    if (!o3) throw new P(N.Lexical.UnterminatedStringLiteral, { start: t3, end: i2.pos() });
    return r3;
  }, s2 = (t3) => {
    i2.consume(), i2.consume();
    let r3 = false;
    for (; n2 < e4.length; ) {
      if (i2() === `*` && i2(1) === `/`) {
        i2.consume(), i2.consume(), r3 = true;
        break;
      }
      i2.consume();
    }
    if (!r3) throw new P(N.Lexical.UnterminatedBlockComment, { start: t3, end: i2.pos() });
  }, c2 = (e5, t3) => {
    let n3 = ``;
    if (t3 === `-`) {
      if (!nt(i2(1) ?? ``)) throw new P(N.Lexical.UnexpectedMinus, e5);
      n3 += i2.consume();
    }
    if (n3 += i2.consumeWhile(nt), i2() === `.`) {
      if (n3 += i2.consume(), !nt(i2() ?? ``)) throw new P(N.Lexical.InvalidNumberLiteral({ value: n3 }), e5);
      n3 += i2.consumeWhile(nt);
    }
    if (i2() === `.`) throw new P(N.Lexical.InvalidNumberLiteral({ value: `${n3}.` }), e5);
    if (n3 === `-` || n3 === ``) throw new P(N.Lexical.UnexpectedCharacter({ char: t3 }), i2.pos());
    return n3;
  };
  for (; n2 < e4.length; ) {
    let e5 = i2();
    if (e5 === void 0) break;
    let t3 = i2.pos();
    if (e5 === `/` && i2(1) === `*`) {
      s2(t3);
      continue;
    }
    let n3 = Qe[e5];
    if (n3) {
      i2.consume(), yield a2(n3, e5, t3, i2.pos());
      continue;
    }
    if (rt(e5)) {
      i2.consume();
      continue;
    }
    if (e5 === `"`) {
      yield a2(F.String, o2(t3), t3, i2.pos());
      continue;
    }
    if (nt(e5) && i2.peekWhile(tt, nt)) {
      let e6 = i2.consumeWhile(tt);
      yield a2(F.String, e6, t3, i2.pos());
      continue;
    }
    if ($e(e5)) {
      let e6 = i2.consumeWhile(et);
      yield a2(e6 === F.SiiNunit ? F.SiiNunit : e6 === `true` ? F.True : e6 === `false` ? F.False : e6.includes(`.`) ? F.Identifier : F.String, e6, t3, i2.pos());
      continue;
    }
    if (e5 === `-` || nt(e5)) {
      let n4 = c2(t3, e5);
      yield a2(F.Number, n4, t3, i2.pos());
      continue;
    }
    throw e5 === `@` ? new P(N.Lexical.UnsupportedPreprocessorDirectiveAt, t3) : new P(N.Lexical.UnexpectedCharacter({ char: e5 }), t3);
  }
  let l2 = i2.pos();
  return a2(F.EOF, ``, l2, l2);
}
var at = /^\.([a-zA-Z0-9_]+\.)+[a-zA-Z0-9_]+$/, ot = /^([a-zA-Z0-9_]+\.)+[a-zA-Z0-9_]+$/, st = /^-?\d+\.\d+$/, ct = /^-?\d+$/, lt = /^\d+$/;
function ut(e4) {
  let t2 = it(e4), n2 = [], r2 = null, i2 = () => {
    let e5 = t2.next();
    return e5.done && (r2 = e5.value), e5.value;
  }, a2 = (e5 = 0) => {
    for (; n2.length <= e5; ) {
      if (r2) {
        n2.push(r2);
        continue;
      }
      n2.push(i2());
    }
  }, o2 = (e5 = 0) => (a2(e5), n2[e5]);
  o2.is = (...e5) => {
    let t3 = o2();
    return e5.includes(t3.type);
  }, o2.consume = () => {
    let e5 = o2();
    return n2.shift(), e5;
  }, o2.consumeIf = (...e5) => {
    let t3 = o2();
    return e5.includes(t3.type) ? o2.consume() : null;
  }, o2.expect = (e5, t3) => {
    let n3 = o2();
    if (n3.type !== e5) throw new P(t3, n3.loc);
    return o2.consume();
  }, o2.expectOneOf = (e5, t3) => {
    let n3 = o2();
    if (!e5.includes(n3.type)) throw new P(t3, n3.loc);
    return o2.consume();
  }, o2.while = (e5, t3) => {
    let n3 = Array.isArray(e5) ? e5 : [e5];
    for (; o2.is(...n3); ) t3(o2.consume());
  }, o2.skip = (...e5) => o2.while(e5, () => null);
  let s2 = (e5) => at.test(e5.value) ? A.ownerPointer(e5.value, e5.loc) : ot.test(e5.value) ? A.linkPointer(e5.value, e5.loc) : A.tokenLiteral(e5.value, e5.loc), c2 = () => {
    let e5 = o2.expect(F.LParen, N.Syntax.ExpectedTupleStartParen), t3 = [], n3 = o2.expect(F.Number, N.Syntax.ExpectedNumericTupleElement);
    t3.push(n3.value);
    let r3 = n3.loc.end;
    for (; o2.consumeIf(F.Comma); ) {
      let e6 = o2.expect(F.Number, N.Syntax.ExpectedNumericTupleElementAfterComma);
      t3.push(e6.value), r3 = e6.loc.end;
    }
    return r3 = o2.expect(F.RParen, N.Syntax.ExpectedTupleCloseParen).loc.end, { values: t3, start: e5.loc.start, end: r3 };
  }, l2 = () => {
    let e5 = c2();
    if (o2.is(F.LParen)) {
      if (e5.values.length !== 3) throw new P(N.Syntax.PlacementLiteralPositionMustHave3, { start: e5.start, end: e5.end });
      o2.expect(F.LParen, N.Syntax.ExpectedPlacementOrientationStartParen);
      let t4 = o2.expect(F.Number, N.Syntax.ExpectedPlacementOrientation({ orientation: `w` }));
      o2.expect(F.Semicolon, N.Syntax.ExpectedSemicolonAfterOrientationW);
      let n4 = o2.expect(F.Number, N.Syntax.ExpectedPlacementOrientation({ orientation: `x` }));
      o2.expect(F.Comma, N.Syntax.ExpectedCommaAfterOrientationX);
      let r3 = o2.expect(F.Number, N.Syntax.ExpectedPlacementOrientation({ orientation: `y` }));
      o2.expect(F.Comma, N.Syntax.ExpectedCommaAfterOrientationY);
      let i3 = o2.expect(F.Number, N.Syntax.ExpectedPlacementOrientation({ orientation: `z` })), a3 = o2.expect(F.RParen, N.Syntax.ExpectedPlacementLiteralCloseParen);
      return A.placementLiteral([[Number(e5.values[0]), Number(e5.values[1]), Number(e5.values[2])], [Number(t4.value), Number(n4.value), Number(r3.value), Number(i3.value)]], { start: e5.start, end: a3.loc.end });
    }
    let t3 = e5.values.every((e6) => st.test(e6)), n3 = e5.values.every((e6) => ct.test(e6));
    if (!t3 && !n3) throw new P(N.Syntax.TupleLiteralMustBeUniformNumeric, { start: e5.start, end: e5.end });
    switch (e5.values.length) {
      case 2:
        return t3 ? A.float2Literal([e5.values[0], e5.values[1]], { start: e5.start, end: e5.end }) : A.number2Literal([Number(e5.values[0]), Number(e5.values[1])], { start: e5.start, end: e5.end });
      case 3:
        return t3 ? A.float3Literal([e5.values[0], e5.values[1], e5.values[2]], { start: e5.start, end: e5.end }) : A.number3Literal([Number(e5.values[0]), Number(e5.values[1]), Number(e5.values[2])], { start: e5.start, end: e5.end });
      case 4:
        return t3 ? A.float4Literal([e5.values[0], e5.values[1], e5.values[2], e5.values[3]], { start: e5.start, end: e5.end }) : A.number4Literal([Number(e5.values[0]), Number(e5.values[1]), Number(e5.values[2]), Number(e5.values[3])], { start: e5.start, end: e5.end });
      default:
        throw new P(N.Syntax.ExpectedTupleLength({ length: e5.values.length }), { start: e5.start, end: e5.end });
    }
  }, u2 = () => {
    let e5 = o2();
    switch (e5.type) {
      case F.String: {
        let e6 = o2.consume();
        return A.stringLiteral(e6.value, e6.loc);
      }
      case F.Number: {
        let e6 = o2.consume();
        return ct.test(e6.value) ? A.numberLiteral(Number(e6.value), e6.loc) : A.floatLiteral(e6.value, e6.loc);
      }
      case F.True: {
        let e6 = o2.consume();
        return A.booleanLiteral(true, e6.loc);
      }
      case F.False: {
        let e6 = o2.consume();
        return A.booleanLiteral(false, e6.loc);
      }
      case F.Identifier:
        return s2(o2.consume());
      case F.LParen:
        return l2();
      default:
        throw new P(N.Syntax.UnexpectedTokenInAttributeLiteral({ token: e5.value }), e5.loc);
    }
  }, d2 = (e5) => {
    let t3 = o2.expectOneOf([F.Identifier, F.String], N.Syntax.ExpectedAttributeKeyIdentifier), n3 = A.identifier(t3.value, t3.loc), r3 = false, i3 = null;
    if (o2.consumeIf(F.LBracket) && (r3 = true, !o2.consumeIf(F.RBracket))) {
      let e6 = o2.expect(F.Number, N.Syntax.ExpectedArrayIndexNumberOrDynamicClose);
      if (!lt.test(e6.value)) throw new P(N.Syntax.InvalidArrayIndex({ value: e6.value }), e6.loc);
      i3 = Number(e6.value), o2.expect(F.RBracket, N.Syntax.ExpectedCloseBracketAfterArrayIndex);
    }
    if (o2.expect(F.Colon, N.Syntax.ExpectedColonAfterAttributeKey), o2.is(F.Newline, F.RBrace, F.EOF)) throw new P(N.Syntax.ExpectedAttributeValue, t3.loc);
    let a3 = u2();
    if (!o2.is(F.Newline, F.RBrace, F.EOF)) {
      let e6 = o2();
      throw new P(N.Syntax.UnexpectedTrailingTokensInAttributeValue, e6.loc);
    }
    r3 ? i3 === null ? e5.appendDynamicArrayAttribute(n3, a3) : e5.appendFixedArrayElement(n3, i3, a3) : e5.appendLiteralAttribute(n3, a3), o2.skip(F.Newline);
  }, f2 = () => {
    let e5 = o2.expectOneOf([F.Identifier, F.String], N.Syntax.ExpectedUnitClassNameIdentifier);
    o2.expect(F.Colon, N.Syntax.ExpectedColonBetweenUnitClassAndName);
    let t3 = o2.expectOneOf([F.Identifier, F.String], N.Syntax.ExpectedUnitNameIdentifier);
    o2.expect(F.LBrace, N.Syntax.ExpectedUnitBodyOpenBrace);
    let n3 = new Ke(A.identifier(e5.value, e5.loc), A.identifier(t3.value, t3.loc), e5.loc.start);
    for (o2.skip(F.Newline); !o2.is(F.RBrace); ) {
      if (o2.is(F.EOF)) throw new P(N.Syntax.UnexpectedEndOfFile({ context: `parsing a unit body (expected '}')` }), o2().loc);
      d2(n3);
    }
    let r3 = o2.expect(F.RBrace, N.Syntax.ExpectedUnitBodyCloseBrace);
    return n3.close(r3.loc.end), n3.build();
  }, p2 = new Ge(o2.expect(F.SiiNunit, N.Syntax.ExpectedFileStartMarker).loc.start);
  for (o2.skip(F.Newline), o2.expect(F.LBrace, N.Syntax.ExpectedFileOpenBraceAfterSiiNunit), o2.skip(F.Newline); !o2.is(F.RBrace); ) {
    if (o2.is(F.EOF)) throw new P(N.Syntax.UnexpectedEndOfFile({ context: `parsing the SiiNunit file block (expected final '}')` }), o2().loc);
    p2.append(f2()), o2.skip(F.Newline);
  }
  let m2 = o2.expect(F.RBrace, N.Syntax.ExpectedFileTerminatingBrace);
  return p2.close(m2.loc.end), o2.skip(F.Newline), o2.expect(F.EOF, N.Syntax.ExpectedEof), p2.build();
}
var dt = class e3 {
  constructor(e4) {
    __publicField(this, "file");
    this.file = E(e4);
  }
  get size() {
    return this.file.units.length;
  }
  get isEmpty() {
    return this.size === 0;
  }
  getClassNames() {
    let e4 = /* @__PURE__ */ new Set();
    return this.file.units.forEach((t2) => e4.add(t2.className.value)), Array.from(e4);
  }
  findUnitNamesByClass(e4) {
    return this.file.units.filter((t2) => t2.className.value === e4).map((e5) => e5.name.value);
  }
  hasUnit(e4) {
    return this.file.units.some((t2) => t2.name.value === e4);
  }
  getUnit(e4) {
    let t2 = this.file.units.find((t3) => t3.name.value === e4);
    return t2 ? Be.from(t2) : void 0;
  }
  deleteUnit(e4) {
    let t2 = this.file.units.filter((t3) => t3.name.value !== e4);
    return t2.length === this.file.units.length ? false : (this.file = { ...this.file, units: t2 }, true);
  }
  setUnit(e4) {
    let t2 = e4 instanceof Be ? e4.unwrap() : e4, n2 = this.file.units.findIndex((e5) => e5.name.value === t2.name.value), r2;
    n2 === -1 ? r2 = [...this.file.units, t2] : (r2 = [...this.file.units], r2[n2] = t2), this.file = { ...this.file, units: r2 };
  }
  unwrap() {
    return E(this.file);
  }
  clone() {
    return e3.from(this.unwrap());
  }
  toString() {
    return Ne(this.file);
  }
  toJSON() {
    return this.unwrap();
  }
  static from(t2) {
    return new e3(t2);
  }
  static fromString(t2) {
    return e3.from(ut(t2));
  }
};
window.SiinDocument = dt;
function ft(e4) {
  let { onBeforeRead: t2, onError: n2 } = e4, [r2, i2] = (0, _.useState)(null);
  return [r2, (0, _.useCallback)(async (e5) => {
    if (!e5) {
      i2(null);
      return;
    }
    try {
      t2?.();
      let { result: n3 } = await Re.decode(e5);
      i2(dt.fromString(n3));
    } catch (e6) {
      if (console.error(`[useSIIReader] Error decoding:`, e6), n2) n2(`Failed to read File: ${e6 instanceof Error ? e6.message : String(e6)}`);
      else throw e6;
    }
  }, [t2, n2])];
}
var pt = class {
  constructor(e4) {
    __publicField(this, "locked", false);
    __publicField(this, "state");
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __publicField(this, "getState", () => this.state);
    __publicField(this, "setState", (e4) => {
      if (this.locked) throw Error(`Cannot update state while another update is in progress.`);
      this.locked = true;
      let t2 = this.state;
      try {
        t2 = typeof e4 == `function` ? e4(this.state) : e4;
      } catch (e5) {
        throw this.locked = false, e5;
      }
      Object.is(this.state, t2) ? this.locked = false : (this.state = t2, this.dispatch());
    });
    __publicField(this, "subscribe", (e4) => (this.listeners.add(e4), () => {
      this.listeners.delete(e4);
    }));
    __publicField(this, "dispatch", () => (this.locked = true, Promise.all(Array.from(this.listeners).map(async (e4) => {
      try {
        await e4();
      } catch (e5) {
        console.error(`Unhandled exception during state update:`, e5);
      }
    })).finally(() => {
      this.locked = false;
    })));
    this.state = e4;
  }
};
function mt(e4) {
  return [(0, _.useSyncExternalStore)(e4.subscribe, e4.getState), e4.setState];
}
function ht(e4) {
  let t2 = new pt(e4);
  return [() => mt(t2), t2];
}
var gt = (e4, t2) => {
  if (window.TabController) return console.warn(`Attempted to create a TabController when one already exists. Returning existing controller, but this may lead to unexpected behavior!`), window.TabController;
  let n2 = (t3) => e4.includes(t3), r2 = () => {
    let e5 = window.location.hash.slice(1);
    return n2(e5) ? e5 : t2;
  }, [i2, a2] = ht(r2());
  return a2.subscribe(() => {
    window.location.hash = a2.getState();
  }), window.addEventListener(`hashchange`, () => {
    a2.setState(r2());
  }), window.TabController = { tabs: e4, getTab: r2, setTab: (e5) => {
    n2(e5) ? a2.setState(e5) : console.warn(`Attempted to set invalid tab: ${e5}`);
  }, useActiveTab: i2 }, window.TabController;
};
function _t(e4, t2) {
  if (!(oe(e4.props) && typeof e4.props.tab == `string` && t2.includes(e4.props.tab))) throw Error(`Invalid 'Tab.View' element. Each child of 'Tab.Router' must be a valid 'Tab.View' element with a 'tab' prop the matches one of the defined tabs.`);
}
var vt = { container: `_container_1rpca_1`, title: `_title_1rpca_6` };
function yt({ Component: e4, tab: t2, title: n2 }) {
  let r2 = `${t2}-title`;
  return (0, w.jsxs)(`section`, { className: vt.container, id: t2, "aria-labelledby": r2, children: [(0, w.jsx)(`h2`, { id: r2, className: vt.title, children: n2 }), (0, w.jsx)(e4, {})] });
}
function bt({ children: e4 }) {
  let t2 = window.TabController;
  if (!t2) throw Error(`TabController not found. Ensure that 'createTabRouter' is called before using 'Tab.Router'.`);
  let [n2] = t2.useActiveTab();
  return ie(e4, (e5) => e5.props.tab === n2, (e5) => _t(e5, t2.tabs));
}
var xt = (e4, t2) => {
  let n2 = gt(Array.isArray(e4) ? e4 : Object.values(e4), t2);
  return [Object.freeze({ Router: bt, View: yt }), n2.useActiveTab, n2];
}, St = o(((e4, t2) => {
  t2.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
})), Ct = o(((e4, t2) => {
  var n2 = St();
  function r2() {
  }
  function i2() {
  }
  i2.resetWarningCache = r2, t2.exports = function() {
    function e5(e6, t4, r3, i3, a3, o2) {
      if (o2 !== n2) {
        var s2 = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw s2.name = `Invariant Violation`, s2;
      }
    }
    e5.isRequired = e5;
    function t3() {
      return e5;
    }
    var a2 = { array: e5, bigint: e5, bool: e5, func: e5, number: e5, object: e5, string: e5, symbol: e5, any: e5, arrayOf: t3, element: e5, elementType: e5, instanceOf: t3, node: e5, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: i2, resetWarningCache: r2 };
    return a2.PropTypes = a2, a2;
  };
})), wt = o(((e4, t2) => {
  t2.exports = Ct()();
}));
function Tt(e4, t2, n2, r2) {
  function i2(e5) {
    return e5 instanceof n2 ? e5 : new n2(function(t3) {
      t3(e5);
    });
  }
  return new (n2 || (n2 = Promise))(function(n3, a2) {
    function o2(e5) {
      try {
        c2(r2.next(e5));
      } catch (e6) {
        a2(e6);
      }
    }
    function s2(e5) {
      try {
        c2(r2.throw(e5));
      } catch (e6) {
        a2(e6);
      }
    }
    function c2(e5) {
      e5.done ? n3(e5.value) : i2(e5.value).then(o2, s2);
    }
    c2((r2 = r2.apply(e4, t2 || [])).next());
  });
}
var Et = /* @__PURE__ */ new Map([[`1km`, `application/vnd.1000minds.decision-model+xml`], [`3dml`, `text/vnd.in3d.3dml`], [`3ds`, `image/x-3ds`], [`3g2`, `video/3gpp2`], [`3gp`, `video/3gp`], [`3gpp`, `video/3gpp`], [`3mf`, `model/3mf`], [`7z`, `application/x-7z-compressed`], [`7zip`, `application/x-7z-compressed`], [`123`, `application/vnd.lotus-1-2-3`], [`aab`, `application/x-authorware-bin`], [`aac`, `audio/x-acc`], [`aam`, `application/x-authorware-map`], [`aas`, `application/x-authorware-seg`], [`abw`, `application/x-abiword`], [`ac`, `application/vnd.nokia.n-gage.ac+xml`], [`ac3`, `audio/ac3`], [`acc`, `application/vnd.americandynamics.acc`], [`ace`, `application/x-ace-compressed`], [`acu`, `application/vnd.acucobol`], [`acutc`, `application/vnd.acucorp`], [`adp`, `audio/adpcm`], [`aep`, `application/vnd.audiograph`], [`afm`, `application/x-font-type1`], [`afp`, `application/vnd.ibm.modcap`], [`ahead`, `application/vnd.ahead.space`], [`ai`, `application/pdf`], [`aif`, `audio/x-aiff`], [`aifc`, `audio/x-aiff`], [`aiff`, `audio/x-aiff`], [`air`, `application/vnd.adobe.air-application-installer-package+zip`], [`ait`, `application/vnd.dvb.ait`], [`ami`, `application/vnd.amiga.ami`], [`amr`, `audio/amr`], [`apk`, `application/vnd.android.package-archive`], [`apng`, `image/apng`], [`appcache`, `text/cache-manifest`], [`application`, `application/x-ms-application`], [`apr`, `application/vnd.lotus-approach`], [`arc`, `application/x-freearc`], [`arj`, `application/x-arj`], [`asc`, `application/pgp-signature`], [`asf`, `video/x-ms-asf`], [`asm`, `text/x-asm`], [`aso`, `application/vnd.accpac.simply.aso`], [`asx`, `video/x-ms-asf`], [`atc`, `application/vnd.acucorp`], [`atom`, `application/atom+xml`], [`atomcat`, `application/atomcat+xml`], [`atomdeleted`, `application/atomdeleted+xml`], [`atomsvc`, `application/atomsvc+xml`], [`atx`, `application/vnd.antix.game-component`], [`au`, `audio/x-au`], [`avi`, `video/x-msvideo`], [`avif`, `image/avif`], [`aw`, `application/applixware`], [`azf`, `application/vnd.airzip.filesecure.azf`], [`azs`, `application/vnd.airzip.filesecure.azs`], [`azv`, `image/vnd.airzip.accelerator.azv`], [`azw`, `application/vnd.amazon.ebook`], [`b16`, `image/vnd.pco.b16`], [`bat`, `application/x-msdownload`], [`bcpio`, `application/x-bcpio`], [`bdf`, `application/x-font-bdf`], [`bdm`, `application/vnd.syncml.dm+wbxml`], [`bdoc`, `application/x-bdoc`], [`bed`, `application/vnd.realvnc.bed`], [`bh2`, `application/vnd.fujitsu.oasysprs`], [`bin`, `application/octet-stream`], [`blb`, `application/x-blorb`], [`blorb`, `application/x-blorb`], [`bmi`, `application/vnd.bmi`], [`bmml`, `application/vnd.balsamiq.bmml+xml`], [`bmp`, `image/bmp`], [`book`, `application/vnd.framemaker`], [`box`, `application/vnd.previewsystems.box`], [`boz`, `application/x-bzip2`], [`bpk`, `application/octet-stream`], [`bpmn`, `application/octet-stream`], [`bsp`, `model/vnd.valve.source.compiled-map`], [`btif`, `image/prs.btif`], [`buffer`, `application/octet-stream`], [`bz`, `application/x-bzip`], [`bz2`, `application/x-bzip2`], [`c`, `text/x-c`], [`c4d`, `application/vnd.clonk.c4group`], [`c4f`, `application/vnd.clonk.c4group`], [`c4g`, `application/vnd.clonk.c4group`], [`c4p`, `application/vnd.clonk.c4group`], [`c4u`, `application/vnd.clonk.c4group`], [`c11amc`, `application/vnd.cluetrust.cartomobile-config`], [`c11amz`, `application/vnd.cluetrust.cartomobile-config-pkg`], [`cab`, `application/vnd.ms-cab-compressed`], [`caf`, `audio/x-caf`], [`cap`, `application/vnd.tcpdump.pcap`], [`car`, `application/vnd.curl.car`], [`cat`, `application/vnd.ms-pki.seccat`], [`cb7`, `application/x-cbr`], [`cba`, `application/x-cbr`], [`cbr`, `application/x-cbr`], [`cbt`, `application/x-cbr`], [`cbz`, `application/x-cbr`], [`cc`, `text/x-c`], [`cco`, `application/x-cocoa`], [`cct`, `application/x-director`], [`ccxml`, `application/ccxml+xml`], [`cdbcmsg`, `application/vnd.contact.cmsg`], [`cda`, `application/x-cdf`], [`cdf`, `application/x-netcdf`], [`cdfx`, `application/cdfx+xml`], [`cdkey`, `application/vnd.mediastation.cdkey`], [`cdmia`, `application/cdmi-capability`], [`cdmic`, `application/cdmi-container`], [`cdmid`, `application/cdmi-domain`], [`cdmio`, `application/cdmi-object`], [`cdmiq`, `application/cdmi-queue`], [`cdr`, `application/cdr`], [`cdx`, `chemical/x-cdx`], [`cdxml`, `application/vnd.chemdraw+xml`], [`cdy`, `application/vnd.cinderella`], [`cer`, `application/pkix-cert`], [`cfs`, `application/x-cfs-compressed`], [`cgm`, `image/cgm`], [`chat`, `application/x-chat`], [`chm`, `application/vnd.ms-htmlhelp`], [`chrt`, `application/vnd.kde.kchart`], [`cif`, `chemical/x-cif`], [`cii`, `application/vnd.anser-web-certificate-issue-initiation`], [`cil`, `application/vnd.ms-artgalry`], [`cjs`, `application/node`], [`cla`, `application/vnd.claymore`], [`class`, `application/octet-stream`], [`clkk`, `application/vnd.crick.clicker.keyboard`], [`clkp`, `application/vnd.crick.clicker.palette`], [`clkt`, `application/vnd.crick.clicker.template`], [`clkw`, `application/vnd.crick.clicker.wordbank`], [`clkx`, `application/vnd.crick.clicker`], [`clp`, `application/x-msclip`], [`cmc`, `application/vnd.cosmocaller`], [`cmdf`, `chemical/x-cmdf`], [`cml`, `chemical/x-cml`], [`cmp`, `application/vnd.yellowriver-custom-menu`], [`cmx`, `image/x-cmx`], [`cod`, `application/vnd.rim.cod`], [`coffee`, `text/coffeescript`], [`com`, `application/x-msdownload`], [`conf`, `text/plain`], [`cpio`, `application/x-cpio`], [`cpp`, `text/x-c`], [`cpt`, `application/mac-compactpro`], [`crd`, `application/x-mscardfile`], [`crl`, `application/pkix-crl`], [`crt`, `application/x-x509-ca-cert`], [`crx`, `application/x-chrome-extension`], [`cryptonote`, `application/vnd.rig.cryptonote`], [`csh`, `application/x-csh`], [`csl`, `application/vnd.citationstyles.style+xml`], [`csml`, `chemical/x-csml`], [`csp`, `application/vnd.commonspace`], [`csr`, `application/octet-stream`], [`css`, `text/css`], [`cst`, `application/x-director`], [`csv`, `text/csv`], [`cu`, `application/cu-seeme`], [`curl`, `text/vnd.curl`], [`cww`, `application/prs.cww`], [`cxt`, `application/x-director`], [`cxx`, `text/x-c`], [`dae`, `model/vnd.collada+xml`], [`daf`, `application/vnd.mobius.daf`], [`dart`, `application/vnd.dart`], [`dataless`, `application/vnd.fdsn.seed`], [`davmount`, `application/davmount+xml`], [`dbf`, `application/vnd.dbf`], [`dbk`, `application/docbook+xml`], [`dcr`, `application/x-director`], [`dcurl`, `text/vnd.curl.dcurl`], [`dd2`, `application/vnd.oma.dd2+xml`], [`ddd`, `application/vnd.fujixerox.ddd`], [`ddf`, `application/vnd.syncml.dmddf+xml`], [`dds`, `image/vnd.ms-dds`], [`deb`, `application/x-debian-package`], [`def`, `text/plain`], [`deploy`, `application/octet-stream`], [`der`, `application/x-x509-ca-cert`], [`dfac`, `application/vnd.dreamfactory`], [`dgc`, `application/x-dgc-compressed`], [`dic`, `text/x-c`], [`dir`, `application/x-director`], [`dis`, `application/vnd.mobius.dis`], [`disposition-notification`, `message/disposition-notification`], [`dist`, `application/octet-stream`], [`distz`, `application/octet-stream`], [`djv`, `image/vnd.djvu`], [`djvu`, `image/vnd.djvu`], [`dll`, `application/octet-stream`], [`dmg`, `application/x-apple-diskimage`], [`dmn`, `application/octet-stream`], [`dmp`, `application/vnd.tcpdump.pcap`], [`dms`, `application/octet-stream`], [`dna`, `application/vnd.dna`], [`doc`, `application/msword`], [`docm`, `application/vnd.ms-word.template.macroEnabled.12`], [`docx`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`], [`dot`, `application/msword`], [`dotm`, `application/vnd.ms-word.template.macroEnabled.12`], [`dotx`, `application/vnd.openxmlformats-officedocument.wordprocessingml.template`], [`dp`, `application/vnd.osgi.dp`], [`dpg`, `application/vnd.dpgraph`], [`dra`, `audio/vnd.dra`], [`drle`, `image/dicom-rle`], [`dsc`, `text/prs.lines.tag`], [`dssc`, `application/dssc+der`], [`dtb`, `application/x-dtbook+xml`], [`dtd`, `application/xml-dtd`], [`dts`, `audio/vnd.dts`], [`dtshd`, `audio/vnd.dts.hd`], [`dump`, `application/octet-stream`], [`dvb`, `video/vnd.dvb.file`], [`dvi`, `application/x-dvi`], [`dwd`, `application/atsc-dwd+xml`], [`dwf`, `model/vnd.dwf`], [`dwg`, `image/vnd.dwg`], [`dxf`, `image/vnd.dxf`], [`dxp`, `application/vnd.spotfire.dxp`], [`dxr`, `application/x-director`], [`ear`, `application/java-archive`], [`ecelp4800`, `audio/vnd.nuera.ecelp4800`], [`ecelp7470`, `audio/vnd.nuera.ecelp7470`], [`ecelp9600`, `audio/vnd.nuera.ecelp9600`], [`ecma`, `application/ecmascript`], [`edm`, `application/vnd.novadigm.edm`], [`edx`, `application/vnd.novadigm.edx`], [`efif`, `application/vnd.picsel`], [`ei6`, `application/vnd.pg.osasli`], [`elc`, `application/octet-stream`], [`emf`, `image/emf`], [`eml`, `message/rfc822`], [`emma`, `application/emma+xml`], [`emotionml`, `application/emotionml+xml`], [`emz`, `application/x-msmetafile`], [`eol`, `audio/vnd.digital-winds`], [`eot`, `application/vnd.ms-fontobject`], [`eps`, `application/postscript`], [`epub`, `application/epub+zip`], [`es`, `application/ecmascript`], [`es3`, `application/vnd.eszigno3+xml`], [`esa`, `application/vnd.osgi.subsystem`], [`esf`, `application/vnd.epson.esf`], [`et3`, `application/vnd.eszigno3+xml`], [`etx`, `text/x-setext`], [`eva`, `application/x-eva`], [`evy`, `application/x-envoy`], [`exe`, `application/octet-stream`], [`exi`, `application/exi`], [`exp`, `application/express`], [`exr`, `image/aces`], [`ext`, `application/vnd.novadigm.ext`], [`ez`, `application/andrew-inset`], [`ez2`, `application/vnd.ezpix-album`], [`ez3`, `application/vnd.ezpix-package`], [`f`, `text/x-fortran`], [`f4v`, `video/mp4`], [`f77`, `text/x-fortran`], [`f90`, `text/x-fortran`], [`fbs`, `image/vnd.fastbidsheet`], [`fcdt`, `application/vnd.adobe.formscentral.fcdt`], [`fcs`, `application/vnd.isac.fcs`], [`fdf`, `application/vnd.fdf`], [`fdt`, `application/fdt+xml`], [`fe_launch`, `application/vnd.denovo.fcselayout-link`], [`fg5`, `application/vnd.fujitsu.oasysgp`], [`fgd`, `application/x-director`], [`fh`, `image/x-freehand`], [`fh4`, `image/x-freehand`], [`fh5`, `image/x-freehand`], [`fh7`, `image/x-freehand`], [`fhc`, `image/x-freehand`], [`fig`, `application/x-xfig`], [`fits`, `image/fits`], [`flac`, `audio/x-flac`], [`fli`, `video/x-fli`], [`flo`, `application/vnd.micrografx.flo`], [`flv`, `video/x-flv`], [`flw`, `application/vnd.kde.kivio`], [`flx`, `text/vnd.fmi.flexstor`], [`fly`, `text/vnd.fly`], [`fm`, `application/vnd.framemaker`], [`fnc`, `application/vnd.frogans.fnc`], [`fo`, `application/vnd.software602.filler.form+xml`], [`for`, `text/x-fortran`], [`fpx`, `image/vnd.fpx`], [`frame`, `application/vnd.framemaker`], [`fsc`, `application/vnd.fsc.weblaunch`], [`fst`, `image/vnd.fst`], [`ftc`, `application/vnd.fluxtime.clip`], [`fti`, `application/vnd.anser-web-funds-transfer-initiation`], [`fvt`, `video/vnd.fvt`], [`fxp`, `application/vnd.adobe.fxp`], [`fxpl`, `application/vnd.adobe.fxp`], [`fzs`, `application/vnd.fuzzysheet`], [`g2w`, `application/vnd.geoplan`], [`g3`, `image/g3fax`], [`g3w`, `application/vnd.geospace`], [`gac`, `application/vnd.groove-account`], [`gam`, `application/x-tads`], [`gbr`, `application/rpki-ghostbusters`], [`gca`, `application/x-gca-compressed`], [`gdl`, `model/vnd.gdl`], [`gdoc`, `application/vnd.google-apps.document`], [`geo`, `application/vnd.dynageo`], [`geojson`, `application/geo+json`], [`gex`, `application/vnd.geometry-explorer`], [`ggb`, `application/vnd.geogebra.file`], [`ggt`, `application/vnd.geogebra.tool`], [`ghf`, `application/vnd.groove-help`], [`gif`, `image/gif`], [`gim`, `application/vnd.groove-identity-message`], [`glb`, `model/gltf-binary`], [`gltf`, `model/gltf+json`], [`gml`, `application/gml+xml`], [`gmx`, `application/vnd.gmx`], [`gnumeric`, `application/x-gnumeric`], [`gpg`, `application/gpg-keys`], [`gph`, `application/vnd.flographit`], [`gpx`, `application/gpx+xml`], [`gqf`, `application/vnd.grafeq`], [`gqs`, `application/vnd.grafeq`], [`gram`, `application/srgs`], [`gramps`, `application/x-gramps-xml`], [`gre`, `application/vnd.geometry-explorer`], [`grv`, `application/vnd.groove-injector`], [`grxml`, `application/srgs+xml`], [`gsf`, `application/x-font-ghostscript`], [`gsheet`, `application/vnd.google-apps.spreadsheet`], [`gslides`, `application/vnd.google-apps.presentation`], [`gtar`, `application/x-gtar`], [`gtm`, `application/vnd.groove-tool-message`], [`gtw`, `model/vnd.gtw`], [`gv`, `text/vnd.graphviz`], [`gxf`, `application/gxf`], [`gxt`, `application/vnd.geonext`], [`gz`, `application/gzip`], [`gzip`, `application/gzip`], [`h`, `text/x-c`], [`h261`, `video/h261`], [`h263`, `video/h263`], [`h264`, `video/h264`], [`hal`, `application/vnd.hal+xml`], [`hbci`, `application/vnd.hbci`], [`hbs`, `text/x-handlebars-template`], [`hdd`, `application/x-virtualbox-hdd`], [`hdf`, `application/x-hdf`], [`heic`, `image/heic`], [`heics`, `image/heic-sequence`], [`heif`, `image/heif`], [`heifs`, `image/heif-sequence`], [`hej2`, `image/hej2k`], [`held`, `application/atsc-held+xml`], [`hh`, `text/x-c`], [`hjson`, `application/hjson`], [`hlp`, `application/winhlp`], [`hpgl`, `application/vnd.hp-hpgl`], [`hpid`, `application/vnd.hp-hpid`], [`hps`, `application/vnd.hp-hps`], [`hqx`, `application/mac-binhex40`], [`hsj2`, `image/hsj2`], [`htc`, `text/x-component`], [`htke`, `application/vnd.kenameaapp`], [`htm`, `text/html`], [`html`, `text/html`], [`hvd`, `application/vnd.yamaha.hv-dic`], [`hvp`, `application/vnd.yamaha.hv-voice`], [`hvs`, `application/vnd.yamaha.hv-script`], [`i2g`, `application/vnd.intergeo`], [`icc`, `application/vnd.iccprofile`], [`ice`, `x-conference/x-cooltalk`], [`icm`, `application/vnd.iccprofile`], [`ico`, `image/x-icon`], [`ics`, `text/calendar`], [`ief`, `image/ief`], [`ifb`, `text/calendar`], [`ifm`, `application/vnd.shana.informed.formdata`], [`iges`, `model/iges`], [`igl`, `application/vnd.igloader`], [`igm`, `application/vnd.insors.igm`], [`igs`, `model/iges`], [`igx`, `application/vnd.micrografx.igx`], [`iif`, `application/vnd.shana.informed.interchange`], [`img`, `application/octet-stream`], [`imp`, `application/vnd.accpac.simply.imp`], [`ims`, `application/vnd.ms-ims`], [`in`, `text/plain`], [`ini`, `text/plain`], [`ink`, `application/inkml+xml`], [`inkml`, `application/inkml+xml`], [`install`, `application/x-install-instructions`], [`iota`, `application/vnd.astraea-software.iota`], [`ipfix`, `application/ipfix`], [`ipk`, `application/vnd.shana.informed.package`], [`irm`, `application/vnd.ibm.rights-management`], [`irp`, `application/vnd.irepository.package+xml`], [`iso`, `application/x-iso9660-image`], [`itp`, `application/vnd.shana.informed.formtemplate`], [`its`, `application/its+xml`], [`ivp`, `application/vnd.immervision-ivp`], [`ivu`, `application/vnd.immervision-ivu`], [`jad`, `text/vnd.sun.j2me.app-descriptor`], [`jade`, `text/jade`], [`jam`, `application/vnd.jam`], [`jar`, `application/java-archive`], [`jardiff`, `application/x-java-archive-diff`], [`java`, `text/x-java-source`], [`jhc`, `image/jphc`], [`jisp`, `application/vnd.jisp`], [`jls`, `image/jls`], [`jlt`, `application/vnd.hp-jlyt`], [`jng`, `image/x-jng`], [`jnlp`, `application/x-java-jnlp-file`], [`joda`, `application/vnd.joost.joda-archive`], [`jp2`, `image/jp2`], [`jpe`, `image/jpeg`], [`jpeg`, `image/jpeg`], [`jpf`, `image/jpx`], [`jpg`, `image/jpeg`], [`jpg2`, `image/jp2`], [`jpgm`, `video/jpm`], [`jpgv`, `video/jpeg`], [`jph`, `image/jph`], [`jpm`, `video/jpm`], [`jpx`, `image/jpx`], [`js`, `application/javascript`], [`json`, `application/json`], [`json5`, `application/json5`], [`jsonld`, `application/ld+json`], [`jsonl`, `application/jsonl`], [`jsonml`, `application/jsonml+json`], [`jsx`, `text/jsx`], [`jxr`, `image/jxr`], [`jxra`, `image/jxra`], [`jxrs`, `image/jxrs`], [`jxs`, `image/jxs`], [`jxsc`, `image/jxsc`], [`jxsi`, `image/jxsi`], [`jxss`, `image/jxss`], [`kar`, `audio/midi`], [`karbon`, `application/vnd.kde.karbon`], [`kdb`, `application/octet-stream`], [`kdbx`, `application/x-keepass2`], [`key`, `application/x-iwork-keynote-sffkey`], [`kfo`, `application/vnd.kde.kformula`], [`kia`, `application/vnd.kidspiration`], [`kml`, `application/vnd.google-earth.kml+xml`], [`kmz`, `application/vnd.google-earth.kmz`], [`kne`, `application/vnd.kinar`], [`knp`, `application/vnd.kinar`], [`kon`, `application/vnd.kde.kontour`], [`kpr`, `application/vnd.kde.kpresenter`], [`kpt`, `application/vnd.kde.kpresenter`], [`kpxx`, `application/vnd.ds-keypoint`], [`ksp`, `application/vnd.kde.kspread`], [`ktr`, `application/vnd.kahootz`], [`ktx`, `image/ktx`], [`ktx2`, `image/ktx2`], [`ktz`, `application/vnd.kahootz`], [`kwd`, `application/vnd.kde.kword`], [`kwt`, `application/vnd.kde.kword`], [`lasxml`, `application/vnd.las.las+xml`], [`latex`, `application/x-latex`], [`lbd`, `application/vnd.llamagraphics.life-balance.desktop`], [`lbe`, `application/vnd.llamagraphics.life-balance.exchange+xml`], [`les`, `application/vnd.hhe.lesson-player`], [`less`, `text/less`], [`lgr`, `application/lgr+xml`], [`lha`, `application/octet-stream`], [`link66`, `application/vnd.route66.link66+xml`], [`list`, `text/plain`], [`list3820`, `application/vnd.ibm.modcap`], [`listafp`, `application/vnd.ibm.modcap`], [`litcoffee`, `text/coffeescript`], [`lnk`, `application/x-ms-shortcut`], [`log`, `text/plain`], [`lostxml`, `application/lost+xml`], [`lrf`, `application/octet-stream`], [`lrm`, `application/vnd.ms-lrm`], [`ltf`, `application/vnd.frogans.ltf`], [`lua`, `text/x-lua`], [`luac`, `application/x-lua-bytecode`], [`lvp`, `audio/vnd.lucent.voice`], [`lwp`, `application/vnd.lotus-wordpro`], [`lzh`, `application/octet-stream`], [`m1v`, `video/mpeg`], [`m2a`, `audio/mpeg`], [`m2v`, `video/mpeg`], [`m3a`, `audio/mpeg`], [`m3u`, `text/plain`], [`m3u8`, `application/vnd.apple.mpegurl`], [`m4a`, `audio/x-m4a`], [`m4p`, `application/mp4`], [`m4s`, `video/iso.segment`], [`m4u`, `application/vnd.mpegurl`], [`m4v`, `video/x-m4v`], [`m13`, `application/x-msmediaview`], [`m14`, `application/x-msmediaview`], [`m21`, `application/mp21`], [`ma`, `application/mathematica`], [`mads`, `application/mads+xml`], [`maei`, `application/mmt-aei+xml`], [`mag`, `application/vnd.ecowin.chart`], [`maker`, `application/vnd.framemaker`], [`man`, `text/troff`], [`manifest`, `text/cache-manifest`], [`map`, `application/json`], [`mar`, `application/octet-stream`], [`markdown`, `text/markdown`], [`mathml`, `application/mathml+xml`], [`mb`, `application/mathematica`], [`mbk`, `application/vnd.mobius.mbk`], [`mbox`, `application/mbox`], [`mc1`, `application/vnd.medcalcdata`], [`mcd`, `application/vnd.mcd`], [`mcurl`, `text/vnd.curl.mcurl`], [`md`, `text/markdown`], [`mdb`, `application/x-msaccess`], [`mdi`, `image/vnd.ms-modi`], [`mdx`, `text/mdx`], [`me`, `text/troff`], [`mesh`, `model/mesh`], [`meta4`, `application/metalink4+xml`], [`metalink`, `application/metalink+xml`], [`mets`, `application/mets+xml`], [`mfm`, `application/vnd.mfmp`], [`mft`, `application/rpki-manifest`], [`mgp`, `application/vnd.osgeo.mapguide.package`], [`mgz`, `application/vnd.proteus.magazine`], [`mid`, `audio/midi`], [`midi`, `audio/midi`], [`mie`, `application/x-mie`], [`mif`, `application/vnd.mif`], [`mime`, `message/rfc822`], [`mj2`, `video/mj2`], [`mjp2`, `video/mj2`], [`mjs`, `application/javascript`], [`mk3d`, `video/x-matroska`], [`mka`, `audio/x-matroska`], [`mkd`, `text/x-markdown`], [`mks`, `video/x-matroska`], [`mkv`, `video/x-matroska`], [`mlp`, `application/vnd.dolby.mlp`], [`mmd`, `application/vnd.chipnuts.karaoke-mmd`], [`mmf`, `application/vnd.smaf`], [`mml`, `text/mathml`], [`mmr`, `image/vnd.fujixerox.edmics-mmr`], [`mng`, `video/x-mng`], [`mny`, `application/x-msmoney`], [`mobi`, `application/x-mobipocket-ebook`], [`mods`, `application/mods+xml`], [`mov`, `video/quicktime`], [`movie`, `video/x-sgi-movie`], [`mp2`, `audio/mpeg`], [`mp2a`, `audio/mpeg`], [`mp3`, `audio/mpeg`], [`mp4`, `video/mp4`], [`mp4a`, `audio/mp4`], [`mp4s`, `application/mp4`], [`mp4v`, `video/mp4`], [`mp21`, `application/mp21`], [`mpc`, `application/vnd.mophun.certificate`], [`mpd`, `application/dash+xml`], [`mpe`, `video/mpeg`], [`mpeg`, `video/mpeg`], [`mpg`, `video/mpeg`], [`mpg4`, `video/mp4`], [`mpga`, `audio/mpeg`], [`mpkg`, `application/vnd.apple.installer+xml`], [`mpm`, `application/vnd.blueice.multipass`], [`mpn`, `application/vnd.mophun.application`], [`mpp`, `application/vnd.ms-project`], [`mpt`, `application/vnd.ms-project`], [`mpy`, `application/vnd.ibm.minipay`], [`mqy`, `application/vnd.mobius.mqy`], [`mrc`, `application/marc`], [`mrcx`, `application/marcxml+xml`], [`ms`, `text/troff`], [`mscml`, `application/mediaservercontrol+xml`], [`mseed`, `application/vnd.fdsn.mseed`], [`mseq`, `application/vnd.mseq`], [`msf`, `application/vnd.epson.msf`], [`msg`, `application/vnd.ms-outlook`], [`msh`, `model/mesh`], [`msi`, `application/x-msdownload`], [`msl`, `application/vnd.mobius.msl`], [`msm`, `application/octet-stream`], [`msp`, `application/octet-stream`], [`msty`, `application/vnd.muvee.style`], [`mtl`, `model/mtl`], [`mts`, `model/vnd.mts`], [`mus`, `application/vnd.musician`], [`musd`, `application/mmt-usd+xml`], [`musicxml`, `application/vnd.recordare.musicxml+xml`], [`mvb`, `application/x-msmediaview`], [`mvt`, `application/vnd.mapbox-vector-tile`], [`mwf`, `application/vnd.mfer`], [`mxf`, `application/mxf`], [`mxl`, `application/vnd.recordare.musicxml`], [`mxmf`, `audio/mobile-xmf`], [`mxml`, `application/xv+xml`], [`mxs`, `application/vnd.triscape.mxs`], [`mxu`, `video/vnd.mpegurl`], [`n-gage`, `application/vnd.nokia.n-gage.symbian.install`], [`n3`, `text/n3`], [`nb`, `application/mathematica`], [`nbp`, `application/vnd.wolfram.player`], [`nc`, `application/x-netcdf`], [`ncx`, `application/x-dtbncx+xml`], [`nfo`, `text/x-nfo`], [`ngdat`, `application/vnd.nokia.n-gage.data`], [`nitf`, `application/vnd.nitf`], [`nlu`, `application/vnd.neurolanguage.nlu`], [`nml`, `application/vnd.enliven`], [`nnd`, `application/vnd.noblenet-directory`], [`nns`, `application/vnd.noblenet-sealer`], [`nnw`, `application/vnd.noblenet-web`], [`npx`, `image/vnd.net-fpx`], [`nq`, `application/n-quads`], [`nsc`, `application/x-conference`], [`nsf`, `application/vnd.lotus-notes`], [`nt`, `application/n-triples`], [`ntf`, `application/vnd.nitf`], [`numbers`, `application/x-iwork-numbers-sffnumbers`], [`nzb`, `application/x-nzb`], [`oa2`, `application/vnd.fujitsu.oasys2`], [`oa3`, `application/vnd.fujitsu.oasys3`], [`oas`, `application/vnd.fujitsu.oasys`], [`obd`, `application/x-msbinder`], [`obgx`, `application/vnd.openblox.game+xml`], [`obj`, `model/obj`], [`oda`, `application/oda`], [`odb`, `application/vnd.oasis.opendocument.database`], [`odc`, `application/vnd.oasis.opendocument.chart`], [`odf`, `application/vnd.oasis.opendocument.formula`], [`odft`, `application/vnd.oasis.opendocument.formula-template`], [`odg`, `application/vnd.oasis.opendocument.graphics`], [`odi`, `application/vnd.oasis.opendocument.image`], [`odm`, `application/vnd.oasis.opendocument.text-master`], [`odp`, `application/vnd.oasis.opendocument.presentation`], [`ods`, `application/vnd.oasis.opendocument.spreadsheet`], [`odt`, `application/vnd.oasis.opendocument.text`], [`oga`, `audio/ogg`], [`ogex`, `model/vnd.opengex`], [`ogg`, `audio/ogg`], [`ogv`, `video/ogg`], [`ogx`, `application/ogg`], [`omdoc`, `application/omdoc+xml`], [`onepkg`, `application/onenote`], [`onetmp`, `application/onenote`], [`onetoc`, `application/onenote`], [`onetoc2`, `application/onenote`], [`opf`, `application/oebps-package+xml`], [`opml`, `text/x-opml`], [`oprc`, `application/vnd.palm`], [`opus`, `audio/ogg`], [`org`, `text/x-org`], [`osf`, `application/vnd.yamaha.openscoreformat`], [`osfpvg`, `application/vnd.yamaha.openscoreformat.osfpvg+xml`], [`osm`, `application/vnd.openstreetmap.data+xml`], [`otc`, `application/vnd.oasis.opendocument.chart-template`], [`otf`, `font/otf`], [`otg`, `application/vnd.oasis.opendocument.graphics-template`], [`oth`, `application/vnd.oasis.opendocument.text-web`], [`oti`, `application/vnd.oasis.opendocument.image-template`], [`otp`, `application/vnd.oasis.opendocument.presentation-template`], [`ots`, `application/vnd.oasis.opendocument.spreadsheet-template`], [`ott`, `application/vnd.oasis.opendocument.text-template`], [`ova`, `application/x-virtualbox-ova`], [`ovf`, `application/x-virtualbox-ovf`], [`owl`, `application/rdf+xml`], [`oxps`, `application/oxps`], [`oxt`, `application/vnd.openofficeorg.extension`], [`p`, `text/x-pascal`], [`p7a`, `application/x-pkcs7-signature`], [`p7b`, `application/x-pkcs7-certificates`], [`p7c`, `application/pkcs7-mime`], [`p7m`, `application/pkcs7-mime`], [`p7r`, `application/x-pkcs7-certreqresp`], [`p7s`, `application/pkcs7-signature`], [`p8`, `application/pkcs8`], [`p10`, `application/x-pkcs10`], [`p12`, `application/x-pkcs12`], [`pac`, `application/x-ns-proxy-autoconfig`], [`pages`, `application/x-iwork-pages-sffpages`], [`pas`, `text/x-pascal`], [`paw`, `application/vnd.pawaafile`], [`pbd`, `application/vnd.powerbuilder6`], [`pbm`, `image/x-portable-bitmap`], [`pcap`, `application/vnd.tcpdump.pcap`], [`pcf`, `application/x-font-pcf`], [`pcl`, `application/vnd.hp-pcl`], [`pclxl`, `application/vnd.hp-pclxl`], [`pct`, `image/x-pict`], [`pcurl`, `application/vnd.curl.pcurl`], [`pcx`, `image/x-pcx`], [`pdb`, `application/x-pilot`], [`pde`, `text/x-processing`], [`pdf`, `application/pdf`], [`pem`, `application/x-x509-user-cert`], [`pfa`, `application/x-font-type1`], [`pfb`, `application/x-font-type1`], [`pfm`, `application/x-font-type1`], [`pfr`, `application/font-tdpfr`], [`pfx`, `application/x-pkcs12`], [`pgm`, `image/x-portable-graymap`], [`pgn`, `application/x-chess-pgn`], [`pgp`, `application/pgp`], [`php`, `application/x-httpd-php`], [`php3`, `application/x-httpd-php`], [`php4`, `application/x-httpd-php`], [`phps`, `application/x-httpd-php-source`], [`phtml`, `application/x-httpd-php`], [`pic`, `image/x-pict`], [`pkg`, `application/octet-stream`], [`pki`, `application/pkixcmp`], [`pkipath`, `application/pkix-pkipath`], [`pkpass`, `application/vnd.apple.pkpass`], [`pl`, `application/x-perl`], [`plb`, `application/vnd.3gpp.pic-bw-large`], [`plc`, `application/vnd.mobius.plc`], [`plf`, `application/vnd.pocketlearn`], [`pls`, `application/pls+xml`], [`pm`, `application/x-perl`], [`pml`, `application/vnd.ctc-posml`], [`png`, `image/png`], [`pnm`, `image/x-portable-anymap`], [`portpkg`, `application/vnd.macports.portpkg`], [`pot`, `application/vnd.ms-powerpoint`], [`potm`, `application/vnd.ms-powerpoint.presentation.macroEnabled.12`], [`potx`, `application/vnd.openxmlformats-officedocument.presentationml.template`], [`ppa`, `application/vnd.ms-powerpoint`], [`ppam`, `application/vnd.ms-powerpoint.addin.macroEnabled.12`], [`ppd`, `application/vnd.cups-ppd`], [`ppm`, `image/x-portable-pixmap`], [`pps`, `application/vnd.ms-powerpoint`], [`ppsm`, `application/vnd.ms-powerpoint.slideshow.macroEnabled.12`], [`ppsx`, `application/vnd.openxmlformats-officedocument.presentationml.slideshow`], [`ppt`, `application/powerpoint`], [`pptm`, `application/vnd.ms-powerpoint.presentation.macroEnabled.12`], [`pptx`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`], [`pqa`, `application/vnd.palm`], [`prc`, `application/x-pilot`], [`pre`, `application/vnd.lotus-freelance`], [`prf`, `application/pics-rules`], [`provx`, `application/provenance+xml`], [`ps`, `application/postscript`], [`psb`, `application/vnd.3gpp.pic-bw-small`], [`psd`, `application/x-photoshop`], [`psf`, `application/x-font-linux-psf`], [`pskcxml`, `application/pskc+xml`], [`pti`, `image/prs.pti`], [`ptid`, `application/vnd.pvi.ptid1`], [`pub`, `application/x-mspublisher`], [`pvb`, `application/vnd.3gpp.pic-bw-var`], [`pwn`, `application/vnd.3m.post-it-notes`], [`pya`, `audio/vnd.ms-playready.media.pya`], [`pyv`, `video/vnd.ms-playready.media.pyv`], [`qam`, `application/vnd.epson.quickanime`], [`qbo`, `application/vnd.intu.qbo`], [`qfx`, `application/vnd.intu.qfx`], [`qps`, `application/vnd.publishare-delta-tree`], [`qt`, `video/quicktime`], [`qwd`, `application/vnd.quark.quarkxpress`], [`qwt`, `application/vnd.quark.quarkxpress`], [`qxb`, `application/vnd.quark.quarkxpress`], [`qxd`, `application/vnd.quark.quarkxpress`], [`qxl`, `application/vnd.quark.quarkxpress`], [`qxt`, `application/vnd.quark.quarkxpress`], [`ra`, `audio/x-realaudio`], [`ram`, `audio/x-pn-realaudio`], [`raml`, `application/raml+yaml`], [`rapd`, `application/route-apd+xml`], [`rar`, `application/x-rar`], [`ras`, `image/x-cmu-raster`], [`rcprofile`, `application/vnd.ipunplugged.rcprofile`], [`rdf`, `application/rdf+xml`], [`rdz`, `application/vnd.data-vision.rdz`], [`relo`, `application/p2p-overlay+xml`], [`rep`, `application/vnd.businessobjects`], [`res`, `application/x-dtbresource+xml`], [`rgb`, `image/x-rgb`], [`rif`, `application/reginfo+xml`], [`rip`, `audio/vnd.rip`], [`ris`, `application/x-research-info-systems`], [`rl`, `application/resource-lists+xml`], [`rlc`, `image/vnd.fujixerox.edmics-rlc`], [`rld`, `application/resource-lists-diff+xml`], [`rm`, `audio/x-pn-realaudio`], [`rmi`, `audio/midi`], [`rmp`, `audio/x-pn-realaudio-plugin`], [`rms`, `application/vnd.jcp.javame.midlet-rms`], [`rmvb`, `application/vnd.rn-realmedia-vbr`], [`rnc`, `application/relax-ng-compact-syntax`], [`rng`, `application/xml`], [`roa`, `application/rpki-roa`], [`roff`, `text/troff`], [`rp9`, `application/vnd.cloanto.rp9`], [`rpm`, `audio/x-pn-realaudio-plugin`], [`rpss`, `application/vnd.nokia.radio-presets`], [`rpst`, `application/vnd.nokia.radio-preset`], [`rq`, `application/sparql-query`], [`rs`, `application/rls-services+xml`], [`rsa`, `application/x-pkcs7`], [`rsat`, `application/atsc-rsat+xml`], [`rsd`, `application/rsd+xml`], [`rsheet`, `application/urc-ressheet+xml`], [`rss`, `application/rss+xml`], [`rtf`, `text/rtf`], [`rtx`, `text/richtext`], [`run`, `application/x-makeself`], [`rusd`, `application/route-usd+xml`], [`rv`, `video/vnd.rn-realvideo`], [`s`, `text/x-asm`], [`s3m`, `audio/s3m`], [`saf`, `application/vnd.yamaha.smaf-audio`], [`sass`, `text/x-sass`], [`sbml`, `application/sbml+xml`], [`sc`, `application/vnd.ibm.secure-container`], [`scd`, `application/x-msschedule`], [`scm`, `application/vnd.lotus-screencam`], [`scq`, `application/scvp-cv-request`], [`scs`, `application/scvp-cv-response`], [`scss`, `text/x-scss`], [`scurl`, `text/vnd.curl.scurl`], [`sda`, `application/vnd.stardivision.draw`], [`sdc`, `application/vnd.stardivision.calc`], [`sdd`, `application/vnd.stardivision.impress`], [`sdkd`, `application/vnd.solent.sdkm+xml`], [`sdkm`, `application/vnd.solent.sdkm+xml`], [`sdp`, `application/sdp`], [`sdw`, `application/vnd.stardivision.writer`], [`sea`, `application/octet-stream`], [`see`, `application/vnd.seemail`], [`seed`, `application/vnd.fdsn.seed`], [`sema`, `application/vnd.sema`], [`semd`, `application/vnd.semd`], [`semf`, `application/vnd.semf`], [`senmlx`, `application/senml+xml`], [`sensmlx`, `application/sensml+xml`], [`ser`, `application/java-serialized-object`], [`setpay`, `application/set-payment-initiation`], [`setreg`, `application/set-registration-initiation`], [`sfd-hdstx`, `application/vnd.hydrostatix.sof-data`], [`sfs`, `application/vnd.spotfire.sfs`], [`sfv`, `text/x-sfv`], [`sgi`, `image/sgi`], [`sgl`, `application/vnd.stardivision.writer-global`], [`sgm`, `text/sgml`], [`sgml`, `text/sgml`], [`sh`, `application/x-sh`], [`shar`, `application/x-shar`], [`shex`, `text/shex`], [`shf`, `application/shf+xml`], [`shtml`, `text/html`], [`sid`, `image/x-mrsid-image`], [`sieve`, `application/sieve`], [`sig`, `application/pgp-signature`], [`sil`, `audio/silk`], [`silo`, `model/mesh`], [`sis`, `application/vnd.symbian.install`], [`sisx`, `application/vnd.symbian.install`], [`sit`, `application/x-stuffit`], [`sitx`, `application/x-stuffitx`], [`siv`, `application/sieve`], [`skd`, `application/vnd.koan`], [`skm`, `application/vnd.koan`], [`skp`, `application/vnd.koan`], [`skt`, `application/vnd.koan`], [`sldm`, `application/vnd.ms-powerpoint.slide.macroenabled.12`], [`sldx`, `application/vnd.openxmlformats-officedocument.presentationml.slide`], [`slim`, `text/slim`], [`slm`, `text/slim`], [`sls`, `application/route-s-tsid+xml`], [`slt`, `application/vnd.epson.salt`], [`sm`, `application/vnd.stepmania.stepchart`], [`smf`, `application/vnd.stardivision.math`], [`smi`, `application/smil`], [`smil`, `application/smil`], [`smv`, `video/x-smv`], [`smzip`, `application/vnd.stepmania.package`], [`snd`, `audio/basic`], [`snf`, `application/x-font-snf`], [`so`, `application/octet-stream`], [`spc`, `application/x-pkcs7-certificates`], [`spdx`, `text/spdx`], [`spf`, `application/vnd.yamaha.smaf-phrase`], [`spl`, `application/x-futuresplash`], [`spot`, `text/vnd.in3d.spot`], [`spp`, `application/scvp-vp-response`], [`spq`, `application/scvp-vp-request`], [`spx`, `audio/ogg`], [`sql`, `application/x-sql`], [`src`, `application/x-wais-source`], [`srt`, `application/x-subrip`], [`sru`, `application/sru+xml`], [`srx`, `application/sparql-results+xml`], [`ssdl`, `application/ssdl+xml`], [`sse`, `application/vnd.kodak-descriptor`], [`ssf`, `application/vnd.epson.ssf`], [`ssml`, `application/ssml+xml`], [`sst`, `application/octet-stream`], [`st`, `application/vnd.sailingtracker.track`], [`stc`, `application/vnd.sun.xml.calc.template`], [`std`, `application/vnd.sun.xml.draw.template`], [`stf`, `application/vnd.wt.stf`], [`sti`, `application/vnd.sun.xml.impress.template`], [`stk`, `application/hyperstudio`], [`stl`, `model/stl`], [`stpx`, `model/step+xml`], [`stpxz`, `model/step-xml+zip`], [`stpz`, `model/step+zip`], [`str`, `application/vnd.pg.format`], [`stw`, `application/vnd.sun.xml.writer.template`], [`styl`, `text/stylus`], [`stylus`, `text/stylus`], [`sub`, `text/vnd.dvb.subtitle`], [`sus`, `application/vnd.sus-calendar`], [`susp`, `application/vnd.sus-calendar`], [`sv4cpio`, `application/x-sv4cpio`], [`sv4crc`, `application/x-sv4crc`], [`svc`, `application/vnd.dvb.service`], [`svd`, `application/vnd.svd`], [`svg`, `image/svg+xml`], [`svgz`, `image/svg+xml`], [`swa`, `application/x-director`], [`swf`, `application/x-shockwave-flash`], [`swi`, `application/vnd.aristanetworks.swi`], [`swidtag`, `application/swid+xml`], [`sxc`, `application/vnd.sun.xml.calc`], [`sxd`, `application/vnd.sun.xml.draw`], [`sxg`, `application/vnd.sun.xml.writer.global`], [`sxi`, `application/vnd.sun.xml.impress`], [`sxm`, `application/vnd.sun.xml.math`], [`sxw`, `application/vnd.sun.xml.writer`], [`t`, `text/troff`], [`t3`, `application/x-t3vm-image`], [`t38`, `image/t38`], [`taglet`, `application/vnd.mynfc`], [`tao`, `application/vnd.tao.intent-module-archive`], [`tap`, `image/vnd.tencent.tap`], [`tar`, `application/x-tar`], [`tcap`, `application/vnd.3gpp2.tcap`], [`tcl`, `application/x-tcl`], [`td`, `application/urc-targetdesc+xml`], [`teacher`, `application/vnd.smart.teacher`], [`tei`, `application/tei+xml`], [`teicorpus`, `application/tei+xml`], [`tex`, `application/x-tex`], [`texi`, `application/x-texinfo`], [`texinfo`, `application/x-texinfo`], [`text`, `text/plain`], [`tfi`, `application/thraud+xml`], [`tfm`, `application/x-tex-tfm`], [`tfx`, `image/tiff-fx`], [`tga`, `image/x-tga`], [`tgz`, `application/x-tar`], [`thmx`, `application/vnd.ms-officetheme`], [`tif`, `image/tiff`], [`tiff`, `image/tiff`], [`tk`, `application/x-tcl`], [`tmo`, `application/vnd.tmobile-livetv`], [`toml`, `application/toml`], [`torrent`, `application/x-bittorrent`], [`tpl`, `application/vnd.groove-tool-template`], [`tpt`, `application/vnd.trid.tpt`], [`tr`, `text/troff`], [`tra`, `application/vnd.trueapp`], [`trig`, `application/trig`], [`trm`, `application/x-msterminal`], [`ts`, `video/mp2t`], [`tsd`, `application/timestamped-data`], [`tsv`, `text/tab-separated-values`], [`ttc`, `font/collection`], [`ttf`, `font/ttf`], [`ttl`, `text/turtle`], [`ttml`, `application/ttml+xml`], [`twd`, `application/vnd.simtech-mindmapper`], [`twds`, `application/vnd.simtech-mindmapper`], [`txd`, `application/vnd.genomatix.tuxedo`], [`txf`, `application/vnd.mobius.txf`], [`txt`, `text/plain`], [`u8dsn`, `message/global-delivery-status`], [`u8hdr`, `message/global-headers`], [`u8mdn`, `message/global-disposition-notification`], [`u8msg`, `message/global`], [`u32`, `application/x-authorware-bin`], [`ubj`, `application/ubjson`], [`udeb`, `application/x-debian-package`], [`ufd`, `application/vnd.ufdl`], [`ufdl`, `application/vnd.ufdl`], [`ulx`, `application/x-glulx`], [`umj`, `application/vnd.umajin`], [`unityweb`, `application/vnd.unity`], [`uoml`, `application/vnd.uoml+xml`], [`uri`, `text/uri-list`], [`uris`, `text/uri-list`], [`urls`, `text/uri-list`], [`usdz`, `model/vnd.usdz+zip`], [`ustar`, `application/x-ustar`], [`utz`, `application/vnd.uiq.theme`], [`uu`, `text/x-uuencode`], [`uva`, `audio/vnd.dece.audio`], [`uvd`, `application/vnd.dece.data`], [`uvf`, `application/vnd.dece.data`], [`uvg`, `image/vnd.dece.graphic`], [`uvh`, `video/vnd.dece.hd`], [`uvi`, `image/vnd.dece.graphic`], [`uvm`, `video/vnd.dece.mobile`], [`uvp`, `video/vnd.dece.pd`], [`uvs`, `video/vnd.dece.sd`], [`uvt`, `application/vnd.dece.ttml+xml`], [`uvu`, `video/vnd.uvvu.mp4`], [`uvv`, `video/vnd.dece.video`], [`uvva`, `audio/vnd.dece.audio`], [`uvvd`, `application/vnd.dece.data`], [`uvvf`, `application/vnd.dece.data`], [`uvvg`, `image/vnd.dece.graphic`], [`uvvh`, `video/vnd.dece.hd`], [`uvvi`, `image/vnd.dece.graphic`], [`uvvm`, `video/vnd.dece.mobile`], [`uvvp`, `video/vnd.dece.pd`], [`uvvs`, `video/vnd.dece.sd`], [`uvvt`, `application/vnd.dece.ttml+xml`], [`uvvu`, `video/vnd.uvvu.mp4`], [`uvvv`, `video/vnd.dece.video`], [`uvvx`, `application/vnd.dece.unspecified`], [`uvvz`, `application/vnd.dece.zip`], [`uvx`, `application/vnd.dece.unspecified`], [`uvz`, `application/vnd.dece.zip`], [`vbox`, `application/x-virtualbox-vbox`], [`vbox-extpack`, `application/x-virtualbox-vbox-extpack`], [`vcard`, `text/vcard`], [`vcd`, `application/x-cdlink`], [`vcf`, `text/x-vcard`], [`vcg`, `application/vnd.groove-vcard`], [`vcs`, `text/x-vcalendar`], [`vcx`, `application/vnd.vcx`], [`vdi`, `application/x-virtualbox-vdi`], [`vds`, `model/vnd.sap.vds`], [`vhd`, `application/x-virtualbox-vhd`], [`vis`, `application/vnd.visionary`], [`viv`, `video/vnd.vivo`], [`vlc`, `application/videolan`], [`vmdk`, `application/x-virtualbox-vmdk`], [`vob`, `video/x-ms-vob`], [`vor`, `application/vnd.stardivision.writer`], [`vox`, `application/x-authorware-bin`], [`vrml`, `model/vrml`], [`vsd`, `application/vnd.visio`], [`vsf`, `application/vnd.vsf`], [`vss`, `application/vnd.visio`], [`vst`, `application/vnd.visio`], [`vsw`, `application/vnd.visio`], [`vtf`, `image/vnd.valve.source.texture`], [`vtt`, `text/vtt`], [`vtu`, `model/vnd.vtu`], [`vxml`, `application/voicexml+xml`], [`w3d`, `application/x-director`], [`wad`, `application/x-doom`], [`wadl`, `application/vnd.sun.wadl+xml`], [`war`, `application/java-archive`], [`wasm`, `application/wasm`], [`wav`, `audio/x-wav`], [`wax`, `audio/x-ms-wax`], [`wbmp`, `image/vnd.wap.wbmp`], [`wbs`, `application/vnd.criticaltools.wbs+xml`], [`wbxml`, `application/wbxml`], [`wcm`, `application/vnd.ms-works`], [`wdb`, `application/vnd.ms-works`], [`wdp`, `image/vnd.ms-photo`], [`weba`, `audio/webm`], [`webapp`, `application/x-web-app-manifest+json`], [`webm`, `video/webm`], [`webmanifest`, `application/manifest+json`], [`webp`, `image/webp`], [`wg`, `application/vnd.pmi.widget`], [`wgt`, `application/widget`], [`wks`, `application/vnd.ms-works`], [`wm`, `video/x-ms-wm`], [`wma`, `audio/x-ms-wma`], [`wmd`, `application/x-ms-wmd`], [`wmf`, `image/wmf`], [`wml`, `text/vnd.wap.wml`], [`wmlc`, `application/wmlc`], [`wmls`, `text/vnd.wap.wmlscript`], [`wmlsc`, `application/vnd.wap.wmlscriptc`], [`wmv`, `video/x-ms-wmv`], [`wmx`, `video/x-ms-wmx`], [`wmz`, `application/x-msmetafile`], [`woff`, `font/woff`], [`woff2`, `font/woff2`], [`word`, `application/msword`], [`wpd`, `application/vnd.wordperfect`], [`wpl`, `application/vnd.ms-wpl`], [`wps`, `application/vnd.ms-works`], [`wqd`, `application/vnd.wqd`], [`wri`, `application/x-mswrite`], [`wrl`, `model/vrml`], [`wsc`, `message/vnd.wfa.wsc`], [`wsdl`, `application/wsdl+xml`], [`wspolicy`, `application/wspolicy+xml`], [`wtb`, `application/vnd.webturbo`], [`wvx`, `video/x-ms-wvx`], [`x3d`, `model/x3d+xml`], [`x3db`, `model/x3d+fastinfoset`], [`x3dbz`, `model/x3d+binary`], [`x3dv`, `model/x3d-vrml`], [`x3dvz`, `model/x3d+vrml`], [`x3dz`, `model/x3d+xml`], [`x32`, `application/x-authorware-bin`], [`x_b`, `model/vnd.parasolid.transmit.binary`], [`x_t`, `model/vnd.parasolid.transmit.text`], [`xaml`, `application/xaml+xml`], [`xap`, `application/x-silverlight-app`], [`xar`, `application/vnd.xara`], [`xav`, `application/xcap-att+xml`], [`xbap`, `application/x-ms-xbap`], [`xbd`, `application/vnd.fujixerox.docuworks.binder`], [`xbm`, `image/x-xbitmap`], [`xca`, `application/xcap-caps+xml`], [`xcs`, `application/calendar+xml`], [`xdf`, `application/xcap-diff+xml`], [`xdm`, `application/vnd.syncml.dm+xml`], [`xdp`, `application/vnd.adobe.xdp+xml`], [`xdssc`, `application/dssc+xml`], [`xdw`, `application/vnd.fujixerox.docuworks`], [`xel`, `application/xcap-el+xml`], [`xenc`, `application/xenc+xml`], [`xer`, `application/patch-ops-error+xml`], [`xfdf`, `application/vnd.adobe.xfdf`], [`xfdl`, `application/vnd.xfdl`], [`xht`, `application/xhtml+xml`], [`xhtml`, `application/xhtml+xml`], [`xhvml`, `application/xv+xml`], [`xif`, `image/vnd.xiff`], [`xl`, `application/excel`], [`xla`, `application/vnd.ms-excel`], [`xlam`, `application/vnd.ms-excel.addin.macroEnabled.12`], [`xlc`, `application/vnd.ms-excel`], [`xlf`, `application/xliff+xml`], [`xlm`, `application/vnd.ms-excel`], [`xls`, `application/vnd.ms-excel`], [`xlsb`, `application/vnd.ms-excel.sheet.binary.macroEnabled.12`], [`xlsm`, `application/vnd.ms-excel.sheet.macroEnabled.12`], [`xlsx`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`], [`xlt`, `application/vnd.ms-excel`], [`xltm`, `application/vnd.ms-excel.template.macroEnabled.12`], [`xltx`, `application/vnd.openxmlformats-officedocument.spreadsheetml.template`], [`xlw`, `application/vnd.ms-excel`], [`xm`, `audio/xm`], [`xml`, `application/xml`], [`xns`, `application/xcap-ns+xml`], [`xo`, `application/vnd.olpc-sugar`], [`xop`, `application/xop+xml`], [`xpi`, `application/x-xpinstall`], [`xpl`, `application/xproc+xml`], [`xpm`, `image/x-xpixmap`], [`xpr`, `application/vnd.is-xpr`], [`xps`, `application/vnd.ms-xpsdocument`], [`xpw`, `application/vnd.intercon.formnet`], [`xpx`, `application/vnd.intercon.formnet`], [`xsd`, `application/xml`], [`xsl`, `application/xml`], [`xslt`, `application/xslt+xml`], [`xsm`, `application/vnd.syncml+xml`], [`xspf`, `application/xspf+xml`], [`xul`, `application/vnd.mozilla.xul+xml`], [`xvm`, `application/xv+xml`], [`xvml`, `application/xv+xml`], [`xwd`, `image/x-xwindowdump`], [`xyz`, `chemical/x-xyz`], [`xz`, `application/x-xz`], [`yaml`, `text/yaml`], [`yang`, `application/yang`], [`yin`, `application/yin+xml`], [`yml`, `text/yaml`], [`ymp`, `text/x-suse-ymp`], [`z`, `application/x-compress`], [`z1`, `application/x-zmachine`], [`z2`, `application/x-zmachine`], [`z3`, `application/x-zmachine`], [`z4`, `application/x-zmachine`], [`z5`, `application/x-zmachine`], [`z6`, `application/x-zmachine`], [`z7`, `application/x-zmachine`], [`z8`, `application/x-zmachine`], [`zaz`, `application/vnd.zzazz.deck+xml`], [`zip`, `application/zip`], [`zir`, `application/vnd.zul`], [`zirz`, `application/vnd.zul`], [`zmm`, `application/vnd.handheld-entertainment+xml`], [`zsh`, `text/x-scriptzsh`]]);
function Dt(e4, t2, n2) {
  let r2 = Ot(e4), { webkitRelativePath: i2 } = e4, a2 = typeof t2 == `string` ? t2 : typeof i2 == `string` && i2.length > 0 ? i2 : `./${e4.name}`;
  return typeof r2.path != `string` && kt(r2, `path`, a2), n2 !== void 0 && Object.defineProperty(r2, "handle", { value: n2, writable: false, configurable: false, enumerable: true }), kt(r2, `relativePath`, a2), r2;
}
function Ot(e4) {
  let { name: t2 } = e4;
  if (t2 && t2.lastIndexOf(`.`) !== -1 && !e4.type) {
    let n2 = t2.split(`.`).pop().toLowerCase(), r2 = Et.get(n2);
    r2 && Object.defineProperty(e4, "type", { value: r2, writable: false, configurable: false, enumerable: true });
  }
  return e4;
}
function kt(e4, t2, n2) {
  Object.defineProperty(e4, t2, { value: n2, writable: false, configurable: false, enumerable: true });
}
var At = [`.DS_Store`, `Thumbs.db`];
function jt(e4) {
  return Tt(this, void 0, void 0, function* () {
    return Pt(e4) && Mt(e4.dataTransfer) ? Lt(e4.dataTransfer, e4.type) : Nt(e4) ? Ft(e4) : Array.isArray(e4) && e4.every((e5) => `getFile` in e5 && typeof e5.getFile == `function`) ? It(e4) : [];
  });
}
function Mt(e4) {
  return Pt(e4);
}
function Nt(e4) {
  return Pt(e4) && Pt(e4.target);
}
function Pt(e4) {
  return typeof e4 == `object` && !!e4;
}
function Ft(e4) {
  return zt(e4.target.files).map((e5) => Dt(e5));
}
function It(e4) {
  return Tt(this, void 0, void 0, function* () {
    return (yield Promise.all(e4.map((e5) => e5.getFile()))).map((e5) => Dt(e5));
  });
}
function Lt(e4, t2) {
  return Tt(this, void 0, void 0, function* () {
    if (e4.items) {
      let n2 = zt(e4.items).filter((e5) => e5.kind === `file`);
      return t2 === `drop` ? Rt(Vt(yield Promise.all(n2.map(Bt)))) : n2;
    }
    return Rt(zt(e4.files).map((e5) => Dt(e5)));
  });
}
function Rt(e4) {
  return e4.filter((e5) => At.indexOf(e5.name) === -1);
}
function zt(e4) {
  if (e4 === null) return [];
  let t2 = [];
  for (let n2 = 0; n2 < e4.length; n2++) {
    let r2 = e4[n2];
    t2.push(r2);
  }
  return t2;
}
function Bt(e4) {
  if (typeof e4.webkitGetAsEntry != `function`) return Ht(e4);
  let t2 = e4.webkitGetAsEntry();
  return t2 && t2.isDirectory ? Wt(t2) : Ht(e4, t2);
}
function Vt(e4) {
  return e4.reduce((e5, t2) => [...e5, ...Array.isArray(t2) ? Vt(t2) : [t2]], []);
}
function Ht(e4, t2) {
  return Tt(this, void 0, void 0, function* () {
    if (globalThis.isSecureContext && typeof e4.getAsFileSystemHandle == `function`) {
      let t3 = yield e4.getAsFileSystemHandle();
      if (t3 === null) throw Error(`${e4} is not a File`);
      if (t3 !== void 0) {
        let e5 = yield t3.getFile();
        return e5.handle = t3, Dt(e5);
      }
    }
    let n2 = e4.getAsFile();
    if (!n2) throw Error(`${e4} is not a File`);
    return Dt(n2, t2?.fullPath ?? void 0);
  });
}
function Ut(e4) {
  return Tt(this, void 0, void 0, function* () {
    return e4.isDirectory ? Wt(e4) : Gt(e4);
  });
}
function Wt(e4) {
  let t2 = e4.createReader();
  return new Promise((e5, n2) => {
    let r2 = [];
    function i2() {
      t2.readEntries((t3) => Tt(this, void 0, void 0, function* () {
        if (t3.length) {
          let e6 = Promise.all(t3.map(Ut));
          r2.push(e6), i2();
        } else try {
          e5(yield Promise.all(r2));
        } catch (e6) {
          n2(e6);
        }
      }), (e6) => {
        n2(e6);
      });
    }
    i2();
  });
}
function Gt(e4) {
  return Tt(this, void 0, void 0, function* () {
    return new Promise((t2, n2) => {
      e4.file((n3) => {
        t2(Dt(n3, e4.fullPath));
      }, (e5) => {
        n2(e5);
      });
    });
  });
}
var Kt = o(((e4) => {
  e4.__esModule = true, e4.default = function(e5, t2) {
    if (e5 && t2) {
      var n2 = Array.isArray(t2) ? t2 : t2.split(`,`);
      if (n2.length === 0) return true;
      var r2 = e5.name || ``, i2 = (e5.type || ``).toLowerCase(), a2 = i2.replace(/\/.*$/, ``);
      return n2.some(function(e6) {
        var t3 = e6.trim().toLowerCase();
        return t3.charAt(0) === `.` ? r2.toLowerCase().endsWith(t3) : t3.endsWith(`/*`) ? a2 === t3.replace(/\/.*$/, ``) : i2 === t3;
      });
    }
    return true;
  };
})), I = c(wt()), qt = c(Kt());
function Jt(e4) {
  return Zt(e4) || Xt(e4) || rn(e4) || Yt();
}
function Yt() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xt(e4) {
  if (typeof Symbol < `u` && e4[Symbol.iterator] != null || e4[`@@iterator`] != null) return Array.from(e4);
}
function Zt(e4) {
  if (Array.isArray(e4)) return an(e4);
}
function Qt(e4, t2) {
  var n2 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e4);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e4, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function $t(e4) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? Qt(Object(n2), true).forEach(function(t3) {
      en(e4, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n2)) : Qt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e4, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e4;
}
function en(e4, t2, n2) {
  return t2 in e4 ? Object.defineProperty(e4, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e4[t2] = n2, e4;
}
function tn(e4, t2) {
  return sn(e4) || on(e4, t2) || rn(e4, t2) || nn();
}
function nn() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rn(e4, t2) {
  if (e4) {
    if (typeof e4 == `string`) return an(e4, t2);
    var n2 = Object.prototype.toString.call(e4).slice(8, -1);
    if (n2 === `Object` && e4.constructor && (n2 = e4.constructor.name), n2 === `Map` || n2 === `Set`) return Array.from(e4);
    if (n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return an(e4, t2);
  }
}
function an(e4, t2) {
  (t2 == null || t2 > e4.length) && (t2 = e4.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e4[n2];
  return r2;
}
function on(e4, t2) {
  var n2 = e4 == null ? null : typeof Symbol < `u` && e4[Symbol.iterator] || e4[`@@iterator`];
  if (n2 != null) {
    var r2 = [], i2 = true, a2 = false, o2, s2;
    try {
      for (n2 = n2.call(e4); !(i2 = (o2 = n2.next()).done) && (r2.push(o2.value), !(t2 && r2.length === t2)); i2 = true) ;
    } catch (e5) {
      a2 = true, s2 = e5;
    } finally {
      try {
        !i2 && n2.return != null && n2.return();
      } finally {
        if (a2) throw s2;
      }
    }
    return r2;
  }
}
function sn(e4) {
  if (Array.isArray(e4)) return e4;
}
var cn = typeof qt.default == `function` ? qt.default : qt.default.default, ln = `file-invalid-type`, un = `file-too-large`, dn = `file-too-small`, fn = `too-many-files`, pn = function() {
  var e4 = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``).split(`,`);
  return { code: ln, message: `File type must be ${e4.length > 1 ? `one of ${e4.join(`, `)}` : e4[0]}` };
}, mn = function(e4) {
  return { code: un, message: `File is larger than ${e4} ${e4 === 1 ? `byte` : `bytes`}` };
}, hn = function(e4) {
  return { code: dn, message: `File is smaller than ${e4} ${e4 === 1 ? `byte` : `bytes`}` };
}, gn = { code: fn, message: `Too many files` };
function _n(e4) {
  return e4.type === `` && typeof e4.getAsFile == `function`;
}
function vn(e4, t2) {
  var n2 = e4.type === `application/x-moz-file` || cn(e4, t2) || _n(e4);
  return [n2, n2 ? null : pn(t2)];
}
function yn(e4, t2, n2) {
  if (bn(e4.size)) {
    if (bn(t2) && bn(n2)) {
      if (e4.size > n2) return [false, mn(n2)];
      if (e4.size < t2) return [false, hn(t2)];
    } else if (bn(t2) && e4.size < t2) return [false, hn(t2)];
    else if (bn(n2) && e4.size > n2) return [false, mn(n2)];
  }
  return [true, null];
}
function bn(e4) {
  return e4 != null;
}
function xn(e4) {
  var t2 = e4.files, n2 = e4.accept, r2 = e4.minSize, i2 = e4.maxSize, a2 = e4.multiple, o2 = e4.maxFiles, s2 = e4.validator;
  return !a2 && t2.length > 1 || a2 && o2 >= 1 && t2.length > o2 ? false : t2.every(function(e5) {
    var t3 = tn(vn(e5, n2), 1)[0], a3 = tn(yn(e5, r2, i2), 1)[0], o3 = s2 ? s2(e5) : null;
    return t3 && a3 && !o3;
  });
}
function Sn(e4) {
  return typeof e4.isPropagationStopped == `function` ? e4.isPropagationStopped() : e4.cancelBubble === void 0 ? false : e4.cancelBubble;
}
function Cn(e4) {
  return e4.dataTransfer ? Array.prototype.some.call(e4.dataTransfer.types, function(e5) {
    return e5 === `Files` || e5 === `application/x-moz-file`;
  }) : !!e4.target && !!e4.target.files;
}
function wn(e4) {
  e4.preventDefault();
}
function Tn(e4) {
  return e4.indexOf(`MSIE`) !== -1 || e4.indexOf(`Trident/`) !== -1;
}
function En(e4) {
  return e4.indexOf(`Edge/`) !== -1;
}
function Dn() {
  var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Tn(e4) || En(e4);
}
function On() {
  var e4 = [...arguments];
  return function(t2) {
    var n2 = [...arguments].slice(1);
    return e4.some(function(e5) {
      return !Sn(t2) && e5 && e5.apply(void 0, [t2].concat(n2)), Sn(t2);
    });
  };
}
function kn() {
  return `showOpenFilePicker` in window;
}
function An(e4) {
  return bn(e4) ? [{ description: `Files`, accept: Object.entries(e4).filter(function(e5) {
    var t2 = tn(e5, 2), n2 = t2[0], r2 = t2[1], i2 = true;
    return Pn(n2) || (console.warn(`Skipped "${n2}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i2 = false), (!Array.isArray(r2) || !r2.every(Fn)) && (console.warn(`Skipped "${n2}" because an invalid file extension was provided.`), i2 = false), i2;
  }).reduce(function(e5, t2) {
    var n2 = tn(t2, 2), r2 = n2[0], i2 = n2[1];
    return $t($t({}, e5), {}, en({}, r2, i2));
  }, {}) }] : e4;
}
function jn(e4) {
  if (bn(e4)) return Object.entries(e4).reduce(function(e5, t2) {
    var n2 = tn(t2, 2), r2 = n2[0], i2 = n2[1];
    return [].concat(Jt(e5), [r2], Jt(i2));
  }, []).filter(function(e5) {
    return Pn(e5) || Fn(e5);
  }).join(`,`);
}
function Mn(e4) {
  return e4 instanceof DOMException && (e4.name === `AbortError` || e4.code === e4.ABORT_ERR);
}
function Nn(e4) {
  return e4 instanceof DOMException && (e4.name === `SecurityError` || e4.code === e4.SECURITY_ERR);
}
function Pn(e4) {
  return e4 === `audio/*` || e4 === `video/*` || e4 === `image/*` || e4 === `text/*` || e4 === `application/*` || /\w+\/[-+.\w]+/g.test(e4);
}
function Fn(e4) {
  return /^.*\.[\w]+$/.test(e4);
}
var In = [`children`], Ln = [`open`], Rn = [`refKey`, `role`, `onKeyDown`, `onFocus`, `onBlur`, `onClick`, `onDragEnter`, `onDragOver`, `onDragLeave`, `onDrop`], zn = [`refKey`, `onChange`, `onClick`];
function Bn(e4) {
  return Un(e4) || Hn(e4) || Kn(e4) || Vn();
}
function Vn() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hn(e4) {
  if (typeof Symbol < `u` && e4[Symbol.iterator] != null || e4[`@@iterator`] != null) return Array.from(e4);
}
function Un(e4) {
  if (Array.isArray(e4)) return qn(e4);
}
function Wn(e4, t2) {
  return Yn(e4) || Jn(e4, t2) || Kn(e4, t2) || Gn();
}
function Gn() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kn(e4, t2) {
  if (e4) {
    if (typeof e4 == `string`) return qn(e4, t2);
    var n2 = Object.prototype.toString.call(e4).slice(8, -1);
    if (n2 === `Object` && e4.constructor && (n2 = e4.constructor.name), n2 === `Map` || n2 === `Set`) return Array.from(e4);
    if (n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return qn(e4, t2);
  }
}
function qn(e4, t2) {
  (t2 == null || t2 > e4.length) && (t2 = e4.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e4[n2];
  return r2;
}
function Jn(e4, t2) {
  var n2 = e4 == null ? null : typeof Symbol < `u` && e4[Symbol.iterator] || e4[`@@iterator`];
  if (n2 != null) {
    var r2 = [], i2 = true, a2 = false, o2, s2;
    try {
      for (n2 = n2.call(e4); !(i2 = (o2 = n2.next()).done) && (r2.push(o2.value), !(t2 && r2.length === t2)); i2 = true) ;
    } catch (e5) {
      a2 = true, s2 = e5;
    } finally {
      try {
        !i2 && n2.return != null && n2.return();
      } finally {
        if (a2) throw s2;
      }
    }
    return r2;
  }
}
function Yn(e4) {
  if (Array.isArray(e4)) return e4;
}
function Xn(e4, t2) {
  var n2 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e4);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e4, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function L(e4) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? Xn(Object(n2), true).forEach(function(t3) {
      Zn(e4, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n2)) : Xn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e4, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e4;
}
function Zn(e4, t2, n2) {
  return t2 in e4 ? Object.defineProperty(e4, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e4[t2] = n2, e4;
}
function Qn(e4, t2) {
  if (e4 == null) return {};
  var n2 = $n(e4, t2), r2, i2;
  if (Object.getOwnPropertySymbols) {
    var a2 = Object.getOwnPropertySymbols(e4);
    for (i2 = 0; i2 < a2.length; i2++) r2 = a2[i2], !(t2.indexOf(r2) >= 0) && Object.prototype.propertyIsEnumerable.call(e4, r2) && (n2[r2] = e4[r2]);
  }
  return n2;
}
function $n(e4, t2) {
  if (e4 == null) return {};
  var n2 = {}, r2 = Object.keys(e4), i2, a2;
  for (a2 = 0; a2 < r2.length; a2++) i2 = r2[a2], !(t2.indexOf(i2) >= 0) && (n2[i2] = e4[i2]);
  return n2;
}
var er = (0, _.forwardRef)(function(e4, t2) {
  var n2 = e4.children, r2 = rr(Qn(e4, In)), i2 = r2.open, a2 = Qn(r2, Ln);
  return (0, _.useImperativeHandle)(t2, function() {
    return { open: i2 };
  }, [i2]), _.createElement(_.Fragment, null, n2(L(L({}, a2), {}, { open: i2 })));
});
er.displayName = `Dropzone`;
var tr = { disabled: false, getFilesFromEvent: jt, maxSize: 1 / 0, minSize: 0, multiple: true, maxFiles: 0, preventDropOnDocument: true, noClick: false, noKeyboard: false, noDrag: false, noDragEventsBubbling: false, validator: null, useFsAccessApi: false, autoFocus: false };
er.defaultProps = tr, er.propTypes = { children: I.default.func, accept: I.default.objectOf(I.default.arrayOf(I.default.string)), multiple: I.default.bool, preventDropOnDocument: I.default.bool, noClick: I.default.bool, noKeyboard: I.default.bool, noDrag: I.default.bool, noDragEventsBubbling: I.default.bool, minSize: I.default.number, maxSize: I.default.number, maxFiles: I.default.number, disabled: I.default.bool, getFilesFromEvent: I.default.func, onFileDialogCancel: I.default.func, onFileDialogOpen: I.default.func, useFsAccessApi: I.default.bool, autoFocus: I.default.bool, onDragEnter: I.default.func, onDragLeave: I.default.func, onDragOver: I.default.func, onDrop: I.default.func, onDropAccepted: I.default.func, onDropRejected: I.default.func, onError: I.default.func, validator: I.default.func };
var nr = { isFocused: false, isFileDialogActive: false, isDragActive: false, isDragAccept: false, isDragReject: false, isDragGlobal: false, acceptedFiles: [], fileRejections: [] };
function rr() {
  var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t2 = L(L({}, tr), e4), n2 = t2.accept, r2 = t2.disabled, i2 = t2.getFilesFromEvent, a2 = t2.maxSize, o2 = t2.minSize, s2 = t2.multiple, c2 = t2.maxFiles, l2 = t2.onDragEnter, u2 = t2.onDragLeave, d2 = t2.onDragOver, f2 = t2.onDrop, p2 = t2.onDropAccepted, m2 = t2.onDropRejected, h2 = t2.onFileDialogCancel, g2 = t2.onFileDialogOpen, v2 = t2.useFsAccessApi, y2 = t2.autoFocus, b2 = t2.preventDropOnDocument, x2 = t2.noClick, ee2 = t2.noKeyboard, S2 = t2.noDrag, C2 = t2.noDragEventsBubbling, w2 = t2.onError, te2 = t2.validator, ne2 = (0, _.useMemo)(function() {
    return jn(n2);
  }, [n2]), T2 = (0, _.useMemo)(function() {
    return An(n2);
  }, [n2]), re2 = (0, _.useMemo)(function() {
    return typeof g2 == `function` ? g2 : ar;
  }, [g2]), ie2 = (0, _.useMemo)(function() {
    return typeof h2 == `function` ? h2 : ar;
  }, [h2]), E2 = (0, _.useRef)(null), ae2 = (0, _.useRef)(null), oe2 = Wn((0, _.useReducer)(ir, nr), 2), se2 = oe2[0], D2 = oe2[1], O2 = se2.isFocused, k2 = se2.isFileDialogActive, A2 = (0, _.useRef)(typeof window < `u` && window.isSecureContext && v2 && kn()), ce2 = function() {
    !A2.current && k2 && setTimeout(function() {
      ae2.current && (ae2.current.files.length || (D2({ type: `closeDialog` }), ie2()));
    }, 300);
  };
  (0, _.useEffect)(function() {
    return window.addEventListener(`focus`, ce2, false), function() {
      window.removeEventListener(`focus`, ce2, false);
    };
  }, [ae2, k2, ie2, A2]);
  var le2 = (0, _.useRef)([]), ue2 = (0, _.useRef)([]), de2 = function(e5) {
    E2.current && E2.current.contains(e5.target) || (e5.preventDefault(), le2.current = []);
  };
  (0, _.useEffect)(function() {
    return b2 && (document.addEventListener(`dragover`, wn, false), document.addEventListener(`drop`, de2, false)), function() {
      b2 && (document.removeEventListener(`dragover`, wn), document.removeEventListener(`drop`, de2));
    };
  }, [E2, b2]), (0, _.useEffect)(function() {
    var e5 = function(e6) {
      ue2.current = [].concat(Bn(ue2.current), [e6.target]), Cn(e6) && D2({ isDragGlobal: true, type: `setDragGlobal` });
    }, t3 = function(e6) {
      ue2.current = ue2.current.filter(function(t4) {
        return t4 !== e6.target && t4 !== null;
      }), !(ue2.current.length > 0) && D2({ isDragGlobal: false, type: `setDragGlobal` });
    }, n3 = function() {
      ue2.current = [], D2({ isDragGlobal: false, type: `setDragGlobal` });
    }, r3 = function() {
      ue2.current = [], D2({ isDragGlobal: false, type: `setDragGlobal` });
    };
    return document.addEventListener(`dragenter`, e5, false), document.addEventListener(`dragleave`, t3, false), document.addEventListener(`dragend`, n3, false), document.addEventListener(`drop`, r3, false), function() {
      document.removeEventListener(`dragenter`, e5), document.removeEventListener(`dragleave`, t3), document.removeEventListener(`dragend`, n3), document.removeEventListener(`drop`, r3);
    };
  }, [E2]), (0, _.useEffect)(function() {
    return !r2 && y2 && E2.current && E2.current.focus(), function() {
    };
  }, [E2, y2, r2]);
  var j2 = (0, _.useCallback)(function(e5) {
    w2 ? w2(e5) : console.error(e5);
  }, [w2]), fe2 = (0, _.useCallback)(function(e5) {
    e5.preventDefault(), e5.persist(), Te2(e5), le2.current = [].concat(Bn(le2.current), [e5.target]), Cn(e5) && Promise.resolve(i2(e5)).then(function(t3) {
      if (!(Sn(e5) && !C2)) {
        var n3 = t3.length, r3 = n3 > 0 && xn({ files: t3, accept: ne2, minSize: o2, maxSize: a2, multiple: s2, maxFiles: c2, validator: te2 });
        D2({ isDragAccept: r3, isDragReject: n3 > 0 && !r3, isDragActive: true, type: `setDraggedFiles` }), l2 && l2(e5);
      }
    }).catch(function(e6) {
      return j2(e6);
    });
  }, [i2, l2, j2, C2, ne2, o2, a2, s2, c2, te2]), pe2 = (0, _.useCallback)(function(e5) {
    e5.preventDefault(), e5.persist(), Te2(e5);
    var t3 = Cn(e5);
    if (t3 && e5.dataTransfer) try {
      e5.dataTransfer.dropEffect = `copy`;
    } catch {
    }
    return t3 && d2 && d2(e5), false;
  }, [d2, C2]), me2 = (0, _.useCallback)(function(e5) {
    e5.preventDefault(), e5.persist(), Te2(e5);
    var t3 = le2.current.filter(function(e6) {
      return E2.current && E2.current.contains(e6);
    }), n3 = t3.indexOf(e5.target);
    n3 !== -1 && t3.splice(n3, 1), le2.current = t3, !(t3.length > 0) && (D2({ type: `setDraggedFiles`, isDragActive: false, isDragAccept: false, isDragReject: false }), Cn(e5) && u2 && u2(e5));
  }, [E2, u2, C2]), he2 = (0, _.useCallback)(function(e5, t3) {
    var n3 = [], r3 = [];
    e5.forEach(function(e6) {
      var t4 = Wn(vn(e6, ne2), 2), i3 = t4[0], s3 = t4[1], c3 = Wn(yn(e6, o2, a2), 2), l3 = c3[0], u3 = c3[1], d3 = te2 ? te2(e6) : null;
      if (i3 && l3 && !d3) n3.push(e6);
      else {
        var f3 = [s3, u3];
        d3 && (f3 = f3.concat(d3)), r3.push({ file: e6, errors: f3.filter(function(e7) {
          return e7;
        }) });
      }
    }), (!s2 && n3.length > 1 || s2 && c2 >= 1 && n3.length > c2) && (n3.forEach(function(e6) {
      r3.push({ file: e6, errors: [gn] });
    }), n3.splice(0)), D2({ acceptedFiles: n3, fileRejections: r3, type: `setFiles` }), f2 && f2(n3, r3, t3), r3.length > 0 && m2 && m2(r3, t3), n3.length > 0 && p2 && p2(n3, t3);
  }, [D2, s2, ne2, o2, a2, c2, f2, p2, m2, te2]), ge2 = (0, _.useCallback)(function(e5) {
    e5.preventDefault(), e5.persist(), Te2(e5), le2.current = [], Cn(e5) && Promise.resolve(i2(e5)).then(function(t3) {
      Sn(e5) && !C2 || he2(t3, e5);
    }).catch(function(e6) {
      return j2(e6);
    }), D2({ type: `reset` });
  }, [i2, he2, j2, C2]), _e4 = (0, _.useCallback)(function() {
    if (A2.current) {
      D2({ type: `openDialog` }), re2();
      var e5 = { multiple: s2, types: T2 };
      window.showOpenFilePicker(e5).then(function(e6) {
        return i2(e6);
      }).then(function(e6) {
        he2(e6, null), D2({ type: `closeDialog` });
      }).catch(function(e6) {
        Mn(e6) ? (ie2(e6), D2({ type: `closeDialog` })) : Nn(e6) ? (A2.current = false, ae2.current ? (ae2.current.value = null, ae2.current.click()) : j2(Error(`Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.`))) : j2(e6);
      });
      return;
    }
    ae2.current && (D2({ type: `openDialog` }), re2(), ae2.current.value = null, ae2.current.click());
  }, [D2, re2, ie2, v2, he2, j2, T2, s2]), ve2 = (0, _.useCallback)(function(e5) {
    !E2.current || !E2.current.isEqualNode(e5.target) || (e5.key === ` ` || e5.key === `Enter` || e5.keyCode === 32 || e5.keyCode === 13) && (e5.preventDefault(), _e4());
  }, [E2, _e4]), ye2 = (0, _.useCallback)(function() {
    D2({ type: `focus` });
  }, []), be2 = (0, _.useCallback)(function() {
    D2({ type: `blur` });
  }, []), xe2 = (0, _.useCallback)(function() {
    x2 || (Dn() ? setTimeout(_e4, 0) : _e4());
  }, [x2, _e4]), Se2 = function(e5) {
    return r2 ? null : e5;
  }, Ce2 = function(e5) {
    return ee2 ? null : Se2(e5);
  }, we2 = function(e5) {
    return S2 ? null : Se2(e5);
  }, Te2 = function(e5) {
    C2 && e5.stopPropagation();
  }, Ee2 = (0, _.useMemo)(function() {
    return function() {
      var e5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t3 = e5.refKey, n3 = t3 === void 0 ? `ref` : t3, i3 = e5.role, a3 = e5.onKeyDown, o3 = e5.onFocus, s3 = e5.onBlur, c3 = e5.onClick, l3 = e5.onDragEnter, u3 = e5.onDragOver, d3 = e5.onDragLeave, f3 = e5.onDrop, p3 = Qn(e5, Rn);
      return L(L(Zn({ onKeyDown: Ce2(On(a3, ve2)), onFocus: Ce2(On(o3, ye2)), onBlur: Ce2(On(s3, be2)), onClick: Se2(On(c3, xe2)), onDragEnter: we2(On(l3, fe2)), onDragOver: we2(On(u3, pe2)), onDragLeave: we2(On(d3, me2)), onDrop: we2(On(f3, ge2)), role: typeof i3 == `string` && i3 !== `` ? i3 : `presentation` }, n3, E2), !r2 && !ee2 ? { tabIndex: 0 } : {}), p3);
    };
  }, [E2, ve2, ye2, be2, xe2, fe2, pe2, me2, ge2, ee2, S2, r2]), M2 = (0, _.useCallback)(function(e5) {
    e5.stopPropagation();
  }, []), De2 = (0, _.useMemo)(function() {
    return function() {
      var e5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t3 = e5.refKey, n3 = t3 === void 0 ? `ref` : t3, r3 = e5.onChange, i3 = e5.onClick, a3 = Qn(e5, zn);
      return L(L({}, Zn({ accept: ne2, multiple: s2, type: `file`, style: { border: 0, clip: `rect(0, 0, 0, 0)`, clipPath: `inset(50%)`, height: `1px`, margin: `0 -1px -1px 0`, overflow: `hidden`, padding: 0, position: `absolute`, width: `1px`, whiteSpace: `nowrap` }, onChange: Se2(On(r3, ge2)), onClick: Se2(On(i3, M2)), tabIndex: -1 }, n3, ae2)), a3);
    };
  }, [ae2, n2, s2, ge2, r2]);
  return L(L({}, se2), {}, { isFocused: O2 && !r2, getRootProps: Ee2, getInputProps: De2, rootRef: E2, inputRef: ae2, open: Se2(_e4) });
}
function ir(e4, t2) {
  switch (t2.type) {
    case `focus`:
      return L(L({}, e4), {}, { isFocused: true });
    case `blur`:
      return L(L({}, e4), {}, { isFocused: false });
    case `openDialog`:
      return L(L({}, nr), {}, { isFileDialogActive: true });
    case `closeDialog`:
      return L(L({}, e4), {}, { isFileDialogActive: false });
    case `setDraggedFiles`:
      return L(L({}, e4), {}, { isDragActive: t2.isDragActive, isDragAccept: t2.isDragAccept, isDragReject: t2.isDragReject });
    case `setFiles`:
      return L(L({}, e4), {}, { acceptedFiles: t2.acceptedFiles, fileRejections: t2.fileRejections, isDragReject: false });
    case `setDragGlobal`:
      return L(L({}, e4), {}, { isDragGlobal: t2.isDragGlobal });
    case `reset`:
      return L({}, nr);
    default:
      return e4;
  }
}
function ar() {
}
var or = { dropzone: `_dropzone_ainap_1`, active: `_active_ainap_12` };
function sr({ dropActiveText: e4 = `Drop to submit...`, dropText: t2 = `Drag and drop a file here, or click to select a file`, multiple: n2, onFile: r2, onRejectedFiles: i2 }) {
  let { getRootProps: a2, getInputProps: o2, isDragActive: s2 } = rr({ onDrop: (e5, t3) => {
    cr(e5, r2, n2), t3.length !== 0 && (i2 ? i2(t3) : t3.forEach((e6) => {
      console.error(`File ${e6.file.name} was rejected. Reasons: ${e6.errors.map((e7) => e7.message).join(`, `)}`);
    }));
  }, multiple: n2, preventDropOnDocument: true });
  return (0, w.jsxs)(`div`, { ...a2(), className: `${or.dropzone} ${s2 ? or.active : ``}`, "data-testid": `file-dropzone`, children: [(0, w.jsx)(`input`, { ...o2() }), (0, w.jsx)(`label`, { children: s2 ? e4 : t2 })] });
}
function cr(e4, t2, n2 = false) {
  if (!(!e4 || e4.length === 0)) {
    if (!n2) {
      let n3 = e4.find((e5) => e5);
      if (!n3) return;
      t2(n3);
      return;
    }
    e4.forEach((e5) => t2(e5));
  }
}
function lr() {
  let e4 = (0, _.useRef)(null), [t2, n2] = (0, _.useState)(null), r2 = se(t2);
  return (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(sr, { onFile: (0, _.useCallback)(async (t3) => {
    e4.current && (e4.current.value = `Decoding...`), n2(null);
    try {
      let { result: r3 } = await Re.decode(t3), i2 = dt.fromString(r3);
      console.log(`Decoded document:`, i2), e4.current && (e4.current.value = r3), n2({ data: r3, filename: `${t3.name.replace(/\.sii$/i, ``)} - decoded.sii`, type: `text/plain` });
    } catch (t4) {
      e4.current && (e4.current.value = `Error: ${t4 instanceof Error ? t4.message : String(t4)}

Please check the console for more details.
`), console.error(t4);
    }
  }, []) }), (0, w.jsx)(`textarea`, { id: `output`, rows: 20, ref: e4, "data-testid": `file-display`, spellCheck: `false`, readOnly: true }), (0, w.jsx)(`div`, { children: (0, w.jsx)(`a`, { ...r2, "data-testid": `file-download`, children: `Download decoded file` }) })] });
}
var ur = { panel: `_panel_1rjdo_1`, interactive: `_interactive_1rjdo_20`, toneNeutral: `_toneNeutral_1rjdo_32`, toneSuccess: `_toneSuccess_1rjdo_38`, toneDanger: `_toneDanger_1rjdo_44` };
function dr(e4) {
  let { as: t2, children: n2, className: r2, interactive: i2 = false, tone: a2 = `neutral`, ...o2 } = e4;
  return (0, w.jsx)(t2 ?? `section`, { className: [ur.panel, ur[`tone${fr(a2)}`], i2 ? ur.interactive : ``, r2 ?? ``].filter(Boolean).join(` `), ...o2, children: n2 });
}
function fr(e4) {
  return e4.charAt(0).toUpperCase() + e4.slice(1);
}
var pr = { card: `_card_ox1ag_1`, header: `_header_ox1ag_7`, icon: `_icon_ox1ag_13`, body: `_body_ox1ag_27`, title: `_title_ox1ag_34`, message: `_message_ox1ag_41`, actions: `_actions_ox1ag_46`, button: `_button_ox1ag_51` };
function mr(e4) {
  let { actionLabel: t2 = `Try Again`, message: n2, onAction: r2, title: i2 = `Something went wrong` } = e4;
  return (0, w.jsxs)(dr, { className: pr.card, role: `alert`, "aria-live": `polite`, tone: `danger`, children: [(0, w.jsxs)(`div`, { className: pr.header, children: [(0, w.jsx)(`span`, { className: pr.icon, "aria-hidden": `true`, children: `!` }), (0, w.jsxs)(`div`, { className: pr.body, children: [(0, w.jsx)(`h2`, { className: pr.title, children: i2 }), (0, w.jsx)(`p`, { className: pr.message, children: n2 })] })] }), r2 ? (0, w.jsx)(`div`, { className: pr.actions, children: (0, w.jsx)(`button`, { type: `button`, className: pr.button, onClick: r2, children: t2 }) }) : null] });
}
var hr = `user_profile`, gr = `version`, _r = `profile_name`, vr = `brand`, yr = `mltu_modlist`, br = `_mltu.modlist`, xr = `title`, Sr = `description`, Cr = `game`, wr = `modlist_version`, Tr = `profile_version`, Er = `game_version`, Dr = `active_mods`, Or = [`peterbilt`, `kenworth`, `freightliner`, `international`, `westernstar`, `western_star`, `volvo_vnl`, `volvo_vnr`], kr = 1;
function Ar(e4) {
  return { title: ``, description: ``, gameVersion: ``, game: `ets2`, activeMods: [], profileVersion: 0, modlistVersion: kr, source: e4 };
}
var jr = { applyModlistToProfile: (e4, t2) => {
  let n2 = e4.findUnitNamesByClass(hr), r2 = n2[0];
  if (!r2) throw Error(`Unable to find "${hr}" in file. ModList cannot be applied.`);
  if (n2.length !== 1) throw Error(`This file contains more than one "${hr}". Expected exactly one profile unit.`);
  let i2 = e4.getUnit(r2);
  if (!i2) throw Error(`User profile could not be read, even after it was found. ModList cannot be applied.`);
  let a2 = i2.getLiteralAttribute(gr, M.isNumberLiteral)?.value;
  if (typeof a2 != `number`) throw Error(`This profile is missing a "${gr}" value. Unable to ensure compatibility with this ModList.`);
  if (a2 !== t2.profileVersion) throw Error(`This ModList was created for profile version "${t2.profileVersion}", but this profile is version "${a2}". This may indicate incompatibilities that could lead to data loss. ModList cannot be applied.`);
  return i2.setAttribute(Mr.toAST(t2.activeMods)), e4.setUnit(i2), e4;
}, toModListDocument: (e4) => {
  let t2 = A.unit(br, yr, [A.literalAttribute(wr, A.numberLiteral(e4.modlistVersion)), A.literalAttribute(xr, A.stringLiteral(e4.title)), A.literalAttribute(Sr, A.stringLiteral(e4.description)), A.literalAttribute(Cr, A.stringLiteral(e4.game)), A.literalAttribute(Er, A.stringLiteral(e4.gameVersion)), A.literalAttribute(Tr, A.numberLiteral(e4.profileVersion)), Mr.toAST(e4.activeMods)]);
  return dt.from(A.file([t2]));
}, fromProfileDocument: (e4) => {
  let t2 = e4.findUnitNamesByClass(hr);
  if (!t2.length) throw Error(`This profile file does not contain any "${hr}" sections.`);
  for (let n2 of t2) {
    let t3 = e4.getUnit(n2);
    if (!t3) continue;
    let r2 = t3.getFixedArrayAttribute(Dr, M.isStringLiteral)?.value;
    if (!r2) continue;
    let i2 = t3.getLiteralAttribute(gr, M.isNumberLiteral)?.value;
    if (typeof i2 != `number`) continue;
    let a2 = Ar(`profile`);
    a2.profileVersion = i2, a2.activeMods = Mr.fromStrings(r2);
    let o2 = t3.getLiteralAttribute(_r, M.isStringLiteral)?.value.trim();
    o2 && (a2.title = `${o2}'s Mods`);
    let s2 = t3.getLiteralAttribute(vr, M.isStringLiteral)?.value.trim();
    return s2 && Or.some((e5) => s2.toLowerCase().startsWith(e5)) && (a2.game = `ats`), a2;
  }
  throw Error(`Could not find a profile section that includes both "${Dr}" and a numeric "${gr}" value.`);
}, fromModListDocument: (e4) => {
  let t2 = e4.getUnit(br);
  if (!t2 || t2.className !== yr) throw Error(`Unable to find "${br}" within file. Ensure you are selecting the correct file and that it is a valid ModList.`);
  let n2 = t2.getLiteralAttribute(wr, M.isNumberLiteral)?.value;
  if (n2 !== kr) throw Error(`This ModList uses version "${n2}", but only version "${kr}" is supported.`);
  let r2 = t2.getFixedArrayAttribute(Dr, M.isStringLiteral)?.value;
  if (!r2) throw Error(`This ModList is missing a valid "${Dr}" list.`);
  let i2 = Ar(`modlist`);
  i2.activeMods = Mr.fromStrings(r2);
  let a2 = t2.getLiteralAttribute(Cr, M.isStringLiteral)?.value;
  if (a2 !== `ets2` && a2 !== `ats`) throw Error(`The game "${a2}" is not supported. Expected "ets2" or "ats".`);
  i2.game = a2;
  let o2 = t2.getLiteralAttribute(Tr, M.isNumberLiteral)?.value;
  if (typeof o2 != `number`) throw Error(`This ModList is missing a "${Tr}" value. Unable to ensure profile compatibility with this ModList.`);
  i2.profileVersion = o2;
  let s2 = t2.getLiteralAttribute(xr, M.isStringLiteral)?.value;
  s2 && (i2.title = s2);
  let c2 = t2.getLiteralAttribute(Sr, M.isStringLiteral)?.value;
  c2 && (i2.description = c2);
  let l2 = t2.getLiteralAttribute(Er, M.isStringLiteral)?.value;
  return l2 && (i2.gameVersion = l2), i2;
}, fromModListOrProfileDocument: (e4) => {
  let t2 = e4.findUnitNamesByClass(hr).length > 0, n2 = !!e4.getUnit(br);
  if (t2 && n2) throw Error(`This file contains both a user profile and a ModList unit. Unable to determine which to read. Please ensure you are selecting the correct file.`);
  if (t2) return jr.fromProfileDocument(e4);
  if (n2) return jr.fromModListDocument(e4);
  throw Error(`This file does not appear to be a valid Profile or ModList. Ensure you are selecting the correct file and that it is properly formatted.`);
} }, Mr = { fromStrings: (e4) => e4.map((e5) => {
  let [t2, ...n2] = e5.split(`|`), r2 = n2.join(`|`);
  if (!t2) throw Error(`A mod entry "${e5}" is not in the expected format "mod_id|mod_title".`);
  return { id: t2, title: r2 };
}).reverse(), toAST: (e4) => A.fixedArrayAttribute(Dr, e4.length, [...e4].reverse().map((e5, t2) => A.fixedArrayElement(Dr, t2, A.stringLiteral(`${e5.id}|${e5.title}`)))) }, Nr = { accordion: `_accordion_2f4ld_1`, summary: `_summary_2f4ld_12`, content: `_content_2f4ld_47` };
function Pr(e4) {
  let { title: t2, children: n2 } = e4;
  return (0, w.jsxs)(`details`, { className: `${Nr.accordion} ${e4.className || ``}`, children: [(0, w.jsx)(`summary`, { className: Nr.summary, children: t2 }), (0, w.jsx)(`div`, { className: Nr.content, children: n2 })] });
}
var Fr = { container: `_container_1jhqt_1`, header: `_header_1jhqt_7`, titleBlock: `_titleBlock_1jhqt_17`, subtitleBlock: `_subtitleBlock_1jhqt_21`, title: `_title_1jhqt_17`, description: `_description_1jhqt_34`, subtitle: `_subtitle_1jhqt_21`, chip: `_chip_1jhqt_48`, modsHeadingRow: `_modsHeadingRow_1jhqt_63`, modsHeading: `_modsHeading_1jhqt_63`, modsList: `_modsList_1jhqt_78`, emptyState: `_emptyState_1jhqt_86` }, Ir = { modItem: `_modItem_1d2x6_1`, draggable: `_draggable_1d2x6_13`, modItemDragging: `_modItemDragging_1d2x6_21`, modItemDropTarget: `_modItemDropTarget_1d2x6_25`, modTitle: `_modTitle_1d2x6_30`, modId: `_modId_1d2x6_36` };
function Lr(e4) {
  let { as: t2 = `li`, mod: n2, index: r2, draggable: i2, isDragging: a2, isDropTarget: o2, onDragStart: s2, onDragEnter: c2, onDragOver: l2, onDrop: u2, onDragEnd: d2 } = e4, f2 = (0, _.useCallback)((e5) => {
    s2?.(r2, e5);
  }, [r2, s2]), p2 = (0, _.useCallback)(() => {
    c2?.(r2);
  }, [r2, c2]), m2 = (0, _.useCallback)((e5) => {
    l2?.(r2, e5);
  }, [r2, l2]), h2 = (0, _.useCallback)((e5) => {
    u2?.(r2, e5);
  }, [r2, u2]);
  return (0, w.jsxs)(t2, { className: [Ir.modItem, i2 ? Ir.draggable : ``, a2 ? Ir.modItemDragging : ``, o2 ? Ir.modItemDropTarget : ``].join(` `), draggable: i2, onDragStart: f2, onDragEnter: p2, onDragOver: m2, onDrop: h2, onDragEnd: d2, children: [(0, w.jsx)(`span`, { className: Ir.modTitle, children: n2.title || `Untitled mod` }), (0, w.jsx)(`span`, { className: Ir.modId, children: n2.id })] });
}
function Rr(e4) {
  let { modList: t2 } = e4, { title: n2, description: r2, game: i2, gameVersion: a2, activeMods: o2 } = t2, s2 = n2?.trim(), c2 = r2?.trim(), l2 = a2?.trim(), u2 = i2 === `ets2` ? `Euro Truck Simulator 2` : `American Truck Simulator`;
  return (0, w.jsxs)(dr, { className: Fr.container, "aria-label": `Modlist details`, children: [(0, w.jsxs)(`header`, { className: Fr.header, children: [(0, w.jsx)(`div`, { className: Fr.titleBlock, children: (0, w.jsx)(`h2`, { className: Fr.title, children: s2 }) }), (0, w.jsx)(`div`, { className: Fr.subtitleBlock, children: (0, w.jsx)(`p`, { className: Fr.subtitle, children: [u2, l2].filter(Boolean).join(` \xB7 `) }) }), (0, w.jsx)(`p`, { className: Fr.description, children: c2 })] }), (0, w.jsx)(Pr, { title: (0, w.jsxs)(`div`, { className: Fr.modsHeadingRow, children: [(0, w.jsx)(`h3`, { className: Fr.modsHeading, children: `Installed Mods` }), (0, w.jsx)(`span`, { className: Fr.chip, children: o2.length })] }), children: o2.length ? (0, w.jsx)(`ul`, { className: Fr.modsList, children: o2.map((e5) => (0, w.jsx)(Lr, { mod: e5 }, e5.id)) }) : (0, w.jsx)(`p`, { className: Fr.emptyState, children: `No active mods found in this modlist.` }) })] });
}
var R = { container: `_container_cji3z_1`, header: `_header_cji3z_7`, title: `_title_cji3z_13`, subtitle: `_subtitle_cji3z_20`, form: `_form_cji3z_26`, field: `_field_cji3z_31`, label: `_label_cji3z_36`, input: `_input_cji3z_42`, textarea: `_textarea_cji3z_43`, twoCol: `_twoCol_cji3z_64`, fieldset: `_fieldset_cji3z_70`, radioRow: `_radioRow_cji3z_77`, radioLabel: `_radioLabel_cji3z_82`, modsHeadingRow: `_modsHeadingRow_cji3z_90`, modsHeading: `_modsHeading_cji3z_90`, chip: `_chip_cji3z_103`, modsList: `_modsList_cji3z_118`, emptyState: `_emptyState_cji3z_126`, actionRow: `_actionRow_cji3z_135` }, zr = (e4, t2) => ({ ...e4, ...t2 });
function Br(e4) {
  let { initialModList: t2, onSubmit: n2, className: r2 } = e4, [i2, a2] = (0, _.useReducer)(zr, t2), { title: o2, description: s2, gameVersion: c2, game: l2, activeMods: u2 } = i2, [d2, f2] = (0, _.useState)(null), [p2, m2] = (0, _.useState)(null), h2 = (e5, t3) => {
    a2({ [e5]: t3 });
  }, g2 = (e5, t3) => {
    if (e5 === null || e5 === t3) {
      f2(null), m2(null);
      return;
    }
    a2({ activeMods: Vr(u2, e5, t3) }), f2(null), m2(null);
  };
  return (0, w.jsxs)(dr, { className: [R.container, r2 ?? ``].filter(Boolean).join(` `), "aria-label": `ModList details editor`, children: [(0, w.jsxs)(`header`, { className: R.header, children: [(0, w.jsx)(`h2`, { className: R.title, children: `ModList Details` }), (0, w.jsx)(`p`, { className: R.subtitle, children: `Edit metadata and reorder active mods.` })] }), (0, w.jsxs)(`form`, { className: R.form, onSubmit: (e5) => e5.preventDefault(), children: [(0, w.jsxs)(`label`, { className: R.field, children: [(0, w.jsx)(`span`, { className: R.label, children: `Title` }), (0, w.jsx)(`input`, { className: R.input, type: `text`, value: o2 ?? ``, onChange: (e5) => h2(`title`, e5.target.value), placeholder: `My convoy setup` })] }), (0, w.jsxs)(`label`, { className: R.field, children: [(0, w.jsx)(`span`, { className: R.label, children: `Description` }), (0, w.jsx)(`textarea`, { className: R.textarea, value: s2 ?? ``, onChange: (e5) => h2(`description`, e5.target.value), placeholder: `What this modlist is for, key dependencies, and notes`, rows: 4 })] }), (0, w.jsxs)(`div`, { className: R.twoCol, children: [(0, w.jsxs)(`label`, { className: R.field, children: [(0, w.jsx)(`span`, { className: R.label, children: `Game Version` }), (0, w.jsx)(`input`, { className: R.input, type: `text`, value: c2 ?? ``, onChange: (e5) => h2(`gameVersion`, e5.target.value), placeholder: `1.59` })] }), (0, w.jsxs)(`fieldset`, { className: R.fieldset, children: [(0, w.jsx)(`legend`, { className: R.label, children: `Game` }), (0, w.jsxs)(`div`, { className: R.radioRow, children: [(0, w.jsxs)(`label`, { className: R.radioLabel, children: [(0, w.jsx)(`input`, { type: `radio`, name: `game`, checked: l2 === `ets2`, onChange: () => h2(`game`, `ets2`) }), (0, w.jsx)(`span`, { children: `Euro Truck Simulator 2` })] }), (0, w.jsxs)(`label`, { className: R.radioLabel, children: [(0, w.jsx)(`input`, { type: `radio`, name: `game`, checked: l2 === `ats`, onChange: () => h2(`game`, `ats`) }), (0, w.jsx)(`span`, { children: `American Truck Simulator` })] })] })] })] })] }), (0, w.jsx)(Pr, { title: (0, w.jsxs)(`div`, { className: R.modsHeadingRow, children: [(0, w.jsx)(`span`, { className: R.modsHeading, children: `Active Mods` }), (0, w.jsx)(`span`, { className: R.chip, children: u2.length })] }), children: u2.length ? (0, w.jsx)(`ul`, { className: R.modsList, children: u2.map((e5, t3) => (0, w.jsx)(Lr, { mod: e5, draggable: true, index: t3, isDragging: d2 === t3, isDropTarget: p2 === t3, onDragStart: (e6, t4) => {
    f2(e6), t4.dataTransfer.effectAllowed = `move`, t4.dataTransfer.setData(`text/plain`, String(e6));
  }, onDragEnter: (e6) => m2(e6), onDragOver: (e6, t4) => {
    t4.preventDefault(), t4.dataTransfer.dropEffect = `move`, p2 !== e6 && m2(e6);
  }, onDrop: (e6, t4) => {
    t4.preventDefault();
    let n3 = Number.parseInt(t4.dataTransfer.getData(`text/plain`), 10);
    g2(d2 ?? (Number.isNaN(n3) ? null : n3), e6);
  }, onDragEnd: () => {
    f2(null), m2(null);
  } }, e5.id)) }) : (0, w.jsx)(`p`, { className: R.emptyState, children: `No active mods are available.` }) }), (0, w.jsx)(`div`, { className: R.actionRow, children: (0, w.jsx)(`button`, { className: R.submitButton, type: `button`, onClick: () => n2(i2), children: `Create ModList` }) })] });
}
function Vr(e4, t2, n2) {
  let r2 = [...e4], [i2] = r2.splice(t2, 1);
  return i2 && r2.splice(n2, 0, i2), r2;
}
var Hr = { card: `_card_1eda9_1`, title: `_title_1eda9_10`, message: `_message_1eda9_16` };
function Ur(e4) {
  let { modList: t2, profile: n2 } = e4, r2 = (0, _.useMemo)(() => {
    try {
      return { ok: true, fileData: { data: jr.applyModlistToProfile(n2.clone(), t2).toString(), type: `text/plain`, filename: `profile.sii` } };
    } catch (e5) {
      return { ok: false, message: e5 instanceof Error ? e5.message : `Unable to apply this ModList to your profile.` };
    }
  }, [t2, n2]), i2 = se(r2.ok ? r2.fileData : null);
  return (0, w.jsxs)(dr, { as: `button`, type: `button`, className: Hr.card, tone: r2.ok ? `success` : `danger`, interactive: true, onClick: () => {
    if (!r2.ok) return;
    let e5 = document.createElement(`a`);
    e5.href = i2.href, e5.download = i2.download ?? `profile.sii`, e5.click();
  }, disabled: !r2.ok, "aria-live": `polite`, children: [(0, w.jsx)(`span`, { className: Hr.title, children: r2.ok ? `Patch Success!` : `Cannot Apply ModList` }), (0, w.jsx)(`span`, { className: Hr.message, children: r2.ok ? (0, w.jsxs)(w.Fragment, { children: [`Click to download `, (0, w.jsx)(`code`, { children: r2.fileData.filename })] }) : r2.message })] });
}
function Wr(e4) {
  let [t2, n2] = ft(e4);
  return [(0, _.useMemo)(() => t2 ? jr.fromModListOrProfileDocument(t2) : null, [t2]), n2];
}
function Gr(e4) {
  return (0, _.useMemo)(() => {
    if (!e4) return null;
    try {
      let t2 = e4.findUnitNamesByClass(`user_profile`), n2 = t2[0];
      if (!n2) throw Error(`Unable to find "user_profile" in file.`);
      if (t2.length !== 1) throw Error(`Expected exactly one "user_profile" unit in file, but found ${t2.length}.`);
      let r2 = e4.getUnit(n2);
      if (!r2) throw Error(`Unexpectedly failed to get unit "${n2}" from document.`);
      let i2 = { companyName: ``, createdAt: ``, profileName: ``, profileVersion: -1, savedAt: `` };
      i2.profileName = r2.getLiteralAttribute(`profile_name`, M.isStringLiteral)?.value.trim() || ``, i2.companyName = r2.getLiteralAttribute(`company_name`, M.isStringLiteral)?.value.trim() || ``;
      let a2 = r2.getLiteralAttribute(`creation_time`, M.isNumberLiteral)?.value;
      i2.createdAt = new Date((a2 ?? 0) * 1e3).toLocaleDateString(`en-US`, { year: `numeric`, month: `long`, day: `numeric`, hour: `2-digit`, minute: `2-digit`, second: `2-digit`, timeZoneName: `short` });
      let o2 = r2.getLiteralAttribute(`save_time`, M.isNumberLiteral)?.value;
      return i2.savedAt = new Date((o2 ?? 0) * 1e3).toLocaleDateString(`en-US`, { year: `numeric`, month: `long`, day: `numeric`, hour: `2-digit`, minute: `2-digit`, second: `2-digit`, timeZoneName: `short` }), i2.profileVersion = r2.getLiteralAttribute(`version`, M.isNumberLiteral)?.value ?? -1, i2;
    } catch (e5) {
      let t2 = e5 instanceof Error ? e5.message : `An unknown error occurred.`;
      return console.error(`Error parsing user profile document:`, e5), { error: t2 };
    }
  }, [e4]);
}
function Kr(e4) {
  let { onBeforeRead: t2, onError: n2 } = e4 ?? {}, [r2, i2] = (0, _.useState)(null);
  return [r2, (0, _.useCallback)(async (e5) => {
    if (!e5) {
      i2(null);
      return;
    }
    try {
      t2?.();
      let { result: n3 } = await Re.decode(e5), r3 = dt.fromString(n3);
      console.log(`decoded profile`, r3), i2(r3);
    } catch (e6) {
      if (console.error(`Error decoding profile:`, e6), n2) n2(`Failed read Profile: ${e6 instanceof Error ? e6.message : String(e6)}`);
      else throw e6;
    }
  }, [t2, n2])];
}
var qr = { card: `_card_25he0_1`, summary: `_summary_25he0_7`, nameSlot: `_nameSlot_25he0_18`, name: `_name_25he0_18`, company: `_company_25he0_29`, timestamps: `_timestamps_25he0_35`, separator: `_separator_25he0_47` };
function Jr(e4) {
  let { children: t2, profile: n2 } = e4, { companyName: r2, createdAt: i2, profileName: a2, savedAt: o2 } = n2, s2 = a2?.trim() || `Unnamed profile`, c2 = r2?.trim() || `No company name set`, l2 = i2?.trim() || `Unknown`, u2 = o2?.trim() || `Unknown`;
  return (0, w.jsxs)(dr, { className: qr.card, "aria-label": `User profile details`, children: [(0, w.jsxs)(`header`, { className: qr.summary, children: [(0, w.jsx)(`div`, { className: qr.nameSlot, children: (0, w.jsx)(`h2`, { className: qr.name, children: s2 }) }), (0, w.jsx)(`p`, { className: qr.company, children: c2 }), (0, w.jsxs)(`p`, { className: qr.timestamps, children: [(0, w.jsxs)(`span`, { children: [`Created: `, l2] }), (0, w.jsx)(`span`, { className: qr.separator, "aria-hidden": `true`, children: `\u2022` }), (0, w.jsxs)(`span`, { children: [`Saved: `, u2] })] })] }), t2] });
}
function Yr() {
  let [e4, t2] = (0, _.useState)(null), n2 = (0, _.useCallback)(() => t2(null), []), [r2, i2] = Kr({ onBeforeRead: n2, onError: t2 }), a2 = Gr(r2), o2 = a2 && `error` in a2 ? a2.error : null, [s2, c2] = Wr({ onBeforeRead: n2, onError: t2 }), l2 = () => {
    t2(null), c2(null), i2(null);
  };
  return (0, w.jsxs)(w.Fragment, { children: [e4 || o2 ? (0, w.jsx)(mr, { title: `Unable to read modlist`, message: e4 || o2 || `An unknown error occurred.`, onAction: l2 }) : null, s2 ? (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(Rr, { modList: s2 }), r2 ? null : (0, w.jsx)(sr, { onFile: i2, dropText: (0, w.jsxs)(w.Fragment, { children: [`To apply this list to a profile, Drop your`, ` `, (0, w.jsx)(`code`, { children: `profile.sii` }), ` file here, or click to select a file`] }) })] }) : (0, w.jsx)(sr, { onFile: c2, dropText: (0, w.jsxs)(w.Fragment, { children: [`Drop your `, (0, w.jsx)(`code`, { children: `modlist-{ats|ets2}-{list_name}.sii` }), ` file here, or click to select a file`] }) }), s2 && r2 && a2 && !(`error` in a2) ? (0, w.jsx)(Jr, { profile: a2, children: (0, w.jsx)(Ur, { modList: s2, profile: r2 }) }) : null, (0, w.jsx)(`div`, { children: s2 ? (0, w.jsx)(`button`, { type: `button`, onClick: l2, children: `Start Over` }) : null })] });
}
function Xr() {
  let [e4, t2] = Kr(), n2 = (0, _.useMemo)(() => e4 ? jr.fromProfileDocument(e4) : null, [e4]);
  return (0, w.jsx)(`div`, { children: n2 ? (0, w.jsx)(Br, { initialModList: n2, onSubmit: (e5) => {
    let t3 = jr.toModListDocument(e5).toString(), n3 = e5.title.replace(/[^a-zA-Z0-9_-]/gi, `_`).toLowerCase();
    ae({ data: t3, fileName: `modlist-${e5.game}-${n3}.sii` });
  } }) : (0, w.jsx)(sr, { onFile: t2, dropText: (0, w.jsxs)(w.Fragment, { children: [`Drop your `, (0, w.jsx)(`code`, { children: `profile.sii` }), ` file here, or click to select a file`] }) }) });
}
var Zr = { MODLIST_APPLY: `modlist-apply`, MODLIST_CREATE: `modlist-create`, FIND_PROFILE: `find-profile`, DECODE: `decode` }, [Qr, $r] = xt(Zr, Zr.MODLIST_APPLY);
function ei() {
  let [e4, t2] = $r();
  return (0, w.jsxs)(`main`, { className: `app-shell`, children: [(0, w.jsxs)(T, { title: `SCS ModList Utility`, activeItem: e4, onChange: t2, children: [(0, w.jsx)(T.Button, { tab: Zr.MODLIST_APPLY, title: `Apply ModList` }), (0, w.jsx)(T.Button, { tab: Zr.MODLIST_CREATE, title: `Create ModList` }), (0, w.jsx)(T.Button, { tab: Zr.DECODE, title: `SII Decoder` })] }), (0, w.jsxs)(Qr.Router, { children: [(0, w.jsx)(Qr.View, { tab: Zr.MODLIST_APPLY, title: `Apply ModList`, Component: Yr }), (0, w.jsx)(Qr.View, { tab: Zr.MODLIST_CREATE, title: `Create ModList`, Component: Xr }), (0, w.jsx)(Qr.View, { tab: Zr.DECODE, title: `SII Decoder`, Component: lr })] }), (0, w.jsxs)(`p`, { className: `footer`, children: [`Your files are never uploaded to any server. Everything is processed entirely within your browser.`, (0, w.jsx)(`br`, {}), `This tool is `, (0, w.jsx)(`a`, { href: `https://github.com/uncleclapton/scs-modlists/`, children: `open source` }), `. If you encounter any issues, please report them `, (0, w.jsx)(`a`, { href: `https://github.com/uncleclapton/scs-modlists/issues`, children: `on GitHub` }), `.`, (0, w.jsx)(`br`, {}), `Forked with \u2764\uFE0F from `, (0, w.jsx)(`a`, { href: `https://github.com/fangyi-zhou/sii-decode-rs/issues`, children: `fangyi-zhou/sii-decode-rs` }), `.`] })] });
}
(0, v.createRoot)(document.getElementById(`root`)).render((0, w.jsx)(_.StrictMode, { children: (0, w.jsx)(ei, {}) }));

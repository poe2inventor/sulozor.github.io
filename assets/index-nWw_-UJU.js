(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload"))
        return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        c(u);
    new MutationObserver(u => {
        for (const m of u)
            if (m.type === "childList")
                for (const f of m.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && c(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(u) {
        const m = {};
        return u.integrity && (m.integrity = u.integrity),
        u.referrerPolicy && (m.referrerPolicy = u.referrerPolicy),
        u.crossOrigin === "use-credentials" ? m.credentials = "include" : u.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin",
        m
    }
    function c(u) {
        if (u.ep)
            return;
        u.ep = !0;
        const m = r(u);
        fetch(u.href, m)
    }
}
)();
var Cu = {
    exports: {}
}
  , Wo = {};
var wh;
function Dp() {
    if (wh)
        return Wo;
    wh = 1;
    var l = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.fragment");
    function r(c, u, m) {
        var f = null;
        if (m !== void 0 && (f = "" + m),
        u.key !== void 0 && (f = "" + u.key),
        "key"in u) {
            m = {};
            for (var y in u)
                y !== "key" && (m[y] = u[y])
        } else
            m = u;
        return u = m.ref,
        {
            $$typeof: l,
            type: c,
            key: f,
            ref: u !== void 0 ? u : null,
            props: m
        }
    }
    return Wo.Fragment = a,
    Wo.jsx = r,
    Wo.jsxs = r,
    Wo
}
var zh;
function Lp() {
    return zh || (zh = 1,
    Cu.exports = Dp()),
    Cu.exports
}
var d = Lp()
  , Tu = {
    exports: {}
}
  , Nu = {}
  , ju = {
    exports: {}
}
  , Ee = {};
var kh;
function Op() {
    if (kh)
        return Ee;
    kh = 1;
    var l = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , c = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , m = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , y = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , b = Symbol.for("react.lazy")
      , x = Symbol.for("react.activity")
      , T = Symbol.iterator;
    function O(_) {
        return _ === null || typeof _ != "object" ? null : (_ = T && _[T] || _["@@iterator"],
        typeof _ == "function" ? _ : null)
    }
    var k = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , M = Object.assign
      , w = {};
    function Y(_, A, K) {
        this.props = _,
        this.context = A,
        this.refs = w,
        this.updater = K || k
    }
    Y.prototype.isReactComponent = {},
    Y.prototype.setState = function(_, A) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, A, "setState")
    }
    ,
    Y.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate")
    }
    ;
    function $() {}
    $.prototype = Y.prototype;
    function P(_, A, K) {
        this.props = _,
        this.context = A,
        this.refs = w,
        this.updater = K || k
    }
    var X = P.prototype = new $;
    X.constructor = P,
    M(X, Y.prototype),
    X.isPureReactComponent = !0;
    var J = Array.isArray;
    function Z() {}
    var z = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , U = Object.prototype.hasOwnProperty;
    function G(_, A, K) {
        var W = K.ref;
        return {
            $$typeof: l,
            type: _,
            key: A,
            ref: W !== void 0 ? W : null,
            props: K
        }
    }
    function Q(_, A) {
        return G(_.type, A, _.props)
    }
    function ae(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === l
    }
    function oe(_) {
        var A = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + _.replace(/[=:]/g, function(K) {
            return A[K]
        })
    }
    var ie = /\/+/g;
    function se(_, A) {
        return typeof _ == "object" && _ !== null && _.key != null ? oe("" + _.key) : A.toString(36)
    }
    function ee(_) {
        switch (_.status) {
        case "fulfilled":
            return _.value;
        case "rejected":
            throw _.reason;
        default:
            switch (typeof _.status == "string" ? _.then(Z, Z) : (_.status = "pending",
            _.then(function(A) {
                _.status === "pending" && (_.status = "fulfilled",
                _.value = A)
            }, function(A) {
                _.status === "pending" && (_.status = "rejected",
                _.reason = A)
            })),
            _.status) {
            case "fulfilled":
                return _.value;
            case "rejected":
                throw _.reason
            }
        }
        throw _
    }
    function j(_, A, K, W, re) {
        var fe = typeof _;
        (fe === "undefined" || fe === "boolean") && (_ = null);
        var ce = !1;
        if (_ === null)
            ce = !0;
        else
            switch (fe) {
            case "bigint":
            case "string":
            case "number":
                ce = !0;
                break;
            case "object":
                switch (_.$$typeof) {
                case l:
                case a:
                    ce = !0;
                    break;
                case b:
                    return ce = _._init,
                    j(ce(_._payload), A, K, W, re)
                }
            }
        if (ce)
            return re = re(_),
            ce = W === "" ? "." + se(_, 0) : W,
            J(re) ? (K = "",
            ce != null && (K = ce.replace(ie, "$&/") + "/"),
            j(re, A, K, "", function(Le) {
                return Le
            })) : re != null && (ae(re) && (re = Q(re, K + (re.key == null || _ && _.key === re.key ? "" : ("" + re.key).replace(ie, "$&/") + "/") + ce)),
            A.push(re)),
            1;
        ce = 0;
        var me = W === "" ? "." : W + ":";
        if (J(_))
            for (var ge = 0; ge < _.length; ge++)
                W = _[ge],
                fe = me + se(W, ge),
                ce += j(W, A, K, fe, re);
        else if (ge = O(_),
        typeof ge == "function")
            for (_ = ge.call(_),
            ge = 0; !(W = _.next()).done; )
                W = W.value,
                fe = me + se(W, ge++),
                ce += j(W, A, K, fe, re);
        else if (fe === "object") {
            if (typeof _.then == "function")
                return j(ee(_), A, K, W, re);
            throw A = String(_),
            Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ce
    }
    function H(_, A, K) {
        if (_ == null)
            return _;
        var W = []
          , re = 0;
        return j(_, W, "", "", function(fe) {
            return A.call(K, fe, re++)
        }),
        W
    }
    function E(_) {
        if (_._status === -1) {
            var A = _._result;
            A = A(),
            A.then(function(K) {
                (_._status === 0 || _._status === -1) && (_._status = 1,
                _._result = K)
            }, function(K) {
                (_._status === 0 || _._status === -1) && (_._status = 2,
                _._result = K)
            }),
            _._status === -1 && (_._status = 0,
            _._result = A)
        }
        if (_._status === 1)
            return _._result.default;
        throw _._result
    }
    var B = typeof reportError == "function" ? reportError : function(_) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var A = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_),
                error: _
            });
            if (!window.dispatchEvent(A))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", _);
            return
        }
        console.error(_)
    }
      , le = {
        map: H,
        forEach: function(_, A, K) {
            H(_, function() {
                A.apply(this, arguments)
            }, K)
        },
        count: function(_) {
            var A = 0;
            return H(_, function() {
                A++
            }),
            A
        },
        toArray: function(_) {
            return H(_, function(A) {
                return A
            }) || []
        },
        only: function(_) {
            if (!ae(_))
                throw Error("React.Children.only expected to receive a single React element child.");
            return _
        }
    };
    return Ee.Activity = x,
    Ee.Children = le,
    Ee.Component = Y,
    Ee.Fragment = r,
    Ee.Profiler = u,
    Ee.PureComponent = P,
    Ee.StrictMode = c,
    Ee.Suspense = g,
    Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z,
    Ee.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(_) {
            return z.H.useMemoCache(_)
        }
    },
    Ee.cache = function(_) {
        return function() {
            return _.apply(null, arguments)
        }
    }
    ,
    Ee.cacheSignal = function() {
        return null
    }
    ,
    Ee.cloneElement = function(_, A, K) {
        if (_ == null)
            throw Error("The argument must be a React element, but you passed " + _ + ".");
        var W = M({}, _.props)
          , re = _.key;
        if (A != null)
            for (fe in A.key !== void 0 && (re = "" + A.key),
            A)
                !U.call(A, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && A.ref === void 0 || (W[fe] = A[fe]);
        var fe = arguments.length - 2;
        if (fe === 1)
            W.children = K;
        else if (1 < fe) {
            for (var ce = Array(fe), me = 0; me < fe; me++)
                ce[me] = arguments[me + 2];
            W.children = ce
        }
        return G(_.type, re, W)
    }
    ,
    Ee.createContext = function(_) {
        return _ = {
            $$typeof: f,
            _currentValue: _,
            _currentValue2: _,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        _.Provider = _,
        _.Consumer = {
            $$typeof: m,
            _context: _
        },
        _
    }
    ,
    Ee.createElement = function(_, A, K) {
        var W, re = {}, fe = null;
        if (A != null)
            for (W in A.key !== void 0 && (fe = "" + A.key),
            A)
                U.call(A, W) && W !== "key" && W !== "__self" && W !== "__source" && (re[W] = A[W]);
        var ce = arguments.length - 2;
        if (ce === 1)
            re.children = K;
        else if (1 < ce) {
            for (var me = Array(ce), ge = 0; ge < ce; ge++)
                me[ge] = arguments[ge + 2];
            re.children = me
        }
        if (_ && _.defaultProps)
            for (W in ce = _.defaultProps,
            ce)
                re[W] === void 0 && (re[W] = ce[W]);
        return G(_, fe, re)
    }
    ,
    Ee.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ee.forwardRef = function(_) {
        return {
            $$typeof: y,
            render: _
        }
    }
    ,
    Ee.isValidElement = ae,
    Ee.lazy = function(_) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: _
            },
            _init: E
        }
    }
    ,
    Ee.memo = function(_, A) {
        return {
            $$typeof: p,
            type: _,
            compare: A === void 0 ? null : A
        }
    }
    ,
    Ee.startTransition = function(_) {
        var A = z.T
          , K = {};
        z.T = K;
        try {
            var W = _()
              , re = z.S;
            re !== null && re(K, W),
            typeof W == "object" && W !== null && typeof W.then == "function" && W.then(Z, B)
        } catch (fe) {
            B(fe)
        } finally {
            A !== null && K.types !== null && (A.types = K.types),
            z.T = A
        }
    }
    ,
    Ee.unstable_useCacheRefresh = function() {
        return z.H.useCacheRefresh()
    }
    ,
    Ee.use = function(_) {
        return z.H.use(_)
    }
    ,
    Ee.useActionState = function(_, A, K) {
        return z.H.useActionState(_, A, K)
    }
    ,
    Ee.useCallback = function(_, A) {
        return z.H.useCallback(_, A)
    }
    ,
    Ee.useContext = function(_) {
        return z.H.useContext(_)
    }
    ,
    Ee.useDebugValue = function() {}
    ,
    Ee.useDeferredValue = function(_, A) {
        return z.H.useDeferredValue(_, A)
    }
    ,
    Ee.useEffect = function(_, A) {
        return z.H.useEffect(_, A)
    }
    ,
    Ee.useEffectEvent = function(_) {
        return z.H.useEffectEvent(_)
    }
    ,
    Ee.useId = function() {
        return z.H.useId()
    }
    ,
    Ee.useImperativeHandle = function(_, A, K) {
        return z.H.useImperativeHandle(_, A, K)
    }
    ,
    Ee.useInsertionEffect = function(_, A) {
        return z.H.useInsertionEffect(_, A)
    }
    ,
    Ee.useLayoutEffect = function(_, A) {
        return z.H.useLayoutEffect(_, A)
    }
    ,
    Ee.useMemo = function(_, A) {
        return z.H.useMemo(_, A)
    }
    ,
    Ee.useOptimistic = function(_, A) {
        return z.H.useOptimistic(_, A)
    }
    ,
    Ee.useReducer = function(_, A, K) {
        return z.H.useReducer(_, A, K)
    }
    ,
    Ee.useRef = function(_) {
        return z.H.useRef(_)
    }
    ,
    Ee.useState = function(_) {
        return z.H.useState(_)
    }
    ,
    Ee.useSyncExternalStore = function(_, A, K) {
        return z.H.useSyncExternalStore(_, A, K)
    }
    ,
    Ee.useTransition = function() {
        return z.H.useTransition()
    }
    ,
    Ee.version = "19.2.3",
    Ee
}
var Dh;
function xr() {
    return Dh || (Dh = 1,
    ju.exports = Op()),
    ju.exports
}
var Lh;
function Bp() {
    if (Lh)
        return Nu;
    Lh = 1;
    var l = xr().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    return Nu.c = function(a) {
        return l.H.useMemoCache(a)
    }
    ,
    Nu
}
var Oh;
function qp() {
    return Oh || (Oh = 1,
    Tu.exports = Bp()),
    Tu.exports
}
var bt = qp()
  , C = xr()
  , Au = {
    exports: {}
}
  , Fo = {}
  , Eu = {
    exports: {}
}
  , Ru = {};
var Bh;
function Up() {
    return Bh || (Bh = 1,
    (function(l) {
        function a(j, H) {
            var E = j.length;
            j.push(H);
            e: for (; 0 < E; ) {
                var B = E - 1 >>> 1
                  , le = j[B];
                if (0 < u(le, H))
                    j[B] = H,
                    j[E] = le,
                    E = B;
                else
                    break e
            }
        }
        function r(j) {
            return j.length === 0 ? null : j[0]
        }
        function c(j) {
            if (j.length === 0)
                return null;
            var H = j[0]
              , E = j.pop();
            if (E !== H) {
                j[0] = E;
                e: for (var B = 0, le = j.length, _ = le >>> 1; B < _; ) {
                    var A = 2 * (B + 1) - 1
                      , K = j[A]
                      , W = A + 1
                      , re = j[W];
                    if (0 > u(K, E))
                        W < le && 0 > u(re, K) ? (j[B] = re,
                        j[W] = E,
                        B = W) : (j[B] = K,
                        j[A] = E,
                        B = A);
                    else if (W < le && 0 > u(re, E))
                        j[B] = re,
                        j[W] = E,
                        B = W;
                    else
                        break e
                }
            }
            return H
        }
        function u(j, H) {
            var E = j.sortIndex - H.sortIndex;
            return E !== 0 ? E : j.id - H.id
        }
        if (l.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var m = performance;
            l.unstable_now = function() {
                return m.now()
            }
        } else {
            var f = Date
              , y = f.now();
            l.unstable_now = function() {
                return f.now() - y
            }
        }
        var g = []
          , p = []
          , b = 1
          , x = null
          , T = 3
          , O = !1
          , k = !1
          , M = !1
          , w = !1
          , Y = typeof setTimeout == "function" ? setTimeout : null
          , $ = typeof clearTimeout == "function" ? clearTimeout : null
          , P = typeof setImmediate < "u" ? setImmediate : null;
        function X(j) {
            for (var H = r(p); H !== null; ) {
                if (H.callback === null)
                    c(p);
                else if (H.startTime <= j)
                    c(p),
                    H.sortIndex = H.expirationTime,
                    a(g, H);
                else
                    break;
                H = r(p)
            }
        }
        function J(j) {
            if (M = !1,
            X(j),
            !k)
                if (r(g) !== null)
                    k = !0,
                    Z || (Z = !0,
                    oe());
                else {
                    var H = r(p);
                    H !== null && ee(J, H.startTime - j)
                }
        }
        var Z = !1
          , z = -1
          , U = 5
          , G = -1;
        function Q() {
            return w ? !0 : !(l.unstable_now() - G < U)
        }
        function ae() {
            if (w = !1,
            Z) {
                var j = l.unstable_now();
                G = j;
                var H = !0;
                try {
                    e: {
                        k = !1,
                        M && (M = !1,
                        $(z),
                        z = -1),
                        O = !0;
                        var E = T;
                        try {
                            t: {
                                for (X(j),
                                x = r(g); x !== null && !(x.expirationTime > j && Q()); ) {
                                    var B = x.callback;
                                    if (typeof B == "function") {
                                        x.callback = null,
                                        T = x.priorityLevel;
                                        var le = B(x.expirationTime <= j);
                                        if (j = l.unstable_now(),
                                        typeof le == "function") {
                                            x.callback = le,
                                            X(j),
                                            H = !0;
                                            break t
                                        }
                                        x === r(g) && c(g),
                                        X(j)
                                    } else
                                        c(g);
                                    x = r(g)
                                }
                                if (x !== null)
                                    H = !0;
                                else {
                                    var _ = r(p);
                                    _ !== null && ee(J, _.startTime - j),
                                    H = !1
                                }
                            }
                            break e
                        } finally {
                            x = null,
                            T = E,
                            O = !1
                        }
                        H = void 0
                    }
                } finally {
                    H ? oe() : Z = !1
                }
            }
        }
        var oe;
        if (typeof P == "function")
            oe = function() {
                P(ae)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ie = new MessageChannel
              , se = ie.port2;
            ie.port1.onmessage = ae,
            oe = function() {
                se.postMessage(null)
            }
        } else
            oe = function() {
                Y(ae, 0)
            }
            ;
        function ee(j, H) {
            z = Y(function() {
                j(l.unstable_now())
            }, H)
        }
        l.unstable_IdlePriority = 5,
        l.unstable_ImmediatePriority = 1,
        l.unstable_LowPriority = 4,
        l.unstable_NormalPriority = 3,
        l.unstable_Profiling = null,
        l.unstable_UserBlockingPriority = 2,
        l.unstable_cancelCallback = function(j) {
            j.callback = null
        }
        ,
        l.unstable_forceFrameRate = function(j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < j ? Math.floor(1e3 / j) : 5
        }
        ,
        l.unstable_getCurrentPriorityLevel = function() {
            return T
        }
        ,
        l.unstable_next = function(j) {
            switch (T) {
            case 1:
            case 2:
            case 3:
                var H = 3;
                break;
            default:
                H = T
            }
            var E = T;
            T = H;
            try {
                return j()
            } finally {
                T = E
            }
        }
        ,
        l.unstable_requestPaint = function() {
            w = !0
        }
        ,
        l.unstable_runWithPriority = function(j, H) {
            switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
            }
            var E = T;
            T = j;
            try {
                return H()
            } finally {
                T = E
            }
        }
        ,
        l.unstable_scheduleCallback = function(j, H, E) {
            var B = l.unstable_now();
            switch (typeof E == "object" && E !== null ? (E = E.delay,
            E = typeof E == "number" && 0 < E ? B + E : B) : E = B,
            j) {
            case 1:
                var le = -1;
                break;
            case 2:
                le = 250;
                break;
            case 5:
                le = 1073741823;
                break;
            case 4:
                le = 1e4;
                break;
            default:
                le = 5e3
            }
            return le = E + le,
            j = {
                id: b++,
                callback: H,
                priorityLevel: j,
                startTime: E,
                expirationTime: le,
                sortIndex: -1
            },
            E > B ? (j.sortIndex = E,
            a(p, j),
            r(g) === null && j === r(p) && (M ? ($(z),
            z = -1) : M = !0,
            ee(J, E - B))) : (j.sortIndex = le,
            a(g, j),
            k || O || (k = !0,
            Z || (Z = !0,
            oe()))),
            j
        }
        ,
        l.unstable_shouldYield = Q,
        l.unstable_wrapCallback = function(j) {
            var H = T;
            return function() {
                var E = T;
                T = H;
                try {
                    return j.apply(this, arguments)
                } finally {
                    T = E
                }
            }
        }
    }
    )(Ru)),
    Ru
}
var qh;
function Gp() {
    return qh || (qh = 1,
    Eu.exports = Up()),
    Eu.exports
}
var Mu = {
    exports: {}
}
  , Wt = {};
var Uh;
function Hp() {
    if (Uh)
        return Wt;
    Uh = 1;
    var l = xr();
    function a(g) {
        var p = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++)
                p += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r() {}
    var c = {
        d: {
            f: r,
            r: function() {
                throw Error(a(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function m(g, p, b) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: x == null ? null : "" + x,
            children: g,
            containerInfo: p,
            implementation: b
        }
    }
    var f = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function y(g, p) {
        if (g === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c,
    Wt.createPortal = function(g, p) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(a(299));
        return m(g, p, null, b)
    }
    ,
    Wt.flushSync = function(g) {
        var p = f.T
          , b = c.p;
        try {
            if (f.T = null,
            c.p = 2,
            g)
                return g()
        } finally {
            f.T = p,
            c.p = b,
            c.d.f()
        }
    }
    ,
    Wt.preconnect = function(g, p) {
        typeof g == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        c.d.C(g, p))
    }
    ,
    Wt.prefetchDNS = function(g) {
        typeof g == "string" && c.d.D(g)
    }
    ,
    Wt.preinit = function(g, p) {
        if (typeof g == "string" && p && typeof p.as == "string") {
            var b = p.as
              , x = y(b, p.crossOrigin)
              , T = typeof p.integrity == "string" ? p.integrity : void 0
              , O = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            b === "style" ? c.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: x,
                integrity: T,
                fetchPriority: O
            }) : b === "script" && c.d.X(g, {
                crossOrigin: x,
                integrity: T,
                fetchPriority: O,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    Wt.preinitModule = function(g, p) {
        if (typeof g == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var b = y(p.as, p.crossOrigin);
                    c.d.M(g, {
                        crossOrigin: b,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && c.d.M(g)
    }
    ,
    Wt.preload = function(g, p) {
        if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var b = p.as
              , x = y(b, p.crossOrigin);
            c.d.L(g, b, {
                crossOrigin: x,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    Wt.preloadModule = function(g, p) {
        if (typeof g == "string")
            if (p) {
                var b = y(p.as, p.crossOrigin);
                c.d.m(g, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: b,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                c.d.m(g)
    }
    ,
    Wt.requestFormReset = function(g) {
        c.d.r(g)
    }
    ,
    Wt.unstable_batchedUpdates = function(g, p) {
        return g(p)
    }
    ,
    Wt.useFormState = function(g, p, b) {
        return f.H.useFormState(g, p, b)
    }
    ,
    Wt.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    Wt.version = "19.2.3",
    Wt
}
var Gh;
function oy() {
    if (Gh)
        return Mu.exports;
    Gh = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
            } catch (a) {
                console.error(a)
            }
    }
    return l(),
    Mu.exports = Hp(),
    Mu.exports
}
var Hh;
function $p() {
    if (Hh)
        return Fo;
    Hh = 1;
    var l = Gp()
      , a = xr()
      , r = oy();
    function c(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function m(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function f(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function y(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function g(e) {
        if (m(e) !== e)
            throw Error(c(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = m(e),
            t === null)
                throw Error(c(188));
            return t !== e ? null : e
        }
        for (var n = e, i = t; ; ) {
            var o = n.return;
            if (o === null)
                break;
            var s = o.alternate;
            if (s === null) {
                if (i = o.return,
                i !== null) {
                    n = i;
                    continue
                }
                break
            }
            if (o.child === s.child) {
                for (s = o.child; s; ) {
                    if (s === n)
                        return g(o),
                        e;
                    if (s === i)
                        return g(o),
                        t;
                    s = s.sibling
                }
                throw Error(c(188))
            }
            if (n.return !== i.return)
                n = o,
                i = s;
            else {
                for (var h = !1, v = o.child; v; ) {
                    if (v === n) {
                        h = !0,
                        n = o,
                        i = s;
                        break
                    }
                    if (v === i) {
                        h = !0,
                        i = o,
                        n = s;
                        break
                    }
                    v = v.sibling
                }
                if (!h) {
                    for (v = s.child; v; ) {
                        if (v === n) {
                            h = !0,
                            n = s,
                            i = o;
                            break
                        }
                        if (v === i) {
                            h = !0,
                            i = s,
                            n = o;
                            break
                        }
                        v = v.sibling
                    }
                    if (!h)
                        throw Error(c(189))
                }
            }
            if (n.alternate !== i)
                throw Error(c(190))
        }
        if (n.tag !== 3)
            throw Error(c(188));
        return n.stateNode.current === n ? e : t
    }
    function b(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = b(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var x = Object.assign
      , T = Symbol.for("react.element")
      , O = Symbol.for("react.transitional.element")
      , k = Symbol.for("react.portal")
      , M = Symbol.for("react.fragment")
      , w = Symbol.for("react.strict_mode")
      , Y = Symbol.for("react.profiler")
      , $ = Symbol.for("react.consumer")
      , P = Symbol.for("react.context")
      , X = Symbol.for("react.forward_ref")
      , J = Symbol.for("react.suspense")
      , Z = Symbol.for("react.suspense_list")
      , z = Symbol.for("react.memo")
      , U = Symbol.for("react.lazy")
      , G = Symbol.for("react.activity")
      , Q = Symbol.for("react.memo_cache_sentinel")
      , ae = Symbol.iterator;
    function oe(e) {
        return e === null || typeof e != "object" ? null : (e = ae && e[ae] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var ie = Symbol.for("react.client.reference");
    function se(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === ie ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case M:
            return "Fragment";
        case Y:
            return "Profiler";
        case w:
            return "StrictMode";
        case J:
            return "Suspense";
        case Z:
            return "SuspenseList";
        case G:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case k:
                return "Portal";
            case P:
                return e.displayName || "Context";
            case $:
                return (e._context.displayName || "Context") + ".Consumer";
            case X:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case z:
                return t = e.displayName || null,
                t !== null ? t : se(e.type) || "Memo";
            case U:
                t = e._payload,
                e = e._init;
                try {
                    return se(e(t))
                } catch {}
            }
        return null
    }
    var ee = Array.isArray
      , j = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , H = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , E = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , B = []
      , le = -1;
    function _(e) {
        return {
            current: e
        }
    }
    function A(e) {
        0 > le || (e.current = B[le],
        B[le] = null,
        le--)
    }
    function K(e, t) {
        le++,
        B[le] = e.current,
        e.current = t
    }
    var W = _(null)
      , re = _(null)
      , fe = _(null)
      , ce = _(null);
    function me(e, t) {
        switch (K(fe, t),
        K(re, e),
        K(W, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? eh(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = eh(t),
                e = th(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        A(W),
        K(W, e)
    }
    function ge() {
        A(W),
        A(re),
        A(fe)
    }
    function Le(e) {
        e.memoizedState !== null && K(ce, e);
        var t = W.current
          , n = th(t, e.type);
        t !== n && (K(re, e),
        K(W, n))
    }
    function dt(e) {
        re.current === e && (A(W),
        A(re)),
        ce.current === e && (A(ce),
        Ko._currentValue = E)
    }
    var ue, Pe;
    function ne(e) {
        if (ue === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                ue = t && t[1] || "",
                Pe = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ue + e + Pe
    }
    var ye = !1;
    function Se(e, t) {
        if (!e || ye)
            return "";
        ye = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var te = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(te.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(te, [])
                                } catch (V) {
                                    var q = V
                                }
                                Reflect.construct(e, [], te)
                            } else {
                                try {
                                    te.call()
                                } catch (V) {
                                    q = V
                                }
                                e.call(te.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (V) {
                                q = V
                            }
                            (te = e()) && typeof te.catch == "function" && te.catch(function() {})
                        }
                    } catch (V) {
                        if (V && q && typeof V.stack == "string")
                            return [V.stack, q.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var s = i.DetermineComponentFrameRoot()
              , h = s[0]
              , v = s[1];
            if (h && v) {
                var S = h.split(`
`)
                  , L = v.split(`
`);
                for (o = i = 0; i < S.length && !S[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; o < L.length && !L[o].includes("DetermineComponentFrameRoot"); )
                    o++;
                if (i === S.length || o === L.length)
                    for (i = S.length - 1,
                    o = L.length - 1; 1 <= i && 0 <= o && S[i] !== L[o]; )
                        o--;
                for (; 1 <= i && 0 <= o; i--,
                o--)
                    if (S[i] !== L[o]) {
                        if (i !== 1 || o !== 1)
                            do
                                if (i--,
                                o--,
                                0 > o || S[i] !== L[o]) {
                                    var I = `
` + S[i].replace(" at new ", " at ");
                                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)),
                                    I
                                }
                            while (1 <= i && 0 <= o);
                        break
                    }
            }
        } finally {
            ye = !1,
            Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? ne(n) : ""
    }
    function ke(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return ne(e.type);
        case 16:
            return ne("Lazy");
        case 13:
            return e.child !== t && t !== null ? ne("Suspense Fallback") : ne("Suspense");
        case 19:
            return ne("SuspenseList");
        case 0:
        case 15:
            return Se(e.type, !1);
        case 11:
            return Se(e.type.render, !1);
        case 1:
            return Se(e.type, !0);
        case 31:
            return ne("Activity");
        default:
            return ""
        }
    }
    function _e(e) {
        try {
            var t = ""
              , n = null;
            do
                t += ke(e, n),
                n = e,
                e = e.return;
            while (e);
            return t
        } catch (i) {
            return `
Error generating stack: ` + i.message + `
` + i.stack
        }
    }
    var De = Object.prototype.hasOwnProperty
      , xt = l.unstable_scheduleCallback
      , Zt = l.unstable_cancelCallback
      , it = l.unstable_shouldYield
      , ra = l.unstable_requestPaint
      , We = l.unstable_now
      , ca = l.unstable_getCurrentPriorityLevel
      , St = l.unstable_ImmediatePriority
      , Bt = l.unstable_UserBlockingPriority
      , Ze = l.unstable_NormalPriority
      , tn = l.unstable_LowPriority
      , Jt = l.unstable_IdlePriority
      , pl = l.log
      , Ca = l.unstable_setDisableYieldValue
      , $t = null
      , pt = null;
    function gt(e) {
        if (typeof pl == "function" && Ca(e),
        pt && typeof pt.setStrictMode == "function")
            try {
                pt.setStrictMode($t, e)
            } catch {}
    }
    var vt = Math.clz32 ? Math.clz32 : $a
      , ua = Math.log
      , fa = Math.LN2;
    function $a(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (ua(e) / fa | 0) | 0
    }
    var nn = 256
      , bn = 262144
      , an = 4194304;
    function _t(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
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
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
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
            return e
        }
    }
    function ln(e, t, n) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var o = 0
          , s = e.suspendedLanes
          , h = e.pingedLanes;
        e = e.warmLanes;
        var v = i & 134217727;
        return v !== 0 ? (i = v & ~s,
        i !== 0 ? o = _t(i) : (h &= v,
        h !== 0 ? o = _t(h) : n || (n = v & ~e,
        n !== 0 && (o = _t(n))))) : (v = i & ~s,
        v !== 0 ? o = _t(v) : h !== 0 ? o = _t(h) : n || (n = i & ~e,
        n !== 0 && (o = _t(n)))),
        o === 0 ? 0 : t !== 0 && t !== o && (t & s) === 0 && (s = o & -o,
        n = t & -t,
        s >= n || s === 32 && (n & 4194048) !== 0) ? t : o
    }
    function xn(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function da(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
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
            return t + 5e3;
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
            return -1
        }
    }
    function ma() {
        var e = an;
        return an <<= 1,
        (an & 62914560) === 0 && (an = 4194304),
        e
    }
    function Vn(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function on(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Sn(e, t, n, i, o, s) {
        var h = e.pendingLanes;
        e.pendingLanes = n,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= n,
        e.entangledLanes &= n,
        e.errorRecoveryDisabledLanes &= n,
        e.shellSuspendCounter = 0;
        var v = e.entanglements
          , S = e.expirationTimes
          , L = e.hiddenUpdates;
        for (n = h & ~n; 0 < n; ) {
            var I = 31 - vt(n)
              , te = 1 << I;
            v[I] = 0,
            S[I] = -1;
            var q = L[I];
            if (q !== null)
                for (L[I] = null,
                I = 0; I < q.length; I++) {
                    var V = q[I];
                    V !== null && (V.lane &= -536870913)
                }
            n &= ~te
        }
        i !== 0 && Cn(e, i, 0),
        s !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(h & ~t))
    }
    function Cn(e, t, n) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var i = 31 - vt(t);
        e.entangledLanes |= t,
        e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930
    }
    function sn(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var i = 31 - vt(n)
              , o = 1 << i;
            o & t | e[i] & t && (e[i] |= t),
            n &= ~o
        }
    }
    function Tn(e, t) {
        var n = t & -t;
        return n = (n & 42) !== 0 ? 1 : Ft(n),
        (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    }
    function Ft(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function rn(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Xn() {
        var e = H.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Th(e.type))
    }
    function Ue(e, t) {
        var n = H.p;
        try {
            return H.p = e,
            t()
        } finally {
            H.p = n
        }
    }
    var Ne = Math.random().toString(36).slice(2)
      , Ce = "__reactFiber$" + Ne
      , we = "__reactProps$" + Ne
      , $e = "__reactContainer$" + Ne
      , Ta = "__reactEvents$" + Ne
      , gl = "__reactListeners$" + Ne
      , cn = "__reactHandles$" + Ne
      , Na = "__reactResources$" + Ne
      , Qn = "__reactMarker$" + Ne;
    function Ya(e) {
        delete e[Ce],
        delete e[we],
        delete e[Ta],
        delete e[gl],
        delete e[cn]
    }
    function Nn(e) {
        var t = e[Ce];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[$e] || n[Ce]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = rh(e); e !== null; ) {
                        if (n = e[Ce])
                            return n;
                        e = rh(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function Kn(e) {
        if (e = e[Ce] || e[$e]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Zn(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(c(33))
    }
    function jn(e) {
        var t = e[Na];
        return t || (t = e[Na] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function st(e) {
        e[Qn] = !0
    }
    var ja = new Set
      , vl = {};
    function un(e, t) {
        It(e, t),
        It(e + "Capture", t)
    }
    function It(e, t) {
        for (vl[e] = t,
        e = 0; e < t.length; e++)
            ja.add(t[e])
    }
    var Jn = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , An = {}
      , In = {};
    function Aa(e) {
        return De.call(In, e) ? !0 : De.call(An, e) ? !1 : Jn.test(e) ? In[e] = !0 : (An[e] = !0,
        !1)
    }
    function En(e, t, n) {
        if (Aa(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var i = t.toLowerCase().slice(0, 5);
                    if (i !== "data-" && i !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + n)
            }
    }
    function Rn(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + n)
        }
    }
    function qt(e, t, n, i) {
        if (i === null)
            e.removeAttribute(n);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return
            }
            e.setAttributeNS(t, n, "" + i)
        }
    }
    function Ut(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Va(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function ti(e, t, n) {
        var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var o = i.get
              , s = i.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(h) {
                    n = "" + h,
                    s.call(this, h)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: i.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(h) {
                    n = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Xa(e) {
        if (!e._valueTracker) {
            var t = Va(e) ? "checked" : "value";
            e._valueTracker = ti(e, t, "" + e[t])
        }
    }
    function zt(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , i = "";
        return e && (i = Va(e) ? e.checked ? "true" : "false" : e.value),
        e = i,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function _l(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var mo = /[\n"\\]/g;
    function Yt(e) {
        return e.replace(mo, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ni(e, t, n, i, o, s, h, v) {
        e.name = "",
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"),
        t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"),
        t != null ? Ea(e, h, Ut(t)) : n != null ? Ea(e, h, Ut(n)) : i != null && e.removeAttribute("value"),
        o == null && s != null && (e.defaultChecked = !!s),
        o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Ut(v) : e.removeAttribute("name")
    }
    function Qa(e, t, n, i, o, s, h, v) {
        if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s),
        t != null || n != null) {
            if (!(s !== "submit" && s !== "reset" || t != null)) {
                Xa(e);
                return
            }
            n = n != null ? "" + Ut(n) : "",
            t = t != null ? "" + Ut(t) : n,
            v || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        i = i ?? o,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        e.checked = v ? e.checked : !!i,
        e.defaultChecked = !!i,
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h),
        Xa(e)
    }
    function Ea(e, t, n) {
        t === "number" && _l(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }
    function ha(e, t, n, i) {
        if (e = e.options,
        t) {
            t = {};
            for (var o = 0; o < n.length; o++)
                t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
                o = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== o && (e[n].selected = o),
                o && i && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + Ut(n),
            t = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === n) {
                    e[o].selected = !0,
                    i && (e[o].defaultSelected = !0);
                    return
                }
                t !== null || e[o].disabled || (t = e[o])
            }
            t !== null && (t.selected = !0)
        }
    }
    function ai(e, t, n) {
        if (t != null && (t = "" + Ut(t),
        t !== e.value && (e.value = t),
        n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + Ut(n) : ""
    }
    function Ai(e, t, n, i) {
        if (t == null) {
            if (i != null) {
                if (n != null)
                    throw Error(c(92));
                if (ee(i)) {
                    if (1 < i.length)
                        throw Error(c(93));
                    i = i[0]
                }
                n = i
            }
            n == null && (n = ""),
            t = n
        }
        n = Ut(t),
        e.defaultValue = n,
        i = e.textContent,
        i === n && i !== "" && i !== null && (e.value = i),
        Xa(e)
    }
    function ya(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var bl = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ei(e, t, n) {
        var i = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || bl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }
    function li(e, t, n) {
        if (t != null && typeof t != "object")
            throw Error(c(62));
        if (e = e.style,
        n != null) {
            for (var i in n)
                !n.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
            for (var o in t)
                i = t[o],
                t.hasOwnProperty(o) && n[o] !== i && Ei(e, o, i)
        } else
            for (var s in t)
                t.hasOwnProperty(s) && Ei(e, s, t[s])
    }
    function Ra(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Ri = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , xl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ka(e) {
        return xl.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function fn() {}
    var Sl = null;
    function Ma(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var pa = null
      , Mn = null;
    function ii(e) {
        var t = Kn(e);
        if (t && (e = t.stateNode)) {
            var n = e[we] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ni(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                t = n.name,
                n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Yt("" + t) + '"][type="radio"]'),
                    t = 0; t < n.length; t++) {
                        var i = n[t];
                        if (i !== e && i.form === e.form) {
                            var o = i[we] || null;
                            if (!o)
                                throw Error(c(90));
                            ni(i, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        i = n[t],
                        i.form === e.form && zt(i)
                }
                break e;
            case "textarea":
                ai(e, n.value, n.defaultValue);
                break e;
            case "select":
                t = n.value,
                t != null && ha(e, !!n.multiple, t, !1)
            }
        }
    }
    var wa = !1;
    function oi(e, t, n) {
        if (wa)
            return e(t, n);
        wa = !0;
        try {
            var i = e(t);
            return i
        } finally {
            if (wa = !1,
            (pa !== null || Mn !== null) && ($s(),
            pa && (t = pa,
            e = Mn,
            Mn = pa = null,
            ii(t),
            e)))
                for (t = 0; t < e.length; t++)
                    ii(e[t])
        }
    }
    function Wn(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var i = n[we] || null;
        if (i === null)
            return null;
        n = i[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) || (e = e.type,
            i = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !i;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(c(231, t, typeof n));
        return n
    }
    var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , si = !1;
    if (dn)
        try {
            var Fn = {};
            Object.defineProperty(Fn, "passive", {
                get: function() {
                    si = !0
                }
            }),
            window.addEventListener("test", Fn, Fn),
            window.removeEventListener("test", Fn, Fn)
        } catch {
            si = !1
        }
    var Pt = null
      , Cl = null
      , Tl = null;
    function Za() {
        if (Tl)
            return Tl;
        var e, t = Cl, n = t.length, i, o = "value"in Pt ? Pt.value : Pt.textContent, s = o.length;
        for (e = 0; e < n && t[e] === o[e]; e++)
            ;
        var h = n - e;
        for (i = 1; i <= h && t[n - i] === o[s - i]; i++)
            ;
        return Tl = o.slice(e, 1 < i ? 1 - i : void 0)
    }
    function Ja(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function ga() {
        return !0
    }
    function ri() {
        return !1
    }
    function Gt(e) {
        function t(n, i, o, s, h) {
            this._reactName = n,
            this._targetInst = o,
            this.type = i,
            this.nativeEvent = s,
            this.target = h,
            this.currentTarget = null;
            for (var v in e)
                e.hasOwnProperty(v) && (n = e[v],
                this[v] = n ? n(s) : s[v]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ga : ri,
            this.isPropagationStopped = ri,
            this
        }
        return x(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = ga)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = ga)
            },
            persist: function() {},
            isPersistent: ga
        }),
        t
    }
    var mn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, va = Gt(mn), za = x({}, mn, {
        view: 0,
        detail: 0
    }), Mi = Gt(za), ka, Nl, Da, Ia = x({}, za, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Pn,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Da && (Da && e.type === "mousemove" ? (ka = e.screenX - Da.screenX,
            Nl = e.screenY - Da.screenY) : Nl = ka = 0,
            Da = e),
            ka)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Nl
        }
    }), Wa = Gt(Ia), jl = x({}, Ia, {
        dataTransfer: 0
    }), Al = Gt(jl), El = x({}, za, {
        relatedTarget: 0
    }), Rl = Gt(El), Ml = x({}, mn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), wl = Gt(Ml), zl = x({}, mn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), wi = Gt(zl), be = x({}, mn, {
        data: 0
    }), Ae = Gt(be), _a = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, wn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ci = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function zi(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ci[e]) ? !!t[e] : !1
    }
    function Pn() {
        return zi
    }
    var Er = x({}, za, {
        key: function(e) {
            if (e.key) {
                var t = _a[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Ja(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wn[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Pn,
        charCode: function(e) {
            return e.type === "keypress" ? Ja(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ja(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Qy = Gt(Er)
      , Ky = x({}, Ia, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , lf = Gt(Ky)
      , Zy = x({}, za, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Pn
    })
      , Jy = Gt(Zy)
      , Iy = x({}, mn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Wy = Gt(Iy)
      , Fy = x({}, Ia, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Py = Gt(Fy)
      , e1 = x({}, mn, {
        newState: 0,
        oldState: 0
    })
      , t1 = Gt(e1)
      , n1 = [9, 13, 27, 32]
      , Rr = dn && "CompositionEvent"in window
      , ho = null;
    dn && "documentMode"in document && (ho = document.documentMode);
    var a1 = dn && "TextEvent"in window && !ho
      , of = dn && (!Rr || ho && 8 < ho && 11 >= ho)
      , sf = " "
      , rf = !1;
    function cf(e, t) {
        switch (e) {
        case "keyup":
            return n1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function uf(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var ki = !1;
    function l1(e, t) {
        switch (e) {
        case "compositionend":
            return uf(t);
        case "keypress":
            return t.which !== 32 ? null : (rf = !0,
            sf);
        case "textInput":
            return e = t.data,
            e === sf && rf ? null : e;
        default:
            return null
        }
    }
    function i1(e, t) {
        if (ki)
            return e === "compositionend" || !Rr && cf(e, t) ? (e = Za(),
            Tl = Cl = Pt = null,
            ki = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return of && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var o1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function ff(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!o1[e.type] : t === "textarea"
    }
    function df(e, t, n, i) {
        pa ? Mn ? Mn.push(i) : Mn = [i] : pa = i,
        t = Js(t, "onChange"),
        0 < t.length && (n = new va("onChange","change",null,n,i),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var yo = null
      , po = null;
    function s1(e) {
        Zm(e, 0)
    }
    function ss(e) {
        var t = Zn(e);
        if (zt(t))
            return e
    }
    function mf(e, t) {
        if (e === "change")
            return t
    }
    var hf = !1;
    if (dn) {
        var Mr;
        if (dn) {
            var wr = "oninput"in document;
            if (!wr) {
                var yf = document.createElement("div");
                yf.setAttribute("oninput", "return;"),
                wr = typeof yf.oninput == "function"
            }
            Mr = wr
        } else
            Mr = !1;
        hf = Mr && (!document.documentMode || 9 < document.documentMode)
    }
    function pf() {
        yo && (yo.detachEvent("onpropertychange", gf),
        po = yo = null)
    }
    function gf(e) {
        if (e.propertyName === "value" && ss(po)) {
            var t = [];
            df(t, po, e, Ma(e)),
            oi(s1, t)
        }
    }
    function r1(e, t, n) {
        e === "focusin" ? (pf(),
        yo = t,
        po = n,
        yo.attachEvent("onpropertychange", gf)) : e === "focusout" && pf()
    }
    function c1(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return ss(po)
    }
    function u1(e, t) {
        if (e === "click")
            return ss(t)
    }
    function f1(e, t) {
        if (e === "input" || e === "change")
            return ss(t)
    }
    function d1(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var zn = typeof Object.is == "function" ? Object.is : d1;
    function go(e, t) {
        if (zn(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , i = Object.keys(t);
        if (n.length !== i.length)
            return !1;
        for (i = 0; i < n.length; i++) {
            var o = n[i];
            if (!De.call(t, o) || !zn(e[o], t[o]))
                return !1
        }
        return !0
    }
    function vf(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function _f(e, t) {
        var n = vf(e);
        e = 0;
        for (var i; n; ) {
            if (n.nodeType === 3) {
                if (i = e + n.textContent.length,
                e <= t && i >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = i
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = vf(n)
        }
    }
    function bf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function xf(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = _l(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = _l(e.document)
        }
        return t
    }
    function zr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var m1 = dn && "documentMode"in document && 11 >= document.documentMode
      , Di = null
      , kr = null
      , vo = null
      , Dr = !1;
    function Sf(e, t, n) {
        var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Dr || Di == null || Di !== _l(i) || (i = Di,
        "selectionStart"in i && zr(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        vo && go(vo, i) || (vo = i,
        i = Js(kr, "onSelect"),
        0 < i.length && (t = new va("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: i
        }),
        t.target = Di)))
    }
    function ui(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Li = {
        animationend: ui("Animation", "AnimationEnd"),
        animationiteration: ui("Animation", "AnimationIteration"),
        animationstart: ui("Animation", "AnimationStart"),
        transitionrun: ui("Transition", "TransitionRun"),
        transitionstart: ui("Transition", "TransitionStart"),
        transitioncancel: ui("Transition", "TransitionCancel"),
        transitionend: ui("Transition", "TransitionEnd")
    }
      , Lr = {}
      , Cf = {};
    dn && (Cf = document.createElement("div").style,
    "AnimationEvent"in window || (delete Li.animationend.animation,
    delete Li.animationiteration.animation,
    delete Li.animationstart.animation),
    "TransitionEvent"in window || delete Li.transitionend.transition);
    function fi(e) {
        if (Lr[e])
            return Lr[e];
        if (!Li[e])
            return e;
        var t = Li[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Cf)
                return Lr[e] = t[n];
        return e
    }
    var Tf = fi("animationend")
      , Nf = fi("animationiteration")
      , jf = fi("animationstart")
      , h1 = fi("transitionrun")
      , y1 = fi("transitionstart")
      , p1 = fi("transitioncancel")
      , Af = fi("transitionend")
      , Ef = new Map
      , Or = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Or.push("scrollEnd");
    function ba(e, t) {
        Ef.set(e, t),
        un(t, [e])
    }
    var rs = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , ea = []
      , Oi = 0
      , Br = 0;
    function cs() {
        for (var e = Oi, t = Br = Oi = 0; t < e; ) {
            var n = ea[t];
            ea[t++] = null;
            var i = ea[t];
            ea[t++] = null;
            var o = ea[t];
            ea[t++] = null;
            var s = ea[t];
            if (ea[t++] = null,
            i !== null && o !== null) {
                var h = i.pending;
                h === null ? o.next = o : (o.next = h.next,
                h.next = o),
                i.pending = o
            }
            s !== 0 && Rf(n, o, s)
        }
    }
    function us(e, t, n, i) {
        ea[Oi++] = e,
        ea[Oi++] = t,
        ea[Oi++] = n,
        ea[Oi++] = i,
        Br |= i,
        e.lanes |= i,
        e = e.alternate,
        e !== null && (e.lanes |= i)
    }
    function qr(e, t, n, i) {
        return us(e, t, n, i),
        fs(e)
    }
    function di(e, t) {
        return us(e, null, null, t),
        fs(e)
    }
    function Rf(e, t, n) {
        e.lanes |= n;
        var i = e.alternate;
        i !== null && (i.lanes |= n);
        for (var o = !1, s = e.return; s !== null; )
            s.childLanes |= n,
            i = s.alternate,
            i !== null && (i.childLanes |= n),
            s.tag === 22 && (e = s.stateNode,
            e === null || e._visibility & 1 || (o = !0)),
            e = s,
            s = s.return;
        return e.tag === 3 ? (s = e.stateNode,
        o && t !== null && (o = 31 - vt(n),
        e = s.hiddenUpdates,
        i = e[o],
        i === null ? e[o] = [t] : i.push(t),
        t.lane = n | 536870912),
        s) : null
    }
    function fs(e) {
        if (50 < Go)
            throw Go = 0,
            Kc = null,
            Error(c(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Bi = {};
    function g1(e, t, n, i) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = i,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function kn(e, t, n, i) {
        return new g1(e,t,n,i)
    }
    function Ur(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Fa(e, t) {
        var n = e.alternate;
        return n === null ? (n = kn(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 65011712,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.refCleanup = e.refCleanup,
        n
    }
    function Mf(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = n.childLanes,
        e.lanes = n.lanes,
        e.child = n.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = n.memoizedProps,
        e.memoizedState = n.memoizedState,
        e.updateQueue = n.updateQueue,
        e.type = n.type,
        t = n.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function ds(e, t, n, i, o, s) {
        var h = 0;
        if (i = e,
        typeof e == "function")
            Ur(e) && (h = 1);
        else if (typeof e == "string")
            h = Sp(e, n, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case G:
                return e = kn(31, n, t, o),
                e.elementType = G,
                e.lanes = s,
                e;
            case M:
                return mi(n.children, o, s, t);
            case w:
                h = 8,
                o |= 24;
                break;
            case Y:
                return e = kn(12, n, t, o | 2),
                e.elementType = Y,
                e.lanes = s,
                e;
            case J:
                return e = kn(13, n, t, o),
                e.elementType = J,
                e.lanes = s,
                e;
            case Z:
                return e = kn(19, n, t, o),
                e.elementType = Z,
                e.lanes = s,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case P:
                        h = 10;
                        break e;
                    case $:
                        h = 9;
                        break e;
                    case X:
                        h = 11;
                        break e;
                    case z:
                        h = 14;
                        break e;
                    case U:
                        h = 16,
                        i = null;
                        break e
                    }
                h = 29,
                n = Error(c(130, e === null ? "null" : typeof e, "")),
                i = null
            }
        return t = kn(h, n, t, o),
        t.elementType = e,
        t.type = i,
        t.lanes = s,
        t
    }
    function mi(e, t, n, i) {
        return e = kn(7, e, i, t),
        e.lanes = n,
        e
    }
    function Gr(e, t, n) {
        return e = kn(6, e, null, t),
        e.lanes = n,
        e
    }
    function wf(e) {
        var t = kn(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function Hr(e, t, n) {
        return t = kn(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var zf = new WeakMap;
    function ta(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = zf.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: _e(t)
            },
            zf.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: _e(t)
        }
    }
    var qi = []
      , Ui = 0
      , ms = null
      , _o = 0
      , na = []
      , aa = 0
      , kl = null
      , La = 1
      , Oa = "";
    function Pa(e, t) {
        qi[Ui++] = _o,
        qi[Ui++] = ms,
        ms = e,
        _o = t
    }
    function kf(e, t, n) {
        na[aa++] = La,
        na[aa++] = Oa,
        na[aa++] = kl,
        kl = e;
        var i = La;
        e = Oa;
        var o = 32 - vt(i) - 1;
        i &= ~(1 << o),
        n += 1;
        var s = 32 - vt(t) + o;
        if (30 < s) {
            var h = o - o % 5;
            s = (i & (1 << h) - 1).toString(32),
            i >>= h,
            o -= h,
            La = 1 << 32 - vt(t) + o | n << o | i,
            Oa = s + e
        } else
            La = 1 << s | n << o | i,
            Oa = e
    }
    function $r(e) {
        e.return !== null && (Pa(e, 1),
        kf(e, 1, 0))
    }
    function Yr(e) {
        for (; e === ms; )
            ms = qi[--Ui],
            qi[Ui] = null,
            _o = qi[--Ui],
            qi[Ui] = null;
        for (; e === kl; )
            kl = na[--aa],
            na[aa] = null,
            Oa = na[--aa],
            na[aa] = null,
            La = na[--aa],
            na[aa] = null
    }
    function Df(e, t) {
        na[aa++] = La,
        na[aa++] = Oa,
        na[aa++] = kl,
        La = t.id,
        Oa = t.overflow,
        kl = e
    }
    var Vt = null
      , rt = null
      , Ye = !1
      , Dl = null
      , la = !1
      , Vr = Error(c(519));
    function Ll(e) {
        var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw bo(ta(t, e)),
        Vr
    }
    function Lf(e) {
        var t = e.stateNode
          , n = e.type
          , i = e.memoizedProps;
        switch (t[Ce] = e,
        t[we] = i,
        n) {
        case "dialog":
            qe("cancel", t),
            qe("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            qe("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < $o.length; n++)
                qe($o[n], t);
            break;
        case "source":
            qe("error", t);
            break;
        case "img":
        case "image":
        case "link":
            qe("error", t),
            qe("load", t);
            break;
        case "details":
            qe("toggle", t);
            break;
        case "input":
            qe("invalid", t),
            Qa(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
            break;
        case "select":
            qe("invalid", t);
            break;
        case "textarea":
            qe("invalid", t),
            Ai(t, i.value, i.defaultValue, i.children)
        }
        n = i.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || Fm(t.textContent, n) ? (i.popover != null && (qe("beforetoggle", t),
        qe("toggle", t)),
        i.onScroll != null && qe("scroll", t),
        i.onScrollEnd != null && qe("scrollend", t),
        i.onClick != null && (t.onclick = fn),
        t = !0) : t = !1,
        t || Ll(e, !0)
    }
    function Of(e) {
        for (Vt = e.return; Vt; )
            switch (Vt.tag) {
            case 5:
            case 31:
            case 13:
                la = !1;
                return;
            case 27:
            case 3:
                la = !0;
                return;
            default:
                Vt = Vt.return
            }
    }
    function Gi(e) {
        if (e !== Vt)
            return !1;
        if (!Ye)
            return Of(e),
            Ye = !0,
            !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
        n = !(n !== "form" && n !== "button") || ru(e.type, e.memoizedProps)),
        n = !n),
        n && rt && Ll(e),
        Of(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(c(317));
            rt = sh(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(c(317));
            rt = sh(e)
        } else
            t === 27 ? (t = rt,
            Jl(e.type) ? (e = mu,
            mu = null,
            rt = e) : rt = t) : rt = Vt ? oa(e.stateNode.nextSibling) : null;
        return !0
    }
    function hi() {
        rt = Vt = null,
        Ye = !1
    }
    function Xr() {
        var e = Dl;
        return e !== null && (gn === null ? gn = e : gn.push.apply(gn, e),
        Dl = null),
        e
    }
    function bo(e) {
        Dl === null ? Dl = [e] : Dl.push(e)
    }
    var Qr = _(null)
      , yi = null
      , el = null;
    function Ol(e, t, n) {
        K(Qr, t._currentValue),
        t._currentValue = n
    }
    function tl(e) {
        e._currentValue = Qr.current,
        A(Qr)
    }
    function Kr(e, t, n) {
        for (; e !== null; ) {
            var i = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function Zr(e, t, n, i) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null; ) {
            var s = o.dependencies;
            if (s !== null) {
                var h = o.child;
                s = s.firstContext;
                e: for (; s !== null; ) {
                    var v = s;
                    s = o;
                    for (var S = 0; S < t.length; S++)
                        if (v.context === t[S]) {
                            s.lanes |= n,
                            v = s.alternate,
                            v !== null && (v.lanes |= n),
                            Kr(s.return, n, e),
                            i || (h = null);
                            break e
                        }
                    s = v.next
                }
            } else if (o.tag === 18) {
                if (h = o.return,
                h === null)
                    throw Error(c(341));
                h.lanes |= n,
                s = h.alternate,
                s !== null && (s.lanes |= n),
                Kr(h, n, e),
                h = null
            } else
                h = o.child;
            if (h !== null)
                h.return = o;
            else
                for (h = o; h !== null; ) {
                    if (h === e) {
                        h = null;
                        break
                    }
                    if (o = h.sibling,
                    o !== null) {
                        o.return = h.return,
                        h = o;
                        break
                    }
                    h = h.return
                }
            o = h
        }
    }
    function Hi(e, t, n, i) {
        e = null;
        for (var o = t, s = !1; o !== null; ) {
            if (!s) {
                if ((o.flags & 524288) !== 0)
                    s = !0;
                else if ((o.flags & 262144) !== 0)
                    break
            }
            if (o.tag === 10) {
                var h = o.alternate;
                if (h === null)
                    throw Error(c(387));
                if (h = h.memoizedProps,
                h !== null) {
                    var v = o.type;
                    zn(o.pendingProps.value, h.value) || (e !== null ? e.push(v) : e = [v])
                }
            } else if (o === ce.current) {
                if (h = o.alternate,
                h === null)
                    throw Error(c(387));
                h.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Ko) : e = [Ko])
            }
            o = o.return
        }
        e !== null && Zr(t, e, n, i),
        t.flags |= 262144
    }
    function hs(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!zn(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function pi(e) {
        yi = e,
        el = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Xt(e) {
        return Bf(yi, e)
    }
    function ys(e, t) {
        return yi === null && pi(e),
        Bf(e, t)
    }
    function Bf(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
        el === null) {
            if (e === null)
                throw Error(c(308));
            el = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            el = el.next = t;
        return n
    }
    var v1 = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(n, i) {
                e.push(i)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(n) {
                return n()
            })
        }
    }
      , _1 = l.unstable_scheduleCallback
      , b1 = l.unstable_NormalPriority
      , At = {
        $$typeof: P,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Jr() {
        return {
            controller: new v1,
            data: new Map,
            refCount: 0
        }
    }
    function xo(e) {
        e.refCount--,
        e.refCount === 0 && _1(b1, function() {
            e.controller.abort()
        })
    }
    var So = null
      , Ir = 0
      , $i = 0
      , Yi = null;
    function x1(e, t) {
        if (So === null) {
            var n = So = [];
            Ir = 0,
            $i = Pc(),
            Yi = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    n.push(i)
                }
            }
        }
        return Ir++,
        t.then(qf, qf),
        t
    }
    function qf() {
        if (--Ir === 0 && So !== null) {
            Yi !== null && (Yi.status = "fulfilled");
            var e = So;
            So = null,
            $i = 0,
            Yi = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function S1(e, t) {
        var n = []
          , i = {
            status: "pending",
            value: null,
            reason: null,
            then: function(o) {
                n.push(o)
            }
        };
        return e.then(function() {
            i.status = "fulfilled",
            i.value = t;
            for (var o = 0; o < n.length; o++)
                (0,
                n[o])(t)
        }, function(o) {
            for (i.status = "rejected",
            i.reason = o,
            o = 0; o < n.length; o++)
                (0,
                n[o])(void 0)
        }),
        i
    }
    var Uf = j.S;
    j.S = function(e, t) {
        Sm = We(),
        typeof t == "object" && t !== null && typeof t.then == "function" && x1(e, t),
        Uf !== null && Uf(e, t)
    }
    ;
    var gi = _(null);
    function Wr() {
        var e = gi.current;
        return e !== null ? e : ot.pooledCache
    }
    function ps(e, t) {
        t === null ? K(gi, gi.current) : K(gi, t.pool)
    }
    function Gf() {
        var e = Wr();
        return e === null ? null : {
            parent: At._currentValue,
            pool: e
        }
    }
    var Vi = Error(c(460))
      , Fr = Error(c(474))
      , gs = Error(c(542))
      , vs = {
        then: function() {}
    };
    function Hf(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function $f(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(fn, fn),
        t = n),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Vf(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(fn, fn);
            else {
                if (e = ot,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(c(482));
                e = t,
                e.status = "pending",
                e.then(function(i) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "fulfilled",
                        o.value = i
                    }
                }, function(i) {
                    if (t.status === "pending") {
                        var o = t;
                        o.status = "rejected",
                        o.reason = i
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Vf(e),
                e
            }
            throw _i = t,
            Vi
        }
    }
    function vi(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (_i = n,
            Vi) : n
        }
    }
    var _i = null;
    function Yf() {
        if (_i === null)
            throw Error(c(459));
        var e = _i;
        return _i = null,
        e
    }
    function Vf(e) {
        if (e === Vi || e === gs)
            throw Error(c(483))
    }
    var Xi = null
      , Co = 0;
    function _s(e) {
        var t = Co;
        return Co += 1,
        Xi === null && (Xi = []),
        $f(Xi, e, t)
    }
    function To(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function bs(e, t) {
        throw t.$$typeof === T ? Error(c(525)) : (e = Object.prototype.toString.call(t),
        Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Xf(e) {
        function t(R, N) {
            if (e) {
                var D = R.deletions;
                D === null ? (R.deletions = [N],
                R.flags |= 16) : D.push(N)
            }
        }
        function n(R, N) {
            if (!e)
                return null;
            for (; N !== null; )
                t(R, N),
                N = N.sibling;
            return null
        }
        function i(R) {
            for (var N = new Map; R !== null; )
                R.key !== null ? N.set(R.key, R) : N.set(R.index, R),
                R = R.sibling;
            return N
        }
        function o(R, N) {
            return R = Fa(R, N),
            R.index = 0,
            R.sibling = null,
            R
        }
        function s(R, N, D) {
            return R.index = D,
            e ? (D = R.alternate,
            D !== null ? (D = D.index,
            D < N ? (R.flags |= 67108866,
            N) : D) : (R.flags |= 67108866,
            N)) : (R.flags |= 1048576,
            N)
        }
        function h(R) {
            return e && R.alternate === null && (R.flags |= 67108866),
            R
        }
        function v(R, N, D, F) {
            return N === null || N.tag !== 6 ? (N = Gr(D, R.mode, F),
            N.return = R,
            N) : (N = o(N, D),
            N.return = R,
            N)
        }
        function S(R, N, D, F) {
            var xe = D.type;
            return xe === M ? I(R, N, D.props.children, F, D.key) : N !== null && (N.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === U && vi(xe) === N.type) ? (N = o(N, D.props),
            To(N, D),
            N.return = R,
            N) : (N = ds(D.type, D.key, D.props, null, R.mode, F),
            To(N, D),
            N.return = R,
            N)
        }
        function L(R, N, D, F) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== D.containerInfo || N.stateNode.implementation !== D.implementation ? (N = Hr(D, R.mode, F),
            N.return = R,
            N) : (N = o(N, D.children || []),
            N.return = R,
            N)
        }
        function I(R, N, D, F, xe) {
            return N === null || N.tag !== 7 ? (N = mi(D, R.mode, F, xe),
            N.return = R,
            N) : (N = o(N, D),
            N.return = R,
            N)
        }
        function te(R, N, D) {
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
                return N = Gr("" + N, R.mode, D),
                N.return = R,
                N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case O:
                    return D = ds(N.type, N.key, N.props, null, R.mode, D),
                    To(D, N),
                    D.return = R,
                    D;
                case k:
                    return N = Hr(N, R.mode, D),
                    N.return = R,
                    N;
                case U:
                    return N = vi(N),
                    te(R, N, D)
                }
                if (ee(N) || oe(N))
                    return N = mi(N, R.mode, D, null),
                    N.return = R,
                    N;
                if (typeof N.then == "function")
                    return te(R, _s(N), D);
                if (N.$$typeof === P)
                    return te(R, ys(R, N), D);
                bs(R, N)
            }
            return null
        }
        function q(R, N, D, F) {
            var xe = N !== null ? N.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
                return xe !== null ? null : v(R, N, "" + D, F);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case O:
                    return D.key === xe ? S(R, N, D, F) : null;
                case k:
                    return D.key === xe ? L(R, N, D, F) : null;
                case U:
                    return D = vi(D),
                    q(R, N, D, F)
                }
                if (ee(D) || oe(D))
                    return xe !== null ? null : I(R, N, D, F, null);
                if (typeof D.then == "function")
                    return q(R, N, _s(D), F);
                if (D.$$typeof === P)
                    return q(R, N, ys(R, D), F);
                bs(R, D)
            }
            return null
        }
        function V(R, N, D, F, xe) {
            if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
                return R = R.get(D) || null,
                v(N, R, "" + F, xe);
            if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                case O:
                    return R = R.get(F.key === null ? D : F.key) || null,
                    S(N, R, F, xe);
                case k:
                    return R = R.get(F.key === null ? D : F.key) || null,
                    L(N, R, F, xe);
                case U:
                    return F = vi(F),
                    V(R, N, D, F, xe)
                }
                if (ee(F) || oe(F))
                    return R = R.get(D) || null,
                    I(N, R, F, xe, null);
                if (typeof F.then == "function")
                    return V(R, N, D, _s(F), xe);
                if (F.$$typeof === P)
                    return V(R, N, D, ys(N, F), xe);
                bs(N, F)
            }
            return null
        }
        function he(R, N, D, F) {
            for (var xe = null, Qe = null, ve = N, ze = N = 0, He = null; ve !== null && ze < D.length; ze++) {
                ve.index > ze ? (He = ve,
                ve = null) : He = ve.sibling;
                var Ke = q(R, ve, D[ze], F);
                if (Ke === null) {
                    ve === null && (ve = He);
                    break
                }
                e && ve && Ke.alternate === null && t(R, ve),
                N = s(Ke, N, ze),
                Qe === null ? xe = Ke : Qe.sibling = Ke,
                Qe = Ke,
                ve = He
            }
            if (ze === D.length)
                return n(R, ve),
                Ye && Pa(R, ze),
                xe;
            if (ve === null) {
                for (; ze < D.length; ze++)
                    ve = te(R, D[ze], F),
                    ve !== null && (N = s(ve, N, ze),
                    Qe === null ? xe = ve : Qe.sibling = ve,
                    Qe = ve);
                return Ye && Pa(R, ze),
                xe
            }
            for (ve = i(ve); ze < D.length; ze++)
                He = V(ve, R, ze, D[ze], F),
                He !== null && (e && He.alternate !== null && ve.delete(He.key === null ? ze : He.key),
                N = s(He, N, ze),
                Qe === null ? xe = He : Qe.sibling = He,
                Qe = He);
            return e && ve.forEach(function(ei) {
                return t(R, ei)
            }),
            Ye && Pa(R, ze),
            xe
        }
        function Te(R, N, D, F) {
            if (D == null)
                throw Error(c(151));
            for (var xe = null, Qe = null, ve = N, ze = N = 0, He = null, Ke = D.next(); ve !== null && !Ke.done; ze++,
            Ke = D.next()) {
                ve.index > ze ? (He = ve,
                ve = null) : He = ve.sibling;
                var ei = q(R, ve, Ke.value, F);
                if (ei === null) {
                    ve === null && (ve = He);
                    break
                }
                e && ve && ei.alternate === null && t(R, ve),
                N = s(ei, N, ze),
                Qe === null ? xe = ei : Qe.sibling = ei,
                Qe = ei,
                ve = He
            }
            if (Ke.done)
                return n(R, ve),
                Ye && Pa(R, ze),
                xe;
            if (ve === null) {
                for (; !Ke.done; ze++,
                Ke = D.next())
                    Ke = te(R, Ke.value, F),
                    Ke !== null && (N = s(Ke, N, ze),
                    Qe === null ? xe = Ke : Qe.sibling = Ke,
                    Qe = Ke);
                return Ye && Pa(R, ze),
                xe
            }
            for (ve = i(ve); !Ke.done; ze++,
            Ke = D.next())
                Ke = V(ve, R, ze, Ke.value, F),
                Ke !== null && (e && Ke.alternate !== null && ve.delete(Ke.key === null ? ze : Ke.key),
                N = s(Ke, N, ze),
                Qe === null ? xe = Ke : Qe.sibling = Ke,
                Qe = Ke);
            return e && ve.forEach(function(kp) {
                return t(R, kp)
            }),
            Ye && Pa(R, ze),
            xe
        }
        function lt(R, N, D, F) {
            if (typeof D == "object" && D !== null && D.type === M && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case O:
                    e: {
                        for (var xe = D.key; N !== null; ) {
                            if (N.key === xe) {
                                if (xe = D.type,
                                xe === M) {
                                    if (N.tag === 7) {
                                        n(R, N.sibling),
                                        F = o(N, D.props.children),
                                        F.return = R,
                                        R = F;
                                        break e
                                    }
                                } else if (N.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === U && vi(xe) === N.type) {
                                    n(R, N.sibling),
                                    F = o(N, D.props),
                                    To(F, D),
                                    F.return = R,
                                    R = F;
                                    break e
                                }
                                n(R, N);
                                break
                            } else
                                t(R, N);
                            N = N.sibling
                        }
                        D.type === M ? (F = mi(D.props.children, R.mode, F, D.key),
                        F.return = R,
                        R = F) : (F = ds(D.type, D.key, D.props, null, R.mode, F),
                        To(F, D),
                        F.return = R,
                        R = F)
                    }
                    return h(R);
                case k:
                    e: {
                        for (xe = D.key; N !== null; ) {
                            if (N.key === xe)
                                if (N.tag === 4 && N.stateNode.containerInfo === D.containerInfo && N.stateNode.implementation === D.implementation) {
                                    n(R, N.sibling),
                                    F = o(N, D.children || []),
                                    F.return = R,
                                    R = F;
                                    break e
                                } else {
                                    n(R, N);
                                    break
                                }
                            else
                                t(R, N);
                            N = N.sibling
                        }
                        F = Hr(D, R.mode, F),
                        F.return = R,
                        R = F
                    }
                    return h(R);
                case U:
                    return D = vi(D),
                    lt(R, N, D, F)
                }
                if (ee(D))
                    return he(R, N, D, F);
                if (oe(D)) {
                    if (xe = oe(D),
                    typeof xe != "function")
                        throw Error(c(150));
                    return D = xe.call(D),
                    Te(R, N, D, F)
                }
                if (typeof D.then == "function")
                    return lt(R, N, _s(D), F);
                if (D.$$typeof === P)
                    return lt(R, N, ys(R, D), F);
                bs(R, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D,
            N !== null && N.tag === 6 ? (n(R, N.sibling),
            F = o(N, D),
            F.return = R,
            R = F) : (n(R, N),
            F = Gr(D, R.mode, F),
            F.return = R,
            R = F),
            h(R)) : n(R, N)
        }
        return function(R, N, D, F) {
            try {
                Co = 0;
                var xe = lt(R, N, D, F);
                return Xi = null,
                xe
            } catch (ve) {
                if (ve === Vi || ve === gs)
                    throw ve;
                var Qe = kn(29, ve, null, R.mode);
                return Qe.lanes = F,
                Qe.return = R,
                Qe
            }
        }
    }
    var bi = Xf(!0)
      , Qf = Xf(!1)
      , Bl = !1;
    function Pr(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function ec(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function ql(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ul(e, t, n) {
        var i = e.updateQueue;
        if (i === null)
            return null;
        if (i = i.shared,
        (Je & 2) !== 0) {
            var o = i.pending;
            return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            i.pending = t,
            t = fs(e),
            Rf(e, null, n),
            t
        }
        return us(e, i, t, n),
        fs(e)
    }
    function No(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194048) !== 0)) {
            var i = t.lanes;
            i &= e.pendingLanes,
            n |= i,
            t.lanes = n,
            sn(e, n)
        }
    }
    function tc(e, t) {
        var n = e.updateQueue
          , i = e.alternate;
        if (i !== null && (i = i.updateQueue,
        n === i)) {
            var o = null
              , s = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var h = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    s === null ? o = s = h : s = s.next = h,
                    n = n.next
                } while (n !== null);
                s === null ? o = s = t : s = s.next = t
            } else
                o = s = t;
            n = {
                baseState: i.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: s,
                shared: i.shared,
                callbacks: i.callbacks
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    var nc = !1;
    function jo() {
        if (nc) {
            var e = Yi;
            if (e !== null)
                throw e
        }
    }
    function Ao(e, t, n, i) {
        nc = !1;
        var o = e.updateQueue;
        Bl = !1;
        var s = o.firstBaseUpdate
          , h = o.lastBaseUpdate
          , v = o.shared.pending;
        if (v !== null) {
            o.shared.pending = null;
            var S = v
              , L = S.next;
            S.next = null,
            h === null ? s = L : h.next = L,
            h = S;
            var I = e.alternate;
            I !== null && (I = I.updateQueue,
            v = I.lastBaseUpdate,
            v !== h && (v === null ? I.firstBaseUpdate = L : v.next = L,
            I.lastBaseUpdate = S))
        }
        if (s !== null) {
            var te = o.baseState;
            h = 0,
            I = L = S = null,
            v = s;
            do {
                var q = v.lane & -536870913
                  , V = q !== v.lane;
                if (V ? (Ge & q) === q : (i & q) === q) {
                    q !== 0 && q === $i && (nc = !0),
                    I !== null && (I = I.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var he = e
                          , Te = v;
                        q = t;
                        var lt = n;
                        switch (Te.tag) {
                        case 1:
                            if (he = Te.payload,
                            typeof he == "function") {
                                te = he.call(lt, te, q);
                                break e
                            }
                            te = he;
                            break e;
                        case 3:
                            he.flags = he.flags & -65537 | 128;
                        case 0:
                            if (he = Te.payload,
                            q = typeof he == "function" ? he.call(lt, te, q) : he,
                            q == null)
                                break e;
                            te = x({}, te, q);
                            break e;
                        case 2:
                            Bl = !0
                        }
                    }
                    q = v.callback,
                    q !== null && (e.flags |= 64,
                    V && (e.flags |= 8192),
                    V = o.callbacks,
                    V === null ? o.callbacks = [q] : V.push(q))
                } else
                    V = {
                        lane: q,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    I === null ? (L = I = V,
                    S = te) : I = I.next = V,
                    h |= q;
                if (v = v.next,
                v === null) {
                    if (v = o.shared.pending,
                    v === null)
                        break;
                    V = v,
                    v = V.next,
                    V.next = null,
                    o.lastBaseUpdate = V,
                    o.shared.pending = null
                }
            } while (!0);
            I === null && (S = te),
            o.baseState = S,
            o.firstBaseUpdate = L,
            o.lastBaseUpdate = I,
            s === null && (o.shared.lanes = 0),
            Vl |= h,
            e.lanes = h,
            e.memoizedState = te
        }
    }
    function Kf(e, t) {
        if (typeof e != "function")
            throw Error(c(191, e));
        e.call(t)
    }
    function Zf(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
            e = 0; e < n.length; e++)
                Kf(n[e], t)
    }
    var Qi = _(null)
      , xs = _(0);
    function Jf(e, t) {
        e = ul,
        K(xs, e),
        K(Qi, t),
        ul = e | t.baseLanes
    }
    function ac() {
        K(xs, ul),
        K(Qi, Qi.current)
    }
    function lc() {
        ul = xs.current,
        A(Qi),
        A(xs)
    }
    var Dn = _(null)
      , ia = null;
    function Gl(e) {
        var t = e.alternate;
        K(Nt, Nt.current & 1),
        K(Dn, e),
        ia === null && (t === null || Qi.current !== null || t.memoizedState !== null) && (ia = e)
    }
    function ic(e) {
        K(Nt, Nt.current),
        K(Dn, e),
        ia === null && (ia = e)
    }
    function If(e) {
        e.tag === 22 ? (K(Nt, Nt.current),
        K(Dn, e),
        ia === null && (ia = e)) : Hl()
    }
    function Hl() {
        K(Nt, Nt.current),
        K(Dn, Dn.current)
    }
    function Ln(e) {
        A(Dn),
        ia === e && (ia = null),
        A(Nt)
    }
    var Nt = _(0);
    function Ss(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || fu(n) || du(n)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var nl = 0
      , Me = null
      , nt = null
      , Et = null
      , Cs = !1
      , Ki = !1
      , xi = !1
      , Ts = 0
      , Eo = 0
      , Zi = null
      , C1 = 0;
    function Ct() {
        throw Error(c(321))
    }
    function oc(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!zn(e[n], t[n]))
                return !1;
        return !0
    }
    function sc(e, t, n, i, o, s) {
        return nl = s,
        Me = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        j.H = e === null || e.memoizedState === null ? kd : Sc,
        xi = !1,
        s = n(i, o),
        xi = !1,
        Ki && (s = Ff(t, n, i, o)),
        Wf(e),
        s
    }
    function Wf(e) {
        j.H = wo;
        var t = nt !== null && nt.next !== null;
        if (nl = 0,
        Et = nt = Me = null,
        Cs = !1,
        Eo = 0,
        Zi = null,
        t)
            throw Error(c(300));
        e === null || Rt || (e = e.dependencies,
        e !== null && hs(e) && (Rt = !0))
    }
    function Ff(e, t, n, i) {
        Me = e;
        var o = 0;
        do {
            if (Ki && (Zi = null),
            Eo = 0,
            Ki = !1,
            25 <= o)
                throw Error(c(301));
            if (o += 1,
            Et = nt = null,
            e.updateQueue != null) {
                var s = e.updateQueue;
                s.lastEffect = null,
                s.events = null,
                s.stores = null,
                s.memoCache != null && (s.memoCache.index = 0)
            }
            j.H = Dd,
            s = t(n, i)
        } while (Ki);
        return s
    }
    function T1() {
        var e = j.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ro(t) : t,
        e = e.useState()[0],
        (nt !== null ? nt.memoizedState : null) !== e && (Me.flags |= 1024),
        t
    }
    function rc() {
        var e = Ts !== 0;
        return Ts = 0,
        e
    }
    function cc(e, t, n) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~n
    }
    function uc(e) {
        if (Cs) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Cs = !1
        }
        nl = 0,
        Et = nt = Me = null,
        Ki = !1,
        Eo = Ts = 0,
        Zi = null
    }
    function en() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Et === null ? Me.memoizedState = Et = e : Et = Et.next = e,
        Et
    }
    function jt() {
        if (nt === null) {
            var e = Me.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = nt.next;
        var t = Et === null ? Me.memoizedState : Et.next;
        if (t !== null)
            Et = t,
            nt = e;
        else {
            if (e === null)
                throw Me.alternate === null ? Error(c(467)) : Error(c(310));
            nt = e,
            e = {
                memoizedState: nt.memoizedState,
                baseState: nt.baseState,
                baseQueue: nt.baseQueue,
                queue: nt.queue,
                next: null
            },
            Et === null ? Me.memoizedState = Et = e : Et = Et.next = e
        }
        return Et
    }
    function Ns() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ro(e) {
        var t = Eo;
        return Eo += 1,
        Zi === null && (Zi = []),
        e = $f(Zi, e, t),
        t = Me,
        (Et === null ? t.memoizedState : Et.next) === null && (t = t.alternate,
        j.H = t === null || t.memoizedState === null ? kd : Sc),
        e
    }
    function js(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ro(e);
            if (e.$$typeof === P)
                return Xt(e)
        }
        throw Error(c(438, String(e)))
    }
    function fc(e) {
        var t = null
          , n = Me.updateQueue;
        if (n !== null && (t = n.memoCache),
        t == null) {
            var i = Me.alternate;
            i !== null && (i = i.updateQueue,
            i !== null && (i = i.memoCache,
            i != null && (t = {
                data: i.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        n === null && (n = Ns(),
        Me.updateQueue = n),
        n.memoCache = t,
        n = t.data[t.index],
        n === void 0)
            for (n = t.data[t.index] = Array(e),
            i = 0; i < e; i++)
                n[i] = Q;
        return t.index++,
        n
    }
    function al(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function As(e) {
        var t = jt();
        return dc(t, nt, e)
    }
    function dc(e, t, n) {
        var i = e.queue;
        if (i === null)
            throw Error(c(311));
        i.lastRenderedReducer = n;
        var o = e.baseQueue
          , s = i.pending;
        if (s !== null) {
            if (o !== null) {
                var h = o.next;
                o.next = s.next,
                s.next = h
            }
            t.baseQueue = o = s,
            i.pending = null
        }
        if (s = e.baseState,
        o === null)
            e.memoizedState = s;
        else {
            t = o.next;
            var v = h = null
              , S = null
              , L = t
              , I = !1;
            do {
                var te = L.lane & -536870913;
                if (te !== L.lane ? (Ge & te) === te : (nl & te) === te) {
                    var q = L.revertLane;
                    if (q === 0)
                        S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: L.action,
                            hasEagerState: L.hasEagerState,
                            eagerState: L.eagerState,
                            next: null
                        }),
                        te === $i && (I = !0);
                    else if ((nl & q) === q) {
                        L = L.next,
                        q === $i && (I = !0);
                        continue
                    } else
                        te = {
                            lane: 0,
                            revertLane: L.revertLane,
                            gesture: null,
                            action: L.action,
                            hasEagerState: L.hasEagerState,
                            eagerState: L.eagerState,
                            next: null
                        },
                        S === null ? (v = S = te,
                        h = s) : S = S.next = te,
                        Me.lanes |= q,
                        Vl |= q;
                    te = L.action,
                    xi && n(s, te),
                    s = L.hasEagerState ? L.eagerState : n(s, te)
                } else
                    q = {
                        lane: te,
                        revertLane: L.revertLane,
                        gesture: L.gesture,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    },
                    S === null ? (v = S = q,
                    h = s) : S = S.next = q,
                    Me.lanes |= te,
                    Vl |= te;
                L = L.next
            } while (L !== null && L !== t);
            if (S === null ? h = s : S.next = v,
            !zn(s, e.memoizedState) && (Rt = !0,
            I && (n = Yi,
            n !== null)))
                throw n;
            e.memoizedState = s,
            e.baseState = h,
            e.baseQueue = S,
            i.lastRenderedState = s
        }
        return o === null && (i.lanes = 0),
        [e.memoizedState, i.dispatch]
    }
    function mc(e) {
        var t = jt()
          , n = t.queue;
        if (n === null)
            throw Error(c(311));
        n.lastRenderedReducer = e;
        var i = n.dispatch
          , o = n.pending
          , s = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var h = o = o.next;
            do
                s = e(s, h.action),
                h = h.next;
            while (h !== o);
            zn(s, t.memoizedState) || (Rt = !0),
            t.memoizedState = s,
            t.baseQueue === null && (t.baseState = s),
            n.lastRenderedState = s
        }
        return [s, i]
    }
    function Pf(e, t, n) {
        var i = Me
          , o = jt()
          , s = Ye;
        if (s) {
            if (n === void 0)
                throw Error(c(407));
            n = n()
        } else
            n = t();
        var h = !zn((nt || o).memoizedState, n);
        if (h && (o.memoizedState = n,
        Rt = !0),
        o = o.queue,
        pc(nd.bind(null, i, o, e), [e]),
        o.getSnapshot !== t || h || Et !== null && Et.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Ji(9, {
                destroy: void 0
            }, td.bind(null, i, o, n, t), null),
            ot === null)
                throw Error(c(349));
            s || (nl & 127) !== 0 || ed(i, t, n)
        }
        return n
    }
    function ed(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = Me.updateQueue,
        t === null ? (t = Ns(),
        Me.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function td(e, t, n, i) {
        t.value = n,
        t.getSnapshot = i,
        ad(t) && ld(e)
    }
    function nd(e, t, n) {
        return n(function() {
            ad(t) && ld(e)
        })
    }
    function ad(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !zn(e, n)
        } catch {
            return !0
        }
    }
    function ld(e) {
        var t = di(e, 2);
        t !== null && vn(t, e, 2)
    }
    function hc(e) {
        var t = en();
        if (typeof e == "function") {
            var n = e;
            if (e = n(),
            xi) {
                gt(!0);
                try {
                    n()
                } finally {
                    gt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: al,
            lastRenderedState: e
        },
        t
    }
    function id(e, t, n, i) {
        return e.baseState = n,
        dc(e, nt, typeof i == "function" ? i : al)
    }
    function N1(e, t, n, i, o) {
        if (Ms(e))
            throw Error(c(485));
        if (e = t.action,
        e !== null) {
            var s = {
                payload: o,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    s.listeners.push(h)
                }
            };
            j.T !== null ? n(!0) : s.isTransition = !1,
            i(s),
            n = t.pending,
            n === null ? (s.next = t.pending = s,
            od(t, s)) : (s.next = n.next,
            t.pending = n.next = s)
        }
    }
    function od(e, t) {
        var n = t.action
          , i = t.payload
          , o = e.state;
        if (t.isTransition) {
            var s = j.T
              , h = {};
            j.T = h;
            try {
                var v = n(o, i)
                  , S = j.S;
                S !== null && S(h, v),
                sd(e, t, v)
            } catch (L) {
                yc(e, t, L)
            } finally {
                s !== null && h.types !== null && (s.types = h.types),
                j.T = s
            }
        } else
            try {
                s = n(o, i),
                sd(e, t, s)
            } catch (L) {
                yc(e, t, L)
            }
    }
    function sd(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
            rd(e, t, i)
        }, function(i) {
            return yc(e, t, i)
        }) : rd(e, t, n)
    }
    function rd(e, t, n) {
        t.status = "fulfilled",
        t.value = n,
        cd(t),
        e.state = n,
        t = e.pending,
        t !== null && (n = t.next,
        n === t ? e.pending = null : (n = n.next,
        t.next = n,
        od(e, n)))
    }
    function yc(e, t, n) {
        var i = e.pending;
        if (e.pending = null,
        i !== null) {
            i = i.next;
            do
                t.status = "rejected",
                t.reason = n,
                cd(t),
                t = t.next;
            while (t !== i)
        }
        e.action = null
    }
    function cd(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function ud(e, t) {
        return t
    }
    function fd(e, t) {
        if (Ye) {
            var n = ot.formState;
            if (n !== null) {
                e: {
                    var i = Me;
                    if (Ye) {
                        if (rt) {
                            t: {
                                for (var o = rt, s = la; o.nodeType !== 8; ) {
                                    if (!s) {
                                        o = null;
                                        break t
                                    }
                                    if (o = oa(o.nextSibling),
                                    o === null) {
                                        o = null;
                                        break t
                                    }
                                }
                                s = o.data,
                                o = s === "F!" || s === "F" ? o : null
                            }
                            if (o) {
                                rt = oa(o.nextSibling),
                                i = o.data === "F!";
                                break e
                            }
                        }
                        Ll(i)
                    }
                    i = !1
                }
                i && (t = n[0])
            }
        }
        return n = en(),
        n.memoizedState = n.baseState = t,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ud,
            lastRenderedState: t
        },
        n.queue = i,
        n = Md.bind(null, Me, i),
        i.dispatch = n,
        i = hc(!1),
        s = xc.bind(null, Me, !1, i.queue),
        i = en(),
        o = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        i.queue = o,
        n = N1.bind(null, Me, o, s, n),
        o.dispatch = n,
        i.memoizedState = e,
        [t, n, !1]
    }
    function dd(e) {
        var t = jt();
        return md(t, nt, e)
    }
    function md(e, t, n) {
        if (t = dc(e, t, ud)[0],
        e = As(al)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var i = Ro(t)
            } catch (h) {
                throw h === Vi ? gs : h
            }
        else
            i = t;
        t = jt();
        var o = t.queue
          , s = o.dispatch;
        return n !== t.memoizedState && (Me.flags |= 2048,
        Ji(9, {
            destroy: void 0
        }, j1.bind(null, o, n), null)),
        [i, s, e]
    }
    function j1(e, t) {
        e.action = t
    }
    function hd(e) {
        var t = jt()
          , n = nt;
        if (n !== null)
            return md(t, n, e);
        jt(),
        t = t.memoizedState,
        n = jt();
        var i = n.queue.dispatch;
        return n.memoizedState = e,
        [t, i, !1]
    }
    function Ji(e, t, n, i) {
        return e = {
            tag: e,
            create: n,
            deps: i,
            inst: t,
            next: null
        },
        t = Me.updateQueue,
        t === null && (t = Ns(),
        Me.updateQueue = t),
        n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (i = n.next,
        n.next = e,
        e.next = i,
        t.lastEffect = e),
        e
    }
    function yd() {
        return jt().memoizedState
    }
    function Es(e, t, n, i) {
        var o = en();
        Me.flags |= e,
        o.memoizedState = Ji(1 | t, {
            destroy: void 0
        }, n, i === void 0 ? null : i)
    }
    function Rs(e, t, n, i) {
        var o = jt();
        i = i === void 0 ? null : i;
        var s = o.memoizedState.inst;
        nt !== null && i !== null && oc(i, nt.memoizedState.deps) ? o.memoizedState = Ji(t, s, n, i) : (Me.flags |= e,
        o.memoizedState = Ji(1 | t, s, n, i))
    }
    function pd(e, t) {
        Es(8390656, 8, e, t)
    }
    function pc(e, t) {
        Rs(2048, 8, e, t)
    }
    function A1(e) {
        Me.flags |= 4;
        var t = Me.updateQueue;
        if (t === null)
            t = Ns(),
            Me.updateQueue = t,
            t.events = [e];
        else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e)
        }
    }
    function gd(e) {
        var t = jt().memoizedState;
        return A1({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((Je & 2) !== 0)
                throw Error(c(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function vd(e, t) {
        return Rs(4, 2, e, t)
    }
    function _d(e, t) {
        return Rs(4, 4, e, t)
    }
    function bd(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function xd(e, t, n) {
        n = n != null ? n.concat([e]) : null,
        Rs(4, 4, bd.bind(null, t, e), n)
    }
    function gc() {}
    function Sd(e, t) {
        var n = jt();
        t = t === void 0 ? null : t;
        var i = n.memoizedState;
        return t !== null && oc(t, i[1]) ? i[0] : (n.memoizedState = [e, t],
        e)
    }
    function Cd(e, t) {
        var n = jt();
        t = t === void 0 ? null : t;
        var i = n.memoizedState;
        if (t !== null && oc(t, i[1]))
            return i[0];
        if (i = e(),
        xi) {
            gt(!0);
            try {
                e()
            } finally {
                gt(!1)
            }
        }
        return n.memoizedState = [i, t],
        i
    }
    function vc(e, t, n) {
        return n === void 0 || (nl & 1073741824) !== 0 && (Ge & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n,
        e = Tm(),
        Me.lanes |= e,
        Vl |= e,
        n)
    }
    function Td(e, t, n, i) {
        return zn(n, t) ? n : Qi.current !== null ? (e = vc(e, n, i),
        zn(e, t) || (Rt = !0),
        e) : (nl & 42) === 0 || (nl & 1073741824) !== 0 && (Ge & 261930) === 0 ? (Rt = !0,
        e.memoizedState = n) : (e = Tm(),
        Me.lanes |= e,
        Vl |= e,
        t)
    }
    function Nd(e, t, n, i, o) {
        var s = H.p;
        H.p = s !== 0 && 8 > s ? s : 8;
        var h = j.T
          , v = {};
        j.T = v,
        xc(e, !1, t, n);
        try {
            var S = o()
              , L = j.S;
            if (L !== null && L(v, S),
            S !== null && typeof S == "object" && typeof S.then == "function") {
                var I = S1(S, i);
                Mo(e, t, I, qn(e))
            } else
                Mo(e, t, i, qn(e))
        } catch (te) {
            Mo(e, t, {
                then: function() {},
                status: "rejected",
                reason: te
            }, qn())
        } finally {
            H.p = s,
            h !== null && v.types !== null && (h.types = v.types),
            j.T = h
        }
    }
    function E1() {}
    function _c(e, t, n, i) {
        if (e.tag !== 5)
            throw Error(c(476));
        var o = jd(e).queue;
        Nd(e, o, t, E, n === null ? E1 : function() {
            return Ad(e),
            n(i)
        }
        )
    }
    function jd(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: E,
            baseState: E,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: al,
                lastRenderedState: E
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: al,
                lastRenderedState: n
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Ad(e) {
        var t = jd(e);
        t.next === null && (t = e.alternate.memoizedState),
        Mo(e, t.next.queue, {}, qn())
    }
    function bc() {
        return Xt(Ko)
    }
    function Ed() {
        return jt().memoizedState
    }
    function Rd() {
        return jt().memoizedState
    }
    function R1(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var n = qn();
                e = ql(n);
                var i = Ul(t, e, n);
                i !== null && (vn(i, t, n),
                No(i, t, n)),
                t = {
                    cache: Jr()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function M1(e, t, n) {
        var i = qn();
        n = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ms(e) ? wd(t, n) : (n = qr(e, t, n, i),
        n !== null && (vn(n, e, i),
        zd(n, t, i)))
    }
    function Md(e, t, n) {
        var i = qn();
        Mo(e, t, n, i)
    }
    function Mo(e, t, n, i) {
        var o = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ms(e))
            wd(t, o);
        else {
            var s = e.alternate;
            if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
            s !== null))
                try {
                    var h = t.lastRenderedState
                      , v = s(h, n);
                    if (o.hasEagerState = !0,
                    o.eagerState = v,
                    zn(v, h))
                        return us(e, t, o, 0),
                        ot === null && cs(),
                        !1
                } catch {}
            if (n = qr(e, t, o, i),
            n !== null)
                return vn(n, e, i),
                zd(n, t, i),
                !0
        }
        return !1
    }
    function xc(e, t, n, i) {
        if (i = {
            lane: 2,
            revertLane: Pc(),
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ms(e)) {
            if (t)
                throw Error(c(479))
        } else
            t = qr(e, n, i, 2),
            t !== null && vn(t, e, 2)
    }
    function Ms(e) {
        var t = e.alternate;
        return e === Me || t !== null && t === Me
    }
    function wd(e, t) {
        Ki = Cs = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function zd(e, t, n) {
        if ((n & 4194048) !== 0) {
            var i = t.lanes;
            i &= e.pendingLanes,
            n |= i,
            t.lanes = n,
            sn(e, n)
        }
    }
    var wo = {
        readContext: Xt,
        use: js,
        useCallback: Ct,
        useContext: Ct,
        useEffect: Ct,
        useImperativeHandle: Ct,
        useLayoutEffect: Ct,
        useInsertionEffect: Ct,
        useMemo: Ct,
        useReducer: Ct,
        useRef: Ct,
        useState: Ct,
        useDebugValue: Ct,
        useDeferredValue: Ct,
        useTransition: Ct,
        useSyncExternalStore: Ct,
        useId: Ct,
        useHostTransitionStatus: Ct,
        useFormState: Ct,
        useActionState: Ct,
        useOptimistic: Ct,
        useMemoCache: Ct,
        useCacheRefresh: Ct
    };
    wo.useEffectEvent = Ct;
    var kd = {
        readContext: Xt,
        use: js,
        useCallback: function(e, t) {
            return en().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Xt,
        useEffect: pd,
        useImperativeHandle: function(e, t, n) {
            n = n != null ? n.concat([e]) : null,
            Es(4194308, 4, bd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Es(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Es(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = en();
            t = t === void 0 ? null : t;
            var i = e();
            if (xi) {
                gt(!0);
                try {
                    e()
                } finally {
                    gt(!1)
                }
            }
            return n.memoizedState = [i, t],
            i
        },
        useReducer: function(e, t, n) {
            var i = en();
            if (n !== void 0) {
                var o = n(t);
                if (xi) {
                    gt(!0);
                    try {
                        n(t)
                    } finally {
                        gt(!1)
                    }
                }
            } else
                o = t;
            return i.memoizedState = i.baseState = o,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o
            },
            i.queue = e,
            e = e.dispatch = M1.bind(null, Me, e),
            [i.memoizedState, e]
        },
        useRef: function(e) {
            var t = en();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = hc(e);
            var t = e.queue
              , n = Md.bind(null, Me, t);
            return t.dispatch = n,
            [e.memoizedState, n]
        },
        useDebugValue: gc,
        useDeferredValue: function(e, t) {
            var n = en();
            return vc(n, e, t)
        },
        useTransition: function() {
            var e = hc(!1);
            return e = Nd.bind(null, Me, e.queue, !0, !1),
            en().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var i = Me
              , o = en();
            if (Ye) {
                if (n === void 0)
                    throw Error(c(407));
                n = n()
            } else {
                if (n = t(),
                ot === null)
                    throw Error(c(349));
                (Ge & 127) !== 0 || ed(i, t, n)
            }
            o.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return o.queue = s,
            pd(nd.bind(null, i, s, e), [e]),
            i.flags |= 2048,
            Ji(9, {
                destroy: void 0
            }, td.bind(null, i, s, n, t), null),
            n
        },
        useId: function() {
            var e = en()
              , t = ot.identifierPrefix;
            if (Ye) {
                var n = Oa
                  , i = La;
                n = (i & ~(1 << 32 - vt(i) - 1)).toString(32) + n,
                t = "_" + t + "R_" + n,
                n = Ts++,
                0 < n && (t += "H" + n.toString(32)),
                t += "_"
            } else
                n = C1++,
                t = "_" + t + "r_" + n.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: bc,
        useFormState: fd,
        useActionState: fd,
        useOptimistic: function(e) {
            var t = en();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = xc.bind(null, Me, !0, n),
            n.dispatch = t,
            [e, t]
        },
        useMemoCache: fc,
        useCacheRefresh: function() {
            return en().memoizedState = R1.bind(null, Me)
        },
        useEffectEvent: function(e) {
            var t = en()
              , n = {
                impl: e
            };
            return t.memoizedState = n,
            function() {
                if ((Je & 2) !== 0)
                    throw Error(c(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , Sc = {
        readContext: Xt,
        use: js,
        useCallback: Sd,
        useContext: Xt,
        useEffect: pc,
        useImperativeHandle: xd,
        useInsertionEffect: vd,
        useLayoutEffect: _d,
        useMemo: Cd,
        useReducer: As,
        useRef: yd,
        useState: function() {
            return As(al)
        },
        useDebugValue: gc,
        useDeferredValue: function(e, t) {
            var n = jt();
            return Td(n, nt.memoizedState, e, t)
        },
        useTransition: function() {
            var e = As(al)[0]
              , t = jt().memoizedState;
            return [typeof e == "boolean" ? e : Ro(e), t]
        },
        useSyncExternalStore: Pf,
        useId: Ed,
        useHostTransitionStatus: bc,
        useFormState: dd,
        useActionState: dd,
        useOptimistic: function(e, t) {
            var n = jt();
            return id(n, nt, e, t)
        },
        useMemoCache: fc,
        useCacheRefresh: Rd
    };
    Sc.useEffectEvent = gd;
    var Dd = {
        readContext: Xt,
        use: js,
        useCallback: Sd,
        useContext: Xt,
        useEffect: pc,
        useImperativeHandle: xd,
        useInsertionEffect: vd,
        useLayoutEffect: _d,
        useMemo: Cd,
        useReducer: mc,
        useRef: yd,
        useState: function() {
            return mc(al)
        },
        useDebugValue: gc,
        useDeferredValue: function(e, t) {
            var n = jt();
            return nt === null ? vc(n, e, t) : Td(n, nt.memoizedState, e, t)
        },
        useTransition: function() {
            var e = mc(al)[0]
              , t = jt().memoizedState;
            return [typeof e == "boolean" ? e : Ro(e), t]
        },
        useSyncExternalStore: Pf,
        useId: Ed,
        useHostTransitionStatus: bc,
        useFormState: hd,
        useActionState: hd,
        useOptimistic: function(e, t) {
            var n = jt();
            return nt !== null ? id(n, nt, e, t) : (n.baseState = e,
            [e, n.queue.dispatch])
        },
        useMemoCache: fc,
        useCacheRefresh: Rd
    };
    Dd.useEffectEvent = gd;
    function Cc(e, t, n, i) {
        t = e.memoizedState,
        n = n(i, t),
        n = n == null ? t : x({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Tc = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var i = qn()
              , o = ql(i);
            o.payload = t,
            n != null && (o.callback = n),
            t = Ul(e, o, i),
            t !== null && (vn(t, e, i),
            No(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var i = qn()
              , o = ql(i);
            o.tag = 1,
            o.payload = t,
            n != null && (o.callback = n),
            t = Ul(e, o, i),
            t !== null && (vn(t, e, i),
            No(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = qn()
              , i = ql(n);
            i.tag = 2,
            t != null && (i.callback = t),
            t = Ul(e, i, n),
            t !== null && (vn(t, e, n),
            No(t, e, n))
        }
    };
    function Ld(e, t, n, i, o, s, h) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, s, h) : t.prototype && t.prototype.isPureReactComponent ? !go(n, i) || !go(o, s) : !0
    }
    function Od(e, t, n, i) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i),
        t.state !== e && Tc.enqueueReplaceState(t, t.state, null)
    }
    function Si(e, t) {
        var n = t;
        if ("ref"in t) {
            n = {};
            for (var i in t)
                i !== "ref" && (n[i] = t[i])
        }
        if (e = e.defaultProps) {
            n === t && (n = x({}, n));
            for (var o in e)
                n[o] === void 0 && (n[o] = e[o])
        }
        return n
    }
    function Bd(e) {
        rs(e)
    }
    function qd(e) {
        console.error(e)
    }
    function Ud(e) {
        rs(e)
    }
    function ws(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function Gd(e, t, n) {
        try {
            var i = e.onCaughtError;
            i(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    function Nc(e, t, n) {
        return n = ql(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            ws(e, t)
        }
        ,
        n
    }
    function Hd(e) {
        return e = ql(e),
        e.tag = 3,
        e
    }
    function $d(e, t, n, i) {
        var o = n.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var s = i.value;
            e.payload = function() {
                return o(s)
            }
            ,
            e.callback = function() {
                Gd(t, n, i)
            }
        }
        var h = n.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
            Gd(t, n, i),
            typeof o != "function" && (Xl === null ? Xl = new Set([this]) : Xl.add(this));
            var v = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function w1(e, t, n, i, o) {
        if (n.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (t = n.alternate,
            t !== null && Hi(t, n, o, !0),
            n = Dn.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return ia === null ? Ys() : n.alternate === null && Tt === 0 && (Tt = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = o,
                    i === vs ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? n.updateQueue = new Set([i]) : t.add(i),
                    Ic(e, i, o)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    i === vs ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i])
                    },
                    n.updateQueue = t) : (n = t.retryQueue,
                    n === null ? t.retryQueue = new Set([i]) : n.add(i)),
                    Ic(e, i, o)),
                    !1
                }
                throw Error(c(435, n.tag))
            }
            return Ic(e, i, o),
            Ys(),
            !1
        }
        if (Ye)
            return t = Dn.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = o,
            i !== Vr && (e = Error(c(422), {
                cause: i
            }),
            bo(ta(e, n)))) : (i !== Vr && (t = Error(c(423), {
                cause: i
            }),
            bo(ta(t, n))),
            e = e.current.alternate,
            e.flags |= 65536,
            o &= -o,
            e.lanes |= o,
            i = ta(i, n),
            o = Nc(e.stateNode, i, o),
            tc(e, o),
            Tt !== 4 && (Tt = 2)),
            !1;
        var s = Error(c(520), {
            cause: i
        });
        if (s = ta(s, n),
        Uo === null ? Uo = [s] : Uo.push(s),
        Tt !== 4 && (Tt = 2),
        t === null)
            return !0;
        i = ta(i, n),
        n = t;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                e = o & -o,
                n.lanes |= e,
                e = Nc(n.stateNode, i, e),
                tc(n, e),
                !1;
            case 1:
                if (t = n.type,
                s = n.stateNode,
                (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Xl === null || !Xl.has(s))))
                    return n.flags |= 65536,
                    o &= -o,
                    n.lanes |= o,
                    o = Hd(o),
                    $d(o, e, n, i),
                    tc(n, o),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var jc = Error(c(461))
      , Rt = !1;
    function Qt(e, t, n, i) {
        t.child = e === null ? Qf(t, null, n, i) : bi(t, e.child, n, i)
    }
    function Yd(e, t, n, i, o) {
        n = n.render;
        var s = t.ref;
        if ("ref"in i) {
            var h = {};
            for (var v in i)
                v !== "ref" && (h[v] = i[v])
        } else
            h = i;
        return pi(t),
        i = sc(e, t, n, h, s, o),
        v = rc(),
        e !== null && !Rt ? (cc(e, t, o),
        ll(e, t, o)) : (Ye && v && $r(t),
        t.flags |= 1,
        Qt(e, t, i, o),
        t.child)
    }
    function Vd(e, t, n, i, o) {
        if (e === null) {
            var s = n.type;
            return typeof s == "function" && !Ur(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
            t.type = s,
            Xd(e, t, s, i, o)) : (e = ds(n.type, null, i, t, t.mode, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (s = e.child,
        !Dc(e, o)) {
            var h = s.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : go,
            n(h, i) && e.ref === t.ref)
                return ll(e, t, o)
        }
        return t.flags |= 1,
        e = Fa(s, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Xd(e, t, n, i, o) {
        if (e !== null) {
            var s = e.memoizedProps;
            if (go(s, i) && e.ref === t.ref)
                if (Rt = !1,
                t.pendingProps = i = s,
                Dc(e, o))
                    (e.flags & 131072) !== 0 && (Rt = !0);
                else
                    return t.lanes = e.lanes,
                    ll(e, t, o)
        }
        return Ac(e, t, n, i, o)
    }
    function Qd(e, t, n, i) {
        var o = i.children
          , s = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        i.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (s = s !== null ? s.baseLanes | n : n,
                e !== null) {
                    for (i = t.child = e.child,
                    o = 0; i !== null; )
                        o = o | i.lanes | i.childLanes,
                        i = i.sibling;
                    i = o & ~s
                } else
                    i = 0,
                    t.child = null;
                return Kd(e, t, s, n, i)
            }
            if ((n & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && ps(t, s !== null ? s.cachePool : null),
                s !== null ? Jf(t, s) : ac(),
                If(t);
            else
                return i = t.lanes = 536870912,
                Kd(e, t, s !== null ? s.baseLanes | n : n, n, i)
        } else
            s !== null ? (ps(t, s.cachePool),
            Jf(t, s),
            Hl(),
            t.memoizedState = null) : (e !== null && ps(t, null),
            ac(),
            Hl());
        return Qt(e, t, o, n),
        t.child
    }
    function zo(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Kd(e, t, n, i, o) {
        var s = Wr();
        return s = s === null ? null : {
            parent: At._currentValue,
            pool: s
        },
        t.memoizedState = {
            baseLanes: n,
            cachePool: s
        },
        e !== null && ps(t, null),
        ac(),
        If(t),
        e !== null && Hi(e, t, i, !0),
        t.childLanes = o,
        null
    }
    function zs(e, t) {
        return t = Ds({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Zd(e, t, n) {
        return bi(t, e.child, null, n),
        e = zs(t, t.pendingProps),
        e.flags |= 2,
        Ln(t),
        t.memoizedState = null,
        e
    }
    function z1(e, t, n) {
        var i = t.pendingProps
          , o = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (Ye) {
                if (i.mode === "hidden")
                    return e = zs(t, i),
                    t.lanes = 536870912,
                    zo(null, e);
                if (ic(t),
                (e = rt) ? (e = oh(e, la),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: kl !== null ? {
                        id: La,
                        overflow: Oa
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = wf(e),
                n.return = t,
                t.child = n,
                Vt = t,
                rt = null)) : e = null,
                e === null)
                    throw Ll(t);
                return t.lanes = 536870912,
                null
            }
            return zs(t, i)
        }
        var s = e.memoizedState;
        if (s !== null) {
            var h = s.dehydrated;
            if (ic(t),
            o)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Zd(e, t, n);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(c(558));
            else if (Rt || Hi(e, t, n, !1),
            o = (n & e.childLanes) !== 0,
            Rt || o) {
                if (i = ot,
                i !== null && (h = Tn(i, n),
                h !== 0 && h !== s.retryLane))
                    throw s.retryLane = h,
                    di(e, h),
                    vn(i, e, h),
                    jc;
                Ys(),
                t = Zd(e, t, n)
            } else
                e = s.treeContext,
                rt = oa(h.nextSibling),
                Vt = t,
                Ye = !0,
                Dl = null,
                la = !1,
                e !== null && Df(t, e),
                t = zs(t, i),
                t.flags |= 4096;
            return t
        }
        return e = Fa(e.child, {
            mode: i.mode,
            children: i.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function ks(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(c(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }
    function Ac(e, t, n, i, o) {
        return pi(t),
        n = sc(e, t, n, i, void 0, o),
        i = rc(),
        e !== null && !Rt ? (cc(e, t, o),
        ll(e, t, o)) : (Ye && i && $r(t),
        t.flags |= 1,
        Qt(e, t, n, o),
        t.child)
    }
    function Jd(e, t, n, i, o, s) {
        return pi(t),
        t.updateQueue = null,
        n = Ff(t, i, n, o),
        Wf(e),
        i = rc(),
        e !== null && !Rt ? (cc(e, t, s),
        ll(e, t, s)) : (Ye && i && $r(t),
        t.flags |= 1,
        Qt(e, t, n, s),
        t.child)
    }
    function Id(e, t, n, i, o) {
        if (pi(t),
        t.stateNode === null) {
            var s = Bi
              , h = n.contextType;
            typeof h == "object" && h !== null && (s = Xt(h)),
            s = new n(i,s),
            t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
            s.updater = Tc,
            t.stateNode = s,
            s._reactInternals = t,
            s = t.stateNode,
            s.props = i,
            s.state = t.memoizedState,
            s.refs = {},
            Pr(t),
            h = n.contextType,
            s.context = typeof h == "object" && h !== null ? Xt(h) : Bi,
            s.state = t.memoizedState,
            h = n.getDerivedStateFromProps,
            typeof h == "function" && (Cc(t, n, h, i),
            s.state = t.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (h = s.state,
            typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
            h !== s.state && Tc.enqueueReplaceState(s, s.state, null),
            Ao(t, i, s, o),
            jo(),
            s.state = t.memoizedState),
            typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            i = !0
        } else if (e === null) {
            s = t.stateNode;
            var v = t.memoizedProps
              , S = Si(n, v);
            s.props = S;
            var L = s.context
              , I = n.contextType;
            h = Bi,
            typeof I == "object" && I !== null && (h = Xt(I));
            var te = n.getDerivedStateFromProps;
            I = typeof te == "function" || typeof s.getSnapshotBeforeUpdate == "function",
            v = t.pendingProps !== v,
            I || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || L !== h) && Od(t, s, i, h),
            Bl = !1;
            var q = t.memoizedState;
            s.state = q,
            Ao(t, i, s, o),
            jo(),
            L = t.memoizedState,
            v || q !== L || Bl ? (typeof te == "function" && (Cc(t, n, te, i),
            L = t.memoizedState),
            (S = Bl || Ld(t, n, S, i, q, L, h)) ? (I || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
            typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = i,
            t.memoizedState = L),
            s.props = i,
            s.state = L,
            s.context = h,
            i = S) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            i = !1)
        } else {
            s = t.stateNode,
            ec(e, t),
            h = t.memoizedProps,
            I = Si(n, h),
            s.props = I,
            te = t.pendingProps,
            q = s.context,
            L = n.contextType,
            S = Bi,
            typeof L == "object" && L !== null && (S = Xt(L)),
            v = n.getDerivedStateFromProps,
            (L = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (h !== te || q !== S) && Od(t, s, i, S),
            Bl = !1,
            q = t.memoizedState,
            s.state = q,
            Ao(t, i, s, o),
            jo();
            var V = t.memoizedState;
            h !== te || q !== V || Bl || e !== null && e.dependencies !== null && hs(e.dependencies) ? (typeof v == "function" && (Cc(t, n, v, i),
            V = t.memoizedState),
            (I = Bl || Ld(t, n, I, i, q, V, S) || e !== null && e.dependencies !== null && hs(e.dependencies)) ? (L || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, V, S),
            typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, V, S)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || h === e.memoizedProps && q === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = i,
            t.memoizedState = V),
            s.props = i,
            s.state = V,
            s.context = S,
            i = I) : (typeof s.componentDidUpdate != "function" || h === e.memoizedProps && q === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024),
            i = !1)
        }
        return s = i,
        ks(e, t),
        i = (t.flags & 128) !== 0,
        s || i ? (s = t.stateNode,
        n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(),
        t.flags |= 1,
        e !== null && i ? (t.child = bi(t, e.child, null, o),
        t.child = bi(t, null, n, o)) : Qt(e, t, n, o),
        t.memoizedState = s.state,
        e = t.child) : e = ll(e, t, o),
        e
    }
    function Wd(e, t, n, i) {
        return hi(),
        t.flags |= 256,
        Qt(e, t, n, i),
        t.child
    }
    var Ec = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Rc(e) {
        return {
            baseLanes: e,
            cachePool: Gf()
        }
    }
    function Mc(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0,
        t && (e |= Bn),
        e
    }
    function Fd(e, t, n) {
        var i = t.pendingProps, o = !1, s = (t.flags & 128) !== 0, h;
        if ((h = s) || (h = e !== null && e.memoizedState === null ? !1 : (Nt.current & 2) !== 0),
        h && (o = !0,
        t.flags &= -129),
        h = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Ye) {
                if (o ? Gl(t) : Hl(),
                (e = rt) ? (e = oh(e, la),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: kl !== null ? {
                        id: La,
                        overflow: Oa
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = wf(e),
                n.return = t,
                t.child = n,
                Vt = t,
                rt = null)) : e = null,
                e === null)
                    throw Ll(t);
                return du(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var v = i.children;
            return i = i.fallback,
            o ? (Hl(),
            o = t.mode,
            v = Ds({
                mode: "hidden",
                children: v
            }, o),
            i = mi(i, o, n, null),
            v.return = t,
            i.return = t,
            v.sibling = i,
            t.child = v,
            i = t.child,
            i.memoizedState = Rc(n),
            i.childLanes = Mc(e, h, n),
            t.memoizedState = Ec,
            zo(null, i)) : (Gl(t),
            wc(t, v))
        }
        var S = e.memoizedState;
        if (S !== null && (v = S.dehydrated,
        v !== null)) {
            if (s)
                t.flags & 256 ? (Gl(t),
                t.flags &= -257,
                t = zc(e, t, n)) : t.memoizedState !== null ? (Hl(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Hl(),
                v = i.fallback,
                o = t.mode,
                i = Ds({
                    mode: "visible",
                    children: i.children
                }, o),
                v = mi(v, o, n, null),
                v.flags |= 2,
                i.return = t,
                v.return = t,
                i.sibling = v,
                t.child = i,
                bi(t, e.child, null, n),
                i = t.child,
                i.memoizedState = Rc(n),
                i.childLanes = Mc(e, h, n),
                t.memoizedState = Ec,
                t = zo(null, i));
            else if (Gl(t),
            du(v)) {
                if (h = v.nextSibling && v.nextSibling.dataset,
                h)
                    var L = h.dgst;
                h = L,
                i = Error(c(419)),
                i.stack = "",
                i.digest = h,
                bo({
                    value: i,
                    source: null,
                    stack: null
                }),
                t = zc(e, t, n)
            } else if (Rt || Hi(e, t, n, !1),
            h = (n & e.childLanes) !== 0,
            Rt || h) {
                if (h = ot,
                h !== null && (i = Tn(h, n),
                i !== 0 && i !== S.retryLane))
                    throw S.retryLane = i,
                    di(e, i),
                    vn(h, e, i),
                    jc;
                fu(v) || Ys(),
                t = zc(e, t, n)
            } else
                fu(v) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = S.treeContext,
                rt = oa(v.nextSibling),
                Vt = t,
                Ye = !0,
                Dl = null,
                la = !1,
                e !== null && Df(t, e),
                t = wc(t, i.children),
                t.flags |= 4096);
            return t
        }
        return o ? (Hl(),
        v = i.fallback,
        o = t.mode,
        S = e.child,
        L = S.sibling,
        i = Fa(S, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = S.subtreeFlags & 65011712,
        L !== null ? v = Fa(L, v) : (v = mi(v, o, n, null),
        v.flags |= 2),
        v.return = t,
        i.return = t,
        i.sibling = v,
        t.child = i,
        zo(null, i),
        i = t.child,
        v = e.child.memoizedState,
        v === null ? v = Rc(n) : (o = v.cachePool,
        o !== null ? (S = At._currentValue,
        o = o.parent !== S ? {
            parent: S,
            pool: S
        } : o) : o = Gf(),
        v = {
            baseLanes: v.baseLanes | n,
            cachePool: o
        }),
        i.memoizedState = v,
        i.childLanes = Mc(e, h, n),
        t.memoizedState = Ec,
        zo(e.child, i)) : (Gl(t),
        n = e.child,
        e = n.sibling,
        n = Fa(n, {
            mode: "visible",
            children: i.children
        }),
        n.return = t,
        n.sibling = null,
        e !== null && (h = t.deletions,
        h === null ? (t.deletions = [e],
        t.flags |= 16) : h.push(e)),
        t.child = n,
        t.memoizedState = null,
        n)
    }
    function wc(e, t) {
        return t = Ds({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Ds(e, t) {
        return e = kn(22, e, null, t),
        e.lanes = 0,
        e
    }
    function zc(e, t, n) {
        return bi(t, e.child, null, n),
        e = wc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Pd(e, t, n) {
        e.lanes |= t;
        var i = e.alternate;
        i !== null && (i.lanes |= t),
        Kr(e.return, t, n)
    }
    function kc(e, t, n, i, o, s) {
        var h = e.memoizedState;
        h === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: n,
            tailMode: o,
            treeForkCount: s
        } : (h.isBackwards = t,
        h.rendering = null,
        h.renderingStartTime = 0,
        h.last = i,
        h.tail = n,
        h.tailMode = o,
        h.treeForkCount = s)
    }
    function em(e, t, n) {
        var i = t.pendingProps
          , o = i.revealOrder
          , s = i.tail;
        i = i.children;
        var h = Nt.current
          , v = (h & 2) !== 0;
        if (v ? (h = h & 1 | 2,
        t.flags |= 128) : h &= 1,
        K(Nt, h),
        Qt(e, t, i, n),
        i = Ye ? _o : 0,
        !v && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Pd(e, n, t);
                else if (e.tag === 19)
                    Pd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ss(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            kc(t, !1, o, n, s, i);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ss(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            kc(t, !0, n, null, s, i);
            break;
        case "together":
            kc(t, !1, null, null, void 0, i);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function ll(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        Vl |= t.lanes,
        (n & t.childLanes) === 0)
            if (e !== null) {
                if (Hi(e, t, n, !1),
                (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(c(153));
        if (t.child !== null) {
            for (e = t.child,
            n = Fa(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = Fa(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Dc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && hs(e)))
    }
    function k1(e, t, n) {
        switch (t.tag) {
        case 3:
            me(t, t.stateNode.containerInfo),
            Ol(t, At, e.memoizedState.cache),
            hi();
            break;
        case 27:
        case 5:
            Le(t);
            break;
        case 4:
            me(t, t.stateNode.containerInfo);
            break;
        case 10:
            Ol(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                ic(t),
                null;
            break;
        case 13:
            var i = t.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (Gl(t),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? Fd(e, t, n) : (Gl(t),
                e = ll(e, t, n),
                e !== null ? e.sibling : null);
            Gl(t);
            break;
        case 19:
            var o = (e.flags & 128) !== 0;
            if (i = (n & t.childLanes) !== 0,
            i || (Hi(e, t, n, !1),
            i = (n & t.childLanes) !== 0),
            o) {
                if (i)
                    return em(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            K(Nt, Nt.current),
            i)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Qd(e, t, n, t.pendingProps);
        case 24:
            Ol(t, At, e.memoizedState.cache)
        }
        return ll(e, t, n)
    }
    function tm(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Rt = !0;
            else {
                if (!Dc(e, n) && (t.flags & 128) === 0)
                    return Rt = !1,
                    k1(e, t, n);
                Rt = (e.flags & 131072) !== 0
            }
        else
            Rt = !1,
            Ye && (t.flags & 1048576) !== 0 && kf(t, _o, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var i = t.pendingProps;
                if (e = vi(t.elementType),
                t.type = e,
                typeof e == "function")
                    Ur(e) ? (i = Si(e, i),
                    t.tag = 1,
                    t = Id(null, t, e, i, n)) : (t.tag = 0,
                    t = Ac(null, t, e, i, n));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === X) {
                            t.tag = 11,
                            t = Yd(null, t, e, i, n);
                            break e
                        } else if (o === z) {
                            t.tag = 14,
                            t = Vd(null, t, e, i, n);
                            break e
                        }
                    }
                    throw t = se(e) || e,
                    Error(c(306, t, ""))
                }
            }
            return t;
        case 0:
            return Ac(e, t, t.type, t.pendingProps, n);
        case 1:
            return i = t.type,
            o = Si(i, t.pendingProps),
            Id(e, t, i, o, n);
        case 3:
            e: {
                if (me(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(c(387));
                i = t.pendingProps;
                var s = t.memoizedState;
                o = s.element,
                ec(e, t),
                Ao(t, i, null, n);
                var h = t.memoizedState;
                if (i = h.cache,
                Ol(t, At, i),
                i !== s.cache && Zr(t, [At], n, !0),
                jo(),
                i = h.element,
                s.isDehydrated)
                    if (s = {
                        element: i,
                        isDehydrated: !1,
                        cache: h.cache
                    },
                    t.updateQueue.baseState = s,
                    t.memoizedState = s,
                    t.flags & 256) {
                        t = Wd(e, t, i, n);
                        break e
                    } else if (i !== o) {
                        o = ta(Error(c(424)), t),
                        bo(o),
                        t = Wd(e, t, i, n);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        rt = oa(e.firstChild),
                        Vt = t,
                        Ye = !0,
                        Dl = null,
                        la = !0,
                        n = Qf(t, null, i, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (hi(),
                    i === o) {
                        t = ll(e, t, n);
                        break e
                    }
                    Qt(e, t, i, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return ks(e, t),
            e === null ? (n = dh(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ye || (n = t.type,
            e = t.pendingProps,
            i = Is(fe.current).createElement(n),
            i[Ce] = t,
            i[we] = e,
            Kt(i, n, e),
            st(i),
            t.stateNode = i) : t.memoizedState = dh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Le(t),
            e === null && Ye && (i = t.stateNode = ch(t.type, t.pendingProps, fe.current),
            Vt = t,
            la = !0,
            o = rt,
            Jl(t.type) ? (mu = o,
            rt = oa(i.firstChild)) : rt = o),
            Qt(e, t, t.pendingProps.children, n),
            ks(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Ye && ((o = i = rt) && (i = cp(i, t.type, t.pendingProps, la),
            i !== null ? (t.stateNode = i,
            Vt = t,
            rt = oa(i.firstChild),
            la = !1,
            o = !0) : o = !1),
            o || Ll(t)),
            Le(t),
            o = t.type,
            s = t.pendingProps,
            h = e !== null ? e.memoizedProps : null,
            i = s.children,
            ru(o, s) ? i = null : h !== null && ru(o, h) && (t.flags |= 32),
            t.memoizedState !== null && (o = sc(e, t, T1, null, null, n),
            Ko._currentValue = o),
            ks(e, t),
            Qt(e, t, i, n),
            t.child;
        case 6:
            return e === null && Ye && ((e = n = rt) && (n = up(n, t.pendingProps, la),
            n !== null ? (t.stateNode = n,
            Vt = t,
            rt = null,
            e = !0) : e = !1),
            e || Ll(t)),
            null;
        case 13:
            return Fd(e, t, n);
        case 4:
            return me(t, t.stateNode.containerInfo),
            i = t.pendingProps,
            e === null ? t.child = bi(t, null, i, n) : Qt(e, t, i, n),
            t.child;
        case 11:
            return Yd(e, t, t.type, t.pendingProps, n);
        case 7:
            return Qt(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return Qt(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return Qt(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            return i = t.pendingProps,
            Ol(t, t.type, i.value),
            Qt(e, t, i.children, n),
            t.child;
        case 9:
            return o = t.type._context,
            i = t.pendingProps.children,
            pi(t),
            o = Xt(o),
            i = i(o),
            t.flags |= 1,
            Qt(e, t, i, n),
            t.child;
        case 14:
            return Vd(e, t, t.type, t.pendingProps, n);
        case 15:
            return Xd(e, t, t.type, t.pendingProps, n);
        case 19:
            return em(e, t, n);
        case 31:
            return z1(e, t, n);
        case 22:
            return Qd(e, t, n, t.pendingProps);
        case 24:
            return pi(t),
            i = Xt(At),
            e === null ? (o = Wr(),
            o === null && (o = ot,
            s = Jr(),
            o.pooledCache = s,
            s.refCount++,
            s !== null && (o.pooledCacheLanes |= n),
            o = s),
            t.memoizedState = {
                parent: i,
                cache: o
            },
            Pr(t),
            Ol(t, At, o)) : ((e.lanes & n) !== 0 && (ec(e, t),
            Ao(t, null, null, n),
            jo()),
            o = e.memoizedState,
            s = t.memoizedState,
            o.parent !== i ? (o = {
                parent: i,
                cache: i
            },
            t.memoizedState = o,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o),
            Ol(t, At, i)) : (i = s.cache,
            Ol(t, At, i),
            i !== o.cache && Zr(t, [At], n, !0))),
            Qt(e, t, t.pendingProps.children, n),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(c(156, t.tag))
    }
    function il(e) {
        e.flags |= 4
    }
    function Lc(e, t, n, i, o) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (o & 335544128) === o)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Em())
                    e.flags |= 8192;
                else
                    throw _i = vs,
                    Fr
        } else
            e.flags &= -16777217
    }
    function nm(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !gh(t))
            if (Em())
                e.flags |= 8192;
            else
                throw _i = vs,
                Fr
    }
    function Ls(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ma() : 536870912,
        e.lanes |= t,
        Pi |= t)
    }
    function ko(e, t) {
        if (!Ye)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var i = null; n !== null; )
                    n.alternate !== null && (i = n),
                    n = n.sibling;
                i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null
            }
    }
    function ct(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , i = 0;
        if (t)
            for (var o = e.child; o !== null; )
                n |= o.lanes | o.childLanes,
                i |= o.subtreeFlags & 65011712,
                i |= o.flags & 65011712,
                o.return = e,
                o = o.sibling;
        else
            for (o = e.child; o !== null; )
                n |= o.lanes | o.childLanes,
                i |= o.subtreeFlags,
                i |= o.flags,
                o.return = e,
                o = o.sibling;
        return e.subtreeFlags |= i,
        e.childLanes = n,
        t
    }
    function D1(e, t, n) {
        var i = t.pendingProps;
        switch (Yr(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ct(t),
            null;
        case 1:
            return ct(t),
            null;
        case 3:
            return n = t.stateNode,
            i = null,
            e !== null && (i = e.memoizedState.cache),
            t.memoizedState.cache !== i && (t.flags |= 2048),
            tl(At),
            ge(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (e === null || e.child === null) && (Gi(t) ? il(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Xr())),
            ct(t),
            null;
        case 26:
            var o = t.type
              , s = t.memoizedState;
            return e === null ? (il(t),
            s !== null ? (ct(t),
            nm(t, s)) : (ct(t),
            Lc(t, o, null, i, n))) : s ? s !== e.memoizedState ? (il(t),
            ct(t),
            nm(t, s)) : (ct(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== i && il(t),
            ct(t),
            Lc(t, o, e, i, n)),
            null;
        case 27:
            if (dt(t),
            n = fe.current,
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== i && il(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return ct(t),
                    null
                }
                e = W.current,
                Gi(t) ? Lf(t) : (e = ch(o, i, n),
                t.stateNode = e,
                il(t))
            }
            return ct(t),
            null;
        case 5:
            if (dt(t),
            o = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== i && il(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return ct(t),
                    null
                }
                if (s = W.current,
                Gi(t))
                    Lf(t);
                else {
                    var h = Is(fe.current);
                    switch (s) {
                    case 1:
                        s = h.createElementNS("http://www.w3.org/2000/svg", o);
                        break;
                    case 2:
                        s = h.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                        break;
                    default:
                        switch (o) {
                        case "svg":
                            s = h.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case "math":
                            s = h.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        case "script":
                            s = h.createElement("div"),
                            s.innerHTML = "<script><\/script>",
                            s = s.removeChild(s.firstChild);
                            break;
                        case "select":
                            s = typeof i.is == "string" ? h.createElement("select", {
                                is: i.is
                            }) : h.createElement("select"),
                            i.multiple ? s.multiple = !0 : i.size && (s.size = i.size);
                            break;
                        default:
                            s = typeof i.is == "string" ? h.createElement(o, {
                                is: i.is
                            }) : h.createElement(o)
                        }
                    }
                    s[Ce] = t,
                    s[we] = i;
                    e: for (h = t.child; h !== null; ) {
                        if (h.tag === 5 || h.tag === 6)
                            s.appendChild(h.stateNode);
                        else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                            h.child.return = h,
                            h = h.child;
                            continue
                        }
                        if (h === t)
                            break e;
                        for (; h.sibling === null; ) {
                            if (h.return === null || h.return === t)
                                break e;
                            h = h.return
                        }
                        h.sibling.return = h.return,
                        h = h.sibling
                    }
                    t.stateNode = s;
                    e: switch (Kt(s, o, i),
                    o) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break e;
                    case "img":
                        i = !0;
                        break e;
                    default:
                        i = !1
                    }
                    i && il(t)
                }
            }
            return ct(t),
            Lc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== i && il(t);
            else {
                if (typeof i != "string" && t.stateNode === null)
                    throw Error(c(166));
                if (e = fe.current,
                Gi(t)) {
                    if (e = t.stateNode,
                    n = t.memoizedProps,
                    i = null,
                    o = Vt,
                    o !== null)
                        switch (o.tag) {
                        case 27:
                        case 5:
                            i = o.memoizedProps
                        }
                    e[Ce] = t,
                    e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Fm(e.nodeValue, n)),
                    e || Ll(t, !0)
                } else
                    e = Is(e).createTextNode(i),
                    e[Ce] = t,
                    t.stateNode = e
            }
            return ct(t),
            null;
        case 31:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (i = Gi(t),
                n !== null) {
                    if (e === null) {
                        if (!i)
                            throw Error(c(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(c(557));
                        e[Ce] = t
                    } else
                        hi(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    ct(t),
                    e = !1
                } else
                    n = Xr(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (Ln(t),
                    t) : (Ln(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(c(558))
            }
            return ct(t),
            null;
        case 13:
            if (i = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = Gi(t),
                i !== null && i.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(c(318));
                        if (o = t.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(c(317));
                        o[Ce] = t
                    } else
                        hi(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    ct(t),
                    o = !1
                } else
                    o = Xr(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o),
                    o = !0;
                if (!o)
                    return t.flags & 256 ? (Ln(t),
                    t) : (Ln(t),
                    null)
            }
            return Ln(t),
            (t.flags & 128) !== 0 ? (t.lanes = n,
            t) : (n = i !== null,
            e = e !== null && e.memoizedState !== null,
            n && (i = t.child,
            o = null,
            i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool),
            s = null,
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool),
            s !== o && (i.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            Ls(t, t.updateQueue),
            ct(t),
            null);
        case 4:
            return ge(),
            e === null && au(t.stateNode.containerInfo),
            ct(t),
            null;
        case 10:
            return tl(t.type),
            ct(t),
            null;
        case 19:
            if (A(Nt),
            i = t.memoizedState,
            i === null)
                return ct(t),
                null;
            if (o = (t.flags & 128) !== 0,
            s = i.rendering,
            s === null)
                if (o)
                    ko(i, !1);
                else {
                    if (Tt !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (s = Ss(e),
                            s !== null) {
                                for (t.flags |= 128,
                                ko(i, !1),
                                e = s.updateQueue,
                                t.updateQueue = e,
                                Ls(t, e),
                                t.subtreeFlags = 0,
                                e = n,
                                n = t.child; n !== null; )
                                    Mf(n, e),
                                    n = n.sibling;
                                return K(Nt, Nt.current & 1 | 2),
                                Ye && Pa(t, i.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && We() > Gs && (t.flags |= 128,
                    o = !0,
                    ko(i, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = Ss(s),
                    e !== null) {
                        if (t.flags |= 128,
                        o = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Ls(t, e),
                        ko(i, !0),
                        i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ye)
                            return ct(t),
                            null
                    } else
                        2 * We() - i.renderingStartTime > Gs && n !== 536870912 && (t.flags |= 128,
                        o = !0,
                        ko(i, !1),
                        t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child,
                t.child = s) : (e = i.last,
                e !== null ? e.sibling = s : t.child = s,
                i.last = s)
            }
            return i.tail !== null ? (e = i.tail,
            i.rendering = e,
            i.tail = e.sibling,
            i.renderingStartTime = We(),
            e.sibling = null,
            n = Nt.current,
            K(Nt, o ? n & 1 | 2 : n & 1),
            Ye && Pa(t, i.treeForkCount),
            e) : (ct(t),
            null);
        case 22:
        case 23:
            return Ln(t),
            lc(),
            i = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
            i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (ct(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : ct(t),
            n = t.updateQueue,
            n !== null && Ls(t, n.retryQueue),
            n = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            i = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
            i !== n && (t.flags |= 2048),
            e !== null && A(gi),
            null;
        case 24:
            return n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            tl(At),
            ct(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(c(156, t.tag))
    }
    function L1(e, t) {
        switch (Yr(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return tl(At),
            ge(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return dt(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (Ln(t),
                t.alternate === null)
                    throw Error(c(340));
                hi()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (Ln(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(c(340));
                hi()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return A(Nt),
            null;
        case 4:
            return ge(),
            null;
        case 10:
            return tl(t.type),
            null;
        case 22:
        case 23:
            return Ln(t),
            lc(),
            e !== null && A(gi),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return tl(At),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function am(e, t) {
        switch (Yr(t),
        t.tag) {
        case 3:
            tl(At),
            ge();
            break;
        case 26:
        case 27:
        case 5:
            dt(t);
            break;
        case 4:
            ge();
            break;
        case 31:
            t.memoizedState !== null && Ln(t);
            break;
        case 13:
            Ln(t);
            break;
        case 19:
            A(Nt);
            break;
        case 10:
            tl(t.type);
            break;
        case 22:
        case 23:
            Ln(t),
            lc(),
            e !== null && A(gi);
            break;
        case 24:
            tl(At)
        }
    }
    function Do(e, t) {
        try {
            var n = t.updateQueue
              , i = n !== null ? n.lastEffect : null;
            if (i !== null) {
                var o = i.next;
                n = o;
                do {
                    if ((n.tag & e) === e) {
                        i = void 0;
                        var s = n.create
                          , h = n.inst;
                        i = s(),
                        h.destroy = i
                    }
                    n = n.next
                } while (n !== o)
            }
        } catch (v) {
            tt(t, t.return, v)
        }
    }
    function $l(e, t, n) {
        try {
            var i = t.updateQueue
              , o = i !== null ? i.lastEffect : null;
            if (o !== null) {
                var s = o.next;
                i = s;
                do {
                    if ((i.tag & e) === e) {
                        var h = i.inst
                          , v = h.destroy;
                        if (v !== void 0) {
                            h.destroy = void 0,
                            o = t;
                            var S = n
                              , L = v;
                            try {
                                L()
                            } catch (I) {
                                tt(o, S, I)
                            }
                        }
                    }
                    i = i.next
                } while (i !== s)
            }
        } catch (I) {
            tt(t, t.return, I)
        }
    }
    function lm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Zf(t, n)
            } catch (i) {
                tt(e, e.return, i)
            }
        }
    }
    function im(e, t, n) {
        n.props = Si(e.type, e.memoizedProps),
        n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (i) {
            tt(e, t, i)
        }
    }
    function Lo(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var i = e.stateNode;
                    break;
                case 30:
                    i = e.stateNode;
                    break;
                default:
                    i = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(i) : n.current = i
            }
        } catch (o) {
            tt(e, t, o)
        }
    }
    function Ba(e, t) {
        var n = e.ref
          , i = e.refCleanup;
        if (n !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (o) {
                    tt(e, t, o)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (o) {
                    tt(e, t, o)
                }
            else
                n.current = null
    }
    function om(e) {
        var t = e.type
          , n = e.memoizedProps
          , i = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && i.focus();
                break e;
            case "img":
                n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet)
            }
        } catch (o) {
            tt(e, e.return, o)
        }
    }
    function Oc(e, t, n) {
        try {
            var i = e.stateNode;
            ap(i, e.type, n, t),
            i[we] = t
        } catch (o) {
            tt(e, e.return, o)
        }
    }
    function sm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jl(e.type) || e.tag === 4
    }
    function Bc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || sm(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Jl(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function qc(e, t, n) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            t.appendChild(e),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = fn));
        else if (i !== 4 && (i === 27 && Jl(e.type) && (n = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (qc(e, t, n),
            e = e.sibling; e !== null; )
                qc(e, t, n),
                e = e.sibling
    }
    function Os(e, t, n) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (i !== 4 && (i === 27 && Jl(e.type) && (n = e.stateNode),
        e = e.child,
        e !== null))
            for (Os(e, t, n),
            e = e.sibling; e !== null; )
                Os(e, t, n),
                e = e.sibling
    }
    function rm(e) {
        var t = e.stateNode
          , n = e.memoizedProps;
        try {
            for (var i = e.type, o = t.attributes; o.length; )
                t.removeAttributeNode(o[0]);
            Kt(t, i, n),
            t[Ce] = e,
            t[we] = n
        } catch (s) {
            tt(e, e.return, s)
        }
    }
    var ol = !1
      , Mt = !1
      , Uc = !1
      , cm = typeof WeakSet == "function" ? WeakSet : Set
      , Ht = null;
    function O1(e, t) {
        if (e = e.containerInfo,
        ou = ar,
        e = xf(e),
        zr(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var i = n.getSelection && n.getSelection();
                    if (i && i.rangeCount !== 0) {
                        n = i.anchorNode;
                        var o = i.anchorOffset
                          , s = i.focusNode;
                        i = i.focusOffset;
                        try {
                            n.nodeType,
                            s.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var h = 0
                          , v = -1
                          , S = -1
                          , L = 0
                          , I = 0
                          , te = e
                          , q = null;
                        t: for (; ; ) {
                            for (var V; te !== n || o !== 0 && te.nodeType !== 3 || (v = h + o),
                            te !== s || i !== 0 && te.nodeType !== 3 || (S = h + i),
                            te.nodeType === 3 && (h += te.nodeValue.length),
                            (V = te.firstChild) !== null; )
                                q = te,
                                te = V;
                            for (; ; ) {
                                if (te === e)
                                    break t;
                                if (q === n && ++L === o && (v = h),
                                q === s && ++I === i && (S = h),
                                (V = te.nextSibling) !== null)
                                    break;
                                te = q,
                                q = te.parentNode
                            }
                            te = V
                        }
                        n = v === -1 || S === -1 ? null : {
                            start: v,
                            end: S
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (su = {
            focusedElem: e,
            selectionRange: n
        },
        ar = !1,
        Ht = t; Ht !== null; )
            if (t = Ht,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                Ht = e;
            else
                for (; Ht !== null; ) {
                    switch (t = Ht,
                    s = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (n = 0; n < e.length; n++)
                                o = e[n],
                                o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && s !== null) {
                            e = void 0,
                            n = t,
                            o = s.memoizedProps,
                            s = s.memoizedState,
                            i = n.stateNode;
                            try {
                                var he = Si(n.type, o);
                                e = i.getSnapshotBeforeUpdate(he, s),
                                i.__reactInternalSnapshotBeforeUpdate = e
                            } catch (Te) {
                                tt(n, n.return, Te)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            n = e.nodeType,
                            n === 9)
                                uu(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    uu(e);
                                    break;
                                default:
                                    e.textContent = ""
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
                        if ((e & 1024) !== 0)
                            throw Error(c(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Ht = e;
                        break
                    }
                    Ht = t.return
                }
    }
    function um(e, t, n) {
        var i = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            rl(e, n),
            i & 4 && Do(5, n);
            break;
        case 1:
            if (rl(e, n),
            i & 4)
                if (e = n.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (h) {
                        tt(n, n.return, h)
                    }
                else {
                    var o = Si(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (h) {
                        tt(n, n.return, h)
                    }
                }
            i & 64 && lm(n),
            i & 512 && Lo(n, n.return);
            break;
        case 3:
            if (rl(e, n),
            i & 64 && (e = n.updateQueue,
            e !== null)) {
                if (t = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        t = n.child.stateNode;
                        break;
                    case 1:
                        t = n.child.stateNode
                    }
                try {
                    Zf(e, t)
                } catch (h) {
                    tt(n, n.return, h)
                }
            }
            break;
        case 27:
            t === null && i & 4 && rm(n);
        case 26:
        case 5:
            rl(e, n),
            t === null && i & 4 && om(n),
            i & 512 && Lo(n, n.return);
            break;
        case 12:
            rl(e, n);
            break;
        case 31:
            rl(e, n),
            i & 4 && mm(e, n);
            break;
        case 13:
            rl(e, n),
            i & 4 && hm(e, n),
            i & 64 && (e = n.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (n = X1.bind(null, n),
            fp(e, n))));
            break;
        case 22:
            if (i = n.memoizedState !== null || ol,
            !i) {
                t = t !== null && t.memoizedState !== null || Mt,
                o = ol;
                var s = Mt;
                ol = i,
                (Mt = t) && !s ? cl(e, n, (n.subtreeFlags & 8772) !== 0) : rl(e, n),
                ol = o,
                Mt = s
            }
            break;
        case 30:
            break;
        default:
            rl(e, n)
        }
    }
    function fm(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        fm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Ya(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var mt = null
      , hn = !1;
    function sl(e, t, n) {
        for (n = n.child; n !== null; )
            dm(e, t, n),
            n = n.sibling
    }
    function dm(e, t, n) {
        if (pt && typeof pt.onCommitFiberUnmount == "function")
            try {
                pt.onCommitFiberUnmount($t, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Mt || Ba(n, t),
            sl(e, t, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Mt || Ba(n, t);
            var i = mt
              , o = hn;
            Jl(n.type) && (mt = n.stateNode,
            hn = !1),
            sl(e, t, n),
            Vo(n.stateNode),
            mt = i,
            hn = o;
            break;
        case 5:
            Mt || Ba(n, t);
        case 6:
            if (i = mt,
            o = hn,
            mt = null,
            sl(e, t, n),
            mt = i,
            hn = o,
            mt !== null)
                if (hn)
                    try {
                        (mt.nodeType === 9 ? mt.body : mt.nodeName === "HTML" ? mt.ownerDocument.body : mt).removeChild(n.stateNode)
                    } catch (s) {
                        tt(n, t, s)
                    }
                else
                    try {
                        mt.removeChild(n.stateNode)
                    } catch (s) {
                        tt(n, t, s)
                    }
            break;
        case 18:
            mt !== null && (hn ? (e = mt,
            lh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode),
            so(e)) : lh(mt, n.stateNode));
            break;
        case 4:
            i = mt,
            o = hn,
            mt = n.stateNode.containerInfo,
            hn = !0,
            sl(e, t, n),
            mt = i,
            hn = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            $l(2, n, t),
            Mt || $l(4, n, t),
            sl(e, t, n);
            break;
        case 1:
            Mt || (Ba(n, t),
            i = n.stateNode,
            typeof i.componentWillUnmount == "function" && im(n, t, i)),
            sl(e, t, n);
            break;
        case 21:
            sl(e, t, n);
            break;
        case 22:
            Mt = (i = Mt) || n.memoizedState !== null,
            sl(e, t, n),
            Mt = i;
            break;
        default:
            sl(e, t, n)
        }
    }
    function mm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                so(e)
            } catch (n) {
                tt(t, t.return, n)
            }
        }
    }
    function hm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                so(e)
            } catch (n) {
                tt(t, t.return, n)
            }
    }
    function B1(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new cm),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new cm),
            t;
        default:
            throw Error(c(435, e.tag))
        }
    }
    function Bs(e, t) {
        var n = B1(e);
        t.forEach(function(i) {
            if (!n.has(i)) {
                n.add(i);
                var o = Q1.bind(null, e, i);
                i.then(o, o)
            }
        })
    }
    function yn(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var i = 0; i < n.length; i++) {
                var o = n[i]
                  , s = e
                  , h = t
                  , v = h;
                e: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (Jl(v.type)) {
                            mt = v.stateNode,
                            hn = !1;
                            break e
                        }
                        break;
                    case 5:
                        mt = v.stateNode,
                        hn = !1;
                        break e;
                    case 3:
                    case 4:
                        mt = v.stateNode.containerInfo,
                        hn = !0;
                        break e
                    }
                    v = v.return
                }
                if (mt === null)
                    throw Error(c(160));
                dm(s, h, o),
                mt = null,
                hn = !1,
                s = o.alternate,
                s !== null && (s.return = null),
                o.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                ym(t, e),
                t = t.sibling
    }
    var xa = null;
    function ym(e, t) {
        var n = e.alternate
          , i = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            yn(t, e),
            pn(e),
            i & 4 && ($l(3, e, e.return),
            Do(3, e),
            $l(5, e, e.return));
            break;
        case 1:
            yn(t, e),
            pn(e),
            i & 512 && (Mt || n === null || Ba(n, n.return)),
            i & 64 && ol && (e = e.updateQueue,
            e !== null && (i = e.callbacks,
            i !== null && (n = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
            break;
        case 26:
            var o = xa;
            if (yn(t, e),
            pn(e),
            i & 512 && (Mt || n === null || Ba(n, n.return)),
            i & 4) {
                var s = n !== null ? n.memoizedState : null;
                if (i = e.memoizedState,
                n === null)
                    if (i === null)
                        if (e.stateNode === null) {
                            e: {
                                i = e.type,
                                n = e.memoizedProps,
                                o = o.ownerDocument || o;
                                t: switch (i) {
                                case "title":
                                    s = o.getElementsByTagName("title")[0],
                                    (!s || s[Qn] || s[Ce] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(i),
                                    o.head.insertBefore(s, o.querySelector("head > title"))),
                                    Kt(s, i, n),
                                    s[Ce] = e,
                                    st(s),
                                    i = s;
                                    break e;
                                case "link":
                                    var h = yh("link", "href", o).get(i + (n.href || ""));
                                    if (h) {
                                        for (var v = 0; v < h.length; v++)
                                            if (s = h[v],
                                            s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                h.splice(v, 1);
                                                break t
                                            }
                                    }
                                    s = o.createElement(i),
                                    Kt(s, i, n),
                                    o.head.appendChild(s);
                                    break;
                                case "meta":
                                    if (h = yh("meta", "content", o).get(i + (n.content || ""))) {
                                        for (v = 0; v < h.length; v++)
                                            if (s = h[v],
                                            s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                h.splice(v, 1);
                                                break t
                                            }
                                    }
                                    s = o.createElement(i),
                                    Kt(s, i, n),
                                    o.head.appendChild(s);
                                    break;
                                default:
                                    throw Error(c(468, i))
                                }
                                s[Ce] = e,
                                st(s),
                                i = s
                            }
                            e.stateNode = i
                        } else
                            ph(o, e.type, e.stateNode);
                    else
                        e.stateNode = hh(o, i, e.memoizedProps);
                else
                    s !== i ? (s === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : s.count--,
                    i === null ? ph(o, e.type, e.stateNode) : hh(o, i, e.memoizedProps)) : i === null && e.stateNode !== null && Oc(e, e.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            yn(t, e),
            pn(e),
            i & 512 && (Mt || n === null || Ba(n, n.return)),
            n !== null && i & 4 && Oc(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (yn(t, e),
            pn(e),
            i & 512 && (Mt || n === null || Ba(n, n.return)),
            e.flags & 32) {
                o = e.stateNode;
                try {
                    ya(o, "")
                } catch (he) {
                    tt(e, e.return, he)
                }
            }
            i & 4 && e.stateNode != null && (o = e.memoizedProps,
            Oc(e, o, n !== null ? n.memoizedProps : o)),
            i & 1024 && (Uc = !0);
            break;
        case 6:
            if (yn(t, e),
            pn(e),
            i & 4) {
                if (e.stateNode === null)
                    throw Error(c(162));
                i = e.memoizedProps,
                n = e.stateNode;
                try {
                    n.nodeValue = i
                } catch (he) {
                    tt(e, e.return, he)
                }
            }
            break;
        case 3:
            if (Ps = null,
            o = xa,
            xa = Ws(t.containerInfo),
            yn(t, e),
            xa = o,
            pn(e),
            i & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    so(t.containerInfo)
                } catch (he) {
                    tt(e, e.return, he)
                }
            Uc && (Uc = !1,
            pm(e));
            break;
        case 4:
            i = xa,
            xa = Ws(e.stateNode.containerInfo),
            yn(t, e),
            pn(e),
            xa = i;
            break;
        case 12:
            yn(t, e),
            pn(e);
            break;
        case 31:
            yn(t, e),
            pn(e),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            Bs(e, i)));
            break;
        case 13:
            yn(t, e),
            pn(e),
            e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Us = We()),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            Bs(e, i)));
            break;
        case 22:
            o = e.memoizedState !== null;
            var S = n !== null && n.memoizedState !== null
              , L = ol
              , I = Mt;
            if (ol = L || o,
            Mt = I || S,
            yn(t, e),
            Mt = I,
            ol = L,
            pn(e),
            i & 8192)
                e: for (t = e.stateNode,
                t._visibility = o ? t._visibility & -2 : t._visibility | 1,
                o && (n === null || S || ol || Mt || Ci(e)),
                n = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            S = n = t;
                            try {
                                if (s = S.stateNode,
                                o)
                                    h = s.style,
                                    typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    v = S.stateNode;
                                    var te = S.memoizedProps.style
                                      , q = te != null && te.hasOwnProperty("display") ? te.display : null;
                                    v.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim()
                                }
                            } catch (he) {
                                tt(S, S.return, he)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            S = t;
                            try {
                                S.stateNode.nodeValue = o ? "" : S.memoizedProps
                            } catch (he) {
                                tt(S, S.return, he)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (n === null) {
                            S = t;
                            try {
                                var V = S.stateNode;
                                o ? ih(V, !0) : ih(S.stateNode, !1)
                            } catch (he) {
                                tt(S, S.return, he)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        n === t && (n = null),
                        t = t.return
                    }
                    n === t && (n = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            i & 4 && (i = e.updateQueue,
            i !== null && (n = i.retryQueue,
            n !== null && (i.retryQueue = null,
            Bs(e, n))));
            break;
        case 19:
            yn(t, e),
            pn(e),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            Bs(e, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            yn(t, e),
            pn(e)
        }
    }
    function pn(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, i = e.return; i !== null; ) {
                    if (sm(i)) {
                        n = i;
                        break
                    }
                    i = i.return
                }
                if (n == null)
                    throw Error(c(160));
                switch (n.tag) {
                case 27:
                    var o = n.stateNode
                      , s = Bc(e);
                    Os(e, s, o);
                    break;
                case 5:
                    var h = n.stateNode;
                    n.flags & 32 && (ya(h, ""),
                    n.flags &= -33);
                    var v = Bc(e);
                    Os(e, v, h);
                    break;
                case 3:
                case 4:
                    var S = n.stateNode.containerInfo
                      , L = Bc(e);
                    qc(e, L, S);
                    break;
                default:
                    throw Error(c(161))
                }
            } catch (I) {
                tt(e, e.return, I)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function pm(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                pm(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function rl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                um(e, t.alternate, t),
                t = t.sibling
    }
    function Ci(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                $l(4, t, t.return),
                Ci(t);
                break;
            case 1:
                Ba(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && im(t, t.return, n),
                Ci(t);
                break;
            case 27:
                Vo(t.stateNode);
            case 26:
            case 5:
                Ba(t, t.return),
                Ci(t);
                break;
            case 22:
                t.memoizedState === null && Ci(t);
                break;
            case 30:
                Ci(t);
                break;
            default:
                Ci(t)
            }
            e = e.sibling
        }
    }
    function cl(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var i = t.alternate
              , o = e
              , s = t
              , h = s.flags;
            switch (s.tag) {
            case 0:
            case 11:
            case 15:
                cl(o, s, n),
                Do(4, s);
                break;
            case 1:
                if (cl(o, s, n),
                i = s,
                o = i.stateNode,
                typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount()
                    } catch (L) {
                        tt(i, i.return, L)
                    }
                if (i = s,
                o = i.updateQueue,
                o !== null) {
                    var v = i.stateNode;
                    try {
                        var S = o.shared.hiddenCallbacks;
                        if (S !== null)
                            for (o.shared.hiddenCallbacks = null,
                            o = 0; o < S.length; o++)
                                Kf(S[o], v)
                    } catch (L) {
                        tt(i, i.return, L)
                    }
                }
                n && h & 64 && lm(s),
                Lo(s, s.return);
                break;
            case 27:
                rm(s);
            case 26:
            case 5:
                cl(o, s, n),
                n && i === null && h & 4 && om(s),
                Lo(s, s.return);
                break;
            case 12:
                cl(o, s, n);
                break;
            case 31:
                cl(o, s, n),
                n && h & 4 && mm(o, s);
                break;
            case 13:
                cl(o, s, n),
                n && h & 4 && hm(o, s);
                break;
            case 22:
                s.memoizedState === null && cl(o, s, n),
                Lo(s, s.return);
                break;
            case 30:
                break;
            default:
                cl(o, s, n)
            }
            t = t.sibling
        }
    }
    function Gc(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++,
        n != null && xo(n))
    }
    function Hc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && xo(e))
    }
    function Sa(e, t, n, i) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                gm(e, t, n, i),
                t = t.sibling
    }
    function gm(e, t, n, i) {
        var o = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Sa(e, t, n, i),
            o & 2048 && Do(9, t);
            break;
        case 1:
            Sa(e, t, n, i);
            break;
        case 3:
            Sa(e, t, n, i),
            o & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && xo(e)));
            break;
        case 12:
            if (o & 2048) {
                Sa(e, t, n, i),
                e = t.stateNode;
                try {
                    var s = t.memoizedProps
                      , h = s.id
                      , v = s.onPostCommit;
                    typeof v == "function" && v(h, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (S) {
                    tt(t, t.return, S)
                }
            } else
                Sa(e, t, n, i);
            break;
        case 31:
            Sa(e, t, n, i);
            break;
        case 13:
            Sa(e, t, n, i);
            break;
        case 23:
            break;
        case 22:
            s = t.stateNode,
            h = t.alternate,
            t.memoizedState !== null ? s._visibility & 2 ? Sa(e, t, n, i) : Oo(e, t) : s._visibility & 2 ? Sa(e, t, n, i) : (s._visibility |= 2,
            Ii(e, t, n, i, (t.subtreeFlags & 10256) !== 0 || !1)),
            o & 2048 && Gc(h, t);
            break;
        case 24:
            Sa(e, t, n, i),
            o & 2048 && Hc(t.alternate, t);
            break;
        default:
            Sa(e, t, n, i)
        }
    }
    function Ii(e, t, n, i, o) {
        for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var s = e
              , h = t
              , v = n
              , S = i
              , L = h.flags;
            switch (h.tag) {
            case 0:
            case 11:
            case 15:
                Ii(s, h, v, S, o),
                Do(8, h);
                break;
            case 23:
                break;
            case 22:
                var I = h.stateNode;
                h.memoizedState !== null ? I._visibility & 2 ? Ii(s, h, v, S, o) : Oo(s, h) : (I._visibility |= 2,
                Ii(s, h, v, S, o)),
                o && L & 2048 && Gc(h.alternate, h);
                break;
            case 24:
                Ii(s, h, v, S, o),
                o && L & 2048 && Hc(h.alternate, h);
                break;
            default:
                Ii(s, h, v, S, o)
            }
            t = t.sibling
        }
    }
    function Oo(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e
                  , i = t
                  , o = i.flags;
                switch (i.tag) {
                case 22:
                    Oo(n, i),
                    o & 2048 && Gc(i.alternate, i);
                    break;
                case 24:
                    Oo(n, i),
                    o & 2048 && Hc(i.alternate, i);
                    break;
                default:
                    Oo(n, i)
                }
                t = t.sibling
            }
    }
    var Bo = 8192;
    function Wi(e, t, n) {
        if (e.subtreeFlags & Bo)
            for (e = e.child; e !== null; )
                vm(e, t, n),
                e = e.sibling
    }
    function vm(e, t, n) {
        switch (e.tag) {
        case 26:
            Wi(e, t, n),
            e.flags & Bo && e.memoizedState !== null && Cp(n, xa, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Wi(e, t, n);
            break;
        case 3:
        case 4:
            var i = xa;
            xa = Ws(e.stateNode.containerInfo),
            Wi(e, t, n),
            xa = i;
            break;
        case 22:
            e.memoizedState === null && (i = e.alternate,
            i !== null && i.memoizedState !== null ? (i = Bo,
            Bo = 16777216,
            Wi(e, t, n),
            Bo = i) : Wi(e, t, n));
            break;
        default:
            Wi(e, t, n)
        }
    }
    function _m(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function qo(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    Ht = i,
                    xm(i, e)
                }
            _m(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                bm(e),
                e = e.sibling
    }
    function bm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            qo(e),
            e.flags & 2048 && $l(9, e, e.return);
            break;
        case 3:
            qo(e);
            break;
        case 12:
            qo(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            qs(e)) : qo(e);
            break;
        default:
            qo(e)
        }
    }
    function qs(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    Ht = i,
                    xm(i, e)
                }
            _m(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                $l(8, t, t.return),
                qs(t);
                break;
            case 22:
                n = t.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                qs(t));
                break;
            default:
                qs(t)
            }
            e = e.sibling
        }
    }
    function xm(e, t) {
        for (; Ht !== null; ) {
            var n = Ht;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                $l(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var i = n.memoizedState.cachePool.pool;
                    i != null && i.refCount++
                }
                break;
            case 24:
                xo(n.memoizedState.cache)
            }
            if (i = n.child,
            i !== null)
                i.return = n,
                Ht = i;
            else
                e: for (n = e; Ht !== null; ) {
                    i = Ht;
                    var o = i.sibling
                      , s = i.return;
                    if (fm(i),
                    i === n) {
                        Ht = null;
                        break e
                    }
                    if (o !== null) {
                        o.return = s,
                        Ht = o;
                        break e
                    }
                    Ht = s
                }
        }
    }
    var q1 = {
        getCacheForType: function(e) {
            var t = Xt(At)
              , n = t.data.get(e);
            return n === void 0 && (n = e(),
            t.data.set(e, n)),
            n
        },
        cacheSignal: function() {
            return Xt(At).controller.signal
        }
    }
      , U1 = typeof WeakMap == "function" ? WeakMap : Map
      , Je = 0
      , ot = null
      , Be = null
      , Ge = 0
      , et = 0
      , On = null
      , Yl = !1
      , Fi = !1
      , $c = !1
      , ul = 0
      , Tt = 0
      , Vl = 0
      , Ti = 0
      , Yc = 0
      , Bn = 0
      , Pi = 0
      , Uo = null
      , gn = null
      , Vc = !1
      , Us = 0
      , Sm = 0
      , Gs = 1 / 0
      , Hs = null
      , Xl = null
      , kt = 0
      , Ql = null
      , eo = null
      , fl = 0
      , Xc = 0
      , Qc = null
      , Cm = null
      , Go = 0
      , Kc = null;
    function qn() {
        return (Je & 2) !== 0 && Ge !== 0 ? Ge & -Ge : j.T !== null ? Pc() : Xn()
    }
    function Tm() {
        if (Bn === 0)
            if ((Ge & 536870912) === 0 || Ye) {
                var e = bn;
                bn <<= 1,
                (bn & 3932160) === 0 && (bn = 262144),
                Bn = e
            } else
                Bn = 536870912;
        return e = Dn.current,
        e !== null && (e.flags |= 32),
        Bn
    }
    function vn(e, t, n) {
        (e === ot && (et === 2 || et === 9) || e.cancelPendingCommit !== null) && (to(e, 0),
        Kl(e, Ge, Bn, !1)),
        on(e, n),
        ((Je & 2) === 0 || e !== ot) && (e === ot && ((Je & 2) === 0 && (Ti |= n),
        Tt === 4 && Kl(e, Ge, Bn, !1)),
        qa(e))
    }
    function Nm(e, t, n) {
        if ((Je & 6) !== 0)
            throw Error(c(327));
        var i = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || xn(e, t)
          , o = i ? $1(e, t) : Jc(e, t, !0)
          , s = i;
        do {
            if (o === 0) {
                Fi && !i && Kl(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate,
                s && !G1(n)) {
                    o = Jc(e, t, !1),
                    s = !1;
                    continue
                }
                if (o === 2) {
                    if (s = t,
                    e.errorRecoveryDisabledLanes & s)
                        var h = 0;
                    else
                        h = e.pendingLanes & -536870913,
                        h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        t = h;
                        e: {
                            var v = e;
                            o = Uo;
                            var S = v.current.memoizedState.isDehydrated;
                            if (S && (to(v, h).flags |= 256),
                            h = Jc(v, h, !1),
                            h !== 2) {
                                if ($c && !S) {
                                    v.errorRecoveryDisabledLanes |= s,
                                    Ti |= s,
                                    o = 4;
                                    break e
                                }
                                s = gn,
                                gn = o,
                                s !== null && (gn === null ? gn = s : gn.push.apply(gn, s))
                            }
                            o = h
                        }
                        if (s = !1,
                        o !== 2)
                            continue
                    }
                }
                if (o === 1) {
                    to(e, 0),
                    Kl(e, t, 0, !0);
                    break
                }
                e: {
                    switch (i = e,
                    s = o,
                    s) {
                    case 0:
                    case 1:
                        throw Error(c(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Kl(i, t, Bn, !Yl);
                        break e;
                    case 2:
                        gn = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(c(329))
                    }
                    if ((t & 62914560) === t && (o = Us + 300 - We(),
                    10 < o)) {
                        if (Kl(i, t, Bn, !Yl),
                        ln(i, 0, !0) !== 0)
                            break e;
                        fl = t,
                        i.timeoutHandle = nh(jm.bind(null, i, n, gn, Hs, Vc, t, Bn, Ti, Pi, Yl, s, "Throttled", -0, 0), o);
                        break e
                    }
                    jm(i, n, gn, Hs, Vc, t, Bn, Ti, Pi, Yl, s, null, -0, 0)
                }
            }
            break
        } while (!0);
        qa(e)
    }
    function jm(e, t, n, i, o, s, h, v, S, L, I, te, q, V) {
        if (e.timeoutHandle = -1,
        te = t.subtreeFlags,
        te & 8192 || (te & 16785408) === 16785408) {
            te = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: fn
            },
            vm(t, s, te);
            var he = (s & 62914560) === s ? Us - We() : (s & 4194048) === s ? Sm - We() : 0;
            if (he = Tp(te, he),
            he !== null) {
                fl = s,
                e.cancelPendingCommit = he(Dm.bind(null, e, t, s, n, i, o, h, v, S, I, te, null, q, V)),
                Kl(e, s, h, !L);
                return
            }
        }
        Dm(e, t, s, n, i, o, h, v, S)
    }
    function G1(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var i = 0; i < n.length; i++) {
                    var o = n[i]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!zn(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Kl(e, t, n, i) {
        t &= ~Yc,
        t &= ~Ti,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        i && (e.warmLanes |= t),
        i = e.expirationTimes;
        for (var o = t; 0 < o; ) {
            var s = 31 - vt(o)
              , h = 1 << s;
            i[s] = -1,
            o &= ~h
        }
        n !== 0 && Cn(e, n, t)
    }
    function $s() {
        return (Je & 6) === 0 ? (Ho(0),
        !1) : !0
    }
    function Zc() {
        if (Be !== null) {
            if (et === 0)
                var e = Be.return;
            else
                e = Be,
                el = yi = null,
                uc(e),
                Xi = null,
                Co = 0,
                e = Be;
            for (; e !== null; )
                am(e.alternate, e),
                e = e.return;
            Be = null
        }
    }
    function to(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
        op(n)),
        n = e.cancelPendingCommit,
        n !== null && (e.cancelPendingCommit = null,
        n()),
        fl = 0,
        Zc(),
        ot = e,
        Be = n = Fa(e.current, null),
        Ge = t,
        et = 0,
        On = null,
        Yl = !1,
        Fi = xn(e, t),
        $c = !1,
        Pi = Bn = Yc = Ti = Vl = Tt = 0,
        gn = Uo = null,
        Vc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var i = e.entangledLanes;
        if (i !== 0)
            for (e = e.entanglements,
            i &= t; 0 < i; ) {
                var o = 31 - vt(i)
                  , s = 1 << o;
                t |= e[o],
                i &= ~s
            }
        return ul = t,
        cs(),
        n
    }
    function Am(e, t) {
        Me = null,
        j.H = wo,
        t === Vi || t === gs ? (t = Yf(),
        et = 3) : t === Fr ? (t = Yf(),
        et = 4) : et = t === jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        On = t,
        Be === null && (Tt = 1,
        ws(e, ta(t, e.current)))
    }
    function Em() {
        var e = Dn.current;
        return e === null ? !0 : (Ge & 4194048) === Ge ? ia === null : (Ge & 62914560) === Ge || (Ge & 536870912) !== 0 ? e === ia : !1
    }
    function Rm() {
        var e = j.H;
        return j.H = wo,
        e === null ? wo : e
    }
    function Mm() {
        var e = j.A;
        return j.A = q1,
        e
    }
    function Ys() {
        Tt = 4,
        Yl || (Ge & 4194048) !== Ge && Dn.current !== null || (Fi = !0),
        (Vl & 134217727) === 0 && (Ti & 134217727) === 0 || ot === null || Kl(ot, Ge, Bn, !1)
    }
    function Jc(e, t, n) {
        var i = Je;
        Je |= 2;
        var o = Rm()
          , s = Mm();
        (ot !== e || Ge !== t) && (Hs = null,
        to(e, t)),
        t = !1;
        var h = Tt;
        e: do
            try {
                if (et !== 0 && Be !== null) {
                    var v = Be
                      , S = On;
                    switch (et) {
                    case 8:
                        Zc(),
                        h = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Dn.current === null && (t = !0);
                        var L = et;
                        if (et = 0,
                        On = null,
                        no(e, v, S, L),
                        n && Fi) {
                            h = 0;
                            break e
                        }
                        break;
                    default:
                        L = et,
                        et = 0,
                        On = null,
                        no(e, v, S, L)
                    }
                }
                H1(),
                h = Tt;
                break
            } catch (I) {
                Am(e, I)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        el = yi = null,
        Je = i,
        j.H = o,
        j.A = s,
        Be === null && (ot = null,
        Ge = 0,
        cs()),
        h
    }
    function H1() {
        for (; Be !== null; )
            wm(Be)
    }
    function $1(e, t) {
        var n = Je;
        Je |= 2;
        var i = Rm()
          , o = Mm();
        ot !== e || Ge !== t ? (Hs = null,
        Gs = We() + 500,
        to(e, t)) : Fi = xn(e, t);
        e: do
            try {
                if (et !== 0 && Be !== null) {
                    t = Be;
                    var s = On;
                    t: switch (et) {
                    case 1:
                        et = 0,
                        On = null,
                        no(e, t, s, 1);
                        break;
                    case 2:
                    case 9:
                        if (Hf(s)) {
                            et = 0,
                            On = null,
                            zm(t);
                            break
                        }
                        t = function() {
                            et !== 2 && et !== 9 || ot !== e || (et = 7),
                            qa(e)
                        }
                        ,
                        s.then(t, t);
                        break e;
                    case 3:
                        et = 7;
                        break e;
                    case 4:
                        et = 5;
                        break e;
                    case 7:
                        Hf(s) ? (et = 0,
                        On = null,
                        zm(t)) : (et = 0,
                        On = null,
                        no(e, t, s, 7));
                        break;
                    case 5:
                        var h = null;
                        switch (Be.tag) {
                        case 26:
                            h = Be.memoizedState;
                        case 5:
                        case 27:
                            var v = Be;
                            if (h ? gh(h) : v.stateNode.complete) {
                                et = 0,
                                On = null;
                                var S = v.sibling;
                                if (S !== null)
                                    Be = S;
                                else {
                                    var L = v.return;
                                    L !== null ? (Be = L,
                                    Vs(L)) : Be = null
                                }
                                break t
                            }
                        }
                        et = 0,
                        On = null,
                        no(e, t, s, 5);
                        break;
                    case 6:
                        et = 0,
                        On = null,
                        no(e, t, s, 6);
                        break;
                    case 8:
                        Zc(),
                        Tt = 6;
                        break e;
                    default:
                        throw Error(c(462))
                    }
                }
                Y1();
                break
            } catch (I) {
                Am(e, I)
            }
        while (!0);
        return el = yi = null,
        j.H = i,
        j.A = o,
        Je = n,
        Be !== null ? 0 : (ot = null,
        Ge = 0,
        cs(),
        Tt)
    }
    function Y1() {
        for (; Be !== null && !it(); )
            wm(Be)
    }
    function wm(e) {
        var t = tm(e.alternate, e, ul);
        e.memoizedProps = e.pendingProps,
        t === null ? Vs(e) : Be = t
    }
    function zm(e) {
        var t = e
          , n = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Jd(n, t, t.pendingProps, t.type, void 0, Ge);
            break;
        case 11:
            t = Jd(n, t, t.pendingProps, t.type.render, t.ref, Ge);
            break;
        case 5:
            uc(t);
        default:
            am(n, t),
            t = Be = Mf(t, ul),
            t = tm(n, t, ul)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Vs(e) : Be = t
    }
    function no(e, t, n, i) {
        el = yi = null,
        uc(t),
        Xi = null,
        Co = 0;
        var o = t.return;
        try {
            if (w1(e, o, t, n, Ge)) {
                Tt = 1,
                ws(e, ta(n, e.current)),
                Be = null;
                return
            }
        } catch (s) {
            if (o !== null)
                throw Be = o,
                s;
            Tt = 1,
            ws(e, ta(n, e.current)),
            Be = null;
            return
        }
        t.flags & 32768 ? (Ye || i === 1 ? e = !0 : Fi || (Ge & 536870912) !== 0 ? e = !1 : (Yl = e = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = Dn.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        km(t, e)) : Vs(t)
    }
    function Vs(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                km(t, Yl);
                return
            }
            e = t.return;
            var n = D1(t.alternate, t, ul);
            if (n !== null) {
                Be = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                Be = t;
                return
            }
            Be = t = e
        } while (t !== null);
        Tt === 0 && (Tt = 5)
    }
    function km(e, t) {
        do {
            var n = L1(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                Be = n;
                return
            }
            if (n = e.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                Be = e;
                return
            }
            Be = e = n
        } while (e !== null);
        Tt = 6,
        Be = null
    }
    function Dm(e, t, n, i, o, s, h, v, S) {
        e.cancelPendingCommit = null;
        do
            Xs();
        while (kt !== 0);
        if ((Je & 6) !== 0)
            throw Error(c(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(c(177));
            if (s = t.lanes | t.childLanes,
            s |= Br,
            Sn(e, n, s, h, v, S),
            e === ot && (Be = ot = null,
            Ge = 0),
            eo = t,
            Ql = e,
            fl = n,
            Xc = s,
            Qc = o,
            Cm = i,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            K1(Ze, function() {
                return Um(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            i = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || i) {
                i = j.T,
                j.T = null,
                o = H.p,
                H.p = 2,
                h = Je,
                Je |= 4;
                try {
                    O1(e, t, n)
                } finally {
                    Je = h,
                    H.p = o,
                    j.T = i
                }
            }
            kt = 1,
            Lm(),
            Om(),
            Bm()
        }
    }
    function Lm() {
        if (kt === 1) {
            kt = 0;
            var e = Ql
              , t = eo
              , n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = j.T,
                j.T = null;
                var i = H.p;
                H.p = 2;
                var o = Je;
                Je |= 4;
                try {
                    ym(t, e);
                    var s = su
                      , h = xf(e.containerInfo)
                      , v = s.focusedElem
                      , S = s.selectionRange;
                    if (h !== v && v && v.ownerDocument && bf(v.ownerDocument.documentElement, v)) {
                        if (S !== null && zr(v)) {
                            var L = S.start
                              , I = S.end;
                            if (I === void 0 && (I = L),
                            "selectionStart"in v)
                                v.selectionStart = L,
                                v.selectionEnd = Math.min(I, v.value.length);
                            else {
                                var te = v.ownerDocument || document
                                  , q = te && te.defaultView || window;
                                if (q.getSelection) {
                                    var V = q.getSelection()
                                      , he = v.textContent.length
                                      , Te = Math.min(S.start, he)
                                      , lt = S.end === void 0 ? Te : Math.min(S.end, he);
                                    !V.extend && Te > lt && (h = lt,
                                    lt = Te,
                                    Te = h);
                                    var R = _f(v, Te)
                                      , N = _f(v, lt);
                                    if (R && N && (V.rangeCount !== 1 || V.anchorNode !== R.node || V.anchorOffset !== R.offset || V.focusNode !== N.node || V.focusOffset !== N.offset)) {
                                        var D = te.createRange();
                                        D.setStart(R.node, R.offset),
                                        V.removeAllRanges(),
                                        Te > lt ? (V.addRange(D),
                                        V.extend(N.node, N.offset)) : (D.setEnd(N.node, N.offset),
                                        V.addRange(D))
                                    }
                                }
                            }
                        }
                        for (te = [],
                        V = v; V = V.parentNode; )
                            V.nodeType === 1 && te.push({
                                element: V,
                                left: V.scrollLeft,
                                top: V.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < te.length; v++) {
                            var F = te[v];
                            F.element.scrollLeft = F.left,
                            F.element.scrollTop = F.top
                        }
                    }
                    ar = !!ou,
                    su = ou = null
                } finally {
                    Je = o,
                    H.p = i,
                    j.T = n
                }
            }
            e.current = t,
            kt = 2
        }
    }
    function Om() {
        if (kt === 2) {
            kt = 0;
            var e = Ql
              , t = eo
              , n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = j.T,
                j.T = null;
                var i = H.p;
                H.p = 2;
                var o = Je;
                Je |= 4;
                try {
                    um(e, t.alternate, t)
                } finally {
                    Je = o,
                    H.p = i,
                    j.T = n
                }
            }
            kt = 3
        }
    }
    function Bm() {
        if (kt === 4 || kt === 3) {
            kt = 0,
            ra();
            var e = Ql
              , t = eo
              , n = fl
              , i = Cm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? kt = 5 : (kt = 0,
            eo = Ql = null,
            qm(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (o === 0 && (Xl = null),
            rn(n),
            t = t.stateNode,
            pt && typeof pt.onCommitFiberRoot == "function")
                try {
                    pt.onCommitFiberRoot($t, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (i !== null) {
                t = j.T,
                o = H.p,
                H.p = 2,
                j.T = null;
                try {
                    for (var s = e.onRecoverableError, h = 0; h < i.length; h++) {
                        var v = i[h];
                        s(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    j.T = t,
                    H.p = o
                }
            }
            (fl & 3) !== 0 && Xs(),
            qa(e),
            o = e.pendingLanes,
            (n & 261930) !== 0 && (o & 42) !== 0 ? e === Kc ? Go++ : (Go = 0,
            Kc = e) : Go = 0,
            Ho(0)
        }
    }
    function qm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        xo(t)))
    }
    function Xs() {
        return Lm(),
        Om(),
        Bm(),
        Um()
    }
    function Um() {
        if (kt !== 5)
            return !1;
        var e = Ql
          , t = Xc;
        Xc = 0;
        var n = rn(fl)
          , i = j.T
          , o = H.p;
        try {
            H.p = 32 > n ? 32 : n,
            j.T = null,
            n = Qc,
            Qc = null;
            var s = Ql
              , h = fl;
            if (kt = 0,
            eo = Ql = null,
            fl = 0,
            (Je & 6) !== 0)
                throw Error(c(331));
            var v = Je;
            if (Je |= 4,
            bm(s.current),
            gm(s, s.current, h, n),
            Je = v,
            Ho(0, !1),
            pt && typeof pt.onPostCommitFiberRoot == "function")
                try {
                    pt.onPostCommitFiberRoot($t, s)
                } catch {}
            return !0
        } finally {
            H.p = o,
            j.T = i,
            qm(e, t)
        }
    }
    function Gm(e, t, n) {
        t = ta(n, t),
        t = Nc(e.stateNode, t, 2),
        e = Ul(e, t, 2),
        e !== null && (on(e, 2),
        qa(e))
    }
    function tt(e, t, n) {
        if (e.tag === 3)
            Gm(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Gm(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var i = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Xl === null || !Xl.has(i))) {
                        e = ta(n, e),
                        n = Hd(2),
                        i = Ul(t, n, 2),
                        i !== null && ($d(n, i, t, e),
                        on(i, 2),
                        qa(i));
                        break
                    }
                }
                t = t.return
            }
    }
    function Ic(e, t, n) {
        var i = e.pingCache;
        if (i === null) {
            i = e.pingCache = new U1;
            var o = new Set;
            i.set(t, o)
        } else
            o = i.get(t),
            o === void 0 && (o = new Set,
            i.set(t, o));
        o.has(n) || ($c = !0,
        o.add(n),
        e = V1.bind(null, e, t, n),
        t.then(e, e))
    }
    function V1(e, t, n) {
        var i = e.pingCache;
        i !== null && i.delete(t),
        e.pingedLanes |= e.suspendedLanes & n,
        e.warmLanes &= ~n,
        ot === e && (Ge & n) === n && (Tt === 4 || Tt === 3 && (Ge & 62914560) === Ge && 300 > We() - Us ? (Je & 2) === 0 && to(e, 0) : Yc |= n,
        Pi === Ge && (Pi = 0)),
        qa(e)
    }
    function Hm(e, t) {
        t === 0 && (t = ma()),
        e = di(e, t),
        e !== null && (on(e, t),
        qa(e))
    }
    function X1(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        Hm(e, n)
    }
    function Q1(e, t) {
        var n = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var i = e.stateNode
              , o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            i = e.stateNode;
            break;
        case 22:
            i = e.stateNode._retryCache;
            break;
        default:
            throw Error(c(314))
        }
        i !== null && i.delete(t),
        Hm(e, n)
    }
    function K1(e, t) {
        return xt(e, t)
    }
    var Qs = null
      , ao = null
      , Wc = !1
      , Ks = !1
      , Fc = !1
      , Zl = 0;
    function qa(e) {
        e !== ao && e.next === null && (ao === null ? Qs = ao = e : ao = ao.next = e),
        Ks = !0,
        Wc || (Wc = !0,
        J1())
    }
    function Ho(e, t) {
        if (!Fc && Ks) {
            Fc = !0;
            do
                for (var n = !1, i = Qs; i !== null; ) {
                    if (e !== 0) {
                        var o = i.pendingLanes;
                        if (o === 0)
                            var s = 0;
                        else {
                            var h = i.suspendedLanes
                              , v = i.pingedLanes;
                            s = (1 << 31 - vt(42 | e) + 1) - 1,
                            s &= o & ~(h & ~v),
                            s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0
                        }
                        s !== 0 && (n = !0,
                        Xm(i, s))
                    } else
                        s = Ge,
                        s = ln(i, i === ot ? s : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (s & 3) === 0 || xn(i, s) || (n = !0,
                        Xm(i, s));
                    i = i.next
                }
            while (n);
            Fc = !1
        }
    }
    function Z1() {
        $m()
    }
    function $m() {
        Ks = Wc = !1;
        var e = 0;
        Zl !== 0 && ip() && (e = Zl);
        for (var t = We(), n = null, i = Qs; i !== null; ) {
            var o = i.next
              , s = Ym(i, t);
            s === 0 ? (i.next = null,
            n === null ? Qs = o : n.next = o,
            o === null && (ao = n)) : (n = i,
            (e !== 0 || (s & 3) !== 0) && (Ks = !0)),
            i = o
        }
        kt !== 0 && kt !== 5 || Ho(e),
        Zl !== 0 && (Zl = 0)
    }
    function Ym(e, t) {
        for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
            var h = 31 - vt(s)
              , v = 1 << h
              , S = o[h];
            S === -1 ? ((v & n) === 0 || (v & i) !== 0) && (o[h] = da(v, t)) : S <= t && (e.expiredLanes |= v),
            s &= ~v
        }
        if (t = ot,
        n = Ge,
        n = ln(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i = e.callbackNode,
        n === 0 || e === t && (et === 2 || et === 9) || e.cancelPendingCommit !== null)
            return i !== null && i !== null && Zt(i),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((n & 3) === 0 || xn(e, n)) {
            if (t = n & -n,
            t === e.callbackPriority)
                return t;
            switch (i !== null && Zt(i),
            rn(n)) {
            case 2:
            case 8:
                n = Bt;
                break;
            case 32:
                n = Ze;
                break;
            case 268435456:
                n = Jt;
                break;
            default:
                n = Ze
            }
            return i = Vm.bind(null, e),
            n = xt(n, i),
            e.callbackPriority = t,
            e.callbackNode = n,
            t
        }
        return i !== null && i !== null && Zt(i),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Vm(e, t) {
        if (kt !== 0 && kt !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var n = e.callbackNode;
        if (Xs() && e.callbackNode !== n)
            return null;
        var i = Ge;
        return i = ln(e, e === ot ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i === 0 ? null : (Nm(e, i, t),
        Ym(e, We()),
        e.callbackNode != null && e.callbackNode === n ? Vm.bind(null, e) : null)
    }
    function Xm(e, t) {
        if (Xs())
            return null;
        Nm(e, t, !0)
    }
    function J1() {
        sp(function() {
            (Je & 6) !== 0 ? xt(St, Z1) : $m()
        })
    }
    function Pc() {
        if (Zl === 0) {
            var e = $i;
            e === 0 && (e = nn,
            nn <<= 1,
            (nn & 261888) === 0 && (nn = 256)),
            Zl = e
        }
        return Zl
    }
    function Qm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ka("" + e)
    }
    function Km(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name,
        n.value = t.value,
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        e = new FormData(e),
        n.parentNode.removeChild(n),
        e
    }
    function I1(e, t, n, i, o) {
        if (t === "submit" && n && n.stateNode === o) {
            var s = Qm((o[we] || null).action)
              , h = i.submitter;
            h && (t = (t = h[we] || null) ? Qm(t.formAction) : h.getAttribute("formAction"),
            t !== null && (s = t,
            h = null));
            var v = new va("action","action",null,i,o);
            e.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (Zl !== 0) {
                                var S = h ? Km(o, h) : new FormData(o);
                                _c(n, {
                                    pending: !0,
                                    data: S,
                                    method: o.method,
                                    action: s
                                }, null, S)
                            }
                        } else
                            typeof s == "function" && (v.preventDefault(),
                            S = h ? Km(o, h) : new FormData(o),
                            _c(n, {
                                pending: !0,
                                data: S,
                                method: o.method,
                                action: s
                            }, s, S))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var eu = 0; eu < Or.length; eu++) {
        var tu = Or[eu]
          , W1 = tu.toLowerCase()
          , F1 = tu[0].toUpperCase() + tu.slice(1);
        ba(W1, "on" + F1)
    }
    ba(Tf, "onAnimationEnd"),
    ba(Nf, "onAnimationIteration"),
    ba(jf, "onAnimationStart"),
    ba("dblclick", "onDoubleClick"),
    ba("focusin", "onFocus"),
    ba("focusout", "onBlur"),
    ba(h1, "onTransitionRun"),
    ba(y1, "onTransitionStart"),
    ba(p1, "onTransitionCancel"),
    ba(Af, "onTransitionEnd"),
    It("onMouseEnter", ["mouseout", "mouseover"]),
    It("onMouseLeave", ["mouseout", "mouseover"]),
    It("onPointerEnter", ["pointerout", "pointerover"]),
    It("onPointerLeave", ["pointerout", "pointerover"]),
    un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var $o = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , P1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));
    function Zm(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var i = e[n]
              , o = i.event;
            i = i.listeners;
            e: {
                var s = void 0;
                if (t)
                    for (var h = i.length - 1; 0 <= h; h--) {
                        var v = i[h]
                          , S = v.instance
                          , L = v.currentTarget;
                        if (v = v.listener,
                        S !== s && o.isPropagationStopped())
                            break e;
                        s = v,
                        o.currentTarget = L;
                        try {
                            s(o)
                        } catch (I) {
                            rs(I)
                        }
                        o.currentTarget = null,
                        s = S
                    }
                else
                    for (h = 0; h < i.length; h++) {
                        if (v = i[h],
                        S = v.instance,
                        L = v.currentTarget,
                        v = v.listener,
                        S !== s && o.isPropagationStopped())
                            break e;
                        s = v,
                        o.currentTarget = L;
                        try {
                            s(o)
                        } catch (I) {
                            rs(I)
                        }
                        o.currentTarget = null,
                        s = S
                    }
            }
        }
    }
    function qe(e, t) {
        var n = t[Ta];
        n === void 0 && (n = t[Ta] = new Set);
        var i = e + "__bubble";
        n.has(i) || (Jm(t, e, 2, !1),
        n.add(i))
    }
    function nu(e, t, n) {
        var i = 0;
        t && (i |= 4),
        Jm(n, e, i, t)
    }
    var Zs = "_reactListening" + Math.random().toString(36).slice(2);
    function au(e) {
        if (!e[Zs]) {
            e[Zs] = !0,
            ja.forEach(function(n) {
                n !== "selectionchange" && (P1.has(n) || nu(n, !1, e),
                nu(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Zs] || (t[Zs] = !0,
            nu("selectionchange", !1, t))
        }
    }
    function Jm(e, t, n, i) {
        switch (Th(t)) {
        case 2:
            var o = Ap;
            break;
        case 8:
            o = Ep;
            break;
        default:
            o = vu
        }
        n = o.bind(null, t, n, e),
        o = void 0,
        !si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        i ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1)
    }
    function lu(e, t, n, i, o) {
        var s = i;
        if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
            e: for (; ; ) {
                if (i === null)
                    return;
                var h = i.tag;
                if (h === 3 || h === 4) {
                    var v = i.stateNode.containerInfo;
                    if (v === o)
                        break;
                    if (h === 4)
                        for (h = i.return; h !== null; ) {
                            var S = h.tag;
                            if ((S === 3 || S === 4) && h.stateNode.containerInfo === o)
                                return;
                            h = h.return
                        }
                    for (; v !== null; ) {
                        if (h = Nn(v),
                        h === null)
                            return;
                        if (S = h.tag,
                        S === 5 || S === 6 || S === 26 || S === 27) {
                            i = s = h;
                            continue e
                        }
                        v = v.parentNode
                    }
                }
                i = i.return
            }
        oi(function() {
            var L = s
              , I = Ma(n)
              , te = [];
            e: {
                var q = Ef.get(e);
                if (q !== void 0) {
                    var V = va
                      , he = e;
                    switch (e) {
                    case "keypress":
                        if (Ja(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        V = Qy;
                        break;
                    case "focusin":
                        he = "focus",
                        V = Rl;
                        break;
                    case "focusout":
                        he = "blur",
                        V = Rl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        V = Rl;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        V = Wa;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        V = Al;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        V = Jy;
                        break;
                    case Tf:
                    case Nf:
                    case jf:
                        V = wl;
                        break;
                    case Af:
                        V = Wy;
                        break;
                    case "scroll":
                    case "scrollend":
                        V = Mi;
                        break;
                    case "wheel":
                        V = Py;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        V = wi;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        V = lf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        V = t1
                    }
                    var Te = (t & 4) !== 0
                      , lt = !Te && (e === "scroll" || e === "scrollend")
                      , R = Te ? q !== null ? q + "Capture" : null : q;
                    Te = [];
                    for (var N = L, D; N !== null; ) {
                        var F = N;
                        if (D = F.stateNode,
                        F = F.tag,
                        F !== 5 && F !== 26 && F !== 27 || D === null || R === null || (F = Wn(N, R),
                        F != null && Te.push(Yo(N, F, D))),
                        lt)
                            break;
                        N = N.return
                    }
                    0 < Te.length && (q = new V(q,he,null,n,I),
                    te.push({
                        event: q,
                        listeners: Te
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (q = e === "mouseover" || e === "pointerover",
                    V = e === "mouseout" || e === "pointerout",
                    q && n !== Sl && (he = n.relatedTarget || n.fromElement) && (Nn(he) || he[$e]))
                        break e;
                    if ((V || q) && (q = I.window === I ? I : (q = I.ownerDocument) ? q.defaultView || q.parentWindow : window,
                    V ? (he = n.relatedTarget || n.toElement,
                    V = L,
                    he = he ? Nn(he) : null,
                    he !== null && (lt = m(he),
                    Te = he.tag,
                    he !== lt || Te !== 5 && Te !== 27 && Te !== 6) && (he = null)) : (V = null,
                    he = L),
                    V !== he)) {
                        if (Te = Wa,
                        F = "onMouseLeave",
                        R = "onMouseEnter",
                        N = "mouse",
                        (e === "pointerout" || e === "pointerover") && (Te = lf,
                        F = "onPointerLeave",
                        R = "onPointerEnter",
                        N = "pointer"),
                        lt = V == null ? q : Zn(V),
                        D = he == null ? q : Zn(he),
                        q = new Te(F,N + "leave",V,n,I),
                        q.target = lt,
                        q.relatedTarget = D,
                        F = null,
                        Nn(I) === L && (Te = new Te(R,N + "enter",he,n,I),
                        Te.target = D,
                        Te.relatedTarget = lt,
                        F = Te),
                        lt = F,
                        V && he)
                            t: {
                                for (Te = ep,
                                R = V,
                                N = he,
                                D = 0,
                                F = R; F; F = Te(F))
                                    D++;
                                F = 0;
                                for (var xe = N; xe; xe = Te(xe))
                                    F++;
                                for (; 0 < D - F; )
                                    R = Te(R),
                                    D--;
                                for (; 0 < F - D; )
                                    N = Te(N),
                                    F--;
                                for (; D--; ) {
                                    if (R === N || N !== null && R === N.alternate) {
                                        Te = R;
                                        break t
                                    }
                                    R = Te(R),
                                    N = Te(N)
                                }
                                Te = null
                            }
                        else
                            Te = null;
                        V !== null && Im(te, q, V, Te, !1),
                        he !== null && lt !== null && Im(te, lt, he, Te, !0)
                    }
                }
                e: {
                    if (q = L ? Zn(L) : window,
                    V = q.nodeName && q.nodeName.toLowerCase(),
                    V === "select" || V === "input" && q.type === "file")
                        var Qe = mf;
                    else if (ff(q))
                        if (hf)
                            Qe = f1;
                        else {
                            Qe = c1;
                            var ve = r1
                        }
                    else
                        V = q.nodeName,
                        !V || V.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? L && Ra(L.elementType) && (Qe = mf) : Qe = u1;
                    if (Qe && (Qe = Qe(e, L))) {
                        df(te, Qe, n, I);
                        break e
                    }
                    ve && ve(e, q, L),
                    e === "focusout" && L && q.type === "number" && L.memoizedProps.value != null && Ea(q, "number", q.value)
                }
                switch (ve = L ? Zn(L) : window,
                e) {
                case "focusin":
                    (ff(ve) || ve.contentEditable === "true") && (Di = ve,
                    kr = L,
                    vo = null);
                    break;
                case "focusout":
                    vo = kr = Di = null;
                    break;
                case "mousedown":
                    Dr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Dr = !1,
                    Sf(te, n, I);
                    break;
                case "selectionchange":
                    if (m1)
                        break;
                case "keydown":
                case "keyup":
                    Sf(te, n, I)
                }
                var ze;
                if (Rr)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var He = "onCompositionStart";
                            break e;
                        case "compositionend":
                            He = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            He = "onCompositionUpdate";
                            break e
                        }
                        He = void 0
                    }
                else
                    ki ? cf(e, n) && (He = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (He = "onCompositionStart");
                He && (of && n.locale !== "ko" && (ki || He !== "onCompositionStart" ? He === "onCompositionEnd" && ki && (ze = Za()) : (Pt = I,
                Cl = "value"in Pt ? Pt.value : Pt.textContent,
                ki = !0)),
                ve = Js(L, He),
                0 < ve.length && (He = new Ae(He,e,null,n,I),
                te.push({
                    event: He,
                    listeners: ve
                }),
                ze ? He.data = ze : (ze = uf(n),
                ze !== null && (He.data = ze)))),
                (ze = a1 ? l1(e, n) : i1(e, n)) && (He = Js(L, "onBeforeInput"),
                0 < He.length && (ve = new Ae("onBeforeInput","beforeinput",null,n,I),
                te.push({
                    event: ve,
                    listeners: He
                }),
                ve.data = ze)),
                I1(te, e, L, n, I)
            }
            Zm(te, t)
        })
    }
    function Yo(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Js(e, t) {
        for (var n = t + "Capture", i = []; e !== null; ) {
            var o = e
              , s = o.stateNode;
            if (o = o.tag,
            o !== 5 && o !== 26 && o !== 27 || s === null || (o = Wn(e, n),
            o != null && i.unshift(Yo(e, o, s)),
            o = Wn(e, t),
            o != null && i.push(Yo(e, o, s))),
            e.tag === 3)
                return i;
            e = e.return
        }
        return []
    }
    function ep(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Im(e, t, n, i, o) {
        for (var s = t._reactName, h = []; n !== null && n !== i; ) {
            var v = n
              , S = v.alternate
              , L = v.stateNode;
            if (v = v.tag,
            S !== null && S === i)
                break;
            v !== 5 && v !== 26 && v !== 27 || L === null || (S = L,
            o ? (L = Wn(n, s),
            L != null && h.unshift(Yo(n, L, S))) : o || (L = Wn(n, s),
            L != null && h.push(Yo(n, L, S)))),
            n = n.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var tp = /\r\n?/g
      , np = /\u0000|\uFFFD/g;
    function Wm(e) {
        return (typeof e == "string" ? e : "" + e).replace(tp, `
`).replace(np, "")
    }
    function Fm(e, t) {
        return t = Wm(t),
        Wm(e) === t
    }
    function at(e, t, n, i, o, s) {
        switch (n) {
        case "children":
            typeof i == "string" ? t === "body" || t === "textarea" && i === "" || ya(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && ya(e, "" + i);
            break;
        case "className":
            Rn(e, "class", i);
            break;
        case "tabIndex":
            Rn(e, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Rn(e, n, i);
            break;
        case "style":
            li(e, i, s);
            break;
        case "data":
            if (t !== "object") {
                Rn(e, "data", i);
                break
            }
        case "src":
        case "href":
            if (i === "" && (t !== "a" || n !== "href")) {
                e.removeAttribute(n);
                break
            }
            if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(n);
                break
            }
            i = Ka("" + i),
            e.setAttribute(n, i);
            break;
        case "action":
        case "formAction":
            if (typeof i == "function") {
                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof s == "function" && (n === "formAction" ? (t !== "input" && at(e, t, "name", o.name, o, null),
                at(e, t, "formEncType", o.formEncType, o, null),
                at(e, t, "formMethod", o.formMethod, o, null),
                at(e, t, "formTarget", o.formTarget, o, null)) : (at(e, t, "encType", o.encType, o, null),
                at(e, t, "method", o.method, o, null),
                at(e, t, "target", o.target, o, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(n);
                break
            }
            i = Ka("" + i),
            e.setAttribute(n, i);
            break;
        case "onClick":
            i != null && (e.onclick = fn);
            break;
        case "onScroll":
            i != null && qe("scroll", e);
            break;
        case "onScrollEnd":
            i != null && qe("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(c(61));
                if (n = i.__html,
                n != null) {
                    if (o.children != null)
                        throw Error(c(60));
                    e.innerHTML = n
                }
            }
            break;
        case "multiple":
            e.multiple = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "muted":
            e.muted = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            n = Ka("" + i),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "" + i) : e.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
            break;
        case "capture":
        case "download":
            i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, i) : e.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(n, i) : e.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : e.setAttribute(n, i);
            break;
        case "popover":
            qe("beforetoggle", e),
            qe("toggle", e),
            En(e, "popover", i);
            break;
        case "xlinkActuate":
            qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            qt(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            qt(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            qt(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            qt(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            En(e, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ri.get(n) || n,
            En(e, n, i))
        }
    }
    function iu(e, t, n, i, o, s) {
        switch (n) {
        case "style":
            li(e, i, s);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(c(61));
                if (n = i.__html,
                n != null) {
                    if (o.children != null)
                        throw Error(c(60));
                    e.innerHTML = n
                }
            }
            break;
        case "children":
            typeof i == "string" ? ya(e, i) : (typeof i == "number" || typeof i == "bigint") && ya(e, "" + i);
            break;
        case "onScroll":
            i != null && qe("scroll", e);
            break;
        case "onScrollEnd":
            i != null && qe("scrollend", e);
            break;
        case "onClick":
            i != null && (e.onclick = fn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!vl.hasOwnProperty(n))
                e: {
                    if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"),
                    t = n.slice(2, o ? n.length - 7 : void 0),
                    s = e[we] || null,
                    s = s != null ? s[n] : null,
                    typeof s == "function" && e.removeEventListener(t, s, o),
                    typeof i == "function")) {
                        typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                        e.addEventListener(t, i, o);
                        break e
                    }
                    n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : En(e, n, i)
                }
        }
    }
    function Kt(e, t, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            qe("error", e),
            qe("load", e);
            var i = !1, o = !1, s;
            for (s in n)
                if (n.hasOwnProperty(s)) {
                    var h = n[s];
                    if (h != null)
                        switch (s) {
                        case "src":
                            i = !0;
                            break;
                        case "srcSet":
                            o = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(c(137, t));
                        default:
                            at(e, t, s, h, n, null)
                        }
                }
            o && at(e, t, "srcSet", n.srcSet, n, null),
            i && at(e, t, "src", n.src, n, null);
            return;
        case "input":
            qe("invalid", e);
            var v = s = h = o = null
              , S = null
              , L = null;
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    var I = n[i];
                    if (I != null)
                        switch (i) {
                        case "name":
                            o = I;
                            break;
                        case "type":
                            h = I;
                            break;
                        case "checked":
                            S = I;
                            break;
                        case "defaultChecked":
                            L = I;
                            break;
                        case "value":
                            s = I;
                            break;
                        case "defaultValue":
                            v = I;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (I != null)
                                throw Error(c(137, t));
                            break;
                        default:
                            at(e, t, i, I, n, null)
                        }
                }
            Qa(e, s, v, S, L, h, o, !1);
            return;
        case "select":
            qe("invalid", e),
            i = h = s = null;
            for (o in n)
                if (n.hasOwnProperty(o) && (v = n[o],
                v != null))
                    switch (o) {
                    case "value":
                        s = v;
                        break;
                    case "defaultValue":
                        h = v;
                        break;
                    case "multiple":
                        i = v;
                    default:
                        at(e, t, o, v, n, null)
                    }
            t = s,
            n = h,
            e.multiple = !!i,
            t != null ? ha(e, !!i, t, !1) : n != null && ha(e, !!i, n, !0);
            return;
        case "textarea":
            qe("invalid", e),
            s = o = i = null;
            for (h in n)
                if (n.hasOwnProperty(h) && (v = n[h],
                v != null))
                    switch (h) {
                    case "value":
                        i = v;
                        break;
                    case "defaultValue":
                        o = v;
                        break;
                    case "children":
                        s = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(c(91));
                        break;
                    default:
                        at(e, t, h, v, n, null)
                    }
            Ai(e, i, o, s);
            return;
        case "option":
            for (S in n)
                n.hasOwnProperty(S) && (i = n[S],
                i != null) && (S === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : at(e, t, S, i, n, null));
            return;
        case "dialog":
            qe("beforetoggle", e),
            qe("toggle", e),
            qe("cancel", e),
            qe("close", e);
            break;
        case "iframe":
        case "object":
            qe("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < $o.length; i++)
                qe($o[i], e);
            break;
        case "image":
            qe("error", e),
            qe("load", e);
            break;
        case "details":
            qe("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            qe("error", e),
            qe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (L in n)
                if (n.hasOwnProperty(L) && (i = n[L],
                i != null))
                    switch (L) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(c(137, t));
                    default:
                        at(e, t, L, i, n, null)
                    }
            return;
        default:
            if (Ra(t)) {
                for (I in n)
                    n.hasOwnProperty(I) && (i = n[I],
                    i !== void 0 && iu(e, t, I, i, n, void 0));
                return
            }
        }
        for (v in n)
            n.hasOwnProperty(v) && (i = n[v],
            i != null && at(e, t, v, i, n, null))
    }
    function ap(e, t, n, i) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var o = null
              , s = null
              , h = null
              , v = null
              , S = null
              , L = null
              , I = null;
            for (V in n) {
                var te = n[V];
                if (n.hasOwnProperty(V) && te != null)
                    switch (V) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        S = te;
                    default:
                        i.hasOwnProperty(V) || at(e, t, V, null, i, te)
                    }
            }
            for (var q in i) {
                var V = i[q];
                if (te = n[q],
                i.hasOwnProperty(q) && (V != null || te != null))
                    switch (q) {
                    case "type":
                        s = V;
                        break;
                    case "name":
                        o = V;
                        break;
                    case "checked":
                        L = V;
                        break;
                    case "defaultChecked":
                        I = V;
                        break;
                    case "value":
                        h = V;
                        break;
                    case "defaultValue":
                        v = V;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (V != null)
                            throw Error(c(137, t));
                        break;
                    default:
                        V !== te && at(e, t, q, V, i, te)
                    }
            }
            ni(e, h, v, S, L, I, s, o);
            return;
        case "select":
            V = h = v = q = null;
            for (s in n)
                if (S = n[s],
                n.hasOwnProperty(s) && S != null)
                    switch (s) {
                    case "value":
                        break;
                    case "multiple":
                        V = S;
                    default:
                        i.hasOwnProperty(s) || at(e, t, s, null, i, S)
                    }
            for (o in i)
                if (s = i[o],
                S = n[o],
                i.hasOwnProperty(o) && (s != null || S != null))
                    switch (o) {
                    case "value":
                        q = s;
                        break;
                    case "defaultValue":
                        v = s;
                        break;
                    case "multiple":
                        h = s;
                    default:
                        s !== S && at(e, t, o, s, i, S)
                    }
            t = v,
            n = h,
            i = V,
            q != null ? ha(e, !!n, q, !1) : !!i != !!n && (t != null ? ha(e, !!n, t, !0) : ha(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            V = q = null;
            for (v in n)
                if (o = n[v],
                n.hasOwnProperty(v) && o != null && !i.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        at(e, t, v, null, i, o)
                    }
            for (h in i)
                if (o = i[h],
                s = n[h],
                i.hasOwnProperty(h) && (o != null || s != null))
                    switch (h) {
                    case "value":
                        q = o;
                        break;
                    case "defaultValue":
                        V = o;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(c(91));
                        break;
                    default:
                        o !== s && at(e, t, h, o, i, s)
                    }
            ai(e, q, V);
            return;
        case "option":
            for (var he in n)
                q = n[he],
                n.hasOwnProperty(he) && q != null && !i.hasOwnProperty(he) && (he === "selected" ? e.selected = !1 : at(e, t, he, null, i, q));
            for (S in i)
                q = i[S],
                V = n[S],
                i.hasOwnProperty(S) && q !== V && (q != null || V != null) && (S === "selected" ? e.selected = q && typeof q != "function" && typeof q != "symbol" : at(e, t, S, q, i, V));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Te in n)
                q = n[Te],
                n.hasOwnProperty(Te) && q != null && !i.hasOwnProperty(Te) && at(e, t, Te, null, i, q);
            for (L in i)
                if (q = i[L],
                V = n[L],
                i.hasOwnProperty(L) && q !== V && (q != null || V != null))
                    switch (L) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (q != null)
                            throw Error(c(137, t));
                        break;
                    default:
                        at(e, t, L, q, i, V)
                    }
            return;
        default:
            if (Ra(t)) {
                for (var lt in n)
                    q = n[lt],
                    n.hasOwnProperty(lt) && q !== void 0 && !i.hasOwnProperty(lt) && iu(e, t, lt, void 0, i, q);
                for (I in i)
                    q = i[I],
                    V = n[I],
                    !i.hasOwnProperty(I) || q === V || q === void 0 && V === void 0 || iu(e, t, I, q, i, V);
                return
            }
        }
        for (var R in n)
            q = n[R],
            n.hasOwnProperty(R) && q != null && !i.hasOwnProperty(R) && at(e, t, R, null, i, q);
        for (te in i)
            q = i[te],
            V = n[te],
            !i.hasOwnProperty(te) || q === V || q == null && V == null || at(e, t, te, q, i, V)
    }
    function Pm(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function lp() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
                var o = n[i]
                  , s = o.transferSize
                  , h = o.initiatorType
                  , v = o.duration;
                if (s && v && Pm(h)) {
                    for (h = 0,
                    v = o.responseEnd,
                    i += 1; i < n.length; i++) {
                        var S = n[i]
                          , L = S.startTime;
                        if (L > v)
                            break;
                        var I = S.transferSize
                          , te = S.initiatorType;
                        I && Pm(te) && (S = S.responseEnd,
                        h += I * (S < v ? 1 : (v - L) / (S - L)))
                    }
                    if (--i,
                    t += 8 * (s + h) / (o.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var ou = null
      , su = null;
    function Is(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function eh(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function th(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function ru(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var cu = null;
    function ip() {
        var e = window.event;
        return e && e.type === "popstate" ? e === cu ? !1 : (cu = e,
        !0) : (cu = null,
        !1)
    }
    var nh = typeof setTimeout == "function" ? setTimeout : void 0
      , op = typeof clearTimeout == "function" ? clearTimeout : void 0
      , ah = typeof Promise == "function" ? Promise : void 0
      , sp = typeof queueMicrotask == "function" ? queueMicrotask : typeof ah < "u" ? function(e) {
        return ah.resolve(null).then(e).catch(rp)
    }
    : nh;
    function rp(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Jl(e) {
        return e === "head"
    }
    function lh(e, t) {
        var n = t
          , i = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n),
            o && o.nodeType === 8)
                if (n = o.data,
                n === "/$" || n === "/&") {
                    if (i === 0) {
                        e.removeChild(o),
                        so(t);
                        return
                    }
                    i--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    i++;
                else if (n === "html")
                    Vo(e.ownerDocument.documentElement);
                else if (n === "head") {
                    n = e.ownerDocument.head,
                    Vo(n);
                    for (var s = n.firstChild; s; ) {
                        var h = s.nextSibling
                          , v = s.nodeName;
                        s[Qn] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s),
                        s = h
                    }
                } else
                    n === "body" && Vo(e.ownerDocument.body);
            n = o
        } while (n);
        so(t)
    }
    function ih(e, t) {
        var n = e;
        e = 0;
        do {
            var i = n.nextSibling;
            if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            i && i.nodeType === 8)
                if (n = i.data,
                n === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
            n = i
        } while (n)
    }
    function uu(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                uu(n),
                Ya(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(n)
        }
    }
    function cp(e, t, n, i) {
        for (; e.nodeType === 1; ) {
            var o = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (i) {
                if (!e[Qn])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (s = e.getAttribute("rel"),
                        s === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (s !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (s = e.getAttribute("src"),
                        (s !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var s = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && e.getAttribute("name") === s)
                    return e
            } else
                return e;
            if (e = oa(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function up(e, t, n) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = oa(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function oh(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = oa(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function fu(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function du(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function fp(e, t) {
        var n = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || n.readyState !== "loading")
            t();
        else {
            var i = function() {
                t(),
                n.removeEventListener("DOMContentLoaded", i)
            };
            n.addEventListener("DOMContentLoaded", i),
            e._reactRetry = i
        }
    }
    function oa(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var mu = null;
    function sh(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$" || n === "/&") {
                    if (t === 0)
                        return oa(e.nextSibling);
                    t--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function rh(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n !== "/$" && n !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function ch(e, t, n) {
        switch (t = Is(n),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(c(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(c(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(c(454));
            return e;
        default:
            throw Error(c(451))
        }
    }
    function Vo(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Ya(e)
    }
    var sa = new Map
      , uh = new Set;
    function Ws(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var dl = H.d;
    H.d = {
        f: dp,
        r: mp,
        D: hp,
        C: yp,
        L: pp,
        m: gp,
        X: _p,
        S: vp,
        M: bp
    };
    function dp() {
        var e = dl.f()
          , t = $s();
        return e || t
    }
    function mp(e) {
        var t = Kn(e);
        t !== null && t.tag === 5 && t.type === "form" ? Ad(t) : dl.r(e)
    }
    var lo = typeof document > "u" ? null : document;
    function fh(e, t, n) {
        var i = lo;
        if (i && typeof t == "string" && t) {
            var o = Yt(t);
            o = 'link[rel="' + e + '"][href="' + o + '"]',
            typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
            uh.has(o) || (uh.add(o),
            e = {
                rel: e,
                crossOrigin: n,
                href: t
            },
            i.querySelector(o) === null && (t = i.createElement("link"),
            Kt(t, "link", e),
            st(t),
            i.head.appendChild(t)))
        }
    }
    function hp(e) {
        dl.D(e),
        fh("dns-prefetch", e, null)
    }
    function yp(e, t) {
        dl.C(e, t),
        fh("preconnect", e, t)
    }
    function pp(e, t, n) {
        dl.L(e, t, n);
        var i = lo;
        if (i && e && t) {
            var o = 'link[rel="preload"][as="' + Yt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Yt(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (o += '[imagesizes="' + Yt(n.imageSizes) + '"]')) : o += '[href="' + Yt(e) + '"]';
            var s = o;
            switch (t) {
            case "style":
                s = io(e);
                break;
            case "script":
                s = oo(e)
            }
            sa.has(s) || (e = x({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
            sa.set(s, e),
            i.querySelector(o) !== null || t === "style" && i.querySelector(Xo(s)) || t === "script" && i.querySelector(Qo(s)) || (t = i.createElement("link"),
            Kt(t, "link", e),
            st(t),
            i.head.appendChild(t)))
        }
    }
    function gp(e, t) {
        dl.m(e, t);
        var n = lo;
        if (n && e) {
            var i = t && typeof t.as == "string" ? t.as : "script"
              , o = 'link[rel="modulepreload"][as="' + Yt(i) + '"][href="' + Yt(e) + '"]'
              , s = o;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                s = oo(e)
            }
            if (!sa.has(s) && (e = x({
                rel: "modulepreload",
                href: e
            }, t),
            sa.set(s, e),
            n.querySelector(o) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Qo(s)))
                        return
                }
                i = n.createElement("link"),
                Kt(i, "link", e),
                st(i),
                n.head.appendChild(i)
            }
        }
    }
    function vp(e, t, n) {
        dl.S(e, t, n);
        var i = lo;
        if (i && e) {
            var o = jn(i).hoistableStyles
              , s = io(e);
            t = t || "default";
            var h = o.get(s);
            if (!h) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (h = i.querySelector(Xo(s)))
                    v.loading = 5;
                else {
                    e = x({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n),
                    (n = sa.get(s)) && hu(e, n);
                    var S = h = i.createElement("link");
                    st(S),
                    Kt(S, "link", e),
                    S._p = new Promise(function(L, I) {
                        S.onload = L,
                        S.onerror = I
                    }
                    ),
                    S.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    S.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    Fs(h, t, i)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: v
                },
                o.set(s, h)
            }
        }
    }
    function _p(e, t) {
        dl.X(e, t);
        var n = lo;
        if (n && e) {
            var i = jn(n).hoistableScripts
              , o = oo(e)
              , s = i.get(o);
            s || (s = n.querySelector(Qo(o)),
            s || (e = x({
                src: e,
                async: !0
            }, t),
            (t = sa.get(o)) && yu(e, t),
            s = n.createElement("script"),
            st(s),
            Kt(s, "link", e),
            n.head.appendChild(s)),
            s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            },
            i.set(o, s))
        }
    }
    function bp(e, t) {
        dl.M(e, t);
        var n = lo;
        if (n && e) {
            var i = jn(n).hoistableScripts
              , o = oo(e)
              , s = i.get(o);
            s || (s = n.querySelector(Qo(o)),
            s || (e = x({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = sa.get(o)) && yu(e, t),
            s = n.createElement("script"),
            st(s),
            Kt(s, "link", e),
            n.head.appendChild(s)),
            s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            },
            i.set(o, s))
        }
    }
    function dh(e, t, n, i) {
        var o = (o = fe.current) ? Ws(o) : null;
        if (!o)
            throw Error(c(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (t = io(n.href),
            n = jn(o).hoistableStyles,
            i = n.get(t),
            i || (i = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = io(n.href);
                var s = jn(o).hoistableStyles
                  , h = s.get(e);
                if (h || (o = o.ownerDocument || o,
                h = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                s.set(e, h),
                (s = o.querySelector(Xo(e))) && !s._p && (h.instance = s,
                h.state.loading = 5),
                sa.has(e) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                sa.set(e, n),
                s || xp(o, e, n, h.state))),
                t && i === null)
                    throw Error(c(528, ""));
                return h
            }
            if (t && i !== null)
                throw Error(c(529, ""));
            return null;
        case "script":
            return t = n.async,
            n = n.src,
            typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = oo(n),
            n = jn(o).hoistableScripts,
            i = n.get(t),
            i || (i = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(c(444, e))
        }
    }
    function io(e) {
        return 'href="' + Yt(e) + '"'
    }
    function Xo(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function mh(e) {
        return x({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function xp(e, t, n, i) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"),
        i.preload = t,
        t.addEventListener("load", function() {
            return i.loading |= 1
        }),
        t.addEventListener("error", function() {
            return i.loading |= 2
        }),
        Kt(t, "link", n),
        st(t),
        e.head.appendChild(t))
    }
    function oo(e) {
        return '[src="' + Yt(e) + '"]'
    }
    function Qo(e) {
        return "script[async]" + e
    }
    function hh(e, t, n) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var i = e.querySelector('style[data-href~="' + Yt(n.href) + '"]');
                if (i)
                    return t.instance = i,
                    st(i),
                    i;
                var o = x({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return i = (e.ownerDocument || e).createElement("style"),
                st(i),
                Kt(i, "style", o),
                Fs(i, n.precedence, e),
                t.instance = i;
            case "stylesheet":
                o = io(n.href);
                var s = e.querySelector(Xo(o));
                if (s)
                    return t.state.loading |= 4,
                    t.instance = s,
                    st(s),
                    s;
                i = mh(n),
                (o = sa.get(o)) && hu(i, o),
                s = (e.ownerDocument || e).createElement("link"),
                st(s);
                var h = s;
                return h._p = new Promise(function(v, S) {
                    h.onload = v,
                    h.onerror = S
                }
                ),
                Kt(s, "link", i),
                t.state.loading |= 4,
                Fs(s, n.precedence, e),
                t.instance = s;
            case "script":
                return s = oo(n.src),
                (o = e.querySelector(Qo(s))) ? (t.instance = o,
                st(o),
                o) : (i = n,
                (o = sa.get(s)) && (i = x({}, n),
                yu(i, o)),
                e = e.ownerDocument || e,
                o = e.createElement("script"),
                st(o),
                Kt(o, "link", i),
                e.head.appendChild(o),
                t.instance = o);
            case "void":
                return null;
            default:
                throw Error(c(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance,
            t.state.loading |= 4,
            Fs(i, n.precedence, e));
        return t.instance
    }
    function Fs(e, t, n) {
        for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = i.length ? i[i.length - 1] : null, s = o, h = 0; h < i.length; h++) {
            var v = i[h];
            if (v.dataset.precedence === t)
                s = v;
            else if (s !== o)
                break
        }
        s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
        t.insertBefore(e, t.firstChild))
    }
    function hu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function yu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Ps = null;
    function yh(e, t, n) {
        if (Ps === null) {
            var i = new Map
              , o = Ps = new Map;
            o.set(n, i)
        } else
            o = Ps,
            i = o.get(n),
            i || (i = new Map,
            o.set(n, i));
        if (i.has(e))
            return i;
        for (i.set(e, null),
        n = n.getElementsByTagName(e),
        o = 0; o < n.length; o++) {
            var s = n[o];
            if (!(s[Qn] || s[Ce] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = s.getAttribute(t) || "";
                h = e + h;
                var v = i.get(h);
                v ? v.push(s) : i.set(h, [s])
            }
        }
        return i
    }
    function ph(e, t, n) {
        e = e.ownerDocument || e,
        e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }
    function Sp(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function gh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Cp(e, t, n, i) {
        if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var o = io(i.href)
                  , s = t.querySelector(Xo(o));
                if (s) {
                    t = s._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = er.bind(e),
                    t.then(e, e)),
                    n.state.loading |= 4,
                    n.instance = s,
                    st(s);
                    return
                }
                s = t.ownerDocument || t,
                i = mh(i),
                (o = sa.get(o)) && hu(i, o),
                s = s.createElement("link"),
                st(s);
                var h = s;
                h._p = new Promise(function(v, S) {
                    h.onload = v,
                    h.onerror = S
                }
                ),
                Kt(s, "link", i),
                n.instance = s
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(n, t),
            (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++,
            n = er.bind(e),
            t.addEventListener("load", n),
            t.addEventListener("error", n))
        }
    }
    var pu = 0;
    function Tp(e, t) {
        return e.stylesheets && e.count === 0 && nr(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(n) {
            var i = setTimeout(function() {
                if (e.stylesheets && nr(e, e.stylesheets),
                e.unsuspend) {
                    var s = e.unsuspend;
                    e.unsuspend = null,
                    s()
                }
            }, 6e4 + t);
            0 < e.imgBytes && pu === 0 && (pu = 62500 * lp());
            var o = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && nr(e, e.stylesheets),
                e.unsuspend)) {
                    var s = e.unsuspend;
                    e.unsuspend = null,
                    s()
                }
            }, (e.imgBytes > pu ? 50 : 800) + t);
            return e.unsuspend = n,
            function() {
                e.unsuspend = null,
                clearTimeout(i),
                clearTimeout(o)
            }
        }
        : null
    }
    function er() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                nr(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var tr = null;
    function nr(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        tr = new Map,
        t.forEach(Np, e),
        tr = null,
        er.call(e))
    }
    function Np(e, t) {
        if (!(t.state.loading & 4)) {
            var n = tr.get(e);
            if (n)
                var i = n.get(null);
            else {
                n = new Map,
                tr.set(e, n);
                for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < o.length; s++) {
                    var h = o[s];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h),
                    i = h)
                }
                i && n.set(null, i)
            }
            o = t.instance,
            h = o.getAttribute("data-precedence"),
            s = n.get(h) || i,
            s === i && n.set(null, o),
            n.set(h, o),
            this.count++,
            i = er.bind(this),
            o.addEventListener("load", i),
            o.addEventListener("error", i),
            s ? s.parentNode.insertBefore(o, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(o, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Ko = {
        $$typeof: P,
        Provider: null,
        Consumer: null,
        _currentValue: E,
        _currentValue2: E,
        _threadCount: 0
    };
    function jp(e, t, n, i, o, s, h, v, S) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Vn(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Vn(0),
        this.hiddenUpdates = Vn(null),
        this.identifierPrefix = i,
        this.onUncaughtError = o,
        this.onCaughtError = s,
        this.onRecoverableError = h,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = S,
        this.incompleteTransitions = new Map
    }
    function vh(e, t, n, i, o, s, h, v, S, L, I, te) {
        return e = new jp(e,t,n,h,S,L,I,te,v),
        t = 1,
        s === !0 && (t |= 24),
        s = kn(3, null, null, t),
        e.current = s,
        s.stateNode = e,
        t = Jr(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        s.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: t
        },
        Pr(s),
        e
    }
    function _h(e) {
        return e ? (e = Bi,
        e) : Bi
    }
    function bh(e, t, n, i, o, s) {
        o = _h(o),
        i.context === null ? i.context = o : i.pendingContext = o,
        i = ql(t),
        i.payload = {
            element: n
        },
        s = s === void 0 ? null : s,
        s !== null && (i.callback = s),
        n = Ul(e, i, t),
        n !== null && (vn(n, e, t),
        No(n, e, t))
    }
    function xh(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function gu(e, t) {
        xh(e, t),
        (e = e.alternate) && xh(e, t)
    }
    function Sh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = di(e, 67108864);
            t !== null && vn(t, e, 67108864),
            gu(e, 67108864)
        }
    }
    function Ch(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = qn();
            t = Ft(t);
            var n = di(e, t);
            n !== null && vn(n, e, t),
            gu(e, t)
        }
    }
    var ar = !0;
    function Ap(e, t, n, i) {
        var o = j.T;
        j.T = null;
        var s = H.p;
        try {
            H.p = 2,
            vu(e, t, n, i)
        } finally {
            H.p = s,
            j.T = o
        }
    }
    function Ep(e, t, n, i) {
        var o = j.T;
        j.T = null;
        var s = H.p;
        try {
            H.p = 8,
            vu(e, t, n, i)
        } finally {
            H.p = s,
            j.T = o
        }
    }
    function vu(e, t, n, i) {
        if (ar) {
            var o = _u(i);
            if (o === null)
                lu(e, t, i, lr, n),
                Nh(e, i);
            else if (Mp(o, e, t, n, i))
                i.stopPropagation();
            else if (Nh(e, i),
            t & 4 && -1 < Rp.indexOf(e)) {
                for (; o !== null; ) {
                    var s = Kn(o);
                    if (s !== null)
                        switch (s.tag) {
                        case 3:
                            if (s = s.stateNode,
                            s.current.memoizedState.isDehydrated) {
                                var h = _t(s.pendingLanes);
                                if (h !== 0) {
                                    var v = s;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; h; ) {
                                        var S = 1 << 31 - vt(h);
                                        v.entanglements[1] |= S,
                                        h &= ~S
                                    }
                                    qa(s),
                                    (Je & 6) === 0 && (Gs = We() + 500,
                                    Ho(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            v = di(s, 2),
                            v !== null && vn(v, s, 2),
                            $s(),
                            gu(s, 2)
                        }
                    if (s = _u(i),
                    s === null && lu(e, t, i, lr, n),
                    s === o)
                        break;
                    o = s
                }
                o !== null && i.stopPropagation()
            } else
                lu(e, t, i, null, n)
        }
    }
    function _u(e) {
        return e = Ma(e),
        bu(e)
    }
    var lr = null;
    function bu(e) {
        if (lr = null,
        e = Nn(e),
        e !== null) {
            var t = m(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = f(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 31) {
                    if (e = y(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return lr = e,
        null
    }
    function Th(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (ca()) {
            case St:
                return 2;
            case Bt:
                return 8;
            case Ze:
            case tn:
                return 32;
            case Jt:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var xu = !1
      , Il = null
      , Wl = null
      , Fl = null
      , Zo = new Map
      , Jo = new Map
      , Pl = []
      , Rp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Nh(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Il = null;
            break;
        case "dragenter":
        case "dragleave":
            Wl = null;
            break;
        case "mouseover":
        case "mouseout":
            Fl = null;
            break;
        case "pointerover":
        case "pointerout":
            Zo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Jo.delete(t.pointerId)
        }
    }
    function Io(e, t, n, i, o, s) {
        return e === null || e.nativeEvent !== s ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: i,
            nativeEvent: s,
            targetContainers: [o]
        },
        t !== null && (t = Kn(t),
        t !== null && Sh(t)),
        e) : (e.eventSystemFlags |= i,
        t = e.targetContainers,
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e)
    }
    function Mp(e, t, n, i, o) {
        switch (t) {
        case "focusin":
            return Il = Io(Il, e, t, n, i, o),
            !0;
        case "dragenter":
            return Wl = Io(Wl, e, t, n, i, o),
            !0;
        case "mouseover":
            return Fl = Io(Fl, e, t, n, i, o),
            !0;
        case "pointerover":
            var s = o.pointerId;
            return Zo.set(s, Io(Zo.get(s) || null, e, t, n, i, o)),
            !0;
        case "gotpointercapture":
            return s = o.pointerId,
            Jo.set(s, Io(Jo.get(s) || null, e, t, n, i, o)),
            !0
        }
        return !1
    }
    function jh(e) {
        var t = Nn(e.target);
        if (t !== null) {
            var n = m(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = f(n),
                    t !== null) {
                        e.blockedOn = t,
                        Ue(e.priority, function() {
                            Ch(n)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = y(n),
                    t !== null) {
                        e.blockedOn = t,
                        Ue(e.priority, function() {
                            Ch(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function ir(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = _u(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var i = new n.constructor(n.type,n);
                Sl = i,
                n.target.dispatchEvent(i),
                Sl = null
            } else
                return t = Kn(n),
                t !== null && Sh(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Ah(e, t, n) {
        ir(e) && n.delete(t)
    }
    function wp() {
        xu = !1,
        Il !== null && ir(Il) && (Il = null),
        Wl !== null && ir(Wl) && (Wl = null),
        Fl !== null && ir(Fl) && (Fl = null),
        Zo.forEach(Ah),
        Jo.forEach(Ah)
    }
    function or(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        xu || (xu = !0,
        l.unstable_scheduleCallback(l.unstable_NormalPriority, wp)))
    }
    var sr = null;
    function Eh(e) {
        sr !== e && (sr = e,
        l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
            sr === e && (sr = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t]
                  , i = e[t + 1]
                  , o = e[t + 2];
                if (typeof i != "function") {
                    if (bu(i || n) === null)
                        continue;
                    break
                }
                var s = Kn(n);
                s !== null && (e.splice(t, 3),
                t -= 3,
                _c(s, {
                    pending: !0,
                    data: o,
                    method: n.method,
                    action: i
                }, i, o))
            }
        }))
    }
    function so(e) {
        function t(S) {
            return or(S, e)
        }
        Il !== null && or(Il, e),
        Wl !== null && or(Wl, e),
        Fl !== null && or(Fl, e),
        Zo.forEach(t),
        Jo.forEach(t);
        for (var n = 0; n < Pl.length; n++) {
            var i = Pl[n];
            i.blockedOn === e && (i.blockedOn = null)
        }
        for (; 0 < Pl.length && (n = Pl[0],
        n.blockedOn === null); )
            jh(n),
            n.blockedOn === null && Pl.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
        n != null)
            for (i = 0; i < n.length; i += 3) {
                var o = n[i]
                  , s = n[i + 1]
                  , h = o[we] || null;
                if (typeof s == "function")
                    h || Eh(n);
                else if (h) {
                    var v = null;
                    if (s && s.hasAttribute("formAction")) {
                        if (o = s,
                        h = s[we] || null)
                            v = h.formAction;
                        else if (bu(o) !== null)
                            continue
                    } else
                        v = h.action;
                    typeof v == "function" ? n[i + 1] = v : (n.splice(i, 3),
                    i -= 3),
                    Eh(n)
                }
            }
    }
    function Rh() {
        function e(s) {
            s.canIntercept && s.info === "react-transition" && s.intercept({
                handler: function() {
                    return new Promise(function(h) {
                        return o = h
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            o !== null && (o(),
            o = null),
            i || setTimeout(n, 20)
        }
        function n() {
            if (!i && !navigation.transition) {
                var s = navigation.currentEntry;
                s && s.url != null && navigation.navigate(s.url, {
                    state: s.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var i = !1
              , o = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(n, 100),
            function() {
                i = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                o !== null && (o(),
                o = null)
            }
        }
    }
    function Su(e) {
        this._internalRoot = e
    }
    rr.prototype.render = Su.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(c(409));
        var n = t.current
          , i = qn();
        bh(n, i, e, t, null, null)
    }
    ,
    rr.prototype.unmount = Su.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            bh(e.current, 2, null, e, null, null),
            $s(),
            t[$e] = null
        }
    }
    ;
    function rr(e) {
        this._internalRoot = e
    }
    rr.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Xn();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Pl.length && t !== 0 && t < Pl[n].priority; n++)
                ;
            Pl.splice(n, 0, e),
            n === 0 && jh(e)
        }
    }
    ;
    var Mh = a.version;
    if (Mh !== "19.2.3")
        throw Error(c(527, Mh, "19.2.3"));
    H.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","),
            Error(c(268, e)));
        return e = p(t),
        e = e !== null ? b(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var zp = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: j,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!cr.isDisabled && cr.supportsFiber)
            try {
                $t = cr.inject(zp),
                pt = cr
            } catch {}
    }
    return Fo.createRoot = function(e, t) {
        if (!u(e))
            throw Error(c(299));
        var n = !1
          , i = ""
          , o = Bd
          , s = qd
          , h = Ud;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
        t.onCaughtError !== void 0 && (s = t.onCaughtError),
        t.onRecoverableError !== void 0 && (h = t.onRecoverableError)),
        t = vh(e, 1, !1, null, null, n, i, null, o, s, h, Rh),
        e[$e] = t.current,
        au(e),
        new Su(t)
    }
    ,
    Fo.hydrateRoot = function(e, t, n) {
        if (!u(e))
            throw Error(c(299));
        var i = !1
          , o = ""
          , s = Bd
          , h = qd
          , v = Ud
          , S = null;
        return n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
        n.onCaughtError !== void 0 && (h = n.onCaughtError),
        n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
        n.formState !== void 0 && (S = n.formState)),
        t = vh(e, 1, !0, t, n ?? null, i, o, S, s, h, v, Rh),
        t.context = _h(null),
        n = t.current,
        i = qn(),
        i = Ft(i),
        o = ql(i),
        o.callback = null,
        Ul(n, o, i),
        n = i,
        t.current.lanes = n,
        on(t, n),
        qa(t),
        e[$e] = t.current,
        au(e),
        new rr(t)
    }
    ,
    Fo.version = "19.2.3",
    Fo
}
var $h;
function Yp() {
    if ($h)
        return Au.exports;
    $h = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
            } catch (a) {
                console.error(a)
            }
    }
    return l(),
    Au.exports = $p(),
    Au.exports
}
var Vp = Yp();
var Yh = "popstate";
function Xp(l={}) {
    function a(u, m) {
        let {pathname: f="/", search: y="", hash: g=""} = ji(u.location.hash.substring(1));
        return !f.startsWith("/") && !f.startsWith(".") && (f = "/" + f),
        qu("", {
            pathname: f,
            search: y,
            hash: g
        }, m.state && m.state.usr || null, m.state && m.state.key || "default")
    }
    function r(u, m) {
        let f = u.document.querySelector("base")
          , y = "";
        if (f && f.getAttribute("href")) {
            let g = u.location.href
              , p = g.indexOf("#");
            y = p === -1 ? g : g.slice(0, p)
        }
        return y + "#" + (typeof m == "string" ? m : ns(m))
    }
    function c(u, m) {
        $n(u.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)
    }
    return Kp(a, r, c, l)
}
function yt(l, a) {
    if (l === !1 || l === null || typeof l > "u")
        throw new Error(a)
}
function $n(l, a) {
    if (!l) {
        typeof console < "u" && console.warn(a);
        try {
            throw new Error(a)
        } catch {}
    }
}
function Qp() {
    return Math.random().toString(36).substring(2, 10)
}
function Vh(l, a) {
    return {
        usr: l.state,
        key: l.key,
        idx: a
    }
}
function qu(l, a, r=null, c) {
    return {
        pathname: typeof l == "string" ? l : l.pathname,
        search: "",
        hash: "",
        ...typeof a == "string" ? ji(a) : a,
        state: r,
        key: a && a.key || c || Qp()
    }
}
function ns({pathname: l="/", search: a="", hash: r=""}) {
    return a && a !== "?" && (l += a.charAt(0) === "?" ? a : "?" + a),
    r && r !== "#" && (l += r.charAt(0) === "#" ? r : "#" + r),
    l
}
function ji(l) {
    let a = {};
    if (l) {
        let r = l.indexOf("#");
        r >= 0 && (a.hash = l.substring(r),
        l = l.substring(0, r));
        let c = l.indexOf("?");
        c >= 0 && (a.search = l.substring(c),
        l = l.substring(0, c)),
        l && (a.pathname = l)
    }
    return a
}
function Kp(l, a, r, c={}) {
    let {window: u=document.defaultView, v5Compat: m=!1} = c
      , f = u.history
      , y = "POP"
      , g = null
      , p = b();
    p == null && (p = 0,
    f.replaceState({
        ...f.state,
        idx: p
    }, ""));
    function b() {
        return (f.state || {
            idx: null
        }).idx
    }
    function x() {
        y = "POP";
        let w = b()
          , Y = w == null ? null : w - p;
        p = w,
        g && g({
            action: y,
            location: M.location,
            delta: Y
        })
    }
    function T(w, Y) {
        y = "PUSH";
        let $ = qu(M.location, w, Y);
        r && r($, w),
        p = b() + 1;
        let P = Vh($, p)
          , X = M.createHref($);
        try {
            f.pushState(P, "", X)
        } catch (J) {
            if (J instanceof DOMException && J.name === "DataCloneError")
                throw J;
            u.location.assign(X)
        }
        m && g && g({
            action: y,
            location: M.location,
            delta: 1
        })
    }
    function O(w, Y) {
        y = "REPLACE";
        let $ = qu(M.location, w, Y);
        r && r($, w),
        p = b();
        let P = Vh($, p)
          , X = M.createHref($);
        f.replaceState(P, "", X),
        m && g && g({
            action: y,
            location: M.location,
            delta: 0
        })
    }
    function k(w) {
        return Zp(w)
    }
    let M = {
        get action() {
            return y
        },
        get location() {
            return l(u, f)
        },
        listen(w) {
            if (g)
                throw new Error("A history only accepts one active listener");
            return u.addEventListener(Yh, x),
            g = w,
            () => {
                u.removeEventListener(Yh, x),
                g = null
            }
        },
        createHref(w) {
            return a(u, w)
        },
        createURL: k,
        encodeLocation(w) {
            let Y = k(w);
            return {
                pathname: Y.pathname,
                search: Y.search,
                hash: Y.hash
            }
        },
        push: T,
        replace: O,
        go(w) {
            return f.go(w)
        }
    };
    return M
}
function Zp(l, a=!1) {
    let r = "http://localhost";
    typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href),
    yt(r, "No window.location.(origin|href) available to create URL");
    let c = typeof l == "string" ? l : ns(l);
    return c = c.replace(/ $/, "%20"),
    !a && c.startsWith("//") && (c = r + c),
    new URL(c,r)
}
function sy(l, a, r="/") {
    return Jp(l, a, r, !1)
}
function Jp(l, a, r, c) {
    let u = typeof a == "string" ? ji(a) : a
      , m = yl(u.pathname || "/", r);
    if (m == null)
        return null;
    let f = ry(l);
    Ip(f);
    let y = null;
    for (let g = 0; y == null && g < f.length; ++g) {
        let p = sg(m);
        y = ig(f[g], p, c)
    }
    return y
}
function ry(l, a=[], r=[], c="", u=!1) {
    let m = (f, y, g=u, p) => {
        let b = {
            relativePath: p === void 0 ? f.path || "" : p,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: y,
            route: f
        };
        if (b.relativePath.startsWith("/")) {
            if (!b.relativePath.startsWith(c) && g)
                return;
            yt(b.relativePath.startsWith(c), `Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            b.relativePath = b.relativePath.slice(c.length)
        }
        let x = hl([c, b.relativePath])
          , T = r.concat(b);
        f.children && f.children.length > 0 && (yt(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${x}".`),
        ry(f.children, a, T, x, g)),
        !(f.path == null && !f.index) && a.push({
            path: x,
            score: ag(x, f.index),
            routesMeta: T
        })
    }
    ;
    return l.forEach( (f, y) => {
        if (f.path === "" || !f.path?.includes("?"))
            m(f, y);
        else
            for (let g of cy(f.path))
                m(f, y, !0, g)
    }
    ),
    a
}
function cy(l) {
    let a = l.split("/");
    if (a.length === 0)
        return [];
    let[r,...c] = a
      , u = r.endsWith("?")
      , m = r.replace(/\?$/, "");
    if (c.length === 0)
        return u ? [m, ""] : [m];
    let f = cy(c.join("/"))
      , y = [];
    return y.push(...f.map(g => g === "" ? m : [m, g].join("/"))),
    u && y.push(...f),
    y.map(g => l.startsWith("/") && g === "" ? "/" : g)
}
function Ip(l) {
    l.sort( (a, r) => a.score !== r.score ? r.score - a.score : lg(a.routesMeta.map(c => c.childrenIndex), r.routesMeta.map(c => c.childrenIndex)))
}
var Wp = /^:[\w-]+$/
  , Fp = 3
  , Pp = 2
  , eg = 1
  , tg = 10
  , ng = -2
  , Xh = l => l === "*";
function ag(l, a) {
    let r = l.split("/")
      , c = r.length;
    return r.some(Xh) && (c += ng),
    a && (c += Pp),
    r.filter(u => !Xh(u)).reduce( (u, m) => u + (Wp.test(m) ? Fp : m === "" ? eg : tg), c)
}
function lg(l, a) {
    return l.length === a.length && l.slice(0, -1).every( (c, u) => c === a[u]) ? l[l.length - 1] - a[a.length - 1] : 0
}
function ig(l, a, r=!1) {
    let {routesMeta: c} = l
      , u = {}
      , m = "/"
      , f = [];
    for (let y = 0; y < c.length; ++y) {
        let g = c[y]
          , p = y === c.length - 1
          , b = m === "/" ? a : a.slice(m.length) || "/"
          , x = pr({
            path: g.relativePath,
            caseSensitive: g.caseSensitive,
            end: p
        }, b)
          , T = g.route;
        if (!x && p && r && !c[c.length - 1].route.index && (x = pr({
            path: g.relativePath,
            caseSensitive: g.caseSensitive,
            end: !1
        }, b)),
        !x)
            return null;
        Object.assign(u, x.params),
        f.push({
            params: u,
            pathname: hl([m, x.pathname]),
            pathnameBase: fg(hl([m, x.pathnameBase])),
            route: T
        }),
        x.pathnameBase !== "/" && (m = hl([m, x.pathnameBase]))
    }
    return f
}
function pr(l, a) {
    typeof l == "string" && (l = {
        path: l,
        caseSensitive: !1,
        end: !0
    });
    let[r,c] = og(l.path, l.caseSensitive, l.end)
      , u = a.match(r);
    if (!u)
        return null;
    let m = u[0]
      , f = m.replace(/(.)\/+$/, "$1")
      , y = u.slice(1);
    return {
        params: c.reduce( (p, {paramName: b, isOptional: x}, T) => {
            if (b === "*") {
                let k = y[T] || "";
                f = m.slice(0, m.length - k.length).replace(/(.)\/+$/, "$1")
            }
            const O = y[T];
            return x && !O ? p[b] = void 0 : p[b] = (O || "").replace(/%2F/g, "/"),
            p
        }
        , {}),
        pathname: m,
        pathnameBase: f,
        pattern: l
    }
}
function og(l, a=!1, r=!0) {
    $n(l === "*" || !l.endsWith("*") || l.endsWith("/*"), `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`);
    let c = []
      , u = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, y, g) => (c.push({
        paramName: y,
        isOptional: g != null
    }),
    g ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return l.endsWith("*") ? (c.push({
        paramName: "*"
    }),
    u += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? u += "\\/*$" : l !== "" && l !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u,a ? void 0 : "i"), c]
}
function sg(l) {
    try {
        return l.split("/").map(a => decodeURIComponent(a).replace(/\//g, "%2F")).join("/")
    } catch (a) {
        return $n(!1, `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),
        l
    }
}
function yl(l, a) {
    if (a === "/")
        return l;
    if (!l.toLowerCase().startsWith(a.toLowerCase()))
        return null;
    let r = a.endsWith("/") ? a.length - 1 : a.length
      , c = l.charAt(r);
    return c && c !== "/" ? null : l.slice(r) || "/"
}
var uy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , rg = l => uy.test(l);
function cg(l, a="/") {
    let {pathname: r, search: c="", hash: u=""} = typeof l == "string" ? ji(l) : l, m;
    if (r)
        if (rg(r))
            m = r;
        else {
            if (r.includes("//")) {
                let f = r;
                r = r.replace(/\/\/+/g, "/"),
                $n(!1, `Pathnames cannot have embedded double slashes - normalizing ${f} -> ${r}`)
            }
            r.startsWith("/") ? m = Qh(r.substring(1), "/") : m = Qh(r, a)
        }
    else
        m = a;
    return {
        pathname: m,
        search: dg(c),
        hash: mg(u)
    }
}
function Qh(l, a) {
    let r = a.replace(/\/+$/, "").split("/");
    return l.split("/").forEach(u => {
        u === ".." ? r.length > 1 && r.pop() : u !== "." && r.push(u)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function wu(l, a, r, c) {
    return `Cannot include a '${l}' character in a manually specified \`to.${a}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function ug(l) {
    return l.filter( (a, r) => r === 0 || a.route.path && a.route.path.length > 0)
}
function Xu(l) {
    let a = ug(l);
    return a.map( (r, c) => c === a.length - 1 ? r.pathname : r.pathnameBase)
}
function Qu(l, a, r, c=!1) {
    let u;
    typeof l == "string" ? u = ji(l) : (u = {
        ...l
    },
    yt(!u.pathname || !u.pathname.includes("?"), wu("?", "pathname", "search", u)),
    yt(!u.pathname || !u.pathname.includes("#"), wu("#", "pathname", "hash", u)),
    yt(!u.search || !u.search.includes("#"), wu("#", "search", "hash", u)));
    let m = l === "" || u.pathname === "", f = m ? "/" : u.pathname, y;
    if (f == null)
        y = r;
    else {
        let x = a.length - 1;
        if (!c && f.startsWith("..")) {
            let T = f.split("/");
            for (; T[0] === ".."; )
                T.shift(),
                x -= 1;
            u.pathname = T.join("/")
        }
        y = x >= 0 ? a[x] : "/"
    }
    let g = cg(u, y)
      , p = f && f !== "/" && f.endsWith("/")
      , b = (m || f === ".") && r.endsWith("/");
    return !g.pathname.endsWith("/") && (p || b) && (g.pathname += "/"),
    g
}
var hl = l => l.join("/").replace(/\/\/+/g, "/")
  , fg = l => l.replace(/\/+$/, "").replace(/^\/*/, "/")
  , dg = l => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l
  , mg = l => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l
  , hg = class {
    constructor(l, a, r, c=!1) {
        this.status = l,
        this.statusText = a || "",
        this.internal = c,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
;
function yg(l) {
    return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data"in l
}
function pg(l) {
    return l.map(a => a.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var fy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function dy(l, a) {
    let r = l;
    if (typeof r != "string" || !uy.test(r))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: r
        };
    let c = r
      , u = !1;
    if (fy)
        try {
            let m = new URL(window.location.href)
              , f = r.startsWith("//") ? new URL(m.protocol + r) : new URL(r)
              , y = yl(f.pathname, a);
            f.origin === m.origin && y != null ? r = y + f.search + f.hash : u = !0
        } catch {
            $n(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: c,
        isExternal: u,
        to: r
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var my = ["POST", "PUT", "PATCH", "DELETE"];
new Set(my);
var gg = ["GET", ...my];
new Set(gg);
var co = C.createContext(null);
co.displayName = "DataRouter";
var Sr = C.createContext(null);
Sr.displayName = "DataRouterState";
var vg = C.createContext(!1)
  , hy = C.createContext({
    isTransitioning: !1
});
hy.displayName = "ViewTransition";
var _g = C.createContext(new Map);
_g.displayName = "Fetchers";
var bg = C.createContext(null);
bg.displayName = "Await";
var Yn = C.createContext(null);
Yn.displayName = "Navigation";
var ls = C.createContext(null);
ls.displayName = "Location";
var Ga = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Ga.displayName = "Route";
var Ku = C.createContext(null);
Ku.displayName = "RouteError";
var yy = "REACT_ROUTER_ERROR"
  , xg = "REDIRECT"
  , Sg = "ROUTE_ERROR_RESPONSE";
function Cg(l) {
    if (l.startsWith(`${yy}:${xg}:{`))
        try {
            let a = JSON.parse(l.slice(28));
            if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
                return a
        } catch {}
}
function Tg(l) {
    if (l.startsWith(`${yy}:${Sg}:{`))
        try {
            let a = JSON.parse(l.slice(40));
            if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
                return new hg(a.status,a.statusText,a.data)
        } catch {}
}
function Ng(l, {relative: a}={}) {
    yt(uo(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: r, navigator: c} = C.useContext(Yn)
      , {hash: u, pathname: m, search: f} = is(l, {
        relative: a
    })
      , y = m;
    return r !== "/" && (y = m === "/" ? r : hl([r, m])),
    c.createHref({
        pathname: y,
        search: f,
        hash: u
    })
}
function uo() {
    return C.useContext(ls) != null
}
function Ha() {
    return yt(uo(), "useLocation() may be used only in the context of a <Router> component."),
    C.useContext(ls).location
}
var py = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gy(l) {
    C.useContext(Yn).static || C.useLayoutEffect(l)
}
function Zu() {
    let {isDataRoute: l} = C.useContext(Ga);
    return l ? qg() : jg()
}
function jg() {
    yt(uo(), "useNavigate() may be used only in the context of a <Router> component.");
    let l = C.useContext(co)
      , {basename: a, navigator: r} = C.useContext(Yn)
      , {matches: c} = C.useContext(Ga)
      , {pathname: u} = Ha()
      , m = JSON.stringify(Xu(c))
      , f = C.useRef(!1);
    return gy( () => {
        f.current = !0
    }
    ),
    C.useCallback( (g, p={}) => {
        if ($n(f.current, py),
        !f.current)
            return;
        if (typeof g == "number") {
            r.go(g);
            return
        }
        let b = Qu(g, JSON.parse(m), u, p.relative === "path");
        l == null && a !== "/" && (b.pathname = b.pathname === "/" ? a : hl([a, b.pathname])),
        (p.replace ? r.replace : r.push)(b, p.state, p)
    }
    , [a, r, m, u, l])
}
C.createContext(null);
function is(l, {relative: a}={}) {
    let {matches: r} = C.useContext(Ga)
      , {pathname: c} = Ha()
      , u = JSON.stringify(Xu(r));
    return C.useMemo( () => Qu(l, JSON.parse(u), c, a === "path"), [l, u, c, a])
}
function Ag(l, a) {
    return vy(l, a)
}
function vy(l, a, r, c, u) {
    yt(uo(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: m} = C.useContext(Yn)
      , {matches: f} = C.useContext(Ga)
      , y = f[f.length - 1]
      , g = y ? y.params : {}
      , p = y ? y.pathname : "/"
      , b = y ? y.pathnameBase : "/"
      , x = y && y.route;
    {
        let $ = x && x.path || "";
        by(p, !x || $.endsWith("*") || $.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$ === "/" ? "*" : `${$}/*`}">.`)
    }
    let T = Ha(), O;
    if (a) {
        let $ = typeof a == "string" ? ji(a) : a;
        yt(b === "/" || $.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${$.pathname}" was given in the \`location\` prop.`),
        O = $
    } else
        O = T;
    let k = O.pathname || "/"
      , M = k;
    if (b !== "/") {
        let $ = b.replace(/^\//, "").split("/");
        M = "/" + k.replace(/^\//, "").split("/").slice($.length).join("/")
    }
    let w = sy(l, {
        pathname: M
    });
    $n(x || w != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `),
    $n(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let Y = zg(w && w.map($ => Object.assign({}, $, {
        params: Object.assign({}, g, $.params),
        pathname: hl([b, m.encodeLocation ? m.encodeLocation($.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : $.pathname]),
        pathnameBase: $.pathnameBase === "/" ? b : hl([b, m.encodeLocation ? m.encodeLocation($.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : $.pathnameBase])
    })), f, r, c, u);
    return a && Y ? C.createElement(ls.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...O
            },
            navigationType: "POP"
        }
    }, Y) : Y
}
function Eg() {
    let l = Bg()
      , a = yg(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l)
      , r = l instanceof Error ? l.stack : null
      , c = "rgba(200,200,200, 0.5)"
      , u = {
        padding: "0.5rem",
        backgroundColor: c
    }
      , m = {
        padding: "2px 4px",
        backgroundColor: c
    }
      , f = null;
    return console.error("Error handled by React Router default ErrorBoundary:", l),
    f = C.createElement(C.Fragment, null, C.createElement("p", null, "💿 Hey developer 👋"), C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", C.createElement("code", {
        style: m
    }, "ErrorBoundary"), " or", " ", C.createElement("code", {
        style: m
    }, "errorElement"), " prop on your route.")),
    C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, a), r ? C.createElement("pre", {
        style: u
    }, r) : null, f)
}
var Rg = C.createElement(Eg, null)
  , _y = class extends C.Component {
    constructor(l) {
        super(l),
        this.state = {
            location: l.location,
            revalidation: l.revalidation,
            error: l.error
        }
    }
    static getDerivedStateFromError(l) {
        return {
            error: l
        }
    }
    static getDerivedStateFromProps(l, a) {
        return a.location !== l.location || a.revalidation !== "idle" && l.revalidation === "idle" ? {
            error: l.error,
            location: l.location,
            revalidation: l.revalidation
        } : {
            error: l.error !== void 0 ? l.error : a.error,
            location: a.location,
            revalidation: l.revalidation || a.revalidation
        }
    }
    componentDidCatch(l, a) {
        this.props.onError ? this.props.onError(l, a) : console.error("React Router caught the following error during render", l)
    }
    render() {
        let l = this.state.error;
        if (this.context && typeof l == "object" && l && "digest"in l && typeof l.digest == "string") {
            const r = Tg(l.digest);
            r && (l = r)
        }
        let a = l !== void 0 ? C.createElement(Ga.Provider, {
            value: this.props.routeContext
        }, C.createElement(Ku.Provider, {
            value: l,
            children: this.props.component
        })) : this.props.children;
        return this.context ? C.createElement(Mg, {
            error: l
        }, a) : a
    }
}
;
_y.contextType = vg;
var zu = new WeakMap;
function Mg({children: l, error: a}) {
    let {basename: r} = C.useContext(Yn);
    if (typeof a == "object" && a && "digest"in a && typeof a.digest == "string") {
        let c = Cg(a.digest);
        if (c) {
            let u = zu.get(a);
            if (u)
                throw u;
            let m = dy(c.location, r);
            if (fy && !zu.get(a))
                if (m.isExternal || c.reloadDocument)
                    window.location.href = m.absoluteURL || m.to;
                else {
                    const f = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(m.to, {
                        replace: c.replace
                    }));
                    throw zu.set(a, f),
                    f
                }
            return C.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${m.absoluteURL || m.to}`
            })
        }
    }
    return l
}
function wg({routeContext: l, match: a, children: r}) {
    let c = C.useContext(co);
    return c && c.static && c.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = a.route.id),
    C.createElement(Ga.Provider, {
        value: l
    }, r)
}
function zg(l, a=[], r=null, c=null, u=null) {
    if (l == null) {
        if (!r)
            return null;
        if (r.errors)
            l = r.matches;
        else if (a.length === 0 && !r.initialized && r.matches.length > 0)
            l = r.matches;
        else
            return null
    }
    let m = l
      , f = r?.errors;
    if (f != null) {
        let b = m.findIndex(x => x.route.id && f?.[x.route.id] !== void 0);
        yt(b >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),
        m = m.slice(0, Math.min(m.length, b + 1))
    }
    let y = !1
      , g = -1;
    if (r)
        for (let b = 0; b < m.length; b++) {
            let x = m[b];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = b),
            x.route.id) {
                let {loaderData: T, errors: O} = r
                  , k = x.route.loader && !T.hasOwnProperty(x.route.id) && (!O || O[x.route.id] === void 0);
                if (x.route.lazy || k) {
                    y = !0,
                    g >= 0 ? m = m.slice(0, g + 1) : m = [m[0]];
                    break
                }
            }
        }
    let p = r && c ? (b, x) => {
        c(b, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: pg(r.matches),
            errorInfo: x
        })
    }
    : void 0;
    return m.reduceRight( (b, x, T) => {
        let O, k = !1, M = null, w = null;
        r && (O = f && x.route.id ? f[x.route.id] : void 0,
        M = x.route.errorElement || Rg,
        y && (g < 0 && T === 0 ? (by("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        k = !0,
        w = null) : g === T && (k = !0,
        w = x.route.hydrateFallbackElement || null)));
        let Y = a.concat(m.slice(0, T + 1))
          , $ = () => {
            let P;
            return O ? P = M : k ? P = w : x.route.Component ? P = C.createElement(x.route.Component, null) : x.route.element ? P = x.route.element : P = b,
            C.createElement(wg, {
                match: x,
                routeContext: {
                    outlet: b,
                    matches: Y,
                    isDataRoute: r != null
                },
                children: P
            })
        }
        ;
        return r && (x.route.ErrorBoundary || x.route.errorElement || T === 0) ? C.createElement(_y, {
            location: r.location,
            revalidation: r.revalidation,
            component: M,
            error: O,
            children: $(),
            routeContext: {
                outlet: null,
                matches: Y,
                isDataRoute: !0
            },
            onError: p
        }) : $()
    }
    , null)
}
function Ju(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function kg(l) {
    let a = C.useContext(co);
    return yt(a, Ju(l)),
    a
}
function Dg(l) {
    let a = C.useContext(Sr);
    return yt(a, Ju(l)),
    a
}
function Lg(l) {
    let a = C.useContext(Ga);
    return yt(a, Ju(l)),
    a
}
function Iu(l) {
    let a = Lg(l)
      , r = a.matches[a.matches.length - 1];
    return yt(r.route.id, `${l} can only be used on routes that contain a unique "id"`),
    r.route.id
}
function Og() {
    return Iu("useRouteId")
}
function Bg() {
    let l = C.useContext(Ku)
      , a = Dg("useRouteError")
      , r = Iu("useRouteError");
    return l !== void 0 ? l : a.errors?.[r]
}
function qg() {
    let {router: l} = kg("useNavigate")
      , a = Iu("useNavigate")
      , r = C.useRef(!1);
    return gy( () => {
        r.current = !0
    }
    ),
    C.useCallback(async (u, m={}) => {
        $n(r.current, py),
        r.current && (typeof u == "number" ? await l.navigate(u) : await l.navigate(u, {
            fromRouteId: a,
            ...m
        }))
    }
    , [l, a])
}
var Kh = {};
function by(l, a, r) {
    !a && !Kh[l] && (Kh[l] = !0,
    $n(!1, r))
}
C.memo(Ug);
function Ug({routes: l, future: a, state: r, onError: c}) {
    return vy(l, void 0, r, c, a)
}
function Gg({to: l, replace: a, state: r, relative: c}) {
    yt(uo(), "<Navigate> may be used only in the context of a <Router> component.");
    let {static: u} = C.useContext(Yn);
    $n(!u, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {matches: m} = C.useContext(Ga)
      , {pathname: f} = Ha()
      , y = Zu()
      , g = Qu(l, Xu(m), f, c === "path")
      , p = JSON.stringify(g);
    return C.useEffect( () => {
        y(JSON.parse(p), {
            replace: a,
            state: r,
            relative: c
        })
    }
    , [y, p, c, a, r]),
    null
}
function dr(l) {
    yt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Hg({basename: l="/", children: a=null, location: r, navigationType: c="POP", navigator: u, static: m=!1, unstable_useTransitions: f}) {
    yt(!uo(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let y = l.replace(/^\/*/, "/")
      , g = C.useMemo( () => ({
        basename: y,
        navigator: u,
        static: m,
        unstable_useTransitions: f,
        future: {}
    }), [y, u, m, f]);
    typeof r == "string" && (r = ji(r));
    let {pathname: p="/", search: b="", hash: x="", state: T=null, key: O="default"} = r
      , k = C.useMemo( () => {
        let M = yl(p, y);
        return M == null ? null : {
            location: {
                pathname: M,
                search: b,
                hash: x,
                state: T,
                key: O
            },
            navigationType: c
        }
    }
    , [y, p, b, x, T, O, c]);
    return $n(k != null, `<Router basename="${y}"> is not able to match the URL "${p}${b}${x}" because it does not start with the basename, so the <Router> won't render anything.`),
    k == null ? null : C.createElement(Yn.Provider, {
        value: g
    }, C.createElement(ls.Provider, {
        children: a,
        value: k
    }))
}
function $g({children: l, location: a}) {
    return Ag(Uu(l), a)
}
function Uu(l, a=[]) {
    let r = [];
    return C.Children.forEach(l, (c, u) => {
        if (!C.isValidElement(c))
            return;
        let m = [...a, u];
        if (c.type === C.Fragment) {
            r.push.apply(r, Uu(c.props.children, m));
            return
        }
        yt(c.type === dr, `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        yt(!c.props.index || !c.props.children, "An index route cannot have child routes.");
        let f = {
            id: c.props.id || m.join("-"),
            caseSensitive: c.props.caseSensitive,
            element: c.props.element,
            Component: c.props.Component,
            index: c.props.index,
            path: c.props.path,
            middleware: c.props.middleware,
            loader: c.props.loader,
            action: c.props.action,
            hydrateFallbackElement: c.props.hydrateFallbackElement,
            HydrateFallback: c.props.HydrateFallback,
            errorElement: c.props.errorElement,
            ErrorBoundary: c.props.ErrorBoundary,
            hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null,
            shouldRevalidate: c.props.shouldRevalidate,
            handle: c.props.handle,
            lazy: c.props.lazy
        };
        c.props.children && (f.children = Uu(c.props.children, m)),
        r.push(f)
    }
    ),
    r
}
var mr = "get"
  , hr = "application/x-www-form-urlencoded";
function Cr(l) {
    return typeof HTMLElement < "u" && l instanceof HTMLElement
}
function Yg(l) {
    return Cr(l) && l.tagName.toLowerCase() === "button"
}
function Vg(l) {
    return Cr(l) && l.tagName.toLowerCase() === "form"
}
function Xg(l) {
    return Cr(l) && l.tagName.toLowerCase() === "input"
}
function Qg(l) {
    return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey)
}
function Kg(l, a) {
    return l.button === 0 && (!a || a === "_self") && !Qg(l)
}
var ur = null;
function Zg() {
    if (ur === null)
        try {
            new FormData(document.createElement("form"),0),
            ur = !1
        } catch {
            ur = !0
        }
    return ur
}
var Jg = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ku(l) {
    return l != null && !Jg.has(l) ? ($n(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hr}"`),
    null) : l
}
function Ig(l, a) {
    let r, c, u, m, f;
    if (Vg(l)) {
        let y = l.getAttribute("action");
        c = y ? yl(y, a) : null,
        r = l.getAttribute("method") || mr,
        u = ku(l.getAttribute("enctype")) || hr,
        m = new FormData(l)
    } else if (Yg(l) || Xg(l) && (l.type === "submit" || l.type === "image")) {
        let y = l.form;
        if (y == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let g = l.getAttribute("formaction") || y.getAttribute("action");
        if (c = g ? yl(g, a) : null,
        r = l.getAttribute("formmethod") || y.getAttribute("method") || mr,
        u = ku(l.getAttribute("formenctype")) || ku(y.getAttribute("enctype")) || hr,
        m = new FormData(y,l),
        !Zg()) {
            let {name: p, type: b, value: x} = l;
            if (b === "image") {
                let T = p ? `${p}.` : "";
                m.append(`${T}x`, "0"),
                m.append(`${T}y`, "0")
            } else
                p && m.append(p, x)
        }
    } else {
        if (Cr(l))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        r = mr,
        c = null,
        u = hr,
        f = l
    }
    return m && u === "text/plain" && (f = m,
    m = void 0),
    {
        action: c,
        method: r.toLowerCase(),
        encType: u,
        formData: m,
        body: f
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Wu(l, a) {
    if (l === !1 || l === null || typeof l > "u")
        throw new Error(a)
}
function Wg(l, a, r) {
    let c = typeof l == "string" ? new URL(l,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : l;
    return c.pathname === "/" ? c.pathname = `_root.${r}` : a && yl(c.pathname, a) === "/" ? c.pathname = `${a.replace(/\/$/, "")}/_root.${r}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${r}`,
    c
}
async function Fg(l, a) {
    if (l.id in a)
        return a[l.id];
    try {
        let r = await import(l.module);
        return a[l.id] = r,
        r
    } catch (r) {
        return console.error(`Error loading route module \`${l.module}\`, reloading page...`),
        console.error(r),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function Pg(l) {
    return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string"
}
async function e0(l, a, r) {
    let c = await Promise.all(l.map(async u => {
        let m = a.routes[u.route.id];
        if (m) {
            let f = await Fg(m, r);
            return f.links ? f.links() : []
        }
        return []
    }
    ));
    return l0(c.flat(1).filter(Pg).filter(u => u.rel === "stylesheet" || u.rel === "preload").map(u => u.rel === "stylesheet" ? {
        ...u,
        rel: "prefetch",
        as: "style"
    } : {
        ...u,
        rel: "prefetch"
    }))
}
function Zh(l, a, r, c, u, m) {
    let f = (g, p) => r[p] ? g.route.id !== r[p].route.id : !0
      , y = (g, p) => r[p].pathname !== g.pathname || r[p].route.path?.endsWith("*") && r[p].params["*"] !== g.params["*"];
    return m === "assets" ? a.filter( (g, p) => f(g, p) || y(g, p)) : m === "data" ? a.filter( (g, p) => {
        let b = c.routes[g.route.id];
        if (!b || !b.hasLoader)
            return !1;
        if (f(g, p) || y(g, p))
            return !0;
        if (g.route.shouldRevalidate) {
            let x = g.route.shouldRevalidate({
                currentUrl: new URL(u.pathname + u.search + u.hash,window.origin),
                currentParams: r[0]?.params || {},
                nextUrl: new URL(l,window.origin),
                nextParams: g.params,
                defaultShouldRevalidate: !0
            });
            if (typeof x == "boolean")
                return x
        }
        return !0
    }
    ) : []
}
function t0(l, a, {includeHydrateFallback: r}={}) {
    return n0(l.map(c => {
        let u = a.routes[c.route.id];
        if (!u)
            return [];
        let m = [u.module];
        return u.clientActionModule && (m = m.concat(u.clientActionModule)),
        u.clientLoaderModule && (m = m.concat(u.clientLoaderModule)),
        r && u.hydrateFallbackModule && (m = m.concat(u.hydrateFallbackModule)),
        u.imports && (m = m.concat(u.imports)),
        m
    }
    ).flat(1))
}
function n0(l) {
    return [...new Set(l)]
}
function a0(l) {
    let a = {}
      , r = Object.keys(l).sort();
    for (let c of r)
        a[c] = l[c];
    return a
}
function l0(l, a) {
    let r = new Set;
    return new Set(a),
    l.reduce( (c, u) => {
        let m = JSON.stringify(a0(u));
        return r.has(m) || (r.add(m),
        c.push({
            key: m,
            link: u
        })),
        c
    }
    , [])
}
function xy() {
    let l = C.useContext(co);
    return Wu(l, "You must render this element inside a <DataRouterContext.Provider> element"),
    l
}
function i0() {
    let l = C.useContext(Sr);
    return Wu(l, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    l
}
var Fu = C.createContext(void 0);
Fu.displayName = "FrameworkContext";
function Sy() {
    let l = C.useContext(Fu);
    return Wu(l, "You must render this element inside a <HydratedRouter> element"),
    l
}
function o0(l, a) {
    let r = C.useContext(Fu)
      , [c,u] = C.useState(!1)
      , [m,f] = C.useState(!1)
      , {onFocus: y, onBlur: g, onMouseEnter: p, onMouseLeave: b, onTouchStart: x} = a
      , T = C.useRef(null);
    C.useEffect( () => {
        if (l === "render" && f(!0),
        l === "viewport") {
            let M = Y => {
                Y.forEach($ => {
                    f($.isIntersecting)
                }
                )
            }
              , w = new IntersectionObserver(M,{
                threshold: .5
            });
            return T.current && w.observe(T.current),
            () => {
                w.disconnect()
            }
        }
    }
    , [l]),
    C.useEffect( () => {
        if (c) {
            let M = setTimeout( () => {
                f(!0)
            }
            , 100);
            return () => {
                clearTimeout(M)
            }
        }
    }
    , [c]);
    let O = () => {
        u(!0)
    }
      , k = () => {
        u(!1),
        f(!1)
    }
    ;
    return r ? l !== "intent" ? [m, T, {}] : [m, T, {
        onFocus: Po(y, O),
        onBlur: Po(g, k),
        onMouseEnter: Po(p, O),
        onMouseLeave: Po(b, k),
        onTouchStart: Po(x, O)
    }] : [!1, T, {}]
}
function Po(l, a) {
    return r => {
        l && l(r),
        r.defaultPrevented || a(r)
    }
}
function s0({page: l, ...a}) {
    let {router: r} = xy()
      , c = C.useMemo( () => sy(r.routes, l, r.basename), [r.routes, l, r.basename]);
    return c ? C.createElement(c0, {
        page: l,
        matches: c,
        ...a
    }) : null
}
function r0(l) {
    let {manifest: a, routeModules: r} = Sy()
      , [c,u] = C.useState([]);
    return C.useEffect( () => {
        let m = !1;
        return e0(l, a, r).then(f => {
            m || u(f)
        }
        ),
        () => {
            m = !0
        }
    }
    , [l, a, r]),
    c
}
function c0({page: l, matches: a, ...r}) {
    let c = Ha()
      , {manifest: u, routeModules: m} = Sy()
      , {basename: f} = xy()
      , {loaderData: y, matches: g} = i0()
      , p = C.useMemo( () => Zh(l, a, g, u, c, "data"), [l, a, g, u, c])
      , b = C.useMemo( () => Zh(l, a, g, u, c, "assets"), [l, a, g, u, c])
      , x = C.useMemo( () => {
        if (l === c.pathname + c.search + c.hash)
            return [];
        let k = new Set
          , M = !1;
        if (a.forEach(Y => {
            let $ = u.routes[Y.route.id];
            !$ || !$.hasLoader || (!p.some(P => P.route.id === Y.route.id) && Y.route.id in y && m[Y.route.id]?.shouldRevalidate || $.hasClientLoader ? M = !0 : k.add(Y.route.id))
        }
        ),
        k.size === 0)
            return [];
        let w = Wg(l, f, "data");
        return M && k.size > 0 && w.searchParams.set("_routes", a.filter(Y => k.has(Y.route.id)).map(Y => Y.route.id).join(",")),
        [w.pathname + w.search]
    }
    , [f, y, c, u, p, a, l, m])
      , T = C.useMemo( () => t0(b, u), [b, u])
      , O = r0(b);
    return C.createElement(C.Fragment, null, x.map(k => C.createElement("link", {
        key: k,
        rel: "prefetch",
        as: "fetch",
        href: k,
        ...r
    })), T.map(k => C.createElement("link", {
        key: k,
        rel: "modulepreload",
        href: k,
        ...r
    })), O.map( ({key: k, link: M}) => C.createElement("link", {
        key: k,
        nonce: r.nonce,
        ...M
    })))
}
function u0(...l) {
    return a => {
        l.forEach(r => {
            typeof r == "function" ? r(a) : r != null && (r.current = a)
        }
        )
    }
}
var f0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    f0 && (window.__reactRouterVersion = "7.11.0")
} catch {}
function d0({basename: l, children: a, unstable_useTransitions: r, window: c}) {
    let u = C.useRef();
    u.current == null && (u.current = Xp({
        window: c,
        v5Compat: !0
    }));
    let m = u.current
      , [f,y] = C.useState({
        action: m.action,
        location: m.location
    })
      , g = C.useCallback(p => {
        r === !1 ? y(p) : C.startTransition( () => y(p))
    }
    , [r]);
    return C.useLayoutEffect( () => m.listen(g), [m, g]),
    C.createElement(Hg, {
        basename: l,
        children: a,
        location: f.location,
        navigationType: f.action,
        navigator: m,
        unstable_useTransitions: r
    })
}
var Cy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Pu = C.forwardRef(function({onClick: a, discover: r="render", prefetch: c="none", relative: u, reloadDocument: m, replace: f, state: y, target: g, to: p, preventScrollReset: b, viewTransition: x, unstable_defaultShouldRevalidate: T, ...O}, k) {
    let {basename: M, unstable_useTransitions: w} = C.useContext(Yn)
      , Y = typeof p == "string" && Cy.test(p)
      , $ = dy(p, M);
    p = $.to;
    let P = Ng(p, {
        relative: u
    })
      , [X,J,Z] = o0(c, O)
      , z = y0(p, {
        replace: f,
        state: y,
        target: g,
        preventScrollReset: b,
        relative: u,
        viewTransition: x,
        unstable_defaultShouldRevalidate: T,
        unstable_useTransitions: w
    });
    function U(Q) {
        a && a(Q),
        Q.defaultPrevented || z(Q)
    }
    let G = C.createElement("a", {
        ...O,
        ...Z,
        href: $.absoluteURL || P,
        onClick: $.isExternal || m ? a : U,
        ref: u0(k, J),
        target: g,
        "data-discover": !Y && r === "render" ? "true" : void 0
    });
    return X && !Y ? C.createElement(C.Fragment, null, G, C.createElement(s0, {
        page: P
    })) : G
});
Pu.displayName = "Link";
var Gu = C.forwardRef(function({"aria-current": a="page", caseSensitive: r=!1, className: c="", end: u=!1, style: m, to: f, viewTransition: y, children: g, ...p}, b) {
    let x = is(f, {
        relative: p.relative
    })
      , T = Ha()
      , O = C.useContext(Sr)
      , {navigator: k, basename: M} = C.useContext(Yn)
      , w = O != null && b0(x) && y === !0
      , Y = k.encodeLocation ? k.encodeLocation(x).pathname : x.pathname
      , $ = T.pathname
      , P = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
    r || ($ = $.toLowerCase(),
    P = P ? P.toLowerCase() : null,
    Y = Y.toLowerCase()),
    P && M && (P = yl(P, M) || P);
    const X = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
    let J = $ === Y || !u && $.startsWith(Y) && $.charAt(X) === "/", Z = P != null && (P === Y || !u && P.startsWith(Y) && P.charAt(Y.length) === "/"), z = {
        isActive: J,
        isPending: Z,
        isTransitioning: w
    }, U = J ? a : void 0, G;
    typeof c == "function" ? G = c(z) : G = [c, J ? "active" : null, Z ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
    let Q = typeof m == "function" ? m(z) : m;
    return C.createElement(Pu, {
        ...p,
        "aria-current": U,
        className: G,
        ref: b,
        style: Q,
        to: f,
        viewTransition: y
    }, typeof g == "function" ? g(z) : g)
});
Gu.displayName = "NavLink";
var m0 = C.forwardRef( ({discover: l="render", fetcherKey: a, navigate: r, reloadDocument: c, replace: u, state: m, method: f=mr, action: y, onSubmit: g, relative: p, preventScrollReset: b, viewTransition: x, unstable_defaultShouldRevalidate: T, ...O}, k) => {
    let {unstable_useTransitions: M} = C.useContext(Yn)
      , w = v0()
      , Y = _0(y, {
        relative: p
    })
      , $ = f.toLowerCase() === "get" ? "get" : "post"
      , P = typeof y == "string" && Cy.test(y)
      , X = J => {
        if (g && g(J),
        J.defaultPrevented)
            return;
        J.preventDefault();
        let Z = J.nativeEvent.submitter
          , z = Z?.getAttribute("formmethod") || f
          , U = () => w(Z || J.currentTarget, {
            fetcherKey: a,
            method: z,
            navigate: r,
            replace: u,
            state: m,
            relative: p,
            preventScrollReset: b,
            viewTransition: x,
            unstable_defaultShouldRevalidate: T
        });
        M && r !== !1 ? C.startTransition( () => U()) : U()
    }
    ;
    return C.createElement("form", {
        ref: k,
        method: $,
        action: Y,
        onSubmit: c ? g : X,
        ...O,
        "data-discover": !P && l === "render" ? "true" : void 0
    })
}
);
m0.displayName = "Form";
function h0(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Ty(l) {
    let a = C.useContext(co);
    return yt(a, h0(l)),
    a
}
function y0(l, {target: a, replace: r, state: c, preventScrollReset: u, relative: m, viewTransition: f, unstable_defaultShouldRevalidate: y, unstable_useTransitions: g}={}) {
    let p = Zu()
      , b = Ha()
      , x = is(l, {
        relative: m
    });
    return C.useCallback(T => {
        if (Kg(T, a)) {
            T.preventDefault();
            let O = r !== void 0 ? r : ns(b) === ns(x)
              , k = () => p(l, {
                replace: O,
                state: c,
                preventScrollReset: u,
                relative: m,
                viewTransition: f,
                unstable_defaultShouldRevalidate: y
            });
            g ? C.startTransition( () => k()) : k()
        }
    }
    , [b, p, x, r, c, a, l, u, m, f, y, g])
}
var p0 = 0
  , g0 = () => `__${String(++p0)}__`;
function v0() {
    let {router: l} = Ty("useSubmit")
      , {basename: a} = C.useContext(Yn)
      , r = Og()
      , c = l.fetch
      , u = l.navigate;
    return C.useCallback(async (m, f={}) => {
        let {action: y, method: g, encType: p, formData: b, body: x} = Ig(m, a);
        if (f.navigate === !1) {
            let T = f.fetcherKey || g0();
            await c(T, r, f.action || y, {
                unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                preventScrollReset: f.preventScrollReset,
                formData: b,
                body: x,
                formMethod: f.method || g,
                formEncType: f.encType || p,
                flushSync: f.flushSync
            })
        } else
            await u(f.action || y, {
                unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                preventScrollReset: f.preventScrollReset,
                formData: b,
                body: x,
                formMethod: f.method || g,
                formEncType: f.encType || p,
                replace: f.replace,
                state: f.state,
                fromRouteId: r,
                flushSync: f.flushSync,
                viewTransition: f.viewTransition
            })
    }
    , [c, u, a, r])
}
function _0(l, {relative: a}={}) {
    let {basename: r} = C.useContext(Yn)
      , c = C.useContext(Ga);
    yt(c, "useFormAction must be used inside a RouteContext");
    let[u] = c.matches.slice(-1)
      , m = {
        ...is(l || ".", {
            relative: a
        })
    }
      , f = Ha();
    if (l == null) {
        m.search = f.search;
        let y = new URLSearchParams(m.search)
          , g = y.getAll("index");
        if (g.some(b => b === "")) {
            y.delete("index"),
            g.filter(x => x).forEach(x => y.append("index", x));
            let b = y.toString();
            m.search = b ? `?${b}` : ""
        }
    }
    return (!l || l === ".") && u.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (m.pathname = m.pathname === "/" ? r : hl([r, m.pathname])),
    ns(m)
}
function b0(l, {relative: a}={}) {
    let r = C.useContext(hy);
    yt(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: c} = Ty("useViewTransitionState")
      , u = is(l, {
        relative: a
    });
    if (!r.isTransitioning)
        return !1;
    let m = yl(r.currentLocation.pathname, c) || r.currentLocation.pathname
      , f = yl(r.nextLocation.pathname, c) || r.nextLocation.pathname;
    return pr(u.pathname, f) != null || pr(u.pathname, m) != null
}
var ef = oy();
const x0 = {
    tier1: "I",
    tier2: "II",
    tier3: "III",
    tier4: "IV",
    tier5: "V",
    tier6: "VI",
    tier7: "VII"
}
  , S0 = {
    tier1: "Tier 1",
    tier2: "Tier 2",
    tier3: "Tier 3",
    tier4: "Tier 4",
    tier5: "Tier 5",
    tier6: "Tier 6",
    tier7: "Tier 7"
}
  , Dt = "/atziri-temple/icons"
  , Fe = {
    empty: {
        id: "empty",
        name: "Empty",
        shortName: "",
        color: "#1a1a1a",
        tooltip: "",
        variants: {
            tier1: {
                effects: []
            }
        },
        upgrades: {}
    },
    path: {
        id: "path",
        name: "Path",
        shortName: "P",
        color: "#3a3a3a",
        tooltip: "A simple path tile connecting rooms.",
        variants: {
            tier1: {
                effects: []
            }
        },
        upgrades: {}
    },
    guardhouse: {
        id: "guardhouse",
        name: "Garrison",
        shortName: "G",
        color: "#f28c8c",
        tooltip: "Increases number of Monster Packs. Transforms into Transcendent Barrack (near Synth Lab) or Legion Barrack (near Spymaster).",
        icon: `${Dt}/IconGarrison.webp`,
        transformsTo: ["transcendent_barrack", "legion_barrack"],
        variants: {
            tier1: {
                effects: ["10% increased number of Monster Packs"]
            },
            tier2: {
                effects: ["15% increased number of Monster Packs"]
            },
            tier3: {
                effects: ["20% increased number of Monster Packs"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["commanders_chamber", "armoury"],
                count: 1
            },
            tier3: {
                type: "adjacent",
                rooms: ["commanders_chamber", "armoury"],
                requireAll: !0
            }
        }
    },
    transcendent_barrack: {
        id: "transcendent_barrack",
        name: "Transcendent Barrack",
        shortName: "TB",
        color: "#9b59b6",
        tooltip: "Increases Magic Monsters. Created when Garrison is adjacent to Synthflesh Lab. Upgraded by Synthflesh Lab and Generator.",
        icon: `${Dt}/IconTranscendentBarracks.webp`,
        transformsFrom: "guardhouse",
        variants: {
            tier1: {
                effects: ["20% increased number of Magic Monsters"]
            },
            tier2: {
                effects: ["40% increased number of Magic Monsters"]
            },
            tier3: {
                effects: ["60% increased number of Magic Monsters"]
            }
        },
        upgrades: {},
        upgradeInfo: "Улучшено за счет Плотосинтеза и питания от Генератора."
    },
    legion_barrack: {
        id: "legion_barrack",
        name: "Legion Barrack",
        shortName: "LB",
        color: "#c0392b",
        tooltip: "Increases Rare Monsters. Created when Garrison is adjacent to Spymaster. Upgraded by Armoury and Spymaster.",
        icon: `${Dt}/IconViperLegionBarracks.webp`,
        transformsFrom: "guardhouse",
        variants: {
            tier1: {
                effects: ["20% increased number of Rare Monsters"]
            },
            tier2: {
                effects: ["40% increased number of Rare Monsters"]
            },
            tier3: {
                effects: ["60% increased number of Rare Monsters"]
            }
        },
        upgrades: {},
        upgradeInfo: "Улучшено за счет Оружейной и Соглядатая."
    },
    commanders_chamber: {
        id: "commanders_chamber",
        name: "Commander",
        shortName: "C",
        color: "#f5a36f",
        tooltip: "Increases Rare monster effectiveness. Cannot connect to Legion Barrack.",
        icon: `${Dt}/IconCommander.webp`,
        variants: {
            tier1: {
                effects: ["15% increased Rare Monster effectiveness"]
            },
            tier2: {
                effects: ["30% increased Rare Monster effectiveness"]
            },
            tier3: {
                effects: ["60% increased Rare Monster effectiveness"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["guardhouse", "transcendent_barrack"],
                count: 2
            },
            tier3: {
                type: "adjacent",
                rooms: ["guardhouse", "transcendent_barrack"],
                count: 3
            }
        }
    },
    armoury: {
        id: "armoury",
        name: "Armoury",
        shortName: "A",
        color: "#f5d36f",
        tooltip: "Increases Humanoid monster effectiveness",
        icon: `${Dt}/IconArmoury.webp`,
        variants: {
            tier1: {
                effects: ["15% increased Humanoid Monster effectiveness"]
            },
            tier2: {
                effects: ["30% increased Humanoid Monster effectiveness"]
            },
            tier3: {
                effects: ["60% increased Humanoid Monster effectiveness"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["bronzeworks", "chamber_of_souls"],
                count: 1
            },
            tier3: {
                type: "adjacent",
                rooms: ["bronzeworks", "chamber_of_souls"],
                requireAll: !0
            }
        }
    },
    spymasters_study: {
        id: "spymasters_study",
        name: "Spymaster",
        shortName: "Spy",
        color: "#6fcf6f",
        tooltip: "Increases Temple Mod effects. Upgrades by assassinating other Spymasters. Converts adjacent Garrison to Legion Barrack.",
        icon: `${Dt}/IconViperSpymaster.webp`,
        variants: {
            tier1: {
                effects: ["7.5% increased effect of Temple Mods from Generator / Synthflesh / Surgeon / Transcendent / Alchemy Labs"]
            },
            tier2: {
                effects: ["15% increased effect of Temple Mods from Generator / Synthflesh / Surgeon / Transcendent / Alchemy Labs"]
            },
            tier3: {
                effects: ["30% increased effect of Temple Mods from Gen/Synthflesh/Surgeon/Transcendent/Alchemy Labs"]
            }
        },
        upgrades: {},
        upgradeInfo: "Улучшения достигаются путем устранения других Соглядатая. Также используйте Медальон для повышения уровня."
    },
    bronzeworks: {
        id: "bronzeworks",
        name: "Smithy",
        shortName: "S",
        color: "#fc8c6f",
        tooltip: "Increases chest item rarity. Upgraded by Golem Works. Upgrades Armoury. Powered by Generator to gain +1 level.",
        icon: `${Dt}/IconSmithy.webp`,
        variants: {
            tier1: {
                effects: ["15% increased Chest Item Rarity"]
            },
            tier2: {
                effects: ["30% increased Chest Item Rarity"]
            },
            tier3: {
                effects: ["60% increased Chest Item Rarity", "Vaal Infuser"]
            }
        },
        upgrades: {},
        upgradeInfo: "Upgraded by being adjacent to Golem Works."
    },
    dynamo: {
        id: "dynamo",
        name: "Generator",
        shortName: "D",
        color: "#8fcaf2",
        tooltip: "Powers Smithy, Golem Works, Synthflesh, Transcendent Barracks (giving them +1 level). Only connects to Thaumaturge and Sacrificial Chamber. Must be connected to a road. Powers rooms within 3-5 tiles based on tier.",
        icon: `${Dt}/IconGenerator.webp`,
        providesEnergy: !0,
        energyRangeByTier: {
            tier1: 3,
            tier2: 4,
            tier3: 5
        },
        variants: {
            tier1: {
                effects: ["15% increased Construct Monster effectiveness", "Powers rooms within 3 tiles (+1 level to Smithy / Golem Works / Synthflesh / Transcendent Barracks)"]
            },
            tier2: {
                effects: ["30% increased Construct Monster effectiveness", "Powers rooms within 4 tiles (+1 level to Smithy / Golem Works / Synthflesh / Transcendent Barracks)"]
            },
            tier3: {
                effects: ["60% increased Construct Monster effectiveness", "Powers rooms within 5 tiles (+1 level to Smithy / Golem Works / Synthflesh / Transcendent Barracks)", "Adds Corrupted Abomination"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["thaumaturges_laboratory", "altar_of_sacrifice"],
                count: 1
            },
            tier3: {
                type: "complex",
                requiredAdjacent: ["thaumaturges_laboratory", "altar_of_sacrifice"]
            }
        }
    },
    workshop: {
        id: "workshop",
        name: "Golem Works",
        shortName: "GW",
        color: "#8cf2cf",
        tooltip: "Increases effect of Temple Mods from tech rooms. Upgrades Smithy. Powered by Generator to gain +1 level per generator (stacks up to 2 generators).",
        icon: `${Dt}/IconGolemWorks.webp`,
        variants: {
            tier1: {
                effects: ["7.5% increased effect of Temple Mods from Garrison / Commander / Armoury / Smithy / Legion Barrack"]
            },
            tier2: {
                effects: ["15% increased effect of Temple Mods from Garrison / Commander / Armoury / Smithy / Legion Barrack"]
            },
            tier3: {
                effects: ["30% increased effect of Temple Mods from Garrison / Commander / Armoury / Smithy / Legion Barrack", "Adds High Priest"]
            }
        },
        upgrades: {},
        upgradeInfo: "Без смежных улучшений. Получает +1 уровень за каждый генератор (суммируется до 2)."
    },
    synthflesh_lab: {
        id: "synthflesh_lab",
        name: "Synthflesh Lab",
        shortName: "SL",
        color: "#cf6fcf",
        tooltip: "Increases experience gain. Converts adjacent Garrison to Transcendent Barrack. Powered by Generator to gain +1 level.",
        icon: `${Dt}/IconSynthflesh.webp`,
        variants: {
            tier1: {
                effects: ["10% increased Experience gain"]
            },
            tier2: {
                effects: ["20% increased Experience gain"]
            },
            tier3: {
                effects: ["40% increased Experience gain"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["surgeons_ward"],
                count: 1
            },
            tier3: {
                type: "adjacent",
                rooms: ["surgeons_ward"],
                count: 2
            }
        }
    },
    surgeons_ward: {
        id: "surgeons_ward",
        name: "Flesh Surgeon",
        shortName: "FS",
        color: "#cf8c6f",
        tooltip: "Increases Unique monster effectiveness",
        icon: `${Dt}/IconFleshSurgeon.webp`,
        variants: {
            tier1: {
                effects: ["10% increased Unique Monster effectiveness"]
            },
            tier2: {
                effects: ["20% increased Unique Monster effectiveness"]
            },
            tier3: {
                effects: ["40% increased Unique Monster effectiveness", "Limb Modification"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["synthflesh_lab"],
                count: 1
            },
            tier3: {
                type: "adjacent",
                rooms: ["synthflesh_lab"],
                count: 1,
                minTier: 2
            }
        }
    },
    chamber_of_souls: {
        id: "chamber_of_souls",
        name: "Alchemy Lab",
        shortName: "AL",
        color: "#f2cf6f",
        tooltip: "Increases item rarity from monsters",
        icon: `${Dt}/IconAlchemyLab.webp`,
        variants: {
            tier1: {
                effects: ["15% increased Item Rarity from Monsters"]
            },
            tier2: {
                effects: ["30% increased Item Rarity from Monsters", "25% increased Gold"]
            },
            tier3: {
                effects: ["60% increased Item Rarity from Monsters", "50% increased Gold", "Core Destabiliser"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["thaumaturges_laboratory"],
                count: 1
            },
            tier3: {
                type: "adjacent",
                rooms: ["thaumaturges_laboratory"],
                count: 2
            }
        }
    },
    thaumaturges_laboratory: {
        id: "thaumaturges_laboratory",
        name: "Thaumaturge's",
        shortName: "TH",
        color: "#6ff2cf",
        tooltip: "Increases effect of Temple Mods from magic rooms",
        icon: `${Dt}/IconThaumaturge.webp`,
        variants: {
            tier1: {
                effects: ["7.5% increased effect of Temple Mods from Corruption / Vault / Sacrifice"]
            },
            tier2: {
                effects: ["15% increased effect of Temple Mods from Corruption / Vault / Sacrifice"]
            },
            tier3: {
                effects: ["30% increased effect of Temple Mods from Corruption / Vault / Sacrifice", "Adds Quadrilla Sergeant", "Crystallised Corruption"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["altar_of_sacrifice"],
                count: 1
            },
            tier3: {
                type: "adjacent",
                rooms: ["altar_of_sacrifice"],
                count: 2
            }
        }
    },
    crimson_hall: {
        id: "crimson_hall",
        name: "Corruption Chamber",
        shortName: "CC",
        color: "#f26fcf",
        tooltip: "Rare Monsters have chance for additional Modifiers",
        icon: `${Dt}/IconCorruption.webp`,
        variants: {
            tier1: {
                effects: ["15% Шанс получить +1 свойство для редких монстров"]
            },
            tier2: {
                effects: ["30% Шанс получить +1 свойство для редких монстров"]
            },
            tier3: {
                effects: ["60% Шанс получить +1 свойство для редких монстров", "Adds Royal Sentinel", "Architect's Orb"]
            }
        },
        upgrades: {
            tier2: {
                type: "adjacent",
                rooms: ["altar_of_sacrifice", "thaumaturges_laboratory"],
                count: 1
            },
            tier3: {
                type: "adjacent",
                rooms: ["altar_of_sacrifice", "thaumaturges_laboratory"],
                count: 2
            }
        }
    },
    altar_of_sacrifice: {
        id: "altar_of_sacrifice",
        name: "Sacrificial Chamber",
        shortName: "SC",
        color: "#8b0000",
        tooltip: "Increases Rare Chests. Upgrades by sacrificing dead-end rooms or paths. Connects to Smithy/Alchemy Lab but NOT upgraded by them.",
        icon: `${Dt}/IconSacrificialChamber.webp`,
        variants: {
            tier1: {
                name: "Altar of Sacrifice",
                effects: ["15% increased Rare Chests", "Contains Unique Item", "Grants Sacrifice Room card"]
            },
            tier2: {
                name: "Hall of Offerings",
                effects: ["30% increased Rare Chests", "Contains Unique Item", "High chance for Sacrifice Room card"]
            },
            tier3: {
                name: "Apex of Oblation",
                effects: ["60% increased Rare Chests", "Contains Unchained Beast", "Vaal Cultivation Orb", "Boss: Huitzil, Royal Blood Priest"]
            }
        },
        upgrades: {},
        upgradeInfo: "Улучшения достигаются путем жертвования тупиковой комнатой или дорожки. Используйте инструмент «Жертвоприношение», когда он появится."
    },
    reward_room: {
        id: "reward_room",
        name: "Reward Room",
        shortName: "R",
        color: "#ffffff",
        tooltip: "Special reward room (Currency, Gems, etc). Can be placed anywhere.",
        icon: `${Dt}/IconRewardCurrency.webp`,
        variants: {
            tier1: {
                effects: ["Contains special rewards"]
            }
        },
        upgrades: {}
    },
    sealed_vault: {
        id: "sealed_vault",
        name: "Sealed Vault",
        shortName: "SV",
        color: "#7a6c3a",
        tooltip: "Increases item rarity by 25%",
        icon: `${Dt}/IconVault.webp`,
        variants: {
            tier1: {
                effects: ["25% increased Rarity of Items"]
            }
        },
        upgrades: {}
    },
    architect: {
        id: "architect",
        name: "Architect",
        shortName: "AR",
        color: "#e74c3c",
        tooltip: "The Architect. Can connect to any room.",
        icon: `${Dt}/IconArchitect.webp`,
        variants: {
            tier1: {
                effects: ["Boss encounter"]
            }
        },
        upgrades: {}
    },
    sacrifice_room: {
        id: "sacrifice_room",
        name: "Sacrificed Room",
        shortName: "SR",
        color: "#2d1f1f",
        tooltip: "A room or path that has been sacrificed to upgrade the Sacrificial Chamber. Only dead-end rooms and paths can be sacrificed without breaking connectivity. The sacrificed cell is removed from the temple.",
        icon: `${Dt}/IconSacrificeRoom.webp`,
        variants: {
            tier1: {
                effects: ["Room has been sacrificed (removed from temple)"]
            }
        },
        upgrades: {}
    }
}
  , C0 = {
    empty: "_",
    path: "P",
    guardhouse: "G",
    transcendent_barrack: "TB",
    legion_barrack: "LB",
    commanders_chamber: "C",
    armoury: "A",
    bronzeworks: "B",
    dynamo: "D",
    spymasters_study: "S",
    synthflesh_lab: "Y",
    surgeons_ward: "F",
    workshop: "W",
    chamber_of_souls: "L",
    thaumaturges_laboratory: "T",
    crimson_hall: "R",
    altar_of_sacrifice: "Z",
    reward_room: "J",
    sealed_vault: "V",
    architect: "X",
    sacrifice_room: "SR"
}
  , T0 = Object.fromEntries(Object.entries(C0).map( ([l,a]) => [a, l]))
  , tf = ["path", "guardhouse", "commanders_chamber", "armoury", "spymasters_study", "bronzeworks", "dynamo", "workshop", "synthflesh_lab", "surgeons_ward", "chamber_of_souls", "thaumaturges_laboratory", "crimson_hall", "altar_of_sacrifice", "reward_room", "sealed_vault", "architect"]
  , Ny = ["workshop", "bronzeworks", "synthflesh_lab", "transcendent_barrack"]
  , N0 = ["guardhouse", "transcendent_barrack", "legion_barrack"];
function Ua(l, a) {
    return Fe[l]?.icon
}
function Tr(l) {
    return N0.includes(l)
}
const Jh = {
    path: ["path", "guardhouse", "legion_barrack", "transcendent_barrack", "commanders_chamber", "armoury", "bronzeworks", "dynamo", "spymasters_study", "synthflesh_lab", "surgeons_ward", "workshop", "chamber_of_souls", "thaumaturges_laboratory", "crimson_hall", "altar_of_sacrifice", "sealed_vault"],
    guardhouse: ["path", "commanders_chamber", "armoury", "spymasters_study", "synthflesh_lab"],
    legion_barrack: ["path", "commanders_chamber", "armoury", "spymasters_study"],
    transcendent_barrack: ["path", "commanders_chamber", "armoury", "synthflesh_lab"],
    commanders_chamber: ["path", "guardhouse", "transcendent_barrack", "legion_barrack"],
    spymasters_study: ["path", "guardhouse", "legion_barrack"],
    armoury: ["path", "guardhouse", "legion_barrack", "transcendent_barrack", "bronzeworks", "chamber_of_souls"],
    bronzeworks: ["path", "armoury", "workshop"],
    workshop: ["path", "bronzeworks"],
    dynamo: ["path", "thaumaturges_laboratory", "altar_of_sacrifice"],
    synthflesh_lab: ["path", "guardhouse", "transcendent_barrack", "surgeons_ward"],
    surgeons_ward: ["path", "synthflesh_lab"],
    chamber_of_souls: ["path", "armoury", "thaumaturges_laboratory"],
    thaumaturges_laboratory: ["path", "chamber_of_souls", "altar_of_sacrifice", "crimson_hall", "dynamo"],
    crimson_hall: ["path", "thaumaturges_laboratory", "altar_of_sacrifice"],
    altar_of_sacrifice: ["path", "thaumaturges_laboratory", "crimson_hall", "dynamo"],
    sealed_vault: ["path"]
};
function Gn(l, a, r, c) {
    if (l === "empty" || a === "empty")
        return !1;
    if (l === "path" || a === "path" || r && c && r.x === 4 && r.y === 0 && l === "architect" && c.x === 4 && c.y === 1 || r && c && c.x === 4 && c.y === 0 && a === "architect" && r.x === 4 && r.y === 1 || l === "architect" || a === "architect")
        return !0;
    const u = Jh[l]?.includes(a) ?? !1
      , m = Jh[a]?.includes(l) ?? !1;
    return u || m
}
function jy(l) {
    const a = _n(l);
    Ni(a, f => {
        f.reachable = !1
    }
    );
    let r = a[ft.y]?.[ft.x]
      , c = ft;
    if (!r || r.room === "empty") {
        let f = !1;
        for (let y = 0; y < a.length && !f; y++)
            for (let g = 0; g < a[y].length && !f; g++)
                a[y][g].room === "path" && (c = {
                    x: g,
                    y
                },
                r = a[y][g],
                f = !0);
        if (!f)
            return a
    }
    const u = [c]
      , m = new Set;
    for (a[c.y][c.x].reachable = !0,
    m.add(`${c.x},${c.y}`); u.length > 0; ) {
        const f = u.shift()
          , y = a[f.y][f.x]
          , g = Xe(a, f);
        for (const p of g) {
            const b = `${p.x},${p.y}`;
            m.has(b) || p.room !== "empty" && Gn(y.room, p.room, {
                x: y.x,
                y: y.y
            }, {
                x: p.x,
                y: p.y
            }) && (m.add(b),
            a[p.y][p.x].reachable = !0,
            u.push({
                x: p.x,
                y: p.y
            }))
        }
    }
    return a
}
function Nr(l, a) {
    const r = l[a.y]?.[a.x];
    if (!r || r.room === "empty")
        return !1;
    const c = _n(l);
    c[a.y][a.x] = {
        ...c[a.y][a.x],
        room: "empty"
    };
    const u = jy(c);
    for (let m = 0; m < l.length; m++)
        for (let f = 0; f < l[m].length; f++) {
            const y = l[m][f]
              , g = u[m][f];
            if (!(f === a.x && m === a.y) && y.room !== "architect" && y.room !== "empty" && y.reachable && !g.reachable)
                return !0
        }
    return !1
}
const os = 9
  , ft = {
    x: 4,
    y: 8
};
function j0(l, a) {
    return {
        x: l,
        y: a,
        room: "empty",
        tier: "tier1",
        manualTier: !1,
        reachable: !1,
        inEnergyRange: !1,
        hasPower: !0,
        hasMedallion: !1,
        isLocked: !1
    }
}
function jr(l=os) {
    const a = [];
    for (let r = 0; r < l; r++) {
        const c = [];
        for (let u = 0; u < l; u++)
            c.push(j0(u, r));
        a.push(c)
    }
    return a
}
function Ar(l, a) {
    if (!(a.y < 0 || a.y >= l.length) && !(a.x < 0 || a.x >= l[0].length))
        return l[a.y][a.x]
}
function Xe(l, a) {
    return [{
        x: 0,
        y: -1
    }, {
        x: 0,
        y: 1
    }, {
        x: -1,
        y: 0
    }, {
        x: 1,
        y: 0
    }].map(c => Ar(l, {
        x: a.x + c.x,
        y: a.y + c.y
    })).filter(c => c !== void 0)
}
function Un(l, a, r, c="tier1", u=!1) {
    return l.map( (m, f) => m.map( (y, g) => {
        if (g === a.x && f === a.y) {
            const p = y.room === r ? y.hasMedallion : !1;
            return {
                ...y,
                room: r,
                tier: c,
                manualTier: u,
                hasMedallion: p
            }
        }
        return y
    }
    ))
}
function _n(l) {
    return l.map(a => a.map(r => ({
        ...r
    })))
}
function Hn(l, a) {
    const r = [];
    for (const c of l)
        for (const u of c)
            u.room === a && r.push(u);
    return r
}
function A0(l) {
    const a = [];
    for (const r of l)
        for (const c of r)
            c.room !== "empty" && a.push(c);
    return a
}
function Ni(l, a) {
    for (let r = 0; r < l.length; r++)
        for (let c = 0; c < l[r].length; c++)
            a(l[r][c], c, r)
}
function E0(l) {
    const a = [];
    for (const r of l)
        for (const c of r) {
            if (c.room === "empty" || c.room === "architect" || !c.reachable)
                continue;
            const u = {
                x: c.x,
                y: c.y
            };
            Nr(l, u) || a.push(c)
        }
    return a
}
function R0(l) {
    if (l.length === 0)
        return l;
    const a = l[0].length
      , r = [];
    for (let c = 0; c < l.length; c++) {
        const u = [];
        for (let m = 0; m < a; m++) {
            const f = a - 1 - m
              , y = l[c][f];
            u.push({
                ...y,
                x: m,
                y: c
            })
        }
        r.push(u)
    }
    return r
}
function M0(l) {
    return l.map(a => a.map(r => (r.room === "empty" || r.room === "path") && r.hasMedallion ? {
        ...r,
        hasMedallion: !1
    } : r))
}
const gr = ["guardhouse", "transcendent_barrack", "legion_barrack"];
function w0(l) {
    return gr.some(a => l.includes(a))
}
function Ih(l, a, r, c, u=null) {
    const m = new Set
      , f = [{
        pos: a,
        from: u,
        hasGarrison: !1
    }]
      , y = `${c.x},${c.y}`;
    for (; f.length > 0; ) {
        const {pos: g, from: p, hasGarrison: b} = f.pop()
          , x = `${g.x},${g.y}`;
        if (x === y || m.has(x))
            continue;
        const T = Ar(l, g);
        if (!T || T.room === "empty" || !T.reachable)
            continue;
        m.add(x);
        const O = b || gr.includes(T.room);
        if (T.room === r)
            return O;
        const k = Xe(l, g).filter(M => {
            const w = `${M.x},${M.y}`;
            return !(w === y || m.has(w) || M.room === "empty" || !M.reachable || p && M.x === p.x && M.y === p.y)
        }
        );
        if (!(k.length >= 2))
            for (const M of k)
                f.push({
                    pos: {
                        x: M.x,
                        y: M.y
                    },
                    from: g,
                    hasGarrison: O
                })
    }
    return !1
}
function es(l, a, r, c=!1, u=!1) {
    const m = Ar(l, a);
    if (!m)
        return {
            valid: !1,
            reason: "Position out of bounds"
        };
    if (c)
        return {
            valid: !0
        };
    if (r === "reward_room")
        return {
            valid: !0
        };
    if (r === "empty")
        return z0(l, a);
    if (r === "architect") {
        const g = Hn(l, "architect");
        if (g.length > 0) {
            const p = g[0];
            if (p.x === a.x && p.y === a.y)
                return {
                    valid: !1,
                    reason: "Architect is already here"
                }
        }
        return {
            valid: !0
        }
    }
    if (m.room !== "empty")
        return {
            valid: !1,
            reason: "Cell is already occupied"
        };
    const f = Xe(l, a)
      , y = f.map(g => g.room);
    switch (r) {
    case "path":
        return y.includes("path") ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Path must be adjacent to another Path"
        };
    case "guardhouse":
        const g = ["path", "commanders_chamber", "armoury", "synthflesh_lab", "spymasters_study"]
          , p = y.includes("path") || y.includes("commanders_chamber") || y.includes("armoury") || y.includes("spymasters_study");
        if (!u && y.includes("synthflesh_lab") && !p) {
            const E = f.find(B => B.room === "synthflesh_lab");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => (_.room === "guardhouse" || _.room === "transcendent_barrack") && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Synthflesh Lab already has a Garrison adjacent (Garrison → Synthflesh → Garrison not allowed)"
                }
        }
        return g.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Garrison must be adjacent to Path, Commander, Armoury, Synth Lab, or Spymaster"
        };
    case "commanders_chamber":
        const b = u ? ["path", "guardhouse", "transcendent_barrack", "thaumaturges_laboratory"] : ["path", "guardhouse", "transcendent_barrack"]
          , x = y.includes("path") || y.includes("guardhouse") || y.includes("transcendent_barrack");
        if (u && y.includes("thaumaturges_laboratory") && !x) {
            const E = f.find(B => B.room === "thaumaturges_laboratory");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => _.room === "commanders_chamber" && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Thaumaturge already has a Commander adjacent (Commander → Thaumaturge → Corruption chaining only)"
                }
        }
        return b.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Commander must be adjacent to Path, Garrison, or Transcendent Barrack (not Legion Barrack)"
        };
    case "transcendent_barrack":
        const T = ["path", "commanders_chamber", "armoury", "synthflesh_lab"]
          , O = y.includes("path") || y.includes("commanders_chamber") || y.includes("armoury");
        if (!u && y.includes("synthflesh_lab") && !O) {
            const E = f.find(B => B.room === "synthflesh_lab");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => (_.room === "guardhouse" || _.room === "transcendent_barrack") && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Synthflesh Lab already has a Garrison adjacent (Transcendent Barrack → Synthflesh → Transcendent Barrack not allowed)"
                }
        }
        return T.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Transcendent Barrack must be adjacent to Path, Commander, Armoury, or Synth Lab"
        };
    case "legion_barrack":
        const k = ["path", "commanders_chamber", "armoury", "spymasters_study"]
          , M = y.includes("path") || y.includes("commanders_chamber") || y.includes("armoury");
        if (!u && y.includes("spymasters_study") && !M) {
            const E = f.find(B => B.room === "spymasters_study");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => _.room === "legion_barrack" && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Spymaster already has a Legion Barrack adjacent (Legion Barrack → Spymaster → Legion Barrack → Spymaster not allowed)"
                }
        }
        return k.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Legion Barrack must be adjacent to Path, Commander, Armoury, or Spymaster"
        };
    case "armoury":
        const w = ["path", "bronzeworks", "chamber_of_souls", ...gr]
          , Y = w0(y)
          , $ = y.includes("path") || y.includes("bronzeworks") || y.includes("chamber_of_souls");
        if (!u && Y && !$) {
            const E = f.filter(B => gr.includes(B.room));
            for (const B of E)
                if (Xe(l, {
                    x: B.x,
                    y: B.y
                }).find(A => A.room === "armoury" && (A.x !== a.x || A.y !== a.y)))
                    return {
                        valid: !1,
                        reason: "Cannot chain: Garrison already has an Armoury adjacent (Armoury → Garrison → Armoury not allowed)"
                    }
        }
        return w.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Armoury must be adjacent to Path, Smithy, Alchemy Lab, or Garrison"
        };
    case "bronzeworks":
        const P = ["path", "workshop", "armoury"]
          , X = y.includes("path") || y.includes("workshop")
          , J = f.find(E => E.room === "armoury");
        return J && !X && Xe(l, {
            x: J.x,
            y: J.y
        }).filter(le => le.room === "bronzeworks").length >= 1 ? {
            valid: !1,
            reason: "Cannot chain: Armoury already has a Smithy adjacent (Smithy → Armoury → Smithy not allowed)"
        } : P.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Smithy must be adjacent to Path, Golem Works, or Armoury"
        };
    case "dynamo":
        return y.includes("path") ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Generator must be connected to a Path"
        };
    case "spymasters_study":
        const Z = ["path", "guardhouse", "legion_barrack"];
        if (!u && y.includes("legion_barrack") && !y.includes("guardhouse")) {
            const E = f.find(B => B.room === "legion_barrack");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => _.room === "spymasters_study" && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Legion Barrack already has a Spymaster adjacent (Spymaster → Legion Barrack → Spymaster → Legion Barrack not allowed)"
                }
        }
        for (const E of f)
            if (!(E.room === "empty" || !E.reachable) && Z.includes(E.room) && Ih(l, {
                x: E.x,
                y: E.y
            }, "commanders_chamber", a, null))
                return {
                    valid: !1,
                    reason: "Cannot place: Spymaster would be in a linear chain with Commander through a Garrison (Garrison would become Legion Barrack, which Commander cannot connect to)"
                };
        return Z.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Spymaster must be adjacent to Path or any Garrison variant"
        };
    case "synthflesh_lab":
        const z = ["path", "surgeons_ward", "guardhouse", "transcendent_barrack"]
          , U = y.includes("path") || y.includes("surgeons_ward");
        if (!u && (y.includes("guardhouse") || y.includes("transcendent_barrack")) && !U) {
            const E = f.filter(B => B.room === "guardhouse" || B.room === "transcendent_barrack");
            for (const B of E)
                if (Xe(l, {
                    x: B.x,
                    y: B.y
                }).find(A => A.room === "synthflesh_lab" && (A.x !== a.x || A.y !== a.y)))
                    return {
                        valid: !1,
                        reason: "Cannot chain: Garrison/Transcendent Barrack already has a Synthflesh Lab adjacent (Synthflesh → Garrison → Synthflesh not allowed)"
                    }
        }
        for (const E of f)
            if (!(E.room === "empty" || !E.reachable) && z.includes(E.room) && Ih(l, {
                x: E.x,
                y: E.y
            }, "commanders_chamber", a, null))
                return {
                    valid: !1,
                    reason: "Cannot place: Synthflesh Lab would be in a linear chain with Commander through a Garrison (Garrison would become Transcendent Barrack, but linear chains are not allowed)"
                };
        return z.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Synth Lab must be adjacent to Path, Flesh Surgeon, Garrison, or Transcendent Barrack (not Legion Barrack)"
        };
    case "surgeons_ward":
        return ["path", "synthflesh_lab"].some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Flesh Surgeon must be adjacent to Path or Synth Lab"
        };
    case "workshop":
        const Q = ["path", "bronzeworks"]
          , ae = y.includes("path");
        if (!u && y.includes("bronzeworks") && !ae) {
            const E = f.filter(B => B.room === "bronzeworks");
            for (const B of E)
                if (Xe(l, {
                    x: B.x,
                    y: B.y
                }).find(A => A.room === "workshop" && (A.x !== a.x || A.y !== a.y)))
                    return {
                        valid: !1,
                        reason: "Cannot chain: Smithy already has a Golem Works adjacent (Golem → Smithy → Golem not allowed)"
                    }
        }
        return Q.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Golem Works must be adjacent to Path or Smithy"
        };
    case "chamber_of_souls":
        const oe = ["path", "thaumaturges_laboratory", "armoury"]
          , ie = y.includes("path") || y.includes("thaumaturges_laboratory");
        if (!u && y.includes("armoury") && !ie) {
            const E = f.find(B => B.room === "armoury");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => _.room === "chamber_of_souls" && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Armoury already has an Alchemy Lab adjacent (Alchemy Lab → Armoury → Alchemy Lab → Armoury not allowed)"
                }
        }
        return oe.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Alchemy Lab must be adjacent to Path, Thaumaturge, or Armoury"
        };
    case "thaumaturges_laboratory":
        const se = u ? ["path", "altar_of_sacrifice", "dynamo", "chamber_of_souls", "crimson_hall", "commanders_chamber"] : ["path", "altar_of_sacrifice", "dynamo", "chamber_of_souls", "crimson_hall"];
        if (y.includes("chamber_of_souls")) {
            const E = f.find(B => B.room === "chamber_of_souls");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).filter(_ => _.room === "thaumaturges_laboratory" && (_.x !== a.x || _.y !== a.y)).length >= 2)
                return {
                    valid: !1,
                    reason: "Cannot connect: Alchemy Lab already has 2 Thaumaturges connected (maximum allowed)"
                }
        }
        if (!u && y.includes("crimson_hall") && !y.includes("chamber_of_souls")) {
            const E = f.find(B => B.room === "crimson_hall");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => _.room === "thaumaturges_laboratory" && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Corruption Chamber already has a Thaumaturge adjacent (Thaumaturge → Corruption → Thaumaturge not allowed)"
                }
        }
        const ee = y.includes("path") || y.includes("altar_of_sacrifice") || y.includes("dynamo") || y.includes("chamber_of_souls") || y.includes("crimson_hall");
        if (u && y.includes("commanders_chamber") && !ee) {
            const E = f.find(B => B.room === "commanders_chamber");
            if (E && Xe(l, {
                x: E.x,
                y: E.y
            }).find(_ => _.room === "thaumaturges_laboratory" && (_.x !== a.x || _.y !== a.y)))
                return {
                    valid: !1,
                    reason: "Cannot chain: Commander already has a Thaumaturge adjacent (Corruption → Thaumaturge → Commander chaining only)"
                }
        }
        return se.some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Thaumaturge must be adjacent to Path, Sacrificial Chamber, Generator, Alchemy Lab, or Corruption Chamber"
        };
    case "crimson_hall":
        return ["path", "altar_of_sacrifice", "thaumaturges_laboratory"].some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Corruption Chamber must be adjacent to Path, Sacrificial Chamber, or Thaumaturge"
        };
    case "altar_of_sacrifice":
        return Hn(l, "altar_of_sacrifice").length > 0 ? {
            valid: !1,
            reason: "Only one Sacrificial Chamber allowed"
        } : ["path", "dynamo", "crimson_hall", "thaumaturges_laboratory"].some(E => y.includes(E)) ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Sacrificial Chamber must be adjacent to Path, Generator, Corruption Chamber, or Thaumaturge"
        };
    case "sealed_vault":
        return y.includes("path") ? {
            valid: !0
        } : {
            valid: !1,
            reason: "Sealed Vault must be adjacent to Path"
        };
    default:
        return {
            valid: !0
        }
    }
}
function z0(l, a) {
    const r = Ar(l, a);
    if (!r || r.room === "empty")
        return {
            valid: !0
        };
    const u = Xe(l, a).filter(p => p.room !== "empty");
    for (const p of u)
        if (Xe(l, {
            x: p.x,
            y: p.y
        }).filter(x => x.x !== a.x || x.y !== a.y).filter(x => x.room !== "empty").length === 0 && p.room !== "path")
            return {
                valid: !1,
                reason: "Cannot clear: would isolate adjacent rooms"
            };
    const m = l.map(p => p.map(b => b.x === a.x && b.y === a.y ? {
        ...b,
        room: "empty"
    } : b))
      , f = new Set
      , y = Hn(m, "path");
    if (y.length === 0)
        return {
            valid: !0
        };
    const g = y.map(p => ({
        x: p.x,
        y: p.y
    }));
    for (; g.length > 0; ) {
        const p = g.shift()
          , b = `${p.x},${p.y}`;
        if (f.has(b))
            continue;
        f.add(b);
        const x = Xe(m, p);
        for (const T of x)
            T.room !== "empty" && !f.has(`${T.x},${T.y}`) && g.push({
                x: T.x,
                y: T.y
            })
    }
    for (const p of m)
        for (const b of p)
            if (b.room !== "empty" && !f.has(`${b.x},${b.y}`))
                return {
                    valid: !1,
                    reason: "Cannot clear: would disconnect some rooms from paths"
                };
    return {
        valid: !0
    }
}
function k0(l, a, r=!1, c=!1) {
    const u = [];
    for (let m = 0; m < l.length; m++)
        for (let f = 0; f < l[m].length; f++) {
            const y = {
                x: f,
                y: m
            }
              , g = es(l, y, a, r, c);
            g.valid && u.push({
                position: y,
                result: g,
                cell: l[m][f]
            })
        }
    return u
}
function D0(l) {
    return Fe.dynamo.energyRangeByTier?.[l] || 3
}
function L0(l) {
    return Hn(l, "dynamo")
}
function O0(l, a) {
    const r = D0(a.tier)
      , c = new Set
      , u = new Set
      , m = [{
        x: a.x,
        y: a.y,
        dist: 0
    }];
    for (; m.length > 0; ) {
        const f = m.shift()
          , y = `${f.x},${f.y}`;
        if (u.has(y) || (u.add(y),
        f.dist > r))
            continue;
        const g = l[f.y]?.[f.x];
        if (!(!g || g.room === "empty") && (c.add(y),
        !(g.room !== "dynamo" && Ny.includes(g.room)) && f.dist < r)) {
            const p = Xe(l, {
                x: f.x,
                y: f.y
            });
            for (const b of p) {
                if (b.room === "empty" || !Gn(g.room, b.room, {
                    x: g.x,
                    y: g.y
                }, {
                    x: b.x,
                    y: b.y
                }))
                    continue;
                const x = `${b.x},${b.y}`;
                u.has(x) || m.push({
                    x: b.x,
                    y: b.y,
                    dist: f.dist + 1
                })
            }
        }
    }
    return c
}
function fo(l, a) {
    const r = L0(l);
    let c = 0;
    const u = `${a.x},${a.y}`;
    for (const m of r)
        O0(l, m).has(u) && c++;
    return c
}
function B0(l, a) {
    return fo(l, a) > 0
}
function q0(l, a) {
    return Ny.includes(a.room) ? B0(l, {
        x: a.x,
        y: a.y
    }) : !0
}
function U0(l) {
    const a = _n(l);
    return Ni(a, (r, c, u) => {
        a[u][c] = {
            ...r,
            hasPower: q0(l, r)
        }
    }
    ),
    a
}
function Ay(l) {
    const a = parseInt(l.replace("tier", ""));
    return a >= 3 ? null : `tier${a + 1}`
}
function G0(l, a) {
    const r = parseInt(l.replace("tier", ""))
      , c = parseInt(a.replace("tier", ""));
    return r - c
}
function Du(l, a) {
    return G0(l, a) >= 0 ? l : a
}
function H0(l, a) {
    if (!Tr(a.room))
        return a.room;
    const c = Xe(l, {
        x: a.x,
        y: a.y
    }).map(u => u.room);
    return c.includes("spymasters_study") ? "legion_barrack" : c.includes("synthflesh_lab") ? "transcendent_barrack" : "guardhouse"
}
function $0(l, a) {
    if (a.manualTier)
        return a.tier;
    if (a.room === "empty" || a.room === "path")
        return "tier1";
    const r = Fe[a.room];
    if (!r)
        return "tier1";
    const c = Xe(l, {
        x: a.x,
        y: a.y
    });
    switch (a.room) {
    case "spymasters_study":
    case "altar_of_sacrifice":
        return a.tier;
    case "commanders_chamber":
        return Y0(c);
    case "bronzeworks":
        return V0(l, a, c);
    case "synthflesh_lab":
        return X0(l, a, c);
    case "surgeons_ward":
        return Q0(c);
    case "workshop":
        return K0(l, a);
    case "guardhouse":
        return Z0(c);
    case "transcendent_barrack":
        return J0(l, a, c);
    case "legion_barrack":
        return I0(c);
    case "thaumaturges_laboratory":
        return W0(c)
    }
    return F0(r, c)
}
function Y0(l) {
    const a = l.filter(r => Tr(r.room)).length;
    return a >= 3 ? "tier3" : a >= 2 ? "tier2" : "tier1"
}
function V0(l, a, r) {
    const c = r.some(m => m.room === "workshop")
      , u = fo(l, {
        x: a.x,
        y: a.y
    });
    return c && u > 0 ? "tier3" : c || u > 0 ? "tier2" : "tier1"
}
function X0(l, a, r) {
    const c = r.some(m => m.room === "surgeons_ward")
      , u = fo(l, {
        x: a.x,
        y: a.y
    });
    return c && u > 0 ? "tier3" : c || u > 0 ? "tier2" : "tier1"
}
function Q0(l) {
    const a = l.filter(r => r.room === "synthflesh_lab");
    return a.length >= 2 || a.some(r => r.tier === "tier3") ? "tier3" : a.length >= 1 ? "tier2" : "tier1"
}
function K0(l, a) {
    const r = fo(l, {
        x: a.x,
        y: a.y
    });
    return r >= 2 ? "tier3" : r >= 1 ? "tier2" : "tier1"
}
function Z0(l) {
    const a = l.some(c => c.room === "commanders_chamber")
      , r = l.some(c => c.room === "armoury");
    return a && r ? "tier3" : a || r ? "tier2" : "tier1"
}
function J0(l, a, r) {
    const c = r.some(m => m.room === "synthflesh_lab")
      , u = fo(l, {
        x: a.x,
        y: a.y
    });
    return c && u > 0 ? "tier3" : c || u > 0 ? "tier2" : "tier1"
}
function I0(l) {
    const a = l.some(c => c.room === "armoury")
      , r = l.some(c => c.room === "spymasters_study");
    return a && r ? "tier3" : a || r ? "tier2" : "tier1"
}
function W0(l) {
    const r = l.filter(c => c.room === "altar_of_sacrifice").length;
    return r >= 2 ? "tier3" : r >= 1 ? "tier2" : "tier1"
}
function F0(l, a) {
    const r = l.upgrades || {};
    let c = "tier1";
    const u = a.map(m => m.room);
    for (const [m,f] of Object.entries(r)) {
        const y = m
          , g = f;
        g.type === "adjacent" && g.rooms ? g.requireAll ? g.rooms.every(b => u.includes(b)) && (c = Du(c, y)) : a.filter(b => g.rooms.includes(b.room)).length >= (g.count || 1) && (c = Du(c, y)) : g.type === "complex" && g.requiredAdjacent && g.requiredAdjacent.every(b => u.includes(b)) && (c = Du(c, y))
    }
    return c
}
function P0(l) {
    let a = _n(l)
      , r = !0
      , c = 0;
    const u = 10;
    for (Ni(a, (m, f, y) => {
        if (Tr(m.room)) {
            const g = H0(a, m);
            g !== m.room && (a[y][f] = {
                ...m,
                room: g,
                hasMedallion: m.hasMedallion
            })
        }
    }
    ),
    Ni(a, m => {
        !m.manualTier && !m.hasMedallion && m.room !== "empty" && (m.tier = "tier1")
    }
    ); r && c < u; )
        r = !1,
        c++,
        Ni(a, (m, f, y) => {
            if (m.room === "empty" || m.manualTier || m.hasMedallion)
                return;
            const g = m.tier
              , p = $0(a, m);
            p !== g && (a[y][f] = {
                ...m,
                tier: p,
                hasMedallion: m.hasMedallion
            },
            r = !0)
        }
        );
    return a
}
function Wh(l, a, r) {
    const c = l[r]?.[a];
    if (!c || c.room === "empty" || c.room === "path")
        return l;
    const u = Ay(c.tier);
    if (!u || !Fe[c.room].variants[u])
        return l;
    const f = _n(l);
    return f[r][a] = {
        ...c,
        tier: u,
        manualTier: !1
    },
    f
}
function Ey(l, a) {
    if (a.room === "empty" || a.room === "path")
        return {
            contributingRooms: [],
            nextTierNeeds: null
        };
    const r = Fe[a.room];
    if (!r)
        return {
            contributingRooms: [],
            nextTierNeeds: null
        };
    const c = Xe(l, {
        x: a.x,
        y: a.y
    })
      , u = Ay(a.tier);
    if (a.room === "spymasters_study")
        return {
            contributingRooms: [],
            nextTierNeeds: null,
            specialInfo: "Улучшения достигаются путем устранения других Соглядатая. Также используйте Медальон для повышения уровня."
        };
    if (a.room === "altar_of_sacrifice")
        return {
            contributingRooms: [],
            nextTierNeeds: null,
            specialInfo: "Улучшения достигаются путем жертвования тупиковой комнаты или дорожки. Используйте инструмент «Жертвоприношение», когда он появится."
        };
    switch (a.room) {
    case "commanders_chamber":
        return e2(c, a.tier, u);
    case "bronzeworks":
        return t2(a, c, u);
    case "synthflesh_lab":
        return n2(a, c, u);
    case "surgeons_ward":
        return a2(c, a.tier, u);
    case "workshop":
        return l2();
    case "guardhouse":
        return i2(c, a.tier, u);
    case "transcendent_barrack":
        return o2(l, a, c, u);
    case "legion_barrack":
        return s2(c, a.tier, u);
    case "thaumaturges_laboratory":
        return r2(c, a.tier, u);
    case "chamber_of_souls":
        return c2(c, a.tier, u);
    default:
        return u2(r, c, a.tier, u)
    }
}
function e2(l, a, r) {
    const u = l.filter(y => Tr(y.room)).map(y => ({
        x: y.x,
        y: y.y
    }))
      , m = parseInt(a.replace("tier", ""));
    let f = null;
    return r && (m === 1 ? f = {
        needed: ["guardhouse", "transcendent_barrack"],
        count: 2
    } : m === 2 && (f = {
        needed: ["guardhouse", "transcendent_barrack"],
        count: 3
    })),
    {
        contributingRooms: u,
        nextTierNeeds: f
    }
}
function t2(l, a, r) {
    const c = []
      , u = a.filter(y => y.room === "workshop");
    u.forEach(y => {
        c.push({
            x: y.x,
            y: y.y
        })
    }
    );
    const m = parseInt(l.tier.replace("tier", ""));
    let f = null;
    return r && (m === 1 ? u.length === 0 && (f = {
        needed: ["workshop"],
        count: 1
    }) : m === 2 && u.length < 2 && (f = {
        needed: ["workshop"],
        count: 2
    })),
    {
        contributingRooms: c,
        nextTierNeeds: f
    }
}
function n2(l, a, r) {
    const c = []
      , u = a.find(y => y.room === "surgeons_ward");
    u && c.push({
        x: u.x,
        y: u.y
    });
    const m = parseInt(l.tier.replace("tier", ""));
    let f = null;
    return r && (m === 1 ? u || (f = {
        needed: ["surgeons_ward"],
        count: 1
    }) : m === 2 && (u || (f = {
        needed: ["surgeons_ward"],
        count: 1
    }))),
    {
        contributingRooms: c,
        nextTierNeeds: f
    }
}
function a2(l, a, r) {
    const c = l.filter(y => y.room === "synthflesh_lab")
      , u = c.map(y => ({
        x: y.x,
        y: y.y
    }))
      , m = parseInt(a.replace("tier", ""));
    let f = null;
    if (r) {
        const y = c.some(g => g.tier === "tier3");
        m === 1 ? c.length === 0 && (f = {
            needed: ["synthflesh_lab"],
            count: 1
        }) : m === 2 && c.length < 2 && !y && (f = {
            needed: ["synthflesh_lab"],
            count: 2
        })
    }
    return {
        contributingRooms: u,
        nextTierNeeds: f
    }
}
function l2() {
    return {
        contributingRooms: [],
        nextTierNeeds: null,
        specialInfo: "Без смежных улучшений. Получает +1 уровень за каждый генератор (суммируется до 2)."
    }
}
function i2(l, a, r) {
    const c = []
      , u = l.find(g => g.room === "commanders_chamber")
      , m = l.find(g => g.room === "armoury");
    u && c.push({
        x: u.x,
        y: u.y
    }),
    m && c.push({
        x: m.x,
        y: m.y
    });
    const f = parseInt(a.replace("tier", ""));
    let y = null;
    return r && (f === 1 ? !u && !m && (y = {
        needed: ["commanders_chamber", "armoury"],
        count: 1
    }) : f === 2 && (u ? m || (y = {
        needed: ["armoury"],
        count: 1
    }) : y = {
        needed: ["commanders_chamber"],
        count: 1
    })),
    {
        contributingRooms: c,
        nextTierNeeds: y
    }
}
function o2(l, a, r, c) {
    const u = []
      , m = r.find(p => p.room === "synthflesh_lab");
    m && u.push({
        x: m.x,
        y: m.y
    });
    const f = fo(l, {
        x: a.x,
        y: a.y
    })
      , y = parseInt(a.tier.replace("tier", ""));
    let g = null;
    if (c) {
        if (y === 1)
            !m && f === 0 && (g = {
                needed: ["synthflesh_lab"],
                count: 1
            });
        else if (y === 2) {
            if (!m)
                g = {
                    needed: ["synthflesh_lab"],
                    count: 1
                };
            else if (f === 0)
                return g = {
                    needed: [],
                    count: 0
                },
                {
                    contributingRooms: u,
                    nextTierNeeds: null,
                    specialInfo: "Требуется питание от генератора (в пределах допустимой нагрузки)/"
                }
        }
    }
    return {
        contributingRooms: u,
        nextTierNeeds: g
    }
}
function s2(l, a, r) {
    const c = []
      , u = l.find(g => g.room === "armoury")
      , m = l.find(g => g.room === "spymasters_study");
    u && c.push({
        x: u.x,
        y: u.y
    }),
    m && c.push({
        x: m.x,
        y: m.y
    });
    const f = parseInt(a.replace("tier", ""));
    let y = null;
    return r && (f === 1 ? !u && !m && (y = {
        needed: ["armoury", "spymasters_study"],
        count: 1
    }) : f === 2 && (u ? m || (y = {
        needed: ["spymasters_study"],
        count: 1
    }) : y = {
        needed: ["armoury"],
        count: 1
    })),
    {
        contributingRooms: c,
        nextTierNeeds: y
    }
}
function r2(l, a, r) {
    const c = l.filter(y => y.room === "altar_of_sacrifice")
      , u = c.map(y => ({
        x: y.x,
        y: y.y
    }))
      , m = parseInt(a.replace("tier", ""));
    let f = null;
    if (r) {
        const y = c.some(g => g.tier === "tier3");
        m === 1 ? c.length === 0 && (f = {
            needed: ["altar_of_sacrifice"],
            count: 1
        }) : m === 2 && c.length < 2 && !y && (f = {
            needed: ["altar_of_sacrifice"],
            count: 2
        })
    }
    return {
        contributingRooms: u,
        nextTierNeeds: f
    }
}
function c2(l, a, r) {
    const c = l.filter(y => y.room === "thaumaturges_laboratory")
      , u = c.map(y => ({
        x: y.x,
        y: y.y
    }))
      , m = parseInt(a.replace("tier", ""));
    let f = null;
    return r && (m === 1 ? c.length === 0 && (f = {
        needed: ["thaumaturges_laboratory"],
        count: 1
    }) : m === 2 && c.length < 2 && (f = {
        needed: ["thaumaturges_laboratory"],
        count: 2 - c.length
    })),
    {
        contributingRooms: u,
        nextTierNeeds: f
    }
}
function u2(l, a, r, c) {
    const u = [];
    let m = null;
    if (!c)
        return {
            contributingRooms: u,
            nextTierNeeds: m
        };
    const f = l.upgrades?.[c];
    if (!f)
        return {
            contributingRooms: u,
            nextTierNeeds: m
        };
    const y = l.upgrades?.[r];
    if (y?.type === "adjacent" && y.rooms && a.filter(p => y.rooms.includes(p.room)).forEach(p => {
        u.push({
            x: p.x,
            y: p.y
        })
    }
    ),
    f.type === "adjacent" && f.rooms) {
        const g = a.filter(p => f.rooms.includes(p.room));
        if (f.requireAll) {
            const p = f.rooms.filter(b => !g.some(x => x.room === b));
            p.length > 0 && (m = {
                needed: p,
                requireAll: !0
            })
        } else {
            const p = f.count || 1;
            g.length < p && (m = {
                needed: f.rooms,
                count: p - g.length
            })
        }
    } else
        f.type === "complex" && f.requiredAdjacent && (f.requiredAdjacent.every(p => a.some(b => b.room === p)) || (m = {
            needed: f.requiredAdjacent.filter(b => !a.some(x => x.room === b)),
            requireAll: !0
        }));
    return {
        contributingRooms: u,
        nextTierNeeds: m
    }
}
const f2 = 1
  , Ry = "atziri-temple-layout"
  , ro = "atziri-temple-slot-"
  , vr = "atziri-temple-active-slot"
  , My = {
    empty: 0,
    path: 1,
    guardhouse: 2,
    transcendent_barrack: 3,
    legion_barrack: 4,
    commanders_chamber: 5,
    armoury: 6,
    bronzeworks: 7,
    dynamo: 8,
    spymasters_study: 9,
    synthflesh_lab: 10,
    surgeons_ward: 11,
    workshop: 12,
    chamber_of_souls: 13,
    thaumaturges_laboratory: 14,
    crimson_hall: 15,
    altar_of_sacrifice: 16,
    reward_room: 17,
    sealed_vault: 18,
    architect: 19,
    sacrifice_room: 20
}
  , d2 = Object.entries(My).sort( ([,l], [,a]) => l - a).map( ([l]) => l)
  , ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  , fr = Object.fromEntries([...ts].map( (l, a) => [l, a]));
function m2(l) {
    const a = My[l.room] ?? 0
      , r = parseInt(l.tier.replace("tier", "")) - 1;
    return a << 3 | r & 7
}
function h2(l) {
    const a = l >> 3 & 31
      , r = l & 7;
    return {
        room: d2[a] || "empty",
        tier: `tier${r + 1}`
    }
}
function y2(l) {
    let a = "";
    for (let r = 0; r < l.length; r += 3) {
        const c = l[r] ?? 0
          , u = l[r + 1] ?? 0
          , m = l[r + 2] ?? 0;
        a += ts[c >> 2 & 63],
        a += ts[(c << 4 | u >> 4) & 63],
        r + 1 < l.length && (a += ts[(u << 2 | m >> 6) & 63]),
        r + 2 < l.length && (a += ts[m & 63])
    }
    return a
}
function p2(l) {
    const a = [];
    for (let r = 0; r < l.length; r += 4) {
        const c = fr[l[r]] ?? 0
          , u = fr[l[r + 1]] ?? 0
          , m = fr[l[r + 2]] ?? 0
          , f = fr[l[r + 3]] ?? 0;
        a.push(c << 2 | u >> 4),
        l[r + 2] !== void 0 && a.push((u << 4 | m >> 2) & 255),
        l[r + 3] !== void 0 && a.push((m << 6 | f) & 255)
    }
    return a
}
function g2(l) {
    const a = []
      , r = new Array(7).fill(0)
      , c = new Array(7).fill(0)
      , u = new Array(7).fill(0);
    let m = 0;
    for (const x of l)
        for (const T of x) {
            a.push(m2(T));
            const O = Math.floor(m / 8)
              , k = m % 8;
            T.manualTier && (r[O] |= 1 << k),
            T.hasMedallion && (c[O] |= 1 << k),
            T.isLocked && T.room !== "path" && (u[O] |= 1 << k),
            m++
        }
    const f = r.some(x => x !== 0)
      , y = c.some(x => x !== 0)
      , g = u.some(x => x !== 0)
      , b = [(f ? 1 : 0) | (y ? 2 : 0) | (g ? 4 : 0), ...a];
    return f && b.push(...r),
    y && b.push(...c),
    g && b.push(...u),
    y2(b)
}
function Hu(l, a=os) {
    try {
        const r = p2(l);
        if (r.length < 2)
            return null;
        const c = r[0]
          , u = (c & 1) !== 0
          , m = (c & 2) !== 0
          , f = (c & 4) !== 0
          , y = r.slice(1, 1 + a * a)
          , g = 1 + a * a
          , p = u ? r.slice(g, g + 7) : []
          , b = m ? r.slice(g + (u ? 7 : 0), g + (u ? 14 : 7)) : []
          , x = f ? r.slice(g + (u ? 7 : 0) + (m ? 7 : 0), g + (u ? 7 : 0) + (m ? 7 : 0) + 7) : []
          , T = jr(a);
        let O = 0;
        for (let k = 0; k < a; k++)
            for (let M = 0; M < a; M++) {
                const w = y[O] ?? 0
                  , {room: Y, tier: $} = h2(w)
                  , P = Math.floor(O / 8)
                  , X = O % 8
                  , J = u && ((p[P] ?? 0) & 1 << X) !== 0
                  , Z = m && ((b[P] ?? 0) & 1 << X) !== 0
                  , z = f && ((x[P] ?? 0) & 1 << X) !== 0;
                T[k][M] = {
                    ...T[k][M],
                    room: Y,
                    tier: $,
                    manualTier: J || Y === "spymasters_study" && $ !== "tier1" || Y === "altar_of_sacrifice" && $ !== "tier1",
                    hasMedallion: Z,
                    isLocked: z || M === ft.x && k === ft.y && Y === "path"
                },
                O++
            }
        return T
    } catch {
        return console.error("Failed to decode compact temple layout"),
        null
    }
}
function v2(l) {
    const a = parseInt(l);
    return isNaN(a) || a < 1 || a > 7 ? "tier1" : `tier${a}`
}
function _2(l, a=os) {
    const r = jr(a);
    let c = 0;
    for (let u = 0; u < a; u++)
        for (let m = 0; m < a && !(c >= l.length); m++) {
            const f = l[c] || "_"
              , y = l[c + 1] || "1"
              , g = l[c + 2] === "M";
            c += g ? 3 : 2;
            const p = T0[f] || "empty"
              , b = v2(y);
            r[u][m] = {
                ...r[u][m],
                room: p,
                tier: b,
                manualTier: g || p === "spymasters_study" && b !== "tier1" || p === "altar_of_sacrifice" && b !== "tier1"
            }
        }
    return r
}
function b2(l, a=os) {
    try {
        const r = atob(l);
        return _2(r, a)
    } catch {
        return console.error("Failed to decode base64 temple layout"),
        null
    }
}
function x2(l) {
    const a = g2(l)
      , r = window.location.origin + "/"
      , c = window.location.hash;
    return c && c.startsWith("#/") ? `${r}atziri-temple/#/planner?t=${a}` : `${r}?t=${a}`
}
function Fh() {
    const l = window.location.hash
      , a = l.indexOf("?");
    if (a !== -1) {
        const u = l.substring(a + 1)
          , f = new URLSearchParams(u).get("t");
        if (f) {
            const y = Hu(f);
            if (y)
                return y
        }
    }
    const c = new URLSearchParams(window.location.search).get("t");
    if (c) {
        const u = Hu(c);
        if (u)
            return u
    }
    if (l.startsWith("#L=")) {
        const u = l.slice(3);
        return b2(u)
    }
    return null
}
function wy(l) {
    return {
        version: f2,
        grid: l.map(a => a.map(r => ({
            room: r.room,
            tier: r.tier,
            manualTier: r.manualTier || void 0
        })))
    }
}
function zy(l) {
    const a = l.grid.length
      , r = jr(a);
    for (let c = 0; c < a; c++)
        for (let u = 0; u < l.grid[c].length; u++) {
            const m = l.grid[c][u];
            r[c][u] = {
                ...r[c][u],
                room: m.room,
                tier: m.tier,
                manualTier: m.manualTier || !1
            }
        }
    return r
}
function Ph(l) {
    try {
        const a = JSON.stringify(wy(l));
        localStorage.setItem(Ry, a)
    } catch (a) {
        console.error("Failed to save temple to localStorage:", a)
    }
}
function ey() {
    try {
        const l = localStorage.getItem(Ry);
        if (!l)
            return null;
        const a = JSON.parse(l);
        return zy(a)
    } catch (l) {
        return console.error("Failed to load temple from localStorage:", l),
        null
    }
}
async function S2(l) {
    try {
        const a = x2(l);
        return await navigator.clipboard.writeText(a),
        !0
    } catch (a) {
        return console.error("Failed to copy URL to clipboard:", a),
        !1
    }
}
function ty() {
    const l = jr(os);
    return l[ft.y][ft.x] = {
        ...l[ft.y][ft.x],
        room: "path",
        tier: "tier1",
        reachable: !0,
        isLocked: !0
    },
    l
}
function _r(l, a) {
    try {
        const r = JSON.stringify(wy(a))
          , c = `${ro}${l}`;
        localStorage.setItem(c, r);
        const u = {
            lastModified: Date.now()
        };
        localStorage.setItem(`${c}-meta`, JSON.stringify(u))
    } catch (r) {
        console.error(`Failed to save temple to slot "${l}":`, r)
    }
}
function ky(l) {
    try {
        const a = `${ro}${l}`
          , r = localStorage.getItem(a);
        if (!r)
            return null;
        const c = JSON.parse(r);
        return zy(c)
    } catch (a) {
        return console.error(`Failed to load temple from slot "${l}":`, a),
        null
    }
}
function Dy(l) {
    try {
        const a = `${ro}${l}`;
        localStorage.removeItem(a),
        localStorage.removeItem(`${a}-meta`),
        nf() === l && T2()
    } catch (a) {
        console.error(`Failed to delete slot "${l}":`, a)
    }
}
function C2(l, a) {
    try {
        const r = ky(l);
        return r ? (_r(a, r),
        Dy(l),
        nf() === l && br(a),
        !0) : !1
    } catch (r) {
        return console.error(`Failed to rename slot "${l}" to "${a}":`, r),
        !1
    }
}
function Ly() {
    try {
        const l = [];
        for (let a = 0; a < localStorage.length; a++) {
            const r = localStorage.key(a);
            if (r && r.startsWith(ro) && !r.endsWith("-meta")) {
                const c = r.slice(ro.length);
                let u = 0;
                try {
                    const m = localStorage.getItem(`${r}-meta`);
                    m && (u = JSON.parse(m).lastModified || 0)
                } catch {}
                l.push({
                    name: c,
                    lastModified: u
                })
            }
        }
        return l.sort( (a, r) => r.lastModified - a.lastModified),
        l
    } catch (l) {
        return console.error("Failed to list layout slots:", l),
        []
    }
}
function ny(l) {
    const a = `${ro}${l}`;
    return localStorage.getItem(a) !== null
}
function br(l) {
    l === null ? localStorage.removeItem(vr) : localStorage.setItem(vr, l)
}
function nf() {
    return localStorage.getItem(vr)
}
function T2() {
    localStorage.removeItem(vr)
}
const N2 = {
    protectedRoomTypes: ["path", "architect"]
}
  , j2 = {
    cardsPerDeal: 6
}
  , yr = ["altar_of_sacrifice", "architect"]
  , ay = ["altar_of_sacrifice", "reward_room", "sealed_vault"]
  , A2 = 7;
function E2(l) {
    const a = []
      , r = new Set;
    for (const c of yr)
        Hn(l, c).length > 0 && r.add(c);
    for (const c of tf)
        r.has(c) || Fe[c]?.transformsFrom || a.push(c);
    return a
}
function R2(l, a=!0) {
    const r = E2(l)
      , c = []
      , u = new Set
      , m = r.filter(g => ay.includes(g))
      , f = r.filter(g => !ay.includes(g))
      , y = [];
    for (const g of f)
        if (g === "path")
            for (let p = 0; p < A2; p++)
                y.push(g);
        else
            y.push(g);
    if (a && m.length > 0 && Math.random() < .2) {
        const g = Math.floor(Math.random() * m.length)
          , p = m[g];
        c.push(p),
        yr.includes(p) && u.add(p)
    }
    for (; c.length < j2.cardsPerDeal && y.length > 0; ) {
        const g = Math.floor(Math.random() * y.length)
          , p = y[g];
        if (yr.includes(p) && u.has(p)) {
            y.splice(g, 1);
            continue
        }
        if (c.push(p),
        yr.includes(p)) {
            u.add(p);
            for (let b = y.length - 1; b >= 0; b--)
                y[b] === p && y.splice(b, 1)
        }
    }
    for (let g = c.length - 1; g > 0; g--) {
        const p = Math.floor(Math.random() * (g + 1));
        [c[g],c[p]] = [c[p], c[g]]
    }
    return c
}
function Oy(l, a=!1, r=!1) {
    const c = l.flat().filter(f => f.room !== "empty" && f.room !== "path" && f.room !== "architect").length;
    let m = Math.max(1, Math.floor(c * .1));
    return a && (m += 1),
    r && (m += 1),
    m
}
function By(l) {
    const a = []
      , r = N2;
    for (let c = 0; c < l.length; c++)
        for (let u = 0; u < l[c].length; u++) {
            const m = l[c][u];
            m.room !== "empty" && m.reachable && (r.protectedRoomTypes.includes(m.room) || Nr(l, {
                x: u,
                y: c
            }) || a.push({
                x: u,
                y: c
            }))
        }
    return a
}
function M2(l, a, r, c) {
    const u = new Set(a.map(x => `${x.x},${x.y}`))
      , m = By(l);
    if (m.length === 0)
        return null;
    for (let x = m.length - 1; x > 0; x--) {
        const T = Math.floor(Math.random() * (x + 1));
        [m[x],m[T]] = [m[T], m[x]]
    }
    const f = m[0]
      , y = `${f.x},${f.y}`
      , g = l[f.y][f.x]
      , p = u.has(y) || g.isLocked;
    let b = _n(l);
    return p || (b[f.y][f.x] = {
        ...b[f.y][f.x],
        room: "empty",
        tier: "tier1",
        reachable: !1
    }),
    {
        attemptNumber: r,
        totalAttempts: c,
        targetedRoom: f,
        wasProtected: p,
        gridAfterStep: b
    }
}
function qy(l, a, r, c) {
    const u = `${ft.x},${ft.y}`
      , m = Xe(l, a)
      , f = new Map
      , y = (b, x, T) => {
        if (T.has(x))
            return [];
        T.add(x);
        const O = c.get(x);
        if (O !== void 0)
            return [O];
        if (b.room === "architect") {
            const k = []
              , M = Xe(l, {
                x: b.x,
                y: b.y
            });
            for (const w of M) {
                const Y = `${w.x},${w.y}`;
                Y !== u && (w.room === "empty" || !w.reachable || Gn(b.room, w.room, {
                    x: b.x,
                    y: b.y
                }, {
                    x: w.x,
                    y: w.y
                }) && k.push(...y(w, Y, T)))
            }
            return k
        }
        return []
    }
    ;
    for (const b of m) {
        const x = `${b.x},${b.y}`;
        if (x === u || b.room === "empty" || !Gn(r, b.room, a, {
            x: b.x,
            y: b.y
        }))
            continue;
        const T = y(b, x, new Set);
        for (const O of T)
            f.set(O, (f.get(O) || 0) + 1)
    }
    const g = f.size >= 2;
    let p = !1;
    for (const b of f.values())
        if (b >= 2) {
            p = !0;
            break
        }
    return {
        wouldMergeChains: g,
        wouldCreateLoop: p
    }
}
function w2(l) {
    const a = new Map
      , r = new Map
      , c = new Set
      , u = `${ft.x},${ft.y}`;
    let m = 0;
    const f = 3
      , y = new Map
      , g = new Set
      , p = new Map([[0, [5, 11]], [3, [6, 10]], [6, [3, 5]], [9, [4, 2]]])
      , b = new Map
      , x = l[ft.y]?.[ft.x];
    if (!x)
        return {
            colorMap: a,
            borderMap: new Map,
            connectionMap: new Map,
            branchPoints: r,
            branchNodes: new Set
        };
    c.add(u);
    const T = (X, J) => Xe(l, X).filter(Z => {
        const z = `${Z.x},${Z.y}`;
        return !(z === u || c.has(z) || Z.room === "empty" || !Z.reachable || !Gn(J.room, Z.room, {
            x: J.x,
            y: J.y
        }, {
            x: Z.x,
            y: Z.y
        }))
    }
    )
      , O = (X, J) => {
        const Z = new Set(J)
          , z = [X];
        let U = 0;
        for (; z.length > 0; ) {
            const G = z.shift()
              , Q = `${G.x},${G.y}`;
            if (Z.has(Q))
                continue;
            const ae = l[G.y]?.[G.x];
            if (!ae || ae.room === "empty" || !ae.reachable)
                continue;
            Z.add(Q),
            ae.room !== "architect" && U++;
            const oe = Xe(l, G).filter(ie => {
                const se = `${ie.x},${ie.y}`;
                return !(se === u || Z.has(se) || ie.room === "empty" || !ie.reachable || !Gn(ae.room, ie.room, {
                    x: ae.x,
                    y: ae.y
                }, {
                    x: ie.x,
                    y: ie.y
                }))
            }
            );
            for (const ie of oe)
                z.push({
                    x: ie.x,
                    y: ie.y
                })
        }
        return U
    }
      , k = (X, J, Z, z, U=!1) => {
        const G = [{
            pos: X,
            color: J,
            baseColor: Z,
            from: z,
            isBranch: U
        }];
        for (; G.length > 0; ) {
            const {pos: Q, color: ae, baseColor: oe, from: ie, isBranch: se} = G.pop()
              , ee = `${Q.x},${Q.y}`;
            if (c.has(ee))
                continue;
            const j = l[Q.y]?.[Q.x];
            if (!j || j.room === "empty" || !j.reachable)
                continue;
            if (c.add(ee),
            j.room === "architect") {
                const le = T(Q, j);
                for (const _ of le)
                    G.push({
                        pos: {
                            x: _.x,
                            y: _.y
                        },
                        color: ae,
                        baseColor: oe,
                        from: Q,
                        isBranch: se
                    });
                continue
            }
            a.set(ee, ae),
            y.set(ee, oe),
            se && g.add(ee);
            const H = T(Q, j)
              , E = H.filter(le => le.room !== "architect")
              , B = H.filter(le => le.room === "architect");
            for (const le of B)
                G.push({
                    pos: {
                        x: le.x,
                        y: le.y
                    },
                    color: ae,
                    baseColor: oe,
                    from: Q,
                    isBranch: se
                });
            if (E.length !== 0)
                if (E.length === 1)
                    G.push({
                        pos: {
                            x: E[0].x,
                            y: E[0].y
                        },
                        color: ae,
                        baseColor: oe,
                        from: Q,
                        isBranch: se
                    });
                else {
                    const le = ie ? {
                        dx: Q.x - ie.x,
                        dy: Q.y - ie.y
                    } : null
                      , _ = E.map(A => {
                        const K = O({
                            x: A.x,
                            y: A.y
                        }, c);
                        let W = 0;
                        if (le) {
                            const re = {
                                dx: A.x - Q.x,
                                dy: A.y - Q.y
                            };
                            W = re.dx * le.dx + re.dy * le.dy
                        }
                        return {
                            neighbor: A,
                            count: K,
                            directionScore: W
                        }
                    }
                    );
                    _.sort( (A, K) => K.directionScore !== A.directionScore ? K.directionScore - A.directionScore : K.count - A.count),
                    r.set(ee, _.map(A => A.count));
                    for (let A = 0; A < _.length; A++) {
                        const K = A > 0;
                        G.push({
                            pos: {
                                x: _[A].neighbor.x,
                                y: _[A].neighbor.y
                            },
                            color: ae,
                            baseColor: oe,
                            from: Q,
                            isBranch: K || se
                        }),
                        K && (b.has(ee) || b.set(ee, []),
                        b.get(ee).push({
                            startKey: `${_[A].neighbor.x},${_[A].neighbor.y}`,
                            branchIndex: A - 1
                        }))
                    }
                }
        }
    }
      , M = Xe(l, ft).filter(X => X.room !== "empty" && X.reachable && Gn(x.room, X.room, {
        x: x.x,
        y: x.y
    }, {
        x: X.x,
        y: X.y
    })).sort( (X, J) => {
        const Z = Math.atan2(X.y - ft.y, X.x - ft.x)
          , z = Math.atan2(J.y - ft.y, J.x - ft.x);
        return Z - z
    }
    );
    for (const X of M) {
        const J = `${X.x},${X.y}`;
        if (c.has(J))
            continue;
        const Z = m;
        m = (m + f) % 12,
        k({
            x: X.x,
            y: X.y
        }, Z, Z, ft, !1)
    }
    const w = () => {
        let X = !1;
        const J = new Map;
        for (const Z of a.values())
            J.set(Z, (J.get(Z) || 0) + 1);
        for (const [Z,z] of a) {
            const [U,G] = Z.split(",").map(Number)
              , Q = l[G][U]
              , ae = Xe(l, {
                x: U,
                y: G
            });
            for (const oe of ae) {
                const ie = `${oe.x},${oe.y}`;
                if (ie === u)
                    continue;
                const se = a.get(ie);
                if (se === void 0 || se === z || !Gn(Q.room, oe.room, {
                    x: Q.x,
                    y: Q.y
                }, {
                    x: oe.x,
                    y: oe.y
                }))
                    continue;
                const ee = [0, 3, 6, 9]
                  , j = ee.includes(z)
                  , H = ee.includes(se)
                  , E = J.get(z) || 0
                  , B = J.get(se) || 0;
                let le, _;
                j && !H ? (le = z,
                _ = se) : !j && H ? (le = se,
                _ = z) : j && H ? z < se ? (le = z,
                _ = se) : (le = se,
                _ = z) : E >= B ? (le = z,
                _ = se) : (le = se,
                _ = z);
                let A;
                j && z === le ? A = z : H && se === le ? A = se : A = y.get(Z) || le;
                for (const [K,W] of a)
                    W === _ && (a.set(K, le),
                    y.set(K, A));
                J.set(le, E + B),
                J.delete(_),
                X = !0;
                break
            }
            if (X)
                break
        }
        return X
    }
    ;
    for (; w(); )
        ;
    ( () => {
        const X = new Map;
        for (const J of g) {
            const Z = a.get(J);
            Z !== void 0 && (X.has(Z) || X.set(Z, []),
            X.get(Z).push(J))
        }
        for (const [J,Z] of X) {
            const z = p.get(J) || [J]
              , U = new Set;
            let G = 0;
            for (const Q of Z) {
                if (U.has(Q))
                    continue;
                const ae = z[G % z.length];
                G++;
                const oe = [Q];
                for (; oe.length > 0; ) {
                    const ie = oe.shift();
                    if (U.has(ie) || !g.has(ie))
                        continue;
                    U.add(ie);
                    const [se,ee] = ie.split(",").map(Number)
                      , j = l[ee]?.[se];
                    if (!j || j.room === "architect")
                        continue;
                    a.set(ie, ae);
                    const H = Xe(l, {
                        x: se,
                        y: ee
                    });
                    for (const E of H) {
                        const B = `${E.x},${E.y}`;
                        g.has(B) && a.get(B) === J && oe.push(B)
                    }
                }
            }
        }
    }
    )();
    const $ = new Map;
    for (const [X,J] of a) {
        const [Z,z] = X.split(",").map(Number)
          , U = l[z][Z]
          , G = {
            top: !1,
            bottom: !1,
            left: !1,
            right: !1
        }
          , Q = [{
            dx: 0,
            dy: -1,
            side: "top"
        }, {
            dx: 0,
            dy: 1,
            side: "bottom"
        }, {
            dx: -1,
            dy: 0,
            side: "left"
        }, {
            dx: 1,
            dy: 0,
            side: "right"
        }];
        for (const {dx: ae, dy: oe, side: ie} of Q) {
            const se = Z + ae
              , ee = z + oe
              , j = `${se},${ee}`
              , H = l[ee]?.[se];
            !H || H.room === "empty" || !H.reachable || j === u || a.get(j) !== J ? G[ie] = !0 : Gn(U.room, H.room, {
                x: U.x,
                y: U.y
            }, {
                x: H.x,
                y: H.y
            }) || (G[ie] = !0)
        }
        $.set(X, G)
    }
    const P = new Map;
    for (let X = 0; X < l.length; X++)
        for (let J = 0; J < l[X].length; J++) {
            const Z = l[X][J]
              , z = `${J},${X}`;
            if (Z.room === "empty" || !Z.reachable)
                continue;
            const U = {
                right: !1,
                down: !1
            }
              , G = l[X]?.[J + 1];
            G && G.room !== "empty" && G.reachable && Gn(Z.room, G.room, {
                x: Z.x,
                y: Z.y
            }, {
                x: G.x,
                y: G.y
            }) && (U.right = !0);
            const Q = l[X + 1]?.[J];
            Q && Q.room !== "empty" && Q.reachable && Gn(Z.room, Q.room, {
                x: Z.x,
                y: Z.y
            }, {
                x: Q.x,
                y: Q.y
            }) && (U.down = !0),
            P.set(z, U)
        }
    return {
        colorMap: a,
        borderMap: $,
        connectionMap: P,
        branchPoints: r,
        branchNodes: g
    }
}
const Lu = [1, 1, 1, .9, .81, .729, .656, .59, .531, .478, .43, .387, .349, .314, .282]
  , z2 = ["spymasters_study", "workshop", "thaumaturges_laboratory"]
  , k2 = ["dynamo", "synthflesh_lab", "surgeons_ward", "transcendent_barrack", "chamber_of_souls"]
  , D2 = ["guardhouse", "transcendent_barrack", "legion_barrack", "commanders_chamber", "armoury", "bronzeworks"]
  , L2 = ["crimson_hall", "sealed_vault", "altar_of_sacrifice"];
function Uy(l) {
    const a = l.match(/([\d.]+)%/);
    return a ? parseFloat(a[1]) : 0
}
function O2(l, a) {
    const r = Fe[l];
    if (!r)
        return 0;
    const c = r.variants[a]?.effects || [];
    for (const u of c)
        if (u.includes("increased effect of Temple Mods"))
            return Uy(u);
    return 0
}
function $u(l) {
    return k2.includes(l)
}
function Yu(l) {
    return D2.includes(l)
}
function Vu(l) {
    return L2.includes(l)
}
function B2(l) {
    const a = {
        monsterEffects: [],
        itemEffects: [],
        chestEffects: [],
        miscEffects: [],
        modifierSources: [],
        specialBonuses: [],
        spymasterModifier: 0,
        golemWorksModifier: 0,
        thaumaturgeModifier: 0
    };
    Ni(l, u => {
        if (!u.reachable || u.room === "empty" || u.room === "path")
            return;
        const m = Fe[u.room];
        if (!m)
            return;
        const f = O2(u.room, u.tier);
        u.room === "spymasters_study" && f > 0 && (a.spymasterModifier += f,
        a.modifierSources.push({
            roomName: m.name,
            roomId: u.room,
            tier: u.tier,
            value: f,
            affects: "Generator, Synthflesh, Surgeon, Transcendent, Alchemy"
        })),
        u.room === "workshop" && f > 0 && (a.golemWorksModifier += f,
        a.modifierSources.push({
            roomName: m.name,
            roomId: u.room,
            tier: u.tier,
            value: f,
            affects: "Garrison, Commander, Armoury, Smithy, Legion Barrack"
        })),
        u.room === "thaumaturges_laboratory" && f > 0 && (a.thaumaturgeModifier += f,
        a.modifierSources.push({
            roomName: m.name,
            roomId: u.room,
            tier: u.tier,
            value: f,
            affects: "Corruption, Vault, Sacrifice"
        }))
    }
    );
    const r = new Map
      , c = new Map;
    Ni(l, u => {
        if (!u.reachable || u.room === "empty" || u.room === "path" || !u.hasPower)
            return;
        const m = Fe[u.room];
        if (!m)
            return;
        const f = m.variants[u.tier]?.effects || [];
        for (const y of f) {
            if (y.includes("increased effect of Temple Mods") || y.includes("Powers rooms"))
                continue;
            const g = Uy(y);
            if (g === 0 && !y.includes("Adds") && !y.includes("Vaal") && !y.includes("Orb"))
                continue;
            let p = "misc"
              , b = y
              , x = "%";
            if (y.includes("Monster") || y.includes("Rare") || y.includes("Magic") || y.includes("Unique") ? p = "monster" : y.includes("Item Rarity") || y.includes("Rarity of Items") || y.includes("Gold") ? p = "item" : y.includes("Chest") ? p = "chest" : y.includes("Experience") && (p = "misc"),
            y.includes("Adds") || y.includes("Vaal") || y.includes("Orb") || y.includes("Limb") || y.includes("Crystallised") || y.includes("Destabiliser")) {
                c.has(y) || c.set(y, {
                    bonus: y,
                    count: 0,
                    rooms: []
                });
                const M = c.get(y);
                M.count++,
                M.rooms.push({
                    name: m.name,
                    tier: u.tier
                });
                continue
            }
            const T = y.replace(/\d+%/, "X%");
            r.has(T) || r.set(T, {
                name: b,
                unit: x,
                category: p,
                sources: [],
                baseTotal: 0
            });
            const O = r.get(T)
              , k = O.sources.find(M => M.roomId === u.room && M.tier === u.tier);
            k ? k.count++ : O.sources.push({
                roomName: m.name,
                roomId: u.room,
                tier: u.tier,
                baseContribution: g,
                count: 1,
                hasDiminishingReturns: !1
            }),
            O.baseTotal += g
        }
    }
    ),
    a.specialBonuses = Array.from(c.values());
    for (const [u,m] of r) {
        for (const k of m.sources)
            $u(k.roomId) && a.spymasterModifier > 0,
            Yu(k.roomId) && a.golemWorksModifier > 0,
            Vu(k.roomId) && a.thaumaturgeModifier > 0;
        const f = [...m.sources].sort( (k, M) => {
            const w = parseInt(k.tier.replace("tier", ""));
            return parseInt(M.tier.replace("tier", "")) - w
        }
        )
          , y = f.reduce( (k, M) => k + M.count, 0)
          , g = f.length > 0 && !z2.includes(f[0].roomId) && y >= 4;
        let p = 0
          , b = 0
          , x = 0;
        for (const k of f) {
            let M = 0;
            $u(k.roomId) && (M += a.spymasterModifier),
            Yu(k.roomId) && (M += a.golemWorksModifier),
            Vu(k.roomId) && (M += a.thaumaturgeModifier);
            const w = k.baseContribution * (1 + M / 100);
            for (let Y = 0; Y < k.count; Y++) {
                p += k.baseContribution;
                let $ = 1;
                g && ($ = Lu[x] ?? Lu[Lu.length - 1]);
                const P = Math.floor(w * $);
                b += P,
                x++
            }
        }
        b = Math.round(b * 1e3) / 1e3;
        const T = g
          , O = {
            name: m.name,
            baseValue: p,
            unit: m.unit,
            sources: m.sources,
            totalMultiplier: p > 0 ? b / p : 1,
            finalValue: b,
            hasDiminishingReturns: T
        };
        switch (m.category) {
        case "monster":
            a.monsterEffects.push(O);
            break;
        case "item":
            a.itemEffects.push(O);
            break;
        case "chest":
            a.chestEffects.push(O);
            break;
        default:
            a.miscEffects.push(O)
        }
    }
    return a
}
function q2(l) {
    const a = {
        totalRarity: 0,
        totalXp: 0,
        totalPackSize: 0,
        magicMonsters: 0,
        rareMonsters: 0,
        uniqueEffectiveness: 0,
        chestRarity: 0,
        rareChests: 0,
        modifierEffectiveness: 0,
        roomCount: 0,
        tier3Rooms: 0
    }
      , r = A0(l);
    for (const c of r) {
        if (!c.reachable || c.room === "path" || c.room === "empty")
            continue;
        a.roomCount++,
        parseInt(c.tier.replace("tier", "")) >= 3 && a.tier3Rooms++;
        const f = Fe[c.room]?.variants[c.tier]?.effects || [];
        for (const y of f) {
            const g = y.match(/(\d+)%/)
              , p = g ? parseInt(g[1]) : 0;
            (y.includes("item rarity") || y.includes("rarity of items")) && (a.totalRarity += p),
            (y.includes("experience") || y.includes("exp")) && (a.totalXp += p),
            (y.includes("Monster Packs") || y.includes("Pack size")) && (a.totalPackSize += p),
            y.includes("Magic Monsters") && (a.magicMonsters += p),
            y.includes("Rare Monsters") && !y.includes("Chest") && (a.rareMonsters += p),
            y.includes("Unique") && y.includes("effectiveness") && (a.uniqueEffectiveness += p),
            y.includes("Chest") && y.includes("rarity") && (a.chestRarity += p),
            y.includes("Rare Chests") && (a.rareChests += p),
            y.includes("Temple Mods") && (a.modifierEffectiveness += p)
        }
    }
    return a
}
function ht(l) {
    let a = M0(l);
    return a = P0(a),
    a = jy(a),
    a = U0(a),
    a
}
function U2() {
    const l = Ha()
      , a = Zu()
      , [r,c] = C.useState(!1)
      , [u,m] = C.useState( () => nf())
      , [f,y] = C.useState( () => {
        const ne = Fh();
        if (ne)
            return ht(ne);
        const ye = ey();
        return ht(ye || ty())
    }
    )
      , [g,p] = C.useState(null)
      , [b,x] = C.useState(!1)
      , [T,O] = C.useState(!1)
      , [k,M] = C.useState([])
      , [w,Y] = C.useState([])
      , [$,P] = C.useState(-1)
      , X = C.useRef(!1)
      , [J,Z] = C.useState(null)
      , z = C.useCallback(ne => {
        m(ne),
        br(ne)
    }
    , []);
    C.useEffect( () => {
        const ne = Fh();
        ne && (y(ht(ne)),
        c(!0),
        z(null),
        a("/planner", {
            replace: !0
        }))
    }
    , [l.key, z, a]),
    C.useEffect( () => {
        if (X.current) {
            X.current = !1;
            return
        }
        Y(ne => {
            const ye = ne.slice(0, $ + 1);
            return ye.push(_n(f)),
            ye.length > 50 && ye.shift(),
            ye
        }
        ),
        P(ne => Math.min(ne + 1, 49))
    }
    , [f]),
    C.useEffect( () => {
        if (r)
            return;
        const ne = setTimeout( () => {
            u ? _r(u, f) : Ph(f)
        }
        , 500);
        return () => clearTimeout(ne)
    }
    , [f, r, u]),
    C.useEffect( () => {
        if (!g) {
            M([]);
            return
        }
        if (g === "medallion") {
            const ye = [];
            f.forEach( (Se, ke) => {
                Se.forEach( (_e, De) => {
                    _e.room !== "empty" && _e.room !== "path" && !_e.hasMedallion && _e.tier !== "tier3" && ye.push({
                        x: De,
                        y: ke
                    })
                }
                )
            }
            ),
            M(ye);
            return
        }
        if (g === "sacrifice") {
            const ye = Hn(f, "altar_of_sacrifice");
            if (ye.length === 0 || ye[0].tier === "tier3") {
                M([]);
                return
            }
            const ke = E0(f).filter(_e => _e.room !== "altar_of_sacrifice");
            M(ke.map(_e => ({
                x: _e.x,
                y: _e.y
            })));
            return
        }
        if (g === "lock") {
            const ye = [];
            f.forEach( (Se, ke) => {
                Se.forEach( (_e, De) => {
                    _e.room !== "empty" && _e.room !== "path" && ye.push({
                        x: De,
                        y: ke
                    })
                }
                )
            }
            ),
            M(ye);
            return
        }
        if (g === "empty") {
            M([]);
            return
        }
        if (g === "altar_of_sacrifice" && Hn(f, "altar_of_sacrifice").length > 0) {
            M([]);
            return
        }
        const ne = k0(f, g, b, T);
        M(ne.map(ye => ye.position))
    }
    , [f, g, b, T]);
    const U = q2(f)
      , G = Hn(f, "altar_of_sacrifice")
      , Q = G.length > 0
      , ae = Q && G[0].tier === "tier3"
      , oe = C.useCallback(ne => {
        p(ne)
    }
    , [])
      , ie = C.useCallback(ne => {
        if (!g)
            return !1;
        if (g === "medallion") {
            const Se = f[ne.y]?.[ne.x];
            if (!Se || Se.room === "empty" || Se.room === "path" || Se.hasMedallion || Se.tier === "tier3")
                return !1;
            const ke = Wh(f, ne.x, ne.y);
            return ke !== f ? (ke[ne.y][ne.x] = {
                ...ke[ne.y][ne.x],
                hasMedallion: !0
            },
            y(ht(ke)),
            !0) : !1
        }
        if (g === "sacrifice") {
            const Se = f[ne.y]?.[ne.x];
            if (!Se || Se.room === "empty" || Se.room === "altar_of_sacrifice" || Nr(f, ne))
                return !1;
            const ke = Hn(f, "altar_of_sacrifice");
            if (ke.length === 0)
                return !1;
            const _e = ke[0]
              , De = parseInt(_e.tier.replace("tier", ""))
              , xt = Math.min(De + 1, 3)
              , Zt = `tier${xt}`;
            let it = Un(f, ne, "empty", "tier1", !1);
            if (it[ne.y][ne.x] = {
                ...it[ne.y][ne.x],
                isLocked: !1
            },
            xt > De) {
                it = Un(it, {
                    x: _e.x,
                    y: _e.y
                }, "altar_of_sacrifice", Zt, !0);
                const ra = Xe(it, {
                    x: _e.x,
                    y: _e.y
                });
                for (const We of ra)
                    if (We.room !== "empty" && We.room !== "path" && We.room !== "altar_of_sacrifice") {
                        const ca = parseInt(We.tier.replace("tier", ""))
                          , St = Math.min(ca + 1, 3)
                          , Bt = `tier${St}`;
                        St > ca && (it = Un(it, {
                            x: We.x,
                            y: We.y
                        }, We.room, Bt, !0))
                    }
            }
            return y(ht(it)),
            oe(null),
            !0
        }
        if (g === "lock") {
            const Se = f[ne.y]?.[ne.x];
            if (!Se || Se.room === "empty" || Se.room === "path")
                return !1;
            const ke = _n(f);
            return ke[ne.y][ne.x] = {
                ...ke[ne.y][ne.x],
                isLocked: !Se.isLocked
            },
            y(ht(ke)),
            !0
        }
        if (g === "altar_of_sacrifice" && Hn(f, "altar_of_sacrifice").length > 0)
            return !1;
        if (g === "architect") {
            const Se = Hn(f, "architect");
            if (Se.length > 0) {
                const _e = Se[0];
                if (_e.x === ne.x && _e.y === ne.y)
                    return !1;
                let De = Un(f, {
                    x: _e.x,
                    y: _e.y
                }, "empty", "tier1", !1);
                return De = Un(De, ne, "architect", "tier1", !1),
                De = ht(De),
                y(De),
                p(null),
                !0
            }
            if (!b && !es(f, ne, g, !1, T).valid)
                return !1;
            let ke = Un(f, ne, g, "tier1", !1);
            return ke = ht(ke),
            y(ke),
            p(null),
            !0
        }
        if (!b && !es(f, ne, g, !1, T).valid)
            return !1;
        let ye = Un(f, ne, g, "tier1", !1);
        return ye = ht(ye),
        y(ye),
        !0
    }
    , [f, g, b, T])
      , se = C.useCallback( (ne, ye) => {
        if (ye === "altar_of_sacrifice" && Hn(f, "altar_of_sacrifice").length > 0 || !b && !es(f, ne, ye, !1, T).valid)
            return !1;
        let Se = Un(f, ne, ye, "tier1", !1);
        return Se = ht(Se),
        y(Se),
        !0
    }
    , [f, b, T])
      , ee = C.useCallback(ne => {
        const ye = f[ne.y]?.[ne.x];
        if (!ye || ye.isLocked)
            return;
        let Se = Un(f, ne, "empty", "tier1", !1);
        Se = ht(Se),
        y(Se)
    }
    , [f])
      , j = C.useCallback(ne => {
        y(ht(ne))
    }
    , [])
      , H = C.useCallback( () => {
        x(ne => !ne)
    }
    , [])
      , E = C.useCallback( () => {
        O(ne => !ne)
    }
    , [])
      , B = C.useCallback( () => {
        const ne = ht(ty());
        y(ne),
        p(null),
        c(!1),
        z(null)
    }
    , [z])
      , le = C.useCallback( () => {
        const ne = R0(f);
        y(ht(ne))
    }
    , [f])
      , _ = C.useCallback( () => {
        $ > 0 && (X.current = !0,
        P(ne => ne - 1),
        y(ht(_n(w[$ - 1]))))
    }
    , [w, $])
      , A = C.useCallback( () => {
        $ < w.length - 1 && (X.current = !0,
        P(ne => ne + 1),
        y(ht(_n(w[$ + 1]))))
    }
    , [w, $])
      , K = C.useCallback( () => {
        Ph(f)
    }
    , [f])
      , W = C.useCallback( () => {
        const ne = ey();
        return ne ? (y(ht(ne)),
        !0) : !1
    }
    , [])
      , re = C.useCallback(async () => S2(f), [f])
      , fe = C.useCallback( () => {
        Z(_n(f))
    }
    , [f])
      , ce = C.useCallback( () => J ? (y(ht(_n(J))),
    !0) : !1, [J])
      , me = C.useCallback( () => {
        Z(null)
    }
    , [])
      , ge = C.useCallback(ne => {
        const ye = []
          , Se = ["path", "guardhouse", "commanders_chamber", "armoury", "spymasters_study", "bronzeworks", "dynamo", "workshop", "synthflesh_lab", "surgeons_ward", "chamber_of_souls", "thaumaturges_laboratory", "crimson_hall", "altar_of_sacrifice", "reward_room", "sealed_vault", "architect"];
        for (const ke of Se)
            es(f, ne, ke, b, T).valid && ye.push(ke);
        return ye
    }
    , [f, b, T])
      , Le = C.useCallback( () => {
        let ne = _n(f)
          , ye = 0;
        return f.forEach( (Se, ke) => {
            Se.forEach( (_e, De) => {
                if (_e.room !== "empty" && _e.room !== "path" && !_e.hasMedallion && _e.tier !== "tier3") {
                    const xt = Wh(ne, De, ke);
                    xt !== ne && (xt[ke][De] = {
                        ...xt[ke][De],
                        hasMedallion: !0
                    },
                    ne = xt,
                    ye++)
                }
            }
            )
        }
        ),
        ye > 0 && y(ht(ne)),
        ye
    }
    , [f])
      , dt = C.useCallback(ne => {
        const ye = f[ne.y]?.[ne.x];
        if (!ye || ye.room === "empty" || ye.room === "path")
            return !1;
        const Se = parseInt(ye.tier.replace("tier", ""));
        if (Se >= 3)
            return !1;
        const _e = `tier${Se + 1}`;
        let De = Un(f, ne, ye.room, _e, !1);
        De = ht(De);
        const Zt = De[ne.y][ne.x].tier !== _e;
        let it = Un(f, ne, ye.room, _e, Zt);
        return it = ht(it),
        y(it),
        !0
    }
    , [f])
      , ue = C.useCallback(ne => {
        const ye = f[ne.y]?.[ne.x];
        if (!ye || ye.room === "empty" || ye.room === "path")
            return !1;
        const Se = parseInt(ye.tier.replace("tier", ""));
        if (Se <= 1)
            return !1;
        const _e = `tier${Se - 1}`;
        let De = Un(f, ne, ye.room, _e, !1);
        De = ht(De);
        const Zt = De[ne.y][ne.x].tier !== _e;
        let it = Un(f, ne, ye.room, _e, Zt);
        return it = ht(it),
        y(it),
        !0
    }
    , [f])
      , Pe = C.useCallback( () => {
        c(!1)
    }
    , []);
    return {
        grid: f,
        selectedRoom: g,
        manualMode: b,
        russianMode: T,
        validPlacements: k,
        score: U,
        canUndo: $ > 0,
        canRedo: $ < w.length - 1,
        hasCheckpoint: J !== null,
        hasAltar: Q,
        sacrificeUsed: ae,
        selectRoom: oe,
        placeRoom: ie,
        placeRoomAt: se,
        clearCell: ee,
        applyGrid: j,
        toggleManualMode: H,
        toggleRussianMode: E,
        resetGrid: B,
        mirrorGrid: le,
        undo: _,
        redo: A,
        saveLayout: K,
        loadLayout: W,
        shareLayout: re,
        saveCheckpoint: fe,
        restoreCheckpoint: ce,
        clearCheckpoint: me,
        getValidRoomsForCell: ge,
        applyMedallionToAll: Le,
        upgradeTier: dt,
        downgradeTier: ue,
        activeSlot: u,
        isSharedLayout: r,
        clearSharedLayoutFlag: Pe,
        updateActiveSlot: z
    }
}
function Gy(l) {
    const a = bt.c(8);
    let r;
    a[0] !== l ? (r = w2(l),
    a[0] = l,
    a[1] = r) : r = a[1];
    const c = r;
    let u;
    if (a[2] !== c.colorMap || a[3] !== l) {
        const y = new Map;
        for (const [g,p] of c.colorMap) {
            const [b,x] = g.split(",").map(Number)
              , T = l[x]?.[b];
            if (!T || T.room === "empty")
                continue;
            const O = Fe[T.room]
              , k = T.tier ? parseInt(T.tier.replace("tier", ""), 10) : 0
              , M = {
                roomId: T.room,
                name: O?.name || T.room,
                tier: k,
                position: {
                    x: b,
                    y: x
                }
            };
            y.has(p) || y.set(p, {
                count: 0,
                rooms: []
            });
            const w = y.get(p);
            w.count = w.count + 1,
            w.rooms.push(M)
        }
        u = Array.from(y.entries()).sort($2).map(G2),
        a[2] = c.colorMap,
        a[3] = l,
        a[4] = u
    } else
        u = a[4];
    const m = u;
    let f;
    return a[5] !== c || a[6] !== m ? (f = {
        ...c,
        chainStats: m
    },
    a[5] = c,
    a[6] = m,
    a[7] = f) : f = a[7],
    f
}
function G2(l) {
    const [a,r] = l
      , {count: c, rooms: u} = r;
    return {
        color: a,
        count: c,
        rooms: u.sort(H2)
    }
}
function H2(l, a) {
    return a.tier - l.tier
}
function $2(l, a) {
    return l[0] - a[0]
}
function Y2(l, a, r, c) {
    const u = bt.c(8);
    let m;
    if (u[0] !== c || u[1] !== l || u[2] !== r || u[3] !== a) {
        e: {
            const f = new Set
              , y = new Set;
            if (!r || r === "medallion" || r === "sacrifice" || r === "lock") {
                m = {
                    mergeWarnings: f,
                    loopWarnings: y
                };
                break e
            }
            for (const p of a) {
                const b = `${p.x},${p.y}`
                  , x = qy(l, p, r, c);
                x.wouldMergeChains && f.add(b),
                x.wouldCreateLoop && y.add(b)
            }
            let g;
            u[5] !== y || u[6] !== f ? (g = {
                mergeWarnings: f,
                loopWarnings: y
            },
            u[5] = y,
            u[6] = f,
            u[7] = g) : g = u[7],
            m = g
        }
        u[0] = c,
        u[1] = l,
        u[2] = r,
        u[3] = a,
        u[4] = m
    } else
        m = u[4];
    return m
}
function V2(l, a) {
    const r = bt.c(3);
    let c;
    if (r[0] !== a || r[1] !== l) {
        c = new Map;
        for (let u = 0; u < l.length; u++)
            for (let m = 0; m < l[u].length; m++)
                if (l[u][m].room === "empty") {
                    const y = `${m},${u}`;
                    let g = a({
                        x: m,
                        y: u
                    });
                    g = g.filter(Q2);
                    const p = g.map(X2);
                    c.set(y, {
                        count: g.length,
                        rooms: p
                    })
                }
        r[0] = a,
        r[1] = l,
        r[2] = c
    } else
        c = r[2];
    return c
}
function X2(l) {
    return Fe[l]?.name || l
}
function Q2(l) {
    return l !== "architect" && l !== "reward_room" && l !== "path"
}
function K2(l) {
    const a = bt.c(2);
    let r;
    if (a[0] !== l) {
        r = new Set;
        for (let c = 0; c < l.length; c++)
            for (let u = 0; u < l[c].length; u++)
                if (l[c][u].room === "architect") {
                    const f = Xe(l, {
                        x: u,
                        y: c
                    });
                    for (const y of f)
                        y.room === "empty" && r.add(`${y.x},${y.y}`)
                }
        a[0] = l,
        a[1] = r
    } else
        r = a[1];
    return r
}
function Z2(l, a) {
    const r = bt.c(8);
    let c;
    e: {
        if (!a || a.room === "empty" || a.room === "path") {
            let y;
            r[0] === Symbol.for("react.memo_cache_sentinel") ? (y = {
                contributing: new Set,
                needed: new Set
            },
            r[0] = y) : y = r[0],
            c = y;
            break e
        }
        let u, m;
        if (r[1] !== l || r[2] !== a) {
            const y = Ey(l, a);
            u = new Set,
            m = new Set;
            for (const g of y.contributingRooms)
                u.add(`${g.x},${g.y}`);
            if (y.nextTierNeeds) {
                const g = Xe(l, {
                    x: a.x,
                    y: a.y
                });
                for (const p of g)
                    if (y.nextTierNeeds.needed.includes(p.room))
                        if (y.nextTierNeeds.minTier) {
                            const b = parseInt(p.tier.replace("tier", ""))
                              , x = parseInt(y.nextTierNeeds.minTier.replace("tier", ""));
                            b >= x && m.add(`${p.x},${p.y}`)
                        } else
                            m.add(`${p.x},${p.y}`)
            }
            r[1] = l,
            r[2] = a,
            r[3] = u,
            r[4] = m
        } else
            u = r[3],
            m = r[4];
        let f;
        r[5] !== u || r[6] !== m ? (f = {
            contributing: u,
            needed: m
        },
        r[5] = u,
        r[6] = m,
        r[7] = f) : f = r[7],
        c = f
    }
    return c
}
function J2(l, a) {
    const r = bt.c(3);
    let c;
    if (r[0] !== l || r[1] !== a) {
        c = new Set;
        const u = new Set(a.map(I2))
          , m = `${ft.x},${ft.y}`;
        for (let f = 0; f < l.length; f++)
            for (let y = 0; y < l[f].length; y++) {
                const g = l[f][y]
                  , p = `${y},${f}`;
                if (g.room === "empty" || !g.reachable || g.isLocked || u.has(p) || p === m || g.room === "path" || g.room === "architect")
                    continue;
                const b = Xe(l, {
                    x: y,
                    y: f
                });
                let x = 0;
                for (const T of b) {
                    const O = `${T.x},${T.y}`;
                    T.room === "empty" || !T.reachable || O !== m && Gn(g.room, T.room, {
                        x: g.x,
                        y: g.y
                    }, {
                        x: T.x,
                        y: T.y
                    }) && x++
                }
                x === 1 && !Nr(l, {
                    x: y,
                    y: f
                }) && c.add(p)
            }
        r[0] = l,
        r[1] = a,
        r[2] = c
    } else
        c = r[2];
    return c
}
function I2(l) {
    return `${l.x},${l.y}`
}
const W2 = "_tooltip_1oqfs_1"
  , F2 = "_header_1oqfs_15"
  , P2 = "_name_1oqfs_22"
  , ev = "_tier_1oqfs_27"
  , tv = "_effects_1oqfs_32"
  , nv = "_special_1oqfs_65"
  , av = "_section_1oqfs_122"
  , lv = "_sectionTitle_1oqfs_128"
  , iv = "_iconGrid_1oqfs_135"
  , ov = "_iconItem_1oqfs_142"
  , sv = "_roomIcon_1oqfs_146"
  , rv = "_roomIconFallback_1oqfs_164"
  , cv = "_pathIcon_1oqfs_186"
  , Ie = {
    tooltip: W2,
    header: F2,
    name: P2,
    tier: ev,
    effects: tv,
    special: nv,
    section: av,
    sectionTitle: lv,
    iconGrid: iv,
    iconItem: ov,
    roomIcon: sv,
    roomIconFallback: rv,
    pathIcon: cv
}
  , uv = ["dynamo", "synthflesh_lab", "surgeons_ward", "transcendent_barrack", "chamber_of_souls"]
  , fv = ["guardhouse", "transcendent_barrack", "legion_barrack", "commanders_chamber", "armoury", "bronzeworks"]
  , dv = ["crimson_hall", "sealed_vault", "altar_of_sacrifice"];
function mv(l) {
    return {
        path: ["path"],
        guardhouse: ["path", "commanders_chamber", "armoury", "synthflesh_lab", "spymasters_study"],
        transcendent_barrack: ["path", "commanders_chamber", "armoury", "synthflesh_lab"],
        legion_barrack: ["path", "commanders_chamber", "armoury", "spymasters_study"],
        commanders_chamber: ["path", "guardhouse", "transcendent_barrack"],
        armoury: ["path", "bronzeworks", "chamber_of_souls", "guardhouse", "transcendent_barrack", "legion_barrack"],
        spymasters_study: ["path", "guardhouse", "legion_barrack"],
        bronzeworks: ["path", "workshop", "armoury"],
        dynamo: ["path", "thaumaturges_laboratory", "altar_of_sacrifice"],
        workshop: ["path", "bronzeworks"],
        synthflesh_lab: ["path", "surgeons_ward", "guardhouse", "transcendent_barrack"],
        surgeons_ward: ["path", "synthflesh_lab"],
        chamber_of_souls: ["path", "thaumaturges_laboratory", "armoury"],
        thaumaturges_laboratory: ["path", "altar_of_sacrifice", "dynamo", "chamber_of_souls", "crimson_hall"],
        crimson_hall: ["path", "altar_of_sacrifice", "thaumaturges_laboratory"],
        altar_of_sacrifice: ["path", "dynamo", "crimson_hall", "thaumaturges_laboratory"],
        reward_room: [],
        sealed_vault: ["path"],
        architect: [],
        sacrifice_room: [],
        empty: []
    }[l] || []
}
function hv(l) {
    const a = [];
    return Object.entries(Fe).forEach( ([r,c]) => {
        const u = c.upgrades || {};
        Object.values(u).forEach(m => {
            m.rooms?.includes(l) && a.push(r),
            m.requiredAdjacent?.includes(l) && a.push(r)
        }
        )
    }
    ),
    l === "workshop" && a.push("bronzeworks"),
    l === "dynamo" && a.push("bronzeworks", "workshop", "synthflesh_lab", "transcendent_barrack"),
    l === "synthflesh_lab" && a.push("guardhouse", "transcendent_barrack"),
    l === "spymasters_study" && a.push("guardhouse", "legion_barrack"),
    [...new Set(a)]
}
function yv(l) {
    switch (l) {
    case "spymasters_study":
        return uv;
    case "workshop":
        return fv;
    case "thaumaturges_laboratory":
        return dv;
    default:
        return []
    }
}
function pv(l) {
    const a = Fe[l];
    if (!a)
        return [];
    const r = []
      , c = a.upgrades || {};
    return Object.values(c).forEach(u => {
        u.rooms && r.push(...u.rooms),
        u.requiredAdjacent && r.push(...u.requiredAdjacent)
    }
    ),
    l === "bronzeworks" && r.push("workshop", "dynamo"),
    l === "workshop" && r.push("dynamo"),
    l === "synthflesh_lab" && r.push("dynamo"),
    l === "transcendent_barrack" && r.push("synthflesh_lab", "dynamo"),
    l === "legion_barrack" && r.push("spymasters_study"),
    [...new Set(r)]
}
function af(l) {
    const a = bt.c(24)
      , {roomId: r, tier: c, x: u, y: m} = l
      , f = c === void 0 ? "tier1" : c
      , y = Fe[r]
      , g = C.useRef(null);
    let p;
    a[0] !== u || a[1] !== m ? (p = {
        x: u,
        y: m
    },
    a[0] = u,
    a[1] = m,
    a[2] = p) : p = a[2];
    const [b,x] = C.useState(p);
    let T, O;
    if (a[3] !== u || a[4] !== m ? (T = () => {
        if (!g.current)
            return;
        const w = g.current.getBoundingClientRect();
        let Y = u
          , $ = m;
        const P = m + w.height <= window.innerHeight - 96
          , X = m - w.height - 20 >= 16;
        !P && X ? $ = m - w.height - 20 : P || ($ = window.innerHeight - w.height - 16),
        Y + w.width > window.innerWidth - 16 && (Y = u - w.width - 20),
        Y < 16 && (Y = 16),
        $ < 16 && ($ = 16),
        x({
            x: Y,
            y: $
        })
    }
    ,
    O = [u, m],
    a[3] = u,
    a[4] = m,
    a[5] = T,
    a[6] = O) : (T = a[5],
    O = a[6]),
    C.useEffect(T, O),
    !y)
        return null;
    let k;
    if (a[7] !== b.x || a[8] !== b.y || a[9] !== y.name || a[10] !== y.variants || a[11] !== r || a[12] !== f) {
        const M = y.variants[f]?.effects || []
          , w = mv(r)
          , Y = hv(r)
          , $ = pv(r)
          , P = yv(r);
        let X;
        a[14] !== b.x || a[15] !== b.y ? (X = {
            left: b.x,
            top: b.y
        },
        a[14] = b.x,
        a[15] = b.y,
        a[16] = X) : X = a[16];
        let J;
        a[17] !== y.name ? (J = d.jsx("span", {
            className: Ie.name,
            children: y.name
        }),
        a[17] = y.name,
        a[18] = J) : J = a[18];
        const Z = S0[f];
        let z;
        a[19] !== Z ? (z = d.jsx("span", {
            className: Ie.tier,
            children: Z
        }),
        a[19] = Z,
        a[20] = z) : z = a[20];
        let U;
        a[21] !== J || a[22] !== z ? (U = d.jsxs("div", {
            className: Ie.header,
            children: [J, z]
        }),
        a[21] = J,
        a[22] = z,
        a[23] = U) : U = a[23],
        k = d.jsxs("div", {
            ref: g,
            className: Ie.tooltip,
            style: X,
            children: [U, M.length > 0 ? d.jsx("ul", {
                className: Ie.effects,
                children: M.map(xv)
            }) : d.jsx("div", {
                className: Ie.special,
                children: "No effects"
            }), P.length > 0 && d.jsxs("div", {
                className: Ie.section,
                children: [d.jsx("div", {
                    className: Ie.sectionTitle,
                    children: "Increases effects of:"
                }), d.jsx("div", {
                    className: Ie.iconGrid,
                    children: P.map(bv)
                })]
            }), w.length > 0 && d.jsxs("div", {
                className: Ie.section,
                children: [d.jsx("div", {
                    className: Ie.sectionTitle,
                    children: "Can connect to:"
                }), d.jsx("div", {
                    className: Ie.iconGrid,
                    children: w.map(_v)
                })]
            }), Y.length > 0 && d.jsxs("div", {
                className: Ie.section,
                children: [d.jsx("div", {
                    className: Ie.sectionTitle,
                    children: "Upgrades:"
                }), d.jsx("div", {
                    className: Ie.iconGrid,
                    children: Y.map(vv)
                })]
            }), $.length > 0 && d.jsxs("div", {
                className: Ie.section,
                children: [d.jsx("div", {
                    className: Ie.sectionTitle,
                    children: "Upgraded by:"
                }), d.jsx("div", {
                    className: Ie.iconGrid,
                    children: $.map(gv)
                })]
            })]
        }),
        a[7] = b.x,
        a[8] = b.y,
        a[9] = y.name,
        a[10] = y.variants,
        a[11] = r,
        a[12] = f,
        a[13] = k
    } else
        k = a[13];
    return k
}
function gv(l) {
    const a = Fe[l]
      , r = Ua(l);
    return d.jsx("div", {
        className: Ie.iconItem,
        children: r ? d.jsx("img", {
            src: r,
            alt: a.name,
            className: Ie.roomIcon,
            title: a.name
        }) : d.jsx("div", {
            className: Ie.roomIconFallback,
            style: {
                backgroundColor: a.color
            },
            title: a.name,
            children: a.shortName || a.name[0]
        })
    }, l)
}
function vv(l) {
    const a = Fe[l]
      , r = Ua(l);
    return d.jsx("div", {
        className: Ie.iconItem,
        children: r ? d.jsx("img", {
            src: r,
            alt: a.name,
            className: Ie.roomIcon,
            title: a.name
        }) : d.jsx("div", {
            className: Ie.roomIconFallback,
            style: {
                backgroundColor: a.color
            },
            title: a.name,
            children: a.shortName || a.name[0]
        })
    }, l)
}
function _v(l) {
    const a = Fe[l]
      , r = Ua(l)
      , c = l === "path";
    return d.jsx("div", {
        className: Ie.iconItem,
        children: r ? d.jsx("img", {
            src: r,
            alt: a.name,
            className: Ie.roomIcon,
            title: a.name
        }) : d.jsx("div", {
            className: `${Ie.roomIconFallback} ${c ? Ie.pathIcon : ""}`,
            style: {
                backgroundColor: a.color
            },
            title: a.name,
            children: c ? "🛤️" : a.shortName || a.name[0]
        })
    }, l)
}
function bv(l) {
    const a = Fe[l]
      , r = Ua(l);
    return d.jsx("div", {
        className: Ie.iconItem,
        children: r ? d.jsx("img", {
            src: r,
            alt: a.name,
            className: Ie.roomIcon,
            title: a.name
        }) : d.jsx("div", {
            className: Ie.roomIconFallback,
            style: {
                backgroundColor: a.color
            },
            title: a.name,
            children: a.shortName || a.name[0]
        })
    }, l)
}
function xv(l, a) {
    return d.jsx("li", {
        children: l
    }, a)
}
const Sv = "_wrapper_1idxq_2"
  , Cv = "_container_1idxq_13"
  , Tv = "_atziriTile_1idxq_20"
  , Nv = "_atziriIcon_1idxq_38"
  , jv = "_grid_1idxq_44"
  , Av = "_cell_1idxq_54"
  , Ev = "_connectionRight_1idxq_83"
  , Rv = "_connectionDown_1idxq_115"
  , Mv = "_connectionUp_1idxq_148"
  , wv = "_locked_1idxq_181"
  , zv = "_manualTier_1idxq_187"
  , kv = "_empty_1idxq_202"
  , Dv = "_valid_1idxq_212"
  , Lv = "_mergeWarning_1idxq_217"
  , Ov = "_mergeIcon_1idxq_226"
  , Bv = "_loopWarning_1idxq_243"
  , qv = "_loopIcon_1idxq_252"
  , Uv = "_selected_1idxq_299"
  , Gv = "_hovered_1idxq_304"
  , Hv = "_destabilizableEnd_1idxq_309"
  , $v = "_nonDestabilizable_1idxq_320"
  , Yv = "_architectAdjacent_1idxq_327"
  , Vv = "_cellContent_1idxq_338"
  , Xv = "_icon_1idxq_348"
  , Qv = "_pathDot_1idxq_360"
  , Kv = "_tier_1idxq_371"
  , Zv = "_medallion_1idxq_387"
  , Jv = "_lockIcon_1idxq_403"
  , Iv = "_userLocked_1idxq_418"
  , Wv = "_targetedRemoval_1idxq_424"
  , Fv = "_targetedProtected_1idxq_447"
  , Pv = "_placeableCount_1idxq_479"
  , Oe = {
    wrapper: Sv,
    container: Cv,
    atziriTile: Tv,
    atziriIcon: Nv,
    grid: jv,
    cell: Av,
    connectionRight: Ev,
    connectionDown: Rv,
    connectionUp: Mv,
    locked: wv,
    manualTier: zv,
    empty: kv,
    valid: Dv,
    mergeWarning: Lv,
    mergeIcon: Ov,
    loopWarning: Bv,
    loopIcon: qv,
    selected: Uv,
    hovered: Gv,
    destabilizableEnd: Hv,
    nonDestabilizable: $v,
    architectAdjacent: Yv,
    cellContent: Vv,
    icon: Xv,
    pathDot: Qv,
    tier: Kv,
    medallion: Zv,
    lockIcon: Jv,
    userLocked: Iv,
    targetedRemoval: Wv,
    targetedProtected: Fv,
    placeableCount: Pv
}
  , e_ = "/atziri-temple/icons/IconAtziri.webp"
  , t_ = "/atziri-temple/icons/MedallionLevelUpRoom.webp"
  , n_ = "/atziri-temple/icons/MedallionPreventDeletionOfRoom.webp";
function a_(l) {
    const a = bt.c(100)
      , {grid: r, validPlacements: c, selectedRoom: u, selectedCell: m, onCellClick: f, onCellRightClick: y, getValidRoomsForCell: g, onRoomWarningsChange: p, onChainStatsChange: b, pendingRemoval: x, onUpgradeTier: T, onDowngradeTier: O, protectedPositions: k, targetedRoom: M, isProtectedTarget: w, destabilizableRooms: Y} = l;
    let $;
    a[0] !== k ? ($ = k === void 0 ? [] : k,
    a[0] = k,
    a[1] = $) : $ = a[1];
    const P = $
      , X = M === void 0 ? null : M
      , J = w === void 0 ? !1 : w
      , Z = Y === void 0 ? null : Y
      , [z,U] = C.useState(null)
      , [G,Q] = C.useState(null)
      , [ae,oe] = C.useState(!1)
      , [ie,se] = C.useState(null)
      , [ee,j] = C.useState(null)
      , [H,E] = C.useState(null)
      , [B,le] = C.useState(!1);
    let _;
    a[2] !== c ? (_ = new Set(c.map(r_)),
    a[2] = c,
    a[3] = _) : _ = a[3];
    const A = _;
    let K;
    a[4] !== x ? (K = new Set((x || []).map(s_)),
    a[4] = x,
    a[5] = K) : K = a[5];
    const W = K
      , re = x && x.length > 0;
    let fe;
    a[6] !== Z ? (fe = new Set((Z || []).map(o_)),
    a[6] = Z,
    a[7] = fe) : fe = a[7];
    const ce = fe
      , me = Z !== null
      , {colorMap: ge, connectionMap: Le, branchPoints: dt, branchNodes: ue, chainStats: Pe} = Gy(r)
      , {mergeWarnings: ne, loopWarnings: ye} = Y2(r, c, u, ge)
      , Se = V2(r, g)
      , ke = K2(r)
      , _e = Z2(r, G)
      , De = J2(r, P);
    let xt, Zt;
    a[8] !== Pe || a[9] !== b ? (Zt = () => {
        b?.(Pe)
    }
    ,
    xt = [Pe, b],
    a[8] = Pe,
    a[9] = b,
    a[10] = xt,
    a[11] = Zt) : (xt = a[10],
    Zt = a[11]),
    C.useEffect(Zt, xt);
    let it, ra;
    a[12] === Symbol.for("react.memo_cache_sentinel") ? (it = () => {
        const Ue = Ne => {
            Ne.button === 2 && oe(!1)
        }
        ;
        return window.addEventListener("mouseup", Ue),
        () => window.removeEventListener("mouseup", Ue)
    }
    ,
    ra = [],
    a[12] = it,
    a[13] = ra) : (it = a[12],
    ra = a[13]),
    C.useEffect(it, ra);
    let We, ca;
    a[14] !== ge || a[15] !== g || a[16] !== r || a[17] !== p || a[18] !== m ? (We = () => {
        if (!p)
            return;
        if (!m) {
            p(null);
            return
        }
        const Ne = g(m).filter(i_);
        if (Ne.length === 0) {
            p(null);
            return
        }
        const Ce = new Map;
        for (const we of Ne) {
            const $e = qy(r, m, we, ge);
            Ce.set(we, {
                wouldMerge: $e.wouldMergeChains,
                wouldLoop: $e.wouldCreateLoop
            })
        }
        p(Ce)
    }
    ,
    ca = [m, r, ge, g, p],
    a[14] = ge,
    a[15] = g,
    a[16] = r,
    a[17] = p,
    a[18] = m,
    a[19] = We,
    a[20] = ca) : (We = a[19],
    ca = a[20]),
    C.useEffect(We, ca);
    let St;
    a[21] !== f || a[22] !== T ? (St = (Ue, Ne) => {
        if (Ue.shiftKey) {
            Ue.preventDefault(),
            Ue.stopPropagation(),
            T(Ne);
            return
        }
        Ue.stopPropagation(),
        f(Ne, Ue)
    }
    ,
    a[21] = f,
    a[22] = T,
    a[23] = St) : St = a[23];
    const Bt = St;
    let Ze;
    a[24] !== y || a[25] !== O ? (Ze = (Ue, Ne) => {
        if (Ue.preventDefault(),
        Ue.stopPropagation(),
        Ue.shiftKey) {
            O(Ne);
            return
        }
        y(Ne)
    }
    ,
    a[24] = y,
    a[25] = O,
    a[26] = Ze) : Ze = a[26];
    const tn = Ze;
    let Jt;
    a[27] === Symbol.for("react.memo_cache_sentinel") ? (Jt = Ue => {
        Ue.button === 2 && (Ue.preventDefault(),
        oe(!0))
    }
    ,
    a[27] = Jt) : Jt = a[27];
    const pl = Jt;
    let Ca;
    a[28] !== ae || a[29] !== y ? (Ca = (Ue, Ne, Ce, we) => {
        U(Ue),
        Q(Ne),
        se({
            x: we.clientX,
            y: we.clientY
        }),
        ae && Ne.room !== "empty" && y(Ce)
    }
    ,
    a[28] = ae,
    a[29] = y,
    a[30] = Ca) : Ca = a[30];
    const $t = Ca;
    let pt;
    a[31] !== G ? (pt = Ue => {
        G && se({
            x: Ue.clientX,
            y: Ue.clientY
        })
    }
    ,
    a[31] = G,
    a[32] = pt) : pt = a[32];
    const gt = pt;
    let vt;
    a[33] === Symbol.for("react.memo_cache_sentinel") ? (vt = () => {
        U(null),
        Q(null),
        se(null)
    }
    ,
    a[33] = vt) : vt = a[33];
    const ua = vt;
    let fa;
    a[34] !== r || a[35] !== y ? (fa = (Ue, Ne) => {
        const Ce = r[Ne.y]?.[Ne.x]
          , we = Ue.touches[0];
        if (E({
            x: we.clientX,
            y: we.clientY
        }),
        le(!1),
        Ce && Ce.room !== "empty" && !Ce.isLocked) {
            Ue.preventDefault();
            const $e = window.setTimeout( () => {
                y(Ne),
                j(null),
                E(null),
                le(!1)
            }
            , 500);
            j($e)
        } else if (Ce && Ce.room === "empty") {
            const $e = window.setTimeout( () => {
                le(!0)
            }
            , 150);
            j($e)
        }
    }
    ,
    a[34] = r,
    a[35] = y,
    a[36] = fa) : fa = a[36];
    const $a = fa;
    let nn;
    a[37] !== ee || a[38] !== B || a[39] !== H ? (nn = Ue => {
        if ((ee || !B) && H) {
            const Ne = Ue.touches[0]
              , Ce = Math.abs(Ne.clientX - H.x)
              , we = Math.abs(Ne.clientY - H.y);
            (Ce > 10 || we > 10) && (ee && (clearTimeout(ee),
            j(null)),
            E(null),
            le(!1))
        }
    }
    ,
    a[37] = ee,
    a[38] = B,
    a[39] = H,
    a[40] = nn) : nn = a[40];
    const bn = nn;
    let an;
    a[41] !== r || a[42] !== Bt || a[43] !== ee || a[44] !== B ? (an = (Ue, Ne) => {
        const Ce = r[Ne.y]?.[Ne.x];
        ee && (clearTimeout(ee),
        j(null)),
        Ce && Ce.room === "empty" ? B && Bt({}, Ne) : Bt({}, Ne),
        E(null),
        le(!1)
    }
    ,
    a[41] = r,
    a[42] = Bt,
    a[43] = ee,
    a[44] = B,
    a[45] = an) : an = a[45];
    const _t = an;
    let ln;
    a[46] !== ee ? (ln = () => {
        ee && (clearTimeout(ee),
        j(null)),
        E(null),
        le(!1)
    }
    ,
    a[46] = ee,
    a[47] = ln) : ln = a[47];
    const xn = ln;
    let da, ma;
    a[48] !== ee ? (da = () => () => {
        ee && clearTimeout(ee)
    }
    ,
    ma = [ee],
    a[48] = ee,
    a[49] = da,
    a[50] = ma) : (da = a[49],
    ma = a[50]),
    C.useEffect(da, ma);
    const Vn = `${Oe.wrapper} ${ae ? Oe.erasingWrapper : ""}`;
    let on;
    a[51] === Symbol.for("react.memo_cache_sentinel") ? (on = d.jsx("img", {
        src: e_,
        alt: "Atziri",
        className: Oe.atziriIcon
    }),
    a[51] = on) : on = a[51];
    let Sn;
    a[52] !== r[0]?.[4]?.room ? (Sn = r[0]?.[4]?.room !== "empty" && d.jsx("span", {
        className: Oe.connectionDown
    }),
    a[52] = r[0]?.[4]?.room,
    a[53] = Sn) : Sn = a[53];
    let Cn;
    a[54] !== Sn ? (Cn = d.jsxs("div", {
        className: Oe.atziriTile,
        title: "Atziri",
        children: [on, Sn]
    }),
    a[54] = Sn,
    a[55] = Cn) : Cn = a[55];
    let sn;
    a[56] !== ke || a[57] !== ue || a[58] !== dt || a[59] !== ge || a[60] !== Le || a[61] !== De || a[62] !== ce || a[63] !== r || a[64] !== $t || a[65] !== gt || a[66] !== Bt || a[67] !== tn || a[68] !== xn || a[69] !== _t || a[70] !== bn || a[71] !== $a || a[72] !== re || a[73] !== z || a[74] !== me || a[75] !== J || a[76] !== ye || a[77] !== ne || a[78] !== x || a[79] !== W || a[80] !== Se || a[81] !== m?.x || a[82] !== m?.y || a[83] !== u || a[84] !== X || a[85] !== _e || a[86] !== A ? (sn = r.map( (Ue, Ne) => Ue.map( (Ce, we) => {
        const $e = `${we},${Ne}`
          , Ta = Fe[Ce.room]
          , gl = Ua(Ce.room, Ce.tier)
          , cn = Ce.room === "empty"
          , Na = Ce.room === "path"
          , Qn = A.has($e) && u
          , Ya = z === $e
          , Nn = m?.x === we && m?.y === Ne
          , Kn = Ce.isLocked
          , Zn = Ce.isLocked && Ce.room !== "path"
          , jn = X && X.x === we && X.y === Ne
          , st = W.has($e)
          , ja = !cn && !Na ? x0[Ce.tier] : ""
          , vl = ge.get($e)
          , un = Le.get($e)
          , It = ne.has($e)
          , Jn = ye.has($e)
          , An = dt.get($e)
          , In = Se.get($e)
          , Aa = _e.contributing.has($e)
          , En = _e.needed.has($e)
          , Rn = ue.has($e)
          , qt = An && An.length > 1
          , Ut = ke.has($e)
          , Va = !re && De.has($e)
          , ti = me && !cn && !ce.has($e)
          , Xa = [Oe.cell, cn ? Oe.empty : "", !re && Qn ? Oe.valid : "", Ya ? Oe.hovered : "", Nn ? Oe.selected : "", Kn ? Oe.locked : "", Zn ? Oe.userLocked : "", !re && It ? Oe.mergeWarning : "", !re && Jn ? Oe.loopWarning : "", st ? Oe.pendingRemoval : "", jn ? J ? Oe.targetedProtected : Oe.targetedRemoval : "", Aa ? Oe.contributing : "", En ? Oe.needed : "", Rn ? Oe.branchNode : "", qt ? Oe.branchPoint : "", Ut ? Oe.architectAdjacent : "", Ce.manualTier ? Oe.manualTier : "", Va ? Oe.destabilizableEnd : "", ti ? Oe.nonDestabilizable : ""].filter(Boolean).join(" ");
        return d.jsxs("div", {
            className: Xa,
            "data-path-color": vl,
            onClick: zt => Bt(zt, {
                x: we,
                y: Ne
            }),
            onContextMenu: zt => tn(zt, {
                x: we,
                y: Ne
            }),
            onMouseEnter: zt => $t($e, Ce, {
                x: we,
                y: Ne
            }, zt),
            onMouseMove: gt,
            onMouseLeave: ua,
            onTouchStart: zt => $a(zt, {
                x: we,
                y: Ne
            }),
            onTouchMove: bn,
            onTouchEnd: zt => _t(zt, {
                x: we,
                y: Ne
            }),
            onTouchCancel: xn,
            title: c_(we, Ne, Ce, Ta, It, Jn, An, In, cn, Na, r),
            children: [we === 4 && Ne === 0 && !cn && d.jsx("span", {
                className: Oe.connectionUp
            }), un?.right && d.jsx("span", {
                className: Oe.connectionRight
            }), un?.down && d.jsx("span", {
                className: Oe.connectionDown
            }), !x && It && d.jsx("span", {
                className: Oe.mergeIcon,
                children: "🔴"
            }), !x && Jn && !It && d.jsx("span", {
                className: Oe.loopIcon,
                children: "🟡"
            }), d.jsxs("div", {
                className: Oe.cellContent,
                children: [gl && !cn && d.jsx("img", {
                    src: gl,
                    alt: "",
                    className: Oe.icon
                }), Na && d.jsx("div", {
                    className: Oe.pathDot
                }), cn && In && In.count > 0 && d.jsx("span", {
                    className: Oe.placeableCount,
                    children: In.count
                }), ja && d.jsx("span", {
                    className: Oe.tier,
                    children: ja
                }), Ce.hasMedallion && d.jsx("img", {
                    src: t_,
                    alt: "Medallion",
                    className: Oe.medallion
                }), Ce.isLocked && Ce.room !== "path" && d.jsx("img", {
                    src: n_,
                    alt: "Lock",
                    className: Oe.lockIcon
                })]
            })]
        }, $e)
    }
    )),
    a[56] = ke,
    a[57] = ue,
    a[58] = dt,
    a[59] = ge,
    a[60] = Le,
    a[61] = De,
    a[62] = ce,
    a[63] = r,
    a[64] = $t,
    a[65] = gt,
    a[66] = Bt,
    a[67] = tn,
    a[68] = xn,
    a[69] = _t,
    a[70] = bn,
    a[71] = $a,
    a[72] = re,
    a[73] = z,
    a[74] = me,
    a[75] = J,
    a[76] = ye,
    a[77] = ne,
    a[78] = x,
    a[79] = W,
    a[80] = Se,
    a[81] = m?.x,
    a[82] = m?.y,
    a[83] = u,
    a[84] = X,
    a[85] = _e,
    a[86] = A,
    a[87] = sn) : sn = a[87];
    let Tn;
    a[88] !== sn ? (Tn = d.jsx("div", {
        className: Oe.grid,
        children: sn
    }),
    a[88] = sn,
    a[89] = Tn) : Tn = a[89];
    let Ft;
    a[90] !== Cn || a[91] !== Tn ? (Ft = d.jsxs("div", {
        className: Oe.container,
        children: [Cn, Tn]
    }),
    a[90] = Cn,
    a[91] = Tn,
    a[92] = Ft) : Ft = a[92];
    let rn;
    a[93] !== G || a[94] !== ie ? (rn = G && ie && G.room !== "empty" && G.room !== "path" && ef.createPortal(d.jsx(af, {
        roomId: G.room,
        tier: G.tier,
        x: ie.x + 15,
        y: ie.y + 15
    }), document.body),
    a[93] = G,
    a[94] = ie,
    a[95] = rn) : rn = a[95];
    let Xn;
    return a[96] !== Vn || a[97] !== Ft || a[98] !== rn ? (Xn = d.jsxs("div", {
        className: Vn,
        onMouseDown: pl,
        onContextMenu: l_,
        children: [Ft, rn]
    }),
    a[96] = Vn,
    a[97] = Ft,
    a[98] = rn,
    a[99] = Xn) : Xn = a[99],
    Xn
}
function l_(l) {
    return l.preventDefault()
}
function i_(l) {
    return l !== "architect" && l !== "reward_room" && l !== "path"
}
function o_(l) {
    return `${l.x},${l.y}`
}
function s_(l) {
    return `${l.x},${l.y}`
}
function r_(l) {
    return `${l.x},${l.y}`
}
function c_(l, a, r, c, u, m, f, y, g, p, b) {
    let x = `(${l}, ${a})${c?.name ? ` - ${c.name}` : ""}`;
    if (u && (x += " 🔴 Will merge chains!"),
    m && (x += " 🟡 Will create loop!"),
    f && (x += ` 🔀 Branch: ${f.join("/")}`),
    y && (x += `
${y.count} rooms can be placed:
${y.rooms.join(", ")}`),
    !g && !p && r.room !== "architect") {
        const T = Ey(b, r);
        if (T.specialInfo)
            x += `

${T.specialInfo}`;
        else {
            if (T.contributingRooms.length > 0) {
                const O = T.contributingRooms.map(k => {
                    const M = b[k.y]?.[k.x];
                    return M ? Fe[M.room]?.name || M.room : ""
                }
                ).filter(Boolean);
                x += `

🟢 Способствующие: ${O.join(", ")}`
            }
            if (T.nextTierNeeds) {
                const O = T.nextTierNeeds.needed.map(k => Fe[k]?.name || k).join(" or ");
                x += `
🟠 Для повышения уровня нужно: ${O}`,
                T.nextTierNeeds.count && T.nextTierNeeds.count > 1 && (x += ` (${T.nextTierNeeds.count} more)`),
                T.nextTierNeeds.minTier && (x += ` (Tier ${T.nextTierNeeds.minTier.replace("tier", "")}+)`)
            }
        }
    }
    return x
}
const u_ = "_palette_1q97v_1"
  , f_ = "_grid_1q97v_7"
  , d_ = "_tools_1q97v_14"
  , m_ = "_roomBtn_1q97v_22"
  , h_ = "_selected_1q97v_45"
  , y_ = "_icon_1q97v_50"
  , p_ = "_placeholder_1q97v_56"
  , wt = {
    palette: u_,
    grid: f_,
    tools: d_,
    roomBtn: m_,
    selected: h_,
    icon: y_,
    placeholder: p_
}
  , g_ = "/atziri-temple/icons/IconSacrificeRoom.webp"
  , ly = "/atziri-temple/icons/MedallionLevelUpRoom.webp"
  , v_ = ["reward_room", "architect", "path"];
function __(l) {
    const a = bt.c(69)
      , {selectedRoom: r, onSelectRoom: c, hasAltar: u, sacrificeUsed: m, onApplyMedallionToAll: f} = l
      , y = u === void 0 ? !1 : u
      , g = m === void 0 ? !1 : m
      , [p,b] = C.useState(null);
    let x;
    a[0] === Symbol.for("react.memo_cache_sentinel") ? (x = {
        x: 0,
        y: 0
    },
    a[0] = x) : x = a[0];
    const [T,O] = C.useState(x);
    let k, M, w, Y;
    if (a[1] !== y || a[2] !== c || a[3] !== r) {
        let A;
        a[8] !== y ? (A = Le => Le !== "empty" && !v_.includes(Le) && !(y && Le === "altar_of_sacrifice"),
        a[8] = y,
        a[9] = A) : A = a[9];
        const K = tf.filter(A);
        let W;
        a[10] === Symbol.for("react.memo_cache_sentinel") ? (W = (Le, dt) => {
            const ue = dt.currentTarget.getBoundingClientRect();
            b(Le),
            O({
                x: ue.right + 10,
                y: ue.top
            })
        }
        ,
        a[10] = W) : W = a[10];
        const re = W;
        let fe;
        a[11] === Symbol.for("react.memo_cache_sentinel") ? (fe = () => {
            b(null)
        }
        ,
        a[11] = fe) : fe = a[11];
        const ce = fe;
        let me;
        a[12] !== c || a[13] !== r ? (me = Le => {
            const dt = Fe[Le];
            if (!dt)
                return null;
            const ue = Ua(Le)
              , Pe = r === Le
              , ne = [wt.roomBtn, Pe ? wt.selected : ""].filter(Boolean).join(" ");
            return d.jsx("button", {
                className: ne,
                onClick: () => c(Pe ? null : Le),
                onMouseEnter: ye => re(Le, ye),
                onMouseLeave: ce,
                children: ue ? d.jsx("img", {
                    src: ue,
                    alt: "",
                    className: wt.icon
                }) : d.jsx("div", {
                    className: wt.placeholder,
                    style: {
                        background: dt.color
                    }
                })
            }, Le)
        }
        ,
        a[12] = c,
        a[13] = r,
        a[14] = me) : me = a[14],
        k = me,
        Y = wt.palette,
        M = wt.grid;
        let ge;
        a[15] !== k ? (ge = Le => k(Le),
        a[15] = k,
        a[16] = ge) : ge = a[16],
        w = K.map(ge),
        a[1] = y,
        a[2] = c,
        a[3] = r,
        a[4] = k,
        a[5] = M,
        a[6] = w,
        a[7] = Y
    } else
        k = a[4],
        M = a[5],
        w = a[6],
        Y = a[7];
    let $;
    a[17] !== M || a[18] !== w ? ($ = d.jsx("div", {
        className: M,
        children: w
    }),
    a[17] = M,
    a[18] = w,
    a[19] = $) : $ = a[19];
    const P = `${wt.roomBtn} ${r === "medallion" ? wt.selected : ""}`;
    let X;
    a[20] !== c || a[21] !== r ? (X = () => c(r === "medallion" ? null : "medallion"),
    a[20] = c,
    a[21] = r,
    a[22] = X) : X = a[22];
    let J;
    a[23] === Symbol.for("react.memo_cache_sentinel") ? (J = d.jsx("img", {
        src: ly,
        alt: "Медальон",
        className: wt.icon
    }),
    a[23] = J) : J = a[23];
    let Z;
    a[24] !== P || a[25] !== X ? (Z = d.jsx("button", {
        className: P,
        onClick: X,
        title: "Медальон +1 уровень (только для одной комнаты)",
        children: J
    }),
    a[24] = P,
    a[25] = X,
    a[26] = Z) : Z = a[26];
    let z;
    a[27] !== f ? (z = f && d.jsxs("button", {
        className: wt.roomBtn,
        onClick: A => {
            A.stopPropagation(),
            f()
        }
        ,
        title: "Применение медальона для всех комнат",
        children: [d.jsx("img", {
            src: ly,
            alt: "Медальон для всех комнат",
            className: wt.icon
        }), d.jsx("span", {
            style: {
                position: "absolute",
                bottom: "2px",
                right: "2px",
                fontSize: "10px",
                fontWeight: "bold",
                color: "#ffd700",
                textShadow: "0 0 3px #000"
            },
            children: "ВСЕ"
        })]
    }),
    a[27] = f,
    a[28] = z) : z = a[28];
    let U;
    a[29] !== y || a[30] !== c || a[31] !== g || a[32] !== r ? (U = y && !g && d.jsx("button", {
        className: `${wt.roomBtn} ${r === "sacrifice" ? wt.selected : ""}`,
        onClick: () => c(r === "sacrifice" ? null : "sacrifice"),
        title: "Жертвоприношение: Удалите тупиковую комнату или дорожку, чтобы улучшить Алтарь Жертвоприношения (один раз за использование)",
        children: d.jsx("img", {
            src: g_,
            alt: "Sacrifice",
            className: wt.icon
        })
    }),
    a[29] = y,
    a[30] = c,
    a[31] = g,
    a[32] = r,
    a[33] = U) : U = a[33];
    const G = `${wt.roomBtn} ${r === "lock" ? wt.selected : ""}`;
    let Q;
    a[34] !== c || a[35] !== r ? (Q = () => c(r === "lock" ? null : "lock"),
    a[34] = c,
    a[35] = r,
    a[36] = Q) : Q = a[36];
    let ae;
    a[37] === Symbol.for("react.memo_cache_sentinel") ? (ae = d.jsx("img", {
        src: "/atziri-temple/icons/MedallionPreventDeletionOfRoom.webp",
        alt: "Замок",
        className: wt.icon
    }),
    a[37] = ae) : ae = a[37];
    let oe;
    a[38] !== G || a[39] !== Q ? (oe = d.jsx("button", {
        className: G,
        onClick: Q,
        title: "Замок: Защищает от дестабилизации",
        children: ae
    }),
    a[38] = G,
    a[39] = Q,
    a[40] = oe) : oe = a[40];
    const ie = `${wt.roomBtn} ${r === "path" ? wt.selected : ""}`;
    let se;
    a[41] !== c || a[42] !== r ? (se = () => c(r === "path" ? null : "path"),
    a[41] = c,
    a[42] = r,
    a[43] = se) : se = a[43];
    let ee;
    a[44] !== ie || a[45] !== se ? (ee = d.jsx("button", {
        className: ie,
        onClick: se,
        title: "Дорожка: соединяет комнаты",
        children: "🛤️"
    }),
    a[44] = ie,
    a[45] = se,
    a[46] = ee) : ee = a[46];
    let j;
    a[47] !== k ? (j = k("reward_room"),
    a[47] = k,
    a[48] = j) : j = a[48];
    let H;
    a[49] !== k ? (H = k("architect"),
    a[49] = k,
    a[50] = H) : H = a[50];
    let E;
    a[51] !== Z || a[52] !== z || a[53] !== U || a[54] !== oe || a[55] !== ee || a[56] !== j || a[57] !== H ? (E = d.jsxs("div", {
        className: wt.tools,
        children: [Z, z, U, oe, ee, j, H]
    }),
    a[51] = Z,
    a[52] = z,
    a[53] = U,
    a[54] = oe,
    a[55] = ee,
    a[56] = j,
    a[57] = H,
    a[58] = E) : E = a[58];
    let B;
    a[59] !== E || a[60] !== Y || a[61] !== $ ? (B = d.jsxs("div", {
        className: Y,
        children: [$, E]
    }),
    a[59] = E,
    a[60] = Y,
    a[61] = $,
    a[62] = B) : B = a[62];
    let le;
    a[63] !== p || a[64] !== T ? (le = p && ef.createPortal(d.jsx(af, {
        roomId: p,
        tier: "tier1",
        x: T.x,
        y: T.y
    }), document.body),
    a[63] = p,
    a[64] = T,
    a[65] = le) : le = a[65];
    let _;
    return a[66] !== B || a[67] !== le ? (_ = d.jsxs(d.Fragment, {
        children: [B, le]
    }),
    a[66] = B,
    a[67] = le,
    a[68] = _) : _ = a[68],
    _
}
const b_ = "_backdrop_1eafd_1"
  , x_ = "_popover_1eafd_7"
  , S_ = "_header_1eafd_32"
  , C_ = "_title_1eafd_41"
  , T_ = "_closeBtn_1eafd_49"
  , N_ = "_grid_1eafd_69"
  , j_ = "_roomBtn_1eafd_75"
  , A_ = "_icon_1eafd_101"
  , E_ = "_placeholder_1eafd_107"
  , R_ = "_mergeWarning_1eafd_114"
  , M_ = "_loopWarning_1eafd_123"
  , w_ = "_warningIcon_1eafd_132"
  , z_ = "_hotkeyBadge_1eafd_141"
  , k_ = "_chainGroups_1eafd_163"
  , D_ = "_chainGroup_1eafd_163"
  , L_ = "_chainHeader_1eafd_180"
  , O_ = "_chainLabel_1eafd_186"
  , B_ = "_chainDot_1eafd_195"
  , q_ = "_chainDirection_1eafd_203"
  , U_ = "_mergeLabel_1eafd_208"
  , G_ = "_hint_1eafd_213"
  , ut = {
    backdrop: b_,
    popover: x_,
    header: S_,
    title: C_,
    closeBtn: T_,
    grid: N_,
    roomBtn: j_,
    icon: A_,
    placeholder: E_,
    mergeWarning: R_,
    loopWarning: M_,
    warningIcon: w_,
    hotkeyBadge: z_,
    chainGroups: k_,
    chainGroup: D_,
    chainHeader: L_,
    chainLabel: O_,
    chainDot: B_,
    chainDirection: q_,
    mergeLabel: U_,
    hint: G_
}
  , iy = {
    0: "#2a7a4a",
    3: "#8a4a2a",
    6: "#8a8a2a",
    9: "#4a4a8a",
    5: "#5a8a45",
    11: "#458a65",
    10: "#9a6050",
    2: "#4565aa",
    4: "#7a459a",
    1: "#8a2a4a",
    7: "#2a8a8a",
    8: "#8a2a8a"
};
function H_({rooms: l, anchorPosition: a, onSelectRoom: r, onClose: c, roomWarnings: u, grid: m, cellPosition: f, colorMap: y}) {
    const g = C.useRef(null)
      , [p,b] = C.useState(a)
      , [x,T] = C.useState(null)
      , [O,k] = C.useState({
        x: 0,
        y: 0
    })
      , M = C.useMemo( () => {
        if (!m || !f || !y)
            return new Map;
        const U = new Map
          , G = `${ft.x},${ft.y}`
          , Q = Xe(m, f);
        for (const ae of l) {
            const oe = [];
            for (const ie of Q) {
                const se = `${ie.x},${ie.y}`;
                if (se === G || ie.room === "empty" || !ie.reachable || !Gn(ae, ie.room, f, {
                    x: ie.x,
                    y: ie.y
                }))
                    continue;
                const ee = y.get(se);
                if (ee !== void 0) {
                    const j = ie.x - f.x
                      , H = ie.y - f.y;
                    let E = "";
                    j === 1 ? E = "→" : j === -1 ? E = "←" : H === 1 ? E = "↓" : H === -1 && (E = "↑"),
                    oe.some(B => B.chainColor === ee) || oe.push({
                        chainColor: ee,
                        fromDirection: E
                    })
                }
            }
            U.set(ae, oe)
        }
        return U
    }
    , [m, f, y, l])
      , w = C.useMemo( () => {
        const U = new Map;
        for (const G of l) {
            const Q = M.get(G) || []
              , ae = Q.length === 0 ? "none" : Q.map(oe => oe.chainColor).sort( (oe, ie) => oe - ie).join(",");
            U.has(ae) || U.set(ae, {
                chains: Q,
                rooms: []
            }),
            U.get(ae).rooms.push(G)
        }
        return Array.from(U.entries()).sort( (G, Q) => {
            const ae = G[1].chains.length
              , oe = Q[1].chains.length;
            return ae === 0 ? 1 : oe === 0 ? -1 : ae > 1 && oe === 1 ? 1 : ae === 1 && oe > 1 ? -1 : (G[1].chains[0]?.chainColor || 0) - (Q[1].chains[0]?.chainColor || 0)
        }
        )
    }
    , [l, M])
      , Y = C.useMemo( () => w.flatMap( ([,{rooms: U}]) => U), [w]);
    C.useEffect( () => {
        if (!g.current)
            return;
        const G = g.current.getBoundingClientRect()
          , Q = 16
          , ae = 30
          , oe = 80;
        let ie = a.x
          , se = a.y;
        const ee = se + G.height <= window.innerHeight - Q - oe
          , j = a.y - G.height - ae >= Q;
        !ee && j ? se = a.y - G.height - ae : ee || (se = window.innerHeight - G.height - Q),
        ie + G.width > window.innerWidth - Q && (ie = a.x - G.width - 20),
        ie < Q && (ie = Q),
        se < Q && (se = Q),
        b({
            x: ie,
            y: se
        })
    }
    , [a]),
    C.useEffect( () => {
        const U = G => {
            if (G.key === "Escape") {
                c();
                return
            }
            if (G.key >= "1" && G.key <= "9") {
                const Q = parseInt(G.key, 10) - 1;
                Q < Y.length && (G.preventDefault(),
                r(Y[Q]))
            }
        }
        ;
        return window.addEventListener("keydown", U),
        () => window.removeEventListener("keydown", U)
    }
    , [Y, r, c]);
    const $ = C.useCallback(U => {
        U.target === U.currentTarget && c()
    }
    , [c])
      , P = (U, G) => {
        const Q = G.currentTarget.getBoundingClientRect();
        T(U),
        k({
            x: Q.right + 10,
            y: Q.top
        })
    }
      , X = () => {
        T(null)
    }
      , J = (U, G) => {
        const Q = Fe[U];
        if (!Q)
            return null;
        const ae = Ua(U)
          , oe = u?.get(U)
          , ie = oe?.wouldMerge ?? !1
          , se = oe?.wouldLoop ?? !1
          , ee = G < 9 ? G + 1 : null
          , j = [ut.roomBtn, ie ? ut.mergeWarning : "", se && !ie ? ut.loopWarning : ""].filter(Boolean).join(" ")
          , H = ie ? " 🔴 Will merge chains!" : se ? " 🟡 Will create loop!" : ""
          , E = ee ? ` [${ee}]` : "";
        return d.jsxs("button", {
            className: j,
            onClick: () => r(U),
            onMouseEnter: B => P(U, B),
            onMouseLeave: X,
            title: `${Q.name}${H}${E}`,
            children: [ae ? d.jsx("img", {
                src: ae,
                alt: "",
                className: ut.icon
            }) : d.jsx("div", {
                className: ut.placeholder,
                style: {
                    background: Q.color
                }
            }), ee && d.jsx("span", {
                className: ut.hotkeyBadge,
                children: ee
            }), ie && d.jsx("span", {
                className: ut.warningIcon,
                children: "🔴"
            }), se && !ie && d.jsx("span", {
                className: ut.warningIcon,
                children: "🟡"
            })]
        }, U)
    }
      , Z = U => U.length === 0 ? d.jsx("span", {
        className: ut.chainLabel,
        children: "New Chain"
    }) : U.length > 1 ? d.jsxs("span", {
        className: ut.chainLabel,
        children: [d.jsx("span", {
            className: ut.mergeLabel,
            children: "⚠️ Merge"
        }), U.map( (G, Q) => d.jsx("span", {
            className: ut.chainDot,
            style: {
                background: iy[G.chainColor] || "#666"
            },
            title: `Chain ${G.chainColor} ${G.fromDirection}`
        }, Q))]
    }) : d.jsxs("span", {
        className: ut.chainLabel,
        children: [d.jsx("span", {
            className: ut.chainDot,
            style: {
                background: iy[U[0].chainColor] || "#666"
            }
        }), d.jsx("span", {
            className: ut.chainDirection,
            children: U[0].fromDirection
        })]
    });
    if (l.length === 0)
        return null;
    let z = 0;
    return d.jsxs(d.Fragment, {
        children: [d.jsx("div", {
            className: ut.backdrop,
            onClick: $,
            children: d.jsxs("div", {
                ref: g,
                className: ut.popover,
                style: {
                    left: p.x,
                    top: p.y
                },
                onClick: U => U.stopPropagation(),
                children: [d.jsxs("div", {
                    className: ut.header,
                    children: [d.jsx("span", {
                        className: ut.title,
                        children: "Place Room"
                    }), d.jsx("button", {
                        className: ut.closeBtn,
                        onClick: c,
                        children: "✕"
                    })]
                }), d.jsx("div", {
                    className: ut.chainGroups,
                    children: w.map( ([U,{chains: G, rooms: Q}]) => d.jsxs("div", {
                        className: ut.chainGroup,
                        children: [d.jsx("div", {
                            className: ut.chainHeader,
                            children: Z(G)
                        }), d.jsx("div", {
                            className: ut.grid,
                            children: Q.map(ae => {
                                const oe = z++;
                                return J(ae, oe)
                            }
                            )
                        })]
                    }, U))
                }), d.jsxs("div", {
                    className: ut.hint,
                    children: ["Press ", d.jsx("kbd", {
                        children: "1"
                    }), "-", d.jsx("kbd", {
                        children: "9"
                    }), " or click • ", d.jsx("kbd", {
                        children: "Esc"
                    }), " to close"]
                })]
            })
        }), x && ef.createPortal(d.jsx(af, {
            roomId: x,
            tier: "tier1",
            x: O.x,
            y: O.y
        }), document.body)]
    })
}
const $_ = "_panel_q5qym_1"
  , Y_ = "_detailedToggle_q5qym_8"
  , V_ = "_toggleLabel_q5qym_15"
  , X_ = "_toggleCheckbox_q5qym_31"
  , Q_ = "_toggleText_q5qym_38"
  , K_ = "_section_q5qym_46"
  , Z_ = "_sectionTitle_q5qym_52"
  , J_ = "_effectRow_q5qym_60"
  , I_ = "_effectMain_q5qym_72"
  , W_ = "_effectName_q5qym_94"
  , F_ = "_effectVal_q5qym_100"
  , P_ = "_boosted_q5qym_107"
  , eb = "_diminished_q5qym_111"
  , tb = "_drIndicator_q5qym_115"
  , nb = "_drBadge_q5qym_122"
  , ab = "_breakdown_q5qym_135"
  , lb = "_breakdownLine_q5qym_144"
  , ib = "_totalLine_q5qym_171"
  , ob = "_modifierLine_q5qym_176"
  , sb = "_count_q5qym_199"
  , rb = "_bonusLine_q5qym_205"
  , cb = "_empty_q5qym_216"
  , Ve = {
    panel: $_,
    detailedToggle: Y_,
    toggleLabel: V_,
    toggleCheckbox: X_,
    toggleText: Q_,
    section: K_,
    sectionTitle: Z_,
    effectRow: J_,
    effectMain: I_,
    effectName: W_,
    effectVal: F_,
    boosted: P_,
    diminished: eb,
    drIndicator: tb,
    drBadge: nb,
    breakdown: ab,
    breakdownLine: lb,
    totalLine: ib,
    modifierLine: ob,
    count: sb,
    bonusLine: rb,
    empty: cb
}
  , Ou = [1, 1, 1, .9, .81, .729, .656, .59, .531, .478, .43, .387, .349, .314, .282]
  , ub = ["spymasters_study", "workshop", "thaumaturges_laboratory"];
function Bu(l) {
    const a = bt.c(33)
      , {effect: r, totalMod: c, showDetailed: u, spymasterMod: m, golemWorksMod: f, thaumaturgeMod: y} = l
      , g = r.sources.length > 0
      , p = c > 0 && r.totalMultiplier > 1
      , b = r.hasDiminishingReturns;
    let x;
    a[0] !== f || a[1] !== m || a[2] !== y ? (x = z => {
        let U = 0;
        return $u(z) && (U = 0 + m),
        Yu(z) && (U = U + f),
        Vu(z) && (U = U + y),
        U
    }
    ,
    a[0] = f,
    a[1] = m,
    a[2] = y,
    a[3] = x) : x = a[3];
    const T = x;
    let O;
    e: {
        if (!g) {
            let U;
            a[4] === Symbol.for("react.memo_cache_sentinel") ? (U = [],
            a[4] = U) : U = a[4],
            O = U;
            break e
        }
        let z;
        if (a[5] !== r.sources) {
            const U = [...r.sources].sort(fb)
              , G = U.length > 0 && !ub.includes(U[0].roomId);
            z = [];
            let Q = 0;
            for (const ae of U)
                for (let oe = 0; oe < ae.count; oe++) {
                    const ie = G ? Ou[Q] ?? Ou[Ou.length - 1] : 1;
                    z.push({
                        ...ae,
                        count: 1,
                        drMultiplier: ie,
                        instanceIndex: Q
                    }),
                    Q++
                }
            a[5] = r.sources,
            a[6] = z
        } else
            z = a[6];
        O = z
    }
    const k = O;
    let M;
    a[7] !== r.name ? (M = r.name.replace(/\d+%/, "").trim(),
    a[7] = r.name,
    a[8] = M) : M = a[8];
    let w;
    a[9] !== b ? (w = b && d.jsxs("span", {
        className: Ve.drIndicator,
        title: "Diminishing Returns applied (4+ rooms of this type)",
        children: [" ", "⚠️ DR"]
    }),
    a[9] = b,
    a[10] = w) : w = a[10];
    let Y;
    a[11] !== M || a[12] !== w ? (Y = d.jsxs("span", {
        className: Ve.effectName,
        children: [M, w]
    }),
    a[11] = M,
    a[12] = w,
    a[13] = Y) : Y = a[13];
    const $ = `${Ve.effectVal} ${p ? Ve.boosted : ""} ${b ? Ve.diminished : ""}`;
    let P;
    a[14] !== r.finalValue || a[15] !== r.unit || a[16] !== $ ? (P = d.jsxs("span", {
        className: $,
        children: [r.finalValue, r.unit]
    }),
    a[14] = r.finalValue,
    a[15] = r.unit,
    a[16] = $,
    a[17] = P) : P = a[17];
    let X;
    a[18] !== Y || a[19] !== P ? (X = d.jsxs("div", {
        className: Ve.effectMain,
        children: [Y, P]
    }),
    a[18] = Y,
    a[19] = P,
    a[20] = X) : X = a[20];
    let J;
    a[21] !== r.finalValue || a[22] !== r.sources || a[23] !== r.unit || a[24] !== T || a[25] !== b || a[26] !== g || a[27] !== u || a[28] !== k ? (J = u && g && d.jsx("div", {
        className: Ve.breakdown,
        children: b ? d.jsxs(d.Fragment, {
            children: [k.map( (z, U) => {
                const G = z.drMultiplier ?? 1
                  , Q = z.baseContribution
                  , ae = T(z.roomId)
                  , oe = Math.floor(Q * (ae / 100))
                  , ie = Q + oe
                  , se = Math.floor(ie * G)
                  , ee = G < 1;
                return d.jsxs("div", {
                    className: Ve.breakdownLine,
                    children: [d.jsxs("span", {
                        children: ["#", (z.instanceIndex ?? 0) + 1, ": ", z.roomName, " (", z.tier.replace("tier", "T"), ")", ae > 0 && d.jsxs("span", {
                            style: {
                                color: "var(--green)"
                            },
                            children: [" ", "+", oe, "%"]
                        }), ee && d.jsxs("span", {
                            className: Ve.drBadge,
                            title: `DR Multiplier: ${G}×`,
                            children: [" ", "×", G]
                        })]
                    }), d.jsxs("span", {
                        children: [se, r.unit]
                    })]
                }, U)
            }
            ), d.jsxs("div", {
                className: `${Ve.breakdownLine} ${Ve.totalLine}`,
                children: [d.jsx("span", {
                    children: "= Total:"
                }), d.jsxs("span", {
                    children: [r.finalValue, r.unit]
                })]
            })]
        }) : d.jsxs(d.Fragment, {
            children: [r.sources.map( (z, U) => {
                const G = z.baseContribution
                  , Q = T(z.roomId)
                  , ae = Math.floor(G * (Q / 100))
                  , oe = G + ae;
                return d.jsxs("div", {
                    className: Ve.breakdownLine,
                    children: [d.jsxs("span", {
                        children: [z.roomName, " (", z.tier.replace("tier", "T"), ")", z.count > 1 && d.jsxs(d.Fragment, {
                            children: [" ×", z.count]
                        }), Q > 0 && d.jsxs("span", {
                            style: {
                                color: "var(--green)"
                            },
                            children: [" ", "+", ae, "%"]
                        })]
                    }), d.jsxs("span", {
                        children: [oe, r.unit]
                    })]
                }, U)
            }
            ), d.jsxs("div", {
                className: `${Ve.breakdownLine} ${Ve.totalLine}`,
                children: [d.jsx("span", {
                    children: "= Total:"
                }), d.jsxs("span", {
                    children: [r.finalValue, r.unit]
                })]
            })]
        })
    }),
    a[21] = r.finalValue,
    a[22] = r.sources,
    a[23] = r.unit,
    a[24] = T,
    a[25] = b,
    a[26] = g,
    a[27] = u,
    a[28] = k,
    a[29] = J) : J = a[29];
    let Z;
    return a[30] !== X || a[31] !== J ? (Z = d.jsxs("div", {
        className: Ve.effectRow,
        children: [X, J]
    }),
    a[30] = X,
    a[31] = J,
    a[32] = Z) : Z = a[32],
    Z
}
function fb(l, a) {
    const r = parseInt(l.tier.replace("tier", ""));
    return parseInt(a.tier.replace("tier", "")) - r
}
function db(l) {
    const a = bt.c(63)
      , {grid: r} = l
      , [c,u] = C.useState(!1);
    let m;
    a[0] !== r ? (m = B2(r),
    a[0] = r,
    a[1] = m) : m = a[1];
    const f = m
      , y = f.spymasterModifier + f.golemWorksModifier + f.thaumaturgeModifier;
    let g;
    a[2] !== f.monsterEffects ? (g = f.monsterEffects.filter(jb).sort(Nb),
    a[2] = f.monsterEffects,
    a[3] = g) : g = a[3];
    const p = g;
    let b;
    a[4] !== f.chestEffects || a[5] !== f.itemEffects ? (b = [...f.itemEffects, ...f.chestEffects].filter(Tb).sort(Cb),
    a[4] = f.chestEffects,
    a[5] = f.itemEffects,
    a[6] = b) : b = a[6];
    const x = b;
    let T;
    a[7] !== f.miscEffects ? (T = f.miscEffects.filter(Sb).sort(xb),
    a[7] = f.miscEffects,
    a[8] = T) : T = a[8];
    const O = T;
    let k;
    if (a[9] !== f.modifierSources) {
        const ee = new Map;
        for (const j of f.modifierSources) {
            ee.has(j.roomName) || ee.set(j.roomName, {
                count: 0,
                totalValue: 0
            });
            const H = ee.get(j.roomName);
            H.count = H.count + 1,
            H.totalValue = H.totalValue + j.value
        }
        k = Array.from(ee.entries()).map(bb).sort(_b),
        a[9] = f.modifierSources,
        a[10] = k
    } else
        k = a[10];
    const M = k
      , w = M.length > 0;
    let Y;
    a[11] !== x || a[12] !== p || a[13] !== O ? (Y = p.some(vb) || x.some(gb) || O.some(pb),
    a[11] = x,
    a[12] = p,
    a[13] = O,
    a[14] = Y) : Y = a[14];
    const $ = Y;
    let P;
    a[15] === Symbol.for("react.memo_cache_sentinel") ? (P = ee => u(ee.target.checked),
    a[15] = P) : P = a[15];
    let X;
    a[16] !== c ? (X = d.jsx("input", {
        type: "checkbox",
        checked: c,
        onChange: P,
        className: Ve.toggleCheckbox
    }),
    a[16] = c,
    a[17] = X) : X = a[17];
    let J;
    a[18] === Symbol.for("react.memo_cache_sentinel") ? (J = d.jsx("span", {
        className: Ve.toggleText,
        children: "Detailed"
    }),
    a[18] = J) : J = a[18];
    let Z;
    a[19] !== X ? (Z = d.jsx("div", {
        className: Ve.detailedToggle,
        children: d.jsxs("label", {
            className: Ve.toggleLabel,
            children: [X, J]
        })
    }),
    a[19] = X,
    a[20] = Z) : Z = a[20];
    let z;
    a[21] !== M || a[22] !== w ? (z = w && d.jsxs("div", {
        className: Ve.section,
        children: [d.jsx("div", {
            className: Ve.sectionTitle,
            style: {
                color: "var(--gold)"
            },
            children: "Effect Modifiers"
        }), M.map(yb)]
    }),
    a[21] = M,
    a[22] = w,
    a[23] = z) : z = a[23];
    let U;
    a[24] !== $ || a[25] !== c ? (U = c && $ && d.jsx("div", {
        className: Ve.section,
        children: d.jsx("div", {
            style: {
                fontStyle: "italic",
                fontSize: "0.75em",
                padding: "4px 8px"
            },
            children: d.jsx("div", {
                children: "⚠️ Diminishing Returns (DR): Sorted by tier (highest first) Multipliers: 1×, 1×, 1×, 0.9×, 0.81×, 0.729×, 0.656×, 0.59×, 0.531×, 0.478×, 0.43×, 0.387×, 0.349×, 0.314×, 0.282×..."
            })
        })
    }),
    a[24] = $,
    a[25] = c,
    a[26] = U) : U = a[26];
    let G;
    a[27] !== f.golemWorksModifier || a[28] !== f.spymasterModifier || a[29] !== f.thaumaturgeModifier || a[30] !== p || a[31] !== c || a[32] !== y ? (G = p.length > 0 && d.jsxs("div", {
        className: Ve.section,
        children: [d.jsx("div", {
            className: Ve.sectionTitle,
            style: {
                color: "var(--green)"
            },
            children: "Monster"
        }), p.map( (ee, j) => d.jsx(Bu, {
            effect: ee,
            totalMod: y,
            showDetailed: c,
            spymasterMod: f.spymasterModifier,
            golemWorksMod: f.golemWorksModifier,
            thaumaturgeMod: f.thaumaturgeModifier
        }, j))]
    }),
    a[27] = f.golemWorksModifier,
    a[28] = f.spymasterModifier,
    a[29] = f.thaumaturgeModifier,
    a[30] = p,
    a[31] = c,
    a[32] = y,
    a[33] = G) : G = a[33];
    let Q;
    a[34] !== f.golemWorksModifier || a[35] !== f.spymasterModifier || a[36] !== f.thaumaturgeModifier || a[37] !== x || a[38] !== c || a[39] !== y ? (Q = x.length > 0 && d.jsxs("div", {
        className: Ve.section,
        children: [d.jsx("div", {
            className: Ve.sectionTitle,
            style: {
                color: "var(--cyan)"
            },
            children: "Loot"
        }), x.map( (ee, j) => d.jsx(Bu, {
            effect: ee,
            totalMod: y,
            showDetailed: c,
            spymasterMod: f.spymasterModifier,
            golemWorksMod: f.golemWorksModifier,
            thaumaturgeMod: f.thaumaturgeModifier
        }, j))]
    }),
    a[34] = f.golemWorksModifier,
    a[35] = f.spymasterModifier,
    a[36] = f.thaumaturgeModifier,
    a[37] = x,
    a[38] = c,
    a[39] = y,
    a[40] = Q) : Q = a[40];
    let ae;
    a[41] !== f.golemWorksModifier || a[42] !== f.spymasterModifier || a[43] !== f.thaumaturgeModifier || a[44] !== O || a[45] !== c || a[46] !== y ? (ae = O.length > 0 && d.jsxs("div", {
        className: Ve.section,
        children: [d.jsx("div", {
            className: Ve.sectionTitle,
            style: {
                color: "var(--purple)"
            },
            children: "Other"
        }), O.map( (ee, j) => d.jsx(Bu, {
            effect: ee,
            totalMod: y,
            showDetailed: c,
            spymasterMod: f.spymasterModifier,
            golemWorksMod: f.golemWorksModifier,
            thaumaturgeMod: f.thaumaturgeModifier
        }, j))]
    }),
    a[41] = f.golemWorksModifier,
    a[42] = f.spymasterModifier,
    a[43] = f.thaumaturgeModifier,
    a[44] = O,
    a[45] = c,
    a[46] = y,
    a[47] = ae) : ae = a[47];
    let oe;
    a[48] !== f.specialBonuses ? (oe = f.specialBonuses.length > 0 && d.jsxs("div", {
        className: Ve.section,
        children: [d.jsx("div", {
            className: Ve.sectionTitle,
            style: {
                color: "var(--blue)"
            },
            children: "Items"
        }), f.specialBonuses.sort(hb).map(mb)]
    }),
    a[48] = f.specialBonuses,
    a[49] = oe) : oe = a[49];
    let ie;
    a[50] !== x.length || a[51] !== p.length || a[52] !== O.length ? (ie = p.length === 0 && x.length === 0 && O.length === 0 && d.jsx("div", {
        className: Ve.empty,
        children: "Place rooms to see effects"
    }),
    a[50] = x.length,
    a[51] = p.length,
    a[52] = O.length,
    a[53] = ie) : ie = a[53];
    let se;
    return a[54] !== Z || a[55] !== z || a[56] !== U || a[57] !== G || a[58] !== Q || a[59] !== ae || a[60] !== oe || a[61] !== ie ? (se = d.jsxs("div", {
        className: Ve.panel,
        children: [Z, z, U, G, Q, ae, oe, ie]
    }),
    a[54] = Z,
    a[55] = z,
    a[56] = U,
    a[57] = G,
    a[58] = Q,
    a[59] = ae,
    a[60] = oe,
    a[61] = ie,
    a[62] = se) : se = a[62],
    se
}
function mb(l, a) {
    return d.jsxs("div", {
        className: Ve.bonusLine,
        children: [l.count > 1 ? `${l.count}× ` : "", l.bonus]
    }, a)
}
function hb(l, a) {
    return l.bonus.localeCompare(a.bonus)
}
function yb(l, a) {
    return d.jsxs("div", {
        className: Ve.modifierLine,
        children: [d.jsxs("span", {
            children: [l.roomName, " ", l.count > 1 && d.jsxs("span", {
                className: Ve.count,
                children: ["(×", l.count, ")"]
            })]
        }), d.jsxs("span", {
            style: {
                color: "var(--gold)"
            },
            children: ["+", l.totalValue, "%"]
        })]
    }, a)
}
function pb(l) {
    return l.hasDiminishingReturns
}
function gb(l) {
    return l.hasDiminishingReturns
}
function vb(l) {
    return l.hasDiminishingReturns
}
function _b(l, a) {
    return l.roomName.localeCompare(a.roomName)
}
function bb(l) {
    const [a,r] = l;
    return {
        roomName: a,
        count: r.count,
        totalValue: r.totalValue
    }
}
function xb(l, a) {
    return l.name.localeCompare(a.name)
}
function Sb(l) {
    return l.finalValue > 0
}
function Cb(l, a) {
    return l.name.localeCompare(a.name)
}
function Tb(l) {
    return l.finalValue > 0
}
function Nb(l, a) {
    return l.name.localeCompare(a.name)
}
function jb(l) {
    return l.finalValue > 0
}
const Ab = "_legend_166pp_1"
  , Eb = "_topRow_166pp_8"
  , Rb = "_section_166pp_14"
  , Mb = "_chainsSection_166pp_22"
  , wb = "_title_166pp_30"
  , zb = "_collapsibleHeader_166pp_39"
  , kb = "_expanded_166pp_58"
  , Db = "_expandIcon_166pp_66"
  , Lb = "_items_166pp_74"
  , Ob = "_item_166pp_74"
  , Bb = "_key_166pp_88"
  , qb = "_dot_166pp_99"
  , Ub = "_contributing_166pp_106"
  , Gb = "_needed_166pp_111"
  , Hb = "_manualTier_166pp_126"
  , $b = "_warning_166pp_132"
  , Yb = "_loop_166pp_136"
  , Vb = "_destabilize_166pp_140"
  , Xb = "_chainsList_166pp_145"
  , Qb = "_chainWrapper_166pp_151"
  , Kb = "_chainHeader_166pp_156"
  , Zb = "_chainCount_166pp_181"
  , Jb = "_chainLabel_166pp_186"
  , Ib = "_totalLabel_166pp_191"
  , Wb = "_chainDetails_166pp_205"
  , Fb = "_roomEntry_166pp_219"
  , Pb = "_roomName_166pp_227"
  , ex = "_roomTiers_166pp_234"
  , tx = "_tierBadge_166pp_240"
  , nx = "_swatch_166pp_264"
  , de = {
    legend: Ab,
    topRow: Eb,
    section: Rb,
    chainsSection: Mb,
    title: wb,
    collapsibleHeader: zb,
    expanded: kb,
    expandIcon: Db,
    items: Lb,
    item: Ob,
    key: Bb,
    dot: qb,
    contributing: Ub,
    needed: Gb,
    manualTier: Hb,
    warning: $b,
    loop: Yb,
    destabilize: Vb,
    chainsList: Xb,
    chainWrapper: Qb,
    chainHeader: Kb,
    chainCount: Zb,
    chainLabel: Jb,
    totalLabel: Ib,
    chainDetails: Wb,
    roomEntry: Fb,
    roomName: Pb,
    roomTiers: ex,
    tierBadge: tx,
    swatch: nx
};
function ax(l) {
    const a = bt.c(46)
      , {chainStats: r} = l;
    let c;
    a[0] === Symbol.for("react.memo_cache_sentinel") ? (c = new Set,
    a[0] = c) : c = a[0];
    const [u,m] = C.useState(c)
      , [f,y] = C.useState(!0)
      , [g,p] = C.useState(!0);
    let b, x;
    a[1] !== r ? (b = () => {
        m(_ => {
            const A = new Set(r.map(mx))
              , K = new Set;
            return _.forEach(W => {
                A.has(W) && K.add(W)
            }
            ),
            r.forEach(W => {
                _.has(W.color) || K.add(W.color)
            }
            ),
            K
        }
        )
    }
    ,
    x = [r],
    a[1] = r,
    a[2] = b,
    a[3] = x) : (b = a[2],
    x = a[3]),
    C.useEffect(b, x);
    let T;
    a[4] === Symbol.for("react.memo_cache_sentinel") ? (T = (_, A) => {
        _.stopPropagation(),
        m(K => {
            const W = new Set(K);
            return W.has(A) ? W.delete(A) : W.add(A),
            W
        }
        )
    }
    ,
    a[4] = T) : T = a[4];
    const O = T
      , k = fx
      , M = rx;
    let w;
    a[5] !== r ? (w = () => {
        const _ = new Map;
        for (const A of r)
            for (const K of A.rooms) {
                _.has(K.roomId) || _.set(K.roomId, {
                    name: K.name,
                    tierCounts: new Map
                });
                const W = _.get(K.roomId);
                W.tierCounts.set(K.tier, (W.tierCounts.get(K.tier) || 0) + 1)
            }
        return Array.from(_.entries()).map(sx).sort(ox)
    }
    ,
    a[5] = r,
    a[6] = w) : w = a[6];
    const Y = w
      , $ = `${de.collapsibleHeader} ${f ? "" : de.expanded}`;
    let P;
    a[7] !== f ? (P = () => y(!f),
    a[7] = f,
    a[8] = P) : P = a[8];
    let X;
    a[9] === Symbol.for("react.memo_cache_sentinel") ? (X = d.jsx("span", {
        className: de.title,
        children: "How to Use"
    }),
    a[9] = X) : X = a[9];
    const J = f ? "+" : "−";
    let Z;
    a[10] !== J ? (Z = d.jsx("span", {
        className: de.expandIcon,
        children: J
    }),
    a[10] = J,
    a[11] = Z) : Z = a[11];
    let z;
    a[12] !== Z || a[13] !== $ || a[14] !== P ? (z = d.jsxs("button", {
        className: $,
        onClick: P,
        children: [X, Z]
    }),
    a[12] = Z,
    a[13] = $,
    a[14] = P,
    a[15] = z) : z = a[15];
    let U;
    a[16] !== f ? (U = !f && d.jsxs("div", {
        className: de.items,
        children: [d.jsxs("div", {
            className: de.item,
            children: [d.jsx("span", {
                className: de.key,
                children: "Click"
            }), d.jsx("span", {
                children: "Select cell / Place room"
            })]
        }), d.jsxs("div", {
            className: de.item,
            children: [d.jsx("span", {
                className: de.key,
                children: "1-9"
            }), d.jsx("span", {
                children: "Quick place (when cell selected)"
            })]
        }), d.jsxs("div", {
            className: de.item,
            children: [d.jsx("span", {
                className: de.key,
                children: "Right-click"
            }), d.jsx("span", {
                children: "Remove room"
            })]
        }), d.jsxs("div", {
            className: de.item,
            children: [d.jsx("span", {
                className: de.key,
                children: "Hold Right"
            }), d.jsx("span", {
                children: "Eraser brush"
            })]
        }), d.jsxs("div", {
            className: de.item,
            children: [d.jsx("span", {
                className: de.key,
                children: "Shift+Click"
            }), d.jsx("span", {
                children: "Upgrade tier manually"
            })]
        }), d.jsxs("div", {
            className: de.item,
            children: [d.jsx("span", {
                className: de.key,
                children: "Shift+Right"
            }), d.jsx("span", {
                children: "Downgrade tier manually"
            })]
        }), d.jsxs("div", {
            className: de.item,
            children: [d.jsx("span", {
                className: de.key,
                children: "Esc"
            }), d.jsx("span", {
                children: "Clear selection"
            })]
        })]
    }),
    a[16] = f,
    a[17] = U) : U = a[17];
    let G;
    a[18] !== z || a[19] !== U ? (G = d.jsxs("div", {
        className: de.section,
        children: [z, U]
    }),
    a[18] = z,
    a[19] = U,
    a[20] = G) : G = a[20];
    const Q = `${de.collapsibleHeader} ${f ? "" : de.expanded}`;
    let ae;
    a[21] !== f ? (ae = () => y(!f),
    a[21] = f,
    a[22] = ae) : ae = a[22];
    let oe;
    a[23] === Symbol.for("react.memo_cache_sentinel") ? (oe = d.jsx("span", {
        className: de.title,
        children: "Visual Indicators"
    }),
    a[23] = oe) : oe = a[23];
    const ie = f ? "+" : "−";
    let se;
    a[24] !== ie ? (se = d.jsx("span", {
        className: de.expandIcon,
        children: ie
    }),
    a[24] = ie,
    a[25] = se) : se = a[25];
    let ee;
    a[26] !== Q || a[27] !== ae || a[28] !== se ? (ee = d.jsxs("button", {
        className: Q,
        onClick: ae,
        children: [oe, se]
    }),
    a[26] = Q,
    a[27] = ae,
    a[28] = se,
    a[29] = ee) : ee = a[29];
    let j;
    a[30] !== f ? (j = !f && d.jsxs("div", {
        className: de.items,
        children: [d.jsxs("div", {
            className: de.item,
            title: "Hover over a room to see which adjacent rooms contribute to its current tier",
            children: [d.jsx("span", {
                className: `${de.dot} ${de.contributing}`
            }), d.jsx("span", {
                children: "Contributing"
            })]
        }), d.jsxs("div", {
            className: de.item,
            title: "Hover over a room to see what's needed for next tier upgrade",
            children: [d.jsx("span", {
                className: `${de.dot} ${de.needed}`
            }), d.jsx("span", {
                children: "Next tier needs"
            })]
        }), d.jsxs("div", {
            className: de.item,
            title: "Manually tiered room (shift+click)",
            children: [d.jsx("span", {
                className: `${de.dot} ${de.manualTier}`
            }), d.jsx("span", {
                children: "Manual tier"
            })]
        }), d.jsxs("div", {
            className: de.item,
            title: "Placing here would merge separate chains",
            children: [d.jsx("span", {
                className: `${de.dot} ${de.warning}`
            }), d.jsx("span", {
                children: "Merge chains"
            })]
        }), d.jsxs("div", {
            className: de.item,
            title: "Placing here would create a loop",
            children: [d.jsx("span", {
                className: `${de.dot} ${de.loop}`
            }), d.jsx("span", {
                children: "Creates loop"
            })]
        }), d.jsxs("div", {
            className: de.item,
            title: "End of chain that would be destabilized first",
            children: [d.jsx("span", {
                className: `${de.dot} ${de.destabilize}`
            }), d.jsx("span", {
                children: "Destabilization start"
            })]
        })]
    }),
    a[30] = f,
    a[31] = j) : j = a[31];
    let H;
    a[32] !== ee || a[33] !== j ? (H = d.jsxs("div", {
        className: de.section,
        children: [ee, j]
    }),
    a[32] = ee,
    a[33] = j,
    a[34] = H) : H = a[34];
    let E;
    a[35] !== G || a[36] !== H ? (E = d.jsxs("div", {
        className: de.topRow,
        children: [G, H]
    }),
    a[35] = G,
    a[36] = H,
    a[37] = E) : E = a[37];
    let B;
    a[38] !== r || a[39] !== u || a[40] !== Y || a[41] !== g ? (B = r.length > 0 && d.jsxs("div", {
        className: de.chainsSection,
        children: [d.jsxs("span", {
            className: de.title,
            children: ["Chains (", r.length, ")"]
        }), d.jsxs("div", {
            className: de.chainsList,
            children: [r.map(_ => {
                const {color: A, count: K, rooms: W} = _
                  , re = !u.has(A)
                  , fe = k(W);
                return d.jsxs("div", {
                    className: de.chainWrapper,
                    children: [d.jsxs("button", {
                        className: `${de.chainHeader} ${re ? de.expanded : ""}`,
                        onClick: ce => O(ce, A),
                        children: [d.jsx("span", {
                            className: de.swatch,
                            "data-chain-color": A
                        }), d.jsx("span", {
                            className: de.chainCount,
                            children: K
                        }), d.jsxs("span", {
                            className: de.chainLabel,
                            children: ["room", K !== 1 ? "" : ""]
                        }), d.jsx("span", {
                            className: de.expandIcon,
                            children: re ? "−" : "+"
                        })]
                    }), re && d.jsx("div", {
                        className: de.chainDetails,
                        children: fe.map(ce => {
                            const {roomId: me, name: ge, tierCounts: Le} = ce;
                            return d.jsxs("div", {
                                className: de.roomEntry,
                                children: [d.jsx("span", {
                                    className: de.roomName,
                                    children: ge
                                }), d.jsx("span", {
                                    className: de.roomTiers,
                                    children: M(Le)
                                })]
                            }, me)
                        }
                        )
                    })]
                }, A)
            }
            ), ( () => {
                const _ = Y()
                  , A = _.reduce(lx, 0);
                return d.jsxs("div", {
                    className: de.chainWrapper,
                    children: [d.jsxs("button", {
                        className: `${de.chainHeader} ${g ? "" : de.expanded}`,
                        onClick: () => p(!g),
                        children: [d.jsx("span", {
                            className: de.totalLabel,
                            children: "Total"
                        }), d.jsx("span", {
                            className: de.chainCount,
                            children: A
                        }), d.jsxs("span", {
                            className: de.chainLabel,
                            children: ["room", A !== 1 ? "" : ""]
                        }), d.jsx("span", {
                            className: de.expandIcon,
                            children: g ? "+" : "−"
                        })]
                    }), !g && d.jsx("div", {
                        className: de.chainDetails,
                        children: _.map(K => {
                            const {roomId: W, name: re, tierCounts: fe} = K;
                            return d.jsxs("div", {
                                className: de.roomEntry,
                                children: [d.jsx("span", {
                                    className: de.roomName,
                                    children: re
                                }), d.jsx("span", {
                                    className: de.roomTiers,
                                    children: M(fe)
                                })]
                            }, W)
                        }
                        )
                    })]
                })
            }
            )()]
        })]
    }),
    a[38] = r,
    a[39] = u,
    a[40] = Y,
    a[41] = g,
    a[42] = B) : B = a[42];
    let le;
    return a[43] !== E || a[44] !== B ? (le = d.jsxs("div", {
        className: de.legend,
        children: [E, B]
    }),
    a[43] = E,
    a[44] = B,
    a[45] = le) : le = a[45],
    le
}
function lx(l, a) {
    return l + Array.from(a.tierCounts.values()).reduce(ix, 0)
}
function ix(l, a) {
    return l + a
}
function ox(l, a) {
    return l.name.localeCompare(a.name)
}
function sx(l) {
    const [a,r] = l;
    return {
        roomId: a,
        name: r.name,
        tierCounts: r.tierCounts
    }
}
function rx(l) {
    return Array.from(l.entries()).sort(ux).map(cx)
}
function cx(l) {
    const [a,r] = l;
    return d.jsxs("span", {
        className: de.tierBadge,
        "data-tier": a,
        children: [r, "×T", a]
    }, a)
}
function ux(l, a) {
    return l[0] - a[0]
}
function fx(l) {
    const a = new Map;
    for (const r of l) {
        a.has(r.roomId) || a.set(r.roomId, {
            name: r.name,
            tierCounts: new Map
        });
        const c = a.get(r.roomId);
        c.tierCounts.set(r.tier, (c.tierCounts.get(r.tier) || 0) + 1)
    }
    return Array.from(a.entries()).map(dx)
}
function dx(l) {
    const [a,r] = l;
    return {
        roomId: a,
        name: r.name,
        tierCounts: r.tierCounts
    }
}
function mx(l) {
    return l.color
}
const as = [{
    version: "2.2.1c",
    date: "Февраль 13, 2026",
    title: "Русская локализация 2.0",
    changes: ["В работу взят репозиторий планировщика версии 2.2.1 от автора Sulozor", "Применение и адаптация плагина Translate от автора lancelodliu для Русской локализации", "Автор поддержки и Русской адаптации PoE-Inventor"]
}, {
    version: "2.2.1",
    date: "Февраль 13, 2026",
    title: "Исправлены ошибки кнопки «Поделиться»",
    changes: ["Исправлена ​​ошибка, из-за которой кнопка «Поделиться» генерировала некорректные URL-адреса с неправильными путями", "Исправлена ​​ошибка, из-за которой старые общие ссылки (/#/planner?t=...) не загружались в одной вкладке", "Теперь URL-адреса для обмена данными последовательно используют формат /#/planner?t=...", "Все ранее предоставленные ссылки продолжают работать (обратная совместимость)"]
}, {
    version: "2.2.0",
    date: "Февраль 11, 2026",
    title: "Сохраненные макеты теперь работают как снимки",
    changes: ["Исправлена ​​ошибка, из-за которой при загрузке сохраненного макета он автоматически обновлялся при каждом редактировании", "Теперь при загрузке макетов создается рабочая копия, которая не перезаписывает оригинал", "Сохраненные исходные макеты остаются неизменными до тех пор, пока вы явно не сохраните/обновите их", "Теперь вы можете безопасно загружать, изменять и экспериментировать, не затрагивая сохраненные макеты"]
}, {
    version: "2.1.0",
    date: "Февраль 10, 2026",
    title: "Медальон Ваталотли (Замок) — защищает комнату",
    changes: ["Добавлен инструмент блокировки для защиты помещений от дестабилизации", "Нажмите на инструмент блокировки, затем нажмите на комнаты, чтобы переключить состояние блокировки (блокировка/разблокировка)", "В закрытых комнатах в правом верхнем углу отображается значок замка (🔒) с золотистой рамкой", "Запертые комнаты поглощают попытки дестабилизации, не будучи демонтированными.", "Пошаговая визуализация дестабилизации: нажмите «Следующий шаг», чтобы перейти к следующему шагу после каждой попытки", "Целевые помещения подсвечиваются красным импульсом (удаление) или золотым вспышкой (защита)", "Счетчик попыток показывает прогресс (попытка 1/5, 2/5 и т. д.)", "Статус блокировки сохраняется в сохраненных макетах и ​​общих URL-адресах", "Изменена система дестабилизации на систему, основанную на количестве попыток: если 3 попытки попадают в 1 запертую комнату, удаляются только 2 комнаты"]
}, {
    version: "1.29.0",
    date: "Февраль 10, 2026",
    title: "Связь с Залом Атзири",
    changes: ["Комнаты, расположенные в верхней центральной позиции (4, 0), теперь всегда соединены с Покоем Атзири, расположенным выше", "Визуальная линия, соединяющая Покои Ацири и комнату под ней", "Создает гарантированный путь к Атзири независимо от правил смежности комнат", "Соединение не влияет на механизмы дестабилизации"]
}, {
    version: "1.28.0",
    date: "Февраль 09, 2026",
    title: "Мульти-слоты система макетов",
    changes: ["Добавлены именованные слоты для раскладки — сохраняйте несколько вариантов раскладки храма для разных персонажей или билдов", "Совместно используемые макеты (полученные по URL-адресам) больше не перезаписывают автоматически сохраненные макеты."]
}, {
    version: "1.27.1c",
    date: "Январь 16, 2026",
    title: "Обновление и русификация",
    changes: ["За основу взять репозиторий последний актуальной версии 1.27.0 автора Sulozor (GitHub), адаптация русской версии by PoE-Inventor"]
},{
    version: "1.27.0",
    date: "Январь 15, 2026",
    title: "Предотвращение асимметричной цепи Плотосинтез-Командир",
    changes: ["Добавлена ​​асимметричная проверка: Плотосинтез нельзя разместить в линейной цепочке с Командиром через Гарнизон.", "Командир → Гарнизон → Плотосинтез РАЗРЕШЕНО, но Плотосинтез → Гарнизон → Командир НЕ РАЗРЕШЕНО", "Разветвленные цепочки разрешены — это предотвращает только прямые линейные пути от Плотосинтеза к Командиру.", "Соответствует асимметричной цепочке, наблюдаемой и в других комбинациях комнат (например, «Мастерская Голема» → «Кузница»)."]
}, {
    version: "1.26.0",
    date: "Январь 15, 2026",
    title: "Исправлены ограничения на цепочку действий.",
    changes: ["Исправлено ограничение на размещение Кузницы → Оружейной: теперь размещение возможно при наличии соединения с Путем или Мастерской Големов.", "Исправлена ​​цепочка Плотосинтез: добавлены недостающие ограничения для паттернов Плотосинтез ↔ Гарнизон/Бараки вознесенных.", "Спасибо @Krakenbul за помощь!"]
}, {
    version: "1.25.1",
    date: "Январь 12, 2026",
    title: "Русская локализация",
    changes: ["В работу взят репозиторий планировщика версии 1.25.0 от автора Sulozor, для адаптации Русской версии","Автор поддержки и Русской адаптации PoE-Inventor"]
},{
    version: "1.25.0",
    date: "Январь 08, 2026",
    title: "Сохранение макетов и перенаправление URL-адресов",
    changes: ["«После загрузки общей ссылки вы можете вносить изменения локально, не теряя их при перезагрузке страницы»."]
}, {
    version: "1.24.0",
    date: "Январь 06, 2026",
    title: "Исправлена цепочка Кузница-Мастерская Големов",
    changes: ["Теперь кузницу можно окружить несколькими големами (Кузница → Голем → Кузница — это нормально)", "Golem Works не может подключиться к кузнице, в которой уже есть другой голем (это предотвращает соединение Голем → Кузница → Голем)", "Соответствует шаблону «Зал Осквернения ↔ Волшебник» (асимметричное ограничение)"]
}, {
    version: "1.23.0",
    date: "Январь 06, 2026",
    title: "Ограничение между Оружейной и Кузницей",
    changes: ["Добавлено правило проверки: рядом с оружейной может находиться не более одной кузницы", "Запрещает размещение второй кузницы рядом с оружейной (размещение кузницы и оружейной разрешено, но не более того)"]
}, {
    version: "1.22.0",
    date: "Январь 06, 2026",
    title: "Ремонт цепи Генератора",
    changes: ["Система распределения электроэнергии от генератора обеспечивает корректную остановку в помещениях, потребляющих электроэнергию", "Теперь электроснабжение прекращается в первом энергопотребляющем помещении (Кузница, Мастерская големов, Плотосинтез, Бараки вознесенных) в каждой цепочке"]
}, {
    version: "1.21.0",
    date: "Январь 05, 2026",
    title: "Точная реализация теории убывающей доходности",
    changes: ["Огромное спасибо Krakenbul за то, что он воспроизвел формулу DR из игры методом обратного проектирования!", "Исправлены множители DR: теперь используется правильная формула ROUND(0.9^n, 3) вместо линейного затухания", "Фиксированный расчет: перед суммированием вычисляйте этаж в каждой комнате отдельно", "Фиксированные значения буферного пространства: буферы первого уровня составляют 7,5% (а не 8%)"]
}, {
    version: "1.20.0",
    date: "Январь 05, 2026",
    title: "Система пресетов",
    changes: ["Добавлена ​​панель «ПРЕСЕТЫ» под меню комнат", "Загрузите предварительно настроенные оптимальные варианты расположения комнат одним щелчком мыши", "Каждый предустановленный режим включает в себя оценку сложности (от 1 до 5 звезд) и описание"]
}, {
    version: "1.19.0",
    date: "Январь 05, 2026",
    title: "Улучшения всплывающих подсказок",
    changes: ["Добавлены всплывающие подсказки для комнат в палитре и сетке"]
}, {
    version: "1.18.1",
    date: "Январь 05, 2026",
    title: "Исправление реализации принципа убывающей доходности",
    changes: ["Исправлена ​​реализация механизма убывающей доходности: теперь он корректно применяется аддитивно, а не мультипликативно"]
}, {
    version: "1.18.0",
    date: "Январь 05, 2026",
    title: "Реализация принципа убывающей доходности",
    changes: ["Внедрена точная система расчета эффекта убывающей доходности (DR) для звуковых эффектов в помещении", "Эффект снижения применяется ко всем комнатам, КРОМЕ комнат с баффами (Соглядатая, Мастерская големов, Волшебник)", "В подробном представлении показан точный расчет DR: для каждого экземпляра комнаты указан свой множитель"]
}, {
    version: "1.17.1",
    date: "jan 05, 2026",
    title: "Path Sacrifice Support",
    changes: ["Fixed sacrifice mechanic to allow sacrificing path tiles", "Paths can now be sacrificed if they don't break temple connectivity", "Improved reachability calculation to work when starting path is removed"]
}, {
    version: "1.17.0",
    date: "jan 04, 2026",
    title: "UI/UX Improvements",
    changes: ["Made 'How to Use' and 'Visual Indicators' sections collapsible (default collapsed)", "Moved destabilization warning to top of right column for better visibility", "Added 'Detailed' toggle in Active Bonuses panel (default off for cleaner view)", "Fixed percentage alignment in effects panel with consistent spacing", "Added visual separators between effect lines for better readability"]
}, {
    version: "1.16.0",
    date: "jan 03, 2026",
    title: "Smithy ↔ Golem Works Chaining Limit",
    changes: ["Added chaining constraint: Smithy ↔ Golem Works can only chain once"]
}, {
    version: "1.15.0",
    date: "jan 03, 2026",
    title: "Destabilization Counter",
    changes: ["Added destabilization counter in the Legend section showing how many rooms can be safely destabilized", "Counter displays at the top of the right panel for easy visibility", "Helps identify end-chain rooms that can be removed without disconnecting the temple"]
}, {
    version: "1.14.0",
    date: "jan 03, 2026",
    title: "Diminishing Returns Indicator",
    changes: ["Added visual indicator for Diminishing Returns in the Effects Panel when 4+ rooms of the same type are placed", "Diminishing Returns apply to lower tier rooms first, ensuring higher tier rooms benefit the Temple as much as possible", "Effects panel shows '⚠️ DR' badge and 'DR (???)' notation since exact diminishing returns value is unknown", "Detailed breakdown shows which room types are affected by diminishing returns", "This mechanic was added by GGG to prevent server performance issues from top-end Temples with many duplicate rooms"]
}, {
    version: "1.13.0",
    date: "jan 03, 2026",
    title: "Spymaster-Commander Linear Chain Prevention",
    changes: ["Added validation: Spymaster cannot be placed in a LINEAR chain with Commander", "Branching chains are allowed - only prevents direct linear paths between the two", "This prevents invalid configurations where Commander would directly connect to Legion Barrack (created by Spymaster)"]
}, {
    version: "1.12.0",
    date: "jan 03, 2026",
    title: "Alchemy Lab Connection Limit",
    changes: ["Added validation: Alchemy Lab can now only have a maximum of 2 Thaumaturges connected to it", "Error message shown when attempting to place a third Thaumaturge adjacent to an Alchemy Lab"]
}, {
    version: "1.11.0",
    date: "jan 03, 2026",
    title: "Golem Works & Spymaster Balance Change",
    changes: ["BALANCE CHANGE Hotfix 0.4.0c: Swapped room bonuses between Golem Works and Spymaster", "Golem Works now affects: Garrison, Commander, Armoury, Smithy, Legion Barrack (previously tech rooms)", "Spymaster now affects: Generator, Synthflesh, Surgeon, Transcendent, Alchemy (previously military rooms)", "GGG needs to revert the Juatalotli's Medallion as this is a VERY hindering change to temple building"]
}, {
    version: "1.10.0",
    date: "jan 03, 2026",
    title: "Major Upgrade Logic Overhaul",
    changes: ["Fixed Smithy upgrade: now correctly upgraded by Golem Works (not the other way around)", "Fixed Golem Works: now ONLY upgraded by Generators (no adjacency upgrades)", "Golem Works special: can stack up to 2 Generators for +2 tier (unique mechanic)", "Fixed Transcendent Barrack: now upgraded by Synthflesh Lab + Generator", "Fixed Legion Barrack: now upgraded by Armoury + Spymaster", "Fixed Synthflesh Lab: simplified upgrade logic (Flesh Surgeon + Generator)", "All upgrade relationships now match the actual game mechanics"]
}, {
    version: "1.9.0",
    date: "jan 02, 2026",
    title: "Manual Tier Control",
    changes: ["Added manual tier control with shift+click shortcuts", "Shift + Left Click: upgrade room tier by 1", "Shift + Right Click: downgrade room tier by 1", "Manually tiered rooms show a subtle muted gold border indicator", "Perfect for testing specific tier combinations or planning upgrades"]
}, {
    version: "1.8.1",
    date: "jan 05, 2026",
    title: "Garrison Medallion Fix",
    changes: ["Fixed bug where Garrison rooms (Guardhouse/Transcendent/Legion) would 'absorb' medallion upgrades on link sharing", "Medallion indicators now correctly persist through garrison transformations and URL export/import", "Improved defensive preservation of medallion flags during tier recalculation"]
}, {
    version: "1.8.0",
    date: "jan 04, 2026",
    title: "Chaining Rule Fixes",
    changes: ["Fixed Spymaster placement: can now connect to natty Garrison when Legion Barrack is nearby", "Fixed Thaumaturge placement: can now connect to Alchemy Lab when Corruption Chamber is nearby", "Fixed all chaining rules: now correctly allow placements when alternative valid connections exist", "Affects: Spymaster, Thaumaturge, Legion Barrack, Alchemy Lab, Armoury, and Commander (Russian mode)"]
}, {
    version: "1.7.0",
    date: "jan 03, 2026",
    title: "Mirror Symmetry Tool",
    changes: ["Added horizontal mirror button to flip temple layouts instantly", "Reorganized bottom bar: symmetry & reset in their own section, share moved to the end"]
}, {
    version: "1.6.0",
    date: "jan 02, 2026",
    title: "Russian Tech: Commander ↔ Thaumaturge Chaining",
    changes: ["Added Commander ↔ Thaumaturge chaining support in Russian mode"]
}, {
    version: "1.5.0",
    date: "jan 01, 2026",
    title: "Mobile & Responsive Design",
    changes: ["Added full mobile and tablet support - temple planner now works on all screen sizes", "Touch-friendly controls with improved button sizing on mobile", "Fixed Golem Works tier calculation - now correctly considers Smithy neighbors", "Fixed missing icons for Medallions and Atziri"]
}, {
    version: "1.4.1",
    date: "dec 31, 2024",
    title: "Bug fixes",
    changes: ["Fixed Generator placement - now correctly requires connection to a Path", "Fixed Corruption Chamber and Thaumaturge chaining"]
}, {
    version: "1.4.0",
    date: "dec 31, 2024",
    title: "Quality of Life Improvements",
    changes: ["Added changelog notification system", "Added eraser button to clear the temple", "Add a lot of keyboard shortcuts", "Add overlay tile placement"]
}]
  , Hy = "poe-tools-seen-changelog"
  , $y = "poe-tools-first-visit-done";
function hx() {
    try {
        return localStorage.getItem($y) === "true"
    } catch {
        return !1
    }
}
function yx() {
    try {
        localStorage.setItem($y, "true")
    } catch {}
}
function Yy() {
    try {
        const l = localStorage.getItem(Hy);
        if (l)
            return new Set(JSON.parse(l))
    } catch {}
    return new Set
}
function Vy(l) {
    try {
        const a = Yy();
        l.forEach(r => a.add(r)),
        localStorage.setItem(Hy, JSON.stringify([...a]))
    } catch {}
}
function px() {
    if (!hx())
        return yx(),
        Vy(as.map(a => a.version)),
        [];
    const l = Yy();
    return as.filter(a => !l.has(a.version) && !a.silent)
}
const gx = "_container_140w2_2"
  , vx = "_notification_140w2_15"
  , _x = "_visible_140w2_30"
  , bx = "_exiting_140w2_35"
  , xx = "_header_140w2_42"
  , Sx = "_headerLeft_140w2_51"
  , Cx = "_newBadge_140w2_57"
  , Tx = "_sparkle_140w2_71"
  , Nx = "_version_140w2_75"
  , jx = "_closeBtn_140w2_81"
  , Ax = "_content_140w2_102"
  , Ex = "_title_140w2_106"
  , Rx = "_changes_140w2_113"
  , Mx = "_changeItem_140w2_122"
  , wx = "_progressBar_140w2_140"
  , zx = "_progressFill_140w2_146"
  , kx = "_footer_140w2_153"
  , Dx = "_date_140w2_162"
  , Lx = "_viewAll_140w2_167"
  , Lt = {
    container: gx,
    notification: vx,
    visible: _x,
    exiting: bx,
    header: xx,
    headerLeft: Sx,
    newBadge: Cx,
    sparkle: Tx,
    version: Nx,
    closeBtn: jx,
    content: Ax,
    title: Ex,
    changes: Rx,
    changeItem: Mx,
    progressBar: wx,
    progressFill: zx,
    footer: kx,
    date: Dx,
    viewAll: Lx
}
  , Ox = 1e4;
function Bx(l) {
    const a = bt.c(49)
      , {entry: r, onDismiss: c, index: u} = l
      , [m,f] = C.useState(!1)
      , [y,g] = C.useState(!1)
      , [p,b] = C.useState(100)
      , x = C.useRef(null)
      , T = C.useRef(0)
      , O = C.useRef(null);
    let k;
    a[0] !== c ? (k = () => {
        x.current && clearInterval(x.current),
        g(!0),
        setTimeout( () => {
            c()
        }
        , 300)
    }
    ,
    a[0] = c,
    a[1] = k) : k = a[1];
    const M = k;
    let w;
    a[2] !== M ? (w = () => {
        T.current = Date.now() - (O.current ?? 0),
        O.current = null,
        x.current = window.setInterval( () => {
            const fe = Date.now() - T.current
              , ce = Math.max(0, 100 - fe / Ox * 100);
            b(ce),
            ce <= 0 && M()
        }
        , 50)
    }
    ,
    a[2] = M,
    a[3] = w) : w = a[3];
    const Y = w;
    let $;
    a[4] === Symbol.for("react.memo_cache_sentinel") ? ($ = () => {
        x.current && (clearInterval(x.current),
        x.current = null,
        O.current = Date.now() - T.current)
    }
    ,
    a[4] = $) : $ = a[4];
    const P = $;
    let X, J;
    a[5] !== u ? (X = () => {
        const fe = setTimeout( () => {
            f(!0)
        }
        , u * 150);
        return () => clearTimeout(fe)
    }
    ,
    J = [u],
    a[5] = u,
    a[6] = X,
    a[7] = J) : (X = a[6],
    J = a[7]),
    C.useEffect(X, J);
    let Z, z;
    a[8] !== y || a[9] !== Y || a[10] !== m ? (Z = () => {
        if (m && !y) {
            const fe = setTimeout( () => {
                Y()
            }
            , 500);
            return () => clearTimeout(fe)
        }
    }
    ,
    z = [m, y, Y],
    a[8] = y,
    a[9] = Y,
    a[10] = m,
    a[11] = Z,
    a[12] = z) : (Z = a[11],
    z = a[12]),
    C.useEffect(Z, z);
    let U, G;
    a[13] === Symbol.for("react.memo_cache_sentinel") ? (U = () => () => {
        x.current && clearInterval(x.current)
    }
    ,
    G = [],
    a[13] = U,
    a[14] = G) : (U = a[13],
    G = a[14]),
    C.useEffect(U, G);
    const Q = `${Lt.notification} ${m ? Lt.visible : ""} ${y ? Lt.exiting : ""}`;
    let ae;
    a[15] === Symbol.for("react.memo_cache_sentinel") ? (ae = d.jsxs("span", {
        className: Lt.newBadge,
        children: [d.jsx("span", {
            className: Lt.sparkle,
            children: "✦"
        }), "Новый"]
    }),
    a[15] = ae) : ae = a[15];
    let oe;
    a[16] !== r.version ? (oe = d.jsxs("div", {
        className: Lt.headerLeft,
        children: [ae, d.jsxs("span", {
            className: Lt.version,
            children: ["v", r.version]
        })]
    }),
    a[16] = r.version,
    a[17] = oe) : oe = a[17];
    let ie;
    a[18] === Symbol.for("react.memo_cache_sentinel") ? (ie = d.jsxs("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [d.jsx("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
        }), d.jsx("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
        })]
    }),
    a[18] = ie) : ie = a[18];
    let se;
    a[19] !== M ? (se = d.jsx("button", {
        className: Lt.closeBtn,
        onClick: M,
        title: "Dismiss",
        children: ie
    }),
    a[19] = M,
    a[20] = se) : se = a[20];
    let ee;
    a[21] !== oe || a[22] !== se ? (ee = d.jsxs("div", {
        className: Lt.header,
        children: [oe, se]
    }),
    a[21] = oe,
    a[22] = se,
    a[23] = ee) : ee = a[23];
    let j;
    a[24] !== r.title ? (j = d.jsx("h3", {
        className: Lt.title,
        children: r.title
    }),
    a[24] = r.title,
    a[25] = j) : j = a[25];
    let H;
    a[26] !== r.changes ? (H = r.changes.map(qx),
    a[26] = r.changes,
    a[27] = H) : H = a[27];
    let E;
    a[28] !== H ? (E = d.jsx("ul", {
        className: Lt.changes,
        children: H
    }),
    a[28] = H,
    a[29] = E) : E = a[29];
    let B;
    a[30] !== r.date ? (B = d.jsx("span", {
        className: Lt.date,
        children: r.date
    }),
    a[30] = r.date,
    a[31] = B) : B = a[31];
    let le;
    a[32] !== M ? (le = d.jsx(Pu, {
        to: "/changelog",
        className: Lt.viewAll,
        onClick: M,
        children: "Посмотреть все →"
    }),
    a[32] = M,
    a[33] = le) : le = a[33];
    let _;
    a[34] !== B || a[35] !== le ? (_ = d.jsxs("div", {
        className: Lt.footer,
        children: [B, le]
    }),
    a[34] = B,
    a[35] = le,
    a[36] = _) : _ = a[36];
    let A;
    a[37] !== j || a[38] !== E || a[39] !== _ ? (A = d.jsxs("div", {
        className: Lt.content,
        children: [j, E, _]
    }),
    a[37] = j,
    a[38] = E,
    a[39] = _,
    a[40] = A) : A = a[40];
    const K = `${p}%`;
    let W;
    a[41] !== K ? (W = d.jsx("div", {
        className: Lt.progressBar,
        children: d.jsx("div", {
            className: Lt.progressFill,
            style: {
                width: K
            }
        })
    }),
    a[41] = K,
    a[42] = W) : W = a[42];
    let re;
    return a[43] !== Q || a[44] !== Y || a[45] !== ee || a[46] !== A || a[47] !== W ? (re = d.jsxs("div", {
        className: Q,
        onMouseEnter: P,
        onMouseLeave: Y,
        children: [ee, A, W]
    }),
    a[43] = Q,
    a[44] = Y,
    a[45] = ee,
    a[46] = A,
    a[47] = W,
    a[48] = re) : re = a[48],
    re
}
function qx(l, a) {
    return d.jsx("li", {
        className: Lt.changeItem,
        children: l
    }, a)
}
function Ux() {
    const l = bt.c(9);
    let a;
    l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [],
    l[0] = a) : a = l[0];
    const [r,c] = C.useState(a);
    let u, m;
    l[1] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
        const b = px();
        c(b.slice(0, 3))
    }
    ,
    m = [],
    l[1] = u,
    l[2] = m) : (u = l[1],
    m = l[2]),
    C.useEffect(u, m);
    let f;
    l[3] === Symbol.for("react.memo_cache_sentinel") ? (f = b => {
        Vy([b]),
        c(x => x.filter(T => T.version !== b))
    }
    ,
    l[3] = f) : f = l[3];
    const y = f;
    if (r.length === 0)
        return null;
    let g;
    if (l[4] !== r) {
        let b;
        l[6] === Symbol.for("react.memo_cache_sentinel") ? (b = (x, T) => d.jsx(Bx, {
            entry: x,
            index: T,
            onDismiss: () => y(x.version)
        }, x.version),
        l[6] = b) : b = l[6],
        g = r.map(b),
        l[4] = r,
        l[5] = g
    } else
        g = l[5];
    let p;
    return l[7] !== g ? (p = d.jsx("div", {
        className: Lt.container,
        children: g
    }),
    l[7] = g,
    l[8] = p) : p = l[8],
    p
}
const Gx = [{
    id: "ckaiba-currency",
    title: "Ckaiba's Roman Empire",
    difficulty: 5,
    description: "Русская технология для Соглядатая, римская технология для големов. Повторно использована Fubgun.",
    layout: "ACFIIUghSCFIIUhgOWA5YDlgSCE5ESkRKRE5IUhgKQCYACkySCE5EjEAeRFpIUhgcGl6cClwSCE5eXpwMRJ6IUgyaXBhOnGASCIxOmEIQGkxIg"
}, {
    id: "milkybk-hard",
    title: "Milkybk's Hard Temple",
    difficulty: 4,
    description: "Milkybk's Жесткий храм, в котором задействованы российские технологии",
    layout: "AyJKIkoiSiJJIkp6gnJqMgAAMiJxOjISIgCYaUp6YSkpSSIAMiJxOhISMkoiIkl6YioSanFKSiJxOnoqEnoiIjJ6YnFCKhIxSmpxOmIIYjoyImoKAgACBBAAgJVwfOz5qq_eXqs"
}, {
    id: "cutedog-sweaty",
    title: "Cutedog's Roman Temple",
    difficulty: 5,
    description: "Храм Cutedog's с большим количеством русских и римских технологий",
    layout: "AEghSCFIIjFoMSF6cHpwaTESEkhwcGpwanApKSFpeQCYAGoSEkgyMWkAAHAxMSE5EnB6gHppaEhgKREpESlwMSE5YDphABF5EkghSCEIQCkRKQ"
}]
  , Hx = "_panel_iaqfb_1"
  , $x = "_header_iaqfb_16"
  , Yx = "_tabs_iaqfb_20"
  , Vx = "_tab_iaqfb_20"
  , Xx = "_tabActive_iaqfb_46"
  , Qx = "_content_iaqfb_51"
  , Kx = "_sharedWarning_iaqfb_62"
  , Zx = "_saveSection_iaqfb_80"
  , Jx = "_newSlotForm_iaqfb_86"
  , Ix = "_input_iaqfb_91"
  , Wx = "_saveBtn_iaqfb_113"
  , Fx = "_error_iaqfb_144"
  , Px = "_slotList_iaqfb_155"
  , eS = "_emptyState_iaqfb_164"
  , tS = "_slotCard_iaqfb_186"
  , nS = "_slotCardActive_iaqfb_202"
  , aS = "_slotInfo_iaqfb_208"
  , lS = "_slotName_iaqfb_214"
  , iS = "_slotMeta_iaqfb_223"
  , oS = "_slotActions_iaqfb_229"
  , sS = "_iconBtn_iaqfb_234"
  , rS = "_danger_iaqfb_256"
  , cS = "_updateBtn_iaqfb_262"
  , uS = "_editForm_iaqfb_275"
  , fS = "_editActions_iaqfb_281"
  , dS = "_presetList_iaqfb_287"
  , mS = "_presetCard_iaqfb_293"
  , hS = "_presetHeader_iaqfb_316"
  , yS = "_presetTitle_iaqfb_323"
  , pS = "_stars_iaqfb_330"
  , gS = "_starFilled_iaqfb_338"
  , vS = "_starEmpty_iaqfb_342"
  , _S = "_description_iaqfb_346"
  , bS = "_footer_iaqfb_353"
  , xS = "_footerText_iaqfb_359"
  , Re = {
    panel: Hx,
    header: $x,
    tabs: Yx,
    tab: Vx,
    tabActive: Xx,
    content: Qx,
    sharedWarning: Kx,
    saveSection: Zx,
    newSlotForm: Jx,
    input: Ix,
    saveBtn: Wx,
    error: Fx,
    slotList: Px,
    emptyState: eS,
    slotCard: tS,
    slotCardActive: nS,
    slotInfo: aS,
    slotName: lS,
    slotMeta: iS,
    slotActions: oS,
    iconBtn: sS,
    danger: rS,
    updateBtn: cS,
    editForm: uS,
    editActions: fS,
    presetList: dS,
    presetCard: mS,
    presetHeader: hS,
    presetTitle: yS,
    stars: pS,
    starFilled: gS,
    starEmpty: vS,
    description: _S,
    footer: bS,
    footerText: xS
};
function SS(l) {
    const a = bt.c(3)
      , {count: r} = l;
    let c;
    a[0] === Symbol.for("react.memo_cache_sentinel") ? (c = Array.from({
        length: 5
    }),
    a[0] = c) : c = a[0];
    let u;
    return a[1] !== r ? (u = d.jsx("div", {
        className: Re.stars,
        children: c.map( (m, f) => d.jsx("span", {
            className: f < r ? Re.starFilled : Re.starEmpty,
            children: "★"
        }, f))
    }),
    a[1] = r,
    a[2] = u) : u = a[2],
    u
}
function CS(l) {
    const a = bt.c(54)
      , {currentGrid: r, activeSlot: c, isSharedLayout: u, onLoadLayout: m, onLoadPreset: f} = l
      , [y,g] = C.useState("slots")
      , [p,b] = C.useState(NS)
      , [x,T] = C.useState("")
      , [O,k] = C.useState(null)
      , [M,w] = C.useState("")
      , [Y,$] = C.useState(null);
    let P;
    a[0] === Symbol.for("react.memo_cache_sentinel") ? (P = () => {
        b(Ly())
    }
    ,
    a[0] = P) : P = a[0];
    const X = P;
    let J;
    a[1] !== r || a[2] !== x || a[3] !== m ? (J = () => {
        const ue = x.trim();
        if (!ue) {
            $("Название макета не может быть пустым");
            return
        }
        if (ny(ue)) {
            $("Макет с таким названием уже существует");
            return
        }
        T(""),
        $(null),
        _r(ue, r),
        br(ue),
        X(),
        m(r, ue)
    }
    ,
    a[1] = r,
    a[2] = x,
    a[3] = m,
    a[4] = J) : J = a[4];
    const Z = J;
    let z;
    a[5] !== r || a[6] !== m ? (z = ue => {
        confirm(`Перезаписать макет "${ue}" с текущей компоновкой?`) && (_r(ue, r),
        br(ue),
        X(),
        m(r, ue))
    }
    ,
    a[5] = r,
    a[6] = m,
    a[7] = z) : z = a[7];
    const U = z;
    let G;
    a[8] !== m ? (G = ue => {
        const Pe = ky(ue);
        Pe && m(Pe, null)
    }
    ,
    a[8] = m,
    a[9] = G) : G = a[9];
    const Q = G;
    let ae;
    a[10] !== c || a[11] !== r || a[12] !== m ? (ae = ue => {
        confirm(`Удалить макет "${ue}"?`) && (Dy(ue),
        X(),
        c === ue && m(r, null))
    }
    ,
    a[10] = c,
    a[11] = r,
    a[12] = m,
    a[13] = ae) : ae = a[13];
    const oe = ae;
    let ie;
    a[14] === Symbol.for("react.memo_cache_sentinel") ? (ie = ue => {
        k(ue),
        w(ue),
        $(null)
    }
    ,
    a[14] = ie) : ie = a[14];
    const se = ie;
    let ee;
    a[15] !== c || a[16] !== r || a[17] !== M || a[18] !== O || a[19] !== m ? (ee = () => {
        if (!O)
            return;
        const ue = M.trim();
        if (!ue) {
            $("Название макета не может быть пустым");
            return
        }
        if (ue !== O && ny(ue)) {
            $("Макет с таким названием уже существует");
            return
        }
        ue !== O && C2(O, ue) && (X(),
        c === O && m(r, ue)),
        k(null),
        w(""),
        $(null)
    }
    ,
    a[15] = c,
    a[16] = r,
    a[17] = M,
    a[18] = O,
    a[19] = m,
    a[20] = ee) : ee = a[20];
    const j = ee;
    let H;
    a[21] === Symbol.for("react.memo_cache_sentinel") ? (H = () => {
        k(null),
        w(""),
        $(null)
    }
    ,
    a[21] = H) : H = a[21];
    const E = H;
    let B;
    a[22] !== f ? (B = ue => {
        f(ue.layout)
    }
    ,
    a[22] = f,
    a[23] = B) : B = a[23];
    const le = B
      , _ = TS
      , A = `${Re.tab} ${y === "slots" ? Re.tabActive : ""}`;
    let K;
    a[24] === Symbol.for("react.memo_cache_sentinel") ? (K = () => g("slots"),
    a[24] = K) : K = a[24];
    let W;
    a[25] !== A ? (W = d.jsx("button", {
        className: A,
        onClick: K,
        children: "Мои макеты"
    }),
    a[25] = A,
    a[26] = W) : W = a[26];
    const re = `${Re.tab} ${y === "presets" ? Re.tabActive : ""}`;
    let fe;
    a[27] === Symbol.for("react.memo_cache_sentinel") ? (fe = () => g("presets"),
    a[27] = fe) : fe = a[27];
    let ce;
    a[28] !== re ? (ce = d.jsx("button", {
        className: re,
        onClick: fe,
        children: "Пресеты"
    }),
    a[28] = re,
    a[29] = ce) : ce = a[29];
    let me;
    a[30] !== W || a[31] !== ce ? (me = d.jsx("div", {
        className: Re.header,
        children: d.jsxs("div", {
            className: Re.tabs,
            children: [W, ce]
        })
    }),
    a[30] = W,
    a[31] = ce,
    a[32] = me) : me = a[32];
    let ge;
    a[33] !== c || a[34] !== y || a[35] !== M || a[36] !== O || a[37] !== Y || a[38] !== oe || a[39] !== Q || a[40] !== j || a[41] !== Z || a[42] !== U || a[43] !== u || a[44] !== x || a[45] !== p ? (ge = y === "slots" && d.jsxs("div", {
        className: Re.content,
        children: [u && d.jsxs("div", {
            className: Re.sharedWarning,
            children: [d.jsxs("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [d.jsx("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }), d.jsx("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "12"
                }), d.jsx("line", {
                    x1: "12",
                    y1: "16",
                    x2: "12.01",
                    y2: "16"
                })]
            }), d.jsx("span", {
                children: "Просмотр общего макета — введите название ниже, чтобы сохранить его"
            })]
        }), d.jsxs("div", {
            className: Re.saveSection,
            children: [d.jsxs("div", {
                className: Re.newSlotForm,
                children: [d.jsx("input", {
                    type: "text",
                    className: Re.input,
                    placeholder: "Название макета...",
                    value: x,
                    onChange: ue => {
                        T(ue.target.value),
                        $(null)
                    }
                    ,
                    onKeyDown: ue => {
                        ue.key === "Enter" && Z(),
                        ue.key === "Escape" && T("")
                    }
                }), d.jsxs("button", {
                    className: Re.saveBtn,
                    onClick: Z,
                    disabled: !x.trim(),
                    children: [d.jsxs("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [d.jsx("path", {
                            d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                        }), d.jsx("polyline", {
                            points: "17 21 17 13 7 13 7 21"
                        }), d.jsx("polyline", {
                            points: "7 3 7 8 15 8"
                        })]
                    }), "Сейв"]
                })]
            }), Y && d.jsx("div", {
                className: Re.error,
                children: Y
            })]
        }), d.jsx("div", {
            className: Re.slotList,
            children: p.length === 0 ? d.jsxs("div", {
                className: Re.emptyState,
                children: [d.jsxs("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    opacity: "0.3",
                    children: [d.jsx("path", {
                        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                    }), d.jsx("polyline", {
                        points: "17 21 17 13 7 13 7 21"
                    }), d.jsx("polyline", {
                        points: "7 3 7 8 15 8"
                    })]
                }), d.jsx("p", {
                    children: "Сохраненных макетов пока нет"
                }), d.jsx("span", {
                    children: "Сохраните свой первый макет для выбора"
                })]
            }) : p.map(ue => d.jsx("div", {
                className: `${Re.slotCard} ${c === ue.name ? Re.slotCardActive : ""}`,
                children: O === ue.name ? d.jsxs("div", {
                    className: Re.editForm,
                    children: [d.jsx("input", {
                        type: "text",
                        className: Re.input,
                        value: M,
                        onChange: Pe => {
                            w(Pe.target.value),
                            $(null)
                        }
                        ,
                        onKeyDown: Pe => {
                            Pe.key === "Enter" && j(),
                            Pe.key === "Escape" && E()
                        }
                        ,
                        autoFocus: !0
                    }), d.jsxs("div", {
                        className: Re.editActions,
                        children: [d.jsx("button", {
                            className: Re.iconBtn,
                            onClick: j,
                            title: "Сохранить",
                            children: "✓"
                        }), d.jsx("button", {
                            className: Re.iconBtn,
                            onClick: E,
                            title: "Отмена",
                            children: "✕"
                        })]
                    })]
                }) : d.jsxs(d.Fragment, {
                    children: [d.jsxs("div", {
                        className: Re.slotInfo,
                        onClick: () => Q(ue.name),
                        children: [d.jsx("div", {
                            className: Re.slotName,
                            children: ue.name
                        }), d.jsx("div", {
                            className: Re.slotMeta,
                            children: _(ue.lastModified)
                        })]
                    }), d.jsxs("div", {
                        className: Re.slotActions,
                        children: [d.jsx("button", {
                            className: `${Re.iconBtn} ${Re.updateBtn}`,
                            onClick: Pe => {
                                Pe.stopPropagation(),
                                U(ue.name)
                            }
                            ,
                            title: "Обновить с учетом текущего макета",
                            children: d.jsxs("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [d.jsx("path", {
                                    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                                }), d.jsx("polyline", {
                                    points: "17 21 17 13 7 13 7 21"
                                }), d.jsx("polyline", {
                                    points: "7 3 7 8 15 8"
                                })]
                            })
                        }), d.jsx("button", {
                            className: Re.iconBtn,
                            onClick: Pe => {
                                Pe.stopPropagation(),
                                se(ue.name)
                            }
                            ,
                            title: "Переименовать",
                            children: d.jsxs("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [d.jsx("path", {
                                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                }), d.jsx("path", {
                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                })]
                            })
                        }), d.jsx("button", {
                            className: `${Re.iconBtn} ${Re.danger}`,
                            onClick: Pe => {
                                Pe.stopPropagation(),
                                oe(ue.name)
                            }
                            ,
                            title: "Удалить",
                            children: d.jsxs("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [d.jsx("polyline", {
                                    points: "3 6 5 6 21 6"
                                }), d.jsx("path", {
                                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                })]
                            })
                        })]
                    })]
                })
            }, ue.name))
        })]
    }),
    a[33] = c,
    a[34] = y,
    a[35] = M,
    a[36] = O,
    a[37] = Y,
    a[38] = oe,
    a[39] = Q,
    a[40] = j,
    a[41] = Z,
    a[42] = U,
    a[43] = u,
    a[44] = x,
    a[45] = p,
    a[46] = ge) : ge = a[46];
    let Le;
    a[47] !== y || a[48] !== le ? (Le = y === "presets" && d.jsxs("div", {
        className: Re.content,
        children: [d.jsx("div", {
            className: Re.presetList,
            children: Gx.map(ue => d.jsxs("div", {
                className: Re.presetCard,
                onClick: () => le(ue),
                children: [d.jsxs("div", {
                    className: Re.presetHeader,
                    children: [d.jsx("div", {
                        className: Re.presetTitle,
                        children: ue.title
                    }), d.jsx(SS, {
                        count: ue.difficulty
                    })]
                }), d.jsx("p", {
                    className: Re.description,
                    children: ue.description
                })]
            }, ue.id))
        }), d.jsx("div", {
            className: Re.footer,
            children: d.jsx("span", {
                className: Re.footerText,
                children: "Нажмите для загрузки пресета"
            })
        })]
    }),
    a[47] = y,
    a[48] = le,
    a[49] = Le) : Le = a[49];
    let dt;
    return a[50] !== me || a[51] !== ge || a[52] !== Le ? (dt = d.jsxs("div", {
        className: Re.panel,
        children: [me, ge, Le]
    }),
    a[50] = me,
    a[51] = ge,
    a[52] = Le,
    a[53] = dt) : dt = a[53],
    dt
}
function TS(l) {
    const a = new Date(l)
      , c = new Date().getTime() - a.getTime()
      , u = Math.floor(c / 6e4)
      , m = Math.floor(c / 36e5)
      , f = Math.floor(c / 864e5);
    return u < 1 ? "Создан сейчас" : u < 60 ? `${u} мин назад` : m < 24 ? `${m} часов назад` : f < 7 ? `${f} дней назад` : a.toLocaleDateString()
}
function NS() {
    return Ly()
}
const jS = "_panel_d4uqu_3"
  , AS = "_section_d4uqu_12"
  , ES = "_sectionHeader_d4uqu_17"
  , RS = "_sectionTitle_d4uqu_24"
  , MS = "_dealBtn_d4uqu_34"
  , wS = "_roomGrid_d4uqu_55"
  , zS = "_slot_d4uqu_69"
  , kS = "_filled_d4uqu_91"
  , DS = "_selected_d4uqu_95"
  , LS = "_roomSlot_d4uqu_100"
  , OS = "_slotIcon_d4uqu_109"
  , BS = "_slotPlaceholder_d4uqu_115"
  , qS = "_slotLabel_d4uqu_121"
  , US = "_emptySlot_d4uqu_129"
  , GS = "_picker_d4uqu_153"
  , HS = "_pickerHeader_d4uqu_169"
  , $S = "_pickerGrid_d4uqu_179"
  , YS = "_pickerItem_d4uqu_185"
  , VS = "_pickerIcon_d4uqu_204"
  , XS = "_pickerPlaceholder_d4uqu_210"
  , QS = "_destabilizeSection_d4uqu_217"
  , KS = "_animationCard_d4uqu_227"
  , ZS = "_progressBar_d4uqu_237"
  , JS = "_progressFill_d4uqu_245"
  , IS = "_attemptCounter_d4uqu_252"
  , WS = "_attemptLabel_d4uqu_259"
  , FS = "_attemptNumbers_d4uqu_266"
  , PS = "_nextStepBtn_d4uqu_273"
  , e3 = "_setupCard_d4uqu_295"
  , t3 = "_setupLabel_d4uqu_305"
  , n3 = "_setupControls_d4uqu_313"
  , a3 = "_setupAdjust_d4uqu_320"
  , l3 = "_setupCount_d4uqu_344"
  , i3 = "_runBtn_d4uqu_353"
  , o3 = "_resultsCard_d4uqu_375"
  , s3 = "_resultsInfo_d4uqu_385"
  , r3 = "_resultStat_d4uqu_390"
  , c3 = "_resultLabel_d4uqu_401"
  , u3 = "_resultValue_d4uqu_409"
  , f3 = "_resultsActions_d4uqu_415"
  , d3 = "_resultBtn_d4uqu_420"
  , m3 = "_accept_d4uqu_436"
  , h3 = "_reject_d4uqu_449"
  , je = {
    panel: jS,
    section: AS,
    sectionHeader: ES,
    sectionTitle: RS,
    dealBtn: MS,
    roomGrid: wS,
    slot: zS,
    filled: kS,
    selected: DS,
    roomSlot: LS,
    slotIcon: OS,
    slotPlaceholder: BS,
    slotLabel: qS,
    emptySlot: US,
    picker: GS,
    pickerHeader: HS,
    pickerGrid: $S,
    pickerItem: YS,
    pickerIcon: VS,
    pickerPlaceholder: XS,
    destabilizeSection: QS,
    animationCard: KS,
    progressBar: ZS,
    progressFill: JS,
    attemptCounter: IS,
    attemptLabel: WS,
    attemptNumbers: FS,
    nextStepBtn: PS,
    setupCard: e3,
    setupLabel: t3,
    setupControls: n3,
    setupAdjust: a3,
    setupCount: l3,
    runBtn: i3,
    resultsCard: o3,
    resultsInfo: s3,
    resultStat: r3,
    resultLabel: c3,
    resultValue: u3,
    resultsActions: f3,
    resultBtn: d3,
    accept: m3,
    reject: h3
}
  , Xy = 6
  , y3 = 6;
function p3(l) {
    const a = bt.c(57)
      , {grid: r, roomSlots: c, onRoomSlotsChange: u, onSelectRoomFromSlot: m, onDestabilize: f, selectedSlotRoom: y, pendingDestabilization: g, destabilizationAnimation: p, onNextStep: b, onAcceptDestabilization: x, onRejectDestabilization: T} = l
      , [O,k] = C.useState(null)
      , [M,w] = C.useState(2);
    let Y, $;
    a[0] !== r ? (Y = () => {
        const ce = Oy(r, !1, !1);
        w(ce)
    }
    ,
    $ = [r],
    a[0] = r,
    a[1] = Y,
    a[2] = $) : (Y = a[1],
    $ = a[2]),
    C.useEffect(Y, $);
    let P;
    a[3] !== r ? (P = () => {
        const ce = Hn(r, "altar_of_sacrifice").length > 0;
        return tf.filter(me => !(me === "empty" || me === "altar_of_sacrifice" && ce || Fe[me]?.transformsFrom))
    }
    ,
    a[3] = r,
    a[4] = P) : P = a[4];
    const X = P;
    let J;
    a[5] !== m || a[6] !== c ? (J = ce => {
        const me = c[ce];
        me.roomId ? m(me.roomId) : k(ce)
    }
    ,
    a[5] = m,
    a[6] = c,
    a[7] = J) : J = a[7];
    const Z = J;
    let z;
    a[8] !== u || a[9] !== c ? (z = (ce, me) => {
        ce.preventDefault();
        const ge = [...c];
        ge[me] = {
            roomId: null
        },
        u(ge)
    }
    ,
    a[8] = u,
    a[9] = c,
    a[10] = z) : z = a[10];
    const U = z;
    let G;
    a[11] !== u || a[12] !== c || a[13] !== O ? (G = ce => {
        if (O === null)
            return;
        const me = [...c];
        me[O] = {
            roomId: ce
        },
        u(me),
        k(null)
    }
    ,
    a[11] = u,
    a[12] = c,
    a[13] = O,
    a[14] = G) : G = a[14];
    const Q = G;
    let ae;
    a[15] !== r || a[16] !== u ? (ae = () => {
        const me = R2(r, !0).map(b3);
        for (; me.length < Xy; )
            me.push({
                roomId: null
            });
        u(me)
    }
    ,
    a[15] = r,
    a[16] = u,
    a[17] = ae) : ae = a[17];
    const oe = ae;
    let ie;
    a[18] !== M || a[19] !== f ? (ie = () => {
        f(M)
    }
    ,
    a[18] = M,
    a[19] = f,
    a[20] = ie) : ie = a[20];
    const se = ie;
    let ee;
    a[21] === Symbol.for("react.memo_cache_sentinel") ? (ee = () => {
        k(null)
    }
    ,
    a[21] = ee) : ee = a[21];
    const j = ee;
    let H;
    a[22] === Symbol.for("react.memo_cache_sentinel") ? (H = d.jsx("span", {
        className: je.sectionTitle,
        children: "Room Cards"
    }),
    a[22] = H) : H = a[22];
    let E;
    a[23] === Symbol.for("react.memo_cache_sentinel") ? (E = d.jsxs("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [d.jsx("path", {
            d: "M23 4v6h-6M1 20v-6h6"
        }), d.jsx("path", {
            d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
        })]
    }),
    a[23] = E) : E = a[23];
    let B;
    a[24] !== oe ? (B = d.jsxs("div", {
        className: je.sectionHeader,
        children: [H, d.jsxs("button", {
            className: je.dealBtn,
            onClick: oe,
            children: [E, "Deal"]
        })]
    }),
    a[24] = oe,
    a[25] = B) : B = a[25];
    let le;
    if (a[26] !== Z || a[27] !== U || a[28] !== c || a[29] !== y) {
        let ce;
        a[31] !== Z || a[32] !== U || a[33] !== y ? (ce = (me, ge) => d.jsx("div", {
            className: `${je.slot} ${je.roomSlot} ${me.roomId ? je.filled : ""} ${y === me.roomId && me.roomId ? je.selected : ""}`,
            onClick: () => Z(ge),
            onContextMenu: Le => U(Le, ge),
            title: me.roomId ? `${Fe[me.roomId]?.name} (click to place, right-click to remove)` : "Click to add room",
            children: me.roomId ? d.jsxs(d.Fragment, {
                children: [Ua(me.roomId) ? d.jsx("img", {
                    src: Ua(me.roomId),
                    alt: "",
                    className: je.slotIcon
                }) : d.jsx("div", {
                    className: je.slotPlaceholder,
                    style: {
                        background: Fe[me.roomId]?.color
                    }
                }), d.jsx("span", {
                    className: je.slotLabel,
                    children: Fe[me.roomId]?.shortName || Fe[me.roomId]?.name.slice(0, 2)
                })]
            }) : d.jsx("span", {
                className: je.emptySlot,
                children: "+"
            })
        }, ge),
        a[31] = Z,
        a[32] = U,
        a[33] = y,
        a[34] = ce) : ce = a[34],
        le = c.map(ce),
        a[26] = Z,
        a[27] = U,
        a[28] = c,
        a[29] = y,
        a[30] = le
    } else
        le = a[30];
    let _;
    a[35] !== le ? (_ = d.jsx("div", {
        className: je.roomGrid,
        children: le
    }),
    a[35] = le,
    a[36] = _) : _ = a[36];
    let A;
    a[37] !== X || a[38] !== Q || a[39] !== O ? (A = O !== null && d.jsxs("div", {
        className: je.picker,
        onClick: v3,
        children: [d.jsx("div", {
            className: je.pickerHeader,
            children: "Select Room"
        }), d.jsx("div", {
            className: je.pickerGrid,
            children: X().map(ce => {
                const me = Fe[ce]
                  , ge = Ua(ce);
                return d.jsx("button", {
                    className: je.pickerItem,
                    onClick: () => Q(ce),
                    title: me?.name,
                    children: ge ? d.jsx("img", {
                        src: ge,
                        alt: "",
                        className: je.pickerIcon
                    }) : d.jsx("div", {
                        className: je.pickerPlaceholder,
                        style: {
                            background: me?.color
                        }
                    })
                }, ce)
            }
            )
        })]
    }),
    a[37] = X,
    a[38] = Q,
    a[39] = O,
    a[40] = A) : A = a[40];
    let K;
    a[41] !== B || a[42] !== _ || a[43] !== A ? (K = d.jsxs("div", {
        className: je.section,
        onClick: _3,
        children: [B, _, A]
    }),
    a[41] = B,
    a[42] = _,
    a[43] = A,
    a[44] = K) : K = a[44];
    let W;
    a[45] === Symbol.for("react.memo_cache_sentinel") ? (W = d.jsx("div", {
        className: je.sectionHeader,
        children: d.jsx("span", {
            className: je.sectionTitle,
            children: "Destabilization"
        })
    }),
    a[45] = W) : W = a[45];
    let re;
    a[46] !== p || a[47] !== M || a[48] !== se || a[49] !== x || a[50] !== b || a[51] !== T || a[52] !== g ? (re = d.jsxs("div", {
        className: je.destabilizeSection,
        onClick: g3,
        children: [W, p ? d.jsxs("div", {
            className: je.animationCard,
            children: [d.jsx("div", {
                className: je.progressBar,
                children: d.jsx("div", {
                    className: je.progressFill,
                    style: {
                        width: `${p.currentAttempt / p.totalAttempts * 100}%`
                    }
                })
            }), d.jsxs("div", {
                className: je.attemptCounter,
                children: [d.jsx("span", {
                    className: je.attemptLabel,
                    children: p.targetedRoom ? p.isProtectedAttempt ? "🛡️ Защищено" : "❌ Удалено" : "Шаг"
                }), d.jsxs("span", {
                    className: je.attemptNumbers,
                    children: [p.currentAttempt, " /", " ", p.totalAttempts]
                })]
            }), d.jsx("button", {
                className: je.nextStepBtn,
                onClick: b,
                children: p.currentAttempt >= p.totalAttempts ? "Результат" : "Следующий →"
            })]
        }) : g ? d.jsxs("div", {
            className: je.resultsCard,
            children: [d.jsxs("div", {
                className: je.resultsInfo,
                children: [d.jsxs("div", {
                    className: je.resultStat,
                    children: [d.jsx("span", {
                        className: je.resultLabel,
                        children: "Удалено"
                    }), d.jsx("span", {
                        className: je.resultValue,
                        children: g.removedRooms.length
                    })]
                }), d.jsxs("div", {
                    className: je.resultStat,
                    children: [d.jsx("span", {
                        className: je.resultLabel,
                        children: "Защищено"
                    }), d.jsx("span", {
                        className: je.resultValue,
                        children: g.protectedRooms.length
                    })]
                })]
            }), d.jsxs("div", {
                className: je.resultsActions,
                children: [d.jsxs("button", {
                    className: `${je.resultBtn} ${je.accept}`,
                    onClick: x,
                    children: [d.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: d.jsx("polyline", {
                            points: "20,6 9,17 4,12"
                        })
                    }), "Accept"]
                }), d.jsxs("button", {
                    className: `${je.resultBtn} ${je.reject}`,
                    onClick: T,
                    children: [d.jsxs("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [d.jsx("line", {
                            x1: "18",
                            y1: "6",
                            x2: "6",
                            y2: "18"
                        }), d.jsx("line", {
                            x1: "6",
                            y1: "6",
                            x2: "18",
                            y2: "18"
                        })]
                    }), "Reject"]
                })]
            })]
        }) : d.jsxs("div", {
            className: je.setupCard,
            children: [d.jsx("div", {
                className: je.setupLabel,
                children: "Количество повторений"
            }), d.jsxs("div", {
                className: je.setupControls,
                children: [d.jsx("button", {
                    className: je.setupAdjust,
                    onClick: () => w(Math.max(1, M - 1)),
                    children: "−"
                }), d.jsx("span", {
                    className: je.setupCount,
                    children: M
                }), d.jsx("button", {
                    className: je.setupAdjust,
                    onClick: () => w(Math.min(10, M + 1)),
                    children: "+"
                })]
            }), d.jsx("button", {
                className: je.runBtn,
                onClick: se,
                children: "Запустить"
            })]
        })]
    }),
    a[46] = p,
    a[47] = M,
    a[48] = se,
    a[49] = x,
    a[50] = b,
    a[51] = T,
    a[52] = g,
    a[53] = re) : re = a[53];
    let fe;
    return a[54] !== K || a[55] !== re ? (fe = d.jsxs("div", {
        className: je.panel,
        onClick: j,
        children: [K, re]
    }),
    a[54] = K,
    a[55] = re,
    a[56] = fe) : fe = a[56],
    fe
}
function g3(l) {
    return l.stopPropagation()
}
function v3(l) {
    return l.stopPropagation()
}
function _3(l) {
    return l.stopPropagation()
}
function b3(l) {
    return {
        roomId: l
    }
}
function x3() {
    return Array(Xy).fill(null).map( () => ({
        roomId: null
    }))
}
function S3() {
    return Array(y3).fill(null).map( () => ({
        medallionId: null
    }))
}
const C3 = "_app_qxlc4_1"
  , T3 = "_leftColumn_qxlc4_41"
  , N3 = "_rightColumn_qxlc4_58"
  , j3 = "_roomsPanel_qxlc4_75"
  , A3 = "_centerColumn_qxlc4_89"
  , E3 = "_gameModeBtn_qxlc4_101"
  , R3 = "_gameActive_qxlc4_131"
  , M3 = "_gameModeLabel_qxlc4_140"
  , w3 = "_gridPanel_qxlc4_144"
  , z3 = "_bottomBar_qxlc4_156"
  , k3 = "_actionGroup_qxlc4_174"
  , D3 = "_divider_qxlc4_184"
  , L3 = "_effectsPanel_qxlc4_192"
  , O3 = "_destabilizationIndicator_qxlc4_227"
  , B3 = "_destabilizationIcon_qxlc4_233"
  , q3 = "_kbd_qxlc4_289"
  , U3 = "_russianToggle_qxlc4_293"
  , G3 = "_checkpointGroup_qxlc4_297"
  , H3 = "_legendContainer_qxlc4_357"
  , $3 = "_textBtn_qxlc4_375"
  , Y3 = "_iconBtn_qxlc4_381"
  , V3 = "_toggle_qxlc4_386"
  , X3 = "_toggleLabel_qxlc4_391"
  , Q3 = "_toggleTrack_qxlc4_446"
  , K3 = "_panelTitle_qxlc4_469"
  , Z3 = "_panelHeader_qxlc4_480"
  , J3 = "_danger_qxlc4_635"
  , I3 = "_primary_qxlc4_679"
  , W3 = "_toggleLabelActive_qxlc4_778"
  , F3 = "_checkpointIndicator_qxlc4_783"
  , P3 = "_checkpointDot_qxlc4_801"
  , e4 = "_gameModeContainer_qxlc4_821"
  , t4 = "_destabilizationText_qxlc4_870"
  , n4 = "_toast_qxlc4_874"
  , a4 = "_toastVisible_qxlc4_896"
  , pe = {
    app: C3,
    leftColumn: T3,
    rightColumn: N3,
    roomsPanel: j3,
    centerColumn: A3,
    gameModeBtn: E3,
    gameActive: R3,
    gameModeLabel: M3,
    gridPanel: w3,
    bottomBar: z3,
    actionGroup: k3,
    divider: D3,
    effectsPanel: L3,
    destabilizationIndicator: O3,
    destabilizationIcon: B3,
    kbd: q3,
    russianToggle: U3,
    checkpointGroup: G3,
    legendContainer: H3,
    textBtn: $3,
    iconBtn: Y3,
    toggle: V3,
    toggleLabel: X3,
    toggleTrack: Q3,
    panelTitle: K3,
    panelHeader: Z3,
    danger: J3,
    primary: I3,
    toggleLabelActive: W3,
    checkpointIndicator: F3,
    checkpointDot: P3,
    gameModeContainer: e4,
    destabilizationText: t4,
    toast: n4,
    toastVisible: a4
};
function l4(l) {
    const a = bt.c(4)
      , {message: r, visible: c} = l
      , u = `${pe.toast} ${c ? pe.toastVisible : ""}`;
    let m;
    a[0] === Symbol.for("react.memo_cache_sentinel") ? (m = d.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: d.jsx("polyline", {
            points: "20,6 9,17 4,12"
        })
    }),
    a[0] = m) : m = a[0];
    let f;
    return a[1] !== r || a[2] !== u ? (f = d.jsxs("div", {
        className: u,
        children: [m, r]
    }),
    a[1] = r,
    a[2] = u,
    a[3] = f) : f = a[3],
    f
}
function i4() {
    const l = bt.c(235)
      , {grid: a, selectedRoom: r, manualMode: c, russianMode: u, validPlacements: m, score: f, canUndo: y, canRedo: g, hasCheckpoint: p, hasAltar: b, sacrificeUsed: x, selectRoom: T, placeRoom: O, placeRoomAt: k, clearCell: M, applyGrid: w, toggleManualMode: Y, toggleRussianMode: $, resetGrid: P, mirrorGrid: X, shareLayout: J, saveCheckpoint: Z, restoreCheckpoint: z, clearCheckpoint: U, undo: G, redo: Q, getValidRoomsForCell: ae, applyMedallionToAll: oe, upgradeTier: ie, downgradeTier: se, activeSlot: ee, isSharedLayout: j, clearSharedLayoutFlag: H, updateActiveSlot: E} = U2()
      , [B,le] = C.useState(null)
      , [_,A] = C.useState(null);
    let K;
    l[0] === Symbol.for("react.memo_cache_sentinel") ? (K = [],
    l[0] = K) : K = l[0];
    const [W,re] = C.useState(K)
      , [fe,ce] = C.useState(null);
    let me;
    l[1] === Symbol.for("react.memo_cache_sentinel") ? (me = [],
    l[1] = me) : me = l[1];
    const [ge,Le] = C.useState(me)
      , {colorMap: dt} = Gy(a)
      , [ue,Pe] = C.useState(!1)
      , [ne,ye] = C.useState(x3)
      , [Se,ke] = C.useState(S3)
      , [_e,De] = C.useState(null)
      , [xt,Zt] = C.useState("")
      , [it,ra] = C.useState(!1)
      , We = C.useRef(null)
      , ca = C.useRef(null)
      , [St,Bt] = C.useState(null)
      , [Ze,tn] = C.useState(null)
      , [Jt,pl] = C.useState(null);
    let Ca;
    e: {
        if (St) {
            Ca = St.removedRooms.length;
            break e
        }
        let be;
        l[2] !== a ? (be = Oy(a, !1, !1),
        l[2] = a,
        l[3] = be) : be = l[3],
        Ca = be
    }
    const $t = Ca;
    let pt;
    l[4] === Symbol.for("react.memo_cache_sentinel") ? (pt = be => {
        We.current && clearTimeout(We.current),
        Zt(be),
        ra(!0),
        We.current = window.setTimeout( () => {
            ra(!1)
        }
        , 2e3)
    }
    ,
    l[4] = pt) : pt = l[4];
    const gt = pt;
    let vt;
    l[5] !== J ? (vt = async () => {
        const be = await J();
        gt(be ? "Ссылка скопирована в буфер!" : "Ошибка копирования ссылки")
    }
    ,
    l[5] = J,
    l[6] = vt) : vt = l[6];
    const ua = vt;
    let fa;
    l[7] !== oe ? (fa = () => {
        const be = oe();
        be > 0 ? gt(`Применение медальона на ${be} room${be === 1 ? "" : "s"}`) : gt("Нет комнат для применения медальона")
    }
    ,
    l[7] = oe,
    l[8] = fa) : fa = l[8];
    const $a = fa;
    let nn, bn;
    l[9] !== ae || l[10] !== a || l[11] !== B ? (nn = () => {
        if (B)
            if (a[B.y]?.[B.x]?.room === "empty") {
                let Ae = ae(B);
                Ae = Ae.filter(f4),
                Ae.length === 0 ? (le(null),
                A(null),
                re([])) : re(Ae)
            } else
                re([]);
        else
            re([])
    }
    ,
    bn = [B, a, ae],
    l[9] = ae,
    l[10] = a,
    l[11] = B,
    l[12] = nn,
    l[13] = bn) : (nn = l[12],
    bn = l[13]),
    C.useEffect(nn, bn);
    let an;
    l[14] === Symbol.for("react.memo_cache_sentinel") ? (an = () => {
        le(null),
        A(null),
        re([])
    }
    ,
    l[14] = an) : an = l[14];
    const _t = an;
    let ln;
    l[15] !== k || l[16] !== B ? (ln = be => {
        B && k(B, be) && _t()
    }
    ,
    l[15] = k,
    l[16] = B,
    l[17] = ln) : ln = l[17];
    const xn = ln;
    let da;
    l[18] !== a || l[19] !== O || l[20] !== T || l[21] !== B?.x || l[22] !== B?.y || l[23] !== r || l[24] !== _e ? (da = (be, Ae) => {
        const _a = a[be.y]?.[be.x];
        if (r) {
            O(be) && (_e && r === _e && (ye(ci => {
                const zi = ci.findIndex(Pn => Pn.roomId === _e);
                if (zi !== -1) {
                    const Pn = [...ci];
                    return Pn[zi] = {
                        roomId: null
                    },
                    Pn
                }
                return ci
            }
            ),
            De(null)),
            _t(),
            T(null));
            return
        }
        _a?.room === "empty" ? B?.x === be.x && B?.y === be.y ? _t() : (le(be),
        Ae && A({
            x: Ae.clientX + 20,
            y: Ae.clientY + 10
        })) : _t()
    }
    ,
    l[18] = a,
    l[19] = O,
    l[20] = T,
    l[21] = B?.x,
    l[22] = B?.y,
    l[23] = r,
    l[24] = _e,
    l[25] = da) : da = l[25];
    const ma = da;
    let Vn;
    l[26] !== M ? (Vn = be => {
        M(be),
        _t()
    }
    ,
    l[26] = M,
    l[27] = Vn) : Vn = l[27];
    const on = Vn;
    let Sn;
    l[28] !== k || l[29] !== T || l[30] !== B ? (Sn = be => {
        if (B && be && be !== "medallion" && be !== "sacrifice" && be !== "lock" && be !== "empty" && k(B, be)) {
            _t();
            return
        }
        T(be)
    }
    ,
    l[28] = k,
    l[29] = T,
    l[30] = B,
    l[31] = Sn) : Sn = l[31];
    const Cn = Sn;
    let sn;
    l[32] !== T ? (sn = () => {
        _t(),
        T(null),
        De(null)
    }
    ,
    l[32] = T,
    l[33] = sn) : sn = l[33];
    const Tn = sn;
    let Ft;
    l[34] !== w || l[35] !== Jt || l[36] !== T ? (Ft = () => {
        Pe(be => (be && Jt && w(Jt),
        !be)),
        tn(null),
        Bt(null),
        pl(null),
        De(null),
        T(null)
    }
    ,
    l[34] = w,
    l[35] = Jt,
    l[36] = T,
    l[37] = Ft) : Ft = l[37];
    const rn = Ft;
    let Xn;
    l[38] !== T ? (Xn = be => {
        De(be),
        T(be)
    }
    ,
    l[38] = T,
    l[39] = Xn) : Xn = l[39];
    const Ue = Xn;
    let Ne;
    l[40] !== a || l[41] !== T ? (Ne = be => {
        pl(_n(a)),
        tn({
            isRunning: !0,
            currentAttempt: 0,
            totalAttempts: be,
            targetedRoom: null,
            isProtectedAttempt: !1,
            accumulatedRemoved: [],
            accumulatedProtected: []
        }),
        T(null),
        _t()
    }
    ,
    l[40] = a,
    l[41] = T,
    l[42] = Ne) : Ne = l[42];
    const Ce = Ne;
    let we;
    l[43] !== w || l[44] !== Ze || l[45] !== a ? (we = () => {
        if (!Ze || !Ze.isRunning)
            return;
        const {currentAttempt: be, totalAttempts: Ae} = Ze;
        if (Ze.targetedRoom) {
            tn(u4);
            return
        }
        if (be >= Ae) {
            Bt({
                removedRooms: Ze.accumulatedRemoved,
                protectedRooms: Ze.accumulatedProtected,
                newGrid: a
            }),
            tn(null);
            return
        }
        const _a = [];
        a.forEach( (ci, zi) => {
            ci.forEach( (Pn, Er) => {
                Pn.isLocked && Pn.room !== "empty" && Pn.room !== "path" && _a.push({
                    x: Er,
                    y: zi
                })
            }
            )
        }
        );
        const wn = M2(a, _a, be + 1, Ae);
        if (!wn) {
            Bt({
                removedRooms: Ze.accumulatedRemoved,
                protectedRooms: Ze.accumulatedProtected,
                newGrid: a
            }),
            tn(null);
            return
        }
        wn.wasProtected || w(wn.gridAfterStep),
        tn({
            ...Ze,
            targetedRoom: wn.targetedRoom,
            isProtectedAttempt: wn.wasProtected,
            accumulatedRemoved: wn.wasProtected ? Ze.accumulatedRemoved : [...Ze.accumulatedRemoved, wn.targetedRoom],
            accumulatedProtected: wn.wasProtected ? [...Ze.accumulatedProtected, wn.targetedRoom] : Ze.accumulatedProtected
        })
    }
    ,
    l[43] = w,
    l[44] = Ze,
    l[45] = a,
    l[46] = we) : we = l[46];
    const $e = we;
    let Ta;
    l[47] !== w || l[48] !== St ? (Ta = () => {
        St && (gt(`Дестабилизировано ${St.removedRooms.length} комнат`),
        w(St.newGrid),
        Bt(null),
        tn(null),
        pl(null))
    }
    ,
    l[47] = w,
    l[48] = St,
    l[49] = Ta) : Ta = l[49];
    const gl = Ta;
    let cn;
    l[50] !== w || l[51] !== Jt ? (cn = () => {
        Jt && w(Jt),
        Bt(null),
        tn(null),
        pl(null),
        gt("Дестабилизация отменена")
    }
    ,
    l[50] = w,
    l[51] = Jt,
    l[52] = cn) : cn = l[52];
    const Na = cn;
    let Qn;
    l[53] !== w || l[54] !== T || l[55] !== E ? (Qn = be => {
        try {
            const Ae = Hu(be);
            Ae ? (w(Ae),
            gt("Пресет успешно загружен!"),
            T(null),
            De(null),
            _t(),
            E(null)) : gt("Ошибка загрузки пресета")
        } catch (Ae) {
            console.error("Error loading preset:", Ae),
            gt("Ошибка загрузки пресета")
        }
    }
    ,
    l[53] = w,
    l[54] = T,
    l[55] = E,
    l[56] = Qn) : Qn = l[56];
    const Ya = Qn;
    let Nn;
    l[57] !== w || l[58] !== H || l[59] !== T || l[60] !== E ? (Nn = (be, Ae) => {
        w(be),
        E(Ae),
        H(),
        T(null),
        De(null),
        _t(),
        Ae && gt(`Загружен макет ${Ae}`)
    }
    ,
    l[57] = w,
    l[58] = H,
    l[59] = T,
    l[60] = E,
    l[61] = Nn) : Nn = l[61];
    const Kn = Nn;
    let Zn, jn;
    l[62] !== r || l[63] !== _e ? (Zn = () => {
        _e && r !== _e && De(null)
    }
    ,
    jn = [r, _e],
    l[62] = r,
    l[63] = _e,
    l[64] = Zn,
    l[65] = jn) : (Zn = l[64],
    jn = l[65]),
    C.useEffect(Zn, jn);
    let st, ja;
    l[66] !== ua || l[67] !== X || l[68] !== Q || l[69] !== P || l[70] !== Y || l[71] !== $ || l[72] !== G ? (st = () => {
        const be = Ae => {
            const _a = Ae.target;
            if (!(_a.tagName === "INPUT" || _a.tagName === "TEXTAREA" || _a.isContentEditable)) {
                if ((Ae.ctrlKey || Ae.metaKey) && Ae.key === "c") {
                    Ae.preventDefault(),
                    ua();
                    return
                }
                if (Ae.shiftKey && Ae.key === "R") {
                    Ae.preventDefault(),
                    $();
                    return
                }
                if (!Ae.ctrlKey && !Ae.metaKey && !Ae.altKey && !Ae.shiftKey)
                    e: switch (Ae.key.toLowerCase()) {
                    case "r":
                        {
                            Ae.preventDefault(),
                            P();
                            break e
                        }
                    case "m":
                        {
                            Ae.preventDefault(),
                            X();
                            break e
                        }
                    case "f":
                        {
                            Ae.preventDefault(),
                            Y();
                            break e
                        }
                    case "e":
                        {
                            Ae.preventDefault(),
                            Q();
                            break e
                        }
                    case "q":
                        Ae.preventDefault(),
                        G()
                    }
            }
        }
        ;
        return window.addEventListener("keydown", be),
        () => window.removeEventListener("keydown", be)
    }
    ,
    ja = [ua, $, P, X, Y, Q, G],
    l[66] = ua,
    l[67] = X,
    l[68] = Q,
    l[69] = P,
    l[70] = Y,
    l[71] = $,
    l[72] = G,
    l[73] = st,
    l[74] = ja) : (st = l[73],
    ja = l[74]),
    C.useEffect(st, ja);
    let vl;
    e: {
        if (!Ze) {
            vl = null;
            break e
        }
        let be;
        l[75] !== a ? (be = By(a),
        l[75] = a,
        l[76] = be) : be = l[76],
        vl = be
    }
    const un = vl;
    let It;
    l[77] === Symbol.for("react.memo_cache_sentinel") ? (It = d.jsx(Ux, {}),
    l[77] = It) : It = l[77];
    let Jn;
    l[78] !== xt || l[79] !== it ? (Jn = d.jsx(l4, {
        message: xt,
        visible: it
    }),
    l[78] = xt,
    l[79] = it,
    l[80] = Jn) : Jn = l[80];
    let An;
    l[81] !== dt || l[82] !== a || l[83] !== xn || l[84] !== _ || l[85] !== W || l[86] !== fe || l[87] !== B ? (An = _ && W.length > 0 && B && d.jsx(H_, {
        rooms: W,
        anchorPosition: _,
        onSelectRoom: xn,
        onClose: _t,
        roomWarnings: fe || void 0,
        grid: a,
        cellPosition: B,
        colorMap: dt
    }),
    l[81] = dt,
    l[82] = a,
    l[83] = xn,
    l[84] = _,
    l[85] = W,
    l[86] = fe,
    l[87] = B,
    l[88] = An) : An = l[88];
    let In;
    l[89] === Symbol.for("react.memo_cache_sentinel") ? (In = d.jsx("div", {
        className: pe.panelHeader,
        children: d.jsx("span", {
            className: pe.panelTitle,
            children: "Rooms"
        })
    }),
    l[89] = In) : In = l[89];
    let Aa;
    l[90] !== $a || l[91] !== Cn || l[92] !== b || l[93] !== x || l[94] !== r ? (Aa = d.jsxs("div", {
        className: pe.roomsPanel,
        children: [In, d.jsx(__, {
            selectedRoom: r,
            onSelectRoom: Cn,
            hasAltar: b,
            sacrificeUsed: x,
            onApplyMedallionToAll: $a
        })]
    }),
    l[90] = $a,
    l[91] = Cn,
    l[92] = b,
    l[93] = x,
    l[94] = r,
    l[95] = Aa) : Aa = l[95];
    let En;
    l[96] !== ee || l[97] !== a || l[98] !== Kn || l[99] !== Ya || l[100] !== ue || l[101] !== j ? (En = !ue && d.jsx(CS, {
        currentGrid: a,
        activeSlot: ee,
        isSharedLayout: j,
        onLoadLayout: Kn,
        onLoadPreset: Ya
    }),
    l[96] = ee,
    l[97] = a,
    l[98] = Kn,
    l[99] = Ya,
    l[100] = ue,
    l[101] = j,
    l[102] = En) : En = l[102];
    let Rn;
    l[103] !== Ze || l[104] !== a || l[105] !== gl || l[106] !== Ce || l[107] !== $e || l[108] !== Na || l[109] !== Ue || l[110] !== ue || l[111] !== Se || l[112] !== St || l[113] !== ne || l[114] !== _e ? (Rn = ue && d.jsx("div", {
        className: pe.gameModeContainer,
        children: d.jsx(p3, {
            grid: a,
            roomSlots: ne,
            medallionSlots: Se,
            onRoomSlotsChange: ye,
            onMedallionSlotsChange: ke,
            onSelectRoomFromSlot: Ue,
            onDestabilize: Ce,
            selectedSlotRoom: _e,
            pendingDestabilization: St,
            destabilizationAnimation: Ze,
            onNextStep: $e,
            onAcceptDestabilization: gl,
            onRejectDestabilization: Na
        })
    }),
    l[103] = Ze,
    l[104] = a,
    l[105] = gl,
    l[106] = Ce,
    l[107] = $e,
    l[108] = Na,
    l[109] = Ue,
    l[110] = ue,
    l[111] = Se,
    l[112] = St,
    l[113] = ne,
    l[114] = _e,
    l[115] = Rn) : Rn = l[115];
    let qt;
    l[116] !== Aa || l[117] !== En || l[118] !== Rn ? (qt = d.jsxs("div", {
        className: pe.leftColumn,
        onClick: c4,
        children: [Aa, En, Rn]
    }),
    l[116] = Aa,
    l[117] = En,
    l[118] = Rn,
    l[119] = qt) : qt = l[119];
    const Ut = St?.removedRooms || null;
    let Va;
    l[120] === Symbol.for("react.memo_cache_sentinel") ? (Va = [],
    l[120] = Va) : Va = l[120];
    const ti = Ze?.targetedRoom ?? null
      , Xa = Ze?.isProtectedAttempt ?? !1;
    let zt;
    l[121] !== un || l[122] !== se || l[123] !== ae || l[124] !== a || l[125] !== ma || l[126] !== on || l[127] !== B || l[128] !== r || l[129] !== Ut || l[130] !== ti || l[131] !== Xa || l[132] !== ie || l[133] !== m ? (zt = d.jsx("div", {
        className: pe.centerColumn,
        ref: ca,
        children: d.jsx("div", {
            className: pe.gridPanel,
            onClick: r4,
            children: d.jsx(a_, {
                grid: a,
                validPlacements: m,
                selectedRoom: r,
                selectedCell: B,
                onCellClick: ma,
                onCellRightClick: on,
                getValidRoomsForCell: ae,
                onRoomWarningsChange: ce,
                onChainStatsChange: Le,
                pendingRemoval: Ut,
                onUpgradeTier: ie,
                onDowngradeTier: se,
                protectedPositions: Va,
                targetedRoom: ti,
                isProtectedTarget: Xa,
                destabilizableRooms: un
            })
        })
    }),
    l[121] = un,
    l[122] = se,
    l[123] = ae,
    l[124] = a,
    l[125] = ma,
    l[126] = on,
    l[127] = B,
    l[128] = r,
    l[129] = Ut,
    l[130] = ti,
    l[131] = Xa,
    l[132] = ie,
    l[133] = m,
    l[134] = zt) : zt = l[134];
    const _l = `${pe.gameModeBtn} ${ue ? pe.gameActive : ""}`
      , mo = ue ? "Переключить в режим планирования" : "Переключить в режим дестабилизации";
    let Yt;
    l[135] === Symbol.for("react.memo_cache_sentinel") ? (Yt = d.jsxs("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [d.jsx("rect", {
            x: "2",
            y: "6",
            width: "20",
            height: "12",
            rx: "2"
        }), d.jsx("circle", {
            cx: "8",
            cy: "12",
            r: "2"
        }), d.jsx("line", {
            x1: "15",
            y1: "10",
            x2: "15",
            y2: "14"
        }), d.jsx("line", {
            x1: "13",
            y1: "12",
            x2: "17",
            y2: "12"
        })]
    }),
    l[135] = Yt) : Yt = l[135];
    const ni = ue ? "Planning" : "Destabilization";
    let Qa;
    l[136] !== ni ? (Qa = d.jsx("span", {
        className: pe.gameModeLabel,
        children: ni
    }),
    l[136] = ni,
    l[137] = Qa) : Qa = l[137];
    let Ea;
    l[138] !== rn || l[139] !== _l || l[140] !== mo || l[141] !== Qa ? (Ea = d.jsxs("button", {
        className: _l,
        onClick: rn,
        title: mo,
        children: [Yt, Qa]
    }),
    l[138] = rn,
    l[139] = _l,
    l[140] = mo,
    l[141] = Qa,
    l[142] = Ea) : Ea = l[142];
    let ha;
    l[143] === Symbol.for("react.memo_cache_sentinel") ? (ha = d.jsx("div", {
        className: pe.divider
    }),
    l[143] = ha) : ha = l[143];
    let ai;
    l[144] === Symbol.for("react.memo_cache_sentinel") ? (ai = d.jsx("span", {
        className: pe.kbd,
        children: "Q"
    }),
    l[144] = ai) : ai = l[144];
    const Ai = !y;
    let ya;
    l[145] === Symbol.for("react.memo_cache_sentinel") ? (ya = d.jsxs("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [d.jsx("path", {
            d: "M3 7v6h6"
        }), d.jsx("path", {
            d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
        })]
    }),
    l[145] = ya) : ya = l[145];
    let bl;
    l[146] !== Ai || l[147] !== G ? (bl = d.jsx("button", {
        className: pe.iconBtn,
        onClick: G,
        disabled: Ai,
        title: "Назад (Ctrl+Z / Q)",
        children: ya
    }),
    l[146] = Ai,
    l[147] = G,
    l[148] = bl) : bl = l[148];
    const Ei = !g;
    let li;
    l[149] === Symbol.for("react.memo_cache_sentinel") ? (li = d.jsxs("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [d.jsx("path", {
            d: "M21 7v6h-6"
        }), d.jsx("path", {
            d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
        })]
    }),
    l[149] = li) : li = l[149];
    let Ra;
    l[150] !== Q || l[151] !== Ei ? (Ra = d.jsx("button", {
        className: pe.iconBtn,
        onClick: Q,
        disabled: Ei,
        title: "Вперед (Ctrl+Y / E)",
        children: li
    }),
    l[150] = Q,
    l[151] = Ei,
    l[152] = Ra) : Ra = l[152];
    let Ri;
    l[153] === Symbol.for("react.memo_cache_sentinel") ? (Ri = d.jsx("span", {
        className: pe.kbd,
        children: "E"
    }),
    l[153] = Ri) : Ri = l[153];
    let xl;
    l[154] !== bl || l[155] !== Ra ? (xl = d.jsxs("div", {
        className: pe.actionGroup,
        children: [ai, bl, Ra, Ri]
    }),
    l[154] = bl,
    l[155] = Ra,
    l[156] = xl) : xl = l[156];
    let Ka;
    l[157] === Symbol.for("react.memo_cache_sentinel") ? (Ka = d.jsx("div", {
        className: pe.divider
    }),
    l[157] = Ka) : Ka = l[157];
    let fn;
    l[158] === Symbol.for("react.memo_cache_sentinel") ? (fn = d.jsx("span", {
        className: pe.kbd,
        children: "M"
    }),
    l[158] = fn) : fn = l[158];
    let Sl;
    l[159] === Symbol.for("react.memo_cache_sentinel") ? (Sl = d.jsxs("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [d.jsx("path", {
            d: "M12 3v18"
        }), d.jsx("path", {
            d: "M16 7l4 5-4 5"
        }), d.jsx("path", {
            d: "M8 7l-4 5 4 5"
        })]
    }),
    l[159] = Sl) : Sl = l[159];
    let Ma;
    l[160] !== X ? (Ma = d.jsx("button", {
        className: pe.iconBtn,
        onClick: X,
        title: "Отзеркалить по горизонту (M)",
        children: Sl
    }),
    l[160] = X,
    l[161] = Ma) : Ma = l[161];
    let pa;
    l[162] === Symbol.for("react.memo_cache_sentinel") ? (pa = d.jsxs("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [d.jsx("polyline", {
            points: "1,4 1,10 7,10"
        }), d.jsx("polyline", {
            points: "23,20 23,14 17,14"
        }), d.jsx("path", {
            d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
        })]
    }),
    l[162] = pa) : pa = l[162];
    let Mn;
    l[163] !== P ? (Mn = d.jsx("button", {
        className: `${pe.iconBtn} ${pe.danger}`,
        onClick: P,
        title: "Сбросить всё (R)",
        children: pa
    }),
    l[163] = P,
    l[164] = Mn) : Mn = l[164];
    let ii;
    l[165] === Symbol.for("react.memo_cache_sentinel") ? (ii = d.jsx("span", {
        className: pe.kbd,
        children: "R"
    }),
    l[165] = ii) : ii = l[165];
    let wa;
    l[166] !== Ma || l[167] !== Mn ? (wa = d.jsxs("div", {
        className: pe.actionGroup,
        children: [fn, Ma, Mn, ii]
    }),
    l[166] = Ma,
    l[167] = Mn,
    l[168] = wa) : wa = l[168];
    let oi;
    l[169] === Symbol.for("react.memo_cache_sentinel") ? (oi = d.jsx("div", {
        className: pe.divider
    }),
    l[169] = oi) : oi = l[169];
    let Wn;
    l[170] !== U || l[171] !== p || l[172] !== z || l[173] !== Z ? (Wn = d.jsx("div", {
        className: `${pe.actionGroup} ${pe.checkpointGroup}`,
        children: p ? d.jsxs(d.Fragment, {
            children: [d.jsxs("div", {
                className: pe.checkpointIndicator,
                children: [d.jsx("span", {
                    className: pe.checkpointDot
                }), "Сохранено"]
            }), d.jsx("button", {
                className: pe.iconBtn,
                onClick: z,
                title: "Обновить",
                children: d.jsxs("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [d.jsx("polyline", {
                        points: "1,4 1,10 7,10"
                    }), d.jsx("path", {
                        d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                    })]
                })
            }), d.jsx("button", {
                className: `${pe.iconBtn} ${pe.danger}`,
                onClick: U,
                title: "Очистить",
                children: d.jsxs("svg", {
                    width: "13",
                    height: "13",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [d.jsx("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                    }), d.jsx("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                    })]
                })
            })]
        }) : d.jsxs("button", {
            className: pe.textBtn,
            onClick: Z,
            title: "Сохранить планировку",
            children: [d.jsx("svg", {
                width: "13",
                height: "13",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: d.jsx("path", {
                    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                })
            }), "Checkpoint"]
        })
    }),
    l[170] = U,
    l[171] = p,
    l[172] = z,
    l[173] = Z,
    l[174] = Wn) : Wn = l[174];
    let dn;
    l[175] === Symbol.for("react.memo_cache_sentinel") ? (dn = d.jsx("div", {
        className: pe.divider
    }),
    l[175] = dn) : dn = l[175];
    const si = `${pe.toggleLabel} ${c ? "" : pe.toggleLabelActive}`;
    let Fn;
    l[176] !== si ? (Fn = d.jsx("span", {
        className: si,
        children: "In-Game"
    }),
    l[176] = si,
    l[177] = Fn) : Fn = l[177];
    let Pt;
    l[178] !== c || l[179] !== Y ? (Pt = d.jsx("input", {
        type: "checkbox",
        checked: c,
        onChange: Y
    }),
    l[178] = c,
    l[179] = Y,
    l[180] = Pt) : Pt = l[180];
    let Cl;
    l[181] === Symbol.for("react.memo_cache_sentinel") ? (Cl = d.jsx("span", {
        className: pe.toggleTrack
    }),
    l[181] = Cl) : Cl = l[181];
    const Tl = `${pe.toggleLabel} ${c ? pe.toggleLabelActive : ""}`;
    let Za;
    l[182] !== Tl ? (Za = d.jsx("span", {
        className: Tl,
        children: "Free"
    }),
    l[182] = Tl,
    l[183] = Za) : Za = l[183];
    let Ja;
    l[184] === Symbol.for("react.memo_cache_sentinel") ? (Ja = d.jsx("span", {
        className: pe.kbd,
        children: "F"
    }),
    l[184] = Ja) : Ja = l[184];
    let ga;
    l[185] !== Fn || l[186] !== Pt || l[187] !== Za ? (ga = d.jsxs("label", {
        className: pe.toggle,
        title: "Переключение между режимами в игре и свободным размещением (F)",
        children: [Fn, Pt, Cl, Za, Ja]
    }),
    l[185] = Fn,
    l[186] = Pt,
    l[187] = Za,
    l[188] = ga) : ga = l[188];
    let ri;
    l[189] === Symbol.for("react.memo_cache_sentinel") ? (ri = d.jsx("div", {
        className: pe.divider
    }),
    l[189] = ri) : ri = l[189];
    const Gt = `${pe.toggleLabel} ${u ? pe.toggleLabelActive : ""}`;
    let mn;
    l[190] !== Gt ? (mn = d.jsx("span", {
        className: Gt,
        children: "Russian"
    }),
    l[190] = Gt,
    l[191] = mn) : mn = l[191];
    let va;
    l[192] !== u || l[193] !== $ ? (va = d.jsx("input", {
        type: "checkbox",
        checked: u,
        onChange: $
    }),
    l[192] = u,
    l[193] = $,
    l[194] = va) : va = l[194];
    let za, Mi;
    l[195] === Symbol.for("react.memo_cache_sentinel") ? (za = d.jsx("span", {
        className: pe.toggleTrack
    }),
    Mi = d.jsx("span", {
        className: pe.kbd,
        children: "Shift+R"
    }),
    l[195] = za,
    l[196] = Mi) : (za = l[195],
    Mi = l[196]);
    let ka;
    l[197] !== mn || l[198] !== va ? (ka = d.jsxs("label", {
        className: `${pe.toggle} ${pe.russianToggle}`,
        title: "Техника Русская-Змейка: Разрешить последовательность действий (Соглядатая ↔ Гарнизон ↔ Соглядатая, Командир ↔ Волшебник ↔ Зал осквернения) (Shift+R)",
        children: [mn, va, za, Mi]
    }),
    l[197] = mn,
    l[198] = va,
    l[199] = ka) : ka = l[199];
    let Nl;
    l[200] === Symbol.for("react.memo_cache_sentinel") ? (Nl = d.jsx("div", {
        className: pe.divider
    }),
    l[200] = Nl) : Nl = l[200];
    let Da;
    l[201] === Symbol.for("react.memo_cache_sentinel") ? (Da = d.jsxs("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [d.jsx("circle", {
            cx: "18",
            cy: "5",
            r: "3"
        }), d.jsx("circle", {
            cx: "6",
            cy: "12",
            r: "3"
        }), d.jsx("circle", {
            cx: "18",
            cy: "19",
            r: "3"
        }), d.jsx("line", {
            x1: "8.59",
            y1: "13.51",
            x2: "15.42",
            y2: "17.49"
        }), d.jsx("line", {
            x1: "15.41",
            y1: "6.51",
            x2: "8.59",
            y2: "10.49"
        })]
    }),
    l[201] = Da) : Da = l[201];
    let Ia;
    l[202] === Symbol.for("react.memo_cache_sentinel") ? (Ia = d.jsx("span", {
        className: pe.kbd,
        children: "Ctrl+C"
    }),
    l[202] = Ia) : Ia = l[202];
    let Wa;
    l[203] !== ua ? (Wa = d.jsxs("button", {
        className: `${pe.textBtn} ${pe.primary}`,
        onClick: ua,
        title: "Поделиться макетом (Ctrl+C)",
        children: [Da, "Share", Ia]
    }),
    l[203] = ua,
    l[204] = Wa) : Wa = l[204];
    let jl;
    l[205] !== Ea || l[206] !== xl || l[207] !== wa || l[208] !== Wn || l[209] !== ga || l[210] !== ka || l[211] !== Wa ? (jl = d.jsxs("div", {
        className: pe.bottomBar,
        onClick: s4,
        children: [Ea, ha, xl, Ka, wa, oi, Wn, dn, ga, ri, ka, Nl, Wa]
    }),
    l[205] = Ea,
    l[206] = xl,
    l[207] = wa,
    l[208] = Wn,
    l[209] = ga,
    l[210] = ka,
    l[211] = Wa,
    l[212] = jl) : jl = l[212];
    let Al;
    l[213] !== $t ? (Al = $t > 0 && d.jsxs("div", {
        className: pe.destabilizationIndicator,
        title: `${$t} room${$t > 1 ? "s" : ""} will be destabilized when temple closes (scales with grid size: ~10% of rooms to balance the 6 rooms added per run)`,
        children: [d.jsx("span", {
            className: pe.destabilizationIcon,
            children: "⚠️"
        }), d.jsxs("span", {
            className: pe.destabilizationText,
            children: ["Around ", $t, " room", $t > 1 ? "" : "", " will be destabilized on close"]
        })]
    }),
    l[213] = $t,
    l[214] = Al) : Al = l[214];
    let El;
    l[215] !== ge ? (El = d.jsx("div", {
        className: pe.legendContainer,
        children: d.jsx(ax, {
            chainStats: ge
        })
    }),
    l[215] = ge,
    l[216] = El) : El = l[216];
    let Rl;
    l[217] === Symbol.for("react.memo_cache_sentinel") ? (Rl = d.jsx("div", {
        className: pe.panelHeader,
        children: d.jsx("span", {
            className: pe.panelTitle,
            children: "Active Bonuses"
        })
    }),
    l[217] = Rl) : Rl = l[217];
    let Ml;
    l[218] !== a || l[219] !== f ? (Ml = d.jsxs("div", {
        className: pe.effectsPanel,
        children: [Rl, d.jsx(db, {
            grid: a,
            score: f
        })]
    }),
    l[218] = a,
    l[219] = f,
    l[220] = Ml) : Ml = l[220];
    let wl;
    l[221] !== Al || l[222] !== El || l[223] !== Ml ? (wl = d.jsxs("div", {
        className: pe.rightColumn,
        onClick: o4,
        children: [Al, El, Ml]
    }),
    l[221] = Al,
    l[222] = El,
    l[223] = Ml,
    l[224] = wl) : wl = l[224];
    let zl;
    l[225] !== Tn || l[226] !== qt || l[227] !== zt || l[228] !== jl || l[229] !== wl ? (zl = d.jsxs("div", {
        className: pe.app,
        onClick: Tn,
        children: [qt, zt, jl, wl]
    }),
    l[225] = Tn,
    l[226] = qt,
    l[227] = zt,
    l[228] = jl,
    l[229] = wl,
    l[230] = zl) : zl = l[230];
    let wi;
    return l[231] !== Jn || l[232] !== An || l[233] !== zl ? (wi = d.jsxs(d.Fragment, {
        children: [It, Jn, An, zl]
    }),
    l[231] = Jn,
    l[232] = An,
    l[233] = zl,
    l[234] = wi) : wi = l[234],
    wi
}
function o4(l) {
    return l.stopPropagation()
}
function s4(l) {
    return l.stopPropagation()
}
function r4(l) {
    return l.stopPropagation()
}
function c4(l) {
    return l.stopPropagation()
}
function u4(l) {
    return l ? {
        ...l,
        currentAttempt: l.currentAttempt + 1,
        targetedRoom: null
    } : null
}
function f4(l) {
    return l !== "architect" && l !== "reward_room"
}
const d4 = "_navbar_1cgk4_1"
  , m4 = "_brand_1cgk4_16"
  , h4 = "_links_1cgk4_30"
  , y4 = "_navLink_1cgk4_36"
  , p4 = "_active_1cgk4_54"
  , g4 = "_spacer_1cgk4_67"
  , v4 = "_changelogBtn_1cgk4_71"
  , _4 = "_changelogActive_1cgk4_89"
  , b4 = "_feedbackBtn_1cgk4_98"
  , ml = {
    navbar: d4,
    brand: m4,
    links: h4,
    navLink: y4,
    active: p4,
    spacer: g4,
    changelogBtn: v4,
    changelogActive: _4,
    feedbackBtn: b4
};
function x4() {
    const l = bt.c(5);
    let a;
    l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = d.jsxs("div", {
        className: ml.brand,
        children: [d.jsxs("svg", {
            width: "25",
            height: "25",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [d.jsx("polygon", {
                points: "12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"
            }), d.jsx("line", {
                x1: "12",
                y1: "22",
                x2: "12",
                y2: "15.5"
            }), d.jsx("polyline", {
                points: "22,8.5 12,15.5 2,8.5"
            })]
        }), d.jsx("span", {
            children: "PoE2 Tools"
        })]
    }),
    l[0] = a) : a = l[0];
    let r, c;
    l[1] === Symbol.for("react.memo_cache_sentinel") ? (r = d.jsx("div", {
        className: ml.links,
        children: d.jsxs(Gu, {
            to: "/",
            end: !0,
            className: C4,
            children: [d.jsxs("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [d.jsx("path", {
                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }), d.jsx("polyline", {
                    points: "9,22 9,12 15,12 15,22"
                })]
            }), "Atziri Temple"]
        })
    }),
    c = d.jsx("div", {
        className: ml.spacer
    }),
    l[1] = r,
    l[2] = c) : (r = l[1],
    c = l[2]);
    let u;
    l[3] === Symbol.for("react.memo_cache_sentinel") ? (u = d.jsxs(Gu, {
        to: "/changelog",
        className: S4,
        title: "View changelog",
        children: [d.jsxs("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [d.jsx("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            }), d.jsx("polyline", {
                points: "14,2 14,8 20,8"
            }), d.jsx("line", {
                x1: "16",
                y1: "13",
                x2: "8",
                y2: "13"
            }), d.jsx("line", {
                x1: "16",
                y1: "17",
                x2: "8",
                y2: "17"
            })]
        }), d.jsx("span", {
            children: "Changelog"
        })]
    }),
    l[3] = u) : u = l[3];
    let m;
    return l[4] === Symbol.for("react.memo_cache_sentinel") ? (m = d.jsxs("nav", {
        className: ml.navbar,
        children: [a, r, c, u, d.jsxs("a", {
            href: "https://www.reddit.com/r/PathOfExile2/comments/1py8lo4/i_built_a_temple_planner_to_help_temple_runs/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: ml.feedbackBtn,
            title: "Give feedback on Reddit",
            children: [d.jsx("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: d.jsx("path", {
                    d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                })
            }), d.jsx("span", {
                children: "Feedback"
            })]
        })]
    }),
    l[4] = m) : m = l[4],
    m
}
function S4(l) {
    const {isActive: a} = l;
    return `${ml.changelogBtn} ${a ? ml.changelogActive : ""}`
}
function C4(l) {
    const {isActive: a} = l;
    return `${ml.navLink} ${a ? ml.active : ""}`
}
const T4 = "_container_oivvq_1"
  , N4 = "_content_oivvq_7"
  , j4 = "_header_oivvq_13"
  , A4 = "_title_oivvq_18"
  , E4 = "_subtitle_oivvq_33"
  , R4 = "_empty_oivvq_40"
  , M4 = "_emptyIcon_oivvq_46"
  , w4 = "_timeline_oivvq_54"
  , z4 = "_entry_oivvq_60"
  , k4 = "_entryMarker_oivvq_66"
  , D4 = "_dot_oivvq_74"
  , L4 = "_line_oivvq_84"
  , O4 = "_entryContent_oivvq_95"
  , B4 = "_entryHeader_oivvq_109"
  , q4 = "_version_oivvq_116"
  , U4 = "_date_oivvq_128"
  , G4 = "_entryTitle_oivvq_133"
  , H4 = "_changes_oivvq_140"
  , $4 = "_changeItem_oivvq_149"
  , Ot = {
    container: T4,
    content: N4,
    header: j4,
    title: A4,
    subtitle: E4,
    empty: R4,
    emptyIcon: M4,
    timeline: w4,
    entry: z4,
    entryMarker: k4,
    dot: D4,
    line: L4,
    entryContent: O4,
    entryHeader: B4,
    version: q4,
    date: U4,
    entryTitle: G4,
    changes: H4,
    changeItem: $4
};
function Y4() {
    const l = bt.c(1);
    let a;
    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = d.jsx("div", {
        className: Ot.container,
        children: d.jsxs("div", {
            className: Ot.content,
            children: [d.jsxs("header", {
                className: Ot.header,
                children: [d.jsxs("h1", {
                    className: Ot.title,
                    children: [d.jsxs("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [d.jsx("path", {
                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        }), d.jsx("polyline", {
                            points: "14,2 14,8 20,8"
                        }), d.jsx("line", {
                            x1: "16",
                            y1: "13",
                            x2: "8",
                            y2: "13"
                        }), d.jsx("line", {
                            x1: "16",
                            y1: "17",
                            x2: "8",
                            y2: "17"
                        }), d.jsx("polyline", {
                            points: "10,9 9,9 8,9"
                        })]
                    }), "Changelog"]
                }), d.jsx("p", {
                    className: Ot.subtitle,
                    children: "Все обновления и усовершенствования в планировщике храма"
                })]
            }), as.length === 0 ? d.jsxs("div", {
                className: Ot.empty,
                children: [d.jsx("span", {
                    className: Ot.emptyIcon,
                    children: "📋"
                }), d.jsx("p", {
                    children: "Записей об изменениях пока нет. Загляните позже!"
                })]
            }) : d.jsx("div", {
                className: Ot.timeline,
                children: as.map(V4)
            })]
        })
    }),
    l[0] = a) : a = l[0],
    a
}
function V4(l, a) {
    return d.jsxs("article", {
        className: Ot.entry,
        children: [d.jsxs("div", {
            className: Ot.entryMarker,
            children: [d.jsx("div", {
                className: Ot.dot
            }), a < as.length - 1 && d.jsx("div", {
                className: Ot.line
            })]
        }), d.jsxs("div", {
            className: Ot.entryContent,
            children: [d.jsxs("div", {
                className: Ot.entryHeader,
                children: [d.jsxs("span", {
                    className: Ot.version,
                    children: ["v", l.version]
                }), d.jsx("span", {
                    className: Ot.date,
                    children: l.date
                })]
            }), d.jsx("h2", {
                className: Ot.entryTitle,
                children: l.title
            }), d.jsx("ul", {
                className: Ot.changes,
                children: l.changes.map(X4)
            })]
        })]
    }, l.version)
}
function X4(l, a) {
    return d.jsx("li", {
        className: Ot.changeItem,
        children: l
    }, a)
}
function Q4(l) {
    const a = bt.c(2)
      , {to: r} = l
      , c = Ha()
      , u = `${r}${c.search}`;
    let m;
    return a[0] !== u ? (m = d.jsx(Gg, {
        to: u,
        replace: !0
    }),
    a[0] = u,
    a[1] = m) : m = a[1],
    m
}
function K4() {
    const l = bt.c(4);
    let a;
    l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = d.jsx(x4, {}),
    l[0] = a) : a = l[0];
    let r;
    l[1] === Symbol.for("react.memo_cache_sentinel") ? (r = d.jsx(dr, {
        path: "/",
        element: d.jsx(Q4, {
            to: "/planner"
        })
    }),
    l[1] = r) : r = l[1];
    let c;
    l[2] === Symbol.for("react.memo_cache_sentinel") ? (c = d.jsx(dr, {
        path: "/planner",
        element: d.jsx(i4, {})
    }),
    l[2] = c) : c = l[2];
    let u;
    return l[3] === Symbol.for("react.memo_cache_sentinel") ? (u = d.jsxs(d.Fragment, {
        children: [a, d.jsx("div", {
            className: "pageContent",
            children: d.jsxs($g, {
                children: [r, c, d.jsx(dr, {
                    path: "/changelog",
                    element: d.jsx(Y4, {})
                })]
            })
        })]
    }),
    l[3] = u) : u = l[3],
    u
}
Vp.createRoot(document.getElementById("root")).render(d.jsx(C.StrictMode, {
    children: d.jsx(d0, {
        children: d.jsx(K4, {})
    })
}));
//# sourceMappingURL=index-nWw_-UJU.js.map

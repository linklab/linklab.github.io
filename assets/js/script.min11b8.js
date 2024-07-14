/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString,
        k = i.hasOwnProperty, l = {}, m = "1.12.4", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return e.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a) {
            return n.each(this, a)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(e.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: g, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst) for (b in a) return k.call(a, b);
            for (b in a) ;
            return void 0 === b || k.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && n.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        }, guid: 1, proxy: function (a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        }, now: function () {
            return +new Date
        }, support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = ga(), z = ga(), A = ga(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O),
            V = new RegExp("^" + M + "$"), W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, da = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                    if (9 === x) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d
                    } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                } else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {
                    } finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function (b) {
                return b = +b, ha(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = fa.support = {}, f = fa.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function (a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function (a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function (a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ha(function (a) {
                    return function (b) {
                        return fa(a, b).length > 0
                    }
                }), contains: ha(function (a) {
                    return a = a.replace(ba, ca), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ha(function (a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Y.test(a.nodeName)
                }, input: function (a) {
                    return X.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: na(function () {
                    return [0]
                }), last: na(function (a, b) {
                    return [b - 1]
                }), eq: na(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: na(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: na(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = la(b);
        for (b in {submit: !0, reset: !0}) d.pseudos[b] = ma(b);

        function pa() {
        }

        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return !0
                }
            }
        }

        function sa(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
                return a === b
            }, h, !0), l = ra(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                }
                m.push(c)
            }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y, j = v), t
            };
            return c ? ha(f) : f
        }

        return h = fa.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function (a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function (a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a)
        }
        return d
    }, v = function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) > -1 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(z(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(z(this, a || [], !0))
        }, is: function (a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]), f && f.parentNode) {
                if (f.id !== e[2]) return A.find(a);
                this.length = 1, this[0] = f
            }
            return this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {children: !0, contents: !0, next: !0, prev: !0};
    n.fn.extend({
        has: function (a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return u(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c)
        }, next: function (a) {
            return F(a, "nextSibling")
        }, prev: function (a) {
            return F(a, "previousSibling")
        }, nextAll: function (a) {
            return u(a, "nextSibling")
        }, prevAll: function (a) {
            return u(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c)
        }, siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return v(a.firstChild)
        }, contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
        }, j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    n.each(b, function (b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments), c && !b && i()), this
            }, remove: function () {
                return n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            }, empty: function () {
                return f && (f = []), this
            }, disable: function () {
                return e = g = [], f = c = "", this
            }, disabled: function () {
                return !f
            }, lock: function () {
                return e = !0, c || j.disable(), this
            }, locked: function () {
                return !!e
            }, fireWith: function (a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
            }, fire: function () {
                return j.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return j
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }

    n.ready.promise = function (b) {
        if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready); else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K); else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {
            }
            c && c.doScroll && !function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }), function () {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            l.deleteExpando = !1
        }
        a = null
    }();
    var M = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {
                }
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: n.noop}), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }
                (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }

    n.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function (a, b, c) {
            return R(a, b, c)
        },
        removeData: function (a, b) {
            return S(a, b)
        },
        _data: function (a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    }), function () {
        var a;
        l.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, e;
            return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
        }
    }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"], W = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
                return d.cur()
            } : function () {
                return n.css(a, b, "")
            }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    var Y = function (a, b, c, d, e, f, g) {
            var h = 0, i = a.length, j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }, Z = /^(?:checkbox|radio)$/i, $ = /<([\w:-]+)/, _ = /^$|\/(?:java|ecma)script/i, aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }

    !function () {
        var a = d.createElement("div"), b = d.createDocumentFragment(), c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    var ga = /<|&#?\w+;/, ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g); else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g); else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }

    !function () {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {
        }
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa; else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
            n.event.add(this, b, e, d, c)
        })
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                    while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {
                    }
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event, c, {type: a, isSimulated: !0});
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        }, postDispatch: function (a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        }, teardown: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function () {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d) {
            return sa(this, a, b, c, d)
        }, one: function (a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d), Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(va, "<$1></$2>")
        }, clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]); else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
            }
        }
    }), n.fn.extend({
        domManip: Ha, detach: function (a) {
            return Ia(this, a, !0)
        }, remove: function (a) {
            return Ia(this, a)
        }, text: function (a) {
            return Y(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return Y(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = [];
            return Ha(this, arguments, function (b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {HTML: "block", BODY: "block"};

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d, c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }

    var Na = /^margin/, Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Pa = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    }, Qa = d.documentElement;
    !function () {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function () {
                    return null == b && k(), f
                }, boxSizingReliable: function () {
                    return null == b && k(), e
                }, pixelMarginRight: function () {
                    return null == b && k(), c
                }, pixelPosition: function () {
                    return null == b && k(), b
                }, reliableMarginRight: function () {
                    return null == b && k(), g
                }, reliableMarginLeft: function () {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {width: "4px"}).width, j.style.marginRight = "50%", c = "4px" === (l || {marginRight: "4px"}).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function (a) {
        return a.currentStyle
    }, Sa = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = {position: "absolute", visibility: "hidden", display: "block"},
        $a = {letterSpacing: "0", fontWeight: "400"}, _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1), c = _a.length;
        while (c--) if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": l.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function (a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
        return b ? Pa(a, {display: "inline-block"}, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {marginLeft: 0}, function () {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function (a, b) {
            return Y(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return cb(this, !0)
        }, hide: function () {
            return cb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }

    n.Tween = gb, gb.prototype = {
        constructor: gb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }, _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function () {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, m.always(function () {
            m.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], jb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0
            }
            o[d] = r && r[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                n(a).hide()
            }), m.done(function () {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}, easing: n.easing._default}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c), c
            }]
        }, tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
        }, prefilters: [ob], prefilter: function (a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = qb(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = n.timers, c = 0;
        for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), hb = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        a.clearInterval(ib), ib = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    }, function () {
        var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"),
            f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
    }();
    var rb = /\r/g, sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function (a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function (a, b, c) {
            return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function (a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i, Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }, set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }

    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = n.trim(d), e !== h && n.attr(c, "class", h)
                }
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = n.trim(d), e !== h && n.attr(c, "class", h)
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        }, hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location, Eb = n.now(), Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ob = {}, Pb = {}, Qb = "*/".concat("*"),
        Rb = Db.href, Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {}, f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(),
                q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === u ? g : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    }, overrideMimeType: function (a) {
                        return u || (l.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]]; else w.always(a[w.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {success: 1, error: 1, complete: 1}) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function () {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }

            return w
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }

    n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(ac, "\r\n")}
                }) : {name: b.name, value: c.replace(ac, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0, fc = {}, gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function (d, e) {
                    var f, g = b.xhr(), h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function (a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState)) if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort(); else {
                            j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                            try {
                                i = g.statusText
                            } catch (k) {
                                i = ""
                            }
                            f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                        }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                }, abort: function () {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function (e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [], kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a), f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
            return Y(this, function (a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var nc = a.jQuery, oc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});
(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case'HTML':
            case'BODY':
                return e.ownerDocument.body;
            case'#document':
                return e.body
        }
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        if (!e) return document.documentElement;
        for (var o = ie(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? r(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e,
            a = document.createRange();
        a.setStart(n, 0), a.setEnd(i, 0);
        var l = a.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host)
    }

    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }

    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = a(t, 'top'), i = a(t, 'left'),
            r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }

    function f(e, t) {
        var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }

    function m(e, t, o, n) {
        return Q(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }

    function h() {
        var e = document.body, t = document.documentElement, o = ie(10) && getComputedStyle(t);
        return {height: m('Height', e, t, o), width: m('Width', e, t, o)}
    }

    function c(e) {
        return de({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function g(e) {
        var o = {};
        try {
            if (ie(10)) {
                o = e.getBoundingClientRect();
                var n = a(e, 'top'), i = a(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {
        }
        var r = {left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top},
            p = 'HTML' === e.nodeName ? h() : {}, s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m
        }
        return c(r)
    }

    function u(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], r = ie(10), p = 'HTML' === o.nodeName,
            s = g(e), d = g(o), a = n(e), f = t(o), m = parseFloat(f.borderTopWidth, 10),
            h = parseFloat(f.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (d.top = Q(d.top, 0), d.left = Q(d.left, 0));
        var u = c({top: s.top - d.top - m, left: s.left - d.left - h, width: s.width, height: s.height});
        if (u.marginTop = 0, u.marginLeft = 0, !r && p) {
            var b = parseFloat(f.marginTop, 10), y = parseFloat(f.marginLeft, 10);
            u.top -= m - b, u.bottom -= m - b, u.left -= h - y, u.right -= h - y, u.marginTop = b, u.marginLeft = y
        }
        return (r && !i ? o.contains(a) : o === a && 'BODY' !== a.nodeName) && (u = l(u, o)), u
    }

    function b(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement,
            n = u(e, o), i = Q(o.clientWidth, window.innerWidth || 0), r = Q(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : a(o), s = t ? 0 : a(o, 'left'),
            d = {top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r};
        return c(d)
    }

    function y(e) {
        var n = e.nodeName;
        return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }

    function w(e) {
        if (!e || !e.parentElement || ie()) return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
        return o || document.documentElement
    }

    function E(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = {top: 0, left: 0},
            a = p ? w(e) : d(e, t);
        if ('viewport' === r) s = b(a, p); else {
            var l;
            'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = u(l, a, p);
            if ('HTML' === l.nodeName && !y(a)) {
                var m = h(), c = m.height, g = m.width;
                s.top += f.top - f.marginTop, s.bottom = c + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
            } else s = f
        }
        return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
    }

    function v(e) {
        var t = e.width, o = e.height;
        return t * o
    }

    function x(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = E(o, n, r, i), s = {
            top: {width: p.width, height: t.top - p.top},
            right: {width: p.right - t.right, height: p.height},
            bottom: {width: p.width, height: p.bottom - t.bottom},
            left: {width: t.left - p.left, height: p.height}
        }, d = Object.keys(s).map(function (e) {
            return de({key: e}, s[e], {area: v(s[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), a = d.filter(function (e) {
            var t = e.width, n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function O(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? w(t) : d(t, o);
        return u(o, i, n)
    }

    function L(e) {
        var t = getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            i = {width: e.offsetWidth + n, height: e.offsetHeight + o};
        return i
    }

    function S(e) {
        var t = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function T(e, t, o) {
        o = o.split('-')[0];
        var n = L(e), i = {width: n.width, height: n.height}, r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[S(s)], i
    }

    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function C(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === o
        });
        var n = D(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }

    function N(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, C(t, 'name', n));
        return i.forEach(function (t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = n(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = x(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function P(e, t) {
        return e.some(function (e) {
            var o = e.name, n = e.enabled;
            return n && o === t
        })
    }

    function W(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n], r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }

    function B() {
        return this.state.isDestroyed = !0, P(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function H(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function A(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {passive: !0}), r || A(n(p.parentNode), t, o, i), i.push(p)
    }

    function I(e, t, o, i) {
        o.updateBound = i, H(e).addEventListener('resize', o.updateBound, {passive: !0});
        var r = n(e);
        return A(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function M() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function F(e, t) {
        return H(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = F(this.reference, this.state))
    }

    function U(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Y(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }

    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function q(e, t, o) {
        var n = D(e, function (e) {
            var o = e.name;
            return o === t
        }), i = !!n && e.some(function (e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }

    function K(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function V(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = le.indexOf(e),
            n = le.slice(o + 1).concat(le.slice(0, o));
        return t ? n.reverse() : n
    }

    function z(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case'%p':
                    s = o;
                    break;
                case'%':
                case'%r':
                default:
                    s = n
            }
            var d = c(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? Q(document.documentElement.clientHeight, window.innerHeight || 0) : Q(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function G(e, t, o, n) {
        var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = p.indexOf(D(p, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function (e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return z(e, i, t, o)
            })
        }), a.forEach(function (e, t) {
            e.forEach(function (o, n) {
                U(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }

    function _(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = U(+n) ? [+n, 0] : G(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }

    for (var X = Math.min, J = Math.floor, Q = Math.max, Z = 'undefined' != typeof window && 'undefined' != typeof document, $ = ['Edge', 'Trident', 'Firefox'], ee = 0, te = 0; te < $.length; te += 1) if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
        ee = 1;
        break
    }
    var i = Z && window.Promise, oe = i ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, ee))
            }
        }, ne = {}, ie = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'all';
            return (e = e.toString(), ne.hasOwnProperty(e)) ? ne[e] : ('11' === e ? ne[e] = -1 !== navigator.userAgent.indexOf('Trident') : '10' === e ? ne[e] = -1 !== navigator.appVersion.indexOf('MSIE 10') : 'all' === e ? ne[e] = -1 !== navigator.userAgent.indexOf('Trident') || -1 !== navigator.userAgent.indexOf('MSIE') : void 0, ne.all = ne.all || Object.keys(ne).some(function (e) {
                return ne[e]
            }), ne[e])
        }, re = function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }, pe = function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(), se = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        }, de = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        ae = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        le = ae.slice(3), fe = {FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise'},
        me = function () {
            function t(o, n) {
                var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                re(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update)
                }, this.update = oe(this.update.bind(this)), this.options = de({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                    i.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return de({name: e}, i.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }

            return pe(t, [{
                key: 'update', value: function () {
                    return k.call(this)
                }
            }, {
                key: 'destroy', value: function () {
                    return B.call(this)
                }
            }, {
                key: 'enableEventListeners', value: function () {
                    return M.call(this)
                }
            }, {
                key: 'disableEventListeners', value: function () {
                    return R.call(this)
                }
            }]), t
        }();
    return me.Utils = ('undefined' == typeof window ? global : window).PopperUtils, me.placements = ae, me.Defaults = {
        placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top', a = s ? 'width' : 'height',
                            l = {start: se({}, d, r[d]), end: se({}, d, r[d] + r[a] - p[a])};
                        e.offsets.popper = de({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {order: 200, enabled: !0, fn: _, offset: 0},
            preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var n = E(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    t.boundaries = n;
                    var i = t.priority, p = e.offsets.popper, s = {
                        primary: function (e) {
                            var o = p[e];
                            return p[e] < n[e] && !t.escapeWithReference && (o = Q(p[e], n[e])), se({}, e, o)
                        }, secondary: function (e) {
                            var o = 'right' === e ? 'left' : 'top', i = p[o];
                            return p[e] > n[e] && !t.escapeWithReference && (i = X(p[o], n[e] - ('right' === e ? p.width : p.height))), se({}, o, i)
                        }
                    };
                    return i.forEach(function (e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = de({}, p, s[t](e))
                    }), e.offsets.popper = p, e
                }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = J,
                        p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500, enabled: !0, fn: function (e, o) {
                    var n;
                    if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(), h = a ? 'left' : 'top', g = a ? 'bottom' : 'right', u = L(i)[l];
                    d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2, y = t(e.instance.popper), w = parseFloat(y['margin' + f], 10),
                        E = parseFloat(y['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - w - E;
                    return v = Q(X(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, se(n, m, Math.round(v)), se(n, h, ''), n), e
                }, element: '[x-arrow]'
            },
            flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (P(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = E(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0], i = S(n), r = e.placement.split('-')[1] || '', p = [];
                    switch (t.behavior) {
                        case fe.FLIP:
                            p = [n, i];
                            break;
                        case fe.CLOCKWISE:
                            p = V(n);
                            break;
                        case fe.COUNTERCLOCKWISE:
                            p = V(n, !0);
                            break;
                        default:
                            p = t.behavior
                    }
                    return p.forEach(function (s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = S(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = J,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            y = -1 !== ['top', 'bottom'].indexOf(n),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = K(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = de({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
                    }), e
                }, behavior: 'flip', padding: 5, boundariesElement: 'viewport'
            },
            inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = S(t), e.offsets.popper = c(i), e
                }
            },
            hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var o = t.x, n = t.y, i = e.offsets.popper, p = D(e.instance.modifiers, function (e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p, l = r(e.instance.popper), f = g(l),
                        m = {position: i.position},
                        h = {left: J(i.left), top: J(i.top), bottom: J(i.bottom), right: J(i.right)},
                        c = 'bottom' === o ? 'top' : 'bottom', u = 'right' === n ? 'left' : 'right', b = W('transform');
                    if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform'; else {
                        var y = 'bottom' == c ? -1 : 1, w = 'right' == u ? -1 : 1;
                        m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
                    }
                    var E = {"x-placement": e.placement};
                    return e.attributes = de({}, E, e.attributes), e.styles = de({}, m, e.styles), e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: 'bottom', y: 'right'
            },
            applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, o, n, i) {
                    var r = O(i, t, e, o.positionFixed),
                        p = x(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), Y(t, {position: o.positionFixed ? 'fixed' : 'absolute'}), o
                }, gpuAcceleration: void 0
            }
        }
    }, me
});/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, c) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function h(r) {
        for (var t = 1; t < arguments.length; t++) {
            var s = null != arguments[t] ? arguments[t] : {}, e = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
                return Object.getOwnPropertyDescriptor(s, t).enumerable
            }))), e.forEach(function (t) {
                var e, n, i;
                e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return r
    }

    e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
    var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F,
        V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et,
        yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt,
        qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te,
        Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze,
        Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn,
        Cn = function (i) {
            var e = "transitionend";

            function t(t) {
                var e = this, n = !1;
                return i(this).one(l.TRANSITION_END, function () {
                    n = !0
                }), setTimeout(function () {
                    n || l.triggerTransitionEnd(e)
                }, t), this
            }

            var l = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                    for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
                    return t
                }, getSelectorFromElement: function (t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try {
                        return 0 < i(document).find(e).length ? e : null
                    } catch (t) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var e = i(t).css("transition-duration");
                    return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
                }, reflow: function (t) {
                    return t.offsetHeight
                }, triggerTransitionEnd: function (t) {
                    i(t).trigger(e)
                }, supportsTransitionEnd: function () {
                    return Boolean(e)
                }, isElement: function (t) {
                    return (t[0] || t).nodeType
                }, typeCheckConfig: function (t, e, n) {
                    for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i], s = e[i],
                            o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                    }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function (t) {
                    if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(e), In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }, f = "alert", d = "fade", _ = "show", g = function () {
            function i(t) {
                this._element = t
            }

            var t = i.prototype;
            return t.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function () {
                r.removeData(this._element, s), this._element = null
            }, t._getRootElement = function (t) {
                var e = Cn.getSelectorFromElement(t), n = !1;
                return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function (t) {
                var e = r.Event(u.CLOSE);
                return r(t).trigger(e), e
            }, t._removeElement = function (e) {
                var n = this;
                if (r(e).removeClass(_), r(e).hasClass(d)) {
                    var t = Cn.getTransitionDurationFromElement(e);
                    r(e).one(Cn.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function (t) {
                r(t).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = r(this), e = t.data(s);
                    e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () {
            return r.fn[n] = l, g._jQueryInterface
        }, g),
        An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
            CLICK_DATA_API: "click" + E + y,
            FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
        }, k = function () {
            function n(t) {
                this._element = t
            }

            var t = n.prototype;
            return t.toggle = function () {
                var t = !0, e = !0, n = m(this._element).closest(b)[0];
                if (n) {
                    var i = m(this._element).find(S)[0];
                    if (i) {
                        if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1; else {
                            var r = m(n).find(w)[0];
                            r && m(r).removeClass(C)
                        }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !m(this._element).hasClass(C), m(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C)
            }, t.dispose = function () {
                m.removeData(this._element, v), this._element = null
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = m(this).data(v);
                    t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, o(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }]), n
        }(), m(document).on(O.CLICK_DATA_API, D, function (t) {
            t.preventDefault();
            var e = t.target;
            m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, D, function (t) {
            var e = m(t.target).closest(N)[0];
            m(e).toggleClass(A, /^focus(in)?$/.test(t.type))
        }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
            return m.fn[p] = T, k._jQueryInterface
        }, k), Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, x = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, U = "next", K = "prev", F = "left", V = "right", Q = {
            SLIDE: "slide" + R,
            SLID: "slid" + R,
            KEYDOWN: "keydown" + R,
            MOUSEENTER: "mouseenter" + R,
            MOUSELEAVE: "mouseleave" + R,
            TOUCHEND: "touchend" + R,
            LOAD_DATA_API: "load" + R + H,
            CLICK_DATA_API: "click" + R + H
        }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, $ = function () {
            function s(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners()
            }

            var t = s.prototype;
            return t.next = function () {
                this._isSliding || this._slide(U)
            }, t.nextWhenVisible = function () {
                !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
            }, t.prev = function () {
                this._isSliding || this._slide(K)
            }, t.pause = function (t) {
                t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function (t) {
                var e = this;
                this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
                    return e.to(t)
                }); else {
                    if (n === t) return this.pause(), void this.cycle();
                    var i = n < t ? U : K;
                    this._slide(i, this._items[t])
                }
            }, t.dispose = function () {
                P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function (t) {
                return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t
            }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(Q.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, t._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function (t) {
                return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t)
            }, t._getItemByDirection = function (t, e) {
                var n = t === U, i = t === K, r = this._getItemIndex(e), s = this._items.length - 1;
                if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
                var o = (r + (t === K ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, t._triggerSlideEvent = function (t, e) {
                var n = this._getItemIndex(t), i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
                    r = P.Event(Q.SLIDE, {relatedTarget: t, direction: e, from: i, to: n});
                return P(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && P(e).addClass(Y)
                }
            }, t._slide = function (t, e) {
                var n, i, r, s = this, o = P(this._element).find(Z.ACTIVE_ITEM)[0], a = this._getItemIndex(o),
                    l = e || o && this._getItemByDirection(t, o), h = this._getItemIndex(l), c = Boolean(this._interval);
                if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var u = P.Event(Q.SLID, {relatedTarget: l, direction: r, from: a, to: h});
                    if (P(this._element).hasClass(G)) {
                        P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
                        var f = Cn.getTransitionDurationFromElement(o);
                        P(o).one(Cn.TRANSITION_END, function () {
                            P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
                                return P(s._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(f)
                    } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
                    c && this.cycle()
                }
            }, s._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = P(this).data(j), e = h({}, M, P(this).data());
                    "object" == typeof i && (e = h({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, s._dataApiClickHandler = function (t) {
                var e = Cn.getSelectorFromElement(this);
                if (e) {
                    var n = P(e)[0];
                    if (n && P(n).hasClass(B)) {
                        var i = h({}, P(n).data(), P(this).data()), r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault()
                    }
                }
            }, o(s, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return M
                }
            }]), s
        }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
            P(Z.DATA_RIDE).each(function () {
                var t = P(this);
                $._jQueryInterface.call(t, t.data())
            })
        }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
            return P.fn[L] = W, $._jQueryInterface
        }, $), bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = {
            toggle: !0,
            parent: ""
        }, ot = {toggle: "boolean", parent: "(string|element)"}, at = {
            SHOW: "show" + it,
            SHOWN: "shown" + it,
            HIDE: "hide" + it,
            HIDDEN: "hidden" + it,
            CLICK_DATA_API: "click" + it + ".data-api"
        }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, gt = function () {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
                    var r = n[i], s = Cn.getSelectorFromElement(r);
                    null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var t = a.prototype;
            return t.toggle = function () {
                tt(this._element).hasClass(lt) ? this.hide() : this.show()
            }, t.show = function () {
                var t, e, n = this;
                if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
                    var i = tt.Event(at.SHOW);
                    if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
                        var r = this._getDimension();
                        tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function () {
                            tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN)
                        }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px"
                    }
                }
            }, t.hide = function () {
                var t = this;
                if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                    var e = tt.Event(at.HIDE);
                    if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
                            var r = this._triggerArray[i], s = Cn.getSelectorFromElement(r);
                            if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1)
                        }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function () {
                            t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)
                        }).emulateTransitionEnd(o)
                    }
                }
            }, t.setTransitioning = function (t) {
                this._isTransitioning = t
            }, t.dispose = function () {
                tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function (t) {
                return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t
            }, t._getDimension = function () {
                return tt(this._element).hasClass(ft) ? ft : dt
            }, t._getParent = function () {
                var n = this, t = null;
                Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return tt(t).find(e).each(function (t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function (t, e) {
                if (t) {
                    var n = tt(t).hasClass(lt);
                    0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function (t) {
                var e = Cn.getSelectorFromElement(t);
                return e ? tt(e)[0] : null
            }, a._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = tt(this), e = t.data(nt), n = h({}, st, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, o(a, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return st
                }
            }]), a
        }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = tt(this), e = Cn.getSelectorFromElement(this);
            tt(e).each(function () {
                var t = tt(this), e = t.data(nt) ? "toggle" : n.data();
                gt._jQueryInterface.call(t, e)
            })
        }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
            return tt.fn[et] = rt, gt._jQueryInterface
        }, gt),
        Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
            HIDE: "hide" + Et,
            HIDDEN: "hidden" + Et,
            SHOW: "show" + Et,
            SHOWN: "shown" + Et,
            CLICK: "click" + Et,
            CLICK_DATA_API: "click" + Et + yt,
            KEYDOWN_DATA_API: "keydown" + Et + yt,
            KEYUP_DATA_API: "keyup" + Et + yt
        }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Vt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Qt = function () {
            function l(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var t = l.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !mt(this._element).hasClass(At)) {
                    var t = l._getParentFromElement(this._element), e = mt(this._menu).hasClass(Dt);
                    if (l._clearMenus(), !e) {
                        var n = {relatedTarget: this._element}, i = mt.Event(It.SHOW, n);
                        if (mt(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n))
                        }
                    }
                }
            }, t.dispose = function () {
                mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                mt(this._element).on(It.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (t) {
                return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = mt(t).find(Lt)[0]
                }
                return this._menu
            }, t._getPlacement = function () {
                var t = mt(this._element).parent(), e = Mt;
                return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e
            }, t._detectNavbar = function () {
                return 0 < mt(this._element).closest(".navbar").length
            }, t._getPopperConfig = function () {
                var e = this, t = {};
                "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
            }, l._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = mt(this).data(vt);
                    if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, l._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                    var i = l._getParentFromElement(e[n]), r = mt(e[n]).data(vt), s = {relatedTarget: e[n]};
                    if (r) {
                        var o = r._menu;
                        if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
                            var a = mt.Event(It.HIDE, s);
                            mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)))
                        }
                    }
                }
            }, l._getParentFromElement = function (t) {
                var e, n = Cn.getSelectorFromElement(t);
                return n && (e = mt(n)[0]), e || t.parentNode
            }, l._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
                    var e = l._getParentFromElement(this), n = mt(e).hasClass(Dt);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = mt(e).find(Rt).get();
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = mt(e).find(kt)[0];
                            mt(s).trigger("focus")
                        }
                        mt(this).trigger("click")
                    }
                }
            }, o(l, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return Ft
                }
            }, {
                key: "DefaultType", get: function () {
                    return Vt
                }
            }]), l
        }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) {
            t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle")
        }).on(It.CLICK_DATA_API, Pt, function (t) {
            t.stopPropagation()
        }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () {
            return mt.fn[pt] = Tt, Qt._jQueryInterface
        }, Qt), wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Jt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Zt = {
            HIDE: "hide" + qt,
            HIDDEN: "hidden" + qt,
            SHOW: "show" + qt,
            SHOWN: "shown" + qt,
            FOCUSIN: "focusin" + qt,
            RESIZE: "resize" + qt,
            CLICK_DISMISS: "click.dismiss" + qt,
            KEYDOWN_DISMISS: "keydown.dismiss" + qt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
            CLICK_DATA_API: "click" + qt + ".data-api"
        }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, se = function () {
            function r(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }

            var t = r.prototype;
            return t.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function (t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
                    var n = Bt.Event(Zt.SHOW, {relatedTarget: t});
                    Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
                        return e.hide(t)
                    }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
                        Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
                            Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function (t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Bt.Event(Zt.HIDE);
                    if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = Bt(this._element).hasClass(ne);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
                            var r = Cn.getTransitionDurationFromElement(this._element);
                            Bt(this._element).one(Cn.TRANSITION_END, function (t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (t) {
                return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t
            }, t._showElement = function (t) {
                var e = this, n = Bt(this._element).hasClass(ne);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();
                var i = Bt.Event(Zt.SHOWN, {relatedTarget: t}), r = function () {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i)
                };
                if (n) {
                    var s = Cn.getTransitionDurationFromElement(this._element);
                    Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, t._enforceFocus = function () {
                var e = this;
                Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? Bt(window).on(Zt.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : Bt(window).off(Zt.RESIZE)
            }, t._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (t) {
                var e = this, n = Bt(this._element).hasClass(ne) ? ne : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
                    if (!n) return void t();
                    var i = Cn.getTransitionDurationFromElement(this._backdrop);
                    Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    Bt(this._backdrop).removeClass(ie);
                    var r = function () {
                        e._removeBackdrop(), t && t()
                    };
                    if (Bt(this._element).hasClass(ne)) {
                        var s = Cn.getTransitionDurationFromElement(this._backdrop);
                        Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var r = this;
                if (this._isBodyOverflowing) {
                    Bt(re.FIXED_CONTENT).each(function (t, e) {
                        var n = Bt(e)[0].style.paddingRight, i = Bt(e).css("padding-right");
                        Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), Bt(re.STICKY_CONTENT).each(function (t, e) {
                        var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
                        var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight, e = Bt(document.body).css("padding-right");
                    Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function () {
                Bt(re.FIXED_CONTENT).each(function (t, e) {
                    var n = Bt(e).data("padding-right");
                    "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right")
                }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
                    var n = Bt(e).data("margin-right");
                    "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right")
                });
                var t = Bt(document.body).data("padding-right");
                "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right")
            }, t._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = $t, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var t = Bt(this).data(Gt), e = h({}, Xt, Bt(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, o(r, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return Xt
                }
            }]), r
        }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
            var e, n = this, i = Cn.getSelectorFromElement(this);
            i && (e = Bt(i)[0]);
            var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var s = Bt(e).one(Zt.SHOW, function (t) {
                t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () {
                    Bt(n).is(":visible") && n.focus()
                })
            });
            se._jQueryInterface.call(Bt(e), r, this)
        }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () {
            return Bt.fn[Yt] = zt, se._jQueryInterface
        }, se),
        Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(_e = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}),
            selector: !(de = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, pe = "out", ve = {
            HIDE: "hide" + he,
            HIDDEN: "hidden" + he,
            SHOW: (me = "show") + he,
            SHOWN: "shown" + he,
            INSERTED: "inserted" + he,
            CLICK: "click" + he,
            FOCUSIN: "focusin" + he,
            FOCUSOUT: "focusout" + he,
            MOUSEENTER: "mouseenter" + he,
            MOUSELEAVE: "mouseleave" + he
        }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () {
            function i(t, e) {
                if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }

            var t = i.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var e = this.constructor.DATA_KEY, n = oe(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = oe.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    oe(this.element).trigger(t);
                    var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(), r = Cn.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        o = this._getAttachment(s);
                    this.addAttachmentClass(o);
                    var a = !1 === this.config.container ? document.body : oe(this.config.container);
                    oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
                        placement: o,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: Ce},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
                    var l = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e)
                    };
                    if (oe(this.tip).hasClass(Ee)) {
                        var h = Cn.getTransitionDurationFromElement(this.tip);
                        oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h)
                    } else l()
                }
            }, t.hide = function (t) {
                var e = this, n = this.getTipElement(), i = oe.Event(this.constructor.Event.HIDE), r = function () {
                    e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                };
                if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
                        var s = Cn.getTransitionDurationFromElement(n);
                        oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (t) {
                oe(this.getTipElement()).addClass(ue + "-" + t)
            }, t.getTipElement = function () {
                return this.tip = this.tip || oe(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var t = oe(this.getTipElement());
                this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye)
            }, t.setElementContent = function (t, e) {
                var n = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e)
            }, t.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getAttachment = function (t) {
                return _e[t.toUpperCase()]
            }, t._setListeners = function () {
                var i = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                        return i.toggle(t)
                    }); else if (t !== be) {
                        var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        oe(i.element).on(e, i.config.selector, function (t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function (t) {
                            return i._leave(t)
                        })
                    }
                    oe(i.element).closest(".modal").on("hide.bs.modal", function () {
                        return i.hide()
                    })
                }), this.config.selector ? this.config = h({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                    e._hoverState === me && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                    e._hoverState === pe && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function (t) {
                return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t
            }, t._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function () {
                var t = oe(this.getTipElement()), e = t.attr("class").match(fe);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function () {
                var t = this.getTipElement(), e = this.config.animation;
                null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = oe(this).data(le), e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return ge
                }
            }, {
                key: "NAME", get: function () {
                    return ae
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return le
                }
            }, {
                key: "Event", get: function () {
                    return ve
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return he
                }
            }, {
                key: "DefaultType", get: function () {
                    return de
                }
            }]), i
        }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () {
            return oe.fn[ae] = ce, Se._jQueryInterface
        }, Se),
        On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), He = h({}, Nn.DefaultType, {content: "(string|element|function)"}), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
            HIDE: "hide" + ke,
            HIDDEN: "hidden" + ke,
            SHOW: (Me = "show") + ke,
            SHOWN: "shown" + ke,
            INSERTED: "inserted" + ke,
            CLICK: "click" + ke,
            FOCUSIN: "focusin" + ke,
            FOCUSOUT: "focusout" + ke,
            MOUSEENTER: "mouseenter" + ke,
            MOUSELEAVE: "mouseleave" + ke
        }, Fe = function (t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }

            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function (t) {
                we(this.getTipElement()).addClass(Le + "-" + t)
            }, r.getTipElement = function () {
                return this.tip = this.tip || we(this.config.template)[0], this.tip
            }, r.setContent = function () {
                var t = we(this.getTipElement());
                this.setElementContent(t.find(xe), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me)
            }, r._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function () {
                var t = we(this.getTipElement()), e = t.attr("class").match(je);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = we(this).data(Oe), e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return Re
                }
            }, {
                key: "NAME", get: function () {
                    return Ne
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Oe
                }
            }, {
                key: "Event", get: function () {
                    return Ke
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ke
                }
            }, {
                key: "DefaultType", get: function () {
                    return He
                }
            }]), i
        }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () {
            return we.fn[Ne] = Pe, Fe._jQueryInterface
        }, Fe), kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = {
            offset: 10,
            method: "auto",
            target: ""
        }, ze = {offset: "number", method: "string", target: "(string|element)"}, Xe = {
            ACTIVATE: "activate" + Ye,
            SCROLL: "scroll" + Ye,
            LOAD_DATA_API: "load" + Ye + ".data-api"
        }, Je = "dropdown-item", Ze = "active", $e = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, tn = "offset", en = "position", nn = function () {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }

            var t = n.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? tn : en,
                    r = "auto" === this._config.method ? t : this._config.method, s = r === en ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) {
                    var e, n = Cn.getSelectorFromElement(t);
                    if (n && (e = Ve(n)[0]), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [Ve(e)[r]().top + s, n]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (t) {
                if ("string" != typeof (t = h({}, qe, "object" == typeof t && t ? t : {})).target) {
                    var e = Ve(t.target).attr("id");
                    e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e
                }
                return Cn.typeCheckConfig(Qe, t, ze), t
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = Ve(t.join(","));
                n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = Ve(this).data(Be);
                    if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, o(n, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return qe
                }
            }]), n
        }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
            for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
                var n = Ve(t[e]);
                nn._jQueryInterface.call(n, n.data())
            }
        }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () {
            return Ve.fn[Qe] = Ge, nn._jQueryInterface
        }, nn), Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
            HIDE: "hide" + on,
            HIDDEN: "hidden" + on,
            SHOW: "show" + on,
            SHOWN: "shown" + on,
            CLICK_DATA_API: "click" + on + ".data-api"
        }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () {
            function i(t) {
                this._element = t
            }

            var t = i.prototype;
            return t.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
                    var t, i, e = rn(this._element).closest(gn)[0], r = Cn.getSelectorFromElement(this._element);
                    if (e) {
                        var s = "UL" === e.nodeName ? pn : mn;
                        i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1]
                    }
                    var o = rn.Event(ln.HIDE, {relatedTarget: this._element}), a = rn.Event(ln.SHOW, {relatedTarget: i});
                    if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        r && (t = rn(r)[0]), this._activate(this._element, e);
                        var l = function () {
                            var t = rn.Event(ln.HIDDEN, {relatedTarget: n._element}),
                                e = rn.Event(ln.SHOWN, {relatedTarget: i});
                            rn(i).trigger(t), rn(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                rn.removeData(this._element, sn), this._element = null
            }, t._activate = function (t, e, n) {
                var i = this, r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
                    s = n && r && rn(r).hasClass(fn), o = function () {
                        return i._transitionComplete(t, r, n)
                    };
                if (r && s) {
                    var a = Cn.getTransitionDurationFromElement(r);
                    rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, t._transitionComplete = function (t, e, n) {
                if (e) {
                    rn(e).removeClass(dn + " " + cn);
                    var i = rn(e.parentNode).find(yn)[0];
                    i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
                    var r = rn(t).closest(_n)[0];
                    r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = rn(this), e = t.data(sn);
                    if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }]), i
        }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
            t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show")
        }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () {
            return rn.fn.tab = an, Tn._jQueryInterface
        }, Tn);
    !function (t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", {value: !0})
});/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function ($, window, document, undefined) {
    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from being retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': ['busy'],
                'dragging': ['interacting']
            }
        };

        $.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));

        $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                = new plugin(this);
        }, this));

        $.each(Owl.Workers, $.proxy(function (priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        checkVisibility: true,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',
        slideTransition: '',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [{
        filter: ['width', 'settings'],
        run: function () {
            this._width = this.$element.width();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };

            !grid && this.$stage.children().css(css);

            cache.css = css;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];

            cache.items = {
                merge: false,
                width: width
            };

            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

                cache.items.merge = merge > 1 || cache.items.merge;

                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }

            this._widths = widths;
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            var clones = [],
                items = this._items,
                settings = this.settings,
                // TODO: Should be computed from number of min width items in stage
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';

            repeat /= 2;

            while (repeat > 0) {
                // Switch to only using appended clones
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
                repeat -= 1;
            }

            this._clones = clones;

            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];

            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }

            this._coordinates = coordinates;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };

            this.$stage.css(css);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();

            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: ['items'],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: ['position'],
        run: function () {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [], i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                    || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

            this.$stage.children('.center').removeClass('center');
            if (this.settings.center) {
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    }];

    /**
     * Create the stage DOM element
     */
    Owl.prototype.initializeStage = function () {
        this.$stage = this.$element.find('.' + this.settings.stageClass);

        // if the stage is already in the DOM, grab it and skip stage initialization
        if (this.$stage.length) {
            return;
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $('<' + this.settings.stageElement + '>', {
            "class": this.settings.stageClass
        }).wrap($('<div/>', {
            "class": this.settings.stageOuterClass
        }));

        // append stage
        this.$element.append(this.$stage.parent());
    };

    /**
     * Create item DOM elements
     */
    Owl.prototype.initializeItems = function () {
        var $items = this.$element.find('.owl-item');

        // if the items are already in the DOM, grab them and skip item initialization
        if ($items.length) {
            this._items = $items.get().map(function (item) {
                return $(item);
            });

            this._mergers = this._items.map(function () {
                return 1;
            });

            this.refresh();

            return;
        }

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.isVisible()) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate('width');
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
    };

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function () {
        this.enter('initializing');
        this.trigger('initialize');

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.initializeStage();
        this.initializeItems();

        // register event handlers
        this.registerEventHandlers();

        this.leave('initializing');
        this.trigger('initialized');
    };

    /**
     * @returns {Boolean} visibility of $element
     *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
     *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
     */
    Owl.prototype.isVisible = function () {
        return this.settings.checkVisibility
            ? this.$element.is(':visible')
            : true;
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function () {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }

        this.trigger('change', {property: {name: 'settings', value: settings}});
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', {property: {name: 'settings', value: this.settings}});
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function (item) {
        var event = this.trigger('prepare', {content: item});

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item)
        }

        this.trigger('prepared', {content: event.data});

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function () {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function (p) {
                return this[p]
            }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is('valid') && this.enter('valid');
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function () {
        this.enter('refreshing');
        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave('refreshing');
        this.trigger('refreshed');
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function () {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.isVisible()) {
            return false;
        }

        this.enter('resizing');

        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }

        this.invalidate('width');

        this.refresh();

        this.leave('resizing');
        this.trigger('resized');
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function () {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }

        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
                return false
            });
        }

        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function (event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin :
                    stage.left,
                y: stage.top
            };
        }

        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }

        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));

            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }

            event.preventDefault();

            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function (event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is('dragging')) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function (event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

        $(document).off('.owl.core');

        this.$element.removeClass(this.options.grabClass);

        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();

            this._drag.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function () {
                    return false;
                });
            }
        }

        if (!this.is('dragging')) {
            return;
        }

        this.leave('dragging');
        this.trigger('dragged');
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function (coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function (index, value) {
                // on a left pull, check on current index
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value)
                    && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;

        this.is('animating') && this.onTransitionEnd();

        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's' + (
                    this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
                )
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', {property: {name: 'position', value: position}});

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', {property: {name: 'position', value: this._current}});
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function (part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function (v, i) {
            return i
        });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function (position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress(['translate', 'translated']);

        this.animate(this.coordinates(position));

        this.release(['translate', 'translated']);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function (position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function (relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            if (iterator) {
                reciprocalItemsWidth = this._items[--iterator].width();
                elementWidth = this.$element.width();
                while (iterator--) {
                    reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                    if (reciprocalItemsWidth > elementWidth) {
                        break;
                    }
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function (relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function (index) {
                return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
            };

        if (position === undefined) {
            return $.map(this._clones, function (v, i) {
                return map(i)
            });
        }

        return $.map(this._clones, function (v, i) {
            return v === position ? map(i) : null
        });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function (position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function (coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function (from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function (position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.isVisible()) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function (event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.leave('animating');
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn('Can not detect viewport width.');
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function () {
            return this.nodeType === 1;
        }).each($.proxy(function (index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function (content, position) {
        var current = this.relative(this._current);

        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger('add', {content: content, position: position});

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate('items');

        this.trigger('added', {content: content, position: position});
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function (position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', {content: this._items[position], position: position});

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', {content: null, position: position});
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function (images) {
        images.each($.proxy(function (i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function (e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function () {

        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children('.cloned').remove();

        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function (name, data, namespace, state, enter) {
        var status = {
            item: {count: this._items.length, index: this.current()}
        }, handler = $.camelCase(
            $.grep(['on', name, namespace], function (v) {
                return v
            })
                .join('-').toLowerCase()
        ), event = $.Event(
            [name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
            $.extend({relatedTarget: this}, status, data)
        );

        if (!this._supress[name]) {
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({type: Owl.Type.Event, name: name});
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }

            this._states.current[name]++;
        }, this));
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            this._states.current[name]--;
        }, this));
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function (object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function (e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = true;
        }, this));
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event];
        }, this));
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function (event) {
        var result = {x: null, y: null};

        event = event.originalEvent || event || window.event;

        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
                event.changedTouches[0] : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function (first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function () {
            var $this = $(this),
                data = $this.data('owl.carousel');

            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);

                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function (i, event) {
                    data.register({type: Owl.Type.Event, name: event});
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event]);
                        }
                    }, data));
                });
            }

            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function () {
        if (this._interval) {
            return;
        }

        this._visible = this._core.isVisible();
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function () {
        if (this._core.isVisible() === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass('owl-hidden', !this._visible);

        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function () {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function (carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function (i, v) {
                            this.load(v)
                        }, this);
                    //TODO: Need documentation for this new option
                    if (settings.lazyLoadEager > 0) {
                        n += settings.lazyLoadEager;
                        // If the carousel is looping also preload images that are to the "left"
                        if (settings.loop) {
                            position -= settings.lazyLoadEager;
                            n++;
                        }
                    }

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false,
        lazyLoadEager: 0
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function (index, element) {
            var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

            this._core.trigger('load', {element: $element, url: url}, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', {element: $element, url: url}, 'lazy');
                }, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    this._core.trigger('loaded', {element: $element, url: url}, 'lazy');
                }, this)).attr('srcset', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function () {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', {element: $element, url: url}, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        this._previousHeight = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight
                    && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var refThis = this;

        // These changes have been taken from a PR by gavrochelegnou proposed in #1575
        // and have been made compatible with the latest jQuery version
        $(window).on('load', function () {
            if (refThis._core.settings.autoHeight) {
                refThis.update();
            }
        });

        // Autoresize the height of the carousel when window is resized
        // When carousel has images, the height is dependent on the width
        // and should also change on resize
        $(window).resize(function () {
            if (refThis._core.settings.autoHeight) {
                if (refThis._intervalId != null) {
                    clearTimeout(refThis._intervalId);
                }

                refThis._intervalId = setTimeout(function () {
                    refThis.update();
                }, 250);
            }
        });

    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function () {
        var start = this._core._current,
            end = start + this._core.settings.items,
            lazyLoadEnabled = this._core.settings.lazyLoad,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function (index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
            maxheight = this._previousHeight;
        }

        this._previousHeight = maxheight;

        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function () {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    this._core.register({type: 'state', name: 'playing', tags: ['interacting']});
                }
            }, this),
            'resize.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find('.owl-video');

                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function (target, item) {
        var type = (function () {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo';
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar'
                } else {
                    return 'youtube';
                }
            })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');

        if (url) {

            /*
          Parses the id's out of the following urls (and probably more):
          https://www.youtube.com/watch?v=:id
          https://youtu.be/:id
          https://vimeo.com/:id
          https://vimeo.com/channels/:channel/:id
          https://vimeo.com/groups/:group/videos/:id
          https://app.vzaar.com/videos/:id

          Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
      */

            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function (target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = $('<div/>', {
                        "class": 'owl-video-tn ' + lazyClass,
                        "srcType": path
                    });
                } else {
                    tnLink = $('<div/>', {
                        "class": "owl-video-tn",
                        "style": 'opacity:1;background-image:url(' + path + ')'
                    });
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap($('<div/>', {
            "class": "owl-video-wrapper",
            "style": dimensions
        }));

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function () {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function (event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html,
            iframe;

        if (this._playing) {
            return;
        }

        this._core.enter('playing');
        this._core.trigger('play', null, 'video');

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
        html.attr('height', height);
        html.attr('width', width);
        if (video.type === 'youtube') {
            html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
        } else if (video.type === 'vimeo') {
            html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
        } else if (video.type === 'vzaar') {
            html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
        }

        iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

        this._playing = item.addClass('owl-video-playing');
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function () {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement;

        return element && $(element).parent().hasClass('owl-video-frame');
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function () {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function () {

        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css({'left': left + 'px'})
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function (e) {
        $(e.target).css({'left': ''})
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout id.
         * @type {Number}
         */
        this._call = null;

        /**
         * Depending on the state of the plugin, this variable contains either
         * the start time of the timer or the current timer value if it's
         * paused. Since we start in a paused state we initialize the timer
         * value.
         * @type {Number}
         */
        this._time = 0;

        /**
         * Stores the timeout currently used.
         * @type {Number}
         */
        this._timeout = 0;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = true;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position' && this._paused) {
                    // Reset the timer. This code is triggered when the position
                    // of the carousel was changed through user interaction.
                    this._time = 0;
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function (e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function (e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * Transition to the next slide and set a timeout for the next transition.
     * @private
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype._next = function (speed) {
        this._call = window.setTimeout(
            $.proxy(this._next, this, speed),
            this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
        );

        if (this._core.is('interacting') || document.hidden) {
            return;
        }
        this._core.next(speed || this._core.settings.autoplaySpeed);
    }

    /**
     * Reads the current timer value when the timer is playing.
     * @public
     */
    Autoplay.prototype.read = function () {
        return new Date().getTime() - this._time;
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function (timeout, speed) {
        var elapsed;

        if (!this._core.is('rotating')) {
            this._core.enter('rotating');
        }

        timeout = timeout || this._core.settings.autoplayTimeout;

        // Calculate the elapsed time since the last transition. If the carousel
        // wasn't playing this calculation will yield zero.
        elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

        if (this._paused) {
            // Start the clock.
            this._time = this.read();
            this._paused = false;
        } else {
            // Clear the active timeout to allow replacement.
            window.clearTimeout(this._call);
        }

        // Adjust the origin of the timer to match the new timeout value.
        this._time += this.read() % timeout - elapsed;

        this._timeout = timeout;
        this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function () {
        if (this._core.is('rotating')) {
            // Reset the clock.
            this._time = 0;
            this._paused = true;

            window.clearTimeout(this._call);
            this._core.leave('rotating');
        }
    };

    /**
     * Pauses the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function () {
        if (this._core.is('rotating') && !this._paused) {
            // Pause the clock.
            this._time = this.read();
            this._paused = true;

            window.clearTimeout(this._call);
        }
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function () {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    'use strict';
    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: [
            '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
            '<span aria-label="' + 'Next' + '">&#x203a;</span>'
        ],
        navSpeed: false,
        navElement: 'button type="button" role="presentation"',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function () {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
            : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function (e) {
                this.prev(settings.navSpeed);
            }, this));
        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function (e) {
                this.next(settings.navSpeed);
            }, this));

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [$('<button role="button">')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML')];
        }

        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
            : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$absolute)
                ? $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, settings.dotsSpeed);
        }, this));

        /*$el.on('focusin', function() {
      $(document).off(".carousel");

      $(document).on('keydown.carousel', function(e) {
        if(e.keyCode == 37) {
          $el.trigger('prev.owl')
        }
        if(e.keyCode == 39) {
          $el.trigger('next.owl')
        }
      });
    });*/

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function () {
        var handler, control, property, override, settings;
        settings = this._core.settings;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            if (control === '$relative' && settings.navContainer) {
                this._controls[control].html('');
            } else {
                this._controls[control].remove();
            }
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function () {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items;

        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function () {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }

        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }

            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items)
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function () {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function (page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function (successor) {
        var position, length,
            settings = this._core.settings;

        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }

        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function (position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    'use strict';
    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function (item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function (e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);

            if (position === undefined || position === this._core.current()) {
                return;
            }

            this._core.to(this._core.relative(position), false, true);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function () {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
    var style = $('<support>').get(0).style, prefixes = 'Webkit Moz O ms'.split(' '), events = {
        transition: {
            end: {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd',
                transition: 'transitionend'
            }
        },
        animation: {
            end: {
                WebkitAnimation: 'webkitAnimationEnd',
                MozAnimation: 'animationend',
                OAnimation: 'oAnimationEnd',
                animation: 'animationend'
            }
        }
    }, tests = {
        csstransforms: function () {
            return !!test('transform')
        }, csstransforms3d: function () {
            return !!test('perspective')
        }, csstransitions: function () {
            return !!test('transition')
        }, cssanimations: function () {
            return !!test('animation')
        }
    };

    function test(property, prefixed) {
        var result = !1, upper = property.charAt(0).toUpperCase() + property.slice(1);
        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : !0;
                return !1
            }
        });
        return result
    }

    function prefixed(property) {
        return test(property, !0)
    }

    if (tests.csstransitions()) {
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[$.support.transition]
    }
    if (tests.cssanimations()) {
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[$.support.animation]
    }
    if (tests.csstransforms()) {
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d()
    }
})(window.Zepto || window.jQuery, window, document);/*! WOW - v1.0.1 - 2014-08-15
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function () {
    var a, b, c, d = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, e = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1
    };
    b = function () {
        function a() {
        }

        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = []
        }

        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return a.notSupported = !0, a.prototype.observe = function () {
        }, a
    }()), this.WOW = function () {
        function f(a) {
            null == a && (a = {}), this.scrollCallback = d(this.scrollCallback, this), this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c
        }

        return f.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, f.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
        }, f.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                return e
            }.call(this), this.all = function () {
                var a, c, d, e;
                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                return e
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else {
                for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
                window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
            }
            return this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function () {
                        var a, b, e, f;
                        for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c));
                        return f
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, f.prototype.stop = function () {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, f.prototype.sync = function () {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, f.prototype.doSync = function (a) {
            var b, c, d, f, g;
            if (!this.stopped) {
                if (null == a && (a = this.element), 1 !== a.nodeType) return;
                for (a = a.parentNode || a, f = a.querySelectorAll("." + this.config.boxClass), g = [], c = 0, d = f.length; d > c; c++) b = f[c], e.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b), this.all.push(b), g.push(this.scrolled = !0)) : g.push(void 0);
                return g
            }
        }, f.prototype.show = function (a) {
            return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass
        }, f.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, f.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), f.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
            return e
        }, f.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
        }, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c], a["" + c] = d, f.push(function () {
                var b, f, g, h;
                for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                return h
            }.call(this));
            return f
        }, f.prototype.vendorCSS = function (a, b) {
            var c, d, e, f, g, h;
            for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b);
            return c
        }, f.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = window.getComputedStyle(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, f.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, f.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, f.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, f.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, f.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, f.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, innerHeight) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, f.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, f.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, f
    }()
}).call(this);
/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JĆĀ¶rn Zaefferer; Licensed MIT */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function (b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
                }

                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        }, valid: function () {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b, d = d.concat(c.errorList)
            }), c.errorList = d), b
        }, rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case"add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case"remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
        }
    }), a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        }, filled: function (b) {
            return !!a.trim("" + a(b).val())
        }, unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this.form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }

                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            }, element: function (b) {
                var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            }, showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({message: b[c], element: this.findByName(c)[0]});
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight) for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, ""); else c.removeClass(this.settings.errorClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b, c = 0;
                for (b in a) c++;
                return c
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            }, elements: function () {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            }, elementValue: function (b) {
                var c, d = a(b), e = b.type;
                return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            }, check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                for (d in f) {
                    e = {method: d, parameters: f[d]};
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            }, customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            }, customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            }, defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            }, formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            }, addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            }, defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (b, c) {
                var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
            }, errorsFor: function (b) {
                var c = this.idOrName(b), d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            }, getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case"select":
                        return a("option:selected", c).length;
                    case"input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            }, depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (b, c) {
                    return !!a(b, c.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            }, stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }, destroy: function () {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function (a, b, c, d) {
            /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case"string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case"function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            }, email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            }, date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            }, dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, creditcard: function (a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0, f = 0, g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            }, minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            }, maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            }, rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            }, min: function (a, b, c) {
                return this.optional(b) || a >= c
            }, max: function (a, b, c) {
                return this.optional(b) || c >= a
            }, range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            }, equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            }, remote: function (b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {url: d} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function (d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    })
});
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                t.formData ? r.data = t.formData : r.data = n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData) for (var d in m.extraData) m.extraData.hasOwnProperty(d) && (e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? l.push(e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0]) : l.push(e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]));
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw"timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {"content-type": m.dataType};
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                                    var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function (e) {
                x.abort(e)
            }, r) for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), g = v[0], x = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {
                },
                getResponseHeader: function () {
                },
                setRequestHeader: function () {
                },
                abort: function (t) {
                    var r = "timeout" === t ? "timeout" : "aborted";
                    a("aborting upload... " + r), this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (n) {
                    }
                    v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                }
            }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }, C = e.parseJSON || function (e) {
                return window.eval("(" + e + ")")
            }, _ = function (t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0,
                    o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
            f.resetForm()
        }), t.clearForm && x.push(function () {
            f.clearForm(t.includeHidden)
        }), !t.dataType && t.target) {
            var y = t.success || function () {
            };
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
            for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
        }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s: this.selector, c: this.context};
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++) if (d = u[c], f = d.name, f && !d.disabled) if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
            name: f,
            value: e(d).val(),
            type: d.type
        }), a.push({name: f + ".x", value: o.clk_x}, {
            name: f + ".y",
            value: o.clk_y
        })); else if (m = e.fieldValue(d, !0), m && m.constructor == Array) for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
            name: f,
            value: m[l]
        }); else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length) for (l = 0; l < v.length; l++) a.push({
                name: f,
                value: v[l],
                type: d.type
            }); else a.push({name: f, value: "", type: d.type})
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk), x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array) for (var i = 0, o = n.length; o > i; i++) r.push({
                    name: a,
                    value: n[i]
                }); else null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});/*!
 * Isotope PACKAGED v2.1.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function (t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function (n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a], h = t.data(p, e);
                        if (h) if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                            var f = h[n].apply(h, s);
                            if (void 0 !== f) return f
                        } else r("no such method '" + n + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }

    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, o = function () {
    };
    i.addEventListener ? o = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function (t, i, o) {
        t[i + o] = o.handleEvent ? function () {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function () {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function () {
    };
    i.removeEventListener ? n = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {bind: o, unbind: n};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || o()
    }

    function o() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var o = s[t];
            o()
        }
    }

    function n(n) {
        return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
}(window), function () {
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var o = t.prototype, n = this, r = n.EventEmitter;
    o.getListeners = function (t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function (t, i) {
        var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
        for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {listener: i, once: !1});
        return this
    }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
        return this.getListeners(t), this
    }, o.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, o.removeListener = function (t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function (t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (o = i.length; o--;) r.call(this, e, i[o]); else for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function (t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" === i) delete o[t]; else if (t instanceof RegExp) for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e]; else delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s) if (s.hasOwnProperty(n)) for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++) if (e = i[n] + t, "string" == typeof o[e]) return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function i() {
    }

    function o() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }

    function n(i) {
        function n() {
            if (!d) {
                d = !0;
                var o = t.getComputedStyle;
                if (p = function () {
                    var t = o ? function (t) {
                        return o(t, null)
                    } : function (t) {
                        return t.currentStyle
                    };
                    return function (e) {
                        var i = t(e);
                        return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i
                    }
                }(), h = i("boxSizing")) {
                    var n = document.createElement("div");
                    n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(n);
                    var a = p(n);
                    f = 200 === e(a.width), s.removeChild(n)
                }
            }
        }

        function a(t) {
            if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = p(t);
                if ("none" === i.display) return o();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) {
                    var c = s[d], y = i[c];
                    y = u(t, y);
                    var m = parseFloat(y);
                    r[c] = isNaN(m) ? 0 : m
                }
                var g = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom,
                    _ = r.marginLeft + r.marginRight, I = r.marginTop + r.marginBottom,
                    L = r.borderLeftWidth + r.borderRightWidth, z = r.borderTopWidth + r.borderBottomWidth, b = a && f,
                    x = e(i.width);
                x !== !1 && (r.width = x + (b ? 0 : g + L));
                var S = e(i.height);
                return S !== !1 && (r.height = S + (b ? 0 : v + z)), r.innerWidth = r.width - (g + L), r.innerHeight = r.height - (v + z), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r
            }
        }

        function u(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var o = e.style, n = o.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
        }

        var p, h, f, d = !1;
        return a
    }

    var r = "undefined" == typeof console ? i : function (t) {
            console.error(t)
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
}(window), function (t) {
    function e(t, e) {
        return t[s](e)
    }

    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function o(t, e) {
        i(t);
        for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++) if (o[n] === t) return !0;
        return !1
    }

    function n(t, o) {
        return i(t), e(t, o)
    }

    var r, s = function () {
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
            var n = e[i], r = n + "MatchesSelector";
            if (t[r]) return r
        }
    }();
    if (s) {
        var a = document.createElement("div"), u = e(a, "div");
        r = u ? e : n
    } else r = o;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function (t) {
    function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    function n(t, n, r) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
        }

        var u = r("transition"), p = r("transform"), h = u && p, f = !!r("perspective"), d = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[u], l = ["transform", "transition", "transitionDuration", "transitionProperty"], c = function () {
            for (var t = {}, e = 0, i = l.length; i > e; e++) {
                var o = l[e], n = r(o);
                n && n !== o && (t[o] = n)
            }
            return t
        }();
        e(a.prototype, t.prototype), a.prototype._create = function () {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function () {
            this.size = n(this.element)
        }, a.prototype.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var o = c[i] || i;
                e[o] = t[i]
            }
        }, a.prototype.getPosition = function () {
            var t = s(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop,
                n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
        }, a.prototype.layoutPosition = function () {
            var t = this.layout.size, e = this.layout.options, i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
        };
        var y = f ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function (t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10),
                s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
            var a = t - i, u = e - o, p = {}, h = this.layout.options;
            a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                to: p,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var m = p && o(p) + ",opacity";
        a.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(d, this, !1))
        }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        a.prototype.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn, o = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var v = {transitionProperty: "", transitionDuration: ""};
        return a.prototype.removeTransitionStyles = function () {
            this.css(v)
        }, a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function () {
            if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
            var t = this;
            this.on("transitionEnd", function () {
                return t.removeElem(), !0
            }), this.hide()
        }, a.prototype.reveal = function () {
            delete this.isHidden, this.css({display: ""});
            var t = this.layout.options;
            this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
        }, a.prototype.hide = function () {
            this.isHidden = !0, this.css({display: ""});
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({display: "none"})
                    }
                }
            })
        }, a.prototype.destroy = function () {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, a
    }

    var r = t.getComputedStyle, s = r ? function (t) {
        return r(t, null)
    } : function (t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function (t) {
    function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function i(t) {
        return "[object Array]" === f.call(t)
    }

    function o(t) {
        var e = [];
        if (i(t)) e = t; else if (t && "number" == typeof t.length) for (var o = 0, n = t.length; n > o; o++) e.push(t[o]); else e.push(t);
        return e
    }

    function n(t, e) {
        var i = l(e, t);
        -1 !== i && e.splice(i, 1)
    }

    function r(t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }

    function s(i, s, f, l, c, y) {
        function m(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
            var o = ++g;
            this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var g = 0, v = {};
        return m.namespace = "outlayer", m.Item = y, m.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "1s",
            hiddenStyle: {opacity: 0, transform: "scale(0.005) rotateX(180deg)"},
            visibleStyle: {opacity: 1, transform: "scale(1) rotateX(0deg)"}
        }, e(m.prototype, f.prototype), m.prototype.option = function (t) {
            e(this.options, t)
        }, m.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, m.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, m.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n], a = new i(s, this);
                o.push(a)
            }
            return o
        }, m.prototype._filterFindItemElements = function (t) {
            t = o(t);
            for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (d(s)) if (e) {
                    c(s, e) && i.push(s);
                    for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u])
                } else i.push(s)
            }
            return i
        }, m.prototype.getItemElements = function () {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, m.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
            this.getSize()
        }, m.prototype.getSize = function () {
            this.size = l(this.element)
        }, m.prototype._getMeasurement = function (t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : d(o) && (i = o), this[t] = i ? l(i)[e] : o) : this[t] = 0
        }, m.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, m.prototype._getItemsForLayout = function (t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, m.prototype._layoutItems = function (t, e) {
            function i() {
                o.emitEvent("layoutComplete", [o, t])
            }

            var o = this;
            if (!t || !t.length) return i(), void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r], u = this._getItemLayoutPosition(a);
                u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
            }
            this._processLayoutQueue(n)
        }, m.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, m.prototype._processLayoutQueue = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, m.prototype._positionItem = function (t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, m.prototype._postLayout = function () {
            this.resizeContainer()
        }, m.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, m.prototype._itemsOn = function (t, e, i) {
            function o() {
                return n++, n === r && i.call(s), !0
            }

            for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                p.on(e, o)
            }
        }, m.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, m.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, m.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, m.prototype.unstamp = function (t) {
            if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                n(o, this.stamps), this.unignore(o)
            }
        }, m.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
        }, m.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, m.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(), i = this._boundingRect, o = l(t), n = {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            };
            return n
        }, m.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, m.prototype.bindResize = function () {
            this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
        }, m.prototype.unbindResize = function () {
            this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
        }, m.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, m.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.prototype.needsResizeLayout = function () {
            var t = l(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, m.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, m.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, m.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, m.prototype.reveal = function (t) {
            var e = t && t.length;
            if (e) for (var i = 0; e > i; i++) {
                var o = t[i];
                o.reveal()
            }
        }, m.prototype.hide = function (t) {
            var e = t && t.length;
            if (e) for (var i = 0; e > i; i++) {
                var o = t[i];
                o.hide()
            }
        }, m.prototype.getItem = function (t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t) return o
            }
        }, m.prototype.getItems = function (t) {
            if (t && t.length) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i], r = this.getItem(n);
                    r && e.push(r)
                }
                return e
            }
        }, m.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function () {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    s.remove(), n(s, this.items)
                }
            }
        }, m.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize();
            var n = this.element.outlayerGUID;
            delete v[n], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
        }, m.data = function (t) {
            var e = t && t.outlayerGUID;
            return e && v[e]
        }, m.create = function (t, i) {
            function o() {
                m.apply(this, arguments)
            }

            return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function () {
                y.apply(this, arguments)
            }, o.Item.prototype = new y, s(function () {
                for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                    var f, d = i[s], l = d.getAttribute(n);
                    try {
                        f = l && JSON.parse(l)
                    } catch (c) {
                        u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
                        continue
                    }
                    var y = new o(d, f);
                    p && p.data(d, t, y)
                }
            }), p && p.bridget && p.bridget(t, o), o
        }, m.Item = y, m
    }

    var a = t.document, u = t.console, p = t.jQuery, h = function () {
        }, f = Object.prototype.toString,
        d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
            return t instanceof HTMLElement
        } : function (t) {
            return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
        }, l = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1
        };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function (t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }

        e.prototype = new t.Item, e.prototype._create = function () {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData, e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function () {
            i.apply(this, arguments), this.css({display: ""})
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }

        return function () {
            function t(t) {
                return function () {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }

            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element), i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function (t, e) {
            var i = t + e, o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function (t, e) {
            function o() {
                i.apply(this, arguments)
            }

            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, o.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil",
                n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                x: this.columnWidth * a,
                y: s
            }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
            return u
        }, o.prototype._getColGroup = function (t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function (t) {
            var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right,
                r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {height: this.maxY};
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }

    var i = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e) return i
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function (t) {
    function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function i(t, i) {
        var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout,
            s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, o
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function (t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {x: this.x, y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, e.prototype._getContainerSize = function () {
            return {height: this.maxY}
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t) {
        var e = t.create("vertical", {horizontalAlignment: 0});
        return e.prototype._resetLayout = function () {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
            return this.y += t.size.outerHeight, {x: e, y: i}
        }, e.prototype._getContainerSize = function () {
            return {height: this.y}
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function i(t) {
        return "[object Array]" === h.call(t)
    }

    function o(t) {
        var e = [];
        if (i(t)) e = t; else if (t && "number" == typeof t.length) for (var o = 0, n = t.length; n > o; o++) e.push(t[o]); else e.push(t);
        return e
    }

    function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1)
    }

    function r(t, i, r, u, h) {
        function f(t, e) {
            return function (i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n], a = i.sortData[s], u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
                        return (a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }

        var d = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
        d.Item = u, d.LayoutMode = h, d.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in h.modes) this._initLayoutMode(e)
        }, d.prototype.reloadItems = function () {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, d.prototype._itemize = function () {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, d.prototype._initLayoutMode = function (t) {
            var i = h.modes[t], o = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
        }, d.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, d.prototype._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.prototype.arrange = function (t) {
            function e() {
                o.reveal(i.needReveal), o.hide(i.needHide)
            }

            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var o = this;
            this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function () {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, d.prototype._filter = function (t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
                var u = t[s];
                if (!u.isIgnored) {
                    var p = r(u);
                    p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u)
                }
            }
            return {matches: i, needReveal: o, needHide: n}
        }, d.prototype._getFilterTest = function (t) {
            return s && this.options.isJQueryFiltering ? function (e) {
                return s(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return r(e.element, t)
            }
        }, d.prototype.updateSortData = function (t) {
            var e;
            t ? (t = o(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d.prototype._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = l(i)
            }
        }, d.prototype._updateItemsSortData = function (t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var o = t[i];
                o.updateSortData()
            }
        };
        var l = function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = a(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o),
                    u = d.sortDataParsers[i[1]];
                return t = u ? function (t) {
                    return t && u(s(t))
                } : function (t) {
                    return t && s(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function (e) {
                    return e.getAttribute(t)
                } : function (t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }

            return t
        }();
        d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            }, parseFloat: function (t) {
                return parseFloat(t)
            }
        }, d.prototype._sort = function () {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory), i = f(e, this.options.sortAscending);
                this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d.prototype._mode = function () {
            var t = this.options.layoutMode, e = this.modes[t];
            if (!e) throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d.prototype._resetLayout = function () {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d.prototype._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d.prototype._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, d.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, d.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, d.prototype.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d.prototype._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.prototype.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                var r = this._filter(e).matches;
                for (i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var c = d.prototype.remove;
        return d.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if (c.call(this, t), e && e.length) for (var i = 0, r = e.length; r > i; i++) {
                var s = e[i];
                n(s, this.filteredItems)
            }
        }, d.prototype.shuffle = function () {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function (t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, d.prototype.getFilteredItemElements = function () {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, d
    }

    var s = t.jQuery, a = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, u = document.documentElement, p = u.textContent ? function (t) {
        return t.textContent
    } : function (t) {
        return t.innerText
    }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);
(function () {
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i = 0; i < scripts.length; i++) if (scripts[i].src && scripts[i].src.match(/html5lightbox\.js/i)) jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    var loadjQuery = !1;
    if (typeof jQuery == "undefined") loadjQuery = !0; else {
        var jVersion = jQuery.fn.jquery.split(".");
        if (jVersion[0] < 1 || jVersion[0] == 1 && jVersion[1] < 6) loadjQuery = !0
    }
    if (loadjQuery) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        if (script.readyState) script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                loadHtml5LightBox(jsFolder)
            }
        }; else script.onload = function () {
            loadHtml5LightBox(jsFolder)
        };
        script.setAttribute("src", jsFolder + "jquery.js");
        head.appendChild(script)
    } else loadHtml5LightBox(jsFolder)
})();

function loadHtml5LightBox(jsFolder) {
    (function ($) {
        $.fn.html5lightbox = function (options) {
            var inst = this;
            inst.options = $.extend({
                freelink: "http://html5box.com/",
                defaultvideovolume: 1,
                autoclose: !1,
                insideiframe: !1,
                autoplay: !0,
                loopvideo: !1,
                html5player: !0,
                responsive: !0,
                nativehtml5controls: !1,
                videohidecontrols: !1,
                nativecontrolsonfirefox: !0,
                nativecontrolsonie: !0,
                imagekeepratio: !0,
                useflashonie9: !0,
                useflashonie10: !0,
                useflashonie11: !1,
                googleanalyticsaccount: "",
                arrowloop: !0,
                shownavigation: !0,
                thumbwidth: 96,
                thumbheight: 72,
                thumbgap: 4,
                thumbtopmargin: 12,
                thumbbottommargin: 12,
                thumbborder: 1,
                thumbbordercolor: "transparent",
                thumbhighlightbordercolor: "#fff",
                thumbopacity: 1,
                navbuttonwidth: 32,
                overlaybgcolor: "#000",
                overlayopacity: 0.9,
                bgcolor: "#fff",
                bordersize: 8,
                borderradius: 0,
                bordermargin: 32,
                bordertopmargin: 32,
                bordertopmarginsmall: 48,
                barautoheight: !0,
                barheight: 64,
                responsivebarheight: !1,
                smallscreenheight: 415,
                barheightonsmallheight: 64,
                notkeepratioonsmallheight: !1,
                loadingwidth: 64,
                loadingheight: 64,
                resizespeed: 400,
                fadespeed: 400,
                jsfolder: jsFolder,
                skinsfoldername: "skins/default/",
                loadingimage: "lightbox-loading.gif",
                nextimage: "lightbox-next.png",
                previmage: "lightbox-prev.png",
                closeimage: "lightbox-close.png",
                playvideoimage: "lightbox-playvideo.png",
                titlebgimage: "lightbox-titlebg.png",
                navarrowsprevimage: "lightbox-navprev.png",
                navarrowsnextimage: "lightbox-navnext.png",
                navarrowsalwaysshowontouch: !0,
                navarrowsbottomscreenwidth: 479,
                closeonoverlay: !0,
                alwaysshownavarrows: !1,
                showplaybutton: !0,
                playimage: "lightbox-play.png",
                pauseimage: "lightbox-pause.png",
                fullscreenmode: !1,
                fullscreencloseimage: "lightbox-close-fullscreen.png",
                fullscreennextimage: "lightbox-next-fullscreen.png",
                fullscreenprevimage: "lightbox-prev-fullscreen.png",
                videobgcolor: "#000",
                html5videoposter: "",
                showtitle: !0,
                titlestyle: "bottom",
                titleinsidecss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
                titlebottomcss: "color:#333; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
                showdescription: !0,
                descriptioninsidecss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                descriptionbottomcss: "color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                showtitleprefix: !0,
                titleprefix: "%NUM / %TOTAL",
                autoslide: !1,
                slideinterval: 5E3,
                showtimer: !0,
                timerposition: "bottom",
                timerheight: 2,
                timercolor: "#dc572e",
                timeropacity: 1,
                initvimeo: !0,
                inityoutube: !0,
                initsocial: !0,
                showsocial: !1,
                socialposition: "position:absolute;top:100%;right:0;",
                socialdirection: "horizontal",
                socialbuttonsize: 32,
                socialbuttonfontsize: 18,
                socialrotateeffect: !0,
                showfacebook: !0,
                showtwitter: !0,
                showpinterest: !0,
                imagepercentage: 75,
                sidetobottomscreenwidth: 479,
                errorwidth: 280,
                errorheight: 48,
                errorcss: "text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;",
                enabletouchswipe: !0,
                supportesckey: !0,
                supportarrowkeys: !0,
                version: "3.3",
                stamp: !0,
                freemark: "72,84,77,76,53,32,76,105,103,104,116,98,111,120,32,70,114,101,101,32,86,101,114,115,105,111,110",
                watermark: "",
                watermarklink: ""
            }, options);
            if (typeof html5lightbox_options != "undefined" && html5lightbox_options) $.extend(inst.options, html5lightbox_options);
            if ($("div#html5lightbox_options").length) $.each($("div#html5lightbox_options").data(), function (key, value) {
                inst.options[key.toLowerCase()] = value
            });
            if ($("div#html5lightbox_general_options").length) $.each($("div#html5lightbox_general_options").data(), function (key, value) {
                inst.options[key.toLowerCase()] = value
            });
            var DEFAULT_WIDTH = 960, DEFAULT_HEIGHT = 540;
            var ELEM_TYPE = 0, ELEM_HREF = 1, ELEM_TITLE = 2, ELEM_GROUP = 3, ELEM_WIDTH = 4, ELEM_HEIGHT = 5,
                ELEM_HREF_WEBM = 6, ELEM_HREF_OGG = 7, ELEM_THUMBNAIL = 8, ELEM_DESCRIPTION = 9, ELEM_DIV = 10;
            inst.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV", "DAILYMOTION", "DIV", "WISTIA"];
            inst.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
            inst.options.skinsfolder = inst.options.skinsfoldername;
            if (inst.options.skinsfolder.length > 0 && inst.options.skinsfolder[inst.options.skinsfolder.length - 1] != "/") inst.options.skinsfolder += "/";
            if (inst.options.skinsfolder.charAt(0) != "/" && inst.options.skinsfolder.substring(0, 5) != "http:" && inst.options.skinsfolder.substring(0, 6) != "https:") inst.options.skinsfolder = inst.options.jsfolder + inst.options.skinsfolder;
            var i;
            var l;
            var mark = "";
            var bytes = inst.options.freemark.split(",");
            for (i = 0; i < bytes.length; i++) mark += String.fromCharCode(bytes[i]);
            inst.options.freemark = mark;
            var d0 = "hmtamgli5cboxh.iclolms";
            for (i = 1; i <= 5; i++) d0 = d0.slice(0, i) + d0.slice(i + 1);
            l = d0.length;
            for (i = 0; i < 5; i++) d0 = d0.slice(0, l - 9 + i) + d0.slice(l - 8 + i);
            if (inst.options.htmlfolder.indexOf(d0) != -1) inst.options.stamp = !1;
            inst.options.flashInstalled = !1;
            try {
                if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) inst.options.flashInstalled = !0
            } catch (e) {
                if (navigator.mimeTypes["application/x-shockwave-flash"]) inst.options.flashInstalled = !0
            }
            inst.options.html5VideoSupported = !!document.createElement("video").canPlayType;
            inst.options.isChrome = navigator.userAgent.match(/Chrome/i) != null;
            inst.options.isFirefox = navigator.userAgent.match(/Firefox/i) != null;
            inst.options.isOpera = navigator.userAgent.match(/Opera/i) != null || navigator.userAgent.match(/OPR\//i) != null;
            inst.options.isSafari = navigator.userAgent.match(/Safari/i) != null;
            inst.options.isIE11 = navigator.userAgent.match(/Trident\/7/) != null && navigator.userAgent.match(/rv:11/) != null;
            inst.options.isIE = navigator.userAgent.match(/MSIE/i) != null && !inst.options.isOpera;
            inst.options.isIE10 = navigator.userAgent.match(/MSIE 10/i) != null && !this.options.isOpera;
            inst.options.isIE9 = navigator.userAgent.match(/MSIE 9/i) != null && !inst.options.isOpera;
            inst.options.isIE8 = navigator.userAgent.match(/MSIE 8/i) != null && !inst.options.isOpera;
            inst.options.isIE7 = navigator.userAgent.match(/MSIE 7/i) != null && !inst.options.isOpera;
            inst.options.isIE6 = navigator.userAgent.match(/MSIE 6/i) != null && !inst.options.isOpera;
            inst.options.isIE678 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8;
            inst.options.isIE6789 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8 || inst.options.isIE9;
            inst.options.isAndroid = navigator.userAgent.match(/Android/i) != null;
            inst.options.isIPad = navigator.userAgent.match(/iPad/i) != null;
            inst.options.isIPhone = navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;
            inst.options.isIOS = inst.options.isIPad || inst.options.isIPhone;
            inst.options.isMobile = inst.options.isAndroid || inst.options.isIPad || inst.options.isIPhone;
            inst.options.isIOSLess5 = inst.options.isIPad && inst.options.isIPhone && (navigator.userAgent.match(/OS 4/i) != null || navigator.userAgent.match(/OS 3/i) != null);
            inst.options.supportCSSPositionFixed = !inst.options.isIE6 && !inst.options.isIOSLess5;
            inst.options.iequirksmode = inst.options.isIE6789 && document.compatMode != "CSS1Compat";
            inst.options.isTouch = "ontouchstart" in window;
            if (inst.options.isMobile) inst.options.autoplay = !1;
            if (inst.options.isFirefox && inst.options.nativecontrolsonfirefox) inst.options.nativehtml5controls = !0;
            if ((inst.options.isIE6789 || inst.options.isIE10 || inst.options.isIE11) && inst.options.nativecontrolsonie) inst.options.nativehtml5controls = !0;
            inst.options.navheight = 0;
            inst.options.thumbgap += 2 * inst.options.thumbborder;
            inst.options.resizeTimeout = -1;
            inst.slideTimeout = null;
            inst.autosliding = !1;
            inst.elemArray = new Array;
            inst.options.curElem = -1;
            inst.defaultoptions = $.extend({}, inst.options);
            if (inst.options.googleanalyticsaccount && !window._gaq) {
                window._gaq = window._gaq || [];
                window._gaq.push(["_setAccount", inst.options.googleanalyticsaccount]);
                window._gaq.push(["_trackPageview"]);
                $.getScript("https://ssl.google-analytics.com/ga.js")
            }
            if (inst.options.initvimeo) {
                var tag = document.createElement("script");
                tag.src = "https://f.vimeocdn.com/js/froogaloop2.min.js";
                var firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
            }
            if (inst.options.inityoutube) {
                var tag = document.createElement("script");
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
            }
            inst.showing = !1;
            inst.supportKeyboard = function () {
                $(document).keyup(function (e) {
                    if (!inst.showing) return;
                    if (inst.options.supportesckey && e.keyCode == 27) inst.finish(); else if (inst.options.supportarrowkeys) if (e.keyCode == 39) inst.gotoSlide(-1); else if (e.keyCode == 37) inst.gotoSlide(-2)
                })
            };
            inst.supportKeyboard();
            inst.init = function () {
                inst.showing = !1;
                inst.readData();
                inst.createMarkup();
                inst.initSlide()
            };
            inst.readData = function () {
                inst.each(function () {
                    if (this.nodeName.toLowerCase() != "a" && this.nodeName.toLowerCase() != "area") return;
                    var $this = $(this);
                    var fileType = "mediatype" in $this.data() ? $this.data("mediatype") : inst.checkType($this.attr("href"));
                    if (fileType < 0) return;
                    for (var i = 0; i < inst.elemArray.length; i++) if ($this.attr("href") == inst.elemArray[i][ELEM_HREF]) return;
                    inst.elemArray.push(new Array(fileType, $this.attr("href"), $this.attr("title"), $this.data("group"), $this.data("width"), $this.data("height"), $this.data("webm"), $this.data("ogg"), $this.data("thumbnail"), $this.data("description")))
                })
            };
            inst.createMarkup = function () {
                inst.options.barheightoriginal = inst.options.barheight;
                if (inst.options.responsivebarheight) {
                    var winH = window.innerHeight ? window.innerHeight : $(window).height();
                    if (winH <= inst.options.smallscreenheight) inst.options.barheight = inst.options.barheightonsmallheight
                }
                if (!inst.options.titlecss) inst.options.titlecss = inst.options.titlestyle == "inside" ? inst.options.titleinsidecss : inst.options.titlebottomcss;
                if (!inst.options.descriptioncss) inst.options.descriptioncss = inst.options.titlestyle == "inside" ? inst.options.descriptioninsidecss : inst.options.descriptionbottomcss;
                inst.options.titlecss = $.trim(inst.options.titlecss);
                if (inst.options.titlecss.length > 1) {
                    if (inst.options.titlecss.charAt(0) == "{") inst.options.titlecss = inst.options.titlecss.substring(1);
                    if (inst.options.titlecss.charAt(inst.options.titlecss.length - 1) == "}") inst.options.titlecss = inst.options.titlecss.substring(0, inst.options.titlecss.length - 1)
                }
                inst.options.descriptioncss = $.trim(inst.options.descriptioncss);
                if (inst.options.descriptioncss.length > 1) {
                    if (inst.options.descriptioncss.charAt(0) == "{") inst.options.descriptioncss = inst.options.descriptioncss.substring(1);
                    if (inst.options.descriptioncss.charAt(inst.options.descriptioncss.length - 1) == "}") inst.options.descriptioncss = inst.options.descriptioncss.substring(0, inst.options.descriptioncss.length - 1)
                }
                inst.options.errorcss = $.trim(inst.options.errorcss);
                if (inst.options.errorcss.length > 1) {
                    if (inst.options.errorcss.charAt(0) == "{") inst.options.errorcss = inst.options.errorcss.substring(1);
                    if (inst.options.errorcss.charAt(inst.options.errorcss.length - 1) == "}") inst.options.errorcss = inst.options.errorcss.substring(0, inst.options.errorcss.length - 1)
                }
                var styleCss = ".html5-hide {display:none !important;} #html5box-html5-lightbox #html5-text {" + inst.options.titlecss + "}";
                styleCss += "#html5box-html5-lightbox .html5-description {" + inst.options.descriptioncss + "}";
                styleCss += "#html5box-html5-lightbox .html5-error {" + inst.options.errorcss + "}";
                if (inst.options.navarrowsalwaysshowontouch || inst.options.alwaysshownavarrows) {
                    styleCss += "#html5box-html5-lightbox .html5-prev-touch {left:0px;top:50%;margin-top:-16px;margin-left:-32px;} #html5box-html5-lightbox .html5-next-touch {right:0px;top:50%;margin-top:-16px;margin-right:-32px;}";
                    styleCss += "@media (max-width: " + inst.options.navarrowsbottomscreenwidth + "px) { #html5box-html5-lightbox .html5-prev-touch {top:100%;left:0;margin:0;} #html5box-html5-lightbox .html5-next-touch {top:100%;right:0;margin:0;} }"
                }
                styleCss += "#html5box-html5-lightbox .html5-prev-fullscreen {display:block;} #html5box-html5-lightbox .html5-next-fullscreen {display:block;} #html5box-html5-lightbox .html5-prev-bottom-fullscreen {display:none;} #html5box-html5-lightbox .html5-next-bottom-fullscreen {display:none;}";
                styleCss += "@media (max-width: " + inst.options.navarrowsbottomscreenwidth + "px) {#html5box-html5-lightbox .html5-prev-fullscreen {display:none;} #html5box-html5-lightbox .html5-next-fullscreen {display:none;} #html5box-html5-lightbox .html5-prev-bottom-fullscreen {display:block;} #html5box-html5-lightbox .html5-next-bottom-fullscreen {display:block;} }";
                if (inst.options.titlestyle == "right") {
                    styleCss += "#html5box-html5-lightbox #html5-elem-wrap {width:" + inst.options.imagepercentage + "%;height:100%;} #html5box-html5-lightbox #html5-elem-data-box {min-height:100%;}";
                    styleCss += "@media (max-width: " + inst.options.sidetobottomscreenwidth + "px) {#html5box-html5-lightbox #html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox #html5-elem-data-box {width:100%;height:auto;min-height:0;}}"
                } else if (inst.options.titlestyle == "left") {
                    styleCss += "#html5box-html5-lightbox #html5-elem-wrap {height:100%;} #html5box-html5-lightbox #html5-elem-data-box {width:" + String(100 - inst.options.imagepercentage) + "%;min-height:100%;}";
                    styleCss += "@media (max-width: " + inst.options.sidetobottomscreenwidth + "px) {#html5box-html5-lightbox #html5-elem-wrap {width:100%;height:auto;} #html5box-html5-lightbox #html5-elem-data-box {width:100%;height:auto;min-height:0;}}"
                }
                styleCss += ".html5-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .html5-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }";
                $("head").append("<style type='text/css' data-creator='html5box-html5-lightbox'>" + styleCss + "</style>");
                inst.$lightbox = $("<div id='html5box-html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'>" + "<div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:" + inst.options.overlaybgcolor + ";opacity:" + inst.options.overlayopacity + ";filter:alpha(opacity=" + Math.round(inst.options.overlayopacity * 100) + ");'></div>" + "<div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'>" + "<div id='html5-elem-box' style='display:block;position:relative;width:100%;overflow-x:hidden;overflow-y:auto;height:100%;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'>" + "<div id='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:" + inst.options.bgcolor + ";'>" + "<div id='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\"" + inst.options.skinsfolder + inst.options.loadingimage + "\") no-repeat center center;'></div>" + "<div id='html5-error' class='html5-error' style='display:none;position:absolute;padding:" + inst.options.bordersize + "px;text-align:center;width:" + inst.options.errorwidth + "px;height:" + inst.options.errorheight + "px;'>" + "The requested content cannot be loaded.<br />Please try again later." + "</div>" + "<div id='html5-image' style='display:none;position:relative;top:0px;left:0px;width:100%;height:100%;" + (inst.options.iequirksmode ? "margin" : "padding") + ":" + inst.options.bordersize + "px;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'></div>" + "</div>" + "</div>" + "<div id='html5-watermark' style='display:none;position:absolute;left:" + String(inst.options.bordersize + 2) + "px;top:" + String(inst.options.bordersize + 2) + "px;'></div>" + "</div>" + "</div>");
                inst.options.positionFixed = inst.options.supportCSSPositionFixed && inst.options.responsive && !inst.options.iequirksmode;
                inst.$lightbox.css({position: inst.options.positionFixed ? "fixed" : "absolute"});
                inst.$lightbox.appendTo("body");
                inst.$lightboxBox = $("#html5-lightbox-box", inst.$lightbox);
                inst.$elem = $("#html5-elem-box", inst.$lightbox);
                inst.$elemWrap = $("#html5-elem-wrap", inst.$lightbox);
                inst.$loading = $("#html5-loading", inst.$lightbox);
                inst.$error = $("#html5-error", inst.$lightbox);
                inst.$image = $("#html5-image", inst.$lightbox);
                var elemText = "<div id='html5-elem-data-box' style='display:none;box-sizing:border-box;'><div id='html5-text' style='display:block;overflow:hidden;'></div></div>";
                if (inst.options.titlestyle == "left") inst.$elem.prepend(elemText); else inst.$elem.append(elemText);
                inst.$elemData = $("#html5-elem-data-box", inst.$lightbox);
                inst.$text = $("#html5-text", inst.$lightbox);
                if (inst.options.borderradius > 0) {
                    inst.$elem.css({
                        "border-radius": inst.options.borderradius + "px",
                        "-moz-border-radius": inst.options.borderradius + "px",
                        "-webkit-border-radius": inst.options.borderradius + "px"
                    });
                    if (inst.options.titlestyle == "inside") inst.$elemWrap.css({
                        "border-radius": inst.options.borderradius + "px",
                        "-moz-border-radius": inst.options.borderradius + "px",
                        "-webkit-border-radius": inst.options.borderradius + "px"
                    }); else if (inst.options.titlestyle == "bottom") {
                        inst.$elemWrap.css({
                            "border-top-left-radius": inst.options.borderradius + "px",
                            "-moz-top-left-border-radius": inst.options.borderradius + "px",
                            "-webkit-top-left-border-radius": inst.options.borderradius + "px",
                            "border-top-right-radius": inst.options.borderradius + "px",
                            "-moz-top-right-border-radius": inst.options.borderradius + "px",
                            "-webkit-top-right-border-radius": inst.options.borderradius + "px"
                        });
                        inst.$elemData.css({
                            "border-bottom-left-radius": inst.options.borderradius + "px",
                            "-moz-top-bottom-border-radius": inst.options.borderradius + "px",
                            "-webkit-bottom-left-border-radius": inst.options.borderradius + "px",
                            "border-bottom-right-radius": inst.options.borderradius + "px",
                            "-moz-bottom-right-border-radius": inst.options.borderradius + "px",
                            "-webkit-bottom-right-border-radius": inst.options.borderradius + "px"
                        })
                    }
                }
                if (inst.options.titlestyle == "right" || inst.options.titlestyle == "left") {
                    inst.$lightboxBox.css({"background-color": inst.options.bgcolor});
                    if (inst.options.titlestyle == "right") {
                        inst.$elemWrap.css({position: "relative", "float": "left"});
                        inst.$elemData.css({
                            position: "relative",
                            overflow: "hidden",
                            padding: inst.options.bordersize + "px"
                        })
                    } else {
                        inst.$elemWrap.css({position: "relative", overflow: "hidden"});
                        inst.$elemData.css({
                            position: "relative",
                            "float": "left",
                            padding: inst.options.bordersize + "px"
                        })
                    }
                } else if (inst.options.titlestyle == "inside") {
                    inst.$elemData.css({
                        position: "absolute",
                        margin: inst.options.bordersize + "px",
                        bottom: 0,
                        left: 0,
                        "background-color": "#333",
                        "background-color": "rgba(51, 51, 51, 0.6)"
                    });
                    inst.$text.css({padding: inst.options.bordersize + "px " + 2 * inst.options.bordersize + "px"})
                } else {
                    inst.$elemData.css({
                        position: "relative",
                        width: "100%",
                        height: inst.options.barautoheight ? "auto" : inst.options.barheight + "px",
                        "padding": "0 0 " + inst.options.bordersize + "px" + " 0",
                        "background-color": inst.options.bgcolor,
                        "text-align": "left"
                    });
                    inst.$text.css({"margin": "0 " + inst.options.bordersize + "px"})
                }
                if (inst.options.fullscreenmode) {
                    inst.$lightbox.append("<div class='html5-next-fullscreen' style='cursor:pointer;position:absolute;right:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + inst.options.skinsfolder + inst.options.fullscreennextimage + "'></div>" + "<div class='html5-prev-fullscreen' style='cursor:pointer;position:absolute;left:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + inst.options.skinsfolder + inst.options.fullscreenprevimage + "'></div>");
                    inst.$next = $(".html5-next-fullscreen", inst.$lightbox);
                    inst.$prev = $(".html5-prev-fullscreen", inst.$lightbox);
                    inst.$lightboxBox.append("<div class='html5-next-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;right:0;margin-top:8px;'><img src='" + inst.options.skinsfolder + inst.options.fullscreennextimage + "'></div>" + "<div class='html5-prev-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;left:0;margin-top:8px;'><img src='" + inst.options.skinsfolder + inst.options.fullscreenprevimage + "'></div>");
                    inst.$nextbottom = $(".html5-next-bottom-fullscreen", inst.$lightbox);
                    inst.$prevbottom = $(".html5-prev-bottom-fullscreen", inst.$lightbox);
                    inst.$nextbottom.click(function () {
                        inst.nextArrowClicked()
                    });
                    inst.$prevbottom.click(function () {
                        inst.prevArrowClicked()
                    });
                    inst.$lightbox.append("<div id='html5-close-fullscreen' style='display:block;cursor:pointer;position:absolute;top:0;right:0;margin-top:0;margin-right:0;'><img src='" + inst.options.skinsfolder + inst.options.fullscreencloseimage + "'></div>");
                    inst.$close = $("#html5-close-fullscreen", inst.$lightbox)
                } else {
                    inst.$elemWrap.append("<div id='html5-next' style='display:none;cursor:pointer;position:absolute;right:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + inst.options.skinsfolder + inst.options.nextimage + "'></div>" + "<div id='html5-prev' style='display:none;cursor:pointer;position:absolute;left:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + inst.options.skinsfolder + inst.options.previmage + "'></div>");
                    inst.$next = $("#html5-next", inst.$lightbox);
                    inst.$prev = $("#html5-prev", inst.$lightbox);
                    if (inst.options.isTouch && inst.options.navarrowsalwaysshowontouch || inst.options.alwaysshownavarrows) {
                        inst.$lightboxBox.append("<div class='html5-next-touch' style='display:block;cursor:pointer;position:absolute;'><img src='" + inst.options.skinsfolder + inst.options.nextimage + "'></div>" + "<div class='html5-prev-touch' style='display:block;cursor:pointer;position:absolute;'><img src='" + inst.options.skinsfolder + inst.options.previmage + "'></div>");
                        inst.$nexttouch = $(".html5-next-touch", inst.$lightbox);
                        inst.$prevtouch = $(".html5-prev-touch", inst.$lightbox);
                        inst.$nexttouch.click(function () {
                            inst.nextArrowClicked()
                        });
                        inst.$prevtouch.click(function () {
                            inst.prevArrowClicked()
                        })
                    }
                    inst.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img src='" + inst.options.skinsfolder + inst.options.closeimage + "'></div>");
                    inst.$close = $("#html5-close", inst.$lightbox)
                }
                if (inst.options.showsocial) {
                    var socialCode = '<div id="html5-social" style="display:none;' + inst.options.socialposition + '">';
                    var socialBtnCSS = "display:" + (inst.options.socialdirection == "horizontal" ? "inline-block" : "block") + ";margin:4px;";
                    var socialCSS = "display:table-cell;width:" + inst.options.socialbuttonsize + "px;height:" + inst.options.socialbuttonsize + "px;font-size:" + inst.options.socialbuttonfontsize + "px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";
                    if (inst.options.showfacebook) socialCode += '<div class="html5-social-btn' + (inst.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-facebook" style="' + socialBtnCSS + '"><div class="icon-facebook" style="' + socialCSS + 'background-color:#3b5998;"></div></div>';
                    if (inst.options.showtwitter) socialCode += '<div class="html5-social-btn' + (inst.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-twitter" style="' + socialBtnCSS + '"><div class="icon-twitter" style="' + socialCSS + 'background-color:#03b3ee;"></div></div>';
                    if (inst.options.showpinterest) socialCode += '<div class="html5-social-btn' + (inst.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-pinterest" style="' + socialBtnCSS + '"><div class="icon-pinterest" style="' + socialCSS + 'background-color:#c92228;"></div></div>';
                    socialCode += "</div>";
                    inst.$lightboxBox.append(socialCode);
                    $(".html5-social-btn", inst.$lightbox).click(function () {
                        var shareUrl = window.location.href + (window.location.href.indexOf("?") < 0 ? "?" : "&") + "html5lightboxshare=" + encodeURIComponent(inst.currentElem[ELEM_HREF]);
                        var shareTitle = inst.currentElem[ELEM_TITLE];
                        var shareMedia = inst.currentElem[ELEM_HREF];
                        if (inst.currentElem[ELEM_TYPE] == 0) shareMedia = inst.absoluteUrl(inst.currentElem[ELEM_HREF]); else if (inst.currentElem[ELEM_TYPE] == 3) shareMedia = "https://img.youtube.com/vi/" + inst.getYoutubeId(inst.currentElem[ELEM_HREF]) + "/0.jpg"; else {
                            var lightboxLink = $('.html5lightbox[href="' + inst.currentElem[ELEM_HREF] + '"]');
                            if (lightboxLink.length > 0) if (lightboxLink.data("shareimage") && lightboxLink.data("shareimage").length > 0) shareMedia = inst.absoluteUrl(lightboxLink.data("shareimage")); else if (lightboxLink.data("thumbnail") && lightboxLink.data("thumbnail").length > 0) shareMedia = inst.absoluteUrl(lightboxLink.data("thumbnail")); else {
                                var lightboxImg = $("img", lightboxLink);
                                if (lightboxImg.length > 0) shareMedia = inst.absoluteUrl(lightboxImg.attr("src"))
                            }
                        }
                        var isVideo = inst.currentElem[ELEM_TYPE] == 2 || inst.currentElem[ELEM_TYPE] == 3 || inst.currentElem[ELEM_TYPE] == 4 || inst.currentElem[ELEM_TYPE] == 8 || inst.currentElem[ELEM_TYPE] == 9 || inst.currentElem[ELEM_TYPE] == 11;
                        if ($(this).hasClass("html5-social-facebook")) window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl) + "&t=" + encodeURIComponent(shareTitle), "_blank"); else if ($(this).hasClass("html5-social-twitter")) window.open("https://twitter.com/share?url=" + encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(shareTitle), "_blank"); else if ($(this).hasClass("html5-social-pinterest")) window.open("https://pinterest.com/pin/create/bookmarklet/?media=" + encodeURIComponent(shareMedia) + "&url=" + encodeURIComponent(shareUrl) + "&description=" + encodeURIComponent(shareTitle) + "&is_video=" + (isVideo ? "true" : "false"), "_blank");
                        return !1
                    })
                }
                inst.$watermark = $("#html5-watermark", inst.$lightbox);
                if (inst.options.stamp) inst.$watermark.html("<a href='" + inst.options.freelink + "' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>" + inst.options.freemark + "</div></div></a>"); else if (inst.options.watermark) {
                    var html = "<img src='" + inst.options.watermark + "' style='border:none;' />";
                    if (inst.options.watermarklink) html = "<a href='" + inst.options.watermarklink + "' target='_blank'>" + html + "</a>";
                    inst.$watermark.html(html)
                }
                if (inst.options.closeonoverlay) $("#html5-lightbox-overlay", inst.$lightbox).click(inst.finish);
                inst.$close.click(inst.finish);
                inst.$next.click(function () {
                    inst.nextArrowClicked()
                });
                inst.$prev.click(function () {
                    inst.prevArrowClicked()
                });
                $(window).resize(function () {
                    clearTimeout(inst.options.resizeTimeout);
                    inst.options.resizeTimeout = setTimeout(function () {
                        inst.resizeWindow()
                    }, 500)
                });
                $(window).scroll(function () {
                    inst.scrollBox()
                });
                $(window).bind("orientationchange", function (e) {
                    if (inst.options.isMobile) inst.resizeWindow()
                });
                if (inst.options.isIPhone) {
                    inst.options.windowInnerHeight = window.innerHeight;
                    setInterval(function () {
                        if (inst.options.windowInnerHeight != window.innerHeight) {
                            inst.options.windowInnerHeight = window.innerHeight;
                            inst.resizeWindow()
                        }
                    }, 500)
                }
                if (inst.options.enabletouchswipe) inst.enableSwipe()
            };
            inst.slideTimer = function (interval, callback, updatecallback) {
                var timerInstance = this;
                timerInstance.timeout = interval;
                var updateinterval = 50;
                var updateTimerId = null;
                var runningTime = 0;
                var paused = !1;
                var started = !1;
                var startedandpaused = !1;
                this.pause = function () {
                    if (started) {
                        paused = !0;
                        clearInterval(updateTimerId)
                    }
                };
                this.resume = function (forceresume) {
                    if (startedandpaused && !forceresume) return;
                    startedandpaused = !1;
                    if (started && paused) {
                        paused = !1;
                        updateTimerId = setInterval(function () {
                            runningTime += updateinterval;
                            if (runningTime > timerInstance.timeout) {
                                clearInterval(updateTimerId);
                                if (callback) callback()
                            }
                            if (updatecallback) updatecallback(runningTime / timerInstance.timeout)
                        }, updateinterval)
                    }
                };
                this.stop = function () {
                    clearInterval(updateTimerId);
                    if (updatecallback) updatecallback(-1);
                    runningTime = 0;
                    paused = !1;
                    started = !1
                };
                this.start = function () {
                    runningTime = 0;
                    paused = !1;
                    started = !0;
                    updateTimerId = setInterval(function () {
                        runningTime += updateinterval;
                        if (runningTime > timerInstance.timeout) {
                            clearInterval(updateTimerId);
                            if (callback) callback()
                        }
                        if (updatecallback) updatecallback(runningTime / timerInstance.timeout)
                    }, updateinterval)
                };
                this.startandpause = function () {
                    runningTime = 0;
                    paused = !0;
                    started = !0;
                    startedandpaused = !0
                };
                return this
            };
            inst.updateTimer = function (percent) {
                var w = Math.round(percent * 100);
                if (w > 100) w = 100;
                if (w < 0) w = 0;
                $("#html5-timer", inst.$lightbox).css({display: "block", width: w + "%"})
            };
            inst.initSlide = function () {
                inst.autosliding = !1;
                inst.slideTimeout = inst.slideTimer(inst.options.slideinterval, function () {
                    inst.gotoSlide(-1)
                }, inst.options.showtimer ? function (percent) {
                    inst.updateTimer(percent)
                } : null);
                if (inst.options.autoslide) {
                    inst.slideTimeout.stop();
                    inst.autosliding = !0
                }
            };
            inst.nextArrowClicked = function () {
                if (inst.options.nextElem <= inst.options.curElem) if (inst.options.onlastarrowclicked && window[inst.options.onlastarrowclicked] && typeof window[inst.options.onlastarrowclicked] == "function") window[inst.options.onlastarrowclicked]();
                inst.gotoSlide(-1)
            };
            inst.prevArrowClicked = function () {
                if (inst.options.prevElem >= inst.options.curElem) if (inst.options.onfirstarrowclicked && window[inst.options.onfirstarrowclicked] && typeof window[inst.options.onfirstarrowclicked] == "function") window[inst.options.onfirstarrowclicked]();
                inst.gotoSlide(-2)
            };
            inst.calcNextPrevElem = function () {
                inst.options.nextElem = -1;
                inst.options.prevElem = -1;
                inst.options.inGroup = !1;
                inst.options.groupIndex = 0;
                inst.options.groupCount = 0;
                var group = inst.elemArray[inst.options.curElem][ELEM_GROUP];
                for (var i = 0; i < inst.elemArray.length; i++) if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP])) {
                    if (i == inst.options.curElem) inst.options.groupIndex = inst.options.groupCount;
                    inst.options.groupCount++
                }
                var j, curGroup = inst.elemArray[inst.options.curElem][ELEM_GROUP];
                if (curGroup != undefined && curGroup != null) {
                    for (j = inst.options.curElem + 1; j < inst.elemArray.length; j++) if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                        inst.options.nextElem = j;
                        break
                    }
                    if (inst.options.nextElem < 0) for (j = 0; j < inst.options.curElem; j++) if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                        inst.options.nextElem = j;
                        break
                    }
                    if (inst.options.nextElem >= 0) {
                        for (j = inst.options.curElem - 1; j >= 0; j--) if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                            inst.options.prevElem = j;
                            break
                        }
                        if (inst.options.prevElem < 0) for (j = inst.elemArray.length - 1; j > inst.options.curElem; j--) if (inst.matchGroup(curGroup, inst.elemArray[j][ELEM_GROUP])) {
                            inst.options.prevElem = j;
                            break
                        }
                    }
                }
                if (inst.options.nextElem >= 0 || inst.options.prevElem >= 0) inst.options.inGroup = !0
            };
            inst.calcBoxPosition = function (initW, initH) {
                var boxW = initW + 2 * inst.options.bordersize;
                var boxH = initH + 2 * inst.options.bordersize;
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                var boxT = Math.round((winH - inst.options.navheight) / 2 - boxH / 2);
                if (inst.options.titlestyle == "bottom") boxT -= Math.round(inst.options.barheight / 2);
                var topmargin = $(window).width() < inst.options.navarrowsbottomscreenwidth ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
                if (boxT < topmargin) boxT = topmargin;
                if (inst.options.insideiframe && window.self != window.top) if (parent.window.jQuery && parent.window.jQuery("#" + inst.options.iframeid).length) {
                    var iframetop = parent.window.jQuery("#" + inst.options.iframeid).offset().top;
                    var parentscroll = parent.window.document.body.scrollTop;
                    boxT = topmargin;
                    boxT += parentscroll > iframetop ? parentscroll - iframetop : 0
                }
                return [boxW, boxH, boxT]
            };
            inst.hideNavArrows = function () {
                var showPrev = !1;
                var showNext = !1;
                if (inst.options.inGroup) {
                    if (inst.options.arrowloop || !inst.options.arrowloop && inst.options.prevElem < inst.options.curElem) showPrev = !0;
                    if (inst.options.arrowloop || !inst.options.arrowloop && inst.options.prevElem < inst.options.curElem) showNext = !0
                }
                if (showPrev) {
                    inst.$prev.removeClass("html5-hide");
                    if (inst.$prevbottom) inst.$prevbottom.removeClass("html5-hide");
                    if (inst.$prevtouch) inst.$prevtouch.removeClass("html5-hide")
                } else {
                    inst.$prev.addClass("html5-hide");
                    if (inst.$prevbottom) inst.$prevbottom.addClass("html5-hide");
                    if (inst.$prevtouch) inst.$prevtouch.addClass("html5-hide")
                }
                if (showNext) {
                    inst.$next.removeClass("html5-hide");
                    if (inst.$nextbottom) inst.$nextbottom.removeClass("html5-hide");
                    if (inst.$nexttouch) inst.$nexttouch.removeClass("html5-hide")
                } else {
                    inst.$next.addClass("html5-hide");
                    if (inst.$nextbottom) inst.$nextbottom.addClass("html5-hide");
                    if (inst.$nexttouch) inst.$nexttouch.addClass("html5-hide")
                }
            };
            inst.clickHandler = function () {
                var $this = $(this);
                var dataoptions = {};
                $.each($this.data(), function (key, value) {
                    dataoptions[key.toLowerCase()] = value
                });
                inst.options = $.extend(inst.options, inst.defaultoptions, dataoptions);
                $(window).trigger("html5lightbox.lightboxshow");
                inst.init();
                if (inst.elemArray.length <= 0) return !0;
                inst.hideObjects();
                for (var i = 0; i < inst.elemArray.length; i++) if (inst.elemArray[i][ELEM_HREF] == $this.attr("href")) break;
                if (i == inst.elemArray.length) return !0;
                inst.options.curElem = i;
                inst.calcNextPrevElem();
                inst.reset();
                inst.$lightbox.show();
                var boxPos = inst.calcBoxPosition(inst.options.loadingwidth, inst.options.loadingheight);
                var boxW = boxPos[0];
                var boxH = boxPos[1];
                var boxT = boxPos[2];
                if (inst.options.iequirksmode) inst.$lightboxBox.css({"top": boxT}); else inst.$lightboxBox.css({"margin-top": boxT});
                if (!inst.options.positionFixed) inst.$lightboxBox.css("margin-top", $(window).scrollTop() + inst.options.bordertopmargin);
                if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                    "width": boxW,
                    "height": boxH
                }); else {
                    inst.$lightboxBox.css({"width": boxW, "height": "auto"});
                    inst.$elemWrap.css({"width": boxW, "height": boxH})
                }
                inst.loadCurElem();
                return !1
            };
            inst.loadThumbnail = function (src, index) {
                var imgLoader = new Image;
                $(imgLoader).load(function () {
                    var style;
                    if (this.width / this.height <= inst.options.thumbwidth / inst.options.thumbheight) style = "width:100%;"; else style = "height:100%;";
                    $(".html5-nav-thumb").eq(index).html("<img style='" + style + "' src='" + src + "' />")
                });
                imgLoader.src = src
            };
            inst.matchGroup = function (curGroup, elemGroup) {
                if (!curGroup || !elemGroup) return !1;
                var curs = curGroup.split(":");
                var elems = elemGroup.split(":");
                var result = !1;
                for (var i in curs) if ($.inArray(curs[i], elems) > -1) {
                    result = !0;
                    break
                }
                return result
            };
            inst.showNavigation = function () {
                if (!inst.options.shownavigation) return;
                if (!inst.currentElem || !inst.currentElem[ELEM_GROUP]) return;
                var i;
                var showNav = !1;
                var group = inst.currentElem[ELEM_GROUP];
                for (i = 0; i < inst.elemArray.length; i++) if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP])) if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                    showNav = !0;
                    break
                }
                if (!showNav) return;
                inst.options.navheight = inst.options.thumbheight + inst.options.thumbtopmargin + inst.options.thumbbottommargin;
                if ($(".html5-nav").length > 0) return;
                $("body").append("<div class='html5-nav' style='display:block;position:fixed;bottom:0;left:0;width:100%;height:" + inst.options.navheight + "px;z-index:9999999;'>" + "<div class='html5-nav-container' style='position:relative;margin:" + inst.options.thumbtopmargin + "px auto " + inst.options.thumbbottommargin + "px;'>" + "<div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" + inst.options.navbuttonwidth + 'px;height:100%;left:0;top:0;background:url("' + inst.options.skinsfolder + inst.options.navarrowsprevimage + "\") no-repeat left center;'></div>" + "<div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'>" + "<div class='html5-nav-list'></div>" + "</div>" + "<div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" + inst.options.navbuttonwidth + 'px;height:100%;right:0;top:0;background:url("' + inst.options.skinsfolder + inst.options.navarrowsnextimage + "\") no-repeat right center;'></div>" + "</div>" + "</div>");
                var index = 0;
                for (i = 0; i < inst.elemArray.length; i++) if (inst.matchGroup(group, inst.elemArray[i][ELEM_GROUP])) if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                    $(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='" + i + "' style='float:left;overflow:hidden;cursor:pointer;opacity:" + inst.options.thumbopacity + ";margin: 0 " + inst.options.thumbgap / 2 + "px;width:" + inst.options.thumbwidth + "px;height:" + inst.options.thumbheight + "px;border:" + inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor + ";'></div>");
                    this.loadThumbnail(inst.elemArray[i][ELEM_THUMBNAIL], index);
                    index++
                }
                $(".html5-nav-thumb").hover(function () {
                    $(this).css({opacity: 1});
                    $(this).css({border: inst.options.thumbborder + "px solid " + inst.options.thumbhighlightbordercolor})
                }, function () {
                    $(this).css({opacity: inst.options.thumbopacity});
                    $(this).css({border: inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor})
                });
                $(".html5-nav-thumb").click(function () {
                    var index = $(this).data("arrayindex");
                    if (index >= 0) inst.gotoSlide(index)
                });
                inst.options.totalwidth = index * (inst.options.thumbgap + inst.options.thumbwidth + 2 * inst.options.thumbborder);
                $(".html5-nav-list").css({
                    display: "block",
                    position: "relative",
                    "margin-left": 0,
                    width: inst.options.totalwidth + "px"
                }).append("<div style='clear:both;'></div>");
                var $navMask = $(".html5-nav-mask");
                var $navPrev = $(".html5-nav-prev");
                var $navNext = $(".html5-nav-next");
                $navPrev.click(function () {
                    var $navList = $(".html5-nav-list");
                    var $navNext = $(".html5-nav-next");
                    var winWidth = $(window).width();
                    var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                    var marginLeft = parseInt($navList.css("margin-left")) + maskWidth;
                    if (marginLeft >= 0) {
                        marginLeft = 0;
                        $(this).css({"background-position": "center left"})
                    } else $(this).css({"background-position": "center right"});
                    if (marginLeft <= maskWidth - inst.options.totalwidth) $navNext.css({"background-position": "center left"}); else $navNext.css({"background-position": "center right"});
                    $navList.animate({"margin-left": marginLeft})
                });
                $navNext.click(function () {
                    var $navList = $(".html5-nav-list");
                    var $navPrev = $(".html5-nav-prev");
                    var winWidth = $(window).width();
                    var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                    var marginLeft = parseInt($navList.css("margin-left")) - maskWidth;
                    if (marginLeft <= maskWidth - inst.options.totalwidth) {
                        marginLeft = maskWidth - inst.options.totalwidth;
                        $(this).css({"background-position": "center left"})
                    } else $(this).css({"background-position": "center right"});
                    if (marginLeft >= 0) $navPrev.css({"background-position": "center left"}); else $navPrev.css({"background-position": "center right"});
                    $navList.animate({"margin-left": marginLeft})
                });
                var winWidth = $(window).width();
                if (inst.options.totalwidth <= winWidth) {
                    $navMask.css({width: inst.options.totalwidth + "px"});
                    $navPrev.hide();
                    $navNext.hide()
                } else {
                    $navMask.css({width: winWidth - 2 * inst.options.navbuttonwidth + "px"});
                    $navPrev.show();
                    $navNext.show()
                }
            };
            inst.loadElem = function (elem) {
                inst.currentElem = elem;
                inst.showing = !0;
                inst.showNavigation();
                inst.$elem.unbind("mouseenter").unbind("mouseleave").unbind("mousemove");
                inst.$loading.show();
                if (inst.options.onshowitem && window[inst.options.onshowitem] && typeof window[inst.options.onshowitem] == "function") window[inst.options.onshowitem](elem);
                switch (elem[ELEM_TYPE]) {
                    case 0:
                        var imgLoader = new Image;
                        $(imgLoader).load(function () {
                            inst.showImage(elem, imgLoader.width, imgLoader.height)
                        });
                        $(imgLoader).error(function () {
                            inst.showError()
                        });
                        imgLoader.src = elem[ELEM_HREF];
                        break;
                    case 1:
                        inst.showSWF(elem);
                        break;
                    case 2:
                    case 8:
                        inst.showVideo(elem);
                        break;
                    case 3:
                    case 4:
                    case 9:
                    case 11:
                        inst.showYoutubeVimeo(elem);
                        break;
                    case 5:
                        inst.showPDF(elem);
                        break;
                    case 6:
                        inst.showMP3(elem);
                        break;
                    case 7:
                        inst.showWeb(elem);
                        break;
                    case 10:
                        inst.showDiv(elem);
                        break
                }
                if (inst.options.googleanalyticsaccount && window._gaq) window._gaq.push(["_trackEvent", "Lightbox", "Open", elem[ELEM_HREF]])
            };
            inst.loadCurElem = function () {
                inst.loadElem(inst.elemArray[inst.options.curElem])
            };
            inst.showError = function () {
                inst.$loading.hide();
                inst.resizeLightbox(inst.options.errorwidth, inst.options.errorheight, !0, function () {
                    inst.$error.show();
                    inst.$elem.fadeIn(inst.options.fadespeed, function () {
                        inst.showData()
                    })
                })
            };
            inst.calcTextWidth = function (objW) {
                return objW - 36
            };
            inst.showTitle = function (w, t, description) {
                if (inst.options.titlestyle == "inside") inst.$elemData.css({width: w + "px"});
                var text = "";
                if (inst.options.showtitle) if (t && t.length > 0) text += t;
                if (inst.options.inGroup) {
                    if (inst.options.showtitleprefix) text = inst.options.titleprefix.replace("%NUM", inst.options.groupIndex + 1).replace("%TOTAL", inst.options.groupCount) + " " + text;
                    if (inst.options.showplaybutton) text = "<div id='html5-playpause' style='display:inline-block;cursor:pointer;vertical-align:middle;'><div id='html5-play' style='display:block;'><img src='" + inst.options.skinsfolder + inst.options.playimage + "'></div><div id='html5-pause' style='display:none;'><img src='" + inst.options.skinsfolder + inst.options.pauseimage + "'></div></div> " + text
                }
                if (inst.options.showdescription && description && description.length > 0) text += '<p class="html5-description">' + description + "</p>";
                inst.$text.html(text);
                if (inst.options.inGroup && inst.options.showplaybutton) {
                    if (inst.autosliding) {
                        $("#html5-play", inst.$lightbox).hide();
                        $("#html5-pause", inst.$lightbox).show()
                    } else {
                        $("#html5-play", inst.$lightbox).show();
                        $("#html5-pause", inst.$lightbox).hide()
                    }
                    $("#html5-play", inst.$lightbox).click(function () {
                        $("#html5-play", inst.$lightbox).hide();
                        $("#html5-pause", inst.$lightbox).show();
                        if (inst.slideTimeout) {
                            inst.slideTimeout.stop();
                            inst.slideTimeout.start();
                            inst.autosliding = !0
                        }
                    });
                    $("#html5-pause", inst.$lightbox).click(function () {
                        $("#html5-play", inst.$lightbox).show();
                        $("#html5-pause", inst.$lightbox).hide();
                        if (inst.slideTimeout) {
                            inst.slideTimeout.stop();
                            inst.autosliding = !1
                        }
                    })
                }
                $("#html5-social", inst.$lightbox).show()
            }, inst.showImage = function (elem, imgW, imgH) {
                var elemW, elemH;
                if (elem[ELEM_WIDTH]) elemW = elem[ELEM_WIDTH]; else {
                    elemW = imgW;
                    elem[ELEM_WIDTH] = imgW
                }
                if (elem[ELEM_HEIGHT]) elemH = elem[ELEM_HEIGHT]; else {
                    elemH = imgH;
                    elem[ELEM_HEIGHT] = imgH
                }
                var sizeObj = inst.calcElemSize({w: elemW, h: elemH}, inst.options.imagekeepratio);
                inst.resizeLightbox(sizeObj.w, sizeObj.h, !0, function () {
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    var timercode = !inst.options.showtimer || !inst.options.inGroup ? "" : "<div id='html5-timer' style='display:none;position:absolute;" + inst.options.timerposition + ":0;left:0;width:0;height:" + inst.options.timerheight + "px;background-color:" + inst.options.timercolor + ";opacity:" + inst.options.timeropacity + ";'></div>";
                    inst.$image.show();
                    inst.$image.html("<div id='html5-image-container' style='display:block;position:relative;width:100%;height:100%;" + (inst.options.imagekeepratio ? "" : "overflow-x:auto;overflow-y:scroll;-ms-overflow-x:auto;-ms-overflow-y:scroll;") + "'><img src='" + elem[ELEM_HREF] + "' width='100%' height='" + (inst.options.imagekeepratio ? "100%" : "auto") + "' />" + timercode + "</div>");
                    inst.$elem.fadeIn(inst.options.fadespeed, function () {
                        inst.showData()
                    });
                    if (inst.autosliding) {
                        inst.slideTimeout.stop();
                        inst.slideTimeout.start()
                    }
                })
            };
            inst.showSWF = function (elem) {
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : DEFAULT_WIDTH;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : DEFAULT_HEIGHT;
                var sizeObj = inst.calcElemSize({w: dataW, h: dataH}, !0);
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, !0, function () {
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.html("<div id='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show();
                    inst.embedFlash($("#html5lightbox-swf"), elem[ELEM_HREF], "window", {width: dataW, height: dataH});
                    inst.$elem.show();
                    inst.showData();
                    if (inst.autosliding) {
                        inst.slideTimeout.stop();
                        inst.slideTimeout.start()
                    }
                })
            };
            inst.showVideo = function (elem) {
                inst.slideTimeout.stop();
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : DEFAULT_WIDTH;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : DEFAULT_HEIGHT;
                var sizeObj = inst.calcElemSize({w: dataW, h: dataH}, !0);
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, !0, function () {
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;background-color:" + inst.options.videobgcolor + ";'></div>").show();
                    var isHTML5 = !1;
                    if (inst.options.isIE678 || elem[ELEM_TYPE] == 8 || inst.options.isIE9 && inst.options.useflashonie9 || inst.options.isIE10 && inst.options.useflashonie10 || inst.options.isIE11 && inst.options.useflashonie11) isHTML5 = !1; else if (inst.options.isMobile) isHTML5 = !0; else if ((inst.options.html5player || !inst.options.flashInstalled) && inst.options.html5VideoSupported) if (!inst.options.isFirefox && !inst.options.isOpera || (inst.options.isFirefox || inst.options.isOpera) && (elem[ELEM_HREF_OGG] || elem[ELEM_HREF_WEBM])) isHTML5 = !0;
                    if (isHTML5) {
                        var videoSrc = elem[ELEM_HREF];
                        if (inst.options.isFirefox || inst.options.isOpera || !videoSrc) videoSrc = elem[ELEM_HREF_WEBM] ? elem[ELEM_HREF_WEBM] : elem[ELEM_HREF_OGG];
                        inst.embedHTML5Video($("#html5lightbox-video"), videoSrc, inst.options.autoplay, inst.options.loopvideo)
                    } else {
                        var videoFile = elem[ELEM_HREF];
                        if (videoFile.charAt(0) != "/" && videoFile.substring(0, 5) != "http:" && videoFile.substring(0, 6) != "https:") videoFile = inst.options.htmlfolder + videoFile;
                        inst.embedFlash($("#html5lightbox-video"), inst.options.jsfolder + "html5boxplayer.swf", "transparent", {
                            width: dataW,
                            height: dataH,
                            jsobjectname: "html5Lightbox",
                            hidecontrols: inst.options.videohidecontrols ? "1" : "0",
                            hideplaybutton: "0",
                            videofile: videoFile,
                            hdfile: "",
                            ishd: "0",
                            defaultvolume: inst.options.defaultvideovolume,
                            autoplay: inst.options.autoplay ? "1" : "0",
                            loop: inst.options.loopvideo ? "1" : "0",
                            errorcss: ".html5box-error" + inst.options.errorcss,
                            id: 0
                        })
                    }
                    inst.$elem.show();
                    inst.showData()
                })
            };
            inst.loadNext = function () {
                $(window).trigger("html5lightbox.videofinished");
                if (inst.autosliding) inst.gotoSlide(-1); else if (inst.options.autoclose) inst.finish()
            };
            inst.getYoutubeParams = function (href) {
                var result = {};
                if (href.indexOf("?") < 0) return result;
                var params = href.substring(href.indexOf("?") + 1).split("&");
                for (var i = 0; i < params.length; i++) {
                    var value = params[i].split("=");
                    if (value && value.length == 2 && value[0].toLowerCase() != "v") result[value[0].toLowerCase()] = value[1]
                }
                return result
            };
            inst.getYoutubeId = function (href) {
                var youtubeId = "";
                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/;
                var match = href.match(regExp);
                if (match && match[7] && match[7].length == 11) youtubeId = match[7];
                return youtubeId
            };
            inst.prepareYoutubeHref = function (href) {
                var youtubeId = inst.getYoutubeId(href);
                var protocol = "https:";
                var result = protocol + "//www.youtube.com/embed/" + youtubeId;
                var params = this.getYoutubeParams(href);
                var first = !0;
                for (var key in params) {
                    if (first) {
                        result += "?";
                        first = !1
                    } else result += "&";
                    result += key + "=" + params[key]
                }
                return result
            };
            inst.prepareDailymotionHref = function (href) {
                if (href.match(/\:\/\/.*(dai\.ly)/i)) {
                    var protocol = "https:";
                    var id = href.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
                    href = protocol + "//www.dailymotion.com/embed/video/" + id
                }
                return href
            };
            inst.showYoutubeVimeo = function (elem) {
                inst.slideTimeout.stop();
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : DEFAULT_WIDTH;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : DEFAULT_HEIGHT;
                var sizeObj = inst.calcElemSize({w: dataW, h: dataH}, !0);
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, !0, function () {
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;'></div>").show();
                    var href = elem[ELEM_HREF];
                    var youtubeid = "";
                    if (elem[ELEM_TYPE] == 3) {
                        youtubeid = inst.getYoutubeId(href);
                        href = inst.prepareYoutubeHref(href)
                    }
                    if (elem[ELEM_TYPE] == 9) href = inst.prepareDailymotionHref(href);
                    if (inst.options.autoplay) {
                        href += href.indexOf("?") < 0 ? "?" : "&";
                        if (elem[ELEM_TYPE] == 11) href += "autoPlay=true"; else href += "autoplay=1"
                    }
                    if (inst.options.loopvideo) {
                        href += href.indexOf("?") < 0 ? "?" : "&";
                        switch (elem[ELEM_TYPE]) {
                            case 3:
                                href += "loop=1&playlist=" + youtubeid;
                                break;
                            case 4:
                            case 9:
                                href += "loop=1";
                                break;
                            case 11:
                                href += "endVideoBehavior=loop";
                                break
                        }
                    }
                    if (elem[ELEM_TYPE] == 3) {
                        if (href.indexOf("?") < 0) href += "?wmode=transparent&rel=0"; else href += "&wmode=transparent&rel=0";
                        if (inst.options.videohidecontrols) href += "&controls=0&showinfo=0";
                        href += "&enablejsapi=1&origin=" + document.location.protocol + "//" + document.location.hostname
                    } else if (elem[ELEM_TYPE] == 4) {
                        href += href.indexOf("?") < 0 ? "?" : "&";
                        href += "api=1&player_id=html5boxiframevideo"
                    }
                    $("#html5lightbox-video").html("<iframe id='html5boxiframevideo' width='100%' height='100%' src='" + href + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                    inst.$elem.show();
                    inst.showData();
                    if (elem[ELEM_TYPE] == 3 && typeof YT === "object" && typeof YT.Player === "function") new YT.Player("html5boxiframevideo", {
                        events: {
                            "onStateChange": function (event) {
                                if (event.data == YT.PlayerState.ENDED) {
                                    $(window).trigger("html5lightbox.videofinished");
                                    if (inst.autosliding) inst.gotoSlide(-1); else if (inst.options.autoclose) inst.finish()
                                }
                            }
                        }
                    }); else if (elem[ELEM_TYPE] == 4 && typeof $f === "function") {
                        var vimeoIframe = $("#html5boxiframevideo")[0];
                        var vimeoPlayer = $f(vimeoIframe);
                        vimeoPlayer.addEvent("ready", function () {
                            vimeoPlayer.addEvent("finish", function (id) {
                                $(window).trigger("html5lightbox.videofinished");
                                if (inst.autosliding) inst.gotoSlide(-1); else if (inst.options.autoclose) inst.finish()
                            })
                        })
                    }
                })
            };
            inst.showPDF = function (elem) {
            };
            inst.showMP3 = function (elem) {
            };
            inst.showDiv = function (elem) {
                var winWidth = $(window).width();
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : winWidth;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : winH - inst.options.navheight;
                var sizeObj = inst.calcElemSize({w: dataW, h: dataH}, !1);
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, !0, function () {
                    inst.$loading.hide();
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.html("<div id='html5lightbox-div' style='display:block;width:100%;height:100%;" + (inst.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "overflow:auto;") + "'></div>").show();
                    var divID = elem[ELEM_HREF];
                    if ($(divID).length > 0) $("#html5lightbox-div").html($(divID).html()); else $("#html5lightbox-div").html("<div class='html5-error'>The specified div ID does not exist.</div>");
                    inst.$elem.show();
                    inst.showData();
                    if (inst.autosliding) {
                        inst.slideTimeout.stop();
                        inst.slideTimeout.start()
                    }
                })
            };
            inst.showWeb = function (elem) {
                var winWidth = $(window).width();
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : winWidth;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : winH - inst.options.navheight;
                var sizeObj = inst.calcElemSize({w: dataW, h: dataH}, !1);
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, !0, function () {
                    inst.$loading.hide();
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.html("<div id='html5lightbox-web' style='display:block;width:100%;height:100%;" + (inst.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "") + "'></div>").show();
                    $("#html5lightbox-web").html("<iframe id='html5lightbox-web-iframe' width='100%' height='100%' src='" + elem[ELEM_HREF] + "' frameborder='0'></iframe>");
                    inst.$elem.show();
                    inst.showData();
                    if (inst.autosliding) {
                        inst.slideTimeout.stop();
                        inst.slideTimeout.start()
                    }
                })
            };
            inst.scrollBox = function () {
            };
            inst.resizeWindow = function () {
                if (!inst.currentElem) return;
                if (!inst.options.responsive) return;
                var winWidth = $(window).width();
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                if (inst.options.responsivebarheight) {
                    if (winH <= inst.options.smallscreenheight) inst.options.barheight = inst.options.barheightonsmallheight; else inst.options.barheight = inst.options.barheightoriginal;
                    if (inst.options.titlestyle == "bottom" && inst.options.barautoheight != "auto") inst.$elemData.css({
                        height: inst.options.barheight + "px",
                        "max-height": inst.options.barheight + "px"
                    })
                }
                var elemW, elemH, keepratio;
                if (inst.currentElem[ELEM_TYPE] == 7 || inst.currentElem[ELEM_TYPE] == 10) {
                    elemW = inst.currentElem[ELEM_WIDTH] ? inst.currentElem[ELEM_WIDTH] : winWidth;
                    elemH = inst.currentElem[ELEM_HEIGHT] ? inst.currentElem[ELEM_HEIGHT] : winH - inst.options.navheight;
                    keepratio = !1
                } else {
                    elemW = inst.currentElem[ELEM_WIDTH] ? inst.currentElem[ELEM_WIDTH] : DEFAULT_WIDTH;
                    elemH = inst.currentElem[ELEM_HEIGHT] ? inst.currentElem[ELEM_HEIGHT] : DEFAULT_HEIGHT;
                    if (inst.currentElem[ELEM_TYPE] == 0) keepratio = inst.options.imagekeepratio; else keepratio = !0
                }
                var sizeObj = inst.calcElemSize({w: elemW, h: elemH}, keepratio);
                var boxPos = inst.calcBoxPosition(sizeObj.w, sizeObj.h);
                var boxW = boxPos[0];
                var boxH = boxPos[1];
                var boxT = boxPos[2];
                inst.$lightboxBox.css({"margin-top": boxT});
                if (!inst.options.positionFixed) inst.$lightboxBox.css("margin-top", $(window).scrollTop() + inst.options.bordertopmargin);
                if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                    "width": boxW,
                    "height": boxH
                }); else {
                    inst.$lightboxBox.css({"width": boxW, "height": "auto"});
                    inst.$elemWrap.css({"width": boxW, "height": boxH})
                }
                if (inst.options.titlestyle == "inside") inst.$elemData.css({width: sizeObj.w + "px"});
                if ($(".html5-nav").length <= 0) return;
                $(".html5-nav-list").css({"margin-left": 0});
                var $navMask = $(".html5-nav-mask");
                var $navPrev = $(".html5-nav-prev");
                var $navNext = $(".html5-nav-next");
                var winWidth = $(window).width();
                if (inst.options.totalwidth <= winWidth) {
                    $navMask.css({width: inst.options.totalwidth + "px"});
                    $navPrev.hide();
                    $navNext.hide()
                } else {
                    $navMask.css({width: winWidth - 2 * inst.options.navbuttonwidth + "px"});
                    $navPrev.show();
                    $navNext.show()
                }
            };
            inst.calcElemSize = function (sizeObj, keepratio) {
                if (!inst.options.responsive) return sizeObj;
                var winWidth = $(window).width();
                winWidth = winWidth ? winWidth : $(document).width();
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                winH = winH ? winH : $(document).height();
                if ((inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth > inst.options.sidetobottomscreenwidth) sizeObj.w = sizeObj.w * 100 / inst.options.imagepercentage;
                var topmargin = $(window).width() < inst.options.navarrowsbottomscreenwidth ? inst.options.bordertopmarginsmall : inst.options.bordertopmargin;
                var h0 = winH - inst.options.navheight - 2 * inst.options.bordersize - 2 * topmargin;
                if (inst.options.titlestyle == "bottom") h0 -= inst.options.barheight;
                if ((inst.options.titlestyle == "left" || inst.options.titlestyle == "right") && winWidth <= inst.options.sidetobottomscreenwidth || inst.options.notkeepratioonsmallheight && winH <= inst.options.smallscreenheight) keepratio = !1;
                if (sizeObj.h > h0) {
                    if (keepratio) sizeObj.w = Math.round(sizeObj.w * h0 / sizeObj.h);
                    sizeObj.h = h0
                }
                var w0 = winWidth - 2 * inst.options.bordersize - 2 * inst.options.bordermargin;
                if (inst.options.fullscreenmode && winWidth > inst.options.navarrowsbottomscreenwidth || (inst.options.isTouch && inst.options.navarrowsalwaysshowontouch || inst.options.alwaysshownavarrows) && winWidth > inst.options.navarrowsbottomscreenwidth) w0 -= 64;
                if (sizeObj.w > w0) {
                    if (keepratio) sizeObj.h = Math.round(sizeObj.h * w0 / sizeObj.w);
                    sizeObj.w = w0
                }
                return sizeObj
            };
            inst.showData = function () {
                if (inst.$text.text().length > 0) inst.$elemData.show();
                if (inst.options.titlestyle == "bottom" || inst.options.titlestyle == "inside") inst.$lightboxBox.css({height: "auto"});
                if (inst.$text.text().length > 0 && inst.options.titlestyle == "bottom") inst.$elemData.css({"max-height": inst.options.barheight + "px"});
                $("#html5-lightbox-overlay", inst.$lightbox).css({height: Math.max($(window).height(), $(document).height())});
                $(window).trigger("html5lightbox.lightboxopened")
            };
            inst.resizeLightbox = function (elemW, elemH, bAnimate, onFinish) {
                inst.hideNavArrows();
                var boxPos = inst.calcBoxPosition(elemW, elemH);
                var boxW = boxPos[0];
                var boxH = boxPos[1];
                var boxT = boxPos[2];
                inst.$loading.hide();
                inst.$watermark.hide();
                if (inst.options.nextElem <= inst.options.curElem) if (inst.options.onlastitem && window[inst.options.onlastitem] && typeof window[inst.options.onlastitem] == "function") window[inst.options.onlastitem](inst.currentElem);
                if (inst.options.prevElem >= inst.options.curElem) if (inst.options.onfirstitem && window[inst.options.onfirstitem] && typeof window[inst.options.onfirstitem] == "function") window[inst.options.onfirstitem](inst.currentElem);
                if (!inst.options.fullscreenmode && (!inst.options.isTouch || !inst.options.navarrowsalwaysshowontouch) && !inst.options.alwaysshownavarrows) {
                    inst.$elem.bind("mouseenter mousemove", function () {
                        if (inst.options.arrowloop && inst.options.prevElem >= 0 || !inst.options.arrowloop && inst.options.prevElem >= 0 && inst.options.prevElem < inst.options.curElem) inst.$prev.fadeIn();
                        if (inst.options.arrowloop && inst.options.nextElem >= 0 || !inst.options.arrowloop && inst.options.nextElem >= 0 && inst.options.nextElem > inst.options.curElem) inst.$next.fadeIn()
                    });
                    inst.$elem.bind("mouseleave", function () {
                        inst.$next.fadeOut();
                        inst.$prev.fadeOut()
                    })
                }
                inst.$lightboxBox.css({"margin-top": boxT});
                if (!inst.options.positionFixed) inst.$lightboxBox.css("margin-top", $(window).scrollTop() + inst.options.bordertopmargin);
                if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") {
                    var speed = bAnimate ? inst.options.resizespeed : 0;
                    if (boxW == inst.$lightboxBox.width() && boxH == inst.$lightboxBox.height()) speed = 0;
                    inst.$lightboxBox.animate({width: boxW}, speed).animate({height: boxH}, speed, function () {
                        inst.onAnimateFinish(onFinish)
                    })
                } else {
                    var speed = bAnimate ? inst.options.resizespeed : 0;
                    if (boxW == inst.$elemWrap.width() && boxH == inst.$elemWrap.height()) speed = 0;
                    inst.$lightboxBox.css({"width": boxW, "height": "auto"});
                    inst.$elemWrap.animate({width: boxW}, speed).animate({height: boxH}, speed, function () {
                        inst.onAnimateFinish(onFinish)
                    })
                }
            };
            inst.onAnimateFinish = function (onFinish) {
                inst.$loading.show();
                inst.$watermark.show();
                inst.$close.show();
                inst.$elem.css({"background-color": inst.options.bgcolor});
                onFinish()
            };
            inst.reset = function () {
                if (inst.options.stamp) inst.$watermark.hide();
                inst.showing = !1;
                inst.$image.empty();
                inst.$text.empty();
                inst.$error.hide();
                inst.$loading.hide();
                inst.$image.hide();
                if (inst.options.titlestyle == "bottom" || inst.options.titlestyle == "inside") inst.$elemData.hide();
                if (!inst.options.fullscreenmode) inst.$close.hide();
                inst.$elem.css({"background-color": ""})
            };
            inst.resetNavigation = function () {
                inst.options.navheight = 0;
                $(".html5-nav").remove()
            };
            inst.finish = function () {
                if ($("#html5-lightbox-video", inst.$lightbox).length) $("#html5-lightbox-video", inst.$lightbox).attr("src", "");
                $("head").find("style").each(function () {
                    if ($(this).data("creator") == "html5box-html5-lightbox") $(this).remove()
                });
                inst.slideTimeout.stop();
                inst.reset();
                inst.resetNavigation();
                inst.$lightbox.remove();
                $("#html5box-html5-lightbox").remove();
                inst.showObjects();
                if (inst.options.oncloselightbox && window[inst.options.oncloselightbox] && typeof window[inst.options.oncloselightbox] == "function") window[inst.options.oncloselightbox](inst.currentElem);
                if (inst.onLightboxClosed && typeof inst.onLightboxClosed == "function") inst.onLightboxClosed(inst.currentElem)
            };
            inst.pauseSlide = function () {
            };
            inst.playSlide = function () {
            };
            inst.gotoSlide = function (slide) {
                if (slide == -1) {
                    if (inst.options.nextElem < 0) return;
                    inst.options.curElem = inst.options.nextElem
                } else if (slide == -2) {
                    if (inst.options.prevElem < 0) return;
                    inst.options.curElem = inst.options.prevElem
                } else if (slide >= 0) inst.options.curElem = slide;
                if (inst.autosliding) inst.slideTimeout.stop();
                inst.calcNextPrevElem();
                inst.reset();
                inst.loadCurElem()
            };
            inst.enableSwipe = function () {
                inst.$elem.html5lightboxTouchSwipe({
                    preventWebBrowser: !1, swipeLeft: function () {
                        inst.gotoSlide(-1)
                    }, swipeRight: function () {
                        inst.gotoSlide(-2)
                    }
                })
            };
            inst.hideObjects = function () {
                $("select, embed, object").css({"visibility": "hidden"})
            };
            inst.showObjects = function () {
                $("select, embed, object").css({"visibility": "visible"})
            };
            inst.embedHTML5Video = function ($container, src, autoplay, loopvideo) {
                $container.html("<div style='display:block;width:100%;height:100%;position:relative;'><video id='html5-lightbox-video' width='100%' height='100%'" + (inst.options.html5videoposter && inst.options.html5videoposter.length > 0 ? "poster='" + inst.options.html5videoposter + "'" : "") + (autoplay ? " autoplay" : "") + (loopvideo ? " loop" : "") + (inst.options.nativehtml5controls && !inst.options.videohidecontrols ? " controls='controls'" : "") + " src='" + src + "'></div>");
                if (!inst.options.nativehtml5controls) {
                    $("video", $container).data("src", src);
                    $("video", $container).lightboxHTML5VideoControls(inst.options.skinsfolder, inst, inst.options.videohidecontrols, !1, inst.options.defaultvideovolume)
                }
                $("video", $container).unbind("ended").bind("ended", function () {
                    $(window).trigger("html5lightbox.videofinished");
                    if (inst.autosliding) inst.gotoSlide(-1); else if (inst.options.autoclose) inst.finish()
                })
            };
            inst.embedFlash = function ($container, src, wmode, flashVars) {
                if (inst.options.flashInstalled) {
                    var htmlOptions = {
                        pluginspage: "http://www.adobe.com/go/getflashplayer",
                        quality: "high",
                        allowFullScreen: "true",
                        allowScriptAccess: "always",
                        type: "application/x-shockwave-flash"
                    };
                    htmlOptions.width = "100%";
                    htmlOptions.height = "100%";
                    htmlOptions.src = src;
                    htmlOptions.flashVars = $.param(flashVars);
                    htmlOptions.wmode = wmode;
                    var htmlString = "";
                    for (var key in htmlOptions) htmlString += key + "=" + htmlOptions[key] + " ";
                    $container.html("<embed " + htmlString + "/>")
                } else $container.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
            };
            inst.checkType = function (href) {
                if (!href) return -1;
                if (href.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)) return 0;
                if (href.match(/[^\.]\.(swf)\s*$/i)) return 1;
                if (href.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i)) return 2;
                if (href.match(/\:\/\/.*(youtube\.com)/i) || href.match(/\:\/\/.*(youtu\.be)/i)) return 3;
                if (href.match(/\:\/\/.*(vimeo\.com)/i)) return 4;
                if (href.match(/\:\/\/.*(dailymotion\.com)/i) || href.match(/\:\/\/.*(dai\.ly)/i)) return 9;
                if (href.match(/[^\.]\.(pdf)\s*$/i)) return 5;
                if (href.match(/[^\.]\.(mp3)\s*$/i)) return 6;
                if (href.match(/[^\.]\.(flv)\s*$/i)) return 8;
                if (href.match(/\#\w+/i)) return 10;
                if (href.match(/\:\/\/.*(wistia)/i)) return 11;
                return 7
            };
            inst.getURLParams = function () {
                var result = {};
                var params = window.location.search.substring(1).split("&");
                for (var i = 0; i < params.length; i++) {
                    var value = params[i].split("=");
                    if (value && value.length == 2) result[value[0].toLowerCase()] = unescape(value[1])
                }
                return result
            };
            inst.absoluteUrl = function (href) {
                var link = document.createElement("a");
                link.href = href;
                return link.protocol + "//" + link.host + link.pathname + link.search + link.hash
            };
            inst.showLightbox = function (type, href, title, width, height, webm, ogg, thumbnail, description) {
                inst.options = $.extend(inst.options, inst.defaultoptions);
                $(window).trigger("html5lightbox.lightboxshow");
                inst.init();
                inst.reset();
                inst.$lightbox.show();
                var boxPos = inst.calcBoxPosition(inst.options.loadingwidth, inst.options.loadingheight);
                var boxW = boxPos[0];
                var boxH = boxPos[1];
                var boxT = boxPos[2];
                inst.$lightboxBox.css({"margin-top": boxT});
                if (!inst.options.positionFixed) inst.$lightboxBox.css("margin-top", $(window).scrollTop() + inst.options.bordertopmargin);
                if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                    "width": boxW,
                    "height": boxH
                }); else {
                    inst.$lightboxBox.css({"width": boxW, "height": "auto"});
                    inst.$elemWrap.css({"width": boxW, "height": boxH})
                }
                inst.loadElem(new Array(type, href, title, null, width, height, webm, ogg, thumbnail, description))
            };
            inst.addItem = function (href, title, group, width, height, webm, ogg, thumbnail, description, mediatype) {
                type = mediatype && mediatype >= 0 ? mediatype : inst.checkType(href);
                inst.elemArray.push(new Array(type, href, title, group, width, height, webm, ogg, thumbnail, description))
            };
            inst.showItem = function (href) {
                inst.options = $.extend(inst.options, inst.defaultoptions);
                $(window).trigger("html5lightbox.lightboxshow");
                inst.init();
                if (inst.elemArray.length <= 0) return !0;
                inst.hideObjects();
                for (var i = 0; i < inst.elemArray.length; i++) if (inst.elemArray[i][ELEM_HREF] == href) break;
                if (i == inst.elemArray.length) return !0;
                inst.options.curElem = i;
                inst.calcNextPrevElem();
                inst.reset();
                inst.$lightbox.show();
                var boxPos = inst.calcBoxPosition(inst.options.loadingwidth, inst.options.loadingheight);
                var boxW = boxPos[0];
                var boxH = boxPos[1];
                var boxT = boxPos[2];
                inst.$lightboxBox.css({"margin-top": boxT});
                if (!inst.options.positionFixed) inst.$lightboxBox.css("margin-top", $(window).scrollTop() + inst.options.bordertopmargin);
                if (inst.options.titlestyle == "left" || inst.options.titlestyle == "right") inst.$lightboxBox.css({
                    "width": boxW,
                    "height": boxH
                }); else {
                    inst.$lightboxBox.css({"width": boxW, "height": "auto"});
                    inst.$elemWrap.css({"width": boxW, "height": boxH})
                }
                inst.loadCurElem();
                return !1
            };
            inst.unbind("click").click(inst.clickHandler);
            inst.each(function () {
                var self = $(this);
                if (self.data("autoopen")) {
                    setTimeout(function () {
                        self.click()
                    }, self.data("autoopendelay") ? self.data("autoopendelay") : 0);
                    return !1
                }
            });
            var urlParams = inst.getURLParams();
            if ("html5lightboxshare" in urlParams) {
                var shareUrl = decodeURIComponent(urlParams.html5lightboxshare);
                var shareLink = $('.html5lightbox[href="' + shareUrl + '"]');
                if (shareLink.length > 0) shareLink.click()
            }
            return inst
        }
    })(jQuery);
    (function ($) {
        $.fn.html5lightboxTouchSwipe = function (options) {
            var defaults = {
                preventWebBrowser: !1,
                swipeLeft: null,
                swipeRight: null,
                swipeTop: null,
                swipeBottom: null
            };
            if (options) $.extend(defaults, options);
            return this.each(function () {
                var startX = -1, startY = -1;
                var curX = -1, curY = -1;

                function touchStart(event) {
                    var e = event.originalEvent;
                    if (e.targetTouches.length >= 1) {
                        startX = e.targetTouches[0].pageX;
                        startY = e.targetTouches[0].pageY
                    } else touchCancel(event)
                }

                function touchMove(event) {
                    if (defaults.preventWebBrowser) event.preventDefault();
                    var e = event.originalEvent;
                    if (e.targetTouches.length >= 1) {
                        curX = e.targetTouches[0].pageX;
                        curY = e.targetTouches[0].pageY
                    } else touchCancel(event)
                }

                function touchEnd(event) {
                    if (curX > 0 || curY > 0) {
                        triggerHandler();
                        touchCancel(event)
                    } else touchCancel(event)
                }

                function touchCancel(event) {
                    startX = -1;
                    startY = -1;
                    curX = -1;
                    curY = -1
                }

                function triggerHandler() {
                    if (Math.abs(curX - startX) > Math.abs(curY - startY)) if (curX > startX) {
                        if (defaults.swipeRight) defaults.swipeRight.call()
                    } else {
                        if (defaults.swipeLeft) defaults.swipeLeft.call()
                    } else if (curY > startY) {
                        if (defaults.swipeBottom) defaults.swipeBottom.call()
                    } else if (defaults.swipeTop) defaults.swipeTop.call()
                }

                try {
                    $(this).bind("touchstart", touchStart);
                    $(this).bind("touchmove", touchMove);
                    $(this).bind("touchend", touchEnd);
                    $(this).bind("touchcancel", touchCancel)
                } catch (e) {
                }
            })
        }
    })(jQuery);
    (function ($) {
        $.fn.lightboxHTML5VideoControls = function (skinFolder, parentInst, hidecontrols, hideplaybutton, defaultvolume) {
            var isTouch = "ontouchstart" in window;
            var eStart = isTouch ? "touchstart" : "mousedown";
            var eMove = isTouch ? "touchmove" : "mousemove";
            var eCancel = isTouch ? "touchcancel" : "mouseup";
            var eClick = "click";
            var BUTTON_SIZE = 32;
            var BAR_HEIGHT = isTouch ? 48 : 36;
            var hideControlsTimerId = null;
            var hideVolumeBarTimeoutId = null;
            var sliderDragging = !1;
            var isFullscreen = !1;
            var userActive = !0;
            var isIPhone = navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;
            var isHd = $(this).data("ishd");
            var hd = $(this).data("hd");
            var src = $(this).data("src");
            var $videoObj = $(this);
            $videoObj.get(0).removeAttribute("controls");
            if (isIPhone) {
                var h = $videoObj.height() - BAR_HEIGHT;
                $videoObj.css({height: h})
            }
            var $videoPlay = $("<div class='html5boxVideoPlay'></div>");
            if (!isIPhone) {
                $videoObj.after($videoPlay);
                $videoPlay.css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    display: "block",
                    cursor: "pointer",
                    width: 64,
                    height: 64,
                    "margin-left": -32,
                    "margin-top": -32,
                    "background-image": "url('" + skinFolder + "html5boxplayer_playvideo.png" + "')",
                    "background-position": "center center",
                    "background-repeat": "no-repeat"
                }).bind(eClick, function () {
                    $videoObj.get(0).play()
                })
            }
            var $videoFullscreenBg = $("<div class='html5boxVideoFullscreenBg'></div>");
            var $videoControls = $("<div class='html5boxVideoControls'>" + "<div class='html5boxVideoControlsBg'></div>" + "<div class='html5boxPlayPause'>" + "<div class='html5boxPlay'></div>" + "<div class='html5boxPause'></div>" + "</div>" + "<div class='html5boxTimeCurrent'>--:--</div>" + "<div class='html5boxFullscreen'></div>" + "<div class='html5boxHD'></div>" + "<div class='html5boxVolume'>" + "<div class='html5boxVolumeButton'></div>" + "<div class='html5boxVolumeBar'>" + "<div class='html5boxVolumeBarBg'>" + "<div class='html5boxVolumeBarActive'></div>" + "</div>" + "</div>" + "</div>" + "<div class='html5boxTimeTotal'>--:--</div>" + "<div class='html5boxSeeker'>" + "<div class='html5boxSeekerBuffer'></div>" + "<div class='html5boxSeekerPlay'></div>" + "<div class='html5boxSeekerHandler'></div>" + "</div>" + "<div style='clear:both;'></div>" + "</div>");
            $videoObj.after($videoControls);
            $videoObj.after($videoFullscreenBg);
            $videoFullscreenBg.css({
                display: "none",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                "z-index": 2147483647
            });
            $videoControls.css({
                display: "block",
                position: "absolute",
                width: "100%",
                height: BAR_HEIGHT,
                left: 0,
                bottom: 0,
                right: 0,
                "max-width": "640px",
                margin: "0 auto"
            });
            var userActivate = function () {
                userActive = !0
            };
            $videoObj.bind(eClick, function () {
                userActive = !0
            }).hover(function () {
                userActive = !0
            }, function () {
                userActive = !1
            });
            if (!hidecontrols) setInterval(function () {
                if (userActive) {
                    $videoControls.show();
                    userActive = !1;
                    clearTimeout(hideControlsTimerId);
                    hideControlsTimerId = setTimeout(function () {
                        if (!$videoObj.get(0).paused) $videoControls.fadeOut()
                    }, 5E3)
                }
            }, 250);
            $(".html5boxVideoControlsBg", $videoControls).css({
                display: "block",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                "background-color": "#000000",
                opacity: 0.7,
                filter: "alpha(opacity=70)"
            });
            $(".html5boxPlayPause", $videoControls).css({
                display: "block",
                position: "relative",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                "float": "left"
            });
            var $videoBtnPlay = $(".html5boxPlay", $videoControls);
            var $videoBtnPause = $(".html5boxPause", $videoControls);
            $videoBtnPlay.css({
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                cursor: "pointer",
                "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
                "background-position": "top left"
            }).hover(function () {
                $(this).css({"background-position": "bottom left"})
            }, function () {
                $(this).css({"background-position": "top left"})
            }).bind(eClick, function () {
                $videoObj.get(0).play()
            });
            $videoBtnPause.css({
                display: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                cursor: "pointer",
                "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
                "background-position": "top right"
            }).hover(function () {
                $(this).css({"background-position": "bottom right"})
            }, function () {
                $(this).css({"background-position": "top right"})
            }).bind(eClick, function () {
                $videoObj.get(0).pause()
            });
            var $videoTimeCurrent = $(".html5boxTimeCurrent", $videoControls);
            var $videoTimeTotal = $(".html5boxTimeTotal", $videoControls);
            var $videoSeeker = $(".html5boxSeeker", $videoControls);
            var $videoSeekerPlay = $(".html5boxSeekerPlay", $videoControls);
            var $videoSeekerBuffer = $(".html5boxSeekerBuffer", $videoControls);
            var $videoSeekerHandler = $(".html5boxSeekerHandler", $videoControls);
            $videoTimeCurrent.css({
                display: "block",
                position: "relative",
                "float": "left",
                "line-height": BAR_HEIGHT + "px",
                "font-weight": "normal",
                "font-size": "12px",
                margin: "0 8px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#fff"
            });
            $videoTimeTotal.css({
                display: "block",
                position: "relative",
                "float": "right",
                "line-height": BAR_HEIGHT + "px",
                "font-weight": "normal",
                "font-size": "12px",
                margin: "0 8px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#fff"
            });
            $videoSeeker.css({
                display: "block",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                height: "10px",
                "background-color": "#222",
                margin: Math.floor((BAR_HEIGHT - 10) / 2) + "px 4px"
            }).bind(eStart, function (e) {
                var e0 = isTouch ? e.originalEvent.touches[0] : e;
                var pos = e0.pageX - $videoSeeker.offset().left;
                $videoSeekerPlay.css({width: pos});
                $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width();
                $videoSeeker.bind(eMove, function (e) {
                    var e0 = isTouch ? e.originalEvent.touches[0] : e;
                    var pos = e0.pageX - $videoSeeker.offset().left;
                    $videoSeekerPlay.css({width: pos});
                    $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width()
                })
            }).bind(eCancel, function () {
                $videoSeeker.unbind(eMove)
            });
            $videoSeekerBuffer.css({
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                "background-color": "#444"
            });
            $videoSeekerPlay.css({
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                "background-color": "#fcc500"
            });
            if (!isIPhone && ($videoObj.get(0).requestFullscreen || $videoObj.get(0).webkitRequestFullScreen || $videoObj.get(0).mozRequestFullScreen || $videoObj.get(0).webkitEnterFullScreen || $videoObj.get(0).msRequestFullscreen)) {
                var switchScreen = function (fullscreen) {
                    if (fullscreen) {
                        if ($videoObj.get(0).requestFullscreen) $videoObj.get(0).requestFullscreen(); else if ($videoObj.get(0).webkitRequestFullScreen) $videoObj.get(0).webkitRequestFullScreen(); else if ($videoObj.get(0).mozRequestFullScreen) $videoObj.get(0).mozRequestFullScreen(); else if ($videoObj.get(0).webkitEnterFullScreen) $videoObj.get(0).webkitEnterFullScreen();
                        if ($videoObj.get(0).msRequestFullscreen) $videoObj.get(0).msRequestFullscreen()
                    } else if (document.cancelFullScreen) document.cancelFullScreen(); else if (document.mozCancelFullScreen) document.mozCancelFullScreen(); else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); else if (document.msExitFullscreen) document.msExitFullscreen()
                };
                var switchScreenCSS = function (fullscreen) {
                    $videoControls.css({position: fullscreen ? "fixed" : "absolute"});
                    var backgroundPosY = $videoFullscreen.css("background-position") ? $videoFullscreen.css("background-position").split(" ")[1] : $videoFullscreen.css("background-position-y");
                    $videoFullscreen.css({"background-position": (fullscreen ? "right" : "left") + " " + backgroundPosY});
                    $videoFullscreenBg.css({display: fullscreen ? "block" : "none"});
                    if (fullscreen) {
                        $(document).bind("mousemove", userActivate);
                        $videoControls.css({"z-index": 2147483647})
                    } else {
                        $(document).unbind("mousemove", userActivate);
                        $videoControls.css({"z-index": ""})
                    }
                };
                document.addEventListener("fullscreenchange", function () {
                    isFullscreen = document.fullscreen;
                    switchScreenCSS(document.fullscreen)
                }, !1);
                document.addEventListener("mozfullscreenchange", function () {
                    isFullscreen = document.mozFullScreen;
                    switchScreenCSS(document.mozFullScreen)
                }, !1);
                document.addEventListener("webkitfullscreenchange", function () {
                    isFullscreen = document.webkitIsFullScreen;
                    switchScreenCSS(document.webkitIsFullScreen)
                }, !1);
                $videoObj.get(0).addEventListener("webkitbeginfullscreen", function () {
                    isFullscreen = !0
                }, !1);
                $videoObj.get(0).addEventListener("webkitendfullscreen", function () {
                    isFullscreen = !1
                }, !1);
                $("head").append("<style type='text/css'>video::-webkit-media-controls { display:none !important; }</style>");
                var $videoFullscreen = $(".html5boxFullscreen", $videoControls);
                $videoFullscreen.css({
                    display: "block",
                    position: "relative",
                    "float": "right",
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                    cursor: "pointer",
                    "background-image": "url('" + skinFolder + "html5boxplayer_fullscreen.png" + "')",
                    "background-position": "left top"
                }).hover(function () {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({"background-position": backgroundPosX + " bottom"})
                }, function () {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({"background-position": backgroundPosX + " top"})
                }).bind(eClick, function () {
                    isFullscreen = !isFullscreen;
                    switchScreen(isFullscreen)
                })
            }
            if (hd) {
                var $videoHD = $(".html5boxHD", $videoControls);
                $videoHD.css({
                    display: "block",
                    position: "relative",
                    "float": "right",
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                    cursor: "pointer",
                    "background-image": "url('" + skinFolder + "html5boxplayer_hd.png" + "')",
                    "background-position": (isHd ? "right" : "left") + " center"
                }).bind(eClick, function () {
                    isHd = !isHd;
                    $(this).css({"background-position": (isHd ? "right" : "left") + " center"});
                    parentInst.isHd = isHd;
                    var isPaused = $videoObj.get(0).isPaused;
                    $videoObj.get(0).setAttribute("src", (isHd ? hd : src) + "#t=" + $videoObj.get(0).currentTime);
                    if (!isPaused) $videoObj.get(0).play(); else if (!isIPhone) $videoObj.get(0).pause()
                })
            }
            $videoObj.get(0).volume = defaultvolume;
            var volumeSaved = defaultvolume == 0 ? 1 : defaultvolume;
            var volume = $videoObj.get(0).volume;
            $videoObj.get(0).volume = volume / 2 + 0.1;
            if ($videoObj.get(0).volume === volume / 2 + 0.1) {
                $videoObj.get(0).volume = volume;
                var $videoVolume = $(".html5boxVolume", $videoControls);
                var $videoVolumeButton = $(".html5boxVolumeButton", $videoControls);
                var $videoVolumeBar = $(".html5boxVolumeBar", $videoControls);
                var $videoVolumeBarBg = $(".html5boxVolumeBarBg", $videoControls);
                var $videoVolumeBarActive = $(".html5boxVolumeBarActive", $videoControls);
                $videoVolume.css({
                    display: "block",
                    position: "relative",
                    "float": "right",
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2)
                }).hover(function () {
                    clearTimeout(hideVolumeBarTimeoutId);
                    var volume = $videoObj.get(0).volume;
                    $videoVolumeBarActive.css({height: Math.round(volume * 100) + "%"});
                    $videoVolumeBar.show()
                }, function () {
                    clearTimeout(hideVolumeBarTimeoutId);
                    hideVolumeBarTimeoutId = setTimeout(function () {
                        $videoVolumeBar.hide()
                    }, 1E3)
                });
                $videoVolumeButton.css({
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    cursor: "pointer",
                    "background-image": "url('" + skinFolder + "html5boxplayer_volume.png" + "')",
                    "background-position": "top " + (volume > 0 ? "left" : "right")
                }).hover(function () {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({"background-position": backgroundPosX + " bottom"})
                }, function () {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({"background-position": backgroundPosX + " top"})
                }).bind(eClick, function () {
                    var volume = $videoObj.get(0).volume;
                    if (volume > 0) {
                        volumeSaved = volume;
                        volume = 0
                    } else volume = volumeSaved;
                    var backgroundPosY = $(this).css("background-position") ? $(this).css("background-position").split(" ")[1] : $(this).css("background-position-y");
                    $videoVolumeButton.css({"background-position": (volume > 0 ? "left" : "right") + " " + backgroundPosY});
                    $videoObj.get(0).volume = volume;
                    $videoVolumeBarActive.css({height: Math.round(volume * 100) + "%"})
                });
                $videoVolumeBar.css({
                    display: "none",
                    position: "absolute",
                    left: 4,
                    bottom: "100%",
                    width: 24,
                    height: 80,
                    "margin-bottom": Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                    "background-color": "#000000",
                    opacity: 0.7,
                    filter: "alpha(opacity=70)"
                });
                $videoVolumeBarBg.css({
                    display: "block",
                    position: "relative",
                    width: 10,
                    height: 68,
                    margin: 7,
                    cursor: "pointer",
                    "background-color": "#222"
                });
                $videoVolumeBarActive.css({
                    display: "block",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    "background-color": "#fcc500"
                });
                $videoVolumeBarBg.bind(eStart, function (e) {
                    var e0 = isTouch ? e.originalEvent.touches[0] : e;
                    var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                    vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                    $videoVolumeBarActive.css({height: Math.round(vol * 100) + "%"});
                    $videoVolumeButton.css({"background-position": "left " + (vol > 0 ? "top" : "bottom")});
                    $videoObj.get(0).volume = vol;
                    $videoVolumeBarBg.bind(eMove, function (e) {
                        var e0 = isTouch ? e.originalEvent.touches[0] : e;
                        var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                        vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                        $videoVolumeBarActive.css({height: Math.round(vol * 100) + "%"});
                        $videoVolumeButton.css({"background-position": "left " + (vol > 0 ? "top" : "bottom")});
                        $videoObj.get(0).volume = vol
                    })
                }).bind(eCancel, function () {
                    $videoVolumeBarBg.unbind(eMove)
                })
            }
            var calcTimeFormat = function (seconds) {
                var h0 = Math.floor(seconds / 3600);
                var h = h0 < 10 ? "0" + h0 : h0;
                var m0 = Math.floor((seconds - h0 * 3600) / 60);
                var m = m0 < 10 ? "0" + m0 : m0;
                var s0 = Math.floor(seconds - (h0 * 3600 + m0 * 60));
                var s = s0 < 10 ? "0" + s0 : s0;
                var r = m + ":" + s;
                if (h0 > 0) r = h + ":" + r;
                return r
            };
            if (hideplaybutton) $videoPlay.hide();
            if (hidecontrols) $videoControls.hide();
            var onVideoPlay = function () {
                if (!hideplaybutton) $videoPlay.hide();
                if (!hidecontrols) {
                    $videoBtnPlay.hide();
                    $videoBtnPause.show()
                }
            };
            var onVideoPause = function () {
                if (!hideplaybutton) $videoPlay.show();
                if (!hidecontrols) {
                    $videoControls.show();
                    clearTimeout(hideControlsTimerId);
                    $videoBtnPlay.show();
                    $videoBtnPause.hide()
                }
            };
            var onVideoEnded = function () {
                $(window).trigger("html5lightbox.videoended");
                if (!hideplaybutton) $videoPlay.show();
                if (!hidecontrols) {
                    $videoControls.show();
                    clearTimeout(hideControlsTimerId);
                    $videoBtnPlay.show();
                    $videoBtnPause.hide()
                }
            };
            var onVideoUpdate = function () {
                var curTime = $videoObj.get(0).currentTime;
                if (curTime) {
                    $videoTimeCurrent.text(calcTimeFormat(curTime));
                    var duration = $videoObj.get(0).duration;
                    if (duration) {
                        $videoTimeTotal.text(calcTimeFormat(duration));
                        if (!sliderDragging) {
                            var sliderW = $videoSeeker.width();
                            var pos = Math.round(sliderW * curTime / duration);
                            $videoSeekerPlay.css({width: pos});
                            $videoSeekerHandler.css({left: pos})
                        }
                    }
                }
            };
            var onVideoProgress = function () {
                if ($videoObj.get(0).buffered && $videoObj.get(0).buffered.length > 0 && !isNaN($videoObj.get(0).buffered.end(0)) && !isNaN($videoObj.get(0).duration)) {
                    var sliderW = $videoSeeker.width();
                    $videoSeekerBuffer.css({width: Math.round(sliderW * $videoObj.get(0).buffered.end(0) / $videoObj.get(0).duration)})
                }
            };
            try {
                $videoObj.bind("play", onVideoPlay);
                $videoObj.bind("pause", onVideoPause);
                $videoObj.bind("ended", onVideoEnded);
                $videoObj.bind("timeupdate", onVideoUpdate);
                $videoObj.bind("progress", onVideoProgress)
            } catch (e) {
            }
        }
    })(jQuery);
    jQuery(document).ready(function () {
        if (typeof html5Lightbox === "undefined") html5Lightbox = jQuery(".html5lightbox").html5lightbox()
    })
};(function () {
    var defaultOptions = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        touchpadSupport: !1,
        fixedBackground: !0,
        excluded: ''
    };
    var options = defaultOptions;
    var isExcluded = !1;
    var isFrame = !1;
    var direction = {x: 0, y: 0};
    var initDone = !1;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var refreshSize;
    var deltaBuffer = [];
    var isMac = /^Mac/.test(navigator.platform);
    var key = {left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36};
    var arrowKeys = {37: 1, 38: 1, 39: 1, 40: 1};

    function initTest() {
        if (options.keyboardSupport) {
            addEvent('keydown', keydown)
        }
    }

    function init() {
        if (initDone || !document.body) return;
        initDone = !0;
        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;
        initTest();
        if (top != self) {
            isFrame = !0
        } else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
            var fullPageElem = document.createElement('div');
            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' + 'top:0; left:0; right:0; height:' + root.scrollHeight + 'px';
            document.body.appendChild(fullPageElem);
            var pendingRefresh;
            refreshSize = function () {
                if (pendingRefresh) return;
                pendingRefresh = setTimeout(function () {
                    if (isExcluded) return;
                    fullPageElem.style.height = '0';
                    fullPageElem.style.height = root.scrollHeight + 'px';
                    pendingRefresh = null
                }, 500)
            };
            setTimeout(refreshSize, 10);
            addEvent('resize', refreshSize);
            var config = {attributes: !0, childList: !0, characterData: !1};
            observer = new MutationObserver(refreshSize);
            observer.observe(body, config);
            if (root.offsetHeight <= windowHeight) {
                var clearfix = document.createElement('div');
                clearfix.style.clear = 'both';
                body.appendChild(clearfix)
            }
        }
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll'
        }
    }

    function cleanup() {
        observer && observer.disconnect();
        removeEvent(wheelEvent, wheel);
        removeEvent('mousedown', mousedown);
        removeEvent('keydown', keydown);
        removeEvent('resize', refreshSize);
        removeEvent('load', init)
    }

    var que = [];
    var pending = !1;
    var lastScroll = Date.now();

    function scrollArray(elem, left, top) {
        directionCheck(left, top);
        if (options.accelerationMax != 1) {
            var now = Date.now();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor
                }
            }
            lastScroll = Date.now()
        }
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: Date.now()
        });
        if (pending) {
            return
        }
        var scrollWindow = (elem === document.body);
        var step = function (time) {
            var now = Date.now();
            var scrollX = 0;
            var scrollY = 0;
            for (var i = 0; i < que.length; i++) {
                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);
                var position = (finished) ? 1 : elapsed / options.animationTime;
                if (options.pulseAlgorithm) {
                    position = pulse(position)
                }
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;
                scrollX += x;
                scrollY += y;
                item.lastX += x;
                item.lastY += y;
                if (finished) {
                    que.splice(i, 1);
                    i--
                }
            }
            if (scrollWindow) {
                window.scrollBy(scrollX, scrollY)
            } else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop += scrollY
            }
            if (!left && !top) {
                que = []
            }
            if (que.length) {
                requestFrame(step, elem, (1000 / options.frameRate + 1))
            } else {
                pending = !1
            }
        };
        requestFrame(step, elem, 0);
        pending = !0
    }

    function wheel(event) {
        if (!initDone) {
            init()
        }
        var target = event.target;
        var overflowing = overflowingAncestor(target);
        if (!overflowing || event.defaultPrevented || event.ctrlKey) {
            return !0
        }
        if (isNodeName(activeElement, 'embed') || (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) || isNodeName(activeElement, 'object') || target.shadowRoot) {
            return !0
        }
        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
        var deltaY = -event.wheelDeltaY || event.deltaY || 0;
        if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX))
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY))
            }
        }
        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0
        }
        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40
        }
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
            return !0
        }
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120
        }
        scrollArray(overflowing, deltaX, deltaY);
        event.preventDefault();
        scheduleClearCache()
    }

    function keydown(event) {
        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);
        if (!document.body.contains(activeElement)) {
            activeElement = document.activeElement
        }
        var inputNodeNames = /^(textarea|select|embed|object)$/i;
        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, 'input') && !buttonTypes.test(target.type) || isNodeName(activeElement, 'video') || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) {
            return !0
        }
        if ((isNodeName(target, 'button') || isNodeName(target, 'input') && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) {
            return !0
        }
        if (isNodeName(target, 'input') && target.type == 'radio' && arrowKeys[event.keyCode]) {
            return !0
        }
        var shift, x = 0, y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;
        if (elem == document.body) {
            clientHeight = window.innerHeight
        }
        switch (event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar:
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                y = -elem.scrollTop;
                break;
            case key.end:
                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                y = (damt > 0) ? damt + 10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return !0
        }
        scrollArray(elem, x, y);
        event.preventDefault();
        scheduleClearCache()
    }

    function mousedown(event) {
        activeElement = event.target
    }

    var uniqueID = (function () {
        var i = 0;
        return function (el) {
            return el.uniqueID || (el.uniqueID = i++)
        }
    })();
    var cache = {};
    var clearCacheTimer;

    function scheduleClearCache() {
        clearTimeout(clearCacheTimer);
        clearCacheTimer = setInterval(function () {
            cache = {}
        }, 1 * 1000)
    }

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing
    }

    function overflowingAncestor(el) {
        var elems = [];
        var body = document.body;
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached)
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) {
                    return setCache(elems, getScrollRoot())
                }
            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
                return setCache(elems, el)
            }
        } while (el = el.parentElement);
    }

    function isContentOverflowing(el) {
        return (el.clientHeight + 10 < el.scrollHeight)
    }

    function overflowNotHidden(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow !== 'hidden')
    }

    function overflowAutoOrScroll(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow === 'scroll' || overflow === 'auto')
    }

    function addEvent(type, fn) {
        window.addEventListener(type, fn, !1)
    }

    function removeEvent(type, fn) {
        window.removeEventListener(type, fn, !1)
    }

    function isNodeName(el, tag) {
        return (el.nodeName || '').toLowerCase() === tag.toLowerCase()
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0
        }
    }

    var deltaBufferTimer;
    if (window.localStorage && localStorage.SS_deltaBuffer) {
        deltaBuffer = localStorage.SS_deltaBuffer.split(',')
    }

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY]
        }
        deltaY = Math.abs(deltaY);
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function () {
            if (window.localStorage) {
                localStorage.SS_deltaBuffer = deltaBuffer.join(',')
            }
        }, 1000);
        return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100)
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor)
    }

    function allDeltasDivisableBy(divisor) {
        return (isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor))
    }

    function isInsideYoutubeVideo(event) {
        var elem = event.target;
        var isControl = !1;
        if (document.URL.indexOf('www.youtube.com/watch') != -1) {
            do {
                isControl = (elem.classList && elem.classList.contains('html5-video-controls'));
                if (isControl) break
            } while (elem = elem.parentNode);
        }
        return isControl
    }

    var requestFrame = (function () {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback, element, delay) {
            window.setTimeout(callback, delay || (1000 / 60))
        })
    })();
    var MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
    var getScrollRoot = (function () {
        var SCROLL_ROOT;
        return function () {
            if (!SCROLL_ROOT) {
                var dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                var bodyScrollTop = document.body.scrollTop;
                var docElScrollTop = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != bodyScrollTop) (SCROLL_ROOT = document.body); else (SCROLL_ROOT = document.documentElement);
                window.scrollBy(0, -3);
                document.body.removeChild(dummy)
            }
            return SCROLL_ROOT
        }
    })();

    function pulse_(x) {
        var val, start, expx;
        x = x * options.pulseScale;
        if (x < 1) {
            val = x - (1 - Math.exp(-x))
        } else {
            start = Math.exp(-1);
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start))
        }
        return val * options.pulseNormalize
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;
        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1)
        }
        return pulse_(x)
    }

    var userAgent = window.navigator.userAgent;
    var isEdge = /Edge/.test(userAgent);
    var isChrome = /chrome/i.test(userAgent) && !isEdge;
    var isSafari = /safari/i.test(userAgent) && !isEdge;
    var isMobile = /mobile/i.test(userAgent);
    var isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
    var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
    var wheelEvent;
    if ('onwheel' in document.createElement('div'))
        wheelEvent = 'wheel'; else if ('onmousewheel' in document.createElement('div'))
        wheelEvent = 'mousewheel';
    if (wheelEvent && isEnabledForBrowser) {
        addEvent(wheelEvent, wheel);
        addEvent('mousedown', mousedown);
        addEvent('load', init)
    }

    function SmoothScroll(optionsToSet) {
        for (var key in optionsToSet)
            if (defaultOptions.hasOwnProperty(key))
                options[key] = optionsToSet[key]
    }

    SmoothScroll.destroy = cleanup;
    if (window.SmoothScrollOptions)
        SmoothScroll(window.SmoothScrollOptions);
    if (typeof define === 'function' && define.amd)
        define(function () {
            return SmoothScroll
        }); else if ('object' == typeof exports)
        module.exports = SmoothScroll; else window.SmoothScroll = SmoothScroll
})();
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Typewriter", [], e) : "object" == typeof exports ? exports.Typewriter = e() : t.Typewriter = e()
}(window, function () {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
            return r
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 53)
    }([function (t, e, n) {
        var r = n(27)("wks"), o = n(15), i = n(1).Symbol, u = "function" == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = r
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e, n) {
        var r = n(8), o = n(36), i = n(23), u = Object.defineProperty;
        e.f = n(3) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return u(t, e, n)
            } catch (t) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        t.exports = !n(6)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var r = n(1), o = n(11), i = n(7), u = n(9), a = n(18), s = function (t, e, n) {
            var c, f, l, p, v = t & s.F, d = t & s.G, h = t & s.S, y = t & s.P, m = t & s.B,
                g = d ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype, E = d ? o : o[e] || (o[e] = {}),
                b = E.prototype || (E.prototype = {});
            for (c in d && (n = e), n) l = ((f = !v && g && void 0 !== g[c]) ? g : n)[c], p = m && f ? a(l, r) : y && "function" == typeof l ? a(Function.call, l) : l, g && u(g, c, l, t & s.U), E[c] != l && i(E, c, p), y && b[c] != l && (b[c] = l)
        };
        r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e, n) {
        var r = n(2), o = n(14);
        t.exports = n(3) ? function (t, e, n) {
            return r.f(t, e, o(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var r = n(5);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, n) {
        var r = n(1), o = n(7), i = n(10), u = n(15)("src"), a = Function.toString, s = ("" + a).split("toString");
        n(11).inspectSource = function (t) {
            return a.call(t)
        }, (t.exports = function (t, e, n, a) {
            var c = "function" == typeof n;
            c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, u) || o(n, u, t[e] ? "" + t[e] : s.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || a.call(this)
        })
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e) {
        var n = t.exports = {version: "2.5.7"};
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var r = n(39), o = n(21);
        t.exports = function (t) {
            return r(o(t))
        }
    }, , function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }
    }, function (t, e) {
        var n = 0, r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        var r = n(43), o = n(29);
        t.exports = Object.keys || function (t) {
            return r(t, o)
        }
    }, function (t, e, n) {
        var r = n(55);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e, n) {
        var r = n(21);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e) {
        t.exports = !1
    }, function (t, e, n) {
        var r = n(5);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e, n) {
        var r = n(25), o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, e) {
        var n = Math.ceil, r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e, n) {
        var r = n(19);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    }, function (t, e, n) {
        var r = n(11), o = n(1), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(22) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e, n) {
        var r = n(27)("keys"), o = n(15);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t))
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        var r = n(2).f, o = n(10), i = n(0)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(8);
        t.exports = function () {
            var t = r(this), e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, n) {
        var r = n(43), o = n(29).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, o)
        }
    }, function (t, e, n) {
        (function (e) {
            for (var r = n(90), o = "undefined" == typeof window ? e : window, i = ["moz", "webkit"], u = "AnimationFrame", a = o["request" + u], s = o["cancel" + u] || o["cancelRequest" + u], c = 0; !a && c < i.length; c++) a = o[i[c] + "Request" + u], s = o[i[c] + "Cancel" + u] || o[i[c] + "CancelRequest" + u];
            if (!a || !s) {
                var f = 0, l = 0, p = [];
                a = function (t) {
                    if (0 === p.length) {
                        var e = r(), n = Math.max(0, 1e3 / 60 - (e - f));
                        f = n + e, setTimeout(function () {
                            var t = p.slice(0);
                            p.length = 0;
                            for (var e = 0; e < t.length; e++) if (!t[e].cancelled) try {
                                t[e].callback(f)
                            } catch (t) {
                                setTimeout(function () {
                                    throw t
                                }, 0)
                            }
                        }, Math.round(n))
                    }
                    return p.push({handle: ++l, callback: t, cancelled: !1}), l
                }, s = function (t) {
                    for (var e = 0; e < p.length; e++) p[e].handle === t && (p[e].cancelled = !0)
                }
            }
            t.exports = function (t) {
                return a.call(o, t)
            }, t.exports.cancel = function () {
                s.apply(o, arguments)
            }, t.exports.polyfill = function (t) {
                t || (t = o), t.requestAnimationFrame = a, t.cancelAnimationFrame = s
            }
        }).call(this, n(89))
    }, function (t, e, n) {
        var r = n(8), o = n(61), i = n(29), u = n(28)("IE_PROTO"), a = function () {
        }, s = function () {
            var t, e = n(37)("iframe"), r = i.length;
            for (e.style.display = "none", n(64).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
            return s()
        };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[u] = t) : n = s(), void 0 === e ? n : o(n, e)
        }
    }, function (t, e, n) {
        t.exports = !n(3) && !n(6)(function () {
            return 7 != Object.defineProperty(n(37)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var r = n(5), o = n(1).document, i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, e, n) {
        var r = n(18), o = n(39), i = n(20), u = n(24), a = n(56);
        t.exports = function (t, e) {
            var n = 1 == t, s = 2 == t, c = 3 == t, f = 4 == t, l = 6 == t, p = 5 == t || l, v = e || a;
            return function (e, a, d) {
                for (var h, y, m = i(e), g = o(m), E = r(a, d, 3), b = u(g.length), T = 0, w = n ? v(e, b) : s ? v(e, 0) : void 0; b > T; T++) if ((p || T in g) && (y = E(h = g[T], T, m), t)) if (n) w[T] = y; else if (y) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return T;
                    case 2:
                        w.push(h)
                } else if (f) return !1;
                return l ? -1 : c || f ? f : w
            }
        }
    }, function (t, e, n) {
        var r = n(19);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(6);
        t.exports = function (t, e) {
            return !!t && r(function () {
                e ? t.call(null, function () {
                }, 1) : t.call(null)
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(58), o = n(59), i = n(16), u = n(12);
        t.exports = n(42)(Array, "Array", function (t, e) {
            this._t = u(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function (t, e, n) {
        "use strict";
        var r = n(22), o = n(4), i = n(9), u = n(7), a = n(16), s = n(60), c = n(30), f = n(65), l = n(0)("iterator"),
            p = !([].keys && "next" in [].keys()), v = function () {
                return this
            };
        t.exports = function (t, e, n, d, h, y, m) {
            s(n, e, d);
            var g, E, b, T = function (t) {
                    if (!p && t in _) return _[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                }, w = e + " Iterator", S = "values" == h, A = !1, _ = t.prototype,
                O = _[l] || _["@@iterator"] || h && _[h], x = O || T(h), N = h ? S ? T("entries") : x : void 0,
                L = "Array" == e && _.entries || O;
            if (L && (b = f(L.call(new t))) !== Object.prototype && b.next && (c(b, w, !0), r || "function" == typeof b[l] || u(b, l, v)), S && O && "values" !== O.name && (A = !0, x = function () {
                return O.call(this)
            }), r && !m || !p && !A && _[l] || u(_, l, x), a[e] = x, a[w] = v, h) if (g = {
                values: S ? x : T("values"),
                keys: y ? x : T("keys"),
                entries: N
            }, m) for (E in g) E in _ || i(_, E, g[E]); else o(o.P + o.F * (p || A), e, g);
            return g
        }
    }, function (t, e, n) {
        var r = n(10), o = n(12), i = n(62)(!1), u = n(28)("IE_PROTO");
        t.exports = function (t, e) {
            var n, a = o(t), s = 0, c = [];
            for (n in a) n != u && r(a, n) && c.push(n);
            for (; e.length > s;) r(a, n = e[s++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function (t, e, n) {
        var r = n(1), o = n(11), i = n(22), u = n(45), a = n(2).f;
        t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {value: u.f(t)})
        }
    }, function (t, e, n) {
        e.f = n(0)
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e, n) {
        var r = n(32), o = n(14), i = n(12), u = n(23), a = n(10), s = n(36), c = Object.getOwnPropertyDescriptor;
        e.f = n(3) ? c : function (t, e) {
            if (t = i(t), e = u(e, !0), s) try {
                return c(t, e)
            } catch (t) {
            }
            if (a(t, e)) return o(!r.f.call(t, e), t[e])
        }
    }, function (t, e, n) {
        var r = n(5), o = n(19), i = n(0)("match");
        t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    }, function (t, e, n) {
        n(44)("asyncIterator")
    }, function (t, e, n) {
        "use strict";
        var r = n(1), o = n(10), i = n(3), u = n(4), a = n(9), s = n(81).KEY, c = n(6), f = n(27), l = n(30), p = n(15),
            v = n(0), d = n(45), h = n(44), y = n(82), m = n(26), g = n(8), E = n(5), b = n(12), T = n(23), w = n(14),
            S = n(35), A = n(83), _ = n(47), O = n(2), x = n(17), N = _.f, L = O.f, C = A.f, R = r.Symbol, M = r.JSON,
            j = M && M.stringify, P = v("_hidden"), D = v("toPrimitive"), k = {}.propertyIsEnumerable,
            I = f("symbol-registry"), F = f("symbols"), H = f("op-symbols"), U = Object.prototype,
            V = "function" == typeof R, G = r.QObject, Q = !G || !G.prototype || !G.prototype.findChild,
            B = i && c(function () {
                return 7 != S(L({}, "a", {
                    get: function () {
                        return L(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (t, e, n) {
                var r = N(U, e);
                r && delete U[e], L(t, e, n), r && t !== U && L(U, e, r)
            } : L, Y = function (t) {
                var e = F[t] = S(R.prototype);
                return e._k = t, e
            }, q = V && "symbol" == typeof R.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof R
            }, J = function (t, e, n) {
                return t === U && J(H, e, n), g(t), e = T(e, !0), g(n), o(F, e) ? (n.enumerable ? (o(t, P) && t[P][e] && (t[P][e] = !1), n = S(n, {enumerable: w(0, !1)})) : (o(t, P) || L(t, P, w(1, {})), t[P][e] = !0), B(t, e, n)) : L(t, e, n)
            }, W = function (t, e) {
                g(t);
                for (var n, r = y(e = b(e)), o = 0, i = r.length; i > o;) J(t, n = r[o++], e[n]);
                return t
            }, z = function (t) {
                var e = k.call(this, t = T(t, !0));
                return !(this === U && o(F, t) && !o(H, t)) && (!(e || !o(this, t) || !o(F, t) || o(this, P) && this[P][t]) || e)
            }, $ = function (t, e) {
                if (t = b(t), e = T(e, !0), t !== U || !o(F, e) || o(H, e)) {
                    var n = N(t, e);
                    return !n || !o(F, e) || o(t, P) && t[P][e] || (n.enumerable = !0), n
                }
            }, K = function (t) {
                for (var e, n = C(b(t)), r = [], i = 0; n.length > i;) o(F, e = n[i++]) || e == P || e == s || r.push(e);
                return r
            }, X = function (t) {
                for (var e, n = t === U, r = C(n ? H : b(t)), i = [], u = 0; r.length > u;) !o(F, e = r[u++]) || n && !o(U, e) || i.push(F[e]);
                return i
            };
        V || (a((R = function () {
            if (this instanceof R) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
                this === U && e.call(H, n), o(this, P) && o(this[P], t) && (this[P][t] = !1), B(this, t, w(1, n))
            };
            return i && Q && B(U, t, {configurable: !0, set: e}), Y(t)
        }).prototype, "toString", function () {
            return this._k
        }), _.f = $, O.f = J, n(33).f = A.f = K, n(32).f = z, n(46).f = X, i && !n(22) && a(U, "propertyIsEnumerable", z, !0), d.f = function (t) {
            return Y(v(t))
        }), u(u.G + u.W + u.F * !V, {Symbol: R});
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) v(Z[tt++]);
        for (var et = x(v.store), nt = 0; et.length > nt;) h(et[nt++]);
        u(u.S + u.F * !V, "Symbol", {
            for: function (t) {
                return o(I, t += "") ? I[t] : I[t] = R(t)
            }, keyFor: function (t) {
                if (!q(t)) throw TypeError(t + " is not a symbol!");
                for (var e in I) if (I[e] === t) return e
            }, useSetter: function () {
                Q = !0
            }, useSimple: function () {
                Q = !1
            }
        }), u(u.S + u.F * !V, "Object", {
            create: function (t, e) {
                return void 0 === e ? S(t) : W(S(t), e)
            },
            defineProperty: J,
            defineProperties: W,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: K,
            getOwnPropertySymbols: X
        }), M && u(u.S + u.F * (!V || c(function () {
            var t = R();
            return "[null]" != j([t]) || "{}" != j({a: t}) || "{}" != j(Object(t))
        })), "JSON", {
            stringify: function (t) {
                for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = e = r[1], (E(e) || void 0 !== t) && !q(t)) return m(e) || (e = function (t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !q(e)) return e
                }), r[1] = e, j.apply(M, r)
            }
        }), R.prototype[D] || n(7)(R.prototype, D, R.prototype.valueOf), l(R, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    }, function (t, e, n) {
        var r = n(4);
        r(r.S + r.F * !n(3), "Object", {defineProperty: n(2).f})
    }, function (t, e, n) {
        var r = n(5), o = n(8), i = function (t, e) {
            if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
                try {
                    (r = n(18)(Function.call, n(47).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function (t, n) {
                    return i(t, n), e ? t.__proto__ = n : r(t, n), t
                }
            }({}, !1) : void 0), check: i
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        n(54), n(41), n(66), n(68), n(70), n(77), n(79), n(80), n(49), n(50), n(51), n(84), n(85), n(87), n(88);
        var r = n(34), o = n.n(r), i = (n(92), function (t) {
            return new RegExp(/<[a-z][\s\S]*>/i).test(t)
        }), u = function (t) {
            var e = document.createElement("div");
            return e.innerHTML = t, e.childNodes
        }, a = function (t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        };
        n(95);

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), r.forEach(function (e) {
                    p(t, e, n[e])
                })
            }
            return t
        }

        function c(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function f(t) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function p(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var v = function () {
            function t(e, n) {
                var r = this;
                if (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), p(this, "eventNames", {
                    TYPE_CHARACTER: "TYPE_CHARACTER",
                    REMOVE_CHARACTER: "REMOVE_CHARACTER",
                    REMOVE_ALL: "REMOVE_ALL",
                    REMOVE_LAST_VISIBLE_NODE: "REMOVE_LAST_VISIBLE_NODE",
                    PAUSE_FOR: "PAUSE_FOR",
                    CALL_FUNCTION: "CALL_FUNCTION",
                    ADD_HTML_TAG_ELEMENT: "ADD_HTML_TAG_ELEMENT",
                    REMOVE_HTML_TAG_ELEMENT: "REMOVE_HTML_TAG_ELEMENT",
                    CHANGE_DELETE_SPEED: "CHANGE_DELETE_SPEED",
                    CHANGE_DELAY: "CHANGE_DELAY"
                }), p(this, "visibleNodeTypes", {
                    HTML_TAG: "HTML_TAG",
                    TEXT_NODE: "TEXT_NODE"
                }), p(this, "state", {
                    cursorAnimation: null,
                    lastFrameTime: null,
                    pauseUntil: null,
                    eventQueue: [],
                    eventLoop: null,
                    eventLoopPaused: !1,
                    reverseCalledEvents: [],
                    calledEvents: [],
                    visibleNodes: [],
                    initialOptions: null,
                    elements: {
                        container: null,
                        wrapper: document.createElement("span"),
                        cursor: document.createElement("span")
                    }
                }), p(this, "options", {
                    strings: null,
                    cursor: "|",
                    delay: "natural",
                    deleteSpeed: "natural",
                    loop: !1,
                    autoStart: !1,
                    devMode: !1,
                    wrapperClassName: "Typewriter__wrapper",
                    cursorClassName: "Typewriter__cursor"
                }), p(this, "setupWrapperElement", function () {
                    r.state.elements.wrapper.className = r.options.wrapperClassName, r.state.elements.cursor.className = r.options.cursorClassName, r.state.elements.cursor.innerHTML = r.options.cursor, r.state.elements.container.innerHTML = "", r.state.elements.container.appendChild(r.state.elements.wrapper), r.state.elements.container.appendChild(r.state.elements.cursor)
                }), p(this, "start", function () {
                    return r.state.eventLoopPaused = !1, r.runEventLoop(), r
                }), p(this, "pause", function () {
                    return r.state.eventLoopPaused = !0, r
                }), p(this, "stop", function () {
                    return r.state.eventLoop && o.a.cancel(r.state.eventLoop), r
                }), p(this, "pauseFor", function (t) {
                    return r.addEventToQueue(r.eventNames.PAUSE_FOR, {ms: t}), r
                }), p(this, "typeOutAllStrings", function () {
                    return "string" == typeof r.options.strings ? (r.typeString(r.options.strings).pauseFor(1500), r) : (r.options.strings.forEach(function (t, e) {
                        r.typeString(t).pauseFor(1500).deleteAll()
                    }), r)
                }), p(this, "typeString", function (t) {
                    return i(t) ? r.typeOutHTMLString(t) : (t.split("").forEach(function (t) {
                        r.addEventToQueue(r.eventNames.TYPE_CHARACTER, {character: t})
                    }), r)
                }), p(this, "typeOutHTMLString", function (t) {
                    var e = u(t);
                    if (e.length > 0) for (var n = function (t) {
                        var n = e[t];
                        if (n.nodeType && 1 === n.nodeType) {
                            var o = n.innerText.split("");
                            if (n.innerText = "", r.addEventToQueue(r.eventNames.ADD_HTML_TAG_ELEMENT, {node: n}), !o.length) return {v: r};
                            o.forEach(function (t) {
                                r.addEventToQueue(r.eventNames.TYPE_CHARACTER, {character: t, node: n})
                            })
                        } else n.textContent && r.typeString(n.textContent)
                    }, o = 0; o < e.length; o++) {
                        var i = n(o);
                        if ("object" === f(i)) return i.v
                    }
                    return r
                }), p(this, "deleteAll", function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                    return r.addEventToQueue(r.eventNames.REMOVE_ALL, {speed: t}), r
                }), p(this, "changeDeleteSpeed", function (t) {
                    return r.addEventToQueue(r.eventNames.CHANGE_DELETE_SPEED, {speed: t}), r
                }), p(this, "changeDelay", function (t) {
                    return r.addEventToQueue(r.eventNames.CHANGE_DELAY, {delay: t}), r
                }), p(this, "deleteChars", function (t) {
                    for (var e = 0; e < t; e++) r.addEventToQueue(r.eventNames.REMOVE_CHARACTER);
                    return r
                }), p(this, "callFunction", function (t, e) {
                    return "function" == typeof t && r.addEventToQueue(r.eventNames.CALL_FUNCTION, {
                        cb: t,
                        thisArg: e
                    }), r
                }), p(this, "typeCharacters", function (t) {
                    return t.forEach(function (t) {
                        r.addEventToQueue(r.eventNames.TYPE_CHARACTER, {character: t})
                    }), r
                }), p(this, "removeCharacters", function (t) {
                    return t.forEach(function () {
                        r.addEventToQueue(r.eventNames.REMOVE_CHARACTER)
                    }), r
                }), p(this, "addEventToQueue", function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return r.addEventToStateProperty(t, e, n, "eventQueue")
                }), p(this, "addReverseCalledEvent", function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return r.options.loop ? r.addEventToStateProperty(t, e, n, "reverseCalledEvents") : r
                }), p(this, "addEventToStateProperty", function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 ? arguments[3] : void 0, i = {eventName: t, eventArgs: e || {}};
                    return r.state[o] = n ? [i].concat(c(r.state[o])) : c(r.state[o]).concat([i]), r
                }), p(this, "runEventLoop", function () {
                    r.state.lastFrameTime || (r.state.lastFrameTime = Date.now());
                    var t = Date.now(), e = t - r.state.lastFrameTime;
                    if (!r.state.eventQueue.length) {
                        if (!r.options.loop) return;
                        r.state.eventQueue = c(r.state.calledEvents), r.state.calledEvents = [], r.options = s({}, r.state.initialOptions), r.addEventToQueue(r.eventNames.REMOVE_ALL, null, !0)
                    }
                    if (r.state.eventLoop = o()(r.runEventLoop), !r.state.eventLoopPaused) {
                        if (r.state.pauseUntil) {
                            if (t < r.state.pauseUntil) return;
                            r.state.pauseUntil = null
                        }
                        var n = c(r.state.eventQueue), i = n.shift();
                        if (!(e <= (i.eventName === r.eventNames.REMOVE_LAST_VISIBLE_NODE || i.eventName === r.eventNames.REMOVE_CHARACTER ? "natural" === r.options.deleteSpeed ? a(40, 80) : r.options.deleteSpeed : "natural" === r.options.delay ? a(120, 160) : r.options.delay))) {
                            var u = i.eventName, f = i.eventArgs;
                            switch (r.logInDevMode({currentEvent: i, state: r.state}), u) {
                                case r.eventNames.TYPE_CHARACTER:
                                    var l = f.character, p = f.node, v = document.createTextNode(l);
                                    p ? p.appendChild(v) : r.state.elements.wrapper.appendChild(v), r.state.visibleNodes = c(r.state.visibleNodes).concat([{
                                        type: r.visibleNodeTypes.TEXT_NODE,
                                        node: v
                                    }]);
                                    break;
                                case r.eventNames.REMOVE_CHARACTER:
                                    n.unshift({
                                        eventName: r.eventNames.REMOVE_LAST_VISIBLE_NODE,
                                        eventArgs: {removingCharacterNode: !0}
                                    });
                                    break;
                                case r.eventNames.PAUSE_FOR:
                                    var d = i.eventArgs.ms;
                                    r.state.pauseUntil = Date.now() + parseInt(d);
                                    break;
                                case r.eventNames.CALL_FUNCTION:
                                    var h = i.eventArgs, y = h.cb, m = h.thisArg;
                                    y.call(m, {elements: r.state.elements});
                                    break;
                                case r.eventNames.ADD_HTML_TAG_ELEMENT:
                                    var g = i.eventArgs.node;
                                    r.state.elements.wrapper.appendChild(g), r.state.visibleNodes = c(r.state.visibleNodes).concat([{
                                        type: r.visibleNodeTypes.HTML_TAG,
                                        node: g
                                    }]);
                                    break;
                                case r.eventNames.REMOVE_ALL:
                                    var E = r.state.visibleNodes, b = f.speed, T = [];
                                    b && T.push({eventName: r.eventNames.CHANGE_DELETE_SPEED, eventArgs: {speed: b}});
                                    for (var w = 0, S = E.length; w < S; w++) T.push({
                                        eventName: r.eventNames.REMOVE_LAST_VISIBLE_NODE,
                                        eventArgs: {removingCharacterNode: !1}
                                    });
                                    b && T.push({
                                        eventName: r.eventNames.CHANGE_DELETE_SPEED,
                                        eventArgs: {speed: r.options.deleteSpeed}
                                    }), n.unshift.apply(n, T);
                                    break;
                                case r.eventNames.REMOVE_LAST_VISIBLE_NODE:
                                    var A = i.eventArgs.removingCharacterNode;
                                    if (r.state.visibleNodes.length) {
                                        var _ = r.state.visibleNodes.pop(), O = _.type, x = _.node;
                                        x.parentNode.removeChild(x), O === r.visibleNodeTypes.HTML_TAG && A && n.unshift({
                                            eventName: r.eventNames.REMOVE_LAST_VISIBLE_NODE,
                                            eventArgs: {}
                                        })
                                    }
                                    break;
                                case r.eventNames.CHANGE_DELETE_SPEED:
                                    r.options.deleteSpeed = i.eventArgs.speed;
                                    break;
                                case r.eventNames.CHANGE_DELAY:
                                    r.options.delay = i.eventArgs.delay
                            }
                            r.options.loop && i.eventName !== r.eventNames.REMOVE_ALL && i.eventName !== r.eventNames.REMOVE_CHARACTER && (r.state.calledEvents = c(r.state.calledEvents).concat([i])), r.state.eventQueue = n, r.state.lastFrameTime = t
                        }
                    }
                }), !e) throw new Error("No container element was provided");
                if ("string" == typeof e) {
                    var l = document.querySelector(e);
                    if (!l) throw new Error("Could not find container element");
                    this.state.elements.container = l
                } else this.state.elements.container = e;
                n && (this.options = s({}, this.options, n)), this.state.initialOptions = this.options, this.init()
            }

            return function (t, e, n) {
                e && l(t.prototype, e), n && l(t, n)
            }(t, [{
                key: "init", value: function () {
                    this.setupWrapperElement(), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                }
            }, {
                key: "logInDevMode", value: function (t) {
                    this.options.devMode && console.log(t)
                }
            }]), t
        }();
        n.d(e, "default", function () {
            return v
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(4), o = n(38)(2);
        r(r.P + r.F * !n(40)([].filter, !0), "Array", {
            filter: function (t) {
                return o(this, t, arguments[1])
            }
        })
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        var r = n(57);
        t.exports = function (t, e) {
            return new (r(t))(e)
        }
    }, function (t, e, n) {
        var r = n(5), o = n(26), i = n(0)("species");
        t.exports = function (t) {
            var e;
            return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
        }
    }, function (t, e, n) {
        var r = n(0)("unscopables"), o = Array.prototype;
        void 0 == o[r] && n(7)(o, r, {}), t.exports = function (t) {
            o[r][t] = !0
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t}
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(35), o = n(14), i = n(30), u = {};
        n(7)(u, n(0)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = r(u, {next: o(1, n)}), i(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var r = n(2), o = n(8), i = n(17);
        t.exports = n(3) ? Object.defineProperties : function (t, e) {
            o(t);
            for (var n, u = i(e), a = u.length, s = 0; a > s;) r.f(t, n = u[s++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var r = n(12), o = n(24), i = n(63);
        t.exports = function (t) {
            return function (e, n, u) {
                var a, s = r(e), c = o(s.length), f = i(u, c);
                if (t && n != n) {
                    for (; c > f;) if ((a = s[f++]) != a) return !0
                } else for (; c > f; f++) if ((t || f in s) && s[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(25), o = Math.max, i = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement
    }, function (t, e, n) {
        var r = n(10), o = n(20), i = n(28)("IE_PROTO"), u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, e, n) {
        var r = n(20), o = n(17);
        n(67)("keys", function () {
            return function (t) {
                return o(r(t))
            }
        })
    }, function (t, e, n) {
        var r = n(4), o = n(11), i = n(6);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t], u = {};
            u[t] = e(n), r(r.S + r.F * i(function () {
                n(1)
            }), "Object", u)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(69)(!0);
        n(42)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, e, n) {
        var r = n(25), o = n(21);
        t.exports = function (t) {
            return function (e, n) {
                var i, u, a = String(o(e)), s = r(n), c = a.length;
                return s < 0 || s >= c ? t ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? a.charAt(s) : i : t ? a.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(18), o = n(4), i = n(20), u = n(71), a = n(72), s = n(24), c = n(73), f = n(74);
        o(o.S + o.F * !n(76)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, n, o, l, p = i(t), v = "function" == typeof this ? this : Array, d = arguments.length,
                    h = d > 1 ? arguments[1] : void 0, y = void 0 !== h, m = 0, g = f(p);
                if (y && (h = r(h, d > 2 ? arguments[2] : void 0, 2)), void 0 == g || v == Array && a(g)) for (n = new v(e = s(p.length)); e > m; m++) c(n, m, y ? h(p[m], m) : p[m]); else for (l = g.call(p), n = new v; !(o = l.next()).done; m++) c(n, m, y ? u(l, h, [o.value, m], !0) : o.value);
                return n.length = m, n
            }
        })
    }, function (t, e, n) {
        var r = n(8);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        var r = n(16), o = n(0)("iterator"), i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2), o = n(14);
        t.exports = function (t, e, n) {
            e in t ? r.f(t, e, o(0, n)) : t[e] = n
        }
    }, function (t, e, n) {
        var r = n(75), o = n(0)("iterator"), i = n(16);
        t.exports = n(11).getIteratorMethod = function (t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function (t, e, n) {
        var r = n(19), o = n(0)("toStringTag"), i = "Arguments" == r(function () {
            return arguments
        }());
        t.exports = function (t) {
            var e, n, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
        }
    }, function (t, e, n) {
        var r = n(0)("iterator"), o = !1;
        try {
            var i = [7][r]();
            i.return = function () {
                o = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7], u = i[r]();
                u.next = function () {
                    return {done: n = !0}
                }, i[r] = function () {
                    return u
                }, t(i)
            } catch (t) {
            }
            return n
        }
    }, function (t, e, n) {
        "use strict";
        n(78);
        var r = n(8), o = n(31), i = n(3), u = /./.toString, a = function (t) {
            n(9)(RegExp.prototype, "toString", t, !0)
        };
        n(6)(function () {
            return "/a/b" != u.call({source: "a", flags: "b"})
        }) ? a(function () {
            var t = r(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
        }) : "toString" != u.name && a(function () {
            return u.call(this)
        })
    }, function (t, e, n) {
        n(3) && "g" != /./g.flags && n(2).f(RegExp.prototype, "flags", {configurable: !0, get: n(31)})
    }, function (t, e, n) {
        var r = Date.prototype, o = r.toString, i = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(9)(r, "toString", function () {
            var t = i.call(this);
            return t == t ? o.call(this) : "Invalid Date"
        })
    }, function (t, e, n) {
        var r = n(4);
        r(r.S, "Array", {isArray: n(26)})
    }, function (t, e, n) {
        var r = n(15)("meta"), o = n(5), i = n(10), u = n(2).f, a = 0, s = Object.isExtensible || function () {
            return !0
        }, c = !n(6)(function () {
            return s(Object.preventExtensions({}))
        }), f = function (t) {
            u(t, r, {value: {i: "O" + ++a, w: {}}})
        }, l = t.exports = {
            KEY: r, NEED: !1, fastKey: function (t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!s(t)) return "F";
                    if (!e) return "E";
                    f(t)
                }
                return t[r].i
            }, getWeak: function (t, e) {
                if (!i(t, r)) {
                    if (!s(t)) return !0;
                    if (!e) return !1;
                    f(t)
                }
                return t[r].w
            }, onFreeze: function (t) {
                return c && l.NEED && s(t) && !i(t, r) && f(t), t
            }
        }
    }, function (t, e, n) {
        var r = n(17), o = n(46), i = n(32);
        t.exports = function (t) {
            var e = r(t), n = o.f;
            if (n) for (var u, a = n(t), s = i.f, c = 0; a.length > c;) s.call(t, u = a[c++]) && e.push(u);
            return e
        }
    }, function (t, e, n) {
        var r = n(12), o = n(33).f, i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return u && "[object Window]" == i.call(t) ? function (t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            }(t) : o(r(t))
        }
    }, function (t, e, n) {
        var r = n(4);
        r(r.S, "Date", {
            now: function () {
                return (new Date).getTime()
            }
        })
    }, function (t, e, n) {
        n(86)("split", 2, function (t, e, r) {
            "use strict";
            var o = n(48), i = r, u = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var a = void 0 === /()??/.exec("")[1];
                r = function (t, e) {
                    var n = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!o(t)) return i.call(n, t, e);
                    var r, s, c, f, l, p = [],
                        v = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        d = 0, h = void 0 === e ? 4294967295 : e >>> 0, y = new RegExp(t.source, v + "g");
                    for (a || (r = new RegExp("^" + y.source + "$(?!\\s)", v)); (s = y.exec(n)) && !((c = s.index + s[0].length) > d && (p.push(n.slice(d, s.index)), !a && s.length > 1 && s[0].replace(r, function () {
                        for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0)
                    }), s.length > 1 && s.index < n.length && u.apply(p, s.slice(1)), f = s[0].length, d = c, p.length >= h));) y.lastIndex === s.index && y.lastIndex++;
                    return d === n.length ? !f && y.test("") || p.push("") : p.push(n.slice(d)), p.length > h ? p.slice(0, h) : p
                }
            } else "0".split(void 0, 0).length && (r = function (t, e) {
                return void 0 === t && 0 === e ? [] : i.call(this, t, e)
            });
            return [function (n, o) {
                var i = t(this), u = void 0 == n ? void 0 : n[e];
                return void 0 !== u ? u.call(n, i, o) : r.call(String(i), n, o)
            }, r]
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(7), o = n(9), i = n(6), u = n(21), a = n(0);
        t.exports = function (t, e, n) {
            var s = a(t), c = n(u, s, ""[t]), f = c[0], l = c[1];
            i(function () {
                var e = {};
                return e[s] = function () {
                    return 7
                }, 7 != ""[t](e)
            }) && (o(String.prototype, t, f), r(RegExp.prototype, s, 2 == e ? function (t, e) {
                return l.call(t, this, e)
            } : function (t) {
                return l.call(t, this)
            }))
        }
    }, function (t, e, n) {
        for (var r = n(41), o = n(17), i = n(9), u = n(1), a = n(7), s = n(16), c = n(0), f = c("iterator"), l = c("toStringTag"), p = s.Array, v = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, d = o(v), h = 0; h < d.length; h++) {
            var y, m = d[h], g = v[m], E = u[m], b = E && E.prototype;
            if (b && (b[f] || a(b, f, p), b[l] || a(b, l, m), s[m] = p, g)) for (y in r) b[y] || i(b, y, r[y], !0)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(4), o = n(38)(0), i = n(40)([].forEach, !0);
        r(r.P + r.F * !i, "Array", {
            forEach: function (t) {
                return o(this, t, arguments[1])
            }
        })
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e, n) {
        (function (e) {
            (function () {
                var n, r, o, i, u, a;
                "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function () {
                    return performance.now()
                } : void 0 !== e && null !== e && e.hrtime ? (t.exports = function () {
                    return (n() - u) / 1e6
                }, r = e.hrtime, i = (n = function () {
                    var t;
                    return 1e9 * (t = r())[0] + t[1]
                })(), a = 1e9 * e.uptime(), u = i - a) : Date.now ? (t.exports = function () {
                    return Date.now() - o
                }, o = Date.now()) : (t.exports = function () {
                    return (new Date).getTime() - o
                }, o = (new Date).getTime())
            }).call(this)
        }).call(this, n(91))
    }, function (t, e) {
        var n, r, o = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function u() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : u
            } catch (t) {
                r = u
            }
        }();
        var s, c = [], f = !1, l = -1;

        function p() {
            f && s && (f = !1, s.length ? c = s.concat(c) : l = -1, c.length && v())
        }

        function v() {
            if (!f) {
                var t = a(p);
                f = !0;
                for (var e = c.length; e;) {
                    for (s = c, c = []; ++l < e;) s && s[l].run();
                    l = -1, e = c.length
                }
                s = null, f = !1, function (t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
            }
        }

        function d(t, e) {
            this.fun = t, this.array = e
        }

        function h() {
        }

        o.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new d(t, e)), 1 !== c.length || f || a(v)
        }, d.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (t) {
            return []
        }, o.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function () {
            return "/"
        }, o.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function () {
            return 0
        }
    }, function (t, e, n) {
        var r = n(1), o = n(93), i = n(2).f, u = n(33).f, a = n(48), s = n(31), c = r.RegExp, f = c, l = c.prototype,
            p = /a/g, v = /a/g, d = new c(p) !== p;
        if (n(3) && (!d || n(6)(function () {
            return v[n(0)("match")] = !1, c(p) != p || c(v) == v || "/a/i" != c(p, "i")
        }))) {
            c = function (t, e) {
                var n = this instanceof c, r = a(t), i = void 0 === e;
                return !n && r && t.constructor === c && i ? t : o(d ? new f(r && !i ? t.source : t, e) : f((r = t instanceof c) ? t.source : t, r && i ? s.call(t) : e), n ? this : l, c)
            };
            for (var h = function (t) {
                t in c || i(c, t, {
                    configurable: !0, get: function () {
                        return f[t]
                    }, set: function (e) {
                        f[t] = e
                    }
                })
            }, y = u(f), m = 0; y.length > m;) h(y[m++]);
            l.constructor = c, c.prototype = l, n(9)(r, "RegExp", c)
        }
        n(94)("RegExp")
    }, function (t, e, n) {
        var r = n(5), o = n(52).set;
        t.exports = function (t, e, n) {
            var i, u = e.constructor;
            return u !== n && "function" == typeof u && (i = u.prototype) !== n.prototype && r(i) && o && o(t, i), t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1), o = n(2), i = n(3), u = n(0)("species");
        t.exports = function (t) {
            var e = r[t];
            i && e && !e[u] && o.f(e, u, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        var r = n(96);
        "string" == typeof r && (r = [[t.i, r, ""]]);
        var o = {hmr: !0, transform: void 0, insertInto: void 0};
        n(98)(r, o);
        r.locals && (t.exports = r.locals)
    }, function (t, e, n) {
        (t.exports = n(97)(!1)).push([t.i, ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}", ""])
    }, function (t, e) {
        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map(function (e) {
                    var n = function (t, e) {
                        var n = t[1] || "", r = t[3];
                        if (!r) return n;
                        if (e && "function" == typeof btoa) {
                            var o = function (t) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                            }(r), i = r.sources.map(function (t) {
                                return "/*# sourceURL=" + r.sourceRoot + t + " */"
                            });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var u = t[o];
                    "number" == typeof u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(" + u[2] + ") and (" + n + ")"), e.push(u))
                }
            }, e
        }
    }, function (t, e, n) {
        var r = {}, o = function (t) {
            var e;
            return function () {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }(function () {
            return window && document && document.all && !window.atob
        }), i = function (t) {
            var e = {};
            return function (t, n) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var r = function (t, e) {
                        return e ? e.querySelector(t) : document.querySelector(t)
                    }.call(this, t, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (t) {
                        r = null
                    }
                    e[t] = r
                }
                return e[t]
            }
        }(), u = null, a = 0, s = [], c = n(99);

        function f(t, e) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n], i = r[o.id];
                if (i) {
                    i.refs++;
                    for (var u = 0; u < i.parts.length; u++) i.parts[u](o.parts[u]);
                    for (; u < o.parts.length; u++) i.parts.push(y(o.parts[u], e))
                } else {
                    var a = [];
                    for (u = 0; u < o.parts.length; u++) a.push(y(o.parts[u], e));
                    r[o.id] = {id: o.id, refs: 1, parts: a}
                }
            }
        }

        function l(t, e) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o], u = e.base ? i[0] + e.base : i[0], a = {css: i[1], media: i[2], sourceMap: i[3]};
                r[u] ? r[u].parts.push(a) : n.push(r[u] = {id: u, parts: [a]})
            }
            return n
        }

        function p(t, e) {
            var n = i(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = s[s.length - 1];
            if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), s.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = i(t.insertAt.before, n);
                n.insertBefore(e, o)
            }
        }

        function v(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = s.indexOf(t);
            e >= 0 && s.splice(e, 1)
        }

        function d(t) {
            var e = document.createElement("style");
            if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
                var r = function () {
                    0;
                    return n.nc
                }();
                r && (t.attrs.nonce = r)
            }
            return h(e, t.attrs), p(t, e), e
        }

        function h(t, e) {
            Object.keys(e).forEach(function (n) {
                t.setAttribute(n, e[n])
            })
        }

        function y(t, e) {
            var n, r, o, i;
            if (e.transform && t.css) {
                if (!(i = e.transform(t.css))) return function () {
                };
                t.css = i
            }
            if (e.singleton) {
                var s = a++;
                n = u || (u = d(e)), r = g.bind(null, n, s, !1), o = g.bind(null, n, s, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", h(e, t.attrs), p(t, e), e
            }(e), r = function (t, e, n) {
                var r = n.css, o = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (r = c(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var u = new Blob([r], {type: "text/css"}), a = t.href;
                t.href = URL.createObjectURL(u), a && URL.revokeObjectURL(a)
            }.bind(null, n, e), o = function () {
                v(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = d(e), r = function (t, e) {
                var n = e.css, r = e.media;
                r && t.setAttribute("media", r);
                if (t.styleSheet) t.styleSheet.cssText = n; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function () {
                v(n)
            });
            return r(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else o()
            }
        }

        t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = l(t, e);
            return f(n, e), function (t) {
                for (var o = [], i = 0; i < n.length; i++) {
                    var u = n[i];
                    (a = r[u.id]).refs--, o.push(a)
                }
                t && f(l(t, e), e);
                for (i = 0; i < o.length; i++) {
                    var a;
                    if (0 === (a = o[i]).refs) {
                        for (var s = 0; s < a.parts.length; s++) a.parts[s]();
                        delete r[a.id]
                    }
                }
            }
        };
        var m = function () {
            var t = [];
            return function (e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }();

        function g(t, e, n, r) {
            var o = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = m(e, o); else {
                var i = document.createTextNode(o), u = t.childNodes;
                u[e] && t.removeChild(u[e]), u.length ? t.insertBefore(i, u[e]) : t.appendChild(i)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host, r = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                var o, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                    return e
                }).replace(/^'(.*)'$/, function (t, e) {
                    return e
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }]).default
});/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function (f) {
    function A(a, b, d) {
        var c = a[0], g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k, e = d == _update ? {
            checked: c[k],
            disabled: c[n],
            indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate)
        } : c[g];
        if (/^(ch|di|in)/.test(d) && !e) x(a, g); else if (/^(un|en|de)/.test(d) && e) q(a, g); else if (d == _update) for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0); else if (!b || "toggle" == d) {
            if (!b) a[_callback]("ifClicked");
            e ? c[_type] !== r && q(a, g) : x(a, g)
        }
    }

    function x(a, b, d) {
        var c = a[0], g = a.parent(), e = b == k, u = b == _indeterminate, v = b == n,
            s = u ? _determinate : e ? y : "enabled", F = l(a, s + t(c[_type])), B = l(a, b + t(c[_type]));
        if (!0 !== c[b]) {
            if (!d && b == k && c[_type] == r && c.name) {
                var w = a.closest("form"), p = 'input[name="' + c.name + '"]', p = w.length ? w.find(p) : f(p);
                p.each(function () {
                    this !== c && f(this).data(m) && q(f(this), b)
                })
            }
            u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
            D(a, e, b, d)
        }
        c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
        g[_add](B || l(a, b) || "");
        g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
        g[_remove](F || l(a, s) || "")
    }

    function q(a, b, d) {
        var c = a[0], g = a.parent(), e = b == k, f = b == _indeterminate, m = b == n,
            s = f ? _determinate : e ? y : "enabled", q = l(a, s + t(c[_type])), r = l(a, b + t(c[_type]));
        if (!1 !== c[b]) {
            if (f || !d || "force" == d) c[b] = !1;
            D(a, e, s, d)
        }
        !c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
        g[_remove](r || l(a, b) || "");
        g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
        g[_add](q || l(a, s) || "")
    }

    function E(a, b) {
        if (a.data(m)) {
            a.parent().html(a.attr("style", a.data(m).s || ""));
            if (b) a[_callback](b);
            a.off(".i").unwrap();
            f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
        }
    }

    function l(a, b, f) {
        if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")]
    }

    function t(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function D(a, b, f, c) {
        if (!c) {
            if (b) a[_callback]("ifToggled");
            a[_callback]("ifChanged")[_callback]("if" + t(f))
        }
    }

    var m = "iCheck", C = m + "-helper", r = "radio", k = "checked", y = "un" + k, n = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    f.fn[m] = function (a, b) {
        var d = 'input[type="checkbox"], input[type="' + r + '"]', c = f(), g = function (a) {
            a.each(function () {
                var a = f(this);
                c = a.is(d) ? c.add(a) : c.add(a.find(d))
            })
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(), g(this), c.each(function () {
            var c = f(this);
            "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
            f.isFunction(b) && b()
        });
        if ("object" != typeof a && a) return this;
        var e = f.extend({checkedClass: k, disabledClass: n, indeterminateClass: _indeterminate, labelHover: !0}, a),
            l = e.handle, v = e.hoverClass || "hover", s = e.focusClass || "focus", t = e.activeClass || "active",
            B = !!e.labelHover, w = e.labelHoverClass || "hover", p = ("" + e.increaseArea).replace("%", "") | 0;
        if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]';
        -50 > p && (p = -50);
        g(this);
        return c.each(function () {
            var a = f(this);
            E(a);
            var c = this, b = c.id, g = -p + "%", d = 100 + 2 * p + "%", d = {
                    position: "absolute",
                    top: g,
                    left: g,
                    display: "block",
                    width: d,
                    height: d,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                }, g = _mobile ? {position: "absolute", visibility: "hidden"} : p ? d : {position: "absolute", opacity: 0},
                l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
                z = f(_label + '[for="' + b + '"]').add(a.closest(_label)), u = !!e.aria,
                y = m + "-" + Math.random().toString(36).substr(2, 6),
                h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
            u && z.each(function () {
                h += 'aria-labelledby="';
                this.id ? h += this.id : (this.id = y, h += y);
                h += '"'
            });
            h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert);
            d = f('<ins class="' + C + '"/>').css(d).appendTo(h);
            a.data(m, {o: e, s: a.attr("style")}).css(g);
            e.inheritClass && h[_add](c.className || "");
            e.inheritID && b && h.attr("id", m + "-" + b);
            "static" == h.css("position") && h.css("position", "relative");
            A(a, !0, _update);
            if (z.length) z.on(_click + ".i mouseover.i mouseout.i " + _touch, function (b) {
                var d = b[_type], e = f(this);
                if (!c[n]) {
                    if (d == _click) {
                        if (f(b.target).is("a")) return;
                        A(a, !1, !0)
                    } else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));
                    if (_mobile) b.stopPropagation(); else return !1
                }
            });
            a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (b) {
                var d = b[_type];
                b = b.keyCode;
                if (d == _click) return !1;
                if ("keydown" == d && 32 == b) return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)), !1;
                if ("keyup" == d && c[_type] == r) !c[k] && x(a, k); else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s)
            });
            d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (b) {
                var d = b[_type], e = /wn|up/.test(d) ? t : v;
                if (!c[n]) {
                    if (d == _click) A(a, !1, !0); else {
                        if (/wn|er|in/.test(d)) h[_add](e); else h[_remove](e + " " + t);
                        if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove : _add](w)
                    }
                    if (_mobile) b.stopPropagation(); else return !1
                }
            })
        })
    }
})(window.jQuery || window.Zepto);/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory)
    } else if (typeof exports === 'object') {
        factory(require('jquery'))
    } else {
        factory(jQuery)
    }
}(function ($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s)
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s)
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value))
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s
        } catch (e) {
        }
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value
    }

    var config = $.cookie = function (key, value, options) {
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5)
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
        }
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            if (key && key === name) {
                result = read(cookie, value);
                break
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie
            }
        }
        return result
    };
    config.defaults = {};
    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return !1
        }
        $.cookie(key, '', $.extend({}, options, {expires: -1}));
        return !$.cookie(key)
    }
}));
(function ($) {
    "use strict";
    var lastScrollTop = 0;
    var $stickyNavbar = $('.sticky-header');
    var $mobileBreadcrumb = $(".wrapper-mobile-breadcrumb");
    var $mobileBreadcrumbOffsetTop = $mobileBreadcrumb.offset().top;
    var appearNavAllow = !0;
    $(window).on('scroll.hiding', function () {
        var winScrollY = window.scrollY || $(window).scrollTop(), delta = winScrollY - lastScrollTop;
        if (Math.abs(delta) <= 5) {
            return
        }
        if (delta > 0 && winScrollY > $stickyNavbar.outerHeight()) {
            appearNavAllow = !0;
            $stickyNavbar.addClass('hiding');
            $mobileBreadcrumb.addClass('on')
        } else {
            if (appearNavAllow) {
                $stickyNavbar.removeClass('hiding');
                $mobileBreadcrumb.removeClass('on')
            }
        }
        lastScrollTop = winScrollY
    });

    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = window.scrollY || $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('#basePage-up');
            if (windowpos > $stickyNavbar.outerHeight()) {
                siteHeader.addClass('fixed-header');
                scrollLink.addClass('show')
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.removeClass('show')
            }
        }
    }

    headerStyle();
    var mobileWidth = 1400;
    var navcollapse = $('.navigation li.dropdown');
    $(window).on('resize', function () {
        navcollapse.children('ul').hide()
    });
    navcollapse.hover(function () {
        if ($(window).innerWidth() >= mobileWidth) {
            $(this).children('ul').stop(!0, !1, !0).toggle()
        }
    });
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        if ($(window).innerWidth() <= mobileWidth) {
            $('.navigation li.dropdown > a, .navigation li.dropdown > .dropdown-btn').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('ul').toggle()
            })
        }
    }
    $(".wrapper-mobile-breadcrumb").on('click', function () {
        if ($(".wrapper-mobile-breadcrumb ul").is(':visible')) {
            $(".wrapper-mobile-breadcrumb i").removeClass('ti-angle-up').addClass('ti-angle-down');
            $(".wrapper-mobile-breadcrumb ul").slideUp()
        } else {
            $(".wrapper-mobile-breadcrumb i").removeClass('ti-angle-down').addClass('ti-angle-up');
            $(".wrapper-mobile-breadcrumb ul").slideDown()
        }
    });
    $("input[type='checkbox']").iCheck({checkboxClass: 'icheckbox_square-red'});
    $("#basePage-up").on('click', function () {
        $('html, body').animate({scrollTop: $('html').offset().top}, 400)
    });
    $(".select-styled").on('click', function (e) {
        e.stopPropagation();
        if (!$(this).parent().hasClass('disabled')) {
            $(this).toggleClass('active').next('ul.select-options').toggle()
        }
    });
    $(document).on('click', "ul.select-options li", function (e) {
        var $selectOption = $(this).parents('.select-options');
        var selectOptionLiLen = $selectOption.find("li").length;
        $selectOption.find("li").attr('data-checked', '');
        var replaceVal = $(this).data('replace');
        if (typeof replaceVal !== "undefined" && replaceVal != "") {
            $selectOption.prev(".select-styled").html(replaceVal).removeClass('active')
        } else {
            $selectOption.prev(".select-styled").html($(this).html()).removeClass('active')
        }
        $(this).attr('data-checked', 'checked');
        $selectOption.siblings("select.select-hidden").val($(this).attr('data-value')).prop("selected", !0).change();
        if ($selectOption.hasClass('shupple')) {
            for (var i = 0; i < selectOptionLiLen; i++) {
                $selectOption.append($selectOption.find("li[data-seq='" + i + "']"))
            }
            $selectOption.prepend($(this))
        }
        $selectOption.hide()
    });
    $(document).click(function () {
        $(".select-styled").removeClass('active');
        $("ul.select-options").hide()
    });
    if ($('.wow').length) {
        var wow = new WOW({mobile: !1});
        wow.init()
    }

    function factCounter() {
        if ($('.fact-counter').length) {
            $('.fact-counter .column.animated').each(function () {
                var $t = $(this), n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({countNum: $t.find(".count-text").text()}).animate({countNum: n}, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum))
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum)
                        }
                    })
                }
            })
        }
    }

    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({openEffect: 'fade', closeEffect: 'fade', helpers: {media: {}}})
    }

    function customTabProductPageTab() {
        if ($('.custom-tab-title').length) {
            var tabWrap = $('.tab-details-content');
            var tabClicker = $('.custom-tab-title ul li');
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function () {
                if ($("input#search").length && $("input#search").val() != '') {
                    $("input#search").val('');
                    $(".tab-content:visible .single-item").css('display', 'block');
                    $(".tab-content:visible .info-count .status").css('display', 'none');
                    var cntFiltered = $(".tab-content:visible .single-item").length;
                    $(".tab-content:visible .info-count .cnt").text(cntFiltered)
                }
                if ($(".empty-result").length) {
                    $(".empty-result").hide()
                }
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#' + tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div' + id).fadeIn('500');
                return !1
            })
        }
    }

    if ($('.wrapper-latest-album').length) {
        $('.wrapper-latest-album').owlCarousel({
            loop: !0,
            margin: 0,
            dots: !0,
            nav: !0,
            autoplay: 5000,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: {0: {items: 1}, 400: {items: 1}, 600: {items: 1}, 800: {items: 1}, 1200: {items: 1}}
        })
    }
    if ($(window).width() <= 991 && $('.page-home .service-style-five .tab-details-content').length) {
        $('.service-style-five .tab-details-content').owlCarousel({
            loop: !0,
            margin: 0,
            autoplay: 5000,
            nav: !1,
            dots: !0,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsive: {0: {items: 1}, 400: {items: 1}, 600: {items: 1}, 800: {items: 1}, 1200: {items: 2}}
        })
    }
    if ($('.wrapper-partners').length) {
        if ($(window).width() > 992) {
            $('.wrapper-partners ul').owlCarousel({
                loop: !0,
                margin: 0,
                smartSpeed: 250,
                autoplay: !0,
                autoplayTimeout: 1500,
                nav: !1,
                dots: !1,
                responsive: {0: {items: 5,}, 1200: {items: 5}}
            })
        }
    }
    if ($('.page-home .wrapper-project-list').length) {
        $('.wrapper-project-list').owlCarousel({
            loop: !0,
            margin: 40,
            nav: !0,
            autoplay: 5000,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: {0: {items: 1}, 400: {items: 1}, 600: {items: 1}, 800: {items: 2}, 1200: {items: 3}}
        })
    }
    if ($('.main-slider-carousel').length) {
        $('.main-slider-carousel').owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            dots: !0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: 5000,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: {0: {items: 1}, 600: {items: 1}, 1200: {items: 1}}
        })
    }
    if ($('.three-column-carousel').length) {
        $('.three-column-carousel').owlCarousel({
            loop: !0,
            margin: 30,
            nav: !0,
            navText: ['<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow"></span>'],
            responsive: {0: {items: 1}, 480: {items: 1}, 600: {items: 1}, 800: {items: 2}, 1024: {items: 3}}
        })
    }
    if ($(window).width() >= 991 && $('.wrapper-awards-history').length) {
        $('.wrapper-awards-history').owlCarousel({
            loop: !1,
            margin: 15,
            nav: !0,
            dots: !1,
            autoplay: !1,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: {0: {items: 1}, 991: {items: 3}, 1200: {items: 4}, 1700: {items: 5}, 2300: {items: 7}}
        })
    }
    $('.owl-carousel').on('touchstart', 'img', function (e) {
        $(this).closest('.owl-carousel').trigger('stop.owl.autoplay')
    });
    $('.owl-carousel').on('touchend', 'img', function (e) {
        $(this).closest('.owl-carousel').trigger('play.owl.autoplay')
    });
    $('.owl-carousel').on('click', '.owl-dots, .owl-nav', function (e) {
        $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
        $(this).closest('.owl-carousel').trigger('play.owl.autoplay')
    });
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');
            if ($(this).hasClass('active') !== !0) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active')
            }
            if ($(this).next('.acc-content').is(':visible')) {
                return !1
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300)
            }
        })
    }
    if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow')
    }

    function enableMasonry() {
        if ($('.sortable-masonry').length) {
            var winDow = $(window);
            var $container = $('.sortable-masonry .items-container');
            var $filter = $('.filter-btns');
            $container.isotope({
                filter: '*',
                masonry: {columnWidth: '.masonry-item'},
                animationOptions: {duration: 500, easing: 'linear'}
            });
            $filter.find('li').on('click', function () {
                var selector = $(this).attr('data-filter');
                try {
                    $container.isotope({
                        filter: selector,
                        animationOptions: {duration: 500, easing: 'linear', queue: !1}
                    })
                } catch (err) {
                }
                return !1
            });
            winDow.on('resize', function () {
                var selector = $filter.find('li.active').attr('data-filter');
                $container.isotope({filter: selector, animationOptions: {duration: 500, easing: 'linear', queue: !1}})
            });
            var filterItemA = $('.filter-btns li');
            filterItemA.on('click', function () {
                var $this = $(this);
                if (!$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active')
                }
            })
        }
    }

    enableMasonry();
    jQuery(document).on('ready', function () {
        (function ($) {
            customTabProductPageTab();
            if ($(".page-publications").length) {
                var activeTabName = $("ul.tab-title li.active").data('tab-name');
                $(".tab-content").css('display', 'none');
                $(".tab-content#" + activeTabName).css('display', 'block')
            }
        })(jQuery)
    });
    $(window).on('scroll', function () {
        headerStyle();
        factCounter()
    });
    $(window).on('load', function () {
        enableMasonry()
    });
    var typewatch = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms)
        }
    })();
    $("button.navbar-toggle").on('click', function (e) {
        e.preventDefault();
        if ($(".header-bottom .navbar-collapse").is(":visible")) {
            $(".header-bottom .navbar-collapse").hide();
            $("html, body").css('overflow', 'auto');
            $("html, body").css('overflow-x', 'hidden')
        } else {
            $(".header-bottom .navbar-collapse").show();
            $("html, body").css('overflow', 'hidden')
        }
        console.log('a')
    });
    if ($(".page-location").length > 0) {
        var container = document.getElementById('lab_map');
        var options = {center: new daum.maps.LatLng(37.582672, 127.026438), level: 3};
        var map = new daum.maps.Map(container, options);
        map.setZoomable(!1);
        var zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
        var markerPosition = new daum.maps.LatLng(37.582672, 127.026438);
        var marker = new daum.maps.Marker({position: markerPosition});
        var markerPosition2 = new daum.maps.LatLng(37.583291, 127.025966);
        var marker2 = new daum.maps.Marker({position: markerPosition2});
        marker.setMap(map);
        marker2.setMap(map)
    }
    if ($('#typewriter-research').length) {
        var app = document.getElementById('typewriter-research');
        var writer = new Typewriter(app, {loop: !0, delay: 50});
        writer.typeString('Deep Reinforcement Learning/Machine Learning (강화 학습/기계 학습)').pauseFor(1500).deleteAll(20).typeString('Intelligent Networking on 5G/6G').pauseFor(1500).deleteAll(25).typeString('Internet of Things (사물인터넷)').pauseFor(1500).deleteAll(25).typeString('Smart Factory (스마트 팩토리)').pauseFor(1500).deleteAll(25).typeString('Financial Engineering (금융 공학)').pauseFor(1000).deleteAll(35).start()
    }
    if ($(window).width() <= 991 && $('.fact-counter .column').length) {
        $('.fact-counter .count-text').each(function () {
            $(this).text($(this).data('stop'))
        })
    }
    if ($(window).width() >= 992 && $('.page-members-professor').length) {
        let win = $(window);
        let body = $('body');
        let mainProfile = $(".wrapper-profile");
        let mainProfileWidth = $(".wrapper-profile").width();
        let mainProfileTopOffset = mainProfile.offset().top;
        let lastScrollTop = 0;
        win.scroll(function () {
            let scrollY = win.scrollY || win.scrollTop();
            if (scrollY >= mainProfileTopOffset - 120) {
                mainProfile.addClass('fixed');
                mainProfile.css('width', mainProfileWidth);
                console.log('a')
            } else {
                mainProfile.removeClass('fixed');
                mainProfile.css('width', 'initial')
            }
        })
    }
    if ($(".page-publications").length) {
        $("input#search").on('keyup', function () {
            var $thisElement = $(this);
            typewatch(function () {
                var searchInput = $thisElement.val();
                if (searchInput == "") {
                    $(".tab-content:visible .info-count .status").css('display', 'none')
                } else {
                    $(".tab-content:visible .info-count .status").css('display', 'inline')
                }
                $(".tab-content:visible .single-item").css('display', 'none');
                var cntFiltered = $(".tab-content:visible h5:contains('" + searchInput + "')").length;
                $(".tab-content:visible .info-count .cnt").text(cntFiltered);
                $(".tab-content:visible h5:contains('" + searchInput + "')").parent().css('display', 'block');
                $(".empty-result").hide();
                if (cntFiltered == 0) {
                    $(".tab-content:visible .empty-result").show()
                }
            }, 300)
        })
    }
    if ($(".page-projects").length) {
        var get_project_item_by_filter = function (currentPageNo, paging) {
            if (currentPageNo === undefined) {
                currentPageNo = 1
            }
            if (paging === undefined) {
                paging = !1
            }
            var pageNo = currentPageNo;
            var category = $(".filter-category li.active").text().replace("&", "and");
            var keyword = $.map($('.filter-keyword input:checked'), function (n, i) {
                return n.value
            }).join(',');
            var search = $("input#search").val();
            var encodedQueryString = "&" + encodeURIComponent("c=" + category) + "&" + encodeURIComponent("k=" + keyword) + "&" + encodeURIComponent("s=" + search);
            history.replaceState(null, null, baseUrl + "research/projects" + "?p=" + pageNo + encodedQueryString);
            $.ajax({
                url: baseUrl + "research/get_project_list_ajax",
                method: "GET",
                data: {p: pageNo, c: category, k: keyword, s: search},
                dataType: "json",
            }).done(function (data) {
                if (data.response === "success") {
                    var projectHtml = "";
                    var projectData = data.project_items;
                    var lenProjectData = projectData.length;
                    for (var i = 0; i < lenProjectData; i++) {
                        projectHtml += "<div class='col-xl-4 col-lg-4 col-md-12 col-sm-12' style='display:none;'>\
									            <div class='item-project'>\
									              <div class='single-blog-post'>\
									                <div class='wrapper-img-holder'>\
									                  <div class='img-holder' style='background-image:url(\"" + baseUrl + "uploads/projects/" + projectData[i].thumb_img_url + "\"')'></div>\
									                  <div class='overlay'>\
									                    <div class='wrapper'>\
									                      <a href='" + baseUrl + "research/projects/" + projectData[i].no + "'><i class='ti-plus'></i></a>\
									                    </div>\
									                  </div>\
									                </div>\
									                <div class='text-holder'>\
									                  <div class='meta-box'>\
									                    <ul class='meta-info'>\
									                      <li>" + projectData[i].category + "</li>\
									                    </ul>\
									                  </div>\
									                  <h3 class='blog-title'><a href='" + baseUrl + "research/projects/" + projectData[i].no + "' class='line-clamp line-clamp-2'>" + projectData[i].title + "(" + projectData[i].partner + ")</a></h3>\
									                  <div class='text-box'>\
									                    <p class='line-clamp line-clamp-2'>" + projectData[i].content + "</p>\
									                  </div>\
									                  <div class='line-keyword'>";
                        var kLength = projectData[i].keyword.length;
                        for (var j = 0; j < kLength; j++) {
                            projectHtml += "<span class='keyword'>#" + jQuery.trim(projectData[i].keyword[j]) + "</span> "
                        }
                        projectHtml += "</div>\
									                  <div class='line-period'>\
									                  	<i class='fa fa-calendar'></i> " + projectData[i].start_date + " ~ " + projectData[i].end_date + "\
									                  </div>\
									                  <div class='line-footer'>\
									                    <a class='btn-two' href='" + baseUrl + "research/projects/" + projectData[i].no + "'>Read More<span class='flaticon-next'></span></a>\
									                  </div>\
									                </div>\
									              </div>\
									            </div>\
									          </div>"
                    }
                    $(".info-count .cnt").text(data.total_cnt_item);
                    $("#pagination").html(data.pagination);
                    $(".wrapper-project-list").html(projectHtml);
                    $(".wrapper-project-list div[class^='col']").fadeIn(400);
                    if (data.total_cnt_item == 0) {
                        $(".wrapper-project-list").html("<div class='empty-result'>필터 조건에 맞는 결과가 없습니다.</div>")
                    }
                    if (paging) {
                        $("html, body").scrollTop(0, 0)
                    }
                }
            }).fail(function (data) {
            }).always(function () {
            })
        }
        var checkedIsFiltering = function () {
            var categoryVal = $(".filter-category ul:not(.select-options) li.active").text();
            var checkedKeyword = $("input[name='keyword']:checked");
            var searchInput = $("input#search").val();
            if (searchInput != "" || checkedKeyword.length > 0 || categoryVal != 'ALL') {
                $(".info-count .status").css('display', 'inline')
            } else {
                $(".info-count .status").css('display', 'none')
            }
        };
        $(".filter-category ul:not(.select-options) li").on('click', function () {
            var activeItem = $(this).text();
            $(".filter-category ul:not(.select-options) li").removeClass('active');
            $(this).addClass('active');
            $(".filter-category .select-styled").text(activeItem);
            $(".filter-category ul.select-options li").attr('data-checked', '');
            $(".filter-category ul.select-options li[data-value='" + activeItem + "']").attr('data-checked', 'checked');
            get_project_item_by_filter();
            checkedIsFiltering()
        });
        $(".filter-category ul.select-options li").on('click', function () {
            var activeItemIndex = $(".filter-category ul.select-options li").index($(this));
            $(".filter-category ul:not(.select-options) li").removeClass('active');
            $(".filter-category ul:not(.select-options) li").eq(activeItemIndex).addClass('active');
            get_project_item_by_filter();
            checkedIsFiltering()
        });
        $("input[name='keyword']").on('ifChanged', function () {
            get_project_item_by_filter();
            checkedIsFiltering()
        });
        $("input#search").on('keyup', function () {
            typewatch(function () {
                get_project_item_by_filter();
                checkedIsFiltering()
            }, 300)
        });
        $(document).on('click', 'ul.pagination li a', function (e) {
            e.preventDefault();
            get_project_item_by_filter($(this).data('ci-pagination-page'), !0)
        });
        $(".btn-show-more").on('click', function () {
            if ($(".filter-keyword ul").hasClass('show')) {
                $(".filter-keyword ul").removeClass('show');
                $(".btn-show-more").html("<i class='fa fa-caret-down'></i> 더보기")
            } else {
                $(".filter-keyword ul").addClass('show');
                $(".btn-show-more").html("<i class='fa fa-caret-up'></i> 숨기기")
            }
        })
    }
    if ($(".page-essay").length) {
        var get_essay_item_by_filter = function (currentPageNo, paging) {
            if (currentPageNo === undefined) {
                currentPageNo = 1
            }
            if (paging === undefined) {
                paging = !1
            }
            var pageNo = currentPageNo;
            var search = $("input#search").val();
            var encodedQueryString = "&" + encodeURIComponent("s=" + search);
            history.replaceState(null, null, baseUrl + "activity/essay" + "?p=" + pageNo + encodedQueryString);
            $.ajax({
                url: baseUrl + "activity/get_essay_list_ajax",
                method: "GET",
                data: {p: pageNo, s: search},
                dataType: "json",
            }).done(function (data) {
                if (data.response === "success") {
                    var essayHtml = "";
                    var essayData = data.essay_items;
                    var lenEssayData = essayData.length;
                    for (var i = 0; i < lenEssayData; i++) {
                        essayHtml += "<tr style='display:none;'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" + essayData[i].d + "</div>\
                        <span class='date-ym'>" + essayData[i].ym + "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" + baseUrl + "activity/essay/" + essayData[i].no + "'>\
                        <h2 class='sbj'>" + essayData[i].title + "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" + essayData[i].content + "</div>\
                        <div class='person'>\
                          <div class='content'>\
                            <span>Written by</span>\
                            <img src='" + essayData[i].writer.thumb_img_url + "' alt='" + essayData[i].writer.name + "'>\
                            <b>" + essayData[i].writer.name + "</b>\
                          </div>\
                        </div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" + essayData[i].regist_date + "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" + baseUrl + "activity/essay/" + essayData[i].no + "'>Read More</a>\
                    </td>\
                  </tr>"
                    }
                    $(".info-count .cnt").text(data.total_cnt_item);
                    $("#pagination").html(data.pagination);
                    $(".board-list tbody").html(essayHtml);
                    $(".board-list tbody tr").fadeIn(400);
                    if (data.total_cnt_item == 0) {
                        $(".board-list tbody").html("<tr><td class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>")
                    }
                    if (paging) {
                        $("html, body").scrollTop(0, 0)
                    }
                }
            }).fail(function (data) {
            }).always(function () {
            })
        }
        var checkedIsFiltering = function () {
            var searchInput = $("input#search").val();
            if (searchInput != "") {
                $(".info-count .status").css('display', 'inline')
            } else {
                $(".info-count .status").css('display', 'none')
            }
        };
        $("input#search").on('keyup', function () {
            typewatch(function () {
                get_essay_item_by_filter();
                checkedIsFiltering()
            }, 300)
        });
        $(document).on('click', 'ul.pagination li a', function (e) {
            e.preventDefault();
            get_essay_item_by_filter($(this).data('ci-pagination-page'), !0)
        })
    }
    if ($(".page-conference").length) {
        var get_conference_item_by_filter = function (currentPageNo, paging) {
            if (currentPageNo === undefined) {
                currentPageNo = 1
            }
            if (paging === undefined) {
                paging = !1
            }
            var pageNo = currentPageNo;
            var search = $("input#search").val();
            var encodedQueryString = "&" + encodeURIComponent("s=" + search);
            history.replaceState(null, null, baseUrl + "activity/conference" + "?p=" + pageNo + encodedQueryString);
            $.ajax({
                url: baseUrl + "activity/get_conference_list_ajax",
                method: "GET",
                data: {p: pageNo, s: search},
                dataType: "json",
            }).done(function (data) {
                if (data.response === "success") {
                    var conferenceHtml = "";
                    var conferenceData = data.conference_items;
                    var lenConferenceData = conferenceData.length;
                    for (var i = 0; i < lenConferenceData; i++) {
                        conferenceHtml += "<tr style='display:none;'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" + conferenceData[i].d + "</div>\
                        <span class='date-ym'>" + conferenceData[i].ym + "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" + baseUrl + "activity/conference/" + conferenceData[i].no + "'>\
                        <h2 class='sbj'>" + conferenceData[i].title + "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" + conferenceData[i].content + "</div>\
                        <div class='person'>\
                          <div class='content'>\
                            <span>Reviewed by</span>\
                            <img src='" + conferenceData[i].writer.thumb_img_url + "' alt='" + conferenceData[i].writer.name + "'>\
                            <b>" + conferenceData[i].writer.name + "</b>\
                          </div>\
                        </div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" + conferenceData[i].regist_date + "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" + baseUrl + "activity/conference/" + conferenceData[i].no + "'>Read More</a>\
                    </td>\
                  </tr>"
                    }
                    $(".info-count .cnt").text(data.total_cnt_item);
                    $("#pagination").html(data.pagination);
                    $(".board-list tbody").html(conferenceHtml);
                    $(".board-list tbody tr").fadeIn(400);
                    if (data.total_cnt_item == 0) {
                        $(".board-list tbody").html("<tr><td class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>")
                    }
                    if (paging) {
                        $("html, body").scrollTop(0, 0)
                    }
                }
            }).fail(function (data) {
            }).always(function () {
            })
        }
        var checkedIsFiltering = function () {
            var searchInput = $("input#search").val();
            if (searchInput != "") {
                $(".info-count .status").css('display', 'inline')
            } else {
                $(".info-count .status").css('display', 'none')
            }
        };
        $("input#search").on('keyup', function () {
            typewatch(function () {
                get_conference_item_by_filter();
                checkedIsFiltering()
            }, 300)
        });
        $(document).on('click', 'ul.pagination li a', function (e) {
            e.preventDefault();
            get_conference_item_by_filter($(this).data('ci-pagination-page'), !0)
        })
    }
    if ($(".page-lab-news").length) {
        var get_news_item_by_filter = function (currentPageNo, paging) {
            if (currentPageNo === undefined) {
                currentPageNo = 1
            }
            if (paging === undefined) {
                paging = !1
            }
            var pageNo = currentPageNo;
            var search = $("input#search").val();
            var encodedQueryString = "&" + encodeURIComponent("s=" + search);
            history.replaceState(null, null, baseUrl + "activity/news" + "?p=" + pageNo + encodedQueryString);
            $.ajax({
                url: baseUrl + "activity/get_news_list_ajax",
                method: "GET",
                data: {p: pageNo, s: search},
                dataType: "json",
            }).done(function (data) {
                if (data.response === "success") {
                    var newsHtml = "";
                    var noticeData = data.notice_items;
                    var lenNoticeData = noticeData.length;
                    for (var i = 0; i < lenNoticeData; i++) {
                        newsHtml += "<tr style='display:none;'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" + noticeData[i].d + "</div>\
                        <span class='date-ym'>" + noticeData[i].ym + "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" + baseUrl + "activity/news/" + noticeData[i].no + "'>\
                        <h2 class='sbj'><i class='ti-pin-alt'></i> " + noticeData[i].title + "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" + noticeData[i].content + "</div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" + noticeData[i].regist_date + "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" + baseUrl + "activity/news/" + noticeData[i].no + "'>Read More</a>\
                    </td>\
                  </tr>"
                    }
                    var newsData = data.news_items;
                    var lenNewsData = newsData.length;
                    for (var i = 0; i < lenNewsData; i++) {
                        newsHtml += "<tr style='display:none;'>\
                    <td class='bbs-date'>\
                      <div class='date-area'>\
                        <div class='date-d'>" + newsData[i].d + "</div>\
                        <span class='date-ym'>" + newsData[i].ym + "</span>\
                      </div>\
                    </td>\
                    <td class='bbs-title'>\
                      <a href='" + baseUrl + "activity/news/" + newsData[i].no + "'>\
                        <h2 class='sbj'>" + newsData[i].title + "</h2>\
                        <div class='txt line-clamp line-clamp-2'>" + newsData[i].content + "</div>\
                        <div class='mobile-date'><i class='ti-calendar'></i>" + newsData[i].regist_date + "</div>\
                      </a>\
                    </td>\
                    <td class='btn-more'>\
                      <a href='" + baseUrl + "activity/news/" + newsData[i].no + "'>Read More</a>\
                    </td>\
                  </tr>"
                    }
                    $(".info-count .cnt").text(data.total_cnt_item);
                    $("#pagination").html(data.pagination);
                    $(".board-list tbody").html(newsHtml);
                    $(".board-list tbody tr").fadeIn(400);
                    if (lenNoticeData > 0 && data.not_notice_total_cnt == 0) {
                        $(".board-list tbody").append("<tr><td colspan='3' class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>")
                    } else if (lenNoticeData == 0 && data.not_notice_total_cnt == 0) {
                        $(".board-list tbody").html("<tr><td class='empty-result'>필터 조건에 맞는 결과가 없습니다.</td></tr>")
                    }
                    if (paging) {
                        $("html, body").scrollTop(0, 0)
                    }
                }
            }).fail(function (data) {
            }).always(function () {
            })
        }
        var checkedIsFiltering = function () {
            var searchInput = $("input#search").val();
            if (searchInput != "") {
                $(".info-count .status").css('display', 'inline')
            } else {
                $(".info-count .status").css('display', 'none')
            }
        };
        $("input#search").on('keyup', function () {
            typewatch(function () {
                get_news_item_by_filter();
                checkedIsFiltering()
            }, 300)
        });
        $(document).on('click', 'ul.pagination li a', function (e) {
            e.preventDefault();
            get_news_item_by_filter($(this).data('ci-pagination-page'), !0)
        })
    }
    if ($(".page-lab-album").length) {
        var get_album_item_by_filter = function (currentPageNo, paging) {
            if (currentPageNo === undefined) {
                currentPageNo = 1
            }
            if (paging === undefined) {
                paging = !1
            }
            var pageNo = currentPageNo;
            var search = $("input#search").val();
            var encodedQueryString = "&" + encodeURIComponent("s=" + search);
            history.replaceState(null, null, baseUrl + "activity/album" + "?p=" + pageNo + encodedQueryString);
            $.ajax({
                url: baseUrl + "activity/get_album_list_ajax",
                method: "GET",
                data: {p: pageNo, s: search},
                dataType: "json",
            }).done(function (data) {
                if (data.response === "success") {
                    var albumHtml = "";
                    var albumData = data.album_items;
                    var lenAlubmData = albumData.length;
                    for (var i = 0; i < lenAlubmData; i++) {
                        albumHtml += "<div class='col-lg-4 col-md-6 col-sm-12 news-column'>\
                  <div class='single-news-content' style='background-image:url(\"" + baseUrl + "uploads/album/" + albumData[i].thumb_img_url + "\")'>\
                    <div class='content-box'>\
                      <h5><a href='" + baseUrl + "activity/album/" + albumData[i].no + "'>" + albumData[i].title + "</a></h5>\
                      <ul class='info-content'>\
                        <li>" + albumData[i].regist_date + "</li>\
                      </ul>\
                    </div>\
                    <div class='overlay'>\
                      <div class='wrapper'>\
                        <a href='" + baseUrl + "activity/album/" + albumData[i].no + "'><i class='ti-plus'></i></a>\
                      </div>\
                    </div>\
                  </div>\
                </div>"
                    }
                    $(".info-count .cnt").text(data.total_cnt_item);
                    $("#pagination").html(data.pagination);
                    $(".default-blog-content .row").html(albumHtml);
                    $(".default-blog-content .row .news-column").fadeIn(400);
                    if (data.total_cnt_item == 0) {
                        $(".default-blog-content .row").html("<div class='empty-result'>필터 조건에 맞는 결과가 없습니다.</div>")
                    }
                    if (paging) {
                        $("html, body").scrollTop(0, 0)
                    }
                }
            }).fail(function (data) {
            }).always(function () {
            })
        }
        var checkedIsFiltering = function () {
            var searchInput = $("input#search").val();
            if (searchInput != "") {
                $(".info-count .status").css('display', 'inline')
            } else {
                $(".info-count .status").css('display', 'none')
            }
        };
        $("input#search").on('keyup', function () {
            typewatch(function () {
                get_album_item_by_filter();
                checkedIsFiltering()
            }, 300)
        });
        $(document).on('click', 'ul.pagination li a', function (e) {
            e.preventDefault();
            get_album_item_by_filter($(this).data('ci-pagination-page'), !0)
        })
    }
    if ($(".page-seminar").length) {
        var get_seminar_item_by_filter = function (currentPageNo, paging) {
            if (currentPageNo === undefined) {
                currentPageNo = 1
            }
            if (paging === undefined) {
                paging = !1
            }
            var pageNo = currentPageNo;
            var search = $.trim($("input#search").val());
            var encodedQueryString = "&" + encodeURIComponent("s=" + search);
            history.replaceState(null, null, baseUrl + "activity/seminar" + "?p=" + pageNo + encodedQueryString);
            $.ajax({
                url: baseUrl + "activity/get_seminar_list_ajax",
                method: "GET",
                data: {p: pageNo, s: search},
                dataType: "json",
            }).done(function (data) {
                if (data.response === "success") {
                    var seminarHtml = "";
                    var seminarData = data.seminar_items;
                    var lenSeminarData = seminarData.length;
                    for (var i = 0; i < lenSeminarData; i++) {
                        seminarHtml += "<div class='col-xl-4 col-lg-4 col-md-12 col-sm-12 news-column'>\
									            <div class='single-news-content inner-box big-column'>";
                        if (seminarData[i].dday == '종료') {
                            seminarHtml += "<div class='dday black'>" + seminarData[i].dday + "</div>"
                        } else {
                            seminarHtml += "<div class='dday'>" + seminarData[i].dday + "</div>"
                        }
                        seminarHtml += "<figure class='image-box'>\
								                <img src='" + baseUrl + "uploads/seminar/dummy_image.jpg' alt='" + seminarData[i].title + "'>\
								                <div class='real-img' style='background-image:url(\"" + baseUrl + "uploads/seminar/" + seminarData[i].thumb_img_url + "\")'>\
								                <div class='overlay'>\
								                  <div class='wrapper'>\
								                    <a href='" + baseUrl + "activity/seminar/" + seminarData[i].no + "'><i class='ti-plus'></i></a>\
								                  </div>\
								                </div>\
								              </figure>\
								              <div class='content-box'>\
								                <h4><a href='" + baseUrl + "activity/seminar/" + seminarData[i].no + "'>" + seminarData[i].title + "</a></h4>\
								                <div class='person'>\
								                  <div class='content'>\
								                    <span>발표자: </span>\
								                    <img src='" + seminarData[i].presenter.thumb_img_url + "' alt='" + seminarData[i].presenter.name + "'>\
								                    <b>" + seminarData[i].presenter.name + "</b>\
								                  </div>\
								                </div>\
								                <ul class='pdt-info-content'>\
								                  <li><i class='ti-calendar'></i><span>" + seminarData[i].start_date + "</span></li>\
								                  <li><i class='ti-alarm-clock'></i><span>" + seminarData[i].start_time + "</span></li>\
								                  <li><i class='ti-location-pin'></i><span>" + seminarData[i].place + "</span></li>\
								                </ul>\
								              </div>\
								              <div class='line-footer'><a href='" + baseUrl + "activity/seminar/" + seminarData[i].no + "'>세미나 정보 보기<span class='flaticon-next'></span></a></div>\
								            </div>\
								          </div>"
                    }
                    $(".info-count .cnt").text(data.total_cnt_item);
                    $("#pagination").html(data.pagination);
                    $(".wrapper-seminar-list").html(seminarHtml);
                    $(".wrapper-seminar-list .news-column").fadeIn(400);
                    if (data.total_cnt_item == 0) {
                        $(".wrapper-seminar-list").html("<div class='empty-result'>필터 조건에 맞는 결과가 없습니다.</div>")
                    }
                    if (paging) {
                        $("html, body").scrollTop(0, 0)
                    }
                }
            }).fail(function (data) {
            }).always(function () {
            })
        }
        var checkedIsFiltering = function () {
            var searchInput = $("input#search").val();
            if (searchInput != "") {
                $(".info-count .status").css('display', 'inline')
            } else {
                $(".info-count .status").css('display', 'none')
            }
        };
        $("input#search").on('keyup', function () {
            typewatch(function () {
                get_seminar_item_by_filter();
                checkedIsFiltering()
            }, 300)
        });
        $(document).on('click', 'ul.pagination li a', function (e) {
            e.preventDefault();
            get_seminar_item_by_filter($(this).data('ci-pagination-page'), !0)
        })
    }
    if ($(".page-open-courses").length) {
        $(window).scroll(function () {
            if ($(window).data('ajaxready') == !1) return;
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                if ($("input[name='next-token']").val() != '') {
                    $(window).data('ajaxready', !1);
                    $.ajax({
                        url: baseUrl + "research/open_courses_ajax",
                        method: "POST",
                        data: {next_page_token: $("input[name='next-token']").val(), dmqat: $.cookie('dmqac')},
                        dataType: "json",
                    }).done(function (data) {
                        if (data.response === "success") {
                            var videoHtml = "";
                            if (data.video.nextPageToken !== undefined) {
                                $("input[name='next-token']").val(data.video.nextPageToken)
                            } else {
                                $("input[name='next-token']").val('')
                            }
                            var cntItem = data.video.items.length;
                            for (var i = 0; i < cntItem; i++) {
                                if (data.video.items[i].id.videoId !== undefined) {
                                    var date = data.video.items[i].snippet.publishedAt.split('T')[0]
                                    videoHtml += "<div class='col-xl-4 col-lg-6 col-md-12 col-sm-12'>\
											            <div class='youtube-video'>\
											              <iframe width='100%' height='300' src='https://www.youtube.com/embed/" + data.video.items[i].id.videoId + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>\
											              <div class='content'>\
											                <h2 class='title line-clamp line-clamp-2'>" + data.video.items[i].snippet.title + "</h2>\
											                <div class='desc line-clamp line-clamp-2'>" + data.video.items[i].snippet.description + "</div>\
											                <div class='meta-info'>\
											                  <span><i class='ti-calendar'></i> " + date + "</span>\
											                </div>\
											              </div>\
											            </div>\
											          </div>"
                                }
                            }
                            $(".wrapper-youtube-list").append(videoHtml);
                            console.log('fire');
                            $(window).data('ajaxready', !0)
                        }
                    }).fail(function (data) {
                    }).always(function () {
                    })
                }
            }
        })
    }
})(window.jQuery)
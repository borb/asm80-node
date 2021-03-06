Array.indexOf ||
  (Array.prototype.indexOf = function (t, s) {
    for (var e = s || 0; e < this.length; e++) if (this[e] === t) return e;
    return -1;
  });
var Parser = (function (t) {
  function s(t) {
    function s() {}
    return (s.prototype = t), new s();
  }
  function e(t, s, e, i) {
    (this.type_ = t),
      (this.index_ = s || 0),
      (this.prio_ = e || 0),
      (this.number_ = void 0 !== i && null !== i ? i : 0),
      (this.toString = function () {
        switch (this.type_) {
          case O:
            return this.number_;
          case S:
          case P:
          case I:
            return this.index_;
          case L:
            return "CALL";
          default:
            return "Invalid Token";
        }
      });
  }
  function i(t, s, e, i) {
    (this.tokens = t), (this.ops1 = s), (this.ops2 = e), (this.functions = i);
  }
  function n(t) {
    return "string" == typeof t
      ? ((j.lastIndex = 0),
        j.test(t)
          ? "'" +
            t.replace(j, function (t) {
              var s = q[t];
              return "string" == typeof s
                ? s
                : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
            }) +
            "'"
          : "'" + t + "'")
      : t;
  }
  function r(t) {
    for (var s = 0, e = 0; e < t.length; e++)
      (s *= 256), (s += t.charCodeAt(e));
    return s;
  }
  function o(t, s) {
    return (
      "string" == typeof t && (t = r(t)),
      "string" == typeof s && (s = r(s)),
      Number(t) + Number(s)
    );
  }
  function h(t, s) {
    return Number(t) & Number(s);
  }
  function p(t, s) {
    return Number(t) | Number(s);
  }
  function u(t, s) {
    return Number(t) == Number(s) ? 1 : 0;
  }
  function a(t, s) {
    return Number(t) == Number(s) ? 0 : 1;
  }
  function f(t, s) {
    return Number(t) < Number(s) ? 1 : 0;
  }
  function c(t, s) {
    return Number(t) > Number(s) ? 1 : 0;
  }
  function l(t, s) {
    return Number(t) <= Number(s) ? 1 : 0;
  }
  function x(t, s) {
    return Number(t) >= Number(s) ? 1 : 0;
  }
  function d(t, s) {
    return (
      "string" == typeof t && (t = r(t)),
      "string" == typeof s && (s = r(s)),
      Number(t) - Number(s)
    );
  }
  function g(t, s) {
    if ("string" == typeof t) {
      for (var e = "", i = 0; i < s; i++) e += t;
      return e;
    }
    return t * s;
  }
  function b(t, s) {
    return t / s;
  }
  function _(t, s) {
    return t % s;
  }
  function k(t, s) {
    return "" + t + s;
  }
  function m(t) {
    return -t;
  }
  function v(t) {
    return Math.random() * (t || 1);
  }
  function w(t) {
    for (var s = (t = Math.floor(t)); t > 1; ) s *= --t;
    return s;
  }
  function M(t, s) {
    return Math.sqrt(t * t + s * s);
  }
  function y(t) {
    return t > 127 ? 0 : t < -128 ? 0 : 1;
  }
  function A(t, s) {
    return "[object Array]" != Object.prototype.toString.call(t)
      ? [t, s]
      : ((t = t.slice()).push(s), t);
  }
  function C(t) {
    return t % 256;
  }
  function N(t) {
    return (t >> 8) & 255;
  }
  function E() {
    (this.success = !1),
      (this.errormsg = ""),
      (this.expression = ""),
      (this.pos = 0),
      (this.tokennumber = 0),
      (this.tokenprio = 0),
      (this.tokenindex = 0),
      (this.tmpprio = 0),
      (this.ops1 = {
        lsb: C,
        msb: N,
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        asin: Math.asin,
        acos: Math.acos,
        atan: Math.atan,
        sqrt: Math.sqrt,
        log: Math.log,
        abs: Math.abs,
        ceil: Math.ceil,
        floor: Math.floor,
        round: Math.round,
        isnear: y,
        "-": m,
        exp: Math.exp,
      }),
      (this.ops2 = {
        "+": o,
        "-": d,
        "*": g,
        "/": b,
        "%": _,
        "#": _,
        "^": Math.pow,
        ",": A,
        "=": u,
        "!=": a,
        "<": f,
        ">": c,
        "<=": l,
        ">=": x,
        "&": h,
        "|": p,
        "||": k,
      }),
      (this.functions = {
        random: v,
        fac: w,
        min: Math.min,
        max: Math.max,
        pyt: M,
        isnear: y,
        pow: Math.pow,
        atan2: Math.atan2,
      }),
      (this.consts = {});
  }
  var O = 0,
    S = 1,
    P = 2,
    I = 3,
    L = 4,
    j = /[\\\'\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    q = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\",
    };
  (i.prototype = {
    simplify: function (t) {
      t = t || {};
      var n,
        r,
        o,
        h,
        p = [],
        u = [],
        a = this.tokens.length,
        f = 0;
      for (f = 0; f < a; f++) {
        var c = (h = this.tokens[f]).type_;
        if (c === O) p.push(h);
        else if (c === I && h.index_ in t)
          (h = new e(O, 0, 0, t[h.index_])), p.push(h);
        else if (c === P && p.length > 1)
          (r = p.pop()),
            (n = p.pop()),
            (o = this.ops2[h.index_]),
            (h = new e(O, 0, 0, o(n.number_, r.number_))),
            p.push(h);
        else if (c === S && p.length > 0)
          (n = p.pop()),
            (o = this.ops1[h.index_]),
            (h = new e(O, 0, 0, o(n.number_))),
            p.push(h);
        else {
          for (; p.length > 0; ) u.push(p.shift());
          u.push(h);
        }
      }
      for (; p.length > 0; ) u.push(p.shift());
      return new i(u, s(this.ops1), s(this.ops2), s(this.functions));
    },
    substitute: function (t, n) {
      n instanceof i || (n = new E().parse(String(n)));
      var r,
        o = [],
        h = this.tokens.length,
        p = 0;
      for (p = 0; p < h; p++)
        if ((r = this.tokens[p]).type_ === I && r.index_ === t)
          for (var u = 0; u < n.tokens.length; u++) {
            var a = n.tokens[u],
              f = new e(a.type_, a.index_, a.prio_, a.number_);
            o.push(f);
          }
        else o.push(r);
      return new i(o, s(this.ops1), s(this.ops2), s(this.functions));
    },
    evaluate: function (t) {
      t = t || {};
      var s,
        e,
        i,
        n,
        r = [],
        o = this.tokens.length,
        h = 0;
      for (h = 0; h < o; h++) {
        var p = (n = this.tokens[h]).type_;
        if (p === O) r.push(n.number_);
        else if (p === P)
          (e = r.pop()),
            (s = r.pop()),
            (i = this.ops2[n.index_]),
            r.push(i(s, e));
        else if (p === I)
          if (((n.index_ = n.index_.toUpperCase()), "<" === n.index_[0]))
            n.index_.substr(1) in t && r.push(t[n.index_.substr(1)] % 256);
          else if (">" === n.index_[0])
            n.index_.substr(1) in t &&
              r.push(Math.floor(t[n.index_.substr(1)] / 256));
          else if (n.index_ in t) r.push(t[n.index_]);
          else {
            if (!(n.index_ in this.functions))
              throw new Error("undefined variable: " + n.index_);
            r.push(this.functions[n.index_]);
          }
        else if (p === S)
          (s = r.pop()), (i = this.ops1[n.index_]), r.push(i(s));
        else {
          if (p !== L) throw new Error("invalid Expression");
          if (((s = r.pop()), !(i = r.pop()).apply || !i.call))
            throw new Error(i + " is not a function");
          "[object Array]" == Object.prototype.toString.call(s)
            ? r.push(i.apply(void 0, s))
            : r.push(i.call(void 0, s));
        }
      }
      if (r.length > 1) throw new Error("invalid Expression (parity)");
      var u = r[0],
        a = t.__PRAGMAS;
      if (a && "number" == typeof u) {
        if (
          (a.indexOf("ROUNDFLOAT") >= 0 && (u = Math.round(u)),
          a.indexOf("FLOAT") >= 0)
        )
          return u;
        if (a.indexOf("NOFLOAT") >= 0) return parseInt(u);
      }
      return "number" == typeof u && (u = parseInt(u)), u;
    },
    usage: function (t) {
      t = t || {};
      var s,
        e,
        i,
        n,
        r = [],
        o = [],
        h = this.tokens.length,
        p = 0;
      for (p = 0; p < h; p++) {
        var u = (n = this.tokens[p]).type_;
        if (u === O) o.push(n.number_);
        else if (u === P)
          (e = o.pop()),
            (s = o.pop()),
            (i = this.ops2[n.index_]),
            o.push(i(s, e));
        else if (u === I)
          if (((n.index_ = n.index_.toUpperCase()), "<" === n.index_[0]))
            n.index_.substr(1) in t &&
              (o.push(t[n.index_.substr(1)] % 256), r.push(n.index_.substr(1)));
          else if (">" === n.index_[0])
            n.index_.substr(1) in t &&
              (o.push(Math.floor(t[n.index_.substr(1)] / 256)),
              r.push(n.index_.substr(1)));
          else if (n.index_ in t) o.push(t[n.index_]), r.push(n.index_);
          else {
            if (!(n.index_ in this.functions))
              throw new Error("undefined variable: " + n.index_);
            o.push(this.functions[n.index_]), r.push(n.index_);
          }
        else if (u === S)
          (s = o.pop()), (i = this.ops1[n.index_]), o.push(i(s));
        else {
          if (u !== L) throw new Error("invalid Expression");
          if (((s = o.pop()), !(i = o.pop()).apply || !i.call))
            throw new Error(i + " is not a function");
          "[object Array]" == Object.prototype.toString.call(s)
            ? o.push(i.apply(void 0, s))
            : o.push(i.call(void 0, s));
        }
      }
      if (o.length > 1) throw new Error("invalid Expression (parity)");
      return r;
    },
    toString: function (t) {
      var s,
        e,
        i,
        r,
        o = [],
        h = this.tokens.length,
        p = 0;
      for (p = 0; p < h; p++) {
        var u = (r = this.tokens[p]).type_;
        if (u === O) o.push(n(r.number_));
        else if (u === P)
          (e = o.pop()),
            (s = o.pop()),
            (i = r.index_),
            t && "^" == i
              ? o.push("Math.pow(" + s + "," + e + ")")
              : o.push("(" + s + i + e + ")");
        else if (u === I) o.push(r.index_);
        else if (u === S)
          (s = o.pop()),
            "-" === (i = r.index_)
              ? o.push("(" + i + s + ")")
              : o.push(i + "(" + s + ")");
        else {
          if (u !== L) throw new Error("invalid Expression");
          (s = o.pop()), (i = o.pop()), o.push(i + "(" + s + ")");
        }
      }
      if (o.length > 1) throw new Error("invalid Expression (parity)");
      return o[0];
    },
    variables: function () {
      for (var t = this.tokens.length, s = [], e = 0; e < t; e++) {
        var i = this.tokens[e];
        i.type_ === I && -1 == s.indexOf(i.index_) && s.push(i.index_);
      }
      return s;
    },
    toJSFunction: function (t, s) {
      return new Function(
        t,
        "with(Parser.values) { return " + this.simplify(s).toString(!0) + "; }"
      );
    },
  }),
    (E.parse = function (t) {
      return new E().parse(t);
    }),
    (E.usage = function (t, s) {
      return E.parse(t).usage(s);
    }),
    (E.evaluate = function (t, s) {
      return E.parse(t).evaluate(s);
    }),
    (E.Expression = i),
    (E.values = {
      lsb: function (t) {
        Math.floor(t % 256);
      },
      msb: function (t) {
        Math.floor(t / 256);
      },
      sin: Math.sin,
      cos: Math.cos,
      tan: Math.tan,
      asin: Math.asin,
      acos: Math.acos,
      atan: Math.atan,
      sqrt: Math.sqrt,
      log: Math.log,
      abs: Math.abs,
      ceil: Math.ceil,
      floor: Math.floor,
      round: Math.round,
      random: v,
      fac: w,
      exp: Math.exp,
      min: Math.min,
      max: Math.max,
      pyt: M,
      isnear: y,
      pow: Math.pow,
      atan2: Math.atan2,
      E: Math.E,
      PI: Math.PI,
    });
  return (
    (E.prototype = {
      parse: function (t) {
        (this.errormsg = ""), (this.success = !0);
        var n = [],
          r = [];
        this.tmpprio = 0;
        var o = 77,
          h = 0;
        if (((this.expression = t), (this.pos = 0), !this.expression))
          throw new Error("Empty expression, probably missing argument");
        for (; this.pos < this.expression.length; )
          if (this.isNumber()) {
            0 == (1 & o) && this.error_parsing(this.pos, "unexpected number");
            p = new e(O, 0, 0, this.tokennumber);
            r.push(p), (o = 50);
          } else if (this.isOperator())
            this.isSign() && 64 & o
              ? (this.isNegativeSign() &&
                  ((this.tokenprio = 2),
                  (this.tokenindex = "-"),
                  h++,
                  this.addfunc(r, n, S)),
                (o = 77))
              : this.isComment() ||
                (0 == (2 & o) &&
                  this.error_parsing(this.pos, "unexpected operator"),
                (h += 2),
                this.addfunc(r, n, P),
                (o = 77));
          else if (this.isString()) {
            0 == (1 & o) && this.error_parsing(this.pos, "unexpected string");
            p = new e(O, 0, 0, this.tokennumber);
            r.push(p), (o = 50);
          } else if (this.isLeftParenth())
            0 == (8 & o) && this.error_parsing(this.pos, 'unexpected "("'),
              128 & o &&
                ((h += 2),
                (this.tokenprio = -2),
                (this.tokenindex = -1),
                this.addfunc(r, n, L)),
              (o = 333);
          else if (this.isRightParenth()) {
            if (256 & o) {
              var p = new e(O, 0, 0, []);
              r.push(p);
            } else
              0 == (16 & o) && this.error_parsing(this.pos, 'unexpected ")"');
            o = 186;
          } else if (this.isComma())
            0 == (32 & o) && this.error_parsing(this.pos, 'unexpected ","'),
              this.addfunc(r, n, P),
              (h += 2),
              (o = 77);
          else if (this.isConst()) {
            0 == (1 & o) && this.error_parsing(this.pos, "unexpected constant");
            var u = new e(O, 0, 0, this.tokennumber);
            r.push(u), (o = 50);
          } else if (this.isOp2())
            0 == (4 & o) && this.error_parsing(this.pos, "unexpected function"),
              this.addfunc(r, n, P),
              (h += 2),
              (o = 8);
          else if (this.isOp1())
            0 == (4 & o) && this.error_parsing(this.pos, "unexpected function"),
              this.addfunc(r, n, S),
              h++,
              (o = 8);
          else if (this.isVar()) {
            0 == (1 & o) && this.error_parsing(this.pos, "unexpected variable");
            var a = new e(I, this.tokenindex, 0, 0);
            r.push(a), (o = 186);
          } else
            this.isWhite() ||
              ("" === this.errormsg
                ? this.error_parsing(
                    this.pos,
                    "unknown character in " + this.expression
                  )
                : this.error_parsing(this.pos, this.errormsg));
        for (
          (this.tmpprio < 0 || this.tmpprio >= 10) &&
          this.error_parsing(this.pos, 'unmatched "()"');
          n.length > 0;

        ) {
          var f = n.pop();
          r.push(f);
        }
        return (
          h + 1 !== r.length && this.error_parsing(this.pos, "parity"),
          new i(r, s(this.ops1), s(this.ops2), s(this.functions))
        );
      },
      evaluate: function (t, s) {
        return this.parse(t).evaluate(s);
      },
      error_parsing: function (t, s) {
        throw (
          ((this.success = !1),
          (this.errormsg = "parse error [column " + t + "]: " + s),
          new Error(this.errormsg))
        );
      },
      addfunc: function (t, s, i) {
        for (
          var n = new e(i, this.tokenindex, this.tokenprio + this.tmpprio, 0);
          s.length > 0 && n.prio_ <= s[s.length - 1].prio_;

        )
          t.push(s.pop());
        s.push(n);
      },
      isNumber: function () {
        for (
          var t = !1, s = "", e = 0, i = 0, n = 10, r = !1, o = this.pos;
          this.pos < this.expression.length;

        ) {
          var h,
            p = this.expression.charCodeAt(this.pos);
          if (
            (0 === e && (i = p),
            !(
              (p >= 48 && p <= 57) ||
              46 === p ||
              (0 === e && 36 === p) ||
              (0 === e && 37 === p) ||
              (1 === e && 88 === p && 48 === i) ||
              (1 === e && 120 === p && 48 === i) ||
              (e > 0 && 72 === p) ||
              (e > 0 && 104 === p) ||
              (e > 0 && 66 === p) ||
              (e > 0 && 98 === p) ||
              (e > 0 && 81 === p) ||
              (e > 0 && 113 === p) ||
              (e > 0 && 79 === p) ||
              (e > 0 && 111 === p) ||
              (e > 0 && p >= 65 && p <= 70) ||
              (e > 0 && p >= 97 && p <= 102)
            ))
          )
            break;
          ((e > 0 && p >= 65 && p <= 70) || (e > 0 && p >= 97 && p <= 102)) &&
            16 !== n &&
            (r = !0),
            e++,
            (s += this.expression.charAt(this.pos)),
            this.pos++,
            (h = s),
            "$" === s[0] && ((h = "0x" + s.substr(1)), (n = 16)),
            ("x" !== s[1] && "X" !== s[1]) || (n = 16),
            ("h" !== s[s.length - 1] && "H" !== s[s.length - 1]) ||
              (10 != n && 2 != n) ||
              ((h = "0x" + s.substr(0, s.length - 1)), (n = 16)),
            ("b" !== s[s.length - 1] && "B" !== s[s.length - 1]) ||
              (10 == n && ((h = s.substr(0, s.length - 1)), (n = 2))),
            ("q" !== s[s.length - 1] &&
              "Q" !== s[s.length - 1] &&
              "o" !== s[s.length - 1] &&
              "O" !== s[s.length - 1]) ||
              (10 == n && ((h = s.substr(0, s.length - 1)), (n = 8))),
            (this.tokennumber = 10 != n ? parseInt(h, n) : parseFloat(h)),
            (t = !0);
        }
        if ("%" === s[0]) {
          if (s.length < 2) return (this.pos = o), !1;
          (h = s.substr(1)), (this.tokennumber = parseInt(h, 2));
        }
        return (
          r && 2 === n && (r = !1),
          r && 16 !== n
            ? ((this.pos = o), !1)
            : "0x" === h
            ? ((this.pos = o), !1)
            : t
        );
      },
      unescape: function (t, s) {
        for (var e = [], i = !1, n = 0; n < t.length; n++) {
          var r = t.charAt(n);
          if (i) {
            switch (r) {
              case "'":
                e.push("'");
                break;
              case "\\":
                e.push("\\");
                break;
              case "/":
                e.push("/");
                break;
              case "b":
                e.push("\b");
                break;
              case "f":
                e.push("\f");
                break;
              case "n":
                e.push("\n");
                break;
              case "r":
                e.push("\r");
                break;
              case "t":
                e.push("\t");
                break;
              case "u":
                var o = parseInt(t.substring(n + 1, n + 5), 16);
                e.push(String.fromCharCode(o)), (n += 4);
                break;
              default:
                throw this.error_parsing(
                  s + n,
                  "Illegal escape sequence: '\\" + r + "'"
                );
            }
            i = !1;
          } else "\\" == r ? (i = !0) : e.push(r);
        }
        return e.join("");
      },
      isString: function () {
        var t = !1,
          s = "",
          e = this.pos;
        if (
          (this.pos < this.expression.length &&
            "'" == this.expression.charAt(this.pos)) ||
          '"' == this.expression.charAt(this.pos)
        ) {
          var i = this.expression.charAt(this.pos);
          for (this.pos++; this.pos < this.expression.length; ) {
            if (this.expression.charAt(this.pos) == i && "\\" != s.slice(-1)) {
              this.pos++, (this.tokennumber = this.unescape(s, e)), (t = !0);
              break;
            }
            (s += this.expression.charAt(this.pos)), this.pos++;
          }
        }
        return t;
      },
      isConst: function () {
        return !1;
      },
      isOperator: function () {
        var t = this.expression.charCodeAt(this.pos);
        if (43 === t) (this.tokenprio = 0), (this.tokenindex = "+");
        else if (45 === t) (this.tokenprio = 0), (this.tokenindex = "-");
        else if (124 === t)
          124 === this.expression.charCodeAt(this.pos + 1)
            ? (this.pos++, (this.tokenprio = 0), (this.tokenindex = "||"))
            : ((this.tokenprio = 5), (this.tokenindex = "|"));
        else if (42 === t) (this.tokenprio = 1), (this.tokenindex = "*");
        else if (47 === t) (this.tokenprio = 2), (this.tokenindex = "/");
        else if (37 === t) (this.tokenprio = 2), (this.tokenindex = "%");
        else if (35 === t) (this.tokenprio = 2), (this.tokenindex = "#");
        else if (94 === t) (this.tokenprio = 3), (this.tokenindex = "^");
        else if (38 === t) (this.tokenprio = 4), (this.tokenindex = "&");
        else if (61 === t) (this.tokenprio = -1), (this.tokenindex = "=");
        else if (33 === t)
          61 === this.expression.charCodeAt(this.pos + 1)
            ? (this.pos++, (this.tokenprio = -1), (this.tokenindex = "!="))
            : ((this.tokenprio = 5), (this.tokenindex = "!"));
        else {
          if (63 !== t) return !1;
          60 === this.expression.charCodeAt(this.pos + 1) &&
            (this.pos++,
            61 === this.expression.charCodeAt(this.pos + 1)
              ? (this.pos++, (this.tokenprio = -1), (this.tokenindex = "<="))
              : ((this.tokenprio = -1), (this.tokenindex = "<"))),
            62 === this.expression.charCodeAt(this.pos + 1) &&
              (this.pos++,
              61 === this.expression.charCodeAt(this.pos + 1)
                ? (this.pos++, (this.tokenprio = -1), (this.tokenindex = ">="))
                : ((this.tokenprio = -1), (this.tokenindex = ">")));
        }
        return this.pos++, !0;
      },
      isSign: function () {
        var t = this.expression.charCodeAt(this.pos - 1);
        return 45 === t || 43 === t;
      },
      isPositiveSign: function () {
        return 43 === this.expression.charCodeAt(this.pos - 1);
      },
      isNegativeSign: function () {
        return 45 === this.expression.charCodeAt(this.pos - 1);
      },
      isLeftParenth: function () {
        return (
          40 === this.expression.charCodeAt(this.pos) &&
          (this.pos++, (this.tmpprio += 10), !0)
        );
      },
      isRightParenth: function () {
        return (
          41 === this.expression.charCodeAt(this.pos) &&
          (this.pos++, (this.tmpprio -= 10), !0)
        );
      },
      isComma: function () {
        return (
          44 === this.expression.charCodeAt(this.pos) &&
          (this.pos++, (this.tokenprio = -1), (this.tokenindex = ","), !0)
        );
      },
      isWhite: function () {
        var t = this.expression.charCodeAt(this.pos);
        return (
          (32 === t || 9 === t || 10 === t || 13 === t) && (this.pos++, !0)
        );
      },
      isOp1: function () {
        for (var t = "", s = this.pos; s < this.expression.length; s++) {
          var e = this.expression.charAt(s);
          if (
            e.toUpperCase() === e.toLowerCase() &&
            (s === this.pos || ("_" != e && (e < "0" || e > "9")))
          )
            break;
          t += e;
        }
        return (
          t.length > 0 &&
          t in this.ops1 &&
          ((this.tokenindex = t),
          (this.tokenprio = 5),
          (this.pos += t.length),
          !0)
        );
      },
      isOp2: function () {
        for (var t = "", s = this.pos; s < this.expression.length; s++) {
          var e = this.expression.charAt(s);
          if (
            e.toUpperCase() === e.toLowerCase() &&
            (s === this.pos || ("_" != e && (e < "0" || e > "9")))
          )
            break;
          t += e;
        }
        return (
          t.length > 0 &&
          t in this.ops2 &&
          ((this.tokenindex = t),
          (this.tokenprio = 5),
          (this.pos += t.length),
          !0)
        );
      },
      isVar: function () {
        for (var t = "", s = this.pos; s < this.expression.length; s++) {
          var e = this.expression.charAt(s);
          if ("$" === e) {
            t = "_PC";
            break;
          }
          if (
            e.toUpperCase() === e.toLowerCase() &&
            "<" !== e &&
            ">" !== e &&
            (s === this.pos || ("_" != e && (e < "0" || e > "9")))
          )
            break;
          t += e;
        }
        return (
          t.length > 0 &&
          ((this.tokenindex = t),
          (this.tokenprio = 4),
          "_PC" !== t ? (this.pos += t.length) : this.pos++,
          !0)
        );
      },
      isComment: function () {
        return (
          47 === this.expression.charCodeAt(this.pos - 1) &&
          42 === this.expression.charCodeAt(this.pos) &&
          ((this.pos = this.expression.indexOf("*/", this.pos) + 2),
          1 === this.pos && (this.pos = this.expression.length),
          !0)
        );
      },
    }),
    (t.Parser = E),
    E
  );
})("undefined" == typeof exports ? {} : exports);

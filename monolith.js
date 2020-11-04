var Parser = require("./parser.js").Parser;
!(function (e, r) {
  "undefined" != typeof module
    ? ((module.exports = r()), (Z80 = module.exports))
    : "function" == typeof define && "object" == typeof define.amd
    ? define(r)
    : (this.Z80 = r());
})(0, function () {
  var e = {
    set: {
      DEC: [-1, -1, -1, -1, 5, -1, 11, -1, -1, -1, -1, -1, -1, -1],
      INC: [-1, -1, -1, -1, 4, -1, 3, -1, -1, -1, -1, -1, -1, -1],
      AND: [-1, -1, -1, -1, 160, 230, -1, -1, -1, -1, -1, -1, -1, -1],
      OR: [-1, -1, -1, -1, 176, 246, -1, -1, -1, -1, -1, -1, -1, -1],
      XOR: [-1, -1, -1, -1, 168, 238, -1, -1, -1, -1, -1, -1, -1, -1],
      SUB: [-1, -1, -1, -1, 144, 214, -1, -1, -1, -1, -1, -1, -1, -1],
      CP: [-1, -1, -1, -1, 184, 254, -1, -1, -1, -1, -1, -1, -1, -1],
      SLA: [-1, -1, -1, -1, 52e3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      SRA: [-1, -1, -1, -1, 52008, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      SRL: [-1, -1, -1, -1, 52024, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RR: [-1, -1, -1, -1, 51992, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RL: [-1, -1, -1, -1, 51984, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RRC: [-1, -1, -1, -1, 51976, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RLC: [-1, -1, -1, -1, 51968, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      POP: [-1, -1, -1, -1, -1, -1, -1, 193, -1, -1, -1, -1, -1, -1],
      PUSH: [-1, -1, -1, -1, -1, -1, -1, 197, -1, -1, -1, -1, -1, -1],
      RET: [201, -1, -1, -1, -1, -1, -1, -1, 192, -1, -1, -1, -1, -1],
      IM: [-1, -1, -1, -1, -1, -1, -1, -1, -1, 60742, -1, -1, -1, -1],
      RST: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 199, -1, -1, -1],
      CALL: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 205, -1],
      JP: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 195, 233],
      DJNZ: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, -1, -1],
      JR: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 24, -1, -1],
      NOP: [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CCF: [63, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CPD: [60841, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CPDR: [60857, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CPI: [60833, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CPIR: [60849, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CPL: [47, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      DAA: [39, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      DI: [243, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      EI: [251, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      EXX: [217, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      IND: [60842, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      INDR: [60858, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      INI: [60834, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      INIR: [60850, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      LDD: [60840, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      LDDR: [60856, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      LDI: [60832, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      LDIR: [60848, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      OUTD: [60843, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      OTDR: [60859, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      OUTI: [60835, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      OTIR: [60851, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      HALT: [118, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      NEG: [60740, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RETI: [60749, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RETN: [60741, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RLA: [23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RLCA: [7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RLD: [60783, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RRA: [31, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RRCA: [15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RRD: [60775, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      SCF: [55, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    },
    set2: {
      EX: [0],
      LD: [0],
      ADC: [136, 206, 60746],
      ADD: [128, 198, 9, 9],
      SBC: [152, 222, 60738],
      BIT: [-1, -1, -1, -1, 52032],
      RES: [-1, -1, -1, -1, 52096],
      SET: [-1, -1, -1, -1, 52160],
      CAL2: [-1, -1, -1, -1, -1, 196],
      JP2: [-1, -1, -1, -1, -1, 194],
      JR2: [-1, -1, -1, -1, -1, 32],
      IN: [60736, 219, -1, -1, -1, -1],
      OUT: [60737, 211, -1, -1, -1, -1],
    },
    R8: { DEC: 3, INC: 3 },
    R16: { DEC: 4, INC: 4, POP: 4, PUSH: 4 },
    parseOpcode: function (r) {
      var t,
        n,
        s,
        a = function (e) {
          var r = ["B", "C", "D", "E", "H", "L", "~", "A"].indexOf(
            e.toUpperCase()
          );
          return "(HL)" == e.toUpperCase() ? 6 : r;
        },
        u = function (e) {
          return ["B", "C", "D", "E", "H", "L", "F", "A"].indexOf(
            e.toUpperCase()
          );
        },
        o = function (e) {
          return ["BC", "DE", "HL", "SP"].indexOf(e.toUpperCase());
        },
        l = function (e) {
          return ["NZ", "Z", "NC", "C", "PO", "PE", "P", "M"].indexOf(
            e.toUpperCase()
          );
        },
        p = function (e) {
          return "(" == e[0] && ")" == e[e.length - 1]
            ? e.substr(1, e.length - 2)
            : null;
        },
        i = function (e) {
          var r = null,
            t = null,
            n = e.replace(/\s/g, "").substr(0, 4).toUpperCase();
          return (
            "(IX)" == n && ((r = "0"), (t = 221), (e = "(HL)")),
            "(IX+" == n &&
              ((r = e.substr(4, e.length - 5)), (t = 221), (e = "(HL)")),
            "(IX-" == n &&
              ((r = "-" + e.substr(4, e.length - 5)), (t = 221), (e = "(HL)")),
            "(IY)" == n && ((r = "0"), (t = 253), (e = "(HL)")),
            "(IY+" == n &&
              ((r = e.substr(4, e.length - 5)), (t = 253), (e = "(HL)")),
            "(IY-" == n &&
              ((r = "-" + e.substr(4, e.length - 5)), (t = 253), (e = "(HL)")),
            "IX" == n && ((t = 221), (e = "HL")),
            "IY" == n && ((t = 253), (e = "HL")),
            "IXL" == n && ((t = 221), (e = "L")),
            "IXH" == n && ((t = 221), (e = "H")),
            "IYL" == n && ((t = 253), (e = "L")),
            "IYH" == n && ((t = 253), (e = "H")),
            [e, r, t]
          );
        },
        f = e.set[r.opcode],
        C = e.set2[r.opcode],
        c = -1,
        U = 1,
        b = [],
        d = null,
        y = null;
      if (
        f &&
        !C &&
        (r.params ? r.params.length : 0) > 1 &&
        "JP" !== r.opcode &&
        "JR" !== r.opcode &&
        "CALL" !== r.opcode
      )
        throw "One parameter needed";
      if (!f && C && ((f = C), 2 !== (r.params ? r.params.length : 0)))
        throw "Two parameters needed";
      if (f) {
        if (r.params && 0 !== r.params.length) {
          if (1 == r.params.length) {
            var P = r.params[0];
            if (((s = i(P)), (P = s[0]), (y = s[1]), (d = s[2]), f[11] > 0))
              return (
                (r.bytes = 2),
                (r.lens = []),
                (r.lens[0] = f[11]),
                (r.lens[1] = function (e) {
                  var r = Parser.evaluate(P, e) - (e._PC + 2);
                  if (r > 127) throw "Target is out of relative jump reach";
                  if (r < -128) throw "Target is out of relative jump reach";
                  return r < 0 && (r = 256 + r), r;
                }),
                r
              );
            if (f[12] > 0)
              return (
                (r.lens = []),
                "(HL)" == P.toUpperCase() && f[13] > 0
                  ? (s[2]
                      ? ((r.bytes = 2), (r.lens[0] = s[2]), (r.lens[1] = f[13]))
                      : ((r.bytes = 1), (r.lens[0] = f[13])),
                    r)
                  : ((r.bytes = 3),
                    (r.lens[0] = f[12]),
                    (r.lens[1] = function (e) {
                      return Parser.evaluate(P, e);
                    }),
                    (r.lens[2] = null),
                    r)
              );
            if (f[9] > 0) {
              switch (
                ((r.bytes = 2),
                (r.lens = []),
                (r.lens[0] = 237),
                Parser.evaluate(P))
              ) {
                case 0:
                  return (r.lens[1] = 70), r;
                case 1:
                  return (r.lens[1] = 86), r;
                case 2:
                  return (r.lens[1] = 94), r;
              }
              throw "Invalid interrupt mode";
            }
            if (f[10] > 0) {
              switch (((r.bytes = 1), (r.lens = []), Parser.evaluate(P))) {
                case 0:
                  return (r.lens[0] = 199), r;
                case 8:
                  return (r.lens[0] = 207), r;
                case 16:
                  return (r.lens[0] = 215), r;
                case 24:
                  return (r.lens[0] = 223), r;
                case 32:
                  return (r.lens[0] = 231), r;
                case 40:
                  return (r.lens[0] = 239), r;
                case 48:
                  return (r.lens[0] = 247), r;
                case 56:
                  return (r.lens[0] = 255), r;
              }
              throw "Invalid RST";
            }
            (t = l(P)) >= 0 && f[8] > 0
              ? (c = f[8]) > 0 && (c += t << 3)
              : (t = o(P)) >= 0 && f[6] >= 0
              ? (c = f[6]) > 0 &&
                (e.R16[r.opcode] ? (c += t << e.R16[r.opcode]) : (c += t))
              : (t = (function (e) {
                  return ["BC", "DE", "HL", "AF"].indexOf(e.toUpperCase());
                })(P)) >= 0 && f[7] >= 0
              ? (c = f[7]) > 0 &&
                (e.R16[r.opcode] ? (c += t << e.R16[r.opcode]) : (c += t))
              : (t = a(P)) >= 0 && f[4] > 0
              ? (c = f[4]) > 0 &&
                (e.R8[r.opcode] ? (c += t << e.R8[r.opcode]) : (c += t))
              : ((c = f[5]),
                (n = function (e) {
                  return Parser.evaluate(P, e);
                }));
          } else if (2 == r.params.length) {
            var I = r.params[0],
              v = r.params[1];
            if ("EX" == r.opcode)
              return "DE" == I.toUpperCase() && "HL" == v.toUpperCase()
                ? ((r.lens = [235]), (r.bytes = 1), r)
                : "AF" == I.toUpperCase() && "AF'" == v.toUpperCase()
                ? ((r.lens = [8]), (r.bytes = 1), r)
                : "(SP)" == I.toUpperCase() && "HL" == v.toUpperCase()
                ? ((r.lens = [227]), (r.bytes = 1), r)
                : "(SP)" == I.toUpperCase() && "IX" == v.toUpperCase()
                ? ((r.lens = [221, 227]), (r.bytes = 2), r)
                : "(SP)" == I.toUpperCase() && "IY" == v.toUpperCase()
                ? ((r.lens = [253, 227]), (r.bytes = 2), r)
                : null;
            if ("CALL" == r.opcode)
              return (
                (f = e.set2.CAL2),
                (t = l(I)) >= 0 && f[5] > 0 && (c = f[5]) > 0
                  ? ((c += t << 3),
                    (r.bytes = 3),
                    (r.lens = []),
                    (r.lens[0] = c),
                    (r.lens[1] = function (e) {
                      return Parser.evaluate(v, e);
                    }),
                    (r.lens[2] = null),
                    r)
                  : null
              );
            if ("JP" == r.opcode)
              return (
                (f = e.set2.JP2),
                (t = l(I)) >= 0 && f[5] > 0 && (c = f[5]) > 0
                  ? ((c += t << 3),
                    (r.bytes = 3),
                    (r.lens = []),
                    (r.lens[0] = c),
                    (r.lens[1] = function (e) {
                      return Parser.evaluate(v, e);
                    }),
                    (r.lens[2] = null),
                    r)
                  : null
              );
            if ("JR" == r.opcode)
              return (
                (f = e.set2.JR2),
                (t = l(I)) >= 0 && t < 4 && f[5] > 0 && (c = f[5]) > 0
                  ? ((c += t << 3),
                    (r.bytes = 2),
                    (r.lens = []),
                    (r.lens[0] = c),
                    (r.lens[1] = function (e) {
                      var r = Parser.evaluate(v, e) - (e._PC + 2);
                      if (r > 127) throw "Target is out of relative jump reach";
                      if (r < -128)
                        throw "Target is out of relative jump reach";
                      return r < 0 && (r = 256 + r), r;
                    }),
                    r)
                  : null
              );
            if ("IN" == r.opcode)
              return "(C)" == v.toUpperCase() && (t = u(I)) >= 0 && f[0]
                ? ((r.lens = [237, 64 + (t << 3)]), (r.bytes = 2), r)
                : "A" == I.toUpperCase()
                ? ((r.lens = [f[1]]),
                  (r.lens[1] = function (e) {
                    return Parser.evaluate(v, e);
                  }),
                  (r.bytes = 2),
                  r)
                : null;
            if ("OUT" == r.opcode)
              return "(C)" == I.toUpperCase() && (t = u(v)) >= 0 && f[0]
                ? ((r.lens = [237, 65 + (t << 3)]), (r.bytes = 2), r)
                : "A" == v.toUpperCase()
                ? ((r.lens = [f[1]]),
                  (r.lens[1] = function (e) {
                    return Parser.evaluate(I, e);
                  }),
                  (r.bytes = 2),
                  r)
                : null;
            if ("LD" == r.opcode) {
              if ("A" == I.toUpperCase() && "R" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [237, 95]), r;
              if ("A" == I.toUpperCase() && "I" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [237, 87]), r;
              if ("R" == I.toUpperCase() && "A" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [237, 79]), r;
              if ("I" == I.toUpperCase() && "A" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [237, 71]), r;
              if ("HL" == I.toUpperCase() && "DE" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [98, 107]), r;
              if ("HL" == I.toUpperCase() && "BC" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [96, 105]), r;
              if ("DE" == I.toUpperCase() && "HL" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [84, 93]), r;
              if ("DE" == I.toUpperCase() && "BC" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [80, 89]), r;
              if ("BC" == I.toUpperCase() && "HL" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [68, 77]), r;
              if ("BC" == I.toUpperCase() && "DE" == v.toUpperCase())
                return (r.bytes = 2), (r.lens = [66, 75]), r;
              var L = i(I);
              (I = L[0]), (y = L[1]), (d = L[2]);
              var R = i(v);
              if (((v = R[0]), R[1] && y))
                throw "Invalid parameters - two indexed";
              if ((R[1] && (y = R[1]), R[2] && d))
                throw "Invalid parameters - two prefixed";
              R[2] && (d = R[2]);
              var D = a(I),
                h = a(v);
              if (
                ((b = []),
                D >= 0 && h >= 0 && ((r.bytes = 1), (b[0] = 64 + (D << 3) + h)),
                "A" == I.toUpperCase() && "(BC)" == v.toUpperCase())
              )
                return (r.bytes = 1), (r.lens = [10]), r;
              if ("A" == I.toUpperCase() && "(DE)" == v.toUpperCase())
                return (r.bytes = 1), (r.lens = [26]), r;
              if ("A" == I.toUpperCase() && p(v) && 0 === r.bytes)
                return (
                  (r.bytes = 3),
                  (r.lens = [
                    58,
                    function (e) {
                      return Parser.evaluate(p(v), e);
                    },
                    null,
                  ]),
                  r
                );
              if ("(BC)" == I.toUpperCase() && "A" == v.toUpperCase())
                return (r.bytes = 1), (r.lens = [2]), r;
              if ("(DE)" == I.toUpperCase() && "A" == v.toUpperCase())
                return (r.bytes = 1), (r.lens = [18]), r;
              if (p(I) && "A" == v.toUpperCase() && 0 === r.bytes)
                return (
                  (r.bytes = 3),
                  (r.lens = [
                    50,
                    function (e) {
                      return Parser.evaluate(p(I), e);
                    },
                    null,
                  ]),
                  r
                );
              if (7 == D && h < 0 && "(" == v[0])
                return (
                  (r.bytes = 3),
                  (b[0] = 58),
                  (b[1] = function (e) {
                    return Parser.evaluate(v, e);
                  }),
                  (b[2] = null),
                  r
                );
              if (D >= 0 && h < 0 && "(" == v[0])
                throw "Invalid combination: general register and memory";
              if (
                (D >= 0 &&
                  h < 0 &&
                  ((r.bytes = 2),
                  (b[0] = 6 + (D << 3)),
                  (b[1] = function (e) {
                    return Parser.evaluate(v, e);
                  })),
                0 === r.bytes)
              ) {
                (D = o(I)), (h = o(v));
                var A = p(I),
                  m = p(v);
                D >= 0 &&
                  !m &&
                  ((r.bytes = 3),
                  (b = [
                    1 + (D << 4),
                    function (e) {
                      return Parser.evaluate(v, e);
                    },
                    null,
                  ])),
                  D >= 0 &&
                    m &&
                    ((r.bytes = [4, 4, 3, 4][D]),
                    (b = [
                      237,
                      75 + (D << 4),
                      function (e) {
                        return Parser.evaluate(m, e);
                      },
                      null,
                    ]),
                    3 == r.bytes &&
                      (b = [
                        42,
                        function (e) {
                          return Parser.evaluate(m, e);
                        },
                        null,
                      ])),
                  A &&
                    h >= 0 &&
                    ((r.bytes = [4, 4, 3, 4][h]),
                    (b = [
                      237,
                      67 + (h << 4),
                      function (e) {
                        return Parser.evaluate(A, e);
                      },
                      null,
                    ]),
                    3 == r.bytes &&
                      (b = [
                        34,
                        function (e) {
                          return Parser.evaluate(A, e);
                        },
                        null,
                      ])),
                  3 == D && 2 == h && ((r.bytes = 1), (b = [249]));
              }
              return b.length
                ? (d && (b.unshift(d), r.bytes++),
                  y &&
                    (3 == r.bytes &&
                      ((b[3] = b[2]),
                      (b[2] = function (e) {
                        var r = Parser.evaluate(y, e);
                        if (r > 127 || r < -128)
                          throw "Index out of range (" + r + ")";
                        return r;
                      }),
                      (r.bytes = 4)),
                    2 == r.bytes &&
                      ((b[2] = function (e) {
                        var r = Parser.evaluate(y, e);
                        if (r > 127 || r < -128)
                          throw "Index out of range (" + r + ")";
                        return r;
                      }),
                      (r.bytes = 3))),
                  (r.lens = b),
                  r)
                : null;
            }
            if (f[4] >= 0) {
              var H = parseInt(I, 10);
              (s = i(v)),
                (v = s[0]),
                (y = s[1]),
                (d = s[2]),
                (t = a(v)),
                (c = f[4] + 8 * H + t);
            }
            "A" == I.toUpperCase() &&
              ((s = i(v)),
              (v = s[0]),
              (y = s[1]),
              (d = s[2]),
              (t = a(v)) >= 0
                ? (c = f[0] + t)
                : ((c = f[1]),
                  (n = function (e) {
                    return Parser.evaluate(v, e);
                  }))),
              "IX" == I.toUpperCase() &&
                (t = (function (e) {
                  return ["BC", "DE", "IX", "SP"].indexOf(e.toUpperCase());
                })(v)) >= 0 &&
                ((c = f[2] + (t << 4)), (d = 221)),
              "IY" == I.toUpperCase() &&
                (t = (function (e) {
                  return ["BC", "DE", "IY", "SP"].indexOf(e.toUpperCase());
                })(v)) >= 0 &&
                ((c = f[2] + (t << 4)), (d = 253)),
              "HL" == I.toUpperCase() &&
                (t = o(v)) >= 0 &&
                (c = f[2] + (t << 4));
          }
        } else c = f[0];
        if (c < 0) throw "Bad addressing mode at line " + r.numline;
        c > 255
          ? (U++, (b[0] = (65280 & c) >> 8), (b[1] = 255 & c))
          : (b[0] = 255 & c);
        return (
          d && (b.unshift(d), U++),
          null !== y &&
            void 0 !== y &&
            (3 == U &&
              ((b[3] = b[2]),
              (b[2] = function (e) {
                var r = Parser.evaluate(y, e);
                if (r > 127 || r < -128) throw "Index out of range (" + r + ")";
                return r;
              }),
              (U = 4)),
            2 == U &&
              ((b[2] = function (e) {
                var r = Parser.evaluate(y, e);
                if (r > 127 || r < -128) throw "Index out of range (" + r + ")";
                return r;
              }),
              (U = 3))),
          n && (b.push(n), U++),
          (r.lens = b),
          (r.bytes = U),
          r
        );
      }
      return null;
    },
  };
  return e;
});
!(function (t, o) {
  "undefined" != typeof module
    ? ((module.exports = o()), (I8080 = module.exports))
    : "function" == typeof define && "object" == typeof define.amd
    ? define(o)
    : (this.I8080 = o());
})(0, function () {
  var t = {
    set: {
      RST: { o: 199, t: "RST" },
      LDA: { o: 58, t: "IW" },
      STA: { o: 50, t: "IW" },
      LDAX: { o: 10, t: "BD" },
      STAX: { o: 2, t: "BD" },
      LHLD: { o: 42, t: "IW" },
      SHLD: { o: 34, t: "IW" },
      JMP: { o: 195, t: "IW" },
      JNZ: { o: 194, t: "IW" },
      JZ: { o: 202, t: "IW" },
      JNC: { o: 210, t: "IW" },
      JC: { o: 218, t: "IW" },
      JPO: { o: 226, t: "IW" },
      JPE: { o: 234, t: "IW" },
      JP: { o: 242, t: "IW" },
      JM: { o: 250, t: "IW" },
      JNK: { o: 221, t: "IW" },
      JK: { o: 253, t: "IW" },
      CALL: { o: 205, t: "IW" },
      CNZ: { o: 196, t: "IW" },
      CZ: { o: 204, t: "IW" },
      CNC: { o: 212, t: "IW" },
      CC: { o: 220, t: "IW" },
      CPO: { o: 228, t: "IW" },
      CPE: { o: 236, t: "IW" },
      CP: { o: 244, t: "IW" },
      CM: { o: 252, t: "IW" },
      LXI: { o: 1, t: "RPW" },
      DAD: { o: 9, t: "RPWD" },
      INX: { o: 3, t: "RPWD" },
      DCX: { o: 11, t: "RPWD" },
      PUSH: { o: 197, t: "RQW" },
      POP: { o: 193, t: "RQW" },
      MVI: { o: 6, t: "RB" },
      ADI: { o: 198, t: "B" },
      ACI: { o: 206, t: "B" },
      SUI: { o: 214, t: "B" },
      SBI: { o: 222, t: "B" },
      ANI: { o: 230, t: "B" },
      XRI: { o: 238, t: "B" },
      ORI: { o: 246, t: "B" },
      CPI: { o: 254, t: "B" },
      INR: { o: 4, t: "RR" },
      DCR: { o: 5, t: "RR" },
      MOV: { o: 64, t: "RRR" },
      HLT: { o: 118, t: "0" },
      NOP: { o: 0, t: "0" },
      IN: { o: 219, t: "B" },
      OUT: { o: 211, t: "B" },
      RIM: { o: 32, t: "0" },
      SIM: { o: 48, t: "0" },
      ADD: { o: 128, t: "RR0" },
      ADC: { o: 136, t: "RR0" },
      SUB: { o: 144, t: "RR0" },
      SBB: { o: 152, t: "RR0" },
      ANA: { o: 160, t: "RR0" },
      XRA: { o: 168, t: "RR0" },
      ORA: { o: 176, t: "RR0" },
      CMP: { o: 184, t: "RR0" },
      EI: { o: 251, t: "0" },
      DI: { o: 243, t: "0" },
      SPHL: { o: 249, t: "0" },
      XCHG: { o: 235, t: "0" },
      XTHL: { o: 227, t: "0" },
      DAA: { o: 39, t: "0" },
      CMA: { o: 47, t: "0" },
      STC: { o: 55, t: "0" },
      CMC: { o: 63, t: "0" },
      RLC: { o: 7, t: "0" },
      RRC: { o: 15, t: "0" },
      RAL: { o: 23, t: "0" },
      RAR: { o: 31, t: "0" },
      RRHL: { o: 16, t: "0" },
      RLDE: { o: 24, t: "0" },
      PCHL: { o: 233, t: "0" },
      DSUB: { o: 8, t: "0" },
      RSTV: { o: 203, t: "0" },
      RET: { o: 201, t: "0" },
      RNZ: { o: 192, t: "0" },
      RZ: { o: 200, t: "0" },
      RNC: { o: 208, t: "0" },
      RC: { o: 216, t: "0" },
      RPO: { o: 224, t: "0" },
      RPE: { o: 232, t: "0" },
      RP: { o: 240, t: "0" },
      RM: { o: 248, t: "0" },
    },
    lens: {
      R: function (t) {
        return "BCDEHLMA".indexOf(t.toUpperCase());
      },
      RDD: function (t) {
        return "BDHSP".indexOf(t.toUpperCase());
      },
      RBD: function (t) {
        return "BD".indexOf(t.toUpperCase());
      },
      RQQ: function (t) {
        return "BDHPSW".indexOf(t.toUpperCase());
      },
      RB: function (t, o) {
        var n = this.R(o[0]);
        if (n < 0) throw "Unknown register " + o[0];
        return (
          (n <<= 3),
          [
            n | t,
            function (t) {
              return Parser.evaluate(o[1], t);
            },
          ]
        );
      },
      B: function (t, o) {
        return [
          t,
          function (t) {
            return Parser.evaluate(o[0], t);
          },
        ];
      },
      RR: function (t, o) {
        var n = this.R(o[0]);
        if (n < 0) throw "Unknown register " + o[0];
        return (n <<= 3), [n | t];
      },
      RR0: function (t, o) {
        var n = this.R(o[0]);
        if (n < 0) throw "Unknown register " + o[0];
        return [n | t];
      },
      RRR: function (t, o) {
        var n = this.R(o[0]);
        if (n < 0) throw "Unknown register " + o[0];
        var r = this.R(o[1]);
        if (r < 0) throw "Unknown register " + o[1];
        return (n <<= 3), [n | r | t];
      },
      RPW: function (t, o) {
        var n = this.RDD(o[0]);
        if (n < 0 || n > 3) throw "Unknown register " + o[0];
        return (
          (n <<= 4),
          [
            n | t,
            function (t) {
              return Parser.evaluate(o[1], t);
            },
            null,
          ]
        );
      },
      RPWD: function (t, o) {
        var n = this.RDD(o[0]);
        if (n < 0 || n > 3) throw "Unknown register " + o[0];
        return (n <<= 4), [n | t];
      },
      BD: function (t, o) {
        var n = this.RBD(o[0]);
        if (n < 0 || n > 1) throw "Unknown register " + o[0];
        return (n <<= 4), [n | t];
      },
      RQW: function (t, o) {
        var n = this.RQQ(o[0]);
        if (n < 0 || n > 3) throw "Unknown register " + o[0];
        return (n <<= 4), [n | t];
      },
      IW: function (t, o) {
        return [
          t,
          function (t) {
            return Parser.evaluate(o[0], t);
          },
          null,
        ];
      },
      RST: function (t, o) {
        return [t | (parseInt(o[0], 10) << 3)];
      },
      0: function (t, o) {
        return [t];
      },
    },
    parseOpcode: function (o) {
      var n = t.set[o.opcode];
      if (n) {
        var r = n.t,
          e = t.lens[r](n.o, o.params);
        return (
          (o.bytes = e.length),
          (o.lens = e),
          (o.resolve = e.reduce(function (t, o) {
            return "function" == typeof o ? t + 1 : t;
          }, 0)),
          o
        );
      }
      return null;
    },
  };
  return t;
});
var I8008 = {
  set: {
    ADA: { o: 128, t: "0" },
    ADB: { o: 129, t: "0" },
    ADC: { o: 130, t: "0" },
    ADD: { o: 131, t: "0" },
    ADE: { o: 132, t: "0" },
    ADH: { o: 133, t: "0" },
    ADL: { o: 134, t: "0" },
    ADM: { o: 135, t: "0" },
    ACA: { o: 136, t: "0" },
    ACB: { o: 137, t: "0" },
    ACC: { o: 138, t: "0" },
    ACD: { o: 139, t: "0" },
    ACE: { o: 140, t: "0" },
    ACH: { o: 141, t: "0" },
    ACL: { o: 142, t: "0" },
    ACM: { o: 143, t: "0" },
    SUA: { o: 144, t: "0" },
    SUB: { o: 145, t: "0" },
    SUC: { o: 146, t: "0" },
    SUD: { o: 147, t: "0" },
    SUE: { o: 148, t: "0" },
    SUH: { o: 149, t: "0" },
    SUL: { o: 150, t: "0" },
    SUM: { o: 151, t: "0" },
    SBA: { o: 152, t: "0" },
    SBB: { o: 153, t: "0" },
    SBC: { o: 154, t: "0" },
    SBD: { o: 155, t: "0" },
    SBE: { o: 156, t: "0" },
    SBH: { o: 157, t: "0" },
    SBL: { o: 158, t: "0" },
    SBM: { o: 159, t: "0" },
    NDA: { o: 160, t: "0" },
    NDB: { o: 161, t: "0" },
    NDC: { o: 162, t: "0" },
    NDD: { o: 163, t: "0" },
    NDE: { o: 164, t: "0" },
    NDH: { o: 165, t: "0" },
    NDL: { o: 166, t: "0" },
    NDM: { o: 167, t: "0" },
    XRA: { o: 168, t: "0" },
    XRB: { o: 169, t: "0" },
    XRC: { o: 170, t: "0" },
    XRD: { o: 171, t: "0" },
    XRE: { o: 172, t: "0" },
    XRH: { o: 173, t: "0" },
    XRL: { o: 174, t: "0" },
    XRM: { o: 175, t: "0" },
    ORA: { o: 176, t: "0" },
    ORB: { o: 177, t: "0" },
    ORC: { o: 178, t: "0" },
    ORD: { o: 179, t: "0" },
    ORE: { o: 180, t: "0" },
    ORH: { o: 181, t: "0" },
    ORL: { o: 182, t: "0" },
    ORM: { o: 183, t: "0" },
    CPA: { o: 184, t: "0" },
    CPB: { o: 185, t: "0" },
    CPC: { o: 186, t: "0" },
    CPD: { o: 187, t: "0" },
    CPE: { o: 188, t: "0" },
    CPH: { o: 189, t: "0" },
    CPL: { o: 190, t: "0" },
    CPM: { o: 191, t: "0" },
    LAA: { o: 192, t: "0" },
    LAB: { o: 193, t: "0" },
    LAC: { o: 194, t: "0" },
    LAD: { o: 195, t: "0" },
    LAE: { o: 196, t: "0" },
    LAH: { o: 197, t: "0" },
    LAL: { o: 198, t: "0" },
    LAM: { o: 199, t: "0" },
    LBA: { o: 200, t: "0" },
    LBB: { o: 201, t: "0" },
    LBC: { o: 202, t: "0" },
    LBD: { o: 203, t: "0" },
    LBE: { o: 204, t: "0" },
    LBH: { o: 205, t: "0" },
    LBL: { o: 206, t: "0" },
    LBM: { o: 207, t: "0" },
    LCA: { o: 208, t: "0" },
    LCB: { o: 209, t: "0" },
    LCC: { o: 210, t: "0" },
    LCD: { o: 211, t: "0" },
    LCE: { o: 212, t: "0" },
    LCH: { o: 213, t: "0" },
    LCL: { o: 214, t: "0" },
    LCM: { o: 215, t: "0" },
    LDA: { o: 216, t: "0" },
    LDB: { o: 217, t: "0" },
    LDC: { o: 218, t: "0" },
    LDD: { o: 219, t: "0" },
    LDE: { o: 220, t: "0" },
    LDH: { o: 221, t: "0" },
    LDL: { o: 222, t: "0" },
    LDM: { o: 223, t: "0" },
    LEA: { o: 224, t: "0" },
    LEB: { o: 225, t: "0" },
    LEC: { o: 226, t: "0" },
    LED: { o: 227, t: "0" },
    LEE: { o: 228, t: "0" },
    LEH: { o: 229, t: "0" },
    LEL: { o: 230, t: "0" },
    LEM: { o: 231, t: "0" },
    LHA: { o: 232, t: "0" },
    LHB: { o: 233, t: "0" },
    LHC: { o: 234, t: "0" },
    LHD: { o: 235, t: "0" },
    LHE: { o: 236, t: "0" },
    LHH: { o: 237, t: "0" },
    LHL: { o: 238, t: "0" },
    LHM: { o: 239, t: "0" },
    LLA: { o: 240, t: "0" },
    LLB: { o: 241, t: "0" },
    LLC: { o: 242, t: "0" },
    LLD: { o: 243, t: "0" },
    LLE: { o: 244, t: "0" },
    LLH: { o: 245, t: "0" },
    LLL: { o: 246, t: "0" },
    LLM: { o: 247, t: "0" },
    LMA: { o: 248, t: "0" },
    LMB: { o: 249, t: "0" },
    LMC: { o: 250, t: "0" },
    LMD: { o: 251, t: "0" },
    LME: { o: 252, t: "0" },
    LMH: { o: 253, t: "0" },
    LML: { o: 254, t: "0" },
    LMM: { o: 255, t: "0" },
    JMP: { o: 68, t: "IW" },
    CAL: { o: 70, t: "IW" },
    CALL: { o: 70, t: "IW" },
    RET: { o: 7, t: "0" },
    JFC: { o: 64, t: "IW" },
    JFZ: { o: 72, t: "IW" },
    JFS: { o: 80, t: "IW" },
    JFP: { o: 88, t: "IW" },
    JTC: { o: 96, t: "IW" },
    JTZ: { o: 104, t: "IW" },
    JTS: { o: 112, t: "IW" },
    JTP: { o: 120, t: "IW" },
    CFC: { o: 66, t: "IW" },
    CFZ: { o: 74, t: "IW" },
    CFS: { o: 82, t: "IW" },
    CFP: { o: 90, t: "IW" },
    CTC: { o: 98, t: "IW" },
    CTZ: { o: 106, t: "IW" },
    CTS: { o: 114, t: "IW" },
    CTP: { o: 122, t: "IW" },
    RFC: { o: 3, t: "0" },
    RFZ: { o: 11, t: "0" },
    RFS: { o: 19, t: "0" },
    RFP: { o: 27, t: "0" },
    RTC: { o: 35, t: "0" },
    RTZ: { o: 43, t: "0" },
    RTS: { o: 51, t: "0" },
    RTP: { o: 59, t: "0" },
    JNC: { o: 64, t: "IW" },
    JNZ: { o: 72, t: "IW" },
    JP: { o: 80, t: "IW" },
    JPO: { o: 88, t: "IW" },
    JC: { o: 96, t: "IW" },
    JZ: { o: 104, t: "IW" },
    JM: { o: 112, t: "IW" },
    JPE: { o: 120, t: "IW" },
    CNC: { o: 66, t: "IW" },
    CNZ: { o: 74, t: "IW" },
    CP: { o: 82, t: "IW" },
    CPO: { o: 90, t: "IW" },
    CC: { o: 98, t: "IW" },
    CZ: { o: 106, t: "IW" },
    CM: { o: 114, t: "IW" },
    "CPE-": { o: 122, t: "IW" },
    RNC: { o: 3, t: "0" },
    RNZ: { o: 11, t: "0" },
    RP: { o: 19, t: "0" },
    RPO: { o: 27, t: "0" },
    RC: { o: 35, t: "0" },
    RZ: { o: 43, t: "0" },
    RM: { o: 51, t: "0" },
    RPE: { o: 59, t: "0" },
    RST: { o: 5, t: "RST" },
    INP: { o: 65, t: "INP" },
    IN: { o: 65, t: "INP" },
    OUT: { o: 81, t: "OUT" },
    LAI: { o: 6, t: "B" },
    LBI: { o: 14, t: "B" },
    LCI: { o: 22, t: "B" },
    LDI: { o: 30, t: "B" },
    LEI: { o: 38, t: "B" },
    LHI: { o: 46, t: "B" },
    LLI: { o: 54, t: "B" },
    LMI: { o: 62, t: "B" },
    RLC: { o: 2, t: "0" },
    RRC: { o: 10, t: "0" },
    RAL: { o: 18, t: "0" },
    RAR: { o: 26, t: "0" },
    ADI: { o: 4, t: "B" },
    ACI: { o: 12, t: "B" },
    SUI: { o: 20, t: "B" },
    SBI: { o: 28, t: "B" },
    NDI: { o: 36, t: "B" },
    ANI: { o: 36, t: "B" },
    XRI: { o: 44, t: "B" },
    ORI: { o: 52, t: "B" },
    CPI: { o: 60, t: "B" },
    INB: { o: 8, t: "0" },
    INC: { o: 16, t: "0" },
    IND: { o: 24, t: "0" },
    INE: { o: 32, t: "0" },
    INH: { o: 40, t: "0" },
    INL: { o: 48, t: "0" },
    DCB: { o: 9, t: "0" },
    DCC: { o: 17, t: "0" },
    DCD: { o: 25, t: "0" },
    DCE: { o: 33, t: "0" },
    DCH: { o: 41, t: "0" },
    DCL: { o: 49, t: "0" },
    MVI: { o: 6, t: "RB" },
    MOV: { o: 192, t: "RRR" },
    "ADD-": { o: 128, t: "RR0" },
    "ADC-": { o: 136, t: "RR0" },
    "SUB-": { o: 144, t: "RR0" },
    "SBB-": { o: 152, t: "RR0" },
    ANA: { o: 160, t: "RR0" },
    "XRA-": { o: 168, t: "RR0" },
    "ORA-": { o: 176, t: "RR0" },
    CMP: { o: 184, t: "RR0" },
    INR: { o: 0, t: "RR-" },
    DCR: { o: 1, t: "RR" },
    HLT: { o: 255, t: "0" },
    NOP: { o: 192, t: "0" },
  },
  lens: {
    R: function (t) {
      return "ABCDEHLM".indexOf(t.toUpperCase());
    },
    RDD: function (t) {
      return "BDHSP".indexOf(t.toUpperCase());
    },
    RBD: function (t) {
      return "BD".indexOf(t.toUpperCase());
    },
    RQQ: function (t) {
      return "BDHPSW".indexOf(t.toUpperCase());
    },
    RB: function (t, o) {
      var r = this.R(o[0]);
      if (r < 0) throw "Unknown register " + o[0];
      return [
        (r <<= 3) | t,
        function (t) {
          return Parser.evaluate(o[1], t);
        },
      ];
    },
    B: function (t, o) {
      return [
        t,
        function (t) {
          return Parser.evaluate(o[0], t);
        },
      ];
    },
    RR: function (t, o) {
      var r = this.R(o[0]);
      if (r < 0) throw "Unknown register " + o[0];
      return [(r <<= 3) | t];
    },
    "RR-": function (t, o) {
      var r = this.R(o[0]);
      if (r < 0) throw "Unknown register " + o[0];
      if (0 === r) throw "Canot use A register here";
      return [(r <<= 3) | t];
    },
    RR0: function (t, o) {
      var r = this.R(o[0]);
      if (r < 0) throw "Unknown register " + o[0];
      return [r | t];
    },
    RRR: function (t, o) {
      var r = this.R(o[0]);
      if (r < 0) throw "Unknown register " + o[0];
      var n = this.R(o[1]);
      if (n < 0) throw "Unknown register " + o[1];
      return [(r <<= 3) | n | t];
    },
    RPW: function (t, o) {
      var r = this.RDD(o[0]);
      if (r < 0 || 3 < r) throw "Unknown register " + o[0];
      return [
        (r <<= 4) | t,
        function (t) {
          return Parser.evaluate(o[1], t);
        },
        null,
      ];
    },
    RPWD: function (t, o) {
      var r = this.RDD(o[0]);
      if (r < 0 || 3 < r) throw "Unknown register " + o[0];
      return [(r <<= 4) | t];
    },
    BD: function (t, o) {
      var r = this.RBD(o[0]);
      if (r < 0 || 1 < r) throw "Unknown register " + o[0];
      return [(r <<= 4) | t];
    },
    RQW: function (t, o) {
      var r = this.RQQ(o[0]);
      if (r < 0 || 3 < r) throw "Unknown register " + o[0];
      return [(r <<= 4) | t];
    },
    IW: function (t, o) {
      return [
        t,
        function (t) {
          return Parser.evaluate(o[0], t);
        },
        null,
      ];
    },
    INP: function (t, o, r) {
      var n = Parser.evaluate(o[0], r);
      if (n < 0 || 7 < n) throw "INP address out of limit (0-7): " + o[0];
      return [t + (n << 1)];
    },
    OUT: function (t, o, r) {
      var n = Parser.evaluate(o[0], r);
      if (n < 8 || 31 < n) throw "OUT address out of limit (8-31): " + o[0];
      return [t + ((n -= 8) << 1)];
    },
    RST: function (t, o) {
      return [t | (parseInt(o[0], 10) << 3)];
    },
    0: function (t, o) {
      return [t];
    },
  },
  parseOpcode: function (t, o) {
    var r = I8008.set[t.opcode];
    if (r) {
      t.params &&
        0 <=
          ["CPE", "ADD", "ADC", "SBB", "SUB", "XRA", "ORA"].indexOf(t.opcode) &&
        t.params.length &&
        (r = I8008.set[t.opcode + "-"]);
      var n = r.t,
        L = I8008.lens[n](r.o, t.params, o);
      return (
        (t.bytes = L.length),
        (t.lens = L),
        (t.resolve = L.reduce(function (t, o) {
          return "function" == typeof o ? t + 1 : t;
        }, 0)),
        t
      );
    }
    return null;
  },
};
!(function (e, r) {
  "undefined" != typeof module
    ? ((module.exports = r()), (C6502 = module.exports))
    : "function" == typeof define && "object" == typeof define.amd
    ? define(r)
    : (this.C6502 = r());
})(0, function () {
  var e = {
    set: {
      SLO: [-1, -1, -1, 15, 31, 27, 7, 23, -1, -1, 3, 19, -1, -1, -1],
      RLA: [-1, -1, -1, 47, 63, 59, 39, 55, -1, -1, 35, 51, -1, -1, -1],
      SRE: [-1, -1, -1, 79, 95, 91, 71, 87, -1, -1, 67, 83, -1, -1, -1],
      RRA: [-1, -1, -1, 111, 127, 123, 103, 119, -1, -1, 99, 115, -1, -1, -1],
      SAX: [-1, -1, -1, 143, -1, -1, 135, -1, 151, -1, 131, -1, -1, -1, -1],
      LAX: [-1, -1, 171, 175, -1, 191, 167, -1, 183, -1, 163, 179, -1, -1, -1],
      DCP: [-1, -1, -1, 207, 223, 219, 199, 215, -1, -1, 195, 211, -1, -1, -1],
      ISC: [-1, -1, -1, 239, 255, 251, 231, 247, -1, -1, 227, 243, -1, -1, -1],
      ANC: [-1, -1, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      ALR: [-1, -1, 75, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      ARR: [-1, -1, 107, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      XAA: [-1, -1, 139, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      AXS: [-1, -1, 203, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      AHX: [-1, -1, -1, -1, -1, 159, -1, -1, -1, -1, -1, 147, -1, -1, -1],
      SHY: [-1, -1, -1, -1, 156, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      SHX: [-1, -1, -1, -1, -1, 158, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      TAS: [-1, -1, -1, -1, -1, 155, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      LAS: [-1, -1, -1, -1, -1, 187, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      BRA: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 128, -1, -1],
      PHX: [218, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      PHY: [90, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      PLX: [250, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      PLY: [122, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB0: [-1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB1: [-1, -1, -1, -1, -1, -1, 23, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB2: [-1, -1, -1, -1, -1, -1, 39, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB3: [-1, -1, -1, -1, -1, -1, 55, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB4: [-1, -1, -1, -1, -1, -1, 71, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB5: [-1, -1, -1, -1, -1, -1, 87, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB6: [-1, -1, -1, -1, -1, -1, 103, -1, -1, -1, -1, -1, -1, -1, -1],
      RMB7: [-1, -1, -1, -1, -1, -1, 119, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB0: [-1, -1, -1, -1, -1, -1, 135, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB1: [-1, -1, -1, -1, -1, -1, 151, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB2: [-1, -1, -1, -1, -1, -1, 167, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB3: [-1, -1, -1, -1, -1, -1, 183, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB4: [-1, -1, -1, -1, -1, -1, 199, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB5: [-1, -1, -1, -1, -1, -1, 215, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB6: [-1, -1, -1, -1, -1, -1, 231, -1, -1, -1, -1, -1, -1, -1, -1],
      SMB7: [-1, -1, -1, -1, -1, -1, 247, -1, -1, -1, -1, -1, -1, -1, -1],
      BBR0: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1],
      BBR1: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 31, -1, -1],
      BBR2: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 47, -1, -1],
      BBR3: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 63, -1, -1],
      BBR4: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 79, -1, -1],
      BBR5: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 95, -1, -1],
      BBR6: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 111, -1, -1],
      BBR7: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 127, -1, -1],
      BBS0: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 143, -1, -1],
      BBS1: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 159, -1, -1],
      BBS2: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 175, -1, -1],
      BBS3: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 191, -1, -1],
      BBS4: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 207, -1, -1],
      BBS5: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 223, -1, -1],
      BBS6: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 239, -1, -1],
      BBS7: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 255, -1, -1],
      TRB: [-1, -1, -1, 28, -1, -1, 20, -1, -1, -1, -1, -1, -1, -1, -1],
      TSB: [-1, -1, -1, 12, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1],
      STZ: [-1, -1, -1, 156, 158, -1, 100, 116, -1, -1, -1, -1, -1, -1, -1],
      ADC: [-1, -1, 105, 109, 125, 121, 101, 117, -1, -1, 97, 113, -1, 114, -1],
      AND: [-1, -1, 41, 45, 61, 57, 37, 53, -1, -1, 33, 49, -1, 50, -1],
      ASL: [-1, 10, -1, 14, 30, -1, 6, 22, -1, -1, -1, -1, -1, -1, -1],
      BCC: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 144, -1, -1],
      BCS: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 176, -1, -1],
      BEQ: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 240, -1, -1],
      BIT: [-1, -1, 137, 44, 60, -1, 36, 52, -1, -1, -1, -1, -1, -1, -1],
      BMI: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 48, -1, -1],
      BNE: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 208, -1, -1],
      BPL: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, -1, -1],
      BRK: [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      BVC: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 80, -1, -1],
      BVS: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 112, -1, -1],
      CLC: [24, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CLD: [216, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CLI: [88, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CLV: [184, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      CMP: [
        -1,
        -1,
        201,
        205,
        221,
        217,
        197,
        213,
        -1,
        -1,
        193,
        209,
        -1,
        210,
        -1,
      ],
      CPX: [-1, -1, 224, 236, -1, -1, 228, -1, -1, -1, -1, -1, -1, -1, -1],
      CPY: [-1, -1, 192, 204, -1, -1, 196, -1, -1, -1, -1, -1, -1, -1, -1],
      DEC: [58, -1, -1, 206, 222, -1, 198, 214, -1, -1, -1, -1, -1, -1, -1],
      DEX: [202, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      DEY: [136, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      EOR: [-1, -1, 73, 77, 93, 89, 69, 85, -1, -1, 65, 81, -1, 82, -1],
      INC: [26, -1, -1, 238, 254, -1, 230, 246, -1, -1, -1, -1, -1, -1, -1],
      INX: [232, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      INY: [200, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      JMP: [-1, -1, -1, 76, -1, -1, -1, -1, -1, 108, -1, -1, -1, -1, 124],
      JSR: [-1, -1, -1, 32, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      LDA: [
        -1,
        -1,
        169,
        173,
        189,
        185,
        165,
        181,
        -1,
        -1,
        161,
        177,
        -1,
        178,
        -1,
      ],
      LDX: [-1, -1, 162, 174, -1, 190, 166, -1, 182, -1, -1, -1, -1, -1, -1],
      LDY: [-1, -1, 160, 172, 188, -1, 164, 180, -1, -1, -1, -1, -1, -1, -1],
      LSR: [-1, 74, -1, 78, 94, -1, 70, 86, -1, -1, -1, -1, -1, -1, -1],
      NOP: [234, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      ORA: [-1, -1, 9, 13, 29, 25, 5, 21, -1, -1, 1, 17, -1, 18, -1],
      PHA: [72, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      PHP: [8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      PLA: [104, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      PLP: [40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      ROL: [-1, 42, -1, 46, 62, -1, 38, 54, -1, -1, -1, -1, -1, -1, -1],
      ROR: [-1, 106, -1, 110, 126, -1, 102, 118, -1, -1, -1, -1, -1, -1, -1],
      RTI: [64, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      RTS: [96, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      SBC: [
        -1,
        -1,
        233,
        237,
        253,
        249,
        229,
        245,
        -1,
        -1,
        225,
        241,
        -1,
        242,
        -1,
      ],
      SEC: [56, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      SED: [248, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      SEI: [120, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      STA: [-1, -1, -1, 141, 157, 153, 133, 149, -1, -1, 129, 145, -1, 146, -1],
      STX: [-1, -1, -1, 142, -1, -1, 134, -1, 150, -1, -1, -1, -1, -1, -1],
      STY: [-1, -1, -1, 140, -1, -1, 132, 148, -1, -1, -1, -1, -1, -1, -1],
      TAX: [170, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      TAY: [168, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      TSX: [186, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      TXA: [138, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      TXS: [154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      TYA: [152, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    },
    steptab: [1, 1, 2, 3, 3, 3, 2, 2, 2, 3, 2, 2, 2, 2, 3],
    parseOpcode: function (r, t) {
      var a,
        n,
        u,
        B,
        s,
        l = e.set[r.opcode];
      if (l) {
        if (((B = []), r.params && r.params.length)) {
          if (1 == r.params.length && "A" === r.params[0].toUpperCase()) a = 1;
          else if (1 == r.params.length) {
            if (
              ((n = r.params[0]),
              (a = 3),
              "A" === n && (a = 1),
              "#" === n[0] &&
                ((a = 2),
                (B[1] = function (e) {
                  return Parser.evaluate(n.substr(1), e);
                })),
              "*" === n[0] &&
                ((a = 6),
                (B[1] = function (e) {
                  return Parser.evaluate(n.substr(1), e);
                })),
              t)
            )
              try {
                (s = Parser.evaluate(n, t)) < 256 &&
                  l[6] >= 0 &&
                  ((a = 6),
                  (B[1] = function (e) {
                    return Parser.evaluate(n, e);
                  }));
              } catch (e) {}
            "(" === n[0] &&
              ")" === n[n.length - 1] &&
              (-1 !== l[9] && (a = 9),
              -1 !== l[13] && (a = 13),
              (n = n.substr(1, n.length - 2)),
              (B[1] = function (e) {
                return Parser.evaluate(n, e);
              }),
              9 == a && (B[2] = null)),
              n.match(/^\$[0-9a-f]{1,2}$/i) &&
                l[6] >= 0 &&
                13 !== a &&
                ((a = 6),
                (B[1] = function (e) {
                  return Parser.evaluate(n, e);
                })),
              3 === a &&
                (-1 == l[3] && l[12]
                  ? ((a = 12),
                    (B[1] = function (e) {
                      var r = Parser.evaluate(n, e) - e._PC - 2;
                      return r < 0 && (r = 256 + r), r;
                    }))
                  : ((B[1] = function (e) {
                      return Parser.evaluate(n, e);
                    }),
                    (B[2] = null)));
          } else if (2 == r.params.length) {
            if (((n = r.params[0]), (s = null), t))
              try {
                s = Parser.evaluate(n, t);
              } catch (e) {}
            (u = r.params[1].toUpperCase()),
              n.match(/^\$[0-9a-f]{1,2}$/i) && (l[7] >= 0 || l[8] >= 0)
                ? ("X" === u && l[7] >= 0 && (a = 7),
                  "Y" === u && l[8] >= 0 && (a = 8),
                  (B[1] = function (e) {
                    return Parser.evaluate(n, e);
                  }))
                : "*" === n[0]
                ? ((n = n.substr(1)),
                  "X" === u && (a = 7),
                  "Y" === u && (a = 8),
                  (B[1] = function (e) {
                    return Parser.evaluate(n, e);
                  }))
                : null !== s &&
                  s < 256 &&
                  l[7] >= 0 &&
                  "X" === u &&
                  "(" !== n[0]
                ? ("X" === u && "(" !== n[0] && (a = 7),
                  (B[1] = function (e) {
                    return Parser.evaluate(n, e);
                  }))
                : l[4] < 0 && "X" === u && l[7] >= 0
                ? ((a = 7),
                  (B[1] = function (e) {
                    return Parser.evaluate(n, e);
                  }))
                : null !== s &&
                  s < 256 &&
                  l[8] >= 0 &&
                  "Y" === u &&
                  "(" !== n[0]
                ? ("Y" === u && "(" !== n[0] && (a = 8),
                  (B[1] = function (e) {
                    return Parser.evaluate(n, e);
                  }))
                : ("X" === u &&
                    ((a = 4),
                    (B[1] = function (e) {
                      return Parser.evaluate(n, e);
                    }),
                    (B[2] = null)),
                  "Y" === u &&
                    "(" !== n[0] &&
                    ((a = 5),
                    (B[1] = function (e) {
                      return Parser.evaluate(n, e);
                    }),
                    (B[2] = null)),
                  "Y" === u &&
                    "(" === n[0] &&
                    ((a = 11),
                    (B[1] = function (e) {
                      return Parser.evaluate(n.substr(1, n.length - 2), e);
                    })),
                  "X)" === u &&
                    "(" === n[0] &&
                    ((a = 10),
                    -1 !== l[14] && -1 === l[10] && (a = 14),
                    (B[1] = function (e) {
                      return Parser.evaluate(n.substr(1), e);
                    }),
                    14 == a && (B[2] = null)));
          }
        } else (a = 0), -1 === l[0] && (a = 1);
        if (void 0 === a) throw "Bad addressing mode at line " + r.numline;
        if (((B[0] = l[a]), null === B[0] || "-1" == B[0]))
          throw "Bad addressing mode at line " + r.numline;
        return (r.admode = a), (r.lens = B), (r.bytes = this.steptab[a]), r;
      }
      return null;
    },
  };
  return e;
});
var C65816 = {
  set: {
    COP: [
      -1,
      -1,
      2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    REP: [
      -1,
      -1,
      194,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    SEP: [
      -1,
      -1,
      226,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PHB: [
      139,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PHD: [
      11,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PHK: [
      75,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PHX: [
      218,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PHY: [
      90,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PLB: [
      171,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PLD: [
      43,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PLX: [
      250,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PLY: [
      122,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    RTL: [
      107,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TCS: [
      27,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TSC: [
      59,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TCD: [
      91,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TDC: [
      123,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TXY: [
      155,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TYX: [
      187,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    WAI: [
      203,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    WDM: [
      66,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    STP: [
      219,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    XBA: [
      235,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    XCE: [
      251,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TSB: [
      -1,
      -1,
      -1,
      12,
      -1,
      -1,
      4,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    TRB: [
      -1,
      -1,
      -1,
      28,
      -1,
      -1,
      20,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    STZ: [
      -1,
      -1,
      -1,
      156,
      158,
      -1,
      100,
      116,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    BRA: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      128,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    BRL: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      130,
      -1,
      -1,
    ],
    PER: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      98,
      -1,
      -1,
    ],
    PEI: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      212,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    PEA: [
      -1,
      -1,
      -1,
      244,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    MVP: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      68,
      -1,
    ],
    MVN: [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      84,
      -1,
    ],
    ORA: [
      -1,
      -1,
      9,
      13,
      29,
      25,
      5,
      21,
      -1,
      -1,
      1,
      17,
      -1,
      18,
      7,
      23,
      19,
      15,
      31,
      -1,
      -1,
      -1,
      -1,
      3,
    ],
    AND: [
      -1,
      -1,
      41,
      45,
      61,
      57,
      37,
      53,
      -1,
      -1,
      33,
      49,
      -1,
      50,
      39,
      55,
      51,
      47,
      63,
      -1,
      -1,
      -1,
      -1,
      35,
    ],
    EOR: [
      -1,
      -1,
      73,
      77,
      93,
      89,
      69,
      85,
      -1,
      -1,
      65,
      81,
      -1,
      82,
      71,
      87,
      83,
      79,
      95,
      -1,
      -1,
      -1,
      -1,
      67,
    ],
    ADC: [
      -1,
      -1,
      105,
      109,
      125,
      121,
      101,
      117,
      -1,
      -1,
      97,
      113,
      -1,
      114,
      103,
      119,
      115,
      111,
      127,
      -1,
      -1,
      -1,
      -1,
      99,
    ],
    STA: [
      -1,
      -1,
      -1,
      141,
      157,
      153,
      133,
      149,
      -1,
      -1,
      129,
      145,
      -1,
      146,
      135,
      151,
      147,
      143,
      159,
      -1,
      -1,
      -1,
      -1,
      131,
    ],
    LDA: [
      -1,
      -1,
      169,
      173,
      189,
      185,
      165,
      181,
      -1,
      -1,
      161,
      177,
      -1,
      178,
      167,
      183,
      179,
      175,
      191,
      -1,
      -1,
      -1,
      -1,
      163,
    ],
    CMP: [
      -1,
      -1,
      201,
      205,
      221,
      217,
      197,
      213,
      -1,
      -1,
      193,
      209,
      -1,
      210,
      199,
      215,
      211,
      207,
      223,
      -1,
      -1,
      -1,
      -1,
      195,
    ],
    SBC: [
      -1,
      -1,
      233,
      237,
      253,
      249,
      229,
      245,
      -1,
      -1,
      225,
      241,
      -1,
      242,
      231,
      247,
      243,
      239,
      255,
      -1,
      -1,
      -1,
      -1,
      227,
    ],
    JMP: [
      -1,
      -1,
      -1,
      76,
      -1,
      -1,
      -1,
      -1,
      -1,
      108,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      92,
      -1,
      220,
      124,
      -1,
      -1,
      -1,
    ],
    JSR: [
      -1,
      -1,
      -1,
      32,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      34,
      -1,
      -1,
      252,
      -1,
      -1,
      -1,
    ],
    ASL: [-1, 10, -1, 14, 30, -1, 6, 22, -1, -1, -1, -1, -1],
    BCC: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 144],
    BCS: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 176],
    BEQ: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 240],
    BIT: [-1, -1, 137, 44, 60, -1, 36, 52, -1, -1, -1, -1, -1],
    BMI: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 48],
    BNE: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 208],
    BPL: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16],
    BRK: [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    BVC: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 80],
    BVS: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 112],
    CLC: [24, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    CLD: [216, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    CLI: [88, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    CLV: [184, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    CPX: [-1, -1, 224, 236, -1, -1, 228, -1, -1, -1, -1, -1, -1],
    CPY: [-1, -1, 192, 204, -1, -1, 196, -1, -1, -1, -1, -1, -1],
    DEC: [58, -1, -1, 206, 222, -1, 198, 214, -1, -1, -1, -1, -1],
    DEX: [202, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    DEY: [136, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    INC: [26, -1, -1, 238, 254, -1, 230, 246, -1, -1, -1, -1, -1],
    INX: [232, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    INY: [200, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    LDX: [-1, -1, 162, 174, -1, 190, 166, -1, 182, -1, -1, -1, -1],
    LDY: [-1, -1, 160, 172, 188, -1, 164, 180, -1, -1, -1, -1, -1],
    LSR: [-1, 74, -1, 78, 94, -1, 70, 86, -1, -1, -1, -1, -1],
    NOP: [234, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    PHA: [72, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    PHP: [8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    PLA: [104, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    PLP: [40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ROL: [-1, 42, -1, 46, 62, -1, 38, 54, -1, -1, -1, -1, -1],
    ROR: [-1, 106, -1, 110, 126, -1, 102, 118, -1, -1, -1, -1, -1],
    RTI: [64, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    RTS: [96, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    SEC: [56, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    SED: [248, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    SEI: [120, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    STX: [-1, -1, -1, 142, -1, -1, 134, -1, 150, -1, -1, -1, -1],
    STY: [-1, -1, -1, 140, -1, -1, 132, 148, -1, -1, -1, -1, -1],
    TAX: [170, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    TAY: [168, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    TSX: [186, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    TXA: [138, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    TXS: [154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    TYA: [152, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  },
  steptab: [
    1,
    1,
    2,
    3,
    3,
    3,
    2,
    2,
    2,
    3,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    4,
    4,
    3,
    3,
    3,
    3,
    2,
  ],
  parseOpcode: function (e, r) {
    if (".m16" === e.opcode) return console.log("M16"), null;
    var a,
      t,
      n,
      u,
      s,
      l = C65816.set[e.opcode];
    if (l) {
      if (((u = []), e.params && e.params.length)) {
        if (1 == e.params.length) {
          if (
            ((t = e.params[0]),
            (a = 3),
            "A" === t && (a = 1),
            "#" === t[0] &&
              ((a = 2),
              (u[1] = function (e) {
                return Parser.evaluate(t.substr(1), e);
              })),
            "*" === t[0] &&
              ((a = 6),
              (u[1] = function (e) {
                return Parser.evaluate(t.substr(1), e);
              })),
            r)
          )
            try {
              (s = Parser.evaluate(t, r)) < 256 &&
                l[6] >= 0 &&
                ((a = 6),
                (u[1] = function (e) {
                  return Parser.evaluate(t, e);
                })),
                s > 65535 &&
                  l[17] >= 0 &&
                  ((a = 17),
                  (u[1] = function (e) {
                    return Parser.evaluate(t, e);
                  }),
                  (u[2] = "addr24"),
                  (u[3] = null));
            } catch (e) {}
          if ("(" === t[0] && ")" === t[t.length - 1]) {
            (a = 9),
              (t = t.substr(1, t.length - 2)),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              }),
              (u[2] = null);
            try {
              (s = Parser.evaluate(t, r)) < 256 &&
                l[13] >= 0 &&
                ((a = 13),
                (u[1] = function (e) {
                  return Parser.evaluate(t, e);
                }));
            } catch (e) {}
          }
          t.match(/^\$[0-9a-f]{1,2}$/i) &&
            l[6] >= 0 &&
            13 != a &&
            ((a = 6),
            (u[1] = function (e) {
              return Parser.evaluate(t, e);
            })),
            "[" === t[0] &&
              "]" === t[t.length - 1] &&
              ((a = 14),
              l[19] >= 0 && (a = 19),
              (t = t.substr(1, t.length - 2)),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              })),
            3 === a &&
              (-1 == l[3] && l[12] >= 0
                ? ((a = 12),
                  (u[1] = function (e) {
                    var r = Parser.evaluate(t, e) - e._PC - 2;
                    return r < 0 && (r = 256 + r), r;
                  }))
                : -1 == l[3] && l[21] >= 0
                ? ((a = 21),
                  (u[1] = function (e) {
                    var r = Parser.evaluate(t, e) - e._PC - 2;
                    return r < 0 && (r = 65536 + r), r;
                  }))
                : ((u[1] = function (e) {
                    return Parser.evaluate(t, e);
                  }),
                  (u[2] = null)));
        } else if (3 == e.params.length)
          (t = e.params[0]),
            (n = e.params[1].toUpperCase()),
            "Y" === e.params[2].toUpperCase() &&
              "S)" === n &&
              l[16] >= 0 &&
              ((a = 16),
              (u[1] = function (e) {
                return Parser.evaluate(t.substr(1), e);
              }));
        else if (2 == e.params.length) {
          if (((t = e.params[0]), (s = null), r))
            try {
              s = Parser.evaluate(t, r);
            } catch (e) {}
          if (((n = e.params[1].toUpperCase()), l[22] >= 0))
            (a = 22),
              (n = e.params[1]),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              }),
              (u[2] = function (e) {
                return Parser.evaluate(n, e);
              });
          else if ("S" === n || "s" === n)
            (a = 23),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              });
          else if (t.match(/^\$[0-9a-f]{1,2}$/i))
            "X" === n && (a = 7),
              "Y" === n && (a = 8),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              });
          else if ("*" === t[0])
            (t = t.substr(1)),
              "X" === n && (a = 7),
              "Y" === n && (a = 8),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              });
          else if (
            s &&
            s < 256 &&
            l[7] >= 0 &&
            "X" === n &&
            "(" !== t[0] &&
            "[" !== t[0]
          )
            "X" === n && "(" !== t[0] && (a = 7),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              });
          else if (
            s &&
            s < 256 &&
            l[8] >= 0 &&
            "Y" === n &&
            "(" !== t[0] &&
            "[" !== t[0]
          )
            "Y" === n && "(" !== t[0] && (a = 8),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              });
          else {
            "X" === n &&
              ((a = 4),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              }),
              (u[2] = null));
            try {
              (s = Parser.evaluate(t, r)) > 65535 &&
                l[18] >= 0 &&
                "X" === n &&
                ((a = 18),
                (u[1] = function (e) {
                  return Parser.evaluate(t, e);
                }),
                (u[2] = "addr24"),
                (u[3] = null));
            } catch (e) {}
            "Y" === n &&
              "(" !== t[0] &&
              ((a = 5),
              (u[1] = function (e) {
                return Parser.evaluate(t, e);
              }),
              (u[2] = null)),
              "Y" === n &&
                "(" === t[0] &&
                ((a = 11),
                (u[1] = function (e) {
                  return Parser.evaluate(t.substr(1, t.length - 2), e);
                })),
              "Y" === n &&
                "[" === t[0] &&
                ((a = 15),
                (u[1] = function (e) {
                  return Parser.evaluate(t.substr(1, t.length - 2), e);
                })),
              "X)" === n &&
                "(" === t[0] &&
                ((a = 10),
                l[20] >= 0 && (a = 20),
                (u[1] = function (e) {
                  return Parser.evaluate(t.substr(1), e);
                }));
          }
        }
      } else (a = 0), -1 === l[0] && (a = 1);
      if (((u[0] = l[a]), null === u[0] || "-1" == u[0]))
        throw "Bad addressing mode at line " + e.numline;
      return (
        (e.admode = a),
        (e.lens = u),
        (e.bytes = C65816.steptab[a]),
        r &&
          2 === a &&
          (console.log(r),
          "LDX" === e.opcode || "LDY" === e.opcode
            ? r.__MX && 16 === r.__MX && (e.bytes++, (e.lens[2] = null))
            : ("ADC" !== e.opcode &&
                "AND" !== e.opcode &&
                "BIT" !== e.opcode &&
                "CMP" !== e.opcode &&
                "EOR" !== e.opcode &&
                "LDA" !== e.opcode &&
                "ORA" !== e.opcode &&
                "SBC" !== e.opcode) ||
              (r.__AX && 16 === r.__AX && (e.bytes++, (e.lens[2] = null)))),
        e
      );
    }
    return null;
  },
};
!(function (e, r) {
  "undefined" != typeof module
    ? ((module.exports = r()), (H6309 = module.exports))
    : "function" == typeof define && "object" == typeof define.amd
    ? define(r)
    : (this.H6309 = r());
})(0, function () {
  var e = {
    set: {
      NEG: [-1, 0, 96, 112, -1, -1, -1, -1],
      COM: [-1, 3, 99, 115, -1, -1, -1, -1],
      LSR: [-1, 4, 100, 116, -1, -1, -1, -1],
      ROR: [-1, 6, 102, 118, -1, -1, -1, -1],
      ASR: [-1, 7, 103, 119, -1, -1, -1, -1],
      LSL: [-1, 8, 104, 120, -1, -1, -1, -1],
      ASL: [-1, 8, 104, 120, -1, -1, -1, -1],
      ROL: [-1, 9, 105, 121, -1, -1, -1, -1],
      DEC: [-1, 10, 106, 122, -1, -1, -1, -1],
      INC: [-1, 12, 108, 124, -1, -1, -1, -1],
      TST: [-1, 13, 109, 125, -1, -1, -1, -1],
      JMP: [-1, 14, 110, 126, -1, -1, -1, -1],
      CLR: [-1, 15, 111, 127, -1, -1, -1, -1],
      LEAX: [-1, -1, 48, -1, -1, -1, -1, -1],
      LEAY: [-1, -1, 49, -1, -1, -1, -1, -1],
      LEAS: [-1, -1, 50, -1, -1, -1, -1, -1],
      LEAU: [-1, -1, 51, -1, -1, -1, -1, -1],
      NOP: [18, -1, -1, -1, -1, -1, -1, -1],
      SYNC: [19, -1, -1, -1, -1, -1, -1, -1],
      DAA: [25, -1, -1, -1, -1, -1, -1, -1],
      SEX: [29, -1, -1, -1, -1, -1, -1, -1],
      SEXW: [20, -1, -1, -1, -1, -1, -1, -1],
      RTS: [57, -1, -1, -1, -1, -1, -1, -1],
      ABX: [58, -1, -1, -1, -1, -1, -1, -1],
      RTI: [59, -1, -1, -1, -1, -1, -1, -1],
      CWAI: [-1, -1, -1, -1, -1, 60, -1, -1],
      MUL: [61, -1, -1, -1, -1, -1, -1, -1],
      SWI: [63, -1, -1, -1, -1, -1, -1, -1],
      SWI2: [4159, -1, -1, -1, -1, -1, -1, -1],
      SWI3: [4415, -1, -1, -1, -1, -1, -1, -1],
      NEGA: [64, -1, -1, -1, -1, -1, -1, -1],
      COMA: [67, -1, -1, -1, -1, -1, -1, -1],
      LSRA: [68, -1, -1, -1, -1, -1, -1, -1],
      RORA: [70, -1, -1, -1, -1, -1, -1, -1],
      ASRA: [71, -1, -1, -1, -1, -1, -1, -1],
      LSLA: [72, -1, -1, -1, -1, -1, -1, -1],
      ASLA: [72, -1, -1, -1, -1, -1, -1, -1],
      ROLA: [73, -1, -1, -1, -1, -1, -1, -1],
      DECA: [74, -1, -1, -1, -1, -1, -1, -1],
      INCA: [76, -1, -1, -1, -1, -1, -1, -1],
      TSTA: [77, -1, -1, -1, -1, -1, -1, -1],
      CLRA: [79, -1, -1, -1, -1, -1, -1, -1],
      NEGB: [80, -1, -1, -1, -1, -1, -1, -1],
      COMB: [83, -1, -1, -1, -1, -1, -1, -1],
      LSRB: [84, -1, -1, -1, -1, -1, -1, -1],
      RORB: [86, -1, -1, -1, -1, -1, -1, -1],
      ASRB: [87, -1, -1, -1, -1, -1, -1, -1],
      LSLB: [88, -1, -1, -1, -1, -1, -1, -1],
      ASLB: [88, -1, -1, -1, -1, -1, -1, -1],
      ROLB: [89, -1, -1, -1, -1, -1, -1, -1],
      DECB: [90, -1, -1, -1, -1, -1, -1, -1],
      INCB: [92, -1, -1, -1, -1, -1, -1, -1],
      TSTB: [93, -1, -1, -1, -1, -1, -1, -1],
      CLRB: [95, -1, -1, -1, -1, -1, -1, -1],
      SUBA: [-1, 144, 160, 176, -1, 128, -1, -1],
      CMPA: [-1, 145, 161, 177, -1, 129, -1, -1],
      SBCA: [-1, 146, 162, 178, -1, 130, -1, -1],
      ANDA: [-1, 148, 164, 180, -1, 132, -1, -1],
      BITA: [-1, 149, 165, 181, -1, 133, -1, -1],
      LDA: [-1, 150, 166, 182, -1, 134, -1, -1],
      STA: [-1, 151, 167, 183, -1, -1, -1, -1],
      EORA: [-1, 152, 168, 184, -1, 136, -1, -1],
      ADCA: [-1, 153, 169, 185, -1, 137, -1, -1],
      ORA: [-1, 154, 170, 186, -1, 138, -1, -1],
      ADDA: [-1, 155, 171, 187, -1, 139, -1, -1],
      JSR: [-1, 157, 173, 189, -1, -1, -1, -1],
      SUBD: [-1, 147, 163, 179, -1, -1, 131, -1],
      CMPX: [-1, 156, 172, 188, -1, -1, 140, -1],
      LDX: [-1, 158, 174, 190, -1, -1, 142, -1],
      STX: [-1, 159, 175, 191, -1, -1, -1, -1],
      CMPD: [-1, 4243, 4259, 4275, -1, -1, 4227, -1],
      CMPY: [-1, 4252, 4268, 4284, -1, -1, 4236, -1],
      LDY: [-1, 4254, 4270, 4286, -1, -1, 4238, -1],
      STY: [-1, 4255, 4271, 4287, -1, -1, -1, -1],
      LDS: [-1, 4318, 4334, 4350, -1, -1, 4302, -1],
      STS: [-1, 4319, 4335, 4351, -1, -1, -1, -1],
      CMPE: [-1, 4497, 4513, 4529, -1, 4481, -1, -1],
      CMPF: [-1, 4561, 4577, 4593, -1, 4545, -1, -1],
      CMPW: [-1, 4241, 4257, 4273, -1, -1, 4225, -1],
      SUBB: [-1, 208, 224, 240, -1, 192, -1, -1],
      CMPB: [-1, 209, 225, 241, -1, 193, -1, -1],
      SBCB: [-1, 210, 226, 242, -1, 194, -1, -1],
      ANDB: [-1, 212, 228, 244, -1, 196, -1, -1],
      BITB: [-1, 213, 229, 245, -1, 197, -1, -1],
      LDB: [-1, 214, 230, 246, -1, 198, -1, -1],
      STB: [-1, 215, 231, 247, -1, -1, -1, -1],
      EORB: [-1, 216, 232, 248, -1, 200, -1, -1],
      ADCB: [-1, 217, 233, 249, -1, 201, -1, -1],
      ORB: [-1, 218, 234, 250, -1, 202, -1, -1],
      ADDB: [-1, 219, 235, 251, -1, 203, -1, -1],
      ADDE: [-1, 4507, 4523, 4539, -1, 4491, -1, -1],
      ADDF: [-1, 4571, 4587, 4603, -1, 4555, -1, -1],
      ADDW: [-1, 4251, 4267, 4283, -1, -1, 4235, -1],
      LDE: [-1, 4502, 4518, 4534, -1, 4486, -1, -1],
      LDF: [-1, 4566, 4582, 4598, -1, 4550, -1, -1],
      STE: [-1, 4503, 4519, 4535, -1, -1, -1, -1],
      STF: [-1, 4567, 4583, 4599, -1, -1, -1, -1],
      STQ: [-1, 4317, 4333, 4349, -1, -1, -1, -1],
      SUBE: [-1, 4496, 4512, 4528, -1, 4480, -1, -1],
      SUBF: [-1, 4560, 4576, 4592, -1, 4544, -1, -1],
      ADDD: [-1, 211, 227, 243, -1, -1, 195, -1],
      LDD: [-1, 220, 236, 252, -1, -1, 204, -1],
      STD: [-1, 221, 237, 253, -1, -1, -1, -1],
      LDU: [-1, 222, 238, 254, -1, -1, 206, -1],
      STU: [-1, 223, 239, 255, -1, -1, -1, -1],
      CMPS: [-1, 4508, 4524, 4540, -1, -1, 4492, -1],
      CMPU: [-1, 4499, 4515, 4531, -1, -1, 4483, -1],
      LBRA: [-1, -1, -1, -1, -1, -1, -1, 22],
      LBSR: [-1, -1, -1, -1, -1, -1, -1, 23],
      BSR: [-1, -1, -1, -1, 141, -1, -1, -1],
      BRA: [-1, -1, -1, -1, 32, -1, -1, -1],
      BRN: [-1, -1, -1, -1, 33, -1, -1, -1],
      BHI: [-1, -1, -1, -1, 34, -1, -1, -1],
      BLS: [-1, -1, -1, -1, 35, -1, -1, -1],
      BHS: [-1, -1, -1, -1, 36, -1, -1, -1],
      BCC: [-1, -1, -1, -1, 36, -1, -1, -1],
      BLO: [-1, -1, -1, -1, 37, -1, -1, -1],
      BCS: [-1, -1, -1, -1, 37, -1, -1, -1],
      BNE: [-1, -1, -1, -1, 38, -1, -1, -1],
      BEQ: [-1, -1, -1, -1, 39, -1, -1, -1],
      BVC: [-1, -1, -1, -1, 40, -1, -1, -1],
      BVS: [-1, -1, -1, -1, 41, -1, -1, -1],
      BPL: [-1, -1, -1, -1, 42, -1, -1, -1],
      BMI: [-1, -1, -1, -1, 43, -1, -1, -1],
      BGE: [-1, -1, -1, -1, 44, -1, -1, -1],
      BLT: [-1, -1, -1, -1, 45, -1, -1, -1],
      BGT: [-1, -1, -1, -1, 46, -1, -1, -1],
      BLE: [-1, -1, -1, -1, 47, -1, -1, -1],
      LBRN: [-1, -1, -1, -1, -1, -1, -1, 4129],
      LBHI: [-1, -1, -1, -1, -1, -1, -1, 4130],
      LBLS: [-1, -1, -1, -1, -1, -1, -1, 4131],
      LBHS: [-1, -1, -1, -1, -1, -1, -1, 4132],
      LBCC: [-1, -1, -1, -1, -1, -1, -1, 4132],
      LBLO: [-1, -1, -1, -1, -1, -1, -1, 4133],
      LBCS: [-1, -1, -1, -1, -1, -1, -1, 4133],
      LBNE: [-1, -1, -1, -1, -1, -1, -1, 4134],
      LBEQ: [-1, -1, -1, -1, -1, -1, -1, 4135],
      LBVC: [-1, -1, -1, -1, -1, -1, -1, 4136],
      LBVS: [-1, -1, -1, -1, -1, -1, -1, 4137],
      LBPL: [-1, -1, -1, -1, -1, -1, -1, 4138],
      LBMI: [-1, -1, -1, -1, -1, -1, -1, 4139],
      LBGE: [-1, -1, -1, -1, -1, -1, -1, 4140],
      LBLT: [-1, -1, -1, -1, -1, -1, -1, 4141],
      LBGT: [-1, -1, -1, -1, -1, -1, -1, 4142],
      LBLE: [-1, -1, -1, -1, -1, -1, -1, 4143],
      ORCC: [-1, -1, -1, -1, -1, 26, -1, -1],
      ANDCC: [-1, -1, -1, -1, -1, 28, -1, -1],
      ADCR: [4145, -1, -1, -1, -1, -1, -1, -1],
      ADDR: [4144, -1, -1, -1, -1, -1, -1, -1],
      SUBR: [4146, -1, -1, -1, -1, -1, -1, -1],
      SBCR: [4147, -1, -1, -1, -1, -1, -1, -1],
      ANDR: [4148, -1, -1, -1, -1, -1, -1, -1],
      ORR: [4149, -1, -1, -1, -1, -1, -1, -1],
      EORR: [4150, -1, -1, -1, -1, -1, -1, -1],
      CMPR: [4151, -1, -1, -1, -1, -1, -1, -1],
      PSHSW: [4152, -1, -1, -1, -1, -1, -1, -1],
      PULSW: [4153, -1, -1, -1, -1, -1, -1, -1],
      PSHUW: [4154, -1, -1, -1, -1, -1, -1, -1],
      PULUW: [4155, -1, -1, -1, -1, -1, -1, -1],
      NEGD: [4160, -1, -1, -1, -1, -1, -1, -1],
      COMD: [4163, -1, -1, -1, -1, -1, -1, -1],
      LSRD: [4164, -1, -1, -1, -1, -1, -1, -1],
      RORD: [4166, -1, -1, -1, -1, -1, -1, -1],
      ASRD: [4167, -1, -1, -1, -1, -1, -1, -1],
      ASLD: [4168, -1, -1, -1, -1, -1, -1, -1],
      LSLD: [4168, -1, -1, -1, -1, -1, -1, -1],
      ROLD: [4169, -1, -1, -1, -1, -1, -1, -1],
      DECD: [4170, -1, -1, -1, -1, -1, -1, -1],
      INCD: [4172, -1, -1, -1, -1, -1, -1, -1],
      TSTD: [4173, -1, -1, -1, -1, -1, -1, -1],
      CLRD: [4175, -1, -1, -1, -1, -1, -1, -1],
      COMW: [4179, -1, -1, -1, -1, -1, -1, -1],
      LSRW: [4180, -1, -1, -1, -1, -1, -1, -1],
      RORW: [4182, -1, -1, -1, -1, -1, -1, -1],
      ROLW: [4185, -1, -1, -1, -1, -1, -1, -1],
      DECW: [4186, -1, -1, -1, -1, -1, -1, -1],
      INCW: [4188, -1, -1, -1, -1, -1, -1, -1],
      TSTW: [4189, -1, -1, -1, -1, -1, -1, -1],
      CLRW: [4191, -1, -1, -1, -1, -1, -1, -1],
      SUBW: [-1, 4240, 4256, 4272, -1, -1, 4224, -1],
      CMPW: [-1, 4241, 4257, 4273, -1, -1, 4225, -1],
      SBCD: [-1, 4242, 4258, 4274, -1, -1, 4226, -1],
      ANDD: [-1, 4244, 4260, 4276, -1, -1, 4228, -1],
      BITD: [-1, 4245, 4261, 4277, -1, -1, 4229, -1],
      BITMD: [-1, -1, -1, -1, -1, 4412, -1, -1],
      LDMD: [-1, -1, -1, -1, -1, 4413, -1, -1],
      LDW: [-1, 4246, 4262, 4278, -1, -1, 4230, -1],
      STW: [-1, 4247, 4263, 4279, -1, -1, 4231, -1],
      EORD: [-1, 4248, 4264, 4280, -1, -1, 4232, -1],
      ADCD: [-1, 4249, 4265, 4281, -1, -1, 4233, -1],
      ORD: [-1, 4250, 4266, 4282, -1, -1, 4234, -1],
      ADDW: [-1, 4251, 4267, 4283, -1, -1, 4235, -1],
      DIVD: [-1, 4509, 4525, 4541, -1, -1, 4493, -1],
      DIVQ: [-1, 4510, 4526, 4542, -1, -1, 4494, -1],
      MULD: [-1, 4511, 4527, 4543, -1, -1, 4495, -1],
      LDQ: [-1, 4316, 4332, 4348, -1, -1, 205, -1],
      STQ: [-1, 4317, 4333, 4349, -1, -1, -1, -1],
      COME: [4419, -1, -1, -1, -1, -1, -1, -1],
      DECE: [4426, -1, -1, -1, -1, -1, -1, -1],
      INCE: [4428, -1, -1, -1, -1, -1, -1, -1],
      TSTE: [4429, -1, -1, -1, -1, -1, -1, -1],
      CLRE: [4431, -1, -1, -1, -1, -1, -1, -1],
      COMF: [4435, -1, -1, -1, -1, -1, -1, -1],
      DECF: [4442, -1, -1, -1, -1, -1, -1, -1],
      INCF: [4444, -1, -1, -1, -1, -1, -1, -1],
      TSTF: [4445, -1, -1, -1, -1, -1, -1, -1],
      CLRF: [4447, -1, -1, -1, -1, -1, -1, -1],
      OIM: [-1, 1, 97, 113, -1, -1, -1, -1],
      AIM: [-1, 2, 98, 114, -1, -1, -1, -1],
      EIM: [-1, 5, 101, 117, -1, -1, -1, -1],
      TIM: [-1, 11, 107, 123, -1, -1, -1, -1],
      BAND: [-1, 4400, -1, -1, -1, -1, -1, -1],
      BIAND: [-1, 4401, -1, -1, -1, -1, -1, -1],
      BOR: [-1, 4402, -1, -1, -1, -1, -1, -1],
      BIOR: [-1, 4403, -1, -1, -1, -1, -1, -1],
      BEOR: [-1, 4404, -1, -1, -1, -1, -1, -1],
      BIEOR: [-1, 4405, -1, -1, -1, -1, -1, -1],
      LDBT: [-1, 4406, -1, -1, -1, -1, -1, -1],
      STBT: [-1, 4407, -1, -1, -1, -1, -1, -1],
    },
    parseOpcode: function (r, n) {
      r._dp || (r._dp = 0);
      var t,
        s,
        a,
        o,
        l = function (e) {
          var r = [
            "D",
            "X",
            "Y",
            "U",
            "S",
            "PC",
            "W",
            "V",
            "A",
            "B",
            "CC",
            "DP",
            "",
            "0",
            "E",
            "F",
          ].indexOf(e.toUpperCase());
          if (r < 0) throw "Not recognized register name";
          return r;
        },
        i = function (e) {
          var r = ["D", "X", "Y", "U", "S"].indexOf(e.toUpperCase()[0]);
          if (r < 0) throw "Not recognized register name";
          return r;
        },
        u = function (e) {
          if ("D" == e.toUpperCase()) return 6;
          var r = ["CC", "A", "B", "DP", "X", "Y", "U", "PC"].indexOf(
            e.toUpperCase()
          );
          if (r < 0) throw "Not recognized register name";
          return 1 << r;
        },
        p = function (e) {
          if ("D" == e.toUpperCase()) return 6;
          var r = ["CC", "A", "B", "DP", "X", "Y", "S", "PC"].indexOf(
            e.toUpperCase()
          );
          if (r < 0) throw "Not recognized register name";
          return 1 << r;
        },
        f = e.set[r.opcode],
        C = 0,
        B = -1,
        D = 0,
        d = null;
      if (
        ((r.lens = []),
        "EXG" == r.opcode && (r.lens[0] = 30),
        "TFR" == r.opcode && (r.lens[0] = 31),
        "EXG" == r.opcode || "TFR" == r.opcode)
      ) {
        if (((r.bytes = 2), 2 != r.params.length))
          throw r.opcode + " needs exactly 2 registers  at line " + r.numline;
        return (r.lens[1] = (l(r.params[0]) << 4) + l(r.params[1])), r;
      }
      if ("TFM" == r.opcode) {
        if (2 != r.params.length)
          throw r.opcode + " needs exactly 2 registers  at line " + r.numline;
        var m = r.params[0][1],
          S = r.params[1][1];
        if ("+" == m && "+" == S) r.lens[1] = 56;
        else if ("-" == m && "-" == S) r.lens[1] = 57;
        else if ("+" == m && void 0 === S) r.lens[1] = 58;
        else {
          if (void 0 !== m || "+" != S)
            throw (
              "Invalid combination of " +
              r.opcode +
              " parameters at line " +
              r.numline
            );
          r.lens[1] = 59;
        }
        return (
          (r.lens[0] = 17),
          (r.bytes = 3),
          (r.lens[2] = (i(r.params[0]) << 4) + i(r.params[1])),
          r
        );
      }
      if (
        ["ADDR", "ADCR", "SUBR", "SBCR", "ANDR", "ORR", "EORR", "CMPR"].indexOf(
          r.opcode
        ) >= 0
      ) {
        if (
          ((r.lens[0] = f[0] >> 8),
          (r.lens[1] = 255 & f[0]),
          (r.bytes = 3),
          2 != r.params.length)
        )
          throw r.opcode + " needs exactly 2 registers  at line " + r.numline;
        return (r.lens[2] = (l(r.params[0]) << 4) + l(r.params[1])), r;
      }
      if ("PSHS" == r.opcode) {
        for (
          r.lens[0] = 52, r.bytes = 2, r.lens[1] = 0, o = 0;
          o < r.params.length;
          o++
        )
          r.lens[1] |= u(r.params[o]);
        return r;
      }
      if ("PULS" == r.opcode) {
        for (
          r.lens[0] = 53, r.bytes = 2, r.lens[1] = 0, o = 0;
          o < r.params.length;
          o++
        )
          r.lens[1] |= u(r.params[o]);
        return r;
      }
      if ("PSHU" == r.opcode) {
        for (
          r.lens[0] = 54, r.bytes = 2, r.lens[1] = 0, o = 0;
          o < r.params.length;
          o++
        )
          r.lens[1] |= p(r.params[o]);
        return r;
      }
      if ("PULU" == r.opcode) {
        for (
          r.lens[0] = 55, r.bytes = 2, r.lens[1] = 0, o = 0;
          o < r.params.length;
          o++
        )
          r.lens[1] |= p(r.params[o]);
        return r;
      }
      if (f) {
        if (f[0] >= 0)
          return f[0] > 255
            ? ((r.lens = [f[0] >> 8, 255 & f[0]]), (r.bytes = 2), r)
            : ((r.lens = [f[0]]), (r.bytes = 1), r);
        var b = !1;
        if (
          -1 != ["AIM", "EIM", "OIM", "TIM"].indexOf(r.opcode) &&
          void 0 === r.aimPar
        ) {
          if (((r.aimPar = r.params.shift()), "#" != r.aimPar[0]))
            throw r.opcode + " needs #imm as parameter 1 at line " + r.numline;
          b = !0;
        }
        if (
          -1 !=
          [
            "BAND",
            "BOR",
            "BEOR",
            "BIAND",
            "BIOR",
            "BIEOR",
            "LDBT",
            "STBT",
          ].indexOf(r.opcode)
        ) {
          if (void 0 === r.bandPar) {
            var L, R;
            if (4 == r.params.length)
              (L = r.params[0]),
                (R = r.params[1]),
                (bmb = r.params[2]),
                r.params.shift(),
                r.params.shift(),
                r.params.shift();
            else {
              if (2 != r.params.length)
                throw (
                  r.opcode + " needs 4 or 2 parameters at line " + r.numline
                );
              var c = r.params.shift().split(".");
              (L = c[0]), (R = c[1]);
              var P = r.params[0].split(".");
              (bmb = P[1]), (r.params[0] = P[0]);
            }
            r.bandPar = [L, R, bmb];
          }
          (L = r.bandPar[0]), (R = r.bandPar[1]), (bmb = r.bandPar[2]);
          var A = ["CC", "A", "B"].indexOf(L.toUpperCase());
          if (A < 0)
            throw r.opcode + " needs A, B or CC register at line " + r.numline;
          A <<= 6;
          var v = Parser.evaluate(R, n);
          if (v < 0)
            throw (
              r.opcode +
              " register bit constant has to be between 0 to 7 at line " +
              r.numline
            );
          if (v > 7)
            throw (
              r.opcode +
              " register bit constant has to be between 0 to 7 at line " +
              r.numline
            );
          var h = Parser.evaluate(bmb, n);
          if (h < 0)
            throw (
              r.opcode +
              " memory bit constant has to be between 0 to 7 at line " +
              r.numline
            );
          if (h > 7)
            throw (
              r.opcode +
              " memory bit constant has to be between 0 to 7 at line " +
              r.numline
            );
          (h <<= 3),
            (r.bytes = 4),
            (r.lens[0] = f[1] >> 8),
            (r.lens[1] = 255 & f[1]),
            (r.lens[2] = A + h + v);
          var O = 256 * r._dp,
            E = r.params[0];
          return (
            (r.lens[3] = function (e) {
              return Parser.evaluate(E, e) - O;
            }),
            r
          );
        }
        if (1 == r.params.length && "[" !== r.params[0][0]) {
          if (
            ((r.bytes = 0),
            "#" == (E = r.params[0])[0]
              ? ((D = 1), (C = 5), f[5] < 0 && f[6] >= 0 && (C = 6))
              : "<" == E[0]
              ? ((D = 1), (C = 1))
              : ">" == E[0]
              ? ((D = 1), (C = 3))
              : (f[1] >= 0 && (C = 1),
                f[3] >= 0 && (C = 3),
                f[4] >= 0 && (C = 4),
                f[7] >= 0 && (C = 7),
                (function (e, r, n) {
                  if (n._dp < 0 || n._dp > 255) return !1;
                  try {
                    if (
                      null !== (t = Parser.evaluate(e, r)) &&
                      void 0 !== t &&
                      t >> 8 === n._dp
                    )
                      return !0;
                  } catch (e) {
                    return !1;
                  }
                  return !1;
                })(E, n, r) &&
                  f[1] >= 0 &&
                  (C = 1)),
            -1 == f[C])
          )
            throw "Bad addressing mode at line " + r.numline;
          if (
            ((B = f[C]),
            4 != C &&
              7 != C &&
              (d = D
                ? function (e) {
                    return Parser.evaluate(E.substr(1), e);
                  }
                : function (e) {
                    return Parser.evaluate(E, e);
                  }),
            1 === C && 0 != r._dp)
          ) {
            O = 256 * r._dp;
            d = D
              ? function (e) {
                  return Parser.evaluate(E.substr(1), e) - O;
                }
              : function (e) {
                  return Parser.evaluate(E, e) - O;
                };
          }
          if (
            ((r.bytes += B > 255 ? 2 : 1),
            4 == C &&
              (d = function (e) {
                var r = Parser.evaluate(E, e) - e._PC - 2;
                if (r > 127) throw "Target out of range";
                if (r < -128) throw "Target out of range";
                return r < 0 && (r = 256 + r), r;
              }),
            7 == C &&
              (d = function (e) {
                var n = Parser.evaluate(E, e) - e._PC - r.bytes;
                return n < 0 && (n = 65536 + n), n;
              }),
            (r.lens = B > 255 ? [B >> 8, 255 & B, d] : [B, d]),
            1 == C && r.bytes++,
            5 == C && r.bytes++,
            4 == C && r.bytes++,
            3 == C && ((r.bytes += 2), (r.lens[r.bytes - 1] = null)),
            6 == C && ((r.bytes += 2), (r.lens[r.bytes - 1] = null)),
            7 == C && ((r.bytes += 2), (r.lens[r.bytes - 1] = null)),
            b)
          ) {
            T = r.aimPar.substr(1);
            (U = Parser.evaluate(T, n)) < 0 && (U = 256 + U),
              r.bytes > 2 && (r.lens[3] = r.lens[2]),
              (r.lens[2] = r.lens[1]),
              (r.lens[1] = U),
              r.bytes++;
          }
          return (
            "LDQ" == r.opcode &&
              6 == C &&
              ((r.lens[r.bytes - 1] = "addr32"),
              (r.lens[r.bytes] = null),
              (r.lens[r.bytes + 1] = null),
              (r.bytes += 2)),
            r
          );
        }
        var y = 1;
        if (((r.bytes = 2), b)) {
          var T = r.aimPar.substr(1),
            U = Parser.evaluate(T, n);
          U < 0 && (U = 256 + U), (r.lens[1] = U), y++, r.bytes++;
        }
        if (1 == r.params.length && "[" === r.params[0][0])
          return (
            f[2] > 256
              ? ((r.lens[0] = f[2] >> 8),
                (r.lens[1] = 255 & f[2]),
                (y = 2),
                r.bytes++)
              : (r.lens[0] = f[2]),
            (E = r.params[0]),
            (r.lens[y] = 159),
            (r.lens[y + 1] = function (e) {
              return Parser.evaluate(E.substr(1, E.length - 2), e);
            }),
            (r.lens[y + 2] = null),
            (r.bytes += 2),
            r
          );
        if (f[2] <= 0 || 2 !== r.params.length)
          throw "Bad addressing mode at line " + r.numline;
        f[2] > 256
          ? ((r.lens[0] = f[2] >> 8),
            (r.lens[1] = 255 & f[2]),
            (y = 2),
            r.bytes++)
          : (r.lens[0] = f[2]);
        var g = 0;
        (E = r.params[0]),
          (s = r.params[1]),
          (a = E),
          s,
          "[" == E[0] &&
            "]" == s[s.length - 1] &&
            ((g = 16), (E = E.substr(1)), (s = s.substr(0, s.length - 1)));
        var I = function (e) {
            var r = ["X", "Y", "U", "S"].indexOf(e.toUpperCase());
            if (r < 0) throw "Register name not recognized: " + e;
            return r << 5;
          },
          M = function (e) {
            var r = ["X", "Y", "U", "S", "PC"].indexOf(e.toUpperCase());
            if (4 == r) return 4;
            if (r < 0) throw "Register name not recognized: " + e;
            return r << 5;
          };
        if ("" === E) {
          if ("-" == s[0])
            if ("-" == s[1])
              (r.lens[y] = 131 | I(s.substr(2)) | g),
                "W" == s[0].toUpperCase() && (r.lens[y] = 239 | g);
            else {
              if (g > 0) throw "Cannot use predecrement with 1";
              r.lens[y] = 130 | I(s.substr(1));
            }
          else if ("+" == s[1])
            if ("+" == s[2])
              (r.lens[y] = 129 | I(s.substr(0, 1)) | g),
                "W" == s[0].toUpperCase() && (r.lens[y] = 207 | g);
            else {
              if (g > 0) throw "Cannot use postincrement with 1";
              r.lens[y] = 128 | I(s.substr(0, 1));
            }
          else
            (r.lens[y] = 132 | I(s) | g),
              "W" == s[0].toUpperCase() && (r.lens[y] = 143 | g);
          return r;
        }
        if ("A" === E.toUpperCase()) return (r.lens[y] = 134 | I(s) | g), r;
        if ("B" === E.toUpperCase()) return (r.lens[y] = 133 | I(s) | g), r;
        if ("E" === E.toUpperCase()) return (r.lens[y] = 135 | I(s) | g), r;
        if ("F" === E.toUpperCase()) return (r.lens[y] = 138 | I(s) | g), r;
        if ("D" === E.toUpperCase()) return (r.lens[y] = 139 | I(s) | g), r;
        if ("W" === E.toUpperCase()) return (r.lens[y] = 142 | I(s) | g), r;
        try {
          (t = Parser.evaluate(E, n)), "PC" == s.toUpperCase() && (t -= n._PC);
        } catch (e) {
          t = null;
        }
        return t < 16 && t > -17 && 4 != M(s)
          ? ((r.lens[y] = I(s) | g | (31 & t)), r)
          : t < 256 && t > -129 && null !== t
          ? (t < 0 && (t = 256 + t),
            (r.lens[y] = M(s) | g | 136),
            r.bytes++,
            "PC" == s.toUpperCase()
              ? (r.lens[y + 1] = g
                  ? function (e) {
                      var n = Parser.evaluate(a.substr(1), e) - e._PC - r.bytes;
                      return n < 0 && (n = 256 + n), n;
                    }
                  : function (e) {
                      var n = Parser.evaluate(a, e) - e._PC - r.bytes;
                      return n < 0 && (n = 256 + n), n;
                    })
              : (r.lens[y + 1] = g
                  ? function (e) {
                      return Parser.evaluate(a.substr(1), e);
                    }
                  : function (e) {
                      return Parser.evaluate(a, e);
                    }),
            r)
          : ((r.bytes += 2),
            (r.lens[y] = M(s) | g | 137),
            "W" == s[0].toUpperCase() && (r.lens[y] = 175 | g),
            "PC" == s.toUpperCase()
              ? (r.lens[y + 1] = g
                  ? function (e) {
                      var n = Parser.evaluate(a.substr(1), e) - e._PC - r.bytes;
                      return n < 0 && (n += 65536), n;
                    }
                  : function (e) {
                      var n = Parser.evaluate(a, e) - e._PC - r.bytes;
                      return n < 0 && (n += 65536), n;
                    })
              : (r.lens[y + 1] = g
                  ? function (e) {
                      return Parser.evaluate(a.substr(1), e);
                    }
                  : function (e) {
                      return Parser.evaluate(a, e);
                    }),
            (r.lens[y + 2] = null),
            r);
      }
      return null;
    },
    endian: !0,
  };
  return e;
});
!(function (e, r) {
  "undefined" != typeof module
    ? ((module.exports = r()), (M6809 = module.exports))
    : "function" == typeof define && "object" == typeof define.amd
    ? define(r)
    : (this.M6809 = r());
})(0, function () {
  var e = {
    set: {
      NEG: [-1, 0, 96, 112, -1, -1, -1, -1],
      COM: [-1, 3, 99, 115, -1, -1, -1, -1],
      LSR: [-1, 4, 100, 116, -1, -1, -1, -1],
      ROR: [-1, 6, 102, 118, -1, -1, -1, -1],
      ASR: [-1, 7, 103, 119, -1, -1, -1, -1],
      LSL: [-1, 8, 104, 120, -1, -1, -1, -1],
      ASL: [-1, 8, 104, 120, -1, -1, -1, -1],
      ROL: [-1, 9, 105, 121, -1, -1, -1, -1],
      DEC: [-1, 10, 106, 122, -1, -1, -1, -1],
      INC: [-1, 12, 108, 124, -1, -1, -1, -1],
      TST: [-1, 13, 109, 125, -1, -1, -1, -1],
      JMP: [-1, 14, 110, 126, -1, -1, -1, -1],
      CLR: [-1, 15, 111, 127, -1, -1, -1, -1],
      LEAX: [-1, -1, 48, -1, -1, -1, -1, -1],
      LEAY: [-1, -1, 49, -1, -1, -1, -1, -1],
      LEAS: [-1, -1, 50, -1, -1, -1, -1, -1],
      LEAU: [-1, -1, 51, -1, -1, -1, -1, -1],
      NOP: [18, -1, -1, -1, -1, -1, -1, -1],
      SYNC: [19, -1, -1, -1, -1, -1, -1, -1],
      DAA: [25, -1, -1, -1, -1, -1, -1, -1],
      SEX: [29, -1, -1, -1, -1, -1, -1, -1],
      RTS: [57, -1, -1, -1, -1, -1, -1, -1],
      ABX: [58, -1, -1, -1, -1, -1, -1, -1],
      RTI: [59, -1, -1, -1, -1, -1, -1, -1],
      CWAI: [-1, -1, -1, -1, -1, 60, -1, -1],
      MUL: [61, -1, -1, -1, -1, -1, -1, -1],
      SWI: [63, -1, -1, -1, -1, -1, -1, -1],
      SWI2: [4159, -1, -1, -1, -1, -1, -1, -1],
      SWI3: [4415, -1, -1, -1, -1, -1, -1, -1],
      NEGA: [64, -1, -1, -1, -1, -1, -1, -1],
      COMA: [67, -1, -1, -1, -1, -1, -1, -1],
      LSRA: [68, -1, -1, -1, -1, -1, -1, -1],
      RORA: [70, -1, -1, -1, -1, -1, -1, -1],
      ASRA: [71, -1, -1, -1, -1, -1, -1, -1],
      LSLA: [72, -1, -1, -1, -1, -1, -1, -1],
      ASLA: [72, -1, -1, -1, -1, -1, -1, -1],
      ROLA: [73, -1, -1, -1, -1, -1, -1, -1],
      DECA: [74, -1, -1, -1, -1, -1, -1, -1],
      INCA: [76, -1, -1, -1, -1, -1, -1, -1],
      TSTA: [77, -1, -1, -1, -1, -1, -1, -1],
      CLRA: [79, -1, -1, -1, -1, -1, -1, -1],
      NEGB: [80, -1, -1, -1, -1, -1, -1, -1],
      COMB: [83, -1, -1, -1, -1, -1, -1, -1],
      LSRB: [84, -1, -1, -1, -1, -1, -1, -1],
      RORB: [86, -1, -1, -1, -1, -1, -1, -1],
      ASRB: [87, -1, -1, -1, -1, -1, -1, -1],
      LSLB: [88, -1, -1, -1, -1, -1, -1, -1],
      ASLB: [88, -1, -1, -1, -1, -1, -1, -1],
      ROLB: [89, -1, -1, -1, -1, -1, -1, -1],
      DECB: [90, -1, -1, -1, -1, -1, -1, -1],
      INCB: [92, -1, -1, -1, -1, -1, -1, -1],
      TSTB: [93, -1, -1, -1, -1, -1, -1, -1],
      CLRB: [95, -1, -1, -1, -1, -1, -1, -1],
      SUBA: [-1, 144, 160, 176, -1, 128, -1, -1],
      CMPA: [-1, 145, 161, 177, -1, 129, -1, -1],
      SBCA: [-1, 146, 162, 178, -1, 130, -1, -1],
      ANDA: [-1, 148, 164, 180, -1, 132, -1, -1],
      BITA: [-1, 149, 165, 181, -1, 133, -1, -1],
      LDA: [-1, 150, 166, 182, -1, 134, -1, -1],
      STA: [-1, 151, 167, 183, -1, -1, -1, -1],
      EORA: [-1, 152, 168, 184, -1, 136, -1, -1],
      ADCA: [-1, 153, 169, 185, -1, 137, -1, -1],
      ORA: [-1, 154, 170, 186, -1, 138, -1, -1],
      ADDA: [-1, 155, 171, 187, -1, 139, -1, -1],
      JSR: [-1, 157, 173, 189, -1, -1, -1, -1],
      SUBD: [-1, 147, 163, 179, -1, -1, 131, -1],
      CMPX: [-1, 156, 172, 188, -1, -1, 140, -1],
      LDX: [-1, 158, 174, 190, -1, -1, 142, -1],
      STX: [-1, 159, 175, 191, -1, -1, -1, -1],
      CMPD: [-1, 4243, 4259, 4275, -1, -1, 4227, -1],
      CMPY: [-1, 4252, 4268, 4284, -1, -1, 4236, -1],
      LDY: [-1, 4254, 4270, 4286, -1, -1, 4238, -1],
      STY: [-1, 4255, 4271, 4287, -1, -1, -1, -1],
      LDS: [-1, 4318, 4334, 4350, -1, -1, 4302, -1],
      STS: [-1, 4319, 4335, 4351, -1, -1, -1, -1],
      SUBB: [-1, 208, 224, 240, -1, 192, -1, -1],
      CMPB: [-1, 209, 225, 241, -1, 193, -1, -1],
      SBCB: [-1, 210, 226, 242, -1, 194, -1, -1],
      ANDB: [-1, 212, 228, 244, -1, 196, -1, -1],
      BITB: [-1, 213, 229, 245, -1, 197, -1, -1],
      LDB: [-1, 214, 230, 246, -1, 198, -1, -1],
      STB: [-1, 215, 231, 247, -1, -1, -1, -1],
      EORB: [-1, 216, 232, 248, -1, 200, -1, -1],
      ADCB: [-1, 217, 233, 249, -1, 201, -1, -1],
      ORB: [-1, 218, 234, 250, -1, 202, -1, -1],
      ADDB: [-1, 219, 235, 251, -1, 203, -1, -1],
      ADDD: [-1, 211, 227, 243, -1, -1, 195, -1],
      LDD: [-1, 220, 236, 252, -1, -1, 204, -1],
      STD: [-1, 221, 237, 253, -1, -1, -1, -1],
      LDU: [-1, 222, 238, 254, -1, -1, 206, -1],
      STU: [-1, 223, 239, 255, -1, -1, -1, -1],
      CMPS: [-1, 4508, 4524, 4540, -1, -1, 4492, -1],
      CMPU: [-1, 4499, 4515, 4531, -1, -1, 4483, -1],
      LBRA: [-1, -1, -1, -1, -1, -1, -1, 22],
      LBSR: [-1, -1, -1, -1, -1, -1, -1, 23],
      BSR: [-1, -1, -1, -1, 141, -1, -1, -1],
      BRA: [-1, -1, -1, -1, 32, -1, -1, -1],
      BRN: [-1, -1, -1, -1, 33, -1, -1, -1],
      BHI: [-1, -1, -1, -1, 34, -1, -1, -1],
      BLS: [-1, -1, -1, -1, 35, -1, -1, -1],
      BHS: [-1, -1, -1, -1, 36, -1, -1, -1],
      BCC: [-1, -1, -1, -1, 36, -1, -1, -1],
      BLO: [-1, -1, -1, -1, 37, -1, -1, -1],
      BCS: [-1, -1, -1, -1, 37, -1, -1, -1],
      BNE: [-1, -1, -1, -1, 38, -1, -1, -1],
      BEQ: [-1, -1, -1, -1, 39, -1, -1, -1],
      BVC: [-1, -1, -1, -1, 40, -1, -1, -1],
      BVS: [-1, -1, -1, -1, 41, -1, -1, -1],
      BPL: [-1, -1, -1, -1, 42, -1, -1, -1],
      BMI: [-1, -1, -1, -1, 43, -1, -1, -1],
      BGE: [-1, -1, -1, -1, 44, -1, -1, -1],
      BLT: [-1, -1, -1, -1, 45, -1, -1, -1],
      BGT: [-1, -1, -1, -1, 46, -1, -1, -1],
      BLE: [-1, -1, -1, -1, 47, -1, -1, -1],
      LBRN: [-1, -1, -1, -1, -1, -1, -1, 4129],
      LBHI: [-1, -1, -1, -1, -1, -1, -1, 4130],
      LBLS: [-1, -1, -1, -1, -1, -1, -1, 4131],
      LBHS: [-1, -1, -1, -1, -1, -1, -1, 4132],
      LBCC: [-1, -1, -1, -1, -1, -1, -1, 4132],
      LBLO: [-1, -1, -1, -1, -1, -1, -1, 4133],
      LBCS: [-1, -1, -1, -1, -1, -1, -1, 4133],
      LBNE: [-1, -1, -1, -1, -1, -1, -1, 4134],
      LBEQ: [-1, -1, -1, -1, -1, -1, -1, 4135],
      LBVC: [-1, -1, -1, -1, -1, -1, -1, 4136],
      LBVS: [-1, -1, -1, -1, -1, -1, -1, 4137],
      LBPL: [-1, -1, -1, -1, -1, -1, -1, 4138],
      LBMI: [-1, -1, -1, -1, -1, -1, -1, 4139],
      LBGE: [-1, -1, -1, -1, -1, -1, -1, 4140],
      LBLT: [-1, -1, -1, -1, -1, -1, -1, 4141],
      LBGT: [-1, -1, -1, -1, -1, -1, -1, 4142],
      LBLE: [-1, -1, -1, -1, -1, -1, -1, 4143],
      ORCC: [-1, -1, -1, -1, -1, 26, -1, -1],
      ANDCC: [-1, -1, -1, -1, -1, 28, -1, -1],
    },
    parseOpcode: function (r, n) {
      r._dp || (r._dp = 0);
      var t,
        s,
        a,
        u,
        l,
        o = function (e) {
          var r = [
            "D",
            "X",
            "Y",
            "U",
            "S",
            "PC",
            "",
            "",
            "A",
            "B",
            "CC",
            "DP",
          ].indexOf(e.toUpperCase());
          if (r < 0) throw "Not recognized register name";
          return r;
        },
        i = function (e) {
          if ("D" == e.toUpperCase()) return 6;
          var r = ["CC", "A", "B", "DP", "X", "Y", "U", "PC"].indexOf(
            e.toUpperCase()
          );
          if (r < 0) throw "Not recognized register name";
          return 1 << r;
        },
        f = function (e) {
          if ("D" == e.toUpperCase()) return 6;
          var r = ["CC", "A", "B", "DP", "X", "Y", "S", "PC"].indexOf(
            e.toUpperCase()
          );
          if (r < 0) throw "Not recognized register name";
          return 1 << r;
        },
        B = e.set[r.opcode],
        p = 0,
        C = -1,
        L = 0,
        S = null;
      if (
        ((r.lens = []),
        "EXG" == r.opcode && (r.lens[0] = 30),
        "TFR" == r.opcode && (r.lens[0] = 31),
        "EXG" == r.opcode || "TFR" == r.opcode)
      ) {
        if (((r.bytes = 2), 2 != r.params.length))
          throw r.opcode + " needs exactly 2 registers  at line " + r.numline;
        return (r.lens[1] = (o(r.params[0]) << 4) + o(r.params[1])), r;
      }
      if ("PSHS" == r.opcode) {
        for (
          r.lens[0] = 52, r.bytes = 2, r.lens[1] = 0, l = 0;
          l < r.params.length;
          l++
        )
          r.lens[1] |= i(r.params[l]);
        return r;
      }
      if ("PULS" == r.opcode) {
        for (
          r.lens[0] = 53, r.bytes = 2, r.lens[1] = 0, l = 0;
          l < r.params.length;
          l++
        )
          r.lens[1] |= i(r.params[l]);
        return r;
      }
      if ("PSHU" == r.opcode) {
        for (
          r.lens[0] = 54, r.bytes = 2, r.lens[1] = 0, l = 0;
          l < r.params.length;
          l++
        )
          r.lens[1] |= f(r.params[l]);
        return r;
      }
      if ("PULU" == r.opcode) {
        for (
          r.lens[0] = 55, r.bytes = 2, r.lens[1] = 0, l = 0;
          l < r.params.length;
          l++
        )
          r.lens[1] |= f(r.params[l]);
        return r;
      }
      if (B) {
        if (B[0] >= 0)
          return B[0] > 255
            ? ((r.lens = [B[0] >> 8, 255 & B[0]]), (r.bytes = 2), r)
            : ((r.lens = [B[0]]), (r.bytes = 1), r);
        if (1 == r.params.length && "[" !== r.params[0][0]) {
          if (
            ((r.bytes = 0),
            "#" == (s = r.params[0])[0]
              ? ((L = 1), (p = 5), B[5] < 0 && B[6] >= 0 && (p = 6))
              : "<" == s[0]
              ? ((L = 1), (p = 1))
              : ">" == s[0]
              ? ((L = 1), (p = 3))
              : (B[1] >= 0 && (p = 1),
                B[3] >= 0 && (p = 3),
                B[4] >= 0 && (p = 4),
                B[7] >= 0 && (p = 7),
                (function (e, r, n) {
                  if (n._dp < 0 || n._dp > 255) return !1;
                  try {
                    if (
                      null !== (t = Parser.evaluate(e, r)) &&
                      void 0 !== t &&
                      t >> 8 === n._dp
                    )
                      return !0;
                  } catch (e) {
                    return !1;
                  }
                  return !1;
                })(s, n, r) &&
                  B[1] >= 0 &&
                  (p = 1)),
            -1 == B[p])
          )
            throw "Bad addressing mode at line " + r.numline;
          if (
            ((C = B[p]),
            4 != p &&
              7 != p &&
              (S = L
                ? function (e) {
                    return Parser.evaluate(s.substr(1), e);
                  }
                : function (e) {
                    return Parser.evaluate(s, e);
                  }),
            1 === p && 0 != r._dp)
          ) {
            var A = 256 * r._dp;
            S = L
              ? function (e) {
                  return Parser.evaluate(s.substr(1), e) - A;
                }
              : function (e) {
                  return Parser.evaluate(s, e) - A;
                };
          }
          return (
            (r.bytes += C > 255 ? 2 : 1),
            4 == p &&
              (S = function (e) {
                var r = Parser.evaluate(s, e) - e._PC - 2;
                if (r > 127) throw "Target out of range";
                if (r < -128) throw "Target out of range";
                return r < 0 && (r = 256 + r), r;
              }),
            7 == p &&
              (S = function (e) {
                var n = Parser.evaluate(s, e) - e._PC - r.bytes;
                return n < 0 && (n = 65536 + n), n;
              }),
            (r.lens = C > 255 ? [C >> 8, 255 & C, S] : [C, S]),
            1 == p && r.bytes++,
            5 == p && r.bytes++,
            4 == p && r.bytes++,
            3 == p && ((r.bytes += 2), (r.lens[r.bytes - 1] = null)),
            6 == p && ((r.bytes += 2), (r.lens[r.bytes - 1] = null)),
            7 == p && ((r.bytes += 2), (r.lens[r.bytes - 1] = null)),
            r
          );
        }
        var c = 1;
        if (((r.bytes = 2), 1 == r.params.length && "[" === r.params[0][0]))
          return (
            B[2] > 256
              ? ((r.lens[0] = B[2] >> 8),
                (r.lens[1] = 255 & B[2]),
                (c = 2),
                r.bytes++)
              : (r.lens[0] = B[2]),
            (s = r.params[0]),
            (r.lens[c] = 159),
            (r.lens[c + 1] = function (e) {
              return Parser.evaluate(s.substr(1, s.length - 2), e);
            }),
            (r.lens[c + 2] = null),
            (r.bytes += 2),
            r
          );
        if (B[2] <= 0 || 2 !== r.params.length)
          throw "Bad addressing mode at line " + r.numline;
        B[2] > 256
          ? ((r.lens[0] = B[2] >> 8),
            (r.lens[1] = 255 & B[2]),
            (c = 2),
            r.bytes++)
          : (r.lens[0] = B[2]);
        var d = 0;
        (s = r.params[0]),
          (a = r.params[1]),
          (u = s),
          a,
          "[" == s[0] &&
            "]" == a[a.length - 1] &&
            ((d = 16), (s = s.substr(1)), (a = a.substr(0, a.length - 1)));
        var P = function (e) {
            var r = ["X", "Y", "U", "S"].indexOf(e.toUpperCase());
            if (r < 0) throw "Register name not recognized: " + e;
            return r << 5;
          },
          b = function (e) {
            var r = ["X", "Y", "U", "S", "PC"].indexOf(e.toUpperCase());
            if (4 == r) return 4;
            if (r < 0) throw "Register name not recognized: " + e;
            return r << 5;
          };
        if ("" === s) {
          if ("-" == a[0])
            if ("-" == a[1]) r.lens[c] = 131 | P(a.substr(2)) | d;
            else {
              if (d > 0) throw "Cannot use predecrement with 1";
              r.lens[c] = 130 | P(a.substr(1));
            }
          else if ("+" == a[1])
            if ("+" == a[2]) r.lens[c] = 129 | P(a.substr(0, 1)) | d;
            else {
              if (d > 0) throw "Cannot use postincrement with 1";
              r.lens[c] = 128 | P(a.substr(0, 1));
            }
          else r.lens[c] = 132 | P(a) | d;
          return r;
        }
        if ("A" === s.toUpperCase()) return (r.lens[c] = 134 | P(a) | d), r;
        if ("B" === s.toUpperCase()) return (r.lens[c] = 133 | P(a) | d), r;
        if ("D" === s.toUpperCase()) return (r.lens[c] = 139 | P(a) | d), r;
        try {
          (t = Parser.evaluate(s, n)), "PC" == a.toUpperCase() && (t -= n._PC);
        } catch (e) {
          t = null;
        }
        return t > 65519 && 4 != b(a)
          ? ((r.lens[c] = P(a) | d | ((32 - (65536 - t)) & 31)), r)
          : t < 16 && t > -17 && 4 != b(a)
          ? ((r.lens[c] = P(a) | d | (31 & t)), r)
          : t < 128 && t > -129 && null !== t
          ? (t < 0 && (t = 256 + t),
            (r.lens[c] = b(a) | d | 136),
            r.bytes++,
            "PC" == a.toUpperCase()
              ? (r.lens[c + 1] = d
                  ? function (e) {
                      var n = Parser.evaluate(u.substr(1), e) - e._PC - r.bytes;
                      return n < 0 && (n = 256 + n), n;
                    }
                  : function (e) {
                      var n = Parser.evaluate(u, e) - e._PC - r.bytes;
                      return n < 0 && (n = 256 + n), n;
                    })
              : (r.lens[c + 1] = d
                  ? function (e) {
                      return Parser.evaluate(u.substr(1), e);
                    }
                  : function (e) {
                      return Parser.evaluate(u, e);
                    }),
            r)
          : ((r.bytes += 2),
            (r.lens[c] = b(a) | d | 137),
            "PC" == a.toUpperCase()
              ? (r.lens[c + 1] = d
                  ? function (e) {
                      var n = Parser.evaluate(u.substr(1), e) - e._PC - r.bytes;
                      return n < 0 && (n += 65536), n;
                    }
                  : function (e) {
                      var n = Parser.evaluate(u, e) - e._PC - r.bytes;
                      return n < 0 && (n += 65536), n;
                    })
              : (r.lens[c + 1] = d
                  ? function (e) {
                      return Parser.evaluate(u.substr(1), e);
                    }
                  : function (e) {
                      return Parser.evaluate(u, e);
                    }),
            (r.lens[c + 2] = null),
            r);
      }
      return null;
    },
    endian: !0,
  };
  return e;
});
var M6800 = {
  set: {
    ABA: [27, -1, -1, -1, -1, -1, -1],
    ADCA: [-1, 153, -1, 185, 169, 137, -1],
    ADCB: [-1, 217, -1, 249, 233, 201, -1],
    ADDA: [-1, 155, -1, 187, 171, 139, -1],
    ADDB: [-1, 219, -1, 251, 235, 203, -1],
    ANDA: [-1, 148, -1, 180, 164, 132, -1],
    ANDB: [-1, 212, -1, 244, 228, 196, -1],
    ASL: [-1, -1, -1, 120, 104, -1, -1],
    ASLA: [72, -1, -1, -1, -1, -1, -1],
    ASLB: [88, -1, -1, -1, -1, -1, -1],
    ASR: [-1, -1, -1, 119, 103, -1, -1],
    ASRA: [71, -1, -1, -1, -1, -1, -1],
    ASRB: [87, -1, -1, -1, -1, -1, -1],
    BCC: [-1, -1, -1, -1, -1, -1, 36],
    BCS: [-1, -1, -1, -1, -1, -1, 37],
    BEQ: [-1, -1, -1, -1, -1, -1, 39],
    BGE: [-1, -1, -1, -1, -1, -1, 44],
    BGT: [-1, -1, -1, -1, -1, -1, 46],
    BHI: [-1, -1, -1, -1, -1, -1, 34],
    BITA: [-1, 149, -1, 181, 165, 133, -1],
    BITB: [-1, 213, -1, 245, 229, 197, -1],
    BLE: [-1, -1, -1, -1, -1, -1, 47],
    BLS: [-1, -1, -1, -1, -1, -1, 35],
    BLT: [-1, -1, -1, -1, -1, -1, 45],
    BMI: [-1, -1, -1, -1, -1, -1, 43],
    BNE: [-1, -1, -1, -1, -1, -1, 38],
    BPL: [-1, -1, -1, -1, -1, -1, 42],
    BRA: [-1, -1, -1, -1, -1, -1, 32],
    BSR: [-1, -1, -1, -1, -1, -1, 141],
    BVC: [-1, -1, -1, -1, -1, -1, 40],
    BVS: [-1, -1, -1, -1, -1, -1, 41],
    CBA: [17, -1, -1, -1, -1, -1, -1],
    CLC: [12, -1, -1, -1, -1, -1, -1],
    CLI: [14, -1, -1, -1, -1, -1, -1],
    CLR: [-1, -1, -1, 127, 111, -1, -1],
    CLRA: [79, -1, -1, -1, -1, -1, -1],
    CLRB: [95, -1, -1, -1, -1, -1, -1],
    CLV: [10, -1, -1, -1, -1, -1, -1],
    CMPA: [-1, 145, -1, 177, 161, 129, -1],
    CMPB: [-1, 209, -1, 241, 225, 193, -1],
    COM: [-1, -1, -1, 115, 99, -1, -1],
    COMA: [67, -1, -1, -1, -1, -1, -1],
    COMB: [83, -1, -1, -1, -1, -1, -1],
    CPX: [-1, 156, 140, 188, 172, -1, -1],
    DAA: [25, -1, -1, -1, -1, -1, -1],
    DEC: [-1, -1, -1, 122, 106, -1, -1],
    DECA: [74, -1, -1, -1, -1, -1, -1],
    DECB: [90, -1, -1, -1, -1, -1, -1],
    DES: [52, -1, -1, -1, -1, -1, -1],
    DEX: [9, -1, -1, -1, -1, -1, -1],
    EORA: [-1, 152, -1, 184, 168, 136, -1],
    EORB: [-1, 216, -1, 248, 232, 200, -1],
    INC: [-1, -1, -1, 124, 108, -1, -1],
    INCA: [76, -1, -1, -1, -1, -1, -1],
    INCB: [92, -1, -1, -1, -1, -1, -1],
    INS: [49, -1, -1, -1, -1, -1, -1],
    INX: [8, -1, -1, -1, -1, -1, -1],
    JMP: [-1, -1, -1, 126, 110, -1, -1],
    JSR: [-1, -1, -1, 189, 173, -1, -1],
    LDAA: [-1, 150, -1, 182, 166, 134, -1],
    LDAB: [-1, 214, -1, 246, 230, 198, -1],
    LDS: [-1, 158, 142, 190, 174, -1, -1],
    LDX: [-1, 222, 206, 254, 238, -1, -1],
    LSR: [-1, -1, -1, 116, 100, -1, -1],
    LSRA: [68, -1, -1, -1, -1, -1, -1],
    LSRB: [84, -1, -1, -1, -1, -1, -1],
    NEG: [-1, -1, -1, 112, 96, -1, -1],
    NEGA: [64, -1, -1, -1, -1, -1, -1],
    NEGB: [80, -1, -1, -1, -1, -1, -1],
    NOP: [1, -1, -1, -1, -1, -1, -1],
    ORAA: [-1, 154, -1, 186, 170, 138, -1],
    ORAB: [-1, 218, -1, 250, 234, 202, -1],
    PSHA: [54, -1, -1, -1, -1, -1, -1],
    PSHB: [55, -1, -1, -1, -1, -1, -1],
    PULA: [50, -1, -1, -1, -1, -1, -1],
    PULB: [51, -1, -1, -1, -1, -1, -1],
    ROL: [-1, -1, -1, 121, 105, -1, -1],
    ROLA: [73, -1, -1, -1, -1, -1, -1],
    ROLB: [89, -1, -1, -1, -1, -1, -1],
    ROR: [-1, -1, -1, 118, 102, -1, -1],
    RORA: [70, -1, -1, -1, -1, -1, -1],
    RORB: [86, -1, -1, -1, -1, -1, -1],
    RTI: [59, -1, -1, -1, -1, -1, -1],
    RTS: [57, -1, -1, -1, -1, -1, -1],
    SBA: [16, -1, -1, -1, -1, -1, -1],
    SBCA: [-1, 146, -1, 178, 162, 130, -1],
    SBCB: [-1, 210, -1, 242, 226, 194, -1],
    SEC: [13, -1, -1, -1, -1, -1, -1],
    SEI: [15, -1, -1, -1, -1, -1, -1],
    SEV: [11, -1, -1, -1, -1, -1, -1],
    STAA: [-1, 151, -1, 183, 167, -1, -1],
    STAB: [-1, 215, -1, 247, 231, -1, -1],
    STS: [-1, 159, -1, 191, 175, -1, -1],
    STX: [-1, 223, -1, 255, 239, -1, -1],
    SUBA: [-1, 144, -1, 176, 160, 128, -1],
    SUBB: [-1, 208, -1, 240, 224, 192, -1],
    SWI: [63, -1, -1, -1, -1, -1, -1],
    TAB: [22, -1, -1, -1, -1, -1, -1],
    TAP: [6, -1, -1, -1, -1, -1, -1],
    TBA: [23, -1, -1, -1, -1, -1, -1],
    TPA: [7, -1, -1, -1, -1, -1, -1],
    TST: [-1, -1, -1, 125, 109, -1, -1],
    TSTA: [77, -1, -1, -1, -1, -1, -1],
    TSTB: [93, -1, -1, -1, -1, -1, -1],
    TSX: [48, -1, -1, -1, -1, -1, -1],
    TXS: [53, -1, -1, -1, -1, -1, -1],
    WAI: [62, -1, -1, -1, -1, -1, -1],
  },
  parseOpcode: function (r, e) {
    var a,
      s = r.opcode;
    if (!r.opcode) return null;
    if (
      r.params &&
      3 == s.length &&
      !(
        ("A" != r.params[0] && "B" != r.params[0]) ||
        (1 != r.params[0].indexOf(" ") && 1 != r.params[0].length)
      )
    ) {
      var n = r.params[0] + "";
      (r.reg6800 = n.substr(0, 1).toUpperCase()),
        (r.params[0] = n.substr(2).trim()),
        (r.paramstring = r.paramstring.substr(2).trim()),
        (s += r.reg6800);
    }
    var t = M6800.set[s];
    if (((r.opcode = s), (r.lens = []), t)) {
      if (t[0] >= 0)
        return t[0] > 255
          ? ((r.lens = [t[0] >> 8, 255 & t[0]]), (r.bytes = 2), r)
          : ((r.lens = [t[0]]), (r.bytes = 1), r);
      if (
        ((a = r.params[0] + ""),
        r.params[0] && r.params[0].length > 0 && !r.params[1])
      ) {
        var A = t[1],
          B = t[2],
          u = t[3],
          S = t[5],
          l = t[6];
        if (l > -1)
          return (
            (r.lens[0] = l),
            (r.lens[1] = function (r) {
              var e = Parser.evaluate(a, r) - r._PC - 2;
              return e < 0 && (e = 256 + e), e;
            }),
            (r.bytes = 2),
            r
          );
        if ("#" == a[0] && B > -1)
          return (
            (r.lens[0] = B),
            (r.lens[1] = function (r) {
              return Parser.evaluate(a.substr(1), r);
            }),
            (r.lens[2] = null),
            (r.bytes = 3),
            r
          );
        if ("#" == a[0] && S > -1)
          return (
            (r.lens[0] = S),
            (r.lens[1] = function (r) {
              return Parser.evaluate(a.substr(1), r);
            }),
            (r.bytes = 2),
            r
          );
        if (A > -1 && e) {
          var C = null;
          try {
            C = Parser.evaluate(a, e);
          } catch (r) {}
          if (C < 256 && C >= 0)
            return (
              (r.lens[0] = A),
              (r.lens[1] = function (r) {
                return Parser.evaluate(a, r);
              }),
              (r.bytes = 2),
              r
            );
        }
        if (u > -1)
          return (
            (r.lens[0] = u),
            (r.lens[1] = function (r) {
              return Parser.evaluate(a, r);
            }),
            (r.lens[2] = null),
            (r.bytes = 3),
            r
          );
      }
      if (t[4] > -1 && "X" == r.params[1].toUpperCase())
        return (
          (r.lens[0] = t[4]),
          (r.lens[1] = function (r) {
            return Parser.evaluate(a, r);
          }),
          (r.bytes = 2),
          r
        );
    }
    return null;
  },
  endian: !0,
};
var CDP1802 = {
  set: {
    ADC: [116, 0],
    ADCI: [124, 1],
    ADD: [244, 0],
    ADI: [252, 1],
    AND: [242, 0],
    ANI: [250, 1],
    B1: [52, 3],
    B2: [53, 3],
    B3: [54, 3],
    B4: [55, 3],
    BDF: [51, 3],
    BN1: [60, 3],
    BN2: [61, 3],
    BN3: [62, 3],
    BN4: [63, 3],
    BNF: [59, 3],
    BNQ: [57, 3],
    BNZ: [58, 3],
    BQ: [49, 3],
    BR: [48, 3],
    BZ: [50, 3],
    DEC: [32, 2],
    DIS: [113, 0],
    GHI: [144, 2],
    GLO: [128, 2],
    IDL: [0, 0],
    INC: [16, 2],
    INP: [104, 5],
    IRX: [96, 0],
    LBDF: [195, 4],
    LBNF: [203, 4],
    LBNQ: [201, 4],
    LBNZ: [202, 4],
    LBQ: [193, 4],
    LBR: [192, 4],
    LBZ: [194, 4],
    LDA: [64, 2],
    LDI: [248, 1],
    LDN: [0, 2],
    LDX: [240, 0],
    LDXA: [114, 0],
    LSDF: [207, 0],
    LSIE: [204, 0],
    LSKP: [200, 0],
    LSNF: [199, 0],
    LSNQ: [197, 0],
    LSNZ: [198, 0],
    LSQ: [205, 0],
    LSZ: [206, 0],
    MARK: [121, 0],
    NOP: [196, 0],
    OR: [241, 0],
    ORI: [249, 1],
    OUT: [96, 5],
    PHI: [176, 2],
    PLO: [160, 2],
    REQ: [122, 0],
    RET: [112, 0],
    SAV: [120, 0],
    SD: [245, 0],
    SDB: [117, 0],
    SDBI: [125, 1],
    SDI: [253, 1],
    SEP: [208, 2],
    SEQ: [123, 0],
    SEX: [224, 2],
    SHL: [254, 0],
    SHLC: [126, 0],
    SHR: [246, 0],
    SHRC: [118, 0],
    SKP: [56, 0],
    SM: [247, 0],
    SMB: [119, 0],
    SMBI: [127, 1],
    SMI: [255, 1],
    STR: [80, 2],
    STXD: [115, 0],
    XOR: [243, 0],
    XRI: [251, 1],
  },
  parseOpcode: function (e, r) {
    var a,
      s = CDP1802.set[e.opcode];
    e.lens = [];
    if (s)
      switch (s[1]) {
        case 0:
          return (e.lens = [s[0]]), (e.bytes = 1), e;
        case 1:
          return (
            (a = (function (e) {
              return e.replace("#", "$");
            })(e.params[0] + "")),
            (e.lens = [
              s[0],
              function (e) {
                return Parser.evaluate(a, e);
              },
            ]),
            (e.bytes = 2),
            e
          );
        case 4:
          return (
            (a = e.params[0] + ""),
            (e.lens = [
              s[0],
              function (e) {
                return Parser.evaluate(a, e);
              },
              null,
            ]),
            (e.bytes = 3),
            e
          );
        case 3:
          return (
            (a = e.params[0] + ""),
            (e.lens = [
              s[0],
              function (e) {
                var r = Parser.evaluate(a, e),
                  s = 255 & r;
                if (((65280 & e._PC) | s) != r)
                  throw { message: "Cross page jump" };
                return s;
              },
            ]),
            (e.bytes = 2),
            e
          );
        case 2:
          var t;
          if (1 == (a = e.params[0] + "").length) t = parseInt(a, 16);
          else if (
            (2 != a.length && 3 != a.length) ||
            "R" != a[0].toUpperCase()
          )
            try {
              t = Parser.evaluate(a, r);
            } catch (e) {
              t = NaN;
            }
          else t = parseInt(a.substr(1), 10);
          if (isNaN(t) || t > 15 || t < 0) throw "Unrecognized register: " + a;
          return (e.lens = [s[0] + t]), (e.bytes = 1), e;
        case 5:
          var n;
          if (1 == (a = e.params[0] + "").length) n = parseInt(a, 10);
          else
            try {
              n = Parser.evaluate(a, r);
            } catch (e) {
              n = NaN;
            }
          if (isNaN(n) || n > 7 || n < 1) throw "Unrecognized port: " + a;
          return (e.lens = [s[0] + n]), (e.bytes = 1), e;
      }
    return null;
  },
  endian: !0,
};
(function (name, definition) {
  if (typeof module != "undefined") module.exports = definition();
  else if (typeof define == "function" && typeof define.amd == "object")
    define(definition);
  else this[name] = definition();
})("ASM", function () {
  "use strict";

  return {
    Z80: Z80,
    I8080: I8080,
    I8008: I8008,
    C6502: C6502,
    C65816: C65816,
    CDP1802: CDP1802,
    M6800: M6800,
    M6809: M6809,
    H6309: H6309,
  };
});

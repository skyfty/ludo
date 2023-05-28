(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/sfs2x-api/sfs2x-api.js
  var require_sfs2x_api = __commonJS({
    "node_modules/sfs2x-api/sfs2x-api.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SFS2X = t() : e.SFS2X = t();
      }(exports, function() {
        return function(e) {
          var t = {};
          function n(r) {
            if (t[r])
              return t[r].exports;
            var i = t[r] = { i: r, l: false, exports: {} };
            return e[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
          }
          __name(n, "n");
          return n.m = e, n.c = t, n.d = function(e2, t2, r) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { configurable: false, enumerable: true, get: r });
          }, n.r = function(e2) {
            Object.defineProperty(e2, "__esModule", { value: true });
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 325);
        }([function(e, t, n) {
          var r = n(6), i = n(37), o = n(18), s = n(15), a = n(27), u = /* @__PURE__ */ __name(function(e2, t2, n2) {
            var c, l, f, h, _ = e2 & u.F, y = e2 & u.G, p = e2 & u.S, d = e2 & u.P, g = e2 & u.B, v = y ? r : p ? r[t2] || (r[t2] = {}) : (r[t2] || {}).prototype, b = y ? i : i[t2] || (i[t2] = {}), m = b.prototype || (b.prototype = {});
            for (c in y && (n2 = t2), n2)
              f = ((l = !_ && v && void 0 !== v[c]) ? v : n2)[c], h = g && l ? a(f, r) : d && "function" == typeof f ? a(Function.call, f) : f, v && s(v, c, f, e2 & u.U), b[c] != f && o(b, c, h), d && m[c] != f && (m[c] = f);
          }, "u");
          r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u;
        }, function(e, t, n) {
          "use strict";
          function r(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(r, "r");
          function i(e2, t2) {
            if (!e2)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
          }
          __name(i, "i");
          function o(e2, t2) {
            if ("function" != typeof t2 && null !== t2)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
            e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
          }
          __name(o, "o");
          Object.defineProperty(t, "__esModule", { value: true });
          var s = function(e2) {
            function t2(e3) {
              r(this, t2);
              var n2 = i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3));
              return n2.name = "SFSError", n2;
            }
            __name(t2, "t");
            return o(t2, Error), t2;
          }(), a = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              r(this, t2);
              var o2 = i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3));
              return o2.name = "SFSValidationError", o2.errors = n2, o2;
            }
            __name(t2, "t");
            return o(t2, s), t2;
          }(), u = function(e2) {
            function t2(e3) {
              r(this, t2);
              var n2 = i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3));
              return n2.name = "SFSTypeError", n2;
            }
            __name(t2, "t");
            return o(t2, s), t2;
          }();
          t.SFSError = s, t.SFSValidationError = a, t.SFSTypeError = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.Message = t.Requests = t.BaseRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(8), o = n(50);
          function s(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(s, "s");
          var a = function() {
            function e2(t2) {
              s(this, e2), this._reqObj = new i.SFSObject(), this._id = t2, this._targetController = 0, this._logger = o.Logger.instance;
            }
            __name(e2, "e");
            return r(e2, null, [{ key: "KEY_ERROR_CODE", get: function() {
              return "ec";
            } }, { key: "KEY_ERROR_PARAMS", get: function() {
              return "ep";
            } }]), r(e2, [{ key: "getMessage", value: function() {
              return new u(this._id, this._targetController, this._reqObj);
            } }, { key: "validate", value: function() {
              this._logger.error("BaseRequest.validate = no child-class implementation found!");
            } }, { key: "execute", value: function() {
              this._logger.error("BaseRequest.execute = no child-class implementation found!");
            } }, { key: "id", get: function() {
              return this._id;
            } }]), e2;
          }(), u = function() {
            function e2(t2, n2, r2) {
              s(this, e2), this._id = t2, this._targetController = n2, this._content = r2, Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "dump", value: function() {
              return (c.getNameFromId(this.id) + " (" + this.id + ")").trim() + "\n" + this.content.getDump();
            } }, { key: "id", get: function() {
              return this._id;
            } }, { key: "targetController", get: function() {
              return this._targetController;
            } }, { key: "content", get: function() {
              return this._content;
            } }]), e2;
          }(), c = Object.freeze({ Handshake: 0, Login: 1, Logout: 2, JoinRoom: 4, CreateRoom: 6, GenericMessage: 7, ChangeRoomName: 8, ChangeRoomPassword: 9, SetRoomVariables: 11, SetUserVariables: 12, CallExtension: 13, LeaveRoom: 14, SubscribeRoomGroup: 15, UnsubscribeRoomGroup: 16, SpectatorToPlayer: 17, PlayerToSpectator: 18, ChangeRoomCapacity: 19, KickUser: 24, BanUser: 25, FindRooms: 27, FindUsers: 28, PingPong: 29, SetUserPosition: 30, QuickJoinOrCreateRoom: 31, InitBuddyList: 200, AddBuddy: 201, BlockBuddy: 202, RemoveBuddy: 203, SetBuddyVariables: 204, GoOnline: 205, InviteUsers: 300, InvitationReply: 301, CreateSFSGame: 302, QuickJoinGame: 303, JoinRoomInvite: 304, getNameFromId: function(e2) {
            for (var t2 in this)
              if (this.hasOwnProperty(t2) && this[t2] === e2)
                return t2;
            return "";
          } });
          t.BaseRequest = a, t.Requests = c, t.Message = u;
        }, function(e, t) {
          e.exports = function(e2) {
            try {
              return !!e2();
            } catch (e3) {
              return true;
            }
          };
        }, function(e, t) {
          e.exports = function(e2) {
            return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
          };
        }, function(e, t, n) {
          var r = n(4);
          e.exports = function(e2) {
            if (!r(e2))
              throw TypeError(e2 + " is not an object!");
            return e2;
          };
        }, function(e, t) {
          var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = n);
        }, function(e, t, n) {
          var r = n(95)("wks"), i = n(35), o = n(6).Symbol, s = "function" == typeof o;
          (e.exports = function(e2) {
            return r[e2] || (r[e2] = s && o[e2] || (s ? o : i)("Symbol." + e2));
          }).store = r;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.Vec3D = t.SFSArray = t.SFSObject = t.SFSDataWrapper = t.SFSDataType = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(174), o = n(51), s = n(50), a = n(1);
          function u(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(u, "u");
          var c = Object.freeze({ NULL: 0, BOOL: 1, BYTE: 2, SHORT: 3, INT: 4, LONG: 5, FLOAT: 6, DOUBLE: 7, UTF_STRING: 8, BOOL_ARRAY: 9, BYTE_ARRAY: 10, SHORT_ARRAY: 11, INT_ARRAY: 12, LONG_ARRAY: 13, FLOAT_ARRAY: 14, DOUBLE_ARRAY: 15, UTF_STRING_ARRAY: 16, SFS_ARRAY: 17, SFS_OBJECT: 18, TEXT: 20, fromId: function(e2) {
            if ("number" != typeof e2)
              return null;
            for (var t2 in this)
              if (this.hasOwnProperty(t2) && this[t2] === e2)
                return t2;
          }, validate: function(e2, t2) {
            if (null == this.fromId(e2))
              throw new a.SFSTypeError("Invalid type passed; use one of the SFSDataType constants");
            var n2 = null;
            if (e2 === this.NULL && null != t2 && (n2 = "a null value"), e2 !== this.NULL && null == t2 && (n2 = "a non-null value"), e2 !== this.BOOL || this.isBoolType(t2) || (n2 = "a boolean value"), e2 !== this.BYTE || this.isByteType(t2) || (n2 = "an integer number in this range: 0 <= value < 256"), e2 !== this.SHORT || this.isShortType(t2) || (n2 = "an integer number in this range: -32.768 <= value < +32.768"), e2 !== this.INT || this.isIntType(t2) || (n2 = "an integer number in this range: -2^31 <= value < +2^31"), e2 !== this.LONG || this.isLongType(t2) || (n2 = "an integer number in this range: -(2^53 - 1) <= value <= +(2^53 - 1)"), e2 !== this.FLOAT || this.isFloatType(t2) || (n2 = "a number in this range: -3.4028234663852886e+38 <= value <= 3.4028234663852886e+38"), e2 !== this.DOUBLE || this.isDoubleType(t2) || (n2 = "a finite number"), e2 !== this.UTF_STRING && e2 !== this.TEXT || this.isStringType(t2) || (n2 = "a string value"), e2 !== this.BOOL_ARRAY || this.isArrayType(t2, this.isBoolType) || (n2 = "an array of boolean values"), e2 !== this.BYTE_ARRAY || t2 instanceof Uint8Array || (n2 = "a Uint8Array"), e2 !== this.SHORT_ARRAY || this.isArrayType(t2, this.isShortType) || (n2 = "an array of integer numbers in this range: -32.768 <= value < +32.768"), e2 !== this.INT_ARRAY || this.isArrayType(t2, this.isIntType) || (n2 = "an array of integer numbers in this range: -2^31 <= value < +2^31"), e2 !== this.LONG_ARRAY || this.isArrayType(t2, this.isLongType) || (n2 = "an array of integer numbers in this range: -(2^53 - 1) <= value <= +(2^53 - 1)"), e2 !== this.FLOAT_ARRAY || this.isArrayType(t2, this.isFloatType) || (n2 = "an array of numbers in this range: -3.4028234663852886e+38 <= value <= 3.4028234663852886e+38"), e2 !== this.DOUBLE_ARRAY || this.isArrayType(t2, this.isDoubleType) || (n2 = "an array of finite numbers"), e2 !== this.UTF_STRING_ARRAY || this.isArrayType(t2, this.isStringType) || (n2 = "an array of string values"), e2 !== this.SFS_OBJECT || t2 instanceof f || (n2 = "a SFSObject instance"), e2 !== this.SFS_ARRAY || t2 instanceof h || (n2 = "a SFSArray instance"), null != n2)
              throw new a.SFSTypeError("Invalid value passed; type SFSDataType." + this.fromId(e2) + " requires " + n2);
          }, isBoolType: function(e2) {
            return "boolean" == typeof e2;
          }, isByteType: function(e2) {
            return "number" == typeof e2 && Math.floor(e2) === e2 && e2 >= 0 && e2 < 256;
          }, isShortType: function(e2) {
            return "number" == typeof e2 && Math.floor(e2) === e2 && e2 >= -32768 && e2 < 32768;
          }, isIntType: function(e2) {
            return "number" == typeof e2 && Math.floor(e2) === e2 && e2 >= -2147483648 && e2 < 2147483648;
          }, isLongType: function(e2) {
            return "number" == typeof e2 && Math.floor(e2) === e2 && Number.isSafeInteger(e2);
          }, isFloatType: function(e2) {
            return "number" == typeof e2 && e2 >= -34028234663852886e22 && e2 <= 34028234663852886e22;
          }, isDoubleType: function(e2) {
            return "number" == typeof e2 && isFinite(e2);
          }, isStringType: function(e2) {
            return "string" == typeof e2;
          }, isArrayType: function(e2, t2) {
            return e2 instanceof Array && (!(e2.length > 0) || t2(e2[0]));
          } }), l = /* @__PURE__ */ __name(function e2(t2, n2) {
            u(this, e2), this.type = t2, this.value = n2, Object.freeze(this);
          }, "e"), f = function() {
            function e2() {
              u(this, e2), this._dataHolder = /* @__PURE__ */ new Map(), this._serializer = i.SFSDataSerializer.instance, Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "toBinary", value: function() {
              return this._serializer.object2binary(this);
            } }, { key: "keys", value: function() {
              return this._dataHolder.keys();
            } }, { key: "getWrappedItem", value: function(e3) {
              return this._dataHolder.get(e3);
            } }, { key: "getKeysArray", value: function() {
              return Array.from(this.keys());
            } }, { key: "size", value: function() {
              return this._dataHolder.size;
            } }, { key: "containsKey", value: function(e3) {
              return null != this.getWrappedItem(e3);
            } }, { key: "get", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n2 = this.getWrappedItem(e3);
              if (null != n2 && null != t2 && n2.type != t2)
                throw new a.SFSTypeError("Requested value is not of type SFSDataType." + c.fromId(t2));
              return null != n2 ? n2.value : null;
            } }, { key: "isNull", value: function(e3) {
              var t2 = this.getWrappedItem(e3);
              return null == t2 || t2.type == c.NULL;
            } }, { key: "getBool", value: function(e3) {
              return this.get(e3, c.BOOL);
            } }, { key: "getByte", value: function(e3) {
              return this.get(e3, c.BYTE);
            } }, { key: "getShort", value: function(e3) {
              return this.get(e3, c.SHORT);
            } }, { key: "getInt", value: function(e3) {
              return this.get(e3, c.INT);
            } }, { key: "getLong", value: function(e3) {
              var t2 = this.get(e3, c.LONG);
              return Number.isSafeInteger(t2) || s.Logger.instance.warn("Long value contained in SFSObject is not safe"), t2;
            } }, { key: "getFloat", value: function(e3) {
              return this.get(e3, c.FLOAT);
            } }, { key: "getDouble", value: function(e3) {
              return this.get(e3, c.DOUBLE);
            } }, { key: "getUtfString", value: function(e3) {
              return this.get(e3, c.UTF_STRING);
            } }, { key: "getText", value: function(e3) {
              return this.get(e3, c.TEXT);
            } }, { key: "getBoolArray", value: function(e3) {
              return this.get(e3, c.BOOL_ARRAY);
            } }, { key: "getByteArray", value: function(e3) {
              return this.get(e3, c.BYTE_ARRAY);
            } }, { key: "getShortArray", value: function(e3) {
              return this.get(e3, c.SHORT_ARRAY);
            } }, { key: "getIntArray", value: function(e3) {
              return this.get(e3, c.INT_ARRAY);
            } }, { key: "getLongArray", value: function(e3) {
              return this.get(e3, c.LONG_ARRAY);
            } }, { key: "getFloatArray", value: function(e3) {
              return this.get(e3, c.FLOAT_ARRAY);
            } }, { key: "getDoubleArray", value: function(e3) {
              return this.get(e3, c.DOUBLE_ARRAY);
            } }, { key: "getUtfStringArray", value: function(e3) {
              return this.get(e3, c.UTF_STRING_ARRAY);
            } }, { key: "getSFSObject", value: function(e3) {
              return this.get(e3, c.SFS_OBJECT);
            } }, { key: "getSFSArray", value: function(e3) {
              return this.get(e3, c.SFS_ARRAY);
            } }, { key: "put", value: function(e3, t2, n2) {
              if (!(arguments.length > 3 && void 0 !== arguments[3] && arguments[3])) {
                if ("string" != typeof e3)
                  throw "Invalid key passed; must be of type string";
                c.validate(n2, t2);
              }
              this._dataHolder.set(e3, new l(n2, t2));
            } }, { key: "putNull", value: function(e3) {
              this.put(e3, null, c.NULL);
            } }, { key: "putBool", value: function(e3, t2) {
              this.put(e3, t2, c.BOOL);
            } }, { key: "putByte", value: function(e3, t2) {
              this.put(e3, t2, c.BYTE);
            } }, { key: "putShort", value: function(e3, t2) {
              this.put(e3, t2, c.SHORT);
            } }, { key: "putInt", value: function(e3, t2) {
              this.put(e3, t2, c.INT);
            } }, { key: "putLong", value: function(e3, t2) {
              this.put(e3, t2, c.LONG);
            } }, { key: "putFloat", value: function(e3, t2) {
              this.put(e3, t2, c.FLOAT);
            } }, { key: "putDouble", value: function(e3, t2) {
              this.put(e3, t2, c.DOUBLE);
            } }, { key: "putUtfString", value: function(e3, t2) {
              this.put(e3, t2, c.UTF_STRING);
            } }, { key: "putText", value: function(e3, t2) {
              this.put(e3, t2, c.TEXT);
            } }, { key: "putBoolArray", value: function(e3, t2) {
              this.put(e3, t2, c.BOOL_ARRAY);
            } }, { key: "putByteArray", value: function(e3, t2) {
              this.put(e3, t2, c.BYTE_ARRAY);
            } }, { key: "putShortArray", value: function(e3, t2) {
              this.put(e3, t2, c.SHORT_ARRAY);
            } }, { key: "putIntArray", value: function(e3, t2) {
              this.put(e3, t2, c.INT_ARRAY);
            } }, { key: "putLongArray", value: function(e3, t2) {
              this.put(e3, t2, c.LONG_ARRAY);
            } }, { key: "putFloatArray", value: function(e3, t2) {
              this.put(e3, t2, c.FLOAT_ARRAY);
            } }, { key: "putDoubleArray", value: function(e3, t2) {
              this.put(e3, t2, c.DOUBLE_ARRAY);
            } }, { key: "putUtfStringArray", value: function(e3, t2) {
              this.put(e3, t2, c.UTF_STRING_ARRAY);
            } }, { key: "putSFSArray", value: function(e3, t2) {
              this.put(e3, t2, c.SFS_ARRAY);
            } }, { key: "putSFSObject", value: function(e3, t2) {
              this.put(e3, t2, c.SFS_OBJECT);
            } }, { key: "getDump", value: function() {
              var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return 0 === this.size() ? "[ Empty SFSObject ]" : e3 ? o.DumpFormatter.prettyPrintDump(this._dump()) : this._dump();
            } }, { key: "getHexDump", value: function() {
              return o.DumpFormatter.hexDump(this.toBinary());
            } }, { key: "_dump", value: function() {
              var e3 = o.DumpFormatter.TOKEN_INDENT_OPEN, t2 = true, n2 = false, r2 = void 0;
              try {
                for (var i2, s2 = this.keys()[Symbol.iterator](); !(t2 = (i2 = s2.next()).done); t2 = true) {
                  var a2 = i2.value, u2 = this.getWrappedItem(a2);
                  e3 += "(" + c.fromId(u2.type).toLowerCase() + ") " + a2 + ": ", u2.type === c.SFS_OBJECT || u2.type === c.SFS_ARRAY ? e3 += u2.value.getDump(false) : u2.type === c.BYTE_ARRAY ? e3 += o.DumpFormatter.prettyPrintByteArray(u2.value) : e3 += u2.value, e3 += o.DumpFormatter.TOKEN_DIVIDER;
                }
              } catch (e4) {
                n2 = true, r2 = e4;
              } finally {
                try {
                  !t2 && s2.return && s2.return();
                } finally {
                  if (n2)
                    throw r2;
                }
              }
              return e3 += o.DumpFormatter.TOKEN_INDENT_CLOSE;
            } }], [{ key: "newFromBinaryData", value: function(e3) {
              return i.SFSDataSerializer.instance.binary2object(e3);
            } }]), e2;
          }(), h = function() {
            function e2() {
              u(this, e2), this._dataHolder = [], this._serializer = i.SFSDataSerializer.instance, Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "toBinary", value: function() {
              return this._serializer.array2binary(this);
            } }, { key: "getWrappedItem", value: function(e3) {
              return "number" != typeof e3 || e3 >= this._dataHolder.length ? null : this._dataHolder[e3];
            } }, { key: "size", value: function() {
              return this._dataHolder.length;
            } }, { key: "contains", value: function(t2) {
              if (t2 instanceof e2 || t2 instanceof f)
                throw new a.SFSError("SFSArray and SFSObject types are not supported by the SFSArray.contains method");
              for (var n2 = 0; n2 < this.size(); n2++) {
                var r2 = this.getWrappedItem(n2);
                if (null != r2 && r2.value == t2)
                  return true;
              }
              return false;
            } }, { key: "get", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if ("number" != typeof e3 || e3 >= this._dataHolder.length)
                return null;
              var n2 = this.getWrappedItem(e3);
              if (null != n2 && null != t2 && n2.type != t2)
                throw new a.SFSTypeError("Requested value is not of type SFSDataType." + c.fromId(t2));
              return null != n2 ? n2.value : null;
            } }, { key: "isNull", value: function(e3) {
              var t2 = this.getWrappedItem(e3);
              return null == t2 || t2.type == c.NULL;
            } }, { key: "getBool", value: function(e3) {
              return this.get(e3, c.BOOL);
            } }, { key: "getByte", value: function(e3) {
              return this.get(e3, c.BYTE);
            } }, { key: "getShort", value: function(e3) {
              return this.get(e3, c.SHORT);
            } }, { key: "getInt", value: function(e3) {
              return this.get(e3, c.INT);
            } }, { key: "getLong", value: function(e3) {
              var t2 = this.get(e3, c.LONG);
              return Number.isSafeInteger(t2) || s.Logger.instance.warn("Long value contained in SFSObject is not safe"), t2;
            } }, { key: "getFloat", value: function(e3) {
              return this.get(e3, c.FLOAT);
            } }, { key: "getDouble", value: function(e3) {
              return this.get(e3, c.DOUBLE);
            } }, { key: "getUtfString", value: function(e3) {
              return this.get(e3, c.UTF_STRING);
            } }, { key: "getText", value: function(e3) {
              return this.get(e3, c.TEXT);
            } }, { key: "getBoolArray", value: function(e3) {
              return this.get(e3, c.BOOL_ARRAY);
            } }, { key: "getByteArray", value: function(e3) {
              return this.get(e3, c.BYTE_ARRAY);
            } }, { key: "getShortArray", value: function(e3) {
              return this.get(e3, c.SHORT_ARRAY);
            } }, { key: "getIntArray", value: function(e3) {
              return this.get(e3, c.INT_ARRAY);
            } }, { key: "getLongArray", value: function(e3) {
              return this.get(e3, c.LONG_ARRAY);
            } }, { key: "getFloatArray", value: function(e3) {
              return this.get(e3, c.FLOAT_ARRAY);
            } }, { key: "getDoubleArray", value: function(e3) {
              return this.get(e3, c.DOUBLE_ARRAY);
            } }, { key: "getUtfStringArray", value: function(e3) {
              return this.get(e3, c.UTF_STRING_ARRAY);
            } }, { key: "getSFSObject", value: function(e3) {
              return this.get(e3, c.SFS_OBJECT);
            } }, { key: "getSFSArray", value: function(e3) {
              return this.get(e3, c.SFS_ARRAY);
            } }, { key: "add", value: function(e3, t2) {
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || c.validate(t2, e3), this._dataHolder.push(new l(t2, e3));
            } }, { key: "addNull", value: function() {
              this.add(null, c.NULL);
            } }, { key: "addBool", value: function(e3) {
              this.add(e3, c.BOOL);
            } }, { key: "addByte", value: function(e3) {
              this.add(e3, c.BYTE);
            } }, { key: "addShort", value: function(e3) {
              this.add(e3, c.SHORT);
            } }, { key: "addInt", value: function(e3) {
              this.add(e3, c.INT);
            } }, { key: "addLong", value: function(e3) {
              this.add(e3, c.LONG);
            } }, { key: "addFloat", value: function(e3) {
              this.add(e3, c.FLOAT);
            } }, { key: "addDouble", value: function(e3) {
              this.add(e3, c.DOUBLE);
            } }, { key: "addUtfString", value: function(e3) {
              this.add(e3, c.UTF_STRING);
            } }, { key: "addText", value: function(e3) {
              this.add(e3, c.TEXT);
            } }, { key: "addBoolArray", value: function(e3) {
              this.add(e3, c.BOOL_ARRAY);
            } }, { key: "addByteArray", value: function(e3) {
              this.add(e3, c.BYTE_ARRAY);
            } }, { key: "addShortArray", value: function(e3) {
              this.add(e3, c.SHORT_ARRAY);
            } }, { key: "addIntArray", value: function(e3) {
              this.add(e3, c.INT_ARRAY);
            } }, { key: "addLongArray", value: function(e3) {
              this.add(e3, c.LONG_ARRAY);
            } }, { key: "addFloatArray", value: function(e3) {
              this.add(e3, c.FLOAT_ARRAY);
            } }, { key: "addDoubleArray", value: function(e3) {
              this.add(e3, c.DOUBLE_ARRAY);
            } }, { key: "addUtfStringArray", value: function(e3) {
              this.add(e3, c.UTF_STRING_ARRAY);
            } }, { key: "addSFSArray", value: function(e3) {
              this.add(e3, c.SFS_ARRAY);
            } }, { key: "addSFSObject", value: function(e3) {
              this.add(e3, c.SFS_OBJECT);
            } }, { key: "getDump", value: function() {
              var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return 0 === this.size() ? "[ Empty SFSArray ]" : e3 ? o.DumpFormatter.prettyPrintDump(this._dump()) : this._dump();
            } }, { key: "getHexDump", value: function() {
              return o.DumpFormatter.hexDump(this.toBinary());
            } }, { key: "_dump", value: function() {
              for (var e3 = o.DumpFormatter.TOKEN_INDENT_OPEN, t2 = 0; t2 < this.size(); t2++) {
                var n2 = this.getWrappedItem(t2);
                e3 += "(" + c.fromId(n2.type).toLowerCase() + ") " + t2 + ": ", n2.type === c.SFS_OBJECT || n2.type === c.SFS_ARRAY ? e3 += n2.value.getDump(false) : n2.type === c.BYTE_ARRAY ? e3 += o.DumpFormatter.prettyPrintByteArray(n2.value) : e3 += n2.value, e3 += o.DumpFormatter.TOKEN_DIVIDER;
              }
              return e3 += o.DumpFormatter.TOKEN_INDENT_CLOSE;
            } }], [{ key: "newFromBinaryData", value: function(e3) {
              return i.SFSDataSerializer.instance.binary2array(e3);
            } }]), e2;
          }(), _ = function() {
            function e2(t2, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              u(this, e2), this.px = t2, this.py = n2, this.pz = r2, this._useFloatCoordinates = i2;
            }
            __name(e2, "e");
            return r(e2, [{ key: "toString", value: function() {
              return "(" + this.px + "," + this.py + "," + this.pz + ")";
            } }, { key: "toArray", value: function() {
              return [this.px, this.py, this.pz];
            } }, { key: "isFloat", get: function() {
              return this._useFloatCoordinates;
            } }], [{ key: "fromArray", value: function(t2) {
              return new e2(t2[0], t2[1], t2[2]);
            } }]), e2;
          }();
          t.SFSDataType = c, t.SFSDataWrapper = l, t.SFSObject = f, t.SFSArray = h, t.Vec3D = _;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.MMORoom = t.SFSRoom = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(8), o = n(49), s = n(119), a = n(1);
          function u(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(u, "u");
          var c = function() {
            function e2(t2, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default", i2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
              u(this, e2), this._id = t2, this._name = n2, this._groupId = r2, this._isGame = false, this._isHidden = false, this._isJoined = false, this._isPasswordProtected = false, this._maxUsers = 0, this._maxSpectators = 0, this._userCount = 0, this._specCount = 0, this._isManaged = true, this._variables = /* @__PURE__ */ new Map(), this._userManager = new s.SFSUserManager(), this._roomManager = null, this.properties = {}, i2 && Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "toString", value: function() {
              return "[Room: " + this.name + ", Id: " + this.id + ", Group Id: " + this.groupId + "]";
            } }, { key: "getUserByName", value: function(e3) {
              return this._userManager.getUserByName(e3);
            } }, { key: "getUserById", value: function(e3) {
              return this._userManager.getUserById(e3);
            } }, { key: "containsUser", value: function(e3) {
              return this._userManager.containsUser(e3);
            } }, { key: "getUserList", value: function() {
              return this._userManager.getUserList();
            } }, { key: "getPlayerList", value: function() {
              var e3 = this;
              return this._userManager.getUserList().filter(function(t2) {
                return t2.isPlayerInRoom(e3);
              });
            } }, { key: "getSpectatorList", value: function() {
              var e3 = this;
              return this._userManager.getUserList().filter(function(t2) {
                return t2.isSpectatorInRoom(e3);
              });
            } }, { key: "getVariable", value: function(e3) {
              return this._variables.get(e3);
            } }, { key: "containsVariable", value: function(e3) {
              return this._variables.has(e3);
            } }, { key: "getVariables", value: function() {
              return Array.from(this._variables.values());
            } }, { key: "getRoomManager", value: function() {
              return this._roomManager;
            } }, { key: "_addUser", value: function(e3) {
              this._userManager._addUser(e3);
            } }, { key: "_removeUser", value: function(e3) {
              this._userManager._removeUser(e3);
            } }, { key: "_setVariables", value: function(e3) {
              var t2 = true, n2 = false, r2 = void 0;
              try {
                for (var i2, o2 = e3[Symbol.iterator](); !(t2 = (i2 = o2.next()).done); t2 = true) {
                  var s2 = i2.value;
                  this._setVariable(s2);
                }
              } catch (e4) {
                n2 = true, r2 = e4;
              } finally {
                try {
                  !t2 && o2.return && o2.return();
                } finally {
                  if (n2)
                    throw r2;
                }
              }
            } }, { key: "_setVariable", value: function(e3) {
              e3.isNull ? this._variables.delete(e3.name) : this._variables.set(e3.name, e3);
            } }, { key: "_setRoomManager", value: function(e3) {
              if (null != this._roomManager)
                throw new a.SFSError("Room Manager already assigned to " + this.toString());
              this._roomManager = e3;
            } }, { key: "_merge", value: function(e3) {
              if (!this.isJoined) {
                this._variables.clear();
                var t2 = true, n2 = false, r2 = void 0;
                try {
                  for (var i2, o2 = e3._variables.values()[Symbol.iterator](); !(t2 = (i2 = o2.next()).done); t2 = true) {
                    var s2 = i2.value;
                    this._setVariable(s2);
                  }
                } catch (e4) {
                  n2 = true, r2 = e4;
                } finally {
                  try {
                    !t2 && o2.return && o2.return();
                  } finally {
                    if (n2)
                      throw r2;
                  }
                }
                this._userManager._clearAll();
                var a2 = true, u2 = false, c2 = void 0;
                try {
                  for (var l2, f = e3.getUserList()[Symbol.iterator](); !(a2 = (l2 = f.next()).done); a2 = true) {
                    var h = l2.value;
                    this._addUser(h);
                  }
                } catch (e4) {
                  u2 = true, c2 = e4;
                } finally {
                  try {
                    !a2 && f.return && f.return();
                  } finally {
                    if (u2)
                      throw c2;
                  }
                }
              }
            } }, { key: "id", get: function() {
              return this._id;
            } }, { key: "name", get: function() {
              return this._name;
            } }, { key: "groupId", get: function() {
              return this._groupId;
            } }, { key: "isGame", get: function() {
              return this._isGame;
            } }, { key: "isHidden", get: function() {
              return this._isHidden;
            } }, { key: "isJoined", get: function() {
              return this._isJoined;
            } }, { key: "isPasswordProtected", get: function() {
              return this._isPasswordProtected;
            } }, { key: "maxUsers", get: function() {
              return this._maxUsers;
            } }, { key: "maxSpectators", get: function() {
              return this._maxSpectators;
            } }, { key: "userCount", get: function() {
              return this.isJoined ? this.isGame ? this.getPlayerList().length : this._userManager.getUserCount() : this._userCount;
            } }, { key: "spectatorCount", get: function() {
              return this.isGame ? this.isJoined ? this.getSpectatorList().length : this._specCount : 0;
            } }, { key: "capacity", get: function() {
              return this.maxUsers + this.maxSpectators;
            } }], [{ key: "fromSFSArray", value: function(t2) {
              var n2 = 14 === t2.size(), r2 = void 0;
              (r2 = n2 ? new l(t2.get(0), t2.get(1), t2.get(2)) : new e2(t2.get(0), t2.get(1), t2.get(2)))._isGame = t2.get(3), r2._isHidden = t2.get(4), r2._isPasswordProtected = t2.get(5), r2._userCount = t2.get(6), r2._maxUsers = t2.get(7);
              var s2 = t2.get(8);
              if (null != s2)
                for (var a2 = 0; a2 < s2.size(); a2++) {
                  var u2 = o.SFSRoomVariable.fromSFSArray(s2.get(a2));
                  r2._setVariable(u2);
                }
              return r2._isGame && (r2._specCount = t2.get(9), r2._maxSpectators = t2.get(10)), n2 && (r2._defaultAOI = i.Vec3D.fromArray(t2.get(11)), null != t2.get(13) && (r2._lowerMapLimit = i.Vec3D.fromArray(t2.get(12)), r2._higherMapLimit = i.Vec3D.fromArray(t2.get(13)))), r2;
            } }]), e2;
          }(), l = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
              u(this, t2);
              var i2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2, r2, false));
              return i2._defaultAOI = null, i2._lowerMapLimit = null, i2._higherMapLimit = null, i2._itemsById = /* @__PURE__ */ new Map(), Object.seal(i2), i2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, c), r(t2, [{ key: "getMMOItem", value: function(e3) {
              return this._itemsById.get(e3);
            } }, { key: "getMMOItems", value: function() {
              return Array.from(this._itemsById.values());
            } }, { key: "_addMMOItem", value: function(e3) {
              this._itemsById.set(e3.id, e3);
            } }, { key: "_removeItem", value: function(e3) {
              this._itemsById.delete(e3);
            } }, { key: "defaultAOI", get: function() {
              return this._defaultAOI;
            } }, { key: "lowerMapLimit", get: function() {
              return this._lowerMapLimit;
            } }, { key: "higherMapLimit", get: function() {
              return this._higherMapLimit;
            } }]), t2;
          }();
          t.SFSRoom = c, t.MMORoom = l;
        }, function(e, t, n) {
          var r = n(5), i = n(148), o = n(30), s = Object.defineProperty;
          t.f = n(11) ? Object.defineProperty : function(e2, t2, n2) {
            if (r(e2), t2 = o(t2, true), r(n2), i)
              try {
                return s(e2, t2, n2);
              } catch (e3) {
              }
            if ("get" in n2 || "set" in n2)
              throw TypeError("Accessors not supported!");
            return "value" in n2 && (e2[t2] = n2.value), e2;
          };
        }, function(e, t, n) {
          e.exports = !n(3)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e, t, n) {
          var r = n(24), i = Math.min;
          e.exports = function(e2) {
            return e2 > 0 ? i(r(e2), 9007199254740991) : 0;
          };
        }, function(e, t, n) {
          var r = n(0), i = n(3), o = n(28), s = /"/g, a = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
            var i2 = String(o(e2)), a2 = "<" + t2;
            return "" !== n2 && (a2 += " " + n2 + '="' + String(r2).replace(s, "&quot;") + '"'), a2 + ">" + i2 + "</" + t2 + ">";
          }, "a");
          e.exports = function(e2, t2) {
            var n2 = {};
            n2[e2] = t2(a), r(r.P + r.F * i(function() {
              var t3 = ""[e2]('"');
              return t3 !== t3.toLowerCase() || t3.split('"').length > 3;
            }), "String", n2);
          };
        }, function(e, t, n) {
          var r = n(28);
          e.exports = function(e2) {
            return Object(r(e2));
          };
        }, function(e, t, n) {
          var r = n(6), i = n(18), o = n(16), s = n(35)("src"), a = Function.toString, u = ("" + a).split("toString");
          n(37).inspectSource = function(e2) {
            return a.call(e2);
          }, (e.exports = function(e2, t2, n2, a2) {
            var c = "function" == typeof n2;
            c && (o(n2, "name") || i(n2, "name", t2)), e2[t2] !== n2 && (c && (o(n2, s) || i(n2, s, e2[t2] ? "" + e2[t2] : u.join(String(t2)))), e2 === r ? e2[t2] = n2 : a2 ? e2[t2] ? e2[t2] = n2 : i(e2, t2, n2) : (delete e2[t2], i(e2, t2, n2)));
          })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[s] || a.call(this);
          });
        }, function(e, t) {
          var n = {}.hasOwnProperty;
          e.exports = function(e2, t2) {
            return n.call(e2, t2);
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(3);
          e.exports = function(e2, t2) {
            return !!e2 && r(function() {
              t2 ? e2.call(null, function() {
              }, 1) : e2.call(null);
            });
          };
        }, function(e, t, n) {
          var r = n(10), i = n(36);
          e.exports = n(11) ? function(e2, t2, n2) {
            return r.f(e2, t2, i(1, n2));
          } : function(e2, t2, n2) {
            return e2[t2] = n2, e2;
          };
        }, function(e, t, n) {
          var r = n(27), i = n(54), o = n(14), s = n(12), a = n(231);
          e.exports = function(e2, t2) {
            var n2 = 1 == e2, u = 2 == e2, c = 3 == e2, l = 4 == e2, f = 6 == e2, h = 5 == e2 || f, _ = t2 || a;
            return function(t3, a2, y) {
              for (var p, d, g = o(t3), v = i(g), b = r(a2, y, 3), m = s(v.length), S = 0, E = n2 ? _(t3, m) : u ? _(t3, 0) : void 0; m > S; S++)
                if ((h || S in v) && (d = b(p = v[S], S, g), e2)) {
                  if (n2)
                    E[S] = d;
                  else if (d)
                    switch (e2) {
                      case 3:
                        return true;
                      case 5:
                        return p;
                      case 6:
                        return S;
                      case 2:
                        E.push(p);
                    }
                  else if (l)
                    return false;
                }
              return f ? -1 : c || l ? l : E;
            };
          };
        }, function(e, t, n) {
          var r = n(0), i = n(37), o = n(3);
          e.exports = function(e2, t2) {
            var n2 = (i.Object || {})[e2] || Object[e2], s = {};
            s[e2] = t2(n2), r(r.S + r.F * o(function() {
              n2(1);
            }), "Object", s);
          };
        }, function(e, t, n) {
          var r = n(54), i = n(28);
          e.exports = function(e2) {
            return r(i(e2));
          };
        }, function(e, t, n) {
          "use strict";
          if (n(11)) {
            var r = n(44), i = n(6), o = n(3), s = n(0), a = n(60), u = n(75), c = n(27), l = n(42), f = n(36), h = n(18), _ = n(41), y = n(24), p = n(12), d = n(121), g = n(34), v = n(30), b = n(16), m = n(66), S = n(4), E = n(14), R = n(80), O = n(33), w = n(31), A = n(32).f, I = n(79), M = n(35), T = n(7), k = n(19), P = n(94), F = n(76), j = n(128), U = n(53), N = n(64), B = n(43), L = n(78), D = n(129), Y = n(10), C = n(23), x = Y.f, q = C.f, V = i.RangeError, K = i.TypeError, G = i.Uint8Array, z = Array.prototype, H = u.ArrayBuffer, J = u.DataView, W = k(0), X = k(2), Q = k(3), Z = k(4), $ = k(5), ee = k(6), te = P(true), ne = P(false), re = j.values, ie = j.keys, oe = j.entries, se = z.lastIndexOf, ae = z.reduce, ue = z.reduceRight, ce = z.join, le = z.sort, fe = z.slice, he = z.toString, _e = z.toLocaleString, ye = T("iterator"), pe = T("toStringTag"), de = M("typed_constructor"), ge = M("def_constructor"), ve = a.CONSTR, be = a.TYPED, me = a.VIEW, Se = k(1, function(e2, t2) {
              return Ae(F(e2, e2[ge]), t2);
            }), Ee = o(function() {
              return 1 === new G(new Uint16Array([1]).buffer)[0];
            }), Re = !!G && !!G.prototype.set && o(function() {
              new G(1).set({});
            }), Oe = /* @__PURE__ */ __name(function(e2, t2) {
              var n2 = y(e2);
              if (n2 < 0 || n2 % t2)
                throw V("Wrong offset!");
              return n2;
            }, "Oe"), we = /* @__PURE__ */ __name(function(e2) {
              if (S(e2) && be in e2)
                return e2;
              throw K(e2 + " is not a typed array!");
            }, "we"), Ae = /* @__PURE__ */ __name(function(e2, t2) {
              if (!(S(e2) && de in e2))
                throw K("It is not a typed array constructor!");
              return new e2(t2);
            }, "Ae"), Ie = /* @__PURE__ */ __name(function(e2, t2) {
              return Me(F(e2, e2[ge]), t2);
            }, "Ie"), Me = /* @__PURE__ */ __name(function(e2, t2) {
              for (var n2 = 0, r2 = t2.length, i2 = Ae(e2, r2); r2 > n2; )
                i2[n2] = t2[n2++];
              return i2;
            }, "Me"), Te = /* @__PURE__ */ __name(function(e2, t2, n2) {
              x(e2, t2, { get: function() {
                return this._d[n2];
              } });
            }, "Te"), ke = /* @__PURE__ */ __name(function(e2) {
              var t2, n2, r2, i2, o2, s2, a2 = E(e2), u2 = arguments.length, l2 = u2 > 1 ? arguments[1] : void 0, f2 = void 0 !== l2, h2 = I(a2);
              if (void 0 != h2 && !R(h2)) {
                for (s2 = h2.call(a2), r2 = [], t2 = 0; !(o2 = s2.next()).done; t2++)
                  r2.push(o2.value);
                a2 = r2;
              }
              for (f2 && u2 > 2 && (l2 = c(l2, arguments[2], 2)), t2 = 0, n2 = p(a2.length), i2 = Ae(this, n2); n2 > t2; t2++)
                i2[t2] = f2 ? l2(a2[t2], t2) : a2[t2];
              return i2;
            }, "ke"), Pe = /* @__PURE__ */ __name(function() {
              for (var e2 = 0, t2 = arguments.length, n2 = Ae(this, t2); t2 > e2; )
                n2[e2] = arguments[e2++];
              return n2;
            }, "Pe"), Fe = !!G && o(function() {
              _e.call(new G(1));
            }), je = /* @__PURE__ */ __name(function() {
              return _e.apply(Fe ? fe.call(we(this)) : we(this), arguments);
            }, "je"), Ue = { copyWithin: function(e2, t2) {
              return D.call(we(this), e2, t2, arguments.length > 2 ? arguments[2] : void 0);
            }, every: function(e2) {
              return Z(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, fill: function(e2) {
              return L.apply(we(this), arguments);
            }, filter: function(e2) {
              return Ie(this, X(we(this), e2, arguments.length > 1 ? arguments[1] : void 0));
            }, find: function(e2) {
              return $(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, findIndex: function(e2) {
              return ee(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, forEach: function(e2) {
              W(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, indexOf: function(e2) {
              return ne(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, includes: function(e2) {
              return te(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, join: function(e2) {
              return ce.apply(we(this), arguments);
            }, lastIndexOf: function(e2) {
              return se.apply(we(this), arguments);
            }, map: function(e2) {
              return Se(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, reduce: function(e2) {
              return ae.apply(we(this), arguments);
            }, reduceRight: function(e2) {
              return ue.apply(we(this), arguments);
            }, reverse: function() {
              for (var e2, t2 = we(this).length, n2 = Math.floor(t2 / 2), r2 = 0; r2 < n2; )
                e2 = this[r2], this[r2++] = this[--t2], this[t2] = e2;
              return this;
            }, some: function(e2) {
              return Q(we(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, sort: function(e2) {
              return le.call(we(this), e2);
            }, subarray: function(e2, t2) {
              var n2 = we(this), r2 = n2.length, i2 = g(e2, r2);
              return new (F(n2, n2[ge]))(n2.buffer, n2.byteOffset + i2 * n2.BYTES_PER_ELEMENT, p((void 0 === t2 ? r2 : g(t2, r2)) - i2));
            } }, Ne = /* @__PURE__ */ __name(function(e2, t2) {
              return Ie(this, fe.call(we(this), e2, t2));
            }, "Ne"), Be = /* @__PURE__ */ __name(function(e2) {
              we(this);
              var t2 = Oe(arguments[1], 1), n2 = this.length, r2 = E(e2), i2 = p(r2.length), o2 = 0;
              if (i2 + t2 > n2)
                throw V("Wrong length!");
              for (; o2 < i2; )
                this[t2 + o2] = r2[o2++];
            }, "Be"), Le = { entries: function() {
              return oe.call(we(this));
            }, keys: function() {
              return ie.call(we(this));
            }, values: function() {
              return re.call(we(this));
            } }, De = /* @__PURE__ */ __name(function(e2, t2) {
              return S(e2) && e2[be] && "symbol" != typeof t2 && t2 in e2 && String(+t2) == String(t2);
            }, "De"), Ye = /* @__PURE__ */ __name(function(e2, t2) {
              return De(e2, t2 = v(t2, true)) ? f(2, e2[t2]) : q(e2, t2);
            }, "Ye"), Ce = /* @__PURE__ */ __name(function(e2, t2, n2) {
              return !(De(e2, t2 = v(t2, true)) && S(n2) && b(n2, "value")) || b(n2, "get") || b(n2, "set") || n2.configurable || b(n2, "writable") && !n2.writable || b(n2, "enumerable") && !n2.enumerable ? x(e2, t2, n2) : (e2[t2] = n2.value, e2);
            }, "Ce");
            ve || (C.f = Ye, Y.f = Ce), s(s.S + s.F * !ve, "Object", { getOwnPropertyDescriptor: Ye, defineProperty: Ce }), o(function() {
              he.call({});
            }) && (he = _e = /* @__PURE__ */ __name(function() {
              return ce.call(this);
            }, "_e"));
            var xe = _({}, Ue);
            _(xe, Le), h(xe, ye, Le.values), _(xe, { slice: Ne, set: Be, constructor: function() {
            }, toString: he, toLocaleString: je }), Te(xe, "buffer", "b"), Te(xe, "byteOffset", "o"), Te(xe, "byteLength", "l"), Te(xe, "length", "e"), x(xe, pe, { get: function() {
              return this[be];
            } }), e.exports = function(e2, t2, n2, u2) {
              var c2 = e2 + ((u2 = !!u2) ? "Clamped" : "") + "Array", f2 = "get" + e2, _2 = "set" + e2, y2 = i[c2], g2 = y2 || {}, v2 = y2 && w(y2), b2 = !y2 || !a.ABV, E2 = {}, R2 = y2 && y2.prototype, I2 = /* @__PURE__ */ __name(function(e3, n3) {
                x(e3, n3, { get: function() {
                  return function(e4, n4) {
                    var r2 = e4._d;
                    return r2.v[f2](n4 * t2 + r2.o, Ee);
                  }(this, n3);
                }, set: function(e4) {
                  return function(e5, n4, r2) {
                    var i2 = e5._d;
                    u2 && (r2 = (r2 = Math.round(r2)) < 0 ? 0 : r2 > 255 ? 255 : 255 & r2), i2.v[_2](n4 * t2 + i2.o, r2, Ee);
                  }(this, n3, e4);
                }, enumerable: true });
              }, "I");
              b2 ? (y2 = n2(function(e3, n3, r2, i2) {
                l(e3, y2, c2, "_d");
                var o2, s2, a2, u3, f3 = 0, _3 = 0;
                if (S(n3)) {
                  if (!(n3 instanceof H || "ArrayBuffer" == (u3 = m(n3)) || "SharedArrayBuffer" == u3))
                    return be in n3 ? Me(y2, n3) : ke.call(y2, n3);
                  o2 = n3, _3 = Oe(r2, t2);
                  var g3 = n3.byteLength;
                  if (void 0 === i2) {
                    if (g3 % t2)
                      throw V("Wrong length!");
                    if ((s2 = g3 - _3) < 0)
                      throw V("Wrong length!");
                  } else if ((s2 = p(i2) * t2) + _3 > g3)
                    throw V("Wrong length!");
                  a2 = s2 / t2;
                } else
                  a2 = d(n3), o2 = new H(s2 = a2 * t2);
                for (h(e3, "_d", { b: o2, o: _3, l: s2, e: a2, v: new J(o2) }); f3 < a2; )
                  I2(e3, f3++);
              }), R2 = y2.prototype = O(xe), h(R2, "constructor", y2)) : o(function() {
                y2(1);
              }) && o(function() {
                new y2(-1);
              }) && N(function(e3) {
                new y2(), new y2(null), new y2(1.5), new y2(e3);
              }, true) || (y2 = n2(function(e3, n3, r2, i2) {
                var o2;
                return l(e3, y2, c2), S(n3) ? n3 instanceof H || "ArrayBuffer" == (o2 = m(n3)) || "SharedArrayBuffer" == o2 ? void 0 !== i2 ? new g2(n3, Oe(r2, t2), i2) : void 0 !== r2 ? new g2(n3, Oe(r2, t2)) : new g2(n3) : be in n3 ? Me(y2, n3) : ke.call(y2, n3) : new g2(d(n3));
              }), W(v2 !== Function.prototype ? A(g2).concat(A(v2)) : A(g2), function(e3) {
                e3 in y2 || h(y2, e3, g2[e3]);
              }), y2.prototype = R2, r || (R2.constructor = y2));
              var M2 = R2[ye], T2 = !!M2 && ("values" == M2.name || void 0 == M2.name), k2 = Le.values;
              h(y2, de, true), h(R2, be, c2), h(R2, me, true), h(R2, ge, y2), (u2 ? new y2(1)[pe] == c2 : pe in R2) || x(R2, pe, { get: function() {
                return c2;
              } }), E2[c2] = y2, s(s.G + s.W + s.F * (y2 != g2), E2), s(s.S, c2, { BYTES_PER_ELEMENT: t2 }), s(s.S + s.F * o(function() {
                g2.of.call(y2, 1);
              }), c2, { from: ke, of: Pe }), "BYTES_PER_ELEMENT" in R2 || h(R2, "BYTES_PER_ELEMENT", t2), s(s.P, c2, Ue), B(c2), s(s.P + s.F * Re, c2, { set: Be }), s(s.P + s.F * !T2, c2, Le), r || R2.toString == he || (R2.toString = he), s(s.P + s.F * o(function() {
                new y2(1).slice();
              }), c2, { slice: Ne }), s(s.P + s.F * (o(function() {
                return [1, 2].toLocaleString() != new y2([1, 2]).toLocaleString();
              }) || !o(function() {
                R2.toLocaleString.call([1, 2]);
              })), c2, { toLocaleString: je }), U[c2] = T2 ? M2 : k2, r || T2 || h(R2, ye, k2);
            };
          } else
            e.exports = function() {
            };
        }, function(e, t, n) {
          var r = n(67), i = n(36), o = n(21), s = n(30), a = n(16), u = n(148), c = Object.getOwnPropertyDescriptor;
          t.f = n(11) ? c : function(e2, t2) {
            if (e2 = o(e2), t2 = s(t2, true), u)
              try {
                return c(e2, t2);
              } catch (e3) {
              }
            if (a(e2, t2))
              return i(!r.f.call(e2, t2), e2[t2]);
          };
        }, function(e, t) {
          var n = Math.ceil, r = Math.floor;
          e.exports = function(e2) {
            return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? r : n)(e2);
          };
        }, function(e, t) {
          var n = {}.toString;
          e.exports = function(e2) {
            return n.call(e2).slice(8, -1);
          };
        }, function(e, t) {
          e.exports = function(e2) {
            if ("function" != typeof e2)
              throw TypeError(e2 + " is not a function!");
            return e2;
          };
        }, function(e, t, n) {
          var r = n(26);
          e.exports = function(e2, t2, n2) {
            if (r(e2), void 0 === t2)
              return e2;
            switch (n2) {
              case 1:
                return function(n3) {
                  return e2.call(t2, n3);
                };
              case 2:
                return function(n3, r2) {
                  return e2.call(t2, n3, r2);
                };
              case 3:
                return function(n3, r2, i) {
                  return e2.call(t2, n3, r2, i);
                };
            }
            return function() {
              return e2.apply(t2, arguments);
            };
          };
        }, function(e, t) {
          e.exports = function(e2) {
            if (void 0 == e2)
              throw TypeError("Can't call method on  " + e2);
            return e2;
          };
        }, function(e, t, n) {
          var r = n(35)("meta"), i = n(4), o = n(16), s = n(10).f, a = 0, u = Object.isExtensible || function() {
            return true;
          }, c = !n(3)(function() {
            return u(Object.preventExtensions({}));
          }), l = /* @__PURE__ */ __name(function(e2) {
            s(e2, r, { value: { i: "O" + ++a, w: {} } });
          }, "l"), f = e.exports = { KEY: r, NEED: false, fastKey: function(e2, t2) {
            if (!i(e2))
              return "symbol" == typeof e2 ? e2 : ("string" == typeof e2 ? "S" : "P") + e2;
            if (!o(e2, r)) {
              if (!u(e2))
                return "F";
              if (!t2)
                return "E";
              l(e2);
            }
            return e2[r].i;
          }, getWeak: function(e2, t2) {
            if (!o(e2, r)) {
              if (!u(e2))
                return true;
              if (!t2)
                return false;
              l(e2);
            }
            return e2[r].w;
          }, onFreeze: function(e2) {
            return c && f.NEED && u(e2) && !o(e2, r) && l(e2), e2;
          } };
        }, function(e, t, n) {
          var r = n(4);
          e.exports = function(e2, t2) {
            if (!r(e2))
              return e2;
            var n2, i;
            if (t2 && "function" == typeof (n2 = e2.toString) && !r(i = n2.call(e2)))
              return i;
            if ("function" == typeof (n2 = e2.valueOf) && !r(i = n2.call(e2)))
              return i;
            if (!t2 && "function" == typeof (n2 = e2.toString) && !r(i = n2.call(e2)))
              return i;
            throw TypeError("Can't convert object to primitive value");
          };
        }, function(e, t, n) {
          var r = n(16), i = n(14), o = n(93)("IE_PROTO"), s = Object.prototype;
          e.exports = Object.getPrototypeOf || function(e2) {
            return e2 = i(e2), r(e2, o) ? e2[o] : "function" == typeof e2.constructor && e2 instanceof e2.constructor ? e2.constructor.prototype : e2 instanceof Object ? s : null;
          };
        }, function(e, t, n) {
          var r = n(146), i = n(92).concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function(e2) {
            return r(e2, i);
          };
        }, function(e, t, n) {
          var r = n(5), i = n(145), o = n(92), s = n(93)("IE_PROTO"), a = /* @__PURE__ */ __name(function() {
          }, "a"), u = /* @__PURE__ */ __name(function() {
            var e2, t2 = n(96)("iframe"), r2 = o.length;
            for (t2.style.display = "none", n(90).appendChild(t2), t2.src = "javascript:", (e2 = t2.contentWindow.document).open(), e2.write("<script>document.F=Object<\/script>"), e2.close(), u = e2.F; r2--; )
              delete u.prototype[o[r2]];
            return u();
          }, "u");
          e.exports = Object.create || function(e2, t2) {
            var n2;
            return null !== e2 ? (a.prototype = r(e2), n2 = new a(), a.prototype = null, n2[s] = e2) : n2 = u(), void 0 === t2 ? n2 : i(n2, t2);
          };
        }, function(e, t, n) {
          var r = n(24), i = Math.max, o = Math.min;
          e.exports = function(e2, t2) {
            return (e2 = r(e2)) < 0 ? i(e2 + t2, 0) : o(e2, t2);
          };
        }, function(e, t) {
          var n = 0, r = Math.random();
          e.exports = function(e2) {
            return "Symbol(".concat(void 0 === e2 ? "" : e2, ")_", (++n + r).toString(36));
          };
        }, function(e, t) {
          e.exports = function(e2, t2) {
            return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
          };
        }, function(e, t) {
          var n = e.exports = { version: "2.5.4" };
          "number" == typeof __e && (__e = n);
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.LogicOperator = t.MatchExpression = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(8);
          function o(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(o, "o");
          var s = function() {
            function e2(t2, n2, r2) {
              o(this, e2), this._varName = t2, this._condition = n2, this._value = r2, this._logicOp = null, this._next = null, this._parent = null, Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "and", value: function(t2, n2, r2) {
              return this._next = e2.chainedMatchExpression(t2, n2, r2, a.AND, this), this._next;
            } }, { key: "or", value: function(t2, n2, r2) {
              return this._next = e2.chainedMatchExpression(t2, n2, r2, a.OR, this), this._next;
            } }, { key: "hasNext", value: function() {
              return null != this._next;
            } }, { key: "rewind", value: function() {
              for (var e3 = this; null != e3._parent; )
                e3 = e3._parent;
              return e3;
            } }, { key: "toString", value: function() {
              for (var e3 = this.rewind(), t2 = e3.asString(); e3.hasNext(); )
                t2 += (e3 = e3.next).asString();
              return t2;
            } }, { key: "asString", value: function() {
              var e3 = "";
              null != this._logicOp && (e3 += " " + this._logicOp.id + " ");
              var t2 = "string" == typeof this._value ? "' " + this._value + " '" : this._value;
              return e3 += "(" + this._varName + " " + this._condition.symbol + " " + t2 + ")";
            } }, { key: "toSFSArray", value: function() {
              var e3 = this.rewind(), t2 = new i.SFSArray();
              for (t2.addSFSArray(e3.expressionAsSFSArray()); e3.hasNext(); )
                e3 = e3.next, t2.addSFSArray(e3.expressionAsSFSArray());
              return t2;
            } }, { key: "expressionAsSFSArray", value: function() {
              var e3 = new i.SFSArray();
              return null != this._logicOp ? e3.addUtfString(this._logicOp.id) : e3.addNull(), e3.addUtfString(this._varName), e3.addByte(this._condition.type), e3.addUtfString(this._condition.symbol), 0 === this._condition.type ? e3.addBool(this._value) : 1 === this._condition.type ? e3.addDouble(this._value) : e3.addUtfString(this._value), e3;
            } }, { key: "varName", get: function() {
              return this._varName;
            } }, { key: "condition", get: function() {
              return this._condition;
            } }, { key: "value", get: function() {
              return this._value;
            } }, { key: "logicOp", get: function() {
              return this._logicOp;
            } }, { key: "next", get: function() {
              return this._next;
            } }], [{ key: "chainedMatchExpression", value: function(t2, n2, r2, i2, o2) {
              var s2 = new e2(t2, n2, r2);
              return s2._logicOp = i2, s2._parent = o2, s2;
            } }]), e2;
          }(), a = function() {
            function e2(t2) {
              o(this, e2), this._id = t2, Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "id", get: function() {
              return this._id;
            } }], [{ key: "AND", get: function() {
              return new e2("AND");
            } }, { key: "OR", get: function() {
              return new e2("OR");
            } }]), e2;
          }();
          t.MatchExpression = s, t.LogicOperator = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }();
          var i = function() {
            function e2() {
              !function(e3, t2) {
                if (!(e3 instanceof t2))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._listenersByEvent = {};
            }
            __name(e2, "e");
            return r(e2, [{ key: "addEventListener", value: function(e3, t2, n2) {
              this._listenersByEvent[e3] || (this._listenersByEvent[e3] = []), this._listenersByEvent[e3].push({ callback: t2, scope: n2 });
            } }, { key: "removeEventListener", value: function(e3, t2) {
              var n2 = this._listenersByEvent[e3];
              if (n2) {
                for (var r2 = 0; r2 < n2.length; r2++)
                  if (n2[r2].callback === t2) {
                    n2.splice(r2, 1);
                    break;
                  }
              }
            } }, { key: "dispatchEvent", value: function(e3, t2) {
              var n2 = this._listenersByEvent[e3];
              if (n2) {
                var r2 = true, i2 = false, o2 = void 0;
                try {
                  for (var s2, a = n2[Symbol.iterator](); !(r2 = (s2 = a.next()).done); r2 = true) {
                    var u = s2.value;
                    u.callback.call(u.scope, t2);
                  }
                } catch (e4) {
                  i2 = true, o2 = e4;
                } finally {
                  try {
                    !r2 && a.return && a.return();
                  } finally {
                    if (i2)
                      throw o2;
                  }
                }
              }
            } }]), e2;
          }(), o = Object.freeze({ HANDSHAKE: "handshake", CONNECTION: "connection", CONNECTION_LOST: "connectionLost", LOGIN: "login", LOGIN_ERROR: "loginError", LOGOUT: "logout", ROOM_ADD: "roomAdd", ROOM_CREATION_ERROR: "roomCreationError", ROOM_REMOVE: "roomRemove", ROOM_JOIN: "roomJoin", ROOM_JOIN_ERROR: "roomJoinError", USER_ENTER_ROOM: "userEnterRoom", USER_EXIT_ROOM: "userExitRoom", USER_COUNT_CHANGE: "userCountChange", PROXIMITY_LIST_UPDATE: "proximityListUpdate", PLAYER_TO_SPECTATOR: "playerToSpectator", PLAYER_TO_SPECTATOR_ERROR: "playerToSpectatorError", SPECTATOR_TO_PLAYER: "spectatorToPlayer", SPECTATOR_TO_PLAYER_ERROR: "spectatorToPlayerError", ROOM_NAME_CHANGE: "roomNameChange", ROOM_NAME_CHANGE_ERROR: "roomNameChangeError", ROOM_PASSWORD_STATE_CHANGE: "roomPasswordStateChange", ROOM_PASSWORD_STATE_CHANGE_ERROR: "roomPasswordStateChangeError", ROOM_CAPACITY_CHANGE: "roomCapacityChange", ROOM_CAPACITY_CHANGE_ERROR: "roomCapacityChangeError", PUBLIC_MESSAGE: "publicMessage", PRIVATE_MESSAGE: "privateMessage", OBJECT_MESSAGE: "objectMessage", MODERATOR_MESSAGE: "moderatorMessage", ADMIN_MESSAGE: "adminMessage", EXTENSION_RESPONSE: "extensionResponse", ROOM_VARIABLES_UPDATE: "roomVariablesUpdate", USER_VARIABLES_UPDATE: "userVariablesUpdate", MMOITEM_VARIABLES_UPDATE: "mmoItemVariablesUpdate", ROOM_GROUP_SUBSCRIBE: "roomGroupSubscribe", ROOM_GROUP_SUBSCRIBE_ERROR: "roomGroupSubscribeError", ROOM_GROUP_UNSUBSCRIBE: "roomGroupUnsubscribe", ROOM_GROUP_UNSUBSCRIBE_ERROR: "roomGroupUnsubscribeError", ROOM_FIND_RESULT: "roomFindResult", USER_FIND_RESULT: "userFindResult", INVITATION: "invitation", INVITATION_REPLY: "invitationReply", INVITATION_REPLY_ERROR: "invitationReplyError", PING_PONG: "pingPong", SOCKET_ERROR: "socketError" }), s = Object.freeze({ BUDDY_LIST_INIT: "buddyListInit", BUDDY_ADD: "buddyAdd", BUDDY_REMOVE: "buddyRemove", BUDDY_BLOCK: "buddyBlock", BUDDY_ERROR: "buddyError", BUDDY_ONLINE_STATE_CHANGE: "buddyOnlineStateChange", BUDDY_VARIABLES_UPDATE: "buddyVariablesUpdate", BUDDY_MESSAGE: "buddyMessage" });
          t.EventDispatcher = i, t.SFSEvent = o, t.SFSBuddyEvent = s;
        }, function(e, t, n) {
          var r = n(4);
          e.exports = function(e2, t2) {
            if (!r(e2) || e2._t !== t2)
              throw TypeError("Incompatible receiver, " + t2 + " required!");
            return e2;
          };
        }, function(e, t, n) {
          var r = n(15);
          e.exports = function(e2, t2, n2) {
            for (var i in t2)
              r(e2, i, t2[i], n2);
            return e2;
          };
        }, function(e, t) {
          e.exports = function(e2, t2, n, r) {
            if (!(e2 instanceof t2) || void 0 !== r && r in e2)
              throw TypeError(n + ": incorrect invocation!");
            return e2;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(6), i = n(10), o = n(11), s = n(7)("species");
          e.exports = function(e2) {
            var t2 = r[e2];
            o && t2 && !t2[s] && i.f(t2, s, { configurable: true, get: function() {
              return this;
            } });
          };
        }, function(e, t) {
          e.exports = false;
        }, function(e, t, n) {
          var r = n(10).f, i = n(16), o = n(7)("toStringTag");
          e.exports = function(e2, t2, n2) {
            e2 && !i(e2 = n2 ? e2 : e2.prototype, o) && r(e2, o, { configurable: true, value: t2 });
          };
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SFSBuddyVariable = t.ReservedBuddyVariables = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(48);
          var o = Object.freeze({ BV_ONLINE: "$__BV_ONLINE__", BV_STATE: "$__BV_STATE__", BV_NICKNAME: "$__BV_NICKNAME__" }), s = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var i2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2, r2));
              return Object.freeze(i2), i2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseVariable), r(t2, null, [{ key: "OFFLINE_PREFIX", get: function() {
              return "$";
            } }]), r(t2, [{ key: "toString", value: function() {
              return "[BuddyVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]";
            } }, { key: "isOffline", get: function() {
              return this._name.charAt(0) === t2.OFFLINE_PREFIX;
            } }], [{ key: "fromSFSArray", value: function(e3) {
              return new t2(e3.get(0), e3.get(2), e3.get(1));
            } }]), t2;
          }();
          t.ReservedBuddyVariables = o, t.SFSBuddyVariable = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.UserPrivileges = t.SFSUser = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(59), o = n(1);
          var s = function() {
            function e2(t2, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._id = t2, this._name = n2, this._isItMe = r2, this._privilegeId = 0, this._aoiEntryPoint = null, this._variables = /* @__PURE__ */ new Map(), this._playerIdByRoomId = /* @__PURE__ */ new Map(), this._userManager = null, this.properties = {}, Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "toString", value: function() {
              return "[User: " + this.name + ", Id: " + this.id + ", Is me: " + this.isItMe + "]";
            } }, { key: "isJoinedInRoom", value: function(e3) {
              return e3.containsUser(this);
            } }, { key: "getPlayerId", value: function(e3) {
              var t2 = this._playerIdByRoomId.get(e3.id);
              return null != t2 ? t2 : 0;
            } }, { key: "isPlayerInRoom", value: function(e3) {
              return !!e3.isGame && this.getPlayerId(e3) > 0;
            } }, { key: "isSpectatorInRoom", value: function(e3) {
              return !!e3.isGame && this.getPlayerId(e3) < 0;
            } }, { key: "getVariable", value: function(e3) {
              return this._variables.get(e3);
            } }, { key: "containsVariable", value: function(e3) {
              return this._variables.has(e3);
            } }, { key: "getVariables", value: function() {
              return Array.from(this._variables.values());
            } }, { key: "getUserManager", value: function() {
              return this._userManager;
            } }, { key: "_setPlayerId", value: function(e3, t2) {
              this._playerIdByRoomId.set(t2.id, e3);
            } }, { key: "_removePlayerId", value: function(e3) {
              this._playerIdByRoomId.delete(e3.id);
            } }, { key: "_setVariables", value: function(e3) {
              var t2 = true, n2 = false, r2 = void 0;
              try {
                for (var i2, o2 = e3[Symbol.iterator](); !(t2 = (i2 = o2.next()).done); t2 = true) {
                  var s2 = i2.value;
                  this._setVariable(s2);
                }
              } catch (e4) {
                n2 = true, r2 = e4;
              } finally {
                try {
                  !t2 && o2.return && o2.return();
                } finally {
                  if (n2)
                    throw r2;
                }
              }
            } }, { key: "_setVariable", value: function(e3) {
              e3.isNull ? this._variables.delete(e3.name) : this._variables.set(e3.name, e3);
            } }, { key: "_setUserManager", value: function(e3) {
              if (null != this._userManager)
                throw new o.SFSError("User Manager already assigned to user " + this.toString());
              this._userManager = e3;
            } }, { key: "id", get: function() {
              return this._id;
            } }, { key: "name", get: function() {
              return this._name;
            } }, { key: "isItMe", get: function() {
              return this._isItMe;
            } }, { key: "privilegeId", get: function() {
              return this._privilegeId;
            } }, { key: "aoiEntryPoint", get: function() {
              return this._aoiEntryPoint;
            } }, { key: "isGuest", get: function() {
              return this._privilegeId === a.GUEST;
            } }, { key: "isStandardUser", get: function() {
              return this._privilegeId === a.STANDARD;
            } }, { key: "isModerator", get: function() {
              return this._privilegeId === a.MODERATOR;
            } }, { key: "isAdmin", get: function() {
              return this.privilegeId === a.ADMINISTRATOR;
            } }, { key: "isPlayer", get: function() {
              return this.isPlayerInRoom(this._userManager._sfs.lastJoinedRoom);
            } }, { key: "isSpectator", get: function() {
              return this.isSpectatorInRoom(this._userManager._sfs.lastJoinedRoom);
            } }], [{ key: "fromSFSArray", value: function(t2) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = new e2(t2.get(0), t2.get(1));
              r2._privilegeId = t2.get(2), null != n2 && r2._setPlayerId(t2.get(3), n2);
              var o2 = t2.get(4);
              if (null != o2)
                for (var s2 = 0; s2 < o2.size(); s2++)
                  r2._setVariable(i.SFSUserVariable.fromSFSArray(o2.get(s2)));
              return r2;
            } }]), e2;
          }(), a = Object.freeze({ GUEST: 0, STANDARD: 1, MODERATOR: 2, ADMINISTRATOR: 3 });
          t.SFSUser = s, t.UserPrivileges = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.BaseVariable = t.VariableType = void 0;
          var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, i = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), o = n(8);
          var s = Object.freeze({ NULL: 0, BOOLEAN: 1, INT: 2, DOUBLE: 3, STRING: 4, SFSOBJECT: 5, SFSARRAY: 6, getTypeName: function(e2) {
            return ["null", "boolean", "int", "double", "string", "SFSObject", "SFSArray"][e2];
          } }), a = function() {
            function e2(t2, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._name = t2, this._value = n2, this._type = r2 > -1 ? r2 : this._evalType();
            }
            __name(e2, "e");
            return i(e2, [{ key: "toSFSArray", value: function() {
              var e3 = new o.SFSArray();
              return e3.addUtfString(this.name), e3.addByte(this._type), this._populateArrayWithValue(e3), e3;
            } }, { key: "_populateArrayWithValue", value: function(e3) {
              switch (this._type) {
                case s.NULL:
                  e3.addNull();
                  break;
                case s.BOOLEAN:
                  e3.addBool(this.value);
                  break;
                case s.INT:
                  e3.addInt(this.value);
                  break;
                case s.DOUBLE:
                  e3.addDouble(this.value);
                  break;
                case s.STRING:
                  e3.addUtfString(this.value);
                  break;
                case s.SFSOBJECT:
                  e3.addSFSObject(this.value);
                  break;
                case s.SFSARRAY:
                  e3.addSFSArray(this.value);
              }
            } }, { key: "_evalType", value: function() {
              if (null == this._value)
                return s.NULL;
              var e3 = r(this._value);
              if ("boolean" === e3)
                return s.BOOLEAN;
              if ("number" === e3) {
                var t2 = this._value;
                return t2 === +t2 && t2 === (0 | t2) ? s.INT : s.DOUBLE;
              }
              return "string" === e3 ? s.STRING : "object" === e3 ? this._value instanceof o.SFSArray ? s.SFSARRAY : s.SFSOBJECT : void 0;
            } }, { key: "name", get: function() {
              return this._name;
            } }, { key: "value", get: function() {
              return this._value;
            } }, { key: "type", get: function() {
              return s.getTypeName(this._type);
            } }, { key: "isNull", get: function() {
              return this._type === s.NULL;
            } }]), e2;
          }();
          t.VariableType = s, t.BaseVariable = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SFSRoomVariable = t.ReservedRoomVariables = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(48);
          var o = Object.freeze({ RV_GAME_STARTED: "$GS" }), s = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var i2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2, r2));
              return i2.isPrivate = false, i2.isPersistent = false, Object.seal(i2), i2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseVariable), r(t2, [{ key: "toString", value: function() {
              return "[RoomVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Private: " + this.isPrivate + "]";
            } }, { key: "toSFSArray", value: function() {
              var e3 = (/* @__PURE__ */ __name(function e4(t3, n2, r2) {
                null === t3 && (t3 = Function.prototype);
                var i2 = Object.getOwnPropertyDescriptor(t3, n2);
                if (void 0 === i2) {
                  var o2 = Object.getPrototypeOf(t3);
                  return null === o2 ? void 0 : e4(o2, n2, r2);
                }
                if ("value" in i2)
                  return i2.value;
                var s2 = i2.get;
                return void 0 !== s2 ? s2.call(r2) : void 0;
              }, "e"))(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "toSFSArray", this).call(this);
              return e3.addBool(this.isPrivate), e3.addBool(this.isPersistent), e3;
            } }], [{ key: "fromSFSArray", value: function(e3) {
              var n2 = new t2(e3.get(0), e3.get(2), e3.get(1));
              return n2.isPrivate = e3.get(3), n2.isPersistent = e3.get(4), n2;
            } }]), t2;
          }();
          t.ReservedRoomVariables = o, t.SFSRoomVariable = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.LoggerEvent = t.Logger = t.LogLevel = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(39);
          var o = Object.freeze({ DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, toString: function(e2) {
            return e2 === this.DEBUG ? "DEBUG" : e2 === this.INFO ? "INFO" : e2 === this.WARN ? "WARN" : e2 === this.ERROR ? "ERROR" : void 0;
          } }), s = Object.freeze({ DEBUG: "debug", INFO: "info", WARNING: "warn", ERROR: "error" }), a = Symbol(), u = Symbol(), c = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              if (e3 !== u)
                throw "Logger is a singleton class; you can't instantiate it";
              return n2._enableConsoleOutput = void 0 !== console, n2._enableEventDispatching = false, n2._level = o.INFO, n2._useBasicLog = true, void 0 !== console && (n2._useBasicLog = "function" != typeof console.debug || "function" != typeof console.info || "function" != typeof console.warn || "function" != typeof console.error), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.EventDispatcher), r(t2, [{ key: "log", value: function(e3) {
              for (var t3 = this, n2 = arguments.length, r2 = Array(n2 > 1 ? n2 - 1 : 0), i2 = 1; i2 < n2; i2++)
                r2[i2 - 1] = arguments[i2];
              if (this.isValidLevel(e3) && e3 >= this._level) {
                if (this._enableConsoleOutput) {
                  var s2 = /* @__PURE__ */ __name(function(e4, n3) {
                    t3._useBasicLog && (n3 = /* @__PURE__ */ __name(function(e5) {
                      console.log(e5);
                    }, "n")), n3("[ SFS2X | " + e4 + " ] " + r2.join(" "));
                  }, "s");
                  switch (e3) {
                    case o.DEBUG:
                      s2("DEBUG", function(e4) {
                        console.debug(e4);
                      });
                      break;
                    case o.INFO:
                      s2("INFO", function(e4) {
                        console.info(e4);
                      });
                      break;
                    case o.WARN:
                      s2("WARN", function(e4) {
                        console.warn(e4);
                      });
                      break;
                    case o.ERROR:
                      s2("ERROR", function(e4) {
                        console.error(e4);
                      });
                  }
                }
                this._enableEventDispatching && this.dispatchEvent(o.toString(e3).toLowerCase(), { message: r2.join(" ") });
              }
            } }, { key: "debug", value: function() {
              for (var e3 = arguments.length, t3 = Array(e3), n2 = 0; n2 < e3; n2++)
                t3[n2] = arguments[n2];
              this.log(o.DEBUG, t3);
            } }, { key: "info", value: function() {
              for (var e3 = arguments.length, t3 = Array(e3), n2 = 0; n2 < e3; n2++)
                t3[n2] = arguments[n2];
              this.log(o.INFO, t3);
            } }, { key: "warn", value: function() {
              for (var e3 = arguments.length, t3 = Array(e3), n2 = 0; n2 < e3; n2++)
                t3[n2] = arguments[n2];
              this.log(o.WARN, t3);
            } }, { key: "error", value: function() {
              for (var e3 = arguments.length, t3 = Array(e3), n2 = 0; n2 < e3; n2++)
                t3[n2] = arguments[n2];
              this.log(o.ERROR, t3);
            } }, { key: "isValidLevel", value: function(e3) {
              if (!Number.isInteger(e3) || e3 < o.DEBUG || e3 > o.ERROR)
                throw "Logging level must be set to a valid value (see LogLevel class)";
              return true;
            } }, { key: "level", set: function(e3) {
              this.isValidLevel(e3) && (this._level = e3);
            }, get: function() {
              return this._level;
            } }, { key: "enableConsoleOutput", set: function(e3) {
              void 0 !== console && (this._enableConsoleOutput = e3);
            }, get: function() {
              return this._enableConsoleOutput;
            } }, { key: "enableEventDispatching", set: function(e3) {
              this._enableEventDispatching = e3;
            }, get: function() {
              return this._enableEventDispatching;
            } }], [{ key: "instance", get: function() {
              return this[a] || (this[a] = new t2(u)), Object.seal(this[a]);
            } }]), t2;
          }();
          t.LogLevel = o, t.Logger = c, t.LoggerEvent = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }();
          var i = Object.freeze({ IDLE: "idle", KICK: "kick", BAN: "ban", MANUAL: "manual", UNKNOWN: "unknown", getReason: function(e2) {
            switch (e2) {
              case 0:
                return this.IDLE;
              case 1:
                return this.KICK;
              case 2:
                return this.BAN;
              case 3:
                return this.MANUAL;
              case 4:
                return this.UNKNOWN;
            }
          } }), o = function() {
            function e2() {
              !function(e3, t2) {
                if (!(e3 instanceof t2))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2);
            }
            __name(e2, "e");
            return r(e2, null, [{ key: "prettyPrintByteArray", value: function(e3) {
              return null == e3 ? "Null" : e3.length < 32 ? e3.toString() : "Byte[" + e3.length + "]";
            } }, { key: "prettyPrintDump", value: function(e3) {
              for (var t2 = "", n2 = 0, r2 = 0; r2 < e3.length; r2++) {
                var i2 = e3.charAt(r2);
                if (i2 == this.TOKEN_INDENT_OPEN)
                  n2++, t2 += this.NEW_LINE + this.getFormatTabs(n2);
                else if (i2 == this.TOKEN_INDENT_CLOSE) {
                  if (--n2 < 0)
                    throw "DumpFormatter: the indentPos is negative. TOKENS ARE NOT BALANCED!";
                  t2 += this.NEW_LINE + this.getFormatTabs(n2);
                } else
                  i2 == this.TOKEN_DIVIDER ? t2 += this.NEW_LINE + this.getFormatTabs(n2) : t2 += i2;
              }
              if (0 != n2)
                throw "DumpFormatter: the indentPos is not === 0 (" + n2 + "). TOKENS ARE NOT BALANCED!";
              return t2;
            } }, { key: "getFormatTabs", value: function(e3) {
              return this.strFill(this.TAB, e3);
            } }, { key: "strFill", value: function(e3, t2) {
              for (var n2 = "", r2 = 0; r2 < t2; r2++)
                n2 += e3;
              return n2;
            } }, { key: "hexDump", value: function(e3) {
              var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
              -1 === t2 && (t2 = this.HEX_BYTES_PER_LINE);
              var n2 = "Binary size: " + e3.byteLength + this.NEW_LINE, r2 = "", i2 = "", o2 = 0, s = 0, a = null;
              do {
                var u = (a = e3[o2]).toString(16).toUpperCase();
                1 === u.length && (u = "0" + u), r2 += u + " ", i2 += a >= 33 && a <= 126 ? String.fromCharCode(a) : this.DOT, ++s === t2 && (s = 0, n2 += r2 + this.TAB + i2 + this.NEW_LINE, r2 = "", i2 = "");
              } while (++o2 < e3.length);
              if (0 !== s) {
                for (var c = t2 - s; c > 0; --c)
                  r2 += "   ", i2 += " ";
                n2 += r2 + this.TAB + i2 + this.NEW_LINE;
              }
              return n2;
            } }, { key: "TOKEN_INDENT_OPEN", get: function() {
              return "{";
            } }, { key: "TOKEN_INDENT_CLOSE", get: function() {
              return "}";
            } }, { key: "TOKEN_DIVIDER", get: function() {
              return ";";
            } }, { key: "NEW_LINE", get: function() {
              return "\n";
            } }, { key: "TAB", get: function() {
              return "	";
            } }, { key: "DOT", get: function() {
              return ".";
            } }, { key: "HEX_BYTES_PER_LINE", get: function() {
              return 16;
            } }]), e2;
          }();
          t.ClientDisconnectionReason = i, t.DumpFormatter = o;
        }, function(e, t, n) {
          var r = n(7)("unscopables"), i = Array.prototype;
          void 0 == i[r] && n(18)(i, r, {}), e.exports = function(e2) {
            i[r][e2] = true;
          };
        }, function(e, t) {
          e.exports = {};
        }, function(e, t, n) {
          var r = n(25);
          e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e2) {
            return "String" == r(e2) ? e2.split("") : Object(e2);
          };
        }, function(e, t, n) {
          var r = n(146), i = n(92);
          e.exports = Object.keys || function(e2) {
            return r(e2, i);
          };
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.MessageRecipientMode = t.BanMode = t.MapLimits = t.RoomExtension = t.RoomEvents = t.RoomPermissions = t.MMORoomSettings = t.SFSGameSettings = t.RoomSettings = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(1);
          function o(e2, t2) {
            if (!e2)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
          }
          __name(o, "o");
          function s(e2, t2) {
            if ("function" != typeof t2 && null !== t2)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
            e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
          }
          __name(s, "s");
          function a(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(a, "a");
          var u = /* @__PURE__ */ __name(function e2(t2) {
            a(this, e2), this.name = t2, this.password = "", this.groupId = "default", this.isGame = false, this.maxUsers = 10, this.maxSpectators = 0, this.maxVariables = 5, this.variables = [], this.permissions = null, this.events = null, this.extension = null, this.allowOwnerOnlyInvitation = true;
          }, "e"), c = function(e2) {
            function t2(e3) {
              a(this, t2);
              var n2 = o(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3));
              return n2.isPublic = true, n2.minPlayersToStartGame = 2, n2.invitedPlayers = null, n2.searchableRooms = null, n2.invitationExpiryTime = 15, n2.leaveLastJoinedRoom = true, n2.notifyGameStarted = false, n2.playerMatchExpression = null, n2.spectatorMatchExpression = null, n2.invitationParams = null, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return s(t2, u), t2;
          }(), l = function(e2) {
            function t2(e3, n2) {
              a(this, t2);
              var r2 = o(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3));
              return r2.defaultAOI = n2, r2.mapLimits = null, r2.userMaxLimboSeconds = 50, r2.proximityListUpdateMillis = 250, r2.sendAOIEntryPoint = true, Object.seal(r2), r2;
            }
            __name(t2, "t");
            return s(t2, u), t2;
          }(), f = Object.freeze({ BY_ADDRESS: 0, BY_NAME: 1 }), h = function() {
            function e2(t2, n2) {
              if (a(this, e2), t2 < e2.TO_USER || t2 > e2.TO_ZONE)
                throw new i.SFSError("Illegal recipient mode: " + t2);
              this._mode = t2, this._target = n2, Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, null, [{ key: "TO_USER", get: function() {
              return 0;
            } }, { key: "TO_ROOM", get: function() {
              return 1;
            } }, { key: "TO_GROUP", get: function() {
              return 2;
            } }, { key: "TO_ZONE", get: function() {
              return 3;
            } }]), r(e2, [{ key: "mode", get: function() {
              return this._mode;
            } }, { key: "target", get: function() {
              return this._target;
            } }]), e2;
          }();
          t.RoomSettings = u, t.SFSGameSettings = c, t.MMORoomSettings = l, t.RoomPermissions = /* @__PURE__ */ __name(function e2() {
            a(this, e2), this.allowNameChange = false, this.allowPasswordStateChange = false, this.allowPublicMessages = true, this.allowResizing = false, Object.seal(this);
          }, "e"), t.RoomEvents = /* @__PURE__ */ __name(function e2() {
            a(this, e2), this.allowUserCountChange = false, this.allowUserEnter = false, this.allowUserExit = false, this.allowUserVariablesUpdate = false, Object.seal(this);
          }, "e"), t.RoomExtension = /* @__PURE__ */ __name(function e2(t2, n2) {
            a(this, e2), this.id = t2, this.className = n2, this.propertiesFile = "", Object.seal(this);
          }, "e"), t.MapLimits = /* @__PURE__ */ __name(function e2(t2, n2) {
            if (a(this, e2), null == t2 || null == n2)
              throw new i.SFSError("Map limits arguments must be both non null!");
            this.lowerLimit = t2, this.higherLimit = n2, Object.seal(this);
          }, "e"), t.BanMode = f, t.MessageRecipientMode = h;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.CreateRoomRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(56), a = n(8), u = n(9), c = n(49);
          var l = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.CreateRoom));
              return o2._settings = e3, o2._autoJoin = n2, o2._roomToLeave = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_NAME", get: function() {
              return "n";
            } }, { key: "KEY_PASSWORD", get: function() {
              return "p";
            } }, { key: "KEY_GROUP_ID", get: function() {
              return "g";
            } }, { key: "KEY_ISGAME", get: function() {
              return "ig";
            } }, { key: "KEY_MAXUSERS", get: function() {
              return "mu";
            } }, { key: "KEY_MAXSPECTATORS", get: function() {
              return "ms";
            } }, { key: "KEY_MAXVARS", get: function() {
              return "mv";
            } }, { key: "KEY_ROOMVARS", get: function() {
              return "rv";
            } }, { key: "KEY_PERMISSIONS", get: function() {
              return "pm";
            } }, { key: "KEY_EVENTS", get: function() {
              return "ev";
            } }, { key: "KEY_EXTID", get: function() {
              return "xn";
            } }, { key: "KEY_EXTCLASS", get: function() {
              return "xc";
            } }, { key: "KEY_EXTPROP", get: function() {
              return "xp";
            } }, { key: "KEY_AUTOJOIN", get: function() {
              return "aj";
            } }, { key: "KEY_ROOM_TO_LEAVE", get: function() {
              return "rl";
            } }, { key: "KEY_ALLOW_JOIN_INVITATION_BY_OWNER", get: function() {
              return "aji";
            } }, { key: "KEY_MMO_DEFAULT_AOI", get: function() {
              return "maoi";
            } }, { key: "KEY_MMO_MAP_LOW_LIMIT", get: function() {
              return "mllm";
            } }, { key: "KEY_MMO_MAP_HIGH_LIMIT", get: function() {
              return "mlhm";
            } }, { key: "KEY_MMO_USER_MAX_LIMBO_SECONDS", get: function() {
              return "muls";
            } }, { key: "KEY_MMO_PROXIMITY_UPDATE_MILLIS", get: function() {
              return "mpum";
            } }, { key: "KEY_MMO_SEND_ENTRY_POINT", get: function() {
              return "msep";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              if (!(this._settings instanceof s.RoomSettings))
                throw new o.SFSValidationError("CreateRoomRequest Error", ["Room configuration must be an instance of RoomSettings class"]);
              var t3 = [];
              if (null != this._settings.name && 0 !== this._settings.name.length || t3.push("Missing Room name"), this._settings.maxUsers <= 0 && t3.push("Max number of users must be > 0"), this._settings.maxSpectators < 0 && t3.push("Max number of spectators must be >= 0"), this._settings.maxVariables < 0 && t3.push("Max number of Room Variables must be >= 0"), null != this._settings.variables && (this._settings.variables instanceof Array ? this._settings.variables.every(function(e4) {
                return e4 instanceof c.SFSRoomVariable;
              }) || t3.push("Each Room Variable must be an instance of SFSRoomVariable class") : t3.push("Room Variables must be passed in an array")), null == this._settings.permissions || this._settings.permissions instanceof s.RoomPermissions || t3.push("Allowed room permissions must be an instance of RoomPermissions class"), null == this._settings.events || this._settings.events instanceof s.RoomEvents || t3.push("Allowed room events must be an instance of RoomEvents class"), null != this._settings.extension && (this._settings.extension instanceof s.RoomExtension ? (null != this._settings.extension.className && 0 !== this._settings.extension.className.length || t3.push("Missing Room Extension class name"), null != this._settings.extension.id && 0 !== this._settings.extension.id.length || t3.push("Missing Room Extension id")) : t3.push("Room Extension settings must be an instance of RoomExtension class")), this._settings instanceof s.MMORoomSettings && (null == this._settings.defaultAOI && t3.push("Missing MMORoom's default AoI (Area of Interest)"), this._settings.defaultAOI instanceof a.Vec3D || t3.push("MMORoom's AoI (Area of Interest) must be an instance of Vec3D class"), null != this._settings.mapLimits && (this._settings.mapLimits instanceof s.MapLimits ? (null != this._settings.mapLimits.lowerLimit && null != this._settings.mapLimits.higherLimit || t3.push("MMORoom's lower and higher map limits must be both set"), this._settings.mapLimits.lowerLimit instanceof a.Vec3D && this._settings.mapLimits.higherLimit instanceof a.Vec3D || t3.push("MMORoom's lower and higher map limits must be both instances of Vec3D class")) : t3.push("MMORoom's map limits must be set in an instance of MapLimits class"))), null == this._roomToLeave || this._roomToLeave instanceof u.SFSRoom || t3.push("Room to leave must be an instance of SFSRoom class"), t3.length > 0)
                throw new o.SFSValidationError("CreateRoomRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              if (this._reqObj.putUtfString(t2.KEY_NAME, this._settings.name), this._reqObj.putUtfString(t2.KEY_GROUP_ID, this._settings.groupId), this._reqObj.putUtfString(t2.KEY_PASSWORD, this._settings.password), this._reqObj.putBool(t2.KEY_ISGAME, this._settings.isGame), this._reqObj.putShort(t2.KEY_MAXUSERS, this._settings.maxUsers), this._reqObj.putShort(t2.KEY_MAXSPECTATORS, this._settings.maxSpectators), this._reqObj.putShort(t2.KEY_MAXVARS, this._settings.maxVariables), this._reqObj.putBool(t2.KEY_ALLOW_JOIN_INVITATION_BY_OWNER, this._settings.allowOwnerOnlyInvitation), null != this._settings.variables && this._settings.variables.length > 0) {
                var n2 = new a.SFSArray(), r2 = true, i2 = false, o2 = void 0;
                try {
                  for (var u2, c2 = this._settings.variables[Symbol.iterator](); !(r2 = (u2 = c2.next()).done); r2 = true) {
                    var l2 = u2.value;
                    n2.addSFSArray(l2.toSFSArray());
                  }
                } catch (e4) {
                  i2 = true, o2 = e4;
                } finally {
                  try {
                    !r2 && c2.return && c2.return();
                  } finally {
                    if (i2)
                      throw o2;
                  }
                }
                this._reqObj.putSFSArray(t2.KEY_ROOMVARS, n2);
              }
              if (null != this._settings.permissions) {
                var f = [];
                f.push(this._settings.permissions.allowNameChange), f.push(this._settings.permissions.allowPasswordStateChange), f.push(this._settings.permissions.allowPublicMessages), f.push(this._settings.permissions.allowResizing), this._reqObj.putBoolArray(t2.KEY_PERMISSIONS, f);
              }
              if (null != this._settings.events) {
                var h = [];
                h.push(this._settings.events.allowUserEnter), h.push(this._settings.events.allowUserExit), h.push(this._settings.events.allowUserCountChange), h.push(this._settings.events.allowUserVariablesUpdate), this._reqObj.putBoolArray(t2.KEY_EVENTS, h);
              }
              null != this._settings.extension && (this._reqObj.putUtfString(t2.KEY_EXTID, this._settings.extension.id), this._reqObj.putUtfString(t2.KEY_EXTCLASS, this._settings.extension.className), null != this._settings.extension.propertiesFile && this._settings.extension.propertiesFile.length > 0 && this._reqObj.putUtfString(t2.KEY_EXTPROP, this._settings.extension.propertiesFile)), this._settings instanceof s.MMORoomSettings && (this._settings.defaultAOI.isFloat ? (this._reqObj.putFloatArray(t2.KEY_MMO_DEFAULT_AOI, this._settings.defaultAOI.toArray()), null != this._settings.mapLimits && (this._reqObj.putFloatArray(t2.KEY_MMO_MAP_LOW_LIMIT, this._settings.mapLimits.lowerLimit.toArray()), this._reqObj.putFloatArray(t2.KEY_MMO_MAP_HIGH_LIMIT, this._settings.mapLimits.higherLimit.toArray()))) : (this._reqObj.putIntArray(t2.KEY_MMO_DEFAULT_AOI, this._settings.defaultAOI.toArray()), null != this._settings.mapLimits && (this._reqObj.putIntArray(t2.KEY_MMO_MAP_LOW_LIMIT, this._settings.mapLimits.lowerLimit.toArray()), this._reqObj.putIntArray(t2.KEY_MMO_MAP_HIGH_LIMIT, this._settings.mapLimits.higherLimit.toArray()))), this._reqObj.putShort(t2.KEY_MMO_USER_MAX_LIMBO_SECONDS, this._settings.userMaxLimboSeconds), this._reqObj.putShort(t2.KEY_MMO_PROXIMITY_UPDATE_MILLIS, this._settings.proximityListUpdateMillis), this._reqObj.putBool(t2.KEY_MMO_SEND_ENTRY_POINT, this._settings.sendAOIEntryPoint)), this._reqObj.putBool(t2.KEY_AUTOJOIN, this._autoJoin), null != this._roomToLeave && this._reqObj.putInt(t2.KEY_ROOM_TO_LEAVE, this._roomToLeave.id);
            } }]), t2;
          }();
          t.CreateRoomRequest = l;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.BuddyOnlineState = t.SFSBuddy = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(46);
          var o = function() {
            function e2(t2, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._id = t2, this._name = n2, this._isBlocked = r2, this._isTemp = i2, this._variables = /* @__PURE__ */ new Map(), Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "toString", value: function() {
              return "[Buddy: " + this.name + ", Id: " + this.id + "]";
            } }, { key: "getVariable", value: function(e3) {
              return this._variables.get(e3);
            } }, { key: "containsVariable", value: function(e3) {
              return this._variables.has(e3);
            } }, { key: "getVariables", value: function() {
              return Array.from(this._variables.values());
            } }, { key: "getOfflineVariables", value: function() {
              return this.getVariables().filter(function(e3) {
                return e3.name.charAt(0) === i.SFSBuddyVariable.OFFLINE_PREFIX;
              });
            } }, { key: "getOnlineVariables", value: function() {
              return this.getVariables().filter(function(e3) {
                return e3.name.charAt(0) !== i.SFSBuddyVariable.OFFLINE_PREFIX;
              });
            } }, { key: "_setVariables", value: function(e3) {
              var t2 = true, n2 = false, r2 = void 0;
              try {
                for (var i2, o2 = e3[Symbol.iterator](); !(t2 = (i2 = o2.next()).done); t2 = true) {
                  var s2 = i2.value;
                  this._setVariable(s2);
                }
              } catch (e4) {
                n2 = true, r2 = e4;
              } finally {
                try {
                  !t2 && o2.return && o2.return();
                } finally {
                  if (n2)
                    throw r2;
                }
              }
            } }, { key: "_setVariable", value: function(e3) {
              e3.isNull ? this._variables.delete(e3.name) : this._variables.set(e3.name, e3);
            } }, { key: "_removeVariable", value: function(e3) {
              this._variables.delete(e3);
            } }, { key: "_clearVolatileVariables", value: function() {
              var e3 = true, t2 = false, n2 = void 0;
              try {
                for (var r2, i2 = this.getOnlineVariables()[Symbol.iterator](); !(e3 = (r2 = i2.next()).done); e3 = true) {
                  var o2 = r2.value;
                  this._removeVariable(o2.name);
                }
              } catch (e4) {
                t2 = true, n2 = e4;
              } finally {
                try {
                  !e3 && i2.return && i2.return();
                } finally {
                  if (t2)
                    throw n2;
                }
              }
            } }, { key: "id", get: function() {
              return this._id;
            } }, { key: "name", get: function() {
              return this._name;
            } }, { key: "isBlocked", get: function() {
              return this._isBlocked;
            } }, { key: "isTemp", get: function() {
              return this._isTemp;
            } }, { key: "isOnline", get: function() {
              var e3 = true;
              return this.containsVariable(i.ReservedBuddyVariables.BV_ONLINE) && (e3 = this.getVariable(i.ReservedBuddyVariables.BV_ONLINE).value), e3 && this._id > -1;
            } }, { key: "state", get: function() {
              return this.containsVariable(i.ReservedBuddyVariables.BV_STATE) ? this.getVariable(i.ReservedBuddyVariables.BV_STATE).value : null;
            } }, { key: "nickName", get: function() {
              return this.containsVariable(i.ReservedBuddyVariables.BV_NICKNAME) ? this.getVariable(i.ReservedBuddyVariables.BV_NICKNAME).value : null;
            } }], [{ key: "fromSFSArray", value: function(t2) {
              var n2 = new e2(t2.get(0), t2.get(1), t2.get(2), t2.size() > 3 && t2.get(4)), r2 = t2.get(3);
              if (null != r2)
                for (var o2 = 0; o2 < r2.size(); o2++)
                  n2._setVariable(i.SFSBuddyVariable.fromSFSArray(r2.get(o2)));
              return n2;
            } }]), e2;
          }(), s = Object.freeze({ ONLINE: 0, OFFLINE: 1, LEFT_THE_SERVER: 2 });
          t.SFSBuddy = o, t.BuddyOnlineState = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SFSUserVariable = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(48);
          var o = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var i2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2, r2));
              return i2.isPrivate = false, Object.seal(i2), i2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseVariable), r(t2, [{ key: "toString", value: function() {
              return "[UserVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Private: " + this.isPrivate + "]";
            } }, { key: "toSFSArray", value: function() {
              var e3 = (/* @__PURE__ */ __name(function e4(t3, n2, r2) {
                null === t3 && (t3 = Function.prototype);
                var i2 = Object.getOwnPropertyDescriptor(t3, n2);
                if (void 0 === i2) {
                  var o2 = Object.getPrototypeOf(t3);
                  return null === o2 ? void 0 : e4(o2, n2, r2);
                }
                if ("value" in i2)
                  return i2.value;
                var s = i2.get;
                return void 0 !== s ? s.call(r2) : void 0;
              }, "e"))(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "toSFSArray", this).call(this);
              return e3.addBool(this.isPrivate), e3;
            } }], [{ key: "fromSFSArray", value: function(e3) {
              var n2 = new t2(e3.get(0), e3.get(2), e3.get(1));
              return e3.size() > 3 && (n2.isPrivate = e3.get(3)), n2;
            } }]), t2;
          }();
          t.SFSUserVariable = o;
        }, function(e, t, n) {
          for (var r, i = n(6), o = n(18), s = n(35), a = s("typed_array"), u = s("view"), c = !(!i.ArrayBuffer || !i.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9; )
            (r = i[h[f++]]) ? (o(r.prototype, a, true), o(r.prototype, u, true)) : l = false;
          e.exports = { ABV: c, CONSTR: l, TYPED: a, VIEW: u };
        }, function(e, t, n) {
          "use strict";
          var r = n(6), i = n(0), o = n(15), s = n(41), a = n(29), u = n(62), c = n(42), l = n(4), f = n(3), h = n(64), _ = n(45), y = n(87);
          e.exports = function(e2, t2, n2, p, d, g) {
            var v = r[e2], b = v, m = d ? "set" : "add", S = b && b.prototype, E = {}, R = /* @__PURE__ */ __name(function(e3) {
              var t3 = S[e3];
              o(S, e3, "delete" == e3 ? function(e4) {
                return !(g && !l(e4)) && t3.call(this, 0 === e4 ? 0 : e4);
              } : "has" == e3 ? function(e4) {
                return !(g && !l(e4)) && t3.call(this, 0 === e4 ? 0 : e4);
              } : "get" == e3 ? function(e4) {
                return g && !l(e4) ? void 0 : t3.call(this, 0 === e4 ? 0 : e4);
              } : "add" == e3 ? function(e4) {
                return t3.call(this, 0 === e4 ? 0 : e4), this;
              } : function(e4, n3) {
                return t3.call(this, 0 === e4 ? 0 : e4, n3), this;
              });
            }, "R");
            if ("function" == typeof b && (g || S.forEach && !f(function() {
              new b().entries().next();
            }))) {
              var O = new b(), w = O[m](g ? {} : -0, 1) != O, A = f(function() {
                O.has(1);
              }), I = h(function(e3) {
                new b(e3);
              }), M = !g && f(function() {
                for (var e3 = new b(), t3 = 5; t3--; )
                  e3[m](t3, t3);
                return !e3.has(-0);
              });
              I || ((b = t2(function(t3, n3) {
                c(t3, b, e2);
                var r2 = y(new v(), t3, b);
                return void 0 != n3 && u(n3, d, r2[m], r2), r2;
              })).prototype = S, S.constructor = b), (A || M) && (R("delete"), R("has"), d && R("get")), (M || w) && R(m), g && S.clear && delete S.clear;
            } else
              b = p.getConstructor(t2, e2, d, m), s(b.prototype, n2), a.NEED = true;
            return _(b, e2), E[e2] = b, i(i.G + i.W + i.F * (b != v), E), g || p.setStrong(b, e2, d), b;
          };
        }, function(e, t, n) {
          var r = n(27), i = n(132), o = n(80), s = n(5), a = n(12), u = n(79), c = {}, l = {};
          (t = e.exports = function(e2, t2, n2, f, h) {
            var _, y, p, d, g = h ? function() {
              return e2;
            } : u(e2), v = r(n2, f, t2 ? 2 : 1), b = 0;
            if ("function" != typeof g)
              throw TypeError(e2 + " is not iterable!");
            if (o(g)) {
              for (_ = a(e2.length); _ > b; b++)
                if ((d = t2 ? v(s(y = e2[b])[0], y[1]) : v(e2[b])) === c || d === l)
                  return d;
            } else
              for (p = g.call(e2); !(y = p.next()).done; )
                if ((d = i(p, v, y.value, t2)) === c || d === l)
                  return d;
          }).BREAK = c, t.RETURN = l;
        }, function(e, t, n) {
          "use strict";
          var r = n(18), i = n(15), o = n(3), s = n(28), a = n(7);
          e.exports = function(e2, t2, n2) {
            var u = a(e2), c = n2(s, u, ""[e2]), l = c[0], f = c[1];
            o(function() {
              var t3 = {};
              return t3[u] = function() {
                return 7;
              }, 7 != ""[e2](t3);
            }) && (i(String.prototype, e2, l), r(RegExp.prototype, u, 2 == t2 ? function(e3, t3) {
              return f.call(e3, this, t3);
            } : function(e3) {
              return f.call(e3, this);
            }));
          };
        }, function(e, t, n) {
          var r = n(7)("iterator"), i = false;
          try {
            var o = [7][r]();
            o.return = function() {
              i = true;
            }, Array.from(o, function() {
              throw 2;
            });
          } catch (e2) {
          }
          e.exports = function(e2, t2) {
            if (!t2 && !i)
              return false;
            var n2 = false;
            try {
              var o2 = [7], s = o2[r]();
              s.next = function() {
                return { done: n2 = true };
              }, o2[r] = function() {
                return s;
              }, e2(o2);
            } catch (e3) {
            }
            return n2;
          };
        }, function(e, t, n) {
          var r = n(0), i = n(28), o = n(3), s = n(88), a = "[" + s + "]", u = RegExp("^" + a + a + "*"), c = RegExp(a + a + "*$"), l = /* @__PURE__ */ __name(function(e2, t2, n2) {
            var i2 = {}, a2 = o(function() {
              return !!s[e2]() || "\u200B\x85" != "\u200B\x85"[e2]();
            }), u2 = i2[e2] = a2 ? t2(f) : s[e2];
            n2 && (i2[n2] = u2), r(r.P + r.F * a2, "String", i2);
          }, "l"), f = l.trim = function(e2, t2) {
            return e2 = String(i(e2)), 1 & t2 && (e2 = e2.replace(u, "")), 2 & t2 && (e2 = e2.replace(c, "")), e2;
          };
          e.exports = l;
        }, function(e, t, n) {
          var r = n(25), i = n(7)("toStringTag"), o = "Arguments" == r(function() {
            return arguments;
          }());
          e.exports = function(e2) {
            var t2, n2, s;
            return void 0 === e2 ? "Undefined" : null === e2 ? "Null" : "string" == typeof (n2 = function(e3, t3) {
              try {
                return e3[t3];
              } catch (e4) {
              }
            }(t2 = Object(e2), i)) ? n2 : o ? r(t2) : "Object" == (s = r(t2)) && "function" == typeof t2.callee ? "Arguments" : s;
          };
        }, function(e, t) {
          t.f = {}.propertyIsEnumerable;
        }, function(e, t) {
          t.f = Object.getOwnPropertySymbols;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.InviteUsersRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(47), a = n(58), u = n(8);
          var c = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.InviteUsers));
              return o2._invitedUsers = e3, o2._secondsForAnswer = n2, o2._params = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_USER", get: function() {
              return "u";
            } }, { key: "KEY_USER_ID", get: function() {
              return "ui";
            } }, { key: "KEY_INVITATION_ID", get: function() {
              return "ii";
            } }, { key: "KEY_TIME", get: function() {
              return "t";
            } }, { key: "KEY_PARAMS", get: function() {
              return "p";
            } }, { key: "KEY_INVITEE_ID", get: function() {
              return "ee";
            } }, { key: "KEY_INVITED_USERS", get: function() {
              return "iu";
            } }, { key: "KEY_REPLY_ID", get: function() {
              return "ri";
            } }, { key: "MAX_INVITATIONS_FROM_CLIENT_SIDE", get: function() {
              return 8;
            } }, { key: "MIN_EXPIRY_TIME", get: function() {
              return 5;
            } }, { key: "MAX_EXPIRY_TIME", get: function() {
              return 300;
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var n2 = [];
              if (null == this._invitedUsers ? n2.push("No invited users") : this._invitedUsers instanceof Array ? (this._invitedUsers.length < 1 && n2.push("No invited users"), this._invitedUsers.length > t2.MAX_INVITATIONS_FROM_CLIENT_SIDE && n2.push("Too many invitations; " + t2.MAX_INVITATIONS_FROM_CLIENT_SIDE + " max are allowed from client side"), this._invitedUsers.every(function(e4) {
                return e4 instanceof s.SFSUser || e4 instanceof a.SFSBuddy;
              }) || n2.push("Each invited user must be an instance of SFSUser or SFSBuddy class")) : n2.push("Invited users must be passed in an array"), (this._secondsForAnswer < t2.MIN_EXPIRY_TIME || this._secondsForAnswer > t2.MAX_EXPIRY_TIME) && n2.push("secondsForAnswer value is out of range (min: " + t2.MIN_EXPIRY_TIME + "; max: " + t2.MAX_EXPIRY_TIME + ")"), null == this._params || this._params instanceof u.SFSObject || n2.push("Custom invitation parameters must be set in a SFSObject class instance"), n2.length > 0)
                throw new o.SFSValidationError("InviteUsersRequest Error", n2);
            } }, { key: "execute", value: function(e3) {
              var n2 = [], r2 = true, i2 = false, o2 = void 0;
              try {
                for (var u2, c2 = this._invitedUsers[Symbol.iterator](); !(r2 = (u2 = c2.next()).done); r2 = true) {
                  var l = u2.value;
                  if (l instanceof s.SFSUser || l instanceof a.SFSBuddy) {
                    if (l === e3.mySelf)
                      continue;
                    n2.push(l.id);
                  }
                }
              } catch (e4) {
                i2 = true, o2 = e4;
              } finally {
                try {
                  !r2 && c2.return && c2.return();
                } finally {
                  if (i2)
                    throw o2;
                }
              }
              this._reqObj.putIntArray(t2.KEY_INVITED_USERS, n2), this._reqObj.putShort(t2.KEY_TIME, this._secondsForAnswer), null != this._params && this._reqObj.putSFSObject(t2.KEY_PARAMS, this._params);
            } }]), t2;
          }();
          t.InviteUsersRequest = c;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.AdminMessageRequest = t.ModeratorMessageRequest = t.ObjectMessageRequest = t.PrivateMessageRequest = t.PublicMessageRequest = t.GenericMessageRequest = t.GenericMessageType = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(56), a = n(8), u = n(9), c = n(47);
          function l(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(l, "l");
          function f(e2, t2) {
            if (!e2)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
          }
          __name(f, "f");
          function h(e2, t2) {
            if ("function" != typeof t2 && null !== t2)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
            e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
          }
          __name(h, "h");
          var _ = Object.freeze({ PUBLIC_MSG: 0, PRIVATE_MSG: 1, MODERATOR_MSG: 2, ADMING_MSG: 3, OBJECT_MSG: 4, BUDDY_MSG: 5 }), y = function(e2) {
            function t2() {
              l(this, t2);
              var e3 = f(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.GenericMessage));
              return e3._type = -1, e3._room = null, e3._user = null, e3._message = null, e3._params = null, e3._recipient = null, e3._sendMode = -1, Object.seal(e3), e3;
            }
            __name(t2, "t");
            return h(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM_ID", get: function() {
              return "r";
            } }, { key: "KEY_USER_ID", get: function() {
              return "u";
            } }, { key: "KEY_MESSAGE", get: function() {
              return "m";
            } }, { key: "KEY_MESSAGE_TYPE", get: function() {
              return "t";
            } }, { key: "KEY_RECIPIENT", get: function() {
              return "rc";
            } }, { key: "KEY_RECIPIENT_MODE", get: function() {
              return "rm";
            } }, { key: "KEY_XTRA_PARAMS", get: function() {
              return "p";
            } }, { key: "KEY_SENDER_DATA", get: function() {
              return "sd";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              if (this._type < 0)
                throw new o.SFSValidationError("GenericMessageRequest Error", ["Unsupported message type: " + this._type]);
              var t3 = [];
              switch (this._type) {
                case _.PUBLIC_MSG:
                  this._validatePublicMessage(e3, t3);
                  break;
                case _.PRIVATE_MSG:
                  this._validatePrivateMessage(e3, t3);
                  break;
                case _.OBJECT_MSG:
                  this._validateObjectMessage(e3, t3);
                  break;
                case _.BUDDY_MSG:
                  this._validateBuddyMessage(e3, t3);
                  break;
                default:
                  this._validateSuperUserMessage(e3, t3);
              }
              if (t3.length > 0)
                throw new o.SFSValidationError("GenericMessageRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              switch (this._reqObj.putByte(t2.KEY_MESSAGE_TYPE, this._type), this._type) {
                case _.PUBLIC_MSG:
                  this._executePublicMessage(e3);
                  break;
                case _.PRIVATE_MSG:
                  this._executePrivateMessage(e3);
                  break;
                case _.OBJECT_MSG:
                  this._executeObjectMessage(e3);
                  break;
                case _.BUDDY_MSG:
                  this._executeBuddyMessage(e3);
                  break;
                default:
                  this._executeSuperUserMessage(e3);
              }
            } }, { key: "_validatePublicMessage", value: function(e3, t3) {
              null != this._message && 0 !== this._message.length || t3.push("Public message is empty"), null == this._room && (this._room = e3.lastJoinedRoom), null == this._room ? t3.push("You must be joined in a Room to send a message") : this._room instanceof u.SFSRoom ? e3.getJoinedRooms().indexOf(this._room) < 0 && t3.push("You are not joined in the target Room: " + this._room) : t3.push("Target Room must be an instance of SFSRoom class"), null == this._params || this._params instanceof a.SFSObject || t3.push("Message parameters must be set in a SFSObject class instance");
            } }, { key: "_validatePrivateMessage", value: function(e3, t3) {
              null != this._message && 0 !== this._message.length || t3.push("Private message is empty"), this._recipient < 0 && t3.push("Invalid recipient id: " + this._recipient), null == this._params || this._params instanceof a.SFSObject || t3.push("Message parameters must be set in a SFSObject class instance");
            } }, { key: "_validateObjectMessage", value: function(e3, t3) {
              null == this._params ? t3.push("Object message is null") : this._params instanceof a.SFSObject || t3.push("Message object must be an instance of SFSObject class"), null == this._room && (this._room = e3.lastJoinedRoom), null == this._room ? t3.push("You must be joined in a Room to send a message") : this._room instanceof u.SFSRoom ? e3.getJoinedRooms().indexOf(this._room) < 0 && t3.push("You are not joined in the target Room: " + this._room) : t3.push("Target Room must be an instance of SFSRoom class"), null != this._recipient && (this._recipient instanceof Array ? this._recipient.every(function(e4) {
                return e4 instanceof c.SFSUser;
              }) || t3.push("Each message recipient must be an instance of SFSUser class") : t3.push("Message recipients must be passed in an array"), this._recipient.length > this._room.capacity && t3.push("The number of recipients is bigger than the target Room capacity: " + this._recipient.length));
            } }, { key: "_validateBuddyMessage", value: function(e3, t3) {
              e3.buddyManager.isInited || t3.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), false === e3.buddyManager.myOnlineState && t3.push("Can't send messages while you are offline in the Buddy List system"), null != this._message && 0 !== this._message.length || t3.push("Buddy message is empty"), this._recipient < 0 && t3.push("Recipient is offline or not in your Buddy List"), null == this._params || this._params instanceof a.SFSObject || t3.push("Message parameters must be set in a SFSObject class instance");
            } }, { key: "_validateSuperUserMessage", value: function(e3, t3) {
              switch (null != this._message && 0 !== this._message.length || t3.push("Moderator message is empty"), null == this._params || this._params instanceof a.SFSObject || t3.push("Message parameters must be set in a SFSObject class instance"), this._sendMode) {
                case s.MessageRecipientMode.TO_USER:
                  this._recipient instanceof c.SFSUser || t3.push("Recipient must be an instance of SFSUser class");
                  break;
                case s.MessageRecipientMode.TO_ROOM:
                  this._recipient instanceof u.SFSRoom || t3.push("Recipient must be an instance of SFSRoom class");
                  break;
                case s.MessageRecipientMode.TO_GROUP:
                  "string" != typeof this._recipient && t3.push("Recipient must be a string (the groupId)");
              }
            } }, { key: "_executePublicMessage", value: function(e3) {
              this._reqObj.putInt(t2.KEY_ROOM_ID, this._room.id), this._reqObj.putInt(t2.KEY_USER_ID, e3.mySelf.id), this._reqObj.putUtfString(t2.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t2.KEY_XTRA_PARAMS, this._params);
            } }, { key: "_executePrivateMessage", value: function(e3) {
              this._reqObj.putInt(t2.KEY_RECIPIENT, this._recipient), this._reqObj.putUtfString(t2.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t2.KEY_XTRA_PARAMS, this._params);
            } }, { key: "_executeBuddyMessage", value: function(e3) {
              this._reqObj.putInt(t2.KEY_RECIPIENT, this._recipient), this._reqObj.putUtfString(t2.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t2.KEY_XTRA_PARAMS, this._params);
            } }, { key: "_executeSuperUserMessage", value: function(e3) {
              switch (this._reqObj.putUtfString(t2.KEY_MESSAGE, this._message), null != this._params && this._reqObj.putSFSObject(t2.KEY_XTRA_PARAMS, this._params), this._reqObj.putInt(t2.KEY_RECIPIENT_MODE, this._sendMode), this._sendMode) {
                case s.MessageRecipientMode.TO_USER:
                case s.MessageRecipientMode.TO_ROOM:
                  this._reqObj.putInt(t2.KEY_RECIPIENT, this._recipient.id);
                  break;
                case s.MessageRecipientMode.TO_GROUP:
                  this._reqObj.putUtfString(t2.KEY_RECIPIENT, this._recipient);
              }
            } }, { key: "_executeObjectMessage", value: function(e3) {
              this._reqObj.putInt(t2.KEY_ROOM_ID, this._room.id), this._reqObj.putSFSObject(t2.KEY_XTRA_PARAMS, this._params);
              var n2 = /* @__PURE__ */ new Set();
              if (null != this._recipient) {
                var r2 = true, i2 = false, o2 = void 0;
                try {
                  for (var s2, a2 = this._recipient[Symbol.iterator](); !(r2 = (s2 = a2.next()).done); r2 = true) {
                    var u2 = s2.value;
                    n2.add(u2.id);
                  }
                } catch (e4) {
                  i2 = true, o2 = e4;
                } finally {
                  try {
                    !r2 && a2.return && a2.return();
                  } finally {
                    if (i2)
                      throw o2;
                  }
                }
              }
              n2.size > 0 && this._reqObj.putIntArray(t2.KEY_RECIPIENT, Array.from(n2));
            } }]), t2;
          }(), p = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              l(this, t2);
              var i2 = f(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              return i2._type = _.OBJECT_MSG, i2._params = e3, i2._room = n2, i2._recipient = r2, Object.seal(i2), i2;
            }
            __name(t2, "t");
            return h(t2, y), t2;
          }(), d = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              l(this, t2);
              var i2 = f(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              return i2._type = _.PUBLIC_MSG, i2._message = e3, i2._room = r2, i2._params = n2, Object.seal(i2), i2;
            }
            __name(t2, "t");
            return h(t2, y), t2;
          }(), g = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              l(this, t2);
              var i2 = f(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              return i2._type = _.PRIVATE_MSG, i2._message = e3, i2._recipient = n2, i2._params = r2, Object.seal(i2), i2;
            }
            __name(t2, "t");
            return h(t2, y), t2;
          }(), v = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              l(this, t2);
              var i2 = f(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              if (null == n2)
                throw new o.SFSError("Recipient mode cannot be null");
              if (!(n2 instanceof s.MessageRecipientMode))
                throw new o.SFSError("Recipient mode must be an instance of MessageRecipientMode class");
              return i2._type = _.MODERATOR_MSG, i2._message = e3, i2._params = r2, i2._recipient = n2.target, i2._sendMode = n2.mode, Object.seal(i2), i2;
            }
            __name(t2, "t");
            return h(t2, y), t2;
          }(), b = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              l(this, t2);
              var i2 = f(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              if (null == n2)
                throw new o.SFSError("Recipient mode cannot be null");
              if (!(n2 instanceof s.MessageRecipientMode))
                throw new o.SFSError("Recipient mode must an instance of MessageRecipientMode class");
              return i2._type = _.ADMING_MSG, i2._message = e3, i2._params = r2, i2._recipient = n2.target, i2._sendMode = n2.mode, Object.seal(i2), i2;
            }
            __name(t2, "t");
            return h(t2, y), t2;
          }();
          t.GenericMessageType = _, t.GenericMessageRequest = y, t.PublicMessageRequest = d, t.PrivateMessageRequest = g, t.ObjectMessageRequest = p, t.ModeratorMessageRequest = v, t.AdminMessageRequest = b;
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "MD5", function() {
            return r;
          });
          var r = /* @__PURE__ */ __name(function() {
            this.hexcase = 0, this.b64pad = "";
          }, "r");
          r.prototype = {}, r.prototype.hex_md5 = function(e2) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e2)));
          }, r.prototype.b64_md5 = function(e2) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e2)));
          }, r.prototype.any_md5 = function(e2, t2) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e2)), t2);
          }, r.prototype.hex_hmac_md5 = function(e2, t2) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e2), this.str2rstr_utf8(t2)));
          }, r.prototype.b64_hmac_md5 = function(e2, t2) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e2), this.str2rstr_utf8(t2)));
          }, r.prototype.any_hmac_md5 = function(e2, t2, n2) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e2), this.str2rstr_utf8(t2)), n2);
          }, r.prototype.md5_vm_test = function() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
          }, r.prototype.rstr_md5 = function(e2) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(e2), 8 * e2.length));
          }, r.prototype.rstr_hmac_md5 = function(e2, t2) {
            var n2 = this.rstr2binl(e2);
            n2.length > 16 && (n2 = this.binl_md5(n2, 8 * e2.length));
            for (var r2 = Array(16), i = Array(16), o = 0; o < 16; o++)
              r2[o] = 909522486 ^ n2[o], i[o] = 1549556828 ^ n2[o];
            var s = this.binl_md5(r2.concat(this.rstr2binl(t2)), 512 + 8 * t2.length);
            return this.binl2rstr(this.binl_md5(i.concat(s), 640));
          }, r.prototype.rstr2hex = function(e2) {
            try {
              this.hexcase;
            } catch (e3) {
              this.hexcase = 0;
            }
            for (var t2, n2 = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r2 = "", i = 0; i < e2.length; i++)
              t2 = e2.charCodeAt(i), r2 += n2.charAt(t2 >>> 4 & 15) + n2.charAt(15 & t2);
            return r2;
          }, r.prototype.rstr2b64 = function(e2) {
            try {
              this.b64pad;
            } catch (e3) {
              this.b64pad = "";
            }
            for (var t2 = "", n2 = e2.length, r2 = 0; r2 < n2; r2 += 3)
              for (var i = e2.charCodeAt(r2) << 16 | (r2 + 1 < n2 ? e2.charCodeAt(r2 + 1) << 8 : 0) | (r2 + 2 < n2 ? e2.charCodeAt(r2 + 2) : 0), o = 0; o < 4; o++)
                8 * r2 + 6 * o > 8 * e2.length ? t2 += this.b64pad : t2 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - o) & 63);
            return t2;
          }, r.prototype.rstr2any = function(e2, t2) {
            var n2, r2, i, o, s, a = t2.length, u = Array(Math.ceil(e2.length / 2));
            for (n2 = 0; n2 < u.length; n2++)
              u[n2] = e2.charCodeAt(2 * n2) << 8 | e2.charCodeAt(2 * n2 + 1);
            var c = Math.ceil(8 * e2.length / (Math.log(t2.length) / Math.log(2))), l = Array(c);
            for (r2 = 0; r2 < c; r2++) {
              for (s = Array(), o = 0, n2 = 0; n2 < u.length; n2++)
                o = (o << 16) + u[n2], o -= (i = Math.floor(o / a)) * a, (s.length > 0 || i > 0) && (s[s.length] = i);
              l[r2] = o, u = s;
            }
            var f = "";
            for (n2 = l.length - 1; n2 >= 0; n2--)
              f += t2.charAt(l[n2]);
            return f;
          }, r.prototype.str2rstr_utf8 = function(e2) {
            for (var t2, n2, r2 = "", i = -1; ++i < e2.length; )
              t2 = e2.charCodeAt(i), n2 = i + 1 < e2.length ? e2.charCodeAt(i + 1) : 0, 55296 <= t2 && t2 <= 56319 && 56320 <= n2 && n2 <= 57343 && (t2 = 65536 + ((1023 & t2) << 10) + (1023 & n2), i++), t2 <= 127 ? r2 += String.fromCharCode(t2) : t2 <= 2047 ? r2 += String.fromCharCode(192 | t2 >>> 6 & 31, 128 | 63 & t2) : t2 <= 65535 ? r2 += String.fromCharCode(224 | t2 >>> 12 & 15, 128 | t2 >>> 6 & 63, 128 | 63 & t2) : t2 <= 2097151 && (r2 += String.fromCharCode(240 | t2 >>> 18 & 7, 128 | t2 >>> 12 & 63, 128 | t2 >>> 6 & 63, 128 | 63 & t2));
            return r2;
          }, r.prototype.str2rstr_utf16le = function(e2) {
            for (var t2 = "", n2 = 0; n2 < e2.length; n2++)
              t2 += String.fromCharCode(255 & e2.charCodeAt(n2), e2.charCodeAt(n2) >>> 8 & 255);
            return t2;
          }, r.prototype.str2rstr_utf16be = function(e2) {
            for (var t2 = "", n2 = 0; n2 < e2.length; n2++)
              t2 += String.fromCharCode(e2.charCodeAt(n2) >>> 8 & 255, 255 & e2.charCodeAt(n2));
            return t2;
          }, r.prototype.rstr2binl = function(e2) {
            for (var t2 = Array(e2.length >> 2), n2 = 0; n2 < t2.length; n2++)
              t2[n2] = 0;
            for (n2 = 0; n2 < 8 * e2.length; n2 += 8)
              t2[n2 >> 5] |= (255 & e2.charCodeAt(n2 / 8)) << n2 % 32;
            return t2;
          }, r.prototype.binl2rstr = function(e2) {
            for (var t2 = "", n2 = 0; n2 < 32 * e2.length; n2 += 8)
              t2 += String.fromCharCode(e2[n2 >> 5] >>> n2 % 32 & 255);
            return t2;
          }, r.prototype.binl_md5 = function(e2, t2) {
            e2[t2 >> 5] |= 128 << t2 % 32, e2[14 + (t2 + 64 >>> 9 << 4)] = t2;
            for (var n2 = 1732584193, r2 = -271733879, i = -1732584194, o = 271733878, s = 0; s < e2.length; s += 16) {
              var a = n2, u = r2, c = i, l = o;
              n2 = this.md5_ff(n2, r2, i, o, e2[s + 0], 7, -680876936), o = this.md5_ff(o, n2, r2, i, e2[s + 1], 12, -389564586), i = this.md5_ff(i, o, n2, r2, e2[s + 2], 17, 606105819), r2 = this.md5_ff(r2, i, o, n2, e2[s + 3], 22, -1044525330), n2 = this.md5_ff(n2, r2, i, o, e2[s + 4], 7, -176418897), o = this.md5_ff(o, n2, r2, i, e2[s + 5], 12, 1200080426), i = this.md5_ff(i, o, n2, r2, e2[s + 6], 17, -1473231341), r2 = this.md5_ff(r2, i, o, n2, e2[s + 7], 22, -45705983), n2 = this.md5_ff(n2, r2, i, o, e2[s + 8], 7, 1770035416), o = this.md5_ff(o, n2, r2, i, e2[s + 9], 12, -1958414417), i = this.md5_ff(i, o, n2, r2, e2[s + 10], 17, -42063), r2 = this.md5_ff(r2, i, o, n2, e2[s + 11], 22, -1990404162), n2 = this.md5_ff(n2, r2, i, o, e2[s + 12], 7, 1804603682), o = this.md5_ff(o, n2, r2, i, e2[s + 13], 12, -40341101), i = this.md5_ff(i, o, n2, r2, e2[s + 14], 17, -1502002290), r2 = this.md5_ff(r2, i, o, n2, e2[s + 15], 22, 1236535329), n2 = this.md5_gg(n2, r2, i, o, e2[s + 1], 5, -165796510), o = this.md5_gg(o, n2, r2, i, e2[s + 6], 9, -1069501632), i = this.md5_gg(i, o, n2, r2, e2[s + 11], 14, 643717713), r2 = this.md5_gg(r2, i, o, n2, e2[s + 0], 20, -373897302), n2 = this.md5_gg(n2, r2, i, o, e2[s + 5], 5, -701558691), o = this.md5_gg(o, n2, r2, i, e2[s + 10], 9, 38016083), i = this.md5_gg(i, o, n2, r2, e2[s + 15], 14, -660478335), r2 = this.md5_gg(r2, i, o, n2, e2[s + 4], 20, -405537848), n2 = this.md5_gg(n2, r2, i, o, e2[s + 9], 5, 568446438), o = this.md5_gg(o, n2, r2, i, e2[s + 14], 9, -1019803690), i = this.md5_gg(i, o, n2, r2, e2[s + 3], 14, -187363961), r2 = this.md5_gg(r2, i, o, n2, e2[s + 8], 20, 1163531501), n2 = this.md5_gg(n2, r2, i, o, e2[s + 13], 5, -1444681467), o = this.md5_gg(o, n2, r2, i, e2[s + 2], 9, -51403784), i = this.md5_gg(i, o, n2, r2, e2[s + 7], 14, 1735328473), r2 = this.md5_gg(r2, i, o, n2, e2[s + 12], 20, -1926607734), n2 = this.md5_hh(n2, r2, i, o, e2[s + 5], 4, -378558), o = this.md5_hh(o, n2, r2, i, e2[s + 8], 11, -2022574463), i = this.md5_hh(i, o, n2, r2, e2[s + 11], 16, 1839030562), r2 = this.md5_hh(r2, i, o, n2, e2[s + 14], 23, -35309556), n2 = this.md5_hh(n2, r2, i, o, e2[s + 1], 4, -1530992060), o = this.md5_hh(o, n2, r2, i, e2[s + 4], 11, 1272893353), i = this.md5_hh(i, o, n2, r2, e2[s + 7], 16, -155497632), r2 = this.md5_hh(r2, i, o, n2, e2[s + 10], 23, -1094730640), n2 = this.md5_hh(n2, r2, i, o, e2[s + 13], 4, 681279174), o = this.md5_hh(o, n2, r2, i, e2[s + 0], 11, -358537222), i = this.md5_hh(i, o, n2, r2, e2[s + 3], 16, -722521979), r2 = this.md5_hh(r2, i, o, n2, e2[s + 6], 23, 76029189), n2 = this.md5_hh(n2, r2, i, o, e2[s + 9], 4, -640364487), o = this.md5_hh(o, n2, r2, i, e2[s + 12], 11, -421815835), i = this.md5_hh(i, o, n2, r2, e2[s + 15], 16, 530742520), r2 = this.md5_hh(r2, i, o, n2, e2[s + 2], 23, -995338651), n2 = this.md5_ii(n2, r2, i, o, e2[s + 0], 6, -198630844), o = this.md5_ii(o, n2, r2, i, e2[s + 7], 10, 1126891415), i = this.md5_ii(i, o, n2, r2, e2[s + 14], 15, -1416354905), r2 = this.md5_ii(r2, i, o, n2, e2[s + 5], 21, -57434055), n2 = this.md5_ii(n2, r2, i, o, e2[s + 12], 6, 1700485571), o = this.md5_ii(o, n2, r2, i, e2[s + 3], 10, -1894986606), i = this.md5_ii(i, o, n2, r2, e2[s + 10], 15, -1051523), r2 = this.md5_ii(r2, i, o, n2, e2[s + 1], 21, -2054922799), n2 = this.md5_ii(n2, r2, i, o, e2[s + 8], 6, 1873313359), o = this.md5_ii(o, n2, r2, i, e2[s + 15], 10, -30611744), i = this.md5_ii(i, o, n2, r2, e2[s + 6], 15, -1560198380), r2 = this.md5_ii(r2, i, o, n2, e2[s + 13], 21, 1309151649), n2 = this.md5_ii(n2, r2, i, o, e2[s + 4], 6, -145523070), o = this.md5_ii(o, n2, r2, i, e2[s + 11], 10, -1120210379), i = this.md5_ii(i, o, n2, r2, e2[s + 2], 15, 718787259), r2 = this.md5_ii(r2, i, o, n2, e2[s + 9], 21, -343485551), n2 = this.safe_add(n2, a), r2 = this.safe_add(r2, u), i = this.safe_add(i, c), o = this.safe_add(o, l);
            }
            return Array(n2, r2, i, o);
          }, r.prototype.md5_cmn = function(e2, t2, n2, r2, i, o) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t2, e2), this.safe_add(r2, o)), i), n2);
          }, r.prototype.md5_ff = function(e2, t2, n2, r2, i, o, s) {
            return this.md5_cmn(t2 & n2 | ~t2 & r2, e2, t2, i, o, s);
          }, r.prototype.md5_gg = function(e2, t2, n2, r2, i, o, s) {
            return this.md5_cmn(t2 & r2 | n2 & ~r2, e2, t2, i, o, s);
          }, r.prototype.md5_hh = function(e2, t2, n2, r2, i, o, s) {
            return this.md5_cmn(t2 ^ n2 ^ r2, e2, t2, i, o, s);
          }, r.prototype.md5_ii = function(e2, t2, n2, r2, i, o, s) {
            return this.md5_cmn(n2 ^ (t2 | ~r2), e2, t2, i, o, s);
          }, r.prototype.safe_add = function(e2, t2) {
            var n2 = (65535 & e2) + (65535 & t2);
            return (e2 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
          }, r.prototype.bit_rol = function(e2, t2) {
            return e2 << t2 | e2 >>> 32 - t2;
          };
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }();
          var i = function() {
            function e2(t2, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._id = -1, this._inviter = t2, this._invitee = n2, this._secondsForAnswer = r2, this._params = i2, Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "id", get: function() {
              return this._id;
            } }, { key: "inviter", get: function() {
              return this._inviter;
            } }, { key: "invitee", get: function() {
              return this._invitee;
            } }, { key: "secondsForAnswer", get: function() {
              return this._secondsForAnswer;
            } }, { key: "params", get: function() {
              return this._params;
            } }]), e2;
          }(), o = Object.freeze({ ACCEPT: 0, REFUSE: 1, EXPIRED: 255 });
          t.SFSInvitation = i, t.InvitationReply = o;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.MMOItemVariable = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(48);
          var o = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var i2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3, n2, r2));
              return Object.freeze(i2), i2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseVariable), r(t2, [{ key: "toString", value: function() {
              return "[ItemVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]";
            } }], [{ key: "fromSFSArray", value: function(e3) {
              return new t2(e3.get(0), e3.get(2), e3.get(1));
            } }]), t2;
          }();
          t.MMOItemVariable = o;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }();
          var i = function() {
            function e2() {
              throw function(e3, t2) {
                if (!(e3 instanceof t2))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), "Class SFSErrorCodes cannot be instantiated. Please check the documentation for more details on its usage";
            }
            __name(e2, "e");
            return r(e2, null, [{ key: "setErrorMessage", value: function(e3, t2) {
              this._errorsByCode[e3] = t2;
            } }, { key: "getErrorMessage", value: function(e3, t2) {
              return this.stringFormat(this._errorsByCode[e3], t2);
            } }, { key: "stringFormat", value: function(e3, t2) {
              if (null == e3)
                return "";
              if (null != t2)
                for (var n2 = 0; n2 < t2.length; n2++) {
                  var r2 = "{" + n2 + "}";
                  e3 = e3.replace(r2, t2[n2]);
                }
              return e3;
            } }, { key: "_errorsByCode", get: function() {
              return o;
            } }]), e2;
          }();
          t.SFSErrorCodes = i;
          var o = ["Client API version is obsolete: {0}; required version: {1}", "Requested Zone {0} does not exist", "User name {0} is not recognized", "Wrong password for user {0}", "User {0} is banned", "Zone {0} is full", "User {0} is already logged in Zone {1}", "The server is full", "Zone {0} is currently inactive", "User name {0} contains bad words; filtered: {1}", "Guest users not allowed in Zone {0}", "IP address {0} is banned", "A Room with the same name already exists: {0}", "Requested Group is not available - Room: {0}; Group: {1}", "Bad Room name length -  Min: {0}; max: {1}; passed name length: {2}", "Room name contains bad words: {0}", "Zone is full; can't add Rooms anymore", "You have exceeded the number of Rooms that you can create per session: {0}", "Room creation failed, wrong parameter: {0}", "User {0} already joined in Room", "Room {0} is full", "Wrong password for Room {0}", "Requested Room does not exist", "Room {0} is locked", "Group {0} is already subscribed", "Group {0} does not exist", "Group {0} is not subscribed", "Group {0} does not exist", "{0}", "Room permission error; Room {0} cannot be renamed", "Room permission error; Room {0} cannot change password state", "Room permission error; Room {0} cannot change capacity", "Switch user error; no player slots available in Room {0}", "Switch user error; no spectator slots available in Room {0}", "Switch user error; Room {0} is not a Game Room", "Switch user error; you are not joined in Room {0}", "Buddy Manager initialization error, could not load buddy list: {0}", "Buddy Manager error, your buddy list is full; size is {0}", "Buddy Manager error, was not able to block buddy {0} because offline", "Buddy Manager error, you are attempting to set too many Buddy Variables; limit is {0}", "Game {0} access denied, user does not match access criteria", "QuickJoinGame action failed: no matching Rooms were found", "Your previous invitation reply was invalid or arrived too late"];
        }, function(e, t, n) {
          "use strict";
          var r = n(6), i = n(11), o = n(44), s = n(60), a = n(18), u = n(41), c = n(3), l = n(42), f = n(24), h = n(12), _ = n(121), y = n(32).f, p = n(10).f, d = n(78), g = n(45), v = "prototype", b = "Wrong index!", m = r.ArrayBuffer, S = r.DataView, E = r.Math, R = r.RangeError, O = r.Infinity, w = m, A = E.abs, I = E.pow, M = E.floor, T = E.log, k = E.LN2, P = i ? "_b" : "buffer", F = i ? "_l" : "byteLength", j = i ? "_o" : "byteOffset";
          function U(e2, t2, n2) {
            var r2, i2, o2, s2 = new Array(n2), a2 = 8 * n2 - t2 - 1, u2 = (1 << a2) - 1, c2 = u2 >> 1, l2 = 23 === t2 ? I(2, -24) - I(2, -77) : 0, f2 = 0, h2 = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
            for ((e2 = A(e2)) != e2 || e2 === O ? (i2 = e2 != e2 ? 1 : 0, r2 = u2) : (r2 = M(T(e2) / k), e2 * (o2 = I(2, -r2)) < 1 && (r2--, o2 *= 2), (e2 += r2 + c2 >= 1 ? l2 / o2 : l2 * I(2, 1 - c2)) * o2 >= 2 && (r2++, o2 /= 2), r2 + c2 >= u2 ? (i2 = 0, r2 = u2) : r2 + c2 >= 1 ? (i2 = (e2 * o2 - 1) * I(2, t2), r2 += c2) : (i2 = e2 * I(2, c2 - 1) * I(2, t2), r2 = 0)); t2 >= 8; s2[f2++] = 255 & i2, i2 /= 256, t2 -= 8)
              ;
            for (r2 = r2 << t2 | i2, a2 += t2; a2 > 0; s2[f2++] = 255 & r2, r2 /= 256, a2 -= 8)
              ;
            return s2[--f2] |= 128 * h2, s2;
          }
          __name(U, "U");
          function N(e2, t2, n2) {
            var r2, i2 = 8 * n2 - t2 - 1, o2 = (1 << i2) - 1, s2 = o2 >> 1, a2 = i2 - 7, u2 = n2 - 1, c2 = e2[u2--], l2 = 127 & c2;
            for (c2 >>= 7; a2 > 0; l2 = 256 * l2 + e2[u2], u2--, a2 -= 8)
              ;
            for (r2 = l2 & (1 << -a2) - 1, l2 >>= -a2, a2 += t2; a2 > 0; r2 = 256 * r2 + e2[u2], u2--, a2 -= 8)
              ;
            if (0 === l2)
              l2 = 1 - s2;
            else {
              if (l2 === o2)
                return r2 ? NaN : c2 ? -O : O;
              r2 += I(2, t2), l2 -= s2;
            }
            return (c2 ? -1 : 1) * r2 * I(2, l2 - t2);
          }
          __name(N, "N");
          function B(e2) {
            return e2[3] << 24 | e2[2] << 16 | e2[1] << 8 | e2[0];
          }
          __name(B, "B");
          function L(e2) {
            return [255 & e2];
          }
          __name(L, "L");
          function D(e2) {
            return [255 & e2, e2 >> 8 & 255];
          }
          __name(D, "D");
          function Y(e2) {
            return [255 & e2, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255];
          }
          __name(Y, "Y");
          function C(e2) {
            return U(e2, 52, 8);
          }
          __name(C, "C");
          function x(e2) {
            return U(e2, 23, 4);
          }
          __name(x, "x");
          function q(e2, t2, n2) {
            p(e2[v], t2, { get: function() {
              return this[n2];
            } });
          }
          __name(q, "q");
          function V(e2, t2, n2, r2) {
            var i2 = _(+n2);
            if (i2 + t2 > e2[F])
              throw R(b);
            var o2 = e2[P]._b, s2 = i2 + e2[j], a2 = o2.slice(s2, s2 + t2);
            return r2 ? a2 : a2.reverse();
          }
          __name(V, "V");
          function K(e2, t2, n2, r2, i2, o2) {
            var s2 = _(+n2);
            if (s2 + t2 > e2[F])
              throw R(b);
            for (var a2 = e2[P]._b, u2 = s2 + e2[j], c2 = r2(+i2), l2 = 0; l2 < t2; l2++)
              a2[u2 + l2] = c2[o2 ? l2 : t2 - l2 - 1];
          }
          __name(K, "K");
          if (s.ABV) {
            if (!c(function() {
              m(1);
            }) || !c(function() {
              new m(-1);
            }) || c(function() {
              return new m(), new m(1.5), new m(NaN), "ArrayBuffer" != m.name;
            })) {
              for (var G, z = (m = /* @__PURE__ */ __name(function(e2) {
                return l(this, m), new w(_(e2));
              }, "m"))[v] = w[v], H = y(w), J = 0; H.length > J; )
                (G = H[J++]) in m || a(m, G, w[G]);
              o || (z.constructor = m);
            }
            var W = new S(new m(2)), X = S[v].setInt8;
            W.setInt8(0, 2147483648), W.setInt8(1, 2147483649), !W.getInt8(0) && W.getInt8(1) || u(S[v], { setInt8: function(e2, t2) {
              X.call(this, e2, t2 << 24 >> 24);
            }, setUint8: function(e2, t2) {
              X.call(this, e2, t2 << 24 >> 24);
            } }, true);
          } else
            m = /* @__PURE__ */ __name(function(e2) {
              l(this, m, "ArrayBuffer");
              var t2 = _(e2);
              this._b = d.call(new Array(t2), 0), this[F] = t2;
            }, "m"), S = /* @__PURE__ */ __name(function(e2, t2, n2) {
              l(this, S, "DataView"), l(e2, m, "DataView");
              var r2 = e2[F], i2 = f(t2);
              if (i2 < 0 || i2 > r2)
                throw R("Wrong offset!");
              if (i2 + (n2 = void 0 === n2 ? r2 - i2 : h(n2)) > r2)
                throw R("Wrong length!");
              this[P] = e2, this[j] = i2, this[F] = n2;
            }, "S"), i && (q(m, "byteLength", "_l"), q(S, "buffer", "_b"), q(S, "byteLength", "_l"), q(S, "byteOffset", "_o")), u(S[v], { getInt8: function(e2) {
              return V(this, 1, e2)[0] << 24 >> 24;
            }, getUint8: function(e2) {
              return V(this, 1, e2)[0];
            }, getInt16: function(e2) {
              var t2 = V(this, 2, e2, arguments[1]);
              return (t2[1] << 8 | t2[0]) << 16 >> 16;
            }, getUint16: function(e2) {
              var t2 = V(this, 2, e2, arguments[1]);
              return t2[1] << 8 | t2[0];
            }, getInt32: function(e2) {
              return B(V(this, 4, e2, arguments[1]));
            }, getUint32: function(e2) {
              return B(V(this, 4, e2, arguments[1])) >>> 0;
            }, getFloat32: function(e2) {
              return N(V(this, 4, e2, arguments[1]), 23, 4);
            }, getFloat64: function(e2) {
              return N(V(this, 8, e2, arguments[1]), 52, 8);
            }, setInt8: function(e2, t2) {
              K(this, 1, e2, L, t2);
            }, setUint8: function(e2, t2) {
              K(this, 1, e2, L, t2);
            }, setInt16: function(e2, t2) {
              K(this, 2, e2, D, t2, arguments[2]);
            }, setUint16: function(e2, t2) {
              K(this, 2, e2, D, t2, arguments[2]);
            }, setInt32: function(e2, t2) {
              K(this, 4, e2, Y, t2, arguments[2]);
            }, setUint32: function(e2, t2) {
              K(this, 4, e2, Y, t2, arguments[2]);
            }, setFloat32: function(e2, t2) {
              K(this, 4, e2, x, t2, arguments[2]);
            }, setFloat64: function(e2, t2) {
              K(this, 8, e2, C, t2, arguments[2]);
            } });
          g(m, "ArrayBuffer"), g(S, "DataView"), a(S[v], s.VIEW, true), t.ArrayBuffer = m, t.DataView = S;
        }, function(e, t, n) {
          var r = n(5), i = n(26), o = n(7)("species");
          e.exports = function(e2, t2) {
            var n2, s = r(e2).constructor;
            return void 0 === s || void 0 == (n2 = r(s)[o]) ? t2 : i(n2);
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(5);
          e.exports = function() {
            var e2 = r(this), t2 = "";
            return e2.global && (t2 += "g"), e2.ignoreCase && (t2 += "i"), e2.multiline && (t2 += "m"), e2.unicode && (t2 += "u"), e2.sticky && (t2 += "y"), t2;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(14), i = n(34), o = n(12);
          e.exports = function(e2) {
            for (var t2 = r(this), n2 = o(t2.length), s = arguments.length, a = i(s > 1 ? arguments[1] : void 0, n2), u = s > 2 ? arguments[2] : void 0, c = void 0 === u ? n2 : i(u, n2); c > a; )
              t2[a++] = e2;
            return t2;
          };
        }, function(e, t, n) {
          var r = n(66), i = n(7)("iterator"), o = n(53);
          e.exports = n(37).getIteratorMethod = function(e2) {
            if (void 0 != e2)
              return e2[i] || e2["@@iterator"] || o[r(e2)];
          };
        }, function(e, t, n) {
          var r = n(53), i = n(7)("iterator"), o = Array.prototype;
          e.exports = function(e2) {
            return void 0 !== e2 && (r.Array === e2 || o[i] === e2);
          };
        }, function(e, t, n) {
          var r = n(7)("match");
          e.exports = function(e2) {
            var t2 = /./;
            try {
              "/./"[e2](t2);
            } catch (n2) {
              try {
                return t2[r] = false, !"/./"[e2](t2);
              } catch (e3) {
              }
            }
            return true;
          };
        }, function(e, t, n) {
          var r = n(4), i = n(25), o = n(7)("match");
          e.exports = function(e2) {
            var t2;
            return r(e2) && (void 0 !== (t2 = e2[o]) ? !!t2 : "RegExp" == i(e2));
          };
        }, function(e, t, n) {
          var r = n(82), i = n(28);
          e.exports = function(e2, t2, n2) {
            if (r(t2))
              throw TypeError("String#" + n2 + " doesn't accept regex!");
            return String(i(e2));
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(44), i = n(0), o = n(15), s = n(18), a = n(53), u = n(133), c = n(45), l = n(31), f = n(7)("iterator"), h = !([].keys && "next" in [].keys()), _ = /* @__PURE__ */ __name(function() {
            return this;
          }, "_");
          e.exports = function(e2, t2, n2, y, p, d, g) {
            u(n2, t2, y);
            var v, b, m, S = /* @__PURE__ */ __name(function(e3) {
              if (!h && e3 in w)
                return w[e3];
              switch (e3) {
                case "keys":
                case "values":
                  return function() {
                    return new n2(this, e3);
                  };
              }
              return function() {
                return new n2(this, e3);
              };
            }, "S"), E = t2 + " Iterator", R = "values" == p, O = false, w = e2.prototype, A = w[f] || w["@@iterator"] || p && w[p], I = A || S(p), M = p ? R ? S("entries") : I : void 0, T = "Array" == t2 && w.entries || A;
            if (T && (m = l(T.call(new e2()))) !== Object.prototype && m.next && (c(m, E, true), r || "function" == typeof m[f] || s(m, f, _)), R && A && "values" !== A.name && (O = true, I = /* @__PURE__ */ __name(function() {
              return A.call(this);
            }, "I")), r && !g || !h && !O && w[f] || s(w, f, I), a[t2] = I, a[E] = _, p)
              if (v = { values: R ? I : S("values"), keys: d ? I : S("keys"), entries: M }, g)
                for (b in v)
                  b in w || o(w, b, v[b]);
              else
                i(i.P + i.F * (h || O), t2, v);
            return v;
          };
        }, function(e, t) {
          var n = Math.expm1;
          e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(e2) {
            return 0 == (e2 = +e2) ? e2 : e2 > -1e-6 && e2 < 1e-6 ? e2 + e2 * e2 / 2 : Math.exp(e2) - 1;
          } : n;
        }, function(e, t) {
          e.exports = Math.sign || function(e2) {
            return 0 == (e2 = +e2) || e2 != e2 ? e2 : e2 < 0 ? -1 : 1;
          };
        }, function(e, t, n) {
          var r = n(4), i = n(89).set;
          e.exports = function(e2, t2, n2) {
            var o, s = t2.constructor;
            return s !== n2 && "function" == typeof s && (o = s.prototype) !== n2.prototype && r(o) && i && i(e2, o), e2;
          };
        }, function(e, t) {
          e.exports = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        }, function(e, t, n) {
          var r = n(4), i = n(5), o = /* @__PURE__ */ __name(function(e2, t2) {
            if (i(e2), !r(t2) && null !== t2)
              throw TypeError(t2 + ": can't set as prototype!");
          }, "o");
          e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e2, t2, r2) {
            try {
              (r2 = n(27)(Function.call, n(23).f(Object.prototype, "__proto__").set, 2))(e2, []), t2 = !(e2 instanceof Array);
            } catch (e3) {
              t2 = true;
            }
            return function(e3, n2) {
              return o(e3, n2), t2 ? e3.__proto__ = n2 : r2(e3, n2), e3;
            };
          }({}, false) : void 0), check: o };
        }, function(e, t, n) {
          var r = n(6).document;
          e.exports = r && r.documentElement;
        }, function(e, t, n) {
          var r = n(25);
          e.exports = Array.isArray || function(e2) {
            return "Array" == r(e2);
          };
        }, function(e, t) {
          e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, function(e, t, n) {
          var r = n(95)("keys"), i = n(35);
          e.exports = function(e2) {
            return r[e2] || (r[e2] = i(e2));
          };
        }, function(e, t, n) {
          var r = n(21), i = n(12), o = n(34);
          e.exports = function(e2) {
            return function(t2, n2, s) {
              var a, u = r(t2), c = i(u.length), l = o(s, c);
              if (e2 && n2 != n2) {
                for (; c > l; )
                  if ((a = u[l++]) != a)
                    return true;
              } else
                for (; c > l; l++)
                  if ((e2 || l in u) && u[l] === n2)
                    return e2 || l || 0;
              return !e2 && -1;
            };
          };
        }, function(e, t, n) {
          var r = n(6), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
          e.exports = function(e2) {
            return i[e2] || (i[e2] = {});
          };
        }, function(e, t, n) {
          var r = n(4), i = n(6).document, o = r(i) && r(i.createElement);
          e.exports = function(e2) {
            return o ? i.createElement(e2) : {};
          };
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.ExtensionRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(8), a = n(9);
          var u = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.CallExtension));
              return o2._targetController = 1, o2._extCmd = e3, o2._params = n2, o2._room = r2, null == o2._params && (o2._params = new s.SFSObject()), Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_CMD", get: function() {
              return "c";
            } }, { key: "KEY_PARAMS", get: function() {
              return "p";
            } }, { key: "KEY_ROOM", get: function() {
              return "r";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null != this._extCmd && 0 !== this._extCmd.length || t3.push("Missing extension command"), null == this._params || this._params instanceof s.SFSObject || t3.push("Custom parameters must be set in a SFSObject class instance"), null == this._room || this._room instanceof a.SFSRoom || t3.push("Room must be an instance of SFSRoom class"), t3.length > 0)
                throw new o.SFSValidationError("ExtensionRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putUtfString(t2.KEY_CMD, this._extCmd), this._reqObj.putInt(t2.KEY_ROOM, null == this._room ? -1 : this._room.id), this._reqObj.putSFSObject(t2.KEY_PARAMS, this._params);
            } }]), t2;
          }();
          t.ExtensionRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SetBuddyVariablesRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(8), a = n(46);
          var u = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.SetBuddyVariables));
              return n2._buddyVariables = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_BUDDY_NAME", get: function() {
              return "bn";
            } }, { key: "KEY_BUDDY_VARS", get: function() {
              return "bv";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.buddyManager.isInited || t3.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), false === e3.buddyManager.getMyOnlineState() && t3.push("Can't set Buddy Variables while you are offline in the Buddy List system"), null == this._buddyVariables ? t3.push("No Buddy Variables specified") : this._buddyVariables instanceof Array ? 0 === this._buddyVariables.length ? t3.push("No Buddy Variables specified") : this._buddyVariables.every(function(e4) {
                return e4 instanceof a.SFSBuddyVariable;
              }) || t3.push("Buddy Variables must be passed as instances of SFSBuddyVariable class") : t3.push("Buddy Variables must be passed in an array"), t3.length > 0)
                throw new o.SFSValidationError("SetBuddyVariablesRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              var n2 = new s.SFSArray(), r2 = true, i2 = false, o2 = void 0;
              try {
                for (var a2, u2 = this._buddyVariables[Symbol.iterator](); !(r2 = (a2 = u2.next()).done); r2 = true) {
                  var c = a2.value;
                  n2.addSFSArray(c.toSFSArray());
                }
              } catch (e4) {
                i2 = true, o2 = e4;
              } finally {
                try {
                  !r2 && u2.return && u2.return();
                } finally {
                  if (i2)
                    throw o2;
                }
              }
              this._reqObj.putSFSArray(t2.KEY_BUDDY_VARS, n2);
            } }]), t2;
          }();
          t.SetBuddyVariablesRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.GoOnlineRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.GoOnline));
              return n2._online = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ONLINE", get: function() {
              return "o";
            } }, { key: "KEY_BUDDY_NAME", get: function() {
              return "bn";
            } }, { key: "KEY_BUDDY_ID", get: function() {
              return "bi";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.buddyManager.isInited || t3.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), t3.length > 0)
                throw new o.SFSValidationError("GoOnlineRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              e3.buddyManager._setMyOnlineState(this._online), this._reqObj.putBool(t2.KEY_ONLINE, this._online);
            } }]), t2;
          }();
          t.GoOnlineRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.BlockBuddyRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3, n2) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var r2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.BlockBuddy));
              return r2._name = e3, r2._blocked = n2, Object.seal(r2), r2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_BUDDY_NAME", get: function() {
              return "bn";
            } }, { key: "KEY_BUDDY_BLOCK_STATE", get: function() {
              return "bs";
            } }, { key: "KEY_BUDDY", get: function() {
              return "bd";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.buddyManager.isInited || t3.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), false === e3.buddyManager.getMyOnlineState() && t3.push("Can't block a buddy while you are offline in the Buddy List system"), null == this._name || this._name.length < 1)
                t3.push("Invalid buddy name (null or empty string)");
              else {
                var n2 = e3.buddyManager.getBuddyByName(this._name);
                null == n2 ? t3.push("Can't block buddy '" + this._name + "' because it isn't in your list") : n2.isBlocked == this._blocked && t3.push("Block flag is already in the requested '" + this._blocked + "' state for buddy '" + this._name + "'");
              }
              if (t3.length > 0)
                throw new o.SFSValidationError("BlockBuddyRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putUtfString(t2.KEY_BUDDY_NAME, this._name), this._reqObj.putBool(t2.KEY_BUDDY_BLOCK_STATE, this._blocked);
            } }]), t2;
          }();
          t.BlockBuddyRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.RemoveBuddyRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.RemoveBuddy));
              return n2._name = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_BUDDY_NAME", get: function() {
              return "bn";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.buddyManager.isInited || t3.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), false === e3.buddyManager.getMyOnlineState() && t3.push("Can't remove a buddy while you are offline in the Buddy List system"), null == this._name || this._name.length < 1 ? t3.push("Invalid buddy name (null or empty string)") : e3.buddyManager.containsBuddy(this._name) || t3.push("Can't remove buddy '" + this._name + "' because it isn't in your list"), t3.length > 0)
                throw new o.SFSValidationError("RemoveBuddyRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putUtfString(t2.KEY_BUDDY_NAME, this._name);
            } }]), t2;
          }();
          t.RemoveBuddyRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.AddBuddyRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.AddBuddy));
              return n2._name = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_BUDDY_NAME", get: function() {
              return "bn";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              e3.buddyManager.isInited || t3.push("Buddy List not yet initialized; please send an InitBuddyRequest first"), (null == this._name || this._name.length < 1) && t3.push("Invalid buddy name (null or empty string)"), false === e3.buddyManager.getMyOnlineState() && t3.push("Can't add a buddy while you are offline in the Buddy List system");
              var n2 = e3.buddyManager.getBuddyByName(this._name);
              if (null == n2 || n2.isTemp || t3.push("Can't add buddy '" + this._name + "' because it is already in your list"), t3.length > 0)
                throw new o.SFSValidationError("AddBuddyRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putUtfString(t2.KEY_BUDDY_NAME, this._name);
            } }]), t2;
          }();
          t.AddBuddyRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.InitBuddyListRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2() {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var e3 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.InitBuddyList));
              return Object.seal(e3), e3;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_BLIST", get: function() {
              return "bl";
            } }, { key: "KEY_BUDDY_STATES", get: function() {
              return "bs";
            } }, { key: "KEY_MY_VARS", get: function() {
              return "mv";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.buddyManager.isInited && t3.push("Buddy List is already initialized"), t3.length > 0)
                throw new o.SFSValidationError("InitBuddyListRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
            } }]), t2;
          }();
          t.InitBuddyListRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SetUserPositionRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(8), a = n(9);
          var u = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var r2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.SetUserPosition));
              return r2._pos = e3, r2._room = n2, Object.seal(r2), r2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_VEC3D", get: function() {
              return "v";
            } }, { key: "KEY_PLUS_USER_LIST", get: function() {
              return "p";
            } }, { key: "KEY_MINUS_USER_LIST", get: function() {
              return "m";
            } }, { key: "KEY_PLUS_ITEM_LIST", get: function() {
              return "q";
            } }, { key: "KEY_MINUS_ITEM_LIST", get: function() {
              return "n";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null != this._pos && this._pos instanceof s.Vec3D || t3.push("Position must be an instance of Vec3D class"), null == this._room && (this._room = e3.lastJoinedRoom), null == this._room && t3.push("You are not joined in any room"), this._room instanceof a.MMORoom || t3.push("Target room must be an instance of MMORoom class"), t3.length > 0)
                throw new o.SFSValidationError("SetUserPosition Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_ROOM, this._room.id), this._pos.isFloat ? this._reqObj.putFloatArray(t2.KEY_VEC3D, this._pos.toArray()) : this._reqObj.putIntArray(t2.KEY_VEC3D, this._pos.toArray());
            } }]), t2;
          }();
          t.SetUserPositionRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.FindUsersRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9), a = n(38);
          var u = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.FindUsers));
              return o2._matchExpr = e3, o2._target = n2, o2._limit = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_EXPRESSION", get: function() {
              return "e";
            } }, { key: "KEY_GROUP", get: function() {
              return "g";
            } }, { key: "KEY_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_LIMIT", get: function() {
              return "l";
            } }, { key: "KEY_FILTERED_USERS", get: function() {
              return "fu";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null == this._matchExpr && t3.push("Missing match expression"), null == this._matchExpr || this._matchExpr instanceof a.MatchExpression || t3.push("Match expression must be passed as an instance of MatchExpression class"), t3.length > 0)
                throw new o.SFSValidationError("FindUsersRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putSFSArray(t2.KEY_EXPRESSION, this._matchExpr.toSFSArray()), null != this._target && (this._target instanceof s.SFSRoom ? this._reqObj.putInt(t2.KEY_ROOM, this._target.id) : "string" == typeof this._target ? this._reqObj.putUtfString(t2.KEY_GROUP, this._target) : this._logger.warn("Unsupported target type for FindUsersRequest: " + this._target)), this._limit > 0 && this._reqObj.putShort(t2.KEY_LIMIT, this._limit);
            } }]), t2;
          }();
          t.FindUsersRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.FindRoomsRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(38);
          var a = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.FindRooms));
              return o2._matchExpr = e3, o2._groupId = n2, o2._limit = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_EXPRESSION", get: function() {
              return "e";
            } }, { key: "KEY_GROUP", get: function() {
              return "g";
            } }, { key: "KEY_LIMIT", get: function() {
              return "l";
            } }, { key: "KEY_FILTERED_ROOMS", get: function() {
              return "fr";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null == this._matchExpr && t3.push("Missing match expression"), null == this._matchExpr || this._matchExpr instanceof s.MatchExpression || t3.push("Match expression must be passed as an instance of MatchExpression class"), t3.length > 0)
                throw new o.SFSValidationError("FindRoomsRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putSFSArray(t2.KEY_EXPRESSION, this._matchExpr.toSFSArray()), null != this._groupId && this._reqObj.putUtfString(t2.KEY_GROUP, this._groupId), this._limit > 0 && this._reqObj.putShort(t2.KEY_LIMIT, this._limit);
            } }]), t2;
          }();
          t.FindRoomsRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.PlayerToSpectatorRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9);
          var a = function(e2) {
            function t2() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.PlayerToSpectator));
              return n2._room = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM_ID", get: function() {
              return "r";
            } }, { key: "KEY_USER_ID", get: function() {
              return "u";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.getJoinedRooms().length < 1 && t3.push("You are not joined in any Room"), null == this._room || this._room instanceof s.SFSRoom || t3.push("Target Room must be an instance of SFSRoom class"), t3.length > 0)
                throw new o.SFSValidationError("PlayerToSpectatorRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              null == this._room && (this._room = e3.lastJoinedRoom), this._reqObj.putInt(t2.KEY_ROOM_ID, this._room.id);
            } }]), t2;
          }();
          t.PlayerToSpectatorRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SpectatorToPlayerRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9);
          var a = function(e2) {
            function t2() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.SpectatorToPlayer));
              return n2._room = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM_ID", get: function() {
              return "r";
            } }, { key: "KEY_USER_ID", get: function() {
              return "u";
            } }, { key: "KEY_PLAYER_ID", get: function() {
              return "p";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.getJoinedRooms().length < 1 && t3.push("You are not joined in any Room"), null == this._room || this._room instanceof s.SFSRoom || t3.push("Target Room must be an instance of SFSRoom class"), t3.length > 0)
                throw new o.SFSValidationError("SpectatorToPlayerRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              null == this._room && (this._room = e3.lastJoinedRoom), this._reqObj.putInt(t2.KEY_ROOM_ID, this._room.id);
            } }]), t2;
          }();
          t.SpectatorToPlayerRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.UnsubscribeRoomGroupRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.UnsubscribeRoomGroup));
              return n2._groupId = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_GROUP_ID", get: function() {
              return "g";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null != this._groupId && 0 !== this._groupId.length || t3.push("Invalid group id passed; must be a string with at least one character"), t3.length > 0)
                throw new o.SFSValidationError("UnsubscribeGroupRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putUtfString(t2.KEY_GROUP_ID, this._groupId);
            } }]), t2;
          }();
          t.UnsubscribeRoomGroupRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SubscribeRoomGroupRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.SubscribeRoomGroup));
              return n2._groupId = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_GROUP_ID", get: function() {
              return "g";
            } }, { key: "KEY_ROOM_LIST", get: function() {
              return "rl";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null != this._groupId && 0 !== this._groupId.length || t3.push("Invalid group id passed; must be a string with at least one character"), t3.length > 0)
                throw new o.SFSValidationError("SubscribeGroupRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putUtfString(t2.KEY_GROUP_ID, this._groupId);
            } }]), t2;
          }();
          t.SubscribeRoomGroupRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SetUserVariablesRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(8), a = n(59);
          var u = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.SetUserVariables));
              return n2._userVariables = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_USER", get: function() {
              return "u";
            } }, { key: "KEY_VAR_LIST", get: function() {
              return "vl";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null == this._userVariables ? t3.push("No User Variables specified") : this._userVariables instanceof Array ? 0 === this._userVariables.length ? t3.push("No User Variables specified") : this._userVariables.every(function(e4) {
                return e4 instanceof a.SFSUserVariable;
              }) || t3.push("User Variables must be passed as instances of SFSUserVariable class") : t3.push("User Variables must be passed in an array"), t3.length > 0)
                throw new o.SFSValidationError("SetUserVariablesRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              var n2 = new s.SFSArray(), r2 = true, i2 = false, o2 = void 0;
              try {
                for (var a2, u2 = this._userVariables[Symbol.iterator](); !(r2 = (a2 = u2.next()).done); r2 = true) {
                  var c = a2.value;
                  n2.addSFSArray(c.toSFSArray());
                }
              } catch (e4) {
                i2 = true, o2 = e4;
              } finally {
                try {
                  !r2 && u2.return && u2.return();
                } finally {
                  if (i2)
                    throw o2;
                }
              }
              this._reqObj.putSFSArray(t2.KEY_VAR_LIST, n2);
            } }]), t2;
          }();
          t.SetUserVariablesRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SetRoomVariablesRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(8), a = n(9), u = n(49);
          var c = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var r2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.SetRoomVariables));
              return r2._roomVariables = e3, r2._room = n2, Object.seal(r2), r2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_VAR_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_VAR_LIST", get: function() {
              return "vl";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null == this._room && (this._room = e3.lastJoinedRoom), null == this._room ? t3.push("A Room was not specified and you don't seem joined in any other Room") : this._room instanceof a.SFSRoom || t3.push("Target Room must be an instance of SFSRoom class"), null == this._roomVariables ? t3.push("No Room Variables specified") : this._roomVariables instanceof Array ? 0 === this._roomVariables.length ? t3.push("No Room Variables specified") : this._roomVariables.every(function(e4) {
                return e4 instanceof u.SFSRoomVariable;
              }) || t3.push("Room Variables must be passed as instances of SFSRoomVariable class") : t3.push("Room Variables must be passed in an array"), t3.length > 0)
                throw new o.SFSValidationError("SetRoomVariablesRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              var n2 = new s.SFSArray(), r2 = true, i2 = false, o2 = void 0;
              try {
                for (var a2, u2 = this._roomVariables[Symbol.iterator](); !(r2 = (a2 = u2.next()).done); r2 = true) {
                  var c2 = a2.value;
                  n2.addSFSArray(c2.toSFSArray());
                }
              } catch (e4) {
                i2 = true, o2 = e4;
              } finally {
                try {
                  !r2 && u2.return && u2.return();
                } finally {
                  if (i2)
                    throw o2;
                }
              }
              this._reqObj.putSFSArray(t2.KEY_VAR_LIST, n2), this._reqObj.putInt(t2.KEY_VAR_ROOM, this._room.id);
            } }]), t2;
          }();
          t.SetRoomVariablesRequest = c;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.ChangeRoomCapacityRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9);
          var a = function(e2) {
            function t2(e3, n2, r2) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.ChangeRoomCapacity));
              return o2._room = e3, o2._newMaxUsers = n2, o2._newMaxSpect = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_USER_SIZE", get: function() {
              return "u";
            } }, { key: "KEY_SPEC_SIZE", get: function() {
              return "s";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (this._room instanceof s.SFSRoom || t3.push("Room must be an instance of SFSRoom class"), t3.length > 0)
                throw new o.SFSValidationError("ChangeRoomCapacityRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_ROOM, this._room.id), this._reqObj.putInt(t2.KEY_USER_SIZE, this._newMaxUsers), this._reqObj.putInt(t2.KEY_SPEC_SIZE, this._newMaxSpect);
            } }]), t2;
          }();
          t.ChangeRoomCapacityRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.ChangeRoomPasswordStateRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9);
          var a = function(e2) {
            function t2(e3, n2) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var r2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.ChangeRoomPassword));
              return r2._room = e3, r2._newPass = n2, Object.seal(r2), r2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_PASS", get: function() {
              return "p";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (this._room instanceof s.SFSRoom || t3.push("Room must be an instance of SFSRoom class"), null == this._newPass && t3.push("New room password must be a non-null string (empty string to remove the password)"), t3.length > 0)
                throw new o.SFSValidationError("ChangeRoomPasswordStateRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_ROOM, this._room.id), this._reqObj.putUtfString(t2.KEY_PASS, this._newPass);
            } }]), t2;
          }();
          t.ChangeRoomPasswordStateRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.ChangeRoomNameRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9);
          var a = function(e2) {
            function t2(e3, n2) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var r2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.ChangeRoomName));
              return r2._room = e3, r2._newName = n2, Object.seal(r2), r2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_NAME", get: function() {
              return "n";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (this._room instanceof s.SFSRoom || t3.push("Room must be an instance of SFSRoom class"), null != this._newName && 0 !== this._newName.length || t3.push("New room name must be a non-null and non-empty string"), t3.length > 0)
                throw new o.SFSValidationError("ChangeRoomNameRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_ROOM, this._room.id), this._reqObj.putUtfString(t2.KEY_NAME, this._newName);
            } }]), t2;
          }();
          t.ChangeRoomNameRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.JoinRoomRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9);
          var a = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.JoinRoom));
              return "string" == typeof e3 ? a2._rName = e3 : "number" == typeof e3 ? a2._rId = e3 : e3 instanceof s.SFSRoom && (a2._rId = e3.id, a2._rName = e3.name), a2._password = n2, a2._roomIdToLeave = r2, a2._asSpectator = o2, Object.seal(a2), a2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM", get: function() {
              return "r";
            } }, { key: "KEY_USER_LIST", get: function() {
              return "ul";
            } }, { key: "KEY_ROOM_NAME", get: function() {
              return "n";
            } }, { key: "KEY_ROOM_ID", get: function() {
              return "i";
            } }, { key: "KEY_PASS", get: function() {
              return "p";
            } }, { key: "KEY_ROOM_TO_LEAVE", get: function() {
              return "rl";
            } }, { key: "KEY_AS_SPECTATOR", get: function() {
              return "sp";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              if (null == this._rId && null == this._rName)
                throw new o.SFSValidationError("JoinRoomRequest Error", ["Missing Room id or name, please provide one of the two or an existing SFSRoom object"]);
            } }, { key: "execute", value: function(e3) {
              e3._isJoining = true, this._rId >= 0 ? this._reqObj.putInt(t2.KEY_ROOM_ID, this._rId) : null != this._rName && this._reqObj.putUtfString(t2.KEY_ROOM_NAME, this._rName), null != this._password && this._reqObj.putUtfString(t2.KEY_PASS, this._password), null != this._roomIdToLeave && this._reqObj.putInt(t2.KEY_ROOM_TO_LEAVE, this._roomIdToLeave), this._asSpectator && this._reqObj.putBool(t2.KEY_AS_SPECTATOR, this._asSpectator);
            } }]), t2;
          }();
          t.JoinRoomRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.LogoutRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2() {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var e3 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.Logout));
              return Object.seal(e3), e3;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ZONE_NAME", get: function() {
              return "zn";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              if (null == e3.mySelf)
                throw new o.SFSValidationError("LogoutRequest error", ["You are not logged in"]);
            } }, { key: "execute", value: function(e3) {
            } }]), t2;
          }();
          t.LogoutRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.LoginRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(71), o = n(2), s = n(1), a = n(8);
          var u = function(e2) {
            function t2() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var s2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, o.Requests.Login));
              return s2._userName = e3, s2._password = n2, s2._params = r2, s2._zoneName = i2, Object.seal(s2), s2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, o.BaseRequest), r(t2, null, [{ key: "KEY_ZONE_NAME", get: function() {
              return "zn";
            } }, { key: "KEY_USER_NAME", get: function() {
              return "un";
            } }, { key: "KEY_PASSWORD", get: function() {
              return "pw";
            } }, { key: "KEY_PARAMS", get: function() {
              return "p";
            } }, { key: "KEY_PRIVILEGE_ID", get: function() {
              return "pi";
            } }, { key: "KEY_ID", get: function() {
              return "id";
            } }, { key: "KEY_ROOMLIST", get: function() {
              return "rl";
            } }, { key: "KEY_RECONNECTION_SECONDS", get: function() {
              return "rs";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              if (null != e3.mySelf)
                throw new s.SFSValidationError("LoginRequest error", ["You are already logged in; logout before attempting a new login"]);
              var t3 = [], n2 = null != e3.config && null != e3.config.zone ? e3.config.zone : null;
              if (null != this._zoneName && (n2 = this._zoneName), null == n2 || 0 === n2.length ? t3.push("Missing Zone name") : this._zoneName = n2, null == this._params || this._params instanceof a.SFSObject || t3.push("Custom parameters must be passed in a SFSObject"), t3.length > 0)
                throw new s.SFSValidationError("LoginRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              null == this._userName && (this._userName = ""), null == this._password && (this._password = ""), this._reqObj.putUtfString(t2.KEY_ZONE_NAME, this._zoneName), this._reqObj.putUtfString(t2.KEY_USER_NAME, this._userName), this._reqObj.putUtfString(t2.KEY_PASSWORD, this._password.length > 0 ? new i.MD5().hex_md5(e3.sessionToken + this._password) : ""), null != this._params && this._reqObj.putSFSObject(t2.KEY_PARAMS, this._params);
            } }]), t2;
          }();
          t.LoginRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }();
          function i(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(i, "i");
          var o = function() {
            function e2(t2) {
              i(this, e2), this._sfs = t2, this._usersById = /* @__PURE__ */ new Map(), this._usersByName = /* @__PURE__ */ new Map();
            }
            __name(e2, "e");
            return r(e2, [{ key: "containsUserName", value: function(e3) {
              return this._usersByName.has(e3);
            } }, { key: "containsUserId", value: function(e3) {
              return this._usersById.has(e3);
            } }, { key: "containsUser", value: function(e3) {
              return this._usersById.has(e3.id);
            } }, { key: "getUserById", value: function(e3) {
              return this._usersById.get(e3);
            } }, { key: "getUserByName", value: function(e3) {
              return this._usersByName.get(e3);
            } }, { key: "getUserCount", value: function() {
              return this._usersById.size;
            } }, { key: "getUserList", value: function() {
              return Array.from(this._usersById.values());
            } }, { key: "_addUser", value: function(e3) {
              this.__addUser(e3);
            } }, { key: "__addUser", value: function(e3) {
              this._usersByName.set(e3.name, e3), this._usersById.set(e3.id, e3);
            } }, { key: "_removeUser", value: function(e3) {
              this._usersById.delete(e3.id), this._usersByName.delete(e3.name);
            } }, { key: "_clearAll", value: function() {
              this._usersById.clear(), this._usersByName.clear();
            } }]), e2;
          }(), s = function(e2) {
            function t2(e3) {
              i(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, e3));
              return n2._roomRefCount = /* @__PURE__ */ new Map(), Object.freeze(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, o), r(t2, [{ key: "_addUser", value: function(e3) {
              this._roomRefCount.has(e3) ? this._roomRefCount.set(e3, this._roomRefCount.get(e3) + 1) : this._roomRefCount.set(e3, 1), this.__addUser(e3);
            } }, { key: "_removeUser", value: function(e3) {
              this._removeUserReference(e3, false);
            } }, { key: "_removeUserReference", value: function(e3, n2) {
              var r2 = this._roomRefCount.get(e3);
              r2 < 1 && void 0 != this._sfs ? this._sfs.logger.warn("GlobalUserManager RefCount is already at zero. User: " + e3) : (this._roomRefCount.set(e3, this._roomRefCount.get(e3) - 1), (0 === r2 || n2) && ((/* @__PURE__ */ __name(function e4(t3, n3, r3) {
                null === t3 && (t3 = Function.prototype);
                var i2 = Object.getOwnPropertyDescriptor(t3, n3);
                if (void 0 === i2) {
                  var o2 = Object.getPrototypeOf(t3);
                  return null === o2 ? void 0 : e4(o2, n3, r3);
                }
                if ("value" in i2)
                  return i2.value;
                var s2 = i2.get;
                return void 0 !== s2 ? s2.call(r3) : void 0;
              }, "e"))(t2.prototype.__proto__ || Object.getPrototypeOf(t2.prototype), "_removeUser", this).call(this, e3), this._roomRefCount.delete(e3)));
            } }]), t2;
          }();
          t.SFSUserManager = o, t.GlobalUserManager = s;
        }, function(e, t, n) {
          (function(e2) {
            var n2, r = /* @__PURE__ */ __name(function(e3, t2, n3) {
              this._byteOffset = t2 || 0, e3 instanceof ArrayBuffer ? this.buffer = e3 : "object" == typeof e3 ? (this.dataView = e3, t2 && (this._byteOffset += t2)) : this.buffer = new ArrayBuffer(e3 || 1), this.position = 0, this.endianness = null == n3 ? r.LITTLE_ENDIAN : n3;
            }, "r");
            r.prototype = {}, void 0 === Uint8Array.prototype.BYTES_PER_ELEMENT && (Uint8Array.prototype.BYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT, Int8Array.prototype.BYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT, Uint8ClampedArray.prototype.BYTES_PER_ELEMENT = Uint8ClampedArray.BYTES_PER_ELEMENT, Uint16Array.prototype.BYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT, Int16Array.prototype.BYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT, Uint32Array.prototype.BYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT, Int32Array.prototype.BYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT, Float64Array.prototype.BYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT), r.prototype.save = function(e3) {
              var t2 = new Blob(this.buffer), n3 = window.webkitURL || window.URL;
              if (!n3 || !n3.createObjectURL)
                throw "DataStream.save: Can't create object URL.";
              var r2 = n3.createObjectURL(t2), i = document.createElement("a");
              i.setAttribute("href", r2), i.setAttribute("download", e3), i.click(), n3.revokeObjectURL(r2);
            }, r.BIG_ENDIAN = false, r.LITTLE_ENDIAN = true, r.prototype._dynamicSize = true, Object.defineProperty(r.prototype, "dynamicSize", { get: function() {
              return this._dynamicSize;
            }, set: function(e3) {
              e3 || this._trimAlloc(), this._dynamicSize = e3;
            } }), r.prototype._byteLength = 0, Object.defineProperty(r.prototype, "byteLength", { get: function() {
              return this._byteLength - this._byteOffset;
            } }), Object.defineProperty(r.prototype, "buffer", { get: function() {
              return this._trimAlloc(), this._buffer;
            }, set: function(e3) {
              this._buffer = e3, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength;
            } }), Object.defineProperty(r.prototype, "byteOffset", { get: function() {
              return this._byteOffset;
            }, set: function(e3) {
              this._byteOffset = e3, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength;
            } }), Object.defineProperty(r.prototype, "dataView", { get: function() {
              return this._dataView;
            }, set: function(e3) {
              this._byteOffset = e3.byteOffset, this._buffer = e3.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + e3.byteLength;
            } }), r.prototype._realloc = function(e3) {
              if (this._dynamicSize) {
                var t2 = this._byteOffset + this.position + e3, n3 = this._buffer.byteLength;
                if (t2 <= n3)
                  t2 > this._byteLength && (this._byteLength = t2);
                else {
                  for (n3 < 1 && (n3 = 1); t2 > n3; )
                    n3 *= 2;
                  var r2 = new ArrayBuffer(n3), i = new Uint8Array(this._buffer);
                  new Uint8Array(r2, 0, i.length).set(i), this.buffer = r2, this._byteLength = t2;
                }
              }
            }, r.prototype._trimAlloc = function() {
              if (this._byteLength != this._buffer.byteLength) {
                var e3 = new ArrayBuffer(this._byteLength), t2 = new Uint8Array(e3), n3 = new Uint8Array(this._buffer, 0, t2.length);
                t2.set(n3), this.buffer = e3;
              }
            }, r.prototype.seek = function(e3) {
              var t2 = Math.max(0, Math.min(this.byteLength, e3));
              this.position = isNaN(t2) || !isFinite(t2) ? 0 : t2;
            }, r.prototype.isEof = function() {
              return this.position >= this.byteLength;
            }, r.prototype.mapInt32Array = function(e3, t2) {
              this._realloc(4 * e3);
              var n3 = new Int32Array(this._buffer, this.byteOffset + this.position, e3);
              return r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += 4 * e3, n3;
            }, r.prototype.mapInt16Array = function(e3, t2) {
              this._realloc(2 * e3);
              var n3 = new Int16Array(this._buffer, this.byteOffset + this.position, e3);
              return r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += 2 * e3, n3;
            }, r.prototype.mapInt8Array = function(e3) {
              this._realloc(1 * e3);
              var t2 = new Int8Array(this._buffer, this.byteOffset + this.position, e3);
              return this.position += 1 * e3, t2;
            }, r.prototype.mapUint32Array = function(e3, t2) {
              this._realloc(4 * e3);
              var n3 = new Uint32Array(this._buffer, this.byteOffset + this.position, e3);
              return r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += 4 * e3, n3;
            }, r.prototype.mapUint16Array = function(e3, t2) {
              this._realloc(2 * e3);
              var n3 = new Uint16Array(this._buffer, this.byteOffset + this.position, e3);
              return r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += 2 * e3, n3;
            }, r.prototype.mapUint8Array = function(e3) {
              this._realloc(1 * e3);
              var t2 = new Uint8Array(this._buffer, this.byteOffset + this.position, e3);
              return this.position += 1 * e3, t2;
            }, r.prototype.mapFloat64Array = function(e3, t2) {
              this._realloc(8 * e3);
              var n3 = new Float64Array(this._buffer, this.byteOffset + this.position, e3);
              return r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += 8 * e3, n3;
            }, r.prototype.mapFloat32Array = function(e3, t2) {
              this._realloc(4 * e3);
              var n3 = new Float32Array(this._buffer, this.byteOffset + this.position, e3);
              return r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += 4 * e3, n3;
            }, r.prototype.readInt32Array = function(e3, t2) {
              e3 = null == e3 ? this.byteLength - this.position / 4 : e3;
              var n3 = new Int32Array(e3);
              return r.memcpy(n3.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * n3.BYTES_PER_ELEMENT), r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += n3.byteLength, n3;
            }, r.prototype.readInt16Array = function(e3, t2) {
              e3 = null == e3 ? this.byteLength - this.position / 2 : e3;
              var n3 = new Int16Array(e3);
              return r.memcpy(n3.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * n3.BYTES_PER_ELEMENT), r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += n3.byteLength, n3;
            }, r.prototype.readInt8Array = function(e3) {
              e3 = null == e3 ? this.byteLength - this.position : e3;
              var t2 = new Int8Array(e3);
              return r.memcpy(t2.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * t2.BYTES_PER_ELEMENT), this.position += t2.byteLength, t2;
            }, r.prototype.readUint32Array = function(e3, t2) {
              e3 = null == e3 ? this.byteLength - this.position / 4 : e3;
              var n3 = new Uint32Array(e3);
              return r.memcpy(n3.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * n3.BYTES_PER_ELEMENT), r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += n3.byteLength, n3;
            }, r.prototype.readUint16Array = function(e3, t2) {
              e3 = null == e3 ? this.byteLength - this.position / 2 : e3;
              var n3 = new Uint16Array(e3);
              return r.memcpy(n3.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * n3.BYTES_PER_ELEMENT), r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += n3.byteLength, n3;
            }, r.prototype.readUint8Array = function(e3) {
              e3 = null == e3 ? this.byteLength - this.position : e3;
              var t2 = new Uint8Array(e3);
              return r.memcpy(t2.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * t2.BYTES_PER_ELEMENT), this.position += t2.byteLength, t2;
            }, r.prototype.readFloat64Array = function(e3, t2) {
              e3 = null == e3 ? this.byteLength - this.position / 8 : e3;
              var n3 = new Float64Array(e3);
              return r.memcpy(n3.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * n3.BYTES_PER_ELEMENT), r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += n3.byteLength, n3;
            }, r.prototype.readFloat32Array = function(e3, t2) {
              e3 = null == e3 ? this.byteLength - this.position / 4 : e3;
              var n3 = new Float32Array(e3);
              return r.memcpy(n3.buffer, 0, this.buffer, this.byteOffset + this.position, e3 * n3.BYTES_PER_ELEMENT), r.arrayToNative(n3, null == t2 ? this.endianness : t2), this.position += n3.byteLength, n3;
            }, r.prototype.writeInt32Array = function(e3, t2) {
              if (this._realloc(4 * e3.length), e3 instanceof Int32Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapInt32Array(e3.length, t2);
              else
                for (var n3 = 0; n3 < e3.length; n3++)
                  this.writeInt32(e3[n3], t2);
            }, r.prototype.writeInt16Array = function(e3, t2) {
              if (this._realloc(2 * e3.length), e3 instanceof Int16Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapInt16Array(e3.length, t2);
              else
                for (var n3 = 0; n3 < e3.length; n3++)
                  this.writeInt16(e3[n3], t2);
            }, r.prototype.writeInt8Array = function(e3) {
              if (this._realloc(1 * e3.length), e3 instanceof Int8Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapInt8Array(e3.length);
              else
                for (var t2 = 0; t2 < e3.length; t2++)
                  this.writeInt8(e3[t2]);
            }, r.prototype.writeUint32Array = function(e3, t2) {
              if (this._realloc(4 * e3.length), e3 instanceof Uint32Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapUint32Array(e3.length, t2);
              else
                for (var n3 = 0; n3 < e3.length; n3++)
                  this.writeUint32(e3[n3], t2);
            }, r.prototype.writeUint16Array = function(e3, t2) {
              if (this._realloc(2 * e3.length), e3 instanceof Uint16Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapUint16Array(e3.length, t2);
              else
                for (var n3 = 0; n3 < e3.length; n3++)
                  this.writeUint16(e3[n3], t2);
            }, r.prototype.writeUint8Array = function(e3) {
              if (this._realloc(1 * e3.length), e3 instanceof Uint8Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapUint8Array(e3.length);
              else
                for (var t2 = 0; t2 < e3.length; t2++)
                  this.writeUint8(e3[t2]);
            }, r.prototype.writeFloat64Array = function(e3, t2) {
              if (this._realloc(8 * e3.length), e3 instanceof Float64Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapFloat64Array(e3.length, t2);
              else
                for (var n3 = 0; n3 < e3.length; n3++)
                  this.writeFloat64(e3[n3], t2);
            }, r.prototype.writeFloat32Array = function(e3, t2) {
              if (this._realloc(4 * e3.length), e3 instanceof Float32Array && (this.byteOffset + this.position) % e3.BYTES_PER_ELEMENT == 0)
                r.memcpy(this._buffer, this.byteOffset + this.position, e3.buffer, e3.byteOffset, e3.byteLength), this.mapFloat32Array(e3.length, t2);
              else
                for (var n3 = 0; n3 < e3.length; n3++)
                  this.writeFloat32(e3[n3], t2);
            }, r.prototype.readInt32 = function(e3) {
              var t2 = this._dataView.getInt32(this.position, null == e3 ? this.endianness : e3);
              return this.position += 4, t2;
            }, r.prototype.readInt16 = function(e3) {
              var t2 = this._dataView.getInt16(this.position, null == e3 ? this.endianness : e3);
              return this.position += 2, t2;
            }, r.prototype.readInt8 = function() {
              var e3 = this._dataView.getInt8(this.position);
              return this.position += 1, e3;
            }, r.prototype.readUint32 = function(e3) {
              var t2 = this._dataView.getUint32(this.position, null == e3 ? this.endianness : e3);
              return this.position += 4, t2;
            }, r.prototype.readUint16 = function(e3) {
              var t2 = this._dataView.getUint16(this.position, null == e3 ? this.endianness : e3);
              return this.position += 2, t2;
            }, r.prototype.readUint8 = function() {
              var e3 = this._dataView.getUint8(this.position);
              return this.position += 1, e3;
            }, r.prototype.readFloat32 = function(e3) {
              var t2 = this._dataView.getFloat32(this.position, null == e3 ? this.endianness : e3);
              return this.position += 4, t2;
            }, r.prototype.readFloat64 = function(e3) {
              var t2 = this._dataView.getFloat64(this.position, null == e3 ? this.endianness : e3);
              return this.position += 8, t2;
            }, r.prototype.writeInt32 = function(e3, t2) {
              this._realloc(4), this._dataView.setInt32(this.position, e3, null == t2 ? this.endianness : t2), this.position += 4;
            }, r.prototype.writeInt16 = function(e3, t2) {
              this._realloc(2), this._dataView.setInt16(this.position, e3, null == t2 ? this.endianness : t2), this.position += 2;
            }, r.prototype.writeInt8 = function(e3) {
              this._realloc(1), this._dataView.setInt8(this.position, e3), this.position += 1;
            }, r.prototype.writeUint32 = function(e3, t2) {
              this._realloc(4), this._dataView.setUint32(this.position, e3, null == t2 ? this.endianness : t2), this.position += 4;
            }, r.prototype.writeUint16 = function(e3, t2) {
              this._realloc(2), this._dataView.setUint16(this.position, e3, null == t2 ? this.endianness : t2), this.position += 2;
            }, r.prototype.writeUint8 = function(e3) {
              this._realloc(1), this._dataView.setUint8(this.position, e3), this.position += 1;
            }, r.prototype.writeFloat32 = function(e3, t2) {
              this._realloc(4), this._dataView.setFloat32(this.position, e3, null == t2 ? this.endianness : t2), this.position += 4;
            }, r.prototype.writeFloat64 = function(e3, t2) {
              this._realloc(8), this._dataView.setFloat64(this.position, e3, null == t2 ? this.endianness : t2), this.position += 8;
            }, r.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, r.memcpy = function(e3, t2, n3, r2, i) {
              var o = new Uint8Array(e3, t2, i), s = new Uint8Array(n3, r2, i);
              o.set(s);
            }, r.arrayToNative = function(e3, t2) {
              return t2 == this.endianness ? e3 : this.flipArrayEndianness(e3);
            }, r.nativeToEndian = function(e3, t2) {
              return this.endianness == t2 ? e3 : this.flipArrayEndianness(e3);
            }, r.flipArrayEndianness = function(e3) {
              for (var t2 = new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength), n3 = 0; n3 < e3.byteLength; n3 += e3.BYTES_PER_ELEMENT)
                for (var r2 = n3 + e3.BYTES_PER_ELEMENT - 1, i = n3; r2 > i; r2--, i++) {
                  var o = t2[i];
                  t2[i] = t2[r2], t2[r2] = o;
                }
              return e3;
            }, r.createStringFromArray = function(e3) {
              for (var t2 = [], n3 = 0; n3 < e3.length; n3 += 32768)
                t2.push(String.fromCharCode.apply(null, e3.subarray(n3, n3 + 32768)));
              return t2.join("");
            }, r.prototype.failurePosition = 0, r.prototype.readStruct = function(e3) {
              for (var t2, n3, r2 = {}, i = this.position, o = 0; o < e3.length; o += 2) {
                if (t2 = e3[o + 1], null == (n3 = this.readType(t2, r2)))
                  return 0 == this.failurePosition && (this.failurePosition = this.position), this.position = i, null;
                r2[e3[o]] = n3;
              }
              return r2;
            }, r.prototype.readUCS2String = function(e3, t2) {
              return r.createStringFromArray(this.readUint16Array(e3, t2));
            }, r.prototype.writeUCS2String = function(e3, t2, n3) {
              null == n3 && (n3 = e3.length);
              for (var r2 = 0; r2 < e3.length && r2 < n3; r2++)
                this.writeUint16(e3.charCodeAt(r2), t2);
              for (; r2 < n3; r2++)
                this.writeUint16(0);
            }, r.prototype.readString = function(e3, t2) {
              return null == t2 || "ASCII" == t2 ? r.createStringFromArray(this.mapUint8Array(null == e3 ? this.byteLength - this.position : e3)) : new TextDecoder(t2).decode(this.mapUint8Array(e3));
            }, r.prototype.writeString = function(e3, t2, n3) {
              if (null == t2 || "ASCII" == t2)
                if (null != n3) {
                  var r2 = 0, i = Math.min(e3.length, n3);
                  for (r2 = 0; r2 < i; r2++)
                    this.writeUint8(e3.charCodeAt(r2));
                  for (; r2 < n3; r2++)
                    this.writeUint8(0);
                } else
                  for (r2 = 0; r2 < e3.length; r2++)
                    this.writeUint8(e3.charCodeAt(r2));
              else
                this.writeUint8Array(new TextEncoder(t2).encode(e3.substring(0, n3)));
            }, r.prototype.readCString = function(e3) {
              var t2 = this.byteLength - this.position, n3 = new Uint8Array(this._buffer, this._byteOffset + this.position), i = t2;
              null != e3 && (i = Math.min(e3, t2));
              for (var o = 0; o < i && 0 != n3[o]; o++)
                ;
              var s = r.createStringFromArray(this.mapUint8Array(o));
              return null != e3 ? this.position += i - o : o != t2 && (this.position += 1), s;
            }, r.prototype.writeCString = function(e3, t2) {
              if (null != t2) {
                var n3 = 0, r2 = Math.min(e3.length, t2);
                for (n3 = 0; n3 < r2; n3++)
                  this.writeUint8(e3.charCodeAt(n3));
                for (; n3 < t2; n3++)
                  this.writeUint8(0);
              } else {
                for (n3 = 0; n3 < e3.length; n3++)
                  this.writeUint8(e3.charCodeAt(n3));
                this.writeUint8(0);
              }
            }, r.prototype.readType = function(e3, t2) {
              if ("function" == typeof e3)
                return e3(this, t2);
              if (!("object" != typeof e3 || e3 instanceof Array))
                return e3.get(this, t2);
              if (e3 instanceof Array && 3 != e3.length)
                return this.readStruct(e3, t2);
              var n3, i = null, o = null, s = "ASCII", a = this.position;
              "string" == typeof e3 && /:/.test(e3) && (e3 = (n3 = e3.split(":"))[0], o = null != t2[u = n3[1]] ? parseInt(t2[u]) : parseInt(n3[1]));
              "string" == typeof e3 && /,/.test(e3) && (e3 = (n3 = e3.split(","))[0], s = parseInt(n3[1]));
              switch (e3) {
                case "uint8":
                  i = this.readUint8();
                  break;
                case "int8":
                  i = this.readInt8();
                  break;
                case "uint16":
                  i = this.readUint16(this.endianness);
                  break;
                case "int16":
                  i = this.readInt16(this.endianness);
                  break;
                case "uint32":
                  i = this.readUint32(this.endianness);
                  break;
                case "int32":
                  i = this.readInt32(this.endianness);
                  break;
                case "float32":
                  i = this.readFloat32(this.endianness);
                  break;
                case "float64":
                  i = this.readFloat64(this.endianness);
                  break;
                case "uint16be":
                  i = this.readUint16(r.BIG_ENDIAN);
                  break;
                case "int16be":
                  i = this.readInt16(r.BIG_ENDIAN);
                  break;
                case "uint32be":
                  i = this.readUint32(r.BIG_ENDIAN);
                  break;
                case "int32be":
                  i = this.readInt32(r.BIG_ENDIAN);
                  break;
                case "float32be":
                  i = this.readFloat32(r.BIG_ENDIAN);
                  break;
                case "float64be":
                  i = this.readFloat64(r.BIG_ENDIAN);
                  break;
                case "uint16le":
                  i = this.readUint16(r.LITTLE_ENDIAN);
                  break;
                case "int16le":
                  i = this.readInt16(r.LITTLE_ENDIAN);
                  break;
                case "uint32le":
                  i = this.readUint32(r.LITTLE_ENDIAN);
                  break;
                case "int32le":
                  i = this.readInt32(r.LITTLE_ENDIAN);
                  break;
                case "float32le":
                  i = this.readFloat32(r.LITTLE_ENDIAN);
                  break;
                case "float64le":
                  i = this.readFloat64(r.LITTLE_ENDIAN);
                  break;
                case "cstring":
                  i = this.readCString(o);
                  break;
                case "string":
                  i = this.readString(o, s);
                  break;
                case "u16string":
                  i = this.readUCS2String(o, this.endianness);
                  break;
                case "u16stringle":
                  i = this.readUCS2String(o, r.LITTLE_ENDIAN);
                  break;
                case "u16stringbe":
                  i = this.readUCS2String(o, r.BIG_ENDIAN);
                  break;
                default:
                  if (3 == e3.length) {
                    var u, c = e3[1], l = 0;
                    if (l = "function" == typeof (u = e3[2]) ? u(t2, this, e3) : "string" == typeof u && null != t2[u] ? parseInt(t2[u]) : parseInt(u), "string" == typeof c) {
                      var f = c.replace(/(le|be)$/, ""), h = null;
                      switch (/le$/.test(c) ? h = r.LITTLE_ENDIAN : /be$/.test(c) && (h = r.BIG_ENDIAN), "*" == u && (l = null), f) {
                        case "uint8":
                          i = this.readUint8Array(l);
                          break;
                        case "uint16":
                          i = this.readUint16Array(l, h);
                          break;
                        case "uint32":
                          i = this.readUint32Array(l, h);
                          break;
                        case "int8":
                          i = this.readInt8Array(l);
                          break;
                        case "int16":
                          i = this.readInt16Array(l, h);
                          break;
                        case "int32":
                          i = this.readInt32Array(l, h);
                          break;
                        case "float32":
                          i = this.readFloat32Array(l, h);
                          break;
                        case "float64":
                          i = this.readFloat64Array(l, h);
                          break;
                        case "cstring":
                        case "utf16string":
                        case "string":
                          if (null == l)
                            for (i = []; !this.isEof(); ) {
                              if (null == (d = this.readType(c, t2)))
                                break;
                              i.push(d);
                            }
                          else {
                            i = new Array(l);
                            for (var _ = 0; _ < l; _++)
                              i[_] = this.readType(c, t2);
                          }
                      }
                    } else if ("*" == u)
                      for (i = [], this.buffer; ; ) {
                        var y = this.position;
                        try {
                          var p = this.readType(c, t2);
                          if (null == p) {
                            this.position = y;
                            break;
                          }
                          i.push(p);
                        } catch (e4) {
                          this.position = y;
                          break;
                        }
                      }
                    else {
                      i = new Array(l);
                      for (_ = 0; _ < l; _++) {
                        var d;
                        if (null == (d = this.readType(c, t2)))
                          return null;
                        i[_] = d;
                      }
                    }
                    break;
                  }
              }
              return null != o && (this.position = a + o), i;
            }, r.prototype.writeStruct = function(e3, t2) {
              for (var n3 = 0; n3 < e3.length; n3 += 2) {
                var r2 = e3[n3 + 1];
                this.writeType(r2, t2[e3[n3]], t2);
              }
            }, r.prototype.writeType = function(e3, t2, n3) {
              if ("function" == typeof e3)
                return e3(this, t2);
              if ("object" == typeof e3 && !(e3 instanceof Array))
                return e3.set(this, t2, n3);
              var i, o = null, s = "ASCII", a = this.position;
              "string" == typeof e3 && /:/.test(e3) && (e3 = (i = e3.split(":"))[0], o = parseInt(i[1]));
              "string" == typeof e3 && /,/.test(e3) && (e3 = (i = e3.split(","))[0], s = parseInt(i[1]));
              switch (e3) {
                case "uint8":
                  this.writeUint8(t2);
                  break;
                case "int8":
                  this.writeInt8(t2);
                  break;
                case "uint16":
                  this.writeUint16(t2, this.endianness);
                  break;
                case "int16":
                  this.writeInt16(t2, this.endianness);
                  break;
                case "uint32":
                  this.writeUint32(t2, this.endianness);
                  break;
                case "int32":
                  this.writeInt32(t2, this.endianness);
                  break;
                case "float32":
                  this.writeFloat32(t2, this.endianness);
                  break;
                case "float64":
                  this.writeFloat64(t2, this.endianness);
                  break;
                case "uint16be":
                  this.writeUint16(t2, r.BIG_ENDIAN);
                  break;
                case "int16be":
                  this.writeInt16(t2, r.BIG_ENDIAN);
                  break;
                case "uint32be":
                  this.writeUint32(t2, r.BIG_ENDIAN);
                  break;
                case "int32be":
                  this.writeInt32(t2, r.BIG_ENDIAN);
                  break;
                case "float32be":
                  this.writeFloat32(t2, r.BIG_ENDIAN);
                  break;
                case "float64be":
                  this.writeFloat64(t2, r.BIG_ENDIAN);
                  break;
                case "uint16le":
                  this.writeUint16(t2, r.LITTLE_ENDIAN);
                  break;
                case "int16le":
                  this.writeInt16(t2, r.LITTLE_ENDIAN);
                  break;
                case "uint32le":
                  this.writeUint32(t2, r.LITTLE_ENDIAN);
                  break;
                case "int32le":
                  this.writeInt32(t2, r.LITTLE_ENDIAN);
                  break;
                case "float32le":
                  this.writeFloat32(t2, r.LITTLE_ENDIAN);
                  break;
                case "float64le":
                  this.writeFloat64(t2, r.LITTLE_ENDIAN);
                  break;
                case "cstring":
                  this.writeCString(t2, o);
                  break;
                case "string":
                  this.writeString(t2, s, o);
                  break;
                case "u16string":
                  this.writeUCS2String(t2, this.endianness, o);
                  break;
                case "u16stringle":
                  this.writeUCS2String(t2, r.LITTLE_ENDIAN, o);
                  break;
                case "u16stringbe":
                  this.writeUCS2String(t2, r.BIG_ENDIAN, o);
                  break;
                default:
                  if (3 == e3.length) {
                    for (var u = e3[1], c = 0; c < t2.length; c++)
                      this.writeType(u, t2[c]);
                    break;
                  }
                  this.writeStruct(e3, t2);
              }
              null != o && (this.position = a, this._realloc(o), this.position = a + o);
            }, void 0 === (n2 = function() {
              return r;
            }.apply(t, [])) || (e2.exports = n2), "object" == typeof e2 && e2 && e2.exports && (e2.exports = r);
          }).call(this, n(173)(e));
        }, function(e, t, n) {
          var r = n(24), i = n(12);
          e.exports = function(e2) {
            if (void 0 === e2)
              return 0;
            var t2 = r(e2), n2 = i(t2);
            if (t2 !== n2)
              throw RangeError("Wrong length!");
            return n2;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(41), i = n(29).getWeak, o = n(5), s = n(4), a = n(42), u = n(62), c = n(19), l = n(16), f = n(40), h = c(5), _ = c(6), y = 0, p = /* @__PURE__ */ __name(function(e2) {
            return e2._l || (e2._l = new d());
          }, "p"), d = /* @__PURE__ */ __name(function() {
            this.a = [];
          }, "d"), g = /* @__PURE__ */ __name(function(e2, t2) {
            return h(e2.a, function(e3) {
              return e3[0] === t2;
            });
          }, "g");
          d.prototype = { get: function(e2) {
            var t2 = g(this, e2);
            if (t2)
              return t2[1];
          }, has: function(e2) {
            return !!g(this, e2);
          }, set: function(e2, t2) {
            var n2 = g(this, e2);
            n2 ? n2[1] = t2 : this.a.push([e2, t2]);
          }, delete: function(e2) {
            var t2 = _(this.a, function(t3) {
              return t3[0] === e2;
            });
            return ~t2 && this.a.splice(t2, 1), !!~t2;
          } }, e.exports = { getConstructor: function(e2, t2, n2, o2) {
            var c2 = e2(function(e3, r2) {
              a(e3, c2, t2, "_i"), e3._t = t2, e3._i = y++, e3._l = void 0, void 0 != r2 && u(r2, n2, e3[o2], e3);
            });
            return r(c2.prototype, { delete: function(e3) {
              if (!s(e3))
                return false;
              var n3 = i(e3);
              return true === n3 ? p(f(this, t2)).delete(e3) : n3 && l(n3, this._i) && delete n3[this._i];
            }, has: function(e3) {
              if (!s(e3))
                return false;
              var n3 = i(e3);
              return true === n3 ? p(f(this, t2)).has(e3) : n3 && l(n3, this._i);
            } }), c2;
          }, def: function(e2, t2, n2) {
            var r2 = i(o(t2), true);
            return true === r2 ? p(e2).set(t2, n2) : r2[e2._i] = n2, e2;
          }, ufstore: p };
        }, function(e, t, n) {
          "use strict";
          var r = n(10).f, i = n(33), o = n(41), s = n(27), a = n(42), u = n(62), c = n(84), l = n(127), f = n(43), h = n(11), _ = n(29).fastKey, y = n(40), p = h ? "_s" : "size", d = /* @__PURE__ */ __name(function(e2, t2) {
            var n2, r2 = _(t2);
            if ("F" !== r2)
              return e2._i[r2];
            for (n2 = e2._f; n2; n2 = n2.n)
              if (n2.k == t2)
                return n2;
          }, "d");
          e.exports = { getConstructor: function(e2, t2, n2, c2) {
            var l2 = e2(function(e3, r2) {
              a(e3, l2, t2, "_i"), e3._t = t2, e3._i = i(null), e3._f = void 0, e3._l = void 0, e3[p] = 0, void 0 != r2 && u(r2, n2, e3[c2], e3);
            });
            return o(l2.prototype, { clear: function() {
              for (var e3 = y(this, t2), n3 = e3._i, r2 = e3._f; r2; r2 = r2.n)
                r2.r = true, r2.p && (r2.p = r2.p.n = void 0), delete n3[r2.i];
              e3._f = e3._l = void 0, e3[p] = 0;
            }, delete: function(e3) {
              var n3 = y(this, t2), r2 = d(n3, e3);
              if (r2) {
                var i2 = r2.n, o2 = r2.p;
                delete n3._i[r2.i], r2.r = true, o2 && (o2.n = i2), i2 && (i2.p = o2), n3._f == r2 && (n3._f = i2), n3._l == r2 && (n3._l = o2), n3[p]--;
              }
              return !!r2;
            }, forEach: function(e3) {
              y(this, t2);
              for (var n3, r2 = s(e3, arguments.length > 1 ? arguments[1] : void 0, 3); n3 = n3 ? n3.n : this._f; )
                for (r2(n3.v, n3.k, this); n3 && n3.r; )
                  n3 = n3.p;
            }, has: function(e3) {
              return !!d(y(this, t2), e3);
            } }), h && r(l2.prototype, "size", { get: function() {
              return y(this, t2)[p];
            } }), l2;
          }, def: function(e2, t2, n2) {
            var r2, i2, o2 = d(e2, t2);
            return o2 ? o2.v = n2 : (e2._l = o2 = { i: i2 = _(t2, true), k: t2, v: n2, p: r2 = e2._l, n: void 0, r: false }, e2._f || (e2._f = o2), r2 && (r2.n = o2), e2[p]++, "F" !== i2 && (e2._i[i2] = o2)), e2;
          }, getEntry: d, setStrong: function(e2, t2, n2) {
            c(e2, t2, function(e3, n3) {
              this._t = y(e3, t2), this._k = n3, this._l = void 0;
            }, function() {
              for (var e3 = this._k, t3 = this._l; t3 && t3.r; )
                t3 = t3.p;
              return this._t && (this._l = t3 = t3 ? t3.n : this._t._f) ? l(0, "keys" == e3 ? t3.k : "values" == e3 ? t3.v : [t3.k, t3.v]) : (this._t = void 0, l(1));
            }, n2 ? "entries" : "values", !n2, true), f(t2);
          } };
        }, function(e, t, n) {
          "use strict";
          var r = n(26);
          e.exports.f = function(e2) {
            return new function(e3) {
              var t2, n2;
              this.promise = new e3(function(e4, r2) {
                if (void 0 !== t2 || void 0 !== n2)
                  throw TypeError("Bad Promise constructor");
                t2 = e4, n2 = r2;
              }), this.resolve = r(t2), this.reject = r(n2);
            }(e2);
          };
        }, function(e, t, n) {
          var r, i, o, s = n(27), a = n(141), u = n(90), c = n(96), l = n(6), f = l.process, h = l.setImmediate, _ = l.clearImmediate, y = l.MessageChannel, p = l.Dispatch, d = 0, g = {}, v = /* @__PURE__ */ __name(function() {
            var e2 = +this;
            if (g.hasOwnProperty(e2)) {
              var t2 = g[e2];
              delete g[e2], t2();
            }
          }, "v"), b = /* @__PURE__ */ __name(function(e2) {
            v.call(e2.data);
          }, "b");
          h && _ || (h = /* @__PURE__ */ __name(function(e2) {
            for (var t2 = [], n2 = 1; arguments.length > n2; )
              t2.push(arguments[n2++]);
            return g[++d] = function() {
              a("function" == typeof e2 ? e2 : Function(e2), t2);
            }, r(d), d;
          }, "h"), _ = /* @__PURE__ */ __name(function(e2) {
            delete g[e2];
          }, "_"), "process" == n(25)(f) ? r = /* @__PURE__ */ __name(function(e2) {
            f.nextTick(s(v, e2, 1));
          }, "r") : p && p.now ? r = /* @__PURE__ */ __name(function(e2) {
            p.now(s(v, e2, 1));
          }, "r") : y ? (o = (i = new y()).port2, i.port1.onmessage = b, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = /* @__PURE__ */ __name(function(e2) {
            l.postMessage(e2 + "", "*");
          }, "r"), l.addEventListener("message", b, false)) : r = "onreadystatechange" in c("script") ? function(e2) {
            u.appendChild(c("script")).onreadystatechange = function() {
              u.removeChild(this), v.call(e2);
            };
          } : function(e2) {
            setTimeout(s(v, e2, 1), 0);
          }), e.exports = { set: h, clear: _ };
        }, function(e, t, n) {
          n(11) && "g" != /./g.flags && n(10).f(RegExp.prototype, "flags", { configurable: true, get: n(77) });
        }, function(e, t) {
          e.exports = function(e2, t2) {
            return { value: t2, done: !!e2 };
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(52), i = n(127), o = n(53), s = n(21);
          e.exports = n(84)(Array, "Array", function(e2, t2) {
            this._t = s(e2), this._i = 0, this._k = t2;
          }, function() {
            var e2 = this._t, t2 = this._k, n2 = this._i++;
            return !e2 || n2 >= e2.length ? (this._t = void 0, i(1)) : i(0, "keys" == t2 ? n2 : "values" == t2 ? e2[n2] : [n2, e2[n2]]);
          }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
        }, function(e, t, n) {
          "use strict";
          var r = n(14), i = n(34), o = n(12);
          e.exports = [].copyWithin || function(e2, t2) {
            var n2 = r(this), s = o(n2.length), a = i(e2, s), u = i(t2, s), c = arguments.length > 2 ? arguments[2] : void 0, l = Math.min((void 0 === c ? s : i(c, s)) - u, s - a), f = 1;
            for (u < a && a < u + l && (f = -1, u += l - 1, a += l - 1); l-- > 0; )
              u in n2 ? n2[a] = n2[u] : delete n2[a], a += f, u += f;
            return n2;
          };
        }, function(e, t, n) {
          var r = n(26), i = n(14), o = n(54), s = n(12);
          e.exports = function(e2, t2, n2, a, u) {
            r(t2);
            var c = i(e2), l = o(c), f = s(c.length), h = u ? f - 1 : 0, _ = u ? -1 : 1;
            if (n2 < 2)
              for (; ; ) {
                if (h in l) {
                  a = l[h], h += _;
                  break;
                }
                if (h += _, u ? h < 0 : f <= h)
                  throw TypeError("Reduce of empty array with no initial value");
              }
            for (; u ? h >= 0 : f > h; h += _)
              h in l && (a = t2(a, l[h], h, c));
            return a;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(10), i = n(36);
          e.exports = function(e2, t2, n2) {
            t2 in e2 ? r.f(e2, t2, i(0, n2)) : e2[t2] = n2;
          };
        }, function(e, t, n) {
          var r = n(5);
          e.exports = function(e2, t2, n2, i) {
            try {
              return i ? t2(r(n2)[0], n2[1]) : t2(n2);
            } catch (t3) {
              var o = e2.return;
              throw void 0 !== o && r(o.call(e2)), t3;
            }
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(33), i = n(36), o = n(45), s = {};
          n(18)(s, n(7)("iterator"), function() {
            return this;
          }), e.exports = function(e2, t2, n2) {
            e2.prototype = r(s, { next: i(1, n2) }), o(e2, t2 + " Iterator");
          };
        }, function(e, t, n) {
          var r = n(24), i = n(28);
          e.exports = function(e2) {
            return function(t2, n2) {
              var o, s, a = String(i(t2)), u = r(n2), c = a.length;
              return u < 0 || u >= c ? e2 ? "" : void 0 : (o = a.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e2 ? a.charAt(u) : o : e2 ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536;
            };
          };
        }, function(e, t) {
          e.exports = Math.log1p || function(e2) {
            return (e2 = +e2) > -1e-8 && e2 < 1e-8 ? e2 - e2 * e2 / 2 : Math.log(1 + e2);
          };
        }, function(e, t, n) {
          var r = n(4), i = Math.floor;
          e.exports = function(e2) {
            return !r(e2) && isFinite(e2) && i(e2) === e2;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(24), i = n(28);
          e.exports = function(e2) {
            var t2 = String(i(this)), n2 = "", o = r(e2);
            if (o < 0 || o == 1 / 0)
              throw RangeError("Count can't be negative");
            for (; o > 0; (o >>>= 1) && (t2 += t2))
              1 & o && (n2 += t2);
            return n2;
          };
        }, function(e, t, n) {
          var r = n(25);
          e.exports = function(e2, t2) {
            if ("number" != typeof e2 && "Number" != r(e2))
              throw TypeError(t2);
            return +e2;
          };
        }, function(e, t, n) {
          var r = n(6).parseFloat, i = n(65).trim;
          e.exports = 1 / r(n(88) + "-0") != -1 / 0 ? function(e2) {
            var t2 = i(String(e2), 3), n2 = r(t2);
            return 0 === n2 && "-" == t2.charAt(0) ? -0 : n2;
          } : r;
        }, function(e, t, n) {
          var r = n(6).parseInt, i = n(65).trim, o = n(88), s = /^[-+]?0[xX]/;
          e.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(e2, t2) {
            var n2 = i(String(e2), 3);
            return r(n2, t2 >>> 0 || (s.test(n2) ? 16 : 10));
          } : r;
        }, function(e, t) {
          e.exports = function(e2, t2, n) {
            var r = void 0 === n;
            switch (t2.length) {
              case 0:
                return r ? e2() : e2.call(n);
              case 1:
                return r ? e2(t2[0]) : e2.call(n, t2[0]);
              case 2:
                return r ? e2(t2[0], t2[1]) : e2.call(n, t2[0], t2[1]);
              case 3:
                return r ? e2(t2[0], t2[1], t2[2]) : e2.call(n, t2[0], t2[1], t2[2]);
              case 4:
                return r ? e2(t2[0], t2[1], t2[2], t2[3]) : e2.call(n, t2[0], t2[1], t2[2], t2[3]);
            }
            return e2.apply(n, t2);
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(26), i = n(4), o = n(141), s = [].slice, a = {};
          e.exports = Function.bind || function(e2) {
            var t2 = r(this), n2 = s.call(arguments, 1), u = /* @__PURE__ */ __name(function() {
              var r2 = n2.concat(s.call(arguments));
              return this instanceof u ? function(e3, t3, n3) {
                if (!(t3 in a)) {
                  for (var r3 = [], i2 = 0; i2 < t3; i2++)
                    r3[i2] = "a[" + i2 + "]";
                  a[t3] = Function("F,a", "return new F(" + r3.join(",") + ")");
                }
                return a[t3](e3, n3);
              }(t2, r2.length, r2) : o(t2, r2, e2);
            }, "u");
            return i(t2.prototype) && (u.prototype = t2.prototype), u;
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(55), i = n(68), o = n(67), s = n(14), a = n(54), u = Object.assign;
          e.exports = !u || n(3)(function() {
            var e2 = {}, t2 = {}, n2 = Symbol(), r2 = "abcdefghijklmnopqrst";
            return e2[n2] = 7, r2.split("").forEach(function(e3) {
              t2[e3] = e3;
            }), 7 != u({}, e2)[n2] || Object.keys(u({}, t2)).join("") != r2;
          }) ? function(e2, t2) {
            for (var n2 = s(e2), u2 = arguments.length, c = 1, l = i.f, f = o.f; u2 > c; )
              for (var h, _ = a(arguments[c++]), y = l ? r(_).concat(l(_)) : r(_), p = y.length, d = 0; p > d; )
                f.call(_, h = y[d++]) && (n2[h] = _[h]);
            return n2;
          } : u;
        }, function(e, t, n) {
          var r = n(21), i = n(32).f, o = {}.toString, s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          e.exports.f = function(e2) {
            return s && "[object Window]" == o.call(e2) ? function(e3) {
              try {
                return i(e3);
              } catch (e4) {
                return s.slice();
              }
            }(e2) : i(r(e2));
          };
        }, function(e, t, n) {
          var r = n(10), i = n(5), o = n(55);
          e.exports = n(11) ? Object.defineProperties : function(e2, t2) {
            i(e2);
            for (var n2, s = o(t2), a = s.length, u = 0; a > u; )
              r.f(e2, n2 = s[u++], t2[n2]);
            return e2;
          };
        }, function(e, t, n) {
          var r = n(16), i = n(21), o = n(94)(false), s = n(93)("IE_PROTO");
          e.exports = function(e2, t2) {
            var n2, a = i(e2), u = 0, c = [];
            for (n2 in a)
              n2 != s && r(a, n2) && c.push(n2);
            for (; t2.length > u; )
              r(a, n2 = t2[u++]) && (~o(c, n2) || c.push(n2));
            return c;
          };
        }, function(e, t, n) {
          t.f = n(7);
        }, function(e, t, n) {
          e.exports = !n(11) && !n(3)(function() {
            return 7 != Object.defineProperty(n(96)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e, t, n) {
          "use strict";
          Number.MAX_SAFE_INTEGER || (Number.MAX_SAFE_INTEGER = 9007199254740991), Number.isInteger = Number.isInteger || function(e2) {
            return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
          }, Number.isSafeInteger = Number.isSafeInteger || function(e2) {
            return Number.isInteger(e2) && Math.abs(e2) <= Number.MAX_SAFE_INTEGER;
          }, Number.isFinite = Number.isFinite || function(e2) {
            return "number" == typeof e2 && isFinite(e2);
          }, Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(e2) {
            if (null == this)
              throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof e2)
              throw new TypeError("predicate must be a function");
            for (var t2 = Object(this), n2 = t2.length >>> 0, r = arguments[1], i = 0; i !== n2; i++)
              if (e2.call(r, this[i], i, t2))
                return this[i];
          } });
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.BuddyMessageRequest = void 0;
          var r = n(70), i = n(1), o = n(58);
          var s = function(e2) {
            function t2(e3, n2) {
              var s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              if (null != n2 && !(n2 instanceof o.SFSBuddy))
                throw new i.SFSError("Target buddy must be an instance of SFSBuddy class");
              return a._type = r.GenericMessageType.BUDDY_MSG, a._message = e3, a._recipient = null != n2 ? n2.id : -1, a._params = s2, Object.seal(a), a;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, r.GenericMessageRequest), t2;
          }();
          t.BuddyMessageRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.QuickJoinGameRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9), a = n(38);
          var u = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.QuickJoinGame));
              return o2._matchExpression = e3, o2._whereToSearch = n2, o2._roomToLeave = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM_LIST", get: function() {
              return "rl";
            } }, { key: "KEY_GROUP_LIST", get: function() {
              return "gl";
            } }, { key: "KEY_ROOM_TO_LEAVE", get: function() {
              return "tl";
            } }, { key: "KEY_MATCH_EXPRESSION", get: function() {
              return "me";
            } }, { key: "MAX_ROOMS", get: function() {
              return 32;
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var n2 = [];
              if (null == this._matchExpression || this._matchExpression instanceof a.MatchExpression || n2.push("Match expression must be an instance of MatchExpression class"), null == this._whereToSearch || this._whereToSearch.length < 1 ? n2.push("Missing list of Rooms or Group names where to search the game to join") : this._whereToSearch.length > t2.MAX_ROOMS && n2.push("Too many Rooms specified in list where to search the game to join; client limit is: " + t2.MAX_ROOMS), null == this._roomToLeave || this._roomToLeave instanceof s.SFSRoom || n2.push("Room to leave must be an instance of SFSRoom class"), n2.length > 0)
                throw new o.SFSValidationError("QuickJoinGameRequest Error", n2);
            } }, { key: "execute", value: function(e3) {
              if ("string" == typeof this._whereToSearch[0])
                this._reqObj.putUtfStringArray(t2.KEY_GROUP_LIST, this._whereToSearch);
              else {
                if (!(this._whereToSearch[0] instanceof s.SFSRoom))
                  throw new o.SFSError("Invalid type in whereToSearch parameter");
                var n2 = [], r2 = true, i2 = false, a2 = void 0;
                try {
                  for (var u2, c = this._whereToSearch[Symbol.iterator](); !(r2 = (u2 = c.next()).done); r2 = true) {
                    var l = u2.value;
                    l instanceof s.SFSRoom && n2.push(l.id);
                  }
                } catch (e4) {
                  i2 = true, a2 = e4;
                } finally {
                  try {
                    !r2 && c.return && c.return();
                  } finally {
                    if (i2)
                      throw a2;
                  }
                }
                this._reqObj.putIntArray(t2.KEY_ROOM_LIST, n2);
              }
              null != this._roomToLeave && this._reqObj.putInt(t2.KEY_ROOM_TO_LEAVE, this._roomToLeave.id), null != this._matchExpression && this._reqObj.putSFSArray(t2.KEY_MATCH_EXPRESSION, this._matchExpression.toSFSArray());
            } }]), t2;
          }();
          t.QuickJoinGameRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.JoinRoomInvitationRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9), a = n(8);
          var u = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30, s2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.JoinRoomInvite));
              return a2._targetRoom = e3, a2._invitedUserNames = n2, a2._params = r2, a2._expirySeconds = o2, a2._asSpectator = s2, Object.seal(a2), a2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM_ID", get: function() {
              return "r";
            } }, { key: "KEY_EXPIRY_SECONDS", get: function() {
              return "es";
            } }, { key: "KEY_INVITED_NAMES", get: function() {
              return "in";
            } }, { key: "KEY_AS_SPECT", get: function() {
              return "as";
            } }, { key: "KEY_OPTIONAL_PARAMS", get: function() {
              return "op";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null == this._targetRoom && t3.push("Missing target room"), null == this._targetRoom || this._targetRoom instanceof s.SFSRoom || t3.push("Target room must be an instance of SFSRoom class"), null == this._invitedUserNames ? t3.push("No invitees provided") : this._invitedUserNames instanceof Array ? this._invitedUserNames.length < 1 && t3.push("No invitees provided") : t3.push("Invited user names must be passed in an array"), null == this._params || this._params instanceof a.SFSObject || t3.push("Custom invitation parameters must be set in a SFSObject class instance"), t3.length > 0)
                throw new o.SFSValidationError("JoinRoomInvitationRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_ROOM_ID, this._targetRoom.id), this._reqObj.putUtfStringArray(t2.KEY_INVITED_NAMES, this._invitedUserNames), this._reqObj.putInt(t2.KEY_EXPIRY_SECONDS, this._expirySeconds), this._reqObj.putBool(t2.KEY_AS_SPECT, this._asSpectator), null != this._params && this._reqObj.putSFSObject(t2.KEY_OPTIONAL_PARAMS, this._params);
            } }]), t2;
          }();
          t.JoinRoomInvitationRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.InvitationReplyRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(8), a = n(72);
          var u = function(e2) {
            function t2(e3, n2) {
              var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.InvitationReply));
              return o2._invitation = e3, o2._reply = n2, o2._params = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_INVITATION_ID", get: function() {
              return "i";
            } }, { key: "KEY_INVITATION_REPLY", get: function() {
              return "r";
            } }, { key: "KEY_INVITATION_PARAMS", get: function() {
              return "p";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (null == this._invitation ? t3.push("Missing invitation object") : this._invitation instanceof a.SFSInvitation || t3.push("Invitation object must be an instance of Invitation class"), null == this._params || this._params instanceof s.SFSObject || t3.push("Custom invitation parameters must be set in a SFSObject class instance"), t3.length > 0)
                throw new o.SFSValidationError("InvitationReplyRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_INVITATION_ID, this._invitation.id), this._reqObj.putByte(t2.KEY_INVITATION_REPLY, this._reply), null != this._params && this._reqObj.putSFSObject(t2.KEY_INVITATION_PARAMS, this._params);
            } }]), t2;
          }();
          t.InvitationReplyRequest = u;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.CreateSFSGameRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(56), a = n(57), u = n(69), c = n(47), l = n(58), f = n(8), h = n(38);
          var _ = function(e2) {
            function t2(e3) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.CreateSFSGame));
              return n2._settings = e3, n2._createRoomRequest = new a.CreateRoomRequest(e3, false, null), Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_IS_PUBLIC", get: function() {
              return "gip";
            } }, { key: "KEY_MIN_PLAYERS", get: function() {
              return "gmp";
            } }, { key: "KEY_INVITED_PLAYERS", get: function() {
              return "ginp";
            } }, { key: "KEY_SEARCHABLE_ROOMS", get: function() {
              return "gsr";
            } }, { key: "KEY_PLAYER_MATCH_EXP", get: function() {
              return "gpme";
            } }, { key: "KEY_SPECTATOR_MATCH_EXP", get: function() {
              return "gsme";
            } }, { key: "KEY_INVITATION_EXPIRY", get: function() {
              return "gie";
            } }, { key: "KEY_LEAVE_ROOM", get: function() {
              return "glr";
            } }, { key: "KEY_NOTIFY_GAME_STARTED", get: function() {
              return "gns";
            } }, { key: "KEY_INVITATION_PARAMS", get: function() {
              return "ip";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              if (!(this._settings instanceof s.SFSGameSettings))
                throw new o.SFSValidationError("CreateSFSGameRequest Error", ["Room configuration must be an instance of SFSGameSettings class"]);
              var t3 = [];
              try {
                this._createRoomRequest.validate(e3);
              } catch (e4) {
                t3 = e4.getErrors();
              }
              if (this._settings.minPlayersToStartGame > this._settings.maxUsers && t3.push("Minimum number of players to start the game can't be greater than the Room's maximum number of users"), (this._settings.invitationExpiryTime < u.InviteUsersRequest.MIN_EXPIRY_TIME || this._settings.invitationExpiryTime > u.InviteUsersRequest.MAX_EXPIRY_TIME) && t3.push("Invitation expiration time value is out of range (min: " + u.InviteUsersRequest.MIN_EXPIRY_TIME + "; max: " + u.InviteUsersRequest.MAX_EXPIRY_TIME + ")"), null != this._settings.invitedPlayers && (this._settings.invitedPlayers instanceof Array ? (this._settings.invitedPlayers.length > u.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE && t3.push("Can't invite more than " + u.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE + " players from client side"), this._settings.invitedPlayers.every(function(e4) {
                return e4 instanceof c.SFSUser || e4 instanceof l.SFSBuddy;
              }) || t3.push("Each invited player must be an instance of SFSUser or SFSBuddy classes")) : t3.push("Invited players must be passed in an array")), null == this._settings.playerMatchExpression || this._settings.playerMatchExpression instanceof h.MatchExpression || t3.push("Player match expression must be an instance of MatchExpression class"), null == this._settings.spectatorMatchExpression || this._settings.spectatorMatchExpression instanceof h.MatchExpression || t3.push("Spectator match expression must be an instance of MatchExpression class"), null == this._settings.invitationParams || this._settings.invitationParams instanceof f.SFSObject || t3.push("Custom invitation parameters must be set in a SFSObject class instance"), t3.length > 0)
                throw new o.SFSValidationError("CreateSFSGameRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              if (this._createRoomRequest.execute(e3), this._reqObj = this._createRoomRequest._reqObj, this._reqObj.putBool(t2.KEY_IS_PUBLIC, this._settings.isPublic), this._reqObj.putShort(t2.KEY_MIN_PLAYERS, this._settings.minPlayersToStartGame), this._reqObj.putShort(t2.KEY_INVITATION_EXPIRY, this._settings.invitationExpiryTime), this._reqObj.putBool(t2.KEY_LEAVE_ROOM, this._settings.leaveLastJoinedRoom), this._reqObj.putBool(t2.KEY_NOTIFY_GAME_STARTED, this._settings.notifyGameStarted), null != this._settings.playerMatchExpression && this._reqObj.putSFSArray(t2.KEY_PLAYER_MATCH_EXP, this._settings.playerMatchExpression.toSFSArray()), null != this._settings.spectatorMatchExpression && this._reqObj.putSFSArray(t2.KEY_SPECTATOR_MATCH_EXP, this._settings.spectatorMatchExpression.toSFSArray()), null != this._settings.invitedPlayers) {
                var n2 = [], r2 = true, i2 = false, o2 = void 0;
                try {
                  for (var s2, a2 = this._settings.invitedPlayers[Symbol.iterator](); !(r2 = (s2 = a2.next()).done); r2 = true) {
                    var u2 = s2.value;
                    n2.push(u2.id);
                  }
                } catch (e4) {
                  i2 = true, o2 = e4;
                } finally {
                  try {
                    !r2 && a2.return && a2.return();
                  } finally {
                    if (i2)
                      throw o2;
                  }
                }
                this._reqObj.putIntArray(t2.KEY_INVITED_PLAYERS, n2);
              }
              null != this._settings.searchableRooms && this._reqObj.putUtfStringArray(t2.KEY_SEARCHABLE_ROOMS, this._settings.searchableRooms), null != this._settings.invitationParams && this._reqObj.putSFSObject(t2.KEY_INVITATION_PARAMS, this._settings.invitationParams);
            } }]), t2;
          }();
          t.CreateSFSGameRequest = _;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.BanUserRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5, s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 24;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.BanUser));
              return a._userId = e3, a._message = n2, a._banMode = r2, a._delay = o2, a._durationHours = s2, Object.seal(a), a;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_USER_ID", get: function() {
              return "u";
            } }, { key: "KEY_MESSAGE", get: function() {
              return "m";
            } }, { key: "KEY_DELAY", get: function() {
              return "d";
            } }, { key: "KEY_BAN_MODE", get: function() {
              return "b";
            } }, { key: "KEY_BAN_DURATION_HOURS", get: function() {
              return "dh";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (t3.length > 0)
                throw new o.SFSValidationError("BanUserRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_USER_ID, this._userId), this._reqObj.putInt(t2.KEY_DELAY, this._delay), this._reqObj.putInt(t2.KEY_BAN_MODE, this._banMode), this._reqObj.putInt(t2.KEY_BAN_DURATION_HOURS, this._durationHours), null != this._message && this._message.length > 0 && this._reqObj.putUtfString(t2.KEY_MESSAGE, this._message);
            } }]), t2;
          }();
          t.BanUserRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.KickUserRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1);
          var s = function(e2) {
            function t2(e3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var o2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.KickUser));
              return r2 < 0 && (r2 = 0), o2._userId = e3, o2._message = n2, o2._delay = r2, Object.seal(o2), o2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_USER_ID", get: function() {
              return "u";
            } }, { key: "KEY_MESSAGE", get: function() {
              return "m";
            } }, { key: "KEY_DELAY", get: function() {
              return "d";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (t3.length > 0)
                throw new o.SFSValidationError("KickUserRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putInt(t2.KEY_USER_ID, this._userId), this._reqObj.putInt(t2.KEY_DELAY, this._delay), null != this._message && this._message.length > 0 && this._reqObj.putUtfString(t2.KEY_MESSAGE, this._message);
            } }]), t2;
          }();
          t.KickUserRequest = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.LeaveRoomRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(1), s = n(9);
          var a = function(e2) {
            function t2() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.LeaveRoom));
              return n2._room = e3, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_ROOM_ID", get: function() {
              return "r";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              var t3 = [];
              if (e3.getJoinedRooms().length < 1 && t3.push("You are not joined in any Room"), null == this._room || this._room instanceof s.SFSRoom || t3.push("Room must be an instance of SFSRoom class"), t3.length > 0)
                throw new o.SFSValidationError("LeaveRoomRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              null != this._room && this._reqObj.putInt(t2.KEY_ROOM_ID, this._room.id);
            } }]), t2;
          }();
          t.LeaveRoomRequest = a;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.QuickJoinOrCreateRoomRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(57), s = n(1), a = n(9), u = n(38);
          var c = function(e2) {
            function t2(e3, n2, r2) {
              var s2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.QuickJoinOrCreateRoom));
              return a2._matchExpression = e3, a2._groupList = n2, a2._settings = r2, a2._roomToLeave = s2, a2._createRoomRequest = new o.CreateRoomRequest(r2, false, null), Object.seal(a2), a2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_MATCH_EXPRESSION", get: function() {
              return "me";
            } }, { key: "KEY_GROUP_LIST", get: function() {
              return "gl";
            } }, { key: "KEY_ROOM_SETTINGS", get: function() {
              return "rs";
            } }, { key: "KEY_ROOM_TO_LEAVE", get: function() {
              return "tl";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
              if (!(this._matchExpression instanceof u.MatchExpression))
                throw new s.SFSValidationError("QuickJoinOrCreateRoomRequest Error", ["Match expression must be an instance of MatchExpression class"]);
              var t3 = [];
              (null == this._groupList || this._groupList.length < 1) && t3.push("Missing list of Group names where to search the game to join"), null == this._roomToLeave || this._roomToLeave instanceof a.SFSRoom || t3.push("Room to leave must be an instance of SFSRoom class");
              try {
                this._createRoomRequest.validate(e3);
              } catch (e4) {
                t3 = t3.concat(e4.errors);
              }
              if (t3.length > 0)
                throw new s.SFSValidationError("QuickJoinOrCreateRoomRequest Error", t3);
            } }, { key: "execute", value: function(e3) {
              this._createRoomRequest.execute(e3);
              var n2 = this._createRoomRequest.getMessage().content;
              this._reqObj.putSFSArray(t2.KEY_MATCH_EXPRESSION, this._matchExpression.toSFSArray()), this._reqObj.putUtfStringArray(t2.KEY_GROUP_LIST, this._groupList), this._reqObj.putSFSObject(t2.KEY_ROOM_SETTINGS, n2), null != this._roomToLeave && this._reqObj.putInt(t2.KEY_ROOM_TO_LEAVE, this._roomToLeave.id);
            } }]), t2;
          }();
          t.QuickJoinOrCreateRoomRequest = c;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.PasswordUtil = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(71);
          var o = function() {
            function e2() {
              throw function(e3, t2) {
                if (!(e3 instanceof t2))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), "Class PasswordUtil cannot be instantiated. Please check the documentation for more details on its usage";
            }
            __name(e2, "e");
            return r(e2, null, [{ key: "md5Password", value: function(e3) {
              return new i.MD5().hex_md5(e3);
            } }]), e2;
          }();
          t.PasswordUtil = o;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = Object.freeze({ NAME: "${N}", GROUP_ID: "${G}", MAX_USERS: "${MXU}", MAX_SPECTATORS: "${MXS}", USER_COUNT: "${UC}", SPECTATOR_COUNT: "${SC}", IS_GAME: "${ISG}", IS_PRIVATE: "${ISP}", HAS_FREE_PLAYER_SLOTS: "${HFP}", IS_TYPE_SFSGAME: "${IST}", IS_TYPE_MMO: "${ISM}", IS_TYPE_DEFAULT: "${ISD}" }), i = Object.freeze({ NAME: "${N}", IS_PLAYER: "${ISP}", IS_SPECTATOR: "${ISS}", IS_NPC: "${ISN}", PRIVILEGE_ID: "${PRID}", IS_IN_ANY_ROOM: "${IAR}" });
          t.RoomProperties = r, t.UserProperties = i;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }();
          function i(e2, t2) {
            if (!e2)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
          }
          __name(i, "i");
          function o(e2, t2) {
            if ("function" != typeof t2 && null !== t2)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
            e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
          }
          __name(o, "o");
          function s(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(s, "s");
          var a = function() {
            function e2(t2, n2) {
              s(this, e2), this._type = t2, this._symbol = n2, Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "type", get: function() {
              return this._type;
            } }, { key: "symbol", get: function() {
              return this._symbol;
            } }]), e2;
          }(), u = function(e2) {
            function t2(e3) {
              s(this, t2);
              var n2 = i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, 0, e3));
              return Object.freeze(n2), n2;
            }
            __name(t2, "t");
            return o(t2, a), r(t2, null, [{ key: "EQUALS", get: function() {
              return new t2("==");
            } }, { key: "NOT_EQUALS", get: function() {
              return new t2("!=");
            } }]), t2;
          }(), c = function(e2) {
            function t2(e3) {
              s(this, t2);
              var n2 = i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, 1, e3));
              return Object.freeze(n2), n2;
            }
            __name(t2, "t");
            return o(t2, a), r(t2, null, [{ key: "EQUALS", get: function() {
              return new t2("==");
            } }, { key: "NOT_EQUALS", get: function() {
              return new t2("!=");
            } }, { key: "GREATER_THAN", get: function() {
              return new t2(">");
            } }, { key: "GREATER_THAN_OR_EQUAL_TO", get: function() {
              return new t2(">=");
            } }, { key: "LESS_THAN", get: function() {
              return new t2("<");
            } }, { key: "LESS_THAN_OR_EQUAL_TO", get: function() {
              return new t2("<=");
            } }]), t2;
          }(), l = function(e2) {
            function t2(e3) {
              s(this, t2);
              var n2 = i(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, 2, e3));
              return Object.freeze(n2), n2;
            }
            __name(t2, "t");
            return o(t2, a), r(t2, null, [{ key: "EQUALS", get: function() {
              return new t2("==");
            } }, { key: "NOT_EQUALS", get: function() {
              return new t2("!=");
            } }, { key: "CONTAINS", get: function() {
              return new t2("contains");
            } }, { key: "STARTS_WITH", get: function() {
              return new t2("startsWith");
            } }, { key: "ENDS_WITH", get: function() {
              return new t2("endsWith");
            } }]), t2;
          }();
          t.BoolMatch = u, t.NumberMatch = c, t.StringMatch = l;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.PingPongRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2);
          var o = function(e2) {
            function t2() {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var e3 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.PingPong));
              return Object.seal(e3), e3;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, [{ key: "validate", value: function(e3) {
            } }, { key: "execute", value: function(e3) {
            } }]), t2;
          }();
          t.PingPongRequest = o;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.LagMonitor = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(162);
          var o = function() {
            function e2(t2) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._sfs = t2, this._valueQueue = [], this._interval = n2, this._queueSize = r2, this._thread = null, this._lastReqTime = -1;
            }
            __name(e2, "e");
            return r(e2, [{ key: "start", value: function() {
              this.isRunning || null == this._sfs || (this._thread = setInterval(this._threadRunner, 1e3 * this._interval, this));
            } }, { key: "stop", value: function() {
              this.isRunning && (clearInterval(this._thread), this._thread = null, this._valueQueue = []);
            } }, { key: "destroy", value: function() {
              this.stop(), this._sfs = null;
            } }, { key: "getLastPingTime", value: function() {
              return this._valueQueue.length > 0 ? this._valueQueue[this._valueQueue.length - 1] : 0;
            } }, { key: "_threadRunner", value: function(e3) {
              e3._lastReqTime = (/* @__PURE__ */ new Date()).getTime(), e3._sfs.send(new i.PingPongRequest());
            } }, { key: "_onPingPong", value: function() {
              var e3 = (/* @__PURE__ */ new Date()).getTime() - this._lastReqTime;
              return this._valueQueue.length >= this._queueSize && this._valueQueue.shift(), this._valueQueue.push(e3), this._getAveragePingTime();
            } }, { key: "_getAveragePingTime", value: function() {
              if (0 == this._valueQueue.length)
                return 0;
              for (var e3 = 0, t2 = 0; t2 < this._valueQueue.length; t2++)
                e3 += this._valueQueue[t2];
              return e3 / this._valueQueue.length;
            } }, { key: "isRunning", get: function() {
              return null != this._thread;
            } }]), e2;
          }();
          t.LagMonitor = o;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.HandshakeRequest = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2);
          var o = function(e2) {
            function t2(e3, n2) {
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var r2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, i.Requests.Handshake));
              return r2._apiVersion = e3, r2._clientDetails = n2, Object.seal(r2), r2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, i.BaseRequest), r(t2, null, [{ key: "KEY_SESSION_TOKEN", get: function() {
              return "tk";
            } }, { key: "KEY_API", get: function() {
              return "api";
            } }, { key: "KEY_COMPRESSION_THRESHOLD", get: function() {
              return "ct";
            } }, { key: "KEY_CLIENT_TYPE", get: function() {
              return "cl";
            } }, { key: "KEY_MAX_MESSAGE_SIZE", get: function() {
              return "ms";
            } }]), r(t2, [{ key: "validate", value: function(e3) {
            } }, { key: "execute", value: function(e3) {
              this._reqObj.putUtfString(t2.KEY_API, this._apiVersion), this._reqObj.putUtfString(t2.KEY_CLIENT_TYPE, this._clientDetails);
            } }]), t2;
          }();
          t.HandshakeRequest = o;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SFSBuddyManager = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(46);
          var o = function() {
            function e2(t2) {
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._sfs = t2, this._buddiesByName = /* @__PURE__ */ new Map(), this._myVariables = /* @__PURE__ */ new Map(), this._inited = false, this._buddyStates = /* @__PURE__ */ new Set(), Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "containsBuddy", value: function(e3) {
              return this._buddiesByName.has(e3);
            } }, { key: "getBuddyById", value: function(e3) {
              return this.getBuddyList().find(function(t2) {
                return t2.id === e3;
              });
            } }, { key: "getBuddyByName", value: function(e3) {
              return this._buddiesByName.get(e3);
            } }, { key: "getBuddyByNickName", value: function(e3) {
              return this.getBuddyList().find(function(t2) {
                return t2.nickName === e3;
              });
            } }, { key: "getOfflineBuddies", value: function() {
              return this.getBuddyList().filter(function(e3) {
                return !e3.isOnline;
              });
            } }, { key: "getOnlineBuddies", value: function() {
              return this.getBuddyList().filter(function(e3) {
                return e3.isOnline;
              });
            } }, { key: "getBuddyList", value: function() {
              return Array.from(this._buddiesByName.values());
            } }, { key: "getMyVariable", value: function(e3) {
              return this._myVariables.get(e3);
            } }, { key: "getMyVariables", value: function() {
              return Array.from(this._myVariables.values());
            } }, { key: "getMyOnlineState", value: function() {
              if (!this._inited)
                return false;
              var e3 = this.getMyVariable(i.ReservedBuddyVariables.BV_ONLINE);
              return null == e3 || e3.value;
            } }, { key: "getMyNickName", value: function() {
              var e3 = this.getMyVariable(i.ReservedBuddyVariables.BV_NICKNAME);
              return null != e3 ? e3.value : null;
            } }, { key: "getMyState", value: function() {
              var e3 = this.getMyVariable(i.ReservedBuddyVariables.BV_STATE);
              return null != e3 ? e3.value : null;
            } }, { key: "getBuddyStates", value: function() {
              return Array.from(this._buddyStates.values());
            } }, { key: "_setInited", value: function() {
              this._inited = true;
            } }, { key: "_addBuddy", value: function(e3) {
              this._buddiesByName.set(e3.name, e3);
            } }, { key: "_clearAll", value: function() {
              this._buddiesByName.clear();
            } }, { key: "_removeBuddyById", value: function(e3) {
              var t2 = this.getBuddyById(e3);
              return null != t2 && this._buddiesByName.delete(t2.name), t2;
            } }, { key: "_removeBuddyByName", value: function(e3) {
              var t2 = this.getBuddyByName(e3);
              return null != t2 && this._buddiesByName.delete(e3), t2;
            } }, { key: "_setMyVariables", value: function(e3) {
              var t2 = true, n2 = false, r2 = void 0;
              try {
                for (var i2, o2 = e3[Symbol.iterator](); !(t2 = (i2 = o2.next()).done); t2 = true) {
                  var s = i2.value;
                  this._setMyVariable(s);
                }
              } catch (e4) {
                n2 = true, r2 = e4;
              } finally {
                try {
                  !t2 && o2.return && o2.return();
                } finally {
                  if (n2)
                    throw r2;
                }
              }
            } }, { key: "_setMyVariable", value: function(e3) {
              e3.isNull ? this._myVariables.delete(e3.name) : this._myVariables.set(e3.name, e3);
            } }, { key: "_setMyOnlineState", value: function(e3) {
              this._setMyVariable(new i.SFSBuddyVariable(i.ReservedBuddyVariables.BV_ONLINE, e3));
            } }, { key: "_setMyNickName", value: function(e3) {
              this._setMyVariable(new i.SFSBuddyVariable(i.ReservedBuddyVariables.BV_NICKNAME, e3));
            } }, { key: "_setMyState", value: function(e3) {
              this._setMyVariable(new i.SFSBuddyVariable(i.ReservedBuddyVariables.BV_STATE, e3));
            } }, { key: "_setBuddyStates", value: function(e3) {
              this._buddyStates = new Set(e3);
            } }, { key: "isInited", get: function() {
              return this._inited;
            } }]), e2;
          }();
          t.SFSBuddyManager = o;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SFSRoomManager = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(9);
          var o = function() {
            function e2(t2) {
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._sfs = t2, this._groups = /* @__PURE__ */ new Set(), this._roomsById = /* @__PURE__ */ new Map(), this._roomsByName = /* @__PURE__ */ new Map(), Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "getRoomGroups", value: function() {
              return Array.from(this._groups);
            } }, { key: "containsGroup", value: function(e3) {
              return this._groups.has(e3);
            } }, { key: "containsRoom", value: function(e3) {
              return "number" == typeof e3 ? this._roomsById.has(e3) : this._roomsByName.has(e3);
            } }, { key: "containsRoomInGroup", value: function(e3, t2) {
              var n2 = this.getRoomListFromGroup(t2);
              return "number" == typeof e3 ? n2.some(function(t3) {
                return t3.id === e3;
              }) : n2.some(function(t3) {
                return t3.name === e3;
              });
            } }, { key: "getRoomById", value: function(e3) {
              return this._roomsById.get(e3);
            } }, { key: "getRoomByName", value: function(e3) {
              return this._roomsByName.get(e3);
            } }, { key: "getRoomList", value: function() {
              return Array.from(this._roomsById.values());
            } }, { key: "getRoomCount", value: function() {
              return this._roomsById.size;
            } }, { key: "getRoomListFromGroup", value: function(e3) {
              return this.getRoomList().filter(function(t2) {
                return t2.groupId === e3;
              });
            } }, { key: "getJoinedRooms", value: function() {
              return this.getRoomList().filter(function(e3) {
                return e3.isJoined;
              });
            } }, { key: "getUserRooms", value: function(e3) {
              return this.getRoomList().filter(function(t2) {
                return t2.containsUser(e3);
              });
            } }, { key: "_addRoom", value: function(e3) {
              var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              this._roomsById.set(e3.id, e3), this._roomsByName.set(e3.name, e3), e3._setRoomManager(this), t2 ? this._addGroup(e3.groupId) : e3._isManaged = false;
            } }, { key: "_replaceRoom", value: function(e3) {
              var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = this.getRoomById(e3.id);
              return null != n2 ? (n2._merge(e3), n2) : (this._addRoom(e3, t2), e3);
            } }, { key: "_removeRoom", value: function(e3) {
              this._roomsById.delete(e3.id), this._roomsByName.delete(e3.name);
            } }, { key: "_removeRoomById", value: function(e3) {
              var t2 = this.getRoomById(e3);
              null != t2 && this._removeRoom(t2);
            } }, { key: "_removeRoomByName", value: function(e3) {
              var t2 = this.getRoomByName(e3);
              null != t2 && this._removeRoom(t2);
            } }, { key: "_changeRoomName", value: function(e3, t2) {
              var n2 = e3.name;
              e3._name = t2, this._roomsByName.set(t2, e3), this._roomsByName.delete(n2);
            } }, { key: "_changeRoomPasswordState", value: function(e3, t2) {
              e3._isPasswordProtected = t2;
            } }, { key: "_changeRoomCapacity", value: function(e3, t2, n2) {
              e3._maxUsers = t2, e3._maxSpectators = n2;
            } }, { key: "_addGroup", value: function(e3) {
              this.containsGroup(e3) || this._groups.add(e3);
            } }, { key: "_removeGroup", value: function(e3) {
              this._groups.delete(e3);
              var t2 = this.getRoomListFromGroup(e3), n2 = true, r2 = false, i2 = void 0;
              try {
                for (var o2, s = t2[Symbol.iterator](); !(n2 = (o2 = s.next()).done); n2 = true) {
                  var a = o2.value;
                  a.isJoined ? a._isManaged = false : this._removeRoom(a);
                }
              } catch (e4) {
                r2 = true, i2 = e4;
              } finally {
                try {
                  !n2 && s.return && s.return();
                } finally {
                  if (r2)
                    throw i2;
                }
              }
            } }, { key: "_removeUser", value: function(e3) {
              var t2 = true, n2 = false, r2 = void 0;
              try {
                for (var o2, s = this.getUserRooms(e3)[Symbol.iterator](); !(t2 = (o2 = s.next()).done); t2 = true) {
                  var a = o2.value;
                  a instanceof i.MMORoom || a._removeUser(e3);
                }
              } catch (e4) {
                n2 = true, r2 = e4;
              } finally {
                try {
                  !t2 && s.return && s.return();
                } finally {
                  if (n2)
                    throw r2;
                }
              }
            } }]), e2;
          }();
          t.SFSRoomManager = o;
        }, function(e, t) {
          (function() {
            "use strict";
            function e2(e3) {
              throw e3;
            }
            __name(e2, "e");
            var t2 = void 0, n = true, r = this;
            function i(e3, n2) {
              var i2, o2 = e3.split("."), s2 = r;
              !(o2[0] in s2) && s2.execScript && s2.execScript("var " + o2[0]);
              for (; o2.length && (i2 = o2.shift()); )
                o2.length || n2 === t2 ? s2 = s2[i2] ? s2[i2] : s2[i2] = {} : s2[i2] = n2;
            }
            __name(i, "i");
            var o = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;
            function s(t3, n2) {
              this.index = "number" == typeof n2 ? n2 : 0, this.i = 0, this.buffer = t3 instanceof (o ? Uint8Array : Array) ? t3 : new (o ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && e2(Error("invalid index")), this.buffer.length <= this.index && this.f();
            }
            __name(s, "s");
            s.prototype.f = function() {
              var e3, t3 = this.buffer, n2 = t3.length, r2 = new (o ? Uint8Array : Array)(n2 << 1);
              if (o)
                r2.set(t3);
              else
                for (e3 = 0; e3 < n2; ++e3)
                  r2[e3] = t3[e3];
              return this.buffer = r2;
            }, s.prototype.d = function(e3, t3, n2) {
              var r2, i2 = this.buffer, o2 = this.index, s2 = this.i, a2 = i2[o2];
              if (n2 && 1 < t3 && (e3 = 8 < t3 ? (h[255 & e3] << 24 | h[e3 >>> 8 & 255] << 16 | h[e3 >>> 16 & 255] << 8 | h[e3 >>> 24 & 255]) >> 32 - t3 : h[e3] >> 8 - t3), 8 > t3 + s2)
                a2 = a2 << t3 | e3, s2 += t3;
              else
                for (r2 = 0; r2 < t3; ++r2)
                  a2 = a2 << 1 | e3 >> t3 - r2 - 1 & 1, 8 == ++s2 && (s2 = 0, i2[o2++] = h[a2], a2 = 0, o2 === i2.length && (i2 = this.f()));
              i2[o2] = a2, this.buffer = i2, this.i = s2, this.index = o2;
            }, s.prototype.finish = function() {
              var e3, t3 = this.buffer, n2 = this.index;
              return 0 < this.i && (t3[n2] <<= 8 - this.i, t3[n2] = h[t3[n2]], n2++), o ? e3 = t3.subarray(0, n2) : (t3.length = n2, e3 = t3), e3;
            };
            var a, u = new (o ? Uint8Array : Array)(256);
            for (a = 0; 256 > a; ++a) {
              for (var c = f = a, l = 7, f = f >>> 1; f; f >>>= 1)
                c <<= 1, c |= 1 & f, --l;
              u[a] = (c << l & 255) >>> 0;
            }
            var h = u;
            function _(e3) {
              this.buffer = new (o ? Uint16Array : Array)(2 * e3), this.length = 0;
            }
            __name(_, "_");
            function y(e3) {
              var t3, n2, r2, i2, s2, a2, u2, c2, l2, f2, h2 = e3.length, _2 = 0, y2 = Number.POSITIVE_INFINITY;
              for (c2 = 0; c2 < h2; ++c2)
                e3[c2] > _2 && (_2 = e3[c2]), e3[c2] < y2 && (y2 = e3[c2]);
              for (t3 = 1 << _2, n2 = new (o ? Uint32Array : Array)(t3), r2 = 1, i2 = 0, s2 = 2; r2 <= _2; ) {
                for (c2 = 0; c2 < h2; ++c2)
                  if (e3[c2] === r2) {
                    for (a2 = 0, u2 = i2, l2 = 0; l2 < r2; ++l2)
                      a2 = a2 << 1 | 1 & u2, u2 >>= 1;
                    for (f2 = r2 << 16 | c2, l2 = a2; l2 < t3; l2 += s2)
                      n2[l2] = f2;
                    ++i2;
                  }
                ++r2, i2 <<= 1, s2 <<= 1;
              }
              return [n2, _2, y2];
            }
            __name(y, "y");
            function p(e3, t3) {
              this.h = g, this.w = 0, this.input = o && e3 instanceof Array ? new Uint8Array(e3) : e3, this.b = 0, t3 && (t3.lazy && (this.w = t3.lazy), "number" == typeof t3.compressionType && (this.h = t3.compressionType), t3.outputBuffer && (this.a = o && t3.outputBuffer instanceof Array ? new Uint8Array(t3.outputBuffer) : t3.outputBuffer), "number" == typeof t3.outputIndex && (this.b = t3.outputIndex)), this.a || (this.a = new (o ? Uint8Array : Array)(32768));
            }
            __name(p, "p");
            _.prototype.getParent = function(e3) {
              return 2 * ((e3 - 2) / 4 | 0);
            }, _.prototype.push = function(e3, t3) {
              var n2, r2, i2, o2 = this.buffer;
              for (n2 = this.length, o2[this.length++] = t3, o2[this.length++] = e3; 0 < n2 && (r2 = this.getParent(n2), o2[n2] > o2[r2]); )
                i2 = o2[n2], o2[n2] = o2[r2], o2[r2] = i2, i2 = o2[n2 + 1], o2[n2 + 1] = o2[r2 + 1], o2[r2 + 1] = i2, n2 = r2;
              return this.length;
            }, _.prototype.pop = function() {
              var e3, t3, n2, r2, i2, o2 = this.buffer;
              for (t3 = o2[0], e3 = o2[1], this.length -= 2, o2[0] = o2[this.length], o2[1] = o2[this.length + 1], i2 = 0; !((r2 = 2 * i2 + 2) >= this.length) && (r2 + 2 < this.length && o2[r2 + 2] > o2[r2] && (r2 += 2), o2[r2] > o2[i2]); )
                n2 = o2[i2], o2[i2] = o2[r2], o2[r2] = n2, n2 = o2[i2 + 1], o2[i2 + 1] = o2[r2 + 1], o2[r2 + 1] = n2, i2 = r2;
              return { index: e3, value: t3, length: this.length };
            };
            var d, g = 2, v = { NONE: 0, r: 1, k: g, O: 3 }, b = [];
            for (d = 0; 288 > d; d++)
              switch (n) {
                case 143 >= d:
                  b.push([d + 48, 8]);
                  break;
                case 255 >= d:
                  b.push([d - 144 + 400, 9]);
                  break;
                case 279 >= d:
                  b.push([d - 256 + 0, 7]);
                  break;
                case 287 >= d:
                  b.push([d - 280 + 192, 8]);
                  break;
                default:
                  e2("invalid literal: " + d);
              }
            p.prototype.j = function() {
              var r2, i2, a2, u2, c2 = this.input;
              switch (this.h) {
                case 0:
                  for (a2 = 0, u2 = c2.length; a2 < u2; ) {
                    var l2, f2, h2, _2 = i2 = o ? c2.subarray(a2, a2 + 65535) : c2.slice(a2, a2 + 65535), y2 = (a2 += i2.length) === u2, p2 = t2, d2 = t2, v2 = this.a, m2 = this.b;
                    if (o) {
                      for (v2 = new Uint8Array(this.a.buffer); v2.length <= m2 + _2.length + 5; )
                        v2 = new Uint8Array(v2.length << 1);
                      v2.set(this.a);
                    }
                    if (l2 = y2 ? 1 : 0, v2[m2++] = 0 | l2, h2 = 65536 + ~(f2 = _2.length) & 65535, v2[m2++] = 255 & f2, v2[m2++] = f2 >>> 8 & 255, v2[m2++] = 255 & h2, v2[m2++] = h2 >>> 8 & 255, o)
                      v2.set(_2, m2), m2 += _2.length, v2 = v2.subarray(0, m2);
                    else {
                      for (p2 = 0, d2 = _2.length; p2 < d2; ++p2)
                        v2[m2++] = _2[p2];
                      v2.length = m2;
                    }
                    this.b = m2, this.a = v2;
                  }
                  break;
                case 1:
                  var S2 = new s(o ? new Uint8Array(this.a.buffer) : this.a, this.b);
                  S2.d(1, 1, n), S2.d(1, 2, n);
                  var R2, A2, I2, M2 = E(this, c2);
                  for (R2 = 0, A2 = M2.length; R2 < A2; R2++)
                    if (I2 = M2[R2], s.prototype.d.apply(S2, b[I2]), 256 < I2)
                      S2.d(M2[++R2], M2[++R2], n), S2.d(M2[++R2], 5), S2.d(M2[++R2], M2[++R2], n);
                    else if (256 === I2)
                      break;
                  this.a = S2.finish(), this.b = this.a.length;
                  break;
                case g:
                  var T2, k2, P2, F2, j2, U2, N2, B2, L2, D2, Y2, C2, x2, q2, V2, K2 = new s(o ? new Uint8Array(this.a.buffer) : this.a, this.b), G2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z2 = Array(19);
                  for (T2 = g, K2.d(1, 1, n), K2.d(T2, 2, n), k2 = E(this, c2), N2 = w(U2 = O(this.M, 15)), L2 = w(B2 = O(this.L, 7)), P2 = 286; 257 < P2 && 0 === U2[P2 - 1]; P2--)
                    ;
                  for (F2 = 30; 1 < F2 && 0 === B2[F2 - 1]; F2--)
                    ;
                  var H2, J2, W2, X2, Q2, Z2, $2 = P2, ee2 = F2, te2 = new (o ? Uint32Array : Array)($2 + ee2), ne2 = new (o ? Uint32Array : Array)(316), re = new (o ? Uint8Array : Array)(19);
                  for (H2 = J2 = 0; H2 < $2; H2++)
                    te2[J2++] = U2[H2];
                  for (H2 = 0; H2 < ee2; H2++)
                    te2[J2++] = B2[H2];
                  if (!o)
                    for (H2 = 0, X2 = re.length; H2 < X2; ++H2)
                      re[H2] = 0;
                  for (H2 = Q2 = 0, X2 = te2.length; H2 < X2; H2 += J2) {
                    for (J2 = 1; H2 + J2 < X2 && te2[H2 + J2] === te2[H2]; ++J2)
                      ;
                    if (W2 = J2, 0 === te2[H2])
                      if (3 > W2)
                        for (; 0 < W2--; )
                          ne2[Q2++] = 0, re[0]++;
                      else
                        for (; 0 < W2; )
                          (Z2 = 138 > W2 ? W2 : 138) > W2 - 3 && Z2 < W2 && (Z2 = W2 - 3), 10 >= Z2 ? (ne2[Q2++] = 17, ne2[Q2++] = Z2 - 3, re[17]++) : (ne2[Q2++] = 18, ne2[Q2++] = Z2 - 11, re[18]++), W2 -= Z2;
                    else if (ne2[Q2++] = te2[H2], re[te2[H2]]++, 3 > --W2)
                      for (; 0 < W2--; )
                        ne2[Q2++] = te2[H2], re[te2[H2]]++;
                    else
                      for (; 0 < W2; )
                        (Z2 = 6 > W2 ? W2 : 6) > W2 - 3 && Z2 < W2 && (Z2 = W2 - 3), ne2[Q2++] = 16, ne2[Q2++] = Z2 - 3, re[16]++, W2 -= Z2;
                  }
                  for (r2 = o ? ne2.subarray(0, Q2) : ne2.slice(0, Q2), D2 = O(re, 7), q2 = 0; 19 > q2; q2++)
                    z2[q2] = D2[G2[q2]];
                  for (j2 = 19; 4 < j2 && 0 === z2[j2 - 1]; j2--)
                    ;
                  for (Y2 = w(D2), K2.d(P2 - 257, 5, n), K2.d(F2 - 1, 5, n), K2.d(j2 - 4, 4, n), q2 = 0; q2 < j2; q2++)
                    K2.d(z2[q2], 3, n);
                  for (q2 = 0, V2 = r2.length; q2 < V2; q2++)
                    if (C2 = r2[q2], K2.d(Y2[C2], D2[C2], n), 16 <= C2) {
                      switch (q2++, C2) {
                        case 16:
                          x2 = 2;
                          break;
                        case 17:
                          x2 = 3;
                          break;
                        case 18:
                          x2 = 7;
                          break;
                        default:
                          e2("invalid code: " + C2);
                      }
                      K2.d(r2[q2], x2, n);
                    }
                  var ie, oe, se, ae, ue, ce, le, fe, he = [N2, U2], _e = [L2, B2];
                  for (ue = he[0], ce = he[1], le = _e[0], fe = _e[1], ie = 0, oe = k2.length; ie < oe; ++ie)
                    if (se = k2[ie], K2.d(ue[se], ce[se], n), 256 < se)
                      K2.d(k2[++ie], k2[++ie], n), ae = k2[++ie], K2.d(le[ae], fe[ae], n), K2.d(k2[++ie], k2[++ie], n);
                    else if (256 === se)
                      break;
                  this.a = K2.finish(), this.b = this.a.length;
                  break;
                default:
                  e2("invalid compression type");
              }
              return this.a;
            };
            var m = function() {
              function t3(t4) {
                switch (n) {
                  case 3 === t4:
                    return [257, t4 - 3, 0];
                  case 4 === t4:
                    return [258, t4 - 4, 0];
                  case 5 === t4:
                    return [259, t4 - 5, 0];
                  case 6 === t4:
                    return [260, t4 - 6, 0];
                  case 7 === t4:
                    return [261, t4 - 7, 0];
                  case 8 === t4:
                    return [262, t4 - 8, 0];
                  case 9 === t4:
                    return [263, t4 - 9, 0];
                  case 10 === t4:
                    return [264, t4 - 10, 0];
                  case 12 >= t4:
                    return [265, t4 - 11, 1];
                  case 14 >= t4:
                    return [266, t4 - 13, 1];
                  case 16 >= t4:
                    return [267, t4 - 15, 1];
                  case 18 >= t4:
                    return [268, t4 - 17, 1];
                  case 22 >= t4:
                    return [269, t4 - 19, 2];
                  case 26 >= t4:
                    return [270, t4 - 23, 2];
                  case 30 >= t4:
                    return [271, t4 - 27, 2];
                  case 34 >= t4:
                    return [272, t4 - 31, 2];
                  case 42 >= t4:
                    return [273, t4 - 35, 3];
                  case 50 >= t4:
                    return [274, t4 - 43, 3];
                  case 58 >= t4:
                    return [275, t4 - 51, 3];
                  case 66 >= t4:
                    return [276, t4 - 59, 3];
                  case 82 >= t4:
                    return [277, t4 - 67, 4];
                  case 98 >= t4:
                    return [278, t4 - 83, 4];
                  case 114 >= t4:
                    return [279, t4 - 99, 4];
                  case 130 >= t4:
                    return [280, t4 - 115, 4];
                  case 162 >= t4:
                    return [281, t4 - 131, 5];
                  case 194 >= t4:
                    return [282, t4 - 163, 5];
                  case 226 >= t4:
                    return [283, t4 - 195, 5];
                  case 257 >= t4:
                    return [284, t4 - 227, 5];
                  case 258 === t4:
                    return [285, t4 - 258, 0];
                  default:
                    e2("invalid length: " + t4);
                }
              }
              __name(t3, "t");
              var r2, i2, o2 = [];
              for (r2 = 3; 258 >= r2; r2++)
                i2 = t3(r2), o2[r2] = i2[2] << 24 | i2[1] << 16 | i2[0];
              return o2;
            }(), S = o ? new Uint32Array(m) : m;
            function E(r2, i2) {
              function s2(t3, r3) {
                var i3, o2, s3, a3, u3 = t3.H, c3 = [], l3 = 0;
                switch (i3 = S[t3.length], c3[l3++] = 65535 & i3, c3[l3++] = i3 >> 16 & 255, c3[l3++] = i3 >> 24, n) {
                  case 1 === u3:
                    o2 = [0, u3 - 1, 0];
                    break;
                  case 2 === u3:
                    o2 = [1, u3 - 2, 0];
                    break;
                  case 3 === u3:
                    o2 = [2, u3 - 3, 0];
                    break;
                  case 4 === u3:
                    o2 = [3, u3 - 4, 0];
                    break;
                  case 6 >= u3:
                    o2 = [4, u3 - 5, 1];
                    break;
                  case 8 >= u3:
                    o2 = [5, u3 - 7, 1];
                    break;
                  case 12 >= u3:
                    o2 = [6, u3 - 9, 2];
                    break;
                  case 16 >= u3:
                    o2 = [7, u3 - 13, 2];
                    break;
                  case 24 >= u3:
                    o2 = [8, u3 - 17, 3];
                    break;
                  case 32 >= u3:
                    o2 = [9, u3 - 25, 3];
                    break;
                  case 48 >= u3:
                    o2 = [10, u3 - 33, 4];
                    break;
                  case 64 >= u3:
                    o2 = [11, u3 - 49, 4];
                    break;
                  case 96 >= u3:
                    o2 = [12, u3 - 65, 5];
                    break;
                  case 128 >= u3:
                    o2 = [13, u3 - 97, 5];
                    break;
                  case 192 >= u3:
                    o2 = [14, u3 - 129, 6];
                    break;
                  case 256 >= u3:
                    o2 = [15, u3 - 193, 6];
                    break;
                  case 384 >= u3:
                    o2 = [16, u3 - 257, 7];
                    break;
                  case 512 >= u3:
                    o2 = [17, u3 - 385, 7];
                    break;
                  case 768 >= u3:
                    o2 = [18, u3 - 513, 8];
                    break;
                  case 1024 >= u3:
                    o2 = [19, u3 - 769, 8];
                    break;
                  case 1536 >= u3:
                    o2 = [20, u3 - 1025, 9];
                    break;
                  case 2048 >= u3:
                    o2 = [21, u3 - 1537, 9];
                    break;
                  case 3072 >= u3:
                    o2 = [22, u3 - 2049, 10];
                    break;
                  case 4096 >= u3:
                    o2 = [23, u3 - 3073, 10];
                    break;
                  case 6144 >= u3:
                    o2 = [24, u3 - 4097, 11];
                    break;
                  case 8192 >= u3:
                    o2 = [25, u3 - 6145, 11];
                    break;
                  case 12288 >= u3:
                    o2 = [26, u3 - 8193, 12];
                    break;
                  case 16384 >= u3:
                    o2 = [27, u3 - 12289, 12];
                    break;
                  case 24576 >= u3:
                    o2 = [28, u3 - 16385, 13];
                    break;
                  case 32768 >= u3:
                    o2 = [29, u3 - 24577, 13];
                    break;
                  default:
                    e2("invalid distance");
                }
                for (i3 = o2, c3[l3++] = i3[0], c3[l3++] = i3[1], c3[l3++] = i3[2], s3 = 0, a3 = c3.length; s3 < a3; ++s3)
                  g2[v2++] = c3[s3];
                m2[c3[0]]++, E2[c3[3]]++, b2 = t3.length + r3 - 1, y2 = null;
              }
              __name(s2, "s");
              var a2, u2, c2, l2, f2, h2, _2, y2, p2, d2 = {}, g2 = o ? new Uint16Array(2 * i2.length) : [], v2 = 0, b2 = 0, m2 = new (o ? Uint32Array : Array)(286), E2 = new (o ? Uint32Array : Array)(30), O2 = r2.w;
              if (!o) {
                for (c2 = 0; 285 >= c2; )
                  m2[c2++] = 0;
                for (c2 = 0; 29 >= c2; )
                  E2[c2++] = 0;
              }
              for (m2[256] = 1, a2 = 0, u2 = i2.length; a2 < u2; ++a2) {
                for (c2 = f2 = 0, l2 = 3; c2 < l2 && a2 + c2 !== u2; ++c2)
                  f2 = f2 << 8 | i2[a2 + c2];
                if (d2[f2] === t2 && (d2[f2] = []), h2 = d2[f2], !(0 < b2--)) {
                  for (; 0 < h2.length && 32768 < a2 - h2[0]; )
                    h2.shift();
                  if (a2 + 3 >= u2) {
                    for (y2 && s2(y2, -1), c2 = 0, l2 = u2 - a2; c2 < l2; ++c2)
                      p2 = i2[a2 + c2], g2[v2++] = p2, ++m2[p2];
                    break;
                  }
                  0 < h2.length ? (_2 = R(i2, a2, h2), y2 ? y2.length < _2.length ? (p2 = i2[a2 - 1], g2[v2++] = p2, ++m2[p2], s2(_2, 0)) : s2(y2, -1) : _2.length < O2 ? y2 = _2 : s2(_2, 0)) : y2 ? s2(y2, -1) : (p2 = i2[a2], g2[v2++] = p2, ++m2[p2]);
                }
                h2.push(a2);
              }
              return g2[v2++] = 256, m2[256]++, r2.M = m2, r2.L = E2, o ? g2.subarray(0, v2) : g2;
            }
            __name(E, "E");
            function R(e3, t3, n2) {
              var r2, i2, o2, s2, a2, u2, c2 = 0, l2 = e3.length;
              s2 = 0, u2 = n2.length;
              e:
                for (; s2 < u2; s2++) {
                  if (r2 = n2[u2 - s2 - 1], o2 = 3, 3 < c2) {
                    for (a2 = c2; 3 < a2; a2--)
                      if (e3[r2 + a2 - 1] !== e3[t3 + a2 - 1])
                        continue e;
                    o2 = c2;
                  }
                  for (; 258 > o2 && t3 + o2 < l2 && e3[r2 + o2] === e3[t3 + o2]; )
                    ++o2;
                  if (o2 > c2 && (i2 = r2, c2 = o2), 258 === o2)
                    break;
                }
              return new function(e4, t4) {
                this.length = e4, this.H = t4;
              }(c2, t3 - i2);
            }
            __name(R, "R");
            function O(e3, t3) {
              var n2, r2, i2, s2, a2, u2 = e3.length, c2 = new _(572), l2 = new (o ? Uint8Array : Array)(u2);
              if (!o)
                for (s2 = 0; s2 < u2; s2++)
                  l2[s2] = 0;
              for (s2 = 0; s2 < u2; ++s2)
                0 < e3[s2] && c2.push(s2, e3[s2]);
              if (n2 = Array(c2.length / 2), r2 = new (o ? Uint32Array : Array)(c2.length / 2), 1 === n2.length)
                return l2[c2.pop().index] = 1, l2;
              for (s2 = 0, a2 = c2.length / 2; s2 < a2; ++s2)
                n2[s2] = c2.pop(), r2[s2] = n2[s2].value;
              for (i2 = function(e4, t4, n3) {
                function r3(e5) {
                  var n4 = y2[e5][p2[e5]];
                  n4 === t4 ? (r3(e5 + 1), r3(e5 + 1)) : --h2[n4], ++p2[e5];
                }
                __name(r3, "r");
                var i3, s3, a3, u3, c3, l3 = new (o ? Uint16Array : Array)(n3), f2 = new (o ? Uint8Array : Array)(n3), h2 = new (o ? Uint8Array : Array)(t4), _2 = Array(n3), y2 = Array(n3), p2 = Array(n3), d2 = (1 << n3) - t4, g2 = 1 << n3 - 1;
                for (l3[n3 - 1] = t4, s3 = 0; s3 < n3; ++s3)
                  d2 < g2 ? f2[s3] = 0 : (f2[s3] = 1, d2 -= g2), d2 <<= 1, l3[n3 - 2 - s3] = (l3[n3 - 1 - s3] / 2 | 0) + t4;
                for (l3[0] = f2[0], _2[0] = Array(l3[0]), y2[0] = Array(l3[0]), s3 = 1; s3 < n3; ++s3)
                  l3[s3] > 2 * l3[s3 - 1] + f2[s3] && (l3[s3] = 2 * l3[s3 - 1] + f2[s3]), _2[s3] = Array(l3[s3]), y2[s3] = Array(l3[s3]);
                for (i3 = 0; i3 < t4; ++i3)
                  h2[i3] = n3;
                for (a3 = 0; a3 < l3[n3 - 1]; ++a3)
                  _2[n3 - 1][a3] = e4[a3], y2[n3 - 1][a3] = a3;
                for (i3 = 0; i3 < n3; ++i3)
                  p2[i3] = 0;
                for (1 === f2[n3 - 1] && (--h2[0], ++p2[n3 - 1]), s3 = n3 - 2; 0 <= s3; --s3) {
                  for (u3 = i3 = 0, c3 = p2[s3 + 1], a3 = 0; a3 < l3[s3]; a3++)
                    (u3 = _2[s3 + 1][c3] + _2[s3 + 1][c3 + 1]) > e4[i3] ? (_2[s3][a3] = u3, y2[s3][a3] = t4, c3 += 2) : (_2[s3][a3] = e4[i3], y2[s3][a3] = i3, ++i3);
                  p2[s3] = 0, 1 === f2[s3] && r3(s3);
                }
                return h2;
              }(r2, r2.length, t3), s2 = 0, a2 = n2.length; s2 < a2; ++s2)
                l2[n2[s2].index] = i2[s2];
              return l2;
            }
            __name(O, "O");
            function w(e3) {
              var t3, n2, r2, i2, s2 = new (o ? Uint16Array : Array)(e3.length), a2 = [], u2 = [], c2 = 0;
              for (t3 = 0, n2 = e3.length; t3 < n2; t3++)
                a2[e3[t3]] = 1 + (0 | a2[e3[t3]]);
              for (t3 = 1, n2 = 16; t3 <= n2; t3++)
                u2[t3] = c2, c2 += 0 | a2[t3], c2 <<= 1;
              for (t3 = 0, n2 = e3.length; t3 < n2; t3++)
                for (c2 = u2[e3[t3]], u2[e3[t3]] += 1, r2 = s2[t3] = 0, i2 = e3[t3]; r2 < i2; r2++)
                  s2[t3] = s2[t3] << 1 | 1 & c2, c2 >>>= 1;
              return s2;
            }
            __name(w, "w");
            function A(t3, n2) {
              switch (this.l = [], this.m = 32768, this.e = this.g = this.c = this.q = 0, this.input = o ? new Uint8Array(t3) : t3, this.s = false, this.n = M, this.C = false, !n2 && (n2 = {}) || (n2.index && (this.c = n2.index), n2.bufferSize && (this.m = n2.bufferSize), n2.bufferType && (this.n = n2.bufferType), n2.resize && (this.C = n2.resize)), this.n) {
                case I:
                  this.b = 32768, this.a = new (o ? Uint8Array : Array)(32768 + this.m + 258);
                  break;
                case M:
                  this.b = 0, this.a = new (o ? Uint8Array : Array)(this.m), this.f = this.K, this.t = this.I, this.o = this.J;
                  break;
                default:
                  e2(Error("invalid inflate mode"));
              }
            }
            __name(A, "A");
            var I = 0, M = 1, T = { F: I, D: M };
            A.prototype.p = function() {
              for (; !this.s; ) {
                var r2 = J(this, 3);
                switch (1 & r2 && (this.s = n), r2 >>>= 1) {
                  case 0:
                    var i2 = this.input, s2 = this.c, a2 = this.a, u2 = this.b, c2 = i2.length, l2 = t2, f2 = a2.length, h2 = t2;
                    switch (this.e = this.g = 0, s2 + 1 >= c2 && e2(Error("invalid uncompressed block header: LEN")), l2 = i2[s2++] | i2[s2++] << 8, s2 + 1 >= c2 && e2(Error("invalid uncompressed block header: NLEN")), l2 === ~(i2[s2++] | i2[s2++] << 8) && e2(Error("invalid uncompressed block header: length verify")), s2 + l2 > i2.length && e2(Error("input buffer is broken")), this.n) {
                      case I:
                        for (; u2 + l2 > a2.length; ) {
                          if (l2 -= h2 = f2 - u2, o)
                            a2.set(i2.subarray(s2, s2 + h2), u2), u2 += h2, s2 += h2;
                          else
                            for (; h2--; )
                              a2[u2++] = i2[s2++];
                          this.b = u2, a2 = this.f(), u2 = this.b;
                        }
                        break;
                      case M:
                        for (; u2 + l2 > a2.length; )
                          a2 = this.f({ v: 2 });
                        break;
                      default:
                        e2(Error("invalid inflate mode"));
                    }
                    if (o)
                      a2.set(i2.subarray(s2, s2 + l2), u2), u2 += l2, s2 += l2;
                    else
                      for (; l2--; )
                        a2[u2++] = i2[s2++];
                    this.c = s2, this.b = u2, this.a = a2;
                    break;
                  case 1:
                    this.o(G, H);
                    break;
                  case 2:
                    X(this);
                    break;
                  default:
                    e2(Error("unknown BTYPE: " + r2));
                }
              }
              return this.t();
            };
            var k, P, F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], j = o ? new Uint16Array(F) : F, U = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], N = o ? new Uint16Array(U) : U, B = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], L = o ? new Uint8Array(B) : B, D = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], Y = o ? new Uint16Array(D) : D, C = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = o ? new Uint8Array(C) : C, q = new (o ? Uint8Array : Array)(288);
            for (k = 0, P = q.length; k < P; ++k)
              q[k] = 143 >= k ? 8 : 255 >= k ? 9 : 279 >= k ? 7 : 8;
            var V, K, G = y(q), z = new (o ? Uint8Array : Array)(30);
            for (V = 0, K = z.length; V < K; ++V)
              z[V] = 5;
            var H = y(z);
            function J(t3, n2) {
              for (var r2, i2 = t3.g, o2 = t3.e, s2 = t3.input, a2 = t3.c, u2 = s2.length; o2 < n2; )
                a2 >= u2 && e2(Error("input buffer is broken")), i2 |= s2[a2++] << o2, o2 += 8;
              return r2 = i2 & (1 << n2) - 1, t3.g = i2 >>> n2, t3.e = o2 - n2, t3.c = a2, r2;
            }
            __name(J, "J");
            function W(e3, t3) {
              for (var n2, r2, i2 = e3.g, o2 = e3.e, s2 = e3.input, a2 = e3.c, u2 = s2.length, c2 = t3[0], l2 = t3[1]; o2 < l2 && !(a2 >= u2); )
                i2 |= s2[a2++] << o2, o2 += 8;
              return r2 = (n2 = c2[i2 & (1 << l2) - 1]) >>> 16, e3.g = i2 >> r2, e3.e = o2 - r2, e3.c = a2, 65535 & n2;
            }
            __name(W, "W");
            function X(e3) {
              function t3(e4, t4, n3) {
                var r3, i3, o2, s3 = this.z;
                for (o2 = 0; o2 < e4; )
                  switch (r3 = W(this, t4), r3) {
                    case 16:
                      for (i3 = 3 + J(this, 2); i3--; )
                        n3[o2++] = s3;
                      break;
                    case 17:
                      for (i3 = 3 + J(this, 3); i3--; )
                        n3[o2++] = 0;
                      s3 = 0;
                      break;
                    case 18:
                      for (i3 = 11 + J(this, 7); i3--; )
                        n3[o2++] = 0;
                      s3 = 0;
                      break;
                    default:
                      s3 = n3[o2++] = r3;
                  }
                return this.z = s3, n3;
              }
              __name(t3, "t");
              var n2, r2, i2, s2, a2 = J(e3, 5) + 257, u2 = J(e3, 5) + 1, c2 = J(e3, 4) + 4, l2 = new (o ? Uint8Array : Array)(j.length);
              for (s2 = 0; s2 < c2; ++s2)
                l2[j[s2]] = J(e3, 3);
              if (!o)
                for (s2 = c2, c2 = l2.length; s2 < c2; ++s2)
                  l2[j[s2]] = 0;
              n2 = y(l2), r2 = new (o ? Uint8Array : Array)(a2), i2 = new (o ? Uint8Array : Array)(u2), e3.z = 0, e3.o(y(t3.call(e3, a2, n2, r2)), y(t3.call(e3, u2, n2, i2)));
            }
            __name(X, "X");
            function Q(e3) {
              if ("string" == typeof e3) {
                var t3, n2, r2 = e3.split("");
                for (t3 = 0, n2 = r2.length; t3 < n2; t3++)
                  r2[t3] = (255 & r2[t3].charCodeAt(0)) >>> 0;
                e3 = r2;
              }
              for (var i2, o2 = 1, s2 = 0, a2 = e3.length, u2 = 0; 0 < a2; ) {
                a2 -= i2 = 1024 < a2 ? 1024 : a2;
                do {
                  s2 += o2 += e3[u2++];
                } while (--i2);
                o2 %= 65521, s2 %= 65521;
              }
              return (s2 << 16 | o2) >>> 0;
            }
            __name(Q, "Q");
            function Z(t3, n2) {
              var r2, i2;
              switch (this.input = t3, this.c = 0, !n2 && (n2 = {}) || (n2.index && (this.c = n2.index), n2.verify && (this.N = n2.verify)), r2 = t3[this.c++], i2 = t3[this.c++], 15 & r2) {
                case $:
                  this.method = $;
                  break;
                default:
                  e2(Error("unsupported compression method"));
              }
              0 != ((r2 << 8) + i2) % 31 && e2(Error("invalid fcheck flag:" + ((r2 << 8) + i2) % 31)), 32 & i2 && e2(Error("fdict flag is not supported")), this.B = new A(t3, { index: this.c, bufferSize: n2.bufferSize, bufferType: n2.bufferType, resize: n2.resize });
            }
            __name(Z, "Z");
            A.prototype.o = function(e3, t3) {
              var n2 = this.a, r2 = this.b;
              this.u = e3;
              for (var i2, o2, s2, a2, u2 = n2.length - 258; 256 !== (i2 = W(this, e3)); )
                if (256 > i2)
                  r2 >= u2 && (this.b = r2, n2 = this.f(), r2 = this.b), n2[r2++] = i2;
                else
                  for (a2 = N[o2 = i2 - 257], 0 < L[o2] && (a2 += J(this, L[o2])), i2 = W(this, t3), s2 = Y[i2], 0 < x[i2] && (s2 += J(this, x[i2])), r2 >= u2 && (this.b = r2, n2 = this.f(), r2 = this.b); a2--; )
                    n2[r2] = n2[r2++ - s2];
              for (; 8 <= this.e; )
                this.e -= 8, this.c--;
              this.b = r2;
            }, A.prototype.J = function(e3, t3) {
              var n2 = this.a, r2 = this.b;
              this.u = e3;
              for (var i2, o2, s2, a2, u2 = n2.length; 256 !== (i2 = W(this, e3)); )
                if (256 > i2)
                  r2 >= u2 && (u2 = (n2 = this.f()).length), n2[r2++] = i2;
                else
                  for (a2 = N[o2 = i2 - 257], 0 < L[o2] && (a2 += J(this, L[o2])), i2 = W(this, t3), s2 = Y[i2], 0 < x[i2] && (s2 += J(this, x[i2])), r2 + a2 > u2 && (u2 = (n2 = this.f()).length); a2--; )
                    n2[r2] = n2[r2++ - s2];
              for (; 8 <= this.e; )
                this.e -= 8, this.c--;
              this.b = r2;
            }, A.prototype.f = function() {
              var e3, t3, n2 = new (o ? Uint8Array : Array)(this.b - 32768), r2 = this.b - 32768, i2 = this.a;
              if (o)
                n2.set(i2.subarray(32768, n2.length));
              else
                for (e3 = 0, t3 = n2.length; e3 < t3; ++e3)
                  n2[e3] = i2[e3 + 32768];
              if (this.l.push(n2), this.q += n2.length, o)
                i2.set(i2.subarray(r2, r2 + 32768));
              else
                for (e3 = 0; 32768 > e3; ++e3)
                  i2[e3] = i2[r2 + e3];
              return this.b = 32768, i2;
            }, A.prototype.K = function(e3) {
              var t3, n2, r2, i2 = this.input.length / this.c + 1 | 0, s2 = this.input, a2 = this.a;
              return e3 && ("number" == typeof e3.v && (i2 = e3.v), "number" == typeof e3.G && (i2 += e3.G)), 2 > i2 ? n2 = (r2 = (s2.length - this.c) / this.u[2] / 2 * 258 | 0) < a2.length ? a2.length + r2 : a2.length << 1 : n2 = a2.length * i2, o ? (t3 = new Uint8Array(n2)).set(a2) : t3 = a2, this.a = t3;
            }, A.prototype.t = function() {
              var e3, t3, n2, r2, i2, s2 = 0, a2 = this.a, u2 = this.l, c2 = new (o ? Uint8Array : Array)(this.q + (this.b - 32768));
              if (0 === u2.length)
                return o ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
              for (t3 = 0, n2 = u2.length; t3 < n2; ++t3)
                for (r2 = 0, i2 = (e3 = u2[t3]).length; r2 < i2; ++r2)
                  c2[s2++] = e3[r2];
              for (t3 = 32768, n2 = this.b; t3 < n2; ++t3)
                c2[s2++] = a2[t3];
              return this.l = [], this.buffer = c2;
            }, A.prototype.I = function() {
              var e3, t3 = this.b;
              return o ? this.C ? (e3 = new Uint8Array(t3)).set(this.a.subarray(0, t3)) : e3 = this.a.subarray(0, t3) : (this.a.length > t3 && (this.a.length = t3), e3 = this.a), this.buffer = e3;
            }, Z.prototype.p = function() {
              var t3, n2 = this.input;
              return t3 = this.B.p(), this.c = this.B.c, this.N && ((n2[this.c++] << 24 | n2[this.c++] << 16 | n2[this.c++] << 8 | n2[this.c++]) >>> 0 !== Q(t3) && e2(Error("invalid adler-32 checksum"))), t3;
            };
            var $ = 8;
            function ee(e3, t3) {
              this.input = e3, this.a = new (o ? Uint8Array : Array)(32768), this.h = te.k;
              var n2, r2 = {};
              for (n2 in !t3 && (t3 = {}) || "number" != typeof t3.compressionType || (this.h = t3.compressionType), t3)
                r2[n2] = t3[n2];
              r2.outputBuffer = this.a, this.A = new p(this.input, r2);
            }
            __name(ee, "ee");
            var te = v;
            function ne(e3, t3) {
              var n2, r2, o2, s2;
              if (Object.keys)
                n2 = Object.keys(t3);
              else
                for (r2 in n2 = [], o2 = 0, t3)
                  n2[o2++] = r2;
              for (o2 = 0, s2 = n2.length; o2 < s2; ++o2)
                i(e3 + "." + (r2 = n2[o2]), t3[r2]);
            }
            __name(ne, "ne");
            ee.prototype.j = function() {
              var t3, n2, r2, i2, s2, a2, u2, c2 = 0;
              switch (u2 = this.a, t3 = $) {
                case $:
                  n2 = Math.LOG2E * Math.log(32768) - 8;
                  break;
                default:
                  e2(Error("invalid compression method"));
              }
              switch (r2 = n2 << 4 | t3, u2[c2++] = r2, t3) {
                case $:
                  switch (this.h) {
                    case te.NONE:
                      s2 = 0;
                      break;
                    case te.r:
                      s2 = 1;
                      break;
                    case te.k:
                      s2 = 2;
                      break;
                    default:
                      e2(Error("unsupported compression type"));
                  }
                  break;
                default:
                  e2(Error("invalid compression method"));
              }
              return i2 = s2 << 6 | 0, u2[c2++] = i2 | 31 - (256 * r2 + i2) % 31, a2 = Q(this.input), this.A.b = c2, c2 = (u2 = this.A.j()).length, o && ((u2 = new Uint8Array(u2.buffer)).length <= c2 + 4 && (this.a = new Uint8Array(u2.length + 4), this.a.set(u2), u2 = this.a), u2 = u2.subarray(0, c2 + 4)), u2[c2++] = a2 >> 24 & 255, u2[c2++] = a2 >> 16 & 255, u2[c2++] = a2 >> 8 & 255, u2[c2++] = 255 & a2, u2;
            }, i("Zlib.Inflate", Z), i("Zlib.Inflate.prototype.decompress", Z.prototype.p), ne("Zlib.Inflate.BufferType", { ADAPTIVE: T.D, BLOCK: T.F }), i("Zlib.Deflate", ee), i("Zlib.Deflate.compress", function(e3, t3) {
              return new ee(e3, t3).j();
            }), i("Zlib.Deflate.prototype.compress", ee.prototype.j), ne("Zlib.Deflate.CompressionType", { NONE: te.NONE, FIXED: te.r, DYNAMIC: te.k });
          }).call(this);
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SocketEngine = t.SocketEvent = void 0;
          var r, i = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), o = n(120), s = (r = o) && r.__esModule ? r : { default: r }, a = n(167), u = n(39), c = n(8), l = n(2), f = n(50), h = n(51), _ = n(1);
          function y(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          __name(y, "y");
          var p = Object.freeze({ CONNECT: "socketConnect", DISCONNECT: "socketDisconnect", DATA: "socketData", IOERROR: "socketIOError" }), d = function(e2) {
            function t2(e3) {
              y(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              return n2._sfs = e3, n2._logger = f.Logger.instance, n2._isConnected = false, n2._isConnecting = false, n2._socket = null, n2._protocolCodec = new g(e3), n2._disconnectionReason = h.ClientDisconnectionReason.UNKNOWN, Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, u.EventDispatcher), i(t2, [{ key: "connect", value: function(e3, t3, n2) {
              this._isConnecting = true;
              var r2 = "ws" + (n2 ? "s" : "");
              this._socket = new WebSocket(r2 + "://" + e3 + ":" + t3 + "/BlueBox/websocket"), this._socket.binaryType = "arraybuffer", this._socket._scope = this, this._socket.onopen = this._onSocketConnect, this._socket.onclose = this._onSocketDisconnect, this._socket.onmessage = this._onSocketData, this._socket.onerror = this._onSocketError;
            } }, { key: "disconnect", value: function(e3) {
              this._disconnectionReason = e3, this._socket.close();
            } }, { key: "addController", value: function(e3, t3) {
              null == this._controllers[e3] && (this._controllers[e3] = t3);
            } }, { key: "removeController", value: function(e3) {
              delete this._controllers[e3];
            } }, { key: "send", value: function(e3) {
              this._sfs.debug && this._logger.debug("OUTGOING MESSAGE: " + e3.dump());
              var t3 = this._protocolCodec.onPacketWrite(e3);
              this._socket.send(t3);
            } }, { key: "_onSocketConnect", value: function() {
              this._scope._sfs.debug && this._scope._logger.debug("Socket connection established"), this._scope._isConnected = true, this._scope._isConnecting = false, this._scope.dispatchEvent(p.CONNECT, { success: true });
            } }, { key: "_onSocketDisconnect", value: function() {
              this._scope._isConnected = false, this._scope.isConnecting ? (this._scope._sfs.debug && this._scope._logger.debug("Can't establish socket connection"), this._scope._isConnecting = false, this._scope.dispatchEvent(p.CONNECT, { success: false })) : (this._scope._sfs.debug && this._scope._logger.debug("Socket disconnection occurred"), this._scope.dispatchEvent(p.DISCONNECT, { reason: this._scope._disconnectionReason }), this._scope._disconnectionReason = h.ClientDisconnectionReason.UNKNOWN);
            } }, { key: "_onSocketData", value: function(e3) {
              var t3 = this._scope._protocolCodec.onPacketRead(e3.data);
              this._scope._sfs.debug && this._scope._logger.debug("INCOMING MESSAGE: " + t3.dump()), this._scope.dispatchEvent(p.DATA, t3);
            } }, { key: "_onSocketError", value: function(e3) {
              this._scope.dispatchEvent(p.IOERROR, e3.data);
            } }, { key: "isConnected", get: function() {
              return this._isConnected;
            } }, { key: "isConnecting", get: function() {
              return this._isConnecting;
            } }, { key: "maxMessageSize", get: function() {
              return this._protocolCodec.maxMessageSize;
            }, set: function(e3) {
              this._protocolCodec.maxMessageSize = e3;
            } }, { key: "compressionThreshold", get: function() {
              return this._protocolCodec.compressionThreshold;
            }, set: function(e3) {
              this._protocolCodec.compressionThreshold = e3;
            } }]), t2;
          }(), g = function() {
            function e2(t2) {
              y(this, e2), this.CONTROLLER_ID = "c", this.ACTION_ID = "a", this.PARAM_ID = "p", this._maxMessageSize = 1e4, this._compressionThreshold = 1024, this._sfs = t2, this._logger = f.Logger.instance, Object.seal(this);
            }
            __name(e2, "e");
            return i(e2, [{ key: "onPacketRead", value: function(e3) {
              if (0 !== e3.byteLength) {
                var t2 = new s.default(e3, 0, s.default.BIG_ENDIAN), n2 = t2.readUint8(), r2 = (32 & n2) > 0, i2 = (8 & n2) > 0 ? t2.readUint32() : t2.readUint16(), o2 = t2.readUint8Array(i2);
                r2 && (o2 = this.decompress(o2)), this._sfs.debug && (e3.byteLength > 1024 ? this._logger.debug("DATA READ - Binary size > 1024; dump omitted") : this._logger.debug("DATA READ - " + h.DumpFormatter.hexDump(o2)));
                var a2 = c.SFSObject.newFromBinaryData(o2);
                return new l.Message(a2.get(this.ACTION_ID), a2.get(this.CONTROLLER_ID), a2.get(this.PARAM_ID));
              }
              this._logger.error("Unexpected empty packet data: no readable bytes available!");
            } }, { key: "onPacketWrite", value: function(e3) {
              var t2 = new c.SFSObject();
              t2.put(this.CONTROLLER_ID, e3.targetController, c.SFSDataType.BYTE), t2.put(this.ACTION_ID, e3.id, c.SFSDataType.SHORT), t2.put(this.PARAM_ID, e3.content, c.SFSDataType.SFS_OBJECT);
              var n2 = t2.toBinary(), r2 = n2.byteLength, i2 = new s.default(new ArrayBuffer(0), 0, s.default.BIG_ENDIAN), o2 = 128;
              r2 > this.compressionThreshold && (o2 += 32, r2 = (n2 = this.compress(n2)).byteLength);
              var a2 = r2 > 65335;
              a2 && (o2 += 8), i2.writeUint8(o2), a2 ? i2.writeUint32(r2) : i2.writeUint16(r2), i2.writeUint8Array(n2);
              var u2 = new Uint8Array(i2.buffer);
              if (u2.byteLength > this.maxMessageSize)
                throw new _.SFSError("Message size is too big: " + u2.byteLength + "; the server limit is: " + this.maxMessageSize);
              return this._sfs.debug && this._logger.debug("DATA WRITTEN - " + h.DumpFormatter.hexDump(u2)), u2;
            } }, { key: "decompress", value: function(e3) {
              return new a.Zlib.Inflate(e3).decompress();
            } }, { key: "compress", value: function(e3) {
              return new a.Zlib.Deflate(e3).compress();
            } }, { key: "maxMessageSize", get: function() {
              return this._maxMessageSize;
            }, set: function(e3) {
              this._maxMessageSize = e3;
            } }, { key: "compressionThreshold", get: function() {
              return this._compressionThreshold;
            }, set: function(e3) {
              this._compressionThreshold = e3;
            } }]), e2;
          }();
          t.SocketEvent = p, t.SocketEngine = d;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.ExtensionController = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(39), o = n(97);
          var s = function() {
            function e2(t2) {
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._sfs = t2, this._logger = t2.logger, this._id = 1, Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "handleMessage", value: function(e3, t2) {
              this._sfs.debug && this._logger.info("Handling Extension response");
              var n2 = {};
              n2.cmd = e3.get(o.ExtensionRequest.KEY_CMD), n2.params = e3.get(o.ExtensionRequest.KEY_PARAMS);
              var r2 = e3.get(o.ExtensionRequest.KEY_ROOM);
              null != r2 && (n2.room = this._sfs.roomManager.getRoomById(r2)), this._sfs.dispatchEvent(i.SFSEvent.EXTENSION_RESPONSE, n2);
            } }, { key: "id", get: function() {
              return this._id;
            } }]), e2;
          }();
          t.ExtensionController = s;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }();
          var i = function() {
            function e2() {
              !function(e3, t2) {
                if (!(e3 instanceof t2))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2);
            }
            __name(e2, "e");
            return r(e2, null, [{ key: "KEY_ROOM_ID", get: function() {
              return "r";
            } }, { key: "KEY_ITEM_ID", get: function() {
              return "i";
            } }, { key: "KEY_VAR_LIST", get: function() {
              return "v";
            } }]), e2;
          }();
          t.SetMMOItemVariables = i;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.MMOItem = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(73);
          var o = function() {
            function e2(t2) {
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._id = t2, this._aoiEntryPoint = null, this._variables = /* @__PURE__ */ new Map(), Object.seal(this);
            }
            __name(e2, "e");
            return r(e2, [{ key: "toString", value: function() {
              return "[Item: " + this.id + "]";
            } }, { key: "getVariable", value: function(e3) {
              return this._variables.get(e3);
            } }, { key: "containsVariable", value: function(e3) {
              return this._variables.has(e3);
            } }, { key: "getVariables", value: function() {
              return Array.from(this._variables.values());
            } }, { key: "_setVariables", value: function(e3) {
              var t2 = true, n2 = false, r2 = void 0;
              try {
                for (var i2, o2 = e3[Symbol.iterator](); !(t2 = (i2 = o2.next()).done); t2 = true) {
                  var s = i2.value;
                  this._setVariable(s);
                }
              } catch (e4) {
                n2 = true, r2 = e4;
              } finally {
                try {
                  !t2 && o2.return && o2.return();
                } finally {
                  if (n2)
                    throw r2;
                }
              }
            } }, { key: "_setVariable", value: function(e3) {
              e3.isNull ? this._variables.delete(e3.name) : this._variables.set(e3.name, e3);
            } }, { key: "id", get: function() {
              return this._id;
            } }, { key: "aoiEntryPoint", get: function() {
              return this._aoiEntryPoint;
            } }], [{ key: "fromSFSArray", value: function(t2) {
              var n2 = new e2(t2.get(0)), r2 = t2.get(1);
              if (null != r2)
                for (var o2 = 0; o2 < r2.size(); o2++)
                  n2._setVariable(i.MMOItemVariable.fromSFSArray(r2.get(o2)));
              return n2;
            } }]), e2;
          }();
          t.MMOItem = o;
        }, function(e, t) {
          !function(e2) {
            "use strict";
            function t2(e3, t3, n2) {
              return t3 <= e3 && e3 <= n2;
            }
            __name(t2, "t");
            function n(e3, t3) {
              return Math.floor(e3 / t3);
            }
            __name(n, "n");
            var r = -1, i = -1;
            function o(e3, t3) {
              if (e3)
                throw new Error("EncodingError");
              return t3 || 65533;
            }
            __name(o, "o");
            function s(e3) {
              throw new Error("EncodingError");
            }
            __name(s, "s");
            function a(e3) {
              if (e3 = String(e3).trim().toLowerCase(), Object.prototype.hasOwnProperty.call(c, e3))
                return c[e3];
              throw new Error("EncodingError: Unknown encoding: " + e3);
            }
            __name(a, "a");
            var u = {}, c = {};
            function l(e3, t3) {
              return (t3 || [])[e3] || null;
            }
            __name(l, "l");
            function f(e3, t3) {
              var n2 = t3.indexOf(e3);
              return -1 === n2 ? null : n2;
            }
            __name(f, "f");
            [{ encodings: [{ labels: ["unicode-1-1-utf-8", "utf-8", "utf8"], name: "utf-8" }], heading: "The Encoding" }, { encodings: [{ labels: ["cp864", "ibm864"], name: "ibm864" }, { labels: ["cp866", "ibm866"], name: "ibm866" }, { labels: ["csisolatin2", "iso-8859-2", "iso-ir-101", "iso8859-2", "iso_8859-2", "l2", "latin2"], name: "iso-8859-2" }, { labels: ["csisolatin3", "iso-8859-3", "iso_8859-3", "iso-ir-109", "l3", "latin3"], name: "iso-8859-3" }, { labels: ["csisolatin4", "iso-8859-4", "iso_8859-4", "iso-ir-110", "l4", "latin4"], name: "iso-8859-4" }, { labels: ["csisolatincyrillic", "cyrillic", "iso-8859-5", "iso_8859-5", "iso-ir-144"], name: "iso-8859-5" }, { labels: ["arabic", "csisolatinarabic", "ecma-114", "iso-8859-6", "iso_8859-6", "iso-ir-127"], name: "iso-8859-6" }, { labels: ["csisolatingreek", "ecma-118", "elot_928", "greek", "greek8", "iso-8859-7", "iso_8859-7", "iso-ir-126"], name: "iso-8859-7" }, { labels: ["csisolatinhebrew", "hebrew", "iso-8859-8", "iso-8859-8-i", "iso-ir-138", "iso_8859-8", "visual"], name: "iso-8859-8" }, { labels: ["csisolatin6", "iso-8859-10", "iso-ir-157", "iso8859-10", "l6", "latin6"], name: "iso-8859-10" }, { labels: ["iso-8859-13"], name: "iso-8859-13" }, { labels: ["iso-8859-14", "iso8859-14"], name: "iso-8859-14" }, { labels: ["iso-8859-15", "iso_8859-15"], name: "iso-8859-15" }, { labels: ["iso-8859-16"], name: "iso-8859-16" }, { labels: ["koi8-r", "koi8_r"], name: "koi8-r" }, { labels: ["koi8-u"], name: "koi8-u" }, { labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"], name: "macintosh" }, { labels: ["iso-8859-11", "tis-620", "windows-874"], name: "windows-874" }, { labels: ["windows-1250", "x-cp1250"], name: "windows-1250" }, { labels: ["windows-1251", "x-cp1251"], name: "windows-1251" }, { labels: ["ascii", "ansi_x3.4-1968", "csisolatin1", "iso-8859-1", "iso8859-1", "iso_8859-1", "l1", "latin1", "us-ascii", "windows-1252"], name: "windows-1252" }, { labels: ["cp1253", "windows-1253"], name: "windows-1253" }, { labels: ["csisolatin5", "iso-8859-9", "iso-ir-148", "l5", "latin5", "windows-1254"], name: "windows-1254" }, { labels: ["cp1255", "windows-1255"], name: "windows-1255" }, { labels: ["cp1256", "windows-1256"], name: "windows-1256" }, { labels: ["windows-1257"], name: "windows-1257" }, { labels: ["cp1258", "windows-1258"], name: "windows-1258" }, { labels: ["x-mac-cyrillic", "x-mac-ukrainian"], name: "x-mac-cyrillic" }], heading: "Legacy single-byte encodings" }, { encodings: [{ labels: ["chinese", "csgb2312", "csiso58gb231280", "gb2312", "gbk", "gb_2312", "gb_2312-80", "iso-ir-58", "x-gbk"], name: "gbk" }, { labels: ["gb18030"], name: "gb18030" }, { labels: ["hz-gb-2312"], name: "hz-gb-2312" }], heading: "Legacy multi-byte Chinese (simplified) encodings" }, { encodings: [{ labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"], name: "big5" }], heading: "Legacy multi-byte Chinese (traditional) encodings" }, { encodings: [{ labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"], name: "euc-jp" }, { labels: ["csiso2022jp", "iso-2022-jp"], name: "iso-2022-jp" }, { labels: ["csshiftjis", "ms_kanji", "shift-jis", "shift_jis", "sjis", "windows-31j", "x-sjis"], name: "shift_jis" }], heading: "Legacy multi-byte Japanese encodings" }, { encodings: [{ labels: ["cseuckr", "csksc56011987", "euc-kr", "iso-ir-149", "korean", "ks_c_5601-1987", "ks_c_5601-1989", "ksc5601", "ksc_5601", "windows-949"], name: "euc-kr" }, { labels: ["csiso2022kr", "iso-2022-kr"], name: "iso-2022-kr" }], heading: "Legacy multi-byte Korean encodings" }, { encodings: [{ labels: ["utf-16", "utf-16le"], name: "utf-16" }, { labels: ["utf-16be"], name: "utf-16be" }], heading: "Legacy utf-16 encodings" }].forEach(function(e3) {
              e3.encodings.forEach(function(e4) {
                u[e4.name] = e4, e4.labels.forEach(function(t3) {
                  c[t3] = e4;
                });
              });
            });
            var h = e2["encoding-indexes"] || {};
            function _(e3, n2) {
              var s2 = n2.fatal, a2 = 0, u2 = 0, c2 = 0;
              this.decode = function(n3) {
                var f2, _2 = n3.get();
                if (_2 === r && 0 === a2 && 0 === u2 && 0 === c2)
                  return i;
                if (_2 !== r || 0 === a2 && 0 === u2 && 0 === c2 || (a2 = 0, u2 = 0, c2 = 0, o(s2)), n3.offset(1), 0 !== c2)
                  return f2 = null, t2(_2, 48, 57) && (f2 = function(e4) {
                    if (e4 > 39419 && e4 < 189e3 || e4 > 1237575)
                      return null;
                    var t3, n4 = 0, r2 = 0, i2 = h.gb18030;
                    for (t3 = 0; t3 < i2.length; ++t3) {
                      var o2 = i2[t3];
                      if (!(o2[0] <= e4))
                        break;
                      n4 = o2[0], r2 = o2[1];
                    }
                    return r2 + e4 - n4;
                  }(10 * (126 * (10 * (a2 - 129) + (u2 - 48)) + (c2 - 129)) + _2 - 48)), a2 = 0, u2 = 0, c2 = 0, null === f2 ? (n3.offset(-3), o(s2)) : f2;
                if (0 !== u2)
                  return t2(_2, 129, 254) ? (c2 = _2, null) : (n3.offset(-2), a2 = 0, u2 = 0, o(s2));
                if (0 !== a2) {
                  if (t2(_2, 48, 57) && e3)
                    return u2 = _2, null;
                  var y2 = a2, p2 = null;
                  a2 = 0;
                  var d2 = _2 < 127 ? 64 : 65;
                  return (t2(_2, 64, 126) || t2(_2, 128, 254)) && (p2 = 190 * (y2 - 129) + (_2 - d2)), f2 = null === p2 ? null : l(p2, h.gbk), null === p2 && n3.offset(-1), null === f2 ? o(s2) : f2;
                }
                return t2(_2, 0, 127) ? _2 : 128 === _2 ? 8364 : t2(_2, 129, 254) ? (a2 = _2, null) : o(s2);
              };
            }
            __name(_, "_");
            function y(e3, o2) {
              o2.fatal;
              this.encode = function(o3, a2) {
                var u2 = a2.get();
                if (u2 === i)
                  return r;
                if (a2.offset(1), t2(u2, 0, 127))
                  return o3.emit(u2);
                var c2 = f(u2, h.gbk);
                if (null !== c2) {
                  var l2 = n(c2, 190) + 129, _2 = c2 % 190, y2 = _2 < 63 ? 64 : 65;
                  return o3.emit(l2, _2 + y2);
                }
                if (null === c2 && !e3)
                  return s();
                var p2 = n(n(n(c2 = function(e4) {
                  var t3, n2 = 0, r2 = 0, i2 = h.gb18030;
                  for (t3 = 0; t3 < i2.length; ++t3) {
                    var o4 = i2[t3];
                    if (!(o4[1] <= e4))
                      break;
                    n2 = o4[1], r2 = o4[0];
                  }
                  return r2 + e4 - n2;
                }(u2), 10), 126), 10), d2 = n(n(c2 -= 10 * p2 * 126 * 10, 10), 126), g2 = n(c2 -= 10 * d2 * 126, 10), v2 = c2 - 10 * g2;
                return o3.emit(p2 + 129, d2 + 48, g2 + 129, v2 + 48);
              };
            }
            __name(y, "y");
            function p(e3, n2) {
              var s2 = n2.fatal, a2 = null, u2 = null;
              this.decode = function(n3) {
                var c2, l2 = n3.get();
                if (l2 === r && null === a2 && null === u2)
                  return i;
                if (l2 === r && (null !== a2 || null !== u2))
                  return o(s2);
                if (n3.offset(1), null === a2)
                  return a2 = l2, null;
                if (c2 = e3 ? (a2 << 8) + l2 : (l2 << 8) + a2, a2 = null, null !== u2) {
                  var f2 = u2;
                  return u2 = null, t2(c2, 56320, 57343) ? 65536 + 1024 * (f2 - 55296) + (c2 - 56320) : (n3.offset(-2), o(s2));
                }
                return t2(c2, 55296, 56319) ? (u2 = c2, null) : t2(c2, 56320, 57343) ? o(s2) : c2;
              };
            }
            __name(p, "p");
            function d(e3, o2) {
              o2.fatal;
              this.encode = function(o3, a2) {
                function u2(t3) {
                  var n2 = t3 >> 8, r2 = 255 & t3;
                  return e3 ? o3.emit(n2, r2) : o3.emit(r2, n2);
                }
                __name(u2, "u");
                var c2 = a2.get();
                if (c2 === i)
                  return r;
                if (a2.offset(1), t2(c2, 55296, 57343) && s(), c2 <= 65535)
                  return u2(c2);
                var l2 = (c2 - 65536) % 1024 + 56320;
                return u2(n(c2 - 65536, 1024) + 55296), u2(l2);
              };
            }
            __name(d, "d");
            u["utf-8"].getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal, this.encode = function(e5, o2) {
                  var a2, u2, c2 = o2.get();
                  if (c2 === i)
                    return r;
                  if (o2.offset(1), t2(c2, 55296, 57343))
                    return s();
                  if (t2(c2, 0, 127))
                    return e5.emit(c2);
                  t2(c2, 128, 2047) ? (a2 = 1, u2 = 192) : t2(c2, 2048, 65535) ? (a2 = 2, u2 = 224) : t2(c2, 65536, 1114111) && (a2 = 3, u2 = 240);
                  for (var l2 = e5.emit(n(c2, Math.pow(64, a2)) + u2); a2 > 0; ) {
                    var f2 = n(c2, Math.pow(64, a2 - 1));
                    l2 = e5.emit(128 + f2 % 64), a2 -= 1;
                  }
                  return l2;
                };
              }(e3);
            }, u["utf-8"].getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = 0, a2 = 0, u2 = 0, c2 = 0;
                this.decode = function(e5) {
                  var l2 = e5.get();
                  if (l2 === r)
                    return 0 !== a2 ? o(n2) : i;
                  if (e5.offset(1), 0 === a2) {
                    if (t2(l2, 0, 127))
                      return l2;
                    if (t2(l2, 194, 223))
                      a2 = 1, c2 = 128, s2 = l2 - 192;
                    else if (t2(l2, 224, 239))
                      a2 = 2, c2 = 2048, s2 = l2 - 224;
                    else {
                      if (!t2(l2, 240, 244))
                        return o(n2);
                      a2 = 3, c2 = 65536, s2 = l2 - 240;
                    }
                    return s2 *= Math.pow(64, a2), null;
                  }
                  if (!t2(l2, 128, 191))
                    return s2 = 0, a2 = 0, u2 = 0, c2 = 0, e5.offset(-1), o(n2);
                  if (u2 += 1, s2 += (l2 - 128) * Math.pow(64, a2 - u2), u2 !== a2)
                    return null;
                  var f2 = s2, h2 = c2;
                  return s2 = 0, a2 = 0, u2 = 0, c2 = 0, t2(f2, h2, 1114111) && !t2(f2, 55296, 57343) ? f2 : o(n2);
                };
              }(e3);
            }, ["ibm864", "ibm866", "iso-8859-2", "iso-8859-3", "iso-8859-4", "iso-8859-5", "iso-8859-6", "iso-8859-7", "iso-8859-8", "iso-8859-10", "iso-8859-13", "iso-8859-14", "iso-8859-15", "iso-8859-16", "koi8-r", "koi8-u", "macintosh", "windows-874", "windows-1250", "windows-1251", "windows-1252", "windows-1253", "windows-1254", "windows-1255", "windows-1256", "windows-1257", "windows-1258", "x-mac-cyrillic"].forEach(function(e3) {
              var n2 = u[e3], a2 = h[e3];
              n2.getDecoder = function(e4) {
                return new function(e5, n3) {
                  var s2 = n3.fatal;
                  this.decode = function(n4) {
                    var a3 = n4.get();
                    if (a3 === r)
                      return i;
                    if (n4.offset(1), t2(a3, 0, 127))
                      return a3;
                    var u2 = e5[a3 - 128];
                    return null === u2 ? o(s2) : u2;
                  };
                }(a2, e4);
              }, n2.getEncoder = function(e4) {
                return new function(e5, n3) {
                  n3.fatal, this.encode = function(n4, o2) {
                    var a3 = o2.get();
                    if (a3 === i)
                      return r;
                    if (o2.offset(1), t2(a3, 0, 127))
                      return n4.emit(a3);
                    var u2 = f(a3, e5);
                    return null === u2 && s(), n4.emit(u2 + 128);
                  };
                }(a2, e4);
              };
            }), u.gbk.getEncoder = function(e3) {
              return new y(false, e3);
            }, u.gbk.getDecoder = function(e3) {
              return new _(false, e3);
            }, u.gb18030.getEncoder = function(e3) {
              return new y(true, e3);
            }, u.gb18030.getDecoder = function(e3) {
              return new _(true, e3);
            }, u["hz-gb-2312"].getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal;
                var o2 = false;
                this.encode = function(e5, a2) {
                  var u2 = a2.get();
                  if (u2 === i)
                    return r;
                  if (a2.offset(1), t2(u2, 0, 127) && o2)
                    return a2.offset(-1), o2 = false, e5.emit(126, 125);
                  if (126 === u2)
                    return e5.emit(126, 126);
                  if (t2(u2, 0, 127))
                    return e5.emit(u2);
                  if (!o2)
                    return a2.offset(-1), o2 = true, e5.emit(126, 123);
                  var c2 = f(u2, h.gbk);
                  if (null === c2)
                    return s();
                  var l2 = n(c2, 190) + 1, _2 = c2 % 190 - 63;
                  return t2(l2, 33, 126) && t2(_2, 33, 126) ? e5.emit(l2, _2) : s();
                };
              }(e3);
            }, u["hz-gb-2312"].getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = false, a2 = 0;
                this.decode = function(e5) {
                  var u2 = e5.get();
                  if (u2 === r && 0 === a2)
                    return i;
                  if (u2 === r && 0 !== a2)
                    return a2 = 0, o(n2);
                  if (e5.offset(1), 126 === a2)
                    return a2 = 0, 123 === u2 ? (s2 = true, null) : 125 === u2 ? (s2 = false, null) : 126 === u2 ? 126 : 10 === u2 ? null : (e5.offset(-1), o(n2));
                  if (0 !== a2) {
                    var c2 = a2;
                    a2 = 0;
                    var f2 = null;
                    return t2(u2, 33, 126) && (f2 = l(190 * (c2 - 1) + (u2 + 63), h.gbk)), 10 === u2 && (s2 = false), null === f2 ? o(n2) : f2;
                  }
                  return 126 === u2 ? (a2 = 126, null) : s2 ? t2(u2, 32, 127) ? (a2 = u2, null) : (10 === u2 && (s2 = false), o(n2)) : t2(u2, 0, 127) ? u2 : o(n2);
                };
              }(e3);
            }, u.big5.getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal, this.encode = function(e5, o2) {
                  var a2 = o2.get();
                  if (a2 === i)
                    return r;
                  if (o2.offset(1), t2(a2, 0, 127))
                    return e5.emit(a2);
                  var u2 = f(a2, h.big5);
                  if (null === u2)
                    return s();
                  var c2 = n(u2, 157) + 129, l2 = u2 % 157, _2 = l2 < 63 ? 64 : 98;
                  return e5.emit(c2, l2 + _2);
                };
              }(e3);
            }, u.big5.getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = 0, a2 = null;
                this.decode = function(e5) {
                  if (null !== a2) {
                    var u2 = a2;
                    return a2 = null, u2;
                  }
                  var c2 = e5.get();
                  if (c2 === r && 0 === s2)
                    return i;
                  if (c2 === r && 0 !== s2)
                    return s2 = 0, o(n2);
                  if (e5.offset(1), 0 !== s2) {
                    var f2 = s2, _2 = null;
                    s2 = 0;
                    var y2 = c2 < 127 ? 64 : 98;
                    if ((t2(c2, 64, 126) || t2(c2, 161, 254)) && (_2 = 157 * (f2 - 129) + (c2 - y2)), 1133 === _2)
                      return a2 = 772, 202;
                    if (1135 === _2)
                      return a2 = 780, 202;
                    if (1164 === _2)
                      return a2 = 772, 234;
                    if (1166 === _2)
                      return a2 = 780, 234;
                    var p2 = null === _2 ? null : l(_2, h.big5);
                    return null === _2 && e5.offset(-1), null === p2 ? o(n2) : p2;
                  }
                  return t2(c2, 0, 127) ? c2 : t2(c2, 129, 254) ? (s2 = c2, null) : o(n2);
                };
              }(e3);
            }, u["euc-jp"].getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal, this.encode = function(e5, o2) {
                  var a2 = o2.get();
                  if (a2 === i)
                    return r;
                  if (o2.offset(1), t2(a2, 0, 127))
                    return e5.emit(a2);
                  if (165 === a2)
                    return e5.emit(92);
                  if (8254 === a2)
                    return e5.emit(126);
                  if (t2(a2, 65377, 65439))
                    return e5.emit(142, a2 - 65377 + 161);
                  var u2 = f(a2, h.jis0208);
                  if (null === u2)
                    return s();
                  var c2 = n(u2, 94) + 161, l2 = u2 % 94 + 161;
                  return e5.emit(c2, l2);
                };
              }(e3);
            }, u["euc-jp"].getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = 0, a2 = 0;
                this.decode = function(e5) {
                  var u2, c2, f2 = e5.get();
                  return f2 === r ? 0 === s2 && 0 === a2 ? i : (s2 = 0, a2 = 0, o(n2)) : (e5.offset(1), 0 !== a2 ? (u2 = a2, a2 = 0, c2 = null, t2(u2, 161, 254) && t2(f2, 161, 254) && (c2 = l(94 * (u2 - 161) + f2 - 161, h.jis0212)), t2(f2, 161, 254) || e5.offset(-1), null === c2 ? o(n2) : c2) : 142 === s2 && t2(f2, 161, 223) ? (s2 = 0, 65377 + f2 - 161) : 143 === s2 && t2(f2, 161, 254) ? (s2 = 0, a2 = f2, null) : 0 !== s2 ? (u2 = s2, s2 = 0, c2 = null, t2(u2, 161, 254) && t2(f2, 161, 254) && (c2 = l(94 * (u2 - 161) + f2 - 161, h.jis0208)), t2(f2, 161, 254) || e5.offset(-1), null === c2 ? o(n2) : c2) : t2(f2, 0, 127) ? f2 : 142 === f2 || 143 === f2 || t2(f2, 161, 254) ? (s2 = f2, null) : o(n2));
                };
              }(e3);
            }, u["iso-2022-jp"].getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal;
                var o2 = 0, a2 = 1, u2 = 2, c2 = o2;
                this.encode = function(e5, l2) {
                  var _2 = l2.get();
                  if (_2 === i)
                    return r;
                  if (l2.offset(1), (t2(_2, 0, 127) || 165 === _2 || 8254 === _2) && c2 !== o2)
                    return l2.offset(-1), c2 = o2, e5.emit(27, 40, 66);
                  if (t2(_2, 0, 127))
                    return e5.emit(_2);
                  if (165 === _2)
                    return e5.emit(92);
                  if (8254 === _2)
                    return e5.emit(126);
                  if (t2(_2, 65377, 65439) && c2 !== u2)
                    return l2.offset(-1), c2 = u2, e5.emit(27, 40, 73);
                  if (t2(_2, 65377, 65439))
                    return e5.emit(_2 - 65377 - 33);
                  if (c2 !== a2)
                    return l2.offset(-1), c2 = a2, e5.emit(27, 36, 66);
                  var y2 = f(_2, h.jis0208);
                  if (null === y2)
                    return s();
                  var p2 = n(y2, 94) + 33, d2 = y2 % 94 + 33;
                  return e5.emit(p2, d2);
                };
              }(e3);
            }, u["iso-2022-jp"].getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = 0, a2 = 1, u2 = 2, c2 = 3, f2 = 4, _2 = 5, y2 = 6, p2 = s2, d2 = false, g2 = 0;
                this.decode = function(e5) {
                  var v2 = e5.get();
                  switch (v2 !== r && e5.offset(1), p2) {
                    default:
                    case s2:
                      return 27 === v2 ? (p2 = a2, null) : t2(v2, 0, 127) ? v2 : v2 === r ? i : o(n2);
                    case a2:
                      return 36 === v2 || 40 === v2 ? (g2 = v2, p2 = u2, null) : (v2 !== r && e5.offset(-1), p2 = s2, o(n2));
                    case u2:
                      var b2 = g2;
                      return g2 = 0, 36 !== b2 || 64 !== v2 && 66 !== v2 ? 36 === b2 && 40 === v2 ? (p2 = c2, null) : 40 !== b2 || 66 !== v2 && 74 !== v2 ? 40 === b2 && 73 === v2 ? (p2 = y2, null) : (v2 === r ? e5.offset(-1) : e5.offset(-2), p2 = s2, o(n2)) : (p2 = s2, null) : (d2 = false, p2 = f2, null);
                    case c2:
                      return 68 === v2 ? (d2 = true, p2 = f2, null) : (v2 === r ? e5.offset(-2) : e5.offset(-3), p2 = s2, o(n2));
                    case f2:
                      return 10 === v2 ? (p2 = s2, o(n2, 10)) : 27 === v2 ? (p2 = a2, null) : v2 === r ? i : (g2 = v2, p2 = _2, null);
                    case _2:
                      if (p2 = f2, v2 === r)
                        return o(n2);
                      var m = null, S = 94 * (g2 - 33) + v2 - 33;
                      return t2(g2, 33, 126) && t2(v2, 33, 126) && (m = l(S, false === d2 ? h.jis0208 : h.jis0212)), null === m ? o(n2) : m;
                    case y2:
                      return 27 === v2 ? (p2 = a2, null) : t2(v2, 33, 95) ? 65377 + v2 - 33 : v2 === r ? i : o(n2);
                  }
                };
              }(e3);
            }, u.shift_jis.getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal, this.encode = function(e5, o2) {
                  var a2 = o2.get();
                  if (a2 === i)
                    return r;
                  if (o2.offset(1), t2(a2, 0, 128))
                    return e5.emit(a2);
                  if (165 === a2)
                    return e5.emit(92);
                  if (8254 === a2)
                    return e5.emit(126);
                  if (t2(a2, 65377, 65439))
                    return e5.emit(a2 - 65377 + 161);
                  var u2 = f(a2, h.jis0208);
                  if (null === u2)
                    return s();
                  var c2 = n(u2, 188), l2 = c2 < 31 ? 129 : 193, _2 = u2 % 188, y2 = _2 < 63 ? 64 : 65;
                  return e5.emit(c2 + l2, _2 + y2);
                };
              }(e3);
            }, u.shift_jis.getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = 0;
                this.decode = function(e5) {
                  var a2 = e5.get();
                  if (a2 === r && 0 === s2)
                    return i;
                  if (a2 === r && 0 !== s2)
                    return s2 = 0, o(n2);
                  if (e5.offset(1), 0 !== s2) {
                    var u2 = s2;
                    if (s2 = 0, t2(a2, 64, 126) || t2(a2, 128, 252)) {
                      var c2 = l(188 * (u2 - (u2 < 160 ? 129 : 193)) + a2 - (a2 < 127 ? 64 : 65), h.jis0208);
                      return null === c2 ? o(n2) : c2;
                    }
                    return e5.offset(-1), o(n2);
                  }
                  return t2(a2, 0, 128) ? a2 : t2(a2, 161, 223) ? 65377 + a2 - 161 : t2(a2, 129, 159) || t2(a2, 224, 252) ? (s2 = a2, null) : o(n2);
                };
              }(e3);
            }, u["euc-kr"].getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal, this.encode = function(e5, o2) {
                  var a2 = o2.get();
                  if (a2 === i)
                    return r;
                  if (o2.offset(1), t2(a2, 0, 127))
                    return e5.emit(a2);
                  var u2, c2, l2 = f(a2, h["euc-kr"]);
                  if (null === l2)
                    return s();
                  if (l2 < 12460) {
                    u2 = n(l2, 178) + 129;
                    var _2 = (c2 = l2 % 178) < 26 ? 65 : c2 < 52 ? 71 : 77;
                    return e5.emit(u2, c2 + _2);
                  }
                  return u2 = n(l2 -= 12460, 94) + 199, c2 = l2 % 94 + 161, e5.emit(u2, c2);
                };
              }(e3);
            }, u["euc-kr"].getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = 0;
                this.decode = function(e5) {
                  var a2 = e5.get();
                  if (a2 === r && 0 === s2)
                    return i;
                  if (a2 === r && 0 !== s2)
                    return s2 = 0, o(n2);
                  if (e5.offset(1), 0 !== s2) {
                    var u2 = s2, c2 = null;
                    if (s2 = 0, t2(u2, 129, 198)) {
                      var f2 = 178 * (u2 - 129);
                      t2(a2, 65, 90) ? c2 = f2 + a2 - 65 : t2(a2, 97, 122) ? c2 = f2 + 26 + a2 - 97 : t2(a2, 129, 254) && (c2 = f2 + 26 + 26 + a2 - 129);
                    }
                    t2(u2, 199, 253) && t2(a2, 161, 254) && (c2 = 12460 + 94 * (u2 - 199) + (a2 - 161));
                    var _2 = null === c2 ? null : l(c2, h["euc-kr"]);
                    return null === c2 && e5.offset(-1), null === _2 ? o(n2) : _2;
                  }
                  return t2(a2, 0, 127) ? a2 : t2(a2, 129, 253) ? (s2 = a2, null) : o(n2);
                };
              }(e3);
            }, u["iso-2022-kr"].getEncoder = function(e3) {
              return new function(e4) {
                e4.fatal;
                var o2 = 0, a2 = 1, u2 = false, c2 = o2;
                this.encode = function(e5, l2) {
                  var _2 = l2.get();
                  if (_2 === i)
                    return r;
                  if (u2 || (u2 = true, e5.emit(27, 36, 41, 67)), l2.offset(1), t2(_2, 0, 127) && c2 !== o2)
                    return l2.offset(-1), c2 = o2, e5.emit(15);
                  if (t2(_2, 0, 127))
                    return e5.emit(_2);
                  if (c2 !== a2)
                    return l2.offset(-1), c2 = a2, e5.emit(14);
                  var y2, p2, d2 = f(_2, h["euc-kr"]);
                  return null === d2 ? s() : d2 < 12460 ? (p2 = d2 % 178 - 26 - 26 + 1, t2(y2 = n(d2, 178) + 1, 33, 70) && t2(p2, 33, 126) ? e5.emit(y2, p2) : s()) : (p2 = (d2 -= 12460) % 94 + 33, t2(y2 = n(d2, 94) + 71, 71, 126) && t2(p2, 33, 126) ? e5.emit(y2, p2) : s());
                };
              }(e3);
            }, u["iso-2022-kr"].getDecoder = function(e3) {
              return new function(e4) {
                var n2 = e4.fatal, s2 = 0, a2 = 1, u2 = 2, c2 = 3, f2 = 4, _2 = 5, y2 = s2, p2 = 0;
                this.decode = function(e5) {
                  var d2 = e5.get();
                  switch (d2 !== r && e5.offset(1), y2) {
                    default:
                    case s2:
                      return 14 === d2 ? (y2 = f2, null) : 15 === d2 ? null : 27 === d2 ? (y2 = a2, null) : t2(d2, 0, 127) ? d2 : d2 === r ? i : o(n2);
                    case a2:
                      return 36 === d2 ? (y2 = u2, null) : (d2 !== r && e5.offset(-1), y2 = s2, o(n2));
                    case u2:
                      return 41 === d2 ? (y2 = c2, null) : (d2 === r ? e5.offset(-1) : e5.offset(-2), y2 = s2, o(n2));
                    case c2:
                      return 67 === d2 ? (y2 = s2, null) : (d2 === r ? e5.offset(-2) : e5.offset(-3), y2 = s2, o(n2));
                    case f2:
                      return 10 === d2 ? (y2 = s2, o(n2, 10)) : 14 === d2 ? null : 15 === d2 ? (y2 = s2, null) : d2 === r ? i : (p2 = d2, y2 = _2, null);
                    case _2:
                      if (y2 = f2, d2 === r)
                        return o(n2);
                      var g2 = null;
                      return t2(p2, 33, 70) && t2(d2, 33, 126) ? g2 = l(178 * (p2 - 1) + 26 + 26 + d2 - 1, h["euc-kr"]) : t2(p2, 71, 126) && t2(d2, 33, 126) && (g2 = l(12460 + 94 * (p2 - 71) + (d2 - 33), h["euc-kr"])), null !== g2 ? g2 : o(n2);
                  }
                };
              }(e3);
            }, u["utf-16"].getEncoder = function(e3) {
              return new d(false, e3);
            }, u["utf-16"].getDecoder = function(e3) {
              return new p(false, e3);
            }, u["utf-16be"].getEncoder = function(e3) {
              return new d(true, e3);
            }, u["utf-16be"].getDecoder = function(e3) {
              return new p(true, e3);
            };
            var g = "utf-8";
            function v(t3, n2) {
              return this && this !== e2 ? (t3 = t3 ? String(t3) : g, n2 = Object(n2), this._encoding = a(t3), this._streaming = false, this._encoder = null, this._options = { fatal: Boolean(n2.fatal) }, Object.defineProperty ? Object.defineProperty(this, "encoding", { get: function() {
                return this._encoding.name;
              } }) : this.encoding = this._encoding.name, this) : new v(t3, n2);
            }
            __name(v, "v");
            function b(t3, n2) {
              return this && this !== e2 ? (t3 = t3 ? String(t3) : g, n2 = Object(n2), this._encoding = a(t3), this._streaming = false, this._decoder = null, this._options = { fatal: Boolean(n2.fatal) }, Object.defineProperty ? Object.defineProperty(this, "encoding", { get: function() {
                return this._encoding.name;
              } }) : this.encoding = this._encoding.name, this) : new b(t3, n2);
            }
            __name(b, "b");
            v.prototype = { encode: function(e3, n2) {
              e3 = e3 ? String(e3) : "", n2 = Object(n2), this._streaming || (this._encoder = this._encoding.getEncoder(this._options)), this._streaming = Boolean(n2.stream);
              for (var o2 = [], s2 = new function(e4) {
                var t3 = 0;
                this.emit = function(n3) {
                  var i2, o3 = r;
                  for (i2 = 0; i2 < arguments.length; ++i2)
                    o3 = Number(arguments[i2]), e4[t3++] = o3;
                  return o3;
                };
              }(o2), a2 = new function(e4) {
                var n3 = 0, r2 = function() {
                  for (var n4 = [], r3 = 0, i2 = e4.length; r3 < e4.length; ) {
                    var o3 = e4.charCodeAt(r3);
                    if (t2(o3, 55296, 57343))
                      if (t2(o3, 56320, 57343))
                        n4.push(65533);
                      else if (r3 === i2 - 1)
                        n4.push(65533);
                      else {
                        var s3 = e4.charCodeAt(r3 + 1);
                        if (t2(s3, 56320, 57343)) {
                          var a3 = 1023 & o3, u3 = 1023 & s3;
                          r3 += 1, n4.push(65536 + (a3 << 10) + u3);
                        } else
                          n4.push(65533);
                      }
                    else
                      n4.push(o3);
                    r3 += 1;
                  }
                  return n4;
                }();
                this.offset = function(e5) {
                  if ((n3 += e5) < 0)
                    throw new Error("Seeking past start of the buffer");
                  if (n3 > r2.length)
                    throw new Error("Seeking past EOF");
                }, this.get = function() {
                  return n3 >= r2.length ? i : r2[n3];
                };
              }(e3); a2.get() !== i; )
                this._encoder.encode(s2, a2);
              if (!this._streaming) {
                var u2;
                do {
                  u2 = this._encoder.encode(s2, a2);
                } while (u2 !== r);
                this._encoder = null;
              }
              return new Uint8Array(o2);
            } }, b.prototype = { decode: function(e3, t3) {
              if (e3 && !("buffer" in e3 && "byteOffset" in e3 && "byteLength" in e3))
                throw new TypeError("Expected ArrayBufferView");
              e3 || (e3 = new Uint8Array(0)), t3 = Object(t3), this._streaming || (this._decoder = this._encoding.getDecoder(this._options)), this._streaming = Boolean(t3.stream);
              var n2 = new function(e4) {
                var t4 = 0;
                this.get = function() {
                  return t4 >= e4.length ? r : Number(e4[t4]);
                }, this.offset = function(n3) {
                  if ((t4 += n3) < 0)
                    throw new Error("Seeking past start of the buffer");
                  if (t4 > e4.length)
                    throw new Error("Seeking past EOF");
                }, this.match = function(n3) {
                  if (n3.length > t4 + e4.length)
                    return false;
                  var r2;
                  for (r2 = 0; r2 < n3.length; r2 += 1)
                    if (Number(e4[t4 + r2]) !== n3[r2])
                      return false;
                  return true;
                };
              }(new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength));
              if (a(function(e4, t4) {
                return t4.match([255, 254]) ? (t4.offset(2), "utf-16") : t4.match([254, 255]) ? (t4.offset(2), "utf-16be") : t4.match([239, 187, 191]) ? (t4.offset(3), "utf-8") : e4;
              }(this._encoding.name, n2)) !== this._encoding)
                throw new Error("BOM mismatch");
              for (var o2, s2 = new function() {
                var e4 = "";
                this.string = function() {
                  return e4;
                }, this.emit = function(t4) {
                  t4 <= 65535 ? e4 += String.fromCharCode(t4) : (t4 -= 65536, e4 += String.fromCharCode(55296 + (t4 >> 10 & 1023)), e4 += String.fromCharCode(56320 + (1023 & t4)));
                };
              }(); n2.get() !== r; )
                null !== (o2 = this._decoder.decode(n2)) && o2 !== i && s2.emit(o2);
              if (!this._streaming) {
                do {
                  null !== (o2 = this._decoder.decode(n2)) && o2 !== i && s2.emit(o2);
                } while (o2 !== i);
                this._decoder = null;
              }
              return s2.string();
            } }, e2.TextEncoder = e2.TextEncoder || v, e2.TextDecoder = e2.TextDecoder || b;
          }(this);
        }, function(e, t) {
          e.exports = function(e2) {
            return e2.webpackPolyfill || (e2.deprecate = function() {
            }, e2.paths = [], e2.children || (e2.children = []), Object.defineProperty(e2, "loaded", { enumerable: true, get: function() {
              return e2.l;
            } }), Object.defineProperty(e2, "id", { enumerable: true, get: function() {
              return e2.i;
            } }), e2.webpackPolyfill = 1), e2;
          };
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SFSDataSerializer = void 0;
          var r, i = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), o = n(120), s = (r = o) && r.__esModule ? r : { default: r }, a = n(172), u = n(8);
          var c = Symbol(), l = Symbol(), f = function() {
            function e2(t2) {
              if (function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), t2 !== l)
                throw "SFSDataSerializer is a singleton class; you can't instantiate it";
            }
            __name(e2, "e");
            return i(e2, [{ key: "object2binary", value: function(e3) {
              var t2 = new s.default(new ArrayBuffer(0), 0, s.default.BIG_ENDIAN);
              return t2.writeInt8(u.SFSDataType.SFS_OBJECT), t2.writeInt16(e3.size()), this.obj2bin(e3, t2), new Uint8Array(t2.buffer);
            } }, { key: "obj2bin", value: function(e3, t2) {
              var n2 = true, r2 = false, i2 = void 0;
              try {
                for (var o2, s2 = e3.keys()[Symbol.iterator](); !(n2 = (o2 = s2.next()).done); n2 = true) {
                  var a2 = o2.value, u2 = e3.getWrappedItem(a2);
                  this.encodeSFSObjectKey(t2, a2), this.encodeObject(t2, u2);
                }
              } catch (e4) {
                r2 = true, i2 = e4;
              } finally {
                try {
                  !n2 && s2.return && s2.return();
                } finally {
                  if (r2)
                    throw i2;
                }
              }
            } }, { key: "array2binary", value: function(e3) {
              var t2 = new s.default(new ArrayBuffer(0), 0, s.default.BIG_ENDIAN);
              return t2.writeInt8(u.SFSDataType.SFS_ARRAY), t2.writeInt16(e3.size()), this.arr2bin(e3, t2), new Uint8Array(t2.buffer);
            } }, { key: "arr2bin", value: function(e3, t2) {
              for (var n2 = 0; n2 < e3.size(); n2++) {
                var r2 = e3.getWrappedItem(n2);
                this.encodeObject(t2, r2);
              }
            } }, { key: "encodeSFSObjectKey", value: function(e3, t2) {
              e3.writeInt16(t2.length), e3.writeUint8Array(new a.TextEncoder("utf-8").encode(t2));
            } }, { key: "encodeObject", value: function(e3, t2) {
              var n2 = t2.type;
              if (n2 === u.SFSDataType.NULL)
                this.binEncode_NULL(e3, t2);
              else if (n2 === u.SFSDataType.BOOL)
                this.binEncode_BOOL(e3, t2);
              else if (n2 === u.SFSDataType.BOOL_ARRAY)
                this.binEncode_BOOL_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.BYTE)
                this.binEncode_BYTE(e3, t2);
              else if (n2 === u.SFSDataType.BYTE_ARRAY)
                this.binEncode_BYTE_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.SHORT)
                this.binEncode_SHORT(e3, t2);
              else if (n2 === u.SFSDataType.SHORT_ARRAY)
                this.binEncode_SHORT_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.INT)
                this.binEncode_INT(e3, t2);
              else if (n2 === u.SFSDataType.INT_ARRAY)
                this.binEncode_INT_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.LONG)
                this.binEncode_LONG(e3, t2);
              else if (n2 === u.SFSDataType.LONG_ARRAY)
                this.binEncode_LONG_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.FLOAT)
                this.binEncode_FLOAT(e3, t2);
              else if (n2 === u.SFSDataType.FLOAT_ARRAY)
                this.binEncode_FLOAT_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.DOUBLE)
                this.binEncode_DOUBLE(e3, t2);
              else if (n2 === u.SFSDataType.DOUBLE_ARRAY)
                this.binEncode_DOUBLE_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.UTF_STRING)
                this.binEncode_UTF_STRING(e3, t2);
              else if (n2 === u.SFSDataType.TEXT)
                this.binEncode_TEXT(e3, t2);
              else if (n2 === u.SFSDataType.UTF_STRING_ARRAY)
                this.binEncode_UTF_STRING_ARRAY(e3, t2);
              else if (n2 === u.SFSDataType.SFS_ARRAY)
                e3.writeUint8Array(this.array2binary(t2.value));
              else {
                if (n2 !== u.SFSDataType.SFS_OBJECT)
                  throw "Unknow SFSDataType ID: " + n2;
                e3.writeUint8Array(this.object2binary(t2.value));
              }
              return e3;
            } }, { key: "binEncode_NULL", value: function(e3, t2) {
              e3.writeUint8(t2.type);
            } }, { key: "binEncode_BOOL", value: function(e3, t2) {
              e3.writeUint8(t2.type), e3.writeUint8(t2.value ? 1 : 0);
            } }, { key: "binEncode_BOOL_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint16(n2.length);
              for (var r2 = 0; r2 < n2.length; r2++)
                e3.writeUint8(n2[r2] ? 1 : 0);
            } }, { key: "binEncode_BYTE", value: function(e3, t2) {
              e3.writeUint8(t2.type), e3.writeUint8(t2.value);
            } }, { key: "binEncode_BYTE_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint32(n2.length), e3.writeUint8Array(n2);
            } }, { key: "binEncode_SHORT", value: function(e3, t2) {
              e3.writeUint8(t2.type), e3.writeUint16(t2.value);
            } }, { key: "binEncode_SHORT_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint16(n2.length);
              for (var r2 = 0; r2 < n2.length; r2++)
                e3.writeUint16(n2[r2]);
            } }, { key: "binEncode_INT", value: function(e3, t2) {
              e3.writeUint8(t2.type), e3.writeUint32(t2.value);
            } }, { key: "binEncode_INT_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint16(n2.length);
              for (var r2 = 0; r2 < n2.length; r2++)
                e3.writeUint32(n2[r2]);
            } }, { key: "binEncode_LONG", value: function(e3, t2) {
              var n2 = t2.value, r2 = Math.floor(n2 / Math.pow(2, 32)), i2 = n2 % Math.pow(2, 32);
              e3.writeUint8(t2.type), e3.writeInt32(r2), e3.writeInt32(i2);
            } }, { key: "binEncode_LONG_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint16(n2.length);
              for (var r2 = 0; r2 < n2.length; r2++) {
                var i2 = n2[r2], o2 = Math.floor(i2 / Math.pow(2, 32)), s2 = i2 % Math.pow(2, 32);
                e3.writeInt32(o2), e3.writeInt32(s2);
              }
            } }, { key: "binEncode_FLOAT", value: function(e3, t2) {
              e3.writeUint8(t2.type), e3.writeFloat32(t2.value);
            } }, { key: "binEncode_FLOAT_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint16(n2.length);
              for (var r2 = 0; r2 < n2.length; r2++)
                e3.writeFloat32(n2[r2]);
            } }, { key: "binEncode_DOUBLE", value: function(e3, t2) {
              e3.writeUint8(t2.type), e3.writeFloat64(t2.value);
            } }, { key: "binEncode_DOUBLE_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint16(n2.length);
              for (var r2 = 0; r2 < n2.length; r2++)
                e3.writeFloat64(n2[r2]);
            } }, { key: "binEncode_UTF_STRING", value: function(e3, t2) {
              var n2 = new a.TextEncoder("utf-8").encode(t2.value);
              e3.writeUint8(t2.type), e3.writeUint16(n2.length), e3.writeUint8Array(n2);
            } }, { key: "binEncode_TEXT", value: function(e3, t2) {
              var n2 = new a.TextEncoder("utf-8").encode(t2.value);
              e3.writeUint8(t2.type), e3.writeUint32(n2.length), e3.writeUint8Array(n2);
            } }, { key: "binEncode_UTF_STRING_ARRAY", value: function(e3, t2) {
              var n2 = t2.value;
              e3.writeUint8(t2.type), e3.writeUint16(n2.length);
              for (var r2 = 0; r2 < n2.length; r2++) {
                var i2 = new a.TextEncoder("utf-8").encode(n2[r2]);
                e3.writeUint16(i2.byteLength), e3.writeUint8Array(i2);
              }
            } }, { key: "binary2object", value: function(e3) {
              if (e3.byteLength < 3)
                throw "Can't decode an SFSObject. Byte data is insufficient. Size: " + e3.byteLength + " bytes";
              return this.decodeSFSObject(new s.default(e3, 0, s.default.BIG_ENDIAN));
            } }, { key: "binary2array", value: function(e3) {
              if (e3.byteLength < 3)
                throw "Can't decode an SFSArray. Byte data is insufficient. Size: " + e3.byteLength + " bytes";
              return this.decodeSFSArray(new s.default(e3, 0, s.default.BIG_ENDIAN));
            } }, { key: "decodeSFSObject", value: function(e3) {
              var t2 = new u.SFSObject(), n2 = e3.readUint8();
              if (n2 !== u.SFSDataType.SFS_OBJECT)
                throw "Invalid SFSDataType. Expected: " + u.SFSDataType.SFS_OBJECT + ", found: " + n2;
              var r2 = e3.readUint16();
              if (r2 < 0)
                throw "Can't decode SFSObject. Size is negative: " + r2;
              try {
                for (var i2 = 0; i2 < r2; i2++) {
                  var o2 = e3.readUint16();
                  if (o2 < 0 || o2 > 255)
                    throw "Invalid SFSObject key length. Found: " + o2;
                  var s2 = e3.readUint8Array(o2), a2 = String.fromCharCode.apply(String, s2), c2 = this.decodeObject(e3);
                  if (null == c2)
                    throw "Could not decode value for key: " + a2;
                  t2.put(a2, c2.value, c2.type, true);
                }
              } catch (e4) {
                throw e4;
              }
              return t2;
            } }, { key: "decodeSFSArray", value: function(e3) {
              var t2 = new u.SFSArray(), n2 = e3.readUint8();
              if (n2 !== u.SFSDataType.SFS_ARRAY)
                throw "Invalid SFSDataType. Expected: " + u.SFSDataType.SFS_ARRAY + ", found: " + n2;
              var r2 = e3.readInt16();
              if (r2 < 0)
                throw "Can't decode SFSArray. Size is negative: " + r2;
              try {
                for (var i2 = 0; i2 < r2; i2++) {
                  var o2 = this.decodeObject(e3);
                  if (null == o2)
                    throw "Could not decode value for index: " + i2;
                  t2.add(o2.value, o2.type, true);
                }
              } catch (e4) {
                throw e4;
              }
              return t2;
            } }, { key: "decodeObject", value: function(e3) {
              var t2 = null, n2 = e3.readUint8();
              if (n2 === u.SFSDataType.NULL)
                t2 = this.binDecode_NULL(e3);
              else if (n2 === u.SFSDataType.BOOL)
                t2 = this.binDecode_BOOL(e3);
              else if (n2 === u.SFSDataType.BOOL_ARRAY)
                t2 = this.binDecode_BOOL_ARRAY(e3);
              else if (n2 === u.SFSDataType.BYTE)
                t2 = this.binDecode_BYTE(e3);
              else if (n2 === u.SFSDataType.BYTE_ARRAY)
                t2 = this.binDecode_BYTE_ARRAY(e3);
              else if (n2 === u.SFSDataType.SHORT)
                t2 = this.binDecode_SHORT(e3);
              else if (n2 === u.SFSDataType.SHORT_ARRAY)
                t2 = this.binDecode_SHORT_ARRAY(e3);
              else if (n2 === u.SFSDataType.INT)
                t2 = this.binDecode_INT(e3);
              else if (n2 === u.SFSDataType.INT_ARRAY)
                t2 = this.binDecode_INT_ARRAY(e3);
              else if (n2 === u.SFSDataType.LONG)
                t2 = this.binDecode_LONG(e3);
              else if (n2 === u.SFSDataType.LONG_ARRAY)
                t2 = this.binDecode_LONG_ARRAY(e3);
              else if (n2 === u.SFSDataType.FLOAT)
                t2 = this.binDecode_FLOAT(e3);
              else if (n2 === u.SFSDataType.FLOAT_ARRAY)
                t2 = this.binDecode_FLOAT_ARRAY(e3);
              else if (n2 === u.SFSDataType.DOUBLE)
                t2 = this.binDecode_DOUBLE(e3);
              else if (n2 === u.SFSDataType.DOUBLE_ARRAY)
                t2 = this.binDecode_DOUBLE_ARRAY(e3);
              else if (n2 === u.SFSDataType.UTF_STRING)
                t2 = this.binDecode_UTF_STRING(e3);
              else if (n2 === u.SFSDataType.TEXT)
                t2 = this.binDecode_TEXT(e3);
              else if (n2 === u.SFSDataType.UTF_STRING_ARRAY)
                t2 = this.binDecode_UTF_STRING_ARRAY(e3);
              else if (n2 === u.SFSDataType.SFS_ARRAY) {
                e3.seek(e3.position - 1);
                var r2 = this.decodeSFSArray(e3);
                t2 = new u.SFSDataWrapper(n2, r2);
              } else {
                if (n2 !== u.SFSDataType.SFS_OBJECT)
                  throw "Unknow SFSDataType ID: " + n2;
                e3.seek(e3.position - 1);
                var i2 = this.decodeSFSObject(e3);
                t2 = new u.SFSDataWrapper(n2, i2);
              }
              return t2;
            } }, { key: "binDecode_NULL", value: function(e3) {
              return new u.SFSDataWrapper(u.SFSDataType.NULL, null);
            } }, { key: "binDecode_BOOL", value: function(e3) {
              var t2 = e3.readUint8(), n2 = null;
              if (0 === t2)
                n2 = false;
              else {
                if (1 !== t2)
                  throw "Error decoding Bool type. Illegal value: " + t2;
                n2 = true;
              }
              return new u.SFSDataWrapper(u.SFSDataType.BOOL, n2);
            } }, { key: "binDecode_BOOL_ARRAY", value: function(e3) {
              for (var t2 = this.getTypedArraySize(e3), n2 = [], r2 = 0; r2 < t2; r2++) {
                var i2 = e3.readUint8(), o2 = null;
                if (0 === i2)
                  o2 = false;
                else {
                  if (1 !== i2)
                    throw "Error decoding Bool type. Illegal value: " + i2;
                  o2 = true;
                }
                n2.push(o2);
              }
              return new u.SFSDataWrapper(u.SFSDataType.BOOL_ARRAY, n2);
            } }, { key: "binDecode_BYTE", value: function(e3) {
              var t2 = e3.readUint8();
              return new u.SFSDataWrapper(u.SFSDataType.BYTE, t2);
            } }, { key: "binDecode_BYTE_ARRAY", value: function(e3) {
              var t2 = e3.readInt32();
              if (t2 < 0)
                throw "Error decoding typed array size. Negative size: " + t2;
              for (var n2 = new Uint8Array(t2), r2 = 0; r2 < t2; r2++)
                n2[r2] = e3.readUint8();
              return new u.SFSDataWrapper(u.SFSDataType.BYTE_ARRAY, n2);
            } }, { key: "binDecode_SHORT", value: function(e3) {
              var t2 = e3.readInt16();
              return new u.SFSDataWrapper(u.SFSDataType.SHORT, t2);
            } }, { key: "binDecode_SHORT_ARRAY", value: function(e3) {
              for (var t2 = this.getTypedArraySize(e3), n2 = [], r2 = 0; r2 < t2; r2++)
                n2.push(e3.readInt16());
              return new u.SFSDataWrapper(u.SFSDataType.SHORT_ARRAY, n2);
            } }, { key: "binDecode_INT", value: function(e3) {
              var t2 = e3.readInt32();
              return new u.SFSDataWrapper(u.SFSDataType.INT, t2);
            } }, { key: "binDecode_INT_ARRAY", value: function(e3) {
              for (var t2 = this.getTypedArraySize(e3), n2 = [], r2 = 0; r2 < t2; r2++)
                n2.push(e3.readInt32());
              return new u.SFSDataWrapper(u.SFSDataType.INT_ARRAY, n2);
            } }, { key: "binDecode_LONG", value: function(e3) {
              var t2 = e3.readInt32(), n2 = e3.readUint32(), r2 = t2 * Math.pow(2, 32) + n2;
              return new u.SFSDataWrapper(u.SFSDataType.LONG, r2);
            } }, { key: "binDecode_LONG_ARRAY", value: function(e3) {
              for (var t2 = this.getTypedArraySize(e3), n2 = [], r2 = 0; r2 < t2; r2++) {
                var i2 = e3.readInt32(), o2 = e3.readUint32(), s2 = i2 * Math.pow(2, 32) + o2;
                n2.push(s2);
              }
              return new u.SFSDataWrapper(u.SFSDataType.LONG_ARRAY, n2);
            } }, { key: "binDecode_FLOAT", value: function(e3) {
              var t2 = e3.readFloat32();
              return new u.SFSDataWrapper(u.SFSDataType.FLOAT, t2);
            } }, { key: "binDecode_FLOAT_ARRAY", value: function(e3) {
              for (var t2 = this.getTypedArraySize(e3), n2 = [], r2 = 0; r2 < t2; r2++)
                n2.push(e3.readFloat32());
              return new u.SFSDataWrapper(u.SFSDataType.FLOAT_ARRAY, n2);
            } }, { key: "binDecode_DOUBLE", value: function(e3) {
              var t2 = e3.readFloat64();
              return new u.SFSDataWrapper(u.SFSDataType.DOUBLE, t2);
            } }, { key: "binDecode_DOUBLE_ARRAY", value: function(e3) {
              for (var t2 = this.getTypedArraySize(e3), n2 = [], r2 = 0; r2 < t2; r2++)
                n2.push(e3.readFloat64());
              return new u.SFSDataWrapper(u.SFSDataType.DOUBLE_ARRAY, n2);
            } }, { key: "binDecode_UTF_STRING", value: function(e3) {
              var t2 = e3.readInt16();
              if (t2 < 0)
                throw "Error decoding UTF_STRING. Negative size: " + t2;
              var n2 = e3.readUint8Array(t2), r2 = new a.TextDecoder("utf-8").decode(n2);
              return new u.SFSDataWrapper(u.SFSDataType.UTF_STRING, r2);
            } }, { key: "binDecode_UTF_STRING_ARRAY", value: function(e3) {
              for (var t2 = this.getTypedArraySize(e3), n2 = [], r2 = 0; r2 < t2; r2++) {
                var i2 = e3.readInt16();
                if (i2 < 0)
                  throw "Error decoding UTF_STRING. Negative size: " + i2;
                var o2 = e3.readUint8Array(i2), s2 = new a.TextDecoder("utf-8").decode(o2);
                n2.push(s2);
              }
              return new u.SFSDataWrapper(u.SFSDataType.UTF_STRING_ARRAY, n2);
            } }, { key: "binDecode_TEXT", value: function(e3) {
              var t2 = e3.readInt32();
              if (t2 < 0)
                throw "Error decoding TEXT. Negative size: " + t2;
              var n2 = e3.readUint8Array(t2), r2 = new a.TextDecoder("utf-8").decode(n2);
              return new u.SFSDataWrapper(u.SFSDataType.TEXT, r2);
            } }, { key: "getTypedArraySize", value: function(e3) {
              var t2 = e3.readUint16();
              if (t2 < 0)
                throw "Error decoding typed array size. Negative size: " + t2;
              return t2;
            } }], [{ key: "instance", get: function() {
              return this[c] || (this[c] = new e2(l)), Object.seal(this[c]);
            } }]), e2;
          }();
          t.SFSDataSerializer = f;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SystemController = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(2), o = n(39), s = n(74), a = n(8), u = n(9), c = n(47), l = n(171), f = n(58), h = n(72), _ = n(59), y = n(49), p = n(73), d = n(46), g = n(51), v = n(118), b = n(117), m = n(116), S = n(57), E = n(115), R = n(114), O = n(113), w = n(70), A = n(112), I = n(111), M = n(110), T = n(109), k = n(108), P = n(107), F = n(106), j = n(105), U = n(69), N = n(170), B = n(104), L = n(103), D = n(102), Y = n(101), C = n(100), x = n(99), q = n(98);
          var V = function() {
            function e2(t2) {
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this._sfs = t2, this._logger = t2.logger, this._id = 0, this._messageHandlers = /* @__PURE__ */ new Map(), this._initMessageHandlers(), Object.freeze(this);
            }
            __name(e2, "e");
            return r(e2, null, [{ key: "KEY_ERROR_CODE", get: function() {
              return "ec";
            } }, { key: "KEY_ERROR_PARAMS", get: function() {
              return "ep";
            } }, { key: "ROOM_PARAM", get: function() {
              return "r";
            } }, { key: "USER_PARAM", get: function() {
              return "u";
            } }, { key: "USER_COUNT_PARAM", get: function() {
              return "uc";
            } }, { key: "SPECT_COUNT_PARAM", get: function() {
              return "sc";
            } }, { key: "DISCONNECTION_REASON_PARAM", get: function() {
              return "dr";
            } }]), r(e2, [{ key: "handleMessage", value: function(e3, t2) {
              var n2 = this._messageHandlers.get(t2);
              null != n2 ? (this._sfs.debug && this._logger.info("Handling server event: " + n2.name + " (" + t2 + ")"), n2.handler.call(this, e3)) : this._logger.warn("Unknown server event received; id: " + t2);
            } }, { key: "_initMessageHandlers", value: function() {
              this._setHandler(i.Requests.Handshake, this._fnHandshake), this._setHandler(i.Requests.Login, this._fnLogin), this._setHandler(i.Requests.Logout, this._fnLogout), this._setHandler(i.Requests.JoinRoom, this._fnJoinRoom), this._setHandler(i.Requests.CreateRoom, this._fnCreateRoom), this._setHandler(i.Requests.ChangeRoomName, this._fnChangeRoomName), this._setHandler(i.Requests.ChangeRoomPassword, this._fnChangeRoomPassword), this._setHandler(i.Requests.ChangeRoomCapacity, this._fnChangeRoomCapacity), this._setHandler(i.Requests.GenericMessage, this._fnGenericMessage), this._setHandler(i.Requests.SetRoomVariables, this._fnSetRoomVariables), this._setHandler(i.Requests.SetUserVariables, this._fnSetUserVariables), this._setHandler(i.Requests.SubscribeRoomGroup, this._fnSubscribeRoomGroup), this._setHandler(i.Requests.UnsubscribeRoomGroup, this._fnUnsubscribeRoomGroup), this._setHandler(i.Requests.SpectatorToPlayer, this._fnSpectatorToPlayer), this._setHandler(i.Requests.PlayerToSpectator, this._fnPlayerToSpectator), this._setHandler(i.Requests.FindRooms, this._fnFindRooms), this._setHandler(i.Requests.FindUsers, this._fnFindUsers), this._setHandler(i.Requests.PingPong, this._fnPingPong), this._setHandler(i.Requests.InitBuddyList, this._fnInitBuddyList), this._setHandler(i.Requests.AddBuddy, this._fnAddBuddy), this._setHandler(i.Requests.RemoveBuddy, this._fnRemoveBuddy), this._setHandler(i.Requests.BlockBuddy, this._fnBlockBuddy), this._setHandler(i.Requests.GoOnline, this._fnGoOnline), this._setHandler(i.Requests.SetBuddyVariables, this._fnSetBuddyVariables), this._setHandler(i.Requests.QuickJoinGame, this._fnQuickJoinGame), this._setHandler(i.Requests.InviteUsers, this._fnInviteUsers), this._setHandler(i.Requests.InvitationReply, this._fnInvitationReply), this._setHandler(i.Requests.SetUserPosition, this._fnSetUserPosition), this._setHandler(1e3, this._fnUserEnterRoom, "UserEnterRoom"), this._setHandler(1001, this._fnUserCountChange, "UserCountChange"), this._setHandler(1002, this._fnUserLost, "UserLost"), this._setHandler(1003, this._fnRoomLost, "RoomLost"), this._setHandler(1004, this._fnUserExitRoom, "UserExitRoom"), this._setHandler(1005, this._fnClientDisconnection, "ClientDisconnection"), this._setHandler(1007, this._fnSetMMOItemVariables, "SetMMOItemVariables");
            } }, { key: "_setHandler", value: function(e3, t2) {
              var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              null == n2 && (n2 = i.Requests.getNameFromId(e3)), this._messageHandlers.set(e3, { name: n2, handler: t2 });
            } }, { key: "_fnHandshake", value: function(e3) {
              this._sfs._handleHandShake(e3);
            } }, { key: "_fnLogin", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                this._populateRoomList(t2.get(v.LoginRequest.KEY_ROOMLIST)), this._sfs._mySelf = new c.SFSUser(t2.get(v.LoginRequest.KEY_ID), t2.get(v.LoginRequest.KEY_USER_NAME), true), this._sfs.mySelf._setUserManager(this._sfs.userManager), this._sfs.mySelf._privilegeId = t2.get(v.LoginRequest.KEY_PRIVILEGE_ID), this._sfs.userManager._addUser(this._sfs.mySelf);
                var n2 = {};
                n2.zone = t2.get(v.LoginRequest.KEY_ZONE_NAME), n2.user = this._sfs.mySelf, n2.data = t2.get(v.LoginRequest.KEY_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.LOGIN, n2);
              } else
                this._dispatchError(o.SFSEvent.LOGIN_ERROR, t2);
            } }, { key: "_fnLogout", value: function(e3) {
              this._sfs._handleLogout();
              var t2 = {};
              t2.zone = e3.get(b.LogoutRequest.KEY_ZONE_NAME), this._sfs.dispatchEvent(o.SFSEvent.LOGOUT, t2);
            } }, { key: "_fnJoinRoom", value: function(t2) {
              if (this._sfs._isJoining = false, null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(m.JoinRoomRequest.KEY_ROOM), r2 = t2.get(m.JoinRoomRequest.KEY_USER_LIST), i2 = this._sfs.roomManager, s2 = u.SFSRoom.fromSFSArray(n2);
                s2 = i2._replaceRoom(s2, i2.containsGroup(s2.groupId));
                for (var a2 = 0; a2 < r2.size(); a2++) {
                  var c2 = r2.get(a2), l2 = this._getOrCreateUser(c2, true, s2);
                  s2._addUser(l2);
                }
                s2._isJoined = true, this._sfs._lastJoinedRoom = s2;
                var f2 = {};
                f2.room = s2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_JOIN, f2);
              } else
                this._dispatchError(o.SFSEvent.ROOM_JOIN_ERROR, t2);
            } }, { key: "_fnCreateRoom", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = u.SFSRoom.fromSFSArray(t2.get(S.CreateRoomRequest.KEY_ROOM));
                this._sfs.roomManager._addRoom(n2);
                var r2 = {};
                r2.room = n2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_ADD, r2);
              } else
                this._dispatchError(o.SFSEvent.ROOM_CREATION_ERROR, t2);
            } }, { key: "_fnChangeRoomName", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(E.ChangeRoomNameRequest.KEY_ROOM), r2 = this._sfs.roomManager.getRoomById(n2);
                if (null != r2) {
                  var i2 = r2.name;
                  this._sfs.roomManager._changeRoomName(r2, t2.get(E.ChangeRoomNameRequest.KEY_NAME));
                  var s2 = {};
                  s2.oldName = i2, s2.room = r2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_NAME_CHANGE, s2);
                } else
                  this._logger.warn("Unexpected RoomNameChange event error; unknown Room id: " + n2);
              } else
                this._dispatchError(o.SFSEvent.ROOM_NAME_CHANGE_ERROR, t2);
            } }, { key: "_fnChangeRoomPassword", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(R.ChangeRoomPasswordStateRequest.KEY_ROOM), r2 = this._sfs.roomManager.getRoomById(n2);
                if (null != r2) {
                  this._sfs.roomManager._changeRoomPasswordState(r2, t2.get(R.ChangeRoomPasswordStateRequest.KEY_PASS));
                  var i2 = {};
                  i2.room = r2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_PASSWORD_STATE_CHANGE, i2);
                } else
                  this._logger.warn("Unexpected RoomPasswordChange event error; unknown Room id: " + n2);
              } else
                this._dispatchError(o.SFSEvent.ROOM_PASSWORD_STATE_CHANGE_ERROR, t2);
            } }, { key: "_fnChangeRoomCapacity", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(O.ChangeRoomCapacityRequest.KEY_ROOM), r2 = this._sfs.roomManager.getRoomById(n2);
                if (null != r2) {
                  this._sfs.roomManager._changeRoomCapacity(r2, t2.get(O.ChangeRoomCapacityRequest.KEY_USER_SIZE), t2.get(O.ChangeRoomCapacityRequest.KEY_SPEC_SIZE));
                  var i2 = {};
                  i2.room = r2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_CAPACITY_CHANGE, i2);
                } else
                  this._logger.warn("Unexpected RoomCapacityChange event error; unknown Room id: " + n2);
              } else
                this._dispatchError(o.SFSEvent.ROOM_CAPACITY_CHANGE_ERROR, t2);
            } }, { key: "_fnGenericMessage", value: function(e3) {
              switch (e3.get(w.GenericMessageRequest.KEY_MESSAGE_TYPE)) {
                case w.GenericMessageType.PUBLIC_MSG:
                  this._handlePublicMessage(e3);
                  break;
                case w.GenericMessageType.PRIVATE_MSG:
                  this._handlePrivateMessage(e3);
                  break;
                case w.GenericMessageType.BUDDY_MSG:
                  this._handleBuddyMessage(e3);
                  break;
                case w.GenericMessageType.MODERATOR_MSG:
                  this._handleModMessage(e3);
                  break;
                case w.GenericMessageType.ADMING_MSG:
                  this._handleAdminMessage(e3);
                  break;
                case w.GenericMessageType.OBJECT_MSG:
                  this._handleObjectMessage(e3);
              }
            } }, { key: "_handlePublicMessage", value: function(e3) {
              var t2 = e3.get(w.GenericMessageRequest.KEY_ROOM_ID), n2 = this._sfs.roomManager.getRoomById(t2);
              if (null != n2) {
                var r2 = {};
                r2.room = n2, r2.sender = this._sfs.userManager.getUserById(e3.get(w.GenericMessageRequest.KEY_USER_ID)), r2.message = e3.get(w.GenericMessageRequest.KEY_MESSAGE), r2.data = e3.get(w.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.PUBLIC_MESSAGE, r2);
              } else
                this._logger.warn("Unexpected PublicMessage event error; unknown Room id: " + t2);
            } }, { key: "_handlePrivateMessage", value: function(e3) {
              var t2 = e3.get(w.GenericMessageRequest.KEY_USER_ID), n2 = this._sfs.userManager.getUserById(t2);
              if (null == n2) {
                if (null == e3.get(w.GenericMessageRequest.KEY_SENDER_DATA))
                  return void this._logger.warn("Unexpected PublicMessage event error; missing sender details");
                n2 = c.SFSUser.fromSFSArray(e3.get(w.GenericMessageRequest.KEY_SENDER_DATA));
              }
              var r2 = {};
              r2.sender = n2, r2.message = e3.get(w.GenericMessageRequest.KEY_MESSAGE), r2.data = e3.get(w.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.PRIVATE_MESSAGE, r2);
            } }, { key: "_handleBuddyMessage", value: function(e3) {
              var t2 = e3.get(w.GenericMessageRequest.KEY_USER_ID), n2 = this._sfs.buddyManager.getBuddyById(t2), r2 = {};
              r2.isItMe = this._sfs.mySelf.id === t2, r2.buddy = n2, r2.message = e3.get(w.GenericMessageRequest.KEY_MESSAGE), r2.data = e3.get(w.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_MESSAGE, r2);
            } }, { key: "_handleObjectMessage", value: function(e3) {
              var t2 = {};
              t2.sender = this._sfs.userManager.getUserById(e3.get(w.GenericMessageRequest.KEY_USER_ID)), t2.message = e3.get(w.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.OBJECT_MESSAGE, t2);
            } }, { key: "_handleModMessage", value: function(e3) {
              var t2 = {};
              t2.sender = c.SFSUser.fromSFSArray(e3.get(w.GenericMessageRequest.KEY_SENDER_DATA)), t2.message = e3.get(w.GenericMessageRequest.KEY_MESSAGE), t2.data = e3.get(w.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.MODERATOR_MESSAGE, t2);
            } }, { key: "_handleAdminMessage", value: function(e3) {
              var t2 = {};
              t2.sender = c.SFSUser.fromSFSArray(e3.get(w.GenericMessageRequest.KEY_SENDER_DATA)), t2.message = e3.get(w.GenericMessageRequest.KEY_MESSAGE), t2.data = e3.get(w.GenericMessageRequest.KEY_XTRA_PARAMS), this._sfs.dispatchEvent(o.SFSEvent.ADMIN_MESSAGE, t2);
            } }, { key: "_fnSetRoomVariables", value: function(e3) {
              var t2 = e3.get(A.SetRoomVariablesRequest.KEY_VAR_ROOM), n2 = e3.get(A.SetRoomVariablesRequest.KEY_VAR_LIST), r2 = this._sfs.roomManager.getRoomById(t2), i2 = /* @__PURE__ */ new Set();
              if (null != r2) {
                for (var s2 = 0; s2 < n2.size(); s2++) {
                  var a2 = y.SFSRoomVariable.fromSFSArray(n2.get(s2));
                  r2._setVariable(a2), i2.add(a2.name);
                }
                var u2 = {};
                u2.changedVars = Array.from(i2), u2.room = r2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_VARIABLES_UPDATE, u2);
              } else
                this._logger.warn("Unexpected RoomVariablesUpdate event error; unknown Room id: " + t2);
            } }, { key: "_fnSetUserVariables", value: function(e3) {
              var t2 = e3.get(I.SetUserVariablesRequest.KEY_USER), n2 = e3.get(I.SetUserVariablesRequest.KEY_VAR_LIST), r2 = this._sfs.userManager.getUserById(t2), i2 = /* @__PURE__ */ new Set();
              if (null != r2) {
                for (var s2 = 0; s2 < n2.size(); s2++) {
                  var a2 = _.SFSUserVariable.fromSFSArray(n2.get(s2));
                  r2._setVariable(a2), i2.add(a2.name);
                }
                var u2 = {};
                u2.changedVars = Array.from(i2), u2.user = r2, this._sfs.dispatchEvent(o.SFSEvent.USER_VARIABLES_UPDATE, u2);
              } else
                this._logger.warn("Unexpected UserVariablesUpdate event error; unknown User id: " + t2);
            } }, { key: "_fnSubscribeRoomGroup", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(M.SubscribeRoomGroupRequest.KEY_GROUP_ID), r2 = t2.get(M.SubscribeRoomGroupRequest.KEY_ROOM_LIST);
                this._sfs.roomManager.containsGroup(n2) && this._logger.warn("Unexpected SubscribeRoomGroup event error; group already subscribed: " + n2), this._sfs.roomManager._addGroup(n2), this._populateRoomList(r2);
                var i2 = {};
                i2.groupId = n2, i2.newRooms = this._sfs.roomManager.getRoomListFromGroup(n2), this._sfs.dispatchEvent(o.SFSEvent.ROOM_GROUP_SUBSCRIBE, i2);
              } else
                this._dispatchError(o.SFSEvent.ROOM_GROUP_SUBSCRIBE_ERROR, t2);
            } }, { key: "_fnUnsubscribeRoomGroup", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(T.UnsubscribeRoomGroupRequest.KEY_GROUP_ID);
                this._sfs.roomManager.containsGroup(n2) || this._logger.warn("Unexpected UnsubscribeRoomGroup event error; group not found: " + n2 + " (maybe never subscribed, or the Room Manager doesn't contain Rooms belonging to that Group)"), this._sfs.roomManager._removeGroup(n2);
                var r2 = {};
                r2.groupId = n2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_GROUP_UNSUBSCRIBE, r2);
              } else
                this._dispatchError(o.SFSEvent.ROOM_GROUP_UNSUBSCRIBE_ERROR, t2);
            } }, { key: "_fnSpectatorToPlayer", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(k.SpectatorToPlayerRequest.KEY_ROOM_ID), r2 = t2.get(k.SpectatorToPlayerRequest.KEY_USER_ID), i2 = t2.get(k.SpectatorToPlayerRequest.KEY_PLAYER_ID), s2 = this._sfs.userManager.getUserById(r2), a2 = this._sfs.roomManager.getRoomById(n2);
                if (null != a2)
                  if (null != s2)
                    if (s2.isJoinedInRoom(a2)) {
                      s2._setPlayerId(i2, a2);
                      var u2 = {};
                      u2.room = a2, u2.user = s2, u2.playerId = i2, this._sfs.dispatchEvent(o.SFSEvent.SPECTATOR_TO_PLAYER, u2);
                    } else
                      this._logger.warn("Unexpected SpectatorToPlayer event error; User " + s2 + " not in Room " + a2);
                  else
                    this._logger.warn("Unexpected SpectatorToPlayer event error; unknown User id: " + r2);
                else
                  this._logger.warn("Unexpected SpectatorToPlayer event error; unknown Room id: " + n2);
              } else
                this._dispatchError(o.SFSEvent.SPECTATOR_TO_PLAYER_ERROR, t2);
            } }, { key: "_fnPlayerToSpectator", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(P.PlayerToSpectatorRequest.KEY_ROOM_ID), r2 = t2.get(P.PlayerToSpectatorRequest.KEY_USER_ID), i2 = this._sfs.userManager.getUserById(r2), s2 = this._sfs.roomManager.getRoomById(n2);
                if (null != s2)
                  if (null != i2)
                    if (i2.isJoinedInRoom(s2)) {
                      i2._setPlayerId(-1, s2);
                      var a2 = {};
                      a2.room = s2, a2.user = i2, this._sfs.dispatchEvent(o.SFSEvent.PLAYER_TO_SPECTATOR, a2);
                    } else
                      this._logger.warn("Unexpected PlayerToSpectator event error; User " + i2 + " not in Room " + s2);
                  else
                    this._logger.warn("Unexpected SpectatorToPlayer event error; unknown User id: " + r2);
                else
                  this._logger.warn("Unexpected SpectatorToPlayer event error; unknown Room id: " + n2);
              } else
                this._dispatchError(o.SFSEvent.PLAYER_TO_SPECTATOR_ERROR, t2);
            } }, { key: "_fnPingPong", value: function(e3) {
              var t2 = {};
              t2.lagValue = this._sfs._lagMonitor._onPingPong(), this._sfs.dispatchEvent(o.SFSEvent.PING_PONG, t2);
            } }, { key: "_fnFindRooms", value: function(e3) {
              for (var t2 = e3.get(F.FindRoomsRequest.KEY_FILTERED_ROOMS), n2 = [], r2 = 0; r2 < t2.size(); r2++) {
                var i2 = t2.get(r2), s2 = u.SFSRoom.fromSFSArray(i2), a2 = this._sfs.roomManager.getRoomById(s2.id);
                null != a2 && (s2._isJoined = a2._isJoined), n2.push(s2);
              }
              var c2 = {};
              c2.rooms = n2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_FIND_RESULT, c2);
            } }, { key: "_fnFindUsers", value: function(e3) {
              for (var t2 = e3.get(j.FindUsersRequest.KEY_FILTERED_USERS), n2 = [], r2 = this._sfs.mySelf, i2 = 0; i2 < t2.size(); i2++) {
                var s2 = t2.get(i2), a2 = c.SFSUser.fromSFSArray(s2);
                a2.id === r2.id && (a2 = r2), n2.push(a2);
              }
              var u2 = {};
              u2.users = n2, this._sfs.dispatchEvent(o.SFSEvent.USER_FIND_RESULT, u2);
            } }, { key: "_fnQuickJoinGame", value: function(t2) {
              null != t2.get(e2.KEY_ERROR_CODE) && this._dispatchError(o.SFSEvent.ROOM_JOIN_ERROR, t2);
            } }, { key: "_fnInviteUsers", value: function(e3) {
              var t2 = null;
              t2 = null != e3.get(U.InviteUsersRequest.KEY_USER_ID) ? this._sfs.userManager.getUserById(e3.get(U.InviteUsersRequest.KEY_USER_ID)) : c.SFSUser.fromSFSArray(e3.get(U.InviteUsersRequest.KEY_USER));
              var n2 = e3.get(U.InviteUsersRequest.KEY_TIME), r2 = e3.get(U.InviteUsersRequest.KEY_INVITATION_ID), i2 = e3.get(U.InviteUsersRequest.KEY_PARAMS), s2 = new h.SFSInvitation(t2, this._sfs.mySelf, n2, i2);
              s2._id = r2;
              var a2 = {};
              a2.invitation = s2, this._sfs.dispatchEvent(o.SFSEvent.INVITATION, a2);
            } }, { key: "_fnInvitationReply", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = null;
                n2 = null != t2.get(U.InviteUsersRequest.KEY_USER_ID) ? this._sfs.userManager.getUserById(t2.get(U.InviteUsersRequest.KEY_USER_ID)) : c.SFSUser.fromSFSArray(t2.get(U.InviteUsersRequest.KEY_USER));
                var r2 = t2.get(U.InviteUsersRequest.KEY_REPLY_ID), i2 = t2.get(U.InviteUsersRequest.KEY_PARAMS), s2 = {};
                s2.invitee = n2, s2.reply = r2, s2.data = i2, this._sfs.dispatchEvent(o.SFSEvent.INVITATION_REPLY, s2);
              } else
                this._dispatchError(o.SFSEvent.INVITATION_REPLY_ERROR, t2);
            } }, { key: "_fnSetUserPosition", value: function(e3) {
              var t2 = e3.get(B.SetUserPositionRequest.KEY_ROOM), n2 = this._sfs.roomManager.getRoomById(t2), r2 = e3.get(B.SetUserPositionRequest.KEY_MINUS_USER_LIST), i2 = e3.get(B.SetUserPositionRequest.KEY_PLUS_USER_LIST), s2 = e3.get(B.SetUserPositionRequest.KEY_MINUS_ITEM_LIST), u2 = e3.get(B.SetUserPositionRequest.KEY_PLUS_ITEM_LIST), c2 = [], f2 = [], h2 = [], _2 = [];
              if (null != r2) {
                var y2 = true, p2 = false, d2 = void 0;
                try {
                  for (var g2, v2 = r2[Symbol.iterator](); !(y2 = (g2 = v2.next()).done); y2 = true) {
                    var b2 = g2.value, m2 = n2.getUserById(b2);
                    null != m2 && (n2._removeUser(m2), f2.push(m2));
                  }
                } catch (e4) {
                  p2 = true, d2 = e4;
                } finally {
                  try {
                    !y2 && v2.return && v2.return();
                  } finally {
                    if (p2)
                      throw d2;
                  }
                }
              }
              if (null != i2)
                for (var S2 = 0; S2 < i2.size(); S2++) {
                  var E2 = i2.get(S2), R2 = this._getOrCreateUser(E2, true, n2);
                  c2.push(R2), n2._addUser(R2);
                  var O2 = E2.get(5);
                  null != O2 && (R2._aoiEntryPoint = a.Vec3D.fromArray(O2));
                }
              if (null != s2) {
                var w2 = true, A2 = false, I2 = void 0;
                try {
                  for (var M2, T2 = s2[Symbol.iterator](); !(w2 = (M2 = T2.next()).done); w2 = true) {
                    var k2 = M2.value, P2 = n2.getMMOItem(k2);
                    null != P2 && (n2._removeItem(P2.id), _2.push(P2));
                  }
                } catch (e4) {
                  A2 = true, I2 = e4;
                } finally {
                  try {
                    !w2 && T2.return && T2.return();
                  } finally {
                    if (A2)
                      throw I2;
                  }
                }
              }
              if (null != u2)
                for (var F2 = 0; F2 < u2.size(); F2++) {
                  var j2 = u2.get(F2), U2 = l.MMOItem.fromSFSArray(j2);
                  h2.push(U2), n2._addMMOItem(U2);
                  var N2 = j2.get(2);
                  null != N2 && (U2._aoiEntryPoint = a.Vec3D.fromArray(N2));
                }
              var L2 = {};
              L2.addedItems = h2, L2.removedItems = _2, L2.removedUsers = f2, L2.addedUsers = c2, L2.room = n2, this._sfs.dispatchEvent(o.SFSEvent.PROXIMITY_LIST_UPDATE, L2);
            } }, { key: "_fnInitBuddyList", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(L.InitBuddyListRequest.KEY_BLIST), r2 = t2.get(L.InitBuddyListRequest.KEY_MY_VARS), i2 = t2.get(L.InitBuddyListRequest.KEY_BUDDY_STATES);
                this._sfs.buddyManager._clearAll();
                for (var s2 = 0; s2 < n2.size(); s2++) {
                  var a2 = f.SFSBuddy.fromSFSArray(n2.get(s2));
                  this._sfs.buddyManager._addBuddy(a2);
                }
                null != i2 && this._sfs.buddyManager._setBuddyStates(i2);
                for (var u2 = [], c2 = 0; c2 < r2.size(); c2++) {
                  var l2 = d.SFSBuddyVariable.fromSFSArray(r2.get(c2));
                  u2.push(l2);
                }
                this._sfs.buddyManager._setMyVariables(u2), this._sfs.buddyManager._setInited();
                var h2 = {};
                h2.buddyList = this._sfs.buddyManager.getBuddyList(), h2.myVariables = this._sfs.buddyManager.getMyVariables(), this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_LIST_INIT, h2);
              } else
                this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t2);
            } }, { key: "_fnAddBuddy", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = f.SFSBuddy.fromSFSArray(t2.get(D.AddBuddyRequest.KEY_BUDDY_NAME));
                this._sfs.buddyManager._addBuddy(n2);
                var r2 = {};
                r2.buddy = n2, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_ADD, r2);
              } else
                this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t2);
            } }, { key: "_fnRemoveBuddy", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(Y.RemoveBuddyRequest.KEY_BUDDY_NAME), r2 = this._sfs.buddyManager._removeBuddyByName(n2);
                if (null != r2) {
                  var i2 = {};
                  i2.buddy = r2, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_REMOVE, i2);
                } else
                  this._logger.warn("Unexpected RemoveBuddy event error; can't find " + n2 + " in local buddy list");
              } else
                this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t2);
            } }, { key: "_fnBlockBuddy", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(C.BlockBuddyRequest.KEY_BUDDY_NAME), r2 = this._sfs.buddyManager.getBuddyByName(n2);
                null != t2.get(C.BlockBuddyRequest.KEY_BUDDY) ? (r2 = f.SFSBuddy.fromSFSArray(t2.get(C.BlockBuddyRequest.KEY_BUDDY)), this._sfs.buddyManager._addBuddy(r2)) : null != r2 ? r2._isBlocked = t2.get(C.BlockBuddyRequest.KEY_BUDDY_BLOCK_STATE) : this._logger.warn("Unexpected BlockBuddy event error; can't find " + n2 + " in local buddy list");
                var i2 = {};
                i2.buddy = r2, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_BLOCK, i2);
              } else
                this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t2);
            } }, { key: "_fnGoOnline", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                var n2 = t2.get(x.GoOnlineRequest.KEY_BUDDY_NAME), r2 = this._sfs.buddyManager.getBuddyByName(n2), i2 = n2 === this._sfs.mySelf.name, s2 = t2.get(x.GoOnlineRequest.KEY_ONLINE), a2 = s2 === f.BuddyOnlineState.ONLINE, u2 = true;
                if (i2)
                  this._sfs.buddyManager.getMyOnlineState() != a2 && (this._logger.warn("Unexpected GoOnline event error; current user's online state is not in synch with the server; resynching to: " + a2), this._sfs.buddyManager._setMyOnlineState(a2));
                else {
                  if (null == r2)
                    return void this._logger.warn("Unexpected GoOnline event error; can't find " + n2 + " in local buddy list");
                  r2._id = t2.get(x.GoOnlineRequest.KEY_BUDDY_ID), r2._setVariable(new d.SFSBuddyVariable(d.ReservedBuddyVariables.BV_ONLINE, a2)), s2 === f.BuddyOnlineState.LEFT_THE_SERVER && r2._clearVolatileVariables(), u2 = this._sfs.buddyManager.getMyOnlineState();
                }
                if (u2) {
                  var c2 = {};
                  c2.buddy = r2, c2.isItMe = i2, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_ONLINE_STATE_CHANGE, c2);
                }
              } else
                this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t2);
            } }, { key: "_fnSetBuddyVariables", value: function(t2) {
              if (null == t2.get(e2.KEY_ERROR_CODE)) {
                for (var n2 = t2.get(q.SetBuddyVariablesRequest.KEY_BUDDY_NAME), r2 = t2.get(q.SetBuddyVariablesRequest.KEY_BUDDY_VARS), i2 = this._sfs.buddyManager.getBuddyByName(n2), s2 = n2 === this._sfs.mySelf.name, a2 = [], u2 = [], c2 = true, l2 = 0; l2 < r2.size(); l2++) {
                  var f2 = d.SFSBuddyVariable.fromSFSArray(r2.get(l2));
                  u2.push(f2), a2.push(f2.name);
                }
                if (s2)
                  this._sfs.buddyManager._setMyVariables(u2);
                else {
                  if (null == i2)
                    return void this._logger.warn("Unexpected SetBuddyVariables event error; can't find " + n2 + " in local buddy list");
                  i2._setVariables(u2), c2 = this._sfs.buddyManager.getMyOnlineState();
                }
                if (c2) {
                  var h2 = {};
                  h2.buddy = i2, h2.isItMe = s2, h2.changedVars = a2, this._sfs.dispatchEvent(o.SFSBuddyEvent.BUDDY_VARIABLES_UPDATE, h2);
                }
              } else
                this._dispatchError(o.SFSBuddyEvent.BUDDY_ERROR, t2);
            } }, { key: "_fnUserEnterRoom", value: function(t2) {
              var n2 = this._sfs.roomManager.getRoomById(t2.get(e2.ROOM_PARAM));
              if (null != n2) {
                var r2 = t2.get(e2.USER_PARAM), i2 = this._getOrCreateUser(r2, true, n2);
                n2._addUser(i2);
                var s2 = {};
                s2.user = i2, s2.room = n2, this._sfs.dispatchEvent(o.SFSEvent.USER_ENTER_ROOM, s2);
              }
            } }, { key: "_fnUserCountChange", value: function(t2) {
              var n2 = this._sfs.roomManager.getRoomById(t2.get(e2.ROOM_PARAM));
              if (null != n2) {
                var r2 = t2.get(e2.USER_COUNT_PARAM), i2 = null != t2.get(e2.SPECT_COUNT_PARAM) ? t2.get(e2.SPECT_COUNT_PARAM) : 0;
                n2._userCount = r2, n2._specCount = i2;
                var s2 = {};
                s2.room = n2, s2.uCount = r2, s2.sCount = i2, this._sfs.dispatchEvent(o.SFSEvent.USER_COUNT_CHANGE, s2);
              }
            } }, { key: "_fnUserLost", value: function(t2) {
              var n2 = this._sfs.userManager.getUserById(t2.get(e2.USER_PARAM));
              if (null != n2) {
                var r2 = this._sfs.roomManager.getUserRooms(n2);
                this._sfs.roomManager._removeUser(n2), this._sfs.userManager._removeUserReference(n2, true);
                var i2 = true, s2 = false, a2 = void 0;
                try {
                  for (var u2, c2 = r2[Symbol.iterator](); !(i2 = (u2 = c2.next()).done); i2 = true) {
                    var l2 = u2.value, f2 = {};
                    f2.user = n2, f2.room = l2, this._sfs.dispatchEvent(o.SFSEvent.USER_EXIT_ROOM, f2);
                  }
                } catch (e3) {
                  s2 = true, a2 = e3;
                } finally {
                  try {
                    !i2 && c2.return && c2.return();
                  } finally {
                    if (s2)
                      throw a2;
                  }
                }
              }
            } }, { key: "_fnRoomLost", value: function(t2) {
              var n2 = this._sfs.roomManager.getRoomById(t2.get(e2.ROOM_PARAM));
              if (null != n2) {
                this._sfs.roomManager._removeRoom(n2);
                var r2 = true, i2 = false, s2 = void 0;
                try {
                  for (var a2, u2 = n2.getUserList()[Symbol.iterator](); !(r2 = (a2 = u2.next()).done); r2 = true) {
                    var c2 = a2.value;
                    this._sfs.userManager._removeUser(c2);
                  }
                } catch (e3) {
                  i2 = true, s2 = e3;
                } finally {
                  try {
                    !r2 && u2.return && u2.return();
                  } finally {
                    if (i2)
                      throw s2;
                  }
                }
                var l2 = {};
                l2.room = n2, this._sfs.dispatchEvent(o.SFSEvent.ROOM_REMOVE, l2);
              }
            } }, { key: "_fnUserExitRoom", value: function(t2) {
              var n2 = this._sfs.roomManager.getRoomById(t2.get(e2.ROOM_PARAM)), r2 = this._sfs.userManager.getUserById(t2.get(e2.USER_PARAM));
              if (null != n2 && null != r2) {
                n2._removeUser(r2), this._sfs.userManager._removeUser(r2), r2.isItMe && n2.isJoined && (n2._isJoined = false, 0 !== this._sfs.roomManager.getJoinedRooms().length && this._sfs._lastJoinedRoom !== n2 || (this._sfs._lastJoinedRoom = null), n2._isManaged || this._sfs.roomManager._removeRoom(n2));
                var i2 = {};
                i2.user = r2, i2.room = n2, this._sfs.dispatchEvent(o.SFSEvent.USER_EXIT_ROOM, i2);
              } else
                this._logger.debug("Failed to handle UserExit event; Room: " + n2 + ", User: " + r2);
            } }, { key: "_fnClientDisconnection", value: function(t2) {
              var n2 = t2.get(e2.DISCONNECTION_REASON_PARAM);
              this._sfs._handleClientDisconnection(g.ClientDisconnectionReason.getReason(n2));
            } }, { key: "_fnSetMMOItemVariables", value: function(e3) {
              var t2 = e3.get(N.SetMMOItemVariables.KEY_ROOM_ID), n2 = e3.get(N.SetMMOItemVariables.KEY_ITEM_ID), r2 = e3.get(N.SetMMOItemVariables.KEY_VAR_LIST), i2 = this._sfs.roomManager.getRoomById(t2), s2 = /* @__PURE__ */ new Set();
              if (null != i2) {
                var a2 = i2.getMMOItem(n2);
                if (null != a2) {
                  for (var u2 = 0; u2 < r2.size(); u2++) {
                    var c2 = p.MMOItemVariable.fromSFSArray(r2.get(u2));
                    a2._setVariable(c2), s2.add(c2.name);
                  }
                  var l2 = {};
                  l2.changedVars = Array.from(s2), l2.mmoItem = a2, l2.room = i2, this._sfs.dispatchEvent(o.SFSEvent.MMOITEM_VARIABLES_UPDATE, l2);
                } else
                  this._logger.warn("Unexpected MMOItemVariablesUpdate event error; unknown MMOItem id: " + n2);
              } else
                this._logger.warn("Unexpected MMOItemVariablesUpdate event error; unknown MMORoom id: " + t2);
            } }, { key: "_dispatchError", value: function(t2, n2) {
              var r2 = {};
              r2.errorCode = n2.get(e2.KEY_ERROR_CODE), r2.errorMessage = s.SFSErrorCodes.getErrorMessage(r2.errorCode, n2.get(e2.KEY_ERROR_PARAMS)), this._sfs.dispatchEvent(t2, r2);
            } }, { key: "_populateRoomList", value: function(e3) {
              for (var t2 = 0; t2 < e3.size(); t2++) {
                var n2 = u.SFSRoom.fromSFSArray(e3.get(t2));
                this._sfs.roomManager._replaceRoom(n2);
              }
            } }, { key: "_getOrCreateUser", value: function(e3, t2, n2) {
              var r2 = e3.get(0), i2 = this._sfs.userManager.getUserById(r2);
              if (null == i2)
                (i2 = c.SFSUser.fromSFSArray(e3, n2))._setUserManager(this._sfs.userManager);
              else {
                i2._setPlayerId(e3.get(3), n2);
                var o2 = e3.get(4);
                if (null != o2)
                  for (var s2 = 0; s2 < o2.size(); s2++)
                    i2._setVariable(_.SFSUserVariable.fromSFSArray(o2.get(s2)));
              }
              return t2 && this._sfs.userManager._addUser(i2), i2;
            } }, { key: "id", get: function() {
              return this._id;
            } }]), e2;
          }();
          t.SystemController = V;
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.SmartFox = void 0;
          var r = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var r2 = t2[n2];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
              }
            }
            __name(e2, "e");
            return function(t2, n2, r2) {
              return n2 && e2(t2.prototype, n2), r2 && e2(t2, r2), t2;
            };
          }(), i = n(175), o = n(169), s = n(39), a = n(1), u = n(168), c = n(119), l = n(166), f = n(165), h = n(2), _ = n(164), y = n(74), p = n(50), d = n(163), g = n(51);
          var v = function(e2) {
            function t2() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              !function(e4, t3) {
                if (!(e4 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var n2 = function(e4, t3) {
                if (!e4)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
              }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
              return n2._majVersion = 1, n2._minVersion = 7, n2._subVersion = 20, n2._configData = e3, n2._logger = p.Logger.instance, n2._sessionToken = null, n2._socketEngine = new u.SocketEngine(n2), n2._socketEngine.addEventListener(u.SocketEvent.CONNECT, n2._onSocketConnect, n2), n2._socketEngine.addEventListener(u.SocketEvent.DISCONNECT, n2._onSocketDisconnect, n2), n2._socketEngine.addEventListener(u.SocketEvent.DATA, n2._onSocketData, n2), n2._socketEngine.addEventListener(u.SocketEvent.IOERROR, n2._onSocketIOError, n2), n2._controllers = {}, n2._controllers[0] = new i.SystemController(n2), n2._controllers[1] = new o.ExtensionController(n2), n2._reset(), n2._clientDetails = "JavaScript", n2.debug = null != n2.config && n2.config.debug, n2.debug && (n2._logger.info("SmartFox instance ready"), n2._logger.info("SFS2X JavaScript API v" + n2.version)), Object.seal(n2), n2;
            }
            __name(t2, "t");
            return function(e3, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
            }(t2, s.EventDispatcher), r(t2, [{ key: "setClientDetails", value: function(e3, t3) {
              if (this.isConnected)
                this._logger.warn("Method setClientDetails must be called before the connection is started");
              else {
                e3 = null != e3 ? e3.replace(":", " ") : "", t3 = null != t3 ? t3.replace(":", " ") : "", this._clientDetails = e3 + ":" + t3;
              }
            } }, { key: "connect", value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              if (this.debug && this._logger.info("Attempting connection to server"), this.isConnected)
                this._logger.warn("Connection attempt interrupted: already connected");
              else if (this._socketEngine.isConnecting)
                this._logger.warn("Connection attempt interrupted: another attempt is already in progress");
              else {
                var r2 = null != this.config && null != this.config.host ? this.config.host : null, i2 = null != this.config && null != this.config.port ? this.config.port : null, o2 = null != this.config && this.config.useSSL;
                null != e3 && (r2 = e3), t3 > -1 && (i2 = t3), null != n2 && (o2 = n2), null != r2 && "string" == typeof r2 && 0 !== r2.length ? "number" != typeof i2 || i2 < 0 || i2 > 65535 ? this._logger.error("Invalid TCP connection port: " + i2) : ("boolean" != typeof o2 && (o2 = false), this._socketEngine.connect(r2, i2, o2)) : this._logger.error("Invalid connection host/address");
              }
            } }, { key: "disconnect", value: function() {
              this.isConnected && this._handleClientDisconnection(g.ClientDisconnectionReason.MANUAL);
            } }, { key: "enableLagMonitor", value: function(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
              null != this.mySelf ? (null != this._lagMonitor && this._lagMonitor.destroy(), e3 && (this._lagMonitor = new d.LagMonitor(this, t3, n2), this._lagMonitor.start())) : this._logger.warn("Lag monitoring requires that you are logged in a Zone; please retry after completing the login process");
            } }, { key: "send", value: function(e3) {
              if (this.isConnected) {
                if (null != e3.validate && null != e3.execute) {
                  this.debug && this._logger.info("Sending request '" + h.Requests.getNameFromId(e3.id) + "' to server");
                  try {
                    e3.validate(this), e3.execute(this);
                  } catch (e4) {
                    if (!(e4 instanceof a.SFSValidationError && null != e4.message))
                      throw e4;
                    var t3 = e4.message;
                    if (null != e4.errors) {
                      t3 += ":";
                      for (var n2 = 0; n2 < e4.errors.length; n2++)
                        e4.errors.length > 1 && (t3 += " " + (n2 + 1) + ")"), t3 += " " + e4.errors[n2];
                    }
                    return this._logger.error("Request failed | " + t3), false;
                  }
                  return this._socketEngine.send(e3.getMessage()), true;
                }
                this._logger.error("An invalid request was passed: " + e3);
              } else
                this._logger.error("You are not connected. Request cannot be sent: " + h.Requests.getNameFromId(e3.id));
            } }, { key: "getRoomById", value: function(e3) {
              return this.roomManager.getRoomById(e3);
            } }, { key: "getRoomByName", value: function(e3) {
              return this.roomManager.getRoomByName(e3);
            } }, { key: "getRoomList", value: function() {
              return this.roomManager.getRoomList();
            } }, { key: "getRoomListFromGroup", value: function(e3) {
              return this.roomManager.getRoomListFromGroup(e3);
            } }, { key: "getJoinedRooms", value: function() {
              return this.roomManager.getJoinedRooms();
            } }, { key: "_reset", value: function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              null != this._buddyManager && (this._buddyManager._clearAll(), this._buddyManager._inited = false), this._userManager = new c.GlobalUserManager(this), this._roomManager = new l.SFSRoomManager(this), this._buddyManager = new f.SFSBuddyManager(this), null != this._lagMonitor && this._lagMonitor.destroy(), this._lagMonitor = null, this._isJoining = false, this._currentZone = null, this._lastJoinedRoom = null, this._mySelf = null, e3 && (this._sessionToken = null);
            } }, { key: "_onSocketConnect", value: function(e3) {
              e3.success ? this.send(new _.HandshakeRequest(this.version, this._clientDetails)) : this.dispatchEvent(s.SFSEvent.CONNECTION, { success: false });
            } }, { key: "_onSocketDisconnect", value: function(e3) {
              this.dispatchEvent(s.SFSEvent.CONNECTION_LOST, { reason: e3.reason }), this._reset(true);
            } }, { key: "_onSocketData", value: function(e3) {
              var t3 = e3.targetController, n2 = e3.id, r2 = e3.content;
              null != t3 ? null != n2 ? this._controllers[t3].handleMessage(r2, n2) : this._logger.error("Incoming message rejected: Command ID is missing") : this._logger.error("Incoming message rejected: Controller ID is missing");
            } }, { key: "_onSocketIOError", value: function(e3) {
              this.dispatchEvent(s.SFSEvent.SOCKET_ERROR, { message: e3 });
            } }, { key: "_handleHandShake", value: function(e3) {
              var t3 = e3.get(h.BaseRequest.KEY_ERROR_CODE);
              if (null == t3)
                this._sessionToken = e3.get(_.HandshakeRequest.KEY_SESSION_TOKEN), this._socketEngine.maxMessageSize = e3.get(_.HandshakeRequest.KEY_MAX_MESSAGE_SIZE), this._socketEngine.compressionThreshold = e3.get(_.HandshakeRequest.KEY_COMPRESSION_THRESHOLD), this.dispatchEvent(s.SFSEvent.CONNECTION, { success: true });
              else {
                var n2 = { success: false, errorMessage: y.SFSErrorCodes.getErrorMessage(t3, e3.get(h.BaseRequest.KEY_ERROR_PARAMS)), errorCode: t3 };
                this.dispatchEvent(s.SFSEvent.CONNECTION, n2);
              }
            } }, { key: "_handleLogout", value: function() {
              this._reset();
            } }, { key: "_handleClientDisconnection", value: function(e3) {
              this.isConnected && this._socketEngine.disconnect(e3);
            } }, { key: "version", get: function() {
              return this._majVersion + "." + this._minVersion + "." + this._subVersion;
            } }, { key: "config", get: function() {
              return this._configData;
            } }, { key: "logger", get: function() {
              return this._logger;
            } }, { key: "sessionToken", get: function() {
              return this._sessionToken;
            } }, { key: "roomManager", get: function() {
              return this._roomManager;
            } }, { key: "userManager", get: function() {
              return this._userManager;
            } }, { key: "buddyManager", get: function() {
              return this._buddyManager;
            } }, { key: "mySelf", get: function() {
              return this._mySelf;
            } }, { key: "lastJoinedRoom", get: function() {
              return this._lastJoinedRoom;
            } }, { key: "isConnected", get: function() {
              return null != this._socketEngine && this._socketEngine.isConnected;
            } }, { key: "maxMessageSize", get: function() {
              return null != this._socketEngine ? this._socketEngine.maxMessageSize : 0;
            } }]), t2;
          }();
          t.SmartFox = v;
        }, function(e, t, n) {
          var r = n(0), i = n(89);
          i && r(r.S, "Reflect", { setPrototypeOf: function(e2, t2) {
            i.check(e2, t2);
            try {
              return i.set(e2, t2), true;
            } catch (e3) {
              return false;
            }
          } });
        }, function(e, t, n) {
          var r = n(10), i = n(23), o = n(31), s = n(16), a = n(0), u = n(36), c = n(5), l = n(4);
          a(a.S, "Reflect", { set: /* @__PURE__ */ __name(function e2(t2, n2, a2) {
            var f, h, _ = arguments.length < 4 ? t2 : arguments[3], y = i.f(c(t2), n2);
            if (!y) {
              if (l(h = o(t2)))
                return e2(h, n2, a2, _);
              y = u(0);
            }
            return s(y, "value") ? !(false === y.writable || !l(_) || ((f = i.f(_, n2) || u(0)).value = a2, r.f(_, n2, f), 0)) : void 0 !== y.set && (y.set.call(_, a2), true);
          }, "e") });
        }, function(e, t, n) {
          var r = n(0), i = n(5), o = Object.preventExtensions;
          r(r.S, "Reflect", { preventExtensions: function(e2) {
            i(e2);
            try {
              return o && o(e2), true;
            } catch (e3) {
              return false;
            }
          } });
        }, function(e, t, n) {
          var r = n(32), i = n(68), o = n(5), s = n(6).Reflect;
          e.exports = s && s.ownKeys || function(e2) {
            var t2 = r.f(o(e2)), n2 = i.f;
            return n2 ? t2.concat(n2(e2)) : t2;
          };
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Reflect", { ownKeys: n(180) });
        }, function(e, t, n) {
          var r = n(0), i = n(5), o = Object.isExtensible;
          r(r.S, "Reflect", { isExtensible: function(e2) {
            return i(e2), !o || o(e2);
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Reflect", { has: function(e2, t2) {
            return t2 in e2;
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(31), o = n(5);
          r(r.S, "Reflect", { getPrototypeOf: function(e2) {
            return i(o(e2));
          } });
        }, function(e, t, n) {
          var r = n(23), i = n(0), o = n(5);
          i(i.S, "Reflect", { getOwnPropertyDescriptor: function(e2, t2) {
            return r.f(o(e2), t2);
          } });
        }, function(e, t, n) {
          var r = n(23), i = n(31), o = n(16), s = n(0), a = n(4), u = n(5);
          s(s.S, "Reflect", { get: /* @__PURE__ */ __name(function e2(t2, n2) {
            var s2, c, l = arguments.length < 3 ? t2 : arguments[2];
            return u(t2) === l ? t2[n2] : (s2 = r.f(t2, n2)) ? o(s2, "value") ? s2.value : void 0 !== s2.get ? s2.get.call(l) : void 0 : a(c = i(t2)) ? e2(c, n2, l) : void 0;
          }, "e") });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(5), o = /* @__PURE__ */ __name(function(e2) {
            this._t = i(e2), this._i = 0;
            var t2, n2 = this._k = [];
            for (t2 in e2)
              n2.push(t2);
          }, "o");
          n(133)(o, "Object", function() {
            var e2, t2 = this._k;
            do {
              if (this._i >= t2.length)
                return { value: void 0, done: true };
            } while (!((e2 = t2[this._i++]) in this._t));
            return { value: e2, done: false };
          }), r(r.S, "Reflect", { enumerate: function(e2) {
            return new o(e2);
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(23).f, o = n(5);
          r(r.S, "Reflect", { deleteProperty: function(e2, t2) {
            var n2 = i(o(e2), t2);
            return !(n2 && !n2.configurable) && delete e2[t2];
          } });
        }, function(e, t, n) {
          var r = n(10), i = n(0), o = n(5), s = n(30);
          i(i.S + i.F * n(3)(function() {
            Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
          }), "Reflect", { defineProperty: function(e2, t2, n2) {
            o(e2), t2 = s(t2, true), o(n2);
            try {
              return r.f(e2, t2, n2), true;
            } catch (e3) {
              return false;
            }
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(33), o = n(26), s = n(5), a = n(4), u = n(3), c = n(142), l = (n(6).Reflect || {}).construct, f = u(function() {
            function e2() {
            }
            __name(e2, "e");
            return !(l(function() {
            }, [], e2) instanceof e2);
          }), h = !u(function() {
            l(function() {
            });
          });
          r(r.S + r.F * (f || h), "Reflect", { construct: function(e2, t2) {
            o(e2), s(t2);
            var n2 = arguments.length < 3 ? e2 : o(arguments[2]);
            if (h && !f)
              return l(e2, t2, n2);
            if (e2 == n2) {
              switch (t2.length) {
                case 0:
                  return new e2();
                case 1:
                  return new e2(t2[0]);
                case 2:
                  return new e2(t2[0], t2[1]);
                case 3:
                  return new e2(t2[0], t2[1], t2[2]);
                case 4:
                  return new e2(t2[0], t2[1], t2[2], t2[3]);
              }
              var r2 = [null];
              return r2.push.apply(r2, t2), new (c.apply(e2, r2))();
            }
            var u2 = n2.prototype, _ = i(a(u2) ? u2 : Object.prototype), y = Function.apply.call(e2, _, t2);
            return a(y) ? y : _;
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(26), o = n(5), s = (n(6).Reflect || {}).apply, a = Function.apply;
          r(r.S + r.F * !n(3)(function() {
            s(function() {
            });
          }), "Reflect", { apply: function(e2, t2, n2) {
            var r2 = i(e2), u = o(n2);
            return s ? s(r2, t2, u) : a.call(r2, t2, u);
          } });
        }, function(e, t, n) {
          n(22)("Float64", 8, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          n(22)("Float32", 4, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          n(22)("Uint32", 4, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          n(22)("Int32", 4, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          n(22)("Uint16", 2, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          n(22)("Int16", 2, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          n(22)("Uint8", 1, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          }, true);
        }, function(e, t, n) {
          n(22)("Uint8", 1, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          n(22)("Int8", 1, function(e2) {
            return function(t2, n2, r) {
              return e2(this, t2, n2, r);
            };
          });
        }, function(e, t, n) {
          var r = n(0);
          r(r.G + r.W + r.F * !n(60).ABV, { DataView: n(75).DataView });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(60), o = n(75), s = n(5), a = n(34), u = n(12), c = n(4), l = n(6).ArrayBuffer, f = n(76), h = o.ArrayBuffer, _ = o.DataView, y = i.ABV && l.isView, p = h.prototype.slice, d = i.VIEW;
          r(r.G + r.W + r.F * (l !== h), { ArrayBuffer: h }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", { isView: function(e2) {
            return y && y(e2) || c(e2) && d in e2;
          } }), r(r.P + r.U + r.F * n(3)(function() {
            return !new h(2).slice(1, void 0).byteLength;
          }), "ArrayBuffer", { slice: function(e2, t2) {
            if (void 0 !== p && void 0 === t2)
              return p.call(s(this), e2);
            for (var n2 = s(this).byteLength, r2 = a(e2, n2), i2 = a(void 0 === t2 ? n2 : t2, n2), o2 = new (f(this, h))(u(i2 - r2)), c2 = new _(this), l2 = new _(o2), y2 = 0; r2 < i2; )
              l2.setUint8(y2++, c2.getUint8(r2++));
            return o2;
          } }), n(43)("ArrayBuffer");
        }, function(e, t, n) {
          "use strict";
          var r = n(122), i = n(40);
          n(61)("WeakSet", function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(e2) {
            return r.def(i(this, "WeakSet"), e2, true);
          } }, r, false, true);
        }, function(e, t, n) {
          "use strict";
          var r, i = n(19)(0), o = n(15), s = n(29), a = n(143), u = n(122), c = n(4), l = n(3), f = n(40), h = s.getWeak, _ = Object.isExtensible, y = u.ufstore, p = {}, d = /* @__PURE__ */ __name(function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, "d"), g = { get: function(e2) {
            if (c(e2)) {
              var t2 = h(e2);
              return true === t2 ? y(f(this, "WeakMap")).get(e2) : t2 ? t2[this._i] : void 0;
            }
          }, set: function(e2, t2) {
            return u.def(f(this, "WeakMap"), e2, t2);
          } }, v = e.exports = n(61)("WeakMap", d, g, u, true, true);
          l(function() {
            return 7 != new v().set((Object.freeze || Object)(p), 7).get(p);
          }) && (a((r = u.getConstructor(d, "WeakMap")).prototype, g), s.NEED = true, i(["delete", "has", "get", "set"], function(e2) {
            var t2 = v.prototype, n2 = t2[e2];
            o(t2, e2, function(t3, i2) {
              if (c(t3) && !_(t3)) {
                this._f || (this._f = new r());
                var o2 = this._f[e2](t3, i2);
                return "set" == e2 ? this : o2;
              }
              return n2.call(this, t3, i2);
            });
          }));
        }, function(e, t, n) {
          "use strict";
          var r = n(123), i = n(40);
          e.exports = n(61)("Set", function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(e2) {
            return r.def(i(this, "Set"), e2 = 0 === e2 ? 0 : e2, e2);
          } }, r);
        }, function(e, t, n) {
          "use strict";
          var r = n(123), i = n(40);
          e.exports = n(61)("Map", function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { get: function(e2) {
            var t2 = r.getEntry(i(this, "Map"), e2);
            return t2 && t2.v;
          }, set: function(e2, t2) {
            return r.def(i(this, "Map"), 0 === e2 ? 0 : e2, t2);
          } }, r, true);
        }, function(e, t, n) {
          var r = n(5), i = n(4), o = n(124);
          e.exports = function(e2, t2) {
            if (r(e2), i(t2) && t2.constructor === e2)
              return t2;
            var n2 = o.f(e2);
            return (0, n2.resolve)(t2), n2.promise;
          };
        }, function(e, t) {
          e.exports = function(e2) {
            try {
              return { e: false, v: e2() };
            } catch (e3) {
              return { e: true, v: e3 };
            }
          };
        }, function(e, t, n) {
          var r = n(6), i = n(125).set, o = r.MutationObserver || r.WebKitMutationObserver, s = r.process, a = r.Promise, u = "process" == n(25)(s);
          e.exports = function() {
            var e2, t2, n2, c = /* @__PURE__ */ __name(function() {
              var r2, i2;
              for (u && (r2 = s.domain) && r2.exit(); e2; ) {
                i2 = e2.fn, e2 = e2.next;
                try {
                  i2();
                } catch (r3) {
                  throw e2 ? n2() : t2 = void 0, r3;
                }
              }
              t2 = void 0, r2 && r2.enter();
            }, "c");
            if (u)
              n2 = /* @__PURE__ */ __name(function() {
                s.nextTick(c);
              }, "n");
            else if (!o || r.navigator && r.navigator.standalone)
              if (a && a.resolve) {
                var l = a.resolve();
                n2 = /* @__PURE__ */ __name(function() {
                  l.then(c);
                }, "n");
              } else
                n2 = /* @__PURE__ */ __name(function() {
                  i.call(r, c);
                }, "n");
            else {
              var f = true, h = document.createTextNode("");
              new o(c).observe(h, { characterData: true }), n2 = /* @__PURE__ */ __name(function() {
                h.data = f = !f;
              }, "n");
            }
            return function(r2) {
              var i2 = { fn: r2, next: void 0 };
              t2 && (t2.next = i2), e2 || (e2 = i2, n2()), t2 = i2;
            };
          };
        }, function(e, t, n) {
          "use strict";
          var r, i, o, s, a = n(44), u = n(6), c = n(27), l = n(66), f = n(0), h = n(4), _ = n(26), y = n(42), p = n(62), d = n(76), g = n(125).set, v = n(209)(), b = n(124), m = n(208), S = n(207), E = u.TypeError, R = u.process, O = u.Promise, w = "process" == l(R), A = /* @__PURE__ */ __name(function() {
          }, "A"), I = i = b.f, M = !!function() {
            try {
              var e2 = O.resolve(1), t2 = (e2.constructor = {})[n(7)("species")] = function(e3) {
                e3(A, A);
              };
              return (w || "function" == typeof PromiseRejectionEvent) && e2.then(A) instanceof t2;
            } catch (e3) {
            }
          }(), T = /* @__PURE__ */ __name(function(e2) {
            var t2;
            return !(!h(e2) || "function" != typeof (t2 = e2.then)) && t2;
          }, "T"), k = /* @__PURE__ */ __name(function(e2, t2) {
            if (!e2._n) {
              e2._n = true;
              var n2 = e2._c;
              v(function() {
                for (var r2 = e2._v, i2 = 1 == e2._s, o2 = 0, s2 = function(t3) {
                  var n3, o3, s3, a2 = i2 ? t3.ok : t3.fail, u2 = t3.resolve, c2 = t3.reject, l2 = t3.domain;
                  try {
                    a2 ? (i2 || (2 == e2._h && j(e2), e2._h = 1), true === a2 ? n3 = r2 : (l2 && l2.enter(), n3 = a2(r2), l2 && (l2.exit(), s3 = true)), n3 === t3.promise ? c2(E("Promise-chain cycle")) : (o3 = T(n3)) ? o3.call(n3, u2, c2) : u2(n3)) : c2(r2);
                  } catch (e3) {
                    l2 && !s3 && l2.exit(), c2(e3);
                  }
                }; n2.length > o2; )
                  s2(n2[o2++]);
                e2._c = [], e2._n = false, t2 && !e2._h && P(e2);
              });
            }
          }, "k"), P = /* @__PURE__ */ __name(function(e2) {
            g.call(u, function() {
              var t2, n2, r2, i2 = e2._v, o2 = F(e2);
              if (o2 && (t2 = m(function() {
                w ? R.emit("unhandledRejection", i2, e2) : (n2 = u.onunhandledrejection) ? n2({ promise: e2, reason: i2 }) : (r2 = u.console) && r2.error && r2.error("Unhandled promise rejection", i2);
              }), e2._h = w || F(e2) ? 2 : 1), e2._a = void 0, o2 && t2.e)
                throw t2.v;
            });
          }, "P"), F = /* @__PURE__ */ __name(function(e2) {
            return 1 !== e2._h && 0 === (e2._a || e2._c).length;
          }, "F"), j = /* @__PURE__ */ __name(function(e2) {
            g.call(u, function() {
              var t2;
              w ? R.emit("rejectionHandled", e2) : (t2 = u.onrejectionhandled) && t2({ promise: e2, reason: e2._v });
            });
          }, "j"), U = /* @__PURE__ */ __name(function(e2) {
            var t2 = this;
            t2._d || (t2._d = true, (t2 = t2._w || t2)._v = e2, t2._s = 2, t2._a || (t2._a = t2._c.slice()), k(t2, true));
          }, "U"), N = /* @__PURE__ */ __name(function(e2) {
            var t2, n2 = this;
            if (!n2._d) {
              n2._d = true, n2 = n2._w || n2;
              try {
                if (n2 === e2)
                  throw E("Promise can't be resolved itself");
                (t2 = T(e2)) ? v(function() {
                  var r2 = { _w: n2, _d: false };
                  try {
                    t2.call(e2, c(N, r2, 1), c(U, r2, 1));
                  } catch (e3) {
                    U.call(r2, e3);
                  }
                }) : (n2._v = e2, n2._s = 1, k(n2, false));
              } catch (e3) {
                U.call({ _w: n2, _d: false }, e3);
              }
            }
          }, "N");
          M || (O = /* @__PURE__ */ __name(function(e2) {
            y(this, O, "Promise", "_h"), _(e2), r.call(this);
            try {
              e2(c(N, this, 1), c(U, this, 1));
            } catch (e3) {
              U.call(this, e3);
            }
          }, "O"), (r = /* @__PURE__ */ __name(function(e2) {
            this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
          }, "r")).prototype = n(41)(O.prototype, { then: function(e2, t2) {
            var n2 = I(d(this, O));
            return n2.ok = "function" != typeof e2 || e2, n2.fail = "function" == typeof t2 && t2, n2.domain = w ? R.domain : void 0, this._c.push(n2), this._a && this._a.push(n2), this._s && k(this, false), n2.promise;
          }, catch: function(e2) {
            return this.then(void 0, e2);
          } }), o = /* @__PURE__ */ __name(function() {
            var e2 = new r();
            this.promise = e2, this.resolve = c(N, e2, 1), this.reject = c(U, e2, 1);
          }, "o"), b.f = I = /* @__PURE__ */ __name(function(e2) {
            return e2 === O || e2 === s ? new o(e2) : i(e2);
          }, "I")), f(f.G + f.W + f.F * !M, { Promise: O }), n(45)(O, "Promise"), n(43)("Promise"), s = n(37).Promise, f(f.S + f.F * !M, "Promise", { reject: function(e2) {
            var t2 = I(this);
            return (0, t2.reject)(e2), t2.promise;
          } }), f(f.S + f.F * (a || !M), "Promise", { resolve: function(e2) {
            return S(a && this === s ? O : this, e2);
          } }), f(f.S + f.F * !(M && n(64)(function(e2) {
            O.all(e2).catch(A);
          })), "Promise", { all: function(e2) {
            var t2 = this, n2 = I(t2), r2 = n2.resolve, i2 = n2.reject, o2 = m(function() {
              var n3 = [], o3 = 0, s2 = 1;
              p(e2, false, function(e3) {
                var a2 = o3++, u2 = false;
                n3.push(void 0), s2++, t2.resolve(e3).then(function(e4) {
                  u2 || (u2 = true, n3[a2] = e4, --s2 || r2(n3));
                }, i2);
              }), --s2 || r2(n3);
            });
            return o2.e && i2(o2.v), n2.promise;
          }, race: function(e2) {
            var t2 = this, n2 = I(t2), r2 = n2.reject, i2 = m(function() {
              p(e2, false, function(e3) {
                t2.resolve(e3).then(n2.resolve, r2);
              });
            });
            return i2.e && r2(i2.v), n2.promise;
          } });
        }, function(e, t, n) {
          n(63)("split", 2, function(e2, t2, r) {
            "use strict";
            var i = n(82), o = r, s = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
              var a = void 0 === /()??/.exec("")[1];
              r = /* @__PURE__ */ __name(function(e3, t3) {
                var n2 = String(this);
                if (void 0 === e3 && 0 === t3)
                  return [];
                if (!i(e3))
                  return o.call(n2, e3, t3);
                var r2, u, c, l, f, h = [], _ = (e3.ignoreCase ? "i" : "") + (e3.multiline ? "m" : "") + (e3.unicode ? "u" : "") + (e3.sticky ? "y" : ""), y = 0, p = void 0 === t3 ? 4294967295 : t3 >>> 0, d = new RegExp(e3.source, _ + "g");
                for (a || (r2 = new RegExp("^" + d.source + "$(?!\\s)", _)); (u = d.exec(n2)) && !((c = u.index + u[0].length) > y && (h.push(n2.slice(y, u.index)), !a && u.length > 1 && u[0].replace(r2, function() {
                  for (f = 1; f < arguments.length - 2; f++)
                    void 0 === arguments[f] && (u[f] = void 0);
                }), u.length > 1 && u.index < n2.length && s.apply(h, u.slice(1)), l = u[0].length, y = c, h.length >= p)); )
                  d.lastIndex === u.index && d.lastIndex++;
                return y === n2.length ? !l && d.test("") || h.push("") : h.push(n2.slice(y)), h.length > p ? h.slice(0, p) : h;
              }, "r");
            } else
              "0".split(void 0, 0).length && (r = /* @__PURE__ */ __name(function(e3, t3) {
                return void 0 === e3 && 0 === t3 ? [] : o.call(this, e3, t3);
              }, "r"));
            return [function(n2, i2) {
              var o2 = e2(this), s2 = void 0 == n2 ? void 0 : n2[t2];
              return void 0 !== s2 ? s2.call(n2, o2, i2) : r.call(String(o2), n2, i2);
            }, r];
          });
        }, function(e, t, n) {
          n(63)("search", 1, function(e2, t2, n2) {
            return [function(n3) {
              "use strict";
              var r = e2(this), i = void 0 == n3 ? void 0 : n3[t2];
              return void 0 !== i ? i.call(n3, r) : new RegExp(n3)[t2](String(r));
            }, n2];
          });
        }, function(e, t, n) {
          n(63)("replace", 2, function(e2, t2, n2) {
            return [function(r, i) {
              "use strict";
              var o = e2(this), s = void 0 == r ? void 0 : r[t2];
              return void 0 !== s ? s.call(r, o, i) : n2.call(String(o), r, i);
            }, n2];
          });
        }, function(e, t, n) {
          n(63)("match", 1, function(e2, t2, n2) {
            return [function(n3) {
              "use strict";
              var r = e2(this), i = void 0 == n3 ? void 0 : n3[t2];
              return void 0 !== i ? i.call(n3, r) : new RegExp(n3)[t2](String(r));
            }, n2];
          });
        }, function(e, t, n) {
          "use strict";
          n(126);
          var r = n(5), i = n(77), o = n(11), s = /./.toString, a = /* @__PURE__ */ __name(function(e2) {
            n(15)(RegExp.prototype, "toString", e2, true);
          }, "a");
          n(3)(function() {
            return "/a/b" != s.call({ source: "a", flags: "b" });
          }) ? a(function() {
            var e2 = r(this);
            return "/".concat(e2.source, "/", "flags" in e2 ? e2.flags : !o && e2 instanceof RegExp ? i.call(e2) : void 0);
          }) : "toString" != s.name && a(function() {
            return s.call(this);
          });
        }, function(e, t, n) {
          var r = n(6), i = n(87), o = n(10).f, s = n(32).f, a = n(82), u = n(77), c = r.RegExp, l = c, f = c.prototype, h = /a/g, _ = /a/g, y = new c(h) !== h;
          if (n(11) && (!y || n(3)(function() {
            return _[n(7)("match")] = false, c(h) != h || c(_) == _ || "/a/i" != c(h, "i");
          }))) {
            c = /* @__PURE__ */ __name(function(e2, t2) {
              var n2 = this instanceof c, r2 = a(e2), o2 = void 0 === t2;
              return !n2 && r2 && e2.constructor === c && o2 ? e2 : i(y ? new l(r2 && !o2 ? e2.source : e2, t2) : l((r2 = e2 instanceof c) ? e2.source : e2, r2 && o2 ? u.call(e2) : t2), n2 ? this : f, c);
            }, "c");
            for (var p = function(e2) {
              e2 in c || o(c, e2, { configurable: true, get: function() {
                return l[e2];
              }, set: function(t2) {
                l[e2] = t2;
              } });
            }, d = s(l), g = 0; d.length > g; )
              p(d[g++]);
            f.constructor = c, c.prototype = f, n(15)(r, "RegExp", c);
          }
          n(43)("RegExp");
        }, function(e, t, n) {
          n(43)("Array");
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(19)(6), o = "findIndex", s = true;
          o in [] && Array(1)[o](function() {
            s = false;
          }), r(r.P + r.F * s, "Array", { findIndex: function(e2) {
            return i(this, e2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(52)(o);
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(19)(5), o = true;
          "find" in [] && Array(1).find(function() {
            o = false;
          }), r(r.P + r.F * o, "Array", { find: function(e2) {
            return i(this, e2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(52)("find");
        }, function(e, t, n) {
          var r = n(0);
          r(r.P, "Array", { fill: n(78) }), n(52)("fill");
        }, function(e, t, n) {
          var r = n(0);
          r(r.P, "Array", { copyWithin: n(129) }), n(52)("copyWithin");
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(21), o = n(24), s = n(12), a = [].lastIndexOf, u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
          r(r.P + r.F * (u || !n(17)(a)), "Array", { lastIndexOf: function(e2) {
            if (u)
              return a.apply(this, arguments) || 0;
            var t2 = i(this), n2 = s(t2.length), r2 = n2 - 1;
            for (arguments.length > 1 && (r2 = Math.min(r2, o(arguments[1]))), r2 < 0 && (r2 = n2 + r2); r2 >= 0; r2--)
              if (r2 in t2 && t2[r2] === e2)
                return r2 || 0;
            return -1;
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(94)(false), o = [].indexOf, s = !!o && 1 / [1].indexOf(1, -0) < 0;
          r(r.P + r.F * (s || !n(17)(o)), "Array", { indexOf: function(e2) {
            return s ? o.apply(this, arguments) || 0 : i(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(130);
          r(r.P + r.F * !n(17)([].reduceRight, true), "Array", { reduceRight: function(e2) {
            return i(this, e2, arguments.length, arguments[1], true);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(130);
          r(r.P + r.F * !n(17)([].reduce, true), "Array", { reduce: function(e2) {
            return i(this, e2, arguments.length, arguments[1], false);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(19)(4);
          r(r.P + r.F * !n(17)([].every, true), "Array", { every: function(e2) {
            return i(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(19)(3);
          r(r.P + r.F * !n(17)([].some, true), "Array", { some: function(e2) {
            return i(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(19)(2);
          r(r.P + r.F * !n(17)([].filter, true), "Array", { filter: function(e2) {
            return i(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(19)(1);
          r(r.P + r.F * !n(17)([].map, true), "Array", { map: function(e2) {
            return i(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          var r = n(4), i = n(91), o = n(7)("species");
          e.exports = function(e2) {
            var t2;
            return i(e2) && ("function" != typeof (t2 = e2.constructor) || t2 !== Array && !i(t2.prototype) || (t2 = void 0), r(t2) && null === (t2 = t2[o]) && (t2 = void 0)), void 0 === t2 ? Array : t2;
          };
        }, function(e, t, n) {
          var r = n(230);
          e.exports = function(e2, t2) {
            return new (r(e2))(t2);
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(19)(0), o = n(17)([].forEach, true);
          r(r.P + r.F * !o, "Array", { forEach: function(e2) {
            return i(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(26), o = n(14), s = n(3), a = [].sort, u = [1, 2, 3];
          r(r.P + r.F * (s(function() {
            u.sort(void 0);
          }) || !s(function() {
            u.sort(null);
          }) || !n(17)(a)), "Array", { sort: function(e2) {
            return void 0 === e2 ? a.call(o(this)) : a.call(o(this), i(e2));
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(90), o = n(25), s = n(34), a = n(12), u = [].slice;
          r(r.P + r.F * n(3)(function() {
            i && u.call(i);
          }), "Array", { slice: function(e2, t2) {
            var n2 = a(this.length), r2 = o(this);
            if (t2 = void 0 === t2 ? n2 : t2, "Array" == r2)
              return u.call(this, e2, t2);
            for (var i2 = s(e2, n2), c = s(t2, n2), l = a(c - i2), f = new Array(l), h = 0; h < l; h++)
              f[h] = "String" == r2 ? this.charAt(i2 + h) : this[i2 + h];
            return f;
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(21), o = [].join;
          r(r.P + r.F * (n(54) != Object || !n(17)(o)), "Array", { join: function(e2) {
            return o.call(i(this), void 0 === e2 ? "," : e2);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(131);
          r(r.S + r.F * n(3)(function() {
            function e2() {
            }
            __name(e2, "e");
            return !(Array.of.call(e2) instanceof e2);
          }), "Array", { of: function() {
            for (var e2 = 0, t2 = arguments.length, n2 = new ("function" == typeof this ? this : Array)(t2); t2 > e2; )
              i(n2, e2, arguments[e2++]);
            return n2.length = t2, n2;
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(27), i = n(0), o = n(14), s = n(132), a = n(80), u = n(12), c = n(131), l = n(79);
          i(i.S + i.F * !n(64)(function(e2) {
            Array.from(e2);
          }), "Array", { from: function(e2) {
            var t2, n2, i2, f, h = o(e2), _ = "function" == typeof this ? this : Array, y = arguments.length, p = y > 1 ? arguments[1] : void 0, d = void 0 !== p, g = 0, v = l(h);
            if (d && (p = r(p, y > 2 ? arguments[2] : void 0, 2)), void 0 == v || _ == Array && a(v))
              for (n2 = new _(t2 = u(h.length)); t2 > g; g++)
                c(n2, g, d ? p(h[g], g) : h[g]);
            else
              for (f = v.call(h), n2 = new _(); !(i2 = f.next()).done; g++)
                c(n2, g, d ? s(f, p, [i2.value, g], true) : i2.value);
            return n2.length = g, n2;
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Array", { isArray: n(91) });
        }, function(e, t, n) {
          "use strict";
          var r = n(5), i = n(30);
          e.exports = function(e2) {
            if ("string" !== e2 && "number" !== e2 && "default" !== e2)
              throw TypeError("Incorrect hint");
            return i(r(this), "number" != e2);
          };
        }, function(e, t, n) {
          var r = n(7)("toPrimitive"), i = Date.prototype;
          r in i || n(18)(i, r, n(239));
        }, function(e, t, n) {
          var r = Date.prototype, i = r.toString, o = r.getTime;
          /* @__PURE__ */ new Date(NaN) + "" != "Invalid Date" && n(15)(r, "toString", function() {
            var e2 = o.call(this);
            return e2 == e2 ? i.call(this) : "Invalid Date";
          });
        }, function(e, t, n) {
          "use strict";
          var r = n(3), i = Date.prototype.getTime, o = Date.prototype.toISOString, s = /* @__PURE__ */ __name(function(e2) {
            return e2 > 9 ? e2 : "0" + e2;
          }, "s");
          e.exports = r(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1));
          }) || !r(function() {
            o.call(/* @__PURE__ */ new Date(NaN));
          }) ? function() {
            if (!isFinite(i.call(this)))
              throw RangeError("Invalid time value");
            var e2 = this, t2 = e2.getUTCFullYear(), n2 = e2.getUTCMilliseconds(), r2 = t2 < 0 ? "-" : t2 > 9999 ? "+" : "";
            return r2 + ("00000" + Math.abs(t2)).slice(r2 ? -6 : -4) + "-" + s(e2.getUTCMonth() + 1) + "-" + s(e2.getUTCDate()) + "T" + s(e2.getUTCHours()) + ":" + s(e2.getUTCMinutes()) + ":" + s(e2.getUTCSeconds()) + "." + (n2 > 99 ? n2 : "0" + s(n2)) + "Z";
          } : o;
        }, function(e, t, n) {
          var r = n(0), i = n(242);
          r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", { toISOString: i });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(14), o = n(30);
          r(r.P + r.F * n(3)(function() {
            return null !== (/* @__PURE__ */ new Date(NaN)).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() {
              return 1;
            } });
          }), "Date", { toJSON: function(e2) {
            var t2 = i(this), n2 = o(t2);
            return "number" != typeof n2 || isFinite(n2) ? t2.toISOString() : null;
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Date", { now: function() {
            return (/* @__PURE__ */ new Date()).getTime();
          } });
        }, function(e, t, n) {
          "use strict";
          n(13)("sup", function(e2) {
            return function() {
              return e2(this, "sup", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("sub", function(e2) {
            return function() {
              return e2(this, "sub", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("strike", function(e2) {
            return function() {
              return e2(this, "strike", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("small", function(e2) {
            return function() {
              return e2(this, "small", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("link", function(e2) {
            return function(t2) {
              return e2(this, "a", "href", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("italics", function(e2) {
            return function() {
              return e2(this, "i", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("fontsize", function(e2) {
            return function(t2) {
              return e2(this, "font", "size", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("fontcolor", function(e2) {
            return function(t2) {
              return e2(this, "font", "color", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("fixed", function(e2) {
            return function() {
              return e2(this, "tt", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("bold", function(e2) {
            return function() {
              return e2(this, "b", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("blink", function(e2) {
            return function() {
              return e2(this, "blink", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("big", function(e2) {
            return function() {
              return e2(this, "big", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(13)("anchor", function(e2) {
            return function(t2) {
              return e2(this, "a", "name", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(12), o = n(83), s = "".startsWith;
          r(r.P + r.F * n(81)("startsWith"), "String", { startsWith: function(e2) {
            var t2 = o(this, e2, "startsWith"), n2 = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, t2.length)), r2 = String(e2);
            return s ? s.call(t2, r2, n2) : t2.slice(n2, n2 + r2.length) === r2;
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.P, "String", { repeat: n(137) });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(83);
          r(r.P + r.F * n(81)("includes"), "String", { includes: function(e2) {
            return !!~i(this, e2, "includes").indexOf(e2, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(12), o = n(83), s = "".endsWith;
          r(r.P + r.F * n(81)("endsWith"), "String", { endsWith: function(e2) {
            var t2 = o(this, e2, "endsWith"), n2 = arguments.length > 1 ? arguments[1] : void 0, r2 = i(t2.length), a = void 0 === n2 ? r2 : Math.min(i(n2), r2), u = String(e2);
            return s ? s.call(t2, u, a) : t2.slice(a - u.length, a) === u;
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(134)(false);
          r(r.P, "String", { codePointAt: function(e2) {
            return i(this, e2);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(134)(true);
          n(84)(String, "String", function(e2) {
            this._t = String(e2), this._i = 0;
          }, function() {
            var e2, t2 = this._t, n2 = this._i;
            return n2 >= t2.length ? { value: void 0, done: true } : (e2 = r(t2, n2), this._i += e2.length, { value: e2, done: false });
          });
        }, function(e, t, n) {
          "use strict";
          n(65)("trim", function(e2) {
            return function() {
              return e2(this, 3);
            };
          });
        }, function(e, t, n) {
          var r = n(0), i = n(21), o = n(12);
          r(r.S, "String", { raw: function(e2) {
            for (var t2 = i(e2.raw), n2 = o(t2.length), r2 = arguments.length, s = [], a = 0; n2 > a; )
              s.push(String(t2[a++])), a < r2 && s.push(String(arguments[a]));
            return s.join("");
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(34), o = String.fromCharCode, s = String.fromCodePoint;
          r(r.S + r.F * (!!s && 1 != s.length), "String", { fromCodePoint: function(e2) {
            for (var t2, n2 = [], r2 = arguments.length, s2 = 0; r2 > s2; ) {
              if (t2 = +arguments[s2++], i(t2, 1114111) !== t2)
                throw RangeError(t2 + " is not a valid code point");
              n2.push(t2 < 65536 ? o(t2) : o(55296 + ((t2 -= 65536) >> 10), t2 % 1024 + 56320));
            }
            return n2.join("");
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Math", { trunc: function(e2) {
            return (e2 > 0 ? Math.floor : Math.ceil)(e2);
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(85), o = Math.exp;
          r(r.S, "Math", { tanh: function(e2) {
            var t2 = i(e2 = +e2), n2 = i(-e2);
            return t2 == 1 / 0 ? 1 : n2 == 1 / 0 ? -1 : (t2 - n2) / (o(e2) + o(-e2));
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(85), o = Math.exp;
          r(r.S + r.F * n(3)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }), "Math", { sinh: function(e2) {
            return Math.abs(e2 = +e2) < 1 ? (i(e2) - i(-e2)) / 2 : (o(e2 - 1) - o(-e2 - 1)) * (Math.E / 2);
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Math", { sign: n(86) });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Math", { log2: function(e2) {
            return Math.log(e2) / Math.LN2;
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Math", { log1p: n(135) });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Math", { log10: function(e2) {
            return Math.log(e2) * Math.LOG10E;
          } });
        }, function(e, t, n) {
          var r = n(0), i = Math.imul;
          r(r.S + r.F * n(3)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }), "Math", { imul: function(e2, t2) {
            var n2 = +e2, r2 = +t2, i2 = 65535 & n2, o = 65535 & r2;
            return 0 | i2 * o + ((65535 & n2 >>> 16) * o + i2 * (65535 & r2 >>> 16) << 16 >>> 0);
          } });
        }, function(e, t, n) {
          var r = n(0), i = Math.abs;
          r(r.S, "Math", { hypot: function(e2, t2) {
            for (var n2, r2, o = 0, s = 0, a = arguments.length, u = 0; s < a; )
              u < (n2 = i(arguments[s++])) ? (o = o * (r2 = u / n2) * r2 + 1, u = n2) : o += n2 > 0 ? (r2 = n2 / u) * r2 : n2;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o);
          } });
        }, function(e, t, n) {
          var r = n(86), i = Math.pow, o = i(2, -52), s = i(2, -23), a = i(2, 127) * (2 - s), u = i(2, -126);
          e.exports = Math.fround || function(e2) {
            var t2, n2, i2 = Math.abs(e2), c = r(e2);
            return i2 < u ? c * (i2 / u / s + 1 / o - 1 / o) * u * s : (n2 = (t2 = (1 + s / o) * i2) - (t2 - i2)) > a || n2 != n2 ? c * (1 / 0) : c * n2;
          };
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Math", { fround: n(277) });
        }, function(e, t, n) {
          var r = n(0), i = n(85);
          r(r.S + r.F * (i != Math.expm1), "Math", { expm1: i });
        }, function(e, t, n) {
          var r = n(0), i = Math.exp;
          r(r.S, "Math", { cosh: function(e2) {
            return (i(e2 = +e2) + i(-e2)) / 2;
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Math", { clz32: function(e2) {
            return (e2 >>>= 0) ? 31 - Math.floor(Math.log(e2 + 0.5) * Math.LOG2E) : 32;
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(86);
          r(r.S, "Math", { cbrt: function(e2) {
            return i(e2 = +e2) * Math.pow(Math.abs(e2), 1 / 3);
          } });
        }, function(e, t, n) {
          var r = n(0), i = Math.atanh;
          r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", { atanh: function(e2) {
            return 0 == (e2 = +e2) ? e2 : Math.log((1 + e2) / (1 - e2)) / 2;
          } });
        }, function(e, t, n) {
          var r = n(0), i = Math.asinh;
          r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", { asinh: /* @__PURE__ */ __name(function e2(t2) {
            return isFinite(t2 = +t2) && 0 != t2 ? t2 < 0 ? -e2(-t2) : Math.log(t2 + Math.sqrt(t2 * t2 + 1)) : t2;
          }, "e") });
        }, function(e, t, n) {
          var r = n(0), i = n(135), o = Math.sqrt, s = Math.acosh;
          r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", { acosh: function(e2) {
            return (e2 = +e2) < 1 ? NaN : e2 > 9490626562425156e-8 ? Math.log(e2) + Math.LN2 : i(e2 - 1 + o(e2 - 1) * o(e2 + 1));
          } });
        }, function(e, t, n) {
          var r = n(0), i = n(140);
          r(r.S + r.F * (Number.parseInt != i), "Number", { parseInt: i });
        }, function(e, t, n) {
          var r = n(0), i = n(139);
          r(r.S + r.F * (Number.parseFloat != i), "Number", { parseFloat: i });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
        }, function(e, t, n) {
          var r = n(0), i = n(136), o = Math.abs;
          r(r.S, "Number", { isSafeInteger: function(e2) {
            return i(e2) && o(e2) <= 9007199254740991;
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Number", { isNaN: function(e2) {
            return e2 != e2;
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Number", { isInteger: n(136) });
        }, function(e, t, n) {
          var r = n(0), i = n(6).isFinite;
          r(r.S, "Number", { isFinite: function(e2) {
            return "number" == typeof e2 && i(e2);
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Number", { EPSILON: Math.pow(2, -52) });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(3), o = n(138), s = 1 .toPrecision;
          r(r.P + r.F * (i(function() {
            return "1" !== s.call(1, void 0);
          }) || !i(function() {
            s.call({});
          })), "Number", { toPrecision: function(e2) {
            var t2 = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === e2 ? s.call(t2) : s.call(t2, e2);
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(0), i = n(24), o = n(138), s = n(137), a = 1 .toFixed, u = Math.floor, c = [0, 0, 0, 0, 0, 0], l = "Number.toFixed: incorrect invocation!", f = /* @__PURE__ */ __name(function(e2, t2) {
            for (var n2 = -1, r2 = t2; ++n2 < 6; )
              r2 += e2 * c[n2], c[n2] = r2 % 1e7, r2 = u(r2 / 1e7);
          }, "f"), h = /* @__PURE__ */ __name(function(e2) {
            for (var t2 = 6, n2 = 0; --t2 >= 0; )
              n2 += c[t2], c[t2] = u(n2 / e2), n2 = n2 % e2 * 1e7;
          }, "h"), _ = /* @__PURE__ */ __name(function() {
            for (var e2 = 6, t2 = ""; --e2 >= 0; )
              if ("" !== t2 || 0 === e2 || 0 !== c[e2]) {
                var n2 = String(c[e2]);
                t2 = "" === t2 ? n2 : t2 + s.call("0", 7 - n2.length) + n2;
              }
            return t2;
          }, "_"), y = /* @__PURE__ */ __name(function(e2, t2, n2) {
            return 0 === t2 ? n2 : t2 % 2 == 1 ? y(e2, t2 - 1, n2 * e2) : y(e2 * e2, t2 / 2, n2);
          }, "y");
          r(r.P + r.F * (!!a && ("0.000" !== 8e-5 .toFixed(3) || "1" !== 0.9 .toFixed(0) || "1.25" !== 1.255 .toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !n(3)(function() {
            a.call({});
          })), "Number", { toFixed: function(e2) {
            var t2, n2, r2, a2, u2 = o(this, l), c2 = i(e2), p = "", d = "0";
            if (c2 < 0 || c2 > 20)
              throw RangeError(l);
            if (u2 != u2)
              return "NaN";
            if (u2 <= -1e21 || u2 >= 1e21)
              return String(u2);
            if (u2 < 0 && (p = "-", u2 = -u2), u2 > 1e-21)
              if (n2 = (t2 = function(e3) {
                for (var t3 = 0, n3 = e3; n3 >= 4096; )
                  t3 += 12, n3 /= 4096;
                for (; n3 >= 2; )
                  t3 += 1, n3 /= 2;
                return t3;
              }(u2 * y(2, 69, 1)) - 69) < 0 ? u2 * y(2, -t2, 1) : u2 / y(2, t2, 1), n2 *= 4503599627370496, (t2 = 52 - t2) > 0) {
                for (f(0, n2), r2 = c2; r2 >= 7; )
                  f(1e7, 0), r2 -= 7;
                for (f(y(10, r2, 1), 0), r2 = t2 - 1; r2 >= 23; )
                  h(1 << 23), r2 -= 23;
                h(1 << r2), f(1, 1), h(2), d = _();
              } else
                f(0, n2), f(1 << -t2, 0), d = _() + s.call("0", c2);
            return d = c2 > 0 ? p + ((a2 = d.length) <= c2 ? "0." + s.call("0", c2 - a2) + d : d.slice(0, a2 - c2) + "." + d.slice(a2 - c2)) : p + d;
          } });
        }, function(e, t, n) {
          "use strict";
          var r = n(6), i = n(16), o = n(25), s = n(87), a = n(30), u = n(3), c = n(32).f, l = n(23).f, f = n(10).f, h = n(65).trim, _ = r.Number, y = _, p = _.prototype, d = "Number" == o(n(33)(p)), g = "trim" in String.prototype, v = /* @__PURE__ */ __name(function(e2) {
            var t2 = a(e2, false);
            if ("string" == typeof t2 && t2.length > 2) {
              var n2, r2, i2, o2 = (t2 = g ? t2.trim() : h(t2, 3)).charCodeAt(0);
              if (43 === o2 || 45 === o2) {
                if (88 === (n2 = t2.charCodeAt(2)) || 120 === n2)
                  return NaN;
              } else if (48 === o2) {
                switch (t2.charCodeAt(1)) {
                  case 66:
                  case 98:
                    r2 = 2, i2 = 49;
                    break;
                  case 79:
                  case 111:
                    r2 = 8, i2 = 55;
                    break;
                  default:
                    return +t2;
                }
                for (var s2, u2 = t2.slice(2), c2 = 0, l2 = u2.length; c2 < l2; c2++)
                  if ((s2 = u2.charCodeAt(c2)) < 48 || s2 > i2)
                    return NaN;
                return parseInt(u2, r2);
              }
            }
            return +t2;
          }, "v");
          if (!_(" 0o1") || !_("0b1") || _("+0x1")) {
            _ = /* @__PURE__ */ __name(function(e2) {
              var t2 = arguments.length < 1 ? 0 : e2, n2 = this;
              return n2 instanceof _ && (d ? u(function() {
                p.valueOf.call(n2);
              }) : "Number" != o(n2)) ? s(new y(v(t2)), n2, _) : v(t2);
            }, "_");
            for (var b, m = n(11) ? c(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; m.length > S; S++)
              i(y, b = m[S]) && !i(_, b) && f(_, b, l(y, b));
            _.prototype = p, p.constructor = _, n(15)(r, "Number", _);
          }
        }, function(e, t, n) {
          var r = n(0), i = n(139);
          r(r.G + r.F * (parseFloat != i), { parseFloat: i });
        }, function(e, t, n) {
          var r = n(0), i = n(140);
          r(r.G + r.F * (parseInt != i), { parseInt: i });
        }, function(e, t, n) {
          "use strict";
          var r = n(4), i = n(31), o = n(7)("hasInstance"), s = Function.prototype;
          o in s || n(10).f(s, o, { value: function(e2) {
            if ("function" != typeof this || !r(e2))
              return false;
            if (!r(this.prototype))
              return e2 instanceof this;
            for (; e2 = i(e2); )
              if (this.prototype === e2)
                return true;
            return false;
          } });
        }, function(e, t, n) {
          var r = n(10).f, i = Function.prototype, o = /^\s*function ([^ (]*)/;
          "name" in i || n(11) && r(i, "name", { configurable: true, get: function() {
            try {
              return ("" + this).match(o)[1];
            } catch (e2) {
              return "";
            }
          } });
        }, function(e, t, n) {
          var r = n(0);
          r(r.P, "Function", { bind: n(142) });
        }, function(e, t, n) {
          "use strict";
          var r = n(66), i = {};
          i[n(7)("toStringTag")] = "z", i + "" != "[object z]" && n(15)(Object.prototype, "toString", function() {
            return "[object " + r(this) + "]";
          }, true);
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Object", { setPrototypeOf: n(89).set });
        }, function(e, t) {
          e.exports = Object.is || function(e2, t2) {
            return e2 === t2 ? 0 !== e2 || 1 / e2 == 1 / t2 : e2 != e2 && t2 != t2;
          };
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Object", { is: n(305) });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S + r.F, "Object", { assign: n(143) });
        }, function(e, t, n) {
          var r = n(4);
          n(20)("isExtensible", function(e2) {
            return function(t2) {
              return !!r(t2) && (!e2 || e2(t2));
            };
          });
        }, function(e, t, n) {
          var r = n(4);
          n(20)("isSealed", function(e2) {
            return function(t2) {
              return !r(t2) || !!e2 && e2(t2);
            };
          });
        }, function(e, t, n) {
          var r = n(4);
          n(20)("isFrozen", function(e2) {
            return function(t2) {
              return !r(t2) || !!e2 && e2(t2);
            };
          });
        }, function(e, t, n) {
          var r = n(4), i = n(29).onFreeze;
          n(20)("preventExtensions", function(e2) {
            return function(t2) {
              return e2 && r(t2) ? e2(i(t2)) : t2;
            };
          });
        }, function(e, t, n) {
          var r = n(4), i = n(29).onFreeze;
          n(20)("seal", function(e2) {
            return function(t2) {
              return e2 && r(t2) ? e2(i(t2)) : t2;
            };
          });
        }, function(e, t, n) {
          var r = n(4), i = n(29).onFreeze;
          n(20)("freeze", function(e2) {
            return function(t2) {
              return e2 && r(t2) ? e2(i(t2)) : t2;
            };
          });
        }, function(e, t, n) {
          n(20)("getOwnPropertyNames", function() {
            return n(144).f;
          });
        }, function(e, t, n) {
          var r = n(14), i = n(55);
          n(20)("keys", function() {
            return function(e2) {
              return i(r(e2));
            };
          });
        }, function(e, t, n) {
          var r = n(14), i = n(31);
          n(20)("getPrototypeOf", function() {
            return function(e2) {
              return i(r(e2));
            };
          });
        }, function(e, t, n) {
          var r = n(21), i = n(23).f;
          n(20)("getOwnPropertyDescriptor", function() {
            return function(e2, t2) {
              return i(r(e2), t2);
            };
          });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S + r.F * !n(11), "Object", { defineProperties: n(145) });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S + r.F * !n(11), "Object", { defineProperty: n(10).f });
        }, function(e, t, n) {
          var r = n(0);
          r(r.S, "Object", { create: n(33) });
        }, function(e, t, n) {
          var r = n(55), i = n(68), o = n(67);
          e.exports = function(e2) {
            var t2 = r(e2), n2 = i.f;
            if (n2)
              for (var s, a = n2(e2), u = o.f, c = 0; a.length > c; )
                u.call(e2, s = a[c++]) && t2.push(s);
            return t2;
          };
        }, function(e, t, n) {
          var r = n(6), i = n(37), o = n(44), s = n(147), a = n(10).f;
          e.exports = function(e2) {
            var t2 = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == e2.charAt(0) || e2 in t2 || a(t2, e2, { value: s.f(e2) });
          };
        }, function(e, t, n) {
          "use strict";
          var r = n(6), i = n(16), o = n(11), s = n(0), a = n(15), u = n(29).KEY, c = n(3), l = n(95), f = n(45), h = n(35), _ = n(7), y = n(147), p = n(322), d = n(321), g = n(91), v = n(5), b = n(4), m = n(21), S = n(30), E = n(36), R = n(33), O = n(144), w = n(23), A = n(10), I = n(55), M = w.f, T = A.f, k = O.f, P = r.Symbol, F = r.JSON, j = F && F.stringify, U = _("_hidden"), N = _("toPrimitive"), B = {}.propertyIsEnumerable, L = l("symbol-registry"), D = l("symbols"), Y = l("op-symbols"), C = Object.prototype, x = "function" == typeof P, q = r.QObject, V = !q || !q.prototype || !q.prototype.findChild, K = o && c(function() {
            return 7 != R(T({}, "a", { get: function() {
              return T(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(e2, t2, n2) {
            var r2 = M(C, t2);
            r2 && delete C[t2], T(e2, t2, n2), r2 && e2 !== C && T(C, t2, r2);
          } : T, G = /* @__PURE__ */ __name(function(e2) {
            var t2 = D[e2] = R(P.prototype);
            return t2._k = e2, t2;
          }, "G"), z = x && "symbol" == typeof P.iterator ? function(e2) {
            return "symbol" == typeof e2;
          } : function(e2) {
            return e2 instanceof P;
          }, H = /* @__PURE__ */ __name(function(e2, t2, n2) {
            return e2 === C && H(Y, t2, n2), v(e2), t2 = S(t2, true), v(n2), i(D, t2) ? (n2.enumerable ? (i(e2, U) && e2[U][t2] && (e2[U][t2] = false), n2 = R(n2, { enumerable: E(0, false) })) : (i(e2, U) || T(e2, U, E(1, {})), e2[U][t2] = true), K(e2, t2, n2)) : T(e2, t2, n2);
          }, "H"), J = /* @__PURE__ */ __name(function(e2, t2) {
            v(e2);
            for (var n2, r2 = d(t2 = m(t2)), i2 = 0, o2 = r2.length; o2 > i2; )
              H(e2, n2 = r2[i2++], t2[n2]);
            return e2;
          }, "J"), W = /* @__PURE__ */ __name(function(e2) {
            var t2 = B.call(this, e2 = S(e2, true));
            return !(this === C && i(D, e2) && !i(Y, e2)) && (!(t2 || !i(this, e2) || !i(D, e2) || i(this, U) && this[U][e2]) || t2);
          }, "W"), X = /* @__PURE__ */ __name(function(e2, t2) {
            if (e2 = m(e2), t2 = S(t2, true), e2 !== C || !i(D, t2) || i(Y, t2)) {
              var n2 = M(e2, t2);
              return !n2 || !i(D, t2) || i(e2, U) && e2[U][t2] || (n2.enumerable = true), n2;
            }
          }, "X"), Q = /* @__PURE__ */ __name(function(e2) {
            for (var t2, n2 = k(m(e2)), r2 = [], o2 = 0; n2.length > o2; )
              i(D, t2 = n2[o2++]) || t2 == U || t2 == u || r2.push(t2);
            return r2;
          }, "Q"), Z = /* @__PURE__ */ __name(function(e2) {
            for (var t2, n2 = e2 === C, r2 = k(n2 ? Y : m(e2)), o2 = [], s2 = 0; r2.length > s2; )
              !i(D, t2 = r2[s2++]) || n2 && !i(C, t2) || o2.push(D[t2]);
            return o2;
          }, "Z");
          x || (a((P = /* @__PURE__ */ __name(function() {
            if (this instanceof P)
              throw TypeError("Symbol is not a constructor!");
            var e2 = h(arguments.length > 0 ? arguments[0] : void 0), t2 = /* @__PURE__ */ __name(function(n2) {
              this === C && t2.call(Y, n2), i(this, U) && i(this[U], e2) && (this[U][e2] = false), K(this, e2, E(1, n2));
            }, "t");
            return o && V && K(C, e2, { configurable: true, set: t2 }), G(e2);
          }, "P")).prototype, "toString", function() {
            return this._k;
          }), w.f = X, A.f = H, n(32).f = O.f = Q, n(67).f = W, n(68).f = Z, o && !n(44) && a(C, "propertyIsEnumerable", W, true), y.f = function(e2) {
            return G(_(e2));
          }), s(s.G + s.W + s.F * !x, { Symbol: P });
          for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; $.length > ee; )
            _($[ee++]);
          for (var te = I(_.store), ne = 0; te.length > ne; )
            p(te[ne++]);
          s(s.S + s.F * !x, "Symbol", { for: function(e2) {
            return i(L, e2 += "") ? L[e2] : L[e2] = P(e2);
          }, keyFor: function(e2) {
            if (!z(e2))
              throw TypeError(e2 + " is not a symbol!");
            for (var t2 in L)
              if (L[t2] === e2)
                return t2;
          }, useSetter: function() {
            V = true;
          }, useSimple: function() {
            V = false;
          } }), s(s.S + s.F * !x, "Object", { create: function(e2, t2) {
            return void 0 === t2 ? R(e2) : J(R(e2), t2);
          }, defineProperty: H, defineProperties: J, getOwnPropertyDescriptor: X, getOwnPropertyNames: Q, getOwnPropertySymbols: Z }), F && s(s.S + s.F * (!x || c(function() {
            var e2 = P();
            return "[null]" != j([e2]) || "{}" != j({ a: e2 }) || "{}" != j(Object(e2));
          })), "JSON", { stringify: function(e2) {
            for (var t2, n2, r2 = [e2], i2 = 1; arguments.length > i2; )
              r2.push(arguments[i2++]);
            if (n2 = t2 = r2[1], (b(t2) || void 0 !== e2) && !z(e2))
              return g(t2) || (t2 = /* @__PURE__ */ __name(function(e3, t3) {
                if ("function" == typeof n2 && (t3 = n2.call(this, e3, t3)), !z(t3))
                  return t3;
              }, "t")), r2[1] = t2, j.apply(F, r2);
          } }), P.prototype[N] || n(18)(P.prototype, N, P.prototype.valueOf), f(P, "Symbol"), f(Math, "Math", true), f(r.JSON, "JSON", true);
        }, function(e, t, n) {
          n(323), n(320), n(319), n(318), n(317), n(316), n(315), n(314), n(313), n(312), n(311), n(310), n(309), n(308), n(307), n(306), n(304), n(303), n(302), n(301), n(300), n(299), n(298), n(297), n(296), n(295), n(294), n(293), n(292), n(291), n(290), n(289), n(288), n(287), n(286), n(285), n(284), n(283), n(282), n(281), n(280), n(279), n(278), n(276), n(275), n(274), n(273), n(272), n(271), n(270), n(269), n(268), n(267), n(266), n(265), n(264), n(263), n(262), n(261), n(260), n(259), n(258), n(257), n(256), n(255), n(254), n(253), n(252), n(251), n(250), n(249), n(248), n(247), n(246), n(245), n(244), n(243), n(241), n(240), n(238), n(237), n(236), n(235), n(234), n(233), n(232), n(229), n(228), n(227), n(226), n(225), n(224), n(223), n(222), n(221), n(220), n(219), n(218), n(217), n(128), n(216), n(215), n(126), n(214), n(213), n(212), n(211), n(210), n(206), n(205), n(204), n(203), n(202), n(201), n(200), n(199), n(198), n(197), n(196), n(195), n(194), n(193), n(192), n(191), n(190), n(189), n(188), n(187), n(186), n(185), n(184), n(183), n(182), n(181), n(179), n(178), n(177), e.exports = n(37);
        }, function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.MD5 = t.SFSRoom = t.SetBuddyVariablesRequest = t.RemoveBuddyRequest = t.InitBuddyListRequest = t.GoOnlineRequest = t.BuddyMessageRequest = t.BlockBuddyRequest = t.AddBuddyRequest = t.SetUserPositionRequest = t.QuickJoinGameRequest = t.JoinRoomInvitationRequest = t.InviteUsersRequest = t.InvitationReplyRequest = t.CreateSFSGameRequest = t.BanUserRequest = t.KickUserRequest = t.ExtensionRequest = t.FindUsersRequest = t.FindRoomsRequest = t.PlayerToSpectatorRequest = t.SpectatorToPlayerRequest = t.UnsubscribeRoomGroupRequest = t.SubscribeRoomGroupRequest = t.SetUserVariablesRequest = t.SetRoomVariablesRequest = t.AdminMessageRequest = t.ModeratorMessageRequest = t.ObjectMessageRequest = t.PrivateMessageRequest = t.PublicMessageRequest = t.ChangeRoomCapacityRequest = t.ChangeRoomPasswordStateRequest = t.ChangeRoomNameRequest = t.LeaveRoomRequest = t.QuickJoinOrCreateRoomRequest = t.CreateRoomRequest = t.JoinRoomRequest = t.LogoutRequest = t.LoginRequest = t.PasswordUtil = t.ClientDisconnectionReason = t.LoggerEvent = t.LogLevel = t.SFSErrorCodes = t.MessageRecipientMode = t.BanMode = t.MapLimits = t.RoomExtension = t.RoomEvents = t.RoomPermissions = t.MMORoomSettings = t.SFSGameSettings = t.RoomSettings = t.UserProperties = t.RoomProperties = t.StringMatch = t.NumberMatch = t.BoolMatch = t.LogicOperator = t.MatchExpression = t.MMOItemVariable = t.ReservedBuddyVariables = t.SFSBuddyVariable = t.ReservedRoomVariables = t.SFSRoomVariable = t.SFSUserVariable = t.VariableType = t.UserPrivileges = t.InvitationReply = t.Vec3D = t.SFSArray = t.SFSObject = t.SFSDataType = t.SFSBuddyEvent = t.SFSEvent = t.SmartFox = void 0;
          var r = n(324);
          Object.keys(r).forEach(function(e2) {
            "default" !== e2 && "__esModule" !== e2 && Object.defineProperty(t, e2, { enumerable: true, get: function() {
              return r[e2];
            } });
          });
          var i = n(176);
          Object.defineProperty(t, "SmartFox", { enumerable: true, get: function() {
            return i.SmartFox;
          } });
          var o = n(39);
          Object.defineProperty(t, "SFSEvent", { enumerable: true, get: function() {
            return o.SFSEvent;
          } }), Object.defineProperty(t, "SFSBuddyEvent", { enumerable: true, get: function() {
            return o.SFSBuddyEvent;
          } });
          var s = n(8);
          Object.defineProperty(t, "SFSDataType", { enumerable: true, get: function() {
            return s.SFSDataType;
          } }), Object.defineProperty(t, "SFSObject", { enumerable: true, get: function() {
            return s.SFSObject;
          } }), Object.defineProperty(t, "SFSArray", { enumerable: true, get: function() {
            return s.SFSArray;
          } }), Object.defineProperty(t, "Vec3D", { enumerable: true, get: function() {
            return s.Vec3D;
          } });
          var a = n(72);
          Object.defineProperty(t, "InvitationReply", { enumerable: true, get: function() {
            return a.InvitationReply;
          } });
          var u = n(47);
          Object.defineProperty(t, "UserPrivileges", { enumerable: true, get: function() {
            return u.UserPrivileges;
          } });
          var c = n(48);
          Object.defineProperty(t, "VariableType", { enumerable: true, get: function() {
            return c.VariableType;
          } });
          var l = n(59);
          Object.defineProperty(t, "SFSUserVariable", { enumerable: true, get: function() {
            return l.SFSUserVariable;
          } });
          var f = n(49);
          Object.defineProperty(t, "SFSRoomVariable", { enumerable: true, get: function() {
            return f.SFSRoomVariable;
          } }), Object.defineProperty(t, "ReservedRoomVariables", { enumerable: true, get: function() {
            return f.ReservedRoomVariables;
          } });
          var h = n(46);
          Object.defineProperty(t, "SFSBuddyVariable", { enumerable: true, get: function() {
            return h.SFSBuddyVariable;
          } }), Object.defineProperty(t, "ReservedBuddyVariables", { enumerable: true, get: function() {
            return h.ReservedBuddyVariables;
          } });
          var _ = n(73);
          Object.defineProperty(t, "MMOItemVariable", { enumerable: true, get: function() {
            return _.MMOItemVariable;
          } });
          var y = n(38);
          Object.defineProperty(t, "MatchExpression", { enumerable: true, get: function() {
            return y.MatchExpression;
          } }), Object.defineProperty(t, "LogicOperator", { enumerable: true, get: function() {
            return y.LogicOperator;
          } });
          var p = n(161);
          Object.defineProperty(t, "BoolMatch", { enumerable: true, get: function() {
            return p.BoolMatch;
          } }), Object.defineProperty(t, "NumberMatch", { enumerable: true, get: function() {
            return p.NumberMatch;
          } }), Object.defineProperty(t, "StringMatch", { enumerable: true, get: function() {
            return p.StringMatch;
          } });
          var d = n(160);
          Object.defineProperty(t, "RoomProperties", { enumerable: true, get: function() {
            return d.RoomProperties;
          } }), Object.defineProperty(t, "UserProperties", { enumerable: true, get: function() {
            return d.UserProperties;
          } });
          var g = n(56);
          Object.defineProperty(t, "RoomSettings", { enumerable: true, get: function() {
            return g.RoomSettings;
          } }), Object.defineProperty(t, "SFSGameSettings", { enumerable: true, get: function() {
            return g.SFSGameSettings;
          } }), Object.defineProperty(t, "MMORoomSettings", { enumerable: true, get: function() {
            return g.MMORoomSettings;
          } }), Object.defineProperty(t, "RoomPermissions", { enumerable: true, get: function() {
            return g.RoomPermissions;
          } }), Object.defineProperty(t, "RoomEvents", { enumerable: true, get: function() {
            return g.RoomEvents;
          } }), Object.defineProperty(t, "RoomExtension", { enumerable: true, get: function() {
            return g.RoomExtension;
          } }), Object.defineProperty(t, "MapLimits", { enumerable: true, get: function() {
            return g.MapLimits;
          } }), Object.defineProperty(t, "BanMode", { enumerable: true, get: function() {
            return g.BanMode;
          } }), Object.defineProperty(t, "MessageRecipientMode", { enumerable: true, get: function() {
            return g.MessageRecipientMode;
          } });
          var v = n(74);
          Object.defineProperty(t, "SFSErrorCodes", { enumerable: true, get: function() {
            return v.SFSErrorCodes;
          } });
          var b = n(50);
          Object.defineProperty(t, "LogLevel", { enumerable: true, get: function() {
            return b.LogLevel;
          } }), Object.defineProperty(t, "LoggerEvent", { enumerable: true, get: function() {
            return b.LoggerEvent;
          } });
          var m = n(51);
          Object.defineProperty(t, "ClientDisconnectionReason", { enumerable: true, get: function() {
            return m.ClientDisconnectionReason;
          } });
          var S = n(159);
          Object.defineProperty(t, "PasswordUtil", { enumerable: true, get: function() {
            return S.PasswordUtil;
          } });
          var E = n(118);
          Object.defineProperty(t, "LoginRequest", { enumerable: true, get: function() {
            return E.LoginRequest;
          } });
          var R = n(117);
          Object.defineProperty(t, "LogoutRequest", { enumerable: true, get: function() {
            return R.LogoutRequest;
          } });
          var O = n(116);
          Object.defineProperty(t, "JoinRoomRequest", { enumerable: true, get: function() {
            return O.JoinRoomRequest;
          } });
          var w = n(57);
          Object.defineProperty(t, "CreateRoomRequest", { enumerable: true, get: function() {
            return w.CreateRoomRequest;
          } });
          var A = n(158);
          Object.defineProperty(t, "QuickJoinOrCreateRoomRequest", { enumerable: true, get: function() {
            return A.QuickJoinOrCreateRoomRequest;
          } });
          var I = n(157);
          Object.defineProperty(t, "LeaveRoomRequest", { enumerable: true, get: function() {
            return I.LeaveRoomRequest;
          } });
          var M = n(115);
          Object.defineProperty(t, "ChangeRoomNameRequest", { enumerable: true, get: function() {
            return M.ChangeRoomNameRequest;
          } });
          var T = n(114);
          Object.defineProperty(t, "ChangeRoomPasswordStateRequest", { enumerable: true, get: function() {
            return T.ChangeRoomPasswordStateRequest;
          } });
          var k = n(113);
          Object.defineProperty(t, "ChangeRoomCapacityRequest", { enumerable: true, get: function() {
            return k.ChangeRoomCapacityRequest;
          } });
          var P = n(70);
          Object.defineProperty(t, "PublicMessageRequest", { enumerable: true, get: function() {
            return P.PublicMessageRequest;
          } }), Object.defineProperty(t, "PrivateMessageRequest", { enumerable: true, get: function() {
            return P.PrivateMessageRequest;
          } }), Object.defineProperty(t, "ObjectMessageRequest", { enumerable: true, get: function() {
            return P.ObjectMessageRequest;
          } }), Object.defineProperty(t, "ModeratorMessageRequest", { enumerable: true, get: function() {
            return P.ModeratorMessageRequest;
          } }), Object.defineProperty(t, "AdminMessageRequest", { enumerable: true, get: function() {
            return P.AdminMessageRequest;
          } });
          var F = n(112);
          Object.defineProperty(t, "SetRoomVariablesRequest", { enumerable: true, get: function() {
            return F.SetRoomVariablesRequest;
          } });
          var j = n(111);
          Object.defineProperty(t, "SetUserVariablesRequest", { enumerable: true, get: function() {
            return j.SetUserVariablesRequest;
          } });
          var U = n(110);
          Object.defineProperty(t, "SubscribeRoomGroupRequest", { enumerable: true, get: function() {
            return U.SubscribeRoomGroupRequest;
          } });
          var N = n(109);
          Object.defineProperty(t, "UnsubscribeRoomGroupRequest", { enumerable: true, get: function() {
            return N.UnsubscribeRoomGroupRequest;
          } });
          var B = n(108);
          Object.defineProperty(t, "SpectatorToPlayerRequest", { enumerable: true, get: function() {
            return B.SpectatorToPlayerRequest;
          } });
          var L = n(107);
          Object.defineProperty(t, "PlayerToSpectatorRequest", { enumerable: true, get: function() {
            return L.PlayerToSpectatorRequest;
          } });
          var D = n(106);
          Object.defineProperty(t, "FindRoomsRequest", { enumerable: true, get: function() {
            return D.FindRoomsRequest;
          } });
          var Y = n(105);
          Object.defineProperty(t, "FindUsersRequest", { enumerable: true, get: function() {
            return Y.FindUsersRequest;
          } });
          var C = n(97);
          Object.defineProperty(t, "ExtensionRequest", { enumerable: true, get: function() {
            return C.ExtensionRequest;
          } });
          var x = n(156);
          Object.defineProperty(t, "KickUserRequest", { enumerable: true, get: function() {
            return x.KickUserRequest;
          } });
          var q = n(155);
          Object.defineProperty(t, "BanUserRequest", { enumerable: true, get: function() {
            return q.BanUserRequest;
          } });
          var V = n(154);
          Object.defineProperty(t, "CreateSFSGameRequest", { enumerable: true, get: function() {
            return V.CreateSFSGameRequest;
          } });
          var K = n(153);
          Object.defineProperty(t, "InvitationReplyRequest", { enumerable: true, get: function() {
            return K.InvitationReplyRequest;
          } });
          var G = n(69);
          Object.defineProperty(t, "InviteUsersRequest", { enumerable: true, get: function() {
            return G.InviteUsersRequest;
          } });
          var z = n(152);
          Object.defineProperty(t, "JoinRoomInvitationRequest", { enumerable: true, get: function() {
            return z.JoinRoomInvitationRequest;
          } });
          var H = n(151);
          Object.defineProperty(t, "QuickJoinGameRequest", { enumerable: true, get: function() {
            return H.QuickJoinGameRequest;
          } });
          var J = n(104);
          Object.defineProperty(t, "SetUserPositionRequest", { enumerable: true, get: function() {
            return J.SetUserPositionRequest;
          } });
          var W = n(102);
          Object.defineProperty(t, "AddBuddyRequest", { enumerable: true, get: function() {
            return W.AddBuddyRequest;
          } });
          var X = n(100);
          Object.defineProperty(t, "BlockBuddyRequest", { enumerable: true, get: function() {
            return X.BlockBuddyRequest;
          } });
          var Q = n(150);
          Object.defineProperty(t, "BuddyMessageRequest", { enumerable: true, get: function() {
            return Q.BuddyMessageRequest;
          } });
          var Z = n(99);
          Object.defineProperty(t, "GoOnlineRequest", { enumerable: true, get: function() {
            return Z.GoOnlineRequest;
          } });
          var $ = n(103);
          Object.defineProperty(t, "InitBuddyListRequest", { enumerable: true, get: function() {
            return $.InitBuddyListRequest;
          } });
          var ee = n(101);
          Object.defineProperty(t, "RemoveBuddyRequest", { enumerable: true, get: function() {
            return ee.RemoveBuddyRequest;
          } });
          var te = n(98);
          Object.defineProperty(t, "SetBuddyVariablesRequest", { enumerable: true, get: function() {
            return te.SetBuddyVariablesRequest;
          } });
          var ne = n(9);
          Object.defineProperty(t, "SFSRoom", { enumerable: true, get: function() {
            return ne.SFSRoom;
          } });
          var re = n(71);
          Object.defineProperty(t, "MD5", { enumerable: true, get: function() {
            return re.MD5;
          } }), n(149);
        }]);
      });
    }
  });

  // src/Background.ts
  var { regClass, property } = Laya;
  var Background = class extends Laya.Script {
    constructor() {
      super();
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake() {
      let ownerSprite = this.owner;
      ownerSprite.x = 0;
      ownerSprite.y = 0;
      ownerSprite.width = Laya.Browser.width;
      ownerSprite.height = Laya.Browser.height;
    }
    onUpdate() {
    }
  };
  __name(Background, "Background");
  Background = __decorateClass([
    regClass("9f78dd27-7aab-4a69-87aa-70472fc0ec06", "../src/Background.ts")
  ], Background);

  // src/Route.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Safe = /* @__PURE__ */ ((Safe2) => {
    Safe2[Safe2["no"] = 0] = "no";
    Safe2[Safe2["yes"] = 1] = "yes";
    return Safe2;
  })(Safe || {});
  var Event = class {
  };
  __name(Event, "Event");
  Event.Enter = "ROUTE_ENTER";
  Event.Exit = "ROUTE_EXIT";
  var Route = class extends Laya.Script {
    constructor() {
      super();
      this.safe = 0 /* no */;
      this.chess = [];
    }
    onAwake() {
      super.onAwake();
      this.owner.on(Event.Enter, this, this.scaleChess);
      this.owner.on(Event.Exit, this, this.scaleChess);
    }
    puddleAni(color) {
      let idxs = { "red": [0, 5], "green": [6, 11], "yellow": [12, 17], "blue": [18, 23] }[color];
      this.puddle.visible = true;
      this.puddle.play(idxs[0], idxs[1]);
      Laya.timer.once(700, this, () => {
        this.puddle.visible = false;
      });
    }
    scaleChess(hole) {
      if (this.chess.length == 1) {
        this.chess[0].scale(1, 1).pos(hole.x, hole.y);
      } else if (this.chess.length == 2) {
        this.chess[0].scale(0.7, 0.7).pos(hole.x - 3, hole.y - 3);
        this.chess[1].scale(0.7, 0.7).pos(hole.x + 14, hole.y + 15);
      } else if (this.chess.length == 3) {
        this.chess[0].scale(0.6, 0.6).pos(hole.x - 4, hole.y - 3);
        this.chess[1].scale(0.6, 0.6).pos(hole.x + 18, hole.y - 3);
        this.chess[2].scale(0.6, 0.6).pos(hole.x + 7, hole.y + 17);
      } else if (this.chess.length == 4) {
        this.chess[0].scale(0.6, 0.6).pos(hole.x - 4, hole.y - 3);
        this.chess[1].scale(0.6, 0.6).pos(hole.x + 18, hole.y - 3);
        this.chess[2].scale(0.6, 0.6).pos(hole.x - 4, hole.y + 17);
        this.chess[3].scale(0.6, 0.6).pos(hole.x + 18, hole.y + 17);
      } else if (this.chess.length == 5) {
        this.chess[0].scale(0.6, 0.6).pos(hole.x - 6, hole.y - 6);
        this.chess[1].scale(0.6, 0.6).pos(hole.x + 19, hole.y - 6);
        this.chess[2].scale(0.6, 0.6).pos(hole.x - 6, hole.y + 20);
        this.chess[3].scale(0.6, 0.6).pos(hole.x + 19, hole.y + 20);
        this.chess[4].scale(0.6, 0.6).pos(hole.x + 7, hole.y + 7);
      } else {
        let x = 0;
        let y = hole.y - 20;
        for (let i = 0; i < this.chess.length; ++i) {
          if (i % 3 == 0) {
            y += 15;
            x = hole.x - 6;
          } else {
            x += 15;
          }
          this.chess[i].scale(0.5, 0.5).pos(x, y);
        }
      }
    }
  };
  __name(Route, "Route");
  __decorateClass([
    property2(Laya.Clip)
  ], Route.prototype, "puddle", 2);
  __decorateClass([
    property2({ type: Safe })
  ], Route.prototype, "safe", 2);
  __decorateClass([
    property2([Laya.Sprite])
  ], Route.prototype, "chess", 2);
  Route = __decorateClass([
    regClass2("f65b0a36-8072-43b6-ba82-0cc45e25162f", "../src/Route.ts")
  ], Route);

  // src/Config.ts
  var Config = class {
  };
  __name(Config, "Config");
  Config.NUMBER_UNIVERSAL_HOLD = 52;
  Config.NUMBER_PERSONAL_HOLD = 6;
  Config.Colors = ["red", "green", "yellow", "blue"];

  // src/Player.ts
  var { regClass: regClass3, property: property3, SoundManager } = Laya;
  var Event2 = class {
  };
  __name(Event2, "Event");
  Event2.EntryRoom = "ENTRY_ROOM";
  Event2.ExitRoom = "EXIT_ROOM";
  Event2.StateChange = "STATE_CHANGE";
  Event2.RollStart = "ROLL_START";
  Event2.RollEnd = "ROLL_END";
  Event2.Choose = "CHOOSE";
  Event2.Achieve = "ACHIEVE";
  Event2.Victory = "VICTORY";
  var Type = /* @__PURE__ */ ((Type2) => {
    Type2[Type2["Extreme"] = 0] = "Extreme";
    Type2[Type2["Computer"] = 1] = "Computer";
    Type2[Type2["Oneself"] = 2] = "Oneself";
    return Type2;
  })(Type || {});
  var State = /* @__PURE__ */ ((State2) => {
    State2[State2["Idle"] = 0] = "Idle";
    State2[State2["Running"] = 1] = "Running";
    return State2;
  })(State || {});
  var Player = class extends Laya.Script {
    constructor() {
      super();
      this.chippy = [];
      this.home = [];
    }
    onAwake() {
    }
    onStart() {
    }
    hopChesses(chesses) {
      for (let i = 0; i < chesses.length; ++i) {
        chesses[i].getComponent(Chess).hop();
      }
    }
    stopChesses(chesses) {
      for (let i = 0; i < chesses.length; ++i) {
        chesses[i].getComponent(Chess).stop();
      }
    }
    reckonChess(diceNumber) {
      let chesses = [];
      if (diceNumber != 5 && this.chippy.length > 0) {
        if (this.chippy.length > 1) {
          chesses = this.chippy;
        } else {
          chesses.push(this.chippy[0]);
        }
      } else if (diceNumber == 5) {
        chesses = chesses.concat(this.chippy);
        for (let i = 0; i < this.groove.numChildren; ++i) {
          chesses.push(this.groove.getChildAt(i));
        }
      }
      return chesses;
    }
    getUniversalNextNumber(currentNumber, step) {
      let num = currentNumber + step;
      if (num > Config.NUMBER_UNIVERSAL_HOLD) {
        num = num - Config.NUMBER_UNIVERSAL_HOLD + 1;
      } else if (num < 0) {
        num = Config.NUMBER_UNIVERSAL_HOLD - num;
      }
      return num;
    }
    getUniversalNextHole(currentNumber, step) {
      let nextNumber = this.getUniversalNextNumber(currentNumber, step);
      return this.universal.getChildByName(nextNumber.toString());
    }
    deduce(diceNumber, chesses, complete) {
      let deduceResult = [];
      let deduceLast = [];
      for (let i = 0; i < chesses.length; ++i) {
        let chess = chesses[i].getComponent(Chess);
        if (chesses[i].parent == this.groove && diceNumber == 5) {
          deduceResult.push({ chess: chesses[i], reason: "entry" });
        } else if (chesses[i].parent == this.universal) {
          let currentNumber = Number.parseInt(chess.hole.name);
          let nextStep = diceNumber + 1;
          let nextNumber = currentNumber + nextStep;
          if (nextNumber > Number.parseInt(this.door.name)) {
            deduceLast.push({ chess: chesses[i], reason: "advance" });
          } else {
            let nextHole = this.getUniversalNextHole(currentNumber, nextStep);
            if (nextHole != null) {
              let resultChesses = this.getKickChesses(nextHole.getComponent(Route));
              if (resultChesses.length > 0) {
                resultChesses.map((c) => {
                  c.kicked();
                });
                deduceResult.push({ chess: chesses[i], reason: "kick", kicks: resultChesses });
              } else {
                deduceLast.push({ chess: chesses[i], reason: "advance" });
              }
            } else {
              deduceLast.push({ chess: chesses[i], reason: "advance" });
            }
          }
        } else {
          let currentHoleNumber = Number.parseInt(chess.hole.name);
          if (currentHoleNumber + diceNumber == 5) {
            deduceResult.unshift({ chess: chesses[i], reason: "home" });
          } else {
            deduceLast.push({ chess: chesses[i], reason: "advance" });
          }
        }
      }
      deduceLast.sort(() => Math.random() - 0.5);
      complete.runWith([deduceResult.concat(deduceLast)]);
    }
    isAllHome() {
      return this.home.length == 4;
    }
    getChesses(route, player) {
      let chesses = [];
      for (let i = 0; i < route.chess.length; ++i) {
        let chess = route.chess[i].getComponent(Chess);
        if (chess.player == player) {
          chesses.push(chess);
        }
      }
      return chesses;
    }
    getKickChesses(route) {
      let resultChesses = [];
      if (route.safe == 1 /* yes */) {
        return resultChesses;
      }
      for (let i = 0; i < route.chess.length; ++i) {
        let chess = route.chess[i].getComponent(Chess);
        if (chess.player == this) {
          continue;
        }
        let chesses = this.getChesses(route, chess.player);
        if (chesses.length == 1) {
          resultChesses.push(chess);
        }
      }
      return resultChesses;
    }
    kick(route) {
      let chesses = this.getKickChesses(route);
      chesses.map((chess) => {
        chess.stop();
        SoundManager.playSound("sounds/kick.mp3", 1);
        chess.revert(Laya.Handler.create(this, () => {
          let idx = chess.player.chippy.indexOf(chess.owner);
          if (idx != -1) {
            chess.player.chippy.splice(idx, 1);
          }
        }));
      });
    }
    onAdvanceComplete(node, complete) {
      let chess = node.getComponent(Chess);
      if (chess.hole == this.goal) {
        let idx = this.chippy.indexOf(node);
        if (idx != -1) {
          this.home.push(this.chippy.splice(idx, 1)[0]);
        }
      }
      if (this.isAllHome()) {
        this.crown.visible = true;
        this.crown.getComponent(Laya.Animator2D).play("elastic");
      } else {
        let route = chess.hole.getComponent(Route);
        this.kick(route);
      }
      complete.runWith(node);
    }
    advance(node, diceNumber, complete) {
      let chess = node.getComponent(Chess);
      if (this.chippy.indexOf(node) != -1) {
        chess.step(diceNumber + 1, 1, Laya.Handler.create(this, () => {
          this.onAdvanceComplete(node, complete);
        }));
      } else if (node.parent == this.groove) {
        chess.step(1, 1, Laya.Handler.create(this, () => {
          if (this.chippy.indexOf(node) == -1) {
            this.chippy.push(node);
          }
          this.onAdvanceComplete(node, complete);
        }));
      }
    }
  };
  __name(Player, "Player");
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "entry", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "goal", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "door", 2);
  __decorateClass([
    property3(Laya.Clip)
  ], Player.prototype, "diceRoll", 2);
  __decorateClass([
    property3(Laya.Clip)
  ], Player.prototype, "diceDefault", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "groove", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "universal", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "trade", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "personal", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "crown", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Player.prototype, "origin", 2);
  __decorateClass([
    property3(Laya.Prefab)
  ], Player.prototype, "chessPrefab", 2);
  __decorateClass([
    property3([Laya.Sprite])
  ], Player.prototype, "chippy", 2);
  __decorateClass([
    property3([Laya.Sprite])
  ], Player.prototype, "home", 2);
  Player = __decorateClass([
    regClass3("c5f16793-ae8c-43aa-80e7-cdc3ce175664", "../src/Player.ts")
  ], Player);

  // src/Chess.ts
  var { regClass: regClass4, property: property4, SoundManager: SoundManager2 } = Laya;
  var Chess = class extends Laya.Script {
    constructor() {
      super();
    }
    jumpToWorld() {
      let ownerSprite = this.owner;
      let parentSprite = this.owner.parent;
      let ownerSpriteWorldPoint = parentSprite.localToGlobal(new Laya.Point(ownerSprite.x, ownerSprite.y));
      Laya.stage.addChild(ownerSprite.pos(ownerSpriteWorldPoint.x, ownerSpriteWorldPoint.y));
      return ownerSpriteWorldPoint;
    }
    jump(dest, complete) {
      let ownerSpriteWorldPoint = this.jumpToWorld();
      let parent = dest.parent;
      let destWorldPoint = parent.localToGlobal(new Laya.Point(dest.x, dest.y));
      this.skipTo(destWorldPoint, parent, Laya.Handler.create(this, () => {
        this.pass(dest);
        this.hole.event(Event.Exit, [ownerSpriteWorldPoint]);
        this.hole = dest;
        this.hole.event(Event.Enter, [new Laya.Point(this.hole.x, this.hole.y)]);
        complete.run();
      }));
    }
    skipTo(destWorldPoint, parent, complete) {
      let ownerSprite = this.owner;
      Laya.Tween.to(ownerSprite, { y: destWorldPoint.y, x: destWorldPoint.x }, 300, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        let parentLocalPoint = parent.globalToLocal(destWorldPoint, true);
        parent.addChild(ownerSprite.pos(parentLocalPoint.x, parentLocalPoint.y));
        complete.run();
      }));
    }
    step(step, director, complete) {
      let roadway = this.owner.parent;
      if (step == 0) {
        complete.run();
        return;
      }
      SoundManager2.playSound("sounds/move.mp3", 1);
      if (roadway == this.player.groove) {
        this.jump(this.player.entry, complete);
      } else if (this.hole == this.player.door) {
        let personal = this.player.personal;
        let firstHole = personal.getChildByName("0");
        this.jump(firstHole, Laya.Handler.create(this, () => {
          this.step(--step, director, complete);
        }));
      } else {
        let currentHoleNumber = Number.parseInt(this.hole.name);
        if (roadway == this.player.personal) {
          if (currentHoleNumber >= Config.NUMBER_PERSONAL_HOLD - 1 || currentHoleNumber < 0) {
            director *= -1;
          }
          currentHoleNumber += director;
        } else if (currentHoleNumber < 0) {
          currentHoleNumber = Config.NUMBER_UNIVERSAL_HOLD - 1;
        } else {
          currentHoleNumber += director;
        }
        let nextHole = roadway.getChildByName(currentHoleNumber.toString());
        if (nextHole == null) {
          nextHole = roadway.getChildByName("0");
        }
        this.moveTo(nextHole, 200, Laya.Handler.create(this, () => {
          this.step(--step, director, complete);
        }));
      }
    }
    pass(nextHole) {
      let route = this.hole.getComponent(Route);
      if (route != null) {
        let idx = route.chess.indexOf(this.owner);
        if (idx != -1) {
          route.chess.splice(idx, 1);
        }
      }
      let nextRoute = nextHole.getComponent(Route);
      if (nextRoute != null) {
        let node = this.owner;
        if (nextRoute.chess.indexOf(node) == -1) {
          nextRoute.chess.push(node);
        }
        nextRoute.puddleAni(this.player.owner.name);
      }
    }
    backoff(dest, complete) {
      if (dest == this.hole) {
        complete.run();
        return;
      }
      let roadway = this.owner.parent;
      let nextHoleNumber = Number.parseInt(this.hole.name) - 1;
      if (nextHoleNumber < 0) {
        nextHoleNumber = Config.NUMBER_UNIVERSAL_HOLD - 1;
      }
      let nextHole = roadway.getChildByName(nextHoleNumber.toString());
      if (nextHole == null) {
        nextHole = roadway.getChildByName("0");
      }
      this.moveTo(nextHole, 50, Laya.Handler.create(this, () => {
        this.backoff(dest, complete);
      }));
    }
    revert(complete) {
      this.backoff(this.player.entry, Laya.Handler.create(this, () => {
        this.jumpToWorld();
        let destNode = this.player.origin.getChildByName(this.owner.name);
        let destWorldPoint = this.player.origin.localToGlobal(new Laya.Point(destNode.x, destNode.y));
        this.skipTo(destWorldPoint, this.player.groove, Laya.Handler.create(this, () => {
          let parentLocalPoint = this.player.groove.globalToLocal(destWorldPoint, true);
          this.pass(destNode);
          this.hole.event(Event.Exit, [new Laya.Point(this.hole.x, this.hole.y)]);
          this.hole = destNode;
          this.hole.event(Event.Enter, [parentLocalPoint]);
          complete.run();
        }));
      }));
    }
    moveTo(nextHole, duration, complete) {
      let destPoint = new Laya.Point(nextHole.x, nextHole.y);
      Laya.Tween.to(this.owner, { y: destPoint.y, x: destPoint.x }, duration, Laya.Ease.quintInOut, Laya.Handler.create(this, () => {
        this.pass(nextHole);
        this.hole.event(Event.Exit, [new Laya.Point(this.hole.x, this.hole.y)]);
        this.hole = nextHole;
        this.hole.event(Event.Enter, [new Laya.Point(nextHole.x, nextHole.y)]);
        complete.run();
      }));
    }
    hop() {
      this.chess.getComponent(Laya.Animator2D).play("hop");
    }
    stop() {
      this.shoe.visible = false;
      this.chess.getComponent(Laya.Animator2D).play("idle");
    }
    kicked() {
      this.shoe.visible = true;
      this.chess.getComponent(Laya.Animator2D).play("kick");
    }
  };
  __name(Chess, "Chess");
  __decorateClass([
    property4(Player)
  ], Chess.prototype, "player", 2);
  __decorateClass([
    property4(Laya.Sprite)
  ], Chess.prototype, "hole", 2);
  __decorateClass([
    property4(Laya.Sprite)
  ], Chess.prototype, "chess", 2);
  __decorateClass([
    property4(Laya.Image)
  ], Chess.prototype, "image", 2);
  __decorateClass([
    property4(Laya.Image)
  ], Chess.prototype, "shoe", 2);
  Chess = __decorateClass([
    regClass4("2be80ad6-1bcc-440d-a7c9-809c6c1eef91", "../src/Chess.ts")
  ], Chess);

  // src/ClickSound.ts
  var { regClass: regClass5, property: property5, SoundManager: SoundManager3 } = Laya;
  var Script = class extends Laya.Script {
    constructor() {
      super();
    }
    onMouseClick() {
      SoundManager3.playSound("sounds/click.mp3", 1);
    }
  };
  __name(Script, "Script");
  Script = __decorateClass([
    regClass5("f4a9ed67-7b7a-43be-945e-88ba9965a9d4", "../src/ClickSound.ts")
  ], Script);

  // src/Performer.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var Performer = class extends Laya.Script {
    constructor() {
      super();
      this.currentDiceNumber = 0;
      this.state = 0 /* Idle */;
    }
    onAwake() {
      let node = this.owner;
      this.player = node.getComponent(Player);
      node.visible = true;
    }
    setState(state) {
      this.state = state;
      this.owner.event(Event2.StateChange, [state]);
    }
    stopChessDecuce(reasons, deduceResult) {
      for (let idx in deduceResult) {
        let dr = deduceResult[idx];
        if (reasons.indexOf(dr.reason) != -1) {
          dr.kicks.map((c) => {
            c.stop();
          });
        }
      }
    }
  };
  __name(Performer, "Performer");
  Performer = __decorateClass([
    regClass6("a1b4fee2-5dd4-483e-bf42-a9f391634e69", "../src/Performer.ts")
  ], Performer);

  // src/Dice.ts
  var { regClass: regClass7, property: property7, SoundManager: SoundManager4 } = Laya;
  var Dice = class extends Laya.Script {
    constructor() {
      super();
    }
    setDiceNumber(idx) {
      this.diceDefault.visible = true;
      this.diceRoll.visible = false;
      this.diceDefault.index = idx;
    }
    roll() {
      this.diceDefault.visible = false;
      this.diceRoll.visible = true;
      this.diceRoll.play(0, -1);
      SoundManager4.playSound("sounds/chess.mp3", 1);
      this.owner.getComponent(Laya.Animator2D).play("roll");
    }
    stop(complete) {
      this.diceRoll.stop();
      this.owner.getComponent(Laya.Animator2D).play("idle");
      complete.run();
    }
  };
  __name(Dice, "Dice");
  __decorateClass([
    property7(Laya.Clip)
  ], Dice.prototype, "diceRoll", 2);
  __decorateClass([
    property7(Laya.Clip)
  ], Dice.prototype, "diceDefault", 2);
  Dice = __decorateClass([
    regClass7("26418778-2a8b-4ac8-aa46-9e423be83978", "../src/Dice.ts")
  ], Dice);

  // src/Trade.ts
  var { regClass: regClass8, property: property8 } = Laya;
  var Trade = class extends Laya.Script {
    constructor() {
      super();
    }
    stop() {
      let ani = this.owner.getComponent(Laya.Animator2D);
      ani.play("idle");
      return this;
    }
    disabled(b) {
      this.disabledBk.visible = b;
    }
    becareful() {
      let ani = this.owner.getComponent(Laya.Animator2D);
      ani.play("becareful");
    }
    roll() {
      this.owner.getComponent(Dice).roll();
    }
  };
  __name(Trade, "Trade");
  __decorateClass([
    property8(Laya.Image)
  ], Trade.prototype, "disabledBk", 2);
  Trade = __decorateClass([
    regClass8("39d67820-6b75-4090-969f-b2fef892effc", "../src/Trade.ts")
  ], Trade);

  // src/Computer.ts
  var { regClass: regClass9, property: property9 } = Laya;
  var Computer = class extends Performer {
    constructor() {
      super();
    }
    onAwake() {
      super.onAwake();
      this.owner.on(Event2.StateChange, this, this.onStateChange);
    }
    onStart() {
    }
    onStateChange() {
      let trade = this.player.trade.getComponent(Trade);
      if (this.state == 1 /* Running */) {
        this.startRoll();
      } else {
        trade.stop();
      }
      trade.disabled(this.state != 1 /* Running */);
    }
    startRoll() {
      this.owner.event(Event2.RollStart, this.owner);
      let trade = this.player.trade.getComponent(Trade);
      trade.roll();
      Laya.timer.once(900, this, this.onRollTimeout);
    }
    onRollTimeout() {
      this.currentDiceNumber = Math.floor(Math.random() * 6);
      this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this, this.onRollStop));
    }
    onRollStop() {
      this.owner.event(Event2.RollEnd, [this.currentDiceNumber]);
      this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);
      let chesses = this.player.reckonChess(this.currentDiceNumber);
      if (chesses.length > 0) {
        this.owner.event(Event2.Choose, [this.owner]);
        this.player.hopChesses(chesses);
        this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult) => {
          Laya.timer.once(500, this, () => {
            this.stopChessDecuce(["kick"], deduceResult);
            this.player.stopChesses(chesses);
            this.player.advance(deduceResult[0].chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
          });
        }));
      } else {
        this.owner.event(Event2.Achieve, null);
      }
    }
    onAdvanceComplete(node) {
      let chess = node.getComponent(Chess);
      if (chess.hole == this.player.entry) {
        this.startRoll();
        return;
      }
      this.owner.event(Event2.Achieve, node);
      if (this.player.isAllHome()) {
        this.owner.event(Event2.Victory);
      }
    }
  };
  __name(Computer, "Computer");
  Computer = __decorateClass([
    regClass9("34445544-5dc4-4031-a198-be7466abfb1c", "../src/Computer.ts")
  ], Computer);

  // src/Parallel.ts
  var { regClass: regClass10, property: property10, SoundManager: SoundManager5 } = Laya;
  var Parallel = class extends Laya.Script {
    constructor() {
      super();
      this.colorCheckBox = [];
    }
    onAwake() {
      this.play2pBtn.on(Laya.Event.CLICK, this, () => {
        this.play4pBtn.selected = false;
        this.play2pBtn.selected = true;
      });
      this.play4pBtn.on(Laya.Event.CLICK, this, () => {
        this.play2pBtn.selected = false;
        this.play4pBtn.selected = true;
      });
      for (let idx in this.colorCheckBox) {
        this.colorCheckBox[idx].on(Laya.Event.CLICK, this, (event) => {
          for (let idx2 in this.colorCheckBox) {
            if (this.colorCheckBox[idx2].disabled) {
              continue;
            }
            this.colorCheckBox[idx2].selected = this.colorCheckBox[idx2] == event.target;
          }
        });
      }
    }
  };
  __name(Parallel, "Parallel");
  __decorateClass([
    property10(Laya.Button)
  ], Parallel.prototype, "closeBtn", 2);
  __decorateClass([
    property10(Laya.CheckBox)
  ], Parallel.prototype, "play2pBtn", 2);
  __decorateClass([
    property10(Laya.CheckBox)
  ], Parallel.prototype, "play4pBtn", 2);
  __decorateClass([
    property10(Laya.Button)
  ], Parallel.prototype, "play", 2);
  __decorateClass([
    property10([Laya.CheckBox])
  ], Parallel.prototype, "colorCheckBox", 2);
  Parallel = __decorateClass([
    regClass10("a5d9f7a0-da02-42b4-ae7d-627f69a899e4", "../src/Parallel.ts")
  ], Parallel);

  // src/ComputerParallel.ts
  var { regClass: regClass11, property: property11 } = Laya;
  var ComputerParallel = class extends Laya.Script {
    constructor() {
      super();
      this.colorIdx = -1;
    }
    onAwake() {
      let parallel = this.owner.getComponent(Parallel);
      parallel.play.on(Laya.Event.CLICK, this, () => {
        this.owner.event(Laya.Event.PLAYED, [Config.Colors[this.colorIdx], parallel.play2pBtn.selected ? 2 : 4]);
      });
      for (let idx in parallel.colorCheckBox) {
        parallel.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
          parallel.play.disabled = false;
          this.colorIdx = Number.parseInt(idx);
        });
      }
      parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
        this.owner.event(Laya.Event.CLOSE);
        this.owner.removeSelf();
      });
    }
  };
  __name(ComputerParallel, "ComputerParallel");
  ComputerParallel = __decorateClass([
    regClass11("9f7ba979-284a-4c3f-9bd9-8653533441a3", "../src/ComputerParallel.ts")
  ], ComputerParallel);

  // src/CreateRoom.ts
  var { regClass: regClass12, property: property12 } = Laya;
  var CreateRoom = class extends Laya.Script {
    constructor() {
      super();
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake() {
      this.tab.selectHandler = new Laya.Handler(this, this.onTabSelected);
    }
    onTabSelected(index) {
      this.viewStack.selectedIndex = index;
    }
    /**
     * 组件被启用后执行，例如节点被添加到舞台后
     */
    //onEnable(): void {}
    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    //onDisable(): void {}
    /**
     * 第一次执行update之前执行，只会执行一次
     */
    //onStart(): void {}
    /**
     * 手动调用节点销毁时执行
     */
    //onDestroy(): void {
    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onUpdate(): void {}
    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}
    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}
  };
  __name(CreateRoom, "CreateRoom");
  __decorateClass([
    property12(Laya.ViewStack)
  ], CreateRoom.prototype, "viewStack", 2);
  __decorateClass([
    property12(Laya.Tab)
  ], CreateRoom.prototype, "tab", 2);
  CreateRoom = __decorateClass([
    regClass12("b07b053c-5687-4e6f-8fd0-480569bd2009", "../src/CreateRoom.ts")
  ], CreateRoom);

  // src/Dialog.ts
  var { regClass: regClass13, property: property13 } = Laya;
  var Dialog = class extends Laya.Dialog {
  };
  __name(Dialog, "Dialog");
  Dialog = __decorateClass([
    regClass13("b162ad1a-cdc1-48a5-bc94-b89651a443fa", "../src/Dialog.ts")
  ], Dialog);

  // src/Door.ts
  var { regClass: regClass14, property: property14 } = Laya;
  var Door = class extends Laya.Script {
    constructor() {
      super();
    }
  };
  __name(Door, "Door");
  __decorateClass([
    property14(Laya.Sprite)
  ], Door.prototype, "player", 2);
  Door = __decorateClass([
    regClass14("679087f6-f6b5-4a60-9f2e-ff9a7d356e0f", "../src/Door.ts")
  ], Door);

  // src/Station.ts
  var SFS2X = __toESM(require_sfs2x_api());
  var { regClass: regClass15, property: property15 } = Laya;
  var Event3 = class {
  };
  __name(Event3, "Event");
  Event3.Login = "LOGIN";
  Event3.Join = "ROOM_JOIN";
  Event3.Disconnect = "DISCONNECT";
  Event3.Exit = "ROOM_EXIT";
  Event3.Error = "ROOM_ERROR";
  Event3.LoginError = "LOGIN_ERROR";
  var Station = class extends Laya.Script {
    constructor() {
      super();
      this.debug = true;
    }
    onAwake() {
      Station.config.host = this.host;
      Station.config.port = this.port;
      Station.config.zone = this.zone;
      Station.config.debug = this.debug;
      Station.config.useSSL = false;
      this.initSmartFox(this.playerName);
    }
    initSmartFox(playerName) {
      if (Station.sfs == null) {
        Station.sfs = new SFS2X.SmartFox(Station.config);
        Station.sfs.logger.level = SFS2X.LogLevel.DEBUG;
        Station.sfs.logger.enableConsoleOutput = true;
        Station.sfs.logger.enableEventDispatching = true;
      }
      Station.loginName = playerName + Math.random().toString();
    }
    onStart() {
      this.addSmartFoxListener();
      if (!Station.sfs.isConnected) {
        Station.sfs.connect();
      }
    }
    addSmartFoxListener() {
      Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, Station.onConnection, Station.sfs);
      Station.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, Station.onConnectionLost, Station.sfs);
      Station.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, Station.onLoginError, Station.sfs);
      Station.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, Station.onLogin, Station.sfs);
    }
    onDestroy() {
      Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, Station.onConnection, Station.sfs);
      Station.sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, Station.onConnectionLost, Station.sfs);
      Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, Station.onLoginError, Station.sfs);
      Station.sfs.removeEventListener(SFS2X.SFSEvent.LOGIN, Station.onLogin, Station.sfs);
    }
    static onConnection(event) {
      if (event.success) {
        Station.sfs.send(new SFS2X.LoginRequest(Station.loginName));
      }
    }
    static onConnectionLost() {
      Laya.timer.once(5e3, Station.sfs, () => {
        Station.sfs.connect();
      });
    }
    static onLogin() {
    }
    static onLoginError(event) {
      Laya.timer.once(1e3 * 60, Station.sfs, () => {
        Station.sfs.send(new SFS2X.LoginRequest(Station.loginName));
      });
    }
    static getUserColor(user, roomVars = null) {
      if (roomVars == null) {
        roomVars = Station.sfs.lastJoinedRoom.getVariables();
      }
      for (let rvidx in roomVars) {
        let rv = roomVars[rvidx];
        if (rv.isNull) {
          continue;
        }
        if (rv.value != -1 && rv.value == user.id) {
          return rv.name;
        }
      }
      return null;
    }
    static getUserStateName(color, id) {
      return color + id;
    }
    static getOnlineUser(userId, users) {
      for (let i in users) {
        if (users[i].id == userId) {
          return users[i];
        }
      }
      return null;
    }
    static joinRoom(room = null) {
      if (room == null) {
        let rooms = Station.sfs.roomManager.getRoomList();
        room = rooms[0];
      }
      Station.sfs.send(new SFS2X.JoinRoomRequest(room));
    }
    static levelRoom() {
      Station.sfs.send(new SFS2X.LeaveRoomRequest(Station.sfs.lastJoinedRoom));
    }
    static setRoomVariables(roomVars) {
      Station.sfs.send(new SFS2X.SetRoomVariablesRequest(roomVars));
    }
    static getUserList() {
      return Station.sfs.lastJoinedRoom.getUserList();
    }
    static mySelfId() {
      return Station.sfs.mySelf.id;
    }
  };
  __name(Station, "Station");
  Station.config = [];
  Station.sfs = null;
  __decorateClass([
    property15(String)
  ], Station.prototype, "playerName", 2);
  __decorateClass([
    property15(String)
  ], Station.prototype, "host", 2);
  __decorateClass([
    property15(Number)
  ], Station.prototype, "port", 2);
  __decorateClass([
    property15(String)
  ], Station.prototype, "zone", 2);
  __decorateClass([
    property15(Boolean)
  ], Station.prototype, "debug", 2);
  Station = __decorateClass([
    regClass15("7e713f81-07d8-440c-a6dd-6f4538227cee", "../src/Station.ts")
  ], Station);

  // src/Engagement.ts
  var SFS2X2 = __toESM(require_sfs2x_api());
  var { regClass: regClass16, property: property16 } = Laya;
  var Engagement = class extends Laya.Script {
    constructor() {
      super();
      this.colorCheckBox = [];
      this.colorIdx = -1;
    }
    onAwake() {
      for (let idx in this.colorCheckBox) {
        this.colorCheckBox[idx].on(Laya.Event.CLICK, this, (event) => {
          for (let idx2 in this.colorCheckBox) {
            if (this.colorCheckBox[idx2].disabled) {
              continue;
            }
            this.colorCheckBox[idx2].selected = this.colorCheckBox[idx2] == event.target;
          }
          this.play.disabled = false;
          this.colorIdx = Number.parseInt(idx);
          let roomVars = [];
          if (this.colorIdx != -1) {
            roomVars.push(new SFS2X2.SFSRoomVariable(Config.Colors[this.colorIdx], -1));
          }
          roomVars.push(new SFS2X2.SFSRoomVariable(Config.Colors[this.colorIdx], Station.sfs.mySelf.id));
          Station.setRoomVariables(roomVars);
        });
      }
      this.closeBtn.on(Laya.Event.CLICK, this, () => {
        this.owner.event(Laya.Event.CLOSE);
      });
    }
    onStart() {
      this.addStationListener();
      Station.joinRoom();
    }
    onDestroy() {
      this.removeStationListener();
      Station.levelRoom();
    }
    addStationListener() {
      Station.sfs.addEventListener(SFS2X2.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
      Station.sfs.addEventListener(SFS2X2.SFSEvent.ROOM_JOIN, this.onRoomVariablesUpdate, this);
    }
    removeStationListener() {
      Station.sfs.removeEventListener(SFS2X2.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
      Station.sfs.removeEventListener(SFS2X2.SFSEvent.ROOM_JOIN, this.onRoomVariablesUpdate);
    }
    onPlay() {
      this.owner.event(Laya.Event.PLAYED, { "color": Config.Colors[this.colorIdx] });
    }
    onRoomVariablesUpdate(event) {
      let mySelfId = Station.mySelfId();
      let onlineUser = {};
      let roomVars = event.room.getVariables();
      let users = event.room.getUserList();
      for (let rvidx in roomVars) {
        let rv = roomVars[rvidx];
        if (rv.isNull) {
          continue;
        }
        if (rv.value != -1) {
          let user = Station.getOnlineUser(rv.value, users);
          if (user != null) {
            onlineUser[rv.name] = {
              "id": user.id,
              "selected": true,
              "disabled": user.id != mySelfId
            };
          }
        }
      }
      for (let checkBoxIdx in this.colorCheckBox) {
        let colorCheckBox = this.colorCheckBox[checkBoxIdx];
        let colorName = Config.Colors[checkBoxIdx];
        let userInfo = onlineUser[colorName];
        if (userInfo) {
          colorCheckBox.selected = userInfo.selected;
          colorCheckBox.disabled = userInfo.disabled;
        } else {
          colorCheckBox.selected = colorCheckBox.disabled = false;
        }
      }
    }
  };
  __name(Engagement, "Engagement");
  __decorateClass([
    property16(Laya.Button)
  ], Engagement.prototype, "closeBtn", 2);
  __decorateClass([
    property16(Laya.Button)
  ], Engagement.prototype, "play", 2);
  __decorateClass([
    property16([Laya.CheckBox])
  ], Engagement.prototype, "colorCheckBox", 2);
  Engagement = __decorateClass([
    regClass16("f32c4edf-6089-4ecb-bbcd-19da79e65ff7", "../src/Engagement.ts")
  ], Engagement);

  // src/Entry.ts
  var { regClass: regClass17, property: property17 } = Laya;
  var Entry = class extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    constructor() {
      super();
    }
  };
  __name(Entry, "Entry");
  Entry = __decorateClass([
    regClass17("e3ae5b8d-b787-4412-854b-2c694a132fb2", "../src/Entry.ts")
  ], Entry);

  // src/Extreme.ts
  var { regClass: regClass18, property: property18 } = Laya;
  var Extreme = class extends Performer {
    constructor() {
      super();
    }
    onAwake() {
      super.onAwake();
      this.owner.on(Event2.StateChange, this, this.onStateChange);
    }
    onStart() {
    }
    onStateChange() {
      let trade = this.player.trade.getComponent(Trade);
      trade.disabled(this.state != 1 /* Running */);
    }
    processEvent(inEvent) {
      switch (inEvent.event) {
        case Event2.RollStart: {
          this.player.trade.getComponent(Dice).roll();
          break;
        }
        case Event2.RollEnd: {
          this.currentDiceNumber = inEvent.num;
          this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this, this.onRollStop));
          break;
        }
        case Event2.Choose: {
          this.onChooseChesses(inEvent.name);
          break;
        }
        case Event2.Achieve: {
          this.owner.event(Event2.Achieve);
          break;
        }
        case Event2.Victory: {
          this.owner.event(Event2.Victory);
          break;
        }
      }
    }
    onChooseChesses(name) {
      let chesses = this.player.reckonChess(this.currentDiceNumber);
      this.player.stopChesses(chesses);
      this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult) => {
        this.stopChessDecuce(["kick"], deduceResult);
      }));
      for (let i = 0; i < chesses.length; ++i) {
        if (name == chesses[i].name) {
          this.onChooseChessesComplete(chesses[i]);
          break;
        }
      }
    }
    onAdvanceComplete(node) {
      let chess = node.getComponent(Chess);
    }
    onChooseChessesComplete(chess) {
      this.player.advance(chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
    }
    onRollStop() {
      this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);
      let chesses = this.player.reckonChess(this.currentDiceNumber);
      if (chesses.length > 0) {
        this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult) => {
          if (chesses.length == 1) {
            this.stopChessDecuce(["kick"], deduceResult);
          }
          this.onReckonChessComplete(chesses, Laya.Handler.create(this, this.onChooseChessesComplete));
        }));
      }
    }
    onReckonChessComplete(chesses, complete) {
      if (chesses.length == 1) {
        complete.runWith(chesses[0]);
      } else {
        this.player.hopChesses(chesses);
      }
    }
  };
  __name(Extreme, "Extreme");
  Extreme = __decorateClass([
    regClass18("054e9a6b-c8fa-4318-af0a-6684a99b4f50", "../src/Extreme.ts")
  ], Extreme);

  // src/Oneself.ts
  var { regClass: regClass19, property: property19 } = Laya;
  var Oneself = class extends Performer {
    constructor() {
      super();
      this.isAdvanceing = false;
    }
    onAwake() {
      super.onAwake();
      this.owner.on(Event2.StateChange, this, this.onStateChange);
    }
    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart() {
      this.player.trade.on(Laya.Event.CLICK, this, this.onClickTrade);
    }
    onStateChange(state) {
      let trade = this.player.trade.getComponent(Trade);
      if (this.state != 1 /* Running */) {
        trade.stop();
      } else {
        trade.becareful();
      }
      trade.disabled(this.state != 1 /* Running */);
    }
    onClickTrade() {
      if (this.state != 1 /* Running */ || this.isAdvanceing) {
        return;
      }
      this.isAdvanceing = true;
      this.owner.event(Event2.RollStart, this.owner);
      let trade = this.player.trade.getComponent(Trade);
      trade.stop();
      Laya.timer.once(100, this, () => {
        trade.roll();
        Laya.timer.once(900, this, this.onRollTimeout);
      });
    }
    onRollTimeout() {
      this.currentDiceNumber = Math.floor(Math.random() * 6);
      this.player.trade.getComponent(Dice).stop(Laya.Handler.create(this, this.onRollStop));
    }
    onRollStop() {
      this.owner.event(Event2.RollEnd, [this.currentDiceNumber]);
      this.player.trade.getComponent(Dice).setDiceNumber(this.currentDiceNumber);
      let chesses = this.player.reckonChess(this.currentDiceNumber);
      if (chesses.length > 0) {
        this.player.deduce(this.currentDiceNumber, chesses, Laya.Handler.create(this, (deduceResult) => {
          this.onReckonChessComplete(chesses, Laya.Handler.create(this, (chess) => {
            this.stopChessDecuce(["kick"], deduceResult);
            this.onChooseChessesComplete(chess);
          }));
        }));
      } else {
        this.isAdvanceing = false;
        this.owner.event(Event2.Achieve);
      }
    }
    onChooseChessesComplete(chess) {
      this.owner.event(Event2.Choose, [chess.name]);
      this.player.advance(chess, this.currentDiceNumber, Laya.Handler.create(this, this.onAdvanceComplete));
    }
    onAdvanceComplete(node) {
      this.isAdvanceing = false;
      let chess = node.getComponent(Chess);
      if (chess.hole == this.player.entry) {
        this.player.trade.getComponent(Trade).becareful();
        return;
      }
      this.owner.event(Event2.Achieve);
      if (this.player.isAllHome()) {
        this.owner.event(Event2.Victory);
      }
    }
    onReckonMultiChessComplete(chesses, complete) {
      let o = "chooseChess";
      for (let i = 0; i < chesses.length; ++i) {
        chesses[i].on(Laya.Event.CLICK, o, () => {
          this.player.stopChesses(chesses);
          for (let i2 = 0; i2 < chesses.length; ++i2) {
            chesses[i2].offAllCaller(o);
          }
          complete.runWith(chesses[i]);
        });
      }
      this.player.hopChesses(chesses);
    }
    onReckonChessComplete(chesses, complete) {
      if (chesses.length == 1) {
        complete.runWith(chesses[0]);
      } else {
        this.onReckonMultiChessComplete(chesses, complete);
      }
    }
    onDestroy() {
      this.player.trade.offAllCaller(this);
    }
  };
  __name(Oneself, "Oneself");
  Oneself = __decorateClass([
    regClass19("8803a688-3028-462c-83c9-bb52e00eb643", "../src/Oneself.ts")
  ], Oneself);

  // src/Room.ts
  var { regClass: regClass20, property: property20 } = Laya;
  var Room = class extends Laya.Script {
    constructor() {
      super();
      this.numberOfPlayer = 0;
      this.players = [];
      this.playerOrder = [];
      this.currentIdx = 0;
      this.isVictory = false;
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake() {
      this.redPlayer.visible = false;
      this.greenPlayer.visible = false;
      this.bluePlayer.visible = false;
      this.yellowPlayer.visible = false;
      this.initEventListener();
    }
    onStart() {
    }
    initEventListener() {
      this.redPlayer.on(Event2.Achieve, this, this.onPlayerAchieve);
      this.greenPlayer.on(Event2.Achieve, this, this.onPlayerAchieve);
      this.yellowPlayer.on(Event2.Achieve, this, this.onPlayerAchieve);
      this.bluePlayer.on(Event2.Achieve, this, this.onPlayerAchieve);
      this.redPlayer.on(Event2.Victory, this, this.onPlayerVictory);
      this.greenPlayer.on(Event2.Victory, this, this.onPlayerVictory);
      this.yellowPlayer.on(Event2.Victory, this, this.onPlayerVictory);
      this.bluePlayer.on(Event2.Victory, this, this.onPlayerVictory);
    }
    onPlayerVictory() {
      this.owner.event(Event2.Victory);
    }
    onPlayerAchieve() {
      this.owner.event(Event2.Achieve);
    }
    setPlayersToIdle() {
      this.players.map((node) => {
        node.getComponent(Performer).setState(0 /* Idle */);
      });
    }
    onVictory() {
      this.isVictory = true;
      this.setPlayersToIdle();
      Laya.SoundManager.playSound("sounds/win.mp3");
    }
    onAchieve() {
      if (this.isVictory) {
        this.setPlayersToIdle();
      } else {
        let current = this.players[this.playerOrder[this.currentIdx].id].getComponent(Performer);
        current.setState(0 /* Idle */);
        if (this.currentIdx == this.playerOrder.length - 1) {
          this.currentIdx = 0;
        } else {
          this.currentIdx++;
        }
        let next = this.players[this.playerOrder[this.currentIdx].id].getComponent(Performer);
        next.setState(1 /* Running */);
      }
    }
    getPlayerOrderIndex(color, player) {
      let idx = 0;
      let ids = Object.keys(this.players);
      ;
      for (let i = 0; i < ids.length; ++i) {
        let id = Number.parseInt(ids[i]);
        if (this.players[id] == player) {
          idx = this.playerOrder.findIndex((order) => {
            return order.color == color;
          });
          break;
        }
      }
      return idx;
    }
    startGame(color) {
      let player = this.getPlayer(color);
      this.currentIdx = this.getPlayerOrderIndex(color, player);
      for (let i = 0; i < this.playerOrder.length; ++i) {
        let performer = this.players[this.playerOrder[i].id].getComponent(Performer);
        if (i == this.currentIdx) {
          performer.setState(1 /* Running */);
        } else {
          performer.setState(0 /* Idle */);
        }
      }
    }
    getPlayer(color) {
      let player = null;
      switch (color) {
        case "red": {
          player = this.redPlayer;
          break;
        }
        case "blue": {
          player = this.bluePlayer;
          break;
        }
        case "yellow": {
          player = this.yellowPlayer;
          break;
        }
        case "green": {
          player = this.greenPlayer;
          break;
        }
      }
      return player;
    }
    addPlayer(color, type, profile) {
      let player = this.getPlayer(color);
      if (player == null) {
        return;
      }
      this.players[profile.id] = player;
      this.playerOrder.push({ "id": profile.id, "color": color });
      switch (type) {
        case 2 /* Oneself */: {
          player.addComponentInstance(new Oneself());
          break;
        }
        case 0 /* Extreme */: {
          player.addComponentInstance(new Extreme());
          break;
        }
        case 1 /* Computer */: {
          player.addComponentInstance(new Computer());
          break;
        }
      }
      return player;
    }
  };
  __name(Room, "Room");
  __decorateClass([
    property20(Laya.Sprite)
  ], Room.prototype, "redPlayer", 2);
  __decorateClass([
    property20(Laya.Sprite)
  ], Room.prototype, "greenPlayer", 2);
  __decorateClass([
    property20(Laya.Sprite)
  ], Room.prototype, "bluePlayer", 2);
  __decorateClass([
    property20(Laya.Sprite)
  ], Room.prototype, "yellowPlayer", 2);
  Room = __decorateClass([
    regClass20("fed491b4-6b8a-46f9-8167-977c47e8a79b", "../src/Room.ts")
  ], Room);

  // src/Online.ts
  var SFS2X3 = __toESM(require_sfs2x_api());
  var { regClass: regClass21, property: property21, SoundManager: SoundManager6 } = Laya;
  var Online = class extends Laya.Script {
    constructor(param) {
      super();
      this.param = param;
      this.addStationListener();
    }
    onAwake() {
      this.room = this.owner.getComponent(Room);
    }
    playerColorFind(colorName) {
      let playerIdx = this.room.playerOrder.findIndex((order) => {
        return order.color === colorName;
      });
      return playerIdx != -1;
    }
    onStart() {
      let idx = Config.Colors.findIndex((colorName) => {
        return this.playerColorFind(colorName);
      });
      if (idx != -1) {
        this.room.startGame(Config.Colors[idx]);
      }
    }
    onDestroy() {
      Station.levelRoom();
      this.removeStationListener();
    }
    addStationListener() {
      Station.sfs.addEventListener(SFS2X3.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
      Station.sfs.addEventListener(SFS2X3.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
    }
    removeStationListener() {
      Station.sfs.removeEventListener(SFS2X3.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);
      Station.sfs.removeEventListener(SFS2X3.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
    }
    onUserExitRoom(inEvent) {
      Laya.Scene.open("dialog/exitroom.lh", false, null, Laya.Handler.create(this, (dlg) => {
        let view = dlg.getChildByName("view");
        view.getChildByName("okay").on(Laya.Event.CLICK, this, () => {
          dlg.close();
          Laya.Scene.open("menu.ls");
        });
      }));
      this.room.setPlayersToIdle();
      this.removeStationListener();
    }
    onPublicMessage(inEvent) {
      let event = JSON.parse(inEvent.message);
      switch (event.event) {
        case Event2.Achieve: {
          this.room.onAchieve();
          break;
        }
        case Event2.Victory: {
          this.room.onVictory();
          break;
        }
        default: {
          if (!inEvent.sender.isItMe) {
            let player = this.room.players[inEvent.sender.id];
            if (player != null) {
              player.getComponent(Extreme).processEvent(event);
            }
          }
        }
      }
    }
  };
  __name(Online, "Online");
  Online = __decorateClass([
    regClass21("5cbe8df7-2989-4a1c-91eb-0242529c5c83", "../src/Online.ts")
  ], Online);

  // src/Local.ts
  var { regClass: regClass22, property: property22 } = Laya;
  var Local = class extends Laya.Script {
    constructor(param) {
      super();
      this.param = param;
    }
    onAwake() {
      this.room = this.owner.getComponent(Room);
      this.owner.on(Event2.Achieve, this.room, this.room.onAchieve);
      this.owner.on(Event2.Victory, this.room, this.room.onVictory);
    }
    onStart() {
      this.room.startGame(this.param.color);
    }
    onDestroy() {
    }
  };
  __name(Local, "Local");
  Local = __decorateClass([
    regClass22("ed19b477-e87e-4df5-8fdf-ff8ce928ab06", "../src/Local.ts")
  ], Local);

  // src/Sender.ts
  var SFS2X4 = __toESM(require_sfs2x_api());
  var { regClass: regClass23, property: property23 } = Laya;
  var Sender = class extends Laya.Script {
    constructor() {
      super();
    }
    onAwake() {
      this.owner.on(Event2.RollStart, this, this.onRollStart);
      this.owner.on(Event2.RollEnd, this, this.onRollEnd);
      this.owner.on(Event2.Choose, this, this.onChoose);
      this.owner.on(Event2.Achieve, this, this.onAchieve);
      this.owner.on(Event2.Victory, this, this.onVictory);
    }
    onAchieve() {
      let event = {
        "event": Event2.Achieve
      };
      Station.sfs.send(new SFS2X4.PublicMessageRequest(JSON.stringify(event)));
    }
    onVictory() {
      let event = {
        "event": Event2.Victory
      };
      Station.sfs.send(new SFS2X4.PublicMessageRequest(JSON.stringify(event)));
    }
    onChoose(name) {
      let event = {
        "event": Event2.Choose,
        "name": name
      };
      Station.sfs.send(new SFS2X4.PublicMessageRequest(JSON.stringify(event)));
    }
    onRollEnd(num) {
      let event = {
        "event": Event2.RollEnd,
        "num": num
      };
      Station.sfs.send(new SFS2X4.PublicMessageRequest(JSON.stringify(event)));
    }
    onRollStart() {
      let event = {
        "event": Event2.RollStart
      };
      Station.sfs.send(new SFS2X4.PublicMessageRequest(JSON.stringify(event)));
    }
  };
  __name(Sender, "Sender");
  Sender = __decorateClass([
    regClass23("6390de23-70be-4e01-af2f-17838191304f", "../src/Sender.ts")
  ], Sender);

  // src/Game.ts
  var { regClass: regClass24, property: property24 } = Laya;
  var Game = class extends Laya.Scene {
    constructor() {
      super();
    }
    onAwake() {
      this.room = this.getComponent(Room);
    }
    onOpened(param) {
      if (param && param.type == "extreme") {
        this.challengeExtreme(param);
      } else {
        this.challengeComputer(param);
      }
      Laya.SoundManager.stopMusic();
    }
    challengeExtreme(param) {
      this.room.numberOfPlayer = param.number;
      let users = Station.getUserList();
      for (let i = 0; i < users.length; ++i) {
        let color = Station.getUserColor(users[i]);
        let type = users[i].isItMe ? 2 /* Oneself */ : 0 /* Extreme */;
        let player = this.room.addPlayer(color, type, {
          "id": users[i].id,
          "name": users[i].name,
          "avatar": ""
        });
        if (users[i].isItMe) {
          player.addComponentInstance(new Sender());
        }
      }
      this.addComponentInstance(new Online(param));
    }
    challengeComputer(param) {
      this.room.numberOfPlayer = param && param.number ? param.number : 2;
      this.addComponentInstance(new Local(param));
      this.room.addPlayer(param.color, 2 /* Oneself */, {
        "id": 0,
        "name": "Oneself",
        "avatar": ""
      });
      let colors = JSON.parse(JSON.stringify(Config.Colors));
      let idx = colors.indexOf(param.color);
      let num = Math.min(this.room.numberOfPlayer - 1, 3);
      if (num == 1) {
        idx = idx % 2 == 0 ? idx == 0 ? 2 : 0 : idx == 1 ? 3 : 1;
        this.addComputerPlayer(colors[idx], 1);
      } else {
        colors.splice(idx, 1);
        for (let i = 0; i < num; ++i) {
          this.addComputerPlayer(colors[i], i + 1);
        }
      }
    }
    addComputerPlayer(color, id) {
      this.room.addPlayer(color, 1 /* Computer */, {
        "id": id,
        "name": "Computer",
        "avatar": ""
      });
    }
  };
  __name(Game, "Game");
  Game = __decorateClass([
    regClass24("8c577d42-46cc-4475-a29f-579458d7564e", "../src/Game.ts")
  ], Game);

  // src/GameToolbar.ts
  var { regClass: regClass25, property: property25, SoundManager: SoundManager7 } = Laya;
  var GameToolbar = class extends Laya.Script {
    constructor() {
      super();
    }
    onAwake() {
      this.backButton.on(Laya.Event.CLICK, this, () => {
        let owner = this.owner;
        Laya.Scene.open("dialog/endgame.lh", false, null, Laya.Handler.create(this, (dlg) => {
          let view = dlg.getChildByName("view");
          view.getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
          view.getChildByName("okay").on(Laya.Event.CLICK, this, () => {
            dlg.close();
            Laya.Scene.open("menu.ls");
          });
        }));
      });
    }
  };
  __name(GameToolbar, "GameToolbar");
  __decorateClass([
    property25(Laya.Sprite)
  ], GameToolbar.prototype, "backButton", 2);
  GameToolbar = __decorateClass([
    regClass25("2eaec3fb-1805-4cbc-89c7-008aa7b68c01", "../src/GameToolbar.ts")
  ], GameToolbar);

  // src/Groove.ts
  var { regClass: regClass26, property: property26 } = Laya;
  var Groove = class extends Laya.Script {
    constructor() {
      super();
    }
    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    onDisable() {
    }
  };
  __name(Groove, "Groove");
  Groove = __decorateClass([
    regClass26("9423b787-8e07-485d-bf20-a0797b54ba35", "../src/Groove.ts")
  ], Groove);

  // src/Lunch.ts
  var { regClass: regClass27, property: property27 } = Laya;
  var Lunch = class extends Laya.Script {
    onStart() {
    }
  };
  __name(Lunch, "Lunch");
  Lunch = __decorateClass([
    regClass27("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Lunch.ts")
  ], Lunch);

  // src/OnlineParallel.ts
  var SFS2X5 = __toESM(require_sfs2x_api());
  var { regClass: regClass28, property: property28 } = Laya;
  var OnlineParallel = class extends Laya.Script {
    constructor() {
      super();
      this.colorIdx = -1;
      this.numberOfPlayer = 2;
    }
    onAwake() {
      let parallel = this.owner.getComponent(Parallel);
      parallel.play4pBtn.disabled = true;
      parallel.play.on(Laya.Event.CLICK, this, this.onPlay);
      parallel.closeBtn.on(Laya.Event.CLICK, this, () => {
        Station.levelRoom();
        this.owner.event(Laya.Event.CLOSE);
        this.owner.removeSelf();
      });
      for (let idx in parallel.colorCheckBox) {
        parallel.colorCheckBox[idx].on(Laya.Event.CLICK, this, () => {
          parallel.play.disabled = false;
          this.colorIdx = Number.parseInt(idx);
        });
      }
    }
    onStart() {
      this.addStationListener();
    }
    onDestroy() {
      this.removeStationListener();
    }
    addStationListener() {
      Station.sfs.addEventListener(SFS2X5.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
    removeStationListener() {
      Station.sfs.removeEventListener(SFS2X5.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
    }
    onExtensionResponse(evtParams) {
      if (evtParams.cmd == "Challenge") {
        let responseParams = evtParams.params;
        let roomId = responseParams.get("RoomId");
        this.owner.event(Laya.Event.PLAYED, [Config.Colors[this.colorIdx], roomId]);
      }
    }
    onPlay() {
      var params = new SFS2X5.SFSObject();
      params.putUtfString("Color", Config.Colors[this.colorIdx]);
      params.putInt("MaxUsers", 2);
      Station.sfs.send(new SFS2X5.ExtensionRequest("Challenge", params));
    }
  };
  __name(OnlineParallel, "OnlineParallel");
  OnlineParallel = __decorateClass([
    regClass28("ed529f9a-99b9-4ca5-9c9f-f8dc68b088a5", "../src/OnlineParallel.ts")
  ], OnlineParallel);

  // src/Menu.ts
  var { regClass: regClass29, property: property29, SoundManager: SoundManager8 } = Laya;
  var Menu = class extends Laya.Script {
    constructor() {
      super();
    }
    onAwake() {
      this.challengeComputer.on(Laya.Event.CLICK, this, this.onChallengeComputer);
      this.challengeExtreme.on(Laya.Event.CLICK, this, this.onChallengeExtreme);
      this.challengeFriend.on(Laya.Event.CLICK, this, this.onChallengeFriend);
      this.settings.on(Laya.Event.CLICK, this, this.onSettings);
    }
    onStart() {
      Laya.SoundManager.musicMuted = Laya.LocalStorage.getItem("musicMuted") == "on";
      Laya.SoundManager.soundMuted = Laya.LocalStorage.getItem("soundMuted") == "on";
      SoundManager8.playMusic("sounds/menu.mp3", 0);
    }
    onChallengeFriend() {
      Laya.Scene.open("dialog/createroom.lh", false, null, Laya.Handler.create(this, (dlg) => {
        dlg.getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
      }));
    }
    onChallengeComputer() {
      this.openParallelDlg(Laya.Handler.create(this, (dlg) => {
        dlg.addComponentInstance(new ComputerParallel());
        dlg.on(Laya.Event.PLAYED, this, (color, num) => {
          dlg.close();
          Laya.Scene.open("game.ls", true, { "type": "computer", "color": color, "number": num });
        });
      }));
    }
    onChallengeExtreme() {
      this.openParallelDlg(Laya.Handler.create(this, (dlg) => {
        dlg.addComponentInstance(new OnlineParallel());
        dlg.on(Laya.Event.PLAYED, this, (color, roomId) => {
          dlg.close();
          dlg.removeSelf();
          Laya.Scene.open("partner.ls", true, { "color": color, "roomId": roomId });
        });
        dlg.on(Laya.Event.CLOSE, dlg, dlg.close);
      }));
    }
    openParallelDlg(complete) {
      Laya.Scene.open("dialog/parallel.lh", false, null, complete);
    }
    onSettings() {
      Laya.Scene.open("dialog/settings.lh", false, null, Laya.Handler.create(this, (dlg) => {
        dlg.getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
      }));
    }
  };
  __name(Menu, "Menu");
  __decorateClass([
    property29(Laya.Button)
  ], Menu.prototype, "challengeComputer", 2);
  __decorateClass([
    property29(Laya.Button)
  ], Menu.prototype, "challengeExtreme", 2);
  __decorateClass([
    property29(Laya.Button)
  ], Menu.prototype, "challengeFriend", 2);
  __decorateClass([
    property29(Laya.Button)
  ], Menu.prototype, "settings", 2);
  __decorateClass([
    property29(Laya.Prefab)
  ], Menu.prototype, "parallel", 2);
  Menu = __decorateClass([
    regClass29("02f796be-4a4d-47b6-85e5-393116d386f4", "../src/Menu.ts")
  ], Menu);

  // src/Partner.ts
  var SFS2X6 = __toESM(require_sfs2x_api());
  var { regClass: regClass30, property: property30, SoundManager: SoundManager9 } = Laya;
  var Pariner = class extends Laya.Scene {
    constructor() {
      super(...arguments);
      this.numberOfPlayer = 2;
    }
    onAwake() {
      this.getChildByName("return").on(Laya.Event.CLICK, this, () => {
        Laya.Scene.open("dialog/endgame.lh", false, null, Laya.Handler.create(this, (dlg) => {
          let view = dlg.getChildByName("view");
          view.getChildByName("okay").on(Laya.Event.CLICK, this, () => {
            dlg.close();
            Station.levelRoom();
            Laya.Scene.open("menu.ls");
          });
          view.getChildByName("return").on(Laya.Event.CLICK, dlg, dlg.close);
        }));
      });
      this.addStationListener();
    }
    onDestroy() {
      this.removeStationListener();
    }
    onOpened(param) {
      this.color = param.color;
      let room = Station.sfs.getRoomById(param.roomId);
      Station.joinRoom(room);
    }
    addStationListener() {
      Station.sfs.addEventListener(SFS2X6.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate, this);
      Station.sfs.addEventListener(SFS2X6.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
    }
    removeStationListener() {
      Station.sfs.removeEventListener(SFS2X6.SFSEvent.ROOM_VARIABLES_UPDATE, this.onRoomVariablesUpdate);
      Station.sfs.removeEventListener(SFS2X6.SFSEvent.ROOM_JOIN, this.onRoomJoin);
    }
    onRoomJoin(event) {
      this.numberOfPlayer = Station.sfs.lastJoinedRoom.getVariable("MaxUsers").value;
      let stateName = Station.getUserStateName(this.color, Station.mySelfId());
      let roomVars = new SFS2X6.SFSRoomVariable(stateName, "ready");
      Station.setRoomVariables([roomVars]);
    }
    onRoomVariablesUpdate(event) {
      let users = event.room.getUserList();
      if (users.length == this.numberOfPlayer) {
        let cnt = 0;
        let roomVars = event.room.getVariables();
        for (let i in users) {
          let user = users[i];
          let color = Station.getUserColor(user, roomVars);
          let stateName = Station.getUserStateName(color, user.id);
          if (event.room.containsVariable(stateName)) {
            cnt++;
          }
        }
        if (cnt == users.length) {
          Laya.Scene.open("game.ls", true, { "type": "extreme", "number": this.numberOfPlayer });
        }
      }
    }
  };
  __name(Pariner, "Pariner");
  Pariner = __decorateClass([
    regClass30("9f1fc9b7-ce57-4d73-9d43-44bf875415bb", "../src/Partner.ts")
  ], Pariner);

  // src/Settings.ts
  var { regClass: regClass31, property: property31 } = Laya;
  var Settings = class extends Laya.Script {
    constructor() {
      super();
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake() {
      this.musicMuted.on(Laya.Event.CLICK, this, () => {
        Laya.SoundManager.musicMuted = this.musicMuted.selected;
        Laya.SoundManager.playMusic("sounds/menu.mp3", 0);
        Laya.LocalStorage.setItem("musicMuted", this.musicMuted.selected ? "on" : "off");
      });
      this.soundMuted.on(Laya.Event.CLICK, this, () => {
        Laya.SoundManager.soundMuted = this.soundMuted.selected;
        Laya.LocalStorage.setItem("soundMuted", this.soundMuted.selected ? "on" : "off");
      });
      this.musicMuted.selected = Laya.LocalStorage.getItem("musicMuted") == "on";
      this.soundMuted.selected = Laya.LocalStorage.getItem("soundMuted") == "on";
    }
  };
  __name(Settings, "Settings");
  __decorateClass([
    property31(Laya.CheckBox)
  ], Settings.prototype, "musicMuted", 2);
  __decorateClass([
    property31(Laya.CheckBox)
  ], Settings.prototype, "soundMuted", 2);
  Settings = __decorateClass([
    regClass31("a0857e55-7637-4bff-adf2-8d5101717b23", "../src/Settings.ts")
  ], Settings);

  // src/Shelve.ts
  var SFS2X7 = __toESM(require_sfs2x_api());
  var { regClass: regClass32, property: property32 } = Laya;
  var Shelve = class extends Laya.Script {
    constructor() {
      super();
    }
    onAwake() {
      this.addStationListener();
    }
    onDestroy() {
      this.removeStationListener();
    }
    addStationListener() {
      Station.sfs.addEventListener(SFS2X7.SFSEvent.INVITATION, this.onInvitationReceived, this);
    }
    removeStationListener() {
      Station.sfs.removeEventListener(SFS2X7.SFSEvent.PUBLIC_MESSAGE, this.onInvitationReceived, this);
    }
    onAcceptInvitaion(evtParams) {
      Laya.Scene.open("dialog/engagement.lh", false, null, Laya.Handler.create(this, (dlg) => {
        dlg.on(Laya.Event.PLAYED, this, (color) => {
          dlg.close();
          dlg.removeSelf();
          let roomId = evtParams.params.get("RoomId");
          Laya.Scene.open("partner.ls", true, { "color": color, "roomId": roomId });
        });
        dlg.on(Laya.Event.CLOSE, this, () => {
          dlg.close();
        });
      }));
    }
    onInvitationReceived(evtParams) {
      Laya.Scene.open("dialog/invite.lh", false, null, Laya.Handler.create(this, (dlg) => {
        let view = dlg.getChildByName("view");
        view.getChildByName("return").on(Laya.Event.CLICK, this, () => {
          dlg.close();
          Station.sfs.send(new SFS2X7.InvitationReplyRequest(evtParams.invitation, SFS2X7.InvitationReply.REFUSE));
        });
        view.getChildByName("okay").on(Laya.Event.CLICK, this, () => {
          dlg.close();
          Station.sfs.send(new SFS2X7.InvitationReplyRequest(evtParams.invitation, SFS2X7.InvitationReply.ACCEPT));
          this.onAcceptInvitaion(evtParams);
        });
      }));
    }
  };
  __name(Shelve, "Shelve");
  Shelve = __decorateClass([
    regClass32("29c2dcf8-e04c-4052-8f49-3bc9f10e9645", "../src/Shelve.ts")
  ], Shelve);
})();
/*! Bundled license information:

sfs2x-api/sfs2x-api.js:
  (*!
   * SmartFoxServer 2X HTML5/JavaScript API v1.7.20
   * (c) gotoAndPlay | All rights reserved
   * http://www.smartfoxserver.com
   *)
  (** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License *)
*/
//# sourceMappingURL=bundle.js.map
